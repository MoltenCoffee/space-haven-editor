"use strict";(globalThis.webpackChunkspace_haven_editor=globalThis.webpackChunkspace_haven_editor||[]).push([[629],{629:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var a=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Array.isArray(t)&&(t=t[0]);const n=document.createElement("a");let a=e;"body"in e&&(a=await async function(e,t){const n=e.getReader(),a=new ReadableStream({start:e=>async function t(){return n.read().then((n=>{let{done:a,value:c}=n;if(!a)return e.enqueue(c),t();e.close()}))}()}),c=new Response(a),r=await c.blob();return n.releaseLock(),new Blob([r],{type:t})}(e.body,e.headers.get("content-type"))),n.download=t.fileName||"Untitled",n.href=URL.createObjectURL(await a);const c=()=>{"function"==typeof r&&r()},r=t.legacySetup&&t.legacySetup(c,(()=>r()),n);return n.addEventListener("click",(()=>{setTimeout((()=>URL.revokeObjectURL(n.href)),3e4),c()})),n.click(),null}}}]);
//# sourceMappingURL=629.a0574f7c.chunk.js.map