/*
 * Steps Rehabilitation Center concept demo: pure enquiry logic.
 * Classic script (no modules, no DOM). Sets globalThis.DemoLogic.
 */
(function (root) {
  'use strict';

  var THERAPIES = ['speech', 'occupational', 'behaviour', 'special-education', 'not-sure'];
  var CONTACT_METHODS = ['phone', 'whatsapp', 'email'];
  var CALLBACK_TIMES = ['morning', 'afternoon', 'evening'];
  var STATUSES = ['new', 'quoted', 'won', 'lost'];

  var THERAPY_LABELS = {
    speech: 'Speech & language therapy',
    occupational: 'Occupational therapy',
    behaviour: 'Behaviour therapy',
    'special-education': 'Special education',
    'not-sure': 'Not sure yet'
  };
  var CONTACT_LABELS = { phone: 'Phone call', 'whatsapp': 'WhatsApp', email: 'Email' };
  var CALLBACK_LABELS = {
    morning: 'Morning (8am to 12pm)',
    afternoon: 'Afternoon (12pm to 4pm)',
    evening: 'Evening (4pm to 7pm)'
  };
  var CALLBACK_LABELS_AR = { morning: 'الصباح', afternoon: 'بعد الظهر', evening: 'المساء' };

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_RE = /^\+?\d{8,15}$/;
  var PHOTO_EXT_RE = /\.(jpe?g|png|heic|webp|pdf)$/i;

  var CSV_COLUMNS = [
    'id', 'createdAt', 'status', 'parentName', 'childAge', 'therapy', 'area',
    'contactMethod', 'contactValue', 'callbackTime', 'photoName', 'description'
  ];

  function text(value) {
    return typeof value === 'string' ? value.trim() : '';
  }

  function has(list, value) {
    return list.indexOf(value) !== -1;
  }

  /* Returns the child's age as an integer, or null when it is not a whole number 0-18. */
  function parseAge(value) {
    var n;
    if (typeof value === 'number') {
      n = value;
    } else if (typeof value === 'string' && /^\d{1,2}$/.test(value.trim())) {
      n = Number(value.trim());
    } else {
      return null;
    }
    return Number.isInteger(n) && n >= 0 && n <= 18 ? n : null;
  }

  function isAgeMissing(value) {
    return value === undefined || value === null || (typeof value === 'string' && value.trim() === '');
  }

  function validateEnquiry(input) {
    var data = input && typeof input === 'object' ? input : {};
    var errors = {};

    var parentName = text(data.parentName);
    if (!parentName) {
      errors.parentName = 'Please enter your name.';
    } else if (parentName.length < 2 || parentName.length > 80) {
      errors.parentName = 'Your name should be between 2 and 80 characters.';
    }

    if (isAgeMissing(data.childAge)) {
      errors.childAge = "Please enter your child's age.";
    } else if (parseAge(data.childAge) === null) {
      errors.childAge = 'Please enter a whole number of years from 0 to 18.';
    }

    var therapy = text(data.therapy);
    if (!therapy) {
      errors.therapy = 'Please choose the kind of help you are looking for.';
    } else if (!has(THERAPIES, therapy)) {
      errors.therapy = 'Please choose one of the listed options.';
    }

    var description = text(data.description);
    if (description.length > 500) {
      errors.description = 'Please keep this note to 500 characters or fewer.';
    }

    var area = text(data.area);
    if (!area) {
      errors.area = 'Please enter your town or area.';
    } else if (area.length < 2 || area.length > 60) {
      errors.area = 'Your area should be between 2 and 60 characters.';
    }

    var contactMethod = text(data.contactMethod);
    if (!contactMethod) {
      errors.contactMethod = 'Please choose how we should contact you.';
    } else if (!has(CONTACT_METHODS, contactMethod)) {
      errors.contactMethod = 'Please choose phone, WhatsApp or email.';
    }

    var contactValue = text(data.contactValue);
    if (!contactValue) {
      errors.contactValue = contactMethod === 'email'
        ? 'Please enter your email address.'
        : 'Please enter your contact number or email.';
    } else if (contactMethod === 'email') {
      if (!EMAIL_RE.test(contactValue)) {
        errors.contactValue = 'Please enter a valid email address, for example name@example.com.';
      }
    } else if (contactMethod === 'phone' || contactMethod === 'whatsapp') {
      if (!PHONE_RE.test(contactValue.replace(/[\s\-()]/g, ''))) {
        errors.contactValue = 'Please enter a phone number of 8 to 15 digits (a leading + is fine).';
      }
    }

    var callbackTime = text(data.callbackTime);
    if (!callbackTime) {
      errors.callbackTime = 'Please choose a preferred callback time.';
    } else if (!has(CALLBACK_TIMES, callbackTime)) {
      errors.callbackTime = 'Please choose morning, afternoon or evening.';
    }

    var photoName = text(data.photoName);
    if (photoName) {
      if (photoName.length > 120) {
        errors.photoName = 'The file name should be 120 characters or fewer.';
      } else if (/[\/\\]/.test(photoName)) {
        errors.photoName = 'Please enter just the file name, without a folder path.';
      } else if (!PHOTO_EXT_RE.test(photoName)) {
        errors.photoName = 'Please use a photo or PDF name (.jpg, .jpeg, .png, .heic, .webp or .pdf).';
      }
    }

    if (data.consent !== true) {
      errors.consent = 'Please tick the box so we can contact you about this request.';
    }

    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  var lastId = '';

  function randomSuffix() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var out = '';
    var cryptoObj = root.crypto;
    var bytes = null;
    if (cryptoObj && typeof cryptoObj.getRandomValues === 'function') {
      bytes = cryptoObj.getRandomValues(new Uint8Array(4));
    }
    for (var i = 0; i < 4; i++) {
      var r = bytes ? bytes[i] % chars.length : Math.floor(Math.random() * chars.length);
      out += chars.charAt(r);
    }
    return out;
  }

  function generateId(date) {
    var y = String(date.getUTCFullYear());
    var m = String(date.getUTCMonth() + 1).padStart(2, '0');
    var d = String(date.getUTCDate()).padStart(2, '0');
    var id;
    do {
      id = 'STP-' + y + m + d + '-' + randomSuffix();
    } while (id === lastId);
    lastId = id;
    return id;
  }

  function buildAcknowledgement(record) {
    var en =
      'Dear ' + record.parentName + ',\n\n' +
      'Thank you for requesting an assessment with Steps Rehabilitation Center in Janabiya. ' +
      'Your reference number is ' + record.id + '.\n\n' +
      'A member of our team will contact you by ' + CONTACT_LABELS[record.contactMethod].toLowerCase() +
      ' in the ' + record.callbackTime + ' to arrange a convenient assessment time.\n\n' +
      'Kind regards,\nSteps Center team';
    var ar =
      'عزيزي ولي الأمر ' + record.parentName + '،\n\n' +
      'شكراً لطلبكم موعد تقييم لدى مركز ستيبس للتأهيل في الجنبية. ' +
      'رقم طلبكم المرجعي هو ' + record.id + '.\n\n' +
      'سيتواصل معكم أحد أعضاء فريقنا في فترة ' + CALLBACK_LABELS_AR[record.callbackTime] +
      ' لتحديد موعد مناسب للتقييم.\n\n' +
      'مع أطيب التحيات،\nفريق مركز ستيبس';
    return { en: en, ar: ar };
  }

  function buildEnquiry(input, options) {
    var result = validateEnquiry(input);
    if (!result.valid) {
      var err = new Error('Invalid enquiry: ' + Object.keys(result.errors).join(', '));
      err.errors = result.errors;
      throw err;
    }
    var opts = options || {};
    var now = opts.now instanceof Date && !isNaN(opts.now.getTime()) ? opts.now : new Date();
    var id = typeof opts.id === 'string' && opts.id ? opts.id : generateId(now);

    var record = {
      id: id,
      createdAt: now.toISOString(),
      status: 'new',
      parentName: text(input.parentName),
      childAge: parseAge(input.childAge),
      therapy: text(input.therapy),
      description: text(input.description),
      area: text(input.area),
      contactMethod: text(input.contactMethod),
      contactValue: text(input.contactValue),
      callbackTime: text(input.callbackTime),
      photoName: text(input.photoName),
      consent: true,
      acknowledgement: null
    };
    record.acknowledgement = buildAcknowledgement(record);
    return record;
  }

  function csvField(value) {
    if (value === undefined || value === null) return '';
    var s;
    if (typeof value === 'string') {
      s = /^[=+\-@\t\r]/.test(value) ? "'" + value : value;
    } else {
      s = String(value);
    }
    return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }

  function toCsv(records) {
    var lines = [CSV_COLUMNS.join(',')];
    (Array.isArray(records) ? records : []).forEach(function (rec) {
      var r = rec && typeof rec === 'object' ? rec : {};
      lines.push(CSV_COLUMNS.map(function (col) { return csvField(r[col]); }).join(','));
    });
    return lines.join('\r\n');
  }

  root.DemoLogic = {
    validateEnquiry: validateEnquiry,
    buildEnquiry: buildEnquiry,
    toCsv: toCsv,
    THERAPY_LABELS: THERAPY_LABELS,
    CONTACT_LABELS: CONTACT_LABELS,
    CALLBACK_LABELS: CALLBACK_LABELS,
    STATUSES: STATUSES
  };
})(globalThis);
