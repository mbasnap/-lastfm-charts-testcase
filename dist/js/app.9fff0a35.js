(function(t){function e(e){for(var n,s,o=e[0],c=e[1],u=e[2],m=0,f=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/-lastfm-charts-testcase/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"025a":function(t,e,a){},"20e5":function(t,e,a){"use strict";var n=a("025a"),r=a.n(n);r.a},"2cd5":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"logo",on:{click:function(e){return t.goTo("")}}},[t._v("Top-Music")]),a("v-spacer"),t._l(["artists","tracks"],(function(e){return a("v-btn",{key:e,class:["nav",{active:t.isActive(e)}],attrs:{text:""},on:{click:function(a){return t.goTo(e)}}},[t._v(" "+t._s(e)+" ")])})),a("v-spacer"),a("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{active:t.loading,indeterminate:t.loading,absolute:"",bottom:"",color:"deep-purple accent-4"}})],2),a("v-content",[a("router-view")],1),a("v-footer",{attrs:{padless:""}},[a("v-row",{staticClass:"py-4 white--text",attrs:{justify:"center"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v(" Vuetify ")])])],1),a("err-snack-bar")],1)},i=[],s=(a("b0c0"),a("5530")),o=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{attrs:{value:t.err,"multi-line":!0}},[t._v(" "+t._s(t.err)+" "),a("v-btn",{attrs:{color:"red",text:""},on:{click:t.hideErr}},[t._v(" Close ")])],1)},u=[],l={computed:Object(s["a"])({},Object(o["c"])(["err"])),methods:Object(s["a"])({},Object(o["b"])(["hideErr"]))},m=l,f=a("2877"),v=a("6544"),p=a.n(v),d=a("8336"),b=a("2db4"),g=Object(f["a"])(m,c,u,!1,null,null,null),h=g.exports;p()(g,{VBtn:d["a"],VSnackbar:b["a"]});var j={name:"App",components:{ErrSnackBar:h},computed:Object(s["a"])({},Object(o["c"])(["loading"])),methods:{isActive:function(t){return t===this.$route.name},goTo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.isActive(t)||this.$router.push("/".concat(t))}}},O=j,V=(a("5fb0"),a("7496")),k=a("40dc"),_=a("a75b"),y=a("553a"),w=a("8e36"),x=a("0fd9"),C=a("2fa4"),T=a("2a7f"),$=Object(f["a"])(O,r,i,!1,null,"5a08e730",null),I=$.exports;p()($,{VApp:V["a"],VAppBar:k["a"],VBtn:d["a"],VContent:_["a"],VFooter:y["a"],VProgressLinear:w["a"],VRow:x["a"],VSpacer:C["a"],VToolbarTitle:T["a"]});var L=a("f309");n["a"].use(L["a"]);var S=new L["a"]({}),A=(a("99af"),a("bc3a")),P=a.n(A),E="http://ws.audioscrobbler.com/2.0/",B="c2797e2442ddb38a50280e1e697fa316",R={chart:{getTopArtists:function(t){return P.a.get("".concat(E,"?method=chart.gettopartists&page=").concat(t,"&api_key=").concat(B,"&format=json")).then((function(t){var e=t.data;return e.artists}))},getTopTracks:function(t){return P.a.get("".concat(E,"?method=chart.gettoptracks&page=").concat(t,"&api_key=").concat(B,"&format=json")).then((function(t){var e=t.data;return e.tracks}))}},getTopAlbums:function(t){return P.a.get("".concat(E,"?method=artist.gettopalbums&artist=").concat(t,"&api_key=").concat(B,"&format=json")).then((function(t){var e=t.data;return e.topalbums}))},getAlbumInfo:function(t,e){return P.a.get("".concat(E,"?method=album.getinfo&artist=").concat(t,"&album=").concat(e,"&api_key=").concat(B,"&format=json")).then((function(t){var e=t.data;return e.album}))}},M={install:function(t){Object.defineProperty(t.prototype,"$lastfm",{value:R})}},H=a("8c4f"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",[t._l(t.values,(function(e,n){return a("v-col",{key:n,attrs:{cols:t.cols}},[a("tile-item",{attrs:{value:t.getValue(e)},on:{click:function(a){t.goTo("music",t.getValue(e).title)}}})],1)})),a("infinite-loading",{on:{infinite:t.infiniteHandler}})],2)],1)},D=[],F=(a("d3b7"),a("ddb0"),a("2909")),J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-skeleton-loader",{attrs:{loading:t.loading,type:"card"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"375"},on:{click:function(e){return t.$emit("click")}}},[a("div",{staticClass:"title"},[a("v-list-item-title",[t._v(t._s(t.toTitleCase(t.value.title)))]),a("v-list-item-title",[t._v(t._s(t.toTitleCase(t.value.subtitle)))])],1),a("v-img",{attrs:{src:t.img.large,height:"300px",dark:""}},[a("v-row",{staticClass:"fill-height"},[a("v-spacer")],1)],1),a("v-list",t._l(Object.entries(t.value.info),(function(e){var n=e[0],r=e[1];return a("v-list-item",{key:n},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(n))])],1),a("v-list-item-content",[a("v-list-item-subtitle",[t._v(t._s(r))])],1)],1)})),1)],1)],1)},z=[],N=(a("a15b"),a("d81d"),a("fb6a"),a("ac1f"),a("1276"),a("13d5"),a("ade3")),Y={computed:{img:function(t){var e=t.value;return(e.image||[]).reduce((function(t,e){return Object(s["a"])({},t,Object(N["a"])({},e.size,e["#text"]))}),{})}}},q={mixins:[Y],props:{value:Object},computed:Object(s["a"])({},Object(o["c"])(["loading"])),methods:{toTitleCase:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.split(" ").map((function(t){return t.slice(0,1).toUpperCase()+t.slice(1).toLowerCase()})).join(" ")}}},G=q,K=(a("20e5"),a("b0af")),Q=a("adda"),W=a("8860"),X=a("da13"),Z=a("5d23"),tt=a("3129"),et=Object(f["a"])(G,J,z,!1,null,"cadea3e4",null),at=et.exports;p()(et,{VCard:K["a"],VImg:Q["a"],VList:W["a"],VListItem:X["a"],VListItemContent:Z["a"],VListItemSubtitle:Z["b"],VListItemTitle:Z["c"],VRow:x["a"],VSkeletonLoader:tt["a"],VSpacer:C["a"]});var nt={components:{TileItem:at},created:function(){this.values.length||this.loadItems()},computed:Object(s["a"])({},Object(o["c"])(["pages","loading"]),{values:function(){return[]},params:function(){return Object(s["a"])({},this.$route.params)},breakpoint:function(){return this.$vuetify.breakpoint},cols:function(t){var e=t.breakpoint;switch(e.name){case"xs":return 12;case"sm":return 6;case"md":return 3;case"lg":return 3;case"xl":return 3}}}),methods:Object(s["a"])({},Object(o["b"])(["load"]),{infiniteHandler:function(t){this.loadItems().then((function(e){e?t.loaded():t.complete()}))},loadItems:function(){var t=this,e=this.action,a=this.page;return this.load([e,a]).then((function(e){return t.setValues(Object(s["a"])({},e))}))},goTo:function(t,e){this.$router.push("/".concat(t,"/").concat(e.toLowerCase()))}})},rt={mixins:[nt],computed:Object(s["a"])({},Object(o["c"])({values:"artists"}),{action:function(){return this.$lastfm.chart.getTopArtists},page:function(t){var e=t.pages;return e.artists||1}}),methods:{getValue:function(t){var e=t.name,a=t.image,n=t.listeners,r=t.playcount,i={listeners:n,playcount:r};return{title:e,image:a,info:i}},setValues:function(t){var e=t["@attr"],a=t.artist,n=void 0===a?[]:a,r=this.$store,i=this.page,o=this.values;if(!(i>Object(s["a"])({},e).totalPages))return r.commit("pages",{artists:i+1}),r.commit("artists",[].concat(Object(F["a"])(o),Object(F["a"])(n))),!0}}},it=rt,st=a("62ad"),ot=a("a523"),ct=Object(f["a"])(it,U,D,!1,null,null,null),ut=ct.exports;p()(ct,{VCol:st["a"],VContainer:ot["a"],VRow:x["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",[t._l(t.values,(function(e,n){return a("v-col",{key:n,attrs:{cols:t.cols}},[a("tile-item",{attrs:{value:t.getValue(e)},on:{click:function(a){t.goTo("music",t.getValue(e).title)}}})],1)})),a("infinite-loading",{on:{infinite:t.infiniteHandler}})],2)],1)},mt=[],ft={mixins:[nt],computed:Object(s["a"])({},Object(o["c"])({values:"tracks"}),{action:function(){return this.$lastfm.chart.getTopTracks},page:function(t){var e=t.pages;return e.tracks||1}}),methods:{getValue:function(t){var e=t.artist,a=t.name,n=t.image,r=t.listeners,i=t.playcount,o=Object(s["a"])({},e),c=o.name,u={listeners:r,playcount:i};return{title:c,subtitle:a,image:n,info:u}},setValues:function(t){var e=t["@attr"],a=t.track,n=void 0===a?[]:a,r=this.$store,i=this.page,o=this.values;if(!(i>Object(s["a"])({},e).totalPages))return r.commit("pages",{tracks:i+1}),r.commit("tracks",[].concat(Object(F["a"])(o),Object(F["a"])(n))),!0}}},vt=ft,pt=Object(f["a"])(vt,lt,mt,!1,null,null,null),dt=pt.exports;p()(pt,{VCol:st["a"],VContainer:ot["a"],VRow:x["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-breadcrumbs",{attrs:{items:t.breadcrumbs}}),a("v-row",[t._l(t.values,(function(e,n){return a("v-col",{key:n,attrs:{cols:t.cols}},[a("tile-item",{attrs:{value:t.getValue(e)},on:{click:function(a){t.goTo(t.params.artist,t.getValue(e).title)}}})],1)})),a("infinite-loading",{on:{infinite:t.infiniteHandler}})],2)],1)},gt=[],ht={mixins:[nt],computed:Object(s["a"])({},Object(o["c"])(["artist"]),{action:function(){return this.$lastfm.getTopAlbums},page:function(t){var e=t.artist,a=t.params;return Object(s["a"])({},e[a.artist]).page||1},values:function(t){var e=t.artist,a=t.params;return Object(s["a"])({},e[a.artist]).albums||[]},breadcrumbs:function(t){var e=t.params;return[{text:e.artist.toUpperCase()}]}}),methods:{loadItems:function(){var t=this.action,e=this.params,a=this.page;return this.load([t,e.artist,a]).then(this.setValues)},getValue:function(t){var e=t.name,a=t.image,n=t.playcount,r={playcount:n};return{title:e,image:a,info:r}},setValues:function(t){var e=t["@attr"],a=t.album,n=this.$store,r=this.params,i=this.page,o=this.values;if(!(i>e.totalPages)){var c=[].concat(Object(F["a"])(o),Object(F["a"])(a)),u=Object(s["a"])({},this.artist,Object(N["a"])({},r.artist,{albums:c,page:i+1}));return n.commit("artist",u),!0}},goTo:function(t,e){this.$router.push("".concat(t,"/").concat(e.toLowerCase()))}}},jt=ht,Ot=a("2bc5"),Vt=Object(f["a"])(jt,bt,gt,!1,null,null,null),kt=Vt.exports;p()(Vt,{VBreadcrumbs:Ot["a"],VCol:st["a"],VContainer:ot["a"],VRow:x["a"]});var _t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-breadcrumbs",{attrs:{items:t.breadcrumbs}}),a("v-row",{style:{"flex-direction":t.width<800?"column":"row"}},[a("v-col",[a("v-skeleton-loader",{attrs:{loading:t.loading,type:"card"}},[a("v-card",{staticClass:"mx-auto",attrs:{tile:"","max-width":"434"}},[a("v-img",{attrs:{height:"100%",src:t.img.extralarge}},[a("v-row",{staticClass:"fill-height",attrs:{align:"end"}},[a("v-col",{staticClass:"py-0"},[a("v-list-item",{staticClass:"list__item",attrs:{color:"rgba(0, 0, 0, .4)",dark:""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(t._s(t.album.artist))]),a("v-list-item-subtitle",[t._v(t._s(t.album.name))]),a("v-list-item-subtitle",[t._v(t._s(t.published))])],1)],1)],1)],1)],1),a("v-list",t._l(Object.entries(t.info),(function(e){var n=e[0],r=e[1];return a("v-list-item",{key:n},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(n))])],1),a("v-list-item-content",[a("v-list-item-subtitle",[t._v(t._s(r))])],1)],1)})),1)],1)],1)],1),a("v-col",[a("v-skeleton-loader",{attrs:{loading:t.loading,type:"table-tbody"}},[a("v-data-table",{attrs:{headers:[{value:"index",text:"№"},{align:"start",text:"name",value:"name"},{align:"end",text:"duration",value:"duration"}],items:t.tracks,"hide-default-footer":""}})],1)],1)],1)],1)},yt=[],wt={mixins:[nt,Y],computed:Object(s["a"])({},Object(o["c"])(["album"]),{value:function(t){var e=t.album,a=t.key;return Object(s["a"])({},e[a])},published:function(t){var e=t.value;return Object(s["a"])({},e.wiki).published},tracks:function(t){var e=t.value;return(Object(s["a"])({},e.tracks).track||[]).map((function(t,e){return Object(s["a"])({},t,{index:e+1})}))},info:function(t){var e=t.value,a=e.playcount,n=e.listeners;return{playcount:a,listeners:n}},action:function(){return this.$lastfm.getAlbumInfo},breadcrumbs:function(t){var e=t.params,a=e.artist,n=e.album;return[{text:a.toUpperCase(),disabled:!1,href:"#/music/".concat(a)},{text:n.toUpperCase()}]},key:function(t){var e=t.params,a=e.artist,n=e.album;return"".concat(a,"-").concat(n)},width:function(t){var e=t.breakpoint;return e.width}}),methods:{loadItems:function(){var t=this.action,e=this.params,a=e.artist,n=e.album;return this.load([t,a,n]).then(this.setValues)},getValue:function(t){var e=t.name,a=t.image,n=t.listeners,r=t.playcount,i={listeners:n,playcount:r};return{title:e,image:a,info:i}},setValues:function(t){var e=this.album,a=this.key;this.$store.commit("album",Object(s["a"])({},e,Object(N["a"])({},a,t)))}}},xt=wt,Ct=(a("c949"),a("8fea")),Tt=Object(f["a"])(xt,_t,yt,!1,null,"2f722555",null),$t=Tt.exports;p()(Tt,{VBreadcrumbs:Ot["a"],VCard:K["a"],VCol:st["a"],VContainer:ot["a"],VDataTable:Ct["a"],VImg:Q["a"],VList:W["a"],VListItem:X["a"],VListItemContent:Z["a"],VListItemSubtitle:Z["b"],VListItemTitle:Z["c"],VRow:x["a"],VSkeletonLoader:tt["a"]}),n["a"].use(H["a"]);var It=[{path:"/",name:"home",component:ut},{path:"/artists",name:"artists",component:ut},{path:"/music/:artist",name:"music",component:kt},{path:"/music/:artist/:album",name:"album",component:$t},{path:"/tracks",name:"tracks",component:dt}],Lt=new H["a"]({base:"/-lastfm-charts-testcase/",routes:It}),St=Lt,At=a("4f96");n["a"].use(o["a"]);var Pt=new o["a"].Store({state:{loading:!1,artists:[],tracks:[],artist:{},album:{},pages:{},err:""},getters:{artists:function(t){var e=t.artists;return e},tracks:function(t){var e=t.tracks;return e},artist:function(t){var e=t.artist;return e},album:function(t){var e=t.album;return e},pages:function(t){var e=t.pages;return e},loading:function(t){var e=t.loading;return e},err:function(t){var e=t.err;return e}},mutations:{artists:function(t,e){t.artists=e},tracks:function(t,e){t.tracks=e},artist:function(t,e){t.artist=e},album:function(t,e){t.album=e},pages:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.pages=Object(s["a"])({},t.pages,{},e)},loading:function(t,e){t.loading=e},err:function(t,e){t.err=e}},actions:{hideErr:function(t){var e=t.commit;e("err","")},load:function(t,e){var a=t.commit,n=Object(At["a"])(e),r=n[0],i=n.slice(1);return a("loading",!0),r.apply(void 0,Object(F["a"])(i)).then((function(t){return a("loading",!1),t})).catch((function(t){var e=t.response,n=e.data.message;a("loading",!1),a("err",n)}))}},modules:{}}),Et=a("e166"),Bt=a.n(Et);n["a"].config.productionTip=!1,n["a"].use(M),n["a"].use(Bt.a,{}),new n["a"]({vuetify:S,router:St,store:Pt,render:function(t){return t(I)}}).$mount("#app")},"5fb0":function(t,e,a){"use strict";var n=a("2cd5"),r=a.n(n);r.a},c949:function(t,e,a){"use strict";var n=a("cc8e"),r=a.n(n);r.a},cc8e:function(t,e,a){}});
//# sourceMappingURL=app.9fff0a35.js.map