document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('open');
            navMenu.classList.toggle('open');
            document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
        });
    }

    // 2. Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // 3. Carousel Logic (Specifically for index.html)
    const initCarousel = () => {
        const carouselTrack = document.getElementById('carouselTrack');
        if (!carouselTrack) return;

        const carouselContainer = document.querySelector('.hero-carousel');
        const slides = Array.from(carouselTrack.children);
        if (slides.length === 0) return;

        const nextBtn = document.getElementById('carouselNext');
        const prevBtn = document.getElementById('carouselPrev');
        const indicatorsContainer = document.getElementById('carouselIndicators');

        let currentIndex = 0;
        let autoPlayInterval;
        const autoPlayDelay = 5000;

        // Create Indicators
        if (indicatorsContainer) {
            slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('carousel-dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(dot);
            });
        }

        const updateIndicators = (index) => {
            if (!indicatorsContainer) return;
            const dots = Array.from(indicatorsContainer.children);
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === index);
            });
        };

        const updateTrackPosition = () => {
            // Calculate percentage based on current index
            // Assuming each slide takes full width
            carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateIndicators(currentIndex);

            // Elastic Height Logic
            const currentSlide = slides[currentIndex];
            const img = currentSlide.querySelector('img');

            const setHeight = () => {
                if (carouselContainer) {
                    carouselContainer.style.height = `${img.offsetHeight}px`;
                }
            };

            if (img.complete) {
                setHeight();
            } else {
                img.addEventListener('load', setHeight);
            }
        };

        const goToSlide = (index) => {
            currentIndex = index;
            if (currentIndex < 0) currentIndex = slides.length - 1;
            if (currentIndex >= slides.length) currentIndex = 0;
            updateTrackPosition();
            resetAutoPlay();
        };

        const nextSlide = () => goToSlide(currentIndex + 1);
        const prevSlide = () => goToSlide(currentIndex - 1);

        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        const startAutoPlay = () => {
            autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
        };

        const resetAutoPlay = () => {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        };

        // Handle window resize to recalculate slider widths if needed implicitly handled by percentage transforms
        window.addEventListener('resize', updateTrackPosition);

        // Start
        updateTrackPosition();
        startAutoPlay();
    };

    initCarousel();
});
