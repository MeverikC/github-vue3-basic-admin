import{_ as E}from"./index.6af4874b.js";import{a as h,b as v}from"./index.c8e2dcea.js";import{d as D,ax as B,bM as V,bN as g,a_ as A,o as F,f as C,b as e,w as t,N as u,x as b,u as s,k as l,ak as x,v as k}from"./.pnpm.b1628590.js";const N={class:"page-permission-button"},R={class:"mt25"},w={class:"mt25"},S={class:"mt25"},U={class:"mt25"},M=D({__name:"button",setup(T){const _=h(),{userInfo:o}=B(_),r=d=>{_.changeRole(d)};return(d,a)=>{const n=V,m=g,c=v,p=E,f=A("permission");return F(),C("div",N,[e(p,{title:"baseButton\u65B9\u5F0F\uFF08\u63A8\u8350\uFF09"},{default:t(()=>[u(" \u5F53\u524D\u89D2\u8272\uFF1A"+b(s(o).role)+" ",1),l("div",R,[u(" \u5207\u6362\u89D2\u8272\uFF1A "),e(m,{modelValue:s(o).role,"onUpdate:modelValue":a[0]||(a[0]=i=>s(o).role=i),onChange:r},{default:t(()=>[e(n,{label:"admin"}),e(n,{label:"test"})]),_:1},8,["modelValue"])]),l("div",w,[e(c,{auth:"admin_permission_button:admin"},{default:t(()=>[u("\u4EC5admin\u6743\u9650\u53EF\u89C1")]),_:1})])]),_:1}),e(p,{title:"\u81EA\u5B9A\u4E49\u6307\u4EE4\u65B9\u5F0F\uFF08\u4E0D\u53EF\u52A8\u6001\u5207\u6362\uFF09"},{default:t(()=>[u(" \u5F53\u524D\u89D2\u8272\uFF1A"+b(s(o).role)+" ",1),l("div",S,[u(" \u5207\u6362\u89D2\u8272\uFF1A "),e(m,{modelValue:s(o).role,"onUpdate:modelValue":a[1]||(a[1]=i=>s(o).role=i),onChange:r},{default:t(()=>[e(n,{label:"admin"}),e(n,{label:"test"})]),_:1},8,["modelValue"])]),l("div",U,[x((F(),k(c,null,{default:t(()=>[u("\u4EC5admin\u6743\u9650\u53EF\u89C1")]),_:1})),[[f,"admin_permission_button:admin"]])])]),_:1})])}}});export{M as default};