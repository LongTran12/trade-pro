(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"67e447865336e1b2a655":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),a=n("0d7f0986bcd2f33d8a2a"),c=n("1037a6e0d5914309f74c"),u=n.n(c),f=(n("8a2d1b95e05b6a321e74"),n("6938d226fd372a75cbf9")),l=n("4dd2a92e69dcbe1bab10"),p=n("387190e83edf0e5eb8f6");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var c=new Array(a),u=0;u<a;u++)c[u]=arguments[u+3];t.children=c}if(t&&i)for(var f in i)void 0===t[f]&&(t[f]=i[f]);else t||(t=i||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?w(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){function t(){var e,n;y(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return g(w(n=m(this,(e=v(t)).call.apply(e,[this].concat(r)))),"state",{valueForm:[]}),n}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(o=[{key:"submitForm",value:function(e){var t=this;setTimeout((function(){t.setState({valueForm:e}),console.log("You submitted:\n\n".concat(t.state.valueForm)),window.location.href="/app"}),500)}},{key:"render",value:function(){var e=this,t=u.a.name+" - Login Version 3",n=u.a.desc,o=this.props.classes;return b("div",{className:o.rootFull},void 0,b(a.Helmet,{},void 0,b("title",{},void 0,t),b("meta",{name:"description",content:n}),b("meta",{property:"og:title",content:t}),b("meta",{property:"og:description",content:n}),b("meta",{property:"twitter:title",content:t}),b("meta",{property:"twitter:description",content:n})),b("div",{className:o.container},void 0,b("div",{className:o.fullFormWrap},void 0,b(l.Bb,{onSubmit:function(t){return e.submitForm(t)}}))))}}])&&d(n.prototype,o),r&&d(n,r),t}(i.a.Component);t.default=Object(f.withStyles)(p.a)(O)}}]);