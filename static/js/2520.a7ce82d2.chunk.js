"use strict";(self.webpackChunkalignment_all=self.webpackChunkalignment_all||[]).push([[2520,8672],{10415:(t,e,r)=>{r.d(e,{$K:()=>h,KW:()=>c,Yb:()=>y,xs:()=>m});var i=r(3825),o=r(90534),n=r(19902),s=r(1438),l=r(80963),u=r(78238),a=r(57831);const p="Layer does not support extent calculation.";function d(t,e){const r=t.geometry,i=t.toJSON(),o=i;if(null!=r&&(o.geometry=JSON.stringify(r),o.geometryType=(0,n.$B)(r),o.inSR=(0,l.YX)(r.spatialReference)),i.topFilter?.groupByFields&&(o.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),i.topFilter?.orderByFields&&(o.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),i.objectIds&&(o.objectIds=i.objectIds.join(",")),i.orderByFields&&(o.orderByFields=i.orderByFields.join(",")),i.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?i.outFields.includes("*")?o.outFields="*":o.outFields=i.outFields.join(","):delete o.outFields,i.outSR?o.outSR=(0,l.YX)(i.outSR):r&&i.returnGeometry&&(o.outSR=o.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:r}=t;null==e&&null==r||(o.time=e===r?e:`${e??"null"},${r??"null"}`),delete i.timeExtent}return o}async function y(t,e,r,i){const o=await v(t,e,"json",i);return(0,a.q)(e,r,o.data),o}async function c(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:v(t,e,"json",r,{returnIdsOnly:!0})}async function h(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:v(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(p);if(e.hasOwnProperty("count"))throw new Error(p);return t}))}function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):v(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function v(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const a="string"==typeof t?(0,o.An)(t):t,p=e.geometry?[e.geometry]:[];return n.responseType="json",(0,s.el)(p,null,n).then((t=>{const s=t?.[0];null!=s&&((e=e.clone()).geometry=s);const p=(0,u.z)({...a.query,f:r,...l,...d(e,l)});return(0,i.A)((0,o.fj)(a.path,"queryTopFeatures"),{...n,query:{...p,...n.query}})}))}},12520:(t,e,r)=>{r.r(e),r.d(e,{executeForTopExtents:()=>l});r(35238);var i=r(54994),o=r(10415),n=r(58672),s=r(76797);async function l(t,e,r){const l=(0,i.Dl)(t),u=await(0,o.$K)(l,n.default.from(e),{...r}),a=u.data.extent;return!a||isNaN(a.xmin)||isNaN(a.ymin)||isNaN(a.xmax)||isNaN(a.ymax)?{count:u.data.count,extent:null}:{count:u.data.count,extent:s.A.fromJSON(a)}}},58672:(t,e,r)=>{r.r(e),r.d(e,{default:()=>R});var i,o=r(35143),n=r(35238),s=r(45802),l=r(42553),u=r(53084),a=r(46053),p=r(40565),d=r(85842),y=r(17707),c=r(19902);r(81806),r(76460),r(47249);let h=i=class extends l.oY{constructor(t){super(t),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new i({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],h.prototype,"groupByFields",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],h.prototype,"topCount",void 0),(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],h.prototype,"orderByFields",void 0),h=i=(0,o._)([(0,d.$)("esri.rest.support.TopFilter")],h);const m=h;var v,w=r(59187),F=r(13312);const S=new s.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),j=new s.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let f=v=class extends l.oY{constructor(t){super(t),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new v((0,u.o8)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,o._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],f.prototype,"cacheHint",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],f.prototype,"distance",void 0),(0,o._)([(0,a.MZ)({types:n.yR,json:{read:c.rS,write:!0}})],f.prototype,"geometry",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],f.prototype,"num",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],f.prototype,"objectIds",void 0),(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],f.prototype,"orderByFields",void 0),(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],f.prototype,"outFields",void 0),(0,o._)([(0,a.MZ)({type:F.A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],f.prototype,"outSpatialReference",void 0),(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],f.prototype,"resultType",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],f.prototype,"returnGeometry",void 0),(0,o._)([(0,a.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"returnM",void 0),(0,o._)([(0,a.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"returnZ",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],f.prototype,"start",void 0),(0,o._)([(0,y.K)("start"),(0,y.K)("num")],f.prototype,"writeStart",null),(0,o._)([(0,a.MZ)({type:String,json:{read:{source:"spatialRel",reader:S.read},write:{target:"spatialRel",writer:S.write}}})],f.prototype,"spatialRelationship",void 0),(0,o._)([(0,a.MZ)({type:w.A,json:{write:!0}})],f.prototype,"timeExtent",void 0),(0,o._)([(0,a.MZ)({type:m,json:{write:!0}})],f.prototype,"topFilter",void 0),(0,o._)([(0,a.MZ)({type:String,json:{read:j.read,write:{writer:j.write,overridePolicy(t){return{enabled:null!=t&&null!=this.distance&&this.distance>0}}}}})],f.prototype,"units",void 0),(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],f.prototype,"where",void 0),f=v=(0,o._)([(0,d.$)("esri.rest.support.TopFeaturesQuery")],f),f.from=(0,p.dp)(f);const R=f}}]);
//# sourceMappingURL=2520.a7ce82d2.chunk.js.map