import re

# 1. Update app.js
with open('js/app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

app_js = app_js.replace("const mobileNav = document.getElementById('mobileNav');", "const mobileNav = document.getElementById('navLinks');")

with open('js/app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)

# 2. Add .nav-links.active CSS to responsive.css
with open('css/responsive.css', 'r', encoding='utf-8') as f:
    css = f.read()

nav_links_css = '''
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: var(--surface);
        padding: var(--space-4) 0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        border-top: 1px solid var(--border);
        z-index: 100;
        max-height: calc(100vh - 70px);
        overflow-y: auto;
    }
    
    .nav-links.active .nav-link {
        padding: var(--space-3) var(--space-4);
        width: 100%;
        text-align: center;
        border-bottom: 1px solid var(--border);
    }
    
    .nav-links.active .nav-link:last-child {
        border-bottom: none;
    }
'''

if '.nav-links.active' not in css:
    css = css.replace('.nav-links {\n        display: none;\n    }', '.nav-links {\n        display: none;\n    }' + nav_links_css)

with open('css/responsive.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Fixed mobile hamburger menu overlay.")
