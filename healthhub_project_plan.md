# 🏥 HealthHub — CEP Project Plan

> **A comprehensive Health & Fitness Portal for the general public**
> Frontend-only project | Built with HTML, CSS & JavaScript

---

## 📋 Project Overview

| Detail | Value |
|--------|-------|
| **Project Name** | HealthHub |
| **Type** | CEP (Community Engagement Project) |
| **Tech Stack** | HTML5, CSS3, Vanilla JavaScript |
| **Target Audience** | General public / community |
| **Pages** | Single-page application with smooth section navigation |
| **Design** | Dark theme with vibrant health-inspired gradients (teal, green, orange) |

---

## 🎨 Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| **Deep Dark** | `#0a0f1a` | Background |
| **Card Dark** | `#111827` | Cards & sections |
| **Teal Accent** | `#14b8a6` | Primary accent (health/vitality) |
| **Emerald** | `#10b981` | Success, healthy range |
| **Amber** | `#f59e0b` | Warning, caution range |
| **Rose** | `#f43f5e` | Danger, unhealthy range |
| **Sky Blue** | `#38bdf8` | Info, water, calm |
| **Violet** | `#8b5cf6` | Mental health accent |
| **White** | `#f8fafc` | Primary text |
| **Muted** | `#94a3b8` | Secondary text |

### Typography
- **Headings**: `Outfit` (Google Fonts) — bold, modern
- **Body**: `Inter` (Google Fonts) — clean, readable
- **Monospace**: `JetBrains Mono` — for calculator outputs

### Design Features
- Glassmorphism cards with backdrop blur
- Smooth gradient backgrounds
- Micro-animations on hover & interaction
- Animated number counters
- Responsive design (mobile-first)
- Smooth scroll navigation
- Animated SVG health icons
- Dark premium aesthetic

---

## 🗂️ Site Structure & Sections

### 1. 🏠 Hero Section
- Animated health-themed hero with floating medical/fitness icons
- Tagline: *"Your Complete Health & Wellness Companion"*
- Quick stats counter (e.g., "6 Health Tools", "50+ Tips", "8 Categories")
- CTA buttons: "Explore Tools" and "Health Tips"

### 2. 🧮 Health Calculators Hub (6 Interactive Tools)

#### 2.1 BMI Calculator ⭐ (Featured)
- **Inputs**: Height (cm/ft-in), Weight (kg/lbs), Age, Gender
- **Output**: BMI value with animated gauge/dial
- **Categories**: Underweight → Normal → Overweight → Obese (Class I, II, III)
- **Extras**: Color-coded result, health tips per category, ideal weight range
- **Visual**: Animated circular gauge with gradient colors

#### 2.2 Calorie Calculator
- **Inputs**: Age, Gender, Height, Weight, Activity Level (5 levels)
- **Formula**: Mifflin-St Jeor equation
- **Output**: Daily calorie needs (maintain, lose, gain weight)
- **Extras**: Macronutrient breakdown (protein, carbs, fats)

#### 2.3 Water Intake Calculator
- **Inputs**: Weight, Activity Level, Climate
- **Output**: Daily water intake in glasses & liters
- **Visual**: Animated water fill glass

#### 2.4 Heart Rate Zone Calculator
- **Inputs**: Age, Resting Heart Rate
- **Formula**: Karvonen method
- **Output**: 5 heart rate zones (Recovery → Maximum)
- **Visual**: Color-coded zone chart

#### 2.5 Body Fat Percentage Calculator
- **Inputs**: Gender, Age, Height, Weight, Waist, Neck, Hip (for women)
- **Formula**: US Navy method
- **Output**: Body fat %, category, visual body composition bar

#### 2.6 Ideal Weight Calculator
- **Inputs**: Height, Gender, Frame size
- **Formulas**: Devine, Robinson, Miller, Hamwi (shows all 4)
- **Output**: Ideal weight range with comparison chart

---

### 3. 🏋️ Exercise & Workout Guides
- Categories: Cardio, Strength, Flexibility, HIIT
- Each exercise card has:
  - Exercise name & category tag
  - Target muscle group
  - Difficulty level (Beginner/Intermediate/Advanced)
  - Step-by-step instructions
  - Sets & Reps recommendation
  - Animated/illustrated demonstration
- Filter by: Category, Difficulty, Muscle Group
- **Preset Workout Plans**: Beginner Full Body, Fat Burn, Muscle Building

### 4. 🥗 Nutrition & Diet Tips
- Balanced diet plate visual (animated pie chart)
- Food categories: Proteins, Carbs, Fats, Vitamins, Minerals
- Each food item card: Name, calories per serving, key nutrients, benefits
- **Meal Plan Suggestions**: Breakfast, Lunch, Dinner, Snacks
- Superfoods spotlight section
- Hydration tips

### 5. 🧠 Mental Health & Stress Management
- Stress level self-assessment quiz (interactive)
- Breathing exercise tool (animated breathing circle — inhale/hold/exhale)
- Mindfulness tips & techniques
- Daily affirmations (random on each visit)
- Warning signs of mental health issues
- Helpline numbers & resources
- Calming color palette for this section (purple/violet tones)

### 6. 🩹 First Aid Guide
- Emergency situations list with accordion/collapsible guides:
  - CPR, Burns, Choking, Fractures, Bleeding, Snake Bite, Electric Shock, Drowning, Heart Attack, Allergic Reaction
