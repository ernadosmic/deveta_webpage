---
layout: default
title: Događaji
permalink: /dogadjaji/
---

<!-- Page Banner -->
<div class="page-banner bg-primary py-4">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-white mb-0">Školski Događaji</h2>
            </div>
        </div>
    </div>
</div>

<!-- Events Content -->
<div class="main-content py-5">
    <div class="container">
        <div class="row">
            <!-- Main Content Area -->
            <div class="col-lg-8">
                <h3 class="mb-4">Predstojeći događaji</h3>
                {% assign upcoming_events = site.events | where_exp: "event", "event.date >= site.time" | sort: "date" %}
                
                {% if upcoming_events.size > 0 %}
                <div class="list-group mb-5">
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
                            <p class="mb-1"><i class="fas fa-map-marker-alt me-1"></i> {{ event.location }}</p>
                            <p class="mb-1">{{ event.excerpt }}</p>
                            <a href="{{ event.url | relative_url }}" class="text-primary">Više informacija</a>
                        </div>
                    </div>
                    {% endfor %}
                </div>
                {% else %}
                <p>Nema predstojećih događaja.</p>
                {% endif %}
                
                <h3 class="mb-4">Prošli događaji</h3>
                {% assign past_events = site.events | where_exp: "event", "event.date < site.time" | sort: "date" | reverse %}
                
                {% if past_events.size > 0 %}
                <div class="list-group">
                    {% for event in past_events %}
                    <div class="list-group-item list-group-item-action d-flex gap-3 py-3 text-muted">
                        {% assign event_date = event.date | date: "%d" %}
                        {% assign event_month = event.date | date: "%b" %}
                        <div class="event-date text-center bg-light rounded p-2" style="min-width: 60px;">
                            <h3 class="mb-0">{{ event_date }}</h3>
                            <p class="mb-0">{{ event_month }}</p>
                        </div>
                        <div class="d-flex flex-column w-100">
                            <h5 class="mb-1">{{ event.title }}</h5>
                            <p class="mb-1"><i class="far fa-clock me-1"></i> {{ event.time }}</p>
                            <p class="mb-1"><i class="fas fa-map-marker-alt me-1"></i> {{ event.location }}</p>
                            <p class="mb-1">{{ event.excerpt }}</p>
                            <a href="{{ event.url | relative_url }}" class="text-primary">Više informacija</a>
                        </div>
                    </div>
                    {% endfor %}
                </div>
                {% else %}
                <p>Nema prošlih događaja.</p>
                {% endif %}
            </div>

            <!-- Sidebar -->
            <div class="col-lg-4">
                <!-- Calendar Download -->
                <div class="card mb-4">
                    <div class="card-body">
                        <h4>Kalendar događaja</h4>
                        <p>Preuzmite kalendar svih školskih događaja u digitalnom formatu za vaš kalendar aplikaciju.</p>
                        <div class="d-grid">
                            <a href="#" class="btn btn-primary">
                                <i class="fas fa-calendar-alt me-2"></i>Preuzmi kalendar (.ics)
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Event Categories -->
                <div class="card mb-4">
                    <div class="card-body">
                        <h4>Kategorije događaja</h4>
                        <div class="list-group list-group-flush">
                            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Sportski događaji
                                <span class="badge bg-primary rounded-pill">3</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Akademski događaji
                                <span class="badge bg-primary rounded-pill">5</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Roditeljski sastanci
                                <span class="badge bg-primary rounded-pill">2</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Izleti i ekskurzije
                                <span class="badge bg-primary rounded-pill">1</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Suggest Event -->
                <div class="card mb-4">
                    <div class="card-header bg-primary text-white">
                        <h5 class="mb-0">Predložite događaj</h5>
                    </div>
                    <div class="card-body">
                        <p>Imate ideju za školski događaj? Pošaljite nam vaš prijedlog i možda ga uvrstimo u naš kalendar.</p>
                        <a href="{{ '/kontakt' | relative_url }}" class="btn btn-outline-primary">Kontaktirajte nas</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>