import{n as z,P as w,d as v,U as N,y as M,x as P,o as n,c as V,e as t,C as m,D as o,g as a,B as c,w as i,f as g,aR as k,aS as C,aT as y,ac as h,E as b,ad as $,G as I,H as D}from"./index-2e4d6250.js";const G=z({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:w,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),H={close:l=>l instanceof MouseEvent,click:l=>l instanceof MouseEvent},R=v({name:"ElTag"}),U=v({...R,props:G,emits:H,setup(l,{emit:r}){const S=l,B=N(),s=M("tag"),u=P(()=>{const{type:e,hit:f,effect:E,closable:_,round:T}=S;return[s.b(),s.is("closable",_),s.m(e),s.m(B.value),s.m(E),s.is("hit",f),s.is("round",T)]}),p=e=>{r("close",e)},d=e=>{r("click",e)};return(e,f)=>e.disableTransitions?(n(),V("span",{key:0,class:o(a(u)),style:b({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(n(),c(a(y),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:i(()=>[g(a(k))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)):(n(),c($,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:i(()=>[t("span",{class:o(a(u)),style:b({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(n(),c(a(y),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:i(()=>[g(a(k))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)]),_:3},8,["name"]))}});var j=I(U,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const A=D(j);export{A as E,G as t};
