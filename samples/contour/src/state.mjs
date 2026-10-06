import {getVariant,getRoom} from './catalog.mjs';
export function normalize(value){if(!Array.isArray(value))return [];const map=new Map();for(const line of value){if(!line||!getVariant(line.id)||!Number.isFinite(Number(line.qty))||Number(line.qty)<1)continue;map.set(line.id,Math.min(20,(map.get(line.id)||0)+Math.floor(Number(line.qty))))}return [...map].map(([id,qty])=>({id,qty}));}
export const total=lines=>normalize(lines).reduce((sum,l)=>sum+getVariant(l.id).variant.price*l.qty,0);
export const add=(cart,lines)=>normalize([...normalize(cart),...normalize(lines)]);
export const roomLines=id=>(getRoom(id)?.items||[]).map(([id,qty])=>({id,qty}));
export function normalizeBoards(value){return Array.isArray(value)?value.filter(b=>b&&typeof b.id==='string').slice(0,30).map(b=>({id:b.id.slice(0,80),name:typeof b.name==='string'&&b.name.trim()?b.name.trim().slice(0,60):'My room',room:getRoom(b.room)?.id||'living',lines:normalize(b.lines)})):[];}
