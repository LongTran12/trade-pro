(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"0bf1468f14a933f1ad60":function(e,o,t){"use strict";t.r(o);var n,i=t("8af190b70a6bc55c6f1b"),r=t("0d7f0986bcd2f33d8a2a"),a=t("1037a6e0d5914309f74c"),s=t.n(a),d=t("fd107da5869b7ae197ce"),c=t.n(d),u=t("4dd2a92e69dcbe1bab10"),p=t("188313d2a36e593a5011");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,o,t,i){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(o||0===a||(o={children:void 0}),1===a)o.children=i;else if(a>1){for(var s=new Array(a),d=0;d<a;d++)s[d]=arguments[d+3];o.children=s}if(o&&r)for(var c in r)void 0===o[c]&&(o[c]=r[c]);else o||(o=r||{});return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}function m(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function b(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,o){return!o||"object"!==l(o)&&"function"!==typeof o?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):o}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,o){return(v=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}var w=f(p.j,{}),g=f(p.m,{}),S=f(c.a,{source:"\n | innerWidth  |xs | sm  | md  | lg  | xl  |\n |--------|-----|----|----|----|----|----|\n | width  |   xs   |   sm   |   md   |   lg   |   xl |\n | smUp   |   show | hide  |\n | mdDown |        |       |     hide | show |\n"}),k=f(p.b,{}),j=f(p.c,{}),O=function(e){function o(){return m(this,o),h(this,y(o).apply(this,arguments))}var t,n,i;return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&v(e,o)}(o,e),t=o,(n=[{key:"render",value:function(){var e=s.a.name+" - Layout",o=s.a.desc,t="containers/Layouts/demos/";return f("div",{},void 0,f(r.Helmet,{},void 0,f("title",{},void 0,e),f("meta",{name:"description",content:o}),f("meta",{property:"og:title",content:e}),f("meta",{property:"og:description",content:o}),f("meta",{property:"twitter:title",content:e}),f("meta",{property:"twitter:description",content:o})),f(u.ob,{title:"Media Queries",icon:"ios-phone-portrait",desc:"CSS media queries is the idiomatic approach to make your UI responsive.. We provide some CSS-in-JS helpers to do so. In the following demo, we change the background color (red, blue & green) based on the screen width."},void 0,f("div",{},void 0,w,f(u.Tb,{componentName:t+"MediaQueries.js"}))),f(u.ob,{title:"With Width",icon:"ios-phone-landscape",desc:"Sometimes, using CSS isn't enough. You might want to change the React rendering tree based on the breakpoint value, in JavaScript. We provide a withWidth() higher-order component for this use case. In the following demo, we change the rendered DOM element (em, u, del & span) based on the screen width."},void 0,f("div",{},void 0,g,f(u.Tb,{componentName:t+"WIthWIdth.js"}))),f(u.ob,{overflowX:!0,title:"Hidden",icon:"ios-eye-outline",desc:"Hidden works with a range of breakpoints e.g. xsUp or mdDown, or one or more breakpoints e.g. only='sm' or only={['md', 'xl']}. Ranges and individual breakpoints can be used simultaneously to achieve very customized behavior. The ranges are inclusive of the specified breakpoints."},void 0,f("div",{},void 0,S,k,f(u.Tb,{componentName:t+"Breakpoint.js"}))),f(u.ob,{title:"Integration with Grid",icon:"ios-grid",desc:"It is quite common to alter Grid at different responsive breakpoints, and in many cases, you want to hide some of those elements."},void 0,f("div",{},void 0,j,f(u.Tb,{componentName:t+"BreakpointGrid.js"}))))}}])&&b(t.prototype,n),i&&b(t,i),o}(i.Component);o.default=O}}]);