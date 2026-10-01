with open('css/responsive.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('background-color: var(--surface);', 'background-color: var(--bg-secondary);')

with open('css/responsive.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Fixed background color for mobile hamburger menu.")
