(this.webpackJsonpcats=this.webpackJsonpcats||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(4),i=n.n(r),o=(n(15),n(3)),h=n.n(o),u=n(5),l=n(6),d=n(7),j=n(9),p=n(8),f=(n(17),function(e){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{alt:"cat",src:"https://robohash.org/".concat(e.cat.id,"/?set=set4&size=140x140")}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:e.cat.name}),Object(c.jsx)("h6",{children:e.cat.email})]})]})}),b=(n(18),function(e){var t=e.cats;return Object(c.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(c.jsx)(f,{cat:e},e.id)}))})}),x=(n(19),function(e){var t=e.placeholder,n=e.handleChange;return Object(c.jsx)("input",{className:"search-box",type:"search",placeholder:t,onChange:n})}),O=(n(20),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={cats:[],searchField:""},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/users",e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({cats:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.cats,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{className:"Title",children:"Kitty Cats"}),Object(c.jsx)(x,{placeholder:"Search",handleChange:this.handleChange}),Object(c.jsx)(b,{cats:a})]})}}]),n}(a.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),m()}],[[21,1,2]]]);
//# sourceMappingURL=main.561aa22a.chunk.js.map