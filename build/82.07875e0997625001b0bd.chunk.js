(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"51fc7573a6908c5c63a1":function(t,e,n){"use strict";n.r(e);var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),c=(n("8a2d1b95e05b6a321e74"),n("435859b6b76fb67a754a")),a=n.n(c),f=n("0d7f0986bcd2f33d8a2a"),u=n("1037a6e0d5914309f74c"),s=n.n(u),b=n("ab4cb61bcb2dc161defb"),d=n("d7dd51e1bf6bfc2c9c3d"),m=n("54842915ef7097ebb6b8"),l=n("561b54665dad44e28695"),p=n("4dd2a92e69dcbe1bab10");function y(t){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,c=arguments.length-3;if(e||0===c||(e={children:void 0}),1===c)e.children=r;else if(c>1){for(var a=new Array(c),f=0;f<c;f++)a[f]=arguments[f+3];e.children=a}if(e&&i)for(var u in i)void 0===e[u]&&(e[u]=i[u]);else e||(e=i||{});return{$$typeof:o,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,e){return!e||"object"!==y(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var C=v(a.a,{item:!0,md:4,xs:12},void 0,v(p.Pb,{})),P=function(t){function e(){return h(this,e),g(this,O(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,t),n=e,(o=[{key:"componentDidMount",value:function(){(0,this.props.fetchData)(m.a)}},{key:"render",value:function(){var t=s.a.name+" - Social Media",e=s.a.desc,n=this.props,o=n.dataProps,r=n.submitPost,i=n.submitLike,c=n.submitComment,u=n.fetchComment,b=n.commentIndex,d=n.closeNotif,m=n.messageNotif;return v("div",{},void 0,v(f.Helmet,{},void 0,v("title",{},void 0,t),v("meta",{name:"description",content:e}),v("meta",{property:"og:title",content:t}),v("meta",{property:"og:description",content:e}),v("meta",{property:"twitter:title",content:t}),v("meta",{property:"twitter:description",content:e})),v(p.mb,{close:function(){return d()},message:m}),v(a.a,{container:!0,alignItems:"flex-start",justify:"flex-start",direction:"row",spacing:3},void 0,v(a.a,{item:!0,md:8,xs:12},void 0,v("div",{},void 0,v(p.gc,{submitPost:r}),v(p.Zb,{dataTimeline:o,onlike:i,submitComment:c,fetchComment:u,commentIndex:b}))),C))}}])&&w(n.prototype,o),r&&w(n,r),e}(i.a.Component),S=Object(d.connect)((function(t){return{force:t,dataProps:t.getIn(["socmed","dataTimeline"]),commentIndex:t.getIn(["socmed","commentIndex"]),messageNotif:t.getIn(["socmed","notifMsg"])}}),(function(t){return{fetchData:Object(b.bindActionCreators)(l.b,t),submitPost:Object(b.bindActionCreators)(l.d,t),submitComment:Object(b.bindActionCreators)(l.e,t),submitLike:Object(b.bindActionCreators)(l.f,t),fetchComment:Object(b.bindActionCreators)(l.c,t),closeNotif:function(){return t(l.a)}}}))(P);e.default=S}}]);