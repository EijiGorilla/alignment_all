"use strict";(self.webpackChunkalignment_all=self.webpackChunkalignment_all||[]).push([[6790],{12482:(e,t,n)=>{n.d(t,{$7:()=>m,B:()=>g,Fo:()=>v,M7:()=>b,Q5:()=>y,XF:()=>x,bK:()=>a,bh:()=>u,id:()=>d,ky:()=>l,qt:()=>_,tW:()=>A,w7:()=>s,wS:()=>h,xS:()=>p});var r=n(31633),o=n(59097);function i(e){return e?_:w}function a(e,t){return null!=t?t:i(e)}function s(e,t){return function(e,t){return t?.mode?t.mode:i(e).mode}(null==e||(e.hasZ??!1),t)}function l(e){const t=f(e);return s(e.geometry,t)}function u(e){const t=f(e),n=s(e.geometry,t),r=null!=t&&"on-the-ground"!==n?b(t):0,o=t?.featureExpressionInfo;return{mode:n,offset:r,featureExpressionInfo:o}}function f(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function c(e,t){if(!e?.offset)return 0;const{offset:n,unit:o}=e;if("decimal-degrees"===o)return 0;const i="unknown"!==o&&o?o:"meters",a=(0,r.mq)(t);return a?(0,r.oU)(n,i,a):0}function d(e,t,n){if(!n?.mode)return;const r=e.hasZ?e.z:0,o=c(n,e.spatialReference);switch(n.mode){case"absolute-height":return r-o;case"on-the-ground":return 0;case"relative-to-ground":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"ground")??0)+o);case"relative-to-scene":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"scene")??0)+o)}}function h(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return v(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,n,r)}function p(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return v(e,t[0],t[1],t.length>2?t[2]:0,n,r,o)}function v(e,t,n,r,o,i){let a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==i)return;const s=null!=a?a.mode:"absolute-height";if("on-the-ground"===s)return 0;const{absoluteZ:l}=y(t,n,r,o,e,i);return function(e,t,n,r,o,i,a,s){const l=c(a,o);switch(s){case"absolute-height":return e-l;case"relative-to-ground":return e-((i.elevationProvider.getElevation(t,n,r,o,"ground")??0)+l);case"relative-to-scene":return e-((i.elevationProvider.getElevation(t,n,r,o,"scene")??0)+l)}}(l,t,n,r,o,e,a,s)}function y(e,t,n,r,o,i){const a=c(i,r);switch(i.mode){case"absolute-height":return{absoluteZ:n+a,elevation:0};case"on-the-ground":{const n=o.elevationProvider.getElevation(e,t,0,r,"ground")??0;return{absoluteZ:n,elevation:n}}case"relative-to-ground":{const i=o.elevationProvider.getElevation(e,t,n,r,"ground")??0;return{absoluteZ:n+i+a,elevation:i}}case"relative-to-scene":{const i=o.elevationProvider.getElevation(e,t,n,r,"scene")??0;return{absoluteZ:n+i+a,elevation:i}}}}function g(e,t,n){return n&&n.mode!==t?`${e} only support ${t} elevation mode`:null}function m(e,t,n){return n?.mode===t?`${e} do not support ${t} elevation mode`:null}function A(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function x(e,t){t&&e.warn(".elevationInfo=",t)}function b(e){return(e?.offset??0)*(0,o.Ao)(e?.unit)}const _={mode:"absolute-height",offset:0},w={mode:"on-the-ground",offset:null}},76790:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var r=n(35143),o=n(3825),i=n(50076),a=n(76460),s=n(15941),l=n(77717),u=n(50346),f=n(46053),c=(n(81806),n(47249),n(85842)),d=n(20664),h=n(9392),p=n(34111),v=n(76797),y=n(13312),g=n(45308),m=n(25515),A=n(12406),x=n(19502),b=n(31362),_=n(11270),w=n(94729),E=n(5682),M=n(95363),I=n(12482);let Z=class extends((0,x.b)((0,_.q)((0,w.A)((0,E.j)((0,l.P)((0,b.d)((0,A.p)(m.A)))))))){constructor(e){super(e),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new y.A({wkid:4326,vcsWkid:115700}),this.fullExtent=new v.A(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}_verifyArray(e,t){if(!Array.isArray(e)||e.length<t)return!1;for(const n of e)if("number"!=typeof n)return!1;return!0}_initFullExtent(e){const t=e.root?.boundingVolume;if(!t)return;if(t.box){const e=t?.box;if(e[3]>7972671&&e[7]>7972671&&e[11]>7945940)return}const n=e.root?.transform,r=(0,h.vt)();if(t.region&&this._verifyArray(t.region,6)){const e=t.region,n=(0,s.KJ)(e[0]),r=(0,s.KJ)(e[1]),o=e[4],i=(0,s.KJ)(e[2]),a=(0,s.KJ)(e[3]),l=e[5];this.fullExtent=new v.A({xmin:n,ymin:r,zmin:o,xmax:i,ymax:a,zmax:l,spatialReference:this.spatialReference})}else if(t.sphere&&this._verifyArray(t.sphere,4)){const e=t.sphere,o=(0,h.fA)(e[0],e[1],e[2]),i=e[3]/Math.sqrt(3),a=(0,h.vt)();(0,d.d)(a,o,(0,h.fA)(i,i,i));const s=(0,h.vt)();if((0,d.g)(s,o,(0,h.fA)(i,i,i)),n&&this._verifyArray(n,16)){const e=n;(0,d.t)(r,a,e),(0,d.c)(a,r),(0,d.t)(r,s,e),(0,d.c)(s,r)}(0,g.projectBuffer)(a,p.Ro,0,a,y.A.WGS84,0),(0,g.projectBuffer)(s,p.Ro,0,s,y.A.WGS84,0);const l=(0,h.vt)(),u=(0,h.vt)();(0,d.A)(l,a,s),(0,d.D)(u,a,s),this.fullExtent=new v.A({xmin:l[0],ymin:l[1],zmin:l[2],xmax:u[0],ymax:u[1],zmax:u[2],spatialReference:this.spatialReference})}else if(t.box&&this._verifyArray(t.box,12)){const e=t.box,r=(0,h.fA)(e[0],e[1],e[2]),o=(0,h.fA)(e[3],e[4],e[5]),i=(0,h.fA)(e[6],e[7],e[8]),a=(0,h.fA)(e[9],e[10],e[11]),s=[];for(let t=0;t<8;++t)s.push((0,h.vt)());if((0,d.g)(s[0],r,o),(0,d.g)(s[0],s[0],i),(0,d.g)(s[0],s[0],a),(0,d.a)(s[1],r,o),(0,d.g)(s[1],s[1],i),(0,d.g)(s[1],s[1],a),(0,d.g)(s[2],r,o),(0,d.a)(s[2],s[2],i),(0,d.g)(s[2],s[2],a),(0,d.a)(s[3],r,o),(0,d.a)(s[3],s[3],i),(0,d.g)(s[3],s[3],a),(0,d.g)(s[4],r,o),(0,d.g)(s[4],s[4],i),(0,d.a)(s[4],s[4],a),(0,d.a)(s[5],r,o),(0,d.g)(s[5],s[5],i),(0,d.a)(s[5],s[5],a),(0,d.g)(s[6],r,o),(0,d.a)(s[6],s[6],i),(0,d.a)(s[6],s[6],a),(0,d.a)(s[7],r,o),(0,d.a)(s[7],s[7],i),(0,d.a)(s[7],s[7],a),n&&this._verifyArray(n,16)){const e=n;for(let t=0;t<8;++t)(0,d.t)(s[t],s[t],e)}const l=(0,h.fA)(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),u=(0,h.fA)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let t=0;t<8;++t)(0,g.projectBuffer)(s[t],p.Ro,0,s[t],y.A.WGS84,0),(0,d.A)(u,u,s[t]),(0,d.D)(l,l,s[t]);this.fullExtent=new v.A({xmin:u[0],ymin:u[1],zmin:u[2],xmax:l[0],ymax:l[1],zmax:l[2],spatialReference:this.spatialReference})}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=null!=e?e.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:e=>{if(e.typeKeywords?.includes("IntegratedMesh"))return!0;throw new i.A("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},e)}catch(n){(0,u.QP)(n)}if(this.url){const e=(0,o.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then((e=>{this._initFullExtent(e.data)}),(e=>{(0,u.QP)(e)}));await e}}async fetchAttributionData(){return this.load().then((()=>({})))}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh 3d tiles layers";(0,I.XF)(a.A.getLogger(this),(0,I.B)(t,"absolute-height",e)),(0,I.XF)(a.A.getLogger(this),(0,I.tW)(t,e))}};(0,r._)([(0,f.MZ)({type:["IntegratedMesh3DTilesLayer"]})],Z.prototype,"operationalLayerType",void 0),(0,r._)([(0,f.MZ)({type:y.A})],Z.prototype,"spatialReference",void 0),(0,r._)([(0,f.MZ)({type:v.A})],Z.prototype,"fullExtent",void 0),(0,r._)([(0,f.MZ)(M.Yj)],Z.prototype,"elevationInfo",null),(0,r._)([(0,f.MZ)({type:["show","hide"]})],Z.prototype,"listMode",void 0),(0,r._)([(0,f.MZ)(M.OZ)],Z.prototype,"url",void 0),(0,r._)([(0,f.MZ)({readOnly:!0})],Z.prototype,"type",void 0),(0,r._)([(0,f.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],Z.prototype,"path",void 0),(0,r._)([(0,f.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],Z.prototype,"minScale",void 0),(0,r._)([(0,f.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],Z.prototype,"maxScale",void 0),Z=(0,r._)([(0,c.$)("esri.layers.IntegratedMesh3DTilesLayer")],Z);const R=Z}}]);
//# sourceMappingURL=6790.ac44dfe0.chunk.js.map