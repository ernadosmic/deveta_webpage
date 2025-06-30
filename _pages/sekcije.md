---
layout: default
title: Sekcije
permalink: /sekcije/
---

<!-- Page Banner -->
<div class="page-banner bg-primary py-4">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-white mb-0">Vannastavne aktivnosti</h2>
                <p class="text-white mt-2 mb-0">Pridružite se našim sekcijama i otkrijte nova znanja i vještine!</p>
            </div>
        </div>
    </div>
</div>

<!-- Introduction Section -->
<div class="container py-5">
    <div class="row">
        <div class="col-lg-8 mx-auto text-center">
            <h3 class="mb-4">Otkrijte svoje talente</h3>
            <p class="lead mb-5">Naša škola nudi bogat izbor vannastavnih aktivnosti koje omogućavaju učenicima da razviju svoje sposobnosti, uče nove vještine i užive u kreativnom izražavanju. Od sporta do umjetnosti, od tehnologije do jezika - svaki učenik može pronaći svoju strast!</p>
        </div>
    </div>

    <!-- Categories Filter -->
    <div class="row mb-5">
        <div class="col-12">
            <div class="text-center">
                <h4 class="mb-4">Kategorije aktivnosti</h4>
                <div class="filter-buttons d-flex flex-wrap justify-content-center gap-2 mb-4">
                    <button class="btn btn-outline-primary filter-btn active" data-filter="all">
                        <i class="fas fa-list me-2"></i>Sve aktivnosti
                    </button>
                    <button class="btn btn-outline-primary filter-btn" data-filter="sport">
                        <i class="fas fa-running me-2"></i>Sport
                    </button>
                    <button class="btn btn-outline-primary filter-btn" data-filter="art">
                        <i class="fas fa-palette me-2"></i>Umjetnost
                    </button>
                    <button class="btn btn-outline-primary filter-btn" data-filter="tech">
                        <i class="fas fa-laptop-code me-2"></i>Tehnologija
                    </button>
                    <button class="btn btn-outline-primary filter-btn" data-filter="language">
                        <i class="fas fa-globe me-2"></i>Jezici
                    </button>
                    <button class="btn btn-outline-primary filter-btn" data-filter="science">
                        <i class="fas fa-microscope me-2"></i>Nauka
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Activities Grid -->
    <div class="row" id="activitiesGrid">

        <!-- Sports Activities -->
        <div class="col-lg-4 col-md-6 mb-4 activity-card" data-category="sport">
            <div class="activity-item h-100 border rounded-lg shadow-sm">
                <div class="activity-header bg-success text-white p-3 rounded-top">
                    <div class="d-flex align-items-center">
                        <div class="activity-icon me-3">
                            <i class="fas fa-futbol fa-2x"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Fudbal</h5>
                            <span class="badge bg-light text-success">Sport</span>
                        </div>
                    </div>
                </div>
                <div class="activity-body p-3">
                    <p class="mb-3">Pridružite se našem fudbalskom timu i razvijajte timski duh, kondiciju i tehniku igre.</p>
                    <div class="activity-details">
                        <div class="detail-item mb-2">
                            <i class="fas fa-clock text-muted me-2"></i>
                            <span>Utorak i četvrtak, 15:00-16:30</span>
                        </div>
                        <div class="detail-item mb-2">
                            <i class="fas fa-map-marker-alt text-muted me-2"></i>
                            <span>Školsko igralište</span>
                        </div>
                        <div class="detail-item mb-3">
                            <i class="fas fa-user text-muted me-2"></i>
                            <span>Nastavnik: Ajdin Lišić</span>
                        </div>
                    </div>
                    <button class="btn btn-success btn-sm w-100 join-btn" data-activity="fudbal">
                        <i class="fas fa-plus me-2"></i>Pridruži se
                    </button>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4 activity-card" data-category="sport">
            <div class="activity-item h-100 border rounded-lg shadow-sm">
                <div class="activity-header bg-success text-white p-3 rounded-top">
                    <div class="d-flex align-items-center">
                        <div class="activity-icon me-3">
                            <i class="fas fa-volleyball-ball fa-2x"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Odbojka</h5>
                            <span class="badge bg-light text-success">Sport</span>
                        </div>
                    </div>
                </div>
                <div class="activity-body p-3">
                    <p class="mb-3">Naučite osnovne tehnike odbojke i učestvujte u školskim turnirima.</p>
                    <div class="activity-details">
                        <div class="detail-item mb-2">
                            <i class="fas fa-clock text-muted me-2"></i>
                            <span>Ponedjeljak i srijeda, 14:30-16:00</span>
                        </div>
                        <div class="detail-item mb-2">
                            <i class="fas fa-map-marker-alt text-muted me-2"></i>
                            <span>Školska sala</span>
                        </div>
                        <div class="detail-item mb-3">
                            <i class="fas fa-user text-muted me-2"></i>
                            <span>Nastavnik: Novka Malešević</span>
                        </div>
                    </div>
                    <button class="btn btn-success btn-sm w-100 join-btn" data-activity="odbojka">
                        <i class="fas fa-plus me-2"></i>Pridruži se
                    </button>
                </div>
            </div>
        </div>

        <!-- Art Activities -->
        <div class="col-lg-4 col-md-6 mb-4 activity-card" data-category="art">
            <div class="activity-item h-100 border rounded-lg shadow-sm">
                <div class="activity-header bg-warning text-white p-3 rounded-top">
                    <div class="d-flex align-items-center">
                        <div class="activity-icon me-3">
                            <i class="fas fa-paint-brush fa-2x"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Likovna sekcija</h5>
                            <span class="badge bg-light text-warning">Umjetnost</span>
                        </div>
                    </div>
                </div>
                <div class="activity-body p-3">
                    <p class="mb-3">Izrazite svoju kreativnost kroz crtanje, slikanje i druge likovne tehnike.</p>
                    <div class="activity-details">
                        <div class="detail-item mb-2">
                            <i class="fas fa-clock text-muted me-2"></i>
                            <span>Petak, 14:00-15:30</span>
                        </div>
                        <div class="detail-item mb-2">
                            <i class="fas fa-map-marker-alt text-muted me-2"></i>
                            <span>Kabinet za likovnu kulturu</span>
                        </div>
                        <div class="detail-item mb-3">
                            <i class="fas fa-user text-muted me-2"></i>
                            <span>Nastavnik: Veselinka Popić</span>
                        </div>
                    </div>
                    <button class="btn btn-warning btn-sm w-100 join-btn" data-activity="likovna">
                        <i class="fas fa-plus me-2"></i>Pridruži se
                    </button>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4 activity-card" data-category="art">
            <div class="activity-item h-100 border rounded-lg shadow-sm">
                <div class="activity-header bg-warning text-white p-3 rounded-top">
                    <div class="d-flex align-items-center">
                        <div class="activity-icon me-3">
                            <i class="fas fa-music fa-2x"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Školski hor</h5>
                            <span class="badge bg-light text-warning">Umjetnost</span>
                        </div>
                    </div>
                </div>
                <div class="activity-body p-3">
                    <p class="mb-3">Pjevajte u grupи i nastupajte na školskim priredbama i takmičenjima.</p>
                    <div class="activity-details">
                        <div class="detail-item mb-2">
                            <i class="fas fa-clock text-muted me-2"></i>
                            <span>Četvrtak, 15:00-16:00</span>
                        </div>
                        <div class="detail-item mb-2">
                            <i class="fas fa-map-marker-alt text-muted me-2"></i>
                            <span>Kabinet za muzičku kulturu</span>
                        </div>
                        <div class="detail-item mb-3">
                            <i class="fas fa-user text-muted me-2"></i>
                            <span>Nastavnik: Mehmed Kopčalić</span>
                        </div>
                    </div>
                    <button class="btn btn-warning btn-sm w-100 join-btn" data-activity="hor">
                        <i class="fas fa-plus me-2"></i>Pridruži se
                    </button>
                </div>
            </div>
        </div>

        <!-- Technology Activities -->
        <div class="col-lg-4 col-md-6 mb-4 activity-card" data-category="tech">
            <div class="activity-item h-100 border rounded-lg shadow-sm">
                <div class="activity-header bg-info text-white p-3 rounded-top">
                    <div class="d-flex align-items-center">
                        <div class="activity-icon me-3">
                            <i class="fas fa-code fa-2x"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Programiranje</h5>
                            <span class="badge bg-light text-info">Tehnologija</span>
                        </div>
                    </div>
                </div>
                <div class="activity-body p-3">
                    <p class="mb-3">Naučite osnove programiranja i kreirajte svoje prve aplikacije i igre.</p>
                    <div class="activity-details">
                        <div class="detail-item mb-2">
                            <i class="fas fa-clock text-muted me-2"></i>
                            <span>Srijeda, 15:00-16:30</span>
                        </div>
                        <div class="detail-item mb-2">
                            <i class="fas fa-map-marker-alt text-muted me-2"></i>
                            <span>Kabinet za informatiku</span>
                        </div>
                        <div class="detail-item mb-3">
                            <i class="fas fa-user text-muted me-2"></i>
                            <span>Nastavnik: Nijad Salihović</span>
                        </div>
                    </div>
                    <button class="btn btn-info btn-sm w-100 join-btn" data-activity="programiranje">
                        <i class="fas fa-plus me-2"></i>Pridruži se
                    </button>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4 activity-card" data-category="tech">
            <div class="activity-item h-100 border rounded-lg shadow-sm">
                <div class="activity-header bg-info text-white p-3 rounded-top">
                    <div class="d-flex align-items-center">
                        <div class="activity-icon me-3">
                            <i class="fas fa-robot fa-2x"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Robotika</h5>
                            <span class="badge bg-light text-info">Tehnologija</span>
                        </div>
                    </div>
                </div>
                <div class="activity-body p-3">
                    <p class="mb-3">Konstruišite i programirajte robote, učestvujte u takmičenjima robotike.</p>
                    <div class="activity-details">
                        <div class="detail-item mb-2">
                            <i class="fas fa-clock text-muted me-2"></i>
                            <span>Petak, 15:30-17:00</span>
                        </div>
                        <div class="detail-item mb-2">
                            <i class="fas fa-map-marker-alt text-muted me-2"></i>
                            <span>Kabinet za tehnički odgoj</span>
                        </div>
                        <div class="detail-item mb-3">
                            <i class="fas fa-user text-muted me-2"></i>
                            <span>Nastavnik: Mirza Šibonjić</span>
                        </div>
                    </div>
                    <button class="btn btn-info btn-sm w-100 join-btn" data-activity="robotika">
                        <i class="fas fa-plus me-2"></i>Pridruži se
                    </button>
                </div>
            </div>
        </div>

        <!-- Language Activities -->
        <div class="col-lg-4 col-md-6 mb-4 activity-card" data-category="language">
            <div class="activity-item h-100 border rounded-lg shadow-sm">
                <div class="activity-header bg-primary text-white p-3 rounded-top">
                    <div class="d-flex align-items-center">
                        <div class="activity-icon me-3">
                            <i class="fab fa-language fa-2x"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Engleski klub</h5>
                            <span class="badge bg-light text-primary">Jezici</span>
                        </div>
                    </div>
                </div>
                <div class="activity-body p-3">
                    <p class="mb-3">Poboljšajte znanje engleskog jezika kroz igre, razgovore i zabavne aktivnosti.</p>
                    <div class="activity-details">
                        <div class="detail-item mb-2">
                            <i class="fas fa-clock text-muted me-2"></i>
                            <span>Utorak, 14:30-15:30</span>
                        </div>
                        <div class="detail-item mb-2">
                            <i class="fas fa-map-marker-alt text-muted me-2"></i>
                            <span>Kabinet za engleski jezik</span>
                        </div>
                        <div class="detail-item mb-3">
                            <i class="fas fa-user text-muted me-2"></i>
                            <span>Nastavnik: Elma Begluk</span>
                        </div>
                    </div>
                    <button class="btn btn-primary btn-sm w-100 join-btn" data-activity="engleski">
                        <i class="fas fa-plus me-2"></i>Pridruži se
                    </button>
                </div>
            </div>
        </div>

        <!-- Science Activities -->
        <div class="col-lg-4 col-md-6 mb-4 activity-card" data-category="science">
            <div class="activity-item h-100 border rounded-lg shadow-sm">
                <div class="activity-header bg-secondary text-white p-3 rounded-top">
                    <div class="d-flex align-items-center">
                        <div class="activity-icon me-3">
                            <i class="fas fa-flask fa-2x"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Mladi hemičari</h5>
                            <span class="badge bg-light text-secondary">Nauka</span>
                        </div>
                    </div>
                </div>
                <div class="activity-body p-3">
                    <p class="mb-3">Istražujte svijet hemije kroz zanimljive eksperimente i praktične radove.</p>
                    <div class="activity-details">
                        <div class="detail-item mb-2">
                            <i class="fas fa-clock text-muted me-2"></i>
                            <span>Četvrtak, 14:00-15:30</span>
                        </div>
                        <div class="detail-item mb-2">
                            <i class="fas fa-map-marker-alt text-muted me-2"></i>
                            <span>Kabinet za hemiju</span>
                        </div>
                        <div class="detail-item mb-3">
                            <i class="fas fa-user text-muted me-2"></i>
                            <span>Nastavnik: Ilvana Trumić</span>
                        </div>
                    </div>
                    <button class="btn btn-secondary btn-sm w-100 join-btn" data-activity="hemija">
                        <i class="fas fa-plus me-2"></i>Pridruži se
                    </button>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4 activity-card" data-category="science">
            <div class="activity-item h-100 border rounded-lg shadow-sm">
                <div class="activity-header bg-secondary text-white p-3 rounded-top">
                    <div class="d-flex align-items-center">
                        <div class="activity-icon me-3">
                            <i class="fas fa-seedling fa-2x"></i>
                        </div>
                        <div>
                            <h5 class="mb-1">Ekolozi</h5>
                            <span class="badge bg-light text-secondary">Nauka</span>
                        </div>
                    </div>
                </div>
                <div class="activity-body p-3">
                    <p class="mb-3">Učite o prirodi, zaštiti životne sredine i održivom razvoju kroz praktične aktivnosti.</p>
                    <div class="activity-details">
                        <div class="detail-item mb-2">
                            <i class="fas fa-clock text-muted me-2"></i>
                            <span>Ponedjeljak, 15:00-16:00</span>
                        </div>
                        <div class="detail-item mb-2">
                            <i class="fas fa-map-marker-alt text-muted me-2"></i>
                            <span>Kabinet za biologiju</span>
                        </div>
                        <div class="detail-item mb-3">
                            <i class="fas fa-user text-muted me-2"></i>
                            <span>Nastavnik: Arnela Ahmetović</span>
                        </div>
                    </div>
                    <button class="btn btn-secondary btn-sm w-100 join-btn" data-activity="ekologija">
                        <i class="fas fa-plus me-2"></i>Pridruži se
                    </button>
                </div>
            </div>
        </div>

    </div>

    <!-- Call to Action Section -->
    <div class="row mt-5">
        <div class="col-12">
            <div class="cta-section bg-light rounded-lg p-5 text-center">
                <h3 class="mb-3">Imate ideju za novu sekciju?</h3>
                <p class="lead mb-4">Zainteresovani ste za aktivnost koju trenutno ne nudimo? Kontaktirajte nas i možda ćemo pokrenuti novu sekciju!</p>
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <button class="btn btn-primary btn-lg me-3 mb-2" data-bs-toggle="modal" data-bs-target="#suggestionModal">
                            <i class="fas fa-lightbulb me-2"></i>Predložite aktivnost
                        </button>
                        <a href="mailto:devetaosbrcko@gmail.com" class="btn btn-outline-primary btn-lg mb-2">
                            <i class="fas fa-envelope me-2"></i>Kontaktirajte nas
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<!-- Suggestion Modal -->
<div class="modal fade" id="suggestionModal" tabindex="-1" aria-labelledby="suggestionModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="suggestionModalLabel">Predložite novu aktivnost</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="suggestionForm">
                    <div class="mb-3">
                        <label for="studentName" class="form-label">Vaše ime</label>
                        <input type="text" class="form-control" id="studentName" required>
                    </div>
                    <div class="mb-3">
                        <label for="studentClass" class="form-label">Razred</label>
                        <select class="form-select" id="studentClass" required>
                            <option value="">Izaberite razred</option>
                            <option value="1">1. razred</option>
                            <option value="2">2. razred</option>
                            <option value="3">3. razred</option>
                            <option value="4">4. razred</option>
                            <option value="5">5. razred</option>
                            <option value="6">6. razred</option>
                            <option value="7">7. razred</option>
                            <option value="8">8. razred</option>
                            <option value="9">9. razred</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="activityName" class="form-label">Naziv aktivnosti</label>
                        <input type="text" class="form-control" id="activityName" required>
                    </div>
                    <div class="mb-3">
                        <label for="activityDescription" class="form-label">Opis aktivnosti</label>
                        <textarea class="form-control" id="activityDescription" rows="3" required></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Otkaži</button>
                <button type="button" class="btn btn-primary" onclick="submitSuggestion()">Pošaljite prijedlog</button>
            </div>
        </div>
    </div>
