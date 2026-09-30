import re
import os

with open('index.html', 'r', encoding='utf-8') as f:
    idx = f.read()

# Add langSwitcher to navbar
lang_switcher = '''
                <select id="langSwitcher" class="form-input" style="width: auto; margin-right: 15px; padding: 5px 10px; font-size: 14px;">
                    <option value="en">English</option>
                    <option value="hi">हिंदी (Hindi)</option>
                    <option value="bn">বাংলা (Bengali)</option>
                    <option value="mr">मराठी (Marathi)</option>
                    <option value="ta">தமிழ் (Tamil)</option>
                </select>
'''
idx = idx.replace('<button class="theme-toggle"', lang_switcher + '\n                <button class="theme-toggle"')

# Add data-i18n tags to Navbar
nav_items = {
    'Home': 'nav_home',
    'Tools': 'nav_tools',
    'Exercise': 'nav_exercise',
    'Nutrition': 'nav_nutrition',
    'Mind': 'nav_mind',
    'First Aid': 'nav_firstaid',
    'Diseases': 'nav_diseases',
    'Sleep': 'nav_sleep',
    'Yoga': 'nav_yoga',
    'Blog': 'nav_blog'
}
for text, key in nav_items.items():
    idx = re.sub(rf'>({text})</a>', rf' data-i18n="{key}">\1</a>', idx)

# Prevent default anchor behavior on navbar links so they act like SPA buttons
idx = re.sub(r'href="#([a-z-]+)"', r'href="#" onclick="navigateTo(\'\1\'); return false;"', idx)
idx = idx.replace('href="#calculators"', 'href="#" onclick="navigateTo(\'calculators\'); return false;"')
idx = idx.replace('href="#nutrition"', 'href="#" onclick="navigateTo(\'nutrition\'); return false;"')

# Add data-i18n to Hero
replacements = [
    ('<span>💚</span> Your Health Companion', '<span data-i18n="hero_badge">💚 Your Health Companion</span>'),
    ('Your Complete<br>', '<span data-i18n="hero_title_1">Your Complete</span><br>'),
    ('<span class="gradient-text">Health &amp; Wellness</span>', '<span class="gradient-text" data-i18n="hero_title_2">Health &amp; Wellness</span>'),
    ('Companion\n', '<span data-i18n="hero_title_3">Companion</span>\n'),
    ('Track your BMI, plan workouts, learn nutrition, practice mindfulness, and stay informed about health — all in one beautiful platform.', '<span data-i18n="hero_desc">Track your BMI, plan workouts, learn nutrition, practice mindfulness, and stay informed about health — all in one beautiful platform.</span>'),
    ('🧮 Explore Tools', '<span data-i18n="hero_btn_1">🧮 Explore Tools</span>'),
    ('🥗 Health Tips', '<span data-i18n="hero_btn_2">🥗 Health Tips</span>'),
    ('<div class="hero-stat-label">Health Tools</div>', '<div class="hero-stat-label" data-i18n="stat_1">Health Tools</div>'),
    ('<div class="hero-stat-label">Wellness Tips</div>', '<div class="hero-stat-label" data-i18n="stat_2">Wellness Tips</div>'),
    ('<div class="hero-stat-label">Categories</div>', '<div class="hero-stat-label" data-i18n="stat_3">Categories</div>')
]
for old, new in replacements:
    idx = idx.replace(old, new)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(idx)

print("Updated index.html")
