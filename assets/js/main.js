
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

    // Testimonial Slider (Horizontal Images)
    const imageUrls = [
        "assets/images/studio/studio-1.png",
        "assets/images/studio/studio-2.png",
        "assets/images/studio/studio-3.png",
        "assets/images/yoga/yoga-1.png",
        "assets/images/yoga/yoga-2.png",
        "assets/images/yoga/yoga-3.png",
        "assets/images/yoga/yoga-4.png",
        "assets/images/yoga/yoga-9.png",
        "assets/images/yoga/yoga-11.png",
        "assets/images/yoga/yoga-12.png"
    ];

    const testimonialImage = document.getElementById('testimonial-image');
    let currentImageIndex = 0;

    function changeImage() {
        if (testimonialImage) {
            testimonialImage.src = imageUrls[currentImageIndex];
            currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        }
    }

    if (testimonialImage) {
        setInterval(changeImage, 3000); // Change image every 3 seconds
    }

    // Vertical Images Slider
    const verticalImageUrls = [
        "assets/images/studio/studio-4.png",
        "assets/images/studio/studio-5.png",
        "assets/images/yoga/yoga-5.png",
        "assets/images/yoga/yoga-6.png",
        "assets/images/yoga/yoga-7.png",
        "assets/images/yoga/yoga-8.png",
        "assets/images/yoga/yoga-10.png"
    ];

    const verticalTestimonialImage = document.getElementById('vertical-testimonial-image');
    let currentVerticalImageIndex = 0;

    function changeVerticalImage() {
        if (verticalTestimonialImage) {
            verticalTestimonialImage.src = verticalImageUrls[currentVerticalImageIndex];
            currentVerticalImageIndex = (currentVerticalImageIndex + 1) % verticalImageUrls.length;
        }
    }

    if (verticalTestimonialImage) {
        setInterval(changeVerticalImage, 3000); // Change image every 3 seconds
    }
});
