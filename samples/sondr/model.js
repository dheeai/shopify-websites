import * as T from 'three';
import {RoundedBoxGeometry} from './vendor/RoundedBoxGeometry.js';
import {RoomEnvironment} from './vendor/RoomEnvironment.js';
import {finishes} from './catalog.mjs';
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
const material=(color,metalness=0,roughness=.5)=>new T.MeshStandardMaterial({color,metalness,roughness});
function box(w,h,d,r,mat){return new T.Mesh(new RoundedBoxGeometry(w,h,d,5,r),mat)}
function labelTexture(text,color='#30352b',background=null){const c=document.createElement('canvas');c.width=512;c.height=128;const x=c.getContext('2d');if(background){x.fillStyle=background;x.fillRect(0,0,512,128)}x.fillStyle=color;x.font='500 70px sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(text,256,64);const tx=new T.CanvasTexture(c);tx.colorSpace=T.SRGBColorSpace;return tx}
function disc(radius,depth,mat){const m=new T.Mesh(new T.CylinderGeometry(radius,radius,depth,64),mat);m.rotation.x=Math.PI/2;return m}
export function speaker(type='one',finish='silver'){
 const root=new T.Group(),shellGroup=new T.Group(),drivers=new T.Group(),grille=new T.Group(),controls=new T.Group();root.add(shellGroup,drivers,grille,controls);
 const mini=type==='mini',w=mini?1.65:3.35,h=mini?1.7:1.48,d=.92;
 const shell=material(finishes[finish].color,.82,.24),rubber=material('#15171c',.05,.83),metal=material('#b7bdc8',.85,.24),faceMaterial=material('#242932',.55,.43),accent=new T.MeshStandardMaterial({color:'#385bff',emissive:'#2853ff',emissiveIntensity:2,roughness:.3});
 const roundPath=(path,width,height,r)=>{const x=-width/2,y=-height/2;path.moveTo(x+r,y);path.lineTo(x+width-r,y);path.quadraticCurveTo(x+width,y,x+width,y+r);path.lineTo(x+width,y+height-r);path.quadraticCurveTo(x+width,y+height,x+width-r,y+height);path.lineTo(x+r,y+height);path.quadraticCurveTo(x,y+height,x,y+height-r);path.lineTo(x,y+r);path.quadraticCurveTo(x,y,x+r,y);return path};
 const outline=roundPath(new T.Shape(),w,h,.36);outline.holes.push(roundPath(new T.Path(),w-.15,h-.15,.29));const enclosure=new T.ExtrudeGeometry(outline,{depth:d,steps:1,bevelEnabled:true,bevelSegments:4,bevelSize:.024,bevelThickness:.024,curveSegments:16});enclosure.translate(0,0,-d/2);shellGroup.add(new T.Mesh(enclosure,shell));
 const rear=box(w-.15,h-.15,.04,.27,shell);rear.position.z=-d/2;shellGroup.add(rear);
 const board=box(w-.55,.54,.035,.04,material('#20374d',.3,.6));board.position.set(0,-.08,-.39);shellGroup.add(board);
 for(let i=0;i<(mini?2:4);i++){const chip=box(.2,.16,.04,.015,rubber);chip.position.set(-w/2+.48+i*.48,-.08,-.35);shellGroup.add(chip)}
 const battery=box(w-.65,.19,.21,.065,material('#454b55',.45,.5));battery.position.set(0,-h/2+.24,-.18);shellGroup.add(battery);
 const baffle=box(w-.18,h-.17,.065,.28,rubber);baffle.position.z=.27;drivers.add(baffle);
 for(const x of mini?[0]:[-.84,.84]){const radius=mini?.57:.54;const rim=disc(radius,.035,metal);rim.position.set(x,0,.33);drivers.add(rim);const ring=new T.Mesh(new T.TorusGeometry(radius-.065,.045,16,64),rubber);ring.position.set(x,0,.36);drivers.add(ring);const cone=disc(radius-.11,.04,material('#343b49',.4,.5));cone.position.set(x,0,.37);drivers.add(cone);const dome=disc(.17,.055,metal);dome.position.set(x,0,.405);drivers.add(dome)}
 const fw=w-.12,fh=h-.12;const faceShape=roundPath(new T.Shape(),fw,fh,.30);const faceGeometry=new T.ExtrudeGeometry(faceShape,{depth:.025,steps:1,bevelEnabled:true,bevelSize:.008,bevelThickness:.008,bevelSegments:3,curveSegments:16});faceGeometry.translate(0,0,.48);const face=new T.Mesh(faceGeometry,faceMaterial);grille.add(face);
 const points=[];const halfW=fw/2-.055,halfH=fh/2-.055,r=.25;
 for(let y=-halfH;y<=halfH;y+=.027)for(let x=-halfW;x<=halfW;x+=.027){const dx=Math.max(0,Math.abs(x)-(halfW-r)),dy=Math.max(0,Math.abs(y)-(halfH-r));if(dx*dx+dy*dy<=r*r)points.push([x,y])}
 const holes=new T.InstancedMesh(new T.CircleGeometry(.0068,6),material('#060a13',0,.9),points.length),matrix=new T.Matrix4();points.forEach((p,i)=>{matrix.makeTranslation(p[0],p[1],.52);holes.setMatrixAt(i,matrix)});grille.add(holes);
 const badge=box(.64,.13,.006,.035,faceMaterial);badge.position.set(0,-h/2+.19,.529);grille.add(badge);
 const logo=new T.Mesh(new T.PlaneGeometry(.48,.10),new T.MeshBasicMaterial({map:labelTexture('S O N D R','#d5dbe8'),transparent:true,depthWrite:false}));logo.position.set(0,-h/2+.19,.535);grille.add(logo);
 const light=box(mini?.28:.52,.012,.008,.006,accent);light.position.set(0,h/2-.13,.534);grille.add(light);
 const touch=box(mini?.68:.98,.006,.16,.07,material('#161b25',.5,.22));touch.position.set(0,h/2+.028,-.01);controls.add(touch);
 for(const x of [-.23,0,.23]){const mark=box(x===0?.04:.075,.003,.008,.003,material('#a3afc8',.3,.4));mark.position.set(x,h/2+.033,-.01);controls.add(mark)}
 const base=box(w-.55,.04,.52,.1,rubber);base.position.set(0,-h/2-.03,0);shellGroup.add(base);
 const port=box(.18,.058,.018,.024,rubber);port.position.set(0,-h/2+.24,-d/2-.025);shellGroup.add(port);
 if(!mini){const jack=disc(.035,.018,rubber);jack.position.set(.27,-h/2+.24,-d/2-.028);shellGroup.add(jack)}
 root.rotation.set(.12,-.44,-.07);
 return {root,setFinish(f){shell.color.set(finishes[f].color)},explode(t){grille.position.z=t*1.55;drivers.position.z=t*.55;shellGroup.position.z=-t*.55;controls.position.y=t*.42},mini};
}
function personalDevice(type,finish){
 const root=new T.Group(),shell=material(finishes[finish].color,.7,.28),soft=material('#1a1f2b',.02,.9),metal=material('#b8c5dc',.8,.25),glass=material('#253350',.3,.3);
 const add=(mesh,x=0,y=0,z=0)=>{mesh.position.set(x,y,z);root.add(mesh);return mesh};
 if(type==='headphones'){
  const points=[];for(let i=0;i<=50;i++){const a=i/50*Math.PI;points.push(new T.Vector3(Math.cos(a)*.99,.02+Math.sin(a)*1.13,0))}
  add(new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points),64,.105,16,false),shell));
  const lining=[];for(let i=0;i<=40;i++){const a=.18+i/40*(Math.PI-.36);lining.push(new T.Vector3(Math.cos(a)*.97,-.025+Math.sin(a)*1.09,0))}
  add(new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(lining),48,.075,12,false),soft));
  for(const side of [-1,1]){const cup=box(.46,1.07,.73,.2,shell);cup.rotation.z=side*.12;add(cup,side*.99,-.45,0);const cushion=box(.19,.9,.64,.09,soft);cushion.rotation.z=side*.12;add(cushion,side*.75,-.45,.01);const joint=box(.13,.38,.19,.06,metal);add(joint,side*.99,.02,0);const port=box(.08,.018,.10,.007,soft);add(port,side*.99,-.97,0);}
  const led=box(.05,.012,.018,.004,new T.MeshBasicMaterial({color:'#6e98ff'}));add(led,1.227,-.35,.1);
  const branding=new T.Mesh(new T.PlaneGeometry(.44,.1),new T.MeshBasicMaterial({map:labelTexture('SONDR','#bac7e1'),transparent:true,depthWrite:false}));branding.rotation.y=Math.PI/2;add(branding,1.229,-.42,0);
 }
 if(type==='buds'){
  const caseBottom=box(1.86,.68,1.02,.3,shell);add(caseBottom,0,-.65,0);
  const cradle=box(1.63,.10,.82,.045,soft);add(cradle,0,-.29,0);
  const lid=new T.Group();lid.position.set(0,-.23,-.45);lid.rotation.x=-1.0;const cover=box(1.86,.34,1.0,.16,shell);cover.position.set(0,.13,.43);lid.add(cover);root.add(lid);
  for(const side of [-1,1]){const bud=new T.Group();const head=new T.Mesh(new T.SphereGeometry(.235,32,24),shell);head.scale.set(1,1.1,.9);bud.add(head);const stem=box(.15,.47,.17,.07,shell);stem.position.set(side*.06,-.28,0);bud.add(stem);const tip=new T.Mesh(new T.SphereGeometry(.13,20,16),soft);tip.scale.set(.8,1,.7);tip.position.set(-side*.20,.02,.05);bud.add(tip);const vent=box(.035,.08,.008,.015,soft);vent.position.set(side*.05,.055,.20);bud.add(vent);bud.position.set(side*.47,.50,.13);bud.rotation.z=side*-.2;root.add(bud);const socket=new T.Mesh(new T.SphereGeometry(.23,20,12),glass);socket.scale.set(1,.2,.85);add(socket,side*.46,-.23,0);}
  const light=box(.16,.018,.012,.007,new T.MeshBasicMaterial({color:'#799bff'}));add(light,0,-.60,.516);
  const logo=new T.Mesh(new T.PlaneGeometry(.46,.10),new T.MeshBasicMaterial({map:labelTexture('SONDR','#2f3c56'),transparent:true,depthWrite:false}));add(logo,0,-.78,.52);
 }
 if(type==='dock'){
  const base=new T.Mesh(new T.CylinderGeometry(.83,.87,.15,64),shell);add(base,0,-.97,0);
  const underside=new T.Mesh(new T.CylinderGeometry(.79,.79,.035,64),soft);add(underside,0,-1.06,0);
  const start=new T.Vector3(0,-.92,-.27),end=new T.Vector3(0,.62,-.10),direction=end.clone().sub(start);const arm=new T.Mesh(new T.CylinderGeometry(.09,.14,direction.length(),32),shell);arm.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),direction.clone().normalize());arm.position.copy(start.clone().add(end).multiplyScalar(.5));root.add(arm);
  const puck=new T.Group();puck.position.copy(end);puck.rotation.x=-.15;const outer=disc(.64,.15,shell);puck.add(outer);const surface=disc(.575,.018,soft);surface.position.z=.087;puck.add(surface);const ring=new T.Mesh(new T.TorusGeometry(.38,.009,8,64),metal);ring.position.z=.102;puck.add(ring);const align=box(.02,.13,.005,.008,metal);align.position.set(0,-.24,.105);puck.add(align);root.add(puck);
  const port=box(.2,.055,.014,.02,soft);add(port,0,-.96,-.843);
  const light=box(.13,.012,.014,.004,new T.MeshBasicMaterial({color:'#7399ff'}));add(light,0,-.96,.85);
 }
 root.rotation.set(.12,-.44,-.07);return {root,mini:true,setFinish(f){shell.color.set(finishes[f].color)},explode(){}};
}

