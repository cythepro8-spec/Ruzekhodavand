/* Church of God - Admin Panel */

const PASSWORD = 'Godiswithus321';
const STORAGE_KEY = 'cog_posts_v1';
const LIVE_KEY = 'cog_live_v1';
const AUTH_KEY = 'cog_auth';
const LANG_KEY = 'cog_lang';

const BIBLE_BOOKS = {
  fa: ['پیدایش','خروج','لاویان','اعداد','تثنیه','یوشع','داوران','روت','اول سموئیل','دوم سموئیل','اول پادشاهان','دوم پادشاهان','اول تواریخ','دوم تواریخ','عزرا','نحمیا','استر','ایوب','مزامیر','امثال','جامعه','غزل غزل‌ها','اشعیا','ارمیا','مراثی','حزقیال','دانیال','هوشع','یوئیل','عاموس','عوبیدیا','یونس','میکا','ناحوم','حبقوق','صفنیا','حجی','زکریا','ملاکی','متی','مرقس','لوقا','یوحنا','اعمال رسولان','رومیان','اول قرنتیان','دوم قرنتیان','غلاطیان','افسسیان','فیلیپیان','کولسیان','اول تسالونیکیان','دوم تسالونیکیان','اول تیموتائوس','دوم تیموتائوس','تیطس','فلیمون','عبرانیان','یعقوب','اول پطرس','دوم پطرس','اول یوحنا','دوم یوحنا','سوم یوحنا','یهودا','مکاشفه','سه فرشته','عمومی'],
  en: ['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1 Samuel','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Song of Solomon','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon','Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation','Three Angels','General'],
  ru: ['Бытие','Исход','Левит','Числа','Второзаконие','Иисус Навин','Судьи','Руфь','1 Царств','2 Царств','3 Царств','4 Царств','1 Паралипоменон','2 Паралипоменон','Ездра','Неемия','Есфирь','Иов','Псалтирь','Притчи','Екклесиаст','Песнь Песней','Исаия','Иеремия','Плач Иеремии','Иезекииль','Даниил','Осия','Иоиль','Амос','Авдий','Иона','Михей','Наум','Аввакум','Софония','Аггей','Захария','Малахия','Матфей','Марк','Лука','Иоанн','Деяния','Римлянам','1 Коринфянам','2 Коринфянам','Галатам','Ефесянам','Филиппийцам','Колоссянам','1 Фессалоникийцам','2 Фессалоникийцам','1 Тимофею','2 Тимофею','Титу','Филимону','Евреям','Иакова','1 Петра','2 Петра','1 Иоанна','2 Иоанна','3 Иоанна','Иуда','Откровение','Три Ангела','Общее']
};

