(this["webpackJsonppractice-app-todo-weather"]=this["webpackJsonppractice-app-todo-weather"]||[]).push([[0],{19:function(e,t){e.exports={apiKey:"a4bd3fc92305c72d2b1b2c5d8dda7b8f"}},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(17),a=c.n(i),l=c(20),r=c(8),j=c(3),d=c(18),o=c.n(d),b=c(19),u=c.n(b),h=c(0),O=function(){var e=Object(n.useState)("leipzig"),t=Object(j.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)({}),a=Object(j.a)(i,2),l=a[0],r=a[1],d=function(e){o.a.get("".concat("https://api.openweathermap.org/data/2.5/","weather?q=").concat(e,"&units=metric&appid=").concat(u.a.apiKey)).then((function(e){return r(e.data)})).catch((function(e){return console.log("Please type an existing city name")}))};Object(n.useEffect)((function(){d(c)}),[]);var b=new Date,O=b.getFullYear();return Object(h.jsxs)("div",{className:"app-wrap",children:[Object(h.jsx)("header",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d(c)},children:[Object(h.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)},placeholder:"enter a city name"}),Object(h.jsx)("input",{type:"submit",id:"submit",value:"Search"})]})}),(null===l||void 0===l?void 0:l.main)&&Object(h.jsxs)("main",{children:[Object(h.jsxs)("section",{class:"location",children:[Object(h.jsxs)("div",{class:"city",children:[" ",l.name,", ",l.sys.country]}),Object(h.jsxs)("div",{class:"date",children:[b.toLocaleDateString("en-US",{weekday:"long"})," ",b.toLocaleDateString("en-US",{day:"numeric"})," ",b.toLocaleDateString("en-US",{month:"long"})," ",O]})]}),Object(h.jsxs)("div",{class:"current",children:[Object(h.jsxs)("div",{class:"temp",children:[Object(h.jsx)("span",{class:"tempN",id:"temp",children:l.main.temp.toFixed()}),Object(h.jsx)("span",{children:"\xb0"})]}),Object(h.jsxs)("div",{class:"feelsContainer",children:["Feels like"," ",Object(h.jsx)("span",{class:"feels",children:Math.floor(l.main.feels_like)}),Object(h.jsx)("span",{children:"\xb0"})]}),Object(h.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(l.weather[0].icon,"@2x.png"),class:"icon",alt:""}),Object(h.jsx)("div",{class:"weather",children:l.weather[0].main}),Object(h.jsxs)("div",{class:"hi-low",children:[l.main.temp_min.toFixed()," /"," ",l.main.temp_max.toFixed()]}),Object(h.jsxs)("div",{class:"wind",children:[Object(h.jsx)("i",{class:"fas fa-wind"}),Object(h.jsxs)("div",{children:["Wind direction: ",Object(h.jsx)("span",{class:"windDeg",children:"N"})]}),Object(h.jsxs)("div",{children:["Speed:"," ",Object(h.jsxs)("span",{class:"windSpeed",children:[l.wind.speed,"km/h"]})]}),Object(h.jsxs)("div",{children:["Max-gust:"," ",Object(h.jsxs)("span",{class:"windGust",children:[Math.floor(l.wind.gust),"km/h"]})]})]}),Object(h.jsxs)("div",{class:"hum-img",children:[Object(h.jsx)("i",{class:"fas fa-water"}),Object(h.jsxs)("div",{class:"humidity",children:[" humidity:",l.main.humidity,"%"]})]})]})]})]})},m=c(7),p=function(e){var t=e.items,c=e.removeItem,n=e.editItem;return Object(h.jsx)("div",{children:t.map((function(e){var t=e.id,s=e.title;return Object(h.jsx)("ul",{className:"listDesign",children:Object(h.jsxs)("li",{children:[s,Object(h.jsxs)("div",{className:"editAndDelete",children:[Object(h.jsx)("button",{type:"button",onClick:function(){return n(t)},className:"btn",children:Object(h.jsx)(m.a,{className:"btn-edit"})}),Object(h.jsx)("button",{type:"button",className:"btn",onClick:function(){return c(t)},children:Object(h.jsx)(m.b,{className:"btn-delete"})})]})]})},t)}))})};var x=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),d=Object(j.a)(a,2),o=d[0],b=d[1],u=Object(n.useState)(!1),m=Object(j.a)(u,2),x=m[0],f=m[1],v=Object(n.useState)(null),g=Object(j.a)(v,2),S=g[0],w=g[1];return Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(o))}),[o]),Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("section",{className:"section-center",children:[Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),c&&x)b(o.map((function(e){return e.id===S?Object(r.a)(Object(r.a)({},e),{},{title:c}):e}))),i(""),w(null),f(!1);else{var t={id:(new Date).getTime().toString(),title:c};b([].concat(Object(l.a)(o),[t])),i("")}},children:[Object(h.jsx)("h3",{children:"TODO LIST"}),Object(h.jsxs)("div",{className:"form-design",children:[Object(h.jsx)("input",{className:"inputDesign",type:"text",placeholder:"ex: Coding",onChange:function(e){return i(e.target.value)},value:c}),Object(h.jsx)("button",{type:"submit",className:"btn",children:x?"Edit":"Search"})]})]}),o.length>0&&Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(p,{items:o,removeItem:function(e){b(o.filter((function(t){return t.id!==e})))},editItem:function(e){var t=o.find((function(t){return t.id===e}));f(!0),w(e),i(t.title)}}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){b([])},className:"clearList",children:"Clear Items"})})]})]}),Object(h.jsx)(O,{})]})})};c(44);a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.34724177.chunk.js.map