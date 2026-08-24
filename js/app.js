/* Church of God - Main App Logic */

const STORAGE_KEY = 'cog_posts_v1';
const LIVE_KEY = 'cog_live_v1';
const LANG_KEY = 'cog_lang';

const BIBLE_BOOKS = {
  fa: ['پیدایش','خروج','لاویان','اعداد','تثنیه','یوشع','داوران','روت','اول سموئیل','دوم سموئیل','اول پادشاهان','دوم پادشاهان','اول تواریخ','دوم تواریخ','عزرا','نحمیا','استر','ایوب','مزامیر','امثال','جامعه','غزل غزل‌ها','اشعیا','ارمیا','مراثی','حزقیال','دانیال','هوشع','یوئیل','عاموس','عوبیدیا','یونس','میکا','ناحوم','حبقوق','صفنیا','حجی','زکریا','ملاکی','متی','مرقس','لوقا','یوحنا','اعمال رسولان','رومیان','اول قرنتیان','دوم قرنتیان','غلاطیان','افسسیان','فیلیپیان','کولسیان','اول تسالونیکیان','دوم تسالونیکیان','اول تیموتائوس','دوم تیموتائوس','تیطس','فلیمون','عبرانیان','یعقوب','اول پطرس','دوم پطرس','اول یوحنا','دوم یوحنا','سوم یوحنا','یهودا','مکاشفه','سه فرشته','عمومی'],
  en: ['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1 Samuel','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Song of Solomon','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon','Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation','Three Angels','General']
};

const T = {
  fa: {
    pageTitle: 'کلیسای خدا — پیام سه فرشته', siteName: 'کلیسای خدا', tagline: 'پیام سه فرشته — مکاشفه 14',
    home: 'خانه', media: 'رسانه‌ها', live: 'پخش زنده', contact: 'تماس', admin: 'مدیریت', langBtn: 'English',
    heroTitle: 'کلیسای خدا', heroSub: 'پیام جاودانی انجیل برای تمام قوم‌ها، زبان‌ها و ملت‌ها',
    angel1: 'فرشته اول', angel1Text: 'از خدا بترسید و او را جلال دهید، زیرا ساعت داوری او رسیده است',
    angel2: 'فرشته دوم', angel2Text: 'بابل سقوط کرده است! سقوط کرده است!',
    angel3: 'فرشته سوم', angel3Text: 'اگر کسی وحش و تصویرش را بپرستد...',
    all: 'همه', photo: 'عکس', video: 'ویدیو', file: 'فایل', text: 'متن', search: 'جستجو...',
    download: 'دانلود', view: 'مشاهده', comments: 'نظرات', noPosts: 'هنوز محتوایی منتشر نشده است.',
    writeComment: 'نظر خود را بنویسید...', yourName: 'نام شما', send: 'ارسال',
    liveNow: 'در حال پخش زنده', liveBadge: 'زنده', contactTitle: 'تماس با ما',
    whatsapp: 'واتساپ', phone: 'تلفن', email: 'ایمیل',
    footer: 'کلیسای خدا — پیام سه فرشته مکاشفه 14', close: 'بستن', untitled: 'بدون عنوان'
  },
  en: {
    pageTitle: 'Church of God — Three Angels Message', siteName: 'Church of God', tagline: 'Three Angels Message — Revelation 14',
    home: 'Home', media: 'Media', live: 'Live', contact: 'Contact', admin: 'Admin', langBtn: 'Persian',
    heroTitle: 'Church of God', heroSub: 'The everlasting gospel to every nation, tribe, language and people',
    angel1: 'First Angel', angel1Text: 'Fear God and give Him glory, for the hour of His judgment has come',
    angel2: 'Second Angel', angel2Text: 'Babylon is fallen, is fallen!',
    angel3: 'Third Angel', angel3Text: 'If anyone worships the beast and his image...',
    all: 'All', photo: 'Photo', video: 'Video', file: 'File', text: 'Text', search: 'Search...',
    download: 'Download', view: 'View', comments: 'Comments', noPosts: 'No content has been published yet.',
    writeComment: 'Write your comment...', yourName: 'Your name', send: 'Send',
    liveNow: 'LIVE NOW', liveBadge: 'LIVE', contactTitle: 'Contact Us',
    whatsapp: 'WhatsApp', phone: 'Phone', email: 'Email',
    footer: 'Church of God — Three Angels Message of Revelation 14', close: 'Close', untitled: 'Untitled'
  }
};

let currentLang = localStorage.getItem(LANG_KEY) || 'fa';
if (currentLang === 'ru') currentLang = 'en';
let posts = [];
let liveData = { isLive: false, streamUrl: '', title: '' };

document.addEventListener('DOMContentLoaded', () => {
  loadData();
  applyLanguage();
  renderAll();
  setupEventListeners();
});

