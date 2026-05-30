// ハンバーガーメニュー
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ナビリンクをクリックしたらメニューを閉じる
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// スクロールアニメーション
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(
  '.about-grid, .skill-card, .work-card, .contact-form, .social-links'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// コンタクトフォーム送信（デモ）
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '送信しました！';
  btn.disabled = true;
  btn.style.background = '#00b894';
  setTimeout(() => {
    btn.textContent = '送信する';
    btn.disabled = false;
    btn.style.background = '';
    e.target.reset();
  }, 3000);
});
