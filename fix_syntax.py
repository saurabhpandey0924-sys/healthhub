import re

with open('index.html', 'r', encoding='utf-8') as f:
    idx = f.read()

# Fix the incorrect backslashes injected previously
idx = idx.replace("navigateTo(\\'", "navigateTo('")
idx = idx.replace("\\');", "');")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(idx)

print("Fixed syntax errors in index.html")
