(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,815711,e=>{"use strict";function t(e,t){let i;return function(...n){clearTimeout(i),i=setTimeout(()=>{i=void 0,e.apply(this,n)},t)}}var i=class{element;options;align;rect={};wrapperResizeObserver;resizeObserver;debouncedWrapperResize;constructor(e,{align:i=["start"],ignoreSticky:n=!0,ignoreTransform:r=!1}={}){this.element=e,this.options={align:i,ignoreSticky:n,ignoreTransform:r},this.align=[i].flat(),this.debouncedWrapperResize=t(this.onWrapperResize,500),this.wrapperResizeObserver=new ResizeObserver(this.debouncedWrapperResize),this.wrapperResizeObserver.observe(document.body),this.onWrapperResize(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.element),this.setRect({width:this.element.offsetWidth,height:this.element.offsetHeight})}destroy(){this.wrapperResizeObserver.disconnect(),this.resizeObserver.disconnect()}setRect({top:e,left:t,width:i,height:n,element:r}={}){e=e??this.rect.top,t=t??this.rect.left,i=i??this.rect.width,n=n??this.rect.height,r=r??this.rect.element,(e!==this.rect.top||t!==this.rect.left||i!==this.rect.width||n!==this.rect.height||r!==this.rect.element)&&(this.rect.top=e,this.rect.y=e,this.rect.width=i,this.rect.height=n,this.rect.left=t,this.rect.x=t,this.rect.bottom=e+n,this.rect.right=t+i)}onWrapperResize=()=>{let e,t;if(this.options.ignoreSticky&&function e(t){"sticky"===getComputedStyle(t).position&&(t.style.setProperty("position","static"),t.dataset.sticky="true"),t.offsetParent&&e(t.offsetParent)}(this.element),this.options.ignoreTransform)e=function e(t,i=0){let n=i+t.offsetTop;return t.offsetParent?e(t.offsetParent,n):n}(this.element),t=function e(t,i=0){let n=i+t.offsetLeft;return t.offsetParent?e(t.offsetParent,n):n}(this.element);else{let i=this.element.getBoundingClientRect();e=i.top+function e(t,i=0){let n=i+t.scrollTop;return t.offsetParent?e(t.offsetParent,n):n+window.scrollY}(this.element),t=i.left+function e(t,i=0){let n=i+t.scrollLeft;return t.offsetParent?e(t.offsetParent,n):n+window.scrollX}(this.element)}this.options.ignoreSticky&&function e(t){t?.dataset?.sticky==="true"&&(t.style.removeProperty("position"),delete t.dataset.sticky),t.offsetParent&&e(t.offsetParent)}(this.element),this.setRect({top:e,left:t})};onResize=([e])=>{if(!e?.borderBoxSize[0])return;let t=e.borderBoxSize[0].inlineSize,i=e.borderBoxSize[0].blockSize;this.setRect({width:t,height:i})}};let n=0;var r=class{options;elements=new Map;snaps=new Map;viewport={width:window.innerWidth,height:window.innerHeight};isStopped=!1;onSnapDebounced;currentSnapIndex;constructor(e,{type:i="proximity",lerp:n,easing:r,duration:s,distanceThreshold:a="50%",debounce:o=500,onSnapStart:l,onSnapComplete:d}={}){this.lenis=e,window.lenis||(window.lenis={}),window.lenis.snap=!0,this.options={type:i,lerp:n,easing:r,duration:s,distanceThreshold:a,debounce:o,onSnapStart:l,onSnapComplete:d},this.onWindowResize(),window.addEventListener("resize",this.onWindowResize),this.onSnapDebounced=t(this.onSnap,this.options.debounce),this.lenis.on("virtual-scroll",this.onSnapDebounced)}destroy(){this.lenis.off("virtual-scroll",this.onSnapDebounced),window.removeEventListener("resize",this.onWindowResize),this.elements.forEach(e=>{e.destroy()})}start(){this.isStopped=!1}stop(){this.isStopped=!0}add(e){let t=n++;return this.snaps.set(t,{value:e}),()=>this.snaps.delete(t)}addElement(e,t={}){let r=n++;return this.elements.set(r,new i(e,t)),()=>this.elements.delete(r)}addElements(e,t={}){let i=[...e].map(e=>this.addElement(e,t));return()=>{i.forEach(e=>{e()})}}onWindowResize=()=>{this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight};computeSnaps=()=>{let{isHorizontal:e}=this.lenis,t=[...this.snaps.values()];return this.elements.forEach(({rect:i,align:n})=>{let r;n.forEach(n=>{"start"===n?r=i.top:"center"===n?r=e?i.left+i.width/2-this.viewport.width/2:i.top+i.height/2-this.viewport.height/2:"end"===n&&(r=e?i.left+i.width-this.viewport.width:i.top+i.height-this.viewport.height),"number"==typeof r&&t.push({value:Math.ceil(r)})})}),t=t.sort((e,t)=>Math.abs(e.value)-Math.abs(t.value))};previous(){this.goTo((this.currentSnapIndex??0)-1)}next(){this.goTo((this.currentSnapIndex??0)+1)}goTo(e){let t=this.computeSnaps();if(0===t.length)return;this.currentSnapIndex=Math.max(0,Math.min(e,t.length-1));let i=t[this.currentSnapIndex];void 0!==i&&this.lenis.scrollTo(i.value,{duration:this.options.duration,easing:this.options.easing,lerp:this.options.lerp,lock:"lock"===this.options.type,userData:{initiator:"snap"},onStart:()=>{this.options.onSnapStart?.({index:this.currentSnapIndex,...i})},onComplete:()=>{this.options.onSnapComplete?.({index:this.currentSnapIndex,...i})}})}get distanceThreshold(){if("mandatory"===this.options.type)return 1/0;let{isHorizontal:e}=this.lenis,t=e?"width":"height";return"string"==typeof this.options.distanceThreshold&&this.options.distanceThreshold.endsWith("%")?Number(this.options.distanceThreshold.replace("%",""))/100*this.viewport[t]:"number"==typeof this.options.distanceThreshold?this.options.distanceThreshold:this.viewport[t]}onSnap=e=>{let t;if(this.isStopped||"touchmove"===e.event.type||"lock"===this.options.type&&this.lenis.userData?.initiator==="snap")return;let{scroll:i,isHorizontal:n}=this.lenis,r=n?e.deltaX:e.deltaY;i=Math.ceil(this.lenis.scroll+r);let s=this.computeSnaps();if(0===s.length)return;let a=s.findLastIndex(({value:e})=>e<i),o=s.findIndex(({value:e})=>e>i);if("lock"===this.options.type)r>0?t=o:r<0&&(t=a);else{let e=s[a],n=e?Math.abs(i-e.value):1/0,r=s[o];t=n<(r?Math.abs(i-r.value):1/0)?a:o}if(void 0===t||-1===t)return;t=Math.max(0,Math.min(t,s.length-1));let l=s[t];Math.abs(i-l.value)<=this.distanceThreshold&&this.goTo(t)};resize(){this.elements.forEach(e=>{e.onWrapperResize()})}};e.s(["default",0,r])},156569,e=>{"use strict";var t=e.i(843476),i=e.i(500932),n=e.i(478430),r=e.i(831119),s=e.i(101384),a=e.i(764548),o=e.i(189897),l=e.i(698074),d=e.i(607561),c=e.i(274879),h=e.i(448806),p=e.i(989970),u=e.i(883495),f=e.i(875324),g=e.i(255667),v=e.i(271645),m=e.i(575509),b=e.i(997053);let y=(0,b.default)(m.Div).withConfig({componentId:"sc-12e1aa87-0"})(()=>b.css`
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
	`),w=e=>"string"==typeof e||"number"==typeof e?String(e):Array.isArray(e)?e.map(w).join(""):(0,v.isValidElement)(e)?w(e.props.children):"",S=e=>{let m,b,S,k,E,T,L,R,z,C=(0,i.c)(31),{children:I,editAttr:P,as:B}=e,$=void 0===B?"div":B,{loaderMounted:M}=(0,v.use)(n.LoaderContext),{menuVisible:A}=(0,v.use)(r.MenuContext),{isReducedMotion:W}=(0,v.use)(s.PerformanceContext),O=(0,h.usePageTransitioning)(),_=(0,v.useRef)(null),[j,N]=(0,v.useState)(!1),[F,H]=(0,v.useState)(0),D=(0,g.useLenis)();C[0]!==I?(m=(0,o.cleanSanityString)(w(I)),C[0]=I,C[1]=m):m=C[1];let U=m,Y=(0,c.useSplitTextRecovery)(_,U),G=M||O||A;C[2]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{let e=!0;document.fonts.ready.then(()=>{e&&N(!0)});let t=window.innerWidth,i=()=>{window.innerWidth!==t&&(t=window.innerWidth,H(x))};return window.addEventListener("resize",i),()=>{e=!1,window.removeEventListener("resize",i)}},S=[],C[2]=b,C[3]=S):(b=C[2],S=C[3]),(0,v.useEffect)(b,S);let q=Array.isArray(I)?I[0]:I,Z=q&&"object"==typeof q&&"type"in q?String(q.type):"";C[4]===Symbol.for("react.memo_cache_sentinel")?(k=/^h[1-6]$/,C[4]=k):k=C[4],C[5]!==Z?(E=k.test(Z),C[5]=Z,C[6]=E):E=C[6];let K=E;return C[7]!==j||C[8]!==G||C[9]!==K||C[10]!==W||C[11]!==D?.rootElement?(T=e=>{let{isDesktop:t}=e,i=_.current;if(!i)return;if(W)return void p.default.set(i,{visibility:"visible"});let n=D?.rootElement;if(!n)return;let r=i.firstElementChild;if(!r||G||!j)return;r.textContent=(0,o.cleanSanityString)(r.textContent),(e=>{let t=getComputedStyle(e).textTransform;if("none"===t)return;let i=e.textContent??"";e.textContent="uppercase"===t?i.toUpperCase():"lowercase"===t?i.toLowerCase():i.replace(/(?<![\p{L}\p{N}])\p{L}/gu,e=>e.toUpperCase()),p.default.set(e,{textTransform:"none"})})(r),K||r.setAttribute("aria-hidden","true");let s=r.style.display,d=f.SplitText.create(r,{type:"lines",linesClass:"line",autoSplit:!1,aria:K?"auto":"none"}),{lines:c}=d;if(!c.length)return p.default.set(i,{visibility:"visible"}),()=>d.revert();let h=p.default.getProperty(r,"textAlign");(0,l.primeFillLines)(c,{align:h});let g=null,v=null,m=()=>{p.default.set(c,{clearProps:"backgroundImage,backgroundClip,webkitBackgroundClip,color"}),p.default.set(c,{clipPath:"inset(-0.14em)",opacity:l.FILL_REST_ALPHA});let{chars:e}=v=f.SplitText.create(c,{type:"chars",charsClass:"char",aria:"none"}),t=Math.min(.025,.5/Math.max(e.length-1,1));p.default.set(e,{yPercent:120,willChange:"transform"}),(g=p.default.timeline({paused:!0})).to(e,{yPercent:0,duration:.6,ease:"expo.out",stagger:t});let i=(e.length-1)*t+.39;g.call(()=>{v?.revert(),v=null,(0,l.primeFillLines)(c,{align:h}),p.default.set(c,{clipPath:"none",opacity:1})},[],i),g.add((0,l.buildFillTimeline)(c,{duration:1.5,lag:.1}).paused(!1),i)},b=()=>{g?.kill(),g=null,v?.revert(),v=null};m(),p.default.set(i,{visibility:"visible"});let y=()=>{g&&((0,a.isScrollFolding)(n)?g.progress(1):g.play())};u.default.create({trigger:i,scroller:n,start:t?"top 85%":"top 90%",onEnter:y,onEnterBack:y,onRefresh:e=>{e.progress>0&&g&&0===g.progress()&&!g.isActive()&&y()}});let w=(({wrapper:e,scroller:t,show:i,reset:n})=>{let r=new IntersectionObserver(()=>{let r=e.getBoundingClientRect(),s=t.getBoundingClientRect();r.height<=0||s.height<=0||(r.top<s.bottom&&r.bottom>s.top?i():r.top>=s.bottom&&n())},{root:t});return r.observe(e),()=>r.disconnect()})({wrapper:i,scroller:n,show:y,reset:()=>{b(),m()}});return()=>{w(),b(),d.revert(),r.style.display=s}},C[7]=j,C[8]=G,C[9]=K,C[10]=W,C[11]=D?.rootElement,C[12]=T):T=C[12],C[13]!==j||C[14]!==U||C[15]!==G||C[16]!==K||C[17]!==W||C[18]!==F||C[19]!==D||C[20]!==Y?(L={scope:_,dependencies:[U,D,K,Y,G,W,j,F]},C[13]=j,C[14]=U,C[15]=G,C[16]=K,C[17]=W,C[18]=F,C[19]=D,C[20]=Y,C[21]=L):L=C[21],(0,d.useAnimation)(T,L),C[22]!==U||C[23]!==K?(R=!K&&U?(0,t.jsx)("span",{className:"sr-only",children:U}):null,C[22]=U,C[23]=K,C[24]=R):R=C[24],C[25]!==$||C[26]!==I||C[27]!==P||C[28]!==U||C[29]!==R?(z=(0,t.jsxs)(y,{ref:_,as:$,"data-sanity":P,children:[I,R]},U),C[25]=$,C[26]=I,C[27]=P,C[28]=U,C[29]=R,C[30]=z):z=C[30],z};function x(e){return e+1}S.displayName="AnimatedHeading",e.s(["default",0,S],156569)},124821,135741,e=>{"use strict";var t=e.i(843476),i=e.i(500932);let n=null;var r=e.i(271645),s=e.i(575509),a=e.i(212960),o=e.i(951847),l=e.i(997053);let d=[...Array(25)].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.02*t}s; }`).join("\n"),c=({$isFullWidth:e})=>l.css`
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
`,h=(0,l.default)(o.Link).withConfig({componentId:"sc-6f2721c4-0"})(({$isFullWidth:e})=>l.css`
        ${c({$isFullWidth:e})}
    `),p=l.default.button.withConfig({componentId:"sc-6f2721c4-1"})(({$isFullWidth:e})=>l.css`
        ${c({$isFullWidth:e})}
    `);e.s(["Button",0,p,"Jacket",0,h,"sharedStyles",0,c],135741);let u=e=>{let s,a,o,l,d=(0,i.c)(6),c=(0,r.useRef)(null),u=(0,r.useRef)(null);if(d[0]!==e.isButton?(s=()=>{let t=e.isButton?c.current:u.current;if(t){let e;return(e=n||(n=new IntersectionObserver(e=>{for(let t of e)t.target instanceof HTMLElement&&t.target.style.setProperty("--play-state",t.isIntersecting?"running":"paused")},{threshold:0}))).observe(t),()=>e.unobserve(t)}},a=[e.isButton],d[0]=e.isButton,d[1]=s,d[2]=a):(s=d[1],a=d[2]),(0,r.useEffect)(s,a),d[3]!==e){l=Symbol.for("react.early_return_sentinel");e:{let i=[];for(let n=0;n<e.label.length;n+=1){let r=e.label[n];i.push((0,t.jsx)("span",{children:" "===r?" ":r},`${e.label}-${n}`))}let n=f;if(e.isButton){let{aria:r,label:s,onClick:a,isFullWidth:o,type:d,disabled:h}=e,u=void 0!==h&&h;l=(0,t.jsx)(p,{ref:c,type:void 0===d?"button":d,"aria-label":r??s,"aria-disabled":u,$isFullWidth:void 0!==o&&o,disabled:u,onClick:a,children:n(i)});break e}let{aria:r,label:s,to:a,onClick:d,isFullWidth:g,transitionAwaitsContent:v,prefetch:m,tabIndex:b}=e;o=(0,t.jsx)(h,{ref:u,href:a,"aria-label":r??s,$isFullWidth:void 0!==g&&g,onClick:d,transitionAwaitsContent:v,prefetch:m,tabIndex:b,children:n(i)})}d[3]=e,d[4]=o,d[5]=l}else o=d[4],l=d[5];return l!==Symbol.for("react.early_return_sentinel")?l:o};function f(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)("i",{"aria-hidden":"true"})]})}u.displayName="Button",e.s(["default",0,u],124821)},89835,e=>{"use strict";var t=e.i(843476),i=e.i(500932),n=e.i(481293),r=e.i(180301),s=e.i(657688),a=e.i(402463),o=e.i(328852),l=e.i(271645),d=e.i(174080);let c=Number.parseInt(r.grid.breakpoints.l??"1024",10),h=(0,l.forwardRef)((e,r)=>{let l,h,p,u,f,g,v,m,b,y,w,S,x,k,E,T,L,R,z,C,I,P,B,$,M,A,W=(0,i.c)(62);W[0]!==e?({desktop:p,mobile:g,fill:u,width:E,height:f,sizes:y,quality:b,enabled:w,preload:m,loading:S,desktopMinWidth:x,desktopInLandscape:k,className:l,crossOrigin:h,...v}=e,W[0]=e,W[1]=l,W[2]=h,W[3]=p,W[4]=u,W[5]=f,W[6]=g,W[7]=v,W[8]=m,W[9]=b,W[10]=y,W[11]=w,W[12]=S,W[13]=x,W[14]=k,W[15]=E):(l=W[1],h=W[2],p=W[3],u=W[4],f=W[5],g=W[6],v=W[7],m=W[8],b=W[9],y=W[10],w=W[11],S=W[12],x=W[13],k=W[14],E=W[15]);let O=void 0===w||w,_=void 0===S?"lazy":S,j=void 0===x?c:x,N=void 0!==k&&k;if(W[16]!==l||W[17]!==h||W[18]!==p||W[19]!==N||W[20]!==j||W[21]!==O||W[22]!==u||W[23]!==f||W[24]!==_||W[25]!==g||W[26]!==v||W[27]!==m||W[28]!==b||W[29]!==r||W[30]!==y||W[31]!==E){B=Symbol.for("react.early_return_sentinel");e:{if(I=(0,n.resolveImageWithAlt)(p),P=(0,n.resolveImageWithAlt)(g),!I||!P){B=null;break e}C=u?{fill:!0}:{width:E??P.width??1200,height:f??P.height??675},L=u?{}:{width:E??I.width??1200,height:f??I.height??675};let e={sizes:y,quality:b,preload:m,loader:a.imageLoader,...C};if(I.src===P.src){B=(0,t.jsx)("picture",{ref:r,className:l,...v,children:(0,t.jsx)(o.default,{enabled:O,image:I,sizes:y,quality:b,preload:m,loading:_,crossOrigin:h,...C})});break e}T=`(min-width: ${j}px)${N?", (orientation: landscape)":""}`;let i=`(max-width: ${j-1}px)${N?" and (orientation: portrait)":""}`,{props:c}=(0,s.getImageProps)({...e,src:I.src,alt:I.alt});if({srcSet:z,sizes:R}=c,m&&O){let{props:t}=(0,s.getImageProps)({...e,src:P.src,alt:P.alt}),{srcSet:n,sizes:r}=t;(0,d.preload)(I.src,{as:"image",fetchPriority:"high",imageSrcSet:z,imageSizes:R,media:T}),(0,d.preload)(P.src,{as:"image",fetchPriority:"high",imageSrcSet:n,imageSizes:r,media:i})}}W[16]=l,W[17]=h,W[18]=p,W[19]=N,W[20]=j,W[21]=O,W[22]=u,W[23]=f,W[24]=_,W[25]=g,W[26]=v,W[27]=m,W[28]=b,W[29]=r,W[30]=y,W[31]=E,W[32]=T,W[33]=L,W[34]=R,W[35]=z,W[36]=C,W[37]=I,W[38]=P,W[39]=B}else T=W[32],L=W[33],R=W[34],z=W[35],C=W[36],I=W[37],P=W[38],B=W[39];if(B!==Symbol.for("react.early_return_sentinel"))return B;W[40]!==T||W[41]!==L||W[42]!==R||W[43]!==z||W[44]!==O?($=O?(0,t.jsx)("source",{media:T,srcSet:z,sizes:R,...L}):null,W[40]=T,W[41]=L,W[42]=R,W[43]=z,W[44]=O,W[45]=$):$=W[45];let F=m||"eager"===_?"eager":"lazy",H=m?"high":void 0;return W[46]!==h||W[47]!==O||W[48]!==C||W[49]!==b||W[50]!==I.lqip||W[51]!==P||W[52]!==y||W[53]!==F||W[54]!==H?(M=(0,t.jsx)(o.default,{enabled:O,image:P,desktopPlaceholder:I.lqip,sizes:y,quality:b,loading:F,fetchPriority:H,crossOrigin:h,...C}),W[46]=h,W[47]=O,W[48]=C,W[49]=b,W[50]=I.lqip,W[51]=P,W[52]=y,W[53]=F,W[54]=H,W[55]=M):M=W[55],W[56]!==l||W[57]!==v||W[58]!==r||W[59]!==$||W[60]!==M?(A=(0,t.jsxs)("picture",{ref:r,className:l,...v,children:[$,M]}),W[56]=l,W[57]=v,W[58]=r,W[59]=$,W[60]=M,W[61]=A):A=W[61],A});h.displayName="ResponsiveImage",e.s(["default",0,h])},371136,e=>{"use strict";var t=e.i(500932),i=e.i(883495),n=e.i(815711),r=e.i(271645),s=e.i(448806),a=e.i(764548);e.s(["useLenisSnap",0,(e,o,l,d)=>{let c,h,p,u=(0,t.c)(24);u[0]!==d?(c=void 0===d?{}:d,u[0]=d,u[1]=c):c=u[1];let{debounce:f,desktopMinWidth:g,distanceThreshold:v,duration:m,easing:b,allViewports:y,listingWheel:w}=c,S=void 0===f?500:f,x=void 0===g?1024:g,k=void 0!==y&&y,E=(0,r.useRef)(void 0),T=(0,s.usePageTransitioning)();return u[2]!==k||u[3]!==S||u[4]!==x||u[5]!==v||u[6]!==m||u[7]!==b||u[8]!==o||u[9]!==T||u[10]!==e||u[11]!==w?(h=()=>{if(!e||T)return;if(w){let t=((e,t,{multiplier:i,maxStep:n,departureRatio:r,debounce:s,duration:o,easing:l})=>{let d=e.rootElement,c=e.options.virtualScroll,h=0,p=!1,u=()=>{window.clearTimeout(h),h=0},f=()=>e.isStopped||e.isLocked||(0,a.isScrollResetting)(d)||(0,a.isScrollFolding)(d)||d.hasAttribute(a.SCROLL_RESIZING_ATTRIBUTE),g=a=>{if(u(),c?.(a)===!1)return!1;let{event:g}=a;if("wheel"!==g.type||g.ctrlKey||f()||!e.options.smoothWheel||!a.deltaY||Math.abs(a.deltaX)>Math.abs(a.deltaY))return!0;let v=g.composedPath();if(v.slice(0,v.indexOf(d)).some(t=>t instanceof HTMLElement&&(e.options.prevent?.(t)||t.hasAttribute("data-lenis-prevent")||t.hasAttribute("data-lenis-prevent-wheel")||t.hasAttribute("data-lenis-prevent-vertical"))))return!0;let m=d.clientHeight*n;a.deltaY=Math.max(-m,Math.min(m,a.deltaY*i));let b=Math.sign(a.deltaY);return h=window.setTimeout(()=>{if(h=0,p||f()||!g.defaultPrevented||"native"===e.isScrolling)return;let i=d.getBoundingClientRect();if(!i.height)return;let n=d.clientHeight/i.height,s=e.scroll,a=((e,t,i,n)=>{if(!e.length)return null;let r=e.findIndex(e=>e>=t);if(-1===r)return e[e.length-1];if(0===r)return e[0];let s=e[r],a=e[r-1];if(s-t<=1)return s;if(t-a<=1)return a;let o=(s-a)*n;return i>0?t-a+1>=o?s:a:s-t+1>=o?a:s})(t().map(e=>s+(e.getBoundingClientRect().top-i.top)*n).sort((e,t)=>e-t),e.targetScroll+s-e.animatedScroll,b,r);null!==a&&e.scrollTo(a,{duration:o,easing:l,userData:{initiator:"snap"}})},s),!0};return e.options.virtualScroll=g,d.addEventListener("touchstart",u,{passive:!0}),{resize:u,destroy:()=>{p=!0,u(),d.removeEventListener("touchstart",u),e.options.virtualScroll===g&&(e.options.virtualScroll=c)}}})(e,o,{...w,debounce:S,duration:m,easing:b});return E.current=t.resize,i.default.addEventListener("refresh",t.resize),()=>{E.current=void 0,i.default.removeEventListener("refresh",t.resize),t.destroy()}}let t=window.matchMedia(k?"(min-width: 0px)":`(min-width: ${x}px) and (pointer: fine)`),r=e.rootElement,s=null,l=!1,d=null,c=()=>{if(d?.(),s?.stop(),s?.destroy(),d=null,s=null,!t.matches)return;let i=o().filter(Boolean);i.length&&(d=(s=new n.default(e,{type:"proximity",debounce:S,distanceThreshold:v,duration:m,easing:b})).addElements(i,{align:["start"]}),l&&s.stop())},h=()=>{l=!0,s?.stop()},p=()=>{l=!1,s?.start()};return E.current=c,c(),t.addEventListener("change",c),r.addEventListener("touchstart",h,{passive:!0}),r.addEventListener("wheel",p,{passive:!0}),i.default.addEventListener("refresh",c),()=>{E.current=void 0,t.removeEventListener("change",c),r.removeEventListener("touchstart",h),r.removeEventListener("wheel",p),i.default.removeEventListener("refresh",c),d?.(),s?.stop(),s?.destroy()}},u[2]=k,u[3]=S,u[4]=x,u[5]=v,u[6]=m,u[7]=b,u[8]=o,u[9]=T,u[10]=e,u[11]=w,u[12]=h):h=u[12],u[13]!==k||u[14]!==S||u[15]!==l||u[16]!==x||u[17]!==v||u[18]!==m||u[19]!==b||u[20]!==T||u[21]!==e||u[22]!==w?(p=[S,x,k,w,v,m,b,e,T,...l],u[13]=k,u[14]=S,u[15]=l,u[16]=x,u[17]=v,u[18]=m,u[19]=b,u[20]=T,u[21]=e,u[22]=w,u[23]=p):p=u[23],(0,r.useEffect)(h,p),E}],371136)},676842,e=>{"use strict";var t=e.i(500932),i=e.i(764548),n=e.i(573943);let r=500;var s=e.i(271645);e.s(["useNativeSnap",0,(e,a,o,l)=>{let d,c,h,p=(0,t.c)(12);p[0]!==l?(d=void 0===l?{}:l,p[0]=l,p[1]=d):d=p[1];let{debounce:u,distanceThreshold:f,duration:g,easing:v,nativeRestDelay:m}=d;p[2]!==u||p[3]!==f||p[4]!==g||p[5]!==v||p[6]!==a||p[7]!==o||p[8]!==e||p[9]!==m?(c=()=>{if(e&&o)return((e,t,{debounce:s=r,distanceThreshold:a,duration:o,easing:l,nativeRestDelay:d}={})=>{let c=e.rootElement,h=0,p=null,u=!1,f=-1/0,g=()=>{h&&(window.clearTimeout(h),h=0)},v=(r=!1)=>{if(h=0,u||e.isStopped||"smooth"===e.isScrolling||!r&&e.isScrolling||(0,i.isScrollResetting)(c)||c.hasAttribute(i.SCROLL_RESIZING_ATTRIBUTE))return;let s=c.scrollTop,d=c.getBoundingClientRect().top,p=null;for(let e of t()){let t=e.getBoundingClientRect().top-d+s;(null===p||Math.abs(t-s)<Math.abs(p-s))&&(p=t)}null===p||1>Math.abs(p-s)||Math.abs(p-s)>((e,t)=>{if(void 0===e)return 1/0;if("number"==typeof e)return e;let i=e.trim().endsWith("%"),n=Number.parseFloat(e);return Number.isFinite(n)?i?n/100*t:n:1/0})(a,c.clientHeight)||((0,n.scrollTrace)("snap",{from:Math.round(s),to:Math.round(p)}),e.scrollTo(p,{duration:o,easing:l,userData:{initiator:"snap"}}))},m=()=>{if((0,i.isScrollResetting)(c)){p=null,g();return}if(!c.hasAttribute(i.SCROLL_RESIZING_ATTRIBUTE)&&(void 0===d||"smooth"===e.isScrolling)){if("native"===e.isScrolling){p="native",g();return}if("smooth"===e.isScrolling){p="smooth",g();return}"native"===p&&(p=null,g(),h=window.setTimeout(v,s))}},b=()=>{void 0===d||"smooth"===e.isScrolling||(0,i.isScrollResetting)(c)||c.hasAttribute(i.SCROLL_RESIZING_ATTRIBUTE)||(g(),f=performance.now(),h=window.setTimeout(()=>v(!0),d+s))},y=()=>{void 0!==d&&h&&!u&&(g(),v(!0))},w=()=>{u=!0,g()},S=()=>{if(u=!1,void 0!==d){if(performance.now()-f>=d+s){g(),v(!0);return}b();return}!1===e.isScrolling&&(g(),h=window.setTimeout(v,s))};return e.on("scroll",m),c.addEventListener("scroll",b,{passive:!0}),c.addEventListener("scrollend",y,{passive:!0}),c.addEventListener("touchstart",w,{passive:!0}),c.addEventListener("touchend",S,{passive:!0}),c.addEventListener("touchcancel",S,{passive:!0}),()=>{g(),e.off("scroll",m),c.removeEventListener("scroll",b),c.removeEventListener("scrollend",y),c.removeEventListener("touchstart",w),c.removeEventListener("touchend",S),c.removeEventListener("touchcancel",S)}})(e,a,{debounce:u,distanceThreshold:f,duration:g,easing:v,nativeRestDelay:m})},h=[e,a,o,u,f,g,v,m],p[2]=u,p[3]=f,p[4]=g,p[5]=v,p[6]=a,p[7]=o,p[8]=e,p[9]=m,p[10]=c,p[11]=h):(c=p[10],h=p[11]),(0,s.useEffect)(c,h)}],676842)},698074,e=>{"use strict";var t=e.i(228073),i=e.i(989970);let n=[t.theme.colors.feedback.negative],r=(e=n)=>({start:-16,end:100+(e.length-1)*18+8+3});e.s(["FILL_REST_ALPHA",0,.18,"buildFillTimeline",0,(e,{duration:t,ease:n="expo.out",lag:s=t})=>{let{start:a,end:o}=r(),l=i.default.timeline({paused:!0});for(let[i,r]of e.entries())l.fromTo(r,{"--fill-pos":a},{"--fill-pos":o,duration:t,ease:n},i*s);return l},"primeFillLines",0,(e,{align:t="start",settled:s=!1}={})=>{let a;if(!e.length)return r();let o=r(),l=i.default.getProperty(e[0],"color"),d=e[0].parentElement;d&&i.default.set(d,{display:"grid"});let c="-0.14em",h="center"===t,p="right"===t||"end"===t;return i.default.set(e,{display:"block",width:"fit-content",padding:"0.14em",marginBlock:c,marginLeft:h||p?"auto":c,marginRight:h?"auto":p?c:"auto",backgroundImage:(e=>{let t=(e.length-1)*18,i=["var(--fill-to) 0%",`var(--fill-to) calc((var(--fill-pos) - ${t+8}) * 1%)`];for(let t=e.length-1;t>=0;t-=1)i.push(`${e[t]} calc((var(--fill-pos) - ${18*t}) * 1%)`);return i.push("var(--fill-from) calc((var(--fill-pos) + 8) * 1%)"),i.push("var(--fill-from) 100%"),`linear-gradient(97deg, ${i.join(", ")})`})(n),backgroundClip:"text",WebkitBackgroundClip:"text",color:"transparent","--fill-from":(a=l.match(/[\d.]+/g))&&a.length>=3?`rgba(${a[0]}, ${a[1]}, ${a[2]}, 0.18)`:l,"--fill-to":l,"--fill-pos":s?o.end:o.start}),o}])}]);