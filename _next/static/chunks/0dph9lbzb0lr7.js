(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,815711,e=>{"use strict";function t(e,t){let r;return function(...i){clearTimeout(r),r=setTimeout(()=>{r=void 0,e.apply(this,i)},t)}}var r=class{element;options;align;rect={};wrapperResizeObserver;resizeObserver;debouncedWrapperResize;constructor(e,{align:r=["start"],ignoreSticky:i=!0,ignoreTransform:n=!1}={}){this.element=e,this.options={align:r,ignoreSticky:i,ignoreTransform:n},this.align=[r].flat(),this.debouncedWrapperResize=t(this.onWrapperResize,500),this.wrapperResizeObserver=new ResizeObserver(this.debouncedWrapperResize),this.wrapperResizeObserver.observe(document.body),this.onWrapperResize(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.element),this.setRect({width:this.element.offsetWidth,height:this.element.offsetHeight})}destroy(){this.wrapperResizeObserver.disconnect(),this.resizeObserver.disconnect()}setRect({top:e,left:t,width:r,height:i,element:n}={}){e=e??this.rect.top,t=t??this.rect.left,r=r??this.rect.width,i=i??this.rect.height,n=n??this.rect.element,(e!==this.rect.top||t!==this.rect.left||r!==this.rect.width||i!==this.rect.height||n!==this.rect.element)&&(this.rect.top=e,this.rect.y=e,this.rect.width=r,this.rect.height=i,this.rect.left=t,this.rect.x=t,this.rect.bottom=e+i,this.rect.right=t+r)}onWrapperResize=()=>{let e,t;if(this.options.ignoreSticky&&function e(t){"sticky"===getComputedStyle(t).position&&(t.style.setProperty("position","static"),t.dataset.sticky="true"),t.offsetParent&&e(t.offsetParent)}(this.element),this.options.ignoreTransform)e=function e(t,r=0){let i=r+t.offsetTop;return t.offsetParent?e(t.offsetParent,i):i}(this.element),t=function e(t,r=0){let i=r+t.offsetLeft;return t.offsetParent?e(t.offsetParent,i):i}(this.element);else{let r=this.element.getBoundingClientRect();e=r.top+function e(t,r=0){let i=r+t.scrollTop;return t.offsetParent?e(t.offsetParent,i):i+window.scrollY}(this.element),t=r.left+function e(t,r=0){let i=r+t.scrollLeft;return t.offsetParent?e(t.offsetParent,i):i+window.scrollX}(this.element)}this.options.ignoreSticky&&function e(t){t?.dataset?.sticky==="true"&&(t.style.removeProperty("position"),delete t.dataset.sticky),t.offsetParent&&e(t.offsetParent)}(this.element),this.setRect({top:e,left:t})};onResize=([e])=>{if(!e?.borderBoxSize[0])return;let t=e.borderBoxSize[0].inlineSize,r=e.borderBoxSize[0].blockSize;this.setRect({width:t,height:r})}};let i=0;var n=class{options;elements=new Map;snaps=new Map;viewport={width:window.innerWidth,height:window.innerHeight};isStopped=!1;onSnapDebounced;currentSnapIndex;constructor(e,{type:r="proximity",lerp:i,easing:n,duration:a,distanceThreshold:s="50%",debounce:o=500,onSnapStart:l,onSnapComplete:c}={}){this.lenis=e,window.lenis||(window.lenis={}),window.lenis.snap=!0,this.options={type:r,lerp:i,easing:n,duration:a,distanceThreshold:s,debounce:o,onSnapStart:l,onSnapComplete:c},this.onWindowResize(),window.addEventListener("resize",this.onWindowResize),this.onSnapDebounced=t(this.onSnap,this.options.debounce),this.lenis.on("virtual-scroll",this.onSnapDebounced)}destroy(){this.lenis.off("virtual-scroll",this.onSnapDebounced),window.removeEventListener("resize",this.onWindowResize),this.elements.forEach(e=>{e.destroy()})}start(){this.isStopped=!1}stop(){this.isStopped=!0}add(e){let t=i++;return this.snaps.set(t,{value:e}),()=>this.snaps.delete(t)}addElement(e,t={}){let n=i++;return this.elements.set(n,new r(e,t)),()=>this.elements.delete(n)}addElements(e,t={}){let r=[...e].map(e=>this.addElement(e,t));return()=>{r.forEach(e=>{e()})}}onWindowResize=()=>{this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight};computeSnaps=()=>{let{isHorizontal:e}=this.lenis,t=[...this.snaps.values()];return this.elements.forEach(({rect:r,align:i})=>{let n;i.forEach(i=>{"start"===i?n=r.top:"center"===i?n=e?r.left+r.width/2-this.viewport.width/2:r.top+r.height/2-this.viewport.height/2:"end"===i&&(n=e?r.left+r.width-this.viewport.width:r.top+r.height-this.viewport.height),"number"==typeof n&&t.push({value:Math.ceil(n)})})}),t=t.sort((e,t)=>Math.abs(e.value)-Math.abs(t.value))};previous(){this.goTo((this.currentSnapIndex??0)-1)}next(){this.goTo((this.currentSnapIndex??0)+1)}goTo(e){let t=this.computeSnaps();if(0===t.length)return;this.currentSnapIndex=Math.max(0,Math.min(e,t.length-1));let r=t[this.currentSnapIndex];void 0!==r&&this.lenis.scrollTo(r.value,{duration:this.options.duration,easing:this.options.easing,lerp:this.options.lerp,lock:"lock"===this.options.type,userData:{initiator:"snap"},onStart:()=>{this.options.onSnapStart?.({index:this.currentSnapIndex,...r})},onComplete:()=>{this.options.onSnapComplete?.({index:this.currentSnapIndex,...r})}})}get distanceThreshold(){if("mandatory"===this.options.type)return 1/0;let{isHorizontal:e}=this.lenis,t=e?"width":"height";return"string"==typeof this.options.distanceThreshold&&this.options.distanceThreshold.endsWith("%")?Number(this.options.distanceThreshold.replace("%",""))/100*this.viewport[t]:"number"==typeof this.options.distanceThreshold?this.options.distanceThreshold:this.viewport[t]}onSnap=e=>{let t;if(this.isStopped||"touchmove"===e.event.type||"lock"===this.options.type&&this.lenis.userData?.initiator==="snap")return;let{scroll:r,isHorizontal:i}=this.lenis,n=i?e.deltaX:e.deltaY;r=Math.ceil(this.lenis.scroll+n);let a=this.computeSnaps();if(0===a.length)return;let s=a.findLastIndex(({value:e})=>e<r),o=a.findIndex(({value:e})=>e>r);if("lock"===this.options.type)n>0?t=o:n<0&&(t=s);else{let e=a[s],i=e?Math.abs(r-e.value):1/0,n=a[o];t=i<(n?Math.abs(r-n.value):1/0)?s:o}if(void 0===t||-1===t)return;t=Math.max(0,Math.min(t,a.length-1));let l=a[t];Math.abs(r-l.value)<=this.distanceThreshold&&this.goTo(t)};resize(){this.elements.forEach(e=>{e.onWrapperResize()})}};e.s(["default",0,n])},124821,135741,e=>{"use strict";var t=e.i(843476),r=e.i(500932);let i=null;var n=e.i(271645),a=e.i(575509),s=e.i(212960),o=e.i(951847),l=e.i(997053);let c=[...Array(25)].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.02*t}s; }`).join("\n"),d=({$isFullWidth:e})=>l.css`
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
            aside {
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
            ${s.captionL}

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

        aside {
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
        }
`,u=(0,l.default)(o.Link).withConfig({componentId:"sc-6f2721c4-0"})(({$isFullWidth:e})=>l.css`
        ${d({$isFullWidth:e})}
    `),p=l.default.button.withConfig({componentId:"sc-6f2721c4-1"})(({$isFullWidth:e})=>l.css`
        ${d({$isFullWidth:e})}
    `);e.s(["Button",0,p,"Jacket",0,u,"sharedStyles",0,d],135741);let h=e=>{let a,s,o,l,c=(0,r.c)(6),d=(0,n.useRef)(null),h=(0,n.useRef)(null);if(c[0]!==e.isButton?(a=()=>{let t=e.isButton?d.current:h.current;if(t){let e;return(e=i||(i=new IntersectionObserver(e=>{for(let t of e)t.target instanceof HTMLElement&&t.target.style.setProperty("--play-state",t.isIntersecting?"running":"paused")},{threshold:0}))).observe(t),()=>e.unobserve(t)}},s=[e.isButton],c[0]=e.isButton,c[1]=a,c[2]=s):(a=c[1],s=c[2]),(0,n.useEffect)(a,s),c[3]!==e){l=Symbol.for("react.early_return_sentinel");e:{let r=[];for(let i=0;i<e.label.length;i+=1){let n=e.label[i];r.push((0,t.jsx)("span",{children:" "===n?" ":n},`${e.label}-${i}`))}let i=f;if(e.isButton){let{aria:n,label:a,onClick:s,isFullWidth:o,type:c,disabled:u}=e,h=void 0!==u&&u;l=(0,t.jsx)(p,{ref:d,type:void 0===c?"button":c,"aria-label":n??a,"aria-disabled":h,$isFullWidth:void 0!==o&&o,disabled:h,onClick:s,children:i(r)});break e}let{aria:n,label:a,to:s,onClick:c,isFullWidth:m,transitionAwaitsContent:g,prefetch:v,tabIndex:b}=e;o=(0,t.jsx)(u,{ref:h,href:s,"aria-label":n??a,$isFullWidth:void 0!==m&&m,onClick:c,transitionAwaitsContent:g,prefetch:v,tabIndex:b,children:i(r)})}c[3]=e,c[4]=o,c[5]=l}else o=c[4],l=c[5];return l!==Symbol.for("react.early_return_sentinel")?l:o};function f(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)("aside",{})]})}h.displayName="Button",e.s(["default",0,h],124821)},576978,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(124821),n=e.i(271645),a=e.i(174080);let s={parallaxStrength:.016,parallaxFocus:.45,lightRadius:1.05,lightIntensity:1.9,lightFalloff:2,ambient:.16,depthInfluence:.55,floodLight:1,easing:.065,startPos:[.5,.5],spotEaseIn:.045,spotEaseOut:.025,scrollFloodDistance:.5,scrollParallaxFrom:0,scrollParallaxTo:1,scrollDarkStart:.25,scrollLightBy:.5},o=`
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
}`,c=["u_image","u_depth","u_res","u_imgAspect","u_mouse","u_parallaxStrength","u_parallaxFocus","u_lightRadius","u_lightIntensity","u_lightFalloff","u_ambient","u_depthInfluence","u_floodLight","u_spot"],d=e=>new Promise((t,r)=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>t(i),i.onerror=()=>r(Error(`Failed to load texture: ${e}`)),i.src=e}),u=(e,t,r)=>{let i=e.createShader(t);if(!i)throw Error("Unable to create shader");if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i);throw e.deleteShader(i),Error(t??"Shader compile failed")}return i},p=(e,t,r)=>{let i=e.createTexture();return e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),i},h=async({canvas:e,imageSrc:t,depthSrc:r,config:i,mode:n="pointer",signal:a,onFirstPaint:h,onContextLost:f})=>{let m={...s,...i},g="scroll"===n,v=e.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,stencil:!1});if(!v)return null;let[b,x]=await Promise.all([d(t),d(r)]);if(a?.aborted)return null;let y=v.createProgram();if(!y)return null;let w=u(v,v.VERTEX_SHADER,o),S=u(v,v.FRAGMENT_SHADER,l);if(v.attachShader(y,w),v.attachShader(y,S),v.linkProgram(y),!v.getProgramParameter(y,v.LINK_STATUS))throw Error(v.getProgramInfoLog(y)??"Program link failed");v.useProgram(y);let _=v.createBuffer();v.bindBuffer(v.ARRAY_BUFFER,_),v.bufferData(v.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),v.STATIC_DRAW);let E=v.getAttribLocation(y,"a_pos");v.enableVertexAttribArray(E),v.vertexAttribPointer(E,2,v.FLOAT,!1,0,0);let T=Object.fromEntries(c.map(e=>[e,v.getUniformLocation(y,e)])),R=p(v,0,b),k=p(v,1,x);v.uniform1i(T.u_image,0),v.uniform1i(T.u_depth,1),v.uniform1f(T.u_imgAspect,b.naturalWidth/b.naturalHeight);let L=()=>{v.uniform1f(T.u_parallaxStrength,m.parallaxStrength),v.uniform1f(T.u_parallaxFocus,m.parallaxFocus),v.uniform1f(T.u_lightRadius,m.lightRadius),v.uniform1f(T.u_lightIntensity,m.lightIntensity),v.uniform1f(T.u_lightFalloff,m.lightFalloff),v.uniform1f(T.u_ambient,m.ambient),v.uniform1f(T.u_depthInfluence,m.depthInfluence),v.uniform1f(T.u_floodLight,m.floodLight)};L();let I={x:m.startPos[0],y:m.startPos[1]},A={x:m.startPos[0],y:m.startPos[1]},P=0,C=0,$=!1,z=null,j=0,F=null,M=null,B=0,D=0,O=!1,N=!1,W=!0,G=!1,U=!1,H=()=>{U||(U=!0,h?.())},Y=()=>{let t=Math.min(window.devicePixelRatio||1,2),r=Math.round(e.clientWidth*t),i=Math.round(e.clientHeight*t);r&&i&&(e.width!==r||e.height!==i)&&(e.width=r,e.height=i,v.viewport(0,0,r,i),v.uniform2f(T.u_res,r,i),G=!0,W=!0)},X=()=>{if(!G)return;(()=>{if(!z)return;let t=e.clientWidth,r=e.clientHeight;if(!t||!r)return;let i=e.getBoundingClientRect(),n=i.left+i.width/2-t/2,a=i.top+i.height/2-r/2;A.x=(z.x-n)/t,A.y=1-(z.y-a)/r})(),$&&($=!1,I.x=A.x,I.y=A.y,W=!0);let t=A.x-I.x,r=A.y-I.y,i=C-P;(!(5e-4>Math.abs(t)&&5e-4>Math.abs(r)&&5e-4>Math.abs(i))||W)&&(I.x+=t*m.easing,I.y+=r*m.easing,P+=i*(i>0?m.spotEaseIn:m.spotEaseOut),v.uniform2f(T.u_mouse,I.x,I.y),v.uniform1f(T.u_spot,P),v.drawArrays(v.TRIANGLES,0,3),W=!1,H())},q=()=>{if(!G)return;let{scrollParallaxFrom:e,scrollParallaxTo:t,scrollDarkStart:r,scrollLightBy:i}=m,n=i>0?Math.min(B/i,1):1;v.uniform2f(T.u_mouse,.5,e+(t-e)*B),v.uniform1f(T.u_spot,0),v.uniform1f(T.u_floodLight,r+(m.floodLight-r)*n),v.drawArrays(v.TRIANGLES,0,3),W=!1,H()},V=()=>g?q():X(),K=()=>{D=requestAnimationFrame(K),X()},Z=()=>{D&&(cancelAnimationFrame(D),D=0)},J=(e,t)=>{P<.05&&($=!0),z={x:e,y:t},C=1,j=0},Q=e=>J(e.clientX,e.clientY),ee=e=>{let t=e.touches[0];t&&J(t.clientX,t.clientY)},et=e=>{let t,r=(t=e.target)instanceof HTMLElement?t.scrollTop:window.scrollY||document.scrollingElement?.scrollTop||0,i=m.scrollFloodDistance*window.innerHeight;null!==F&&e.target===M&&(j=Math.min(j+Math.abs(r-F),i)),F=r,M=e.target,j>=i&&(C=0)},er=e=>{e.preventDefault(),O=!1,Z(),f?.()},ei=new ResizeObserver(()=>{Y(),D||V()});return ei.observe(e),e.addEventListener("webglcontextlost",er),g||(window.addEventListener("pointermove",Q,{passive:!0}),window.addEventListener("touchmove",ee,{passive:!0}),window.addEventListener("scroll",et,{capture:!0,passive:!0})),Y(),V(),{setActive:e=>{if(!N&&e!==O){if(O=e,e){Y(),W=!0,D||N||g||(D=requestAnimationFrame(K));return}Z(),P=0,C=0,j=0,F=null,M=null,W=!0}},setScrollProgress:e=>{!N&&g&&(B=Math.min(Math.max(e,0),1),q())},setConfig:e=>{N||(Object.assign(m,e),L(),W=!0,V())},destroy:()=>{N||(N=!0,O=!1,Z(),ei.disconnect(),e.removeEventListener("webglcontextlost",er),window.removeEventListener("pointermove",Q),window.removeEventListener("touchmove",ee),window.removeEventListener("scroll",et,{capture:!0}),v.deleteTexture(R),v.deleteTexture(k),v.deleteBuffer(_),v.deleteShader(w),v.deleteShader(S),v.deleteProgram(y),v.getExtension("WEBGL_lose_context")?.loseContext())}}};var f=e.i(575509),m=e.i(997053);let g=m.default.div.withConfig({componentId:"sc-cda082ca-0"})(()=>m.css`
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
	`),y=[{key:"parallaxStrength",label:"Parallax strength",min:0,max:.15,step:.001},{key:"parallaxFocus",label:"Parallax focus",min:0,max:1,step:.01},{key:"depthInfluence",label:"Depth influence",min:0,max:1,step:.01}],w=[{key:"scrollParallaxFrom",label:"Sweep from (y)",min:0,max:1,step:.01},{key:"scrollParallaxTo",label:"Sweep to (y)",min:0,max:1,step:.01},{key:"scrollDarkStart",label:"Start brightness",min:0,max:1,step:.01},{key:"scrollLightBy",label:"Lit by (progress)",min:.05,max:1,step:.01},{key:"floodLight",label:"Final brightness",min:0,max:2,step:.01}],S=[{key:"lightRadius",label:"Light radius",min:.2,max:3,step:.01},{key:"lightIntensity",label:"Light intensity",min:0,max:4,step:.05},{key:"lightFalloff",label:"Light falloff",min:.5,max:6,step:.1},{key:"ambient",label:"Ambient",min:0,max:1,step:.01},{key:"floodLight",label:"Flood brightness",min:0,max:2,step:.01},{key:"easing",label:"Cursor easing",min:.01,max:.3,step:.005},{key:"spotEaseIn",label:"Spot ease in",min:.005,max:.2,step:.005},{key:"spotEaseOut",label:"Flood ease out",min:.005,max:.2,step:.005},{key:"scrollFloodDistance",label:"Flood after (screens)",min:0,max:2,step:.05}],_=e=>{let i,o,l,c,d,u,p,h,f,m,g,_,T,R,k,L,I,A=(0,r.c)(38),{mode:P,base:C,onChange:$}=e,z="scroll"===P?w:S;A[0]!==z?(i=[...y,...z],A[0]=z,A[1]=i):i=A[1];let j=i;A[2]!==C?(o={...s,...C},A[2]=C,A[3]=o):o=A[3];let F=o,[M,B]=(0,n.useState)(F),[D,O]=(0,n.useState)(!0),[N,W]=(0,n.useState)(!1),[G,U]=(0,n.useState)(!1);A[4]===Symbol.for("react.memo_cache_sentinel")?(l=(e,t)=>{B(r=>({...r,[e]:t}))},A[4]=l):l=A[4];let H=l;A[5]!==F?(c=()=>B(F),A[5]=F,A[6]=c):c=A[6];let Y=c;A[7]!==j||A[8]!==M?(d=()=>{let e=j.reduce((e,t)=>(e[t.key]=M[t.key],e),{});navigator.clipboard?.writeText(JSON.stringify(e,null,2)).then(()=>U(!0),()=>U(!1))},A[7]=j,A[8]=M,A[9]=d):d=A[9];let X=d;if(A[10]===Symbol.for("react.memo_cache_sentinel")?(u=()=>W(!0),p=[],A[10]=u,A[11]=p):(u=A[10],p=A[11]),(0,n.useEffect)(u,p),A[12]!==$||A[13]!==M?(f=()=>$(M),h=[M,$],A[12]=$,A[13]=M,A[14]=h,A[15]=f):(h=A[14],f=A[15]),(0,n.useEffect)(f,h),A[16]!==G?(m=()=>{if(!G)return;let e=window.setTimeout(()=>U(!1),1200);return()=>window.clearTimeout(e)},g=[G],A[16]=G,A[17]=m,A[18]=g):(m=A[17],g=A[18]),(0,n.useEffect)(m,g),!N)return null;A[19]!==P?(_=(0,t.jsxs)("strong",{children:["depth · ",P]}),A[19]=P,A[20]=_):_=A[20],A[21]===Symbol.for("react.memo_cache_sentinel")?(T=()=>O(E),A[21]=T):T=A[21];let q=D?"hide":"show";return A[22]!==q?(R=(0,t.jsx)("button",{type:"button",onClick:T,children:q}),A[22]=q,A[23]=R):R=A[23],A[24]!==_||A[25]!==R?(k=(0,t.jsxs)(b,{children:[_,R]}),A[24]=_,A[25]=R,A[26]=k):k=A[26],A[27]!==G||A[28]!==j||A[29]!==X||A[30]!==Y||A[31]!==D||A[32]!==M?(L=D?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{children:j.map(e=>(0,t.jsxs)("label",{children:[(0,t.jsxs)("span",{children:[e.label,(0,t.jsx)("em",{children:M[e.key].toFixed(3)})]}),(0,t.jsx)("input",{type:"range",min:e.min,max:e.max,step:e.step,value:M[e.key],onChange:t=>H(e.key,Number(t.target.value))})]},e.key))}),(0,t.jsxs)(b,{children:[(0,t.jsx)("button",{type:"button",onClick:Y,children:"reset"}),(0,t.jsx)("button",{type:"button",onClick:X,children:G?"copied":"copy config"})]})]}):null,A[27]=G,A[28]=j,A[29]=X,A[30]=Y,A[31]=D,A[32]=M,A[33]=L):L=A[33],A[34]!==D||A[35]!==k||A[36]!==L?(I=(0,a.createPortal)((0,t.jsxs)(v,{"data-open":D,children:[k,L]}),document.body),A[34]=D,A[35]=k,A[36]=L,A[37]=I):I=A[37],I};function E(e){return!e}_.displayName="DepthParallaxControls";let T=(0,n.forwardRef)(({imageSrc:e,depthSrc:r,isActive:i=!0,mode:a="pointer",config:s,className:o},l)=>{let c=(0,n.useRef)(null),d=(0,n.useRef)(null),u=(0,n.useRef)(s);u.current=s;let p=(0,n.useRef)(0),[f,m]=(0,n.useState)(!1),[v,b]=(0,n.useState)(!1),[x,y]=(0,n.useState)(!1),w=(0,n.useCallback)(e=>{d.current?.setConfig(e)},[]);return(0,n.useImperativeHandle)(l,()=>({setScrollProgress:e=>{p.current=e,d.current?.setScrollProgress(e)}}),[]),(0,n.useEffect)(()=>{y(new URLSearchParams(window.location.search).has("depth-debug"))},[]),(0,n.useEffect)(()=>{let t=c.current;if(!t)return;let i=document.createElement("canvas");t.appendChild(i);let n=new AbortController;return h({canvas:i,imageSrc:e,depthSrc:r,mode:a,config:u.current,signal:n.signal,onFirstPaint:()=>b(!0),onContextLost:()=>{m(!1),b(!1)}}).then(e=>{if(e){if(n.signal.aborted)return void e.destroy();d.current=e,e.setScrollProgress(p.current),m(!0)}}).catch(()=>m(!1)),()=>{n.abort(),d.current?.destroy(),d.current=null,i.remove(),m(!1),b(!1)}},[e,r,a]),(0,n.useEffect)(()=>{d.current?.setActive(i&&f)},[i,f]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g,{ref:c,className:o,"data-ready":v,"aria-hidden":"true"}),x?(0,t.jsx)(_,{mode:a,base:s,onChange:w}):null]})});T.displayName="DepthParallax";var R=e.i(481293);let k=(e,t,r)=>{let i=(0,R.resolveSanityImage)(e);return i?(0,R.urlFor)(i).width(t).fit("max").quality(r).auto("format").url():null};var L=e.i(89835),I=e.i(101384),A=e.i(229352),P=e.i(607561),C=e.i(255981),$=e.i(494473),z=e.i(989970),j=e.i(883495),F=e.i(255667),M=e.i(212960);let B=(0,m.default)(f.Div).attrs({as:"footer"}).withConfig({componentId:"sc-a2c8839e-0"})(()=>m.css`
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
	`),N=(0,m.default)(f.Div).withConfig({componentId:"sc-a2c8839e-3"})(()=>m.css`
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
	`),W=(0,m.default)(f.Div).withConfig({componentId:"sc-a2c8839e-4"})(()=>m.css`
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
	`),X=e=>{let i,n,a,s=(0,r.c)(5),{lenis:o}=e;s[0]!==o?(i=()=>{o?.scrollTo(0,{duration:1.2})},s[0]=o,s[1]=i):i=s[1];let l=i;return s[2]===Symbol.for("react.memo_cache_sentinel")?(n=(0,t.jsx)("span",{children:"Back to Top".split("").map(q)}),s[2]=n):n=s[2],s[3]!==l?(a=(0,t.jsx)(Y,{type:"button","aria-label":"Back to Top",onClick:l,children:n}),s[3]=l,s[4]=a):a=s[4],a};function q(e,r){return(0,t.jsx)("span",{children:" "===e?" ":e},`${e}_${r.toString()}`)}X.displayName="BackToTop";var V=e.i(221781),K=e.i(486861),Z=e.i(189897),J=e.i(797489),Q=e.i(274879),ee=e.i(875324);let et="top bottom",er="bottom bottom",ei="top 75%",en=e=>{let i,a,s,o,l,c=(0,r.c)(19),{heading:d,editAttr:u,triggerRef:p}=e,{isReducedMotion:h}=(0,n.use)(I.PerformanceContext),f=(0,n.useRef)(null),m=(0,F.useLenis)();c[0]!==d?(i=(0,Z.cleanSanityString)(d)??"",c[0]=d,c[1]=i):i=c[1];let g=i,v=(0,Q.useSplitTextRecovery)(f,g);c[2]!==g?(a=(0,K.escapeHtml)(g),c[2]=g,c[3]=a):a=c[3];let b=(0,J.useInnerHtml)(a);return(c[4]!==g||c[5]!==h||c[6]!==m?.rootElement||c[7]!==p?(s=()=>{let e=f.current,t=m?.rootElement;if(!e||!g||!t)return;let r=ee.SplitText.create(e,{type:"words"}),{words:i}=r;if(!i.length)return()=>r.revert();if(h)return z.default.set(i,{autoAlpha:1,scale:1,filter:"blur(0px)",display:"inline-block",verticalAlign:"top",willChange:"auto"}),()=>r.revert();(e=>{if(!e.length)return;let t=1/0,r=1/0,i=-1/0,n=-1/0;for(let a of e)t=Math.min(t,a.offsetLeft),r=Math.min(r,a.offsetTop),i=Math.max(i,a.offsetLeft+a.offsetWidth),n=Math.max(n,a.offsetTop+a.offsetHeight);let a=(t+i)/2,s=(r+n)/2;for(let t of e)z.default.set(t,{transformOrigin:`${a-t.offsetLeft}px ${s-t.offsetTop}px`,force3D:!0})})(i),z.default.set(i,{autoAlpha:0,scale:V.TITLE_SCALE_START,filter:`blur(${V.TITLE_BLUR_START}px)`,display:"inline-block",verticalAlign:"top",willChange:"opacity, transform, filter"});let n={progress:0},a=z.default.to(n,{progress:1,duration:.9,ease:"power2.out",paused:!0,onUpdate:()=>(e=>{for(let[t,r]of i.entries()){let{scale:n,opacity:a,blur:s}=(0,V.getIntroGrowInWordValues)(e,t,i.length);z.default.set(r,{autoAlpha:a,scale:n,filter:`blur(${s}px)`})}})(n.progress),onComplete:()=>z.default.set(i,{willChange:"auto"})}),s=j.default.create({trigger:p?.current??e,scroller:t,start:ei,once:!0,onEnter:()=>a.play()});return s.progress>0&&a.play(),()=>{s.kill(),a.kill(),r.revert()}},c[4]=g,c[5]=h,c[6]=m?.rootElement,c[7]=p,c[8]=s):s=c[8],c[9]!==g||c[10]!==h||c[11]!==m||c[12]!==v||c[13]!==p?(o={scope:f,dependencies:[g,h,m,v,p]},c[9]=g,c[10]=h,c[11]=m,c[12]=v,c[13]=p,c[14]=o):o=c[14],(0,P.useAnimation)(s,o),g)?(c[15]!==g||c[16]!==u||c[17]!==b?(l=(0,t.jsx)(N,{children:(0,t.jsx)("h2",{ref:f,"data-sanity":u,dangerouslySetInnerHTML:b},g)}),c[15]=g,c[16]=u,c[17]=b,c[18]=l):l=c[18],l):null};en.displayName="CtaHeading";var ea=e.i(371136),es=e.i(676842);let eo={parallaxStrength:.05},el=e=>{let a,s,o,l,c,d,u,p,h,f,m,g,v,b,x,y,w,S,_,E,R,M=(0,r.c)(54),{heading:N,headingEditAttr:H,subheading:Y,mobile:q,desktop:V,isContact:K}=e,{isReducedMotion:Z}=(0,n.use)(I.PerformanceContext),J=(0,n.useRef)(null),Q=(0,n.useRef)(null),ee=(0,n.useRef)(null),el=(0,n.useRef)(null),ec=(0,n.useRef)(null),ed=(0,F.useLenis)();M[0]!==ed?(a=e=>(0,A.scrollToForm)(ed,e),M[0]=ed,M[1]=a):a=M[1];let eu=a,ep=(0,C.useIsDesktopViewport)(),[eh,ef]=(0,n.useState)(!1),em=ep?V:q,eg=em?.image,ev=!ep;M[2]!==eg||M[3]!==ev?(s=((e,t=!1)=>k(e,t?1080:1920,85))(eg,ev),M[2]=eg,M[3]=ev,M[4]=s):s=M[4];let eb=s,ex=em?.depthMap,ey=!ep;M[5]!==ex||M[6]!==ey?(o=((e,t=!1)=>k(e,t?720:1280,95))(ex,ey),M[5]=ex,M[6]=ey,M[7]=o):o=M[7];let ew=o;M[8]!==ew||M[9]!==eb?(l=eb&&ew?{imageSrc:eb,depthSrc:ew}:null,M[8]=ew,M[9]=eb,M[10]=l):l=M[10];let eS=l,e_=!!eS&&!Z,eE=ep?"pointer":"scroll";M[11]===Symbol.for("react.memo_cache_sentinel")?(d=()=>{let e=J.current;if(!e)return;let t=new IntersectionObserver(e=>{let t=e[0];t&&ef(t.isIntersecting)});return t.observe(e),()=>t.disconnect()},c=[],M[11]=c,M[12]=d):(c=M[11],d=M[12]),(0,n.useEffect)(d,c),M[13]===Symbol.for("react.memo_cache_sentinel")?(u=()=>J.current?[J.current]:[],M[13]=u):u=M[13];let eT=u;return(M[14]===Symbol.for("react.memo_cache_sentinel")?(p=[],h={distanceThreshold:"50%"},M[14]=p,M[15]=h):(p=M[14],h=M[15]),(0,ea.useLenisSnap)(ed,eT,p,h),M[16]===Symbol.for("react.memo_cache_sentinel")?(f={distanceThreshold:"50%"},M[16]=f):f=M[16],(0,es.useNativeSnap)(ed,eT,!0,f),M[17]!==Z||M[18]!==ed?.rootElement?(m=e=>{let{isDesktop:t}=e,r=J.current,i=Q.current,n=ed?.rootElement;if(!r||!i||!n)return;let a=[];z.default.set(i,{autoAlpha:0}),z.default.to(i,{autoAlpha:1,ease:"none",scrollTrigger:{trigger:r,scroller:n,start:"top bottom",end:"center bottom",scrub:!0,markers:!1}}),t&&z.default.from(i,{scale:1.5,ease:"none",scrollTrigger:{trigger:r,scroller:n,start:et,end:er,scrub:!0}});let s=el.current;if(s&&!Z){z.default.set(s,{autoAlpha:0,y:16});let e=z.default.to(s,{autoAlpha:1,y:0,duration:.6,ease:"power2.out",delay:.7200000000000001,paused:!0}),t=j.default.create({trigger:r,scroller:n,start:ei,once:!0,onEnter:()=>e.play()});t.progress>0&&e.play(),a.push(()=>{t.kill(),e.kill()})}if(t||z.default.from(i,{scale:1.5,transformOrigin:"center bottom",ease:"none",scrollTrigger:{trigger:r,scroller:n,start:et,end:er,scrub:!0}}),!t){let e=j.default.create({trigger:r,scroller:n,start:et,end:er,onUpdate:e=>ec.current?.setScrollProgress(e.progress),onRefresh:e=>ec.current?.setScrollProgress(e.progress)});a.push(()=>e.kill())}return()=>{for(let e of a)e()}},M[17]=Z,M[18]=ed?.rootElement,M[19]=m):m=M[19],M[20]!==K||M[21]!==Z||M[22]!==ed?(g={scope:J,dependencies:[ed,K,Z]},M[20]=K,M[21]=Z,M[22]=ed,M[23]=g):g=M[23],(0,P.useAnimation)(m,g),V?.image&&q?.image&&N&&Y)?(M[24]!==V.image||M[25]!==q.image?(v=(0,t.jsx)(L.default,{desktop:V.image,mobile:q.image,fill:!0,sizes:"100vw",quality:85}),M[24]=V.image,M[25]=q.image,M[26]=v):v=M[26],M[27]!==e_||M[28]!==ep||M[29]!==eh||M[30]!==eE||M[31]!==eS?(b=e_&&eS?(0,t.jsx)(T,{ref:ec,mode:eE,config:ep?void 0:eo,imageSrc:eS.imageSrc,depthSrc:eS.depthSrc,isActive:eh}):null,M[27]=e_,M[28]=ep,M[29]=eh,M[30]=eE,M[31]=eS,M[32]=b):b=M[32],M[33]!==v||M[34]!==b?(x=(0,t.jsxs)(D,{ref:Q,"aria-hidden":"true",children:[v,b]}),M[33]=v,M[34]=b,M[35]=x):x=M[35],M[36]!==Y?(y=(0,t.jsx)(G,{children:Y}),M[36]=Y,M[37]=y):y=M[37],M[38]!==N||M[39]!==H?(w=(0,t.jsx)(en,{heading:N,editAttr:H,triggerRef:J}),M[38]=N,M[39]=H,M[40]=w):w=M[40],M[41]!==eu||M[42]!==K?(S=(0,t.jsx)(W,{ref:el,children:K?(0,t.jsx)(i.default,{to:A.FORM_ANCHOR,onClick:eu,label:"Start the conversation",aria:"Go to the enquiry form"}):(0,t.jsx)(i.default,{to:"/contact",label:"Start Your Project",aria:"Go to Contact"})}),M[41]=eu,M[42]=K,M[43]=S):S=M[43],M[44]!==y||M[45]!==w||M[46]!==S?(_=(0,t.jsx)($.default,{children:(0,t.jsxs)(O,{$l:"2/12",$xl:"3/11",ref:ee,children:[y,w,S]})}),M[44]=y,M[45]=w,M[46]=S,M[47]=_):_=M[47],M[48]!==ed?(E=(0,t.jsx)(U,{children:(0,t.jsx)(X,{lenis:ed})}),M[48]=ed,M[49]=E):E=M[49],M[50]!==x||M[51]!==_||M[52]!==E?(R=(0,t.jsxs)(B,{ref:J,children:[x,_,E]}),M[50]=x,M[51]=_,M[52]=E,M[53]=R):R=M[53],R):null};el.displayName="GlobalCta",e.s(["default",0,el],576978)},89835,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(481293),n=e.i(180301),a=e.i(657688),s=e.i(402463),o=e.i(328852),l=e.i(271645),c=e.i(174080);let d=Number.parseInt(n.grid.breakpoints.l??"1024",10),u=(0,l.forwardRef)((e,n)=>{let l,u,p,h,f,m,g,v,b,x,y,w,S,_,E,T,R,k,L,I,A,P,C,$,z=(0,r.c)(56);z[0]!==e?({desktop:p,mobile:m,fill:h,width:_,height:f,sizes:x,quality:b,preload:v,loading:y,desktopMinWidth:w,desktopInLandscape:S,className:l,crossOrigin:u,...g}=e,z[0]=e,z[1]=l,z[2]=u,z[3]=p,z[4]=h,z[5]=f,z[6]=m,z[7]=g,z[8]=v,z[9]=b,z[10]=x,z[11]=y,z[12]=w,z[13]=S,z[14]=_):(l=z[1],u=z[2],p=z[3],h=z[4],f=z[5],m=z[6],g=z[7],v=z[8],b=z[9],x=z[10],y=z[11],w=z[12],S=z[13],_=z[14]);let j=void 0===y?"lazy":y,F=void 0===w?d:w,M=void 0!==S&&S;if(z[15]!==l||z[16]!==u||z[17]!==p||z[18]!==M||z[19]!==F||z[20]!==h||z[21]!==f||z[22]!==j||z[23]!==m||z[24]!==g||z[25]!==v||z[26]!==b||z[27]!==n||z[28]!==x||z[29]!==_){A=Symbol.for("react.early_return_sentinel");e:{if(L=(0,i.resolveImageWithAlt)(p),I=(0,i.resolveImageWithAlt)(m),!L||!I){A=null;break e}k=h?{fill:!0}:{width:_??1200,height:f??675};let e={sizes:x,quality:b,preload:v,loader:s.imageLoader,...k};if(L.src===I.src){A=(0,t.jsx)("picture",{ref:n,className:l,...g,children:(0,t.jsx)(o.default,{image:L,sizes:x,quality:b,preload:v,loading:j,crossOrigin:u,...k})});break e}E=`(min-width: ${F}px)${M?", (orientation: landscape)":""}`;let r=`(max-width: ${F-1}px)${M?" and (orientation: portrait)":""}`,{props:d}=(0,a.getImageProps)({...e,src:L.src,alt:L.alt});if({srcSet:R,sizes:T}=d,v){let{props:t}=(0,a.getImageProps)({...e,src:I.src,alt:I.alt}),{srcSet:i,sizes:n}=t;(0,c.preload)(L.src,{as:"image",fetchPriority:"high",imageSrcSet:R,imageSizes:T,media:E}),(0,c.preload)(I.src,{as:"image",fetchPriority:"high",imageSrcSet:i,imageSizes:n,media:r})}}z[15]=l,z[16]=u,z[17]=p,z[18]=M,z[19]=F,z[20]=h,z[21]=f,z[22]=j,z[23]=m,z[24]=g,z[25]=v,z[26]=b,z[27]=n,z[28]=x,z[29]=_,z[30]=E,z[31]=T,z[32]=R,z[33]=k,z[34]=L,z[35]=I,z[36]=A}else E=z[30],T=z[31],R=z[32],k=z[33],L=z[34],I=z[35],A=z[36];if(A!==Symbol.for("react.early_return_sentinel"))return A;z[37]!==E||z[38]!==T||z[39]!==R?(P=(0,t.jsx)("source",{media:E,srcSet:R,sizes:T}),z[37]=E,z[38]=T,z[39]=R,z[40]=P):P=z[40];let B=v||"eager"===j?"eager":"lazy",D=v?"high":void 0;return z[41]!==u||z[42]!==k||z[43]!==b||z[44]!==L.lqip||z[45]!==I||z[46]!==x||z[47]!==B||z[48]!==D?(C=(0,t.jsx)(o.default,{image:I,desktopPlaceholder:L.lqip,sizes:x,quality:b,loading:B,fetchPriority:D,crossOrigin:u,...k}),z[41]=u,z[42]=k,z[43]=b,z[44]=L.lqip,z[45]=I,z[46]=x,z[47]=B,z[48]=D,z[49]=C):C=z[49],z[50]!==l||z[51]!==g||z[52]!==n||z[53]!==P||z[54]!==C?($=(0,t.jsxs)("picture",{ref:n,className:l,...g,children:[P,C]}),z[50]=l,z[51]=g,z[52]=n,z[53]=P,z[54]=C,z[55]=$):$=z[55],$});u.displayName="ResponsiveImage",e.s(["default",0,u])},371136,e=>{"use strict";var t=e.i(500932),r=e.i(883495),i=e.i(815711),n=e.i(271645),a=e.i(448806),s=e.i(764548);e.s(["useLenisSnap",0,(e,o,l,c)=>{let d,u,p,h=(0,t.c)(24);h[0]!==c?(d=void 0===c?{}:c,h[0]=c,h[1]=d):d=h[1];let{debounce:f,desktopMinWidth:m,distanceThreshold:g,duration:v,easing:b,allViewports:x,listingWheel:y}=d,w=void 0===f?500:f,S=void 0===m?1024:m,_=void 0!==x&&x,E=(0,n.useRef)(void 0),T=(0,a.usePageTransitioning)();return h[2]!==_||h[3]!==w||h[4]!==S||h[5]!==g||h[6]!==v||h[7]!==b||h[8]!==o||h[9]!==T||h[10]!==e||h[11]!==y?(u=()=>{if(!e||T)return;if(y){let t=((e,t,{multiplier:r,maxStep:i,departureRatio:n,debounce:a,duration:o,easing:l})=>{let c=e.rootElement,d=e.options.virtualScroll,u=0,p=!1,h=()=>{window.clearTimeout(u),u=0},f=()=>e.isStopped||e.isLocked||(0,s.isScrollResetting)(c)||(0,s.isScrollFolding)(c)||c.hasAttribute(s.SCROLL_RESIZING_ATTRIBUTE),m=s=>{if(h(),d?.(s)===!1)return!1;let{event:m}=s;if("wheel"!==m.type||m.ctrlKey||f()||!e.options.smoothWheel||!s.deltaY||Math.abs(s.deltaX)>Math.abs(s.deltaY))return!0;let g=m.composedPath();if(g.slice(0,g.indexOf(c)).some(t=>t instanceof HTMLElement&&(e.options.prevent?.(t)||t.hasAttribute("data-lenis-prevent")||t.hasAttribute("data-lenis-prevent-wheel")||t.hasAttribute("data-lenis-prevent-vertical"))))return!0;let v=c.clientHeight*i;s.deltaY=Math.max(-v,Math.min(v,s.deltaY*r));let b=Math.sign(s.deltaY);return u=window.setTimeout(()=>{if(u=0,p||f()||!m.defaultPrevented||"native"===e.isScrolling)return;let r=c.getBoundingClientRect();if(!r.height)return;let i=c.clientHeight/r.height,a=e.scroll,s=((e,t,r,i)=>{if(!e.length)return null;let n=e.findIndex(e=>e>=t);if(-1===n)return e[e.length-1];if(0===n)return e[0];let a=e[n],s=e[n-1];if(a-t<=1)return a;if(t-s<=1)return s;let o=(a-s)*i;return r>0?t-s+1>=o?a:s:a-t+1>=o?s:a})(t().map(e=>a+(e.getBoundingClientRect().top-r.top)*i).sort((e,t)=>e-t),e.targetScroll+a-e.animatedScroll,b,n);null!==s&&e.scrollTo(s,{duration:o,easing:l,userData:{initiator:"snap"}})},a),!0};return e.options.virtualScroll=m,c.addEventListener("touchstart",h,{passive:!0}),{resize:h,destroy:()=>{p=!0,h(),c.removeEventListener("touchstart",h),e.options.virtualScroll===m&&(e.options.virtualScroll=d)}}})(e,o,{...y,debounce:w,duration:v,easing:b});return E.current=t.resize,r.default.addEventListener("refresh",t.resize),()=>{E.current=void 0,r.default.removeEventListener("refresh",t.resize),t.destroy()}}let t=window.matchMedia(_?"(min-width: 0px)":`(min-width: ${S}px) and (pointer: fine)`),n=e.rootElement,a=null,l=!1,c=null,d=()=>{if(c?.(),a?.stop(),a?.destroy(),c=null,a=null,!t.matches)return;let r=o().filter(Boolean);r.length&&(c=(a=new i.default(e,{type:"proximity",debounce:w,distanceThreshold:g,duration:v,easing:b})).addElements(r,{align:["start"]}),l&&a.stop())},u=()=>{l=!0,a?.stop()},p=()=>{l=!1,a?.start()};return E.current=d,d(),t.addEventListener("change",d),n.addEventListener("touchstart",u,{passive:!0}),n.addEventListener("wheel",p,{passive:!0}),r.default.addEventListener("refresh",d),()=>{E.current=void 0,t.removeEventListener("change",d),n.removeEventListener("touchstart",u),n.removeEventListener("wheel",p),r.default.removeEventListener("refresh",d),c?.(),a?.stop(),a?.destroy()}},h[2]=_,h[3]=w,h[4]=S,h[5]=g,h[6]=v,h[7]=b,h[8]=o,h[9]=T,h[10]=e,h[11]=y,h[12]=u):u=h[12],h[13]!==_||h[14]!==w||h[15]!==l||h[16]!==S||h[17]!==g||h[18]!==v||h[19]!==b||h[20]!==T||h[21]!==e||h[22]!==y?(p=[w,S,_,y,g,v,b,e,T,...l],h[13]=_,h[14]=w,h[15]=l,h[16]=S,h[17]=g,h[18]=v,h[19]=b,h[20]=T,h[21]=e,h[22]=y,h[23]=p):p=h[23],(0,n.useEffect)(u,p),E}],371136)},676842,e=>{"use strict";var t=e.i(500932),r=e.i(764548),i=e.i(573943);let n=500;var a=e.i(271645);e.s(["useNativeSnap",0,(e,s,o,l)=>{let c,d,u,p=(0,t.c)(12);p[0]!==l?(c=void 0===l?{}:l,p[0]=l,p[1]=c):c=p[1];let{debounce:h,distanceThreshold:f,duration:m,easing:g,nativeRestDelay:v}=c;p[2]!==h||p[3]!==f||p[4]!==m||p[5]!==g||p[6]!==s||p[7]!==o||p[8]!==e||p[9]!==v?(d=()=>{if(e&&o)return((e,t,{debounce:a=n,distanceThreshold:s,duration:o,easing:l,nativeRestDelay:c}={})=>{let d=e.rootElement,u=0,p=null,h=!1,f=-1/0,m=()=>{u&&(window.clearTimeout(u),u=0)},g=(n=!1)=>{if(u=0,h||e.isStopped||"smooth"===e.isScrolling||!n&&e.isScrolling||(0,r.isScrollResetting)(d)||d.hasAttribute(r.SCROLL_RESIZING_ATTRIBUTE))return;let a=d.scrollTop,c=d.getBoundingClientRect().top,p=null;for(let e of t()){let t=e.getBoundingClientRect().top-c+a;(null===p||Math.abs(t-a)<Math.abs(p-a))&&(p=t)}null===p||1>Math.abs(p-a)||Math.abs(p-a)>((e,t)=>{if(void 0===e)return 1/0;if("number"==typeof e)return e;let r=e.trim().endsWith("%"),i=Number.parseFloat(e);return Number.isFinite(i)?r?i/100*t:i:1/0})(s,d.clientHeight)||((0,i.scrollTrace)("snap",{from:Math.round(a),to:Math.round(p)}),e.scrollTo(p,{duration:o,easing:l,userData:{initiator:"snap"}}))},v=()=>{if((0,r.isScrollResetting)(d)){p=null,m();return}if(!d.hasAttribute(r.SCROLL_RESIZING_ATTRIBUTE)&&(void 0===c||"smooth"===e.isScrolling)){if("native"===e.isScrolling){p="native",m();return}if("smooth"===e.isScrolling){p="smooth",m();return}"native"===p&&(p=null,m(),u=window.setTimeout(g,a))}},b=()=>{void 0===c||"smooth"===e.isScrolling||(0,r.isScrollResetting)(d)||d.hasAttribute(r.SCROLL_RESIZING_ATTRIBUTE)||(m(),f=performance.now(),u=window.setTimeout(()=>g(!0),c+a))},x=()=>{void 0!==c&&u&&!h&&(m(),g(!0))},y=()=>{h=!0,m()},w=()=>{if(h=!1,void 0!==c){if(performance.now()-f>=c+a){m(),g(!0);return}b();return}!1===e.isScrolling&&(m(),u=window.setTimeout(g,a))};return e.on("scroll",v),d.addEventListener("scroll",b,{passive:!0}),d.addEventListener("scrollend",x,{passive:!0}),d.addEventListener("touchstart",y,{passive:!0}),d.addEventListener("touchend",w,{passive:!0}),d.addEventListener("touchcancel",w,{passive:!0}),()=>{m(),e.off("scroll",v),d.removeEventListener("scroll",b),d.removeEventListener("scrollend",x),d.removeEventListener("touchstart",y),d.removeEventListener("touchend",w),d.removeEventListener("touchcancel",w)}})(e,s,{debounce:h,distanceThreshold:f,duration:m,easing:g,nativeRestDelay:v})},u=[e,s,o,h,f,m,g,v],p[2]=h,p[3]=f,p[4]=m,p[5]=g,p[6]=s,p[7]=o,p[8]=e,p[9]=v,p[10]=d,p[11]=u):(d=p[10],u=p[11]),(0,a.useEffect)(d,u)}],676842)},229352,e=>{"use strict";let t="#form",r={duration:1.2,offset:-200};e.s(["FORM_ANCHOR",0,t,"scrollToForm",0,(e,i)=>{e&&(i?.preventDefault(),e.scrollTo(t,r))}])}]);