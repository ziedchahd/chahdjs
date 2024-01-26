import{c as m,u as y,i as v,a as t,S as n,k as i,T as d,f as x,t as p}from"./index-00bf0c33.js";import{T as c,C as r,B as S}from"./index-345cd19e.js";import{D as h,a as g,C as f}from"./code-6666454f.js";import{P as o}from"./index-e4583d54.js";import{T as b}from"./index-0092c168.js";import{p as _}from"./columns-26981c48.js";import{h as w}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const T=`<Space dir="v">
    <Card title="card" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <Spin type="pulse"></Spin>
    </Card>

    <Card title="card" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <Spin type="gear"></Spin>
    </Card>

    <Card title="card" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <Spin type="oval"></Spin>
    </Card>
</Space>`,D=`const [loading, setLoading] = createSignal(true);

<Space dir="v">
    <Card title="card" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <div>Card content card content</div>
        <Show when={loading()}>
            <Spin title='loading'></Spin>
        </Show>
    </Card>
    <div>
        <Button type='primary' onClick={() => {
            setLoading(!loading());
        }}>Toggle</Button>
    </div>
</Space>`,B=[{name:"type",desc:"type,support pulse|gear",type:"string",default:"pulse"},{name:"size",desc:"大小尺寸",type:"string",default:""},{name:"title",desc:"title",type:"string",default:"Loading..."}],P=[{id:"spin_base",text:"Basic usage"},{id:"spin_control",text:"Controlled"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Attributes"}],u={spin_base:T,spin_control:D},e=p("<div>Card content card content"),A=p("<div>"),$=p('<div class="sys-ctx-main-left">');function q(){const[l,C]=m(!0);return[(()=>{const a=$();return y(w,a,()=>""),v(a,t(n,{dir:"v",size:32,get children(){return[t(c,{heading:2,children:"Spin loading"}),t(n,{id:"spin_base",dir:"v",get children(){return t(r,{bordered:!0,get children(){return[t(n,{dir:"v",get children(){return[t(r,{title:"card",style:{width:"300px",height:"300px",border:"1px solid #ccc",position:"relative"},get children(){return[e(),e(),e(),e(),e(),e(),t(i,{type:"pulse"})]}}),t(r,{title:"card",style:{width:"300px",height:"300px",border:"1px solid #ccc",position:"relative"},get children(){return[e(),e(),e(),e(),e(),e(),t(i,{type:"gear"})]}}),t(r,{title:"card",style:{width:"300px",height:"300px",border:"1px solid #ccc",position:"relative"},get children(){return[e(),e(),e(),e(),e(),e(),t(i,{type:"oval"})]}})]}}),t(h,{align:"left",get children(){return t(d,{type:"primary",children:"Basic usage"})}}),t(o,{type:"secondary",spacing:"extended",get children(){return["Spin The parent component needs to be set position for ",t(d,{code:!0,children:"relative/absolute/fixed"})]}}),t(o,{type:"secondary",spacing:"extended",get children(){return["Spin's type support ",t(d,{code:!0,children:"pulse/gear/oval"})," The default is pulse"]}}),t(g,{get data(){return u.spin_base}})]}})}}),t(n,{id:"spin_control",dir:"v",get children(){return t(r,{bordered:!0,get children(){return[t(n,{dir:"v",get children(){return[t(r,{title:"card",style:{width:"300px",height:"300px",border:"1px solid #ccc",position:"relative"},get children(){return[e(),e(),e(),e(),e(),e(),t(x,{get when(){return l()},get children(){return t(i,{title:"加载中"})}})]}}),(()=>{const s=A();return v(s,t(S,{type:"primary",onClick:()=>{C(!l())},children:"Toggle"})),s})()]}}),t(h,{align:"left",get children(){return t(d,{type:"primary",children:"Controlled"})}}),t(o,{type:"secondary",spacing:"extended",children:"You can set the title attribute modification copy, default to loading..."}),t(g,{get data(){return u.spin_control}})]}})}}),t(n,{dir:"v",size:24,id:"comp_api",get children(){return[t(c,{type:"primary",heading:3,children:"API"}),t(n,{id:"comp_props",dir:"v",get children(){return[t(c,{type:"primary",heading:4,children:"Spin Props"}),t(b,{columns:_,data:B,border:!0,size:"small"})]}})]}})]}})),a})(),t(f,{data:P})]}export{q as default};
