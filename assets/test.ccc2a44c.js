import{bM as e}from"./index.c50eeaf2.js";var s=(t=>(t.GET_TEST="/test/getTest",t.POST_TEST="/test/postTest",t.PUT_TEST="/test/putTest",t.DELETE_TEST="/test/deleteTest",t.SAME_TEST="/test/sameTest",t.RETRY_TEST="/test/retryTest",t))(s||{});const T=t=>e.get("/test/getTest",t),r=t=>e.post("/test/postTest",t,{successMessage:!0}),o=t=>e.put("/test/putTest",t),a=t=>e.delete("/test/deleteTest",t,{errorMessage:!1}),_=t=>e.get("/test/sameTest",t,{cancelSame:!0}),p=t=>e.get("/test/retryTest",t,{isRetry:!0}),u=Object.freeze(Object.defineProperty({__proto__:null,Api:s,getTestApi:T,postTestApi:r,putTestApi:o,deleteTestApi:a,sameTestApi:_,retryApi:p},Symbol.toStringTag,{value:"Module"}));export{u as _,o as a,a as d,T as g,r as p,p as r,_ as s};
