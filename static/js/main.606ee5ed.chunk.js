(this.webpackJsonpwebpack_standard=this.webpackJsonpwebpack_standard||[]).push([[1],{18:function(e,t,n){e.exports={profile_img:"users-item_profile_img__3dcdN"}},236:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(46),i=n.n(s),o=n(28),u=n(29),l=n(33),d=n(32),p=n(89),f=n.n(p),j=n(23),b=n(6),h=n.n(b),g=n(11),O=n(34),m=n(3),v=n(9),x=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(m.a)(Object(m.a)({},e),r):e}))},w="FOLLOW",_="UNFOLLOW",y="SET_USERS",P="SET_CURRENT_PAGE",S="SET_TOTAL_USERS_COUNT",C="TOGGLE_IS_FETCHING",k="TOGGLE_IS_FOLLOWING_PROGRESS",U={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},E=function(e){return{type:w,userId:e}},N=function(e){return{type:_,userId:e}},I=function(e){return{type:y,users:e}},T=function(e){return{type:P,currentPage:e}},R=function(e){return{type:C,isFetching:e}},A=function(e,t){return{type:k,isFetching:e,userId:t}},z=function(){var e=Object(g.a)(h.a.mark((function e(t,n,r,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(A(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(A(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(m.a)(Object(m.a)({},e),{},{users:x(e.users,t.userId,"id",{followed:!0})});case _:return Object(m.a)(Object(m.a)({},e),{},{users:x(e.users,t.userId,"id",{followed:!1})});case y:return Object(m.a)(Object(m.a)({},e),{},{users:t.users});case P:return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case S:return Object(m.a)(Object(m.a)({},e),{},{totalUsersCount:t.count});case C:return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});case k:return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(O.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},D=n(66),L=n(92),M=n.n(L),G=n(18),W=n.n(G),B=n.p+"static/media/userPhoto.0c22186a.jpg",V=n(15),q=function(e){return Object(r.jsxs)("article",{className:W.a.wrapper,children:[Object(r.jsxs)("div",{className:W.a.img_wrap,children:[Object(r.jsx)("img",{className:W.a.profile_img,src:null!=e.photos.small?e.photos.small:B,alt:""}),e.followed?Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.id})),onClick:function(){return e.unFollow(e.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.id})),onClick:function(){return e.follow(e.id)},children:"Follow"})]}),Object(r.jsx)("div",{className:W.a.data_wrap,children:Object(r.jsxs)(V.b,{to:"/profile/".concat(e.id),children:[Object(r.jsxs)("div",{className:W.a.personal_data,children:[Object(r.jsxs)("p",{className:W.a.text_bold,children:[e.name,"\xa0 SuperMan"]}),Object(r.jsx)("p",{className:W.a.text,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, culpa."})]}),Object(r.jsxs)("div",{className:W.a.personal_data,children:[Object(r.jsx)("p",{className:W.a.text_bold,children:"USA"}),Object(r.jsx)("p",{className:W.a.text,children:"Montana"})]})]})})]})},H=n(99),X=n(64);function J(){var e=Object(X.a)(["\n  padding: 5px;\n  font-weight: ",";\n  font-size: 16px;\n  background: none;\n  border: 1px solid black;\n"]);return J=function(){return e},e}var Z=n(50).a.span(J(),(function(e){return e.currentPage===e.classValue&&"bold"})),K=function(e){for(var t=e.totalUsersCount,n=e.pageSize,c=e.currentPage,s=e.onPageChanged,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(t/n),l=[],d=1;d<u;d++)l.push(d);var p=Math.ceil(u/o),f=Object(a.useState)(1),j=Object(H.a)(f,2),b=j[0],h=j[1],g=(b-1)*o+1,O=b*o;return Object(r.jsxs)("div",{children:[b>1&&Object(r.jsx)("button",{onClick:function(){h(b-1)},children:"PREV"}),l.filter((function(e){return e>=g&&e<=O})).map((function(e){return Object(r.jsx)(Z,{onClick:function(){s(e)},currentPage:c,classValue:e,children:e},e)})),p>b&&Object(r.jsx)("button",{onClick:function(){h(b+1)},children:"NEXT"})]})},Y=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.pageSize,c=e.totalUsersCount,s=Object(D.a)(e,["currentPage","onPageChanged","pageSize","totalUsersCount"]);return Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{className:M.a.title,children:"Users"}),s.users.map((function(e){return Object(r.jsx)(q,Object(m.a)(Object(m.a)({},e),s),e.id)})),Object(r.jsx)(K,{totalUsersCount:c,currentPage:t,onPageChanged:n,pageSize:a})]})},Q=n(47),$=n(17),ee=(n(175),function(e){return e.usersReducer.users}),te=function(e){return e.usersReducer.totalUsersCount},ne=function(e){return e.usersReducer.pageSize},re=function(e){return e.usersReducer.currentPage},ae=function(e){return e.usersReducer.isFetching},ce=function(e){return e.usersReducer.followingInProgress},se=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(Q.a,{}):null,Object(r.jsx)(Y,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),ie=Object($.d)(Object(j.b)((function(e){return{users:ee(e),pageSize:ne(e),currentPage:re(e),isFetching:ae(e),followingInProgress:ce(e),totalUsersCount:te(e)}}),{follow:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:z(n,e,v.c.follow.bind(v.c),E);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:z(n,e,v.c.unFollow.bind(v.c),N);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:T,getUsers:function(e,t){return function(){var n=Object(g.a)(h.a.mark((function n(r){var a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(R(!0)),r(T(e)),n.next=4,v.c.getUsers(e,t);case 4:a=n.sent,r(R(!1)),r(I(a.items)),r((c=a.totalCount,{type:S,count:c}));case 8:case"end":return n.stop()}var c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(se),oe=n(7),ue=n(49);function le(e){return function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(ue.a,{}),children:Object(r.jsx)(e,{})})}}var de=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,303))})),pe=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,304))})),fe=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,302))})),je=function(){return Object(r.jsxs)("div",{className:f.a.wrapper,children:[Object(r.jsx)(oe.b,{path:"/profile/:userId?",render:le(pe)}),Object(r.jsx)(oe.b,{path:"/dialog",render:le(de)}),Object(r.jsx)(oe.b,{path:"/users",render:le(ie)}),Object(r.jsx)(oe.b,{path:"/login",render:function(){return Object(r.jsx)(fe,{})}})]})},be=n(27),he=n.n(be),ge=function(){return Object(r.jsx)("nav",{className:he.a.nav,children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(V.b,{to:"/profile",activeClassName:he.a.active,children:"Profile"})}),Object(r.jsx)("li",{className:"".concat(he.a.item," ").concat(he.a.item_active),children:Object(r.jsx)(V.b,{to:"/dialog",activeClassName:he.a.active,children:"Messages"})}),Object(r.jsx)("li",{children:Object(r.jsx)(V.b,{to:"/users",activeClassName:he.a.active,children:"Users"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"",children:"Music"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"",children:"Settings"})})]})})},Oe=(n(81),n(61)),me=n.n(Oe),ve=function(e){return Object(r.jsx)("header",{className:me.a.header,children:Object(r.jsx)("div",{className:me.a.wrapper,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(V.b,{to:"/login",children:e.isAuth?e.login:"Login"})})})},xe=n(26),we=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(ve,Object(m.a)({},this.props))}}]),n}(c.a.Component),_e=Object(j.b)((function(e){return{isAuth:e.authReducer.isAuth,login:e.authReducer.login}}),{getAuthUserData:xe.b,logout:xe.d})(we),ye="INITIALIZED_SUCCESS",Pe={initialized:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return Object(m.a)(Object(m.a)({},e),{},{initialized:!0});default:return e}},Ce=n(82),ke=n(67),Ue={},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;return e},Ne=n(97),Ie=n(88),Te=Object($.c)({usersReducer:F,profileReducer:ke.b,dialogsReducer:Ce.b,sidebarReducer:Ee,authReducer:xe.a,appReducer:Se,form:Ie.a}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,Ae=Object($.e)(Te,Re(Object($.a)(Ne.a))),ze=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(_e,{}),Object(r.jsx)(ge,{}),Object(r.jsx)("div",{className:"app-wrapper-content",children:Object(r.jsx)(je,{})})]}):Object(r.jsx)(Q.a,{})}}]),n}(c.a.Component),Fe=Object($.d)(oe.f,Object(j.b)((function(e){return{initialized:e.appReducer.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(xe.b)());Promise.all([t]).then((function(){e({type:ye})})),console.log(t)}}}))(ze),De=function(e){return Object(r.jsx)(V.a,{basename:"/Social-network",children:Object(r.jsx)(j.a,{store:Ae,children:Object(r.jsx)(Fe,{})})})};i.a.render(Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(De,{}),","]}),document.getElementById("root"))},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return j}));var r=n(6),a=n.n(r),c=n(11),s=n(3),i=n(39),o=n(9),u="SET_USER_DATA",l={userId:null,email:null,login:null,isAuth:!1},d=function(e,t,n,r){return{type:u,payload:{userId:e,email:t,login:n,isAuth:r}}},p=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getAuthUserData();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,s=r.login,i=r.email,t(d(c,s,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var s,u;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?c(p()):(u=s.data.messages.length>0?s.data.messages[0]:"Some error",c(Object(i.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},j=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}}},27:function(e,t,n){e.exports={nav:"navigation_nav__30_-l",active:"navigation_active__3mURm"}},47:function(e,t,n){"use strict";var r=n(49);t.a=r.a},49:function(e,t,n){"use strict";var r=n(1),a=(n(0),n(96)),c=n.n(a);t.a=function(){return Object(r.jsxs)("div",{className:c.a.loader,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}},61:function(e,t,n){e.exports={header:"header_header__1qn2P"}},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return m}));var r=n(6),a=n.n(r),c=n(11),s=n(34),i=n(3),o=n(9),u="UPDATE_NEW_POST_TEXT",l="ADD_POST",d="SET_USER_PROFILE",p="SET_STATUS",f="DELETE_POST",j={posts:[{id:1,text:"How are you doing?",img:"https://image.shutterstock.com/image-photo/roman-legionary-soldier-army-reenactment-600w-789836029.jpg",likesCount:1},{id:2,text:"Why are we living?",img:"https://turningpointsoftheancientworld.com/wp-content/uploads/2018/08/Augustan-legionary3-1-672x372.jpg",likesCount:11},{id:3,text:"Why are you worthless?",img:"https://cdn.wallpapersafari.com/46/90/i5B8yG.jpg",likesCount:14}],profile:null,status:""},b=function(e){return{type:l,newPost:e}},h=function(e){return{type:p,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(h(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n=t.newPost;return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[{id:6,text:n,img:"https://cdn.wallpapersafari.com/46/90/i5B8yG.jpg",likesCount:90}])});case p:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case u:return Object(i.a)(Object(i.a)({},e),{},{newPostText:t.newText});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case f:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},81:function(e,t,n){},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(34),a=n(3),c="ADD_MESSAGE",s={dialogs:[{id:1,name:"Shit"},{id:2,name:"No way"},{id:3,name:"Nikita"},{id:4,name:"Dimich"},{id:5,name:"Mary"},{id:6,name:"Tom"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Mine gottt"},{id:4,message:"Shize"},{id:5,message:"God damn it"},{id:6,message:"No chance"}]},i=function(e){return{type:c,newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:7,message:n}])});default:return e}}},89:function(e,t,n){e.exports={wrapper:"main_wrapper__3cbck"}},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(91),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"cfd2697b-54f4-44ec-ac87-b52b20963435"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unFollow:function(e){return a.delete("follow/".concat(e))},getAuthUserData:function(){return a.get("auth/me").then((function(e){return e.data}))}},s={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={getAuthUserData:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},92:function(e,t,n){e.exports={btn:"users_btn__W6xVq",btn_checked:"users_btn_checked__2uviU"}},96:function(e,t,n){e.exports={loader:"preloader_loader__2Zqm0"}}},[[236,2,3]]]);
//# sourceMappingURL=main.606ee5ed.chunk.js.map