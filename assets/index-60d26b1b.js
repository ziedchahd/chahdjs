import{c as ee,b as te,i as c,a as e,N as J,f as A,F as ne,O as ae,g as re,t as m,h as ie,s as ue,j as se,r as k,u as ge,S as o,T as u}from"./index-00bf0c33.js";import{S as le}from"./index-6735e77f.js";import{I as j}from"./input-14b161dc.js";import{P as L,a as O,b as N}from"./PageItem-039dd6de.js";import{O as ce}from"./Option-70feb815.js";import{T as B,C as S}from"./index-345cd19e.js";import{D as C,a as P,C as oe}from"./code-6666454f.js";import{P as F}from"./index-e4583d54.js";import{T as M}from"./index-0092c168.js";import{p as pe,e as de}from"./columns-26981c48.js";import{h as me}from"./hljs-74a5c6d1.js";import"./index-39a7fc71.js";import"./createField-b596c149.js";import"./index-cff0105e.js";import"./index-469010fe.js";import"./index-f515a01c.js";import"./index-26110a98.js";import"./Item-a37b8cba.js";import"./Recommend-04f5af18.js";import"./Value-1107dbb2.js";import"./index-5ebde19f.js";import"./index-83488e34.js";import"./dayjs.min-ea173184.js";import"./_commonjsHelpers-725317a4.js";import"./index-b5d4e03a.js";import"./Collapase-7b5e31c6.js";import"./Option-c7b11dbe.js";import"./index-e167ef83.js";import"./index-73979b49.js";import"./index-112bc2d3.js";import"./index-2c1e88fa.js";import"./index-4642d62a.js";const R=m('<li class="cm-pagination-num cm-pagination-ellipse"><span class="ellipse">•••'),he=m('<ul class="cm-pagination-num-list"><span class="cm-pagination-mini-pages">/ '),ze=m('<span class="cm-pagination-text mr-5">共<!>条'),fe=m('<ul class="cm-pagination-num-list">'),Se=m('<span class="cm-pagination-sizer">'),Ce=m('<span class="cm-pagination-jumper"><span class="cm-pagination-text">跳至</span><span class="cm-pagination-text">页'),Pe=m("<div>"),V=[{value:10,label:"10条/页"},{value:20,label:"20条/页"},{value:50,label:"50条/页"},{value:100,label:"100条/页"}];function E(n){const p=()=>se(n,"cm-pagination",{[`cm-pagination-${n.shape}`]:n.shape,[`cm-pagination-${n.size}`]:n.size}),r=()=>n.current,d=()=>n.total??0,h=()=>n.pageSize??10,a=n.innerNear??2,z=n.startEndShowNum??2,q=n.showNums??!0,G=n.showTotal??!0,H=n.pages??V,K=n.showJumper??!0,Q=n.showPage??!0,[x,y]=ee(r());te(()=>{r()!=x()&&y(r())});const T=()=>{r()>1&&b(r()-1)},D=()=>{r()<f()&&b(r()+1)},I=i=>{b(parseInt(i,10))},f=()=>d()===0?1:Math.floor((d()-1)/h())+1,U=i=>typeof i=="number"&&i>=1,b=i=>{let t=i;U(t)&&t!==r()&&(t>f()&&(t=f()),y(t),n.onChange&&n.onChange(t,h))},W=i=>{const t=Math.floor((d()-1)/i)+1;n.onChangePageSize&&n.onChangePageSize(i),r()>t&&(y(1),n.onChange&&n.onChange(1,h))};function X(){const i=f(),t=r()>z+a+1?r()-a:z+1,s=r()+a+z>=i?i-z:r()+a;return{start:t,end:s}}function Y(){if(!q)return null;const i=f(),t=[],s=X(),l=r();for(let g=1;g<=z;g++){let $=l===g;t.push(e(N,{active:$,get onClick(){return b.bind(null,g)},currentIndex:g}))}l>z+a+1&&t.push(R());let v=s.start;const Z=s.end;for(;v<=Z;v++){let g=l===v;t.push(e(N,{get onClick(){return b.bind(null,v)},currentIndex:v,active:g}))}l+a+z<i&&t.push(R());for(let g=i-z+1;g<=i;g++){let $=l===g;t.push(e(N,{active:$,get onClick(){return b.bind(null,g)},currentIndex:g}))}return t}return(()=>{const i=Pe();return c(i,e(ae,{get children(){return[e(J,{get when(){return n.mini},get children(){const t=he(),s=t.firstChild;return s.firstChild,c(t,e(L,{current:r,onClick:T}),s),c(t,e(j,{get style(){return{width:n.size==="small"?"35px":"50px"}},class:"mr-5",value:[x,y],get size(){return n.size},onChange:I}),s),c(s,f,null),c(t,e(O,{current:r,onClick:D,get disabled(){return r()===f()}}),null),t}}),e(J,{get when(){return!n.mini},get children(){return[e(A,{when:G,get children(){const t=ze(),s=t.firstChild,l=s.nextSibling;return l.nextSibling,c(t,d,l),t}}),(()=>{const t=fe();return c(t,e(L,{current:r,onClick:T}),null),c(t,Y,null),c(t,e(O,{current:r,onClick:D,get disabled(){return r()===f()}}),null),t})(),e(A,{when:Q,get children(){const t=Se();return c(t,e(le,{get value(){return h()},get size(){return n.size},onChange:W,data:H,get children(){return e(ne,{each:V,children:s=>e(ce,{get label(){return s.label},get value(){return s.value}})})}})),t}}),e(A,{when:K,get children(){const t=Ce(),s=t.firstChild,l=s.nextSibling;return c(t,e(j,{get style(){return{width:n.size==="small"?"35px":"50px"}},class:"mr-5",value:[x,y],get size(){return n.size},onChange:I}),l),t}})]}})]}})),re(t=>{const s=p(),l=n.style;return t._v$=ie(i,s,t._v$),t._v$2=ue(i,l,t._v$2),t},{_v$:void 0,_v$2:void 0}),i})()}const Fe=`const [page1, setPage1] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page1.current} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
    setPage1('current', page);
}} onChangePageSize={(size: number) => {
    setPage1('pageSize', size);
}}/>`,Ee=`const [page1, setPage1] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination size='small' current={page1.current} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
    setPage1('current', page);
}} onChangePageSize={(size: number) => {
    setPage1('pageSize', size);
}}/>`,_e=`const [page1, setPage1] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page1.current} showTotal={false} showPage={false} showJumper={false} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
    setPage1('current', page);
}} onChangePageSize={(size: number) => {
    setPage1('pageSize', size);
}}/>`,be=`const [page1, setPage1] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination mini size='small' current={page1.current} pageSize={page1.pageSize} total={1000} onChange={(page: number) => {
    setPage1('current', page);
}} onChangePageSize={(size: number) => {
    setPage1('pageSize', size);
}}/>`,ye=`const [page2, setPage2] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page2.current} showTotal={false} showPage={false} showJumper={false} 
pageSize={page2.pageSize} total={1000} showNums={false} onChange={(page: number) => {
    setPage2('current', page);
}}/>`,ve=`const [page2, setPage2] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page2.current} shape='circle' pageSize={page2.pageSize} total={1000} onChange={(page) => {
    setPage2('current', page);
}} onChangePageSize={(size: number) => {
    setPage2('pageSize', size);
}}/>`,we=`const [page2, setPage2] = createStore({
    current: 1,
    pageSize: 10
})

<Pagination current={page2.current} pages={[
    {value: 10, label: '10条/页'},
    {value: 50, label: '50条/页'},
    {value: 100, label: '100条/页'}
]}  pageSize={page2.pageSize} total={1000} onChange={(page) => {
    setPage2('current', page);
}} onChangePageSize={(size: number) => {
    setPage2('pageSize', size);
}}/>`,Be=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"shape",desc:"可以选择 normal|circle",type:"string",default:"normal"},{name:"size",desc:"分页尺寸 small|large",type:"string",default:""},{name:"current",desc:"当前页",type:"number",default:""},{name:"total",desc:"总数据量",type:"number",default:""},{name:"pageSize",desc:"每页数据量",type:"number",default:""},{name:"pages",desc:"每页数据量选项",type:"Array",default:""},{name:"mini",desc:"最小化只有跳转和总页数和前一页后一页",type:"Boolean",default:""},{name:"innerNear",desc:"中间当前页的前后页数",type:"number",default:"2"},{name:"startEndShowNum",desc:"前后最少显示的页数",type:"number",default:"2"},{name:"showJumper",desc:"是否显示跳转",type:"boolean",default:"true"},{name:"showPage",desc:"是否显示页数选择",type:"boolean",default:"true"},{name:"showTotal",desc:"是否显示总数",type:"boolean",default:"true"},{name:"showNums",desc:"是否显示页号",type:"boolean",default:"true"},{name:"onChange",desc:"页号选择事件",type:"Function",default:""},{name:"onChangePageSize",desc:"每页数量变化事件",type:"Function",default:""}],xe=[{name:"onChange",desc:"页号选择事件",params:"pageNum"},{name:"onChangePageSize",desc:"每页数量变化事件",params:"pageSize"}],$e=[{id:"pagination_base",text:"基础用法"},{id:"pagination_small",text:"尺寸"},{id:"pagination_hide",text:"数字分页"},{id:"pagination_min",text:"最小化分页"},{id:"pagination_circle",text:"圆形"},{id:"pagination_pages",text:"每页数"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],_={pagination_base:Fe,pagination_small:Ee,pagination_hide:_e,pagination_min:ye,pagination_mini:be,pagination_circle:ve,pagination_pages:we},w=m("<br>"),Ae=m('<div class="sys-ctx-main-left">');function ct(){const[n,p]=k({current:1,pageSize:10}),[r,d]=k({current:1,pageSize:10});return[(()=>{const h=Ae();return ge(me,h,()=>""),c(h,e(o,{dir:"v",size:32,get children(){return[e(B,{heading:2,children:"Pagination 分页"}),e(o,{id:"pagination_base",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{get current(){return n.current},get pageSize(){return n.pageSize},total:1e3,onChange:a=>{p("current",a)},onChangePageSize:a=>{p("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"基础用法"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["基础用法，当前页 ",e(u,{code:!0,children:"current"})," 为控制属性"]}}),e(P,{get data(){return _.pagination_base}})]}})}}),e(o,{id:"pagination_small",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{size:"small",get current(){return n.current},get pageSize(){return n.pageSize},total:1e3,onChange:a=>{p("current",a)},onChangePageSize:a=>{p("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"尺寸"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["小尺寸分页组件， 设置 ",e(u,{code:!0,children:"size"})," 为 ",e(u,{code:!0,children:"small"})]}}),e(P,{get data(){return _.pagination_small}})]}})}}),e(o,{id:"pagination_mini",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{mini:!0,size:"small",get current(){return n.current},get pageSize(){return n.pageSize},total:1e3,onChange:a=>{p("current",a)},onChangePageSize:a=>{p("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"迷你型"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(u,{code:!0,children:"mini"})," 属性可以设置迷你型分页"]}}),e(P,{get data(){return _.pagination_mini}})]}})}}),e(o,{id:"pagination_hide",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{get current(){return n.current},showTotal:!1,showPage:!1,showJumper:!1,get pageSize(){return n.pageSize},total:1e3,onChange:a=>{p("current",a)},onChangePageSize:a=>{p("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"数字分页"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["总数据量可通过设置 ",e(u,{code:!0,children:"showTotal"})," 为false ",w(),"页数可通过设置 ",e(u,{code:!0,children:"showPage"})," 为false ",w(),"跳转可通过设置 ",e(u,{code:!0,children:"showJumper"})," 为false"]}}),e(P,{get data(){return _.pagination_hide}})]}})}}),e(o,{id:"pagination_min",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{get current(){return r.current},showTotal:!1,showPage:!1,showJumper:!1,get pageSize(){return r.pageSize},total:1e3,showNums:!1,onChange:a=>{d("current",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"最小化分页"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["总数据量可通过设置 ",e(u,{code:!0,children:"showTotal"})," 为false ",w(),"页数可通过设置 ",e(u,{code:!0,children:"showPage"})," 为false ",w(),"跳转可通过设置 ",e(u,{code:!0,children:"showJumper"})," 为false ",w(),"数字可通过设置 ",e(u,{code:!0,children:"showNums"})," 为false"]}}),e(P,{get data(){return _.pagination_min}})]}})}}),e(o,{id:"pagination_circle",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{get current(){return r.current},shape:"circle",get pageSize(){return r.pageSize},total:1e3,onChange:a=>{d("current",a)},onChangePageSize:a=>{d("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"圆形"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(u,{code:!0,children:"shape='circle'"})," 可渲染圆形按钮的分页"]}}),e(P,{get data(){return _.pagination_circle}})]}})}}),e(o,{id:"pagination_pages",dir:"v",get children(){return e(S,{bordered:!0,get children(){return[e(E,{get current(){return r.current},pages:[{value:10,label:"10条/页"},{value:50,label:"50条/页"},{value:100,label:"100条/页"}],get pageSize(){return r.pageSize},total:1e3,onChange:a=>{d("current",a)},onChangePageSize:a=>{d("pageSize",a)}}),e(C,{align:"left",get children(){return e(u,{type:"primary",children:"每页数"})}}),e(F,{type:"secondary",spacing:"extended",get children(){return["可通过 ",e(u,{code:!0,children:"pages"})," 属性自定义 每页的数据量"]}}),e(P,{get data(){return _.pagination_pages}})]}})}}),e(o,{dir:"v",size:24,id:"comp_api",get children(){return[e(B,{type:"primary",heading:3,children:"API"}),e(o,{id:"comp_props",dir:"v",get children(){return[e(B,{type:"primary",heading:4,children:"Pagination Props"}),e(M,{columns:pe,data:Be,border:!0,size:"small"})]}}),e(o,{id:"comp_events",dir:"v",get children(){return[e(B,{type:"primary",heading:4,children:"Pagination Events"}),e(M,{columns:de,data:xe,border:!0,size:"small"})]}})]}})]}})),h})(),e(oe,{data:$e})]}export{ct as default};
