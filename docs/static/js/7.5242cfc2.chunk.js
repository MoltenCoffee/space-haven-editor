/*! For license information please see 7.5242cfc2.chunk.js.LICENSE.txt */
(this["webpackJsonpspace-haven-editor"]=this["webpackJsonpspace-haven-editor"]||[]).push([[7],{602:function(e,t,a){"use strict";a.r(t);const i=async(e,t,a=e.name)=>{const r=[],n=[];for await(const s of e.values()){const c=`${a}/${s.name}`;"file"===s.kind?n.push(s.getFile().then((t=>(t.directoryHandle=e,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>c}))))):"directory"===s.kind&&t&&r.push(i(s,t,c))}return[...(await Promise.all(r)).flat(),...await Promise.all(n)]};t.default=async(e={})=>{e.recursive=e.recursive||!1;const t=await window.showDirectoryPicker();return i(t,e.recursive)}}}]);
//# sourceMappingURL=7.5242cfc2.chunk.js.map