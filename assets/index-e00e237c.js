import{c as _,u as F,i as b,a as e,S as a,I as s,T as l,t as w}from"./index-00bf0c33.js";import{T as f,C as r,B as h}from"./index-345cd19e.js";import{U as n}from"./index-d30a926d.js";import{D as d,a as c,C as T}from"./code-6666454f.js";import{P as p}from"./index-e4583d54.js";import{T as L}from"./index-0092c168.js";import{p as k,e as U}from"./columns-26981c48.js";import{h as x}from"./hljs-74a5c6d1.js";import"./index-812a7a1f.js";import"./_commonjsHelpers-725317a4.js";const z=`<Upload action="/test/file/upload/test" name="file" 
    onProgress={(e: any, file: any, fileList: any[]) => {
        console.log(file);
    }} onSuccess={() => {
        console.log('success');
    }} onError={(e: any) => {
        console.log(e);
    }}>
    <Button icon={<Icon name='upload'/>} type='primary'>Upload Files</Button>
</Upload>`,S=`<Upload action="/test/file/upload/test" name="file" accept="jpg" 
    defaultFileList={[
        {
            name: 'test.png',
            status: 'finished',
            size: 71183,
            preview: true,
            url: '/test/file/view/test/temp1.png',
        }
    ]}
    onProgress={(e: any, file: any, fileList: any[]) => {
        console.log(file);
    }} onSuccess={() => {
        console.log('success');
    }} onError={(e: any) => {
        console.log(e);
    }}>
    <Button icon={<Icon name='upload'/>} type='primary'>Upload Files</Button>
</Upload>`,C=`<Space dir="v">
    <Upload action="/test/file/upload/test" name="file" type="drag" data={data()} headers={headers} accept="jpg">
        <div class="cm-upload-drag-wrap">
            <Icon name='upload' size={32}/>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>
</Space>`,P=`<Space dir="v">
    <Upload action="/test/file/upload/test" listType="picture" name="file" data={data()} headers={headers} accept=".jpg,.jpeg" ref={upload}
        defaultFileList={[
            {
                name: 'test.png',
                status: 'finished',
                size: 71183,
                preview: true,
                url: '/test/file/view/test/temp1.png',
            }
        ]}>
            <Icon name='plus1' size={20}/>
    </Upload>
</Space>`,j=`<Upload action="/test/file/upload/test" name="file" data={data()} headers={headers} accept="jpg" ref={upload}
    defaultFileList={[
        {
            name: 'test.png',
            status: 'finished',
            size: 71183,
            preview: true,
            url: '/test/file/view/test/temp1.png',
        }
    ]}
    onProgress={(e: any, file: any, fileList: any[]) => {
        console.log(file);
    }} onSuccess={() => {
        console.log('success');
    }} onError={(e: any) => {
        console.log(e);
    }}>
        <Button icon={<Icon name='upload'/>} type='primary'>Upload Files</Button>
</Upload>

<Button type='primary' onClick={() => {
console.log(upload.getFileList());
}}>获取文件列表</Button>`,B=[{name:"classList",desc:"customize class",type:"Object",default:""},{name:"class",desc:"customize class",type:"string",default:""},{name:"style",desc:"Custom style",type:"Object",default:""},{name:"action",desc:"Uploaded address",type:"string",default:""},{name:"name",desc:"name Attributes",type:"string",default:""},{name:"multiple",desc:"Whether to support multiple files",type:"boolean",default:""},{name:"webkitdirectory",desc:"Whether to turn on the choice folder, Some browser applicable",type:"boolean",default:""},{name:"accept",desc:"Accept the file type uploaded",type:"string",default:""},{name:"beforeUpload",desc:"The hook before uploading the file, the parameter is uploaded, if you return false Or promise stops uploading",type:"Function",default:""},{name:"format",desc:"Support file type, and accept the difference is,format It is the suffix name of the identification file",type:"string[]",default:""},{name:"maxSize",desc:"File size limit, unit B",type:"Number",default:""},{name:"headers",desc:"Set the request head of uploading",type:"Object",default:""},{name:"withCredentials",desc:"Support sending cookie Voucher information",type:"boolean",default:""},{name:"data",desc:"The additional parameters attached when uploading",type:"Object",default:""},{name:"defaultFileList",desc:"List of files that have been uploaded by default",type:"Array",default:""},{name:"type",desc:"Upload control type, select|drag",type:"string",default:"select"},{name:"paste",desc:"Whether to support paste and upload files",type:"boolean",default:""},{name:"ref",desc:"Component reference",type:"any",default:""},{name:"getFileUrl",desc:"Custom preview URL address",type:"Function",default:""},{name:"listType",desc:"Types of the list picture",type:"boolean",default:""},{name:"onProgress",desc:"The hook when the file is uploaded, the return field is event, file, fileList",type:"Function",default:""},{name:"onSuccess",desc:"The hook when the file is successfully uploaded, and the back field is returned response, file, fileList",type:"Function",default:""},{name:"onError",desc:"The hook when the file fails when it fails, and the return field is error, file, fileList",type:"Function",default:""},{name:"onRemove",desc:"The hook when the file list is removed, and the return field is file, fileList",type:"Function",default:""},{name:"onPreview",desc:"Click the hook when the uploaded file Link, return field is file, able to pass file.response Get the service side and return data",type:"Function",default:""},{name:"onFormatError",desc:"File format verification hook when failed, The return field is file, fileList",type:"Function",default:""},{name:"onExceededSize",desc:"The file exceeds the hook when the specified size limit, The return field is file, fileList",type:"Function",default:""}],E=[{name:"onProgress",desc:"The hook when the file uploads",params:"event, file, fileList"},{name:"onSuccess",desc:"The hook when the file is successfully uploaded",params:"response, file, fileList"},{name:"onError",desc:"The hook when the file fails to upload",params:"error, file, fileList"},{name:"onRemove",desc:"The hook when the file list is removed",params:"file, fileList"},{name:"onPreview",desc:"Click the hook when the uploaded file link",params:"file"},{name:"onFormatError",desc:"File format verification hook when failed",params:"file, fileList"},{name:"onExceededSize",desc:"The file exceeds the hook when the specified size limit",params:"file, fileList"}],D=[{id:"upload_base",text:"Basic usage"},{id:"upload_defaultList",text:"Default list"},{id:"upload_drag",text:"Drag"},{id:"upload_pictures",text:"Photo Wall"},{id:"upload_getList",text:"Obtain list"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Attributes"},{id:"comp_events",text:"event"}],u={upload_base:z,upload_defaultList:S,upload_drag:C,upload_pictures:P,upload_getList:j},q=w('<div class="cm-upload-drag-wrap"><p>Click or drag files here to upload'),I=w('<div class="sys-ctx-main-left">');function K(){const[m,A]=_({field:"1"}),g={"x-token":"123456"};let o;return[(()=>{const y=I();return F(x,y,()=>""),b(y,e(a,{dir:"v",size:32,get children(){return[e(f,{heading:2,children:"Upload"}),e(a,{id:"upload_base",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(n,{action:"https://cqb325.gitee.io/cui-solid-doc/",name:"file",onProgress:(t,i,v)=>{console.log(i)},onSuccess:()=>{console.log("success")},onError:t=>{console.log(t)},get children(){return e(h,{get icon(){return e(s,{name:"upload"})},type:"primary",children:"Upload Files"})}}),e(d,{align:"left",get children(){return e(l,{type:"primary",children:"Basic usage"})}}),e(p,{type:"secondary",spacing:"extended",children:"Basic usage"}),e(c,{get data(){return u.upload_base}})]}})}}),e(a,{id:"upload_defaultList",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(n,{action:"https://cqb325.gitee.io/cui-solid-doc/",name:"file",accept:"jpg",defaultFileList:[{name:"test.png",status:"finished",size:71183,preview:!0,url:"https://cqb325.gitee.io/cui-solid-doc/logo.svg"}],onProgress:(t,i,v)=>{console.log(i)},onSuccess:()=>{console.log("success")},onError:t=>{console.log(t)},get children(){return e(h,{get icon(){return e(s,{name:"upload"})},type:"primary",children:"Upload Files"})}}),e(d,{align:"left",get children(){return e(l,{type:"primary",children:"Default list"})}}),e(p,{type:"secondary",spacing:"extended",children:"defaultFileList Can initialize the default list"}),e(c,{get data(){return u.upload_defaultList}})]}})}}),e(a,{id:"upload_drag",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(a,{dir:"v",get children(){return e(n,{action:"https://cqb325.gitee.io/cui-solid-doc/",name:"file",type:"drag",get data(){return m()},headers:g,accept:"jpg",get children(){const t=q(),i=t.firstChild;return b(t,e(s,{name:"upload",size:32}),i),t}})}}),e(d,{align:"left",get children(){return e(l,{type:"primary",children:"Drag"})}}),e(p,{type:"secondary",spacing:"extended",children:'type="drag" You can support dragging upload, The uploaded data is passed in using data, and the custom request header is transmitted through the Headers parameter'}),e(c,{get data(){return u.upload_drag}})]}})}}),e(a,{id:"upload_pictures",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(a,{dir:"v",get children(){return e(n,{action:"https://cqb325.gitee.io/cui-solid-doc/",listType:"picture",name:"file",get data(){return m()},headers:g,accept:".jpg,.jpeg",ref(t){const i=o;typeof i=="function"?i(t):o=t},defaultFileList:[{name:"test.png",status:"finished",size:71183,preview:!0,url:"https://cqb325.gitee.io/cui-solid-doc/logo.svg"}],get children(){return e(s,{name:"plus1",size:20})}})}}),e(d,{align:"left",get children(){return e(l,{type:"primary",children:"Photo Wall"})}}),e(p,{type:"secondary",spacing:"extended",children:'listType="picture" The file list is displayed in the form of photo wall'}),e(c,{get data(){return u.upload_pictures}})]}})}}),e(a,{id:"upload_getList",dir:"v",get children(){return e(r,{bordered:!0,get children(){return[e(n,{action:"https://cqb325.gitee.io/cui-solid-doc/",name:"file",get data(){return m()},headers:g,accept:"jpg",ref(t){const i=o;typeof i=="function"?i(t):o=t},defaultFileList:[{name:"test.png",status:"finished",size:71183,preview:!0,url:"https://cqb325.gitee.io/cui-solid-doc/logo.svg"}],onProgress:(t,i,v)=>{console.log(i)},onSuccess:()=>{console.log("success")},onError:t=>{console.log(t)},get children(){return e(h,{get icon(){return e(s,{name:"upload"})},type:"primary",children:"Upload Files"})}}),e(h,{type:"primary",onClick:()=>{console.log(o.getFileList())},children:"Get the file list"}),e(d,{align:"left",get children(){return e(l,{type:"primary",children:"Obtain list"})}}),e(p,{type:"secondary",spacing:"extended",children:"To obtain the reference of UPLOAD through Ref, you can call getfileList to get the file list"}),e(c,{get data(){return u.upload_getList}})]}})}}),e(a,{dir:"v",size:24,id:"comp_api",get children(){return[e(f,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"TimePicker Props"}),e(L,{columns:k,data:B,border:!0,size:"small"})]}}),e(a,{id:"comp_events",dir:"v",get children(){return[e(f,{type:"primary",heading:4,children:"Events"}),e(L,{columns:U,data:E,border:!0,size:"small"})]}})]}})]}})),y})(),e(T,{data:D})]}export{K as default};
