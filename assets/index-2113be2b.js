import{c as A,u as j,i as o,a as e,S as c,x as i,T as l,t as h}from"./index-00bf0c33.js";import{C as t}from"./index-46bb1bd4.js";import{T as f,C as u,B as b}from"./index-345cd19e.js";import{D as g,a as p,C as D}from"./code-6666454f.js";import{P as v}from"./index-e4583d54.js";import{R as F,C as $}from"./index-96ab4b8f.js";import{T as x}from"./index-0092c168.js";import{p as E,e as T}from"./columns-26981c48.js";import{h as P}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const a=""+new URL("1-a8b02a30.jpg",import.meta.url).href,d=""+new URL("2-6b758c64.jpg",import.meta.url).href,n=""+new URL("3-6403de82.jpg",import.meta.url).href,m=""+new URL("4-e81a9b66.jpg",import.meta.url).href,w=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

<Carousel>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img1} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img2} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img3} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img4} fit="cover"/>
        </div>
    </Carousel.Item>
</Carousel>`,B=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

<Carousel autoPlay>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img1} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img2} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img3} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img4} fit="cover"/>
        </div>
    </Carousel.Item>
</Carousel>
`,R=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

<Row gutter={20}>
    <Col grid={0.5}>
        <Carousel dotAlign="left">
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img1} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img2} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img3} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img4} fit="cover"/>
                </div>
            </Carousel.Item>
        </Carousel>
    </Col>
    <Col grid={0.5}>
        <Carousel dotAlign="right">
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img1} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img2} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img3} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img4} fit="cover"/>
                </div>
            </Carousel.Item>
        </Carousel>
    </Col>
</Row>`,S=`import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

<Carousel dotType="line">
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img1} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img2} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img3} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img4} fit="cover"/>
        </div>
    </Carousel.Item>
</Carousel>

<Carousel dotType="columnar">
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img1} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img2} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img3} fit="cover"/>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div class="demo-carousel">
            <Image src={img4} fit="cover"/>
        </div>
    </Carousel.Item>
</Carousel>`,L=`const [index, setIndex] = createSignal(0);

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

<Space id="image_base" dir="v">
    <Carousel dotType="line" activeIndex={[index, setIndex]}>
        <Carousel.Item>
            <div class="demo-carousel">
                <Image src={img1} fit="cover"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="demo-carousel">
                <Image src={img2} fit="cover"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="demo-carousel">
                <Image src={img3} fit="cover"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="demo-carousel">
                <Image src={img4} fit="cover"/>
            </div>
        </Carousel.Item>
    </Carousel>
    <div>
        <Button type="primary" onClick={() => {
            setIndex((index() + 1) % 4)
        }}>Next</Button>
    </div>
