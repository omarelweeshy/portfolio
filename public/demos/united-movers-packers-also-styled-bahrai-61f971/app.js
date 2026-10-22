/*
 * DOM wiring for the United Movers & Packers concept demo.
 * Classic script: uses globalThis.DemoLogic (logic.js) and localStorage. No network calls.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'ump-demo-enquiries';
  var STATUSES = ['new', 'quoted', 'won', 'lost'];
  var FIELDS = ['name', 'jobType', 'fromArea', 'toArea', 'moveDate', 'propertySize', 'packing',
    'description', 'contactMethod', 'phone', 'email', 'photoName'];
  var RADIO_FIELDS = ['packing', 'contactMethod'];

  var LABELS = {
    jobType: {
      'house-move': 'House / flat move',
      'office-move': 'Office move',
      'packing-only': 'Packing only',
      'furniture-assembly': 'Furniture dismantling & assembly'
    },
    propertySize: {
      'studio': 'Studio',
      '1bhk': '1 BHK flat',
      '2bhk': '2 BHK flat',
      '3bhk': '3 BHK flat',
      '4bhk': '4 BHK or larger',
      'villa': 'Villa',
      'office': 'Office'
    },
    packing: {
      'none': 'No packing',
      'fragile-only': 'Fragile items only',
      'full': 'Full packing, wrapping & assembly'
    },
    contactMethod: {
      'whatsapp': 'WhatsApp',
      'phone': 'Phone call',
      'email': 'Email'
    }
  };

  var logic = globalThis.DemoLogic;
  var form = document.getElementById('quote-form');
  var formStatus = document.getElementById('form-status');
  var confirmation = document.getElementById('confirmation');
  var list = document.getElementById('enquiry-list');
  var emptyState = document.getElementById('empty-state');
  var ownerStatus = document.getElementById('owner-status');

  if (!logic || !form) {
    if (formStatus) formStatus.textContent = 'Sorry, the demo could not start (logic.js did not load).';
    return;
  }

  function labelFor(field, value) {
    var map = LABELS[field];
    return (map && map[value]) || value || '';
  }

  function utcToday() {
    return new Date().toISOString().slice(0, 10);
  }

  // ---------------------------------------------------------------- storage

  function loadEnquiries() {
    var raw;
    try {
      raw = window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return [];
    }
    if (!raw) return [];
    try {
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(function (r) {
        return r !== null && typeof r === 'object' && typeof r.id === 'string';
      });
    } catch (e) {
      return [];
    }
  }

  function saveEnquiries(records) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      return true;
    } catch (e) {
      return false;
    }
  }

  function newestFirst(records) {
    return records.slice().sort(function (a, b) {
      var ta = Date.parse(a.createdAt) || 0;
      var tb = Date.parse(b.createdAt) || 0;
      return tb - ta;
    });
  }

  // ---------------------------------------------------------------- form helpers

  function readForm() {
    var data = {};
    FIELDS.forEach(function (f) {
      if (RADIO_FIELDS.indexOf(f) !== -1) {
        var checked = form.querySelector('input[name="' + f + '"]:checked');
        data[f] = checked ? checked.value : '';
      } else {
        data[f] = form.elements[f].value;
      }
    });
    return data;
  }

  function controlsFor(field) {
    if (RADIO_FIELDS.indexOf(field) !== -1) {
      return Array.prototype.slice.call(form.querySelectorAll('input[name="' + field + '"]'));
    }
    return [document.getElementById(field)];
  }

  function showFieldError(field, message) {
    var el = document.getElementById(field + '-error');
    if (el) el.textContent = message || '';
    controlsFor(field).forEach(function (c) {
      if (message) c.setAttribute('aria-invalid', 'true');
      else c.removeAttribute('aria-invalid');
    });
  }

  function showErrors(errors, onlyFields) {
    FIELDS.forEach(function (f) {
      if (onlyFields && onlyFields.indexOf(f) === -1) return;
      showFieldError(f, errors[f]);
    });
  }

  // Fields the user has interacted with; inline validation only nags about those.
  var touched = {};

  function revalidateTouched() {
    var result = logic.validateEnquiry(readForm(), { today: utcToday() });
    showErrors(result.errors, Object.keys(touched));
  }

  function updateConditionalHints() {
    var data = readForm();
    var isMove = data.jobType === 'house-move' || data.jobType === 'office-move';
    document.getElementById('toArea-req').hidden = !isMove;
    document.getElementById('toArea').required = isMove;
    var needsPhone = data.contactMethod === 'whatsapp' || data.contactMethod === 'phone';
    document.getElementById('phone-req').hidden = !needsPhone;
    document.getElementById('phone').required = needsPhone;
    var needsEmail = data.contactMethod === 'email';
    document.getElementById('email-req').hidden = !needsEmail;
    document.getElementById('email').required = needsEmail;
  }

  function buildWhatsAppMessage(rec) {
    var lines = [
      'New quote request ' + rec.id,
      'Name: ' + rec.name,
      'Job: ' + labelFor('jobType', rec.jobType) + ' (' + labelFor('propertySize', rec.propertySize) + ')',
      'From: ' + rec.fromArea + (rec.toArea ? ' to ' + rec.toArea : ''),
      'Date: ' + rec.moveDate,
      'Packing: ' + labelFor('packing', rec.packing),
      'Contact by ' + labelFor('contactMethod', rec.contactMethod) + (rec.phone ? ' on ' + rec.phone : '') +
        (rec.email ? ' / ' + rec.email : ''),
      'Details: ' + rec.description
    ];
    if (rec.photoName) lines.push('Photo: ' + rec.photoName);
    return lines.join('\n');
  }

  function showConfirmation(rec) {
    document.getElementById('confirm-ref').textContent = rec.id;
    document.getElementById('confirm-summary').textContent =
      labelFor('jobType', rec.jobType) + ' from ' + rec.fromArea + (rec.toArea ? ' to ' + rec.toArea : '') +
      ' on ' + rec.moveDate + '. We will reply by ' + labelFor('contactMethod', rec.contactMethod) + '.';
    document.getElementById('confirm-whatsapp').textContent =
      'In the real version this opens WhatsApp with:\n' + buildWhatsAppMessage(rec);
    document.getElementById('confirm-sheet').textContent =
      'In the real version this also adds a new row to the owner\'s Google Sheet (reference ' + rec.id +
      ', status "new") and sends the owner a notification email with the same details.';
    form.hidden = true;
    confirmation.hidden = false;
    confirmation.focus();
  }

  function resetForm() {
    form.reset();
    touched = {};
    showErrors({});
    formStatus.textContent = '';
    updateConditionalHints();
    confirmation.hidden = true;
    form.hidden = false;
    document.getElementById('name').focus();
  }

  // ---------------------------------------------------------------- owner view

  function makeEl(tag, className, text) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }

  function addDetail(dl, term, value) {
    if (!value) return;
    dl.appendChild(makeEl('dt', '', term));
    dl.appendChild(makeEl('dd', '', value));
  }

  function formatCreated(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
  }

  function renderEnquiry(rec) {
    var li = makeEl('li', 'enquiry status-' + (STATUSES.indexOf(rec.status) !== -1 ? rec.status : 'new'));

    var head = makeEl('div', 'enquiry-head');
    var title = makeEl('h3', 'enquiry-title', (rec.name || 'Unnamed') + ' \u2013 ' + labelFor('jobType', rec.jobType));
    head.appendChild(title);

    var statusWrap = makeEl('div', 'status-field');
    var selectId = 'status-' + rec.id.replace(/[^A-Za-z0-9_-]/g, '_');
    var label = makeEl('label', '', 'Status');
    label.setAttribute('for', selectId);
    var select = document.createElement('select');
    select.id = selectId;
    select.setAttribute('data-enquiry', rec.id);
    STATUSES.forEach(function (s) {
      var opt = makeEl('option', '', s.charAt(0).toUpperCase() + s.slice(1));
      opt.value = s;
      if (s === rec.status) opt.selected = true;
      select.appendChild(opt);
    });
    statusWrap.appendChild(label);
    statusWrap.appendChild(select);
    head.appendChild(statusWrap);
    li.appendChild(head);

    var meta = makeEl('p', 'enquiry-meta', rec.id + ' \u00b7 received ' + formatCreated(rec.createdAt));
    li.appendChild(meta);

    var dl = makeEl('dl', 'enquiry-details');
    addDetail(dl, 'Route', (rec.fromArea || '') + (rec.toArea ? ' \u2192 ' + rec.toArea : ''));
    addDetail(dl, 'Move date', rec.moveDate);
    addDetail(dl, 'Size', labelFor('propertySize', rec.propertySize));
    addDetail(dl, 'Packing', labelFor('packing', rec.packing));
    addDetail(dl, 'Contact', labelFor('contactMethod', rec.contactMethod) +
      (rec.phone ? ' \u00b7 ' + rec.phone : '') + (rec.email ? ' \u00b7 ' + rec.email : ''));
    addDetail(dl, 'Photo', rec.photoName);
    addDetail(dl, 'Details', rec.description);
    li.appendChild(dl);
    return li;
  }

  function renderOwnerView() {
    var records = newestFirst(loadEnquiries());
    while (list.firstChild) list.removeChild(list.firstChild);
    records.forEach(function (rec) { list.appendChild(renderEnquiry(rec)); });
    emptyState.hidden = records.length > 0;
    list.hidden = records.length === 0;
  }

  function setStatus(id, status) {
    if (STATUSES.indexOf(status) === -1) return;
    var records = loadEnquiries();
    var changed = false;
    records.forEach(function (r) {
      if (r.id === id) { r.status = status; changed = true; }
    });
    if (!changed) return;
    if (saveEnquiries(records)) {
      ownerStatus.textContent = 'Status for ' + id + ' saved as "' + status + '".';
      var item = list.querySelector('select[data-enquiry="' + id.replace(/["\\]/g, '\\$&') + '"]');
      if (item) {
        var li = item.closest('li');
        li.className = 'enquiry status-' + status;
      }
    } else {
      ownerStatus.textContent = 'Could not save the status: browser storage is unavailable.';
    }
  }

  function exportCsv() {
    var records = newestFirst(loadEnquiries());
    var csv = logic.toCsv(records);
    // BOM so Excel opens the UTF-8 file with the right characters.
    var blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'enquiries.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    ownerStatus.textContent = records.length
      ? 'Exported ' + records.length + ' enquir' + (records.length === 1 ? 'y' : 'ies') + ' to enquiries.csv.'
      : 'Exported an empty enquiries.csv (header row only).';
  }

  // ---------------------------------------------------------------- events

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = readForm();
    var now = new Date();
    var result = logic.validateEnquiry(data, { today: now.toISOString().slice(0, 10) });
    FIELDS.forEach(function (f) { touched[f] = true; });
    showErrors(result.errors);
    if (!result.valid) {
      var count = Object.keys(result.errors).length;
      formStatus.textContent = 'Please fix ' + count + ' field' + (count === 1 ? '' : 's') + ' highlighted below.';
      var first = FIELDS.filter(function (f) { return result.errors[f]; })[0];
      controlsFor(first)[0].focus();
      return;
    }

    var rec;
    try {
      rec = logic.buildEnquiry(data, { now: now });
    } catch (e) {
      formStatus.textContent = 'Sorry, that request could not be saved. Please check the form and try again.';
      return;
    }
    var records = loadEnquiries();
    records.push(rec);
    if (!saveEnquiries(records)) {
      formStatus.textContent = 'Your browser blocked local storage, so this demo could not save the request.';
      return;
    }
    formStatus.textContent = '';
    renderOwnerView();
    showConfirmation(rec);
  });

  form.addEventListener('focusout', function (event) {
    var name = event.target && event.target.name;
    if (!name || FIELDS.indexOf(name) === -1) return;
    touched[name] = true;
    revalidateTouched();
  });

  form.addEventListener('change', function (event) {
    var name = event.target && event.target.name;
    if (name === 'jobType' || name === 'contactMethod') {
      updateConditionalHints();
      // Conditional requirements changed, so re-check the dependent fields the user already visited.
      revalidateTouched();
    } else if (RADIO_FIELDS.indexOf(name) !== -1) {
      touched[name] = true;
      revalidateTouched();
    }
  });

  form.addEventListener('input', function (event) {
    var name = event.target && event.target.name;
    if (name && touched[name]) revalidateTouched();
  });

  document.getElementById('photoPicker').addEventListener('change', function (event) {
    var file = event.target.files && event.target.files[0];
    if (!file) return;
    // Only the name is used; the file itself is never read or uploaded.
    var photo = document.getElementById('photoName');
    photo.value = file.name;
    touched.photoName = true;
    revalidateTouched();
  });

  document.getElementById('new-enquiry').addEventListener('click', resetForm);

  list.addEventListener('change', function (event) {
    var target = event.target;
    if (target && target.tagName === 'SELECT' && target.hasAttribute('data-enquiry')) {
      setStatus(target.getAttribute('data-enquiry'), target.value);
    }
  });

  document.getElementById('export-csv').addEventListener('click', exportCsv);

  document.getElementById('clear-data').addEventListener('click', function () {
    if (!loadEnquiries().length) {
      ownerStatus.textContent = 'There is no demo data to clear.';
      return;
    }
    if (!window.confirm('Delete all demo enquiries saved in this browser?')) return;
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      ownerStatus.textContent = 'Demo data cleared.';
    } catch (e) {
      ownerStatus.textContent = 'Could not clear the data: browser storage is unavailable.';
    }
    renderOwnerView();
  });

  // ---------------------------------------------------------------- init

  document.getElementById('moveDate').min = utcToday();
  updateConditionalHints();
  renderOwnerView();
}());
