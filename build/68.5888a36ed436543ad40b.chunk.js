(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"772a3d73aeb1af91b5a5":function(e,t,a){"use strict";a.r(t);var o,n=a("8af190b70a6bc55c6f1b"),i=a.n(n),r=(a("8a2d1b95e05b6a321e74"),a("6938d226fd372a75cbf9")),c=a("ab4cb61bcb2dc161defb"),u=a("d7dd51e1bf6bfc2c9c3d"),s=a("41dbdc0b587d468aa65c"),m=[{with:"1",chat:[{id:"1_1",from:"contact",date:"May, 29 2018",time:"22:45",message:"Lorem ipsum dolor sit amet"},{id:"1_2",from:"me",date:"May, 29 2018",time:"22:45",message:"Pellentesque ac bibendum tortor"},{id:"1_3",from:"contact",date:"May, 30 2018",time:"09:20",message:"Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. "},{id:"1_4",from:"me",date:"May, 30 2018",time:"09:55",message:"Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque"},{id:"1_5",from:"me",date:"May, 30 2018",time:"09:58",message:"Integer orci justo"},{id:"1_6",from:"contact",date:"May, 30 2018",time:"09:58",message:"Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero. Quisque ut metus sit amet augue rutrum feugiat. Vestibulum bibendum nisi eget magna malesuada"}]},{with:"2",chat:[{id:"2_1",from:"contact",date:"May, 29 2018",time:"22:45",message:"Lorem ipsum dolor sit amet"},{id:"2_2",from:"me",date:"May, 29 2018",time:"22:45",message:"Pellentesque ac bibendum tortor"},{id:"2_3",from:"contact",date:"May, 30 2018",time:"09:20",message:"Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. "}]},{with:"3",chat:[{id:"3_1",from:"contact",date:"May, 29 2018",time:"22:45",message:"Lorem ipsum dolor sit amet"},{id:"3_2",from:"me",date:"May, 29 2018",time:"22:45",message:"Pellentesque ac bibendum tortor"}]},{with:"4",chat:[{id:"4_1",from:"contact",date:"May, 30 2018",time:"09:20",message:"Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. "},{id:"4_2",from:"me",date:"May, 30 2018",time:"09:55",message:"Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque"},{id:"4_3",from:"me",date:"May, 30 2018",time:"09:58",message:"Integer orci justo"},{id:"4_4",from:"contact",date:"May, 30 2018",time:"09:58",message:"Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero. Quisque ut metus sit amet augue rutrum feugiat. Vestibulum bibendum nisi eget magna malesuada"}]},{with:"5",chat:[]},{with:"6",chat:[]}],d=a("0d7f0986bcd2f33d8a2a"),l=a("1037a6e0d5914309f74c"),f=a.n(l),b=a("4dd2a92e69dcbe1bab10"),p=a("bf98e136023688c7a106"),y=a("86a52b44818b9d4ea07e"),h=function(e){return{type:y.I,items:e}},g=function(e){return{type:y.jb,person:e}},v={type:y.R},w=function(e){return{type:y.hb,message:e}},_={type:y.x},M=a("eebbc9f977e6e78f5b57");function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t,a,n){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),1===r)t.children=n;else if(r>1){for(var c=new Array(r),u=0;u<r;u++)c[u]=arguments[u+3];t.children=c}if(t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});return{$$typeof:o,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(r,e);var t,a,o,n,i=(t=r,function(){var e,a=k(t);if(q()){var o=k(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return O(this,e)});function r(){return D(this,r),i.apply(this,arguments)}return a=r,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchChatData,a=e.fetchContactData;t(m),a(s.a)}},{key:"render",value:function(){var e=f.a.name+" - Chat App",t=f.a.desc,a=this.props,o=a.classes,n=a.dataContact,i=a.showDetail,r=a.hideDetail,c=a.keyword,u=a.search,s=a.dataChat,m=a.chatSelected,l=a.sendMessage,p=a.remove,y=a.showMobileDetail;return j("div",{},void 0,j(d.Helmet,{},void 0,j("title",{},void 0,e),j("meta",{name:"description",content:t}),j("meta",{property:"og:title",content:e}),j("meta",{property:"og:description",content:t}),j("meta",{property:"twitter:title",content:e}),j("meta",{property:"twitter:description",content:t})),j("div",{className:o.root},void 0,j(b.s,{total:n.size,itemSelected:m,dataContact:n,showDetail:i,search:u,keyword:c}),j(b.l,{showMobileDetail:y,dataChat:s,chatSelected:m,dataContact:n,sendMessage:l,remove:p,hideDetail:r})))}}])&&S(a.prototype,o),n&&S(a,n),r}(i.a.Component),A=Object(u.connect)((function(e){return{force:e,dataContact:e.getIn(["contact","contactList"]),dataChat:e.getIn(["chat","activeChat"]),chatSelected:e.getIn(["chat","chatSelected"]),showMobileDetail:e.getIn(["chat","showMobileDetail"]),keyword:e.getIn(["contact","keywordValue"])}}),(function(e){return{fetchContactData:Object(c.bindActionCreators)(p.f,e),hideDetail:function(){return e(v)},fetchChatData:Object(c.bindActionCreators)(h,e),showDetail:Object(c.bindActionCreators)(g,e),search:Object(c.bindActionCreators)(p.i,e),sendMessage:Object(c.bindActionCreators)(w,e),remove:function(){return e(_)}}}))(P);t.default=Object(r.withStyles)(M.a)(A)}}]);