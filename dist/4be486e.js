(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{731:function(t,r,e){var content=e(801);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(21).default)("a4faf238",content,!0,{sourceMap:!1})},800:function(t,r,e){"use strict";e(731)},801:function(t,r,e){var c=e(20)(!1);c.push([t.i,':root{--primary:#fb1577;--secondary:#2b4ddf;--accent:#5820b4;--active:#931780;--error:#a50d0d;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--c:var(--clr);--font1:"Gotham",sans-serif;--font2:"Groningen",sans-serif;--font3:"Metropolis",sans-serif;--resizer:clamp(12px,1vw,16px);--resizer-mobile:clamp(10px,1.5vw,12px);--margin-global:9em;--parent:880px;--subparent:1900px;--h-navbar:4em;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#fff;--clr:#fff;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--accent);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(255,255,255,0.6)}:root.dark{--bg-ap:#000;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(255,255,255,0.6)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:8em}}@media(max-width:880px){:root{--margin-global:8em}}@media(max-width:600px)and (fixed-width:){:root{--margin-global:5em}}@media(max-width:600px){:root{--margin-global:5em}}@media(max-width:330px)and (fixed-width:){:root{--margin-global:3em}}@media(max-width:330px){:root{--margin-global:3em}}.clr_primary{background-color:#fb1577!important;background-color:var(--primary)!important}.clr_secondary{background-color:#2b4ddf!important;background-color:var(--secondary)!important}.clr_accent{background-color:#5820b4!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#withdrawals{max-width:880px!important;max-width:var(--parent)!important;width:100%!important;margin-left:auto!important;margin-right:auto!important;padding-top:3em;padding-left:9em;padding-right:9em;padding-left:var(--margin-global);padding-right:var(--margin-global);--spacing:5px}#withdrawals h2{--fs:max(18px,1.8em)}#withdrawals h3{--fs:max(16px,2.5em)}#withdrawals .v-card:not(#table-card){--p:clamp(1.5em,2vw,2em)}#withdrawals .v-btn.btn{--fs:max(13px,1.2em)}#withdrawals .anchorlineb{flex:1 1!important;padding-right:var(--spacing)}#withdrawals .anchorlineb+#container-h2{max-width:10em!important;padding-left:var(--spacing)}',""]),t.exports=c},851:function(t,r,e){"use strict";e.r(r);var c=e(260),l=e(696),n=e(841),o=e(65),d={name:"WithdrawalsPage",mixins:[e(281).a],data:function(){return{dataWithdraws:[{type:"bono residual",price:1500,state:"en proceso",date:"3d | 8h | 10m"},{type:"beneficio",price:1e3,state:"en proceso",date:"3d | 8h | 10m"},{type:"bono directo",price:1e3,state:"listo",date:void 0}],headerHistorial:[{value:"type",text:"TIPO",align:"center",sortable:!1},{value:"price",text:"VALOR",align:"center",sortable:!1},{value:"date",text:"RETIRO",align:"center",sortable:!1}],dataHistorial:[{type:"residual",price:1e3,date:"12/11/22"},{type:"directo",price:1500,date:"10/11/22"},{type:"beneficio",price:2e3,date:"8/11/22"}]}},head:function(){return{title:"Retiros"}},methods:{}},m=(e(800),e(31)),component=Object(m.a)(d,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"divcol center",staticStyle:{gap:"1.8em"},attrs:{id:"withdrawals"}},[r(l.a,{staticClass:"card divcol center tcenter",staticStyle:{"--bg":"#2B4DDF","--w":"min(100%, 30em)",gap:"0.625em"}},[r("h2",{staticClass:"p font1",staticStyle:{"--fw":"600"}},[t._v("BENEFICIOS DISPONIBLES")]),t._v(" "),r("h3",{staticClass:"p",staticStyle:{"--fw":"400"}},[t._v("2550 USDT")]),t._v(" "),r(c.a,{staticClass:"btn",staticStyle:{"--bg":"#03BBD4"}},[t._v("Solicitar")])],1),t._v(" "),r("h2",{staticClass:"p anchorlineb pt-7 htitle",staticStyle:{"--b":"auto","--h-line":"3px","--fs":"max(16px, 2em)"}},[t._v("\n    RETIROS\n  ")]),t._v(" "),t._l(t.dataWithdraws,(function(e,i){return r(l.a,{key:i,staticClass:"card divcol center",staticStyle:{"--bg":"var(--primary)","--w":"min(100%, 30em)",gap:"20px"}},[r("div",{staticClass:"fwrap fill_w"},[r("div",{staticClass:"divcol anchorlineb pb-2",staticStyle:{"--l":"auto","--w-line":"1px","--h-line":"100%"}},[r("span",{staticClass:"hspan tcap font3",staticStyle:{"--fs":"max(16px, 1.4em)"}},[t._v(t._s(e.type))]),t._v(" "),r("h2",{staticClass:"p tup font1"},[t._v(t._s(e.price)+" usdt")])]),t._v(" "),r(o.a,{staticClass:"jcenter",attrs:{id:"container-h2",color:"transparent"}},[r("h2",{staticClass:"p tup font1",staticStyle:{"--fs":"max(12px, 1em)",width:"110px"}},[t._v(t._s(e.state))])])],1),t._v(" "),e.date?r("span",{staticClass:"hspan",staticStyle:{"--fw":"bold","--fs":"max(14px, 1.2em)","text-shadow":"2px 2px #000"}},[t._v(t._s(e.date))]):r(c.a,{staticClass:"btn",staticStyle:{"--p":"8px 1.5em","--bg":"var(--accent)"}},[t._v("RETIRAR")])],1)})),t._v(" "),r("h2",{staticClass:"p htitle",staticStyle:{"--fs":"max(16px, 2em)"}},[t._v("\n    HISTORIAL\n  ")]),t._v(" "),r(l.a,{staticClass:"card divcol center",staticStyle:{"--bg":"var(--accent)","--w":"min(100%, 30em)",gap:"20px"},attrs:{id:"table-card"}},[r(n.a,{staticClass:"fill_w",attrs:{headers:t.headerHistorial,items:t.dataHistorial,"hide-default-footer":"","mobile-breakpoint":"-1"},scopedSlots:t._u([{key:"item.price",fn:function(r){var e=r.item;return[t._v("\n        "+t._s(e.price)+" USDT\n      ")]}}],null,!0)}),t._v(" "),r(c.a,{staticClass:"btn",staticStyle:{"--bg":"var(--primary)"}},[t._v("Ver más")])],1)],2)}),[],!1,null,null,null);r.default=component.exports}}]);