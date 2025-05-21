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
                <h3 class="mb-4">Omerbegovača - Maoča</h3>
                {% assign route_data = site.data.bus_routes.omerbegovaca-maoca %}

                {% include bus-timetable.html
                    title=route_data.title
                    stations=route_data.route_stations
                    start_station=route_data.start_station
                    end_station=route_data.end_station
                    station_times=route_data.station_times
                %}
            </div>
        </div>
        <!-- Omerbegovaca-Maoča Section End -->

        <!-- Maoča-Omerbegovaca -->
        <div class="row mt-5">
            <div class="col-12">
                <h3 class="mb-4">Maoča - Omerbegovača</h3>
                {% assign route_data_reverse = site.data.bus_routes.maoca-omerbegovaca %}

                {% include bus-timetable.html
                    title=route_data_reverse.title
                    stations=route_data_reverse.route_stations
                    start_station=route_data_reverse.start_station
                    end_station=route_data_reverse.end_station
                    station_times=route_data_reverse.station_times
                %}

                <div class="alert alert-info mt-4">
                    <strong>Važno:</strong> Provjerite aktuelni red vožnje prije putovanja, moguće su izmjene rasporeda.
                </div>
            </div>
        </div>
        <!-- Maoča-Omerbegovaca Section End -->
    </div>

</section>