</div>

<!-- Interest Modal -->
<div class="modal fade" id="interestModal" tabindex="-1" aria-labelledby="interestModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="interestModalLabel">Pridružite se aktivnosti</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="interestForm">
                    <div class="mb-3">
                        <label for="interestedStudentName" class="form-label">Ime učenika</label>
                        <input type="text" class="form-control" id="interestedStudentName" required>
                    </div>
                    <div class="mb-3">
                        <label for="interestedStudentClass" class="form-label">Razred</label>
                        <select class="form-select" id="interestedStudentClass" required>
                            <option value="">Izaberite razred</option>
                            <option value="1">1. razred</option>
                            <option value="2">2. razred</option>
                            <option value="3">3. razred</option>
                            <option value="4">4. razred</option>
                            <option value="5">5. razred</option>
                            <option value="6">6. razred</option>
                            <option value="7">7. razred</option>
                            <option value="8">8. razred</option>
                            <option value="9">9. razred</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="parentContact" class="form-label">Kontakt roditelja (telefon ili email)</label>
                        <input type="text" class="form-control" id="parentContact" required>
                    </div>
                    <div class="mb-3">
                        <label for="selectedActivity" class="form-label">Odabrana aktivnost</label>
                        <input type="text" class="form-control" id="selectedActivity" readonly>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Otkaži</button>
                <button type="button" class="btn btn-primary" onclick="submitInterest()">Prijavite se</button>
            </div>
        </div>
    </div>
