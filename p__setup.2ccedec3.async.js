(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"+cRp":function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return E}));r("HVTF");var n=r("OT5E"),a=r("vDqi"),o=r.n(a),i=r("9kvl"),s=r("ShuE"),u=r("gjeX"),c=r.n(u),d=r("p58V"),l=r("vwip");function p(e,t,r){var n="",a=t,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(a=Math.round(Math.random()*(r-t))+t);for(var i=0;i<a;i++)n+=o[Math.round(Math.random()*(o.length-1))];return n}var f="http://18.163.117.43:9091/",g=o.a.create({baseURL:f,timeout:6e4});g.interceptors.request.use((function(t){t.loading&&n["a"].loading("\u52a0\u8f7d\u4e2d..."),Object(s["c"])(t),Object(s["a"])(t),t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var r=e.store.getState().user.token;r&&(t.headers["userId"]=r.userId,r.accessToken&&(t.headers["token"]=r.accessToken));var a=t.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(a).map((function(e){return e+"="+a[e]})),u=(i=i.concat(["qid="+p(!1,16),"terminal=h5"]).sort()).join("&"),d="sign="+c()(u+o);return t.data=u+"&"+d,t}),(function(e){return e}));var h=CryptoJS.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),v=CryptoJS.enc.Latin1.parse("jfdkwqew!#S#$%78");function m(e,t){var r=l["a"].get(e);if(!r||200!==r.code||Array.isArray(r.data)&&0===r.data.length){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];return t(...a).then(t=>(l["a"].set(e,t,864e5),t)).catch((function(e){return e}))}return r}g.interceptors.response.use((function(t){n["a"].hide(),Object(s["c"])(t),console.log(999,CryptoJS.AES.decrypt(t.data,h,{iv:v,mode:CryptoJS.mode.CBC,adding:CryptoJS.pad.ZeroPadding}).toString(CryptoJS.enc.Utf8));var r=JSON.parse(CryptoJS.AES.decrypt(t.data,h,{iv:v,mode:CryptoJS.mode.CBC,adding:CryptoJS.pad.ZeroPadding}).toString(CryptoJS.enc.Utf8).replace(/\0/g,"")),a=e.store,o=a.dispatch,u=a.getState;if(200==r.code)return r;if(-1==r.code)n["a"].info(r.data);else if(-98==r.code)n["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),o(d["default"].UpdateToken(null)),o(d["default"].UpdateUserInfo(null)),i["a"].push("/login");else if(-99==r.code){o(d["default"].ClearAccessToken());var c=u().user.token;c&&g.post("api/user/applyToken",{refershToken:c.refershToken}).then(e=>{e&&(c.accessToken=e.data.accessToken,c.refershToken=e.data.refershToken,o(d["default"].UpdateToken(c)),i["a"].replace({pathname:i["a"].location.pathname}))})}}),(function(e){if(n["a"].hide(),e.response)switch(e.response.status){case 404:n["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:n["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:n["a"].info("\u8fde\u63a5\u8d85\u65f6");break}})),t["a"]=g;var E=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0],a=c.a.hex(n+"[POST]"+JSON.stringify(t));return m(a,g.post,...t)}}).call(this,r("yLpj"))},"1Drs":function(e,t,r){var n=r("JPst");t=n(!1),t.push([e.i,".setup {\n  flex: 1 1;\n  background-color: #FAFAFA;\n}\n",""]),e.exports=t},"9OiP":function(e,t,r){var n=r("LboF"),a=r("1Drs");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(n(a,o),a.locals?a.locals:{});e.exports=i},"9kvl":function(e,t,r){"use strict";var n,a,o=r("FfOG"),i=r("bCY9"),s=(r("I5X1"),r("o0o1")),u=r.n(s),c=r("HaE+"),d=(r("/xke"),r("TeRw")),l=(r("miYZ"),r("tsqr")),p=r("VTBJ"),f=r("io9h"),g=r("LtsZ");r("TTbB");(function(e){e[e["SILENT"]=0]="SILENT",e[e["WARN_MESSAGE"]=1]="WARN_MESSAGE",e[e["ERROR_MESSAGE"]=2]="ERROR_MESSAGE",e[e["NOTIFICATION"]=4]="NOTIFICATION",e[e["REDIRECT"]=9]="REDIRECT"})(a||(a={}));var h="/exception",v=i["a"].applyPlugins({key:"request",type:g["ApplyPluginsType"].modify,initialValue:{}}),m=(null===(n=v.errorConfig)||void 0===n?void 0:n.adaptor)||(e=>e),E=Object(f["b"])(Object(p["a"])({errorHandler:e=>{var t,r,n,i;if(null===e||void 0===e||null===(t=e.request)||void 0===t||null===(r=t.options)||void 0===r?void 0:r.skipErrorHandler)throw e;if("ResponseError"===e.name&&e.data&&e.request){var s,u={req:e.request,res:e.response};i=m(e.data,u),e.message=(null===(s=i)||void 0===s?void 0:s.errorMessage)||e.message,e.data=e.data,e.info=i}if(i=e.info,i){var c,p,f,g=null===(c=i)||void 0===c?void 0:c.errorMessage,E=null===(p=i)||void 0===p?void 0:p.errorCode,k=(null===(f=v.errorConfig)||void 0===f?void 0:f.errorPage)||h;switch(null===(n=i)||void 0===n?void 0:n.showType){case a.SILENT:break;case a.WARN_MESSAGE:l["a"].warn(g);break;case a.ERROR_MESSAGE:l["a"].error(g);break;case a.NOTIFICATION:d["a"].open({message:g});break;case a.REDIRECT:o["b"].push({pathname:k,query:{errorCode:E,errorMessage:g}});break;default:l["a"].error(g);break}}else l["a"].error(e.message||"Request error, please retry.");throw e}},v));E.use(function(){var e=Object(c["a"])(u.a.mark((function e(t,r){var n,a,o,i,s,c,d,l;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:if(a=t.req,o=t.res,!(null===(n=a.options)||void 0===n?void 0:n.skipErrorHandler)){e.next=5;break}return e.abrupt("return");case 5:if(i=a.options,s=i.getResponse,c=s?o.data:o,d=m(c,t),!1!==d.success){e.next=15;break}throw l=new Error(d.errorMessage),l.name="BizError",l.data=c,l.info=d,l;case 15:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());var k=v.middlewares||[];k.forEach(e=>{E.use(e)}),r.d(t,"a",(function(){return o["b"]})),r.d(t,"b",(function(){return i["a"]}))},Nlzp:function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"q",(function(){return o})),r.d(t,"t",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"f",(function(){return u})),r.d(t,"u",(function(){return c})),r.d(t,"B",(function(){return d})),r.d(t,"A",(function(){return l})),r.d(t,"r",(function(){return p})),r.d(t,"v",(function(){return f})),r.d(t,"a",(function(){return g})),r.d(t,"i",(function(){return h})),r.d(t,"n",(function(){return v})),r.d(t,"p",(function(){return m})),r.d(t,"C",(function(){return E})),r.d(t,"o",(function(){return k})),r.d(t,"j",(function(){return y})),r.d(t,"e",(function(){return S})),r.d(t,"y",(function(){return T})),r.d(t,"z",(function(){return I})),r.d(t,"h",(function(){return O})),r.d(t,"g",(function(){return b})),r.d(t,"l",(function(){return w})),r.d(t,"b",(function(){return C})),r.d(t,"s",(function(){return A})),r.d(t,"k",(function(){return R})),r.d(t,"m",(function(){return N})),r.d(t,"w",(function(){return j})),r.d(t,"x",(function(){return x}));var n=r("+cRp"),a=e=>n["a"].post("api/user/getVerifyCode",e),o=e=>n["a"].post("api/user/login",e,{loading:!0}),i=e=>n["a"].post("api/user/register",e,{loading:!0}),s=e=>n["a"].post("api/user/SendCode",e),u=e=>n["a"].post("api/user/forgetPass",e,{loading:!0}),c=e=>n["a"].post("api/user/resetPass",e,{loading:!0}),d=e=>n["a"].post("api/user/getRights",e),l=e=>n["a"].post("api/user/getUserInfo",e),p=e=>n["a"].post("api/site/notice",e),f=e=>n["a"].post("api/site/moduleCfg",e),g=e=>n["a"].post("api/video/Home",e),h=e=>n["a"].post("api/video/getList",e),v=e=>n["a"].post("api/video/getVideoInfo",e),m=e=>n["a"].post("api/video/getVideoRelation",e),E=e=>n["a"].post("api/video/watchingVideo",e),k=e=>n["a"].post("api/video/getVideoRank",e),y=e=>n["a"].post("api/video/getMoiveHis",e),S=e=>n["a"].post("api/video/discoveryPage",e),T=e=>n["a"].post("api/video/thematicList",e),I=e=>n["a"].post("api/video/thematicVideo",e),O=e=>n["a"].post("api/video/getGirlList",e),b=e=>n["a"].post("api/video/getGirlInfo",e),w=e=>n["a"].post("api/video/getSearchRank",e),C=e=>n["a"].post("api/recharge/PayConfig",e),A=e=>n["a"].post("api/recharge/pay",e,{loading:!0}),R=e=>n["a"].post("api/user/getOrder",e,{loading:!0}),N=e=>n["a"].post("api/user/getSpread",e),j=e=>n["a"].post("api/user/spreadInfo",e),x=e=>Object(n["b"])("api/site/spreadRules",e)},ShuE:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"b",(function(){return l}));var n=r("ODXe"),a=r("Qyje"),o=r.n(a),i=r("vDqi"),s=r.n(i),u=new Map,c=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{u.has(t)||u.set(t,e)})},d=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(u.has(t)){var r=u.get(t);r(t),u.delete(t)}},l=()=>{var e=!0,t=!1,r=void 0;try{for(var a,o=u[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var i=a.value,s=Object(n["a"])(i,2),c=s[0],d=s[1];d(c)}}catch(l){t=!0,r=l}finally{try{e||null==o.return||o.return()}finally{if(t)throw r}}u.clear()}},p58V:function(e,t,r){"use strict";r.r(t),r.d(t,"INITIAL_STATE",(function(){return c})),r.d(t,"userInfo",(function(){return f})),r.d(t,"registerYB",(function(){return g})),r.d(t,"reducer",(function(){return y}));var n=r("VTBJ"),a=r("o0o1"),o=r.n(a),i=r("HaE+"),s=r("zyFE"),u=r("Nlzp"),c={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},d=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),l=d.Types,p=d.Creators;function f(e){return function(){var e=Object(i["a"])(o.a.mark((function e(t,r){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["A"])();case 2:n=e.sent,n&&p.UpdateUserInfo(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}function g(){return function(){var e=Object(i["a"])(o.a.mark((function e(t,r){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}t["default"]=p;var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",t.payload,t.phone),Object.assign({},e,Object(n["a"])({loginInProgress:!1,loggedIn:!0,phone:t.phone},t.payload))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:t.payload})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return t.token&&(t.token.accessToken=null),t},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:t.payload})},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},y=Object(s["createReducer"])(c,{[l.LOGGED_IN]:h,[l.LOGGED_OUT]:k,[l.UPDATE_TOKEN]:v,[l.UPDATE_USER_INFO]:E,[l.CLEAR_ACCESS_TOKEN]:m})},rY4l:function(e,t,r){"use strict";r("1Cgs");var n=r("zvbH"),a=(r("D2jH"),r("2ROE")),o=r("q1tI"),i=r.n(o),s=r("9kvl");class u extends o["Component"]{constructor(e){super(e),this.GoBack=()=>{s["a"].goBack()},this.state={}}render(){var e=this.props,t=e.hidLift,r=e.rightContent,o=e.title;return i.a.createElement(n["a"],{mode:"light",icon:t?null:i.a.createElement(a["a"],{type:"left",onClick:this.GoBack}),rightContent:r},o)}}t["a"]=u},vwip:function(e,t,r){"use strict";t["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,t,r){localStorage.removeItem(e);var n=(new Date).getTime(),a=r||this.age,o={};return o._value=t,o._time=n,o._age=n+a,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var t=!0,r=localStorage.getItem(e),n=(new Date).getTime();return r&&(r=JSON.parse(r),t=n>r._age),t},get:function(e){var t=this.isExpire(e),r=null;return t?(localStorage.removeItem(e),r):(r=localStorage.getItem(e),r=JSON.parse(r),r._value)}}},x4VR:function(e,t,r){"use strict";r.r(t);r("XGli");var n=r("NHyu"),a=(r("Dkba"),r("UYM3")),o=(r("HVTF"),r("OT5E")),i=(r("e3Tq"),r("n+tp")),s=r("q1tI"),u=r.n(s),c=r("9kvl"),d=r("/MKj"),l=(r("Nlzp"),r("p58V")),p=r("rY4l"),f=(r("9OiP"),i["a"].Item);f.Brief;class g extends s["Component"]{constructor(e){super(e),this.logout=()=>{this.props.loggedIn?(o["a"].info("\u9000\u51fa\u767b\u5f55\u6210\u529f"),this.props.dispatch(l["default"].LoggedOut()),c["a"].push("/user")):c["a"].push("/login")},this.GoTo=e=>()=>{c["a"].push(e)},this.state={checked:!1}}UNSAFE_componentWillMount(){}render(){var e=this.props.loggedIn;return u.a.createElement(u.a.Fragment,null,u.a.createElement(p["a"],{title:"\u8bbe\u7f6e"}),u.a.createElement("div",{className:"setup"},u.a.createElement(i["a"],{renderHeader:()=>"\u8d26\u53f7",className:"my-list"},u.a.createElement(f,{arrow:"horizontal"},"\u4e2a\u4eba\u8d44\u6599"),u.a.createElement(f,{arrow:"horizontal",onClick:this.GoTo("/account")},"\u8d26\u53f7\u5b89\u5168"),u.a.createElement(f,{extra:"\u7b80\u4f53\u4e2d\u6587",arrow:"horizontal"},"\u8bed\u8a00")),u.a.createElement(i["a"],{renderHeader:()=>"\u64ad\u653e",className:"my-list"},u.a.createElement(f,{extra:u.a.createElement(a["a"],{checked:this.state.checked,onChange:()=>{this.setState({checked:!this.state.checked})}})},"\u64ad\u653e\u524d\u9759\u97f3")),u.a.createElement(i["a"],{renderHeader:()=>"\u5176\u4ed6",className:"my-list"},u.a.createElement(f,{arrow:"horizontal"},"\u6e05\u9664\u5e94\u7528\u7f13\u5b58"),u.a.createElement(f,{arrow:"horizontal"},"\u6cd5\u5f8b\u6587\u4ef6"),u.a.createElement(f,{arrow:"horizontal"},"APP\u7248\u672c\u53f7v1.0.0")),u.a.createElement(n["a"],{onClick:this.logout,style:{marginTop:20}},e?"\u9000\u51fa\u767b\u5f55":"\u767b\u5f55/\u6ce8\u518c")))}}function h(e){return{loggedIn:e.user.loggedIn}}t["default"]=Object(d["b"])(h)(g)}}]);