(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"4e2013be15520b349ddc":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),a=n("0d7f0986bcd2f33d8a2a"),c=n("1037a6e0d5914309f74c"),l=n.n(c),s=(n("8a2d1b95e05b6a321e74"),n("921c0b8c557fe6ba5da8")),f=n.n(s),u=n("bd183afcc37eabd79225"),p=n.n(u),d=n("e799c547a20a503b338f"),b=n.n(d),y=n("ef58856f4f875bd36582"),m=n.n(y),h=n("d1481ba7d88efe885afa"),v=n.n(h),g=n("6938d226fd372a75cbf9"),w=n("4dd2a92e69dcbe1bab10"),S=n("2aea235afd5c55b8b19b"),O=n.n(S),x=n("b27e083e7741c2dccb3f"),j=n.n(x),C=n("032687ae93dd27220e04"),_=n.n(C),N=n("f78fbec8da5e73e89414"),k=n.n(N),D=n("308def6ce6a3f6d2e753"),P=n.n(D),R=n("e727e731a9bed8ec3c2a"),I=n.n(R),T=n("10e4c616cb3b01bafafd"),E=n.n(T),A=n("1551459233b95bf53af9"),B=n.n(A),M=n("eb6b79030a47f0b10efc"),W=n.n(M),L=n("4c4d244037339663cf8b"),z=n.n(L);function U(e){return(U="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}if(t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function q(e,t){return!t||"object"!==U(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var Q,X=i.a.forwardRef((function(e,t){return i.a.createElement(z.a,K({direction:"up",ref:t},e))})),Y=function(e,t){var n=e;"3d_rotation"===e&&(n="three_d_rotation");for(var o=n.split("_"),r=0;r<o.length;r+=1)o[r]=o[r].charAt(0).toUpperCase()+o[r].slice(1);return t?o.join(" "):o.join("")},Z=$(f.a,{variant:"subtitle1",gutterBottom:!0},void 0,"Use with Font Icons"),ee=$(f.a,{variant:"subtitle1",gutterBottom:!0},void 0,"Use with SVG Material icons"),te=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(a,e);var t,n,o,r,i=(t=a,function(){var e,n=G(t);if(F()){var o=G(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return q(this,e)});function a(){return H(this,a),i.apply(this,arguments)}return n=a,(o=[{key:"render",value:function(){Object(C.registerLanguage)("jsx",k.a);var e=this.props,t=e.isOpenDetail,n=e.iconName,o=e.iconCode,r=e.closeDetail,i=this.props.classes,a="<Icon>"+n+"</Icon>",c="import "+Y(n,!1)+" from '@material-ui/icons/"+Y(n,!1)+"';",l="<"+Y(n,!1)+" />";return $(I.a,{open:t,TransitionComponent:X,keepMounted:!0,maxWidth:"md",onClose:r,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},void 0,$(W.a,{id:"alert-dialog-slide-title",className:i.title},void 0,Y(n,!0),"\xa0 (",o,")"),$(B.a,{},void 0,$("div",{className:i.bigIcon},void 0,$(m.a,{className:i.icon},void 0,n)),Z,$(_.a,{className:i.code,language:"jsx",style:P.a},void 0,'<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />'),$(_.a,{className:i.code,language:"jsx",style:P.a},void 0,"import Icon from '@material-ui/core/Icon';"),$(_.a,{className:i.code,language:"jsx",style:P.a},void 0,a),$(j.a,{className:i.divider}),ee,$(_.a,{className:i.code,language:"jsx",style:P.a},void 0,c),$(_.a,{className:i.code,language:"jsx",style:P.a},void 0,l)),$(E.a,{},void 0,$(O.a,{onClick:r,color:"primary"},void 0,"Close")))}}])&&J(n.prototype,o),r&&J(n,r),a}(i.a.Component),ne=Object(g.withStyles)((function(e){return{code:{fontSize:12,padding:"5px !important"},divider:{margin:"".concat(e.spacing(3),"px 0")},bigIcon:{textAlign:"center",marginBottom:30,color:e.palette.text.primary,"& span":{fontSize:128}},title:{marginBottom:40,fontSize:22,paddingBottom:20,position:"relative",fontWeight:500,color:e.palette.grey[700],textTransform:"uppercase","&:after":{content:'""',display:"block",position:"absolute",bottom:0,left:24,width:40,borderBottom:"5px solid ".concat(e.palette.primary.main)}}}}))(te),oe=n("b16c246271dc6a0735cf");function re(e){return(re="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t,n,o){Q||(Q="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var a=new Array(i),c=0;c<i;c++)a[c]=arguments[c+3];t.children=a}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:Q,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ae(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ce(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function le(e,t){return!t||"object"!==re(t)&&"function"!==typeof t?se(e):t}function se(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fe(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be="/api/icons?src=",ye=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(c,e);var t,n,o,r,i=(t=c,function(){var e,n=ue(t);if(fe()){var o=ue(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return le(this,e)});function c(){var e;ae(this,c);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return de(se(e=i.call.apply(i,[this].concat(n))),"state",{raws:[],loading:!1,openDetail:!1,iconName:"",iconCode:"",filterText:""}),de(se(e),"componentDidMount",(function(){e.setState({loading:!0},(function(){p.a.get(be+"material-icon.txt").then((function(e){return e.data.records[0].source})).then((function(e){return e.split("\n").map((function(e){var t=e.split(" ");return{name:t[0],code:t[1]}}))})).then((function(t){e.setState({raws:t,loading:!1})}))}))})),de(se(e),"handleOpenDetail",(function(t,n){e.setState({openDetail:!0,iconName:t,iconCode:n})})),de(se(e),"handleCloseDetail",(function(){e.setState({openDetail:!1})})),de(se(e),"handleSearch",(function(t){t.persist(),e.setState({filterText:t.target.value.toLowerCase()})})),e}return n=c,(o=[{key:"render",value:function(){var e=this,t=l.a.name+" - UI Elements",n=l.a.desc,o=this.state,r=o.raws,i=o.loading,c=o.openDetail,s=o.iconName,u=o.iconCode,p=o.filterText,d=this.props.classes;return ie("div",{},void 0,ie(a.Helmet,{},void 0,ie("title",{},void 0,t),ie("meta",{name:"description",content:n}),ie("meta",{property:"og:title",content:t}),ie("meta",{property:"og:description",content:n}),ie("meta",{property:"twitter:title",content:t}),ie("meta",{property:"twitter:description",content:n})),ie(w.ob,{title:"Material Icons",icon:"ios-flag-outline",desc:"Material icons are delightful, beautifully crafted symbols for common actions and items. System icons are designed to be simple, modern, friendly, and sometimes quirky. Each icon is reduced to its minimal form, expressing essential characteristics."},void 0,ie("div",{},void 0,i&&ie(v.a,{color:"secondary",className:d.preloader}),ie(oe.a,{filterText:p,handleSearch:function(t){return e.handleSearch(t)}}),ie("div",{className:d.iconsList},void 0,r.map((function(t,n){return-1!==t.name.toLowerCase().indexOf(p)&&ie("div",{className:d.iconWrap},n.toString(),ie(b.a,{title:"Click to see detail",onClick:function(){return e.handleOpenDetail(t.name,t.code)},className:d.btn},void 0,ie(m.a,{className:d.icon},void 0,t.name)),ie(f.a,{gutterBottom:!0,noWrap:!0},void 0,t.name))})),ie(ne,{closeDetail:this.handleCloseDetail,isOpenDetail:c,iconName:s,iconCode:u})))))}}])&&ce(n.prototype,o),r&&ce(n,r),c}(i.a.Component);t.default=Object(g.withStyles)((function(e){var t,n;return{hide:{display:"none"},iconsList:(t={display:"flex",flexWrap:"wrap",justifyContent:"space-between"},de(t,e.breakpoints.down("xs"),{justifyContent:"center"}),de(t,"overflow","auto"),de(t,"maxHeight",1e3),de(t,"position","relative"),t),iconWrap:(n={position:"relative",width:120,margin:20},de(n,e.breakpoints.down("xs"),{margin:10}),de(n,"textAlign","center"),n),btn:{display:"block",textAlign:"center",margin:"0 auto"},icon:{fontSize:48},preloader:{width:"100%"}}}))(ye)}}]);