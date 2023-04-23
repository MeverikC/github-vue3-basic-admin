import{m as N,R as A,d as S,v as u,x as D,r as O,g as a,a9 as j,o as v,A as R,w as g,c as y,C as T,t as P,ab as k,B as V,i as q,ai as x,F as H,c3 as M,G as W,c4 as G,b as J,be as E,U as z,D as K,f as d,e as F,a4 as Q,b8 as X,bd as Y,_ as Z}from"./index-a5229f6a.js";import{u as I,d as c,E as ee,b as oe}from"./el-popper-7ddaae8a.js";import{_ as se}from"./base-input.vue_vue_type_script_setup_true_lang-aaf651f6.js";import{d as L}from"./dropdown-897b280d.js";const te=N({trigger:I.trigger,placement:L.placement,disabled:I.disabled,visible:c.visible,transition:c.transition,popperOptions:L.popperOptions,tabindex:L.tabindex,content:c.content,popperStyle:c.popperStyle,popperClass:c.popperClass,enterable:{...c.enterable,default:!0},effect:{...c.effect,default:"light"},teleported:c.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),ne={"update:visible":s=>A(s),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},re="onUpdate:visible",ie=S({name:"ElPopover"}),ce=S({...ie,props:te,emits:ne,setup(s,{expose:t,emit:n}){const o=s,b=u(()=>o[re]),l=D("popover"),p=O(),r=u(()=>{var e;return(e=a(p))==null?void 0:e.popperRef}),_=u(()=>[{width:j(o.width)},o.popperStyle]),m=u(()=>[l.b(),o.popperClass,{[l.m("plain")]:!!o.content}]),f=u(()=>o.transition===`${l.namespace.value}-fade-in-linear`),h=()=>{var e;(e=p.value)==null||e.hide()},w=()=>{n("before-enter")},i=()=>{n("before-leave")},C=()=>{n("after-enter")},B=()=>{n("update:visible",!1),n("after-leave")};return t({popperRef:r,hide:h}),(e,Io)=>(v(),R(a(ee),x({ref_key:"tooltipRef",ref:p},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":a(m),"popper-style":a(_),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":a(f),"onUpdate:visible":a(b),onBeforeShow:w,onBeforeHide:i,onShow:C,onHide:B}),{content:g(()=>[e.title?(v(),y("div",{key:0,class:T(a(l).e("title")),role:"title"},P(e.title),3)):k("v-if",!0),V(e.$slots,"default",{},()=>[q(P(e.content),1)])]),default:g(()=>[e.$slots.reference?V(e.$slots,"reference",{key:0}):k("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var ae=H(ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const $=(s,t)=>{const n=t.arg||t.value,o=n==null?void 0:n.popperRef;o&&(o.triggerRef=s)};var le={mounted(s,t){$(s,t)},updated(s,t){$(s,t)}};const _e="popover",ve=M(le,_e),ge=W(ae,{directive:ve});const pe=""+new URL("../svg/403-adf6dfcb.svg",import.meta.url).href,ue=""+new URL("../svg/404-c7af1c00.svg",import.meta.url).href,me=""+new URL("../svg/500-5957edea.svg",import.meta.url).href,fe=""+new URL("../svg/about-e243b5a1.svg",import.meta.url).href,de=""+new URL("../svg/approval-712f5717.svg",import.meta.url).href,be=""+new URL("../svg/clear-d7b2ab0c.svg",import.meta.url).href,he=""+new URL("../svg/click-12965bbe.svg",import.meta.url).href,we=""+new URL("../svg/close-5d8818fe.svg",import.meta.url).href,Le=""+new URL("../svg/column-38dce2c2.svg",import.meta.url).href,Ue=""+new URL("../svg/comp-b309495e.svg",import.meta.url).href,Re=""+new URL("../svg/confirm-e2196006.svg",import.meta.url).href,ye=""+new URL("../svg/dark-d59435e2.svg",import.meta.url).href,ke=""+new URL("../svg/dashboard-932e7ff8.svg",import.meta.url).href,Ve=""+new URL("../svg/deliver-d0a0f305.svg",import.meta.url).href,Se=""+new URL("../svg/down-d5238fc5.svg",import.meta.url).href,Ce=""+new URL("../svg/editPassword-2c094081.svg",import.meta.url).href,Pe=""+new URL("../svg/empty-c60546d6.svg",import.meta.url).href,Ee=""+new URL("../svg/esc-338b390f.svg",import.meta.url).href,ze=""+new URL("../svg/exit-d42f8f4a.svg",import.meta.url).href,Fe=""+new URL("../svg/export-4570dc41.svg",import.meta.url).href,Ie=""+new URL("../svg/feedback-ea2eb66a.svg",import.meta.url).href,$e=""+new URL("../svg/filter-dc97bc7d.svg",import.meta.url).href,Be=""+new URL("../svg/fold-a9ccbc43.svg",import.meta.url).href,Ne=""+new URL("../svg/fullOutScreen-b1159bab.svg",import.meta.url).href,Ae=""+new URL("../svg/fullScreen-060457a9.svg",import.meta.url).href,De=""+new URL("../svg/func-c3eb97e7.svg",import.meta.url).href,Oe=""+new URL("../svg/gitee-3152424a.svg",import.meta.url).href,je=""+new URL("../svg/github-21b2e275.svg",import.meta.url).href,Te=""+new URL("../svg/good-4323dc8f.svg",import.meta.url).href,qe=""+new URL("../svg/help-da592e7a.svg",import.meta.url).href,xe=""+new URL("../svg/icon-57950995.svg",import.meta.url).href,He=""+new URL("../svg/light-8b8f58a8.svg",import.meta.url).href,Me=""+new URL("../svg/location-944ca3d5.svg",import.meta.url).href,We=""+new URL("../svg/log-64a5f06f.svg",import.meta.url).href,Ge=""+new URL("../svg/logo-f239f64d.svg",import.meta.url).href,Je=""+new URL("../svg/money-9f2f92d4.svg",import.meta.url).href,Ke=""+new URL("../svg/more-5eb0bad7.svg",import.meta.url).href,Qe=""+new URL("../svg/nested-87b91735.svg",import.meta.url).href,Xe=""+new URL("../svg/other-ec3ee058.svg",import.meta.url).href,Ye=""+new URL("../svg/out-fe6d622e.svg",import.meta.url).href,Ze=""+new URL("../svg/page-7bee52c8.svg",import.meta.url).href,eo=""+new URL("../svg/permission-ecaa5e60.svg",import.meta.url).href,oo=""+new URL("../svg/qq-baed2093.svg",import.meta.url).href,so=""+new URL("../svg/read-21ce77bd.svg",import.meta.url).href,to=""+new URL("../svg/remind-ae2b596a.svg",import.meta.url).href,no=""+new URL("../svg/search-85527585.svg",import.meta.url).href,ro=""+new URL("../svg/setting-595b402d.svg",import.meta.url).href,io=""+new URL("../svg/size-301a9596.svg",import.meta.url).href,co=""+new URL("../svg/sizeMini-6cc0516a.svg",import.meta.url).href,ao=""+new URL("../svg/sizePlus-172f8002.svg",import.meta.url).href,lo=""+new URL("../svg/textSize-ffb38cef.svg",import.meta.url).href,_o=""+new URL("../svg/unfold-2ab6069a.svg",import.meta.url).href,vo=""+new URL("../svg/up-e089505e.svg",import.meta.url).href,go=""+new URL("../svg/view-d52c924f.svg",import.meta.url).href,po=""+new URL("../svg/warning-2a106c0f.svg",import.meta.url).href,uo=""+new URL("../svg/weixin-7ab915e3.svg",import.meta.url).href,mo=""+new URL("../svg/zhifubao-c570ee6a.svg",import.meta.url).href,fo="",bo="",ho="iconfont",wo="icon-",Lo="",Uo=[{icon_id:"1327489",name:"love",font_class:"love",unicode:"e60b",unicode_decimal:58891},{icon_id:"1330571",name:"\u5FAE\u535A",font_class:"weibo",unicode:"e73c",unicode_decimal:59196},{icon_id:"1727433",name:"209\u7535\u8BDD-\u5706\u6846",font_class:"dianhua-yuankuang",unicode:"e8be",unicode_decimal:59582},{icon_id:"6078867",name:"\u4EAC\u4E1C-01",font_class:"jingdong-",unicode:"e643",unicode_decimal:58947},{icon_id:"10905645",name:"\u652F\u4ED8\u5B9D",font_class:"zhifubao",unicode:"e636",unicode_decimal:58934},{icon_id:"15559700",name:"\u6DD8\u5B9D",font_class:"shejiaotubiao-44",unicode:"e648",unicode_decimal:58952},{icon_id:"15933094",name:"\u5FAE\u4FE1",font_class:"weixin",unicode:"e607",unicode_decimal:58887}],Ro={id:fo,name:bo,font_family:ho,css_prefix_text:wo,description:Lo,glyphs:Uo},yo=()=>{const s=Object.assign({"/src/icons/403.svg":pe,"/src/icons/404.svg":ue,"/src/icons/500.svg":me,"/src/icons/about.svg":fe,"/src/icons/approval.svg":de,"/src/icons/clear.svg":be,"/src/icons/click.svg":he,"/src/icons/close.svg":we,"/src/icons/column.svg":Le,"/src/icons/comp.svg":Ue,"/src/icons/confirm.svg":Re,"/src/icons/dark.svg":ye,"/src/icons/dashboard.svg":ke,"/src/icons/deliver.svg":Ve,"/src/icons/down.svg":Se,"/src/icons/editPassword.svg":Ce,"/src/icons/empty.svg":Pe,"/src/icons/esc.svg":Ee,"/src/icons/exit.svg":ze,"/src/icons/export.svg":Fe,"/src/icons/feedback.svg":Ie,"/src/icons/filter.svg":$e,"/src/icons/fold.svg":Be,"/src/icons/fullOutScreen.svg":Ne,"/src/icons/fullScreen.svg":Ae,"/src/icons/func.svg":De,"/src/icons/gitee.svg":Oe,"/src/icons/github.svg":je,"/src/icons/good.svg":Te,"/src/icons/help.svg":qe,"/src/icons/icon.svg":xe,"/src/icons/light.svg":He,"/src/icons/location.svg":Me,"/src/icons/log.svg":We,"/src/icons/logo.svg":Ge,"/src/icons/money.svg":Je,"/src/icons/more.svg":Ke,"/src/icons/nested.svg":Qe,"/src/icons/other.svg":Xe,"/src/icons/out.svg":Ye,"/src/icons/page.svg":Ze,"/src/icons/permission.svg":eo,"/src/icons/qq.svg":oo,"/src/icons/read.svg":so,"/src/icons/remind.svg":to,"/src/icons/search.svg":no,"/src/icons/setting.svg":ro,"/src/icons/size.svg":io,"/src/icons/sizeMini.svg":co,"/src/icons/sizePlus.svg":ao,"/src/icons/textSize.svg":lo,"/src/icons/unfold.svg":_o,"/src/icons/up.svg":vo,"/src/icons/view.svg":go,"/src/icons/warning.svg":po,"/src/icons/weixin.svg":uo,"/src/icons/zhifubao.svg":mo}),t="([^/]*)(\\.\\w+)$";return Object.keys(s).map(n=>{var o;return(o=n.match(t))==null?void 0:o[1]})},ko=()=>Object.keys(G),Vo=()=>Ro.glyphs.map(s=>s.font_class),So=ko(),Co=yo(),Po=Vo(),U=[...So,...Co.map(s=>`svg-${s}`),...Po.map(s=>`icon-${s}`)],Eo={class:"base-icon-content"},zo={class:"base-icon-list"},Fo=["onClick"],Do=S({__name:"base-icon-picker",props:{modelValue:{type:String},width:{type:String,default:"100%"},popoverWidth:{type:Number,default:300}},emits:["update:modelValue","change"],setup(s,{emit:t}){const n=s,o=J({iconValue:"",iconFilter:"",iconList:E(U)}),b=Y(p,650);function l(r){o.iconValue=r}function p(){o.iconList=o.iconFilter?U.filter(r=>r.toLowerCase().includes(o.iconFilter.toLowerCase())):E(U)}return z(()=>n.modelValue,()=>{o.iconValue=n.modelValue},{immediate:!0}),z(()=>o.iconValue,r=>{t("update:modelValue",r),t("change",r)}),(r,_)=>{const m=Z,f=se,h=oe,w=ge;return v(),R(w,{placement:"bottom",width:s.popoverWidth,trigger:"click"},{reference:g(()=>[r.$slots.reference?k("",!0):(v(),R(f,{key:0,modelValue:o.iconValue,"onUpdate:modelValue":_[0]||(_[0]=i=>o.iconValue=i),class:"base-icon-picker",style:K({width:s.width}),placeholder:"\u70B9\u51FB\u53F3\u4FA7\u9009\u62E9\u56FE\u6807",readonly:""},{append:g(()=>[d(m,{icon:o.iconValue||"svg-click",size:20},null,8,["icon"])]),_:1},8,["modelValue","style"])),V(r.$slots,"reference")]),default:g(()=>[F("div",Eo,[d(f,{modelValue:o.iconFilter,"onUpdate:modelValue":_[1]||(_[1]=i=>o.iconFilter=i),placeholder:"\u641C\u7D22\u56FE\u6807",onInput:a(b)},null,8,["modelValue","onInput"]),d(h,{height:"230px",style:{"margin-top":"8px"}},{default:g(()=>[F("div",zo,[(v(!0),y(Q,null,X(o.iconList,i=>(v(),y("div",{class:"icon-item flex-center",key:i,onClick:C=>l(i)},[d(m,{icon:i,size:16},null,8,["icon"])],8,Fo))),128))])]),_:1})])]),_:3},8,["width"])}}});export{Do as _,So as e,Po as i,Co as s};
