(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{"+J+N":function(e,n,t){var r=t("LboF"),a=t("okyr");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},"+cRp":function(e,n,t){"use strict";(function(e){t.d(n,"b",(function(){return m}));t("HVTF");var r=t("OT5E"),a=t("vDqi"),o=t.n(a),i=t("9kvl"),s=t("ShuE"),c=t("gjeX"),u=t.n(c),l=t("p58V"),d=t("vwip"),f=t("NFKh");function p(e,n,t){var r="",a=n,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(a=Math.round(Math.random()*(t-n))+n);for(var i=0;i<a;i++)r+=o[Math.round(Math.random()*(o.length-1))];return r}var g="http://18.163.117.43:9091/",v=o.a.create({baseURL:g,timeout:6e4});v.interceptors.request.use((function(n){n.loading&&r["a"].loading("\u52a0\u8f7d\u4e2d..."),Object(s["c"])(n),Object(s["a"])(n),n.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var t=e.store.getState().user.token;t&&(n.headers["userId"]=t.userId,t.accessToken&&(n.headers["token"]=t.accessToken));var a=n.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(a).map((function(e){return e+"="+a[e]})),c=(i=i.concat(["qid="+p(!1,16),"terminal=h5"]).sort()).join("&"),l="sign="+u()(c+o);return n.data=c+"&"+l,n}),(function(e){return e}));f.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),f.enc.Latin1.parse("jfdkwqew!#S#$%78");function h(e,n){var t=d["a"].get(e);if(!t||200!==t.code||Array.isArray(t.data)&&0===t.data.length){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n(...a).then(n=>(d["a"].set(e,n,864e5),n)).catch((function(e){return e}))}return t}v.interceptors.response.use((function(n){r["a"].hide(),Object(s["c"])(n);var t=n.data,a=e.store,o=a.dispatch,c=a.getState;if(200==t.code||-97==t.code)return t;if(-1==t.code)r["a"].info(t.data);else if(-98==t.code)o(l["default"].LoggedOut()),i["a"].push("/login"),r["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548");else if(-99==t.code){o(l["default"].ClearAccessToken());var u=c().user.token;u&&v.post("api/user/applyToken",{refershToken:u.refershToken}).then(e=>{e&&(u.accessToken=e.data.accessToken,u.refershToken=e.data.refershToken,o(l["default"].UpdateToken(u)),location.reload())})}}),(function(e){if(r["a"].hide(),e.response)switch(e.response.status){case 404:r["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:r["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:r["a"].info("\u8fde\u63a5\u8d85\u65f6");break}})),n["a"]=v;var m=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n[0],a=u.a.hex(r+"[POST]"+JSON.stringify(n));return h(a,v.post,...n)}}).call(this,t("yLpj"))},1:function(e,n){},"1Cgs":function(e,n,t){"use strict";t("ywh3"),t("+J+N")},2:function(e,n){},3:function(e,n){},4:function(e,n){},"9kvl":function(e,n,t){"use strict";var r,a,o=t("FfOG"),i=t("bCY9"),s=(t("I5X1"),t("o0o1")),c=t.n(s),u=t("HaE+"),l=(t("/xke"),t("TeRw")),d=(t("miYZ"),t("tsqr")),f=t("VTBJ"),p=t("io9h"),g=t("LtsZ");t("TTbB");(function(e){e[e["SILENT"]=0]="SILENT",e[e["WARN_MESSAGE"]=1]="WARN_MESSAGE",e[e["ERROR_MESSAGE"]=2]="ERROR_MESSAGE",e[e["NOTIFICATION"]=4]="NOTIFICATION",e[e["REDIRECT"]=9]="REDIRECT"})(a||(a={}));var v="/exception",h=i["a"].applyPlugins({key:"request",type:g["ApplyPluginsType"].modify,initialValue:{}}),m=(null===(r=h.errorConfig)||void 0===r?void 0:r.adaptor)||(e=>e),b=Object(p["b"])(Object(f["a"])({errorHandler:e=>{var n,t,r,i;if(null===e||void 0===e||null===(n=e.request)||void 0===n||null===(t=n.options)||void 0===t?void 0:t.skipErrorHandler)throw e;if("ResponseError"===e.name&&e.data&&e.request){var s,c={req:e.request,res:e.response};i=m(e.data,c),e.message=(null===(s=i)||void 0===s?void 0:s.errorMessage)||e.message,e.data=e.data,e.info=i}if(i=e.info,i){var u,f,p,g=null===(u=i)||void 0===u?void 0:u.errorMessage,b=null===(f=i)||void 0===f?void 0:f.errorCode,E=(null===(p=h.errorConfig)||void 0===p?void 0:p.errorPage)||v;switch(null===(r=i)||void 0===r?void 0:r.showType){case a.SILENT:break;case a.WARN_MESSAGE:d["a"].warn(g);break;case a.ERROR_MESSAGE:d["a"].error(g);break;case a.NOTIFICATION:l["a"].open({message:g});break;case a.REDIRECT:o["b"].push({pathname:E,query:{errorCode:b,errorMessage:g}});break;default:d["a"].error(g);break}}else d["a"].error(e.message||"Request error, please retry.");throw e}},h));b.use(function(){var e=Object(u["a"])(c.a.mark((function e(n,t){var r,a,o,i,s,u,l,d;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(a=n.req,o=n.res,!(null===(r=a.options)||void 0===r?void 0:r.skipErrorHandler)){e.next=5;break}return e.abrupt("return");case 5:if(i=a.options,s=i.getResponse,u=s?o.data:o,l=m(u,n),!1!==l.success){e.next=15;break}throw d=new Error(l.errorMessage),d.name="BizError",d.data=u,d.info=l,d;case 15:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}());var E=h.middlewares||[];E.forEach(e=>{b.use(e)}),t.d(n,"a",(function(){return o["b"]})),t.d(n,"b",(function(){return i["a"]}))},Nlzp:function(e,n,t){"use strict";t.d(n,"d",(function(){return a})),t.d(n,"r",(function(){return o})),t.d(n,"u",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"g",(function(){return c})),t.d(n,"v",(function(){return u})),t.d(n,"C",(function(){return l})),t.d(n,"B",(function(){return d})),t.d(n,"s",(function(){return f})),t.d(n,"w",(function(){return p})),t.d(n,"a",(function(){return g})),t.d(n,"j",(function(){return v})),t.d(n,"o",(function(){return h})),t.d(n,"q",(function(){return m})),t.d(n,"D",(function(){return b})),t.d(n,"p",(function(){return E})),t.d(n,"k",(function(){return y})),t.d(n,"f",(function(){return k})),t.d(n,"z",(function(){return O})),t.d(n,"A",(function(){return w})),t.d(n,"i",(function(){return C})),t.d(n,"h",(function(){return T})),t.d(n,"m",(function(){return I})),t.d(n,"b",(function(){return S})),t.d(n,"t",(function(){return N})),t.d(n,"l",(function(){return j})),t.d(n,"n",(function(){return R})),t.d(n,"x",(function(){return x})),t.d(n,"y",(function(){return A})),t.d(n,"e",(function(){return L}));var r=t("+cRp"),a=e=>r["a"].post("api/user/getVerifyCode",e),o=e=>r["a"].post("api/user/login",e,{loading:!0}),i=e=>r["a"].post("api/user/register",e,{loading:!0}),s=e=>r["a"].post("api/user/SendCode",e),c=e=>r["a"].post("api/user/forgetPass",e,{loading:!0}),u=e=>r["a"].post("api/user/resetPass",e,{loading:!0}),l=e=>r["a"].post("api/user/getRights",e),d=e=>r["a"].post("api/user/getUserInfo",e),f=e=>r["a"].post("api/site/notice",e),p=e=>r["a"].post("api/site/moduleCfg",e),g=e=>r["a"].post("api/video/Home",e),v=e=>r["a"].post("api/video/getList",e),h=e=>r["a"].post("api/video/getVideoInfo",e),m=e=>r["a"].post("api/video/getVideoRelation",e),b=e=>r["a"].post("api/video/watchingVideo",e),E=e=>r["a"].post("api/video/getVideoRank",e),y=e=>r["a"].post("api/video/getMoiveHis",e),k=e=>r["a"].post("api/video/discoveryPage",e),O=e=>r["a"].post("api/video/thematicList",e),w=e=>r["a"].post("api/video/thematicVideo",e),C=e=>r["a"].post("api/video/getGirlList",e),T=e=>r["a"].post("api/video/getGirlInfo",e),I=e=>r["a"].post("api/video/getSearchRank",e),S=e=>r["a"].post("api/recharge/PayConfig",e),N=e=>r["a"].post("api/recharge/pay",e,{loading:!0}),j=e=>r["a"].post("api/user/getOrder",e,{loading:!0}),R=e=>r["a"].post("api/user/getSpread",e),x=e=>r["a"].post("api/user/spreadInfo",e),A=e=>Object(r["b"])("api/site/spreadRules",e),L=e=>r["a"].post("api/fiction/getList",e)},ShuE:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t("ODXe"),a=t("Qyje"),o=t.n(a),i=t("vDqi"),s=t.n(i),c=new Map,u=e=>{var n=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{c.has(n)||c.set(n,e)})},l=e=>{var n=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(c.has(n)){var t=c.get(n);t(n),c.delete(n)}},d=()=>{var e=!0,n=!1,t=void 0;try{for(var a,o=c[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var i=a.value,s=Object(r["a"])(i,2),u=s[0],l=s[1];l(u)}}catch(d){n=!0,t=d}finally{try{e||null==o.return||o.return()}finally{if(n)throw t}}c.clear()}},cPB3:function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),a=t.n(r),o=t("HaE+"),i=t("q1tI"),s=t.n(i),c=t("Nlzp"),u=t("rY4l");class l extends i["Component"]{constructor(e){super(e),this.GoTo=e=>()=>{this.props.history.push(e)},this.state={nextLevDesc:"",spreadCode:"",spreadNum:""}}UNSAFE_componentWillMount(){var e=this;return Object(o["a"])(a.a.mark((function n(){var t;return a.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["x"])();case 2:t=n.sent,t&&e.setState(t.data);case 4:case"end":return n.stop()}}),n)})))()}render(){var e=this.state,n=e.nextLevDesc,t=e.spreadCode,r=e.spreadNum;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u["a"],{title:"\u63a8\u5e7f\u5206\u4eab",rightContent:s.a.createElement("div",{onClick:this.GoTo("/mypromote")},"\u6211\u7684\u63a8\u5e7f")}),s.a.createElement("div",{className:"cvs"},s.a.createElement("div",{className:"MyInviteCode"},s.a.createElement("p",null,"\u6211\u7684\u9080\u8bf7\u7801\uff1a",t),s.a.createElement("p",null,s.a.createElement("span",null,"\u5df2\u9080\u8bf7",r,"\u4eba"),s.a.createElement("span",null,n)))))}}n["default"]=l},okyr:function(e,n,t){var r=t("JPst");n=r(!1),n.push([e.i,'.am-navbar {\n  display: flex;\n  align-items: center;\n  height: 12vw;\n  background-color: #108ee9;\n  color: #fff;\n}[data-rem="true"] .am-navbar {\n  height: 1.2rem\n}\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  flex: 1 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.am-navbar-left {\n  padding-left: 4vw;\n  font-size: 4.2666667vw;\n}[data-rem="true"] .am-navbar-left {\n  padding-left: 0.4rem;\n  font-size: 0.4266667rem\n}\n.am-navbar-left-icon {\n  margin-right: 1.3333333vw;\n  display: inherit;\n}[data-rem="true"] .am-navbar-left-icon {\n  margin-right: 0.1333333rem\n}\n.am-navbar-title {\n  justify-content: center;\n  font-size: 4.8vw;\n  white-space: nowrap;\n}[data-rem="true"] .am-navbar-title {\n  font-size: 0.48rem\n}\n.am-navbar-right {\n  justify-content: flex-end;\n  font-size: 4.2666667vw;\n  margin-right: 4vw;\n}[data-rem="true"] .am-navbar-right {\n  font-size: 0.4266667rem;\n  margin-right: 0.4rem\n}\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9;\n}\n.am-navbar-light .am-navbar-title {\n  color: #000;\n}\n',""]),e.exports=n},p58V:function(e,n,t){"use strict";t.r(n),t.d(n,"INITIAL_STATE",(function(){return u})),t.d(n,"userInfo",(function(){return p})),t.d(n,"registerYB",(function(){return g})),t.d(n,"reducer",(function(){return y}));var r=t("VTBJ"),a=t("o0o1"),o=t.n(a),i=t("HaE+"),s=t("zyFE"),c=t("Nlzp"),u={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},l=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),d=l.Types,f=l.Creators;function p(e){return function(){var e=Object(i["a"])(o.a.mark((function e(n,t){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["B"])();case 2:r=e.sent,r&&n(f.UpdateUserInfo(r.data));case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}function g(){return function(){var e=Object(i["a"])(o.a.mark((function e(n,t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}n["default"]=f;var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",n.payload,n.phone),Object.assign({},e,Object(r["a"])({loginInProgress:!1,loggedIn:!0,phone:n.phone},n.payload))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:n.payload})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return n.token&&(n.token.accessToken=null),n},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:n.payload})},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},y=Object(s["createReducer"])(u,{[d.LOGGED_IN]:v,[d.LOGGED_OUT]:E,[d.UPDATE_TOKEN]:h,[d.UPDATE_USER_INFO]:b,[d.CLEAR_ACCESS_TOKEN]:m})},rY4l:function(e,n,t){"use strict";t("1Cgs");var r=t("zvbH"),a=(t("D2jH"),t("2ROE")),o=t("q1tI"),i=t.n(o),s=t("9kvl");class c extends o["Component"]{constructor(e){super(e),this.GoBack=()=>{s["a"].goBack()},this.state={}}render(){var e=this.props,n=e.hidLift,t=e.rightContent,o=e.title,s=e.noclass,c=e.bottomColor;return s?i.a.createElement(r["a"],{icon:n?null:i.a.createElement(a["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:t},o):i.a.createElement("div",{className:"public_header"},i.a.createElement(r["a"],{icon:n?null:i.a.createElement(a["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:t},o),i.a.createElement("div",{className:"public_radius",style:{backgroundColor:c}}))}}n["a"]=c},vwip:function(e,n,t){"use strict";n["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,n,t){localStorage.removeItem(e);var r=(new Date).getTime(),a=t||this.age,o={};return o._value=n,o._time=r,o._age=r+a,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var n=!0,t=localStorage.getItem(e),r=(new Date).getTime();return t&&(t=JSON.parse(t),n=r>t._age),n},get:function(e){var n=this.isExpire(e),t=null;return n?(localStorage.removeItem(e),t):(t=localStorage.getItem(e),t=JSON.parse(t),t._value)}}},zvbH:function(e,n,t){"use strict";var r=t("QbLZ"),a=t.n(r),o=t("iCc5"),i=t.n(o),s=t("V7oC"),c=t.n(s),u=t("FYw3"),l=t.n(u),d=t("mRg0"),f=t.n(d),p=t("TSYQ"),g=t.n(p),v=t("q1tI"),h=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&(t[r[a]]=e[r[a]])}return t},m=function(e){function n(){return i()(this,n),l()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f()(n,e),c()(n,[{key:"render",value:function(){var e=this.props,n=e.prefixCls,t=e.className,r=e.children,o=e.mode,i=e.icon,s=e.onLeftClick,c=e.leftContent,u=e.rightContent,l=h(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return v["createElement"]("div",a()({},l,{className:g()(t,n,n+"-"+o)}),v["createElement"]("div",{className:n+"-left",role:"button",onClick:s},i?v["createElement"]("span",{className:n+"-left-icon","aria-hidden":"true"},i):null,c),v["createElement"]("div",{className:n+"-title"},r),v["createElement"]("div",{className:n+"-right"},u))}}]),n}(v["Component"]);n["a"]=m,m.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}}}}]);