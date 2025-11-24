const slides = [
  { src: 'images/photo1.jpg', caption: 'Our first photo together 💞' },
  { src: 'images/photo2.jpg', caption: 'Your EVERGREEN Photo 🙈' },
  { src: 'images/photo3.jpg', caption: 'You looked so cute here 🥺' },
  { src: 'images/photo4.jpg', caption: 'Once Again 🫳🏻🫴🏻' },
  { src: 'images/photo5.jpg', caption: 'Our memories of the ocean will linger on, long after our footprints in the sand are gone 🌊' },
  { src: 'images/photo6.jpg', caption: 'Awww Cutieee 🥺' },
  { src: 'images/photo7.jpg', caption: 'Let love and laughter light OUR path 💌' },
  { src: 'images/photo8.jpg', caption: 'We are Gorgeous at Galawat 🤭' },
  { src: 'images/photo9.jpg', caption: 'Best photo or WOT???? ❤️' },
  { src: 'images/photo10.jpg', caption: 'Madam er Driver Naki? 💞' },
  { src: 'images/photo11.jpg', caption: 'Khaa joldi 🤭' },
  { src: 'images/photo12.jpg', caption: 'Our Stree Relief Session 🥺' },
  { src: 'images/photo13.jpg', caption: 'Our Mirron Selfie 🥺' },
  { src: 'images/photo14.jpg', caption: 'Our first Trip together 📷' },
  { src: 'images/photo15.jpg', caption: 'Bodmas 🐒' },
  { src: 'images/photo16.jpg', caption: 'Please Rethink that photo in Same place 🙈🙊' },
  { src: 'images/photo17.jpg', caption: 'Half kheyechilam oidin mone ache btw Amazing at Arshalan 💞' },
  { src: 'images/photo18.jpeg', caption: 'That day we laughed so much 🤭' },
  { src: 'images/photo19.jpg', caption: 'Awww 🥺' },
  { src: 'images/photo20.jpg', caption: 'My Favourite one 😘' }
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
