import{u as h,i as m,a as e,S as n,T as t,t as g}from"./index-00bf0c33.js";import{n as o}from"./index-90d50c9d.js";import{T as r,C as u,B as i}from"./index-345cd19e.js";import{D as d,a as l,C as f}from"./code-6666454f.js";import{P as a}from"./index-e4583d54.js";import{T as p}from"./index-0092c168.js";import{p as y,e as C}from"./columns-26981c48.js";import{h as k}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const B=`<Space dir="h">
    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
        });
    }}>消息</Button>
</Space>`,E=`<Space dir="h">
    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
        });
    }}>消息</Button>
    <Button type='success' onClick={() => {
        notice.success({
            title: '提示',
            content: '成功信息',
        });
    }}>成功</Button>
    <Button type='warning' onClick={() => {
        notice.warning({
            title: '告警',
            content: '告警事件2023年3月24日11:40:29',
        });
    }}>告警</Button>
    <Button type='error' onClick={() => {
        notice.error({
            title: '错误',
            content: '事件提交失败',
        });
    }}>错误</Button>
    <Button type='default' onClick={() => {
        notice.help({
            title: '帮助',
            content: 'ls 命令',
        });
    }}>帮助</Button>
</Space>`,F=`<Space dir="h">
    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
            dock: 'bottomRight'
        });
    }}>右下角</Button>

    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
            dock: 'topLeft'
        });
    }}>左上角</Button>

    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
            dock: 'bottomLeft'
        });
    }}>左下角</Button>
</Space>`,D=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"key",desc:"消息的标识，调用close可根据key进行关闭",type:"string",default:""},{name:"duration",desc:"显示时间，为0时不销毁",type:"number",default:"4"},{name:"dock",desc:"通知弹出的位置 topRight|topLeft|bottomLeft|bottomRight",type:"string",default:"topRight"},{name:"content",desc:"内容",type:"JSXElement",default:""},{name:"title",desc:"标题",type:"string|JSXElement",default:""},{name:"icon",desc:"图标",type:"JSXElement",default:""},{name:"theme",desc:"主题 success|warning|error|info",type:"any",default:""},{name:"btn",desc:"按钮",type:"JSXElement",default:""},{name:"onClose",desc:"关闭回调函数",type:"Function",default:""}],b=[{name:"onClose",desc:"关闭回调函数",params:""}],_=[{id:"notice_base",text:"基础用法"},{id:"notice_type",text:"类型"},{id:"notice_dock",text:"位置"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_events",text:"事件"}],s={notice_base:B,notice_type:E,notice_dock:F},A=g('<div class="sys-ctx-main-left">');function J(){return[(()=>{const c=A();return h(k,c,()=>""),m(c,e(n,{dir:"v",size:32,get children(){return[e(r,{heading:2,children:"Notice 通知"}),e(n,{id:"notice_base",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(n,{dir:"h",get children(){return e(i,{onClick:()=>{o.info({title:"提示",content:"提示内容"})},children:"消息"})}}),e(d,{align:"left",get children(){return e(t,{type:"primary",children:"基础用法"})}}),e(a,{type:"secondary",spacing:"extended",children:"基础用法，notice 为全局对象"}),e(l,{get data(){return s.notice_base}})]}})}}),e(n,{id:"notice_type",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(n,{dir:"h",get children(){return[e(i,{onClick:()=>{o.info({title:"提示",content:"提示内容"})},children:"消息"}),e(i,{type:"success",onClick:()=>{o.success({title:"提示",content:"成功信息"})},children:"成功"}),e(i,{type:"warning",onClick:()=>{o.warning({title:"告警",content:"告警事件2023年3月24日11:40:29"})},children:"告警"}),e(i,{type:"error",onClick:()=>{o.error({title:"错误",content:"事件提交失败"})},children:"错误"}),e(i,{type:"default",onClick:()=>{o.help({title:"帮助",content:"ls 命令"})},children:"帮助"})]}}),e(d,{align:"left",get children(){return e(t,{type:"primary",children:"不同类型的通知"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return["notice 不同的通知 可以使用不通的方法触发，包含 ",e(t,{code:!0,children:"info"}),"、",e(t,{code:!0,children:"success"}),e(t,{code:!0,children:"warning"}),"、",e(t,{code:!0,children:"error"}),"、",e(t,{code:!0,children:"help"})]}}),e(l,{get data(){return s.notice_type}})]}})}}),e(n,{id:"notice_dock",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(n,{dir:"h",get children(){return[e(i,{onClick:()=>{o.info({title:"提示",content:"提示内容",dock:"bottomRight"})},children:"右下角"}),e(i,{onClick:()=>{o.info({title:"提示",content:"提示内容",dock:"topLeft"})},children:"左上角"}),e(i,{onClick:()=>{o.info({title:"提示",content:"提示内容",dock:"bottomLeft"})},children:"左下角"})]}}),e(d,{align:"left",get children(){return e(t,{type:"primary",children:"位置"})}}),e(a,{type:"secondary",spacing:"extended",get children(){return["dock 属性定义通知出现的位置， 支持 ",e(t,{code:!0,children:"topRight(默认)"})," ",e(t,{code:!0,children:"bottomRight"}),e(t,{code:!0,children:"topLeft"})," ",e(t,{code:!0,children:"bottomLeft"})]}}),e(l,{get data(){return s.notice_dock}})]}})}}),e(n,{dir:"v",size:24,id:"comp_api",get children(){return[e(r,{type:"primary",heading:3,children:"API"}),e(n,{id:"comp_props",dir:"v",get children(){return[e(r,{type:"primary",heading:4,children:"Notice Props"}),e(p,{columns:y,data:D,border:!0,size:"small"})]}}),e(n,{id:"comp_events",dir:"v",get children(){return[e(r,{type:"primary",heading:4,children:"Events"}),e(p,{columns:C,data:b,border:!0,size:"small"})]}})]}})]}})),c})(),e(f,{data:_})]}export{J as default};
