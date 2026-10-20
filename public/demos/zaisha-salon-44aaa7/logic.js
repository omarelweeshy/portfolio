/* Zaisha Salon concept demo: pure booking logic (classic script, no DOM access).
 * Exposes globalThis.DemoLogic = { validateEnquiry, buildEnquiry, toCsv, ... }. */
(function () {
  'use strict';

  var SERVICES = {
    'haircut': { en: 'Haircut', ar: 'قص الشعر' },
    'hair-colour': { en: 'Hair colour', ar: 'صبغة الشعر' },
    'hair-treatment': { en: 'Hair treatment', ar: 'علاج الشعر' },
    'blow-dry': { en: 'Blow-dry', ar: 'تسشوار' },
    'makeup': { en: 'Makeup', ar: 'مكياج' },
    'nails': { en: 'Nails', ar: 'العناية بالأظافر' },
    'facial': { en: 'Facial', ar: 'تنظيف البشرة' },
    'bridal': { en: 'Bridal package', ar: 'باقة العروس' }
  };

  // Real branch names are not confirmed, so these are sample placeholders.
  var BRANCHES = {
    'branch-1': { en: 'Riyadh branch 1 (sample)', ar: 'فرع الرياض 1 (مثال)' },
    'branch-2': { en: 'Riyadh branch 2 (sample)', ar: 'فرع الرياض 2 (مثال)' },
    'branch-3': { en: 'Riyadh branch 3 (sample)', ar: 'فرع الرياض 3 (مثال)' }
  };

  var CONTACTS = ['whatsapp', 'call'];
  var LANGS = ['en', 'ar'];
  var STATUSES = ['new', 'quoted', 'won', 'lost'];
  var PHOTO_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'heic'];

  var NAME_MIN = 2;
  var NAME_MAX = 60;
  var NOTES_MAX = 500;
  var PHOTO_MAX = 120;
  var BOOKING_WINDOW_DAYS = 90;
  var OPEN_MINUTES = 10 * 60;        // first slot 10:00
  var LAST_SLOT_MINUTES = 21 * 60 + 30; // last slot 21:30

  var CSV_COLUMNS = ['id', 'createdAt', 'status', 'name', 'phone', 'service', 'branch',
    'date', 'time', 'contact', 'notes', 'photoName', 'lang'];

  function has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  function str(value) {
    return value === undefined || value === null ? '' : String(value);
  }

  function read(input, field) {
    return input && typeof input === 'object' ? str(input[field]).trim() : '';
  }

  /** Returns the phone as 9665XXXXXXXX, or null if it is not a Saudi mobile number. */
  function normalisePhone(raw) {
    var digits = str(raw)
      .replace(/[٠-٩]/g, function (d) { return String(d.charCodeAt(0) - 0x0660); })
      .replace(/[۰-۹]/g, function (d) { return String(d.charCodeAt(0) - 0x06F0); })
      .replace(/[\s\-()]/g, '');
    var m = /^(?:\+966|00966|966|0)?(5\d{8})$/.exec(digits);
    return m ? '966' + m[1] : null;
  }

  /** Parses YYYY-MM-DD into a local Date at midnight, or null if not a real calendar date. */
  function parseDate(value) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    if (!m) return null;
    var y = Number(m[1]);
    var mo = Number(m[2]);
    var d = Number(m[3]);
    var date = new Date(y, mo - 1, d);
    if (date.getFullYear() !== y || date.getMonth() !== mo - 1 || date.getDate() !== d) return null;
    return date;
  }

  function baseName(path) {
    var parts = str(path).split(/[\\/]/);
    return parts[parts.length - 1].trim();
  }

  function validateEnquiry(input, now) {
    var ref = now instanceof Date && !isNaN(now.getTime()) ? now : new Date();
    var errors = {};

    var name = read(input, 'name');
    if (!name) errors.name = 'required';
    else if (name.length < NAME_MIN) errors.name = 'invalid';
    else if (name.length > NAME_MAX) errors.name = 'too_long';

    var phone = read(input, 'phone');
    if (!phone) errors.phone = 'required';
    else if (!normalisePhone(phone)) errors.phone = 'invalid';

    var service = read(input, 'service');
    if (!service) errors.service = 'required';
    else if (!has(SERVICES, service)) errors.service = 'invalid';

    var branch = read(input, 'branch');
    if (!branch) errors.branch = 'required';
    else if (!has(BRANCHES, branch)) errors.branch = 'invalid';

    var dateStr = read(input, 'date');
    var date = null;
    if (!dateStr) {
      errors.date = 'required';
    } else {
      date = parseDate(dateStr);
      if (!date) {
        errors.date = 'invalid';
      } else {
        var today = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate());
        var lastDay = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate() + BOOKING_WINDOW_DAYS);
        if (date < today) errors.date = 'past';
        else if (date > lastDay) errors.date = 'too_far';
      }
    }

    var timeStr = read(input, 'time');
    var minutes = null;
    if (!timeStr) {
      errors.time = 'required';
    } else {
      var t = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(timeStr);
      if (!t || (t[2] !== '00' && t[2] !== '30')) {
        errors.time = 'invalid';
      } else {
        minutes = Number(t[1]) * 60 + Number(t[2]);
        if (minutes < OPEN_MINUTES || minutes > LAST_SLOT_MINUTES) errors.time = 'closed';
      }
    }

    if (date && !errors.date && minutes !== null && !errors.time) {
      var slot = new Date(date.getFullYear(), date.getMonth(), date.getDate(),
        Math.floor(minutes / 60), minutes % 60);
      if (slot.getTime() <= ref.getTime()) errors.time = 'past';
    }

    var contact = read(input, 'contact');
    if (!contact) errors.contact = 'required';
    else if (CONTACTS.indexOf(contact) === -1) errors.contact = 'invalid';

    if (read(input, 'notes').length > NOTES_MAX) errors.notes = 'too_long';

    var photoName = baseName(read(input, 'photoName'));
    if (photoName) {
      var dot = photoName.lastIndexOf('.');
      var ext = dot > 0 ? photoName.slice(dot + 1).toLowerCase() : '';
      if (photoName.length > PHOTO_MAX) errors.photoName = 'too_long';
      else if (PHOTO_EXTENSIONS.indexOf(ext) === -1) errors.photoName = 'invalid';
    }

    var lang = read(input, 'lang');
    if (lang && LANGS.indexOf(lang) === -1) errors.lang = 'invalid';

    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  var ID_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var issuedIds = {};

  function randomIndex(max) {
    var c = globalThis.crypto;
    if (c && typeof c.getRandomValues === 'function') {
      var buf = new Uint32Array(1);
      c.getRandomValues(buf);
      return buf[0] % max;
    }
    return Math.floor(Math.random() * max);
  }

  function newId() {
    var id;
    do {
      id = 'ZS-';
      for (var i = 0; i < 6; i++) id += ID_CHARS.charAt(randomIndex(ID_CHARS.length));
    } while (has(issuedIds, id));
    issuedIds[id] = true;
    return id;
  }

  function confirmationMessage(rec) {
    var service = SERVICES[rec.service][rec.lang];
    var branch = BRANCHES[rec.branch][rec.lang];
    if (rec.lang === 'ar') {
      return 'مرحباً ' + rec.name + '، تم استلام طلب حجزك في صالون زيشا.\n' +
        'رقم الحجز: ' + rec.id + '\n' +
        'الخدمة: ' + service + '\n' +
        'الفرع: ' + branch + '\n' +
        'الموعد: ' + rec.date + ' الساعة ' + rec.time + '\n' +
        'سنتواصل معك لتأكيد الموعد.';
    }
    return 'Hello ' + rec.name + ', your Zaisha Salon booking request is received.\n' +
      'Booking ref: ' + rec.id + '\n' +
      'Service: ' + service + '\n' +
      'Branch: ' + branch + '\n' +
      'When: ' + rec.date + ' at ' + rec.time + '\n' +
      'We will be in touch to confirm your appointment.';
  }

  function buildEnquiry(input, now) {
    var ref = now instanceof Date && !isNaN(now.getTime()) ? now : new Date();
    var result = validateEnquiry(input, ref);
    if (!result.valid) {
      var err = new Error('Invalid enquiry: ' + Object.keys(result.errors).map(function (k) {
        return k + '=' + result.errors[k];
      }).join(', '));
      err.errors = result.errors;
      throw err;
    }
    var record = {
      id: newId(),
      createdAt: ref.toISOString(),
      status: 'new',
      lang: read(input, 'lang') || 'en',
      name: read(input, 'name'),
      phone: normalisePhone(read(input, 'phone')),
      service: read(input, 'service'),
      branch: read(input, 'branch'),
      date: read(input, 'date'),
      time: read(input, 'time'),
      contact: read(input, 'contact'),
      notes: read(input, 'notes'),
      photoName: baseName(read(input, 'photoName')),
      waLink: ''
    };
    record.waLink = 'https://wa.me/' + record.phone + '?text=' + encodeURIComponent(confirmationMessage(record));
    return record;
  }

  function csvCell(value) {
    var s = str(value);
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
    if (/[",\r\n]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
    return s;
  }

  function toCsv(records) {
    var lines = [CSV_COLUMNS.join(',')];
    (Array.isArray(records) ? records : []).forEach(function (rec) {
      var row = rec && typeof rec === 'object' ? rec : {};
      lines.push(CSV_COLUMNS.map(function (col) { return csvCell(row[col]); }).join(','));
    });
    return lines.join('\r\n');
  }

  globalThis.DemoLogic = {
    validateEnquiry: validateEnquiry,
    buildEnquiry: buildEnquiry,
    toCsv: toCsv,
    normalisePhone: normalisePhone,
    SERVICES: SERVICES,
    BRANCHES: BRANCHES,
    CONTACTS: CONTACTS,
    STATUSES: STATUSES,
    BOOKING_WINDOW_DAYS: BOOKING_WINDOW_DAYS
  };
})();
