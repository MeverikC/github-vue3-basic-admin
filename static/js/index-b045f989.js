import{_ as d}from"./index-d9c2c0d5.js";import{ek as h,d as m,l as _,b as u,a1 as g,o as D,c as y,f as T}from"./index-2e4d6250.js";import{F as l}from"./componentEnum-75f2f242.js";import{S as c}from"./basic-2a5cf92e.js";import{g as B}from"./dict-ada6f2e4.js";import"./base-table-7b17ffc8.js";import"./el-tag-73cc0598.js";import"./base-select.vue_vue_type_script_lang-d1331d18.js";import"./el-tree-6d6a3a2e.js";import"./el-checkbox-8fd6afa3.js";import"./_Uint8Array-dae95bcd.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-9ef810d9.js";import"./base-column-setting-9e8376f1.js";import"./vuedraggable.umd-8385bb60.js";import"./vue.runtime.esm-bundler-e3ed4727.js";import"./index-56bf70a1.js";import"./el-col-fec1900f.js";import"./base-filter-e4f7e7b4.js";import"./base-form.vue_vue_type_script_setup_true_lang-7c5d10cf.js";import"./el-form-item-1c77742a.js";import"./base-input-number-c527e19c.js";import"./localeData-987033d0.js";function C(t){const i=[{fieldName:"dictName",fieldDesc:"\u5B57\u5178\u540D\u79F0",fieldType:l.INPUT},{fieldName:"status",fieldDesc:"\u5B57\u5178\u72B6\u6001",fieldType:l.SELECT,config:{options:c}}],a=[{fieldName:"dictName",fieldDesc:"\u5B57\u5178\u540D\u79F0",showOverflowTooltip:!0},{fieldName:"dictType",fieldDesc:"\u5B57\u5178\u7C7B\u578B",showOverflowTooltip:!0},{fieldName:"status",fieldDesc:"\u72B6\u6001",formType:"tag",type:e=>e.status===0?"danger":"",formatter:e=>h(c,e.status)},{fieldName:"createTime",fieldDesc:"\u521B\u5EFA\u65F6\u95F4",width:160},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",showOverflowTooltip:!0},{fieldName:"#",fieldDesc:"\u64CD\u4F5C",formType:"operation",width:175,fixed:"right",operation:[{icon:"search",label:"\u67E5\u770B",callFunction:t==null?void 0:t.search}]}];return{filterColumn:i,tableColumn:a}}const w={class:"system-dict-container"},N=m({name:"DictionaryKey"}),Q=m({...N,setup(t){const{tableColumn:i,filterColumn:a}=C({search:f}),e=_(),s=u({columns:a,onSearch:r,showOpen:!1,searchInfo:{}}),n=u({columns:i,data:[],showPagination:!1,onRefresh:r});g(()=>{r()});async function r(){const o=await B({...s.searchInfo});n.data=o.data}function f(o){e.push({path:"dictionary-data/"+o.row.dictType})}return(o,b)=>{const p=d;return D(),y("div",w,[T(p,{"table-title":"\u5B57\u5178\u5217\u8868","filter-config":s,"table-config":n},null,8,["filter-config","table-config"])])}}});export{Q as default};
