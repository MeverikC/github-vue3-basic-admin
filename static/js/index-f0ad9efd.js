import{_ as s}from"./index-c5485030.js";import{F as u}from"./componentEnum-f5a9c187.js";import{d as c,b as m,a0 as f,et as d,o as g,c as _,f as F}from"./index-3644c3c9.js";import"./base-table-da980dad.js";/* empty css                 */import"./el-tag-077c4cf1.js";import"./base-select.vue_vue_type_script_lang-99b27fd5.js";import"./el-popper-d8a7d137.js";import"./el-tree-dab2ba53.js";import"./index-bdaca420.js";import"./el-checkbox-33797f2d.js";import"./_Uint8Array-1c46b8f5.js";import"./debounce-8ddef7c7.js";import"./index-0cbcc263.js";import"./el-empty-095e9883.js";import"./el-space-92caf033.js";/* empty css                  *//* empty css                        */import"./el-dropdown-item-e2d736e4.js";import"./dropdown-90869620.js";import"./base-dialog.vue_vue_type_style_index_0_lang-c459eb3d.js";import"./index.vue_vue_type_script_setup_true_lang-51886f00.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-1fd1782e.js";import"./base-input.vue_vue_type_script_setup_true_lang-b050f550.js";import"./base-column-setting-621e7a01.js";import"./vuedraggable.umd-26863522.js";import"./vue.runtime.esm-bundler-1232cc1d.js";import"./index-02ada13f.js";import"./el-col-140583dd.js";import"./base-filter-090f43d0.js";import"./base-form.vue_vue_type_script_setup_true_lang-fb287e1d.js";import"./el-form-item-5e0298d5.js";import"./useTagViewSetting-2f99752f.js";import"./base-input-number-0d3da238.js";import"./localeData-02727c63.js";import"./index-3346b59c.js";import"./position-0ebdaccb.js";function C(){return{filterColumn:[{fieldName:"time",fieldDesc:"\u767B\u5F55\u65F6\u95F4",fieldType:u.DATE,config:{type:"daterange"}}],tableColumn:[{fieldName:"username",fieldDesc:"\u7528\u6237\u540D"},{fieldName:"ip",fieldDesc:"\u767B\u5F55ip",showOverflowTooltip:!0},{fieldName:"os",fieldDesc:"\u64CD\u4F5C\u7CFB\u7EDF"},{fieldName:"browser",fieldDesc:"\u6D4F\u89C8\u5668"},{fieldName:"time",fieldDesc:"\u767B\u5F55\u65F6\u95F4"}]}}const D={class:"system-dict-container"},it=c({__name:"index",setup(p){const{tableColumn:i,filterColumn:l}=C(),r=m({columns:l,onSearch:e,showOpen:!1,searchInfo:{}}),t=m({columns:i,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:e});f(()=>{e()});async function e(){const{currentPage:n,pageSize:a}=t.pagination,o=await d({...r.searchInfo,currentPage:n,pageSize:a});t.data=o.data.list,t.pagination.total=o.data.total}return(n,a)=>{const o=s;return g(),_("div",D,[F(o,{"table-title":"\u767B\u5F55\u65E5\u5FD7","filter-config":r,"table-config":t},null,8,["filter-config","table-config"])])}}});export{it as default};
