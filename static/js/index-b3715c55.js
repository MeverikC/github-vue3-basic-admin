import{_}from"./index-d9c2c0d5.js";import{d as F,em as C,b as l,a1 as g,en as h,o as B,c as D,f as u,w as i,h as c,eo as b,i as w}from"./index-2e4d6250.js";import{F as y}from"./componentEnum-75f2f242.js";import"./base-table-7b17ffc8.js";import"./el-tag-73cc0598.js";import"./base-select.vue_vue_type_script_lang-d1331d18.js";import"./el-tree-6d6a3a2e.js";import"./el-checkbox-8fd6afa3.js";import"./_Uint8Array-dae95bcd.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-9ef810d9.js";import"./base-column-setting-9e8376f1.js";import"./vuedraggable.umd-8385bb60.js";import"./vue.runtime.esm-bundler-e3ed4727.js";import"./index-56bf70a1.js";import"./el-col-fec1900f.js";import"./base-filter-e4f7e7b4.js";import"./base-form.vue_vue_type_script_setup_true_lang-7c5d10cf.js";import"./el-form-item-1c77742a.js";import"./base-input-number-c527e19c.js";import"./localeData-987033d0.js";function N(){return{filterColumn:[{fieldName:"time",fieldDesc:"\u64CD\u4F5C\u65F6\u95F4",fieldType:y.DATE,config:{type:"daterange"}}],tableColumn:[{fieldName:"type",fieldDesc:"\u9519\u8BEF\u7C7B\u578B"},{fieldName:"method",fieldDesc:"\u8BF7\u6C42\u65B9\u5F0F(\u6765\u6E90)"},{fieldName:"url",fieldDesc:"\u8BF7\u6C42\u5730\u5740",showOverflowTooltip:!0},{fieldName:"message",fieldDesc:"\u9519\u8BEF\u63D0\u793A"},{fieldName:"params",fieldDesc:"\u8BF7\u6C42\u53C2\u6570",showOverflowTooltip:!0},{fieldName:"data",fieldDesc:"\u540E\u53F0\u9519\u8BEF\u4FE1\u606F",showOverflowTooltip:!0},{fieldName:"detail",fieldDesc:"\u8BE6\u7EC6\u9519\u8BEF",showOverflowTooltip:!0},{fieldName:"time",fieldDesc:"\u62A5\u9519\u65F6\u95F4"}]}}const T={class:"system-dict-container"},K=F({__name:"index",setup(m){const{tableColumn:r,filterColumn:f}=N();C();const n=l({columns:f,onSearch:e,showOpen:!0,searchInfo:{}}),o=l({columns:r,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:e});g(()=>{e()});async function e(){const{currentPage:a,pageSize:s}=o.pagination,t=await h({...n.searchInfo,currentPage:a,pageSize:s});o.data=t.data.list,o.pagination.total=t.data.total}const p=async()=>{try{await b()}catch{e()}},d=()=>{setTimeout(()=>{e()},100);const a=null;a.b=5};return(a,s)=>{const t=w,E=_;return B(),D("div",T,[u(E,{"table-title":"\u9519\u8BEF\u65E5\u5FD7","filter-config":n,"table-config":o},{buttons:i(()=>[u(t,{type:"primary",onClick:p},{default:i(()=>[c("\u89E6\u53D1\u4E00\u4E2Aajax\u9519\u8BEF")]),_:1}),u(t,{type:"primary",onClick:d},{default:i(()=>[c("\u89E6\u53D1\u4E00\u4E2Avue\u9519\u8BEF")]),_:1})]),_:1},8,["filter-config","table-config"])])}}});export{K as default};
