(this.webpackJsonpwebpack_standard=this.webpackJsonpwebpack_standard||[]).push([[6],{237:function(n,e,t){"use strict";t.d(e,"a",(function(){return f}));var r=t(1),c=t(3),i=t(66),o=t(64),u=(t(0),t(121)),a=t(50);function s(){var n=Object(o.a)(["\n  display: ",";\n  color: red;\n"]);return s=function(){return n},n}function b(){var n=Object(o.a)(["\n  border: "," 2px solid;\n  outline: none;\n"]);return b=function(){return n},n}var d=a.a.textarea(b(),(function(n){return n.error&&n.touched?"red":"black"})),j=a.a.p(s(),(function(n){return n.error&&n.touched?"block":"none"})),l=function(n){return function(e){var t=e.input,o=e.meta,u=Object(i.a)(e,["input","meta"]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,Object(c.a)(Object(c.a)(Object(c.a)({as:n},t),u),o)),Object(r.jsx)(j,Object(c.a)(Object(c.a)({},o),{},{children:o.error}))]})}},f=function(n,e,t){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"text";return Object(r.jsx)(u.a,{type:i,placeholder:c,name:n,validate:e,component:l(t)})}},239:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return c}));var r=function(n){if(!n)return"Field is required"},c=function(n){return function(e){if(e.length>n)return"Max length is ".concat(n," symbols")}}},302:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(64),i=(t(0),t(23)),o=t(122),u=t(239),a=t(26),s=t(7),b=t(50),d=t(237);function j(){var n=Object(c.a)(["\n  display: none;\n  ","\n  color: red;\n"]);return j=function(){return n},n}var l=b.a.div(j(),(function(n){return n.error&&"display: block;"})),f=Object(o.a)({form:"login"})((function(n){var e=n.error,t=n.handleSubmit;return console.log(e),Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsx)("div",{children:Object(d.a)("email",[u.b],"input","email","input")}),Object(r.jsx)("div",{children:Object(d.a)("password",[u.b],"input","password","password")}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:[Object(d.a)("rememberMe",[u.b],"input",null,"checkbox"),"remember me"]})}),Object(r.jsx)(l,{error:e,children:e}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"submit"})})]})}));e.default=Object(i.b)((function(n){return{isAuth:n.authReducer.isAuth}}),{login:a.c})((function(n){return n.isAuth?Object(r.jsx)(s.a,{to:"profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(f,{onSubmit:function(e){var t=e.email,r=e.password,c=e.rememberMe;n.login(t,r,c)}})]})}))}}]);
//# sourceMappingURL=6.522535bf.chunk.js.map