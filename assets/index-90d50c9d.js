import{n as E,i,a as s,t as u,Z as R,e as F,F as M,g as z,w as j,f,c as x,J as q,I as L,h as B,s as J,j as U,u as V,r as Y,_ as Z,$ as A,Y as D,R as G}from"./index-00bf0c33.js";const H=u('<div class="cm-notification-icon">'),K=u('<div class="cm-notification-head">'),O=u('<span class="cm-notification-btn-wrap">'),Q=u('<div><div class="cm-notification-item-wrap"><a class="cm-notification-close"></a><div class="cm-notification-content"><div class="cm-notification-body">'),W=u("<div>"),X=u('<div class="cm-notification">');function tt(e){const[o,c]=x(!1),[a,t]=x(!1);let l;const r=e.data;let{style:$,icon:_,btn:v,theme:p,title:k,content:I}=r;const N=()=>U(e,"cm-notification-item",{"cm-notification-item-width-icon":_,"cm-notification-item-open":o(),"cm-notification-item-close":a(),[`cm-notification-item-${p}`]:p});q(()=>{setTimeout(()=>{c(!0)}),r.duration&&setTimeout(()=>{y()},r.duration*1e3)});const y=()=>{a()||(t(!0),setTimeout(()=>{S()},250))},S=()=>{e.onClose(r.key,r.dock),r.onClose&&r.onClose()};return(()=>{const d=Q(),b=d.firstChild,C=b.firstChild,m=C.nextSibling,w=m.firstChild,g=l;return typeof g=="function"?V(g,d):l=d,C.$$click=y,i(C,s(L,{name:"x",size:16})),i(b,s(f,{when:_,get children(){const n=H();return i(n,s(L,{name:_})),n}}),m),i(m,s(f,{when:k,get children(){const n=K();return i(n,k),n}}),w),i(w,I),i(m,s(f,{when:v,get children(){const n=O();return i(n,v),n}}),null),z(n=>{const P=N(),T=$;return n._v$=B(d,P,n._v$),n._v$2=J(d,T,n._v$2),n},{_v$:void 0,_v$2:void 0}),d})()}function h(e){const o=()=>e.data,c=R();return s(f,{get when(){return F(()=>!!o())()&&o().length},get children(){const a=W();return c!=null?a.style.setProperty("z-index",c):a.style.removeProperty("z-index"),i(a,s(M,{get each(){return o()},children:t=>s(tt,{data:t,get onClose(){return e.onClose}})})),z(()=>j(a,`cm-notification-box cm-notification-${e.docker}`)),a}})}function et(e){const o=()=>e.data;return(()=>{const c=X();return i(c,s(h,{get data(){return o().topLeft},docker:"top-left",get onClose(){return e.onClose}}),null),i(c,s(h,{get data(){return o().topRight},docker:"top-right",get onClose(){return e.onClose}}),null),i(c,s(h,{get data(){return o().bottomLeft},docker:"bottom-left",get onClose(){return e.onClose}}),null),i(c,s(h,{get data(){return o().bottomRight},docker:"bottom-right",get onClose(){return e.onClose}}),null),c})()}E(["click"]);function nt(){const[e,o]=Y({topLeft:[],topRight:[],bottomLeft:[],bottomRight:[]}),c=(t,l)=>{const r=e[l].filter($=>$.key!==t);o(l,r)},a=Z("cm-notice-portal","cm-notices-wrap");return A(()=>s(et,{data:e,onClose:c}),a),{open(t){t.dock||(t.dock="topRight"),t.key===void 0&&(t.key=D()),t.duration===void 0&&(t.duration=4.5),o(t.dock,G(l=>{l.push(t)})),a.style.zIndex=R()},info(t){t.icon="info",t.theme="info",this.open(t)},success(t){t.icon="check-circle",t.theme="success",this.open(t)},warning(t){t.icon="alert-circle",t.theme="warning",this.open(t)},error(t){t.icon="x-circle",t.theme="error",this.open(t)},help(t){t.icon="help-circle",t.theme="info",this.open(t)}}}const it=nt();export{it as n};