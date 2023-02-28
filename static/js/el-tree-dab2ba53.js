import{bS as ee,b as be,z as Ee,d as se,x as U,s as R,b2 as le,F as ae,H,r as K,aZ as X,aY as De,aM as Ke,cl as we,U as w,a5 as ce,cC as Se,aw as fe,Y as xe,Q as Ae,aS as B,az as te,aU as ne,o as D,c as F,e as oe,A as z,w as V,E as Te,C as S,aT as T,ab as j,f as _,D as Ie,a4 as pe,b8 as ge,bQ as he,a0 as Be,a2 as Le,br as Oe,aW as I,aL as Me,aR as $e,v as ze,Z as Fe,t as qe}from"./index-3644c3c9.js";import{_ as Pe}from"./index-bdaca420.js";import{E as je}from"./el-checkbox-33797f2d.js";const q="$treeNodeId",ue=function(t,e){!e||e[q]||Object.defineProperty(e,q,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},ie=function(t,e){return t?e[t]:e[q]},de=(t,e,o)=>{const d=t.value.currentNode;o();const n=t.value.currentNode;d!==n&&e("current-change",n?n.data:null,n)},re=t=>{let e=!0,o=!0,d=!0;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.checked!==!0||a.indeterminate)&&(e=!1,a.disabled||(d=!1)),(a.checked!==!1||a.indeterminate)&&(o=!1)}return{all:e,none:o,allWithoutDisable:d,half:!e&&!o}},Z=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:o,half:d}=re(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):d?(t.checked=!1,t.indeterminate=!0):o&&(t.checked=!1,t.indeterminate=!1);const n=t.parent;!n||n.level===0||t.store.checkStrictly||Z(n)},Q=function(t,e){const o=t.store.props,d=t.data||{},n=o[e];if(typeof n=="function")return n(d,t);if(typeof n=="string")return d[n];if(typeof n>"u"){const r=d[e];return r===void 0?"":r}};let Re=0;class L{constructor(e){this.id=Re++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const o in e)ee(e,o)&&(this[o]=e[o]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const o=e.props;if(o&&typeof o.isLeaf<"u"){const r=Q(this,"isLeaf");typeof r=="boolean"&&(this.isLeafByUser=r)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||ue(this,this.data),!this.data)return;const d=e.defaultExpandedKeys,n=e.key;n&&d&&d.includes(this.key)&&this.expand(null,e.autoExpandParent),n&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||ue(this,e),this.data=e,this.childNodes=[];let o;this.level===0&&Array.isArray(this.data)?o=this.data:o=Q(this,"children")||[];for(let d=0,n=o.length;d<n;d++)this.insertChild({data:o[d]})}get label(){return Q(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return Q(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const o=e.childNodes.indexOf(this);if(o>-1)return e.childNodes[o+1]}return null}get previousSibling(){const e=this.parent;if(e){const o=e.childNodes.indexOf(this);if(o>-1)return o>0?e.childNodes[o-1]:null}return null}contains(e,o=!0){return(this.childNodes||[]).some(d=>d===e||o&&d.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,o,d){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof L)){if(!d){const n=this.getChildren(!0);n.includes(e.data)||(typeof o>"u"||o<0?n.push(e.data):n.splice(o,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=be(new L(e)),e instanceof L&&e.initialize()}e.level=this.level+1,typeof o>"u"||o<0?this.childNodes.push(e):this.childNodes.splice(o,0,e),this.updateLeafState()}insertBefore(e,o){let d;o&&(d=this.childNodes.indexOf(o)),this.insertChild(e,d)}insertAfter(e,o){let d;o&&(d=this.childNodes.indexOf(o),d!==-1&&(d+=1)),this.insertChild(e,d)}removeChild(e){const o=this.getChildren()||[],d=o.indexOf(e.data);d>-1&&o.splice(d,1);const n=this.childNodes.indexOf(e);n>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(n,1)),this.updateLeafState()}removeChildByData(e){let o=null;for(let d=0;d<this.childNodes.length;d++)if(this.childNodes[d].data===e){o=this.childNodes[d];break}o&&this.removeChild(o)}expand(e,o){const d=()=>{if(o){let n=this.parent;for(;n.level>0;)n.expanded=!0,n=n.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(n=>{n.canFocus=!0})};this.shouldLoadData()?this.loadData(n=>{Array.isArray(n)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||Z(this),d())}):d()}doCreateChildren(e,o={}){e.forEach(d=>{this.insertChild(Object.assign({data:d},o),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,o,d,n){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:a,allWithoutDisable:i}=re(this.childNodes);!this.isLeaf&&!a&&i&&(this.checked=!1,e=!1);const f=()=>{if(o){const g=this.childNodes;for(let s=0,p=g.length;s<p;s++){const N=g[s];n=n||e!==!1;const C=N.disabled?N.checked:n;N.setChecked(C,o,!0,n)}const{half:u,all:c}=re(g);c||(this.checked=c,this.indeterminate=u)}};if(this.shouldLoadData()){this.loadData(()=>{f(),Z(this)},{checked:e!==!1});return}else f()}const r=this.parent;!r||r.level===0||d||Z(r)}getChildren(e=!1){if(this.level===0)return this.data;const o=this.data;if(!o)return null;const d=this.store.props;let n="children";return d&&(n=d.children||"children"),o[n]===void 0&&(o[n]=null),e&&!o[n]&&(o[n]=[]),o[n]}updateChildren(){const e=this.getChildren()||[],o=this.childNodes.map(r=>r.data),d={},n=[];e.forEach((r,a)=>{const i=r[q];!!i&&o.findIndex(g=>g[q]===i)>=0?d[i]={index:a,data:r}:n.push({index:a,data:r})}),this.store.lazy||o.forEach(r=>{d[r[q]]||this.removeChildByData(r)}),n.forEach(({index:r,data:a})=>{this.insertChild({data:a},r)}),this.updateLeafState()}loadData(e,o={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(o).length)){this.loading=!0;const d=n=>{this.childNodes=[],this.doCreateChildren(n,o),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,n)};this.store.load(this,d)}else e&&e.call(this)}}class He{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const o in e)ee(e,o)&&(this[o]=e[o]);this.nodesMap={}}initialize(){if(this.root=new L({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,o=>{this.root.doCreateChildren(o),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const o=this.filterNodeMethod,d=this.lazy,n=function(r){const a=r.root?r.root.childNodes:r.childNodes;if(a.forEach(i=>{i.visible=o.call(i,e,i.data,i),n(i)}),!r.visible&&a.length){let i=!0;i=!a.some(f=>f.visible),r.root?r.root.visible=i===!1:r.visible=i===!1}!e||r.visible&&!r.isLeaf&&!d&&r.expand()};n(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof L)return e;const o=Ee(e)?ie(this.key,e):e;return this.nodesMap[o]||null}insertBefore(e,o){const d=this.getNode(o);d.parent.insertBefore({data:e},d)}insertAfter(e,o){const d=this.getNode(o);d.parent.insertAfter({data:e},d)}remove(e){const o=this.getNode(e);o&&o.parent&&(o===this.currentNode&&(this.currentNode=null),o.parent.removeChild(o))}append(e,o){const d=o?this.getNode(o):this.root;d&&d.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],o=this.nodesMap;e.forEach(d=>{const n=o[d];n&&n.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const o=this.key;!e||!e.data||(o?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(d=>{this.deregisterNode(d)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,o=!1){const d=[],n=function(r){(r.root?r.root.childNodes:r.childNodes).forEach(i=>{(i.checked||o&&i.indeterminate)&&(!e||e&&i.isLeaf)&&d.push(i.data),n(i)})};return n(this),d}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(o=>(o||{})[this.key])}getHalfCheckedNodes(){const e=[],o=function(d){(d.root?d.root.childNodes:d.childNodes).forEach(r=>{r.indeterminate&&e.push(r.data),o(r)})};return o(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],o=this.nodesMap;for(const d in o)ee(o,d)&&e.push(o[d]);return e}updateChildren(e,o){const d=this.nodesMap[e];if(!d)return;const n=d.childNodes;for(let r=n.length-1;r>=0;r--){const a=n[r];this.remove(a.data)}for(let r=0,a=o.length;r<a;r++){const i=o[r];this.append(i,d.data)}}_setCheckedKeys(e,o=!1,d){const n=this._getAllNodes().sort((i,f)=>f.level-i.level),r=Object.create(null),a=Object.keys(d);n.forEach(i=>i.setChecked(!1,!1));for(let i=0,f=n.length;i<f;i++){const g=n[i],u=g.data[e].toString();if(!a.includes(u)){g.checked&&!r[u]&&g.setChecked(!1,!1);continue}let s=g.parent;for(;s&&s.level>0;)r[s.data[e]]=!0,s=s.parent;if(g.isLeaf||this.checkStrictly){g.setChecked(!0,!1);continue}if(g.setChecked(!0,!0),o){g.setChecked(!1,!1);const p=function(N){N.childNodes.forEach(v=>{v.isLeaf||v.setChecked(!1,!1),p(v)})};p(g)}}}setCheckedNodes(e,o=!1){const d=this.key,n={};e.forEach(r=>{n[(r||{})[d]]=!0}),this._setCheckedKeys(d,o,n)}setCheckedKeys(e,o=!1){this.defaultCheckedKeys=e;const d=this.key,n={};e.forEach(r=>{n[r]=!0}),this._setCheckedKeys(d,o,n)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(o=>{const d=this.getNode(o);d&&d.expand(null,this.autoExpandParent)})}setChecked(e,o,d){const n=this.getNode(e);n&&n.setChecked(!!o,d)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const o=this.currentNode;o&&(o.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,o=!0){const d=e[this.key],n=this.nodesMap[d];this.setCurrentNode(n),o&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,o=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const d=this.getNode(e);d&&(this.setCurrentNode(d),o&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const Ue=se({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=U("tree"),o=R("NodeInstance"),d=R("RootTree");return()=>{const n=t.node,{data:r,store:a}=n;return t.renderContent?t.renderContent(le,{_self:o,node:n,data:r,store:a}):le("span",{class:e.be("node","label")},[d.ctx.slots.default?d.ctx.slots.default({node:n,data:r}):n.label])}}});var Ye=ae(Ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);function ye(t){const e=R("TreeNodeMap",null),o={treeNodeExpand:d=>{t.node!==d&&t.node.collapse()},children:[]};return e&&e.children.push(o),H("TreeNodeMap",o),{broadcastExpanded:d=>{if(!!t.accordion)for(const n of o.children)n.treeNodeExpand(d)}}}const Ne=Symbol("dragEvents");function We({props:t,ctx:e,el$:o,dropIndicator$:d,store:n}){const r=U("tree"),a=K({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return H(Ne,{treeNodeDragStart:({event:u,treeNode:c})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(c.node))return u.preventDefault(),!1;u.dataTransfer.effectAllowed="move";try{u.dataTransfer.setData("text/plain","")}catch{}a.value.draggingNode=c,e.emit("node-drag-start",c.node,u)},treeNodeDragOver:({event:u,treeNode:c})=>{const s=c,p=a.value.dropNode;p&&p!==s&&X(p.$el,r.is("drop-inner"));const N=a.value.draggingNode;if(!N||!s)return;let C=!0,v=!0,b=!0,A=!0;typeof t.allowDrop=="function"&&(C=t.allowDrop(N.node,s.node,"prev"),A=v=t.allowDrop(N.node,s.node,"inner"),b=t.allowDrop(N.node,s.node,"next")),u.dataTransfer.dropEffect=v||C||b?"move":"none",(C||v||b)&&p!==s&&(p&&e.emit("node-drag-leave",N.node,p.node,u),e.emit("node-drag-enter",N.node,s.node,u)),(C||v||b)&&(a.value.dropNode=s),s.node.nextSibling===N.node&&(b=!1),s.node.previousSibling===N.node&&(C=!1),s.node.contains(N.node,!1)&&(v=!1),(N.node===s.node||N.node.contains(s.node))&&(C=!1,v=!1,b=!1);const x=s.$el.getBoundingClientRect(),O=o.value.getBoundingClientRect();let E;const Y=C?v?.25:b?.45:1:-1,W=b?v?.75:C?.55:0:1;let M=-9999;const h=u.clientY-x.top;h<x.height*Y?E="before":h>x.height*W?E="after":v?E="inner":E="none";const k=s.$el.querySelector(`.${r.be("node","expand-icon")}`).getBoundingClientRect(),m=d.value;E==="before"?M=k.top-O.top:E==="after"&&(M=k.bottom-O.top),m.style.top=`${M}px`,m.style.left=`${k.right-O.left}px`,E==="inner"?De(s.$el,r.is("drop-inner")):X(s.$el,r.is("drop-inner")),a.value.showDropIndicator=E==="before"||E==="after",a.value.allowDrop=a.value.showDropIndicator||A,a.value.dropType=E,e.emit("node-drag-over",N.node,s.node,u)},treeNodeDragEnd:u=>{const{draggingNode:c,dropType:s,dropNode:p}=a.value;if(u.preventDefault(),u.dataTransfer.dropEffect="move",c&&p){const N={data:c.node.data};s!=="none"&&c.node.remove(),s==="before"?p.node.parent.insertBefore(N,p.node):s==="after"?p.node.parent.insertAfter(N,p.node):s==="inner"&&p.node.insertChild(N),s!=="none"&&n.value.registerNode(N),X(p.$el,r.is("drop-inner")),e.emit("node-drag-end",c.node,p.node,s,u),s!=="none"&&e.emit("node-drop",c.node,p.node,s,u)}c&&!p&&e.emit("node-drag-end",c.node,null,s,u),a.value.showDropIndicator=!1,a.value.draggingNode=null,a.value.dropNode=null,a.value.allowDrop=!0}}),{dragState:a}}const Qe=se({name:"ElTreeNode",components:{ElCollapseTransition:Pe,ElCheckbox:je,NodeContent:Ye,ElIcon:Ke,Loading:we},props:{node:{type:L,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const o=U("tree"),{broadcastExpanded:d}=ye(t),n=R("RootTree"),r=K(!1),a=K(!1),i=K(null),f=K(null),g=K(null),u=R(Ne),c=fe();H("NodeInstance",c),t.node.expanded&&(r.value=!0,a.value=!0);const s=n.props.children||"children";w(()=>{const h=t.node.data[s];return h&&[...h]},()=>{t.node.updateChildren()}),w(()=>t.node.indeterminate,h=>{C(t.node.checked,h)}),w(()=>t.node.checked,h=>{C(h,t.node.indeterminate)}),w(()=>t.node.expanded,h=>{ce(()=>r.value=h),h&&(a.value=!0)});const p=h=>ie(n.props.nodeKey,h.data),N=h=>{const k=t.props.class;if(!k)return{};let m;if(xe(k)){const{data:J}=h;m=k(J,h)}else m=k;return Ae(m)?{[m]:!0}:m},C=(h,k)=>{(i.value!==h||f.value!==k)&&n.ctx.emit("check-change",t.node.data,h,k),i.value=h,f.value=k},v=h=>{de(n.store,n.ctx.emit,()=>n.store.value.setCurrentNode(t.node)),n.currentNode.value=t.node,n.props.expandOnClickNode&&A(),n.props.checkOnClickNode&&!t.node.disabled&&x(null,{target:{checked:!t.node.checked}}),n.ctx.emit("node-click",t.node.data,t.node,c,h)},b=h=>{n.instance.vnode.props.onNodeContextmenu&&(h.stopPropagation(),h.preventDefault()),n.ctx.emit("node-contextmenu",h,t.node.data,t.node,c)},A=()=>{t.node.isLeaf||(r.value?(n.ctx.emit("node-collapse",t.node.data,t.node,c),t.node.collapse()):(t.node.expand(),e.emit("node-expand",t.node.data,t.node,c)))},x=(h,k)=>{t.node.setChecked(k.target.checked,!n.props.checkStrictly),ce(()=>{const m=n.store.value;n.ctx.emit("check",t.node.data,{checkedNodes:m.getCheckedNodes(),checkedKeys:m.getCheckedKeys(),halfCheckedNodes:m.getHalfCheckedNodes(),halfCheckedKeys:m.getHalfCheckedKeys()})})};return{ns:o,node$:g,tree:n,expanded:r,childNodeRendered:a,oldChecked:i,oldIndeterminate:f,getNodeKey:p,getNodeClass:N,handleSelectChange:C,handleClick:v,handleContextMenu:b,handleExpandIconClick:A,handleCheckChange:x,handleChildNodeExpand:(h,k,m)=>{d(k),n.ctx.emit("node-expand",h,k,m)},handleDragStart:h=>{!n.props.draggable||u.treeNodeDragStart({event:h,treeNode:t})},handleDragOver:h=>{h.preventDefault(),n.props.draggable&&u.treeNodeDragOver({event:h,treeNode:{$el:g.value,node:t.node}})},handleDrop:h=>{h.preventDefault()},handleDragEnd:h=>{!n.props.draggable||u.treeNodeDragEnd(h)},CaretRight:Se}}}),Ze=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],Ge=["aria-expanded"];function Je(t,e,o,d,n,r){const a=B("el-icon"),i=B("el-checkbox"),f=B("loading"),g=B("node-content"),u=B("el-tree-node"),c=B("el-collapse-transition");return te((D(),F("div",{ref:"node$",class:S([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:e[1]||(e[1]=T((...s)=>t.handleClick&&t.handleClick(...s),["stop"])),onContextmenu:e[2]||(e[2]=(...s)=>t.handleContextMenu&&t.handleContextMenu(...s)),onDragstart:e[3]||(e[3]=T((...s)=>t.handleDragStart&&t.handleDragStart(...s),["stop"])),onDragover:e[4]||(e[4]=T((...s)=>t.handleDragOver&&t.handleDragOver(...s),["stop"])),onDragend:e[5]||(e[5]=T((...s)=>t.handleDragEnd&&t.handleDragEnd(...s),["stop"])),onDrop:e[6]||(e[6]=T((...s)=>t.handleDrop&&t.handleDrop(...s),["stop"]))},[oe("div",{class:S(t.ns.be("node","content")),style:Ie({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(D(),z(a,{key:0,class:S([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:T(t.handleExpandIconClick,["stop"])},{default:V(()=>[(D(),z(Te(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):j("v-if",!0),t.showCheckbox?(D(),z(i,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:e[0]||(e[0]=T(()=>{},["stop"])),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):j("v-if",!0),t.node.loading?(D(),z(a,{key:2,class:S([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:V(()=>[_(f)]),_:1},8,["class"])):j("v-if",!0),_(g,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),_(c,null,{default:V(()=>[!t.renderAfterExpand||t.childNodeRendered?te((D(),F("div",{key:0,class:S(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(D(!0),F(pe,null,ge(t.node.childNodes,s=>(D(),z(u,{key:t.getNodeKey(s),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:s,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,Ge)),[[ne,t.expanded]]):j("v-if",!0)]),_:1})],42,Ze)),[[ne,t.node.visible]])}var Xe=ae(Qe,[["render",Je],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]);function Ve({el$:t},e){const o=U("tree"),d=he([]),n=he([]);Be(()=>{a()}),Le(()=>{d.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),n.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),w(n,i=>{i.forEach(f=>{f.setAttribute("tabindex","-1")})}),Oe(t,"keydown",i=>{const f=i.target;if(!f.className.includes(o.b("node")))return;const g=i.code;d.value=Array.from(t.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`));const u=d.value.indexOf(f);let c;if([I.up,I.down].includes(g)){if(i.preventDefault(),g===I.up){c=u===-1?0:u!==0?u-1:d.value.length-1;const p=c;for(;!e.value.getNode(d.value[c].dataset.key).canFocus;){if(c--,c===p){c=-1;break}c<0&&(c=d.value.length-1)}}else{c=u===-1?0:u<d.value.length-1?u+1:0;const p=c;for(;!e.value.getNode(d.value[c].dataset.key).canFocus;){if(c++,c===p){c=-1;break}c>=d.value.length&&(c=0)}}c!==-1&&d.value[c].focus()}[I.left,I.right].includes(g)&&(i.preventDefault(),f.click());const s=f.querySelector('[type="checkbox"]');[I.enter,I.space].includes(g)&&s&&(i.preventDefault(),s.click())});const a=()=>{var i;d.value=Array.from(t.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`)),n.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const f=t.value.querySelectorAll(`.${o.is("checked")}[role=treeitem]`);if(f.length){f[0].setAttribute("tabindex","0");return}(i=d.value[0])==null||i.setAttribute("tabindex","0")}}const _e=se({name:"ElTree",components:{ElTreeNode:Xe},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:Me}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:o}=$e(),d=U("tree"),n=K(new He({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));n.value.initialize();const r=K(n.value.root),a=K(null),i=K(null),f=K(null),{broadcastExpanded:g}=ye(t),{dragState:u}=We({props:t,ctx:e,el$:i,dropIndicator$:f,store:n});Ve({el$:i},n);const c=ze(()=>{const{childNodes:l}=r.value;return!l||l.length===0||l.every(({visible:y})=>!y)});w(()=>t.currentNodeKey,l=>{n.value.setCurrentNodeKey(l)}),w(()=>t.defaultCheckedKeys,l=>{n.value.setDefaultCheckedKey(l)}),w(()=>t.defaultExpandedKeys,l=>{n.value.setDefaultExpandedKeys(l)}),w(()=>t.data,l=>{n.value.setData(l)},{deep:!0}),w(()=>t.checkStrictly,l=>{n.value.checkStrictly=l});const s=l=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");n.value.filter(l)},p=l=>ie(t.nodeKey,l.data),N=l=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const y=n.value.getNode(l);if(!y)return[];const $=[y.data];let P=y.parent;for(;P&&P!==r.value;)$.push(P.data),P=P.parent;return $.reverse()},C=(l,y)=>n.value.getCheckedNodes(l,y),v=l=>n.value.getCheckedKeys(l),b=()=>{const l=n.value.getCurrentNode();return l?l.data:null},A=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const l=b();return l?l[t.nodeKey]:null},x=(l,y)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");n.value.setCheckedNodes(l,y)},O=(l,y)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");n.value.setCheckedKeys(l,y)},E=(l,y,$)=>{n.value.setChecked(l,y,$)},Y=()=>n.value.getHalfCheckedNodes(),W=()=>n.value.getHalfCheckedKeys(),M=(l,y=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");de(n,e.emit,()=>n.value.setUserCurrentNode(l,y))},h=(l,y=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");de(n,e.emit,()=>n.value.setCurrentNodeKey(l,y))},k=l=>n.value.getNode(l),m=l=>{n.value.remove(l)},J=(l,y)=>{n.value.append(l,y)},ke=(l,y)=>{n.value.insertBefore(l,y)},Ce=(l,y)=>{n.value.insertAfter(l,y)},ve=(l,y,$)=>{g(y),e.emit("node-expand",l,y,$)},me=(l,y)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");n.value.updateChildren(l,y)};return H("RootTree",{ctx:e,props:t,store:n,root:r,currentNode:a,instance:fe()}),H(Fe,void 0),{ns:d,store:n,root:r,currentNode:a,dragState:u,el$:i,dropIndicator$:f,isEmpty:c,filter:s,getNodeKey:p,getNodePath:N,getCheckedNodes:C,getCheckedKeys:v,getCurrentNode:b,getCurrentKey:A,setCheckedNodes:x,setCheckedKeys:O,setChecked:E,getHalfCheckedNodes:Y,getHalfCheckedKeys:W,setCurrentNode:M,setCurrentKey:h,t:o,getNode:k,remove:m,append:J,insertBefore:ke,insertAfter:Ce,handleNodeExpand:ve,updateKeyChildren:me}}});function et(t,e,o,d,n,r){var a;const i=B("el-tree-node");return D(),F("div",{ref:"el$",class:S([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(D(!0),F(pe,null,ge(t.root.childNodes,f=>(D(),z(i,{key:t.getNodeKey(f),node:f,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(D(),F("div",{key:0,class:S(t.ns.e("empty-block"))},[oe("span",{class:S(t.ns.e("empty-text"))},qe((a=t.emptyText)!=null?a:t.t("el.tree.emptyText")),3)],2)):j("v-if",!0),te(oe("div",{ref:"dropIndicator$",class:S(t.ns.e("drop-indicator"))},null,2),[[ne,t.dragState.showDropIndicator]])],2)}var G=ae(_e,[["render",et],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);G.install=t=>{t.component(G.name,G)};const tt=G,rt=tt;export{rt as E,tt as _};
