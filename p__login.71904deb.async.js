(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"+cRp":function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return b}));r("HVTF");var a=r("OT5E"),n=r("vDqi"),o=r.n(n),i=r("9kvl"),s=r("ShuE"),u=r("gjeX"),c=r.n(u),p=r("p58V"),d=r("vwip"),l=r("NFKh"),f=!1;function h(e,t,r){var a="",n=t,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(n=Math.round(Math.random()*(r-t))+t);for(var i=0;i<n;i++)a+=o[Math.round(Math.random()*(o.length-1))];return a}var g=window.baseUrl,m=o.a.create({baseURL:g,timeout:6e4});m.interceptors.request.use((function(t){t.loading&&(a["a"].loading("\u52a0\u8f7d\u4e2d..."),f=!0),Object(s["c"])(t),Object(s["a"])(t),t.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";var r=e.store.getState().user.token;r&&(t.headers["userId"]=r.userId,r.accessToken&&(t.headers["token"]=r.accessToken));var n=t.data||{},o="fdsfewEQRWE@#$!1FDSAF3424FF",i=Object.keys(n).map((function(e){return e+"="+n[e]})),u=(i=i.concat(["qid="+h(!1,16),"terminal=h5"]).sort()).join("&"),p="sign="+c()(u+o);return t.data=u+"&"+p,t}),(function(e){return e}));l.enc.Latin1.parse("jH5%!i%eDAEW@#@$"),l.enc.Latin1.parse("jfdkwqew!#S#$%78");function v(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];var o=d["a"].get(e);return!o||200!==o.code||Array.isArray(o.data)&&0===o.data.length?t(...a).then(t=>(d["a"].set(e,t,a[2]),t)).catch((function(e){return e})):o}m.interceptors.response.use((function(t){Object(s["c"])(t);var r=t.data,n=e.store,o=n.dispatch,u=n.getState;if(200==r.code||-97==r.code)return f&&a["a"].hide(),f=!1,r;if(-1==r.code)a["a"].info(r.data);else if(-98==r.code)a["a"].info("\u767b\u5f55\u4fe1\u606f\u5931\u6548"),o(p["default"].LoggedOut()),i["a"].push("/login");else if(-99==r.code){o(p["default"].ClearAccessToken());var c=u().user.token;c&&m.post("api/user/applyToken",{refershToken:c.refershToken}).then(e=>{e&&(c.accessToken=e.data.accessToken,c.refershToken=e.data.refershToken,o(p["default"].UpdateToken(c)),location.reload())})}f=!1}),(function(e){if(a["a"].hide(),e.response)switch(e.response.status){case 404:a["a"].info("\u8d44\u6e90\u627e\u4e0d\u5230");break;case 500:a["a"].info("\u670d\u52a1\u5668\u7e41\u5fd9...\u8bf7\u7a0d\u540e\u518d\u8bd5");break;case 504:a["a"].info("\u8fde\u63a5\u8d85\u65f6");break}f=!1})),t["a"]=m;var b=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],n=c.a.hex(a+"[POST]"+JSON.stringify(t));return v(n,m.post,...t)}}).call(this,r("yLpj"))},"/P0+":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r("q1tI"),n=r.n(a);class o extends a["Component"]{constructor(e){super(e),this.Change=e=>{var t=e.target.value,r=this.props,a=r.reg,n=r.required,o=r.min,i=r.max;if(null===t)this.setState({text:t,verifyStatus:1}),this.props.bindValue&&this.props.bindValue(t,1);else if(n&&""===t||a&&!a.test(t)||t<o||t>i){var s=n&&""===t?"*\u5fc5\u586b\u9879\u4e0d\u80fd\u4e3a\u7a7a":this.props.errorMag;if(a&&!n)return this.setState({text:t,border:"",verifyStatus:1,errorMag:s}),void(this.props.bindValue&&this.props.bindValue(t,1));this.setState({text:t,border:"error",verifyStatus:3,errorMag:s}),this.props.bindValue&&this.props.bindValue(t,3)}else n||a||t>=o||t<=i?(this.setState({text:t,border:"success",verifyStatus:2,errorMag:""}),this.props.bindValue&&this.props.bindValue(t,2)):(this.setState({text:t}),this.props.bindValue&&this.props.bindValue(t))},this.onFocus=()=>{1===this.state.verifyStatus&&this.setState({border:"fource"})},this.onBlur=()=>{this.state.verifyStatus},this.state={text:this.props.value,border:this.props.style&&this.props.style.borderColor?this.props.style.borderColor:"default",verifyStatus:1,errorMag:""}}componentDidMount(){}render(){return n.a.createElement("div",{className:"inputBox"},n.a.createElement("input",{type:this.props.password?"password":"text",value:this.props.value,defaultValue:this.props.defaultValue,className:"input ".concat(this.props.className," ").concat(this.state.border),placeholder:this.props.placeholder,onChange:this.Change,onFocus:this.onFocus,onBlur:this.onBlur}),this.props.required||this.props.reg?n.a.createElement("p",{className:"errorMsg ".concat(this.props.ErrorClass)},this.state.errorMag):null,this.props.rightCon?n.a.createElement("div",{className:"RightCon"},this.props.rightCon):null)}}},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},Nlzp:function(e,t,r){"use strict";r.d(t,"f",(function(){return n})),r.d(t,"w",(function(){return o})),r.d(t,"z",(function(){return i})),r.d(t,"e",(function(){return s})),r.d(t,"j",(function(){return u})),r.d(t,"A",(function(){return c})),r.d(t,"J",(function(){return p})),r.d(t,"B",(function(){return d})),r.d(t,"I",(function(){return l})),r.d(t,"x",(function(){return f})),r.d(t,"D",(function(){return h})),r.d(t,"c",(function(){return g})),r.d(t,"n",(function(){return m})),r.d(t,"o",(function(){return v})),r.d(t,"g",(function(){return b})),r.d(t,"t",(function(){return y})),r.d(t,"v",(function(){return E})),r.d(t,"K",(function(){return k})),r.d(t,"u",(function(){return w})),r.d(t,"p",(function(){return C})),r.d(t,"i",(function(){return I})),r.d(t,"G",(function(){return S})),r.d(t,"H",(function(){return O})),r.d(t,"m",(function(){return N})),r.d(t,"l",(function(){return V})),r.d(t,"r",(function(){return j})),r.d(t,"d",(function(){return T})),r.d(t,"y",(function(){return x})),r.d(t,"q",(function(){return A})),r.d(t,"s",(function(){return L})),r.d(t,"E",(function(){return D})),r.d(t,"F",(function(){return M})),r.d(t,"h",(function(){return R})),r.d(t,"b",(function(){return _})),r.d(t,"k",(function(){return F})),r.d(t,"a",(function(){return P})),r.d(t,"C",(function(){return U}));var a=r("+cRp"),n=e=>a["a"].post("api/user/getVerifyCode",e),o=e=>a["a"].post("api/user/login",e,{loading:!0}),i=e=>a["a"].post("api/user/register",e,{loading:!0}),s=e=>a["a"].post("api/user/SendCode",e),u=e=>a["a"].post("api/user/forgetPass",e,{loading:!0}),c=e=>a["a"].post("api/user/resetPass",e,{loading:!0}),p=e=>a["a"].post("api/user/getRights",e),d=e=>a["a"].post("api/user/sendFeedback",e,{loading:!0}),l=e=>a["a"].post("api/user/getUserInfo",e),f=e=>a["a"].post("api/site/notice",e),h=e=>a["a"].post("api/site/moduleCfg",e),g=e=>Object(a["b"])("api/video/Home",e,6e4),m=e=>a["a"].post("api/video/getList",e),v=e=>Object(a["b"])("api/video/getList",e,6e5),b=e=>a["a"].post("api/video/VideoRecommon",e),y=e=>a["a"].post("api/video/getVideoInfo",e),E=e=>a["a"].post("api/video/getVideoRelation",e),k=e=>a["a"].post("api/video/watchingVideo",e),w=e=>a["a"].post("api/video/getVideoRank",e),C=e=>a["a"].post("api/video/getMoiveHis",e),I=e=>a["a"].post("api/video/discoveryPage",e),S=e=>a["a"].post("api/video/thematicList",e),O=e=>a["a"].post("api/video/thematicVideo",e),N=e=>a["a"].post("api/video/getGirlList",e),V=e=>a["a"].post("api/video/getGirlInfo",e),j=e=>a["a"].post("api/video/getSearchRank",e),T=e=>a["a"].post("api/recharge/PayConfig",e),x=e=>a["a"].post("api/recharge/pay",e,{loading:!0}),A=e=>a["a"].post("api/user/getOrder",e,{loading:!0}),L=e=>a["a"].post("api/user/getSpread",e),D=e=>a["a"].post("api/user/spreadInfo",e),M=e=>Object(a["b"])("api/site/spreadRules",e,864e5),R=e=>a["a"].post("api/fiction/getList",e),_=e=>a["a"].post("api/fiction/CartoonList",e),F=e=>a["a"].post("api/fiction/getChapter",e),P=e=>a["a"].post("api/fiction/CartoonInfo",e),U=e=>a["a"].post("api/fiction/setPraise",e)},ShuE:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return p})),r.d(t,"b",(function(){return d}));var a=r("ODXe"),n=r("Qyje"),o=r.n(n),i=r("vDqi"),s=r.n(i),u=new Map,c=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new s.a.CancelToken(e=>{u.has(t)||u.set(t,e)})},p=e=>{var t=[e.method,e.url,o.a.stringify(e.params),o.a.stringify(e.data)].join("&");if(u.has(t)){var r=u.get(t);r(t),u.delete(t)}},d=()=>{var e=!0,t=!1,r=void 0;try{for(var n,o=u[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var i=n.value,s=Object(a["a"])(i,2),c=s[0],p=s[1];p(c)}}catch(d){t=!0,r=d}finally{try{e||null==o.return||o.return()}finally{if(t)throw r}}u.clear()}},gMHI:function(e,t,r){"use strict";r.r(t);r("XGli");var a=r("NHyu"),n=(r("tW3Q"),r("a9LI")),o=(r("D2jH"),r("2ROE")),i=r("o0o1"),s=r.n(i),u=r("HaE+"),c=r("q1tI"),p=r.n(c),d=r("9kvl"),l=r("55Ip"),f=r("G8a/"),h=r.n(f),g=r("Nlzp"),m=r("/MKj"),v=r("p58V"),b=r("/P0+");class y extends c["Component"]{constructor(e){var t;super(e),t=this,this.getVerifyCode=function(){var e=Object(u["a"])(s.a.mark((function e(r){var a,n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="string"==typeof r?r:t.state.phone,e.next=3,Object(g["f"])({phone:a,codeType:2});case 3:n=e.sent,n&&t.setState({verifyImg:n.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.bindValue=e=>(t,r)=>{var a={},n=this.state.verifyData;a[e]=t,n[e]=r,a["verifyData"]=n,this.setState(a),"phone"==e&&2==r&&this.getVerifyCode(t)},this.submitform=Object(u["a"])(s.a.mark((function e(){var r,a,n,o,i;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.state,a=r.phone,n=r.passWd,o=r.imgCode,e.next=3,Object(g["w"])({phone:a,passWd:n,imgCode:o});case 3:i=e.sent,i?(t.state.remember?t.props.dispatch(v["default"].LoggedIn(i.data,a)):t.props.dispatch(v["default"].LoggedIn(i.data,null)),d["a"].push("/user")):t.getVerifyCode(a);case 5:case"end":return e.stop()}}),e)}))),this.changeRemember=e=>{this.setState({remember:e.target.checked})},this.state={phone:this.props.phone||"",passWd:"",imgCode:"",verifyImg:"",verifyData:{},remember:!0}}UNSAFE_componentWillMount(){/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][2-9])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(this.state.phone)&&this.getVerifyCode(this.state.phone)}render(){var e=this.state,t=e.phone,r=e.passWd,i=e.imgCode,s=e.verifyImg,u=e.verifyData,c=e.remember;return p.a.createElement("form",{className:h.a.loginAndRegister},p.a.createElement("div",{className:h.a.itemli},p.a.createElement("p",{className:h.a.left},p.a.createElement(o["a"],{type:"ellipsis",size:"md",color:"#ffb000"}),"\u624b\u673a\u53f7"),p.a.createElement(b["a"],{value:t,bindValue:this.bindValue("phone"),placeholder:"\u8bf7\u8f93\u516511\u4f4d\u624b\u673a\u53f7",required:!0,reg:/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][2-9])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,errorMag:"\u586b\u5199\u7684\u624b\u673a\u53f7\u7801\u4e0d\u6b63\u786e",className:h.a.input,ErrorClass:h.a.error})),p.a.createElement("div",{className:h.a.itemli},p.a.createElement("p",{className:h.a.left},p.a.createElement(o["a"],{type:"ellipsis",size:"md",color:"#ffb000"}),"\u5bc6\u7801"),p.a.createElement(b["a"],{value:r,bindValue:this.bindValue("passWd"),placeholder:"6-32\u4f4d\u6570\u5b57\u5b57\u6bcd\u7ec4\u5408\u7684\u5bc6\u7801",errorMag:"\u5bc6\u7801\u683c\u5f0f\u4e0d\u6b63\u786e",reg:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,32}$/,password:!0,required:!0,className:h.a.input,ErrorClass:h.a.error})),p.a.createElement("div",{className:h.a.itemli},p.a.createElement("p",{className:h.a.left},p.a.createElement(o["a"],{type:"ellipsis",size:"md",color:"#ffb000"}),"\u9a8c\u8bc1\u7801"),p.a.createElement(b["a"],{value:i,bindValue:this.bindValue("imgCode"),required:!0,reg:/\d{4}$/,placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",className:h.a.input,ErrorClass:h.a.error}),s?p.a.createElement("img",{src:s,onClick:this.getVerifyCode,title:"\u70b9\u51fb\u5237\u65b0"}):null),p.a.createElement("div",{className:h.a.text_btn},p.a.createElement("div",{className:h.a.remember},p.a.createElement(n["a"],{checked:c,onChange:this.changeRemember}),p.a.createElement("span",null,"\u8bb0\u4f4f\u8d26\u53f7")),p.a.createElement(l["Link"],{to:"/forgetPwd",className:h.a.forgetPwd},"\u5fd8\u8bb0\u5bc6\u7801\uff1f")),p.a.createElement(a["a"],{onClick:this.submitform,disabled:!((2==u.phone||this.props.phone)&&2==u.passWd&&2==u.imgCode),className:"btn_submit"},"\u767b\u5f55"))}}function E(e){return{phone:e.user.phone}}t["default"]=Object(m["b"])(E)(y)},p58V:function(e,t,r){"use strict";r.r(t),r.d(t,"INITIAL_STATE",(function(){return c})),r.d(t,"userInfo",(function(){return f})),r.d(t,"registerYB",(function(){return h})),r.d(t,"reducer",(function(){return E}));var a=r("VTBJ"),n=r("o0o1"),o=r.n(n),i=r("HaE+"),s=r("zyFE"),u=r("Nlzp"),c={loginInProgress:void 0,loggedIn:!1,userInfoDone:!1,token:null,userInfo:null},p=Object(s["createActions"])({LoggedIn:["payload","phone"],LoggedOut:[],userInfoDone:[],UpdateToken:["payload"],UpdateUserInfo:["payload"],ClearAccessToken:["payload"]}),d=p.Types,l=p.Creators;function f(e){return function(){var e=Object(i["a"])(o.a.mark((function e(t,r){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["I"])();case 2:a=e.sent,a&&t(l.UpdateUserInfo(a.data));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}function h(){return function(){var e=Object(i["a"])(o.a.mark((function e(t,r){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}t["default"]=l;var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return console.log(111,"\u767b\u5f55\u6210\u529f",t.payload,t.phone),Object.assign({},e,Object(a["a"])({loginInProgress:!1,loggedIn:!0,phone:t.phone},t.payload))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{token:t.payload})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=(arguments.length>1&&arguments[1],JSON.parse(JSON.stringify(e)));return t.token&&(t.token.accessToken=null),t},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return Object.assign({},e,{userInfo:t.payload})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;arguments.length>1&&arguments[1];return Object.assign({},e,{loggedIn:!1,userInfo:null,token:null})},E=Object(s["createReducer"])(c,{[d.LOGGED_IN]:g,[d.LOGGED_OUT]:y,[d.UPDATE_TOKEN]:m,[d.UPDATE_USER_INFO]:b,[d.CLEAR_ACCESS_TOKEN]:v})},vwip:function(e,t,r){"use strict";t["a"]={age:6e5,setAge:function(e){return this.age=e,this},set:function(e,t,r){localStorage.removeItem(e);var a=(new Date).getTime(),n=r||this.age,o={};return o._value=t,o._time=a,o._age=a+n,localStorage.setItem(e,JSON.stringify(o)),this},isExpire:function(e){var t=!0,r=localStorage.getItem(e),a=(new Date).getTime();return r&&(r=JSON.parse(r),t=a>r._age),t},get:function(e){var t=this.isExpire(e),r=null;return t?(localStorage.removeItem(e),r):(r=localStorage.getItem(e),r=JSON.parse(r),r._value)}}}}]);