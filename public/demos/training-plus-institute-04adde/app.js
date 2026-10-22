/* Training Plus Institute concept demo: DOM wiring (classic script).
 * Depends on logic.js (globalThis.DemoLogic). All user data is rendered with
 * textContent / createElement, never parsed as HTML.
 */
(function () {
  'use strict';

  var DemoLogic = globalThis.DemoLogic;
  var STORAGE_KEY = 'tpi-demo-enquiries';
  var STATUSES = ['new', 'quoted', 'won', 'lost'];
  var FIELD_ORDER = ['name', 'course', 'message', 'area', 'preferredContact', 'email', 'phone', 'photoName'];
  var CONTACT_LABELS = { email: 'Email', phone: 'Phone call', whatsapp: 'WhatsApp' };

  var form = document.getElementById('enquiry-form');
  var formStatus = document.getElementById('form-status');
  var confirmation = document.getElementById('confirmation');
  var ownerList = document.getElementById('owner-list');
  var ownerEmpty = document.getElementById('owner-empty');
  var ownerStatus = document.getElementById('owner-status');
  var exportBtn = document.getElementById('export-csv');
  var clearBtn = document.getElementById('clear-data');

  // Track which fields have been through a submit attempt, so errors only update live after that.
  var touched = {};

  /* ---------- storage ---------- */

  function loadEnquiries() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter(function (r) { return r && typeof r === 'object'; }) : [];
    } catch (e) {
      return [];
    }
  }

  function saveEnquiries(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      return false;
    }
  }

  function newestFirst(list) {
    return list.slice().sort(function (a, b) {
      var ta = Date.parse(a.createdAt) || 0;
      var tb = Date.parse(b.createdAt) || 0;
      return tb - ta;
    });
  }

  /* ---------- form helpers ---------- */

  function readForm() {
    var data = {};
    FIELD_ORDER.forEach(function (name) {
      if (name === 'preferredContact') {
        var checked = form.querySelector('input[name="preferredContact"]:checked');
        data.preferredContact = checked ? checked.value : '';
      } else {
        data[name] = form.elements[name].value;
      }
    });
    return data;
  }

  function controlFor(field) {
    if (field === 'preferredContact') return form.querySelector('input[name="preferredContact"]');
    return form.elements[field];
  }

  function setFieldError(field, message) {
    var el = document.getElementById('error-' + field);
    if (el) el.textContent = message || '';
    var targets = field === 'preferredContact'
      ? form.querySelectorAll('input[name="preferredContact"]')
      : [form.elements[field]];
    for (var i = 0; i < targets.length; i++) {
      if (message) targets[i].setAttribute('aria-invalid', 'true');
      else targets[i].removeAttribute('aria-invalid');
    }
  }

  function showErrors(errors) {
    FIELD_ORDER.forEach(function (field) { setFieldError(field, errors[field]); });
  }

  function refreshTouchedErrors() {
    var errors = DemoLogic.validateEnquiry(readForm()).errors;
    FIELD_ORDER.forEach(function (field) {
      if (touched[field]) setFieldError(field, errors[field]);
    });
  }

  function updateConditionalHints() {
    var contact = readForm().preferredContact;
    form.elements.email.toggleAttribute('required', contact === 'email');
    form.elements.phone.toggleAttribute('required', contact === 'phone' || contact === 'whatsapp');
  }

  /* ---------- confirmation ---------- */

  function realVersionAction(record) {
    var firstName = record.name.split(/\s+/)[0];
    if (record.preferredContact === 'whatsapp') {
      return {
        label: 'In the real version this opens WhatsApp with:',
        text: 'Hello ' + firstName + ', thank you for your enquiry about ' + record.course +
          ' at Training Plus Institute. Your reference is ' + record.id +
          '. We will send you the schedule and fees shortly.',
      };
    }
    if (record.preferredContact === 'phone') {
      return {
        label: 'In the real version this would call ' + record.phone + ' and the team would say:',
        text: 'Hello ' + firstName + ', this is Training Plus Institute calling about your ' +
          record.course + ' enquiry, reference ' + record.id + '.',
      };
    }
    return null;
  }

  function showConfirmation(record) {
    document.getElementById('conf-name').textContent = record.name;
    document.getElementById('conf-course').textContent = record.course;
    document.getElementById('conf-id').textContent = record.id;

    var contactText = record.preferredContact === 'email'
      ? 'We will reply by email to ' + record.email + '.'
      : 'We will contact you by ' + CONTACT_LABELS[record.preferredContact].toLowerCase() + ' on ' + record.phone + '.';
    document.getElementById('conf-contact').textContent = contactText;

    var action = realVersionAction(record);
    var actionBox = document.getElementById('conf-action');
    if (action) {
      document.getElementById('conf-action-label').textContent = action.label;
      document.getElementById('conf-action-text').textContent = action.text;
      actionBox.hidden = false;
    } else {
      actionBox.hidden = true;
    }

    form.hidden = true;
    confirmation.hidden = false;
    confirmation.focus();
  }

  function resetForm() {
    form.reset();
    touched = {};
    showErrors({});
    updateConditionalHints();
    confirmation.hidden = true;
    form.hidden = false;
    formStatus.textContent = 'Form cleared. You can send another enquiry.';
    form.elements.name.focus();
  }

  /* ---------- owner view ---------- */

  function formatDate(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return 'Unknown date';
    return d.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
  }

  function textEl(tag, className, text) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = text;
    return el;
  }

  function contactSummary(r) {
    var label = CONTACT_LABELS[r.preferredContact] || String(r.preferredContact || '');
    var detail = r.preferredContact === 'email' ? r.email : r.phone;
    return label + (detail ? ': ' + detail : '');
  }

  function renderOwner() {
    var list = newestFirst(loadEnquiries());
    while (ownerList.firstChild) ownerList.removeChild(ownerList.firstChild);

    ownerEmpty.hidden = list.length > 0;
    ownerList.hidden = list.length === 0;
    exportBtn.disabled = list.length === 0;
    clearBtn.disabled = list.length === 0;

    list.forEach(function (r) {
      var li = document.createElement('li');
      li.className = 'owner-item status-' + (STATUSES.indexOf(r.status) === -1 ? 'new' : r.status);

      var head = document.createElement('div');
      head.className = 'owner-head';
      head.appendChild(textEl('p', 'owner-name', String(r.name || '')));
      head.appendChild(textEl('p', 'owner-meta mono', String(r.id || '')));
      li.appendChild(head);

      var dl = document.createElement('dl');
      dl.className = 'owner-details';
      [
        ['Course', r.course],
        ['Received', formatDate(r.createdAt)],
        ['Contact', contactSummary(r)],
        ['Area', r.area],
        ['Message', r.message],
        ['File', r.photoName || '—'],
      ].forEach(function (pair) {
        var wrap = document.createElement('div');
        wrap.appendChild(textEl('dt', '', pair[0]));
        wrap.appendChild(textEl('dd', '', String(pair[1] || '')));
        dl.appendChild(wrap);
      });
      li.appendChild(dl);

      var statusWrap = document.createElement('div');
      statusWrap.className = 'owner-status-field';
      var selectId = 'status-' + String(r.id).replace(/[^A-Za-z0-9_-]/g, '_');
      var label = textEl('label', '', 'Status');
      label.htmlFor = selectId;
      var select = document.createElement('select');
      select.id = selectId;
      STATUSES.forEach(function (s) {
        var opt = document.createElement('option');
        opt.value = s;
        opt.textContent = s;
        if (s === r.status) opt.selected = true;
        select.appendChild(opt);
      });
      select.addEventListener('change', function () {
        updateStatus(r.id, select.value);
      });
      statusWrap.appendChild(label);
      statusWrap.appendChild(select);
      li.appendChild(statusWrap);

      ownerList.appendChild(li);
    });
  }

  function updateStatus(id, status) {
    if (STATUSES.indexOf(status) === -1) return;
    var list = loadEnquiries();
    var found = false;
    list.forEach(function (r) {
      if (r.id === id) { r.status = status; found = true; }
    });
    if (!found) return;
    if (saveEnquiries(list)) {
      ownerStatus.textContent = 'Status for ' + id + ' saved as "' + status + '".';
    } else {
      ownerStatus.textContent = 'Could not save the status: browser storage is unavailable.';
    }
    renderOwner();
    var select = document.getElementById('status-' + String(id).replace(/[^A-Za-z0-9_-]/g, '_'));
    if (select) select.focus();
  }

  function exportCsv() {
    var list = newestFirst(loadEnquiries());
    // Prepend a UTF-8 BOM so Excel shows Arabic and other non-Latin names correctly.
    var blob = new Blob(['﻿' + DemoLogic.toCsv(list)], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'training-plus-enquiries.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    ownerStatus.textContent = 'Exported ' + list.length + ' enquir' + (list.length === 1 ? 'y' : 'ies') + ' to training-plus-enquiries.csv.';
  }

  function clearData() {
    if (!window.confirm('Delete all demo enquiries from this browser? This cannot be undone.')) return;
    try {
      localStorage.removeItem(STORAGE_KEY);
      ownerStatus.textContent = 'Demo data cleared.';
    } catch (e) {
      ownerStatus.textContent = 'Could not clear data: browser storage is unavailable.';
    }
    renderOwner();
  }

  /* ---------- events ---------- */

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = readForm();
    var result = DemoLogic.validateEnquiry(input);
    FIELD_ORDER.forEach(function (f) { touched[f] = true; });

    if (!result.valid) {
      showErrors(result.errors);
      var count = Object.keys(result.errors).length;
      formStatus.textContent = 'Please fix ' + count + ' field' + (count === 1 ? '' : 's') + ' before sending.';
      var first = FIELD_ORDER.filter(function (f) { return result.errors[f]; })[0];
      var control = first && controlFor(first);
      if (first === 'preferredContact') control = form.querySelector('input[name="preferredContact"]:checked') || control;
      if (control) control.focus();
      return;
    }

    showErrors({});
    var record = DemoLogic.buildEnquiry(input);
    var list = loadEnquiries();
    list.push(record);
    if (!saveEnquiries(list)) {
      formStatus.textContent = 'Your enquiry could not be saved because browser storage is unavailable (for example in private mode). Please try another browser.';
      return;
    }
    formStatus.textContent = 'Enquiry sent. Reference ' + record.id + '.';
    renderOwner();
    showConfirmation(record);
  });

  form.addEventListener('input', refreshTouchedErrors);
  form.addEventListener('change', function () {
    updateConditionalHints();
    refreshTouchedErrors();
  });

  document.getElementById('send-another').addEventListener('click', resetForm);
  exportBtn.addEventListener('click', exportCsv);
  clearBtn.addEventListener('click', clearData);

  // Keep the tracker in sync if the demo is open in two tabs.
  window.addEventListener('storage', function (e) {
    if (e.key === STORAGE_KEY || e.key === null) renderOwner();
  });

  updateConditionalHints();
  renderOwner();
})();
