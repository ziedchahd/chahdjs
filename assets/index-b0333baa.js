import{u as v,i as a,a as e,S as i,T as n,t as d}from"./index-00bf0c33.js";import{T as y,C as l}from"./index-345cd19e.js";import{D as o,a as p,C as f}from"./code-6666454f.js";import{P as g}from"./index-e4583d54.js";import{D as s}from"./index-112bc2d3.js";import{T as m}from"./index-0092c168.js";import{p as x,e as _}from"./columns-26981c48.js";import{h as P}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const D=`<div style={{height: '200px', position: 'relative'}}>
    <Draggable >
        <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
            <div style={{height: '30px'}} class='drag-handler'>Handler</div>
        </div>
    </Draggable>
</div>`,$=`<div style={{height: '200px', position: 'relative'}}>
    <Draggable disabled bounds="parent">
        <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
            Disable
        </div>
    </Draggable>
</div>`,C=`<div style={{height: '200px', position: 'relative'}}>

<Draggable axis="both" bounds="parent">
    <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
        Both
    </div>
</Draggable>

<Draggable axis="x" bounds="parent" defaultPosition={{x: 200, y: 0}}>
    <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
        X
    </div>
</Draggable>

<Draggable axis="y" bounds="parent" defaultPosition={{x: 400, y: 0}}>
    <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
        Y
    </div>
</Draggable>
</div>`,w=`<div style={{height: '200px', position: 'relative', border: '1px solid #ccc'}}>
    <Draggable axis="both" bounds="parent">
        <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
            bounds
        </div>
    </Draggable>
</div>`,T=`<div style={{height: '200px', position: 'relative', border: '1px solid #ccc'}}>
    <Draggable axis="both" bounds="parent" handle=".handler">
        <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
            <div class="handler" style={{cursor: 'move'}}>Handler</div>
        </div>
    </Draggable>
</div>`,S=`<div style={{height: '200px', position: 'relative', border: '1px solid #ccc'}}>
    <Draggable grid={[10, 10]} bounds="parent" >
        <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
        grid
        </div>
    </Draggable>
</div>`,z=[{name:"style",desc:"Custom style",type:"Object",default:""},{name:"classList",desc:"Custom Class",type:"Object",default:""},{name:"class",desc:"Custom Class",type:"string",default:""},{name:"defaultPosition",desc:"Initialization position",type:"Object",default:"{x: 0, y: 0}"},{name:"position",desc:"Control location",type:"Object",default:"{x: 0, y: 0}"},{name:"bounds",desc:"Container element of dragging range",type:"string|HTMLElement",default:"parent"},{name:"axis",desc:"Drag both|x|y",type:"string",default:"both"},{name:"positionOffset",desc:"Initialized offset",type:"object",default:"{x: 0, y: 0}"},{name:"grid",desc:"The minimum distance of each drag",type:"Number[]",default:""},{name:"disabled",desc:"Disabled",type:"boolean",default:""},{name:"handle",desc:"Disable trigger elements",type:"string|HTMLElement",default:""},{name:"onStart",desc:"Dragging starts to trigger the event, return false Can block subsequent events",type:"Function",default:""},{name:"onDrag",desc:"Drag and trigger event, return false Can block subsequent events",type:"Function",default:""},{name:"onStop",desc:"Drag and drag the incident, return false Can block subsequent execution",type:"Function",default:""}],E=[{name:"onStart",desc:"Dragging starts to trigger the event",params:"Event, uiData"},{name:"onDrag",desc:"Drag and trigger event",params:"Event, uiData"},{name:"onStop",desc:"Drag and drag the incident",params:"Event, uiData"}],X=[{name:"x",desc:"X direction position",type:"number",default:""},{name:"y",desc:"Y direction position",type:"number",default:""},{name:"deltaX",desc:"X direction distance from the last position distance",type:"number",default:""},{name:"deltaY",desc:"Y direction distance from the last position distance",type:"number",default:""},{name:"lastX",desc:"X last time",type:"number",default:""},{name:"lastY",desc:"Y last time",type:"number",default:""}],B=[{id:"draggable_base",text:"Basic usage"},{id:"draggable_disabled",text:"Disable"},{id:"draggable_axis",text:"direction"},{id:"draggable_bounds",text:"Scope"},{id:"draggable_handle",text:"Trigger element"},{id:"draggable_grid",text:"shortest distance"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Attributes"},{id:"comp_events",text:"event"},{id:"comp_uidata_props",text:"Event attribute"}],c={draggable_base:D,draggable_disabled:$,draggable_axis:C,draggable_bounds:w,draggable_handle:T,draggable_grid:S},Y=d('<div><div class="drag-handler">Handler'),h=d("<div>"),j=d("<div>Disable"),H=d("<div>Both"),O=d("<div>X"),A=d("<div>Y"),I=d("<br>"),k=d("<div>bounds"),q=d('<div><div class="handler">Handler'),F=d("<div>grid"),L=d('<div class="sys-ctx-main-left">');function W(){return[(()=>{const u=L();return v(P,u,()=>""),a(u,e(i,{dir:"v",size:32,get children(){return[e(y,{heading:2,children:"Draggable"}),e(i,{id:"draggable_base",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[(()=>{const r=h();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),a(r,e(s,{get children(){const t=Y(),b=t.firstChild;return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),b.style.setProperty("height","30px"),t}})),r})(),e(o,{align:"left",get children(){return e(n,{type:"primary",children:"Basic usage"})}}),e(g,{type:"secondary",spacing:"extended",children:"Basic usage"}),e(p,{get data(){return c.draggable_base}})]}})}}),e(i,{id:"draggable_disabled",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[(()=>{const r=h();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),a(r,e(s,{disabled:!0,bounds:"parent",get children(){const t=j();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}})),r})(),e(o,{align:"left",get children(){return e(n,{type:"primary",children:"Disable"})}}),e(g,{type:"secondary",spacing:"extended",children:"Disabled"}),e(p,{get data(){return c.draggable_disabled}})]}})}}),e(i,{id:"draggable_axis",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[(()=>{const r=h();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),a(r,e(s,{axis:"both",bounds:"parent",get children(){const t=H();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}}),null),a(r,e(s,{axis:"x",bounds:"parent",defaultPosition:{x:200,y:0},get children(){const t=O();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}}),null),a(r,e(s,{axis:"y",bounds:"parent",defaultPosition:{x:400,y:0},get children(){const t=A();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}}),null),r})(),e(o,{align:"left",get children(){return e(n,{type:"primary",children:"direction"})}}),e(g,{type:"secondary",spacing:"extended",get children(){return["axis default Both、Can be limited in X、On the y axis .",I(),"Set defaultposition to initialize the position"]}}),e(p,{get data(){return c.draggable_axis}})]}})}}),e(i,{id:"draggable_bounds",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[(()=>{const r=h();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),r.style.setProperty("border","1px solid #ccc"),a(r,e(s,{axis:"both",bounds:"parent",get children(){const t=k();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}})),r})(),e(o,{align:"left",get children(){return e(n,{type:"primary",children:"Scope"})}}),e(g,{type:"secondary",spacing:"extended",children:"bounds default parent, Be specified css Select the specified container"}),e(p,{get data(){return c.draggable_bounds}})]}})}}),e(i,{id:"draggable_handle",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[(()=>{const r=h();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),r.style.setProperty("border","1px solid #ccc"),a(r,e(s,{axis:"both",bounds:"parent",handle:".handler",get children(){const t=q(),b=t.firstChild;return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),b.style.setProperty("cursor","move"),t}})),r})(),e(o,{align:"left",get children(){return e(n,{type:"primary",children:"Trigger element"})}}),e(g,{type:"secondary",spacing:"extended",children:"Set handle The element specifies the trigger element"}),e(p,{get data(){return c.draggable_handle}})]}})}}),e(i,{id:"draggable_grid",dir:"v",get children(){return e(l,{bordered:!0,get children(){return[(()=>{const r=h();return r.style.setProperty("height","200px"),r.style.setProperty("position","relative"),r.style.setProperty("border","1px solid #ccc"),a(r,e(s,{grid:[10,10],bounds:"parent",get children(){const t=F();return t.style.setProperty("width","100px"),t.style.setProperty("height","100px"),t.style.setProperty("border","1px solid red"),t}})),r})(),e(o,{align:"left",get children(){return e(n,{type:"primary",children:"shortest distance"})}}),e(g,{type:"secondary",spacing:"extended",children:"Set grid The minimum distance of dragging movement"}),e(p,{get data(){return c.draggable_grid}})]}})}}),e(i,{dir:"v",size:24,id:"comp_api",get children(){return[e(y,{type:"primary",heading:3,children:"API"}),e(i,{id:"comp_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Draggable Props"}),e(m,{columns:x,data:z,border:!0,size:"small"})]}}),e(i,{id:"comp_events",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Events"}),e(m,{columns:_,data:E,border:!0,size:"small"})]}}),e(i,{id:"comp_uidata_props",dir:"v",get children(){return[e(y,{type:"primary",heading:4,children:"Event uiDaua Props"}),e(m,{columns:x,data:X,border:!0,size:"small"})]}})]}})]}})),u})(),e(f,{data:B})]}export{W as default};
