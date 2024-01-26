import{c as S,u as T,i as _,a as e,S as a,H as h,l as t,I as c,B as E,V as m,T as l,t as p}from"./index-00bf0c33.js";import{A as o}from"./index-e1628934.js";import{T as y,C as x,B as C}from"./index-345cd19e.js";import{T as B}from"./index-83488e34.js";/* empty css             */import{D as V,a as w,C as F}from"./code-6666454f.js";import{P as f}from"./index-e4583d54.js";import{T as z}from"./index-0092c168.js";import{p as v}from"./columns-26981c48.js";import{h as K}from"./hljs-74a5c6d1.js";import"./Collapase-7b5e31c6.js";import"./_commonjsHelpers-725317a4.js";const D=`<HView class="components-layout-demo" size="450px">
    <View size="250px" style={{'text-align': 'initial', 'box-shadow': '2px 0 8px 0 rgba(29, 35, 41, 0.05)'}} class="layout-demo-sider">
        <Accordion onSelect={(name: string, open: boolean, v: any) => {
            console.log(name, open, v);
        }}>
            <Accordion.Item name="a1" title="Title1" icon={<Icon name='dashboard'/>}>content1</Accordion.Item>
            <Accordion.Item name="a2" title={<BothSide>
                <span>Title2</span>
                <Tag size='small' theme='success'>1234</Tag>
            </BothSide>} icon={<Icon name='cog'/>}>
                <p>content2</p>
                <p>content2</p>
                <p>content2</p>
                <p>content2</p>
            </Accordion.Item>
        </Accordion>
    </View>
    <VView style={centerStyle}>
        <View class='layout-demo-header' size="64px" style={centerStyle}></View>
        <View style={centerStyle}></View>
        <View class='layout-demo-header' size="64px" style={centerStyle}></View>
    </VView>
</HView>`,H=`const [activeKey, setActiveKey] = createSignal(['a2']);

<VView size="300px">
    <HView class="components-layout-demo" size="450px">
        <View size="250px" style={{'text-align': 'initial', overflow: 'auto'}} class="layout-demo-sider">
            <Accordion activeKey={[activeKey, setActiveKey]} multi onSelect={(name: string, open: boolean, v: any) => {
                console.log(name, open, v);
            }}>
                <Accordion.Item name="a1" title="Title1" icon={<Icon name='dashboard'/>}>content1</Accordion.Item>
                <Accordion.Item name="a2" title="Title2" icon={<Icon name='cog'/>}>
                    <p>content2</p>
                    <p>content2</p>
                    <p>content2</p>
                    <p>content2</p>
                </Accordion.Item>
                <Accordion.Item name="a3" title="Title3" icon={<Icon name='flag'/>}>
                    <p>content3</p>
                    <p>content3</p>
                    <p>content3</p>
                    <p>content3</p>
                </Accordion.Item>
            </Accordion>
        </View>
        <VView style={centerStyle}>
            <View class='layout-demo-header' size="64px" style={centerStyle}></View>
            <View style={centerStyle}>
                <Button onClick={() => {
                    setActiveKey(['a1']);
                }}>更新</Button>
            </View>
            <View class='layout-demo-header' size="64px" style={centerStyle}></View>
        </VView>
    </HView>
</VView>`,P=`<VView size="300px">
    <HView class="components-layout-demo" size="450px">
        <View size="250px" style={{'text-align': 'initial'}} class="layout-demo-sider">
            <Accordion activeKey='a1' flex onSelect={(name: string, open: boolean, v: any) => {
                console.log(name, open, v);
            }}>
                <Accordion.Item name="a1" title="Title1" icon={<Icon name='dashboard'/>}>content1</Accordion.Item>
                <Accordion.Item name="a2" title="Title2" icon={<Icon name='cog'/>}>
                    <p>content2</p>
                    <p>content2</p>
                    <p>content2</p>
                    <p>content2</p>
                </Accordion.Item>
                <Accordion.Item name="a3" title="Title3" icon={<Icon name='flag'/>}>
                    <p>content3</p>
                    <p>content3</p>
                    <p>content3</p>
                    <p>content3</p>
                </Accordion.Item>
            </Accordion>
        </View>
        <VView style={centerStyle}>
            <View class='layout-demo-header' size="64px" style={centerStyle}></View>
            <View style={centerStyle}></View>
            <View class='layout-demo-header' size="64px" style={centerStyle}></View>
        </VView>
    </HView>
</VView>`,$=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"multi",desc:"可以选择多个面板展开",type:"boolean",default:""},{name:"activeKey",desc:"选中面板，绑定属性",type:"Function[]",default:""},{name:"flex",desc:"flex布局并且占满容器",type:"boolean",default:""},{name:"onSelect",desc:"面板选中事件",type:"Function",default:""}],j=[{name:"name",desc:"面板名称",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"title",desc:"面板标题",type:"any",default:""},{name:"icon",desc:"面板标题图标",type:"JSXElement",default:""}],O=[{id:"accordion_base",text:"基础用法"},{id:"accordion_multi",text:"多选"},{id:"accordion_flex",text:"占满容器"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_item_props",text:"子项属性"}],A={accordion_base:D,accordion_multi:H,accordion_flex:P},n=p("<p>content2"),r=p("<p>content3"),k=p("<br>"),J=p('<div class="sys-ctx-main-left">'),L=p("<span>Title2"),i={"justify-content":"center"};function te(){const[b,I]=S(["a2"]);return[(()=>{const g=J();return T(K,g,()=>""),_(g,e(a,{dir:"v",size:32,get children(){return[e(y,{heading:2,children:"Accordion 手风琴面板"}),e(a,{id:"accordion_base",dir:"v",get children(){return e(x,{bordered:!0,get children(){return[e(h,{class:"components-layout-demo",size:"450px",get children(){return[e(t,{size:"250px",style:{"text-align":"initial","box-shadow":"2px 0 8px 0 rgba(29, 35, 41, 0.05)"},class:"layout-demo-sider",get children(){return e(o,{onSelect:(s,d,u)=>{console.log(s,d,u)},get children(){return[e(o.Item,{name:"a1",title:"Title1",get icon(){return e(c,{name:"dashboard"})},children:"content1"}),e(o.Item,{name:"a2",get title(){return e(E,{get children(){return[L(),e(B,{size:"small",theme:"success",children:"1234"})]}})},get icon(){return e(c,{name:"cog"})},get children(){return[n(),n(),n(),n()]}})]}})}}),e(m,{style:i,get children(){return[e(t,{class:"layout-demo-header",size:"64px",style:i}),e(t,{style:i}),e(t,{class:"layout-demo-header",size:"64px",style:i})]}})]}}),e(V,{align:"left",get children(){return e(l,{type:"primary",children:"基础用法"})}}),e(f,{type:"secondary",spacing:"extended",children:"基础用法"}),e(w,{get data(){return A.accordion_base}})]}})}}),e(a,{id:"accordion_multi",dir:"v",get children(){return e(x,{bordered:!0,get children(){return[e(m,{size:"300px",get children(){return e(h,{class:"components-layout-demo",size:"450px",get children(){return[e(t,{size:"250px",style:{"text-align":"initial",overflow:"auto"},class:"layout-demo-sider",get children(){return e(o,{activeKey:[b,I],multi:!0,onSelect:(s,d,u)=>{console.log(s,d,u)},get children(){return[e(o.Item,{name:"a1",title:"Title1",get icon(){return e(c,{name:"dashboard"})},children:"content1"}),e(o.Item,{name:"a2",title:"Title2",get icon(){return e(c,{name:"cog"})},get children(){return[n(),n(),n(),n()]}}),e(o.Item,{name:"a3",title:"Title3",get icon(){return e(c,{name:"flag"})},get children(){return[r(),r(),r(),r()]}})]}})}}),e(m,{style:i,get children(){return[e(t,{class:"layout-demo-header",size:"64px",style:i}),e(t,{style:i,get children(){return e(C,{onClick:()=>{I(["a1"])},children:"更新"})}}),e(t,{class:"layout-demo-header",size:"64px",style:i})]}})]}})}}),e(V,{align:"left",get children(){return e(l,{type:"primary",children:"多选"})}}),e(f,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(l,{code:!0,children:"multi"})," 属性可以展开多个面板",k(),e(l,{code:!0,children:"activeKey"})," 属性为可控展开面板属性"]}}),e(w,{get data(){return A.accordion_multi}})]}})}}),e(a,{id:"accordion_flex",dir:"v",get children(){return e(x,{bordered:!0,get children(){return[e(m,{size:"300px",get children(){return e(h,{class:"components-layout-demo",size:"450px",get children(){return[e(t,{size:"250px",style:{"text-align":"initial"},class:"layout-demo-sider",get children(){return e(o,{activeKey:"a1",flex:!0,onSelect:(s,d,u)=>{console.log(s,d,u)},get children(){return[e(o.Item,{name:"a1",title:"Title1",get icon(){return e(c,{name:"dashboard"})},children:"content1"}),e(o.Item,{name:"a2",title:"Title2",get icon(){return e(c,{name:"cog"})},get children(){return[n(),n(),n(),n()]}}),e(o.Item,{name:"a3",title:"Title3",get icon(){return e(c,{name:"flag"})},get children(){return[r(),r(),r(),r()]}})]}})}}),e(m,{style:i,get children(){return[e(t,{class:"layout-demo-header",size:"64px",style:i}),e(t,{style:i}),e(t,{class:"layout-demo-header",size:"64px",style:i})]}})]}})}}),e(V,{align:"left",get children(){return e(l,{type:"primary",children:"占满容器"})}}),e(f,{type:"secondary",spacing:"extended",get children(){return["设置 ",e(l,{code:!0,children:"flex"})," 属性可以将手风琴占满容器"]}}),e(w,{get data(){return A.accordion_flex}})]}})}}),e(a,{dir:"v",size:24,id:"comp_api",get children(){return[e(y,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Accordion Props"}),e(z,{columns:v,data:$,border:!0,size:"small"})]}}),e(a,{id:"comp_item_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Accordion.Item Props"}),e(z,{columns:v,data:j,border:!0,size:"small"})]}})]}})]}})),g})(),e(F,{data:O})]}export{te as default};