</Space>`,z=[{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"classList",desc:"自定义Class",type:"Object",default:""},{name:"class",desc:"自定义Class",type:"string",default:""},{name:"arrow",desc:"切换按钮的显示方式 hover|always|never",type:"string",default:"hover"},{name:"autoPlay",desc:"自动播放",type:"boolean",default:""},{name:"duration",desc:"自动播放时间ms",type:"number",default:"4000"},{name:"effect",desc:"动效 fade|slide",type:"number",default:"4000"},{name:"dotType",desc:"缩略点位的样式 dot|line|columnar",type:"string",default:"dot"},{name:"dotAlign",desc:"点位的位置 left|center|right",type:"string",default:"center"},{name:"activeIndex",desc:"控制活跃的索引",type:"Function[]",default:""},{name:"onChange",desc:"切换事件",type:"Function",default:""}],U=[{name:"onChange",desc:"切换事件",params:""}],k=[{id:"carousel_base",text:"基础用法"},{id:"carousel_autoplay",text:"自动播放"},{id:"carousel_dotAlign",text:"dot位置"},{id:"carousel_dotstyle",text:"dot样式"},{id:"carousel_control",text:"可控"},{id:"comp_api",text:"API"},{id:"comp_props",text:"数据项属性"}],I={carousel_base:w,carousel_autoplay:B,carousel_dotAlign:R,carousel_dotstyle:S,carousel_control:L},s=h('<div class="demo-carousel">'),N=h("<div>"),O=h('<div class="sys-ctx-main-left">');function Z(q){const[y,_]=A(0);return[(()=>{const C=O();return j(P,C,()=>""),o(C,e(c,{dir:"v",size:32,get children(){return[e(f,{heading:2,children:"Carousel 跑马灯"}),e(c,{id:"carousel_base",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(t,{get children(){return[e(t.Item,{get children(){const r=s();return o(r,e(i,{src:a,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:d,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:n,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:m,fit:"cover"})),r}})]}}),e(g,{align:"left",get children(){return e(l,{type:"primary",children:"基本用法"})}}),e(v,{type:"secondary",spacing:"extended",children:"基本用法"}),e(p,{get data(){return I.carousel_base}})]}})}}),e(c,{id:"carousel_autoplay",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(t,{autoPlay:!0,get children(){return[e(t.Item,{get children(){const r=s();return o(r,e(i,{src:a,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:d,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:n,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:m,fit:"cover"})),r}})]}}),e(g,{align:"left",get children(){return e(l,{type:"primary",children:"自动播放"})}}),e(v,{type:"secondary",spacing:"extended",get children(){return["添加",e(l,{code:!0,children:"autoPlay"})," 可以自动播放"]}}),e(p,{get data(){return I.carousel_autoplay}})]}})}}),e(c,{id:"carousel_dotAlign",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(F,{gutter:20,get children(){return[e($,{grid:.5,get children(){return e(t,{dotAlign:"left",get children(){return[e(t.Item,{get children(){const r=s();return o(r,e(i,{src:a,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:d,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:n,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:m,fit:"cover"})),r}})]}})}}),e($,{grid:.5,get children(){return e(t,{dotAlign:"right",get children(){return[e(t.Item,{get children(){const r=s();return o(r,e(i,{src:a,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:d,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:n,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:m,fit:"cover"})),r}})]}})}})]}}),e(g,{align:"left",get children(){return e(l,{type:"primary",children:"dot位置"})}}),e(v,{type:"secondary",spacing:"extended",get children(){return[e(l,{code:!0,children:"dotAlign"})," 支持left和right 默认center"]}}),e(p,{get data(){return I.carousel_dotAlign}})]}})}}),e(c,{id:"carousel_dotstyle",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(t,{dotType:"line",get children(){return[e(t.Item,{get children(){const r=s();return o(r,e(i,{src:a,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:d,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:n,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:m,fit:"cover"})),r}})]}}),e(t,{dotType:"columnar",get children(){return[e(t.Item,{get children(){const r=s();return o(r,e(i,{src:a,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:d,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:n,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:m,fit:"cover"})),r}})]}}),e(g,{align:"left",get children(){return e(l,{type:"primary",children:"dot样式"})}}),e(v,{type:"secondary",spacing:"extended",get children(){return[e(l,{code:!0,children:"dotType"})," 支持 line 和 columnar 默认圆形"]}}),e(p,{get data(){return I.carousel_dotstyle}})]}})}}),e(c,{id:"carousel_control",dir:"v",get children(){return e(u,{bordered:!0,get children(){return[e(c,{id:"image_base",dir:"v",get children(){return[e(t,{dotType:"line",activeIndex:[y,_],get children(){return[e(t.Item,{get children(){const r=s();return o(r,e(i,{src:a,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:d,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:n,fit:"cover"})),r}}),e(t.Item,{get children(){const r=s();return o(r,e(i,{src:m,fit:"cover"})),r}})]}}),(()=>{const r=N();return o(r,e(b,{type:"primary",onClick:()=>{_((y()+1)%4)},children:"Next"})),r})()]}}),e(g,{align:"left",get children(){return e(l,{type:"primary",children:"可控"})}}),e(v,{type:"secondary",spacing:"extended",get children(){return[e(l,{code:!0,children:"activeIndex"})," 属性进行控制显示的索引"]}}),e(p,{get data(){return I.carousel_control}})]}})}}),e(c,{dir:"v",size:24,id:"comp_api",get children(){return[e(f,{type:"primary",heading:3,children:"API"}),e(c,{id:"comp_props",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"Carousel Props"}),e(x,{columns:E,data:z,border:!0,size:"small"})]}}),e(c,{id:"comp_events",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"Events"}),e(x,{columns:T,data:U,border:!0,size:"small"})]}})]}})]}})),C})(),e(D,{data:k})]}export{Z as default};
