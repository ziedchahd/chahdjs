import{Y as O,J as R,A as Q,i as $,g as K,h as d,t as S,j,o as V,r as W,v as X,b as z,a as C,I as F,F as Z,n as p,p as ee,u as M,s as te,q as ne}from"./index-00bf0c33.js";const ce=S("<div>");function ae(n){const e=re(),s=O(),v=()=>j(n,"cm-carousel-item",{"cm-carousel-item-active-fade":e&&e.effect==="fade"&&e.store.activeKey===s,"cm-carousel-item-active":e&&e.effect==="slide"&&e.store.dir==="normal"&&e.store.activeKey===s,"cm-carousel-item-active-next":e&&e.effect==="slide"&&e.store.dir==="normal"&&e.store.prevKey===s,"cm-carousel-item-active-reverse":e&&e.effect==="slide"&&e.store.dir==="reverse"&&e.store.activeKey===s,"cm-carousel-item-active-reverse-next":e&&e.effect==="slide"&&e.store.dir==="reverse"&&e.store.nextKey===s});return R(()=>{e&&e.addItem({id:s})}),(()=>{const r=ce();return Q(r,"data-id",s),$(r,()=>n.children),K(h=>d(r,v(),h)),r})()}const se=S('<div><div x-placement="left"></div><div class="cm-carousel-list"></div><div x-placement="right"></div><ul>'),ie=S("<li>"),B=ee();function oe(n){const e=()=>j(n,"cm-carousel"),[s,v]=V(n,"activeIndex",0),r=n.arrow??"hover",h=n.dotType??"dot",T=n.dotAlign??"center",D=n.autoPlay??!1,w=n.duration??4e3,J=n.effect??"slide";let g,u,m=null;const A=()=>({"cm-carousel-arrow":!0,[`cm-carousel-arrow-${r}`]:!!r}),N=()=>({"cm-carousel-dots":!0,[`cm-carousel-dots-${h}`]:!!h,[`cm-carousel-dots-${T}`]:!!T});let L=!1;const[a,o]=W({data:[],activeIndex:s(),activeKey:"",nextKey:"",prevKey:"",dir:"normal"}),U=t=>{t.index=a.data.length,o("data",[...a.data,t])},b=()=>{clearTimeout(m),k(),m=setTimeout(()=>{b()},w)};R(()=>{if(g){const t=g.querySelectorAll(".cm-carousel-item");if(t.length){const c=t[0].getBoundingClientRect();u.style.height=c.height+"px"}D&&(m=setTimeout(()=>{b()},w))}}),X(()=>{m&&clearTimeout(m)}),z(()=>{const t=s();o("activeIndex",t)}),z(()=>{const t=a.activeIndex,c=a.data;if(c&&c.length)if(!L)u.children[a.activeIndex].classList.add("cm-carousel-item-active-init"),L=!0;else{const l=u.querySelector(".cm-carousel-item-active-init");l&&l.classList.remove("cm-carousel-item-active-init"),o("activeKey",c[t].id),o("prevKey",c[(c.length+t-1)%c.length].id),o("nextKey",c[(c.length+t+1)%c.length].id)}});const k=()=>{v((a.activeIndex+1)%a.data.length),o("dir","normal"),n.onChange&&n.onChange(s())},Y=()=>{v((a.data.length+a.activeIndex-1)%a.data.length),o("dir","reverse"),n.onChange&&n.onChange(s())},G=t=>{o("dir",a.activeIndex-t<0?"normal":"reverse"),v(t),n.onChange&&n.onChange(s())};return C(B.Provider,{value:{addItem:U,store:a,effect:J},get children(){const t=se(),c=t.firstChild,l=c.nextSibling,x=l.nextSibling,q=x.nextSibling,P=g;typeof P=="function"?M(P,t):g=t,c.$$click=Y,$(c,C(F,{name:"chevron-left",size:24}));const E=u;return typeof E=="function"?M(E,l):u=l,$(l,()=>n.children),x.$$click=k,$(x,C(F,{name:"chevron-right",size:24})),$(q,C(Z,{get each(){return a.data},children:(i,y)=>{const _=()=>({"cm-carousel-dot":!0,"cm-carousel-dot-active":a.activeIndex===y()});return(()=>{const f=ie();return f.$$click=()=>{G(y())},K(I=>d(f,_(),I)),f})()}})),K(i=>{const y=e(),_=n.style,f=A(),I=A(),H=N();return i._v$=d(t,y,i._v$),i._v$2=te(t,_,i._v$2),i._v$3=d(c,f,i._v$3),i._v$4=d(x,I,i._v$4),i._v$5=d(q,H,i._v$5),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),t}})}oe.Item=ae;const re=()=>ne(B);p(["click"]);export{oe as C};
