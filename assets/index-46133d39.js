import{c as S,u as _,i as u,a as t,S as r,T as a,I as o,t as c}from"./index-00bf0c33.js";import{T as h,C as d,B as e,a as y}from"./index-345cd19e.js";import{D as l,a as s,C as x}from"./code-6666454f.js";import{P as i}from"./index-e4583d54.js";import{T as m}from"./index-0092c168.js";import{p as b,e as z}from"./columns-26981c48.js";import{h as C}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const v=`<Space dir="v">
    <Space dir="h">
        <Button type='primary'>Primary</Button>
        <Button type='success'>Success</Button>
        <Button type='error'>Error</Button>
        <Button type='warning'>Warning</Button>
    </Space>
    <Space dir="h">
        <Button type='default'>Default</Button>
        <Button type='text'>Text Button</Button>
        <Button type='link'>LINK</Button>
        <Button type='dashed'>Dashed BUTTON</Button>
    </Space>
</Space>`,I=`<Space dir="h" style={{background: '#7d7d7d', padding: '10px'}}>
    <Button type='primary' ghost>PRIMARY</Button>
    <Button type='success' ghost>SUCCESS</Button>
    <Button type='error' ghost>ERROR</Button>
    <Button type='warning' ghost>WARNING</Button>
    <Button type='default' ghost>DEFAULT</Button>
    <Button type='dashed' ghost>DASHED</Button>
</Space>`,k=`<Space dir="h">
    <Button type='primary' disabled>PRIMARY</Button>
    <Button type='primary' ghost disabled>Ghost</Button>
    <Button type='link' disabled>Link</Button>
    <Button type='text' disabled>Text</Button>
</Space>`,A=`<Space dir="v">
    <Space dir="h" align="center">
        <Button type='primary' size='large'>LARGE</Button>
        <Button type='primary'>DEFAULT</Button>
        <Button type='primary' size='small'>SMALL</Button>
    </Space>
    <Space dir="h">
        <Button type='primary' size='large' icon={<Icon name='search1'/>}>SEARCH</Button>
        <Button type='primary' size='large' icon={<Icon name='search1'/>}></Button>
        <Button type='primary' size='large' circle icon={<Icon name='search1'/>}></Button>
    </Space>
    <Space dir="h">
        <Button type='primary' size='small' icon={<Icon name='search1'/>}>SEARCH</Button>
        <Button type='primary' size='small' icon={<Icon name='search1'/>}></Button>
        <Button type='primary' size='small' circle icon={<Icon name='search1'/>}></Button>
        <Button type='text' size='small'>Text</Button>
    </Space>
</Space>`,T=`<Space dir="v">
    <Space dir="h" align="center">
        <Button type='primary' icon={<Icon name='search1'/>}></Button>
        <Button type='default' icon={<Icon name='search1'/>}></Button>
        <Button type='dashed' icon={<Icon name='plus'/>}></Button>
        <Button type='primary' circle icon={<Icon name='search1'/>}></Button>
    </Space>
    <Space dir="h" align="center">
        <Button type='primary' icon={<Icon name='search1'/>}>Search</Button>
        <Button type='primary' icon={<Icon name='search1'/>} iconAlign='right'>Search</Button>
    </Space>
</Space>`,L=`<Space dir="v">
    <Space dir="h" align="center">
        <Button type='primary' loading size='small'>Sphinx</Button>
        <Button type='success' loading size='small'></Button>
        <Button type='success' loading size='small' circle></Button>
    </Space>
    <Space dir="h">
        <Button type='primary' loading>Loading</Button>
        <Button type='primary' loading={loading()} onClick={() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2500)
        }}>Click Load</Button>
    </Space>
</Space>`,D=`<Space dir="v">
    <ButtonGroup type="primary">
        <Button>Copy</Button>
        <Button>Paste</Button>
        <Button>Search</Button>
    </ButtonGroup>
    <ButtonGroup type="default">
        <Button>Copy</Button>
        <Button>Paste</Button>
        <Button>Search</Button>
    </ButtonGroup>
    <ButtonGroup type="default">
        <Button icon={<Icon name="home"/>}></Button>
        <Button icon={<Icon name="user"/>}></Button>
        <Button icon={<Icon name="search1"/>}></Button>
    </ButtonGroup>
    <ButtonGroup type="default" size="large">
        <Button icon={<Icon name="home"/>}></Button>
        <Button icon={<Icon name="user"/>}></Button>
        <Button icon={<Icon name="search1"/>}></Button>
    </ButtonGroup>
    <ButtonGroup type="default" disabled>
        <Button icon={<Icon name="home"/>}></Button>
        <Button icon={<Icon name="user"/>}></Button>
        <Button icon={<Icon name="search1"/>}></Button>
    </ButtonGroup>
</Space>`,R=[{name:"classList",desc:"Custom Class",type:"Object",default:""},{name:"class",desc:"Custom Class",type:"string",default:""},{name:"link",desc:"Button link",type:"string",default:""},{name:"type",desc:"Button type support",type:"primary|success|error|warning|default|dashed|link|text",default:"default"},{name:"block",desc:"Block button",type:"boolean",default:"false"},{name:"size",desc:"Button size",type:"small|default|large",default:""},{name:"active",desc:"Select the button status in Buttongroup",type:"boolean",default:"false"},{name:"circle",desc:"Circular buttons",type:"boolean",default:"false"},{name:"disabled",desc:"Disable",type:"boolean",default:"false"},{name:"loading",desc:"The loading status will not respond to the click event in TRUE case",type:"boolean",default:"false"},{name:"ghost",desc:"Ghost button",type:"boolean",default:"false"},{name:"icon",desc:"Button icon",type:"Icon",default:""},{name:"iconAlign",desc:"Button icon position",type:"left|right",default:"left"},{name:"onClick",desc:"Click the callback function",type:"Function",default:""}],E=[{name:"classList",desc:"Custom Class",type:"Object",default:""},{name:"class",desc:"Custom Class",type:"string",default:""},{name:"type",desc:"Button type support",type:"primary|success|error|warning|default|dashed|link|text",default:"default"},{name:"size",desc:"Button size",type:"small|default|large",default:""},{name:"disabled",desc:"Disable",type:"boolean",default:"false"},{name:"onClick",desc:"Click the callback function",type:"Function",default:""}],w=[{name:"onClick",desc:"Click event",params:"Event"}],G=[{id:"button_type",text:"Button type"},{id:"button_ghost",text:"Ghost button"},{id:"button_disabled",text:"Disable button"},{id:"button_size",text:"Button size"},{id:"button_icon",text:"Icon button"},{id:"button_loading",text:"Mid -load state"},{id:"button_group",text:"Button group"},{id:"button_api",text:"API"},{id:"button_props",text:"Button attribute"},{id:"button_events",text:"Button event"},{id:"button_group_props",text:"Button group attribute"}],p={button_type:v,button_ghost:I,button_disabled:k,button_size:A,button_icon:T,button_loading:L,button_group:D},P=c('<div id="button_type">'),$=c('<div id="button_ghost">'),U=c('<div id="button_disabled">'),M=c('<div id="button_size">'),N=c('<div id="button_icon">'),F=c('<div id="button_loading">'),H=c('<div id="button_group">'),O=c('<div id="button_api">'),Y=c('<div class="sys-ctx-main-left">'),X=()=>{const[f,B]=S(!1);return[(()=>{const g=Y();return _(C,g,()=>""),u(g,t(r,{dir:"v",size:32,get children(){return[t(h,{heading:2,children:"Button"}),(()=>{const n=P();return u(n,t(d,{bordered:!0,get children(){return[t(r,{dir:"v",get children(){return[t(r,{dir:"h",wrap:!0,get children(){return[t(e,{type:"primary",children:"Primary"}),t(e,{type:"success",children:"Success"}),t(e,{type:"error",children:"Error"}),t(e,{type:"warning",children:"Warning"})]}}),t(r,{dir:"h",wrap:!0,get children(){return[t(e,{type:"default",children:"Default"}),t(e,{type:"text",children:"Text Button"}),t(e,{type:"link",children:"LINK"}),t(e,{type:"dashed",children:"Dashed BUTTON"})]}})]}}),t(l,{align:"left",get children(){return t(a,{type:"primary",children:"Button type"})}}),t(i,{type:"secondary",spacing:"extended",children:"Set type for primary、success、warning、error、default、dashed、text、link Create different styles of buttons and do not set as the default style."}),t(s,{get data(){return p.button_type}})]}})),n})(),(()=>{const n=$();return u(n,t(d,{bordered:!0,get children(){return[t(r,{dir:"h",wrap:!0,style:{background:"var(--cui-color-fill-0)",padding:"10px"},get children(){return[t(e,{type:"primary",ghost:!0,children:"PRIMARY"}),t(e,{type:"success",ghost:!0,children:"SUCCESS"}),t(e,{type:"error",ghost:!0,children:"ERROR"}),t(e,{type:"warning",ghost:!0,children:"WARNING"}),t(e,{type:"default",ghost:!0,children:"DEFAULT"}),t(e,{type:"dashed",ghost:!0,children:"DASHED"})]}}),t(l,{align:"left",get children(){return t(a,{type:"primary",children:"Ghost button"})}}),t(i,{type:"secondary",spacing:"extended",children:"The ghost button reverses the content of the other buttons, and the background becomes transparent, which is often used on the color background."}),t(s,{get data(){return p.button_ghost}})]}})),n})(),(()=>{const n=U();return u(n,t(d,{bordered:!0,get children(){return[t(r,{dir:"h",wrap:!0,get children(){return[t(e,{type:"primary",disabled:!0,children:"PRIMARY"}),t(e,{type:"primary",ghost:!0,disabled:!0,children:"Ghost"}),t(e,{type:"link",disabled:!0,children:"Link"}),t(e,{type:"text",disabled:!0,children:"Text"})]}}),t(l,{align:"left",get children(){return t(a,{type:"primary",children:"Disable button"})}}),t(i,{type:"secondary",spacing:"extended",children:"The button can be set to an unavailable state by adding the Disabled property."}),t(s,{get data(){return p.button_disabled}})]}})),n})(),(()=>{const n=M();return u(n,t(d,{bordered:!0,get children(){return[t(r,{dir:"v",get children(){return[t(r,{dir:"h",wrap:!0,align:"center",get children(){return[t(e,{type:"primary",size:"large",children:"LARGE"}),t(e,{type:"primary",children:"DEFAULT"}),t(e,{type:"primary",size:"small",children:"SMALL"})]}}),t(r,{dir:"h",wrap:!0,get children(){return[t(e,{type:"primary",size:"large",get icon(){return t(o,{name:"search1"})},children:"SEARCH"}),t(e,{type:"primary",size:"large",get icon(){return t(o,{name:"search1"})}}),t(e,{type:"primary",size:"large",circle:!0,get icon(){return t(o,{name:"search1"})}})]}}),t(r,{dir:"h",wrap:!0,get children(){return[t(e,{type:"primary",size:"small",get icon(){return t(o,{name:"search1"})},children:"SEARCH"}),t(e,{type:"primary",size:"small",get icon(){return t(o,{name:"search1"})}}),t(e,{type:"primary",size:"small",circle:!0,get icon(){return t(o,{name:"search1"})}}),t(e,{type:"text",size:"small",children:"Text"})]}})]}}),t(l,{align:"left",get children(){return t(a,{type:"primary",children:"Button size"})}}),t(i,{type:"secondary",spacing:"extended",children:"There are three size of the button: large, default (middle), small"}),t(i,{type:"secondary",spacing:"extended",children:"Set the button to set the buttons to large and small size by setting SIZE to Large and Small, and not set to the default (middle) size."}),t(s,{get data(){return p.button_size}})]}})),n})(),(()=>{const n=N();return u(n,t(d,{bordered:!0,get children(){return[t(r,{dir:"v",get children(){return[t(r,{dir:"h",wrap:!0,align:"center",get children(){return[t(e,{type:"primary",get icon(){return t(o,{name:"search1"})}}),t(e,{type:"default",get icon(){return t(o,{name:"search1"})}}),t(e,{type:"dashed",get icon(){return t(o,{name:"plus"})}}),t(e,{type:"primary",circle:!0,get icon(){return t(o,{name:"search1"})}})]}}),t(r,{dir:"h",wrap:!0,align:"center",get children(){return[t(e,{type:"primary",get icon(){return t(o,{name:"search1"})},children:"Search"}),t(e,{type:"primary",get icon(){return t(o,{name:"search1"})},iconAlign:"right",children:"Search"})]}})]}}),t(l,{align:"left",get children(){return t(a,{type:"primary",children:"Icon button"})}}),t(i,{type:"secondary",spacing:"extended",get children(){return["Set",t(a,{code:!0,children:"icon"}),"The attribute is embedded in an icon in button"]}}),t(i,{type:"secondary",spacing:"extended",get children(){return["Use Button",t(a,{code:!0,children:"icon"}),"Attributes, the icon position will be on the far left, through setting ",t(a,{code:!0,children:"iconAlign"})," Place the button behind."]}}),t(i,{type:"secondary",spacing:"extended",get children(){return["Set",t(a,{code:!0,children:"circle"}),"Attributes, the button can be set to the shape of the circle"]}}),t(s,{get data(){return p.button_icon}})]}})),n})(),(()=>{const n=F();return u(n,t(d,{bordered:!0,get children(){return[t(r,{dir:"v",get children(){return[t(r,{dir:"h",wrap:!0,align:"center",get children(){return[t(e,{type:"primary",loading:!0,size:"small",children:"Sphinx"}),t(e,{type:"success",loading:!0,size:"small"}),t(e,{type:"success",loading:!0,size:"small",circle:!0})]}}),t(r,{dir:"h",get children(){return[t(e,{type:"primary",loading:!0,children:"Loading"}),t(e,{type:"primary",get loading(){return f()},onClick:()=>{B(!0),setTimeout(()=>{B(!1)},2500)},children:"Click Load"})]}})]}}),t(l,{align:"left",get children(){return t(a,{type:"primary",children:"Mid -load state"})}}),t(i,{type:"secondary",spacing:"extended",get children(){return["Add",t(a,{code:!0,children:"loading"}),"The attribute can be allowed to be in the state of loading, you can click the dynamic settings"]}}),t(s,{get data(){return p.button_loading}})]}})),n})(),(()=>{const n=H();return u(n,t(d,{bordered:!0,get children(){return[t(r,{dir:"v",get children(){return[t(y,{type:"primary",get children(){return[t(e,{children:"Copy"}),t(e,{children:"Paste"}),t(e,{children:"Search"})]}}),t(y,{type:"default",get children(){return[t(e,{children:"Copy"}),t(e,{children:"Paste"}),t(e,{children:"Search"})]}}),t(y,{type:"default",get children(){return[t(e,{get icon(){return t(o,{name:"home"})}}),t(e,{get icon(){return t(o,{name:"user"})}}),t(e,{get icon(){return t(o,{name:"search1"})}})]}}),t(y,{type:"default",size:"large",get children(){return[t(e,{get icon(){return t(o,{name:"home"})}}),t(e,{get icon(){return t(o,{name:"user"})}}),t(e,{get icon(){return t(o,{name:"search1"})}})]}}),t(y,{type:"default",disabled:!0,get children(){return[t(e,{get icon(){return t(o,{name:"home"})}}),t(e,{get icon(){return t(o,{name:"user"})}}),t(e,{get icon(){return t(o,{name:"search1"})}})]}})]}}),t(l,{align:"left",get children(){return t(a,{type:"primary",children:"Button group"})}}),t(i,{type:"secondary",spacing:"extended",children:"Put multiple Button in the Buttongroup to achieve the effect of the combination of the buttons."}),t(i,{type:"secondary",spacing:"extended",get children(){return["By setting the attribute of Buttongroup",t(a,{code:!0,children:"size"}),"For LARGE and Small, the size of the button group can be set to Yamato Small without setting",t(a,{code:!0,children:"size"}),", the default (middle) size."]}}),t(i,{type:"secondary",spacing:"extended",get children(){return["Set ",t(a,{code:!0,children:"disabled"}),"The attribute can disable the button group"]}}),t(s,{get data(){return p.button_group}})]}})),n})(),(()=>{const n=O();return u(n,t(r,{dir:"v",size:24,get children(){return[t(h,{type:"primary",heading:3,children:"API"}),t(r,{id:"button_props",dir:"v",get children(){return[t(h,{type:"primary",heading:4,children:"Button Props"}),t(m,{columns:b,data:R,border:!0})]}}),t(r,{id:"button_events",dir:"v",get children(){return[t(h,{type:"primary",heading:4,children:"Button Events"}),t(m,{columns:z,data:w,border:!0})]}}),t(r,{id:"button_group_props",dir:"v",get children(){return[t(h,{type:"primary",heading:4,children:"ButtonGroup Props"}),t(m,{columns:b,data:E,border:!0})]}})]}})),n})()]}})),g})(),t(x,{data:G})]};export{X as default};
