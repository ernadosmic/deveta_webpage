---
layout: default
title: Test Reusable Route Map
permalink: /test-route-map/
route_stations:
  - Brčko
  - Gornji Rahić
  - Maoča
  - Rašljani
  - Čelić
start_station: Brčko
end_station: Čelić
---

<!-- Page Banner -->
<div class="page-banner bg-primary py-4">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-white mb-0">Test Reusable Route Map</h2>
            </div>
        </div>
    </div>
</div>

<!-- Test Route Map Section -->
<section class="py-5">
    <div class="container">
        <div class="row mb-4">
            <div class="col-12">
                <h3 class="text-center mb-4">Test Another Bus Line</h3>
                <p class="text-center">Linija: Brčko - Čelić</p>
            </div>
        </div>
        
        <!-- Route Map Visualization using include -->
        <div class="row mb-4">
            <div class="col-12">
                {% include route-map.html 
                    title="Ruta druge linije" 
                    stations=page.route_stations 
                    start_station=page.start_station 
                    end_station=page.end_station 
                %}
            </div>
        </div>
        
        <div class="row">
            <div class="col-12">
                <div class="alert alert-info">
                    <p class="mb-0">Ovo je primjer stranice koja koristi istu komponentu za vizualizaciju rute, ali sa različitim stanicama.</p>
                </div>
            </div>
        </div>
    </div>
</section>
