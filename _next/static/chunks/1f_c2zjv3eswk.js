(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,640330,e=>{"use strict";var t=e.i(843476),i=e.i(500932),n=e.i(101384),o=e.i(523289),a=e.i(149624),r=e.i(255667),s=e.i(271645),c=e.i(174080),l=e.i(918645),d=e.i(575509),u=e.i(212960),f=e.i(997053);let b=f.keyframes`
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
`,p=f.default.div.withConfig({componentId:"sc-1575b8b8-0"})(({$isReady:e})=>f.css`
        position: fixed;
        inset: 0;
        z-index: 1001;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100dvh;

        opacity: ${+!!e};
        visibility: ${e?"visible":"hidden"};
        pointer-events: ${e?"auto":"none"};
        transition:
            opacity 0.45s ${(0,d.getEase)("bezzy2")},
            visibility 0.45s ${(0,d.getEase)("bezzy2")};
    `),g=f.default.button.withConfig({componentId:"sc-1575b8b8-1"})(()=>f.css`
        position: absolute;
        inset: 0;
        z-index: 0;

        width: 100%;
        height: 100%;
        padding: 0;

        background: ${(0,d.getGlobal)("black",95)};
        border: 0;
        cursor: pointer;
    `),m=f.default.div.withConfig({componentId:"sc-1575b8b8-2"})(({$isReady:e})=>f.css`
        --offset: ${(0,d.getGap)("m")};

        position: absolute;
        inset: 0 0 auto 0;
        z-index: 2;

        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: ${(0,d.getGap)("m")};

        transform: translateY(${e?0:"-0.8rem"});
        transition: transform 0.45s ${(0,d.getEase)("bezzy2")} 0.08s;

        ${d.bp.l`
            --offset: ${(0,d.getGap)("l")};
        `}
    `),y=f.default.p.withConfig({componentId:"sc-1575b8b8-3"})(()=>f.css`
        padding: var(--offset);

        margin: 0;

        ${u.captionL}
            color: ${(0,d.getBrand)("bc5")};

        span {
            
        }
    `),h=f.default.button.withConfig({componentId:"sc-1575b8b8-4"})(()=>f.css`
        --size: 2.4rem;

        position: relative;
        padding: var(--offset);

        background: transparent;
        border: 0;
        cursor: pointer;

        svg {
            stroke: ${(0,d.getBrand)("bc5")};
        }
    `),v=f.default.div.withConfig({componentId:"sc-1575b8b8-5"})(()=>f.css`	
        --width: calc(100vw - ${(0,d.getGap)("xl")});

        position: relative;
        z-index: 1;
        flex: 0 0 auto;
        overflow: hidden;

        width: min(var(--width), calc((100dvh - ${(0,d.getGap)("huge")}) * 16 / 9));
        height: min(calc(100dvh - ${(0,d.getGap)("huge")}), calc(var(--width) * 9 / 16));

        background: ${(0,d.getBrand)("bc2")};

        ${d.bp.l`
            --width: 66.666vw;
        `}
    `),$=f.default.div.withConfig({componentId:"sc-1575b8b8-6"})(({$isReady:e,$isReducedMotion:t})=>f.css`
        position: absolute;
        inset: 0;
        z-index: 2;

        background-color: ${(0,d.getBrand)("bc2")};
        background-image: linear-gradient(
            90deg,
            rgba(242, 241, 237, 0) 0%,
            rgba(242, 241, 237, 0.08) 50%,
            rgba(242, 241, 237, 0) 100%
        );
        background-size: 200% 100%;
        background-repeat: no-repeat;
        animation: ${t?"none":f.css`${b} 1.6s ${(0,d.getEase)("ease")} infinite`};

        opacity: ${+!e};
        visibility: ${e?"hidden":"visible"};
        pointer-events: none;
        transition:
            opacity 0.5s ${(0,d.getEase)("bezzy2")},
            visibility 0.5s ${(0,d.getEase)("bezzy2")};
    `),w=e=>f.css`
	position: absolute;
	inset: 0;
	z-index: 1;

	display: block;
	width: 100%;
	height: 100%;
	border: 0;
	background: ${(0,d.getBrand)("bc2")};

	opacity: ${+!!e};
	transition: opacity 0.5s ${(0,d.getEase)("bezzy2")};
`,x=f.default.iframe.withConfig({componentId:"sc-1575b8b8-7"})(({$isReady:e})=>f.css`
		${w(e)}
	`),E=f.default.video.withConfig({componentId:"sc-1575b8b8-8"})(({$isReady:e})=>f.css`
		${w(e)}
		object-fit: cover;
	`),k=e=>{let d,u,f,b,w,k,z,C,j,R,A,I,S,T,B,L,_,F,G,P,K,q,D,U,M=(0,i.c)(55),{videoUrl:O,title:V,onClose:N}=e,Y=(0,r.useLenis)(),{isReducedMotion:H}=(0,s.use)(n.PerformanceContext),J=(0,s.useRef)(null),Q=(0,s.useRef)(null),W=(0,s.useRef)(null),X=(0,s.useRef)(null),[Z,ee]=(0,s.useState)(H),[et,ei]=(0,s.useState)(!1),[en,eo]=(0,s.useState)(!1);M[0]!==O?(d=(0,a.getAutoplayVideoEmbedUrl)(O),M[0]=O,M[1]=d):d=M[1];let ea=d,er=ea?void 0:O;M[2]!==ea||M[3]!==er||M[4]!==H?(u=()=>{if(!ea&&!er)return;if(eo(!1),H)return void ee(!0);let e=0,t=requestAnimationFrame(()=>{e=requestAnimationFrame(()=>{ee(!0)})});return()=>{cancelAnimationFrame(t),cancelAnimationFrame(e)}},f=[ea,er,H],M[2]=ea,M[3]=er,M[4]=H,M[5]=u,M[6]=f):(u=M[5],f=M[6]),(0,s.useEffect)(u,f),M[7]!==Y?(b=()=>{if(Y)return Y.stop(),()=>{Y.start()}},w=[Y],M[7]=Y,M[8]=b,M[9]=w):(b=M[8],w=M[9]),(0,s.useEffect)(b,w),M[10]===Symbol.for("react.memo_cache_sentinel")?(k=()=>{W.current=document.activeElement},z=[],M[10]=k,M[11]=z):(k=M[10],z=M[11]),(0,s.useEffect)(k,z),(0,l.useFocusTrap)(Q,Z&&!et),M[12]!==et||M[13]!==Z?(C=()=>{Z&&!et&&J.current?.focus()},j=[Z,et],M[12]=et,M[13]=Z,M[14]=C,M[15]=j):(C=M[14],j=M[15]),(0,s.useEffect)(C,j),M[16]===Symbol.for("react.memo_cache_sentinel")?(R=()=>()=>{X.current&&window.clearTimeout(X.current)},A=[],M[16]=R,M[17]=A):(R=M[16],A=M[17]),(0,s.useEffect)(R,A),M[18]!==et||M[19]!==H||M[20]!==N?(I=()=>{et||(ei(!0),ee(!1),X.current=window.setTimeout(N,450*!H))},M[18]=et,M[19]=H,M[20]=N,M[21]=I):I=M[21];let es=I;M[22]===Symbol.for("react.memo_cache_sentinel")?(S=()=>{eo(!0)},M[22]=S):S=M[22];let ec=S;if(M[23]!==es?(T=()=>{let e=e=>{"Escape"===e.key&&es()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},B=[es],M[23]=es,M[24]=T,M[25]=B):(T=M[24],B=M[25]),(0,s.useEffect)(T,B),!ea&&!er)return null;let el=`${V} video`;return M[26]!==es?(L=(0,t.jsx)(g,{type:"button","aria-label":"Close video",onClick:es}),M[26]=es,M[27]=L):L=M[27],M[28]!==V?(_=(0,t.jsx)(y,{children:V}),M[28]=V,M[29]=_):_=M[29],M[30]===Symbol.for("react.memo_cache_sentinel")?(F=(0,t.jsx)(o.default,{type:"close"}),M[30]=F):F=M[30],M[31]!==es?(G=(0,t.jsx)(h,{ref:J,type:"button","aria-label":"Close video",onClick:es,children:F}),M[31]=es,M[32]=G):G=M[32],M[33]!==Z||M[34]!==_||M[35]!==G?(P=(0,t.jsxs)(m,{$isReady:Z,children:[_,G]}),M[33]=Z,M[34]=_,M[35]=G,M[36]=P):P=M[36],M[37]!==H||M[38]!==en?(K=(0,t.jsx)($,{$isReady:en,$isReducedMotion:H,"aria-hidden":"true"}),M[37]=H,M[38]=en,M[39]=K):K=M[39],M[40]!==ea||M[41]!==er||M[42]!==en||M[43]!==V?(q=ea?(0,t.jsx)(x,{src:ea,title:`${V} video player`,allow:"autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,referrerPolicy:"strict-origin-when-cross-origin",onLoad:ec,$isReady:en}):(0,t.jsx)(E,{src:er,title:`${V} video player`,autoPlay:!0,muted:!0,playsInline:!0,controls:!0,onLoadedData:ec,$isReady:en}),M[40]=ea,M[41]=er,M[42]=en,M[43]=V,M[44]=q):q=M[44],M[45]!==K||M[46]!==q?(D=(0,t.jsxs)(v,{children:[K,q]}),M[45]=K,M[46]=q,M[47]=D):D=M[47],M[48]!==et||M[49]!==Z||M[50]!==el||M[51]!==L||M[52]!==P||M[53]!==D?(U=(0,c.createPortal)((0,t.jsxs)(p,{ref:Q,role:"dialog","aria-modal":"true","aria-label":el,"aria-hidden":et,$isReady:Z,children:[L,P,D]}),document.body),M[48]=et,M[49]=Z,M[50]=el,M[51]=L,M[52]=P,M[53]=D,M[54]=U):U=M[54],U};k.displayName="BuildVideoModal",e.s(["default",0,k],640330)},413912,function(e){e.n(e.i(640330))},918645,e=>{"use strict";var t=e.i(500932),i=e.i(271645);function n(e){return!e.hasAttribute("disabled")&&null!==e.offsetParent}e.s(["useFocusTrap",0,(e,o)=>{let a,r,s=(0,t.c)(4);s[0]!==e||s[1]!==o?(a=()=>{if(!o||!e.current)return;let t=e.current,i=document.activeElement,a=e=>{if("Tab"!==e.key)return;let i=Array.from(t.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')).filter(n);if(!i.length)return;let o=i[0],a=i[i.length-1];if(e.shiftKey&&document.activeElement===o){e.preventDefault(),a.focus();return}e.shiftKey||document.activeElement!==a||(e.preventDefault(),o.focus())};return t.addEventListener("keydown",a),()=>{t.removeEventListener("keydown",a),i?.focus()}},r=[e,o],s[0]=e,s[1]=o,s[2]=a,s[3]=r):(a=s[2],r=s[3]),(0,i.useEffect)(a,r)}])}]);