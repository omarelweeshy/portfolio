/* I-Clean concept demo: DOM wiring for the enquiry form and the owner view.
 * Classic script; relies on globalThis.DemoLogic from logic.js. */
(function () {
  'use strict';

  var DemoLogic = globalThis.DemoLogic;
  var STORAGE_KEY = 'iclean-demo-enquiries';
  var STATUSES = ['new', 'quoted', 'won', 'lost'];
  var FIELDS = ['name', 'jobType', 'description', 'location', 'contactMethod', 'phone', 'email', 'photoName'];
  var CONTACT_LABELS = { phone: 'phone', email: 'email' };

  var form = document.getElementById('enquiry-form');
  var confirmation = document.getElementById('confirmation');
  var confirmationText = document.getElementById('confirmation-text');
  var newEnquiryBtn = document.getElementById('new-enquiry');
  var list = document.getElementById('enquiry-list');
  var emptyState = document.getElementById('empty-state');
  var exportBtn = document.getElementById('export-csv');
  var ownerStatus = document.getElementById('owner-status');

  if (!DemoLogic) {
    ownerStatus.textContent = 'Sorry, the demo could not start (logic.js did not load).';
    return;
  }

  function jobLabel(jobType) {
    return DemoLogic.JOB_TYPE_LABELS[jobType] || jobType;
  }

  // ---------- storage ----------

  function isRecord(item) {
    return item !== null && typeof item === 'object' && typeof item.id === 'string' && typeof item.createdAt === 'string';
  }

  function loadEnquiries() {
    var raw;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      return [];
    }
    if (!raw) return [];
    try {
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter(isRecord) : [];
    } catch (err) {
      return [];
    }
  }

  function saveEnquiries(enquiries) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(enquiries));
      return true;
    } catch (err) {
      ownerStatus.textContent = 'Could not save to this browser\'s storage (it may be full or disabled).';
      return false;
    }
  }

  function sortedNewestFirst(enquiries) {
    return enquiries.slice().sort(function (a, b) {
      var ta = Date.parse(a.createdAt) || 0;
      var tb = Date.parse(b.createdAt) || 0;
      return tb - ta;
    });
  }

  // ---------- form ----------

  function readForm() {
    var checked = form.querySelector('input[name="contactMethod"]:checked');
    var photo = byId('photoName');
    var file = photo.files && photo.files[0];
    return {
      name: byId('name').value,
      jobType: byId('jobType').value,
      description: byId('description').value,
      location: byId('location').value,
      contactMethod: checked ? checked.value : '',
      phone: byId('phone').value,
      email: byId('email').value,
      photoName: file ? file.name : '',
    };
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function fieldControl(field) {
    if (field === 'contactMethod') return document.getElementById('contact-phone');
    return document.getElementById(field);
  }

  function showErrors(errors) {
    var firstBad = null;
    FIELDS.forEach(function (field) {
      var message = errors[field] || '';
      document.getElementById(field + '-error').textContent = message;
      var controls = field === 'contactMethod'
        ? form.querySelectorAll('input[name="contactMethod"]')
        : [document.getElementById(field)];
      Array.prototype.forEach.call(controls, function (el) {
        if (message) el.setAttribute('aria-invalid', 'true');
        else el.removeAttribute('aria-invalid');
      });
      if (message && !firstBad) firstBad = fieldControl(field);
    });
    return firstBad;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = readForm();
    var result = DemoLogic.validateEnquiry(input);
    var firstBad = showErrors(result.errors);
    if (!result.valid) {
      if (firstBad) firstBad.focus();
      return;
    }
    var record = DemoLogic.buildEnquiry(input);
    var enquiries = loadEnquiries();
    enquiries.push(record);
    saveEnquiries(enquiries);
    renderList();

    confirmationText.textContent = 'Thanks ' + record.name + '! We have your quote request (' +
      jobLabel(record.jobType) + ') and will get back to you by ' +
      CONTACT_LABELS[record.contactMethod] + ' soon.';
    form.hidden = true;
    confirmation.hidden = false;
    confirmation.focus();
  });

  // Clear a field's error as soon as the user fixes it.
  form.addEventListener('change', function (event) {
    var field = event.target.name;
    if (FIELDS.indexOf(field) === -1) return;
    var errorEl = document.getElementById(field + '-error');
    if (!errorEl.textContent) return;
    var result = DemoLogic.validateEnquiry(readForm());
    if (!result.errors[field]) showErrors(pickExisting(result.errors));
  });

  // Keep only errors that are already on screen, so fixing one field does not flag untouched ones.
  function pickExisting(errors) {
    var out = {};
    FIELDS.forEach(function (field) {
      if (errors[field] && document.getElementById(field + '-error').textContent) out[field] = errors[field];
    });
    return out;
  }

  newEnquiryBtn.addEventListener('click', function () {
    form.reset();
    showErrors({});
    confirmation.hidden = true;
    form.hidden = false;
    byId('name').focus();
  });

  // ---------- owner view ----------

  function formatDate(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return 'Unknown date';
    return d.toLocaleString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  function el(tag, className, textContent) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (textContent !== undefined) node.textContent = textContent;
    return node;
  }

  function renderItem(enquiry) {
    var li = el('li', 'enquiry card');
    var head = el('div', 'enquiry-head');
    head.appendChild(el('h3', 'enquiry-name', enquiry.name || '(no name)'));
    var time = el('time', 'enquiry-date', formatDate(enquiry.createdAt));
    time.setAttribute('datetime', enquiry.createdAt);
    head.appendChild(time);
    li.appendChild(head);

    var dl = el('dl', 'enquiry-meta');
    [
      ['Job', jobLabel(enquiry.jobType)],
      ['Where', enquiry.location],
      ['Contact', (enquiry.contactMethod || '') + ': ' + (enquiry.contactMethod === 'phone' ? enquiry.phone : enquiry.email)],
      ['Details', enquiry.description],
    ].concat(enquiry.photoName ? [['Photo', enquiry.photoName]] : []).forEach(function (pair) {
      var row = el('div');
      row.appendChild(el('dt', '', pair[0]));
      row.appendChild(el('dd', '', pair[1] || ''));
      dl.appendChild(row);
    });
    li.appendChild(dl);

    var selectId = 'status-' + enquiry.id;
    var statusWrap = el('div', 'enquiry-status');
    var label = el('label', '', 'Status');
    label.setAttribute('for', selectId);
    var select = el('select', 'status-select status-' + (STATUSES.indexOf(enquiry.status) === -1 ? 'new' : enquiry.status));
    select.id = selectId;
    STATUSES.forEach(function (status) {
      var option = el('option', '', status.charAt(0).toUpperCase() + status.slice(1));
      option.value = status;
      if (status === enquiry.status) option.selected = true;
      select.appendChild(option);
    });
    select.addEventListener('change', function () {
      updateStatus(enquiry.id, select.value);
      select.className = 'status-select status-' + select.value;
    });
    statusWrap.appendChild(label);
    statusWrap.appendChild(select);
    li.appendChild(statusWrap);
    return li;
  }

  function updateStatus(id, status) {
    if (STATUSES.indexOf(status) === -1) return;
    var enquiries = loadEnquiries();
    var found = enquiries.some(function (enquiry) {
      if (enquiry.id !== id) return false;
      enquiry.status = status;
      return true;
    });
    if (found && saveEnquiries(enquiries)) ownerStatus.textContent = 'Status saved: ' + status + '.';
  }

  function renderList() {
    var enquiries = sortedNewestFirst(loadEnquiries());
    list.textContent = '';
    enquiries.forEach(function (enquiry) { list.appendChild(renderItem(enquiry)); });
    emptyState.hidden = enquiries.length > 0;
    list.hidden = enquiries.length === 0;
    exportBtn.disabled = enquiries.length === 0;
  }

  exportBtn.addEventListener('click', function () {
    var csv = DemoLogic.toCsv(sortedNewestFirst(loadEnquiries()));
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'iclean-enquiries.csv';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 0);
    ownerStatus.textContent = 'CSV downloaded as iclean-enquiries.csv.';
  });

  // Keep the list in sync if the demo is open in two tabs.
  window.addEventListener('storage', function (event) {
    if (event.key === STORAGE_KEY) renderList();
  });

  renderList();
})();