export function mountModel(el,{type=el.dataset.model||'one',finish=el.dataset.finish||'silver',interactive=false,dark=el.dataset.dark==='true'}={}){
 let renderer;try{renderer=new T.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});}catch{el.dataset.status='fallback';return {setFinish(){},explode(){},reset(){},dispose(){}}}
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.setClearColor(0,0);renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=dark?1.65:1.25;el.append(renderer.domElement);
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(32,1,.1,100);camera.position.set(0,.5,8.4);camera.lookAt(0,0,0);
 const pmrem=new T.PMREMGenerator(renderer),env=new RoomEnvironment();const target=pmrem.fromScene(env,.04);scene.environment=target.texture;env.dispose();pmrem.dispose();
 scene.add(new T.HemisphereLight('#f5f8ff','#596376',2));const sun=new T.DirectionalLight('#ffffff',3.7);sun.position.set(-3,5,5);scene.add(sun);const rim=new T.DirectionalLight('#e8edff',2);rim.position.set(4,2,-2);scene.add(rim);
 const object=['buds','headphones','dock'].includes(type)?personalDevice(type,finish):speaker(type,finish);scene.add(object.root);
 // Soft contact shadow built in the 3D scene, with no external texture request.
 const c=document.createElement('canvas');c.width=256;c.height=256;const ctx=c.getContext('2d'),g=ctx.createRadialGradient(128,128,5,128,128,120);g.addColorStop(0,'rgba(20,28,15,.27)');g.addColorStop(1,'rgba(20,28,15,0)');ctx.fillStyle=g;ctx.fillRect(0,0,256,256);const shadow=new T.Mesh(new T.PlaneGeometry(object.mini?2.8:4.5,2.1),new T.MeshBasicMaterial({map:new T.CanvasTexture(c),transparent:true,depthWrite:false,opacity:dark?.2:.7}));shadow.rotation.x=-Math.PI/2;shadow.position.y=-1.18;scene.add(shadow);
 let manual=false,visible=true,disposed=false,frame=0,tx=-.44,ty=.12,tz=-.07,separation=0,targetSeparation=0,drag=null;
 function draw(){frame=0;if(disposed||!visible||document.hidden)return;const ease=reduce.matches?1:.13;object.root.rotation.y+=(tx-object.root.rotation.y)*ease;object.root.rotation.x+=(ty-object.root.rotation.x)*ease;object.root.rotation.z+=(tz-object.root.rotation.z)*ease;separation+=(targetSeparation-separation)*ease;object.explode(separation);renderer.render(scene,camera);el.classList.add('ready');el.dataset.status='ready';if(Math.abs(tx-object.root.rotation.y)+Math.abs(ty-object.root.rotation.x)+Math.abs(targetSeparation-separation)>.001)invalidate()}
 function invalidate(){if(!frame&&!disposed&&visible&&!document.hidden)frame=requestAnimationFrame(draw)}
 const observer=new ResizeObserver(()=>{const {width,height}=el.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.position.z=camera.aspect<1?9.3:7.7;if(el.classList.contains('card-model'))camera.position.z=object.mini?6.3:7.4;if(el.classList.contains('config-model'))camera.position.z=object.mini?6:8;camera.updateProjectionMatrix();invalidate()});observer.observe(el);
 const intersection=new IntersectionObserver(es=>{visible=es[0].isIntersecting;if(visible)invalidate()},{rootMargin:'100px'});intersection.observe(el);
 function visibility(){if(!document.hidden)invalidate()}document.addEventListener('visibilitychange',visibility);
 function down(e){if(e.button!==0)return;manual=true;drag={x:e.clientX,y:e.clientY,tx,ty};el.setPointerCapture(e.pointerId)}
 function move(e){if(!drag)return;tx=drag.tx+(e.clientX-drag.x)*.009;ty=T.MathUtils.clamp(drag.ty+(e.clientY-drag.y)*.004,-.7,.7);invalidate()}
 function up(){drag=null}
 function keys(e){if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(e.key))return;e.preventDefault();manual=true;if(e.key==='Home'){tx=-.44;ty=.12;tz=-.07}else if(e.key==='ArrowLeft')tx-=.25;else if(e.key==='ArrowRight')tx+=.25;else ty=T.MathUtils.clamp(ty+(e.key==='ArrowUp'?-.15:.15),-.7,.7);invalidate()}
 if(interactive){el.addEventListener('pointerdown',down);el.addEventListener('pointermove',move);el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);el.addEventListener('keydown',keys)}
 invalidate();return {scroll(t){if(!manual&&!reduce.matches){tx=-.44+t*.5;ty=.12+t*.16;invalidate()}},setFinish(f){object.setFinish(f);invalidate()},explode(t){targetSeparation=t;tx=t?-.65:-.44;invalidate()},reset(){manual=false;tx=-.44;ty=.12;tz=-.07;invalidate()},dispose(){disposed=true;cancelAnimationFrame(frame);observer.disconnect();intersection.disconnect();document.removeEventListener('visibilitychange',visibility);el.removeEventListener('pointerdown',down);el.removeEventListener('pointermove',move);el.removeEventListener('pointerup',up);el.removeEventListener('pointercancel',up);el.removeEventListener('keydown',keys);scene.traverse(o=>{o.geometry?.dispose();if(o.material){for(const m of Array.isArray(o.material)?o.material:[o.material]){m.map?.dispose();m.dispose()}}});target.dispose();renderer.dispose();renderer.domElement.remove();el.classList.remove('ready')}};
}
