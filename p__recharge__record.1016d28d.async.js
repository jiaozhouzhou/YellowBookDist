(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"+J+N":function(e,n,t){var r=t("LboF"),a=t("okyr");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},"+cRp":function(e,n,t){"use strict";(function(e){t.d(n,"b",(function(){return y}));t("HVTF");var r=t("OT5E"),a=t("vDqi"),o=t.n(a),i=t("9kvl"),s=t("ShuE"),c=t("gjeX"),l=t.n(c),u=t("p58V"),d=t("vwip");function p(e,n,t){var r="",a=n,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(a=Math.round(Math.random()*(t-n))+n);for(var i=0;i<a;i++)r+=o[Math.round(Math.random()*(o.length-1))];return r}var f="https://api.xkb01.com:9091/",g=o.a.create({baseURL:f,timeout:6e4});g.interceptors.request.use((function(n){n.loading&&r["a"].loading("\u52a0\u8f7d\u4e2d..."),Object(s["c"])(n),Object(s["a"])(n),n.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var t=e.store.getState().user.token;t&&(n.headers["userId"]=t.userId,t.accessToken&&(n.headers["token"]=t.accessToken));var a=n.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(a).map((function(e){return e+"="+a[e]})),c=(i=i.concat(["qid="+p(!1,16),"terminal=h5"]).sort()).join("&"),u="sign="+l()(c+o);return n.data=c+"&"+u,n}),(function(e){return e}));var h=CryptoJS.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),v=CryptoJS.enc.Latin1.parse("jfdkwqew!#S#$%78");function m(e,n){var t=d["a"].get(e);if(!t||200!==t.code||Array.isArray(t.data)&&0===t.data.length){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n(...a).then(n=>(d["a"].set(e,n,864e5),n)).catch((function(e){return e}))}return t}g.interceptors.response.use((function(n){r["a"].hide(),Object(s["c"])(n);var t=JSON.parse(CryptoJS.AES.decrypt(n.data,h,{iv:v,mode:CryptoJS.mode.CBC,adding:CryptoJS.pad.ZeroPadding}).toString(CryptoJS.enc.Utf8).replace(/\0/g,"")),a=e.store,o=a.dispatch,c=a.getState;if(200==t.code)return t;if(-1==t.code)r["a"].info(t.data);else if(-98==t.code)r["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),o(u["default"].UpdateToken(null)),o(u["default"].UpdateUserInfo(null)),i["a"].push("/login");else if(-99==t.code){o(u["default"].ClearAccessToken());var l=c().user.token;l&&g.post("api/user/applyToken",{refershToken:l.refershToken}).then(e=>{e&&(l.accessToken=e.data.accessToken,l.refershToken=e.data.refershToken,o(u["default"].UpdateToken(l)),i["a"].replace({pathname:i["a"].location.pathname}))})}}),(function(e){if(r["a"].hide(),e.response)switch(e.response.status){case 404:r["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:r["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:r["a"].info("\u8fde\u63a5\u8d85\u65f6");break}})),n["a"]=g;var y=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n[0],a=l.a.hex(r+"[POST]"+JSON.stringify(n));return m(a,g.post,...n)}}).call(this,t("yLpj"))},"1Cgs":function(e,n,t){"use strict";t("ywh3"),t("+J+N")},"6ua7":function(e,n,t){"use strict";t("UzV/");var r=t("vLen"),a=t("q1tI"),o=t.n(a);class i extends a["Component"]{constructor(e){super(e),this._OnEndReached=()=>{this.setState({isEnd:!0}),this.props.onEndReached&&this.props.onEndReached()},this._RenderFooter=()=>{var e=this.props,n=e.dataSource,t=e.nomore;return 0==n.length?o.a.createElement("div",{style:{textAlign:"center"}},"\u6682\u65e0\u6570\u636e"):this.state.isEnd?o.a.createElement("div",{style:{textAlign:"center"}},t?"\u6ca1\u6709\u66f4\u591a\u4e86~":"\u52a0\u8f7d\u66f4\u591a\u4e2d..."):void 0},this.state={isEnd:!1},this.ds=new r["a"].DataSource({getRowData:(e,n)=>e[n],rowHasChanged:(e,n)=>e!==n})}UNSAFE_componentWillMount(){}render(){var e=this.props,n=e.className,t=e.dataSource,a=e.renderRow,i=t.map((e,n)=>n);return this.ds=this.ds.cloneWithRows(t,i),o.a.createElement(r["a"],{className:n,ref:e=>this.lv=e,dataSource:this.ds,renderRow:a,renderFooter:this._RenderFooter,pageSize:4,onScroll:()=>{console.log("scroll")},scrollRenderAheadDistance:500,onEndReached:this._OnEndReached,onEndReachedThreshold:10,style:{flex:1}})}}i.defaultProps={nomore:!1,loading:!1,dataSource:[],renderSeparator:()=>o.a.createElement("div",{className:"line"})},n["a"]=i},"9kvl":function(e,n,t){"use strict";var r,a,o=t("FfOG"),i=t("bCY9"),s=(t("I5X1"),t("o0o1")),c=t.n(s),l=t("HaE+"),u=(t("/xke"),t("TeRw")),d=(t("miYZ"),t("tsqr")),p=t("VTBJ"),f=t("io9h"),g=t("LtsZ");t("TTbB");(function(e){e[e["SILENT"]=0]="SILENT",e[e["WARN_MESSAGE"]=1]="WARN_MESSAGE",e[e["ERROR_MESSAGE"]=2]="ERROR_MESSAGE",e[e["NOTIFICATION"]=4]="NOTIFICATION",e[e["REDIRECT"]=9]="REDIRECT"})(a||(a={}));var h="/exception",v=i["a"].applyPlugins({key:"request",type:g["ApplyPluginsType"].modify,initialValue:{}}),m=(null===(r=v.errorConfig)||void 0===r?void 0:r.adaptor)||(e=>e),y=Object(f["b"])(Object(p["a"])({errorHandler:e=>{var n,t,r,i;if(null===e||void 0===e||null===(n=e.request)||void 0===n||null===(t=n.options)||void 0===t?void 0:t.skipErrorHandler)throw e;if("ResponseError"===e.name&&e.data&&e.request){var s,c={req:e.request,res:e.response};i=m(e.data,c),e.message=(null===(s=i)||void 0===s?void 0:s.errorMessage)||e.message,e.data=e.data,e.info=i}if(i=e.info,i){var l,p,f,g=null===(l=i)||void 0===l?void 0:l.errorMessage,y=null===(p=i)||void 0===p?void 0:p.errorCode,b=(null===(f=v.errorConfig)||void 0===f?void 0:f.errorPage)||h;switch(null===(r=i)||void 0===r?void 0:r.showType){case a.SILENT:break;case a.WARN_MESSAGE:d["a"].warn(g);break;case a.ERROR_MESSAGE:d["a"].error(g);break;case a.NOTIFICATION:u["a"].open({message:g});break;case a.REDIRECT:o["b"].push({pathname:b,query:{errorCode:y,errorMessage:g}});break;default:d["a"].error(g);break}}else d["a"].error(e.message||"Request error, please retry.");throw e}},v));y.use(function(){var e=Object(l["a"])(c.a.mark((function e(n,t){var r,a,o,i,s,l,u,d;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(a=n.req,o=n.res,!(null===(r=a.options)||void 0===r?void 0:r.skipErrorHandler)){e.next=5;break}return e.abrupt("return");case 5:if(i=a.options,s=i.getResponse,l=s?o.data:o,u=m(l,n),!1!==u.success){e.next=15;break}throw d=new Error(u.errorMessage),d.name="BizError",d.data=l,d.info=u,d;case 15:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}());var b=v.middlewares||[];b.forEach(e=>{y.use(e)}),t.d(n,"a",(function(){return o["b"]})),t.d(n,"b",(function(){return i["a"]}))},AWFx:function(e,n,t){var r=t("JPst");n=r(!1),n.push([e.i,'.recharge {\n  padding: 0 2.5%;\n}\n.recharge .vipList {\n  display: flex;\n  flex-wrap: wrap;\n}\n.recharge .v {\n  flex: 1 1;\n  text-align: center;\n  margin: 5.3333333vw 2.6666667vw 0;\n  border: 1px solid #999;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .recharge .v {\n  margin: 0.5333333rem 0.2666667rem 0;\n  border: 1px solid #999;\n  border-radius: 0.1333333rem\n}\n.recharge .v .open {\n  width: 100%;\n  height: 8vw;\n  background-color: peru;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}[data-rem="true"] .recharge .v .open {\n  height: 0.8rem\n}\n.recharge .payType {\n  margin-top: 2.6666667vw;\n  display: flex;\n  flex-wrap: wrap;\n}[data-rem="true"] .recharge .payType {\n  margin-top: 0.2666667rem\n}\n.recharge .payway {\n  width: 26.6666667vw;\n  height: 10.6666667vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid;\n  border-color: #ccc;\n  border-radius: 1.3333333vw;\n  margin: 0 2.6666667vw;\n}[data-rem="true"] .recharge .payway {\n  width: 2.6666667rem;\n  height: 1.0666667rem;\n  border: 1px solid;\n  border-radius: 0.1333333rem;\n  margin: 0 0.2666667rem\n}\n.recharge .payway.act {\n  background-color: orange;\n  border-color: orange;\n  color: #fff;\n}\n.recharge .mt20 {\n  margin-top: 5.3333333vw;\n}[data-rem="true"] .recharge .mt20 {\n  margin-top: 0.5333333rem\n}\n.orderList {\n  margin: 0 2.5%;\n}\n.orderList .list {\n  display: flex;\n  border-bottom: 1px solid #ccc;\n  padding: 2.6666667vw;\n}[data-rem="true"] .orderList .list {\n  border-bottom: 1px solid #ccc;\n  padding: 0.2666667rem\n}\n.orderList .list:last-child {\n  border: 0;\n}\n.orderList .right {\n  flex: 1 1;\n}\n.orderList .right p {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n',""]),e.exports=n},Nlzp:function(e,n,t){"use strict";t.d(n,"d",(function(){return a})),t.d(n,"q",(function(){return o})),t.d(n,"t",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"f",(function(){return c})),t.d(n,"u",(function(){return l})),t.d(n,"B",(function(){return u})),t.d(n,"A",(function(){return d})),t.d(n,"r",(function(){return p})),t.d(n,"v",(function(){return f})),t.d(n,"a",(function(){return g})),t.d(n,"i",(function(){return h})),t.d(n,"n",(function(){return v})),t.d(n,"p",(function(){return m})),t.d(n,"C",(function(){return y})),t.d(n,"o",(function(){return b})),t.d(n,"j",(function(){return E})),t.d(n,"e",(function(){return w})),t.d(n,"y",(function(){return k})),t.d(n,"z",(function(){return S})),t.d(n,"h",(function(){return O})),t.d(n,"g",(function(){return T})),t.d(n,"l",(function(){return C})),t.d(n,"b",(function(){return x})),t.d(n,"s",(function(){return R})),t.d(n,"k",(function(){return I})),t.d(n,"m",(function(){return N})),t.d(n,"w",(function(){return j})),t.d(n,"x",(function(){return A}));var r=t("+cRp"),a=e=>r["a"].post("api/user/getVerifyCode",e),o=e=>r["a"].post("api/user/login",e,{loading:!0}),i=e=>r["a"].post("api/user/register",e,{loading:!0}),s=e=>r["a"].post("api/user/SendCode",e),c=e=>r["a"].post("api/user/forgetPass",e,{loading:!0}),l=e=>r["a"].post("api/user/resetPass",e,{loading:!0}),u=e=>r["a"].post("api/user/getRights",e),d=e=>r["a"].post("api/user/getUserInfo",e),p=e=>r["a"].post("api/site/notice",e),f=e=>r["a"].post("api/site/moduleCfg",e),g=e=>r["a"].post("api/video/Home",e),h=e=>r["a"].post("api/video/getList",e),v=e=>r["a"].post("api/video/getVideoInfo",e),m=e=>r["a"].post("api/video/getVideoRelation",e),y=e=>r["a"].post("api/video/watchingVideo",e),b=e=>r["a"].post("api/video/getVideoRank",e),E=e=>r["a"].post("api/video/getMoiveHis",e),w=e=>r["a"].post("api/video/discoveryPage",e),k=e=>r["a"].post("api/video/thematicList",e),S=e=>r["a"].post("api/video/thematicVideo",e),O=e=>r["a"].post("api/video/getGirlList",e),T=e=>r["a"].post("api/video/getGirlInfo",e),C=e=>r["a"].post("api/video/getSearchRank",e),x=e=>r["a"].post("api/recharge/PayConfig",e),R=e=>r["a"].post("api/recharge/pay",e,{loading:!0}),I=e=>r["a"].post("api/user/getOrder",e,{loading:!0}),N=e=>r["a"].post("api/user/getSpread",e),j=e=>r["a"].post("api/user/spreadInfo",e),A=e=>Object(r["b"])("api/site/spreadRules",e)},ShuE:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t("ODXe"),a=t("Qyje"),o=t.n(a),i=t("vDqi"),s=t.n(i),c=new Map,l=e=>{var n=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{c.has(n)||c.set(n,e)})},u=e=>{var n=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(c.has(n)){var t=c.get(n);t(n),c.delete(n)}},d=()=>{var e=!0,n=!1,t=void 0;try{for(var a,o=c[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var i=a.value,s=Object(r["a"])(i,2),l=s[0],u=s[1];u(l)}}catch(d){n=!0,t=d}finally{try{e||null==o.return||o.return()}finally{if(n)throw t}}c.clear()}},hzTw:function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),a=t.n(r),o=t("HaE+"),i=t("q1tI"),s=t.n(i),c=t("/MKj"),l=t("Nlzp"),u=t("rY4l"),d=t("6ua7");t("u/Y3");class p extends i["Component"]{constructor(e){var n;super(e),n=this,this.getDateByFilter=function(){var e=Object(o["a"])(a.a.mark((function e(t){var r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["k"])({pageNum:t,pageSize:18});case 2:r=e.sent,r&&(n._data=n._data.concat(r.data.pageData),n.setState({dataSource:n._data,totalpage:Math.ceil(r.data.total/18),pageNum:t+1}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.onEndReached=e=>{var n=this.state,t=n.pageNum,r=n.totalpage;t<=r?(console.log(333,"\u7ee7\u7eed\u8bf7\u6c42\u6570\u636e",t,r),this.getDateByFilter(t)):(console.log(333,"\u6ca1\u6709\u6570\u636e\u4e86",t,r),this.setState({nomore:!0}))},this.GoTo=e=>()=>{this.props.history.push(e)},this.row=(e,n,t)=>{var r=e[t];return s.a.createElement("div",{className:"list"},s.a.createElement("div",{className:"icon"}),s.a.createElement("div",{className:"right"},s.a.createElement("p",null,s.a.createElement("span",null,r.payType),s.a.createElement("span",null,"\uffe5",r.amount)),s.a.createElement("p",null,s.a.createElement("span",null,r.createTime),s.a.createElement("span",null,r.flag))))},this.state={dataSource:[],totalpage:0,pageNum:1,nomore:!1},this._data=[]}UNSAFE_componentWillMount(){this.getDateByFilter(1)}render(){var e=this.state,n=e.dataSource,t=e.nomore;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u["a"],{title:"\u5145\u503c\u8bb0\u5f55",rightContent:s.a.createElement("div",{onClick:this.GoTo("/czRecord")},"\u8054\u7cfb\u5ba2\u670d")}),s.a.createElement(d["a"],{className:"orderList",dataSource:n,renderRow:this.row,onEndReached:this.onEndReached,nomore:t}))}}function f(e){return{}}n["default"]=Object(c["b"])(f)(p)},okyr:function(e,n,t){var r=t("JPst");n=r(!1),n.push([e.i,'.am-navbar {\n  display: flex;\n  align-items: center;\n  height: 12vw;\n  background-color: #108ee9;\n  color: #fff;\n}[data-rem="true"] .am-navbar {\n  height: 1.2rem\n}\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  flex: 1 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.am-navbar-left {\n  padding-left: 4vw;\n  font-size: 4.2666667vw;\n}[data-rem="true"] .am-navbar-left {\n  padding-left: 0.4rem;\n  font-size: 0.4266667rem\n}\n.am-navbar-left-icon {\n  margin-right: 1.3333333vw;\n  display: inherit;\n}[data-rem="true"] .am-navbar-left-icon {\n  margin-right: 0.1333333rem\n}\n.am-navbar-title {\n  justify-content: center;\n  font-size: 4.8vw;\n  white-space: nowrap;\n}[data-rem="true"] .am-navbar-title {\n  font-size: 0.48rem\n}\n.am-navbar-right {\n  justify-content: flex-end;\n  font-size: 4.2666667vw;\n  margin-right: 4vw;\n}[data-rem="true"] .am-navbar-right {\n  font-size: 0.4266667rem;\n  margin-right: 0.4rem\n}\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9;\n}\n.am-navbar-light .am-navbar-title {\n  color: #000;\n}\n',""]),e.exports=n},p58V:function(e,n,t){"use strict";t.r(n),t.d(n,"INITIAL_STATE",(function(){return l})),t.d(n,"userInfo",(function(){return f})),t.d(n,"registerYB",(function(){return g})),t.d(n,"reducer",(function(){return E}));var r=t("VTBJ"),a=t("o0o1"),o=t.n(a),i=t("HaE+"),s=t("zyFE"),c=t("Nlzp"),l={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},u=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),d=u.Types,p=u.Creators;function f(e){return function(){var e=Object(i["a"])(o.a.mark((function e(n,t){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["A"])();case 2:r=e.sent,r&&p.UpdateUserInfo(r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}function g(){return function(){var e=Object(i["a"])(o.a.mark((function e(n,t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}n["default"]=p;var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",n.payload,n.phone),Object.assign({},e,Object(r["a"])({loginInProgress:!1,loggedIn:!0,phone:n.phone},n.payload))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:n.payload})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return n.token&&(n.token.accessToken=null),n},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:n.payload})},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},E=Object(s["createReducer"])(l,{[d.LOGGED_IN]:h,[d.LOGGED_OUT]:b,[d.UPDATE_TOKEN]:v,[d.UPDATE_USER_INFO]:y,[d.CLEAR_ACCESS_TOKEN]:m})},rY4l:function(e,n,t){"use strict";t("1Cgs");var r=t("zvbH"),a=(t("D2jH"),t("2ROE")),o=t("q1tI"),i=t.n(o),s=t("9kvl");class c extends o["Component"]{constructor(e){super(e),this.GoBack=()=>{s["a"].goBack()},this.state={}}render(){var e=this.props,n=e.hidLift,t=e.rightContent,o=e.title;return i.a.createElement(r["a"],{mode:"light",icon:n?null:i.a.createElement(a["a"],{type:"left",onClick:this.GoBack}),rightContent:t},o)}}n["a"]=c},"u/Y3":function(e,n,t){var r=t("LboF"),a=t("AWFx");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},vwip:function(e,n,t){"use strict";n["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,n,t){localStorage.removeItem(e);var r=(new Date).getTime(),a=t||this.age,o={};return o._value=n,o._time=r,o._age=r+a,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var n=!0,t=localStorage.getItem(e),r=(new Date).getTime();return t&&(t=JSON.parse(t),n=r>t._age),n},get:function(e){var n=this.isExpire(e),t=null;return n?(localStorage.removeItem(e),t):(t=localStorage.getItem(e),t=JSON.parse(t),t._value)}}},zvbH:function(e,n,t){"use strict";var r=t("QbLZ"),a=t.n(r),o=t("iCc5"),i=t.n(o),s=t("V7oC"),c=t.n(s),l=t("FYw3"),u=t.n(l),d=t("mRg0"),p=t.n(d),f=t("TSYQ"),g=t.n(f),h=t("q1tI"),v=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&(t[r[a]]=e[r[a]])}return t},m=function(e){function n(){return i()(this,n),u()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p()(n,e),c()(n,[{key:"render",value:function(){var e=this.props,n=e.prefixCls,t=e.className,r=e.children,o=e.mode,i=e.icon,s=e.onLeftClick,c=e.leftContent,l=e.rightContent,u=v(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return h["createElement"]("div",a()({},u,{className:g()(t,n,n+"-"+o)}),h["createElement"]("div",{className:n+"-left",role:"button",onClick:s},i?h["createElement"]("span",{className:n+"-left-icon","aria-hidden":"true"},i):null,c),h["createElement"]("div",{className:n+"-title"},r),h["createElement"]("div",{className:n+"-right"},l))}}]),n}(h["Component"]);n["a"]=m,m.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}}}}]);