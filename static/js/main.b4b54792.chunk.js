(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{24:function(t,e,c){},25:function(t,e,c){},30:function(t,e,c){},32:function(t,e,c){},33:function(t,e,c){},34:function(t,e,c){},39:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),r=c(6),a=c.n(r),i=(c(24),c.p,c(25),c(4)),o=c(18),l=c(3),d=c(12),j=c(13),u=c(19),b=c(16),O=(c(30),"ADD_SHOP_DATA"),p=c(0),h=function(t){Object(u.a)(c,t);var e=Object(b.a)(c);function c(t){var n;return Object(d.a)(this,c),(n=e.call(this,t)).state={product:{title:"",price:"",description:"",imageUrl:""},imageUrl:""},n}return Object(j.a)(c,[{key:"render",value:function(){var t=this;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{class:"card-form",children:Object(p.jsxs)("form",{class:"signup",children:[Object(p.jsx)("div",{class:"form-title",children:"Add New Product!"}),Object(p.jsxs)("div",{class:"form-body",children:[Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("input",{type:"text",onChange:function(e){return t.setState({product:Object(l.a)(Object(l.a)({},t.state.product),{},{title:e.target.value})})},placeholder:"Product Name*"}),Object(p.jsx)("input",{type:"text",onChange:function(e){return t.setState({product:Object(l.a)(Object(l.a)({},t.state.product),{},{price:e.target.value})})},placeholder:"Product Price*"})]}),Object(p.jsx)("div",{class:"row",children:Object(p.jsx)("input",{type:"text",onChange:function(e){return t.setState({product:Object(l.a)(Object(l.a)({},t.state.product),{},{description:e.target.value})})},placeholder:"Product Description*"})}),Object(p.jsx)("div",{class:"row",children:Object(p.jsx)("input",{type:"text",onChange:function(e){console.log(e.target.value),t.setState({product:Object(l.a)(Object(l.a)({},t.state.product),{},{imageUrl:e.target.value})})},placeholder:"Product Image Url*"})})]}),Object(p.jsx)("div",{class:"rule"}),Object(p.jsx)("div",{class:"form-footer",children:Object(p.jsxs)("a",{style:{color:"white"},onClick:function(){t.props.addItem(t.state.product),console.log(t.state.product),t.props.closeForm()},children:["Add!",Object(p.jsx)("span",{class:"fa fa-thumbs-o-up"})]})})]})})})})}}]),c}(n.Component),x=Object(i.b)(null,(function(t){return{addItem:function(e){return t(function(t){return{type:O,payload:{new:{item:t}}}}(e))}}}))(h);c(32);function f(){var t=Object(n.useState)(!1),e=Object(o.a)(t,2);e[0],e[1];return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("a",{href:"#openModal-about",className:"addBtn",children:"Add Product"}),Object(p.jsx)("div",{id:"openModal-about",class:"modalDialog",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{href:"#close",title:"Close",class:"close",children:"X"}),Object(p.jsx)(x,{closeForm:function(){return window.location.href="#close"}})]})})]})}c(33);function v(t){var e=t.item;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{class:"shop-card",children:[Object(p.jsx)("div",{class:"title",children:e.title}),Object(p.jsx)("div",{class:"desc",children:e.description}),Object(p.jsx)("div",{class:"slider",children:Object(p.jsx)("figure",{"data-color":"#E24938, #A30F22",children:Object(p.jsx)("img",{src:e.imageUrl})})}),Object(p.jsxs)("div",{class:"cta",children:[Object(p.jsx)("div",{class:"price",children:e.price}),Object(p.jsxs)("button",{class:"btn",children:["Add to cart",Object(p.jsx)("span",{class:"bg"})]})]})]}),Object(p.jsx)("div",{class:"bg"}),Object(p.jsx)("a",{class:"the-most",target:"_blank"})]})}c(34);function g(){var t=Object(i.c)((function(t){return t.shop}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"top-bar",children:[Object(p.jsx)(f,{}),Object(p.jsx)("button",{onClick:function(){console.log(t)},children:"Click me"})]}),Object(p.jsx)("div",{class:"row",children:t.length?t.map((function(t){return Object(p.jsx)("div",{class:"column",children:Object(p.jsx)(v,{item:t.item})})})):null})]})}var m=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(g,{})})},y=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;c(t),n(t),s(t),r(t),a(t)}))},w=c(2),C=c(17),F=[],P=c(8),k=c(14),A={key:"root",storage:c.n(k).a,whitelist:["shop"]},S=Object(w.b)({shop:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return console.log(e.payload.new),[].concat(Object(C.a)(t),[e.payload.new]);default:return t}}}),D=Object(P.a)(A,S),N=c(15);c(37);var I=Object(w.c)(D,w.a.apply(void 0,[])),U=Object(P.b)(I);a.a.render(Object(p.jsx)(i.a,{store:I,children:Object(p.jsx)(N.a,{persistor:U,children:Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(m,{})})})}),document.getElementById("root")),y()}},[[39,1,2]]]);
//# sourceMappingURL=main.b4b54792.chunk.js.map