/* ============================================
   HEALTHHUB — Main Application Logic
   Navigation, Theme, Scroll, Content Rendering
   ============================================ */

// ─────── PRELOADER ───────
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 1500);
});

// ─────── THEME TOGGLE ───────
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('healthhub-theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('healthhub-theme', next);
    themeToggle.textContent = next === 'dark' ? '🌙' : '☀️';
});

// ─────── NAVBAR SCROLL EFFECT ───────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ─────── ACTIVE NAV LINK ON SCROLL ───────
const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.nav-link[data-section]');

function setActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
}
window.addEventListener('scroll', setActiveNav);

// ─────── HAMBURGER MENU ───────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
});

// Close mobile nav on link click
mobileNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ─────── BACK TO TOP ───────
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─────── SCROLL ANIMATIONS ───────
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
});

// ─────── HERO STAT COUNTERS ───────
function animateCounters() {
    document.querySelectorAll('.hero-stat-value[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'));
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target + '+';
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current) + '+';
            }
        }, 50);
    });
}

// Counter observer
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) heroObserver.observe(heroStats);

// ─────── CALCULATOR CARD CLICKS ───────
document.querySelectorAll('.calc-card[data-calc]').forEach(card => {
    card.addEventListener('click', () => {
        const calcType = card.getAttribute('data-calc');
        // Close all panels
        document.querySelectorAll('.calculator-panel').forEach(p => p.classList.remove('active'));
        // Open target panel
        const panel = document.getElementById(`panel-${calcType}`);
        if (panel) {
            panel.classList.add('active');
            panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Close panel buttons
document.querySelectorAll('[data-close-panel]').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.calculator-panel').classList.remove('active');
    });
});

// Body fat gender toggle (show/hide hip field)
document.querySelectorAll('input[name="bf-gender"]').forEach(radio => {
    radio.addEventListener('change', () => {
        document.getElementById('bf-hip-group').style.display =
            document.getElementById('bf-female').checked ? 'block' : 'none';
    });
});

// ─────── TOAST SYSTEM ───────
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const icons = { success: '✅', warning: '⚠️', error: '❌', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span class="toast-message">${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ─────── RENDER EXERCISES ───────
function renderExercises(filter = 'all') {
    const grid = document.getElementById('exercise-grid');
    const filtered = filter === 'all' ? HEALTH_DATA.exercises : HEALTH_DATA.exercises.filter(e => e.category === filter);

    grid.innerHTML = filtered.map((ex, i) => `
        <div class="exercise-card animate-on-scroll hover-lift" onclick="openExerciseModal(${HEALTH_DATA.exercises.indexOf(ex)})" style="cursor:pointer">
            <div class="exercise-image">${ex.emoji}</div>
            <div class="exercise-body">
                <div class="exercise-meta">
                    <span class="exercise-difficulty difficulty-${ex.difficulty}">${ex.difficulty}</span>
                    <span class="exercise-muscle">${ex.muscle}</span>
                </div>
                <h4 class="exercise-title">${ex.name}</h4>
                <div class="exercise-reps">
                    <span>📋 ${ex.sets}</span>
                    <span>🔄 ${ex.reps}</span>
                </div>
            </div>
        </div>
    `).join('');

    // Re-observe new elements
    grid.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('visible');
    });
}

// Exercise filters
document.getElementById('exercise-filters').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('#exercise-filters .filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderExercises(e.target.dataset.filter);
    }
});

// Exercise Modal
function openExerciseModal(index) {
    const ex = HEALTH_DATA.exercises[index];
    document.getElementById('exercise-modal-title').textContent = `${ex.emoji} ${ex.name}`;
    document.getElementById('exercise-modal-body').innerHTML = `
        <div style="margin-bottom:16px">
            <span class="exercise-difficulty difficulty-${ex.difficulty}" style="margin-right:8px">${ex.difficulty}</span>
            <span class="tag tag-teal">${ex.muscle}</span>
        </div>
        <div style="display:flex;gap:16px;margin-bottom:20px">
            <div class="result-box" style="flex:1;padding:12px"><strong>${ex.sets}</strong><br><span style="font-size:12px;color:var(--text-muted)">Sets</span></div>
            <div class="result-box" style="flex:1;padding:12px"><strong>${ex.reps}</strong><br><span style="font-size:12px;color:var(--text-muted)">Reps</span></div>
        </div>
        <h4 style="margin-bottom:12px;font-family:var(--font-heading)">📋 Instructions</h4>
        <ol style="padding-left:20px">
            ${ex.instructions.map(step => `<li style="padding:6px 0;color:var(--text-secondary);font-size:14px">${step}</li>`).join('')}
        </ol>
    `;
    document.getElementById('exerciseOverlay').classList.add('active');
    document.getElementById('exerciseModal').classList.add('active');
}

