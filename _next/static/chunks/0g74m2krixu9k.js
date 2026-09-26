(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,815711,e=>{"use strict";function t(e,t){let r;return function(...i){clearTimeout(r),r=setTimeout(()=>{r=void 0,e.apply(this,i)},t)}}var r=class{element;options;align;rect={};wrapperResizeObserver;resizeObserver;debouncedWrapperResize;constructor(e,{align:r=["start"],ignoreSticky:i=!0,ignoreTransform:n=!1}={}){this.element=e,this.options={align:r,ignoreSticky:i,ignoreTransform:n},this.align=[r].flat(),this.debouncedWrapperResize=t(this.onWrapperResize,500),this.wrapperResizeObserver=new ResizeObserver(this.debouncedWrapperResize),this.wrapperResizeObserver.observe(document.body),this.onWrapperResize(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.element),this.setRect({width:this.element.offsetWidth,height:this.element.offsetHeight})}destroy(){this.wrapperResizeObserver.disconnect(),this.resizeObserver.disconnect()}setRect({top:e,left:t,width:r,height:i,element:n}={}){e=e??this.rect.top,t=t??this.rect.left,r=r??this.rect.width,i=i??this.rect.height,n=n??this.rect.element,(e!==this.rect.top||t!==this.rect.left||r!==this.rect.width||i!==this.rect.height||n!==this.rect.element)&&(this.rect.top=e,this.rect.y=e,this.rect.width=r,this.rect.height=i,this.rect.left=t,this.rect.x=t,this.rect.bottom=e+i,this.rect.right=t+r)}onWrapperResize=()=>{let e,t;if(this.options.ignoreSticky&&function e(t){"sticky"===getComputedStyle(t).position&&(t.style.setProperty("position","static"),t.dataset.sticky="true"),t.offsetParent&&e(t.offsetParent)}(this.element),this.options.ignoreTransform)e=function e(t,r=0){let i=r+t.offsetTop;return t.offsetParent?e(t.offsetParent,i):i}(this.element),t=function e(t,r=0){let i=r+t.offsetLeft;return t.offsetParent?e(t.offsetParent,i):i}(this.element);else{let r=this.element.getBoundingClientRect();e=r.top+function e(t,r=0){let i=r+t.scrollTop;return t.offsetParent?e(t.offsetParent,i):i+window.scrollY}(this.element),t=r.left+function e(t,r=0){let i=r+t.scrollLeft;return t.offsetParent?e(t.offsetParent,i):i+window.scrollX}(this.element)}this.options.ignoreSticky&&function e(t){t?.dataset?.sticky==="true"&&(t.style.removeProperty("position"),delete t.dataset.sticky),t.offsetParent&&e(t.offsetParent)}(this.element),this.setRect({top:e,left:t})};onResize=([e])=>{if(!e?.borderBoxSize[0])return;let t=e.borderBoxSize[0].inlineSize,r=e.borderBoxSize[0].blockSize;this.setRect({width:t,height:r})}};let i=0;var n=class{options;elements=new Map;snaps=new Map;viewport={width:window.innerWidth,height:window.innerHeight};isStopped=!1;onSnapDebounced;currentSnapIndex;constructor(e,{type:r="proximity",lerp:i,easing:n,duration:a,distanceThreshold:o="50%",debounce:s=500,onSnapStart:l,onSnapComplete:c}={}){this.lenis=e,window.lenis||(window.lenis={}),window.lenis.snap=!0,this.options={type:r,lerp:i,easing:n,duration:a,distanceThreshold:o,debounce:s,onSnapStart:l,onSnapComplete:c},this.onWindowResize(),window.addEventListener("resize",this.onWindowResize),this.onSnapDebounced=t(this.onSnap,this.options.debounce),this.lenis.on("virtual-scroll",this.onSnapDebounced)}destroy(){this.lenis.off("virtual-scroll",this.onSnapDebounced),window.removeEventListener("resize",this.onWindowResize),this.elements.forEach(e=>{e.destroy()})}start(){this.isStopped=!1}stop(){this.isStopped=!0}add(e){let t=i++;return this.snaps.set(t,{value:e}),()=>this.snaps.delete(t)}addElement(e,t={}){let n=i++;return this.elements.set(n,new r(e,t)),()=>this.elements.delete(n)}addElements(e,t={}){let r=[...e].map(e=>this.addElement(e,t));return()=>{r.forEach(e=>{e()})}}onWindowResize=()=>{this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight};computeSnaps=()=>{let{isHorizontal:e}=this.lenis,t=[...this.snaps.values()];return this.elements.forEach(({rect:r,align:i})=>{let n;i.forEach(i=>{"start"===i?n=r.top:"center"===i?n=e?r.left+r.width/2-this.viewport.width/2:r.top+r.height/2-this.viewport.height/2:"end"===i&&(n=e?r.left+r.width-this.viewport.width:r.top+r.height-this.viewport.height),"number"==typeof n&&t.push({value:Math.ceil(n)})})}),t=t.sort((e,t)=>Math.abs(e.value)-Math.abs(t.value))};previous(){this.goTo((this.currentSnapIndex??0)-1)}next(){this.goTo((this.currentSnapIndex??0)+1)}goTo(e){let t=this.computeSnaps();if(0===t.length)return;this.currentSnapIndex=Math.max(0,Math.min(e,t.length-1));let r=t[this.currentSnapIndex];void 0!==r&&this.lenis.scrollTo(r.value,{duration:this.options.duration,easing:this.options.easing,lerp:this.options.lerp,lock:"lock"===this.options.type,userData:{initiator:"snap"},onStart:()=>{this.options.onSnapStart?.({index:this.currentSnapIndex,...r})},onComplete:()=>{this.options.onSnapComplete?.({index:this.currentSnapIndex,...r})}})}get distanceThreshold(){if("mandatory"===this.options.type)return 1/0;let{isHorizontal:e}=this.lenis,t=e?"width":"height";return"string"==typeof this.options.distanceThreshold&&this.options.distanceThreshold.endsWith("%")?Number(this.options.distanceThreshold.replace("%",""))/100*this.viewport[t]:"number"==typeof this.options.distanceThreshold?this.options.distanceThreshold:this.viewport[t]}onSnap=e=>{let t;if(this.isStopped||"touchmove"===e.event.type||"lock"===this.options.type&&this.lenis.userData?.initiator==="snap")return;let{scroll:r,isHorizontal:i}=this.lenis,n=i?e.deltaX:e.deltaY;r=Math.ceil(this.lenis.scroll+n);let a=this.computeSnaps();if(0===a.length)return;let o=a.findLastIndex(({value:e})=>e<r),s=a.findIndex(({value:e})=>e>r);if("lock"===this.options.type)n>0?t=s:n<0&&(t=o);else{let e=a[o],i=e?Math.abs(r-e.value):1/0,n=a[s];t=i<(n?Math.abs(r-n.value):1/0)?o:s}if(void 0===t||-1===t)return;t=Math.max(0,Math.min(t,a.length-1));let l=a[t];Math.abs(r-l.value)<=this.distanceThreshold&&this.goTo(t)};resize(){this.elements.forEach(e=>{e.onWrapperResize()})}};e.s(["default",0,n])},124821,135741,e=>{"use strict";var t=e.i(843476),r=e.i(500932);let i=null;var n=e.i(271645),a=e.i(575509),o=e.i(212960),s=e.i(951847),l=e.i(997053);let c=[...Array(25)].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.02*t}s; }`).join("\n"),d=({$isFullWidth:e})=>l.css`
    @property --gradient-angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
        }

        @property --gradient-angle-offset {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
        }

        @property --gradient-percent {
            syntax: "<percentage>";
            initial-value: 5%;
            inherits: false;
        }

        @property --gradient-shine {
            syntax: "<color>";
            initial-value: white;
            inherits: false;
        }

        @keyframes gradient-angle {
            to {
                --gradient-angle: 360deg;
            }
        }

        @keyframes shimmer {
            to {
                rotate: 360deg;
            }
        }

        --ease: ease-in-out;
        --dur: 0.5s;
        --play-state: paused;

        position: relative;
        display: grid;
        place-items: center;
        white-space: nowrap;

        width: ${e?"100%":"max-content"};
        padding:  ${(0,a.getGap)("sm")} ${(0,a.getGap)("l")};

        border: 1px solid ${(0,a.getBrand)("bc5",10)};
        background: ${(0,a.getGlobal)("black",10)};
        text-decoration: none;
        transition: border-color var(--ease) var(--dur);

        ${a.bp.l`
            backdrop-filter: blur(4px);
        `}

        

        &[disabled],
        &[aria-disabled='true'] {
            opacity: 0.4;
            pointer-events: none;

            // Pause shimmer and gradient animations if the button is disabled or aria-disabled
            > i {
                animation-play-state: paused;
                opacity: 0;
            }
        }


        &:focus-visible {
            outline: 1px dashed ${(0,a.getBrand)("bc5",60)};
            outline-offset: 2px;
            border-color: ${(0,a.getBrand)("bc3",40)};
        }
   


        @media (hover: hover) and (pointer: fine) {
            &:hover {
                cursor: pointer;
                border-color: ${(0,a.getBrand)("bc5",40)};
                
                > span {
                    opacity: 0.6;

                    span { transform: translateY(4em) }
                }
            }
        }
   

        > span {
            ${o.captionL}

            display: block;
            position: relative;
            z-index: 1;
            overflow: clip;

            transition: opacity var(--ease) var(--dur), letter-spacing var(--ease) var(--dur);


            span {
                display: inline-block;
                padding: 0;
                margin: 0;
                text-shadow: ${(0,a.getBrand)("bc5",60)} 0px -4em 0px;
                transition: transform 0.5s ${(0,a.getEase)("bezzy2")};
            
                ${c}
            }
        }

        > i {
            --duration: 5s;
            --stroke: 1px;
            --offset-start: 25%;
            --offset-end: 75%;

            position: absolute;
            inset: calc(var(--stroke) * -1);
            z-index: 0;
            mix-blend-mode: screen;
            pointer-events: none;

            padding: var(--stroke);
            background: conic-gradient(
                from calc(var(--gradient-angle) - var(--gradient-angle-offset)) at center,
                transparent calc(var(--offset-start) - var(--gradient-percent) * 2),
                ${(0,a.getBrand)("bc5",0)} calc(var(--offset-start) - var(--gradient-percent)),
                white var(--offset-start),
                ${(0,a.getBrand)("bc5",0)} calc(var(--offset-start) + var(--gradient-percent)),
                transparent calc(var(--offset-start) + var(--gradient-percent) * 2),
                transparent calc(var(--offset-end) - var(--gradient-percent) * 2),
                ${(0,a.getBrand)("bc5",0)} calc(var(--offset-end) - var(--gradient-percent)),
                white var(--offset-end),
                ${(0,a.getBrand)("bc5",0)}	 calc(var(--offset-end) + var(--gradient-percent)),
                transparent calc(var(--offset-end) + var(--gradient-percent) * 2)
            );

            /* Ring mask — only the stroke is painted; centre stays fully transparent. */
            -webkit-mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            mask-composite: exclude;

            transition:
                opacity 0.5s var(--ease),
                var(--gradient-angle-offset) var(--duration) var(--ease),
                var(--gradient-percent) var(--duration) var(--ease),
                var(--gradient-shine) var(--duration) var(--ease);

            animation: gradient-angle 4.5s linear infinite var(--play-state);

            @media (prefers-reduced-motion: reduce) {
                animation: none;
            }
        }
