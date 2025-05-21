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
    <div class="container">        <!-- Omerbegovaca-Maoča -->
        <div class="row">
            <div class="col-12">
                {% assign route_data = site.data.bus_routes.omerbegovaca-maoca %}{% include bus-timetable.html
                    title=route_data.title
                    stations=route_data.route_stations
                    start_station=route_data.start_station
                    end_station=route_data.end_station
                    station_times=route_data.station_times
                    regular_services=route_data.regular_services
                    irregular_services=route_data.irregular_services
                    regular_explanation=route_data.regular_explanation
                    irregular_explanation=route_data.irregular_explanation
                    line_number=route_data.line_number
                %}
            </div>
        </div>
        <!-- Omerbegovaca-Maoča Section End -->        <!-- Maoča-Omerbegovaca -->
        <div class="row mt-5">
            <div class="col-12">
                {% assign route_data_reverse = site.data.bus_routes.maoca-omerbegovaca %}{% include bus-timetable.html
                    title=route_data_reverse.title
                    stations=route_data_reverse.route_stations
                    start_station=route_data_reverse.start_station
                    end_station=route_data_reverse.end_station
                    station_times=route_data_reverse.station_times
                    regular_services=route_data_reverse.regular_services
                    irregular_services=route_data_reverse.irregular_services
                    regular_explanation=route_data_reverse.regular_explanation
                    irregular_explanation=route_data_reverse.irregular_explanation
                    line_number=route_data_reverse.line_number
                %}
            </div>
        </div>        <!-- Maoča-Omerbegovaca Section End -->        <!-- Rašljani-Potočari -->
        <div class="row mt-5">
            <div class="col-12">
                {% assign route_data_rasljani = site.data.bus_routes.rasljani-potocari %}{% include bus-timetable.html
                    title=route_data_rasljani.title
                    stations=route_data_rasljani.route_stations
                    start_station=route_data_rasljani.start_station
                    end_station=route_data_rasljani.end_station
                    station_times=route_data_rasljani.station_times
                    regular_services=route_data_rasljani.regular_services
                    irregular_services=route_data_rasljani.irregular_services
                    regular_explanation=route_data_rasljani.regular_explanation
                    irregular_explanation=route_data_rasljani.irregular_explanation
                    line_number=route_data_rasljani.line_number
                %}
            </div>
        </div>
        <!-- Rašljani-Potočari Section End -->          <!-- Potočari-Rašljani -->
        <div class="row mt-5">
            <div class="col-12">
                {% assign route_data_potocari = site.data.bus_routes.potocari-rasljani %}{% include bus-timetable.html
                    title=route_data_potocari.title
                    stations=route_data_potocari.route_stations
                    start_station=route_data_potocari.start_station
                    end_station=route_data_potocari.end_station
                    station_times=route_data_potocari.station_times
                    regular_services=route_data_potocari.regular_services
                    irregular_services=route_data_potocari.irregular_services
                    regular_explanation=route_data_potocari.regular_explanation
                    irregular_explanation=route_data_potocari.irregular_explanation
                    line_number=route_data_potocari.line_number
                %}

                <div class="alert alert-info mt-4">
                    <strong>Važno:</strong> Provjerite aktuelni red vožnje prije putovanja, moguće su izmjene rasporeda.
                </div>
            </div>
        </div>
        <!-- Potočari-Rašljani Section End -->
    </div>

</section>
