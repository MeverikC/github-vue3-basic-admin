import{d as B,r as D,x as d,g as a,b8 as f,V as E,o as _,c as N,D as V,f as g,ac as v,b7 as F,j as S,_ as T,m as A}from"./index.c50eeaf2.js";const M={modelValue:{type:[String,Number]},disabled:{type:Boolean,default:!1},controls:{type:Boolean,default:!1},controlsPosition:{type:String,default:"",validator(r){return["","right"].includes(r)}},precision:{type:Number,default:0,validator:r=>r>=0&&r===Number.parseInt(`${r}`,10)},max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},step:{type:Number,default:1},text:{type:Boolean,default:!1}},$=B({__name:"base-input-number",props:M,emits:["update:modelValue","change"],setup(r,{emit:m}){const n=r,l=D(),C=d(()=>{const{disabled:e,controls:t}=n;return["el-input-number",{"is-disabled":e},{"is-without-controls":!t},{"is-controls-right":a(c)}]}),c=d(()=>n.controls&&n.controlsPosition==="right"),y=d(()=>f(n.modelValue)&&i(n.modelValue,-1)<n.min),I=d(()=>f(n.modelValue)&&i(n.modelValue,1)>n.max),i=(e,t=1)=>f(e)?x(e+n.step*t,n.precision):a(l),p=e=>{const t=e!==""?Number(e):"";l.value=h(t),m("update:modelValue",a(l)),m("change",a(l))},P=()=>{if(n.disabled||a(y))return;const e=n.modelValue||0,t=i(Number(e),-1);p(t)},k=()=>{if(n.disabled||a(I))return;const e=n.modelValue||0,t=i(Number(e),1);p(t)},h=e=>{const{max:t,min:s,precision:u,step:b}=n;let o=Number(e);return e==null||Number.isNaN(o)||e===""?null:(u!==0&&(o=x(o,u)),(o>t||o<s)&&(o=o>t?t:s),o)},x=(e,t)=>{if(t===0)return Math.round(e);let s=String(e);const u=s.indexOf(".");if(u===-1||!s.replace(".","").split("")[u+t])return e;const w=s.length;return s.charAt(w-1)==="5"&&(s=`${s.slice(0,Math.max(0,w-1))}6`),Number.parseFloat(Number(s).toFixed(t))};return E(()=>n.modelValue,e=>{l.value=h(e),m("update:modelValue",l.value)},{immediate:!0}),(e,t)=>{const s=S,u=T;return _(),N("div",{class:V(a(C)),onDragstart:t[1]||(t[1]=F(()=>{},["prevent"]))},[e.controls&&!e.text?(_(),N("span",{key:0,role:"button",class:V(["el-input-number__decrease",{"is-disabled":a(y)}]),"aria-label":"decrease number",onClick:P},[g(s,{"el-name":a(c)?"arrowDown":"minus"},null,8,["el-name"])],2)):v("",!0),e.controls&&!e.text?(_(),N("span",{key:1,role:"button",class:V(["el-input-number__increase",{"is-disabled":a(I)}]),"aria-label":"increase number",onClick:k},[g(s,{"el-name":a(c)?"arrowUp":"plus"},null,8,["el-name"])],2)):v("",!0),g(u,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=b=>l.value=b),type:"number",disabled:e.disabled,clearable:!1,text:e.text,onChange:p,class:"tl"},null,8,["modelValue","disabled","text"])],34)}}});const U=A($,[["__scopeId","data-v-2192db10"]]);export{U as _};
