/* ============================================
   HEALTHHUB — All Calculator Logic
   BMI, Calorie, Water, Heart Rate, Body Fat, Ideal Weight
   ============================================ */

// ─────── UTILITY ───────
function saveToDashboard(key, value) {
    const stored = JSON.parse(localStorage.getItem('healthhub-data') || '{}');
    stored[key] = value;
    localStorage.setItem('healthhub-data', JSON.stringify(stored));
    updateDashboard();
}

// ─────── 1. BMI CALCULATOR ───────
function calculateBMI() {
    const height = parseFloat(document.getElementById('bmi-height').value);
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    const age = parseInt(document.getElementById('bmi-age').value);

    if (!height || !weight || !age) {
        showToast('Please fill in all fields', 'warning');
        return;
    }

    if (height < 50 || height > 300 || weight < 10 || weight > 500) {
        showToast('Please enter valid height and weight values', 'error');
        return;
    }

    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    const bmiRounded = bmi.toFixed(1);

    // Update gauge
    const gaugeFill = document.getElementById('bmi-gauge-fill');
    // Map BMI 10-40 to 0-264 (circumference)
    const normalizedBMI = Math.min(Math.max(bmi, 10), 40);
    const offset = 264 - ((normalizedBMI - 10) / 30) * 264;
    gaugeFill.style.strokeDashoffset = offset;

    // Set color & category
    let category, categoryClass, color, tips;
    if (bmi < 18.5) {
        category = '🔵 Underweight';
        categoryClass = 'info';
        color = 'var(--accent-sky)';
        tips = [
            'Increase calorie intake with nutrient-dense foods',
            'Eat more frequent, smaller meals throughout the day',
            'Include protein-rich foods (eggs, paneer, lentils, chicken)',
            'Strength training can help build healthy muscle mass',
            'Consult a nutritionist for a personalized weight gain plan'
        ];
    } else if (bmi < 25) {
        category = '🟢 Normal Weight';
        categoryClass = 'healthy';
        color = 'var(--accent-emerald)';
        tips = [
            'Great job! Maintain your current healthy lifestyle',
            'Continue regular exercise (150 min/week moderate activity)',
            'Eat a balanced diet rich in fruits, vegetables, and whole grains',
            'Stay hydrated — aim for 8+ glasses of water daily',
            'Get regular health check-ups for continued wellness'
        ];
    } else if (bmi < 30) {
        category = '🟡 Overweight';
        categoryClass = 'warning';
        color = 'var(--accent-amber)';
        tips = [
            'Create a modest calorie deficit (500 cal/day for 0.5kg/week loss)',
            'Increase physical activity — aim for 200+ min/week',
            'Reduce refined carbs and sugary drinks',
            'Practice portion control — use smaller plates',
            'Monitor your progress weekly, not daily'
        ];
    } else if (bmi < 35) {
        category = '🟠 Obese (Class I)';
        categoryClass = 'danger';
        color = 'var(--accent-orange)';
        tips = [
            'Consult a doctor or dietitian for a structured plan',
            'Start with low-impact exercises (walking, swimming, cycling)',
            'Focus on whole foods and eliminate processed foods',
            'Set realistic goals — lose 5-10% of body weight first',
            'Consider behavioral changes and stress management'
        ];
    } else {
        category = '🔴 Obese (Class II+)';
        categoryClass = 'danger';
        color = 'var(--accent-rose)';
        tips = [
            'Seek professional medical guidance immediately',
            'A supervised weight management program is recommended',
            'Start with gentle movement — even 10 min walks help',
            'Address underlying health conditions with your doctor',
            'Focus on gradual, sustainable changes over crash diets'
        ];
    }

    gaugeFill.style.stroke = color;
    document.getElementById('bmi-value').textContent = bmiRounded;
    document.getElementById('bmi-value').style.color = color;

    const categoryEl = document.getElementById('bmi-category');
    categoryEl.style.display = 'inline-flex';
    categoryEl.className = `result-category ${categoryClass}`;
    categoryEl.textContent = category;

    // Tips
    const tipsEl = document.getElementById('bmi-tips');
    tipsEl.style.display = 'block';
    document.getElementById('bmi-tips-list').innerHTML = tips.map(t => `<li>${t}</li>`).join('');

    // Ideal weight range for reference
    const idealLow = (18.5 * heightM * heightM).toFixed(1);
    const idealHigh = (24.9 * heightM * heightM).toFixed(1);
    document.getElementById('bmi-tips-list').innerHTML += `<li><strong>Your ideal weight range: ${idealLow} - ${idealHigh} kg</strong></li>`;

    // Save to dashboard
    saveToDashboard('lastBMI', bmiRounded);
    saveToDashboard('lastWeight', weight);

    // Save to history
    const stored = JSON.parse(localStorage.getItem('healthhub-data') || '{}');
    if (!stored.bmiHistory) stored.bmiHistory = [];
    const today = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
    stored.bmiHistory.push({ value: parseFloat(bmiRounded), date: today });
    if (stored.bmiHistory.length > 10) stored.bmiHistory = stored.bmiHistory.slice(-10);
    localStorage.setItem('healthhub-data', JSON.stringify(stored));
    updateDashboard();

    showToast(`Your BMI is ${bmiRounded} — ${category}`, bmi >= 25 ? 'warning' : 'success');
}

