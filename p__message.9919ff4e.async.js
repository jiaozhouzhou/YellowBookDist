(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"+J+N":function(e,t,n){var a=n("LboF"),r=n("okyr");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},"+cRp":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return b}));n("HVTF");var a=n("OT5E"),r=n("vDqi"),o=n.n(r),i=n("9kvl"),s=n("ShuE"),c=n("gjeX"),l=n.n(c),u=n("p58V"),d=n("vwip"),f=n("NFKh"),p=!1;function g(e,t,n){var a="",r=t,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(r=Math.round(Math.random()*(n-t))+t);for(var i=0;i<r;i++)a+=o[Math.round(Math.random()*(o.length-1))];return a}var m=window.baseUrl,h=o.a.create({baseURL:m,timeout:6e4});h.interceptors.request.use((function(t){t.loading&&(a["a"].loading("\u52a0\u8f7d\u4e2d..."),p=!0),Object(s["c"])(t),Object(s["a"])(t),t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var n=e.store.getState().user.token;n&&(t.headers["userId"]=n.userId,n.accessToken&&(t.headers["token"]=n.accessToken));var r=t.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(r).map((function(e){return e+"="+r[e]})),c=(i=i.concat(["qid="+g(!1,16),"terminal=h5"]).sort()).join("&"),u="sign="+l()(c+o);return t.data=c+"&"+u,t}),(function(e){return e}));f.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),f.enc.Latin1.parse("jfdkwqew!#S#$%78");function v(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=d["a"].get(e);return!o||200!==o.code||Array.isArray(o.data)&&0===o.data.length?t(...a).then(t=>(d["a"].set(e,t,a[2]),t)).catch((function(e){return e})):o}h.interceptors.response.use((function(t){Object(s["c"])(t);var n=t.data,r=e.store,o=r.dispatch,c=r.getState;if(200==n.code||-97==n.code)return p&&a["a"].hide(),p=!1,n;if(-1==n.code)a["a"].info(n.data);else if(-98==n.code)a["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),o(u["default"].LoggedOut()),i["a"].push("/login");else if(-99==n.code){o(u["default"].ClearAccessToken());var l=c().user.token;l&&h.post("api/user/applyToken",{refershToken:l.refershToken}).then(e=>{e&&(l.accessToken=e.data.accessToken,l.refershToken=e.data.refershToken,o(u["default"].UpdateToken(l)),location.reload())})}p=!1}),(function(e){if(a["a"].hide(),e.response)switch(e.response.status){case 404:a["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:a["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:a["a"].info("\u8fde\u63a5\u8d85\u65f6");break}p=!1})),t["a"]=h;var b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t[0],r=l.a.hex(a+"[POST]"+JSON.stringify(t));return v(r,h.post,...t)}}).call(this,n("yLpj"))},"+qmJ":function(e,t,n){var a=n("LboF"),r=n("jGol");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},1:function(e,t){},"1Cgs":function(e,t,n){"use strict";n("ywh3"),n("+J+N")},2:function(e,t){},3:function(e,t){},4:function(e,t){},"4SYT":function(e,t,n){"use strict";n.r(t);n("D2jH");var a=n("2ROE"),r=n("q1tI"),o=n.n(r),i=n("/MKj"),s=n("Nlzp"),c=n("rY4l"),l=n("aUGm"),u=n("6ua7"),d=n("U7if");n("+qmJ");class f extends r["Component"]{constructor(e){super(e),this.openAlert=e=>()=>{this.props.dispatch(d["default"].OpenPopup({title:e.title,body:e.content}))},this.row=(e,t,n)=>{var r=e[n];return o.a.createElement("div",{className:"msgList"},o.a.createElement("a",{onClick:this.openAlert(r)},o.a.createElement(l["a"],{type:"msg",size:"lg",color:"#ffa200"}),o.a.createElement("div",{className:"msgInfo"},o.a.createElement("p",{className:"msg_tit"},r.title),o.a.createElement("p",{className:"desc"},r.content)),o.a.createElement("div",{className:"icon-right"},o.a.createElement(a["a"],{type:"right",size:"md",color:"#ffb000"}))))},this.state={dataSource:[]}}UNSAFE_componentWillMount(){Object(s["x"])({pageNum:1}).then(e=>{e&&(this.openAlert(),this.setState({dataSource:e.data}))})}render(){var e=this.state.dataSource;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c["a"],{title:"\u6d88\u606f\u901a\u77e5",bottomColor:e.length>0?"#fff":"#FAFAFA"}),o.a.createElement(u["a"],{className:"message",dataSource:e,renderRow:this.row}))}}function p(e){return{loggedIn:e.user.loggedIn}}t["default"]=Object(i["b"])(p)(f)},"6ua7":function(e,t,n){"use strict";n("UzV/");var a=n("vLen"),r=n("q1tI"),o=n.n(r);class i extends r["Component"]{constructor(e){super(e),this._OnEndReached=()=>{this.setState({isEnd:!0}),this.props.onEndReached&&this.props.onEndReached()},this._RenderFooter=()=>{var e=this.props,t=e.dataSource,n=e.nomore;return 0==t.length?o.a.createElement("div",{style:{textAlign:"center"}},"\u6682\u65e0\u6570\u636e"):this.state.isEnd?o.a.createElement("div",{style:{textAlign:"center"}},n?"\u6ca1\u6709\u66f4\u591a\u4e86~":"\u52a0\u8f7d\u66f4\u591a\u4e2d..."):void 0},this.state={isEnd:!1},this.ds=new a["a"].DataSource({getRowData:(e,t)=>e[t],rowHasChanged:(e,t)=>e!==t})}UNSAFE_componentWillMount(){}render(){var e=this.props,t=e.className,n=e.dataSource,r=e.renderRow,i=e.renderHeader,s=n.map((e,t)=>t);return this.ds=this.ds.cloneWithRows(n,s),o.a.createElement(a["a"],{className:t,ref:e=>this.lv=e,dataSource:this.ds,renderHeader:i,renderRow:r,renderFooter:this._RenderFooter,pageSize:4,onScroll:()=>{console.log("scroll")},scrollRenderAheadDistance:500,onEndReached:this._OnEndReached,onEndReachedThreshold:10,style:{flex:1}})}}i.defaultProps={nomore:!1,loading:!1,dataSource:[],renderSeparator:()=>o.a.createElement("div",{className:"line"})},t["a"]=i},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("zLVn");function r(e,t){if(null==e)return{};var n,r,o=Object(a["a"])(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Nlzp:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"w",(function(){return o})),n.d(t,"z",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"j",(function(){return c})),n.d(t,"A",(function(){return l})),n.d(t,"J",(function(){return u})),n.d(t,"B",(function(){return d})),n.d(t,"I",(function(){return f})),n.d(t,"x",(function(){return p})),n.d(t,"D",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"n",(function(){return h})),n.d(t,"o",(function(){return v})),n.d(t,"g",(function(){return b})),n.d(t,"t",(function(){return y})),n.d(t,"v",(function(){return w})),n.d(t,"K",(function(){return O})),n.d(t,"u",(function(){return E})),n.d(t,"p",(function(){return k})),n.d(t,"i",(function(){return I})),n.d(t,"G",(function(){return S})),n.d(t,"H",(function(){return j})),n.d(t,"m",(function(){return C})),n.d(t,"l",(function(){return L})),n.d(t,"r",(function(){return N})),n.d(t,"d",(function(){return T})),n.d(t,"y",(function(){return x})),n.d(t,"q",(function(){return A})),n.d(t,"s",(function(){return _})),n.d(t,"E",(function(){return F})),n.d(t,"F",(function(){return P})),n.d(t,"h",(function(){return R})),n.d(t,"b",(function(){return z})),n.d(t,"k",(function(){return U})),n.d(t,"a",(function(){return D})),n.d(t,"C",(function(){return J}));var a=n("+cRp"),r=e=>a["a"].post("api/user/getVerifyCode",e),o=e=>a["a"].post("api/user/login",e,{loading:!0}),i=e=>a["a"].post("api/user/register",e,{loading:!0}),s=e=>a["a"].post("api/user/SendCode",e),c=e=>a["a"].post("api/user/forgetPass",e,{loading:!0}),l=e=>a["a"].post("api/user/resetPass",e,{loading:!0}),u=e=>a["a"].post("api/user/getRights",e),d=e=>a["a"].post("api/user/sendFeedback",e,{loading:!0}),f=e=>a["a"].post("api/user/getUserInfo",e),p=e=>a["a"].post("api/site/notice",e),g=e=>a["a"].post("api/site/moduleCfg",e),m=e=>Object(a["b"])("api/video/Home",e,6e4),h=e=>a["a"].post("api/video/getList",e),v=e=>Object(a["b"])("api/video/getList",e,6e5),b=e=>a["a"].post("api/video/VideoRecommon",e),y=e=>a["a"].post("api/video/getVideoInfo",e),w=e=>a["a"].post("api/video/getVideoRelation",e),O=e=>a["a"].post("api/video/watchingVideo",e),E=e=>a["a"].post("api/video/getVideoRank",e),k=e=>a["a"].post("api/video/getMoiveHis",e),I=e=>a["a"].post("api/video/discoveryPage",e),S=e=>a["a"].post("api/video/thematicList",e),j=e=>a["a"].post("api/video/thematicVideo",e),C=e=>a["a"].post("api/video/getGirlList",e),L=e=>a["a"].post("api/video/getGirlInfo",e),N=e=>a["a"].post("api/video/getSearchRank",e),T=e=>a["a"].post("api/recharge/PayConfig",e),x=e=>a["a"].post("api/recharge/pay",e,{loading:!0}),A=e=>a["a"].post("api/user/getOrder",e,{loading:!0}),_=e=>a["a"].post("api/user/getSpread",e),F=e=>a["a"].post("api/user/spreadInfo",e),P=e=>Object(a["b"])("api/site/spreadRules",e,864e5),R=e=>a["a"].post("api/fiction/getList",e),z=e=>a["a"].post("api/fiction/CartoonList",e),U=e=>a["a"].post("api/fiction/getChapter",e),D=e=>a["a"].post("api/fiction/CartoonInfo",e),J=e=>a["a"].post("api/fiction/setPraise",e)},ShuE:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n("ODXe"),r=n("Qyje"),o=n.n(r),i=n("vDqi"),s=n.n(i),c=new Map,l=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{c.has(t)||c.set(t,e)})},u=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(c.has(t)){var n=c.get(t);n(t),c.delete(t)}},d=()=>{var e=!0,t=!1,n=void 0;try{for(var r,o=c[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value,s=Object(a["a"])(i,2),l=s[0],u=s[1];u(l)}}catch(d){t=!0,n=d}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}c.clear()}},U7if:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return r})),n.d(t,"reducer",(function(){return d}));var a=n("zyFE"),r={popup:null,video:null},o=Object(a["createActions"])({OpenPopup:["payload"],ClosePopup:["locationChanged"],SetVideo:["payload"]}),i=o.Types,s=o.Creators,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{popup:t.payload})},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;arguments.length>1&&arguments[1];return Object.assign({},e,{popup:null})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{video:t.payload})},d=Object(a["createReducer"])(r,{[i.CLOSE_POPUP]:l,[i.OPEN_POPUP]:c,[i.SET_VIDEO]:u});t["default"]=s},aUGm:function(e,t,n){"use strict";var a=n("Ff2n"),r=n("q1tI"),o=n.n(r),i=e=>{var t=e.type,n=e.color,r=e.className,i=void 0===r?"":r,s=e.size,c=void 0===s?"md":s;Object(a["a"])(e,["type","color","className","size"]);return o.a.createElement("svg",{className:"am-icon am-icon-".concat(t.substr(1)," am-icon-").concat(c," ").concat(i),"aria-hidden":"true",color:n},o.a.createElement("use",{xlinkHref:"#icon"+t}))};t["a"]=i},jGol:function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,'.message {\n  flex: 1 1;\n  background-color: #FAFAFA;\n}\n.message .am-list-body {\n  background-color: #FAFAFA;\n}\n.message .am-list-body:after {\n  display: none!important;\n}\n.msgList {\n  width: 100vw;\n}\n.msgList a {\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  padding: 4.5333333vw 4vw;\n  color: #2c2c2c;\n  border-bottom: 1px solid #f4f4f4;\n}[data-rem="true"] .msgList a {\n  padding: 0.4533333rem 0.4rem;\n  border-bottom: 1px solid #f4f4f4\n}\n.msgList a:first-child {\n  padding-top: 1.8666667vw;\n}[data-rem="true"] .msgList a:first-child {\n  padding-top: 0.1866667rem\n}\n.msgList a:last-child {\n  border: 0;\n}\n.msgList .icon {\n  width: 13.3333333vw;\n}[data-rem="true"] .msgList .icon {\n  width: 1.3333333rem\n}\n.msgList .msgInfo {\n  flex: 1 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-left: 2.6666667vw;\n}[data-rem="true"] .msgList .msgInfo {\n  margin-left: 0.2666667rem\n}\n.msgList .msgInfo p {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.msgList .msgInfo .msg_tit {\n  font-size: 4vw;\n  color: #2d2d2d;\n}[data-rem="true"] .msgList .msgInfo .msg_tit {\n  font-size: 0.4rem\n}\n.msgList .msgInfo .desc {\n  font-size: 3.2vw;\n  color: #777;\n}[data-rem="true"] .msgList .msgInfo .desc {\n  font-size: 0.32rem\n}\n.msgList .icon-right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n',""]),e.exports=t},okyr:function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,'.am-navbar {\n  display: flex;\n  align-items: center;\n  height: 12vw;\n  background-color: #108ee9;\n  color: #fff;\n}[data-rem="true"] .am-navbar {\n  height: 1.2rem\n}\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  flex: 1 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.am-navbar-left {\n  padding-left: 4vw;\n  font-size: 4.2666667vw;\n}[data-rem="true"] .am-navbar-left {\n  padding-left: 0.4rem;\n  font-size: 0.4266667rem\n}\n.am-navbar-left-icon {\n  margin-right: 1.3333333vw;\n  display: inherit;\n}[data-rem="true"] .am-navbar-left-icon {\n  margin-right: 0.1333333rem\n}\n.am-navbar-title {\n  justify-content: center;\n  font-size: 4.8vw;\n  white-space: nowrap;\n}[data-rem="true"] .am-navbar-title {\n  font-size: 0.48rem\n}\n.am-navbar-right {\n  justify-content: flex-end;\n  font-size: 4.2666667vw;\n  margin-right: 4vw;\n}[data-rem="true"] .am-navbar-right {\n  font-size: 0.4266667rem;\n  margin-right: 0.4rem\n}\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9;\n}\n.am-navbar-light .am-navbar-title {\n  color: #000;\n}\n',""]),e.exports=t},p58V:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return l})),n.d(t,"userInfo",(function(){return p})),n.d(t,"registerYB",(function(){return g})),n.d(t,"reducer",(function(){return w}));var a=n("VTBJ"),r=n("o0o1"),o=n.n(r),i=n("HaE+"),s=n("zyFE"),c=n("Nlzp"),l={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},u=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),d=u.Types,f=u.Creators;function p(e){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["I"])();case 2:a=e.sent,a&&t(f.UpdateUserInfo(a.data));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function g(){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}t["default"]=f;var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",t.payload,t.phone),Object.assign({},e,Object(a["a"])({loginInProgress:!1,loggedIn:!0,phone:t.phone},t.payload))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:t.payload})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return t.token&&(t.token.accessToken=null),t},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:t.payload})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},w=Object(s["createReducer"])(l,{[d.LOGGED_IN]:m,[d.LOGGED_OUT]:y,[d.UPDATE_TOKEN]:h,[d.UPDATE_USER_INFO]:b,[d.CLEAR_ACCESS_TOKEN]:v})},rY4l:function(e,t,n){"use strict";n("1Cgs");var a=n("zvbH"),r=(n("D2jH"),n("2ROE")),o=n("q1tI"),i=n.n(o),s=n("9kvl");class c extends o["Component"]{constructor(e){super(e),this.GoBack=()=>{s["a"].goBack()}}render(){var e=this.props,t=e.hidLift,n=e.rightContent,o=e.title,s=e.noclass,c=e.bottomColor,l=e.radius;return s?i.a.createElement(a["a"],{icon:t?null:i.a.createElement(r["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o):i.a.createElement("div",{className:"public_header"},i.a.createElement(a["a"],{icon:t?null:i.a.createElement(r["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o),l&&i.a.createElement("div",{className:"public_radius",style:{backgroundColor:c}}))}}c.defaultProps={noclass:!1,radius:!0},t["a"]=c},vwip:function(e,t,n){"use strict";t["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,t,n){localStorage.removeItem(e);var a=(new Date).getTime(),r=n||this.age,o={};return o._value=t,o._time=a,o._age=a+r,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var t=!0,n=localStorage.getItem(e),a=(new Date).getTime();return n&&(n=JSON.parse(n),t=a>n._age),t},get:function(e){var t=this.isExpire(e),n=null;return t?(localStorage.removeItem(e),n):(n=localStorage.getItem(e),n=JSON.parse(n),n._value)}}},zvbH:function(e,t,n){"use strict";var a=n("QbLZ"),r=n.n(a),o=n("iCc5"),i=n.n(o),s=n("V7oC"),c=n.n(s),l=n("FYw3"),u=n.n(l),d=n("mRg0"),f=n.n(d),p=n("TSYQ"),g=n.n(p),m=n("q1tI"),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},v=function(e){function t(){return i()(this,t),u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.children,o=e.mode,i=e.icon,s=e.onLeftClick,c=e.leftContent,l=e.rightContent,u=h(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return m["createElement"]("div",r()({},u,{className:g()(n,t,t+"-"+o)}),m["createElement"]("div",{className:t+"-left",role:"button",onClick:s},i?m["createElement"]("span",{className:t+"-left-icon","aria-hidden":"true"},i):null,c),m["createElement"]("div",{className:t+"-title"},a),m["createElement"]("div",{className:t+"-right"},l))}}]),t}(m["Component"]);t["a"]=v,v.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}}}}]);