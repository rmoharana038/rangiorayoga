
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');
    const logo = document.querySelector('.logo');

    menuToggle.addEventListener('click', function() {
        mainNavigation.classList.toggle('toggled');
    });

    AOS.init();

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('Service Worker registered: ', registration);
                })
                .catch(error => {
                    console.error('Service Worker registration failed: ', error);
                });
        });
    }

    // Highlight active menu item
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-navigation a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else if (currentPath === '' && linkPath === 'index.html') {
            // Handle the case where index.html is the default page
            link.classList.add('active');
        }
    });

    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Show button after scrolling down 200px
            scrollToTopBtn.style.display = 'block';
            logo.style.display = 'none'; // Hide logo
        } else {
            scrollToTopBtn.style.display = 'none';
            logo.style.display = 'block'; // Show logo
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Testimonial Slider
    const sliderTrack = document.querySelector('.slider-track');
    if (sliderTrack) {
        const slides = Array.from(sliderTrack.children);
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            sliderTrack.appendChild(clone);
        });
    }
});
