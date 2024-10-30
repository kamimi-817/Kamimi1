const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('prev', 'active', 'next');
    slide.style.zIndex = 0;

    if (index === currentSlide) {
      slide.classList.add('active');
      slide.style.zIndex = 2;
    } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
      slide.classList.add('prev');
      slide.style.zIndex = 1;
    } else if (index === (currentSlide + 1) % slides.length) {
      slide.classList.add('next');
      slide.style.zIndex = 1;
    }
  });
}

function showNextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
}

updateSlides();
setInterval(showNextSlide, 3000);
