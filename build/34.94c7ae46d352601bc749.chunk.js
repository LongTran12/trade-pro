(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"7b8665bfd13be1b228f5":function(e,t,r){"use strict";r.r(t);var n,o=r("8af190b70a6bc55c6f1b"),a=r("013d85ea6438da1a70f9"),i=(r("8a2d1b95e05b6a321e74"),r("1037a6e0d5914309f74c")),c=r.n(i),d=r("0d7f0986bcd2f33d8a2a"),f=r("6938d226fd372a75cbf9"),l=r("4dd2a92e69dcbe1bab10"),b=r("e2ef4ad969c690980b85"),s=(r("c639725979e9308c1be4"),r("416555ac9a781e1a15a4"),r("d832895bd7acb1c22fbe"),r("250d710a0099471f5667"),r("0b108e344ee29de20d53")),u=r("0b3cb19af78752326f59"),p=r("47215cc9f23c8e497a86");function m(e,t,r,o){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var c=new Array(i),d=0;d<i;d++)c[d]=arguments[d+3];t.children=c}if(t&&a)for(var f in a)void 0===t[f]&&(t[f]=a[f]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=Object(f.withStyles)(b.a)((function(e){e.classes;var t,r=Object(o.useContext)(s.a).isAdmin,n=c.a.name+" - All Member",i=c.a.desc,f=Object(a.b)(),b=f.t,u=f.i18n,v=y(Object(o.useState)([]),2),w=v[0],g=v[1];return Object(o.useEffect)((function(){console.log(p.b),p.b&&p.b.methods.getRootMembers().call().then((function(e){g(e)}))}),[p.b]),m("div",{},void 0,m(d.Helmet,{},void 0,m("title",{},void 0,n),m("meta",{name:"description",content:i}),m("meta",{property:"og:title",content:n}),m("meta",{property:"og:description",content:i}),m("meta",{property:"twitter:title",content:n}),m("meta",{property:"twitter:description",content:i})),r&&m(l.ob,{title:(t="network",u.exists(t)?b(t):t),icon:"ios-stats-outline",whiteBg:!0,overflowX:!0,desc:""},void 0,w.map((function(e,t){return m(h,{},t,m("h5",{},void 0,"Address:",m("span",{},void 0,e.address)),m(l.hb,{address:e.address}))}))))}));var h=u.a.div.withConfig({displayName:"AllMember__Wrap",componentId:"sc-18bipx6-0"})(["margin-bottom:25px;"])}}]);