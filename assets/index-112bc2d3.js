import{n as B,c as b,i as U,g as P,h as R,s as W,t as _,u as H,a3 as L,r as A,v as I,a as p,j as q}from"./index-00bf0c33.js";function j(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier}function V(t,e,n){const r=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect(),s=(t.clientX+e.scrollLeft-r.left)/n,d=(t.clientY+e.scrollTop-r.top)/n;return{x:s,y:d}}function $(t,e){for(let n=0,o=t.length;n<o;n++)if(e.apply(e,[t[n],n,t]))return t[n]}function z(t,e){return t.targetTouches&&$(t.targetTouches,n=>e===n.identifier)||t.changedTouches&&$(t.changedTouches,n=>e===n.identifier)}function X(t,e,n,o){const r=typeof e=="number"?z(t,e):null;if(typeof e=="number"&&!r)return null;const s=n.offsetParent||o.offsetParent||o.ownerDocument.body;return V(r||t,s,n.scale)}function C(t,e,n,o,r){return Number.isNaN(e)?{node:t,deltaX:0,deltaY:0,lastX:o,lastY:r,x:o,y:r}:{node:t,deltaX:o-e,deltaY:r-n,lastX:e,lastY:n,x:o,y:r}}function k(t,e,n,o){if(!t)return;const r={capture:!0,...o};t.addEventListener?t.addEventListener(e,n,r):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}function M(t,e,n,o){if(!t)return;const r={capture:!0,...o};t.removeEventListener?t.removeEventListener(e,n,r):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}function F(t,e,n){const o=Math.round(e/t[0])*t[0],r=Math.round(n/t[1])*t[1];return[o,r]}function G(t){if(!t)return;let e=t.getElementById("react-draggable-style-el");e||(e=t.createElement("style"),e.type="text/css",e.id="react-draggable-style-el",e.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,e.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,t.getElementsByTagName("head")[0].appendChild(e)),t.body&&t.body.classList.add("react-draggable-transparent-selection")}function J(t){if(t)try{if(t.body&&t.body.classList.remove("react-draggable-transparent-selection"),t.selection)t.selection.empty();else{const e=(t.defaultView||window).getSelection();e&&e.type!=="Caret"&&e.removeAllRanges()}}catch{}}function N(t,e,n){return{node:n.node,x:t.x+n.deltaX/e,y:t.y+n.deltaY/e,deltaX:n.deltaX/e,deltaY:n.deltaY/e,lastX:t.x,lastY:t.y}}function K(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}function u(t){return parseInt(t,10)}function Q(t){let e=t.clientHeight;const n=window.getComputedStyle(t);return e+=u(n.borderTopWidth),e+=u(n.borderBottomWidth),e}function Z(t){let e=t.clientWidth;const n=window.getComputedStyle(t);return e+=u(n.borderLeftWidth),e+=u(n.borderRightWidth),e}function O(t){let e=t.clientHeight;const n=window.getComputedStyle(t);return e-=u(n.paddingTop),e-=u(n.paddingBottom),e}function tt(t){let e=t.clientWidth;const n=window.getComputedStyle(t);return e-=u(n.paddingLeft),e-=u(n.paddingRight),e}function T(t){return typeof t=="number"&&!isNaN(t)}function et({bounds:t,node:e},n,o){if(!t)return[n,o];if(t=typeof t=="string"?t:K(t),typeof t=="string"){let r;if(t==="parent"?r=e.parentNode:r=document.querySelector(t),!(r instanceof HTMLElement))throw new Error('Bounds selector "'+t+'" could not find an element.');const s=window.getComputedStyle(e),d=window.getComputedStyle(r);t={left:-e.offsetLeft+u(d.paddingLeft)+u(s.marginLeft),top:-e.offsetTop+u(d.paddingTop)+u(s.marginTop),right:tt(r)-Z(e)-e.offsetLeft+u(d.paddingRight)-u(s.marginRight),bottom:O(r)-Q(e)-e.offsetTop+u(d.paddingBottom)-u(s.marginBottom)}}return T(t.right)&&(n=Math.min(n,t.right)),T(t.bottom)&&(o=Math.min(o,t.bottom)),T(t.left)&&(n=Math.max(n,t.left)),T(t.top)&&(o=Math.max(o,t.top)),[n,o]}function nt(t){return t==="both"||t==="x"}function ot(t){return t==="both"||t==="y"}function at({x:t,y:e},n,o){let r=`translate(${t}${o},${e}${o})`;if(n){const s=`${typeof n.x=="string"?n.x:n.x+o}`,d=`${typeof n.y=="string"?n.y:n.y+o}`;r=`translate(${s}, ${d})`+r}return r}function rt(t,e){return{transform:at(t,e,"px")}}const it=_("<div>");function lt(t){const[e,n]=b(null),[o,r]=b(NaN),[s,d]=b(NaN),[E,v]=b(!1);let c;const x=a=>{if(t.onMouseDown&&t.onMouseDown(a),!t.allowAnyClick&&typeof a.button=="number"&&a.button!==0)return!1;if(!c||!c.ownerDocument||!c.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:l}=c;if(t.disabled||!(a.target instanceof l.defaultView.Node)||t.handle&&!document.querySelector(t.handle).contains(a.target)||t.cancel&&document.querySelector(t.cancel).contains(a.target))return;a.type==="touchstart"&&a.preventDefault();const i=j(a);n(i);const f=X(a,i,t,c);if(f==null)return;const{x:h,y:w}=f,y=C(c,o(),s(),h,w);(t.onStart&&t.onStart(a,y))!==!1&&(G(l),L(()=>{v(!0),r(h),d(w)}),k(l,"mousemove",D),k(l,"mouseup",S))},D=a=>{const l=X(a,e(),t,c);if(l==null)return;let{x:i,y:f}=l;if(Array.isArray(t.grid)){let y=i-o(),m=f-s();if([y,m]=F(t.grid,y,m),!y&&!m)return;i=o()+y,f=s()+m}const h=C(c,o(),s(),i,f);if(t.onDrag(a,h)===!1){try{S(new MouseEvent("mouseup"))}catch{const m=document.createEvent("MouseEvents");m.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),S(m)}return}L(()=>{r(i),d(f)})},S=a=>{if(!E())return;const l=X(a,e(),t,c);if(l==null)return;const{x:i,y:f}=l,h=C(c,o(),s(),i,f);if(t.onStop(a,h)===!1)return!1;c&&J(c.ownerDocument),L(()=>{v(!1),r(NaN),d(NaN)}),c&&(M(c.ownerDocument,"mousemove",D),M(c.ownerDocument,"mouseup",S))},Y=a=>x(a),g=a=>S(a);return(()=>{const a=it(),l=c;return typeof l=="function"?H(l,a):c=a,a.$$mouseup=g,a.$$mousedown=Y,U(a,()=>t.children),P(i=>{const f=t.classList,h=t.style;return i._v$=R(a,f,i._v$),i._v$2=W(a,h,i._v$2),i},{_v$:void 0,_v$2:void 0}),a})()}B(["mousedown","mouseup"]);function ct(t){const e=t.defaultPosition||{x:0,y:0},[n,o]=A({dragging:!1,dragged:!1,x:t.position?t.position.x:e.x,y:t.position?t.position.y:e.y,prevPropsPosition:{...t.position},slackX:0,slackY:0});let r=t.scale||1,s=t.bounds||!1,d;const E=(g,a)=>{if((t.onStart&&t.onStart(g,N(n,r,a)))===!1)return!1;o("dragging",!0),o("dragged",!0)},v=(g,a)=>{if(!n.dragging)return!1;const l=N(n,r,a),i={x:l.x,y:l.y,slackX:0,slackY:0};if(s){const{x:h,y:w}=i;i.x+=n.slackX,i.y+=n.slackY;const[y,m]=et({bounds:s,node:a.node},i.x,i.y);i.x=y,i.y=m,i.slackX=n.slackX+(h-i.x),i.slackY=n.slackY+(w-i.y),l.x=i.x,l.y=i.y,l.deltaX=i.x-n.x,l.deltaY=i.y-n.y}if((t.onDrag&&t.onDrag(g,l))===!1)return!1;o("x",i.x),o("y",i.y),o("slackX",i.slackX),o("slackY",i.slackY)},c=(g,a)=>{if(!n.dragging||(t.onStop&&t.onStop(g,N(n,r,a)))===!1)return!1;o("dragging",!1),o("slackX",0),o("slackY",0)};I(()=>{o("dragging",!1)});const x=t.axis||"both",D=()=>({x:nt(x)?n.x:e.x,y:ot(x)?n.y:e.y}),S=()=>({...t.style,...rt(D(),t.positionOffset)}),Y=()=>q(t,"cm-draggable",{"cm-draggable-dragging":n.dragging,"cm-draggable-dragged":n.dragged});return t.ref&&t.ref({reset:()=>{o("x",0),o("y",0)},setPosition(g){o("x",g.x),o("y",g.y)}}),p(lt,{get grid(){return t.grid},get classList(){return Y()},get disabled(){return t.disabled},get handle(){return t.handle},scale:r,get style(){return S()},onStart:E,onDrag:v,onStop:c,ref(g){const a=d;typeof a=="function"?a(g):d=g},get children(){return t.children}})}export{ct as D};
