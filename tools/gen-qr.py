# Generates flat QR SVGs (navy on white) for wa.me lead links. Usage: python3 tools/gen-qr.py CODE [CODE...]
import sys, os, segno
os.makedirs(os.path.join(os.path.dirname(__file__), 'qr'), exist_ok=True)
for code in sys.argv[1:]:
    url = f'https://wa.me/917974217411?text=Namaste%20({code})'
    q = segno.make(url, error='m', micro=False)
    q.save(os.path.join(os.path.dirname(__file__), 'qr', code + '.svg'), scale=1, border=1, dark='#041030', light='#ffffff', xmldecl=False, svgns=True, nl=False)
    print(code, 'ok')
