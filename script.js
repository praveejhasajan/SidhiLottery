// Add your JavaScript code here

// Carousel
let currentCarouselIndex = 0;
const carouselItems = document.querySelectorAll(".carousel-item");

function showNextCarouselItem() {
  carouselItems[currentCarouselIndex].style.display = "none";
  currentCarouselIndex = (currentCarouselIndex + 1) % carouselItems.length;
  carouselItems[currentCarouselIndex].style.display = "block";
}

// Countdown Timer
const countdownTimer = document.querySelector(".countdown-timer");

function updateCountdownTimer() {
  // Replace the following code with your own countdown logic
  const countdownDate = new Date("2023-07-01T00:00:00Z").getTime();
  const now = new Date().getTime();
  const timeDifference = countdownDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown timer every second
setInterval(updateCountdownTimer, 1000);
