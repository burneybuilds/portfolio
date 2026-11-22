document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav__link');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
                block: 'start'
            });

            if (link.classList.contains('nav__link')) {
                navLinks.forEach((item) => {
                    item.classList.remove('is-active');
                    item.removeAttribute('aria-current');
                });

                link.classList.add('is-active');
                link.setAttribute('aria-current', 'page');
            }
        });
    });
});
