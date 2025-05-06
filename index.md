---
layout: default
title: Početna
---

<!-- Hero Section -->
<div class="hero-section">
    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="{{ '/assets/images/skola-1.webp' | relative_url }}" class="d-block w-100" alt="Deveta osnovna škola">
                <div class="overlay"></div>
                <div class="carousel-caption text-start h-100 d-flex flex-column justify-content-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <h2 class="hero-title mb-3">Dobrodošli u Devetu osnovnu školu</h2>
                                <p class="hero-subtitle mb-4">Inspiriramo izvrsnost i njegujemo uspjeh svakog učenika</p>
                                <div class="hero-buttons d-flex flex-wrap">
                                    <a href="{{ '/o-nama' | relative_url }}" class="btn btn-primary me-2 mb-2">O našoj školi</a>
                                    <a href="{{ '/novosti' | relative_url }}" class="btn btn-outline-light mb-2">Novosti</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Quick Access Links -->
<div class="quick-access py-4">
    <div class="container">
        <div class="row">
            <div class="col-6 col-md-3 mb-3">
                <a href="{{ '/kalendar' | relative_url }}" class="quick-link d-flex flex-column justify-content-center align-items-center p-4">
                    <i class="fas fa-calendar-alt mb-3"></i>
                    <span>Kalendar</span>
                </a>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <a href="{{ '/za-ucenike' | relative_url }}" class="quick-link d-flex flex-column justify-content-center align-items-center p-4">
                    <i class="fas fa-graduation-cap mb-3"></i>
                    <span>Za učenike</span>
                </a>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <a href="{{ '/za-roditelje' | relative_url }}" class="quick-link d-flex flex-column justify-content-center align-items-center p-4">
                    <i class="fas fa-users mb-3"></i>
                    <span>Za roditelje</span>
                </a>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <a href="{{ '/nastavni-program' | relative_url }}" class="quick-link d-flex flex-column justify-content-center align-items-center p-4">
                    <i class="fas fa-book-open mb-3"></i>
                    <span>Nastavni program</span>
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Main Content -->
<div class="main-content py-5">
    <div class="container">
        <div class="row">
            <!-- News Section -->
            <div class="col-lg-8">
                <!-- Section Header -->
                <div class="section-header d-flex justify-content-between align-items-center mb-4">
                    <h3>Novosti i događaji</h3>
                    <a href="{{ '/novosti' | relative_url }}" class="btn btn-outline-primary btn-sm">Prikaži sve</a>
                </div>

                <!-- Featured News -->
                {% assign featured_post = site.posts | where: "featured", true | first %}
                {% if featured_post %}
                <div class="card mb-4">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="{{ featured_post.featured_image | default: featured_post.thumbnail | relative_url }}" class="img-fluid rounded-start h-100" alt="{{ featured_post.title }}" style="object-fit: cover;">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ featured_post.title }}</h5>
                                <p class="card-text text-muted small"><i class="far fa-calendar-alt me-1"></i> {{ featured_post.date | date: "%d.%m.%Y" }}</p>
                                <p class="card-text">{{ featured_post.excerpt }}</p>
                                <a href="{{ featured_post.url | relative_url }}" class="btn btn-sm btn-primary">Pročitaj više</a>
                            </div>
                        </div>
                    </div>
                </div>
                {% endif %}

                <!-- Latest News -->
                <div class="row">
                    {% assign latest_posts = site.posts | where_exp: "post", "post.featured != true" | sort: "date" | reverse | limit: 2 %}
                    {% for post in latest_posts %}
                    <div class="col-md-6">
                        <div class="card mb-4">
                            <div class="card-body">
                                <h5 class="card-title">{{ post.title }}</h5>
                                <p class="card-text text-muted small"><i class="far fa-calendar-alt me-1"></i> {{ post.date | date: "%d.%m.%Y" }}</p>
                                <p class="card-text">{{ post.excerpt }}</p>
                                <a href="{{ post.url | relative_url }}" class="btn btn-sm btn-primary">Pročitaj više</a>
                            </div>
                        </div>
                    </div>
                    {% endfor %}
                </div>

                <!-- Upcoming Events -->
                <div class="section-header d-flex justify-content-between align-items-center mb-4 mt-4">
                    <h3>Predstojeći događaji</h3>
                    <a href="{{ '/dogadjaji' | relative_url }}" class="btn btn-outline-primary btn-sm">Prikaži sve</a>
                </div>

                <!-- Events List -->
                <div class="list-group">
                    {% assign upcoming_events = site.events | where_exp: "event", "event.date >= site.time" | sort: "date" | limit: 2 %}
                    {% for event in upcoming_events %}
                    <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
                        {% assign event_date = event.date | date: "%d" %}
                        {% assign event_month = event.date | date: "%b" %}
                        <div class="event-date text-center bg-light rounded p-2" style="min-width: 60px;">
                            <h3 class="mb-0">{{ event_date }}</h3>
                            <p class="mb-0">{{ event_month }}</p>
                        </div>
                        <div class="d-flex flex-column w-100">
                            <h5 class="mb-1">{{ event.title }}</h5>
                            <p class="mb-1"><i class="far fa-clock me-1"></i> {{ event.time }}</p>
                            <p class="mb-1">{{ event.excerpt }}</p>
                            <a href="{{ event.url | relative_url }}" class="text-primary">Više informacija</a>
                        </div>
                    </div>
                    {% endfor %}
                    {% if upcoming_events.size == 0 %}
                    <p class="text-center py-4 text-muted">Trenutno nema predstojećih događaja.</p>
                    {% endif %}
                </div>
            </div>

            <!-- Sidebar -->
            <div class="col-lg-4 mt-4 mt-lg-0">
                <!-- Quick Links Card -->
                {% include quick-links.html %}

                <!-- School Hours -->
                {% include school-hours.html %}

                <!-- Announcement -->
                <div class="card mb-4 bg-light">
                    <div class="card-body">
                        <h5 class="card-title">Važna obavijest</h5>
                        <p class="card-text">Obavještavamo učenike i roditelje da će se prijavljivanje za
                            vannastavne aktivnosti za sljedeću školsku godinu održati od 15. do 30. maja. Prijavni
                            obrazac možete preuzeti ovdje.</p>
                        <a href="{{ '/dokumenti' | relative_url }}" class="btn btn-primary">Preuzmi obrazac</a>
                    </div>
                </div>

                <!-- Social Media -->
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0">Pratite nas</h5>
                    </div>
                    <div class="card-body">
                        <p>Ostanite informirani o najnovijim vijestima i događajima putem naših društvenih mreža.</p>
                        <div class="social-icons-footer">
                            <a href="{{ site.social.facebook }}" class="me-2" aria-label="Facebook"><i class="fab fa-facebook-f fa-lg"></i></a>
                            <a href="{{ site.social.instagram }}" class="me-2" aria-label="Instagram"><i class="fab fa-instagram fa-lg"></i></a>
                            <a href="{{ site.social.youtube }}" class="me-2" aria-label="YouTube"><i class="fab fa-youtube fa-lg"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Testimonials Section -->
