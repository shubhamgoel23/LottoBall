(this["webpackJsonplotto-ball"]=this["webpackJsonplotto-ball"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),i=n.n(c),r=n(8),s=n.n(r),l=(n(14),n(2)),o=n(3),u=n(4),h=n(6),j=n(5),b=(n(15),function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Ball",children:this.props.num})}}]),n}(c.Component)),m=(n(16),function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={nums:Array.from({length:a.props.maxBalls})},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(o.a)(n,[{key:"generate",value:function(){var t=this;this.setState((function(e){return{nums:e.nums.map((function(e){return Math.floor(Math.random()*t.props.maxNum)+1}))}}))}},{key:"handleClick",value:function(){this.generate()}},{key:"render",value:function(){var t=this.props.title;return Object(a.jsxs)("div",{className:"Lottery",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("div",{children:this.state.nums.map((function(t){return Object(a.jsx)(b,{num:t})}))}),Object(a.jsx)("button",{onClick:this.handleClick,children:"Generate"})]})}}]),n}(c.Component));m.defaultProps={title:"Lotto",maxBalls:6,maxNum:40};var d=m;n(17);var f=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d,{}),Object(a.jsx)(d,{title:"Mini Daily",maxNum:20,maxBalls:4})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.061a9458.chunk.js.map