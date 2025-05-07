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
                {% include calendar-download.html %}
                {% include event-categories.html %}
                {% include suggest-event.html %}
            </div>
        </div>
    </div>

</div>
