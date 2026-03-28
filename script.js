// Mobile Menu Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal elements on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// Typing effect for Hero Title
const typingElement = document.querySelector('.typing-text');
const originalHTML = typingElement.innerHTML;
const titles = ["I build <span class='highlight'>applications</span>.", "I design <span class='highlight'>brands</span>.", "I fix <span class='highlight'>systems</span>."];

let titleIndex = 0;
let isDeleting = false;
let text = '';
let speed = 100;

// To keep it simple and preserve the HTML highlights, we just swap the text phrases 
// with a fade effect instead of character-by-character typing which breaks HTML tags.
setInterval(() => {
    typingElement.style.opacity = 0;
    
    setTimeout(() => {
        titleIndex = (titleIndex + 1) % titles.length;
        typingElement.innerHTML = titles[titleIndex];
        typingElement.style.opacity = 1;
    }, 500); // Wait for fade out
}, 3000); // Change text every 3 seconds

// Ensure initial style transition for fade
typingElement.style.transition = 'opacity 0.5s ease-in-out';
