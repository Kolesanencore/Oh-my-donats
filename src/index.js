// mobile menu script:
(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnClose = document.querySelector('[data-menu-close]');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
  });

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });

  mobileBtnClose.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
  });

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });
})();
// END mobile menu script

$('.rate').rateYo({
  starWidth: '24px',
  normalFill: '#d6d6d6',
  ratedFill: '#ffcc00',
  readOnly: true,
});

$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
});
