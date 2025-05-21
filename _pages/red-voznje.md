---
layout: default
title: Red vožnje
permalink: /red-voznje/
---

<!-- Page Banner -->
<div class="page-banner bg-primary py-4">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-white mb-0">Red vožnje</h2>
            </div>
        </div>
    </div>
</div>

<!-- Bus Schedule Section -->
<section class="py-5">
    <div class="container">
        <!-- Omerbegovaca-Maoča -->
        <div class="row">
            <div class="col-12">
                {% assign route_data = site.data.bus_routes.omerbegovaca-maoca %}

                {% include bus-timetable.html
                    title=route_data.title
                    stations=route_data.route_stations
                    start_station=route_data.start_station
                    end_station=route_data.end_station
                    station_times=route_data.station_times
                %}
    <!-- Sfdsfdsfdchedule change notice -->

<!-- Schedule change notice -->

                <div class="alert alert-info">
                    <strong>Važno:</strong> Provjerite aktuelni red vožnje prije putovanja, moguće su izmjene rasporeda.
                </div>
            </div>
        </div>
        <!-- Omerbegovaca-Maoča Section End -->
    </div>

</section>
