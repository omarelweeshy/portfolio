/* Zaisha Salon concept demo: DOM wiring, translations, localStorage tracker and CSV download.
 * Depends on demo/logic.js (globalThis.DemoLogic), loaded first as a classic script. */
(function () {
  'use strict';

  var L = globalThis.DemoLogic;
  var STORAGE_KEY = 'zaisha-demo-enquiries';
  var LANG_KEY = 'zaisha-demo-lang';
  var STATUSES = ['new', 'quoted', 'won', 'lost'];
  var FIELDS = ['service', 'branch', 'date', 'time', 'name', 'phone', 'contact', 'photo', 'notes'];

  var STRINGS = {
    en: {
      skip: 'Skip to booking form',
      brandName: 'Zaisha Salon',
      brandSub: "Ladies' salon, Riyadh, Saudi Arabia",
      heroTitle: 'One booking form, one set of contact details',
      heroLead: 'This sample shows how Zaisha Salon could stop bookings leaking to a dead email address, a wrong branch number or a broken WhatsApp link.',
      navAudit: '1. Contact audit',
      navBook: '2. Booking form',
      navOwner: '3. Owner view',
      auditTitle: '1. Contact audit',
      auditLead: 'Recreated mock screenshots (not real captures). Numbers and emails are sample placeholders that illustrate each problem type.',
      a1Title: 'Inconsistency 1: dead email address',
      a1Text: 'The contact email bounces, so every enquiry sent there is lost without anyone noticing.',
      a2Title: 'Inconsistency 2: wrong branch number',
      a2Text: "A branch is listed with another branch's number, so clients reach the wrong team and the booking is not recorded.",
      a3Title: 'Inconsistency 3: different numbers on different pages',
      a3Text: 'The header, footer and shop pages show different numbers, so clients cannot tell which one is current.',
      a4Title: 'Broken WhatsApp link',
      a4Text: 'The WhatsApp button uses a local number without the 966 country code, so WhatsApp refuses to open the chat.',
      fixTitle: 'The fix shown below',
      fixPhone: 'Phone and WhatsApp',
      fixEmail: 'Email',
      fixBranches: 'Branches',
      fixBranchesText: 'One list, used by the website, the form and WhatsApp',
      placeholderTag: 'Sample placeholder',
      priceNote: 'The public shop page notes that prices are tentative and confirmed after examination, so the form asks for an appointment request rather than a payment.',
      bookTitle: '2. Book an appointment',
      bookLead: 'Takes about a minute. Fields marked * are required.',
      lService: 'Service',
      lBranch: 'Branch',
      lDate: 'Date',
      lTime: 'Time',
      hTime: 'Half-hour slots, 10:00 to 21:30',
      lName: 'Your name',
      lPhone: 'Mobile number',
      hPhone: 'Saudi mobile, e.g. 05X XXX XXXX',
      lContact: 'Preferred contact',
      cWhatsapp: 'WhatsApp',
      cCall: 'Phone call',
      lPhoto: 'Reference photo (optional)',
      hPhoto: 'Only the file name is kept in this demo.',
      lNotes: 'Notes (optional)',
      choose: 'Choose…',
      submit: 'Request booking',
      formErrors: 'Please fix the highlighted fields.',
      saveFailed: 'Your booking was created but could not be saved in this browser (storage is unavailable or full).',
      confTitle: 'Booking request received',
      confRef: 'Your booking reference:',
      confNext: 'The salon confirms by WhatsApp. In this demo, the link below opens WhatsApp with the confirmation message ready to send.',
      confWa: 'Open WhatsApp confirmation',
      confAgain: 'Make another booking',
      ownerTitle: '3. Owner view',
      ownerLead: 'Every booking lands in one tracker, newest first. Update the status as you go and export to CSV for Google Sheets. Stored only in this browser.',
      export: 'Export CSV',
      clear: 'Clear demo data',
      clearConfirm: 'Delete all demo bookings stored in this browser?',
      ownerEmpty: 'No bookings yet. Submit the form above to see it appear here.',
      exported: 'CSV downloaded.',
      thRef: 'Ref',
      thCreated: 'Received',
      thName: 'Name',
      thPhone: 'Phone',
      thService: 'Service',
      thBranch: 'Branch',
      thWhen: 'Date and time',
      thContact: 'Contact',
      thNotes: 'Notes',
      thStatus: 'Status',
      statusLabel: 'Status for',
      photo: 'Photo',
      status: { 'new': 'New', 'quoted': 'Quoted', 'won': 'Won', 'lost': 'Lost' },
      footerNote: 'All contact details on this page are sample placeholders. Nothing is sent anywhere: bookings stay in this browser.',
      toggle: 'العربية',
      errors: {
        name: { required: 'Please enter your name.', invalid: 'Name must be at least 2 characters.', too_long: 'Name must be 60 characters or fewer.' },
        phone: { required: 'Please enter your mobile number.', invalid: 'Enter a Saudi mobile number, e.g. 05X XXX XXXX.' },
        service: { required: 'Please choose a service.', invalid: 'Please choose a service from the list.' },
        branch: { required: 'Please choose a branch.', invalid: 'Please choose a branch from the list.' },
        date: { required: 'Please choose a date.', invalid: 'Enter a valid date.', past: 'This date has already passed.', too_far: 'Bookings open up to 90 days ahead.' },
        time: { required: 'Please choose a time.', invalid: 'Choose a time on the hour or half hour.', closed: 'We are open for bookings from 10:00 to 21:30.', past: 'This time has already passed. Choose a later slot.' },
        contact: { required: 'Please choose how we should contact you.', invalid: 'Please choose WhatsApp or phone call.' },
        notes: { too_long: 'Notes must be 500 characters or fewer.' },
        photo: { invalid: 'Use a JPG, PNG, WEBP or HEIC image.', too_long: 'The file name is too long. Rename it and try again.' }
      }
    },
    ar: {
      skip: 'انتقل إلى نموذج الحجز',
      brandName: 'صالون زيشا',
      brandSub: 'صالون نسائي، الرياض، المملكة العربية السعودية',
      heroTitle: 'نموذج حجز واحد، وبيانات تواصل موحدة',
      heroLead: 'يوضح هذا النموذج كيف يمكن لصالون زيشا إيقاف ضياع الحجوزات بسبب بريد إلكتروني لا يعمل أو رقم فرع خاطئ أو رابط واتساب معطل.',
      navAudit: '1. مراجعة بيانات التواصل',
      navBook: '2. نموذج الحجز',
      navOwner: '3. لوحة المالكة',
      auditTitle: '1. مراجعة بيانات التواصل',
      auditLead: 'لقطات شاشة مُعاد إنشاؤها للتوضيح (ليست لقطات حقيقية). الأرقام والعناوين أمثلة توضح نوع كل مشكلة.',
      a1Title: 'عدم تطابق 1: بريد إلكتروني لا يعمل',
      a1Text: 'رسائل البريد ترتد، فيضيع كل استفسار يُرسل إليه دون أن يلاحظ أحد.',
      a2Title: 'عدم تطابق 2: رقم فرع خاطئ',
      a2Text: 'يظهر أحد الفروع برقم فرع آخر، فتصل العميلة إلى الفريق الخطأ ولا يُسجل الحجز.',
      a3Title: 'عدم تطابق 3: أرقام مختلفة في صفحات مختلفة',
      a3Text: 'تعرض رأس الصفحة وتذييلها وصفحة المتجر أرقاماً مختلفة، فلا تعرف العميلة أيها الصحيح.',
      a4Title: 'رابط واتساب معطل',
      a4Text: 'زر واتساب يستخدم رقماً محلياً دون رمز الدولة 966، فيرفض واتساب فتح المحادثة.',
      fixTitle: 'الحل المعروض أدناه',
      fixPhone: 'الهاتف وواتساب',
      fixEmail: 'البريد الإلكتروني',
      fixBranches: 'الفروع',
      fixBranchesText: 'قائمة واحدة يستخدمها الموقع والنموذج وواتساب',
      placeholderTag: 'Sample placeholder · مثال',
      priceNote: 'تشير صفحة المتجر إلى أن الأسعار تقديرية وتُؤكد بعد المعاينة، لذلك يطلب النموذج موعداً وليس دفعاً.',
      bookTitle: '2. احجزي موعدك',
      bookLead: 'يستغرق دقيقة تقريباً. الحقول المميزة بـ * مطلوبة.',
      lService: 'الخدمة',
      lBranch: 'الفرع',
      lDate: 'التاريخ',
      lTime: 'الوقت',
      hTime: 'مواعيد كل نصف ساعة، من 10:00 إلى 21:30',
      lName: 'الاسم',
      lPhone: 'رقم الجوال',
      hPhone: 'جوال سعودي، مثل 05X XXX XXXX',
      lContact: 'طريقة التواصل المفضلة',
      cWhatsapp: 'واتساب',
      cCall: 'مكالمة هاتفية',
      lPhoto: 'صورة مرجعية (اختياري)',
      hPhoto: 'يُحفظ اسم الملف فقط في هذا النموذج.',
      lNotes: 'ملاحظات (اختياري)',
      choose: 'اختاري…',
      submit: 'إرسال طلب الحجز',
      formErrors: 'يرجى تصحيح الحقول المميزة.',
      saveFailed: 'تم إنشاء الحجز لكن تعذر حفظه في هذا المتصفح (التخزين غير متاح أو ممتلئ).',
      confTitle: 'تم استلام طلب الحجز',
      confRef: 'رقم الحجز:',
      confNext: 'يؤكد الصالون الموعد عبر واتساب. في هذا النموذج يفتح الرابط أدناه واتساب مع رسالة التأكيد جاهزة للإرسال.',
      confWa: 'فتح تأكيد واتساب',
      confAgain: 'حجز موعد آخر',
      ownerTitle: '3. لوحة المالكة (Owner view)',
      ownerLead: 'تصل كل الحجوزات إلى جدول واحد، الأحدث أولاً. حدّثي الحالة وصدّري الملف CSV إلى Google Sheets. البيانات محفوظة في هذا المتصفح فقط.',
      export: 'تصدير CSV',
      clear: 'مسح بيانات التجربة',
      clearConfirm: 'حذف جميع حجوزات التجربة المحفوظة في هذا المتصفح؟',
      ownerEmpty: 'لا توجد حجوزات بعد. أرسلي النموذج أعلاه لتظهر هنا.',
      exported: 'تم تنزيل ملف CSV.',
      thRef: 'الرقم',
      thCreated: 'وقت الاستلام',
      thName: 'الاسم',
      thPhone: 'الجوال',
      thService: 'الخدمة',
      thBranch: 'الفرع',
      thWhen: 'التاريخ والوقت',
      thContact: 'التواصل',
      thNotes: 'ملاحظات',
      thStatus: 'الحالة',
      statusLabel: 'حالة الحجز',
      photo: 'صورة',
      status: { 'new': 'جديد', 'quoted': 'تم التسعير', 'won': 'مؤكد', 'lost': 'ملغى' },
      footerNote: 'جميع بيانات التواصل في هذه الصفحة أمثلة توضيحية. لا يُرسل أي شيء: تبقى الحجوزات في هذا المتصفح.',
      toggle: 'English',
      errors: {
        name: { required: 'يرجى إدخال الاسم.', invalid: 'يجب أن يتكون الاسم من حرفين على الأقل.', too_long: 'يجب ألا يتجاوز الاسم 60 حرفاً.' },
        phone: { required: 'يرجى إدخال رقم الجوال.', invalid: 'أدخلي رقم جوال سعودي، مثل 05X XXX XXXX.' },
        service: { required: 'يرجى اختيار الخدمة.', invalid: 'يرجى اختيار خدمة من القائمة.' },
        branch: { required: 'يرجى اختيار الفرع.', invalid: 'يرجى اختيار فرع من القائمة.' },
        date: { required: 'يرجى اختيار التاريخ.', invalid: 'أدخلي تاريخاً صحيحاً.', past: 'هذا التاريخ قد مضى.', too_far: 'الحجز متاح حتى 90 يوماً مقدماً.' },
        time: { required: 'يرجى اختيار الوقت.', invalid: 'اختاري وقتاً على رأس الساعة أو نصفها.', closed: 'الحجوزات متاحة من 10:00 إلى 21:30.', past: 'هذا الوقت قد مضى. اختاري موعداً لاحقاً.' },
        contact: { required: 'يرجى اختيار طريقة التواصل.', invalid: 'يرجى اختيار واتساب أو مكالمة.' },
        notes: { too_long: 'يجب ألا تتجاوز الملاحظات 500 حرف.' },
        photo: { invalid: 'استخدمي صورة بصيغة JPG أو PNG أو WEBP أو HEIC.', too_long: 'اسم الملف طويل جداً. غيّري الاسم وحاولي مرة أخرى.' }
      }
    }
  };

  var form = document.getElementById('booking-form');
  var confirmation = document.getElementById('confirmation');
  var waLinkEl = document.getElementById('wa-link');
  var listEl = document.getElementById('enquiry-list');
  var emptyEl = document.getElementById('owner-empty');
  var formStatus = document.getElementById('form-status');
  var ownerStatus = document.getElementById('owner-status');

  var lang = 'en';
  var submitted = false;
  var lastRecord = null;
  var lastErrors = {};

  function t(key) {
    return STRINGS[lang][key];
  }

  // ---------- storage ----------

  function storageGet(key) {
    try { return globalThis.localStorage.getItem(key); } catch (e) { return null; }
  }

  function storageSet(key, value) {
    try { globalThis.localStorage.setItem(key, value); return true; } catch (e) { return false; }
  }

  function isRecord(r) {
    return r && typeof r === 'object' && typeof r.id === 'string' && typeof r.createdAt === 'string';
  }

  function loadEnquiries() {
    var raw = storageGet(STORAGE_KEY);
    if (!raw) return [];
    try {
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter(isRecord) : [];
    } catch (e) {
      return [];
    }
  }

  function saveEnquiries(list) {
    return storageSet(STORAGE_KEY, JSON.stringify(list));
  }

  function newestFirst(list) {
    return list.slice().sort(function (a, b) {
      return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0;
    });
  }

  // ---------- language ----------

  function optionLabel(map, id) {
    return map[id] ? map[id][lang] : id;
  }

  function applyLang(next) {
    lang = next === 'ar' ? 'ar' : 'en';
    var root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var value = t(nodes[i].getAttribute('data-i18n'));
      if (typeof value === 'string') nodes[i].textContent = value;
    }

    ['service', 'branch'].forEach(function (id) {
      var map = id === 'service' ? L.SERVICES : L.BRANCHES;
      var options = document.getElementById(id).options;
      for (var j = 0; j < options.length; j++) {
        if (options[j].value) options[j].textContent = optionLabel(map, options[j].value);
      }
    });

    var toggle = document.getElementById('lang-toggle');
    toggle.textContent = t('toggle');
    toggle.setAttribute('lang', lang === 'ar' ? 'en' : 'ar');
    document.title = lang === 'ar' ? 'صالون زيشا: نموذج تجريبي للحجز' : 'Zaisha Salon booking concept demo';

    if (submitted) showErrors(lastErrors);
    if (lastRecord && !confirmation.hidden) renderSummary(lastRecord);
    renderOwner();
    storageSet(LANG_KEY, lang);
  }

  // ---------- form ----------

  function localDateString(d) {
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }

  function setDateLimits() {
    var now = new Date();
    var max = new Date(now.getFullYear(), now.getMonth(), now.getDate() + L.BOOKING_WINDOW_DAYS);
    var dateInput = document.getElementById('date');
    dateInput.min = localDateString(now);
    dateInput.max = localDateString(max);
  }

  function val(id) {
    return document.getElementById(id).value;
  }

  function readForm() {
    var photo = document.getElementById('photo');
    return {
      name: val('name'),
      phone: val('phone'),
      service: val('service'),
      branch: val('branch'),
      date: val('date'),
      time: val('time'),
      contact: val('contact'),
      notes: val('notes'),
      photoName: photo.files && photo.files.length ? photo.files[0].name : '',
      lang: lang
    };
  }

  // logic.js reports the file error under "photoName"; the control id is "photo".
  function fieldErrors(errors) {
    var mapped = {};
    Object.keys(errors).forEach(function (k) { mapped[k === 'photoName' ? 'photo' : k] = errors[k]; });
    return mapped;
  }

  function showFieldError(field, code) {
    var control = document.getElementById(field);
    var slot = document.getElementById(field + '-error');
    var messages = t('errors')[field] || {};
    slot.textContent = code ? (messages[code] || code) : '';
    if (code) control.setAttribute('aria-invalid', 'true');
    else control.removeAttribute('aria-invalid');
  }

  function showErrors(errors) {
    FIELDS.forEach(function (f) { showFieldError(f, errors[f]); });
  }

  function validateField(field) {
    lastErrors = fieldErrors(L.validateEnquiry(readForm(), new Date()).errors);
    showFieldError(field, lastErrors[field]);
  }

  function onSubmit(event) {
    event.preventDefault();
    submitted = true;
    var input = readForm();
    var now = new Date();
    var result = L.validateEnquiry(input, now);
    lastErrors = fieldErrors(result.errors);
    showErrors(lastErrors);
    if (!result.valid) {
      formStatus.textContent = t('formErrors');
      var first = FIELDS.filter(function (f) { return lastErrors[f]; })[0];
      if (first) document.getElementById(first).focus();
      return;
    }
    formStatus.textContent = '';

    var record = L.buildEnquiry(input, now);
    var list = loadEnquiries();
    list.push(record);
    var saved = saveEnquiries(list);
    lastRecord = record;
    renderOwner();
    showConfirmation(record, saved);
  }

  function addSummaryRow(dl, label, value) {
    var dt = document.createElement('dt');
    dt.textContent = label;
    var dd = document.createElement('dd');
    dd.textContent = value;
    dl.appendChild(dt);
    dl.appendChild(dd);
  }

  function renderSummary(rec) {
    var dl = document.getElementById('conf-summary');
    dl.textContent = '';
    addSummaryRow(dl, t('lService'), optionLabel(L.SERVICES, rec.service));
    addSummaryRow(dl, t('lBranch'), optionLabel(L.BRANCHES, rec.branch));
    addSummaryRow(dl, t('thWhen'), rec.date + ' ' + rec.time);
    addSummaryRow(dl, t('lName'), rec.name);
    addSummaryRow(dl, t('lPhone'), '+' + rec.phone);
    addSummaryRow(dl, t('lContact'), rec.contact === 'call' ? t('cCall') : t('cWhatsapp'));
    if (rec.notes) addSummaryRow(dl, t('thNotes'), rec.notes);
    if (rec.photoName) addSummaryRow(dl, t('photo'), rec.photoName);
  }

  function showConfirmation(record, saved) {
    document.getElementById('conf-ref').textContent = record.id;
    renderSummary(record);
    waLinkEl.href = record.waLink;
    form.hidden = true;
    confirmation.hidden = false;
    ownerStatus.textContent = saved ? '' : t('saveFailed');
    confirmation.focus();
  }

  function resetForm() {
    form.reset();
    submitted = false;
    lastErrors = {};
    lastRecord = null;
    showErrors({});
    formStatus.textContent = '';
    confirmation.hidden = true;
    form.hidden = false;
    setDateLimits();
    document.getElementById('service').focus();
  }

  // ---------- owner view ----------

  function formatCreated(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return localDateString(d) + ' ' + d.toTimeString().slice(0, 5);
  }

  function cell(tr, text, className) {
    var td = document.createElement('td');
    td.textContent = text;
    if (className) td.className = className;
    tr.appendChild(td);
    return td;
  }

  function updateStatus(id, status) {
    if (STATUSES.indexOf(status) === -1) return;
    var list = loadEnquiries();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) list[i].status = status;
    }
    if (!saveEnquiries(list)) ownerStatus.textContent = t('saveFailed');
  }

  function renderOwner() {
    var list = newestFirst(loadEnquiries());
    listEl.textContent = '';
    emptyEl.hidden = list.length > 0;
    listEl.closest('.sheet').hidden = list.length === 0;
    document.getElementById('export-csv').disabled = list.length === 0;
    document.getElementById('clear-data').disabled = list.length === 0;

    list.forEach(function (rec) {
      var tr = document.createElement('tr');
      cell(tr, rec.id, 'mono');
      cell(tr, formatCreated(rec.createdAt), 'mono');
      cell(tr, rec.name);
      cell(tr, rec.phone ? '+' + rec.phone : '', 'mono');
      cell(tr, optionLabel(L.SERVICES, rec.service));
      cell(tr, optionLabel(L.BRANCHES, rec.branch));
      cell(tr, (rec.date || '') + ' ' + (rec.time || ''), 'mono');
      cell(tr, rec.contact === 'call' ? t('cCall') : t('cWhatsapp'));
      cell(tr, [rec.notes, rec.photoName ? t('photo') + ': ' + rec.photoName : ''].filter(Boolean).join(' · '), 'notes');

      var td = document.createElement('td');
      var select = document.createElement('select');
      select.className = 'status status-' + rec.status;
      select.setAttribute('aria-label', t('statusLabel') + ' ' + rec.id);
      STATUSES.forEach(function (s) {
        var opt = document.createElement('option');
        opt.value = s;
        opt.textContent = t('status')[s];
        if (s === rec.status) opt.selected = true;
        select.appendChild(opt);
      });
      select.addEventListener('change', function () {
        updateStatus(rec.id, select.value);
        select.className = 'status status-' + select.value;
      });
      td.appendChild(select);
      tr.appendChild(td);
      listEl.appendChild(tr);
    });
  }

  function exportCsv() {
    var csv = L.toCsv(newestFirst(loadEnquiries()));
    var blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'zaisha-bookings-' + localDateString(new Date()) + '.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    ownerStatus.textContent = t('exported');
  }

  function clearData() {
    if (!globalThis.confirm(t('clearConfirm'))) return;
    saveEnquiries([]);
    ownerStatus.textContent = '';
    renderOwner();
  }

  // ---------- init ----------

  form.addEventListener('submit', onSubmit);
  FIELDS.forEach(function (f) {
    var el = document.getElementById(f);
    var evt = el.tagName === 'SELECT' || el.type === 'file' || el.type === 'date' || el.type === 'time' ? 'change' : 'blur';
    el.addEventListener(evt, function () {
      if (submitted || el.value) validateField(f);
    });
  });
  document.getElementById('new-booking').addEventListener('click', resetForm);
  document.getElementById('lang-toggle').addEventListener('click', function () {
    ownerStatus.textContent = '';
    applyLang(lang === 'ar' ? 'en' : 'ar');
  });
  document.getElementById('export-csv').addEventListener('click', exportCsv);
  document.getElementById('clear-data').addEventListener('click', clearData);
  globalThis.addEventListener('storage', function (e) {
    if (e.key === STORAGE_KEY) renderOwner();
  });

  setDateLimits();
  applyLang(storageGet(LANG_KEY) === 'ar' ? 'ar' : 'en');
})();
