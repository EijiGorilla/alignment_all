"use strict";(self.webpackChunkalignment_all=self.webpackChunkalignment_all||[]).push([[18],{12331:(t,e,r)=>{r.d(e,{H:()=>u});r(81806);var i=r(76460),n=r(30726),o=r(76718),s=r(61678),a=r(93345),h=r(89179),l=r(62881),c=r(29492);class u{constructor(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(a.vt.FramebufferObject,this);const i=f(e)?e:new c.g(this._context,e);if(this._colorAttachments.set(a.Nm.COLOR_ATTACHMENT0,i),this._validateTextureDescriptor(i.descriptor),this._validateColorAttachmentPoint(a.Nm.COLOR_ATTACHMENT0),null!=r)if(function(t){return f(t)||null!=t&&"pixelFormat"in t}(r))this._depthStencilTexture=f(r)?r:new c.g(this._context,r),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const t=function(t){return null!=t&&"type"in t&&t.type===h.p.RenderBuffer}(r)?r:new l.l(this._context,r);this._depthStencilBuffer=t,this._validateRenderBufferDescriptor(t.descriptor)}}dispose(){if(0===this._colorAttachments.size&&!this._glName)return;const t=this._context.getBoundFramebufferObject();this._colorAttachments.forEach(((t,e)=>this.detachColorTexture(e)?.dispose())),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(a.vt.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(a.Nm.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){const t=this._colorAttachments.get(a.Nm.COLOR_ATTACHMENT0);return t?.descriptor?.width??0}get height(){const t=this._colorAttachments.get(a.Nm.COLOR_ATTACHMENT0);return t?.descriptor?.height??0}get usedMemory(){return[...this._colorAttachments].reduce(((t,e)=>{let[r,i]=e;return t+i.usedMemory}),this.depthStencil?.usedMemory??0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&f(e)?e:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Nm.COLOR_ATTACHMENT0;if(!t)return;this._validateColorAttachmentPoint(e);const r=t.descriptor;this._validateTextureDescriptor(r),this.detachColorTexture(e)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t)}detachColorTexture(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.Nm.COLOR_ATTACHMENT0;const e=this._colorAttachments.get(t);if(e){if(this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t),this._context.bindFramebuffer(e)}return this._colorAttachments.delete(t),e}}setColorTextureTarget(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Nm.COLOR_ATTACHMENT0;const r=this._colorAttachments.get(e);r&&this._framebufferTexture2D(r.glName,e,t)}attachDepthStencil(t){if(t)switch(t.type){case h.p.Texture:return this._attachDepthStencilTexture(t);case h.p.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){if(null==t)return;const e=t.descriptor;e.pixelFormat!==a.Ab.DEPTH_STENCIL&&e.pixelFormat!==a.Ab.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==a.ld.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._validateTextureDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,a.nI)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;if(t&&this._initialized){const t=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,a.nI),this._context.bindFramebuffer(t)}return this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(null==t)return;const e=t.descriptor;if(this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const r=this._context.gl,i=this._getGLAttachmentPoint(e);r.framebufferRenderbuffer(a.R.FRAMEBUFFER,i,r.RENDERBUFFER,t.glName)}this._depthStencilBuffer=t}detachDepthStencilBuffer(){const t=this._depthStencilBuffer;if(t&&this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this);const r=this._context.gl,i=this._getGLAttachmentPoint(t.descriptor);r.framebufferRenderbuffer(a.R.FRAMEBUFFER,i,r.RENDERBUFFER,null),this._context.bindFramebuffer(e)}return this._depthStencilBuffer=null,t}copyToTexture(t,e,r,i,n,o,s){(t<0||e<0||n<0||o<0)&&console.error("Offsets cannot be negative!"),(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!");const h=s.descriptor;s.descriptor.target!==a.Ap.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==h?.width||null==h?.height||t+r>this.width||e+i>this.height||n+r>h.width||o+i>h.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const l=this._context,u=l.bindTexture(s,c.g.TEXTURE_UNIT_FOR_UPDATES);l.setActiveTexture(c.g.TEXTURE_UNIT_FOR_UPDATES),l.bindFramebuffer(this),l.gl.copyTexSubImage2D(a.Ap.TEXTURE_2D,0,n,o,t,e,r,i),l.bindTexture(u,c.g.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,r,i,n,o,s){(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!"),s||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,r,i,n,o,s)}async readPixelsAsync(t,e,r,i,n,s,h){const{gl:l}=this._context,c=o.g.createPixelPack(this._context,a._U.STREAM_READ,h.byteLength);this._context.bindBuffer(c);const u=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),l.readPixels(t,e,r,i,n,s,0),this._context.unbindBuffer(a.NZ.PIXEL_PACK_BUFFER),this._context.bindFramebuffer(u),await c.getSubDataAsync(h),c.dispose()}resize(t,e){if(this.width===t&&this.height===e)return;const r={width:t,height:e};_(r,this._context.parameters.maxTextureSize),this._colorAttachments.forEach((t=>t.resize(r.width,r.height))),this._depthStencilTexture?.resize(r.width,r.height),this._initialized&&(_(r,this._context.parameters.maxRenderbufferSize),this._depthStencilBuffer?.resize(r.width,r.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.R.FRAMEBUFFER;const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const r=e.createFramebuffer();if(e.bindFramebuffer(t,r),this._colorAttachments.forEach(((e,r)=>this._framebufferTexture2D(e.glName,r,d(e),t))),this._depthStencilBuffer){const r=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(t,r,e.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,d(this._depthStencilTexture),t);(0,s.en)()&&e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=r,this._initialized=!0}_framebufferTexture2D(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Nm.COLOR_ATTACHMENT0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.Ap.TEXTURE_2D,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a.R.FRAMEBUFFER,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this._context.gl.framebufferTexture2D(i,e,r,t,n)}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);t.framebufferRenderbuffer(a.R.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthStencilBuffer=(0,n.WD)(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=(0,n.WD)(this._depthStencilTexture))}_validateTextureDescriptor(t){t.target!==a.Ap.TEXTURE_2D&&t.target!==a.Ap.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),_(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t)}_validateRenderBufferDescriptor(t){_(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t)}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(t){switch(t.internalFormat){case a.yQ.DEPTH_COMPONENT16:case a.yQ.DEPTH_COMPONENT24:case a.yQ.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case a.yQ.DEPTH24_STENCIL8:case a.yQ.DEPTH32F_STENCIL8:case a.yQ.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case a.yQ.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(t){if(-1===u._MAX_COLOR_ATTACHMENTS){const{gl:t}=this._context;u._MAX_COLOR_ATTACHMENTS=t.getParameter(t.MAX_COLOR_ATTACHMENTS)}const e=t-a.Nm.COLOR_ATTACHMENT0;e+1>u._MAX_COLOR_ATTACHMENTS&&i.A.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${u._MAX_COLOR_ATTACHMENTS} color attachments`)}}function f(t){return null!=t&&"type"in t&&t.type===h.p.Texture}function _(t,e){const r=Math.max(t.width,t.height);if(r>e){i.A.getLogger("esri.views.webgl.FramebufferObject").warn(`Resizing FBO attachment size ${t.width}x${t.height} to device limit ${e}`);const n=e/r;return t.width=Math.round(t.width*n),t.height=Math.round(t.height*n),!1}return!0}function d(t){return t.descriptor.target===a.Ap.TEXTURE_CUBE_MAP?a.Ap.TEXTURE_CUBE_MAP_POSITIVE_X:a.Ap.TEXTURE_2D}u._MAX_COLOR_ATTACHMENTS=-1},44488:(t,e,r)=>{r.d(e,{B:()=>S});r(81806);var i=r(61678),n=r(93345);const o=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],s=!1,a=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],h=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],l=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"];var c=999,u=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function f(){var t,e,r,i=0,n=0,o=c,s=[],f=[],_=1,d=0,m=0,g=!1,p=!1,T="";return function(t){return f=[],null!==t?E(t.replace?t.replace(/\r\n/g,"\n"):t):(s.length&&x(s.join("")),o=10,x("(eof)"),f)};function x(t){t.length&&f.push({type:u[o],data:t,position:m,line:_,column:d})}function E(e){var s;for(i=0,r=(T+=e).length;t=T[i],i<r;){switch(s=i,o){case 0:i=R();break;case 1:case 2:i=S();break;case 3:i=D();break;case 4:i=N();break;case 11:i=F();break;case 5:i=C();break;case 9999:i=y();break;case 9:i=A();break;case c:i=b()}s!==i&&("\n"===T[s]?(d=0,++_):++d)}return n+=i,T=T.slice(i),f}function b(){return s=s.length?[]:s,"/"===e&&"*"===t?(m=n+i-1,o=0,e=t,i+1):"/"===e&&"/"===t?(m=n+i-1,o=1,e=t,i+1):"#"===t?(o=2,m=n+i,i):/\s/.test(t)?(o=9,m=n+i,i):(g=/\d/.test(t),p=/[^\w_]/.test(t),m=n+i,o=g?4:p?3:9999,i)}function A(){return/[^\s]/g.test(t)?(x(s.join("")),o=c,i):(s.push(t),e=t,i+1)}function S(){return"\r"!==t&&"\n"!==t||"\\"===e?(s.push(t),e=t,i+1):(x(s.join("")),o=c,i)}function R(){return"/"===t&&"*"===e?(s.push(t),x(s.join("")),o=c,i+1):(s.push(t),e=t,i+1)}function D(){if("."===e&&/\d/.test(t))return o=5,i;if("/"===e&&"*"===t)return o=0,i;if("/"===e&&"/"===t)return o=1,i;if("."===t&&s.length){for(;v(s););return o=5,i}if(";"===t||")"===t||"("===t){if(s.length)for(;v(s););return x(t),o=c,i+1}var r=2===s.length&&"="!==t;if(/[\w_\d\s]/.test(t)||r){for(;v(s););return o=c,i}return s.push(t),e=t,i+1}function v(t){for(var e,r,i=0;;){if(e=h.indexOf(t.slice(0,t.length+i).join("")),r=h[e],-1===e){if(i--+t.length>0)continue;r=t.slice(0,1).join("")}return x(r),m+=r.length,(s=s.slice(r.length)).length}}function F(){return/[^a-fA-F0-9]/.test(t)?(x(s.join("")),o=c,i):(s.push(t),e=t,i+1)}function N(){return"."===t||/[eE]/.test(t)?(s.push(t),o=5,e=t,i+1):"x"===t&&1===s.length&&"0"===s[0]?(o=11,s.push(t),e=t,i+1):/[^\d]/.test(t)?(x(s.join("")),o=c,i):(s.push(t),e=t,i+1)}function C(){return"f"===t&&(s.push(t),e=t,i+=1),/[eE]/.test(t)||"-"===t&&/[eE]/.test(e)?(s.push(t),e=t,i+1):/[^\d]/.test(t)?(x(s.join("")),o=c,i):(s.push(t),e=t,i+1)}function y(){if(/[^\d\w_]/.test(t)){var r=s.join("");return o=a.indexOf(r)>-1?8:l.indexOf(r)>-1?7:6,x(s.join("")),o=c,i}return s.push(t),e=t,i+1}}function _(t){return function(t){var e=f(),r=[];return(r=r.concat(e(t))).concat(e(null))}(t)}const d=new Set(["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]);function m(t,e){for(let r=e-1;r>=0;r--){const e=t[r];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return!0}}return!1}function g(t,e,r,i){i=i||r;for(const n of t)if("ident"===n.type&&n.data===r)return i in e?e[i]++:e[i]=0,g(t,e,i+"_"+e[i],i);return r}function p(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"afterVersion";function i(t,e){for(let r=e;r<t.length;r++){const e=t[r];if("operator"===e.type&&";"===e.data)return r}return null}const n={data:"\n",type:"whitespace"},o=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let s=function(t){let e=-1,n=0,o=-1;for(let s=0;s<t.length;s++){const a=t[s];if("preprocessor"===a.type&&(/#(if|ifdef|ifndef)\s+.+/.test(a.data)?++n:/#endif\s*.*/.test(a.data)&&--n),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===a.type&&a.data.startsWith("#version")&&(o=Math.max(o,s)),"afterPrecision"===r&&"keyword"===a.type&&"precision"===a.data){const e=i(t,s);if(null===e)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,e)}e<o&&0===n&&(e=s)}return e+1}(t);o(s-1)&&t.splice(s++,0,n);for(const a of e)t.splice(s++,0,a);o(s-1)&&o(s)&&t.splice(s,0,n)}function T(t,e,r){p(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"lowp"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function x(t,e,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"lowp";p(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:i.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function E(t,e){let r,i,n=-1;for(let o=e;o<t.length;o++){const e=t[o];if("operator"===e.type&&("["===e.data&&(r=o),"]"===e.data)){i=o;break}"integer"===e.type&&(n=parseInt(e.data,10))}return r&&i&&t.splice(r,i-r+1),n}function b(t,e){if(t.startsWith("#version 300"))return t;const r=function(t){return s?A.get(t):null}(t);if(null!=r)return r;const i=_(t);if("300 es"===function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"100",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"300 es";const i=/^\s*#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of t)if("preprocessor"===n.type){const t=i.exec(n.data);if(t){const i=t[1].replaceAll(/\s{2,}/g," ");if(i===r)return i;if(i===e)return n.data="#version "+r,e;throw new Error("unknown glsl version: "+i)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}(i,"100","300 es"))return t;let a=null,h=null;const l={},c={};for(let s=0;s<i.length;++s){const t=i[s];switch(t.type){case"keyword":e===n.Co.VERTEX_SHADER&&"attribute"===t.data?t.data="in":"varying"===t.data&&(t.data=e===n.Co.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(t.data.trim())&&(t.data=t.data.replaceAll(/(2D|Cube|EXT)/g,"")),e===n.Co.FRAGMENT_SHADER&&"gl_FragColor"===t.data&&(a||(a=g(i,l,"fragColor"),T(i,a,"vec4")),t.data=a),e===n.Co.FRAGMENT_SHADER&&"gl_FragData"===t.data){const e=E(i,s+1),r=g(i,l,"fragData");x(i,r,"vec4",e,"mediump"),t.data=r}else e===n.Co.FRAGMENT_SHADER&&"gl_FragDepthEXT"===t.data&&(h||(h=g(i,l,"gl_FragDepth")),t.data=h);break;case"ident":if(o.includes(t.data)){if(e===n.Co.VERTEX_SHADER&&m(i,s))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");t.data in c||(c[t.data]=g(i,l,t.data)),t.data=c[t.data]}}}for(let n=i.length-1;n>=0;--n){const t=i[n];if("preprocessor"===t.type){const e=t.data.match(/#extension\s+(.*):/);if(e?.[1]&&d.has(e[1].trim())){const t=i[n+1];i.splice(n,t&&"whitespace"===t.type?2:1)}const r=t.data.match(/#ifdef\s+(.*)/);r?.[1]&&d.has(r[1].trim())&&(t.data="#if 1");const o=t.data.match(/#ifndef\s+(.*)/);o?.[1]&&d.has(o[1].trim())&&(t.data="#if 0")}}return function(t,e){return s&&A.set(t,e),e}(t,function(t){return t.map((t=>"eof"!==t.type?t.data:"")).join("")}(i))}const A=new Map;class S{constructor(t,e,r,o){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new Map,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];this._context=t,this._locations=o,this._uniformBlockBindings=s,this._transformFeedbackVaryings=a,this._refCount=1,this._compiled=!1,this._linesOfCode=0,this._nameToUniformLocation=new Map,this._nameToUniform1=new Map,this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,t||console.error("RenderingContext isn't initialized!"),0===e.length&&console.error("Shaders source should not be empty!"),e=b(e,n.Co.VERTEX_SHADER),r=b(r,n.Co.FRAGMENT_SHADER),this._vShader=R(this._context,n.Co.VERTEX_SHADER,e),this._fShader=R(this._context,n.Co.FRAGMENT_SHADER,r),v.enabled&&(this._linesOfCode=e.match(/\n/g).length+r.match(/\n/g).length+2,this._context.instanceCounter.increment(n.vt.LinesOfCode,this._vShader,this._linesOfCode)),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(n.vt.Shader,this),(0,i.Xc)()&&(this.vertexShader=e,this.fragmentShader=r),this.usedMemory=e.length+r.length;const h=this._context.gl,l=h.createProgram();h.attachShader(l,this._vShader),h.attachShader(l,this._fShader),this._locations.forEach(((t,e)=>h.bindAttribLocation(l,t,e))),this._transformFeedbackVaryings?.length&&h.transformFeedbackVaryings(l,this._transformFeedbackVaryings,h.SEPARATE_ATTRIBS),h.linkProgram(l),(0,i.Xc)()&&!h.getProgramParameter(l,h.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${h.getProgramParameter(l,h.VALIDATE_STATUS)}, gl error ${h.getError()}, vertex: ${h.getShaderParameter(this._vShader,h.COMPILE_STATUS)}, fragment: ${h.getShaderParameter(this._fShader,h.COMPILE_STATUS)}, info log: ${h.getProgramInfoLog(l)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);for(const[i,n]of this._uniformBlockBindings){const t=h.getUniformBlockIndex(l,i);t<4294967295&&h.uniformBlockBinding(l,t,n)}this._glName=l,this._context.instanceCounter.increment(n.vt.Program,this)}get glName(){return this._glName}get hasGLName(){return null!=this._glName}get hasTransformFeedbackVaryings(){return!!this._transformFeedbackVaryings?.length}get compiled(){if(this._compiled)return!0;const t=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==t||null==this.glName?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,t.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const t=this._context.gl,e=this._context.instanceCounter;this._nameToUniformLocation.forEach((t=>t&&e.decrement(n.vt.Uniform,t))),this._nameToUniformLocation.clear(),this._vShader&&(this._linesOfCode>0&&(e.decrement(n.vt.LinesOfCode,this._vShader,this._linesOfCode),this._linesOfCode=0),t.deleteShader(this._vShader),this._vShader=null,e.decrement(n.vt.Shader,this)),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null),this._glName&&(t.deleteProgram(this._glName),this._glName=null,e.decrement(n.vt.Program,this))}ref(){++this._refCount}_getUniformLocation(t){const e=this._nameToUniformLocation.get(t);if(void 0!==e)return e;if(this.glName){const e=this._context.gl.getUniformLocation(this.glName,t);return this._nameToUniformLocation.set(t,e),e&&this._context.instanceCounter.increment(n.vt.Uniform,e),e}return null}hasUniform(t){return null!=this._getUniformLocation(t)}setUniform1i(t,e){const r=this._nameToUniform1.get(t);void 0!==r&&e===r||(this._context.gl.uniform1i(this._getUniformLocation(t),e),this._nameToUniform1.set(t,e))}setUniform1iv(t,e){D(this._nameToUniform1v,t,e)&&this._context.gl.uniform1iv(this._getUniformLocation(t),e)}setUniform2iv(t,e){D(this._nameToUniform2,t,e)&&this._context.gl.uniform2iv(this._getUniformLocation(t),e)}setUniform3iv(t,e){D(this._nameToUniform3,t,e)&&this._context.gl.uniform3iv(this._getUniformLocation(t),e)}setUniform4iv(t,e){D(this._nameToUniform4,t,e)&&this._context.gl.uniform4iv(this._getUniformLocation(t),e)}setUniform1f(t,e){const r=this._nameToUniform1.get(t);void 0!==r&&e===r||(this._context.gl.uniform1f(this._getUniformLocation(t),e),this._nameToUniform1.set(t,e))}setUniform1fv(t,e){D(this._nameToUniform1v,t,e)&&this._context.gl.uniform1fv(this._getUniformLocation(t),e)}setUniform2f(t,e,r){const i=this._nameToUniform2.get(t);void 0===i?(this._context.gl.uniform2f(this._getUniformLocation(t),e,r),this._nameToUniform2.set(t,[e,r])):e===i[0]&&r===i[1]||(this._context.gl.uniform2f(this._getUniformLocation(t),e,r),i[0]=e,i[1]=r)}setUniform2fv(t,e){D(this._nameToUniform2,t,e)&&this._context.gl.uniform2fv(this._getUniformLocation(t),e)}setUniform3f(t,e,r,i){const n=this._nameToUniform3.get(t);void 0===n?(this._context.gl.uniform3f(this._getUniformLocation(t),e,r,i),this._nameToUniform3.set(t,[e,r,i])):e===n[0]&&r===n[1]&&i===n[2]||(this._context.gl.uniform3f(this._getUniformLocation(t),e,r,i),n[0]=e,n[1]=r,n[2]=i)}setUniform3fv(t,e){const r=this._getUniformLocation(t);null!=r&&D(this._nameToUniform3,t,e)&&this._context.gl.uniform3fv(r,e)}setUniform4f(t,e,r,i,n){const o=this._nameToUniform4.get(t);void 0===o?(this._context.gl.uniform4f(this._getUniformLocation(t),e,r,i,n),this._nameToUniform4.set(t,[e,r,i,n])):void 0!==o&&e===o[0]&&r===o[1]&&i===o[2]&&n===o[3]||(this._context.gl.uniform4f(this._getUniformLocation(t),e,r,i,n),o[0]=e,o[1]=r,o[2]=i,o[3]=n)}setUniform4fv(t,e){const r=this._getUniformLocation(t);null!=r&&D(this._nameToUniform4,t,e)&&this._context.gl.uniform4fv(r,e)}setUniformMatrix3fv(t,e){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=this._getUniformLocation(t);null!=i&&D(this._nameToUniformMatrix3,t,e)&&this._context.gl.uniformMatrix3fv(i,r,e)}setUniformMatrix4fv(t,e){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=this._getUniformLocation(t);null!=i&&D(this._nameToUniformMatrix4,t,e)&&this._context.gl.uniformMatrix4fv(i,r,e)}stop(){}}function R(t,e,r){const o=t.gl,s=o.createShader(e);return o.shaderSource(s,r),o.compileShader(s),(0,i.Xc)()&&!o.getShaderParameter(s,o.COMPILE_STATUS)&&(console.error("Compile error in ".concat(e===n.Co.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(o.getShaderInfoLog(s)),console.error(function(t){let e=2;return t.replaceAll("\n",(()=>"\n"+function(t){return t>=1e3?t.toString():("  "+t).slice(-3)}(e++)+":"))}(r))),s}function D(t,e,r){const i=t.get(e);if(!i)return t.set(e,Array.from(r)),!0;const n=r.length;if(i.length!==n)return t.set(e,Array.from(r)),!0;for(let o=0;o<n;++o){const t=r[o];if(i[o]!==t){for(i[o]=t;o<n;++o)i[o]=r[o];return!0}}return!1}const v={enabled:!1}},62881:(t,e,r)=>{r.d(e,{l:()=>s});var i=r(93345),n=r(89179),o=r(88800);class s{constructor(t,e){this._context=t,this._descriptor=e,this.type=n.p.RenderBuffer,this._context.instanceCounter.increment(i.vt.Renderbuffer,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:o,height:s,internalFormat:a,multisampled:h}=e;h?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,a,o,s):r.renderbufferStorage(r.RENDERBUFFER,a,o,s),this._context.bindRenderbuffer(null)}get descriptor(){return this._descriptor}get samples(){const t=this._descriptor.samples,e=this._context.parameters.maxSamples;return t?Math.min(t,e):e}get usedMemory(){return(0,o.e)(this._descriptor)}resize(t,e){const r=this._descriptor;if(r.width===t&&r.height===e)return;r.width=t,r.height=e;const i=this._context.gl;this._context.bindRenderbuffer(this),r.multisampled?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height):i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height),this._context.bindRenderbuffer(null)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(i.vt.Renderbuffer,this),this._context=null)}}},76718:(t,e,r)=>{r.d(e,{g:()=>l});var i=r(18690),n=(r(81806),r(76460)),o=r(78393),s=r(61678),a=r(93345);const h=()=>n.A.getLogger("esri.views.webgl.BufferObject");class l{static createIndex(t,e,r){return new l(t,a.NZ.ELEMENT_ARRAY_BUFFER,e,r)}static createVertex(t,e,r){return new l(t,a.NZ.ARRAY_BUFFER,e,r)}static createUniform(t,e,r){return new l(t,a.NZ.UNIFORM_BUFFER,e,r)}static createPixelPack(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a._U.STREAM_READ,r=arguments.length>2?arguments[2]:void 0;const i=new l(t,a.NZ.PIXEL_PACK_BUFFER,e);return r&&i.setSize(r),i}static createPixelUnpack(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a._U.STREAM_DRAW,r=arguments.length>2?arguments[2]:void 0;return new l(t,a.NZ.PIXEL_UNPACK_BUFFER,e,r)}static createTransformFeedback(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a._U.STATIC_DRAW,r=arguments.length>2?arguments[2]:void 0;const i=new l(t,a.NZ.TRANSFORM_FEEDBACK_BUFFER,e);return i.setSize(r),i}constructor(t,e,r,i){this._context=t,this.bufferType=e,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(a.vt.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,s.Y2)(this._context.gl),i&&this.setData(i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){if(this.bufferType===a.NZ.ELEMENT_ARRAY_BUFFER){if(this._indexType===a.pe.UNSIGNED_INT)return 4*this._size;if(this._indexType===a.pe.UNSIGNED_SHORT)return 2*this._size}return this._size}get _isVAOAware(){return this.bufferType===a.NZ.ELEMENT_ARRAY_BUFFER||this.bufferType===a.NZ.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(a.vt.BufferObject,this),this._context=null):this._glName&&h().warn("Leaked WebGL buffer object")}setSize(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.bufferType===a.NZ.ELEMENT_ARRAY_BUFFER&&null!=e)switch(this._indexType=e,e){case a.pe.UNSIGNED_SHORT:t*=2;break;case a.pe.UNSIGNED_INT:t*=4}this._setBufferData(t)}setData(t){if(!t)return;let e=t.byteLength;this.bufferType===a.NZ.ELEMENT_ARRAY_BUFFER&&((0,o.mg)(t)?this._indexType=a.pe.UNSIGNED_BYTE:(0,o.jq)(t)?(e/=2,this._indexType=a.pe.UNSIGNED_SHORT):(0,o.XJ)(t)&&(e/=4,this._indexType=a.pe.UNSIGNED_INT)),this._setBufferData(e,t)}_setBufferData(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._size=t;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;null!=e?i.bufferData(this.bufferType,e,this.usage):i.bufferData(this.bufferType,t,this.usage),(0,s.Y2)(i),this._isVAOAware&&this._context.bindVAO(r)}setSubData(t,e,r,i){if(!t)return;const n=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:o}=this._context;o.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,t,r,i-r),(0,s.Y2)(o),this._isVAOAware&&this._context.bindVAO(n)}getSubData(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;if(r<0||n<0)return;const o=function(t){return(0,i.Xj)(t)}(t)?t.BYTES_PER_ELEMENT:1;if(o*((r??0)+(n??0))>t.byteLength)return;e+o*(n??0)>this.usedMemory&&h().warn("Potential problem getting subdata: requested data exceeds buffer size!");const s=this._context.gl;this.bufferType===a.NZ.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,a.NZ.TRANSFORM_FEEDBACK_BUFFER),s.getBufferSubData(a.NZ.TRANSFORM_FEEDBACK_BUFFER,e,t,r,n),this._context.unbindBuffer(a.NZ.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,a.NZ.COPY_READ_BUFFER),s.getBufferSubData(a.NZ.COPY_READ_BUFFER,e,t,r,n),this._context.unbindBuffer(a.NZ.COPY_READ_BUFFER))}async getSubDataAsync(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;await this._context.clientWaitAsync(),this.getSubData(t,e,r,i)}}},88800:(t,e,r)=>{r.d(e,{e:()=>o,q:()=>n});var i=r(27207);class n{constructor(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;this.internalFormat=t,this.width=e,this.height=r,this.multisampled=!1,this.samples=1}}function o(t){return t.width<=0||t.height<=0||null==t.internalFormat?0:t.width*t.height*(0,i.IB)(t.internalFormat)}}}]);
//# sourceMappingURL=18.67bf28f2.chunk.js.map