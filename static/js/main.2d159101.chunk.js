(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={description:"Details_description__3loTp",temperature:"Details_temperature__1zcWM"}},,function(e,t,n){e.exports={title:"Title_title__33jaY"}},function(e,t,n){e.exports={FormInput:"FormInput_FormInput__2APjS"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(5),s=n.n(r),a=(n(12),n(2)),o=(n(13),n(6)),u=n.n(o),p=n(0),j=function(){return Object(p.jsx)("div",{className:u.a.title,style:{position:"relative",left:"-20px"},children:Object(p.jsx)("h1",{children:"WEATHER APP"})})},l=n(7),d=n.n(l),b=function(e){var t=Object(i.useState)(""),n=Object(a.a)(t,2),c=n[0],r=n[1],s=Object(i.useState)("metric"),o=Object(a.a)(s,2);o[0],o[1];return Object(p.jsx)("div",{className:d.a.FormInput,children:Object(p.jsxs)("form",{onSubmit:function(t){c.trim().length>0?(fetch("https://api.openweathermap.org/data/2.5/weather?q="+c+"&appid=8d6e5706b17fb3303800fea3091696e1&units=metric").then((function(e){return e.ok?e.json():404===e.status?"404":void 0})).then((function(t){return e.submission(t)})).catch((function(){return alert("Unable to connect to service!")})),t.preventDefault()):alert("Please enter a location!")},children:[Object(p.jsxs)("label",{children:["Location:",Object(p.jsx)("input",{value:c,onChange:function(e){r(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",children:"GO"})]})})},h=n(4),m=n.n(h),O=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:m.a.description,children:[Object(p.jsx)("h1",{children:"Description: "}),Object(p.jsx)("p",{children:e.description})]}),Object(p.jsxs)("div",{className:m.a.temperature,children:[Object(p.jsx)("h1",{children:"Temperature: "}),Object(p.jsxs)("p",{children:[e.temperature," \xb0C"]})]})]})};var f=function(){var e,t=Object(i.useState)([]),n=Object(a.a)(t,2),c=n[0],r=n[1];return"404"===c?e=Object(p.jsx)("p",{children:"Invalid Location"}):c.description&&(e=Object(p.jsx)(O,{description:c.description,temperature:c.temperature})),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(j,{}),Object(p.jsx)(b,{submission:function(e){e.weather&&e.main.temp?r({description:e.weather[0].description,temperature:e.main.temp.toString()}):r(e)}}),e]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),x()}],[[15,1,2]]]);
//# sourceMappingURL=main.2d159101.chunk.js.map