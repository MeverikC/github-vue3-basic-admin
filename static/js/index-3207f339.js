import{_ as U}from"./index-6bd88d8f.js";import{_ as R}from"./index.vue_vue_type_script_setup_true_lang-4cee302a.js";import{e as P,a as $,g as A,d as L,c as O}from"./user-1382ace4.js";import{F as f}from"./componentEnum-148c49ad.js";import{g as N}from"./role-a342f0bb.js";import{g as x}from"./dept-d4a17d73.js";import{S as V}from"./basic-2a5cf92e.js";import{_ as j}from"./index-d874a39f.js";import{d as T,b as F,r as E,a0 as B,U as K,o as C,A as k,w,f as _,g as s,l as I,v as q,a5 as z,be as M,c2 as S,c as H,e as G,i as J,eh as Q}from"./index-a5229f6a.js";import{E as W}from"./el-tree-774f1170.js";import"./el-checkbox-54a9f3c2.js";import{_ as X}from"./base-input.vue_vue_type_script_setup_true_lang-aaf651f6.js";import{_ as Y}from"./base-dialog.vue_vue_type_style_index_0_lang-ecef4ed7.js";import{_ as Z}from"./base-form.vue_vue_type_script_setup_true_lang-d3f27f8b.js";import"./base-table-ff704138.js";/* empty css                 */import"./el-tag-66fb40cd.js";import"./base-select.vue_vue_type_script_lang-0336ccbc.js";import"./el-popper-7ddaae8a.js";import"./_Uint8Array-ed197101.js";import"./debounce-4aa199f9.js";import"./index-d6a23b34.js";import"./el-empty-d27bc5f1.js";import"./el-space-92dc627f.js";/* empty css                  *//* empty css                        */import"./el-dropdown-item-1aa73ca8.js";import"./dropdown-897b280d.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-5eb0b80f.js";import"./base-column-setting-f33bc4de.js";import"./vuedraggable.umd-25988209.js";import"./vue.runtime.esm-bundler-b17b7929.js";import"./base-filter-e2f72717.js";import"./useTagViewSetting-beac78c4.js";import"./base-input-number-c84da128.js";import"./localeData-138b15ef.js";import"./index-08c2348e.js";import"./position-8d3f8ae4.js";import"./el-col-cf5c829b.js";import"./index-89fa7c11.js";import"./el-form-item-ef644bcd.js";function v(r){const m=[{fieldName:"username",fieldDesc:"\u7528\u6237\u540D",fieldType:f.INPUT},{fieldName:"role",fieldDesc:"\u89D2\u8272",fieldType:f.SELECT,config:{api:N,labelKey:"roleName",valueKey:"role"}},{fieldName:"status",fieldDesc:"\u72B6\u6001",fieldType:f.SELECT,config:{options:V}}],o=[{fieldName:"id",fieldDesc:"id",showOverflowTooltip:!0},{fieldName:"username",fieldDesc:"\u7528\u6237\u540D"},{fieldName:"deptName",fieldDesc:"\u90E8\u95E8",showOverflowTooltip:!0},{fieldName:"role",fieldDesc:"\u89D2\u8272",formType:"tag"},{fieldName:"status",fieldDesc:"\u72B6\u6001",formType:"switch",callFunction:r==null?void 0:r.changeSwitch},{fieldName:"createTime",fieldDesc:"\u521B\u5EFA\u65F6\u95F4",width:160},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",showOverflowTooltip:!0,active:!1},{fieldName:"#",fieldDesc:"\u64CD\u4F5C",formType:"operation",width:155,fixed:"right",operation:[{icon:"edit",label:"\u7F16\u8F91",callFunction:r==null?void 0:r.edit},{icon:"delete",label:"\u5220\u9664",confirm:!0,callFunction:r==null?void 0:r.delete}]}],l=[{fieldName:"username",fieldDesc:"\u7528\u6237\u540D",fieldType:f.INPUT},{fieldName:"role",fieldDesc:"\u89D2\u8272",fieldType:f.SELECT,config:{api:N,valueKey:"role",multiple:!0}},{fieldName:"deptId",fieldDesc:"\u6240\u5C5E\u90E8\u95E8",fieldType:f.SELECT,config:{api:x,tree:!0,multiple:!0,init:!0,nodeKey:"deptId",props:{label:"deptName",children:"children"}}},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",fieldType:f.INPUT,config:{type:"textarea"}}];return{filterColumn:m,tableColumn:o,dialogColumn:l}}const ee=T({__name:"DeptTree",emits:["filter"],setup(r,{emit:m}){const o=F({keyword:"",treeData:[],defaultProps:{children:"children",label:"deptName"}}),l=E();B(()=>{c()});const c=async()=>{const e=await x();o.treeData=e.data},p=(e,u)=>e?u[o.defaultProps.label].includes(e):!0,d=e=>{m("filter",e.deptId)};return K(()=>o.keyword,e=>{s(l).filter(e)}),(e,u)=>{const h=X,D=W,y=j;return C(),k(y,{title:"\u7EC4\u7EC7\u67B6\u6784",showHelp:"",helpText:"\u70B9\u51FB\u90E8\u95E8\u53EF\u663E\u793A\u5BF9\u5E94\u7684\u7528\u6237",class:"account-dept"},{extra:w(()=>[_(h,{modelValue:o.keyword,"onUpdate:modelValue":u[0]||(u[0]=g=>o.keyword=g),size:"small",style:{width:"145px"}},null,8,["modelValue"])]),default:w(()=>[_(D,{ref_key:"deptTreeRef",ref:l,"node-key":"deptId","highlight-current":"",data:o.treeData,props:o.defaultProps,"default-expand-all":"","expand-on-click-node":!1,onNodeClick:d,"filter-node-method":p},null,8,["data","props"])]),_:1})}}});const te=I(ee,[["__scopeId","data-v-1106f145"]]),oe=T({__name:"UserDialog",emits:["success"],setup(r,{expose:m,emit:o}){const{success:l}=S(),c=F({}),{dialogColumn:p}=v(),d=E(),e=E(),u=E(!1),h={username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:["blur","change"]}],role:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u89D2\u8272",trigger:["blur","change"]}],deptId:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u90E8\u95E8",trigger:["blur","change"]}]},D=q(()=>s(u)?"\u4FEE\u6539\u7528\u6237":"\u65B0\u589E\u7528\u6237"),y=(a={})=>{s(d).showDialog(),z(()=>{var n,i;s(e).instance.resetFields(),u.value=!!a.id,s(u)&&Object.assign(c,a,{role:(n=a.role)==null?void 0:n.split(","),deptId:(i=a.deptId)==null?void 0:i.split(",").map(b=>parseFloat(b))})})},g=()=>{s(d).hideDialog()},t=async a=>{await s(e).instance.validate(async n=>{if(!n)return;const i=M(c);Object.assign(i,{deptId:i.deptId.join(),role:i.role.join()}),a(!0);try{s(u)?await P(i):await $(i),l(s(u)?"\u4FEE\u6539\u6210\u529F":"\u65B0\u589E\u6210\u529F\uFF01"),o("success"),g()}finally{a(!1)}})};return m({showDialog:y,hideDialog:g}),(a,n)=>{const i=Z,b=Y;return C(),k(b,{ref_key:"baseDialogRef",ref:d,width:"560px",title:s(D),onSave:t},{default:w(()=>[_(i,{ref_key:"baseFormRef",ref:e,columns:s(p),rules:h,model:c},null,8,["columns","model"])]),_:1},8,["title"])}}}),ae={class:"system-account-container flex"},se={class:"account-user"},re=T({name:"Account"}),ue=T({...re,setup(r){const{tableColumn:m,filterColumn:o}=v({edit:D,delete:y,changeSwitch:g}),{success:l}=S(),c=F({columns:o,showOpen:!1,onSearch:e,searchInfo:{deptId:""}}),p=F({columns:m,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:e}),d=E();B(()=>{e()});async function e(){const{currentPage:t,pageSize:a}=p.pagination,n=await A({...c.searchInfo,currentPage:t,pageSize:a});p.data=n.data.list||[],p.pagination.total=n.data.total}function u(t){c.searchInfo.deptId=t,e()}function h(){s(d).showDialog()}function D(t){s(d).showDialog(t.row)}async function y(t){const{id:a}=t.row;await L({id:a}),l("\u5220\u9664\u6210\u529F"),e()}async function g(t){return Q(`\u786E\u8BA4\u8981${t.status===0?"\u542F\u7528":"\u505C\u7528"}\u8BE5\u7528\u6237\u5417?`).then(async()=>{await O({id:t.id}),l(`${t.status===0?"\u542F\u7528":"\u505C\u7528"}\u6210\u529F`),e()})}return(t,a)=>{const n=R,i=U;return C(),H("div",ae,[_(te,{onFilter:u}),G("div",se,[_(i,{"table-title":"\u7528\u6237\u5217\u8868","filter-config":c,"table-config":p},{buttons:w(()=>[_(n,{type:"primary",onClick:h},{default:w(()=>[J("\u65B0\u589E\u7528\u6237")]),_:1})]),_:1},8,["filter-config","table-config"])]),_(oe,{ref_key:"userDialogRef",ref:d,onSuccess:e},null,512)])}}});const Je=I(ue,[["__scopeId","data-v-47514756"]]);export{Je as default};
