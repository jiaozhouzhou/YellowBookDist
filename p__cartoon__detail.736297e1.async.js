(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"+J+N":function(n,e,t){var a=t("LboF"),r=t("okyr");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[n.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});n.exports=i},"+cRp":function(n,e,t){"use strict";(function(n){t.d(e,"b",(function(){return v}));t("HVTF");var a=t("OT5E"),r=t("vDqi"),o=t.n(r),i=t("9kvl"),s=t("ShuE"),c=t("gjeX"),d=t.n(c),l=t("p58V"),u=t("vwip"),m=t("NFKh"),p=!1;function f(n,e,t){var a="",r=e,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];n&&(r=Math.round(Math.random()*(t-e))+e);for(var i=0;i<r;i++)a+=o[Math.round(Math.random()*(o.length-1))];return a}var g=window.baseUrl,h=o.a.create({baseURL:g,timeout:6e4});h.interceptors.request.use((function(e){e.loading&&(a["a"].loading("\u52a0\u8f7d\u4e2d..."),p=!0),Object(s["c"])(e),Object(s["a"])(e),e.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var t=n.store.getState().user.token;t&&(e.headers["userId"]=t.userId,t.accessToken&&(e.headers["token"]=t.accessToken));var r=e.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(r).map((function(n){return n+"="+r[n]})),c=(i=i.concat(["qid="+f(!1,16),"terminal=h5"]).sort()).join("&"),l="sign="+d()(c+o);return e.data=c+"&"+l,e}),(function(n){return n}));m.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),m.enc.Latin1.parse("jfdkwqew!#S#$%78");function b(n,e){var t=u["a"].get(n);if(!t||200!==t.code||Array.isArray(t.data)&&0===t.data.length){for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];return e(...r).then(e=>(u["a"].set(n,e,864e5),e)).catch((function(n){return n}))}return t}h.interceptors.response.use((function(e){Object(s["c"])(e);var t=e.data,r=n.store,o=r.dispatch,c=r.getState;if(200==t.code||-97==t.code)return p&&a["a"].hide(),p=!1,t;if(-1==t.code)a["a"].info(t.data);else if(-98==t.code)a["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),o(l["default"].LoggedOut()),i["a"].push("/login");else if(-99==t.code){o(l["default"].ClearAccessToken());var d=c().user.token;d&&h.post("api/user/applyToken",{refershToken:d.refershToken}).then(n=>{n&&(d.accessToken=n.data.accessToken,d.refershToken=n.data.refershToken,o(l["default"].UpdateToken(d)),location.reload())})}p=!1}),(function(n){if(a["a"].hide(),n.response)switch(n.response.status){case 404:a["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:a["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:a["a"].info("\u8fde\u63a5\u8d85\u65f6");break}p=!1})),e["a"]=h;var v=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var a=e[0],r=d.a.hex(a+"[POST]"+JSON.stringify(e));return b(r,h.post,...e)}}).call(this,t("yLpj"))},1:function(n,e){},"1Cgs":function(n,e,t){"use strict";t("ywh3"),t("+J+N")},2:function(n,e){},3:function(n,e){},4:function(n,e){},"6ua7":function(n,e,t){"use strict";t("UzV/");var a=t("vLen"),r=t("q1tI"),o=t.n(r);class i extends r["Component"]{constructor(n){super(n),this._OnEndReached=()=>{this.setState({isEnd:!0}),this.props.onEndReached&&this.props.onEndReached()},this._RenderFooter=()=>{var n=this.props,e=n.dataSource,t=n.nomore;return 0==e.length?o.a.createElement("div",{style:{textAlign:"center"}},"\u6682\u65e0\u6570\u636e"):this.state.isEnd?o.a.createElement("div",{style:{textAlign:"center"}},t?"\u6ca1\u6709\u66f4\u591a\u4e86~":"\u52a0\u8f7d\u66f4\u591a\u4e2d..."):void 0},this.state={isEnd:!1},this.ds=new a["a"].DataSource({getRowData:(n,e)=>n[e],rowHasChanged:(n,e)=>n!==e})}UNSAFE_componentWillMount(){}render(){var n=this.props,e=n.className,t=n.dataSource,r=n.renderRow,i=n.renderHeader,s=t.map((n,e)=>e);return this.ds=this.ds.cloneWithRows(t,s),o.a.createElement(a["a"],{className:e,ref:n=>this.lv=n,dataSource:this.ds,renderHeader:i,renderRow:r,renderFooter:this._RenderFooter,pageSize:4,onScroll:()=>{console.log("scroll")},scrollRenderAheadDistance:500,onEndReached:this._OnEndReached,onEndReachedThreshold:10,style:{flex:1}})}}i.defaultProps={nomore:!1,loading:!1,dataSource:[],renderSeparator:()=>o.a.createElement("div",{className:"line"})},e["a"]=i},BSlI:function(n,e,t){var a=t("JPst");e=a(!1),e.push([n.i,'.am-button {\n  display: block;\n  outline: 0 none;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  padding: 0;\n  text-align: center;\n  font-size: 4.8vw;\n  height: 12.5333333vw;\n  line-height: 12.5333333vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-word;\n  white-space: nowrap;\n  color: #000;\n  background-color: #fff;\n  border: 1PX solid #ddd;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button {\n  font-size: 0.48rem;\n  height: 1.2533333rem;\n  line-height: 1.2533333rem;\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #ddd;\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-borderfix:before {\n  transform: scale(0.49) !important;\n}\n.am-button.am-button-active {\n  background-color: #ddd;\n}\n.am-button.am-button-disabled {\n  color: rgba(0, 0, 0, 0.3);\n  opacity: 0.6;\n}\n.am-button-primary {\n  color: #fff;\n  background-color: #108ee9;\n  border: 1PX solid #108ee9;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button-primary {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-primary {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-primary::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #108ee9;\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-primary::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-primary.am-button-active {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #0e80d2;\n}\n.am-button-primary.am-button-disabled {\n  color: rgba(255, 255, 255, 0.6);\n  opacity: 0.4;\n}\n.am-button-ghost {\n  color: #108ee9;\n  background-color: transparent;\n  border: 1PX solid #108ee9;\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button-ghost {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #108ee9;\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-ghost::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-ghost.am-button-active {\n  color: rgba(16, 142, 233, 0.6);\n  background-color: transparent;\n  border: 1PX solid rgba(16, 142, 233, 0.6);\n  border-radius: 1.3333333vw;\n}[data-rem="true"] .am-button-ghost.am-button-active {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost.am-button-active {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost.am-button-active::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid rgba(16, 142, 233, 0.6);\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-ghost.am-button-active::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-ghost.am-button-disabled {\n  color: rgba(0, 0, 0, 0.1);\n  border: 1PX solid rgba(0, 0, 0, 0.1);\n  border-radius: 1.3333333vw;\n  opacity: 1;\n}[data-rem="true"] .am-button-ghost.am-button-disabled {\n  border-radius: 0.1333333rem\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost.am-button-disabled {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost.am-button-disabled::before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid rgba(0, 0, 0, 0.1);\n    border-radius: 2.6666667vw;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }[data-rem="true"] html:not([data-scale]) .am-button-ghost.am-button-disabled::before {\n    border-radius: 0.2666667rem\n}\n}\n.am-button-warning {\n  color: #fff;\n  background-color: #e94f4f;\n}\n.am-button-warning.am-button-active {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #d24747;\n}\n.am-button-warning.am-button-disabled {\n  color: rgba(255, 255, 255, 0.6);\n  opacity: 0.4;\n}\n.am-button-inline {\n  display: inline-block;\n  padding: 0 4vw;\n}[data-rem="true"] .am-button-inline {\n  padding: 0 0.4rem\n}\n.am-button-inline.am-button-icon {\n  display: inline-flex;\n}\n.am-button-small {\n  font-size: 3.4666667vw;\n  height: 8vw;\n  line-height: 8vw;\n  padding: 0 4vw;\n}[data-rem="true"] .am-button-small {\n  font-size: 0.3466667rem;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  padding: 0 0.4rem\n}\n.am-button-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.am-button > .am-button-icon {\n  margin-right: 0.5em;\n}\n',""]),n.exports=e},FZD6:function(n,e,t){"use strict";t.r(e);t("XGli");var a=t("NHyu"),r=t("o0o1"),o=t.n(r),i=(t("HVTF"),t("OT5E")),s=t("HaE+"),c=t("q1tI"),d=t.n(c),l=t("rY4l"),u=t("aUGm"),m=t("6ua7"),p=t("Nlzp"),f=t("/MKj");t("JW1o");class g extends c["Component"]{constructor(n){var e;super(n),e=this,this.sort=()=>{var n=JSON.parse(JSON.stringify(this.state.dataSource)).reverse();this.setState({dataSource:n,sort:this.state.sort>0?-1:1})},this.awesome=Object(s["a"])(o.a.mark((function n(){var t;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.handle){n.next=2;break}return n.abrupt("return",i["a"].fail("\u60a8\u5df2\u7ecf\u8d5e\u8fc7\u8fd9\u672c\u52a8\u6f2b"));case 2:return n.next=4,Object(p["B"])({id:e.id});case 4:t=n.sent,t&&(e.handle=!0,e.setState({praise:e.state.praise+1}));case 6:case"end":return n.stop()}}),n)}))),this.GoTo=n=>()=>{this.props.history.push("/cartooninfo/"+n)},this.renderHeader=()=>{var n=this.props.chooseCartoon,e=this.state,t=e.praise,r=e.sort;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"bgimg cartoon_head",style:{backgroundImage:"url(".concat(n.img,")")}}),d.a.createElement("div",{className:"cartoon_btn_group"},d.a.createElement(a["a"],{className:"btn-read"},"\u5f00\u59cb\u9605\u8bfb",d.a.createElement("b",null,"\uff08\u7b2c\u4e00\u8bdd\uff09")),d.a.createElement(a["a"],{className:"btn-read gray",onClick:this.awesome},d.a.createElement(u["a"],{type:"thumb",color:"#ffa200"}),d.a.createElement("p",null,"\u597d\u770b"),d.a.createElement("b",null,"\uff08",t,"\uff09"))),d.a.createElement("div",{className:"line"}),d.a.createElement("div",{className:"sort"},d.a.createElement("div",null),r>0?d.a.createElement("div",{onClick:this.sort,className:"srig"},"\u6b63\u5e8f",d.a.createElement(u["a"],{type:"ctop",color:"#ffa200"})):d.a.createElement("div",{onClick:this.sort,className:"srig"},"\u5012\u5e8f",d.a.createElement(u["a"],{type:"cdown",color:"#ffa200"}))))},this.row=(n,e,t)=>{var a=n[t];return d.a.createElement("div",{className:"chapter",onClick:this.GoTo(a.chapterId)},d.a.createElement("p",{className:"tit"},a.chapter),d.a.createElement("div",{className:"right"},d.a.createElement(u["a"],{type:"handle",color:"#ffa200"}),d.a.createElement("p",{className:"read"},"\u9605\u8bfb")))},this.state={img:"",dataSource:[],praise:0,nomore:!0,pageNum:1,totalpage:1,sort:1},this._data=[],this.id=this.props.match.params.id,this.handle=!1}UNSAFE_componentWillMount(){var n=this;return Object(s["a"])(o.a.mark((function e(){var t,a,r,i,s,c;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["k"])({id:n.id});case 2:t=e.sent,t&&(a=t.data,r=a.img,i=a.pageData,s=a.praise,c=a.total,n._data=n._data.concat(i),n.setState({dataSource:n._data,totalpage:Math.ceil(c/18),img:r,praise:s}));case 4:case"end":return e.stop()}}),e)})))()}render(){var n=this.state,e=n.dataSource,t=n.nomore;return d.a.createElement(d.a.Fragment,null,d.a.createElement(l["a"],{title:"\u7cbe\u5f69\u6f2b\u753b",radius:!1}),d.a.createElement(m["a"],{renderHeader:this.renderHeader,className:"cartoonChapter",dataSource:e,renderRow:this.row,nomore:t}))}}function h(n){return{chooseCartoon:n.config.chooseCartoon}}e["default"]=Object(f["b"])(h)(g)},Ff2n:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t("zLVn");function r(n,e){if(null==n)return{};var t,r,o=Object(a["a"])(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}},JW1o:function(n,e,t){var a=t("LboF"),r=t("K4HT");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[n.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});n.exports=i},K4HT:function(n,e,t){var a=t("JPst"),r=t("HeW1"),o=t("ezp/");e=a(!1);var i=r(o);e.push([n.i,'.cartoonPage .title {\n  overflow: hidden;\n  padding-left: 4vw;\n  padding-right: 4vw;\n}[data-rem="true"] .cartoonPage .title {\n  padding-left: 0.4rem;\n  padding-right: 0.4rem\n}\n.cartoonPage .title_text {\n  font-size: 4.2666667vw;\n  font-weight: bold;\n  color: #2d2d2d;\n}[data-rem="true"] .cartoonPage .title_text {\n  font-size: 0.4266667rem\n}\n.cartoonPage .title_text:after {\n  display: none;\n}\n.cartoonPage .title_text b {\n  z-index: 1;\n  position: relative;\n}\n.cartoonPage .title_text .tit_before {\n  width: 10.1333333vw;\n  height: 14.6666667vw;\n  background: url('+i+') center;\n  background-size: cover;\n  display: block;\n  position: absolute;\n  right: -5.8666667vw;\n  top: 0;\n  z-index: 0;\n}[data-rem="true"] .cartoonPage .title_text .tit_before {\n  width: 1.0133333rem;\n  height: 1.4666667rem;\n  right: -0.5866667rem\n}\n.cartoonPage .li {\n  padding: 0 4vw 4vw;\n  border-bottom: 1px solid #e8e8e8;\n}[data-rem="true"] .cartoonPage .li {\n  padding: 0 0.4rem 0.4rem;\n  border-bottom: 1px solid #e8e8e8\n}\n.cartoonPage .li:last-child {\n  border: 0;\n}\n.cartoonPage .dm li {\n  width: 30.6666667vw;\n  display: block;\n  margin-right: 2.6666667vw;\n}[data-rem="true"] .cartoonPage .dm li {\n  width: 3.0666667rem;\n  margin-right: 0.2666667rem\n}\n.cartoonPage .dm li .img {\n  width: 30.6666667vw;\n  height: 40vw;\n}[data-rem="true"] .cartoonPage .dm li .img {\n  width: 3.0666667rem;\n  height: 4rem\n}\n.cartoonPage .dm li p {\n  margin-top: 1.6vw;\n  font-size: 3.7333333vw;\n  color: #2d2d2d;\n}[data-rem="true"] .cartoonPage .dm li p {\n  margin-top: 0.16rem;\n  font-size: 0.3733333rem\n}\n.cartoon_list_type {\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #e8e8e8;\n  padding-top: 1.3333333vw;\n  padding-bottom: 1.3333333vw;\n  background-color: #fff;\n}[data-rem="true"] .cartoon_list_type {\n  border-bottom: 1px solid #e8e8e8;\n  padding-top: 0.1333333rem;\n  padding-bottom: 0.1333333rem\n}\n.cartoon_list_type .tag {\n  margin-bottom: 2.6666667vw;\n}[data-rem="true"] .cartoon_list_type .tag {\n  margin-bottom: 0.2666667rem\n}\n.cartoonList .list-view-section-body {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 2vw 2.6666667vw;\n}[data-rem="true"] .cartoonList .list-view-section-body {\n  padding: 0 0.2rem 0.2666667rem\n}\n.cartoonList .cartoon {\n  width: 28vw;\n  margin: 0 2vw 5.3333333vw;\n}[data-rem="true"] .cartoonList .cartoon {\n  width: 2.8rem;\n  margin: 0 0.2rem 0.5333333rem\n}\n.cartoonList .cartoon .img {\n  width: 100%;\n  height: 36vw;\n}[data-rem="true"] .cartoonList .cartoon .img {\n  height: 3.6rem\n}\n.cartoonList .cartoon p {\n  margin-top: 1.6vw;\n  font-size: 3.7333333vw;\n  color: #2d2d2d;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-break: break-all;\n  white-space: inherit!important;\n}[data-rem="true"] .cartoonList .cartoon p {\n  margin-top: 0.16rem;\n  font-size: 0.3733333rem\n}\n.cartoon_head {\n  width: 100vw;\n  height: 48.1333333vw;\n  border-radius: 0;\n}[data-rem="true"] .cartoon_head {\n  width: 10rem;\n  height: 4.8133333rem\n}\n.cartoon_btn_group {\n  padding: 4vw;\n  display: flex;\n}[data-rem="true"] .cartoon_btn_group {\n  padding: 0.4rem\n}\n.cartoon_btn_group .btn-read {\n  width: 49.3333333vw;\n  height: 10.6666667vw;\n  line-height: 10.6666667vw;\n  background-color: #ffa200;\n  border-radius: 1.3333333vw;\n  color: #fff;\n  font-size: 4vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}[data-rem="true"] .cartoon_btn_group .btn-read {\n  width: 4.9333333rem;\n  height: 1.0666667rem;\n  line-height: 1.0666667rem;\n  border-radius: 0.1333333rem;\n  font-size: 0.4rem\n}\n.cartoon_btn_group .btn-read b {\n  font-size: 3.2vw;\n}[data-rem="true"] .cartoon_btn_group .btn-read b {\n  font-size: 0.32rem\n}\n.cartoon_btn_group .btn-read.gray {\n  width: 40vw;\n  background-color: #f5f5f5;\n  color: #ffa200;\n  margin-left: 2.6666667vw;\n}[data-rem="true"] .cartoon_btn_group .btn-read.gray {\n  width: 4rem;\n  margin-left: 0.2666667rem\n}\n.cartoon_btn_group .btn-read:before {\n  display: none!important;\n}\n.cartoon_btn_group .btn-read .am-icon {\n  margin-right: 1.3333333vw;\n  margin-top: -1.3333333vw;\n}[data-rem="true"] .cartoon_btn_group .btn-read .am-icon {\n  margin-right: 0.1333333rem;\n  margin-top: -0.1333333rem\n}\n.cartoonChapter .am-list-header .sort {\n  width: 100%;\n  height: 10.6666667vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 4vw;\n  color: #777;\n}[data-rem="true"] .cartoonChapter .am-list-header .sort {\n  height: 1.0666667rem;\n  padding: 0 0.4rem\n}\n.cartoonChapter .am-list-header .srig {\n  display: flex;\n}\n.cartoonChapter .am-list-header .srig .am-icon {\n  margin-left: 1.3333333vw;\n}[data-rem="true"] .cartoonChapter .am-list-header .srig .am-icon {\n  margin-left: 0.1333333rem\n}\n.cartoonChapter .chapter {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4vw;\n  border-top: 1px solid #f4f4f4;\n}[data-rem="true"] .cartoonChapter .chapter {\n  padding: 0.4rem;\n  border-top: 1px solid #f4f4f4\n}\n.cartoonChapter .chapter .tit {\n  font-size: 3.7333333vw;\n  color: #2d2d2d;\n}[data-rem="true"] .cartoonChapter .chapter .tit {\n  font-size: 0.3733333rem\n}\n.cartoonChapter .chapter .read {\n  font-size: 2.6666667vw;\n  color: #777;\n}[data-rem="true"] .cartoonChapter .chapter .read {\n  font-size: 0.2666667rem\n}\n.cartoonInfo .placeholder {\n  width: 100%;\n  height: 13.3333333vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}[data-rem="true"] .cartoonInfo .placeholder {\n  height: 1.3333333rem\n}\n.cartoonInfo .CartoonImg {\n  width: 100%;\n  display: block;\n}\n',""]),n.exports=e},NHyu:function(n,e,t){"use strict";var a=t("QbLZ"),r=t.n(a),o=t("YEIV"),i=t.n(o),s=t("iCc5"),c=t.n(s),d=t("V7oC"),l=t.n(d),u=t("FYw3"),m=t.n(u),p=t("mRg0"),f=t.n(p),g=t("TSYQ"),h=t.n(g),b=t("q1tI"),v=t("uJlo"),w=t("2ROE"),y=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)e.indexOf(a[r])<0&&(t[a[r]]=n[a[r]])}return t},x=/^[\u4e00-\u9fa5]{2}$/,k=x.test.bind(x);function N(n){return"string"===typeof n}function E(n){return N(n.type)&&k(n.props.children)?b["cloneElement"](n,{},n.props.children.split("").join(" ")):N(n)?(k(n)&&(n=n.split("").join(" ")),b["createElement"]("span",null,n)):n}var C=function(n){function e(){return c()(this,e),m()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return f()(e,n),l()(e,[{key:"render",value:function(){var n,e=this.props,t=e.children,a=e.className,o=e.prefixCls,s=e.type,c=e.size,d=e.inline,l=e.disabled,u=e.icon,m=e.loading,p=e.activeStyle,f=e.activeClassName,g=e.onClick,x=y(e,["children","className","prefixCls","type","size","inline","disabled","icon","loading","activeStyle","activeClassName","onClick"]),k=m?"loading":u,N=h()(o,a,(n={},i()(n,o+"-primary","primary"===s),i()(n,o+"-ghost","ghost"===s),i()(n,o+"-warning","warning"===s),i()(n,o+"-small","small"===c),i()(n,o+"-inline",d),i()(n,o+"-disabled",l),i()(n,o+"-loading",m),i()(n,o+"-icon",!!k),n)),C=b["Children"].map(t,E),O=void 0;if("string"===typeof k)O=b["createElement"](w["a"],{"aria-hidden":"true",type:k,size:"small"===c?"xxs":"md",className:o+"-icon"});else if(k){var A=k.props&&k.props.className,P=h()("am-icon",o+"-icon","small"===c?"am-icon-xxs":"am-icon-md");O=b["cloneElement"](k,{className:A?A+" "+P:P})}return b["createElement"](v["a"],{activeClassName:f||(p?o+"-active":void 0),disabled:l,activeStyle:p},b["createElement"]("a",r()({role:"button",className:N},x,{onClick:l?void 0:g,"aria-disabled":l}),O,C))}}]),e}(b["Component"]);C.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,activeStyle:{}},e["a"]=C},Nlzp:function(n,e,t){"use strict";t.d(e,"f",(function(){return r})),t.d(e,"v",(function(){return o})),t.d(e,"y",(function(){return i})),t.d(e,"e",(function(){return s})),t.d(e,"j",(function(){return c})),t.d(e,"z",(function(){return d})),t.d(e,"I",(function(){return l})),t.d(e,"A",(function(){return u})),t.d(e,"H",(function(){return m})),t.d(e,"w",(function(){return p})),t.d(e,"C",(function(){return f})),t.d(e,"c",(function(){return g})),t.d(e,"n",(function(){return h})),t.d(e,"g",(function(){return b})),t.d(e,"s",(function(){return v})),t.d(e,"u",(function(){return w})),t.d(e,"J",(function(){return y})),t.d(e,"t",(function(){return x})),t.d(e,"o",(function(){return k})),t.d(e,"i",(function(){return N})),t.d(e,"F",(function(){return E})),t.d(e,"G",(function(){return C})),t.d(e,"m",(function(){return O})),t.d(e,"l",(function(){return A})),t.d(e,"q",(function(){return P})),t.d(e,"d",(function(){return S})),t.d(e,"x",(function(){return j})),t.d(e,"p",(function(){return R})),t.d(e,"r",(function(){return z})),t.d(e,"D",(function(){return T})),t.d(e,"E",(function(){return I})),t.d(e,"h",(function(){return L})),t.d(e,"b",(function(){return F})),t.d(e,"k",(function(){return H})),t.d(e,"a",(function(){return J})),t.d(e,"B",(function(){return B}));var a=t("+cRp"),r=n=>a["a"].post("api/user/getVerifyCode",n),o=n=>a["a"].post("api/user/login",n,{loading:!0}),i=n=>a["a"].post("api/user/register",n,{loading:!0}),s=n=>a["a"].post("api/user/SendCode",n),c=n=>a["a"].post("api/user/forgetPass",n,{loading:!0}),d=n=>a["a"].post("api/user/resetPass",n,{loading:!0}),l=n=>a["a"].post("api/user/getRights",n),u=n=>a["a"].post("api/user/sendFeedback",n,{loading:!0}),m=n=>a["a"].post("api/user/getUserInfo",n),p=n=>a["a"].post("api/site/notice",n),f=n=>a["a"].post("api/site/moduleCfg",n),g=n=>a["a"].post("api/video/Home",n),h=n=>a["a"].post("api/video/getList",n),b=n=>a["a"].post("api/video/VideoRecommon",n),v=n=>a["a"].post("api/video/getVideoInfo",n),w=n=>a["a"].post("api/video/getVideoRelation",n),y=n=>a["a"].post("api/video/watchingVideo",n),x=n=>a["a"].post("api/video/getVideoRank",n),k=n=>a["a"].post("api/video/getMoiveHis",n),N=n=>a["a"].post("api/video/discoveryPage",n),E=n=>a["a"].post("api/video/thematicList",n),C=n=>a["a"].post("api/video/thematicVideo",n),O=n=>a["a"].post("api/video/getGirlList",n),A=n=>a["a"].post("api/video/getGirlInfo",n),P=n=>a["a"].post("api/video/getSearchRank",n),S=n=>a["a"].post("api/recharge/PayConfig",n),j=n=>a["a"].post("api/recharge/pay",n,{loading:!0}),R=n=>a["a"].post("api/user/getOrder",n,{loading:!0}),z=n=>a["a"].post("api/user/getSpread",n),T=n=>a["a"].post("api/user/spreadInfo",n),I=n=>Object(a["b"])("api/site/spreadRules",n),L=n=>a["a"].post("api/fiction/getList",n),F=n=>a["a"].post("api/fiction/CartoonList",n),H=n=>a["a"].post("api/fiction/getChapter",n),J=n=>a["a"].post("api/fiction/CartoonInfo",n),B=n=>a["a"].post("api/fiction/setPraise",n)},ShuE:function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"c",(function(){return l})),t.d(e,"b",(function(){return u}));var a=t("ODXe"),r=t("Qyje"),o=t.n(r),i=t("vDqi"),s=t.n(i),c=new Map,d=n=>{var e=[n.method,n.url,o.a.stringify(n.params),o.a.stringify(n.data)].join("&");n.cancelToken=n.cancelToken||new s.a.CancelToken(n=>{c.has(e)||c.set(e,n)})},l=n=>{var e=[n.method,n.url,o.a.stringify(n.params),o.a.stringify(n.data)].join("&");if(c.has(e)){var t=c.get(e);t(e),c.delete(e)}},u=()=>{var n=!0,e=!1,t=void 0;try{for(var r,o=c[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){var i=r.value,s=Object(a["a"])(i,2),d=s[0],l=s[1];l(d)}}catch(u){e=!0,t=u}finally{try{n||null==o.return||o.return()}finally{if(e)throw t}}c.clear()}},TJML:function(n,e,t){var a=t("LboF"),r=t("BSlI");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[n.i,r,""]]);var o={base:0,insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});n.exports=i},XGli:function(n,e,t){"use strict";t("ywh3"),t("D2jH"),t("TJML")},aUGm:function(n,e,t){"use strict";var a=t("Ff2n"),r=t("q1tI"),o=t.n(r),i=n=>{var e=n.type,t=n.color,r=n.className,i=void 0===r?"":r,s=n.size,c=void 0===s?"md":s;Object(a["a"])(n,["type","color","className","size"]);return o.a.createElement("svg",{className:"am-icon am-icon-".concat(e.substr(1)," am-icon-").concat(c," ").concat(i),"aria-hidden":"true",color:t},o.a.createElement("use",{xlinkHref:"#icon"+e}))};e["a"]=i},"ezp/":function(n,e,t){"use strict";t.r(e),e["default"]="data:image/png;base64,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"},okyr:function(n,e,t){var a=t("JPst");e=a(!1),e.push([n.i,'.am-navbar {\n  display: flex;\n  align-items: center;\n  height: 12vw;\n  background-color: #108ee9;\n  color: #fff;\n}[data-rem="true"] .am-navbar {\n  height: 1.2rem\n}\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  flex: 1 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.am-navbar-left {\n  padding-left: 4vw;\n  font-size: 4.2666667vw;\n}[data-rem="true"] .am-navbar-left {\n  padding-left: 0.4rem;\n  font-size: 0.4266667rem\n}\n.am-navbar-left-icon {\n  margin-right: 1.3333333vw;\n  display: inherit;\n}[data-rem="true"] .am-navbar-left-icon {\n  margin-right: 0.1333333rem\n}\n.am-navbar-title {\n  justify-content: center;\n  font-size: 4.8vw;\n  white-space: nowrap;\n}[data-rem="true"] .am-navbar-title {\n  font-size: 0.48rem\n}\n.am-navbar-right {\n  justify-content: flex-end;\n  font-size: 4.2666667vw;\n  margin-right: 4vw;\n}[data-rem="true"] .am-navbar-right {\n  font-size: 0.4266667rem;\n  margin-right: 0.4rem\n}\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9;\n}\n.am-navbar-light .am-navbar-title {\n  color: #000;\n}\n',""]),n.exports=e},p58V:function(n,e,t){"use strict";t.r(e),t.d(e,"INITIAL_STATE",(function(){return d})),t.d(e,"userInfo",(function(){return p})),t.d(e,"registerYB",(function(){return f})),t.d(e,"reducer",(function(){return y}));var a=t("VTBJ"),r=t("o0o1"),o=t.n(r),i=t("HaE+"),s=t("zyFE"),c=t("Nlzp"),d={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},l=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),u=l.Types,m=l.Creators;function p(n){return function(){var n=Object(i["a"])(o.a.mark((function n(e,t){var a;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["H"])();case 2:a=n.sent,a&&e(m.UpdateUserInfo(a.data));case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}function f(){return function(){var n=Object(i["a"])(o.a.mark((function n(e,t){return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}e["default"]=m;var g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",e.payload,e.phone),Object.assign({},n,Object(a["a"])({loginInProgress:!1,loggedIn:!0,phone:e.phone},e.payload))},h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;return Object.assign({},n,{token:e.payload})},b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(n)));return e.token&&(e.token.accessToken=null),e},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;return Object.assign({},n,{userInfo:e.payload})},w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;arguments.length>1&&arguments[1];return Object.assign({},n,{loggedIn:!1,userInfo:null,token:null})},y=Object(s["createReducer"])(d,{[u.LOGGED_IN]:g,[u.LOGGED_OUT]:w,[u.UPDATE_TOKEN]:h,[u.UPDATE_USER_INFO]:v,[u.CLEAR_ACCESS_TOKEN]:b})},rY4l:function(n,e,t){"use strict";t("1Cgs");var a=t("zvbH"),r=(t("D2jH"),t("2ROE")),o=t("q1tI"),i=t.n(o),s=t("9kvl");class c extends o["Component"]{constructor(n){super(n),this.GoBack=()=>{s["a"].goBack()}}render(){var n=this.props,e=n.hidLift,t=n.rightContent,o=n.title,s=n.noclass,c=n.bottomColor,d=n.radius;return s?i.a.createElement(a["a"],{icon:e?null:i.a.createElement(r["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:t},o):i.a.createElement("div",{className:"public_header"},i.a.createElement(a["a"],{icon:e?null:i.a.createElement(r["a"],{type:"left",size:"lg",onClick:this.GoBack}),rightContent:t},o),d&&i.a.createElement("div",{className:"public_radius",style:{backgroundColor:c}}))}}c.defaultProps={noclass:!1,radius:!0},e["a"]=c},vwip:function(n,e,t){"use strict";e["a"]={age:6e5,setAge:function(n){return this.age=n,this},set:function(n,e,t){localStorage.removeItem(n);var a=(new Date).getTime(),r=t||this.age,o={};return o._value=e,o._time=a,o._age=a+r,localStorage.setItem(n,JSON.stringify(o)),this},isExpire:function(n){var e=!0,t=localStorage.getItem(n),a=(new Date).getTime();return t&&(t=JSON.parse(t),e=a>t._age),e},get:function(n){var e=this.isExpire(n),t=null;return e?(localStorage.removeItem(n),t):(t=localStorage.getItem(n),t=JSON.parse(t),t._value)}}},zvbH:function(n,e,t){"use strict";var a=t("QbLZ"),r=t.n(a),o=t("iCc5"),i=t.n(o),s=t("V7oC"),c=t.n(s),d=t("FYw3"),l=t.n(d),u=t("mRg0"),m=t.n(u),p=t("TSYQ"),f=t.n(p),g=t("q1tI"),h=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)e.indexOf(a[r])<0&&(t[a[r]]=n[a[r]])}return t},b=function(n){function e(){return i()(this,e),l()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return m()(e,n),c()(e,[{key:"render",value:function(){var n=this.props,e=n.prefixCls,t=n.className,a=n.children,o=n.mode,i=n.icon,s=n.onLeftClick,c=n.leftContent,d=n.rightContent,l=h(n,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return g["createElement"]("div",r()({},l,{className:f()(t,e,e+"-"+o)}),g["createElement"]("div",{className:e+"-left",role:"button",onClick:s},i?g["createElement"]("span",{className:e+"-left-icon","aria-hidden":"true"},i):null,c),g["createElement"]("div",{className:e+"-title"},a),g["createElement"]("div",{className:e+"-right"},d))}}]),e}(g["Component"]);e["a"]=b,b.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}}}}]);