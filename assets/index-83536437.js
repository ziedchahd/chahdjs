import{u as m,i as y,a as e,S as r,T as a,t as h,Y as k}from"./index-00bf0c33.js";import{m as t,P as u}from"./index-e4583d54.js";import{T as i,C as s,B as n}from"./index-345cd19e.js";import{D as o,a as c,C}from"./code-6666454f.js";import{T as g}from"./index-0092c168.js";import{p as b,e as f}from"./columns-26981c48.js";import{h as F}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const D=`<Space dir='h'>
    <Button type='primary' onClick={() => {
        message.info('提示信息')
    }}>消息</Button>
    <Button type='primary' onClick={() => {
        message.success('登录成功')
    }}>成功</Button>
    <Button type='primary' onClick={() => {
        message.error('添加错误')
    }}>错误</Button>
    <Button type='primary' onClick={() => {
        message.warning('需要数字类型')
    }}>警告</Button>
</Space>`,B=`<Space dir='h'>
    <Button type='primary' onClick={() => {
        message.info({
            content: '提示信息',
            background: true
        })
    }}>消息</Button>
    <Button type='primary' onClick={() => {
        message.success({
            content: '登录成功',
            background: true
        })
    }}>成功</Button>
    <Button type='primary' onClick={() => {
        message.error({
            content: '添加错误',
            background: true,
        })
    }}>错误</Button>
    <Button type='primary' onClick={() => {
        message.warning({
            content: '需要数字类型',
            background: true,
        })
    }}>警告</Button>
</Space>`,_=`<Space dir='h'>
    <Button type='primary' onClick={() => {
        message.info({
            content: '可关闭message',
            background: true,
            closeable: true,
            duration: 0
        })
    }}>可关闭</Button>
</Space>`,E=`<Space dir='h'>
    <Button type='primary' onClick={() => {
        const key = createUniqueId();
        message.info({
            key,
            content: 'Loading...',
            background: true,
            loading: true,
            duration: 0
        })

        setTimeout(() => {
            message.close(key);
        }, 4000)
    }}>加载</Button>
</Space>`,v=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"key",desc:"消息的标识，调用close可根据key进行关闭",type:"string",default:""},{name:"duration",desc:"显示时间，为0时不销毁",type:"number",default:"4"},{name:"type",desc:"类型 info|success|warning|error",type:"string",default:"info"},{name:"class",desc:"class类",type:"string",default:""},{name:"content",desc:"内容",type:"JSXElement",default:""},{name:"closeable",desc:"可显示关闭按钮",type:"boolean",default:""},{name:"background",desc:"显示背景色",type:"any",default:""},{name:"loading",desc:"加载中",type:"boolean",default:""},{name:"onClose",desc:"关闭回调函数",type:"Function",default:""}],x=[{name:"onClose",desc:"关闭回调函数",params:""}],A=[{id:"message_base",text:"基础用法"},{id:"message_background",text:"背景色"},{id:"message_close",text:"可关闭"},{id:"message_loading",text:"加载中"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],d={message_base:D,message_background:B,message_close:_,message_loading:E},S=h('<div class="sys-ctx-main-left">');function L(){return[(()=>{const l=S();return m(F,l,()=>""),y(l,e(r,{dir:"v",size:32,get children(){return[e(i,{heading:2,children:"Message 消息提示"}),e(r,{id:"message_base",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"h",get children(){return[e(n,{type:"primary",onClick:()=>{t.info("提示信息")},children:"消息"}),e(n,{type:"primary",onClick:()=>{t.success("登录成功")},children:"成功"}),e(n,{type:"primary",onClick:()=>{t.error("添加错误")},children:"错误"}),e(n,{type:"primary",onClick:()=>{t.warning("需要数字类型")},children:"警告"})]}}),e(o,{align:"left",get children(){return e(a,{type:"primary",children:"基础用法"})}}),e(u,{type:"secondary",spacing:"extended",children:"基础用法"}),e(c,{get data(){return d.message_base}})]}})}}),e(r,{id:"message_background",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"h",get children(){return[e(n,{type:"primary",onClick:()=>{t.info({content:"提示信息",background:!0})},children:"消息"}),e(n,{type:"primary",onClick:()=>{t.success({content:"登录成功",background:!0})},children:"成功"}),e(n,{type:"primary",onClick:()=>{t.error({content:"添加错误",background:!0})},children:"错误"}),e(n,{type:"primary",onClick:()=>{t.warning({content:"需要数字类型",background:!0})},children:"警告"})]}}),e(o,{align:"left",get children(){return e(a,{type:"primary",children:"背景色"})}}),e(u,{type:"secondary",spacing:"extended",children:"配置参数 background 可以显示背景色"}),e(c,{get data(){return d.message_background}})]}})}}),e(r,{id:"message_close",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"h",get children(){return e(n,{type:"primary",onClick:()=>{t.info({content:"可关闭message",background:!0,closeable:!0,duration:0})},children:"可关闭"})}}),e(o,{align:"left",get children(){return e(a,{type:"primary",children:"可关闭"})}}),e(u,{type:"secondary",spacing:"extended",children:"配置参数 closeable 可关闭消息"}),e(c,{get data(){return d.message_close}})]}})}}),e(r,{id:"message_loading",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(r,{dir:"h",get children(){return e(n,{type:"primary",onClick:()=>{const p=k();t.info({key:p,content:"Loading...",background:!0,loading:!0,duration:0}),setTimeout(()=>{t.close(p)},4e3)},children:"加载"})}}),e(o,{align:"left",get children(){return e(a,{type:"primary",children:"加载中"})}}),e(u,{type:"secondary",spacing:"extended",children:"配置参数 loading 显示加载中的消息， message可通过key关闭消息"}),e(c,{get data(){return d.message_loading}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(i,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(i,{type:"primary",heading:4,children:"Message Props"}),e(g,{columns:b,data:v,border:!0,size:"small"})]}}),e(r,{id:"comp_events",dir:"v",get children(){return[e(i,{type:"primary",heading:4,children:"Events"}),e(g,{columns:f,data:x,border:!0,size:"small"})]}})]}})]}})),l})(),e(C,{data:A})]}export{L as default};
