(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{e6c9eb1c4944dfb0b35e:function(e,t,a){"use strict";a.r(t);var r,n=a("8af190b70a6bc55c6f1b"),o=a.n(n),i=a("013d85ea6438da1a70f9"),l=(a("8a2d1b95e05b6a321e74"),a("1037a6e0d5914309f74c")),c=a.n(l),d=a("0d7f0986bcd2f33d8a2a"),u=a("6938d226fd372a75cbf9"),s=a("435859b6b76fb67a754a"),f=a.n(s),b=a("b27e083e7741c2dccb3f"),m=a.n(b),y=a("4dd2a92e69dcbe1bab10"),p=a("2aea235afd5c55b8b19b"),v=a.n(p),h=a("e727e731a9bed8ec3c2a"),g=a.n(h),w=a("10e4c616cb3b01bafafd"),S=a.n(w),k=a("1551459233b95bf53af9"),N=a.n(k),j=a("1e579025aece93aebe67"),O=a.n(j),x=a("eb6b79030a47f0b10efc"),C=a.n(x),P=a("250d710a0099471f5667"),T=a("018747ec360b9a38e79d"),A=a.n(T),B=a("b912ecc4473ae8a2ff0b"),I=a.n(B),V=a("2abb2ecfab271efcf057"),M=a.n(V),E=a("f466c6fac21e2bd173f8"),$=a.n(E),D=a("f0d76769f542545382df"),L=a.n(D),F=a("2de20a79156911f204a2"),W=a.n(F),U=a("a289f12938702445a8e7"),_=a.n(U),H=a("be638c054224589367e1"),K=a.n(H),J=a("07460803b00a50e0385f"),R=a("ff6e9e4426c40f54986b"),z=a.n(R),X=a("03fb0036f9fdca151d0b"),q=a("47215cc9f23c8e497a86"),G=a("0b108e344ee29de20d53"),Q=a("cced10b079020449fa4d"),Y=a.n(Q);function Z(e,t,a,n){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=n;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],r=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var te,ae=Object(u.withStyles)(J.a)((function(e){var t=e.classes,a=function(e){return!1===e?z.a.bgError:!0===e?z.a.bgSuccess:void 0},r=Object(i.b)(),l=r.t,c=r.i18n,d=function(e){return c.exists(e)?l(e):e},u=[{id:"tokenIcon",label:d("currency"),formatImage:"image"},{id:"tokenStatus",label:d("status"),formatSTT:"status"},{id:"tokenPrice",label:d("price"),format:function(e){return e.toFixed(2)}},{id:"total",label:d("total"),align:"right",format:function(e){return e.toFixed(2)}}],s=Object(n.useContext)(G.a).address,f=ee(o.a.useState([]),2),b=f[0],m=f[1];return Object(n.useEffect)((function(){s&&q.b&&q.b.getPastEvents("allEvents",{fromBlock:0,toBlock:"latest"},(function(e,t){if(e)console.log(e);else{var a=t.filter((function(e){return e.returnValues[0].toLowerCase()===s.toLowerCase()})).map((function(e){return{tokenIcon:(e.returnValues.currency,A.a),tokenName:"1"===e.returnValues.currency?"VNDC":"USDT",tokenStatus:"Buy"===e.event,tokenPrice:new Y.a(e.returnValues.price).dividedBy(Math.pow(10,6)).toNumber(),tokenAmount:new Y.a(e.returnValues.amount).dividedBy(Math.pow(10,18)).toNumber(),total:new Y.a(e.returnValues.price).dividedBy(Math.pow(10,6)).multipliedBy(e.returnValues.amount).dividedBy(Math.pow(10,18)).toNumber()}}));m(a)}}))}),[s]),Z(X.a,{whiteBg:!0,noMargin:!0,title:d("recentTrade"),icon:"ios-time-outline",desc:""},void 0,Z("div",{className:t.rootTable},void 0,Z(M.a,{padding:"default",className:t.tableSmall},void 0,Z(W.a,{},void 0,Z(_.a,{},void 0,u.map((function(e,t){return Z(L.a,{align:e.align,style:{minWidth:e.minWidth}},t,e.label)})))),Z($.a,{},void 0,b.map((function(e,r){return Z(_.a,{hover:!0,role:"checkbox",tabIndex:-1,key:"row-"+r},e.code,u.map((function(r,n){var o=e[r.id];return Z(L.a,{align:r.align,padding:"default"},"p-".concat(n),r.format&&"number"===typeof o&&r.format(o),r.formatImage&&Z("img",{width:30,height:30,alt:"",src:o}),"status"===r.formatSTT&&Z(K.a,!0===o?{label:d("buy"),className:I()(t.tableChip,a(!0))}:{label:d("sell"),className:I()(t.tableChip,a(!1))}))})))}))))))})),re=a("98b41f971f7301538e8d"),ne=a.n(re),oe=a("ea6e455a48985292da38"),ie=a("0d939196e59ed73c94e6");function le(e,t,a,r){te||(te="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),l=0;l<o;l++)i[l]=arguments[l+3];t.children=i}if(t&&n)for(var c in n)void 0===t[c]&&(t[c]=n[c]);else t||(t=n||{});return{$$typeof:te,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],r=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var de,ue=Object(u.withStyles)(J.a)((function(e){var t=e.classes,a=ce(o.a.useState([]),2),r=a[0],l=a[1],c=ce(o.a.useState(0),2),d=c[0],u=c[1],s=ce(o.a.useState(10),2),f=s[0],b=s[1],m=Object(i.b)(),y=m.t,p=m.i18n,v=function(e){return p.exists(e)?y(e):e},h=function(e){return!1===e?z.a.bgError:!0===e?z.a.bgSuccess:void 0},g=le("div",{},void 0,v("rowsPerPage")),w=[{id:"tokenIcon",label:v("token"),formatImage:"image"},{id:"historyDate",label:v("block"),align:"right",format:function(e){return e}},{id:"tokenName",label:v("name"),formatNo:"no"},{id:"tokenStatus",label:v("status"),formatSTT:"status"},{id:"tokenPrice",label:v("price"),align:"right",format:function(e){return e.toFixed(2)}},{id:"tokenAmount",label:v("amount"),align:"right",format:function(e){return e.toFixed(2)}},{id:"addressToken",label:v("address"),align:"right",formatNo:"no",disablePadding:!1}];Object(n.useEffect)((function(){q.b&&q.b.getPastEvents("allEvents",{fromBlock:0,toBlock:"latest"},(function(e,t){if(e)console.log(e);else{console.log(t);var a=t.map((function(e){return{tokenIcon:(e.returnValues.currency,A.a),tokenName:"1"===e.returnValues.currency?"VNDC":"USDT",tokenStatus:"Buy"===e.event,tokenPrice:new Y.a(e.returnValues.price).dividedBy(Math.pow(10,6)).toNumber(),tokenAmount:new Y.a(e.returnValues.amount).dividedBy(new Y.a(10).pow(18)).toNumber(),historyDate:e.blockNumber,addressToken:e.returnValues[0],tx:e.transactionHash}}));l(a)}}))}),[q.b]);var S=ce(Object(n.useState)(""),2),k=S[0],N=S[1];return le(X.a,{className:t.root,noMargin:!0,title:v("tradeHistory"),icon:"ios-basket-outline",whiteBg:!0,desc:""},void 0,le("div",{className:t.rootTable},void 0,le(oe.a,{numSelected:0,filterText:k,onUserInput:function(e){N(e.toLowerCase())},title:v("findCoin"),placeholder:"Search Coin"}),le("div",{className:t.tableWrapper},void 0,le(M.a,{padding:"default",className:I()(t.table,t.stripped,t.hover)},void 0,le(W.a,{},void 0,le(_.a,{},void 0,w.map((function(e){return le(L.a,{align:e.align,style:{minWidth:e.minWidth}},"column"+e.id,e.label)})))),le($.a,{},void 0,r.sort((function(e,t){return t.historyDate-e.historyDate})).slice(d*f,d*f+f).map((function(e,a){return-1!==e.tokenName.toLowerCase().indexOf(k)&&le(_.a,{hover:!0,role:"checkbox",tabIndex:-1},a,w.map((function(a,r){var n=e[a.id];return le(L.a,{align:a.align},r,"no"===a.formatNo&&n,a.format&&"number"===typeof n&&a.format(n),a.formatImage&&le("img",{width:30,height:30,alt:"",src:n}),"status"===a.formatSTT&&le(ie.Chip,!0===n?{label:v("buy"),className:I()(t.tableChip,h(!0))}:{label:v("sell"),className:I()(t.tableChip,h(!1))}))})))}))))),le(ne.a,{rowsPerPageOptions:[10,25,100],component:"div",count:r.length,rowsPerPage:f,page:d,onChangePage:function(e,t){u(t)},onChangeRowsPerPage:function(e){b(+e.target.value),u(0)},labelRowsPerPage:g})))})),se=a("e37f2ec273fb18a83399"),fe=a.n(se),be=a("ba5c7bde001ddea15c70"),me=a("4cadb7c4bbe933ae678b"),ye=a("f5393d1cf8c70394ca8e");function pe(e,t,a,r){de||(de="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),l=0;l<o;l++)i[l]=arguments[l+3];t.children=i}if(t&&n)for(var c in n)void 0===t[c]&&(t[c]=n[c]);else t||(t=n||{});return{$$typeof:de,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}var ve,he=Object(u.createMuiTheme)(fe.a.orangeTheme),ge={primary:he.palette.primary.main,secondary:he.palette.secondary.main},we=pe(be.B,{dataKey:"name",tickLine:!1}),Se=pe(be.f,{vertical:!1,strokeDasharray:"3 3"}),ke=pe(be.e,{vertical:!1}),Ne=pe(be.A,{}),je=pe(be.j,{}),Oe=Object(u.withStyles)(me.a)((function(e){var t=e.classes,a=Object(n.useContext)(ye.a).chart,r=Object(i.b)(),o=r.t,l=r.i18n,c=function(e){return l.exists(e)?o(e):e},d=["0.5$","0.75$","1$"],u=a&&a.order?a.order.map((function(e,t){return{name:d[t],seller:e/Math.pow(10,18),company:a.company[t]/Math.pow(10,18)}})):[];return pe("div",{className:t.chartFluid},void 0,pe(be.w,{},void 0,pe(be.d,{width:800,height:450,data:u,margin:{top:5,right:30,left:20,bottom:5}},void 0,we,pe(be.C,{axisLine:!1,tickSize:3,tickLine:!1,tick:{stroke:"none"}}),Se,ke,Ne,je,pe(be.c,{dataKey:"company",name:c("company"),stackId:"a",fillOpacity:"0.8",fill:ge.secondary}),pe(be.c,{dataKey:"seller",name:c("seller"),stackId:"a",fillOpacity:"0.8",fill:ge.primary}))))})),xe=a("e2ef4ad969c690980b85");function Ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Pe(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Pe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function Te(e,t,a,r){ve||(ve="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),l=0;l<o;l++)i[l]=arguments[l+3];t.children=i}if(t&&n)for(var c in n)void 0===t[c]&&(t[c]=n[c]);else t||(t=n||{});return{$$typeof:ve,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}var Ae=Te(P.a,{}),Be=Te(y.v,{}),Ie=Te(Oe,{}),Ve=Te(f.a,{item:!0,md:12,xs:12},void 0,Te(y.cc,{})),Me=Te(f.a,{item:!0,md:12,xs:12},void 0,Te(ue,{})),Ee=Te(f.a,{item:!0,md:12,xs:12},void 0,Te(ae,{})),$e=Te("br",{}),De=function(){var e=Object(i.b)(),t=e.t,a=e.i18n,r=function(e){return a.exists(e)?t(e):e},l=Object(n.useContext)(G.a).address,c=Ce(o.a.useState(!l),2),d=c[0],u=c[1];function s(){u(!1)}return Object(n.useEffect)((function(){l&&u(!1)}),[l]),Te(g.a,{open:d,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},void 0,Te(C.a,{id:"alert-dialog-title"},void 0,r("useMetamask")),Te(N.a,{},void 0,Te(O.a,{id:"alert-dialog-description"},void 0,r("warningPC"),$e,r("warningMobile"))),Te(S.a,{},void 0,Te(v.a,{onClick:s,color:"primary",autoFocus:!0},void 0,r("agree"))))},Le=Te(De,{});t.default=Object(u.withStyles)(xe.a)((function(e){var t,a=e.classes,r=c.a.name+" - Cryptocurrency Dashboard",n=c.a.desc,o=Object(i.b)(),l=o.t,u=o.i18n;return Te("div",{},void 0,Te(d.Helmet,{},void 0,Te("title",{},void 0,r),Te("meta",{name:"description",content:n}),Te("meta",{property:"og:title",content:r}),Te("meta",{property:"og:description",content:n}),Te("meta",{property:"twitter:title",content:r}),Te("meta",{property:"twitter:description",content:n})),Ae,Te(m.a,{className:a.divider}),Be,Te(m.a,{className:a.divider}),Te(y.ob,{title:(t="oteBuySell",u.exists(t)?l(t):t),icon:"ios-stats-outline",whiteBg:!0,overflowX:!0,desc:""},void 0,Ie),Te(m.a,{className:a.divider}),Te(f.a,{container:!0,spacing:3,className:a.root},void 0,Ve),Te(f.a,{container:!0,spacing:3,className:a.root},void 0,Me),Te(f.a,{container:!0,spacing:3,className:a.root},void 0,Ee),Le)}))}}]);