(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"+cRp":function(e,n,t){"use strict";(function(e){t.d(n,"b",(function(){return b}));t("HVTF");var a=t("OT5E"),r=t("vDqi"),o=t.n(r),i=t("9kvl"),s=t("ShuE"),d=t("gjeX"),c=t.n(d),l=t("p58V"),u=t("vwip"),p=t("NFKh"),g=!1;function m(e,n,t){var a="",r=n,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(r=Math.round(Math.random()*(t-n))+n);for(var i=0;i<r;i++)a+=o[Math.round(Math.random()*(o.length-1))];return a}var f=window.baseUrl,h=o.a.create({baseURL:f,timeout:6e4});h.interceptors.request.use((function(n){n.loading&&(a["a"].loading("\u52a0\u8f7d\u4e2d..."),g=!0),Object(s["c"])(n),Object(s["a"])(n),n.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var t=e.store.getState().user.token;t&&(n.headers["userId"]=t.userId,t.accessToken&&(n.headers["token"]=t.accessToken));var r=n.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(r).map((function(e){return e+"="+r[e]})),d=(i=i.concat(["qid="+m(!1,16),"terminal=h5"]).sort()).join("&"),l="sign="+c()(d+o);return n.data=d+"&"+l,n}),(function(e){return e}));p.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),p.enc.Latin1.parse("jfdkwqew!#S#$%78");function v(e,n){var t=u["a"].get(e);if(!t||200!==t.code||Array.isArray(t.data)&&0===t.data.length){for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];return n(...r).then(n=>(u["a"].set(e,n,864e5),n)).catch((function(e){return e}))}return t}h.interceptors.response.use((function(n){Object(s["c"])(n);var t=n.data,r=e.store,o=r.dispatch,d=r.getState;if(200==t.code||-97==t.code)return g&&a["a"].hide(),g=!1,t;if(-1==t.code)a["a"].info(t.data);else if(-98==t.code)a["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),o(l["default"].LoggedOut()),i["a"].push("/login");else if(-99==t.code){o(l["default"].ClearAccessToken());var c=d().user.token;c&&h.post("api/user/applyToken",{refershToken:c.refershToken}).then(e=>{e&&(c.accessToken=e.data.accessToken,c.refershToken=e.data.refershToken,o(l["default"].UpdateToken(c)),location.reload())})}g=!1}),(function(e){if(a["a"].hide(),e.response)switch(e.response.status){case 404:a["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:a["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:a["a"].info("\u8fde\u63a5\u8d85\u65f6");break}g=!1})),n["a"]=h;var b=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var a=n[0],r=c.a.hex(a+"[POST]"+JSON.stringify(n));return v(r,h.post,...n)}}).call(this,t("yLpj"))},"0Wn5":function(e,n,t){"use strict";t("0mAl");var a=t("Ng4X"),r=t("o0o1"),o=t.n(r),i=t("HaE+"),s=t("q1tI"),d=t.n(s),c=t("/MKj");class l extends s["Component"]{constructor(e){super(e),this.state={}}UNSAFE_componentWillMount(){return Object(i["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}render(){var e=this.props.moduleCfg.banner;return d.a.createElement(a["a"],{autoplay:!1,infinite:!0,cellSpacing:5,slideWidth:.92},(e.index_banner_ad||[]).map(e=>d.a.createElement("a",{href:e.bannerLink,className:"banner",key:e.id,target:"_blank"},d.a.createElement("img",{src:e.bannerImg1,title:e.bannerTitle,alt:e.bannerTitle}))))}}function u(e){return{moduleCfg:e.config.moduleCfg||{banner:{}}}}n["a"]=Object(c["b"])(u)(l)},1:function(e,n){},2:function(e,n){},3:function(e,n){},4:function(e,n){},"6ua7":function(e,n,t){"use strict";t("UzV/");var a=t("vLen"),r=t("q1tI"),o=t.n(r);class i extends r["Component"]{constructor(e){super(e),this._OnEndReached=()=>{this.setState({isEnd:!0}),this.props.onEndReached&&this.props.onEndReached()},this._RenderFooter=()=>{var e=this.props,n=e.dataSource,t=e.nomore;return 0==n.length?o.a.createElement("div",{style:{textAlign:"center"}},"\u6682\u65e0\u6570\u636e"):this.state.isEnd?o.a.createElement("div",{style:{textAlign:"center"}},t?"\u6ca1\u6709\u66f4\u591a\u4e86~":"\u52a0\u8f7d\u66f4\u591a\u4e2d..."):void 0},this.state={isEnd:!1},this.ds=new a["a"].DataSource({getRowData:(e,n)=>e[n],rowHasChanged:(e,n)=>e!==n})}UNSAFE_componentWillMount(){}render(){var e=this.props,n=e.className,t=e.dataSource,r=e.renderRow,i=e.renderHeader,s=t.map((e,n)=>n);return this.ds=this.ds.cloneWithRows(t,s),o.a.createElement(a["a"],{className:n,ref:e=>this.lv=e,dataSource:this.ds,renderHeader:i,renderRow:r,renderFooter:this._RenderFooter,pageSize:4,onScroll:()=>{console.log("scroll")},scrollRenderAheadDistance:500,onEndReached:this._OnEndReached,onEndReachedThreshold:10,style:{flex:1}})}}i.defaultProps={nomore:!1,loading:!1,dataSource:[],renderSeparator:()=>o.a.createElement("div",{className:"line"})},n["a"]=i},JI3C:function(e,n,t){"use strict";t("ywh3"),t("D2jH"),t("az3q")},JW1o:function(e,n,t){var a=t("LboF"),r=t("K4HT");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},K4HT:function(e,n,t){var a=t("JPst"),r=t("HeW1"),o=t("ezp/");n=a(!1);var i=r(o);n.push([e.i,'.cartoonPage .title {\n  overflow: hidden;\n  padding-left: 4vw;\n  padding-right: 4vw;\n}[data-rem="true"] .cartoonPage .title {\n  padding-left: 0.4rem;\n  padding-right: 0.4rem\n}\n.cartoonPage .title_text {\n  font-size: 4.2666667vw;\n  font-weight: bold;\n  color: #2d2d2d;\n}[data-rem="true"] .cartoonPage .title_text {\n  font-size: 0.4266667rem\n}\n.cartoonPage .title_text:after {\n  display: none;\n}\n.cartoonPage .title_text b {\n  z-index: 1;\n  position: relative;\n}\n.cartoonPage .title_text .tit_before {\n  width: 10.1333333vw;\n  height: 14.6666667vw;\n  background: url('+i+') center;\n  background-size: cover;\n  display: block;\n  position: absolute;\n  right: -5.8666667vw;\n  top: 0;\n  z-index: 0;\n}[data-rem="true"] .cartoonPage .title_text .tit_before {\n  width: 1.0133333rem;\n  height: 1.4666667rem;\n  right: -0.5866667rem\n}\n.cartoonPage .li {\n  padding: 0 4vw 4vw;\n  border-bottom: 1px solid #e8e8e8;\n}[data-rem="true"] .cartoonPage .li {\n  padding: 0 0.4rem 0.4rem;\n  border-bottom: 1px solid #e8e8e8\n}\n.cartoonPage .li:last-child {\n  border: 0;\n}\n.cartoonPage .dm li {\n  width: 30.6666667vw;\n  display: block;\n  margin-right: 2.6666667vw;\n}[data-rem="true"] .cartoonPage .dm li {\n  width: 3.0666667rem;\n  margin-right: 0.2666667rem\n}\n.cartoonPage .dm li .img {\n  width: 30.6666667vw;\n  height: 40vw;\n}[data-rem="true"] .cartoonPage .dm li .img {\n  width: 3.0666667rem;\n  height: 4rem\n}\n.cartoonPage .dm li p {\n  margin-top: 1.6vw;\n  font-size: 3.7333333vw;\n  color: #2d2d2d;\n}[data-rem="true"] .cartoonPage .dm li p {\n  margin-top: 0.16rem;\n  font-size: 0.3733333rem\n}\n.cartoon_list_type {\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #e8e8e8;\n  padding-top: 1.3333333vw;\n  padding-bottom: 1.3333333vw;\n  background-color: #fff;\n}[data-rem="true"] .cartoon_list_type {\n  border-bottom: 1px solid #e8e8e8;\n  padding-top: 0.1333333rem;\n  padding-bottom: 0.1333333rem\n}\n.cartoon_list_type .tag {\n  margin-bottom: 2.6666667vw;\n}[data-rem="true"] .cartoon_list_type .tag {\n  margin-bottom: 0.2666667rem\n}\n.cartoonList .list-view-section-body {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 2vw 2.6666667vw;\n}[data-rem="true"] .cartoonList .list-view-section-body {\n  padding: 0 0.2rem 0.2666667rem\n}\n.cartoonList .cartoon {\n  width: 28vw;\n  margin: 0 2vw 5.3333333vw;\n}[data-rem="true"] .cartoonList .cartoon {\n  width: 2.8rem;\n  margin: 0 0.2rem 0.5333333rem\n}\n.cartoonList .cartoon .img {\n  width: 100%;\n  height: 36vw;\n}[data-rem="true"] .cartoonList .cartoon .img {\n  height: 3.6rem\n}\n.cartoonList .cartoon p {\n  margin-top: 1.6vw;\n  font-size: 3.7333333vw;\n  color: #2d2d2d;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-break: break-all;\n  white-space: inherit!important;\n}[data-rem="true"] .cartoonList .cartoon p {\n  margin-top: 0.16rem;\n  font-size: 0.3733333rem\n}\n.cartoon_head {\n  width: 100vw;\n  height: 48.1333333vw;\n  border-radius: 0;\n}[data-rem="true"] .cartoon_head {\n  width: 10rem;\n  height: 4.8133333rem\n}\n.cartoon_btn_group {\n  padding: 4vw;\n  display: flex;\n}[data-rem="true"] .cartoon_btn_group {\n  padding: 0.4rem\n}\n.cartoon_btn_group .btn-read {\n  width: 49.3333333vw;\n  height: 10.6666667vw;\n  line-height: 10.6666667vw;\n  background-color: #ffa200;\n  border-radius: 1.3333333vw;\n  color: #fff;\n  font-size: 4vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}[data-rem="true"] .cartoon_btn_group .btn-read {\n  width: 4.9333333rem;\n  height: 1.0666667rem;\n  line-height: 1.0666667rem;\n  border-radius: 0.1333333rem;\n  font-size: 0.4rem\n}\n.cartoon_btn_group .btn-read b {\n  font-size: 3.2vw;\n}[data-rem="true"] .cartoon_btn_group .btn-read b {\n  font-size: 0.32rem\n}\n.cartoon_btn_group .btn-read.gray {\n  width: 40vw;\n  background-color: #f5f5f5;\n  color: #ffa200;\n  margin-left: 2.6666667vw;\n}[data-rem="true"] .cartoon_btn_group .btn-read.gray {\n  width: 4rem;\n  margin-left: 0.2666667rem\n}\n.cartoon_btn_group .btn-read:before {\n  display: none!important;\n}\n.cartoon_btn_group .btn-read .am-icon {\n  margin-right: 1.3333333vw;\n  margin-top: -1.3333333vw;\n}[data-rem="true"] .cartoon_btn_group .btn-read .am-icon {\n  margin-right: 0.1333333rem;\n  margin-top: -0.1333333rem\n}\n.cartoonChapter .am-list-header .sort {\n  width: 100%;\n  height: 10.6666667vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 4vw;\n  color: #777;\n}[data-rem="true"] .cartoonChapter .am-list-header .sort {\n  height: 1.0666667rem;\n  padding: 0 0.4rem\n}\n.cartoonChapter .am-list-header .srig {\n  display: flex;\n}\n.cartoonChapter .am-list-header .srig .am-icon {\n  margin-left: 1.3333333vw;\n}[data-rem="true"] .cartoonChapter .am-list-header .srig .am-icon {\n  margin-left: 0.1333333rem\n}\n.cartoonChapter .chapter {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4vw;\n  border-top: 1px solid #f4f4f4;\n}[data-rem="true"] .cartoonChapter .chapter {\n  padding: 0.4rem;\n  border-top: 1px solid #f4f4f4\n}\n.cartoonChapter .chapter .tit {\n  font-size: 3.7333333vw;\n  color: #2d2d2d;\n}[data-rem="true"] .cartoonChapter .chapter .tit {\n  font-size: 0.3733333rem\n}\n.cartoonChapter .chapter .read {\n  font-size: 2.6666667vw;\n  color: #777;\n}[data-rem="true"] .cartoonChapter .chapter .read {\n  font-size: 0.2666667rem\n}\n.cartoonInfo .placeholder {\n  width: 100%;\n  height: 13.3333333vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}[data-rem="true"] .cartoonInfo .placeholder {\n  height: 1.3333333rem\n}\n.cartoonInfo .CartoonImg {\n  width: 100%;\n  display: block;\n}\n',""]),e.exports=n},Nlzp:function(e,n,t){"use strict";t.d(n,"f",(function(){return r})),t.d(n,"v",(function(){return o})),t.d(n,"y",(function(){return i})),t.d(n,"e",(function(){return s})),t.d(n,"j",(function(){return d})),t.d(n,"z",(function(){return c})),t.d(n,"I",(function(){return l})),t.d(n,"A",(function(){return u})),t.d(n,"H",(function(){return p})),t.d(n,"w",(function(){return g})),t.d(n,"C",(function(){return m})),t.d(n,"c",(function(){return f})),t.d(n,"n",(function(){return h})),t.d(n,"g",(function(){return v})),t.d(n,"s",(function(){return b})),t.d(n,"u",(function(){return w})),t.d(n,"J",(function(){return y})),t.d(n,"t",(function(){return C})),t.d(n,"o",(function(){return A})),t.d(n,"i",(function(){return x})),t.d(n,"F",(function(){return E})),t.d(n,"G",(function(){return N})),t.d(n,"m",(function(){return T})),t.d(n,"l",(function(){return O})),t.d(n,"q",(function(){return k})),t.d(n,"d",(function(){return P})),t.d(n,"x",(function(){return R})),t.d(n,"p",(function(){return S})),t.d(n,"r",(function(){return I})),t.d(n,"D",(function(){return j})),t.d(n,"E",(function(){return F})),t.d(n,"h",(function(){return H})),t.d(n,"b",(function(){return z})),t.d(n,"k",(function(){return L})),t.d(n,"a",(function(){return D})),t.d(n,"B",(function(){return J}));var a=t("+cRp"),r=e=>a["a"].post("api/user/getVerifyCode",e),o=e=>a["a"].post("api/user/login",e,{loading:!0}),i=e=>a["a"].post("api/user/register",e,{loading:!0}),s=e=>a["a"].post("api/user/SendCode",e),d=e=>a["a"].post("api/user/forgetPass",e,{loading:!0}),c=e=>a["a"].post("api/user/resetPass",e,{loading:!0}),l=e=>a["a"].post("api/user/getRights",e),u=e=>a["a"].post("api/user/sendFeedback",e,{loading:!0}),p=e=>a["a"].post("api/user/getUserInfo",e),g=e=>a["a"].post("api/site/notice",e),m=e=>a["a"].post("api/site/moduleCfg",e),f=e=>a["a"].post("api/video/Home",e),h=e=>a["a"].post("api/video/getList",e),v=e=>a["a"].post("api/video/VideoRecommon",e),b=e=>a["a"].post("api/video/getVideoInfo",e),w=e=>a["a"].post("api/video/getVideoRelation",e),y=e=>a["a"].post("api/video/watchingVideo",e),C=e=>a["a"].post("api/video/getVideoRank",e),A=e=>a["a"].post("api/video/getMoiveHis",e),x=e=>a["a"].post("api/video/discoveryPage",e),E=e=>a["a"].post("api/video/thematicList",e),N=e=>a["a"].post("api/video/thematicVideo",e),T=e=>a["a"].post("api/video/getGirlList",e),O=e=>a["a"].post("api/video/getGirlInfo",e),k=e=>a["a"].post("api/video/getSearchRank",e),P=e=>a["a"].post("api/recharge/PayConfig",e),R=e=>a["a"].post("api/recharge/pay",e,{loading:!0}),S=e=>a["a"].post("api/user/getOrder",e,{loading:!0}),I=e=>a["a"].post("api/user/getSpread",e),j=e=>a["a"].post("api/user/spreadInfo",e),F=e=>Object(a["b"])("api/site/spreadRules",e),H=e=>a["a"].post("api/fiction/getList",e),z=e=>a["a"].post("api/fiction/CartoonList",e),L=e=>a["a"].post("api/fiction/getChapter",e),D=e=>a["a"].post("api/fiction/CartoonInfo",e),J=e=>a["a"].post("api/fiction/setPraise",e)},QCIR:function(e,n,t){var a=t("JPst");n=a(!1),n.push([e.i,'.am-tag {\n  display: inline-block;\n  position: relative;\n  font-size: 3.7333333vw;\n  text-align: center;\n  padding: 0 4vw;\n  height: 6.6666667vw;\n  line-height: 6.6666667vw;\n  box-sizing: border-box;\n}[data-rem="true"] .am-tag {\n  font-size: 0.3733333rem;\n  padding: 0 0.4rem;\n  height: 0.6666667rem;\n  line-height: 0.6666667rem\n}\n.am-tag.am-tag-small {\n  height: 4vw;\n  line-height: 4vw;\n  padding: 0 1.3333333vw;\n  font-size: 2.6666667vw;\n}[data-rem="true"] .am-tag.am-tag-small {\n  height: 0.4rem;\n  line-height: 0.4rem;\n  padding: 0 0.1333333rem;\n  font-size: 0.2666667rem\n}\n.am-tag-normal {\n  background-color: #fff;\n  color: #888;\n  border: 1PX solid #ddd;\n  border-radius: 0.8vw;\n}[data-rem="true"] .am-tag-normal {\n  border-radius: 0.08rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-tag-normal {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-tag-normal::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #ddd;\n    border-radius: 1.6vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-tag-normal::before {\n    border-radius: 0.16rem\n}\n}\n.am-tag-active {\n  background-color: #fff;\n  color: #108ee9;\n  border: 1PX solid #108ee9;\n  border-radius: 0.8vw;\n}[data-rem="true"] .am-tag-active {\n  border-radius: 0.08rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-tag-active {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-tag-active::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #108ee9;\n    border-radius: 1.6vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-tag-active::before {\n    border-radius: 0.16rem\n}\n}\n.am-tag-disabled {\n  color: #bbb;\n  background-color: #ddd;\n  border: 1PX solid #ddd;\n  border-radius: 0.8vw;\n}[data-rem="true"] .am-tag-disabled {\n  border-radius: 0.08rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-tag-disabled {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-tag-disabled::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #ddd;\n    border-radius: 1.6vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-tag-disabled::before {\n    border-radius: 0.16rem\n}\n}\n.am-tag-close {\n  position: absolute;\n  top: -2.4vw;\n  left: -2.6666667vw;\n  color: #bbb;\n}[data-rem="true"] .am-tag-close {\n  top: -0.24rem;\n  left: -0.2666667rem\n}\n.am-tag-close-active {\n  color: #888;\n}\n.am-tag-close .am-icon {\n  background-color: #fff;\n  border-radius: 2.4vw;\n}[data-rem="true"] .am-tag-close .am-icon {\n  border-radius: 0.24rem\n}\n',""]),e.exports=n},ShuE:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return u}));var a=t("ODXe"),r=t("Qyje"),o=t.n(r),i=t("vDqi"),s=t.n(i),d=new Map,c=e=>{var n=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{d.has(n)||d.set(n,e)})},l=e=>{var n=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(d.has(n)){var t=d.get(n);t(n),d.delete(n)}},u=()=>{var e=!0,n=!1,t=void 0;try{for(var r,o=d[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value,s=Object(a["a"])(i,2),c=s[0],l=s[1];l(c)}}catch(u){n=!0,t=u}finally{try{e||null==o.return||o.return()}finally{if(n)throw t}}d.clear()}},X4g2:function(e,n,t){"use strict";n["a"]=function(e){return Object.keys(e).reduce((function(n,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(n[t]=e[t]),n}),{})}},aJm7:function(e,n,t){"use strict";t.r(n);t("JI3C");var a=t("i79i"),r=t("o0o1"),o=t.n(r),i=t("HaE+"),s=t("q1tI"),d=t.n(s),c=t("0Wn5"),l=t("6ua7"),u=t("Nlzp"),p=t("/MKj"),g=t("ho60");t("JW1o");class m extends s["Component"]{constructor(e){var n;super(e),n=this,this.getDateByFilter=function(){var e=Object(i["a"])(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["b"])({pageNum:t,pageSize:18,typeId:n.typeId});case 2:a=e.sent,a&&(n._data=n._data.concat(a.data.pageData),r=n.props.cartoonType.find(e=>e.id==n.typeId).typeName,n.setState({dataSource:n._data,totalpage:Math.ceil(a.data.total/18),pageNum:t+1,typeName:r}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.onEndReached=e=>{var n=this.state,t=n.pageNum,a=n.totalpage;t<=a?(console.log(333,"\u7ee7\u7eed\u8bf7\u6c42\u6570\u636e",t,a),this.getDateByFilter(t)):(console.log(333,"\u6ca1\u6709\u6570\u636e\u4e86",t,a),this.setState({nomore:!0}))},this.GoTo=e=>()=>{this.props.dispatch(g["default"].ChooseCartoon(e)),this.props.history.push("/cartoonDetail/"+e.id)},this.changeTag=e=>n=>{n&&(this.typeId=e,this._data=[],this.getDateByFilter(1),this.setState({currentTag:e}))},this.row=(e,n,t)=>{var a=e[t];return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"cartoon",onClick:this.GoTo(a)},d.a.createElement("div",{className:"bgimg img",style:{backgroundImage:"url(".concat(a.img,")")}}),d.a.createElement("p",{className:"ell"},a.title)))},this.renderHeader=()=>d.a.createElement("div",{className:"cartoonPage"},d.a.createElement(c["a"],null),d.a.createElement("div",{className:"title"},d.a.createElement("div",{className:"title_text"},d.a.createElement("b",null,this.state.typeName),d.a.createElement("div",{className:"tit_before"}))));var t=this.props.cartoonType[0],a=t.id,r=t.typeName;this.state={currentTag:a,typeName:r,dataSource:[],nomore:!1,pageNum:1,totalpage:1},this.typeId=this.props.cartoonType[0].id,this._data=[]}UNSAFE_componentWillMount(){this.getDateByFilter(1)}render(){var e=this.props.cartoonType,n=this.state,t=n.currentTag,r=n.dataSource,o=n.nomore;return d.a.createElement("div",{className:"TabPage"},d.a.createElement("div",{className:"hs Tag_group"},e.map(e=>d.a.createElement(a["a"],{selected:t==e.id,key:e.id,prefixCls:"tag",onChange:this.changeTag(e.id)},e.typeName))),d.a.createElement(l["a"],{className:"cartoonList",renderHeader:this.renderHeader,dataSource:r,renderRow:this.row,onEndReached:this.onEndReached,nomore:o}))}}function f(e){var n=e.config.moduleCfg&&e.config.moduleCfg.cartoonType;return{cartoonType:n||[]}}n["default"]=Object(p["b"])(f)(m)},az3q:function(e,n,t){var a=t("LboF"),r=t("QCIR");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},"ezp/":function(e,n,t){"use strict";t.r(n),n["default"]="data:image/png;base64,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"},ho60:function(e,n,t){"use strict";t.r(n),t.d(n,"INITIAL_STATE",(function(){return r})),t.d(n,"reducer",(function(){return p}));var a=t("zyFE"),r={moduleCfg:{videoType:[],banner:{}},videoType:null,chooseThematic:null,chooseCartoon:null},o=Object(a["createActions"])({UpdateModule:["payload"],ChooseVideoType:["payload"],ChooseThematic:["payload"],ChooseCartoon:["payload"]}),i=o.Types,s=o.Creators,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{moduleCfg:n.payload})},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{videoType:n.payload})},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{chooseThematic:n.payload})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{chooseCartoon:n.payload})},p=Object(a["createReducer"])(r,{[i.UPDATE_MODULE]:d,[i.CHOOSE_VIDEO_TYPE]:c,[i.CHOOSE_THEMATIC]:l,[i.CHOOSE_CARTOON]:u});n["default"]=s},i79i:function(e,n,t){"use strict";var a=t("QbLZ"),r=t.n(a),o=t("YEIV"),i=t.n(o),s=t("iCc5"),d=t.n(s),c=t("V7oC"),l=t.n(c),u=t("FYw3"),p=t.n(u),g=t("mRg0"),m=t.n(g),f=t("TSYQ"),h=t.n(f),v=t("q1tI"),b=t("uJlo"),w=t("X4g2"),y=t("2ROE"),C=function(e){function n(e){d()(this,n);var t=p()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.onClick=function(){var e=t.props,n=e.disabled,a=e.onChange;if(!n){var r=t.state.selected;t.setState({selected:!r},(function(){a&&a(!r)}))}},t.onTagClose=function(){t.props.onClose&&t.props.onClose(),t.setState({closed:!0},t.props.afterClose)},t.state={selected:e.selected,closed:!1},t}return m()(n,e),l()(n,[{key:"componentWillReceiveProps",value:function(e){this.props.selected!==e.selected&&this.setState({selected:e.selected})}},{key:"render",value:function(){var e,n=this.props,t=n.children,a=n.className,o=n.prefixCls,s=n.disabled,d=n.closable,c=n.small,l=n.style,u=h()(a,o,(e={},i()(e,o+"-normal",!s&&(!this.state.selected||c||d)),i()(e,o+"-small",c),i()(e,o+"-active",this.state.selected&&!s&&!c&&!d),i()(e,o+"-disabled",s),i()(e,o+"-closable",d),e)),p=!d||s||c?null:v["createElement"](b["a"],{activeClassName:o+"-close-active"},v["createElement"]("div",{className:o+"-close",role:"button",onClick:this.onTagClose,"aria-label":"remove tag"},v["createElement"](y["a"],{type:"cross-circle",size:"xs","aria-hidden":"true"})));return this.state.closed?null:v["createElement"]("div",r()({},Object(w["a"])(this.props),{className:u,onClick:this.onClick,style:l}),v["createElement"]("div",{className:o+"-text"},t),p)}}]),n}(v["Component"]);n["a"]=C,C.defaultProps={prefixCls:"am-tag",disabled:!1,selected:!1,closable:!1,small:!1,onChange:function(){},onClose:function(){},afterClose:function(){}}},p58V:function(e,n,t){"use strict";t.r(n),t.d(n,"INITIAL_STATE",(function(){return c})),t.d(n,"userInfo",(function(){return g})),t.d(n,"registerYB",(function(){return m})),t.d(n,"reducer",(function(){return y}));var a=t("VTBJ"),r=t("o0o1"),o=t.n(r),i=t("HaE+"),s=t("zyFE"),d=t("Nlzp"),c={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},l=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),u=l.Types,p=l.Creators;function g(e){return function(){var e=Object(i["a"])(o.a.mark((function e(n,t){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["H"])();case 2:a=e.sent,a&&n(p.UpdateUserInfo(a.data));case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}function m(){return function(){var e=Object(i["a"])(o.a.mark((function e(n,t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}n["default"]=p;var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",n.payload,n.phone),Object.assign({},e,Object(a["a"])({loginInProgress:!1,loggedIn:!0,phone:n.phone},n.payload))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:n.payload})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return n.token&&(n.token.accessToken=null),n},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:n.payload})},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},y=Object(s["createReducer"])(c,{[u.LOGGED_IN]:f,[u.LOGGED_OUT]:w,[u.UPDATE_TOKEN]:h,[u.UPDATE_USER_INFO]:b,[u.CLEAR_ACCESS_TOKEN]:v})},vwip:function(e,n,t){"use strict";n["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,n,t){localStorage.removeItem(e);var a=(new Date).getTime(),r=t||this.age,o={};return o._value=n,o._time=a,o._age=a+r,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var n=!0,t=localStorage.getItem(e),a=(new Date).getTime();return t&&(t=JSON.parse(t),n=a>t._age),n},get:function(e){var n=this.isExpire(e),t=null;return n?(localStorage.removeItem(e),t):(t=localStorage.getItem(e),t=JSON.parse(t),t._value)}}}}]);