function closeExerciseModal() {
    document.getElementById('exerciseOverlay').classList.remove('active');
    document.getElementById('exerciseModal').classList.remove('active');
}
document.getElementById('exerciseOverlay').addEventListener('click', closeExerciseModal);

// ─────── RENDER WORKOUT PLANS ───────
function renderWorkoutPlan(planKey) {
    const plan = HEALTH_DATA.workoutPlans[planKey];
    const container = document.getElementById('workout-plans');
    container.innerHTML = `
        <div class="workout-plan">
            <div class="workout-plan-title">${plan.emoji} ${plan.name}</div>
            ${plan.days.map(d => `
                <div class="workout-day">
                    <div class="workout-day-badge">${d.day}</div>
                    <div class="workout-day-name">${d.focus}</div>
                    <div class="workout-day-exercises">${d.exercises}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Workout tabs
document.getElementById('workout-tabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
        document.querySelectorAll('#workout-tabs .tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderWorkoutPlan(e.target.dataset.tab);
    }
});

// ─────── RENDER NUTRITION ───────
function renderFoods(category = 'proteins') {
    const grid = document.getElementById('food-grid');
    const foods = HEALTH_DATA.foods[category] || [];
    grid.innerHTML = foods.map(f => `
        <div class="food-card">
            <div class="food-emoji">${f.emoji}</div>
            <div class="food-info">
                <div class="food-name">${f.name}</div>
                <div class="food-nutrients">${f.nutrients}</div>
            </div>
            <div class="food-calories">${f.calories}</div>
        </div>
    `).join('');
}

// Food tabs
document.getElementById('food-tabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
        document.querySelectorAll('#food-tabs .tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderFoods(e.target.dataset.tab);
    }
});

function renderSuperfoods() {
    document.getElementById('superfood-grid').innerHTML = HEALTH_DATA.superfoods.map(s => `
        <div class="superfood-item hover-lift">
            <div class="superfood-emoji">${s.emoji}</div>
            <div class="superfood-name">${s.name}</div>
            <div class="superfood-benefit">${s.benefit}</div>
        </div>
    `).join('');
}

