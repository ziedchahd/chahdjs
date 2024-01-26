import{c as i,u as D,i as B,a as e,S as r,T as t,t as _}from"./index-00bf0c33.js";import{h as A}from"./hljs-74a5c6d1.js";import{D as l,a as s,C as E}from"./code-6666454f.js";import{p as S,e as z}from"./columns-26981c48.js";import{T as a,C as o,B as d}from"./index-345cd19e.js";import{P as u}from"./index-e4583d54.js";import{T as v}from"./index-0092c168.js";import{D as c}from"./index-efb21398.js";import{R as V}from"./index-cff0105e.js";import"./_commonjsHelpers-725317a4.js";import"./createField-b596c149.js";const x=`const [visible, setVisible] = createSignal(false);

<Drawer visible={[visible, setVisible]} title="侧边栏">
    content
</Drawer>
<Button type="primary" onClick={() => {
    setVisible(true);
}}>打开</Button>`,k=`const [visible2, setVisible2] = createSignal(false);
const [align, setAlign] = createSignal<'right'|'left'|'top'|'bottom'>('right');

<Drawer visible={[visible2, setVisible2]} title="侧边栏" align={align()}>
    content
</Drawer>
<Space dir="h">
    <RadioGroup stick value={[align, setAlign]} data={[{label: 'Left', value: 'left'}, {label: 'Top', value: 'top'}, {label: 'Right', value: 'right'}, {label: 'Bottom', value: 'bottom'}]} onChange={(v: any) => {
        setAlign(v);
    }}></RadioGroup>
    <Button type="primary" onClick={() => {
        setVisible2(true);
    }}>打开</Button>
</Space>`,T=`const [visible3, setVisible3] = createSignal(false);

<Drawer visible={[visible3, setVisible3]} title="侧边栏" size={500}>
    content
</Drawer>
<Button type="primary" onClick={() => {
    setVisible3(true);
}}>打开</Button>`,P=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"align",desc:"位置 left|right|top|bottom",type:"string",default:"right"},{name:"size",desc:"尺寸大小",type:"number",default:"256"},{name:"title",desc:"标题",type:"string|JSXElement",default:""},{name:"maskCloseable",desc:"点击遮罩进行关闭",type:"boolean",default:"true"},{name:"hasClose",desc:"显示关闭按钮",type:"boolean",default:"true"},{name:"escClose",desc:"使用ESC关闭",type:"boolean",default:""},{name:"visible",desc:"控制显示",type:"Function[]",default:""},{name:"onClose",desc:"关闭时回调",type:"Function",default:""},{name:"onShow",desc:"显示时回调",type:"Function",default:""}],R=[{name:"onClose",desc:"关闭时回调",params:""},{name:"onShow",desc:"显示时回调",params:""}],j=[{id:"drawer_base",text:"基础用法"},{id:"drawer_align",text:"位置"},{id:"drawer_size",text:"尺寸"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],p={drawer_base:x,drawer_align:k,drawer_size:T},G=_('<div class="sys-ctx-main-left">');function Q(){const[f,m]=i(!1),[C,g]=i(!1),[F,h]=i(!1),[b,y]=i("right");return[(()=>{const n=G();return D(A,n,()=>""),B(n,e(r,{dir:"v",size:32,get children(){return[e(a,{heading:2,children:"Drawer 抽屉"}),e(r,{id:"drawer_base",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(c,{visible:[f,m],title:"侧边栏",children:"content"}),e(d,{type:"primary",onClick:()=>{m(!0)},children:"打开"}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"基本用法"})}}),e(u,{type:"secondary",spacing:"extended",children:"基本用法"}),e(s,{get data(){return p.drawer_base}})]}})}}),e(r,{id:"drawer_align",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(c,{visible:[C,g],title:"侧边栏",get align(){return b()},children:"content"}),e(r,{dir:"h",get children(){return[e(V,{stick:!0,value:[b,y],data:[{label:"Left",value:"left"},{label:"Top",value:"top"},{label:"Right",value:"right"},{label:"Bottom",value:"bottom"}],onChange:w=>{y(w)}}),e(d,{type:"primary",onClick:()=>{g(!0)},children:"打开"})]}}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"位置"})}}),e(u,{type:"secondary",spacing:"extended",get children(){return[e(t,{code:!0,children:"align"})," 属性支持 ",e(t,{code:!0,children:"left"})," ",e(t,{code:!0,children:"right"})," ",e(t,{code:!0,children:"top"})," ",e(t,{code:!0,children:"bottom"}),"默认是 ",e(t,{code:!0,children:"right"})]}}),e(s,{get data(){return p.drawer_align}})]}})}}),e(r,{id:"drawer_size",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(c,{visible:[F,h],title:"侧边栏",size:500,children:"content"}),e(d,{type:"primary",onClick:()=>{h(!0)},children:"打开"}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"尺寸"})}}),e(u,{type:"secondary",spacing:"extended",get children(){return["设置",e(t,{code:!0,children:"size"})," 可以修改Drawer的尺寸"]}}),e(s,{get data(){return p.drawer_size}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(a,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(a,{type:"primary",heading:4,children:"Drawer Props"}),e(v,{columns:S,data:P,border:!0,size:"small"})]}}),e(r,{id:"comp_events",dir:"v",get children(){return[e(a,{type:"primary",heading:4,children:"Events"}),e(v,{columns:z,data:R,border:!0,size:"small"})]}})]}})]}})),n})(),e(E,{data:j})]}export{Q as default};
