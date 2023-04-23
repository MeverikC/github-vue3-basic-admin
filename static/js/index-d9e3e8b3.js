import{_ as S}from"./index-6bd88d8f.js";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-4cee302a.js";import{e as I,a as M,b as P,d as O,c as $}from"./role-a342f0bb.js";import{_ as v}from"./base-dialog.vue_vue_type_style_index_0_lang-ecef4ed7.js";import{_ as A}from"./base-form.vue_vue_type_script_setup_true_lang-d3f27f8b.js";import{d as C,r as _,b,a0 as w,v as L,o as E,A as U,w as h,f,g as i,a5 as q,c2 as T,c as K,i as j,eh as z}from"./index-a5229f6a.js";import{E as V}from"./el-tree-774f1170.js";import"./el-checkbox-54a9f3c2.js";import{F as c}from"./componentEnum-148c49ad.js";import{S as G}from"./basic-2a5cf92e.js";import{g as H}from"./menu-18c64f2f.js";import"./base-table-ff704138.js";/* empty css                 */import"./el-tag-66fb40cd.js";import"./base-select.vue_vue_type_script_lang-0336ccbc.js";import"./el-popper-7ddaae8a.js";import"./_Uint8Array-ed197101.js";import"./debounce-4aa199f9.js";import"./index-d6a23b34.js";import"./el-empty-d27bc5f1.js";import"./el-space-92dc627f.js";/* empty css                  *//* empty css                        */import"./el-dropdown-item-1aa73ca8.js";import"./dropdown-897b280d.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-5eb0b80f.js";import"./base-input.vue_vue_type_script_setup_true_lang-aaf651f6.js";import"./base-column-setting-f33bc4de.js";import"./vuedraggable.umd-25988209.js";import"./vue.runtime.esm-bundler-b17b7929.js";import"./index-d874a39f.js";import"./el-col-cf5c829b.js";import"./base-filter-e2f72717.js";import"./useTagViewSetting-beac78c4.js";import"./el-form-item-ef644bcd.js";import"./index-89fa7c11.js";import"./base-input-number-c84da128.js";import"./localeData-138b15ef.js";import"./index-08c2348e.js";import"./position-8d3f8ae4.js";function N(a){const m=[{fieldName:"roleName",fieldDesc:"\u89D2\u8272\u540D\u79F0",fieldType:c.INPUT},{fieldName:"status",fieldDesc:"\u72B6\u6001",fieldType:c.SELECT,config:{options:G}}],d=[{fieldName:"id",fieldDesc:"id",showOverflowTooltip:!0},{fieldName:"roleName",fieldDesc:"\u89D2\u8272\u540D\u79F0"},{fieldName:"role",fieldDesc:"\u89D2\u8272\u6807\u8BC6",formType:"tag"},{fieldName:"status",fieldDesc:"\u72B6\u6001",formType:"switch",callFunction:a==null?void 0:a.changeSwitch},{fieldName:"createTime",fieldDesc:"\u521B\u5EFA\u65F6\u95F4",width:160},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",showOverflowTooltip:!0},{fieldName:"#",fieldDesc:"\u64CD\u4F5C",formType:"operation",width:175,fixed:"right",operation:[{icon:"edit",label:"\u7F16\u8F91",callFunction:a==null?void 0:a.edit},{icon:"delete",label:"\u5220\u9664",confirm:!0,callFunction:a==null?void 0:a.delete}]}],l=[{fieldName:"roleName",fieldDesc:"\u89D2\u8272\u540D\u79F0",fieldType:c.INPUT},{fieldName:"role",fieldDesc:"\u89D2\u8272\u6807\u8BC6",fieldType:c.INPUT},{fieldName:"menuIds",fieldDesc:"\u83DC\u5355",fieldType:c.SLOT},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",fieldType:c.INPUT,config:{type:"textarea"}}];return{filterColumn:m,tableColumn:d,dialogColumn:l}}const J=C({__name:"RoleDialog",emits:["success"],setup(a,{expose:m,emit:d}){const{success:l}=T(),{dialogColumn:p}=N(),u=_(),r=_(),s=_(),e=b({isEdit:!1,treeData:[],defaultProps:{children:"children",label:"menuName"},formModel:{}}),D={roleName:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",trigger:["blur","change"]}],role:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6",trigger:["blur","change"]}],menuIds:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355",trigger:["blur","change"]}]};w(async()=>{const t=await H();e.treeData=t.data});const y=L(()=>e.isEdit?"\u4FEE\u6539\u89D2\u8272":"\u65B0\u589E\u89D2\u8272"),F=(t={})=>{i(u).showDialog(),q(()=>{i(r).instance.resetFields(),e.isEdit=!!t.id,e.isEdit?(Object.assign(e.formModel,t),i(s).setCheckedKeys(t.menuIds)):i(s).setCheckedKeys([])})},o=()=>{i(u).hideDialog()},n=async t=>{Object.assign(e.formModel,{menuIds:i(s).getCheckedKeys()}),await i(r).instance.validate(async g=>{if(!!g){t(!0);try{e.isEdit?await I(e.formModel):await M(e.formModel),l(e.isEdit?"\u4FEE\u6539\u6210\u529F":"\u65B0\u589E\u6210\u529F\uFF01"),d("success"),o()}finally{t(!1)}}})};return m({showDialog:F,hideDialog:o}),(t,g)=>{const B=V,R=A,k=v;return E(),U(k,{ref_key:"baseDialogRef",ref:u,width:"560px",title:i(y),onSave:n},{default:h(()=>[f(R,{ref_key:"baseFormRef",ref:r,columns:i(p),rules:D,model:e.formModel},{menuIds:h(()=>[f(B,{ref_key:"roleTreeRef",ref:s,"node-key":"id","highlight-current":"",data:e.treeData,props:e.defaultProps,"show-checkbox":"","expand-on-click-node":!1},null,8,["data","props"])]),_:1},8,["columns","model"])]),_:1},8,["title"])}}}),Q={class:"system-role-container"},W=C({name:"Role"}),ve=C({...W,setup(a){const{tableColumn:m,filterColumn:d}=N({edit:D,delete:y,changeSwitch:F}),{success:l}=T(),p=b({columns:d,onSearch:s,showOpen:!1,searchInfo:{}}),u=b({columns:m,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:s}),r=_();w(()=>{s()});async function s(){const{currentPage:o,pageSize:n}=u.pagination,t=await P({...p.searchInfo,currentPage:o,pageSize:n});u.data=t.data.list||[],u.pagination.total=t.data.total}function e(){i(r).showDialog()}function D(o){i(r).showDialog(o.row)}async function y(o){const{id:n}=o.row;await O({id:n}),l("\u5220\u9664\u6210\u529F"),s()}async function F(o){return z(`\u786E\u8BA4\u8981${o.status===0?"\u542F\u7528":"\u505C\u7528"}\u8BE5\u89D2\u8272\u5417?`).then(async()=>{await $({id:o.id}),l(`${o.status===0?"\u542F\u7528":"\u505C\u7528"}\u6210\u529F}`),s()})}return(o,n)=>{const t=x,g=S;return E(),K("div",Q,[f(g,{"table-title":"\u89D2\u8272\u5217\u8868","filter-config":p,"table-config":u},{buttons:h(()=>[f(t,{type:"primary",onClick:e},{default:h(()=>[j("\u65B0\u589E\u89D2\u8272")]),_:1})]),_:1},8,["filter-config","table-config"]),f(J,{ref_key:"roleDialogRef",ref:r,onSuccess:s},null,512)])}}});export{ve as default};