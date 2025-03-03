// ===== COUNTDOWN OF EVENT FUNCTION ===== //
const targetDate = new Date("May 1, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "00:00:00";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// ===== SWIPER ABOUT ===== //
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    speed: 2000,

    effect: "coverflow",
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

// ===== SWIPER COMPETITION ===== //
var competitionSwiper = new Swiper(".swiper-competition", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    speed: 1000,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".competition-next",
        prevEl: ".competition-prev",
    },
    pagination: {
        el: ".competition-pagination",
        clickable: true,
    },
});

// ===== SWIPER SPONSORS 1 ===== //
var sponsorsSwiper = new Swiper(".swiper-sponsors", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    speed: 5000,
    freeMode: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});

// ===== SWIPER SPONSORS 2 ===== //
var sponsors2Swiper = new Swiper(".swiper-sponsors2", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    speed: 5000,
    freeMode: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
    },
});