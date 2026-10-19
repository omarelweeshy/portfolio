/*
 * Quality Decorating Ltd concept demo: pure form logic.
 * Classic script (no modules). Sets globalThis.DemoLogic.
 */
(function () {
  'use strict';

  var JOB_TYPES = [
    { value: 'interior-painting', label: 'Interior painting' },
    { value: 'exterior-painting', label: 'Exterior painting' },
    { value: 'roof-painting', label: 'Roof painting' },
    { value: 'wallpapering', label: 'Wallpapering' },
    { value: 'commercial', label: 'Commercial painting' },
    { value: 'other', label: 'Something else' }
  ];
  var JOB_TYPE_VALUES = JOB_TYPES.map(function (j) { return j.value; });
  var CONTACT_METHODS = ['phone', 'email', 'text'];
  var STATUSES = ['new', 'quoted', 'won', 'lost'];
  var CSV_COLUMNS = [
    'id', 'createdAt', 'status', 'name', 'phone', 'email', 'suburb',
    'jobType', 'description', 'preferredContact', 'photoName'
  ];
  var INPUT_FIELDS = [
    'name', 'phone', 'email', 'suburb', 'jobType',
    'description', 'preferredContact', 'photoName'
  ];

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_CHARS_RE = /^[0-9 +\-()]+$/;
  var PHOTO_EXT_RE = /\.(jpe?g|png|heic|webp|gif)$/i;

  function clean(value) {
    return typeof value === 'string' ? value.trim() : '';
  }

  function normalise(input) {
    var source = input !== null && typeof input === 'object' ? input : {};
    var out = {};
    INPUT_FIELDS.forEach(function (field) {
      out[field] = clean(source[field]);
    });
    return out;
  }

  function checkLength(value, min, max, label) {
    if (!value) return 'Please enter ' + label + '.';
    if (value.length < min) return 'Please enter at least ' + min + ' characters.';
    if (value.length > max) return 'Please keep this to ' + max + ' characters or fewer.';
    return '';
  }

  function validateEnquiry(input) {
    var v = normalise(input);
    var errors = {};
    var msg;

    msg = checkLength(v.name, 2, 80, 'your name');
    if (msg) errors.name = msg;

    var needsPhone = v.preferredContact === 'phone' || v.preferredContact === 'text';
    if (!v.phone) {
      if (needsPhone) errors.phone = 'Please enter a phone number so we can call or text you.';
    } else {
      var digits = v.phone.replace(/\D/g, '').length;
      if (!PHONE_CHARS_RE.test(v.phone) || digits < 7 || digits > 15) {
        errors.phone = 'Please enter a valid phone number, e.g. 021 123 4567.';
      }
    }

    if (!v.email) {
      if (v.preferredContact === 'email') errors.email = 'Please enter an email address so we can reply.';
    } else if (v.email.length > 254 || !EMAIL_RE.test(v.email)) {
      errors.email = 'Please enter a valid email address, e.g. name@example.co.nz.';
    }

    msg = checkLength(v.suburb, 2, 100, 'your suburb or address');
    if (msg) errors.suburb = msg;

    if (!v.jobType) {
      errors.jobType = 'Please choose the type of job.';
    } else if (JOB_TYPE_VALUES.indexOf(v.jobType) === -1) {
      errors.jobType = 'Please choose one of the listed job types.';
    }

    msg = checkLength(v.description, 10, 1000, 'a short description of the job');
    if (msg) errors.description = msg;

    if (!v.preferredContact) {
      errors.preferredContact = 'Please choose how you would like us to contact you.';
    } else if (CONTACT_METHODS.indexOf(v.preferredContact) === -1) {
      errors.preferredContact = 'Please choose phone, email or text.';
    }

    if (v.photoName && (v.photoName.length > 200 || !PHOTO_EXT_RE.test(v.photoName))) {
      errors.photoName = 'Please choose a photo (JPG, PNG, HEIC, WebP or GIF).';
    }

    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  var idCounter = 0;

  function generateId(time) {
    idCounter = (idCounter + 1) % 1296;
    var random = Math.floor(Math.random() * 1679616).toString(36);
    return 'QD-' + time.toString(36).toUpperCase() + '-' +
      idCounter.toString(36).toUpperCase() + random.toUpperCase();
  }

  function buildEnquiry(input, options) {
    var result = validateEnquiry(input);
    if (!result.valid) {
      throw new Error('Invalid enquiry: ' + Object.keys(result.errors).join(', '));
    }
    var opts = options !== null && typeof options === 'object' ? options : {};
    var now = opts.now instanceof Date || typeof opts.now === 'number' ? new Date(opts.now) : new Date();
    if (isNaN(now.getTime())) throw new Error('Invalid options.now');
    var id = typeof opts.id === 'string' && opts.id ? opts.id : generateId(now.getTime());
    var v = normalise(input);
    return {
      id: id,
      createdAt: now.toISOString(),
      status: 'new',
      name: v.name,
      phone: v.phone,
      email: v.email,
      suburb: v.suburb,
      jobType: v.jobType,
      description: v.description,
      preferredContact: v.preferredContact,
      photoName: v.photoName
    };
  }

  function csvCell(value) {
    var s = value === null || value === undefined ? '' : String(value);
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
    if (/[",\r\n]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
    return s;
  }

  function toCsv(enquiries) {
    var list = Array.isArray(enquiries) ? enquiries : [];
    var lines = [CSV_COLUMNS.join(',')];
    list.forEach(function (enquiry) {
      var rec = enquiry !== null && typeof enquiry === 'object' ? enquiry : {};
      lines.push(CSV_COLUMNS.map(function (col) { return csvCell(rec[col]); }).join(','));
    });
    return lines.join('\r\n');
  }

  globalThis.DemoLogic = {
    validateEnquiry: validateEnquiry,
    buildEnquiry: buildEnquiry,
    toCsv: toCsv,
    JOB_TYPES: JOB_TYPES,
    CONTACT_METHODS: CONTACT_METHODS,
    STATUSES: STATUSES,
    CSV_COLUMNS: CSV_COLUMNS
  };
})();
