(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=(n(15),n(2)),s=n(9),o=n(0),u=function(e){var t=e.setcategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),u(""))},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)}})})},j=n(10),d=(n(17),function(e){var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__bounceInLeft",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsxs)("p",{children:[" ",t," "]})]})}),l=n(6),p=n.n(l),b=n(8),f=function(){var e=Object(b.a)(p.a.mark((function e(t){var n,a,c,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=wZtVjMLI4S02GqvAKAUCCaoD4zzZL0ih"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){setTimeout((function(){console.log(e),r({data:e,loading:!1})}),1e3)}))}),[e]),c}(t),c=n.data,r=n.loading;return console.log(r),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h3",{className:"animate__animated animate__fadeInTopRight",children:[" ",t," "]}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(o.jsx)("div",{className:"card-grid",children:Object(o.jsx)("ol",{children:c.map((function(e){return Object(o.jsx)(d,Object(j.a)({},e),e.id)}))})})]})},h=function(){var e=Object(a.useState)(["One punch man"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(u,{setcategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(m,{category:e},e)}))})]})};r.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.6b98c3f3.chunk.js.map