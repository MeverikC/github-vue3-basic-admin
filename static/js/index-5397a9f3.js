import{_ as E}from"./index-6bd88d8f.js";import{_ as F}from"./index.vue_vue_type_script_setup_true_lang-4cee302a.js";import{F as C}from"./componentEnum-148c49ad.js";import{d as g,eq as h,b as s,a0 as B,er as D,o as b,c as w,f as r,w as a,i as l,es as y}from"./index-a5229f6a.js";import"./base-table-ff704138.js";/* empty css                 */import"./el-tag-66fb40cd.js";import"./base-select.vue_vue_type_script_lang-0336ccbc.js";import"./el-popper-7ddaae8a.js";import"./el-tree-774f1170.js";import"./index-89fa7c11.js";import"./el-checkbox-54a9f3c2.js";import"./_Uint8Array-ed197101.js";import"./debounce-4aa199f9.js";import"./index-d6a23b34.js";import"./el-empty-d27bc5f1.js";import"./el-space-92dc627f.js";/* empty css                  *//* empty css                        */import"./el-dropdown-item-1aa73ca8.js";import"./dropdown-897b280d.js";import"./base-dialog.vue_vue_type_style_index_0_lang-ecef4ed7.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-5eb0b80f.js";import"./base-input.vue_vue_type_script_setup_true_lang-aaf651f6.js";import"./base-column-setting-f33bc4de.js";import"./vuedraggable.umd-25988209.js";import"./vue.runtime.esm-bundler-b17b7929.js";import"./index-d874a39f.js";import"./el-col-cf5c829b.js";import"./base-filter-e2f72717.js";import"./base-form.vue_vue_type_script_setup_true_lang-d3f27f8b.js";import"./el-form-item-ef644bcd.js";import"./useTagViewSetting-beac78c4.js";import"./base-input-number-c84da128.js";import"./localeData-138b15ef.js";import"./index-08c2348e.js";import"./position-8d3f8ae4.js";function N(){return{filterColumn:[{fieldName:"time",fieldDesc:"\u64CD\u4F5C\u65F6\u95F4",fieldType:C.DATE,config:{type:"daterange"}}],tableColumn:[{fieldName:"type",fieldDesc:"\u9519\u8BEF\u7C7B\u578B"},{fieldName:"method",fieldDesc:"\u8BF7\u6C42\u65B9\u5F0F(\u6765\u6E90)"},{fieldName:"url",fieldDesc:"\u8BF7\u6C42\u5730\u5740",showOverflowTooltip:!0},{fieldName:"message",fieldDesc:"\u9519\u8BEF\u63D0\u793A"},{fieldName:"params",fieldDesc:"\u8BF7\u6C42\u53C2\u6570",showOverflowTooltip:!0},{fieldName:"data",fieldDesc:"\u540E\u53F0\u9519\u8BEF\u4FE1\u606F",showOverflowTooltip:!0},{fieldName:"detail",fieldDesc:"\u8BE6\u7EC6\u9519\u8BEF",showOverflowTooltip:!0},{fieldName:"time",fieldDesc:"\u62A5\u9519\u65F6\u95F4"}]}}const T={class:"system-dict-container"},pt=g({__name:"index",setup(p){const{tableColumn:u,filterColumn:c}=N();h();const n=s({columns:c,onSearch:t,showOpen:!0,searchInfo:{}}),o=s({columns:u,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:t});B(()=>{t()});async function t(){const{currentPage:i,pageSize:m}=o.pagination,e=await D({...n.searchInfo,currentPage:i,pageSize:m});o.data=e.data.list,o.pagination.total=e.data.total}const f=async()=>{try{await y()}catch{setTimeout(()=>{t()},100)}},d=()=>{setTimeout(()=>{t()},100);const i=null;i.b=5};return(i,m)=>{const e=F,_=E;return b(),w("div",T,[r(_,{"table-title":"\u9519\u8BEF\u65E5\u5FD7","filter-config":n,"table-config":o},{buttons:a(()=>[r(e,{type:"primary",onClick:f},{default:a(()=>[l("\u89E6\u53D1\u4E00\u4E2Aajax\u9519\u8BEF")]),_:1}),r(e,{type:"primary",onClick:d},{default:a(()=>[l("\u89E6\u53D1\u4E00\u4E2Avue\u9519\u8BEF")]),_:1})]),_:1},8,["filter-config","table-config"])])}}});export{pt as default};
