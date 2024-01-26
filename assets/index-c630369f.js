import{J as k,v as $,b as D,g as S,t as E,u as F,h as z,s as P,j as T,c as U,i as j,a as e,S as n,T as f}from"./index-00bf0c33.js";import{T as p,C,B as d}from"./index-345cd19e.js";import{h as I}from"./hljs-74a5c6d1.js";import{D as g,a as y,C as R}from"./code-6666454f.js";import{i as V}from"./countUp.min-350bca8d.js";import{I as L}from"./index-6735e77f.js";import{P as h}from"./index-e4583d54.js";import{T as w}from"./index-0092c168.js";import{p as G}from"./columns-26981c48.js";import"./_commonjsHelpers-725317a4.js";import"./index-39a7fc71.js";import"./createField-b596c149.js";import"./index-cff0105e.js";import"./input-14b161dc.js";import"./index-469010fe.js";import"./index-f515a01c.js";import"./index-26110a98.js";import"./Item-a37b8cba.js";import"./Recommend-04f5af18.js";import"./Value-1107dbb2.js";import"./index-5ebde19f.js";import"./index-83488e34.js";import"./dayjs.min-ea173184.js";import"./index-b5d4e03a.js";import"./Collapase-7b5e31c6.js";import"./Option-c7b11dbe.js";import"./index-e167ef83.js";import"./index-73979b49.js";import"./index-112bc2d3.js";import"./index-2c1e88fa.js";import"./index-4642d62a.js";const O=E("<span>");function v(t){const o=t.start??0;let s,u;k(()=>{u=new V(s,t.value,{startVal:o,duration:t.duration??2,decimalPlaces:t.decimal??0,useGrouping:t.useGrouping??!0,useEasing:t.useEasing??!0,separator:t.separator??",",formattingFn:t.formattingFn,prefix:t.prefix??"",suffix:t.suffix??"",onCompleteCallback:c}),u.error?console.error(u.error):r()}),$(()=>{u=null});const c=()=>{t.onEnd&&t.onEnd()},r=()=>{u&&u.start()},a=i=>{u&&u.update(i)},_=()=>{u&&u.pauseResume()};D(()=>{a(t.value)}),t.ref&&t.ref({reset:()=>{u&&u.reset()},update:a,start:r,pauseResume:_});const x=()=>T(t,"cm-count-up");return(()=>{const i=O(),m=s;return typeof m=="function"?F(m,i):s=i,S(l=>{const b=x(),A=t.style;return l._v$=z(i,b,l._v$),l._v$2=P(i,A,l._v$2),l},{_v$:void 0,_v$2:void 0}),i})()}const J=`let countup: any;
const [value, setValue] = createSignal(2000);

<Space dir="v">
    <CountUp value={2000} style={{"font-size": "32px"}} ref={countup} duration={6}/>
    <Space dir="h">
        <Button onClick={() => {
            countup.pauseResume();
        }}>暂停/继续</Button>
        <Button onClick={() => {
            countup.reset();
        }}>重置</Button>
        <Button onClick={() => {
            countup.start();
        }}>开始</Button>
        <Button onClick={() => {
            countup.update(value());
        }}>更新至：</Button>
        <Input style={{width: '100px'}} value={[value, setValue]}/>
    </Space>
</Space>`,M=`let countup: any;
<CountUp value={2000} style={{"font-size": "32px"}} ref={countup2} duration={4} decimal={2}/>
<Space dir="h">
    <Button onClick={() => {
        countup.reset();
        countup.start();
    }}>重新开始</Button>
</Space>
`,q=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"value",desc:"目标值",type:"number",default:""},{name:"start",desc:"起始值",type:"number",default:"0"},{name:"duration",desc:"持续时间单位秒",type:"number",default:"2"},{name:"decimal",desc:"小数点小数位数",type:"number",default:""},{name:"useGrouping",desc:"使用组",type:"boolean",default:"true"},{name:"useEasing",desc:"ease 动画",type:"boolean",default:"true"},{name:"separator",desc:"分隔符",type:"string",default:","},{name:"formattingFn",desc:"自定义格式函数",type:"Function",default:""},{name:"prefix",desc:"前缀",type:"string",default:""},{name:"suffix",desc:"后缀",type:"string",default:""},{name:"onEnd",desc:"结束回调",type:"Function",default:""}],H=[{id:"countup_base",text:"基础用法"},{id:"countup_decimal",text:"小数"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"}],B={countup_base:J,countup_decimal:M},K=E('<div class="sys-ctx-main-left">');function be(){let t,o;const[s,u]=U(2e3);return[(()=>{const c=K();return F(I,c,()=>""),j(c,e(n,{dir:"v",size:32,get children(){return[e(p,{heading:2,children:"CountUp 数字动画"}),e(n,{id:"countup_base",dir:"v",get children(){return e(C,{bordered:!0,get children(){return[e(n,{dir:"v",get children(){return[e(v,{value:2e3,style:{"font-size":"32px"},ref(r){const a=t;typeof a=="function"?a(r):t=r},duration:6}),e(n,{dir:"h",get children(){return[e(d,{onClick:()=>{t.pauseResume()},children:"暂停/继续"}),e(d,{onClick:()=>{t.reset()},children:"重置"}),e(d,{onClick:()=>{t.start()},children:"开始"}),e(d,{onClick:()=>{t.update(s())},children:"更新至："}),e(L,{style:{width:"100px"},value:[s,u]})]}})]}}),e(g,{align:"left",get children(){return e(f,{type:"primary",children:"基础用法"})}}),e(h,{type:"secondary",spacing:"extended",children:"该组件基于 countup.js 封装，可以自由控制数字动画过程。"}),e(y,{get data(){return B.countup_base}})]}})}}),e(n,{id:"countup_decimal",dir:"v",get children(){return e(C,{bordered:!0,get children(){return[e(n,{dir:"v",get children(){return[e(v,{value:2e3,style:{"font-size":"32px"},ref(r){const a=o;typeof a=="function"?a(r):o=r},duration:4,decimal:2}),e(n,{dir:"h",get children(){return e(d,{onClick:()=>{o.reset(),o.start()},children:"重新开始"})}})]}}),e(g,{align:"left",get children(){return e(f,{type:"primary",children:"小数"})}}),e(h,{type:"secondary",spacing:"extended",children:"设置属性 decimal 指定小数位数。"}),e(y,{get data(){return B.countup_decimal}})]}})}}),e(n,{dir:"v",size:24,id:"comp_api",get children(){return[e(p,{type:"primary",heading:3,children:"API"}),e(n,{id:"comp_props",dir:"v",get children(){return[e(p,{type:"primary",heading:4,children:"CountUp Props"}),e(w,{columns:G,data:q,border:!0,size:"small"})]}})]}})]}})),c})(),e(R,{data:H})]}export{be as default};
