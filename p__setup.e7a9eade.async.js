(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{"+cRp":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return m}));n("HVTF");var r=n("OT5E"),a=n("vDqi"),o=n.n(a),i=n("9kvl"),s=n("ShuE"),u=n("gjeX"),c=n.n(u),l=n("p58V"),d=n("vwip"),p=n("NFKh");function f(e,t,n){var r="",a=t,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(a=Math.round(Math.random()*(n-t))+t);for(var i=0;i<a;i++)r+=o[Math.round(Math.random()*(o.length-1))];return r}var g=window.baseUrl,h=o.a.create({baseURL:g,timeout:6e4});h.interceptors.request.use((function(t){t.loading&&r["a"].loading("\u52a0\u8f7d\u4e2d..."),Object(s["c"])(t),Object(s["a"])(t),t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var n=e.store.getState().user.token;n&&(t.headers["userId"]=n.userId,n.accessToken&&(t.headers["token"]=n.accessToken));var a=t.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(a).map((function(e){return e+"="+a[e]})),u=(i=i.concat(["qid="+f(!1,16),"terminal=h5"]).sort()).join("&"),l="sign="+c()(u+o);return t.data=u+"&"+l,t}),(function(e){return e}));p.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),p.enc.Latin1.parse("jfdkwqew!#S#$%78");function v(e,t){var n=d["a"].get(e);if(!n||200!==n.code||Array.isArray(n.data)&&0===n.data.length){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return t(...a).then(t=>(d["a"].set(e,t,864e5),t)).catch((function(e){return e}))}return n}h.interceptors.response.use((function(t){Object(s["c"])(t);var n=t.data,a=e.store,o=a.dispatch,u=a.getState;if(200==n.code||-97==n.code)return r["a"].hide(),n;if(-1==n.code)r["a"].info(n.data);else if(-98==n.code)r["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),o(l["default"].LoggedOut()),i["a"].push("/login");else if(-99==n.code){o(l["default"].ClearAccessToken());var c=u().user.token;c&&h.post("api/user/applyToken",{refershToken:c.refershToken}).then(e=>{e&&(c.accessToken=e.data.accessToken,c.refershToken=e.data.refershToken,o(l["default"].UpdateToken(c)),location.reload())})}}),(function(e){if(r["a"].hide(),e.response)switch(e.response.status){case 404:r["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:r["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:r["a"].info("\u8fde\u63a5\u8d85\u65f6");break}})),t["a"]=h;var m=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],a=c.a.hex(r+"[POST]"+JSON.stringify(t));return v(a,h.post,...t)}}).call(this,n("yLpj"))},1:function(e,t){},"1Drs":function(e,t,n){var r=n("JPst");t=r(!1),t.push([e.i,".setup {\n  flex: 1 1;\n  background-color: #FAFAFA;\n}\n",""]),e.exports=t},2:function(e,t){},3:function(e,t){},4:function(e,t){},"9OiP":function(e,t,n){var r=n("LboF"),a=n("1Drs");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},"9kvl":function(e,t,n){"use strict";var r,a,o=n("FfOG"),i=n("bCY9"),s=(n("I5X1"),n("o0o1")),u=n.n(s),c=n("HaE+"),l=(n("/xke"),n("TeRw")),d=(n("miYZ"),n("tsqr")),p=n("VTBJ"),f=n("io9h"),g=n("LtsZ");n("TTbB");(function(e){e[e["SILENT"]=0]="SILENT",e[e["WARN_MESSAGE"]=1]="WARN_MESSAGE",e[e["ERROR_MESSAGE"]=2]="ERROR_MESSAGE",e[e["NOTIFICATION"]=4]="NOTIFICATION",e[e["REDIRECT"]=9]="REDIRECT"})(a||(a={}));var h="/exception",v=i["a"].applyPlugins({key:"request",type:g["ApplyPluginsType"].modify,initialValue:{}}),m=(null===(r=v.errorConfig)||void 0===r?void 0:r.adaptor)||(e=>e),E=Object(f["b"])(Object(p["a"])({errorHandler:e=>{var t,n,r,i;if(null===e||void 0===e||null===(t=e.request)||void 0===t||null===(n=t.options)||void 0===n?void 0:n.skipErrorHandler)throw e;if("ResponseError"===e.name&&e.data&&e.request){var s,u={req:e.request,res:e.response};i=m(e.data,u),e.message=(null===(s=i)||void 0===s?void 0:s.errorMessage)||e.message,e.data=e.data,e.info=i}if(i=e.info,i){var c,p,f,g=null===(c=i)||void 0===c?void 0:c.errorMessage,E=null===(p=i)||void 0===p?void 0:p.errorCode,k=(null===(f=v.errorConfig)||void 0===f?void 0:f.errorPage)||h;switch(null===(r=i)||void 0===r?void 0:r.showType){case a.SILENT:break;case a.WARN_MESSAGE:d["a"].warn(g);break;case a.ERROR_MESSAGE:d["a"].error(g);break;case a.NOTIFICATION:l["a"].open({message:g});break;case a.REDIRECT:o["b"].push({pathname:k,query:{errorCode:E,errorMessage:g}});break;default:d["a"].error(g);break}}else d["a"].error(e.message||"Request error, please retry.");throw e}},v));E.use(function(){var e=Object(c["a"])(u.a.mark((function e(t,n){var r,a,o,i,s,c,l,d;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(a=t.req,o=t.res,!(null===(r=a.options)||void 0===r?void 0:r.skipErrorHandler)){e.next=5;break}return e.abrupt("return");case 5:if(i=a.options,s=i.getResponse,c=s?o.data:o,l=m(c,t),!1!==l.success){e.next=15;break}throw d=new Error(l.errorMessage),d.name="BizError",d.data=c,d.info=l,d;case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());var k=v.middlewares||[];k.forEach(e=>{E.use(e)}),n.d(t,"a",(function(){return o["b"]})),n.d(t,"b",(function(){return i["a"]}))},Nlzp:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"r",(function(){return o})),n.d(t,"u",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"v",(function(){return c})),n.d(t,"C",(function(){return l})),n.d(t,"B",(function(){return d})),n.d(t,"s",(function(){return p})),n.d(t,"w",(function(){return f})),n.d(t,"a",(function(){return g})),n.d(t,"j",(function(){return h})),n.d(t,"o",(function(){return v})),n.d(t,"q",(function(){return m})),n.d(t,"D",(function(){return E})),n.d(t,"p",(function(){return k})),n.d(t,"k",(function(){return b})),n.d(t,"f",(function(){return y})),n.d(t,"z",(function(){return T})),n.d(t,"A",(function(){return I})),n.d(t,"i",(function(){return O})),n.d(t,"h",(function(){return w})),n.d(t,"m",(function(){return S})),n.d(t,"b",(function(){return C})),n.d(t,"t",(function(){return R})),n.d(t,"l",(function(){return A})),n.d(t,"n",(function(){return N})),n.d(t,"x",(function(){return j})),n.d(t,"y",(function(){return x})),n.d(t,"e",(function(){return _}));var r=n("+cRp"),a=e=>r["a"].post("api/user/getVerifyCode",e),o=e=>r["a"].post("api/user/login",e,{loading:!0}),i=e=>r["a"].post("api/user/register",e,{loading:!0}),s=e=>r["a"].post("api/user/SendCode",e),u=e=>r["a"].post("api/user/forgetPass",e,{loading:!0}),c=e=>r["a"].post("api/user/resetPass",e,{loading:!0}),l=e=>r["a"].post("api/user/getRights",e),d=e=>r["a"].post("api/user/getUserInfo",e),p=e=>r["a"].post("api/site/notice",e),f=e=>r["a"].post("api/site/moduleCfg",e),g=e=>r["a"].post("api/video/Home",e),h=e=>r["a"].post("api/video/getList",e),v=e=>r["a"].post("api/video/getVideoInfo",e),m=e=>r["a"].post("api/video/getVideoRelation",e),E=e=>r["a"].post("api/video/watchingVideo",e),k=e=>r["a"].post("api/video/getVideoRank",e),b=e=>r["a"].post("api/video/getMoiveHis",e),y=e=>r["a"].post("api/video/discoveryPage",e),T=e=>r["a"].post("api/video/thematicList",e),I=e=>r["a"].post("api/video/thematicVideo",e),O=e=>r["a"].post("api/video/getGirlList",e),w=e=>r["a"].post("api/video/getGirlInfo",e),S=e=>r["a"].post("api/video/getSearchRank",e),C=e=>r["a"].post("api/recharge/PayConfig",e),R=e=>r["a"].post("api/recharge/pay",e,{loading:!0}),A=e=>r["a"].post("api/user/getOrder",e,{loading:!0}),N=e=>r["a"].post("api/user/getSpread",e),j=e=>r["a"].post("api/user/spreadInfo",e),x=e=>Object(r["b"])("api/site/spreadRules",e),_=e=>r["a"].post("api/fiction/getList",e)},ShuE:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n("ODXe"),a=n("Qyje"),o=n.n(a),i=n("vDqi"),s=n.n(i),u=new Map,c=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{u.has(t)||u.set(t,e)})},l=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(u.has(t)){var n=u.get(t);n(t),u.delete(t)}},d=()=>{var e=!0,t=!1,n=void 0;try{for(var a,o=u[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var i=a.value,s=Object(r["a"])(i,2),c=s[0],l=s[1];l(c)}}catch(d){t=!0,n=d}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}u.clear()}},p58V:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return c})),n.d(t,"userInfo",(function(){return f})),n.d(t,"registerYB",(function(){return g})),n.d(t,"reducer",(function(){return b}));var r=n("VTBJ"),a=n("o0o1"),o=n.n(a),i=n("HaE+"),s=n("zyFE"),u=n("Nlzp"),c={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},l=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),d=l.Types,p=l.Creators;function f(e){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["B"])();case 2:r=e.sent,r&&t(p.UpdateUserInfo(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function g(){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}t["default"]=p;var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",t.payload,t.phone),Object.assign({},e,Object(r["a"])({loginInProgress:!1,loggedIn:!0,phone:t.phone},t.payload))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:t.payload})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return t.token&&(t.token.accessToken=null),t},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:t.payload})},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},b=Object(s["createReducer"])(c,{[d.LOGGED_IN]:h,[d.LOGGED_OUT]:k,[d.UPDATE_TOKEN]:v,[d.UPDATE_USER_INFO]:E,[d.CLEAR_ACCESS_TOKEN]:m})},rY4l:function(e,t,n){"use strict";n("1Cgs");var r=n("zvbH"),a=(n("D2jH"),n("2ROE")),o=n("q1tI"),i=n.n(o),s=n("9kvl");class u extends o["Component"]{constructor(e){super(e),this.GoBack=()=>{s["a"].goBack()},this.state={}}render(){var e=this.props,t=e.hidLift,n=e.rightContent,o=e.title,s=e.noclass,u=e.bottomColor;return s?i.a.createElement(r["a"],{icon:t?null:i.a.createElement(a["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o):i.a.createElement("div",{className:"public_header"},i.a.createElement(r["a"],{icon:t?null:i.a.createElement(a["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o),i.a.createElement("div",{className:"public_radius",style:{backgroundColor:u}}))}}t["a"]=u},vwip:function(e,t,n){"use strict";t["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,t,n){localStorage.removeItem(e);var r=(new Date).getTime(),a=n||this.age,o={};return o._value=t,o._time=r,o._age=r+a,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var t=!0,n=localStorage.getItem(e),r=(new Date).getTime();return n&&(n=JSON.parse(n),t=r>n._age),t},get:function(e){var t=this.isExpire(e),n=null;return t?(localStorage.removeItem(e),n):(n=localStorage.getItem(e),n=JSON.parse(n),n._value)}}},x4VR:function(e,t,n){"use strict";n.r(t);n("XGli");var r=n("NHyu"),a=(n("Dkba"),n("UYM3")),o=(n("HVTF"),n("OT5E")),i=(n("e3Tq"),n("n+tp")),s=n("q1tI"),u=n.n(s),c=n("9kvl"),l=n("/MKj"),d=(n("Nlzp"),n("p58V")),p=n("rY4l"),f=(n("9OiP"),i["a"].Item);f.Brief;class g extends s["Component"]{constructor(e){super(e),this.logout=()=>{this.props.loggedIn?(o["a"].info("\u9000\u51fa\u767b\u5f55\u6210\u529f"),this.props.dispatch(d["default"].LoggedOut()),c["a"].push("/user")):c["a"].push("/login")},this.GoTo=e=>()=>{c["a"].push(e)},this.state={checked:!1}}UNSAFE_componentWillMount(){}render(){var e=this.props.loggedIn;return u.a.createElement(u.a.Fragment,null,u.a.createElement(p["a"],{title:"\u8bbe\u7f6e"}),u.a.createElement("div",{className:"setup"},u.a.createElement(i["a"],{renderHeader:()=>"\u8d26\u53f7",className:"my-list"},u.a.createElement(f,{arrow:"horizontal"},"\u4e2a\u4eba\u8d44\u6599"),u.a.createElement(f,{arrow:"horizontal",onClick:this.GoTo("/account")},"\u8d26\u53f7\u5b89\u5168"),u.a.createElement(f,{extra:"\u7b80\u4f53\u4e2d\u6587",arrow:"horizontal"},"\u8bed\u8a00")),u.a.createElement(i["a"],{renderHeader:()=>"\u64ad\u653e",className:"my-list"},u.a.createElement(f,{extra:u.a.createElement(a["a"],{checked:this.state.checked,onChange:()=>{this.setState({checked:!this.state.checked})}})},"\u64ad\u653e\u524d\u9759\u97f3")),u.a.createElement(i["a"],{renderHeader:()=>"\u5176\u4ed6",className:"my-list"},u.a.createElement(f,{arrow:"horizontal"},"\u6e05\u9664\u5e94\u7528\u7f13\u5b58"),u.a.createElement(f,{arrow:"horizontal"},"\u6cd5\u5f8b\u6587\u4ef6"),u.a.createElement(f,{arrow:"horizontal"},"APP\u7248\u672c\u53f7v1.0.0")),u.a.createElement(r["a"],{onClick:this.logout,style:{marginTop:20}},e?"\u9000\u51fa\u767b\u5f55":"\u767b\u5f55/\u6ce8\u518c")))}}function h(e){return{loggedIn:e.user.loggedIn}}t["default"]=Object(l["b"])(h)(g)}}]);