(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"+J+N":function(e,t,n){var a=n("LboF"),r=n("okyr");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},"+cRp":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return v}));n("HVTF");var a=n("OT5E"),r=n("vDqi"),o=n.n(r),i=n("9kvl"),s=n("ShuE"),c=n("gjeX"),d=n.n(c),u=n("p58V"),l=n("vwip"),p=n("NFKh");function g(e,t,n){var a="",r=t,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(r=Math.round(Math.random()*(n-t))+t);for(var i=0;i<r;i++)a+=o[Math.round(Math.random()*(o.length-1))];return a}var f="http://api.xkb01.com:9992/",m=o.a.create({baseURL:f,timeout:6e4});m.interceptors.request.use((function(t){t.loading&&a["a"].loading("\u52a0\u8f7d\u4e2d..."),Object(s["c"])(t),Object(s["a"])(t),t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var n=e.store.getState().user.token;n&&(t.headers["userId"]=n.userId,n.accessToken&&(t.headers["token"]=n.accessToken));var r=t.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(r).map((function(e){return e+"="+r[e]})),c=(i=i.concat(["qid="+g(!1,16),"terminal=h5"]).sort()).join("&"),u="sign="+d()(c+o);return t.data=c+"&"+u,t}),(function(e){return e}));p.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),p.enc.Latin1.parse("jfdkwqew!#S#$%78");function h(e,t){var n=l["a"].get(e);if(!n||200!==n.code||Array.isArray(n.data)&&0===n.data.length){for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];return t(...r).then(t=>(l["a"].set(e,t,864e5),t)).catch((function(e){return e}))}return n}m.interceptors.response.use((function(t){a["a"].hide(),Object(s["c"])(t);var n=t.data,r=e.store,o=r.dispatch,c=r.getState;if(200==n.code||-97==n.code)return n;if(-1==n.code)a["a"].info(n.data);else if(-98==n.code)o(u["default"].LoggedOut()),i["a"].push("/login"),a["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548");else if(-99==n.code){o(u["default"].ClearAccessToken());var d=c().user.token;d&&m.post("api/user/applyToken",{refershToken:d.refershToken}).then(e=>{e&&(d.accessToken=e.data.accessToken,d.refershToken=e.data.refershToken,o(u["default"].UpdateToken(d)),location.reload())})}}),(function(e){if(a["a"].hide(),e.response)switch(e.response.status){case 404:a["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:a["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:a["a"].info("\u8fde\u63a5\u8d85\u65f6");break}})),t["a"]=m;var v=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t[0],r=d.a.hex(a+"[POST]"+JSON.stringify(t));return h(r,m.post,...t)}}).call(this,n("yLpj"))},"+wk1":function(e,t,n){var a=n("LboF"),r=n("EjGy");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},1:function(e,t){},"1Cgs":function(e,t,n){"use strict";n("ywh3"),n("+J+N")},2:function(e,t){},3:function(e,t){},4:function(e,t){},"6ua7":function(e,t,n){"use strict";n("UzV/");var a=n("vLen"),r=n("q1tI"),o=n.n(r);class i extends r["Component"]{constructor(e){super(e),this._OnEndReached=()=>{this.setState({isEnd:!0}),this.props.onEndReached&&this.props.onEndReached()},this._RenderFooter=()=>{var e=this.props,t=e.dataSource,n=e.nomore;return 0==t.length?o.a.createElement("div",{style:{textAlign:"center"}},"\u6682\u65e0\u6570\u636e"):this.state.isEnd?o.a.createElement("div",{style:{textAlign:"center"}},n?"\u6ca1\u6709\u66f4\u591a\u4e86~":"\u52a0\u8f7d\u66f4\u591a\u4e2d..."):void 0},this.state={isEnd:!1},this.ds=new a["a"].DataSource({getRowData:(e,t)=>e[t],rowHasChanged:(e,t)=>e!==t})}UNSAFE_componentWillMount(){}render(){var e=this.props,t=e.className,n=e.dataSource,r=e.renderRow,i=e.renderHeader,s=n.map((e,t)=>t);return this.ds=this.ds.cloneWithRows(n,s),o.a.createElement(a["a"],{className:t,ref:e=>this.lv=e,dataSource:this.ds,renderHeader:i,renderRow:r,renderFooter:this._RenderFooter,pageSize:4,onScroll:()=>{console.log("scroll")},scrollRenderAheadDistance:500,onEndReached:this._OnEndReached,onEndReachedThreshold:10,style:{flex:1}})}}i.defaultProps={nomore:!1,loading:!1,dataSource:[],renderSeparator:()=>o.a.createElement("div",{className:"line"})},t["a"]=i},"9kvl":function(e,t,n){"use strict";var a,r,o=n("FfOG"),i=n("bCY9"),s=(n("I5X1"),n("o0o1")),c=n.n(s),d=n("HaE+"),u=(n("/xke"),n("TeRw")),l=(n("miYZ"),n("tsqr")),p=n("VTBJ"),g=n("io9h"),f=n("LtsZ");n("TTbB");(function(e){e[e["SILENT"]=0]="SILENT",e[e["WARN_MESSAGE"]=1]="WARN_MESSAGE",e[e["ERROR_MESSAGE"]=2]="ERROR_MESSAGE",e[e["NOTIFICATION"]=4]="NOTIFICATION",e[e["REDIRECT"]=9]="REDIRECT"})(r||(r={}));var m="/exception",h=i["a"].applyPlugins({key:"request",type:f["ApplyPluginsType"].modify,initialValue:{}}),v=(null===(a=h.errorConfig)||void 0===a?void 0:a.adaptor)||(e=>e),b=Object(g["b"])(Object(p["a"])({errorHandler:e=>{var t,n,a,i;if(null===e||void 0===e||null===(t=e.request)||void 0===t||null===(n=t.options)||void 0===n?void 0:n.skipErrorHandler)throw e;if("ResponseError"===e.name&&e.data&&e.request){var s,c={req:e.request,res:e.response};i=v(e.data,c),e.message=(null===(s=i)||void 0===s?void 0:s.errorMessage)||e.message,e.data=e.data,e.info=i}if(i=e.info,i){var d,p,g,f=null===(d=i)||void 0===d?void 0:d.errorMessage,b=null===(p=i)||void 0===p?void 0:p.errorCode,w=(null===(g=h.errorConfig)||void 0===g?void 0:g.errorPage)||m;switch(null===(a=i)||void 0===a?void 0:a.showType){case r.SILENT:break;case r.WARN_MESSAGE:l["a"].warn(f);break;case r.ERROR_MESSAGE:l["a"].error(f);break;case r.NOTIFICATION:u["a"].open({message:f});break;case r.REDIRECT:o["b"].push({pathname:w,query:{errorCode:b,errorMessage:f}});break;default:l["a"].error(f);break}}else l["a"].error(e.message||"Request error, please retry.");throw e}},h));b.use(function(){var e=Object(d["a"])(c.a.mark((function e(t,n){var a,r,o,i,s,d,u,l;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(r=t.req,o=t.res,!(null===(a=r.options)||void 0===a?void 0:a.skipErrorHandler)){e.next=5;break}return e.abrupt("return");case 5:if(i=r.options,s=i.getResponse,d=s?o.data:o,u=v(d,t),!1!==u.success){e.next=15;break}throw l=new Error(u.errorMessage),l.name="BizError",l.data=d,l.info=u,l;case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());var w=h.middlewares||[];w.forEach(e=>{b.use(e)}),n.d(t,"a",(function(){return o["b"]})),n.d(t,"b",(function(){return i["a"]}))},EjGy:function(e,t,n){var a=n("JPst"),r=n("HeW1"),o=n("vrNZ");t=a(!1);var i=r(o);t.push([e.i,'.promote_total {\n  width: 100%;\n  height: 18.6666667vw;\n  background-color: sandybrown;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}[data-rem="true"] .promote_total {\n  height: 1.8666667rem\n}\n.promote_title {\n  width: 100%;\n  display: flex;\n  height: 10.6666667vw;\n}[data-rem="true"] .promote_title {\n  height: 1.0666667rem\n}\n.promote_title span {\n  flex: 1 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.tg_page {\n  background-color: #f4f1ed;\n  padding-bottom: 23.2vw;\n}[data-rem="true"] .tg_page {\n  padding-bottom: 2.32rem\n}\n.tg_page .tg_img {\n  width: 100vw;\n  height: 77.3333333vw;\n  background-color: #fb9532;\n  background-image: url('+i+');\n  background-position: center -2.6666667vw;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}[data-rem="true"] .tg_page .tg_img {\n  width: 10rem;\n  height: 7.7333333rem;\n  background-position: center -0.2666667rem\n}\n.tg_page .tg_bar {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -47.3333333vw;\n  width: 94.6666667vw;\n  height: 20vw;\n  background-color: #ffa207;\n  background-image: linear-gradient(to bottom, #ffda78, #ffa207);\n  border-radius: 2.6666667vw 2.6666667vw 0 0;\n  display: flex;\n  align-items: center;\n}[data-rem="true"] .tg_page .tg_bar {\n  margin-left: -4.7333333rem;\n  width: 9.4666667rem;\n  height: 2rem;\n  border-radius: 0.2666667rem 0.2666667rem 0 0\n}\n.tg_page .tg_bar_tit {\n  font-size: 4.2666667vw;\n  color: #fff;\n  text-shadow: 0 0 1.3333333vw rgba(221, 94, 10, 0.67);\n  text-align: center;\n  width: 100%;\n}[data-rem="true"] .tg_page .tg_bar_tit {\n  font-size: 0.4266667rem;\n  text-shadow: 0 0 0.1333333rem rgba(221, 94, 10, 0.67)\n}\n.tg_page .MyInviteCode {\n  background-color: #fff;\n  padding: 3.2vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}[data-rem="true"] .tg_page .MyInviteCode {\n  padding: 0.32rem\n}\n.tg_page .MyInviteCode .code {\n  font-size: 4.2666667vw;\n  color: #333;\n  font-weight: bold;\n  margin-bottom: 2.6666667vw;\n}[data-rem="true"] .tg_page .MyInviteCode .code {\n  font-size: 0.4266667rem;\n  margin-bottom: 0.2666667rem\n}\n.tg_page .MyInviteCode .Invited {\n  background-color: #ffa200;\n  color: #fff;\n  font-size: 3.7333333vw;\n  padding: 0.8vw 2.1333333vw;\n  border-radius: 3.3333333vw;\n  margin-right: 2.6666667vw;\n}[data-rem="true"] .tg_page .MyInviteCode .Invited {\n  font-size: 0.3733333rem;\n  padding: 0.08rem 0.2133333rem;\n  border-radius: 0.3333333rem;\n  margin-right: 0.2666667rem\n}\n.tg_page .MyInviteCode .nextLevDesc {\n  color: #999;\n  font-size: 3.7333333vw;\n}[data-rem="true"] .tg_page .MyInviteCode .nextLevDesc {\n  font-size: 0.3733333rem\n}\n.tg_page .tg_rule {\n  margin-top: 2.6666667vw;\n  padding: 3.2vw;\n  background-color: #fff;\n  color: #333;\n}[data-rem="true"] .tg_page .tg_rule {\n  margin-top: 0.2666667rem;\n  padding: 0.32rem\n}\n.tg_page .tg_rule .rule_tit {\n  font-size: 4.2666667vw;\n}[data-rem="true"] .tg_page .tg_rule .rule_tit {\n  font-size: 0.4266667rem\n}\n.tg_page .tg_rule .con {\n  font-size: 3.7333333vw;\n  line-height: 6.6666667vw;\n  margin-top: 2.6666667vw;\n}[data-rem="true"] .tg_page .tg_rule .con {\n  font-size: 0.3733333rem;\n  line-height: 0.6666667rem;\n  margin-top: 0.2666667rem\n}\n.tg_page .tg_btn_group {\n  width: 100%;\n  background-color: #fff;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  padding: 4vw;\n  z-index: 1;\n}[data-rem="true"] .tg_page .tg_btn_group {\n  padding: 0.4rem\n}\n.tg_page .tg_btn_group .copyCode {\n  background-color: #5462f0;\n  background-image: linear-gradient(to bottom right, #5462f0, #4ec1ff);\n  box-shadow: 0 1px 1.3333333vw #6ec8e9;\n  border-radius: 6.2666667vw !important;\n  color: #fff !important;\n}[data-rem="true"] .tg_page .tg_btn_group .copyCode {\n  box-shadow: 0 1px 0.1333333rem #6ec8e9;\n  border-radius: 0.6266667rem !important\n}\n@media only screen and (device-width: 100vw) and (device-height: 216.5333333vw) and (-webkit-device-pixel-ratio: 3) {\n  .tg_btn_group {\n    padding-bottom: constant(safe-area-inset-bottom);\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n}\n@media only screen and (device-width: 110.4vw) and (device-height: 238.9333333vw) and (-webkit-device-pixel-ratio: 2) {\n  .tg_btn_group {\n    padding-bottom: constant(safe-area-inset-bottom);\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n}\n@media only screen and (device-width: 110.4vw) and (device-height: 238.9333333vw) and (-webkit-device-pixel-ratio: 3) {\n  .tg_btn_group {\n    padding-bottom: constant(safe-area-inset-bottom);\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n}\n',""]),e.exports=t},HeW1:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e["default"]:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},Nlzp:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"r",(function(){return o})),n.d(t,"u",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"v",(function(){return d})),n.d(t,"C",(function(){return u})),n.d(t,"B",(function(){return l})),n.d(t,"s",(function(){return p})),n.d(t,"w",(function(){return g})),n.d(t,"a",(function(){return f})),n.d(t,"j",(function(){return m})),n.d(t,"o",(function(){return h})),n.d(t,"q",(function(){return v})),n.d(t,"D",(function(){return b})),n.d(t,"p",(function(){return w})),n.d(t,"k",(function(){return y})),n.d(t,"f",(function(){return _})),n.d(t,"z",(function(){return E})),n.d(t,"A",(function(){return k})),n.d(t,"i",(function(){return O})),n.d(t,"h",(function(){return C})),n.d(t,"m",(function(){return I})),n.d(t,"b",(function(){return S})),n.d(t,"t",(function(){return x})),n.d(t,"l",(function(){return T})),n.d(t,"n",(function(){return N})),n.d(t,"x",(function(){return R})),n.d(t,"y",(function(){return j})),n.d(t,"e",(function(){return A}));var a=n("+cRp"),r=e=>a["a"].post("api/user/getVerifyCode",e),o=e=>a["a"].post("api/user/login",e,{loading:!0}),i=e=>a["a"].post("api/user/register",e,{loading:!0}),s=e=>a["a"].post("api/user/SendCode",e),c=e=>a["a"].post("api/user/forgetPass",e,{loading:!0}),d=e=>a["a"].post("api/user/resetPass",e,{loading:!0}),u=e=>a["a"].post("api/user/getRights",e),l=e=>a["a"].post("api/user/getUserInfo",e),p=e=>a["a"].post("api/site/notice",e),g=e=>a["a"].post("api/site/moduleCfg",e),f=e=>a["a"].post("api/video/Home",e),m=e=>a["a"].post("api/video/getList",e),h=e=>a["a"].post("api/video/getVideoInfo",e),v=e=>a["a"].post("api/video/getVideoRelation",e),b=e=>a["a"].post("api/video/watchingVideo",e),w=e=>a["a"].post("api/video/getVideoRank",e),y=e=>a["a"].post("api/video/getMoiveHis",e),_=e=>a["a"].post("api/video/discoveryPage",e),E=e=>a["a"].post("api/video/thematicList",e),k=e=>a["a"].post("api/video/thematicVideo",e),O=e=>a["a"].post("api/video/getGirlList",e),C=e=>a["a"].post("api/video/getGirlInfo",e),I=e=>a["a"].post("api/video/getSearchRank",e),S=e=>a["a"].post("api/recharge/PayConfig",e),x=e=>a["a"].post("api/recharge/pay",e,{loading:!0}),T=e=>a["a"].post("api/user/getOrder",e,{loading:!0}),N=e=>a["a"].post("api/user/getSpread",e),R=e=>a["a"].post("api/user/spreadInfo",e),j=e=>Object(a["b"])("api/site/spreadRules",e),A=e=>a["a"].post("api/fiction/getList",e)},ShuE:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l}));var a=n("ODXe"),r=n("Qyje"),o=n.n(r),i=n("vDqi"),s=n.n(i),c=new Map,d=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{c.has(t)||c.set(t,e)})},u=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(c.has(t)){var n=c.get(t);n(t),c.delete(t)}},l=()=>{var e=!0,t=!1,n=void 0;try{for(var r,o=c[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value,s=Object(a["a"])(i,2),d=s[0],u=s[1];u(d)}}catch(l){t=!0,n=l}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}c.clear()}},iE7w:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),o=n("HaE+"),i=n("q1tI"),s=n.n(i),c=n("/MKj"),d=n("Nlzp"),u=n("rY4l"),l=n("6ua7");n("+wk1");class p extends i["Component"]{constructor(e){var t;super(e),t=this,this.getDateByFilter=function(){var e=Object(o["a"])(r.a.mark((function e(n){var a,o,i,s;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.props.match.params,o=a.title,i=a.typeId,e.next=3,Object(d["n"])({pageNum:n,pageSize:20,playType:o,typeId:i});case 3:s=e.sent,s&&(t._data=t._data.concat(s.data.pageData),t.setState({dataSource:t._data,totalpage:Math.ceil(s.data.total/20),pageNum:n+1}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.onEndReached=e=>{var t=this.state,n=t.pageNum,a=t.totalpage;n<=a?(console.log(333,"\u7ee7\u7eed\u8bf7\u6c42\u6570\u636e",n,a),this.getDateByFilter(n)):(console.log(333,"\u6ca1\u6709\u6570\u636e\u4e86",n,a),this.setState({nomore:!0}))},this.GoTo=e=>()=>{this.props.history.push(e)},this.row=(e,t,n)=>{var a=e[n];return s.a.createElement("p",{className:"promote_title"},s.a.createElement("span",null,a.nickName),s.a.createElement("span",null,a.phone),s.a.createElement("span",null,a.regTime))},this.state={dataSource:[],nomore:!1,pageNum:1,totalpage:1},this._data=[]}UNSAFE_componentWillMount(){this.getDateByFilter(1)}render(){var e=this.state,t=e.dataSource,n=e.nomore;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u["a"],{title:"\u6211\u7684\u63a8\u5e7f"}),s.a.createElement("div",{className:"promote_total"},s.a.createElement("span",null,"\u63a8\u5e7f\u603b\u4eba\u6570",t._cachedRowCount)),s.a.createElement("div",{className:"promote_title"},s.a.createElement("span",null,"\u53d7\u9080\u7528\u6237\u6635\u79f0"),s.a.createElement("span",null,"\u624b\u673a\u53f7"),s.a.createElement("span",null,"\u6ce8\u518c\u65f6\u95f4")),s.a.createElement(l["a"],{className:"promoteList",dataSource:t,renderRow:this.row,onEndReached:this.onEndReached,nomore:n}))}}function g(e){return{phone:e.user.phone||null}}t["default"]=Object(c["b"])(g)(p)},okyr:function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,'.am-navbar {\n  display: flex;\n  align-items: center;\n  height: 12vw;\n  background-color: #108ee9;\n  color: #fff;\n}[data-rem="true"] .am-navbar {\n  height: 1.2rem\n}\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  flex: 1 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.am-navbar-left {\n  padding-left: 4vw;\n  font-size: 4.2666667vw;\n}[data-rem="true"] .am-navbar-left {\n  padding-left: 0.4rem;\n  font-size: 0.4266667rem\n}\n.am-navbar-left-icon {\n  margin-right: 1.3333333vw;\n  display: inherit;\n}[data-rem="true"] .am-navbar-left-icon {\n  margin-right: 0.1333333rem\n}\n.am-navbar-title {\n  justify-content: center;\n  font-size: 4.8vw;\n  white-space: nowrap;\n}[data-rem="true"] .am-navbar-title {\n  font-size: 0.48rem\n}\n.am-navbar-right {\n  justify-content: flex-end;\n  font-size: 4.2666667vw;\n  margin-right: 4vw;\n}[data-rem="true"] .am-navbar-right {\n  font-size: 0.4266667rem;\n  margin-right: 0.4rem\n}\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9;\n}\n.am-navbar-light .am-navbar-title {\n  color: #000;\n}\n',""]),e.exports=t},p58V:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return d})),n.d(t,"userInfo",(function(){return g})),n.d(t,"registerYB",(function(){return f})),n.d(t,"reducer",(function(){return y}));var a=n("VTBJ"),r=n("o0o1"),o=n.n(r),i=n("HaE+"),s=n("zyFE"),c=n("Nlzp"),d={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},u=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),l=u.Types,p=u.Creators;function g(e){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["B"])();case 2:a=e.sent,a&&t(p.UpdateUserInfo(a.data));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function f(){return function(){var e=Object(i["a"])(o.a.mark((function e(t,n){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}t["default"]=p;var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",t.payload,t.phone),Object.assign({},e,Object(a["a"])({loginInProgress:!1,loggedIn:!0,phone:t.phone},t.payload))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:t.payload})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return t.token&&(t.token.accessToken=null),t},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:t.payload})},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},y=Object(s["createReducer"])(d,{[l.LOGGED_IN]:m,[l.LOGGED_OUT]:w,[l.UPDATE_TOKEN]:h,[l.UPDATE_USER_INFO]:b,[l.CLEAR_ACCESS_TOKEN]:v})},rY4l:function(e,t,n){"use strict";n("1Cgs");var a=n("zvbH"),r=(n("D2jH"),n("2ROE")),o=n("q1tI"),i=n.n(o),s=n("9kvl");class c extends o["Component"]{constructor(e){super(e),this.GoBack=()=>{s["a"].goBack()},this.state={}}render(){var e=this.props,t=e.hidLift,n=e.rightContent,o=e.title,s=e.noclass,c=e.bottomColor;return s?i.a.createElement(a["a"],{icon:t?null:i.a.createElement(r["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o):i.a.createElement("div",{className:"public_header"},i.a.createElement(a["a"],{icon:t?null:i.a.createElement(r["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:n},o),i.a.createElement("div",{className:"public_radius",style:{backgroundColor:c}}))}}t["a"]=c},vrNZ:function(e,t,n){e.exports=n.p+"static/tg_img.2a2da604.jpg"},vwip:function(e,t,n){"use strict";t["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,t,n){localStorage.removeItem(e);var a=(new Date).getTime(),r=n||this.age,o={};return o._value=t,o._time=a,o._age=a+r,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var t=!0,n=localStorage.getItem(e),a=(new Date).getTime();return n&&(n=JSON.parse(n),t=a>n._age),t},get:function(e){var t=this.isExpire(e),n=null;return t?(localStorage.removeItem(e),n):(n=localStorage.getItem(e),n=JSON.parse(n),n._value)}}},zvbH:function(e,t,n){"use strict";var a=n("QbLZ"),r=n.n(a),o=n("iCc5"),i=n.n(o),s=n("V7oC"),c=n.n(s),d=n("FYw3"),u=n.n(d),l=n("mRg0"),p=n.n(l),g=n("TSYQ"),f=n.n(g),m=n("q1tI"),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},v=function(e){function t(){return i()(this,t),u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.children,o=e.mode,i=e.icon,s=e.onLeftClick,c=e.leftContent,d=e.rightContent,u=h(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return m["createElement"]("div",r()({},u,{className:f()(n,t,t+"-"+o)}),m["createElement"]("div",{className:t+"-left",role:"button",onClick:s},i?m["createElement"]("span",{className:t+"-left-icon","aria-hidden":"true"},i):null,c),m["createElement"]("div",{className:t+"-title"},a),m["createElement"]("div",{className:t+"-right"},d))}}]),t}(m["Component"]);t["a"]=v,v.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}}}}]);