const T = {
  fa: {
    siteName: 'کلیسای خدا', back: '← بازگشت', langBtn: 'English', logout: 'خروج',
    loginTitle: 'ورود مدیر', passwordPlaceholder: 'رمز عبور', loginBtn: 'ورود', panelTitle: 'پنل مدیریت',
    tabUpload: 'آپلود / متن', tabLive: 'پخش زنده', tabManage: 'مدیریت پست‌ها', tabBackup: 'پشتیبان',
    titleFa: 'عنوان فارسی (اختیاری)', titleEn: 'عنوان انگلیسی (اختیاری)',
    titleFaPh: 'عنوان به فارسی', titleEnPh: 'Title in English',
    descFa: 'توضیحات فارسی (اختیاری)', descEn: 'توضیحات انگلیسی (اختیاری)',
    descFaPh: 'توضیحات کوتاه...', descEnPh: 'Short description...',
    writingLabel: 'متن یا نوشته (می‌توانید اینجا پیست کنید)', writingPh: 'متن کامل، موعظه، مطالعه کتاب مقدس یا هر نوشته‌ای را اینجا وارد یا پیست کنید...',
    bibleBook: 'کتاب مقدس', typeLabel: 'نوع', typeText: 'متن / نوشته', typePhoto: 'عکس', typeVideo: 'ویدیو', typeFile: 'فایل',
    fileLabel: 'فایل (اختیاری برای متن)', dropFile: 'فایل را اینجا رها کنید یا کلیک کنید',
    fileNote: 'عکس، ویدیو، PDF و ... (ترجیحاً کمتر از 4 مگابایت)', postDate: 'تاریخ', postTime: 'ساعت', publish: 'انتشار',
    currentStatus: 'وضعیت فعلی:', stopLive: 'توقف پخش زنده', liveTitleLabel: 'عنوان پخش زنده',
    liveTitlePh: 'مثلاً: موعظه یکشنبه', streamUrlLabel: 'لینک پخش (یوتیوب و غیره)',
    streamNote: 'لینک یوتیوب لایو یا هر امبدی که پشتیبانی شود', goLive: 'شروع پخش زنده',
    existingPosts: 'پست‌های موجود', manageNote: 'برای حذف هر پست روی دکمه حذف کلیک کنید.',
    backupNote: 'داده‌ها در مرورگر شما ذخیره می‌شوند. برای پشتیبان‌گیری یا انتقال به دستگاه دیگر از این بخش استفاده کنید.',
    exportBtn: 'دانلود پشتیبان', importBtn: 'وارد کردن پشتیبان',
    importantNote: 'نکته مهم: برای فایل‌های بزرگ توصیه می‌شود فایل را در گوگل درایو یا یوتیوب آپلود کنید.',
    offline: 'خاموش', live: 'زنده', wrongPass: 'رمز عبور اشتباه است',
    needContent: 'لطفاً متن بنویسید یا فایلی انتخاب کنید', fileTooBig: 'فایل بزرگ‌تر از 4 مگابایت است.',
    published: 'منتشر شد!', storageError: 'خطا در ذخیره. از لینک خارجی استفاده کنید.',
    readError: 'خطا در خواندن فایل', liveActivated: 'پخش زنده فعال شد!', liveStopped: 'پخش زنده متوقف شد',
    noPosts: 'هنوز پستی نیست', delete: 'حذف', confirmDelete: 'آیا مطمئن هستید که می‌خواهید این پست را حذف کنید؟',
    deleted: 'حذف شد', imported: 'وارد شد!', invalidFile: 'فایل نامعتبر', defaultLiveTitle: 'پخش زنده', untitled: 'بدون عنوان'
  },
  en: {
    siteName: 'Church of God', back: '← Back', langBtn: 'Русский', logout: 'Logout',
    loginTitle: 'Admin Login', passwordPlaceholder: 'Password', loginBtn: 'Login', panelTitle: 'Admin Panel',
    tabUpload: 'Upload / Text', tabLive: 'Go Live', tabManage: 'Manage Posts', tabBackup: 'Backup',
    titleFa: 'Persian Title (optional)', titleEn: 'English Title (optional)',
    titleFaPh: 'Title in Persian', titleEnPh: 'Title in English',
    descFa: 'Persian Description (optional)', descEn: 'English Description (optional)',
    descFaPh: 'Short description...', descEnPh: 'Short description...',
    writingLabel: 'Text or Writing (you can paste here)', writingPh: 'Paste or type full text, sermon, Bible study or any writing here...',
    bibleBook: 'Bible Book', typeLabel: 'Type', typeText: 'Text / Writing', typePhoto: 'Photo', typeVideo: 'Video', typeFile: 'File',
    fileLabel: 'File (optional for text)', dropFile: 'Drop file here or click',
    fileNote: 'Photo, video, PDF, etc. (preferably under 4 MB)', postDate: 'Date', postTime: 'Time', publish: 'Publish',
    currentStatus: 'Current status:', stopLive: 'Stop Live', liveTitleLabel: 'Live Title',
    liveTitlePh: 'e.g. Sunday Sermon', streamUrlLabel: 'Stream URL (YouTube etc.)',
    streamNote: 'YouTube Live link or any supported embed', goLive: 'Go Live',
    existingPosts: 'Existing Posts', manageNote: 'Click Delete to remove any post.',
    backupNote: 'Data is stored in your browser. Use this to backup or transfer to another device.',
    exportBtn: 'Export Backup', importBtn: 'Import Backup',
    importantNote: 'Important: For large files upload to Google Drive or YouTube and paste the link.',
    offline: 'Offline', live: 'LIVE', wrongPass: 'Wrong password',
    needContent: 'Please write some text or select a file', fileTooBig: 'File larger than 4 MB.',
    published: 'Published!', storageError: 'Storage error. Use external links.',
    readError: 'Error reading file', liveActivated: 'Live stream activated!', liveStopped: 'Live stopped',
    noPosts: 'No posts yet', delete: 'Delete', confirmDelete: 'Are you sure you want to delete this post?',
    deleted: 'Deleted', imported: 'Imported!', invalidFile: 'Invalid file', defaultLiveTitle: 'Live Stream', untitled: 'Untitled'
  },
  ru: {
    siteName: 'Церковь Божья', back: '← Назад', langBtn: 'فارسی', logout: 'Выйти',
    loginTitle: 'Вход администратора', passwordPlaceholder: 'Пароль', loginBtn: 'Войти', panelTitle: 'Панель администратора',
    tabUpload: 'Загрузка / Текст', tabLive: 'Прямой эфир', tabManage: 'Управление постами', tabBackup: 'Резервная копия',
    titleFa: 'Персидский заголовок (необязательно)', titleEn: 'Английский заголовок (необязательно)',
    titleFaPh: 'Заголовок на персидском', titleEnPh: 'Title in English',
    descFa: 'Персидское описание (необязательно)', descEn: 'Английское описание (необязательно)',
    descFaPh: 'Краткое описание...', descEnPh: 'Short description...',
    writingLabel: 'Текст или статья (можно вставить сюда)', writingPh: 'Вставьте или напишите полный текст, проповедь, изучение Библии...',
    bibleBook: 'Книга Библии', typeLabel: 'Тип', typeText: 'Текст / Статья', typePhoto: 'Фото', typeVideo: 'Видео', typeFile: 'Файл',
    fileLabel: 'Файл (необязательно для текста)', dropFile: 'Перетащите файл или нажмите',
    fileNote: 'Фото, видео, PDF и т.д. (желательно меньше 4 МБ)', postDate: 'Дата', postTime: 'Время', publish: 'Опубликовать',
    currentStatus: 'Текущий статус:', stopLive: 'Остановить эфир', liveTitleLabel: 'Название эфира',
    liveTitlePh: 'например: Воскресная проповедь', streamUrlLabel: 'Ссылка на трансляцию (YouTube и др.)',
    streamNote: 'Ссылка на YouTube Live или любой поддерживаемый embed', goLive: 'Начать эфир',
    existingPosts: 'Существующие посты', manageNote: 'Нажмите «Удалить», чтобы удалить пост.',
    backupNote: 'Данные хранятся в браузере. Используйте этот раздел для резервного копирования.',
    exportBtn: 'Скачать резервную копию', importBtn: 'Импорт резервной копии',
    importantNote: 'Важно: для больших файлов загружайте на Google Drive или YouTube и вставляйте ссылку.',
    offline: 'Офлайн', live: 'ЭФИР', wrongPass: 'Неверный пароль',
    needContent: 'Пожалуйста, напишите текст или выберите файл', fileTooBig: 'Файл больше 4 МБ.',
    published: 'Опубликовано!', storageError: 'Ошибка сохранения. Используйте внешние ссылки.',
    readError: 'Ошибка чтения файла', liveActivated: 'Прямой эфир активирован!', liveStopped: 'Эфир остановлен',
    noPosts: 'Пока нет постов', delete: 'Удалить', confirmDelete: 'Вы уверены, что хотите удалить этот пост?',
    deleted: 'Удалено', imported: 'Импортировано!', invalidFile: 'Неверный файл', defaultLiveTitle: 'Прямой эфир', untitled: 'Без названия'
  }
};

