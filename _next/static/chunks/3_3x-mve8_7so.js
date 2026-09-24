(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,815711,e=>{"use strict";function t(e,t){let r;return function(...i){clearTimeout(r),r=setTimeout(()=>{r=void 0,e.apply(this,i)},t)}}var r=class{element;options;align;rect={};wrapperResizeObserver;resizeObserver;debouncedWrapperResize;constructor(e,{align:r=["start"],ignoreSticky:i=!0,ignoreTransform:n=!1}={}){this.element=e,this.options={align:r,ignoreSticky:i,ignoreTransform:n},this.align=[r].flat(),this.debouncedWrapperResize=t(this.onWrapperResize,500),this.wrapperResizeObserver=new ResizeObserver(this.debouncedWrapperResize),this.wrapperResizeObserver.observe(document.body),this.onWrapperResize(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.element),this.setRect({width:this.element.offsetWidth,height:this.element.offsetHeight})}destroy(){this.wrapperResizeObserver.disconnect(),this.resizeObserver.disconnect()}setRect({top:e,left:t,width:r,height:i,element:n}={}){e=e??this.rect.top,t=t??this.rect.left,r=r??this.rect.width,i=i??this.rect.height,n=n??this.rect.element,(e!==this.rect.top||t!==this.rect.left||r!==this.rect.width||i!==this.rect.height||n!==this.rect.element)&&(this.rect.top=e,this.rect.y=e,this.rect.width=r,this.rect.height=i,this.rect.left=t,this.rect.x=t,this.rect.bottom=e+i,this.rect.right=t+r)}onWrapperResize=()=>{let e,t;if(this.options.ignoreSticky&&function e(t){"sticky"===getComputedStyle(t).position&&(t.style.setProperty("position","static"),t.dataset.sticky="true"),t.offsetParent&&e(t.offsetParent)}(this.element),this.options.ignoreTransform)e=function e(t,r=0){let i=r+t.offsetTop;return t.offsetParent?e(t.offsetParent,i):i}(this.element),t=function e(t,r=0){let i=r+t.offsetLeft;return t.offsetParent?e(t.offsetParent,i):i}(this.element);else{let r=this.element.getBoundingClientRect();e=r.top+function e(t,r=0){let i=r+t.scrollTop;return t.offsetParent?e(t.offsetParent,i):i+window.scrollY}(this.element),t=r.left+function e(t,r=0){let i=r+t.scrollLeft;return t.offsetParent?e(t.offsetParent,i):i+window.scrollX}(this.element)}this.options.ignoreSticky&&function e(t){t?.dataset?.sticky==="true"&&(t.style.removeProperty("position"),delete t.dataset.sticky),t.offsetParent&&e(t.offsetParent)}(this.element),this.setRect({top:e,left:t})};onResize=([e])=>{if(!e?.borderBoxSize[0])return;let t=e.borderBoxSize[0].inlineSize,r=e.borderBoxSize[0].blockSize;this.setRect({width:t,height:r})}};let i=0;var n=class{options;elements=new Map;snaps=new Map;viewport={width:window.innerWidth,height:window.innerHeight};isStopped=!1;onSnapDebounced;currentSnapIndex;constructor(e,{type:r="proximity",lerp:i,easing:n,duration:o,distanceThreshold:s="50%",debounce:a=500,onSnapStart:l,onSnapComplete:c}={}){this.lenis=e,window.lenis||(window.lenis={}),window.lenis.snap=!0,this.options={type:r,lerp:i,easing:n,duration:o,distanceThreshold:s,debounce:a,onSnapStart:l,onSnapComplete:c},this.onWindowResize(),window.addEventListener("resize",this.onWindowResize),this.onSnapDebounced=t(this.onSnap,this.options.debounce),this.lenis.on("virtual-scroll",this.onSnapDebounced)}destroy(){this.lenis.off("virtual-scroll",this.onSnapDebounced),window.removeEventListener("resize",this.onWindowResize),this.elements.forEach(e=>{e.destroy()})}start(){this.isStopped=!1}stop(){this.isStopped=!0}add(e){let t=i++;return this.snaps.set(t,{value:e}),()=>this.snaps.delete(t)}addElement(e,t={}){let n=i++;return this.elements.set(n,new r(e,t)),()=>this.elements.delete(n)}addElements(e,t={}){let r=[...e].map(e=>this.addElement(e,t));return()=>{r.forEach(e=>{e()})}}onWindowResize=()=>{this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight};computeSnaps=()=>{let{isHorizontal:e}=this.lenis,t=[...this.snaps.values()];return this.elements.forEach(({rect:r,align:i})=>{let n;i.forEach(i=>{"start"===i?n=r.top:"center"===i?n=e?r.left+r.width/2-this.viewport.width/2:r.top+r.height/2-this.viewport.height/2:"end"===i&&(n=e?r.left+r.width-this.viewport.width:r.top+r.height-this.viewport.height),"number"==typeof n&&t.push({value:Math.ceil(n)})})}),t=t.sort((e,t)=>Math.abs(e.value)-Math.abs(t.value))};previous(){this.goTo((this.currentSnapIndex??0)-1)}next(){this.goTo((this.currentSnapIndex??0)+1)}goTo(e){let t=this.computeSnaps();if(0===t.length)return;this.currentSnapIndex=Math.max(0,Math.min(e,t.length-1));let r=t[this.currentSnapIndex];void 0!==r&&this.lenis.scrollTo(r.value,{duration:this.options.duration,easing:this.options.easing,lerp:this.options.lerp,lock:"lock"===this.options.type,userData:{initiator:"snap"},onStart:()=>{this.options.onSnapStart?.({index:this.currentSnapIndex,...r})},onComplete:()=>{this.options.onSnapComplete?.({index:this.currentSnapIndex,...r})}})}get distanceThreshold(){if("mandatory"===this.options.type)return 1/0;let{isHorizontal:e}=this.lenis,t=e?"width":"height";return"string"==typeof this.options.distanceThreshold&&this.options.distanceThreshold.endsWith("%")?Number(this.options.distanceThreshold.replace("%",""))/100*this.viewport[t]:"number"==typeof this.options.distanceThreshold?this.options.distanceThreshold:this.viewport[t]}onSnap=e=>{let t;if(this.isStopped||"touchmove"===e.event.type||"lock"===this.options.type&&this.lenis.userData?.initiator==="snap")return;let{scroll:r,isHorizontal:i}=this.lenis,n=i?e.deltaX:e.deltaY;r=Math.ceil(this.lenis.scroll+n);let o=this.computeSnaps();if(0===o.length)return;let s=o.findLastIndex(({value:e})=>e<r),a=o.findIndex(({value:e})=>e>r);if("lock"===this.options.type)n>0?t=a:n<0&&(t=s);else{let e=o[s],i=e?Math.abs(r-e.value):1/0,n=o[a];t=i<(n?Math.abs(r-n.value):1/0)?s:a}if(void 0===t||-1===t)return;t=Math.max(0,Math.min(t,o.length-1));let l=o[t];Math.abs(r-l.value)<=this.distanceThreshold&&this.goTo(t)};resize(){this.elements.forEach(e=>{e.onWrapperResize()})}};e.s(["default",0,n])},576978,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(124821),n=e.i(271645),o=e.i(174080);let s={parallaxStrength:.016,parallaxFocus:.45,lightRadius:1.05,lightIntensity:1.9,lightFalloff:2,ambient:.16,depthInfluence:.55,floodLight:1,easing:.065,startPos:[.5,.5],spotEaseIn:.045,spotEaseOut:.025,scrollFloodDistance:.5,scrollParallaxFrom:0,scrollParallaxTo:1,scrollDarkStart:.25,scrollLightBy:.5},a=`
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`,l=`
precision highp float;

varying vec2 v_uv;

uniform sampler2D u_image;
uniform sampler2D u_depth;
uniform vec2  u_res;        // canvas resolution (px)
uniform float u_imgAspect;  // image width / height
uniform vec2  u_mouse;      // smoothed light position, canvas UV (y-up)
uniform float u_parallaxStrength;
uniform float u_parallaxFocus;
uniform float u_lightRadius;
uniform float u_lightIntensity;
uniform float u_lightFalloff;
uniform float u_ambient;
uniform float u_depthInfluence;
uniform float u_floodLight;
uniform float u_spot;       // 0 = flood lit (resting), 1 = cursor point light

// background-size: cover mapping
vec2 coverUV(vec2 uv) {
  float canvasAspect = u_res.x / u_res.y;
  vec2 scale = (canvasAspect > u_imgAspect)
    ? vec2(1.0, u_imgAspect / canvasAspect)
    : vec2(canvasAspect / u_imgAspect, 1.0);
  return (uv - 0.5) * scale + 0.5;
}

void main() {
  vec2 uv = coverUV(v_uv);

  // ---------- depth parallax ----------
  // offset direction: near pixels slide with the cursor, far pixels stay put
  vec2 mouseOffset = (u_mouse - 0.5);
  float depthHere = texture2D(u_depth, vec2(uv.x, 1.0 - uv.y)).r;
  vec2 parallax = mouseOffset * u_parallaxStrength * (depthHere - u_parallaxFocus);
  vec2 puv = uv + parallax;

  // re-sample depth at the displaced position for lighting
  float depth = texture2D(u_depth, vec2(puv.x, 1.0 - puv.y)).r;
  vec3 color = texture2D(u_image, vec2(puv.x, 1.0 - puv.y)).rgb;

  // ---------- point light ----------
  // aspect-corrected distance so the glow is circular
  vec2 aspect = vec2(u_res.x / u_res.y, 1.0);
  float dist = distance(v_uv * aspect, u_mouse * aspect);

  float att = clamp(1.0 - dist / u_lightRadius, 0.0, 1.0);
  att = pow(att, u_lightFalloff);

  // depth influence: surfaces nearer the camera (brighter depth) catch more light
  float depthCatch = mix(1.0, smoothstep(0.0, 0.85, depth), u_depthInfluence);

  float spotLight = u_ambient + u_lightIntensity * att * depthCatch;

  // The whole frame is lit at rest and the light is drawn down into the hotspot
  // as the cursor takes over, so the two states cross-fade rather than cut.
  float light = mix(u_floodLight, spotLight, u_spot);
  color *= light;

  // Subtle tonemap to keep the hotspot from clipping harshly. Faded in with the
  // spot — there is nothing to clip at full flood, and skipping it there leaves
  // the image untouched, matching the plain <img> underneath the canvas.
  color = color / (1.0 + 0.15 * u_spot * color);

  gl_FragColor = vec4(color, 1.0);
}`,c=["u_image","u_depth","u_res","u_imgAspect","u_mouse","u_parallaxStrength","u_parallaxFocus","u_lightRadius","u_lightIntensity","u_lightFalloff","u_ambient","u_depthInfluence","u_floodLight","u_spot"],u=e=>new Promise((t,r)=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>t(i),i.onerror=()=>r(Error(`Failed to load texture: ${e}`)),i.src=e}),d=(e,t,r)=>{let i=e.createShader(t);if(!i)throw Error("Unable to create shader");if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i);throw e.deleteShader(i),Error(t??"Shader compile failed")}return i},h=(e,t,r)=>{let i=e.createTexture();return e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),i},p=async({canvas:e,imageSrc:t,imageElement:r,depthSrc:i,config:n,mode:o="pointer",signal:p,onFirstPaint:f,onContextLost:m})=>{let g={...s,...n},v="scroll"===o,b=e.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,stencil:!1});if(!b)return null;let[x,w]=await Promise.all([r?r.decode().then(()=>r):u(t),u(i)]);if(p?.aborted)return null;let y=b.createProgram();if(!y)return null;let E=d(b,b.VERTEX_SHADER,a),S=d(b,b.FRAGMENT_SHADER,l);if(b.attachShader(y,E),b.attachShader(y,S),b.linkProgram(y),!b.getProgramParameter(y,b.LINK_STATUS))throw Error(b.getProgramInfoLog(y)??"Program link failed");b.useProgram(y);let _=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,_),b.bufferData(b.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),b.STATIC_DRAW);let T=b.getAttribLocation(y,"a_pos");b.enableVertexAttribArray(T),b.vertexAttribPointer(T,2,b.FLOAT,!1,0,0);let R=Object.fromEntries(c.map(e=>[e,b.getUniformLocation(y,e)])),L=h(b,0,x),I=h(b,1,w);b.uniform1i(R.u_image,0),b.uniform1i(R.u_depth,1),b.uniform1f(R.u_imgAspect,x.naturalWidth/x.naturalHeight);let A=()=>{b.uniform1f(R.u_parallaxStrength,g.parallaxStrength),b.uniform1f(R.u_parallaxFocus,g.parallaxFocus),b.uniform1f(R.u_lightRadius,g.lightRadius),b.uniform1f(R.u_lightIntensity,g.lightIntensity),b.uniform1f(R.u_lightFalloff,g.lightFalloff),b.uniform1f(R.u_ambient,g.ambient),b.uniform1f(R.u_depthInfluence,g.depthInfluence),b.uniform1f(R.u_floodLight,g.floodLight)};A();let k={x:g.startPos[0],y:g.startPos[1]},P={x:g.startPos[0],y:g.startPos[1]},C=0,M=0,D=!1,F=null,j=0,z=null,O=null,$=0,B=0,G=!1,N=!1,W=!0,U=!1,H=!1,X=()=>{H||(H=!0,f?.())},Y=()=>{let t=Math.min(window.devicePixelRatio||1,2),r=Math.round(e.clientWidth*t),i=Math.round(e.clientHeight*t);r&&i&&(e.width!==r||e.height!==i)&&(e.width=r,e.height=i,b.viewport(0,0,r,i),b.uniform2f(R.u_res,r,i),U=!0,W=!0)},V=()=>{if(!U)return;(()=>{if(!F)return;let t=e.clientWidth,r=e.clientHeight;if(!t||!r)return;let i=e.getBoundingClientRect(),n=i.left+i.width/2-t/2,o=i.top+i.height/2-r/2;P.x=(F.x-n)/t,P.y=1-(F.y-o)/r})(),D&&(D=!1,k.x=P.x,k.y=P.y,W=!0);let t=P.x-k.x,r=P.y-k.y,i=M-C;(!(5e-4>Math.abs(t)&&5e-4>Math.abs(r)&&5e-4>Math.abs(i))||W)&&(k.x+=t*g.easing,k.y+=r*g.easing,C+=i*(i>0?g.spotEaseIn:g.spotEaseOut),b.uniform2f(R.u_mouse,k.x,k.y),b.uniform1f(R.u_spot,C),b.drawArrays(b.TRIANGLES,0,3),W=!1,X())},q=()=>{if(!U)return;let{scrollParallaxFrom:e,scrollParallaxTo:t,scrollDarkStart:r,scrollLightBy:i}=g,n=i>0?Math.min($/i,1):1;b.uniform2f(R.u_mouse,.5,e+(t-e)*$),b.uniform1f(R.u_spot,0),b.uniform1f(R.u_floodLight,r+(g.floodLight-r)*n),b.drawArrays(b.TRIANGLES,0,3),W=!1,X()},K=()=>v?q():V(),Z=()=>{B=requestAnimationFrame(Z),V()},J=()=>{B&&(cancelAnimationFrame(B),B=0)},Q=(e,t)=>{C<.05&&(D=!0),F={x:e,y:t},M=1,j=0},ee=e=>Q(e.clientX,e.clientY),et=e=>{let t=e.touches[0];t&&Q(t.clientX,t.clientY)},er=e=>{let t,r=(t=e.target)instanceof HTMLElement?t.scrollTop:window.scrollY||document.scrollingElement?.scrollTop||0,i=g.scrollFloodDistance*window.innerHeight;null!==z&&e.target===O&&(j=Math.min(j+Math.abs(r-z),i)),z=r,O=e.target,j>=i&&(M=0)},ei=e=>{e.preventDefault(),G=!1,J(),m?.()},en=new ResizeObserver(()=>{Y(),B||K()});return en.observe(e),e.addEventListener("webglcontextlost",ei),v||(window.addEventListener("pointermove",ee,{passive:!0}),window.addEventListener("touchmove",et,{passive:!0}),window.addEventListener("scroll",er,{capture:!0,passive:!0})),Y(),K(),{setActive:e=>{if(!N&&e!==G){if(G=e,e){Y(),W=!0,B||N||v||(B=requestAnimationFrame(Z));return}J(),C=0,M=0,j=0,z=null,O=null,W=!0}},setScrollProgress:e=>{!N&&v&&($=Math.min(Math.max(e,0),1),q())},setConfig:e=>{N||(Object.assign(g,e),A(),W=!0,K())},destroy:()=>{N||(N=!0,G=!1,J(),en.disconnect(),e.removeEventListener("webglcontextlost",ei),window.removeEventListener("pointermove",ee),window.removeEventListener("touchmove",et),window.removeEventListener("scroll",er,{capture:!0}),b.deleteTexture(L),b.deleteTexture(I),b.deleteBuffer(_),b.deleteShader(E),b.deleteShader(S),b.deleteProgram(y),b.getExtension("WEBGL_lose_context")?.loseContext())}}};var f=e.i(575509),m=e.i(997053);let g=m.default.div.withConfig({componentId:"sc-cda082ca-0"})(()=>m.css`
		position: absolute;
		inset: 0;

		pointer-events: none;
		user-select: none;

		// NOTE • Held transparent until the textures land, so the static image
		// underneath covers the gap instead of a black rectangle.
		opacity: 0;
		transition: opacity ${(0,f.getTime)("m")} ${(0,f.getEase)("ease")};

		&[data-ready='true'] {
			opacity: 1;
		}

		canvas {
			position: absolute;
			inset: 0;
			display: block;
			width: 100%;
			height: 100%;
		}
	`),v=m.default.div.withConfig({componentId:"sc-cda082ca-1"})(()=>m.css`
		position: fixed;
		inset: auto 0 0 0;
		z-index: 9999;

		max-height: 62dvh;
		overflow-y: auto;
		padding: 0.75rem;

		font: 500 11px/1.4 ui-monospace, monospace;
		color: #fff;
		background: rgb(0 0 0 / 0.82);
		backdrop-filter: blur(8px);
		border-top: 1px solid rgb(255 255 255 / 0.18);

		${f.bp.l`
			inset: 1rem 1rem auto auto;
			width: 17rem;
			max-height: calc(100dvh - 2rem);
			border: 1px solid rgb(255 255 255 / 0.18);
			border-radius: 6px;
		`}
	`),b=m.default.div.withConfig({componentId:"sc-cda082ca-2"})(()=>m.css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;

		button {
			padding: 0.3rem 0.55rem;
			font: inherit;
			color: #fff;
			cursor: pointer;
			background: rgb(255 255 255 / 0.12);
			border: 1px solid rgb(255 255 255 / 0.22);
			border-radius: 4px;
		}
	`),x=m.default.div.withConfig({componentId:"sc-cda082ca-3"})(()=>m.css`
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin: 0.65rem 0;

		label {
			display: flex;
			flex-direction: column;
			gap: 0.15rem;
		}

		span {
			display: flex;
			align-items: baseline;
			justify-content: space-between;
			gap: 0.5rem;
			opacity: 0.85;
		}

		em {
			font-style: normal;
			opacity: 0.7;
		}

		input {
			width: 100%;
			accent-color: #fff;
		}
	`),w=[{key:"parallaxStrength",label:"Parallax strength",min:0,max:.15,step:.001},{key:"parallaxFocus",label:"Parallax focus",min:0,max:1,step:.01},{key:"depthInfluence",label:"Depth influence",min:0,max:1,step:.01}],y=[{key:"scrollParallaxFrom",label:"Sweep from (y)",min:0,max:1,step:.01},{key:"scrollParallaxTo",label:"Sweep to (y)",min:0,max:1,step:.01},{key:"scrollDarkStart",label:"Start brightness",min:0,max:1,step:.01},{key:"scrollLightBy",label:"Lit by (progress)",min:.05,max:1,step:.01},{key:"floodLight",label:"Final brightness",min:0,max:2,step:.01}],E=[{key:"lightRadius",label:"Light radius",min:.2,max:3,step:.01},{key:"lightIntensity",label:"Light intensity",min:0,max:4,step:.05},{key:"lightFalloff",label:"Light falloff",min:.5,max:6,step:.1},{key:"ambient",label:"Ambient",min:0,max:1,step:.01},{key:"floodLight",label:"Flood brightness",min:0,max:2,step:.01},{key:"easing",label:"Cursor easing",min:.01,max:.3,step:.005},{key:"spotEaseIn",label:"Spot ease in",min:.005,max:.2,step:.005},{key:"spotEaseOut",label:"Flood ease out",min:.005,max:.2,step:.005},{key:"scrollFloodDistance",label:"Flood after (screens)",min:0,max:2,step:.05}],S=e=>{let i,a,l,c,u,d,h,p,f,m,g,S,T,R,L,I,A,k=(0,r.c)(38),{mode:P,base:C,onChange:M}=e,D="scroll"===P?y:E;k[0]!==D?(i=[...w,...D],k[0]=D,k[1]=i):i=k[1];let F=i;k[2]!==C?(a={...s,...C},k[2]=C,k[3]=a):a=k[3];let j=a,[z,O]=(0,n.useState)(j),[$,B]=(0,n.useState)(!0),[G,N]=(0,n.useState)(!1),[W,U]=(0,n.useState)(!1);k[4]===Symbol.for("react.memo_cache_sentinel")?(l=(e,t)=>{O(r=>({...r,[e]:t}))},k[4]=l):l=k[4];let H=l;k[5]!==j?(c=()=>O(j),k[5]=j,k[6]=c):c=k[6];let X=c;k[7]!==F||k[8]!==z?(u=()=>{let e=F.reduce((e,t)=>(e[t.key]=z[t.key],e),{});navigator.clipboard?.writeText(JSON.stringify(e,null,2)).then(()=>U(!0),()=>U(!1))},k[7]=F,k[8]=z,k[9]=u):u=k[9];let Y=u;if(k[10]===Symbol.for("react.memo_cache_sentinel")?(d=()=>N(!0),h=[],k[10]=d,k[11]=h):(d=k[10],h=k[11]),(0,n.useEffect)(d,h),k[12]!==M||k[13]!==z?(f=()=>M(z),p=[z,M],k[12]=M,k[13]=z,k[14]=p,k[15]=f):(p=k[14],f=k[15]),(0,n.useEffect)(f,p),k[16]!==W?(m=()=>{if(!W)return;let e=window.setTimeout(()=>U(!1),1200);return()=>window.clearTimeout(e)},g=[W],k[16]=W,k[17]=m,k[18]=g):(m=k[17],g=k[18]),(0,n.useEffect)(m,g),!G)return null;k[19]!==P?(S=(0,t.jsxs)("strong",{children:["depth · ",P]}),k[19]=P,k[20]=S):S=k[20],k[21]===Symbol.for("react.memo_cache_sentinel")?(T=()=>B(_),k[21]=T):T=k[21];let V=$?"hide":"show";return k[22]!==V?(R=(0,t.jsx)("button",{type:"button",onClick:T,children:V}),k[22]=V,k[23]=R):R=k[23],k[24]!==S||k[25]!==R?(L=(0,t.jsxs)(b,{children:[S,R]}),k[24]=S,k[25]=R,k[26]=L):L=k[26],k[27]!==W||k[28]!==F||k[29]!==Y||k[30]!==X||k[31]!==$||k[32]!==z?(I=$?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{children:F.map(e=>(0,t.jsxs)("label",{children:[(0,t.jsxs)("span",{children:[e.label,(0,t.jsx)("em",{children:z[e.key].toFixed(3)})]}),(0,t.jsx)("input",{type:"range",min:e.min,max:e.max,step:e.step,value:z[e.key],onChange:t=>H(e.key,Number(t.target.value))})]},e.key))}),(0,t.jsxs)(b,{children:[(0,t.jsx)("button",{type:"button",onClick:X,children:"reset"}),(0,t.jsx)("button",{type:"button",onClick:Y,children:W?"copied":"copy config"})]})]}):null,k[27]=W,k[28]=F,k[29]=Y,k[30]=X,k[31]=$,k[32]=z,k[33]=I):I=k[33],k[34]!==$||k[35]!==L||k[36]!==I?(A=(0,o.createPortal)((0,t.jsxs)(v,{"data-open":$,children:[L,I]}),document.body),k[34]=$,k[35]=L,k[36]=I,k[37]=A):A=k[37],A};function _(e){return!e}S.displayName="DepthParallaxControls";let T=(0,n.forwardRef)(({imageSrc:e,imageElement:r,depthSrc:i,isActive:o=!0,mode:s="pointer",config:a,className:l},c)=>{let u=(0,n.useRef)(null),d=(0,n.useRef)(null),h=(0,n.useRef)(a);h.current=a;let f=(0,n.useRef)(0),[m,v]=(0,n.useState)(!1),[b,x]=(0,n.useState)(!1),[w,y]=(0,n.useState)(!1),E=(0,n.useCallback)(e=>{d.current?.setConfig(e)},[]);return(0,n.useImperativeHandle)(c,()=>({setScrollProgress:e=>{f.current=e,d.current?.setScrollProgress(e)}}),[]),(0,n.useEffect)(()=>{y(new URLSearchParams(window.location.search).has("depth-debug"))},[]),(0,n.useEffect)(()=>{let t=u.current;if(!t)return;let n=document.createElement("canvas");t.appendChild(n);let o=new AbortController;return p({canvas:n,imageSrc:e,imageElement:r,depthSrc:i,mode:s,config:h.current,signal:o.signal,onFirstPaint:()=>x(!0),onContextLost:()=>{v(!1),x(!1)}}).then(e=>{if(e){if(o.signal.aborted)return void e.destroy();d.current=e,e.setScrollProgress(f.current),v(!0)}}).catch(()=>v(!1)),()=>{o.abort(),d.current?.destroy(),d.current=null,n.remove(),v(!1),x(!1)}},[e,r,i,s]),(0,n.useEffect)(()=>{d.current?.setActive(o&&m)},[o,m]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g,{ref:u,className:l,"data-ready":b,"aria-hidden":"true"}),w?(0,t.jsx)(S,{mode:s,base:a,onChange:E}):null]})});T.displayName="DepthParallax";var R=e.i(481293),L=e.i(89835),I=e.i(101384),A=e.i(748656),k=e.i(229352),P=e.i(607561),C=e.i(255981),M=e.i(494473),D=e.i(989970),F=e.i(883495),j=e.i(255667),z=e.i(212960);let O=(0,m.default)(f.Div).attrs({as:"footer"}).withConfig({componentId:"sc-a2c8839e-0"})(()=>m.css`
		--offset: calc(${(0,f.getGap)("huge")} + ${(0,f.getGap)("l")});

		position: relative;
		z-index: 0;
		overflow: clip;

		display: flex;
		align-items: flex-start;
		justify-content: flex-start;

		width: 100%;
		min-height: 100dvh;
		padding-top: var(--offset);
		background: ${(0,f.getGlobal)("black")};

		${f.bp.l` --offset: calc(${(0,f.getGap)("col")} + ${(0,f.getGap)("l")})`}


		&:after {
			content: '';
            position: absolute;
            inset: 0;
            z-index: 0;
            background: linear-gradient(to bottom, ${(0,f.getGlobal)("black")} 0%, transparent 50%);
        }

		waffl-grid {
			position: relative;
			z-index: 1;
		}
	`),$=(0,m.default)(f.Div).attrs({as:"aside"}).withConfig({componentId:"sc-a2c8839e-1"})(()=>m.css`
		position: absolute;
		inset: 0;
		z-index: -2;
		overflow: clip;
		pointer-events: none;
		user-select: none;

		// NOTE • The picture is the base layer and the depth-parallax canvas sits
		// on top of it, so it doubles as the fallback whenever the scene is off
		// (mobile, reduced motion, no depth map, no WebGL) or still loading.
		picture {
			display: block;
			width: 100%;
			height: 100%;

			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: center bottom;

				${f.bp.l`
					object-position: center center;
				`}
			}
		}
	`),B=(0,m.default)(f.Div).withConfig({componentId:"sc-a2c8839e-2"})(()=>m.css`
		position: relative;
		z-index: 2;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: ${(0,f.getGap)("m")};
		width: 100%;

		${f.bp.l` gap: ${(0,f.getGap)("l")} `}

		a { margin-top: ${(0,f.getGap)("xs")} }
	`),G=(0,m.default)(f.Div).withConfig({componentId:"sc-a2c8839e-3"})(()=>m.css`
		h2 {
			${z.headlineL}

			/* One word per line. SplitText wraps each word in a div; laid out as a
			   centred column they stack regardless of how wide the line would be. */
			display: flex;
			flex-direction: column;
			align-items: center;

			margin: 0;
			text-align: center;
			color: ${(0,f.getBrand)("bc5")};
		}
	`),N=(0,m.default)(f.Div).withConfig({componentId:"sc-a2c8839e-4"})(()=>m.css`
		display: flex;
	`),W=(0,m.default)(f.Div).attrs({as:"p"}).withConfig({componentId:"sc-a2c8839e-5"})(()=>m.css`
		${z.captionL}	

		color: ${(0,f.getBrand)("bc5",60)};
		text-align: center;
	`),U=(0,m.default)(f.Div).withConfig({componentId:"sc-a2c8839e-6"})(()=>m.css`
		--offset: ${(0,f.getGap)("xxl")};
		
		position: absolute;
		inset: auto 0 var(--offset) 0;
		z-index: 5;

		display: grid;
		place-items: center;
		width: 100%;
		
	`),H=[...Array(12)].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.02*t}s; }`).join("\n"),X=m.default.button.withConfig({componentId:"sc-a2c8839e-7"})(()=>m.css`
		${z.captionL}

		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: ${(0,f.getGap)("s")};
		cursor: pointer;

		@media (hover: hover) and (pointer: fine) {
            &:hover {
                span > span {
                    opacity: 0.6;
					transform: translateY(4em);
                }

				i  svg {
					&:last-child { transform: translateY(0%) }
					&:first-child { transform: translateY(-200%) }
				}
            }
        }

		> span {
			overflow: clip;

			> span {
				display: inline-block;
				padding: 0;
				margin: 0;
				text-shadow: ${(0,f.getBrand)("bc5",60)} 0px -4em 0px;
				transition: transform 0.5s ${(0,f.getEase)("bezzy2")};
			
				${H}		
			}
		}
	`),Y=e=>{let i,n,o,s=(0,r.c)(5),{lenis:a}=e;s[0]!==a?(i=()=>{a?.scrollTo(0,{duration:1.2})},s[0]=a,s[1]=i):i=s[1];let l=i;return s[2]===Symbol.for("react.memo_cache_sentinel")?(n=(0,t.jsx)("span",{children:"Back to Top".split("").map(V)}),s[2]=n):n=s[2],s[3]!==l?(o=(0,t.jsx)(X,{type:"button","aria-label":"Back to Top",onClick:l,children:n}),s[3]=l,s[4]=o):o=s[4],o};function V(e,r){return(0,t.jsx)("span",{children:" "===e?" ":e},`${e}_${r.toString()}`)}Y.displayName="BackToTop";var q=e.i(221781),K=e.i(486861),Z=e.i(189897),J=e.i(797489),Q=e.i(274879),ee=e.i(875324);let et="top bottom",er="bottom bottom",ei="top 75%",en=e=>{let i,o,s,a,l,c=(0,r.c)(19),{heading:u,editAttr:d,triggerRef:h}=e,{isReducedMotion:p}=(0,n.use)(I.PerformanceContext),f=(0,n.useRef)(null),m=(0,j.useLenis)();c[0]!==u?(i=(0,Z.cleanSanityString)(u)??"",c[0]=u,c[1]=i):i=c[1];let g=i,v=(0,Q.useSplitTextRecovery)(f,g);c[2]!==g?(o=(0,K.escapeHtml)(g),c[2]=g,c[3]=o):o=c[3];let b=(0,J.useInnerHtml)(o);return(c[4]!==g||c[5]!==p||c[6]!==m?.rootElement||c[7]!==h?(s=()=>{let e=f.current,t=m?.rootElement;if(!e||!g||!t)return;let r=ee.SplitText.create(e,{type:"words"}),{words:i}=r;if(!i.length)return()=>r.revert();if(p)return D.default.set(i,{autoAlpha:1,scale:1,filter:"blur(0px)",display:"inline-block",verticalAlign:"top",willChange:"auto"}),()=>r.revert();(e=>{if(!e.length)return;let t=1/0,r=1/0,i=-1/0,n=-1/0;for(let o of e)t=Math.min(t,o.offsetLeft),r=Math.min(r,o.offsetTop),i=Math.max(i,o.offsetLeft+o.offsetWidth),n=Math.max(n,o.offsetTop+o.offsetHeight);let o=(t+i)/2,s=(r+n)/2;for(let t of e)D.default.set(t,{transformOrigin:`${o-t.offsetLeft}px ${s-t.offsetTop}px`,force3D:!0})})(i),D.default.set(i,{autoAlpha:0,scale:q.TITLE_SCALE_START,filter:`blur(${q.TITLE_BLUR_START}px)`,display:"inline-block",verticalAlign:"top",willChange:"opacity, transform, filter"});let n={progress:0},o=D.default.to(n,{progress:1,duration:.9,ease:"power2.out",paused:!0,onUpdate:()=>(e=>{for(let[t,r]of i.entries()){let{scale:n,opacity:o,blur:s}=(0,q.getIntroGrowInWordValues)(e,t,i.length);D.default.set(r,{autoAlpha:o,scale:n,filter:`blur(${s}px)`})}})(n.progress),onComplete:()=>D.default.set(i,{willChange:"auto"})}),s=F.default.create({trigger:h?.current??e,scroller:t,start:ei,once:!0,onEnter:()=>o.play()});return s.progress>0&&o.play(),()=>{s.kill(),o.kill(),r.revert()}},c[4]=g,c[5]=p,c[6]=m?.rootElement,c[7]=h,c[8]=s):s=c[8],c[9]!==g||c[10]!==p||c[11]!==m||c[12]!==v||c[13]!==h?(a={scope:f,dependencies:[g,p,m,v,h]},c[9]=g,c[10]=p,c[11]=m,c[12]=v,c[13]=h,c[14]=a):a=c[14],(0,P.useAnimation)(s,a),g)?(c[15]!==g||c[16]!==d||c[17]!==b?(l=(0,t.jsx)(G,{children:(0,t.jsx)("h2",{ref:f,"data-sanity":d,dangerouslySetInnerHTML:b},g)}),c[15]=g,c[16]=d,c[17]=b,c[18]=l):l=c[18],l):null};en.displayName="CtaHeading";var eo=e.i(371136),es=e.i(676842);let ea={parallaxStrength:.05},el=e=>{let o,s,a,l,c,u,d,h,p,f,m,g,v,b,x,w,y,E,S,_,z,G,H,X,V=(0,r.c)(72),{heading:q,headingEditAttr:K,subheading:Z,mobile:J,desktop:Q,isContact:ee}=e,{isReducedMotion:el}=(0,n.use)(I.PerformanceContext),eu=(0,n.useRef)(null),ed=(0,n.useRef)(null),eh=(0,n.useRef)(null),ep=(0,n.useRef)(null),ef=(0,n.useRef)(null),em=(0,n.useRef)(null),eg=(0,n.useRef)(0),ev=(0,j.useLenis)();V[0]!==ev?(o=e=>(0,k.scrollToForm)(ev,e),V[0]=ev,V[1]=o):o=V[1];let eb=o,ex=(0,C.useIsDesktopViewport)(),[ew,ey]=(0,n.useState)(!1),[eE,eS]=(0,n.useState)(!1),[e_,eT]=(0,n.useState)(null);V[2]===Symbol.for("react.memo_cache_sentinel")?(s=e=>{ef.current=e,e?.setScrollProgress(eg.current)},V[2]=s):s=V[2];let eR=s,eL=!!(Q?.image&&J?.image&&q&&Z),eI=ex?Q:J,eA=eI?.depthMap,ek=!ex;V[3]!==eA||V[4]!==ek?(a=((e,t=!1)=>{var r;let i;return r=t?720:1280,(i=(0,R.resolveSanityImage)(e))?(0,R.urlFor)(i).width(r).fit("max").quality(95).auto("format").url():null})(eA,ek),V[3]=eA,V[4]=ek,V[5]=a):a=V[5];let eP=a,eC=!!eP&&!el,eM=ex?"pointer":"scroll";V[6]!==eL||V[7]!==eE||V[8]!==ev?.rootElement?(l=()=>{let e=eu.current;if(!e||!eL||eE)return;let t=ev?.rootElement??null,r=new IntersectionObserver(e=>{e.some(ec)&&(eS(!0),r.disconnect())},{root:t,rootMargin:`${t?.clientHeight??window.innerHeight}px 0px`});return r.observe(e),()=>r.disconnect()},V[6]=eL,V[7]=eE,V[8]=ev?.rootElement,V[9]=l):l=V[9],V[10]!==eL||V[11]!==eE||V[12]!==ev?(c=[eL,eE,ev],V[10]=eL,V[11]=eE,V[12]=ev,V[13]=c):c=V[13],(0,n.useEffect)(l,c),V[14]!==Q?.image||V[15]!==eL||V[16]!==J?.image?(u=()=>{if(!eL||!Q?.image||!J?.image)return;let e=em.current?.querySelector("img");if(!e)return;let t=()=>{!e.complete||!e.naturalWidth||!e.currentSrc||(0,A.isDeferredImage)(e)||eT(t=>t?.element===e&&t.src===e.currentSrc?t:{element:e,src:e.currentSrc})};return t(),e.addEventListener("load",t),()=>e.removeEventListener("load",t)},V[14]=Q?.image,V[15]=eL,V[16]=J?.image,V[17]=u):u=V[17],V[18]!==Q||V[19]!==eL||V[20]!==J?(d=[Q,J,eL],V[18]=Q,V[19]=eL,V[20]=J,V[21]=d):d=V[21],(0,n.useEffect)(u,d),V[22]!==eL||V[23]!==ev?.rootElement?(h=()=>{let e=eu.current;if(!e||!eL)return;let t=new IntersectionObserver(e=>{let t=e[0];t&&ey(t.isIntersecting)},{root:ev?.rootElement??null});return t.observe(e),()=>t.disconnect()},V[22]=eL,V[23]=ev?.rootElement,V[24]=h):h=V[24],V[25]!==eL||V[26]!==ev?(p=[ev,eL],V[25]=eL,V[26]=ev,V[27]=p):p=V[27],(0,n.useEffect)(h,p),V[28]===Symbol.for("react.memo_cache_sentinel")?(f=()=>eu.current?[eu.current]:[],V[28]=f):f=V[28];let eD=f;return(V[29]===Symbol.for("react.memo_cache_sentinel")?(m=[],g={distanceThreshold:"50%"},V[29]=m,V[30]=g):(m=V[29],g=V[30]),(0,eo.useLenisSnap)(ev,eD,m,g),V[31]===Symbol.for("react.memo_cache_sentinel")?(v={distanceThreshold:"50%"},V[31]=v):v=V[31],(0,es.useNativeSnap)(ev,eD,!0,v),V[32]!==el||V[33]!==ev?.rootElement?(b=e=>{let{isDesktop:t}=e,r=eu.current,i=ed.current,n=ev?.rootElement;if(!r||!i||!n)return;let o=[];D.default.set(i,{autoAlpha:0}),D.default.to(i,{autoAlpha:1,ease:"none",scrollTrigger:{trigger:r,scroller:n,start:"top bottom",end:"center bottom",scrub:!0,markers:!1}}),t&&D.default.from(i,{scale:1.5,ease:"none",scrollTrigger:{trigger:r,scroller:n,start:et,end:er,scrub:!0}});let s=ep.current;if(s&&!el){D.default.set(s,{autoAlpha:0,y:16});let e=D.default.to(s,{autoAlpha:1,y:0,duration:.6,ease:"power2.out",delay:.7200000000000001,paused:!0}),t=F.default.create({trigger:r,scroller:n,start:ei,once:!0,onEnter:()=>e.play()});t.progress>0&&e.play(),o.push(()=>{t.kill(),e.kill()})}if(t||D.default.from(i,{scale:1.5,transformOrigin:"center bottom",ease:"none",scrollTrigger:{trigger:r,scroller:n,start:et,end:er,scrub:!0}}),!t){let e=F.default.create({trigger:r,scroller:n,start:et,end:er,onUpdate:e=>{eg.current=e.progress,ef.current?.setScrollProgress(e.progress)},onRefresh:e=>{eg.current=e.progress,ef.current?.setScrollProgress(e.progress)}});o.push(()=>e.kill())}return()=>{for(let e of o)e()}},V[32]=el,V[33]=ev?.rootElement,V[34]=b):b=V[34],V[35]!==ee||V[36]!==el||V[37]!==ev?(x={scope:eu,dependencies:[ev,ee,el]},V[35]=ee,V[36]=el,V[37]=ev,V[38]=x):x=V[38],(0,P.useAnimation)(b,x),Q?.image&&J?.image&&q&&Z)?(V[39]!==Q.image||V[40]!==eE||V[41]!==J.image?(w=(0,t.jsx)(L.default,{ref:em,enabled:eE,desktop:Q.image,mobile:J.image,fill:!0,sizes:"100vw",quality:85,crossOrigin:"anonymous"}),V[39]=Q.image,V[40]=eE,V[41]=J.image,V[42]=w):w=V[42],V[43]!==e_||V[44]!==eP||V[45]!==eC||V[46]!==ex||V[47]!==eE||V[48]!==ew||V[49]!==eM?(y=eC&&eE&&e_&&eP?(0,t.jsx)(T,{ref:eR,mode:eM,config:ex?void 0:ea,imageSrc:e_.src,imageElement:e_.element,depthSrc:eP,isActive:ew}):null,V[43]=e_,V[44]=eP,V[45]=eC,V[46]=ex,V[47]=eE,V[48]=ew,V[49]=eM,V[50]=y):y=V[50],V[51]!==w||V[52]!==y?(E=(0,t.jsxs)($,{ref:ed,"aria-hidden":"true",children:[w,y]}),V[51]=w,V[52]=y,V[53]=E):E=V[53],V[54]!==Z?(S=(0,t.jsx)(W,{children:Z}),V[54]=Z,V[55]=S):S=V[55],V[56]!==q||V[57]!==K?(_=(0,t.jsx)(en,{heading:q,editAttr:K,triggerRef:eu}),V[56]=q,V[57]=K,V[58]=_):_=V[58],V[59]!==eb||V[60]!==ee?(z=(0,t.jsx)(N,{ref:ep,children:ee?(0,t.jsx)(i.default,{to:k.FORM_ANCHOR,onClick:eb,label:"Start the conversation",aria:"Go to the enquiry form"}):(0,t.jsx)(i.default,{to:"/contact",label:"Start Your Project",aria:"Go to Contact"})}),V[59]=eb,V[60]=ee,V[61]=z):z=V[61],V[62]!==S||V[63]!==_||V[64]!==z?(G=(0,t.jsx)(M.default,{children:(0,t.jsxs)(B,{$l:"2/12",$xl:"3/11",ref:eh,children:[S,_,z]})}),V[62]=S,V[63]=_,V[64]=z,V[65]=G):G=V[65],V[66]!==ev?(H=(0,t.jsx)(U,{children:(0,t.jsx)(Y,{lenis:ev})}),V[66]=ev,V[67]=H):H=V[67],V[68]!==E||V[69]!==G||V[70]!==H?(X=(0,t.jsxs)(O,{ref:eu,"data-global-cta":!0,children:[E,G,H]}),V[68]=E,V[69]=G,V[70]=H,V[71]=X):X=V[71],X):null};function ec(e){return e.isIntersecting}el.displayName="GlobalCta",e.s(["default",0,el],576978)},221781,e=>{"use strict";var t=e.i(989970);let r=t.default.parseEase("power2.in");t.default.parseEase("power2.out");let i=(e,t,r,i,n)=>r<=0?0:Math.max(0,Math.min(1,(e*((r-1)*i+n)-t*i)/n));e.s(["DESCRIPTION_LINE_GAP",0,.14,"DESCRIPTION_LINE_REVEAL",0,.9,"TITLE_BLUR_START",0,8,"TITLE_SCALE_START",0,0,"TITLE_WORD_GAP",0,.15,"TITLE_WORD_REVEAL",0,.8,"getGrowOutWordValues",0,(e,t,n)=>{let o=r(i(e,n-1-t,n,.083,.667));return{scale:1+ +o,opacity:1-o,blur:8*o}},"getIntroGrowInWordValues",0,(e,t,r)=>{let n=i(e,t,r,.15,.8);return{scale:0+ +n,opacity:n,blur:(1-n)*8}},"getStaggeredSegmentProgress",0,i])},371136,e=>{"use strict";var t=e.i(500932),r=e.i(883495),i=e.i(815711),n=e.i(271645),o=e.i(448806),s=e.i(764548);e.s(["useLenisSnap",0,(e,a,l,c)=>{let u,d,h,p=(0,t.c)(24);p[0]!==c?(u=void 0===c?{}:c,p[0]=c,p[1]=u):u=p[1];let{debounce:f,desktopMinWidth:m,distanceThreshold:g,duration:v,easing:b,allViewports:x,listingWheel:w}=u,y=void 0===f?500:f,E=void 0===m?1024:m,S=void 0!==x&&x,_=(0,n.useRef)(void 0),T=(0,o.usePageTransitioning)();return p[2]!==S||p[3]!==y||p[4]!==E||p[5]!==g||p[6]!==v||p[7]!==b||p[8]!==a||p[9]!==T||p[10]!==e||p[11]!==w?(d=()=>{if(!e||T)return;if(w){let t=((e,t,{multiplier:r,maxStep:i,departureRatio:n,debounce:o,duration:a,easing:l})=>{let c=e.rootElement,u=e.options.virtualScroll,d=0,h=!1,p=()=>{window.clearTimeout(d),d=0},f=()=>e.isStopped||e.isLocked||(0,s.isScrollResetting)(c)||(0,s.isScrollFolding)(c)||c.hasAttribute(s.SCROLL_RESIZING_ATTRIBUTE),m=s=>{if(p(),u?.(s)===!1)return!1;let{event:m}=s;if("wheel"!==m.type||m.ctrlKey||f()||!e.options.smoothWheel||!s.deltaY||Math.abs(s.deltaX)>Math.abs(s.deltaY))return!0;let g=m.composedPath();if(g.slice(0,g.indexOf(c)).some(t=>t instanceof HTMLElement&&(e.options.prevent?.(t)||t.hasAttribute("data-lenis-prevent")||t.hasAttribute("data-lenis-prevent-wheel")||t.hasAttribute("data-lenis-prevent-vertical"))))return!0;let v=c.clientHeight*i;s.deltaY=Math.max(-v,Math.min(v,s.deltaY*r));let b=Math.sign(s.deltaY);return d=window.setTimeout(()=>{if(d=0,h||f()||!m.defaultPrevented||"native"===e.isScrolling)return;let r=c.getBoundingClientRect();if(!r.height)return;let i=c.clientHeight/r.height,o=e.scroll,s=((e,t,r,i)=>{if(!e.length)return null;let n=e.findIndex(e=>e>=t);if(-1===n)return e[e.length-1];if(0===n)return e[0];let o=e[n],s=e[n-1];if(o-t<=1)return o;if(t-s<=1)return s;let a=(o-s)*i;return r>0?t-s+1>=a?o:s:o-t+1>=a?s:o})(t().map(e=>o+(e.getBoundingClientRect().top-r.top)*i).sort((e,t)=>e-t),e.targetScroll+o-e.animatedScroll,b,n);null!==s&&e.scrollTo(s,{duration:a,easing:l,userData:{initiator:"snap"}})},o),!0};return e.options.virtualScroll=m,c.addEventListener("touchstart",p,{passive:!0}),{resize:p,destroy:()=>{h=!0,p(),c.removeEventListener("touchstart",p),e.options.virtualScroll===m&&(e.options.virtualScroll=u)}}})(e,a,{...w,debounce:y,duration:v,easing:b});return _.current=t.resize,r.default.addEventListener("refresh",t.resize),()=>{_.current=void 0,r.default.removeEventListener("refresh",t.resize),t.destroy()}}let t=window.matchMedia(S?"(min-width: 0px)":`(min-width: ${E}px) and (pointer: fine)`),n=e.rootElement,o=null,l=!1,c=null,u=()=>{if(c?.(),o?.stop(),o?.destroy(),c=null,o=null,!t.matches)return;let r=a().filter(Boolean);r.length&&(c=(o=new i.default(e,{type:"proximity",debounce:y,distanceThreshold:g,duration:v,easing:b})).addElements(r,{align:["start"]}),l&&o.stop())},d=()=>{l=!0,o?.stop()},h=()=>{l=!1,o?.start()};return _.current=u,u(),t.addEventListener("change",u),n.addEventListener("touchstart",d,{passive:!0}),n.addEventListener("wheel",h,{passive:!0}),r.default.addEventListener("refresh",u),()=>{_.current=void 0,t.removeEventListener("change",u),n.removeEventListener("touchstart",d),n.removeEventListener("wheel",h),r.default.removeEventListener("refresh",u),c?.(),o?.stop(),o?.destroy()}},p[2]=S,p[3]=y,p[4]=E,p[5]=g,p[6]=v,p[7]=b,p[8]=a,p[9]=T,p[10]=e,p[11]=w,p[12]=d):d=p[12],p[13]!==S||p[14]!==y||p[15]!==l||p[16]!==E||p[17]!==g||p[18]!==v||p[19]!==b||p[20]!==T||p[21]!==e||p[22]!==w?(h=[y,E,S,w,g,v,b,e,T,...l],p[13]=S,p[14]=y,p[15]=l,p[16]=E,p[17]=g,p[18]=v,p[19]=b,p[20]=T,p[21]=e,p[22]=w,p[23]=h):h=p[23],(0,n.useEffect)(d,h),_}],371136)},676842,e=>{"use strict";var t=e.i(500932),r=e.i(764548),i=e.i(573943);let n=500;var o=e.i(271645);e.s(["useNativeSnap",0,(e,s,a,l)=>{let c,u,d,h=(0,t.c)(12);h[0]!==l?(c=void 0===l?{}:l,h[0]=l,h[1]=c):c=h[1];let{debounce:p,distanceThreshold:f,duration:m,easing:g,nativeRestDelay:v}=c;h[2]!==p||h[3]!==f||h[4]!==m||h[5]!==g||h[6]!==s||h[7]!==a||h[8]!==e||h[9]!==v?(u=()=>{if(e&&a)return((e,t,{debounce:o=n,distanceThreshold:s,duration:a,easing:l,nativeRestDelay:c}={})=>{let u=e.rootElement,d=0,h=null,p=!1,f=-1/0,m=()=>{d&&(window.clearTimeout(d),d=0)},g=(n=!1)=>{if(d=0,p||e.isStopped||"smooth"===e.isScrolling||!n&&e.isScrolling||(0,r.isScrollResetting)(u)||u.hasAttribute(r.SCROLL_RESIZING_ATTRIBUTE))return;let o=u.scrollTop,c=u.getBoundingClientRect().top,h=null;for(let e of t()){let t=e.getBoundingClientRect().top-c+o;(null===h||Math.abs(t-o)<Math.abs(h-o))&&(h=t)}null===h||1>Math.abs(h-o)||Math.abs(h-o)>((e,t)=>{if(void 0===e)return 1/0;if("number"==typeof e)return e;let r=e.trim().endsWith("%"),i=Number.parseFloat(e);return Number.isFinite(i)?r?i/100*t:i:1/0})(s,u.clientHeight)||((0,i.scrollTrace)("snap",{from:Math.round(o),to:Math.round(h)}),e.scrollTo(h,{duration:a,easing:l,userData:{initiator:"snap"}}))},v=()=>{if((0,r.isScrollResetting)(u)){h=null,m();return}if(!u.hasAttribute(r.SCROLL_RESIZING_ATTRIBUTE)&&(void 0===c||"smooth"===e.isScrolling)){if("native"===e.isScrolling){h="native",m();return}if("smooth"===e.isScrolling){h="smooth",m();return}"native"===h&&(h=null,m(),d=window.setTimeout(g,o))}},b=()=>{void 0===c||"smooth"===e.isScrolling||(0,r.isScrollResetting)(u)||u.hasAttribute(r.SCROLL_RESIZING_ATTRIBUTE)||(m(),f=performance.now(),d=window.setTimeout(()=>g(!0),c+o))},x=()=>{void 0!==c&&d&&!p&&(m(),g(!0))},w=()=>{p=!0,m()},y=()=>{if(p=!1,void 0!==c){if(performance.now()-f>=c+o){m(),g(!0);return}b();return}!1===e.isScrolling&&(m(),d=window.setTimeout(g,o))};return e.on("scroll",v),u.addEventListener("scroll",b,{passive:!0}),u.addEventListener("scrollend",x,{passive:!0}),u.addEventListener("touchstart",w,{passive:!0}),u.addEventListener("touchend",y,{passive:!0}),u.addEventListener("touchcancel",y,{passive:!0}),()=>{m(),e.off("scroll",v),u.removeEventListener("scroll",b),u.removeEventListener("scrollend",x),u.removeEventListener("touchstart",w),u.removeEventListener("touchend",y),u.removeEventListener("touchcancel",y)}})(e,s,{debounce:p,distanceThreshold:f,duration:m,easing:g,nativeRestDelay:v})},d=[e,s,a,p,f,m,g,v],h[2]=p,h[3]=f,h[4]=m,h[5]=g,h[6]=s,h[7]=a,h[8]=e,h[9]=v,h[10]=u,h[11]=d):(u=h[10],d=h[11]),(0,o.useEffect)(u,d)}],676842)}]);