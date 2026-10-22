/*
 * Pure form logic for the United Movers & Packers concept demo.
 * Classic script: no imports/exports, no DOM, no storage, no network.
 * Sets globalThis.DemoLogic = { validateEnquiry, buildEnquiry, toCsv }.
 */
(function () {
  'use strict';

  var JOB_TYPES = ['house-move', 'office-move', 'packing-only', 'furniture-assembly'];
  var PROPERTY_SIZES = ['studio', '1bhk', '2bhk', '3bhk', '4bhk', 'villa', 'office'];
  var PACKING_OPTIONS = ['none', 'fragile-only', 'full'];
  var CONTACT_METHODS = ['whatsapp', 'phone', 'email'];

  var TEXT_FIELDS = ['name', 'jobType', 'fromArea', 'toArea', 'moveDate', 'propertySize', 'packing',
    'description', 'contactMethod', 'phone', 'email', 'photoName'];

  var CSV_COLUMNS = ['id', 'createdAt', 'status', 'name', 'jobType', 'fromArea', 'toArea', 'moveDate',
    'propertySize', 'packing', 'contactMethod', 'phone', 'email', 'photoName', 'description'];

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_CHARS_RE = /^[0-9 +\-()]+$/;
  var DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
  var PHOTO_EXT_RE = /\.(jpe?g|png|heic|webp)$/i;
  var MOVE_JOBS = ['house-move', 'office-move'];

  var idCounter = 0;

  function clean(value) {
    return typeof value === 'string' ? value.trim() : '';
  }

  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function localDateString(date) {
    return date.getFullYear() + '-' + pad2(date.getMonth() + 1) + '-' + pad2(date.getDate());
  }

  // Returns true when s is a real calendar date written as YYYY-MM-DD.
  function isRealDate(s) {
    var m = DATE_RE.exec(s);
    if (!m) return false;
    var y = Number(m[1]);
    var mo = Number(m[2]);
    var d = Number(m[3]);
    if (mo < 1 || mo > 12 || d < 1) return false;
    var dt = new Date(Date.UTC(y, mo - 1, d));
    return dt.getUTCFullYear() === y && dt.getUTCMonth() === mo - 1 && dt.getUTCDate() === d;
  }

  function checkLength(value, min, max, label) {
    if (value.length < min) return label + ' must be at least ' + min + ' characters.';
    if (value.length > max) return label + ' must be ' + max + ' characters or fewer.';
    return '';
  }

  function validateEnquiry(input, options) {
    var src = input !== null && typeof input === 'object' ? input : {};
    var opts = options !== null && typeof options === 'object' ? options : {};
    var today = typeof opts.today === 'string' && isRealDate(opts.today) ? opts.today : localDateString(new Date());
    var v = {};
    TEXT_FIELDS.forEach(function (f) { v[f] = clean(src[f]); });

    var errors = {};
    var msg;

    if (!v.name) errors.name = 'Please enter your name.';
    else if ((msg = checkLength(v.name, 2, 80, 'Name'))) errors.name = msg;

    if (!v.jobType) errors.jobType = 'Please choose the type of job.';
    else if (JOB_TYPES.indexOf(v.jobType) === -1) errors.jobType = 'Please choose a job type from the list.';

    if (!v.fromArea) errors.fromArea = 'Please enter the area you are moving from.';
    else if ((msg = checkLength(v.fromArea, 2, 100, 'Area'))) errors.fromArea = msg;

    var moveJob = MOVE_JOBS.indexOf(v.jobType) !== -1;
    if (!v.toArea) {
      if (moveJob) errors.toArea = 'Please enter the area you are moving to.';
    } else if ((msg = checkLength(v.toArea, moveJob ? 2 : 0, 100, 'Area'))) {
      errors.toArea = msg;
    }

    if (!v.moveDate) errors.moveDate = 'Please choose a move date.';
    else if (!isRealDate(v.moveDate)) errors.moveDate = 'Please enter a real date (YYYY-MM-DD).';
    else if (v.moveDate < today) errors.moveDate = 'The move date cannot be in the past.';

    if (!v.propertySize) errors.propertySize = 'Please choose the property size.';
    else if (PROPERTY_SIZES.indexOf(v.propertySize) === -1) errors.propertySize = 'Please choose a size from the list.';

    if (!v.packing) errors.packing = 'Please choose a packing option.';
    else if (PACKING_OPTIONS.indexOf(v.packing) === -1) errors.packing = 'Please choose a packing option from the list.';

    if (!v.description) errors.description = 'Please tell us briefly what needs moving.';
    else if ((msg = checkLength(v.description, 10, 1000, 'Description'))) errors.description = msg;

    if (!v.contactMethod) errors.contactMethod = 'Please choose how we should contact you.';
    else if (CONTACT_METHODS.indexOf(v.contactMethod) === -1) errors.contactMethod = 'Please choose a contact method from the list.';

    if (!v.phone) {
      if (v.contactMethod === 'whatsapp' || v.contactMethod === 'phone') {
        errors.phone = 'Please enter a mobile number so we can reach you.';
      }
    } else {
      var digits = v.phone.replace(/\D/g, '').length;
      if (!PHONE_CHARS_RE.test(v.phone)) errors.phone = 'Use digits, spaces, +, - and brackets only.';
      else if (digits < 8 || digits > 15) errors.phone = 'A phone number needs 8 to 15 digits.';
    }

    if (!v.email) {
      if (v.contactMethod === 'email') errors.email = 'Please enter your email address.';
    } else if (!EMAIL_RE.test(v.email)) {
      errors.email = 'Please enter a valid email address, e.g. name@example.com.';
    }

    if (v.photoName) {
      if (v.photoName.length > 120) errors.photoName = 'The file name must be 120 characters or fewer.';
      else if (/[\/\\]/.test(v.photoName)) errors.photoName = 'Enter the file name only, without folders.';
      else if (!PHOTO_EXT_RE.test(v.photoName)) errors.photoName = 'Use a .jpg, .jpeg, .png, .heic or .webp photo.';
    }

    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  function randomPart() {
    var c = globalThis.crypto;
    if (c && typeof c.getRandomValues === 'function') {
      var buf = new Uint32Array(2);
      c.getRandomValues(buf);
      return buf[0].toString(36) + buf[1].toString(36);
    }
    return Math.random().toString(36).slice(2, 12);
  }

  function generateId(time) {
    idCounter = (idCounter + 1) % 1679616; // 36^4
    return 'ENQ-' + time.toString(36) + '-' + idCounter.toString(36) + randomPart();
  }

  function buildEnquiry(input, options) {
    var opts = options !== null && typeof options === 'object' ? options : {};
    var now = opts.now === undefined ? new Date() : new Date(opts.now);
    if (isNaN(now.getTime())) throw new Error('Invalid "now" option.');
    var createdAt = now.toISOString();

    var result = validateEnquiry(input, { today: createdAt.slice(0, 10) });
    if (!result.valid) {
      var err = new Error('Invalid enquiry: ' + Object.keys(result.errors).join(', '));
      err.errors = result.errors;
      throw err;
    }

    var record = {
      id: typeof opts.id === 'string' && opts.id ? opts.id : generateId(now.getTime()),
      createdAt: createdAt,
      status: 'new'
    };
    TEXT_FIELDS.forEach(function (f) { record[f] = clean(input[f]); });
    return record;
  }

  function csvField(value) {
    var s = value === null || value === undefined ? '' : String(value);
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
    if (/[",\r\n]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
    return s;
  }

  function toCsv(records) {
    var lines = [CSV_COLUMNS.join(',')];
    (Array.isArray(records) ? records : []).forEach(function (r) {
      var row = r !== null && typeof r === 'object' ? r : {};
      lines.push(CSV_COLUMNS.map(function (col) { return csvField(row[col]); }).join(','));
    });
    return lines.join('\r\n');
  }

  globalThis.DemoLogic = {
    validateEnquiry: validateEnquiry,
    buildEnquiry: buildEnquiry,
    toCsv: toCsv
  };
}());
