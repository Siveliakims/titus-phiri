const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

window.addEventListener('load', () => {
  setTimeout(() => { const l = $('#loader'); l.style.opacity='0'; setTimeout(()=>l.remove(),700); }, 650);
});

const nav = $('.navbar'), toggle = $('.menu-toggle');
toggle.addEventListener('click', () => nav.classList.toggle('nav-open'));
$$('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('nav-open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
$$('.reveal').forEach(el => observer.observe(el));

const modal = $('#modal');
$$('.learn-more').forEach(btn => btn.addEventListener('click', () => {
  $('#modalTitle').textContent = btn.dataset.title;
  $('#modalText').textContent = btn.dataset.text;
  modal.classList.add('show');
}));
$('#modalClose').onclick = () => modal.classList.remove('show');
modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('show'); });

$$('.filters button').forEach(button => button.addEventListener('click', () => {
  $$('.filters button').forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  $$('.gallery-item').forEach(item => {
    item.style.display = filter === 'all' || item.classList.contains(filter) ? '' : 'none';
  });
}));

$('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = encodeURIComponent(f.get('subject'));
  const body = encodeURIComponent(
    `Name: ${f.get('name')}\nOrganisation: ${f.get('organisation')}\nEmail: ${f.get('email')}\n\n${f.get('message')}`
  );
  window.location.href = `mailto:phirititus@gmail.com?subject=${subject}&body=${body}`;
});

window.addEventListener('scroll', () => {
  const bg = $('.hero-bg');
  if(bg && window.scrollY < innerHeight) bg.style.transform = `scale(1.06) translateY(${window.scrollY*.10}px)`;
});
