import{i as x}from"./index.c8e2dcea.js";import{d as q,n as H,aB as R,aQ as L,c as d,u as i,a$ as P,J as W,o as C,f as O,k as w,V as D,_ as S,$ as N}from"./.pnpm.b1628590.js";let F=0;const _="webkit moz ms o".split(" ");let s,l;const j=typeof window>"u";if(j)s=function(){},l=function(){};else{s=window.requestAnimationFrame,l=window.cancelAnimationFrame;let r;for(let a=0;a<_.length&&!(!!s&&!!l);a++)r=_[a],s=s||window[r+"RequestAnimationFrame"],l=l||window[r+"CancelAnimationFrame"]||window[r+"CancelRequestAnimationFrame"];(!s||!l)&&(s=function(a){const o=new Date().getTime(),c=Math.max(0,16-(o-F)),f=window.setTimeout(()=>{a(o+c)},c);return F=o+c,f},l=function(a){window.clearTimeout(a)})}const z={data:{type:Array,default:()=>[]},options:{type:Object,default:()=>{}},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"300px"}},E={autoPlay:!0,switchDelay:400,hoverStop:!0,step:1,singleHeight:0,waitTime:1e3},V=["innerHTML"],Y=q({__name:"base-seam-scroll",props:z,setup(r,{expose:a}){const o=r,c=H(null),f=H(null),e=R({top:0,autoPlay:!1,delay:0,copyHtml:"",isHover:!1,reqFrame:null,singleWaitTime:null});L(()=>{g()});const p=d(()=>Object.assign({},E,o.options)),b=d(()=>i(p).autoPlay?"ease-in":"linear"),y=d(()=>{const{hoverStop:t,autoPlay:n}=i(p);return t&&n&&o.data.length>1}),M=d(()=>{const{width:t,height:n}=o;return{width:x(t)?t:`${t}px`,height:x(n)?n:`${n}px`}}),B=d(()=>({transform:`translateY(${e.top}px)`,transition:`all ${b.value} ${e.delay}ms`,overflow:"hidden"})),g=()=>{var u;const{autoPlay:t,switchDelay:n}=i(p);e.delay=t?0:n,t&&(o.data.length>1?(e.copyHtml=(u=i(f))==null?void 0:u.innerHTML,P(()=>{m()},0)):(e.top=0,h()))},m=()=>{e.isHover||(h(),e.reqFrame=s(()=>{var v;const t=(v=i(c))==null?void 0:v.offsetHeight,{step:n,singleHeight:u,waitTime:$}=i(p);Math.abs(e.top)>=t/2&&(e.top=0),e.top-=n,e.singleWaitTime&&clearTimeout(e.singleWaitTime),u&&Math.abs(e.top)%u<n?e.singleWaitTime=setTimeout(()=>{m()},$):m()}))},k=()=>{i(y)&&(e.isHover=!1,m())},A=()=>{i(y)&&(e.isHover=!0,e.singleWaitTime&&clearTimeout(e.singleWaitTime),h())},h=()=>{l(e.reqFrame||"")},T=()=>{h(),g()};return W(()=>o.data,()=>{N(()=>{T()})},{deep:!0}),a({reset:T}),(t,n)=>(C(),O("div",{style:S(i(M)),class:"hidden"},[w("div",{ref_key:"realBoxRef",ref:c,style:S(i(B)),onMouseenter:A,onMouseleave:k},[w("div",{ref_key:"slotListRef",ref:f,class:"hidden"},[D(t.$slots,"default")],512),w("div",{innerHTML:e.copyHtml,class:"hidden"},null,8,V)],36)],4))}});export{Y as _};