(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"+J+N":function(e,n,t){var r=t("LboF"),a=t("okyr");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},"+cRp":function(e,n,t){"use strict";(function(e){t.d(n,"b",(function(){return v}));t("HVTF");var r=t("OT5E"),a=t("vDqi"),o=t.n(a),i=t("9kvl"),s=t("ShuE"),l=t("gjeX"),c=t.n(l),u=t("p58V"),d=t("vwip");function p(e,n,t){var r="",a=n,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(a=Math.round(Math.random()*(t-n))+n);for(var i=0;i<a;i++)r+=o[Math.round(Math.random()*(o.length-1))];return r}var m="https://api.xkb01.com:9091/",f=o.a.create({baseURL:m,timeout:6e4});f.interceptors.request.use((function(n){n.loading&&r["a"].loading("\u52a0\u8f7d\u4e2d..."),Object(s["c"])(n),Object(s["a"])(n),n.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var t=e.store.getState().user.token;t&&(n.headers["userId"]=t.userId,t.accessToken&&(n.headers["token"]=t.accessToken));var a=n.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(a).map((function(e){return e+"="+a[e]})),l=(i=i.concat(["qid="+p(!1,16),"terminal=h5"]).sort()).join("&"),u="sign="+c()(l+o);return n.data=l+"&"+u,n}),(function(e){return e}));var g=CryptoJS.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),h=CryptoJS.enc.Latin1.parse("jfdkwqew!#S#$%78");function b(e,n){var t=d["a"].get(e);if(!t||200!==t.code||Array.isArray(t.data)&&0===t.data.length){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n(...a).then(n=>(d["a"].set(e,n,864e5),n)).catch((function(e){return e}))}return t}f.interceptors.response.use((function(n){r["a"].hide(),Object(s["c"])(n);var t=JSON.parse(CryptoJS.AES.decrypt(n.data,g,{iv:h,mode:CryptoJS.mode.CBC,adding:CryptoJS.pad.ZeroPadding}).toString(CryptoJS.enc.Utf8).replace(/\0/g,"")),a=e.store,o=a.dispatch,l=a.getState;if(200==t.code)return t;if(-1==t.code)r["a"].info(t.data);else if(-98==t.code)r["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),o(u["default"].UpdateToken(null)),o(u["default"].UpdateUserInfo(null)),i["a"].push("/login");else if(-99==t.code){o(u["default"].ClearAccessToken());var c=l().user.token;c&&f.post("api/user/applyToken",{refershToken:c.refershToken}).then(e=>{e&&(c.accessToken=e.data.accessToken,c.refershToken=e.data.refershToken,o(u["default"].UpdateToken(c)),i["a"].replace({pathname:i["a"].location.pathname}))})}}),(function(e){if(r["a"].hide(),e.response)switch(e.response.status){case 404:r["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:r["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:r["a"].info("\u8fde\u63a5\u8d85\u65f6");break}})),n["a"]=f;var v=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n[0],a=c.a.hex(r+"[POST]"+JSON.stringify(n));return b(a,f.post,...n)}}).call(this,t("yLpj"))},"1Cgs":function(e,n,t){"use strict";t("ywh3"),t("+J+N")},"9kvl":function(e,n,t){"use strict";var r,a,o=t("FfOG"),i=t("bCY9"),s=(t("I5X1"),t("o0o1")),l=t.n(s),c=t("HaE+"),u=(t("/xke"),t("TeRw")),d=(t("miYZ"),t("tsqr")),p=t("VTBJ"),m=t("io9h"),f=t("LtsZ");t("TTbB");(function(e){e[e["SILENT"]=0]="SILENT",e[e["WARN_MESSAGE"]=1]="WARN_MESSAGE",e[e["ERROR_MESSAGE"]=2]="ERROR_MESSAGE",e[e["NOTIFICATION"]=4]="NOTIFICATION",e[e["REDIRECT"]=9]="REDIRECT"})(a||(a={}));var g="/exception",h=i["a"].applyPlugins({key:"request",type:f["ApplyPluginsType"].modify,initialValue:{}}),b=(null===(r=h.errorConfig)||void 0===r?void 0:r.adaptor)||(e=>e),v=Object(m["b"])(Object(p["a"])({errorHandler:e=>{var n,t,r,i;if(null===e||void 0===e||null===(n=e.request)||void 0===n||null===(t=n.options)||void 0===t?void 0:t.skipErrorHandler)throw e;if("ResponseError"===e.name&&e.data&&e.request){var s,l={req:e.request,res:e.response};i=b(e.data,l),e.message=(null===(s=i)||void 0===s?void 0:s.errorMessage)||e.message,e.data=e.data,e.info=i}if(i=e.info,i){var c,p,m,f=null===(c=i)||void 0===c?void 0:c.errorMessage,v=null===(p=i)||void 0===p?void 0:p.errorCode,y=(null===(m=h.errorConfig)||void 0===m?void 0:m.errorPage)||g;switch(null===(r=i)||void 0===r?void 0:r.showType){case a.SILENT:break;case a.WARN_MESSAGE:d["a"].warn(f);break;case a.ERROR_MESSAGE:d["a"].error(f);break;case a.NOTIFICATION:u["a"].open({message:f});break;case a.REDIRECT:o["b"].push({pathname:y,query:{errorCode:v,errorMessage:f}});break;default:d["a"].error(f);break}}else d["a"].error(e.message||"Request error, please retry.");throw e}},h));v.use(function(){var e=Object(c["a"])(l.a.mark((function e(n,t){var r,a,o,i,s,c,u,d;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(a=n.req,o=n.res,!(null===(r=a.options)||void 0===r?void 0:r.skipErrorHandler)){e.next=5;break}return e.abrupt("return");case 5:if(i=a.options,s=i.getResponse,c=s?o.data:o,u=b(c,n),!1!==u.success){e.next=15;break}throw d=new Error(u.errorMessage),d.name="BizError",d.data=c,d.info=u,d;case 15:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}());var y=h.middlewares||[];y.forEach(e=>{v.use(e)}),t.d(n,"a",(function(){return o["b"]})),t.d(n,"b",(function(){return i["a"]}))},AWFx:function(e,n,t){var r=t("JPst");n=r(!1),n.push([e.i,'.recharge {\n  padding: 0 2.5%;\n}\n.recharge .vipList {\n  display: flex;\n  flex-wrap: wrap;\n}\n.recharge .v {\n  flex: 1 1;\n  text-align: center;\n  margin: 5.3333333vw 2.6666667vw 0;\n  border: 1px solid #999;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .recharge .v {\n  margin: 0.5333333rem 0.2666667rem 0;\n  border: 1px solid #999;\n  border-radius: 0.1333333rem\n}\n.recharge .v .open {\n  width: 100%;\n  height: 8vw;\n  background-color: peru;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}[data-rem="true"] .recharge .v .open {\n  height: 0.8rem\n}\n.recharge .payType {\n  margin-top: 2.6666667vw;\n  display: flex;\n  flex-wrap: wrap;\n}[data-rem="true"] .recharge .payType {\n  margin-top: 0.2666667rem\n}\n.recharge .payway {\n  width: 26.6666667vw;\n  height: 10.6666667vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid;\n  border-color: #ccc;\n  border-radius: 1.3333333vw;\n  margin: 0 2.6666667vw;\n}[data-rem="true"] .recharge .payway {\n  width: 2.6666667rem;\n  height: 1.0666667rem;\n  border: 1px solid;\n  border-radius: 0.1333333rem;\n  margin: 0 0.2666667rem\n}\n.recharge .payway.act {\n  background-color: orange;\n  border-color: orange;\n  color: #fff;\n}\n.recharge .mt20 {\n  margin-top: 5.3333333vw;\n}[data-rem="true"] .recharge .mt20 {\n  margin-top: 0.5333333rem\n}\n.orderList {\n  margin: 0 2.5%;\n}\n.orderList .list {\n  display: flex;\n  border-bottom: 1px solid #ccc;\n  padding: 2.6666667vw;\n}[data-rem="true"] .orderList .list {\n  border-bottom: 1px solid #ccc;\n  padding: 0.2666667rem\n}\n.orderList .list:last-child {\n  border: 0;\n}\n.orderList .right {\n  flex: 1 1;\n}\n.orderList .right p {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n',""]),e.exports=n},BSlI:function(e,n,t){var r=t("JPst");n=r(!1),n.push([e.i,'.am-button {\n  display: block;\n  outline: 0 none;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  padding: 0;\n  text-align: center;\n  font-size: 4.8vw;\n  height: 12.5333333vw;\n  line-height: 12.5333333vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-word;\n  white-space: nowrap;\n  color: #000;\n  background-color: #fff;\n  border: 1PX solid #ddd;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button {\n  font-size: 0.48rem;\n  height: 1.2533333rem;\n  line-height: 1.2533333rem;\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #ddd;\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-borderfix:before {\n  transform: scale(0.49) !important;\n}\n.am-button.am-button-active {\n  background-color: #ddd;\n}\n.am-button.am-button-disabled {\n  color: rgba(0, 0, 0, 0.3);\n  opacity: 0.6;\n}\n.am-button-primary {\n  color: #fff;\n  background-color: #108ee9;\n  border: 1PX solid #108ee9;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button-primary {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-primary {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-primary::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #108ee9;\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-primary::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-primary.am-button-active {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #0e80d2;\n}\n.am-button-primary.am-button-disabled {\n  color: rgba(255, 255, 255, 0.6);\n  opacity: 0.4;\n}\n.am-button-ghost {\n  color: #108ee9;\n  background-color: transparent;\n  border: 1PX solid #108ee9;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button-ghost {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #108ee9;\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-ghost::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-ghost.am-button-active {\n  color: rgba(16, 142, 233, 0.6);\n  background-color: transparent;\n  border: 1PX solid rgba(16, 142, 233, 0.6);\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button-ghost.am-button-active {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost.am-button-active {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost.am-button-active::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid rgba(16, 142, 233, 0.6);\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-ghost.am-button-active::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-ghost.am-button-disabled {\n  color: rgba(0, 0, 0, 0.1);\n  border: 1PX solid rgba(0, 0, 0, 0.1);\n  border-radius: 1.3333333vw;\n  opacity: 1;\n}[data-rem="true"] .am-button-ghost.am-button-disabled {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost.am-button-disabled {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost.am-button-disabled::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid rgba(0, 0, 0, 0.1);\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-ghost.am-button-disabled::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-warning {\n  color: #fff;\n  background-color: #e94f4f;\n}\n.am-button-warning.am-button-active {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #d24747;\n}\n.am-button-warning.am-button-disabled {\n  color: rgba(255, 255, 255, 0.6);\n  opacity: 0.4;\n}\n.am-button-inline {\n  display: inline-block;\n  padding: 0 4vw;\n}[data-rem="true"] .am-button-inline {\n  padding: 0 0.4rem\n}\n.am-button-inline.am-button-icon {\n  display: inline-flex;\n}\n.am-button-small {\n  font-size: 3.4666667vw;\n  height: 8vw;\n  line-height: 8vw;\n  padding: 0 4vw;\n}[data-rem="true"] .am-button-small {\n  font-size: 0.3466667rem;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  padding: 0 0.4rem\n}\n.am-button-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.am-button > .am-button-icon {\n  margin-right: 0.5em;\n}\n',""]),e.exports=n},NHyu:function(e,n,t){"use strict";var r=t("QbLZ"),a=t.n(r),o=t("YEIV"),i=t.n(o),s=t("iCc5"),l=t.n(s),c=t("V7oC"),u=t.n(c),d=t("FYw3"),p=t.n(d),m=t("mRg0"),f=t.n(m),g=t("TSYQ"),h=t.n(g),b=t("q1tI"),v=t("uJlo"),y=t("2ROE"),w=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&(t[r[a]]=e[r[a]])}return t},E=/^[\u4e00-\u9fa5]{2}$/,k=E.test.bind(E);function C(e){return"string"===typeof e}function x(e){return C(e.type)&&k(e.props.children)?b["cloneElement"](e,{},e.props.children.split("").join(" ")):C(e)?(k(e)&&(e=e.split("").join(" ")),b["createElement"]("span",null,e)):e}var T=function(e){function n(){return l()(this,n),p()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f()(n,e),u()(n,[{key:"render",value:function(){var e,n=this.props,t=n.children,r=n.className,o=n.prefixCls,s=n.type,l=n.size,c=n.inline,u=n.disabled,d=n.icon,p=n.loading,m=n.activeStyle,f=n.activeClassName,g=n.onClick,E=w(n,["children","className","prefixCls","type","size","inline","disabled","icon","loading","activeStyle","activeClassName","onClick"]),k=p?"loading":d,C=h()(o,r,(e={},i()(e,o+"-primary","primary"===s),i()(e,o+"-ghost","ghost"===s),i()(e,o+"-warning","warning"===s),i()(e,o+"-small","small"===l),i()(e,o+"-inline",c),i()(e,o+"-disabled",u),i()(e,o+"-loading",p),i()(e,o+"-icon",!!k),e)),T=b["Children"].map(t,x),O=void 0;if("string"===typeof k)O=b["createElement"](y["a"],{"aria-hidden":"true",type:k,size:"small"===l?"xxs":"md",className:o+"-icon"});else if(k){var S=k.props&&k.props.className,I=h()("am-icon",o+"-icon","small"===l?"am-icon-xxs":"am-icon-md");O=b["cloneElement"](k,{className:S?S+" "+I:I})}return b["createElement"](v["a"],{activeClassName:f||(m?o+"-active":void 0),disabled:u,activeStyle:m},b["createElement"]("a",a()({role:"button",className:C},E,{onClick:u?void 0:g,"aria-disabled":u}),O,T))}}]),n}(b["Component"]);T.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,activeStyle:{}},n["a"]=T},Nlzp:function(e,n,t){"use strict";t.d(n,"d",(function(){return a})),t.d(n,"q",(function(){return o})),t.d(n,"t",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"f",(function(){return l})),t.d(n,"u",(function(){return c})),t.d(n,"B",(function(){return u})),t.d(n,"A",(function(){return d})),t.d(n,"r",(function(){return p})),t.d(n,"v",(function(){return m})),t.d(n,"a",(function(){return f})),t.d(n,"i",(function(){return g})),t.d(n,"n",(function(){return h})),t.d(n,"p",(function(){return b})),t.d(n,"C",(function(){return v})),t.d(n,"o",(function(){return y})),t.d(n,"j",(function(){return w})),t.d(n,"e",(function(){return E})),t.d(n,"y",(function(){return k})),t.d(n,"z",(function(){return C})),t.d(n,"h",(function(){return x})),t.d(n,"g",(function(){return T})),t.d(n,"l",(function(){return O})),t.d(n,"b",(function(){return S})),t.d(n,"s",(function(){return I})),t.d(n,"k",(function(){return N})),t.d(n,"m",(function(){return j})),t.d(n,"w",(function(){return L})),t.d(n,"x",(function(){return P}));var r=t("+cRp"),a=e=>r["a"].post("api/user/getVerifyCode",e),o=e=>r["a"].post("api/user/login",e,{loading:!0}),i=e=>r["a"].post("api/user/register",e,{loading:!0}),s=e=>r["a"].post("api/user/SendCode",e),l=e=>r["a"].post("api/user/forgetPass",e,{loading:!0}),c=e=>r["a"].post("api/user/resetPass",e,{loading:!0}),u=e=>r["a"].post("api/user/getRights",e),d=e=>r["a"].post("api/user/getUserInfo",e),p=e=>r["a"].post("api/site/notice",e),m=e=>r["a"].post("api/site/moduleCfg",e),f=e=>r["a"].post("api/video/Home",e),g=e=>r["a"].post("api/video/getList",e),h=e=>r["a"].post("api/video/getVideoInfo",e),b=e=>r["a"].post("api/video/getVideoRelation",e),v=e=>r["a"].post("api/video/watchingVideo",e),y=e=>r["a"].post("api/video/getVideoRank",e),w=e=>r["a"].post("api/video/getMoiveHis",e),E=e=>r["a"].post("api/video/discoveryPage",e),k=e=>r["a"].post("api/video/thematicList",e),C=e=>r["a"].post("api/video/thematicVideo",e),x=e=>r["a"].post("api/video/getGirlList",e),T=e=>r["a"].post("api/video/getGirlInfo",e),O=e=>r["a"].post("api/video/getSearchRank",e),S=e=>r["a"].post("api/recharge/PayConfig",e),I=e=>r["a"].post("api/recharge/pay",e,{loading:!0}),N=e=>r["a"].post("api/user/getOrder",e,{loading:!0}),j=e=>r["a"].post("api/user/getSpread",e),L=e=>r["a"].post("api/user/spreadInfo",e),P=e=>Object(r["b"])("api/site/spreadRules",e)},ShuE:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t("ODXe"),a=t("Qyje"),o=t.n(a),i=t("vDqi"),s=t.n(i),l=new Map,c=e=>{var n=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{l.has(n)||l.set(n,e)})},u=e=>{var n=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(l.has(n)){var t=l.get(n);t(n),l.delete(n)}},d=()=>{var e=!0,n=!1,t=void 0;try{for(var a,o=l[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var i=a.value,s=Object(r["a"])(i,2),c=s[0],u=s[1];u(c)}}catch(d){n=!0,t=d}finally{try{e||null==o.return||o.return()}finally{if(n)throw t}}l.clear()}},TDMj:function(e,n,t){"use strict";t.r(n);t("XGli");var r=t("NHyu"),a=(t("D2jH"),t("2ROE")),o=t("o0o1"),i=t.n(o),s=(t("HVTF"),t("OT5E")),l=t("HaE+"),c=t("q1tI"),u=t.n(c),d=t("/MKj"),p=t("Nlzp"),m=t("p58V"),f=t("rY4l");t("u/Y3");class g extends c["Component"]{constructor(e){var n;super(e),n=this,this.GoTo=e=>()=>{this.props.history.push(e)},this.chooseVip=e=>()=>{this.setState({vipConfigId:e.vipConfigId,vipName:e.vipDesc})},this.chooseWay=e=>()=>{this.setState({payConfigId:e})},this.submit=Object(l["a"])(i.a.mark((function e(){var t,r,a,o,l;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=n.state,r=t.vipConfigId,a=t.payConfigId,r){e.next=3;break}return e.abrupt("return",s["a"].info("\u8bf7\u9009\u62e9\u4f1a\u5458\u5361"));case 3:if(a){e.next=5;break}return e.abrupt("return",s["a"].info("\u8bf7\u9009\u62e9\u5145\u503c\u65b9\u5f0f"));case 5:return o=window.open("_blank"),e.next=8,Object(p["s"])({vipConfigId:r,payConfigId:a});case 8:l=e.sent,l&&(o.location=l.data,n.setState({page:2}));case 10:case"end":return e.stop()}}),e)}))),this.update=()=>{this.props.dispatch(Object(m["userInfo"])()),this.props.history.push("/user")},this.state={amountList:[],payChannel:[],vipConfigId:null,payConfigId:null,vipName:null,page:1}}UNSAFE_componentWillMount(){Object(p["b"])().then(e=>{e&&this.setState(e.data)})}render(){var e=this.state,n=e.amountList,t=e.payChannel,o=e.vipConfigId,i=e.payConfigId;return u.a.createElement(u.a.Fragment,null,u.a.createElement(f["a"],{title:"\u81f3\u5c0a\u9ed1\u91d1\u4f1a\u5458",rightContent:u.a.createElement("div",{onClick:this.GoTo("/czRecord")},"\u5145\u503c\u8bb0\u5f55")}),1==this.state.page?u.a.createElement("div",{className:"cvs recharge"},u.a.createElement("div",{className:"aboutvip"},u.a.createElement("p",null,"\u81f3\u5c0a\u9ed1\u91d1"),u.a.createElement("p",null,"\u5c0a\u4eab\u89c2\u5f71\u7279\u6743\u5c3d\u5728\u5c0f\u9ec4\u4e66VIP"),u.a.createElement("p",null,"\u6bcf\u6708\u4f4e\u81f3:66.00 \u539f\u4ef788.00/\u6708")),u.a.createElement("ul",{className:"vipList"},n.map(e=>u.a.createElement("li",{key:e.vipConfigId,className:"v"+(o==e.vipConfigId?" act":""),onClick:this.chooseVip(e)},u.a.createElement("p",null,e.vipDesc),u.a.createElement("p",null,e.finalPrice),u.a.createElement("s",null,e.originalPrice),o==e.vipConfigId?u.a.createElement("div",{className:"open"},u.a.createElement(a["a"],{type:"check-circle"})):u.a.createElement("div",{className:"open"},"\u5f00\u901a")))),u.a.createElement("ul",{className:"payType"},t.map(e=>u.a.createElement("li",{key:e.payId,className:"payway"+(i==e.payConfigId?" act":""),onClick:this.chooseWay(e.payConfigId)},u.a.createElement("p",null,e.payName)))),u.a.createElement(r["a"],{type:"ghost",size:"small",inline:!0,className:"mt20"},"\u5ba2\u670d\u54a8\u8be2"),u.a.createElement(r["a"],{onClick:this.submit,className:"mt20",disabled:!o||!i},"\u786e\u8ba4")):u.a.createElement("div",{className:"cvs recharge"},u.a.createElement("p",null,"\u5145\u503c\u8ba2\u5355\u786e\u8ba4\u4e2d..."),u.a.createElement("p",null,"\u60a8\u5f00\u901a\u7684\u4f1a\u5458\u671f\u9650\u4e3a",this.state.vipName),u.a.createElement(r["a"],{type:"ghost",size:"small",inline:!0,className:"mt20",onClick:this.update},"\u5237\u65b0")))}}function h(e){return{phone:e.user.phone||null}}n["default"]=Object(d["b"])(h)(g)},TJML:function(e,n,t){var r=t("LboF"),a=t("BSlI");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},XGli:function(e,n,t){"use strict";t("ywh3"),t("D2jH"),t("TJML")},okyr:function(e,n,t){var r=t("JPst");n=r(!1),n.push([e.i,'.am-navbar {\n  display: flex;\n  align-items: center;\n  height: 12vw;\n  background-color: #108ee9;\n  color: #fff;\n}[data-rem="true"] .am-navbar {\n  height: 1.2rem\n}\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  flex: 1 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.am-navbar-left {\n  padding-left: 4vw;\n  font-size: 4.2666667vw;\n}[data-rem="true"] .am-navbar-left {\n  padding-left: 0.4rem;\n  font-size: 0.4266667rem\n}\n.am-navbar-left-icon {\n  margin-right: 1.3333333vw;\n  display: inherit;\n}[data-rem="true"] .am-navbar-left-icon {\n  margin-right: 0.1333333rem\n}\n.am-navbar-title {\n  justify-content: center;\n  font-size: 4.8vw;\n  white-space: nowrap;\n}[data-rem="true"] .am-navbar-title {\n  font-size: 0.48rem\n}\n.am-navbar-right {\n  justify-content: flex-end;\n  font-size: 4.2666667vw;\n  margin-right: 4vw;\n}[data-rem="true"] .am-navbar-right {\n  font-size: 0.4266667rem;\n  margin-right: 0.4rem\n}\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9;\n}\n.am-navbar-light .am-navbar-title {\n  color: #000;\n}\n',""]),e.exports=n},p58V:function(e,n,t){"use strict";t.r(n),t.d(n,"INITIAL_STATE",(function(){return c})),t.d(n,"userInfo",(function(){return m})),t.d(n,"registerYB",(function(){return f})),t.d(n,"reducer",(function(){return w}));var r=t("VTBJ"),a=t("o0o1"),o=t.n(a),i=t("HaE+"),s=t("zyFE"),l=t("Nlzp"),c={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},u=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),d=u.Types,p=u.Creators;function m(e){return function(){var e=Object(i["a"])(o.a.mark((function e(n,t){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["A"])();case 2:r=e.sent,r&&p.UpdateUserInfo(r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}function f(){return function(){var e=Object(i["a"])(o.a.mark((function e(n,t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}n["default"]=p;var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",n.payload,n.phone),Object.assign({},e,Object(r["a"])({loginInProgress:!1,loggedIn:!0,phone:n.phone},n.payload))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:n.payload})},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return n.token&&(n.token.accessToken=null),n},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:n.payload})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},w=Object(s["createReducer"])(c,{[d.LOGGED_IN]:g,[d.LOGGED_OUT]:y,[d.UPDATE_TOKEN]:h,[d.UPDATE_USER_INFO]:v,[d.CLEAR_ACCESS_TOKEN]:b})},rY4l:function(e,n,t){"use strict";t("1Cgs");var r=t("zvbH"),a=(t("D2jH"),t("2ROE")),o=t("q1tI"),i=t.n(o),s=t("9kvl");class l extends o["Component"]{constructor(e){super(e),this.GoBack=()=>{s["a"].goBack()},this.state={}}render(){var e=this.props,n=e.hidLift,t=e.rightContent,o=e.title;return i.a.createElement(r["a"],{mode:"light",icon:n?null:i.a.createElement(a["a"],{type:"left",onClick:this.GoBack}),rightContent:t},o)}}n["a"]=l},"u/Y3":function(e,n,t){var r=t("LboF"),a=t("AWFx");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},uJlo:function(e,n,t){"use strict";var r=t("QbLZ"),a=t.n(r),o=t("iCc5"),i=t.n(o),s=t("V7oC"),l=t.n(s),c=t("FYw3"),u=t.n(c),d=t("mRg0"),p=t.n(d),m=t("q1tI"),f=t.n(m),g=t("TSYQ"),h=t.n(g),b=function(e){function n(){i()(this,n);var e=u()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.state={active:!1},e.onTouchStart=function(n){e.triggerEvent("TouchStart",!0,n)},e.onTouchMove=function(n){e.triggerEvent("TouchMove",!1,n)},e.onTouchEnd=function(n){e.triggerEvent("TouchEnd",!1,n)},e.onTouchCancel=function(n){e.triggerEvent("TouchCancel",!1,n)},e.onMouseDown=function(n){e.triggerEvent("MouseDown",!0,n)},e.onMouseUp=function(n){e.triggerEvent("MouseUp",!1,n)},e.onMouseLeave=function(n){e.triggerEvent("MouseLeave",!1,n)},e}return p()(n,e),l()(n,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(e,n,t){var r="on"+e,a=this.props.children;a.props[r]&&a.props[r](t),n!==this.state.active&&this.setState({active:n})}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.disabled,r=e.activeClassName,o=e.activeStyle,i=t?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},s=f.a.Children.only(n);if(!t&&this.state.active){var l=s.props,c=l.style,u=l.className;return!1!==o&&(o&&(c=a()({},c,o)),u=h()(u,r)),f.a.cloneElement(s,a()({className:u,style:c},i))}return f.a.cloneElement(s,i)}}]),n}(f.a.Component),v=b;b.defaultProps={disabled:!1},t.d(n,"a",(function(){return v}))},vwip:function(e,n,t){"use strict";n["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,n,t){localStorage.removeItem(e);var r=(new Date).getTime(),a=t||this.age,o={};return o._value=n,o._time=r,o._age=r+a,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var n=!0,t=localStorage.getItem(e),r=(new Date).getTime();return t&&(t=JSON.parse(t),n=r>t._age),n},get:function(e){var n=this.isExpire(e),t=null;return n?(localStorage.removeItem(e),t):(t=localStorage.getItem(e),t=JSON.parse(t),t._value)}}},zvbH:function(e,n,t){"use strict";var r=t("QbLZ"),a=t.n(r),o=t("iCc5"),i=t.n(o),s=t("V7oC"),l=t.n(s),c=t("FYw3"),u=t.n(c),d=t("mRg0"),p=t.n(d),m=t("TSYQ"),f=t.n(m),g=t("q1tI"),h=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&(t[r[a]]=e[r[a]])}return t},b=function(e){function n(){return i()(this,n),u()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p()(n,e),l()(n,[{key:"render",value:function(){var e=this.props,n=e.prefixCls,t=e.className,r=e.children,o=e.mode,i=e.icon,s=e.onLeftClick,l=e.leftContent,c=e.rightContent,u=h(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return g["createElement"]("div",a()({},u,{className:f()(t,n,n+"-"+o)}),g["createElement"]("div",{className:n+"-left",role:"button",onClick:s},i?g["createElement"]("span",{className:n+"-left-icon","aria-hidden":"true"},i):null,l),g["createElement"]("div",{className:n+"-title"},r),g["createElement"]("div",{className:n+"-right"},c))}}]),n}(g["Component"]);n["a"]=b,b.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}}}}]);