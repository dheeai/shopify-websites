from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
root=Path(__file__).resolve().parent
class Page(HTMLParser):
 def __init__(self): super().__init__();self.base='./';self.links=[];self.h1=0
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  if tag=='base':self.base=d.get('href','./')
  if tag=='h1':self.h1+=1
  if tag=='a':self.links.append(d.get('href',''))
  if tag in ['img','script']:self.links.append(d.get('src',''))
  if tag=='link':self.links.append(d.get('href',''))
errors=[]
for f in root.rglob('*.html'):
 p=Page();p.feed(f.read_text());base=(f.parent/p.base).resolve()
 if p.h1!=1:errors.append(f'{f}: {p.h1} h1s')
 for link in p.links:
  u=urlsplit(link)
  if not u.path or u.scheme or u.netloc:continue
  dest=(base/unquote(u.path)).resolve()
  if dest.is_dir():dest=dest/'index.html'
  if not dest.exists():errors.append(f'{f.name}: broken {link}')
assert not errors,'\n'.join(errors)
print(f'{len(list(root.rglob("*.html")))} HTML pages parsed; single main headings and all local links/assets valid.')
