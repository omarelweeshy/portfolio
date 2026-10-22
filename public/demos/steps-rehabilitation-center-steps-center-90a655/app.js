/*
 * Steps Rehabilitation Center concept demo: DOM wiring.
 * Classic script; relies on globalThis.DemoLogic from logic.js.
 */
(function () {
  'use strict';

  var Logic = globalThis.DemoLogic;
  var STORAGE_KEY = 'stepsDemo.enquiries';
  var FIELDS = ['parentName', 'childAge', 'therapy', 'description', 'area', 'contactMethod',
    'contactValue', 'callbackTime', 'photoName', 'consent'];
  var STATUS_OPTIONS = [
    { value: 'new', label: 'New' },
    { value: 'quoted', label: 'Assessment offered' },
    { value: 'won', label: 'Booked' },
    { value: 'lost', label: 'Not proceeding' }
  ];

  var form = document.getElementById('enquiry-form');
  var formStatus = document.getElementById('form-status');
  var confirmation = document.getElementById('confirmation');
  var list = document.getElementById('enquiry-list');
  var emptyState = document.getElementById('owner-empty');
  var ownerStatus = document.getElementById('owner-status');
  var touched = {};
  var memoryStore = [];
  var storageAvailable = true;

  /* ---------- storage ---------- */

  function loadEnquiries() {
    if (!storageAvailable) return memoryStore.slice();
    try {
      var parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(parsed) ? parsed.filter(function (r) { return r && typeof r === 'object'; }) : [];
    } catch (e) {
      return [];
    }
  }

  function saveEnquiries(records) {
    if (storageAvailable) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
        return;
      } catch (e) {
        storageAvailable = false;
        ownerStatus.textContent = 'This browser blocks local storage, so enquiries are kept only until the page is closed.';
      }
    }
    memoryStore = records.slice();
  }

  function newestFirst(records) {
    return records.slice().sort(function (a, b) {
      return (Date.parse(b.createdAt) || 0) - (Date.parse(a.createdAt) || 0);
    });
  }

  /* ---------- form ---------- */

  function readForm() {
    var data = {};
    FIELDS.forEach(function (name) {
      var el = form.elements[name];
      data[name] = name === 'consent' ? el.checked : el.value;
    });
    return data;
  }

  function showFieldError(name, message) {
    var el = form.elements[name];
    var errorEl = document.getElementById(name + '-error');
    errorEl.textContent = message || '';
    if (message) {
      el.setAttribute('aria-invalid', 'true');
    } else {
      el.removeAttribute('aria-invalid');
    }
  }

  function validateTouched() {
    var errors = Logic.validateEnquiry(readForm()).errors;
    FIELDS.forEach(function (name) {
      if (touched[name]) showFieldError(name, errors[name]);
    });
  }

  function updateContactLabel() {
    var method = form.elements.contactMethod.value;
    var input = form.elements.contactValue;
    var label = document.getElementById('contactValue-label');
    var text = method === 'email' ? 'Email address'
      : method === 'whatsapp' ? 'WhatsApp number'
        : method === 'phone' ? 'Phone number' : 'Phone number or email';
    label.firstChild.nodeValue = text + ' ';
    input.setAttribute('inputmode', method === 'email' ? 'email' : method ? 'tel' : 'text');
    input.setAttribute('autocomplete', method === 'email' ? 'email' : 'tel');
  }

  function updateCount() {
    document.getElementById('description-count').textContent = String(form.elements.description.value.length);
  }

  function channelNote(record) {
    if (record.contactMethod === 'whatsapp') {
      return 'In the real version this opens WhatsApp with: "Hello ' + record.parentName +
        ', this is Steps Center about your assessment request ' + record.id +
        '. When is a good time to talk?"';
    }
    if (record.contactMethod === 'phone') {
      return 'In the real version the team calls ' + record.contactValue +
        ' straight from the tracker. Nothing is dialled in this demo.';
    }
    return 'In the real version the email below is sent to ' + record.contactValue +
      '. Nothing is sent in this demo.';
  }

  function showConfirmation(record) {
    document.getElementById('conf-id').textContent = record.id;
    document.getElementById('conf-callback').textContent = Logic.CALLBACK_LABELS[record.callbackTime];
    document.getElementById('conf-contact').textContent =
      Logic.CONTACT_LABELS[record.contactMethod] + ' (' + record.contactValue + ')';
    document.getElementById('conf-channel-note').textContent = channelNote(record);
    document.getElementById('ack-en').textContent = record.acknowledgement.en;
    var ar = document.getElementById('ack-ar');
    ar.setAttribute('dir', 'rtl');
    ar.textContent = record.acknowledgement.ar;

    form.reset();
    touched = {};
    FIELDS.forEach(function (name) { showFieldError(name, ''); });
    updateContactLabel();
    updateCount();
    formStatus.textContent = '';
    form.hidden = true;
    confirmation.hidden = false;
    confirmation.focus();
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = readForm();
    var result = Logic.validateEnquiry(data);
    FIELDS.forEach(function (name) {
      touched[name] = true;
      showFieldError(name, result.errors[name]);
    });
    if (!result.valid) {
      var count = Object.keys(result.errors).length;
      formStatus.textContent = 'Please check ' + count + (count === 1 ? ' field' : ' fields') + ' highlighted below.';
      var first = FIELDS.filter(function (name) { return result.errors[name]; })[0];
      form.elements[first].focus();
      return;
    }
    var record = Logic.buildEnquiry(data);
    var records = loadEnquiries();
    records.push(record);
    saveEnquiries(records);
    renderOwnerView();
    showConfirmation(record);
  });

  FIELDS.forEach(function (name) {
    var el = form.elements[name];
    el.addEventListener(name === 'consent' || el.tagName === 'SELECT' ? 'change' : 'blur', function () {
      touched[name] = true;
      validateTouched();
    });
    el.addEventListener('input', function () {
      if (touched[name]) validateTouched();
    });
  });

  form.elements.contactMethod.addEventListener('change', updateContactLabel);
  form.elements.description.addEventListener('input', updateCount);

  document.getElementById('new-enquiry').addEventListener('click', function () {
    confirmation.hidden = true;
    form.hidden = false;
    form.elements.parentName.focus();
  });

  /* ---------- owner view ---------- */

  function formatDate(iso) {
    var d = new Date(iso);
    return isNaN(d.getTime()) ? '' : d.toLocaleString(undefined, {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  }

  function addDetail(dl, term, value) {
    if (value === '' || value === undefined || value === null) return;
    var wrap = document.createElement('div');
    var dt = document.createElement('dt');
    var dd = document.createElement('dd');
    dt.textContent = term;
    dd.textContent = String(value);
    wrap.appendChild(dt);
    wrap.appendChild(dd);
    dl.appendChild(wrap);
  }

  function setStatus(id, status) {
    var records = loadEnquiries();
    records.forEach(function (r) {
      if (r.id === id) r.status = status;
    });
    saveEnquiries(records);
    renderOwnerView();
    var label = STATUS_OPTIONS.filter(function (o) { return o.value === status; })[0].label;
    ownerStatus.textContent = 'Status of ' + id + ' set to ' + label + '.';
  }

  function renderItem(record, index) {
    var li = document.createElement('li');
    li.className = 'enquiry status-' + (record.status || 'new');

    var top = document.createElement('div');
    top.className = 'enquiry-top';
    var title = document.createElement('h3');
    title.textContent = record.parentName || 'Unnamed';
    var meta = document.createElement('p');
    meta.className = 'enquiry-meta';
    meta.textContent = record.id + ' · ' + formatDate(record.createdAt);
    var heading = document.createElement('div');
    heading.appendChild(title);
    heading.appendChild(meta);

    var statusWrap = document.createElement('div');
    statusWrap.className = 'status-control';
    var selectId = 'status-' + index;
    var label = document.createElement('label');
    label.setAttribute('for', selectId);
    label.textContent = 'Status';
    var select = document.createElement('select');
    select.id = selectId;
    STATUS_OPTIONS.forEach(function (opt) {
      var o = document.createElement('option');
      o.value = opt.value;
      o.textContent = opt.label;
      if (opt.value === (record.status || 'new')) o.selected = true;
      select.appendChild(o);
    });
    select.addEventListener('change', function () { setStatus(record.id, select.value); });
    statusWrap.appendChild(label);
    statusWrap.appendChild(select);

    top.appendChild(heading);
    top.appendChild(statusWrap);

    var dl = document.createElement('dl');
    dl.className = 'enquiry-details';
    addDetail(dl, 'Help with', Logic.THERAPY_LABELS[record.therapy] || record.therapy);
    addDetail(dl, 'Child age', record.childAge);
    addDetail(dl, 'Area', record.area);
    addDetail(dl, 'Contact', (Logic.CONTACT_LABELS[record.contactMethod] || record.contactMethod) +
      ': ' + record.contactValue);
    addDetail(dl, 'Callback', Logic.CALLBACK_LABELS[record.callbackTime] || record.callbackTime);
    addDetail(dl, 'File name', record.photoName);
    addDetail(dl, 'Note', record.description);

    li.appendChild(top);
    li.appendChild(dl);
    return li;
  }

  function renderOwnerView() {
    var records = newestFirst(loadEnquiries());
    list.textContent = '';
    records.forEach(function (record, i) { list.appendChild(renderItem(record, i)); });
    emptyState.hidden = records.length > 0;
    list.hidden = records.length === 0;
  }

  document.getElementById('export-csv').addEventListener('click', function () {
    var records = newestFirst(loadEnquiries());
    // BOM so Excel opens names written in Arabic correctly.
    var blob = new Blob(['﻿' + Logic.toCsv(records)], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'steps-enquiries.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    ownerStatus.textContent = records.length
      ? 'Exported ' + records.length + (records.length === 1 ? ' enquiry' : ' enquiries') + ' to steps-enquiries.csv.'
      : 'No enquiries yet, so the CSV contains only the header row.';
  });

  document.getElementById('clear-enquiries').addEventListener('click', function () {
    if (!loadEnquiries().length) {
      ownerStatus.textContent = 'No enquiries yet, nothing to clear.';
      return;
    }
    if (!window.confirm('Remove all demo enquiries from this browser?')) return;
    saveEnquiries([]);
    renderOwnerView();
    ownerStatus.textContent = 'Demo enquiries cleared.';
  });

  updateContactLabel();
  updateCount();
  renderOwnerView();
})();