`,u=(0,l.default)(s.Link).withConfig({componentId:"sc-6f2721c4-0"})(({$isFullWidth:e})=>l.css`
        ${d({$isFullWidth:e})}
    `),p=l.default.button.withConfig({componentId:"sc-6f2721c4-1"})(({$isFullWidth:e})=>l.css`
        ${d({$isFullWidth:e})}
    `);e.s(["Button",0,p,"Jacket",0,u,"sharedStyles",0,d],135741);let h=e=>{let a,o,s,l,c=(0,r.c)(6),d=(0,n.useRef)(null),h=(0,n.useRef)(null);if(c[0]!==e.isButton?(a=()=>{let t=e.isButton?d.current:h.current;if(t){let e;return(e=i||(i=new IntersectionObserver(e=>{for(let t of e)t.target instanceof HTMLElement&&t.target.style.setProperty("--play-state",t.isIntersecting?"running":"paused")},{threshold:0}))).observe(t),()=>e.unobserve(t)}},o=[e.isButton],c[0]=e.isButton,c[1]=a,c[2]=o):(a=c[1],o=c[2]),(0,n.useEffect)(a,o),c[3]!==e){l=Symbol.for("react.early_return_sentinel");e:{let r=[];for(let i=0;i<e.label.length;i+=1){let n=e.label[i];r.push((0,t.jsx)("span",{children:" "===n?" ":n},`${e.label}-${i}`))}let i=f;if(e.isButton){let{aria:n,label:a,onClick:o,isFullWidth:s,type:c,disabled:u}=e,h=void 0!==u&&u;l=(0,t.jsx)(p,{ref:d,type:void 0===c?"button":c,"aria-label":n??a,"aria-disabled":h,$isFullWidth:void 0!==s&&s,disabled:h,onClick:o,children:i(r)});break e}let{aria:n,label:a,to:o,onClick:c,isFullWidth:m,transitionAwaitsContent:g,prefetch:v,tabIndex:b}=e;s=(0,t.jsx)(u,{ref:h,href:o,"aria-label":n??a,$isFullWidth:void 0!==m&&m,onClick:c,transitionAwaitsContent:g,prefetch:v,tabIndex:b,children:i(r)})}c[3]=e,c[4]=s,c[5]=l}else s=c[4],l=c[5];return l!==Symbol.for("react.early_return_sentinel")?l:s};function f(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)("i",{"aria-hidden":"true"})]})}h.displayName="Button",e.s(["default",0,h],124821)},576978,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(124821),n=e.i(271645),a=e.i(174080);let o={parallaxStrength:.016,parallaxFocus:.45,lightRadius:1.05,lightIntensity:1.9,lightFalloff:2,ambient:.16,depthInfluence:.55,floodLight:1,easing:.065,startPos:[.5,.5],spotEaseIn:.045,spotEaseOut:.025,scrollFloodDistance:.5,scrollParallaxFrom:0,scrollParallaxTo:1,scrollDarkStart:.25,scrollLightBy:.5},s=`
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
}`,c=["u_image","u_depth","u_res","u_imgAspect","u_mouse","u_parallaxStrength","u_parallaxFocus","u_lightRadius","u_lightIntensity","u_lightFalloff","u_ambient","u_depthInfluence","u_floodLight","u_spot"],d=e=>new Promise((t,r)=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>t(i),i.onerror=()=>r(Error(`Failed to load texture: ${e}`)),i.src=e}),u=(e,t,r)=>{let i=e.createShader(t);if(!i)throw Error("Unable to create shader");if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i);throw e.deleteShader(i),Error(t??"Shader compile failed")}return i},p=(e,t,r)=>{let i=e.createTexture();return e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),i},h=async({canvas:e,imageSrc:t,imageElement:r,depthSrc:i,config:n,mode:a="pointer",signal:h,onFirstPaint:f,onContextLost:m})=>{let g={...o,...n},v="scroll"===a,b=e.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,stencil:!1});if(!b)return null;let[x,y]=await Promise.all([r?r.decode().then(()=>r):d(t),d(i)]);if(h?.aborted)return null;let w=b.createProgram();if(!w)return null;let S=u(b,b.VERTEX_SHADER,s),E=u(b,b.FRAGMENT_SHADER,l);if(b.attachShader(w,S),b.attachShader(w,E),b.linkProgram(w),!b.getProgramParameter(w,b.LINK_STATUS))throw Error(b.getProgramInfoLog(w)??"Program link failed");b.useProgram(w);let _=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,_),b.bufferData(b.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),b.STATIC_DRAW);let T=b.getAttribLocation(w,"a_pos");b.enableVertexAttribArray(T),b.vertexAttribPointer(T,2,b.FLOAT,!1,0,0);let R=Object.fromEntries(c.map(e=>[e,b.getUniformLocation(w,e)])),k=p(b,0,x),L=p(b,1,y);b.uniform1i(R.u_image,0),b.uniform1i(R.u_depth,1),b.uniform1f(R.u_imgAspect,x.naturalWidth/x.naturalHeight);let I=()=>{b.uniform1f(R.u_parallaxStrength,g.parallaxStrength),b.uniform1f(R.u_parallaxFocus,g.parallaxFocus),b.uniform1f(R.u_lightRadius,g.lightRadius),b.uniform1f(R.u_lightIntensity,g.lightIntensity),b.uniform1f(R.u_lightFalloff,g.lightFalloff),b.uniform1f(R.u_ambient,g.ambient),b.uniform1f(R.u_depthInfluence,g.depthInfluence),b.uniform1f(R.u_floodLight,g.floodLight)};I();let A={x:g.startPos[0],y:g.startPos[1]},P={x:g.startPos[0],y:g.startPos[1]},C=0,$=0,z=!1,j=null,F=0,M=null,B=null,D=0,O=0,W=!1,N=!1,G=!0,U=!1,H=!1,Y=()=>{H||(H=!0,f?.())},X=()=>{let t=Math.min(window.devicePixelRatio||1,2),r=Math.round(e.clientWidth*t),i=Math.round(e.clientHeight*t);r&&i&&(e.width!==r||e.height!==i)&&(e.width=r,e.height=i,b.viewport(0,0,r,i),b.uniform2f(R.u_res,r,i),U=!0,G=!0)},q=()=>{if(!U)return;(()=>{if(!j)return;let t=e.clientWidth,r=e.clientHeight;if(!t||!r)return;let i=e.getBoundingClientRect(),n=i.left+i.width/2-t/2,a=i.top+i.height/2-r/2;P.x=(j.x-n)/t,P.y=1-(j.y-a)/r})(),z&&(z=!1,A.x=P.x,A.y=P.y,G=!0);let t=P.x-A.x,r=P.y-A.y,i=$-C;(!(5e-4>Math.abs(t)&&5e-4>Math.abs(r)&&5e-4>Math.abs(i))||G)&&(A.x+=t*g.easing,A.y+=r*g.easing,C+=i*(i>0?g.spotEaseIn:g.spotEaseOut),b.uniform2f(R.u_mouse,A.x,A.y),b.uniform1f(R.u_spot,C),b.drawArrays(b.TRIANGLES,0,3),G=!1,Y())},V=()=>{if(!U)return;let{scrollParallaxFrom:e,scrollParallaxTo:t,scrollDarkStart:r,scrollLightBy:i}=g,n=i>0?Math.min(D/i,1):1;b.uniform2f(R.u_mouse,.5,e+(t-e)*D),b.uniform1f(R.u_spot,0),b.uniform1f(R.u_floodLight,r+(g.floodLight-r)*n),b.drawArrays(b.TRIANGLES,0,3),G=!1,Y()},K=()=>v?V():q(),Z=()=>{O=requestAnimationFrame(Z),q()},J=()=>{O&&(cancelAnimationFrame(O),O=0)},Q=(e,t)=>{C<.05&&(z=!0),j={x:e,y:t},$=1,F=0},ee=e=>Q(e.clientX,e.clientY),et=e=>{let t=e.touches[0];t&&Q(t.clientX,t.clientY)},er=e=>{let t,r=(t=e.target)instanceof HTMLElement?t.scrollTop:window.scrollY||document.scrollingElement?.scrollTop||0,i=g.scrollFloodDistance*window.innerHeight;null!==M&&e.target===B&&(F=Math.min(F+Math.abs(r-M),i)),M=r,B=e.target,F>=i&&($=0)},ei=e=>{e.preventDefault(),W=!1,J(),m?.()},en=new ResizeObserver(()=>{X(),O||K()});return en.observe(e),e.addEventListener("webglcontextlost",ei),v||(window.addEventListener("pointermove",ee,{passive:!0}),window.addEventListener("touchmove",et,{passive:!0}),window.addEventListener("scroll",er,{capture:!0,passive:!0})),X(),K(),{setActive:e=>{if(!N&&e!==W){if(W=e,e){X(),G=!0,O||N||v||(O=requestAnimationFrame(Z));return}J(),C=0,$=0,F=0,M=null,B=null,G=!0}},setScrollProgress:e=>{!N&&v&&(D=Math.min(Math.max(e,0),1),V())},setConfig:e=>{N||(Object.assign(g,e),I(),G=!0,K())},destroy:()=>{N||(N=!0,W=!1,J(),en.disconnect(),e.removeEventListener("webglcontextlost",ei),window.removeEventListener("pointermove",ee),window.removeEventListener("touchmove",et),window.removeEventListener("scroll",er,{capture:!0}),b.deleteTexture(k),b.deleteTexture(L),b.deleteBuffer(_),b.deleteShader(S),b.deleteShader(E),b.deleteProgram(w),b.getExtension("WEBGL_lose_context")?.loseContext())}}};var f=e.i(575509),m=e.i(997053);let g=m.default.div.withConfig({componentId:"sc-cda082ca-0"})(()=>m.css`
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
	`),y=[{key:"parallaxStrength",label:"Parallax strength",min:0,max:.15,step:.001},{key:"parallaxFocus",label:"Parallax focus",min:0,max:1,step:.01},{key:"depthInfluence",label:"Depth influence",min:0,max:1,step:.01}],w=[{key:"scrollParallaxFrom",label:"Sweep from (y)",min:0,max:1,step:.01},{key:"scrollParallaxTo",label:"Sweep to (y)",min:0,max:1,step:.01},{key:"scrollDarkStart",label:"Start brightness",min:0,max:1,step:.01},{key:"scrollLightBy",label:"Lit by (progress)",min:.05,max:1,step:.01},{key:"floodLight",label:"Final brightness",min:0,max:2,step:.01}],S=[{key:"lightRadius",label:"Light radius",min:.2,max:3,step:.01},{key:"lightIntensity",label:"Light intensity",min:0,max:4,step:.05},{key:"lightFalloff",label:"Light falloff",min:.5,max:6,step:.1},{key:"ambient",label:"Ambient",min:0,max:1,step:.01},{key:"floodLight",label:"Flood brightness",min:0,max:2,step:.01},{key:"easing",label:"Cursor easing",min:.01,max:.3,step:.005},{key:"spotEaseIn",label:"Spot ease in",min:.005,max:.2,step:.005},{key:"spotEaseOut",label:"Flood ease out",min:.005,max:.2,step:.005},{key:"scrollFloodDistance",label:"Flood after (screens)",min:0,max:2,step:.05}],E=e=>{let i,s,l,c,d,u,p,h,f,m,g,E,T,R,k,L,I,A=(0,r.c)(38),{mode:P,base:C,onChange:$}=e,z="scroll"===P?w:S;A[0]!==z?(i=[...y,...z],A[0]=z,A[1]=i):i=A[1];let j=i;A[2]!==C?(s={...o,...C},A[2]=C,A[3]=s):s=A[3];let F=s,[M,B]=(0,n.useState)(F),[D,O]=(0,n.useState)(!0),[W,N]=(0,n.useState)(!1),[G,U]=(0,n.useState)(!1);A[4]===Symbol.for("react.memo_cache_sentinel")?(l=(e,t)=>{B(r=>({...r,[e]:t}))},A[4]=l):l=A[4];let H=l;A[5]!==F?(c=()=>B(F),A[5]=F,A[6]=c):c=A[6];let Y=c;A[7]!==j||A[8]!==M?(d=()=>{let e=j.reduce((e,t)=>(e[t.key]=M[t.key],e),{});navigator.clipboard?.writeText(JSON.stringify(e,null,2)).then(()=>U(!0),()=>U(!1))},A[7]=j,A[8]=M,A[9]=d):d=A[9];let X=d;if(A[10]===Symbol.for("react.memo_cache_sentinel")?(u=()=>N(!0),p=[],A[10]=u,A[11]=p):(u=A[10],p=A[11]),(0,n.useEffect)(u,p),A[12]!==$||A[13]!==M?(f=()=>$(M),h=[M,$],A[12]=$,A[13]=M,A[14]=h,A[15]=f):(h=A[14],f=A[15]),(0,n.useEffect)(f,h),A[16]!==G?(m=()=>{if(!G)return;let e=window.setTimeout(()=>U(!1),1200);return()=>window.clearTimeout(e)},g=[G],A[16]=G,A[17]=m,A[18]=g):(m=A[17],g=A[18]),(0,n.useEffect)(m,g),!W)return null;A[19]!==P?(E=(0,t.jsxs)("strong",{children:["depth · ",P]}),A[19]=P,A[20]=E):E=A[20],A[21]===Symbol.for("react.memo_cache_sentinel")?(T=()=>O(_),A[21]=T):T=A[21];let q=D?"hide":"show";return A[22]!==q?(R=(0,t.jsx)("button",{type:"button",onClick:T,children:q}),A[22]=q,A[23]=R):R=A[23],A[24]!==E||A[25]!==R?(k=(0,t.jsxs)(b,{children:[E,R]}),A[24]=E,A[25]=R,A[26]=k):k=A[26],A[27]!==G||A[28]!==j||A[29]!==X||A[30]!==Y||A[31]!==D||A[32]!==M?(L=D?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{children:j.map(e=>(0,t.jsxs)("label",{children:[(0,t.jsxs)("span",{children:[e.label,(0,t.jsx)("em",{children:M[e.key].toFixed(3)})]}),(0,t.jsx)("input",{type:"range",min:e.min,max:e.max,step:e.step,value:M[e.key],onChange:t=>H(e.key,Number(t.target.value))})]},e.key))}),(0,t.jsxs)(b,{children:[(0,t.jsx)("button",{type:"button",onClick:Y,children:"reset"}),(0,t.jsx)("button",{type:"button",onClick:X,children:G?"copied":"copy config"})]})]}):null,A[27]=G,A[28]=j,A[29]=X,A[30]=Y,A[31]=D,A[32]=M,A[33]=L):L=A[33],A[34]!==D||A[35]!==k||A[36]!==L?(I=(0,a.createPortal)((0,t.jsxs)(v,{"data-open":D,children:[k,L]}),document.body),A[34]=D,A[35]=k,A[36]=L,A[37]=I):I=A[37],I};function _(e){return!e}E.displayName="DepthParallaxControls";let T=(0,n.forwardRef)(({imageSrc:e,imageElement:r,depthSrc:i,isActive:a=!0,mode:o="pointer",config:s,className:l},c)=>{let d=(0,n.useRef)(null),u=(0,n.useRef)(null),p=(0,n.useRef)(s);p.current=s;let f=(0,n.useRef)(0),[m,v]=(0,n.useState)(!1),[b,x]=(0,n.useState)(!1),[y,w]=(0,n.useState)(!1),S=(0,n.useCallback)(e=>{u.current?.setConfig(e)},[]);return(0,n.useImperativeHandle)(c,()=>({setScrollProgress:e=>{f.current=e,u.current?.setScrollProgress(e)}}),[]),(0,n.useEffect)(()=>{w(new URLSearchParams(window.location.search).has("depth-debug"))},[]),(0,n.useEffect)(()=>{let t=d.current;if(!t)return;let n=document.createElement("canvas");t.appendChild(n);let a=new AbortController;return h({canvas:n,imageSrc:e,imageElement:r,depthSrc:i,mode:o,config:p.current,signal:a.signal,onFirstPaint:()=>x(!0),onContextLost:()=>{v(!1),x(!1)}}).then(e=>{if(e){if(a.signal.aborted)return void e.destroy();u.current=e,e.setScrollProgress(f.current),v(!0)}}).catch(()=>v(!1)),()=>{a.abort(),u.current?.destroy(),u.current=null,n.remove(),v(!1),x(!1)}},[e,r,i,o]),(0,n.useEffect)(()=>{u.current?.setActive(a&&m)},[a,m]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g,{ref:d,className:l,"data-ready":b,"aria-hidden":"true"}),y?(0,t.jsx)(E,{mode:o,base:s,onChange:S}):null]})});T.displayName="DepthParallax";var R=e.i(481293),k=e.i(89835),L=e.i(101384),I=e.i(748656),A=e.i(229352),P=e.i(607561),C=e.i(255981),$=e.i(494473),z=e.i(989970),j=e.i(883495),F=e.i(255667),M=e.i(212960);let B=(0,m.default)(f.Div).attrs({as:"footer"}).withConfig({componentId:"sc-a2c8839e-0"})(()=>m.css`
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
	`),D=(0,m.default)(f.Div).attrs({as:"aside"}).withConfig({componentId:"sc-a2c8839e-1"})(()=>m.css`
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
	`),O=(0,m.default)(f.Div).withConfig({componentId:"sc-a2c8839e-2"})(()=>m.css`
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
	`),W=(0,m.default)(f.Div).withConfig({componentId:"sc-a2c8839e-3"})(()=>m.css`
		h2 {
			${M.headlineL}

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
	`),G=(0,m.default)(f.Div).attrs({as:"p"}).withConfig({componentId:"sc-a2c8839e-5"})(()=>m.css`
		${M.captionL}	

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
		
	`),H=[...Array(12)].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.02*t}s; }`).join("\n"),Y=m.default.button.withConfig({componentId:"sc-a2c8839e-7"})(()=>m.css`
		${M.captionL}

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
	`),X=e=>{let i,n,a,o=(0,r.c)(5),{lenis:s}=e;o[0]!==s?(i=()=>{s?.scrollTo(0,{duration:1.2})},o[0]=s,o[1]=i):i=o[1];let l=i;return o[2]===Symbol.for("react.memo_cache_sentinel")?(n=(0,t.jsx)("span",{children:"Back to Top".split("").map(q)}),o[2]=n):n=o[2],o[3]!==l?(a=(0,t.jsx)(Y,{type:"button","aria-label":"Back to Top",onClick:l,children:n}),o[3]=l,o[4]=a):a=o[4],a};function q(e,r){return(0,t.jsx)("span",{children:" "===e?" ":e},`${e}_${r.toString()}`)}X.displayName="BackToTop";var V=e.i(221781),K=e.i(486861),Z=e.i(189897),J=e.i(797489),Q=e.i(274879),ee=e.i(875324);let et="top bottom",er="bottom bottom",ei="top 75%",en=e=>{let i,a,o,s,l,c=(0,r.c)(19),{heading:d,editAttr:u,triggerRef:p}=e,{isReducedMotion:h}=(0,n.use)(L.PerformanceContext),f=(0,n.useRef)(null),m=(0,F.useLenis)();c[0]!==d?(i=(0,Z.cleanSanityString)(d)??"",c[0]=d,c[1]=i):i=c[1];let g=i,v=(0,Q.useSplitTextRecovery)(f,g);c[2]!==g?(a=(0,K.escapeHtml)(g),c[2]=g,c[3]=a):a=c[3];let b=(0,J.useInnerHtml)(a);return(c[4]!==g||c[5]!==h||c[6]!==m?.rootElement||c[7]!==p?(o=()=>{let e=f.current,t=m?.rootElement;if(!e||!g||!t)return;let r=ee.SplitText.create(e,{type:"words"}),{words:i}=r;if(!i.length)return()=>r.revert();if(h)return z.default.set(i,{autoAlpha:1,scale:1,filter:"blur(0px)",display:"inline-block",verticalAlign:"top",willChange:"auto"}),()=>r.revert();(e=>{if(!e.length)return;let t=1/0,r=1/0,i=-1/0,n=-1/0;for(let a of e)t=Math.min(t,a.offsetLeft),r=Math.min(r,a.offsetTop),i=Math.max(i,a.offsetLeft+a.offsetWidth),n=Math.max(n,a.offsetTop+a.offsetHeight);let a=(t+i)/2,o=(r+n)/2;for(let t of e)z.default.set(t,{transformOrigin:`${a-t.offsetLeft}px ${o-t.offsetTop}px`,force3D:!0})})(i),z.default.set(i,{autoAlpha:0,scale:V.TITLE_SCALE_START,filter:`blur(${V.TITLE_BLUR_START}px)`,display:"inline-block",verticalAlign:"top",willChange:"opacity, transform, filter"});let n={progress:0},a=z.default.to(n,{progress:1,duration:.9,ease:"power2.out",paused:!0,onUpdate:()=>(e=>{for(let[t,r]of i.entries()){let{scale:n,opacity:a,blur:o}=(0,V.getIntroGrowInWordValues)(e,t,i.length);z.default.set(r,{autoAlpha:a,scale:n,filter:`blur(${o}px)`})}})(n.progress),onComplete:()=>z.default.set(i,{willChange:"auto"})}),o=j.default.create({trigger:p?.current??e,scroller:t,start:ei,once:!0,onEnter:()=>a.play()});return o.progress>0&&a.play(),()=>{o.kill(),a.kill(),r.revert()}},c[4]=g,c[5]=h,c[6]=m?.rootElement,c[7]=p,c[8]=o):o=c[8],c[9]!==g||c[10]!==h||c[11]!==m||c[12]!==v||c[13]!==p?(s={scope:f,dependencies:[g,h,m,v,p]},c[9]=g,c[10]=h,c[11]=m,c[12]=v,c[13]=p,c[14]=s):s=c[14],(0,P.useAnimation)(o,s),g)?(c[15]!==g||c[16]!==u||c[17]!==b?(l=(0,t.jsx)(W,{children:(0,t.jsx)("h2",{ref:f,"data-sanity":u,dangerouslySetInnerHTML:b},g)}),c[15]=g,c[16]=u,c[17]=b,c[18]=l):l=c[18],l):null};en.displayName="CtaHeading";var ea=e.i(371136),eo=e.i(676842);let es={parallaxStrength:.05},el=e=>{let a,o,s,l,c,d,u,p,h,f,m,g,v,b,x,y,w,S,E,_,M,W,H,Y,q=(0,r.c)(72),{heading:V,headingEditAttr:K,subheading:Z,mobile:J,desktop:Q,isContact:ee}=e,{isReducedMotion:el}=(0,n.use)(L.PerformanceContext),ed=(0,n.useRef)(null),eu=(0,n.useRef)(null),ep=(0,n.useRef)(null),eh=(0,n.useRef)(null),ef=(0,n.useRef)(null),em=(0,n.useRef)(null),eg=(0,n.useRef)(0),ev=(0,F.useLenis)();q[0]!==ev?(a=e=>(0,A.scrollToForm)(ev,e),q[0]=ev,q[1]=a):a=q[1];let eb=a,ex=(0,C.useIsDesktopViewport)(),[ey,ew]=(0,n.useState)(!1),[eS,eE]=(0,n.useState)(!1),[e_,eT]=(0,n.useState)(null);q[2]===Symbol.for("react.memo_cache_sentinel")?(o=e=>{ef.current=e,e?.setScrollProgress(eg.current)},q[2]=o):o=q[2];let eR=o,ek=!!(Q?.image&&J?.image&&V&&Z),eL=ex?Q:J,eI=eL?.depthMap,eA=!ex;q[3]!==eI||q[4]!==eA?(s=((e,t=!1)=>{var r;let i;return r=t?720:1280,(i=(0,R.resolveSanityImage)(e))?(0,R.urlFor)(i).width(r).fit("max").quality(95).auto("format").url():null})(eI,eA),q[3]=eI,q[4]=eA,q[5]=s):s=q[5];let eP=s,eC=!!eP&&!el,e$=ex?"pointer":"scroll";q[6]!==ek||q[7]!==eS||q[8]!==ev?.rootElement?(l=()=>{let e=ed.current;if(!e||!ek||eS)return;let t=ev?.rootElement??null,r=new IntersectionObserver(e=>{e.some(ec)&&(eE(!0),r.disconnect())},{root:t,rootMargin:`${t?.clientHeight??window.innerHeight}px 0px`});return r.observe(e),()=>r.disconnect()},q[6]=ek,q[7]=eS,q[8]=ev?.rootElement,q[9]=l):l=q[9],q[10]!==ek||q[11]!==eS||q[12]!==ev?(c=[ek,eS,ev],q[10]=ek,q[11]=eS,q[12]=ev,q[13]=c):c=q[13],(0,n.useEffect)(l,c),q[14]!==Q?.image||q[15]!==ek||q[16]!==J?.image?(d=()=>{if(!ek||!Q?.image||!J?.image)return;let e=em.current?.querySelector("img");if(!e)return;let t=()=>{!e.complete||!e.naturalWidth||!e.currentSrc||(0,I.isDeferredImage)(e)||eT(t=>t?.element===e&&t.src===e.currentSrc?t:{element:e,src:e.currentSrc})};return t(),e.addEventListener("load",t),()=>e.removeEventListener("load",t)},q[14]=Q?.image,q[15]=ek,q[16]=J?.image,q[17]=d):d=q[17],q[18]!==Q||q[19]!==ek||q[20]!==J?(u=[Q,J,ek],q[18]=Q,q[19]=ek,q[20]=J,q[21]=u):u=q[21],(0,n.useEffect)(d,u),q[22]!==ek||q[23]!==ev?.rootElement?(p=()=>{let e=ed.current;if(!e||!ek)return;let t=new IntersectionObserver(e=>{let t=e[0];t&&ew(t.isIntersecting)},{root:ev?.rootElement??null});return t.observe(e),()=>t.disconnect()},q[22]=ek,q[23]=ev?.rootElement,q[24]=p):p=q[24],q[25]!==ek||q[26]!==ev?(h=[ev,ek],q[25]=ek,q[26]=ev,q[27]=h):h=q[27],(0,n.useEffect)(p,h),q[28]===Symbol.for("react.memo_cache_sentinel")?(f=()=>ed.current?[ed.current]:[],q[28]=f):f=q[28];let ez=f;return(q[29]===Symbol.for("react.memo_cache_sentinel")?(m=[],g={distanceThreshold:"50%"},q[29]=m,q[30]=g):(m=q[29],g=q[30]),(0,ea.useLenisSnap)(ev,ez,m,g),q[31]===Symbol.for("react.memo_cache_sentinel")?(v={distanceThreshold:"50%"},q[31]=v):v=q[31],(0,eo.useNativeSnap)(ev,ez,!0,v),q[32]!==el||q[33]!==ev?.rootElement?(b=e=>{let{isDesktop:t}=e,r=ed.current,i=eu.current,n=ev?.rootElement;if(!r||!i||!n)return;let a=[];z.default.set(i,{autoAlpha:0}),z.default.to(i,{autoAlpha:1,ease:"none",scrollTrigger:{trigger:r,scroller:n,start:"top bottom",end:"center bottom",scrub:!0,markers:!1}}),t&&z.default.from(i,{scale:1.5,ease:"none",scrollTrigger:{trigger:r,scroller:n,start:et,end:er,scrub:!0}});let o=eh.current;if(o&&!el){z.default.set(o,{autoAlpha:0,y:16});let e=z.default.to(o,{autoAlpha:1,y:0,duration:.6,ease:"power2.out",delay:.7200000000000001,paused:!0}),t=j.default.create({trigger:r,scroller:n,start:ei,once:!0,onEnter:()=>e.play()});t.progress>0&&e.play(),a.push(()=>{t.kill(),e.kill()})}if(t||z.default.from(i,{scale:1.5,transformOrigin:"center bottom",ease:"none",scrollTrigger:{trigger:r,scroller:n,start:et,end:er,scrub:!0}}),!t){let e=j.default.create({trigger:r,scroller:n,start:et,end:er,onUpdate:e=>{eg.current=e.progress,ef.current?.setScrollProgress(e.progress)},onRefresh:e=>{eg.current=e.progress,ef.current?.setScrollProgress(e.progress)}});a.push(()=>e.kill())}return()=>{for(let e of a)e()}},q[32]=el,q[33]=ev?.rootElement,q[34]=b):b=q[34],q[35]!==ee||q[36]!==el||q[37]!==ev?(x={scope:ed,dependencies:[ev,ee,el]},q[35]=ee,q[36]=el,q[37]=ev,q[38]=x):x=q[38],(0,P.useAnimation)(b,x),Q?.image&&J?.image&&V&&Z)?(q[39]!==Q.image||q[40]!==eS||q[41]!==J.image?(y=(0,t.jsx)(k.default,{ref:em,enabled:eS,desktop:Q.image,mobile:J.image,fill:!0,sizes:"100vw",quality:85,crossOrigin:"anonymous"}),q[39]=Q.image,q[40]=eS,q[41]=J.image,q[42]=y):y=q[42],q[43]!==e_||q[44]!==eP||q[45]!==eC||q[46]!==ex||q[47]!==eS||q[48]!==ey||q[49]!==e$?(w=eC&&eS&&e_&&eP?(0,t.jsx)(T,{ref:eR,mode:e$,config:ex?void 0:es,imageSrc:e_.src,imageElement:e_.element,depthSrc:eP,isActive:ey}):null,q[43]=e_,q[44]=eP,q[45]=eC,q[46]=ex,q[47]=eS,q[48]=ey,q[49]=e$,q[50]=w):w=q[50],q[51]!==y||q[52]!==w?(S=(0,t.jsxs)(D,{ref:eu,"aria-hidden":"true",children:[y,w]}),q[51]=y,q[52]=w,q[53]=S):S=q[53],q[54]!==Z?(E=(0,t.jsx)(G,{children:Z}),q[54]=Z,q[55]=E):E=q[55],q[56]!==V||q[57]!==K?(_=(0,t.jsx)(en,{heading:V,editAttr:K,triggerRef:ed}),q[56]=V,q[57]=K,q[58]=_):_=q[58],q[59]!==eb||q[60]!==ee?(M=(0,t.jsx)(N,{ref:eh,children:ee?(0,t.jsx)(i.default,{to:A.FORM_ANCHOR,onClick:eb,label:"Start the conversation",aria:"Go to the enquiry form"}):(0,t.jsx)(i.default,{to:"/branders/contact",label:"Start Your Project",aria:"Go to Contact"})}),q[59]=eb,q[60]=ee,q[61]=M):M=q[61],q[62]!==E||q[63]!==_||q[64]!==M?(W=(0,t.jsx)($.default,{children:(0,t.jsxs)(O,{$l:"2/12",$xl:"3/11",ref:ep,children:[E,_,M]})}),q[62]=E,q[63]=_,q[64]=M,q[65]=W):W=q[65],q[66]!==ev?(H=(0,t.jsx)(U,{children:(0,t.jsx)(X,{lenis:ev})}),q[66]=ev,q[67]=H):H=q[67],q[68]!==S||q[69]!==W||q[70]!==H?(Y=(0,t.jsxs)(B,{ref:ed,"data-global-cta":!0,children:[S,W,H]}),q[68]=S,q[69]=W,q[70]=H,q[71]=Y):Y=q[71],Y):null};function ec(e){return e.isIntersecting}el.displayName="GlobalCta",e.s(["default",0,el],576978)},89835,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(481293),n=e.i(180301),a=e.i(657688),o=e.i(402463),s=e.i(328852),l=e.i(271645),c=e.i(174080);let d=Number.parseInt(n.grid.breakpoints.l??"1024",10),u=(0,l.forwardRef)((e,n)=>{let l,u,p,h,f,m,g,v,b,x,y,w,S,E,_,T,R,k,L,I,A,P,C,$,z,j,F=(0,r.c)(62);F[0]!==e?({desktop:p,mobile:m,fill:h,width:_,height:f,sizes:x,quality:b,enabled:y,preload:v,loading:w,desktopMinWidth:S,desktopInLandscape:E,className:l,crossOrigin:u,...g}=e,F[0]=e,F[1]=l,F[2]=u,F[3]=p,F[4]=h,F[5]=f,F[6]=m,F[7]=g,F[8]=v,F[9]=b,F[10]=x,F[11]=y,F[12]=w,F[13]=S,F[14]=E,F[15]=_):(l=F[1],u=F[2],p=F[3],h=F[4],f=F[5],m=F[6],g=F[7],v=F[8],b=F[9],x=F[10],y=F[11],w=F[12],S=F[13],E=F[14],_=F[15]);let M=void 0===y||y,B=void 0===w?"lazy":w,D=void 0===S?d:S,O=void 0!==E&&E;if(F[16]!==l||F[17]!==u||F[18]!==p||F[19]!==O||F[20]!==D||F[21]!==M||F[22]!==h||F[23]!==f||F[24]!==B||F[25]!==m||F[26]!==g||F[27]!==v||F[28]!==b||F[29]!==n||F[30]!==x||F[31]!==_){C=Symbol.for("react.early_return_sentinel");e:{if(A=(0,i.resolveImageWithAlt)(p),P=(0,i.resolveImageWithAlt)(m),!A||!P){C=null;break e}I=h?{fill:!0}:{width:_??P.width??1200,height:f??P.height??675},R=h?{}:{width:_??A.width??1200,height:f??A.height??675};let e={sizes:x,quality:b,preload:v,loader:o.imageLoader,...I};if(A.src===P.src){C=(0,t.jsx)("picture",{ref:n,className:l,...g,children:(0,t.jsx)(s.default,{enabled:M,image:A,sizes:x,quality:b,preload:v,loading:B,crossOrigin:u,...I})});break e}T=`(min-width: ${D}px)${O?", (orientation: landscape)":""}`;let r=`(max-width: ${D-1}px)${O?" and (orientation: portrait)":""}`,{props:d}=(0,a.getImageProps)({...e,src:A.src,alt:A.alt});if({srcSet:L,sizes:k}=d,v&&M){let{props:t}=(0,a.getImageProps)({...e,src:P.src,alt:P.alt}),{srcSet:i,sizes:n}=t;(0,c.preload)(A.src,{as:"image",fetchPriority:"high",imageSrcSet:L,imageSizes:k,media:T}),(0,c.preload)(P.src,{as:"image",fetchPriority:"high",imageSrcSet:i,imageSizes:n,media:r})}}F[16]=l,F[17]=u,F[18]=p,F[19]=O,F[20]=D,F[21]=M,F[22]=h,F[23]=f,F[24]=B,F[25]=m,F[26]=g,F[27]=v,F[28]=b,F[29]=n,F[30]=x,F[31]=_,F[32]=T,F[33]=R,F[34]=k,F[35]=L,F[36]=I,F[37]=A,F[38]=P,F[39]=C}else T=F[32],R=F[33],k=F[34],L=F[35],I=F[36],A=F[37],P=F[38],C=F[39];if(C!==Symbol.for("react.early_return_sentinel"))return C;F[40]!==T||F[41]!==R||F[42]!==k||F[43]!==L||F[44]!==M?($=M?(0,t.jsx)("source",{media:T,srcSet:L,sizes:k,...R}):null,F[40]=T,F[41]=R,F[42]=k,F[43]=L,F[44]=M,F[45]=$):$=F[45];let W=v||"eager"===B?"eager":"lazy",N=v?"high":void 0;return F[46]!==u||F[47]!==M||F[48]!==I||F[49]!==b||F[50]!==A.lqip||F[51]!==P||F[52]!==x||F[53]!==W||F[54]!==N?(z=(0,t.jsx)(s.default,{enabled:M,image:P,desktopPlaceholder:A.lqip,sizes:x,quality:b,loading:W,fetchPriority:N,crossOrigin:u,...I}),F[46]=u,F[47]=M,F[48]=I,F[49]=b,F[50]=A.lqip,F[51]=P,F[52]=x,F[53]=W,F[54]=N,F[55]=z):z=F[55],F[56]!==l||F[57]!==g||F[58]!==n||F[59]!==$||F[60]!==z?(j=(0,t.jsxs)("picture",{ref:n,className:l,...g,children:[$,z]}),F[56]=l,F[57]=g,F[58]=n,F[59]=$,F[60]=z,F[61]=j):j=F[61],j});u.displayName="ResponsiveImage",e.s(["default",0,u])},371136,e=>{"use strict";var t=e.i(500932),r=e.i(883495),i=e.i(815711),n=e.i(271645),a=e.i(448806),o=e.i(764548);e.s(["useLenisSnap",0,(e,s,l,c)=>{let d,u,p,h=(0,t.c)(24);h[0]!==c?(d=void 0===c?{}:c,h[0]=c,h[1]=d):d=h[1];let{debounce:f,desktopMinWidth:m,distanceThreshold:g,duration:v,easing:b,allViewports:x,listingWheel:y}=d,w=void 0===f?500:f,S=void 0===m?1024:m,E=void 0!==x&&x,_=(0,n.useRef)(void 0),T=(0,a.usePageTransitioning)();return h[2]!==E||h[3]!==w||h[4]!==S||h[5]!==g||h[6]!==v||h[7]!==b||h[8]!==s||h[9]!==T||h[10]!==e||h[11]!==y?(u=()=>{if(!e||T)return;if(y){let t=((e,t,{multiplier:r,maxStep:i,departureRatio:n,debounce:a,duration:s,easing:l})=>{let c=e.rootElement,d=e.options.virtualScroll,u=0,p=!1,h=()=>{window.clearTimeout(u),u=0},f=()=>e.isStopped||e.isLocked||(0,o.isScrollResetting)(c)||(0,o.isScrollFolding)(c)||c.hasAttribute(o.SCROLL_RESIZING_ATTRIBUTE),m=o=>{if(h(),d?.(o)===!1)return!1;let{event:m}=o;if("wheel"!==m.type||m.ctrlKey||f()||!e.options.smoothWheel||!o.deltaY||Math.abs(o.deltaX)>Math.abs(o.deltaY))return!0;let g=m.composedPath();if(g.slice(0,g.indexOf(c)).some(t=>t instanceof HTMLElement&&(e.options.prevent?.(t)||t.hasAttribute("data-lenis-prevent")||t.hasAttribute("data-lenis-prevent-wheel")||t.hasAttribute("data-lenis-prevent-vertical"))))return!0;let v=c.clientHeight*i;o.deltaY=Math.max(-v,Math.min(v,o.deltaY*r));let b=Math.sign(o.deltaY);return u=window.setTimeout(()=>{if(u=0,p||f()||!m.defaultPrevented||"native"===e.isScrolling)return;let r=c.getBoundingClientRect();if(!r.height)return;let i=c.clientHeight/r.height,a=e.scroll,o=((e,t,r,i)=>{if(!e.length)return null;let n=e.findIndex(e=>e>=t);if(-1===n)return e[e.length-1];if(0===n)return e[0];let a=e[n],o=e[n-1];if(a-t<=1)return a;if(t-o<=1)return o;let s=(a-o)*i;return r>0?t-o+1>=s?a:o:a-t+1>=s?o:a})(t().map(e=>a+(e.getBoundingClientRect().top-r.top)*i).sort((e,t)=>e-t),e.targetScroll+a-e.animatedScroll,b,n);null!==o&&e.scrollTo(o,{duration:s,easing:l,userData:{initiator:"snap"}})},a),!0};return e.options.virtualScroll=m,c.addEventListener("touchstart",h,{passive:!0}),{resize:h,destroy:()=>{p=!0,h(),c.removeEventListener("touchstart",h),e.options.virtualScroll===m&&(e.options.virtualScroll=d)}}})(e,s,{...y,debounce:w,duration:v,easing:b});return _.current=t.resize,r.default.addEventListener("refresh",t.resize),()=>{_.current=void 0,r.default.removeEventListener("refresh",t.resize),t.destroy()}}let t=window.matchMedia(E?"(min-width: 0px)":`(min-width: ${S}px) and (pointer: fine)`),n=e.rootElement,a=null,l=!1,c=null,d=()=>{if(c?.(),a?.stop(),a?.destroy(),c=null,a=null,!t.matches)return;let r=s().filter(Boolean);r.length&&(c=(a=new i.default(e,{type:"proximity",debounce:w,distanceThreshold:g,duration:v,easing:b})).addElements(r,{align:["start"]}),l&&a.stop())},u=()=>{l=!0,a?.stop()},p=()=>{l=!1,a?.start()};return _.current=d,d(),t.addEventListener("change",d),n.addEventListener("touchstart",u,{passive:!0}),n.addEventListener("wheel",p,{passive:!0}),r.default.addEventListener("refresh",d),()=>{_.current=void 0,t.removeEventListener("change",d),n.removeEventListener("touchstart",u),n.removeEventListener("wheel",p),r.default.removeEventListener("refresh",d),c?.(),a?.stop(),a?.destroy()}},h[2]=E,h[3]=w,h[4]=S,h[5]=g,h[6]=v,h[7]=b,h[8]=s,h[9]=T,h[10]=e,h[11]=y,h[12]=u):u=h[12],h[13]!==E||h[14]!==w||h[15]!==l||h[16]!==S||h[17]!==g||h[18]!==v||h[19]!==b||h[20]!==T||h[21]!==e||h[22]!==y?(p=[w,S,E,y,g,v,b,e,T,...l],h[13]=E,h[14]=w,h[15]=l,h[16]=S,h[17]=g,h[18]=v,h[19]=b,h[20]=T,h[21]=e,h[22]=y,h[23]=p):p=h[23],(0,n.useEffect)(u,p),_}],371136)},676842,e=>{"use strict";var t=e.i(500932),r=e.i(764548),i=e.i(573943);let n=500;var a=e.i(271645);e.s(["useNativeSnap",0,(e,o,s,l)=>{let c,d,u,p=(0,t.c)(12);p[0]!==l?(c=void 0===l?{}:l,p[0]=l,p[1]=c):c=p[1];let{debounce:h,distanceThreshold:f,duration:m,easing:g,nativeRestDelay:v}=c;p[2]!==h||p[3]!==f||p[4]!==m||p[5]!==g||p[6]!==o||p[7]!==s||p[8]!==e||p[9]!==v?(d=()=>{if(e&&s)return((e,t,{debounce:a=n,distanceThreshold:o,duration:s,easing:l,nativeRestDelay:c}={})=>{let d=e.rootElement,u=0,p=null,h=!1,f=-1/0,m=()=>{u&&(window.clearTimeout(u),u=0)},g=(n=!1)=>{if(u=0,h||e.isStopped||"smooth"===e.isScrolling||!n&&e.isScrolling||(0,r.isScrollResetting)(d)||d.hasAttribute(r.SCROLL_RESIZING_ATTRIBUTE))return;let a=d.scrollTop,c=d.getBoundingClientRect().top,p=null;for(let e of t()){let t=e.getBoundingClientRect().top-c+a;(null===p||Math.abs(t-a)<Math.abs(p-a))&&(p=t)}null===p||1>Math.abs(p-a)||Math.abs(p-a)>((e,t)=>{if(void 0===e)return 1/0;if("number"==typeof e)return e;let r=e.trim().endsWith("%"),i=Number.parseFloat(e);return Number.isFinite(i)?r?i/100*t:i:1/0})(o,d.clientHeight)||((0,i.scrollTrace)("snap",{from:Math.round(a),to:Math.round(p)}),e.scrollTo(p,{duration:s,easing:l,userData:{initiator:"snap"}}))},v=()=>{if((0,r.isScrollResetting)(d)){p=null,m();return}if(!d.hasAttribute(r.SCROLL_RESIZING_ATTRIBUTE)&&(void 0===c||"smooth"===e.isScrolling)){if("native"===e.isScrolling){p="native",m();return}if("smooth"===e.isScrolling){p="smooth",m();return}"native"===p&&(p=null,m(),u=window.setTimeout(g,a))}},b=()=>{void 0===c||"smooth"===e.isScrolling||(0,r.isScrollResetting)(d)||d.hasAttribute(r.SCROLL_RESIZING_ATTRIBUTE)||(m(),f=performance.now(),u=window.setTimeout(()=>g(!0),c+a))},x=()=>{void 0!==c&&u&&!h&&(m(),g(!0))},y=()=>{h=!0,m()},w=()=>{if(h=!1,void 0!==c){if(performance.now()-f>=c+a){m(),g(!0);return}b();return}!1===e.isScrolling&&(m(),u=window.setTimeout(g,a))};return e.on("scroll",v),d.addEventListener("scroll",b,{passive:!0}),d.addEventListener("scrollend",x,{passive:!0}),d.addEventListener("touchstart",y,{passive:!0}),d.addEventListener("touchend",w,{passive:!0}),d.addEventListener("touchcancel",w,{passive:!0}),()=>{m(),e.off("scroll",v),d.removeEventListener("scroll",b),d.removeEventListener("scrollend",x),d.removeEventListener("touchstart",y),d.removeEventListener("touchend",w),d.removeEventListener("touchcancel",w)}})(e,o,{debounce:h,distanceThreshold:f,duration:m,easing:g,nativeRestDelay:v})},u=[e,o,s,h,f,m,g,v],p[2]=h,p[3]=f,p[4]=m,p[5]=g,p[6]=o,p[7]=s,p[8]=e,p[9]=v,p[10]=d,p[11]=u):(d=p[10],u=p[11]),(0,a.useEffect)(d,u)}],676842)},229352,e=>{"use strict";let t="#form",r={duration:1.2,offset:-200};e.s(["FORM_ANCHOR",0,t,"scrollToForm",0,(e,i)=>{e&&(i?.preventDefault(),e.scrollTo(t,r))}])}]);