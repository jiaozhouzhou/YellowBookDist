(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"+J+N":function(e,t,n){var a=n("LboF"),r=n("okyr");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},"+cRp":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return b}));n("HVTF");var a=n("OT5E"),r=n("vDqi"),o=n.n(r),i=n("9kvl"),s=n("ShuE"),c=n("gjeX"),u=n.n(c),d=n("p58V"),l=n("vwip"),f=n("NFKh"),p=!1;function h(e,t,n){var a="",r=t,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(r=Math.round(Math.random()*(n-t))+t);for(var i=0;i<r;i++)a+=o[Math.round(Math.random()*(o.length-1))];return a}var g=window.baseUrl,m=o.a.create({baseURL:g,timeout:6e4});m.interceptors.request.use((function(t){t.loading&&(a["a"].loading("\u52a0\u8f7d\u4e2d..."),p=!0),Object(s["c"])(t),Object(s["a"])(t),t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var n=e.store.getState().user.token;n&&(t.headers["userId"]=n.userId,n.accessToken&&(t.headers["token"]=n.accessToken));var r=t.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(r).map((function(e){return e+"="+r[e]})),c=(i=i.concat(["qid="+h(!1,16),"terminal=h5"]).sort()).join("&"),d="sign="+u()(c+o);return t.data=c+"&"+d,t}),(function(e){return e}));f.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),f.enc.Latin1.parse("jfdkwqew!#S#$%78");function v(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=l["a"].get(e);return!o||200!==o.code||Array.isArray(o.data)&&0===o.data.length?t(...a).then(t=>(l["a"].set(e,t,a[2]),t)).catch((function(e){return e})):o}m.interceptors.response.use((function(t){Object(s["c"])(t);var n=t.data,r=e.store,o=r.dispatch,c=r.getState;if(200==n.code||-97==n.code)return p&&a["a"].hide(),p=!1,n;if(-1==n.code)a["a"].info(n.data);else if(-98==n.code)a["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),o(d["default"].LoggedOut()),i["a"].push("/login");else if(-99==n.code){o(d["default"].ClearAccessToken());var u=c().user.token;u&&m.post("api/user/applyToken",{refershToken:u.refershToken}).then(e=>{e&&(u.accessToken=e.data.accessToken,u.refershToken=e.data.refershToken,o(d["default"].UpdateToken(u)),location.reload())})}p=!1}),(function(e){if(a["a"].hide(),e.response)switch(e.response.status){case 404:a["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:a["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:a["a"].info("\u8fde\u63a5\u8d85\u65f6");break}p=!1})),t["a"]=m;var b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t[0],r=u.a.hex(a+"[POST]"+JSON.stringify(t));return v(r,m.post,...t)}}).call(this,n("yLpj"))},1:function(e,t){},"1Cgs":function(e,t,n){"use strict";n("ywh3"),n("+J+N")},2:function(e,t){},3:function(e,t){},4:function(e,t){},"6ua7":function(e,t,n){"use strict";n("UzV/");var a=n("vLen"),r=n("q1tI"),o=n.n(r);class i extends r["Component"]{constructor(e){super(e),this._OnEndReached=()=>{this.setState({isEnd:!0}),this.props.onEndReached&&this.props.onEndReached()},this._RenderFooter=()=>{var e=this.props,t=e.dataSource,n=e.nomore;return 0==t.length?o.a.createElement("div",{style:{textAlign:"center"}},"\u6682\u65e0\u6570\u636e"):this.state.isEnd?o.a.createElement("div",{style:{textAlign:"center"}},n?"\u6ca1\u6709\u66f4\u591a\u4e86~":"\u52a0\u8f7d\u66f4\u591a\u4e2d..."):void 0},this.state={isEnd:!1},this.ds=new a["a"].DataSource({getRowData:(e,t)=>e[t],rowHasChanged:(e,t)=>e!==t})}UNSAFE_componentWillMount(){}render(){var e=this.props,t=e.className,n=e.dataSource,r=e.renderRow,i=e.renderHeader,s=n.map((e,t)=>t);return this.ds=this.ds.cloneWithRows(n,s),o.a.createElement(a["a"],{className:t,ref:e=>this.lv=e,dataSource:this.ds,renderHeader:i,renderRow:r,renderFooter:this._RenderFooter,pageSize:4,onScroll:()=>{console.log("scroll")},scrollRenderAheadDistance:500,onEndReached:this._OnEndReached,onEndReachedThreshold:10,style:{flex:1}})}}i.defaultProps={nomore:!1,loading:!1,dataSource:[],renderSeparator:()=>o.a.createElement("div",{className:"line"})},t["a"]=i},Nlzp:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"w",(function(){return o})),n.d(t,"z",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"j",(function(){return c})),n.d(t,"A",(function(){return u})),n.d(t,"J",(function(){return d})),n.d(t,"B",(function(){return l})),n.d(t,"I",(function(){return f})),n.d(t,"x",(function(){return p})),n.d(t,"D",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"n",(function(){return m})),n.d(t,"o",(function(){return v})),n.d(t,"g",(function(){return b})),n.d(t,"t",(function(){return y})),n.d(t,"v",(function(){return E})),n.d(t,"K",(function(){return w})),n.d(t,"u",(function(){return O})),n.d(t,"p",(function(){return k})),n.d(t,"i",(function(){return C})),n.d(t,"G",(function(){return T})),n.d(t,"H",(function(){return _})),n.d(t,"m",(function(){return S})),n.d(t,"l",(function(){return I})),n.d(t,"r",(function(){return j})),n.d(t,"d",(function(){return N})),n.d(t,"y",(function(){return x})),n.d(t,"q",(function(){return R})),n.d(t,"s",(function(){return A})),n.d(t,"E",(function(){return L})),n.d(t,"F",(function(){return z})),n.d(t,"h",(function(){return D})),n.d(t,"b",(function(){return F})),n.d(t,"k",(function(){return P})),n.d(t,"a",(function(){return U})),n.d(t,"C",(function(){return H}));var a=n("+cRp"),r=e=>a["a"].post("api/user/getVerifyCode",e),o=e=>a["a"].post("api/user/login",e,{loading:!0}),i=e=>a["a"].post("api/user/register",e,{loading:!0}),s=e=>a["a"].post("api/user/SendCode",e),c=e=>a["a"].post("api/user/forgetPass",e,{loading:!0}),u=e=>a["a"].post("api/user/resetPass",e,{loading:!0}),d=e=>a["a"].post("api/user/getRights",e),l=e=>a["a"].post("api/user/sendFeedback",e,{loading:!0}),f=e=>a["a"].post("api/user/getUserInfo",e),p=e=>a["a"].post("api/site/notice",e),h=e=>a["a"].post("api/site/moduleCfg",e),g=e=>Object(a["b"])("api/video/Home",e,6e4),m=e=>a["a"].post("api/video/getList",e),v=e=>Object(a["b"])("api/video/getList",e,6e5),b=e=>a["a"].post("api/video/VideoRecommon",e),y=e=>a["a"].post("api/video/getVideoInfo",e),E=e=>a["a"].post("api/video/getVideoRelation",e),w=e=>a["a"].post("api/video/watchingVideo",e),O=e=>a["a"].post("api/video/getVideoRank",e),k=e=>a["a"].post("api/video/getMoiveHis",e),C=e=>a["a"].post("api/video/discoveryPage",e),T=e=>a["a"].post("api/video/thematicList",e),_=e=>a["a"].post("api/video/thematicVideo",e),S=e=>a["a"].post("api/video/getGirlList",e),I=e=>a["a"].post("api/video/getGirlInfo",e),j=e=>a["a"].post("api/video/getSearchRank",e),N=e=>a["a"].post("api/recharge/PayConfig",e),x=e=>a["a"].post("api/recharge/pay",e,{loading:!0}),R=e=>a["a"].post("api/user/getOrder",e,{loading:!0}),A=e=>a["a"].post("api/user/getSpread",e),L=e=>a["a"].post("api/user/spreadInfo",e),z=e=>Object(a["b"])("api/site/spreadRules",e,864e5),D=e=>a["a"].post("api/fiction/getList",e),F=e=>a["a"].post("api/fiction/CartoonList",e),P=e=>a["a"].post("api/fiction/getChapter",e),U=e=>a["a"].post("api/fiction/CartoonInfo",e),H=e=>a["a"].post("api/fiction/setPraise",e)},"S//a":function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,'.thematic {\n  flex: 1 1;\n}\n.thematic .matic {\n  display: block;\n  width: 100%;\n  margin-top: 8vw;\n}[data-rem="true"] .thematic .matic {\n  margin-top: 0.8rem\n}\n.thematic .matic_img {\n  width: 100vw;\n  height: 83.3333333vw;\n  border-radius: 0;\n}[data-rem="true"] .thematic .matic_img {\n  width: 10rem;\n  height: 8.3333333rem\n}\n.thematic .matic_img .matic_tit {\n  padding: 0 4vw;\n  font-size: 3.7333333vw;\n  color: #2d2d2d;\n  font-weight: bold;\n}[data-rem="true"] .thematic .matic_img .matic_tit {\n  padding: 0 0.4rem;\n  font-size: 0.3733333rem\n}\n.thematic .matic_img .matic_data {\n  position: absolute;\n  right: 13.3333333vw;\n  top: 40vw;\n  color: #fff;\n  font-size: 4vw;\n  text-align: center;\n}[data-rem="true"] .thematic .matic_img .matic_data {\n  right: 1.3333333rem;\n  top: 4rem;\n  font-size: 0.4rem\n}\n',""]),e.exports=t},ShuE:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return l}));var a=n("ODXe"),r=n("Qyje"),o=n.n(r),i=n("vDqi"),s=n.n(i),c=new Map,u=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{c.has(t)||c.set(t,e)})},d=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(c.has(t)){var n=c.get(t);n(t),c.delete(t)}},l=()=>{var e=!0,t=!1,n=void 0;try{for(var r,o=c[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value,s=Object(a["a"])(i,2),u=s[0],d=s[1];d(u)}}catch(l){t=!0,n=l}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}c.clear()}},e2cI:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),o=n("HaE+"),i=n("q1tI"),s=n.n(i),c=n("rY4l"),u=n("6ua7"),d=n("Nlzp"),l=n("/MKj"),f=n("ho60");n("zlEG");class p extends i["Component"]{constructor(e){var t;super(e),t=this,this.getDateByFilter=function(){var e=Object(o["a"])(r.a.mark((function e(n){var a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["G"])();case 2:a=e.sent,a&&(t._data=t._data.concat(a.data),t.setState({dataSource:t._data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.onEndReached=e=>{var t=this.state,n=t.pageNum,a=t.totalpage;n<=a?(console.log(333,"\u7ee7\u7eed\u8bf7\u6c42\u6570\u636e",n,a),this.getDateByFilter(n)):(console.log(333,"\u6ca1\u6709\u6570\u636e\u4e86",n,a),this.setState({nomore:!0}))},this.EnterThematic=e=>()=>{var t=e.id,n=e.title,a=e.coverImg;this.props.dispatch(f["default"].ChooseThematic({title:n,coverImg:a})),this.props.history.push("/thematicvideo/"+t)},this.row=(e,t,n)=>{var a=e[n];this.props.ad;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"matic",onClick:this.EnterThematic(a)},s.a.createElement("div",{className:"bgimg matic_img",style:{backgroundImage:"url(".concat(a.coverImg,")")}},s.a.createElement("p",{className:"matic_tit"},a.title),s.a.createElement("div",{className:"matic_data"},s.a.createElement("p",null,a.videoNum),s.a.createElement("p",null,"\u89c6\u9891")))))},this.state={dataSource:[],nomore:!1},this._data=[]}UNSAFE_componentWillMount(){var e=this;return Object(o["a"])(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getDateByFilter(1);case 1:case"end":return t.stop()}}),t)})))()}render(){var e=this.state.dataSource;return s.a.createElement(s.a.Fragment,null,s.a.createElement(c["a"],{title:"\u4e13\u9898\u5217\u8868",bottomColor:"#fff"}),s.a.createElement(u["a"],{className:"thematic",dataSource:e,renderRow:this.row,nomore:!0}))}}function h(e){var t=e.config.moduleCfg&&e.config.moduleCfg.banner;return{ad:t.index_data_ad||null}}t["default"]=Object(l["b"])(h)(p)},ho60:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return r})),n.d(t,"reducer",(function(){return f}));var a=n("zyFE"),r={moduleCfg:{videoType:[],banner:{}},videoType:null,chooseThematic:null,chooseCartoon:null},o=Object(a["createActions"])({UpdateModule:["payload"],ChooseVideoType:["payload"],ChooseThematic:["payload"],ChooseCartoon:["payload"]}),i=o.Types,s=o.Creators,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{moduleCfg:t.payload})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{videoType:t.payload})},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{chooseThematic:t.payload})},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{chooseCartoon:t.payload})},f=Object(a["createReducer"])(r,{[i.UPDATE_MODULE]:c,[i.CHOOSE_VIDEO_TYPE]:u,[i.CHOOSE_THEMATIC]:d,[i.CHOOSE_CARTOON]:l});t["default"]=s},okyr:function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,'.am-navbar {\n  display: flex;\n  align-items: center;\n  height: 12vw;\n  background-color: #108ee9;\n  color: #fff;\n}[data-rem="true"] .am-navbar {\n  height: 1.2rem\n}\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  flex: 1 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.am-navbar-left {\n  padding-left: 4vw;\n  font-size: 4.2666667vw;\n}[data-rem="true"] .am-navbar-left {\n  padding-left: 0.4rem;\n  font-size: 0.4266667rem\n}\n.am-navbar-left-icon {\n  margin-right: 1.3333333vw;\n  display: inherit;\n}[data-rem="true"] .am-navbar-left-icon {\n  margin-right: 0.1333333rem\n}\n.am-navbar-title {\n  justify-content: center;\n  font-size: 4.8vw;\n  white-space: nowrap;\n}[data-rem="true"] .am-navbar-title {\n  font-size: 0.48rem\n}\n.am-navbar-right {\n  justify-content: flex-end;\n  font-size: 4.2666667vw;\n  margin-right: 4vw;\n}[data-rem="true"] .am-navbar-right {\n  font-size: 0.4266667rem;\n  margin-right: 0.4rem\n}\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9;\n}\n.am-navbar-light .am-navbar-title {\n  color: #000;\n}\n',""]),e.exports=t},p58V:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return u})),n.d(t,"userInfo",(function(){return p})),n.d(t,"registerYB",(function(){return h})),n.d(t,"reducer",(function(){return E}));var a=n("VTBJ"),r=n("o0o1"),o=n.n(r),i=n("HaE+"),s=n("zyFE"),c=n("Nlzp"),u={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},d=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),l=d.Types,f=d.Creators;function p(e){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["I"])();case 2:a=e.sent,a&&t(f.UpdateUserInfo(a.data));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function h(){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}t["default"]=f;var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",t.payload,t.phone),Object.assign({},e,Object(a["a"])({loginInProgress:!1,loggedIn:!0,phone:t.phone},t.payload))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:t.payload})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return t.token&&(t.token.accessToken=null),t},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:t.payload})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},E=Object(s["createReducer"])(u,{[l.LOGGED_IN]:g,[l.LOGGED_OUT]:y,[l.UPDATE_TOKEN]:m,[l.UPDATE_USER_INFO]:b,[l.CLEAR_ACCESS_TOKEN]:v})},rY4l:function(e,t,n){"use strict";n("1Cgs");var a=n("zvbH"),r=(n("D2jH"),n("2ROE")),o=n("q1tI"),i=n.n(o),s=n("9kvl");class c extends o["Component"]{constructor(e){super(e),this.GoBack=()=>{s["a"].goBack()}}render(){var e=this.props,t=e.hidLift,n=e.rightContent,o=e.title,s=e.noclass,c=e.bottomColor,u=e.radius;return s?i.a.createElement(a["a"],{icon:t?null:i.a.createElement(r["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o):i.a.createElement("div",{className:"public_header"},i.a.createElement(a["a"],{icon:t?null:i.a.createElement(r["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o),u&&i.a.createElement("div",{className:"public_radius",style:{backgroundColor:c}}))}}c.defaultProps={noclass:!1,radius:!0},t["a"]=c},vwip:function(e,t,n){"use strict";t["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,t,n){localStorage.removeItem(e);var a=(new Date).getTime(),r=n||this.age,o={};return o._value=t,o._time=a,o._age=a+r,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var t=!0,n=localStorage.getItem(e),a=(new Date).getTime();return n&&(n=JSON.parse(n),t=a>n._age),t},get:function(e){var t=this.isExpire(e),n=null;return t?(localStorage.removeItem(e),n):(n=localStorage.getItem(e),n=JSON.parse(n),n._value)}}},zlEG:function(e,t,n){var a=n("LboF"),r=n("S//a");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},zvbH:function(e,t,n){"use strict";var a=n("QbLZ"),r=n.n(a),o=n("iCc5"),i=n.n(o),s=n("V7oC"),c=n.n(s),u=n("FYw3"),d=n.n(u),l=n("mRg0"),f=n.n(l),p=n("TSYQ"),h=n.n(p),g=n("q1tI"),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},v=function(e){function t(){return i()(this,t),d()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.children,o=e.mode,i=e.icon,s=e.onLeftClick,c=e.leftContent,u=e.rightContent,d=m(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return g["createElement"]("div",r()({},d,{className:h()(n,t,t+"-"+o)}),g["createElement"]("div",{className:t+"-left",role:"button",onClick:s},i?g["createElement"]("span",{className:t+"-left-icon","aria-hidden":"true"},i):null,c),g["createElement"]("div",{className:t+"-title"},a),g["createElement"]("div",{className:t+"-right"},u))}}]),t}(g["Component"]);t["a"]=v,v.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}}}}]);