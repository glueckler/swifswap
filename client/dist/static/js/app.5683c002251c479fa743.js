webpackJsonp([1],{"0dzx":function(t,e){},Bcck:function(t,e){},"N+Dz":function(t,e){},NHnr:function(t,e,s){"use strict";function a(t){s("OZVQ")}function n(t){s("O+EK")}function i(t){s("bETO")}function r(t){s("gepn")}function o(t){s("bxzd")}function m(t){s("rmf9")}function c(t){s("N+Dz")}function u(t){s("SIW1")}function l(t){s("lBnZ")}function d(t){s("Bcck")}function f(t){s("xmbP")}Object.defineProperty(e,"__esModule",{value:!0});var h=s("7+uW"),v="";v="/";var _=v,p={props:{userData:{required:!0}},data:function(){return{logoutRoute:_+"logout"}}},g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"nav"},[s("router-link",{staticClass:"nav__logo",attrs:{to:"/"}},[t._v("swifswap")]),t._v(" "),s("ul",{staticClass:"nav__list"},[t.userData?t._e():s("li",[s("router-link",{attrs:{to:"/login"}},[t._v("login")])],1),t._v(" "),t.userData?t._e():s("li",[t._v(" | "),s("router-link",{attrs:{to:"/register"}},[t._v("register")])],1),t._v(" "),t.userData?s("li",[s("router-link",{attrs:{to:"/newitem"}},[t._v("new item")])],1):t._e(),t._v(" "),t.userData?s("li",[t._v(" | "),s("a",{attrs:{href:t.userData.profilePath,to:"/"}},[s("small",[t._v("profile")])])]):t._e(),t._v(" "),t.userData?s("li",[t._v(" | "),s("router-link",{attrs:{to:"/chats"}},[s("small",[t._v("chats")])])],1):t._e(),t._v(" "),t.userData?s("li",[t._v(" | "),s("a",{attrs:{href:t.logoutRoute}},[s("small",[t._v("logout")])])]):t._e()])],1)},C=[],w={render:g,staticRenderFns:C},j=w,y=s("VU/8"),b=a,I=y(p,j,!1,b,null,null),k=I.exports,x=s("0dzx"),D=s.n(x),F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("ul",[a("li",[a("div",{staticClass:"logo"},[t._v("swifswap")])]),t._v(" "),a("li",[a("img",{staticClass:"tall-boys",attrs:{src:s("jC/m")}})]),t._v(" "),a("li",[t._v("Contact Us")]),t._v(" "),a("li",[t._v("No Copyright")]),t._v(" "),a("li",[t._v("<3")])])])}],z={render:F,staticRenderFns:N},E=z,U=s("VU/8"),P=n,R=U(D.a,E,!1,P,null,null),$=R.exports,M={components:{NavBar:k,FooterBar:$},data:function(){return{userData:void 0}},created:function(){this.fetchUserData()},methods:{fetchUserData:function(){var t=this;fetch("/api/usersession",{credentials:"same-origin"}).then(function(e){200===e.status&&e.json().then(function(e){t.userData=e,t.userData.profilePath="/"+t.userData.username}).catch(function(t){})}).catch(function(t){return console.log("Error fetching user data.. \n",t)})}}},O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"wrapper"},[s("NavBar",{attrs:{userData:t.userData}}),t._v(" "),s("router-view",{attrs:{userData:t.userData}})],1),t._v(" "),s("FooterBar")],1)},S=[],V={render:O,staticRenderFns:S},q=V,B=s("VU/8"),L=i,T=B(M,q,!1,L,null,null),A=T.exports,H=s("/ocq"),W={username:"",email:"",password:"",location:"",image:""},X={name:"Register",data:function(){return{formContent:W,register:_+"api/users"}},methods:{submitUser:function(){fetch("/api/users",{method:"post",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:"username="+this.formContent.username+"\n        &email="+this.formContent.email+"\n        &password="+this.formContent.password+"\n        &location="+this.formContent.location+"\n        &img_path="+this.formContent.image}).then(this.formContent={username:"",email:"",password:"",location:"",image:""}).then(this.$router.push("/"))}},directives:{focus:{inserted:function(t){t.focus()}}}},J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"register fullscreen sofa-background"}),t._v(" "),s("div",{staticClass:"full-flex-middle"},[s("div",{staticClass:"register-form"},[s("h2",{staticClass:"register-form__catch"},[t._v("Join the traders network!")]),t._v(" "),s("h3",{staticClass:"register-form__header"},[t._v("Join swifswap forever, or for a bit!  We've missed you!")]),t._v(" "),s("form",{staticClass:"register-form__form",attrs:{method:"POST",action:t.register}},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formContent.username,expression:"formContent.username",modifiers:{trim:!0}},{name:"focus",rawName:"v-focus"}],staticClass:"register-form__field",attrs:{name:"username",type:"text",placeholder:"username",autocomplete:"off",autofocus:""},domProps:{value:t.formContent.username},on:{input:function(e){e.target.composing||t.$set(t.formContent,"username",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formContent.email,expression:"formContent.email",modifiers:{trim:!0}}],staticClass:"register-form__field",attrs:{name:"email",type:"email",placeholder:"email",autocomplete:"off"},domProps:{value:t.formContent.email},on:{input:function(e){e.target.composing||t.$set(t.formContent,"email",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formContent.password,expression:"formContent.password"}],staticClass:"register-form__field margin-bottom",attrs:{name:"password",type:"password",placeholder:"password",autocomplete:"off"},domProps:{value:t.formContent.password},on:{input:function(e){e.target.composing||t.$set(t.formContent,"password",e.target.value)}}}),t._v(" "),s("input",{staticClass:"register-form__field button",attrs:{type:"submit",value:"Register"}})])])])])},K=[],G={render:J,staticRenderFns:K},Q=G,Z=s("VU/8"),Y=r,tt=Z(X,Q,!1,Y,null,null),et=tt.exports,st={name:"Login",data:function(){return{loginForm:{username:"",email:"",password:""},login:_+"sessions"}},directives:{focus:{inserted:function(t){t.focus()}}}},at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"login fullscreen sofa-background"}),t._v(" "),s("div",{staticClass:"full-flex-middle"},[s("div",{staticClass:"login-form"},[s("h2",{staticClass:"login-form__catch"},[t._v("Welcome back!")]),t._v(" "),s("form",{staticClass:"login-form__form",attrs:{method:"POST",action:t.login}},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.loginForm.username,expression:"loginForm.username",modifiers:{trim:!0}},{name:"focus",rawName:"v-focus"}],attrs:{type:"text",name:"username",placeholder:"username",autocomplete:"off",autofocus:""},domProps:{value:t.loginForm.username},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"username",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.loginForm.password,expression:"loginForm.password",modifiers:{trim:!0}}],staticClass:"margin-bottom",attrs:{type:"password",name:"password",placeholder:"password",autocomplete:"off"},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("input",{attrs:{type:"submit"}})])])])])},nt=[],it={render:at,staticRenderFns:nt},rt=it,ot=s("VU/8"),mt=o,ct=ot(st,rt,!1,mt,null,null),ut=ct.exports,lt=s("BO1k"),dt=s.n(lt),ft=s("PJh5"),ht=s.n(ft),vt={name:"Chats",props:{userData:{required:!0}},data:function(){return{chats:{},sortedChats:[],loading:!1}},mounted:function(){this.getChats()},methods:{getChats:function(){var t=this;this.loading=!0,fetch("/api/chats",{credentials:"same-origin"}).then(function(e){e.json().then(function(e){e=e.sort(function(t,e){return Date.parse(e.updated)-Date.parse(t.updated)}),t.chats=e,t.sortChats(),t.loading=!1}).catch(function(t){console.log("Fetch Error",t)})})},sortChats:function(){this.sortedChats=[];var t=!0,e=!1,s=void 0;try{for(var a,n=dt()(this.chats);!(t=(a=n.next()).done);t=!0){var i=a.value;if(i.receiver.id!==this.userData.id)var r={user:i.receiver,item:i.receiverItem};else var r={user:i.sender,item:i.senderItem};r.id=i.id,r.updated=i.updated,this.sortedChats.push(r)}}catch(t){e=!0,s=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw s}}},convertTime:function(t){return ht()(t).fromNow()}}},_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"fullscreen chats-background"}),t._v(" "),s("div",{staticClass:"full-flex-middle"},[s("div",{staticClass:"chats"},[s("h2",[t._v("your swifswaps")]),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-pulse fa-3x fa-fw"}),t._v(" "),t._l(t.sortedChats,function(e){return s("div",{staticClass:"chats__chat"},[s("div",{staticClass:"chats__chat__img"},[s("img",{attrs:{src:e.item.photo}})]),t._v(" "),s("router-link",{staticClass:"chats__chat__link",attrs:{to:"chats/"+e.id}},[s("div",{staticClass:"chats__chat__desc"},[s("h2",[t._v(t._s(e.item.name))]),t._v(" "),s("h3",[s("small",[t._v("with")]),t._v(" "+t._s(e.user.name))]),t._v(" "),s("h4",[t._v("last message: "+t._s(t.convertTime(e.updated)))])])])],1)})],2)])])},pt=[],gt={render:_t,staticRenderFns:pt},Ct=gt,wt=s("VU/8"),jt=m,yt=wt(vt,Ct,!1,jt,null,null),bt=yt.exports,It=s("mvHQ"),kt=s.n(It),xt={name:"Chat",props:{userData:{required:!0}},data:function(){return{newMessage:"",chat:{},messageInfo:{},users:{},items:{},sortedMsgs:[]}},mounted:function(){this.getMessages()},methods:{submit:function(){this.chat.receiver.username!==this.userData.username?(this.messageInfo.userId=this.chat.sender.id,this.messageInfo.message=this.newMessage):(this.messageInfo.userId=this.chat.receiver.id,this.messageInfo.message=this.newMessage),fetch("/api/chats/"+this.$route.params.id,{method:"post",headers:{"Content-type":"application/json"},body:kt()(this.messageInfo)}),this.getMessages(),this.newMessage=""},getMessages:function(){var t=this;fetch("/api/chats/"+this.$route.params.id).then(function(e){if(200!==e.status)return void console.log("Looks like there was a problem. Status Code: "+e.status);e.json().then(function(e){t.chat=e,t.sortedMsgs=[],t.userData.id===e.sender.id?(t.users={me:e.sender,you:e.receiver},t.items={me:e.items.find(function(t){return t.user_id===e.sender.id}),you:e.items.find(function(t){return t.user_id===e.receiver.id})}):(t.users={me:e.receiver,you:e.sender},t.items={me:e.items.find(function(t){return t.user_id===e.receiver.id}),you:e.items.find(function(t){return t.user_id===e.sender.id})});var s=!0,a=!1,n=void 0;try{for(var i,r=dt()(e.messages);!(s=(i=r.next()).done);s=!0){var o=i.value;o.messageAuthor===t.userData.username?o.me=!0:o.me=!1,t.sortedMsgs.push(o)}}catch(t){a=!0,n=t}finally{try{!s&&r.return&&r.return()}finally{if(a)throw n}}}).catch(function(t){console.log("Fetch Error :-S",t)})})}},directives:{focus:{inserted:function(t){t.focus()}}}},Dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"fullscreen chats-background"}),t._v(" "),t.users.you?s("div",[s("main",{staticClass:"full-flex-middle"},[s("div",{staticClass:"chat"},[s("h2",[t._v("your swap with "+t._s(t.users.you.username))]),t._v(" "),s("div",{staticClass:"chat__items"},[s("div",{staticClass:"chat__items__you"},[s("a",{attrs:{href:"/items/"+t.items.you.id}},[s("img",{attrs:{src:t.items.you.photo}})]),t._v(" "),s("h3",[t._v(t._s(t.items.you.name))]),t._v(" "),s("p",[t._v("from user: "),s("a",{attrs:{href:"/"+t.users.you.username}},[t._v(t._s(t.users.you.username))])])]),t._v(" "),s("div",{staticClass:"chat__items__me"},[s("a",{attrs:{href:"/items/"+t.items.me.id}},[s("img",{attrs:{src:t.items.me.photo}})]),t._v(" "),s("h3",[t._v(t._s(t.items.me.name))]),t._v(" "),s("p",[t._v("from you: "),s("a",{attrs:{href:"/"+t.users.me.username}},[t._v("("+t._s(t.users.me.username)+")")])])])]),t._v(" "),s("div",{staticClass:"chat__messages"},t._l(t.sortedMsgs,function(e){return s("div",{staticClass:"chat__messages__msg clearfix"},[s("p",{class:{me:e.me}},[t._v(t._s(e.messageContent))]),t._v(" "),s("span",{class:{me:e.me}},[t._v(t._s(e.messageAuthor))])])})),t._v(" "),s("form",{staticClass:"chat__input",on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;e.preventDefault()}}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newMessage,expression:"newMessage"},{name:"focus",rawName:"v-focus"}],attrs:{placeholder:"Enter a new message and hit enter"},domProps:{value:t.newMessage},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;e.stopPropagation(),t.submit(e)},input:function(e){e.target.composing||(t.newMessage=e.target.value)}}})])])])]):t._e()])},Ft=[],Nt={render:Dt,staticRenderFns:Ft},zt=Nt,Et=s("VU/8"),Ut=c,Pt=Et(xt,zt,!1,Ut,null,null),Rt=Pt.exports,$t=s("i9MD"),Mt=s.n($t),Ot=s("Qnkd"),St=s.n(Ot),Vt=St()(),qt={name:"homepage",data:function(){return{homepageItems:{},itemsData:{}}},mounted:function(){var t=this;this.getItems(),window.addEventListener("resize",function(){var e=St()();t.homepageItems=Mt()(e,t.itemsData)})},methods:{getItems:function(){var t=this;fetch("/api").then(function(e){if(200!==e.status)return void console.log("Looks like there was a problem. Status Code: "+e.status);e.json().then(function(e){t.itemsData=e,t.homepageItems=Mt()(Vt,e)})}).catch(function(t){console.log("Fetch Error :-S",t)})}}},Bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"homepage"},[s("div",{staticClass:"item-grid"},[s("div",{staticClass:"column"},t._l(t.homepageItems[0],function(e){return s("article",{staticClass:"item"},[s("router-link",{attrs:{to:"items/"+e.id}},[s("img",{staticClass:"item__photo",attrs:{src:e.img_path}}),t._v(" "),s("h3",{staticClass:"item__name"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"item__description"},[t._v(t._s(e.description))])])],1)})),t._v(" "),t.homepageItems[1]?s("div",{staticClass:"column"},t._l(t.homepageItems[1],function(e){return s("article",{staticClass:"item"},[s("router-link",{attrs:{to:"items/"+e.id}},[s("img",{staticClass:"item__photo",attrs:{src:e.img_path}}),t._v(" "),s("h3",{staticClass:"item__name"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"item__description"},[t._v(t._s(e.description))])])],1)})):t._e(),t._v(" "),t.homepageItems[2]?s("div",{staticClass:"column"},t._l(t.homepageItems[2],function(e){return s("article",{staticClass:"item"},[s("router-link",{attrs:{to:"items/"+e.id}},[s("img",{staticClass:"item__photo",attrs:{src:e.img_path}}),t._v(" "),s("h3",{staticClass:"item__name"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"item__description"},[t._v(t._s(e.description))])])],1)})):t._e(),t._v(" "),t.homepageItems[3]?s("div",{staticClass:"column"},t._l(t.homepageItems[3],function(e){return s("article",{staticClass:"item"},[s("router-link",{attrs:{to:"items/"+e.id}},[s("img",{staticClass:"item__photo",attrs:{src:e.img_path}}),t._v(" "),s("h3",{staticClass:"item__name"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"item__description"},[t._v(t._s(e.description))])])],1)})):t._e()])])},Lt=[],Tt={render:Bt,staticRenderFns:Lt},At=Tt,Ht=s("VU/8"),Wt=u,Xt=Ht(qt,At,!1,Wt,null,null),Jt=Xt.exports,Kt={data:function(){return{userData:{},notFound:!1}},mounted:function(){this.getUserProfile()},methods:{getUserProfile:function(){var t=this;if(this.$route.params.id)var e="/api/users/"+this.$route.params.id;else if(this.$route.params.username)var e="/api/profile/"+this.$route.params.username;fetch(e).then(function(e){200===e.status&&e.json().then(function(e){t.userData=e}),400===e.status&&(console.log("here"),t.notFound=!0)})}}},Gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[t.notFound?s("div",{staticClass:"not-found"},[t._v("Not Found")]):t._e(),t._v(" "),t.userData[0]?s("div",{staticClass:"profile"},[s("div",{staticClass:"profile__container"},[s("div",{staticClass:"profile__photo"},[s("img",{attrs:{src:t.userData[0].userPhoto}})]),t._v(" "),s("div",{staticClass:"profile__info"},[s("h2",{staticClass:"profile__name"},[t._v(t._s(t.userData[0].userName))]),t._v(" "),s("div",{staticClass:"profile__location"},[t._v("Location: "+t._s(t.userData[0].userLocation))])])]),t._v(" "),s("div",{staticClass:"profile__items"},[s("h2",{staticClass:"profile__items__header"},[t._v(t._s(t.userData[0].userName)+"'s swapabilia:")]),t._v(" "),t._l(t.userData,function(e){return s("article",[s("router-link",{attrs:{to:"/items/"+e.itemId}},[e.itemName?s("h2",[t._v(t._s(e.itemName))]):s("h2",[t._v("anon")]),t._v(" "),s("img",{attrs:{src:e.itemImage}})]),t._v(" "),s("p",[t._v(t._s(e.itemDescription))])],1)})],2)]):t._e()])},Qt=[],Zt={render:Gt,staticRenderFns:Qt},Yt=Zt,te=s("VU/8"),ee=l,se=te(Kt,Yt,!1,ee,null,null),ae=se.exports,ne=s("DtRx"),ie=s.n(ne),re={name:"",description:"",tags:["Other"],imageUrl:""},oe={props:["userData"],data:function(){return{formContent:re,image:""}},methods:{imageChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.createImage(e[0])},createImage:function(t){var e=this,s=(new Image,new FileReader);s.onload=function(t){e.image=t.target.result},s.readAsDataURL(t)},removeImage:function(){this.image=""},submitItem:function(){var t=this,e=ie()(),s=document.getElementById("item-photo").files[0],a=s.name,n=a.substring(a.lastIndexOf(".")),i=e+n;this.formContent.imageUrl=_+"images/"+i,this.formContent.userId=this.userData.id,fetch("/api/items",{method:"post",headers:{"Content-type":"application/json"},body:kt()(this.formContent)}).then(function(t){return t.text()}).catch(function(t){console.log("Request failed",t)});var r=new FormData;r.append("photo",s),r.append("fileName",i),fetch("/api/items/photo",{method:"post",body:r}),setTimeout(function(){t.$router.push("/")},400)}},directives:{focus:{inserted:function(t){t.focus()}}}},me=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"fullscreen item-background"}),t._v(" "),s("div",{staticClass:"full-flex-middle"},[s("div",{staticClass:"new-item"},[s("h2",[t._v("New Item")]),t._v(" "),s("h3",{staticClass:"new-item__sub-header"},[t._v("Add some new swapabilia, you're allowed one image.  Make it count!")]),t._v(" "),s("h2",{staticClass:"new-item__field-name"},[t._v("Item Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formContent.name,expression:"formContent.name",modifiers:{trim:!0}},{name:"focus",rawName:"v-focus"}],staticClass:"new-item__field",domProps:{value:t.formContent.name},on:{input:function(e){e.target.composing||t.$set(t.formContent,"name",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("h2",{staticClass:"new-item__field-name"},[t._v("Item Description")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formContent.description,expression:"formContent.description",modifiers:{trim:!0}}],staticClass:"new-item__field",domProps:{value:t.formContent.description},on:{input:function(e){e.target.composing||t.$set(t.formContent,"description",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),t.image?s("div",[s("img",{staticClass:"new-item__img-preview margin-bottom",attrs:{src:t.image,alt:"upload image preview"}}),t._v(" "),s("div",{staticClass:"new-item__field button",on:{click:t.removeImage}},[t._v("Remove Image")])]):s("div",[s("h2",{staticClass:"new-item__field-name"},[t._v("Item Photo")])]),t._v(" "),s("input",{staticClass:"new-item__field margin-bottom",class:{hidden:t.image},attrs:{type:"file",id:"item-photo"},on:{change:t.imageChange}}),t._v(" "),s("div",{staticClass:"new-item__field button",on:{click:t.submitItem}},[t._v("\n        Submit Item\n      ")])])])])},ce=[],ue={render:me,staticRenderFns:ce},le=ue,de=s("VU/8"),fe=d,he=de(oe,le,!1,fe,null,null),ve=he.exports,_e={name:"Item",props:["userData"],data:function(){return{item:{},chatInfo:{},senderItems:{}}},mounted:function(){var t=this;console.log("item mounted running"),this.getItem();var e=setInterval(function(){t.userData&&(clearInterval(e),t.getSenderItems())},200)},methods:{getItem:function(){var t=this;fetch("/api/items/"+this.$route.params.id).then(function(e){if(200!==e.status)return void console.log("Looks like there was a problem. Status Code: "+e.status);e.json().then(function(e){"string"==typeof e.tagName&&(e.tagName=[e.tagName]),t.item=e}).catch(function(t){console.log("Fetch Error :-S",t)})})},swap:function(){console.log("in the swap function"),console.log(this.chatInfo.senderItemId),this.chatInfo.senderId=this.userData.id,this.chatInfo.receiverId=this.item.user_id,this.chatInfo.receiverItemId=this.item.id,fetch("/api/chats",{method:"post",headers:{"Content-type":"application/json"},body:kt()(this.chatInfo)}).then(this.$router.push("/chats"))},getSenderItems:function(){var t=this;fetch("/api/users/"+this.userData.id).then(function(e){if(200!==e.status)return void console.log("Looks like there was a problem. Status Code: "+e.status);e.json().then(function(e){var s=!0,a=!1,n=void 0;try{for(var i,r=dt()(e);!(s=(i=r.next()).done);s=!0){i.value.isActive=!1}}catch(t){a=!0,n=t}finally{try{!s&&r.return&&r.return()}finally{if(a)throw n}}t.senderItems=e}).catch(function(t){console.log("Fetch Error :-S",t)})})},select:function(t){console.log("you are in the select fxn");var e=t.path[1].dataset.item;this.chatInfo.senderItemId=e,console.log(e),this.senderItems.map(function(t){t.isActive=!1,t.itemId==e&&(t.isActive=!0)})}},directives:{focus:{inserted:function(t){t.focus()}}}},pe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view-item"},[s("h2",{staticClass:"view-item__name"},[t._v("\n    "+t._s(t.item.name)+"\n  ")]),t._v(" "),s("div",{staticClass:"view-item__photo"},[s("img",{attrs:{src:t.item.img_path}})]),t._v(" "),s("div",{staticClass:"view-item__info"},[s("p",[t._v(t._s(t.item.description))]),t._v(" "),s("p",[t._v("tag(s):\n      "),s("ul",t._l(t.item.tagName,function(e){return s("li",[t._v(t._s(e))])}))])]),t._v(" "),t.userData&&t.item.user_id!==t.userData.id?s("div",{staticClass:"view-item__swap-section"},[s("div",{staticClass:"view-item__sender-swappabilia clearfix"},[s("h2",{staticClass:"view-item__sender-swappabilia__header"},[t._v("Your swappabilia (offer an item...)")]),t._v(" "),t._l(t.senderItems,function(e){return s("article",{on:{click:t.select}},[s("div",{class:{active:e.isActive},attrs:{"data-item":e.itemId}},[s("h4",[t._v(t._s(e.itemName))]),t._v(" "),s("img",{attrs:{src:e.itemImage}})])])})],2),t._v(" "),s("form",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.chatInfo.message,expression:"chatInfo.message"},{name:"focus",rawName:"v-focus"}],attrs:{placeholder:"Type a message and select an item to swap, then hit enter or click the swap button!"},domProps:{value:t.chatInfo.message},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.swap(e)},input:function(e){e.target.composing||t.$set(t.chatInfo,"message",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"view-item__swap-button",on:{click:t.swap}},[t._v("swap!")])]):s("div",[s("p",[s("router-link",{attrs:{to:"/"}},[t._v("Go find something to swap for your item!")])],1)])])},ge=[],Ce={render:pe,staticRenderFns:ge},we=Ce,je=s("VU/8"),ye=f,be=je(_e,we,!1,ye,null,null),Ie=be.exports;h.a.use(H.a);var ke=[{path:"/",component:Jt},{path:"/register",component:et},{path:"/login",component:ut},{path:"/chats",component:bt},{path:"/chats/:id",component:Rt},{path:"/newitem",component:ve},{path:"/items/:id",component:Ie},{path:"/users/:id",component:ae},{path:"/:username",component:ae}],xe=new H.a({routes:ke,mode:"history",scrollBehavior:function(t,e,s){return s||{x:0,y:0}}});s("uMhA");h.a.config.productionTip=!1,new h.a({el:"#app",router:xe,template:"<App/>",components:{App:A}})},"O+EK":function(t,e){},OZVQ:function(t,e){},Qnkd:function(t,e){function s(){var t=window,e="inner";return"innerWidth"in window||(e="client",t=document.documentElement||document.body),{width:t[e+"Width"],height:t[e+"Height"]}}t.exports=s},SIW1:function(t,e){},bETO:function(t,e){},bxzd:function(t,e){},gepn:function(t,e){},i9MD:function(t,e){function s(t,e){var s=[],a=t.width,n=[0,400,790,1100],i=n.filter(function(t){return t<=a}).length;return function(t){for(var a=0;a<t;a++)s[a]=[];for(var n=0;n<e.length;n++)s[n%t].push(e[n]);return s}(i)}t.exports=s},"jC/m":function(t,e,s){t.exports=s.p+"static/img/tallboys.848146b.png"},lBnZ:function(t,e){},rmf9:function(t,e){},uMhA:function(t,e){},uslO:function(t,e,s){function a(t){return s(n(t))}function n(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="uslO"},xmbP:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5683c002251c479fa743.js.map