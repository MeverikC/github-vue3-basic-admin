import{d as S,r as u,V as z,o as T,B as K,w as t,f as e,e as p,g as s,t as O,h as B,a6 as N,bb as U,bo as M,b0 as V,j as q,cd as G,p as H,k as J,m as P,a1 as Q,c as W,i as X}from"./index-2e4d6250.js";import{E as R,a as I}from"./el-col-fec1900f.js";import{E as Y}from"./el-tree-6d6a3a2e.js";import"./el-checkbox-8fd6afa3.js";import{D as Z}from"./vuedraggable.umd-8385bb60.js";import{_ as ee}from"./index-56bf70a1.js";import{_ as te}from"./base-json.vue_vue_type_script_setup_true_lang-29b14cbb.js";import{g as ae}from"./dept-15782a63.js";import"./vue.runtime.esm-bundler-e3ed4727.js";const A=l=>(H("data-v-0b8a185d"),l=l(),J(),l),le=A(()=>p("div",{class:"base-column-title pl15"},"\u5B57\u6BB5",-1)),oe={class:"padding15 border-box"},se=A(()=>p("div",{class:"base-column-title pl15"},"\u5DF2\u9009\u5B57\u6BB5",-1)),ne={class:"padding15 border-box"},ce={class:"base-column-choose-item flex-row-center pl10 pr10"},ue=["title"],de={class:"base-column-setting-tip"},ie=S({__name:"base-tree-select",props:{data:{type:Array,default:()=>[]},nodeKey:{type:String,default:"id"},fieldNames:{type:Object,default:()=>({label:"label",children:"children"})},height:{type:String,default:"450px"}},emits:["save"],setup(l,{expose:m,emit:g}){const f=l,c=u(""),d=u([]),h=u(null),i=u(),o=u(),k=({data:a,callback:n,type:D="key"})=>{s(o).showDialog(),h.value=n,N(()=>{D==="node"?s(i).setCheckedNodes(a||[]):s(i).setCheckedKeys(a||[]),b()})},v=()=>{_(),s(o).hideDialog()},_=()=>{c.value="",d.value=[],h.value=null},y=(a,n)=>a?n[f.fieldNames.label].indexOf(a)!==-1:!0,b=()=>{d.value=s(i).getCheckedNodes()},x=a=>{s(i).setChecked(a,!1,!0),N(()=>{b()})},w=a=>{var n;U(h.value)&&(a(!0),(n=s(h))==null||n(d.value),setTimeout(()=>{a(!1),v()},600)),g("save",d.value)};return z(c,a=>{s(i).filter(a)}),m({showDialog:k,hideDialog:v}),(a,n)=>{const D=M,$=Y,C=V,F=R,E=q,L=I,j=G;return T(),K(j,{class:"base-tree-select",title:"\u9009\u62E9\u5B57\u6BB5",ref_key:"baseDialogRef",ref:o,width:"870px",saveText:"\u4FDD \u5B58",cancelText:"\u53D6 \u6D88",closeFun:_,onSave:w},{default:t(()=>[e(L,{gutter:0},{default:t(()=>[e(F,{span:12,class:"base-tree-box"},{default:t(()=>[le,p("div",oe,[e(D,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=r=>c.value=r),placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D\u79F0",class:"mb15"},null,8,["modelValue"]),e(C,{"view-style":{height:l.height}},{default:t(()=>[e($,{data:l.data,"node-key":l.nodeKey,ref_key:"treeRef",ref:i,"show-checkbox":"",props:l.fieldNames,"filter-node-method":y,"expand-on-click-node":!1,onCheck:b,"default-expand-all":""},null,8,["data","node-key","props"])]),_:1},8,["view-style"])])]),_:1}),e(F,{span:12,class:"base-tree-box"},{default:t(()=>[se,p("div",ne,[e(C,{"view-style":{height:l.height}},{default:t(()=>[e(s(Z),{modelValue:d.value,"onUpdate:modelValue":n[1]||(n[1]=r=>d.value=r),animation:100,"item-key":"fieldName",forceFallback:!0,handle:".move"},{item:t(({element:r})=>[p("div",ce,[e(E,{"el-name":"rank",size:16,class:"move mr5",hover:""}),p("div",{class:"text-hidden w100",title:r[l.fieldNames.label]},O(r[l.fieldNames.label]),9,ue),e(E,{"el-name":"close",size:14,class:"pointer",hover:"",onClick:pe=>x(r)},null,8,["onClick"])])]),_:1},8,["modelValue"])]),_:1},8,["view-style"])])]),_:1}),p("div",de,[B(" \u6CE8\uFF1A\u62D6\u52A8 "),e(E,{"el-name":"rank",size:14,class:"ml5 mr5"}),B(" \u56FE\u6807\u53EF\u8C03\u6574\u987A\u5E8F ")])]),_:1})]),_:1},512)}}});const _e=P(ie,[["__scopeId","data-v-0b8a185d"]]),re={class:"page-func-tree-select"},we=S({__name:"index",setup(l){const m=u(),g=u([]),f=u([]),c=u([5,6]),d={label:"deptName",children:"children"};Q(async()=>{const o=await ae();g.value=o.data});const h=()=>{s(m).showDialog({data:f.value,type:"node",callback:o=>{f.value=o}})},i=()=>{s(m).showDialog(c.value,o=>{f.value=o}),s(m).showDialog({data:c.value,type:"keys",callback:o=>{c.value=o.map(k=>k.deptId)}})};return(o,k)=>{const v=X,_=R,y=te,b=V,x=I,w=ee,a=_e;return T(),W("div",re,[e(w,{title:"\u57FA\u7840\u793A\u4F8B"},{default:t(()=>[e(x,null,{default:t(()=>[e(_,{span:12},{default:t(()=>[e(v,{onClick:h},{default:t(()=>[B("\u70B9\u51FB\u9009\u62E9\u90E8\u95E8")]),_:1})]),_:1}),e(_,{span:12},{default:t(()=>[e(b,{"view-style":"height:500px"},{default:t(()=>[e(y,{data:f.value},null,8,["data"])]),_:1})]),_:1})]),_:1})]),_:1}),e(w,{title:"\u521D\u59CB\u503C"},{default:t(()=>[e(x,null,{default:t(()=>[e(_,{span:12},{default:t(()=>[e(v,{onClick:i},{default:t(()=>[B("\u70B9\u51FB\u9009\u62E9\u90E8\u95E8")]),_:1})]),_:1}),e(_,{span:12},{default:t(()=>[e(b,{"view-style":"height:500px"},{default:t(()=>[e(y,{data:c.value},null,8,["data"])]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{ref_key:"baseTreeSelectRef",ref:m,"node-key":"deptId",fieldNames:d,data:g.value},null,8,["data"])])}}});export{we as default};
