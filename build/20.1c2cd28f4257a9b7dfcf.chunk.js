(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"018747ec360b9a38e79d":function(e,t,r){e.exports=r.p+"3dd44a183edaf9c52053587f8c499e46.png"},e6c9eb1c4944dfb0b35e:function(e,t,r){"use strict";r.r(t);var a,n=r("8af190b70a6bc55c6f1b"),o=r.n(n),i=r("013d85ea6438da1a70f9"),l=(r("8a2d1b95e05b6a321e74"),r("1037a6e0d5914309f74c")),c=r.n(l),u=r("0d7f0986bcd2f33d8a2a"),d=r("6938d226fd372a75cbf9"),s=r("435859b6b76fb67a754a"),f=r.n(s),b=r("b27e083e7741c2dccb3f"),m=r.n(b),y=r("4dd2a92e69dcbe1bab10"),p=r("2aea235afd5c55b8b19b"),v=r.n(p),h=r("e727e731a9bed8ec3c2a"),g=r.n(h),w=r("10e4c616cb3b01bafafd"),S=r.n(w),k=r("1551459233b95bf53af9"),j=r.n(k),N=r("1e579025aece93aebe67"),O=r.n(N),x=r("eb6b79030a47f0b10efc"),A=r.n(x),C=r("250d710a0099471f5667"),I=r("018747ec360b9a38e79d"),P=r.n(I),T=r("b912ecc4473ae8a2ff0b"),B=r.n(T),M=r("2abb2ecfab271efcf057"),$=r.n(M),E=r("f466c6fac21e2bd173f8"),V=r.n(E),D=r("f0d76769f542545382df"),U=r.n(D),L=r("2de20a79156911f204a2"),F=r.n(L),W=r("a289f12938702445a8e7"),_=r.n(W),H=r("be638c054224589367e1"),K=r.n(H),J=r("07460803b00a50e0385f"),R=r("ff6e9e4426c40f54986b"),z=r.n(R),X=r("03fb0036f9fdca151d0b"),q=r("47215cc9f23c8e497a86"),G=r("0b108e344ee29de20d53"),Q=r("cced10b079020449fa4d"),Y=r.n(Q);function Z(e,t,r,n){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=n;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}if(t&&o)for(var u in o)void 0===t[u]&&(t[u]=o[u]);else t||(t=o||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return te(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return te(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var re,ae=Object(d.withStyles)(J.a)((function(e){var t=e.classes,r=function(e){return!1===e?z.a.bgError:!0===e?z.a.bgSuccess:void 0},a=Object(i.b)(),l=a.t,c=a.i18n,u=function(e){return c.exists(e)?l(e):e},d=[{id:"tokenIcon",label:u("currency"),formatImage:"image"},{id:"tokenStatus",label:u("status"),formatSTT:"status"},{id:"tokenPrice",label:u("price"),format:function(e){return e.toFixed(2)}},{id:"total",label:u("total"),align:"right",format:function(e){return e.toFixed(2)}}],s=Object(n.useContext)(G.a).address,f=ee(o.a.useState([]),2),b=f[0],m=f[1];return Object(n.useEffect)((function(){s&&q.a&&q.a.getPastEvents("allEvents",{fromBlock:0,toBlock:"latest"},(function(e,t){if(e)console.log(e);else{var r=t.filter((function(e){return e.returnValues[0].toLowerCase()===s.toLowerCase()})).map((function(e){return{tokenIcon:(e.returnValues.currency,P.a),tokenName:"1"===e.returnValues.currency?"USDI":"USDT",tokenStatus:"Buy"===e.event,tokenPrice:new Y.a(e.returnValues.price).dividedBy(Math.pow(10,6)).toNumber(),tokenAmount:new Y.a(e.returnValues.amount).dividedBy(Math.pow(10,18)).toNumber(),total:new Y.a(e.returnValues.price).dividedBy(Math.pow(10,6)).multipliedBy(e.returnValues.amount).dividedBy(Math.pow(10,18)).toNumber()}}));m(r)}}))}),[s]),Z(X.a,{whiteBg:!0,noMargin:!0,title:u("recentTrade"),icon:"ios-time-outline",desc:""},void 0,Z("div",{className:t.rootTable},void 0,Z($.a,{padding:"default",className:t.tableSmall},void 0,Z(F.a,{},void 0,Z(_.a,{},void 0,d.map((function(e,t){return Z(U.a,{align:e.align,style:{minWidth:e.minWidth}},t,e.label)})))),Z(V.a,{},void 0,b.map((function(e,a){return Z(_.a,{hover:!0,role:"checkbox",tabIndex:-1,key:"row-"+a},e.code,d.map((function(a,n){var o=e[a.id];return Z(U.a,{align:a.align,padding:"default"},"p-".concat(n),a.format&&"number"===typeof o&&a.format(o),a.formatImage&&Z("img",{width:30,height:30,alt:"",src:o}),"status"===a.formatSTT&&Z(K.a,!0===o?{label:u("buy"),className:B()(t.tableChip,r(!0))}:{label:u("sell"),className:B()(t.tableChip,r(!1))}))})))}))))))})),ne=r("98b41f971f7301538e8d"),oe=r.n(ne),ie=r("ea6e455a48985292da38"),le=r("0d939196e59ed73c94e6");function ce(e,t,r,a){re||(re="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=a;else if(o>1){for(var i=new Array(o),l=0;l<o;l++)i[l]=arguments[l+3];t.children=i}if(t&&n)for(var c in n)void 0===t[c]&&(t[c]=n[c]);else t||(t=n||{});return{$$typeof:re,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function ue(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return de(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return de(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var se,fe=Object(d.withStyles)(J.a)((function(e){var t=e.classes,r=ue(o.a.useState([]),2),a=r[0],l=r[1],c=ue(o.a.useState(0),2),u=c[0],d=c[1],s=ue(o.a.useState(10),2),f=s[0],b=s[1],m=Object(i.b)(),y=m.t,p=m.i18n,v=function(e){return p.exists(e)?y(e):e},h=function(e){return!1===e?z.a.bgError:!0===e?z.a.bgSuccess:void 0},g=ce("div",{},void 0,v("rowsPerPage")),w=[{id:"tokenIcon",label:v("token"),formatImage:"image"},{id:"historyDate",label:v("block"),align:"right",format:function(e){return e}},{id:"tokenName",label:v("name"),formatNo:"no"},{id:"tokenStatus",label:v("status"),formatSTT:"status"},{id:"tokenPrice",label:v("price"),align:"right",format:function(e){return e.toFixed(2)}},{id:"tokenAmount",label:v("amount"),align:"right",format:function(e){return e.toFixed(2)}},{id:"addressToken",label:v("address"),align:"right",formatNo:"no",disablePadding:!1}];Object(n.useEffect)((function(){q.a&&q.a.getPastEvents("allEvents",{fromBlock:0,toBlock:"latest"},(function(e,t){if(e)console.log(e);else{console.log(t);var r=t.map((function(e){return{tokenIcon:(e.returnValues.currency,P.a),tokenName:"1"===e.returnValues.currency?"USDI":"USDT",tokenStatus:"Buy"===e.event,tokenPrice:new Y.a(e.returnValues.price).dividedBy(Math.pow(10,6)).toNumber(),tokenAmount:new Y.a(e.returnValues.amount).dividedBy(new Y.a(10).pow(18)).toNumber(),historyDate:e.blockNumber,addressToken:e.returnValues[0],tx:e.transactionHash}}));l(r)}}))}),[q.a]);var S=ue(Object(n.useState)(""),2),k=S[0],j=S[1];return ce(X.a,{className:t.root,noMargin:!0,title:v("tradeHistory"),icon:"ios-basket-outline",whiteBg:!0,desc:""},void 0,ce("div",{className:t.rootTable},void 0,ce(ie.a,{numSelected:0,filterText:k,onUserInput:function(e){j(e.toLowerCase())},title:v("findCoin"),placeholder:"Search Coin"}),ce("div",{className:t.tableWrapper},void 0,ce($.a,{padding:"default",className:B()(t.table,t.stripped,t.hover)},void 0,ce(F.a,{},void 0,ce(_.a,{},void 0,w.map((function(e){return ce(U.a,{align:e.align,style:{minWidth:e.minWidth}},"column"+e.id,e.label)})))),ce(V.a,{},void 0,a.sort((function(e,t){return t.historyDate-e.historyDate})).slice(u*f,u*f+f).map((function(e,r){return-1!==e.tokenName.toLowerCase().indexOf(k)&&ce(_.a,{hover:!0,role:"checkbox",tabIndex:-1},r,w.map((function(r,a){var n=e[r.id];return ce(U.a,{align:r.align},a,"no"===r.formatNo&&n,r.format&&"number"===typeof n&&r.format(n),r.formatImage&&ce("img",{width:30,height:30,alt:"",src:n}),"status"===r.formatSTT&&ce(le.Chip,!0===n?{label:v("buy"),className:B()(t.tableChip,h(!0))}:{label:v("sell"),className:B()(t.tableChip,h(!1))}))})))}))))),ce(oe.a,{rowsPerPageOptions:[10,25,100],component:"div",count:a.length,rowsPerPage:f,page:u,onChangePage:function(e,t){d(t)},onChangeRowsPerPage:function(e){b(+e.target.value),d(0)},labelRowsPerPage:g})))})),be=r("e37f2ec273fb18a83399"),me=r.n(be),ye=r("ba5c7bde001ddea15c70"),pe=r("4cadb7c4bbe933ae678b"),ve=r("f5393d1cf8c70394ca8e");function he(e,t,r,a){se||(se="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=a;else if(o>1){for(var i=new Array(o),l=0;l<o;l++)i[l]=arguments[l+3];t.children=i}if(t&&n)for(var c in n)void 0===t[c]&&(t[c]=n[c]);else t||(t=n||{});return{$$typeof:se,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var ge,we=Object(d.createMuiTheme)(me.a.orangeTheme),Se={primary:we.palette.primary.main,secondary:we.palette.secondary.main},ke=he(ye.B,{dataKey:"name",tickLine:!1}),je=he(ye.f,{vertical:!1,strokeDasharray:"3 3"}),Ne=he(ye.e,{vertical:!1}),Oe=he(ye.A,{}),xe=he(ye.j,{}),Ae=Object(d.withStyles)(pe.a)((function(e){var t=e.classes,r=Object(n.useContext)(ve.a).chart,a=Object(i.b)(),o=a.t,l=a.i18n,c=function(e){return l.exists(e)?o(e):e},u=["0.5$","0.51$","0.52$"],d=r&&r.order?r.order.map((function(e,t){return{name:u[t],seller:e/Math.pow(10,18),company:r.company[t]/Math.pow(10,18)}})):[];return he("div",{className:t.chartFluid},void 0,he(ye.w,{},void 0,he(ye.d,{width:800,height:450,data:d,margin:{top:5,right:30,left:20,bottom:5}},void 0,ke,he(ye.C,{axisLine:!1,tickSize:3,tickLine:!1,tick:{stroke:"none"}}),je,Ne,Oe,xe,he(ye.c,{dataKey:"company",name:c("company"),stackId:"a",fillOpacity:"0.8",fill:Se.secondary}),he(ye.c,{dataKey:"seller",name:c("seller"),stackId:"a",fillOpacity:"0.8",fill:Se.primary}))))})),Ce=r("e2ef4ad969c690980b85");function Ie(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Pe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Pe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function Te(e,t,r,a){ge||(ge="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=a;else if(o>1){for(var i=new Array(o),l=0;l<o;l++)i[l]=arguments[l+3];t.children=i}if(t&&n)for(var c in n)void 0===t[c]&&(t[c]=n[c]);else t||(t=n||{});return{$$typeof:ge,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var Be=Te(C.a,{}),Me=Te(y.v,{}),$e=Te(Ae,{}),Ee=Te(f.a,{item:!0,md:12,xs:12},void 0,Te(y.cc,{})),Ve=Te(f.a,{item:!0,md:12,xs:12},void 0,Te(fe,{})),De=Te(f.a,{item:!0,md:12,xs:12},void 0,Te(ae,{})),Ue=Te("br",{}),Le=function(){var e=Object(i.b)(),t=e.t,r=e.i18n,a=function(e){return r.exists(e)?t(e):e},l=Object(n.useContext)(G.a).address,c=Ie(o.a.useState(!l),2),u=c[0],d=c[1];function s(){d(!1)}return Object(n.useEffect)((function(){l&&d(!1)}),[l]),Te(g.a,{open:u,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},void 0,Te(A.a,{id:"alert-dialog-title"},void 0,a("useMetamask")),Te(j.a,{},void 0,Te(O.a,{id:"alert-dialog-description"},void 0,a("warningPC"),Ue,a("warningMobile"))),Te(S.a,{},void 0,Te(v.a,{onClick:s,color:"primary",autoFocus:!0},void 0,a("agree"))))},Fe=Te(Le,{});t.default=Object(d.withStyles)(Ce.a)((function(e){var t,r=e.classes,a=c.a.name+" - Cryptocurrency Dashboard",n=c.a.desc,o=Object(i.b)(),l=o.t,d=o.i18n;return Te("div",{},void 0,Te(u.Helmet,{},void 0,Te("title",{},void 0,a),Te("meta",{name:"description",content:n}),Te("meta",{property:"og:title",content:a}),Te("meta",{property:"og:description",content:n}),Te("meta",{property:"twitter:title",content:a}),Te("meta",{property:"twitter:description",content:n})),Be,Te(m.a,{className:r.divider}),Me,Te(m.a,{className:r.divider}),Te(y.ob,{title:(t="oteBuySell",d.exists(t)?l(t):t),icon:"ios-stats-outline",whiteBg:!0,overflowX:!0,desc:""},void 0,$e),Te(m.a,{className:r.divider}),Te(f.a,{container:!0,spacing:3,className:r.root},void 0,Ee),Te(f.a,{container:!0,spacing:3,className:r.root},void 0,Ve),Te(f.a,{container:!0,spacing:3,className:r.root},void 0,De),Fe)}))}}]);