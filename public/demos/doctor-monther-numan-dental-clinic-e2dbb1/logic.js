/*
 * Form logic for the Doctor Monther Numan Dental Clinic concept demo.
 * Classic script: no modules, no DOM. Works in the browser, in node:vm and when Node loads it as CommonJS.
 */
globalThis.DemoLogic = (function () {
  'use strict';

  var JOB_TYPES = [
    { id: 'checkup', label: 'Check-up & cleaning' },
    { id: 'filling', label: 'Filling' },
    { id: 'root-canal', label: 'Root canal treatment' },
    { id: 'braces', label: 'Braces / orthodontics' },
    { id: 'whitening', label: 'Teeth whitening' },
    { id: 'implant', label: 'Implant or crown' },
    { id: 'emergency', label: 'Tooth pain / emergency' },
    { id: 'other', label: 'Something else' }
  ];

  var STATUSES = ['new', 'quoted', 'won', 'lost'];
  var CONTACT_METHODS = ['email', 'phone', 'whatsapp'];
  var STRING_FIELDS = ['name', 'jobType', 'description', 'area', 'preferredContact', 'email', 'phone', 'photoName'];
  var CSV_COLUMNS = ['reference', 'createdAt', 'status', 'name', 'jobType', 'description', 'area',
    'preferredContact', 'email', 'phone', 'photoName'];

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_CHARS_RE = /^[0-9 +\-()]+$/;
  var CPR_LIKE_RE = /\d{9,}/;
  var IMAGE_RE = /\.(jpe?g|png|heic|webp)$/i;
  var REF_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  var idCounter = 0;

  function isKnownJobType(id) {
    for (var i = 0; i < JOB_TYPES.length; i++) {
      if (JOB_TYPES[i].id === id) return true;
    }
    return false;
  }

  /* Returns a trimmed copy of the string fields; missing/null/non-string values become ''. */
  function normalise(input) {
    var source = input !== null && typeof input === 'object' ? input : {};
    var out = {};
    for (var i = 0; i < STRING_FIELDS.length; i++) {
      var value = source[STRING_FIELDS[i]];
      out[STRING_FIELDS[i]] = typeof value === 'string' ? value.trim() : '';
    }
    out.consent = source.consent === true;
    return out;
  }

  function validateEnquiry(input) {
    var v = normalise(input);
    var errors = {};

    if (!v.name) errors.name = 'Please enter your name.';
    else if (v.name.length < 2 || v.name.length > 80) errors.name = 'Name must be 2 to 80 characters.';

    if (!v.jobType) errors.jobType = 'Please choose a treatment.';
    else if (!isKnownJobType(v.jobType)) errors.jobType = 'Please choose a treatment from the list.';

    if (!v.description) errors.description = 'Please tell us briefly what you need.';
    else if (v.description.length < 10 || v.description.length > 1000) {
      errors.description = 'Description must be 10 to 1000 characters.';
    } else if (CPR_LIKE_RE.test(v.description)) {
      errors.description = 'Please remove long numbers (such as a CPR number). We do not need your ID.';
    }

    if (!v.area) errors.area = 'Please enter your area or address.';
    else if (v.area.length < 2 || v.area.length > 120) errors.area = 'Area or address must be 2 to 120 characters.';

    if (!v.preferredContact) errors.preferredContact = 'Please choose how we should contact you.';
    else if (CONTACT_METHODS.indexOf(v.preferredContact) === -1) {
      errors.preferredContact = 'Please choose email, phone or WhatsApp.';
    }

    if (v.email) {
      if (!EMAIL_RE.test(v.email)) errors.email = 'Please enter a valid email address, e.g. name@example.com.';
    } else if (v.preferredContact === 'email') {
      errors.email = 'Please enter your email address, as you chose email.';
    }

    if (v.phone) {
      var digits = v.phone.replace(/\D/g, '').length;
      if (!PHONE_CHARS_RE.test(v.phone)) {
        errors.phone = 'Phone numbers may only contain digits, spaces, +, -, ( and ).';
      } else if (digits < 8 || digits > 15) {
        errors.phone = 'Phone number must have 8 to 15 digits.';
      }
    } else if (v.preferredContact === 'phone' || v.preferredContact === 'whatsapp') {
      errors.phone = 'Please enter your phone number, as you chose ' +
        (v.preferredContact === 'whatsapp' ? 'WhatsApp.' : 'phone.');
    }

    if (v.photoName) {
      if (v.photoName.length > 120) errors.photoName = 'Photo file name must be 120 characters or fewer.';
      else if (!IMAGE_RE.test(v.photoName)) errors.photoName = 'Photo must be a .jpg, .jpeg, .png, .heic or .webp file.';
    }

    if (!v.consent) errors.consent = 'Please tick the box to agree to the privacy notice.';

    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  function randomChars(count) {
    var out = '';
    for (var i = 0; i < count; i++) out += REF_CHARS.charAt(Math.floor(Math.random() * REF_CHARS.length));
    return out;
  }

  function generateId(ms) {
    idCounter += 1;
    return 'enq-' + ms.toString(36) + '-' + idCounter.toString(36) + '-' + randomChars(6).toLowerCase();
  }

  function buildEnquiry(input, options) {
    var result = validateEnquiry(input);
    if (!result.valid) {
      throw new Error('Invalid enquiry: ' + Object.keys(result.errors).join(', '));
    }
    var opts = options !== null && typeof options === 'object' ? options : {};
    var ms = opts.now === undefined ? Date.now() : new Date(opts.now).getTime();
    if (isNaN(ms)) throw new Error('Invalid options.now');
    var createdAt = new Date(ms).toISOString();
    var id = typeof opts.id === 'string' && opts.id ? opts.id : generateId(ms);
    var v = normalise(input);

    return {
      id: id,
      reference: 'MND-' + createdAt.slice(0, 10).replace(/-/g, '') + '-' + randomChars(4),
      createdAt: createdAt,
      status: 'new',
      name: v.name,
      jobType: v.jobType,
      description: v.description,
      area: v.area,
      preferredContact: v.preferredContact,
      email: v.email,
      phone: v.phone,
      photoName: v.photoName,
      consent: true
    };
  }

  function csvCell(value) {
    var s = value === null || value === undefined ? '' : String(value);
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
    if (/[",\r\n]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
    return s;
  }

  function toCsv(enquiries) {
    var lines = [CSV_COLUMNS.join(',')];
    if (Array.isArray(enquiries)) {
      for (var i = 0; i < enquiries.length; i++) {
        var row = enquiries[i] !== null && typeof enquiries[i] === 'object' ? enquiries[i] : {};
        var cells = [];
        for (var c = 0; c < CSV_COLUMNS.length; c++) cells.push(csvCell(row[CSV_COLUMNS[c]]));
        lines.push(cells.join(','));
      }
    }
    return lines.join('\r\n') + '\r\n';
  }

  return {
    validateEnquiry: validateEnquiry,
    buildEnquiry: buildEnquiry,
    toCsv: toCsv,
    JOB_TYPES: JOB_TYPES,
    STATUSES: STATUSES
  };
})();
