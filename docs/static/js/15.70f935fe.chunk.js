/*! For license information please see 15.70f935fe.chunk.js.LICENSE.txt */
(this["webpackJsonpspace-haven-editor"]=this["webpackJsonpspace-haven-editor"]||[]).push([[15],{607:function(e,t,i){"use strict";i.r(t),t.default=async(e,t={},i=null,a=!1)=>{t.fileName=t.fileName||"Untitled";const s={};if(t.mimeTypes?(t.mimeTypes.push(e.type),t.mimeTypes.map((e=>{s[e]=t.extensions||[]}))):s[e.type]=t.extensions||[],i)try{await i.getFile()}catch(e){if(i=null,a)throw e}const n=i||await window.showSaveFilePicker({suggestedName:t.fileName,types:[{description:t.description||"",accept:s}]}),c=await n.createWritable();return await c.write(e),await c.close(),n}}}]);
//# sourceMappingURL=15.70f935fe.chunk.js.map