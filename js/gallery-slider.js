const slides = [
  { src: 'images/photo1.jpg', caption: 'Our first photo together 💞' },
  { src: 'images/photo2.jpg', caption: 'That day we laughed so much 🤭' },
  { src: 'images/photo3.jpg', caption: 'You looked so cute here 🥺' }
];

let currentIndex = 0;

const sliderImage = document.getElementById('sliderImage');
const sliderCaption = document.getElementById('sliderCaption');

function updateSlider() {
  sliderImage.src = slides[currentIndex].src;
  sliderCaption.textContent = slides[currentIndex].caption;
}

// Next button click
document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

// Prev button click
document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

// 🎯 Keyboard arrow key control
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  } else if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }
});

// Initialize with first image and caption
updateSlider();
