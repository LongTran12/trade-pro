(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"16a890c8f2434605ce7b":function(t,e,n){"use strict";n.r(e);var r,o=n("8af190b70a6bc55c6f1b"),a=n.n(o),i=(n("8a2d1b95e05b6a321e74"),n("6938d226fd372a75cbf9")),c=n("0d7f0986bcd2f33d8a2a"),s=n("1037a6e0d5914309f74c"),u=n.n(s),l={lanes:[{id:"PLANNED",title:"Planned Tasks",color:"#2096f3",label:"20/70"},{id:"WIP",title:"Work In Progress",color:"#AB47BC",label:"10/20"},{id:"BLOCKED",title:"Blocked",color:"#EC407A",label:"0/0"},{id:"COMPLETED",title:"Completed",color:"#43A047",label:"2/5"},{id:"ARCHIVED",title:"Archived2",color:"#FF5722",label:"1/1"}]},d=n("ab4cb61bcb2dc161defb"),f=n("d7dd51e1bf6bfc2c9c3d"),p=n("4dd2a92e69dcbe1bab10"),b=n("86a52b44818b9d4ea07e"),m=function(t){return{type:b.G,items:t}},y={type:b.a},h={type:b.A},v=function(t){return{type:b.mb,newBoard:t}},w=function(t){return{type:b.u,boardId:t}},g={type:b.s};function k(t){return(k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,e,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),1===i)e.children=o;else if(i>1){for(var c=new Array(i),s=0;s<i;s++)c[s]=arguments[s+3];e.children=c}if(e&&a)for(var u in a)void 0===e[u]&&(e[u]=a[u]);else e||(e=a||{});return{$$typeof:r,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function B(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function D(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){B(a,r,o,i,c,"next",t)}function c(t){B(a,r,o,i,c,"throw",t)}i(void 0)}))}}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t,e){return!e||"object"!==k(e)&&"function"!==typeof e?j(t):e}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=function(t){function e(){var t,n;O(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return _(j(n=C(this,(t=E(e)).call.apply(t,[this].concat(o)))),"state",{stateData:{lanes:[]}}),n}var n,r,o,a,i;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(e,t),n=e,(r=[{key:"componentWillMount",value:(i=D(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getBoard();case 2:return e=t.sent,t.next=5,this.props.fetchBoardData(e);case 5:this.setState({stateData:this.props.boardData.toJS()});case 6:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"getBoard",value:function(){var t=this;return new Promise((function(e){e(l),t.setState({dataLoaded:!0})}))}},{key:"handleSubmit",value:function(t){this.props.submit(t),this.setState({stateData:this.props.boardData.toJS()});var e=document.getElementById("task_wrap").firstElementChild.firstElementChild;e.scrollLeft=e.firstElementChild.offsetWidth-e.offsetWidth}},{key:"handleDelete",value:(a=D(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.props,r=n.deleteBoard,o=n.boardData,t.next=3,r(e);case 3:this.setState({stateData:o.toJS()});case 4:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},{key:"render",value:function(){var t=this,e=u.a.name+" - Task Board",n=u.a.desc,r=this.state,o=r.stateData,a=r.dataLoaded,i=this.props,s=i.classes,l=i.openFrm,d=i.addBoard,f=i.discardBoard,b=i.closeNotif,m=i.messageNotif;return S("div",{},void 0,S(c.Helmet,{},void 0,S("title",{},void 0,e),S("meta",{name:"description",content:n}),S("meta",{property:"og:title",content:e}),S("meta",{property:"og:description",content:n}),S("meta",{property:"twitter:title",content:e}),S("meta",{property:"twitter:description",content:n})),S(p.mb,{close:function(){return b()},message:m}),S("div",{className:s.root,id:"task_wrap"},void 0,S(p.Vb,{dataLoaded:a,data:o,removeBoard:function(e){return t.handleDelete(e)}}),S(p.b,{openForm:l,addEvent:d,closeForm:f,submit:function(e){return t.handleSubmit(e)}})))}}])&&P(n.prototype,r),o&&P(n,o),e}(a.a.Component),I=Object(f.connect)((function(t){return{force:t,boardData:t.getIn(["taskboard","boardData"]),openFrm:t.getIn(["taskboard","openFrm"]),messageNotif:t.getIn(["taskboard","notifMsg"])}}),(function(t){return{fetchBoardData:Object(d.bindActionCreators)(m,t),submit:Object(d.bindActionCreators)(v,t),deleteBoard:Object(d.bindActionCreators)(w,t),addBoard:function(){return t(y)},discardBoard:function(){return t(h)},closeNotif:function(){return t(g)}}}))(x);e.default=Object(i.withStyles)((function(t){return{root:{display:"block",width:"calc(100% + ".concat(t.spacing(2),"px)"),marginLeft:-1*t.spacing(1)}}}))(I)}}]);