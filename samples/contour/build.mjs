import {stories} from './src/stories.mjs';
import {mkdir,writeFile} from 'node:fs/promises';
import {products,rooms} from './src/catalog.mjs';
import * as v from './src/views.mjs';
const pages=[['inspiration','The Contour notebook','inspiration',v.inspiration()],...stories.map(s=>['inspiration/'+s.id,s.title,'story',v.storyPage(s),s.id]),['','Furniture, lighting & objects','home',v.home()],['shop','The collection','shop',v.shop()],['rooms','Rooms to make your own','rooms',v.roomsPage()],['materials','The material library','materials',v.materialPage()],['saved','Saved pieces & rooms','saved',v.savedPage()],['guide','Measuring your space','guide',v.guide()],['approach','Our approach','approach',v.approach()],['help','Orders and care','help',v.help()],['privacy','Privacy and accessibility','privacy',v.help(true)],['bag','Your bag','bag',v.bagPage()],...products.map(p=>[`products/${p.id}`,p.name,'product',v.product(p),p.id]),...rooms.map(r=>[`rooms/${r.id}`,r.name,'room',v.room(r),r.id])];
for(const [path,title,route,content,id] of pages){const dir=new URL(`./${path?path+'/':''}`,import.meta.url);await mkdir(dir,{recursive:true});await writeFile(new URL('index.html',dir),v.shell(content,{title,route,id,base:path?'../'.repeat(path.split('/').length):'./'}))}
await writeFile(new URL('404.html',import.meta.url),v.shell(v.intro('PAGE NOT FOUND','Let’s find<br><em>your way home.</em>')+'<div class="wrap section"><a class="button dark" href="./">Back to Contour</a></div>',{title:'Page not found',route:'404'}));
console.log(`Built ${pages.length} static pages.`);
