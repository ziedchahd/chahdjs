import{z as s,a as h,m as C}from"./index-00bf0c33.js";import{I as i}from"./index-e4583d54.js";import{c as m}from"./createField-b596c149.js";function l(e){const[a,r]=m(e,"checked",!1),[n,t]=s(e,["checked","onChange"]);return h(i,C({get checked(){return a()},onChange:(o,c)=>{e.disabled||(r(o),n.onChange&&n.onChange(o,c))}},t))}export{l as C};