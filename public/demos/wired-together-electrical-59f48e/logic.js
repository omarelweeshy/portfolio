/*
 * Wired Together Electrical, quote-form concept demo: pure logic.
 * Classic script (no modules, no DOM). Loaded by index.html before app.js and
 * by the acceptance tests via dynamic import or vm. Defines only globalThis.DemoLogic.
 */
(function () {
  'use strict';

  var JOB_TYPES = Object.freeze([
    'Residential electrical',
    'Commercial electrical',
    'Heat pump installation',
    'Lighting',
    'Switchboard upgrade',
    'EV charger installation',
    'Fault finding and repairs',
    'Other'
  ]);
  var SUBURBS = Object.freeze(['Hastings', 'Havelock North', 'Napier', "Other Hawke's Bay"]);
  var STATUSES = Object.freeze(['new', 'quoted', 'won', 'lost']);
  var CONTACT_METHODS = Object.freeze(['phone', 'email']);
  var CSV_COLUMNS = Object.freeze([
    'id', 'createdAt', 'status', 'name', 'jobType', 'suburb', 'address',
    'contactMethod', 'phone', 'email', 'description', 'photoName'
  ]);
  var INPUT_FIELDS = Object.freeze([
    'name', 'jobType', 'description', 'suburb', 'address',
    'contactMethod', 'phone', 'email', 'photoName'
  ]);
  var STORAGE_KEY = 'wte-demo-enquiries';

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_CHARS_RE = /^[0-9 +\-()]+$/;
  var PHOTO_EXT_RE = /\.(jpe?g|png|heic|webp)$/i;
  var FORMULA_START_RE = /^[=+\-@\t\r]/;
  var NEEDS_QUOTES_RE = /[",\r\n]/;

  var idCounter = 0;

  function isPlainObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  function clean(value) {
    return typeof value === 'string' ? value.trim() : '';
  }

  function normalise(input) {
    var source = isPlainObject(input) ? input : {};
    var out = {};
    INPUT_FIELDS.forEach(function (field) {
      out[field] = clean(source[field]);
    });
    return out;
  }

  function phoneProblem(phone) {
    if (!PHONE_CHARS_RE.test(phone)) {
      return 'Please use only numbers, spaces and + - ( ) in your phone number.';
    }
    var digits = phone.replace(/[^0-9]/g, '').length;
    if (digits < 7 || digits > 15) {
      return 'Please enter a phone number with 7 to 15 digits.';
    }
    return '';
  }

  function validateEnquiry(input) {
    var v = normalise(input);
    var errors = {};

    if (!v.name) errors.name = 'Please tell us your name.';
    else if (v.name.length < 2) errors.name = 'Your name needs at least 2 characters.';
    else if (v.name.length > 80) errors.name = 'Please keep your name under 80 characters.';

    if (JOB_TYPES.indexOf(v.jobType) === -1) errors.jobType = 'Please choose the type of job.';

    if (!v.description) errors.description = 'Please describe the job.';
    else if (v.description.length < 10) errors.description = 'Please add a little more detail (at least 10 characters).';
    else if (v.description.length > 1000) errors.description = 'Please keep the description under 1000 characters.';

    if (SUBURBS.indexOf(v.suburb) === -1) errors.suburb = 'Please choose your area.';

    if (v.address.length > 120) errors.address = 'Please keep the address under 120 characters.';

    if (CONTACT_METHODS.indexOf(v.contactMethod) === -1) {
      errors.contactMethod = 'Please choose how you would like us to contact you.';
    }

    if (v.phone) {
      var problem = phoneProblem(v.phone);
      if (problem) errors.phone = problem;
    } else if (v.contactMethod === 'phone') {
      errors.phone = 'Please enter a phone number so we can call you.';
    }

    if (v.email) {
      if (!EMAIL_RE.test(v.email)) errors.email = 'Please enter a valid email address, like name@example.co.nz.';
    } else if (v.contactMethod === 'email') {
      errors.email = 'Please enter an email address so we can reply.';
    }

    if (v.photoName) {
      if (v.photoName.length > 120) errors.photoName = 'That file name is too long. Please rename the photo and try again.';
      else if (!PHOTO_EXT_RE.test(v.photoName)) errors.photoName = 'Please choose a photo (JPG, PNG, HEIC or WebP).';
    }

    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  function generateId() {
    idCounter += 1;
    var time = Date.now().toString(36).toUpperCase().slice(-5);
    var random = Math.floor(Math.random() * 1296).toString(36).toUpperCase();
    while (random.length < 2) random = '0' + random;
    return 'WTE-' + time + random + idCounter.toString(36).toUpperCase();
  }

  function buildEnquiry(input, options) {
    var result = validateEnquiry(input);
    if (!result.valid) {
      var err = new Error('Enquiry is invalid: ' + Object.keys(result.errors).join(', '));
      err.errors = result.errors;
      throw err;
    }
    var opts = isPlainObject(options) ? options : {};
    var now = opts.now !== undefined ? opts.now : Date.now();
    var created = new Date(now);
    if (isNaN(created.getTime())) throw new Error('options.now is not a valid date');
    var v = normalise(input);
    return {
      id: typeof opts.id === 'string' && opts.id ? opts.id : generateId(),
      createdAt: created.toISOString(),
      status: 'new',
      name: v.name,
      jobType: v.jobType,
      description: v.description,
      suburb: v.suburb,
      address: v.address,
      contactMethod: v.contactMethod,
      phone: v.phone,
      email: v.email,
      photoName: v.photoName
    };
  }

  function csvCell(value) {
    var text = value === null || value === undefined ? '' : String(value);
    if (FORMULA_START_RE.test(text)) text = "'" + text;
    if (NEEDS_QUOTES_RE.test(text)) text = '"' + text.replace(/"/g, '""') + '"';
    return text;
  }

  function toCsv(records) {
    var lines = [CSV_COLUMNS.join(',')];
    (Array.isArray(records) ? records : []).forEach(function (record) {
      var row = isPlainObject(record) ? record : {};
      lines.push(CSV_COLUMNS.map(function (column) { return csvCell(row[column]); }).join(','));
    });
    return lines.join('\r\n');
  }

  function sortNewestFirst(records) {
    if (!Array.isArray(records)) return [];
    return records
      .map(function (record, index) { return { record: record, index: index }; })
      .sort(function (a, b) {
        var ca = String(a.record && a.record.createdAt || '');
        var cb = String(b.record && b.record.createdAt || '');
        if (ca > cb) return -1;
        if (ca < cb) return 1;
        return a.index - b.index;
      })
      .map(function (entry) { return entry.record; });
  }

  function updateStatus(records, id, status) {
    if (STATUSES.indexOf(status) === -1) {
      throw new Error('Unknown status "' + String(status) + '". Use one of: ' + STATUSES.join(', '));
    }
    return (Array.isArray(records) ? records : []).map(function (record) {
      if (isPlainObject(record) && record.id === id) {
        return Object.assign({}, record, { status: status });
      }
      return record;
    });
  }

  function loadEnquiries(storage) {
    try {
      var raw = storage.getItem(STORAGE_KEY);
      if (raw === null || raw === undefined) return [];
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(isPlainObject);
    } catch (e) {
      return [];
    }
  }

  function saveEnquiries(storage, records) {
    storage.setItem(STORAGE_KEY, JSON.stringify(records));
  }

  globalThis.DemoLogic = Object.freeze({
    validateEnquiry: validateEnquiry,
    buildEnquiry: buildEnquiry,
    toCsv: toCsv,
    sortNewestFirst: sortNewestFirst,
    updateStatus: updateStatus,
    loadEnquiries: loadEnquiries,
    saveEnquiries: saveEnquiries,
    JOB_TYPES: JOB_TYPES,
    SUBURBS: SUBURBS,
    STATUSES: STATUSES,
    CSV_COLUMNS: CSV_COLUMNS,
    STORAGE_KEY: STORAGE_KEY
  });
})();
