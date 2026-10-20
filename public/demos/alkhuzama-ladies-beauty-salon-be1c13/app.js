/* Alkhuzama home-visit booking concept demo: DOM wiring, i18n, localStorage, owner view, CSV download.
 * Classic script; depends on globalThis.DemoLogic from logic.js (loaded first).
 */
(function () {
  'use strict';

  var Logic = globalThis.DemoLogic;
  var STORAGE_KEY = 'alkhuzama-demo-enquiries';
  var LANG_KEY = 'alkhuzama-demo-lang';
  var CSV_FILENAME = 'alkhuzama-enquiries.csv';
  var FIELDS = ['name', 'service', 'city', 'district', 'date', 'time', 'phone', 'contact', 'notes', 'photoName'];

  var TEXT = {
    en: {
      skip: 'Skip to booking form',
      tagline: 'Home-visit beauty services · Riyadh & Jeddah',
      toggle: 'العربية',
      toggleLabel: 'التبديل إلى العربية',
      formTitle: 'Book a home visit',
      formLead: 'Tell us what you need and when. We will confirm availability on WhatsApp.',
      nameLabel: 'Your name',
      serviceLabel: 'Service',
      choose: 'Choose…',
      cityLabel: 'City',
      riyadh: 'Riyadh',
      jeddah: 'Jeddah',
      districtLabel: 'District',
      districtPlaceholder: 'e.g. Al Olaya',
      dateLabel: 'Preferred date',
      timeLabel: 'Preferred time',
      phoneLabel: 'Mobile number',
      phoneHint: 'Saudi mobile, e.g. 05X XXX XXXX or +966 5X XXX XXXX.',
      contactLegend: 'Preferred contact',
      whatsapp: 'WhatsApp',
      call: 'Phone call',
      notesLabel: 'Notes',
      notesPlaceholder: 'e.g. Bridal trial for 3 people, building has no lift',
      optional: '(optional)',
      photoLabel: 'Inspiration photo file name',
      photoHint: 'Demo only: just the file name is saved (.jpg, .png, .webp, .heic), nothing is uploaded.',
      submit: 'Request booking',
      summaryErrors: 'Please fix the highlighted fields.',
      confirmTitle: 'Booking request received',
      confirmLead: 'Thank you! Here is your request. Tap below to send it to the salon on WhatsApp.',
      whatsappBtn: 'Confirm on WhatsApp',
      newBooking: 'New booking',
      sampleNumber: 'Salon WhatsApp (sample placeholder number):',
      ownerTitle: 'Owner view',
      ownerLead: 'Every booking lands here, newest first. Update the status as you reply.',
      exportCsv: 'Export CSV',
      empty: 'No bookings yet. Submit the form to see it appear here.',
      ownerNote: 'Stored only in this browser (localStorage) to stand in for a Google Sheet / Airtable board.',
      footerNote: 'Business name and location (Riyadh) are as publicly shown; services, prices and contact details are sample placeholders. Sample WhatsApp: +966 50 000 0000.',
      count: function (n) { return n === 1 ? '1 booking' : n + ' bookings'; },
      statusLabel: 'Status',
      received: 'Received',
      status: { new: 'New', quoted: 'Quoted / availability sent', won: 'Won (booked)', lost: 'Lost' },
      sum: { name: 'Name', service: 'Service', city: 'City', district: 'District', when: 'Date & time',
        phone: 'Mobile', contact: 'Contact by', notes: 'Notes', photoName: 'Photo' },
      storageError: 'Could not save in this browser (storage unavailable). The booking is shown but not stored.'
    },
    ar: {
      skip: 'انتقلي إلى نموذج الحجز',
      tagline: 'خدمات تجميل منزلية · الرياض وجدة',
      toggle: 'English',
      toggleLabel: 'Switch to English',
      formTitle: 'احجزي زيارة منزلية',
      formLead: 'أخبرينا بالخدمة والموعد، وسنؤكد التوفر عبر واتساب.',
      nameLabel: 'الاسم',
      serviceLabel: 'الخدمة',
      choose: 'اختاري…',
      cityLabel: 'المدينة',
      riyadh: 'الرياض',
      jeddah: 'جدة',
      districtLabel: 'الحي',
      districtPlaceholder: 'مثال: العليا',
      dateLabel: 'التاريخ المفضل',
      timeLabel: 'الوقت المفضل',
      phoneLabel: 'رقم الجوال',
      phoneHint: 'جوال سعودي، مثل 05X XXX XXXX أو ‎+966 5X XXX XXXX.',
      contactLegend: 'طريقة التواصل المفضلة',
      whatsapp: 'واتساب',
      call: 'اتصال هاتفي',
      notesLabel: 'ملاحظات',
      notesPlaceholder: 'مثال: تجربة عروس لثلاث أشخاص، لا يوجد مصعد',
      optional: '(اختياري)',
      photoLabel: 'اسم ملف صورة الإلهام',
      photoHint: 'للعرض فقط: يُحفظ اسم الملف فقط (jpg، png، webp، heic) ولا يتم رفع أي صورة.',
      submit: 'إرسال طلب الحجز',
      summaryErrors: 'يرجى تصحيح الحقول المحددة.',
      confirmTitle: 'تم استلام طلب الحجز',
      confirmLead: 'شكرًا لك! هذا ملخص طلبك. اضغطي أدناه لإرساله إلى الصالون عبر واتساب.',
      whatsappBtn: 'التأكيد عبر واتساب',
      newBooking: 'حجز جديد',
      sampleNumber: 'واتساب الصالون (رقم تجريبي - sample):',
      ownerTitle: 'لوحة المالكة (Owner view)',
      ownerLead: 'تظهر جميع الحجوزات هنا، الأحدث أولًا. حدّثي الحالة عند الرد.',
      exportCsv: 'تصدير CSV',
      empty: 'لا توجد حجوزات بعد. أرسلي النموذج لتظهر هنا.',
      ownerNote: 'محفوظة في هذا المتصفح فقط (localStorage) كبديل عن جدول Google Sheet أو Airtable.',
      footerNote: 'اسم النشاط وموقعه (الرياض) كما هو معلن؛ الخدمات والأسعار وبيانات التواصل أمثلة تجريبية (sample). واتساب تجريبي: ‎+966 50 000 0000.',
      count: function (n) { return 'عدد الحجوزات: ' + n; },
      statusLabel: 'الحالة',
      received: 'وقت الاستلام',
      status: { new: 'جديد', quoted: 'تم إرسال التوفر', won: 'تم الحجز', lost: 'لم يتم' },
      sum: { name: 'الاسم', service: 'الخدمة', city: 'المدينة', district: 'الحي', when: 'التاريخ والوقت',
        phone: 'الجوال', contact: 'التواصل عبر', notes: 'ملاحظات', photoName: 'الصورة' },
      storageError: 'تعذر الحفظ في هذا المتصفح. يظهر الحجز لكنه غير محفوظ.'
    }
  };

  var lang = 'en';
  var lastRecord = null;

  var els = {
    form: document.getElementById('enquiry-form'),
    formScreen: document.getElementById('form-screen'),
    summaryError: document.getElementById('form-error-summary'),
    confirmation: document.getElementById('confirmation'),
    confirmationSummary: document.getElementById('confirmation-summary'),
    whatsappLink: document.getElementById('whatsapp-link'),
    newBooking: document.getElementById('new-booking'),
    list: document.getElementById('enquiry-list'),
    empty: document.getElementById('empty-state'),
    count: document.getElementById('owner-count'),
    exportCsv: document.getElementById('export-csv'),
    langToggle: document.getElementById('lang-toggle'),
    service: document.getElementById('service'),
    date: document.getElementById('date')
  };

  function t(key) {
    return TEXT[lang][key];
  }

  /* ---------- storage ---------- */

  function loadEnquiries() {
    try {
      var parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(parsed) ? parsed.filter(function (r) { return r && typeof r === 'object' && r.id; }) : [];
    } catch (err) {
      return [];
    }
  }

  function saveEnquiries(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      return true;
    } catch (err) {
      return false;
    }
  }

  /* ---------- helpers ---------- */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function serviceLabel(id) {
    return Logic.labelFor(Logic.SERVICES, id, lang);
  }

  function cityLabel(id) {
    return Logic.labelFor(Logic.CITIES, id, lang);
  }

  function formatReceived(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    try {
      return d.toLocaleString(lang === 'ar' ? 'ar-SA' : 'en-GB', { dateStyle: 'medium', timeStyle: 'short' });
    } catch (err) {
      return d.toISOString();
    }
  }

  function todayLocal() {
    var d = new Date();
    var m = d.getMonth() + 1;
    var day = d.getDate();
    return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
  }

  function readForm() {
    var data = {};
    FIELDS.forEach(function (field) {
      if (field === 'contact') {
        var checked = els.form.querySelector('input[name="contact"]:checked');
        data.contact = checked ? checked.value : '';
      } else {
        data[field] = els.form.elements[field].value;
      }
    });
    return data;
  }

  function controlFor(field) {
    if (field === 'contact') return els.form.querySelector('input[name="contact"]');
    return document.getElementById(field);
  }

  /* ---------- validation display ---------- */

  function clearErrors() {
    FIELDS.forEach(function (field) {
      document.getElementById(field + '-error').textContent = '';
      if (field === 'contact') {
        Array.prototype.forEach.call(els.form.querySelectorAll('input[name="contact"]'), function (r) {
          r.removeAttribute('aria-invalid');
        });
      } else {
        controlFor(field).removeAttribute('aria-invalid');
      }
    });
    els.summaryError.hidden = true;
    els.summaryError.textContent = '';
  }

  function showErrors(errors, focusFirst) {
    var first = null;
    FIELDS.forEach(function (field) {
      if (!errors[field]) return;
      document.getElementById(field + '-error').textContent = errors[field];
      if (field === 'contact') {
        Array.prototype.forEach.call(els.form.querySelectorAll('input[name="contact"]'), function (r) {
          r.setAttribute('aria-invalid', 'true');
        });
      } else {
        controlFor(field).setAttribute('aria-invalid', 'true');
      }
      if (!first) first = controlFor(field);
    });
    els.summaryError.textContent = t('summaryErrors');
    els.summaryError.hidden = false;
    if (focusFirst && first) first.focus();
  }

  /* ---------- confirmation ---------- */

  function renderConfirmation(record) {
    var rows = [
      ['name', record.name],
      ['service', serviceLabel(record.service)],
      ['city', cityLabel(record.city)],
      ['district', record.district],
      ['when', record.date + ' · ' + record.time],
      ['phone', record.phone],
      ['contact', t(record.contact)]
    ];
    if (record.notes) rows.push(['notes', record.notes]);
    if (record.photoName) rows.push(['photoName', record.photoName]);

    els.confirmationSummary.textContent = '';
    rows.forEach(function (row) {
      var wrap = el('div', 'summary-row');
      wrap.appendChild(el('dt', '', t('sum')[row[0]]));
      var dd = el('dd', '', row[1]);
      if (row[0] === 'phone' || row[0] === 'when') dd.setAttribute('dir', 'ltr');
      wrap.appendChild(dd);
      els.confirmationSummary.appendChild(wrap);
    });
    els.whatsappLink.href = Logic.whatsappUrl(record);
  }

  function showConfirmation(record) {
    lastRecord = record;
    renderConfirmation(record);
    els.formScreen.hidden = true;
    els.confirmation.hidden = false;
    els.confirmation.focus();
  }

  function showForm() {
    lastRecord = null;
    els.form.reset();
    clearErrors();
    els.confirmation.hidden = true;
    els.formScreen.hidden = false;
    document.getElementById('name').focus();
  }

  /* ---------- owner view ---------- */

  function renderOwnerView() {
    var sorted = Logic.sortNewestFirst(loadEnquiries());
    els.list.textContent = '';
    els.empty.hidden = sorted.length > 0;
    els.exportCsv.disabled = sorted.length === 0;
    els.count.textContent = sorted.length ? t('count')(sorted.length) : '';

    sorted.forEach(function (rec) {
      var status = Logic.STATUSES.indexOf(rec.status) === -1 ? 'new' : rec.status;
      var item = el('li', 'enquiry status-' + status);

      var top = el('div', 'enquiry-top');
      var who = el('div');
      who.appendChild(el('p', 'enquiry-name', rec.name));
      who.appendChild(el('p', 'enquiry-service', serviceLabel(rec.service)));
      top.appendChild(who);

      var selectId = 'status-' + rec.id;
      var statusWrap = el('div', 'status-wrap');
      var label = el('label', 'status-label', t('statusLabel'));
      label.setAttribute('for', selectId);
      var select = el('select', 'status-select');
      select.id = selectId;
      select.setAttribute('data-id', rec.id);
      Logic.STATUSES.forEach(function (s) {
        var opt = el('option', '', t('status')[s]);
        opt.value = s;
        if (s === status) opt.selected = true;
        select.appendChild(opt);
      });
      statusWrap.appendChild(label);
      statusWrap.appendChild(select);
      top.appendChild(statusWrap);
      item.appendChild(top);

      var meta = el('p', 'enquiry-meta');
      meta.appendChild(el('span', '', cityLabel(rec.city) + ' · ' + rec.district));
      var when = el('span', '', rec.date + ' ' + rec.time);
      when.setAttribute('dir', 'ltr');
      meta.appendChild(when);
      var phone = el('span', '', rec.phone + ' (' + t(rec.contact === 'call' ? 'call' : 'whatsapp') + ')');
      phone.setAttribute('dir', 'ltr');
      meta.appendChild(phone);
      item.appendChild(meta);

      if (rec.notes) item.appendChild(el('p', 'enquiry-notes', rec.notes));
      if (rec.photoName) item.appendChild(el('p', 'enquiry-photo', '📷 ' + rec.photoName));
      item.appendChild(el('p', 'enquiry-received', t('received') + ': ' + formatReceived(rec.createdAt)));

      els.list.appendChild(item);
    });
  }

  function updateStatus(id, status) {
    if (Logic.STATUSES.indexOf(status) === -1) return;
    var list = loadEnquiries();
    list.forEach(function (rec) {
      if (rec.id === id) rec.status = status;
    });
    saveEnquiries(list);
    renderOwnerView();
    var select = document.getElementById('status-' + id);
    if (select) select.focus();
  }

  function downloadCsv() {
    var csv = Logic.toCsv(Logic.sortNewestFirst(loadEnquiries()));
    // BOM so Excel opens Arabic text as UTF-8.
    var blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = CSV_FILENAME;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  /* ---------- language ---------- */

  function applyLanguage(next) {
    lang = next === 'ar' ? 'ar' : 'en';
    var root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';

    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (node) {
      var value = TEXT[lang][node.getAttribute('data-i18n')];
      if (typeof value === 'string') node.textContent = value;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-placeholder]'), function (node) {
      var value = TEXT[lang][node.getAttribute('data-i18n-placeholder')];
      if (typeof value === 'string') node.setAttribute('placeholder', value);
    });
    Array.prototype.forEach.call(els.service.options, function (opt) {
      if (opt.value) opt.textContent = serviceLabel(opt.value);
    });

    els.langToggle.textContent = t('toggle');
    els.langToggle.setAttribute('lang', lang === 'ar' ? 'en' : 'ar');
    els.langToggle.setAttribute('aria-label', t('toggleLabel'));

    try { localStorage.setItem(LANG_KEY, lang); } catch (err) { /* language preference is optional */ }

    // Re-render visible error messages in the new language.
    if (!els.summaryError.hidden) {
      clearErrors();
      showErrors(Logic.validateEnquiry(readForm(), { lang: lang }).errors, false);
    }
    if (lastRecord) renderConfirmation(lastRecord);
    renderOwnerView();
  }

  /* ---------- events ---------- */

  els.form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearErrors();
    var input = readForm();
    var result = Logic.validateEnquiry(input, { lang: lang });
    if (!result.valid) {
      showErrors(result.errors, true);
      return;
    }
    var record = Logic.buildEnquiry(input);
    var list = loadEnquiries();
    list.push(record);
    if (!saveEnquiries(list)) window.alert(t('storageError'));
    renderOwnerView();
    showConfirmation(record);
  });

  // Clear a field's error as soon as the user edits it.
  els.form.addEventListener('input', function (event) {
    var field = event.target.name;
    if (FIELDS.indexOf(field) === -1) return;
    var errorEl = document.getElementById(field + '-error');
    if (!errorEl.textContent) return;
    errorEl.textContent = '';
    if (field === 'contact') {
      Array.prototype.forEach.call(els.form.querySelectorAll('input[name="contact"]'), function (r) {
        r.removeAttribute('aria-invalid');
      });
    } else {
      event.target.removeAttribute('aria-invalid');
    }
  });

  els.newBooking.addEventListener('click', showForm);

  els.list.addEventListener('change', function (event) {
    var target = event.target;
    if (target.classList.contains('status-select')) {
      updateStatus(target.getAttribute('data-id'), target.value);
    }
  });

  els.exportCsv.addEventListener('click', downloadCsv);

  els.langToggle.addEventListener('click', function () {
    applyLanguage(lang === 'ar' ? 'en' : 'ar');
  });

  window.addEventListener('storage', function (event) {
    if (event.key === STORAGE_KEY) renderOwnerView();
  });

  /* ---------- init ---------- */

  els.date.min = todayLocal();
  var savedLang = 'en';
  try { savedLang = localStorage.getItem(LANG_KEY) || 'en'; } catch (err) { savedLang = 'en'; }
  applyLanguage(savedLang);
})();
