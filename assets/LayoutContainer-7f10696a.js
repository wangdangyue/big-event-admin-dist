import{k as re,m as It,n as xe,q as me,s as Z,t as S,v as D,r as T,x as b,w as ue,o as k,y as x,z as ve,e as g,c as te,b as m,A as Ze,B as he,C as N,D as X,_ as z,F as ie,G as Qe,H as $e,I as ce,J as Ct,T as Xe,K as Et,L as ae,M as se,N as L,O as ge,P as Me,Q as $,R as $t,S as fe,V as Mt,W,d as h,X as Tt,Y as St,Z as et,$ as tt,a0 as kt,a1 as Ot,a2 as Pe,a3 as be,g as ee,a4 as Fe,a5 as Te,a6 as ye,a7 as Oe,a8 as Nt,a9 as Re,aa as J,ab as Bt,ac as Pt,ad as Ge,ae as Ft,af as Rt,ag as At,ah as Lt,ai as Dt,aj as zt,f as pe,ak as nt,u as Kt,a as Gt,al as Ht,am as Vt,an as Ut,i as He,ao as Ve,ap as Ue,aq as jt,ar as Yt,p as Wt,j as Jt}from"./index-600590e7.js";import{u as ot,E as lt,a as qt,T as xt,b as Zt,t as Ee,i as je,_ as Qt}from"./_plugin-vue_export-helper-e998ce82.js";import{c as ne,u as Xt,a as Ye,E as en,b as Ae,O as tn,w as We,F as nn,t as Ie,f as on,d as ln}from"./el-overlay-30a10569.js";/* empty css                */import{c as sn}from"./el-input-1d2406b5.js";import{c as st}from"./refs-b2acd024.js";const an=re({size:{type:[Number,String],values:It,default:"",validator:e=>xe(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:me},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:Z(String),default:"cover"}}),rn={error:e=>e instanceof Event},un=["src","alt","srcset"],cn=S({name:"ElAvatar"}),dn=S({...cn,props:an,emits:rn,setup(e,{emit:t}){const o=e,l=D("avatar"),n=T(!1),c=b(()=>{const{size:a,icon:p,shape:v}=o,w=[l.b()];return ie(a)&&w.push(l.m(a)),p&&w.push(l.m("icon")),v&&w.push(l.m(v)),w}),r=b(()=>{const{size:a}=o;return xe(a)?l.cssVarBlock({size:Qe(a)||""}):void 0}),s=b(()=>({objectFit:o.fit}));ue(()=>o.src,()=>n.value=!1);function u(a){n.value=!0,t("error",a)}return(a,p)=>(k(),x("span",{class:X(g(c)),style:ve(g(r))},[(a.src||a.srcSet)&&!n.value?(k(),x("img",{key:0,src:a.src,alt:a.alt,srcset:a.srcSet,style:ve(g(s)),onError:u},null,44,un)):a.icon?(k(),te(g(he),{key:1},{default:m(()=>[(k(),te(Ze(a.icon)))]),_:1})):N(a.$slots,"default",{key:2})],6))}});var pn=z(dn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const mn=$e(pn),fn=S({name:"ElCollapseTransition"}),vn=S({...fn,setup(e){const t=D("collapse-transition"),o=n=>{n.style.maxHeight="",n.style.overflow=n.dataset.oldOverflow,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom},l={beforeEnter(n){n.dataset||(n.dataset={}),n.dataset.oldPaddingTop=n.style.paddingTop,n.dataset.oldPaddingBottom=n.style.paddingBottom,n.style.maxHeight=0,n.style.paddingTop=0,n.style.paddingBottom=0},enter(n){n.dataset.oldOverflow=n.style.overflow,n.scrollHeight!==0?n.style.maxHeight="".concat(n.scrollHeight,"px"):n.style.maxHeight=0,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom,n.style.overflow="hidden"},afterEnter(n){n.style.maxHeight="",n.style.overflow=n.dataset.oldOverflow},enterCancelled(n){o(n)},beforeLeave(n){n.dataset||(n.dataset={}),n.dataset.oldPaddingTop=n.style.paddingTop,n.dataset.oldPaddingBottom=n.style.paddingBottom,n.dataset.oldOverflow=n.style.overflow,n.style.maxHeight="".concat(n.scrollHeight,"px"),n.style.overflow="hidden"},leave(n){n.scrollHeight!==0&&(n.style.maxHeight=0,n.style.paddingTop=0,n.style.paddingBottom=0)},afterLeave(n){o(n)},leaveCancelled(n){o(n)}};return(n,c)=>(k(),te(Xe,ce({name:g(t).b()},Ct(l)),{default:m(()=>[N(n.$slots,"default")]),_:3},16,["name"]))}});var Ce=z(vn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);Ce.install=e=>{e.component(Ce.name,Ce)};const hn=Ce,_n=S({name:"ElContainer"}),gn=S({..._n,props:{direction:{type:String}},setup(e){const t=e,o=Et(),l=D("container"),n=b(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:o&&o.default?o.default().some(r=>{const s=r.type.name;return s==="ElHeader"||s==="ElFooter"}):!1);return(c,r)=>(k(),x("section",{class:X([g(l).b(),g(l).is("vertical",g(n))])},[N(c.$slots,"default")],2))}});var bn=z(gn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const yn=S({name:"ElAside"}),wn=S({...yn,props:{width:{type:String,default:null}},setup(e){const t=e,o=D("aside"),l=b(()=>t.width?o.cssVarBlock({width:t.width}):{});return(n,c)=>(k(),x("aside",{class:X(g(o).b()),style:ve(g(l))},[N(n.$slots,"default")],6))}});var at=z(wn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const In=S({name:"ElFooter"}),Cn=S({...In,props:{height:{type:String,default:null}},setup(e){const t=e,o=D("footer"),l=b(()=>t.height?o.cssVarBlock({height:t.height}):{});return(n,c)=>(k(),x("footer",{class:X(g(o).b()),style:ve(g(l))},[N(n.$slots,"default")],6))}});var rt=z(Cn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const En=S({name:"ElHeader"}),$n=S({...En,props:{height:{type:String,default:null}},setup(e){const t=e,o=D("header"),l=b(()=>t.height?o.cssVarBlock({height:t.height}):{});return(n,c)=>(k(),x("header",{class:X(g(o).b()),style:ve(g(l))},[N(n.$slots,"default")],6))}});var ut=z($n,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const Mn=S({name:"ElMain"}),Tn=S({...Mn,setup(e){const t=D("main");return(o,l)=>(k(),x("main",{class:X(g(t).b())},[N(o.$slots,"default")],2))}});var it=z(Tn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const Sn=$e(bn,{Aside:at,Footer:rt,Header:ut,Main:it}),kn=ae(at),On=ae(rt),Nn=ae(ut),Bn=ae(it),Pn=S({inheritAttrs:!1});function Fn(e,t,o,l,n,c){return N(e.$slots,"default")}var Rn=z(Pn,[["render",Fn],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const An=S({name:"ElCollectionItem",inheritAttrs:!1});function Ln(e,t,o,l,n,c){return N(e.$slots,"default")}var Dn=z(An,[["render",Ln],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const ct="data-el-collection-item",dt=e=>{const t="El".concat(e,"Collection"),o="".concat(t,"Item"),l=Symbol(t),n=Symbol(o),c={...Rn,name:t,setup(){const s=T(null),u=new Map;se(l,{itemMap:u,getItems:()=>{const p=g(s);if(!p)return[];const v=Array.from(p.querySelectorAll("[".concat(ct,"]")));return[...u.values()].sort((i,C)=>v.indexOf(i.ref)-v.indexOf(C.ref))},collectionRef:s})}},r={...Dn,name:o,setup(s,{attrs:u}){const a=T(null),p=L(l,void 0);se(n,{collectionItemRef:a}),ge(()=>{const v=g(a);v&&p.itemMap.set(v,{ref:v,...u})}),Me(()=>{const v=g(a);p.itemMap.delete(v)})}};return{COLLECTION_INJECTION_KEY:l,COLLECTION_ITEM_INJECTION_KEY:n,ElCollection:c,ElCollectionItem:r}},zn=re({style:{type:Z([String,Array,Object])},currentTabId:{type:Z(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:Z(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:Kn,ElCollectionItem:Gn,COLLECTION_INJECTION_KEY:Le,COLLECTION_ITEM_INJECTION_KEY:Hn}=dt("RovingFocusGroup"),De=Symbol("elRovingFocusGroup"),pt=Symbol("elRovingFocusGroupItem"),Vn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Un=(e,t)=>{if(t!=="rtl")return e;switch(e){case $.right:return $.left;case $.left:return $.right;default:return e}},jn=(e,t,o)=>{const l=Un(e.key,o);if(!(t==="vertical"&&[$.left,$.right].includes(l))&&!(t==="horizontal"&&[$.up,$.down].includes(l)))return Vn[l]},Yn=(e,t)=>e.map((o,l)=>e[(l+t)%e.length]),ze=e=>{const{activeElement:t}=document;for(const o of e)if(o===t||(o.focus(),t!==document.activeElement))return},Je="currentTabIdChange",qe="rovingFocusGroup.entryFocus",Wn={bubbles:!1,cancelable:!0},Jn=S({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:zn,emits:[Je,"entryFocus"],setup(e,{emit:t}){var o;const l=T((o=e.currentTabId||e.defaultCurrentTabId)!=null?o:null),n=T(!1),c=T(!1),r=T(null),{getItems:s}=L(Le,void 0),u=b(()=>[{outline:"none"},e.style]),a=y=>{t(Je,y)},p=()=>{n.value=!0},v=ne(y=>{var M;(M=e.onMousedown)==null||M.call(e,y)},()=>{c.value=!0}),w=ne(y=>{var M;(M=e.onFocus)==null||M.call(e,y)},y=>{const M=!g(c),{target:K,currentTarget:P}=y;if(K===P&&M&&!g(n)){const q=new Event(qe,Wn);if(P==null||P.dispatchEvent(q),!q.defaultPrevented){const F=s().filter(H=>H.focusable),A=F.find(H=>H.active),O=F.find(H=>H.id===g(l)),Q=[A,O,...F].filter(Boolean).map(H=>H.ref);ze(Q)}}c.value=!1}),i=ne(y=>{var M;(M=e.onBlur)==null||M.call(e,y)},()=>{n.value=!1}),C=(...y)=>{t("entryFocus",...y)};se(De,{currentTabbedId:$t(l),loop:fe(e,"loop"),tabIndex:b(()=>g(n)?-1:0),rovingFocusGroupRef:r,rovingFocusGroupRootStyle:u,orientation:fe(e,"orientation"),dir:fe(e,"dir"),onItemFocus:a,onItemShiftTab:p,onBlur:i,onFocus:w,onMousedown:v}),ue(()=>e.currentTabId,y=>{l.value=y!=null?y:null}),Mt(r,qe,C)}});function qn(e,t,o,l,n,c){return N(e.$slots,"default")}var xn=z(Jn,[["render",qn],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const Zn=S({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:Kn,ElRovingFocusGroupImpl:xn}});function Qn(e,t,o,l,n,c){const r=W("el-roving-focus-group-impl"),s=W("el-focus-group-collection");return k(),te(s,null,{default:m(()=>[h(r,Tt(St(e.$attrs)),{default:m(()=>[N(e.$slots,"default")]),_:3},16)]),_:3})}var Xn=z(Zn,[["render",Qn],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const eo=S({components:{ElRovingFocusCollectionItem:Gn},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:t}){const{currentTabbedId:o,loop:l,onItemFocus:n,onItemShiftTab:c}=L(De,void 0),{getItems:r}=L(Le,void 0),s=ot(),u=T(null),a=ne(i=>{t("mousedown",i)},i=>{e.focusable?n(g(s)):i.preventDefault()}),p=ne(i=>{t("focus",i)},()=>{n(g(s))}),v=ne(i=>{t("keydown",i)},i=>{const{key:C,shiftKey:y,target:M,currentTarget:K}=i;if(C===$.tab&&y){c();return}if(M!==K)return;const P=jn(i);if(P){i.preventDefault();let F=r().filter(A=>A.focusable).map(A=>A.ref);switch(P){case"last":{F.reverse();break}case"prev":case"next":{P==="prev"&&F.reverse();const A=F.indexOf(K);F=l.value?Yn(F,A+1):F.slice(A+1);break}}et(()=>{ze(F)})}}),w=b(()=>o.value===g(s));return se(pt,{rovingFocusGroupItemRef:u,tabIndex:b(()=>g(w)?0:-1),handleMousedown:a,handleFocus:p,handleKeydown:v}),{id:s,handleKeydown:v,handleFocus:p,handleMousedown:a}}});function to(e,t,o,l,n,c){const r=W("el-roving-focus-collection-item");return k(),te(r,{id:e.id,focusable:e.focusable,active:e.active},{default:m(()=>[N(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var no=z(eo,[["render",to],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const oo=re({trigger:Xt.trigger,effect:{...Ye.effect,default:"light"},type:{type:Z(String)},placement:{type:Z(String),default:"bottom"},popperOptions:{type:Z(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:Z([Number,String]),default:0},maxHeight:{type:Z([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:Z(Object)},teleported:Ye.teleported}),mt=re({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:me}}),lo=re({onKeydown:{type:Z(Function)}}),so=[$.down,$.pageDown,$.home],ft=[$.up,$.pageUp,$.end],ao=[...so,...ft],{ElCollection:ro,ElCollectionItem:uo,COLLECTION_INJECTION_KEY:io,COLLECTION_ITEM_INJECTION_KEY:co}=dt("Dropdown"),Se=Symbol("elDropdown"),{ButtonGroup:po}=lt,mo=S({name:"ElDropdown",components:{ElButton:lt,ElButtonGroup:po,ElScrollbar:en,ElDropdownCollection:ro,ElTooltip:Ae,ElRovingFocusGroup:Xn,ElOnlyChild:tn,ElIcon:he,ArrowDown:tt},props:oo,emits:["visible-change","click","command"],setup(e,{emit:t}){const o=be(),l=D("dropdown"),{t:n}=kt(),c=T(),r=T(),s=T(null),u=T(null),a=T(null),p=T(null),v=T(!1),w=[$.enter,$.space,$.down],i=b(()=>({maxHeight:Qe(e.maxHeight)})),C=b(()=>[l.m(A.value)]),y=b(()=>sn(e.trigger)),M=ot().value,K=b(()=>e.id||M);ue([c,y],([_,R],[j])=>{var E,B,Y;(E=j==null?void 0:j.$el)!=null&&E.removeEventListener&&j.$el.removeEventListener("pointerenter",G),(B=_==null?void 0:_.$el)!=null&&B.removeEventListener&&_.$el.removeEventListener("pointerenter",G),(Y=_==null?void 0:_.$el)!=null&&Y.addEventListener&&R.includes("hover")&&_.$el.addEventListener("pointerenter",G)},{immediate:!0}),Me(()=>{var _,R;(R=(_=c.value)==null?void 0:_.$el)!=null&&R.removeEventListener&&c.value.$el.removeEventListener("pointerenter",G)});function P(){q()}function q(){var _;(_=s.value)==null||_.onClose()}function F(){var _;(_=s.value)==null||_.onOpen()}const A=qt();function O(..._){t("command",..._)}function G(){var _,R;(R=(_=c.value)==null?void 0:_.$el)==null||R.focus()}function Q(){}function H(){const _=g(u);y.value.includes("hover")&&(_==null||_.focus()),p.value=null}function le(_){p.value=_}function d(_){v.value||(_.preventDefault(),_.stopImmediatePropagation())}function f(){t("visible-change",!0)}function I(_){(_==null?void 0:_.type)==="keydown"&&u.value.focus()}function V(){t("visible-change",!1)}return se(Se,{contentRef:u,role:b(()=>e.role),triggerId:K,isUsingKeyboard:v,onItemEnter:Q,onItemLeave:H}),se("elDropdown",{instance:o,dropdownSize:A,handleClick:P,commandHandler:O,trigger:fe(e,"trigger"),hideOnClick:fe(e,"hideOnClick")}),{t:n,ns:l,scrollbar:a,wrapStyle:i,dropdownTriggerKls:C,dropdownSize:A,triggerId:K,triggerKeys:w,currentTabId:p,handleCurrentTabIdChange:le,handlerMainButtonClick:_=>{t("click",_)},handleEntryFocus:d,handleClose:q,handleOpen:F,handleBeforeShowTooltip:f,handleShowTooltip:I,handleBeforeHideTooltip:V,onFocusAfterTrapped:_=>{var R,j;_.preventDefault(),(j=(R=u.value)==null?void 0:R.focus)==null||j.call(R,{preventScroll:!0})},popperRef:s,contentRef:u,triggeringElementRef:c,referenceElementRef:r}}});function fo(e,t,o,l,n,c){var r;const s=W("el-dropdown-collection"),u=W("el-roving-focus-group"),a=W("el-scrollbar"),p=W("el-only-child"),v=W("el-tooltip"),w=W("el-button"),i=W("arrow-down"),C=W("el-icon"),y=W("el-button-group");return k(),x("div",{class:X([e.ns.b(),e.ns.is("disabled",e.disabled)])},[h(v,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(r=e.referenceElementRef)==null?void 0:r.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:"".concat(e.ns.namespace.value,"-zoom-in-top"),teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Ot({content:m(()=>[h(a,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:m(()=>[h(u,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:m(()=>[h(s,null,{default:m(()=>[N(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:m(()=>[h(p,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:m(()=>[N(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(k(),te(y,{key:0},{default:m(()=>[h(w,ce({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:m(()=>[N(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),h(w,ce({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:m(()=>[h(C,{class:X(e.ns.e("icon"))},{default:m(()=>[h(i)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):Pe("v-if",!0)],2)}var vo=z(mo,[["render",fo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const ho=S({name:"DropdownItemImpl",components:{ElIcon:he},props:mt,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:t}){const o=D("dropdown"),{role:l}=L(Se,void 0),{collectionItemRef:n}=L(co,void 0),{collectionItemRef:c}=L(Hn,void 0),{rovingFocusGroupItemRef:r,tabIndex:s,handleFocus:u,handleKeydown:a,handleMousedown:p}=L(pt,void 0),v=st(n,c,r),w=b(()=>l.value==="menu"?"menuitem":l.value==="navigation"?"link":"button"),i=ne(C=>{const{code:y}=C;if(y===$.enter||y===$.space)return C.preventDefault(),C.stopImmediatePropagation(),t("clickimpl",C),!0},a);return{ns:o,itemRef:v,dataset:{[ct]:""},role:w,tabIndex:s,handleFocus:u,handleKeydown:i,handleMousedown:p}}}),_o=["aria-disabled","tabindex","role"];function go(e,t,o,l,n,c){const r=W("el-icon");return k(),x(Te,null,[e.divided?(k(),x("li",ce({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):Pe("v-if",!0),ee("li",ce({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:t[0]||(t[0]=s=>e.$emit("clickimpl",s)),onFocus:t[1]||(t[1]=(...s)=>e.handleFocus&&e.handleFocus(...s)),onKeydown:t[2]||(t[2]=Fe((...s)=>e.handleKeydown&&e.handleKeydown(...s),["self"])),onMousedown:t[3]||(t[3]=(...s)=>e.handleMousedown&&e.handleMousedown(...s)),onPointermove:t[4]||(t[4]=s=>e.$emit("pointermove",s)),onPointerleave:t[5]||(t[5]=s=>e.$emit("pointerleave",s))}),[e.icon?(k(),te(r,{key:0},{default:m(()=>[(k(),te(Ze(e.icon)))]),_:1})):Pe("v-if",!0),N(e.$slots,"default")],16,_o)],64)}var bo=z(ho,[["render",go],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const vt=()=>{const e=L("elDropdown",{}),t=b(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:t}},yo=S({name:"ElDropdownItem",components:{ElDropdownCollectionItem:uo,ElRovingFocusItem:no,ElDropdownItemImpl:bo},inheritAttrs:!1,props:mt,emits:["pointermove","pointerleave","click"],setup(e,{emit:t,attrs:o}){const{elDropdown:l}=vt(),n=be(),c=T(null),r=b(()=>{var i,C;return(C=(i=g(c))==null?void 0:i.textContent)!=null?C:""}),{onItemEnter:s,onItemLeave:u}=L(Se,void 0),a=ne(i=>(t("pointermove",i),i.defaultPrevented),We(i=>{if(e.disabled){u(i);return}const C=i.currentTarget;C===document.activeElement||C.contains(document.activeElement)||(s(i),i.defaultPrevented||C==null||C.focus())})),p=ne(i=>(t("pointerleave",i),i.defaultPrevented),We(i=>{u(i)})),v=ne(i=>{if(!e.disabled)return t("click",i),i.type!=="keydown"&&i.defaultPrevented},i=>{var C,y,M;if(e.disabled){i.stopImmediatePropagation();return}(C=l==null?void 0:l.hideOnClick)!=null&&C.value&&((y=l.handleClick)==null||y.call(l)),(M=l.commandHandler)==null||M.call(l,e.command,n,i)}),w=b(()=>({...e,...o}));return{handleClick:v,handlePointerMove:a,handlePointerLeave:p,textContent:r,propsAndAttrs:w}}});function wo(e,t,o,l,n,c){var r;const s=W("el-dropdown-item-impl"),u=W("el-roving-focus-item"),a=W("el-dropdown-collection-item");return k(),te(a,{disabled:e.disabled,"text-value":(r=e.textValue)!=null?r:e.textContent},{default:m(()=>[h(u,{focusable:!e.disabled},{default:m(()=>[h(s,ce(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:m(()=>[N(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var ht=z(yo,[["render",wo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const Io=S({name:"ElDropdownMenu",props:lo,setup(e){const t=D("dropdown"),{_elDropdownSize:o}=vt(),l=o.value,{focusTrapRef:n,onKeydown:c}=L(nn,void 0),{contentRef:r,role:s,triggerId:u}=L(Se,void 0),{collectionRef:a,getItems:p}=L(io,void 0),{rovingFocusGroupRef:v,rovingFocusGroupRootStyle:w,tabIndex:i,onBlur:C,onFocus:y,onMousedown:M}=L(De,void 0),{collectionRef:K}=L(Le,void 0),P=b(()=>[t.b("menu"),t.bm("menu",l==null?void 0:l.value)]),q=st(r,a,n,v,K),F=ne(O=>{var G;(G=e.onKeydown)==null||G.call(e,O)},O=>{const{currentTarget:G,code:Q,target:H}=O;if(G.contains(H),$.tab===Q&&O.stopImmediatePropagation(),O.preventDefault(),H!==g(r)||!ao.includes(Q))return;const d=p().filter(f=>!f.disabled).map(f=>f.ref);ft.includes(Q)&&d.reverse(),ze(d)});return{size:l,rovingFocusGroupRootStyle:w,tabIndex:i,dropdownKls:P,role:s,triggerId:u,dropdownListWrapperRef:q,handleKeydown:O=>{F(O),c(O)},onBlur:C,onFocus:y,onMousedown:M}}}),Co=["role","aria-labelledby"];function Eo(e,t,o,l,n,c){return k(),x("ul",{ref:e.dropdownListWrapperRef,class:X(e.dropdownKls),style:ve(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:t[0]||(t[0]=(...r)=>e.onBlur&&e.onBlur(...r)),onFocus:t[1]||(t[1]=(...r)=>e.onFocus&&e.onFocus(...r)),onKeydown:t[2]||(t[2]=Fe((...r)=>e.handleKeydown&&e.handleKeydown(...r),["self"])),onMousedown:t[3]||(t[3]=Fe((...r)=>e.onMousedown&&e.onMousedown(...r),["self"]))},[N(e.$slots,"default")],46,Co)}var _t=z(Io,[["render",Eo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const $o=$e(vo,{DropdownItem:ht,DropdownMenu:_t}),Mo=ae(ht),To=ae(_t);let So=class{constructor(t,o){this.parent=t,this.domNode=o,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(t){t===this.subMenuItems.length?t=0:t<0&&(t=this.subMenuItems.length-1),this.subMenuItems[t].focus(),this.subIndex=t}addListeners(){const t=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,o=>{o.addEventListener("keydown",l=>{let n=!1;switch(l.code){case $.down:{this.gotoSubIndex(this.subIndex+1),n=!0;break}case $.up:{this.gotoSubIndex(this.subIndex-1),n=!0;break}case $.tab:{Ie(t,"mouseleave");break}case $.enter:case $.space:{n=!0,l.currentTarget.click();break}}return n&&(l.preventDefault(),l.stopPropagation()),!1})})}},ko=class{constructor(t,o){this.domNode=t,this.submenu=null,this.submenu=null,this.init(o)}init(t){this.domNode.setAttribute("tabindex","0");const o=this.domNode.querySelector(".".concat(t,"-menu"));o&&(this.submenu=new So(this,o)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",t=>{let o=!1;switch(t.code){case $.down:{Ie(t.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),o=!0;break}case $.up:{Ie(t.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),o=!0;break}case $.tab:{Ie(t.currentTarget,"mouseleave");break}case $.enter:case $.space:{o=!0,t.currentTarget.click();break}}o&&t.preventDefault()})}},Oo=class{constructor(t,o){this.domNode=t,this.init(o)}init(t){const o=this.domNode.childNodes;Array.from(o).forEach(l=>{l.nodeType===1&&new ko(l,t)})}};const No=S({name:"ElMenuCollapseTransition",setup(){const e=D("menu");return{listeners:{onBeforeEnter:o=>o.style.opacity="0.2",onEnter(o,l){ye(o,"".concat(e.namespace.value,"-opacity-transition")),o.style.opacity="1",l()},onAfterEnter(o){Oe(o,"".concat(e.namespace.value,"-opacity-transition")),o.style.opacity=""},onBeforeLeave(o){o.dataset||(o.dataset={}),Nt(o,e.m("collapse"))?(Oe(o,e.m("collapse")),o.dataset.oldOverflow=o.style.overflow,o.dataset.scrollWidth=o.clientWidth.toString(),ye(o,e.m("collapse"))):(ye(o,e.m("collapse")),o.dataset.oldOverflow=o.style.overflow,o.dataset.scrollWidth=o.clientWidth.toString(),Oe(o,e.m("collapse"))),o.style.width="".concat(o.scrollWidth,"px"),o.style.overflow="hidden"},onLeave(o){ye(o,"horizontal-collapse-transition"),o.style.width="".concat(o.dataset.scrollWidth,"px")}}}}});function Bo(e,t,o,l,n,c){return k(),te(Xe,ce({mode:"out-in"},e.listeners),{default:m(()=>[N(e.$slots,"default")]),_:3},16)}var Po=z(No,[["render",Bo],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function gt(e,t){const o=b(()=>{let n=e.parent;const c=[t.value];for(;n.type.name!=="ElMenu";)n.props.index&&c.unshift(n.props.index),n=n.parent;return c});return{parentMenu:b(()=>{let n=e.parent;for(;n&&!["ElMenu","ElSubMenu"].includes(n.type.name);)n=n.parent;return n}),indexPath:o}}function Fo(e){return b(()=>{const o=e.backgroundColor;return o?new xt(o).shade(20).toString():""})}const bt=(e,t)=>{const o=D("menu");return b(()=>o.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":Fo(e).value||"","active-color":e.activeTextColor||"",level:"".concat(t)}))},Ro=re({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:me},expandOpenIcon:{type:me},collapseCloseIcon:{type:me},collapseOpenIcon:{type:me}}),we="ElSubMenu";var Ke=S({name:we,props:Ro,setup(e,{slots:t,expose:o}){Zt({from:"popper-append-to-body",replacement:"teleported",scope:we,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},b(()=>e.popperAppendToBody!==void 0));const l=be(),{indexPath:n,parentMenu:c}=gt(l,b(()=>e.index)),r=D("menu"),s=D("sub-menu"),u=L("rootMenu");u||Ee(we,"can not inject root menu");const a=L("subMenu:".concat(c.value.uid));a||Ee(we,"can not inject sub menu");const p=T({}),v=T({});let w;const i=T(!1),C=T(),y=T(null),M=b(()=>d.value==="horizontal"&&P.value?"bottom-start":"right-start"),K=b(()=>d.value==="horizontal"&&P.value||d.value==="vertical"&&!u.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?O.value?e.expandOpenIcon:e.expandCloseIcon:tt:e.collapseCloseIcon&&e.collapseOpenIcon?O.value?e.collapseOpenIcon:e.collapseCloseIcon:Ft),P=b(()=>a.level===0),q=b(()=>{var E;const B=(E=e.teleported)!=null?E:e.popperAppendToBody;return B===void 0?P.value:B}),F=b(()=>u.props.collapse?"".concat(r.namespace.value,"-zoom-in-left"):"".concat(r.namespace.value,"-zoom-in-top")),A=b(()=>d.value==="horizontal"&&P.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),O=b(()=>u.openedMenus.includes(e.index)),G=b(()=>{let E=!1;return Object.values(p.value).forEach(B=>{B.active&&(E=!0)}),Object.values(v.value).forEach(B=>{B.active&&(E=!0)}),E}),Q=b(()=>u.props.backgroundColor||""),H=b(()=>u.props.activeTextColor||""),le=b(()=>u.props.textColor||""),d=b(()=>u.props.mode),f=Re({index:e.index,indexPath:n,active:G}),I=bt(u.props,a.level+1),V=b(()=>d.value!=="horizontal"?{color:le.value}:{borderBottomColor:G.value?u.props.activeTextColor?H.value:"":"transparent",color:G.value?H.value:le.value}),U=()=>{var E,B,Y;return(Y=(B=(E=y.value)==null?void 0:E.popperRef)==null?void 0:B.popperInstanceRef)==null?void 0:Y.destroy()},oe=E=>{E||U()},_=()=>{u.props.menuTrigger==="hover"&&u.props.mode==="horizontal"||u.props.collapse&&u.props.mode==="vertical"||e.disabled||u.handleSubMenuClick({index:e.index,indexPath:n.value,active:G.value})},R=(E,B=e.showTimeout)=>{var Y;E.type!=="focus"&&(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"||e.disabled||(a.mouseInChild.value=!0,w==null||w(),{stop:w}=Ge(()=>{u.openMenu(e.index,n.value)},B),q.value&&((Y=c.value.vnode.el)==null||Y.dispatchEvent(new MouseEvent("mouseenter")))))},j=(E=!1)=>{var B,Y;u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"||(w==null||w(),a.mouseInChild.value=!1,{stop:w}=Ge(()=>!i.value&&u.closeMenu(e.index,n.value),e.hideTimeout),q.value&&E&&((B=l.parent)==null?void 0:B.type.name)==="ElSubMenu"&&((Y=a.handleMouseleave)==null||Y.call(a,!0)))};ue(()=>u.props.collapse,E=>oe(!!E));{const E=Y=>{v.value[Y.index]=Y},B=Y=>{delete v.value[Y.index]};se("subMenu:".concat(l.uid),{addSubMenu:E,removeSubMenu:B,handleMouseleave:j,mouseInChild:i,level:a.level+1})}return o({opened:O}),ge(()=>{u.addSubMenu(f),a.addSubMenu(f)}),Me(()=>{a.removeSubMenu(f),u.removeSubMenu(f)}),()=>{var E;const B=[(E=t.title)==null?void 0:E.call(t),J(he,{class:s.e("icon-arrow"),style:{transform:O.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&u.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>ie(K.value)?J(l.appContext.components[K.value]):J(K.value)})],Y=u.isMenuPopup?J(Ae,{ref:y,visible:O.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:M.value,teleported:q.value,fallbackPlacements:A.value,transition:F.value,gpuAcceleration:!1},{content:()=>{var _e;return J("div",{class:[r.m(d.value),r.m("popup-container"),e.popperClass],onMouseenter:ke=>R(ke,100),onMouseleave:()=>j(!0),onFocus:ke=>R(ke,100)},[J("ul",{class:[r.b(),r.m("popup"),r.m("popup-".concat(M.value))],style:I.value},[(_e=t.default)==null?void 0:_e.call(t)])])},default:()=>J("div",{class:s.e("title"),style:[V.value,{backgroundColor:Q.value}],onClick:_},B)}):J(Te,{},[J("div",{class:s.e("title"),style:[V.value,{backgroundColor:Q.value}],ref:C,onClick:_},B),J(hn,{},{default:()=>{var _e;return Bt(J("ul",{role:"menu",class:[r.b(),r.m("inline")],style:I.value},[(_e=t.default)==null?void 0:_e.call(t)]),[[Pt,O.value]])}})]);return J("li",{class:[s.b(),s.is("active",G.value),s.is("opened",O.value),s.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:O.value,onMouseenter:R,onMouseleave:()=>j(!0),onFocus:R},[Y])}}});const Ao=re({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:Z(Array),default:()=>At([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),Ne=e=>Array.isArray(e)&&e.every(t=>ie(t)),Lo={close:(e,t)=>ie(e)&&Ne(t),open:(e,t)=>ie(e)&&Ne(t),select:(e,t,o,l)=>ie(e)&&Ne(t)&&Lt(o)&&(l===void 0||l instanceof Promise)};var Do=S({name:"ElMenu",props:Ao,emits:Lo,setup(e,{emit:t,slots:o,expose:l}){const n=be(),c=n.appContext.config.globalProperties.$router,r=T(),s=D("menu"),u=D("sub-menu"),a=T(-1),p=T(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),v=T(e.defaultActive),w=T({}),i=T({}),C=b(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),y=()=>{const d=v.value&&w.value[v.value];if(!d||e.mode==="horizontal"||e.collapse)return;d.indexPath.forEach(I=>{const V=i.value[I];V&&M(I,V.indexPath)})},M=(d,f)=>{p.value.includes(d)||(e.uniqueOpened&&(p.value=p.value.filter(I=>f.includes(I))),p.value.push(d),t("open",d,f))},K=d=>{const f=p.value.indexOf(d);f!==-1&&p.value.splice(f,1)},P=(d,f)=>{K(d),t("close",d,f)},q=({index:d,indexPath:f})=>{p.value.includes(d)?P(d,f):M(d,f)},F=d=>{(e.mode==="horizontal"||e.collapse)&&(p.value=[]);const{index:f,indexPath:I}=d;if(!(je(f)||je(I)))if(e.router&&c){const V=d.route||f,U=c.push(V).then(oe=>(oe||(v.value=f),oe));t("select",f,I,{index:f,indexPath:I,route:V},U)}else v.value=f,t("select",f,I,{index:f,indexPath:I})},A=d=>{const f=w.value,I=f[d]||v.value&&f[v.value]||f[e.defaultActive];I?v.value=I.index:v.value=d},O=()=>{var d,f;if(!r.value)return-1;const I=Array.from((f=(d=r.value)==null?void 0:d.childNodes)!=null?f:[]).filter(E=>E.nodeName!=="#comment"&&(E.nodeName!=="#text"||E.nodeValue)),V=64,U=Number.parseInt(getComputedStyle(r.value).paddingLeft,10),oe=Number.parseInt(getComputedStyle(r.value).paddingRight,10),_=r.value.clientWidth-U-oe;let R=0,j=0;return I.forEach((E,B)=>{R+=E.offsetWidth||0,R<=_-V&&(j=B+1)}),j===I.length?-1:j},G=(d,f=33.34)=>{let I;return()=>{I&&clearTimeout(I),I=setTimeout(()=>{d()},f)}};let Q=!0;const H=()=>{const d=()=>{a.value=-1,et(()=>{a.value=O()})};Q?d():G(d)(),Q=!1};ue(()=>e.defaultActive,d=>{w.value[d]||(v.value=""),A(d)}),ue(()=>e.collapse,d=>{d&&(p.value=[])}),ue(w.value,y);let le;Rt(()=>{e.mode==="horizontal"&&e.ellipsis?le=Dt(r,H).stop:le==null||le()});{const d=U=>{i.value[U.index]=U},f=U=>{delete i.value[U.index]};se("rootMenu",Re({props:e,openedMenus:p,items:w,subMenus:i,activeIndex:v,isMenuPopup:C,addMenuItem:U=>{w.value[U.index]=U},removeMenuItem:U=>{delete w.value[U.index]},addSubMenu:d,removeSubMenu:f,openMenu:M,closeMenu:P,handleMenuItemClick:F,handleSubMenuClick:q})),se("subMenu:".concat(n.uid),{addSubMenu:d,removeSubMenu:f,mouseInChild:T(!1),level:0})}return ge(()=>{e.mode==="horizontal"&&new Oo(n.vnode.el,s.namespace.value)}),l({open:f=>{const{indexPath:I}=i.value[f];I.forEach(V=>M(V,I))},close:K,handleResize:H}),()=>{var d,f;let I=(f=(d=o.default)==null?void 0:d.call(o))!=null?f:[];const V=[];if(e.mode==="horizontal"&&r.value){const _=on(I),R=a.value===-1?_:_.slice(0,a.value),j=a.value===-1?[]:_.slice(a.value);j!=null&&j.length&&e.ellipsis&&(I=R,V.push(J(Ke,{index:"sub-menu-more",class:u.e("hide-arrow")},{title:()=>J(he,{class:u.e("icon-more")},{default:()=>J(zt)}),default:()=>j})))}const U=bt(e,0),oe=J("ul",{key:String(e.collapse),role:"menubar",ref:r,style:U.value,class:{[s.b()]:!0,[s.m(e.mode)]:!0,[s.m("collapse")]:e.collapse}},[...I,...V]);return e.collapseTransition&&e.mode==="vertical"?J(Po,()=>oe):oe}}});const zo=re({index:{type:Z([String,null]),default:null},route:{type:Z([String,Object])},disabled:Boolean}),Ko={click:e=>ie(e.index)&&Array.isArray(e.indexPath)},Be="ElMenuItem",Go=S({name:Be,components:{ElTooltip:Ae},props:zo,emits:Ko,setup(e,{emit:t}){const o=be(),l=L("rootMenu"),n=D("menu"),c=D("menu-item");l||Ee(Be,"can not inject root menu");const{parentMenu:r,indexPath:s}=gt(o,fe(e,"index")),u=L("subMenu:".concat(r.value.uid));u||Ee(Be,"can not inject sub menu");const a=b(()=>e.index===l.activeIndex),p=Re({index:e.index,indexPath:s,active:a}),v=()=>{e.disabled||(l.handleMenuItemClick({index:e.index,indexPath:s.value,route:e.route}),t("click",p))};return ge(()=>{u.addSubMenu(p),l.addMenuItem(p)}),Me(()=>{u.removeSubMenu(p),l.removeMenuItem(p)}),{parentMenu:r,rootMenu:l,active:a,nsMenu:n,nsMenuItem:c,handleClick:v}}});function Ho(e,t,o,l,n,c){const r=W("el-tooltip");return k(),x("li",{class:X([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:t[0]||(t[0]=(...s)=>e.handleClick&&e.handleClick(...s))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(k(),te(r,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:m(()=>[N(e.$slots,"title")]),default:m(()=>[ee("div",{class:X(e.nsMenu.be("tooltip","trigger"))},[N(e.$slots,"default")],2)]),_:3},8,["effect"])):(k(),x(Te,{key:1},[N(e.$slots,"default"),N(e.$slots,"title")],64))],2)}var yt=z(Go,[["render",Ho],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const Vo={title:String},Uo="ElMenuItemGroup",jo=S({name:Uo,props:Vo,setup(){return{ns:D("menu-item-group")}}});function Yo(e,t,o,l,n,c){return k(),x("li",{class:X(e.ns.b())},[ee("div",{class:X(e.ns.e("title"))},[e.$slots.title?N(e.$slots,"title",{key:1}):(k(),x(Te,{key:0},[pe(nt(e.title),1)],64))],2),ee("ul",null,[N(e.$slots,"default")])],2)}var wt=z(jo,[["render",Yo],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const Wo=$e(Do,{MenuItem:yt,MenuItemGroup:wt,SubMenu:Ke}),Jo=ae(yt);ae(wt);const qo=ae(Ke);const xo=""+new URL("default-745c3d16.png",import.meta.url).href;const de=e=>(Wt("data-v-2c750a40"),e=e(),Jt(),e),Zo=de(()=>ee("div",{class:"el-aside__logo"},null,-1)),Qo=de(()=>ee("span",null,"文章分类",-1)),Xo=de(()=>ee("span",null,"文章管理",-1)),el=de(()=>ee("span",null,"个人中心",-1)),tl=de(()=>ee("span",null,"基本资料",-1)),nl=de(()=>ee("span",null,"更换头像",-1)),ol=de(()=>ee("span",null,"重置密码",-1)),ll={class:"el-dropdown__box"},sl={__name:"LayoutContainer",setup(e){const t=Kt(),o=Gt();ge(()=>{t.getUser()});const{user:{username:l,user_pic:n,nickname:c}}=t,r=async s=>{s==="logout"&&(await ln.confirm("你确定要退出吗","温馨提示",{type:"warning",confirmButtonText:"确定",cancelButtonText:"取消"}),t.removeToken(),t.removeUser()),o.push("/user/".concat(s))};return(s,u)=>{const a=he,p=Jo,v=qo,w=Wo,i=kn,C=mn,y=Mo,M=To,K=$o,P=Nn,q=W("router-view"),F=Bn,A=On,O=Sn;return k(),te(O,{class:"layout-container"},{default:m(()=>[h(i,{width:"200px"},{default:m(()=>[Zo,h(w,{"active-text-color":"#ffd04b","background-color":"transparent","default-active":s.$route.path,"text-color":"#fff",router:""},{default:m(()=>[h(p,{index:"/article/channel"},{default:m(()=>[h(a,null,{default:m(()=>[h(g(Ht))]),_:1}),Qo]),_:1}),h(p,{index:"/article/manage"},{default:m(()=>[h(a,null,{default:m(()=>[h(g(Vt))]),_:1}),Xo]),_:1}),h(v,{index:"/user"},{title:m(()=>[h(a,null,{default:m(()=>[h(g(Ut))]),_:1}),el]),default:m(()=>[h(p,{index:"/user/profile"},{default:m(()=>[h(a,null,{default:m(()=>[h(g(He))]),_:1}),tl]),_:1}),h(p,{index:"/user/avatar"},{default:m(()=>[h(a,null,{default:m(()=>[h(g(Ve))]),_:1}),nl]),_:1}),h(p,{index:"/user/password"},{default:m(()=>[h(a,null,{default:m(()=>[h(g(Ue))]),_:1}),ol]),_:1})]),_:1})]),_:1},8,["default-active"])]),_:1}),h(O,null,{default:m(()=>[h(P,null,{default:m(()=>[ee("div",null,"你好："+nt(g(c)||g(l)),1),h(K,{placement:"bottom-end",onCommand:r},{dropdown:m(()=>[h(M,null,{default:m(()=>[h(y,{command:"profile",icon:g(He)},{default:m(()=>[pe("基本资料")]),_:1},8,["icon"]),h(y,{command:"avatar",icon:g(Ve)},{default:m(()=>[pe("更换头像")]),_:1},8,["icon"]),h(y,{command:"password",icon:g(Ue)},{default:m(()=>[pe("重置密码")]),_:1},8,["icon"]),h(y,{command:"logout",icon:g(jt)},{default:m(()=>[pe("退出登录")]),_:1},8,["icon"])]),_:1})]),default:m(()=>[ee("span",ll,[h(C,{src:g(n)||g(xo)},null,8,["src"]),h(a,null,{default:m(()=>[h(g(Yt))]),_:1})])]),_:1})]),_:1}),h(F,null,{default:m(()=>[h(q)]),_:1}),h(A,null,{default:m(()=>[pe("大事件 ©2023 Created by wangdangyue")]),_:1})]),_:1})]),_:1})}}},vl=Qt(sl,[["__scopeId","data-v-2c750a40"]]);export{vl as default};
