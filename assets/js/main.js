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

    // Load dynamic content for homepage if on index.html
    if (currentPage === '' || currentPage === 'index.html') {
        loadFeaturedNews();
        loadLatestNews();
        loadUpcomingEvents();
    }

    // Load all news if on news page
    if (currentPage.includes('news')) {
        loadAllNews();
    }

    // Load all events if on events page
    if (currentPage.includes('events')) {
        loadAllEvents();
    }

    // Sticky header functionality
    const header = document.querySelector('.sticky-header');
    const topBar = document.querySelector('.top-info-bar');

    if (header && topBar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > topBar.offsetHeight) {
                header.classList.add('is-sticky');
            } else {
                header.classList.remove('is-sticky');
            }
        });
    }
});

// Load featured news for homepage
function loadFeaturedNews() {
    const featuredNewsContainer = document.getElementById('featured-news');
    if (!featuredNewsContainer || !window.schoolData) return;

    const featuredNews = schoolData.news.find(item => item.featured);
    if (!featuredNews) return;

    const formattedDate = formatDate(featuredNews.date);

    const newsHtml = `
        <div class="card mb-4">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${featuredNews.image}" class="img-fluid rounded-start h-100"
                        alt="${featuredNews.title}" style="object-fit: cover;">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${featuredNews.title}</h5>
                        <p class="card-text text-muted small"><i class="far fa-calendar-alt me-1"></i> ${formattedDate}</p>
                        <p class="card-text">${featuredNews.summary}</p>
                        <a href="pages/news.html?id=${featuredNews.id}" class="btn btn-sm btn-primary">Pročitaj više</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    featuredNewsContainer.innerHTML = newsHtml;
}

// Load latest news for homepage
function loadLatestNews() {
    const latestNewsContainer = document.getElementById('latest-news');
    if (!latestNewsContainer || !window.schoolData) return;

    // Get the two most recent news that aren't featured
    const latestNews = schoolData.news
        .filter(item => !item.featured)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 2);

    let newsHtml = '';

    latestNews.forEach(news => {
        const formattedDate = formatDate(news.date);

        newsHtml += `
            <div class="col-md-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text text-muted small"><i class="far fa-calendar-alt me-1"></i> ${formattedDate}</p>
                        <p class="card-text">${news.summary}</p>
                        <a href="pages/news.html?id=${news.id}" class="btn btn-sm btn-primary">Pročitaj više</a>
                    </div>
                </div>
            </div>
        `;
    });

    latestNewsContainer.innerHTML = newsHtml;
}

// Load upcoming events for homepage
function loadUpcomingEvents() {
    const upcomingEventsContainer = document.getElementById('upcoming-events');
    if (!upcomingEventsContainer || !window.schoolData) return;

    // Get events that are in the future, sorted by date
    const currentDate = new Date();
    const upcomingEvents = schoolData.events
        .filter(item => new Date(item.date) >= currentDate)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 2);

    let eventsHtml = '';

    upcomingEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const day = eventDate.getDate();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
        const month = monthNames[eventDate.getMonth()];

        eventsHtml += `
            <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
                <div class="event-date text-center bg-light rounded p-2" style="min-width: 60px;">
                    <h3 class="mb-0">${day}</h3>
                    <p class="mb-0">${month}</p>
                </div>
                <div class="d-flex flex-column w-100">
                    <h5 class="mb-1">${event.title}</h5>
                    <p class="mb-1"><i class="far fa-clock me-1"></i> ${event.time}</p>
                    <p class="mb-1">${event.summary}</p>
                    <a href="pages/events.html?id=${event.id}" class="text-primary">Više informacija</a>
                </div>
            </div>
        `;
    });

    upcomingEventsContainer.innerHTML = eventsHtml;
}

// Load all news for news page
function loadAllNews() {
    const allNewsContainer = document.getElementById('all-news');
    if (!allNewsContainer || !window.schoolData) return;

    // Check if we should display a single news item (detail view)
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('id');

    if (newsId) {
        // Display single news
        const newsItem = schoolData.news.find(item => item.id === parseInt(newsId));
        if (!newsItem) {
            allNewsContainer.innerHTML = '<div class="alert alert-warning">Vijest nije pronađena.</div>';
            return;
        }

        const formattedDate = formatDate(newsItem.date);

        const newsHtml = `
            <div class="news-detail">
                <h2>${newsItem.title}</h2>
                <p class="text-muted mb-4"><i class="far fa-calendar-alt me-1"></i> ${formattedDate} | <i class="far fa-user me-1"></i> ${newsItem.author}</p>
                <div class="news-image mb-4">
                    <img src="../${newsItem.image}" class="img-fluid rounded" alt="${newsItem.title}">
                </div>
                <div class="news-content">
                    <p>${newsItem.content}</p>
                </div>
                <div class="mt-4">
                    <a href="news.html" class="btn btn-outline-primary"><i class="fas fa-arrow-left me-2"></i>Nazad na sve vijesti</a>
                </div>
            </div>
        `;

        allNewsContainer.innerHTML = newsHtml;
    } else {
        // Display all news items
        const allNews = [...schoolData.news].sort((a, b) => new Date(b.date) - new Date(a.date));

        let newsHtml = '';

        allNews.forEach(news => {
            const formattedDate = formatDate(news.date);

            newsHtml += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100">
                        <img src="../${news.image}" class="card-img-top" alt="${news.title}" style="height: 200px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text text-muted small"><i class="far fa-calendar-alt me-1"></i> ${formattedDate}</p>
                            <p class="card-text">${news.summary}</p>
                        </div>
                        <div class="card-footer bg-white border-top-0">
                            <a href="news.html?id=${news.id}" class="btn btn-sm btn-primary">Pročitaj više</a>
                        </div>
                    </div>
                </div>
            `;
        });

        allNewsContainer.innerHTML = `
            <div class="row">
                ${newsHtml}
            </div>
        `;
    }
}

