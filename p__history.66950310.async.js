(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"+J+N":function(e,t,n){var r=n("LboF"),a=n("okyr");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},"+cRp":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return b}));n("HVTF");var r=n("OT5E"),a=n("vDqi"),o=n.n(a),i=n("9kvl"),s=n("ShuE"),c=n("gjeX"),u=n.n(c),l=n("p58V"),d=n("vwip");function p(e,t,n){var r="",a=t,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(a=Math.round(Math.random()*(n-t))+t);for(var i=0;i<a;i++)r+=o[Math.round(Math.random()*(o.length-1))];return r}var h="http://18.163.117.43:9091/",f=o.a.create({baseURL:h,timeout:6e4});f.interceptors.request.use((function(t){t.loading&&r["a"].loading("\u52a0\u8f7d\u4e2d..."),Object(s["c"])(t),Object(s["a"])(t),t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var n=e.store.getState().user.token;n&&(t.headers["userId"]=n.userId,n.accessToken&&(t.headers["token"]=n.accessToken));var a=t.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(a).map((function(e){return e+"="+a[e]})),c=(i=i.concat(["qid="+p(!1,16),"terminal=h5"]).sort()).join("&"),l="sign="+u()(c+o);return t.data=c+"&"+l,t}),(function(e){return e}));var g=CryptoJS.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),v=CryptoJS.enc.Latin1.parse("jfdkwqew!#S#$%78");function m(e,t){var n=d["a"].get(e);if(!n||200!==n.code||Array.isArray(n.data)&&0===n.data.length){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return t(...a).then(t=>(d["a"].set(e,t,864e5),t)).catch((function(e){return e}))}return n}f.interceptors.response.use((function(t){r["a"].hide(),Object(s["c"])(t),console.log(999,CryptoJS.AES.decrypt(t.data,g,{iv:v,mode:CryptoJS.mode.CBC,adding:CryptoJS.pad.ZeroPadding}).toString(CryptoJS.enc.Utf8));var n=JSON.parse(CryptoJS.AES.decrypt(t.data,g,{iv:v,mode:CryptoJS.mode.CBC,adding:CryptoJS.pad.ZeroPadding}).toString(CryptoJS.enc.Utf8).replace(/\0/g,"")),a=e.store,o=a.dispatch,c=a.getState;if(200==n.code)return n;if(-1==n.code)r["a"].info(n.data);else if(-98==n.code)r["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),o(l["default"].UpdateToken(null)),o(l["default"].UpdateUserInfo(null)),i["a"].push("/login");else if(-99==n.code){o(l["default"].ClearAccessToken());var u=c().user.token;u&&f.post("api/user/applyToken",{refershToken:u.refershToken}).then(e=>{e&&(u.accessToken=e.data.accessToken,u.refershToken=e.data.refershToken,o(l["default"].UpdateToken(u)),i["a"].replace({pathname:i["a"].location.pathname}))})}}),(function(e){if(r["a"].hide(),e.response)switch(e.response.status){case 404:r["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:r["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:r["a"].info("\u8fde\u63a5\u8d85\u65f6");break}})),t["a"]=f;var b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],a=u.a.hex(r+"[POST]"+JSON.stringify(t));return m(a,f.post,...t)}}).call(this,n("yLpj"))},"1Cgs":function(e,t,n){"use strict";n("ywh3"),n("+J+N")},"6ua7":function(e,t,n){"use strict";n("UzV/");var r=n("vLen"),a=n("q1tI"),o=n.n(a);class i extends a["Component"]{constructor(e){super(e),this._OnEndReached=()=>{this.setState({isEnd:!0}),this.props.onEndReached&&this.props.onEndReached()},this._RenderFooter=()=>{var e=this.props,t=e.dataSource,n=e.nomore;return 0==t.length?o.a.createElement("div",{style:{textAlign:"center"}},"\u6682\u65e0\u6570\u636e"):this.state.isEnd?o.a.createElement("div",{style:{textAlign:"center"}},n?"\u6ca1\u6709\u66f4\u591a\u4e86~":"\u52a0\u8f7d\u66f4\u591a\u4e2d..."):void 0},this.state={isEnd:!1},this.ds=new r["a"].DataSource({getRowData:(e,t)=>e[t],rowHasChanged:(e,t)=>e!==t})}UNSAFE_componentWillMount(){}render(){var e=this.props,t=e.className,n=e.dataSource,a=e.renderRow,i=n.map((e,t)=>t);return this.ds=this.ds.cloneWithRows(n,i),o.a.createElement(r["a"],{className:t,ref:e=>this.lv=e,dataSource:this.ds,renderRow:a,renderFooter:this._RenderFooter,pageSize:4,onScroll:()=>{console.log("scroll")},scrollRenderAheadDistance:500,onEndReached:this._OnEndReached,onEndReachedThreshold:10,style:{flex:1}})}}i.defaultProps={nomore:!1,loading:!1,dataSource:[],renderSeparator:()=>o.a.createElement("div",{className:"line"})},t["a"]=i},"9kvl":function(e,t,n){"use strict";var r,a,o=n("FfOG"),i=n("bCY9"),s=(n("I5X1"),n("o0o1")),c=n.n(s),u=n("HaE+"),l=(n("/xke"),n("TeRw")),d=(n("miYZ"),n("tsqr")),p=n("VTBJ"),h=n("io9h"),f=n("LtsZ");n("TTbB");(function(e){e[e["SILENT"]=0]="SILENT",e[e["WARN_MESSAGE"]=1]="WARN_MESSAGE",e[e["ERROR_MESSAGE"]=2]="ERROR_MESSAGE",e[e["NOTIFICATION"]=4]="NOTIFICATION",e[e["REDIRECT"]=9]="REDIRECT"})(a||(a={}));var g="/exception",v=i["a"].applyPlugins({key:"request",type:f["ApplyPluginsType"].modify,initialValue:{}}),m=(null===(r=v.errorConfig)||void 0===r?void 0:r.adaptor)||(e=>e),b=Object(h["b"])(Object(p["a"])({errorHandler:e=>{var t,n,r,i;if(null===e||void 0===e||null===(t=e.request)||void 0===t||null===(n=t.options)||void 0===n?void 0:n.skipErrorHandler)throw e;if("ResponseError"===e.name&&e.data&&e.request){var s,c={req:e.request,res:e.response};i=m(e.data,c),e.message=(null===(s=i)||void 0===s?void 0:s.errorMessage)||e.message,e.data=e.data,e.info=i}if(i=e.info,i){var u,p,h,f=null===(u=i)||void 0===u?void 0:u.errorMessage,b=null===(p=i)||void 0===p?void 0:p.errorCode,y=(null===(h=v.errorConfig)||void 0===h?void 0:h.errorPage)||g;switch(null===(r=i)||void 0===r?void 0:r.showType){case a.SILENT:break;case a.WARN_MESSAGE:d["a"].warn(f);break;case a.ERROR_MESSAGE:d["a"].error(f);break;case a.NOTIFICATION:l["a"].open({message:f});break;case a.REDIRECT:o["b"].push({pathname:y,query:{errorCode:b,errorMessage:f}});break;default:d["a"].error(f);break}}else d["a"].error(e.message||"Request error, please retry.");throw e}},v));b.use(function(){var e=Object(u["a"])(c.a.mark((function e(t,n){var r,a,o,i,s,u,l,d;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(a=t.req,o=t.res,!(null===(r=a.options)||void 0===r?void 0:r.skipErrorHandler)){e.next=5;break}return e.abrupt("return");case 5:if(i=a.options,s=i.getResponse,u=s?o.data:o,l=m(u,t),!1!==l.success){e.next=15;break}throw d=new Error(l.errorMessage),d.name="BizError",d.data=u,d.info=l,d;case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());var y=v.middlewares||[];y.forEach(e=>{b.use(e)}),n.d(t,"a",(function(){return o["b"]})),n.d(t,"b",(function(){return i["a"]}))},J3KO:function(e,t,n){var r=n("JPst");t=r(!1),t.push([e.i,'.am-swipe {\n  overflow: hidden;\n  position: relative;\n}\n.am-swipe-content {\n  position: relative;\n  background-color: #fff;\n}\n.am-swipe-cover {\n  position: absolute;\n  z-index: 2;\n  background: transparent;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  display: none;\n}\n.am-swipe .am-swipe-content,\n.am-swipe .am-swipe-actions {\n  transition: all 250ms;\n}\n.am-swipe-swiping .am-swipe-content,\n.am-swipe-swiping .am-swipe-actions {\n  transition: none;\n}\n.am-swipe-swiping .am-list-item-active {\n  background-color: #FFF;\n}\n.am-swipe-actions {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.am-swipe-actions-left {\n  left: 0;\n}\n.am-swipe-actions-right {\n  right: 0;\n}\n.am-swipe-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.am-swipe-btn-text {\n  padding: 0 2.1333333vw;\n}[data-rem="true"] .am-swipe-btn-text {\n  padding: 0 0.2133333rem\n}\n',""]),e.exports=t},Nlzp:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"q",(function(){return o})),n.d(t,"t",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"u",(function(){return u})),n.d(t,"B",(function(){return l})),n.d(t,"A",(function(){return d})),n.d(t,"r",(function(){return p})),n.d(t,"v",(function(){return h})),n.d(t,"a",(function(){return f})),n.d(t,"i",(function(){return g})),n.d(t,"n",(function(){return v})),n.d(t,"p",(function(){return m})),n.d(t,"C",(function(){return b})),n.d(t,"o",(function(){return y})),n.d(t,"j",(function(){return S})),n.d(t,"e",(function(){return w})),n.d(t,"y",(function(){return E})),n.d(t,"z",(function(){return C})),n.d(t,"h",(function(){return T})),n.d(t,"g",(function(){return k})),n.d(t,"l",(function(){return O})),n.d(t,"b",(function(){return R})),n.d(t,"s",(function(){return P})),n.d(t,"k",(function(){return x})),n.d(t,"m",(function(){return _})),n.d(t,"w",(function(){return I})),n.d(t,"x",(function(){return M}));var r=n("+cRp"),a=e=>r["a"].post("api/user/getVerifyCode",e),o=e=>r["a"].post("api/user/login",e,{loading:!0}),i=e=>r["a"].post("api/user/register",e,{loading:!0}),s=e=>r["a"].post("api/user/SendCode",e),c=e=>r["a"].post("api/user/forgetPass",e,{loading:!0}),u=e=>r["a"].post("api/user/resetPass",e,{loading:!0}),l=e=>r["a"].post("api/user/getRights",e),d=e=>r["a"].post("api/user/getUserInfo",e),p=e=>r["a"].post("api/site/notice",e),h=e=>r["a"].post("api/site/moduleCfg",e),f=e=>r["a"].post("api/video/Home",e),g=e=>r["a"].post("api/video/getList",e),v=e=>r["a"].post("api/video/getVideoInfo",e),m=e=>r["a"].post("api/video/getVideoRelation",e),b=e=>r["a"].post("api/video/watchingVideo",e),y=e=>r["a"].post("api/video/getVideoRank",e),S=e=>r["a"].post("api/video/getMoiveHis",e),w=e=>r["a"].post("api/video/discoveryPage",e),E=e=>r["a"].post("api/video/thematicList",e),C=e=>r["a"].post("api/video/thematicVideo",e),T=e=>r["a"].post("api/video/getGirlList",e),k=e=>r["a"].post("api/video/getGirlInfo",e),O=e=>r["a"].post("api/video/getSearchRank",e),R=e=>r["a"].post("api/recharge/PayConfig",e),P=e=>r["a"].post("api/recharge/pay",e,{loading:!0}),x=e=>r["a"].post("api/user/getOrder",e,{loading:!0}),_=e=>r["a"].post("api/user/getSpread",e),I=e=>r["a"].post("api/user/spreadInfo",e),M=e=>Object(r["b"])("api/site/spreadRules",e)},ShuE:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n("ODXe"),a=n("Qyje"),o=n.n(a),i=n("vDqi"),s=n.n(i),c=new Map,u=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{c.has(t)||c.set(t,e)})},l=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(c.has(t)){var n=c.get(t);n(t),c.delete(t)}},d=()=>{var e=!0,t=!1,n=void 0;try{for(var a,o=c[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var i=a.value,s=Object(r["a"])(i,2),u=s[0],l=s[1];l(u)}}catch(d){t=!0,n=d}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}c.clear()}},TmVI:function(e,t,n){var r=n("LboF"),a=n("r8bQ");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},cNuV:function(e,t,n){"use strict";n.r(t);n("ywh3"),n("qFT2");var r=n("iCc5"),a=n.n(r),o=n("V7oC"),i=n.n(o),s=n("FYw3"),c=n.n(s),u=n("mRg0"),l=n.n(u),d=n("TSYQ"),p=n.n(d),h=n("QbLZ"),f=n.n(h),g=n("YEIV"),v=n.n(g),m=n("q1tI"),b=n.n(m),y=n("i8i4"),S=n.n(y),w=n("jZWL"),E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function C(e,t){var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;while(e){if(n.call(e,t))return e;e=e.parentElement}return null}var T=function(e){function t(e){a()(this,t);var n=c()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onCloseSwipe=function(e){if(n.openedLeft||n.openedRight){var t=C(e.target,"."+n.props.prefixCls+"-actions");t||(e.preventDefault(),n.close())}},n.onPanStart=function(e){var t=e.direction,r=e.moveStatus,a=r.x,o=2===t,i=4===t;if(o||i){var s=n.props,c=s.left,u=s.right;n.needShowRight=o&&u.length>0,n.needShowLeft=i&&c.length>0,n.left&&(n.left.style.visibility=n.needShowRight?"hidden":"visible"),n.right&&(n.right.style.visibility=n.needShowLeft?"hidden":"visible"),(n.needShowLeft||n.needShowRight)&&(n.swiping=!0,n.setState({swiping:n.swiping}),n._setStyle(a))}},n.onPanMove=function(e){var t=e.moveStatus,r=e.srcEvent,a=t.x;n.swiping&&(r&&r.preventDefault&&r.preventDefault(),n._setStyle(a))},n.onPanEnd=function(e){if(n.swiping){var t=e.moveStatus,r=t.x,a=n.needShowRight&&Math.abs(r)>n.btnsRightWidth/2,o=n.needShowLeft&&Math.abs(r)>n.btnsLeftWidth/2;a?n.doOpenRight():o?n.doOpenLeft():n.close(),n.swiping=!1,n.setState({swiping:n.swiping}),n.needShowLeft=!1,n.needShowRight=!1}},n.doOpenLeft=function(){n.open(n.btnsLeftWidth,!0,!1)},n.doOpenRight=function(){n.open(-n.btnsRightWidth,!0,!1)},n._setStyle=function(e){var t=e>0?n.btnsLeftWidth:-n.btnsRightWidth,r=n._getContentEasing(e,t);n.content.style.left=r+"px",n.cover&&(n.cover.style.display=Math.abs(e)>0?"block":"none",n.cover.style.left=r+"px")},n.open=function(e,t,r){n.openedLeft||n.openedRight||!n.props.onOpen||n.props.onOpen(),n.openedLeft=t,n.openedRight=r,n._setStyle(e)},n.close=function(){(n.openedLeft||n.openedRight)&&n.props.onClose&&n.props.onClose(),n._setStyle(0),n.openedLeft=!1,n.openedRight=!1},n.onTouchMove=function(e){n.swiping&&e.preventDefault()},n.state={swiping:!1},n.openedLeft=!1,n.openedRight=!1,n}return l()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.btnsLeftWidth=this.left?this.left.offsetWidth:0,this.btnsRightWidth=this.right?this.right.offsetWidth:0,document.body.addEventListener("touchstart",this.onCloseSwipe,!0)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("touchstart",this.onCloseSwipe,!0)}},{key:"onBtnClick",value:function(e,t){var n=t.onPress;n&&n(e),this.props.autoClose&&this.close()}},{key:"_getContentEasing",value:function(e,t){var n=Math.abs(e)-Math.abs(t),r=n>0,a=t>0?1:-1;return r?(e=t+Math.pow(n,.85)*a,Math.abs(e)>Math.abs(t)?t:e):e}},{key:"renderButtons",value:function(e,t){var n=this,r=this.props.prefixCls;return e&&e.length?b.a.createElement("div",{className:r+"-actions "+r+"-actions-"+t,ref:function(e){return n[t]=e}},e.map((function(e,t){return b.a.createElement("div",{key:t,className:r+"-btn "+(e.hasOwnProperty("className")?e.className:""),style:e.style,role:"button",onClick:function(t){return n.onBtnClick(t,e)}},b.a.createElement("div",{className:r+"-btn-text"},e.text||"Click"))}))):null}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,r=t.left,a=t.right,o=t.disabled,i=t.children,s=E(t,["prefixCls","left","right","disabled","children"]),c=(s.autoClose,s.onOpen,s.onClose,E(s,["autoClose","onOpen","onClose"])),u=p()(n,v()({},n+"-swiping",this.state.swiping)),l={ref:function(t){return e.content=S.a.findDOMNode(t)}};return!r.length&&!a.length||o?b.a.createElement("div",f()({},l,c),i):b.a.createElement("div",f()({className:u},c),b.a.createElement("div",{className:n+"-cover",ref:function(t){return e.cover=t}}),this.renderButtons(r,"left"),this.renderButtons(a,"right"),b.a.createElement(w["a"],f()({onTouchMove:this.onTouchMove,onPanStart:this.onPanStart,onPanMove:this.onPanMove,onPanEnd:this.onPanEnd,onPanCancel:this.onPanEnd,onSwipeLeft:this.doOpenRight,onSwipeRight:this.doOpenLeft,direction:"horizontal"},l),b.a.createElement("div",{className:n+"-content"},i)))}}]),t}(b.a.Component),k=T;T.defaultProps={prefixCls:"rc-swipeout",autoClose:!1,disabled:!1,left:[],right:[],onOpen:function(){},onClose:function(){}};var O=k,R=function(e){function t(){return a()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,r=e.prefixCls,a=e.left,o=void 0===a?[]:a,i=e.right,s=void 0===i?[]:i,c=e.autoClose,u=e.disabled,l=e.onOpen,d=e.onClose,h=e.children,f=p()(r,t);return o.length||s.length?m["createElement"]("div",{style:n,className:t},m["createElement"](O,{prefixCls:r,left:o,right:s,autoClose:c,disabled:u,onOpen:l,onClose:d},h)):m["createElement"]("div",{style:n,className:f},h)}}]),t}(m["Component"]);R.defaultProps={prefixCls:"am-swipe",autoClose:!1,disabled:!1,left:[],right:[],onOpen:function(){},onClose:function(){}};var P=R,x=n("o0o1"),_=n.n(x),I=n("HaE+"),M=n("/MKj"),L=n("Nlzp"),N=n("rY4l"),j=n("6ua7");n("TmVI");class A extends m["Component"]{constructor(e){var t;super(e),t=this,this.getDateByFilter=Object(I["a"])(_.a.mark((function e(){return _.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:Object(L["j"])().then(e=>{e&&(t._data=t._data.concat(e.data),t.setState({dataSource:t._data}))});case 1:case"end":return e.stop()}}),e)}))),this.EnterVideo=e=>()=>{this.props.history.push("/video/"+e)},this.row=(e,t,n)=>{var r=e[n];this.props.ad;return b.a.createElement(P,{style:{backgroundColor:"gray",marginTop:10},autoClose:!0,right:[{text:"\u5220\u9664",onPress:()=>console.log("delete"),style:{backgroundColor:"#F4333C",color:"white"}}],onOpen:()=>console.log("global open"),onClose:()=>console.log("global close")},b.a.createElement("div",{className:"li"},b.a.createElement("div",{className:"bgimg li_img",style:{backgroundImage:"url(".concat(r.coverUrl,")")}}),b.a.createElement("p",null,r.title)))},this.handle=()=>{history.push("/")},this.state={dataSource:[],pageNum:1,totalpage:1},this._data=[]}UNSAFE_componentWillMount(){this.getDateByFilter()}render(){this.props.user;var e=this.state.dataSource;return b.a.createElement(b.a.Fragment,null,b.a.createElement(N["a"],{title:"\u5386\u53f2\u8bb0\u5f55",rightContent:b.a.createElement("span",null,"\u5220\u9664")}),b.a.createElement(j["a"],{className:"HistoryList",dataSource:e,renderRow:this.row}))}}function G(e){var t=e.config.moduleCfg&&e.config.moduleCfg.banner;return{ad:t.index_data_ad||[]}}t["default"]=Object(M["b"])(G)(A)},jZWL:function(e,t,n){"use strict";var r=n("QbLZ"),a=n.n(r),o=n("iCc5"),i=n.n(o),s=n("V7oC"),c=n.n(s),u=n("FYw3"),l=n.n(u),d=n("mRg0"),p=n.n(d),h=n("q1tI"),f=n.n(h),g=1,v=2,m=4,b=8,y=16,S=v|m,w=b|y,E=S|w,C={time:251},T={threshold:10,velocity:.3};function k(e,t){return Math.sqrt(e*e+t*t)}function O(e,t){var n=Math.atan2(t,e);return 180/(Math.PI/n)}function R(){return Date.now()}function P(e){if(!(e.length<2)){var t=e[0],n=t.x,r=t.y,a=e[1],o=a.x,i=a.y,s=o-n,c=i-r;return{x:s,y:c,z:k(s,c),angle:O(s,c)}}}function x(e,t,n){var r=e[0],a=r.x,o=r.y,i=t[0],s=i.x,c=i.y,u=s-a,l=c-o,d=k(u,l);return{x:u,y:l,z:d,time:n,velocity:d/n,angle:O(u,l)}}function _(e,t){var n=e.angle,r=t.angle;return r-n}function I(e,t){return e+t[0].toUpperCase()+t.slice(1)}function M(e,t){return Math.abs(e)>=T.threshold&&Math.abs(t)>T.velocity}function L(e,t){return!!(t&e)}function N(e,t){var n=e.x,r=e.y,a=t.x,o=t.y,i=a-n,s=o-r;return 0===i&&0===s?g:Math.abs(i)>=Math.abs(s)?i<0?v:m:s<0?b:y}function j(e){var t=void 0;switch(e){case g:break;case v:t="left";break;case m:t="right";break;case b:t="up";break;case y:t="down";break;default:}return t}var A={all:E,vertical:w,horizontal:S},G=function(e){function t(e){i()(this,t);var n=l()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.triggerEvent=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var o=n.props[e];"function"===typeof o&&o.apply(void 0,[n.getGestureState()].concat(r))},n.triggerCombineEvent=function(e,t){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];n.triggerEvent.apply(n,[e].concat(a)),n.triggerSubEvent.apply(n,[e,t].concat(a))},n.triggerSubEvent=function(e,t){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];if(t){var i=I(e,t);n.triggerEvent.apply(n,[i].concat(a))}},n.triggerPinchEvent=function(e,t){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];var i=n.gesture.scale;"move"===t&&"number"===typeof i&&(i>1&&n.triggerEvent("onPinchOut"),i<1&&n.triggerEvent("onPinchIn")),n.triggerCombineEvent.apply(n,[e,t].concat(a))},n.initPressTimer=function(){n.cleanPressTimer(),n.pressTimer=setTimeout((function(){n.setGestureState({press:!0}),n.triggerEvent("onPress")}),C.time)},n.cleanPressTimer=function(){n.pressTimer&&clearTimeout(n.pressTimer)},n.setGestureState=function(e){n.gesture||(n.gesture={}),n.gesture.touches&&(n.gesture.preTouches=n.gesture.touches),n.gesture=a()({},n.gesture,e)},n.getGestureState=function(){return n.gesture?a()({},n.gesture):n.gesture},n.cleanGestureState=function(){delete n.gesture},n.getTouches=function(e){return Array.prototype.slice.call(e.touches).map((function(e){return{x:e.screenX,y:e.screenY}}))},n.triggerUserCb=function(e,t){var r=I("onTouch",e);r in n.props&&n.props[r](t)},n._handleTouchStart=function(e){n.triggerUserCb("start",e),n.event=e,e.touches.length>1&&e.preventDefault(),n.initGestureStatus(e),n.initPressTimer(),n.checkIfMultiTouchStart()},n.initGestureStatus=function(e){n.cleanGestureState();var t=n.getTouches(e),r=R(),a=P(t);n.setGestureState({startTime:r,startTouches:t,startMutliFingerStatus:a,time:r,touches:t,mutliFingerStatus:a,srcEvent:n.event})},n.checkIfMultiTouchStart=function(){var e=n.props,t=e.enablePinch,r=e.enableRotate,a=n.gesture.touches;if(a.length>1&&(t||r)){if(t){var o=P(a);n.setGestureState({startMutliFingerStatus:o,pinch:!0,scale:1}),n.triggerCombineEvent("onPinch","start")}r&&(n.setGestureState({rotate:!0,rotation:0}),n.triggerCombineEvent("onRotate","start"))}},n._handleTouchMove=function(e){n.triggerUserCb("move",e),n.event=e,n.gesture&&(n.cleanPressTimer(),n.updateGestureStatus(e),n.checkIfSingleTouchMove(),n.checkIfMultiTouchMove())},n.checkIfMultiTouchMove=function(){var e=n.gesture,t=e.pinch,r=e.rotate,a=e.touches,o=e.startMutliFingerStatus,i=e.mutliFingerStatus;if(t||r){if(a.length<2)return n.setGestureState({pinch:!1,rotate:!1}),t&&n.triggerCombineEvent("onPinch","cancel"),void(r&&n.triggerCombineEvent("onRotate","cancel"));if(t){var s=i.z/o.z;n.setGestureState({scale:s}),n.triggerPinchEvent("onPinch","move")}if(r){var c=_(o,i);n.setGestureState({rotation:c}),n.triggerCombineEvent("onRotate","move")}}},n.allowGesture=function(){return L(n.gesture.direction,n.directionSetting)},n.checkIfSingleTouchMove=function(){var e=n.gesture,t=e.pan,r=e.touches,a=e.moveStatus,o=e.preTouches,i=e.availablePan,s=void 0===i||i;if(r.length>1)return n.setGestureState({pan:!1}),void(t&&n.triggerCombineEvent("onPan","cancel"));if(a&&s){var c=N(o[0],r[0]);n.setGestureState({direction:c});var u=j(c);if(!n.allowGesture())return void(t||n.setGestureState({availablePan:!1}));t?(n.triggerCombineEvent("onPan",u),n.triggerSubEvent("onPan","move")):(n.triggerCombineEvent("onPan","start"),n.setGestureState({pan:!0,availablePan:!0}))}},n.checkIfMultiTouchEnd=function(e){var t=n.gesture,r=t.pinch,a=t.rotate;r&&n.triggerCombineEvent("onPinch",e),a&&n.triggerCombineEvent("onRotate",e)},n.updateGestureStatus=function(e){var t=R();if(n.setGestureState({time:t}),e.touches&&e.touches.length){var r=n.gesture,a=r.startTime,o=r.startTouches,i=r.pinch,s=r.rotate,c=n.getTouches(e),u=x(o,c,t-a),l=void 0;(i||s)&&(l=P(c)),n.setGestureState({touches:c,mutliFingerStatus:l,moveStatus:u})}},n._handleTouchEnd=function(e){n.triggerUserCb("end",e),n.event=e,n.gesture&&(n.cleanPressTimer(),n.updateGestureStatus(e),n.doSingleTouchEnd("end"),n.checkIfMultiTouchEnd("end"))},n._handleTouchCancel=function(e){n.triggerUserCb("cancel",e),n.event=e,n.gesture&&(n.cleanPressTimer(),n.updateGestureStatus(e),n.doSingleTouchEnd("cancel"),n.checkIfMultiTouchEnd("cancel"))},n.triggerAllowEvent=function(e,t){n.allowGesture()?n.triggerCombineEvent(e,t):n.triggerSubEvent(e,t)},n.doSingleTouchEnd=function(e){var t=n.gesture,r=t.moveStatus,a=t.pinch,o=t.rotate,i=t.press,s=t.pan,c=t.direction;if(!a&&!o){if(r){var u=r.z,l=r.velocity,d=M(u,l);if(n.setGestureState({swipe:d}),s&&n.triggerAllowEvent("onPan",e),d){var p=j(c);return void n.triggerAllowEvent("onSwipe",p)}}i?n.triggerEvent("onPressUp"):n.triggerEvent("onTap")}},n.getTouchAction=function(){var e=n.props,t=e.enablePinch,r=e.enableRotate,a=n.directionSetting;return t||r||a===E?"pan-x pan-y":a===w?"pan-x":a===S?"pan-y":"auto"},n.directionSetting=A[e.direction],n}return p()(t,e),c()(t,[{key:"componentWillUnmount",value:function(){this.cleanPressTimer()}},{key:"render",value:function(){var e=this.props.children,t=f.a.Children.only(e),n=this.getTouchAction(),r={onTouchStart:this._handleTouchStart,onTouchMove:this._handleTouchMove,onTouchCancel:this._handleTouchCancel,onTouchEnd:this._handleTouchEnd};return f.a.cloneElement(t,a()({},r,{style:a()({touchAction:n},t.props.style||{})}))}}]),t}(h["Component"]);t["a"]=G;G.defaultProps={enableRotate:!1,enablePinch:!1,direction:"all"}},okyr:function(e,t,n){var r=n("JPst");t=r(!1),t.push([e.i,'.am-navbar {\n  display: flex;\n  align-items: center;\n  height: 12vw;\n  background-color: #108ee9;\n  color: #fff;\n}[data-rem="true"] .am-navbar {\n  height: 1.2rem\n}\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  flex: 1 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.am-navbar-left {\n  padding-left: 4vw;\n  font-size: 4.2666667vw;\n}[data-rem="true"] .am-navbar-left {\n  padding-left: 0.4rem;\n  font-size: 0.4266667rem\n}\n.am-navbar-left-icon {\n  margin-right: 1.3333333vw;\n  display: inherit;\n}[data-rem="true"] .am-navbar-left-icon {\n  margin-right: 0.1333333rem\n}\n.am-navbar-title {\n  justify-content: center;\n  font-size: 4.8vw;\n  white-space: nowrap;\n}[data-rem="true"] .am-navbar-title {\n  font-size: 0.48rem\n}\n.am-navbar-right {\n  justify-content: flex-end;\n  font-size: 4.2666667vw;\n  margin-right: 4vw;\n}[data-rem="true"] .am-navbar-right {\n  font-size: 0.4266667rem;\n  margin-right: 0.4rem\n}\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9;\n}\n.am-navbar-light .am-navbar-title {\n  color: #000;\n}\n',""]),e.exports=t},p58V:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return u})),n.d(t,"userInfo",(function(){return h})),n.d(t,"registerYB",(function(){return f})),n.d(t,"reducer",(function(){return S}));var r=n("VTBJ"),a=n("o0o1"),o=n.n(a),i=n("HaE+"),s=n("zyFE"),c=n("Nlzp"),u={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},l=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),d=l.Types,p=l.Creators;function h(e){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["A"])();case 2:r=e.sent,r&&p.UpdateUserInfo(r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function f(){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}t["default"]=p;var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",t.payload,t.phone),Object.assign({},e,Object(r["a"])({loginInProgress:!1,loggedIn:!0,phone:t.phone},t.payload))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:t.payload})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return t.token&&(t.token.accessToken=null),t},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:t.payload})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},S=Object(s["createReducer"])(u,{[d.LOGGED_IN]:g,[d.LOGGED_OUT]:y,[d.UPDATE_TOKEN]:v,[d.UPDATE_USER_INFO]:b,[d.CLEAR_ACCESS_TOKEN]:m})},qFT2:function(e,t,n){var r=n("LboF"),a=n("J3KO");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},r8bQ:function(e,t,n){var r=n("JPst");t=r(!1),t.push([e.i,'.HistoryList {\n  flex: 1 1;\n}\n.HistoryList .list-view-section-body {\n  padding: 0 2.5%;\n  overflow: hidden;\n}\n.HistoryList .li {\n  display: flex;\n}\n.HistoryList .li .li_img {\n  width: 40vw;\n  height: 21.3333333vw;\n  margin-right: 2.6666667vw;\n}[data-rem="true"] .HistoryList .li .li_img {\n  width: 4rem;\n  height: 2.1333333rem;\n  margin-right: 0.2666667rem\n}\n.HistoryList .li p {\n  flex: 1 1;\n}\n',""]),e.exports=t},rY4l:function(e,t,n){"use strict";n("1Cgs");var r=n("zvbH"),a=(n("D2jH"),n("2ROE")),o=n("q1tI"),i=n.n(o),s=n("9kvl");class c extends o["Component"]{constructor(e){super(e),this.GoBack=()=>{s["a"].goBack()},this.state={}}render(){var e=this.props,t=e.hidLift,n=e.rightContent,o=e.title;return i.a.createElement(r["a"],{mode:"light",icon:t?null:i.a.createElement(a["a"],{type:"left",onClick:this.GoBack}),rightContent:n},o)}}t["a"]=c},vwip:function(e,t,n){"use strict";t["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,t,n){localStorage.removeItem(e);var r=(new Date).getTime(),a=n||this.age,o={};return o._value=t,o._time=r,o._age=r+a,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var t=!0,n=localStorage.getItem(e),r=(new Date).getTime();return n&&(n=JSON.parse(n),t=r>n._age),t},get:function(e){var t=this.isExpire(e),n=null;return t?(localStorage.removeItem(e),n):(n=localStorage.getItem(e),n=JSON.parse(n),n._value)}}},zvbH:function(e,t,n){"use strict";var r=n("QbLZ"),a=n.n(r),o=n("iCc5"),i=n.n(o),s=n("V7oC"),c=n.n(s),u=n("FYw3"),l=n.n(u),d=n("mRg0"),p=n.n(d),h=n("TSYQ"),f=n.n(h),g=n("q1tI"),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},m=function(e){function t(){return i()(this,t),l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,r=e.children,o=e.mode,i=e.icon,s=e.onLeftClick,c=e.leftContent,u=e.rightContent,l=v(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return g["createElement"]("div",a()({},l,{className:f()(n,t,t+"-"+o)}),g["createElement"]("div",{className:t+"-left",role:"button",onClick:s},i?g["createElement"]("span",{className:t+"-left-icon","aria-hidden":"true"},i):null,c),g["createElement"]("div",{className:t+"-title"},r),g["createElement"]("div",{className:t+"-right"},u))}}]),t}(g["Component"]);t["a"]=m,m.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}}}}]);