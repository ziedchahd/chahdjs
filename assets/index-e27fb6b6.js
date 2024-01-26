import{c as p,u as b,i as y,a as e,S as t,T as r,I as f,t as s}from"./index-00bf0c33.js";import{T as a}from"./index-2c1e88fa.js";import{T as o,C as l}from"./index-345cd19e.js";import{D as d,a as n,C as _}from"./code-6666454f.js";import{P as u}from"./index-e4583d54.js";import{R as x,C as h}from"./index-96ab4b8f.js";import{T as m}from"./index-0092c168.js";import{p as v,e as E}from"./columns-26981c48.js";import{h as A}from"./hljs-74a5c6d1.js";import"./index-4642d62a.js";import"./Value-1107dbb2.js";import"./index-5ebde19f.js";import"./index-83488e34.js";import"./createField-b596c149.js";import"./_commonjsHelpers-725317a4.js";const C=`const data = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<TreeSelect data={data}/>`,F=`const data = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<TreeSelect data={data} disabled/>`,S=`const data = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<Row>
    <Col grid={0.33}>
        <TreeSelect data={data} size='small'/>
    </Col>
    <Col grid={0.33}>
        <TreeSelect data={data}/>
    </Col>
    <Col grid={0.33}>
        <TreeSelect data={data} size='large'/>
    </Col>
</Row>`,j=`const data = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<TreeSelect data={data} clearable/>`,z=`const data = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<TreeSelect prepend={<Icon name='tag'/>} data={data} clearable/>`,T=`const data = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<TreeSelect multi data={data} clearable/>`,R=`const data = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<TreeSelect multi data={data} clearable checkRelation="unRelated" />`,w=`const data = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<TreeSelect multi data={data} clearable checkRelation="unRelated" showMax={2}/>`,D=`const data = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<TreeSelect multi data={data} valueClosable clearable checkRelation="unRelated" />`,B=`const data = [
    {id: 'beijing', title: '北京', children: [
        {id: 'gugong', title: '故宫'},
        {id: 'tiantan', title: '天坛'},
    ]},
    {id: 'zhejiang', title: '浙江', children: [
        {id: 'xihu', title: '西湖'},
        {id: 'linyin', title: '灵隐'},
    ]},
]

<Space dir="v">
    <div>Leaf:</div>
    <TreeSelect multi data={data} clearable mode='Leaf' />
    <div>Shallow:</div>
    <TreeSelect multi data={data} clearable mode='Shallow' />
    <div>All:</div>
    <TreeSelect multi data={data} clearable mode='All' />
</Space>`,L=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"data",desc:"源数据",type:"Array",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"clearable",desc:"可清空",type:"boolean",default:""},{name:"prepend",desc:"前缀",type:"JSXElement",default:""},{name:"mode",desc:"值的选择模式 支持All|Half|Leaf|Shallow",type:"string",default:"Half"},{name:"size",desc:"尺寸 small|large",type:"string",default:""},{name:"transfer",desc:"下拉使用Portal渲染",type:"boolean",default:""},{name:"showMax",desc:"最多显示个数",type:"number",default:""},{name:"value",desc:"可控值",type:"Function[]",default:""},{name:"multi",desc:"多选，显示复选框",type:"boolean",default:""},{name:"directory",desc:"显示目录图标",type:"boolean",default:""},{name:"checkRelation",desc:"选择框的级联关系 related|unRelated ",type:"string",default:"related"},{name:"align",desc:"下拉的位置 bottomLeft|bottomRight ",type:"string",default:"bottomLeft"},{name:"valueClosable",desc:"值可关闭 ",type:"boolean",default:""},{name:"placeholder",desc:"placeholder",type:"string",default:""},{name:"showMore",desc:"是否鼠标滑过显示隐藏的值 ",type:"boolean",default:""},{name:"onChange",desc:"复选框选中事件",type:"Function",default:""}],M=[{name:"onChange",desc:"值变化事件",params:"value"}],k=[{id:"tree_base",text:"基础用法"},{id:"tree_disabled",text:"禁用"},{id:"tree_size",text:"尺寸"},{id:"tree_clearable",text:"可清空"},{id:"tree_prepend",text:"前缀"},{id:"tree_multi",text:"多选"},{id:"tree_relation",text:"多选非级联"},{id:"tree_showMax",text:"显示个数"},{id:"tree_valueClosable",text:"可关闭"},{id:"tree_mode",text:"选择模式"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],c={tree_base:C,tree_disabled:F,tree_size:S,tree_clearable:j,tree_prepend:z,tree_multi:T,tree_relation:R,tree_showMax:w,tree_valueClosable:D,tree_mode:B},P=s("<div>Leaf:"),I=s("<div>Shallow:"),$=s("<div>All:"),H=s('<div class="sys-ctx-main-left">');function ie(){p(["1_2_1"]),p("1_2_1");const i=[{id:"beijing",title:"北京",children:[{id:"gugong",title:"故宫"},{id:"tiantan",title:"天坛"}]},{id:"zhejiang",title:"浙江",children:[{id:"xihu",title:"西湖"},{id:"linyin",title:"灵隐"}]}];return[(()=>{const g=H();return b(A,g,()=>""),y(g,e(t,{dir:"v",size:32,get children(){return[e(o,{heading:2,children:"TreeSelect 树选择"}),e(t,{id:"tree_base",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(a,{data:i}),e(d,{align:"left",get children(){return e(r,{type:"primary",children:"基础用法"})}}),e(u,{type:"secondary",spacing:"extended",children:"基础用法"}),e(n,{get data(){return c.tree_base}})]}})}}),e(t,{id:"tree_disabled",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(a,{data:i,disabled:!0}),e(d,{align:"left",get children(){return e(r,{type:"primary",children:"禁用"})}}),e(u,{type:"secondary",spacing:"extended",children:"使用 disabled 进行禁用"}),e(n,{get data(){return c.tree_disabled}})]}})}}),e(t,{id:"tree_size",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(x,{get children(){return[e(h,{grid:.33,get children(){return e(a,{data:i,size:"small"})}}),e(h,{grid:.33,get children(){return e(a,{data:i})}}),e(h,{grid:.33,get children(){return e(a,{data:i,size:"large"})}})]}}),e(d,{align:"left",get children(){return e(r,{type:"primary",children:"尺寸"})}}),e(u,{type:"secondary",spacing:"extended",children:"size 支持 small large"}),e(n,{get data(){return c.tree_size}})]}})}}),e(t,{id:"tree_clearable",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(a,{data:i,clearable:!0}),e(d,{align:"left",get children(){return e(r,{type:"primary",children:"可清空"})}}),e(u,{type:"secondary",spacing:"extended",children:"clearable 可清空选择数据"}),e(n,{get data(){return c.tree_clearable}})]}})}}),e(t,{id:"tree_prepend",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(a,{get prepend(){return e(f,{name:"tag"})},data:i,clearable:!0}),e(d,{align:"left",get children(){return e(r,{type:"primary",children:"前缀"})}}),e(u,{type:"secondary",spacing:"extended",children:"使用 prepend 可添加前缀"}),e(n,{get data(){return c.tree_prepend}})]}})}}),e(t,{id:"tree_multi",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(a,{multi:!0,data:i,clearable:!0}),e(d,{align:"left",get children(){return e(r,{type:"primary",children:"多选"})}}),e(u,{type:"secondary",spacing:"extended",children:"使用 multi 为多选模式, 多选默认级联选择"}),e(n,{get data(){return c.tree_multi}})]}})}}),e(t,{id:"tree_relation",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(a,{multi:!0,data:i,clearable:!0,checkRelation:"unRelated"}),e(d,{align:"left",get children(){return e(r,{type:"primary",children:"多选非级联"})}}),e(u,{type:"secondary",spacing:"extended",children:"checkRelation 支持 unRelated (非级联) 和 related (级联) 默认 related"}),e(n,{get data(){return c.tree_relation}})]}})}}),e(t,{id:"tree_showMax",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(a,{multi:!0,data:i,clearable:!0,checkRelation:"unRelated",showMax:2}),e(d,{align:"left",get children(){return e(r,{type:"primary",children:"显示个数"})}}),e(u,{type:"secondary",spacing:"extended",children:"showMax 可以设置最多显示的个数"}),e(n,{get data(){return c.tree_showMax}})]}})}}),e(t,{id:"tree_valueClosable",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(a,{multi:!0,data:i,valueClosable:!0,clearable:!0,checkRelation:"unRelated"}),e(d,{align:"left",get children(){return e(r,{type:"primary",children:"值可关闭"})}}),e(u,{type:"secondary",spacing:"extended",children:"valueClosable 支持 选择的值可以进行关闭"}),e(n,{get data(){return c.tree_valueClosable}})]}})}}),e(t,{id:"tree_mode",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return[P(),e(a,{multi:!0,data:i,clearable:!0,mode:"Leaf"}),I(),e(a,{multi:!0,data:i,clearable:!0,mode:"Shallow"}),$(),e(a,{multi:!0,data:i,clearable:!0,mode:"All"})]}}),e(d,{align:"left",get children(){return e(r,{type:"primary",children:"选择模式"})}}),e(u,{type:"secondary",spacing:"extended",children:"mode 支持 All 、 Half、 Leaf、 Shallow 默认为 Half "}),e(n,{get data(){return c.tree_mode}})]}})}}),e(t,{dir:"v",size:24,id:"comp_api",get children(){return[e(o,{type:"primary",heading:3,children:"API"}),e(t,{id:"comp_props",dir:"v",get children(){return[e(o,{type:"primary",heading:4,children:"TreeSelect Props"}),e(m,{columns:v,data:L,border:!0,size:"small"})]}}),e(t,{id:"comp_events",dir:"v",get children(){return[e(o,{type:"primary",heading:4,children:"Events"}),e(m,{columns:E,data:M,border:!0,size:"small"})]}})]}})]}})),g})(),e(_,{data:k})]}export{ie as default};
