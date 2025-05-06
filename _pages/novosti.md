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
                <!-- Search Box -->
                <div class="card mb-4">
                    <div class="card-body">
                        <h4>Pretražite novosti</h4>
                        <form action="{{ '/pretraga' | relative_url }}" method="get">
                            <div class="input-group">
                                <input type="text" name="q" class="form-control" placeholder="Unesite ključne riječi...">
                                <button class="btn btn-primary" type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Categories -->
                <div class="card mb-4">
                    <div class="card-body">
                        <h4>Kategorije</h4>
                        <ul class="list-group list-group-flush">
                            {% assign categories = site.posts | map: "categories" | flatten | group_by_exp: "item", "item" | sort: "size" | reverse %}
                            {% for category in categories %}
                            {% if category.name != "" %}
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <a href="{{ '/kategorije/' | append: category.name | slugify | relative_url }}" class="text-decoration-none text-dark">
                                    {{ category.name }}
                                </a>
                                <span class="badge bg-primary rounded-pill">{{ category.size }}</span>
                            </li>
                            {% endif %}
                            {% endfor %}
                        </ul>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="card mb-4">
                    <div class="card-body">
                        <h4>Brzi linkovi</h4>
                        <div class="list-group">
                            <a href="{{ '/kalendar' | relative_url }}" class="list-group-item list-group-item-action">
                                <i class="fas fa-calendar-alt me-2"></i>Školski kalendar
                            </a>
                            <a href="{{ '/dokumenti' | relative_url }}" class="list-group-item list-group-item-action">
                                <i class="fas fa-file-download me-2"></i>Preuzimanje dokumenata
                            </a>
                            <a href="{{ '/dogadjaji' | relative_url }}" class="list-group-item list-group-item-action">
                                <i class="fas fa-calendar-check me-2"></i>Predstojeći događaji
                            </a>
                            <a href="{{ '/nastavnici' | relative_url }}" class="list-group-item list-group-item-action">
                                <i class="fas fa-users me-2"></i>Nastavno osoblje
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>