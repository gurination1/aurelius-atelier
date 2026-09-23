(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,473210,e=>{"use strict";var t=e.i(500932),r=e.i(478430),n=e.i(271645);let i=()=>{let e,i,o=(0,t.c)(4),{setLoaderEnabled:l,setLoaderMounted:a}=(0,n.use)(r.LoaderContext);return o[0]!==l||o[1]!==a?(e=()=>{l(!1),a(!1)},i=[l,a],o[0]=l,o[1]=a,o[2]=e,o[3]=i):(e=o[2],i=o[3]),(0,n.useEffect)(e,i),null};i.displayName="LoaderBypass",e.s(["default",0,i])},17344,e=>{"use strict";var t=e.i(843476),r=e.i(500932),n=e.i(365747),i=e.i(989970),o=e.i(883495),l=e.i(875324);i.default.registerPlugin(o.ScrollTrigger,l.SplitText,n.useGSAP);var a=e.i(646340),s=e.i(228073);let c=!1;var d=e.i(338139),u=e.i(271645),m=e.i(997053);let f=e=>{let n,i,o,l=(0,r.c)(7),{children:c,desktopVideoSrc:f,mobileVideoSrc:h,loaderEnabled:g}=e;return l[0]===Symbol.for("react.memo_cache_sentinel")?(n=[],l[0]=n):n=l[0],(0,u.useEffect)(p,n),l[1]===Symbol.for("react.memo_cache_sentinel")?(i=(0,t.jsx)(s.GlobalStyle,{}),l[1]=i):i=l[1],l[2]!==c||l[3]!==f||l[4]!==g||l[5]!==h?(o=(0,t.jsx)(d.default,{children:(0,t.jsxs)(m.ThemeProvider,{theme:s.theme,children:[i,(0,t.jsx)(a.default,{desktopVideoSrc:f,mobileVideoSrc:h,loaderEnabled:g,children:c})]},"themeprovider")}),l[2]=c,l[3]=f,l[4]=g,l[5]=h,l[6]=o):o=l[6],o};function p(){c||(c=!0)}f.displayName="Providers",e.s(["default",0,f],17344)},95187,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={callServer:function(){return o.callServer},createServerReference:function(){return a.createServerReference},findSourceMapURL:function(){return l.findSourceMapURL}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(132120),l=e.r(92245),a=e.r(235326)},365183,e=>{"use strict";var t=e.i(843476),r=e.i(500932),n=e.i(522016),i=e.i(271645);let o=()=>{let e,o,l,a=(0,r.c)(3),[s,c]=(0,i.useState)(!1);return(a[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>{c(window===window.parent&&!window.opener)},o=[],a[0]=e,a[1]=o):(e=a[0],o=a[1]),(0,i.useEffect)(e,o),s)?(a[2]===Symbol.for("react.memo_cache_sentinel")?(l=(0,t.jsx)(n.default,{href:"/api/draft-mode/disable/",prefetch:!1,"aria-label":"Exit draft preview mode",style:{position:"fixed",bottom:"1rem",right:"1rem",zIndex:9999,padding:"0.75rem 1rem",background:"#111",color:"#fff",borderRadius:"0.5rem",fontSize:"0.875rem",textDecoration:"none"},children:"Exit draft preview"}),a[2]=l):l=a[2],l):null};o.displayName="DisableDraftMode";var l=e.i(618566);let a=(0,e.i(770703).default)(()=>e.A(896535),{ssr:!1});var s=e.i(95187);let c=(0,s.createServerReference)("40222a609913e83739ac6ea62210106bbd73ecad22",s.callServer,void 0,s.findSourceMapURL,"perspectiveChangeAction"),d=(0,s.createServerReference)("4040183e5bc598758a7a8cc216b3ecf9a24eda037e",s.callServer,void 0,s.findSourceMapURL,"variantChangeAction");function u(e){let r,n;if("string"!=typeof e.basePath)try{r=""}catch(e){console.error("Failed detecting basePath",e)}if("boolean"!=typeof e.trailingSlash)try{n=!0,console.log(`Detected next trailingSlash as ${JSON.stringify(n)} by reading "process.env.__NEXT_TRAILING_SLASH". If this is incorrect then you can set it manually with the trailingSlash prop on the <VisualEditing /> component.`)}catch(e){console.error("Failed detecting trailingSlash",e)}return(0,t.jsx)(a,{onPerspectiveChange:c,onVariantChange:d,...e,basePath:e.basePath??r,trailingSlash:e.trailingSlash??n})}let m=()=>{let e,n,i,a,s=(0,r.c)(7),c=(0,l.useRouter)();s[0]!==c?(e=e=>(c.refresh(),new Promise(f)),s[0]=c,s[1]=e):e=s[1];let d=e;return s[2]!==d?(n=(0,t.jsx)(u,{trailingSlash:!0,refresh:d}),s[2]=d,s[3]=n):n=s[3],s[4]===Symbol.for("react.memo_cache_sentinel")?(i=(0,t.jsx)(o,{}),s[4]=i):i=s[4],s[5]!==n?(a=(0,t.jsxs)(t.Fragment,{children:[n,i]}),s[5]=n,s[6]=a):a=s[6],a};function f(e){setTimeout(e,1e3)}m.displayName="DraftPreview",e.s(["default",0,m],365183)},824171,e=>{"use strict";var t=e.i(843476),r=e.i(500932),n=e.i(271645),i=e.i(228073),o=e.i(494473),l=e.i(575509),a=e.i(997053);let s=(0,a.default)(l.Div).withConfig({componentId:"sc-f9bddc50-0"})(e=>a.css`
		height: 100%;
		display: none;

		${e.$isMobile&&a.css`
			display: block;
		`}

		${l.bp.m`
            ${e.$isTablet&&a.css`
					display: block;
				`}
        `}

        ${l.bp.l`
            display: block;
        `}

        span {
			--max: 100%;
			display: block;

			border-inline-style: dashed;
			border-inline-width: ${+!!e.$altColor}px;
			border-inline-color: ${(0,l.getFeedback)("negative")};

			width: var(--max);
			height: var(--max);
			transition: all 0.25s linear;

			&:after {
				content: '';
				opacity: ${!e.$altColor?.5:.2};
				display: block;
				width: var(--max);
				height: var(--max);
				transition: all 0.25s linear;
				background-color: ${!e.$altColor?(0,l.getFeedback)("negative"):"transparent"};
			}
		}
	`),c=(0,a.default)(l.Div).attrs({as:"aside"}).withConfig({componentId:"sc-f9bddc50-1"})(e=>a.css`
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100%;
		height: ${e.$showGrid?"100%":"0%"};
		pointer-events: none;
		transition: all 1s ${(0,l.getEase)("bezzy")};

		waffl-grid {
			height: 100%;
		}
	`),d=i.theme.grid.columns.l,u=i.theme.grid.columns.s,m=i.theme.grid.columns.m;function f(e){return!e}function p(e){return!e}e.s(["default",0,()=>{let e,i,l,a,h,g,w,b=(0,r.c)(12),[y,x]=(0,n.useState)(!1),[v,S]=(0,n.useState)(!0);b[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>{x(f)},b[0]=e):e=b[0];let $=e;b[1]===Symbol.for("react.memo_cache_sentinel")?(i=()=>{S(p)},b[1]=i):i=b[1];let C=i;b[2]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{let e=e=>{e.ctrlKey&&("g"===e.key?(e.preventDefault(),$()):"f"===e.key&&(e.preventDefault(),C()))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},a=[$,C],b[2]=l,b[3]=a):(l=b[2],a=b[3]),(0,n.useEffect)(l,a),b[4]!==v?(h=Array.from({length:d},(e,r)=>(0,t.jsx)(s,{$isMobile:r<u,$isTablet:r<m,$altColor:v,style:{gridColumn:r+1},children:(0,t.jsx)("span",{})},`col-${r}`)),b[4]=v,b[5]=h):h=b[5];let E=h;return b[6]!==E?(g=(0,t.jsx)(o.Grid,{children:E}),b[6]=E,b[7]=g):g=b[7],b[8]!==y||b[9]!==g||b[10]!==v?(w=(0,t.jsx)(c,{$showGrid:y,$altColor:v,children:g}),b[8]=y,b[9]=g,b[10]=v,b[11]=w):w=b[11],w}],824171)},605949,e=>{"use strict";var t=e.i(843476),r=e.i(500932),n=e.i(383520),i=e.i(478430),o=e.i(101384),l=e.i(189897),a=e.i(607561),s=e.i(271645),c=e.i(440873),d=e.i(505271);function u(){return Promise.all([(0,c.waitForFonts)(),(0,d.waitForImages)()])}var m=e.i(494473),f=e.i(989970),p=e.i(618566),h=e.i(486861),g=e.i(797489),w=e.i(274879),b=e.i(875324);let y=e=>/[.!?]$/.test(e)?.42:.25*!!/[,;:]$/.test(e);var x=e.i(575509),v=e.i(212960),S=e.i(997053);let $=[void 0,void 0,void 0,void 0,void 0].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.03*t}s; }`).join("\n"),C=(0,S.default)(x.Div).attrs({as:"aside"}).withConfig({componentId:"sc-60e682e4-0"})(()=>S.css`
        position: fixed;
        inset: 0;
        z-index: 999;

        display: grid;
        place-items: center;
        
        background: ${(0,x.getGlobal)("black")};
    `),E=(0,S.default)(x.Div).attrs({as:"p"}).withConfig({componentId:"sc-60e682e4-1"})(({theme:e})=>S.css`
        ${v.captionL}

        max-width: 45.5rem;
        margin: 0 auto;

        text-align: center;
        text-wrap: balance;
        color: ${e.colors.global.white};
        visibility: hidden;
        opacity: 0;

        > div {
            display: inline-block;
            vertical-align: baseline;
        }
    `),j=S.default.div.withConfig({componentId:"sc-60e682e4-2"})(()=>S.css`
		position: fixed;
        inset: auto auto ${(0,x.getGap)("l")} 50%;
		transform: translateX(-50%);

        display: flex;
        flex-direction: column;
        align-items: center;

        ${x.bp.l`
            inset: auto auto ${(0,x.getGap)("xl")} 50%;
        `}
	`),_=S.default.div.withConfig({componentId:"sc-60e682e4-3"})(()=>S.css`
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: ${(0,x.getGap)("s")};
	`),L=S.default.div.withConfig({componentId:"sc-60e682e4-4"})(()=>S.css`
		width: 16rem;
		height: 2px;
        border-radius: 1px;
		overflow: hidden;
		background: ${(0,x.getGlobal)("white",10)};
	`),k=S.default.div.withConfig({componentId:"sc-60e682e4-5"})(()=>S.css`
		width: 100%;
		height: 100%;
		background: ${(0,x.getBrand)("bc5")};
		transform: scaleX(0);
		transform-origin: left center;
	`),T=S.default.span.withConfig({componentId:"sc-60e682e4-6"})(()=>S.css`
		${v.captionS}
        max-width: 19.9rem;
		text-align: center;
		text-wrap: balance;
		color: ${(0,x.getGlobal)("white",40)};
	`),A=S.default.button.withConfig({componentId:"sc-60e682e4-7"})(()=>S.css`
        ${v.titleS}

        padding: ${(0,x.getGap)("sm")};
        color: ${(0,x.getGlobal)("white")};
        text-transform: uppercase;

        > span {
            position: relative;
            display: inline-block;
            overflow: clip;

            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background: ${(0,x.getGlobal)("white")}	;
                transform: scaleX(1);
                transform-origin: left center;
                transition: transform 0.3s ease-in-out;
            }
        }

        @media (hover: hover) and (pointer: fine) {
            &:hover {
                cursor: pointer;

                > span:after {
                    transform: scaleX(0);
                    transform-origin: right center;
                }

                > span > span {
                    transform: translateY(2em);
                }
            }
        }

        > span > span {
            display: inline-block;
            position: relative;
            text-shadow: ${(0,x.getGlobal)("white",60)} 0px -2em 0px;

            transition: transform 0.75s ${(0,x.getEase)("bezzy2")};

            ${$}
        }
	`),P=e=>{let n,i,c,d,u,m,p,y=(0,r.c)(19),{text:x,onComplete:v}=e,{isReducedMotion:S}=(0,s.use)(o.PerformanceContext),$=(0,s.useRef)(null);y[0]!==x?(n=(0,l.cleanSanityString)(x),y[0]=x,y[1]=n):n=y[1];let C=n,j=(0,w.useSplitTextRecovery)($,C);y[2]!==C?(i=(0,h.escapeHtml)(C),y[2]=C,y[3]=i):i=y[3];let _=(0,g.useInnerHtml)(i);return y[4]!==S||y[5]!==v?(c=()=>{if(!$.current)return;if(S){f.default.set($.current,{autoAlpha:1}),v?.();return}let e=b.SplitText.create($.current,{type:"words",aria:"none"}),{words:t}=e;if(!t.length)return f.default.set($.current,{autoAlpha:1}),v?.(),()=>e.revert();f.default.set(t,{autoAlpha:0,y:12,filter:"blur(0.8rem)"}),f.default.set($.current,{autoAlpha:1});let r=f.default.timeline({delay:.4,onComplete:()=>{f.default.set(t,{autoAlpha:1,y:0,filter:"none",clearProps:"transform,translate,rotate,scale,willChange"}),v?.()}}),n=0;return t.forEach((e,i)=>{let o;r.to(e,{autoAlpha:1,y:0,filter:"blur(0rem)",duration:.65,ease:"power3.out"},n),n+=.11,i<t.length-1&&(n+=(o=e.textContent?.trim()??"",/[.!?]$/.test(o)?.42:.25*!!/[,;:]$/.test(o)))}),()=>e.revert()},y[4]=S,y[5]=v,y[6]=c):c=y[6],y[7]!==C||y[8]!==S||y[9]!==j?(d={scope:$,dependencies:[C,S,j]},y[7]=C,y[8]=S,y[9]=j,y[10]=d):d=y[10],(0,a.useAnimation)(c,d),y[11]!==C?(u=(0,t.jsx)("span",{className:"sr-only",children:C}),y[11]=C,y[12]=u):u=y[12],y[13]!==C||y[14]!==_?(m=(0,t.jsx)(E,{ref:$,"aria-hidden":!0,"data-cinematic-words":!0,dangerouslySetInnerHTML:_},C),y[13]=C,y[14]=_,y[15]=m):m=y[15],y[16]!==u||y[17]!==m?(p=(0,t.jsxs)(t.Fragment,{children:[u,m]}),y[16]=u,y[17]=m,y[18]=p):p=y[18],p};P.displayName="CinematicText";let R=()=>{let e,n,o,l=(0,r.c)(5),{setLoaderEnabled:a}=(0,s.use)(i.LoaderContext);l[0]!==a?(e=()=>{a(!1)},l[0]=a,l[1]=e):e=l[1];let c=e;return l[2]===Symbol.for("react.memo_cache_sentinel")?(n=(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{children:"E"}),(0,t.jsx)("span",{children:"n"}),(0,t.jsx)("span",{children:"t"}),(0,t.jsx)("span",{children:"e"}),(0,t.jsx)("span",{children:"r"})]}),l[2]=n):n=l[2],l[3]!==c?(o=(0,t.jsx)(A,{type:"button","aria-label":"Enter Website",onClick:c,children:n}),l[3]=c,l[4]=o):o=l[4],o};R.displayName="EnterButton";let I=()=>{let e,n,i,l=(0,r.c)(4),{isReducedMotion:c}=(0,s.use)(o.PerformanceContext),d=(0,s.useRef)(null);return l[0]!==c?(e=()=>{if(!d.current)return;let e=Array.from(d.current.children);if(e.length){if(c)return void f.default.set(e,{autoAlpha:1,y:0});f.default.set(e,{autoAlpha:0,y:24,willChange:"opacity, transform"}),f.default.to(e,{autoAlpha:1,y:0,duration:.75,stagger:.12,ease:"power2.out",onComplete:()=>{f.default.set(e,{willChange:"auto"})}})}},l[0]=c,l[1]=e):e=l[1],l[2]===Symbol.for("react.memo_cache_sentinel")?(n={scope:d},l[2]=n):n=l[2],(0,a.useAnimation)(e,n),l[3]===Symbol.for("react.memo_cache_sentinel")?(i=(0,t.jsxs)(_,{ref:d,children:[(0,t.jsx)(R,{}),(0,t.jsx)(T,{children:"By pressing “Enter” on this website, you accept the use of cookies for analytics"})]}),l[3]=i):i=l[3],i};I.displayName="LoaderBottom";let N=e=>{let n,i,l,c,d,u,m=(0,r.c)(16),{duration:p,canComplete:h,onComplete:g}=e,w=void 0!==h&&h,{isReducedMotion:b}=(0,s.use)(o.PerformanceContext),y=(0,s.useRef)(null),x=(0,s.useRef)(!1),[v,S]=(0,s.useState)(!1);m[0]!==g?(n=()=>{if(!y.current||x.current)return;let e=y.current.firstElementChild;e&&f.default.to(e,{scaleX:1,duration:0,ease:"power2.out",overwrite:!0,onComplete:()=>{x.current||(x.current=!0,g?.())}})},m[0]=g,m[1]=n):n=m[1];let $=n;return m[2]!==p||m[3]!==b?(i=()=>{if(!y.current)return;let e=y.current.firstElementChild;if(e){if(b){f.default.set(e,{scaleX:1}),S(!0);return}x.current=!1,S(!1),f.default.set(e,{scaleX:0,transformOrigin:"left center"}),f.default.to(e,{scaleX:.92,duration:p,ease:"none",onComplete:()=>S(!0)})}},m[2]=p,m[3]=b,m[4]=i):i=m[4],m[5]!==p||m[6]!==b?(l={scope:y,dependencies:[p,b]},m[5]=p,m[6]=b,m[7]=l):l=m[7],(0,a.useAnimation)(i,l),m[8]!==w||m[9]!==v||m[10]!==b||m[11]!==g||m[12]!==$?(c=()=>{if(w&&v&&!x.current){if(b){x.current=!0,g?.();return}$()}},d=[w,v,b,g,$],m[8]=w,m[9]=v,m[10]=b,m[11]=g,m[12]=$,m[13]=c,m[14]=d):(c=m[13],d=m[14]),(0,s.useEffect)(c,d),m[15]===Symbol.for("react.memo_cache_sentinel")?(u=(0,t.jsx)(L,{ref:y,"aria-hidden":"true",children:(0,t.jsx)(k,{})}),m[15]=u):u=m[15],u};N.displayName="LoaderProgress";let M=e=>{let c,d,h,g,w,b,x,v,S,$,E=(0,r.c)(27),{text:_}=e,L=void 0===_?"built on distinction, desire, and identity. not simply to modify vehicles, but to reimagine them as objects of distinction, desire and cultural value.":_,{loaderEnabled:k,setLoaderMounted:T}=(0,s.use)(i.LoaderContext),{heroVideoLoadState:A,isIntroFrameReady:R,hasIntroVideo:M}=(0,s.use)(n.HeroVideoContext),{isReducedMotion:G}=(0,s.use)(o.PerformanceContext),z=["/",""].includes(((0,p.usePathname)()||"").replace(/^\/aurelius-atelier/,"")),O=(0,s.useRef)(null),F=(0,s.useRef)(null),[H,B]=(0,s.useState)(!0),[D,U]=(0,s.useState)(!0),[X,W]=(0,s.useState)(!1);E[0]!==L?(c=(0,l.cleanSanityString)(L),E[0]=L,E[1]=c):c=E[1];let q=c;E[2]!==q?(d=(e=>{let t=e.trim().split(/\s+/).filter(Boolean);if(!t.length)return .4;let r=0;for(let e=0;e<t.length;e++){if(e===t.length-1)return .4+r+.65;r+=.11+y(t[e]??"")}return 1.05})(q),E[2]=q,E[3]=d):d=E[3];let V=d;if(E[4]!==A)h="ready"===A||"unsupported"===A||"error"===A,E[4]=A,E[5]=h;else h=E[5];let J=h,K=(e=>{let t,n,i=(0,r.c)(3),[o,l]=(0,s.useState)(!1);return i[0]!==e?(t=()=>{if(!e)return;let t=!1;return l(!1),(function(e=4e3){return"complete"===document.readyState?Promise.resolve():new Promise(t=>{let r=!1,n=()=>{r||(r=!0,window.clearTimeout(i),t())},i=window.setTimeout(n,e);window.addEventListener("load",n,{once:!0})})})().then(u).then(()=>{t||l(!0)}),()=>{t=!0}},n=[e],i[0]=e,i[1]=t,i[2]=n):(t=i[1],n=i[2]),(0,s.useEffect)(t,n),!!e&&o})(!z),Q=H;E[6]===Symbol.for("react.memo_cache_sentinel")?(g=()=>B(!0),E[6]=g):g=E[6];let Y=g;E[7]===Symbol.for("react.memo_cache_sentinel")?(w=()=>U(!0),E[7]=w):w=E[7];let Z=w;return(E[8]!==G||E[9]!==X||E[10]!==k||E[11]!==T?(b=()=>{if(k||X||!O.current)return;if(G){W(!0),T(!1);return}let e=O.current,t=Array.from(e.querySelectorAll("[data-cinematic-words] > *")),r=F.current,n=f.default.timeline({onComplete:()=>{W(!0)}});t.length&&n.set(t,{filter:"blur(0rem)"},0).to(t,{autoAlpha:0,y:-12,filter:"blur(0.8rem)",duration:.6,stagger:.03,ease:"power2.in"},0),r&&n.to(r,{autoAlpha:0,y:16,duration:.5,ease:"power2.in"},0),n.to(e,{autoAlpha:0,duration:.8,ease:"power2.inOut",onStart:()=>T(!1)},n.duration()+.15)},E[8]=G,E[9]=X,E[10]=k,E[11]=T,E[12]=b):b=E[12],E[13]!==G||E[14]!==X||E[15]!==k||E[16]!==T?(x={scope:O,dependencies:[k,X,G,T]},E[13]=G,E[14]=X,E[15]=k,E[16]=T,E[17]=x):x=E[17],(0,a.useAnimation)(b,x),X)?null:(E[18]!==q?(v=(0,t.jsx)(m.default,{children:(0,t.jsx)(P,{text:q,onComplete:Y})}),E[18]=q,E[19]=v):v=E[19],E[20]!==Q||E[21]!==D||E[22]!==V?(S=(0,t.jsx)(j,{ref:F,children:D?(0,t.jsx)(I,{}):(0,t.jsx)(N,{duration:V,canComplete:Q,onComplete:Z})}),E[20]=Q,E[21]=D,E[22]=V,E[23]=S):S=E[23],E[24]!==S||E[25]!==v?($=(0,t.jsxs)(C,{ref:O,children:[v,S]}),E[24]=S,E[25]=v,E[26]=$):$=E[26],$)};M.displayName="Loader",e.s(["default",0,M],605949)},882326,e=>{"use strict";var t=e.i(843476),r=e.i(500932),n=e.i(831119),i=e.i(770703),o=e.i(271645),l=e.i(845262);let a=(0,i.default)(()=>(0,l.prefetchMenu)(),{ssr:!1}),s=e=>{let i,l,s,c,d,u=(0,r.c)(9),{socials:m,legals:f,heroImages:p}=e,{menuOpen:h}=(0,o.use)(n.MenuContext),[g,w]=(0,o.useState)(!1);return(u[0]!==h?(i=()=>{h&&w(!0)},l=[h],u[0]=h,u[1]=i,u[2]=l):(i=u[1],l=u[2]),(0,o.useEffect)(i,l),u[3]===Symbol.for("react.memo_cache_sentinel")?(s=()=>{if("function"!=typeof window.requestIdleCallback){let e=window.setTimeout(()=>w(!0),2500);return()=>window.clearTimeout(e)}let e=window.requestIdleCallback(()=>w(!0),{timeout:4e3});return()=>window.cancelIdleCallback(e)},c=[],u[3]=s,u[4]=c):(s=u[3],c=u[4]),(0,o.useEffect)(s,c),g)?(u[5]!==p||u[6]!==f||u[7]!==m?(d=(0,t.jsx)(a,{socials:m,legals:f,heroImages:p}),u[5]=p,u[6]=f,u[7]=m,u[8]=d):d=u[8],d):null};s.displayName="MenuGate",e.s(["default",0,s])},25863,e=>{"use strict";var t=e.i(843476),r=e.i(500932),n=e.i(831119),i=e.i(883495),o=e.i(271645),l=e.i(575509),a=e.i(997053);let s=(0,a.default)(l.Div).attrs({as:"main"}).withConfig({componentId:"sc-d3167531-0"})(({$isMenuOpen:e,$isPrimed:t})=>a.css`
        --speed: 1s;
        --ease: ${(0,l.getEase)("bezzy2")};

        position: relative;
        z-index: 1;
        
        pointer-events: ${e?"none":"all"};
        clip-path: inset(${50*!!e}%);
        scale: ${e?.5:1};
        transition: clip-path var(--speed) var(--ease), scale var(--speed) var(--ease);

        /* NOTE • Promoted BEFORE the first open, not during it. Animating clip-path
           and scale together forces this element onto its own compositor layer, and
           on the very first open that promotion happened as the transition started —
           the frame painted before the new layer had rasterised showed the page
           unclipped, whatever happened to be on screen at that scroll position. One
           frame, first open only, because every later open reuses the layer.

           Keyed to menuReady rather than menuOpen so the promotion lands when the
           lazy menu warm-mounts at idle, with no click waiting on it. */
        will-change: ${t?"clip-path, scale":"auto"};
    `),c=e=>{let l,a,c,d=(0,r.c)(8),{children:u}=e,{menuOpen:m,menuReady:f,setMenuVisible:p}=(0,o.use)(n.MenuContext),h=m&&f,g=(0,o.useRef)(null),w=(0,o.useRef)(!1);return d[0]!==h||d[1]!==p?(l=()=>{if(h){w.current=!0,p(!0);return}if(!w.current||!g.current)return;let e=g.current,t=!1,r=()=>{t||(t=!0,p(!1),i.default.refresh())},n=t=>{t.target===e&&"scale"===t.propertyName&&r()};e.addEventListener("transitionend",n);let o=window.setTimeout(r,1100);return()=>{e.removeEventListener("transitionend",n),window.clearTimeout(o)}},a=[h,p],d[0]=h,d[1]=p,d[2]=l,d[3]=a):(l=d[2],a=d[3]),(0,o.useEffect)(l,a),d[4]!==u||d[5]!==h||d[6]!==f?(c=(0,t.jsx)(s,{id:"page",ref:g,$isMenuOpen:h,$isPrimed:f,children:u}),d[4]=u,d[5]=h,d[6]=f,d[7]=c):c=d[7],c};c.displayName="PageWrapper",e.s(["default",0,c],25863)},945047,e=>{"use strict";var t=e.i(843476),r=e.i(500932),n=e.i(134770),i=e.i(383520),o=e.i(478430),l=e.i(101384),a=e.i(764548),s=e.i(573943),c=e.i(255667),d=e.i(618566),u=e.i(271645),m=e.i(174080),f=e.i(575509),p=e.i(997053);let h=(0,p.default)(f.Div).attrs({as:"pre"}).withConfig({componentId:"sc-42c083a9-0"})(()=>p.css`
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 99999999999;
		max-width: 92vw;
		margin: 0;
		padding: 0.8rem 1rem;
		font-family: monospace;
		font-size: 1.1rem;
		line-height: 1.5;
		white-space: pre-wrap;
		color: #00ff66;
		background: rgba(0, 0, 0, 0.85);
		pointer-events: none;
	`),g=()=>{let e,n,l,a,s,f=(0,r.c)(27),{loaderEnabled:p,loaderMounted:g}=(0,u.use)(o.LoaderContext),{heroVideoLoadState:w,isHeroPlaybackComplete:b,activeFrameRef:y}=(0,u.use)(i.HeroVideoContext),x=(0,d.usePathname)(),v=(0,c.useLenis)(),[S,$]=(0,u.useState)(!1),[C,E]=(0,u.useState)("");return(f[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>{$(new URLSearchParams(window.location.search).has("af-debug"))},n=[],f[0]=e,f[1]=n):(e=f[0],n=f[1]),(0,u.useEffect)(e,n),f[2]!==y||f[3]!==w||f[4]!==b||f[5]!==S||f[6]!==v?.isScrolling||f[7]!==v?.isStopped||f[8]!==v?.rootElement||f[9]!==v?.scroll||f[10]!==v?.targetScroll||f[11]!==v?.velocity||f[12]!==p||f[13]!==g||f[14]!==x?(l=()=>{if(!S)return;let e=[],t=t=>{e.push(String(t.message).slice(0,90))},r=t=>{e.push(`rejection: ${String(t.reason).slice(0,90)}`)};window.addEventListener("error",t),window.addEventListener("unhandledrejection",r);let n={starts:0,moves:0,prevented:"n/a",target:"-",touchAction:"-",fixedAncestor:"-"},i=e=>{n.starts=n.starts+1,(e=>{if(!(e instanceof Element))return;n.target=`${e.tagName.toLowerCase()}${e.className&&"string"==typeof e.className?`.${e.className.split(" ")[0]}`:""}`,n.touchAction=getComputedStyle(e).touchAction;let t=e;n.fixedAncestor="no";for(let e=0;t&&e<15;e++){if("fixed"===getComputedStyle(t).position){n.fixedAncestor=`yes<${t.tagName.toLowerCase()}>`;break}t=t.parentElement}})(e.target)},o=e=>{n.moves=n.moves+1,n.prevented=String(e.defaultPrevented)};window.addEventListener("touchstart",i,{passive:!0}),window.addEventListener("touchmove",o,{passive:!0});let l=window.setInterval(()=>{let t=v?.rootElement,r=y.current,i=r?.decoder;E([`path ${x}`,`loader enabled=${p} mounted=${g}`,`hero video=${w} playbackComplete=${b}`,`lenis stopped=${v?.isStopped??"n/a"} scroll=${Math.round(v?.scroll??-1)}`,t?`wrapper ${Math.round(t.scrollTop)}/${t.scrollHeight} cls=${t.className}`:"wrapper none",i?`decoder ${i.state} queue=${i.decodeQueueSize} frame=${r?.frameProcessed??"-"} enabled=${r?.enabled??"-"}`:"decoder none",`target ${Math.round(v?.targetScroll??-1)} vel ${(v?.velocity??0).toFixed(1)} scrolling=${String(v?.isScrolling??"n/a")}`,`touch s=${n.starts} m=${n.moves} prevented=${n.prevented}`,`on ${n.target} tAction=${n.touchAction} fixed=${n.fixedAncestor}`,`errors ${e.length}${e.length?` | last: ${e[e.length-1]}`:""}`].join("\n"))},300);return()=>{window.removeEventListener("error",t),window.removeEventListener("unhandledrejection",r),window.removeEventListener("touchstart",i),window.removeEventListener("touchmove",o),window.clearInterval(l)}},f[2]=y,f[3]=w,f[4]=b,f[5]=S,f[6]=v?.isScrolling,f[7]=v?.isStopped,f[8]=v?.rootElement,f[9]=v?.scroll,f[10]=v?.targetScroll,f[11]=v?.velocity,f[12]=p,f[13]=g,f[14]=x,f[15]=l):l=f[15],f[16]!==y||f[17]!==w||f[18]!==b||f[19]!==S||f[20]!==v||f[21]!==p||f[22]!==g||f[23]!==x?(a=[y,w,b,S,v,p,g,x],f[16]=y,f[17]=w,f[18]=b,f[19]=S,f[20]=v,f[21]=p,f[22]=g,f[23]=x,f[24]=a):a=f[24],(0,u.useEffect)(l,a),S)?(f[25]!==C?(s=(0,m.createPortal)((0,t.jsx)(h,{"aria-hidden":!0,children:C}),document.body),f[25]=C,f[26]=s):s=f[26],s):null};g.displayName="DebugHud";let w=(0,p.default)(f.Div).withConfig({componentId:"sc-13a61dc4-0"})(()=>p.css`
		position: fixed;
		z-index: 997;
		/* NOTE • The three edges ride one custom property so the bar can be driven
		   flush to the corner with a single tweened number. Unitless and multiplied
		   here, because GSAP interpolates a bare number cleanly where a value
		   carrying its own unit has to be parsed and re-serialised every frame. */
		--progress-inset: 1.6;
		inset: auto calc(var(--progress-inset) * 1rem) calc(var(--progress-inset) * 1rem);
		height: 2px;
		overflow: hidden;
		pointer-events: none;
		background: ${(0,f.getGlobal)("white",10)};
		view-transition-name: scroll-progress;
	`),b=(0,p.default)(f.Div).withConfig({componentId:"sc-13a61dc4-1"})(()=>p.css`
		width: 100%;
		height: 100%;
		background: ${(0,f.getBrand)("bc5")};
		/* Sub-pixel, not zero — see MIN_PROGRESS in index.tsx. */
		transform: scaleX(0.0005);
		transform-origin: left center;
		view-transition-name: scroll-progress-fill;
	`),y=e=>{if((0,a.readScrollLoop)(e)>0)return null;let t=e.scrollHeight-e.clientHeight;if(t<=0)return null;let r=document.querySelector("footer");return{start:Math.max(0,Math.min(r?r.getBoundingClientRect().top-e.getBoundingClientRect().top+e.scrollTop-e.clientHeight:t-e.clientHeight,t)),end:t}},x=()=>{let e,n,i,l,s,m=(0,r.c)(7),{loaderMounted:f}=(0,u.use)(o.LoaderContext),p=(0,u.useRef)(null),h=(0,u.useRef)(null),g=(0,u.useRef)(null),x=(0,d.usePathname)(),v=(0,c.useLenis)();m[0]===Symbol.for("react.memo_cache_sentinel")?(e=(e,t)=>{let r,n;p.current&&(p.current.style.transform=`scaleX(${(n=(r=(0,a.readScrollLoop)(t))>0?r:t.scrollHeight-t.clientHeight)<=0?{progress:5e-4,isAtBottom:!1}:Math.min(1,Math.max(5e-4,(0,a.toLoopPosition)(e,r)/n))})`);let i=h.current,o=g.current;if(!i)return;if(!o||o.end<=o.start)return void i.style.setProperty("--progress-inset",String(1.6));let l=Math.min(1,Math.max(0,(e-o.start)/(o.end-o.start)));i.style.setProperty("--progress-inset",String(1.6*(1-l)))},m[0]=e):e=m[0];let S=e;return(m[1]===Symbol.for("react.memo_cache_sentinel")?(n=e=>{let t=e.rootElement;t&&S(e.scroll,t)},m[1]=n):n=m[1],(0,c.useLenis)(n),m[2]!==v||m[3]!==x?(i=()=>{if(!v||!x)return;let e=v.rootElement;g.current=y(e),S(v.scroll,e);let t=()=>{v.resize(),g.current=y(e),S(v.scroll,e)},r=window.requestAnimationFrame(t),n=window.setTimeout(t,300);return()=>{window.cancelAnimationFrame(r),window.clearTimeout(n)}},l=[v,x,S],m[2]=v,m[3]=x,m[4]=i,m[5]=l):(i=m[4],l=m[5]),(0,u.useEffect)(i,l),f)?null:(m[6]===Symbol.for("react.memo_cache_sentinel")?(s=(0,t.jsx)(w,{ref:h,"aria-hidden":"true",children:(0,t.jsx)(b,{ref:p})}),m[6]=s):s=m[6],s)};x.displayName="ScrollProgress";let v=p.default.div.withConfig({componentId:"sc-7cd9d095-0"})(()=>p.css`
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
			width: 18rem;
			max-height: calc(100dvh - 2rem);
			border: 1px solid rgb(255 255 255 / 0.18);
			border-radius: 6px;
		`}
	`),S=p.default.div.withConfig({componentId:"sc-7cd9d095-1"})(()=>p.css`
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
	`),$=p.default.div.withConfig({componentId:"sc-7cd9d095-2"})(()=>p.css`
		margin: 0.5rem 0 0;
		opacity: 0.7;
		white-space: pre-wrap;
	`),C=p.default.div.withConfig({componentId:"sc-7cd9d095-3"})(()=>p.css`
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
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

		small {
			font-size: 10px;
			opacity: 0.55;
		}

		em {
			font-style: normal;
			opacity: 0.7;
		}

		input[type='range'] {
			width: 100%;
			accent-color: #fff;
		}

		label[data-kind='toggle'] {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			input {
				accent-color: #fff;
				width: 1.4rem;
				height: 1.4rem;
			}
		}
	`),E="aurelius:scroll-tuner:2",j=[{key:"lerp",label:"lerp",hint:"wheel / programmatic smoothing",min:.02,max:.3,step:.005},{key:"duration",label:"duration",hint:"programmatic scroll length (s)",min:.3,max:3,step:.05},{key:"wheelMultiplier",label:"wheelMultiplier",hint:"wheel delta scale",min:.5,max:3,step:.05}],_=[{key:"smoothWheel",label:"smoothWheel",hint:"Lenis drives the wheel"}],L=()=>{let e,n,i,o,l,a,s,d,f,p,h,g,w,b,y,x,L,T,A,P=(0,r.c)(39),R=(0,c.useLenis)(),[I,N]=(0,u.useState)(!1),[M,G]=(0,u.useState)(!0),[z,O]=(0,u.useState)(null),[F,H]=(0,u.useState)(null),[B,D]=(0,u.useState)(""),[U,X]=(0,u.useState)(!1);P[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>{N(new URLSearchParams(window.location.search).has("scroll-debug"))},n=[],P[0]=e,P[1]=n):(e=P[0],n=P[1]),(0,u.useEffect)(e,n),P[2]!==I||P[3]!==R||P[4]!==z?(i=()=>{if(!I||!R||z)return;let e={smoothWheel:!!R.options.smoothWheel,lerp:R.options.lerp,duration:R.options.duration??1.2,wheelMultiplier:R.options.wheelMultiplier};O(e),H({...e,...(()=>{try{let e=window.localStorage.getItem(E);return e?JSON.parse(e):null}catch{return null}})()})},o=[I,R,z],P[2]=I,P[3]=R,P[4]=z,P[5]=i,P[6]=o):(i=P[5],o=P[6]),(0,u.useEffect)(i,o),P[7]!==R||P[8]!==F?(l=()=>{R&&F&&(Object.assign(R.options,F),window.localStorage.setItem(E,JSON.stringify(F)))},a=[R,F],P[7]=R,P[8]=F,P[9]=l,P[10]=a):(l=P[9],a=P[10]),(0,u.useEffect)(l,a),P[11]!==I||P[12]!==R?(s=()=>{if(!I||!R)return;let e=()=>{let e="ontouchstart"in window?"touch":"no-touch";D(`device: ${e} \xb7 ${window.innerWidth}\xd7${window.innerHeight}
scroll: ${Math.round(R.scroll)} / ${Math.round(R.limit)}
velocity: ${R.velocity.toFixed(2)} \xb7 scrolling: ${String(R.isScrolling)}
live options: lerp ${R.options.lerp} \xb7 duration ${R.options.duration??"lerp-driven"} \xb7 wheel\xd7 ${R.options.wheelMultiplier}`)};e();let t=window.setInterval(e,150);return()=>window.clearInterval(t)},d=[I,R],P[11]=I,P[12]=R,P[13]=s,P[14]=d):(s=P[13],d=P[14]),(0,u.useEffect)(s,d),P[15]!==U?(f=()=>{if(!U)return;let e=window.setTimeout(()=>X(!1),1200);return()=>window.clearTimeout(e)},p=[U],P[15]=U,P[16]=f,P[17]=p):(f=P[16],p=P[17]),(0,u.useEffect)(f,p),P[18]===Symbol.for("react.memo_cache_sentinel")?(h=(e,t)=>{H(r=>r?{...r,[e]:t}:r)},P[18]=h):h=P[18];let W=h;P[19]===Symbol.for("react.memo_cache_sentinel")?(g=(e,t)=>{H(r=>r?{...r,[e]:t}:r)},P[19]=g):g=P[19];let q=g;P[20]!==z?(w=()=>{z&&(H(z),window.localStorage.removeItem(E))},P[20]=z,P[21]=w):w=P[21];let V=w;P[22]!==F?(b=()=>{F&&navigator.clipboard?.writeText(JSON.stringify(F,null,2)).then(()=>X(!0),()=>X(!1))},P[22]=F,P[23]=b):b=P[23];let J=b;if(!I||!F)return null;P[24]===Symbol.for("react.memo_cache_sentinel")?(y=(0,t.jsx)("strong",{children:"scroll · lenis"}),P[24]=y):y=P[24],P[25]===Symbol.for("react.memo_cache_sentinel")?(x=()=>G(k),P[25]=x):x=P[25];let K=M?"hide":"show";return P[26]!==K?(L=(0,t.jsxs)(S,{children:[y,(0,t.jsx)("button",{type:"button",onClick:x,children:K})]}),P[26]=K,P[27]=L):L=P[27],P[28]!==U||P[29]!==J||P[30]!==V||P[31]!==M||P[32]!==B||P[33]!==F?(T=M?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(C,{children:[_.map(e=>(0,t.jsxs)("label",{"data-kind":"toggle",children:[(0,t.jsxs)("span",{children:[e.label,(0,t.jsx)("small",{children:e.hint})]}),(0,t.jsx)("input",{type:"checkbox",checked:F[e.key],onChange:t=>q(e.key,t.target.checked)})]},e.key)),j.map(e=>(0,t.jsxs)("label",{children:[(0,t.jsxs)("span",{children:[e.label,(0,t.jsx)("em",{children:F[e.key].toFixed(3)})]}),(0,t.jsx)("small",{children:e.hint}),(0,t.jsx)("input",{type:"range",min:e.min,max:e.max,step:e.step,value:F[e.key],onChange:t=>W(e.key,Number(t.target.value))})]},e.key))]}),(0,t.jsxs)(S,{children:[(0,t.jsx)("button",{type:"button",onClick:V,children:"reset to shipped"}),(0,t.jsx)("button",{type:"button",onClick:J,children:U?"copied":"copy config"})]}),(0,t.jsx)($,{children:B})]}):null,P[28]=U,P[29]=J,P[30]=V,P[31]=M,P[32]=B,P[33]=F,P[34]=T):T=P[34],P[35]!==M||P[36]!==L||P[37]!==T?(A=(0,m.createPortal)((0,t.jsxs)(v,{"data-scroll-tuner":!0,"data-open":M,children:[L,T]}),document.body),P[35]=M,P[36]=L,P[37]=T,P[38]=A):A=P[38],A};function k(e){return!e}L.displayName="ScrollTuner";var T=e.i(989970),A=e.i(883495);T.gsap.registerPlugin(A.default);let P=()=>{let e,t,n,a,s=(0,r.c)(10),m=(0,c.useLenis)(),f=(0,d.usePathname)(),{loaderEnabled:p,loaderMounted:h}=(0,u.use)(o.LoaderContext),{heroVideoLoadState:g,isHeroPlaybackComplete:w}=(0,u.use)(i.HeroVideoContext),{isReducedMotion:b}=(0,u.use)(l.PerformanceContext),[y,x]=(0,u.useState)(!1),v="/"===f&&!p&&!b&&"ready"===g&&!w;return s[0]!==y||s[1]!==v?(e=()=>{if(!v||y)return;let e=window.setTimeout(()=>x(!0),6e3);return()=>window.clearTimeout(e)},t=[v,y],s[0]=y,s[1]=v,s[2]=e,s[3]=t):(e=s[2],t=s[3]),(0,u.useEffect)(e,t),s[4]!==y||s[5]!==v||s[6]!==m||s[7]!==h?(n=()=>{if(m)return h||v&&!y?m.stop():m.start(),()=>{m.start()}},a=[y,v,m,h],s[4]=y,s[5]=v,s[6]=m,s[7]=h,s[8]=n,s[9]=a):(n=s[8],a=s[9]),(0,u.useEffect)(n,a),null},R=()=>{let e,t,n=(0,r.c)(4),i=(0,c.useLenis)();return n[0]!==i?.rootElement?(e=()=>{let e=i?.rootElement;if(!e)return;let t=t=>{(function(e){return e.target===document.documentElement||e.target===document.body})(t)&&e.dispatchEvent(new WheelEvent("wheel",t))};return window.addEventListener("wheel",t,{passive:!0}),()=>{window.removeEventListener("wheel",t)}},n[0]=i?.rootElement,n[1]=e):e=n[1],n[2]!==i?(t=[i],n[2]=i,n[3]=t):t=n[3],(0,u.useEffect)(e,t),null},I=()=>{let e,t,n=(0,r.c)(3),i=(0,c.useLenis)();return n[0]!==i?(e=()=>{let e=i?.rootElement;if(!i||!e)return;let t=0,r=0,n=()=>{t=0,"native"===i.isScrolling&&((0,s.scrollTrace)("watchdog rest",{position:Math.round(e.scrollTop)}),i.reset(),i.emit())},o=()=>{let o=performance.now();o-r>120&&(r=o,(0,s.scrollTrace)("native scroll",{position:Math.round(e.scrollTop),isScrolling:i.isScrolling})),window.clearTimeout(t),t=window.setTimeout(n,200)};return e.addEventListener("scroll",o,{passive:!0}),()=>{window.clearTimeout(t),e.removeEventListener("scroll",o)}},t=[i],n[0]=i,n[1]=e,n[2]=t):(e=n[1],t=n[2]),(0,u.useEffect)(e,t),null},N=()=>{let e=(0,c.useLenis)(),t=(0,d.usePathname)(),r=(0,u.useRef)(null);return(0,u.useLayoutEffect)(()=>{if(!e||r.current===t)return;r.current=t,e.options.infinite&&(e.options.infinite=!1),e.rootElement.setAttribute(a.SCROLL_RESETTING_ATTRIBUTE,"");try{e.scrollTo(0,{immediate:!0,force:!0})}finally{e.rootElement.removeAttribute(a.SCROLL_RESETTING_ATTRIBUTE)}e.resize();let n=requestAnimationFrame(()=>{A.default.refresh()});return()=>cancelAnimationFrame(n)},[e,t]),null},M=()=>{let e,t,n=(0,r.c)(3),i=(0,c.useLenis)();return n[0]!==i?(e=()=>{if(!i)return;let e=i.rootElement;A.default.scrollerProxy(e,{scrollTop:e=>(void 0!==e&&i.scrollTo(e,{immediate:!0}),i.scroll),getBoundingClientRect:()=>({top:0,left:0,width:e.clientWidth,height:e.clientHeight}),pinType:"fixed"}),A.default.defaults({scroller:e}),i.on("scroll",A.default.update);let t=e=>i.raf(1e3*e);return T.gsap.ticker.add(t),A.default.refresh(),()=>{i.off("scroll",A.default.update),T.gsap.ticker.remove(t),A.default.defaults({scroller:window}),A.default.scrollerProxy(e)}},t=[i],n[0]=i,n[1]=e,n[2]=t):(e=n[1],t=n[2]),(0,u.useEffect)(e,t),null},G=e=>{let i,o,a,s,d,m,f,p,h,w,b=(0,r.c)(12),{children:y}=e,{lenisRef:v}=(0,u.use)(n.AppContext),{isReducedMotion:S}=(0,u.use)(l.PerformanceContext);return S?y:(b[0]===Symbol.for("react.memo_cache_sentinel")?(i={autoRaf:!1,lerp:.09},o=(0,t.jsx)(M,{}),a=(0,t.jsx)(P,{}),s=(0,t.jsx)(R,{}),d=(0,t.jsx)(N,{}),m=(0,t.jsx)(I,{}),f=(0,t.jsx)(x,{}),p=(0,t.jsx)(g,{}),h=(0,t.jsx)(L,{}),b[0]=i,b[1]=o,b[2]=a,b[3]=s,b[4]=d,b[5]=m,b[6]=f,b[7]=p,b[8]=h):(i=b[0],o=b[1],a=b[2],s=b[3],d=b[4],m=b[5],f=b[6],p=b[7],h=b[8]),b[9]!==y||b[10]!==v?(w=(0,t.jsxs)(c.ReactLenis,{ref:v,options:i,children:[o,a,s,d,m,f,p,h,y]}),b[9]=y,b[10]=v,b[11]=w):w=b[11],w)};G.displayName="SmoothScroll";e.s(["default",0,G],945047)}]);