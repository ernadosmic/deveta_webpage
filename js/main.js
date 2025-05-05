// Main JavaScript file for Deveta School Website

document.addEventListener('DOMContentLoaded', function () {
    // Add current year to footer copyright
    const footerYear = document.querySelector('.footer-bottom p');
    const currentYear = new Date().getFullYear();

    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
    }

    // Highlight active navigation item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();

        if (currentPage === linkPage ||
            (currentPage === 'index.html' && linkPage === 'index.html') ||
            (currentPage.includes('news') && linkPage.includes('news')) ||
            (currentPage.includes('events') && linkPage.includes('events')) ||
            (currentPage.includes('downloads') && linkPage.includes('downloads'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Handle dropdown menus in mobile view
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');

        if (dropdownToggle) {
            dropdownToggle.addEventListener('click', function (e) {
                e.preventDefault();
                const dropdownMenu = this.nextElementSibling;

                if (window.innerWidth < 992) {
                    if (dropdownMenu.style.display === 'block') {
                        dropdownMenu.style.display = 'none';
                    } else {
                        dropdownMenu.style.display = 'block';
                    }
                }
            });
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});