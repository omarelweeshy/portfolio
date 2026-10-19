/*
 * Wired Together Electrical concept demo: DOM wiring.
 * Classic script; relies on globalThis.DemoLogic from logic.js.
 * Enquiries live in localStorage under DemoLogic.STORAGE_KEY ("wte-demo-enquiries").
 */
(function () {
  'use strict';

  var DemoLogic = globalThis.DemoLogic;
  if (!DemoLogic) {
    throw new Error('logic.js must be loaded before app.js');
  }

  // Validation field name -> form control id (the photo control stores only its file name).
  var CONTROL_IDS = {
    name: 'name',
    jobType: 'jobType',
    description: 'description',
    suburb: 'suburb',
    address: 'address',
    contactMethod: 'contactMethod',
    phone: 'phone',
    email: 'email',
    photoName: 'photo'
  };
  var FIELD_ORDER = Object.keys(CONTROL_IDS);

  var form = document.getElementById('quote-form');
  var formStatus = document.getElementById('form-status');
  var confirmation = document.getElementById('confirmation');
  var confirmationId = document.getElementById('confirmation-id');
  var confirmationContact = document.getElementById('confirmation-contact');
  var newEnquiryButton = document.getElementById('new-enquiry');
  var list = document.getElementById('enquiry-list');
  var emptyState = document.getElementById('empty-state');
  var exportButton = document.getElementById('export-csv');
  var clearButton = document.getElementById('clear-data');
  var ownerStatus = document.getElementById('owner-status');
  var contactFieldset = form.querySelector('fieldset');

  var storage = getStorage();
  var enquiries = DemoLogic.loadEnquiries(storage);
  var showLiveErrors = false;

  // localStorage can be blocked (privacy settings, some file:// setups); fall back to memory.
  function getStorage() {
    try {
      var ls = window.localStorage;
      var probe = DemoLogic.STORAGE_KEY + '-probe';
      ls.setItem(probe, '1');
      ls.removeItem(probe);
      return ls;
    } catch (e) {
      var memory = {};
      return {
        getItem: function (key) { return Object.prototype.hasOwnProperty.call(memory, key) ? memory[key] : null; },
        setItem: function (key, value) { memory[key] = String(value); },
        removeItem: function (key) { delete memory[key]; }
      };
    }
  }

  function persist(records) {
    try {
      DemoLogic.saveEnquiries(storage, records);
      enquiries = records;
      return true;
    } catch (e) {
      setOwnerStatus('Could not save to this browser\'s storage. It may be full or blocked.');
      return false;
    }
  }

  function setOwnerStatus(message) {
    ownerStatus.textContent = message;
  }

  // ---------- Quote form ----------

  function readForm() {
    var checked = form.querySelector('input[name="contactMethod"]:checked');
    var photo = document.getElementById('photo');
    var value = function (id) { return document.getElementById(id).value; };
    return {
      name: value('name'),
      jobType: value('jobType'),
      description: value('description'),
      suburb: value('suburb'),
      address: value('address'),
      contactMethod: checked ? checked.value : '',
      phone: value('phone'),
      email: value('email'),
      photoName: photo.files && photo.files.length ? photo.files[0].name : ''
    };
  }

  function controlFor(field) {
    if (field === 'contactMethod') {
      return form.querySelector('input[name="contactMethod"]:checked') ||
        form.querySelector('input[name="contactMethod"]');
    }
    return document.getElementById(CONTROL_IDS[field]);
  }

  function showErrors(errors) {
    FIELD_ORDER.forEach(function (field) {
      var id = CONTROL_IDS[field];
      var message = errors[field] || '';
      document.getElementById(id + '-error').textContent = message;
      var target = field === 'contactMethod' ? contactFieldset : document.getElementById(id);
      if (message) target.setAttribute('aria-invalid', 'true');
      else target.removeAttribute('aria-invalid');
    });
  }

  function updateContactHints() {
    var method = readForm().contactMethod;
    document.getElementById('phone-note').textContent = method === 'phone' ? '(required for phone contact)' : '(optional)';
    document.getElementById('email-note').textContent = method === 'email' ? '(required for email contact)' : '(optional)';
  }

  function onSubmit(event) {
    event.preventDefault();
    var input = readForm();
    var result = DemoLogic.validateEnquiry(input);
    showErrors(result.errors);

    if (!result.valid) {
      showLiveErrors = true;
      var invalid = Object.keys(result.errors).sort(function (a, b) {
        return FIELD_ORDER.indexOf(a) - FIELD_ORDER.indexOf(b);
      });
      formStatus.textContent = invalid.length === 1
        ? 'Please fix the highlighted field below.'
        : 'Please fix the ' + invalid.length + ' highlighted fields below.';
      controlFor(invalid[0]).focus();
      return;
    }

    var record = DemoLogic.buildEnquiry(input);
    persist([record].concat(enquiries));
    renderOwnerView();

    formStatus.textContent = '';
    showLiveErrors = false;
    confirmationId.textContent = record.id;
    confirmationContact.textContent = record.contactMethod === 'email' ? 'email' : 'phone';
    form.hidden = true;
    confirmation.hidden = false;
    confirmation.focus();
  }

  function onFieldChange() {
    updateContactHints();
    if (!showLiveErrors) return;
    var errors = DemoLogic.validateEnquiry(readForm()).errors;
    showErrors(errors);
    if (Object.keys(errors).length === 0) formStatus.textContent = '';
  }

  function startNewEnquiry() {
    form.reset();
    showErrors({});
    updateContactHints();
    confirmation.hidden = true;
    form.hidden = false;
    document.getElementById('name').focus();
  }

  // ---------- Owner view ----------

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function formatDate(iso) {
    var date = new Date(iso);
    if (isNaN(date.getTime())) return 'Unknown date';
    return date.toLocaleString('en-NZ', { dateStyle: 'medium', timeStyle: 'short' });
  }

  function renderEnquiry(record) {
    var item = el('li', 'enquiry');
    item.setAttribute('data-status', record.status);

    var body = el('div', 'enquiry-body');
    body.appendChild(el('h3', '', (record.name || 'Unnamed') + ' ·' + (record.jobType || 'Job type not given')));
    body.appendChild(el('p', 'enquiry-meta',
      record.id + ' ·' + formatDate(record.createdAt) + ' ·' +
      [record.address, record.suburb].filter(Boolean).join(', ')));
    body.appendChild(el('p', 'enquiry-desc', record.description || ''));

    var contact = 'Prefers ' + (record.contactMethod || 'any') + ': ' +
      [record.phone, record.email].filter(Boolean).join(' / ');
    if (record.photoName) contact += ' ·Photo: ' + record.photoName;
    body.appendChild(el('p', 'enquiry-meta', contact));
    item.appendChild(body);

    var statusWrap = el('div', 'enquiry-status');
    var selectId = 'status-' + record.id;
    var label = el('label', '', 'Status');
    label.setAttribute('for', selectId);
    var select = el('select');
    select.id = selectId;
    select.setAttribute('data-id', record.id);
    DemoLogic.STATUSES.forEach(function (status) {
      var option = el('option', '', status.charAt(0).toUpperCase() + status.slice(1));
      option.value = status;
      option.selected = status === record.status;
      select.appendChild(option);
    });
    statusWrap.appendChild(label);
    statusWrap.appendChild(select);
    item.appendChild(statusWrap);
    return item;
  }

  function renderOwnerView() {
    var sorted = DemoLogic.sortNewestFirst(enquiries);
    list.textContent = '';
    sorted.forEach(function (record) {
      list.appendChild(renderEnquiry(record));
    });
    emptyState.hidden = sorted.length > 0;
    list.hidden = sorted.length === 0;
    exportButton.disabled = sorted.length === 0;
    clearButton.disabled = sorted.length === 0;
  }

  function onStatusChange(event) {
    var select = event.target;
    if (!select.matches('select[data-id]')) return;
    var id = select.getAttribute('data-id');
    var updated = DemoLogic.updateStatus(enquiries, id, select.value);
    if (persist(updated)) {
      select.closest('.enquiry').setAttribute('data-status', select.value);
      setOwnerStatus('Enquiry ' + id + ' marked as ' + select.value + '.');
    }
  }

  function exportCsv() {
    var csv = DemoLogic.toCsv(DemoLogic.sortNewestFirst(enquiries));
    // The BOM makes Excel read the file as UTF-8 (macrons, apostrophes).
    var blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'wired-together-enquiries-' + new Date().toISOString().slice(0, 10) + '.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    setOwnerStatus('Exported ' + enquiries.length + ' enquir' + (enquiries.length === 1 ? 'y' : 'ies') + ' to CSV.');
  }

  function clearData() {
    if (!window.confirm('Delete all demo enquiries saved in this browser?')) return;
    if (persist([])) {
      renderOwnerView();
      setOwnerStatus('Demo data cleared.');
    }
  }

  form.addEventListener('submit', onSubmit);
  form.addEventListener('input', onFieldChange);
  form.addEventListener('change', onFieldChange);
  newEnquiryButton.addEventListener('click', startNewEnquiry);
  list.addEventListener('change', onStatusChange);
  exportButton.addEventListener('click', exportCsv);
  clearButton.addEventListener('click', clearData);

  updateContactHints();
  renderOwnerView();
})();