let currentLang = localStorage.getItem(LANG_KEY) || 'fa';
let posts = [];
let liveData = { isLive: false, streamUrl: '', title: '' };

document.addEventListener('DOMContentLoaded', () => {
  loadData();
  applyLanguage();
  checkAuth();
  populateBookSelects();
  setupAdminEvents();
  setDefaultDateTime();
});

function setDefaultDateTime() {
  const now = new Date();
  const dateInput = document.getElementById('post-date');
  const timeInput = document.getElementById('post-time');
  if (dateInput) dateInput.value = now.toISOString().slice(0, 10);
  if (timeInput) timeInput.value = now.toTimeString().slice(0, 5);
}

function loadData() {
  try { posts = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { posts = []; }
  try { liveData = JSON.parse(localStorage.getItem(LIVE_KEY) || '{"isLive":false,"streamUrl":"","title":""}'); } catch { liveData = { isLive: false, streamUrl: '', title: '' }; }
}

function savePosts() { localStorage.setItem(STORAGE_KEY, JSON.stringify(posts)); }
function saveLive() { localStorage.setItem(LIVE_KEY, JSON.stringify(liveData)); }

function applyLanguage() {
  document.body.classList.toggle('lang-en', currentLang === 'en' || currentLang === 'ru');
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
  const t = T[currentLang] || T.en;
  document.title = currentLang === 'fa' ? 'مدیریت — کلیسای خدا' : (currentLang === 'ru' ? 'Админ — Церковь Божья' : 'Admin — Church of God');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
  const typeSelect = document.getElementById('post-type');
  if (typeSelect) {
    const val = typeSelect.value;
    typeSelect.innerHTML = `<option value="text">${t.typeText}</option><option value="photo">${t.typePhoto}</option><option value="video">${t.typeVideo}</option><option value="file">${t.typeFile}</option>`;
    typeSelect.value = val || 'text';
  }
  populateBookSelects();
  renderLiveControls();
  renderPostsList();
}

function toggleLanguage() {
  if (currentLang === 'fa') currentLang = 'en';
  else if (currentLang === 'en') currentLang = 'ru';
  else currentLang = 'fa';
  localStorage.setItem(LANG_KEY, currentLang);
  applyLanguage();
}

function checkAuth() {
  const isAuth = sessionStorage.getItem(AUTH_KEY) === 'true';
  document.getElementById('login-box').classList.toggle('hidden', isAuth);
  document.getElementById('admin-panel').classList.toggle('hidden', !isAuth);
  if (isAuth) { renderLiveControls(); renderPostsList(); }
}

function login(e) {
  e.preventDefault();
  if (document.getElementById('password').value === PASSWORD) {
    sessionStorage.setItem(AUTH_KEY, 'true');
    checkAuth();
  } else {
    showStatus((T[currentLang] || T.en).wrongPass, 'error');
  }
}

function logout() {
  sessionStorage.removeItem(AUTH_KEY);
  checkAuth();
}

function populateBookSelects() {
  const select = document.getElementById('post-book');
  if (!select) return;
  const books = BIBLE_BOOKS[currentLang] || BIBLE_BOOKS.en;
  const currentVal = select.value;
  select.innerHTML = books.map((name, i) => `<option value="${i}">${name}</option>`).join('');
  if (currentVal) select.value = currentVal;
}

function setupAdminEvents() {
  document.getElementById('login-form')?.addEventListener('submit', login);
  document.getElementById('logout-btn')?.addEventListener('click', logout);
  document.getElementById('lang-toggle')?.addEventListener('click', toggleLanguage);
  document.getElementById('post-form')?.addEventListener('submit', handlePostSubmit);
  document.getElementById('live-form')?.addEventListener('submit', handleLiveSubmit);
  document.getElementById('stop-live-btn')?.addEventListener('click', stopLive);
  const zone = document.getElementById('upload-zone');
  const fileInput = document.getElementById('file-input');
  if (zone && fileInput) {
    zone.addEventListener('click', () => fileInput.click());
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('dragover'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone.addEventListener('drop', e => {
      e.preventDefault(); zone.classList.remove('dragover');
      if (e.dataTransfer.files.length) { fileInput.files = e.dataTransfer.files; updateFileLabel(e.dataTransfer.files[0]); }
    });
    fileInput.addEventListener('change', () => { if (fileInput.files[0]) updateFileLabel(fileInput.files[0]); });
  }
  document.querySelectorAll('.admin-tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.admin-tabs button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.add('hidden'));
      document.getElementById(btn.dataset.tab)?.classList.remove('hidden');
    });
  });
  document.getElementById('export-btn')?.addEventListener('click', exportData);
  document.getElementById('import-btn')?.addEventListener('click', () => document.getElementById('import-file').click());
  document.getElementById('import-file')?.addEventListener('change', importData);
}

