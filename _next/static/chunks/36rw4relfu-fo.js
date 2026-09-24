(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,815711,e=>{"use strict";function t(e,t){let i;return function(...r){clearTimeout(i),i=setTimeout(()=>{i=void 0,e.apply(this,r)},t)}}var i=class{element;options;align;rect={};wrapperResizeObserver;resizeObserver;debouncedWrapperResize;constructor(e,{align:i=["start"],ignoreSticky:r=!0,ignoreTransform:n=!1}={}){this.element=e,this.options={align:i,ignoreSticky:r,ignoreTransform:n},this.align=[i].flat(),this.debouncedWrapperResize=t(this.onWrapperResize,500),this.wrapperResizeObserver=new ResizeObserver(this.debouncedWrapperResize),this.wrapperResizeObserver.observe(document.body),this.onWrapperResize(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.element),this.setRect({width:this.element.offsetWidth,height:this.element.offsetHeight})}destroy(){this.wrapperResizeObserver.disconnect(),this.resizeObserver.disconnect()}setRect({top:e,left:t,width:i,height:r,element:n}={}){e=e??this.rect.top,t=t??this.rect.left,i=i??this.rect.width,r=r??this.rect.height,n=n??this.rect.element,(e!==this.rect.top||t!==this.rect.left||i!==this.rect.width||r!==this.rect.height||n!==this.rect.element)&&(this.rect.top=e,this.rect.y=e,this.rect.width=i,this.rect.height=r,this.rect.left=t,this.rect.x=t,this.rect.bottom=e+r,this.rect.right=t+i)}onWrapperResize=()=>{let e,t;if(this.options.ignoreSticky&&function e(t){"sticky"===getComputedStyle(t).position&&(t.style.setProperty("position","static"),t.dataset.sticky="true"),t.offsetParent&&e(t.offsetParent)}(this.element),this.options.ignoreTransform)e=function e(t,i=0){let r=i+t.offsetTop;return t.offsetParent?e(t.offsetParent,r):r}(this.element),t=function e(t,i=0){let r=i+t.offsetLeft;return t.offsetParent?e(t.offsetParent,r):r}(this.element);else{let i=this.element.getBoundingClientRect();e=i.top+function e(t,i=0){let r=i+t.scrollTop;return t.offsetParent?e(t.offsetParent,r):r+window.scrollY}(this.element),t=i.left+function e(t,i=0){let r=i+t.scrollLeft;return t.offsetParent?e(t.offsetParent,r):r+window.scrollX}(this.element)}this.options.ignoreSticky&&function e(t){t?.dataset?.sticky==="true"&&(t.style.removeProperty("position"),delete t.dataset.sticky),t.offsetParent&&e(t.offsetParent)}(this.element),this.setRect({top:e,left:t})};onResize=([e])=>{if(!e?.borderBoxSize[0])return;let t=e.borderBoxSize[0].inlineSize,i=e.borderBoxSize[0].blockSize;this.setRect({width:t,height:i})}};let r=0;var n=class{options;elements=new Map;snaps=new Map;viewport={width:window.innerWidth,height:window.innerHeight};isStopped=!1;onSnapDebounced;currentSnapIndex;constructor(e,{type:i="proximity",lerp:r,easing:n,duration:a,distanceThreshold:s="50%",debounce:o=500,onSnapStart:l,onSnapComplete:d}={}){this.lenis=e,window.lenis||(window.lenis={}),window.lenis.snap=!0,this.options={type:i,lerp:r,easing:n,duration:a,distanceThreshold:s,debounce:o,onSnapStart:l,onSnapComplete:d},this.onWindowResize(),window.addEventListener("resize",this.onWindowResize),this.onSnapDebounced=t(this.onSnap,this.options.debounce),this.lenis.on("virtual-scroll",this.onSnapDebounced)}destroy(){this.lenis.off("virtual-scroll",this.onSnapDebounced),window.removeEventListener("resize",this.onWindowResize),this.elements.forEach(e=>{e.destroy()})}start(){this.isStopped=!1}stop(){this.isStopped=!0}add(e){let t=r++;return this.snaps.set(t,{value:e}),()=>this.snaps.delete(t)}addElement(e,t={}){let n=r++;return this.elements.set(n,new i(e,t)),()=>this.elements.delete(n)}addElements(e,t={}){let i=[...e].map(e=>this.addElement(e,t));return()=>{i.forEach(e=>{e()})}}onWindowResize=()=>{this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight};computeSnaps=()=>{let{isHorizontal:e}=this.lenis,t=[...this.snaps.values()];return this.elements.forEach(({rect:i,align:r})=>{let n;r.forEach(r=>{"start"===r?n=i.top:"center"===r?n=e?i.left+i.width/2-this.viewport.width/2:i.top+i.height/2-this.viewport.height/2:"end"===r&&(n=e?i.left+i.width-this.viewport.width:i.top+i.height-this.viewport.height),"number"==typeof n&&t.push({value:Math.ceil(n)})})}),t=t.sort((e,t)=>Math.abs(e.value)-Math.abs(t.value))};previous(){this.goTo((this.currentSnapIndex??0)-1)}next(){this.goTo((this.currentSnapIndex??0)+1)}goTo(e){let t=this.computeSnaps();if(0===t.length)return;this.currentSnapIndex=Math.max(0,Math.min(e,t.length-1));let i=t[this.currentSnapIndex];void 0!==i&&this.lenis.scrollTo(i.value,{duration:this.options.duration,easing:this.options.easing,lerp:this.options.lerp,lock:"lock"===this.options.type,userData:{initiator:"snap"},onStart:()=>{this.options.onSnapStart?.({index:this.currentSnapIndex,...i})},onComplete:()=>{this.options.onSnapComplete?.({index:this.currentSnapIndex,...i})}})}get distanceThreshold(){if("mandatory"===this.options.type)return 1/0;let{isHorizontal:e}=this.lenis,t=e?"width":"height";return"string"==typeof this.options.distanceThreshold&&this.options.distanceThreshold.endsWith("%")?Number(this.options.distanceThreshold.replace("%",""))/100*this.viewport[t]:"number"==typeof this.options.distanceThreshold?this.options.distanceThreshold:this.viewport[t]}onSnap=e=>{let t;if(this.isStopped||"touchmove"===e.event.type||"lock"===this.options.type&&this.lenis.userData?.initiator==="snap")return;let{scroll:i,isHorizontal:r}=this.lenis,n=r?e.deltaX:e.deltaY;i=Math.ceil(this.lenis.scroll+n);let a=this.computeSnaps();if(0===a.length)return;let s=a.findLastIndex(({value:e})=>e<i),o=a.findIndex(({value:e})=>e>i);if("lock"===this.options.type)n>0?t=o:n<0&&(t=s);else{let e=a[s],r=e?Math.abs(i-e.value):1/0,n=a[o];t=r<(n?Math.abs(i-n.value):1/0)?s:o}if(void 0===t||-1===t)return;t=Math.max(0,Math.min(t,a.length-1));let l=a[t];Math.abs(i-l.value)<=this.distanceThreshold&&this.goTo(t)};resize(){this.elements.forEach(e=>{e.onWrapperResize()})}};e.s(["default",0,n])},948025,e=>{"use strict";var t=e.i(481293);let i={texture:{width:1920,height:1920,quality:85},trail:{width:640,height:800,quality:85},pattern:{width:1480,height:1480,quality:85}};e.s(["imageRenditionSrc",0,(e,r)=>{let n=(0,t.resolveSanityImage)(e);if(!n)return null;try{let{width:e,height:a,quality:s}=i[r],o=(0,t.imageDimensions)(n),l=o?Math.max(1,Math.min(e,Math.floor(a*o.width/o.height))):e,d=(0,t.urlFor)(n).width(l).fit("max").quality(s);return"texture"===r?d.format("webp").url():d.auto("format").url()}catch{return null}}])},149624,e=>{"use strict";let t=e=>{try{let t=new URL(e.trim());if(t.hostname.includes("youtube.com")){let e=t.searchParams.get("v");if(e)return{provider:"youtube",id:e};let i=t.pathname.match(/\/embed\/([^/]+)/);if(i?.[1])return{provider:"youtube",id:i[1]};let r=t.pathname.match(/\/shorts\/([^/]+)/);if(r?.[1])return{provider:"youtube",id:r[1]}}if("youtu.be"===t.hostname){let e=t.pathname.replace(/^\//,"").split("/")[0];if(e)return{provider:"youtube",id:e}}if(t.hostname.includes("vimeo.com")){let e=t.pathname.split("/").filter(Boolean).at(-1);if(e&&/^\d+$/.test(e))return{provider:"vimeo",id:e}}return null}catch{return null}},i=({provider:e,id:t})=>{if("youtube"===e){let e=new URLSearchParams,i=window.location.origin;i&&e.set("origin",i);let r=e.toString();return`https://www.youtube.com/embed/${t}${r?`?${r}`:""}`}return`https://player.vimeo.com/video/${t}`};e.s(["getAutoplayVideoEmbedUrl",0,e=>{let r=t(e);if(!r)return null;let n=i(r);if("youtube"===r.provider){let e=new URLSearchParams({autoplay:"1",mute:"1",rel:"0",modestbranding:"1",playsinline:"1"}),t=window.location.origin;return t&&e.set("origin",t),`${n.split("?")[0]}?${e.toString()}`}let a=new URLSearchParams({autoplay:"1",muted:"1",playsinline:"1",autopause:"0"});return`${n}?${a.toString()}`},"getExternalVideoUrl",0,e=>e?.url?.trim()||void 0,"getVideoEmbedUrl",0,i,"parseVideoUrl",0,t])},124821,135741,e=>{"use strict";var t=e.i(843476),i=e.i(500932);let r=null;var n=e.i(271645),a=e.i(575509),s=e.i(212960),o=e.i(951847),l=e.i(997053);let d=[...Array(25)].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.02*t}s; }`).join("\n"),c=({$isFullWidth:e})=>l.css`
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
            
                ${d}
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
`,p=(0,l.default)(o.Link).withConfig({componentId:"sc-6f2721c4-0"})(({$isFullWidth:e})=>l.css`
        ${c({$isFullWidth:e})}
    `),u=l.default.button.withConfig({componentId:"sc-6f2721c4-1"})(({$isFullWidth:e})=>l.css`
        ${c({$isFullWidth:e})}
    `);e.s(["Button",0,u,"Jacket",0,p,"sharedStyles",0,c],135741);let h=e=>{let a,s,o,l,d=(0,i.c)(6),c=(0,n.useRef)(null),h=(0,n.useRef)(null);if(d[0]!==e.isButton?(a=()=>{let t=e.isButton?c.current:h.current;if(t){let e;return(e=r||(r=new IntersectionObserver(e=>{for(let t of e)t.target instanceof HTMLElement&&t.target.style.setProperty("--play-state",t.isIntersecting?"running":"paused")},{threshold:0}))).observe(t),()=>e.unobserve(t)}},s=[e.isButton],d[0]=e.isButton,d[1]=a,d[2]=s):(a=d[1],s=d[2]),(0,n.useEffect)(a,s),d[3]!==e){l=Symbol.for("react.early_return_sentinel");e:{let i=[];for(let r=0;r<e.label.length;r+=1){let n=e.label[r];i.push((0,t.jsx)("span",{children:" "===n?" ":n},`${e.label}-${r}`))}let r=f;if(e.isButton){let{aria:n,label:a,onClick:s,isFullWidth:o,type:d,disabled:p}=e,h=void 0!==p&&p;l=(0,t.jsx)(u,{ref:c,type:void 0===d?"button":d,"aria-label":n??a,"aria-disabled":h,$isFullWidth:void 0!==o&&o,disabled:h,onClick:s,children:r(i)});break e}let{aria:n,label:a,to:s,onClick:d,isFullWidth:g,transitionAwaitsContent:m,prefetch:v,tabIndex:b}=e;o=(0,t.jsx)(p,{ref:h,href:s,"aria-label":n??a,$isFullWidth:void 0!==g&&g,onClick:d,transitionAwaitsContent:m,prefetch:v,tabIndex:b,children:r(i)})}d[3]=e,d[4]=o,d[5]=l}else o=d[4],l=d[5];return l!==Symbol.for("react.early_return_sentinel")?l:o};function f(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)("i",{"aria-hidden":"true"})]})}h.displayName="Button",e.s(["default",0,h],124821)},995340,e=>{"use strict";var t=e.i(917070),i=e.i(720212);let r=["fullName","preferredContact","email","number","postcode","preferredSite","carMakeModel","carRegistration","message"],n="companyName",a="fillTimeMs";function s(e){let r={},{preferredContact:n,email:a,number:s,postcode:o,fullName:l}=e;return l.trim()||(r.fullName="Field is required"),n||(r.preferredContact="Field is required"),"email"===n?a.trim()?(0,t.validateEmail)(a)||(r.email="Invalid"):r.email="Field is required":a.trim()&&!(0,t.validateEmail)(a)&&(r.email="Invalid"),"phone"===n?s.trim()?(0,i.validateUkPhone)(s)||(r.number="Invalid"):r.number="Field is required":s.trim()&&!(0,i.validateUkPhone)(s)&&(r.number="Invalid"),o.trim()&&!(0,i.validateUkPostcode)(o)&&(r.postcode="Invalid"),r}function o(e){return 0===Object.keys(s(e)).length}async function l(e,t){if(!o(e))return{error:"Please fix the highlighted fields."};let i=await fetch("/api/contact",{method:"POST",body:function(e,t){let i=new FormData;for(let t of r)i.append(t,e[t]);for(let r of(i.append(n,t.honeypot),i.append(a,String(Date.now()-t.startedAt)),e.currentCar))i.append("currentCar",r);return i}(e,t)});if(!i.ok){let e=await i.json().catch(()=>null);return{error:e?.error??"Something went wrong. Please try again."}}return{success:!0}}e.s(["FILL_TIME_FIELD",0,a,"HONEYPOT_FIELD",0,n,"getContactFormFieldErrors",0,s,"initialContactFormValues",0,{fullName:"",preferredContact:"",email:"",number:"",postcode:"",preferredSite:"",carMakeModel:"",carRegistration:"",currentCar:[],message:""},"isContactFormValid",0,o,"submitContactEnquiry",0,l])},11438,e=>{"use strict";var t=e.i(843476),i=e.i(500932),r=e.i(101384),n=e.i(607561),a=e.i(989970),s=e.i(271645),o=e.i(174080),l=e.i(575509),d=e.i(212960),c=e.i(997053);let p=(0,c.default)(l.Div).withConfig({componentId:"sc-31889f63-0"})(({$hasLabel:e})=>c.css`
		/* The source's 3em open state, restated in rem: this project's root
		   font-size is 10px and steps up past 1600px, so rem holds the intended
		   pixel size and lets the cursor grow with the type on large screens. A
		   labelled cursor opens far wider — it has to hold two lines of caption. */
		--size: ${e?"12rem":"4.8rem"};

		position: fixed;
		inset: 0 auto auto 0;
		z-index: 10000;

		display: grid;
		place-items: center;

		width: var(--size);
		height: var(--size);

		/* Purely decorative — it must never swallow a hover from the page beneath. */
		pointer-events: none;

		/* Belt and braces — the component only mounts on a fine, hovering pointer,
		   but a device that changes its input mid-session never flashes the dot. */
		@media (hover: none) and (pointer: coarse) {
			display: none;
		}
	`),u=(0,c.default)(l.Div).withConfig({componentId:"sc-31889f63-1"})(({$isActive:e,$isLight:t})=>c.css`
		--time: 0.5s;
		display: grid;
		place-items: center;

		width: 100%;
		height: 100%;
		border-radius: ${(0,l.getRadius)("round")};

		background: ${(0,l.getBrand)(t?"bc5":"bc2",t?5:60)};
		backdrop-filter: blur(16px);

		transform: scale(${e?1:.15});
		opacity: ${+!!e};

		transition:
			transform var(--time) ${(0,l.getEase)("bezzy2")},
			opacity var(--time) ${(0,l.getEase)("bezzy2")};
	`),h=(0,c.default)(l.Div).attrs({as:"span"}).withConfig({componentId:"sc-31889f63-2"})(({$isActive:e})=>c.css`
		${d.bodyS}

		text-align: center;
		text-wrap: balance;
		color: ${(0,l.getBrand)("bc5")};


		opacity: ${+!!e};
		transition: opacity var(--time) ${(0,l.getEase)("bezzy2")} ${e?"0.2s":"0s"};
	`),f="power3",g={x:0,y:0,isKnown:!1},m=e=>{let l,d,c,m,v,b,y,w,x,$=(0,i.c)(21),{isActive:k,label:S,isLight:z}=e,E=void 0!==k&&k,B=void 0!==z&&z,{isReducedMotion:C}=(0,s.use)(r.PerformanceContext),I=(0,s.useRef)(null),[R,L]=(0,s.useState)(!1),[P,j]=(0,s.useState)(!1);if($[0]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{let e=window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)"),t=()=>L(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},d=[],$[0]=l,$[1]=d):(l=$[0],d=$[1]),(0,s.useEffect)(l,d),$[2]!==R?(c=()=>{if(!R)return;let e=0,t=requestAnimationFrame(()=>{e=requestAnimationFrame(()=>j(!0))});return()=>{cancelAnimationFrame(t),cancelAnimationFrame(e)}},m=[R],$[2]=R,$[3]=c,$[4]=m):(c=$[3],m=$[4]),(0,s.useEffect)(c,m),$[5]!==C?(v=()=>{let e=I.current;if(!e)return;a.default.set(e,{xPercent:-50,yPercent:-50}),g.isKnown&&a.default.set(e,{x:g.x,y:g.y});let t=.6*!C,i=a.default.quickTo(e,"x",{duration:t,ease:f}),r=a.default.quickTo(e,"y",{duration:t,ease:f}),n=g.isKnown,s=t=>{if(g.x=t.clientX,g.y=t.clientY,g.isKnown=!0,!n){n=!0,a.default.set(e,{x:t.clientX,y:t.clientY});return}i(t.clientX),r(t.clientY)};return window.addEventListener("mousemove",s),()=>window.removeEventListener("mousemove",s)},$[5]=C,$[6]=v):v=$[6],$[7]!==R||$[8]!==C?(b={scope:I,dependencies:[R,C]},$[7]=R,$[8]=C,$[9]=b):b=$[9],(0,n.useAnimation)(v,b),!R)return null;let T=!!S,M=E&&P;return $[10]!==E||$[11]!==P||$[12]!==S?(y=S&&(0,t.jsx)(h,{$isActive:E&&P,children:S}),$[10]=E,$[11]=P,$[12]=S,$[13]=y):y=$[13],$[14]!==B||$[15]!==M||$[16]!==y?(w=(0,t.jsx)(u,{$isActive:M,$isLight:B,children:y}),$[14]=B,$[15]=M,$[16]=y,$[17]=w):w=$[17],$[18]!==w||$[19]!==T?(x=(0,o.createPortal)((0,t.jsx)(p,{ref:I,$hasLabel:T,"aria-hidden":!0,children:w}),document.body),$[18]=w,$[19]=T,$[20]=x):x=$[20],x};m.displayName="Cursor",e.s(["default",0,m],11438)},814955,478648,e=>{"use strict";var t=e.i(843476),i=e.i(500932),r=e.i(523289),n=e.i(271645),a=e.i(321316),s=e.i(720212);let o=e=>{let o,d,c,p,u,h,f,g,m,v=(0,i.c)(57),{label:b,id:y,name:w,type:x,autoComplete:$,required:k,isOptional:S,placeholder:z,options:E,error:B,disabled:C,onChange:I,onBlur:R}=e;v[0]!==E?(o=void 0===E?[]:E,v[0]=E,v[1]=o):o=v[1];let L=o,P=void 0!==C&&C,j=(0,n.useRef)(null),[T,M]=(0,n.useState)(""),[F,A]=(0,n.useState)(""),[G,W]=(0,n.useState)(""),[D,O]=(0,n.useState)(null),q=void 0!==B,U=q?B:D;v[2]===Symbol.for("react.memo_cache_sentinel")?(d=e=>{O(e),j.current?.setCustomValidity(e??"")},v[2]=d):d=v[2];let _=d;v[3]!==U?(c=()=>{j.current?.setCustomValidity(U??"")},p=[U],v[3]=U,v[4]=c,v[5]=p):(c=v[4],p=v[5]),(0,n.useEffect)(c,p),v[6]!==D||v[7]!==q||v[8]!==I||v[9]!==x?(u=e=>{if("tel"===x&&e.target instanceof HTMLInputElement){let t=(0,s.formatUkPhone)(e.target.value);e.target.value=t,M(t)}if("postcode"===x&&e.target instanceof HTMLInputElement){let t=(0,s.formatUkPostcode)(e.target.value);e.target.value=t,A(t)}"radio"===x&&e.target instanceof HTMLInputElement&&W(e.target.value),!q&&D&&_(null),I?.(e)},v[6]=D,v[7]=q,v[8]=I,v[9]=x,v[10]=u):u=v[10];let H=u;v[11]!==q||v[12]!==R||v[13]!==k||v[14]!==x?(h=e=>{q||_((0,s.getValidationError)(x,e.target.value,k)),R?.(e)},v[11]=q,v[12]=R,v[13]=k,v[14]=x,v[15]=h):h=v[15];let N=h,Y=!!U||void 0,V=U?`${y}-error`:void 0;v[16]!==$||v[17]!==P||v[18]!==N||v[19]!==H||v[20]!==y||v[21]!==w||v[22]!==z||v[23]!==k||v[24]!==V||v[25]!==Y?(f={id:y,name:w,autoComplete:$,required:k,placeholder:z,disabled:P,onChange:H,onBlur:N,"aria-invalid":Y,"aria-describedby":V},v[16]=$,v[17]=P,v[18]=N,v[19]=H,v[20]=y,v[21]=w,v[22]=z,v[23]=k,v[24]=V,v[25]=Y,v[26]=f):f=v[26];let X=f;if(v[27]!==X){let{placeholder:e,...t}=X;g=t,v[27]=X,v[28]=g}else g=v[28];if(v[29]!==$||v[30]!==P||v[31]!==U||v[32]!==N||v[33]!==H||v[34]!==y||v[35]!==S||v[36]!==b||v[37]!==w||v[38]!==L||v[39]!==T||v[40]!==z||v[41]!==F||v[42]!==k||v[43]!==g||v[44]!==G||v[45]!==X||v[46]!==x){let e,i,n=`${y}-label`,s="radio"===x?void 0:y;v[48]!==U||v[49]!==y||v[50]!==S?(e=(S||U)&&(0,t.jsxs)("em",{children:[S&&(0,t.jsx)("span",{children:"optional"}),U&&(0,t.jsxs)("span",{id:`${y}-error`,role:"alert",children:[" ",U,(0,t.jsx)(r.default,{type:"close"})]})]}),v[48]=U,v[49]=y,v[50]=S,v[51]=e):e=v[51],v[52]!==b||v[53]!==n||v[54]!==s||v[55]!==e?(i=(0,t.jsxs)("label",{id:n,htmlFor:s,children:[b,e]}),v[52]=b,v[53]=n,v[54]=s,v[55]=e,v[56]=i):i=v[56],m=(0,t.jsxs)(a.Jacket,{$hasError:!!U,$isDisabled:P,children:[i,(()=>{switch(x){case"textarea":return(0,t.jsx)("textarea",{...X,ref:j});case"select":return(0,t.jsx)(a.SelectWrap,{children:(0,t.jsxs)("select",{...g,ref:j,defaultValue:"",required:k,children:[(0,t.jsx)("option",{value:"",disabled:!0,hidden:!z,children:z??"Select an option"}),L.map(l)]})});case"radio":return(0,t.jsx)(a.RadioGroup,{role:"radiogroup","aria-labelledby":`${y}-label`,"aria-required":k,children:L.map((e,i)=>{let r=`${y}-${e.value.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`;return(0,t.jsxs)(a.RadioOption,{htmlFor:r,children:[(0,t.jsx)("input",{ref:0===i?j:void 0,type:"radio",id:r,name:w,value:e.value,checked:G===e.value,required:k,disabled:P,onChange:H,onBlur:N}),(0,t.jsx)(a.RadioControl,{"aria-hidden":!0}),(0,t.jsx)("span",{"data-name":"label",children:e.label})]},e.value)})});case"tel":return(0,t.jsx)("input",{...X,ref:j,type:"tel",inputMode:"numeric",autoComplete:$??"tel",value:T,maxLength:13});case"postcode":return(0,t.jsx)("input",{...X,ref:j,type:"text",autoComplete:$??"postal-code",autoCapitalize:"characters",spellCheck:!1,value:F,maxLength:8});case"email":return(0,t.jsx)("input",{...X,ref:j,type:"email"});default:return(0,t.jsx)("input",{...X,ref:j,type:x})}})()]}),v[29]=$,v[30]=P,v[31]=U,v[32]=N,v[33]=H,v[34]=y,v[35]=S,v[36]=b,v[37]=w,v[38]=L,v[39]=T,v[40]=z,v[41]=F,v[42]=k,v[43]=g,v[44]=G,v[45]=X,v[46]=x,v[47]=m}else m=v[47];return m};function l(e){return(0,t.jsx)("option",{value:e.value,children:e.label},e.value)}o.displayName="FormInput",e.s(["default",0,o],814955);var d=e.i(575509),c=e.i(212960),p=e.i(997053);let u=(0,p.default)(d.Div).attrs({as:"section"}).withConfig({componentId:"sc-d79889f-0"})(()=>p.css`
		position: relative;
		z-index: 2;

		padding-bottom: ${(0,d.getGap)("huge")};
		background: ${(0,d.getBrand)("bc3")};

		${d.bp.l`
			padding-bottom: ${(0,d.getGap)("col")};
		`}
	`),h=(0,p.default)(d.Div).attrs({as:"div"}).withConfig({componentId:"sc-d79889f-1"})(()=>p.css`
		position: relative;
		height: 100%;
	`),f=(e,t)=>p.css`
	p[role='status'], p[role='alert'] {
		${c.bodyS}

		display: ${t?"none":"block"};

		padding: ${(0,d.getGap)("s")} ${(0,d.getGap)("sm")};
		text-align: center;
		margin-top: ${t?(0,d.getGap)("s"):0};
		max-width: 100%;

		${d.bp.l`
			display: ${t?"block":"none"};
			max-width: calc(100vw / 12 * 3 - ${e.grid.gutter.l});
		`}
	}

	p[role='status'] {
		color: ${(0,d.getBrand)("bc4")};
		background: ${(0,d.getBrand)("bc4",10)};
	}

	p[role='alert'] {
		color: ${(0,d.getFeedback)("negative")};
		background: ${(0,d.getFeedback)("negative",10)};
	}
`,g=(0,p.default)(d.Div).withConfig({componentId:"sc-d79889f-2"})(({theme:e})=>p.css`
		position: sticky;
		top: ${(0,d.getGap)("col")};
		left: 0;

		display: flex;
		flex-direction: column;
		gap: ${(0,d.getGap)("sm")};
		margin-bottom: ${(0,d.getGap)("xl")};

		${d.bp.l` margin-bottom: 0; `}


		h2, p { text-wrap: balance; }

		h2 {
			${c.headlineS}

			color: ${(0,d.getBrand)("bc5")};
		}

		p {
			${c.bodyS}

			color: ${(0,d.getBrand)("bc5",60)};
			
			${d.bp.l`
				max-width: calc(100vw / 12 * 3 - ${e.grid.gutter.l});
			`}
		}

		${f(e,!0)}
	`),m=(0,p.default)(d.Div).withConfig({componentId:"sc-d79889f-3"})(()=>p.css`
		width: 100%;
	`),v=p.default.form.withConfig({componentId:"sc-d79889f-4"})(()=>p.css`
		position: relative;
		display: flex;
		flex-direction: column;
		gap: ${(0,d.getGap)("m")};
		
		${d.bp.m` gap: ${(0,d.getGap)("l")} `}
	`),b=(0,p.default)(d.Div).withConfig({componentId:"sc-d79889f-5"})(()=>p.css`
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	`),y=(0,p.default)(d.Div).withConfig({componentId:"sc-d79889f-6"})(({theme:e})=>p.css`
		display: flex;
		flex-direction: column;
		gap: ${(0,d.getGap)("s")};

		${f(e,!1)}
	`);e.s(["ButtonContainer",0,y,"Fields",0,v,"FieldsWrap",0,m,"Honeypot",0,b,"Intro",0,h,"IntroSticky",0,g,"Jacket",0,u],478648)},321316,e=>{"use strict";var t=e.i(575509),i=e.i(212960),r=e.i(997053);let n=r.css`
	${i.bodyL}

	display: block;
	width: 100%;
	padding: ${(0,t.getGap)("sm")};
	border: 1px solid ${(0,t.getBrand)("bc5",20)};
	background: transparent;
	color: ${(0,t.getBrand)("bc5")};

	transition: border-color var(--speed) var(--ease);

	&::placeholder {
		color: ${(0,t.getBrand)("bc5",55)};
	}

	/* No focus ring — a focused field, however it was reached, just brightens its
	   border, the same way the selected state does. */
	&:focus,
	&:focus-visible {
		outline: none;
		border-color: ${(0,t.getBrand)("bc5",60)};
	}
`,a=(0,r.default)(t.Div).attrs({as:"fieldset"}).withConfig({componentId:"sc-9bb93277-0"})(({$hasError:e,$isDisabled:a})=>r.css`
		--speed: 0.3s;
		--ease: ${(0,t.getEase)("ease")};

		display: flex;
		flex-direction: column;
		gap: ${(0,t.getGap)("s")};
		border: none;
		opacity: ${a?.5:1};
		pointer-events: ${a?"none":"auto"};
		transition: opacity var(--speed) var(--ease);

		label {
			${i.captionL}

			display: flex;
			justify-content: flex-start;
			align-items: center;
			color: ${(0,t.getBrand)("bc5")};
			width: 100%;
			transition: opacity var(--speed) var(--ease);

			em {
				font-style: normal;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				flex: 1;
				gap: ${(0,t.getGap)("xs")};
				pointer-events: none;
				user-select: none;

				> span {
					color: ${(0,t.getBrand)("bc5",55)};

					@keyframes fade-in {
						from {
							opacity: 0;
						}
					}

					animation: fade-in 0.3s var(--ease) forwards;

					&[role='alert'] {
						display: flex;
						align-items: center;
						gap: ${(0,t.getGap)("xs")};
						color: ${(0,t.getFeedback)("negative")};

						svg {
							--size: 1rem;

							stroke: ${(0,t.getFeedback)("negative")};
							stroke-width: 2px;
							transform: translateY(-0.1rem);
						}
					}
				}
			}
		}

		&:has(input[type='radio']:checked) > label,
		&:has(input:valid:not(:placeholder-shown):not([aria-invalid='true']):not([type='radio'])) > label,
		&:has(textarea:valid:not(:placeholder-shown):not([aria-invalid='true'])) > label,
		&:has(select:valid) > label {
			opacity: 0.4;
		}

		input,
		textarea,
		select {
			${n}

			${e&&r.css`
				border-color: ${(0,t.getFeedback)("negative")};
			`}
		}

		input {
			&::selection {
				background: ${(0,t.getBrand)("bc5")};
				color: ${(0,t.getBrand)("bc3")};
			}
		}

		textarea {
			min-height: 16rem;
			resize: none;
		}
	`),s=r.default.div.withConfig({componentId:"sc-9bb93277-1"})(()=>r.css`
		position: relative;
		width: 100%;

		&:after {
			--size: 0.8rem;

			content: '';
			position: absolute;
			top: 50%;
			right: ${(0,t.getGap)("m")};
			width: var(--size);
			height: var(--size);
			border-right: 1px solid ${(0,t.getBrand)("bc5")};
			border-bottom: 1px solid ${(0,t.getBrand)("bc5")};
			pointer-events: none;
			transform: translateY(-70%) rotate(45deg);
		}

		select {
			appearance: none;
			padding-right: calc(${(0,t.getGap)("m")} * 2 + 0.8rem);
			cursor: pointer;

			&:invalid,
			& option[value=''] {
				color: ${(0,t.getBrand)("bc5",55)};
			}

			&:valid {
				color: ${(0,t.getBrand)("bc5")};
				border-color: ${(0,t.getBrand)("bc5")};
			}

			&:focus:valid {
				border-color: ${(0,t.getBrand)("bc5",60)};
			}
		}
	`),o=r.default.div.withConfig({componentId:"sc-9bb93277-2"})(()=>r.css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	`),l=r.default.span.withConfig({componentId:"sc-9bb93277-3"})(()=>r.css`
		--size: 1.6rem;

		position: relative;
		flex-shrink: 0;
		width: var(--size);
		height: var(--size);
		background:  ${(0,t.getBrand)("bc5",20)};
		border-radius: 50%;
		transition:
			border-color var(--speed, 0.3s) var(--ease, ${(0,t.getEase)("ease")}),
			box-shadow var(--speed, 0.3s) var(--ease, ${(0,t.getEase)("ease")});

		&::after {
			content: '';
			position: absolute;
			inset: 25%;
			border-radius: 50%;
			background: ${(0,t.getBrand)("bc5")};
			opacity: 0;
			transform: scale(0.6);
			transition:
				opacity var(--speed, 0.3s) var(--ease, ${(0,t.getEase)("ease")}),
				transform var(--speed, 0.3s) var(--ease, ${(0,t.getEase)("ease")});
		}
	`),d=r.default.label.withConfig({componentId:"sc-9bb93277-4"})(()=>r.css`
		${n}

		position: relative;
		display: flex;
		align-items: center;
		gap: ${(0,t.getGap)("s")};
		cursor: pointer;
		width: auto;

		&:last-child {
			border-left: none;
		}

		/* The option's text — by attribute, since RadioControl is a span too. */
		> [data-name='label'] {
			${i.bodyL}

			text-transform: none;
			margin-left: 0;
			color: ${(0,t.getBrand)("bc5",55)};
			animation: none;

			transition: color var(--speed) var(--ease);
		}

		input[type='radio'] {
			position: absolute;
			inset: 0;
			z-index: 1;

			margin: 0;
			width: 100%;
			height: 100%;
			padding: 0;
			border: 0;
			opacity: 0;
			cursor: pointer;
			appearance: none;
		}

		&:has(input:checked) ${l} {
			border-color: ${(0,t.getBrand)("bc5")};

			&::after {
				opacity: 1;
				transform: scale(1);
			}
		}

		&:has(input:checked) > [data-name='label'] {
			color: ${(0,t.getBrand)("bc5")};
		}

		&:has(input:focus-visible) ${l} {
			outline: 1px solid ${(0,t.getGlobal)("white")};
			outline-offset: 2px;
			border-color: ${(0,t.getBrand)("bc5")};
			box-shadow: none;
		}
	`);e.s(["Jacket",0,a,"RadioControl",0,l,"RadioGroup",0,o,"RadioOption",0,d,"SelectWrap",0,s])},720212,917070,e=>{"use strict";function t(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function i(e){return e.replace(/\D/g,"")}function r(e){let t=i(e);return t.startsWith("44")&&12===t.length&&(t=`0${t.slice(2)}`),/^0\d{10}$/.test(t)}function n(e){let t=e.replace(/[^a-zA-Z0-9]/g,"").toUpperCase();return/^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2}$/.test(t)}e.s(["validateEmail",0,t],917070),e.s(["formatUkPhone",0,function(e){let t=i(e).slice(0,11),r=[];return t.length>0&&r.push(t.slice(0,5)),t.length>5&&r.push(t.slice(5,8)),t.length>8&&r.push(t.slice(8,11)),r.join(" ")},"formatUkPostcode",0,function(e){let t=e.replace(/[^a-zA-Z0-9]/g,"").toUpperCase().slice(0,7);return t.length<=3?t:`${t.slice(0,-3)} ${t.slice(-3)}`},"getValidationError",0,function(e,i,a){let s=i.trim();return s?("email"!==e||t(s))&&("tel"!==e||r(s))&&("postcode"!==e||n(s))?null:"Invalid":a?"Field is required":null},"validateUkPhone",0,r,"validateUkPostcode",0,n],720212)},89835,e=>{"use strict";var t=e.i(843476),i=e.i(500932),r=e.i(481293),n=e.i(180301),a=e.i(657688),s=e.i(402463),o=e.i(328852),l=e.i(271645),d=e.i(174080);let c=Number.parseInt(n.grid.breakpoints.l??"1024",10),p=(0,l.forwardRef)((e,n)=>{let l,p,u,h,f,g,m,v,b,y,w,x,$,k,S,z,E,B,C,I,R,L,P,j,T,M,F=(0,i.c)(62);F[0]!==e?({desktop:u,mobile:g,fill:h,width:S,height:f,sizes:y,quality:b,enabled:w,preload:v,loading:x,desktopMinWidth:$,desktopInLandscape:k,className:l,crossOrigin:p,...m}=e,F[0]=e,F[1]=l,F[2]=p,F[3]=u,F[4]=h,F[5]=f,F[6]=g,F[7]=m,F[8]=v,F[9]=b,F[10]=y,F[11]=w,F[12]=x,F[13]=$,F[14]=k,F[15]=S):(l=F[1],p=F[2],u=F[3],h=F[4],f=F[5],g=F[6],m=F[7],v=F[8],b=F[9],y=F[10],w=F[11],x=F[12],$=F[13],k=F[14],S=F[15]);let A=void 0===w||w,G=void 0===x?"lazy":x,W=void 0===$?c:$,D=void 0!==k&&k;if(F[16]!==l||F[17]!==p||F[18]!==u||F[19]!==D||F[20]!==W||F[21]!==A||F[22]!==h||F[23]!==f||F[24]!==G||F[25]!==g||F[26]!==m||F[27]!==v||F[28]!==b||F[29]!==n||F[30]!==y||F[31]!==S){P=Symbol.for("react.early_return_sentinel");e:{if(R=(0,r.resolveImageWithAlt)(u),L=(0,r.resolveImageWithAlt)(g),!R||!L){P=null;break e}I=h?{fill:!0}:{width:S??L.width??1200,height:f??L.height??675},E=h?{}:{width:S??R.width??1200,height:f??R.height??675};let e={sizes:y,quality:b,preload:v,loader:s.imageLoader,...I};if(R.src===L.src){P=(0,t.jsx)("picture",{ref:n,className:l,...m,children:(0,t.jsx)(o.default,{enabled:A,image:R,sizes:y,quality:b,preload:v,loading:G,crossOrigin:p,...I})});break e}z=`(min-width: ${W}px)${D?", (orientation: landscape)":""}`;let i=`(max-width: ${W-1}px)${D?" and (orientation: portrait)":""}`,{props:c}=(0,a.getImageProps)({...e,src:R.src,alt:R.alt});if({srcSet:C,sizes:B}=c,v&&A){let{props:t}=(0,a.getImageProps)({...e,src:L.src,alt:L.alt}),{srcSet:r,sizes:n}=t;(0,d.preload)(R.src,{as:"image",fetchPriority:"high",imageSrcSet:C,imageSizes:B,media:z}),(0,d.preload)(L.src,{as:"image",fetchPriority:"high",imageSrcSet:r,imageSizes:n,media:i})}}F[16]=l,F[17]=p,F[18]=u,F[19]=D,F[20]=W,F[21]=A,F[22]=h,F[23]=f,F[24]=G,F[25]=g,F[26]=m,F[27]=v,F[28]=b,F[29]=n,F[30]=y,F[31]=S,F[32]=z,F[33]=E,F[34]=B,F[35]=C,F[36]=I,F[37]=R,F[38]=L,F[39]=P}else z=F[32],E=F[33],B=F[34],C=F[35],I=F[36],R=F[37],L=F[38],P=F[39];if(P!==Symbol.for("react.early_return_sentinel"))return P;F[40]!==z||F[41]!==E||F[42]!==B||F[43]!==C||F[44]!==A?(j=A?(0,t.jsx)("source",{media:z,srcSet:C,sizes:B,...E}):null,F[40]=z,F[41]=E,F[42]=B,F[43]=C,F[44]=A,F[45]=j):j=F[45];let O=v||"eager"===G?"eager":"lazy",q=v?"high":void 0;return F[46]!==p||F[47]!==A||F[48]!==I||F[49]!==b||F[50]!==R.lqip||F[51]!==L||F[52]!==y||F[53]!==O||F[54]!==q?(T=(0,t.jsx)(o.default,{enabled:A,image:L,desktopPlaceholder:R.lqip,sizes:y,quality:b,loading:O,fetchPriority:q,crossOrigin:p,...I}),F[46]=p,F[47]=A,F[48]=I,F[49]=b,F[50]=R.lqip,F[51]=L,F[52]=y,F[53]=O,F[54]=q,F[55]=T):T=F[55],F[56]!==l||F[57]!==m||F[58]!==n||F[59]!==j||F[60]!==T?(M=(0,t.jsxs)("picture",{ref:n,className:l,...m,children:[j,T]}),F[56]=l,F[57]=m,F[58]=n,F[59]=j,F[60]=T,F[61]=M):M=F[61],M});p.displayName="ResponsiveImage",e.s(["default",0,p])},88664,e=>{"use strict";var t=e.i(843476),i=e.i(500932),r=e.i(575509),n=e.i(212960),a=e.i(997053);let s=(0,a.default)(r.Div).attrs({as:"span"}).withConfig({componentId:"sc-baf86b4b-0"})(({$isLight:e})=>a.css`
        ${n.captionL}

		position: relative;
		overflow: hidden;

        display: grid;
        place-items: center;

		padding: calc(${(0,r.getGap)("xxs")} + 1px) calc(${(0,r.getGap)("s")} - 2px) calc(${(0,r.getGap)("xxs")} - 1px) ${(0,r.getGap)("s")};

        background: ${e?(0,r.getBrand)("bc5"):(0,r.getBrand)("bc5",10)};
        color: ${e?(0,r.getBrand)("bc1"):(0,r.getBrand)("bc5")};
		backdrop-filter: blur(8px);
		
		user-select: none;
		pointer-events: none;
		
		${!e&&a.css`
                &:after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to right,
                        transparent 0%,
                        ${(0,r.getBrand)("bc5",30)} 50%,
                        transparent 100%
                    );
                    transform: translateX(-100%);
                    animation: shine 1s infinite;

                    @media (prefers-reduced-motion: reduce) {
                        animation: none;
                    }
               
                    z-index: 1;
                    pointer-events: none;
					
                }
            `}

		// Make sure the content sits above the shine effect, but under any absolutely positioned stuff
		> * {
			position: relative;
			z-index: 2;
		}

		@keyframes shine {
			from {
				transform: translateX(-100%);
			}
			to {
				transform: translateX(100%);
			}
		}
	`),o=e=>{let r,n=(0,i.c)(3),{text:a,isLight:o}=e;return n[0]!==o||n[1]!==a?(r=(0,t.jsx)(s,{$isLight:o,children:a}),n[0]=o,n[1]=a,n[2]=r):r=n[2],r};o.displayName="Tag",e.s(["default",0,o],88664)},22584,e=>{"use strict";e.s(["ARCHIVE_BASE_PATH",0,"/builds/","STOCK_BASE_PATH",0,"/stock/","buildHref",0,(e,t)=>`${e}${t}/`])},371136,e=>{"use strict";var t=e.i(500932),i=e.i(883495),r=e.i(815711),n=e.i(271645),a=e.i(448806),s=e.i(764548);e.s(["useLenisSnap",0,(e,o,l,d)=>{let c,p,u,h=(0,t.c)(24);h[0]!==d?(c=void 0===d?{}:d,h[0]=d,h[1]=c):c=h[1];let{debounce:f,desktopMinWidth:g,distanceThreshold:m,duration:v,easing:b,allViewports:y,listingWheel:w}=c,x=void 0===f?500:f,$=void 0===g?1024:g,k=void 0!==y&&y,S=(0,n.useRef)(void 0),z=(0,a.usePageTransitioning)();return h[2]!==k||h[3]!==x||h[4]!==$||h[5]!==m||h[6]!==v||h[7]!==b||h[8]!==o||h[9]!==z||h[10]!==e||h[11]!==w?(p=()=>{if(!e||z)return;if(w){let t=((e,t,{multiplier:i,maxStep:r,departureRatio:n,debounce:a,duration:o,easing:l})=>{let d=e.rootElement,c=e.options.virtualScroll,p=0,u=!1,h=()=>{window.clearTimeout(p),p=0},f=()=>e.isStopped||e.isLocked||(0,s.isScrollResetting)(d)||(0,s.isScrollFolding)(d)||d.hasAttribute(s.SCROLL_RESIZING_ATTRIBUTE),g=s=>{if(h(),c?.(s)===!1)return!1;let{event:g}=s;if("wheel"!==g.type||g.ctrlKey||f()||!e.options.smoothWheel||!s.deltaY||Math.abs(s.deltaX)>Math.abs(s.deltaY))return!0;let m=g.composedPath();if(m.slice(0,m.indexOf(d)).some(t=>t instanceof HTMLElement&&(e.options.prevent?.(t)||t.hasAttribute("data-lenis-prevent")||t.hasAttribute("data-lenis-prevent-wheel")||t.hasAttribute("data-lenis-prevent-vertical"))))return!0;let v=d.clientHeight*r;s.deltaY=Math.max(-v,Math.min(v,s.deltaY*i));let b=Math.sign(s.deltaY);return p=window.setTimeout(()=>{if(p=0,u||f()||!g.defaultPrevented||"native"===e.isScrolling)return;let i=d.getBoundingClientRect();if(!i.height)return;let r=d.clientHeight/i.height,a=e.scroll,s=((e,t,i,r)=>{if(!e.length)return null;let n=e.findIndex(e=>e>=t);if(-1===n)return e[e.length-1];if(0===n)return e[0];let a=e[n],s=e[n-1];if(a-t<=1)return a;if(t-s<=1)return s;let o=(a-s)*r;return i>0?t-s+1>=o?a:s:a-t+1>=o?s:a})(t().map(e=>a+(e.getBoundingClientRect().top-i.top)*r).sort((e,t)=>e-t),e.targetScroll+a-e.animatedScroll,b,n);null!==s&&e.scrollTo(s,{duration:o,easing:l,userData:{initiator:"snap"}})},a),!0};return e.options.virtualScroll=g,d.addEventListener("touchstart",h,{passive:!0}),{resize:h,destroy:()=>{u=!0,h(),d.removeEventListener("touchstart",h),e.options.virtualScroll===g&&(e.options.virtualScroll=c)}}})(e,o,{...w,debounce:x,duration:v,easing:b});return S.current=t.resize,i.default.addEventListener("refresh",t.resize),()=>{S.current=void 0,i.default.removeEventListener("refresh",t.resize),t.destroy()}}let t=window.matchMedia(k?"(min-width: 0px)":`(min-width: ${$}px) and (pointer: fine)`),n=e.rootElement,a=null,l=!1,d=null,c=()=>{if(d?.(),a?.stop(),a?.destroy(),d=null,a=null,!t.matches)return;let i=o().filter(Boolean);i.length&&(d=(a=new r.default(e,{type:"proximity",debounce:x,distanceThreshold:m,duration:v,easing:b})).addElements(i,{align:["start"]}),l&&a.stop())},p=()=>{l=!0,a?.stop()},u=()=>{l=!1,a?.start()};return S.current=c,c(),t.addEventListener("change",c),n.addEventListener("touchstart",p,{passive:!0}),n.addEventListener("wheel",u,{passive:!0}),i.default.addEventListener("refresh",c),()=>{S.current=void 0,t.removeEventListener("change",c),n.removeEventListener("touchstart",p),n.removeEventListener("wheel",u),i.default.removeEventListener("refresh",c),d?.(),a?.stop(),a?.destroy()}},h[2]=k,h[3]=x,h[4]=$,h[5]=m,h[6]=v,h[7]=b,h[8]=o,h[9]=z,h[10]=e,h[11]=w,h[12]=p):p=h[12],h[13]!==k||h[14]!==x||h[15]!==l||h[16]!==$||h[17]!==m||h[18]!==v||h[19]!==b||h[20]!==z||h[21]!==e||h[22]!==w?(u=[x,$,k,w,m,v,b,e,z,...l],h[13]=k,h[14]=x,h[15]=l,h[16]=$,h[17]=m,h[18]=v,h[19]=b,h[20]=z,h[21]=e,h[22]=w,h[23]=u):u=h[23],(0,n.useEffect)(p,u),S}],371136)}]);