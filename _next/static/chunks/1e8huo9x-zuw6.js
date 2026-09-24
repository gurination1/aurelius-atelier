(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,103930,e=>{"use strict";var t=e.i(843476),r=e.i(500932),a=e.i(156569),i=e.i(124821),o=e.i(89835),n=e.i(481293),l=e.i(607561),s=e.i(494473),c=e.i(989970),u=e.i(255667),d=e.i(271645),f=e.i(575509),p=e.i(212960),m=e.i(997053);let g=(0,m.default)(f.Div).attrs({as:"section"}).withConfig({componentId:"sc-8d5ca2ab-0"})(({$hasFade:e})=>m.css`
        position: relative;
        z-index: 1;
        overflow: clip;
        height: 100dvh;
        padding-top: 50dvh;
        background: ${(0,f.getBrand)("bc1")};

        &:after {
            position: absolute;
            inset: 0;
            z-index: 0;
            background: linear-gradient(to top, ${(0,f.getGlobal)("black")} 0%, transparent 50%);
            content: '';
            opacity: ${e?1:.4};
        }
    `),h=(0,m.default)(f.Div).withConfig({componentId:"sc-8d5ca2ab-1"})(({$isMissing:e})=>m.css`
        position: absolute;
        inset: 0;
        z-index: -1;

        /* NOTE • No image to show — see missingMedia in @tackl for why this is a
           drawn empty frame rather than a flat colour. */
        ${e&&f.missingMedia}

        picture {
            display: block;
            width: 100%;
            height: 100%;

            img {
                display: block;
                object-fit: cover;
                object-position: top;
                width: 100%;
                height: 100%;

                ${f.bp.l` object-position: center `}
            }
        }
    `),x=(0,m.default)(f.Div).attrs({as:"div"}).withConfig({componentId:"sc-8d5ca2ab-2"})(()=>m.css`
        position: relative;
        z-index: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50dvh;
    `),b=(0,m.default)(f.Div).withConfig({componentId:"sc-8d5ca2ab-3"})(()=>m.css`
        margin-bottom: ${(0,f.getGap)("s")};

        h2 {
            ${p.headlineL}

            color: ${(0,f.getBrand)("bc5")};
            text-align: center;
        }
    `),v=(0,m.default)(f.Div).attrs({as:"p"}).withConfig({componentId:"sc-8d5ca2ab-4"})(()=>m.css`
        ${p.bodyL}

        color: ${(0,f.getBrand)("bc5",80)};
        text-align: center;
        text-wrap: balance;

        margin-bottom: ${(0,f.getGap)("l")};
    `),y=e=>{let f,p,m,y,_,w,E,T,S,I,R,A,k=(0,r.c)(32),{heading:L,headingEditAttr:j,description:C,backgroundImage:P,buttonLabel:$,buttonHref:D,hasFade:F}=e,M=(0,d.useRef)(null),O=(0,d.useRef)(null),G=(0,d.useRef)(null),N=P?.desktop;k[0]!==N?(f=(0,n.resolveImageWithAlt)(N),k[0]=N,k[1]=f):f=k[1];let U=f,B=P?.mobile;k[2]!==B?(p=(0,n.resolveImageWithAlt)(B),k[2]=B,k[3]=p):p=k[3];let H=p,z=!!(U&&H),W=(0,u.useLenis)();k[4]!==W?.rootElement?(m=e=>{let{isDesktop:t}=e,r=M.current,a=W?.rootElement,i=O.current,o=G.current;if(!r||!a||!i||!o)return;let n=t?50:25;c.default.set(i,{yPercent:-n}),c.default.to(i,{yPercent:n,ease:"none",scrollTrigger:{trigger:r,scroller:a,start:"top 100%",end:"bottom 0%",scrub:!0}}),c.default.to(i,{autoAlpha:1,ease:"none",scrollTrigger:{trigger:r,scroller:a,start:"bottom 100%",end:"bottom 0%",scrub:!0}}),c.default.to(o,{yPercent:-50,ease:"none",scrollTrigger:{trigger:r,scroller:a,start:"bottom 100%",end:"bottom 0%",scrub:!0}})},k[4]=W?.rootElement,k[5]=m):m=k[5],k[6]!==W?(y={scope:M,dependencies:[W]},k[6]=W,k[7]=y):y=k[7],(0,l.useAnimation)(m,y);let X=!z;k[8]!==U||k[9]!==H?(_=U&&H?(0,t.jsx)(o.default,{desktop:U,mobile:H,fill:!0,sizes:"100vw"}):null,k[8]=U,k[9]=H,k[10]=_):_=k[10],k[11]!==X||k[12]!==_?(w=(0,t.jsx)(h,{ref:O,$isMissing:X,children:_}),k[11]=X,k[12]=_,k[13]=w):w=k[13];let V=L||"Missing";return k[14]!==V?(E=(0,t.jsx)("h2",{children:V}),k[14]=V,k[15]=E):E=k[15],k[16]!==j||k[17]!==E?(T=(0,t.jsx)(s.default,{children:(0,t.jsx)(b,{children:(0,t.jsx)(a.default,{editAttr:j,children:E})})}),k[16]=j,k[17]=E,k[18]=T):T=k[18],k[19]!==C?(S=(0,t.jsx)(s.default,{children:(0,t.jsx)(v,{$l:"5/9",$huge:"5/9",children:C})}),k[19]=C,k[20]=S):S=k[20],k[21]!==D||k[22]!==$?(I=$&&D&&(0,t.jsx)(i.default,{label:$,aria:$,to:D}),k[21]=D,k[22]=$,k[23]=I):I=k[23],k[24]!==T||k[25]!==S||k[26]!==I?(R=(0,t.jsxs)(x,{ref:G,children:[T,S,I]}),k[24]=T,k[25]=S,k[26]=I,k[27]=R):R=k[27],k[28]!==F||k[29]!==R||k[30]!==w?(A=(0,t.jsxs)(g,{ref:M,$hasFade:F,children:[w,R]}),k[28]=F,k[29]=R,k[30]=w,k[31]=A):A=k[31],A};y.displayName="CtaBand",e.s(["default",0,y],103930)},576978,e=>{"use strict";var t=e.i(843476),r=e.i(500932),a=e.i(124821),i=e.i(271645),o=e.i(174080);let n={parallaxStrength:.016,parallaxFocus:.45,lightRadius:1.05,lightIntensity:1.9,lightFalloff:2,ambient:.16,depthInfluence:.55,floodLight:1,easing:.065,startPos:[.5,.5],spotEaseIn:.045,spotEaseOut:.025,scrollFloodDistance:.5,scrollParallaxFrom:0,scrollParallaxTo:1,scrollDarkStart:.25,scrollLightBy:.5},l=`
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`,s=`
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
}`,c=["u_image","u_depth","u_res","u_imgAspect","u_mouse","u_parallaxStrength","u_parallaxFocus","u_lightRadius","u_lightIntensity","u_lightFalloff","u_ambient","u_depthInfluence","u_floodLight","u_spot"],u=e=>new Promise((t,r)=>{let a=new Image;a.crossOrigin="anonymous",a.onload=()=>t(a),a.onerror=()=>r(Error(`Failed to load texture: ${e}`)),a.src=e}),d=(e,t,r)=>{let a=e.createShader(t);if(!a)throw Error("Unable to create shader");if(e.shaderSource(a,r),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(a);throw e.deleteShader(a),Error(t??"Shader compile failed")}return a},f=(e,t,r)=>{let a=e.createTexture();return e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),a},p=async({canvas:e,imageSrc:t,imageElement:r,depthSrc:a,config:i,mode:o="pointer",signal:p,onFirstPaint:m,onContextLost:g})=>{let h={...n,...i},x="scroll"===o,b=e.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,stencil:!1});if(!b)return null;let[v,y]=await Promise.all([r?r.decode().then(()=>r):u(t),u(a)]);if(p?.aborted)return null;let _=b.createProgram();if(!_)return null;let w=d(b,b.VERTEX_SHADER,l),E=d(b,b.FRAGMENT_SHADER,s);if(b.attachShader(_,w),b.attachShader(_,E),b.linkProgram(_),!b.getProgramParameter(_,b.LINK_STATUS))throw Error(b.getProgramInfoLog(_)??"Program link failed");b.useProgram(_);let T=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,T),b.bufferData(b.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),b.STATIC_DRAW);let S=b.getAttribLocation(_,"a_pos");b.enableVertexAttribArray(S),b.vertexAttribPointer(S,2,b.FLOAT,!1,0,0);let I=Object.fromEntries(c.map(e=>[e,b.getUniformLocation(_,e)])),R=f(b,0,v),A=f(b,1,y);b.uniform1i(I.u_image,0),b.uniform1i(I.u_depth,1),b.uniform1f(I.u_imgAspect,v.naturalWidth/v.naturalHeight);let k=()=>{b.uniform1f(I.u_parallaxStrength,h.parallaxStrength),b.uniform1f(I.u_parallaxFocus,h.parallaxFocus),b.uniform1f(I.u_lightRadius,h.lightRadius),b.uniform1f(I.u_lightIntensity,h.lightIntensity),b.uniform1f(I.u_lightFalloff,h.lightFalloff),b.uniform1f(I.u_ambient,h.ambient),b.uniform1f(I.u_depthInfluence,h.depthInfluence),b.uniform1f(I.u_floodLight,h.floodLight)};k();let L={x:h.startPos[0],y:h.startPos[1]},j={x:h.startPos[0],y:h.startPos[1]},C=0,P=0,$=!1,D=null,F=0,M=null,O=null,G=0,N=0,U=!1,B=!1,H=!0,z=!1,W=!1,X=()=>{W||(W=!0,m?.())},V=()=>{let t=Math.min(window.devicePixelRatio||1,2),r=Math.round(e.clientWidth*t),a=Math.round(e.clientHeight*t);r&&a&&(e.width!==r||e.height!==a)&&(e.width=r,e.height=a,b.viewport(0,0,r,a),b.uniform2f(I.u_res,r,a),z=!0,H=!0)},Y=()=>{if(!z)return;(()=>{if(!D)return;let t=e.clientWidth,r=e.clientHeight;if(!t||!r)return;let a=e.getBoundingClientRect(),i=a.left+a.width/2-t/2,o=a.top+a.height/2-r/2;j.x=(D.x-i)/t,j.y=1-(D.y-o)/r})(),$&&($=!1,L.x=j.x,L.y=j.y,H=!0);let t=j.x-L.x,r=j.y-L.y,a=P-C;(!(5e-4>Math.abs(t)&&5e-4>Math.abs(r)&&5e-4>Math.abs(a))||H)&&(L.x+=t*h.easing,L.y+=r*h.easing,C+=a*(a>0?h.spotEaseIn:h.spotEaseOut),b.uniform2f(I.u_mouse,L.x,L.y),b.uniform1f(I.u_spot,C),b.drawArrays(b.TRIANGLES,0,3),H=!1,X())},q=()=>{if(!z)return;let{scrollParallaxFrom:e,scrollParallaxTo:t,scrollDarkStart:r,scrollLightBy:a}=h,i=a>0?Math.min(G/a,1):1;b.uniform2f(I.u_mouse,.5,e+(t-e)*G),b.uniform1f(I.u_spot,0),b.uniform1f(I.u_floodLight,r+(h.floodLight-r)*i),b.drawArrays(b.TRIANGLES,0,3),H=!1,X()},K=()=>x?q():Y(),J=()=>{N=requestAnimationFrame(J),Y()},Q=()=>{N&&(cancelAnimationFrame(N),N=0)},Z=(e,t)=>{C<.05&&($=!0),D={x:e,y:t},P=1,F=0},ee=e=>Z(e.clientX,e.clientY),et=e=>{let t=e.touches[0];t&&Z(t.clientX,t.clientY)},er=e=>{let t,r=(t=e.target)instanceof HTMLElement?t.scrollTop:window.scrollY||document.scrollingElement?.scrollTop||0,a=h.scrollFloodDistance*window.innerHeight;null!==M&&e.target===O&&(F=Math.min(F+Math.abs(r-M),a)),M=r,O=e.target,F>=a&&(P=0)},ea=e=>{e.preventDefault(),U=!1,Q(),g?.()},ei=new ResizeObserver(()=>{V(),N||K()});return ei.observe(e),e.addEventListener("webglcontextlost",ea),x||(window.addEventListener("pointermove",ee,{passive:!0}),window.addEventListener("touchmove",et,{passive:!0}),window.addEventListener("scroll",er,{capture:!0,passive:!0})),V(),K(),{setActive:e=>{if(!B&&e!==U){if(U=e,e){V(),H=!0,N||B||x||(N=requestAnimationFrame(J));return}Q(),C=0,P=0,F=0,M=null,O=null,H=!0}},setScrollProgress:e=>{!B&&x&&(G=Math.min(Math.max(e,0),1),q())},setConfig:e=>{B||(Object.assign(h,e),k(),H=!0,K())},destroy:()=>{B||(B=!0,U=!1,Q(),ei.disconnect(),e.removeEventListener("webglcontextlost",ea),window.removeEventListener("pointermove",ee),window.removeEventListener("touchmove",et),window.removeEventListener("scroll",er,{capture:!0}),b.deleteTexture(R),b.deleteTexture(A),b.deleteBuffer(T),b.deleteShader(w),b.deleteShader(E),b.deleteProgram(_),b.getExtension("WEBGL_lose_context")?.loseContext())}}};var m=e.i(575509),g=e.i(997053);let h=g.default.div.withConfig({componentId:"sc-cda082ca-0"})(()=>g.css`
		position: absolute;
		inset: 0;

		pointer-events: none;
		user-select: none;

		// NOTE • Held transparent until the textures land, so the static image
		// underneath covers the gap instead of a black rectangle.
		opacity: 0;
		transition: opacity ${(0,m.getTime)("m")} ${(0,m.getEase)("ease")};

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
	`),x=g.default.div.withConfig({componentId:"sc-cda082ca-1"})(()=>g.css`
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

		${m.bp.l`
			inset: 1rem 1rem auto auto;
			width: 17rem;
			max-height: calc(100dvh - 2rem);
			border: 1px solid rgb(255 255 255 / 0.18);
			border-radius: 6px;
		`}
	`),b=g.default.div.withConfig({componentId:"sc-cda082ca-2"})(()=>g.css`
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
	`),v=g.default.div.withConfig({componentId:"sc-cda082ca-3"})(()=>g.css`
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
	`),y=[{key:"parallaxStrength",label:"Parallax strength",min:0,max:.15,step:.001},{key:"parallaxFocus",label:"Parallax focus",min:0,max:1,step:.01},{key:"depthInfluence",label:"Depth influence",min:0,max:1,step:.01}],_=[{key:"scrollParallaxFrom",label:"Sweep from (y)",min:0,max:1,step:.01},{key:"scrollParallaxTo",label:"Sweep to (y)",min:0,max:1,step:.01},{key:"scrollDarkStart",label:"Start brightness",min:0,max:1,step:.01},{key:"scrollLightBy",label:"Lit by (progress)",min:.05,max:1,step:.01},{key:"floodLight",label:"Final brightness",min:0,max:2,step:.01}],w=[{key:"lightRadius",label:"Light radius",min:.2,max:3,step:.01},{key:"lightIntensity",label:"Light intensity",min:0,max:4,step:.05},{key:"lightFalloff",label:"Light falloff",min:.5,max:6,step:.1},{key:"ambient",label:"Ambient",min:0,max:1,step:.01},{key:"floodLight",label:"Flood brightness",min:0,max:2,step:.01},{key:"easing",label:"Cursor easing",min:.01,max:.3,step:.005},{key:"spotEaseIn",label:"Spot ease in",min:.005,max:.2,step:.005},{key:"spotEaseOut",label:"Flood ease out",min:.005,max:.2,step:.005},{key:"scrollFloodDistance",label:"Flood after (screens)",min:0,max:2,step:.05}],E=e=>{let a,l,s,c,u,d,f,p,m,g,h,E,S,I,R,A,k,L=(0,r.c)(38),{mode:j,base:C,onChange:P}=e,$="scroll"===j?_:w;L[0]!==$?(a=[...y,...$],L[0]=$,L[1]=a):a=L[1];let D=a;L[2]!==C?(l={...n,...C},L[2]=C,L[3]=l):l=L[3];let F=l,[M,O]=(0,i.useState)(F),[G,N]=(0,i.useState)(!0),[U,B]=(0,i.useState)(!1),[H,z]=(0,i.useState)(!1);L[4]===Symbol.for("react.memo_cache_sentinel")?(s=(e,t)=>{O(r=>({...r,[e]:t}))},L[4]=s):s=L[4];let W=s;L[5]!==F?(c=()=>O(F),L[5]=F,L[6]=c):c=L[6];let X=c;L[7]!==D||L[8]!==M?(u=()=>{let e=D.reduce((e,t)=>(e[t.key]=M[t.key],e),{});navigator.clipboard?.writeText(JSON.stringify(e,null,2)).then(()=>z(!0),()=>z(!1))},L[7]=D,L[8]=M,L[9]=u):u=L[9];let V=u;if(L[10]===Symbol.for("react.memo_cache_sentinel")?(d=()=>B(!0),f=[],L[10]=d,L[11]=f):(d=L[10],f=L[11]),(0,i.useEffect)(d,f),L[12]!==P||L[13]!==M?(m=()=>P(M),p=[M,P],L[12]=P,L[13]=M,L[14]=p,L[15]=m):(p=L[14],m=L[15]),(0,i.useEffect)(m,p),L[16]!==H?(g=()=>{if(!H)return;let e=window.setTimeout(()=>z(!1),1200);return()=>window.clearTimeout(e)},h=[H],L[16]=H,L[17]=g,L[18]=h):(g=L[17],h=L[18]),(0,i.useEffect)(g,h),!U)return null;L[19]!==j?(E=(0,t.jsxs)("strong",{children:["depth · ",j]}),L[19]=j,L[20]=E):E=L[20],L[21]===Symbol.for("react.memo_cache_sentinel")?(S=()=>N(T),L[21]=S):S=L[21];let Y=G?"hide":"show";return L[22]!==Y?(I=(0,t.jsx)("button",{type:"button",onClick:S,children:Y}),L[22]=Y,L[23]=I):I=L[23],L[24]!==E||L[25]!==I?(R=(0,t.jsxs)(b,{children:[E,I]}),L[24]=E,L[25]=I,L[26]=R):R=L[26],L[27]!==H||L[28]!==D||L[29]!==V||L[30]!==X||L[31]!==G||L[32]!==M?(A=G?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v,{children:D.map(e=>(0,t.jsxs)("label",{children:[(0,t.jsxs)("span",{children:[e.label,(0,t.jsx)("em",{children:M[e.key].toFixed(3)})]}),(0,t.jsx)("input",{type:"range",min:e.min,max:e.max,step:e.step,value:M[e.key],onChange:t=>W(e.key,Number(t.target.value))})]},e.key))}),(0,t.jsxs)(b,{children:[(0,t.jsx)("button",{type:"button",onClick:X,children:"reset"}),(0,t.jsx)("button",{type:"button",onClick:V,children:H?"copied":"copy config"})]})]}):null,L[27]=H,L[28]=D,L[29]=V,L[30]=X,L[31]=G,L[32]=M,L[33]=A):A=L[33],L[34]!==G||L[35]!==R||L[36]!==A?(k=(0,o.createPortal)((0,t.jsxs)(x,{"data-open":G,children:[R,A]}),document.body),L[34]=G,L[35]=R,L[36]=A,L[37]=k):k=L[37],k};function T(e){return!e}E.displayName="DepthParallaxControls";let S=(0,i.forwardRef)(({imageSrc:e,imageElement:r,depthSrc:a,isActive:o=!0,mode:n="pointer",config:l,className:s},c)=>{let u=(0,i.useRef)(null),d=(0,i.useRef)(null),f=(0,i.useRef)(l);f.current=l;let m=(0,i.useRef)(0),[g,x]=(0,i.useState)(!1),[b,v]=(0,i.useState)(!1),[y,_]=(0,i.useState)(!1),w=(0,i.useCallback)(e=>{d.current?.setConfig(e)},[]);return(0,i.useImperativeHandle)(c,()=>({setScrollProgress:e=>{m.current=e,d.current?.setScrollProgress(e)}}),[]),(0,i.useEffect)(()=>{_(new URLSearchParams(window.location.search).has("depth-debug"))},[]),(0,i.useEffect)(()=>{let t=u.current;if(!t)return;let i=document.createElement("canvas");t.appendChild(i);let o=new AbortController;return p({canvas:i,imageSrc:e,imageElement:r,depthSrc:a,mode:n,config:f.current,signal:o.signal,onFirstPaint:()=>v(!0),onContextLost:()=>{x(!1),v(!1)}}).then(e=>{if(e){if(o.signal.aborted)return void e.destroy();d.current=e,e.setScrollProgress(m.current),x(!0)}}).catch(()=>x(!1)),()=>{o.abort(),d.current?.destroy(),d.current=null,i.remove(),x(!1),v(!1)}},[e,r,a,n]),(0,i.useEffect)(()=>{d.current?.setActive(o&&g)},[o,g]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{ref:u,className:s,"data-ready":b,"aria-hidden":"true"}),y?(0,t.jsx)(E,{mode:n,base:l,onChange:w}):null]})});S.displayName="DepthParallax";var I=e.i(481293),R=e.i(89835),A=e.i(101384),k=e.i(748656),L=e.i(229352),j=e.i(607561),C=e.i(255981),P=e.i(494473),$=e.i(989970),D=e.i(883495),F=e.i(255667),M=e.i(212960);let O=(0,g.default)(m.Div).attrs({as:"footer"}).withConfig({componentId:"sc-a2c8839e-0"})(()=>g.css`
		--offset: calc(${(0,m.getGap)("huge")} + ${(0,m.getGap)("l")});

		position: relative;
		z-index: 0;
		overflow: clip;

		display: flex;
		align-items: flex-start;
		justify-content: flex-start;

		width: 100%;
		min-height: 100dvh;
		padding-top: var(--offset);
		background: ${(0,m.getGlobal)("black")};

		${m.bp.l` --offset: calc(${(0,m.getGap)("col")} + ${(0,m.getGap)("l")})`}


		&:after {
			content: '';
            position: absolute;
            inset: 0;
            z-index: 0;
            background: linear-gradient(to bottom, ${(0,m.getGlobal)("black")} 0%, transparent 50%);
        }

		waffl-grid {
			position: relative;
			z-index: 1;
		}
	`),G=(0,g.default)(m.Div).attrs({as:"aside"}).withConfig({componentId:"sc-a2c8839e-1"})(()=>g.css`
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

				${m.bp.l`
					object-position: center center;
				`}
			}
		}
	`),N=(0,g.default)(m.Div).withConfig({componentId:"sc-a2c8839e-2"})(()=>g.css`
		position: relative;
		z-index: 2;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: ${(0,m.getGap)("m")};
		width: 100%;

		${m.bp.l` gap: ${(0,m.getGap)("l")} `}

		a { margin-top: ${(0,m.getGap)("xs")} }
	`),U=(0,g.default)(m.Div).withConfig({componentId:"sc-a2c8839e-3"})(()=>g.css`
		h2 {
			${M.headlineL}

			/* One word per line. SplitText wraps each word in a div; laid out as a
			   centred column they stack regardless of how wide the line would be. */
			display: flex;
			flex-direction: column;
			align-items: center;

			margin: 0;
			text-align: center;
			color: ${(0,m.getBrand)("bc5")};
		}
	`),B=(0,g.default)(m.Div).withConfig({componentId:"sc-a2c8839e-4"})(()=>g.css`
		display: flex;
	`),H=(0,g.default)(m.Div).attrs({as:"p"}).withConfig({componentId:"sc-a2c8839e-5"})(()=>g.css`
		${M.captionL}	

		color: ${(0,m.getBrand)("bc5",60)};
		text-align: center;
	`),z=(0,g.default)(m.Div).withConfig({componentId:"sc-a2c8839e-6"})(()=>g.css`
		--offset: ${(0,m.getGap)("xxl")};
		
		position: absolute;
		inset: auto 0 var(--offset) 0;
		z-index: 5;

		display: grid;
		place-items: center;
		width: 100%;
		
	`),W=[...Array(12)].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.02*t}s; }`).join("\n"),X=g.default.button.withConfig({componentId:"sc-a2c8839e-7"})(()=>g.css`
		${M.captionL}

		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: ${(0,m.getGap)("s")};
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
				text-shadow: ${(0,m.getBrand)("bc5",60)} 0px -4em 0px;
				transition: transform 0.5s ${(0,m.getEase)("bezzy2")};
			
				${W}		
			}
		}
	`),V=e=>{let a,i,o,n=(0,r.c)(5),{lenis:l}=e;n[0]!==l?(a=()=>{l?.scrollTo(0,{duration:1.2})},n[0]=l,n[1]=a):a=n[1];let s=a;return n[2]===Symbol.for("react.memo_cache_sentinel")?(i=(0,t.jsx)("span",{children:"Back to Top".split("").map(Y)}),n[2]=i):i=n[2],n[3]!==s?(o=(0,t.jsx)(X,{type:"button","aria-label":"Back to Top",onClick:s,children:i}),n[3]=s,n[4]=o):o=n[4],o};function Y(e,r){return(0,t.jsx)("span",{children:" "===e?" ":e},`${e}_${r.toString()}`)}V.displayName="BackToTop";var q=e.i(221781),K=e.i(486861),J=e.i(189897),Q=e.i(797489),Z=e.i(274879),ee=e.i(875324);let et="top bottom",er="bottom bottom",ea="top 75%",ei=e=>{let a,o,n,l,s,c=(0,r.c)(19),{heading:u,editAttr:d,triggerRef:f}=e,{isReducedMotion:p}=(0,i.use)(A.PerformanceContext),m=(0,i.useRef)(null),g=(0,F.useLenis)();c[0]!==u?(a=(0,J.cleanSanityString)(u)??"",c[0]=u,c[1]=a):a=c[1];let h=a,x=(0,Z.useSplitTextRecovery)(m,h);c[2]!==h?(o=(0,K.escapeHtml)(h),c[2]=h,c[3]=o):o=c[3];let b=(0,Q.useInnerHtml)(o);return(c[4]!==h||c[5]!==p||c[6]!==g?.rootElement||c[7]!==f?(n=()=>{let e=m.current,t=g?.rootElement;if(!e||!h||!t)return;let r=ee.SplitText.create(e,{type:"words"}),{words:a}=r;if(!a.length)return()=>r.revert();if(p)return $.default.set(a,{autoAlpha:1,scale:1,filter:"blur(0px)",display:"inline-block",verticalAlign:"top",willChange:"auto"}),()=>r.revert();(e=>{if(!e.length)return;let t=1/0,r=1/0,a=-1/0,i=-1/0;for(let o of e)t=Math.min(t,o.offsetLeft),r=Math.min(r,o.offsetTop),a=Math.max(a,o.offsetLeft+o.offsetWidth),i=Math.max(i,o.offsetTop+o.offsetHeight);let o=(t+a)/2,n=(r+i)/2;for(let t of e)$.default.set(t,{transformOrigin:`${o-t.offsetLeft}px ${n-t.offsetTop}px`,force3D:!0})})(a),$.default.set(a,{autoAlpha:0,scale:q.TITLE_SCALE_START,filter:`blur(${q.TITLE_BLUR_START}px)`,display:"inline-block",verticalAlign:"top",willChange:"opacity, transform, filter"});let i={progress:0},o=$.default.to(i,{progress:1,duration:.9,ease:"power2.out",paused:!0,onUpdate:()=>(e=>{for(let[t,r]of a.entries()){let{scale:i,opacity:o,blur:n}=(0,q.getIntroGrowInWordValues)(e,t,a.length);$.default.set(r,{autoAlpha:o,scale:i,filter:`blur(${n}px)`})}})(i.progress),onComplete:()=>$.default.set(a,{willChange:"auto"})}),n=D.default.create({trigger:f?.current??e,scroller:t,start:ea,once:!0,onEnter:()=>o.play()});return n.progress>0&&o.play(),()=>{n.kill(),o.kill(),r.revert()}},c[4]=h,c[5]=p,c[6]=g?.rootElement,c[7]=f,c[8]=n):n=c[8],c[9]!==h||c[10]!==p||c[11]!==g||c[12]!==x||c[13]!==f?(l={scope:m,dependencies:[h,p,g,x,f]},c[9]=h,c[10]=p,c[11]=g,c[12]=x,c[13]=f,c[14]=l):l=c[14],(0,j.useAnimation)(n,l),h)?(c[15]!==h||c[16]!==d||c[17]!==b?(s=(0,t.jsx)(U,{children:(0,t.jsx)("h2",{ref:m,"data-sanity":d,dangerouslySetInnerHTML:b},h)}),c[15]=h,c[16]=d,c[17]=b,c[18]=s):s=c[18],s):null};ei.displayName="CtaHeading";var eo=e.i(371136),en=e.i(676842);let el={parallaxStrength:.05},es=e=>{let o,n,l,s,c,u,d,f,p,m,g,h,x,b,v,y,_,w,E,T,M,U,W,X,Y=(0,r.c)(72),{heading:q,headingEditAttr:K,subheading:J,mobile:Q,desktop:Z,isContact:ee}=e,{isReducedMotion:es}=(0,i.use)(A.PerformanceContext),eu=(0,i.useRef)(null),ed=(0,i.useRef)(null),ef=(0,i.useRef)(null),ep=(0,i.useRef)(null),em=(0,i.useRef)(null),eg=(0,i.useRef)(null),eh=(0,i.useRef)(0),ex=(0,F.useLenis)();Y[0]!==ex?(o=e=>(0,L.scrollToForm)(ex,e),Y[0]=ex,Y[1]=o):o=Y[1];let eb=o,ev=(0,C.useIsDesktopViewport)(),[ey,e_]=(0,i.useState)(!1),[ew,eE]=(0,i.useState)(!1),[eT,eS]=(0,i.useState)(null);Y[2]===Symbol.for("react.memo_cache_sentinel")?(n=e=>{em.current=e,e?.setScrollProgress(eh.current)},Y[2]=n):n=Y[2];let eI=n,eR=!!(Z?.image&&Q?.image&&q&&J),eA=ev?Z:Q,ek=eA?.depthMap,eL=!ev;Y[3]!==ek||Y[4]!==eL?(l=((e,t=!1)=>{var r;let a;return r=t?720:1280,(a=(0,I.resolveSanityImage)(e))?(0,I.urlFor)(a).width(r).fit("max").quality(95).auto("format").url():null})(ek,eL),Y[3]=ek,Y[4]=eL,Y[5]=l):l=Y[5];let ej=l,eC=!!ej&&!es,eP=ev?"pointer":"scroll";Y[6]!==eR||Y[7]!==ew||Y[8]!==ex?.rootElement?(s=()=>{let e=eu.current;if(!e||!eR||ew)return;let t=ex?.rootElement??null,r=new IntersectionObserver(e=>{e.some(ec)&&(eE(!0),r.disconnect())},{root:t,rootMargin:`${t?.clientHeight??window.innerHeight}px 0px`});return r.observe(e),()=>r.disconnect()},Y[6]=eR,Y[7]=ew,Y[8]=ex?.rootElement,Y[9]=s):s=Y[9],Y[10]!==eR||Y[11]!==ew||Y[12]!==ex?(c=[eR,ew,ex],Y[10]=eR,Y[11]=ew,Y[12]=ex,Y[13]=c):c=Y[13],(0,i.useEffect)(s,c),Y[14]!==Z?.image||Y[15]!==eR||Y[16]!==Q?.image?(u=()=>{if(!eR||!Z?.image||!Q?.image)return;let e=eg.current?.querySelector("img");if(!e)return;let t=()=>{!e.complete||!e.naturalWidth||!e.currentSrc||(0,k.isDeferredImage)(e)||eS(t=>t?.element===e&&t.src===e.currentSrc?t:{element:e,src:e.currentSrc})};return t(),e.addEventListener("load",t),()=>e.removeEventListener("load",t)},Y[14]=Z?.image,Y[15]=eR,Y[16]=Q?.image,Y[17]=u):u=Y[17],Y[18]!==Z||Y[19]!==eR||Y[20]!==Q?(d=[Z,Q,eR],Y[18]=Z,Y[19]=eR,Y[20]=Q,Y[21]=d):d=Y[21],(0,i.useEffect)(u,d),Y[22]!==eR||Y[23]!==ex?.rootElement?(f=()=>{let e=eu.current;if(!e||!eR)return;let t=new IntersectionObserver(e=>{let t=e[0];t&&e_(t.isIntersecting)},{root:ex?.rootElement??null});return t.observe(e),()=>t.disconnect()},Y[22]=eR,Y[23]=ex?.rootElement,Y[24]=f):f=Y[24],Y[25]!==eR||Y[26]!==ex?(p=[ex,eR],Y[25]=eR,Y[26]=ex,Y[27]=p):p=Y[27],(0,i.useEffect)(f,p),Y[28]===Symbol.for("react.memo_cache_sentinel")?(m=()=>eu.current?[eu.current]:[],Y[28]=m):m=Y[28];let e$=m;return(Y[29]===Symbol.for("react.memo_cache_sentinel")?(g=[],h={distanceThreshold:"50%"},Y[29]=g,Y[30]=h):(g=Y[29],h=Y[30]),(0,eo.useLenisSnap)(ex,e$,g,h),Y[31]===Symbol.for("react.memo_cache_sentinel")?(x={distanceThreshold:"50%"},Y[31]=x):x=Y[31],(0,en.useNativeSnap)(ex,e$,!0,x),Y[32]!==es||Y[33]!==ex?.rootElement?(b=e=>{let{isDesktop:t}=e,r=eu.current,a=ed.current,i=ex?.rootElement;if(!r||!a||!i)return;let o=[];$.default.set(a,{autoAlpha:0}),$.default.to(a,{autoAlpha:1,ease:"none",scrollTrigger:{trigger:r,scroller:i,start:"top bottom",end:"center bottom",scrub:!0,markers:!1}}),t&&$.default.from(a,{scale:1.5,ease:"none",scrollTrigger:{trigger:r,scroller:i,start:et,end:er,scrub:!0}});let n=ep.current;if(n&&!es){$.default.set(n,{autoAlpha:0,y:16});let e=$.default.to(n,{autoAlpha:1,y:0,duration:.6,ease:"power2.out",delay:.7200000000000001,paused:!0}),t=D.default.create({trigger:r,scroller:i,start:ea,once:!0,onEnter:()=>e.play()});t.progress>0&&e.play(),o.push(()=>{t.kill(),e.kill()})}if(t||$.default.from(a,{scale:1.5,transformOrigin:"center bottom",ease:"none",scrollTrigger:{trigger:r,scroller:i,start:et,end:er,scrub:!0}}),!t){let e=D.default.create({trigger:r,scroller:i,start:et,end:er,onUpdate:e=>{eh.current=e.progress,em.current?.setScrollProgress(e.progress)},onRefresh:e=>{eh.current=e.progress,em.current?.setScrollProgress(e.progress)}});o.push(()=>e.kill())}return()=>{for(let e of o)e()}},Y[32]=es,Y[33]=ex?.rootElement,Y[34]=b):b=Y[34],Y[35]!==ee||Y[36]!==es||Y[37]!==ex?(v={scope:eu,dependencies:[ex,ee,es]},Y[35]=ee,Y[36]=es,Y[37]=ex,Y[38]=v):v=Y[38],(0,j.useAnimation)(b,v),Z?.image&&Q?.image&&q&&J)?(Y[39]!==Z.image||Y[40]!==ew||Y[41]!==Q.image?(y=(0,t.jsx)(R.default,{ref:eg,enabled:ew,desktop:Z.image,mobile:Q.image,fill:!0,sizes:"100vw",quality:85,crossOrigin:"anonymous"}),Y[39]=Z.image,Y[40]=ew,Y[41]=Q.image,Y[42]=y):y=Y[42],Y[43]!==eT||Y[44]!==ej||Y[45]!==eC||Y[46]!==ev||Y[47]!==ew||Y[48]!==ey||Y[49]!==eP?(_=eC&&ew&&eT&&ej?(0,t.jsx)(S,{ref:eI,mode:eP,config:ev?void 0:el,imageSrc:eT.src,imageElement:eT.element,depthSrc:ej,isActive:ey}):null,Y[43]=eT,Y[44]=ej,Y[45]=eC,Y[46]=ev,Y[47]=ew,Y[48]=ey,Y[49]=eP,Y[50]=_):_=Y[50],Y[51]!==y||Y[52]!==_?(w=(0,t.jsxs)(G,{ref:ed,"aria-hidden":"true",children:[y,_]}),Y[51]=y,Y[52]=_,Y[53]=w):w=Y[53],Y[54]!==J?(E=(0,t.jsx)(H,{children:J}),Y[54]=J,Y[55]=E):E=Y[55],Y[56]!==q||Y[57]!==K?(T=(0,t.jsx)(ei,{heading:q,editAttr:K,triggerRef:eu}),Y[56]=q,Y[57]=K,Y[58]=T):T=Y[58],Y[59]!==eb||Y[60]!==ee?(M=(0,t.jsx)(B,{ref:ep,children:ee?(0,t.jsx)(a.default,{to:L.FORM_ANCHOR,onClick:eb,label:"Start the conversation",aria:"Go to the enquiry form"}):(0,t.jsx)(a.default,{to:"/contact",label:"Start Your Project",aria:"Go to Contact"})}),Y[59]=eb,Y[60]=ee,Y[61]=M):M=Y[61],Y[62]!==E||Y[63]!==T||Y[64]!==M?(U=(0,t.jsx)(P.default,{children:(0,t.jsxs)(N,{$l:"2/12",$xl:"3/11",ref:ef,children:[E,T,M]})}),Y[62]=E,Y[63]=T,Y[64]=M,Y[65]=U):U=Y[65],Y[66]!==ex?(W=(0,t.jsx)(z,{children:(0,t.jsx)(V,{lenis:ex})}),Y[66]=ex,Y[67]=W):W=Y[67],Y[68]!==w||Y[69]!==U||Y[70]!==W?(X=(0,t.jsxs)(O,{ref:eu,"data-global-cta":!0,children:[w,U,W]}),Y[68]=w,Y[69]=U,Y[70]=W,Y[71]=X):X=Y[71],X):null};function ec(e){return e.isIntersecting}es.displayName="GlobalCta",e.s(["default",0,es],576978)},221781,e=>{"use strict";var t=e.i(989970);let r=t.default.parseEase("power2.in");t.default.parseEase("power2.out");let a=(e,t,r,a,i)=>r<=0?0:Math.max(0,Math.min(1,(e*((r-1)*a+i)-t*a)/i));e.s(["DESCRIPTION_LINE_GAP",0,.14,"DESCRIPTION_LINE_REVEAL",0,.9,"TITLE_BLUR_START",0,8,"TITLE_SCALE_START",0,0,"TITLE_WORD_GAP",0,.15,"TITLE_WORD_REVEAL",0,.8,"getGrowOutWordValues",0,(e,t,i)=>{let o=r(a(e,i-1-t,i,.083,.667));return{scale:1+ +o,opacity:1-o,blur:8*o}},"getIntroGrowInWordValues",0,(e,t,r)=>{let i=a(e,t,r,.15,.8);return{scale:0+ +i,opacity:i,blur:(1-i)*8}},"getStaggeredSegmentProgress",0,a])},375476,e=>{"use strict";var t=e.i(843476),r=e.i(500932),a=e.i(271645),i=e.i(575509),o=e.i(997053);let n=(0,o.default)(i.Div).attrs({as:"section"}).withConfig({componentId:"sc-6db9e853-0"})(({$isInView:e=!1})=>o.css`
        --gap: ${(0,i.getGap)("xxl")};
        --speed: 20s;
        --play-state: ${e?"running":"paused"};
        --offset: 30%;

        display: flex;
        overflow: hidden;
        user-select: none;
        gap: var(--gap);

        
        mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 var(--offset) 30%,
            #000 calc(100% - var(--offset)),
            transparent 100%
        );
        mask-size: 100% 100%;
        mask-repeat: no-repeat;

        ul {
            flex-shrink: 0;
            display: flex;
            justify-content: space-around;
            min-width: 100%;
            gap: var(--gap);
            animation: logoMarquee var(--speed) linear infinite var(--play-state);

            li {
                aspect-ratio: 2 / 1;
                width: auto;
                height: 4rem;

                ${i.bp.l`  height: 6rem; `}

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    object-position: center;
                }
            }
        }

        @keyframes logoMarquee {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(calc(-100% - var(--gap)));
            }
        }
    `),l=e=>{let i,o,l,s,c,u,d=(0,r.c)(12),{logos:f}=e,p=(0,a.useRef)(null),[m,g]=(0,a.useState)(!1);if(d[0]===Symbol.for("react.memo_cache_sentinel")?(i=()=>{let e=p.current;if(!e)return;let t=new IntersectionObserver(e=>{let[t]=e,r=t?.isIntersecting??!1;g(e=>e===r?e:r)},{threshold:0});return t.observe(e),()=>t.disconnect()},o=[],d[0]=i,d[1]=o):(i=d[0],o=d[1]),(0,a.useEffect)(i,o),!f?.length)return null;d[2]!==m||d[3]!==f?(l=e=>(0,t.jsx)("ul",{"aria-hidden":e,children:f.map(r=>(0,t.jsx)("li",{children:(0,t.jsx)("img",{src:r.src,alt:e?"":r.alt,width:120,height:60,decoding:"async",loading:m?"eager":"lazy"})},r.src))}),d[2]=m,d[3]=f,d[4]=l):l=d[4];let h=l;return d[5]!==h?(s=h(!1),c=h(!0),d[5]=h,d[6]=s,d[7]=c):(s=d[6],c=d[7]),d[8]!==m||d[9]!==s||d[10]!==c?(u=(0,t.jsxs)(n,{ref:p,$isInView:m,children:[s,c]}),d[8]=m,d[9]=s,d[10]=c,d[11]=u):u=d[11],u};l.displayName="LogoMarquee",e.s(["default",0,l],375476)},229352,e=>{"use strict";let t="#form",r={duration:1.2,offset:-200};e.s(["FORM_ANCHOR",0,t,"scrollToForm",0,(e,a)=>{e&&(a?.preventDefault(),e.scrollTo(t,r))}])}]);