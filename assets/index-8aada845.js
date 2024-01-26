import{u as F,i as n,a as e,S as i,T as d,t as o,g as G,s as E}from"./index-00bf0c33.js";import{R as l,C as t}from"./index-96ab4b8f.js";/* empty css             */import{T as f,C as s}from"./index-345cd19e.js";import{D as g,a,C as I}from"./code-6666454f.js";import{P as h}from"./index-e4583d54.js";import{T as $}from"./index-0092c168.js";import{p as z}from"./columns-26981c48.js";import{h as k}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const H=`
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v' size={5}>
    <Row class='demo-row'>
        <Col class='demo-col'><ColText>100%</ColText></Col>
    </Row>
    <Row class='demo-row light'>
        <Col class='demo-col' grid={0.5}><ColText>50%</ColText></Col>
        <Col class='demo-col light' grid={0.5}><ColText>50%</ColText></Col>
    </Row>
    <Row class='demo-row'>
        <Col class='demo-col' grid={1/3}><ColText>1/3</ColText></Col>
        <Col class='demo-col light' grid={1/3}><ColText>1/3</ColText></Col>
        <Col class='demo-col' grid={1/3}><ColText>1/3</ColText></Col>
    </Row>
    <Row class='demo-row light'>
        <Col class='demo-col' grid={1/4}><ColText>1/4</ColText></Col>
        <Col class='demo-col light' grid={1/4}><ColText>1/4</ColText></Col>
        <Col class='demo-col' grid={1/4}><ColText>1/4</ColText></Col>
        <Col class='demo-col light' grid={1/4}><ColText>1/4</ColText></Col>
    </Row>
    <Row class='demo-row'>
        <Col class='demo-col' grid={2/3}><ColText>2/3</ColText></Col>
        <Col class='demo-col light' grid={1/3}><ColText>1/3</ColText></Col>
    </Row>
</Space>`,U=`
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Row gutter={16} class='example-demo'>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
    <Col grid={1/4}><ColText>1/4</ColText></Col>
</Row>`,W=`
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v'>
    <Row gutter={16} class='example-demo'>
        <Col grid={1/4} offset={1/4}><ColText>1/4 offset 1/4</ColText></Col>
        <Col grid={1/4} offset={1/4}><ColText>1/4 offset 1/4</ColText></Col>
    </Row>

    <Row gutter={16} class='example-demo'>
        <Col grid={0.5} offset={0.25}><ColText>0.5 offset 0.25</ColText></Col>
    </Row>
</Space>`,q=`
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v'>
    <Row class='example-demo'>
        <Col grid={3/4} push={1/4}><ColText>3/4 push-1/4</ColText></Col>
        <Col grid={1/4} pull={3/4}><ColText>1/4 pull-3/4</ColText></Col>
    </Row>
</Space>`,J=`
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v' size={5} style={{'margin-top': '20px'}}>
    <div>start</div>
    <Row justify='start' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <div>end</div>
    <Row justify='end' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <div>center</div>
    <Row justify='center' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <div>space-between</div>
    <Row justify='space-between' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <div>space-around</div>
    <Row justify='space-around' class='example-demo'>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
</Space>`,M=`
function ColText ({children, style}: any) {
    return <div class="col-content" style={{...style, 'justify-content': 'center'}}>{children}</div>;
}

<Space dir='v' size={5} style={{'margin-top': '20px'}}>
    <Row justify='center' align='top' class='example-demo'>
        <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <Row justify='center' align='bottom' class='example-demo'>
        <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
    <Row justify='center' align='middle' class='example-demo'>
        <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
        <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
        <Col grid={1/6}><ColText>1/6</ColText></Col>
    </Row>
</Space>`,V=[{name:"style",desc:"Custom style",type:"Object",default:""},{name:"classList",desc:"Custom Class",type:"Object",default:""},{name:"class",desc:"Custom Class",type:"string",default:""},{name:"justify",desc:"Horizontal way start|center|end|space-between|space-around",type:"string",default:""},{name:"align",desc:"Vertical center top|middle|bottom",type:"string",default:""},{name:"gutter",desc:"interval",type:"number",default:"0"}],K=[{name:"style",desc:"Custom style",type:"Object",default:""},{name:"classList",desc:"Custom Class",type:"Object",default:""},{name:"class",desc:"Custom Class",type:"string",default:""},{name:"grid",desc:"COL temporary use range 0~1",type:"number",default:"1"},{name:"push",desc:"Right to the right",type:"number",default:""},{name:"pull",desc:"Rap the raster to the left move",type:"number",default:""},{name:"offset",desc:"The interval between the left side of the grid, the grid can not be available in the interval",type:"number",default:""},{name:"flex",desc:"flex Layout attribute",type:"string",default:""}],N=[{id:"grid_base",text:"Basic usage"},{id:"grid_gutter",text:"Block interval"},{id:"grid_offset",text:"Left -right offset"},{id:"grid_push",text:"Grid sorting"},{id:"grid_justify",text:"Flex level layout"},{id:"grid_align",text:"Flex vertical alignment"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Row attribute"},{id:"comp_col_props",text:"Color attribute"}],u={grid_base:H,grid_gutter:U,grid_offset:W,grid_push:q,grid_justify:J,grid_align:M},Q=o('<div class="col-content">'),X=o("<ul><li>use <!> Create a line in the horizontal direction</li><li>One group <!>Insert <!> middle</li><li>Every <!> Middle, type your own content</li><li>Set <!> of <!> Parameters, specify the scope of leapfrog, <!> The range is 0 ~ 1"),Y=o("<div>start"),Z=o("<div>end"),ee=o("<div>center"),te=o("<div>space-between"),re=o("<div>space-around"),le=o('<div class="sys-ctx-main-left">');function r({children:C,style:x}){return(()=>{const c=Q();return n(c,C),G(y=>E(c,{...x,"justify-content":"center"},y)),c})()}function Ce(){return[(()=>{const C=le();return F(k,C,()=>""),n(C,e(i,{dir:"v",size:32,get children(){return[e(f,{heading:2,children:"Row/Col Grid"}),e(i,{id:"grid_base",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(i,{dir:"v",size:5,get children(){return[e(l,{class:"demo-row",get children(){return e(t,{class:"demo-col",get children(){return e(r,{children:"100%"})}})}}),e(l,{class:"demo-row light",get children(){return[e(t,{class:"demo-col",grid:.5,get children(){return e(r,{children:"50%"})}}),e(t,{class:"demo-col light",grid:.5,get children(){return e(r,{children:"50%"})}})]}}),e(l,{class:"demo-row",get children(){return[e(t,{class:"demo-col",grid:1/3,get children(){return e(r,{children:"1/3"})}}),e(t,{class:"demo-col light",grid:1/3,get children(){return e(r,{children:"1/3"})}}),e(t,{class:"demo-col",grid:1/3,get children(){return e(r,{children:"1/3"})}})]}}),e(l,{class:"demo-row light",get children(){return[e(t,{class:"demo-col",grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{class:"demo-col light",grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{class:"demo-col",grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{class:"demo-col light",grid:1/4,get children(){return e(r,{children:"1/4"})}})]}}),e(l,{class:"demo-row",get children(){return[e(t,{class:"demo-col",grid:2/3,get children(){return e(r,{children:"2/3"})}}),e(t,{class:"demo-col light",grid:1/3,get children(){return e(r,{children:"1/3"})}})]}})]}}),e(g,{align:"left",get children(){return e(d,{type:"primary",children:"Basic usage"})}}),e(h,{type:"secondary",spacing:"extended",get children(){const x=X(),c=x.firstChild,y=c.firstChild,v=y.nextSibling;v.nextSibling;const m=c.nextSibling,P=m.firstChild,_=P.nextSibling,O=_.nextSibling,w=O.nextSibling;w.nextSibling;const T=m.nextSibling,L=T.firstChild,b=L.nextSibling;b.nextSibling;const p=T.nextSibling,A=p.firstChild,R=A.nextSibling,B=R.nextSibling,j=B.nextSibling,D=j.nextSibling,S=D.nextSibling;return S.nextSibling,n(c,e(d,{code:!0,children:"row"}),v),n(m,e(d,{code:!0,children:"col"}),_),n(m,e(d,{code:!0,children:"row"}),w),n(T,e(d,{code:!0,children:"col"}),b),n(p,e(d,{code:!0,children:"col"}),R),n(p,e(d,{code:!0,children:"grid"}),j),n(p,e(d,{code:!0,children:"grid"}),S),x}}),e(a,{get data(){return u.grid_base}})]}})}}),e(i,{id:"grid_gutter",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(l,{gutter:16,class:"example-demo",get children(){return[e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}}),e(t,{grid:1/4,get children(){return e(r,{children:"1/4"})}})]}}),e(g,{align:"left",get children(){return e(d,{type:"primary",children:"Block interval"})}}),e(h,{type:"secondary",spacing:"extended",get children(){return["Pass ",e(d,{code:!0,children:"row"})," Add the Gutter attribute, you can give it to your subordinates",e(d,{code:!0,children:"col"})," Add spacing, recommended to use (16+8n)px As a grid interval."]}}),e(a,{get data(){return u.grid_gutter}})]}})}}),e(i,{id:"grid_offset",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(i,{dir:"v",get children(){return[e(l,{gutter:16,class:"example-demo",get children(){return[e(t,{grid:1/4,offset:1/4,get children(){return e(r,{children:"1/4 offset 1/4"})}}),e(t,{grid:1/4,offset:1/4,get children(){return e(r,{children:"1/4 offset 1/4"})}})]}}),e(l,{gutter:16,class:"example-demo",get children(){return e(t,{grid:.5,offset:.25,get children(){return e(r,{children:"0.5 offset 0.25"})}})}})]}}),e(g,{align:"left",get children(){return e(d,{type:"primary",children:"Left -right offset"})}}),e(h,{type:"secondary",spacing:"extended",children:"By setting the Offset property, the column is left -right offset, and the number of offset grid is the value of the Office."}),e(a,{get data(){return u.grid_offset}})]}})}}),e(i,{id:"grid_push",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(i,{dir:"v",get children(){return e(l,{class:"example-demo",get children(){return[e(t,{grid:3/4,push:1/4,get children(){return e(r,{children:"3/4 push-1/4"})}}),e(t,{grid:1/4,pull:3/4,get children(){return e(r,{children:"1/4 pull-3/4"})}})]}})}}),e(g,{align:"left",get children(){return e(d,{type:"primary",children:"Grid sorting"})}}),e(h,{type:"secondary",spacing:"extended",children:"The sequence of grid is changed by setting PUSH and PULL."}),e(a,{get data(){return u.grid_push}})]}})}}),e(i,{id:"grid_justify",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(i,{dir:"v",size:5,style:{"margin-top":"20px"},get children(){return[Y(),e(l,{justify:"start",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}}),Z(),e(l,{justify:"end",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}}),ee(),e(l,{justify:"center",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}}),te(),e(l,{justify:"space-between",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}}),re(),e(l,{justify:"space-around",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}})]}}),e(g,{align:"left",get children(){return e(d,{type:"primary",children:"Flex level layout"})}}),e(h,{type:"secondary",spacing:"extended",children:"By setting the parameter Justify as different values for the ROW, define the arrangement of the child element. Effective in the Flex mode."}),e(a,{get data(){return u.grid_justify}})]}})}}),e(i,{id:"grid_align",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(i,{dir:"v",size:5,style:{"margin-top":"20px"},get children(){return[e(l,{justify:"center",align:"top",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{style:{height:"80px"},children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{style:{height:"100px"},children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}}),e(l,{justify:"center",align:"bottom",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{style:{height:"80px"},children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{style:{height:"100px"},children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}}),e(l,{justify:"center",align:"middle",class:"example-demo",get children(){return[e(t,{grid:1/6,get children(){return e(r,{style:{height:"80px"},children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{style:{height:"100px"},children:"1/6"})}}),e(t,{grid:1/6,get children(){return e(r,{children:"1/6"})}})]}})]}}),e(g,{align:"left",get children(){return e(d,{type:"primary",children:"Flex vertical alignment"})}}),e(h,{type:"secondary",spacing:"extended",children:"By setting the parameter Align as different values for the ROW, define the arrangement method of the child element in the vertical direction. Effective in the Flex mode."}),e(a,{get data(){return u.grid_align}})]}})}}),e(i,{dir:"v",size:24,id:"comp_api",get children(){return[e(f,{type:"primary",heading:3,children:"API"}),e(i,{id:"comp_props",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"Row Props"}),e($,{columns:z,data:V,border:!0,size:"small"})]}}),e(i,{id:"comp_col_props",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"Col Props"}),e($,{columns:z,data:K,border:!0,size:"small"})]}})]}})]}})),C})(),e(I,{data:N})]}export{Ce as default};