function updateFileLabel(file) {
  const label = document.getElementById('file-label');
  if (label) label.textContent = `${file.name} (${(file.size / (1024*1024)).toFixed(2)} MB)`;
}

function handlePostSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];
  const t = T[currentLang] || T.en;
  const title_fa = form.title_fa.value.trim();
  const title_en = form.title_en.value.trim();
  const desc_fa = form.desc_fa.value.trim();
  const desc_en = form.desc_en.value.trim();
  const writing = form.writing.value.trim();
  const type = form.type.value;
  const bookIdx = parseInt(form.book.value, 10);
  if (!writing && !file) { showStatus(t.needContent, 'error'); return; }
  let postDate = new Date().toISOString();
  const dateVal = form.postDate.value;
  const timeVal = form.postTime.value || '12:00';
  if (dateVal) postDate = new Date(dateVal + 'T' + timeVal + ':00').toISOString();
  const finishSave = (dataUrl, filename) => {
    const post = {
      id: 'p_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      title_fa, title_en, desc_fa, desc_en, writing: writing || '',
      book_fa: BIBLE_BOOKS.fa[bookIdx], book_en: BIBLE_BOOKS.en[bookIdx],
      type: file ? (type === 'text' ? guessType(file) : type) : 'text',
      filename: filename || '', dataUrl: dataUrl || '', date: postDate, comments: []
    };
    posts.push(post);
    try {
      savePosts();
      showStatus(t.published, 'success');
      form.reset();
      setDefaultDateTime();
      document.getElementById('file-label').textContent = t.dropFile;
      renderPostsList();
    } catch (err) {
      showStatus(t.storageError, 'error');
      posts.pop();
    }
  };
  if (file) {
    if (file.size > 4 * 1024 * 1024) showStatus(t.fileTooBig, 'error');
    const reader = new FileReader();
    reader.onload = (ev) => finishSave(ev.target.result, file.name);
    reader.onerror = () => showStatus(t.readError, 'error');
    reader.readAsDataURL(file);
  } else {
    finishSave('', '');
  }
}

