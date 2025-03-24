"use strict";(self.webpackChunkalignment_all=self.webpackChunkalignment_all||[]).push([[6799],{10907:(e,t,n)=>{n.d(t,{BM:()=>I,bd:()=>j,sO:()=>T,xD:()=>p});var s=n(51344),r=n(50076),o=n(80963),i=n(20176),u=n(1484),a=n(53430);const l={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function p(e){return l[e]}function*c(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*d(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function f(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){let t=0;for(let n=0;n<e.length;n++){const s=e[n],r=e[(n+1)%e.length];t+=s[0]*r[1]-r[0]*s[1]}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const s of t.coordinates)b(e,s,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const s of t.coordinates){h(e,s[0],n);for(let t=1;t<s.length;t++)w(e,s[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return A(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const s=t.coordinates;h(e,s[0],n);for(let r=1;r<s.length;r++)w(e,s[r],n);return e}(e,t,n)}}function h(e,t,n){const s=m(t);!function(e){return!y(e)}(s)?b(e,s,n):F(e,s,n)}function w(e,t,n){const s=m(t);!function(e){return y(e)}(s)?b(e,s,n):F(e,s,n)}function b(e,t,n){for(const s of t)A(e,s,n);e.lengths.push(t.length)}function F(e,t,n){for(let s=t.length-1;s>=0;s--)A(e,t[s],n);e.lengths.push(t.length)}function A(e,t,n){const[s,r,o]=t;e.coords.push(s,r),n.hasZ&&e.coords.push(o||0)}function S(e){switch(typeof e){case"string":return(0,s.Br)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function T(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new r.A("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new r.A("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const s="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,i=(0,o.oT)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${t})$`,"i");if(!s||!i.test(s))throw new r.A("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=[],s=new Set,r=new Set;let o,i=!1,u=null,l=!1,{geometryType:y=null}=t;for(const g of c(e)){const{geometry:e,properties:t,id:c}=g;if((!e||(y||(y=p(e.type)),p(e.type)===y))&&(i||(i=f(d(e))),l||(l=null!=c,l&&(o=typeof c,t&&(u=Object.keys(t).filter((e=>t[e]===c))))),t&&u&&l&&null!=c&&(u.length>1?u=u.filter((e=>t[e]===c)):1===u.length&&(u=t[u[0]]===c?u:[])),t))for(const o in t){if(s.has(o))continue;const e=S(t[o]);if("unknown"===e){r.add(o);continue}r.delete(o),s.add(o);const i=(0,a.rS)(o);i&&n.push({name:i,alias:o,type:e})}}const m=(0,a.rS)(1===u?.length&&u[0]||null)??void 0;if(m)for(const p of n)if(p.name===m&&(0,a.WA)(p)){p.type="esriFieldTypeOID";break}return{fields:n,geometryType:y,hasZ:i,objectIdFieldName:m,objectIdFieldType:o,unknownFields:Array.from(r)}}function j(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:s}=t;for(const r of e){const{geometry:e,properties:o,id:a}=r;if(e&&p(e.type)!==n)continue;const l=o||{};let c;s&&(c=l[s],null==a||c||(l[s]=c=a));const d=new i.Om(e?g(new u.A,e,t):null,l,null,c??void 0);yield d}}()}(c(e),t))}},16981:(e,t,n)=>{n.d(t,{$:()=>s,P:()=>r});const s={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportedStatistics:void 0},r={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:s,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},26799:(e,t,n)=>{n.d(t,{GA:()=>k,GL:()=>j,I:()=>G,J0:()=>x,Ki:()=>P,Px:()=>C,QE:()=>S,bV:()=>v,bW:()=>M,vJ:()=>A});n(35238);var s=n(3825),r=n(50076),o=n(76460),i=n(90534),u=n(80963),a=n(45417),l=n(98618),p=n(75146),c=n(10907),d=n(40296),f=n(40098),y=n(1900),m=n(6127),g=n(67478),h=n(13312);const w=()=>o.A.getLogger("esri.layers.ogc.ogcFeatureUtils"),b="startindex",F=new Set([b,"offset"]),A="http://www.opengis.net/def/crs/",S=`${A}OGC/1.3/CRS84`;var T,I;async function j(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;const{links:u}=e,a=D(u,"items",T.geojson)||D(u,"http://www.opengis.net/def/rel/ogc/1.0/items",T.geojson);if(null==a)throw new r.A("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:l,customParameters:p,signal:f}=n,h=(0,i.s2)(a.href,e.landingPage.url),F={limit:o,...p,token:l},A=(0,i.a6)(h,F),S={accept:T.geojson},{data:I}=await(0,s.A)(A,{signal:f,headers:S}),j=q(A,o,I.links)??b;(0,c.sO)(I);const v=(0,c.BM)(I,{geometryType:t.geometryType}),C=t.fields||v.fields||[],P=null!=t.hasZ?t.hasZ:v.hasZ,k=v.geometryType,x=t.objectIdField||v.objectIdFieldName||"OBJECTID";let M=t.timeInfo;const G=C.find((e=>{let{name:t}=e;return t===x}));if(G)G.editable=!1,G.nullable=!1;else{if(!v.objectIdFieldType)throw new r.A("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");C.unshift({name:x,alias:x,type:"number"===v.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(x!==v.objectIdFieldName){const e=C.find((e=>{let{name:t}=e;return t===v.objectIdFieldName}));e&&(e.type="esriFieldTypeInteger")}C===v.fields&&v.unknownFields.length>0&&w().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:v.unknownFields}});for(const s of C){if(null==s.name&&(s.name=s.alias),null==s.alias&&(s.alias=s.name),"esriFieldTypeOID"!==s.type&&"esriFieldTypeGlobalID"!==s.type&&(s.editable=null==s.editable||!!s.editable,s.nullable=null==s.nullable||!!s.nullable),!s.name)throw new r.A("ogc-feature-layer:invalid-field-name","field name is missing",{field:s});if(!m.m.jsonValues.includes(s.type))throw new r.A("ogc-feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s})}if(M){const e=new y.A(C);if(M.startTimeField){const t=e.get(M.startTimeField);t?(M.startTimeField=t.name,t.type="esriFieldTypeDate"):M.startTimeField=null}if(M.endTimeField){const t=e.get(M.endTimeField);t?(M.endTimeField=t.name,t.type="esriFieldTypeDate"):M.endTimeField=null}if(M.trackIdField){const t=e.get(M.trackIdField);t?M.trackIdField=t.name:(M.trackIdField=null,w().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:M}}))}M.timeReference||={timeZoneIANA:g.n$},M.startTimeField||M.endTimeField||(w().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:M}}),M=void 0)}return{drawingInfo:k?(0,d.F0)(k):null,extent:$(e),geometryType:k,fields:C,hasZ:!!P,objectIdField:x,paginationParameter:j,timeInfo:M}}async function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n,url:o}=e,u=D(n,"data",T.json)||D(n,"http://www.opengis.net/def/rel/ogc/1.0/data",T.json);if(null==u)throw new r.A("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:a,customParameters:l,signal:p}=t,c=(0,i.s2)(u.href,o),{data:d}=await(0,s.A)(c,{signal:p,headers:{accept:T.json},query:{...l,token:a}});for(const s of d.collections)s.landingPage=e;return d}async function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n,url:o}=e,u=D(n,"conformance",T.json)||D(n,"http://www.opengis.net/def/rel/ogc/1.0/conformance",T.json);if(null==u)throw new r.A("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:a,customParameters:l,signal:p}=t,c=(0,i.s2)(u.href,o),{data:d}=await(0,s.A)(c,{signal:p,headers:{accept:T.json},query:{...l,token:a}});return d}async function P(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{apiKey:n,customParameters:r,signal:o}=t,{data:i}=await(0,s.A)(e,{signal:o,headers:{accept:T.json},query:{...r,token:n}});return i.url=e,i}async function k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n,url:r}=e,o=D(n,"service-desc",T.openapi);if(null==o)return w().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:u,customParameters:a,signal:l}=t,p=(0,i.s2)(o.href,r),{data:c}=await(0,s.A)(p,{signal:l,headers:{accept:T.openapi},query:{...a,token:u}});return c}function x(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),n=t?.groups;if(!n)return null;const{authority:s,code:r}=n;switch(s.toLowerCase()){case"ogc":switch(r.toLowerCase()){case"crs27":return h.A.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return h.A.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(r,10);return Number.isNaN(e)?null:e}default:return null}}async function M(e,t,n){const s=await G(e,t,n);return(0,l.ZF)(s)}async function G(e,t,n){const{collection:{links:o,landingPage:{url:d}},layerDefinition:m,maxRecordCount:g,queryParameters:{apiKey:w,customParameters:b},spatialReference:F,supportedCrs:A}=e,S=D(o,"items",T.geojson)||D(o,"http://www.opengis.net/def/rel/ogc/1.0/items",T.geojson);if(null==S)throw new r.A("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:I,num:j,start:v,timeExtent:C,where:P}=t;if(t.objectIds)throw new r.A("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const k=h.A.fromJSON(F),x=t.outSpatialReference??k,M=x.isWGS84?null:O(x,A),G=R(I,A),N=function(e){if(null==e)return null;const{start:t,end:n}=e;return`${null!=t?t.toISOString():".."}/${null!=n?n.toISOString():".."}`}(C),$=null!=(V=P)&&V&&"1=1"!==V?V:null,q=j??(null==v?g:10),B=0===v?void 0:v,{fields:E,geometryType:U,hasZ:W,objectIdField:Q,paginationParameter:Z}=m,z=(0,i.s2)(S.href,d),{data:H}=await(0,s.A)(z,{...n,query:{...b,...G,crs:M,datetime:N,query:$,limit:q,[Z]:B,token:w},headers:{accept:T.geojson}}),L=(0,c.bd)(H,{geometryType:U,hasZ:W,objectIdField:Q}),J=L.length===q&&!!D(H.links??[],"next",T.geojson),K=new y.A(E);var V;for(const s of L){const e={};(0,f.MB)(K,e,s.attributes,!0);for(const t of K.fields)t.nullable&&!(t.name in e)&&(e[t.name]=null);e[Q]=s.attributes[Q],s.attributes=e}if(!M&&x.isWebMercator)for(const s of L)if(null!=s.geometry&&null!=U){const e=(0,l.zv)(s.geometry,U,W,!1);e.spatialReference=h.A.WGS84,s.geometry=(0,l.Ux)((0,a.Cv)(e,x))}for(const s of L)s.objectId=s.attributes[Q];const _=M||!M&&x.isWebMercator?x.toJSON():u.KK,X=new p.A;return X.exceededTransferLimit=J,X.features=L,X.fields=E,X.geometryType=U,X.hasZ=W,X.objectIdFieldName=Q,X.spatialReference=_,X}function O(e,t){const{isWebMercator:n,wkid:s}=e;if(!s)return null;const r=n?t[3857]??t[102100]??t[102113]??t[900913]:t[e.wkid];return r?`${A}${r}`:null}function N(e){if(null==e)return"";const{xmin:t,ymin:n,xmax:s,ymax:r}=e;return`${t},${n},${s},${r}`}function R(e,t){if(!function(e){return null!=e&&"extent"===e.type}(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:N(e)};const s=O(n,t);return null!=s?{bbox:N(e),"bbox-crs":s}:n.isWebMercator?{bbox:N((0,a.Cv)(e,h.A.WGS84))}:null}function $(e){const t=e.extent?.spatial;if(!t)return null;const n=t.bbox[0],s=4===n.length,[r,o]=n,i=s?void 0:n[2];return{xmin:r,ymin:o,xmax:s?n[2]:n[3],ymax:s?n[3]:n[4],zmin:i,zmax:s?void 0:n[5],spatialReference:h.A.WGS84.toJSON()}}function D(e,t,n){return e.find((e=>{let{rel:s,type:r}=e;return s===t&&r===n}))??e.find((e=>{let{rel:n,type:s}=e;return n===t&&!s}))}function q(e,t,n){if(!n)return;const s=D(n,"next",T.geojson),r=(0,i.An)(s?.href)?.query;if(!r)return;const o=(0,i.An)(e).query,u=Object.keys(o??{}),a=Object.entries(r).filter((e=>{let[t]=e;return!u.includes(t)})).find((e=>{let[n,s]=e;return F.has(n.toLowerCase())&&Number.parseInt(s,10)===t})),l=a?.[0];return l}(I=T||(T={})).json="application/json",I.geojson="application/geo+json",I.openapi="application/vnd.oai.openapi+json;version=3.0"},40098:(e,t,n)=>{n.d(t,{$1:()=>g,CR:()=>m,MB:()=>d,Yx:()=>a,bP:()=>p});var s=n(51344),r=n(80963),o=n(53430);class i{constructor(){this.code=null,this.description=null}}class u{constructor(e){this.error=new i,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function a(e){return new u(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function p(e){return new l(e)}const c=new Set;function d(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];c.clear();for(const r in n){const i=e.get(r);if(!i)continue;const u=f(i,n[r]);if(c.add(i.name),i&&(s||i.editable)){const e=(0,o.CJ)(i,u);if(e)return a((0,o.uo)(e,i,u));t[i.name]=u}}for(const r of e.requiredFields??[])if(!c.has(r.name))return a(`missing required field "${r.name}"`);return null}function f(e,t){let n=t;return(0,o.WA)(e)&&"string"==typeof t?n=parseFloat(t):(0,o.yM)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,o.vE)(e)&&"string"==typeof t&&(n=(0,s._U)(t)),(0,o.WX)(n)}let y;function m(e,t){if(!e||!(0,r.fn)(t))return e;if("rings"in e||"paths"in e){if(null==y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}async function g(e,t){!(0,r.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==y&&(y=await Promise.all([n.e(2612),n.e(7983)]).then(n.bind(n,1669))),y}()}},40296:(e,t,n)=>{n.d(t,{F0:()=>a,Vx:()=>c,e2:()=>f,f:()=>y});var s=n(81806),r=n(53084),o=n(8298),i=n(16981),u=n(44460);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?u.Cb:"esriGeometryPolyline"===e?u.yM:u.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let p=1;function c(e,t){if((0,s.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this${d(t)} = null;`;for(const t in e)n+=`this${d(t)} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${p++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new s}catch(n){return()=>({[t]:null,...e})}}function d(e){return l.test(e)?`.${e}`:`["${e}"]`}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,r.o8)(e)}}]}function y(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:o.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:i.$,editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},51344:(e,t,n)=>{function s(e){return null!=u(e)||null!=i(e)}function r(e){return a.test(e)}function o(e){return u(e)??i(e)}function i(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(p&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,s=0;for(;!t&&s<=e.length;)t=!l.test(e[s]),s++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function u(e){const t=a.exec(e);if(!t?.groups)return null;const n=t.groups,s=+n.year,r=+n.month-1,o=+n.day,i=+(n.hours??"0"),u=+(n.minutes??"0"),l=+(n.seconds??"0");if(i>23)return null;if(u>59)return null;if(l>59)return null;const p=n.ms??"0",c=p?+p.padEnd(3,"0").slice(0,3):0;let d;if(n.isUTC||!n.offsetSign)d=Date.UTC(s,r,o,i,u,l,c);else{const e=+n.offsetHours,t=+n.offsetMinutes;d=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(s,r,o,i,u,l,c)}return Number.isNaN(d)?null:d}n.d(t,{Br:()=>r,Cq:()=>s,_U:()=>o});const a=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const l=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,p=!Number.isNaN(new Date("technology 10").getTime())}}]);
//# sourceMappingURL=6799.a93e0e91.chunk.js.map