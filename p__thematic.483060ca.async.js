(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"+J+N":function(e,t,n){var a=n("LboF"),r=n("okyr");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},"+cRp":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return v}));n("HVTF");var a=n("OT5E"),r=n("vDqi"),o=n.n(r),i=n("9kvl"),s=n("ShuE"),c=n("gjeX"),l=n.n(c),u=n("p58V"),d=n("vwip");function p(e,t,n){var a="",r=t,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(r=Math.round(Math.random()*(n-t))+t);for(var i=0;i<r;i++)a+=o[Math.round(Math.random()*(o.length-1))];return a}var f="http://18.163.117.43:9091/",g=o.a.create({baseURL:f,timeout:6e4});g.interceptors.request.use((function(t){t.loading&&a["a"].loading("\u52a0\u8f7d\u4e2d..."),Object(s["c"])(t),Object(s["a"])(t),t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var n=e.store.getState().user.token;n&&(t.headers["userId"]=n.userId,n.accessToken&&(t.headers["token"]=n.accessToken));var r=t.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(r).map((function(e){return e+"="+r[e]})),c=(i=i.concat(["qid="+p(!1,16),"terminal=h5"]).sort()).join("&"),u="sign="+l()(c+o);return t.data=c+"&"+u,t}),(function(e){return e}));CryptoJS.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),CryptoJS.enc.Latin1.parse("jfdkwqew!#S#$%78");function h(e,t){var n=d["a"].get(e);if(!n||200!==n.code||Array.isArray(n.data)&&0===n.data.length){for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];return t(...r).then(t=>(d["a"].set(e,t,864e5),t)).catch((function(e){return e}))}return n}g.interceptors.response.use((function(t){a["a"].hide(),Object(s["c"])(t);var n=t.data,r=e.store,o=r.dispatch,c=r.getState;if(200==n.code)return n;if(-1==n.code)a["a"].info(n.data);else if(-98==n.code)o(u["default"].LoggedOut()),i["a"].push("/login"),a["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548");else if(-99==n.code){o(u["default"].ClearAccessToken());var l=c().user.token;l&&g.post("api/user/applyToken",{refershToken:l.refershToken}).then(e=>{e&&(l.accessToken=e.data.accessToken,l.refershToken=e.data.refershToken,o(u["default"].UpdateToken(l)),location.reload())})}}),(function(e){if(a["a"].hide(),e.response)switch(e.response.status){case 404:a["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:a["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:a["a"].info("\u8fde\u63a5\u8d85\u65f6");break}})),t["a"]=g;var v=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t[0],r=l.a.hex(a+"[POST]"+JSON.stringify(t));return h(r,g.post,...t)}}).call(this,n("yLpj"))},"1Cgs":function(e,t,n){"use strict";n("ywh3"),n("+J+N")},"6ua7":function(e,t,n){"use strict";n("UzV/");var a=n("vLen"),r=n("q1tI"),o=n.n(r);class i extends r["Component"]{constructor(e){super(e),this._OnEndReached=()=>{this.setState({isEnd:!0}),this.props.onEndReached&&this.props.onEndReached()},this._RenderFooter=()=>{var e=this.props,t=e.dataSource,n=e.nomore;return 0==t.length?o.a.createElement("div",{style:{textAlign:"center"}},"\u6682\u65e0\u6570\u636e"):this.state.isEnd?o.a.createElement("div",{style:{textAlign:"center"}},n?"\u6ca1\u6709\u66f4\u591a\u4e86~":"\u52a0\u8f7d\u66f4\u591a\u4e2d..."):void 0},this.state={isEnd:!1},this.ds=new a["a"].DataSource({getRowData:(e,t)=>e[t],rowHasChanged:(e,t)=>e!==t})}UNSAFE_componentWillMount(){}render(){var e=this.props,t=e.className,n=e.dataSource,r=e.renderRow,i=e.renderHeader,s=n.map((e,t)=>t);return this.ds=this.ds.cloneWithRows(n,s),o.a.createElement(a["a"],{className:t,ref:e=>this.lv=e,dataSource:this.ds,renderHeader:i,renderRow:r,renderFooter:this._RenderFooter,pageSize:4,onScroll:()=>{console.log("scroll")},scrollRenderAheadDistance:500,onEndReached:this._OnEndReached,onEndReachedThreshold:10,style:{flex:1}})}}i.defaultProps={nomore:!1,loading:!1,dataSource:[],renderSeparator:()=>o.a.createElement("div",{className:"line"})},t["a"]=i},"9kvl":function(e,t,n){"use strict";var a,r,o=n("FfOG"),i=n("bCY9"),s=(n("I5X1"),n("o0o1")),c=n.n(s),l=n("HaE+"),u=(n("/xke"),n("TeRw")),d=(n("miYZ"),n("tsqr")),p=n("VTBJ"),f=n("io9h"),g=n("LtsZ");n("TTbB");(function(e){e[e["SILENT"]=0]="SILENT",e[e["WARN_MESSAGE"]=1]="WARN_MESSAGE",e[e["ERROR_MESSAGE"]=2]="ERROR_MESSAGE",e[e["NOTIFICATION"]=4]="NOTIFICATION",e[e["REDIRECT"]=9]="REDIRECT"})(r||(r={}));var h="/exception",v=i["a"].applyPlugins({key:"request",type:g["ApplyPluginsType"].modify,initialValue:{}}),m=(null===(a=v.errorConfig)||void 0===a?void 0:a.adaptor)||(e=>e),E=Object(f["b"])(Object(p["a"])({errorHandler:e=>{var t,n,a,i;if(null===e||void 0===e||null===(t=e.request)||void 0===t||null===(n=t.options)||void 0===n?void 0:n.skipErrorHandler)throw e;if("ResponseError"===e.name&&e.data&&e.request){var s,c={req:e.request,res:e.response};i=m(e.data,c),e.message=(null===(s=i)||void 0===s?void 0:s.errorMessage)||e.message,e.data=e.data,e.info=i}if(i=e.info,i){var l,p,f,g=null===(l=i)||void 0===l?void 0:l.errorMessage,E=null===(p=i)||void 0===p?void 0:p.errorCode,b=(null===(f=v.errorConfig)||void 0===f?void 0:f.errorPage)||h;switch(null===(a=i)||void 0===a?void 0:a.showType){case r.SILENT:break;case r.WARN_MESSAGE:d["a"].warn(g);break;case r.ERROR_MESSAGE:d["a"].error(g);break;case r.NOTIFICATION:u["a"].open({message:g});break;case r.REDIRECT:o["b"].push({pathname:b,query:{errorCode:E,errorMessage:g}});break;default:d["a"].error(g);break}}else d["a"].error(e.message||"Request error, please retry.");throw e}},v));E.use(function(){var e=Object(l["a"])(c.a.mark((function e(t,n){var a,r,o,i,s,l,u,d;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(r=t.req,o=t.res,!(null===(a=r.options)||void 0===a?void 0:a.skipErrorHandler)){e.next=5;break}return e.abrupt("return");case 5:if(i=r.options,s=i.getResponse,l=s?o.data:o,u=m(l,t),!1!==u.success){e.next=15;break}throw d=new Error(u.errorMessage),d.name="BizError",d.data=l,d.info=u,d;case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());var b=v.middlewares||[];b.forEach(e=>{E.use(e)}),n.d(t,"a",(function(){return o["b"]})),n.d(t,"b",(function(){return i["a"]}))},Nlzp:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"r",(function(){return o})),n.d(t,"u",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"v",(function(){return l})),n.d(t,"C",(function(){return u})),n.d(t,"B",(function(){return d})),n.d(t,"s",(function(){return p})),n.d(t,"w",(function(){return f})),n.d(t,"a",(function(){return g})),n.d(t,"j",(function(){return h})),n.d(t,"o",(function(){return v})),n.d(t,"q",(function(){return m})),n.d(t,"D",(function(){return E})),n.d(t,"p",(function(){return b})),n.d(t,"k",(function(){return y})),n.d(t,"f",(function(){return k})),n.d(t,"z",(function(){return O})),n.d(t,"A",(function(){return T})),n.d(t,"i",(function(){return w})),n.d(t,"h",(function(){return S})),n.d(t,"m",(function(){return C})),n.d(t,"b",(function(){return I})),n.d(t,"t",(function(){return N})),n.d(t,"l",(function(){return R})),n.d(t,"n",(function(){return _})),n.d(t,"x",(function(){return j})),n.d(t,"y",(function(){return x})),n.d(t,"e",(function(){return A}));var a=n("+cRp"),r=e=>a["a"].post("api/user/getVerifyCode",e),o=e=>a["a"].post("api/user/login",e,{loading:!0}),i=e=>a["a"].post("api/user/register",e,{loading:!0}),s=e=>a["a"].post("api/user/SendCode",e),c=e=>a["a"].post("api/user/forgetPass",e,{loading:!0}),l=e=>a["a"].post("api/user/resetPass",e,{loading:!0}),u=e=>a["a"].post("api/user/getRights",e),d=e=>a["a"].post("api/user/getUserInfo",e),p=e=>a["a"].post("api/site/notice",e),f=e=>a["a"].post("api/site/moduleCfg",e),g=e=>a["a"].post("api/video/Home",e),h=e=>a["a"].post("api/video/getList",e),v=e=>a["a"].post("api/video/getVideoInfo",e),m=e=>a["a"].post("api/video/getVideoRelation",e),E=e=>a["a"].post("api/video/watchingVideo",e),b=e=>a["a"].post("api/video/getVideoRank",e),y=e=>a["a"].post("api/video/getMoiveHis",e),k=e=>a["a"].post("api/video/discoveryPage",e),O=e=>a["a"].post("api/video/thematicList",e),T=e=>a["a"].post("api/video/thematicVideo",e),w=e=>a["a"].post("api/video/getGirlList",e),S=e=>a["a"].post("api/video/getGirlInfo",e),C=e=>a["a"].post("api/video/getSearchRank",e),I=e=>a["a"].post("api/recharge/PayConfig",e),N=e=>a["a"].post("api/recharge/pay",e,{loading:!0}),R=e=>a["a"].post("api/user/getOrder",e,{loading:!0}),_=e=>a["a"].post("api/user/getSpread",e),j=e=>a["a"].post("api/user/spreadInfo",e),x=e=>Object(a["b"])("api/site/spreadRules",e),A=e=>a["a"].post("api/fiction/getList",e)},"S//a":function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,'.thematic {\n  margin: 0 2.5%;\n  flex: 1 1;\n}\n.thematic .matic {\n  display: block;\n  width: 100%;\n}\n.thematic .matic_img {\n  width: 100%;\n  height: 26.6666667vw;\n}[data-rem="true"] .thematic .matic_img {\n  height: 2.6666667rem\n}\n',""]),e.exports=t},ShuE:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n("ODXe"),r=n("Qyje"),o=n.n(r),i=n("vDqi"),s=n.n(i),c=new Map,l=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{c.has(t)||c.set(t,e)})},u=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(c.has(t)){var n=c.get(t);n(t),c.delete(t)}},d=()=>{var e=!0,t=!1,n=void 0;try{for(var r,o=c[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value,s=Object(a["a"])(i,2),l=s[0],u=s[1];u(l)}}catch(d){t=!0,n=d}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}c.clear()}},e2cI:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),o=n("HaE+"),i=n("q1tI"),s=n.n(i),c=n("rY4l"),l=n("6ua7"),u=n("Nlzp"),d=n("/MKj"),p=n("ho60");n("zlEG");class f extends i["Component"]{constructor(e){var t;super(e),t=this,this.getDateByFilter=function(){var e=Object(o["a"])(r.a.mark((function e(n){var a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["z"])();case 2:a=e.sent,a&&(t._data=t._data.concat(a.data),t.setState({dataSource:t._data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.onEndReached=e=>{var t=this.state,n=t.pageNum,a=t.totalpage;n<=a?(console.log(333,"\u7ee7\u7eed\u8bf7\u6c42\u6570\u636e",n,a),this.getDateByFilter(n)):(console.log(333,"\u6ca1\u6709\u6570\u636e\u4e86",n,a),this.setState({nomore:!0}))},this.EnterThematic=e=>()=>{var t=e.id,n=e.title,a=e.coverImg;this.props.dispatch(p["default"].ChooseThematic({title:n,coverImg:a})),this.props.history.push("/thematicvideo/"+t)},this.row=(e,t,n)=>{var a=e[n],r=this.props.ad;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"matic",onClick:this.EnterThematic(a)},s.a.createElement("div",{className:"bgimg matic_img",style:{backgroundImage:"url(".concat(a.coverImg,")")}},s.a.createElement("div",{className:"box_time"},a.videoTime)),s.a.createElement("p",null,a.title)),n%6==5?s.a.createElement("a",{className:"box_ad",href:r[0].bannerLink,target:"_blank"},s.a.createElement("img",{src:r[0].bannerImg1,title:r[0].bannerTitle,alt:r[0].bannerTitle,className:"gg-img"}),s.a.createElement("div",{className:"gg-text"},s.a.createElement("div",{className:"gg-icon"},"\u63a8\u5e7f"),s.a.createElement("div",{className:"gg-title"},r[0].bannerTitle))):null)},this.state={dataSource:[],nomore:!1},this._data=[]}UNSAFE_componentWillMount(){var e=this;return Object(o["a"])(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getDateByFilter(1);case 1:case"end":return t.stop()}}),t)})))()}render(){var e=this.state.dataSource;return s.a.createElement(s.a.Fragment,null,s.a.createElement(c["a"],{title:"\u4e13\u9898\u5217\u8868"}),s.a.createElement(l["a"],{className:"thematic",dataSource:e,renderRow:this.row}))}}function g(e){var t=e.config.moduleCfg&&e.config.moduleCfg.banner;return{ad:t.index_data_ad||null}}t["default"]=Object(d["b"])(g)(f)},ho60:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return r})),n.d(t,"reducer",(function(){return d}));var a=n("zyFE"),r={moduleCfg:{videoType:[],banner:{}},videoType:null,chooseThematic:null},o=Object(a["createActions"])({UpdateModule:["payload"],ChooseVideoType:["payload"],ChooseThematic:["payload"]}),i=o.Types,s=o.Creators,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{moduleCfg:t.payload})},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{videoType:t.payload})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{chooseThematic:t.payload})},d=Object(a["createReducer"])(r,{[i.UPDATE_MODULE]:c,[i.CHOOSE_VIDEO_TYPE]:l,[i.CHOOSE_THEMATIC]:u});t["default"]=s},okyr:function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,'.am-navbar {\n  display: flex;\n  align-items: center;\n  height: 12vw;\n  background-color: #108ee9;\n  color: #fff;\n}[data-rem="true"] .am-navbar {\n  height: 1.2rem\n}\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  flex: 1 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.am-navbar-left {\n  padding-left: 4vw;\n  font-size: 4.2666667vw;\n}[data-rem="true"] .am-navbar-left {\n  padding-left: 0.4rem;\n  font-size: 0.4266667rem\n}\n.am-navbar-left-icon {\n  margin-right: 1.3333333vw;\n  display: inherit;\n}[data-rem="true"] .am-navbar-left-icon {\n  margin-right: 0.1333333rem\n}\n.am-navbar-title {\n  justify-content: center;\n  font-size: 4.8vw;\n  white-space: nowrap;\n}[data-rem="true"] .am-navbar-title {\n  font-size: 0.48rem\n}\n.am-navbar-right {\n  justify-content: flex-end;\n  font-size: 4.2666667vw;\n  margin-right: 4vw;\n}[data-rem="true"] .am-navbar-right {\n  font-size: 0.4266667rem;\n  margin-right: 0.4rem\n}\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9;\n}\n.am-navbar-light .am-navbar-title {\n  color: #000;\n}\n',""]),e.exports=t},p58V:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return l})),n.d(t,"userInfo",(function(){return f})),n.d(t,"registerYB",(function(){return g})),n.d(t,"reducer",(function(){return y}));var a=n("VTBJ"),r=n("o0o1"),o=n.n(r),i=n("HaE+"),s=n("zyFE"),c=n("Nlzp"),l={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},u=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),d=u.Types,p=u.Creators;function f(e){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["B"])();case 2:a=e.sent,a&&t(p.UpdateUserInfo(a.data));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function g(){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}t["default"]=p;var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",t.payload,t.phone),Object.assign({},e,Object(a["a"])({loginInProgress:!1,loggedIn:!0,phone:t.phone},t.payload))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:t.payload})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return t.token&&(t.token.accessToken=null),t},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:t.payload})},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},y=Object(s["createReducer"])(l,{[d.LOGGED_IN]:h,[d.LOGGED_OUT]:b,[d.UPDATE_TOKEN]:v,[d.UPDATE_USER_INFO]:E,[d.CLEAR_ACCESS_TOKEN]:m})},rY4l:function(e,t,n){"use strict";n("1Cgs");var a=n("zvbH"),r=(n("D2jH"),n("2ROE")),o=n("q1tI"),i=n.n(o),s=n("9kvl");class c extends o["Component"]{constructor(e){super(e),this.GoBack=()=>{s["a"].goBack()},this.state={}}render(){var e=this.props,t=e.hidLift,n=e.rightContent,o=e.title,s=e.noclass,c=e.bottomColor;return s?i.a.createElement(a["a"],{icon:t?null:i.a.createElement(r["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o):i.a.createElement("div",{className:"public_header"},i.a.createElement(a["a"],{icon:t?null:i.a.createElement(r["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o),i.a.createElement("div",{className:"public_radius",style:{backgroundColor:c}}))}}t["a"]=c},vwip:function(e,t,n){"use strict";t["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,t,n){localStorage.removeItem(e);var a=(new Date).getTime(),r=n||this.age,o={};return o._value=t,o._time=a,o._age=a+r,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var t=!0,n=localStorage.getItem(e),a=(new Date).getTime();return n&&(n=JSON.parse(n),t=a>n._age),t},get:function(e){var t=this.isExpire(e),n=null;return t?(localStorage.removeItem(e),n):(n=localStorage.getItem(e),n=JSON.parse(n),n._value)}}},zlEG:function(e,t,n){var a=n("LboF"),r=n("S//a");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},zvbH:function(e,t,n){"use strict";var a=n("QbLZ"),r=n.n(a),o=n("iCc5"),i=n.n(o),s=n("V7oC"),c=n.n(s),l=n("FYw3"),u=n.n(l),d=n("mRg0"),p=n.n(d),f=n("TSYQ"),g=n.n(f),h=n("q1tI"),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},m=function(e){function t(){return i()(this,t),u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.children,o=e.mode,i=e.icon,s=e.onLeftClick,c=e.leftContent,l=e.rightContent,u=v(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return h["createElement"]("div",r()({},u,{className:g()(n,t,t+"-"+o)}),h["createElement"]("div",{className:t+"-left",role:"button",onClick:s},i?h["createElement"]("span",{className:t+"-left-icon","aria-hidden":"true"},i):null,c),h["createElement"]("div",{className:t+"-title"},a),h["createElement"]("div",{className:t+"-right"},l))}}]),t}(h["Component"]);t["a"]=m,m.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}}}}]);