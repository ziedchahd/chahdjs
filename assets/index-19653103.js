import{c as _,u as S,i as g,a as e,S as a,T as t,t as b}from"./index-00bf0c33.js";import{T as r}from"./index-83488e34.js";import{T as h}from"./index-5ebde19f.js";import{A as v}from"./index-31b5d2c6.js";import{T as s,C as i,B as C}from"./index-345cd19e.js";import{D as n,a as d,C as x}from"./code-6666454f.js";import{P as c}from"./index-e4583d54.js";import{T as f}from"./index-0092c168.js";import{p as L,e as w}from"./columns-26981c48.js";import{h as A}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const z=`<Space dir="h">
    <Tag>Label</Tag>
    <Tag>Tab</Tag>
    <Tag closable>Label</Tag>
</Space>`,k=`<Space dir="h">
    <Tag>Label</Tag>
    <Tag value={10}>Value</Tag>
    <Tag theme='primary' circle>Circle</Tag>
    <Tag theme='primary' avatar={<Avatar>U</Avatar>}>Avatar</Tag>
</Space>`,P=`<Space dir="v">
    <Space dir="h">
        <Tag>default tag</Tag>
        <Tag theme='primary'>PRIMARY</Tag>
        <Tag theme='danger'>中文</Tag>
        <Tag theme='warning'>warning</Tag>
        <Tag theme='success'>success</Tag>
        <Tag theme='info'>Info</Tag>
        <Tag theme='magenta'>magenta</Tag>
        <Tag theme='red'>red</Tag>
        <Tag theme='volcano'>volcano</Tag>
        <Tag theme='orange'>orange</Tag>
    </Space>
    <Space>
        <Tag theme='gold'>gold</Tag>
        <Tag theme='yellow'>yellow</Tag>
        <Tag theme='lime'>lime</Tag>
        <Tag theme='green'>green</Tag>
        <Tag theme='cyan'>cyan</Tag>
        <Tag theme='blue'>blue</Tag>
        <Tag theme='geekblue'>geekblue</Tag>
        <Tag theme='purple'>purple</Tag>
    </Space>
</Space>`,V=`<Space dir="h">
    <Tag closable>Label</Tag>
    <Tag value={10} closable>Value</Tag>
    <Tag theme='primary' circle closable>Circle</Tag>
    <Tag theme='primary' closable avatar={<Avatar>U</Avatar>}>Avatar</Tag>
</Space>`,B=`<Space dir="h">
    <Tag size='large'>Label</Tag>
    <Tag theme='primary'>Tab</Tag>
</Space>`,I=`const [visible, setVisible] = createSignal(true);

<Space dir="h">
    <Tag theme='primary' closable visible={[visible, setVisible]}>Label</Tag>
    <Button size='small' onClick={() => {
        setVisible(!visible());
    }}>closure/show</Button>
</Space>`,$=`<Space dir="h">
    <Space dir="v">
        <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
            <TagGroup data={[
                {id: '1', title: 'Label'},
                {id: '2', title: 'Tab'},
            ]}/>
        </div>
        <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
            <TagGroup size='large' data={[
                {id: '1', title: 'Label'},
                {id: '2', title: 'Tab'},
            ]}/>
        </div>
        <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
            <TagGroup data={[
                {id: '1', title: 'Label'},
                {id: '2', title: 'Tab'},
                {id: '3', title: 'Label'},
                {id: '4', title: 'Label four'},
            ]} closable max={2}/>
        </div>
    </Space>
</Space>`,D=[{name:"style",desc:"Custom style",type:"Object",default:""},{name:"theme",desc:"Built -in style primary|danger|warning|success|info|magenta|red|volcano|orange|gold|yellow|lime|green|cyan|blue|geekblue|purple",type:"string",default:"default"},{name:"value",desc:"Value",type:"number",default:""},{name:"circle",desc:"Rounded tag",type:"boolean",default:""},{name:"size",desc:"Label small|large",type:"string",default:""},{name:"avatar",desc:"avatar",type:"Avatar",default:""},{name:"closable",desc:"Close label",type:"boolean",default:""},{name:"visible",desc:"Visible binding attribute",type:"Function[]",default:""},{name:"onBeforeClose",desc:"Close the label premature rebate",type:"Function",default:""},{name:"onClose",desc:"Close tag calls",type:"Function",default:""}],R=[{name:"onBeforeClose",desc:"Close the label premature rebate",params:"Event"},{name:"onClose",desc:"Close tag calls",params:"Event"}],E=[{id:"tag_base",text:"Basic usage"},{id:"tag_type",text:"Label"},{id:"tag_theme",text:"Built -in style"},{id:"tag_closeable",text:"Close"},{id:"tag_size",text:"size"},{id:"tag_control",text:"Controlled"},{id:"tag_group",text:"Label"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Attributes"},{id:"comp_events",text:"event"}],o={tag_base:z,tag_type:k,tag_theme:P,tag_closeable:V,tag_size:B,tag_control:I,tag_group:$},p=b("<br>"),m=b("<div>"),G=b('<div class="sys-ctx-main-left">');function K(){const[y,T]=_(!0);return[(()=>{const u=G();return S(A,u,()=>""),g(u,e(a,{dir:"v",size:32,get children(){return[e(s,{heading:2,children:"Tag"}),e(a,{id:"tag_base",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"h",get children(){return[e(r,{children:"Label"}),e(r,{children:"Tab"}),e(r,{closable:!0,children:"Label"})]}}),e(n,{align:"left",get children(){return e(t,{type:"primary",children:"Basic usage"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["Simple display, adding attribute closable can close the label.",p(),"When you click the closure label, the onClose event will be triggered."]}}),e(d,{get data(){return o.tag_base}})]}})}}),e(a,{id:"tag_type",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"h",get children(){return[e(r,{children:"Label"}),e(r,{value:10,children:"Value"}),e(r,{theme:"primary",circle:!0,children:"Circle"}),e(r,{theme:"primary",get avatar(){return e(v,{children:"U"})},children:"Avatar"})]}}),e(n,{align:"left",get children(){return e(t,{type:"primary",children:"Label"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["Value attributes can set labels with display value",p(),"Setting circle can generate rounded corners tags ",p(),"Set Avatar to generate a tag with the avatar"]}}),e(d,{get data(){return o.tag_type}})]}})}}),e(a,{id:"tag_theme",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"v",get children(){return[e(a,{dir:"h",wrap:!0,get children(){return[e(r,{children:"default tag"}),e(r,{theme:"primary",children:"PRIMARY"}),e(r,{theme:"danger",children:"danger"}),e(r,{theme:"warning",children:"warning"}),e(r,{theme:"success",children:"success"}),e(r,{theme:"info",children:"Info"}),e(r,{theme:"magenta",children:"magenta"}),e(r,{theme:"red",children:"red"}),e(r,{theme:"volcano",children:"volcano"}),e(r,{theme:"orange",children:"orange"})]}}),e(a,{dir:"h",wrap:!0,get children(){return[e(r,{theme:"gold",children:"gold"}),e(r,{theme:"yellow",children:"yellow"}),e(r,{theme:"lime",children:"lime"}),e(r,{theme:"green",children:"green"}),e(r,{theme:"cyan",children:"cyan"}),e(r,{theme:"blue",children:"blue"}),e(r,{theme:"geekblue",children:"geekblue"}),e(r,{theme:"purple",children:"purple"})]}})]}}),e(n,{align:"left",get children(){return e(t,{type:"primary",children:"Built -in style"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["Select the built -in style by setting Theme ",e(t,{code:!0,children:"primary"})," ",e(t,{code:!0,children:"danger"})," ",e(t,{code:!0,children:"warning"}),e(t,{code:!0,children:"success"})," ",e(t,{code:!0,children:"info"})," ",e(t,{code:!0,children:"magenta"}),e(t,{code:!0,children:"red"})," ",e(t,{code:!0,children:"volcano"})," ",e(t,{code:!0,children:"orange"}),e(t,{code:!0,children:"gold"})," ",e(t,{code:!0,children:"yellow"})," ",e(t,{code:!0,children:"lime"}),e(t,{code:!0,children:"green"})," ",e(t,{code:!0,children:"cyan"})," ",e(t,{code:!0,children:"blue"}),e(t,{code:!0,children:"geekblue"})," ",e(t,{code:!0,children:"purple"})]}}),e(d,{get data(){return o.tag_theme}})]}})}}),e(a,{id:"tag_closeable",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"h",get children(){return[e(r,{closable:!0,children:"Label"}),e(r,{value:10,closable:!0,children:"Value"}),e(r,{theme:"primary",circle:!0,closable:!0,children:"Circle"}),e(r,{theme:"primary",closable:!0,get avatar(){return e(v,{children:"U"})},children:"Avatar"})]}}),e(n,{align:"left",get children(){return e(t,{type:"primary",children:"Close"})}}),e(c,{type:"secondary",spacing:"extended",children:"Set the closable property to close the label"}),e(d,{get data(){return o.tag_closeable}})]}})}}),e(a,{id:"tag_size",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"h",get children(){return[e(r,{size:"large",children:"Label"}),e(r,{theme:"primary",children:"Tab"})]}}),e(n,{align:"left",get children(){return e(t,{type:"primary",children:"size"})}}),e(c,{type:"secondary",spacing:"extended",children:"SIZE attribute supports large"}),e(d,{get data(){return o.tag_size}})]}})}}),e(a,{id:"tag_control",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"h",get children(){return[e(r,{theme:"primary",closable:!0,visible:[y,T],children:"Label"}),e(C,{size:"small",onClick:()=>{T(!y())},children:"closure/show"})]}}),e(n,{align:"left",get children(){return e(t,{type:"primary",children:"Controlled label"})}}),e(c,{type:"secondary",spacing:"extended",children:"In the case where closable is true, Visible supports display status controllable"}),e(d,{get data(){return o.tag_control}})]}})}}),e(a,{id:"tag_group",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(a,{dir:"h",get children(){return e(a,{dir:"v",get children(){return[(()=>{const l=m();return l.style.setProperty("background-color","var(--cui-color-fill-0)"),l.style.setProperty("padding","5px"),g(l,e(h,{data:[{id:"1",title:"Label"},{id:"2",title:"Tab"}]})),l})(),(()=>{const l=m();return l.style.setProperty("background-color","var(--cui-color-fill-0)"),l.style.setProperty("padding","5px"),g(l,e(h,{size:"large",data:[{id:"1",title:"Label"},{id:"2",title:"Tab"}]})),l})(),(()=>{const l=m();return l.style.setProperty("background-color","var(--cui-color-fill-0)"),l.style.setProperty("padding","5px"),g(l,e(h,{data:[{id:"1",title:"Label"},{id:"2",title:"Tab"},{id:"3",title:"Label"},{id:"4",title:"Label four"}],closable:!0,max:2})),l})()]}})}}),e(n,{align:"left",get children(){return e(t,{type:"primary",children:"Label"})}}),e(c,{type:"secondary",spacing:"extended",children:"Label"}),e(d,{get data(){return o.tag_group}})]}})}}),e(a,{dir:"v",size:24,id:"comp_api",get children(){return[e(s,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(s,{type:"primary",heading:4,children:"Tag Props"}),e(f,{columns:L,data:D,border:!0,size:"small"})]}}),e(a,{id:"comp_events",dir:"v",get children(){return[e(s,{type:"primary",heading:4,children:"Tag Events"}),e(f,{columns:w,data:R,border:!0,size:"small"})]}})]}})]}})),u})(),e(x,{data:E})]}export{K as default};
