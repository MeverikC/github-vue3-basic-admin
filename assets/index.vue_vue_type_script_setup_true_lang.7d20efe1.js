import{d as S,n as g,c as d,u as o,Y as _,J as h,o as v,f as z,x as w,_ as B,aN as k,aO as E}from"./.pnpm.b1628590.js";import{l as T}from"./index.f730c59d.js";const D=S({__name:"index",props:{startVal:{type:Number,default:0},endVal:{type:Number,default:2023},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(s){return s>=0}},separator:{type:String,default:","},prefix:{type:String,default:""},suffix:{type:String,default:""},transition:{type:String,default:"linear"},size:{type:Number,default:16},color:{type:String,default:"inherit"}},setup(s,{expose:m}){const t=s,a=g(t.startVal);let i=null;const u=d(()=>x(o(i))),y=d(()=>({color:t.color,fontSize:t.size+"px"})),p=()=>{c(),a.value=t.endVal},c=()=>{a.value=t.startVal,i=k(a,{duration:t.duration,transition:E[t.transition]})},x=e=>{if(!e&&e!==0)return"";const{decimals:l,separator:n,suffix:V,prefix:b}=t;e=Number(e).toFixed(l)+"";let r=e.split(".")[0];const N=l>0?"."+e.split(".")[1]:"",f=/(\d+)(\d{3})/;if(n&&!T(n))for(;f.test(r);)r=r.replace(f,"$1"+n+"$2");return b+r+N+V};return _(()=>{a.value=t.startVal}),h([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&p()},{immediate:!0}),m({value:u,start:p,reset:c}),(e,l)=>(v(),z("span",{style:B(o(y))},w(o(u)),5))}});export{D as _};
