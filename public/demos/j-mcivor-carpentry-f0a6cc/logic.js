/*
 * J McIvor Carpentry concept demo - pure form logic.
 * Classic script: runs as a browser <script> and when loaded by Node.
 * No DOM, window or storage access in this file.
 */
(function () {
  'use strict';

  var JOB_TYPES = {
    'maintenance-check': 'Maintenance check',
    decking: 'Decking',
    'doors-windows': 'Doors & windows',
    renovation: 'Renovation',
    repairs: 'General repairs',
    other: 'Other'
  };

  var CONTACT_METHODS = { email: 'Email', phone: 'Phone' };

  var STATUSES = ['new', 'quoted', 'won', 'lost'];

  var INPUT_FIELDS = [
    'name', 'jobType', 'description', 'address', 'preferredDate',
    'contactMethod', 'email', 'phone', 'photoName'
  ];

  var CSV_COLUMNS = ['id', 'createdAt', 'status'].concat(INPUT_FIELDS);

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
  var PHOTO_RE = /\.(jpe?g|png|heic|webp)$/i;
  var FORMULA_START_RE = /^[=+\-@\t\r]/;
  var CSV_NEEDS_QUOTES_RE = /[",\r\n]/;

  function has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  function clean(value) {
    if (value === null || value === undefined) return '';
    return String(value).trim();
  }

  // Copies the known input fields into trimmed strings; junk input becomes all-empty.
  function normalise(input) {
    var source = input !== null && typeof input === 'object' && !Array.isArray(input) ? input : {};
    var out = {};
    INPUT_FIELDS.forEach(function (field) {
      var value;
      try {
        value = source[field];
        out[field] = typeof value === 'object' && value !== null ? '' : clean(value);
      } catch (e) {
        out[field] = '';
      }
    });
    return out;
  }

  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function localToday() {
    var d = new Date();
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  }

  function isRealDate(text) {
    var m = DATE_RE.exec(text);
    if (!m) return false;
    var y = Number(m[1]);
    var mo = Number(m[2]);
    var d = Number(m[3]);
    var date = new Date(Date.UTC(y, mo - 1, d));
    return date.getUTCFullYear() === y && date.getUTCMonth() === mo - 1 && date.getUTCDate() === d;
  }

  function phoneDigits(phone) {
    return phone.replace(/[\s\-()]/g, '').replace(/^\+/, '');
  }

  function isValidPhone(phone) {
    return /^\d{7,15}$/.test(phoneDigits(phone));
  }

  function validateEnquiry(input, options) {
    var opts = options && typeof options === 'object' ? options : {};
    var today = typeof opts.today === 'string' && isRealDate(opts.today) ? opts.today : localToday();
    var v = normalise(input);
    var errors = {};

    if (!v.name) {
      errors.name = 'Please enter your name.';
    } else if (v.name.length < 2) {
      errors.name = 'Your name needs at least 2 characters.';
    } else if (v.name.length > 80) {
      errors.name = 'Please keep your name to 80 characters or fewer.';
    }

    if (!v.jobType) {
      errors.jobType = 'Please choose the type of job.';
    } else if (!has(JOB_TYPES, v.jobType)) {
      errors.jobType = 'Please choose a job type from the list.';
    }

    if (!v.description) {
      errors.description = 'Please tell us a little about the job.';
    } else if (v.description.length < 10) {
      errors.description = 'Please add a bit more detail (at least 10 characters).';
    } else if (v.description.length > 1000) {
      errors.description = 'Please keep the description to 1000 characters or fewer.';
    }

    if (!v.address) {
      errors.address = 'Please enter your suburb or street address.';
    } else if (v.address.length < 3) {
      errors.address = 'Please enter at least 3 characters for the suburb or address.';
    } else if (v.address.length > 200) {
      errors.address = 'Please keep the address to 200 characters or fewer.';
    }

    if (v.preferredDate) {
      if (!isRealDate(v.preferredDate)) {
        errors.preferredDate = 'Please pick a valid date.';
      } else if (v.preferredDate < today) {
        errors.preferredDate = 'Please choose today or a future date.';
      }
    }

    if (!v.contactMethod) {
      errors.contactMethod = 'Please choose how we should contact you.';
    } else if (!has(CONTACT_METHODS, v.contactMethod)) {
      errors.contactMethod = 'Please choose email or phone.';
    }

    if (!v.email) {
      if (v.contactMethod === 'email') errors.email = 'Please enter your email address.';
    } else if (!EMAIL_RE.test(v.email)) {
      errors.email = 'Please enter a valid email address, e.g. name@example.co.nz.';
    }

    if (!v.phone) {
      if (v.contactMethod === 'phone') errors.phone = 'Please enter your phone number.';
    } else if (!isValidPhone(v.phone)) {
      errors.phone = 'Please enter a valid phone number (7 to 15 digits).';
    }

    if (v.photoName) {
      if (v.photoName.length > 120) {
        errors.photoName = 'The photo file name is too long (120 characters max).';
      } else if (!PHOTO_RE.test(v.photoName)) {
        errors.photoName = 'Please choose a JPG, PNG, HEIC or WebP photo.';
      }
    }

    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  var idCounter = 0;

  function generateId() {
    idCounter += 1;
    return 'enq-' + Date.now().toString(36) + '-' +
      Math.random().toString(36).slice(2, 8) + '-' + idCounter.toString(36);
  }

  function buildEnquiry(input, options) {
    var opts = options && typeof options === 'object' ? options : {};
    var result = validateEnquiry(input, opts);
    if (!result.valid) {
      var err = new Error('Invalid enquiry: ' + Object.keys(result.errors).join(', '));
      err.errors = result.errors;
      throw err;
    }

    var created = new Date(opts.now === undefined ? Date.now() : opts.now);
    if (isNaN(created.getTime())) {
      throw new Error('Invalid "now" option: expected a Date, ISO string or epoch milliseconds.');
    }
    var id = clean(opts.id) || generateId();

    var v = normalise(input);
    var record = { id: id, createdAt: created.toISOString(), status: 'new' };
    INPUT_FIELDS.forEach(function (field) {
      record[field] = v[field];
    });
    return record;
  }

  function csvCell(value) {
    var text = value === null || value === undefined ? '' : String(value);
    if (FORMULA_START_RE.test(text)) text = "'" + text;
    if (CSV_NEEDS_QUOTES_RE.test(text)) text = '"' + text.replace(/"/g, '""') + '"';
    return text;
  }

  function toCsv(enquiries) {
    if (!Array.isArray(enquiries)) {
      throw new TypeError('toCsv expects an array of enquiries.');
    }
    var lines = [CSV_COLUMNS.join(',')];
    enquiries.forEach(function (rec) {
      var row = rec !== null && typeof rec === 'object' ? rec : {};
      lines.push(CSV_COLUMNS.map(function (col) { return csvCell(row[col]); }).join(','));
    });
    return lines.join('\r\n');
  }

  globalThis.DemoLogic = {
    validateEnquiry: validateEnquiry,
    buildEnquiry: buildEnquiry,
    toCsv: toCsv,
    JOB_TYPES: JOB_TYPES,
    CONTACT_METHODS: CONTACT_METHODS,
    STATUSES: STATUSES
  };
})();
