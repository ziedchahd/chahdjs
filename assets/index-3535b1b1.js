import{c as $,u as D,i as l,a as e,S as n,x as B,T as p,t as i}from"./index-00bf0c33.js";import{h as T}from"./hljs-74a5c6d1.js";import{D as c,a as g,C as j}from"./code-6666454f.js";import{p as h}from"./columns-26981c48.js";import{T as s,C as m,B as F}from"./index-345cd19e.js";import{S as U}from"./index-469010fe.js";import{S as r}from"./index-c3a69d91.js";import{A as S}from"./index-31b5d2c6.js";import{P as u}from"./index-e4583d54.js";import{R as k,C as y}from"./index-96ab4b8f.js";import{T as x}from"./index-0092c168.js";import"./_commonjsHelpers-725317a4.js";import"./createField-b596c149.js";const O=`const [loading, setLoading] = createSignal(true)
const showContent = () => {
    setLoading(!loading());
}

<div>
    <Switch onChange={() => showContent()} />
    <span style={{ 'margin-left': '10px' }}>显示加载内容</span>
</div>
<br/>
<div>
    <Skeleton placeholder={<Skeleton.Avatar />} loading={loading()}>
        <Avatar style={{color: "blue", 'margin-bottom': '10px'}}>U</Avatar>
    </Skeleton>
    <br/>
    <Skeleton width="150px" height="150px" placeholder={<Skeleton.Image />} loading={loading()}>
        <Image
            src="https://cqb325.gitee.io/cui-solid-doc/logo.svg"
            width="150px"
            height="150px"
            alt="avatar"
        />
    </Skeleton>
    <br/>
    <Skeleton
        style={{ width: '80px' }}
        placeholder={<Skeleton.Title style={{ 'margin-bottom': '10px' }} />}
        loading={loading()}
    >
        <h4 style={{ 'margin-bottom': 0 }}>CUI/SolidJs</h4>
    </Skeleton>
    <br/>
    <Skeleton width="240px" placeholder={<Skeleton.Paragraph rows={2} />} loading={loading()}>
        <p style={{width: '240px'}}>精心打磨每一个组件的用户体验，从用户的角度考虑每个组件的使用场景。</p>
    </Skeleton>
    <br/>
    <Skeleton placeholder={<Skeleton.Button />} loading={loading()}>
        <Button>Button</Button>
    </Skeleton>
</div>`,q=`<Skeleton placeholder={<div>
    <Skeleton.Image width="200px" height="150px"/>
    <Skeleton.Title width="120px" style={{ 'margin-top': '10px' }} />
</div>} loading={true}>
    <img
        src="https://cqb325.gitee.io/cui-solid-doc/logo.svg"
        height="150px"
        alt="avatar"
    />
    <h4>CUI/SolidJs</h4>
</Skeleton>`,z=`<Skeleton placeholder={<div style={{display: 'flex', "align-items": 'flex-start'}}>
    <Skeleton.Avatar shape='square' style={{ 'margin-right': '12px' }} />
    <div>
        <Skeleton.Title width='120px' style={{ 'margin-bottom': '12px', 'margin-top': '12px' }} />
        <Skeleton.Paragraph width={['240px', '220px', '180px']} rows={3} />
    </div>
    </div>} loading={true}>
    <div style={{display: 'flex', "align-items": 'flex-start'}}>
    <Avatar style={{ 'margin-right': '12px' }}>
        UI
    </Avatar>
    <div>
        <h3>Semi UI</h3>
        <p>Hi, Bytedance dance dance.</p>
        <p>Hi, Bytedance dance dance.</p>
        <p>Hi, Bytedance dance dance.</p>
    </div>
    </div>
</Skeleton>`,L=`<Skeleton active placeholder={<Row>
    <Col flex="1 1 0%">
        <Row>
            <Col flex="0">
                <Skeleton.Avatar style={{ 'margin-right': "16px"}}/>
            </Col>
            <Col flex="1 1 0%">
                <Skeleton.Title width="20%" />
                <Skeleton.Item width="50%" />
            </Col>
        </Row>
        <Skeleton.Item width="80%" />
        <Skeleton.Item inline width="8%" style={{ 'margin-right': "16px"}}/>
        <Skeleton.Item inline width="8%" style={{ 'margin-right': "16px"}}/>
        <Skeleton.Item inline width="8%" style={{ 'margin-right': "16px"}}/>
    </Col>
    <Col flex="0">
        <Skeleton.Image width="280px" height="140px" />
    </Col>
</Row>} loading={true}>
    <div style={{display: 'flex', "align-items": 'flex-start'}}>
        
    </div>
</Skeleton>`,H=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"active",desc:"动画效果",type:"boolean",default:""},{name:"loading",desc:"加载中",type:"boolean",default:""},{name:"placeholder",desc:"骨架屏内容",type:"JSXElement",default:""},{name:"width",desc:"宽度",type:"string",default:""},{name:"height",desc:"高度",type:"string",default:""}],R=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"inline",desc:"内联项",type:"boolean",default:""},{name:"width",desc:"宽度",type:"string",default:""},{name:"height",desc:"高度",type:"string",default:""}],J=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"inline",desc:"内联项",type:"boolean",default:""},{name:"width",desc:"宽度",type:"string",default:""},{name:"height",desc:"高度",type:"string",default:""},{name:"size",desc:"大小尺寸 extra-small|small|medium|large|extra-large|number",type:"string|number",default:"medium"},{name:"shape",desc:"形状",type:"circle|square",default:"circle"}],E=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"inline",desc:"内联项",type:"boolean",default:""},{name:"width",desc:"string类型为容器宽度，数组为子元素对应行的宽度",type:"string|string[]",default:""},{name:"height",desc:"高度",type:"string",default:""},{name:"rows",desc:"行数",type:"number",default:"4"}],X=[{id:"skeleton_base",text:"基础用法"},{id:"skeleton_img",text:"图形"},{id:"skeleton_combine",text:"组合"},{id:"skeleton_active",text:"动画"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Skeleton属性"},{id:"comp_item_props",text:"Item属性"},{id:"comp_avatar_props",text:"Avatar属性"},{id:"comp_paragraph_props",text:"Paragraph属性"}],f={skeleton_base:O,skeleton_img:q,skeleton_combine:z,skeleton_active:L},G=i("<div><span>显示加载内容"),K=i("<br>"),w=i("<h4>CUI/SolidJs"),M=i("<p>精心打磨每一个组件的用户体验，从用户的角度考虑每个组件的使用场景。"),N=i("<div><br><br><br><br>"),Q=i('<img src="https://cqb325.gitee.io/cui-solid-doc/logo.svg" height="150px" alt="avatar">'),V=i("<div><div><h3>Semi UI</h3><p>Hi, Bytedance dance dance.</p><p>Hi, Bytedance dance dance.</p><p>Hi, Bytedance dance dance."),C=i("<div>"),W=i('<div class="sys-ctx-main-left">'),Y=i("<div><div>");function ge(){const[d,I]=$(!0),A=()=>{I(!d())};return[(()=>{const v=W();return D(T,v,()=>""),l(v,e(n,{dir:"v",size:32,get children(){return[e(s,{heading:2,children:"Skeleton 骨架屏"}),e(n,{id:"skeleton_base",dir:"v",get children(){return e(m,{bordered:!0,get children(){return[(()=>{const t=G(),a=t.firstChild;return l(t,e(U,{onChange:()=>A()}),a),a.style.setProperty("margin-left","10px"),t})(),K(),(()=>{const t=N(),a=t.firstChild,b=a.nextSibling,_=b.nextSibling,P=_.nextSibling;return l(t,e(r,{get placeholder(){return e(r.Avatar,{})},get loading(){return d()},get children(){return e(S,{style:{color:"blue","margin-bottom":"10px"},children:"U"})}}),a),l(t,e(r,{width:"150px",height:"150px",get placeholder(){return e(r.Image,{})},get loading(){return d()},get children(){return e(B,{src:"https://cqb325.gitee.io/cui-solid-doc/logo.svg",width:"150px",height:"150px",alt:"avatar"})}}),b),l(t,e(r,{style:{width:"80px"},get placeholder(){return e(r.Title,{style:{"margin-bottom":"10px"}})},get loading(){return d()},get children(){const o=w();return o.style.setProperty("margin-bottom","0"),o}}),_),l(t,e(r,{width:"240px",get placeholder(){return e(r.Paragraph,{rows:2})},get loading(){return d()},get children(){const o=M();return o.style.setProperty("width","240px"),o}}),P),l(t,e(r,{get placeholder(){return e(r.Button,{})},get loading(){return d()},get children(){return e(F,{children:"Button"})}}),null),t})(),e(c,{align:"left",get children(){return e(p,{type:"primary",children:"基础用法"})}}),e(u,{type:"secondary",spacing:"extended",children:"基础用法"}),e(g,{get data(){return f.skeleton_base}})]}})}}),e(n,{id:"skeleton_img",dir:"v",get children(){return e(m,{bordered:!0,get children(){return[e(r,{get placeholder(){return(()=>{const t=C();return l(t,e(r.Image,{width:"200px",height:"150px"}),null),l(t,e(r.Title,{width:"120px",style:{"margin-top":"10px"}}),null),t})()},loading:!0,get children(){return[Q(),w()]}}),e(c,{align:"left",get children(){return e(p,{type:"primary",children:"基础用法"})}}),e(u,{type:"secondary",spacing:"extended",children:"基础用法"}),e(g,{get data(){return f.skeleton_img}})]}})}}),e(n,{id:"skeleton_combine",dir:"v",get children(){return e(m,{bordered:!0,get children(){return[e(r,{get placeholder(){return(()=>{const t=Y(),a=t.firstChild;return t.style.setProperty("display","flex"),t.style.setProperty("align-items","flex-start"),l(t,e(r.Avatar,{shape:"square",style:{"margin-right":"12px"}}),a),l(a,e(r.Title,{width:"120px",style:{"margin-bottom":"12px","margin-top":"12px"}}),null),l(a,e(r.Paragraph,{width:["240px","220px","180px"],rows:3}),null),t})()},loading:!0,get children(){const t=V(),a=t.firstChild;return t.style.setProperty("display","flex"),t.style.setProperty("align-items","flex-start"),l(t,e(S,{style:{"margin-right":"12px"},children:"UI"}),a),t}}),e(c,{align:"left",get children(){return e(p,{type:"primary",children:"基础用法"})}}),e(u,{type:"secondary",spacing:"extended",children:"基础用法"}),e(g,{get data(){return f.skeleton_combine}})]}})}}),e(n,{id:"skeleton_active",dir:"v",get children(){return e(m,{bordered:!0,get children(){return[e(r,{active:!0,get placeholder(){return e(k,{get children(){return[e(y,{flex:"1 1 0%",get children(){return[e(k,{get children(){return[e(y,{flex:"0",get children(){return e(r.Avatar,{style:{"margin-right":"16px"}})}}),e(y,{flex:"1 1 0%",get children(){return[e(r.Title,{width:"20%"}),e(r.Item,{width:"50%"})]}})]}}),e(r.Item,{width:"80%"}),e(r.Item,{inline:!0,width:"8%",style:{"margin-right":"16px"}}),e(r.Item,{inline:!0,width:"8%",style:{"margin-right":"16px"}}),e(r.Item,{inline:!0,width:"8%",style:{"margin-right":"16px"}})]}}),e(y,{flex:"0",get children(){return e(r.Image,{width:"280px",height:"140px"})}})]}})},loading:!0,get children(){const t=C();return t.style.setProperty("display","flex"),t.style.setProperty("align-items","flex-start"),t}}),e(c,{align:"left",get children(){return e(p,{type:"primary",children:"基础用法"})}}),e(u,{type:"secondary",spacing:"extended",children:"基础用法"}),e(g,{get data(){return f.skeleton_active}})]}})}}),e(n,{dir:"v",size:24,id:"comp_api",get children(){return[e(s,{type:"primary",heading:3,children:"API"}),e(n,{id:"comp_props",dir:"v",get children(){return[e(s,{type:"primary",heading:4,children:"Skeleton Props"}),e(x,{columns:h,data:H,border:!0,size:"small"})]}}),e(n,{id:"comp_item_props",dir:"v",get children(){return[e(s,{type:"primary",heading:4,children:"Item Props"}),e(x,{columns:h,data:R,border:!0,size:"small"})]}}),e(n,{id:"comp_avatar_props",dir:"v",get children(){return[e(s,{type:"primary",heading:4,children:"Avatar Props"}),e(x,{columns:h,data:J,border:!0,size:"small"})]}}),e(n,{id:"comp_paragraph_props",dir:"v",get children(){return[e(s,{type:"primary",heading:4,children:"Paragraph Props"}),e(x,{columns:h,data:E,border:!0,size:"small"})]}})]}})]}})),v})(),e(j,{data:X})]}export{ge as default};
