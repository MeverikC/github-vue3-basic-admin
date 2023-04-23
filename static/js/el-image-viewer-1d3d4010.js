import{I as he,bm as V,m as fe,n as le,q as ve,y as ce,d as J,cQ as de,dX as ke,dY as Ie,aR as me,x as pe,bz as _e,r as b,cK as Le,bQ as Ee,v as h,U as oe,a5 as ge,a0 as we,o as k,A as re,f as c,w as E,e as v,C as d,g as e,D as ie,aT as Ce,ab as I,aM as O,aP as ze,c as S,a4 as ue,ch as xe,b1 as Oe,dZ as Se,d_ as Te,E as Ne,d$ as $e,e0 as Ae,b8 as Me,az as Ve,aU as Be,B as K,ac as De,aV as Re,F as ye,br as B,aW as M,e1 as Ye,G as be,ae as Fe,e2 as Xe,ai as Pe,t as He,bx as We,Q as je,e3 as Ze,e4 as Qe}from"./index-a5229f6a.js";import{d as Ue}from"./debounce-4aa199f9.js";import{i as qe}from"./position-8d3f8ae4.js";var Ge="Expected a function";function se(f,_,r){var i=!0,m=!0;if(typeof f!="function")throw new TypeError(Ge);return he(r)&&(i="leading"in r?!!r.leading:i,m="trailing"in r?!!r.trailing:m),Ue(f,_,{leading:i,maxWait:_,trailing:m})}const Ke=()=>V&&/firefox/i.test(window.navigator.userAgent),Je=fe({urlList:{type:le(Array),default:()=>ve([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0}}),ea={close:()=>!0,switch:f=>ce(f)},aa=["src"],ta=J({name:"ElImageViewer"}),na=J({...ta,props:Je,emits:ea,setup(f,{expose:_,emit:r}){const i=f,m={CONTAIN:{name:"contain",icon:de(ke)},ORIGINAL:{name:"original",icon:de(Ie)}},C=Ke()?"DOMMouseScroll":"mousewheel",{t:ee}=me(),l=pe("image-viewer"),{nextZIndex:D}=_e(),p=b(),L=b([]),N=Le(),g=b(!0),u=b(i.initialIndex),$=Ee(m.CONTAIN),o=b({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),R=h(()=>{const{urlList:a}=i;return a.length<=1}),P=h(()=>u.value===0),H=h(()=>u.value===i.urlList.length-1),Y=h(()=>i.urlList[u.value]),ae=h(()=>{const{scale:a,deg:n,offsetX:s,offsetY:w,enableTransition:z}=o.value;let y=s/a,x=w/a;switch(n%360){case 90:case-270:[y,x]=[x,-y];break;case 180:case-180:[y,x]=[-y,-x];break;case 270:case-90:[y,x]=[-x,y];break}const A={transform:`scale(${a}) rotate(${n}deg) translate(${y}px, ${x}px)`,transition:z?"transform .3s":""};return $.value.name===m.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A}),W=h(()=>ce(i.zIndex)?i.zIndex:D());function T(){ne(),r("close")}function te(){const a=se(s=>{switch(s.code){case M.esc:i.closeOnPressEscape&&T();break;case M.space:U();break;case M.left:q();break;case M.up:t("zoomIn");break;case M.right:G();break;case M.down:t("zoomOut");break}}),n=se(s=>{(s.wheelDelta?s.wheelDelta:-s.detail)>0?t("zoomIn",{zoomRate:1.2,enableTransition:!1}):t("zoomOut",{zoomRate:1.2,enableTransition:!1})});N.run(()=>{B(document,"keydown",a),B(document,C,n)})}function ne(){N.stop()}function j(){g.value=!1}function Z(a){g.value=!1,a.target.alt=ee("el.image.error")}function Q(a){if(g.value||a.button!==0||!p.value)return;o.value.enableTransition=!1;const{offsetX:n,offsetY:s}=o.value,w=a.pageX,z=a.pageY,y=se(A=>{o.value={...o.value,offsetX:n+A.pageX-w,offsetY:s+A.pageY-z}}),x=B(document,"mousemove",y);B(document,"mouseup",()=>{x()}),a.preventDefault()}function F(){o.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function U(){if(g.value)return;const a=Ye(m),n=Object.values(m),s=$.value.name,z=(n.findIndex(y=>y.name===s)+1)%a.length;$.value=m[a[z]],F()}function X(a){const n=i.urlList.length;u.value=(a+n)%n}function q(){P.value&&!i.infinite||X(u.value-1)}function G(){H.value&&!i.infinite||X(u.value+1)}function t(a,n={}){if(g.value)return;const{zoomRate:s,rotateDeg:w,enableTransition:z}={zoomRate:1.4,rotateDeg:90,enableTransition:!0,...n};switch(a){case"zoomOut":o.value.scale>.2&&(o.value.scale=Number.parseFloat((o.value.scale/s).toFixed(3)));break;case"zoomIn":o.value.scale<7&&(o.value.scale=Number.parseFloat((o.value.scale*s).toFixed(3)));break;case"clockwise":o.value.deg+=w;break;case"anticlockwise":o.value.deg-=w;break}o.value.enableTransition=z}return oe(Y,()=>{ge(()=>{const a=L.value[0];a!=null&&a.complete||(g.value=!0)})}),oe(u,a=>{F(),r("switch",a)}),we(()=>{var a,n;te(),(n=(a=p.value)==null?void 0:a.focus)==null||n.call(a)}),_({setActiveItem:X}),(a,n)=>(k(),re(Re,{to:"body",disabled:!a.teleported},[c(De,{name:"viewer-fade",appear:""},{default:E(()=>[v("div",{ref_key:"wrapper",ref:p,tabindex:-1,class:d(e(l).e("wrapper")),style:ie({zIndex:e(W)})},[v("div",{class:d(e(l).e("mask")),onClick:n[0]||(n[0]=Ce(s=>a.hideOnClickModal&&T(),["self"]))},null,2),I(" CLOSE "),v("span",{class:d([e(l).e("btn"),e(l).e("close")]),onClick:T},[c(e(O),null,{default:E(()=>[c(e(ze))]),_:1})],2),I(" ARROW "),e(R)?I("v-if",!0):(k(),S(ue,{key:0},[v("span",{class:d([e(l).e("btn"),e(l).e("prev"),e(l).is("disabled",!a.infinite&&e(P))]),onClick:q},[c(e(O),null,{default:E(()=>[c(e(xe))]),_:1})],2),v("span",{class:d([e(l).e("btn"),e(l).e("next"),e(l).is("disabled",!a.infinite&&e(H))]),onClick:G},[c(e(O),null,{default:E(()=>[c(e(Oe))]),_:1})],2)],64)),I(" ACTIONS "),v("div",{class:d([e(l).e("btn"),e(l).e("actions")])},[v("div",{class:d(e(l).e("actions__inner"))},[c(e(O),{onClick:n[1]||(n[1]=s=>t("zoomOut"))},{default:E(()=>[c(e(Se))]),_:1}),c(e(O),{onClick:n[2]||(n[2]=s=>t("zoomIn"))},{default:E(()=>[c(e(Te))]),_:1}),v("i",{class:d(e(l).e("actions__divider"))},null,2),c(e(O),{onClick:U},{default:E(()=>[(k(),re(Ne(e($).icon)))]),_:1}),v("i",{class:d(e(l).e("actions__divider"))},null,2),c(e(O),{onClick:n[3]||(n[3]=s=>t("anticlockwise"))},{default:E(()=>[c(e($e))]),_:1}),c(e(O),{onClick:n[4]||(n[4]=s=>t("clockwise"))},{default:E(()=>[c(e(Ae))]),_:1})],2)],2),I(" CANVAS "),v("div",{class:d(e(l).e("canvas"))},[(k(!0),S(ue,null,Me(a.urlList,(s,w)=>Ve((k(),S("img",{ref_for:!0,ref:z=>L.value[w]=z,key:s,src:s,style:ie(e(ae)),class:d(e(l).e("img")),onLoad:j,onError:Z,onMousedown:Q},null,46,aa)),[[Be,w===u.value]])),128))],2),K(a.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var sa=ye(na,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const la=be(sa),oa=fe({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:le([String,Object])},previewSrcList:{type:le(Array),default:()=>ve([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0}}),ra={load:f=>f instanceof Event,error:f=>f instanceof Event,switch:f=>ce(f),close:()=>!0,show:()=>!0},ia=["src","loading"],ua={key:0},ca=J({name:"ElImage",inheritAttrs:!1}),da=J({...ca,props:oa,emits:ra,setup(f,{emit:_}){const r=f;let i="";const{t:m}=me(),C=pe("image"),ee=Fe(),l=Xe(),D=b(),p=b(!1),L=b(!0),N=b(!1),g=b(),u=b(),$=V&&"loading"in HTMLImageElement.prototype;let o,R;const P=h(()=>ee.style),H=h(()=>{const{fit:t}=r;return V&&t?{objectFit:t}:{}}),Y=h(()=>{const{previewSrcList:t}=r;return Array.isArray(t)&&t.length>0}),ae=h(()=>{const{previewSrcList:t,initialIndex:a}=r;let n=a;return a>t.length-1&&(n=0),n}),W=h(()=>r.loading==="eager"?!1:!$&&r.loading==="lazy"||r.lazy),T=()=>{!V||(L.value=!0,p.value=!1,D.value=r.src)};function te(t){L.value=!1,p.value=!1,_("load",t)}function ne(t){L.value=!1,p.value=!0,_("error",t)}function j(){qe(g.value,u.value)&&(T(),F())}const Z=Qe(j,200);async function Q(){var t;if(!V)return;await ge();const{scrollContainer:a}=r;We(a)?u.value=a:je(a)&&a!==""?u.value=(t=document.querySelector(a))!=null?t:void 0:g.value&&(u.value=Ze(g.value)),u.value&&(o=B(u,"scroll",Z),setTimeout(()=>j(),100))}function F(){!V||!u.value||!Z||(o==null||o(),u.value=void 0)}function U(t){if(!!t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function X(){!Y.value||(R=B("wheel",U,{passive:!1}),i=document.body.style.overflow,document.body.style.overflow="hidden",N.value=!0,_("show"))}function q(){R==null||R(),document.body.style.overflow=i,N.value=!1,_("close")}function G(t){_("switch",t)}return oe(()=>r.src,()=>{W.value?(L.value=!0,p.value=!1,F(),Q()):T()}),we(()=>{W.value?Q():T()}),(t,a)=>(k(),S("div",{ref_key:"container",ref:g,class:d([e(C).b(),t.$attrs.class]),style:ie(e(P))},[D.value!==void 0&&!p.value?(k(),S("img",Pe({key:0},e(l),{src:D.value,loading:t.loading,style:e(H),class:[e(C).e("inner"),e(Y)&&e(C).e("preview"),L.value&&e(C).is("loading")],onClick:X,onLoad:te,onError:ne}),null,16,ia)):I("v-if",!0),L.value||p.value?(k(),S("div",{key:1,class:d(e(C).e("wrapper"))},[L.value?K(t.$slots,"placeholder",{key:0},()=>[v("div",{class:d(e(C).e("placeholder"))},null,2)]):p.value?K(t.$slots,"error",{key:1},()=>[v("div",{class:d(e(C).e("error"))},He(e(m)("el.image.error")),3)]):I("v-if",!0)],2)):I("v-if",!0),e(Y)?(k(),S(ue,{key:2},[N.value?(k(),re(e(la),{key:0,"z-index":t.zIndex,"initial-index":e(ae),infinite:t.infinite,"url-list":t.previewSrcList,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:q,onSwitch:G},{default:E(()=>[t.$slots.viewer?(k(),S("div",ua,[K(t.$slots,"viewer")])):I("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):I("v-if",!0)],64)):I("v-if",!0)],6))}});var fa=ye(da,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const ga=be(fa);export{ga as E};