</div>

<script>
// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const activityCards = document.querySelectorAll('.activity-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            activityCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Join button functionality
    const joinButtons = document.querySelectorAll('.join-btn');
    joinButtons.forEach(button => {
        button.addEventListener('click', function() {
            const activity = this.getAttribute('data-activity');
            const activityName = this.closest('.activity-item').querySelector('h5').textContent;
            document.getElementById('selectedActivity').value = activityName;
            
            const modal = new bootstrap.Modal(document.getElementById('interestModal'));
            modal.show();
        });
    });
});

function submitSuggestion() {
    const name = document.getElementById('studentName').value;
    const studentClass = document.getElementById('studentClass').value;
    const activityName = document.getElementById('activityName').value;
    const description = document.getElementById('activityDescription').value;
    
    if (name && studentClass && activityName && description) {
        // Here you would typically send this data to your server
        alert('Hvala vam na prijedlogu! Kontaktiraćemo vas uskoro.');
        
        // Close modal and reset form
        const modal = bootstrap.Modal.getInstance(document.getElementById('suggestionModal'));
        modal.hide();
        document.getElementById('suggestionForm').reset();
    } else {
        alert('Molimo popunite sva polja.');
    }
}

function submitInterest() {
    const name = document.getElementById('interestedStudentName').value;
    const studentClass = document.getElementById('interestedStudentClass').value;
    const contact = document.getElementById('parentContact').value;
    const activity = document.getElementById('selectedActivity').value;
    
    if (name && studentClass && contact && activity) {
        // Here you would typically send this data to your server
        alert(`Hvala ${name}! Vaša prijava za "${activity}" je uspješno poslana. Kontaktiraćemo vas uskoro.`);
        
        // Close modal and reset form
        const modal = bootstrap.Modal.getInstance(document.getElementById('interestModal'));
        modal.hide();
        document.getElementById('interestForm').reset();
    } else {
        alert('Molimo popunite sva polja.');
    }
}
</script>
