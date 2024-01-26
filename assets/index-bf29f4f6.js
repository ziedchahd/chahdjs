import{c as P,u as k,i as d,a as t,S as n,P as e,T as p,B as w,t as l}from"./index-00bf0c33.js";import{T as v,C as s,B as r}from"./index-345cd19e.js";import{D as u,a as h,C as _}from"./code-6666454f.js";import{P as m}from"./index-e4583d54.js";import{T as S}from"./index-0092c168.js";import{p as T}from"./columns-26981c48.js";import{h as x}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const R=`<Space dir="v">
    <div>
        <Popover content="over Content">
            <span>OVER</span>
        </Popover>
    </div>
    <div>
        <Popover content="click Content" trigger="click">
            <span>Click</span>
        </Popover>
    </div>
</Space>`,L=`<Space dir="v" align="center">
    <Space dir="v" style={{width: '500px'}}>
        <Space dir="h" align="center" justify="center" size={30}>
            <Popover content="Content" trigger="click" align="topLeft" arrow>
                <Button style={style}>Top Left</Button>
            </Popover>
            <Popover content="Content" trigger="click" align="top" arrow>
                <Button style={style}>Top Center</Button>
            </Popover>
            <Popover content="Content" trigger="click" align="topRight" arrow>
                <Button style={style}>Top Right</Button>
            </Popover>
        </Space>
        <BothSide>
            <Space dir="v">
                <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="leftTop" arrow>
                    <Button>Left Top</Button>
                </Popover>
                <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="left" arrow>
                    <Button>Left Center</Button>
                </Popover>
                <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="leftBottom" arrow>
                    <Button>Left Bottom</Button>
                </Popover>
            </Space>
            <Space dir="v">
                <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="rightTop" arrow>
                    <Button>Right Top</Button>
                </Popover>
                <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="right" arrow>
                    <Button>Right Center</Button>
                </Popover>
                <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="rightBottom" arrow>
                    <Button>Right Bottom</Button>
                </Popover>
            </Space>
        </BothSide>
        <Space dir="h" align="center" justify="center" size={30}>
            <Popover content="Content" trigger="click" align="bottomLeft" arrow>
                <Button style={style}>Bottom Left</Button>
            </Popover>
            <Popover content="Content" trigger="click" align="bottom" arrow>
                <Button style={style}>Bottom Center</Button>
            </Popover>
            <Popover content="Content" trigger="click" align="bottomRight" arrow>
                <Button style={style}>Bottom Right</Button>
            </Popover>
        </Space>
    </Space>
</Space>`,$=`<Space dir="v">
    <div>
        <Popover visible={[visible, setVisible]} content={<div>
            <div>content!content!content!</div>
            <div>content!content!content!</div>
            <div>content!content!content!</div>
            <div>content!content!content!</div>
            <Button type='text' size='small' onClick={() => {
                setVisible(false);
            }}>Close</Button>
        </div>} arrow trigger="click">
            <span>Click</span>
        </Popover>
    </div>
</Space>`,z=[{name:"align",desc:"Location top|bottom|left|right|topLeft|topRight|bottomLeft|bottomRight|leftTop|leftBottom|rightTop|rightBottom",type:"string",default:"right"},{name:"trigger",desc:"Triggering conditions hover|click",type:"string",default:"hover"},{name:"disabled",desc:"Disable",type:"boolean",default:""},{name:"arrow",desc:"Displayed arrow",type:"boolean",default:""},{name:"theme",desc:"theme",type:"string",default:""},{name:"hideDelay",desc:"Hidden delay",type:"number",default:"200"},{name:"content",desc:"Reminder content",type:"string|JSXElement",default:""},{name:"visible",desc:"Show hidden control",type:"Function[]",default:""},{name:"onOpen",desc:"Open the callback function",type:"Function",default:""}],D=[{id:"popover_base",text:"Basic usage"},{id:"popover_align",text:"Location"},{id:"popover_controller",text:"Controlled"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Bubble attribute"}],f={popover_base:R,popover_align:L,popover_controller:$},j=l("<span>OVER"),C=l("<div>"),B=l("<span>Click"),A=l('<div class="sys-ctx-main-left">'),c=l("<div><div>Content</div><div>Content</div><div>Content"),V=l("<div><div>content!content!content!</div><div>content!content!content!</div><div>content!content!content!</div><div>content!content!content!");function N(){const[b,y]=P(!1),i={width:"120px","text-align":"center"};return[(()=>{const a=A();return k(x,a,()=>""),d(a,t(n,{dir:"v",size:32,get children(){return[t(v,{heading:2,children:"Popover"}),t(n,{id:"popover_base",dir:"v",get children(){return t(s,{bordered:!0,get children(){return[t(n,{dir:"v",get children(){return[(()=>{const o=C();return d(o,t(e,{content:"over Content",get children(){return j()}})),o})(),(()=>{const o=C();return d(o,t(e,{content:"click Content",trigger:"click",get children(){return B()}})),o})()]}}),t(u,{align:"left",get children(){return t(p,{type:"primary",children:"Basic usage"})}}),t(m,{type:"secondary",spacing:"extended",children:"Support two types of triggers: mouse hovering and click. The default is the mouse hover."}),t(h,{get data(){return f.popover_base}})]}})}}),t(n,{id:"popover_align",dir:"v",get children(){return t(s,{bordered:!0,get children(){return[t(n,{dir:"v",align:"center",get children(){return t(n,{dir:"v",style:{width:"500px"},get children(){return[t(n,{dir:"h",align:"center",justify:"center",size:30,get children(){return[t(e,{content:"Content",trigger:"click",align:"topLeft",arrow:!0,get children(){return t(r,{style:i,children:"Top Left"})}}),t(e,{content:"Content",trigger:"click",align:"top",arrow:!0,get children(){return t(r,{style:i,children:"Top Center"})}}),t(e,{content:"Content",trigger:"click",align:"topRight",arrow:!0,get children(){return t(r,{style:i,children:"Top Right"})}})]}}),t(w,{get children(){return[t(n,{dir:"v",get children(){return[t(e,{get content(){return c()},trigger:"click",align:"leftTop",arrow:!0,get children(){return t(r,{children:"Left Top"})}}),t(e,{get content(){return c()},trigger:"click",align:"left",arrow:!0,get children(){return t(r,{children:"Left Center"})}}),t(e,{get content(){return c()},trigger:"click",align:"leftBottom",arrow:!0,get children(){return t(r,{children:"Left Bottom"})}})]}}),t(n,{dir:"v",get children(){return[t(e,{get content(){return c()},trigger:"click",align:"rightTop",arrow:!0,get children(){return t(r,{children:"Right Top"})}}),t(e,{get content(){return c()},trigger:"click",align:"right",arrow:!0,get children(){return t(r,{children:"Right Center"})}}),t(e,{get content(){return c()},trigger:"click",align:"rightBottom",arrow:!0,get children(){return t(r,{children:"Right Bottom"})}})]}})]}}),t(n,{dir:"h",align:"center",justify:"center",size:30,get children(){return[t(e,{content:"Content",trigger:"click",align:"bottomLeft",arrow:!0,get children(){return t(r,{style:i,children:"Bottom Left"})}}),t(e,{content:"Content",trigger:"click",align:"bottom",arrow:!0,get children(){return t(r,{style:i,children:"Bottom Center"})}}),t(e,{content:"Content",trigger:"click",align:"bottomRight",arrow:!0,get children(){return t(r,{style:i,children:"Bottom Right"})}})]}})]}})}}),t(u,{align:"left",get children(){return t(p,{type:"primary",children:"位置"})}}),t(m,{type:"secondary",spacing:"extended",children:"Support 12 different direction display, the specific configuration can view API."}),t(h,{get data(){return f.popover_align}})]}})}}),t(n,{id:"popover_controller",dir:"v",get children(){return t(s,{bordered:!0,get children(){return[t(n,{dir:"v",get children(){const o=C();return d(o,t(e,{visible:[b,y],get content(){return(()=>{const g=V();return g.firstChild.nextSibling.nextSibling.nextSibling,d(g,t(r,{type:"text",size:"small",onClick:()=>{y(!1)},children:"Close"}),null),g})()},arrow:!0,trigger:"click",get children(){return B()}})),o}}),t(u,{align:"left",get children(){return t(p,{type:"primary",children:"Controlled"})}}),t(m,{type:"secondary",spacing:"extended",children:"visible Attribute is controllable attributes"}),t(h,{get data(){return f.popover_controller}})]}})}}),t(n,{dir:"v",size:24,id:"comp_api",get children(){return[t(v,{type:"primary",heading:3,children:"API"}),t(n,{id:"comp_props",dir:"v",get children(){return[t(v,{type:"primary",heading:4,children:"Popover Props"}),t(S,{columns:T,data:z,border:!0,size:"small"})]}})]}})]}})),a})(),t(_,{data:D})]}export{N as default};
