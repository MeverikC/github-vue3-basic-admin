import{bD as _,v as n,ba as k,k as m,g as a}from"./index-3644c3c9.js";var c=(s=>(s.REFRESH_PAGE="REFRESH_PAGE",s.CLOSE_CURRENT="CLOSE_CURRENT",s.CLOSE_LEFT="CLOSE_LEFT",s.CLOSE_RIGHT="CLOSE_RIGHT",s.CLOSE_OTHER="CLOSE_OTHER",s.CLOSE_ALL="CLOSE_ALL",s))(c||{});const G=(s,i=!1)=>{const o=_(),r=k(),E=m(),l=n(()=>o.tagList),u=e=>{const t=e||(i?s:r),g=a(l).findIndex(d=>d.path===t.path);return{...t,index:g}},L=n(()=>i?r.fullPath!==u().fullPath:!1),x=n(()=>{var e;return!!((e=r==null?void 0:r.meta)!=null&&e.affix)||a(l).length<=1}),b=n(()=>{var t,g;const{index:e}=u();return[0,-1].includes(e)||!!((g=(t=a(l)[e-1])==null?void 0:t.meta)!=null&&g.affix)}),F=n(()=>{var t,g;const{index:e}=u();return[a(l).length-1,-1].includes(e)||!!((g=(t=o.tagList[e+1])==null?void 0:t.meta)!=null&&g.affix)}),A=n(()=>{const{index:e}=u();return e===-1||a(l).length===1||a(l).filter((t,g)=>{var d;return!((d=t==null?void 0:t.meta)!=null&&d.affix)&&g!==e}).length===0}),H=n(()=>a(l).length===1||a(l).filter(e=>{var t;return!((t=e==null?void 0:e.meta)!=null&&t.affix)}).length===0),D=n(()=>[{icon:"refresh",text:"\u5237\u65B0\u9875\u9762",disabled:a(L),command:c.REFRESH_PAGE},{icon:"close",text:"\u5173\u95ED\u5F53\u524D\u6807\u7B7E",disabled:a(x),command:c.CLOSE_CURRENT},{icon:"back",text:"\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E",disabled:a(b),command:c.CLOSE_LEFT},{icon:"right",text:"\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E",disabled:a(F),command:c.CLOSE_RIGHT},{icon:"svg-other",text:"\u5173\u95ED\u5176\u4ED6\u6807\u7B7E",disabled:a(A),command:c.CLOSE_OTHER},{icon:"svg-clear",text:"\u5173\u95ED\u5168\u90E8\u6807\u7B7E",disabled:a(H),command:c.CLOSE_ALL}]),P=e=>{switch(e){case c.REFRESH_PAGE:f();break;case c.CLOSE_CURRENT:h();break;case c.CLOSE_LEFT:R();break;case c.CLOSE_RIGHT:O();break;case c.CLOSE_OTHER:S();break;case c.CLOSE_ALL:C();break}},f=async()=>{await o.refreshPage(E)},h=e=>{const t=u(e);o.deleteTag(t),r.path===t.path&&T()},T=()=>{const e=a(l).slice(-1)[0];e?E.push(e.fullPath):E.push("/")},R=()=>{const e=u();o.deleteTag({...e,index:e.index-1})},O=()=>{const e=u();o.deleteTag({...e,index:e.index+1})},S=()=>{o.deleteOtherTag(u()),T()},C=()=>{o.clearTag(),!r.meta.affix&&T()};return{getActionList:D,handleMenuEvent:P,refreshPage:f,closeTag:h,closeLeftTag:R,closeRightTag:O,closeOtherTag:S,closeAllTag:C}},B=()=>{const s=_(),{closeTag:i}=G(),o=n(()=>s.tagList),r=n(()=>s.cacheTagList),E=n(()=>s.fullscreen);return{getTagList:o,getCacheTagList:r,getTagFullscreen:E,closeTag:i,addTag:L=>{s.addTag(L)},toggleFullscreen:()=>{s.toggleFullscreen()}}};export{G as a,B as u};
