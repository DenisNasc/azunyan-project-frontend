(this["webpackJsonpazunyan-project-frontend"]=this["webpackJsonpazunyan-project-frontend"]||[]).push([[0],{113:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(10),o=t.n(c),i=t(33),u=t(40),l=t(8),s={defaultSpacing:"20px",colors:{purple:"#3c3344",lightBlue:"#789ab3",red:"#9f4c4c",black:"#3d3d3d"}},d=t(29),p=t(68),f=t(43),m=t(16),b=function(e,n){return{type:"app:APP_FORM_CHANGE_VALUE",payload:{form:{key:e,value:n}}}},h={errorMessage:"",stateController:{start:!1,success:!1,fail:!1},form:{videoUrl:"",name:"",noVideo:!0,duration:"",startTime:""}},v={app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"app:APP_START":return Object(m.a)({},e,{stateController:Object(m.a)({},e.stateController,{start:!0})});case"app:APP_SUCCESS":return Object(m.a)({},e,{errorMessage:"",stateController:Object(m.a)({},e.stateController,{success:!0})});case"app:APP_FAIL":var t;return(null===(t=n.payload)||void 0===t?void 0:t.errorMessage)?Object(m.a)({},e,{errorMessage:n.payload.errorMessage,stateController:Object(m.a)({},e.stateController,{fail:!0})}):Object(m.a)({},e);case"app:APP_FORM_CHANGE_VALUE":var r;if(!(null===(r=n.payload)||void 0===r?void 0:r.form))return Object(m.a)({},e);var a=n.payload.form,c=a.key,o=a.value,i=Object(m.a)({},e.form,Object(f.a)({},c,o));return Object(m.a)({},e,{form:i});case"app:APP_RESET_FORM":return Object(m.a)({},h);default:return Object(m.a)({},e)}}},j=Object(d.combineReducers)(v),g=Object(d.createStore)(j,Object(p.composeWithDevTools)()),O=t(9),x=t(141),y=t(114);function w(){var e=Object(O.a)(["\n  && {\n    font-size: 14px;\n  }\n"]);return w=function(){return e},e}function E(){var e=Object(O.a)(["\n  list-style: none;\n  display: flex;\n\n  li {\n    margin-left: 20px;\n  }\n  a {\n    text-decoration: none;\n    color: white;\n    font-size: 18px;\n  }\n  a:hover {\n    opacity: 0.6;\n  }\n"]);return E=function(){return e},e}function k(){var e=Object(O.a)(["\n  font-size: 20px;\n"]);return k=function(){return e},e}function C(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  color: white;\n  background: ",";\n  height: ",";\n  border-radius: 0px;\n"]);return C=function(){return e},e}var R=[{label:"home",link:"/azunyan-project-frontend"},{label:"about",link:"/azunyan-project-frontend/about"}],U=Object(l.c)(x.a).attrs({elevation:0,component:"header"})(C(),(function(e){return e.theme.colors.purple}),(function(e){return e.height})),S=Object(l.c)(y.a)(k()),A=l.c.ul(E()),P=Object(l.c)(u.b)(w()),_=function(e){var n=e.height;return a.a.createElement(U,{height:n},a.a.createElement(S,{variant:"h4"},"Azunyan"),a.a.createElement("nav",null,a.a.createElement(A,null,R.map((function(e){var n=e.label,t=e.link;return a.a.createElement("li",{key:n},a.a.createElement(P,{to:t},n.toUpperCase()))})))))};function T(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  color: white;\n  background: ",";\n  height: ",";\n"]);return T=function(){return e},e}var M=l.c.footer(T(),(function(e){return e.theme.colors.black}),(function(e){return e.height})),z=function(e){var n=e.height;return a.a.createElement(M,{height:n},a.a.createElement(y.a,null,"\xa9 2020"))},F=t(13),B=t(36),L=t.n(B),I=t(46),H=t(34),V=t(146),D=t(151),q=t(147),X=t(75),N=t.n(X),W={baseURL:"",responseType:"blob",headers:{}};console.log("production");var G=N.a.create(W),J=function(){var e=Object(I.a)(L.a.mark((function e(n,t){var r,a,c,o,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.post(n,Object(m.a)({},t));case 2:r=e.sent,a=r.data,c=window.URL.createObjectURL(new Blob([a])),(o=document.createElement("a")).href=c,i="".concat(t.name,".mp3"),o.setAttribute("download",i),document.body.appendChild(o),o.click();case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),$=t(149);function Y(){var e=Object(O.a)(["\n  margin: 10px 0px;\n  & input:valid + fieldset {\n    border-color: ",";\n    border-width: 1px;\n  }\n\n  & input:valid:focus + fieldset {\n    border-color: ",";\n    border-width: 1px;\n    border-left-width: 6px;\n  }\n\n  & input:invalid + fieldset {\n    border-color: green;\n  }\n\n  && {\n    width: 100%;\n  }\n"]);return Y=function(){return e},e}var K=Object(l.c)($.a)(Y(),(function(e){return e.theme.colors.purple}),(function(e){return e.theme.colors.lightBlue})),Q=function(e){var n=e.type,t=void 0===n?"text":n,c=e.name,o=e.isRequired,i=void 0!==o&&o,u=e.label,l=e.dispatch,s=e.placeholder,d=e.autoFocus,p=void 0!==d&&d,f=e.value,m=Object(r.useState)(""),h=Object(H.a)(m,2),v=h[0],j=h[1],g=Object(r.useCallback)((function(e){j(e||!i?"":"Este campo n\xe3o pode ficar vazio")}),[i]),O=Object(r.useCallback)((function(e){g(e.target.value)}),[g]),x=Object(r.useCallback)((function(){j("")}),[]),y=Object(r.useCallback)((function(e){var n=b(c,e.target.value);l(n)}),[l,c]);return a.a.createElement(K,{value:f,variant:"outlined",onChange:y,onBlur:O,onFocus:x,type:t,name:c,label:u,placeholder:s,helperText:v,error:!!v,autoFocus:p})},Z=t(150);function ee(){var e=Object(O.a)(["\n  margin-top: 20px;\n"]);return ee=function(){return e},e}var ne=Object(l.c)(Z.a).attrs({severity:"error"})(ee()),te=function(e){var n=e.errorMessage;return a.a.createElement(ne,null,n)};function re(){var e=Object(O.a)(["\n  width: 25%;\n  margin-top: 20px;\n  color: ",";\n  border-color: ",";\n"]);return re=function(){return e},e}function ae(){var e=Object(O.a)(["\n  width: 75%;\n  margin-top: 20px;\n  margin-right: 20px;\n  color: ",";\n  border-color: ",";\n"]);return ae=function(){return e},e}function ce(){var e=Object(O.a)(["\n  width: 100%;\n  display: flex;\n"]);return ce=function(){return e},e}function oe(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  &:last-child {\n    margin-left: 20px;\n  }\n"]);return oe=function(){return e},e}function ie(){var e=Object(O.a)(["\n  && {\n    color: ",";\n  }\n"]);return ie=function(){return e},e}function ue(){var e=Object(O.a)(["\n  align-self: flex-start;\n  margin: 0px;\n"]);return ue=function(){return e},e}function le(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n\n  padding: 0px 40px;\n"]);return le=function(){return e},e}function se(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background: none;\n  max-width: 920px;\n  border-radius: 0px;\n\n  margin-bottom: ",";\n"]);return se=function(){return e},e}var de=Object(l.c)(x.a)(se(),(function(e){return e.theme.defaultSpacing})),pe=l.c.form(le()),fe=Object(l.c)(V.a)(ue()),me=Object(l.c)(D.a)(ie(),(function(e){return e.theme.colors.purple})),be=l.c.div(oe()),he=l.c.div(ce()),ve=Object(l.c)(q.a)(ae(),(function(e){return e.theme.colors.lightBlue}),(function(e){return e.theme.colors.lightBlue})),je=Object(l.c)(q.a)(re(),(function(e){return e.theme.colors.red}),(function(e){return e.theme.colors.red})),ge=function(){var e=Object(i.b)(),n=Object(i.c)((function(e){return e.app})).form,t=Object(r.useState)(!1),c=Object(H.a)(t,2),o=c[0],u=c[1],l=Object(r.useState)(""),s=Object(H.a)(l,2),d=s[0],p=s[1],f=function(e){return!!e.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/gm)},h=Object(r.useCallback)((function(n,t){e(b("noVideo",t))}),[e]),v=Object(r.useCallback)(function(){var e=Object(I.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,u(!0),n.videoUrl){e.next=5;break}throw new TypeError("Insira uma URL");case 5:if(n.name){e.next=7;break}throw new TypeError("Insira um nome para o arquivo");case 7:if(f(n.videoUrl)){e.next=9;break}throw new TypeError('insira uma URL no formato "https://www.youtube.com/watch?v=VIDEO_ID" ');case 9:return e.next=11,J("/",Object(m.a)({},n));case 11:p(""),u(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),p(e.t0.message),u(!1);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(n){return e.apply(this,arguments)}}(),[n]),j=Object(r.useCallback)((function(){e({type:"app:APP_RESET_FORM"})}),[e]);return a.a.createElement(de,{elevation:0},a.a.createElement(pe,{onSubmit:v},a.a.createElement(Q,{dispatch:e,type:"text",name:"videoUrl",label:"Youtube URL",isRequired:!0,validation:f,autoFocus:!0,value:n.videoUrl}),a.a.createElement(Q,{dispatch:e,type:"text",name:"name",label:"File Name",value:n.name,isRequired:!0}),a.a.createElement(fe,{value:"start",labelPlacement:"start",control:a.a.createElement(me,{checked:n.noVideo,onChange:h}),label:"S\xf3 audio ?"}),a.a.createElement(be,null,a.a.createElement(Q,{dispatch:e,type:"text",name:"startTime",label:"In\xedcio",value:n.startTime,placeholder:"00:00"}),a.a.createElement(Q,{dispatch:e,type:"text",name:"duration",label:"Dura\xe7\xe3o",value:n.duration,placeholder:"XX:XX"})),d&&a.a.createElement(te,{errorMessage:d}),a.a.createElement(he,null,a.a.createElement(ve,{variant:"outlined",type:"submit",disabled:o},"Baixar"),a.a.createElement(je,{variant:"outlined",type:"button",onClick:j,disabled:o},"Resetar"))))};function Oe(){var e=Object(O.a)(["\n  width: 100vw;\n  height: 56vw;\n  max-width: 920px;\n  max-height: 520px;\n"]);return Oe=function(){return e},e}function xe(){var e=Object(O.a)(["\n  border-radius: 0px;\n  margin-bottom: 20px;\n  padding-top: 20px;\n\n  @media only screen and (max-width: 920px) {\n    padding-top: 0px;\n  }\n"]);return xe=function(){return e},e}var ye=Object(l.c)(x.a)(xe()),we=l.c.iframe(Oe()),Ee=function(e){var n=e.videoUrl,t=Object(r.useState)(""),c=Object(H.a)(t,2),o=c[0],i=c[1];Object(r.useEffect)((function(){u(n)}),[n]);var u=function(e){var n=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);i(n&&11===n[7].length?n[7]:"")};return a.a.createElement(ye,{elevation:0},o&&a.a.createElement(we,{width:"560",height:"315",title:"oi",src:"https://www.youtube.com/embed/".concat(o),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}))};function ke(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: 920px;\n"]);return ke=function(){return e},e}var Ce=l.c.div(ke()),Re=function(){var e=Object(i.c)((function(e){return e.app})).form;return a.a.createElement(Ce,null,a.a.createElement(Ee,{videoUrl:e.videoUrl}),a.a.createElement(ge,null))},Ue=function(){return a.a.createElement(F.c,null,a.a.createElement(F.a,{path:"/azunyan-project-frontend"},a.a.createElement(Re,null)))};function Se(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n\n  min-height: calc(\n    100% - "," - ","\n  );\n\n  padding: 0px 0px;\n"]);return Se=function(){return e},e}function Ae(){var e=Object(O.a)(["\n  body {\n    height: 100vh;\n    background: white\n  }\n  * {\n    box-sizing: border-box;\n  }\n  div#root {\n    height: 100%\n  }\n"]);return Ae=function(){return e},e}var Pe=Object(l.b)(Ae()),_e=l.c.main(Se(),(function(e){return e.footerHeight}),(function(e){return e.headerHeight})),Te=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Pe,null),a.a.createElement(_,{height:"60px"}),a.a.createElement(_e,{headerHeight:"60px",footerHeight:"30px"},a.a.createElement(Ue,null)),a.a.createElement(z,{height:"30px"}))},Me=t(148),ze=function(){return a.a.createElement(i.a,{store:g},a.a.createElement(u.a,null,a.a.createElement(l.a,{theme:s},a.a.createElement(Me.a,null),a.a.createElement(Te,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,n,t){e.exports=t(113)}},[[86,1,2]]]);
//# sourceMappingURL=main.57dcdfd9.chunk.js.map