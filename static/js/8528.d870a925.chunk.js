"use strict";(self.webpackChunkalignment_all=self.webpackChunkalignment_all||[]).push([[8528],{31394:(e,i,s)=>{s.d(i,{A:()=>h});var t=s(61551),r=s(8995),a=s(13692);class h extends r.f{renderChildren(e){for(const i of this.children)i.setTransform(e.state);if(super.renderChildren(e),this._updateAttributeView(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case t.S5.MAP:this._renderChildren(e,t.RI.All);break;case t.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,a.lB)(e,!1,(e=>{this._renderChildren(e,t.RI.Highlight)}))}}},68528:(e,i,s)=>{s.r(i),s.d(i,{default:()=>m});var t=s(35143),r=s(16868),a=s(94643),h=s(68134),l=(s(76460),s(81806),s(47249),s(50076),s(85842)),n=s(5766),o=s(86616),p=s(77725),c=s(15483),y=s(31394),d=s(43321),g=s(91196);let w=class extends((0,c.e)(g.A)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,i){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((i=>{const t=this._popupTemplates.get(i),r=i.hitTest(e);for(const e of r)e.layer=s,e.sourceLayer=s,e.popupTemplate=t;return r})).map((i=>({type:"graphic",graphic:i,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(e)}attach(){this.addAttachHandles([(0,h.wB)((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:s,layerDefinition:t}of e){const e=p.A.fromJSON(s),h=new a.A(e.features),l=t.drawingInfo,n=i?r.A.fromJSON(i):null,c=(0,o.r)(l.renderer),g=new d.A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:h,renderer:c,container:new y.A(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,n),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=c.symbol):this.layer.lineSymbol=c.symbol:this.layer.polygonSymbol=c.symbol,this.graphicsViews.push(g),this.container.addChild(g.container)}}),h.Vh),(0,h.wB)((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new n.A({symbol:e})}),h.Vh),(0,h.wB)((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new n.A({symbol:e})}),h.Vh),(0,h.wB)((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new n.A({symbol:e})}),h.Vh)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};w=(0,t._)([(0,l.$)("esri.views.2d.layers.GeoRSSLayerView2D")],w);const m=w}}]);
//# sourceMappingURL=8528.d870a925.chunk.js.map