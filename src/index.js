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
  autoplaySpeed: 5000,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const reviewsSliderInner = document.querySelector('.slider');
const reviewsPrevBtn = reviewsSliderInner.querySelector('.slick-prev');
const reviewsNextBtn = reviewsSliderInner.querySelector('.slick-next');
const reviewsSlideNow = document.querySelector('.reviews__show-slide');
console.log(reviewsPrevBtn, reviewsNextBtn, reviewsSlideNow);
reviewsPrevBtn.addEventListener('click', () => {
  let currentSlide = $('.slider').slick('slickCurrentSlide');
  reviewsSlideNow.textContent = currentSlide + 1;
});
reviewsNextBtn.addEventListener('click', () => {
  let currentSlide = $('.slider').slick('slickCurrentSlide');
  reviewsSlideNow.textContent = currentSlide + 1;
});
