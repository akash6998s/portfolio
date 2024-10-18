document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('element');
    const roles = ['Frontend Developer', 'React.js Developer', 'UI/UX Designer'];
    let index = 0;

    setInterval(() => {
        element.textContent = roles[index];
        index = (index + 1) % roles.length;
    }, 3000);

    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.querySelector('.close-btn');

    hamburger.addEventListener('click', () => {
        mobileMenu.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });

    const successPopup = document.getElementById('success-popup');
    const closePopup = document.querySelector('.close-popup');

    closePopup.addEventListener('click', () => {
        successPopup.style.display = 'none';
    });

    document.querySelector('.contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        successPopup.style.display = 'block';
        e.target.reset();
    });
});
