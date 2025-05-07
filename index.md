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

<!-- Quick Access Links Section -->

{% include quick-access-links.html %}

<!-- Main Content Section -->
<div class="main-content py-5">
    <div class="container">
        <div class="row">
            <!-- News Section -->
            <div class="col-lg-8">
                {% include news-section.html %}
                {% include upcoming-events.html %}
            </div>

            <!-- Sidebar Section -->
            <div class="col-lg-4 mt-4 mt-lg-0">
                <!-- Quick Links Component -->
                {% include quick-links.html %}

                <!-- School Hours Component -->
                {% include school-hours.html %}

                <!-- Announcement Component -->
                {% include announcement.html %}

                <!-- Social Media Component -->
                {% include social-media.html %}
            </div>
        </div>
    </div>

</div>

<!-- Testimonials Section -->

{% include testimonials.html %}

<!-- CTA Section -->

{% include cta.html %}
