
const prevButton = document.querySelector('.gallery__button-prev');
const nextButton = document.querySelector('.gallery__button-next');

const swiper = new Swiper('.gallery__slider', {
  loop: true,
  watchOverflow: false,
  slidesPerView: 'auto',
  spaceBetween: 30,
  speed: 700,

  pagination: {
    el: '.gallery__pagination-mobile',
    clickable: true,
  },
});


const slides = document.querySelectorAll('.gallery__slider .swiper-slide:not(.swiper-slide-duplicate)');
const totalSlides = slides.length;


if (nextButton) {
  nextButton.addEventListener('click', () => {

    const nextIndex = (swiper.realIndex + 1) % totalSlides;
    swiper.slideToLoop(nextIndex);
  });
}

if (prevButton) {
  prevButton.addEventListener('click', () => {

    let prevIndex = swiper.realIndex - 1;

    if (prevIndex < 0) {
      prevIndex = totalSlides - 1;
    }
    swiper.slideToLoop(prevIndex);
  });
}


const currentSlide = document.getElementById('current-slide');
const totalSlide = document.getElementById('total-slide');

if (totalSlide && currentSlide) {
  totalSlide.textContent = totalSlides;
  swiper.on('slideChange', function () {
    currentSlide.textContent = swiper.realIndex + 1;
  });
  currentSlide.textContent = swiper.realIndex + 1;
}