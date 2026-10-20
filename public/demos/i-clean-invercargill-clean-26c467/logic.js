/* I-Clean concept demo: pure enquiry logic (validation, record building, CSV).
 * Classic script: no DOM access, no modules. Works in the browser, in Node (loaded
 * dynamically by the tests), and in a bare vm context. Exposes globalThis.DemoLogic. */
(function () {
  'use strict';

  var JOB_TYPES = Object.freeze(['regular-clean', 'one-off-clean', 'end-of-tenancy', 'carpet-upholstery', 'commercial', 'other']);
  var JOB_TYPE_LABELS = Object.freeze({
    'regular-clean': 'Regular home clean',
    'one-off-clean': 'One-off / spring clean',
    'end-of-tenancy': 'End of tenancy clean',
    'carpet-upholstery': 'Carpet & upholstery',
    commercial: 'Commercial / office',
    other: 'Something else',
  });
  var CONTACT_METHODS = Object.freeze(['phone', 'email']);
  var STATUSES = Object.freeze(['new', 'quoted', 'won', 'lost']);
  var FIELDS = ['name', 'jobType', 'description', 'location', 'contactMethod', 'phone', 'email', 'photoName'];
  var CSV_COLUMNS = Object.freeze(['id', 'createdAt', 'status', 'jobType', 'name', 'contactMethod', 'phone', 'email', 'location', 'description', 'photoName']);

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_CHARS_RE = /^[0-9 +().\-]+$/;
  var PHOTO_EXT_RE = /\.(jpe?g|png|gif|webp|heic)$/i;
  var FORMULA_START_RE = /^[=+\-@\t\r]/;
  var NEEDS_QUOTES_RE = /[",\r\n]/;

  // Reads the known fields from any input as trimmed strings ('' when missing).
  function normalise(input) {
    var source = input !== null && typeof input === 'object' ? input : {};
    var out = {};
    for (var i = 0; i < FIELDS.length; i++) {
      var value = source[FIELDS[i]];
      out[FIELDS[i]] = value === null || value === undefined ? '' : String(value).trim();
    }
    return out;
  }

  function validateEnquiry(input) {
    var v = normalise(input);
    var errors = {};

    if (!v.name) errors.name = 'Please tell us your name.';
    else if (v.name.length < 2 || v.name.length > 80) errors.name = 'Your name should be 2 to 80 characters.';

    if (!v.jobType) errors.jobType = 'Please choose the type of clean you need.';
    else if (JOB_TYPES.indexOf(v.jobType) === -1) errors.jobType = 'Please choose one of the listed job types.';

    if (!v.description) errors.description = 'Please describe the job in a few words.';
    else if (v.description.length < 10) errors.description = 'A little more detail please (at least 10 characters).';
    else if (v.description.length > 1000) errors.description = 'Please keep the description under 1000 characters.';

    if (!v.location) errors.location = 'Please enter your suburb or address.';
    else if (v.location.length < 2 || v.location.length > 200) errors.location = 'Your suburb or address should be 2 to 200 characters.';

    if (!v.contactMethod) errors.contactMethod = 'Please choose how you would like us to contact you.';
    else if (CONTACT_METHODS.indexOf(v.contactMethod) === -1) errors.contactMethod = 'Please choose phone or email.';

    if (v.phone) {
      var digits = v.phone.replace(/\D/g, '').length;
      if (!PHONE_CHARS_RE.test(v.phone)) errors.phone = 'Phone numbers can only use digits, spaces and + ( ) - .';
      else if (digits < 7 || digits > 15) errors.phone = 'Please enter a phone number with 7 to 15 digits.';
    } else if (v.contactMethod === 'phone') {
      errors.phone = 'Please enter a phone number so we can call you.';
    }

    if (v.email) {
      if (v.email.length > 254 || !EMAIL_RE.test(v.email)) errors.email = 'Please enter a valid email address, like name@example.co.nz.';
    } else if (v.contactMethod === 'email') {
      errors.email = 'Please enter an email address so we can reply.';
    }

    if (v.photoName) {
      if (v.photoName.length > 120) errors.photoName = 'The photo file name is too long (120 characters at most).';
      else if (!PHOTO_EXT_RE.test(v.photoName)) errors.photoName = 'Please choose a photo (.jpg, .jpeg, .png, .gif, .webp or .heic).';
    }

    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  var idCounter = 0;
  function generateId() {
    idCounter += 1;
    return 'enq-' + Date.now().toString(36) + '-' + idCounter.toString(36) + '-' + Math.random().toString(36).slice(2, 8);
  }

  function buildEnquiry(input, options) {
    var result = validateEnquiry(input);
    if (!result.valid) {
      throw new Error('Invalid enquiry: ' + Object.keys(result.errors).join(', '));
    }
    var opts = options !== null && typeof options === 'object' ? options : {};
    var now = opts.now !== undefined && opts.now !== null ? opts.now : Date.now();
    var date = new Date(now);
    if (isNaN(date.getTime())) throw new Error('Invalid date passed as options.now');
    var v = normalise(input);
    return {
      id: typeof opts.id === 'string' && opts.id ? opts.id : generateId(),
      createdAt: date.toISOString(),
      status: 'new',
      name: v.name,
      jobType: v.jobType,
      description: v.description,
      location: v.location,
      contactMethod: v.contactMethod,
      phone: v.phone,
      email: v.email,
      photoName: v.photoName,
    };
  }

  function csvCell(value) {
    var s = value === null || value === undefined ? '' : String(value);
    if (FORMULA_START_RE.test(s)) s = "'" + s;
    if (NEEDS_QUOTES_RE.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
    return s;
  }

  function toCsv(enquiries) {
    var lines = [CSV_COLUMNS.join(',')];
    if (Array.isArray(enquiries)) {
      for (var i = 0; i < enquiries.length; i++) {
        var record = enquiries[i] !== null && typeof enquiries[i] === 'object' ? enquiries[i] : {};
        lines.push(CSV_COLUMNS.map(function (col) { return csvCell(record[col]); }).join(','));
      }
    }
    return lines.join('\r\n');
  }

  globalThis.DemoLogic = Object.freeze({
    validateEnquiry: validateEnquiry,
    buildEnquiry: buildEnquiry,
    toCsv: toCsv,
    JOB_TYPES: JOB_TYPES,
    JOB_TYPE_LABELS: JOB_TYPE_LABELS,
    STATUSES: STATUSES,
  });
})();
