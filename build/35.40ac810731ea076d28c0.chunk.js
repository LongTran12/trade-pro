(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"22514792ad8088f9ba3e":function(e,n,t){"use strict";t.r(n);var o,i=t("8af190b70a6bc55c6f1b"),a=(t("8a2d1b95e05b6a321e74"),t("0d939196e59ed73c94e6")),r=t("6938d226fd372a75cbf9"),l=t("b27e083e7741c2dccb3f"),c=t.n(l),s=(t("018747ec360b9a38e79d"),t("b912ecc4473ae8a2ff0b"),t("2abb2ecfab271efcf057")),d=t.n(s),u=t("f466c6fac21e2bd173f8"),f=t.n(u),m=t("f0d76769f542545382df"),p=t.n(m),v=t("a289f12938702445a8e7"),b=t.n(v),g=t("2de20a79156911f204a2"),h=t.n(g),y=t("03fb0036f9fdca151d0b"),w=(t("ea6e455a48985292da38"),t("07460803b00a50e0385f")),x=t("013d85ea6438da1a70f9"),j=(t("ff6e9e4426c40f54986b"),t("cced10b079020449fa4d"),t("ec15def0234cb7c142a8")),C=t("0b3cb19af78752326f59"),O=t("47215cc9f23c8e497a86"),S=t("0b108e344ee29de20d53");function k(e,n,t,i){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),1===r)n.children=i;else if(r>1){for(var l=new Array(r),c=0;c<r;c++)l[c]=arguments[c+3];n.children=l}if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function I(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],o=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(t.push(r.value),!n||t.length!==n);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var N,P=Object(r.withStyles)(w.a)((function(e){var n=e.classes,t=Object(i.useContext)(S.a).bonus,o=window.innerWidth,r=Object(x.b)(),l=r.t,c=r.i18n,s=function(e){return c.exists(e)?l(e):e},u=[{id:"address",label:s("address"),address:!0},{id:"id",label:s("action"),align:"right",hid:!0}],m=I(Object(i.useState)([]),2),v=m[0],g=m[1];Object(i.useEffect)((function(){O.a.methods.getBlackList().call().then((function(e){g(e.map((function(e,n){return{id:n,address:e}})))}))}),[]);var w=I(Object(i.useState)(!1),2),C=w[0],N=w[1],P=I(Object(i.useState)(""),2),M=P[0],A=P[1];return k(y.a,{className:n.root,noMargin:!0,title:s("Table Blacklist"),icon:"ios-basket-outline",whiteBg:!0,desc:""},void 0,k("div",{className:n.rootTable},void 0,k("div",{className:n.tableWrapper},void 0,k("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end"}},void 0,k(a.Button,{onClick:function(){return N(!0)},variant:"contained",color:"primary"},void 0,"Add Blacklist")),C&&k(j.Modal,{title:"Add BlackList",visible:C,onCancel:function(){return N(!1)},footer:null,width:o>=1200?"40%":"80%"},void 0,k(B,{},void 0,k(a.FormControl,{className:n.formControl},void 0,k(a.InputLabel,{htmlFor:"name-simple"},void 0,s("address")),k(a.Input,{id:"name-simple34",value:M,onChange:function(e){return A(e.target.value)}})),k(a.Button,{variant:"contained",size:"large",color:"primary",className:n.margin,onClick:function(){t.addBlackList(M,{value:0},(function(e){e?(console.log(e.message),j.message.error(e.message)):(j.message.info("Added blacklist success!"),console.log("Added blacklist success!"))}))}},void 0,"Submit"))),k(d.a,{padding:"default"},void 0,k(h.a,{},void 0,k(b.a,{},void 0,u.map((function(e){return k(p.a,{align:e.align,style:{minWidth:e.minWidth}},"column"+e.id,e.label)})))),k(f.a,{},void 0,v.map((function(e,n){return k(b.a,{hover:!0,role:"checkbox",tabIndex:-1},n,u.map((function(n,o){var i=e[n.id];return console.log("value",e),k(p.a,{align:n.align},o,n.address&&i,n.hid&&k(a.Button,{variant:"contained",color:"primary",onClick:function(){return n=e.address,console.log(n),void t.removeBlackList(n,{value:0},(function(e){e?(console.log(e.message),j.message.error(e.message)):(j.message.info("Removed blacklist success!"),console.log("Removed blacklist success!"))}));var n}},void 0,"Remove"))})))})))))))})),B=C.a.div.withConfig({displayName:"TableBlacklist__WrapInput",componentId:"sc-147aoez-0"})(["margin-bottom:1.5em;display:flex;align-items:flex-end;justify-content:space-between;input{width:100%;}.MuiFormControl-root{flex-basis:80%;margin-right:2em;}@media (max-width:480px){flex-wrap:wrap;justify-content:center;.MuiFormControl-root{flex-basis:100%;margin-right:0;margin-bottom:15px;}}"]),M=t("e2ef4ad969c690980b85"),A=t("4cad7676f6ad23a52c95");function F(e,n,t,o){N||(N="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),1===a)n.children=o;else if(a>1){for(var r=new Array(a),l=0;l<a;l++)r[l]=arguments[l+3];n.children=r}if(n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});return{$$typeof:N,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function _(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],o=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(t.push(r.value),!n||t.length!==n);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var L,T=Object(r.withStyles)(w.a)((function(e){var n=e.classes,t=Object(x.b)(),o=t.t,a=t.i18n,r=function(e){return a.exists(e)?o(e):e},l=_(Object(i.useState)([]),2),c=l[0],s=l[1];Object(i.useEffect)((function(){O.a.getPastEvents("BonusUSDI",{fromBlock:0,toBlock:"latest"},(function(e,n){var t=n.map((function(e,n){return{id:n,time:1e3*e.returnValues.time,total:{value:e.returnValues.total/Math.pow(10,6),nameCoin:"USDI"},percent:e.returnValues.percent.map((function(e){return"".concat(e/100,"%")})).toString()}}));s(t)}))}),[O.a]);var u=[{id:"id",label:r("ID"),formatid:!0},{id:"time",label:r("Time"),format:!0},{id:"percent",label:r("Percent"),formatid:!0},{id:"total",label:r("Total"),align:"right",formatNo:!0}];return F(y.a,{className:n.root,noMargin:!0,title:r("Table Payed"),icon:"ios-basket-outline",whiteBg:!0,desc:""},void 0,F("div",{className:n.rootTable},void 0,F("div",{className:n.tableWrapper},void 0,F(d.a,{padding:"default"},void 0,F(h.a,{},void 0,F(b.a,{},void 0,u.map((function(e){return F(p.a,{align:e.align,style:{minWidth:e.minWidth}},"column"+e.id,e.label)})))),F(f.a,{},void 0,c.map((function(e,n){return F(b.a,{hover:!0,role:"checkbox",tabIndex:-1},n,u.map((function(n,t){var o=e[n.id];return F(p.a,{align:n.align},t,n.formatid&&o,n.format&&F("span",{},void 0,Object(A.default)(o).format("DD/MM/YYYY")),n.formatNo&&F("span",{},void 0,o.value," ",o.nameCoin))})))})))))))}));function W(e,n,t,o){L||(L="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),1===a)n.children=o;else if(a>1){for(var r=new Array(a),l=0;l<a;l++)r[l]=arguments[l+3];n.children=r}if(n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});return{$$typeof:L,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){$(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function $(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function z(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],o=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(t.push(r.value),!n||t.length!==n);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var G,R=W("span",{},void 0,"M6:"),Y=W("span",{},void 0,"M12:"),V=W("span",{},void 0,"M18:"),J=W("span",{},void 0,"Price"),U=W("div",{className:"title"},void 0,"Price:"),q=W("span",{},void 0,"Is Run:"),H=W("div",{className:"info-line"}),K=W(a.InputLabel,{htmlFor:"name-simple"},void 0,"M8"),Q=W(a.InputLabel,{htmlFor:"name-simple"},void 0,"M12"),X=W(a.InputLabel,{htmlFor:"name-simple"},void 0,"M18"),Z=function(){var e=window.innerWidth,n=Object(i.useContext)(S.a).bonus,t=z(Object(i.useState)(!0),2),o=t[0],r=(t[1],z(Object(i.useState)(100),2)),l=r[0],c=r[1],s=z(Object(i.useState)({m6:6,m12:12,m18:20}),2),d=s[0],u=s[1];Object(i.useEffect)((function(){O.a.methods.getPercent().call().then((function(e){u({m6:e[0]/100,m12:e[1]/100,m18:e[2]/100})}))}),[]),Object(i.useEffect)((function(){O.a.methods.priceOTF().call().then((function(e){c(e/100)}))}),[]);var f=function(e){u(D({},d,$({},e.target.name,e.target.value)))},m=d.m6,p=d.m12,v=d.m18,b=z(Object(i.useState)({bonus:!1,price:!1,percent:!1}),2),g=b[0],h=b[1];return W(y.a,{noMargin:!0,title:"Infomation",icon:"ios-basket-outline",whiteBg:!0,desc:""},void 0,W(a.Grid,{container:!0,spacing:4},void 0,W(ee,{},void 0,W(ne,{},void 0,W("div",{className:"name"},void 0,R,m,"%"),W("div",{className:"name"},void 0,Y,p,"%"),W("div",{className:"name"},void 0,V,v,"%"),W(a.Button,{onClick:function(){return h(D({},g,{percent:!0}))},variant:"contained",color:"primary"},void 0,"Change Percent")),W(ne,{},void 0,W("div",{className:"info-line"},void 0,J,l),W(a.Button,{onClick:function(){return h(D({},g,{price:!0}))},variant:"contained",color:"primary"},void 0,"Change price")),g.price&&W(j.Modal,{title:"Change Price",visible:g.price,onCancel:function(){return h(D({},g,{price:!1}))},footer:null,width:e>=1200?"30%":"80%"},void 0,W(te,{},void 0,W("div",{className:"isrun"},void 0,U,W("div",{className:"select"},void 0,W(a.FormControl,{},void 0,W(a.Input,{id:"name-simple34",value:l,onChange:function(e){return c(e.target.value)}})))),W(a.Button,{variant:"contained",size:"large",color:"primary",onClick:function(){console.log("bonus",l),n.changePrice(Math.floor(100*l),{value:0},(function(e){e?(console.log(e.message),j.message.error(e.message)):(j.message.info("Change price success!"),console.log("Change Price success!"))}))}},void 0,"Change Price"))),W(ne,{},void 0,W("div",{className:"info-line"},void 0,q,o?"true":"false"," "),H,W(a.Button,{onClick:function(){return console.log("bonus",o),void n.bonus({value:0},(function(e){e?(console.log(e.message),j.message.error(e.message)):(j.message.info("Bonus success!"),console.log("Bonus success!"))}))},variant:"contained",color:"primary"},void 0,"Bonus")),g.percent&&W(j.Modal,{title:"Change Percent",visible:g.percent,onCancel:function(){return h(D({},g,{percent:!1}))},footer:null,width:e>=1200?"40%":"80%"},void 0,W(te,{className:"percent"},void 0,W("div",{className:"isrun-e"},void 0,W("div",{className:"change-per"},void 0,W(a.FormControl,{},void 0,K,W(a.Input,{name:"m6",id:"name-simple34",value:m,onChange:f})),W(a.FormControl,{},void 0,Q,W(a.Input,{name:"m12",id:"name-simple34",value:p,onChange:f})),W(a.FormControl,{},void 0,X,W(a.Input,{name:"m18",id:"name-simple34",value:v,onChange:f})))),W(a.Button,{variant:"contained",size:"large",color:"primary",onClick:function(){console.log("bonus",d),n.changePercent(Math.floor(100*d.m6),Math.floor(100*d.m12),Math.floor(100*d.m18),{value:0},(function(e){e?(console.log(e.message),j.message.error(e.message)):(j.message.info("Change Perccent success!"),console.log("Change Perccent success!"))}))}},void 0,"Change"))))))},ee=C.a.div.withConfig({displayName:"BlackListInfomation__Wrap",componentId:"sc-4nge5y-0"})(["display:flex;justify-content:space-between;width:100%;.name,.info-line{margin:5px 0 10px;span{margin-right:15px;}}@media (max-width:480px){flex-wrap:wrap;}"]),ne=C.a.div.withConfig({displayName:"BlackListInfomation__Item",componentId:"sc-4nge5y-1"})(["width:30%;margin:15px;box-shadow:0 1px 3px rgba(0,0,0,0.2);text-align:center;padding:30px 15px;display:flex;flex-direction:column;justify-content:center;align-items:center;@media (max-width:480px){width:100%;}"]),te=C.a.div.withConfig({displayName:"BlackListInfomation__WrapInput",componentId:"sc-4nge5y-2"})(["display:flex;justify-content:space-between;align-items:center;.isrun{display:flex;align-items:center;font-size:16px;flex-wrap:wrap;.title{margin-right:15px;}.MuiFormGroup-root{display:flex;flex-direction:row;}.MuiFormControl-root{width:250px;}}.change-per{display:flex;align-items:center;}&.percent{align-items:flex-end;.isrun-e{.MuiFormControl-root{margin-right:10px;}}}@media (max-width:480px){flex-wrap:wrap;justify-content:center;.isrun{margin:15px 0;}.change-per{margin:15px 0;}}"]);function oe(e,n,t,o){G||(G="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),1===a)n.children=o;else if(a>1){for(var r=new Array(a),l=0;l<a;l++)r[l]=arguments[l+3];n.children=r}if(n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});return{$$typeof:G,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var ie=oe(a.Grid,{},void 0,oe(T,{})),ae=oe(a.Grid,{},void 0,oe(P,{})),re=oe(a.Grid,{},void 0,oe(Z,{}));n.default=Object(r.withStyles)(M.a)((function(e){var n=e.classes;return oe("div",{},void 0,ie,oe(c.a,{className:n.divider}),ae,oe(c.a,{className:n.divider}),re)}))}}]);