- Step-by-step instructions with numbered lists
- Do's and Don'ts for each situation
- Emergency numbers section (India: 112, Ambulance: 102/108)
- Search/filter functionality

### 7. 🦠 Disease Awareness
- Major diseases covered:
  - Diabetes, Heart Disease, Hypertension, Asthma, Cancer Awareness, COVID-19, Dengue, Malaria, Tuberculosis
- Each disease card includes:
  - Overview & causes
  - Symptoms checklist
  - Prevention tips
  - When to see a doctor
- Interactive symptom checker (basic, disclaimer-included)

### 8. 😴 Sleep Health Tips
- Sleep cycle explanation with visual diagram
- Sleep quality tips (10+ actionable tips)
- Ideal sleep hours by age chart
- Sleep hygiene checklist (interactive checkboxes)
- Blue light & screen time awareness
- Bedtime routine suggestions

### 9. 🧘 Yoga & Meditation
- Popular yoga poses with:
  - Pose name (English & Sanskrit)
  - Difficulty level
  - Benefits
  - Step-by-step instructions
  - Duration recommendation
- Meditation timer tool (with ambient sound options)
- Types of meditation explained
- Benefits of daily practice

### 10. 📝 Health Blog / Articles
- Pre-written articles on trending health topics:
  - "10 Habits for a Healthier Life"
  - "Understanding Your Blood Pressure Numbers"
  - "The Science of Intermittent Fasting"
  - "How Exercise Affects Your Brain"
  - "Superfoods You Should Be Eating"
- Article cards with: Title, summary, read time, category tag
- Full article modal/page on click

### 11. 📊 Health Dashboard (Bonus)
- Personal health snapshot (client-side, localStorage)
- Save & track BMI, weight, water intake over time
- Simple line/bar charts using Canvas
- Goal setting (target weight, daily steps, water goal)
- Data persists in browser localStorage

---

## 🧩 Interactive Features

| Feature | Description |
|---------|-------------|
| **Smooth Scroll Nav** | Fixed navbar with section links, active state highlighting |
| **Dark/Light Mode Toggle** | Theme switcher with localStorage persistence |
| **Animated Counters** | Stats animate on scroll into view |
| **Breathing Exercise** | Animated expanding/contracting circle with timer |
| **Meditation Timer** | Countdown timer with start/pause/reset |
| **Symptom Checker** | Multi-step form with basic condition matching |
| **Search** | Global search across tips, exercises, diseases |
| **Back to Top** | Floating button with smooth scroll |
| **Loading Animation** | Health-themed preloader |
| **Responsive Hamburger Menu** | Mobile-friendly navigation |
| **Toast Notifications** | For calculator results & actions |
| **Local Storage** | Save calculator history & preferences |

---

## 📁 File Structure

```
CIS Project/
├── index.html              # Main HTML file
├── css/
│   ├── style.css           # Core styles & design system
│   ├── components.css      # Reusable component styles
│   ├── sections.css        # Section-specific styles
│   ├── responsive.css      # Media queries
│   └── animations.css      # Keyframe animations
├── js/
│   ├── app.js              # Main app logic, navigation, theme
│   ├── calculators.js      # All 6 calculator logics
│   ├── exercises.js        # Exercise data & filtering
│   ├── breathing.js        # Breathing exercise tool
│   ├── meditation.js       # Meditation timer
│   ├── search.js           # Global search functionality
│   ├── dashboard.js        # Health dashboard & localStorage
│   └── data.js             # All static data (tips, articles, diseases, etc.)
├── assets/
│   ├── images/             # Generated health images & icons
│   ├── icons/              # SVG icons
│   └── sounds/             # Meditation ambient sounds (optional)
└── README.md               # Project documentation
```

---

## 🚀 Build Order (Phase-by-Phase)

### Phase 1: Foundation
1. Set up file structure
2. Create design system (CSS variables, base styles)
3. Build navigation & hero section
4. Add smooth scrolling & mobile menu

### Phase 2: Core Calculators
5. BMI Calculator (featured, most detailed)
6. Calorie Calculator
7. Water Intake Calculator
8. Heart Rate Zone Calculator
9. Body Fat Calculator
10. Ideal Weight Calculator

### Phase 3: Content Sections
11. Exercise & Workout Guides
12. Nutrition & Diet Tips
13. Disease Awareness
14. First Aid Guide

### Phase 4: Wellness Features
15. Mental Health & Stress Management
16. Breathing Exercise Tool
17. Sleep Health Tips
18. Yoga & Meditation (with timer)

### Phase 5: Extras & Polish
19. Health Blog/Articles
20. Health Dashboard (localStorage)
21. Dark/Light Mode Toggle
22. Search functionality
23. Loading animation & micro-interactions
24. Final responsive testing & polish

---

## ✅ CEP Requirements Checklist

- [x] Community benefit (health awareness for general public)
- [x] Interactive & engaging (6 calculators, breathing tool, meditation timer)
- [x] Educational content (diseases, nutrition, first aid, mental health)
- [x] Practical utility (BMI, calorie tracking, workout guides)
- [x] Modern & professional design
- [x] Fully frontend (no backend required)
- [x] Mobile responsive

---

> [!IMPORTANT]
> **Ready to build?** Click **Proceed** to start Phase 1 — setting up the project foundation, design system, navigation, and hero section!