<div class="testimonials py-5 bg-light">
    <div class="container">
        <div class="section-header text-center mb-5">
            <h3>Šta kažu o nama</h3>
            <p class="text-muted">Mišljenja naših učenika, roditelja i nastavnika</p>
        </div>
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="mb-3 text-primary">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p class="card-text">"Naša kćerka je već treću godinu učenica Devete osnovne škole i svaki
                            dan je oduševljena novim znanjima koja stiče. Nastavnici su predani i uvijek dostupni."
                        </p>
                    </div>
                    <div class="card-footer bg-white">
                        <p class="mb-0 fw-bold">Amela H.</p>
                        <p class="text-muted small mb-0">Roditelj</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="mb-3 text-primary">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p class="card-text">"Deveta osnovna škola nije samo obrazovna institucija, to je zajednica
                            gdje se svaki učenik osjeća kao kod kuće. Vannastavne aktivnosti su raznolike i pomažu
                            učenicima da otkriju svoje talente."</p>
                    </div>
                    <div class="card-footer bg-white">
                        <p class="mb-0 fw-bold">Mirza S.</p>
                        <p class="text-muted small mb-0">Nastavnik</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="mb-3 text-primary">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p class="card-text">"Kao bivši učenik, sa ponosom mogu reći da me je Deveta osnovna škola
                            pripremila za srednju školu na najbolji mogući način. Nastavni program je sveobuhvatan,
                            a nastavnici su uvijek spremni pomoći."</p>
                    </div>
                    <div class="card-footer bg-white">
                        <p class="mb-0 fw-bold">Amir K.</p>
                        <p class="text-muted small mb-0">Bivši učenik</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- CTA Section -->
<div class="cta-section py-5 bg-primary text-white">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-8 mb-4 mb-lg-0">
                <h3>Pridružite se našoj školskoj zajednici</h3>
                <p class="mb-0">Saznajte više o procesu upisa i mogućnostima koje nudi Deveta osnovna škola</p>
            </div>
            <div class="col-lg-4 text-lg-end">
                <a href="{{ '/kontakt' | relative_url }}" class="btn btn-outline-light">Kontaktirajte nas</a>
            </div>
        </div>
    </div>
</div>