/* Alkhuzama home-visit booking concept demo: pure logic (no DOM, no storage).
 * Classic script: works in the browser via <script src> and in Node (dynamic import of this file).
 * Exposes globalThis.DemoLogic.
 */
(function () {
  'use strict';

  var SALON_WHATSAPP = '966500000000'; // sample placeholder number, not the salon's real number

  var STATUSES = ['new', 'quoted', 'won', 'lost'];

  var SERVICES = [
    { id: 'hair', en: 'Hair styling', ar: 'تصفيف الشعر' },
    { id: 'makeup', en: 'Makeup', ar: 'مكياج' },
    { id: 'bridal', en: 'Bridal package', ar: 'باقة العروس' },
    { id: 'henna', en: 'Henna', ar: 'حناء' },
    { id: 'nails', en: 'Manicure & pedicure', ar: 'مناكير وباديكير' },
    { id: 'skincare', en: 'Facial & skincare', ar: 'تنظيف البشرة والعناية' }
  ];

  var CITIES = [
    { id: 'riyadh', en: 'Riyadh', ar: 'الرياض' },
    { id: 'jeddah', en: 'Jeddah', ar: 'جدة' }
  ];

  var CONTACTS = ['whatsapp', 'call'];

  var CSV_COLUMNS = ['id', 'createdAt', 'status', 'name', 'service', 'city', 'district',
    'date', 'time', 'phone', 'contact', 'notes', 'photoName'];

  var PHONE_RE = /^(\+966|00966|966|0)?(5\d{8})$/;
  var DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
  var TIME_RE = /^([01]\d|2[0-3]):([0-5]\d)$/;
  var PHOTO_RE = /\.(jpe?g|png|webp|heic)$/i;

  var MESSAGES = {
    en: {
      nameRequired: 'Please enter your name.',
      nameLength: 'Name must be 2 to 60 characters.',
      serviceRequired: 'Please choose a service.',
      cityRequired: 'Please choose Riyadh or Jeddah.',
      districtRequired: 'Please enter your district.',
      districtLength: 'District must be 2 to 80 characters.',
      dateRequired: 'Please choose a preferred date.',
      dateInvalid: 'Please enter a valid date (YYYY-MM-DD).',
      datePast: 'The date cannot be in the past.',
      timeRequired: 'Please choose a preferred time.',
      timeInvalid: 'Please enter a valid time (HH:MM).',
      phoneRequired: 'Please enter your mobile number.',
      phoneInvalid: 'Enter a Saudi mobile number, e.g. 05X XXX XXXX.',
      contactRequired: 'Please choose how we should contact you.',
      notesLength: 'Notes can be at most 500 characters.',
      photoLength: 'File name can be at most 120 characters.',
      photoType: 'Photo must be a .jpg, .jpeg, .png, .webp or .heic file.'
    },
    ar: {
      nameRequired: 'يرجى إدخال الاسم.',
      nameLength: 'يجب أن يكون الاسم من 2 إلى 60 حرفًا.',
      serviceRequired: 'يرجى اختيار الخدمة.',
      cityRequired: 'يرجى اختيار الرياض أو جدة.',
      districtRequired: 'يرجى إدخال الحي.',
      districtLength: 'يجب أن يكون اسم الحي من 2 إلى 80 حرفًا.',
      dateRequired: 'يرجى اختيار التاريخ المفضل.',
      dateInvalid: 'يرجى إدخال تاريخ صحيح (YYYY-MM-DD).',
      datePast: 'لا يمكن اختيار تاريخ في الماضي.',
      timeRequired: 'يرجى اختيار الوقت المفضل.',
      timeInvalid: 'يرجى إدخال وقت صحيح (HH:MM).',
      phoneRequired: 'يرجى إدخال رقم الجوال.',
      phoneInvalid: 'أدخلي رقم جوال سعودي، مثل 05X XXX XXXX.',
      contactRequired: 'يرجى اختيار طريقة التواصل.',
      notesLength: 'الملاحظات بحد أقصى 500 حرف.',
      photoLength: 'اسم الملف بحد أقصى 120 حرفًا.',
      photoType: 'يجب أن تكون الصورة بصيغة jpg أو jpeg أو png أو webp أو heic.'
    }
  };

  function str(value) {
    return typeof value === 'string' ? value.trim() : '';
  }

  function hasId(list, id) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return true;
    }
    return false;
  }

  function findById(list, id) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }

  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function localDateString(date) {
    return date.getFullYear() + '-' + pad2(date.getMonth() + 1) + '-' + pad2(date.getDate());
  }

  function isRealDate(value) {
    var m = DATE_RE.exec(value);
    if (!m) return false;
    var y = Number(m[1]);
    var mo = Number(m[2]);
    var d = Number(m[3]);
    if (mo < 1 || mo > 12 || d < 1) return false;
    var daysInMonth = new Date(Date.UTC(y, mo, 0)).getUTCDate();
    return d <= daysInMonth;
  }

  function cleanPhone(value) {
    return str(value).replace(/[\s\-()]/g, '');
  }

  /** Returns the canonical +9665XXXXXXXX form, or null if not a Saudi mobile number. */
  function normalisePhone(value) {
    var m = PHONE_RE.exec(cleanPhone(value));
    return m ? '+966' + m[2] : null;
  }

  function validateEnquiry(input, options) {
    var src = input && typeof input === 'object' ? input : {};
    var opts = options || {};
    var now = opts.now instanceof Date && !isNaN(opts.now.getTime()) ? opts.now : new Date();
    var msg = MESSAGES[opts.lang] || MESSAGES.en;
    var errors = {};

    var name = str(src.name);
    if (!name) errors.name = msg.nameRequired;
    else if (name.length < 2 || name.length > 60) errors.name = msg.nameLength;

    if (!hasId(SERVICES, str(src.service))) errors.service = msg.serviceRequired;

    if (!hasId(CITIES, str(src.city))) errors.city = msg.cityRequired;

    var district = str(src.district);
    if (!district) errors.district = msg.districtRequired;
    else if (district.length < 2 || district.length > 80) errors.district = msg.districtLength;

    var date = str(src.date);
    if (!date) errors.date = msg.dateRequired;
    else if (!isRealDate(date)) errors.date = msg.dateInvalid;
    else if (date < localDateString(now)) errors.date = msg.datePast;

    var time = str(src.time);
    if (!time) errors.time = msg.timeRequired;
    else if (!TIME_RE.test(time)) errors.time = msg.timeInvalid;

    if (!str(src.phone)) errors.phone = msg.phoneRequired;
    else if (!normalisePhone(src.phone)) errors.phone = msg.phoneInvalid;

    if (CONTACTS.indexOf(str(src.contact)) === -1) errors.contact = msg.contactRequired;

    if (str(src.notes).length > 500) errors.notes = msg.notesLength;

    var photoName = str(src.photoName);
    if (photoName) {
      if (photoName.length > 120) errors.photoName = msg.photoLength;
      else if (!PHOTO_RE.test(photoName)) errors.photoName = msg.photoType;
    }

    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  var idCounter = 0;

  function generateId(now) {
    idCounter += 1;
    var random = Math.floor(Math.random() * 0x100000).toString(36);
    return 'enq-' + now.getTime().toString(36) + '-' + idCounter.toString(36) + '-' + random;
  }

  function buildEnquiry(input, options) {
    var opts = options || {};
    var result = validateEnquiry(input, opts);
    if (!result.valid) {
      throw new Error('Invalid enquiry: ' + Object.keys(result.errors).join(', '));
    }
    var now = opts.now instanceof Date && !isNaN(opts.now.getTime()) ? opts.now : new Date();
    var id = typeof opts.id === 'string' && opts.id ? opts.id : generateId(now);
    return {
      id: id,
      createdAt: now.toISOString(),
      status: 'new',
      name: str(input.name),
      service: str(input.service),
      city: str(input.city),
      district: str(input.district),
      date: str(input.date),
      time: str(input.time),
      phone: normalisePhone(input.phone),
      contact: str(input.contact),
      notes: str(input.notes),
      photoName: str(input.photoName)
    };
  }

  function csvCell(value) {
    if (value === null || value === undefined) return '';
    var text = String(value);
    if (/^[=+\-@\t\r]/.test(text)) text = "'" + text;
    if (/[",\r\n]/.test(text)) text = '"' + text.replace(/"/g, '""') + '"';
    return text;
  }

  function toCsv(enquiries) {
    var lines = [CSV_COLUMNS.join(',')];
    var list = Array.isArray(enquiries) ? enquiries : [];
    for (var i = 0; i < list.length; i++) {
      var rec = list[i] || {};
      var cells = [];
      for (var c = 0; c < CSV_COLUMNS.length; c++) cells.push(csvCell(rec[CSV_COLUMNS[c]]));
      lines.push(cells.join(','));
    }
    return lines.join('\r\n');
  }

  function sortNewestFirst(list) {
    var copy = Array.isArray(list) ? list.slice() : [];
    return copy.sort(function (a, b) {
      var ta = Date.parse(a && a.createdAt) || 0;
      var tb = Date.parse(b && b.createdAt) || 0;
      return tb - ta;
    });
  }

  function labelFor(list, id, lang) {
    var item = findById(list, id);
    if (!item) return id || '';
    return lang === 'ar' ? item.ar : item.en;
  }

  function whatsappUrl(enquiry) {
    var e = enquiry || {};
    var message = 'Hello Alkhuzama, I would like to confirm a home-visit booking.\n' +
      'Name: ' + (e.name || '') + '\n' +
      'Service: ' + labelFor(SERVICES, e.service, 'en') + '\n' +
      'City: ' + labelFor(CITIES, e.city, 'en') + '\n' +
      'District: ' + (e.district || '') + '\n' +
      'Date: ' + (e.date || '') + '\n' +
      'Time: ' + (e.time || '') + '\n' +
      'Phone: ' + (e.phone || '');
    return 'https://wa.me/' + SALON_WHATSAPP + '?text=' + encodeURIComponent(message);
  }

  globalThis.DemoLogic = {
    validateEnquiry: validateEnquiry,
    buildEnquiry: buildEnquiry,
    toCsv: toCsv,
    sortNewestFirst: sortNewestFirst,
    whatsappUrl: whatsappUrl,
    labelFor: labelFor,
    STATUSES: STATUSES,
    SERVICES: SERVICES,
    CITIES: CITIES,
    SALON_WHATSAPP: SALON_WHATSAPP
  };
})();
