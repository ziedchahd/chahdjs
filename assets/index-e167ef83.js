import{n as N,c as T,Q as q,i as v,a as s,f as x,I as A,g as L,h as _,t as C,F as k,o as P,r as Q,b as E,D as R,p as B,j as G,q as H}from"./index-00bf0c33.js";import{V as K}from"./Value-1107dbb2.js";import{L as U}from"./index-345cd19e.js";import{c as W}from"./createField-b596c149.js";const X=C('<div><span class="cm-cascader-text">');function Y(e){const[r,n]=e.store,i=()=>r.selectedValue.includes(e.data.value),h=()=>({"cm-cascader-item":!0,"cm-cascader-item-active":i(),"cm-cascader-item-disabled":e.data.disabled}),d=ae(),[$,u]=T(!1),S=async()=>{if(!e.data.disabled){if(e.data.loading&&d&&d.loadData)try{u(!0);const a=await d.loadData(e.data);d&&d.addChildren(e.data,a),e.data.loading=!1}catch{}finally{u(!1)}e.trigger==="click"&&f(),d&&d.onSelect(e.data)}},f=()=>{let a=[];for(let o=0;o<e.level;o++)a.push(r.selectedValue[o]);a[e.level]=e.data.value,n("selectedValue",a)};let m=null;const D=()=>{e.data.disabled||(m&&clearTimeout(m),m=setTimeout(()=>{f()},100))};return(()=>{const a=X(),o=a.firstChild;return q(a,"mouseenter",e.trigger==="hover"?D:void 0),a.$$click=S,v(a,()=>e.data.icon,o),v(o,()=>e.data.title),v(a,s(x,{get when(){return e.data.children&&e.data.children.length||e.data.loading},get children(){return s(x,{get when(){return $()},get fallback(){return s(A,{name:"chevron-right",class:"cm-menu-submenu-cert"})},get children(){return s(U,{color:"#1890ff"})}})}}),null),L(b=>_(a,h(),b)),a})()}N(["click"]);const Z=C('<div class="cm-cascader-list">');function p(e){const[r,n]=e.store,i=()=>e.data;return(()=>{const h=Z();return v(h,s(k,{get each(){return i()},children:d=>s(Y,{get trigger(){return e.trigger},get data(){return e.mapData[d]},store:[r,n],get level(){return e.level}})})),h})()}const ee=C('<div tabindex="0">'),te=C('<div class="cm-cascader-wrap">'),w=B();function y(e,r){e&&e.length&&e.forEach(n=>{r.push(n),n.children&&y(n.children,r)})}function I(e,r){e&&e.length&&e.forEach(n=>{r[n.value]=n,n.children&&I(n.children,r)})}function de(e){const[r,n]=P(e,"visible",!1),[i,h]=W(e,[]),d=e.trigger??"click";let $=[],u={};const S=JSON.parse(JSON.stringify(e.data));y(e.data,$),I(S,u);const[f,m]=Q({selectedValue:i()||[],columns:[]}),D=e.seperator??"/",a=e.align??"bottomLeft",o=()=>G(e,"cm-cascader",{"cm-cascader-disabled":e.disabled,"cm-cascader-clearable":!e.disabled&&e.clearable&&i()&&i().length,[`cm-cascader-${e.size}`]:e.size});let b={},M=e.data.map(t=>t.value);E(()=>{let t=i()||[];m("selectedValue",[...t])}),E(()=>{let t=f.selectedValue,l=[M];t&&t.length&&t.forEach(c=>{if(b[c])l.push(b[c]);else{let g=u[c];if(g&&g.children){let V=g.children.map(J=>J.value);b[c]=V,l.push(V)}}}),m("columns",l)});const z=()=>{const t=i(),l=t?t.map(c=>u[c].title):[];return l.length?l.join(D):""},F=t=>{if(!(t.children&&t.children.length)||e.changeOnSelect){e.onSelect&&e.onSelect(t);const c=f.selectedValue.map(g=>g);h(c),e.onChange&&e.onChange(c)}t.children&&t.children.length||n(!1)},O=(t,l)=>{t.loading=!1,t.children=l,l.forEach(c=>{u[c.value]=c})},j=()=>{h([]),e.onChange&&e.onChange([])};return s(w.Provider,{get value(){return{onSelect:F,loadData:e.loadData,addChildren:O}},get children(){const t=ee();return v(t,s(R,{visible:[r,n],get transfer(){return e.transfer},align:a,get revers(){return e.revers},trigger:"click",get disabled(){return e.disabled},get menu(){return(()=>{const l=te();return v(l,s(k,{get each(){return f.columns},children:(c,g)=>s(p,{data:c,trigger:d,store:[f,m],mapData:u,get level(){return g()}})})),l})()},get children(){return s(K,{get prepend(){return e.prepend},get text(){return z()},onClear:j,get clearable(){return e.clearable},get placeholder(){return e.placeholder},get disabled(){return e.disabled},get size(){return e.size}})}})),L(l=>_(t,o(),l)),t}})}const ae=()=>H(w);export{de as C};
