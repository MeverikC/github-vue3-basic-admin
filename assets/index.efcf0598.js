import{_ as d}from"./index.6a7dedbe.js";import{d as p,a8 as h,aB as u,aQ as _,o as g,f as D,b as B}from"./.pnpm.b1628590.js";import{F as l}from"./componentEnum.5f52cc03.js";import{D as T}from"./index.f730c59d.js";import{S as c}from"./basic.9db2ab82.js";import{g as C}from"./dict.52601b66.js";import"./base-table.26f0c2fd.js";import"./base-column-setting.876fb47d.js";import"./index.6b9b62c4.js";import"./base-filter.cf8c554c.js";import"./base-form.vue_vue_type_script_setup_true_lang.c31353a7.js";import"./base-select.vue_vue_type_script_lang.61c5946e.js";import"./base-input-number.e6272b0b.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang.89d6acdc.js";function w(t){const a=[{fieldName:"dictName",fieldDesc:"\u5B57\u5178\u540D\u79F0",fieldType:l.INPUT},{fieldName:"status",fieldDesc:"\u5B57\u5178\u72B6\u6001",fieldType:l.SELECT,config:{options:c}}],i=[{fieldName:"dictName",fieldDesc:"\u5B57\u5178\u540D\u79F0",showOverflowTooltip:!0},{fieldName:"dictType",fieldDesc:"\u5B57\u5178\u7C7B\u578B",showOverflowTooltip:!0},{fieldName:"status",fieldDesc:"\u72B6\u6001",formType:"tag",type:e=>e.status===0?"danger":"",formatter:e=>T(c,e.status)},{fieldName:"createTime",fieldDesc:"\u521B\u5EFA\u65F6\u95F4",width:160},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",showOverflowTooltip:!0},{fieldName:"#",fieldDesc:"\u64CD\u4F5C",formType:"operation",width:175,fixed:"right",operation:[{icon:"search",label:"\u67E5\u770B",callFunction:t==null?void 0:t.search}]}];return{filterColumn:a,tableColumn:i}}const y={class:"system-dict-container"},K=p({__name:"index",setup(t){const{tableColumn:a,filterColumn:i}=w({search:f}),e=h(),s=u({columns:i,onSearch:r,showOpen:!1,searchInfo:{}}),n=u({columns:a,data:[],showPagination:!1,onRefresh:r});_(()=>{r()});async function r(){const o=await C({...s.searchInfo});n.data=o.data}function f(o){e.push({path:"dictionary-data/"+o.row.dictType})}return(o,N)=>{const m=d;return g(),D("div",y,[B(m,{"table-title":"\u5B57\u5178\u5217\u8868","filter-config":s,"table-config":n},null,8,["filter-config","table-config"])])}}});export{K as default};
