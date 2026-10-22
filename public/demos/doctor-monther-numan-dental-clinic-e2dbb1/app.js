/*
 * DOM wiring for the concept demo: form, confirmation, booking tracker and owner view.
 * All validation, record building and CSV formatting lives in logic.js (window.DemoLogic).
 * User content is only ever rendered with textContent, never innerHTML.
 */
(function () {
  'use strict';

  var Logic = window.DemoLogic;
  var STORAGE_KEY = 'mnd-demo-enquiries';
  var FIELDS = ['name', 'jobType', 'description', 'area', 'preferredContact', 'email', 'phone', 'photoName', 'consent'];
  var STATUS_LABELS = { new: 'New', quoted: 'Quoted', won: 'Booked (won)', lost: 'Lost' };
  var CONTACT_LABELS = { email: 'Email', phone: 'Phone / SMS', whatsapp: 'WhatsApp' };
  var CLINIC = 'Doctor Monther Numan Dental Clinic';

  var form = document.getElementById('enquiry-form');
  var formStatus = document.getElementById('form-status');
  var confirmation = document.getElementById('confirmation');
  var trackForm = document.getElementById('track-form');
  var trackInput = document.getElementById('track-ref');
  var trackResult = document.getElementById('track-result');
  var list = document.getElementById('enquiry-list');
  var emptyState = document.getElementById('empty-state');
  var exportButton = document.getElementById('export-csv');
  var clearButton = document.getElementById('clear-data');
  var ownerStatus = document.getElementById('owner-status');
  var storageWarned = false;

  /* ---------- storage ---------- */

  function isRecord(item) {
    return item !== null && typeof item === 'object' &&
      typeof item.id === 'string' && typeof item.reference === 'string' && typeof item.createdAt === 'string';
  }

  function loadEnquiries() {
    try {
      var parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(parsed) ? parsed.filter(isRecord) : [];
    } catch (err) {
      return [];
    }
  }

  function saveEnquiries(items) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      return true;
    } catch (err) {
      if (!storageWarned) {
        storageWarned = true;
        ownerStatus.textContent = 'This browser blocked local storage, so requests will not be kept after a reload.';
      }
      return false;
    }
  }

  function newestFirst(items) {
    return items.slice().sort(function (a, b) {
      return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0;
    });
  }

  /* ---------- helpers ---------- */

  function jobLabel(id) {
    for (var i = 0; i < Logic.JOB_TYPES.length; i++) {
      if (Logic.JOB_TYPES[i].id === id) return Logic.JOB_TYPES[i].label;
    }
    return id;
  }

  function formatDate(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  /* ---------- enquiry form ---------- */

  function readForm() {
    var data = {};
    for (var i = 0; i < FIELDS.length; i++) {
      var control = form.elements[FIELDS[i]];
      data[FIELDS[i]] = control.type === 'checkbox' ? control.checked : control.value;
    }
    return data;
  }

  function showFieldError(field, message) {
    var control = document.getElementById(field);
    var errorEl = document.getElementById(field + '-error');
    errorEl.textContent = message || '';
    if (message) control.setAttribute('aria-invalid', 'true');
    else control.removeAttribute('aria-invalid');
  }

  function showErrors(errors, onlyField) {
    for (var i = 0; i < FIELDS.length; i++) {
      if (!onlyField || FIELDS[i] === onlyField) showFieldError(FIELDS[i], errors[FIELDS[i]]);
    }
  }

  function updateRequiredNotes() {
    var pc = form.elements.preferredContact.value;
    var notes = form.querySelectorAll('.req-note');
    for (var i = 0; i < notes.length; i++) {
      var field = notes[i].getAttribute('data-for');
      var required = (field === 'email' && pc === 'email') ||
        (field === 'phone' && (pc === 'phone' || pc === 'whatsapp'));
      notes[i].textContent = required ? '(required)' : '(optional)';
      notes[i].classList.toggle('is-required', required);
    }
  }

  function confirmationPreview(record) {
    var body = 'Hello ' + record.name + ', thank you for contacting ' + CLINIC + '. ' +
      'We received your request for ' + jobLabel(record.jobType) + '. Your booking reference is ' +
      record.reference + '. We will contact you shortly to agree a time.';
    if (record.preferredContact === 'whatsapp') {
      return { label: 'In the real version this opens WhatsApp with:', message: body };
    }
    if (record.preferredContact === 'phone') {
      return { label: 'In the real version this sends an SMS to ' + record.phone + ':', message: body };
    }
    return { label: 'In the real version this sends an email to ' + record.email + ':', message: body };
  }

  function showConfirmation(record) {
    var preview = confirmationPreview(record);
    document.getElementById('confirmation-name').textContent = record.name;
    document.getElementById('confirmation-treatment').textContent = jobLabel(record.jobType);
    document.getElementById('confirmation-ref').textContent = record.reference;
    document.getElementById('confirmation-channel').textContent = preview.label;
    document.getElementById('confirmation-message').textContent = preview.message;
    form.hidden = true;
    confirmation.hidden = false;
    confirmation.focus();
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = readForm();
    var result = Logic.validateEnquiry(data);
    showErrors(result.errors);
    if (!result.valid) {
      var count = Object.keys(result.errors).length;
      formStatus.textContent = 'Please fix ' + count + (count === 1 ? ' field' : ' fields') + ' highlighted above.';
      var firstBad = FIELDS.filter(function (f) { return result.errors[f]; })[0];
      document.getElementById(firstBad).focus();
      return;
    }
    formStatus.textContent = '';
    var record = Logic.buildEnquiry(data);
    var items = loadEnquiries();
    items.push(record);
    saveEnquiries(items);
    renderOwnerView(items);
    showConfirmation(record);
  });

  FIELDS.forEach(function (field) {
    var control = document.getElementById(field);
    control.addEventListener('blur', function () {
      showErrors(Logic.validateEnquiry(readForm()).errors, field);
    });
  });

  form.elements.preferredContact.addEventListener('change', function () {
    updateRequiredNotes();
    var errors = Logic.validateEnquiry(readForm()).errors;
    if (form.elements.email.value || document.getElementById('email-error').textContent) showErrors(errors, 'email');
    if (form.elements.phone.value || document.getElementById('phone-error').textContent) showErrors(errors, 'phone');
  });

  document.getElementById('new-enquiry').addEventListener('click', function () {
    form.reset();
    showErrors({});
    updateRequiredNotes();
    confirmation.hidden = true;
    form.hidden = false;
    document.getElementById('name').focus();
  });

  /* ---------- booking tracker ---------- */

  trackForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var ref = trackInput.value.trim().toUpperCase();
    trackResult.textContent = '';
    trackResult.className = 'track-result';
    if (!ref) {
      trackResult.classList.add('is-error');
      trackResult.textContent = 'Please type your booking reference, e.g. MND-20261021-AB12.';
      return;
    }
    var match = loadEnquiries().filter(function (item) { return item.reference === ref; })[0];
    if (!match) {
      trackResult.classList.add('is-error');
      trackResult.textContent = 'We could not find booking ' + ref + '. Please check the reference and try again.';
      return;
    }
    trackResult.classList.add('is-found');
    trackResult.appendChild(el('p', 'track-ref-line', match.reference));
    var dl = el('dl', 'track-details');
    [['Treatment', jobLabel(match.jobType)], ['Requested', formatDate(match.createdAt)],
      ['Status', STATUS_LABELS[match.status] || match.status]].forEach(function (pair) {
      dl.appendChild(el('dt', '', pair[0]));
      dl.appendChild(el('dd', '', pair[1]));
    });
    trackResult.appendChild(dl);
  });

  /* ---------- owner view ---------- */

  function setStatus(id, status) {
    if (Logic.STATUSES.indexOf(status) === -1) return;
    var items = loadEnquiries();
    for (var i = 0; i < items.length; i++) {
      if (items[i].id === id) items[i].status = status;
    }
    saveEnquiries(items);
    renderOwnerView(items);
    ownerStatus.textContent = 'Status saved.';
  }

  function renderItem(item) {
    var li = el('li', 'enquiry status-' + (Logic.STATUSES.indexOf(item.status) === -1 ? 'new' : item.status));

    var head = el('div', 'enquiry-head');
    var title = el('div');
    title.appendChild(el('p', 'enquiry-name', item.name));
    title.appendChild(el('p', 'enquiry-meta', jobLabel(item.jobType) + ' · ' + formatDate(item.createdAt)));
    head.appendChild(title);

    var statusWrap = el('div', 'status-control');
    var selectId = 'status-' + item.id;
    var label = el('label', '', 'Status');
    label.setAttribute('for', selectId);
    var select = el('select');
    select.id = selectId;
    Logic.STATUSES.forEach(function (status) {
      var option = el('option', '', STATUS_LABELS[status]);
      option.value = status;
      if (item.status === status) option.selected = true;
      select.appendChild(option);
    });
    select.addEventListener('change', function () { setStatus(item.id, select.value); });
    statusWrap.appendChild(label);
    statusWrap.appendChild(select);
    head.appendChild(statusWrap);
    li.appendChild(head);

    li.appendChild(el('p', 'enquiry-desc', item.description));

    var details = el('dl', 'enquiry-details');
    [['Reference', item.reference], ['Area', item.area],
      ['Contact by', CONTACT_LABELS[item.preferredContact] || item.preferredContact],
      ['Email', item.email || '–'], ['Phone', item.phone || '–'], ['Photo', item.photoName || '–']
    ].forEach(function (pair) {
      var row = el('div');
      row.appendChild(el('dt', '', pair[0]));
      row.appendChild(el('dd', '', pair[1]));
      details.appendChild(row);
    });
    li.appendChild(details);
    return li;
  }

  function renderOwnerView(items) {
    var sorted = newestFirst(items);
    list.textContent = '';
    sorted.forEach(function (item) { list.appendChild(renderItem(item)); });
    emptyState.hidden = sorted.length > 0;
    list.hidden = sorted.length === 0;
    exportButton.disabled = sorted.length === 0;
    clearButton.disabled = sorted.length === 0;
  }

  exportButton.addEventListener('click', function () {
    var csv = Logic.toCsv(newestFirst(loadEnquiries()));
    var blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'enquiries.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    ownerStatus.textContent = 'Downloaded enquiries.csv.';
  });

  clearButton.addEventListener('click', function () {
    if (!window.confirm('Delete all demo requests saved in this browser?')) return;
    saveEnquiries([]);
    renderOwnerView([]);
    ownerStatus.textContent = 'Demo data cleared.';
  });

  updateRequiredNotes();
  renderOwnerView(loadEnquiries());
})();