// ─────── 2. CALORIE CALCULATOR ───────
function calculateCalories() {
    const gender = document.querySelector('input[name="cal-gender"]:checked').value;
    const age = parseInt(document.getElementById('cal-age').value);
    const height = parseFloat(document.getElementById('cal-height').value);
    const weight = parseFloat(document.getElementById('cal-weight').value);
    const activity = parseFloat(document.getElementById('cal-activity').value);

    if (!age || !height || !weight) {
        showToast('Please fill in all fields', 'warning');
        return;
    }

    // Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const maintenance = Math.round(bmr * activity);
    const lose = Math.round(maintenance - 500);
    const gain = Math.round(maintenance + 500);

    document.getElementById('cal-maintain').textContent = maintenance.toLocaleString();
    document.getElementById('cal-lose').textContent = lose.toLocaleString();
    document.getElementById('cal-gain').textContent = gain.toLocaleString();

    // Macros (30% protein, 45% carbs, 25% fats)
    const proteinCal = maintenance * 0.30;
    const carbsCal = maintenance * 0.45;
    const fatsCal = maintenance * 0.25;

    const proteinG = Math.round(proteinCal / 4);
    const carbsG = Math.round(carbsCal / 4);
    const fatsG = Math.round(fatsCal / 9);

    document.getElementById('macro-protein-g').textContent = `Protein: ${proteinG}g`;
    document.getElementById('macro-carbs-g').textContent = `Carbs: ${carbsG}g`;
    document.getElementById('macro-fats-g').textContent = `Fats: ${fatsG}g`;

    saveToDashboard('lastCalories', maintenance);
    showToast(`Daily calorie need: ${maintenance} kcal`, 'success');
}

// ─────── 3. WATER INTAKE CALCULATOR ───────
function calculateWater() {
    const weight = parseFloat(document.getElementById('water-weight').value);
    const activity = parseFloat(document.getElementById('water-activity').value);
    const climate = parseFloat(document.getElementById('water-climate').value);

    if (!weight) {
        showToast('Please enter your weight', 'warning');
        return;
    }

    // Base: 35ml per kg body weight
    let waterML = weight * 35;
    waterML += activity * 1000;
    waterML += climate * 1000;

    const liters = (waterML / 1000).toFixed(1);
    const glasses = Math.round(waterML / 250);

    document.getElementById('water-liters').textContent = liters;
    document.getElementById('water-glasses').textContent = `${glasses} glasses`;

    // Animate water level (0-100%)
    const maxWater = 5; // 5L max visual
    const percentage = Math.min((parseFloat(liters) / maxWater) * 100, 100);
    document.getElementById('water-level').style.height = percentage + '%';

    saveToDashboard('lastWater', liters);
    showToast(`Daily water goal: ${liters}L (${glasses} glasses)`, 'success');
}

// ─────── 4. HEART RATE ZONE CALCULATOR ───────
function calculateHeartRate() {
    const age = parseInt(document.getElementById('hr-age').value);
    const resting = parseInt(document.getElementById('hr-resting').value);

    if (!age || !resting) {
        showToast('Please fill in age and resting heart rate', 'warning');
        return;
    }

    // Karvonen method
    const maxHR = 220 - age;
    const hrReserve = maxHR - resting;

    const zones = [
        { name: 'Zone 1', label: 'Recovery', low: 0.50, high: 0.60 },
        { name: 'Zone 2', label: 'Fat Burn', low: 0.60, high: 0.70 },
        { name: 'Zone 3', label: 'Aerobic', low: 0.70, high: 0.80 },
        { name: 'Zone 4', label: 'Anaerobic', low: 0.80, high: 0.90 },
        { name: 'Zone 5', label: 'Maximum', low: 0.90, high: 1.00 }
    ];

    const zoneElements = document.querySelectorAll('.hr-zone');
    zones.forEach((zone, i) => {
        const low = Math.round(resting + hrReserve * zone.low);
        const high = Math.round(resting + hrReserve * zone.high);
        const rangeEl = zoneElements[i].querySelector('.hr-zone-range');
        rangeEl.textContent = `${low} - ${high} bpm`;
    });

    showToast(`Max heart rate: ${maxHR} bpm`, 'info');
}

