import {findVariant} from './data.js';
export function cleanCart(value){
 if(!Array.isArray(value))return [];
 const map=new Map();
 for(const line of value){if(!line||typeof line.id!=='string'||!findVariant(line.id))continue;const q=Number(line.qty);if(!Number.isFinite(q)||q<1)continue;map.set(line.id,Math.min(20,(map.get(line.id)||0)+Math.floor(q)));}
 return [...map].map(([id,qty])=>({id,qty}));
}
export function total(cart){return cleanCart(cart).reduce((s,l)=>s+findVariant(l.id).variant.price*l.qty,0)}
export function addLines(cart,ids){return cleanCart([...cart,...ids.map(id=>({id,qty:1}))])}
export function routine({scope='face',texture='light',steps='2'}={}){
 if(scope==='body')return ['body-250','lip-12'];
 if(scope==='travel')return [texture==='rich'?'rich-15':'gel-15','lip-12'];
 return ['cleanser-150',...(steps==='3'?['serum-30']:[]),texture==='rich'?'rich-50':'gel-50'];
}
