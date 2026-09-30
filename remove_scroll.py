import re

with open('js/app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

# We need to remove the old smooth scrolling logic that intercepts clicks on .nav-link
old_scroll_logic = r"document\.querySelectorAll\('\.nav-link'\)\.forEach\(link => \{\s*link\.addEventListener\('click', function\(e\) \{.*?targetSection\.scrollIntoView\(\{ behavior: 'smooth' \}\);\s*\}\s*\}\);\s*\}\);"

app_js = re.sub(old_scroll_logic, "// Old scroll logic removed for SPA", app_js, flags=re.DOTALL)

with open('js/app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)

print("Removed conflicting scroll logic")
