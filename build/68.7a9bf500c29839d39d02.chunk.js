(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{d6661bfc647c78ed7360:function(t,e,n){"use strict";n.r(e);var o,r=n("8af190b70a6bc55c6f1b"),c=n.n(r),a=(n("8a2d1b95e05b6a321e74"),n("6938d226fd372a75cbf9")),i=n("ab4cb61bcb2dc161defb"),f=n("d7dd51e1bf6bfc2c9c3d"),u=n("41dbdc0b587d468aa65c"),l=n("0d7f0986bcd2f33d8a2a"),s=n("1037a6e0d5914309f74c"),d=n.n(s),b=n("40d978c4bb449333872a"),p=n("bf98e136023688c7a106"),y=n("4dd2a92e69dcbe1bab10"),m=n("eebbc9f977e6e78f5b57");n("013d85ea6438da1a70f9");function h(t,e,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),1===a)e.children=r;else if(a>1){for(var i=new Array(a),f=0;f<a;f++)i[f]=arguments[f+3];e.children=i}if(e&&c)for(var u in c)void 0===e[u]&&(e[u]=c[u]);else e||(e=c||{});return{$$typeof:o,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function v(t){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function O(t,e){return!e||"object"!==v(e)&&"function"!==typeof e?j(t):e}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(a,t);var e,n,o,r,c=(e=a,function(){var t,n=D(e);if(C()){var o=D(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return O(this,t)});function a(){var t;w(this,a);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return I(j(t=c.call.apply(c,[this].concat(n))),"submitContact",(function(e,n){var o=t.props.submit,r="object"===v(n)?URL.createObjectURL(n):n;o(e,null!==n?r:b.a.user.avatar)})),t}return n=a,(o=[{key:"componentDidMount",value:function(){(0,this.props.fetchData)(u.a)}},{key:"render",value:function(){var t=d.a.name+" - Contactss",e=d.a.desc,n=this.props,o=n.classes,r=n.dataContact,c=n.itemSelected,a=n.showDetail,i=n.hideDetail,f=n.avatarInit,u=n.open,s=n.showMobileDetail,b=n.add,p=n.edit,m=n.close,v=n.remove,w=n.favorite,g=n.keyword,O=n.search,j=n.closeNotif,C=n.messageNotif;return h("div",{},void 0,h(l.Helmet,{},void 0,h("title",{},void 0,t),h("meta",{name:"description",content:e}),h("meta",{property:"og:title",content:t}),h("meta",{property:"og:description",content:e}),h("meta",{property:"twitter:title",content:t}),h("meta",{property:"twitter:description",content:e})),h(y.mb,{close:function(){return j()},message:C}),h("div",{className:o.root},void 0,h(y.s,{addFn:!0,total:r.size,addContact:b,clippedRight:!0,itemSelected:c,dataContact:r,showDetail:a,search:O,keyword:g}),h(y.r,{showMobileDetail:s,hideDetail:i,dataContact:r,itemSelected:c,edit:p,remove:v,favorite:w})),h(y.c,{addContact:b,openForm:u,closeForm:m,submit:this.submitContact,avatarInit:f}))}}])&&g(n.prototype,o),r&&g(n,r),a}(c.a.Component),A=Object(f.connect)((function(t){return{force:t,avatarInit:t.getIn(["contact","avatarInit"]),dataContact:t.getIn(["contact","contactList"]),itemSelected:t.getIn(["contact","selectedIndex"]),keyword:t.getIn(["contact","keywordValue"]),open:t.getIn(["contact","openFrm"]),showMobileDetail:t.getIn(["contact","showMobileDetail"]),messageNotif:t.getIn(["contact","notifMsg"])}}),(function(t){return{fetchData:Object(i.bindActionCreators)(p.f,t),showDetail:Object(i.bindActionCreators)(p.j,t),hideDetail:function(){return t(p.g)},submit:Object(i.bindActionCreators)(p.k,t),edit:Object(i.bindActionCreators)(p.e,t),add:function(){return t(p.a)},close:function(){return t(p.c)},remove:Object(i.bindActionCreators)(p.h,t),favorite:Object(i.bindActionCreators)(p.b,t),search:Object(i.bindActionCreators)(p.i,t),closeNotif:function(){return t(p.d)}}}))(k);e.default=Object(a.withStyles)(m.a)(A)}}]);