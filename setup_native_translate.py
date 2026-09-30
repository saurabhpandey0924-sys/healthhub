import re

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    idx = f.read()

# Add hidden Google Translate widget
google_translate_html = '''
    <!-- Hidden Google Translate Element -->
    <div id="google_translate_element" style="display:none;"></div>
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en', 
                includedLanguages: 'en,hi,bn,mr,ta',
                autoDisplay: false
            }, 'google_translate_element');
        }
    </script>
    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
'''

if 'google_translate_element' not in idx:
    idx = idx.replace('</body>', google_translate_html + '\n</body>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(idx)


# 2. Update style.css to hide Google Translate banner
with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

hide_google_css = '''
/* Hide Google Translate UI and Banners completely */
.goog-te-banner-frame.skiptranslate, .goog-te-gadget-icon { display: none !important; }
body { top: 0px !important; }
#goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
.goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
'''

if 'goog-te-banner-frame' not in css:
    css += hide_google_css

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)


# 3. Update app.js
with open('js/app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

# Remove the old I18N block
app_js = re.sub(r'// ─────── I18N LOCALIZATION ───────.*', '', app_js, flags=re.DOTALL)

# Add the new proxy logic
new_i18n = '''// ─────── NATIVE PROXY TRANSLATION ───────
document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.getElementById('langSwitcher');
    
    // Check if user already has a language saved
    const savedLang = localStorage.getItem('healthhub_lang') || 'en';
    if(switcher) switcher.value = savedLang;

    // We must wait for Google Translate to load its combo box
    setTimeout(() => {
        const googleSelect = document.querySelector('.goog-te-combo');
        if (googleSelect && savedLang !== 'en') {
            googleSelect.value = savedLang;
            googleSelect.dispatchEvent(new Event('change'));
        }
    }, 1500);

    if (switcher) {
        switcher.addEventListener('change', (e) => {
            const lang = e.target.value;
            localStorage.setItem('healthhub_lang', lang);
            
            const googleSelect = document.querySelector('.goog-te-combo');
            if (googleSelect) {
                googleSelect.value = lang;
                googleSelect.dispatchEvent(new Event('change'));
            }
        });
    }
});
'''
app_js += new_i18n

with open('js/app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)

print("Implemented Native-Proxy Translation system.")
