import{c as b,u as R,i as Z,a as e,S as i,T as t,C as w,E as x,t as I}from"./index-00bf0c33.js";import{T as a}from"./index-4642d62a.js";import{T as y,C as r,B as p}from"./index-345cd19e.js";import{D as l,a as o,C as N}from"./code-6666454f.js";import{P as c}from"./index-e4583d54.js";import{T as j}from"./index-0092c168.js";import{p as k,e as O}from"./columns-26981c48.js";import{h as E}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const H=`const data1 = [
    {id: 'beijing', title: 'Beijing', children: [
        {id: 'gugong', title: 'Forbidden City'},
        {id: 'tiantan', title: 'Altar'},
    ]},
    {id: 'zhejiang', title: 'Zhejiang', children: [
        {id: 'xihu', title: 'West Lake'},
        {id: 'linyin', title: 'Spiritual hidden'},
    ]},
]

<Tree data={data1}/>`,J=`const data2 = [
    {id: 'beijing', title: 'Beijing', children: [
        {id: 'gugong', title: 'Forbidden City'},
        {id: 'tiantan', title: 'Altar'},
    ]},
    {id: 'zhejiang', title: 'Zhejiang', children: [
        {id: 'xihu', title: 'West Lake'},
        {id: 'linyin', title: 'Spiritual hidden'},
    ]},
]
const [opened, setOpened]: any = createSignal(['zhejiang']);

<Tree data={data2} opened={[opened, setOpened]}/>`,X=`const data3 = [
    {id: 'beijing', title: 'Beijing', children: [
        {id: 'gugong', title: 'Forbidden City'},
        {id: 'tiantan', title: 'Altar'},
    ]},
    {id: 'zhejiang', title: 'Zhejiang', children: [
        {id: 'xihu', title: 'West Lake'},
        {id: 'linyin', title: 'Spiritual hidden'},
    ]},
]

const [opened, setOpened]: any = createSignal(['zhejiang']);
const [selected, setSelected]: any = createSignal('xihu');

<Tree data={data3} opened={[opened, setOpened]} selected={[selected, setSelected]} onSelect={(node: any) => {
    console.log(node);
}}/>`,G=`const data4 = [
    {id: 'beijing', title: 'Beijing', children: [
        {id: 'gugong', title: 'Forbidden City'},
        {id: 'tiantan', title: 'Altar'},
    ]},
    {id: 'zhejiang', title: 'Zhejiang', children: [
        {id: 'xihu', title: 'West Lake'},
        {id: 'linyin', title: 'Spiritual hidden'},
    ]},
]

<Tree data={data4} multi/>`,q=`const data5 = [
    {id: 'beijing', title: 'Beijing', children: [
        {id: 'gugong', title: 'Forbidden City'},
        {id: 'tiantan', title: 'Altar'},
    ]},
    {id: 'zhejiang', title: 'Zhejiang', children: [
        {id: 'xihu', title: 'West Lake'},
        {id: 'linyin', title: 's'},
    ]},
]

<Tree data={data5} multi checkRelation='unRelated'/>`,K=`const data6 = [
    {id: 'beijing', title: 'Beijing', children: [
        {id: 'gugong', title: 'Forbidden City', disabled: true},
        {id: 'tiantan', title: 'Altar'},
    ]},
    {id: 'zhejiang', title: 'Zhejiang', children: [
        {id: 'xihu', title: 'West Lake'},
        {id: 'linyin', title: 'Spiritual hidden'},
    ]},
]
<Tree data={data6} multi />`,Q=`const data7 = [
    {id: 'beijing', title: 'Beijing', children: [
        {id: 'gugong', title: 'Forbidden City'},
        {id: 'tiantan', title: 'Altar'},
    ]},
    {id: 'zhejiang', title: 'Zhejiang', children: [
        {id: 'xihu', title: 'West Lake'},
        {id: 'linyin', title: 'Spiritual hidden'},
    ]},
]

<Tree data={data7} multi directory />`,U=`const data8 = [];
for (let i = 0; i < 1 + Math.random() * 5; i++) {
    data8.push({title: \`node_\${i}\`, id: \`\${i}\`, loading: true});
}

<Tree data={data8} multi directory loadData={(data: any) => {
    return new Promise((resolve) => {
        const d: any = [];
        for (let i = 0; i < 1 + Math.random() * 5; i++) {
            d.push({title: \`node_\${data.id}_\${i}\`, id: \`\${data.id}_\${i}\`});
        }
        setTimeout(() => {
            resolve(d);
        }, 1000);
    });
}}/>`,V=`const data9 = [
    {id: 'beijing', title: 'Beijing', children: [
        {id: 'gugong', title: 'Forbidden City'},
        {id: 'tiantan', title: 'Altar'},
    ]},
    {id: 'zhejiang', title: 'Zhejiang', children: [
        {id: 'xihu', title: 'West Lake'},
        {id: 'linyin', title: 'Spiritual hidden'},
    ]},
]

<Tree data={data9} multi directory onContextMenu={(data: any) => {
    console.log(data);
}} contextMenu={<DropdownMenu>
    <DropdownItem name='add'>Add to</DropdownItem>
    <DropdownItem name='modity'>Revise</DropdownItem>
</DropdownMenu>} onSelectMenu={(name: string) => {
    console.log(name);
}}/>`,Y=`let tree: any;
const data10 = [
    {id: 'beijing', title: 'Beijing', children: [
        {id: 'gugong', title: 'Forbidden City'},
        {id: 'tiantan', title: 'Altar'},
    ]},
    {id: 'zhejiang', title: 'Zhejiang', children: [
        {id: 'xihu', title: 'West Lake'},
        {id: 'linyin', title: 'Spiritual hidden'},
    ]},
]

<Tree data={data10} multi directory ref={tree}/>
                        
<Space dir="v">
    <Space dir="h">
        <Button onClick={() => {
            tree.checkNode('xihu', true);
        }}>勾选</Button>
    </Space>
    <Space>
        <Button type='primary' onClick={() => {
            console.log(tree.getAllChecked());
        }}>AllChecked</Button>
        <Button type='primary' onClick={() => {
            console.log(tree.getHalfChecked());
        }}>HalfChecked</Button>
        <Button type='primary' onClick={() => {
            console.log(tree.getChildChecked());
        }}>ChildChecked</Button>
        <Button type='primary' onClick={() => {
            console.log(tree.getShallowChecked());
        }}>Shallow</Button>
    </Space>
</Space>`,ee="const [data11, setData11]: any = createSignal([{id: '1', title: 'dynamic data'}]);\n\n<Tree data={data11()} multi directory/>\n<Button type='primary' onClick={() => {\n    const da = [];\n    for (let i = 0; i < 1 + Math.random() * 5; i++) {\n        let c = [];\n        for (let j = 0; j < 1 + Math.random() * 5; j++) {\n            c.push({title: `node_${i}_${j}`, id: `${i}_${j}`});\n        }\n        da.push({title: `node_${i}`, id: `${i}`, children: c});\n    }\n    setData11(da)\n}}>Change the data</Button>",te=[{name:"style",desc:"Custom style",type:"Object",default:""},{name:"classList",desc:"Custom Class",type:"Object",default:""},{name:"class",desc:"Custom Class",type:"string",default:""},{name:"data",desc:"source data",type:"Array",default:""},{name:"opened",desc:"Controlled open node ID",type:"Function[]",default:""},{name:"selected",desc:"Controlled selection node ID",type:"Function[]",default:""},{name:"ref",desc:"Component reference object",type:"Object",default:""},{name:"gutter",desc:"Dislocation distance",type:"number",default:"24"},{name:"value",desc:"Controlled value",type:"Function[]",default:""},{name:"multi",desc:"Multi -choice, display check box",type:"boolean",default:""},{name:"directory",desc:"Display directory icon",type:"boolean",default:""},{name:"loadData",desc:"With the data item loading",type:"Function",default:""},{name:"contextMenu",desc:"Right -click menu with DropdownMenu for use",type:"JSXElement",default:""},{name:"checkRelation",desc:"Choose the Grade Relationship related|unRelated ",type:"string",default:"related"},{name:"onSelect",desc:"Node selection event",type:"Function",default:""},{name:"onChange",desc:"Selection of the check box",type:"Function",default:""},{name:"onContextMenu",desc:"Right -click menu event",type:"Function",default:""},{name:"onSelectMenu",desc:"Right -click menu selection event",type:"Function",default:""}],ie=[{name:"id",desc:"Data item identification field",type:"string|number",default:""},{name:"title",desc:"Node name",type:"string",default:""},{name:"loading",desc:"Dynamic load node",type:"boolean",default:""},{name:"icon",desc:"Custom icon",type:"any",default:""},{name:"disabled",desc:"Node disable",type:"boolean",default:""},{name:"patch",desc:"Additional data",type:"JSXElement",default:""}],ne=[{name:"onSelect",desc:"Node selection event",params:"node"},{name:"onChange",desc:"Selection of the check box",params:"value"},{name:"onContextMenu",desc:"Right -click menu event",params:"node"},{name:"onSelectMenu",desc:"Right -click menu selection event",params:"name"}],de=[{id:"tree_base",text:"Basic usage"},{id:"tree_opened",text:"Default"},{id:"tree_selected",text:"Default"},{id:"tree_multi",text:"Multi -choice"},{id:"tree_multi_unrelate",text:"Non -level joint multiple"},{id:"tree_disabled",text:"Disable"},{id:"tree_directory",text:"Directory icon"},{id:"tree_loadData",text:"Dynamic load"},{id:"tree_contextmenu",text:"Right -click menu"},{id:"tree_methods",text:"Instance interface"},{id:"tree_data",text:"Controlled data"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Attributes"},{id:"comp_dataprops",text:"Data item"},{id:"comp_events",text:"event"}],u={tree_base:H,tree_opened:J,tree_selected:X,tree_multi:G,tree_multi_unrelate:q,tree_disabled:K,tree_directory:Q,tree_loadData:U,tree_contextmenu:V,tree_methods:Y,tree_data:ee},ae=I('<div class="sys-ctx-main-left">');function me(){const[f,C]=b(["zhejiang"]),[D,S]=b("xihu");b([]);const[v,B]=b([{id:"1",title:"dynamic data"}]);let g;const A=[{id:"beijing",title:"Beijing",children:[{id:"gugong",title:"Forbidden City"},{id:"tiantan",title:"Altar"}]},{id:"zhejiang",title:"Zhejiang",children:[{id:"xihu",title:"West Lake"},{id:"linyin",title:"Spiritual hidden"}]}],M=[{id:"beijing",title:"Beijing",children:[{id:"gugong",title:"Forbidden City"},{id:"tiantan",title:"Altar"}]},{id:"zhejiang",title:"Zhejiang",children:[{id:"xihu",title:"West Lake"},{id:"linyin",title:"Spiritual hidden"}]}],z=[{id:"beijing",title:"Beijing",children:[{id:"gugong",title:"Forbidden City"},{id:"tiantan",title:"Altar"}]},{id:"zhejiang",title:"Zhejiang",children:[{id:"xihu",title:"West Lake"},{id:"linyin",title:"Spiritual hidden"}]}],F=[{id:"beijing",title:"北京",children:[{id:"gugong",title:"Forbidden City"},{id:"tiantan",title:"Altar"}]},{id:"zhejiang",title:"Zhejiang",children:[{id:"xihu",title:"West Lake"},{id:"linyin",title:"Spiritual hidden"}]}],$=[{id:"beijing",title:"Beijing",children:[{id:"gugong",title:"Forbidden City"},{id:"tiantan",title:"Altar"}]},{id:"zhejiang",title:"Zhejiang",children:[{id:"xihu",title:"West Lake"},{id:"linyin",title:"Spiritual hidden"}]}],T=[{id:"beijing",title:"Beijing",children:[{id:"gugong",title:"Forbidden City",disabled:!0},{id:"tiantan",title:"Altar"}]},{id:"zhejiang",title:"Zhejiang",children:[{id:"xihu",title:"West Lake"},{id:"linyin",title:"Spiritual hidden"}]}],L=[{id:"beijing",title:"北京",children:[{id:"gugong",title:"Forbidden City"},{id:"tiantan",title:"Altar"}]},{id:"zhejiang",title:"Zhejiang",children:[{id:"xihu",title:"West Lake"},{id:"linyin",title:"Spiritual hidden"}]}],_=[];for(let h=0;h<1+Math.random()*5;h++)_.push({title:`node_${h}`,id:`${h}`,loading:!0});const P=[{id:"beijing",title:"Beijing",children:[{id:"gugong",title:"Forbidden City"},{id:"tiantan",title:"Altar"}]},{id:"zhejiang",title:"Zhejiang",children:[{id:"xihu",title:"West Lake"},{id:"linyin",title:"Spiritual hidden"}]}],W=[{id:"beijing",title:"Beijing",children:[{id:"gugong",title:"Forbidden City"},{id:"tiantan",title:"Altar"}]},{id:"zhejiang",title:"Zhejiang",children:[{id:"xihu",title:"West Lake"},{id:"linyin",title:"Spiritual hidden"}]}];return[(()=>{const h=ae();return R(E,h,()=>""),Z(h,e(i,{dir:"v",size:32,get children(){return[e(y,{heading:2,children:"Tree control"}),e(i,{id:"tree_base",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(a,{data:A}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"Basic usage"})}}),e(c,{type:"secondary",spacing:"extended",children:"Tree Passing into data data display tree components"}),e(o,{get data(){return u.tree_base}})]}})}}),e(i,{id:"tree_opened",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(a,{data:M,opened:[f,C]}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"Default"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return[e(t,{code:!0,children:"opened"})," Parameter control the default opening node"]}}),e(o,{get data(){return u.tree_opened}})]}})}}),e(i,{id:"tree_selected",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(a,{data:z,opened:[f,C],selected:[D,S],onSelect:n=>{console.log(n)}}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"Default"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return[e(t,{code:!0,children:"selected"})," Parameter control selected nodes"]}}),e(o,{get data(){return u.tree_selected}})]}})}}),e(i,{id:"tree_multi",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(a,{data:F,multi:!0}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"Multi -choice"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["set up",e(t,{code:!0,children:"multi"}),"Parameters can be selected multiple, default -level couplet"]}}),e(o,{get data(){return u.tree_multi}})]}})}}),e(i,{id:"tree_multi_unrelate",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(a,{data:$,multi:!0,checkRelation:"unRelated"}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"Non -level joint multiple"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return[e(t,{code:!0,children:"checkRelation"})," Parameters can set up the level of class alliances in multiple selected scenes,",e(t,{code:!0,children:"unRelated"}),"Non -level ",e(t,{code:!0,children:"related"})," cascade"]}}),e(o,{get data(){return u.tree_multi_unrelate}})]}})}}),e(i,{id:"tree_disabled",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(a,{data:T,multi:!0}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"Disable"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["Data item add ",e(t,{code:!0,children:"disabled"})," Parameters can disable nodes"]}}),e(o,{get data(){return u.tree_disabled}})]}})}}),e(i,{id:"tree_directory",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(a,{data:L,multi:!0,directory:!0}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"Directory icon"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["Add to",e(t,{code:!0,children:"directory"})," Parameters can display directory icons"]}}),e(o,{get data(){return u.tree_directory}})]}})}}),e(i,{id:"tree_loadData",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(a,{data:_,multi:!0,directory:!0,loadData:n=>new Promise(d=>{const m=[];for(let s=0;s<1+Math.random()*5;s++)m.push({title:`node_${n.id}_${s}`,id:`${n.id}_${s}`});setTimeout(()=>{d(m)},1e3)})}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"Dynamic load"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["Data item",e(t,{code:!0,children:"loading"})," Parameter, can pass ",e(t,{code:!0,children:"loadData"})," Method dynamic loading sub -node"]}}),e(o,{get data(){return u.tree_loadData}})]}})}}),e(i,{id:"tree_contextmenu",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(a,{data:P,multi:!0,directory:!0,onContextMenu:n=>{console.log(n)},get contextMenu(){return e(w,{get children(){return[e(x,{name:"add",children:"Add to"}),e(x,{name:"modity",children:"Revise"})]}})},onSelectMenu:n=>{console.log(n)}}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"Right -click menu"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["Data item",e(t,{code:!0,children:"loading"}),"Parameter, can pass ",e(t,{code:!0,children:"loadData"})," Method dynamic loading sub -node"]}}),e(o,{get data(){return u.tree_contextmenu}})]}})}}),e(i,{id:"tree_methods",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(a,{data:W,multi:!0,directory:!0,ref(n){const d=g;typeof d=="function"?d(n):g=n}}),e(i,{dir:"v",get children(){return[e(i,{dir:"h",get children(){return e(p,{onClick:()=>{g.checkNode("xihu",!0)},children:"Check"})}}),e(i,{get children(){return[e(p,{type:"primary",onClick:()=>{console.log(g.getAllChecked())},children:"AllChecked"}),e(p,{type:"primary",onClick:()=>{console.log(g.getHalfChecked())},children:"HalfChecked"}),e(p,{type:"primary",onClick:()=>{console.log(g.getChildChecked())},children:"ChildChecked"}),e(p,{type:"primary",onClick:()=>{console.log(g.getShallowChecked())},children:"Shallow"})]}})]}}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"interface"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["Data item",e(t,{code:!0,children:"loading"})," Parameter, can pass ",e(t,{code:!0,children:"loadData"})," Method dynamic loading sub -node"]}}),e(o,{get data(){return u.tree_methods}})]}})}}),e(i,{id:"tree_data",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(a,{get data(){return v()},multi:!0,directory:!0}),e(p,{type:"primary",onClick:()=>{const n=[];for(let d=0;d<1+Math.random()*5;d++){let m=[];for(let s=0;s<1+Math.random()*5;s++)m.push({title:`node_${d}_${s}`,id:`${d}_${s}`});n.push({title:`node_${d}`,id:`${d}`,children:m})}B(n)},children:"Change the data"}),e(l,{align:"left",get children(){return e(t,{type:"primary",children:"Controlled data"})}}),e(c,{type:"secondary",spacing:"extended",get children(){return["Data item",e(t,{code:!0,children:"loading"})," Parameter, can pass ",e(t,{code:!0,children:"loadData"})," Method dynamic loading sub -node"]}}),e(o,{get data(){return u.tree_data}})]}})}}),e(i,{dir:"v",size:24,id:"comp_api",get children(){return[e(y,{type:"primary",heading:3,children:"API"}),e(i,{id:"comp_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Tree Props"}),e(j,{columns:k,data:te,border:!0,size:"small"})]}}),e(i,{id:"comp_dataprops",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Data item"}),e(j,{columns:k,data:ie,border:!0,size:"small"})]}}),e(i,{id:"comp_events",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Events"}),e(j,{columns:O,data:ne,border:!0,size:"small"})]}})]}})]}})),h})(),e(N,{data:de})]}export{me as default};
