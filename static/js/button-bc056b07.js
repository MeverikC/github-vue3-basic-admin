import{_ as E}from"./index-d874a39f.js";import{_ as h}from"./index.vue_vue_type_script_setup_true_lang-4cee302a.js";import{d as B,a as D,en as g,cy as v,o as F,c as A,f as e,w as t,i as u,t as f,g as s,e as i,az as V,A as C}from"./index-a5229f6a.js";import{E as R,a as x}from"./el-radio-group-61e67772.js";import"./el-popper-7ddaae8a.js";import"./el-col-cf5c829b.js";/* empty css                  */const k={class:"page-permission-button"},w={class:"mt25"},N={class:"mt25"},S={class:"mt25"},U={class:"mt25"},j=B({__name:"button",setup(y){const r=D(),{userInfo:o}=g(r),_=d=>{r.changeRole(d)};return(d,a)=>{const n=R,m=x,c=h,p=E,b=v("permission");return F(),A("div",k,[e(p,{title:"baseButton\u65B9\u5F0F\uFF08\u63A8\u8350\uFF09"},{default:t(()=>[u(" \u5F53\u524D\u89D2\u8272\uFF1A"+f(s(o).role)+" ",1),i("div",w,[u(" \u5207\u6362\u89D2\u8272\uFF1A "),e(m,{modelValue:s(o).role,"onUpdate:modelValue":a[0]||(a[0]=l=>s(o).role=l),onChange:_},{default:t(()=>[e(n,{label:"admin"}),e(n,{label:"test"})]),_:1},8,["modelValue"])]),i("div",N,[e(c,{auth:"admin_permission_button:admin"},{default:t(()=>[u("\u4EC5admin\u6743\u9650\u53EF\u89C1")]),_:1})])]),_:1}),e(p,{title:"\u81EA\u5B9A\u4E49\u6307\u4EE4\u65B9\u5F0F\uFF08\u4E0D\u53EF\u52A8\u6001\u5207\u6362\uFF09"},{default:t(()=>[u(" \u5F53\u524D\u89D2\u8272\uFF1A"+f(s(o).role)+" ",1),i("div",S,[u(" \u5207\u6362\u89D2\u8272\uFF1A "),e(m,{modelValue:s(o).role,"onUpdate:modelValue":a[1]||(a[1]=l=>s(o).role=l),onChange:_},{default:t(()=>[e(n,{label:"admin"}),e(n,{label:"test"})]),_:1},8,["modelValue"])]),i("div",U,[V((F(),C(c,null,{default:t(()=>[u("\u4EC5admin\u6743\u9650\u53EF\u89C1")]),_:1})),[[b,"admin_permission_button:admin"]])])]),_:1})])}}});export{j as default};