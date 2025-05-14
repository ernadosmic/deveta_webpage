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
        <div class="row mb-4">
            <div class="col-12">
                <h3 class="text-center mb-4">Red vožnje autobusa</h3>
                <p class="text-center">Linija: Omerbegovača - Maoča</p>
            </div>
        </div>
        
        <!-- Route Map Visualization -->
        <div class="row mb-4">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header bg-light">
                        <h4 class="mb-0">Ruta linije</h4>
                    </div>
                    <div class="card-body p-3">
                        <div class="route-map-container">
                            <div class="route-line"></div>
                            <div class="stations">
                                <div class="station start">
                                    <div class="station-dot"></div>
                                    <div class="station-name">OMERBEGOVACA</div>
                                </div>
                                <div class="station">
                                    <div class="station-dot"></div>
                                    <div class="station-name">Krajišnici</div>
                                </div>
                                <div class="station">
                                    <div class="station-dot"></div>
                                    <div class="station-name">Sisic Han</div>
                                </div>
                                <div class="station">
                                    <div class="station-dot"></div>
                                    <div class="station-name">Čađavac 'R'</div>
                                </div>
                                <div class="station">
                                    <div class="station-dot"></div>
                                    <div class="station-name">Dizdaruša Dom</div>
                                </div>
                                <div class="station">
                                    <div class="station-dot"></div>
                                    <div class="station-name">Dizdaruša S.</div>
                                </div>
                                <div class="station">
                                    <div class="station-dot"></div>
                                    <div class="station-name">4. Juli</div>
                                </div>
                                <div class="station end">
                                    <div class="station-dot"></div>
                                    <div class="station-name">Maoča</div>
                                </div>
                            </div>
                        </div>
                        
                        <style>
                            .route-map-container {
                                position: relative;
                                padding: 30px 15px;
                                margin: 20px auto;
                                max-width: 800px;
                            }
                            
                            .route-line {
                                position: absolute;
                                top: 50%;
                                left: 5%;
                                width: 90%;
                                height: 6px;
                                background-color: #dc3545;
                                transform: translateY(-50%);
                                border-radius: 3px;
                            }
                            
                            .stations {
                                display: flex;
                                justify-content: space-between;
                                position: relative;
                                z-index: 2;
                            }
                            
                            .station {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                width: 90px;
                            }
                            
                            .station-dot {
                                width: 20px;
                                height: 20px;
                                background-color: #0d6efd;
                                border-radius: 50%;
                                margin-bottom: 10px;
                                border: 2px solid #ffffff;
                                box-shadow: 0 0 0 2px #0d6efd;
                            }
                            
                            .start .station-dot, .end .station-dot {
                                width: 24px;
                                height: 24px;
                                background-color: #198754;
                            }
                            
                            .station-name {
                                font-size: 12px;
                                text-align: center;
                                transform: rotate(-45deg);
                                margin-top: 8px;
                                font-weight: 500;
                            }
                            
                            .start .station-name, .end .station-name {
                                font-weight: bold;
                            }
                            
                            @media (max-width: 768px) {
                                .stations {
                                    flex-wrap: wrap;
                                    justify-content: center;
                                }
                                
                                .station {
                                    margin: 15px;
                                }
                                
                                .route-line {
                                    display: none;
                                }
                                
                                .station-name {
                                    transform: none;
                                }
                            }
                        </style>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm mb-4">
                    <div class="card-header bg-primary text-white">
                        <div class="d-flex justify-content-between align-items-center">
                            <h4 class="mb-0">Omerbegovača - Maoča</h4>
                            <span class="badge bg-light text-dark">Autobus</span>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th>Stanica</th>
                                        <th colspan="18">Vrijeme polaska</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>OMERBEGOVACA</strong></td>
                                        <td>06:00</td>
                                        <td>06:30</td>
                                        <td>07:00</td>
                                        <td>07:30</td>
                                        <td>10:00</td>
                                        <td>10:30</td>
                                        <td>11:00</td>
                                        <td>12:00</td>
                                        <td>12:30</td>
                                        <td>13:00</td>
                                        <td>13:30</td>
                                        <td>15:00</td>
                                        <td>16:00</td>
                                        <td>18:00</td>
                                        <td>18:30</td>
                                        <td>19:00</td>
                                        <td>19:30</td>
                                        <td>20:00</td>
                                    </tr>
                                    <tr>
                                        <td>Krajišnici</td>
                                        <td>06:02</td>
                                        <td>06:32</td>
                                        <td>07:02</td>
                                        <td>07:32</td>
                                        <td>10:02</td>
                                        <td>10:32</td>
                                        <td>11:02</td>
                                        <td>12:02</td>
                                        <td>12:32</td>
                                        <td>13:02</td>
                                        <td>13:32</td>
                                        <td>15:02</td>
                                        <td>16:02</td>
                                        <td>18:02</td>
                                        <td>18:32</td>
                                        <td>19:02</td>
                                        <td>19:32</td>
                                        <td>20:02</td>
                                    </tr>
                                    <tr>
                                        <td>Sisic Han</td>
                                        <td>06:04</td>
                                        <td>06:34</td>
                                        <td>07:04</td>
                                        <td>07:34</td>
                                        <td>10:04</td>
                                        <td>10:34</td>
                                        <td>11:04</td>
                                        <td>12:04</td>
                                        <td>12:34</td>
                                        <td>13:04</td>
                                        <td>13:34</td>
                                        <td>15:04</td>
                                        <td>16:04</td>
                                        <td>18:04</td>
                                        <td>18:34</td>
                                        <td>19:04</td>
                                        <td>19:34</td>
                                        <td>20:04</td>
                                    </tr>
                                    <tr>
                                        <td>Čađavac 'R'</td>
                                        <td>06:06</td>
                                        <td>06:36</td>
                                        <td>07:06</td>
                                        <td>07:36</td>
                                        <td>10:06</td>
                                        <td>10:36</td>
                                        <td>11:06</td>
                                        <td>12:06</td>
                                        <td>12:36</td>
                                        <td>13:06</td>
                                        <td>13:36</td>
                                        <td>15:06</td>
                                        <td>16:06</td>
                                        <td>18:06</td>
                                        <td>18:36</td>
                                        <td>19:06</td>
                                        <td>19:36</td>
                                        <td>20:06</td>
                                    </tr>
                                    <tr>
                                        <td>Dizdaruša Dom</td>
                                        <td>06:08</td>
                                        <td>06:38</td>
                                        <td>07:08</td>
                                        <td>07:38</td>
                                        <td>10:08</td>
                                        <td>10:38</td>
                                        <td>11:08</td>
                                        <td>12:08</td>
                                        <td>12:38</td>
                                        <td>13:08</td>
                                        <td>13:38</td>
                                        <td>15:08</td>
                                        <td>16:08</td>
                                        <td>18:08</td>
                                        <td>18:38</td>
                                        <td>19:08</td>
                                        <td>19:38</td>
                                        <td>20:08</td>
                                    </tr>
                                    <tr>
                                        <td>Dizdaruša S.</td>
                                        <td>06:09</td>
                                        <td>06:39</td>
                                        <td>07:09</td>
                                        <td>07:39</td>
                                        <td>10:09</td>
                                        <td>10:39</td>
                                        <td>11:09</td>
                                        <td>12:09</td>
                                        <td>12:39</td>
                                        <td>13:09</td>
                                        <td>13:39</td>
                                        <td>15:09</td>
                                        <td>16:09</td>
                                        <td>18:09</td>
                                        <td>18:39</td>
                                        <td>19:09</td>
                                        <td>19:39</td>
                                        <td>20:09</td>
                                    </tr>
                                    <tr>
                                        <td>4. Juli</td>
                                        <td>06:10</td>
                                        <td>06:40</td>
                                        <td>07:10</td>
                                        <td>07:40</td>
                                        <td>10:10</td>
                                        <td>10:40</td>
                                        <td>11:10</td>
                                        <td>12:10</td>
                                        <td>12:40</td>
                                        <td>13:10</td>
                                        <td>13:40</td>
                                        <td>15:10</td>
                                        <td>16:10</td>
                                        <td>18:10</td>
                                        <td>18:40</td>
                                        <td>19:10</td>
                                        <td>19:40</td>
                                        <td>20:10</td>
                                    </tr>
                                    <tr class="table-warning">
                                        <td><strong>Maoča Centar</strong></td>
                                        <td>06:20</td>
                                        <td>06:50</td>
                                        <td>07:20</td>
                                        <td>07:50</td>
                                        <td>10:20</td>
                                        <td>10:50</td>
                                        <td>11:20</td>
                                        <td>12:20</td>
                                        <td>12:50</td>
                                        <td>13:20</td>
                                        <td>13:50</td>
                                        <td>15:20</td>
                                        <td>16:20</td>
                                        <td>18:20</td>
                                        <td>18:50</td>
                                        <td>19:20</td>
                                        <td>19:50</td>
                                        <td>20:20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-md-6">
                                <h5>Objašnjenje</h5>
                                <ul class="list-unstyled">
                                    <li><small><strong>'R'</strong> - stanica na zahtjev</small></li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h5>Napomene</h5>
                                <ul class="list-unstyled">
                                    <li><small>Red vožnje važi od 01.09.2024.</small></li>
                                    <li><small>Subotom, nedjeljom i praznicima vozi po posebnom redu vožnje.</small></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Schedule change notice -->
                <div class="alert alert-info">
                    <strong>Važno:</strong> Provjerite aktuelni red vožnje prije putovanja, moguće su izmjene rasporeda.
                </div>
            </div>
        </div>
    </div>
</section>
