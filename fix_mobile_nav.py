import re

with open('index.html', 'r', encoding='utf-8') as f:
    idx = f.read()

# Extract the select element
select_regex = r'<select id="langSwitcher".*?</select>'
match = re.search(select_regex, idx, re.DOTALL)
if match:
    select_html = match.group(0)
    
    # Remove from original location in .nav-actions
    idx = idx.replace(select_html, '')
    
    # Add inline style modifications for better mobile integration
    styled_select = select_html.replace('style="width: auto; margin-right: 15px; padding: 5px 10px; font-size: 14px;"', 'class="form-input mobile-lang-switcher" style="width: auto; padding: 5px 10px; font-size: 14px; margin-top: 10px;"')
    
    # Inject at the end of .nav-links
    idx = idx.replace('</a>\n            </div>\n\n            <div class="nav-actions">', f'</a>\n                {styled_select}\n            </div>\n\n            <div class="nav-actions">')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(idx)

# Add some CSS to style.css for mobile-lang-switcher
with open('css/responsive.css', 'r', encoding='utf-8') as f:
    resp = f.read()

mobile_css = '''
    .mobile-lang-switcher {
        margin: 10px 0 !important;
        width: 100% !important;
        max-width: 200px;
        align-self: center;
    }
'''

if 'mobile-lang-switcher' not in resp:
    resp = resp.replace('@media (max-width: 768px) {', f'@media (max-width: 768px) {{\n{mobile_css}')

with open('css/responsive.css', 'w', encoding='utf-8') as f:
    f.write(resp)

print("Moved language switcher for mobile responsiveness")
