
const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides side-by-side
slides.forEach((slide, index) => {
  slide.style.left = `${index * slideWidth}px`;
});

// Move the track to show the next slide
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// Handle the click event for the next button
nextButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling || slides[0];
  moveToSlide(track, currentSlide, nextSlide);
});

// Handle the click event for the previous button
prevButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
  moveToSlide(track, currentSlide, prevSlide);
});