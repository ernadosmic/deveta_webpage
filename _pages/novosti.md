---
layout: default
title: Novosti
permalink: /novosti/
---

<!-- Page Banner -->
<div class="page-banner bg-primary py-4">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-white mb-0">Školske Novosti</h2>
            </div>
        </div>
    </div>
</div>

<!-- News Content -->
<div class="main-content py-5">
    <div class="container">
        <div class="row">
            <!-- Main Content Area -->
            <div class="col-lg-8">
                {% if site.posts.size > 0 %}
                <div class="row">
                    {% for post in site.posts %}
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card h-100">
                            {% if post.thumbnail %}
                            <img src="{{ post.thumbnail | relative_url }}" class="card-img-top" alt="{{ post.title }}" style="height: 200px; object-fit: cover;">
                            {% elsif post.featured_image %}
                            <img src="{{ post.featured_image | relative_url }}" class="card-img-top" alt="{{ post.title }}" style="height: 200px; object-fit: cover;">
                            {% endif %}
                            <div class="card-body">
                                <h5 class="card-title">{{ post.title }}</h5>
                                <p class="card-text text-muted small"><i class="far fa-calendar-alt me-1"></i> {{ post.date | date: "%d.%m.%Y" }}</p>
                                <p class="card-text">{{ post.excerpt }}</p>
                            </div>
                            <div class="card-footer bg-white border-top-0">
                                <a href="{{ post.url | relative_url }}" class="btn btn-sm btn-primary">Pročitaj više</a>
                            </div>
                        </div>
                    </div>
                    {% endfor %}
                </div>
                {% else %}
                <div class="alert alert-info">
                    Trenutno nema objavljenih novosti.
                </div>
                {% endif %}
            </div>

            <!-- Sidebar -->
            <div class="col-lg-4">
                {% include search-box.html %}
                {% include categories.html %}
                {% include sidebar-quick-links.html %}
            </div>
        </div>
    </div>

</div>
