(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{692:function(t,e,r){var o=r(387),n=r(47);t.exports=function(t,e,r){return r.get&&o(r.get,e,{getter:!0}),r.set&&o(r.set,e,{setter:!0}),n.f(t,e,r)}},698:function(t,e,r){t.exports=r.p+"img/logo-login.79ba263.svg"},699:function(t,e,r){r(4)({target:"Object",stat:!0},{is:r(386)})},701:function(t,e,r){"use strict";var o=r(36),n=r(107),c=r(61),l=r(68),d=r(692);o&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=c(this),e=l(t);return 0==e?void 0:t[e-1]},set:function(t){var e=c(this),r=l(e);return e[0==r?0:r-1]=t}}),n("lastItem"))},714:function(t,e,r){var content=r(715);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("dc0628f2",content,!0,{sourceMap:!1})},715:function(t,e,r){var o=r(20)(!1);o.push([t.i,':root{--primary:#fb1577;--secondary:#2b4ddf;--accent:#5820b4;--active:#931780;--error:#a50d0d;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--c:var(--clr);--font1:"Gotham",sans-serif;--font2:"Groningen",sans-serif;--font3:"Metropolis",sans-serif;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:880px;--subparent:1900px;--h-navbar:4em;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#fff;--clr:#fff;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--accent);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(255,255,255,0.6)}:root.dark{--bg-ap:#000;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(255,255,255,0.6)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:8em}}@media(max-width:880px){:root{--margin-global:8em}}@media(max-width:600px)and (fixed-width:){:root{--margin-global:5em}}@media(max-width:600px){:root{--margin-global:5em}}@media(max-width:330px)and (fixed-width:){:root{--margin-global:3em}}@media(max-width:330px){:root{--margin-global:3em}}.clr_primary{background-color:#fb1577!important;background-color:var(--primary)!important}.clr_secondary{background-color:#2b4ddf!important;background-color:var(--secondary)!important}.clr_accent{background-color:#5820b4!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}',""]),t.exports=o},733:function(t,e,r){var content=r(786);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("e950f8e4",content,!0,{sourceMap:!1})},769:function(t,e,r){"use strict";var o=r(186),n=r(124),c=r(160),l=r(0),d=r(9),m=Object(d.a)(o.a,Object(n.a)("windowGroup","v-window-item","v-window"));e.a=m.extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(l.h)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(l.h)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},770:function(t,e,r){"use strict";var o=r(2),n=(r(34),r(49),r(284),r(11),r(3),r(10),r(45),r(67),r(7),r(8),r(16),r(17),r(9)),c=r(123),l=r(164);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(n.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},774:function(t,e,r){"use strict";var o=r(2),n=(r(32),r(714),r(148)),c=r(40),l=r(185),d=r(282),m=r(245),f=r(0),v=r(12),h=r(9);e.a=Object(h.a)(c.a,l.a,d.a,m.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,r=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,n=0;return this.top||this.bottom||r?n=o+e.width/2-content.width/2:(this.left||this.right)&&(n=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(n,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,r=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=r+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=r+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),!1===this.attach&&(o+=this.pageYOffset),"".concat(this.calcYOverflow(o),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.h)(this.maxWidth),minWidth:Object(f.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.u)(this,"activator",!0)&&Object(v.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=n.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===f.z.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},785:function(t,e,r){"use strict";r(733)},786:function(t,e,r){var o=r(20)(!1);o.push([t.i,':root{--primary:#fb1577;--secondary:#2b4ddf;--accent:#5820b4;--active:#931780;--error:#a50d0d;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--c:var(--clr);--font1:"Gotham",sans-serif;--font2:"Groningen",sans-serif;--font3:"Metropolis",sans-serif;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:880px;--subparent:1900px;--h-navbar:4em;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#fff;--clr:#fff;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--accent);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(255,255,255,0.6)}:root.dark{--bg-ap:#000;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(255,255,255,0.6)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:8em}}@media(max-width:880px){:root{--margin-global:8em}}@media(max-width:600px)and (fixed-width:){:root{--margin-global:5em}}@media(max-width:600px){:root{--margin-global:5em}}@media(max-width:330px)and (fixed-width:){:root{--margin-global:3em}}@media(max-width:330px){:root{--margin-global:3em}}.clr_primary{background-color:#fb1577!important;background-color:var(--primary)!important}.clr_secondary{background-color:#2b4ddf!important;background-color:var(--secondary)!important}.clr_accent{background-color:#5820b4!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#login .v-main__wrap{padding-left:9em;padding-right:9em;padding-left:var(--margin-global);padding-right:var(--margin-global);padding-top:calc(4em + 20px)!important;padding-bottom:80px!important;padding-top:calc(var(--h-navbar) + 20px)!important;padding-bottom:var(--h-footer,80px)!important}@media(max-width:880px)and (fixed-width:){#login .v-main__wrap{--margin-global:8em}}@media(max-width:880px){#login .v-main__wrap{--margin-global:8em}}@media(max-width:600px)and (fixed-width:){#login .v-main__wrap{--margin-global:5em}}@media(max-width:600px){#login .v-main__wrap{--margin-global:5em}}@media(max-width:430px)and (fixed-width:){#login .v-main__wrap{--margin-global:3em}}@media(max-width:430px){#login .v-main__wrap{--margin-global:3em}}#login .v-main__wrap>*{font-size:clamp(12px,1vw,16px);font-size:var(--resizer)}@media(max-width:880px)and (fixed-width:){#login .v-main__wrap>*{font-size:clamp(10px,1.5vw,12px);font-size:var(--resizer-mobile)}}@media(max-width:880px){#login .v-main__wrap>*{font-size:clamp(10px,1.5vw,12px);font-size:var(--resizer-mobile)}}#login .v-input{--fs:clamp(.9em.,1vw,1.1em)}#login .v-input .v-icon,#login .v-input span{color:#fff!important}#login .v-window-item>section{display:flex;flex-direction:column;align-items:center;grid-gap:24px;gap:24px;width:min(100%,max(270px,24em));margin-left:auto;margin-right:auto}#login label{--fw:900;--fs:max(15px,1.35em);text-indent:.5ch}#login label sup{font-size:1.4em;top:0}#login .v-btn{--w:max-content;--fs:max(15px,1.25em);--p:.45em 1em}#login #register-window>section{width:min(100%,max(270px,28em))}#login #register-window>section .v-input{--bg:var(--primary)}#login #register-window>section .v-input__prepend-outer{margin-top:0;margin-bottom:0}#login #register-window>section .v-input__prepend-outer *{color:#fff!important}#login #register-window>section .v-input__prepend-outer input{display:none}#login #register-window>section .v-input__prepend-outer .v-input__append-inner{padding:0}#login #register-window>section .v-input__prepend-outer .v-input__append-inner .v-icon{font-size:1.1em}',""]),t.exports=o},870:function(t,e,r){"use strict";r.r(e);var o=r(259),n=r(770),c=r(244),l=r(683),d=r(744),m=r(695),f=r(774),v=r(263),h=r(769),w=(r(18),{name:"LoginPage",layout:"empty-layout",data:function(){var t=this;return{windowStep:1,formLogin:{username:void 0,password:void 0},formRegister:{email:void 0,username:void 0,password:void 0,partner:void 0,phonePrefix:"+593",phone:void 0},passwordConfirmerRegister:void 0,formRecover:{password:void 0},passwordConfirmerRecover:void 0,countryPhoneList:[{icon:r(389),number:"+593"},{icon:r(389),number:"+58"},{icon:r(392),number:"+2134"}],showLogin:!1,showRegister:!1,showRecover:!1,rules:{required:[function(t){return!!t||"Field required"}],email:[function(t){return!!t||"Field required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],confirmPasswordRegister:[function(t){return!!t||"Field required"},function(e){return t.formRegister.password===t.passwordConfirmerRegister||"Password must match"}],confirmPasswordRecover:[function(t){return!!t||"Field required"},function(e){return t.formRecover.password===t.passwordConfirmerRecover||"Password must match"}]}}},head:function(){return{title:"Login"}},methods:{login:function(){if(!this.$refs.formLogin.validate())return alert("verifica que los campos sean correctos");localStorage.setItem("auth",!0),this.$router.push(this.localePath("/profile"))},register:function(){if(!this.$refs.formRegister.validate())return alert("verifica que los campos sean correctos");localStorage.setItem("auth",!0),this.$router.push(this.localePath("/profile"))},recover:function(){if(!this.$refs.formRecover.validate())return alert("verifica que los campos sean correctos");console.log("recovered"),this.$alert("success",{title:"recovered"}),this.$router.go()}}}),x=(r(785),r(31)),component=Object(x.a)(w,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{id:"login"}},[e(v.a,{attrs:{touchless:""},model:{value:t.windowStep,callback:function(e){t.windowStep=e},expression:"windowStep"}},[e(h.a,{attrs:{id:"login-window",value:1}},[e("section",[e("img",{staticClass:"mb-16",staticStyle:{"--w":"max(150px, 13em)"},attrs:{src:r(698),alt:"logo"}}),t._v(" "),e(n.a,{ref:"formLogin",staticClass:"card divcol",staticStyle:{"--bg":"var(--primary)","--w":"100%",gap:"1em"},on:{submit:function(e){return e.preventDefault(),t.login()}}},[e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{attrs:{for:"username-login"}},[t._v("USUARIO:")]),t._v(" "),e(m.a,{attrs:{id:"username-login",rules:t.rules.required,placeholder:"Ingresa tu usuario","hide-details":"",solo:""},model:{value:t.formLogin.username,callback:function(e){t.$set(t.formLogin,"username",e)},expression:"formLogin.username"}})],1),t._v(" "),e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{attrs:{for:"password-login"}},[t._v("CONTRASEÑA:")]),t._v(" "),e(m.a,{attrs:{id:"password-login",type:t.showLogin?"number":"password",rules:t.rules.required,placeholder:"Ingresa tu contraseña","hide-details":"",solo:"","hide-spin-buttons":""},scopedSlots:t._u([{key:"append",fn:function(){return[e(c.a,{attrs:{size:"1.3em"},on:{click:function(e){t.showLogin=!t.showLogin}}},[t._v("\n                  mdi-eye"+t._s(t.showLogin?"":"-off")+"\n                ")])]},proxy:!0}]),model:{value:t.formLogin.password,callback:function(e){t.$set(t.formLogin,"password",e)},expression:"formLogin.password"}})],1),t._v(" "),e(o.a,{staticClass:"btn align",staticStyle:{"--bg":"var(--active)"},on:{click:function(e){return t.login()}}},[t._v("\n            Iniciar sesión\n          ")])],1),t._v(" "),e("aside",{staticClass:"divcol center tcenter",staticStyle:{gap:"inherit","--fs":"max(15px, 1.25em)"}},[e("a",{staticStyle:{"--fw":"800"},on:{click:function(e){t.windowStep=3}}},[t._v("\n            ¿Olvidaste tu contraseña?\n          ")]),t._v(" "),e("span",{staticClass:"hspan divcol center"},[t._v("\n            ¿No tienes cuenta?\n            "),e("a",{staticStyle:{"--fw":"800","--fs":"1em"},on:{click:function(e){t.windowStep=2}}},[t._v("Registrate aquí")])])])],1)]),t._v(" "),e(h.a,{attrs:{id:"register-window",value:2}},[e("section",[e("button",{staticClass:"mb-10",on:{click:function(e){t.windowStep=1}}},[e("img",{staticStyle:{"--w":"max(190px, 17em)"},attrs:{src:r(388),alt:"logo"}})]),t._v(" "),e(n.a,{ref:"formRegister",staticClass:"fill_w divcol",staticStyle:{gap:"1em"}},[e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{attrs:{for:"email-register"}},[t._v("CORREO "),e("sup",[t._v("*")])]),t._v(" "),e(m.a,{attrs:{id:"email-register",solo:"","hide-details":"",rules:t.rules.email},model:{value:t.formRegister.email,callback:function(e){t.$set(t.formRegister,"email",e)},expression:"formRegister.email"}})],1),t._v(" "),e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{staticClass:"relative",attrs:{for:"username-register"}},[t._v("USUARIO "),e("sup",[t._v("*")]),t._v(" "),e(f.a,{attrs:{top:"","nudge-top":"10px",color:"#fff","content-class":"custome-tooltip"},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on,c=o.attrs;return[e("img",t._g(t._b({staticClass:"absolute",staticStyle:{"--w":"max(16px, .9em)","--l":"auto","--top":"auto","--b":"-5px"},attrs:{src:r(391),alt:"tip"}},"img",c,!1),n))]}}])},[t._v(" "),e("span",[t._v("\n                  Ingresar nombre de usuario\n                ")])])],1),t._v(" "),e(m.a,{attrs:{id:"username-register",solo:"","hide-details":"",rules:t.rules.required},model:{value:t.formRegister.username,callback:function(e){t.$set(t.formRegister,"username",e)},expression:"formRegister.username"}})],1),t._v(" "),e("div",{staticClass:"divcol",staticStyle:{gap:"inherit"}},[e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{staticClass:"relative",attrs:{for:"password-register"}},[t._v("CONTRASEÑA "),e("sup",[t._v("*")]),t._v(" "),e(f.a,{attrs:{top:"","nudge-top":"10px",color:"#fff","content-class":"custome-tooltip"},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on,c=o.attrs;return[e("img",t._g(t._b({staticClass:"absolute",staticStyle:{"--w":"max(16px, .9em)","--l":"auto","--top":"auto","--b":"-5px"},attrs:{src:r(391),alt:"tip"}},"img",c,!1),n))]}}])},[t._v(" "),e("span",[t._v("\n                    Debe incluir mayúsculas, minúsculas, números y mínimo 8 carácteres\n                  ")])])],1),t._v(" "),e(m.a,{attrs:{id:t.formRegister.password?"":"password-register",type:t.showRegister?"number":"password",solo:"","hide-details":"","hide-spin-buttons":"",rules:t.rules.required},scopedSlots:t._u([{key:"append",fn:function(){return[e(c.a,{attrs:{size:"1.3em"},on:{click:function(e){t.showRegister=!t.showRegister}}},[t._v("\n                    mdi-eye"+t._s(t.showRegister?"":"-off")+"\n                  ")])]},proxy:!0}]),model:{value:t.formRegister.password,callback:function(e){t.$set(t.formRegister,"password",e)},expression:"formRegister.password"}})],1),t._v(" "),e(m.a,{attrs:{id:t.formRegister.password?"password-register":"",type:t.showRegister?"number":"password",solo:"","hide-details":"","hide-spin-buttons":"",rules:t.rules.confirmPasswordRegister},model:{value:t.passwordConfirmerRegister,callback:function(e){t.passwordConfirmerRegister=e},expression:"passwordConfirmerRegister"}})],1),t._v(" "),e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{attrs:{for:"partner-register"}},[t._v("PATROCINADOR")]),t._v(" "),e(m.a,{attrs:{id:"partner-register",solo:"","hide-details":""},model:{value:t.formRegister.partner,callback:function(e){t.$set(t.formRegister,"partner",e)},expression:"formRegister.partner"}})],1),t._v(" "),e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{attrs:{for:"phone-register"}},[t._v("TELÉFONO "),e("sup",[t._v("*")])]),t._v(" "),e(m.a,{attrs:{id:"phone-register",type:"number","hide-spin-buttons":"",solo:"","hide-details":"",rules:t.rules.required},scopedSlots:t._u([{key:"prepend",fn:function(){return[e(d.a,{attrs:{items:t.countryPhoneList,"item-text":"number",solo:"","hide-details":"","menu-props":"auto","append-icon":"mdi-chevron-down"},scopedSlots:t._u([{key:"selection",fn:function(r){var o=r.item;return[e("img",{staticClass:"mr-2 aspect",staticStyle:{"--w":"22px","--of":"cover","--br":"50%","--b":"1px solid #fff"},attrs:{src:o.icon,alt:"country flag"}}),t._v(" "),e("span",{staticStyle:{"--fw":"100"}},[t._v(t._s(o.number))])]}},{key:"item",fn:function(r){var o=r.item;return[e("img",{staticClass:"mr-2 aspect",staticStyle:{"--w":"22px","--of":"cover","--br":"50%","--b":"1px solid #fff"},attrs:{src:o.icon,alt:"country flag"}}),t._v(" "),e("span",{staticClass:"not_clr",staticStyle:{"--fw":"100"}},[t._v(t._s(o.number))])]}}]),model:{value:t.formRegister.phonePrefix,callback:function(e){t.$set(t.formRegister,"phonePrefix",e)},expression:"formRegister.phonePrefix"}})]},proxy:!0}]),model:{value:t.formRegister.phone,callback:function(e){t.$set(t.formRegister,"phone",e)},expression:"formRegister.phone"}})],1),t._v(" "),e(o.a,{staticClass:"btn align mt-5",staticStyle:{"--bg":"var(--primary)"},on:{click:function(e){return t.register()}}},[t._v("\n            Registrar\n          ")])],1)],1)]),t._v(" "),e(h.a,{attrs:{id:"login-window",value:3}},[e("section",[e("button",{staticClass:"mb-10",on:{click:function(e){t.windowStep=1}}},[e("img",{staticStyle:{"--w":"max(190px, 17em)"},attrs:{src:r(388),alt:"logo"}})]),t._v(" "),e(n.a,{ref:"formRecover",staticClass:"card divcol",staticStyle:{"--bg":"var(--primary)","--w":"100%",gap:"1em"},on:{submit:function(e){return e.preventDefault(),t.recover()}}},[e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{staticClass:"relative",attrs:{for:"password-recover"}},[t._v("NUEVA CONTRASEÑA:\n              "),e(f.a,{attrs:{top:"","nudge-top":"10px",color:"#fff","content-class":"custome-tooltip"},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on,c=o.attrs;return[e("img",t._g(t._b({staticClass:"absolute",staticStyle:{"--w":"max(16px, .9em)","--l":"auto","--top":"auto","--b":"-5px"},attrs:{src:r(391),alt:"tip"}},"img",c,!1),n))]}}])},[t._v(" "),e("span",[t._v("\n                  Debe incluir mayúsculas, minúsculas, números y mínimo 8 carácteres\n                ")])])],1),t._v(" "),e(m.a,{attrs:{id:"password-recover",type:t.showRecover?"number":"password",rules:t.rules.required,placeholder:"Ingresa nueva contraseña","hide-details":"",solo:"","hide-spin-buttons":""},scopedSlots:t._u([{key:"append",fn:function(){return[e(c.a,{attrs:{size:"1.3em"},on:{click:function(e){t.showRecover=!t.showRecover}}},[t._v("\n                  mdi-eye"+t._s(t.showRecover?"":"-off")+"\n                ")])]},proxy:!0}]),model:{value:t.formRecover.password,callback:function(e){t.$set(t.formRecover,"password",e)},expression:"formRecover.password"}})],1),t._v(" "),e("div",{staticClass:"divcol",staticStyle:{gap:".5em"}},[e("label",{attrs:{for:"confirm-password-recover"}},[t._v("CONFIRMAR CONTRASEÑA:")]),t._v(" "),e(m.a,{attrs:{id:"confirm-password-login",type:t.showRecover?"number":"password",rules:t.rules.confirmPasswordRecover,placeholder:"Confirma contraseña","hide-details":"",solo:"","hide-spin-buttons":""},model:{value:t.passwordConfirmerRecover,callback:function(e){t.passwordConfirmerRecover=e},expression:"passwordConfirmerRecover"}})],1),t._v(" "),e(o.a,{staticClass:"btn align",staticStyle:{"--bg":"var(--active)"},on:{click:function(e){return t.recover()}}},[t._v("\n            Recuperar\n          ")])],1)],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);