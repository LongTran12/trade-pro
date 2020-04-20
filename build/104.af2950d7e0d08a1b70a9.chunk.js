(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{"1939f55e5fe32e2a059c":function(e,t,n){"use strict";n.r(t);var o,i=n("8af190b70a6bc55c6f1b"),r=n.n(i),a=n("0d7f0986bcd2f33d8a2a"),s=n("1037a6e0d5914309f74c"),c=n.n(s),l=n("435859b6b76fb67a754a"),d=n.n(l),p=n("4dd2a92e69dcbe1bab10"),u=n("05c8eb146240928faf44");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,i){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=i;else if(a>1){for(var s=new Array(a),c=0;c<a;c++)s[c]=arguments[c+3];t.children=s}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=b(u.Lb,{}),T=b(u.Ib,{}),j=b(u.ib,{}),S=b(u.jb,{}),P=b(u.bb,{}),M=b(u.j,{}),O=b(u.C,{}),N=b(u.Gb,{}),_=b(u.ab,{}),k=function(e){function t(){return f(this,t),y(this,h(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=c.a.name+" - UI Elements",t=c.a.desc,n="containers/UiElements/demos/DrawerMenu/";return b("div",{},void 0,b(a.Helmet,{},void 0,b("title",{},void 0,e),b("meta",{name:"description",content:t}),b("meta",{property:"og:title",content:e}),b("meta",{property:"og:description",content:t}),b("meta",{property:"twitter:title",content:e}),b("meta",{property:"twitter:description",content:t})),b(d.a,{container:!0,spacing:2},void 0,b(d.a,{item:!0,md:6},void 0,b(p.ob,{title:"Temporary drawer",icon:"ios-archive-outline",desc:"Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected."},void 0,b("div",{},void 0,g,b(p.Tb,{componentName:n+"TemporaryDrawer.js"})))),b(d.a,{item:!0,md:6},void 0,b(p.ob,{title:"Swipeable Temporary drawer",icon:"ios-exit",desc:"You can make the drawer swipeable with the SwipeableDrawer component."},void 0,b("div",{},void 0,T,b(p.Tb,{componentName:n+"SwipeDrawer.js"}))))),b(p.ob,{title:"Permanent drawer",icon:"ios-list-box-outline",desc:"Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed."},void 0,b("div",{},void 0,j,b(p.Tb,{componentName:n+"PermanentDrawer.js"}))),b(p.ob,{title:"Persistent drawer",icon:"ios-list-box-outline",desc:"Persistent navigation drawers can toggle open or closed. The drawer sits on the same surface elevation as the content. It is closed by default and opens by selecting the menu icon, and stays open until closed by the user."},void 0,b("div",{},void 0,S,b(p.Tb,{componentName:n+"PersistentDrawer.js"}))),b(p.ob,{title:"Mini variant drawer",icon:"ios-list",desc:"In this variation, the persistent navigation drawer changes its width. Its resting state is as a mini-drawer at the same elevation as the content, clipped by the app bar."},void 0,b("div",{},void 0,P,b(p.Tb,{componentName:n+"MiniDrawer.js"}))),b(p.ob,{title:"Basic Menu",icon:"ios-list",desc:"Basic menus open over the anchor element by default (this option can be changed via props). When close to a screen edge, simple menus vertically realign to make all menu items are completely visible."},void 0,b("div",{},void 0,M,b(p.Tb,{componentName:n+"BasicMenu.js"}))),b(d.a,{container:!0,spacing:2},void 0,b(d.a,{item:!0,md:6},void 0,b(p.ob,{title:"Selected menus",icon:"ios-list",desc:"If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element."},void 0,b("div",{},void 0,O,b(p.Tb,{componentName:n+"DropdownMenu.js"})))),b(d.a,{item:!0,md:6},void 0,b(p.ob,{title:"Styled Menu",icon:"ios-list-box",desc:"The MenuItem is a wrapper around ListItem with some additional styles."},void 0,b("div",{},void 0,N,b(p.Tb,{componentName:n+"StyledMenu.js"}))))),b(p.ob,{title:"Transition",icon:"ios-analytics-outline",desc:"Use a different transition altogether."},void 0,b("div",{},void 0,_,b(p.Tb,{componentName:n+"MenuTransition.js"}))))}}])&&v(n.prototype,o),i&&v(n,i),t}(r.a.Component);t.default=k}}]);