(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,927977,e=>{"use strict";var t=e.i(843476),r=e.i(500932),n=e.i(156569),i=e.i(271645);let a=(0,i.createContext)(null),o=(e,t,n,o)=>{let l,s,u=(0,r.c)(7),c=(0,i.use)(a),[d,h]=(0,i.useState)(null);return u[0]!==n||u[1]!==o||u[2]!==e||u[3]!==c||u[4]!==t?(l=()=>{let r=e.current,i=t.current?.querySelector("img");if(!c||!r||!i)return;h(null);let a=!0,l=c.ensure({el:r,img:i,content:n?.current??null,depthMapUrl:o,onPaintChange:e=>{a&&h(e?c:null)}});return()=>{a=!1,l.release()}},s=[c,e,t,n,o],u[0]=n,u[1]=o,u[2]=e,u[3]=c,u[4]=t,u[5]=l,u[6]=s):(l=u[5],s=u[6]),(0,i.useEffect)(l,s),null!==c&&d===c};var l=e.i(89835),s=e.i(481293),u=e.i(607561),c=e.i(494473),d=e.i(989970),h=e.i(255667),f=e.i(255981);let p="data-plane-painted",m=`${f.DESKTOP_MEDIA_QUERY} and (pointer: fine)`;var g=e.i(575509),v=e.i(212960),x=e.i(997053);let b=(0,x.default)(g.Div).attrs({as:"section"}).withConfig({componentId:"sc-dcca4473-0"})(()=>x.css`
        position: relative;
        z-index: 1;
        overflow: clip;
        height: 100dvh;
        padding-top: 50dvh;
        background: ${(0,g.getBrand)("bc1")};

        &:after {
            position: absolute;
            inset: 0;
            z-index: 0;
            background: linear-gradient(to top, ${(0,g.getGlobal)("black")} 0%, transparent 50%);
        }

        /* NOTE • Under the WebGL listing the background is painted on the shared
           canvas beneath this section once its texture is up. The DOM copy stays in
           the layout — its rect is what the plane reads — and hands over without
           a second fade during the menu reveal. The ground goes too, or it hides the
           canvas. */
        &[${p}='true'] {
            background: transparent;

            picture {
                opacity: 0;
            }
        }
    `),y=(0,x.default)(g.Div).withConfig({componentId:"sc-dcca4473-1"})(({$isMissing:e})=>x.css`
        position: absolute;
        inset: 0;
        z-index: -1;

        /* NOTE • No image to show — see missingMedia in @tackl for why this is a
           drawn empty frame rather than a flat colour. */
        ${e&&g.missingMedia}

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

                ${g.bp.l` object-position: center `}
            }
        }
    `),E=(0,x.default)(g.Div).attrs({as:"div"}).withConfig({componentId:"sc-dcca4473-2"})(()=>x.css`
        position: relative;
        z-index: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50dvh;
    `),T=(0,x.default)(g.Div).withConfig({componentId:"sc-dcca4473-3"})(()=>x.css`
        margin-bottom: ${(0,g.getGap)("s")};

        /* NOTE • h1 at the top of the listing, a plain div on the copies that
           close the infinite-scroll seam — the two have to look identical, so
           both are styled by attribute rather than by tag. */
        [data-heading] {
            ${v.displayL}

            color: ${(0,g.getBrand)("bc5")};
            text-align: center;
        }
    `),w=(0,x.default)(g.Div).attrs({as:"p"}).withConfig({componentId:"sc-dcca4473-4"})(()=>x.css`
        ${v.bodyL}

        color: ${(0,g.getBrand)("bc5",80)};
        text-align: center;
        text-wrap: balance;

        margin-bottom: 0;
    `),S="Missing",R=(0,i.forwardRef)((e,a)=>{let f,p,m,g,v,x,R,A,L,_,M,I=(0,r.c)(34),{heading:D,description:P,backgroundImage:C,isSeamRepeat:U,imageLoading:O,isLoopCopy:k,crossOrigin:G}=e,N=void 0!==U&&U,j=void 0===O?"lazy":O,$=(0,i.useRef)(null),B=(0,i.useRef)(null),F=(0,i.useRef)(null);I[0]!==a?(f=e=>{($.current=e,"function"==typeof a)?a(e):a&&(a.current=e)},I[0]=a,I[1]=f):f=I[1];let z=f,W=N?"div":"h1",H=C?.desktop;I[2]!==H?(p=(0,s.resolveImageWithAlt)(H),I[2]=H,I[3]=p):p=I[3];let X=p,V=C?.mobile;I[4]!==V?(m=(0,s.resolveImageWithAlt)(V),I[4]=V,I[5]=m):m=I[5];let Y=m,q=!!(X&&Y),Z=(0,h.useLenis)(),K=o($,B,F);I[6]!==K||I[7]!==Z?.rootElement?(g=e=>{let{isDesktop:t}=e;if(K)return;let r=$.current,n=Z?.rootElement,i=B.current,a=F.current;if(!r||!n||!i||!a)return;let o=t?50:25;d.default.set(i,{yPercent:-o}),d.default.to(i,{yPercent:o,ease:"none",scrollTrigger:{trigger:r,scroller:n,start:"top 100%",end:"bottom 0%",scrub:!0}}),d.default.to(i,{autoAlpha:0,ease:"none",scrollTrigger:{trigger:r,scroller:n,start:"center 50%",end:"bottom 0%",scrub:!0}})},I[6]=K,I[7]=Z?.rootElement,I[8]=g):g=I[8],I[9]!==K||I[10]!==Z?(v={scope:$,dependencies:[Z,K]},I[9]=K,I[10]=Z,I[11]=v):v=I[11],(0,u.useAnimation)(g,v);let Q=void 0!==k&&k||N||void 0,J=!q;return I[12]!==G||I[13]!==j||I[14]!==X||I[15]!==Y?(x=X&&Y?(0,t.jsx)(l.default,{desktop:X,mobile:Y,fill:!0,sizes:"100vw",loading:j,crossOrigin:G}):null,I[12]=G,I[13]=j,I[14]=X,I[15]=Y,I[16]=x):x=I[16],I[17]!==J||I[18]!==x?(R=(0,t.jsx)(y,{ref:B,$isMissing:J,children:x}),I[17]=J,I[18]=x,I[19]=R):R=I[19],I[20]!==W||I[21]!==D||I[22]!==N?(A=(0,t.jsx)(c.default,{children:(0,t.jsx)(T,{children:N?(0,t.jsx)(W,{"data-heading":!0,children:D||S}):(0,t.jsx)(n.default,{children:(0,t.jsx)(W,{"data-heading":!0,children:D||S})})})}),I[20]=W,I[21]=D,I[22]=N,I[23]=A):A=I[23],I[24]!==P?(L=(0,t.jsx)(c.default,{children:(0,t.jsx)(w,{$l:"5/9",$huge:"5/9",children:P})}),I[24]=P,I[25]=L):L=I[25],I[26]!==A||I[27]!==L?(_=(0,t.jsxs)(E,{ref:F,children:[A,L]}),I[26]=A,I[27]=L,I[28]=_):_=I[28],I[29]!==z||I[30]!==Q||I[31]!==R||I[32]!==_?(M=(0,t.jsxs)(b,{ref:z,"aria-hidden":Q,children:[R,_]}),I[29]=z,I[30]=Q,I[31]=R,I[32]=_,I[33]=M):M=I[33],M});R.displayName="BuildsHero";var A=e.i(883495),L=e.i(748656),_=e.i(847873);let M=()=>{let e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e},I=(e,t,r)=>{let n=new Float32Array(16);for(let e=0;e<4;e++)for(let i=0;i<4;i++){let a=0;for(let n=0;n<4;n++)a+=t[4*n+i]*r[4*e+n];n[4*e+i]=a}return e.set(n),e},D=1/Math.tan(40*Math.PI/360),P=new Set(["098203fd71da7dabe971abfd09e03fac564bd089","752acdca25a4ba14424fc6d77942b041e1c3ef22","a09cf04f753bcc17fe79a01e6b6c1b60f033c4b5","c4f2698a8887bd7837219df4c0fb1fa09f3c2445","da8fbe58536f6fc147125ea18c51ddf0035774cc","7e6ca8eec99e09e77f609361b37eb00a0edf3b52","52d7246289bcdd342dc6b5b9e664c310dd2032d6","59aee483aad0474534d7420ecb34e19969a69586"]),C=(e,t)=>{let r=43758.5453*Math.sin(127.1*e+311.7*t);return r-Math.floor(r)},U=(e,t,r)=>{let n=e/256*r,i=t/256*r,a=Math.floor(n),o=Math.floor(i),l=n-a,s=i-o,u=l*l*(3-2*l),c=s*s*(3-2*s),d=C(a%r,o%r),h=C((a+1)%r,o%r),f=C(a%r,(o+1)%r);return(d+(h-d)*u)*(1-c)+(f+(C((a+1)%r,(o+1)%r)-f)*u)*c},O=`
attribute vec2 a_pos;

uniform mat4 u_mvp;

varying vec2 vUv;

void main() {
	vUv = a_pos * 0.5 + 0.5;
	gl_Position = u_mvp * vec4(a_pos, 0.0, 1.0);
}`,k=`
precision highp float;

uniform sampler2D uTex1;
uniform sampler2D uTex2;
uniform sampler2D uNoise;
uniform sampler2D uDepth1;
uniform sampler2D uDepth2;
uniform vec2 uMouse;
uniform float uDepthStrength;
uniform float uAspect1;     // image w/h for tex1
uniform float uAspect2;     // image w/h for tex2
uniform float uPlaneAspect; // viewport w/h
uniform float uProgress;    // 0..1, current section -> next
uniform float uVelocity;    // smoothed scroll velocity, roughly -1..1
uniform float uTime;
uniform float uMotion;      // 1 = full effect, 0 = plain crossfade

uniform float uWaveStrength;
uniform float uSmearStrength;
uniform float uZoomStrength;

varying vec2 vUv;

vec2 mirrored(vec2 v) {
	vec2 m = mod(v, 2.0);
	return mix(m, 2.0 - m, step(1.0, m));
}

float tri(float p) {
	return mix(p, 1.0 - p, step(0.5, p)) * 2.0;
}

// object-fit: cover, in UV space
vec2 cover(vec2 uv, float imgA, float planeA) {
	vec2 s = planeA > imgA ? vec2(1.0, imgA / planeA) : vec2(planeA / imgA, 1.0);
	return (uv - 0.5) * s + 0.5;
}

vec2 flipV(vec2 v) {
	return vec2(v.x, 1.0 - v.y);
}

void main() {
	vec2 uv = vUv;
	float pRaw = clamp(uProgress, 0.0, 1.0);
	float p = smoothstep(0.0, 1.0, pRaw); // ease the scrub a touch
	float m = uMotion;

	// A settled frame needs only its photograph and optional cursor depth.
	// Camera drift still runs in the vertex transform on desktop.
	if (pRaw == 0.0 && uVelocity == 0.0) {
		vec2 sampleUv = mirrored(cover(uv, uAspect1, uPlaneAspect));
		if (uDepthStrength > 0.0) {
			float depth = texture2D(uDepth1, flipV(sampleUv)).r;
			sampleUv += uMouse * uDepthStrength * (depth - 0.5);
		}
		gl_FragColor = vec4(texture2D(uTex1, flipV(clamp(sampleUv, 0.001, 0.999))).rgb, 1.0);
		return;
	}

	// scrolling noise field (drives the smear)
	vec4 noise = texture2D(uNoise, (uv * 0.5) - vec2(0.0, (uTime + 1.0 + p) / 50.0));
	vec4 noise2 = texture2D(uNoise, uv * vec2(1.5, 0.6) - vec2(uTime * 0.05, 0.0));

	// velocity smear along the travel axis, idle state
	float vel = clamp(uVelocity, -1.0, 1.0);
	uv.y += vel * (noise2.r - 0.5) * 0.22 * m * uSmearStrength;

	// --- wipe front: sweeps from the bottom edge to the top, slanted, soft
	float skew = 0.35;
	float dist = clamp(vUv.y + skew * (1.0 - vUv.x), 0.0, 1.0 + skew);  // distance from the bottom-right start, 0..1 + skew
	float pw = smoothstep(0.02, 0.98, p);

	// A tighter blend band, with enough travel to finish at the far corner.
	const float blendWidth = 0.30;
	float frontMix = pw * (1.0 + blendWidth + skew);
	float mixv = clamp((frontMix - dist) / blendWidth, 0.0, 1.0);

	// NOTE • The displacement's front travels the whole field plus a full delay,
	// so every pixel's delay reaches 1 by p = 1. Sharing the mix front here left
	// the far corner at 0.4: the incoming frame was still 15% short of home at
	// the top when the next section took over and drew it in place — the top of
	// every picture snapped after the scroll settled.
	float frontMove = pw * (2.0 + skew);
	float delay = clamp(frontMove - dist, 0.0, 1.0);

	// --- displacement of the two frames
	vec2 dir = vec2(0.05, -0.25);                    // travel: up the screen
	vec2 tProgress = vec2(0.0, -0.9 * p);
	float translate = p + delay;
	vec2 translate1 = (dir + tProgress) * translate; // outgoing, flung upward
	vec2 translate2 = dir * (translate - 2.0);       // incoming, arrives from below

	// wave wobble across the edge (horizontal ripple varying down the frame)
	vec2 w = vec2(sin(0.15 * cos(uTime * 0.5) + uv.y * 3.0) * 0.18, 0.0);
	vec2 xy = w * (tri(p) * sin(uTime * 0.5) * 0.5 + tri(delay) * 0.5) * uWaveStrength;

	// noise streaks on the leading edge, strongest mid-transition
	float streak = uSmearStrength * tri(p) * (1.0 - mixv * 0.5);
	vec2 smear1 = vec2(0.0, -(noise.r - 0.35) * 0.45 * streak);
	vec2 smear2 = vec2(0.0, (noise.r - 0.35) * 0.30 * streak);

	vec2 uv1 = uv + (translate1 + xy + smear1) * m;
	vec2 uv2 = uv + (translate2 + xy + smear2) * m;

	// scale: outgoing zooms in as it leaves; incoming settles from a 15% zoom
	uv1 = (uv1 - 0.5) / (1.0 + 0.5 * p * m * uZoomStrength) + 0.5;
	uv2 = (uv2 - 0.5) / (1.0 + (0.15 - 0.15 * p) * m * uZoomStrength) + 0.5;

	vec2 sample1 = mirrored(cover(uv1, uAspect1, uPlaneAspect));
	vec2 sample2 = mirrored(cover(uv2, uAspect2, uPlaneAspect));
	float depth1 = 0.5;
	float depth2 = 0.5;
	if (uDepthStrength > 0.0) {
		depth1 = texture2D(uDepth1, flipV(sample1)).r;
		depth2 = texture2D(uDepth2, flipV(sample2)).r;
	}
	// Same coordinates for the depth and colour preserve alignment through the
	// wipe and keep a section's final and initial frame identical at handover.
	sample1 += uMouse * uDepthStrength * (depth1 - 0.5);
	sample2 += uMouse * uDepthStrength * (depth2 - 0.5);
	vec4 c1 = texture2D(uTex1, flipV(clamp(sample1, 0.001, 0.999)));
	vec4 c2 = texture2D(uTex2, flipV(clamp(sample2, 0.001, 0.999)));

	float blend = mix(pRaw, mixv, m); // reduced motion: plain crossfade
	vec4 col = mix(c1, c2, blend);

	// faint lift on the moving edge
	col.rgb += vec3(tri(mixv) * 0.05 * m);

	gl_FragColor = vec4(col.rgb, 1.0);
}`,G=e=>{"close"in e&&e.close()},N=1e3/60,j=["u_mvp","uTex1","uTex2","uNoise","uDepth1","uDepth2","uDepthStrength","uMouse","uAspect1","uAspect2","uPlaneAspect","uProgress","uVelocity","uTime","uMotion","uWaveStrength","uSmearStrength","uZoomStrength"],$=(e,t,r)=>{let n=e.createShader(t);return n?(e.shaderSource(n,r),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))?n:(e.deleteShader(n),null):null},B=(e,t,r,n,i)=>{let a=e.createTexture();return e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r,r,0,e.RGBA,e.UNSIGNED_BYTE,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),a},F=e=>Math.max(-1,Math.min(1,e)),z=x.default.div.withConfig({componentId:"sc-38a6f4ab-0"})(()=>x.css`
		position: fixed;
		inset: 0;
		z-index: 0;

		pointer-events: none;
		user-select: none;

		canvas {
			position: absolute;
			inset: 0;
			display: block;
			width: 100%;
			height: 100%;
		}
	`),W=x.default.div.withConfig({componentId:"sc-38a6f4ab-1"})(()=>x.css`
		position: absolute;
		inset: 0;

		background:
			linear-gradient(to top, ${(0,g.getGlobal)("black",0)} 50%, ${(0,g.getGlobal)("black",60)} 100%),
			linear-gradient(to top, ${(0,g.getGlobal)("black",45)} 0%, ${(0,g.getGlobal)("black",0)} 40%);
	`),H=(0,i.lazy)(()=>e.A(763793)),X=(0,i.lazy)(()=>e.A(357525)),V=new Set(["vui","gui","planes-debug"]),Y=e=>{},q=e=>{let n,o,l,s,u,c,f,g,v,x,b=(0,r.c)(29),{children:y,config:E,onTuning:T}=e,w=(0,h.useLenis)(),S=(0,i.useRef)(null),R=(0,i.useRef)(E),[C,V]=(0,i.useState)(null),[q,K]=(0,i.useState)(!1),[Q,J]=(0,i.useState)(!1);b[0]!==C||b[1]!==T?(n=e=>{R.current={...R.current,...e},C?.setConfig(e),T?.(e)},b[0]=C,b[1]=T,b[2]=n):n=b[2];let ee=n;return b[3]===Symbol.for("react.memo_cache_sentinel")?(o=()=>{J("1"===new URLSearchParams(window.location.search).get("parallax-debug")),K([...new URLSearchParams(window.location.search).keys()].some(Z))},l=[],b[3]=o,b[4]=l):(o=b[3],l=b[4]),(0,i.useEffect)(o,l),b[5]!==w?(s=()=>{let e=S.current;if(!w||!e)return;let t=window.matchMedia("(prefers-reduced-motion: no-preference)"),r=window.matchMedia(m),n=!r.matches,i=null,a=null,o=()=>{i?.destroy(),i=null,a?.remove(),a=null,Y(null),V(null)},l=()=>{if(!t.matches)return void o();let l=!r.matches;l!==n&&(o(),n=l),i||(()=>{if(a=document.createElement("canvas"),e.appendChild(a),!(i=(({canvas:e,isTouchMode:t=!1,config:r,onUnavailable:n})=>{let i,a,o,l={..._.PLANE_CONFIG,...r},s=e.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:t,powerPreference:"high-performance"});if(!s)return null;let u=(i=$(s,s.VERTEX_SHADER,O),a=$(s,s.FRAGMENT_SHADER,k),o=s.createProgram(),i&&a&&o?(s.attachShader(o,i),s.attachShader(o,a),s.linkProgram(o),s.deleteShader(i),s.deleteShader(a),s.getProgramParameter(o,s.LINK_STATUS))?o:(s.deleteProgram(o),null):null);if(!u)return null;s.useProgram(u);let c=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,c),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),s.STATIC_DRAW);let h=s.getAttribLocation(u,"a_pos");s.enableVertexAttribArray(h),s.vertexAttribPointer(h,2,s.FLOAT,!1,0,0);let f=Object.fromEntries(j.map(e=>[e,s.getUniformLocation(u,e)]));s.uniform1i(f.uTex1,0),s.uniform1i(f.uTex2,1),s.uniform1i(f.uNoise,2),s.uniform1i(f.uDepth1,3),s.uniform1i(f.uDepth2,4),s.uniform1f(f.uMotion,1),s.clearColor(0,0,0,1),s.disable(s.BLEND),s.disable(s.DEPTH_TEST);let m=B(s,2,256,(()=>{let e=new Uint8Array(262144);for(let t=0;t<256;t++)for(let r=0;r<256;r++){let n=0,i=.5,a=4,o=0;for(let e=0;e<4;e++)n+=U(r,t,a)*i,o+=i,i*=.5,a*=2;let l=(256*t+r)*4,s=Math.round(n/o*255);e[l]=s,e[l+1]=s,e[l+2]=s,e[l+3]=255}return e})(),s.REPEAT),g=B(s,0,1,new Uint8Array([0,0,0,255]),s.CLAMP_TO_EDGE),v=B(s,3,1,new Uint8Array([128,128,128,255]),s.CLAMP_TO_EDGE),x=new Map,b={frames:0,drawCalls:0,uploads:0,planes:0,textures:0,current:-1,progress:0,velocity:0,mouse:{x:0,y:0}},y=[],E=new Float32Array(16),T=0,w=0,S=0,R=!1,C=!0,z=!1,W=!1,H=!0,X=!0,V=null,Y=!1,q=null,Z=0,K=0,Q={x:0,y:0},J=b.mouse,ee=((e,{uploadBudgetMs:t,uploadStarvationFrames:r,onUpload:n,maxTextureSize:i,useImageElement:a=!1})=>{let o=new Map,l=new Map,s=new Map,u=[],c=1,d=0,h=!1,f=Math.min(i??1/0,e.getParameter(e.MAX_TEXTURE_SIZE));return{acquire:(e,t)=>{let r=o.get(e);if(r)return l.set(r,(l.get(r)??0)+1),r;let i={id:c++,key:e,texture:null,width:t.naturalWidth,height:t.naturalHeight,aspect:t.naturalWidth/t.naturalHeight,state:"decoding"};return o.set(e,i),l.set(i,1),((e,t,r)=>{if(r)return e.decode().then(()=>{if(!e.naturalWidth||!e.naturalHeight||Math.max(e.naturalWidth,e.naturalHeight)>t)throw Error("Image cannot be uploaded within the mobile texture budget");return e});if("function"!=typeof createImageBitmap)return Promise.resolve(e);let n=Math.min(1,t/Math.max(e.naturalWidth,e.naturalHeight));return createImageBitmap(e,{premultiplyAlpha:"none",...n<1?{resizeWidth:Math.max(1,Math.round(e.naturalWidth*n)),resizeHeight:Math.max(1,Math.round(e.naturalHeight*n))}:{}}).catch(()=>e)})(t,f,a).then(t=>{h||o.get(e)!==i?G(t):(s.set(i,t),i.state="queued",u.push(i))}).catch(()=>{h||o.get(e)!==i||(i.state="failed",n?.(i))}),i},release:t=>{if(o.get(t.key)!==t)return;let r=(l.get(t)??1)-1;if(r>0)return void l.set(t,r);l.delete(t),o.delete(t.key);let n=s.get(t);n&&G(n),s.delete(t);let i=u.indexOf(t);-1!==i&&u.splice(i,1),t.texture&&e.deleteTexture(t.texture),t.texture=null},flush:(i,a=[])=>{if(0===u.length)return d=0,!1;if(i>t&&d<r)return d++,!1;d=0;let o=a.find(e=>e?.state==="queued"&&s.has(e)),l=o?u.indexOf(o):0,[c]=u.splice(l,1),h=s.get(c);return(s.delete(c),h)?(((t,r)=>{let n=e.createTexture();if(!n){t.state="failed";return}e.bindTexture(e.TEXTURE_2D,n),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);try{e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r)}catch{e.deleteTexture(n),t.state="failed";return}if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.getError()!==e.NO_ERROR){e.deleteTexture(n),t.state="failed";return}t.width="naturalWidth"in r?r.naturalWidth:r.width,t.height="naturalHeight"in r?r.naturalHeight:r.height,t.aspect=t.width/t.height,t.texture=n,t.state="ready"})(c,h),G(h),n?.(c),"ready"===c.state):(c.state="failed",!1)},get hasPendingUploads(){return u.length>0},get size(){return o.size},destroy:()=>{for(let e of(h=!0,s.values()))G(e);for(let t of o.values())t.texture&&e.deleteTexture(t.texture),t.texture=null;s.clear(),o.clear(),l.clear(),u.length=0}}})(s,{uploadBudgetMs:l.uploadBudgetMs,uploadStarvationFrames:l.uploadStarvationFrames,maxTextureSize:t?2048:void 0,useImageElement:t,onUpload:e=>{"failed"===e.state?ec():(b.uploads++,b.textures=ee.size,X=!0)}}),et=e=>{let t=e?x.get(e):null;!t||!e||--t.references>0||(t.image.onload=null,t.image.removeAttribute("src"),t.entry&&ee.release(t.entry),x.delete(e))},er=e=>{let t=e?x.get(e)?.entry:null;return t?.state==="ready"?t.texture:v},en=e=>{let t=e.pose.isPainted;e.pose.isPainted=!1,e.el.removeAttribute(p),e.content&&(e.content.style.opacity="",e.content.style.transform="",e.textOpacity=-1,e.textTransform=""),t&&e.onPaintChange?.(!1)},ei=()=>{H=!0,X=!0,q=null},ea=e=>{var t;let r,{content:n,pose:i}=e;if(!n)return;let a=Math.abs(i.offset),o=a>1.2?0:1-(t=l.textFadeStart,(r=Math.max(0,Math.min(1,(a-t)/(l.textFadeEnd-t))))*r*(3-2*r));if(0===o&&0===e.textOpacity)return;let s=Number(o.toFixed(3));e.textOpacity!==s&&(e.textOpacity=s,n.style.opacity=String(s));let u=`translate3d(0, ${(-(i.offset*l.textShift)).toFixed(2)}vh, 0)`;e.textTransform!==u&&(e.textTransform=u,n.style.transform=u)},eo=(e,t)=>{s.activeTexture(s.TEXTURE0+e),s.bindTexture(s.TEXTURE_2D,t??g)},el=(r,n)=>{let i=performance.now();if(b.frames++,W||z||document.hidden||((C||window.devicePixelRatio!==S)&&(()=>{C=!1,ei(),S=window.devicePixelRatio||1,T=e.clientWidth,w=e.clientHeight;let r=t?Math.min(2,2048/Math.max(T,w)):l.maxDevicePixelRatio,n=Math.min(S,r),i=Math.round(T*n),a=Math.round(w*n);if(!i||!a){R=!1;return}(e.width!==i||e.height!==a)&&(e.width=i,e.height=a),s.viewport(0,0,i,a),s.uniform1f(f.uPlaneAspect,T/w),R=!0,q=null})(),!R||0===y.length))return;let a=e.getBoundingClientRect();if(!a.width||!a.height)return;let o=T/a.width,u=y[0],c=u.el.getBoundingClientRect(),d=(c.top-a.top)*o;if(H){for(let e of y){let t=e===u?c:e.el.getBoundingClientRect();e.layoutY=(t.top-c.top)*o,e.pose.height=t.height*o}H=!1}let h=null,m=-1,g=0;for(let e=0;e<y.length;e++){let t=y[e],{pose:r}=t;if(r.y=d+t.layoutY,r.offset=r.height>0?r.y/r.height:0,r.isCurrent=!1,0===e){let e=t===q?r.y-Z:0;q=t,Z=r.y,g=Math.abs(e)<w?e:0}r.y<=.5&&r.y+r.height>.5&&(h=t,m=e)}for(let e of y){let{entry:t,pose:r}=e;r.isPainted||t?.state!=="ready"||(r.isPainted=!0,e.el.setAttribute(p,"true"),e.onPaintChange?.(!0)),ea(e)}if(!h)return;h.pose.isCurrent=!0;let v=m+1<y.length?y[m+1]:null,A=Math.max(0,Math.min(1,-h.pose.y/h.pose.height)),L=F((n>0?-g*N/n/w:0)/l.velocityScale);K+=(L-K)*(1-(1-l.velocityEase)**(n/N)),0===L&&1e-4>Math.abs(K)&&(K=0),0===K&&.5>=Math.abs(h.pose.y)&&(A=0);let _=0===A&&0===K,P=1-(1-l.mouseEase)**(n/N);if(J.x+=(Q.x-J.x)*P,J.y+=(Q.y-J.y)*P,b.current=m,b.progress=A,b.velocity=K,!t||!_||!Y||X||V!==h){var U,O;let e,n;U=h,O=A,e=U.entry,n=v?.entry??e,((e,{aspect:t,yaw:r,pitch:n,x:i,y:a,overscan:o})=>{var l,s,u,c,d,h;let f,p,m,g,v,x,b,y,E,T,w=(l=-n,f=M(),p=Math.cos(l),m=Math.sin(l),f[5]=p,f[6]=m,f[9]=-m,f[10]=p,f);return I(w,w,(s=-r,g=M(),v=Math.cos(s),x=Math.sin(s),g[0]=v,g[2]=-x,g[8]=x,g[10]=v,g)),I(w,w,(u=-i,c=-a,d=-D,(b=M())[12]=u,b[13]=c,b[14]=d,b)),e.set((y=1/Math.tan(40*Math.PI/360),(E=new Float32Array(16))[0]=y/t,E[5]=y,E[10]=-1.02020202020202,E[11]=-1,E[14]=-.20202020202020202,E)),I(e,e,w),I(e,e,(h=t*o,(T=M())[0]=h,T[5]=o,T))})(E,{aspect:T/w,yaw:t?0:-J.x*l.tiltX,pitch:t?0:J.y*l.tiltY,x:t?0:Math.sin(r)*l.driftX,y:t?0:Math.cos(r)*l.driftY,overscan:t?1:l.overscan}),eo(0,e?.texture??null),eo(1,n?.texture??null),eo(3,er(U.depthSource)),eo(4,er((v??U).depthSource)),s.uniform2f(f.uMouse,J.x,-J.y),s.uniform1f(f.uMotion,l.morphStrength),s.uniform1f(f.uWaveStrength,l.waveStrength),s.uniform1f(f.uSmearStrength,l.smearStrength),s.uniform1f(f.uZoomStrength,l.zoomStrength),s.uniform1f(f.uDepthStrength,t?0:l.depthStrength),s.uniformMatrix4fv(f.u_mvp,!1,E),s.uniform1f(f.uAspect1,e?.aspect??T/w),s.uniform1f(f.uAspect2,n?.aspect??T/w),s.uniform1f(f.uProgress,O),s.uniform1f(f.uVelocity,K),s.uniform1f(f.uTime,r),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_STRIP,0,4),b.drawCalls++,X=!1,V=h}Y=_;let k=performance.now()-i+Math.max(0,n-N);if(ee.hasPendingUploads){let e=y[m-1];ee.flush(k,[h.entry,v?.entry,e?.entry,x.get(h.depthSource??"")?.entry,x.get(v?.depthSource??"")?.entry])}},es=e=>{Q.x=F(e.clientX/window.innerWidth*2-1),Q.y=F(e.clientY/window.innerHeight*2-1)},eu=()=>{Q.x=0,Q.y=0},ec=()=>{for(let e of(z=!0,y))en(e);n?.()},ed=new ResizeObserver(()=>{C=!0}),eh=new ResizeObserver(ei);return ed.observe(e),A.default.addEventListener("refresh",ei),document.addEventListener("visibilitychange",ei),e.addEventListener("webglcontextlost",ec),t||window.addEventListener("pointermove",es,{passive:!0}),document.documentElement.addEventListener("pointerleave",eu),d.gsap.ticker.add(el),{stats:b,poses:()=>y.map(e=>({...e.pose})),ensure:({el:e,img:r,content:n=null,depthMapUrl:i,onPaintChange:a})=>{if(W)return{release:()=>{}};let o={depthSource:null,el:e,img:r,content:n,entry:null,pose:{el:e,y:0,height:0,offset:0,isPainted:!1,isCurrent:!1},textOpacity:-1,textTransform:"",layoutY:0,onPaintChange:a,adopt:()=>{let e,n=!r.complete||0===r.naturalWidth||(0,L.isDeferredImage)(r)?null:r.currentSrc||r.src||null;if(!n||o.entry?.key===n)return;en(o),o.entry&&ee.release(o.entry),o.entry=ee.acquire(n,r);let a=i?(e=>{try{let t=new URL(e);if("gurination1.github.io/branders"!==t.hostname||!t.pathname.startsWith("/images/"))return e;return t.searchParams.set("w",String(1024)),t.searchParams.set("h",String(1024)),t.searchParams.set("fit","max"),t.searchParams.set("fm","webp"),t.searchParams.set("q",String(85)),t.searchParams.set("blur",String(8)),t.searchParams.delete("auto"),t.searchParams.delete("dpr"),t.toString()}catch{return e}})(i):(e=n.match(/\/([a-f0-9]{40})-2880x1800\./)?.[1])&&P.has(e)?`/images/build-depth/${e}.webp`:null;o.depthSource!==a&&(et(o.depthSource),o.depthSource=a,(e=>{if(t||!e)return;let r=x.get(e);if(r)return r.references++;let n=new Image,i={image:n,entry:null,references:1};x.set(e,i),n.onload=()=>{W||x.get(e)!==i||(i.entry=ee.acquire(e,n),b.textures=ee.size)},n.crossOrigin="anonymous",n.src=e})(a)),b.textures=ee.size,X=!0}},l=y.findIndex(t=>t.el.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING);y.splice(-1===l?y.length:l,0,o),b.planes=y.length,eh.observe(e),ei(),o.adopt(),r.addEventListener("load",o.adopt);let s=!1;return{release:()=>{if(s)return;s=!0,r.removeEventListener("load",o.adopt),en(o),eh.unobserve(e),o.entry&&ee.release(o.entry),et(o.depthSource),b.textures=ee.size;let t=y.indexOf(o);-1!==t&&y.splice(t,1),b.planes=y.length,ei(),V===o&&(V=null),q===o&&(q=null)}}},setConfig:e=>{W||(Object.assign(l,e),X=!0,void 0!==e.maxDevicePixelRatio&&(C=!0))},destroy:()=>{if(!W){for(let t of(W=!0,d.gsap.ticker.remove(el),ed.disconnect(),eh.disconnect(),A.default.removeEventListener("refresh",ei),document.removeEventListener("visibilitychange",ei),e.removeEventListener("webglcontextlost",ec),window.removeEventListener("pointermove",es),document.documentElement.removeEventListener("pointerleave",eu),y))t.img.removeEventListener("load",t.adopt),en(t);for(let{image:e}of(y.length=0,q=null,V=null,b.planes=0,x.values()))e.onload=null,e.removeAttribute("src");x.clear(),ee.destroy(),b.textures=0,s.deleteTexture(v),s.deleteTexture(m),s.deleteTexture(g),s.deleteBuffer(c),s.deleteProgram(u),s.getExtension("WEBGL_lose_context")?.loseContext()}}}})({canvas:a,isTouchMode:n,config:R.current,onUnavailable:o}))){a.remove(),a=null;return}Y(i),V(i)})()};return l(),t.addEventListener("change",l),r.addEventListener("change",l),()=>{t.removeEventListener("change",l),r.removeEventListener("change",l),o()}},u=[w],b[5]=w,b[6]=s,b[7]=u):(s=b[6],u=b[7]),(0,i.useEffect)(s,u),b[8]!==C?(c=C?(0,t.jsx)(W,{}):null,b[8]=C,b[9]=c):c=b[9],b[10]!==c?(f=(0,t.jsx)(z,{ref:S,"aria-hidden":"true",children:c}),b[10]=c,b[11]=f):f=b[11],b[12]!==E||b[13]!==ee||b[14]!==Q||b[15]!==C?(g=Q&&C?(0,t.jsx)(i.Suspense,{fallback:null,children:(0,t.jsx)(X,{base:E,onChange:ee,onClose:()=>J(!1)})}):null,b[12]=E,b[13]=ee,b[14]=Q,b[15]=C,b[16]=g):g=b[16],b[17]!==E||b[18]!==ee||b[19]!==Q||b[20]!==q||b[21]!==C?(v=q&&!Q&&C?(0,t.jsx)(i.Suspense,{fallback:null,children:(0,t.jsx)(H,{base:E,onChange:ee})}):null,b[17]=E,b[18]=ee,b[19]=Q,b[20]=q,b[21]=C,b[22]=v):v=b[22],b[23]!==y||b[24]!==C||b[25]!==f||b[26]!==g||b[27]!==v?(x=(0,t.jsxs)(a,{value:C,children:[f,y,g,v]}),b[23]=y,b[24]=C,b[25]=f,b[26]=g,b[27]=v,b[28]=x):x=b[28],x};function Z(e){return V.has(e.toLowerCase())}q.displayName="ImagePlanes";var K=e.i(124821),Q=e.i(88664),J=e.i(22584),ee=e.i(135741);let et=(0,x.default)(g.Div).attrs({as:"article"}).withConfig({componentId:"sc-2b8449e6-0"})(()=>x.css`
        --height: 100dvh;

        position: relative;
        z-index: 1;
        overflow: clip;

        width: 100%;
        height: var(--height);

        /* NOTE • Under the WebGL listing the photograph is painted on the shared
           frame beneath this box once its texture is up. The DOM copy stays in
           the layout — its rect is what the frame reads — and fades out over the
           frame, so the swap settles rather than cuts. */
        picture {
            transition: opacity ${(0,g.getTime)("l")} ${(0,g.getEase)("ease")};
        }

        &[${p}='true'] picture {
            opacity: 0;
        }
    `),er=(0,x.default)(g.Div).withConfig({componentId:"sc-2b8449e6-1"})(()=>x.css`
        position: absolute;
        inset: 0;
        z-index: -1;

        pointer-events: none;
        user-select: none;

        &:after {
            content: '';
            position: absolute;
            inset: 0 0 50% 0;
            z-index: 1;
            pointer-events: none;
            user-select: none;

            background: linear-gradient(to top, ${(0,g.getGlobal)("black",0)} 0%, ${(0,g.getGlobal)("black",60)} 100%);
        }

        /* NOTE • Under the WebGL listing the frame never stops moving, and a
           gradient scrolling away with this box would read as a band sliding over
           the photograph — the layer's own fixed scrim stands in for it. */
        [${p}='true'] > &:after {
            opacity: 0;
        }

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

                ${g.bp.l`
                    object-position: center;
                `}
            }
        }
    `),en=(0,x.default)(g.Div).attrs({as:"div"}).withConfig({componentId:"sc-2b8449e6-2"})(()=>x.css`	
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    padding-top: ${(0,g.getGap)("huge")};
    /* Long titles must grow down from the header clearance, never above it. */
    min-height: 50dvh;

    @media (max-height: 700px) {
        padding-top: 8rem;
    }

    ${g.bp.l`
        padding-top: ${(0,g.getGap)("col")};
    `}

    @media (max-height: 500px) {
        padding-top: 8rem;
    }
`),ei=(0,x.default)(g.Div).withConfig({componentId:"sc-2b8449e6-3"})(()=>x.css`
        display: flex;
        justify-content: center;
        gap: ${(0,g.getGap)("xs")};
        margin-bottom: ${(0,g.getGap)("sm")};
    `),ea=(0,x.default)(g.Div).withConfig({componentId:"sc-2b8449e6-4"})(()=>x.css`
        /* By attribute: an <h2> on the first pass, a plain div in loop copies. */
        [data-heading] {
            ${v.headlineL}

            font-style: italic;
            text-align: center;
            color: ${(0,g.getBrand)("bc5")};

            @media (max-height: 700px) {
                font-size: 4.4rem;
                line-height: 1.1;
            }

            @media (max-height: 500px) {
                font-size: 3.6rem;
            }
        }
    `),eo=(0,x.default)(g.Div).attrs({as:"p"}).withConfig({componentId:"sc-2b8449e6-5"})(()=>x.css`
        ${v.bodyL}

        margin: ${(0,g.getGap)("s")} 0 ${(0,g.getGap)("l")};

        text-align: center;
        text-wrap: balance;
        color: ${(0,g.getGlobal)("white")};

        filter: drop-shadow(0 8px 16px ${(0,g.getGlobal)("black",60)});

        @media (max-height: 500px) {
            margin: ${(0,g.getGap)("xs")} 0 ${(0,g.getGap)("s")};
        }
    `),el=(0,x.default)(g.Div).withConfig({componentId:"sc-2b8449e6-6"})(()=>x.css`
        display: flex;
        justify-content: center;
        gap: ${(0,g.getGap)("s")};
    `),es=x.default.button.withConfig({componentId:"sc-2b8449e6-7"})(()=>x.css`
		${(0,ee.sharedStyles)({})}

		&:disabled,
		&:disabled:hover {
			cursor: not-allowed;
			pointer-events: auto;
			border-color: ${(0,g.getBrand)("bc5",10)};

			> span {
				opacity: 1;
			}
		}
	`),eu=(0,i.forwardRef)((e,a)=>{let s,f,p,m,g,v,x,b,y,E,T,w,S=(0,r.c)(48),{buildName:R,buildCode:A,slug:L,shortDescription:_,available:M,comingSoon:I,price:D,desktopImage:P,depthMapUrl:C,mobileImage:U,basePath:O,imageLoading:k,imageEnabled:G,isLoopCopy:N,crossOrigin:j}=e,$=void 0===O?J.ARCHIVE_BASE_PATH:O,B=void 0===k?"lazy":k,F=void 0===G||G,z=void 0!==N&&N,W=(0,i.useRef)(null),H=(0,i.useRef)(null),X=(0,i.useRef)(null),V=(0,i.useRef)(null),Y=(0,h.useLenis)();S[0]!==a?(s=e=>{(H.current=e,"function"==typeof a)?a(e):a&&(a.current=e)},S[0]=a,S[1]=s):s=S[1];let q=s,Z=z?"div":"h2",ee=o(H,X,V,C);if(S[2]!==ee||S[3]!==Y?.rootElement?(f=e=>{let{isDesktop:t}=e;if(ee)return;let r=W.current,n=H.current,i=Y?.rootElement,a=X.current;if(!r||!n||!i||!a)return;let o=t?50:20;d.default.set(a,{yPercent:-o}),d.default.to(a,{yPercent:o,ease:"none",scrollTrigger:{trigger:n,scroller:i,start:"top bottom",end:"bottom top",scrub:!0}})},S[2]=ee,S[3]=Y?.rootElement,S[4]=f):f=S[4],S[5]!==ee||S[6]!==Y?(p={scope:H,dependencies:[Y,ee]},S[5]=ee,S[6]=Y,S[7]=p):p=S[7],(0,u.useAnimation)(f,p),!R||!A||!L||!_)return null;let eu=!!(P&&U),ec=z||void 0;if(S[8]!==j||S[9]!==P||S[10]!==eu||S[11]!==F||S[12]!==B||S[13]!==U?(m=eu&&P&&U?(0,t.jsx)(er,{ref:W,children:(0,t.jsx)(l.default,{enabled:F,desktop:P,mobile:U,desktopInLandscape:!0,fill:!0,sizes:"100vw",quality:90,loading:B,crossOrigin:j,ref:X})}):null,S[8]=j,S[9]=P,S[10]=eu,S[11]=F,S[12]=B,S[13]=U,S[14]=m):m=S[14],S[15]!==A?(g=(0,t.jsx)(Q.default,{text:A}),S[15]=A,S[16]=g):g=S[16],S[17]!==M||S[18]!==I||S[19]!==D){let e;v=M?(0,t.jsx)(Q.default,{text:I?"Coming soon":((e=(D??"").replace(/^£+\s*/,"").trim())?`\xa3${e}`:"")||"For Sale",isLight:!0}):null,S[17]=M,S[18]=I,S[19]=D,S[20]=v}else v=S[20];return S[21]!==g||S[22]!==v?(x=(0,t.jsxs)(ei,{$l:"5/9",children:[g,v]}),S[21]=g,S[22]=v,S[23]=x):x=S[23],S[24]!==Z||S[25]!==R||S[26]!==ee?(b=(0,t.jsx)(ea,{$l:"4/10",children:ee?(0,t.jsx)(Z,{"data-heading":!0,children:R}):(0,t.jsx)(n.default,{children:(0,t.jsx)(Z,{"data-heading":!0,children:R})})}),S[24]=Z,S[25]=R,S[26]=ee,S[27]=b):b=S[27],S[28]!==_?(y=(0,t.jsx)(eo,{$l:"5/9",children:_}),S[28]=_,S[29]=y):y=S[29],S[30]!==M||S[31]!==$||S[32]!==A||S[33]!==R||S[34]!==I||S[35]!==z||S[36]!==L?(E=(0,t.jsx)(el,{children:M&&I?(0,t.jsx)(es,{type:"button",disabled:!0,children:(0,t.jsx)("span",{children:"View build"})}):(0,t.jsx)(K.default,{to:(0,J.buildHref)($,L),transitionAwaitsContent:!0,prefetch:!0,tabIndex:z?-1:void 0,label:"View Build",aria:`View build ${A} – ${R}`})}),S[30]=M,S[31]=$,S[32]=A,S[33]=R,S[34]=I,S[35]=z,S[36]=L,S[37]=E):E=S[37],S[38]!==x||S[39]!==b||S[40]!==y||S[41]!==E?(T=(0,t.jsx)(en,{ref:V,children:(0,t.jsxs)(c.default,{children:[x,b,y,E]})}),S[38]=x,S[39]=b,S[40]=y,S[41]=E,S[42]=T):T=S[42],S[43]!==q||S[44]!==T||S[45]!==ec||S[46]!==m?(w=(0,t.jsxs)(et,{ref:q,"aria-hidden":ec,children:[m,T]}),S[43]=q,S[44]=T,S[45]=ec,S[46]=m,S[47]=w):w=S[47],w});eu.displayName="SingleBuild";var ec=e.i(371136),ed=e.i(764548),eh=e.i(573943),ef=e.i(676842);let ep="data-lenis-prevent-touch";var em=J;let eg=(0,x.default)(g.Div).attrs({as:"section"}).withConfig({componentId:"sc-6b22fb2c-0"})(()=>x.css`
		position: relative;
        overflow: clip;
        background: ${(0,g.getGlobal)("black")};

        /* NOTE • The loop copies exist for native touch under Lenis. Reduced motion
           runs without Lenis (SmoothScroll returns bare children), so nothing
           would ever fold them back: one list, one closing hero, like the page
           before the loop. Children run hero, ul, hero, ul, hero… */
        @media (prefers-reduced-motion: reduce) {
            > ul:nth-of-type(n + 2),
            > section:nth-of-type(n + 3) {
                display: none;
            }
        }

        > ul {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;

            > li {
                width: 100%;
                height: auto;
            }
        }
	`),ev=({builds:e,hero:r,infiniteScroll:n=!1,basePath:a=em.ARCHIVE_BASE_PATH,emptyDescription:o,withImagePlanes:l=!1})=>{let[s,u]=(0,i.useState)({}),[c,d]=(0,i.useState)(()=>new Set),f=s.snapDamping??_.PLANE_CONFIG.snapDamping,p=(0,i.useCallback)(e=>(1-(1+f*e)*Math.exp(-f*e))/(1-(1+f)*Math.exp(-f)),[f]),m={duration:s.snapDuration??_.PLANE_CONFIG.snapDuration,easing:p},g=(0,i.useMemo)(()=>{let t;return t=new Map,e.map(e=>{let r=t.get(e._id)??0;return t.set(e._id,r+1),0===r?e._id:`${e._id}-${r}`})},[e]),v=(0,i.useMemo)(()=>g.join("|"),[g]),x=0===e.length,b=n&&e.length>1,y=b?Math.min(12,Math.max(2,Math.ceil(16/Math.max(1,e.length+1))+1)):1,E=n&&!x?"eager":"lazy",T=(0,i.useMemo)(()=>Array.from({length:y},(e,t)=>`copy-${t}`),[y]),w=(0,i.useRef)(null),S=(0,i.useRef)(null),L=(0,i.useRef)([]),M=(0,i.useRef)([]),I=(0,i.useRef)(0),D=(0,h.useLenis)(),P=(0,i.useCallback)(()=>[S.current,...L.current,...M.current].filter(Boolean),[]),C=(0,ec.useLenisSnap)(D,P,[v,y],l?{listingWheel:_.LISTING_WHEEL_CONFIG,debounce:s.snapDebounce??_.PLANE_CONFIG.snapDebounce,...m}:{debounce:500}),U=(0,i.useMemo)(()=>Array.from({length:y},(e,t)=>e=>{M.current[t]=e,C.current?.()}),[y,C]),O=(0,i.useCallback)(()=>I.current,[]);if((0,i.useEffect)(()=>{if(!n||x)return;let e=new Map;L.current.forEach((t,r)=>{t&&e.set(t,r%g.length)});let t=new IntersectionObserver(t=>{let r=t.flatMap(t=>{let r=e.get(t.target);return t.isIntersecting&&void 0!==r?g.length?[...new Set([r-1,r,r+1].flatMap(e=>{if(!b&&(e<0||e>=g.length))return[];let t=g[(e%g.length+g.length)%g.length];return t?[t]:[]}))]:[]:[]});r.length&&d(e=>r.every(t=>e.has(t))?e:new Set([...e,...r]))},{root:D?.rootElement??null,threshold:.01});for(let r of e.keys())t.observe(r);return()=>t.disconnect()},[g,n,x,b,D]),(0,i.useEffect)(()=>{if(!D||!l||x)return;let e=D.rootElement,t=e.clientHeight,r=D.scroll,n=()=>{e.clientHeight===t&&(r=D.scroll)},i=new ResizeObserver(()=>{let n=e.clientHeight;if(!n||n===t)return;let i=t>0?r*n/t:r;t=n,e.setAttribute(ed.SCROLL_RESIZING_ATTRIBUTE,""),e.setAttribute(ed.SCROLL_FOLDING_ATTRIBUTE,"");try{D.resize(),A.default.refresh(),D.scrollTo(i,{immediate:!0,programmatic:!1}),r=D.scroll,C.current?.()}finally{e.removeAttribute(ed.SCROLL_FOLDING_ATTRIBUTE),e.removeAttribute(ed.SCROLL_RESIZING_ATTRIBUTE)}});return i.observe(e),D.on("scroll",n),()=>{i.disconnect(),D.off("scroll",n)}},[D,l,x,C]),(0,i.useEffect)(()=>{if(!D||!b)return;let e=D.options.infinite;return D.options.infinite=!0,D.resize(),A.default.refresh(),()=>{D.options.infinite=e,D.resize(),A.default.refresh()}},[D,b]),(0,i.useEffect)(()=>{let e=D?.rootElement,t=w.current;if(!e||!t||!b)return;let r=()=>{let t=S.current,r=M.current[0];t&&r&&(I.current=r.offsetTop-t.offsetTop,(0,ed.setScrollLoop)(e,I.current))};r();let n=new ResizeObserver(r);return n.observe(t),()=>{n.disconnect(),I.current=0,(0,ed.clearScrollLoop)(e)}},[D,b]),((e,t,r,{getScope:n}={})=>{(0,i.useEffect)(()=>{if(!e||!r)return;let i=e.rootElement,a=null,o=!1,l=()=>Array.from((n?.()??i).querySelectorAll("img")).every(e=>e.complete),s=()=>{let{loop:r,limit:n,position:a}={loop:t(),limit:i.scrollHeight-i.clientHeight,position:i.scrollTop};if(r<=0||n<r)return;let o=Math.round((n/2-a)/r)*r;0!==o&&((t,r,n)=>{if(t<0||t>r||!l())return(0,eh.scrollTrace)("fold skipped",{reason:n,target:t,limit:r,imagesReady:l()});(0,eh.scrollTrace)("fold",{reason:n,from:Math.round(i.scrollTop),to:t}),i.setAttribute(ed.SCROLL_FOLDING_ATTRIBUTE,"");try{e.scrollTo(t,{immediate:!0,programmatic:!1})}finally{i.removeAttribute(ed.SCROLL_FOLDING_ATTRIBUTE)}})(a+o,n,"centre")},u=()=>{if((0,ed.isScrollResetting)(i)||(0,ed.isScrollFolding)(i)){a=null;return}if("native"===e.isScrolling){a="native";return}if("smooth"===e.isScrolling){a="smooth";return}"native"!==a||(a=null,o||((0,eh.scrollTrace)("rest",{position:Math.round(i.scrollTop)}),s()))},c=()=>{o=!0,(0,eh.scrollTrace)("touchstart",{position:Math.round(i.scrollTop),isScrolling:e.isScrolling})},d=()=>{o=!1,(0,eh.scrollTrace)("touchend",{position:Math.round(i.scrollTop),isScrolling:e.isScrolling}),!1===e.isScrolling&&s()};return e.on("scroll",u),i.addEventListener("touchstart",c,{passive:!0}),i.addEventListener("touchend",d,{passive:!0}),i.addEventListener("touchcancel",d,{passive:!0}),()=>{e.off("scroll",u),i.removeEventListener("touchstart",c),i.removeEventListener("touchend",d),i.removeEventListener("touchcancel",d)}},[e,t,r,n])})(D,O,b,{getScope:(0,i.useCallback)(()=>w.current,[])}),(0,i.useEffect)(()=>{let e=w.current;if(D&&e&&l&&!x)return((e,t,r,{duration:n,easing:i})=>{let a=e.rootElement,o=t.getAttribute(ep),l=null,s=()=>e.isStopped||e.isLocked||(0,ed.isScrollResetting)(a)||(0,ed.isScrollFolding)(a)||a.hasAttribute(ed.SCROLL_RESIZING_ATTRIBUTE),u=()=>{l=null,a.removeAttribute(ed.SCROLL_DRAGGING_ATTRIBUTE)},c=t=>{if(u(),1!==t.touches.length||s())return;let n=t.target;if(n instanceof Element&&n.closest("input, textarea, select, [contenteditable], [data-lenis-prevent], [data-listing-swipe-ignore]"))return;let i=e.animatedScroll,o=a.getBoundingClientRect();if(!o.height)return;let c=a.clientHeight/o.height,d=r().map(e=>i+(e.getBoundingClientRect().top-o.top)*c).sort((e,t)=>e-t);if(!d.length)return;let h=d.reduce((e,t,r)=>Math.abs(t-i)<Math.abs(d[e]-i)?r:e,0),f=d[h],p=t.touches[0];l={identifier:p.identifier,x:p.clientX,y:p.clientY,distance:0,axis:null,position:i,anchor:f,previous:d[h-1]??(e.options.infinite?f-a.clientHeight:f),next:d[h+1]??(e.options.infinite?f+a.clientHeight:f)}},d=t=>{if(!l)return;if(1!==t.touches.length||s())return void u();let r=t.touches[0];if(r.identifier!==l.identifier)return;let n=r.clientX-l.x,i=l.y-r.clientY;if((n||i)&&(l.axis??=Math.abs(i)>Math.abs(n)?"vertical":"horizontal","vertical"===l.axis)){if(!t.cancelable)return void u();t.preventDefault(),l.distance=i,a.setAttribute(ed.SCROLL_DRAGGING_ATTRIBUTE,""),e.scrollTo(Math.max(l.previous,Math.min(l.next,l.position+i)),{immediate:!0,programmatic:!1,userData:{initiator:"listing-drag"}})}},h=t=>{let r=l;if(u(),!r||t.touches.length||"vertical"!==r.axis||s())return;let a=32>Math.abs(r.distance)?r.anchor:r.distance>0?r.next:r.previous;e.scrollTo(a,{duration:n,easing:i,programmatic:!1,userData:{initiator:"snap"}})};return t.setAttribute(ep,""),t.addEventListener("touchstart",c,{passive:!0}),t.addEventListener("touchmove",d,{passive:!1}),t.addEventListener("touchend",h,{passive:!0}),t.addEventListener("touchcancel",u,{passive:!0}),()=>{u(),t.removeEventListener("touchstart",c),t.removeEventListener("touchmove",d),t.removeEventListener("touchend",h),t.removeEventListener("touchcancel",u),null===o?t.removeAttribute(ep):t.setAttribute(ep,o)}})(D,e,P,_.LISTING_TOUCH_CONFIG)},[D,l,x,P]),(0,ef.useNativeSnap)(D,P,n&&!x,l?_.LISTING_TOUCH_CONFIG:{}),!r)return null;let k=x&&o?o:r.description,G=l?"anonymous":void 0,N=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(R,{ref:e=>{S.current=e,C.current?.()},imageLoading:E,crossOrigin:G,heading:r.heading,description:k,backgroundImage:r.backgroundImage},"intro"),x?null:T.map((o,l)=>(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)("ul",{"aria-hidden":l>0||void 0,children:e.map((r,i)=>{let{buildName:s,buildCode:u,slug:d,shortDescription:h,available:f,price:p,featuredImage:m}=r;if(!s||!u||!d||!h||!m?.desktop||!m.mobile)return null;let v=l*e.length+i;return(0,t.jsx)("li",{children:(0,t.jsx)(eu,{ref:e=>{L.current[v]=e,e&&C.current?.()},buildName:s,buildCode:u,slug:d,shortDescription:h,available:f,comingSoon:r.comingSoon,price:p,basePath:a,imageLoading:E,imageEnabled:!n||0===i||b&&i===e.length-1||c.has(g[i]),isLoopCopy:l>0,crossOrigin:G,depthMapUrl:r.depthMapUrl,desktopImage:m.desktop,mobileImage:m.mobile})},`${o}-${g[i]}`)})}),b?(0,t.jsx)(R,{ref:U[l],imageLoading:E,crossOrigin:G,isLoopCopy:l>0,heading:r.heading,description:r.description,backgroundImage:r.backgroundImage,isSeamRepeat:!0}):null]},o))]});return(0,t.jsx)(eg,{ref:w,"data-listing-route":a.replace(/\/+$/,""),children:l?(0,t.jsx)(q,{onTuning:u,children:N}):N})};ev.displayName="BuildsListing",e.s(["default",0,ev],927977)}]);