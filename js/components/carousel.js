// Basit bir görsel slider (isteğe bağlı kullanılır)

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel img");
  if (slides.length === 0) return;

  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? "block" : "none";
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".carousel img");
  if (slides.length === 0) return;

  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function startCarousel() {
  showSlide(currentSlide);
  setInterval(nextSlide, 4000);
}

document.addEventListener("DOMContentLoaded", startCarousel);
