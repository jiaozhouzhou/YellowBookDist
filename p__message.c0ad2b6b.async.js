(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"+J+N":function(e,t,n){var r=n("LboF"),a=n("okyr");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},"+cRp":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return v}));n("HVTF");var r=n("OT5E"),a=n("vDqi"),o=n.n(a),i=n("9kvl"),s=n("ShuE"),c=n("gjeX"),u=n.n(c),l=n("p58V"),d=n("vwip");function p(e,t,n){var r="",a=t,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(a=Math.round(Math.random()*(n-t))+t);for(var i=0;i<a;i++)r+=o[Math.round(Math.random()*(o.length-1))];return r}var f="http://18.163.117.43:9091/",g=o.a.create({baseURL:f,timeout:6e4});g.interceptors.request.use((function(t){t.loading&&r["a"].loading("\u52a0\u8f7d\u4e2d..."),Object(s["c"])(t),Object(s["a"])(t),t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var n=e.store.getState().user.token;n&&(t.headers["userId"]=n.userId,n.accessToken&&(t.headers["token"]=n.accessToken));var a=t.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(a).map((function(e){return e+"="+a[e]})),c=(i=i.concat(["qid="+p(!1,16),"terminal=h5"]).sort()).join("&"),l="sign="+u()(c+o);return t.data=c+"&"+l,t}),(function(e){return e}));CryptoJS.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),CryptoJS.enc.Latin1.parse("jfdkwqew!#S#$%78");function h(e,t){var n=d["a"].get(e);if(!n||200!==n.code||Array.isArray(n.data)&&0===n.data.length){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return t(...a).then(t=>(d["a"].set(e,t,864e5),t)).catch((function(e){return e}))}return n}g.interceptors.response.use((function(t){r["a"].hide(),Object(s["c"])(t);var n=t.data,a=e.store,o=a.dispatch,c=a.getState;if(200==n.code)return n;if(-1==n.code)r["a"].info(n.data);else if(-98==n.code)o(l["default"].LoggedOut()),i["a"].push("/login"),r["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548");else if(-99==n.code){o(l["default"].ClearAccessToken());var u=c().user.token;u&&g.post("api/user/applyToken",{refershToken:u.refershToken}).then(e=>{e&&(u.accessToken=e.data.accessToken,u.refershToken=e.data.refershToken,o(l["default"].UpdateToken(u)),location.reload())})}}),(function(e){if(r["a"].hide(),e.response)switch(e.response.status){case 404:r["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:r["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:r["a"].info("\u8fde\u63a5\u8d85\u65f6");break}})),t["a"]=g;var v=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],a=u.a.hex(r+"[POST]"+JSON.stringify(t));return h(a,g.post,...t)}}).call(this,n("yLpj"))},"+qmJ":function(e,t,n){var r=n("LboF"),a=n("jGol");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},"1Cgs":function(e,t,n){"use strict";n("ywh3"),n("+J+N")},"4SYT":function(e,t,n){"use strict";n.r(t);n("D2jH");var r=n("2ROE"),a=n("q1tI"),o=n.n(a),i=n("/MKj"),s=n("Nlzp"),c=n("rY4l"),u=n("6ua7"),l=n("U7if");n("+qmJ");class d extends a["Component"]{constructor(e){super(e),this.openAlert=e=>()=>{this.props.dispatch(l["default"].OpenPopup({title:e.title,body:e.content}))},this.row=(e,t,n)=>{var a=e[n];return o.a.createElement("div",{className:"msgList"},o.a.createElement("a",{onClick:this.openAlert(a)},o.a.createElement("i",{className:"icon"}),o.a.createElement("div",{className:"msgInfo"},o.a.createElement("p",null,a.title),o.a.createElement("p",{className:"desc"},a.content)),o.a.createElement("div",{className:"icon-right"},o.a.createElement(r["a"],{type:"right",size:"md"}))))},this.state={dataSource:[]}}UNSAFE_componentWillMount(){Object(s["s"])({pageNum:1}).then(e=>{e&&(this.openAlert(),this.setState({dataSource:e.data}))})}render(){var e=this.state.dataSource;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c["a"],{title:"\u6d88\u606f\u901a\u77e5"}),o.a.createElement(u["a"],{className:"message",dataSource:e,renderRow:this.row}))}}function p(e){return{loggedIn:e.user.loggedIn}}t["default"]=Object(i["b"])(p)(d)},"6ua7":function(e,t,n){"use strict";n("UzV/");var r=n("vLen"),a=n("q1tI"),o=n.n(a);class i extends a["Component"]{constructor(e){super(e),this._OnEndReached=()=>{this.setState({isEnd:!0}),this.props.onEndReached&&this.props.onEndReached()},this._RenderFooter=()=>{var e=this.props,t=e.dataSource,n=e.nomore;return 0==t.length?o.a.createElement("div",{style:{textAlign:"center"}},"\u6682\u65e0\u6570\u636e"):this.state.isEnd?o.a.createElement("div",{style:{textAlign:"center"}},n?"\u6ca1\u6709\u66f4\u591a\u4e86~":"\u52a0\u8f7d\u66f4\u591a\u4e2d..."):void 0},this.state={isEnd:!1},this.ds=new r["a"].DataSource({getRowData:(e,t)=>e[t],rowHasChanged:(e,t)=>e!==t})}UNSAFE_componentWillMount(){}render(){var e=this.props,t=e.className,n=e.dataSource,a=e.renderRow,i=e.renderHeader,s=n.map((e,t)=>t);return this.ds=this.ds.cloneWithRows(n,s),o.a.createElement(r["a"],{className:t,ref:e=>this.lv=e,dataSource:this.ds,renderHeader:i,renderRow:a,renderFooter:this._RenderFooter,pageSize:4,onScroll:()=>{console.log("scroll")},scrollRenderAheadDistance:500,onEndReached:this._OnEndReached,onEndReachedThreshold:10,style:{flex:1}})}}i.defaultProps={nomore:!1,loading:!1,dataSource:[],renderSeparator:()=>o.a.createElement("div",{className:"line"})},t["a"]=i},"9kvl":function(e,t,n){"use strict";var r,a,o=n("FfOG"),i=n("bCY9"),s=(n("I5X1"),n("o0o1")),c=n.n(s),u=n("HaE+"),l=(n("/xke"),n("TeRw")),d=(n("miYZ"),n("tsqr")),p=n("VTBJ"),f=n("io9h"),g=n("LtsZ");n("TTbB");(function(e){e[e["SILENT"]=0]="SILENT",e[e["WARN_MESSAGE"]=1]="WARN_MESSAGE",e[e["ERROR_MESSAGE"]=2]="ERROR_MESSAGE",e[e["NOTIFICATION"]=4]="NOTIFICATION",e[e["REDIRECT"]=9]="REDIRECT"})(a||(a={}));var h="/exception",v=i["a"].applyPlugins({key:"request",type:g["ApplyPluginsType"].modify,initialValue:{}}),m=(null===(r=v.errorConfig)||void 0===r?void 0:r.adaptor)||(e=>e),b=Object(f["b"])(Object(p["a"])({errorHandler:e=>{var t,n,r,i;if(null===e||void 0===e||null===(t=e.request)||void 0===t||null===(n=t.options)||void 0===n?void 0:n.skipErrorHandler)throw e;if("ResponseError"===e.name&&e.data&&e.request){var s,c={req:e.request,res:e.response};i=m(e.data,c),e.message=(null===(s=i)||void 0===s?void 0:s.errorMessage)||e.message,e.data=e.data,e.info=i}if(i=e.info,i){var u,p,f,g=null===(u=i)||void 0===u?void 0:u.errorMessage,b=null===(p=i)||void 0===p?void 0:p.errorCode,E=(null===(f=v.errorConfig)||void 0===f?void 0:f.errorPage)||h;switch(null===(r=i)||void 0===r?void 0:r.showType){case a.SILENT:break;case a.WARN_MESSAGE:d["a"].warn(g);break;case a.ERROR_MESSAGE:d["a"].error(g);break;case a.NOTIFICATION:l["a"].open({message:g});break;case a.REDIRECT:o["b"].push({pathname:E,query:{errorCode:b,errorMessage:g}});break;default:d["a"].error(g);break}}else d["a"].error(e.message||"Request error, please retry.");throw e}},v));b.use(function(){var e=Object(u["a"])(c.a.mark((function e(t,n){var r,a,o,i,s,u,l,d;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(a=t.req,o=t.res,!(null===(r=a.options)||void 0===r?void 0:r.skipErrorHandler)){e.next=5;break}return e.abrupt("return");case 5:if(i=a.options,s=i.getResponse,u=s?o.data:o,l=m(u,t),!1!==l.success){e.next=15;break}throw d=new Error(l.errorMessage),d.name="BizError",d.data=u,d.info=l,d;case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());var E=v.middlewares||[];E.forEach(e=>{b.use(e)}),n.d(t,"a",(function(){return o["b"]})),n.d(t,"b",(function(){return i["a"]}))},Nlzp:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"r",(function(){return o})),n.d(t,"u",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"v",(function(){return u})),n.d(t,"C",(function(){return l})),n.d(t,"B",(function(){return d})),n.d(t,"s",(function(){return p})),n.d(t,"w",(function(){return f})),n.d(t,"a",(function(){return g})),n.d(t,"j",(function(){return h})),n.d(t,"o",(function(){return v})),n.d(t,"q",(function(){return m})),n.d(t,"D",(function(){return b})),n.d(t,"p",(function(){return E})),n.d(t,"k",(function(){return w})),n.d(t,"f",(function(){return y})),n.d(t,"z",(function(){return O})),n.d(t,"A",(function(){return k})),n.d(t,"i",(function(){return S})),n.d(t,"h",(function(){return C})),n.d(t,"m",(function(){return I})),n.d(t,"b",(function(){return T})),n.d(t,"t",(function(){return R})),n.d(t,"l",(function(){return N})),n.d(t,"n",(function(){return j})),n.d(t,"x",(function(){return A})),n.d(t,"y",(function(){return x})),n.d(t,"e",(function(){return L}));var r=n("+cRp"),a=e=>r["a"].post("api/user/getVerifyCode",e),o=e=>r["a"].post("api/user/login",e,{loading:!0}),i=e=>r["a"].post("api/user/register",e,{loading:!0}),s=e=>r["a"].post("api/user/SendCode",e),c=e=>r["a"].post("api/user/forgetPass",e,{loading:!0}),u=e=>r["a"].post("api/user/resetPass",e,{loading:!0}),l=e=>r["a"].post("api/user/getRights",e),d=e=>r["a"].post("api/user/getUserInfo",e),p=e=>r["a"].post("api/site/notice",e),f=e=>r["a"].post("api/site/moduleCfg",e),g=e=>r["a"].post("api/video/Home",e),h=e=>r["a"].post("api/video/getList",e),v=e=>r["a"].post("api/video/getVideoInfo",e),m=e=>r["a"].post("api/video/getVideoRelation",e),b=e=>r["a"].post("api/video/watchingVideo",e),E=e=>r["a"].post("api/video/getVideoRank",e),w=e=>r["a"].post("api/video/getMoiveHis",e),y=e=>r["a"].post("api/video/discoveryPage",e),O=e=>r["a"].post("api/video/thematicList",e),k=e=>r["a"].post("api/video/thematicVideo",e),S=e=>r["a"].post("api/video/getGirlList",e),C=e=>r["a"].post("api/video/getGirlInfo",e),I=e=>r["a"].post("api/video/getSearchRank",e),T=e=>r["a"].post("api/recharge/PayConfig",e),R=e=>r["a"].post("api/recharge/pay",e,{loading:!0}),N=e=>r["a"].post("api/user/getOrder",e,{loading:!0}),j=e=>r["a"].post("api/user/getSpread",e),A=e=>r["a"].post("api/user/spreadInfo",e),x=e=>Object(r["b"])("api/site/spreadRules",e),L=e=>r["a"].post("api/fiction/getList",e)},ShuE:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n("ODXe"),a=n("Qyje"),o=n.n(a),i=n("vDqi"),s=n.n(i),c=new Map,u=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{c.has(t)||c.set(t,e)})},l=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(c.has(t)){var n=c.get(t);n(t),c.delete(t)}},d=()=>{var e=!0,t=!1,n=void 0;try{for(var a,o=c[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var i=a.value,s=Object(r["a"])(i,2),u=s[0],l=s[1];l(u)}}catch(d){t=!0,n=d}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}c.clear()}},U7if:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return a})),n.d(t,"reducer",(function(){return l}));var r=n("zyFE"),a={popup:null},o=Object(r["createActions"])({OpenPopup:["payload"],ClosePopup:["locationChanged"]}),i=o.Types,s=o.Creators,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{popup:t.payload})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;arguments.length>1&&arguments[1];return Object.assign({},e,{popup:null})},l=Object(r["createReducer"])(a,{[i.CLOSE_POPUP]:u,[i.OPEN_POPUP]:c});t["default"]=s},jGol:function(e,t,n){var r=n("JPst");t=r(!1),t.push([e.i,'.message {\n  flex: 1 1;\n  background-color: #FAFAFA;\n}\n.msgList {\n  width: 100vw;\n  padding: 0 2.6666667vw;\n}[data-rem="true"] .msgList {\n  padding: 0 0.2666667rem\n}\n.msgList a {\n  display: flex;\n  align-items: center;\n  border: 1px solid #ccc;\n  border-radius: 1.3333333vw;\n  margin-top: 2.6666667vw;\n  padding: 2.6666667vw 0;\n  color: #2c2c2c;\n}[data-rem="true"] .msgList a {\n  border: 1px solid #ccc;\n  border-radius: 0.1333333rem;\n  margin-top: 0.2666667rem;\n  padding: 0.2666667rem 0\n}\n.msgList .icon {\n  width: 13.3333333vw;\n}[data-rem="true"] .msgList .icon {\n  width: 1.3333333rem\n}\n.msgList .msgInfo {\n  flex: 1 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.msgList .msgInfo p {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.msgList .icon-right {\n  width: 13.3333333vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}[data-rem="true"] .msgList .icon-right {\n  width: 1.3333333rem\n}\n',""]),e.exports=t},okyr:function(e,t,n){var r=n("JPst");t=r(!1),t.push([e.i,'.am-navbar {\n  display: flex;\n  align-items: center;\n  height: 12vw;\n  background-color: #108ee9;\n  color: #fff;\n}[data-rem="true"] .am-navbar {\n  height: 1.2rem\n}\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  flex: 1 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.am-navbar-left {\n  padding-left: 4vw;\n  font-size: 4.2666667vw;\n}[data-rem="true"] .am-navbar-left {\n  padding-left: 0.4rem;\n  font-size: 0.4266667rem\n}\n.am-navbar-left-icon {\n  margin-right: 1.3333333vw;\n  display: inherit;\n}[data-rem="true"] .am-navbar-left-icon {\n  margin-right: 0.1333333rem\n}\n.am-navbar-title {\n  justify-content: center;\n  font-size: 4.8vw;\n  white-space: nowrap;\n}[data-rem="true"] .am-navbar-title {\n  font-size: 0.48rem\n}\n.am-navbar-right {\n  justify-content: flex-end;\n  font-size: 4.2666667vw;\n  margin-right: 4vw;\n}[data-rem="true"] .am-navbar-right {\n  font-size: 0.4266667rem;\n  margin-right: 0.4rem\n}\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9;\n}\n.am-navbar-light .am-navbar-title {\n  color: #000;\n}\n',""]),e.exports=t},p58V:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return u})),n.d(t,"userInfo",(function(){return f})),n.d(t,"registerYB",(function(){return g})),n.d(t,"reducer",(function(){return w}));var r=n("VTBJ"),a=n("o0o1"),o=n.n(a),i=n("HaE+"),s=n("zyFE"),c=n("Nlzp"),u={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},l=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),d=l.Types,p=l.Creators;function f(e){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["B"])();case 2:r=e.sent,r&&t(p.UpdateUserInfo(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function g(){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}t["default"]=p;var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",t.payload,t.phone),Object.assign({},e,Object(r["a"])({loginInProgress:!1,loggedIn:!0,phone:t.phone},t.payload))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:t.payload})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return t.token&&(t.token.accessToken=null),t},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:t.payload})},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},w=Object(s["createReducer"])(u,{[d.LOGGED_IN]:h,[d.LOGGED_OUT]:E,[d.UPDATE_TOKEN]:v,[d.UPDATE_USER_INFO]:b,[d.CLEAR_ACCESS_TOKEN]:m})},rY4l:function(e,t,n){"use strict";n("1Cgs");var r=n("zvbH"),a=(n("D2jH"),n("2ROE")),o=n("q1tI"),i=n.n(o),s=n("9kvl");class c extends o["Component"]{constructor(e){super(e),this.GoBack=()=>{s["a"].goBack()},this.state={}}render(){var e=this.props,t=e.hidLift,n=e.rightContent,o=e.title,s=e.noclass,c=e.bottomColor;return s?i.a.createElement(r["a"],{icon:t?null:i.a.createElement(a["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o):i.a.createElement("div",{className:"public_header"},i.a.createElement(r["a"],{icon:t?null:i.a.createElement(a["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o),i.a.createElement("div",{className:"public_radius",style:{backgroundColor:c}}))}}t["a"]=c},vwip:function(e,t,n){"use strict";t["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,t,n){localStorage.removeItem(e);var r=(new Date).getTime(),a=n||this.age,o={};return o._value=t,o._time=r,o._age=r+a,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var t=!0,n=localStorage.getItem(e),r=(new Date).getTime();return n&&(n=JSON.parse(n),t=r>n._age),t},get:function(e){var t=this.isExpire(e),n=null;return t?(localStorage.removeItem(e),n):(n=localStorage.getItem(e),n=JSON.parse(n),n._value)}}},zvbH:function(e,t,n){"use strict";var r=n("QbLZ"),a=n.n(r),o=n("iCc5"),i=n.n(o),s=n("V7oC"),c=n.n(s),u=n("FYw3"),l=n.n(u),d=n("mRg0"),p=n.n(d),f=n("TSYQ"),g=n.n(f),h=n("q1tI"),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},m=function(e){function t(){return i()(this,t),l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,r=e.children,o=e.mode,i=e.icon,s=e.onLeftClick,c=e.leftContent,u=e.rightContent,l=v(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return h["createElement"]("div",a()({},l,{className:g()(n,t,t+"-"+o)}),h["createElement"]("div",{className:t+"-left",role:"button",onClick:s},i?h["createElement"]("span",{className:t+"-left-icon","aria-hidden":"true"},i):null,c),h["createElement"]("div",{className:t+"-title"},r),h["createElement"]("div",{className:t+"-right"},u))}}]),t}(h["Component"]);t["a"]=m,m.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}}}}]);