import{c as L,u as R,i as b,a as e,S as t,T as i,t as S}from"./index-00bf0c33.js";import{T as r}from"./index-0092c168.js";import{T as x,C as d,B as p}from"./index-345cd19e.js";import{D as o,a as l,C as G}from"./code-6666454f.js";import{P as s}from"./index-e4583d54.js";import{p as C,e as I}from"./columns-26981c48.js";import{h as F}from"./hljs-74a5c6d1.js";import"./_commonjsHelpers-725317a4.js";const E=[{id:"100",name:"John Brown",age:18,address:"New York No. 1 Lake Park"},{id:"101",name:"Jim Green",age:24,address:"London No. 1 Lake Park",_showChildren:!0,children:[{id:"10100",name:"John Brown",age:18,address:"New York No. 1 Lake Park"},{id:"10101",name:"Joe Blackn",age:30,address:"Sydney No. 1 Lake Park"},{id:"10102",name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",children:[{id:"1010200",name:"Jim Green",age:24,address:"New York No. 1 Lake Park"}]}]},{id:"102",name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park"},{id:"103",name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park"}],M=[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",job:"Data engineer",interest:"badminton",birthday:"1991-05-14",book:"Steve Jobs",movie:"The Prestige",music:"I Cry"},{name:"Jim Green",age:25,address:"London No. 1 Lake Park",job:"Data Scientist",interest:"volleyball",birthday:"1989-03-18",book:"My Struggle",movie:"Roman Holiday",music:"My Heart Will Go On"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",job:"Data Product Manager",interest:"tennis",birthday:"1992-01-31",book:"Win",movie:"Jobs",music:"Don’t Cry"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",job:"Data Analyst",interest:"snooker",birthday:"1988-7-25",book:"A Dream in Red Mansions",movie:"A Chinese Ghost Story",music:"actor"}],W=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Table columns={columns} data={data}/>`,$=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Table columns={columns} data={data} border/>`,Z=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Table columns={columns} data={data} border stripe/>`,q=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Table columns={columns} data={data} border stripe height={200}/>`,U=`const fixedColumns = [
    {type: 'index', title: '序号', width: '80px', fixed: 'left'},
    {name: 'name', title: '名称', width: '150px', fixed: 'left'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px', fixed: 'right'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<div style={{width: '800px'}}>
    <Table columns={fixedColumns} data={data} border stripe height={200}/>
</div>`,V=`let table: any;

const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Space dir="v">
    <Table columns={columns} data={data} border  highlight ref={table}/>
    <div>
        <Button type="primary" onClick={() => {
            table.clearSelect();
        }}>清除高亮</Button>
    </div>
</Space>`,K=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Table columns={columns} data={data} size='small' border />`,Q=`const [loading, setLoading] = createSignal(false);

const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Space dir="v">
    <Table columns={columns} data={data} size='small' border loading={loading()}/>
    <div>
        <Button type="primary" onClick={() => {
            setLoading(!loading());
        }}>加载/完成</Button>
    </div>
</Space>`,ee=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Space dir="v">
    <Table columns={columns} data={data} border spanMethod={(row: any, col: ColumnProps, rowIndex: number, columnIndex: number) => {
        if (rowIndex === 0 && columnIndex === 0) {
            return [1, 2];
        } else if (rowIndex === 0 && columnIndex === 1) {
            return  [0, 0];
        }
        if (rowIndex === 2 && columnIndex === 0) {
            return [2, 1];
        } else if (rowIndex === 3 && columnIndex === 0) {
            return [0, 0];
        }
    }}/>
</Space>`,te=`const columns = [
    {type: 'checkbox', width: '55px', },
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
    {name: '_op', title: '操作', width: '150px', render: (v: any, column: any, row: any) => {
        return <Space>
            <Button type='text' size='small' ghost>添加</Button>
            <Button type='text' size='small' ghost>修改</Button>
        </Space>
    }}
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Space dir="v">
    <Table columns={columns} data={data} />
</Space>`,ae=`const columns = [
    {name: 'name', title: '名称', width: '150px', sort: true},
    {name: 'x', title: 'X', width: '300px', sort: true},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
    {name: '_op', title: '操作', width: '150px', render: (v: any, column: any, row: any) => {
        return <Space>
            <Button type='text' size='small' ghost>添加</Button>
            <Button type='text' size='small' ghost>修改</Button>
        </Space>
    }}
];


const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Space dir="v">
    <Table columns={columns} data={data} />
</Space>`,ne=`const columns = [
    {name: 'name', title: '名称', width: '150px', resize: true},
    {name: 'x', title: 'X', width: '300px', resize: true},
    {name: 'y', title: 'Y', width: '300px', resize: true},
    {name: 'date', title: '日期', width: '200px'},
    {name: '_op', title: '操作', width: '150px', render: (v: any, column: any, row: any) => {
        return <Space>
            <Button type='text' size='small' ghost>添加</Button>
            <Button type='text' size='small' ghost>修改</Button>
        </Space>
    }}
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Space dir="v" style={{width: '100%', overflow: 'auto'}}>
    <Table columns={columns} data={data} border/>
</Space>`,re=`const [data, setData] = createSignal([
    {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        job: 'Data engineer',
        interest: 'badminton',
        birthday: '1991-05-14',
        book: 'Steve Jobs',
        movie: 'The Prestige',
        music: 'I Cry',
    },
    {
        name: 'Jim Green',
        age: 25,
        address: 'London No. 1 Lake Park',
        job: 'Data Scientist',
        interest: 'volleyball',
        birthday: '1989-03-18',
        book: 'My Struggle',
        movie: 'Roman Holiday',
        music: 'My Heart Will Go On'
    },
    {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        job: 'Data Product Manager',
        interest: 'tennis',
        birthday: '1992-01-31',
        book: 'Win',
        movie: 'Jobs',
        music: 'Don’t Cry'
    },
    {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        job: 'Data Analyst',
        interest: 'snooker',
        birthday: '1988-7-25',
        book: 'A Dream in Red Mansions',
        movie: 'A Chinese Ghost Story',
        music: 'actor'
    }
]);

const columns = [
    {
        title: 'Name',
        name: 'name',
        width: '100px',
    },
    {
        title: 'Age',
        name: 'age',
        width: '100px',
    },
    {
        title: 'Address',
        name: 'address',
        width: '300px',
    }
]

const [loading, setLoading] = createSignal(false);

<Space dir="v">
    <Table columns={columns} data={data()} border loading={loading()}/>
    <div>
        <Button type='primary' onClick={() => {
            setLoading(true);
            setTimeout(() => {
                const data: any[] = [];
                for (let i = 0; i < Math.random() * 10; i++) {
                    data.push({
                        name: 'name_' + i,
                        age: Math.round(10 + Math.random() * 50),
                        address: 'address ' + i
                    });
                }
                setData5(data);
                setLoading(false);
            }, 500)
        }}>请求数据</Button>
    </div>
</Space>`,ie=`const data = [
    {
        id: '100',
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park'
    },
    {
        id: '101',
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park',
        _showChildren: true,
        children: [
            {
                id: '10100',
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park'
            },
            {
                id: '10101',
                name: 'Joe Blackn',
                age: 30,
                address: 'Sydney No. 1 Lake Park'
            },
            {
                id: '10102',
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                children: [
                    {
                        id: '1010200',
                        name: 'Jim Green',
                        age: 24,
                        address: 'New York No. 1 Lake Park'
                    }
                ]
            }
        ]
    },
    {
        id: '102',
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park'
    },
    {
        id: '103',
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park'
    }
];


const columns = [
    {
        title: 'Name',
        name: 'name',
        width: '100px',
    },
    {
        title: 'Age',
        name: 'age',
        width: '100px',
    },
    {
        title: 'Address',
        name: 'address',
        width: '300px',
    }
]

<Space dir="v">
    <Table columns={columns} data={data} border />
</Space>`,de=`const columns = [
    {
        type: 'expand',
        width: '50px',
        render: (row: any) => {
            return <div>{row.name}</div>
        }
    },
    {
        title: 'Name',
        name: 'name',
        width: '100px',
        resize: true,
    },
    {
        title: 'Age',
        name: 'age',
        width: '100px',
        resize: true,
    },
    {
        title: 'Address',
        name: 'address',
        width: '300px',
    },
    {
        title: 'Job',
        name: 'job',
        width: '200px',
    },
    {
        title: 'Book',
        name: 'book',
        width: '250px',
    }
]

const data = [
    {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        job: 'Data engineer',
        interest: 'badminton',
        birthday: '1991-05-14',
        book: 'Steve Jobs',
        movie: 'The Prestige',
        music: 'I Cry',
    },
    {
        name: 'Jim Green',
        age: 25,
        address: 'London No. 1 Lake Park',
        job: 'Data Scientist',
        interest: 'volleyball',
        birthday: '1989-03-18',
        book: 'My Struggle',
        movie: 'Roman Holiday',
        music: 'My Heart Will Go On'
    },
    {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        job: 'Data Product Manager',
        interest: 'tennis',
        birthday: '1992-01-31',
        book: 'Win',
        movie: 'Jobs',
        music: 'Don’t Cry'
    },
    {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        job: 'Data Analyst',
        interest: 'snooker',
        birthday: '1988-7-25',
        book: 'A Dream in Red Mansions',
        movie: 'A Chinese Ghost Story',
        music: 'actor'
    }
]

<Space dir="v">
    <Table columns={columns} data={data} border />
</Space>`,oe=`const columns = [
    {type: 'index', title: '序号', width: '80px'},
    {name: 'name', title: '名称', width: '150px'},
    {name: 'x', title: 'X', width: '300px'},
    {name: 'y', title: 'Y', width: '300px'},
    {name: 'date', title: '日期', width: '200px'},
];

const largedata = [];
for (let i = 0; i < 1000; i++) {
    largedata.push({
        id: i,
        name: 'name_' + i,
        x: Math.random() + 100,
        y: Math.random() + 30,
        _disabled: i % 3 === 0,
        date: new Date().toLocaleDateString()
    });
}

<Table columns={columns} data={largedata} border virtual height={300}/>`,z=[{name:"classList",desc:"Custom Class",type:"Object",default:""},{name:"class",desc:"Custom Class",type:"string",default:""},{name:"style",desc:"Custom style",type:"Object",default:""},{name:"columns",desc:"Head field information",type:"Array",default:""},{name:"data",desc:"Data body",type:"Array",default:""},{name:"height",desc:"The maximum table, Beyond the head fixed",type:"number",default:""},{name:"border",desc:"frame",type:"boolean",default:""},{name:"stripe",desc:"Zebra stripes",type:"boolean",default:""},{name:"highlight",desc:"Click the line in Gao Liang",type:"boolean",default:""},{name:"size",desc:"size， small",type:"string",default:""},{name:"loading",desc:"Loading status",type:"boolean",default:""},{name:"spanMethod",desc:"Hooks with merging",type:"Function",default:""},{name:"onRowSelect",desc:"Election event return item",type:"Function",default:""},{name:"onRowChecked",desc:"Election event return item",type:"Function",default:""},{name:"onCheckedAll",desc:"All selected events, all selected data",type:"Function",default:""},{name:"onSort",desc:"Sorting event column, sotyType",type:"Function",default:""},{name:"ref",desc:"Table component quotation",type:"any",default:""}],le=[{name:"onRowSelect",desc:"Election event",params:"item"},{name:"onRowChecked",desc:"Election event",params:"item"},{name:"onCheckedAll",desc:"Full event",params:"data"},{name:"onSort",desc:"Sorting event",params:"column, sotyType"}],se=[{id:"table_base",text:"Basic usage"},{id:"table_border",text:"frame"},{id:"table_stripe",text:"Zebra pattern"},{id:"table_fixedHeader",text:"Fixed header"},{id:"table_fixedCol",text:"Fixed column"},{id:"table_highlight",text:"Highlight"},{id:"table_size",text:"Small size"},{id:"table_loading",text:"loading"},{id:"table_span",text:"Merger"},{id:"table_checkbox",text:"Choice box"},{id:"table_sort",text:"Sort"},{id:"table_resize",text:"Drag and dragging"},{id:"table_data",text:"dynamic data"},{id:"table_tree",text:"Tree"},{id:"table_expand",text:"Expand"},{id:"table_largedata",text:"List"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Attributes"},{id:"comp_column_props",text:"Column Attributes"},{id:"comp_events",text:"event"}],m={table_base:W,table_border:$,table_stripe:Z,table_fixedHeader:q,table_fixedCol:U,table_highlight:V,table_size:K,table_loading:Q,table_span:ee,table_checkbox:te,table_sort:ae,table_resize:ne,table_data:re,table_tree:ie,table_expand:de,table_largedata:oe},w=S("<div>"),y=S("<br>"),me=S('<div class="sys-ctx-main-left">');function we(){const g=[{type:"index",title:"Serial number",width:"80px"},{name:"name",title:"name",width:"150px"},{name:"x",title:"X"},{name:"y",title:"Y"},{name:"date",title:"date",width:"200px"}],N=[{type:"index",title:"Serial number",width:"80px"},{name:"name",title:"name",width:"150px"},{name:"x",title:"X"},{name:"y",title:"Y"},{name:"date",title:"date",width:"200px"}],B=[{type:"index",title:"Serial number",width:"80px",fixed:"left"},{name:"name",title:"name",width:"150px",fixed:"left"},{name:"x",title:"X",width:"300px"},{name:"y",title:"Y",width:"300px"},{name:"date",title:"date",width:"200px",fixed:"right"}],T=[{type:"checkbox",width:"55px"},{name:"name",title:"name",width:"150px"},{name:"x",title:"X",width:"300px"},{name:"y",title:"Y",width:"300px"},{name:"date",title:"date",width:"200px"},{name:"_op",title:"operate",width:"150px",render:(n,a,h)=>e(t,{get children(){return[e(p,{type:"text",size:"small",ghost:!0,children:"Add to"}),e(p,{type:"text",size:"small",ghost:!0,children:"Revise"})]}})}],P=[{name:"name",title:"名称",width:"150px",sort:!0},{name:"x",title:"X",width:"300px",sort:!0},{name:"y",title:"Y",width:"300px"},{name:"date",title:"日期",width:"200px"},{name:"_op",title:"操作",width:"150px",render:(n,a,h)=>e(t,{get children(){return[e(p,{type:"text",size:"small",ghost:!0,children:"Add to"}),e(p,{type:"text",size:"small",ghost:!0,children:"Revise"})]}})}],A=[{name:"name",title:"name",width:"150px",resize:!0},{name:"x",title:"X",width:"300px",resize:!0},{name:"y",title:"Y",width:"300px",resize:!0},{name:"date",title:"date",width:"200px"},{name:"_op",title:"operate",width:"150px",render:(n,a,h)=>e(t,{get children(){return[e(p,{type:"text",size:"small",ghost:!0,children:"Add to"}),e(p,{type:"text",size:"small",ghost:!0,children:"Revise"})]}})}],J=[{type:"expand",width:"50px",render:n=>(()=>{const a=w();return b(a,()=>n.name),a})()},{title:"Name",name:"name",width:"100px",resize:!0},{title:"Age",name:"age",width:"100px",resize:!0},{title:"Address",name:"address",width:"300px"},{title:"Job",name:"job",width:"200px"},{title:"Book",name:"book",width:"250px"}],Y=[{title:"Name",name:"name",width:"100px"},{title:"Age",name:"age",width:"100px"},{title:"Address",name:"address",width:"300px"}],X=[{title:"Name",name:"name",tree:!0,width:"100px"},{title:"Age",name:"age",width:"100px"},{title:"Address",name:"address",width:"300px"}],c=[];for(let n=0;n<5;n++)c.push({id:n,name:"name_"+n,x:Math.random()+100,y:Math.random()+30,_disabled:n%3===0,date:new Date().toLocaleDateString()});const D=[];for(let n=0;n<1e3;n++)D.push({id:n,name:"name_"+n,x:Math.random()+100,y:Math.random()+30,_disabled:n%3===0,date:new Date().toLocaleDateString()});const j=JSON.parse(JSON.stringify(c));let _;const[k,v]=L(!1),[H,O]=L(M);return[(()=>{const n=me();return R(F,n,()=>""),n.style.setProperty("width","0"),b(n,e(t,{dir:"v",size:32,get children(){return[e(x,{heading:2,children:"Table sheet"}),e(t,{id:"table_base",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(r,{columns:N,data:c}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"Basic usage"})}}),e(s,{type:"secondary",spacing:"extended",children:"Basic usage, Type in Columns support Index and Checkbox"}),e(l,{get data(){return m.table_base}})]}})}}),e(t,{id:"table_border",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(r,{columns:g,data:c,border:!0}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"frame"})}}),e(s,{type:"secondary",spacing:"extended",children:"Add Border support border"}),e(l,{get data(){return m.table_border}})]}})}}),e(t,{id:"table_stripe",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(r,{columns:g,data:c,border:!0,stripe:!0}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"Zebra pattern"})}}),e(s,{type:"secondary",spacing:"extended",children:"Add Stripe to support zebra patterns"}),e(l,{get data(){return m.table_stripe}})]}})}}),e(t,{id:"table_fixedHeader",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(r,{columns:g,data:c,border:!0,stripe:!0,height:200}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"Fixed header"})}}),e(s,{type:"secondary",spacing:"extended",children:"After setting the attribute height, the header will be automatically fixed."}),e(l,{get data(){return m.table_fixedHeader}})]}})}}),e(t,{id:"table_fixedCol",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[(()=>{const a=w();return a.style.setProperty("width","800px"),b(a,e(r,{columns:B,data:c,border:!0,stripe:!0,height:200})),a})(),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"Fixed column"})}}),e(s,{type:"secondary",spacing:"extended",children:"By setting FIXED for the data columns as left or right, you can fix the required columns left and right."}),e(l,{get data(){return m.table_fixedCol}})]}})}}),e(t,{id:"table_highlight",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return[e(r,{columns:g,data:j,border:!0,highlight:!0,ref(a){const h=_;typeof h=="function"?h(a):_=a}}),(()=>{const a=w();return b(a,e(p,{type:"primary",onClick:()=>{_.clearSelect()},children:"Clear highlight"})),a})()]}}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"Highlight"})}}),e(s,{type:"secondary",spacing:"extended",children:"When you add Highlight to choose a line, you can display high, and you can remove it by the clearselect method."}),e(l,{get data(){return m.table_highlight}})]}})}}),e(t,{id:"table_size",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(r,{columns:g,data:c,size:"small",border:!0}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"Small size"})}}),e(s,{type:"secondary",spacing:"extended",children:"SIZE supports Small"}),e(l,{get data(){return m.table_size}})]}})}}),e(t,{id:"table_loading",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return[e(r,{columns:g,data:c,size:"small",border:!0,get loading(){return k()}}),(()=>{const a=w();return b(a,e(p,{type:"primary",onClick:()=>{v(!k())},children:"load/Finish"})),a})()]}}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"loading"})}}),e(s,{type:"secondary",spacing:"extended",children:"The loading attribute can cover a layer of loaded masks on the table"}),e(l,{get data(){return m.table_loading}})]}})}}),e(t,{id:"table_span",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return e(r,{columns:g,data:c,border:!0,spanMethod:(a,h,u,f)=>{if(u===0&&f===0)return[1,2];if(u===0&&f===1)return[0,0];if(u===2&&f===0)return[2,1];if(u===3&&f===0)return[0,0]}})}}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"Merger"})}}),e(s,{type:"secondary",spacing:"extended",children:"Set the attribute span method to specify the algorithm of the merger or columns."}),e(l,{get data(){return m.table_span}})]}})}}),e(t,{id:"table_checkbox",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return e(r,{columns:T,data:c})}}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"Choice box"})}}),e(s,{type:"secondary",spacing:"extended",children:"The Type is set in the column to checkbox, and the selection column can be added, and the rendering content can be customized through the render function"}),e(l,{get data(){return m.table_checkbox}})]}})}}),e(t,{id:"table_sort",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return e(r,{columns:P,data:c})}}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"Sort"})}}),e(s,{type:"secondary",spacing:"extended",get children(){return["By setting Sort: True to the Columns data item, the data can be sorted.",y(),"Sort type can be used to set a column to a sort during initialization. ",y(),"If you use remote sorting, you can set it up sortable: 'custom', After triggering the sorting event onSort, perform remote sorting and manually set the new data"]}}),e(l,{get data(){return m.table_sort}})]}})}}),e(t,{id:"table_resize",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(t,{dir:"v",style:{width:"100%",overflow:"auto"},get children(){return e(r,{columns:A,data:c,border:!0})}}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"Drag and dragging"})}}),e(s,{type:"secondary",spacing:"extended",children:"Set the attribute to a column to True. You can drag and adjust the width of the column. You need to turn on the Border property, and the column sets the Width property."}),e(l,{get data(){return m.table_resize}})]}})}}),e(t,{id:"table_data",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return[e(r,{columns:Y,get data(){return H()},border:!0,get loading(){return k()}}),(()=>{const a=w();return b(a,e(p,{type:"primary",onClick:()=>{v(!0),setTimeout(()=>{const h=[];for(let u=0;u<Math.random()*10;u++)h.push({name:"name_"+u,age:Math.round(10+Math.random()*50),address:"address "+u});O(h),v(!1)},500)},children:"Request data"})),a})()]}}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"dynamic data"})}}),e(s,{type:"secondary",spacing:"extended",children:"Dynamic settings data attribute"}),e(l,{get data(){return m.table_data}})]}})}}),e(t,{id:"table_tree",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return e(r,{columns:X,data:E,border:!0})}}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"Tree"})}}),e(s,{type:"secondary",spacing:"extended",get children(){return["When the data contains the Children field, it will be displayed in tree -shaped data. ",y(),"Open the attribute TREE in Columb, then the column will display the expansion/put away the icon. ",y(),"Set the data attribute_ShowChildren, the sub -data will be expanded by default."]}}),e(l,{get data(){return m.table_tree}})]}})}}),e(t,{id:"table_expand",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return e(r,{columns:J,data:M,border:!0})}}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"展开"})}}),e(s,{type:"secondary",spacing:"extended",get children(){return["When the contents of the table are more, it cannot be used when it is completely displayed. ",y(),"By setting one item for the COLUMNS data, specify Type: 'Expand', you can turn on the extension function. ",y(),"The rendering area is similar to the custom column template method, and the render function is used."]}}),e(l,{get data(){return m.table_expand}})]}})}}),e(t,{id:"table_largedata",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(t,{dir:"v",get children(){return e(r,{columns:g,data:D,border:!0,virtual:!0,height:300})}}),e(o,{align:"left",get children(){return e(i,{type:"primary",children:"List"})}}),e(s,{type:"secondary",spacing:"extended",get children(){return["In order to improve the rendering performance when the data volume of the table is large, you can use the virtual list by specifying the Virtual attribute and set the Height to high performance rendering tables ",y()]}}),e(l,{get data(){return m.table_largedata}})]}})}}),e(t,{dir:"v",size:24,id:"comp_api",get children(){return[e(x,{type:"primary",heading:3,children:"API"}),e(t,{id:"comp_props",dir:"v",get children(){return[e(x,{type:"primary",heading:4,children:"Table Props"}),e(r,{columns:C,data:z,border:!0,size:"small"})]}}),e(t,{id:"comp_column_props",dir:"v",get children(){return[e(x,{type:"primary",heading:4,children:"Column Props"}),e(r,{columns:C,data:z,border:!0,size:"small"})]}}),e(t,{id:"comp_events",dir:"v",get children(){return[e(x,{type:"primary",heading:4,children:"Events"}),e(r,{columns:I,data:le,border:!0,size:"small"})]}})]}})]}})),n})(),e(G,{data:se})]}export{we as default};
