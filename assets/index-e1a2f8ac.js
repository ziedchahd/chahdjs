import{u as S,i as l,a as e,S as i,T as a,t as n}from"./index-00bf0c33.js";import{S as d}from"./index-76adebdf.js";import{T as s,C as o}from"./index-345cd19e.js";import{D as c,a as u,C as _}from"./code-6666454f.js";import{P as m}from"./index-e4583d54.js";import{T as v}from"./index-0092c168.js";import{S as r}from"./Slot-fdf990e2.js";import{p as f,s as b}from"./columns-26981c48.js";import{h as T}from"./hljs-74a5c6d1.js";import"./useSlots-0cb65a44.js";import"./_commonjsHelpers-725317a4.js";const P=`<div style={{height: '300px', border: '1px solid #ccc'}}>
    <Split split="300px" max={500}>
        <Slot name="prev"><div>LEFT</div></Slot>
        <Slot name="next"><div>RIGHT</div></Slot>
    </Split>
</div>`,C=`<div style={{height: '300px', border: '1px solid #ccc'}}>
    <Split dir='h' split={0.3}>
        <Slot name="prev"><div>TOP</div></Slot>
        <Slot name="next"><div>BOTTOM</div></Slot>
    </Split>
</div>`,D=`<div style={{height: '300px', border: '1px solid #ccc'}}>
    <Split split={0.5}>
        <Slot name="prev">
            <Split dir='h' split={0.3}>
                <Slot name="prev"><div>TOP</div></Slot>
                <Slot name="next"><div>BOTTOM</div></Slot>
            </Split>
        </Slot>
        <Slot name="next"><div>Right</div></Slot>
    </Split>
</div>`,O=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"dir",desc:"分割方向, 支持 v|h",type:"string",default:"v"},{name:"split",desc:"前置面板的大小",type:"number | string",default:""},{name:"min",desc:"前置面板的最小大小",type:"number",default:"40"},{name:"max",desc:"前置面板的最大大小",type:"number",default:"40"}],$=[{name:"prev",desc:"前置面板"},{name:"next",desc:"后置面板"}],E=[{id:"split_base",text:"基础用法"},{id:"split_h",text:"上下分割"},{id:"split_insert",text:"嵌套"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],h={split_base:P,split_h:C,split_insert:D},F=n("<div>LEFT"),A=n("<div>RIGHT"),g=n("<div>"),y=n("<div>TOP"),x=n("<div>BOTTOM"),B=n("<div>Right"),z=n('<div class="sys-ctx-main-left">');function K(){return[(()=>{const p=z();return S(T,p,()=>""),l(p,e(i,{dir:"v",size:32,get children(){return[e(s,{heading:2,children:"Split 面板分割"}),e(i,{id:"split_base",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[(()=>{const t=g();return t.style.setProperty("height","300px"),t.style.setProperty("border","1px solid #ccc"),l(t,e(d,{split:"300px",max:500,get children(){return[e(r,{name:"prev",get children(){return F()}}),e(r,{name:"next",get children(){return A()}})]}})),t})(),e(c,{align:"left",get children(){return e(a,{type:"primary",children:"基础用法"})}}),e(m,{type:"secondary",spacing:"extended",children:"左右分割用法。"}),e(u,{get data(){return h.split_base}})]}})}}),e(i,{id:"split_h",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[(()=>{const t=g();return t.style.setProperty("height","300px"),t.style.setProperty("border","1px solid #ccc"),l(t,e(d,{dir:"h",split:.3,get children(){return[e(r,{name:"prev",get children(){return y()}}),e(r,{name:"next",get children(){return x()}})]}})),t})(),e(c,{align:"left",get children(){return e(a,{type:"primary",children:"上下分割"})}}),e(m,{type:"secondary",spacing:"extended",children:"上下分割用法。"}),e(u,{get data(){return h.split_h}})]}})}}),e(i,{id:"split_insert",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[(()=>{const t=g();return t.style.setProperty("height","300px"),t.style.setProperty("border","1px solid #ccc"),l(t,e(d,{split:.5,get children(){return[e(r,{name:"prev",get children(){return e(d,{dir:"h",split:.3,get children(){return[e(r,{name:"prev",get children(){return y()}}),e(r,{name:"next",get children(){return x()}})]}})}}),e(r,{name:"next",get children(){return B()}})]}})),t})(),e(c,{align:"left",get children(){return e(a,{type:"primary",children:"嵌套"})}}),e(m,{type:"secondary",spacing:"extended",children:"嵌套使用。"}),e(u,{get data(){return h.split_insert}})]}})}}),e(i,{dir:"v",size:24,id:"comp_api",get children(){return[e(s,{type:"primary",heading:3,children:"API"}),e(i,{id:"comp_props",dir:"v",get children(){return[e(s,{type:"primary",heading:4,children:"Split Props"}),e(v,{columns:f,data:O,border:!0,size:"small"})]}}),e(i,{id:"comp_slots",dir:"v",get children(){return[e(s,{type:"primary",heading:4,children:"Split slots"}),e(v,{columns:b,data:$,border:!0,size:"small"})]}})]}})]}})),p})(),e(_,{data:E})]}export{K as default};
