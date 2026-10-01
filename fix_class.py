import re

with open('index.html', 'r', encoding='utf-8') as f:
    idx = f.read()

idx = idx.replace('class="form-input" class="form-input mobile-lang-switcher"', 'class="form-input mobile-lang-switcher"')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(idx)

print("Fixed duplicate class attribute.")
