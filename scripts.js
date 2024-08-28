document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Form Submission (custom handling example)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Custom form handling logic here
            alert('Form submitted!');
        });
    }

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    document.querySelectorAll('.scroll-fade').forEach(element => {
        observer.observe(element);
    });

    // Hero Section Slide Show
    const slides = document.querySelectorAll('.hero-content .slide');
    const nextSlideButton = document.querySelector('.next-slide');
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
        document.querySelector('.hero-content').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    if (slides.length) {
        setInterval(nextSlide, 3000); // Automatically move to next slide every 3 seconds

        if (nextSlideButton) {
            nextSlideButton.addEventListener('click', () => {
                nextSlide();
            });
        }
    }
});
