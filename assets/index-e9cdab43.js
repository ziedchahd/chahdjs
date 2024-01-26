import{c as y,u as f,i as T,a as e,S as r,T as s,I as S,t as v}from"./index-00bf0c33.js";import{h as _}from"./hljs-74a5c6d1.js";import{D as n,a as p,C as F}from"./code-6666454f.js";import{p as h}from"./columns-26981c48.js";import{T as c,C as d,B as m}from"./index-345cd19e.js";import{S as t}from"./index-6d1b6fb1.js";import{P as a}from"./index-e4583d54.js";import{T as g}from"./index-0092c168.js";import"./_commonjsHelpers-725317a4.js";const C=`const [current, setCurrent] = createSignal(0);

<Space dir="v">
    <Steps current={current()}>
        <Steps.Step title='First' description='This is a description.' />
        <Steps.Step title='Second' description='This is a description.' />
        <Steps.Step title='Third' description='This is a description.' />
    </Steps>
    <Space dir="h">
        <Button type="primary" onClick={() => {
            setCurrent(current() - 1);
        }}>Prev</Button>
        <Button type="primary" onClick={() => {
            setCurrent(current() + 1);
        }}>Next</Button>
    </Space>
</Space>`,B=`<Space dir="v">
    <Steps current={current()} size="small">
        <Steps.Step title='First' description='This is a description.' />
        <Steps.Step title='Second' description='This is a description.' />
        <Steps.Step title='Third' description='This is a description.' />
    </Steps>
</Space>`,b=`<Space dir="v">
    <Steps current={current()} dir="v">
        <Steps.Step title='First' description='This is a description.' />
        <Steps.Step title='Second' description='This is a description.' />
        <Steps.Step title='Third' description='This is a description.' />
    </Steps>
</Space>`,x=`<Space dir="v">
    <Steps current={current()}>
        <Steps.Step title='已完成'/>
        <Steps.Step title='进行中' status='process' icon={<Icon name='cog' size={26}/>}/>
        <Steps.Step title='错误' status="error"/>
        <Steps.Step title='告警' status="warning"/>
        <Steps.Step title='等待' status="wait" icon={<Icon name='lock' size={26}/>}/>
    </Steps>
</Space>
`,A=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"size",desc:"分页尺寸 small",type:"string",default:""},{name:"current",desc:"当前步骤",type:"number",default:"0"},{name:"dir",desc:"方向 v|h",type:"string",default:"h"}],D=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"title",desc:"标题",type:"JSXElement|string",default:""},{name:"description",desc:"步骤描述",type:"JSXElement|string",default:""},{name:"icon",desc:"自定义图标",type:"JSXElement",default:""},{name:"status",desc:"finished|process|error|warning|wait",type:"string",default:""}],z=[{id:"steps_base",text:"基础用法"},{id:"steps_mini",text:"迷你型"},{id:"steps_v",text:"垂直步骤"},{id:"steps_icon",text:"状态和图标"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_itemprops",text:"Step属性"}],u={steps_base:C,steps_mini:B,steps_v:b,steps_icon:x},w=v('<div class="sys-ctx-main-left">');function N(){const[i,l]=y(0);return[(()=>{const o=w();return f(_,o,()=>""),T(o,e(r,{dir:"v",size:32,get children(){return[e(c,{heading:2,children:"Steps 步骤"}),e(r,{id:"steps_base",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return[e(t,{get current(){return i()},get children(){return[e(t.Step,{title:"First",description:"This is a description."}),e(t.Step,{title:"Second",description:"This is a description."}),e(t.Step,{title:"Third",description:"This is a description."})]}}),e(r,{dir:"h",get children(){return[e(m,{type:"primary",onClick:()=>{l(i()-1)},children:"Prev"}),e(m,{type:"primary",onClick:()=>{l(i()+1)},children:"Next"})]}})]}}),e(n,{align:"left",get children(){return e(s,{type:"primary",children:"基础用法"})}}),e(a,{type:"secondary",spacing:"extended",children:"基础用法"}),e(p,{get data(){return u.steps_base}})]}})}}),e(r,{id:"steps_mini",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return e(t,{get current(){return i()},size:"small",get children(){return[e(t.Step,{title:"First",description:"This is a description."}),e(t.Step,{title:"Second",description:"This is a description."}),e(t.Step,{title:"Third",description:"This is a description."})]}})}}),e(n,{align:"left",get children(){return e(s,{type:"primary",children:"迷你型"})}}),e(a,{type:"secondary",spacing:"extended",children:"迷你型"}),e(p,{get data(){return u.steps_mini}})]}})}}),e(r,{id:"steps_v",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return e(t,{get current(){return i()},dir:"v",get children(){return[e(t.Step,{title:"First",description:"This is a description."}),e(t.Step,{title:"Second",description:"This is a description."}),e(t.Step,{title:"Third",description:"This is a description."})]}})}}),e(n,{align:"left",get children(){return e(s,{type:"primary",children:"垂直步骤"})}}),e(a,{type:"secondary",spacing:"extended",children:"dir='v' 垂直步骤"}),e(p,{get data(){return u.steps_v}})]}})}}),e(r,{id:"steps_icon",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return e(t,{get current(){return i()},get children(){return[e(t.Step,{title:"已完成"}),e(t.Step,{title:"进行中",status:"process",get icon(){return e(S,{name:"cog",size:26})}}),e(t.Step,{title:"错误",status:"error"}),e(t.Step,{title:"告警",status:"warning"}),e(t.Step,{title:"等待",status:"wait",get icon(){return e(S,{name:"lock",size:26})}})]}})}}),e(n,{align:"left",get children(){return e(s,{type:"primary",children:"状态和图标"})}}),e(a,{type:"secondary",spacing:"extended",children:"status 支持 finished process error warning wait 其中finished状态、warning和error状态有默认图标"}),e(p,{get data(){return u.steps_icon}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(c,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(c,{type:"primary",heading:4,children:"Steps Props"}),e(g,{columns:h,data:A,border:!0,size:"small"})]}}),e(r,{id:"comp_itemprops",dir:"v",get children(){return[e(c,{type:"primary",heading:4,children:"Step Props"}),e(g,{columns:h,data:D,border:!0,size:"small"})]}})]}})]}})),o})(),e(F,{data:z})]}export{N as default};