function renderMealPlan() {
    document.getElementById('meal-plan').innerHTML = HEALTH_DATA.mealPlan.map(m => `
        <div class="meal-card">
            <div class="meal-time">${m.emoji} ${m.time}</div>
            <ul class="meal-items">
                ${m.items.map(item => `<li>• ${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// ─────── RENDER MENTAL HEALTH ───────
function renderMentalHealth() {
    // Tips
    document.getElementById('mental-tips-grid').innerHTML = HEALTH_DATA.mentalHealthTips.map((tip, i) => `
        <div class="tip-card animate-on-scroll delay-${Math.min(i, 5)}">
            <div class="tip-number">${tip.emoji}</div>
            <div>
                <strong style="display:block;margin-bottom:4px">${tip.title}</strong>
                <span class="card-text">${tip.text}</span>
            </div>
        </div>
    `).join('');

    // Warning signs
    document.getElementById('warning-signs-list').innerHTML = HEALTH_DATA.stressWarnings.map(w => `
        <li style="padding:8px 0;border-bottom:var(--border-subtle);font-size:var(--fs-sm);color:var(--text-secondary);display:flex;align-items:flex-start;gap:8px">
            <span style="color:var(--accent-amber)">⚠️</span> ${w}
        </li>
    `).join('');

    // Helplines
    document.getElementById('helpline-grid').innerHTML = HEALTH_DATA.helplines.map(h => `
        <div class="helpline-card">
            <div class="helpline-icon">${h.emoji}</div>
            <div>
                <div class="helpline-name">${h.name}</div>
                <div class="helpline-number">${h.number}</div>
            </div>
        </div>
    `).join('');
}

// Affirmation
function refreshAffirmation() {
    const affirmations = HEALTH_DATA.affirmations;
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.getElementById('affirmation-text').textContent = `"${random}"`;
}

// Set random affirmation on load
refreshAffirmation();

// ─────── BREATHING EXERCISE ───────
let breathingActive = false;
let breathingInterval = null;
let breathingTimer = 0;

function toggleBreathing() {
    const circle = document.getElementById('breathing-circle');
    const text = document.getElementById('breathing-text');
    const btn = document.getElementById('breathing-btn');
    const timerEl = document.getElementById('breathing-timer');

    if (breathingActive) {
        // Stop
        breathingActive = false;
        clearInterval(breathingInterval);
        circle.className = 'breathing-circle';
        text.textContent = 'Start';
        btn.textContent = '▶ Start Breathing';
        breathingTimer = 0;
        timerEl.textContent = '0:00';
    } else {
        // Start
        breathingActive = true;
        btn.textContent = '⏹ Stop';
        breathingTimer = 0;

        function breatheCycle() {
            // Inhale - 4 seconds
            circle.className = 'breathing-circle inhale';
            text.textContent = 'Breathe In';

            setTimeout(() => {
                if (!breathingActive) return;
                // Hold - 4 seconds
                text.textContent = 'Hold';
            }, 4000);

            setTimeout(() => {
                if (!breathingActive) return;
                // Exhale - 4 seconds
                circle.className = 'breathing-circle exhale';
                text.textContent = 'Breathe Out';
            }, 8000);
        }

        breatheCycle();
        // Repeat cycle every 12 seconds
        breathingInterval = setInterval(() => {
            if (!breathingActive) return;
            breatheCycle();
        }, 12000);

        // Timer
        setInterval(() => {
            if (!breathingActive) return;
            breathingTimer++;
            const minutes = Math.floor(breathingTimer / 60);
            const seconds = breathingTimer % 60;
            timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }
}

// ─────── RENDER FIRST AID ───────
function renderFirstAid() {
    const container = document.getElementById('first-aid-list');
    container.innerHTML = HEALTH_DATA.firstAid.map((fa, i) => `
        <div class="accordion-item" data-first-aid>
            <div class="accordion-header" onclick="toggleAccordion(this)">
                <div class="accordion-icon" style="background:rgba(244,63,94,0.15);color:var(--accent-rose)">${fa.emoji}</div>
                <div class="accordion-title">${fa.title}</div>
                <div class="accordion-arrow">▼</div>
            </div>
            <div class="accordion-body">
                <div class="accordion-content">
                    <h4 style="margin-bottom:12px;font-family:var(--font-heading)">📋 Steps:</h4>
                    <ol style="padding-left:20px;margin-bottom:20px">
                        ${fa.steps.map(step => `<li style="padding:6px 0;color:var(--text-secondary);font-size:14px">${step}</li>`).join('')}
                    </ol>
                    <div class="do-dont">
                        <div class="do-list">
                            <h4 style="margin-bottom:8px">✅ Do's</h4>
                            <ul>${fa.dos.map(d => `<li>${d}</li>`).join('')}</ul>
                        </div>
                        <div class="dont-list">
                            <h4 style="margin-bottom:8px">❌ Don'ts</h4>
                            <ul>${fa.donts.map(d => `<li>${d}</li>`).join('')}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleAccordion(header) {
    const item = header.parentElement;
    const wasActive = item.classList.contains('active');

    // Close all in same group
    item.parentElement.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

    if (!wasActive) {
        item.classList.add('active');
    }
}

// First Aid Search
document.getElementById('first-aid-search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('[data-first-aid]').forEach(item => {
        const title = item.querySelector('.accordion-title').textContent.toLowerCase();
        const content = item.querySelector('.accordion-content').textContent.toLowerCase();
        item.style.display = (title.includes(query) || content.includes(query)) ? '' : 'none';
    });
});

// ─────── RENDER DISEASES ───────
function renderDiseases() {
    document.getElementById('disease-grid').innerHTML = HEALTH_DATA.diseases.map(d => `
        <div class="disease-card animate-on-scroll">
            <div class="disease-header">
                <div class="disease-icon">${d.emoji}</div>
                <div>
                    <div class="disease-name">${d.name}</div>
                    <div style="font-size:var(--fs-sm);color:var(--text-secondary)">${d.overview.substring(0, 80)}...</div>
                </div>
            </div>
            <div class="disease-body">
                <h5 style="font-size:var(--fs-sm);color:var(--text-muted);margin-bottom:8px">Common Symptoms:</h5>
                <div class="disease-symptoms">
                    ${d.symptoms.map(s => `<span class="symptom-tag">${s}</span>`).join('')}
                </div>
                <h5 style="font-size:var(--fs-sm);color:var(--text-muted);margin-bottom:8px">Prevention:</h5>
                <ul style="padding-left:0">
                    ${d.prevention.slice(0, 3).map(p => `<li style="padding:4px 0;font-size:var(--fs-sm);color:var(--text-secondary);display:flex;gap:6px"><span style="color:var(--accent-emerald)">•</span>${p}</li>`).join('')}
                </ul>
                <div style="margin-top:12px;padding:8px 12px;background:rgba(245,158,11,0.08);border-radius:var(--radius-md);font-size:var(--fs-xs);color:var(--accent-amber)">
                    🩺 <strong>See a doctor:</strong> ${d.seeDoctor}
                </div>
            </div>
        </div>
    `).join('');
}

// Symptom Checker
function renderSymptomChecker() {
    const options = HEALTH_DATA.symptomChecker.steps[0].options;
    document.getElementById('symptom-options').innerHTML = options.map(opt => `
        <div class="symptom-option" onclick="selectSymptom('${opt.next}')">${opt.text}</div>
    `).join('');
}

function selectSymptom(key) {
    const result = HEALTH_DATA.symptomChecker.results[key];
    document.getElementById('symptom-step-0').classList.remove('active');
    document.getElementById('symptom-result').classList.add('active');

    document.getElementById('symptom-result-title').textContent = result.title;
    document.getElementById('symptom-result-conditions').innerHTML = result.conditions.map(c =>
        `<span class="tag tag-amber" style="margin:4px">${c}</span>`
    ).join('');

    const urgencyColors = { warning: 'var(--accent-amber)', danger: 'var(--accent-rose)', info: 'var(--accent-sky)' };
    document.getElementById('symptom-result-advice').innerHTML = `
        <h4 style="color:${urgencyColors[result.urgency]}">💡 Advice</h4>
        <p style="font-size:var(--fs-sm);color:var(--text-secondary);margin-top:8px">${result.advice}</p>
    `;
}

function resetSymptomChecker() {
    document.getElementById('symptom-step-0').classList.add('active');
    document.getElementById('symptom-result').classList.remove('active');
}

// ─────── RENDER SLEEP ───────
function renderSleep() {
    // Chart
    document.getElementById('sleep-chart').innerHTML = HEALTH_DATA.sleepHours.map(s => {
        const maxHour = parseInt(s.hours.split('-')[1] || s.hours);
        const height = (maxHour / 17) * 200;
        return `
            <div class="sleep-bar">
                <div class="sleep-bar-value">${s.hours}h</div>
                <div class="sleep-bar-fill" style="height:${height}px"></div>
                <div class="sleep-bar-label">${s.label}<br><span style="font-size:10px">${s.age}</span></div>
            </div>
        `;
    }).join('');

    // Tips
    document.getElementById('sleep-tips-grid').innerHTML = HEALTH_DATA.sleepTips.map((t, i) => `
        <div class="tip-card animate-on-scroll">
            <div class="tip-number">${t.emoji}</div>
            <div class="card-text">${t.tip}</div>
        </div>
    `).join('');

    // Checklist
    document.getElementById('sleep-checklist').innerHTML = HEALTH_DATA.sleepChecklist.map((item, i) => `
        <div class="checklist-item">
            <div class="checklist-checkbox" id="check-${i}" onclick="toggleCheck(this, ${i})"></div>
            <div class="checklist-text" id="check-text-${i}">${item}</div>
        </div>
    `).join('');
}

function toggleCheck(el, index) {
    el.classList.toggle('checked');
    document.getElementById(`check-text-${index}`).classList.toggle('checked');
}

// ─────── RENDER YOGA ───────
function renderYoga() {
    document.getElementById('yoga-grid').innerHTML = HEALTH_DATA.yogaPoses.map((pose, i) => `
        <div class="yoga-card animate-on-scroll hover-lift" style="cursor:pointer" onclick="openYogaModal(${i})">
            <div class="yoga-pose-icon">${pose.emoji}</div>
            <div class="yoga-pose-name">${pose.name}</div>
            <div class="yoga-pose-sanskrit">${pose.sanskrit}</div>
            <div class="yoga-pose-level">
                <span class="exercise-difficulty difficulty-${pose.difficulty}">${pose.difficulty}</span>
            </div>
            <div style="font-size:var(--fs-xs);color:var(--text-muted)">⏱ ${pose.duration}</div>
        </div>
    `).join('');

    // Meditation types
    document.getElementById('meditation-types-grid').innerHTML = HEALTH_DATA.meditationTypes.map(mt => `
        <div class="card">
            <h4 class="card-title">🧘 ${mt.name}</h4>
            <p class="card-text">${mt.description}</p>
            <div style="margin-top:8px;font-size:var(--fs-xs);color:var(--accent-violet)">⏱ ${mt.duration}</div>
        </div>
    `).join('');
}

function openYogaModal(index) {
    const pose = HEALTH_DATA.yogaPoses[index];
    document.getElementById('yoga-modal-title').textContent = `${pose.emoji} ${pose.name} (${pose.sanskrit})`;
    document.getElementById('yoga-modal-body').innerHTML = `
        <div style="margin-bottom:16px">
            <span class="exercise-difficulty difficulty-${pose.difficulty}">${pose.difficulty}</span>
            <span style="margin-left:8px;font-size:var(--fs-sm);color:var(--text-muted)">⏱ ${pose.duration}</span>
        </div>
        <h4 style="margin-bottom:12px;font-family:var(--font-heading);color:var(--accent-emerald)">✅ Benefits</h4>
        <ul style="margin-bottom:20px">
            ${pose.benefits.map(b => `<li style="padding:4px 0;font-size:var(--fs-sm);color:var(--text-secondary);display:flex;gap:6px"><span style="color:var(--accent-emerald)">•</span>${b}</li>`).join('')}
        </ul>
        <h4 style="margin-bottom:12px;font-family:var(--font-heading)">📋 Instructions</h4>
        <ol style="padding-left:20px">
            ${pose.instructions.map(step => `<li style="padding:6px 0;color:var(--text-secondary);font-size:14px">${step}</li>`).join('')}
        </ol>
    `;
    document.getElementById('yogaOverlay').classList.add('active');
    document.getElementById('yogaModal').classList.add('active');
}

function closeYogaModal() {
    document.getElementById('yogaOverlay').classList.remove('active');
    document.getElementById('yogaModal').classList.remove('active');
}
document.getElementById('yogaOverlay').addEventListener('click', closeYogaModal);

// ─────── MEDITATION TIMER ───────
let meditationActive = false;
let meditationInterval = null;
let meditationSeconds = 5 * 60;
let meditationTotal = 5 * 60;

// Preset buttons
document.getElementById('meditation-presets').addEventListener('click', (e) => {
    if (e.target.classList.contains('meditation-preset')) {
        if (meditationActive) return;
        document.querySelectorAll('.meditation-preset').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        const minutes = parseInt(e.target.dataset.minutes);
        meditationSeconds = minutes * 60;
        meditationTotal = minutes * 60;
        updateMeditationDisplay();
    }
});

function updateMeditationDisplay() {
    const min = Math.floor(meditationSeconds / 60);
    const sec = meditationSeconds % 60;
    document.getElementById('meditation-time').textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

function toggleMeditation() {
    const btn = document.getElementById('meditation-start');
    const label = document.getElementById('meditation-label');

    if (meditationActive) {
        // Pause
        meditationActive = false;
        clearInterval(meditationInterval);
        btn.textContent = '▶ Resume';
        label.textContent = 'Paused';
    } else {
        // Start / Resume
        meditationActive = true;
        btn.textContent = '⏸ Pause';
        label.textContent = 'Meditating...';

        meditationInterval = setInterval(() => {
            meditationSeconds--;
            updateMeditationDisplay();

            if (meditationSeconds <= 0) {
                clearInterval(meditationInterval);
                meditationActive = false;
                btn.textContent = '▶ Start';
                label.textContent = 'Complete! 🎉';
                showToast('Meditation session complete! Great job! 🧘', 'success');
            }
        }, 1000);
    }
}

function resetMeditation() {
    meditationActive = false;
    clearInterval(meditationInterval);
    const activePreset = document.querySelector('.meditation-preset.active');
    meditationSeconds = parseInt(activePreset?.dataset.minutes || 5) * 60;
    meditationTotal = meditationSeconds;
    updateMeditationDisplay();
    document.getElementById('meditation-start').textContent = '▶ Start';
    document.getElementById('meditation-label').textContent = 'Ready';
}

// ─────── RENDER BLOG ───────
function renderBlog() {
    document.getElementById('blog-grid').innerHTML = HEALTH_DATA.articles.map((article, i) => `
        <div class="blog-card animate-on-scroll" onclick="openArticleModal(${i})">
            <div class="blog-image">${article.emoji}</div>
            <div class="blog-body">
                <div class="blog-meta">
                    <span class="blog-category tag tag-${article.categoryColor}">${article.category}</span>
                    <span class="blog-read-time">${article.readTime}</span>
                </div>
                <h4 class="blog-title">${article.title}</h4>
                <p class="blog-excerpt">${article.excerpt}</p>
            </div>
        </div>
    `).join('');
}

function openArticleModal(index) {
    const article = HEALTH_DATA.articles[index];
    document.getElementById('article-modal-title').textContent = article.title;
    document.getElementById('article-modal-body').innerHTML = `
        <div style="margin-bottom:16px">
            <span class="blog-category tag tag-${article.categoryColor}">${article.category}</span>
            <span style="margin-left:8px;font-size:var(--fs-sm);color:var(--text-muted)">${article.readTime}</span>
        </div>
        <div style="line-height:1.8;color:var(--text-secondary);font-size:var(--fs-sm)">${article.content}</div>
    `;
    document.getElementById('articleOverlay').classList.add('active');
    document.getElementById('articleModal').classList.add('active');
}

function closeArticleModal() {
    document.getElementById('articleOverlay').classList.remove('active');
    document.getElementById('articleModal').classList.remove('active');
}
document.getElementById('articleOverlay').addEventListener('click', closeArticleModal);

// ─────── RENDER DASHBOARD ───────
function updateDashboard() {
    const stored = JSON.parse(localStorage.getItem('healthhub-data') || '{}');
    document.getElementById('dash-bmi').textContent = stored.lastBMI || '—';
    document.getElementById('dash-weight').textContent = stored.lastWeight ? stored.lastWeight + ' kg' : '—';
    document.getElementById('dash-water').textContent = stored.lastWater || '—';
    document.getElementById('dash-calories').textContent = stored.lastCalories || '—';

    // Draw BMI history chart
    drawBMIChart(stored.bmiHistory || []);
}

function drawBMIChart(history) {
    const canvas = document.getElementById('bmi-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width - 48;
    canvas.height = 300;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (history.length < 2) {
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-muted').trim();
        ctx.font = '14px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('Calculate your BMI at least twice to see a trend chart', canvas.width / 2, 150);
        return;
    }

    const padding = 50;
    const w = canvas.width - padding * 2;
    const h = canvas.height - padding * 2;

    const minBMI = Math.min(...history.map(h => h.value)) - 2;
    const maxBMI = Math.max(...history.map(h => h.value)) + 2;

    // Grid lines
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding + (h / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();

        const val = (maxBMI - (maxBMI - minBMI) * (i / 4)).toFixed(1);
        ctx.fillStyle = 'rgba(148, 163, 184, 0.5)';
        ctx.font = '11px JetBrains Mono';
        ctx.textAlign = 'right';
        ctx.fillText(val, padding - 8, y + 4);
    }

    // Line
    ctx.beginPath();
    ctx.strokeStyle = '#14b8a6';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';

    history.forEach((point, i) => {
        const x = padding + (w / (history.length - 1)) * i;
        const y = padding + h - ((point.value - minBMI) / (maxBMI - minBMI)) * h;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Dots
    history.forEach((point, i) => {
        const x = padding + (w / (history.length - 1)) * i;
        const y = padding + h - ((point.value - minBMI) / (maxBMI - minBMI)) * h;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#14b8a6';
        ctx.fill();
        ctx.strokeStyle = '#0a0f1a';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Date label
        ctx.fillStyle = 'rgba(148, 163, 184, 0.5)';
        ctx.font = '10px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(point.date, x, canvas.height - 10);
    });
}

// ─────── INITIALIZE ───────
document.addEventListener('DOMContentLoaded', () => {
    renderExercises();
    renderWorkoutPlan('beginner');
    renderFoods('proteins');
    renderSuperfoods();
    renderMealPlan();
    renderMentalHealth();
    renderFirstAid();
    renderDiseases();
    renderSymptomChecker();
    renderSleep();
    renderYoga();
    renderBlog();
    updateDashboard();

    // Re-observe all animate-on-scroll elements
    setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            scrollObserver.observe(el);
        });
    }, 100);
});

// Close modals on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeArticleModal();
        closeYogaModal();
        closeExerciseModal();
    }
});

// ─────── SPA NAVIGATION ───────
function navigateTo(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(sec => {
        sec.style.display = 'none';
    });
    // Show target section
    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = 'block';
        window.scrollTo(0, 0); // Scroll to top
    }
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });

    // On mobile, close the menu
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

// Set initial state (show hero, hide others)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section').forEach(sec => {
        if (sec.id !== 'hero') {
            sec.style.display = 'none';
        }
    });
});

// ─────── I18N LOCALIZATION ───────
const translations = {
    en: {
        nav_home: "Home", nav_tools: "Tools", nav_exercise: "Exercise", nav_nutrition: "Nutrition",
        nav_mind: "Mind", nav_firstaid: "First Aid", nav_diseases: "Diseases", nav_sleep: "Sleep",
        nav_yoga: "Yoga", nav_blog: "Blog",
        hero_badge: "💚 Your Health Companion",
        hero_title_1: "Your Complete",
        hero_title_2: "Health & Wellness",
        hero_title_3: "Companion",
        hero_desc: "Track your BMI, plan workouts, learn nutrition, practice mindfulness, and stay informed about health — all in one beautiful platform.",
        hero_btn_1: "🧮 Explore Tools",
        hero_btn_2: "🥗 Health Tips",
        stat_1: "Health Tools", stat_2: "Wellness Tips", stat_3: "Categories"
    },
    hi: {
        nav_home: "मुख्य पृष्ठ", nav_tools: "उपकरण", nav_exercise: "व्यायाम", nav_nutrition: "पोषण",
        nav_mind: "मन", nav_firstaid: "प्राथमिक चिकित्सा", nav_diseases: "रोग", nav_sleep: "नींद",
        nav_yoga: "योग", nav_blog: "ब्लॉग",
        hero_badge: "💚 आपका स्वास्थ्य साथी",
        hero_title_1: "आपका संपूर्ण",
        hero_title_2: "स्वास्थ्य और कल्याण",
        hero_title_3: "साथी",
        hero_desc: "अपने बीएमआई को ट्रैक करें, वर्कआउट की योजना बनाएं, पोषण सीखें, दिमागीपन का अभ्यास करें, और स्वास्थ्य के बारे में सूचित रहें - सब कुछ एक सुंदर मंच में।",
        hero_btn_1: "🧮 उपकरण खोजें",
        hero_btn_2: "🥗 स्वास्थ्य युक्तियाँ",
        stat_1: "स्वास्थ्य उपकरण", stat_2: "कल्याण युक्तियाँ", stat_3: "श्रेणियाँ"
    },
    bn: {
        nav_home: "হোম", nav_tools: "সরঞ্জাম", nav_exercise: "ব্যায়াম", nav_nutrition: "পুষ্টি",
        nav_mind: "মন", nav_firstaid: "প্রাথমিক চিকিৎসা", nav_diseases: "রোগ", nav_sleep: "ঘুম",
        nav_yoga: "যোগব্যায়াম", nav_blog: "ব্লগ",
        hero_badge: "💚 আপনার স্বাস্থ্য সঙ্গী",
        hero_title_1: "আপনার সম্পূর্ণ",
        hero_title_2: "স্বাস্থ্য এবং সুস্থতা",
        hero_title_3: "সঙ্গী",
        hero_desc: "আপনার বিএমআই ট্র্যাক করুন, ওয়ার্কআউটের পরিকল্পনা করুন, পুষ্টি শিখুন, মননশীলতার অনুশীলন করুন এবং স্বাস্থ্য সম্পর্কে অবগত থাকুন - সবই এক সুন্দর প্ল্যাটফর্মে।",
        hero_btn_1: "🧮 সরঞ্জাম অন্বেষণ",
        hero_btn_2: "🥗 স্বাস্থ্য টিপস",
        stat_1: "স্বাস্থ্য সরঞ্জাম", stat_2: "সুস্থতা টিপস", stat_3: "বিভাগ"
    },
    mr: {
        nav_home: "मुख्यपृष्ठ", nav_tools: "साधने", nav_exercise: "व्यायाम", nav_nutrition: "पोषण",
        nav_mind: "मन", nav_firstaid: "प्रथमोपचार", nav_diseases: "रोग", nav_sleep: "झोप",
        nav_yoga: "योग", nav_blog: "ब्लॉग",
        hero_badge: "💚 तुमचा आरोग्य साथी",
        hero_title_1: "तुमचा संपूर्ण",
        hero_title_2: "आरोग्य आणि कल्याण",
        hero_title_3: "साथी",
        hero_desc: "तुमच्या बीएमआयचा मागोवा घ्या, वर्कआउट्सची योजना करा, पोषण शिका, सजगतेचा सराव करा आणि आरोग्याबद्दल माहिती ठेवा — सर्व एकाच सुंदर प्लॅटफॉर्मवर.",
        hero_btn_1: "🧮 साधने एक्सप्लोर करा",
        hero_btn_2: "🥗 आरोग्य टिप्स",
        stat_1: "आरोग्य साधने", stat_2: "कल्याण टिप्स", stat_3: "श्रेण्या"
    },
    ta: {
        nav_home: "முகப்பு", nav_tools: "கருவிகள்", nav_exercise: "உடற்பயிற்சி", nav_nutrition: "ஊட்டச்சத்து",
        nav_mind: "மனம்", nav_firstaid: "முதலுதவி", nav_diseases: "நோய்கள்", nav_sleep: "தூக்கம்",
        nav_yoga: "யோகா", nav_blog: "வலைப்பதிவு",
        hero_badge: "💚 உங்கள் ஆரோக்கிய தோழன்",
        hero_title_1: "உங்கள் முழுமையான",
        hero_title_2: "ஆரோக்கியம் மற்றும் நல்வாழ்வு",
        hero_title_3: "தோழன்",
        hero_desc: "உங்கள் பிஎம்ஐயைக் கண்காணிக்கவும், உடற்பயிற்சிகளைத் திட்டமிடவும், ஊட்டச்சத்தைக் கற்றுக்கொள்ளவும், நினைவாற்றலைப் பயிற்சி செய்யவும், ஆரோக்கியம் குறித்துத் தெரிந்துகொள்ளவும் — அனைத்தும் ஒரே அழகிய தளத்தில்.",
        hero_btn_1: "🧮 கருவிகளை ஆராயுங்கள்",
        hero_btn_2: "🥗 ஆரோக்கிய குறிப்புகள்",
        stat_1: "சுகாதார கருவிகள்", stat_2: "நல்வாழ்வு குறிப்புகள்", stat_3: "வகைகள்"
    }
};

function applyLanguage(lang) {
    const dict = translations[lang] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });
    localStorage.setItem('healthhub_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('healthhub_lang') || 'en';
    const switcher = document.getElementById('langSwitcher');
    if (switcher) {
        switcher.value = savedLang;
        switcher.addEventListener('change', (e) => {
            applyLanguage(e.target.value);
        });
    }
    applyLanguage(savedLang);
});
