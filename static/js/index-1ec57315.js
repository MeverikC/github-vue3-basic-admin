import{_ as f}from"./index-25c8f987.js";import{ei as p,d,aG as _,b as s,a1 as g,o as b,c as h,f as y}from"./index-0b27933a.js";import{F as l}from"./componentEnum-01401fe5.js";import{S as n}from"./basic-2a5cf92e.js";import{g as C,a as D}from"./dict-a016514e.js";import"./base-table-78d99eaf.js";import"./el-tag-d9678e7a.js";import"./base-select.vue_vue_type_script_lang-215a5c50.js";import"./el-tree-ce0d3ca3.js";import"./el-checkbox-0495a631.js";import"./_Uint8Array-3e45c491.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-df7bc1c3.js";import"./base-column-setting-3830f98d.js";import"./vuedraggable.umd-08c858c6.js";import"./vue.runtime.esm-bundler-6e13a110.js";import"./index-3e251655.js";import"./el-col-d5314668.js";import"./base-filter-3e13e323.js";import"./base-form.vue_vue_type_script_setup_true_lang-207478d9.js";import"./el-form-item-5aaf46a3.js";import"./base-input-number-2e1c1064.js";import"./localeData-e0944d67.js";function T(){return{filterColumn:[{fieldName:"dictType",fieldDesc:"\u5B57\u5178\u540D\u79F0",fieldType:l.SELECT,config:{api:C,labelKey:"dictName",valueKey:"dictType",clearable:!1}},{fieldName:"status",fieldDesc:"\u72B6\u6001",fieldType:l.SELECT,config:{options:n}}],tableColumn:[{fieldName:"dictLabel",fieldDesc:"\u5B57\u5178label",showOverflowTooltip:!0},{fieldName:"dictCode",fieldDesc:"\u5B57\u5178code",showOverflowTooltip:!0},{fieldName:"sort",fieldDesc:"\u6392\u5E8F"},{fieldName:"status",fieldDesc:"\u72B6\u6001",formType:"tag",type:e=>e.status===0?"danger":"",formatter:e=>p(n,e.status)},{fieldName:"createTime",fieldDesc:"\u521B\u5EFA\u65F6\u95F4",width:160},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",showOverflowTooltip:!0}]}}const w={class:"system-dict-container"},Q=d({__name:"index",setup(c){const{tableColumn:a,filterColumn:e}=T(),u=_(),t=s({columns:e,onSearch:o,showOpen:!1,searchInfo:{dictType:""}}),i=s({columns:a,data:[],showPagination:!1,onRefresh:o});g(()=>{t.searchInfo.dictType=u.params.type,o()});async function o(){const r=await D({...t.searchInfo});i.data=r.data}return(r,E)=>{const m=f;return b(),h("div",w,[y(m,{"table-title":"\u5B57\u5178\u6570\u636E","filter-config":t,"table-config":i},null,8,["filter-config","table-config"])])}}});export{Q as default};
