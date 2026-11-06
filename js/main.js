/* =========================================================
   Help Auto Diagnostics — script comun pentru toate paginile
   ---------------------------------------------------------
   AICI modifici datele de contact și meniul. Se schimbă automat
   în topbar, header, footer, bara de pe mobil și pagina Contact.
   ========================================================= */

const CONTACT = {
  phone:  { label: '0730 590 431',   tel: '+40730590431' },
  phone2: { label: '0721 256 05 07', tel: '+40721256057' },
  email: 'contact@helpauto.ro',
  program: 'Luni – Vineri: 09:00 – 17:00',
  zona: 'București și Ilfov',
};

// [fișier, text în meniu]
const MENU = [
  ['index.html', 'Acasă'],
  ['servicii.html', 'Servicii'],
  ['solutia-help.html', 'Soluția Help'],
  ['masina-la-schimb.html', 'Mașina la schimb'],
  ['cazuri-pro-bono.html', 'Cazuri pro bono'],
  ['resurse-utile.html', 'Resurse utile'],
  ['despre-noi.html', 'Despre noi'],
  ['contact.html', 'Contact'],
];

/* Iconițe SVG simple (în HTML: <span class="card__icon" data-icon="nume"></span>) */
const ICONS = {
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  car: '<path d="M5 17H3v-5l2-5h11l3 5h2v5h-2"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/><path d="M9.5 17h5M5 12h14"/>',
  truck: '<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  swap: '<path d="m16 3 4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16"/>',
  route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

const current = location.pathname.split('/').pop() || 'index.html';
const tel = (p) => `tel:${p.tel}`;

/* ---------- Topbar + header ---------- */
function renderHeader() {
  const links = MENU.map(([href, label]) =>
    `<a href="${href}"${href === current ? ' aria-current="page"' : ''}>${label}</a>`).join('');

  document.getElementById('site-header').outerHTML = `
    <div class="topbar">
      <div class="container">
        <ul>
          <li>${icon('phone')}<a href="${tel(CONTACT.phone)}">${CONTACT.phone.label}</a></li>
          <li class="hide-md">${icon('mail')}<a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
          <li>${icon('clock')}${CONTACT.program}</li>
        </ul>
        <ul class="hide-md"><li>${icon('pin')}${CONTACT.zona}</li></ul>
      </div>
    </div>
    <header class="site-header">
      <div class="container">
        <a class="logo" href="index.html"><img src="assets/img/logo.png" alt="Help Auto Diagnostics" width="987" height="126"></a>
        <nav class="nav" id="nav" aria-label="Meniu principal">${links}</nav>
        <button class="menu-toggle" aria-controls="nav" aria-expanded="false" aria-label="Deschide meniul">${icon('menu')}</button>
      </div>
    </header>`;
}

/* ---------- Footer + bara fixă de pe mobil ---------- */
function renderFooter() {
  const links = MENU.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`);

  document.getElementById('site-footer').outerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <img src="assets/img/logo-alb.png" alt="Help Auto Diagnostics" width="987" height="126" loading="lazy">
            <p>Atunci când mașina se oprește, viața ta nu trebuie să se oprească odată cu ea.</p>
          </div>
          <div><h4>Pagini</h4><ul>${links.slice(0, 4).join('')}</ul></div>
          <div><h4>Informații</h4><ul>${links.slice(4).join('')}</ul></div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="${tel(CONTACT.phone)}">${CONTACT.phone.label}</a></li>
              <li><a href="${tel(CONTACT.phone2)}">${CONTACT.phone2.label}</a></li>
              <li><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
              <li>${CONTACT.program}</li>
              <li>${CONTACT.zona}, în funcție de disponibilitate.</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Help Auto Diagnostics</span>
          <span>Continuitate în mobilitate.</span>
        </div>
      </div>
    </footer>
    <div class="mobile-bar">
      <a class="btn btn--outline-light" href="${tel(CONTACT.phone)}">${icon('phone')}Sună acum</a>
      <a class="btn btn--primary" href="contact.html">${icon('calendar')}Programare</a>
    </div>`;
}

/* ---------- Completează datele de contact în pagini ----------
   <a data-contact="phone"></a>  → link tel cu numărul
   <a data-contact="email"></a>  → link mailto cu adresa
   Dacă linkul are deja text (ex. „Sună acum”), textul rămâne. */
function fillContact() {
  document.querySelectorAll('[data-contact]').forEach((el) => {
    const key = el.dataset.contact;
    const isEmail = key === 'email';
    el.href = isEmail ? `mailto:${CONTACT.email}` : tel(CONTACT[key]);
    if (!el.textContent.trim()) el.textContent = isEmail ? CONTACT.email : CONTACT[key].label;
  });
  document.querySelectorAll('[data-icon]').forEach((el) => { el.innerHTML = icon(el.dataset.icon); });
}

/* ---------- Comportament ---------- */
function setupMenu() {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav');
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
    btn.innerHTML = icon(open ? 'close' : 'menu');
  });
}

function setupHeaderShadow() {
  const header = document.querySelector('.site-header');
  const update = () => header.classList.toggle('is-scrolled', scrollY > 50);
  addEventListener('scroll', update, { passive: true });
  update();
}

// Resurse utile: deschide articolul din link (ex. resurse-utile.html#check-engine)
function openArticleFromHash() {
  const target = location.hash && document.querySelector(`details${location.hash}`);
  if (target) target.open = true;
}

renderHeader();
renderFooter();
fillContact();
setupMenu();
setupHeaderShadow();
openArticleFromHash();
