
async function loadHTML(url, elementId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Could not load ${url}:`, error);
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    await loadHTML('header.html', 'header-placeholder');
    await loadHTML('footer.html', 'footer-placeholder');

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');
    const logo = document.querySelector('.logo');

    if (menuToggle && mainNavigation) { // Check if elements exist after loading
        menuToggle.addEventListener('click', function() {
            mainNavigation.classList.toggle('toggled');
        });
    }

    AOS.init();

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    // console.log('Service Worker registered: ', registration);
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

    // Family Yoga Slider (About Page)
    const familyYogaCarousel = document.querySelector('.family-yoga-carousel');
    if (familyYogaCarousel) {
        // console.log('Family Yoga Carousel found!'); // Removed for production
        const familyYogaImages = familyYogaCarousel.querySelectorAll('img');
        let currentFamilyYogaIndex = 0;

        function showFamilyYogaImage(index) {
            familyYogaImages.forEach((img, i) => {
                if (i === index) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });
            // console.log('Showing image index:', index); // Removed for production
        }

        // Show the first image initially
        showFamilyYogaImage(currentFamilyYogaIndex);

        setInterval(() => {
            currentFamilyYogaIndex = (currentFamilyYogaIndex + 1) % familyYogaImages.length;
            showFamilyYogaImage(currentFamilyYogaIndex);
        }, 3000); // Change image every 3 seconds
    } else {
        // console.log('Family Yoga Carousel NOT found!'); // Removed for production
    }

    // Review Images Slider
    const reviewImageUrls = [
        "assets/images/review/review-1.png",
        "assets/images/review/review-2.png",
        "assets/images/review/review-3.png",
        "assets/images/review/review-4.png",
        "assets/images/review/review-5.png",
        "assets/images/review/review-6.png",
        "assets/images/review/review-7.png",
        "assets/images/review/review-8.png",
        "assets/images/review/review-9.png",
        "assets/images/review/review-10.png",
        "assets/images/review/review-11.png",
        "assets/images/review/review-12.png",
        "assets/images/review/review-13.png",
        "assets/images/review/review-14.png",
        "assets/images/review/review-15.png",
        "assets/images/review/review-16.png",
        "assets/images/review/review-17.png",
        "assets/images/review/review-18.png",
        "assets/images/review/review-19.png",
        "assets/images/review/review-20.png",
        "assets/images/review/review-21.png",
        "assets/images/review/review-22.png",
        "assets/images/review/review-23.png",
        "assets/images/review/review-24.png",
        "assets/images/review/review-25.png"
    ];

    const reviewImage = document.getElementById('review-image');
    let currentReviewImageIndex = 0;

    function changeReviewImage() {
        if (reviewImage) {
            reviewImage.src = reviewImageUrls[currentReviewImageIndex];
            currentReviewImageIndex = (currentReviewImageIndex + 1) % reviewImageUrls.length;
        }
    }

    if (reviewImage) {
        setInterval(changeReviewImage, 3000); // Change image every 3 seconds
    }
});
