(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{"+J+N":function(e,t,n){var a=n("LboF"),r=n("okyr");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},"+cRp":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return b}));n("HVTF");var a=n("OT5E"),r=n("vDqi"),o=n.n(r),i=n("9kvl"),s=n("ShuE"),c=n("gjeX"),u=n.n(c),l=n("p58V"),d=n("vwip"),p=n("NFKh"),f=!1;function h(e,t,n){var a="",r=t,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(r=Math.round(Math.random()*(n-t))+t);for(var i=0;i<r;i++)a+=o[Math.round(Math.random()*(o.length-1))];return a}var g=window.baseUrl,m=o.a.create({baseURL:g,timeout:6e4});m.interceptors.request.use((function(t){t.loading&&(a["a"].loading("\u52a0\u8f7d\u4e2d..."),f=!0),Object(s["c"])(t),Object(s["a"])(t),t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var n=e.store.getState().user.token;n&&(t.headers["userId"]=n.userId,n.accessToken&&(t.headers["token"]=n.accessToken));var r=t.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(r).map((function(e){return e+"="+r[e]})),c=(i=i.concat(["qid="+h(!1,16),"terminal=h5"]).sort()).join("&"),l="sign="+u()(c+o);return t.data=c+"&"+l,t}),(function(e){return e}));p.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),p.enc.Latin1.parse("jfdkwqew!#S#$%78");function v(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=d["a"].get(e);return!o||200!==o.code||Array.isArray(o.data)&&0===o.data.length?t(...a).then(t=>(d["a"].set(e,t,a[2]),t)).catch((function(e){return e})):o}m.interceptors.response.use((function(t){Object(s["c"])(t);var n=t.data,r=e.store,o=r.dispatch,c=r.getState;if(200==n.code||-97==n.code)return f&&a["a"].hide(),f=!1,n;if(-1==n.code)a["a"].info(n.data);else if(-98==n.code)a["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),o(l["default"].LoggedOut()),i["a"].push("/login");else if(-99==n.code){o(l["default"].ClearAccessToken());var u=c().user.token;u&&m.post("api/user/applyToken",{refershToken:u.refershToken}).then(e=>{e&&(u.accessToken=e.data.accessToken,u.refershToken=e.data.refershToken,o(l["default"].UpdateToken(u)),location.reload())})}f=!1}),(function(e){if(a["a"].hide(),e.response)switch(e.response.status){case 404:a["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:a["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:a["a"].info("\u8fde\u63a5\u8d85\u65f6");break}f=!1})),t["a"]=m;var b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t[0],r=u.a.hex(a+"[POST]"+JSON.stringify(t));return v(r,m.post,...t)}}).call(this,n("yLpj"))},1:function(e,t){},"1Cgs":function(e,t,n){"use strict";n("ywh3"),n("+J+N")},2:function(e,t){},3:function(e,t){},4:function(e,t){},"6ua7":function(e,t,n){"use strict";n("UzV/");var a=n("vLen"),r=n("q1tI"),o=n.n(r);class i extends r["Component"]{constructor(e){super(e),this._OnEndReached=()=>{this.setState({isEnd:!0}),this.props.onEndReached&&this.props.onEndReached()},this._RenderFooter=()=>{var e=this.props,t=e.dataSource,n=e.nomore;return 0==t.length?o.a.createElement("div",{style:{textAlign:"center"}},"\u6682\u65e0\u6570\u636e"):this.state.isEnd?o.a.createElement("div",{style:{textAlign:"center"}},n?"\u6ca1\u6709\u66f4\u591a\u4e86~":"\u52a0\u8f7d\u66f4\u591a\u4e2d..."):void 0},this.state={isEnd:!1},this.ds=new a["a"].DataSource({getRowData:(e,t)=>e[t],rowHasChanged:(e,t)=>e!==t})}UNSAFE_componentWillMount(){}render(){var e=this.props,t=e.className,n=e.dataSource,r=e.renderRow,i=e.renderHeader,s=n.map((e,t)=>t);return this.ds=this.ds.cloneWithRows(n,s),o.a.createElement(a["a"],{className:t,ref:e=>this.lv=e,dataSource:this.ds,renderHeader:i,renderRow:r,renderFooter:this._RenderFooter,pageSize:4,onScroll:()=>{console.log("scroll")},scrollRenderAheadDistance:500,onEndReached:this._OnEndReached,onEndReachedThreshold:10,style:{flex:1}})}}i.defaultProps={nomore:!1,loading:!1,dataSource:[],renderSeparator:()=>o.a.createElement("div",{className:"line"})},t["a"]=i},"8RLt":function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),o=n("HaE+"),i=n("q1tI"),s=n.n(i),c=n("oVTX"),u=n("rY4l"),l=n("6ua7"),d=n("Nlzp"),p=n("/MKj");class f extends i["Component"]{constructor(e){var t;super(e),t=this,this.getDateByFilter=function(){var e=Object(o["a"])(r.a.mark((function e(n){var a,o;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.props.match.params.id,e.next=3,Object(d["H"])({thematicId:a,pageNum:n,pageSize:18});case 3:o=e.sent,o&&(t._data=t._data.concat(o.data.pageData),t.setState({dataSource:t._data,totalpage:Math.ceil(o.data.total/18),pageNum:n+1}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.onEndReached=e=>{var t=this.state,n=t.pageNum,a=t.totalpage;n<=a?(console.log(333,"\u7ee7\u7eed\u8bf7\u6c42\u6570\u636e",n,a),this.getDateByFilter(n)):(console.log(333,"\u6ca1\u6709\u6570\u636e\u4e86",n,a),this.setState({nomore:!0}))},this.row=(e,t,n)=>{var a=e[n],r=this.props.ad;return s.a.createElement(s.a.Fragment,null,s.a.createElement(c["a"],{item:a,key:a.id}),n%6==5?s.a.createElement("a",{className:"box_ad",href:r[0].bannerLink,target:"_blank"},s.a.createElement("img",{src:r[0].bannerImg1,title:r[0].bannerTitle,alt:r[0].bannerTitle,className:"gg-img"}),s.a.createElement("div",{className:"gg-text"},s.a.createElement("div",{className:"gg-icon"},"\u63a8\u5e7f"),s.a.createElement("div",{className:"gg-title"},r[0].bannerTitle))):null)},this.onEndReached=e=>{var t=this.state,n=t.pageNum,a=t.totalpage;n<=a?(console.log(333,"\u7ee7\u7eed\u8bf7\u6c42\u6570\u636e",n,a),this.getDateByFilter(n)):(console.log(333,"\u6ca1\u6709\u6570\u636e\u4e86",n,a),this.setState({nomore:!0}))},this.state={dataSource:[],nomore:!1,pageNum:1,totalpage:1},this._data=[]}UNSAFE_componentWillMount(){var e=this;return Object(o["a"])(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getDateByFilter(1);case 1:case"end":return t.stop()}}),t)})))()}render(){var e=this.state,t=e.dataSource,n=e.nomore,a=this.props.chooseThematic,r=a.title,o=a.coverImg;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u["a"],{title:r}),s.a.createElement("div",{className:"bgimg headerImg",style:{backgroundImage:"url(".concat(o,")")}}),s.a.createElement(l["a"],{className:"ListBox thematic",dataSource:t,renderRow:this.row,onEndReached:this.onEndReached,nomore:n}))}}function h(e){var t=e.config.moduleCfg&&e.config.moduleCfg.banner;return{ad:t.index_data_ad||null,chooseThematic:e.config.chooseThematic}}t["default"]=Object(p["b"])(h)(f)},Nlzp:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"w",(function(){return o})),n.d(t,"z",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"j",(function(){return c})),n.d(t,"A",(function(){return u})),n.d(t,"J",(function(){return l})),n.d(t,"B",(function(){return d})),n.d(t,"I",(function(){return p})),n.d(t,"x",(function(){return f})),n.d(t,"D",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"n",(function(){return m})),n.d(t,"o",(function(){return v})),n.d(t,"g",(function(){return b})),n.d(t,"t",(function(){return y})),n.d(t,"v",(function(){return E})),n.d(t,"K",(function(){return k})),n.d(t,"u",(function(){return O})),n.d(t,"p",(function(){return w})),n.d(t,"i",(function(){return S})),n.d(t,"G",(function(){return C})),n.d(t,"H",(function(){return N})),n.d(t,"m",(function(){return T})),n.d(t,"l",(function(){return I})),n.d(t,"r",(function(){return j})),n.d(t,"d",(function(){return _})),n.d(t,"y",(function(){return x})),n.d(t,"q",(function(){return R})),n.d(t,"s",(function(){return P})),n.d(t,"E",(function(){return L})),n.d(t,"F",(function(){return A})),n.d(t,"h",(function(){return F})),n.d(t,"b",(function(){return D})),n.d(t,"k",(function(){return U})),n.d(t,"a",(function(){return z})),n.d(t,"C",(function(){return V}));var a=n("+cRp"),r=e=>a["a"].post("api/user/getVerifyCode",e),o=e=>a["a"].post("api/user/login",e,{loading:!0}),i=e=>a["a"].post("api/user/register",e,{loading:!0}),s=e=>a["a"].post("api/user/SendCode",e),c=e=>a["a"].post("api/user/forgetPass",e,{loading:!0}),u=e=>a["a"].post("api/user/resetPass",e,{loading:!0}),l=e=>a["a"].post("api/user/getRights",e),d=e=>a["a"].post("api/user/sendFeedback",e,{loading:!0}),p=e=>a["a"].post("api/user/getUserInfo",e),f=e=>a["a"].post("api/site/notice",e),h=e=>a["a"].post("api/site/moduleCfg",e),g=e=>Object(a["b"])("api/video/Home",e,6e4),m=e=>a["a"].post("api/video/getList",e),v=e=>Object(a["b"])("api/video/getList",e,6e5),b=e=>a["a"].post("api/video/VideoRecommon",e),y=e=>a["a"].post("api/video/getVideoInfo",e),E=e=>a["a"].post("api/video/getVideoRelation",e),k=e=>a["a"].post("api/video/watchingVideo",e),O=e=>a["a"].post("api/video/getVideoRank",e),w=e=>a["a"].post("api/video/getMoiveHis",e),S=e=>a["a"].post("api/video/discoveryPage",e),C=e=>a["a"].post("api/video/thematicList",e),N=e=>a["a"].post("api/video/thematicVideo",e),T=e=>a["a"].post("api/video/getGirlList",e),I=e=>a["a"].post("api/video/getGirlInfo",e),j=e=>a["a"].post("api/video/getSearchRank",e),_=e=>a["a"].post("api/recharge/PayConfig",e),x=e=>a["a"].post("api/recharge/pay",e,{loading:!0}),R=e=>a["a"].post("api/user/getOrder",e,{loading:!0}),P=e=>a["a"].post("api/user/getSpread",e),L=e=>a["a"].post("api/user/spreadInfo",e),A=e=>Object(a["b"])("api/site/spreadRules",e,864e5),F=e=>a["a"].post("api/fiction/getList",e),D=e=>a["a"].post("api/fiction/CartoonList",e),U=e=>a["a"].post("api/fiction/getChapter",e),z=e=>a["a"].post("api/fiction/CartoonInfo",e),V=e=>a["a"].post("api/fiction/setPraise",e)},ShuE:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n("ODXe"),r=n("Qyje"),o=n.n(r),i=n("vDqi"),s=n.n(i),c=new Map,u=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{c.has(t)||c.set(t,e)})},l=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(c.has(t)){var n=c.get(t);n(t),c.delete(t)}},d=()=>{var e=!0,t=!1,n=void 0;try{for(var r,o=c[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value,s=Object(a["a"])(i,2),u=s[0],l=s[1];l(u)}}catch(d){t=!0,n=d}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}c.clear()}},U7if:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return r})),n.d(t,"reducer",(function(){return d}));var a=n("zyFE"),r={popup:null,video:null},o=Object(a["createActions"])({OpenPopup:["payload"],ClosePopup:["locationChanged"],SetVideo:["payload"]}),i=o.Types,s=o.Creators,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{popup:t.payload})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;arguments.length>1&&arguments[1];return Object.assign({},e,{popup:null})},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{video:t.payload})},d=Object(a["createReducer"])(r,{[i.CLOSE_POPUP]:u,[i.OPEN_POPUP]:c,[i.SET_VIDEO]:l});t["default"]=s},oVTX:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("9kvl"),i=n("/MKj"),s=n("U7if"),c=n("96Xy"),u=n.n(c);n("7MuJ");class l extends a["Component"]{constructor(e){super(e),this.Preview=e=>t=>{this.touchMove||(e.mediabook?(this.touchMove=!0,this.props.dispatch(s["default"].SetVideo(e.id)),null==this.dp?this.dp=new u.a({lang:"zh-cn",container:document.getElementById("dplayer"+e.id),video:{url:e.mediabook},autoplay:!0,loop:!0,hotkey:!1,volume:0}):this.dp.play()):(this.touchMove=!0,this.setState({useGif:!0})))},this.cancel=e=>t=>{e.mediabook&&(this.dp&&this.dp.destroy(),this.setState({useGif:!1}))},this.EnterVideo=e=>()=>{this.props.replace?o["a"].replace("/video/"+e):o["a"].push("/video/"+e)},this.state={useGif:!1},this.dp=null,this.touchMove=!1}UNSAFE_componentWillReceiveProps(e){e.video&&e.video!==e.item.id&&this.dp&&(this.dp.destroy(),this.dp=null,this.touchMove=!1)}componentWillUnmount(){this.dp&&this.dp.destroy()}render(){var e=this.props.item;return r.a.createElement("div",{className:"box",onClick:this.EnterVideo(e.id)},r.a.createElement("div",{className:"bgimg av_img",style:{backgroundImage:"url(".concat(e.coverUrl,")")},onTouchMove:this.Preview(e),onTouchEnd:this.cancel},r.a.createElement("div",{id:"dplayer"+e.id,className:"full"}),this.state.useGif?r.a.createElement("div",{className:"full gif",style:{backgroundImage:"url(".concat(e.gifUrl,")")}}):null,r.a.createElement("div",{className:"box_time"},e.videoTime)),r.a.createElement("p",null,e.title))}}function d(e){return{video:e.ui.video}}t["a"]=Object(i["b"])(d)(l)},okyr:function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,'.am-navbar {\n  display: flex;\n  align-items: center;\n  height: 12vw;\n  background-color: #108ee9;\n  color: #fff;\n}[data-rem="true"] .am-navbar {\n  height: 1.2rem\n}\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  flex: 1 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.am-navbar-left {\n  padding-left: 4vw;\n  font-size: 4.2666667vw;\n}[data-rem="true"] .am-navbar-left {\n  padding-left: 0.4rem;\n  font-size: 0.4266667rem\n}\n.am-navbar-left-icon {\n  margin-right: 1.3333333vw;\n  display: inherit;\n}[data-rem="true"] .am-navbar-left-icon {\n  margin-right: 0.1333333rem\n}\n.am-navbar-title {\n  justify-content: center;\n  font-size: 4.8vw;\n  white-space: nowrap;\n}[data-rem="true"] .am-navbar-title {\n  font-size: 0.48rem\n}\n.am-navbar-right {\n  justify-content: flex-end;\n  font-size: 4.2666667vw;\n  margin-right: 4vw;\n}[data-rem="true"] .am-navbar-right {\n  font-size: 0.4266667rem;\n  margin-right: 0.4rem\n}\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9;\n}\n.am-navbar-light .am-navbar-title {\n  color: #000;\n}\n',""]),e.exports=t},p58V:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return u})),n.d(t,"userInfo",(function(){return f})),n.d(t,"registerYB",(function(){return h})),n.d(t,"reducer",(function(){return E}));var a=n("VTBJ"),r=n("o0o1"),o=n.n(r),i=n("HaE+"),s=n("zyFE"),c=n("Nlzp"),u={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},l=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),d=l.Types,p=l.Creators;function f(e){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["I"])();case 2:a=e.sent,a&&t(p.UpdateUserInfo(a.data));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function h(){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}t["default"]=p;var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",t.payload,t.phone),Object.assign({},e,Object(a["a"])({loginInProgress:!1,loggedIn:!0,phone:t.phone},t.payload))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:t.payload})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return t.token&&(t.token.accessToken=null),t},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:t.payload})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},E=Object(s["createReducer"])(u,{[d.LOGGED_IN]:g,[d.LOGGED_OUT]:y,[d.UPDATE_TOKEN]:m,[d.UPDATE_USER_INFO]:b,[d.CLEAR_ACCESS_TOKEN]:v})},rY4l:function(e,t,n){"use strict";n("1Cgs");var a=n("zvbH"),r=(n("D2jH"),n("2ROE")),o=n("q1tI"),i=n.n(o),s=n("9kvl");class c extends o["Component"]{constructor(e){super(e),this.GoBack=()=>{s["a"].goBack()}}render(){var e=this.props,t=e.hidLift,n=e.rightContent,o=e.title,s=e.noclass,c=e.bottomColor,u=e.radius;return s?i.a.createElement(a["a"],{icon:t?null:i.a.createElement(r["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o):i.a.createElement("div",{className:"public_header"},i.a.createElement(a["a"],{icon:t?null:i.a.createElement(r["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o),u&&i.a.createElement("div",{className:"public_radius",style:{backgroundColor:c}}))}}c.defaultProps={noclass:!1,radius:!0},t["a"]=c},vwip:function(e,t,n){"use strict";t["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,t,n){localStorage.removeItem(e);var a=(new Date).getTime(),r=n||this.age,o={};return o._value=t,o._time=a,o._age=a+r,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var t=!0,n=localStorage.getItem(e),a=(new Date).getTime();return n&&(n=JSON.parse(n),t=a>n._age),t},get:function(e){var t=this.isExpire(e),n=null;return t?(localStorage.removeItem(e),n):(n=localStorage.getItem(e),n=JSON.parse(n),n._value)}}},zvbH:function(e,t,n){"use strict";var a=n("QbLZ"),r=n.n(a),o=n("iCc5"),i=n.n(o),s=n("V7oC"),c=n.n(s),u=n("FYw3"),l=n.n(u),d=n("mRg0"),p=n.n(d),f=n("TSYQ"),h=n.n(f),g=n("q1tI"),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},v=function(e){function t(){return i()(this,t),l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.children,o=e.mode,i=e.icon,s=e.onLeftClick,c=e.leftContent,u=e.rightContent,l=m(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return g["createElement"]("div",r()({},l,{className:h()(n,t,t+"-"+o)}),g["createElement"]("div",{className:t+"-left",role:"button",onClick:s},i?g["createElement"]("span",{className:t+"-left-icon","aria-hidden":"true"},i):null,c),g["createElement"]("div",{className:t+"-title"},a),g["createElement"]("div",{className:t+"-right"},u))}}]),t}(g["Component"]);t["a"]=v,v.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}}}}]);