// Load all events for events page
function loadAllEvents() {
    const allEventsContainer = document.getElementById('all-events');
    if (!allEventsContainer || !window.schoolData) return;

    // Check if we should display a single event (detail view)
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');

    if (eventId) {
        // Display single event
        const eventItem = schoolData.events.find(item => item.id === parseInt(eventId));
        if (!eventItem) {
            allEventsContainer.innerHTML = '<div class="alert alert-warning">Događaj nije pronađen.</div>';
            return;
        }

        const eventDate = new Date(eventItem.date);
        const formattedDate = formatDate(eventItem.date);

        const eventHtml = `
            <div class="event-detail">
                <h2>${eventItem.title}</h2>
                <div class="event-meta mb-4">
                    <span class="badge bg-primary me-2"><i class="far fa-calendar-alt me-1"></i> ${formattedDate}</span>
                    <span class="badge bg-secondary me-2"><i class="far fa-clock me-1"></i> ${eventItem.time}</span>
                    <span class="badge bg-info"><i class="fas fa-map-marker-alt me-1"></i> ${eventItem.location}</span>
                </div>
                <div class="event-content">
                    <p>${eventItem.description}</p>
                </div>
                <div class="mt-4">
                    <a href="events.html" class="btn btn-outline-primary"><i class="fas fa-arrow-left me-2"></i>Nazad na sve događaje</a>
                </div>
            </div>
        `;

        allEventsContainer.innerHTML = eventHtml;
    } else {
        // Display all events
        const currentDate = new Date();

        // Split events into upcoming and past
        const upcomingEvents = [...schoolData.events]
            .filter(item => new Date(item.date) >= currentDate)
            .sort((a, b) => new Date(a.date) - new Date(b.date));

        const pastEvents = [...schoolData.events]
            .filter(item => new Date(item.date) < currentDate)
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        let upcomingEventsHtml = '';
        let pastEventsHtml = '';

        // Generate HTML for upcoming events
        upcomingEvents.forEach(event => {
            const eventDate = new Date(event.date);
            const day = eventDate.getDate();
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
            const month = monthNames[eventDate.getMonth()];

            upcomingEventsHtml += `
                <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
                    <div class="event-date text-center bg-light rounded p-2" style="min-width: 60px;">
                        <h3 class="mb-0">${day}</h3>
                        <p class="mb-0">${month}</p>
                    </div>
                    <div class="d-flex flex-column w-100">
                        <h5 class="mb-1">${event.title}</h5>
                        <p class="mb-1"><i class="far fa-clock me-1"></i> ${event.time}</p>
                        <p class="mb-1"><i class="fas fa-map-marker-alt me-1"></i> ${event.location}</p>
                        <p class="mb-1">${event.summary}</p>
                        <a href="events.html?id=${event.id}" class="text-primary">Više informacija</a>
                    </div>
                </div>
            `;
        });

        // Generate HTML for past events
        pastEvents.forEach(event => {
            const eventDate = new Date(event.date);
            const day = eventDate.getDate();
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
            const month = monthNames[eventDate.getMonth()];

            pastEventsHtml += `
                <div class="list-group-item list-group-item-action d-flex gap-3 py-3 text-muted">
                    <div class="event-date text-center bg-light rounded p-2" style="min-width: 60px;">
                        <h3 class="mb-0">${day}</h3>
                        <p class="mb-0">${month}</p>
                    </div>
                    <div class="d-flex flex-column w-100">
                        <h5 class="mb-1">${event.title}</h5>
                        <p class="mb-1"><i class="far fa-clock me-1"></i> ${event.time}</p>
                        <p class="mb-1"><i class="fas fa-map-marker-alt me-1"></i> ${event.location}</p>
                        <p class="mb-1">${event.summary}</p>
                        <a href="events.html?id=${event.id}" class="text-primary">Više informacija</a>
                    </div>
                </div>
            `;
        });

        // Combine both sections
        allEventsContainer.innerHTML = `
            <h3 class="mb-4">Predstojeći događaji</h3>
            <div class="list-group mb-5">
                ${upcomingEventsHtml || '<p>Nema predstojećih događaja.</p>'}
            </div>
            
            <h3 class="mb-4">Prošli događaji</h3>
            <div class="list-group">
                ${pastEventsHtml || '<p>Nema prošlih događaja.</p>'}
            </div>
        `;
    }
}

// Helper function to format dates
function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('bs', options);
}

window.addEventListener('scroll', function () {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});