function loadData() {
  try { posts = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { posts = []; }
  try { liveData = JSON.parse(localStorage.getItem(LIVE_KEY) || '{"isLive":false,"streamUrl":"","title":""}'); } catch { liveData = { isLive: false, streamUrl: '', title: '' }; }
}

function savePosts() { localStorage.setItem(STORAGE_KEY, JSON.stringify(posts)); }
function saveLive() { localStorage.setItem(LIVE_KEY, JSON.stringify(liveData)); }

function applyLanguage() {
  document.body.classList.toggle('lang-en', currentLang === 'en');
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
  const t = T[currentLang] || T.en;
  if (t.pageTitle) document.title = t.pageTitle;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
  const bookSelect = document.getElementById('filter-book');
  if (bookSelect) {
    const currentVal = bookSelect.value;
    bookSelect.innerHTML = `<option value="">${t.all}</option>` + BIBLE_BOOKS[currentLang].map(b => `<option value="${b}">${b}</option>`).join('');
    bookSelect.value = currentVal;
  }
  updateLiveBadge();
}

function toggleLanguage() {
  currentLang = currentLang === 'fa' ? 'en' : 'fa';
  localStorage.setItem(LANG_KEY, currentLang);
  applyLanguage();
  renderMedia();
}

function renderAll() {
  renderMedia();
  renderLive();
  updateLiveBadge();
}

function updateLiveBadge() {
  const badge = document.getElementById('live-badge');
  if (badge) badge.classList.toggle('hidden', !liveData.isLive);
}

function renderLive() {
  const section = document.getElementById('live-section');
  if (!section) return;
  if (liveData.isLive && liveData.streamUrl) {
    section.classList.remove('hidden');
    const titleEl = document.getElementById('live-title');
    if (titleEl) titleEl.textContent = liveData.title || T[currentLang].liveNow;
    const iframe = document.getElementById('live-iframe');
    if (iframe) {
      let src = liveData.streamUrl;
      if (src.includes('youtube.com/watch')) {
        const id = new URL(src).searchParams.get('v');
        src = `https://www.youtube.com/embed/${id}?autoplay=1`;
      } else if (src.includes('youtu.be/')) {
        const id = src.split('youtu.be/')[1].split('?')[0];
        src = `https://www.youtube.com/embed/${id}?autoplay=1`;
      }
      iframe.src = src;
    }
  } else {
    section.classList.add('hidden');
  }
}

function renderMedia() {
  const grid = document.getElementById('media-grid');
  if (!grid) return;
  const bookFilter = document.getElementById('filter-book')?.value || '';
  const typeFilter = document.getElementById('filter-type')?.value || '';
  const search = (document.getElementById('filter-search')?.value || '').toLowerCase();
  let filtered = posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  if (bookFilter) filtered = filtered.filter(p => p.book_fa === bookFilter || p.book_en === bookFilter);
  if (typeFilter) filtered = filtered.filter(p => p.type === typeFilter);
  if (search) {
    filtered = filtered.filter(p => {
      const title = (currentLang === 'fa' ? p.title_fa : p.title_en) || '';
      const desc = (currentLang === 'fa' ? p.desc_fa : p.desc_en) || '';
      const writing = p.writing || '';
      return title.toLowerCase().includes(search) || desc.toLowerCase().includes(search) || writing.toLowerCase().includes(search);
    });
  }
  const t = T[currentLang];
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><p>${t.noPosts}</p></div>`;
    return;
  }
  grid.innerHTML = filtered.map(p => {
    const title = currentLang === 'fa' ? (p.title_fa || p.title_en || t.untitled) : (p.title_en || p.title_fa || t.untitled);
    const desc = currentLang === 'fa' ? (p.desc_fa || p.desc_en) : (p.desc_en || p.desc_fa);
    const book = currentLang === 'fa' ? p.book_fa : p.book_en;
    const date = new Date(p.date).toLocaleString(currentLang === 'fa' ? 'fa-IR' : 'en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const typeIcon = p.type === 'photo' ? '🖼️' : p.type === 'video' ? '🎬' : p.type === 'text' ? '📝' : '📄';
    const commentsCount = (p.comments || []).length;
    let preview = desc || '';
    if (!preview && p.writing) preview = p.writing.slice(0, 120) + (p.writing.length > 120 ? '...' : '');
    let thumb = '';
    if (p.type === 'photo' && p.dataUrl) thumb = `<img src="${p.dataUrl}" alt="${escapeHtml(title)}" loading="lazy">`;
    else if (p.type === 'video' && p.dataUrl) thumb = `<video src="${p.dataUrl}" muted></video>`;
    else thumb = typeIcon;
    return `<article class="media-card" data-id="${p.id}">
      <div class="media-thumb">${thumb}</div>
      <div class="media-body">
        <div class="media-book">${book || ''}</div>
        <h3 class="media-title">${escapeHtml(title)}</h3>
        <p class="media-desc">${escapeHtml(preview)}</p>
        <div class="media-meta"><span>${date}</span><span>${commentsCount} ${t.comments}</span></div>
        <div class="media-actions">
          <button class="btn btn-primary btn-sm" onclick="openPost('${p.id}')">${t.view}</button>
          ${p.dataUrl ? `<a class="btn btn-outline btn-sm" href="${p.dataUrl}" download="${p.filename || 'file'}">${t.download}</a>` : ''}
        </div>
      </div>
    </article>`;
  }).join('');
}

function openPost(id) {
  const post = posts.find(p => p.id === id);
  if (!post) return;
  const t = T[currentLang];
  const title = currentLang === 'fa' ? (post.title_fa || post.title_en || t.untitled) : (post.title_en || post.title_fa || t.untitled);
  const desc = currentLang === 'fa' ? (post.desc_fa || post.desc_en) : (post.desc_en || post.desc_fa);
  const book = currentLang === 'fa' ? post.book_fa : post.book_en;
  const dateStr = new Date(post.date).toLocaleString(currentLang === 'fa' ? 'fa-IR' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  const modal = document.getElementById('post-modal');
  const content = document.getElementById('modal-content');
  let mediaHtml = '';
  if (post.type === 'photo' && post.dataUrl) mediaHtml = `<img class="modal-media" src="${post.dataUrl}" alt="${escapeHtml(title)}">`;
  else if (post.type === 'video' && post.dataUrl) mediaHtml = `<video class="modal-media" src="${post.dataUrl}" controls></video>`;
  else if (post.dataUrl) mediaHtml = `<p style="margin:1rem 0"><a class="btn btn-primary" href="${post.dataUrl}" download="${post.filename || 'file'}">${t.download} ${escapeHtml(post.filename || '')}</a></p>`;
  let writingHtml = '';
  if (post.writing) writingHtml = `<div style="margin:1.2rem 0;padding:1.2rem;background:#f9f7f2;border-radius:10px;line-height:1.9;white-space:pre-wrap;font-size:1.05rem">${escapeHtml(post.writing)}</div>`;
  const commentsHtml = (post.comments || []).map(c => `<div class="comment"><div><span class="comment-author">${escapeHtml(c.name)}</span> <span class="comment-date">${new Date(c.date).toLocaleString(currentLang === 'fa' ? 'fa-IR' : 'en-GB')}</span></div><div>${escapeHtml(c.text)}</div></div>`).join('') || '';
  content.innerHTML = `<button class="modal-close" onclick="closeModal()">&times;</button>
    <div class="media-book">${book || ''}</div>
    <h2 style="margin:0.5rem 0 0.4rem;color:var(--primary)">${escapeHtml(title)}</h2>
    <div style="font-size:0.9rem;color:var(--text-muted);margin-bottom:1rem">${dateStr}</div>
    ${mediaHtml}
    ${desc ? `<p style="margin-bottom:1rem;color:var(--text-muted)">${escapeHtml(desc)}</p>` : ''}
    ${writingHtml}
    ${post.dataUrl ? `<a class="btn btn-accent" href="${post.dataUrl}" download="${post.filename || 'file'}">${t.download}</a>` : ''}
    <div class="comments-box">
      <h3 style="font-size:1.1rem;margin-bottom:0.8rem">${t.comments}</h3>
      <div id="comments-list">${commentsHtml}</div>
      <form class="comment-form" onsubmit="addComment(event, '${id}')">
        <input type="text" name="name" placeholder="${t.yourName}" required>
        <textarea name="text" placeholder="${t.writeComment}" required></textarea>
        <button type="submit" class="btn btn-primary">${t.send}</button>
      </form>
    </div>`;
  modal.classList.add('open');
}

function closeModal() {
  document.getElementById('post-modal').classList.remove('open');
  const vid = document.querySelector('#modal-content video');
  if (vid) vid.pause();
}

function addComment(e, postId) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const text = form.text.value.trim();
  if (!name || !text) return;
  const post = posts.find(p => p.id === postId);
  if (!post) return;
  if (!post.comments) post.comments = [];
  post.comments.push({ name, text, date: new Date().toISOString() });
  savePosts();
  openPost(postId);
  form.reset();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&').replace(/</g,'<').replace(/>/g,'>').replace(/"/g,'"');
}

function setupEventListeners() {
  document.getElementById('lang-toggle')?.addEventListener('click', toggleLanguage);
  document.getElementById('filter-book')?.addEventListener('change', renderMedia);
  document.getElementById('filter-type')?.addEventListener('change', renderMedia);
  document.getElementById('filter-search')?.addEventListener('input', renderMedia);
  document.getElementById('post-modal')?.addEventListener('click', (e) => { if (e.target.id === 'post-modal') closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

window.openPost = openPost;
window.closeModal = closeModal;
window.addComment = addComment;
window.toggleLanguage = toggleLanguage;
