import{C as te}from"./index-39a7fc71.js";import{R as ne}from"./index-cff0105e.js";import{I as T}from"./input-14b161dc.js";import{z as J,a0 as le,m as Q,g as z,h as U,s as F,t as w,j as K,a as t,I as A,c as I,d as re,e as P,r as ae,b as V,U as ie,R as D,i as S,D as W,u as ce,f as M,A as ue,S as Y,N as o,O as se}from"./index-00bf0c33.js";import{c as G}from"./createField-b596c149.js";import{S as oe}from"./index-469010fe.js";import{S as ge}from"./index-f515a01c.js";import{R as he}from"./index-26110a98.js";import{E as de,O as me,c as L,S as fe,H as ve,A as ye,R as Ce,t as $e,T as _e,D as be}from"./Recommend-04f5af18.js";import{V as we}from"./Value-1107dbb2.js";import{A as xe}from"./index-b5d4e03a.js";import{C as ke}from"./index-e167ef83.js";import{S as Se}from"./index-73979b49.js";import{T as Oe}from"./index-2c1e88fa.js";import{B as q}from"./index-345cd19e.js";import{_ as ze}from"./index-e4583d54.js";const He=w('<div><textarea class="cm-input">');function Ee(e){const[r,f]=J(e,["classList","class","style","value","autoHeight","disabled","onChange","onInput","onKeyUp","onEnter","name","trigger"]),v=()=>K(r,"cm-textarea","cm-input-wrapper",{"cm-input-disabled":r.disabled,"cm-input-auto-height":r.autoHeight}),[g,C]=G(e,""),c=r.trigger||"blur",s=a=>{},$=a=>{C(a.target.value),r.onChange&&r.onChange(a.target.value)},O=a=>{c==="input"&&(C(a.target.value),r.onChange&&r.onChange(a.target.value)),r.onInput&&r.onInput(a.target.value,a),r.autoHeight&&y(a)},_=a=>{r.onKeyUp&&r.onKeyUp(a.target.value,a),a.keyCode===13&&r.onEnter&&r.onEnter(a.target.value,a)};let h;const y=a=>{const d=a.target;h||(h=d.clientHeight),d.scrollHeight>h&&(d.value.split(`
`).length===1?d.style.height=`${h}px`:d.style.height="auto",d.style.overflowY="hidden",d.scrollTop=0,d.style.height=`${d.scrollHeight}px`)};return(()=>{const a=He(),d=a.firstChild;return le(d,Q(f,{get value(){return g()},spellcheck:!1,autocomplete:"off",wrap:"soft",onChange:s,onInput:O,onKeyUp:_,onBlur:$}),!1,!1),z(b=>{const u=v(),m=e.style;return b._v$=U(a,u,b._v$),b._v$2=F(a,m,b._v$2),b},{_v$:void 0,_v$2:void 0}),a})()}function Ie(e){const[r,f]=J(e,["enterButton","onEnter","onSearch"]),v=r.enterButton?null:t(A,{name:"search",style:{cursor:"pointer"},get onClick(){return r.onSearch}});let g=null;return r.enterButton&&(g=typeof r.enterButton=="string"?r.enterButton:t(A,{name:"search",get onClick(){return r.onSearch}})),t(T,Q({get onEnter(){return r.onEnter},suffix:v,append:g},f))}const Ve=w("<div>"),Re=w('<div class="cm-select-options-wrap"><div class="cm-select-options"><ul class="cm-select-option-list">'),Be=w('<div class="cm-select-filter-wrap">');function Ae(e){const[r,f]=I(!1),v=e.align??"bottomLeft",g=re(()=>e.children),C=()=>g.toArray(),[c,s]=G(e,e.multi?[]:""),$=()=>K(e,"cm-select",{"cm-select-disabled":e.disabled,[`cm-select-${e.size}`]:e.size,"cm-select-clearable":!e.disabled&&e.clearable&&`${c()}`.length!==0,"cm-select-multi":e.multi,"cm-select-open":r(),"cm-select-with-prefix":e.prefix});let O;const _=e.textField||"label",h=e.valueField||"value";let y={};function a(l,n){l&&l.forEach(i=>{n.push(i),i._show=!0,y[i[h]]=i,i.items&&a(i.items,n)})}const d=P(()=>{const l=C();y={};let n=[];return e.emptyOption&&n.push({[h]:"",[_]:e.emptyOption,_show:!0,emptyOption:!0}),l&&a(l,n),n}),[b,u]=ae({list:[]});V(()=>{const l=ie(()=>c());u("list",d()),u("list",n=>n,D(n=>{e.multi?n._checked=l.includes(n[h]):n._checked=l===n[h]}))}),V(()=>{const l=c();u("list",n=>n,D(n=>{e.multi?n._checked=l.includes(n[h]):n._checked=l===n[h]}))});const m=l=>{if(!(y[l]&&y[l].items&&y[l].items.length))if(e.multi){let n=c();const i=n.indexOf(l);i>-1?n.splice(i,1):(n=[...n],n.push(l)),s([...n]),e.onChange&&e.onChange(n)}else s(l),f(!1),e.onChange&&e.onChange(l)},H=()=>{const l=[];return b.list.forEach(n=>{n._checked&&l.push({id:n[h],title:n[_]})}),e.multi?l.length?l:e.emptyOption?[{id:"",title:e.emptyOption}]:[]:l.length?l[0].title:e.emptyOption?e.emptyOption:""},R=l=>{e.multi?(e.onChange&&e.onChange([]),s([])):(e.onChange&&e.onChange(""),s(""),f(!1))},Z=l=>{u("list",n=>n,D(n=>{n._show=n[_].indexOf(l)>-1}))},p=(l,n)=>{if(e.multi){let i=c();const x=i.indexOf(l.id);x>-1&&i.splice(x,1),s([...i]),e.onChange&&e.onChange(i)}},ee=P(()=>b.list.filter(l=>l._show));return(()=>{const l=Ve(),n=O;return typeof n=="function"?ce(n,l):O=l,S(l,t(W,{get transfer(){return e.transfer},align:v,get disabled(){return e.disabled},trigger:"click",visible:[r,f],get menu(){return(()=>{const i=Re(),x=i.firstChild,B=x.firstChild;return S(x,(()=>{const E=P(()=>!!e.filter);return()=>E()?(()=>{const k=Be();return S(k,t(X,{notCreateFiled:!0,class:"cm-select-filter",size:"small",clearable:!0,onInput:Z})),k})():null})(),B),S(B,t(ze,{get items(){return ee()},itemEstimatedSize:30,maxHeight:200,children:E=>{const k=E.item;return k.emptyOption?t(de,{visible:!0,get data(){return{label:k[_],value:""}},get checked(){return c()===""},onClick:R}):t(me,{ref(j){const N=E.ref;typeof N=="function"?N(j):E.ref=j},get renderOption(){return E.renderOption},get visible(){return k._show},get disabled(){return k.disabled},data:k,get checked(){return k._checked},textField:_,valueField:h,onClick:m})}})),z(()=>(e.maxHeight?`${e.maxHeight}px`:"")!=null?x.style.setProperty("max-height",e.maxHeight?`${e.maxHeight}px`:""):x.style.removeProperty("max-height")),i})()},get children(){return t(we,{get text(){return H()},get multi(){return e.multi},get showMax(){return e.showMax},get disabled(){return e.disabled},get showMore(){return e.showMore},get valueClosable(){return e.valueClosable},get clearable(){return e.clearable},onClear:R,get placeholder(){return e.placeholder},get prepend(){return e.prefix},get size(){return e.size},get icon(){return t(A,{name:"chevron-down",class:"cm-select-cert"})},onClose:p})}})),z(i=>{const x=$(),B=e.style;return i._v$=U(l,x,i._v$),i._v$2=F(l,B,i._v$2),i},{_v$:void 0,_v$2:void 0}),l})()}const Fe=w('<div class="cm-select-color">'),Pe=w('<div class="cm-color-picker-value" tabindex="0"><span>A</span><input type="hidden"><div class="cm-select-color-wrap">'),De=w('<div class="cm-select-color cm-select-color-empty">');function Le(e){const[r,f]=I({});return V(()=>{const v=e.open?{background:`rgba(${e.currentValue.rgba.r},${e.currentValue.rgba.g},${e.currentValue.rgba.b},${e.currentValue.rgba.a})`}:{background:e.value};f(v)}),(()=>{const v=Pe(),g=v.firstChild,C=g.nextSibling,c=C.nextSibling;return g.style.setProperty("width","0px"),g.style.setProperty("font-size","12px"),g.style.setProperty("visibility","hidden"),g.style.setProperty("line-height","initial"),S(c,t(M,{get when(){return r().background},get fallback(){return(()=>{const s=De();return S(s,t(A,{name:"x",size:12})),s})()},get children(){const s=Fe();return z($=>F(s,r(),$)),s}})),z(()=>ue(C,"name",e.name)),z(()=>C.value=e.value),v})()}const Te=w("<div>"),Me=w('<div class="cm-color-picker-confirm">'),Ue=w('<div class="cm-color-picker-wrap">');function Ke(e){const[r,f]=I(!1),v=e.align??"bottomLeft",[g,C]=G(e,""),[c,s]=I(L(g()||"#2D8CF0")),[$,O]=I("");let _=c();const h=()=>K(e,"cm-color-picker",{[`cm-color-picker-${e.size}`]:e.size}),y=u=>{a(u)},a=(u,m)=>{_=c().hsl.h,s(L(u,m||_))},d=()=>{f(!1),C($()),e.onChange&&e.onChange($())},b=()=>{f(!1),C(""),e.onChange&&e.onChange("")};return V(()=>{e.alpha?O($e(c().rgba)):O(c().hex)}),V(()=>{const u=L($());s(u)}),(()=>{const u=Te();return S(u,t(W,{get transfer(){return e.transfer},align:v,get disabled(){return e.disabled},trigger:"click",visible:[r,f],get menu(){return(()=>{const m=Ue();return S(m,t(Y,{dir:"v",get children(){return[t(fe,{get value(){return c()},onChange:y}),t(ve,{get value(){return c()},onChange:y}),t(M,{get when(){return e.alpha},get children(){return t(ye,{get value(){return c()},onChange:y})}}),t(M,{get when(){return e.recommend},get children(){return t(Ce,{get colors(){return e.colors},onChange:y})}}),(()=>{const H=Me();return S(H,t(Y,{dir:"h",get children(){return[t(X,{size:"small",class:"cm-color-picker-input",value:[$,O]}),t(q,{size:"small",type:"default",onClick:b,children:"清除"}),t(q,{size:"small",type:"primary",onClick:d,children:"确定"})]}})),H})()]}})),m})()},get children(){return t(Le,{get disabled(){return e.disabled},get size(){return e.size},get currentValue(){return c()},get value(){return g()},get open(){return r()}})}})),z(m=>{const H=h(),R=e.style;return m._v$=U(u,H,m._v$),m._v$2=F(u,R,m._v$2),m},{_v$:void 0,_v$2:void 0}),u})()}function X(e){return t(se,{get fallback(){return t(T,e)},get children(){return[t(o,{get when(){return e.type==="text"||!e.type||e.type==="password"},get children(){return t(T,e)}}),t(o,{get when(){return e.type==="checkbox"},get children(){return t(te,e)}}),t(o,{get when(){return e.type==="radio"},get children(){return t(ne,e)}}),t(o,{get when(){return e.type==="textarea"},get children(){return t(Ee,e)}}),t(o,{get when(){return e.type==="switch"},get children(){return t(oe,e)}}),t(o,{get when(){return e.type==="search"},get children(){return t(Ie,e)}}),t(o,{get when(){return e.type==="spinner"},get children(){return t(ge,e)}}),t(o,{get when(){return e.type==="rate"},get children(){return t(he,e)}}),t(o,{get when(){return e.type==="select"},get children(){return t(Ae,e)}}),t(o,{get when(){return e.type==="autocomplete"},get children(){return t(xe,e)}}),t(o,{get when(){return e.type==="cascader"},get children(){return t(ke,e)}}),t(o,{get when(){return e.type==="time"||e.type==="timeRange"},get children(){return t(_e,e)}}),t(o,{get when(){return e.type==="date"||e.type==="dateRange"||e.type==="month"||e.type==="monthRange"||e.type==="dateTime"||e.type==="dateTimeRange"},get children(){return t(be,e)}}),t(o,{get when(){return e.type==="slider"},get children(){return t(Se,e)}}),t(o,{get when(){return e.type==="treeSelect"},get children(){return t(Oe,e)}}),t(o,{get when(){return e.type==="color"},get children(){return t(Ke,e)}})]}})}export{Ke as C,X as I,Ae as S};
