import{aH as C,aI as S,aJ as T,aK as h,n as B,d as b,y as D,x as k,o as l,c as p,e as m,C as r,g as s,B as g,D as i,F as E,ac as u,t as y,G as I,H as R,l as H,aL as N,w as d,h as F,i as V}from"./index-0b27933a.js";const c={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},v={[c.success]:C,[c.warning]:S,[c.error]:T,[c.info]:h},M=B({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),P=b({name:"ElResult"}),x=b({...P,props:M,setup(t){const f=t,n=D("result"),a=k(()=>{const e=f.icon,o=e&&c[e]?c[e]:"icon-info",_=v[o]||v["icon-info"];return{class:o,component:_}});return(e,o)=>(l(),p("div",{class:i(s(n).b())},[m("div",{class:i(s(n).e("icon"))},[r(e.$slots,"icon",{},()=>[s(a).component?(l(),g(E(s(a).component),{key:0,class:i(s(a).class)},null,8,["class"])):u("v-if",!0)])],2),e.title||e.$slots.title?(l(),p("div",{key:0,class:i(s(n).e("title"))},[r(e.$slots,"title",{},()=>[m("p",null,y(e.title),1)])],2)):u("v-if",!0),e.subTitle||e.$slots["sub-title"]?(l(),p("div",{key:1,class:i(s(n).e("subtitle"))},[r(e.$slots,"sub-title",{},()=>[m("p",null,y(e.subTitle),1)])],2)):u("v-if",!0),e.$slots.extra?(l(),p("div",{key:2,class:i(s(n).e("extra"))},[r(e.$slots,"extra")],2)):u("v-if",!0)],2))}});var z=I(x,[["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]]);const A=R(z);const J=b({__name:"base-result",props:{status:{type:String,default:"success"},title:{type:String},subTitle:{type:String},returnText:{type:String,default:"\u8FD4\u56DE\u4E0A\u4E00\u9875"},goHome:Boolean},setup(t){const f=t,n=H(),a=k(()=>["success","error","warning","info"].includes(f.status)),e=()=>{f.goHome?n.replace("/"):n.go(-1)};return(o,_)=>{const $=V,w=A;return l(),g(w,{title:t.title,"sub-title":t.subTitle,icon:s(a)?t.status:"info"},N({extra:d(()=>[r(o.$slots,"extra"),o.$slots.extra?u("",!0):(l(),g($,{key:0,type:"primary",onClick:e},{default:d(()=>[F(y(t.goHome?"\u8FD4\u56DE\u9996\u9875":t.returnText),1)]),_:1}))]),_:2},[s(a)?void 0:{name:"icon",fn:d(()=>[r(o.$slots,"icon")]),key:"0"}]),1032,["title","sub-title","icon"])}}});export{J as _};
