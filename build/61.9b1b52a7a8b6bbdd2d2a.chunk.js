(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"955f3d75071f5294eb59":function(e,t,a){"use strict";a.r(t);var n,i=a("8af190b70a6bc55c6f1b"),r=a.n(i),o=(a("8a2d1b95e05b6a321e74"),a("435859b6b76fb67a754a")),s=a.n(o),u=a("b27e083e7741c2dccb3f"),l=a.n(u),c=a("b912ecc4473ae8a2ff0b"),m=a.n(c),d=a("921c0b8c557fe6ba5da8"),f=a.n(d),b=a("6938d226fd372a75cbf9"),p=a("2aea235afd5c55b8b19b"),v=a.n(p),y=a("4dd2a92e69dcbe1bab10"),g=a("873b08b59fbc642861bb"),h=a.n(g),w=a("e94e25c91c97baacaba3"),S=a.n(w),N=a("4f2c331fbef0a6b53010"),O=a.n(N),j=a("bea9ea6673f57669d8f2"),P=a("b701c9c5068c915d4789"),k=a("fd107da5869b7ae197ce"),x=a.n(k);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function A(e,t,a,i){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=i;else if(o>1){for(var s=new Array(o),u=0;u<o;u++)s[u]=arguments[u+3];t.children=s}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:n,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}var q=Object(b.withStyles)((function(e){return{listItem:{marginTop:e.spacing(1)}}}))((function(e){var t=e.classes,a=e.children;return A("li",{className:t.listItem},void 0,a)})),B={heading:function(e){var t,a,n=e.level,i=_(e,["level"]);switch(n){case 1:t="h4";break;case 2:t="subtitle1";break;case 3:t="h6";break;case 4:t="caption",a=!0;break;default:t=""}return r.a.createElement(f.a,E({},i,{gutterBottom:!0,variant:t,paragraph:a}))},listItem:function(e){e.tight,e.ordered;var t=_(e,["tight","ordered"]);return A(q,{},void 0,r.a.createElement(f.a,E({component:"span"},t)))},paragraph:function(e){return r.a.createElement(f.a,E({},e,{paragraph:!0}))}};function C(e){return r.a.createElement(x.a,E({renderers:B},e))}var I,F=a("20004eeded46443adb8c"),R=a("6e5df27b0b36e7acbe48");function T(e){return(T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t,a,n){I||(I="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),1===r)t.children=n;else if(r>1){for(var o=new Array(r),s=0;s<r;s++)o[s]=arguments[s+3];t.children=o}if(t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});return{$$typeof:I,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e,t){return!t||"object"!==T(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var J=H(f.a,{variant:"h4",gutterBottom:!0},void 0,"From the Firehouse"),L=H(C,{},void 0,"## Sample blog post\n\n#### April 1, 2020 by Olivier\n\n![Image of Flower]\n(https://res.cloudinary.com/ux-maestro/image/upload/v1530864853/boss/lily-3495722_1280.jpg)\n\nThis blog post shows a few different types of content that are supported and styled with\nMaterial styles. Basic typography, images, and code are all supported.\nYou can extend these by modifying `Markdown.js`.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\nSed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n\nCurabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.\nNullam id dolor id nibh ultricies vehicula ut id elit.\n\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\nAenean lacinia bibendum nulla sed consectetur.\n\n## Heading\n\nVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\nDuis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\n\n### Sub-heading\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\n\n    Example code block\n    Aenean lacinia bibendum nulla sed consectetur.\n    Etiam porta sem malesuada magna mollis euismod.\n    Fusce dapibus, tellus ac cursus commodo.\n    Tortor mauris condimentum nibh, ut fermentum massa.\n\n### Sub-heading\n\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo\nsit amet risus.\n\n![Image of Bird]\n(https://res.cloudinary.com/ux-maestro/image/upload/v1530864852/boss/dove-2516641_1280.jpg)\n\n - Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n - Donec id elit non mi porta gravida at eget metus.\n - Nulla vitae elit libero, a pharetra augue.\n\nDonec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.\n\n 1. Vestibulum id ligula porta felis euismod semper.\n 2. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n 3. Maecenas sed diam eget risus varius blandit sit amet non magna.\n\nCras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.\nVestibulum bibendum nisi eget magna malesuada, at mattis eros efficitur.\nVivamus facilisis quam ullamcorper iaculis gravida.\n"),W=H(y.m,{dataList:j.a}),Y=H(s.a,{item:!0,md:4,xs:12},void 0,H(F.a,{})),G=function(e){function t(){return M(this,t),$(this,z(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),a=t,(n=[{key:"render",value:function(){var e=this.props.classes;return H(i.Fragment,{},void 0,H("div",{className:e.root},void 0,H(s.a,{container:!0,spacing:3},void 0,H(s.a,{item:!0,md:8,xs:12},void 0,H("article",{className:e.article},void 0,H("div",{className:e.content},void 0,J,L,H(l.a,{className:e.dividerBordered}))),H("section",{className:e.socmedShare},void 0,H("div",{className:e.btnArea},void 0,H(f.a,{className:e.title},void 0,"Share to social media"),H(v.a,{variant:"outlined",size:"small",className:e.redBtn,type:"button"},void 0,H(h.a,{className:m()(e.leftIcon,e.iconSmall)}),"Socmed 1"),H(v.a,{variant:"outlined",size:"small",className:e.blueBtn,type:"button"},void 0,H(S.a,{className:m()(e.leftIcon,e.iconSmall)}),"Socmed 2"),H(v.a,{variant:"outlined",size:"small",className:e.cyanBtn,type:"button"},void 0,H(O.a,{className:m()(e.leftIcon,e.iconSmall)}),"Socmed 3"))),H(l.a,{className:e.dividerBordered}),H("section",{},void 0,H(f.a,{className:e.title},void 0,"Write comments"),W),H(f.a,{variant:"h6",className:e.title2,gutterBottom:!0},void 0,"Related Posts"),H(s.a,{container:!0,spacing:3},void 0,H(s.a,{item:!0,sm:4,xs:12},void 0,H(y.Hb,{title:"Post title",date:"Nov 12",desc:"Aenean facilisis vitae purus facilisis semper.",action:"Read more",image:P.a[5]})),H(s.a,{item:!0,sm:4,xs:12},void 0,H(y.Hb,{title:"Post title",date:"Nov 12",desc:"Aenean facilisis vitae purus facilisis semper.",action:"Read more",image:P.a[25]})),H(s.a,{item:!0,sm:4,xs:12},void 0,H(y.Hb,{title:"Post title",date:"Nov 12",desc:"Aenean facilisis vitae purus facilisis semper.",action:"Read more",image:P.a[45]})))),Y)))}}])&&V(a.prototype,n),r&&V(a,r),t}(r.a.Component);t.default=Object(b.withStyles)(R.a)(G)}}]);