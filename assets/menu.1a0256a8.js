import{dC as s}from"./index.c50eeaf2.js";const i=()=>new Promise(t=>{t({code:200,data:n(s),message:""})});function n(t,o=""){const r=[];return t.forEach(e=>{if(e.meta&&e.meta.permission){const a={id:Math.floor(Math.random()*1e4),permission:e.meta.permission,menuName:e.meta.title,icon:e.meta.icon,sort:e.meta.sort,path:o+e.path,status:1,createTime:"2023-02-02 10:13:12"};e.path==="account"&&(a.children=[{id:Math.floor(Math.random()*1e4),permission:"admin_account:add",menuName:"\u65B0\u589E\u7528\u6237",icon:"",sort:1,path:"",status:1,createTime:"2023-02-02 10:13:12"}]),e.path==="role"&&(a.children=[{id:Math.floor(Math.random()*1e4),permission:"admin_role:add",menuName:"\u65B0\u589E\u89D2\u8272",icon:"",sort:1,path:"",status:1,createTime:"2023-02-02 10:13:12"}]),e.children&&(a.children=n(e.children,o+e.path+"/")),r.push(a)}}),r}const u=Object.freeze(Object.defineProperty({__proto__:null,getMenuList:i},Symbol.toStringTag,{value:"Module"}));export{u as _,i as g};
