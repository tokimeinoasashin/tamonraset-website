const CONFIG = {
    ORDER_LINK: "#order-link",
    SOCIAL_LINKS: {
        alarif_facebook: "https://facebook.com/ALARIF.PUBLISH",
        alarif_instagram: "https://instagram.com/ALARIF.PUBLISH",
        alarif_email: "mailto:ALARIF.PUBLISHING@GMAIL.COM",
        alarif_whatsapp: "https://wa.me/201281849108",
        author_facebook: "#",
        author_instagram: "#",
        author_twitter: "#"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Set all order links
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(btn => {
        btn.href = CONFIG.ORDER_LINK;
    });

    // Set social links
    document.getElementById('link-alarif-fb').href = CONFIG.SOCIAL_LINKS.alarif_facebook;
    document.getElementById('link-alarif-ig').href = CONFIG.SOCIAL_LINKS.alarif_instagram;
    document.getElementById('link-alarif-email').href = CONFIG.SOCIAL_LINKS.alarif_email;
    document.getElementById('link-alarif-wa').href = CONFIG.SOCIAL_LINKS.alarif_whatsapp;
    
    document.getElementById('link-author-fb').href = CONFIG.SOCIAL_LINKS.author_facebook;
    document.getElementById('link-author-ig').href = CONFIG.SOCIAL_LINKS.author_instagram;
    document.getElementById('link-author-tw').href = CONFIG.SOCIAL_LINKS.author_twitter;

    // Sticky button logic for mobile
    const stickyBtn = document.querySelector('.sticky-cta');
    const heroBtn = document.querySelector('.hero .order-btn');

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
});
