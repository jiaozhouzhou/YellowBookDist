(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"+cRp":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return y}));n("HVTF");var a=n("OT5E"),r=n("vDqi"),i=n.n(r),o=n("9kvl"),s=n("ShuE"),c=n("gjeX"),l=n.n(c),u=n("p58V"),d=n("vwip"),h=n("NFKh"),p=!1;function f(e,t,n){var a="",r=t,i=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(r=Math.round(Math.random()*(n-t))+t);for(var o=0;o<r;o++)a+=i[Math.round(Math.random()*(i.length-1))];return a}var m=window.baseUrl,g=i.a.create({baseURL:m,timeout:6e4});g.interceptors.request.use((function(t){t.loading&&(a["a"].loading("\u52a0\u8f7d\u4e2d..."),p=!0),Object(s["c"])(t),Object(s["a"])(t),t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var n=e.store.getState().user.token;n&&(t.headers["userId"]=n.userId,n.accessToken&&(t.headers["token"]=n.accessToken));var r=t.data||{},i="fdsfewEQRWE@#$!1FDSAF3424FF",o=Object.keys(r).map((function(e){return e+"="+r[e]})),c=(o=o.concat(["qid="+f(!1,16),"terminal=h5"]).sort()).join("&"),u="sign="+l()(c+i);return t.data=c+"&"+u,t}),(function(e){return e}));h.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),h.enc.Latin1.parse("jfdkwqew!#S#$%78");function v(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=d["a"].get(e);return!i||200!==i.code||Array.isArray(i.data)&&0===i.data.length?t(...a).then(t=>(d["a"].set(e,t,a[2]),t)).catch((function(e){return e})):i}g.interceptors.response.use((function(t){Object(s["c"])(t);var n=t.data,r=e.store,i=r.dispatch,c=r.getState;if(200==n.code||-97==n.code)return p&&a["a"].hide(),p=!1,n;if(-1==n.code)a["a"].info(n.data);else if(-98==n.code)a["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),i(u["default"].LoggedOut()),o["a"].push("/login");else if(-99==n.code){i(u["default"].ClearAccessToken());var l=c().user.token;l&&g.post("api/user/applyToken",{refershToken:l.refershToken}).then(e=>{e&&(l.accessToken=e.data.accessToken,l.refershToken=e.data.refershToken,i(u["default"].UpdateToken(l)),location.reload())})}p=!1}),(function(e){if(a["a"].hide(),e.response)switch(e.response.status){case 404:a["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:a["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:a["a"].info("\u8fde\u63a5\u8d85\u65f6");break}p=!1})),t["a"]=g;var y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t[0],r=l.a.hex(a+"[POST]"+JSON.stringify(t));return v(r,g.post,...t)}}).call(this,n("yLpj"))},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"6ua7":function(e,t,n){"use strict";n("UzV/");var a=n("vLen"),r=n("q1tI"),i=n.n(r);class o extends r["Component"]{constructor(e){super(e),this._OnEndReached=()=>{this.setState({isEnd:!0}),this.props.onEndReached&&this.props.onEndReached()},this._RenderFooter=()=>{var e=this.props,t=e.dataSource,n=e.nomore;return 0==t.length?i.a.createElement("div",{style:{textAlign:"center"}},"\u6682\u65e0\u6570\u636e"):this.state.isEnd?i.a.createElement("div",{style:{textAlign:"center"}},n?"\u6ca1\u6709\u66f4\u591a\u4e86~":"\u52a0\u8f7d\u66f4\u591a\u4e2d..."):void 0},this.state={isEnd:!1},this.ds=new a["a"].DataSource({getRowData:(e,t)=>e[t],rowHasChanged:(e,t)=>e!==t})}UNSAFE_componentWillMount(){}render(){var e=this.props,t=e.className,n=e.dataSource,r=e.renderRow,o=e.renderHeader,s=n.map((e,t)=>t);return this.ds=this.ds.cloneWithRows(n,s),i.a.createElement(a["a"],{className:t,ref:e=>this.lv=e,dataSource:this.ds,renderHeader:o,renderRow:r,renderFooter:this._RenderFooter,pageSize:4,onScroll:()=>{console.log("scroll")},scrollRenderAheadDistance:500,onEndReached:this._OnEndReached,onEndReachedThreshold:10,style:{flex:1}})}}o.defaultProps={nomore:!1,loading:!1,dataSource:[],renderSeparator:()=>i.a.createElement("div",{className:"line"})},t["a"]=o},K0Hf:function(e,t,n){"use strict";n.r(t);n("DR4Q");var a=n("gumZ"),r=(n("ywh3"),n("kMp1"),n("QbLZ")),i=n.n(r),o=n("YEIV"),s=n.n(o),c=n("iCc5"),l=n.n(c),u=n("V7oC"),d=n.n(u),h=n("FYw3"),p=n.n(h),f=n("mRg0"),m=n.n(f),g=n("TSYQ"),v=n.n(g),y=n("q1tI"),b=n.n(y),w=n("17x9"),k=n("uJlo"),E=n("X4g2");function C(e,t,n,a){var r={};if(t&&t.antLocale&&t.antLocale[n])r=t.antLocale[n];else{var o=a();r=o["default"]||o}var s=i()({},r);return e.locale&&(s=i()({},s,e.locale),e.locale.lang&&(s.lang=i()({},r.lang,e.locale.lang))),s}function x(){}var S={prefixCls:"am-search",placeholder:"",onSubmit:x,onChange:x,onFocus:x,onBlur:x,onClear:x,showCancelButton:!1,disabled:!1};function D(e){return window.requestAnimationFrame?window.requestAnimationFrame(e):window.setTimeout(e,1)}function T(e){window.cancelAnimationFrame?window.cancelAnimationFrame(e):window.clearTimeout(e)}var O=function(e){function t(e){l()(this,t);var n=p()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit&&n.props.onSubmit(n.state.value||""),n.inputRef&&n.inputRef.blur()},n.onChange=function(e){n.state.focus||n.setState({focus:!0});var t=e.target.value;"value"in n.props||n.setState({value:t}),n.props.onChange&&n.props.onChange(t)},n.onFocus=function(){n.setState({focus:!0}),n.firstFocus=!0,n.props.onFocus&&n.props.onFocus()},n.onBlur=function(){n.onBlurTimeout=D((function(){n.blurFromOnClear||document.activeElement!==n.inputRef&&n.setState({focus:!1}),n.blurFromOnClear=!1})),n.props.onBlur&&(setTimeout((function(){document.body&&(document.body.scrollTop=document.body.scrollTop)}),100),n.props.onBlur())},n.onClear=function(){n.doClear()},n.doClear=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];n.blurFromOnClear=e,"value"in n.props||n.setState({value:""}),n.props.onClear&&n.props.onClear(""),n.props.onChange&&n.props.onChange(""),e&&n.focus()},n.onCancel=function(){n.props.onCancel?n.props.onCancel(n.state.value||""):n.doClear(!1)},n.focus=function(){n.inputRef&&n.inputRef.focus()};var a=void 0;return a="value"in e?e.value||"":"defaultValue"in e?e.defaultValue:"",n.state={value:a,focus:!1},n}return m()(t,e),d()(t,[{key:"componentDidMount",value:function(){if(this.rightBtnRef){var e=window.getComputedStyle(this.rightBtnRef);this.rightBtnInitMarginleft=e.marginLeft}this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){if(this.syntheticPhRef)if(this.inputContainerRef&&this.inputContainerRef.className.indexOf(this.props.prefixCls+"-start")>-1){if(this.syntheticPhContainerRef){var e=this.syntheticPhContainerRef.getBoundingClientRect().width;this.syntheticPhRef.style.width=Math.ceil(e)+"px"}!this.props.showCancelButton&&this.rightBtnRef&&(this.rightBtnRef.style.marginRight="0")}else this.syntheticPhRef.style.width="100%",!this.props.showCancelButton&&this.rightBtnRef&&(this.rightBtnRef.style.marginRight="-"+(this.rightBtnRef.offsetWidth+(null!=this.rightBtnInitMarginleft?parseInt(this.rightBtnInitMarginleft,10):0))+"px")}},{key:"componentWillReceiveProps",value:function(e){"value"in e&&e.value!==this.state.value&&this.setState({value:e.value})}},{key:"componentWillUnmount",value:function(){this.onBlurTimeout&&(T(this.onBlurTimeout),this.onBlurTimeout=null)}},{key:"render",value:function(){var e,t=this,a=this.props,r=a.prefixCls,o=a.showCancelButton,c=a.disabled,l=a.placeholder,u=a.className,d=a.style,h=a.maxLength,p=C(this.props,this.context,"SearchBar",(function(){return n("hZiy")})),f=p.cancelText,m=this.state,g=m.value,b=m.focus,w=v()(r,u,s()({},r+"-start",!!(b||g&&g.length>0))),x=v()(r+"-clear",s()({},r+"-clear-show",!!(b&&g&&g.length>0))),S=v()(r+"-cancel",(e={},s()(e,r+"-cancel-show",!!(o||b||g&&g.length>0)),s()(e,r+"-cancel-anim",this.firstFocus),e));return y["createElement"]("form",{onSubmit:this.onSubmit,className:w,style:d,ref:function(e){return t.inputContainerRef=e},action:"#"},y["createElement"]("div",{className:r+"-input"},y["createElement"]("div",{className:r+"-synthetic-ph",ref:function(e){return t.syntheticPhRef=e}},y["createElement"]("span",{className:r+"-synthetic-ph-container",ref:function(e){return t.syntheticPhContainerRef=e}},y["createElement"]("i",{className:r+"-synthetic-ph-icon"}),y["createElement"]("span",{className:r+"-synthetic-ph-placeholder",style:{visibility:l&&!g?"visible":"hidden"}},l))),y["createElement"]("input",i()({type:"search",className:r+"-value",value:g,disabled:c,placeholder:l,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,ref:function(e){return t.inputRef=e},maxLength:h},Object(E["a"])(this.props))),y["createElement"](k["a"],{activeClassName:r+"-clear-active"},y["createElement"]("a",{onClick:this.onClear,className:x}))),y["createElement"]("div",{className:S,onClick:this.onCancel,ref:function(e){return t.rightBtnRef=e}},this.props.cancelText||f))}}]),t}(y["Component"]),R=O;O.defaultProps=S,O.contextTypes={antLocale:w["object"]};var F=n("VTBJ"),N=n("o0o1"),I=n.n(N),_=n("HaE+"),j=n("/MKj"),B=n("Nlzp"),P=n("55Ip"),L=n("oVTX"),A=n("6ua7");n("t0UJ");class z extends y["Component"]{constructor(e){var t;super(e),t=this,this.search=e=>{clearTimeout(this.timer),this.timer=setTimeout(()=>{var t=e.trim();if(!t)return this.Searchkey=t,this.setState({dataSource:[]});t!==this.Searchkey&&(this.Searchkey=t,this._data=[],this.getDateByFilter(1,t))},1e3)},this.getDateByFilter=function(){var e=Object(_["a"])(I.a.mark((function e(n,a){var r;return I.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(B["n"])({pageNum:n,pageSize:18,title:a});case 2:r=e.sent,r&&(t._data=t._data.concat(r.data.pageData),t.setState({dataSource:t._data,totalpage:Math.ceil(r.data.total/18),pageNum:n+1,flag:!1}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.row=(e,t,n)=>{var a=e[n],r=this.props.ad;return b.a.createElement(b.a.Fragment,null,b.a.createElement(L["a"],{item:a,key:a.id}),n%6==5&&r?b.a.createElement("a",{className:"box_ad",href:r[0].bannerLink,target:"_blank"},b.a.createElement("img",{src:r[0].bannerImg1,title:r[0].bannerTitle,alt:r[0].bannerTitle,className:"gg-img"}),b.a.createElement("div",{className:"gg-text"},b.a.createElement("div",{className:"gg-icon"},"\u63a8\u5e7f"),b.a.createElement("div",{className:"gg-title"},r[0].bannerTitle))):null)},this.onEndReached=e=>{var t=this.state,n=t.pageNum,a=t.totalpage;t.currentTag;n<=a?(console.log(333,"\u7ee7\u7eed\u8bf7\u6c42\u6570\u636e",n,a),this.getDateByFilter(n,this.Searchkey)):(console.log(333,"\u6ca1\u6709\u6570\u636e\u4e86",n,a),this.setState({nomore:!0}))},this.state={dataSource:[],nomore:!1,pageNum:1,totalpage:1,av:[],video:[],flag:!0},this._data=[],this.Searchkey=""}UNSAFE_componentWillMount(){var e=this;return Object(_["a"])(I.a.mark((function t(){var n;return I.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(B["r"])();case 2:n=t.sent,n&&e.setState(Object(F["a"])({},n.data));case 4:case"end":return t.stop()}}),t)})))()}render(){var e=this.state,t=e.dataSource,n=e.nomore,r=e.flag;return b.a.createElement(b.a.Fragment,null,b.a.createElement(R,{placeholder:"\u641c\u7d22\u4e00\u4e0b",maxLength:8,showCancelButton:!0,onChange:this.search,onCancel:this.props.history.goBack}),r?b.a.createElement("div",{className:"searchPage"},b.a.createElement(a["a"],{tabs:[{title:"\u5973\u4f18\u6392\u884c"},{title:"\u89c6\u9891\u6392\u884c"}],initialPage:0,tabBarTextStyle:{fontSize:14},tabBarUnderlineStyle:{border:0}},b.a.createElement("div",{className:"search_av"},this.state.av.map((e,t)=>b.a.createElement(P["Link"],{to:"/avDetail/"+e.id,key:e.id},t+1,".",e.avName))),b.a.createElement("div",{className:"search_av"},this.state.video.map((e,t)=>b.a.createElement(P["Link"],{to:"/avDetail/"+e.id,key:e.id},t+1,".",e.title))))):b.a.createElement(A["a"],{className:"ListBox",dataSource:t,renderRow:this.row,onEndReached:this.onEndReached,nomore:n}))}}function U(e){var t=e.config.moduleCfg&&e.config.moduleCfg.banner;return{ad:t.index_data_ad||null}}t["default"]=Object(j["b"])(U)(z)},Nlzp:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"w",(function(){return i})),n.d(t,"z",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"j",(function(){return c})),n.d(t,"A",(function(){return l})),n.d(t,"J",(function(){return u})),n.d(t,"B",(function(){return d})),n.d(t,"I",(function(){return h})),n.d(t,"x",(function(){return p})),n.d(t,"D",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"n",(function(){return g})),n.d(t,"o",(function(){return v})),n.d(t,"g",(function(){return y})),n.d(t,"t",(function(){return b})),n.d(t,"v",(function(){return w})),n.d(t,"K",(function(){return k})),n.d(t,"u",(function(){return E})),n.d(t,"p",(function(){return C})),n.d(t,"i",(function(){return x})),n.d(t,"G",(function(){return S})),n.d(t,"H",(function(){return D})),n.d(t,"m",(function(){return T})),n.d(t,"l",(function(){return O})),n.d(t,"r",(function(){return R})),n.d(t,"d",(function(){return F})),n.d(t,"y",(function(){return N})),n.d(t,"q",(function(){return I})),n.d(t,"s",(function(){return _})),n.d(t,"E",(function(){return j})),n.d(t,"F",(function(){return B})),n.d(t,"h",(function(){return P})),n.d(t,"b",(function(){return L})),n.d(t,"k",(function(){return A})),n.d(t,"a",(function(){return z})),n.d(t,"C",(function(){return U}));var a=n("+cRp"),r=e=>a["a"].post("api/user/getVerifyCode",e),i=e=>a["a"].post("api/user/login",e,{loading:!0}),o=e=>a["a"].post("api/user/register",e,{loading:!0}),s=e=>a["a"].post("api/user/SendCode",e),c=e=>a["a"].post("api/user/forgetPass",e,{loading:!0}),l=e=>a["a"].post("api/user/resetPass",e,{loading:!0}),u=e=>a["a"].post("api/user/getRights",e),d=e=>a["a"].post("api/user/sendFeedback",e,{loading:!0}),h=e=>a["a"].post("api/user/getUserInfo",e),p=e=>a["a"].post("api/site/notice",e),f=e=>a["a"].post("api/site/moduleCfg",e),m=e=>Object(a["b"])("api/video/Home",e,6e4),g=e=>a["a"].post("api/video/getList",e),v=e=>Object(a["b"])("api/video/getList",e,6e5),y=e=>a["a"].post("api/video/VideoRecommon",e),b=e=>a["a"].post("api/video/getVideoInfo",e),w=e=>a["a"].post("api/video/getVideoRelation",e),k=e=>a["a"].post("api/video/watchingVideo",e),E=e=>a["a"].post("api/video/getVideoRank",e),C=e=>a["a"].post("api/video/getMoiveHis",e),x=e=>a["a"].post("api/video/discoveryPage",e),S=e=>a["a"].post("api/video/thematicList",e),D=e=>a["a"].post("api/video/thematicVideo",e),T=e=>a["a"].post("api/video/getGirlList",e),O=e=>a["a"].post("api/video/getGirlInfo",e),R=e=>a["a"].post("api/video/getSearchRank",e),F=e=>a["a"].post("api/recharge/PayConfig",e),N=e=>a["a"].post("api/recharge/pay",e,{loading:!0}),I=e=>a["a"].post("api/user/getOrder",e,{loading:!0}),_=e=>a["a"].post("api/user/getSpread",e),j=e=>a["a"].post("api/user/spreadInfo",e),B=e=>Object(a["b"])("api/site/spreadRules",e,864e5),P=e=>a["a"].post("api/fiction/getList",e),L=e=>a["a"].post("api/fiction/CartoonList",e),A=e=>a["a"].post("api/fiction/getChapter",e),z=e=>a["a"].post("api/fiction/CartoonInfo",e),U=e=>a["a"].post("api/fiction/setPraise",e)},RWIK:function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,'.searchPage {\n  flex: 1 1;\n  overflow: hidden;\n  padding: 0 2.5%;\n}\n.searchPage .am-tabs-default-bar-tab {\n  width: auto!important;\n  margin-right: 8vw;\n  cursor: pointer;\n}[data-rem="true"] .searchPage .am-tabs-default-bar-tab {\n  margin-right: 0.8rem\n}\n.searchPage .am-tabs-default-bar-tab-active {\n  font-size: 4.8vw!important;\n  color: #000;\n  font-weight: 700;\n}[data-rem="true"] .searchPage .am-tabs-default-bar-tab-active {\n  font-size: 0.48rem!important\n}\n.search_av a {\n  display: block;\n  font-size: 4.2666667vw;\n  color: #333;\n  margin: 1.3333333vw 0 4vw;\n}[data-rem="true"] .search_av a {\n  font-size: 0.4266667rem;\n  margin: 0.1333333rem 0 0.4rem\n}\n',""]),e.exports=t},ShuE:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n("ODXe"),r=n("Qyje"),i=n.n(r),o=n("vDqi"),s=n.n(o),c=new Map,l=e=>{var t=[e.method,e.url,i.a.stringify(e.params),i.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{c.has(t)||c.set(t,e)})},u=e=>{var t=[e.method,e.url,i.a.stringify(e.params),i.a.stringify(e.data)].join("&");if(c.has(t)){var n=c.get(t);n(t),c.delete(t)}},d=()=>{var e=!0,t=!1,n=void 0;try{for(var r,i=c[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var o=r.value,s=Object(a["a"])(o,2),l=s[0],u=s[1];u(l)}}catch(d){t=!0,n=d}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}c.clear()}},Suaf:function(e,t,n){var a=n("JPst");t=a(!1),t.push([e.i,"\n.am-search {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 11.7333333vw;\n  padding: 0 2.1333333vw;\n  overflow: hidden;\n  background-color: #efeff4;\n}[data-rem=\"true\"] .am-search {\n  height: 1.1733333rem;\n  padding: 0 0.2133333rem\n}\n.am-search-input {\n  flex: 1 1;\n  position: relative;\n  width: 100%;\n  height: 7.4666667vw;\n  overflow: hidden;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 0.8vw;\n}[data-rem=\"true\"] .am-search-input {\n  height: 0.7466667rem;\n  border-radius: 0.08rem\n}\n.am-search-input .am-search-synthetic-ph,\n.am-search-input input[type=\"search\"] {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.am-search-input .am-search-synthetic-ph {\n  box-sizing: content-box;\n  z-index: 1;\n  height: 7.4666667vw;\n  line-height: 7.4666667vw;\n  width: 100%;\n  transition: width 0.3s;\n  display: block;\n  text-align: center;\n}[data-rem=\"true\"] .am-search-input .am-search-synthetic-ph {\n  height: 0.7466667rem;\n  line-height: 0.7466667rem\n}\n.am-search-input .am-search-synthetic-ph-icon {\n  display: inline-block;\n  margin-right: 1.3333333vw;\n  width: 4vw;\n  height: 4vw;\n  overflow: hidden;\n  vertical-align: -0.6666667vw;\n  background-repeat: no-repeat;\n  background-size: 4vw auto;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'38'%20height%3D'36'%20viewBox%3D'0%200%2038%2036'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M29.05%2025.23a15.81%2015.81%200%200%200%203.004-9.294c0-8.8-7.17-15.934-16.017-15.934C7.192.002.02%207.136.02%2015.936c0%208.802%207.172%2015.937%2016.017%2015.937%204.148%200%207.928-1.569%2010.772-4.143l8.873%208.232%202.296-2.45-8.927-8.282zM16.2%2028.933c-7.19%200-13.04-5.788-13.04-12.903%200-7.113%205.85-12.904%2013.04-12.904%207.19%200%2012.9%205.79%2012.9%2012.904%200%207.115-5.71%2012.903-12.9%2012.903z'%20fill%3D'%23bbb'%20fill-rule%3D'evenodd'%2F%3E%3C%2Fsvg%3E\");\n}[data-rem=\"true\"] .am-search-input .am-search-synthetic-ph-icon {\n  margin-right: 0.1333333rem;\n  width: 0.4rem;\n  height: 0.4rem;\n  vertical-align: -0.0666667rem;\n  background-size: 0.4rem auto\n}\n.am-search-input .am-search-synthetic-ph-placeholder {\n  color: #bbb;\n  font-size: 4vw;\n}[data-rem=\"true\"] .am-search-input .am-search-synthetic-ph-placeholder {\n  font-size: 0.4rem\n}\n.am-search-input input[type=\"search\"] {\n  z-index: 2;\n  opacity: 0;\n  width: 100%;\n  text-align: left;\n  display: block;\n  color: #000;\n  height: 7.4666667vw;\n  font-size: 4vw;\n  background-color: transparent;\n  border: 0;\n}[data-rem=\"true\"] .am-search-input input[type=\"search\"] {\n  height: 0.7466667rem;\n  font-size: 0.4rem\n}\n.am-search-input input[type=\"search\"]::-webkit-input-placeholder {\n  background: none;\n  text-align: left;\n  color: transparent;\n}\n.am-search-input input[type=\"search\"]::-ms-input-placeholder {\n  background: none;\n  text-align: left;\n  color: transparent;\n}\n.am-search-input input[type=\"search\"]::placeholder {\n  background: none;\n  text-align: left;\n  color: transparent;\n}\n.am-search-input input[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n.am-search-input .am-search-clear {\n  box-sizing: content-box;\n  position: absolute;\n  display: none;\n  z-index: 3;\n  width: 4vw;\n  height: 4vw;\n  padding: 1.7333333vw;\n  border-radius: 50%;\n  top: 0;\n  right: 0;\n  background-color: transparent;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 4vw 4vw;\n  transition: all 0.3s;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2028%2028'%3E%3Ccircle%20cx%3D'14'%20cy%3D'14'%20r%3D'14'%20fill%3D'%23ccc'%2F%3E%3Cline%20stroke%3D'%23ffffff'%20stroke-width%3D'2'%20stroke-miterlimit%3D'10'%20x1%3D'8'%20y1%3D'8'%20x2%3D'20'%20y2%3D'20'%2F%3E%3Cline%20fill%3D'none'%20stroke%3D'%23ffffff'%20stroke-width%3D'2'%20stroke-miterlimit%3D'10'%20x1%3D'20'%20y1%3D'8'%20x2%3D'8'%20y2%3D'20'%2F%3E%3C%2Fsvg%3E\");\n}[data-rem=\"true\"] .am-search-input .am-search-clear {\n  width: 0.4rem;\n  height: 0.4rem;\n  padding: 0.1733333rem;\n  background-size: 0.4rem 0.4rem\n}\n.am-search-input .am-search-clear-active {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2028%2028'%3E%3Ccircle%20cx%3D'14'%20cy%3D'14'%20r%3D'14'%20fill%3D'%23108ee9'%2F%3E%3Cline%20stroke%3D'%23ffffff'%20stroke-width%3D'2'%20stroke-miterlimit%3D'10'%20x1%3D'8'%20y1%3D'8'%20x2%3D'20'%20y2%3D'20'%2F%3E%3Cline%20fill%3D'none'%20stroke%3D'%23ffffff'%20stroke-width%3D'2'%20stroke-miterlimit%3D'10'%20x1%3D'20'%20y1%3D'8'%20x2%3D'8'%20y2%3D'20'%2F%3E%3C%2Fsvg%3E\");\n}\n.am-search-input .am-search-clear-show {\n  display: block;\n}\n.am-search-cancel {\n  flex: none;\n  opacity: 0;\n  padding-left: 2.1333333vw;\n  height: 11.7333333vw;\n  line-height: 11.7333333vw;\n  font-size: 4.2666667vw;\n  color: #108ee9;\n  text-align: right;\n}[data-rem=\"true\"] .am-search-cancel {\n  padding-left: 0.2133333rem;\n  height: 1.1733333rem;\n  line-height: 1.1733333rem;\n  font-size: 0.4266667rem\n}\n.am-search-cancel-anim {\n  transition: margin-right 0.3s, opacity 0.3s;\n  transition-delay: 0.1s;\n}\n.am-search-cancel-show {\n  opacity: 1;\n}\n.am-search.am-search-start .am-search-input input[type=\"search\"] {\n  opacity: 1;\n  padding: 0 7.4666667vw 0 9.3333333vw;\n}[data-rem=\"true\"] .am-search.am-search-start .am-search-input input[type=\"search\"] {\n  padding: 0 0.7466667rem 0 0.9333333rem\n}\n.am-search.am-search-start .am-search-input input[type=\"search\"]::-webkit-input-placeholder {\n  color: transparent;\n}\n.am-search.am-search-start .am-search-input input[type=\"search\"]::-ms-input-placeholder {\n  color: transparent;\n}\n.am-search.am-search-start .am-search-input input[type=\"search\"]::placeholder {\n  color: transparent;\n}\n.am-search.am-search-start .am-search-input .am-search-synthetic-ph {\n  padding-left: 4vw;\n  width: auto;\n}[data-rem=\"true\"] .am-search.am-search-start .am-search-input .am-search-synthetic-ph {\n  padding-left: 0.4rem\n}\n",""]),e.exports=t},U7if:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return r})),n.d(t,"reducer",(function(){return d}));var a=n("zyFE"),r={popup:null,video:null},i=Object(a["createActions"])({OpenPopup:["payload"],ClosePopup:["locationChanged"],SetVideo:["payload"]}),o=i.Types,s=i.Creators,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{popup:t.payload})},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;arguments.length>1&&arguments[1];return Object.assign({},e,{popup:null})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{video:t.payload})},d=Object(a["createReducer"])(r,{[o.CLOSE_POPUP]:l,[o.OPEN_POPUP]:c,[o.SET_VIDEO]:u});t["default"]=s},X4g2:function(e,t,n){"use strict";t["a"]=function(e){return Object.keys(e).reduce((function(t,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(t[n]=e[n]),t}),{})}},hZiy:function(e,t,n){"use strict";n.r(t),t["default"]={cancelText:"\u53d6\u6d88"}},kMp1:function(e,t,n){var a=n("LboF"),r=n("Suaf");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var i={base:0,insert:"head",singleton:!1},o=(a(r,i),r.locals?r.locals:{});e.exports=o},oVTX:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("9kvl"),o=n("/MKj"),s=n("U7if"),c=n("96Xy"),l=n.n(c);n("7MuJ");class u extends a["Component"]{constructor(e){super(e),this.Preview=e=>t=>{this.touchMove||(e.mediabook?(this.touchMove=!0,this.props.dispatch(s["default"].SetVideo(e.id)),null==this.dp?this.dp=new l.a({lang:"zh-cn",container:document.getElementById("dplayer"+e.id),video:{url:e.mediabook},autoplay:!0,loop:!0,hotkey:!1,volume:0}):this.dp.play()):(this.touchMove=!0,this.setState({useGif:!0})))},this.cancel=e=>t=>{e.mediabook&&(this.dp&&this.dp.destroy(),this.setState({useGif:!1}))},this.EnterVideo=e=>()=>{this.props.replace?i["a"].replace("/video/"+e):i["a"].push("/video/"+e)},this.state={useGif:!1},this.dp=null,this.touchMove=!1}UNSAFE_componentWillReceiveProps(e){e.video&&e.video!==e.item.id&&this.dp&&(this.dp.destroy(),this.dp=null,this.touchMove=!1)}componentWillUnmount(){this.dp&&this.dp.destroy()}render(){var e=this.props.item;return r.a.createElement("div",{className:"box",onClick:this.EnterVideo(e.id)},r.a.createElement("div",{className:"bgimg av_img",style:{backgroundImage:"url(".concat(e.coverUrl,")")},onTouchMove:this.Preview(e),onTouchEnd:this.cancel},r.a.createElement("div",{id:"dplayer"+e.id,className:"full"}),this.state.useGif?r.a.createElement("div",{className:"full gif",style:{backgroundImage:"url(".concat(e.gifUrl,")")}}):null,r.a.createElement("div",{className:"box_time"},e.videoTime)),r.a.createElement("p",null,e.title))}}function d(e){return{video:e.ui.video}}t["a"]=Object(o["b"])(d)(u)},p58V:function(e,t,n){"use strict";n.r(t),n.d(t,"INITIAL_STATE",(function(){return l})),n.d(t,"userInfo",(function(){return p})),n.d(t,"registerYB",(function(){return f})),n.d(t,"reducer",(function(){return w}));var a=n("VTBJ"),r=n("o0o1"),i=n.n(r),o=n("HaE+"),s=n("zyFE"),c=n("Nlzp"),l={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},u=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),d=u.Types,h=u.Creators;function p(e){return function(){var e=Object(o["a"])(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["I"])();case 2:a=e.sent,a&&t(h.UpdateUserInfo(a.data));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function f(){return function(){var e=Object(o["a"])(i.a.mark((function e(t,n){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}t["default"]=h;var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",t.payload,t.phone),Object.assign({},e,Object(a["a"])({loginInProgress:!1,loggedIn:!0,phone:t.phone},t.payload))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:t.payload})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return t.token&&(t.token.accessToken=null),t},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:t.payload})},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},w=Object(s["createReducer"])(l,{[d.LOGGED_IN]:m,[d.LOGGED_OUT]:b,[d.UPDATE_TOKEN]:g,[d.UPDATE_USER_INFO]:y,[d.CLEAR_ACCESS_TOKEN]:v})},t0UJ:function(e,t,n){var a=n("LboF"),r=n("RWIK");r=r.__esModule?r.default:r,"string"===typeof r&&(r=[[e.i,r,""]]);var i={base:0,insert:"head",singleton:!1},o=(a(r,i),r.locals?r.locals:{});e.exports=o},vwip:function(e,t,n){"use strict";t["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,t,n){localStorage.removeItem(e);var a=(new Date).getTime(),r=n||this.age,i={};return i._value=t,i._time=a,i._age=a+r,localStorage.setItem(e,JSON.stringify(i)),this},isExpire:function(e){var t=!0,n=localStorage.getItem(e),a=(new Date).getTime();return n&&(n=JSON.parse(n),t=a>n._age),t},get:function(e){var t=this.isExpire(e),n=null;return t?(localStorage.removeItem(e),n):(n=localStorage.getItem(e),n=JSON.parse(n),n._value)}}}}]);