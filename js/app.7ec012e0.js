(function(t){function e(e){for(var r,l,i=e[0],s=e[1],u=e[2],p=0,d=[];p<i.length;p++)l=i[p],a[l]&&d.push(a[l][0]),a[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},o=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/gpxtools/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"38c8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),t.gpx?t._e():n("Uploader",{on:{uploaded:t.onUploadComplete}}),t.gpx?n("Editor",{attrs:{gpx:t.gpx}}):t._e()],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"/"}},[t._v("\n        🔧 GPXTools\n      ")]),n("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])])])}],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-link is-fullheight-with-navbar"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[t.isInitial||t.isSaving?n("form",{attrs:{enctype:"multipart/form-data",novalidate:""}},[n("h1",[t._v("Upload your GPX track")]),n("div",{staticClass:"dropbox"},[n("input",{staticClass:"input-file",attrs:{type:"file",name:t.uploadFieldName,disabled:t.isSaving,accept:"application/gpx+xml"},on:{change:function(e){return t.processGPX(e)}}}),t.isInitial?n("p",[t._v("\n              Drag your GPX file(s) here to begin"),n("br"),t._v(" or click to browse\n            ")]):t._e(),t.isSaving?n("p",[t._v("\n              Uploading "+t._s(t.fileCount)+" files...\n            ")]):t._e()])]):t._e()])])])},i=[],s=(n("28a5"),{name:"Uploader",data:function(){return{uploadedFiles:[],uploadFieldName:"GPX",isInitial:!0,isSaving:!1}},methods:{processGPX:function(t){var e=this,n=t.target.files[0],r=new FileReader;r.readAsDataURL(n),r.onload=function(){var t=r.result.split(",").pop(),n=atob(t),a=new DOMParser,o=a.parseFromString(n,"application/xml");e.$emit("uploaded",o)}}}}),u=s,c=(n("d045"),n("2877")),p=Object(c["a"])(u,l,i,!1,null,null,null),d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("Map",{attrs:{bounds:t.bounds,"hover-pos":t.hoverPos,polylines:t.polylines}}),n("ElevationProfile",{attrs:{title:t.title,distance:t.distance,latlngs:t.latlngs,elevations:t.elevations},on:{hover:t.onHover}})],1)},h=[],v=(n("ac4d"),n("8a81"),n("ac6a"),n("e11e")),g=n("595b"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("l-map",{staticStyle:{width:"100vw",height:"70vh"},attrs:{zoom:t.zoom,center:t.center,options:t.mapOptions,bounds:t.bounds}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.polylines,function(t,e){return n("l-polyline",{key:e,attrs:{"lat-lngs":t.latlngs,color:t.color}})}),t.hoverPos?n("l-marker",{attrs:{"lat-lng":t.hoverPos}}):t._e()],2)},m=[],y=n("2699"),x=n("a40a"),_=n("635f"),O=n("4e2b"),P={name:"Map",props:["polylines","bounds","hoverPos"],data:function(){return{zoom:13,center:Object(v["latLng"])(47.41322,-1.219482),url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',mapOptions:{zoomSnap:.5}}},components:{LMap:y["a"],LTileLayer:x["a"],LPolyline:_["a"],LMarker:O["a"]}},w=P,S=Object(c["a"])(w,b,m,!1,null,null,null),j=S.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("highcharts",{attrs:{id:"container",options:t.chartOptions}})},k=[],E=n("ea7f"),M=n.n(E),U={name:"ElevationProfile",props:["distance","latlngs","elevations","title"],data:function(){var t=0,e=[];if(this.elevations){var n=!0,r=!1,a=void 0;try{for(var o,l=this.elevations[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;i>t&&(t=i)}}catch(u){r=!0,a=u}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}for(var s=0;s<this.elevations.length;s++)e.push([this.distance/this.elevations.length*s,this.elevations[s],s])}return{maxEle:t,profile:e,chartOptions:{title:{text:this.title},subtitle:{text:"".concat(this.distance?this.distance.toFixed(2):"0"," kms")},chart:{type:"area",zoomType:"x",panning:!0,panKey:"shift",scrollablePlotArea:{minWidth:600}},series:[{data:e,lineColor:M.a.getOptions().colors[1],color:M.a.getOptions().colors[2],fillOpacity:.5,name:"Elevation",marker:{enabled:!1},threshold:null}],plotOptions:{series:{point:{events:{mouseOver:this.onMouseOver}}}}}}},methods:{onMouseOver:function(t){for(var e=t.target.options.x,n=0,r=0;r<this.profile.length;r++)e===this.profile[r][0]&&(n=r);this.$emit("hover",n)}}},L=U,$=(n("9dbb"),Object(c["a"])(L,C,k,!1,null,"4768957d",null)),F=$.exports,z={name:"Editor",props:["gpx"],components:{Map:j,ElevationProfile:F},data:function(){var t=[],e=[],n=null,r=0,a=[],o="";if(this.gpx){var l=this.gpx.querySelectorAll("trkseg");o=this.gpx.querySelector("trk name").textContent;var i=!0,s=!1,u=void 0;try{for(var c,p=l[Symbol.iterator]();!(i=(c=p.next()).done);i=!0){var d=c.value,f={latlngs:[],color:"green"},h=d.querySelectorAll("trkpt");console.log(h[0].children[0].textContent);var b=!0,m=!1,y=void 0;try{for(var x,_=h[Symbol.iterator]();!(b=(x=_.next()).done);b=!0){var O=x.value,P=[O.getAttribute("lat"),O.getAttribute("lon")];a.push(parseFloat(O.children[0].textContent)),f.latlngs.push(P),t.push(P)}}catch(S){m=!0,y=S}finally{try{b||null==_.return||_.return()}finally{if(m)throw y}}e.push(f);var w=f.latlngs.map(function(t){return[t[1],t[0]]});r+=Object(g["length"])(Object(g["lineString"])(w))}}catch(S){s=!0,u=S}finally{try{i||null==p.return||p.return()}finally{if(s)throw u}}n=new v["LatLngBounds"](t)}return{hoverPos:null,polylines:e,bounds:n,distance:r,latlngs:t,elevations:a,title:o}},methods:{onHover:function(t){this.hoverPos=this.latlngs[t]}}},A=z,G=Object(c["a"])(A,f,h,!1,null,null,null),I=G.exports,T={name:"app",components:{Uploader:d,Editor:I},data:function(){return{gpx:null}},methods:{onUploadComplete:function(t){this.gpx=t}}},X=T,D=Object(c["a"])(X,a,o,!1,null,null,null),q=D.exports,R=n("4452"),H=n.n(R);n("6cc5"),n("92c6"),n("38c8");delete v["Icon"].Default.prototype._getIconUrl,v["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),r["a"].config.productionTip=!1,r["a"].use(H.a),new r["a"]({render:function(t){return t(q)}}).$mount("#app")},"976f":function(t,e,n){},"9dbb":function(t,e,n){"use strict";var r=n("f25c"),a=n.n(r);a.a},d045:function(t,e,n){"use strict";var r=n("976f"),a=n.n(r);a.a},f25c:function(t,e,n){}});
//# sourceMappingURL=app.7ec012e0.js.map