function guessType(file) {
  if (file.type.startsWith('image/')) return 'photo';
  if (file.type.startsWith('video/')) return 'video';
  return 'file';
}

function handleLiveSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const t = T[currentLang] || T.en;
  liveData.isLive = true;
  liveData.streamUrl = form.streamUrl.value.trim();
  liveData.title = form.liveTitle.value.trim() || t.defaultLiveTitle;
  saveLive();
  renderLiveControls();
  showStatus(t.liveActivated, 'success');
}

function stopLive() {
  const t = T[currentLang] || T.en;
  liveData.isLive = false;
  liveData.streamUrl = '';
  liveData.title = '';
  saveLive();
  renderLiveControls();
  showStatus(t.liveStopped, 'success');
}

function renderLiveControls() {
  const t = T[currentLang] || T.en;
  const status = document.getElementById('live-status');
  const stopBtn = document.getElementById('stop-live-btn');
  if (!status) return;
  if (liveData.isLive) {
    status.innerHTML = `<span style="color:#c62828;font-weight:600">● ${t.live}</span> — ${escapeHtml(liveData.title)}`;
    stopBtn?.classList.remove('hidden');
  } else {
    status.textContent = t.offline;
    stopBtn?.classList.add('hidden');
  }
  const urlInput = document.querySelector('#live-form [name="streamUrl"]');
  const titleInput = document.querySelector('#live-form [name="liveTitle"]');
  if (urlInput) urlInput.value = liveData.streamUrl || '';
  if (titleInput) titleInput.value = liveData.title || '';
}

function renderPostsList() {
  const list = document.getElementById('posts-list');
  if (!list) return;
  const t = T[currentLang] || T.en;
  if (posts.length === 0) { list.innerHTML = `<p style="color:#888">${t.noPosts}</p>`; return; }
  const sorted = posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  const locale = currentLang === 'fa' ? 'fa-IR' : (currentLang === 'ru' ? 'ru-RU' : 'en-GB');
  list.innerHTML = sorted.map(p => {
    const title = currentLang === 'fa' ? (p.title_fa || p.title_en || t.untitled) : (p.title_en || p.title_fa || t.untitled);
    const book = currentLang === 'fa' ? p.book_fa : (currentLang === 'ru' ? (BIBLE_BOOKS.ru[BIBLE_BOOKS.en.indexOf(p.book_en)] || p.book_en) : p.book_en);
    const dateStr = new Date(p.date).toLocaleString(locale, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const typeLabel = p.type === 'text' ? t.typeText : p.type === 'photo' ? t.typePhoto : p.type === 'video' ? t.typeVideo : t.typeFile;
    return `<div style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem;border-bottom:1px solid #eee;gap:1rem;flex-wrap:wrap">
      <div style="flex:1;min-width:200px"><strong>${escapeHtml(title)}</strong>
        <div style="font-size:0.85rem;color:#666;margin-top:0.25rem">${escapeHtml(book || '')} · ${typeLabel} · ${dateStr}</div></div>
      <button class="btn btn-outline btn-sm" onclick="deletePost('${p.id}')" style="color:#c62828;border-color:#c62828">${t.delete}</button>
    </div>`;
  }).join('');
}

function deletePost(id) {
  const t = T[currentLang] || T.en;
  if (!confirm(t.confirmDelete)) return;
  posts = posts.filter(p => p.id !== id);
  savePosts();
  renderPostsList();
  showStatus(t.deleted, 'success');
}

function exportData() {
  const data = { posts, live: liveData, exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `church-of-god-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importData(e) {
  const t = T[currentLang] || T.en;
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.posts) { posts = data.posts; savePosts(); }
      if (data.live) { liveData = data.live; saveLive(); }
      renderPostsList();
      renderLiveControls();
      showStatus(t.imported, 'success');
    } catch { showStatus(t.invalidFile, 'error'); }
  };
  reader.readAsText(file);
}

function showStatus(msg, type) {
  document.querySelectorAll('#status-msg').forEach(el => {
    el.textContent = msg;
    el.className = `status-msg ${type}`;
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 4500);
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&').replace(/</g,'<').replace(/>/g,'>').replace(/"/g,'"');
}

window.deletePost = deletePost;
