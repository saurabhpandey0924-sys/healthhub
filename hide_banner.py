import re

with open('index.html', 'r', encoding='utf-8') as f:
    idx = f.read()

hide_css = '''
    <style>
        /* Force Hide Google Translate Top Banner completely */
        body { top: 0 !important; position: static !important; }
        .goog-te-banner-frame { display: none !important; }
        iframe.goog-te-banner-frame { display: none !important; }
        .skiptranslate > iframe { display: none !important; }
        #goog-gt-tt { display: none !important; }
        .goog-te-balloon-frame { display: none !important; }
    </style>
</head>'''

idx = idx.replace('</head>', hide_css)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(idx)

print("Injected strict hiding CSS for Google Translate banner.")
