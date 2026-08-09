document.addEventListener("DOMContentLoaded", () => {
    // Sticky button logic for mobile
    const stickyBtn = document.querySelector('.sticky-cta');
    const heroBtn = document.querySelector('.hero .order-btn');

    if (stickyBtn && heroBtn) {
        window.addEventListener('scroll', () => {
            if (window.innerWidth <= 768) {
                const heroBtnBottom = heroBtn.getBoundingClientRect().bottom;
                if (heroBtnBottom < 0) {
                    stickyBtn.classList.add('visible');
                } else {
                    stickyBtn.classList.remove('visible');
                }
            } else {
                stickyBtn.classList.remove('visible');
            }
        });
    }
});
