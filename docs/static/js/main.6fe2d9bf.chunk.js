(this["webpackJsonpspace-haven-editor"]=this["webpackJsonpspace-haven-editor"]||[]).push([[0],{21:function(e,a,t){e.exports={wrapper:"page_wrapper__1wO3F",internal:"page_internal__1hyjw",mainSection:"page_mainSection__28DiR",center:"page_center__2bm4Z"}},22:function(e,a,t){e.exports={progress:"researchitem_progress__2SqTc",progressBar:"researchitem_progressBar__31_nO",progressMark:"researchitem_progressMark__yAbEH",levelBar:"researchitem_levelBar__2mdWs",wrapper:"researchitem_wrapper__1Z6Ug",active:"researchitem_active__3Z94t"}},36:function(e,a,t){e.exports={box:"navlink_box__OdQqZ",inner:"navlink_inner__k_XDU",active:"navlink_active__1Qr78"}},37:function(e,a,t){e.exports={wrapper:"card_wrapper__2NX3z",inline:"card_inline__3rPcc",lighten:"card_lighten__1US7G",darken:"card_darken__1dHKE"}},38:function(e,a,t){e.exports={wrapper:"researchflask_wrapper__MlBN6",flask:"researchflask_flask__2LOR7",iconWrapper:"researchflask_iconWrapper__3beLz",level1:"researchflask_level1__1mw_z researchflask_flask__2LOR7",level2:"researchflask_level2__2TkY- researchflask_flask__2LOR7",level3:"researchflask_level3__3IPj4 researchflask_flask__2LOR7"}},39:function(e,a,t){e.exports={wrapper:"ship_wrapper__3yeAy",crewLink:"ship_crewLink__3a9hh",titleBar:"ship_titleBar__qvvWH"}},48:function(e,a,t){e.exports={heading:"heading_heading__2i3Kf",noFont:"heading_noFont__3Lj4O"}},49:function(e,a,t){e.exports={wrapper:"github_wrapper__2LYNf",logo:"github_logo__1ic0a"}},52:function(e,a,t){e.exports={button:"button_button__3MTwP"}},53:function(e,a,t){e.exports={msg:"upload_msg__1O_dC",error:"upload_error__2P5G4",notice:"upload_notice__3GZKP",warning:"upload_warning__3lVCy"}},54:function(e,a,t){e.exports={wrapper:"sidebar_wrapper__2zrJm",list:"sidebar_list__313eR"}},55:function(e,a,t){e.exports={wrapper:"crewmember_wrapper__1hOg5",charDetails:"crewmember_charDetails__1L_fm"}},584:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),l=t(64),c=t.n(l),s=(t(78),t(16)),i=t(588),o=t(5),d=t(18),v={"en-US":t(65)},u="en-US",j=t(6),m=t.n(j),h=t(10),b=t(12),p=t(35),O=t(33),f=t.n(O),x=function(){var e=Object(h.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.text();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",f.a.xml2js(t,{compact:true,alwaysArray:["c","ship","l"]}));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),_=function(){var e=Object(h.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.js2xml(a,{spaces:"\t",compact:true}));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),g=function(e){var a,t,n;if(!(null===e||void 0===e||null===(a=e.game)||void 0===a?void 0:a.ships))return null;var r=e.game,l=r.ships,c=r.crafts,s=r.research,i=r.playerBank,o={};if((null===l||void 0===l?void 0:l.ship)&&(o.ships=l.ship.map((function(e){var a,t={};return t.name=e._attributes.sname,t.id=e._attributes.sid,t.characters=(null===(a=e.characters)||void 0===a?void 0:a.c)||[],t}))),(null===c||void 0===c?void 0:c.c)&&(o.crafts=c.c.map((function(e){var a,t={};return t.id=e._attributes.id,t.name=e._attributes.cname||null,t.characters=(null===(a=e.characters)||void 0===a?void 0:a.c)||[],t}))),null===s||void 0===s||null===(t=s.states)||void 0===t?void 0:t.l){var d,v,u={};s.states.l.forEach((function(e){u[e._attributes.techId]=e})),o.research={states:u,tree:null===(d=s._attributes)||void 0===d?void 0:d.treeId,active:null===(v=s._attributes)||void 0===v?void 0:v.activeResearchId}}return o.bank={credits:null===i||void 0===i||null===(n=i._attributes)||void 0===n?void 0:n.ca},o},w=function(e,a){if(!a.ships||!a.crafts||!a.research||!a.bank)return null;var t=JSON.parse(JSON.stringify(e));return t.game.ships.ship.forEach((function(e){var t=a.ships.find((function(a){return a.id===e._attributes.sid}));e._attributes.sname=t.name,e.characters.c=t.characters})),t.game.crafts.c.forEach((function(e){var t=a.crafts.find((function(a){return a.id===e._attributes.id}));e._attributes.cname&&(e._attributes.cname=t.name),e.characters&&(e.characters.c=t.characters)})),t.game.research.states.l.forEach((function(e){e=a.research.states[e._attributes.techId]})),t.game.research._attributes.activeResearchId=a.research.active,t.game.research._attributes.treeId=a.research.tree,t.game.playerBank._attributes.ca=a.bank.credits,t},y=t(1),k=Object(n.createContext)(null),q=function(){return{}},C=function(e,a){var t=Object(b.a)({},e);switch(a.type){case"insert":return a.state;case"reset":return{};case"plusResearch":case"minusResearch":t.research.states[a.id].blocksDone._attributes[a.level]=parseInt(e.research.states[a.id].blocksDone._attributes[a.level],10)+1;break;case"setResearch":t.research.states[a.id].blocksDone._attributes[a.level]=a.value;break;case"setCredits":t.bank.credits=a.value;break;case"setShipName":var n=t.ships.findIndex((function(e){return e.name=a.name}));n>=0&&(t.ships[n].name=a.value);break;default:return null}return t},S=function(e){var a=e.children,t=Object(n.useState)(null),r=Object(s.a)(t,2),l=r[0],c=r[1],i=Object(n.useState)(null),o=Object(s.a)(i,2),d=o[0],v=o[1],u=Object(n.useReducer)(C,{},q),j=Object(s.a)(u,2),b=j[0],O=j[1],f=function(){var e=Object(h.a)(m.a.mark((function e(a){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c(a),!(t=a)){e.next=10;break}return console.log(t.handle),e.next=6,x(t);case 6:n=e.sent,v(n),O({type:"insert",state:g(n)});case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(m.a.mark((function e(){var a,t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w(d,b),e.next=3,_(a);case 3:return t=e.sent,n=new File([t],"game"),r=l.handle,console.log(n),e.next=9,Object(p.b)(n,{fileName:"game"},r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)(k.Provider,{value:{gameData:b,editGameData:O,gameFile:d,saveData:l,insertSaveData:f,retrieveGameData:S},children:a})},M=function(e){var a=e.element,t=e.fallback,r=Object(n.useContext)(k).gameData;return t||(t=Object(y.jsx)(o.a,{to:"/"})),r.ships?a:t},N=t(587),D=t(26),F=t(13),I=t(48),R=t.n(I),H=function(e){var a=e.level,t=void 0===a?1:a,n=e.noFont,r=void 0!==n&&n,l=e.children,c=Object(D.a)(e,["level","noFont","children"]),s="h".concat(t>=1||t<=6?t:1);return Object(y.jsx)(s,Object(b.a)(Object(b.a)({className:Object(F.a)(R.a.heading,(r||t>2)&&R.a.noFont)},c),{},{children:l}))},B=t(66),L=t.n(B),E=t(67),G=t(49),W=t.n(G),T=function(){var e=Object(E.a)().formatMessage;return Object(y.jsx)("div",{className:W.a.wrapper,children:Object(y.jsx)("a",{href:"https://github.com/MoltenCoffee/space-haven-editor",rel:"noreferrer noopener",target:"_blank",children:Object(y.jsx)("img",{className:W.a.logo,src:"github64.png",alt:e({id:"source_code",defaultMessage:"Source Code on GitHub"})})})})},P=function(){return Object(y.jsxs)("header",{className:L.a.wrapper,children:[Object(y.jsx)(H,{children:Object(y.jsx)(N.a,{id:"title",defaultMessage:"Space Haven Save Editor"})}),Object(y.jsx)(T,{})]})},A=t(68),U=t.n(A),J=function(){return Object(y.jsxs)("footer",{className:U.a.wrapper,children:[Object(y.jsx)(N.a,{id:"created_by",defaultMessage:"Created by"}),"\xa0",Object(y.jsx)("a",{href:"https://github.com/MoltenCoffee",rel:"noreferrer noopener",target:"_blank",children:"@MoltenCoffee"})]})},X=t(69),z=t.n(X),Z=function(e){var a=e.children;return Object(y.jsx)("div",{className:z.a.wrapper,children:a})},K=t(52),Q=t.n(K),V=function(e){var a=e.onClick,t=e.href,n=e.target,r=void 0===n?"_blank":n,l=e.children,c=Object(D.a)(e,["onClick","href","target","children"]);return t?Object(y.jsx)("a",Object(b.a)(Object(b.a)({href:t,className:Q.a.button,rel:"noreferrer noopener",target:r},c),{},{children:l})):Object(y.jsx)("button",Object(b.a)(Object(b.a)({onClick:function(e){e&&e.preventDefault(),a&&a(e)},className:Q.a.button},c),{},{children:l}))},Y=t(53),$=t.n(Y),ee=function(){var e=Object(E.a)().formatMessage,a=Object(n.useContext)(k).insertSaveData,t=Object(n.useState)(null),r=Object(s.a)(t,2),l=r[0],c=r[1],i=function(){var t=Object(h.a)(m.a.mark((function t(n){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(null),t.prev=1,t.next=4,Object(p.a)();case 4:r=t.sent,t.next=12;break;case 7:if(t.prev=7,t.t0=t.catch(1),"AbortError"!==t.t0.name){t.next=11;break}return t.abrupt("return");case 11:c({type:"error",text:e({id:"error_unknown",defaultMessage:"Something went wrong"})});case 12:return t.next=14,a(r);case 14:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)(V,{onClick:i,children:Object(y.jsx)(N.a,{id:"open_save",defaultMessage:"Open Save"})}),l&&Object(y.jsx)("span",{className:Object(F.a)($.a.msg,$.a[l.type]),children:l.text})]})},ae=t(21),te=t.n(ae),ne=t(14),re=t(36),le=t.n(re),ce=function(e){var a=e.children,t=e.to,n=e.icon;return Object(y.jsx)("li",{className:le.a.box,children:Object(y.jsx)(d.c,{to:t,activeClassName:le.a.active,children:Object(y.jsxs)("div",{className:le.a.inner,children:[n,Object(y.jsx)("span",{children:a})]})})})},se=t(54),ie=t.n(se),oe=function(){return Object(y.jsx)("div",{className:ie.a.wrapper,children:Object(y.jsx)("nav",{children:Object(y.jsxs)("ul",{className:ie.a.list,children:[Object(y.jsx)(ce,{to:"/edit",icon:Object(y.jsx)(ne.Circle,{}),children:Object(y.jsx)(N.a,{id:"home",defaultMessage:"Home"})}),Object(y.jsx)(ce,{to:"/edit/research",icon:Object(y.jsx)(ne.FlaskConical,{}),children:Object(y.jsx)(N.a,{id:"research",defaultMessage:"Research"})}),Object(y.jsx)(ce,{to:"/edit/crew",icon:Object(y.jsx)(ne.Users,{}),children:Object(y.jsx)(N.a,{id:"crew",defaultMessage:"Crew"})}),Object(y.jsx)(ce,{to:"/edit/ships",icon:Object(y.jsx)(ne.Plane,{}),children:Object(y.jsx)(N.a,{id:"ships",defaultMessage:"Ships"})}),Object(y.jsx)(ce,{to:"/",icon:Object(y.jsx)(ne.Trash2,{}),children:Object(y.jsx)(N.a,{id:"discard",defaultMessage:"Discard"})})]})})})},de=function(e){var a=e.children,t=e.center;return Object(o.g)().pathname.startsWith("/edit")?Object(y.jsxs)("main",{className:Object(F.a)(te.a.wrapper,te.a.internal),children:[Object(y.jsx)(oe,{}),Object(y.jsx)("div",{className:Object(F.a)(te.a.mainSection,t&&te.a.center),children:a})]}):Object(y.jsx)("main",{className:Object(F.a)(te.a.wrapper,t&&te.a.center),children:a})},ve=t(37),ue=t.n(ve),je=function(e){var a=e.children,t=e.inline,n=e.mode,r=void 0===n?"lighten":n,l=Object(D.a)(e,["children","inline","mode"]);return Object(y.jsx)("div",Object(b.a)(Object(b.a)({className:Object(F.a)(ue.a.wrapper,ue.a[r],t?ue.a.inline:null)},l),{},{children:a}))},me=t(70),he=t.n(me),be=function(e){var a=e.children;return Object(y.jsx)("div",{className:he.a.wrapper,children:a})},pe=function(){var e=Object(n.useContext)(k),a=e.saveData;return e.gameData.ships?Object(y.jsx)(o.a,{to:"/edit"}):Object(y.jsx)(de,{center:!0,children:Object(y.jsxs)(je,{style:{maxWidth:"25rem"},children:[Object(y.jsx)("h2",{children:Object(y.jsx)(N.a,{id:"welcome",defaultMessage:"Welcome!"})}),Object(y.jsx)("p",{children:"This website is still under development, figuring out how the save files work and what values map to what consequences in-game."}),Object(y.jsx)("h3",{children:Object(y.jsx)(N.a,{id:"upload_file",defaultMessage:"Upload save file"})}),a?Object(y.jsx)("p",{children:Object(y.jsx)(N.a,{id:"loading_dots",defaultMessage:"Loading..."})}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("p",{children:["Select the directory:",Object(y.jsx)("br",{}),Object(y.jsx)("i",{children:"-install location-/savegames/-save name-/-save folder-"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"The install location can be found by right-clicking the game in your steam library, 'manage' > 'browse local files'.",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"The save folder is either 'save' or 'autosaveX'"]}),Object(y.jsx)("p",{children:"This app works best (by a small margin) in Chrome"}),Object(y.jsx)(ee,{})]}),Object(y.jsx)("h3",{children:Object(y.jsx)(N.a,{id:"disclaimer",defaultMessage:"Disclaimer"})}),Object(y.jsx)("p",{children:"This app is not endorsed or supported by BugByte or Space Haven in any way. Be sure to follow them:"}),Object(y.jsxs)(be,{children:[Object(y.jsx)(V,{href:"https://store.steampowered.com/app/979110/Space_Haven/",children:"Steam"}),Object(y.jsx)(V,{href:"https://www.gog.com/game/space_haven",children:"GOG"}),Object(y.jsx)(V,{href:"https://bugbyte.fi/",children:"BugByte"}),Object(y.jsx)(V,{href:"https://bugbyte.fi/spacehaven/",children:"Space Haven"})]})]})})},Oe=function(){var e=Object(n.useContext)(k),a=e.gameData,t=e.editGameData,r=e.retrieveGameData,l=a.bank;return Object(y.jsxs)(de,{children:[Object(y.jsx)("h2",{children:Object(y.jsx)(N.a,{id:"welcome_comm",defaultMessage:"Welcome commander!"})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:Object(y.jsx)(N.a,{id:"edit_expl",defaultMessage:"Edit what you want, and return here to download the file again"})}),Object(y.jsxs)(V,{onClick:function(e){e.preventDefault(),r()},style:{fontSize:"120%"},children:[Object(y.jsx)(ne.Download,{}),Object(y.jsxs)("span",{children:["\xa0",Object(y.jsx)(N.a,{id:"download",defaultMessage:"Download"})]})]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h3",{children:Object(y.jsx)(N.a,{id:"general_edits",defaultMessage:"General edits"})}),Object(y.jsxs)("label",{children:[Object(y.jsxs)("span",{children:[Object(y.jsx)(N.a,{id:"credits_monetary",defaultMessage:"Credits"}),":"]}),Object(y.jsx)("input",{type:"number",value:parseInt(l.credits,10),onChange:function(e){t({type:"setCredits",value:e.target.value})}})]})]})]})},fe=t(71),xe=t.n(fe),_e=function(e){var a=e.type,t=Object(E.a)().formatMessage,n={health:t({id:"health",defaultMessage:"Health"}),energy:t({id:"energy",defaultMessage:"Energy"}),hunger:t({id:"hunger",defaultMessage:"Hunger"})};if(!n[a])return null;return Object(y.jsxs)("div",{children:[Object(y.jsx)("span",{children:n[a]}),Object(y.jsxs)("div",{className:xe.a.barWrapper,children:[Object(y.jsx)("div",{style:{width:"".concat(0,"%")}}),Object(y.jsxs)("span",{children:[0,"%"]})]})]})},ge=t(55),we=t.n(ge),ye={193:{name:""},194:{name:""},713:{name:""},714:{name:""},715:{name:""},751:{name:""},1003:{name:""},1033:{name:"Ate without table"},1053:{name:""},1058:{name:""},1059:{name:""},1060:{name:"Holding it in"},1061:{name:"It's so dark on this spaceship"},1062:{name:""},1063:{name:""},1064:{name:"Feeling Adventurous"},1065:{name:"Feeling Meaningful"},1066:{name:""},1096:{name:""},1108:{name:""},1109:{name:"Starvation"},1112:{name:"Low oxygen"},1118:{name:"CO2 condition"},1119:{name:"Hazardous gas"},1120:{name:"Smoke condition"},1121:{name:"Low body temperature"},1122:{name:""},1123:{name:""},1124:{name:""},1125:{name:""},1127:{name:"Lonely"},1430:{name:""},1550:{name:"Did something I love"},1561:{name:"Black eye"},1563:{name:"Did something I dislike"},1569:{name:"Uncomfortable environment"},1570:{name:"Feeling comfortable"},1581:{name:"Minor discomfort"},1582:{name:"Moderate discomfort"},1583:{name:"Major discomfort"},1584:{name:""},1585:{name:"Fearful"},1586:{name:"Terrified"},1587:{name:"Feeling left out"},1588:{name:""},1589:{name:""},1590:{name:""},1591:{name:""},1592:{name:""},1593:{name:""},1594:{name:""},1595:{name:""},1596:{name:""},1597:{name:""},1598:{name:""},1600:{name:""},1622:{name:"Heard a funny joke"},1623:{name:"Someone was mean to me"},1624:{name:"Got comforted"},1625:{name:""},1626:{name:"Someone thanked me"},1648:{name:""},1649:{name:""},1739:{name:""},1957:{name:""},2055:{name:""},2056:{name:""},2057:{name:""},2080:{name:""},2081:{name:""},2083:{name:""},2246:{name:""},2247:{name:""},2248:{name:""},2417:{name:""},2482:{name:""},2490:{name:""},2491:{name:""},2492:{name:""},2493:{name:""},2494:{name:""},2495:{name:""},2496:{name:""},2497:{name:""},2498:{name:""},2499:{name:""},2500:{name:""},2512:{name:""},2664:{name:""},2667:{name:"Protein deficiency"},2668:{name:""},2669:{name:""},2670:{name:""},2728:{name:""},2729:{name:""},2798:{name:"Received an electric shock"},2843:{name:"I was held as a slave"}},ke=function(e){var a=e.name,t=e.inSuit,n=void 0!==t&&t,r=e.gender,l=e.conditions,c=Object(E.a)().formatMessage;return Object(y.jsxs)("div",{className:we.a.wrapper,id:a,children:[Object(y.jsxs)("div",{className:we.a.charDetails,children:[Object(y.jsx)(H,{level:3,children:a}),Object(y.jsx)("span",{children:c("f"===r?{id:"gender_female",defaultMessage:"Female"}:{id:"gender_male",defaultMessage:"Male"})})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)(_e,{type:"Health"}),Object(y.jsx)(_e,{type:"Energy"}),Object(y.jsx)(_e,{type:"Hunger"})]}),Object(y.jsx)("div",{children:Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{type:"checkbox",checked:n,readOnly:!0}),Object(y.jsx)("span",{children:Object(y.jsx)(N.a,{id:"in_suit",defaultMessage:"in spacesuit"})})]})}),Object(y.jsxs)("div",{children:[Object(y.jsx)(H,{level:4,children:"Conditions"}),Object(y.jsx)("ul",{children:l.map((function(e){var a;return 0===parseInt(e._attributes.id,10)?null:Object(y.jsx)("li",{children:(null===(a=ye[e._attributes.id])||void 0===a?void 0:a.name)||"Unknown: ".concat(e._attributes.id)})}))})]})]})},qe=function(){var e=Object(n.useContext)(k).gameData.ships,a=[];return e.forEach((function(e){a=a.concat(e.characters)})),Object(y.jsxs)(de,{children:[Object(y.jsx)(H,{level:2,noFont:!0,children:"Crew"}),a.map((function(e){var a,t;return(null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.name)&&Object(y.jsx)(ke,{name:e._attributes.name,inSuit:null===(t=e._attributes)||void 0===t?void 0:t.is,gender:e._attributes.bs||e._attributes.bh,conditions:e.pers.conditions.c},e._attributes.name)}))]})},Ce={2535:{2532:{req:{level1:150,level2:40,level3:10},name:"Scanner"},2533:{req:{level1:180,level2:40,level3:12},name:"Shield Generator"},2534:{req:{level1:100,level2:20,level3:25},name:"Energy Turret"},2538:{req:{level1:100,level2:30,level3:15},name:"Large Storage"},2539:{req:{level1:40,level2:0,level3:0},name:"Autopsy Table"},2559:{req:{level1:165,level2:60,level3:15},name:"Medical Bed"},2560:{req:{level1:80,level2:15,level3:0},name:"Growbed with Light"},2561:{req:{level1:80,level2:12,level3:0},name:"CO2 Producer"},2563:{req:{level1:125,level2:60,level3:20},name:"Arcade Machine"},2564:{req:{level1:120,level2:50,level3:10},name:"Jukebox"},2565:{req:{level1:180,level2:50,level3:10},name:"Solar Panel"},2566:{req:{level1:380,level2:80,level3:40},name:"X2 Power Generator"},2567:{req:{level1:420,level2:160,level3:80},name:"X3 Power Generator"},2568:{req:{level1:120,level2:60,level3:5},name:"Power Capacity Node"},2569:{req:{level1:150,level2:40,level3:6},name:"Item Fabricator"},2570:{req:{level1:60,level2:25,level3:0},name:"Micro-Weaver"},2571:{req:{level1:90,level2:10,level3:0},name:"Assembler"},2572:{req:{level1:160,level2:60,level3:10},name:"Energy Refinery"},2573:{req:{level1:180,level2:45,level3:8},name:"Chemical Refinery"},2574:{req:{level1:140,level2:40,level3:4},name:"Water Collector"},2575:{req:{level1:200,level2:80,level3:50},name:"Advanced Assembler"},2576:{req:{level1:85,level2:15,level3:0},name:"Composter"},2577:{req:{level1:280,level2:120,level3:25},name:"Hypersleep Chamber"},2581:{req:{level1:40,level2:0,level3:0},name:"Basic"},2583:{req:{level1:1,level2:0,level3:0},name:"Hyperium Hyperdrive"},2584:{req:{level1:50,level2:0,level3:0},name:"Chemical"},2585:{req:{level1:125,level2:25,level3:0},name:"Advanced"},2586:{req:{level1:350,level2:120,level3:40},name:"Optronic"},2587:{req:{level1:500,level2:250,level3:100},name:"Quantum"},2589:{req:{level1:125,level2:15,level3:0},name:"Weapons Console"},2590:{req:{level1:125,level2:15,level3:0},name:"Shields Console"},2591:{req:{level1:180,level2:75,level3:12},name:"Missile Turret"},2592:{req:{level1:160,level2:55,level3:10},name:""},2594:{req:{level1:160,level2:80,level3:10},name:"X1 Power Generator"},2595:{req:{level1:180,level2:60,level3:12},name:"X1 Hyperdrive"},2596:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2597:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2598:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2599:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2600:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2601:{req:{level1:400,level2:250,level3:120},name:"Targeting Jammer"},2602:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2604:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2605:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2606:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2607:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2609:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2610:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2611:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2612:{req:{level1:80,level2:20,level3:0},name:"Metal Refinery"},2613:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2614:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2617:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2618:{req:{level1:50,level2:0,level3:0},name:"Fabrics"},2619:{req:{level1:80,level2:20,level3:0},name:"Fibers"},2622:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2623:{req:{level1:40,level2:0,level3:0},name:"Botany"},2626:{req:{level1:120,level2:25,level3:10},name:"Advanced Nutrition"},2627:{req:{level1:120,level2:50,level3:25},name:"Space Food",hidden:!0},2628:{req:{level1:140,level2:60,level3:20},name:"Artificial Meat"},2629:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2630:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2635:{req:{level1:1,level2:0,level3:0},name:"",hidden:!0},2694:{req:{level1:400,level2:100,level3:50},name:"Optronics Fabricator"},2696:{req:{level1:60,level2:10,level3:0},name:"X1 Couch"},2847:{req:{level1:140,level2:80,level3:25},name:"Enslavement Facility"},3024:{req:{level1:150,level2:50,level3:25},name:"Logistics Robot Station"},3025:{req:{level1:200,level2:75,level3:50},name:"Salvage Robot Station"}}},Se=t(38),Me=t.n(Se),Ne=function(e){var a=e.techId,t=e.onChange,n=e.ammount,r=void 0===n?0:n,l=e.level,c=void 0===l?1:l,s=Me.a["level".concat(c)];return Object(y.jsxs)("div",{className:Me.a.wrapper,"data-techid":a,"data-level":c,children:[Object(y.jsx)("span",{role:"button",onClick:t,"data-action":"minus",children:"-"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(ne.FlaskConical,{className:s}),Object(y.jsx)("span",{className:Me.a.iconWrapper,children:r})]}),Object(y.jsx)("span",{role:"button",onClick:t,"data-action":"plus",children:"+"})]})},De=t(22),Fe=t.n(De),Ie=function(e){var a,t,r,l,c,s,i,o,d,v,u,j,m,h,b=e.tree,p=e.item,O=e.current,f=Object(n.useContext)(k).editGameData,x=null===p||void 0===p||null===(a=p._attributes)||void 0===a?void 0:a.techId,_=null===(t=Ce[b])||void 0===t?void 0:t[x];if(!x||!_||_.hidden)return null;var g=parseInt(_.req.level1,10)+parseInt(_.req.level2,10)+parseInt(_.req.level3,10),w=parseInt(null===(r=p.blocksDone)||void 0===r||null===(l=r._attributes)||void 0===l?void 0:l.level1,10)+parseInt(null===(c=p.blocksDone)||void 0===c||null===(s=c._attributes)||void 0===s?void 0:s.level2,10)+parseInt(null===(i=p.blocksDone)||void 0===i||null===(o=i._attributes)||void 0===o?void 0:o.level3,10),q=w?Math.floor(w/g*100):0,C=function(e){e.preventDefault();var a=e.currentTarget;f({type:"".concat(a.dataset.action,"Research"),id:a.parentNode.dataset.techid,level:"level".concat(a.parentNode.dataset.level)})};return Object(y.jsxs)("div",{className:Object(F.a)(Fe.a.wrapper,x===O?Fe.a.active:null),children:[Object(y.jsx)("span",{children:_.name||"Unknown"}),q<100&&Object(y.jsxs)("div",{className:Fe.a.levelBar,children:[Object(y.jsx)(Ne,{level:1,techId:x,onChange:C,ammount:null===(d=p.blocksDone)||void 0===d||null===(v=d._attributes)||void 0===v?void 0:v.level1}),Object(y.jsx)(Ne,{level:2,techId:x,onChange:C,ammount:null===(u=p.blocksDone)||void 0===u||null===(j=u._attributes)||void 0===j?void 0:j.level2}),Object(y.jsx)(Ne,{level:3,techId:x,onChange:C,ammount:null===(m=p.blocksDone)||void 0===m||null===(h=m._attributes)||void 0===h?void 0:h.level3})]}),Object(y.jsxs)("div",{className:Fe.a.progress,children:[Object(y.jsx)("div",{className:Fe.a.progressBar,style:{width:"".concat(q,"%")}}),Object(y.jsxs)("span",{className:Fe.a.progressMark,children:[q,"%"]})]})]})},Re=function(){var e,a,t=Object(n.useContext)(k).gameData.research,r=t.states,l=t.active;return Object(y.jsxs)(de,{children:[Object(y.jsxs)("div",{children:["Active research:",(null===(e=Ce[t.tree])||void 0===e||null===(a=e[l])||void 0===a?void 0:a.name)||"None"]}),Object(y.jsx)("div",{children:r&&Object.keys(r).map((function(e){return Object(y.jsx)(Ie,{current:l,tree:t.tree,item:r[e]},r[e]._attributes.techId)}))})]})},He=t(39),Be=t.n(He),Le=function(e){var a=e.name,t=e.crew,r=Object(n.useContext)(k).editGameData,l=Object(n.useState)(!1),c=Object(s.a)(l,2),i=c[0],o=c[1],v=Object(n.createRef)();return Object(y.jsx)(je,{children:Object(y.jsxs)("div",{className:Be.a.wrapper,id:a,children:[Object(y.jsx)("div",{className:Be.a.titleBar,children:i?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("input",{defaultValue:a,ref:v}),Object(y.jsx)("button",{onClick:function(e){e.preventDefault(),o(!1),r({type:"setShipName",value:v.current.value,name:a})},children:Object(y.jsx)(N.a,{id:"change",defaultMessage:"Change"})}),Object(y.jsx)("button",{onClick:function(e){e.preventDefault(),o(!1)},children:Object(y.jsx)(N.a,{id:"reset",defaultMessage:"Reset"})})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(H,{level:3,noFont:!0,style:{marginRight:".5rem"},children:a}),Object(y.jsx)(ne.Edit3,{onClick:function(){o(!0)},height:"15",width:"15"})]})}),Object(y.jsxs)("div",{children:[Object(y.jsx)(H,{level:4,noFont:!0,children:Object(y.jsx)(N.a,{id:"crew",defaultMessage:"Crew"})}),null===t||void 0===t?void 0:t.map((function(e){return Object(y.jsx)(d.b,{to:"/edit/crew#".concat(e._attributes.name),children:Object(y.jsx)(je,{inline:!0,children:Object(y.jsx)("span",{className:Be.a.crewLink,children:e._attributes.name})})})}))]})]})})},Ee=function(){var e=Object(n.useContext)(k).gameData.ships;return console.log(e),Object(y.jsx)(de,{children:null===e||void 0===e?void 0:e.map((function(e){return Object(y.jsx)(Le,{name:e.name,crew:e.characters})}))})},Ge=function(){return Object(y.jsxs)(o.d,{children:[Object(y.jsx)(o.b,{path:"/",element:Object(y.jsx)(Oe,{})}),Object(y.jsx)(o.b,{path:"crew",element:Object(y.jsx)(qe,{})}),Object(y.jsx)(o.b,{path:"research",element:Object(y.jsx)(Re,{})}),Object(y.jsx)(o.b,{path:"ships",element:Object(y.jsx)(Ee,{})})]})},We=function(){var e=Object(n.useState)(localStorage.getItem("_locale")||null),a=Object(s.a)(e,2),t=a[0];a[1];return Object(y.jsx)(i.a,{messages:v,locale:t||u,defaultLocale:u,children:Object(y.jsx)(S,{children:Object(y.jsx)(d.a,{children:Object(y.jsxs)(Z,{children:[Object(y.jsx)(P,{}),Object(y.jsxs)(o.d,{children:[Object(y.jsx)(o.b,{path:"/",element:Object(y.jsx)(pe,{})}),Object(y.jsx)(M,{path:"edit/*",element:Object(y.jsx)(Ge,{})})]}),Object(y.jsx)(J,{})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=function(e){e&&e instanceof Function&&t.e(12).then(t.bind(null,600)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),l(e),c(e)}))};c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(We,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Te()},65:function(e){e.exports=JSON.parse('{"change":[{"type":0,"value":"Change"}],"created_by":[{"type":0,"value":"Created by"}],"crew":[{"type":0,"value":"Crew"}],"discard":[{"type":0,"value":"Discard"}],"energy":[{"type":0,"value":"Energy"}],"error_unknown":[{"type":0,"value":"Something went wrong"}],"gender_female":[{"type":0,"value":"Female"}],"gender_male":[{"type":0,"value":"Male"}],"health":[{"type":0,"value":"Health"}],"home":[{"type":0,"value":"Home"}],"hunger":[{"type":0,"value":"Hunger"}],"in_suit":[{"type":0,"value":"in spacesuit"}],"open_save":[{"type":0,"value":"Open Save"}],"research":[{"type":0,"value":"Research"}],"reset":[{"type":0,"value":"Reset"}],"ships":[{"type":0,"value":"Ships"}],"source_code":[{"type":0,"value":"Source Code on GitHub"}],"title":[{"type":0,"value":"Space Haven Save Editor"}],"welcome":[{"type":0,"value":"Welcome!"}],"welcome_comm":[{"type":0,"value":"Welcome commander!"}]}')},66:function(e,a,t){e.exports={wrapper:"header_wrapper__qgCxK"}},68:function(e,a,t){e.exports={wrapper:"footer_wrapper__1C--_"}},69:function(e,a,t){e.exports={wrapper:"layout_wrapper__ixEjb"}},70:function(e,a,t){e.exports={wrapper:"buttonbar_wrapper__3hyr6"}},71:function(e,a,t){e.exports={barWrapper:"crewstatbar_barWrapper__1rRZi"}},78:function(e,a,t){},84:function(e,a){},86:function(e,a){}},[[584,1,2]]]);
//# sourceMappingURL=main.6fe2d9bf.chunk.js.map