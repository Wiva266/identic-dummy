// ===== DETAIL COMPETITION (CHANGE CONTENT) ===== //
document.addEventListener('DOMContentLoaded', () => {
    const swiperSlides = document.querySelectorAll('.swiper-slide');
    const detailSection = document.querySelector('.show-hide-detail-competition');
    const detailTitle = detailSection.querySelector('h1');
    const detailContent = detailSection.querySelector('p');
    const detailImage = detailSection.querySelector('.right .img');

    detailSection.style.display = 'none';

    let currentSlide = null;

    swiperSlides.forEach(slide => {
        slide.addEventListener('click', () => {
            if (currentSlide === slide) {
                detailSection.style.display = 'none';
                currentSlide = null;
            } else {
                const title = slide.getAttribute('data-title');
                const content = slide.getAttribute('data-content');
                const background = slide.getAttribute('data-background');
                const image = slide.getAttribute('data-image');

                detailTitle.textContent = title;
                detailContent.textContent = content;
                detailImage.style.backgroundImage = `url(${image})`;
                detailSection.style.backgroundImage = `url(${background})`;

                detailSection.style.display = 'block';
                detailSection.scrollIntoView({ behavior: 'smooth' });
                currentSlide = slide;
            }
        });
    });
});

// Ambil elemen burger menu dan nav-links
const burgerMenu = document.querySelector(".burger-menu");
const navLinksBurger = document.querySelector(".nav-links");

// Tambahkan event listener untuk toggle menu
burgerMenu.addEventListener("click", () => {
    navLinksBurger.classList.toggle("active"); // Tambah/hapus class active pada menu
    burgerMenu.classList.toggle("active"); // Tambah/hapus animasi burger
});

// ===== SCROLL BAR FUNCTION ===== //
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.nav-container');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== ACTIVE NAVBAR ===== //
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== SLIDER ===== //
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

// Filter Function
const buttons = document.querySelectorAll(".btn button");
const swiperWrapper = document.querySelector(".swiper-wrapper");
const allSlides = Array.from(swiperWrapper.children);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.textContent.trim().toUpperCase();
        swiperWrapper.innerHTML = "";
        const filteredSlides = allSlides.filter((slide) => {
            const badge = slide.querySelector(".badge, .badge-hotelier").textContent.trim().toUpperCase();
            return badge === filter;
        });
        filteredSlides.forEach((slide) => swiperWrapper.appendChild(slide));
        swiper.update();
    });
});

// ===== DROPDOWN RANK (MOBILE) ===== //
const ranks = document.querySelectorAll(".champion-prize-rank");

ranks.forEach((rank) => {
    const top = rank.querySelector(".top");
    const bottom = rank.querySelector(".bottom");

    top.addEventListener("click", () => {
        if (bottom.style.height === "50px") {
            bottom.style.height = "0";
        } else {
            bottom.style.height = "50px";
        }
    });
});

// ===== TIMELINE ===== //
const modal = document.getElementById("timelineModal");
const openModalBtn = document.querySelector(".open-timeline-btn");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

const lockScroll = () => {
    document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
    document.body.style.overflow = "auto";
};

openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    lockScroll();
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    unlockScroll();
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        unlockScroll();
    }
});