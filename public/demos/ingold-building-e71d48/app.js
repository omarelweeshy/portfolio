/*
 * DOM wiring for the Ingold Building concept demo: form validation, confirmation,
 * owner view (localStorage) and CSV download. Classic script; needs logic.js first.
 */
(function () {
  'use strict';

  var Logic = globalThis.DemoLogic;
  var STORAGE_KEY = 'ingold-demo-enquiries';
  var STATUSES = ['new', 'quoted', 'won', 'lost'];
  var FORM_FIELDS = ['projectType', 'description', 'address', 'budget', 'timeframe', 'planFileName',
    'name', 'preferredContact', 'email', 'phone'];

  var LABELS = {
    projectType: {
      'new-build': 'New build', renovation: 'Renovation', extension: 'Extension',
      'deck-outdoor': 'Deck or outdoor area', maintenance: 'Maintenance or repairs', other: 'Something else'
    },
    budget: {
      'under-50k': 'Under $50k', '50k-150k': '$50k to $150k', '150k-300k': '$150k to $300k',
      '300k-plus': '$300k plus', 'not-sure': 'Not sure yet'
    },
    timeframe: {
      asap: 'As soon as possible', '1-3-months': '1 to 3 months', '3-6-months': '3 to 6 months',
      '6-plus-months': '6 months or more', flexible: 'Flexible'
    },
    preferredContact: { email: 'Email', phone: 'Phone' },
    status: { 'new': 'New', quoted: 'Quoted', won: 'Won', lost: 'Lost' }
  };

  var form = document.getElementById('enquiry-form');
  var formStatus = document.getElementById('form-status');
  var confirmation = document.getElementById('confirmation');
  var summary = document.getElementById('confirmation-summary');
  var list = document.getElementById('enquiry-list');
  var emptyState = document.getElementById('empty-state');
  var ownerStatus = document.getElementById('owner-status');
  var exportButton = document.getElementById('export-csv');
  var clearButton = document.getElementById('clear-all');

  if (!Logic || !form) {
    if (formStatus) formStatus.textContent = 'Sorry, the demo could not start (logic.js did not load).';
    return;
  }

  var touched = {};
  var submitAttempted = false;
  var storageAvailable = true;

  // ------------------------------------------------------------ storage

  function loadEnquiries() {
    var raw;
    try {
      raw = globalThis.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      storageAvailable = false;
      return [];
    }
    if (!raw) return [];
    try {
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(function (rec) {
        return rec && typeof rec === 'object' && typeof rec.id === 'string' && rec.id;
      }).map(function (rec) {
        if (STATUSES.indexOf(rec.status) === -1) rec.status = 'new';
        return rec;
      });
    } catch (e) {
      return [];
    }
  }

  function saveEnquiries(records) {
    try {
      globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      storageAvailable = true;
      return true;
    } catch (e) {
      storageAvailable = false;
      return false;
    }
  }

  // In-memory copy so the demo still works if the browser blocks storage on file://.
  var enquiries = loadEnquiries();

  function newestFirst(records) {
    return records.slice().sort(function (a, b) {
      var ta = Date.parse(a.createdAt) || 0;
      var tb = Date.parse(b.createdAt) || 0;
      return tb - ta;
    });
  }

  // ------------------------------------------------------------ form

  function control(id) {
    return document.getElementById(id);
  }

  function readForm() {
    var fileInput = control('planFile');
    var file = fileInput.files && fileInput.files[0];
    var data = { planFileName: file ? file.name : '' };
    FORM_FIELDS.forEach(function (field) {
      if (field !== 'planFileName') data[field] = control(field).value;
    });
    return data;
  }

  // planFileName errors are shown against the planFile input.
  function controlId(field) {
    return field === 'planFileName' ? 'planFile' : field;
  }

  function setFieldError(field, message) {
    var id = controlId(field);
    var input = control(id);
    var errorEl = control(id + '-error');
    if (!input || !errorEl) return;
    if (message) {
      errorEl.textContent = message;
      errorEl.hidden = false;
      input.setAttribute('aria-invalid', 'true');
    } else {
      errorEl.textContent = '';
      errorEl.hidden = true;
      input.removeAttribute('aria-invalid');
    }
  }

  function showErrors(errors, onlyTouched) {
    FORM_FIELDS.forEach(function (field) {
      var show = !onlyTouched || submitAttempted || touched[field];
      setFieldError(field, show ? errors[field] : '');
    });
  }

  function updateContactHints() {
    var preferred = control('preferredContact').value;
    control('email-req').hidden = preferred !== 'email';
    control('phone-req').hidden = preferred !== 'phone';
    control('email').required = preferred === 'email';
    control('phone').required = preferred === 'phone';
  }

  function revalidate() {
    showErrors(Logic.validateEnquiry(readForm()).errors, true);
  }

  function fieldFromEvent(event) {
    var id = event.target && event.target.id;
    if (!id) return null;
    return id === 'planFile' ? 'planFileName' : id;
  }

  form.addEventListener('focusout', function (event) {
    var field = fieldFromEvent(event);
    if (!field || FORM_FIELDS.indexOf(field) === -1) return;
    touched[field] = true;
    revalidate();
  });

  form.addEventListener('input', function (event) {
    var field = fieldFromEvent(event);
    if (field && (touched[field] || submitAttempted)) revalidate();
  });

  form.addEventListener('change', function (event) {
    var field = fieldFromEvent(event);
    if (!field) return;
    if (field === 'preferredContact') updateContactHints();
    touched[field] = true;
    revalidate();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    submitAttempted = true;
    var data = readForm();
    var result = Logic.validateEnquiry(data);
    showErrors(result.errors, false);

    if (!result.valid) {
      var count = Object.keys(result.errors).length;
      formStatus.textContent = 'Please fix ' + count + (count === 1 ? ' field' : ' fields') + ' highlighted below.';
      formStatus.className = 'form-status is-error';
      var first = FORM_FIELDS.filter(function (f) { return result.errors[f]; })[0];
      var firstInvalid = control(controlId(first));
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var record = Logic.buildEnquiry(data);
    enquiries.push(record);
    var saved = saveEnquiries(enquiries);
    formStatus.textContent = '';
    formStatus.className = 'form-status';
    showConfirmation(record, saved);
    renderOwnerView();
  });

  function addSummaryRow(target, label, value) {
    var dt = document.createElement('dt');
    dt.textContent = label;
    var dd = document.createElement('dd');
    dd.textContent = value;
    target.appendChild(dt);
    target.appendChild(dd);
  }

  function labelFor(group, value) {
    return (LABELS[group] && LABELS[group][value]) || value || '';
  }

  function showConfirmation(record, saved) {
    var firstName = record.name.split(/\s+/)[0];
    document.getElementById('confirmation-title').textContent = 'Thank you, ' + firstName + ', your enquiry is in!';
    document.getElementById('confirmation-message').textContent =
      (record.planFileName ? 'We\'ve received your plans. ' : 'We\'ve received your enquiry. ') +
      'Craig will review the details and get back to you by ' +
      (record.preferredContact === 'phone' ? 'phone' : 'email') + ' with an all inclusive quote.' +
      (saved ? '' : ' (This browser blocked local storage, so the entry is only kept until you reload.)');
    summary.textContent = '';
    addSummaryRow(summary, 'Project', labelFor('projectType', record.projectType));
    addSummaryRow(summary, 'Location', record.address);
    addSummaryRow(summary, 'Budget', labelFor('budget', record.budget));
    addSummaryRow(summary, 'Timeframe', labelFor('timeframe', record.timeframe));
    addSummaryRow(summary, 'Plans', record.planFileName || 'None attached');
    form.hidden = true;
    confirmation.hidden = false;
    confirmation.focus();
  }

  function resetForm() {
    form.reset();
    touched = {};
    submitAttempted = false;
    showErrors({}, false);
    updateContactHints();
    confirmation.hidden = true;
    form.hidden = false;
    control('projectType').focus();
  }

  document.getElementById('new-enquiry').addEventListener('click', resetForm);

  // ------------------------------------------------------------ owner view

  function formatDate(iso) {
    var date = new Date(iso);
    if (isNaN(date.getTime())) return 'Unknown date';
    return date.toLocaleString('en-NZ', {
      day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit'
    });
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderEnquiry(rec) {
    var item = el('li', 'enquiry status-' + rec.status);

    var top = el('div', 'enquiry-top');
    var titleWrap = el('div');
    titleWrap.appendChild(el('h3', 'enquiry-title', labelFor('projectType', rec.projectType) + ' – ' + (rec.name || '')));
    var time = el('time', 'enquiry-date', formatDate(rec.createdAt));
    time.setAttribute('datetime', String(rec.createdAt || ''));
    titleWrap.appendChild(time);
    top.appendChild(titleWrap);

    var statusWrap = el('div', 'status-control');
    var selectId = 'status-' + rec.id.replace(/[^A-Za-z0-9_-]/g, '');
    var statusLabel = el('label', null, 'Status');
    statusLabel.setAttribute('for', selectId);
    var select = el('select', 'status-select');
    select.id = selectId;
    select.setAttribute('data-id', rec.id);
    STATUSES.forEach(function (status) {
      var option = el('option', null, LABELS.status[status]);
      option.value = status;
      if (status === rec.status) option.selected = true;
      select.appendChild(option);
    });
    statusWrap.appendChild(statusLabel);
    statusWrap.appendChild(select);
    top.appendChild(statusWrap);
    item.appendChild(top);

    item.appendChild(el('p', 'enquiry-desc', rec.description || ''));

    var details = el('dl', 'enquiry-details');
    addSummaryRow(details, 'Location', rec.address || '');
    addSummaryRow(details, 'Budget', labelFor('budget', rec.budget));
    addSummaryRow(details, 'Timeframe', labelFor('timeframe', rec.timeframe));
    addSummaryRow(details, 'Contact', labelFor('preferredContact', rec.preferredContact) + ': ' +
      ([rec.email, rec.phone].filter(Boolean).join(' / ') || 'not given'));
    addSummaryRow(details, 'Plans', rec.planFileName || 'None attached');
    item.appendChild(details);

    return item;
  }

  function renderOwnerView() {
    list.textContent = '';
    var sorted = newestFirst(enquiries);
    sorted.forEach(function (rec) { list.appendChild(renderEnquiry(rec)); });
    emptyState.hidden = sorted.length > 0;
    list.hidden = sorted.length === 0;
    exportButton.disabled = sorted.length === 0;
    clearButton.disabled = sorted.length === 0;
    if (!storageAvailable) {
      ownerStatus.textContent = 'Local storage is blocked in this browser, so enquiries are kept only until the page reloads.';
    }
  }

  list.addEventListener('change', function (event) {
    var target = event.target;
    if (!target.classList || !target.classList.contains('status-select')) return;
    var id = target.getAttribute('data-id');
    var status = target.value;
    if (STATUSES.indexOf(status) === -1) return;
    var rec = enquiries.filter(function (r) { return r.id === id; })[0];
    if (!rec) return;
    rec.status = status;
    saveEnquiries(enquiries);
    var item = target.closest('li');
    if (item) item.className = 'enquiry status-' + status;
    ownerStatus.textContent = 'Status for ' + (rec.name || 'enquiry') + ' set to ' + LABELS.status[status] + '.';
  });

  exportButton.addEventListener('click', function () {
    var csv = Logic.toCsv(newestFirst(enquiries));
    // BOM so Excel opens the UTF-8 file with the right characters.
    var blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'ingold-enquiries-' + new Date().toISOString().slice(0, 10) + '.csv';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    ownerStatus.textContent = 'Exported ' + enquiries.length + (enquiries.length === 1 ? ' enquiry' : ' enquiries') + ' to CSV.';
  });

  clearButton.addEventListener('click', function () {
    if (!globalThis.confirm('Delete all demo enquiries stored in this browser?')) return;
    enquiries = [];
    try {
      globalThis.localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      storageAvailable = false;
    }
    renderOwnerView();
    ownerStatus.textContent = 'Demo data cleared.';
  });

  updateContactHints();
  renderOwnerView();
})();
