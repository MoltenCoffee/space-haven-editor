(this["webpackJsonpspace-haven-editor"]=this["webpackJsonpspace-haven-editor"]||[]).push([[8],{102:function(e,l){var t=Object.prototype.hasOwnProperty;e.exports=function e(l,a){var r,n;if(l===a)return!0;if(l&&a&&(r=l.constructor)===a.constructor){if(r===Date)return l.getTime()===a.getTime();if(r===RegExp)return l.toString()===a.toString();if(r===Array){if((n=l.length)===a.length)for(;n--&&e(l[n],a[n]););return-1===n}if(!r||"object"===typeof l){for(r in n=0,l){if(t.call(l,r)&&++n&&!t.call(a,r))return!1;if(!(r in a)||!e(l[r],a[r]))return!1}return Object.keys(a).length===n}}return l!==l&&a!==a}},592:function(e,l,t){e.exports={wrapper:"researchflask_wrapper__MlBN6",flask:"researchflask_flask__2LOR7",iconWrapper:"researchflask_iconWrapper__3beLz",level1:"researchflask_level1__1mw_z researchflask_flask__2LOR7",level2:"researchflask_level2__2TkY- researchflask_flask__2LOR7",level3:"researchflask_level3__3IPj4 researchflask_flask__2LOR7"}},593:function(e,l,t){e.exports={progress:"researchitem_progress__2SqTc",progressBar:"researchitem_progressBar__31_nO",progressMark:"researchitem_progressMark__yAbEH",levelBar:"researchitem_levelBar__2mdWs",wrapper:"researchitem_wrapper__1Z6Ug",active:"researchitem_active__3Z94t",finished:"researchitem_finished__2UOAz"}},613:function(e,l,t){"use strict";t.r(l);var a=t(1),r=t(98),n=t(38),i=t(93),s=t(37),o=t(19),c=t(99),v=t(94),d=t(592),u=t.n(d),m=t(2);var h=({techId:e,onChange:l,ammount:t=0,level:a=1,max:r})=>{const n=u.a[`level${a}`];return Object(m.jsxs)("div",{className:u.a.wrapper,"data-techid":e,"data-level":a,children:[Object(m.jsx)("span",{role:"button",onClick:t<r?l:null,"data-action":"minus",children:"-"}),Object(m.jsxs)("div",{children:[Object(m.jsx)(v.FlaskConical,{className:n}),Object(m.jsx)("span",{className:u.a.iconWrapper,children:t})]}),Object(m.jsx)("span",{role:"button",onClick:t<r?l:null,"data-action":"plus",children:"+"})]})},b=t(593),f=t.n(b);var j=({tree:e,item:l,finished:t=!1,current:r=!1,index:n})=>{var i,v,d,u,b,j,p,_,O,x,q,g,k,w;const{editGameData:C}=Object(a.useContext)(o.a),R=null===l||void 0===l||null===(i=l._attributes)||void 0===i?void 0:i.techId,N=null===(v=c.a[e])||void 0===v?void 0:v[R];if(!R||!N||N.hidden)return null;const S=N.req.total,y=t?N.req.total:parseInt(null===(d=l.blocksDone)||void 0===d||null===(u=d._attributes)||void 0===u?void 0:u.level1,10)+parseInt(null===(b=l.blocksDone)||void 0===b||null===(j=b._attributes)||void 0===j?void 0:j.level2,10)+parseInt(null===(p=l.blocksDone)||void 0===p||null===(_=p._attributes)||void 0===_?void 0:_.level3,10),I=t?100:y?Math.floor(y/S*100):0,E=e=>{e.preventDefault();const l=e.currentTarget;C({type:`${l.dataset.action}Research`,id:l.parentNode.dataset.techid,index:n,level:`level${l.parentNode.dataset.level}`})};return Object(m.jsxs)("div",{className:Object(s.a)(f.a.wrapper,t&&f.a.finished,r&&f.a.active),children:[Object(m.jsx)("span",{children:N.name||"Unknown"}),I<100&&Object(m.jsxs)("div",{className:f.a.levelBar,children:[Object(m.jsx)(h,{level:1,techId:R,onChange:E,ammount:null===(O=l.blocksDone)||void 0===O||null===(x=O._attributes)||void 0===x?void 0:x.level1,max:N.req.level1}),Object(m.jsx)(h,{level:2,techId:R,onChange:E,ammount:null===(q=l.blocksDone)||void 0===q||null===(g=q._attributes)||void 0===g?void 0:g.level2,max:N.req.level2}),Object(m.jsx)(h,{level:3,techId:R,onChange:E,ammount:null===(k=l.blocksDone)||void 0===k||null===(w=k._attributes)||void 0===w?void 0:w.level3,max:N.req.level3})]}),Object(m.jsxs)("div",{className:f.a.progress,children:[Object(m.jsx)("div",{className:f.a.progressBar,style:{width:`${I}%`}}),Object(m.jsxs)("span",{className:f.a.progressMark,children:[I,"%"]})]})]})};var p=(e,l)=>{if(!Array.isArray(e))throw new TypeError("An array must be provided");return e.reduce(((e,t)=>((e=>{var t,a;return(null===(t=l[2535][e._attributes.techId])||void 0===t||null===(a=t.req)||void 0===a?void 0:a.total)<=parseInt(e.blocksDone._attributes.level1,10)+parseInt(e.blocksDone._attributes.level2,10)+parseInt(e.blocksDone._attributes.level3,10)})(t)?e.finished.push(t):e.rest.push(t),e)),{finished:[],rest:[]})};l.default=()=>{var e,l;const{gameData:{research:t}}=Object(a.useContext)(o.a),[s,v]=Object(a.useState)(null),[d]=Object(r.a)(p),u=t.active;return Object(a.useEffect)((()=>{if(t.states){(async()=>{v(await d(t.states,c.a))})()}}),[t.states]),Object(m.jsxs)(i.a,{children:[Object(m.jsx)(n.a,{level:2,children:"Research"}),Object(m.jsxs)("div",{children:[Object(m.jsx)(n.a,{level:3,children:"Active"}),"Active research:",(null===(e=c.a[t.tree])||void 0===e||null===(l=e[u])||void 0===l?void 0:l.name)||"None"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(n.a,{level:3,children:"Unfinished"}),(null===s||void 0===s?void 0:s.rest)?s.rest.map(((e,l)=>Object(m.jsx)(j,{current:u===e._attributes.techId,tree:t.tree,index:l,item:e},e._attributes.techId))):Object(m.jsx)("span",{children:"Loading..."})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(n.a,{level:3,children:"Finished"}),(null===s||void 0===s?void 0:s.finished)?s.finished.map(((e,l)=>Object(m.jsx)(j,{current:u===e._attributes.techId,finished:!0,tree:t.tree,index:l,item:e},e._attributes.techId))):Object(m.jsx)("span",{children:"Loading..."})]})]})}},90:function(e,l,t){e.exports={wrapper:"page_wrapper__1wO3F",internal:"page_internal__1hyjw",mainSection:"page_mainSection__28DiR",center:"page_center__2bm4Z",withScroll:"page_withScroll__p_JO7"}},91:function(e,l,t){e.exports={box:"navlink_box__OdQqZ",inner:"navlink_inner__k_XDU",active:"navlink_active__1Qr78"}},92:function(e,l,t){e.exports={wrapper:"sidebar_wrapper__2zrJm",list:"sidebar_list__313eR"}},93:function(e,l,t){"use strict";var a=t(37),r=t(4),n=t(90),i=t.n(n),s=t(1),o=t(94),c=t(87),v=t(16),d=t(91),u=t.n(d),m=t(2);var h=({children:e,to:l,onClick:t,icon:a})=>t?Object(m.jsx)("li",{className:u.a.box,children:Object(m.jsxs)("div",{role:"button",className:u.a.inner,onClick:t,children:[a,Object(m.jsx)("span",{children:e})]})}):Object(m.jsx)("li",{className:u.a.box,children:Object(m.jsx)(v.c,{to:l,activeClassName:u.a.active,children:Object(m.jsxs)("div",{className:u.a.inner,children:[a,Object(m.jsx)("span",{children:e})]})})}),b=t(19),f=t(92),j=t.n(f);var p=()=>{const{reset:e}=Object(s.useContext)(b.a);return Object(m.jsx)("div",{className:j.a.wrapper,children:Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{className:j.a.list,children:[Object(m.jsx)(h,{to:"/edit",icon:Object(m.jsx)(o.Circle,{}),children:Object(m.jsx)(c.a,{id:"home",defaultMessage:"Home"})}),Object(m.jsx)(h,{to:"/edit/research",icon:Object(m.jsx)(o.FlaskConical,{}),children:Object(m.jsx)(c.a,{id:"research",defaultMessage:"Research"})}),Object(m.jsx)(h,{to:"/edit/crew",icon:Object(m.jsx)(o.Users,{}),children:Object(m.jsx)(c.a,{id:"crew",defaultMessage:"Crew"})}),Object(m.jsx)(h,{to:"/edit/ships",icon:Object(m.jsx)(o.Plane,{}),children:Object(m.jsx)(c.a,{id:"ships",defaultMessage:"Ships"})}),Object(m.jsx)(h,{onClick:e,icon:Object(m.jsx)(o.Trash2,{}),children:Object(m.jsx)(c.a,{id:"discard",defaultMessage:"Discard"})})]})})})};l.a=({children:e,center:l,withScroll:t=!1})=>Object(r.g)().pathname.startsWith("/edit")?Object(m.jsxs)("main",{className:Object(a.a)(i.a.wrapper,i.a.internal),children:[Object(m.jsx)(p,{}),Object(m.jsx)("div",{className:Object(a.a)(i.a.mainSection,l&&i.a.center),children:e})]}):Object(m.jsx)("main",{className:Object(a.a)(i.a.wrapper,t&&i.a.withScroll,l&&i.a.center),children:e})},98:function(e,l,t){"use strict";t.d(l,"a",(function(){return u}));var a,r,n=t(1),i=t(102),s=function(e){return function(l){return Promise.resolve(e.fn.apply(e,l.data[0])).then((function(l){var t,a="auto"===e.transferable&&(t=l,"ArrayBuffer"in self&&t instanceof ArrayBuffer||"MessagePort"in self&&t instanceof MessagePort||"ImageBitmap"in self&&t instanceof ImageBitmap||"OffscreenCanvas"in self&&t instanceof OffscreenCanvas)?[l]:[];postMessage(["SUCCESS",l],a)})).catch((function(e){postMessage(["ERROR",e])}))}},o=function(e,l,t){var a="\n    "+function(e){return 0===e.length?"":"importScripts("+e.map((function(e){return"'"+e+"'"})).toString()+")"}(l)+";\n    onmessage=("+s+")({\n      fn: ("+e+"),\n      transferable: '"+t+"'\n    })\n  ",r=new Blob([a],{type:"text/javascript"});return URL.createObjectURL(r)};(r=a||(a={})).PENDING="PENDING",r.SUCCESS="SUCCESS",r.RUNNING="RUNNING",r.ERROR="ERROR",r.TIMEOUT_EXPIRED="TIMEOUT_EXPIRED";var c,v=a;!function(e){e.AUTO="auto",e.NONE="none"}(c||(c={}));var d={timeout:void 0,remoteDependencies:[],autoTerminate:!0,transferable:c.AUTO},u=function(e,l){void 0===l&&(l=d);var t,a,r,s=n.useState(v.PENDING),u=s[0],m=s[1],h=n.useRef(),b=n.useRef(!1),f=n.useRef({}),j=n.useRef(),p=n.useCallback((function(e){b.current=e===v.RUNNING,m(e)}),[]),_=n.useCallback((function(){var e;null!==(e=h.current)&&void 0!==e&&e._url&&(h.current.terminate(),URL.revokeObjectURL(h.current._url),f.current={},h.current=void 0,window.clearTimeout(j.current))}),[]),O=n.useCallback((function(e){(null!=l.autoTerminate?l.autoTerminate:d.autoTerminate)&&_(),p(e)}),[l.autoTerminate,_,p]),x=(t=function(){var t=l.remoteDependencies,a=l.timeout,r=void 0===a?d.timeout:a,n=l.transferable,i=o(e,void 0===t?d.remoteDependencies:t,void 0===n?d.transferable:n),s=new Worker(i);return s._url=i,s.onmessage=function(e){var l,t,a,r,n=e.data,i=n[1];switch(n[0]){case v.SUCCESS:null===(l=(t=f.current).resolve)||void 0===l||l.call(t,i),O(v.SUCCESS);break;default:null===(a=(r=f.current).reject)||void 0===a||a.call(r,i),O(v.ERROR)}},s.onerror=function(e){var l,t;null===(l=(t=f.current).reject)||void 0===l||l.call(t,e),O(v.ERROR)},r&&(j.current=window.setTimeout((function(){_(),p(v.TIMEOUT_EXPIRED)}),r)),s},r=n.useRef(a=[e,l,_]),i(r.current,a)||(r.current=a),n.useCallback(t,r.current)),q=n.useCallback((function(){var e=[].slice.call(arguments),t=l,a=t.transferable,r=void 0===a?d.transferable:a;return new Promise((function(l,t){var a,n;f.current=((a={}).resolve=l,a.reject=t,a);var i=r===c.AUTO?e.filter((function(e){return"ArrayBuffer"in window&&e instanceof ArrayBuffer||"MessagePort"in window&&e instanceof MessagePort||"ImageBitmap"in window&&e instanceof ImageBitmap||"OffscreenCanvas"in window&&e instanceof OffscreenCanvas})):[];null===(n=h.current)||void 0===n||n.postMessage([[].concat(e)],i),p(v.RUNNING)}))}),[p]),g=n.useCallback((function(){var e=null!=l.autoTerminate?l.autoTerminate:d.autoTerminate;return b.current?(console.error("[useWorker] You can only run one instance of the worker at a time, if you want to run more than one in parallel, create another instance with the hook useWorker(). Read more: https://github.com/alewin/useWorker"),Promise.reject()):(!e&&h.current||(h.current=x()),q.apply(void 0,[].slice.call(arguments)))}),[l.autoTerminate,x,q]),k={status:u,kill:_};return n.useEffect((function(){return function(){_()}}),[_]),[g,k]}},99:function(e,l,t){"use strict";l.a={2535:{2532:{req:{level1:150,level2:40,level3:10,total:200},name:"Scanner"},2533:{req:{level1:180,level2:40,level3:12,total:232},name:"Shield Generator"},2534:{req:{level1:100,level2:20,level3:25,total:145},name:"Energy Turret"},2538:{req:{level1:100,level2:30,level3:15,total:145},name:"Large Storage"},2539:{req:{level1:40,level2:0,level3:0,total:40},name:"Autopsy Table"},2559:{req:{level1:165,level2:60,level3:15,total:240},name:"Medical Bed"},2560:{req:{level1:80,level2:15,level3:0,total:95},name:"Growbed with Light"},2561:{req:{level1:80,level2:12,level3:0,total:92},name:"CO2 Producer"},2563:{req:{level1:125,level2:60,level3:20,total:205},name:"Arcade Machine"},2564:{req:{level1:120,level2:50,level3:10,total:180},name:"Jukebox"},2565:{req:{level1:180,level2:50,level3:10,total:240},name:"Solar Panel"},2566:{req:{level1:380,level2:80,level3:40,total:500},name:"X2 Power Generator"},2567:{req:{level1:420,level2:160,level3:80,total:660},name:"X3 Power Generator"},2568:{req:{level1:120,level2:60,level3:5,total:185},name:"Power Capacity Node"},2569:{req:{level1:150,level2:40,level3:6,total:195},name:"Item Fabricator"},2570:{req:{level1:60,level2:25,level3:0,total:85},name:"Micro-Weaver"},2571:{req:{level1:90,level2:10,level3:0,total:100},name:"Assembler"},2572:{req:{level1:160,level2:60,level3:10,total:230},name:"Energy Refinery"},2573:{req:{level1:180,level2:45,level3:8,total:233},name:"Chemical Refinery"},2574:{req:{level1:140,level2:40,level3:4,total:184},name:"Water Collector"},2575:{req:{level1:200,level2:80,level3:50,total:330},name:"Advanced Assembler"},2576:{req:{level1:85,level2:15,level3:0,total:100},name:"Composter"},2577:{req:{level1:280,level2:120,level3:25,total:425},name:"Hypersleep Chamber"},2581:{req:{level1:40,level2:0,level3:0,total:40},name:"Basic"},2583:{req:{level1:1,level2:0,level3:0,total:1},name:"Hyperium Hyperdrive"},2584:{req:{level1:50,level2:0,level3:0,total:50},name:"Chemical"},2585:{req:{level1:125,level2:25,level3:0,total:150},name:"Advanced"},2586:{req:{level1:350,level2:120,level3:40,total:510},name:"Optronic"},2587:{req:{level1:500,level2:250,level3:100,total:850},name:"Quantum"},2589:{req:{level1:125,level2:15,level3:0,total:140},name:"Weapons Console"},2590:{req:{level1:125,level2:15,level3:0,total:140},name:"Shields Console"},2591:{req:{level1:180,level2:75,level3:12,total:267},name:"Missile Turret"},2592:{req:{level1:160,level2:55,level3:10,total:225},name:""},2594:{req:{level1:160,level2:80,level3:10,total:250},name:"X1 Power Generator"},2595:{req:{level1:180,level2:60,level3:12,total:252},name:"X1 Hyperdrive"},2596:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2597:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2598:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2599:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2600:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2601:{req:{level1:400,level2:250,level3:120,total:770},name:"Targeting Jammer"},2602:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2604:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2605:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2606:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2607:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2609:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2610:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2611:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2612:{req:{level1:80,level2:20,level3:0,total:100},name:"Metal Refinery"},2613:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2614:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2617:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2618:{req:{level1:50,level2:0,level3:0,total:50},name:"Fabrics"},2619:{req:{level1:80,level2:20,level3:0,total:100},name:"Fibers"},2622:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2623:{req:{level1:40,level2:0,level3:0,total:40},name:"Botany"},2626:{req:{level1:120,level2:25,level3:10,total:155},name:"Advanced Nutrition"},2627:{req:{level1:120,level2:50,level3:25,total:195},name:"Space Food",hidden:!0},2628:{req:{level1:140,level2:60,level3:20,total:220},name:"Artificial Meat"},2629:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2630:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2635:{req:{level1:1,level2:0,level3:0,total:1},name:"",hidden:!0},2694:{req:{level1:400,level2:100,level3:50,total:550},name:"Optronics Fabricator"},2696:{req:{level1:60,level2:10,level3:0,total:70},name:"X1 Couch"},2847:{req:{level1:140,level2:80,level3:25,total:245},name:"Enslavement Facility"},3024:{req:{level1:150,level2:50,level3:25,total:225},name:"Logistics Robot Station"},3025:{req:{level1:200,level2:75,level3:50,total:325},name:"Salvage Robot Station"}}}}}]);
//# sourceMappingURL=8.52d6bbfc.chunk.js.map