import{bm as Ae,d as I,x as W,bQ as re,r as b,U as E,a0 as X,F as z,o as M,c as A,e as $,C as g,D as L,aw as te,v as T,m as Pe,ar as Fe,n as Le,as as ee,Q,by as Z,bR as Ve,bS as ie,s as Te,b4 as He,a4 as Ie,b8 as Be,aR as De,av as Oe,T as We,au as ze,ay as Re,b as Ke,a5 as K,H as Ue,A as U,w as V,az as ue,g as r,f as N,ab as j,aD as je,h as ce,af as he,i as de,t as fe,aM as pe,b0 as qe,aU as Xe,aP as Ye,V as ve,G as Ge}from"./index-a5229f6a.js";import{E as Qe}from"./el-popper-7ddaae8a.js";import{g as ae}from"./position-8d3f8ae4.js";import{C as Ze}from"./index-d6a23b34.js";import{d as Je}from"./debounce-4aa199f9.js";let J=!1;function O(t,a){if(!Ae)return;const n=function(o){var s;(s=a.drag)==null||s.call(a,o)},e=function(o){var s;document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",e),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",e),document.onselectstart=null,document.ondragstart=null,J=!1,(s=a.end)==null||s.call(a,o)},l=function(o){var s;J||(o.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",n),document.addEventListener("mouseup",e),document.addEventListener("touchmove",n),document.addEventListener("touchend",e),J=!0,(s=a.start)==null||s.call(a,o))};t.addEventListener("mousedown",l),t.addEventListener("touchstart",l)}const xe=I({name:"ElColorAlphaSlider",props:{color:{type:Object,required:!0},vertical:{type:Boolean,default:!1}},setup(t){const a=W("color-alpha-slider"),n=te(),e=re(),l=re(),o=b(0),s=b(0),u=b();E(()=>t.color.get("alpha"),()=>{m()}),E(()=>t.color.value,()=>{m()});function d(){if(!e.value||t.vertical)return 0;const i=n.vnode.el,c=t.color.get("alpha");return i?Math.round(c*(i.offsetWidth-e.value.offsetWidth/2)/100):0}function p(){if(!e.value)return 0;const i=n.vnode.el;if(!t.vertical)return 0;const c=t.color.get("alpha");return i?Math.round(c*(i.offsetHeight-e.value.offsetHeight/2)/100):0}function _(){if(t.color&&t.color.value){const{r:i,g:c,b:v}=t.color.toRgb();return`linear-gradient(to right, rgba(${i}, ${c}, ${v}, 0) 0%, rgba(${i}, ${c}, ${v}, 1) 100%)`}return""}function k(i){i.target!==e.value&&w(i)}function w(i){if(!l.value||!e.value)return;const v=n.vnode.el.getBoundingClientRect(),{clientX:S,clientY:C}=ae(i);if(t.vertical){let f=C-v.top;f=Math.max(e.value.offsetHeight/2,f),f=Math.min(f,v.height-e.value.offsetHeight/2),t.color.set("alpha",Math.round((f-e.value.offsetHeight/2)/(v.height-e.value.offsetHeight)*100))}else{let f=S-v.left;f=Math.max(e.value.offsetWidth/2,f),f=Math.min(f,v.width-e.value.offsetWidth/2),t.color.set("alpha",Math.round((f-e.value.offsetWidth/2)/(v.width-e.value.offsetWidth)*100))}}function m(){o.value=d(),s.value=p(),u.value=_()}return X(()=>{if(!l.value||!e.value)return;const i={drag:c=>{w(c)},end:c=>{w(c)}};O(l.value,i),O(e.value,i),m()}),{thumb:e,bar:l,thumbLeft:o,thumbTop:s,background:u,handleClick:k,update:m,ns:a}}});function et(t,a,n,e,l,o){return M(),A("div",{class:g([t.ns.b(),t.ns.is("vertical",t.vertical)])},[$("div",{ref:"bar",class:g(t.ns.e("bar")),style:L({background:t.background}),onClick:a[0]||(a[0]=(...s)=>t.handleClick&&t.handleClick(...s))},null,6),$("div",{ref:"thumb",class:g(t.ns.e("thumb")),style:L({left:t.thumbLeft+"px",top:t.thumbTop+"px"})},null,6)],2)}var tt=z(xe,[["render",et],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]]);const at=I({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(t){const a=W("color-hue-slider"),n=te(),e=b(),l=b(),o=b(0),s=b(0),u=T(()=>t.color.get("hue"));E(()=>u.value,()=>{w()});function d(m){m.target!==e.value&&p(m)}function p(m){if(!l.value||!e.value)return;const c=n.vnode.el.getBoundingClientRect(),{clientX:v,clientY:S}=ae(m);let C;if(t.vertical){let f=S-c.top;f=Math.min(f,c.height-e.value.offsetHeight/2),f=Math.max(e.value.offsetHeight/2,f),C=Math.round((f-e.value.offsetHeight/2)/(c.height-e.value.offsetHeight)*360)}else{let f=v-c.left;f=Math.min(f,c.width-e.value.offsetWidth/2),f=Math.max(e.value.offsetWidth/2,f),C=Math.round((f-e.value.offsetWidth/2)/(c.width-e.value.offsetWidth)*360)}t.color.set("hue",C)}function _(){if(!e.value)return 0;const m=n.vnode.el;if(t.vertical)return 0;const i=t.color.get("hue");return m?Math.round(i*(m.offsetWidth-e.value.offsetWidth/2)/360):0}function k(){if(!e.value)return 0;const m=n.vnode.el;if(!t.vertical)return 0;const i=t.color.get("hue");return m?Math.round(i*(m.offsetHeight-e.value.offsetHeight/2)/360):0}function w(){o.value=_(),s.value=k()}return X(()=>{if(!l.value||!e.value)return;const m={drag:i=>{p(i)},end:i=>{p(i)}};O(l.value,m),O(e.value,m),w()}),{bar:l,thumb:e,thumbLeft:o,thumbTop:s,hueValue:u,handleClick:d,update:w,ns:a}}});function nt(t,a,n,e,l,o){return M(),A("div",{class:g([t.ns.b(),t.ns.is("vertical",t.vertical)])},[$("div",{ref:"bar",class:g(t.ns.e("bar")),onClick:a[0]||(a[0]=(...s)=>t.handleClick&&t.handleClick(...s))},null,2),$("div",{ref:"thumb",class:g(t.ns.e("thumb")),style:L({left:t.thumbLeft+"px",top:t.thumbTop+"px"})},null,6)],2)}var ot=z(at,[["render",nt],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]]);const lt=Pe({modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:Fe,popperClass:{type:String,default:""},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},predefine:{type:Le(Array)},validateEvent:{type:Boolean,default:!0}}),st={[ee]:t=>Q(t)||Z(t),[Ve]:t=>Q(t)||Z(t),activeChange:t=>Q(t)||Z(t)},$e=Symbol("colorPickerContextKey"),me=function(t,a,n){return[t,a*n/((t=(2-a)*n)<1?t:2-t)||0,t/2]},rt=function(t){return typeof t=="string"&&t.includes(".")&&Number.parseFloat(t)===1},it=function(t){return typeof t=="string"&&t.includes("%")},H=function(t,a){rt(t)&&(t="100%");const n=it(t);return t=Math.min(a,Math.max(0,Number.parseFloat(`${t}`))),n&&(t=Number.parseInt(`${t*a}`,10)/100),Math.abs(t-a)<1e-6?1:t%a/Number.parseFloat(a)},ge={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},q=t=>{t=Math.min(Math.round(t),255);const a=Math.floor(t/16),n=t%16;return`${ge[a]||a}${ge[n]||n}`},be=function({r:t,g:a,b:n}){return Number.isNaN(+t)||Number.isNaN(+a)||Number.isNaN(+n)?"":`#${q(t)}${q(a)}${q(n)}`},x={A:10,B:11,C:12,D:13,E:14,F:15},F=function(t){return t.length===2?(x[t[0].toUpperCase()]||+t[0])*16+(x[t[1].toUpperCase()]||+t[1]):x[t[1].toUpperCase()]||+t[1]},ut=function(t,a,n){a=a/100,n=n/100;let e=a;const l=Math.max(n,.01);n*=2,a*=n<=1?n:2-n,e*=l<=1?l:2-l;const o=(n+a)/2,s=n===0?2*e/(l+e):2*a/(n+a);return{h:t,s:s*100,v:o*100}},ke=(t,a,n)=>{t=H(t,255),a=H(a,255),n=H(n,255);const e=Math.max(t,a,n),l=Math.min(t,a,n);let o;const s=e,u=e-l,d=e===0?0:u/e;if(e===l)o=0;else{switch(e){case t:{o=(a-n)/u+(a<n?6:0);break}case a:{o=(n-t)/u+2;break}case n:{o=(t-a)/u+4;break}}o/=6}return{h:o*360,s:d*100,v:s*100}},B=function(t,a,n){t=H(t,360)*6,a=H(a,100),n=H(n,100);const e=Math.floor(t),l=t-e,o=n*(1-a),s=n*(1-l*a),u=n*(1-(1-l)*a),d=e%6,p=[n,s,o,o,u,n][d],_=[u,n,n,s,o,o][d],k=[o,o,u,n,n,s][d];return{r:Math.round(p*255),g:Math.round(_*255),b:Math.round(k*255)}};class D{constructor(a={}){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="";for(const n in a)ie(a,n)&&(this[n]=a[n]);a.value?this.fromString(a.value):this.doOnChange()}set(a,n){if(arguments.length===1&&typeof a=="object"){for(const e in a)ie(a,e)&&this.set(e,a[e]);return}this[`_${a}`]=n,this.doOnChange()}get(a){return a==="alpha"?Math.floor(this[`_${a}`]):this[`_${a}`]}toRgb(){return B(this._hue,this._saturation,this._value)}fromString(a){if(!a){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}const n=(e,l,o)=>{this._hue=Math.max(0,Math.min(360,e)),this._saturation=Math.max(0,Math.min(100,l)),this._value=Math.max(0,Math.min(100,o)),this.doOnChange()};if(a.includes("hsl")){const e=a.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(l=>l!=="").map((l,o)=>o>2?Number.parseFloat(l):Number.parseInt(l,10));if(e.length===4?this._alpha=Number.parseFloat(e[3])*100:e.length===3&&(this._alpha=100),e.length>=3){const{h:l,s:o,v:s}=ut(e[0],e[1],e[2]);n(l,o,s)}}else if(a.includes("hsv")){const e=a.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(l=>l!=="").map((l,o)=>o>2?Number.parseFloat(l):Number.parseInt(l,10));e.length===4?this._alpha=Number.parseFloat(e[3])*100:e.length===3&&(this._alpha=100),e.length>=3&&n(e[0],e[1],e[2])}else if(a.includes("rgb")){const e=a.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(l=>l!=="").map((l,o)=>o>2?Number.parseFloat(l):Number.parseInt(l,10));if(e.length===4?this._alpha=Number.parseFloat(e[3])*100:e.length===3&&(this._alpha=100),e.length>=3){const{h:l,s:o,v:s}=ke(e[0],e[1],e[2]);n(l,o,s)}}else if(a.includes("#")){const e=a.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(e))return;let l,o,s;e.length===3?(l=F(e[0]+e[0]),o=F(e[1]+e[1]),s=F(e[2]+e[2])):(e.length===6||e.length===8)&&(l=F(e.slice(0,2)),o=F(e.slice(2,4)),s=F(e.slice(4,6))),e.length===8?this._alpha=F(e.slice(6))/255*100:(e.length===3||e.length===6)&&(this._alpha=100);const{h:u,s:d,v:p}=ke(l,o,s);n(u,d,p)}}compare(a){return Math.abs(a._hue-this._hue)<2&&Math.abs(a._saturation-this._saturation)<1&&Math.abs(a._value-this._value)<1&&Math.abs(a._alpha-this._alpha)<1}doOnChange(){const{_hue:a,_saturation:n,_value:e,_alpha:l,format:o}=this;if(this.enableAlpha)switch(o){case"hsl":{const s=me(a,n/100,e/100);this.value=`hsla(${a}, ${Math.round(s[1]*100)}%, ${Math.round(s[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${a}, ${Math.round(n)}%, ${Math.round(e)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${be(B(a,n,e))}${q(l*255/100)}`;break}default:{const{r:s,g:u,b:d}=B(a,n,e);this.value=`rgba(${s}, ${u}, ${d}, ${this.get("alpha")/100})`}}else switch(o){case"hsl":{const s=me(a,n/100,e/100);this.value=`hsl(${a}, ${Math.round(s[1]*100)}%, ${Math.round(s[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${a}, ${Math.round(n)}%, ${Math.round(e)}%)`;break}case"rgb":{const{r:s,g:u,b:d}=B(a,n,e);this.value=`rgb(${s}, ${u}, ${d})`;break}default:this.value=be(B(a,n,e))}}}const ct=I({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0}},setup(t){const a=W("color-predefine"),{currentColor:n}=Te($e),e=b(o(t.colors,t.color));E(()=>n.value,s=>{const u=new D;u.fromString(s),e.value.forEach(d=>{d.selected=u.compare(d)})}),He(()=>{e.value=o(t.colors,t.color)});function l(s){t.color.fromString(t.colors[s])}function o(s,u){return s.map(d=>{const p=new D;return p.enableAlpha=!0,p.format="rgba",p.fromString(d),p.selected=p.value===u.value,p})}return{rgbaColors:e,handleSelect:l,ns:a}}}),ht=["onClick"];function dt(t,a,n,e,l,o){return M(),A("div",{class:g(t.ns.b())},[$("div",{class:g(t.ns.e("colors"))},[(M(!0),A(Ie,null,Be(t.rgbaColors,(s,u)=>(M(),A("div",{key:t.colors[u],class:g([t.ns.e("color-selector"),t.ns.is("alpha",s._alpha<100),{selected:s.selected}]),onClick:d=>t.handleSelect(u)},[$("div",{style:L({backgroundColor:s.value})},null,4)],10,ht))),128))],2)],2)}var ft=z(ct,[["render",dt],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]]);const pt=I({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(t){const a=W("color-svpanel"),n=te(),e=b(0),l=b(0),o=b("hsl(0, 100%, 50%)"),s=T(()=>{const p=t.color.get("hue"),_=t.color.get("value");return{hue:p,value:_}});function u(){const p=t.color.get("saturation"),_=t.color.get("value"),k=n.vnode.el,{clientWidth:w,clientHeight:m}=k;l.value=p*w/100,e.value=(100-_)*m/100,o.value=`hsl(${t.color.get("hue")}, 100%, 50%)`}function d(p){const k=n.vnode.el.getBoundingClientRect(),{clientX:w,clientY:m}=ae(p);let i=w-k.left,c=m-k.top;i=Math.max(0,i),i=Math.min(i,k.width),c=Math.max(0,c),c=Math.min(c,k.height),l.value=i,e.value=c,t.color.set({saturation:i/k.width*100,value:100-c/k.height*100})}return E(()=>s.value,()=>{u()}),X(()=>{O(n.vnode.el,{drag:p=>{d(p)},end:p=>{d(p)}}),u()}),{cursorTop:e,cursorLeft:l,background:o,colorValue:s,handleDrag:d,update:u,ns:a}}}),vt=$("div",null,null,-1),mt=[vt];function gt(t,a,n,e,l,o){return M(),A("div",{class:g(t.ns.b()),style:L({backgroundColor:t.background})},[$("div",{class:g(t.ns.e("white"))},null,2),$("div",{class:g(t.ns.e("black"))},null,2),$("div",{class:g(t.ns.e("cursor")),style:L({top:t.cursorTop+"px",left:t.cursorLeft+"px"})},mt,6)],6)}var bt=z(pt,[["render",gt],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]]);const kt=["id","aria-label","aria-labelledby","aria-description","tabindex","onKeydown"],$t=I({name:"ElColorPicker"}),Ct=I({...$t,props:lt,emits:st,setup(t,{expose:a,emit:n}){const e=t,{t:l}=De(),o=W("color"),{formItem:s}=Oe(),u=We(),d=ze(),{inputId:p,isLabeledByFormItem:_}=Re(e,{formItemContext:s}),k=b(),w=b(),m=b(),i=b();let c=!0;const v=Ke(new D({enableAlpha:e.showAlpha,format:e.colorFormat||"",value:e.modelValue})),S=b(!1),C=b(!1),f=b(""),Ce=T(()=>!e.modelValue&&!C.value?"transparent":Me(v,e.showAlpha)),Y=T(()=>!e.modelValue&&!C.value?"":v.value),_e=T(()=>_.value?void 0:e.label||l("el.colorpicker.defaultLabel")),we=T(()=>_.value?s==null?void 0:s.labelId:void 0);function Me(h,y){if(!(h instanceof D))throw new TypeError("color should be instance of _color Class");const{r:P,g:le,b:se}=h.toRgb();return y?`rgba(${P}, ${le}, ${se}, ${h.get("alpha")/100})`:`rgb(${P}, ${le}, ${se})`}function ye(h){S.value=h}const R=Je(ye,100);function Ee(){R(!1),G()}function G(){K(()=>{e.modelValue?v.fromString(e.modelValue):(v.value="",K(()=>{C.value=!1}))})}function ne(){d.value||R(!S.value)}function oe(){v.fromString(f.value)}function Se(){const h=v.value;n(ee,h),n("change",h),e.validateEvent&&(s==null||s.validate("change").catch(y=>ve())),R(!1),K(()=>{const y=new D({enableAlpha:e.showAlpha,format:e.colorFormat||"",value:e.modelValue});v.compare(y)||G()})}function Ne(){R(!1),n(ee,null),n("change",null),e.modelValue!==null&&e.validateEvent&&(s==null||s.validate("change").catch(h=>ve())),G()}return X(()=>{e.modelValue&&(f.value=Y.value)}),E(()=>e.modelValue,h=>{h?h&&h!==v.value&&(c=!1,v.fromString(h)):C.value=!1}),E(()=>Y.value,h=>{f.value=h,c&&n("activeChange",h),c=!0}),E(()=>v.value,()=>{!e.modelValue&&!C.value&&(C.value=!0)}),E(()=>S.value,()=>{K(()=>{var h,y,P;(h=k.value)==null||h.update(),(y=w.value)==null||y.update(),(P=m.value)==null||P.update()})}),Ue($e,{currentColor:Y}),a({color:v}),(h,y)=>(M(),U(r(Qe),{ref_key:"popper",ref:i,visible:S.value,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[r(o).be("picker","panel"),r(o).b("dropdown"),h.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",transition:`${r(o).namespace.value}-zoom-in-top`,persistent:""},{content:V(()=>[ue((M(),A("div",null,[$("div",{class:g(r(o).be("dropdown","main-wrapper"))},[N(ot,{ref_key:"hue",ref:k,class:"hue-slider",color:r(v),vertical:""},null,8,["color"]),N(bt,{ref:"svPanel",color:r(v)},null,8,["color"])],2),h.showAlpha?(M(),U(tt,{key:0,ref_key:"alpha",ref:m,color:r(v)},null,8,["color"])):j("v-if",!0),h.predefine?(M(),U(ft,{key:1,ref:"predefine",color:r(v),colors:h.predefine},null,8,["color","colors"])):j("v-if",!0),$("div",{class:g(r(o).be("dropdown","btns"))},[$("span",{class:g(r(o).be("dropdown","value"))},[N(r(je),{modelValue:f.value,"onUpdate:modelValue":y[0]||(y[0]=P=>f.value=P),"validate-event":!1,size:"small",onKeyup:ce(oe,["enter"]),onBlur:oe},null,8,["modelValue","onKeyup"])],2),N(r(he),{class:g(r(o).be("dropdown","link-btn")),text:"",size:"small",onClick:Ne},{default:V(()=>[de(fe(r(l)("el.colorpicker.clear")),1)]),_:1},8,["class"]),N(r(he),{plain:"",size:"small",class:g(r(o).be("dropdown","btn")),onClick:Se},{default:V(()=>[de(fe(r(l)("el.colorpicker.confirm")),1)]),_:1},8,["class"])],2)])),[[r(Ze),Ee]])]),default:V(()=>[$("div",{id:r(p),class:g([r(o).b("picker"),r(o).is("disabled",r(d)),r(o).bm("picker",r(u))]),role:"button","aria-label":r(_e),"aria-labelledby":r(we),"aria-description":r(l)("el.colorpicker.description",{color:h.modelValue||""}),tabindex:h.tabindex,onKeydown:ce(ne,["enter"])},[r(d)?(M(),A("div",{key:0,class:g(r(o).be("picker","mask"))},null,2)):j("v-if",!0),$("div",{class:g(r(o).be("picker","trigger")),onClick:ne},[$("span",{class:g([r(o).be("picker","color"),r(o).is("alpha",h.showAlpha)])},[$("span",{class:g(r(o).be("picker","color-inner")),style:L({backgroundColor:r(Ce)})},[ue(N(r(pe),{class:g([r(o).be("picker","icon"),r(o).is("icon-arrow-down")])},{default:V(()=>[N(r(qe))]),_:1},8,["class"]),[[Xe,h.modelValue||C.value]]),!h.modelValue&&!C.value?(M(),U(r(pe),{key:0,class:g([r(o).be("picker","empty"),r(o).is("icon-close")])},{default:V(()=>[N(r(Ye))]),_:1},8,["class"])):j("v-if",!0)],6)],2)],2)],42,kt)]),_:1},8,["visible","popper-class","transition"]))}});var _t=z(Ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/color-picker.vue"]]);const Nt=Ge(_t);export{Nt as E};
