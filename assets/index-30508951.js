import{o as G,c as x,r as H,X as I,i as a,a as m,u as k,F as T,Q as y,e as J,g as f,f as K,n as W,t as _,Y as P,w as Z,A as ee,h as C,s as te,j as ne}from"./index-00bf0c33.js";const q=_("<div>"),ie=_('<div><div class="cm-index-list-list"></div><div class="cm-index-list-nav">'),oe=_("<dl><dt>"),ce=_("<dd>");function le(s){const S=()=>s.promote??!0,[w,A]=G(s,"value",[]),[B,D]=x(""),[O,M]=x(!1),[R,F]=x(""),[E,L]=H({list:[],listMap:{}});let d={},u,$={};I(()=>{const i=[];d={};let t={};s.data.forEach(n=>{(n.id===void 0||n.id===null)&&(n.id=P());const o={id:n.id};d[n.id]=n,t[n.id]=o,i.push(o),n.children&&(o.children=[],n.children.forEach(e=>{(e.id===void 0||e.id===null)&&(e.id=P()),d[e.id]=e;const c={id:e.id};t[e.id]=c,o.children.push(c)}))}),L({list:i,listMap:t})});const N=()=>ne(s,"cm-index-list",{"cm-index-list-border":s.border}),U=i=>{if(!s.selectable)return;const t=w(),n=i.id;if(i.active){const o=t.indexOf(n);t.splice(o,1),A(t)}else t.push(n),A([...t]);s.onChange&&s.onChange(w()),L("listMap",i.id,"active",!i.active)};let p=null;const V=(i,t,n)=>{n.preventDefault&&n.preventDefault(),n.stopPropagation&&n.stopPropagation();const o=document.querySelector(i);if(o){S()&&(F(t),M(!0),p&&clearTimeout(p),p=setTimeout(()=>{X()},1e3));const e=o.getBoundingClientRect().top,c=u.getBoundingClientRect().top,l=e-c;u.scrollTo({top:u.scrollTop+l,behavior:"smooth"})}},X=()=>{M(!1)},j=()=>{const i=u.scrollTop,t=Q(i);D(t)},Q=i=>{let t="",n=Number.MAX_VALUE;for(let o in $){const e=Math.abs($[o]-i);n>e&&(n=e,t=o)}return t},Y=(i,t)=>{queueMicrotask(()=>{$[t]=i.offsetTop})},b=()=>({"cm-index-list-promote":!0,"cm-index-list-promote-show":O()});return(()=>{const i=ie(),t=i.firstChild,n=t.nextSibling;t.addEventListener("scroll",j);const o=u;return typeof o=="function"?k(o,t):u=t,a(t,m(T,{get each(){return E.list},children:e=>{const c=d[e.id];return(()=>{const l=oe(),g=l.firstChild;return k(r=>{Y(r,e.id)},l),a(g,()=>c.name),a(l,m(T,{get each(){return e.children},children:r=>{const h=d[r.id];return(()=>{const v=ce();return y(v,"click",U.bind(null,r),!0),a(v,(()=>{const z=J(()=>!!s.renderItem);return()=>z()?s.renderItem(h,r.active):h.name})()),f(()=>Z(v,r.active?"active":"")),v})()}}),null),f(()=>ee(l,"id",`cm_index_list_${e.id}`)),l})()}})),a(n,m(T,{get each(){return E.list},children:e=>{const c=d[e.id],l=()=>B()===e.id,g=()=>({"cm-index-list-nav-item":!0,active:l()});return(()=>{const r=q();return y(r,"click",V.bind(null,`#cm_index_list_${e.id}`,c.id),!0),a(r,()=>c.id),f(h=>C(r,g(),h)),r})()}})),a(i,m(K,{get when(){return S()},get children(){const e=q();return a(e,R),f(c=>C(e,b(),c)),e}}),null),f(e=>{const c=N(),l=s.style;return e._v$=C(i,c,e._v$),e._v$2=te(i,l,e._v$2),e},{_v$:void 0,_v$2:void 0}),i})()}W(["click"]);export{le as I};
