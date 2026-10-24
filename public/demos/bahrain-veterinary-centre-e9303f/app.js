/*
 * Bahrain Veterinary Centre concept demo: browser wiring.
 * Uses globalThis.DemoLogic from logic.js (loaded first). No network access.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'bvc-demo-enquiries';
  var FIELDS = [
    'ownerName', 'petType', 'visitType', 'reason', 'area',
    'preferredContact', 'contact', 'preferredDate', 'preferredTime', 'photoName'
  ];
  var STATUSES = [
    { value: 'new', label: 'New' },
    { value: 'quoted', label: 'Slot offered' },
    { value: 'won', label: 'Booked' },
    { value: 'lost', label: 'Declined' }
  ];
  var LABELS = {
    petType: { dog: 'Dog', cat: 'Cat', bird: 'Bird', rabbit: 'Rabbit', 'small-pet': 'Small pet', reptile: 'Reptile', other: 'Other' },
    visitType: { 'check-up': 'Check-up', vaccination: 'Vaccination', 'sick-or-injured': 'Sick or injured', dental: 'Dental', 'surgery-consult': 'Surgery consultation', other: 'Other' },
    preferredContact: { phone: 'Phone call', whatsapp: 'WhatsApp', email: 'Email' },
    preferredTime: { morning: 'Morning', afternoon: 'Afternoon', evening: 'Evening' }
  };
  var CHANNEL_TEXT = {
    whatsapp: 'In the real version this opens WhatsApp with:',
    phone: 'In the real version this sends an SMS confirmation with:',
    email: 'In the real version this sends an email with:'
  };

  var Logic = globalThis.DemoLogic;
  var form = document.getElementById('enquiry-form');
  var formError = document.getElementById('form-error');
  var confirmation = document.getElementById('confirmation');
  var list = document.getElementById('enquiry-list');
  var emptyState = document.getElementById('empty-state');
  var pendingCount = document.getElementById('pending-count');
  var ownerMessage = document.getElementById('owner-message');
  var contactInput = document.getElementById('contact');
  var contactSelect = document.getElementById('preferredContact');
  var submitted = false;

  if (!Logic || !form) return;

  // ---------- storage

  var memoryStore = [];

  function loadRecords() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      var parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter(function (r) { return r && typeof r === 'object'; }) : [];
    } catch (e) {
      return memoryStore.slice();
    }
  }

  function saveRecords(records) {
    memoryStore = records.slice();
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      return true;
    } catch (e) {
      showOwnerMessage('This browser blocked local storage, so requests are kept only until you reload.');
      return false;
    }
  }

  function newestFirst(records) {
    return records.slice().sort(function (a, b) {
      return String(b.createdAt || '').localeCompare(String(a.createdAt || ''));
    });
  }

  // ---------- helpers

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function label(group, value) {
    return (LABELS[group] && LABELS[group][value]) || value || '';
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function localDateString(d) {
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }

  function formatCreated(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return localDateString(d) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }

  function readForm() {
    var data = {};
    FIELDS.concat('website').forEach(function (id) {
      var control = document.getElementById(id);
      data[id] = control ? control.value : '';
    });
    return data;
  }

  function showOwnerMessage(text) {
    ownerMessage.textContent = text;
  }

  // ---------- inline errors

  function setFieldError(id, message) {
    var control = document.getElementById(id);
    var errorEl = document.getElementById(id + '-error');
    if (!control || !errorEl) return;
    errorEl.textContent = message || '';
    if (message) control.setAttribute('aria-invalid', 'true');
    else control.removeAttribute('aria-invalid');
  }

  function showErrors(errors) {
    FIELDS.forEach(function (id) { setFieldError(id, errors[id]); });
    if (errors.form) {
      formError.textContent = errors.form;
      formError.hidden = false;
    } else {
      formError.textContent = '';
      formError.hidden = true;
    }
  }

  function recentSubmissions() {
    return loadRecords().map(function (r) { return r.createdAt; });
  }

  function validateNow() {
    return Logic.validateEnquiry(readForm(), { now: Date.now(), recentSubmissions: recentSubmissions() });
  }

  // ---------- form

  function setDateLimits() {
    var input = document.getElementById('preferredDate');
    var today = new Date();
    var max = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 60);
    input.min = localDateString(today);
    input.max = localDateString(max);
  }

  function updateContactHint() {
    var method = contactSelect.value;
    var labelEl = document.getElementById('contact-label');
    if (method === 'email') {
      labelEl.textContent = 'Email address';
      contactInput.type = 'email';
      contactInput.setAttribute('autocomplete', 'email');
      contactInput.setAttribute('inputmode', 'email');
    } else {
      labelEl.textContent = method === 'whatsapp' ? 'WhatsApp number' : method === 'phone' ? 'Phone number' : 'Phone, WhatsApp number or email';
      contactInput.type = 'text';
      contactInput.setAttribute('autocomplete', 'tel');
      contactInput.setAttribute('inputmode', method ? 'tel' : 'text');
    }
  }

  function renderConfirmation(record) {
    document.getElementById('confirmation-id').textContent = record.id;
    var summary = document.getElementById('confirmation-summary');
    summary.textContent = '';
    [
      ['Pet', label('petType', record.petType)],
      ['Visit', label('visitType', record.visitType)],
      ['Preferred slot', record.preferredDate + ', ' + label('preferredTime', record.preferredTime)],
      ['We will contact you by', label('preferredContact', record.preferredContact) + ' (' + record.contact + ')']
    ].forEach(function (pair) {
      summary.appendChild(el('dt', '', pair[0]));
      summary.appendChild(el('dd', '', pair[1]));
    });
    document.getElementById('confirmation-channel').textContent =
      CHANNEL_TEXT[record.preferredContact] || CHANNEL_TEXT.whatsapp;
    document.getElementById('confirmation-reply').textContent = record.autoReply;
    form.hidden = true;
    confirmation.hidden = false;
    confirmation.focus();
  }

  function onSubmit(event) {
    event.preventDefault();
    submitted = true;
    var data = readForm();
    var options = { now: Date.now(), recentSubmissions: recentSubmissions() };
    var result = Logic.validateEnquiry(data, options);

    if (result.spam) {
      // Honeypot hit: look normal to the bot, store nothing.
      showErrors({});
      var decoy;
      try {
        decoy = Logic.buildEnquiry(Object.assign({}, data, { website: '' }), { now: options.now, id: 'BVC-RECEIVED' });
      } catch (e) {
        decoy = {
          id: 'BVC-RECEIVED', petType: '', visitType: '', preferredDate: '', preferredTime: '',
          preferredContact: 'whatsapp', contact: '',
          autoReply: 'Thank you, we have received your appointment request. The clinic will contact you to confirm the slot.'
        };
      }
      renderConfirmation(decoy);
      return;
    }

    showErrors(result.errors);
    if (!result.valid) {
      var firstInvalid = FIELDS.filter(function (id) { return result.errors[id]; })[0];
      if (firstInvalid) document.getElementById(firstInvalid).focus();
      else if (result.errors.form) formError.focus();
      return;
    }

    var record;
    try {
      record = Logic.buildEnquiry(data, options);
    } catch (e) {
      showErrors(e.errors || { form: 'Sorry, the request could not be created. Please try again.' });
      return;
    }
    var records = loadRecords();
    records.push(record);
    saveRecords(records);
    renderList();
    renderConfirmation(record);
  }

  function onBlur(event) {
    if (!submitted) return;
    var id = event.target && event.target.id;
    if (FIELDS.indexOf(id) === -1) return;
    var result = validateNow();
    setFieldError(id, result.errors[id]);
    if (id === 'preferredContact') setFieldError('contact', contactInput.value ? result.errors.contact : '');
  }

  function resetForm() {
    form.reset();
    submitted = false;
    showErrors({});
    updateContactHint();
    confirmation.hidden = true;
    form.hidden = false;
    document.getElementById('ownerName').focus();
  }

  // ---------- owner view

  function statusSelect(record) {
    var wrap = el('div', 'status-field');
    var selectId = 'status-' + record.id;
    var lab = el('label', '', 'Status');
    lab.setAttribute('for', selectId);
    var select = el('select', 'status-select status-' + record.status);
    select.id = selectId;
    STATUSES.forEach(function (s) {
      var opt = el('option', '', s.label + ' (' + s.value + ')');
      opt.value = s.value;
      if (s.value === record.status) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener('change', function () {
      updateStatus(record.id, select.value);
    });
    wrap.appendChild(lab);
    wrap.appendChild(select);
    return wrap;
  }

  function updateStatus(id, status) {
    var allowed = STATUSES.some(function (s) { return s.value === status; });
    if (!allowed) return;
    var records = loadRecords();
    records.forEach(function (r) { if (r.id === id) r.status = status; });
    saveRecords(records);
    renderList();
    showOwnerMessage('Status for ' + id + ' saved.');
    var again = document.getElementById('status-' + id);
    if (again) again.focus();
  }

  function renderList() {
    var records = newestFirst(loadRecords());
    list.textContent = '';
    emptyState.hidden = records.length > 0;
    pendingCount.textContent = String(records.filter(function (r) { return r.status === 'new'; }).length);

    records.forEach(function (r) {
      var item = el('li', 'enquiry');
      var head = el('div', 'enquiry-head');
      head.appendChild(el('strong', 'enquiry-id', r.id));
      head.appendChild(el('span', 'enquiry-time', formatCreated(r.createdAt)));
      item.appendChild(head);

      item.appendChild(el('p', 'enquiry-title',
        (r.ownerName || '') + ' · ' + label('petType', r.petType) + ' · ' + label('visitType', r.visitType)));

      var details = el('dl', 'enquiry-details');
      [
        ['Slot', (r.preferredDate || '') + ', ' + label('preferredTime', r.preferredTime)],
        ['Contact', label('preferredContact', r.preferredContact) + ': ' + (r.contact || '')],
        ['Area', r.area || ''],
        ['Reason', r.reason || '']
      ].concat(r.photoName ? [['Photo', r.photoName]] : []).forEach(function (pair) {
        details.appendChild(el('dt', '', pair[0]));
        details.appendChild(el('dd', '', pair[1]));
      });
      item.appendChild(details);
      item.appendChild(statusSelect(r));
      list.appendChild(item);
    });
  }

  function exportCsv() {
    var records = newestFirst(loadRecords());
    var csv = Logic.toCsv(records);
    var blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'bvc-appointment-requests.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    showOwnerMessage('Exported ' + records.length + ' request' + (records.length === 1 ? '' : 's') + ' to bvc-appointment-requests.csv.');
  }

  function clearData() {
    if (!window.confirm('Delete all demo requests stored in this browser?')) return;
    saveRecords([]);
    renderList();
    showOwnerMessage('Demo data cleared.');
  }

  // ---------- init

  setDateLimits();
  updateContactHint();
  form.addEventListener('submit', onSubmit);
  form.addEventListener('focusout', onBlur);
  contactSelect.addEventListener('change', updateContactHint);
  document.getElementById('new-request').addEventListener('click', resetForm);
  document.getElementById('export-csv').addEventListener('click', exportCsv);
  document.getElementById('clear-data').addEventListener('click', clearData);
  formError.setAttribute('tabindex', '-1');
  renderList();
})();
