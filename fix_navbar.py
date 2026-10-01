import re

# 1. Update app.js for navbar scroll hiding
with open('js/app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

old_scroll_logic = '''// ─────── NAVBAR SCROLL EFFECT ───────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});'''

new_scroll_logic = '''// ─────── NAVBAR SCROLL EFFECT ───────
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    // 1. Scrolled style
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // 2. Hide on scroll down, show on scroll up
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down - hide
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});'''

app_js = app_js.replace(old_scroll_logic, new_scroll_logic)

with open('js/app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)

# 2. Update CSS to add top padding to sections and transition to navbar
with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

fixes = '''
/* Navbar auto-hide transition & Section top padding for SPA */
.navbar {
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease !important;
}
.section {
    padding-top: 100px !important; /* Ensure content clears the fixed navbar */
}
'''

css += fixes

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Implemented smart navbar hide/show and section top padding.")
