import{u as y,i as S,a as e,S as i,F as s,T as r,t as b}from"./index-00bf0c33.js";import{L as n}from"./index-f1ab0bb8.js";import{A as x}from"./index-31b5d2c6.js";import{T as c,C as o,B as h}from"./index-345cd19e.js";import{i as L}from"./avatar-41ce13e3.js";import{D as l,a as m,C as _}from"./code-6666454f.js";import{P as p}from"./index-e4583d54.js";import{T as f}from"./index-0092c168.js";import{p as g}from"./columns-26981c48.js";import{h as F}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const v=`
const data = [
    {id: '1', desc: '这是一段文本。'},
    {id: '2', desc: '这是一段文本。'},
    {id: '3', desc: '这是一段文本。'}
];

<List border onSelect={(item: any) => {
    console.log(item);
}} head='Header' foot='Footer'>
    <For each={data}>
        {(item) => {
            return <List.Item id={item.id} desc={item.desc} content={item.content} data={item}></List.Item>
        }}
    </For>
</List>`,z=`const data = [
    {id: '1', desc: '这是一段文本。'},
    {id: '2', desc: '这是一段文本。'},
    {id: '3', desc: '这是一段文本。'}
];

<List border size='small' onSelect={(item: any) => {
    console.log(item);
}} head='Header' foot='Footer'>
    <For each={data}>
        {(item) => {
            return <List.Item id={item.id} desc={item.desc} data={item}></List.Item>
        }}
    </For>
</List>`,I=`const data = [
    {id: '1', desc: '这是一段文本。'},
    {id: '2', desc: '这是一段文本。'},
    {id: '3', desc: '这是一段文本。'}
];

<List border head='Header' foot='Footer'>
    <For each={data}>
        {(item) => {
            return <List.Item avatar={<Avatar src={img}/>} 
                id={item.id} title='Title' desc={item.desc} data={item} actions={<Space>
                    <Button type='text' size='small' onClick={() => {console.log(item);
                    }}>Edit</Button>
                    <Button type='text' size='small'>More</Button>
                </Space>}>
                    具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
                    具体内容具体内容具体内容具体内容具体内容具体内容
                    具体内容具体内容具体内容具体内容
                </List.Item>
        }}
    </For>
</List>`,T=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"border",desc:"边框",type:"boolean",default:""},{name:"size",desc:"大小small|large",type:"string",default:""},{name:"head",desc:"头部",type:"string|JSXElement",default:""},{name:"foot",desc:"底部",type:"string|JSXElement",default:""},{name:"render",desc:"内容自定义函数",type:"Function",default:""},{name:"onSelect",desc:"列表项选中事件",type:"Function",default:""}],C=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"id",desc:"id标识",type:" string | number",default:""},{name:"data",desc:"数据项",type:"Object",default:""},{name:"render",desc:"内容自定义函数",type:"Function",default:""},{name:"actions",desc:"操作内容",type:"JSXElement",default:""},{name:"avatar",desc:"头像",type:"Avatar",default:""},{name:"content",desc:"内容",type:"string|JSXElement",default:""},{name:"title",desc:"标题",type:"string|JSXElement",default:""},{name:"desc",desc:"描述",type:"string|JSXElement",default:""}],D=[{id:"list_base",text:"基础用法"},{id:"list_size",text:"列表尺寸"},{id:"list_complex",text:"基础列表"},{id:"comp_api",text:"API"},{id:"comp_props",text:"List属性"},{id:"comp_item_props",text:"List.Item属性"}],u={list_base:v,list_size:z,list_complex:I},E=b('<div class="sys-ctx-main-left">');function N(){const d=[{id:"1",desc:"This is a text."},{id:"2",desc:"This is a text."},{id:"3",desc:"This is a text."}];return[(()=>{const a=E();return y(F,a,()=>""),S(a,e(i,{dir:"v",size:32,get children(){return[e(c,{heading:2,children:"List"}),e(i,{id:"list_base",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(n,{border:!0,onSelect:t=>{console.log(t)},head:"Header",foot:"Footer",get children(){return e(s,{each:d,children:t=>e(n.Item,{get id(){return t.id},get desc(){return t.desc},get content(){return t.content},data:t})})}}),e(l,{align:"left",get children(){return e(r,{type:"primary",children:"Basic usage"})}}),e(p,{type:"secondary",spacing:"extended",get children(){return["Default list, ",e(r,{code:!0,children:"head"})," ",e(r,{code:!0,children:"foot"})," use ",e(r,{code:!0,children:"Slot"})," Name ",e(r,{code:!0,children:"head"}),"、",e(r,{code:!0,children:"foot"})]}}),e(m,{get data(){return u.list_base}})]}})}}),e(i,{id:"list_size",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(n,{border:!0,size:"small",onSelect:t=>{console.log(t)},head:"Header",foot:"Footer",get children(){return e(s,{each:d,children:t=>e(n.Item,{get id(){return t.id},get desc(){return t.desc},data:t})})}}),e(l,{align:"left",get children(){return e(r,{type:"primary",children:"List size"})}}),e(p,{type:"secondary",spacing:"extended",children:"SIZE can be set to Small"}),e(m,{get data(){return u.list_size}})]}})}}),e(i,{id:"list_complex",dir:"v",get children(){return e(o,{bordered:!0,get children(){return[e(n,{border:!0,head:"Header",foot:"Footer",get children(){return e(s,{each:d,children:t=>e(n.Item,{get avatar(){return e(x,{src:L})},get id(){return t.id},title:"Title",get desc(){return t.desc},data:t,get actions(){return e(i,{get children(){return[e(h,{type:"text",size:"small",onClick:()=>{console.log(t)},children:"Edit"}),e(h,{type:"text",size:"small",children:"More"})]}})},children:"Specific content Specific content Specific content Specific content Specific content Specific content Specific content Specific content Detant Specific content Specific content Specific content Specific content Specific content Specific content Specific content Specific content Specific content Specific content"})})}}),e(l,{align:"left",get children(){return e(r,{type:"primary",children:"Basic list"})}}),e(p,{type:"secondary",spacing:"extended",children:"With icon, title, and described basic list. You can also have a list operation group."}),e(m,{get data(){return u.list_complex}})]}})}}),e(i,{dir:"v",size:24,id:"comp_api",get children(){return[e(c,{type:"primary",heading:3,children:"API"}),e(i,{id:"comp_props",dir:"v",get children(){return[e(c,{type:"primary",heading:4,children:"List Props"}),e(f,{columns:g,data:T,border:!0,size:"small"})]}}),e(i,{id:"comp_item_props",dir:"v",get children(){return[e(c,{type:"primary",heading:4,children:"List.Item Props"}),e(f,{columns:g,data:C,border:!0,size:"small"})]}})]}})]}})),a})(),e(_,{data:D})]}export{N as default};
