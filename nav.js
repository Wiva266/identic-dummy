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

const burgerMenu = document.querySelector(".burger-menu");
const navLinksBurger = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", () => {
    navLinksBurger.classList.toggle("active");
    burgerMenu.classList.toggle("active");
});