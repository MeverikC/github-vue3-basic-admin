import{_ as l}from"./index-c5485030.js";import{F as u}from"./componentEnum-f5a9c187.js";import{m as c,a as f}from"./basic-2a5cf92e.js";import{eo as d,d as C,b as p,a0 as g,ep as F,o as _,c as D,f as h}from"./index-3644c3c9.js";import"./base-table-da980dad.js";/* empty css                 */import"./el-tag-077c4cf1.js";import"./base-select.vue_vue_type_script_lang-99b27fd5.js";import"./el-popper-d8a7d137.js";import"./el-tree-dab2ba53.js";import"./index-bdaca420.js";import"./el-checkbox-33797f2d.js";import"./_Uint8Array-1c46b8f5.js";import"./debounce-8ddef7c7.js";import"./index-0cbcc263.js";import"./el-empty-095e9883.js";import"./el-space-92caf033.js";/* empty css                  *//* empty css                        */import"./el-dropdown-item-e2d736e4.js";import"./dropdown-90869620.js";import"./base-dialog.vue_vue_type_style_index_0_lang-c459eb3d.js";import"./index.vue_vue_type_script_setup_true_lang-51886f00.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-1fd1782e.js";import"./base-input.vue_vue_type_script_setup_true_lang-b050f550.js";import"./base-column-setting-621e7a01.js";import"./vuedraggable.umd-26863522.js";import"./vue.runtime.esm-bundler-1232cc1d.js";import"./index-02ada13f.js";import"./el-col-140583dd.js";import"./base-filter-090f43d0.js";import"./base-form.vue_vue_type_script_setup_true_lang-fb287e1d.js";import"./el-form-item-5e0298d5.js";import"./useTagViewSetting-2f99752f.js";import"./base-input-number-0d3da238.js";import"./localeData-02727c63.js";import"./index-3346b59c.js";import"./position-0ebdaccb.js";function b(){return{filterColumn:[{fieldName:"method",fieldDesc:"\u8BF7\u6C42\u65B9\u5F0F",fieldType:u.SELECT,config:{options:c}},{fieldName:"time",fieldDesc:"\u64CD\u4F5C\u65F6\u95F4",fieldType:u.DATE,config:{type:"daterange"}}],tableColumn:[{fieldName:"url",fieldDesc:"\u8BF7\u6C42\u63A5\u53E3",showOverflowTooltip:!0},{fieldName:"method",fieldDesc:"\u8BF7\u6C42\u65B9\u5F0F",showOverflowTooltip:!0},{fieldName:"user",fieldDesc:"\u64CD\u4F5C\u4EBA\u5458"},{fieldName:"userIp",fieldDesc:"\u64CD\u4F5CIP"},{fieldName:"status",fieldDesc:"\u72B6\u6001",formType:"tag",type:t=>t.status===500?"danger":"",formatter:t=>d(f,t.status)},{fieldName:"time",fieldDesc:"\u64CD\u4F5C\u65F6\u95F4"}]}}const B={class:"system-dict-container"},nt=C({__name:"index",setup(s){const{tableColumn:a,filterColumn:t}=b(),r=p({columns:t,onSearch:i,showOpen:!1,searchInfo:{}}),e=p({columns:a,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:i});g(()=>{i()});async function i(){const{currentPage:m,pageSize:n}=e.pagination,o=await F({...r.searchInfo,currentPage:m,pageSize:n});e.data=o.data.list,e.pagination.total=o.data.total}return(m,n)=>{const o=l;return _(),D("div",B,[h(o,{"table-title":"\u64CD\u4F5C\u65E5\u5FD7","filter-config":r,"table-config":e},null,8,["filter-config","table-config"])])}}});export{nt as default};
