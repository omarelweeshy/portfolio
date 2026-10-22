/* Training Plus Institute concept demo: pure enquiry logic.
 * Classic script (no modules). Assigns globalThis.DemoLogic.
 * Never touches the DOM or storage so it runs in browsers, Node and vm sandboxes alike.
 */
(function (root) {
  'use strict';

  var COURSES = Object.freeze([
    'English language',
    'IT & computer skills',
    'Business & management',
    'Accounting & finance',
    'Health & safety',
    'Other / not sure',
  ]);
  var CONTACT_METHODS = Object.freeze(['email', 'phone', 'whatsapp']);
  var STATUSES = Object.freeze(['new', 'quoted', 'won', 'lost']);
  var FIELDS = Object.freeze([
    'id', 'createdAt', 'status', 'name', 'course', 'message',
    'area', 'preferredContact', 'email', 'phone', 'photoName',
  ]);

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var PHONE_DIGITS_RE = /^[0-9]{8,15}$/;
  var PHOTO_EXT_RE = /\.(jpe?g|png|heic|webp|pdf)$/i;

  function str(input, key) {
    var v = input[key];
    return typeof v === 'string' ? v.trim() : '';
  }

  function lengthBetween(value, min, max) {
    return value.length >= min && value.length <= max;
  }

  function validateEnquiry(input) {
    var src = input !== null && typeof input === 'object' ? input : {};
    var errors = {};

    var name = str(src, 'name');
    if (!name) errors.name = 'Please enter your name.';
    else if (!lengthBetween(name, 2, 80)) errors.name = 'Name must be 2 to 80 characters.';

    var course = str(src, 'course');
    if (!course) errors.course = 'Please choose a course.';
    else if (COURSES.indexOf(course) === -1) errors.course = 'Please choose a course from the list.';

    var message = str(src, 'message');
    if (!message) errors.message = 'Please tell us a little about what you need.';
    else if (!lengthBetween(message, 10, 1000)) errors.message = 'Message must be 10 to 1000 characters.';

    var area = str(src, 'area');
    if (!area) errors.area = 'Please enter your area or address.';
    else if (!lengthBetween(area, 2, 100)) errors.area = 'Area must be 2 to 100 characters.';

    var contact = str(src, 'preferredContact');
    if (!contact) errors.preferredContact = 'Please choose how we should contact you.';
    else if (CONTACT_METHODS.indexOf(contact) === -1) errors.preferredContact = 'Please choose email, phone or WhatsApp.';

    var email = str(src, 'email');
    if (email) {
      if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address, e.g. name@example.com.';
    } else if (contact === 'email') {
      errors.email = 'Please enter your email so we can reply.';
    }

    var phone = str(src, 'phone');
    if (phone) {
      var digits = phone.replace(/[\s\-()]/g, '').replace(/^\+/, '');
      if (!PHONE_DIGITS_RE.test(digits)) errors.phone = 'Please enter a phone number with 8 to 15 digits.';
    } else if (contact === 'phone' || contact === 'whatsapp') {
      errors.phone = 'Please enter your phone number so we can reach you.';
    }

    var photoName = str(src, 'photoName');
    if (photoName) {
      if (photoName.length > 120) errors.photoName = 'File name must be 120 characters or fewer.';
      else if (/[\/\\]/.test(photoName)) errors.photoName = 'Enter just the file name, without folders.';
      else if (!PHOTO_EXT_RE.test(photoName)) errors.photoName = 'File must be a .jpg, .jpeg, .png, .heic, .webp or .pdf.';
    }

    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  var idCounter = 0;
  function generateId(nowMs) {
    idCounter += 1;
    var rand = Math.floor(Math.random() * 0x100000).toString(36).toUpperCase();
    return 'ENQ-' + nowMs.toString(36).toUpperCase() + '-' + idCounter.toString(36).toUpperCase() + rand;
  }

  function toDate(now) {
    if (now === undefined || now === null) return new Date();
    var d = now instanceof Date ? new Date(now.getTime()) : new Date(now);
    if (isNaN(d.getTime())) throw new Error('Invalid timestamp for enquiry: ' + String(now));
    return d;
  }

  function buildEnquiry(input, opts) {
    var check = validateEnquiry(input);
    if (!check.valid) {
      throw new Error('Invalid enquiry: ' + Object.keys(check.errors).join(', '));
    }
    var options = opts !== null && typeof opts === 'object' ? opts : {};
    var created = toDate(options.now);
    var id = options.id !== undefined && options.id !== null && options.id !== ''
      ? String(options.id)
      : generateId(created.getTime());

    return {
      id: id,
      createdAt: created.toISOString(),
      status: 'new',
      name: str(input, 'name'),
      course: str(input, 'course'),
      message: str(input, 'message'),
      area: str(input, 'area'),
      preferredContact: str(input, 'preferredContact'),
      email: str(input, 'email').toLowerCase(),
      phone: str(input, 'phone'),
      photoName: str(input, 'photoName'),
    };
  }

  function csvCell(value) {
    var s = value === null || value === undefined ? '' : String(value);
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
    if (/[",\r\n]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
    return s;
  }

  function toCsv(records) {
    var list = Array.isArray(records) ? records : [];
    var lines = [FIELDS.join(',')];
    for (var i = 0; i < list.length; i++) {
      var r = list[i] !== null && typeof list[i] === 'object' ? list[i] : {};
      lines.push(FIELDS.map(function (k) { return csvCell(r[k]); }).join(','));
    }
    return lines.join('\r\n');
  }

  root.DemoLogic = Object.freeze({
    validateEnquiry: validateEnquiry,
    buildEnquiry: buildEnquiry,
    toCsv: toCsv,
    COURSES: COURSES,
    CONTACT_METHODS: CONTACT_METHODS,
    STATUSES: STATUSES,
    FIELDS: FIELDS,
  });
})(globalThis);
