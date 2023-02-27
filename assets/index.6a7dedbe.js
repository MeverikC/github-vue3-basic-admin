import{_ as V}from"./base-table.26f0c2fd.js";import{d as z,bL as E,n as v,ag as N,o as c,f as h,b as o,w as s,v as y,W as P,X as F,y as m,V as _,x as k,k as $,F as j,N as M,a9 as O,a6 as D,a0 as U,u as B}from"./.pnpm.b1628590.js";import{_ as A}from"./base-column-setting.876fb47d.js";import{C as I,h as L,c as W,d as X}from"./index.f730c59d.js";import{_ as q}from"./index.6b9b62c4.js";import{_ as G}from"./base-filter.cf8c554c.js";const J={class:"base-page-table-container"},K={key:0,class:"mb15"},Q={class:"flex-row-center justify-between"},Y=z({__name:"index",props:{tableTitle:{type:String,default:""},filterConfig:{type:Object},tableConfig:{type:Object}},emits:["refresh"],setup(t,{emit:x}){const g=t,H=E(),{getTagFullscreen:T}=I(),p=v(),C=v(0),w=()=>{var f;const e=B(T)?37:85,n=20,a=16,r=((f=B(p))==null?void 0:f.instance.offsetHeight)||0,u=20,l=H.buttons?101:54,b=g.tableConfig.showPagination===!1?0:40,d=e+r+l+u+b+n+a;C.value=`calc(100vh - ${d}px)`},R=()=>{var e,n,a;L((e=g.tableConfig)==null?void 0:e.onRefresh)&&((a=(n=g.tableConfig).onRefresh)==null||a.call(n)),x("refresh")};return N(p,O(()=>{w()},100)),(e,n)=>{const a=G,r=q,u=W,l=D,b=A,d=U,f=V;return c(),h("div",J,[o(r,{class:"base-page-filter",ref_key:"baseFilterRef",ref:p},{default:s(()=>[e.$slots.filter?m("",!0):(c(),y(a,P(F({key:0},t.filterConfig)),null,16)),_(e.$slots,"filter",{},void 0,!0)]),_:3},512),o(r,{class:"base-page-table"},{title:s(()=>[e.$slots.buttons?(c(),h("div",K,k(t.tableTitle),1)):m("",!0),$("div",Q,[$("div",null,[e.$slots.buttons?m("",!0):(c(),h(j,{key:0},[M(k(t.tableTitle),1)],64)),_(e.$slots,"buttons",{},void 0,!0)]),o(d,{size:6},{default:s(()=>[o(l,{placement:"top",content:"\u5237\u65B0"},{default:s(()=>[o(u,{icon:"refresh",size:18,hover:"",class:"mr10 pointer",onClick:R})]),_:1}),o(l,{placement:"top",content:"\u5BFC\u51FA"},{default:s(()=>[o(u,{icon:"svg-export",size:18,hover:"",class:"mr10 pointer"})]),_:1}),o(l,{placement:"top",content:"\u5217\u8BBE\u7F6E"},{default:s(()=>[o(b,{tableColumns:t.tableConfig.columns,"onUpdate:tableColumns":n[0]||(n[0]=i=>t.tableConfig.columns=i),filterColumns:t.filterConfig.columns,"onUpdate:filterColumns":n[1]||(n[1]=i=>t.filterConfig.columns=i)},null,8,["tableColumns","filterColumns"])]),_:1})]),_:1})])]),default:s(()=>[_(e.$slots,"table",{},void 0,!0),e.$slots.table?m("",!0):(c(),y(f,F({key:0},t.tableConfig,{"max-height":C.value}),{tableColumn:s(({scope:i,column:S})=>[_(e.$slots,"tableColumn",{scope:i,column:S},void 0,!0)]),_:3},16,["max-height"]))]),_:3})])}}});const ae=X(Y,[["__scopeId","data-v-206939cc"]]);export{ae as _};
