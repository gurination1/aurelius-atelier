(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,815711,e=>{"use strict";function t(e,t){let i;return function(...n){clearTimeout(i),i=setTimeout(()=>{i=void 0,e.apply(this,n)},t)}}var i=class{element;options;align;rect={};wrapperResizeObserver;resizeObserver;debouncedWrapperResize;constructor(e,{align:i=["start"],ignoreSticky:n=!0,ignoreTransform:r=!1}={}){this.element=e,this.options={align:i,ignoreSticky:n,ignoreTransform:r},this.align=[i].flat(),this.debouncedWrapperResize=t(this.onWrapperResize,500),this.wrapperResizeObserver=new ResizeObserver(this.debouncedWrapperResize),this.wrapperResizeObserver.observe(document.body),this.onWrapperResize(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.element),this.setRect({width:this.element.offsetWidth,height:this.element.offsetHeight})}destroy(){this.wrapperResizeObserver.disconnect(),this.resizeObserver.disconnect()}setRect({top:e,left:t,width:i,height:n,element:r}={}){e=e??this.rect.top,t=t??this.rect.left,i=i??this.rect.width,n=n??this.rect.height,r=r??this.rect.element,(e!==this.rect.top||t!==this.rect.left||i!==this.rect.width||n!==this.rect.height||r!==this.rect.element)&&(this.rect.top=e,this.rect.y=e,this.rect.width=i,this.rect.height=n,this.rect.left=t,this.rect.x=t,this.rect.bottom=e+n,this.rect.right=t+i)}onWrapperResize=()=>{let e,t;if(this.options.ignoreSticky&&function e(t){"sticky"===getComputedStyle(t).position&&(t.style.setProperty("position","static"),t.dataset.sticky="true"),t.offsetParent&&e(t.offsetParent)}(this.element),this.options.ignoreTransform)e=function e(t,i=0){let n=i+t.offsetTop;return t.offsetParent?e(t.offsetParent,n):n}(this.element),t=function e(t,i=0){let n=i+t.offsetLeft;return t.offsetParent?e(t.offsetParent,n):n}(this.element);else{let i=this.element.getBoundingClientRect();e=i.top+function e(t,i=0){let n=i+t.scrollTop;return t.offsetParent?e(t.offsetParent,n):n+window.scrollY}(this.element),t=i.left+function e(t,i=0){let n=i+t.scrollLeft;return t.offsetParent?e(t.offsetParent,n):n+window.scrollX}(this.element)}this.options.ignoreSticky&&function e(t){t?.dataset?.sticky==="true"&&(t.style.removeProperty("position"),delete t.dataset.sticky),t.offsetParent&&e(t.offsetParent)}(this.element),this.setRect({top:e,left:t})};onResize=([e])=>{if(!e?.borderBoxSize[0])return;let t=e.borderBoxSize[0].inlineSize,i=e.borderBoxSize[0].blockSize;this.setRect({width:t,height:i})}};let n=0;var r=class{options;elements=new Map;snaps=new Map;viewport={width:window.innerWidth,height:window.innerHeight};isStopped=!1;onSnapDebounced;currentSnapIndex;constructor(e,{type:i="proximity",lerp:n,easing:r,duration:s,distanceThreshold:a="50%",debounce:o=500,onSnapStart:l,onSnapComplete:d}={}){this.lenis=e,window.lenis||(window.lenis={}),window.lenis.snap=!0,this.options={type:i,lerp:n,easing:r,duration:s,distanceThreshold:a,debounce:o,onSnapStart:l,onSnapComplete:d},this.onWindowResize(),window.addEventListener("resize",this.onWindowResize),this.onSnapDebounced=t(this.onSnap,this.options.debounce),this.lenis.on("virtual-scroll",this.onSnapDebounced)}destroy(){this.lenis.off("virtual-scroll",this.onSnapDebounced),window.removeEventListener("resize",this.onWindowResize),this.elements.forEach(e=>{e.destroy()})}start(){this.isStopped=!1}stop(){this.isStopped=!0}add(e){let t=n++;return this.snaps.set(t,{value:e}),()=>this.snaps.delete(t)}addElement(e,t={}){let r=n++;return this.elements.set(r,new i(e,t)),()=>this.elements.delete(r)}addElements(e,t={}){let i=[...e].map(e=>this.addElement(e,t));return()=>{i.forEach(e=>{e()})}}onWindowResize=()=>{this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight};computeSnaps=()=>{let{isHorizontal:e}=this.lenis,t=[...this.snaps.values()];return this.elements.forEach(({rect:i,align:n})=>{let r;n.forEach(n=>{"start"===n?r=i.top:"center"===n?r=e?i.left+i.width/2-this.viewport.width/2:i.top+i.height/2-this.viewport.height/2:"end"===n&&(r=e?i.left+i.width-this.viewport.width:i.top+i.height-this.viewport.height),"number"==typeof r&&t.push({value:Math.ceil(r)})})}),t=t.sort((e,t)=>Math.abs(e.value)-Math.abs(t.value))};previous(){this.goTo((this.currentSnapIndex??0)-1)}next(){this.goTo((this.currentSnapIndex??0)+1)}goTo(e){let t=this.computeSnaps();if(0===t.length)return;this.currentSnapIndex=Math.max(0,Math.min(e,t.length-1));let i=t[this.currentSnapIndex];void 0!==i&&this.lenis.scrollTo(i.value,{duration:this.options.duration,easing:this.options.easing,lerp:this.options.lerp,lock:"lock"===this.options.type,userData:{initiator:"snap"},onStart:()=>{this.options.onSnapStart?.({index:this.currentSnapIndex,...i})},onComplete:()=>{this.options.onSnapComplete?.({index:this.currentSnapIndex,...i})}})}get distanceThreshold(){if("mandatory"===this.options.type)return 1/0;let{isHorizontal:e}=this.lenis,t=e?"width":"height";return"string"==typeof this.options.distanceThreshold&&this.options.distanceThreshold.endsWith("%")?Number(this.options.distanceThreshold.replace("%",""))/100*this.viewport[t]:"number"==typeof this.options.distanceThreshold?this.options.distanceThreshold:this.viewport[t]}onSnap=e=>{let t;if(this.isStopped||"touchmove"===e.event.type||"lock"===this.options.type&&this.lenis.userData?.initiator==="snap")return;let{scroll:i,isHorizontal:n}=this.lenis,r=n?e.deltaX:e.deltaY;i=Math.ceil(this.lenis.scroll+r);let s=this.computeSnaps();if(0===s.length)return;let a=s.findLastIndex(({value:e})=>e<i),o=s.findIndex(({value:e})=>e>i);if("lock"===this.options.type)r>0?t=o:r<0&&(t=a);else{let e=s[a],n=e?Math.abs(i-e.value):1/0,r=s[o];t=n<(r?Math.abs(i-r.value):1/0)?a:o}if(void 0===t||-1===t)return;t=Math.max(0,Math.min(t,s.length-1));let l=s[t];Math.abs(i-l.value)<=this.distanceThreshold&&this.goTo(t)};resize(){this.elements.forEach(e=>{e.onWrapperResize()})}};e.s(["default",0,r])},156569,e=>{"use strict";var t=e.i(843476),i=e.i(500932),n=e.i(478430),r=e.i(831119),s=e.i(101384),a=e.i(764548),o=e.i(189897),l=e.i(698074),d=e.i(607561),c=e.i(274879),p=e.i(448806),h=e.i(989970),u=e.i(883495),f=e.i(875324),g=e.i(255667),m=e.i(271645),v=e.i(575509),b=e.i(997053);let y=(0,b.default)(v.Div).withConfig({componentId:"sc-12e1aa87-0"})(()=>b.css`
		/* The span variant (inside an <h2>) lays out as the div does. Scoped to span
		   so the div variant keeps deferring to its parents' display rules. */
		&:where(span) {
			display: block;
		}

		> :first-child {
			font-kerning: none;
			font-variant-ligatures: none;
			text-rendering: optimizeSpeed;
		}

		/* NOTE • A split line is one line by definition — SplitText measured it to
		   fit. The fill primes each line to fit-content plus a bleed of padding, and
		   in a column that is already tight (BuildsIntroduction's "Ordinary" at 4
		   columns) that box comes out narrower than the text. Plain text can't break
		   inside a word so it just overflowed, but the entrance turns every letter
		   into an inline-block and each one is a break opportunity: the word snapped
		   in two ("Ordi" / "nary") for the rise and jumped back when the letters
		   were reverted. */
		.line {
			white-space: nowrap;
		}

		@media (scripting: enabled) {
			visibility: hidden;
		}
	`),w=e=>"string"==typeof e||"number"==typeof e?String(e):Array.isArray(e)?e.map(w).join(""):(0,m.isValidElement)(e)?w(e.props.children):"",x=e=>{let v,b,x,k,z,$,E,T,R,L=(0,i.c)(31),{children:P,editAttr:B,as:C}=e,I=void 0===C?"div":C,{loaderMounted:A}=(0,m.use)(n.LoaderContext),{menuVisible:W}=(0,m.use)(r.MenuContext),{isReducedMotion:M}=(0,m.use)(s.PerformanceContext),O=(0,p.usePageTransitioning)(),_=(0,m.useRef)(null),[j,F]=(0,m.useState)(!1),[H,N]=(0,m.useState)(0),D=(0,g.useLenis)();L[0]!==P?(v=(0,o.cleanSanityString)(w(P)),L[0]=P,L[1]=v):v=L[1];let G=v,Y=(0,c.useSplitTextRecovery)(_,G),X=A||O||W;L[2]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{let e=!0;document.fonts.ready.then(()=>{e&&F(!0)});let t=window.innerWidth,i=()=>{window.innerWidth!==t&&(t=window.innerWidth,N(S))};return window.addEventListener("resize",i),()=>{e=!1,window.removeEventListener("resize",i)}},x=[],L[2]=b,L[3]=x):(b=L[2],x=L[3]),(0,m.useEffect)(b,x);let q=Array.isArray(P)?P[0]:P,U=q&&"object"==typeof q&&"type"in q?String(q.type):"";L[4]===Symbol.for("react.memo_cache_sentinel")?(k=/^h[1-6]$/,L[4]=k):k=L[4],L[5]!==U?(z=k.test(U),L[5]=U,L[6]=z):z=L[6];let K=z;return L[7]!==j||L[8]!==X||L[9]!==K||L[10]!==M||L[11]!==D?.rootElement?($=e=>{let{isDesktop:t}=e,i=_.current;if(!i)return;if(M)return void h.default.set(i,{visibility:"visible"});let n=D?.rootElement;if(!n)return;let r=i.firstElementChild;if(!r||X||!j)return;r.textContent=(0,o.cleanSanityString)(r.textContent),(e=>{let t=getComputedStyle(e).textTransform;if("none"===t)return;let i=e.textContent??"";e.textContent="uppercase"===t?i.toUpperCase():"lowercase"===t?i.toLowerCase():i.replace(/(?<![\p{L}\p{N}])\p{L}/gu,e=>e.toUpperCase()),h.default.set(e,{textTransform:"none"})})(r),K||r.setAttribute("aria-hidden","true");let s=r.style.display,d=f.SplitText.create(r,{type:"lines",linesClass:"line",autoSplit:!1,aria:K?"auto":"none"}),{lines:c}=d;if(!c.length)return h.default.set(i,{visibility:"visible"}),()=>d.revert();let p=h.default.getProperty(r,"textAlign");(0,l.primeFillLines)(c,{align:p});let g=null,m=null,v=()=>{h.default.set(c,{clearProps:"backgroundImage,backgroundClip,webkitBackgroundClip,color"}),h.default.set(c,{clipPath:"inset(-0.14em)",opacity:l.FILL_REST_ALPHA});let{chars:e}=m=f.SplitText.create(c,{type:"chars",charsClass:"char",aria:"none"}),t=Math.min(.025,.5/Math.max(e.length-1,1));h.default.set(e,{yPercent:120,willChange:"transform"}),(g=h.default.timeline({paused:!0})).to(e,{yPercent:0,duration:.6,ease:"expo.out",stagger:t});let i=(e.length-1)*t+.39;g.call(()=>{m?.revert(),m=null,(0,l.primeFillLines)(c,{align:p}),h.default.set(c,{clipPath:"none",opacity:1})},[],i),g.add((0,l.buildFillTimeline)(c,{duration:1.5,lag:.1}).paused(!1),i)},b=()=>{g?.kill(),g=null,m?.revert(),m=null};v(),h.default.set(i,{visibility:"visible"});let y=()=>{g&&((0,a.isScrollFolding)(n)?g.progress(1):g.play())};u.default.create({trigger:i,scroller:n,start:t?"top 85%":"top 90%",onEnter:y,onEnterBack:y,onRefresh:e=>{e.progress>0&&g&&0===g.progress()&&!g.isActive()&&y()}});let w=(({wrapper:e,scroller:t,show:i,reset:n})=>{let r=new IntersectionObserver(()=>{let r=e.getBoundingClientRect(),s=t.getBoundingClientRect();r.height<=0||s.height<=0||(r.top<s.bottom&&r.bottom>s.top?i():r.top>=s.bottom&&n())},{root:t});return r.observe(e),()=>r.disconnect()})({wrapper:i,scroller:n,show:y,reset:()=>{b(),v()}});return()=>{w(),b(),d.revert(),r.style.display=s}},L[7]=j,L[8]=X,L[9]=K,L[10]=M,L[11]=D?.rootElement,L[12]=$):$=L[12],L[13]!==j||L[14]!==G||L[15]!==X||L[16]!==K||L[17]!==M||L[18]!==H||L[19]!==D||L[20]!==Y?(E={scope:_,dependencies:[G,D,K,Y,X,M,j,H]},L[13]=j,L[14]=G,L[15]=X,L[16]=K,L[17]=M,L[18]=H,L[19]=D,L[20]=Y,L[21]=E):E=L[21],(0,d.useAnimation)($,E),L[22]!==G||L[23]!==K?(T=!K&&G?(0,t.jsx)("span",{className:"sr-only",children:G}):null,L[22]=G,L[23]=K,L[24]=T):T=L[24],L[25]!==I||L[26]!==P||L[27]!==B||L[28]!==G||L[29]!==T?(R=(0,t.jsxs)(y,{ref:_,as:I,"data-sanity":B,children:[P,T]},G),L[25]=I,L[26]=P,L[27]=B,L[28]=G,L[29]=T,L[30]=R):R=L[30],R};function S(e){return e+1}x.displayName="AnimatedHeading",e.s(["default",0,x],156569)},124821,135741,e=>{"use strict";var t=e.i(843476),i=e.i(500932);let n=null;var r=e.i(271645),s=e.i(575509),a=e.i(212960),o=e.i(951847),l=e.i(997053);let d=[...Array(25)].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.02*t}s; }`).join("\n"),c=({$isFullWidth:e})=>l.css`
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
        padding:  ${(0,s.getGap)("sm")} ${(0,s.getGap)("l")};

        border: 1px solid ${(0,s.getBrand)("bc5",10)};
        background: ${(0,s.getGlobal)("black",10)};
        text-decoration: none;
        transition: border-color var(--ease) var(--dur);

        ${s.bp.l`
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
            outline: 1px dashed ${(0,s.getBrand)("bc5",60)};
            outline-offset: 2px;
            border-color: ${(0,s.getBrand)("bc3",40)};
        }
   


        @media (hover: hover) and (pointer: fine) {
            &:hover {
                cursor: pointer;
                border-color: ${(0,s.getBrand)("bc5",40)};
                
                > span {
                    opacity: 0.6;

                    span { transform: translateY(4em) }
                }
            }
        }
   

        > span {
            ${a.captionL}

            display: block;
            position: relative;
            z-index: 1;
            overflow: clip;

            transition: opacity var(--ease) var(--dur), letter-spacing var(--ease) var(--dur);


            span {
                display: inline-block;
                padding: 0;
                margin: 0;
                text-shadow: ${(0,s.getBrand)("bc5",60)} 0px -4em 0px;
                transition: transform 0.5s ${(0,s.getEase)("bezzy2")};
            
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
                ${(0,s.getBrand)("bc5",0)} calc(var(--offset-start) - var(--gradient-percent)),
                white var(--offset-start),
                ${(0,s.getBrand)("bc5",0)} calc(var(--offset-start) + var(--gradient-percent)),
                transparent calc(var(--offset-start) + var(--gradient-percent) * 2),
                transparent calc(var(--offset-end) - var(--gradient-percent) * 2),
                ${(0,s.getBrand)("bc5",0)} calc(var(--offset-end) - var(--gradient-percent)),
                white var(--offset-end),
                ${(0,s.getBrand)("bc5",0)}	 calc(var(--offset-end) + var(--gradient-percent)),
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
    `),h=l.default.button.withConfig({componentId:"sc-6f2721c4-1"})(({$isFullWidth:e})=>l.css`
        ${c({$isFullWidth:e})}
    `);e.s(["Button",0,h,"Jacket",0,p,"sharedStyles",0,c],135741);let u=e=>{let s,a,o,l,d=(0,i.c)(6),c=(0,r.useRef)(null),u=(0,r.useRef)(null);if(d[0]!==e.isButton?(s=()=>{let t=e.isButton?c.current:u.current;if(t){let e;return(e=n||(n=new IntersectionObserver(e=>{for(let t of e)t.target instanceof HTMLElement&&t.target.style.setProperty("--play-state",t.isIntersecting?"running":"paused")},{threshold:0}))).observe(t),()=>e.unobserve(t)}},a=[e.isButton],d[0]=e.isButton,d[1]=s,d[2]=a):(s=d[1],a=d[2]),(0,r.useEffect)(s,a),d[3]!==e){l=Symbol.for("react.early_return_sentinel");e:{let i=[];for(let n=0;n<e.label.length;n+=1){let r=e.label[n];i.push((0,t.jsx)("span",{children:" "===r?" ":r},`${e.label}-${n}`))}let n=f;if(e.isButton){let{aria:r,label:s,onClick:a,isFullWidth:o,type:d,disabled:p}=e,u=void 0!==p&&p;l=(0,t.jsx)(h,{ref:c,type:void 0===d?"button":d,"aria-label":r??s,"aria-disabled":u,$isFullWidth:void 0!==o&&o,disabled:u,onClick:a,children:n(i)});break e}let{aria:r,label:s,to:a,onClick:d,isFullWidth:g,transitionAwaitsContent:m,prefetch:v,tabIndex:b}=e;o=(0,t.jsx)(p,{ref:u,href:a,"aria-label":r??s,$isFullWidth:void 0!==g&&g,onClick:d,transitionAwaitsContent:m,prefetch:v,tabIndex:b,children:n(i)})}d[3]=e,d[4]=o,d[5]=l}else o=d[4],l=d[5];return l!==Symbol.for("react.early_return_sentinel")?l:o};function f(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)("i",{"aria-hidden":"true"})]})}u.displayName="Button",e.s(["default",0,u],124821)},89835,e=>{"use strict";var t=e.i(843476),i=e.i(500932),n=e.i(481293),r=e.i(180301),s=e.i(657688),a=e.i(402463),o=e.i(328852),l=e.i(271645),d=e.i(174080);let c=Number.parseInt(r.grid.breakpoints.l??"1024",10),p=(0,l.forwardRef)((e,r)=>{let l,p,h,u,f,g,m,v,b,y,w,x,S,k,z,$,E,T,R,L,P,B,C,I,A,W,M=(0,i.c)(62);M[0]!==e?({desktop:h,mobile:g,fill:u,width:z,height:f,sizes:y,quality:b,enabled:w,preload:v,loading:x,desktopMinWidth:S,desktopInLandscape:k,className:l,crossOrigin:p,...m}=e,M[0]=e,M[1]=l,M[2]=p,M[3]=h,M[4]=u,M[5]=f,M[6]=g,M[7]=m,M[8]=v,M[9]=b,M[10]=y,M[11]=w,M[12]=x,M[13]=S,M[14]=k,M[15]=z):(l=M[1],p=M[2],h=M[3],u=M[4],f=M[5],g=M[6],m=M[7],v=M[8],b=M[9],y=M[10],w=M[11],x=M[12],S=M[13],k=M[14],z=M[15]);let O=void 0===w||w,_=void 0===x?"lazy":x,j=void 0===S?c:S,F=void 0!==k&&k;if(M[16]!==l||M[17]!==p||M[18]!==h||M[19]!==F||M[20]!==j||M[21]!==O||M[22]!==u||M[23]!==f||M[24]!==_||M[25]!==g||M[26]!==m||M[27]!==v||M[28]!==b||M[29]!==r||M[30]!==y||M[31]!==z){C=Symbol.for("react.early_return_sentinel");e:{if(P=(0,n.resolveImageWithAlt)(h),B=(0,n.resolveImageWithAlt)(g),!P||!B){C=null;break e}L=u?{fill:!0}:{width:z??B.width??1200,height:f??B.height??675},E=u?{}:{width:z??P.width??1200,height:f??P.height??675};let e={sizes:y,quality:b,preload:v,loader:a.imageLoader,...L};if(P.src===B.src){C=(0,t.jsx)("picture",{ref:r,className:l,...m,children:(0,t.jsx)(o.default,{enabled:O,image:P,sizes:y,quality:b,preload:v,loading:_,crossOrigin:p,...L})});break e}$=`(min-width: ${j}px)${F?", (orientation: landscape)":""}`;let i=`(max-width: ${j-1}px)${F?" and (orientation: portrait)":""}`,{props:c}=(0,s.getImageProps)({...e,src:P.src,alt:P.alt});if({srcSet:R,sizes:T}=c,v&&O){let{props:t}=(0,s.getImageProps)({...e,src:B.src,alt:B.alt}),{srcSet:n,sizes:r}=t;(0,d.preload)(P.src,{as:"image",fetchPriority:"high",imageSrcSet:R,imageSizes:T,media:$}),(0,d.preload)(B.src,{as:"image",fetchPriority:"high",imageSrcSet:n,imageSizes:r,media:i})}}M[16]=l,M[17]=p,M[18]=h,M[19]=F,M[20]=j,M[21]=O,M[22]=u,M[23]=f,M[24]=_,M[25]=g,M[26]=m,M[27]=v,M[28]=b,M[29]=r,M[30]=y,M[31]=z,M[32]=$,M[33]=E,M[34]=T,M[35]=R,M[36]=L,M[37]=P,M[38]=B,M[39]=C}else $=M[32],E=M[33],T=M[34],R=M[35],L=M[36],P=M[37],B=M[38],C=M[39];if(C!==Symbol.for("react.early_return_sentinel"))return C;M[40]!==$||M[41]!==E||M[42]!==T||M[43]!==R||M[44]!==O?(I=O?(0,t.jsx)("source",{media:$,srcSet:R,sizes:T,...E}):null,M[40]=$,M[41]=E,M[42]=T,M[43]=R,M[44]=O,M[45]=I):I=M[45];let H=v||"eager"===_?"eager":"lazy",N=v?"high":void 0;return M[46]!==p||M[47]!==O||M[48]!==L||M[49]!==b||M[50]!==P.lqip||M[51]!==B||M[52]!==y||M[53]!==H||M[54]!==N?(A=(0,t.jsx)(o.default,{enabled:O,image:B,desktopPlaceholder:P.lqip,sizes:y,quality:b,loading:H,fetchPriority:N,crossOrigin:p,...L}),M[46]=p,M[47]=O,M[48]=L,M[49]=b,M[50]=P.lqip,M[51]=B,M[52]=y,M[53]=H,M[54]=N,M[55]=A):A=M[55],M[56]!==l||M[57]!==m||M[58]!==r||M[59]!==I||M[60]!==A?(W=(0,t.jsxs)("picture",{ref:r,className:l,...m,children:[I,A]}),M[56]=l,M[57]=m,M[58]=r,M[59]=I,M[60]=A,M[61]=W):W=M[61],W});p.displayName="ResponsiveImage",e.s(["default",0,p])},88664,e=>{"use strict";var t=e.i(843476),i=e.i(500932),n=e.i(575509),r=e.i(212960),s=e.i(997053);let a=(0,s.default)(n.Div).attrs({as:"span"}).withConfig({componentId:"sc-baf86b4b-0"})(({$isLight:e})=>s.css`
        ${r.captionL}

		position: relative;
		overflow: hidden;

        display: grid;
        place-items: center;

		padding: calc(${(0,n.getGap)("xxs")} + 1px) calc(${(0,n.getGap)("s")} - 2px) calc(${(0,n.getGap)("xxs")} - 1px) ${(0,n.getGap)("s")};

        background: ${e?(0,n.getBrand)("bc5"):(0,n.getBrand)("bc5",10)};
        color: ${e?(0,n.getBrand)("bc1"):(0,n.getBrand)("bc5")};
		backdrop-filter: blur(8px);
		
		user-select: none;
		pointer-events: none;
		
		${!e&&s.css`
                &:after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to right,
                        transparent 0%,
                        ${(0,n.getBrand)("bc5",30)} 50%,
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
	`),o=e=>{let n,r=(0,i.c)(3),{text:s,isLight:o}=e;return r[0]!==o||r[1]!==s?(n=(0,t.jsx)(a,{$isLight:o,children:s}),r[0]=o,r[1]=s,r[2]=n):n=r[2],n};o.displayName="Tag",e.s(["default",0,o],88664)},22584,e=>{"use strict";e.s(["ARCHIVE_BASE_PATH",0,"/builds/","STOCK_BASE_PATH",0,"/stock/","buildHref",0,(e,t)=>`${e}${t}/`])},371136,e=>{"use strict";var t=e.i(500932),i=e.i(883495),n=e.i(815711),r=e.i(271645),s=e.i(448806),a=e.i(764548);e.s(["useLenisSnap",0,(e,o,l,d)=>{let c,p,h,u=(0,t.c)(24);u[0]!==d?(c=void 0===d?{}:d,u[0]=d,u[1]=c):c=u[1];let{debounce:f,desktopMinWidth:g,distanceThreshold:m,duration:v,easing:b,allViewports:y,listingWheel:w}=c,x=void 0===f?500:f,S=void 0===g?1024:g,k=void 0!==y&&y,z=(0,r.useRef)(void 0),$=(0,s.usePageTransitioning)();return u[2]!==k||u[3]!==x||u[4]!==S||u[5]!==m||u[6]!==v||u[7]!==b||u[8]!==o||u[9]!==$||u[10]!==e||u[11]!==w?(p=()=>{if(!e||$)return;if(w){let t=((e,t,{multiplier:i,maxStep:n,departureRatio:r,debounce:s,duration:o,easing:l})=>{let d=e.rootElement,c=e.options.virtualScroll,p=0,h=!1,u=()=>{window.clearTimeout(p),p=0},f=()=>e.isStopped||e.isLocked||(0,a.isScrollResetting)(d)||(0,a.isScrollFolding)(d)||d.hasAttribute(a.SCROLL_RESIZING_ATTRIBUTE),g=a=>{if(u(),c?.(a)===!1)return!1;let{event:g}=a;if("wheel"!==g.type||g.ctrlKey||f()||!e.options.smoothWheel||!a.deltaY||Math.abs(a.deltaX)>Math.abs(a.deltaY))return!0;let m=g.composedPath();if(m.slice(0,m.indexOf(d)).some(t=>t instanceof HTMLElement&&(e.options.prevent?.(t)||t.hasAttribute("data-lenis-prevent")||t.hasAttribute("data-lenis-prevent-wheel")||t.hasAttribute("data-lenis-prevent-vertical"))))return!0;let v=d.clientHeight*n;a.deltaY=Math.max(-v,Math.min(v,a.deltaY*i));let b=Math.sign(a.deltaY);return p=window.setTimeout(()=>{if(p=0,h||f()||!g.defaultPrevented||"native"===e.isScrolling)return;let i=d.getBoundingClientRect();if(!i.height)return;let n=d.clientHeight/i.height,s=e.scroll,a=((e,t,i,n)=>{if(!e.length)return null;let r=e.findIndex(e=>e>=t);if(-1===r)return e[e.length-1];if(0===r)return e[0];let s=e[r],a=e[r-1];if(s-t<=1)return s;if(t-a<=1)return a;let o=(s-a)*n;return i>0?t-a+1>=o?s:a:s-t+1>=o?a:s})(t().map(e=>s+(e.getBoundingClientRect().top-i.top)*n).sort((e,t)=>e-t),e.targetScroll+s-e.animatedScroll,b,r);null!==a&&e.scrollTo(a,{duration:o,easing:l,userData:{initiator:"snap"}})},s),!0};return e.options.virtualScroll=g,d.addEventListener("touchstart",u,{passive:!0}),{resize:u,destroy:()=>{h=!0,u(),d.removeEventListener("touchstart",u),e.options.virtualScroll===g&&(e.options.virtualScroll=c)}}})(e,o,{...w,debounce:x,duration:v,easing:b});return z.current=t.resize,i.default.addEventListener("refresh",t.resize),()=>{z.current=void 0,i.default.removeEventListener("refresh",t.resize),t.destroy()}}let t=window.matchMedia(k?"(min-width: 0px)":`(min-width: ${S}px) and (pointer: fine)`),r=e.rootElement,s=null,l=!1,d=null,c=()=>{if(d?.(),s?.stop(),s?.destroy(),d=null,s=null,!t.matches)return;let i=o().filter(Boolean);i.length&&(d=(s=new n.default(e,{type:"proximity",debounce:x,distanceThreshold:m,duration:v,easing:b})).addElements(i,{align:["start"]}),l&&s.stop())},p=()=>{l=!0,s?.stop()},h=()=>{l=!1,s?.start()};return z.current=c,c(),t.addEventListener("change",c),r.addEventListener("touchstart",p,{passive:!0}),r.addEventListener("wheel",h,{passive:!0}),i.default.addEventListener("refresh",c),()=>{z.current=void 0,t.removeEventListener("change",c),r.removeEventListener("touchstart",p),r.removeEventListener("wheel",h),i.default.removeEventListener("refresh",c),d?.(),s?.stop(),s?.destroy()}},u[2]=k,u[3]=x,u[4]=S,u[5]=m,u[6]=v,u[7]=b,u[8]=o,u[9]=$,u[10]=e,u[11]=w,u[12]=p):p=u[12],u[13]!==k||u[14]!==x||u[15]!==l||u[16]!==S||u[17]!==m||u[18]!==v||u[19]!==b||u[20]!==$||u[21]!==e||u[22]!==w?(h=[x,S,k,w,m,v,b,e,$,...l],u[13]=k,u[14]=x,u[15]=l,u[16]=S,u[17]=m,u[18]=v,u[19]=b,u[20]=$,u[21]=e,u[22]=w,u[23]=h):h=u[23],(0,r.useEffect)(p,h),z}],371136)},698074,e=>{"use strict";var t=e.i(228073),i=e.i(989970);let n=[t.theme.colors.feedback.negative],r=(e=n)=>({start:-16,end:100+(e.length-1)*18+8+3});e.s(["FILL_REST_ALPHA",0,.18,"buildFillTimeline",0,(e,{duration:t,ease:n="expo.out",lag:s=t})=>{let{start:a,end:o}=r(),l=i.default.timeline({paused:!0});for(let[i,r]of e.entries())l.fromTo(r,{"--fill-pos":a},{"--fill-pos":o,duration:t,ease:n},i*s);return l},"primeFillLines",0,(e,{align:t="start",settled:s=!1}={})=>{let a;if(!e.length)return r();let o=r(),l=i.default.getProperty(e[0],"color"),d=e[0].parentElement;d&&i.default.set(d,{display:"grid"});let c="-0.14em",p="center"===t,h="right"===t||"end"===t;return i.default.set(e,{display:"block",width:"fit-content",padding:"0.14em",marginBlock:c,marginLeft:p||h?"auto":c,marginRight:p?"auto":h?c:"auto",backgroundImage:(e=>{let t=(e.length-1)*18,i=["var(--fill-to) 0%",`var(--fill-to) calc((var(--fill-pos) - ${t+8}) * 1%)`];for(let t=e.length-1;t>=0;t-=1)i.push(`${e[t]} calc((var(--fill-pos) - ${18*t}) * 1%)`);return i.push("var(--fill-from) calc((var(--fill-pos) + 8) * 1%)"),i.push("var(--fill-from) 100%"),`linear-gradient(97deg, ${i.join(", ")})`})(n),backgroundClip:"text",WebkitBackgroundClip:"text",color:"transparent","--fill-from":(a=l.match(/[\d.]+/g))&&a.length>=3?`rgba(${a[0]}, ${a[1]}, ${a[2]}, 0.18)`:l,"--fill-to":l,"--fill-pos":s?o.end:o.start}),o}])}]);