
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
    const imageUrls = [
        "assets/images/uploads/studio/Screen-Shot-2019-02-07-at-8.12.52-PM.png",
        "assets/images/uploads/studio/IMG_3759.jpeg",
        "assets/images/uploads/studio/IMG_3734.jpeg",
        "assets/images/uploads/studio/IMG_3733.jpeg",
        "assets/images/uploads/studio/IMG_2183.jpeg",
        "assets/images/uploads/studio/974DEB3E-6C86-4C33-97E6-14C461756C41.jpeg",
        "assets/images/uploads/yoga/p6-2-1.jpg",
        
        "assets/images/uploads/yoga/p12-1.jpg",
        "assets/images/uploads/yoga/p11-1.jpg",
        "assets/images/uploads/yoga/P3-1.jpg",
        "assets/images/uploads/yoga/P1500119-1.jpg",
        "assets/images/uploads/yoga/P1500096-1.jpg",
        "assets/images/uploads/yoga/IMG_7891.jpeg",
        "assets/images/uploads/yoga/IMG_3635.jpeg",
        "assets/images/uploads/yoga/ACC7829C-BF08-4BFD-8579-236BC5488711.jpeg",
        "assets/images/uploads/yoga/70770253_2449622731941572_3583263680017465344_n.jpg",
        "assets/images/uploads/yoga/0556EA28-EBED-4C33-97FB-6583A4E614D5.jpeg"
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
});
