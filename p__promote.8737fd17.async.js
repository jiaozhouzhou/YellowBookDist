(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{"+J+N":function(e,n,t){var r=t("LboF"),a=t("okyr");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},"+cRp":function(e,n,t){"use strict";(function(e){t.d(n,"b",(function(){return h}));t("HVTF");var r=t("OT5E"),a=t("vDqi"),o=t.n(a),i=t("9kvl"),s=t("ShuE"),c=t("gjeX"),l=t.n(c),d=t("p58V"),u=t("vwip"),p=t("NFKh"),g=!1;function m(e,n,t){var r="",a=n,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(a=Math.round(Math.random()*(t-n))+n);for(var i=0;i<a;i++)r+=o[Math.round(Math.random()*(o.length-1))];return r}var f=window.baseUrl,b=o.a.create({baseURL:f,timeout:6e4});b.interceptors.request.use((function(n){n.loading&&(r["a"].loading("\u52a0\u8f7d\u4e2d..."),g=!0),Object(s["c"])(n),Object(s["a"])(n),n.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var t=e.store.getState().user.token;t&&(n.headers["userId"]=t.userId,t.accessToken&&(n.headers["token"]=t.accessToken));var a=n.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(a).map((function(e){return e+"="+a[e]})),c=(i=i.concat(["qid="+m(!1,16),"terminal=h5"]).sort()).join("&"),d="sign="+l()(c+o);return n.data=c+"&"+d,n}),(function(e){return e}));p.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),p.enc.Latin1.parse("jfdkwqew!#S#$%78");function v(e,n){var t=u["a"].get(e);if(!t||200!==t.code||Array.isArray(t.data)&&0===t.data.length){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n(...a).then(n=>(u["a"].set(e,n,864e5),n)).catch((function(e){return e}))}return t}b.interceptors.response.use((function(n){Object(s["c"])(n);var t=n.data,a=e.store,o=a.dispatch,c=a.getState;if(200==t.code||-97==t.code)return g&&r["a"].hide(),g=!1,t;if(-1==t.code)r["a"].info(t.data);else if(-98==t.code)r["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),o(d["default"].LoggedOut()),i["a"].push("/login");else if(-99==t.code){o(d["default"].ClearAccessToken());var l=c().user.token;l&&b.post("api/user/applyToken",{refershToken:l.refershToken}).then(e=>{e&&(l.accessToken=e.data.accessToken,l.refershToken=e.data.refershToken,o(d["default"].UpdateToken(l)),location.reload())})}g=!1}),(function(e){if(r["a"].hide(),e.response)switch(e.response.status){case 404:r["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:r["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:r["a"].info("\u8fde\u63a5\u8d85\u65f6");break}g=!1})),n["a"]=b;var h=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n[0],a=l.a.hex(r+"[POST]"+JSON.stringify(n));return v(a,b.post,...n)}}).call(this,t("yLpj"))},"+wk1":function(e,n,t){var r=t("LboF"),a=t("EjGy");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},1:function(e,n){},"1Cgs":function(e,n,t){"use strict";t("ywh3"),t("+J+N")},2:function(e,n){},3:function(e,n){},4:function(e,n){},"9kvl":function(e,n,t){"use strict";var r,a,o=t("FfOG"),i=t("bCY9"),s=(t("I5X1"),t("o0o1")),c=t.n(s),l=t("HaE+"),d=(t("/xke"),t("TeRw")),u=(t("miYZ"),t("tsqr")),p=t("VTBJ"),g=t("io9h"),m=t("LtsZ");t("TTbB");(function(e){e[e["SILENT"]=0]="SILENT",e[e["WARN_MESSAGE"]=1]="WARN_MESSAGE",e[e["ERROR_MESSAGE"]=2]="ERROR_MESSAGE",e[e["NOTIFICATION"]=4]="NOTIFICATION",e[e["REDIRECT"]=9]="REDIRECT"})(a||(a={}));var f="/exception",b=i["a"].applyPlugins({key:"request",type:m["ApplyPluginsType"].modify,initialValue:{}}),v=(null===(r=b.errorConfig)||void 0===r?void 0:r.adaptor)||(e=>e),h=Object(g["b"])(Object(p["a"])({errorHandler:e=>{var n,t,r,i;if(null===e||void 0===e||null===(n=e.request)||void 0===n||null===(t=n.options)||void 0===t?void 0:t.skipErrorHandler)throw e;if("ResponseError"===e.name&&e.data&&e.request){var s,c={req:e.request,res:e.response};i=v(e.data,c),e.message=(null===(s=i)||void 0===s?void 0:s.errorMessage)||e.message,e.data=e.data,e.info=i}if(i=e.info,i){var l,p,g,m=null===(l=i)||void 0===l?void 0:l.errorMessage,h=null===(p=i)||void 0===p?void 0:p.errorCode,w=(null===(g=b.errorConfig)||void 0===g?void 0:g.errorPage)||f;switch(null===(r=i)||void 0===r?void 0:r.showType){case a.SILENT:break;case a.WARN_MESSAGE:u["a"].warn(m);break;case a.ERROR_MESSAGE:u["a"].error(m);break;case a.NOTIFICATION:d["a"].open({message:m});break;case a.REDIRECT:o["b"].push({pathname:w,query:{errorCode:h,errorMessage:m}});break;default:u["a"].error(m);break}}else u["a"].error(e.message||"Request error, please retry.");throw e}},b));h.use(function(){var e=Object(l["a"])(c.a.mark((function e(n,t){var r,a,o,i,s,l,d,u;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(a=n.req,o=n.res,!(null===(r=a.options)||void 0===r?void 0:r.skipErrorHandler)){e.next=5;break}return e.abrupt("return");case 5:if(i=a.options,s=i.getResponse,l=s?o.data:o,d=v(l,n),!1!==d.success){e.next=15;break}throw u=new Error(d.errorMessage),u.name="BizError",u.data=l,u.info=d,u;case 15:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}());var w=b.middlewares||[];w.forEach(e=>{h.use(e)}),t.d(n,"a",(function(){return o["b"]})),t.d(n,"b",(function(){return i["a"]}))},BSlI:function(e,n,t){var r=t("JPst");n=r(!1),n.push([e.i,'.am-button {\n  display: block;\n  outline: 0 none;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  padding: 0;\n  text-align: center;\n  font-size: 4.8vw;\n  height: 12.5333333vw;\n  line-height: 12.5333333vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-word;\n  white-space: nowrap;\n  color: #000;\n  background-color: #fff;\n  border: 1PX solid #ddd;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button {\n  font-size: 0.48rem;\n  height: 1.2533333rem;\n  line-height: 1.2533333rem;\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #ddd;\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-borderfix:before {\n  transform: scale(0.49) !important;\n}\n.am-button.am-button-active {\n  background-color: #ddd;\n}\n.am-button.am-button-disabled {\n  color: rgba(0, 0, 0, 0.3);\n  opacity: 0.6;\n}\n.am-button-primary {\n  color: #fff;\n  background-color: #108ee9;\n  border: 1PX solid #108ee9;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button-primary {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-primary {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-primary::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #108ee9;\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-primary::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-primary.am-button-active {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #0e80d2;\n}\n.am-button-primary.am-button-disabled {\n  color: rgba(255, 255, 255, 0.6);\n  opacity: 0.4;\n}\n.am-button-ghost {\n  color: #108ee9;\n  background-color: transparent;\n  border: 1PX solid #108ee9;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button-ghost {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #108ee9;\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-ghost::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-ghost.am-button-active {\n  color: rgba(16, 142, 233, 0.6);\n  background-color: transparent;\n  border: 1PX solid rgba(16, 142, 233, 0.6);\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button-ghost.am-button-active {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost.am-button-active {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost.am-button-active::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid rgba(16, 142, 233, 0.6);\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-ghost.am-button-active::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-ghost.am-button-disabled {\n  color: rgba(0, 0, 0, 0.1);\n  border: 1PX solid rgba(0, 0, 0, 0.1);\n  border-radius: 1.3333333vw;\n  opacity: 1;\n}[data-rem="true"] .am-button-ghost.am-button-disabled {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost.am-button-disabled {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost.am-button-disabled::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid rgba(0, 0, 0, 0.1);\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-ghost.am-button-disabled::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-warning {\n  color: #fff;\n  background-color: #e94f4f;\n}\n.am-button-warning.am-button-active {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #d24747;\n}\n.am-button-warning.am-button-disabled {\n  color: rgba(255, 255, 255, 0.6);\n  opacity: 0.4;\n}\n.am-button-inline {\n  display: inline-block;\n  padding: 0 4vw;\n}[data-rem="true"] .am-button-inline {\n  padding: 0 0.4rem\n}\n.am-button-inline.am-button-icon {\n  display: inline-flex;\n}\n.am-button-small {\n  font-size: 3.4666667vw;\n  height: 8vw;\n  line-height: 8vw;\n  padding: 0 4vw;\n}[data-rem="true"] .am-button-small {\n  font-size: 0.3466667rem;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  padding: 0 0.4rem\n}\n.am-button-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.am-button > .am-button-icon {\n  margin-right: 0.5em;\n}\n',""]),e.exports=n},EjGy:function(e,n,t){var r=t("JPst"),a=t("HeW1"),o=t("vrNZ");n=r(!1);var i=a(o);n.push([e.i,'.promote_total {\n  width: 100%;\n  height: 18.6666667vw;\n  background-color: sandybrown;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}[data-rem="true"] .promote_total {\n  height: 1.8666667rem\n}\n.promote_title {\n  width: 100%;\n  display: flex;\n  height: 10.6666667vw;\n}[data-rem="true"] .promote_title {\n  height: 1.0666667rem\n}\n.promote_title span {\n  flex: 1 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.tg_page {\n  background-color: #f4f1ed;\n  padding-bottom: 23.2vw;\n}[data-rem="true"] .tg_page {\n  padding-bottom: 2.32rem\n}\n.tg_page .tg_img {\n  width: 100vw;\n  height: 77.3333333vw;\n  background-color: #fb9532;\n  background-image: url('+i+');\n  background-position: center -2.6666667vw;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}[data-rem="true"] .tg_page .tg_img {\n  width: 10rem;\n  height: 7.7333333rem;\n  background-position: center -0.2666667rem\n}\n.tg_page .tg_bar {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -47.3333333vw;\n  width: 94.6666667vw;\n  height: 20vw;\n  background-color: #ffa207;\n  background-image: linear-gradient(to bottom, #ffda78, #ffa207);\n  border-radius: 2.6666667vw 2.6666667vw 0 0;\n  display: flex;\n  align-items: center;\n}[data-rem="true"] .tg_page .tg_bar {\n  margin-left: -4.7333333rem;\n  width: 9.4666667rem;\n  height: 2rem;\n  border-radius: 0.2666667rem 0.2666667rem 0 0\n}\n.tg_page .tg_bar_tit {\n  font-size: 4.2666667vw;\n  color: #fff;\n  text-shadow: 0 0 1.3333333vw rgba(221, 94, 10, 0.67);\n  text-align: center;\n  width: 100%;\n}[data-rem="true"] .tg_page .tg_bar_tit {\n  font-size: 0.4266667rem;\n  text-shadow: 0 0 0.1333333rem rgba(221, 94, 10, 0.67)\n}\n.tg_page .MyInviteCode {\n  background-color: #fff;\n  padding: 3.2vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}[data-rem="true"] .tg_page .MyInviteCode {\n  padding: 0.32rem\n}\n.tg_page .MyInviteCode .code {\n  font-size: 4.2666667vw;\n  color: #333;\n  font-weight: bold;\n  margin-bottom: 2.6666667vw;\n}[data-rem="true"] .tg_page .MyInviteCode .code {\n  font-size: 0.4266667rem;\n  margin-bottom: 0.2666667rem\n}\n.tg_page .MyInviteCode .Invited {\n  background-color: #ffa200;\n  color: #fff;\n  font-size: 3.7333333vw;\n  padding: 0.8vw 2.1333333vw;\n  border-radius: 3.3333333vw;\n  margin-right: 2.6666667vw;\n}[data-rem="true"] .tg_page .MyInviteCode .Invited {\n  font-size: 0.3733333rem;\n  padding: 0.08rem 0.2133333rem;\n  border-radius: 0.3333333rem;\n  margin-right: 0.2666667rem\n}\n.tg_page .MyInviteCode .nextLevDesc {\n  color: #999;\n  font-size: 3.7333333vw;\n}[data-rem="true"] .tg_page .MyInviteCode .nextLevDesc {\n  font-size: 0.3733333rem\n}\n.tg_page .tg_rule {\n  margin-top: 2.6666667vw;\n  padding: 3.2vw;\n  background-color: #fff;\n  color: #333;\n}[data-rem="true"] .tg_page .tg_rule {\n  margin-top: 0.2666667rem;\n  padding: 0.32rem\n}\n.tg_page .tg_rule .rule_tit {\n  font-size: 4.2666667vw;\n}[data-rem="true"] .tg_page .tg_rule .rule_tit {\n  font-size: 0.4266667rem\n}\n.tg_page .tg_rule .con {\n  font-size: 3.7333333vw;\n  line-height: 6.6666667vw;\n  margin-top: 2.6666667vw;\n}[data-rem="true"] .tg_page .tg_rule .con {\n  font-size: 0.3733333rem;\n  line-height: 0.6666667rem;\n  margin-top: 0.2666667rem\n}\n.tg_page .tg_btn_group {\n  width: 100%;\n  background-color: #fff;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  padding: 4vw;\n  z-index: 1;\n}[data-rem="true"] .tg_page .tg_btn_group {\n  padding: 0.4rem\n}\n.tg_page .tg_btn_group .copyCode {\n  background-color: #5462f0;\n  background-image: linear-gradient(to bottom right, #5462f0, #4ec1ff);\n  box-shadow: 0 1px 1.3333333vw #6ec8e9;\n  border-radius: 6.2666667vw !important;\n  color: #fff !important;\n}[data-rem="true"] .tg_page .tg_btn_group .copyCode {\n  box-shadow: 0 1px 0.1333333rem #6ec8e9;\n  border-radius: 0.6266667rem !important\n}\n',""]),e.exports=n},HeW1:function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),e=e&&e.__esModule?e["default"]:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},NHyu:function(e,n,t){"use strict";var r=t("QbLZ"),a=t.n(r),o=t("YEIV"),i=t.n(o),s=t("iCc5"),c=t.n(s),l=t("V7oC"),d=t.n(l),u=t("FYw3"),p=t.n(u),g=t("mRg0"),m=t.n(g),f=t("TSYQ"),b=t.n(f),v=t("q1tI"),h=t("uJlo"),w=t("2ROE"),y=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&(t[r[a]]=e[r[a]])}return t},k=/^[\u4e00-\u9fa5]{2}$/,E=k.test.bind(k);function _(e){return"string"===typeof e}function x(e){return _(e.type)&&E(e.props.children)?v["cloneElement"](e,{},e.props.children.split("").join(" ")):_(e)?(E(e)&&(e=e.split("").join(" ")),v["createElement"]("span",null,e)):e}var C=function(e){function n(){return c()(this,n),p()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return m()(n,e),d()(n,[{key:"render",value:function(){var e,n=this.props,t=n.children,r=n.className,o=n.prefixCls,s=n.type,c=n.size,l=n.inline,d=n.disabled,u=n.icon,p=n.loading,g=n.activeStyle,m=n.activeClassName,f=n.onClick,k=y(n,["children","className","prefixCls","type","size","inline","disabled","icon","loading","activeStyle","activeClassName","onClick"]),E=p?"loading":u,_=b()(o,r,(e={},i()(e,o+"-primary","primary"===s),i()(e,o+"-ghost","ghost"===s),i()(e,o+"-warning","warning"===s),i()(e,o+"-small","small"===c),i()(e,o+"-inline",l),i()(e,o+"-disabled",d),i()(e,o+"-loading",p),i()(e,o+"-icon",!!E),e)),C=v["Children"].map(t,x),T=void 0;if("string"===typeof E)T=v["createElement"](w["a"],{"aria-hidden":"true",type:E,size:"small"===c?"xxs":"md",className:o+"-icon"});else if(E){var O=E.props&&E.props.className,N=b()("am-icon",o+"-icon","small"===c?"am-icon-xxs":"am-icon-md");T=v["cloneElement"](E,{className:O?O+" "+N:N})}return v["createElement"](h["a"],{activeClassName:m||(g?o+"-active":void 0),disabled:d,activeStyle:g},v["createElement"]("a",a()({role:"button",className:_},k,{onClick:d?void 0:f,"aria-disabled":d}),T,C))}}]),n}(v["Component"]);C.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,activeStyle:{}},n["a"]=C},Nlzp:function(e,n,t){"use strict";t.d(n,"d",(function(){return a})),t.d(n,"r",(function(){return o})),t.d(n,"u",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"g",(function(){return c})),t.d(n,"v",(function(){return l})),t.d(n,"C",(function(){return d})),t.d(n,"B",(function(){return u})),t.d(n,"s",(function(){return p})),t.d(n,"w",(function(){return g})),t.d(n,"a",(function(){return m})),t.d(n,"j",(function(){return f})),t.d(n,"o",(function(){return b})),t.d(n,"q",(function(){return v})),t.d(n,"D",(function(){return h})),t.d(n,"p",(function(){return w})),t.d(n,"k",(function(){return y})),t.d(n,"f",(function(){return k})),t.d(n,"z",(function(){return E})),t.d(n,"A",(function(){return _})),t.d(n,"i",(function(){return x})),t.d(n,"h",(function(){return C})),t.d(n,"m",(function(){return T})),t.d(n,"b",(function(){return O})),t.d(n,"t",(function(){return N})),t.d(n,"l",(function(){return I})),t.d(n,"n",(function(){return S})),t.d(n,"x",(function(){return j})),t.d(n,"y",(function(){return M})),t.d(n,"e",(function(){return z}));var r=t("+cRp"),a=e=>r["a"].post("api/user/getVerifyCode",e),o=e=>r["a"].post("api/user/login",e,{loading:!0}),i=e=>r["a"].post("api/user/register",e,{loading:!0}),s=e=>r["a"].post("api/user/SendCode",e),c=e=>r["a"].post("api/user/forgetPass",e,{loading:!0}),l=e=>r["a"].post("api/user/resetPass",e,{loading:!0}),d=e=>r["a"].post("api/user/getRights",e),u=e=>r["a"].post("api/user/getUserInfo",e),p=e=>r["a"].post("api/site/notice",e),g=e=>r["a"].post("api/site/moduleCfg",e),m=e=>r["a"].post("api/video/Home",e),f=e=>r["a"].post("api/video/getList",e),b=e=>r["a"].post("api/video/getVideoInfo",e),v=e=>r["a"].post("api/video/getVideoRelation",e),h=e=>r["a"].post("api/video/watchingVideo",e),w=e=>r["a"].post("api/video/getVideoRank",e),y=e=>r["a"].post("api/video/getMoiveHis",e),k=e=>r["a"].post("api/video/discoveryPage",e),E=e=>r["a"].post("api/video/thematicList",e),_=e=>r["a"].post("api/video/thematicVideo",e),x=e=>r["a"].post("api/video/getGirlList",e),C=e=>r["a"].post("api/video/getGirlInfo",e),T=e=>r["a"].post("api/video/getSearchRank",e),O=e=>r["a"].post("api/recharge/PayConfig",e),N=e=>r["a"].post("api/recharge/pay",e,{loading:!0}),I=e=>r["a"].post("api/user/getOrder",e,{loading:!0}),S=e=>r["a"].post("api/user/getSpread",e),j=e=>r["a"].post("api/user/spreadInfo",e),M=e=>Object(r["b"])("api/site/spreadRules",e),z=e=>r["a"].post("api/fiction/getList",e)},ShuE:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"c",(function(){return d})),t.d(n,"b",(function(){return u}));var r=t("ODXe"),a=t("Qyje"),o=t.n(a),i=t("vDqi"),s=t.n(i),c=new Map,l=e=>{var n=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{c.has(n)||c.set(n,e)})},d=e=>{var n=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(c.has(n)){var t=c.get(n);t(n),c.delete(n)}},u=()=>{var e=!0,n=!1,t=void 0;try{for(var a,o=c[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var i=a.value,s=Object(r["a"])(i,2),l=s[0],d=s[1];d(l)}}catch(u){n=!0,t=u}finally{try{e||null==o.return||o.return()}finally{if(n)throw t}}c.clear()}},TJML:function(e,n,t){var r=t("LboF"),a=t("BSlI");a=a.__esModule?a.default:a,"string"===typeof a&&(a=[[e.i,a,""]]);var o={base:0,insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},XGli:function(e,n,t){"use strict";t("ywh3"),t("D2jH"),t("TJML")},cPB3:function(e,n,t){"use strict";t.r(n);t("XGli");var r=t("NHyu"),a=(t("D2jH"),t("2ROE")),o=t("o0o1"),i=t.n(o),s=t("HaE+"),c=(t("HVTF"),t("OT5E")),l=t("q1tI"),d=t.n(l),u=t("Nlzp"),p=t("rY4l"),g=t("55Ip");t("+wk1");class m extends l["Component"]{constructor(e){super(e),this.GoTo=e=>()=>{this.props.history.push(e)},this.copyCode=()=>{var e=document.getElementById("code"),n=document.createRange();window.getSelection().removeAllRanges(),n.selectNode(e),window.getSelection().addRange(n);var t=document.execCommand("copy");t?c["a"].info("\u590d\u5236\u6210\u529f\uff01"):c["a"].info("\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236\uff01"),window.getSelection().removeAllRanges()},this.state={nextLevDesc:"",spreadCode:"",spreadNum:""}}UNSAFE_componentWillMount(){var e=this;return Object(s["a"])(i.a.mark((function n(){var t;return i.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(u["x"])();case 2:t=n.sent,t&&e.setState(t.data);case 4:case"end":return n.stop()}}),n)})))()}render(){var e=this.state,n=e.nextLevDesc,t=e.spreadCode,o=e.spreadNum;return d.a.createElement(d.a.Fragment,null,d.a.createElement(p["a"],{title:"\u63a8\u5e7f\u5206\u4eab",bottomColor:"#fb9532",rightContent:d.a.createElement("div",{onClick:this.GoTo("/mypromote")},"\u6211\u7684\u63a8\u5e7f")}),d.a.createElement("div",{className:"cvs tg_page"},d.a.createElement("div",{className:"tg_img"},d.a.createElement("div",{className:"tg_bar"},d.a.createElement("p",{className:"tg_bar_tit"},"\u9080\u8bf7\u8d8a\u591a,\u5956\u52b1\u8d8a\u591a"))),d.a.createElement("div",{className:"MyInviteCode"},d.a.createElement("div",null,d.a.createElement("div",{className:"code"},"\u6211\u7684\u9080\u8bf7\u7801\uff1a",d.a.createElement("span",{id:"code"},t)),d.a.createElement("p",null,d.a.createElement("span",{className:"Invited"},"\u5df2\u9080\u8bf7",o,"\u4eba"),d.a.createElement("span",{className:"nextLevDesc"},n))),d.a.createElement(a["a"],{type:"right",size:"lg",color:"#fac842"})),d.a.createElement("div",{className:"tg_rule"},d.a.createElement("p",{className:"rule_tit"},"\u63a8\u5e7f\u4efb\u52a1\u89c4\u5219"),d.a.createElement("p",{className:"con"},"1.\u5206\u4eab\u9080\u8bf7\u7801\u7ed9\u597d\u53cb\u6210\u529f\u6253\u5f00\u672c\u7f51\u7ad9\u540e\uff0c\u6253\u5f00\u6ce8\u518c\u65f6\u597d\u53cb\u586b\u5199\u60a8\u7684\u9080\u8bf7\u7801\uff0c\u53ef\u6c38\u4e45\u589e\u52a0\u6bcf\u65e5\u6bcf\u65e5\u89c2\u5f71\u6b21\u6570\uff0c\u9080\u8bf7\u8d8a\u591a\uff0c\u5956\u52b1\u8d8a\u591a\u3002"),d.a.createElement("p",{className:"con"},"2.\u63a8\u5e7f\u4efb\u52a1\u4e3a\u9636\u68af\u4efb\u52a1\uff0c\u63a8\u5e7f\u6ee1\u8db3\u68af\u5ea6\u4eba\u6570\u8981\u6c42\u540e\uff0c\u81ea\u52a8\u9886\u53d6\u5956\u52b1\uff0c\u5956\u52b1\u9886\u53d6\u540e\u5f00\u542f\u4e0b\u4e00\u68af\u5ea6\u7684\u4efb\u52a1\uff0c\u76f4\u5230\u6700\u9ad8\u7b49\u7ea7\u4e3a\u6b62\u3002",d.a.createElement(g["Link"],{className:"font_orange",to:"/lvRule"},"\u7b49\u7ea7\u89c4\u5219")),d.a.createElement("p",{className:"con"},"3.\u70b9\u51fb\u53f3\u4e0a\u89d2\u201c\u6211\u7684\u63a8\u5e7f\u201d\u53ef\u67e5\u770b\u6211\u63a8\u5e7f\u7684\u7528\u6237")),d.a.createElement("div",{className:"tg_btn_group"},d.a.createElement(r["a"],{className:"copyCode",onClick:this.copyCode},"\u590d\u5236\u9080\u8bf7\u7801"))))}}n["default"]=m},okyr:function(e,n,t){var r=t("JPst");n=r(!1),n.push([e.i,'.am-navbar {\n  display: flex;\n  align-items: center;\n  height: 12vw;\n  background-color: #108ee9;\n  color: #fff;\n}[data-rem="true"] .am-navbar {\n  height: 1.2rem\n}\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  flex: 1 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.am-navbar-left {\n  padding-left: 4vw;\n  font-size: 4.2666667vw;\n}[data-rem="true"] .am-navbar-left {\n  padding-left: 0.4rem;\n  font-size: 0.4266667rem\n}\n.am-navbar-left-icon {\n  margin-right: 1.3333333vw;\n  display: inherit;\n}[data-rem="true"] .am-navbar-left-icon {\n  margin-right: 0.1333333rem\n}\n.am-navbar-title {\n  justify-content: center;\n  font-size: 4.8vw;\n  white-space: nowrap;\n}[data-rem="true"] .am-navbar-title {\n  font-size: 0.48rem\n}\n.am-navbar-right {\n  justify-content: flex-end;\n  font-size: 4.2666667vw;\n  margin-right: 4vw;\n}[data-rem="true"] .am-navbar-right {\n  font-size: 0.4266667rem;\n  margin-right: 0.4rem\n}\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9;\n}\n.am-navbar-light .am-navbar-title {\n  color: #000;\n}\n',""]),e.exports=n},p58V:function(e,n,t){"use strict";t.r(n),t.d(n,"INITIAL_STATE",(function(){return l})),t.d(n,"userInfo",(function(){return g})),t.d(n,"registerYB",(function(){return m})),t.d(n,"reducer",(function(){return y}));var r=t("VTBJ"),a=t("o0o1"),o=t.n(a),i=t("HaE+"),s=t("zyFE"),c=t("Nlzp"),l={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},d=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),u=d.Types,p=d.Creators;function g(e){return function(){var e=Object(i["a"])(o.a.mark((function e(n,t){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["B"])();case 2:r=e.sent,r&&n(p.UpdateUserInfo(r.data));case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}function m(){return function(){var e=Object(i["a"])(o.a.mark((function e(n,t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}n["default"]=p;var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",n.payload,n.phone),Object.assign({},e,Object(r["a"])({loginInProgress:!1,loggedIn:!0,phone:n.phone},n.payload))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:n.payload})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return n.token&&(n.token.accessToken=null),n},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:n.payload})},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},y=Object(s["createReducer"])(l,{[u.LOGGED_IN]:f,[u.LOGGED_OUT]:w,[u.UPDATE_TOKEN]:b,[u.UPDATE_USER_INFO]:h,[u.CLEAR_ACCESS_TOKEN]:v})},rY4l:function(e,n,t){"use strict";t("1Cgs");var r=t("zvbH"),a=(t("D2jH"),t("2ROE")),o=t("q1tI"),i=t.n(o),s=t("9kvl");class c extends o["Component"]{constructor(e){super(e),this.GoBack=()=>{s["a"].goBack()},this.state={}}render(){var e=this.props,n=e.hidLift,t=e.rightContent,o=e.title,s=e.noclass,c=e.bottomColor;return s?i.a.createElement(r["a"],{icon:n?null:i.a.createElement(a["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:t},o):i.a.createElement("div",{className:"public_header"},i.a.createElement(r["a"],{icon:n?null:i.a.createElement(a["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:t},o),i.a.createElement("div",{className:"public_radius",style:{backgroundColor:c}}))}}n["a"]=c},uJlo:function(e,n,t){"use strict";var r=t("QbLZ"),a=t.n(r),o=t("iCc5"),i=t.n(o),s=t("V7oC"),c=t.n(s),l=t("FYw3"),d=t.n(l),u=t("mRg0"),p=t.n(u),g=t("q1tI"),m=t.n(g),f=t("TSYQ"),b=t.n(f),v=function(e){function n(){i()(this,n);var e=d()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.state={active:!1},e.onTouchStart=function(n){e.triggerEvent("TouchStart",!0,n)},e.onTouchMove=function(n){e.triggerEvent("TouchMove",!1,n)},e.onTouchEnd=function(n){e.triggerEvent("TouchEnd",!1,n)},e.onTouchCancel=function(n){e.triggerEvent("TouchCancel",!1,n)},e.onMouseDown=function(n){e.triggerEvent("MouseDown",!0,n)},e.onMouseUp=function(n){e.triggerEvent("MouseUp",!1,n)},e.onMouseLeave=function(n){e.triggerEvent("MouseLeave",!1,n)},e}return p()(n,e),c()(n,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(e,n,t){var r="on"+e,a=this.props.children;a.props[r]&&a.props[r](t),n!==this.state.active&&this.setState({active:n})}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.disabled,r=e.activeClassName,o=e.activeStyle,i=t?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},s=m.a.Children.only(n);if(!t&&this.state.active){var c=s.props,l=c.style,d=c.className;return!1!==o&&(o&&(l=a()({},l,o)),d=b()(d,r)),m.a.cloneElement(s,a()({className:d,style:l},i))}return m.a.cloneElement(s,i)}}]),n}(m.a.Component),h=v;v.defaultProps={disabled:!1},t.d(n,"a",(function(){return h}))},vrNZ:function(e,n,t){e.exports=t.p+"static/tg_img.2a2da604.jpg"},vwip:function(e,n,t){"use strict";n["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,n,t){localStorage.removeItem(e);var r=(new Date).getTime(),a=t||this.age,o={};return o._value=n,o._time=r,o._age=r+a,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var n=!0,t=localStorage.getItem(e),r=(new Date).getTime();return t&&(t=JSON.parse(t),n=r>t._age),n},get:function(e){var n=this.isExpire(e),t=null;return n?(localStorage.removeItem(e),t):(t=localStorage.getItem(e),t=JSON.parse(t),t._value)}}},zvbH:function(e,n,t){"use strict";var r=t("QbLZ"),a=t.n(r),o=t("iCc5"),i=t.n(o),s=t("V7oC"),c=t.n(s),l=t("FYw3"),d=t.n(l),u=t("mRg0"),p=t.n(u),g=t("TSYQ"),m=t.n(g),f=t("q1tI"),b=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&(t[r[a]]=e[r[a]])}return t},v=function(e){function n(){return i()(this,n),d()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p()(n,e),c()(n,[{key:"render",value:function(){var e=this.props,n=e.prefixCls,t=e.className,r=e.children,o=e.mode,i=e.icon,s=e.onLeftClick,c=e.leftContent,l=e.rightContent,d=b(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return f["createElement"]("div",a()({},d,{className:m()(t,n,n+"-"+o)}),f["createElement"]("div",{className:n+"-left",role:"button",onClick:s},i?f["createElement"]("span",{className:n+"-left-icon","aria-hidden":"true"},i):null,c),f["createElement"]("div",{className:n+"-title"},r),f["createElement"]("div",{className:n+"-right"},l))}}]),n}(f["Component"]);n["a"]=v,v.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}}}}]);