// ─────── 5. BODY FAT % CALCULATOR ───────
function calculateBodyFat() {
    const gender = document.querySelector('input[name="bf-gender"]:checked').value;
    const height = parseFloat(document.getElementById('bf-height').value);
    const weight = parseFloat(document.getElementById('bf-weight').value);
    const waist = parseFloat(document.getElementById('bf-waist').value);
    const neck = parseFloat(document.getElementById('bf-neck').value);

    if (!height || !weight || !waist || !neck) {
        showToast('Please fill in all measurements', 'warning');
        return;
    }

    let bodyFat;

    if (gender === 'male') {
        // US Navy Method (Male)
        bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
        const hip = parseFloat(document.getElementById('bf-hip').value);
        if (!hip) {
            showToast('Please enter hip measurement', 'warning');
            return;
        }
        // US Navy Method (Female)
        bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    }

    bodyFat = Math.max(bodyFat, 2);
    const bfRounded = bodyFat.toFixed(1);

    document.getElementById('bf-value').textContent = bfRounded + '%';

    // Category
    let category, categoryClass;
    if (gender === 'male') {
        if (bodyFat < 6) { category = 'Essential Fat'; categoryClass = 'info'; }
        else if (bodyFat < 14) { category = 'Athletic'; categoryClass = 'healthy'; }
        else if (bodyFat < 18) { category = 'Fitness'; categoryClass = 'healthy'; }
        else if (bodyFat < 25) { category = 'Average'; categoryClass = 'warning'; }
        else { category = 'Above Average'; categoryClass = 'danger'; }
    } else {
        if (bodyFat < 14) { category = 'Essential Fat'; categoryClass = 'info'; }
        else if (bodyFat < 21) { category = 'Athletic'; categoryClass = 'healthy'; }
        else if (bodyFat < 25) { category = 'Fitness'; categoryClass = 'healthy'; }
        else if (bodyFat < 32) { category = 'Average'; categoryClass = 'warning'; }
        else { category = 'Above Average'; categoryClass = 'danger'; }
    }

    const categoryEl = document.getElementById('bf-category');
    categoryEl.style.display = 'inline-flex';
    categoryEl.className = `result-category ${categoryClass}`;
    categoryEl.textContent = category;

    // Body composition bar
    document.getElementById('bf-fat-bar').style.width = Math.min(bodyFat, 60) + '%';
    document.getElementById('bf-fat-bar').textContent = `Fat ${bfRounded}%`;
    document.getElementById('bf-lean-bar').textContent = `Lean ${(100 - bodyFat).toFixed(1)}%`;

    showToast(`Body fat: ${bfRounded}% — ${category}`, categoryClass === 'danger' ? 'warning' : 'success');
}

// ─────── 6. IDEAL WEIGHT CALCULATOR ───────
function calculateIdealWeight() {
    const gender = document.querySelector('input[name="iw-gender"]:checked').value;
    const heightCM = parseFloat(document.getElementById('iw-height').value);

    if (!heightCM) {
        showToast('Please enter your height', 'warning');
        return;
    }

    // Convert to inches for formulas
    const heightInches = heightCM / 2.54;
    const inchesOver5Feet = heightInches - 60;

    let devine, robinson, miller, hamwi;

    if (gender === 'male') {
        devine = 50.0 + 2.3 * inchesOver5Feet;
        robinson = 52.0 + 1.9 * inchesOver5Feet;
        miller = 56.2 + 1.41 * inchesOver5Feet;
        hamwi = 48.0 + 2.7 * inchesOver5Feet;
    } else {
        devine = 45.5 + 2.3 * inchesOver5Feet;
        robinson = 49.0 + 1.7 * inchesOver5Feet;
        miller = 53.1 + 1.36 * inchesOver5Feet;
        hamwi = 45.5 + 2.2 * inchesOver5Feet;
    }

    // Ensure positive values
    devine = Math.max(devine, 30);
    robinson = Math.max(robinson, 30);
    miller = Math.max(miller, 30);
    hamwi = Math.max(hamwi, 30);

    document.getElementById('iw-devine').textContent = devine.toFixed(1) + ' kg';
    document.getElementById('iw-robinson').textContent = robinson.toFixed(1) + ' kg';
    document.getElementById('iw-miller').textContent = miller.toFixed(1) + ' kg';
    document.getElementById('iw-hamwi').textContent = hamwi.toFixed(1) + ' kg';

    const average = ((devine + robinson + miller + hamwi) / 4).toFixed(1);
    document.getElementById('iw-average').textContent = average + ' kg';

    showToast(`Average ideal weight: ${average} kg`, 'success');
}
