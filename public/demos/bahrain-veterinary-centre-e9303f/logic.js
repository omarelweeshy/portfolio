/*
 * Bahrain Veterinary Centre concept demo: pure form logic.
 * Classic script (no modules, no DOM). Runs in the browser, in Node tests
 * and in a bare vm context. Exposes globalThis.DemoLogic.
 */
(function () {
  'use strict';

  var PET_TYPES = ['dog', 'cat', 'bird', 'rabbit', 'small-pet', 'reptile', 'other'];
  var VISIT_TYPES = ['check-up', 'vaccination', 'sick-or-injured', 'dental', 'surgery-consult', 'other'];
  var CONTACT_METHODS = ['phone', 'whatsapp', 'email'];
  var TIME_BANDS = ['morning', 'afternoon', 'evening'];

  var TEXT_FIELDS = [
    'ownerName', 'petType', 'visitType', 'reason', 'area',
    'preferredContact', 'contact', 'preferredDate', 'preferredTime', 'photoName'
  ];

  var CSV_COLUMNS = [
    'id', 'createdAt', 'status', 'ownerName', 'petType', 'visitType', 'reason', 'area',
    'preferredContact', 'contact', 'preferredDate', 'preferredTime', 'photoName'
  ];

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_RE = /^\+?\d{8,15}$/;
  var DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
  var PHOTO_RE = /\.(jpe?g|png|heic|webp)$/i;

  var RATE_WINDOW_MS = 10 * 60 * 1000;
  var RATE_MAX = 3;
  var MAX_DAYS_AHEAD = 60;
  var DAY_MS = 24 * 60 * 60 * 1000;

  var idCounter = 0;

  function str(value) {
    if (value === null || value === undefined) return '';
    return String(value).trim();
  }

  function toMs(value) {
    if (value instanceof Date) return value.getTime();
    if (typeof value === 'number') return value;
    if (typeof value === 'string' && value !== '') return new Date(value).getTime();
    return NaN;
  }

  function resolveNow(options) {
    var ms = options && options.now !== undefined ? toMs(options.now) : NaN;
    return isFinite(ms) ? ms : Date.now();
  }

  function normalise(input) {
    var src = input && typeof input === 'object' && !Array.isArray(input) ? input : {};
    var out = {};
    for (var i = 0; i < TEXT_FIELDS.length; i++) {
      out[TEXT_FIELDS[i]] = str(src[TEXT_FIELDS[i]]);
    }
    out.website = str(src.website);
    return out;
  }

  // Days since epoch for a local calendar date, so comparisons ignore time of day and DST.
  function dayNumber(year, monthIndex, day) {
    return Math.round(Date.UTC(year, monthIndex, day) / DAY_MS);
  }

  function checkDate(value, nowMs) {
    if (!value) return 'Please choose a preferred date.';
    var m = DATE_RE.exec(value);
    if (!m) return 'Please enter the date as YYYY-MM-DD.';
    var y = Number(m[1]);
    var mo = Number(m[2]) - 1;
    var d = Number(m[3]);
    var check = new Date(Date.UTC(y, mo, d));
    if (check.getUTCFullYear() !== y || check.getUTCMonth() !== mo || check.getUTCDate() !== d) {
      return 'That date does not exist, please pick another.';
    }
    var now = new Date(nowMs);
    var today = dayNumber(now.getFullYear(), now.getMonth(), now.getDate());
    var chosen = dayNumber(y, mo, d);
    if (chosen < today) return 'Please choose today or a later date.';
    if (chosen - today > MAX_DAYS_AHEAD) return 'Please choose a date within the next ' + MAX_DAYS_AHEAD + ' days.';
    return '';
  }

  function checkLength(value, min, max, emptyMsg, label) {
    if (!value) return emptyMsg;
    if (value.length < min) return label + ' must be at least ' + min + ' characters.';
    if (value.length > max) return label + ' must be at most ' + max + ' characters.';
    return '';
  }

  function countRecent(list, nowMs) {
    if (!Array.isArray(list)) return 0;
    var n = 0;
    for (var i = 0; i < list.length; i++) {
      var t = toMs(list[i]);
      if (isFinite(t) && t <= nowMs && nowMs - t < RATE_WINDOW_MS) n++;
    }
    return n;
  }

  function validateEnquiry(input, options) {
    var errors = {};
    var spam = false;
    try {
      var v = normalise(input);
      var nowMs = resolveNow(options);
      spam = v.website !== '';

      var msg;
      msg = checkLength(v.ownerName, 2, 60, 'Please tell us your name.', 'Your name');
      if (msg) errors.ownerName = msg;

      if (!v.petType) errors.petType = 'Please choose your pet type.';
      else if (PET_TYPES.indexOf(v.petType) === -1) errors.petType = 'Please choose a pet type from the list.';

      if (!v.visitType) errors.visitType = 'Please choose the type of visit.';
      else if (VISIT_TYPES.indexOf(v.visitType) === -1) errors.visitType = 'Please choose a visit type from the list.';

      msg = checkLength(v.reason, 10, 500, 'Please describe the reason for the visit.', 'The reason');
      if (msg) errors.reason = msg;

      msg = checkLength(v.area, 2, 80, 'Please tell us your area or address.', 'Area or address');
      if (msg) errors.area = msg;

      var method = v.preferredContact;
      if (!method) errors.preferredContact = 'Please choose how we should contact you.';
      else if (CONTACT_METHODS.indexOf(method) === -1) errors.preferredContact = 'Please choose a contact method from the list.';

      if (!v.contact) {
        errors.contact = method === 'email' ? 'Please enter your email address.' : 'Please enter your phone or WhatsApp number.';
      } else if (method === 'email') {
        if (!EMAIL_RE.test(v.contact)) errors.contact = 'Please enter a valid email address, e.g. name@example.com.';
      } else if (!PHONE_RE.test(v.contact.replace(/[\s\-()]/g, ''))) {
        errors.contact = 'Please enter a valid number with 8 to 15 digits, e.g. +973 3600 0000.';
      }

      msg = checkDate(v.preferredDate, nowMs);
      if (msg) errors.preferredDate = msg;

      if (!v.preferredTime) errors.preferredTime = 'Please choose a preferred time of day.';
      else if (TIME_BANDS.indexOf(v.preferredTime) === -1) errors.preferredTime = 'Please choose a time of day from the list.';

      if (v.photoName) {
        if (v.photoName.length > 100) errors.photoName = 'The photo file name must be at most 100 characters.';
        else if (!PHOTO_RE.test(v.photoName)) errors.photoName = 'Photos must be .jpg, .jpeg, .png, .heic or .webp files.';
      }

      if (countRecent(options && options.recentSubmissions, nowMs) >= RATE_MAX) {
        errors.form = 'Too many requests from this device, please wait a few minutes or call the clinic.';
      }
    } catch (e) {
      errors.form = 'Something went wrong while checking the form, please try again.';
    }
    var valid = !spam && Object.keys(errors).length === 0;
    return { valid: valid, errors: errors, spam: spam };
  }

  function generateId(nowMs) {
    idCounter = (idCounter + 1) % 1296;
    var rand = Math.floor(Math.random() * 1679616).toString(36);
    while (rand.length < 4) rand = '0' + rand;
    var count = idCounter.toString(36);
    while (count.length < 2) count = '0' + count;
    return ('BVC-' + nowMs.toString(36) + '-' + count + rand).toUpperCase();
  }

  var PET_LABELS = {
    dog: 'dog', cat: 'cat', bird: 'bird', rabbit: 'rabbit',
    'small-pet': 'small pet', reptile: 'reptile', other: 'pet'
  };
  var CONTACT_LABELS = { phone: 'phone', whatsapp: 'WhatsApp', email: 'email' };

  function buildAutoReply(rec) {
    return 'Thank you ' + rec.ownerName + ', we have received your appointment request ' + rec.id +
      ' for your ' + PET_LABELS[rec.petType] + ' on ' + rec.preferredDate + ' (' + rec.preferredTime + ').' +
      ' This is a request, not a confirmed booking: the clinic will contact you by ' +
      CONTACT_LABELS[rec.preferredContact] + ' to confirm the slot.';
  }

  function buildEnquiry(input, options) {
    var result = validateEnquiry(input, options);
    if (!result.valid) {
      var err = new Error(result.spam ? 'Request rejected.' : 'The appointment request is not valid.');
      err.errors = result.errors;
      throw err;
    }
    var v = normalise(input);
    var nowMs = resolveNow(options);
    var givenId = options && typeof options.id === 'string' ? options.id.trim() : '';
    var rec = {
      id: givenId || generateId(nowMs),
      createdAt: new Date(nowMs).toISOString(),
      status: 'new',
      ownerName: v.ownerName,
      petType: v.petType,
      visitType: v.visitType,
      reason: v.reason,
      area: v.area,
      preferredContact: v.preferredContact,
      contact: v.contact,
      preferredDate: v.preferredDate,
      preferredTime: v.preferredTime,
      photoName: v.photoName
    };
    rec.autoReply = buildAutoReply(rec);
    return rec;
  }

  function csvCell(value) {
    if (value === null || value === undefined) return '';
    var s = String(value);
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
    if (/[",\n\r]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
    return s;
  }

  function toCsv(records) {
    var lines = [CSV_COLUMNS.join(',')];
    var list = Array.isArray(records) ? records : [];
    for (var i = 0; i < list.length; i++) {
      var rec = list[i] && typeof list[i] === 'object' ? list[i] : {};
      var cells = [];
      for (var c = 0; c < CSV_COLUMNS.length; c++) cells.push(csvCell(rec[CSV_COLUMNS[c]]));
      lines.push(cells.join(','));
    }
    return lines.join('\r\n');
  }

  globalThis.DemoLogic = { validateEnquiry: validateEnquiry, buildEnquiry: buildEnquiry, toCsv: toCsv };
})();
