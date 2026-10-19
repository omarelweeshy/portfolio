/*
 * Pure form logic for the Ingold Building "Submit your plans" concept demo.
 * Classic script: no DOM access, no modules. Exposes globalThis.DemoLogic.
 */
(function () {
  'use strict';

  var PROJECT_TYPES = ['new-build', 'renovation', 'extension', 'deck-outdoor', 'maintenance', 'other'];
  var BUDGETS = ['under-50k', '50k-150k', '150k-300k', '300k-plus', 'not-sure'];
  var TIMEFRAMES = ['asap', '1-3-months', '3-6-months', '6-plus-months', 'flexible'];
  var CONTACTS = ['email', 'phone'];
  var STATUSES = ['new', 'quoted', 'won', 'lost'];

  var FIELDS = [
    'id', 'createdAt', 'status', 'name', 'projectType', 'description', 'address',
    'budget', 'timeframe', 'preferredContact', 'email', 'phone', 'planFileName'
  ];
  var INPUT_FIELDS = FIELDS.slice(3);

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PLAN_RE = /\.(pdf|jpe?g|png)$/i;
  var FORMULA_START_RE = /^[=+\-@\t\r]/;
  var NEEDS_QUOTES_RE = /[",\r\n]/;

  var idCounter = 0;

  function clean(value) {
    return typeof value === 'string' ? value.trim() : '';
  }

  function checkLength(errors, key, value, min, max, label) {
    if (!value) {
      errors[key] = 'Please enter ' + label + '.';
    } else if (value.length < min) {
      errors[key] = 'Please enter at least ' + min + ' characters for ' + label + '.';
    } else if (value.length > max) {
      errors[key] = 'Please keep ' + label + ' to ' + max + ' characters or fewer.';
    }
  }

  function checkChoice(errors, key, value, allowed, label) {
    if (!value) {
      errors[key] = 'Please choose ' + label + '.';
    } else if (allowed.indexOf(value) === -1) {
      errors[key] = 'Please choose one of the listed options.';
    }
  }

  function isValidPhone(value) {
    var digits = value.replace(/^\+/, '').replace(/[ ()-]/g, '');
    return /^\d{7,15}$/.test(digits);
  }

  function validateEnquiry(input) {
    var errors = {};
    var src = input !== null && typeof input === 'object' ? input : {};
    var v = {};
    INPUT_FIELDS.forEach(function (key) { v[key] = clean(src[key]); });

    checkLength(errors, 'name', v.name, 2, 80, 'your name');
    checkChoice(errors, 'projectType', v.projectType, PROJECT_TYPES, 'a project type');
    checkLength(errors, 'description', v.description, 10, 1000, 'a short description of the job');
    checkLength(errors, 'address', v.address, 3, 120, 'the suburb or address');
    checkChoice(errors, 'budget', v.budget, BUDGETS, 'a budget range');
    checkChoice(errors, 'timeframe', v.timeframe, TIMEFRAMES, 'a timeframe');
    checkChoice(errors, 'preferredContact', v.preferredContact, CONTACTS, 'how we should contact you');

    if (v.email) {
      if (!EMAIL_RE.test(v.email)) errors.email = 'Please enter a valid email address, e.g. name@example.co.nz.';
    } else if (v.preferredContact === 'email') {
      errors.email = 'Please enter your email so we can send your quote.';
    }

    if (v.phone) {
      if (!isValidPhone(v.phone)) errors.phone = 'Please enter a valid phone number (7 to 15 digits).';
    } else if (v.preferredContact === 'phone') {
      errors.phone = 'Please enter your phone number so we can call you.';
    }

    if (v.planFileName) {
      if (v.planFileName.length > 120) {
        errors.planFileName = 'The file name is too long. Please rename it (120 characters max).';
      } else if (!PLAN_RE.test(v.planFileName)) {
        errors.planFileName = 'Please upload plans as a PDF, JPG or PNG file.';
      }
    }

    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  function toIsoDate(now) {
    var date = now === undefined ? new Date() : new Date(now instanceof Date ? now.getTime() : now);
    if (isNaN(date.getTime())) throw new Error('buildEnquiry: options.now is not a valid date.');
    return date.toISOString();
  }

  function generateId() {
    idCounter += 1;
    return 'enq-' + Date.now().toString(36) + '-' + idCounter.toString(36) + '-' +
      Math.random().toString(36).slice(2, 8);
  }

  function buildEnquiry(input, options) {
    var result = validateEnquiry(input);
    if (!result.valid) {
      var error = new Error('Enquiry is not valid: ' + Object.keys(result.errors).join(', '));
      error.errors = result.errors;
      throw error;
    }
    var opts = options !== null && typeof options === 'object' ? options : {};
    var id = clean(opts.id) || generateId();
    var record = { id: id, createdAt: toIsoDate(opts.now), status: 'new' };
    INPUT_FIELDS.forEach(function (key) { record[key] = clean(input[key]); });
    return record;
  }

  function csvField(value) {
    var text = value === null || value === undefined ? '' : String(value);
    if (FORMULA_START_RE.test(text)) text = "'" + text;
    if (NEEDS_QUOTES_RE.test(text)) text = '"' + text.replace(/"/g, '""') + '"';
    return text;
  }

  function toCsv(records) {
    var list = Array.isArray(records) ? records : [];
    var lines = [FIELDS.join(',')];
    list.forEach(function (rec) {
      var row = rec !== null && typeof rec === 'object' ? rec : {};
      lines.push(FIELDS.map(function (key) { return csvField(row[key]); }).join(','));
    });
    return lines.join('\r\n');
  }

  globalThis.DemoLogic = {
    validateEnquiry: validateEnquiry,
    buildEnquiry: buildEnquiry,
    toCsv: toCsv,
    FIELDS: FIELDS,
    PROJECT_TYPES: PROJECT_TYPES,
    BUDGETS: BUDGETS,
    TIMEFRAMES: TIMEFRAMES,
    CONTACTS: CONTACTS,
    STATUSES: STATUSES
  };
})();
