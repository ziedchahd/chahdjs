import{u as T,i as a,a as t,S as e,T as c,B as C,t as l}from"./index-00bf0c33.js";import{T as y,C as s,B as o}from"./index-345cd19e.js";import{T as n,D as g,a as h,C as B}from"./code-6666454f.js";import{T as b}from"./index-0092c168.js";import{P as r}from"./index-e4583d54.js";import{p as _}from"./columns-26981c48.js";import{h as S}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const x=`<Space dir="h">
    <Tooltip content={<div>Tip Content</div>}>
        <span>mouse over show tips</span>
    </Tooltip>
</Space>`,L=`const style = {width: '120px', 'text-align': 'center'}

<Space dir="v" align="center">
    <Space dir="v" style={{width: '500px'}}>
        <Space dir="h" align="center" justify="center" size={30}>
            <Tooltip content="Content" align="topLeft">
                <Button style={style}>Top Left</Button>
            </Tooltip>
            <Tooltip content="Content" align="top">
                <Button style={style}>Top Center</Button>
            </Tooltip>
            <Tooltip content="Content" align="topRight">
                <Button style={style}>Top Right</Button>
            </Tooltip>
        </Space>
        <BothSide>
            <Space dir="v">
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="leftTop">
                    <Button>Left Top</Button>
                </Tooltip>
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="left">
                    <Button>Left Center</Button>
                </Tooltip>
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="leftBottom">
                    <Button>Left Bottom</Button>
                </Tooltip>
            </Space>
            <Space dir="v">
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="rightTop">
                    <Button>Right Top</Button>
                </Tooltip>
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="right">
                    <Button>Right Center</Button>
                </Tooltip>
                <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="rightBottom">
                    <Button>Right Bottom</Button>
                </Tooltip>
            </Space>
        </BothSide>
        <Space dir="h" align="center" justify="center" size={30}>
            <Tooltip content="Content" align="bottomLeft">
                <Button style={style}>Bottom Left</Button>
            </Tooltip>
            <Tooltip content="Content" align="bottom">
                <Button style={style}>Bottom Center</Button>
            </Tooltip>
            <Tooltip content="Content" align="bottomRight">
                <Button style={style}>Bottom Right</Button>
            </Tooltip>
        </Space>
    </Space>
</Space>`,R=`<Space dir="h">
    <Tooltip content={<div>
        <Paragraph style={{color: '#fff'}}>Tip Content</Paragraph>
        <Paragraph style={{color: '#fff'}}>Custom multi -line content</Paragraph>
    </div>}>
        <span>show tips</span>
    </Tooltip>
</Space>`,P=`<Space dir="h">
    <Tooltip disabled content={<div>
        <Paragraph style={{color: '#fff'}}>Tip Content</Paragraph>
    </div>}>
        <span>show tips</span>
    </Tooltip>
</Space>`,w=`<Space dir="h">
    <Tooltip theme='light' content={<div>
        <Paragraph>Tip Content</Paragraph>
    </div>}>
        <span>show tips</span>
    </Tooltip>

    <Tooltip content={<div>
        <Paragraph style={{color: '#fff'}}>Tip Content</Paragraph>
    </div>}>
        <span>show tips</span>
    </Tooltip>
</Space>`,$=[{name:"style",desc:"Custom style",type:"Object",default:""},{name:"align",desc:"Location top|bottom|left|right|topLeft|topRight|bottomLeft|bottomRight|leftTop|leftBottom|rightTop|rightBottom",type:"string",default:"bottom"},{name:"theme",desc:"style light|dark",type:"string",default:"dark"},{name:"content",desc:"Reminder content",type:"any",default:""},{name:"disabled",desc:"Disable",type:"boolean",default:""}],D=[{id:"tooltip_base",text:"Basic usage"},{id:"popover_align",text:"Location"},{id:"tooltip_multi",text:"Multi -line content"},{id:"tooltip_disabled",text:"Disable"},{id:"tooltip_theme",text:"style"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Attributes"}],u={tooltip_base:x,popover_align:L,tooltip_multi:R,tooltip_disabled:P,tooltip_theme:w},z=l("<span>mouse over show tips"),j=l("<br>"),m=l("<span>show tips"),A=l('<div class="sys-ctx-main-left">'),k=l("<div>Tip Content"),p=l("<div><div>Content</div><div>Content</div><div>Content"),v=l("<div>");function E(){const d={width:"120px","text-align":"center"};return[(()=>{const f=A();return T(S,f,()=>""),a(f,t(e,{dir:"v",size:32,get children(){return[t(y,{heading:2,children:"Tooltip"}),t(e,{id:"tooltip_base",dir:"v",get children(){return t(s,{bordered:!0,get children(){return[t(e,{dir:"h",get children(){return t(n,{get content(){return k()},get children(){return z()}})}}),t(g,{align:"left",get children(){return t(c,{type:"primary",children:"Basic usage"})}}),t(r,{type:"secondary",spacing:"extended",get children(){return["Simple display, adding attribute closable can close the label. ",j(),"When you click the closure label, the onClose event will be triggered."]}}),t(h,{get data(){return u.tooltip_base}})]}})}}),t(e,{id:"popover_align",dir:"v",get children(){return t(s,{bordered:!0,get children(){return[t(e,{dir:"v",align:"center",get children(){return t(e,{dir:"v",style:{width:"400px"},get children(){return[t(e,{dir:"h",align:"center",justify:"center",size:30,get children(){return[t(n,{content:"Content",align:"topLeft",get children(){return t(o,{style:d,children:"Top Left"})}}),t(n,{content:"Content",align:"top",get children(){return t(o,{style:d,children:"Top Center"})}}),t(n,{content:"Content",align:"topRight",get children(){return t(o,{style:d,children:"Top Right"})}})]}}),t(C,{get children(){return[t(e,{dir:"v",get children(){return[t(n,{get content(){return p()},align:"leftTop",get children(){return t(o,{children:"Left Top"})}}),t(n,{get content(){return p()},align:"left",get children(){return t(o,{children:"Left Center"})}}),t(n,{get content(){return p()},align:"leftBottom",get children(){return t(o,{children:"Left Bottom"})}})]}}),t(e,{dir:"v",get children(){return[t(n,{get content(){return p()},align:"rightTop",get children(){return t(o,{children:"Right Top"})}}),t(n,{get content(){return p()},align:"right",get children(){return t(o,{children:"Right Center"})}}),t(n,{get content(){return p()},align:"rightBottom",get children(){return t(o,{children:"Right Bottom"})}})]}})]}}),t(e,{dir:"h",align:"center",justify:"center",size:30,get children(){return[t(n,{content:"Content",align:"bottomLeft",get children(){return t(o,{style:d,children:"Bottom Left"})}}),t(n,{content:"Content",align:"bottom",get children(){return t(o,{style:d,children:"Bottom Center"})}}),t(n,{content:"Content",align:"bottomRight",get children(){return t(o,{style:d,children:"Bottom Right"})}})]}})]}})}}),t(g,{align:"left",get children(){return t(c,{type:"primary",children:"Location"})}}),t(r,{type:"secondary",spacing:"extended",children:"Support 12 different direction display, the specific configuration can view API."}),t(h,{get data(){return u.popover_align}})]}})}}),t(e,{id:"tooltip_multi",dir:"v",get children(){return t(s,{bordered:!0,get children(){return[t(e,{dir:"h",get children(){return t(n,{get content(){return(()=>{const i=v();return a(i,t(r,{style:{color:"#fff"},children:"Tip Content"}),null),a(i,t(r,{style:{color:"#fff"},children:"Custom multi -line content"}),null),i})()},get children(){return m()}})}}),t(g,{align:"left",get children(){return t(c,{type:"primary",children:"Multi -line content"})}}),t(r,{type:"secondary",spacing:"extended",children:"Content content is a custom JSX tag, which can edit complex content."}),t(h,{get data(){return u.tooltip_multi}})]}})}}),t(e,{id:"tooltip_disabled",dir:"v",get children(){return t(s,{bordered:!0,get children(){return[t(e,{dir:"h",get children(){return t(n,{disabled:!0,get content(){return(()=>{const i=v();return a(i,t(r,{style:{color:"#fff"},children:"Tip Content"})),i})()},get children(){return m()}})}}),t(g,{align:"left",get children(){return t(c,{type:"primary",children:"Disable"})}}),t(r,{type:"secondary",spacing:"extended",children:"Set Disabled to disable tooltip."}),t(h,{get data(){return u.tooltip_disabled}})]}})}}),t(e,{id:"tooltip_theme",dir:"v",get children(){return t(s,{bordered:!0,get children(){return[t(e,{dir:"h",get children(){return[t(n,{theme:"light",get content(){return(()=>{const i=v();return a(i,t(r,{children:"Tip Content"})),i})()},get children(){return m()}}),t(n,{get content(){return(()=>{const i=v();return a(i,t(r,{style:{color:"#fff"},children:"Tip Content"})),i})()},get children(){return m()}})]}}),t(g,{align:"left",get children(){return t(c,{type:"primary",children:"style"})}}),t(r,{type:"secondary",spacing:"extended",children:"By setting Theme switching display style, support Light and dark default DARK"}),t(h,{get data(){return u.tooltip_theme}})]}})}}),t(e,{dir:"v",size:24,id:"comp_api",get children(){return[t(y,{type:"primary",heading:3,children:"API"}),t(e,{id:"comp_props",dir:"v",get children(){return[t(y,{type:"primary",heading:4,children:"Tooltip Props"}),t(b,{columns:_,data:$,border:!0,size:"small"})]}})]}})]}})),f})(),t(B,{data:D})]}export{E as default};
