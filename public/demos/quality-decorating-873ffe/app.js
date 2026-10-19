/*
 * Quality Decorating Ltd concept demo: DOM wiring.
 * Classic script; requires logic.js (globalThis.DemoLogic) to be loaded first.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'qd-demo-enquiries';
  var STATUSES = ['new', 'quoted', 'won', 'lost'];
  var FIELD_ORDER = ['name', 'preferredContact', 'phone', 'email', 'suburb', 'jobType', 'description', 'photoName'];
  var CONTACT_LABELS = { phone: 'phone', text: 'text', email: 'email' };

  var DemoLogic = globalThis.DemoLogic;
  var form = document.getElementById('enquiry-form');
  var confirmation = document.getElementById('confirmation');
  var list = document.getElementById('enquiry-list');
  var emptyState = document.getElementById('empty-state');
  var ownerStatus = document.getElementById('owner-status');
  var photoInput = document.getElementById('photo');

  var jobLabels = {};
  DemoLogic.JOB_TYPES.forEach(function (j) { jobLabels[j.value] = j.label; });

  // ---------------------------------------------------------------- storage
  var storageOk = true;

  function loadEnquiries() {
    try {
      var parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(function (e) {
        return e !== null && typeof e === 'object' && typeof e.id === 'string';
      });
    } catch (err) {
      storageOk = false;
      return [];
    }
  }

  function saveEnquiries(enquiries) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(enquiries));
      storageOk = true;
      return true;
    } catch (err) {
      storageOk = false;
      return false;
    }
  }

  function announce(message) {
    ownerStatus.textContent = message;
  }

  // ---------------------------------------------------------------- form
  function readForm() {
    var checked = form.querySelector('input[name="preferredContact"]:checked');
    var file = photoInput.files && photoInput.files[0];
    function value(id) { return document.getElementById(id).value; }
    return {
      name: value('name'),
      phone: value('phone'),
      email: value('email'),
      suburb: value('suburb'),
      jobType: value('jobType'),
      description: value('description'),
      preferredContact: checked ? checked.value : '',
      photoName: file ? file.name : ''
    };
  }

  function controlFor(field) {
    if (field === 'preferredContact') return form.querySelector('input[name="preferredContact"]');
    if (field === 'photoName') return photoInput;
    return document.getElementById(field);
  }

  function setFieldError(field, message) {
    var errorEl = document.getElementById(field + '-error');
    if (errorEl) errorEl.textContent = message || '';
    var targets = field === 'preferredContact'
      ? form.querySelectorAll('input[name="preferredContact"]')
      : [controlFor(field)];
    Array.prototype.forEach.call(targets, function (el) {
      if (!el) return;
      if (message) el.setAttribute('aria-invalid', 'true');
      else el.removeAttribute('aria-invalid');
    });
  }

  function showErrors(errors) {
    FIELD_ORDER.forEach(function (field) { setFieldError(field, errors[field]); });
  }

  function updateContactHints() {
    var method = readForm().preferredContact;
    document.getElementById('phone-req').textContent =
      method === 'email' ? '(optional)' : '(needed for call or text)';
    document.getElementById('email-req').textContent =
      method === 'email' ? '(needed for email)' : '(optional)';
  }

  // Re-check a field live once it has been flagged, so errors clear as the user fixes them.
  function revalidateFlagged() {
    var result = DemoLogic.validateEnquiry(readForm());
    FIELD_ORDER.forEach(function (field) {
      var errorEl = document.getElementById(field + '-error');
      if (errorEl && errorEl.textContent) setFieldError(field, result.errors[field]);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    var input = readForm();
    var result = DemoLogic.validateEnquiry(input);
    showErrors(result.errors);
    if (!result.valid) {
      for (var i = 0; i < FIELD_ORDER.length; i++) {
        if (result.errors[FIELD_ORDER[i]]) {
          controlFor(FIELD_ORDER[i]).focus();
          break;
        }
      }
      return;
    }

    var enquiry = DemoLogic.buildEnquiry(input);
    var enquiries = loadEnquiries();
    enquiries.push(enquiry);
    var saved = saveEnquiries(enquiries);
    renderList(enquiries);
    if (!saved) {
      announce('This browser blocked local storage, so the enquiry could not be saved for the Owner view.');
    }

    document.getElementById('confirm-name').textContent = enquiry.name;
    document.getElementById('confirm-ref').textContent = enquiry.id;
    document.getElementById('confirm-method').textContent = CONTACT_LABELS[enquiry.preferredContact];
    form.hidden = true;
    confirmation.hidden = false;
    confirmation.focus();
  }

  function startNewEnquiry() {
    form.reset();
    showErrors({});
    updateContactHints();
    confirmation.hidden = true;
    form.hidden = false;
    document.getElementById('name').focus();
  }

  // ---------------------------------------------------------------- owner view
  function formatDate(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleString('en-NZ', { dateStyle: 'medium', timeStyle: 'short' });
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function detail(dl, term, value) {
    if (!value) return;
    dl.appendChild(el('dt', '', term));
    dl.appendChild(el('dd', '', value));
  }

  function renderItem(enquiry) {
    var item = el('li', 'enquiry');
    var status = STATUSES.indexOf(enquiry.status) === -1 ? 'new' : enquiry.status;
    item.setAttribute('data-status', status);

    var top = el('div', 'enquiry-top');
    var title = el('div', 'enquiry-title');
    title.appendChild(el('h3', 'enquiry-name', String(enquiry.name || '')));
    title.appendChild(el('p', 'enquiry-meta',
      (jobLabels[enquiry.jobType] || String(enquiry.jobType || '')) + ' · ' +
      String(enquiry.suburb || '') + ' · ' + formatDate(enquiry.createdAt)));
    top.appendChild(title);

    var statusWrap = el('div', 'status-wrap');
    var selectId = 'status-' + enquiry.id.replace(/[^A-Za-z0-9_-]/g, '_');
    var label = el('label', 'status-label', 'Status');
    label.setAttribute('for', selectId);
    var select = el('select', 'status-select');
    select.id = selectId;
    select.setAttribute('aria-label', 'Status for ' + (enquiry.name || 'enquiry') + ' (' + enquiry.id + ')');
    STATUSES.forEach(function (s) {
      var opt = el('option', '', s.charAt(0).toUpperCase() + s.slice(1));
      opt.value = s;
      if (s === status) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener('change', function () {
      updateStatus(enquiry.id, select.value);
      item.setAttribute('data-status', select.value);
    });
    statusWrap.appendChild(label);
    statusWrap.appendChild(select);
    top.appendChild(statusWrap);
    item.appendChild(top);

    item.appendChild(el('p', 'enquiry-desc', String(enquiry.description || '')));

    var dl = el('dl', 'enquiry-details');
    detail(dl, 'Reference', enquiry.id);
    detail(dl, 'Prefers', CONTACT_LABELS[enquiry.preferredContact] || '');
    detail(dl, 'Phone', String(enquiry.phone || ''));
    detail(dl, 'Email', String(enquiry.email || ''));
    detail(dl, 'Photo', String(enquiry.photoName || ''));
    item.appendChild(dl);
    return item;
  }

  function renderList(enquiries) {
    var sorted = enquiries.slice().sort(function (a, b) {
      return String(b.createdAt).localeCompare(String(a.createdAt));
    });
    list.textContent = '';
    sorted.forEach(function (e) { list.appendChild(renderItem(e)); });
    emptyState.hidden = sorted.length > 0;
    list.hidden = sorted.length === 0;
  }

  function updateStatus(id, status) {
    if (STATUSES.indexOf(status) === -1) return;
    var enquiries = loadEnquiries();
    enquiries.forEach(function (e) { if (e.id === id) e.status = status; });
    if (saveEnquiries(enquiries)) announce('Status for ' + id + ' set to ' + status + '.');
    else announce('Could not save the status change: local storage is unavailable.');
  }

  function exportCsv() {
    var enquiries = loadEnquiries().sort(function (a, b) {
      return String(b.createdAt).localeCompare(String(a.createdAt));
    });
    if (enquiries.length === 0) {
      announce('There are no enquiries to export yet.');
      return;
    }
    // Leading BOM so Excel opens the UTF-8 file with macrons intact.
    var blob = new Blob(['﻿' + DemoLogic.toCsv(enquiries)], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'quality-decorating-enquiries.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    announce('Exported ' + enquiries.length + ' enquir' + (enquiries.length === 1 ? 'y' : 'ies') + ' to CSV.');
  }

  function clearData() {
    if (!window.confirm('Remove all demo enquiries saved in this browser?')) return;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      announce('Could not clear demo data: local storage is unavailable.');
      return;
    }
    renderList([]);
    announce('Demo data cleared.');
  }

  // ---------------------------------------------------------------- init
  form.addEventListener('submit', handleSubmit);
  form.addEventListener('input', revalidateFlagged);
  form.addEventListener('change', function (event) {
    if (event.target.name === 'preferredContact') updateContactHints();
    revalidateFlagged();
  });
  document.getElementById('new-enquiry').addEventListener('click', startNewEnquiry);
  document.getElementById('export-csv').addEventListener('click', exportCsv);
  document.getElementById('clear-data').addEventListener('click', clearData);

  updateContactHints();
  renderList(loadEnquiries());
  if (!storageOk) {
    announce('Local storage is unavailable in this browser, so enquiries will not be kept.');
  }
})();
