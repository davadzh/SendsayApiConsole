(this["webpackJsonpapi-console"]=this["webpackJsonpapi-console"]||[]).push([[0],{104:function(e,n,t){e.exports=t.p+"static/media/loader.35b4cb4c.svg"},105:function(e,n,t){e.exports=t.p+"static/media/failure-face.aeb66b10.svg"},113:function(e,n,t){e.exports=t(225)},118:function(e,n,t){},225:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(50),i=t.n(o),c=(t(118),t(10)),u=t(2),l=t(3),s=t(111),f=t(9),d=t.n(f),p=t(6),b=t(7),E=t(93),h=new(t.n(E).a);h.setSessionFromCookie("sendsay_session");var g,m=function e(){Object(b.a)(this,e)};m.sendsay=h,function(e){e.AUTHENTICATE_CHECK="AUTHENTICATE_CHECK",e.LOGIN="LOGIN",e.AUTHENTICATE_SUCCESS="AUTHENTICATE_SUCCESS",e.AUTHENTICATE_FAILURE="AUTHENTICATE_FAILURE",e.LOGOUT="LOGOUT",e.LOGOUT_SUCCESS="LOGOUT_SUCCESS",e.SET_CURRENT_REQUEST="SET_CURRENT_REQUEST",e.SET_CURRENT_SUCCESS_RESPONSE="SET_CURRENT_SUCCESS_RESPONSE",e.SET_CURRENT_ERROR_RESPONSE="SET_CURRENT_ERROR_RESPONSE",e.SET_HAS_REQUEST_SYNTAX_ERROR="SET_HAS_REQUEST_SYNTAX_ERROR",e.SEND_REQUEST="SEND_REQUEST",e.ADD_REQUEST_TO_HISTORY="ADD_REQUEST_TO_HISTORY",e.CLEAR_REQUESTS="CLEAR_REQUESTS"}(g||(g={}));var v=t(229),O=Object(v.a)(g.LOGIN,(function(e){return e})),x=Object(v.a)(g.AUTHENTICATE_SUCCESS,(function(e){return e})),j=Object(v.a)(g.AUTHENTICATE_FAILURE,(function(e){return e})),y=Object(v.a)(g.AUTHENTICATE_CHECK),S=Object(v.a)(g.LOGOUT_SUCCESS),w=Object(v.a)(g.LOGOUT),R=d.a.mark(_),k=d.a.mark(L),C=d.a.mark(U),T=d.a.mark(N);function _(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.sendsay.request({action:"pong"});case 3:e.next=11;break;case 5:if(e.prev=5,e.t0=e.catch(0),"error/auth/failed"!==e.t0.id){e.next=11;break}return e.next=11,Object(p.b)(U);case 11:case"end":return e.stop()}}),R,null,[[0,5]])}function L(e){var n,t;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,t=null,r.next=4,m.sendsay.login({login:n.login,sublogin:n.sublogin,password:n.password}).catch((function(e){t=JSON.stringify(e)}));case 4:if(m.sendsay.session){r.next=11;break}return r.next=7,Object(p.d)(j({authErrorMessage:t}));case 7:return r.next=9,Object(p.b)(U);case 9:r.next=14;break;case 11:return document.cookie="sendsay_session=".concat(m.sendsay.session),r.next=14,Object(p.d)(x({sessionKey:m.sendsay.session,login:n.login,sublogin:n.sublogin}));case 14:case"end":return r.stop()}}),k)}function U(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="sendsay_session",document.cookie=[n,"=","; expires="+new Date(0).toUTCString()].join(""),m.sendsay.session=null,e.next=4,Object(p.d)(S());case 4:case"end":return e.stop()}var n}),C)}function N(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([Object(p.e)(g.LOGIN,L),Object(p.e)(g.AUTHENTICATE_CHECK,_),Object(p.e)(g.LOGOUT,U)]);case 2:case"end":return e.stop()}}),T)}var H=t(228),D=Object(v.a)(g.SEND_REQUEST,(function(e){return e})),I=Object(v.a)(g.SET_CURRENT_REQUEST,(function(e){return e})),q=Object(v.a)(g.SET_CURRENT_SUCCESS_RESPONSE,(function(e){return e})),A=Object(v.a)(g.SET_CURRENT_ERROR_RESPONSE,(function(e){return e})),P=Object(v.a)(g.SET_HAS_REQUEST_SYNTAX_ERROR,(function(e){return e})),M=Object(v.a)(g.ADD_REQUEST_TO_HISTORY,(function(e){return e})),z=Object(v.a)(g.CLEAR_REQUESTS),W=d.a.mark(G),Q=d.a.mark(J),B=d.a.mark(Y);function G(e){var n,t;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e){r.next=4;break}return t=Object(H.a)(),r.next=4,Object(p.d)(M({request:{id:t,actionName:null!==(n=e.request.action)&&void 0!==n?n:"untitled",hasError:e.hasError,requestText:JSON.stringify(e.request,null,4)}}));case 4:case"end":return r.stop()}}),W)}function V(e){try{return JSON.parse(e)}catch(n){return null}}function J(e){var n,t,r,a,o;return d.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(n=e.payload,t=V(n)){i.next=6;break}return i.next=5,Object(p.d)(P({hasRequestSyntaxError:!0}));case 5:return i.abrupt("return");case 6:return i.prev=6,i.next=9,Object(p.b)(m.sendsay.request,JSON.parse(n));case 9:return r=i.sent,a=JSON.stringify(r,null,4),i.next=13,Object(p.d)(q({currentResponse:a}));case 13:return i.next=15,Object(p.b)(G,{request:t,hasError:!1});case 15:i.next=24;break;case 17:return i.prev=17,i.t0=i.catch(6),o=JSON.stringify(i.t0,null,4),i.next=22,Object(p.d)(A({currentResponse:o}));case 22:return i.next=24,Object(p.b)(G,{request:t,hasError:!0});case 24:case"end":return i.stop()}}),Q,null,[[6,17]])}function Y(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([Object(p.e)(g.SEND_REQUEST,J)]);case 2:case"end":return e.stop()}}),B)}var F=d.a.mark(X);function X(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([Object(p.c)(N),Object(p.c)(Y)]);case 2:case"end":return e.stop()}}),F)}var K,Z,$,ee=t(112),ne=t(12),te=t(14),re=t(13),ae=t(227),oe={requests:Object(ae.a)((K={},Object(ne.a)(K,g.SEND_REQUEST,(function(e){return Object(re.a)({},e,{isLoading:!0})})),Object(ne.a)(K,g.SET_CURRENT_SUCCESS_RESPONSE,(function(e,n){var t=n.payload;return Object(re.a)({},e,{hasResponseError:!1,hasRequestSyntaxError:!1,currentResponse:t.currentResponse,isLoading:!1})})),Object(ne.a)(K,g.SET_CURRENT_ERROR_RESPONSE,(function(e,n){var t=n.payload;return Object(re.a)({},e,{hasResponseError:!0,hasRequestSyntaxError:!1,currentResponse:t.currentResponse,isLoading:!1})})),Object(ne.a)(K,g.SET_CURRENT_REQUEST,(function(e,n){var t=n.payload;return Object(re.a)({},e,{currentRequest:t.currentRequest,hasRequestSyntaxError:!1})})),Object(ne.a)(K,g.ADD_REQUEST_TO_HISTORY,(function(e,n){var t=n.payload;return e.requestsHistory.some((function(e){return e.actionName===t.request.actionName}))?e:15===e.requestsHistory.length?Object(re.a)({},e,{requestsHistory:[t.request].concat(Object(te.a)(e.requestsHistory.slice(0,15)))}):Object(re.a)({},e,{requestsHistory:[t.request].concat(Object(te.a)(e.requestsHistory))})})),Object(ne.a)(K,g.SET_HAS_REQUEST_SYNTAX_ERROR,(function(e,n){var t=n.payload;return Object(re.a)({},e,{hasRequestSyntaxError:t.hasRequestSyntaxError,isLoading:!1})})),Object(ne.a)(K,g.CLEAR_REQUESTS,(function(e){return Object(re.a)({},e,{requestsHistory:[]})})),K),{requestsHistory:[],currentRequest:"",currentResponse:"",hasRequestSyntaxError:!1,hasResponseError:!1,isLoading:!1})},ie={auth:Object(ae.a)((Z={},Object(ne.a)(Z,g.LOGIN,(function(e){return Object(re.a)({},e,{isLoading:!0})})),Object(ne.a)(Z,g.AUTHENTICATE_SUCCESS,(function(e,n){var t=n.payload;return Object(re.a)({},e,{isLoading:!1,isLoggedIn:!0,login:t.login,sublogin:t.sublogin})})),Object(ne.a)(Z,g.LOGOUT_SUCCESS,(function(e){return Object(re.a)({},e,{isLoading:!1,isLoggedIn:!1,login:null,sublogin:null})})),Z),{isLoading:!1,isLoggedIn:!1,login:null,sublogin:null,authErrorMessage:null}),error:Object(ae.a)(($={},Object(ne.a)($,g.AUTHENTICATE_FAILURE,(function(e,n){var t=n.payload;return Object(re.a)({},e,{authErrorMessage:t.authErrorMessage})})),Object(ne.a)($,g.AUTHENTICATE_SUCCESS,(function(e){return Object(re.a)({},e,{authErrorMessage:null})})),$),{authErrorMessage:null})},ce=t(94),ue=t.n(ce),le=t(23),se=t(110),fe={key:"root",storage:ue.a},de=Object(le.b)({auth:Object(se.a)(fe,ie.auth),error:ie.error,requests:oe.requests}),pe=t(40),be=t(52),Ee=Object(s.a)(),he=Object(ee.a)({reducer:de,middleware:[Ee],devTools:!1,preloadedState:{}});Ee.run(X);var ge=function(){return Object(pe.b)()},me=pe.c,ve=Object(be.a)(he),Oe=he,xe=t(41),je=t(109),ye="#CF2C00",Se="rgba(0, 0, 0, 0.2)",we="#0d0d0d",Re="#0055fb",ke="#45a5ff",Ce="#c4c4c4",Te="#999999",_e="0px 0px 5px rgba(207, 44, 0, 0.5)",Le="\u0410\u041f\u0418-\u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043a\u0430",Ue="\u0412\u043e\u0439\u0442\u0438",Ne="\u0412\u0445\u043e\u0434 \u043d\u0435 \u0432\u044b\u0448\u0435\u043b",He="\u0412\u044b\u0439\u0442\u0438",De="\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",Ie="\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",qe="\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e",Ae="\u0417\u0430\u043f\u0440\u043e\u0441:",Pe="\u041e\u0442\u0432\u0435\u0442:";function Me(){var e=Object(u.a)(["\n  width: 100%;\n  padding: 6px 10px;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-size: 18px;\n  margin-top: 5px;\n  margin-bottom: 20px;\n  outline: none;\n\n  border: 1px solid ",";\n  box-shadow: ",";\n\n  &:hover {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n  }\n\n  &:focus {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    box-shadow: 0 0 0 0.125rem rgb(0 0 0 / 20%);\n  }\n"]);return Me=function(){return e},e}function ze(){var e=Object(u.a)(["\n  font-size: 16px;\n\n  & > span {\n    float: right;\n    color: ",";\n    font-size: 12px;\n  }\n"]);return ze=function(){return e},e}var We=l.a.label(ze(),Te),Qe=l.a.input(Me(),(function(e){return e.hasError?ye:Se}),(function(e){return e.hasError?"0px 0px 5px rgba(207, 44, 0, 0.5)":"none"})),Be=a.a.memo((function(e){var n=e.type,t=e.name,r=e.value,o=e.label,i=e.changeHandler,c=e.isOptional,u=void 0!==c&&c,l=e.hasError,s=void 0!==l&&l,f=e.handleBlur;return a.a.createElement(a.a.Fragment,null,a.a.createElement(We,null,o,u&&a.a.createElement("span",null,qe)),a.a.createElement(Qe,{type:n,name:t,value:r,onChange:i,hasError:s,onBlur:f}))})),Ge=t(104),Ve=t.n(Ge);function Je(){var e=Object(u.a)(["\n  animation: spin 0.5s infinite steps(8);\n\n  @keyframes spin {\n    from {\n      transform: rotate(0);\n    }\n\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return Je=function(){return e},e}var Ye=l.a.img(Je()),Fe=function(){return a.a.createElement(Ye,{src:Ve.a,alt:"Loading"})};function Xe(){var e=Object(u.a)(["\n  background: linear-gradient(180deg, "," 0%, "," 100%), ",";\n  padding: 5px 10px;\n  border: none;\n  border-radius: 5px;\n  min-width: 110px;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #ffffff;\n  cursor: pointer;\n  position: relative;\n  transition: 0.2s ease;\n\n  &:not([disabled]) {\n    &:hover {\n      opacity: 0.85;\n    }\n\n    &:focus {\n      border: 2px solid ",";\n    }\n\n    &:active {\n      background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),\n        linear-gradient(180deg, "," 0%, "," 100%), ",";\n    }\n\n    & > span {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: relative;\n      z-index: 10;\n    }\n  }\n\n  &:disabled {\n    background: ",";\n    cursor: default;\n  }\n"]);return Xe=function(){return e},e}var Ke=l.a.button(Xe(),ke,Re,Ce,ke,ke,Re,Ce,Ce),Ze=a.a.memo((function(e){var n=e.isLoading,t=e.isDisabled,r=e.type,o=e.children,i=e.clickHandler;return a.a.createElement(Ke,{isDisabled:t,onClick:i,type:r,disabled:t},a.a.createElement("span",null,n?a.a.createElement(Fe,null):o))})),$e=t(105),en=t.n($e);function nn(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n\n  & > h2 {\n    margin: 0;\n    display: block;\n    color: ",";\n    font-weight: normal;\n    font-size: 18px;\n    line-height: 30px;\n  }\n\n  & > p {\n    margin: 0;\n    display: block;\n    color: ",";\n    opacity: 0.5;\n    font-size: 12px;\n    word-break: break-all;\n    line-height: 20px;\n  }\n"]);return nn=function(){return e},e}function tn(){var e=Object(u.a)(["\n  background: rgba(207, 44, 0, 0.1);\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: flex-start;\n\n  & > img {\n    margin-right: 8px;\n    margin-top: 3px;\n  }\n"]);return tn=function(){return e},e}var rn=l.a.div(tn()),an=l.a.div(nn(),ye,ye),on=a.a.memo((function(){var e=me((function(e){return e.error.authErrorMessage}));return a.a.createElement(rn,null,a.a.createElement("img",{src:en.a,alt:""}),a.a.createElement(an,null,a.a.createElement("h2",null,Ne),a.a.createElement("p",null,e)))}));function cn(){var e=Object(u.a)(["\n  color: ",";\n  font-size: 24px;\n  font-weight: normal;\n  margin-top: 0;\n  margin-bottom: 20px;\n"]);return cn=function(){return e},e}function un(){var e=Object(u.a)(["\n  max-width: 520px;\n  background: #ffffff;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  padding: 40px 30px;\n"]);return un=function(){return e},e}var ln=l.a.form(un()),sn=l.a.h1(cn(),we),fn=xe.a({login:xe.b().email("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),sublogin:xe.b(),password:xe.b().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")}),dn=function(){var e=ge(),n=me((function(e){return e.auth.isLoading})),t=me((function(e){return e.error.authErrorMessage})),r=Object(je.a)({initialValues:{login:"",sublogin:"",password:""},validationSchema:fn,onSubmit:function(){e(O({login:r.values.login,sublogin:r.values.sublogin,password:r.values.password}))}});return a.a.createElement(ln,{onSubmit:r.handleSubmit},a.a.createElement(sn,null,Le),t&&a.a.createElement(on,null),a.a.createElement(Be,{type:"email",name:"login",label:"\u041b\u043e\u0433\u0438\u043d",value:r.values.login,changeHandler:r.handleChange,handleBlur:r.handleBlur,hasError:!(!r.touched.login||!r.errors.login)}),a.a.createElement(Be,{type:"text",name:"sublogin",label:"\u0421\u0443\u0431\u043b\u043e\u0433\u0438\u043d",value:r.values.sublogin,changeHandler:r.handleChange,handleBlur:r.handleBlur,isOptional:!0}),a.a.createElement(Be,{type:"password",name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",value:r.values.password,changeHandler:r.handleChange,handleBlur:r.handleBlur,hasError:!(!r.touched.password||!r.errors.password)}),a.a.createElement(Ze,{type:"submit",isDisabled:0===r.values.login.length||0===r.values.password.length,isLoading:n},Ue))};function pn(){var e=Object(u.a)(["\n  margin-bottom: 20px;\n"]);return pn=function(){return e},e}function bn(){var e=Object(u.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background: #f7f7f7;\n"]);return bn=function(){return e},e}var En=l.a.div(bn()),hn=l.a.img(pn()),gn=function(){var e=Object(c.g)(),n=me((function(e){return e.auth.isLoggedIn}));return Object(r.useEffect)((function(){n&&e.push("/console")}),[n]),a.a.createElement(En,null,a.a.createElement(hn,{src:"/icons/logo.svg",alt:""}),a.a.createElement(dn,null))},mn=t(107);function vn(){return(vn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function On(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var xn=r.createElement("g",{opacity:.8},r.createElement("path",{d:"M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M16 17L21 12L16 7",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M21 12H9",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function jn(e,n){var t=e.title,a=e.titleId,o=On(e,["title","titleId"]);return r.createElement("svg",vn({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:n,"aria-labelledby":a},o),t?r.createElement("title",{id:a},t):null,xn)}var yn=r.forwardRef(jn);t.p;function Sn(){return(Sn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function wn(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Rn=r.createElement("circle",{cx:15,cy:15,r:15,fill:"#C4C4C4"}),kn=r.createElement("circle",{cx:70,cy:15,r:15,fill:"#C4C4C4"}),Cn=r.createElement("rect",{x:35,width:15,height:30,fill:"#C4C4C4"}),Tn=r.createElement("path",{d:"M100 0H115L100 30H85L100 0Z",fill:"#C4C4C4"});function _n(e,n){var t=e.title,a=e.titleId,o=wn(e,["title","titleId"]);return r.createElement("svg",Sn({width:115,height:30,viewBox:"0 0 115 30",fill:"none",ref:n,"aria-labelledby":a},o),t?r.createElement("title",{id:a},t):null,Rn,kn,Cn,Tn)}var Ln=r.forwardRef(_n);t.p;function Un(){return(Un=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Nn(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Hn=r.createElement("path",{d:"M6 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V6M19 6V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H14M14 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V14M1 14V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H6",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"});function Dn(e,n){var t=e.title,a=e.titleId,o=Nn(e,["title","titleId"]);return r.createElement("svg",Un({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:n,"aria-labelledby":a},o),t?r.createElement("title",{id:a},t):null,Hn)}var In=r.forwardRef(Dn);t.p;function qn(){return(qn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function An(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Pn=r.createElement("path",{d:"M1 6H4C4.53043 6 5.03914 5.78929 5.41421 5.41421C5.78929 5.03914 6 4.53043 6 4V1M14 1V4C14 4.53043 14.2107 5.03914 14.5858 5.41421C14.9609 5.78929 15.4696 6 16 6H19M19 14H16C15.4696 14 14.9609 14.2107 14.5858 14.5858C14.2107 14.9609 14 15.4696 14 16V19M6 19V16C6 15.4696 5.78929 14.9609 5.41421 14.5858C5.03914 14.2107 4.53043 14 4 14H1",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"});function Mn(e,n){var t=e.title,a=e.titleId,o=An(e,["title","titleId"]);return r.createElement("svg",qn({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:n,"aria-labelledby":a},o),t?r.createElement("title",{id:a},t):null,Pn)}var zn=r.forwardRef(Mn);t.p;function Wn(){var e=Object(u.a)(["\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  background: none;\n  height: 30px;\n  display: flex;\n  align-items: center;\n\n  & > svg {\n    path {\n      transition: 0.2s ease;\n    }\n  }\n\n  &:hover {\n    & > svg {\n      path {\n        stroke: ",";\n      }\n    }\n  }\n"]);return Wn=function(){return e},e}function Qn(){var e=Object(u.a)(["\n  font-size: 16px;\n  margin-right: 8px;\n"]);return Qn=function(){return e},e}function Bn(){var e=Object(u.a)(["\n  padding: 0;\n  border: none;\n  margin-right: 30px;\n  background: none;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  height: 30px;\n\n  & > svg {\n    path {\n      transition: 0.2s ease;\n    }\n  }\n\n  & > div {\n    transition: 0.2s ease;\n  }\n\n  &:hover {\n    & > svg {\n      path {\n        stroke: ",";\n      }\n    }\n\n    & > div {\n      color: ",";\n    }\n  }\n"]);return Bn=function(){return e},e}function Gn(){var e=Object(u.a)(["\n  border: 1px solid ",";\n  margin-right: 30px;\n  padding: 5px 15px;\n  border-radius: 5px;\n\n  & > span {\n    color: ",";\n  }\n"]);return Gn=function(){return e},e}function Vn(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return Vn=function(){return e},e}function Jn(){var e=Object(u.a)(["\n  display: flex;\n"]);return Jn=function(){return e},e}function Yn(){var e=Object(u.a)(["\n  font-size: 20px;\n  display: flex;\n  margin: 0 0 0 20px;\n  line-height: 30px;\n  font-weight: normal;\n"]);return Yn=function(){return e},e}function Fn(){var e=Object(u.a)(["\n  padding: 10px 15px;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid ",";\n"]);return Fn=function(){return e},e}var Xn=l.a.div(Fn(),Se),Kn=l.a.h1(Yn()),Zn=l.a.div(Jn()),$n=l.a.div(Vn()),et=l.a.div(Gn(),Ce,we),nt=l.a.button(Bn(),Re,Re),tt=l.a.div(Qn()),rt=l.a.button(Wn(),Re),at=function(e){var n=e.fullScreenHandler,t=ge(),r=Object(c.g)(),o=function(){var e=Object(mn.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.active){e.next=5;break}return e.next=3,n.exit();case 3:e.next=7;break;case 5:return e.next=7,n.enter();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(Xn,null,a.a.createElement(Zn,null,a.a.createElement(Ln,null),a.a.createElement(Kn,null,Le)),a.a.createElement($n,null,a.a.createElement(et,null,"email ",a.a.createElement("span",null,":")," sublogin"),a.a.createElement(nt,{onClick:function(){t(w()),r.push("/")}},a.a.createElement(tt,null,He),a.a.createElement(yn,null)),a.a.createElement(rt,{onClick:o},n.active?a.a.createElement(zn,null):a.a.createElement(In,null))))};function ot(){return(ot=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function it(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var ct=r.createElement("g",{clipPath:"url(#clip0)"},r.createElement("circle",{cx:3,cy:2,r:2,fill:"black",fillOpacity:.2}),r.createElement("circle",{cx:3,cy:9,r:2,fill:"black",fillOpacity:.2}),r.createElement("circle",{cx:3,cy:16,r:2,fill:"black",fillOpacity:.2})),ut=r.createElement("defs",null,r.createElement("clipPath",{id:"clip0"},r.createElement("rect",{x:0,width:6,height:18,fill:"white"})));function lt(e,n){var t=e.title,a=e.titleId,o=it(e,["title","titleId"]);return r.createElement("svg",ot({width:6,height:18,viewBox:"0 0 6 18",fill:"none",ref:n,"aria-labelledby":a},o),t?r.createElement("title",{id:a},t):null,ct,ut)}var st=r.forwardRef(lt);t.p;function ft(){var e=Object(u.a)(["\n  padding: 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n"]);return ft=function(){return e},e}function dt(){var e=Object(u.a)(["\n  font-size: 16px;\n  margin-left: 5px;\n"]);return dt=function(){return e},e}function pt(){var e=Object(u.a)(["\n  height: 10px;\n  width: 10px;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 50px;\n  box-sizing: border-box;\n"]);return pt=function(){return e},e}function bt(){var e=Object(u.a)(["\n  height: 30px;\n  background: #ffffff;\n  border-radius: 5px;\n  width: fit-content;\n  padding: 0 10px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n  margin-right: 10px;\n  transition: box-shadow 0.2s ease;\n\n  &:hover {\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);\n  }\n"]);return bt=function(){return e},e}var Et=l.a.button(bt()),ht=l.a.div(pt(),(function(e){return e.hasError?ye:"#30B800"}),Se),gt=l.a.div(dt()),mt=l.a.button(ft()),vt=function(e){var n=e.actionName,t=e.hasError,r=e.requestText,o=ge();return a.a.createElement(Et,{className:"saved-request",onClick:function(){o(I({currentRequest:r}))}},a.a.createElement(ht,{hasError:t}),a.a.createElement(gt,null,n),a.a.createElement(mt,null,a.a.createElement(st,null)))};function Ot(){return(Ot=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function xt(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var jt=r.createElement("path",{d:"M1 1L19 19",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round"}),yt=r.createElement("path",{d:"M19 1L1 19",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round"});function St(e,n){var t=e.title,a=e.titleId,o=xt(e,["title","titleId"]);return r.createElement("svg",Ot({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:n,"aria-labelledby":a},o),t?r.createElement("title",{id:a},t):null,jt,yt)}var wt=r.forwardRef(St);t.p;function Rt(){var e=Object(u.a)(["\n  height: 48px;\n  width: 15px;\n  z-index: 2;\n  position: fixed;\n  right: 50px;\n  background: linear-gradient(269.93deg, #f6f6f6 0.06%, rgba(246, 246, 246, 0) 99.93%);\n"]);return Rt=function(){return e},e}function kt(){var e=Object(u.a)(["\n  height: 48px;\n  cursor: pointer;\n  background: #f6f6f6;\n  border: none;\n  z-index: 2;\n  min-width: 50px;\n  border-left: 1px solid ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  & > svg {\n    path {\n      transition: 0.2s ease;\n    }\n  }\n\n  &:hover {\n    & > svg {\n      path {\n        stroke: ",";\n      }\n    }\n  }\n"]);return kt=function(){return e},e}function Ct(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return Ct=function(){return e},e}function Tt(){var e=Object(u.a)(["\n  height: 40px;\n  display: flex;\n  align-items: center;\n  padding: 0 0 0 15px;\n  position: relative;\n  overflow-x: scroll;\n\n  //TODO \u043d\u0430\u0439\u0442\u0438 \u043f\u043e\u043b\u0438\u0444\u0438\u043b\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);return Tt=function(){return e},e}function _t(){var e=Object(u.a)(["\n  height: 50px;\n  border-bottom: 1px solid ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return _t=function(){return e},e}var Lt=l.a.div(_t(),Se),Ut=l.a.div(Tt()),Nt=l.a.div(Ct()),Ht=l.a.button(kt(),Se,Re),Dt=l.a.div(Rt()),It=function(){var e=ge(),n=me((function(e){return e.requests.requestsHistory}));return a.a.createElement(Lt,null,a.a.createElement(Ut,null,n.map((function(e){return a.a.createElement(vt,{key:e.id,actionName:e.actionName,hasError:e.hasError,requestText:e.requestText})}))),a.a.createElement(Nt,null,a.a.createElement(Dt,null),a.a.createElement(Ht,{onClick:function(){return e(z())}},a.a.createElement(wt,null))))};function qt(){return(qt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function At(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Pt=r.createElement("g",{opacity:.8},r.createElement("path",{d:"M21 10H7",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M11 6H3",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M12 14H7",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M7 18H3",stroke:"#0D0D0D",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function Mt(e,n){var t=e.title,a=e.titleId,o=At(e,["title","titleId"]);return r.createElement("svg",qt({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:n,"aria-labelledby":a},o),t?r.createElement("title",{id:a},t):null,Pt)}var zt=r.forwardRef(Mt);t.p;function Wt(){var e=Object(u.a)(["\n  font-size: 16px;\n  margin-left: 8px;\n"]);return Wt=function(){return e},e}function Qt(){var e=Object(u.a)(["\n  background: none;\n  border: 2px solid #ffffff;\n  box-sizing: content-box;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n\n  & > svg {\n    path {\n      transition: 0.2s ease;\n    }\n  }\n\n  & > div {\n    transition: 0.2s ease;\n  }\n\n  &:hover {\n    & > svg {\n      path {\n        stroke: ",";\n      }\n    }\n\n    & > div {\n      color: ",";\n    }\n  }\n\n  &:focus {\n    border: 2px solid ",";\n    border-radius: 7px;\n  }\n"]);return Qt=function(){return e},e}function Bt(){var e=Object(u.a)(["\n  color: #999999;\n  text-decoration: none;\n"]);return Bt=function(){return e},e}function Gt(){var e=Object(u.a)(["\n  background: #ffffff;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  border-top: 1px solid ",";\n"]);return Gt=function(){return e},e}var Vt=l.a.div(Gt(),Se),Jt=l.a.a(Bt()),Yt=l.a.button(Qt(),Re,Re,ke),Ft=l.a.div(Wt()),Xt=function(){var e=ge(),n=me((function(e){return e.requests})),t=n.currentRequest,o=n.isLoading,i=Object(r.useCallback)((function(){e(D(t))}),[t]),c=Object(r.useCallback)((function(){try{var n=JSON.parse(t);e(I({currentRequest:JSON.stringify(n,null,4)}))}catch(r){e(P({hasRequestSyntaxError:!0}))}}),[t]);return a.a.createElement(Vt,null,a.a.createElement(Ze,{isLoading:o,isDisabled:!1,type:"button",clickHandler:i},De),a.a.createElement(Jt,{href:"https://github.com/davadzh"},"@davadzh"),a.a.createElement(Yt,{onClick:c},a.a.createElement(zt,null),a.a.createElement(Ft,null,Ie)))},Kt=t(25);function Zt(){var e=Object(u.a)(["\n  border: none;\n  cursor: col-resize;\n  width: 10px;\n  background: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & > svg {\n    min-width: 10px;\n    circle {\n      transition: 0.2s ease;\n    }\n  }\n\n  &:hover {\n    & > svg {\n      circle {\n        fill-opacity: 0.3;\n      }\n    }\n  }\n"]);return Zt=function(){return e},e}var $t=l.a.button(Zt()),er=function(){var e=Object(r.useContext)(hr).onMouseHoldDown;return a.a.createElement($t,{onMouseDown:e},a.a.createElement(st,null))};function nr(){var e=Object(u.a)(["\n  color: ",";\n  transition: color 0.2s ease;\n  height: 20px;\n  display: flex;\n  width: 100%;\n  font-size: 12px;\n"]);return nr=function(){return e},e}function tr(){var e=Object(u.a)(["\n  resize: none;\n  border: 1px solid ",";\n  box-shadow: ",";\n  //TODO wrapper is getting jelly effect because of transition\n  //transition-property: border, box-shadow;\n  //transition: all 0.2s ease;\n  box-sizing: border-box;\n  border-radius: 5px;\n  padding: 10px;\n  min-width: 400px;\n  max-width: 100%;\n  height: calc(100% - 20px);\n  outline: none;\n"]);return tr=function(){return e},e}function rr(){var e=Object(u.a)(["\n  max-width: calc(100% - 410px);\n  min-width: 400px;\n"]);return rr=function(){return e},e}var ar=l.a.div(rr()),or=l.a.textarea(tr(),(function(e){return e.hasError?ye:Se}),(function(e){return e.hasError?_e:"none"})),ir=l.a.label(nr(),(function(e){return e.hasError?ye:Te})),cr=a.a.memo((function(e){var n=e.setLeftPaneWidth,t=ge(),o=Object(r.createRef)(),i=Object(r.useContext)(hr),c=i.clientWidth,u=i.setClientWidth,l=me((function(e){return e.requests})),s=l.currentRequest,f=l.hasRequestSyntaxError;return Object(r.useEffect)((function(){if(null===o||void 0===o?void 0:o.current){if(!c)return void u(o.current.clientWidth);o.current.style.width=c+"px",n(c+"px")}}),[c]),a.a.createElement(ar,null,a.a.createElement(ir,{hasError:f},Ae),a.a.createElement(or,{ref:o,value:s,onChange:function(e){return t(I({currentRequest:e.target.value}))},hasError:f}))}));function ur(){var e=Object(u.a)(["\n  resize: none;\n  border: 1px solid ",";\n  box-shadow: ",';\n  //TODO \u0438\u0437-\u0437\u0430 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044f \u0432\u0432\u043e\u0434\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u0438 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442 "\u043f\u043b\u044b\u0442\u044c"\n  //transition-property: border, box-shadow;\n  //transition: all 0.2s ease;\n  box-sizing: border-box;\n  border-radius: 5px;\n  width: 100%;\n  min-height: calc(100% - 20px);\n  padding: 10px;\n  white-space: break-spaces;\n  word-break: break-all;\n  background: none;\n  color: ',";\n"]);return ur=function(){return e},e}function lr(){var e=Object(u.a)(["\n  height: 20px;\n  display: flex;\n  color: ",";\n  transition: color 0.2s ease;\n  font-size: 12px;\n"]);return lr=function(){return e},e}function sr(){var e=Object(u.a)(["\n  min-width: 400px;\n"]);return sr=function(){return e},e}var fr=l.a.div(sr()),dr=l.a.div(lr(),(function(e){return e.hasError?ye:Te})),pr=l.a.textarea(ur(),(function(e){return e.hasError?ye:Se}),(function(e){return e.hasError?"0px 0px 5px rgba(207, 44, 0, 0.5)":"none"}),we),br=a.a.memo((function(e){var n=e.leftPaneWidth,t=me((function(e){return e.requests})),r=t.currentResponse,o=t.hasResponseError;return a.a.createElement(fr,{style:{width:"calc(100% - ".concat(n,")")}},a.a.createElement(dr,{hasError:o},Pe),a.a.createElement(pr,{hasError:o,disabled:!0,defaultValue:r}))}));function Er(){var e=Object(u.a)(["\n  flex-grow: 1;\n  display: flex;\n  padding: 10px 15px 15px 15px;\n  background: #ffffff;\n  overflow: scroll;\n"]);return Er=function(){return e},e}var hr=Object(r.createContext)({}),gr=l.a.div(Er()),mr=function(){var e=Object(r.useState)(null),n=Object(Kt.a)(e,2),t=n[0],o=n[1],i=Object(r.useState)("400px"),c=Object(Kt.a)(i,2),u=c[0],l=c[1],s=Object(r.useRef)(null),f=function(){s.current=null},d=function(e){s.current&&t&&(o(t+e.clientX-s.current),s.current=e.clientX)};return Object(r.useEffect)((function(){return document.addEventListener("mouseup",f),document.addEventListener("mousemove",d),function(){document.removeEventListener("mouseup",f),document.removeEventListener("mousemove",d)}})),a.a.createElement(gr,null,a.a.createElement(hr.Provider,{value:{clientWidth:t,setClientWidth:o,onMouseHoldDown:function(e){s.current=e.clientX}}},a.a.createElement(cr,{setLeftPaneWidth:l}),a.a.createElement(er,null),a.a.createElement(br,{leftPaneWidth:u})))},vr=t(67);function Or(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);return Or=function(){return e},e}var xr=l.a.div(Or()),jr=function(){var e=Object(vr.b)();return a.a.createElement(vr.a,{handle:e,className:"fullscreen-custom"},a.a.createElement(xr,null,a.a.createElement(at,{fullScreenHandler:e}),a.a.createElement(It,null),a.a.createElement(mr,null),a.a.createElement(Xt,null)))};var yr=function(){var e=ge(),n=me((function(e){return e.auth.isLoggedIn}));return Object(r.useEffect)((function(){e(y())}),[]),a.a.createElement(c.d,null,a.a.createElement(c.b,{path:"/",exact:!0,render:function(){return a.a.createElement(gn,null)}}),n&&a.a.createElement(c.b,{path:"/console",exact:!0,render:function(){return a.a.createElement(jr,null)}}),a.a.createElement(c.b,{path:"*",render:function(){return a.a.createElement(c.a,{to:"/"})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Sr=t(38),wr=t(108);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Sr.a,null,a.a.createElement(pe.a,{store:Oe},a.a.createElement(wr.a,{loading:null,persistor:ve},a.a.createElement(yr,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[113,1,2]]]);
//# sourceMappingURL=main.e4c3ab69.chunk.js.map