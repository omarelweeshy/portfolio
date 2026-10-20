/*
 * J McIvor Carpentry concept demo - DOM wiring.
 * Saves enquiries to localStorage (standing in for the Google Sheet tracker),
 * renders the owner view and exports CSV. No network access.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'jmcivor-demo-enquiries';
  var STATUSES = ['new', 'quoted', 'won', 'lost'];
  var STATUS_LABELS = { new: 'New', quoted: 'Quoted', won: 'Won', lost: 'Lost' };
  var FIELDS = [
    'name', 'jobType', 'description', 'address', 'preferredDate',
    'contactMethod', 'email', 'phone', 'photoName'
  ];

  var Logic = globalThis.DemoLogic;
  var JOB_LABELS = Logic.JOB_TYPES;
  var CONTACT_LABELS = Logic.CONTACT_METHODS;

  var form = document.getElementById('enquiry-form');
  var formPanel = document.getElementById('form-panel');
  var confirmation = document.getElementById('confirmation');
  var confirmationTitle = document.getElementById('confirmation-title');
  var newEnquiryBtn = document.getElementById('new-enquiry');
  var list = document.getElementById('enquiry-list');
  var emptyState = document.getElementById('empty-state');
  var exportBtn = document.getElementById('export-csv');
  var storageWarning = document.getElementById('storage-warning');
  var ownerStatus = document.getElementById('owner-status');

  // In-memory copy, used as a fallback when localStorage is unavailable.
  var enquiries = [];
  var storageOk = true;
  var touched = {};

  /* ---------- storage ---------- */

  function isRecord(r) {
    return r !== null && typeof r === 'object' && typeof r.id === 'string' && typeof r.createdAt === 'string';
  }

  function loadEnquiries() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(isRecord).map(function (r) {
        if (STATUSES.indexOf(r.status) === -1) r.status = 'new';
        return r;
      });
    } catch (e) {
      showStorageWarning();
      return [];
    }
  }

  function saveEnquiries() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(enquiries));
    } catch (e) {
      showStorageWarning();
    }
  }

  function showStorageWarning() {
    if (!storageOk) return;
    storageOk = false;
    storageWarning.textContent = 'This browser is blocking local storage, so enquiries will only be kept until you close or reload the page.';
    storageWarning.hidden = false;
  }

  /* ---------- helpers ---------- */

  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function localToday() {
    var d = new Date();
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  }

  function formatDate(ymd) {
    if (!ymd) return 'No preference';
    var parts = ymd.split('-');
    var d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return isNaN(d.getTime())
      ? ymd
      : d.toLocaleDateString('en-NZ', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  }

  function formatDateTime(iso) {
    var d = new Date(iso);
    return isNaN(d.getTime())
      ? iso
      : d.toLocaleString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit' });
  }

  function contactSummary(rec) {
    var detail = rec.contactMethod === 'phone' ? rec.phone : rec.email;
    return (CONTACT_LABELS[rec.contactMethod] || rec.contactMethod) + (detail ? ': ' + detail : '');
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  /* ---------- form ---------- */

  function readForm() {
    var data = {};
    FIELDS.forEach(function (field) {
      var control = form.elements[field];
      if (field === 'photoName') {
        data.photoName = control.files && control.files.length ? control.files[0].name : '';
      } else {
        data[field] = control.value;
      }
    });
    return data;
  }

  function setFieldError(field, message) {
    var control = document.getElementById(field);
    var errorEl = document.getElementById(field + '-error');
    var base = control.getAttribute('data-describedby');
    if (base === null) {
      base = control.getAttribute('aria-describedby') || '';
      control.setAttribute('data-describedby', base);
    }
    errorEl.textContent = message || '';
    if (message) {
      control.setAttribute('aria-invalid', 'true');
      control.setAttribute('aria-describedby', (base ? base + ' ' : '') + errorEl.id);
    } else {
      control.removeAttribute('aria-invalid');
      if (base) control.setAttribute('aria-describedby', base);
      else control.removeAttribute('aria-describedby');
    }
  }

  function showErrors(errors, onlyTouched) {
    FIELDS.forEach(function (field) {
      if (onlyTouched && !touched[field]) return;
      setFieldError(field, errors[field]);
    });
  }

  function updateContactRequirement() {
    var method = form.elements.contactMethod.value;
    ['email', 'phone'].forEach(function (field) {
      var required = method === field;
      var control = document.getElementById(field);
      control.required = required;
      control.setAttribute('aria-required', required ? 'true' : 'false');
      document.querySelector('[data-required-for="' + field + '"]').hidden = !required;
      document.querySelector('[data-optional-for="' + field + '"]').hidden = required;
    });
  }

  function revalidate(event) {
    var field = event.target.id;
    if (FIELDS.indexOf(field) === -1) return;
    if (event.type === 'change' || event.type === 'focusout') touched[field] = true;
    if (field === 'contactMethod') {
      updateContactRequirement();
      touched.email = touched.email || !!form.elements.email.value;
      touched.phone = touched.phone || !!form.elements.phone.value;
    }
    showErrors(Logic.validateEnquiry(readForm(), { today: localToday() }).errors, true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    var input = readForm();
    var options = { today: localToday() };
    var result = Logic.validateEnquiry(input, options);
    FIELDS.forEach(function (field) { touched[field] = true; });
    showErrors(result.errors, false);

    if (!result.valid) {
      var first = FIELDS.filter(function (f) { return result.errors[f]; })[0];
      document.getElementById(first).focus();
      return;
    }

    var record = Logic.buildEnquiry(input, options);
    enquiries.push(record);
    saveEnquiries();
    renderList();
    showConfirmation(record);
  }

  function showConfirmation(rec) {
    document.getElementById('confirmation-text').textContent =
      'Thanks ' + rec.name + '. J McIvor Carpentry would get back to you by ' +
      (rec.contactMethod === 'phone' ? 'phone' : 'email') + ' to confirm a time.';
    document.getElementById('confirm-jobType').textContent = JOB_LABELS[rec.jobType] || rec.jobType;
    document.getElementById('confirm-address').textContent = rec.address;
    document.getElementById('confirm-date').textContent = formatDate(rec.preferredDate);
    document.getElementById('confirm-contact').textContent = contactSummary(rec);
    formPanel.hidden = true;
    confirmation.hidden = false;
    confirmationTitle.focus();
  }

  function resetForm() {
    form.reset();
    touched = {};
    showErrors({}, false);
    updateContactRequirement();
    confirmation.hidden = true;
    formPanel.hidden = false;
    document.getElementById('name').focus();
  }

  /* ---------- owner view ---------- */

  function sortedEnquiries() {
    return enquiries.slice().sort(function (a, b) {
      return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0;
    });
  }

  function renderItem(rec) {
    var item = el('li', 'enquiry status-' + rec.status);
    item.setAttribute('data-id', rec.id);

    var head = el('div', 'enquiry-head');
    var title = el('h3', 'enquiry-title', (JOB_LABELS[rec.jobType] || rec.jobType) + ' – ' + rec.address);
    head.appendChild(title);

    var statusWrap = el('div', 'status-control');
    var selectId = 'status-' + rec.id;
    var label = el('label', null, 'Status');
    label.setAttribute('for', selectId);
    var select = el('select', 'status-select');
    select.id = selectId;
    select.setAttribute('data-id', rec.id);
    STATUSES.forEach(function (s) {
      var opt = el('option', null, STATUS_LABELS[s]);
      opt.value = s;
      if (s === rec.status) opt.selected = true;
      select.appendChild(opt);
    });
    statusWrap.appendChild(label);
    statusWrap.appendChild(select);
    head.appendChild(statusWrap);
    item.appendChild(head);

    var meta = el('dl', 'enquiry-meta');
    [
      ['Name', rec.name],
      ['Received', formatDateTime(rec.createdAt)],
      ['Preferred date', formatDate(rec.preferredDate)],
      ['Contact', contactSummary(rec)],
      ['Photo', rec.photoName || 'None']
    ].forEach(function (pair) {
      var wrap = el('div');
      wrap.appendChild(el('dt', null, pair[0]));
      wrap.appendChild(el('dd', null, pair[1]));
      meta.appendChild(wrap);
    });
    item.appendChild(meta);
    item.appendChild(el('p', 'enquiry-desc', rec.description));
    return item;
  }

  function renderList() {
    var items = sortedEnquiries();
    list.textContent = '';
    items.forEach(function (rec) { list.appendChild(renderItem(rec)); });
    emptyState.hidden = items.length > 0;
    list.hidden = items.length === 0;
    exportBtn.disabled = items.length === 0;
  }

  function handleStatusChange(event) {
    var select = event.target;
    if (!select.classList.contains('status-select')) return;
    var id = select.getAttribute('data-id');
    var status = select.value;
    if (STATUSES.indexOf(status) === -1) return;
    for (var i = 0; i < enquiries.length; i++) {
      if (enquiries[i].id === id) {
        enquiries[i].status = status;
        break;
      }
    }
    saveEnquiries();
    var item = select.closest('.enquiry');
    STATUSES.forEach(function (s) { item.classList.remove('status-' + s); });
    item.classList.add('status-' + status);
    ownerStatus.textContent = 'Status updated to ' + STATUS_LABELS[status] + '.';
  }

  function exportCsv() {
    if (!enquiries.length) return;
    // Leading BOM so Excel opens the UTF-8 file with the right characters.
    var blob = new Blob(['﻿' + Logic.toCsv(sortedEnquiries())], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'enquiries.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    ownerStatus.textContent = 'CSV export started: enquiries.csv.';
  }

  /* ---------- init ---------- */

  form.elements.preferredDate.min = localToday();
  enquiries = loadEnquiries();
  updateContactRequirement();
  renderList();

  form.addEventListener('submit', handleSubmit);
  form.addEventListener('focusout', revalidate);
  form.addEventListener('change', revalidate);
  form.addEventListener('input', revalidate);
  newEnquiryBtn.addEventListener('click', resetForm);
  list.addEventListener('change', handleStatusChange);
  exportBtn.addEventListener('click', exportCsv);
})();
