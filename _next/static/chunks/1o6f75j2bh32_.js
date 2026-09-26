(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,407500,e=>{e.v(t=>Promise.all(["static/chunks/2619pqauczhjr.js"].map(t=>e.l(t))).then(()=>t(975681)))},718917,e=>{e.v(t=>Promise.all(["static/chunks/3pgt5eg5ybvup.js"].map(t=>e.l(t))).then(()=>t(811067)))},32485,e=>{"use strict";var t=e.i(843476),i=e.i(500932),a=e.i(134770),r=e.i(831119),n=e.i(523289),l=e.i(271645),s=e.i(89835),o=e.i(481293),c=e.i(101384),d=e.i(607561),p=e.i(989970),u=e.i(575509),f=e.i(212960),m=e.i(997053);let h=[...Array(12)].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.02*t}s; }`).join("\n"),g=(0,m.default)(u.Div).attrs({as:"nav"}).withConfig({componentId:"sc-1eb77e08-0"})(({$isOpen:e})=>m.css`
        position: fixed;
        inset: 0;
        z-index: 2;
        background: rgba(10, 10, 10, 0.45);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        pointer-events: ${e?"all":"none"};
        opacity: ${+!!e};
        visibility: ${e?"visible":"hidden"};
        transition:
            opacity 0.3s ${(0,u.getEase)("ease")} ${.9*!e}s,
            visibility 0s linear ${1.2*!e}s;

        &:after {
            content: '';
            position: absolute;
            z-index: 0;
            inset: 0;
            background: ${(0,u.getGlobal)("black")};
            opacity: 0.2;
            pointer-events: none;
        }
    `),v=(0,m.default)(u.Div).withConfig({componentId:"sc-1eb77e08-1"})(({$isOpen:e})=>m.css`
        --movement: 1.5em;
        --ease: ${(0,u.getEase)("bezzy2")};

        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: ${(0,u.getGap)("m")};

        width: 100%;
        height: 100%;

        opacity: ${+!!e};
        scale: 	${e?1:2};
        filter: blur(${8*!e}px);
        
        transition:
            opacity ${e?1.2:.25}s var(--ease),
            scale ${.75}s var(--ease),
            filter ${e?1.2:.25}s var(--ease);

        transition-delay: ${.15*!!e}s;
        

        ul[data-name='pages'],
        ul[data-name='legals'] {
            display: flex;
            align-items: center;
            justify-content: center;

            li {
                a {
                    display: inline-block;
                    color: ${(0,u.getBrand)("bc5")};
                    overflow: clip;
                    transition: opacity 0.3s ${(0,u.getEase)("ease")};     

                    span {
                        display: inline-block;
                        text-shadow: ${(0,u.getBrand)("bc5")} 0 calc(var(--movement) * -1) 0;
                        transition: transform 0.5s ${(0,u.getEase)("bezzy2")};

                        ${h}
                    }
                }
            }

            @media (hover: hover) and (pointer: fine) {
                &:hover a {
                    opacity: 0.2;
                }

                & a:hover {
                    opacity: 1;

                    span {
                        transform: translateY(var(--movement));
                    }
                }
            }
        }

        ul[data-name='pages'] {
            flex-direction: column;
            gap: ${(0,u.getGap)("s")};

            li a {
                ${f.displayL}
                text-transform: uppercase;
            }
        }

        ul[data-name='legals'] {
            gap: ${(0,u.getGap)("l")};

            li a {
                ${f.titleS}

                color: ${(0,u.getBrand)("bc5")};
            }
        }

        ul[data-name='socials'] {
            display: flex;
            gap: ${(0,u.getGap)("s")};
            align-items: center;
            justify-content: center;

            ${u.bp.l`  display: none; `}

            li {

                a {
                    display: inline-block;
                    padding: ${(0,u.getGap)("s")};

                    svg {
                        --size: 2.4rem;
                        fill: ${(0,u.getBrand)("bc5")};
                    }
                }
            }
        }

        @media (max-height: 500px) and (orientation: landscape) {
            padding: 7.2rem ${(0,u.getGap)("s")} 6.4rem;
            gap: ${(0,u.getGap)("xs")};

            ul[data-name='pages'] {
                flex-direction: row;
                gap: ${(0,u.getGap)("m")};

                li a {
                    font-size: clamp(3.2rem, 6vw, 6rem);
                }
            }
        }
    `),x=m.default.small.withConfig({componentId:"sc-1eb77e08-2"})(()=>m.css`
        --offset: ${(0,u.getGap)("xl")};

        @media (max-height: 500px) and (orientation: landscape) {
            --offset: ${(0,u.getGap)("s")};
        }

        position: absolute;
        bottom: var(--offset); left: 50%;
        transform: translateX(-50%);

        width: 100%;
		display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: ${(0,u.getGap)("xs")};
		text-align: center;

        p, a {
            ${f.captionS}

            color: ${(0,u.getBrand)("bc5",85)};
            transition: color 0.3s ${(0,u.getEase)("ease")};  

            svg {
                opacity: 1;
                transition: opacity 0.3s ${(0,u.getEase)("ease")};
            }
        }

        @media (hover: hover) and (pointer: fine) {
            a:hover { 
                color: ${(0,u.getBrand)("bc5")};

                svg {
                    opacity: 0.4;
                }
            }
        }

        [data-name='copyright'] {
            position: absolute;
            bottom: 0; left: var(--offset);
        }

        [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] a{
            display: flex;
            flex-direction: column;
            gap: ${(0,u.getGap)("s")};
        }

        [data-name='siteby'] {
            position: absolute;
            bottom: 0; right: var(--offset);
        }
	`),b=m.default.figure.withConfig({componentId:"sc-1eb77e08-3"})(()=>m.css`
		position: absolute;
		inset: -12rem;
		z-index: 1;
        overflow: visible;
        user-select: none;
        pointer-events: none;

        svg { 
            width: 100%;
            height: 100%;
            fill: ${(0,u.getGlobal)("black",20)};
            pointer-events: none;
        }
	`),y=()=>{let e,a,n,s,o,u,f,m=(0,i.c)(11),{menuOpen:h}=(0,l.use)(r.MenuContext),{isReducedMotion:g}=(0,l.use)(c.PerformanceContext),v=(0,l.useRef)(null),x=(0,l.useRef)(null),y=(0,l.useRef)(h),C=(0,l.useRef)(null),$=(0,l.useRef)(null);return m[0]!==h?(e=()=>{y.current=h},a=[h],m[0]=h,m[1]=e,m[2]=a):(e=m[1],a=m[2]),(0,l.useLayoutEffect)(e,a),m[3]!==h?(n=()=>{h||(C.current?.(0),$.current?.(0))},s=[h],m[3]=h,m[4]=n,m[5]=s):(n=m[4],s=m[5]),(0,l.useEffect)(n,s),m[6]!==g?(o=e=>{let{isDesktop:t}=e,i=x.current;if(!t||g||!i)return;let a=p.default.quickTo(i,"x",{duration:.85,ease:"power2.out"}),r=p.default.quickTo(i,"y",{duration:.85,ease:"power2.out"});C.current=a,$.current=r;let n=e=>{if(!y.current)return;let t=e.clientX/window.innerWidth-.5,i=e.clientY/window.innerHeight-.5;a(-(120*t)),r(-(120*i))};return window.addEventListener("mousemove",n,{passive:!0}),()=>{window.removeEventListener("mousemove",n),C.current=null,$.current=null}},m[6]=g,m[7]=o):o=m[7],m[8]!==g?(u={scope:v,dependencies:[g],revertOnUpdate:!0},m[8]=g,m[9]=u):u=m[9],(0,d.useAnimation)(o,u),m[10]===Symbol.for("react.memo_cache_sentinel")?(f=(0,t.jsx)(b,{ref:v,"aria-hidden":"true",children:(0,t.jsx)("svg",{ref:x,viewBox:"0 0 440 796",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M220 720L-40 80H60L220 470L380 80H480L220 720Z"})})}),m[10]=f):f=m[10],f};y.displayName="Background";var C=e.i(319420),$=e.i(522016);let L=e=>{let a,r,n,l=(0,i.c)(12),{label:s,href:o,aria:c,onClick:d,onNavigate:p,prefetch:u}=e;l[0]!==o||l[1]!==d||l[2]!==p?(a=e=>{d?.(),!p||(0,C.isModifiedClick)(e)||e.defaultPrevented||(e.preventDefault(),p(o))},l[0]=o,l[1]=d,l[2]=p,l[3]=a):a=l[3];let f=a;if(l[4]!==s)r=s.split("").map((e,i)=>(0,t.jsx)("span",{children:e},`${s}-${e}-${i.toString()}`)),l[4]=s,l[5]=r;else r=l[5];return l[6]!==c||l[7]!==f||l[8]!==o||l[9]!==u||l[10]!==r?(n=(0,t.jsx)($.default,{href:o,"aria-label":c,prefetch:u,onClick:f,children:r}),l[6]=c,l[7]=f,l[8]=o,l[9]=u,l[10]=r,l[11]=n):n=l[11],n};L.displayName="MenuItem";let H=()=>{let e=new Date().getFullYear();return`Copyright \xa9 ${e} Vanguard`};H.displayName="Copyright";let j=()=>{let e,a,r,n=(0,i.c)(3);return n[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("p",{"data-name":"copyright",children:(0,t.jsx)(H,{})}),n[0]=e):e=n[0],n[1]===Symbol.for("react.memo_cache_sentinel")?(a=null,n[1]=a):a=n[1],n[2]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsxs)(x,{children:[e,(0,t.jsx)("p",{"data-name":"siteby",children:(0,t.jsx)("a",{href:"https://gurdharam.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Navigate to Gurdharam",style:{color:"#C5A064",fontWeight:"700",letterSpacing:"0.08em",fontSize:"1.05rem"},children:"Made by Gurdharam"})})]}),n[2]=r):r=n[2],r};j.displayName="TinyText";let w={position:"fixed",bottom:0,left:0,width:1,height:1,overflow:"hidden",opacity:0,pointerEvents:"none",contain:"strict"},k=e=>{let n,c,d,p,u,f,m,h,x,b,C,$,H,k,M,z,_,E,N,Z,B,G=(0,i.c)(46),{socials:I,legals:P,heroImages:A}=e,{lenisRef:R}=(0,l.use)(a.AppContext),{menuOpen:q,setMenuReady:T,navigateFromMenu:W}=(0,l.use)(r.MenuContext),[O,D]=(0,l.useState)(!1),[F,U]=(0,l.useState)(!1),Y=(0,l.useRef)(null),K=(0,l.useRef)(null);G[0]!==R||G[1]!==q?(n=()=>{let e=R.current?.lenis;if(e&&q)return e.stop(),()=>e.start()},c=[R,q],G[0]=R,G[1]=q,G[2]=n,G[3]=c):(n=G[2],c=G[3]),(0,l.useEffect)(n,c),G[4]!==T?(d=()=>(T(!0),()=>T(!1)),p=[T],G[4]=T,G[5]=d,G[6]=p):(d=G[5],p=G[6]),(0,l.useLayoutEffect)(d,p),G[7]!==q?(u=()=>{if(!q)return void D(!1);D(!1);let e=requestAnimationFrame(()=>D(!0));return()=>cancelAnimationFrame(e)},f=[q],G[7]=q,G[8]=u,G[9]=f):(u=G[8],f=G[9]),(0,l.useLayoutEffect)(u,f),G[10]!==O?(m=()=>{let e=Y.current;if(e){if(O)return void e.removeAttribute("inert");e.setAttribute("inert","")}},h=[O],G[10]=O,G[11]=m,G[12]=h):(m=G[11],h=G[12]),(0,l.useEffect)(m,h),G[13]!==F||G[14]!==q?(b=()=>{let e=K.current;if(!e||!q||F)return;let t=t=>{t.target===e&&"opacity"===t.propertyName&&U(!0)};return e.addEventListener("transitionend",t),()=>e.removeEventListener("transitionend",t)},x=[q,F],G[13]=F,G[14]=q,G[15]=x,G[16]=b):(x=G[15],b=G[16]),(0,l.useEffect)(b,x),G[17]===Symbol.for("react.memo_cache_sentinel")?(C=[{label:"Builds",href:"/builds",aria:"Navigate to Builds"},{label:"Stock",href:"/stock",aria:"Navigate to Stock"},{label:"Contact",href:"/contact",aria:"Navigate to Contact"}],G[17]=C):C=G[17];let X=C;if(G[18]===Symbol.for("react.memo_cache_sentinel")?($=(0,t.jsx)(y,{}),G[18]=$):$=G[18],G[19]!==F||G[20]!==A?(H=F&&A?(0,t.jsx)("div",{style:w,"aria-hidden":"true",children:[A.builds,A.stock,A.contact].map((e,i)=>{let a=(0,o.resolveImageWithAlt)(e?.desktop),r=(0,o.resolveImageWithAlt)(e?.mobile);return a&&r?(0,t.jsx)(s.default,{desktop:a,mobile:r,fill:!0,sizes:"100vw",loading:"eager"},X[i]?.href??i):null})}):null,G[19]=F,G[20]=A,G[21]=H):H=G[21],G[22]!==F||G[23]!==W?(k=(0,t.jsx)("ul",{"data-name":"pages",children:X.map(e=>{let{label:i,href:a,aria:r}=e;return(0,t.jsx)("li",{children:(0,t.jsx)(L,{label:i,href:a,aria:r,prefetch:F,onNavigate:W})},i)})}),G[22]=F,G[23]=W,G[24]=k):k=G[24],G[25]!==P||G[26]!==W){let e;G[28]!==W?(e=e=>{let{_id:i,title:a,slug:r}=e;if(!r||!a)return null;let n=r.startsWith("/")?r:`/${r}`;return(0,t.jsx)("li",{children:(0,t.jsx)(L,{label:a,href:n,aria:a,onNavigate:W})},i)},G[28]=W,G[29]=e):e=G[29],M=P.map(e),G[25]=P,G[26]=W,G[27]=M}else M=G[27];return G[30]!==M?(z=(0,t.jsx)("ul",{"data-name":"legals",children:M}),G[30]=M,G[31]=z):z=G[31],G[32]!==I?(_=I.map(S),G[32]=I,G[33]=_):_=G[33],G[34]!==_?(E=(0,t.jsx)("ul",{"data-name":"socials",children:_}),G[34]=_,G[35]=E):E=G[35],G[36]===Symbol.for("react.memo_cache_sentinel")?(N=(0,t.jsx)(j,{}),G[36]=N):N=G[36],G[37]!==O||G[38]!==k||G[39]!==z||G[40]!==E?(Z=(0,t.jsxs)(v,{ref:K,$isOpen:O,children:[k,z,E,N]}),G[37]=O,G[38]=k,G[39]=z,G[40]=E,G[41]=Z):Z=G[41],G[42]!==O||G[43]!==H||G[44]!==Z?(B=(0,t.jsxs)(g,{ref:Y,$isOpen:O,children:[$,H,Z]}),G[42]=O,G[43]=H,G[44]=Z,G[45]=B):B=G[45],B};function S(e){let{type:i,url:a}=e;return(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":i,children:(0,t.jsx)(n.default,{type:i})})},i)}k.displayName="Menu",e.s(["default",0,k],32485)},89835,e=>{"use strict";var t=e.i(843476),i=e.i(500932),a=e.i(481293),r=e.i(180301),n=e.i(657688),l=e.i(402463),s=e.i(328852),o=e.i(271645),c=e.i(174080);let d=Number.parseInt(r.grid.breakpoints.l??"1024",10),p=(0,o.forwardRef)((e,r)=>{let o,p,u,f,m,h,g,v,x,b,y,C,$,L,H,j,w,k,S,M,z,_,E,N,Z=(0,i.c)(56);Z[0]!==e?({desktop:u,mobile:h,fill:f,width:L,height:m,sizes:b,quality:x,preload:v,loading:y,desktopMinWidth:C,desktopInLandscape:$,className:o,crossOrigin:p,...g}=e,Z[0]=e,Z[1]=o,Z[2]=p,Z[3]=u,Z[4]=f,Z[5]=m,Z[6]=h,Z[7]=g,Z[8]=v,Z[9]=x,Z[10]=b,Z[11]=y,Z[12]=C,Z[13]=$,Z[14]=L):(o=Z[1],p=Z[2],u=Z[3],f=Z[4],m=Z[5],h=Z[6],g=Z[7],v=Z[8],x=Z[9],b=Z[10],y=Z[11],C=Z[12],$=Z[13],L=Z[14]);let B=void 0===y?"lazy":y,G=void 0===C?d:C,I=void 0!==$&&$;if(Z[15]!==o||Z[16]!==p||Z[17]!==u||Z[18]!==I||Z[19]!==G||Z[20]!==f||Z[21]!==m||Z[22]!==B||Z[23]!==h||Z[24]!==g||Z[25]!==v||Z[26]!==x||Z[27]!==r||Z[28]!==b||Z[29]!==L){z=Symbol.for("react.early_return_sentinel");e:{if(S=(0,a.resolveImageWithAlt)(u),M=(0,a.resolveImageWithAlt)(h),!S||!M){z=null;break e}k=f?{fill:!0}:{width:L??1200,height:m??675};let e={sizes:b,quality:x,preload:v,loader:l.imageLoader,...k};if(S.src===M.src){z=(0,t.jsx)("picture",{ref:r,className:o,...g,children:(0,t.jsx)(s.default,{image:S,sizes:b,quality:x,preload:v,loading:B,crossOrigin:p,...k})});break e}H=`(min-width: ${G}px)${I?", (orientation: landscape)":""}`;let i=`(max-width: ${G-1}px)${I?" and (orientation: portrait)":""}`,{props:d}=(0,n.getImageProps)({...e,src:S.src,alt:S.alt});if({srcSet:w,sizes:j}=d,v){let{props:t}=(0,n.getImageProps)({...e,src:M.src,alt:M.alt}),{srcSet:a,sizes:r}=t;(0,c.preload)(S.src,{as:"image",fetchPriority:"high",imageSrcSet:w,imageSizes:j,media:H}),(0,c.preload)(M.src,{as:"image",fetchPriority:"high",imageSrcSet:a,imageSizes:r,media:i})}}Z[15]=o,Z[16]=p,Z[17]=u,Z[18]=I,Z[19]=G,Z[20]=f,Z[21]=m,Z[22]=B,Z[23]=h,Z[24]=g,Z[25]=v,Z[26]=x,Z[27]=r,Z[28]=b,Z[29]=L,Z[30]=H,Z[31]=j,Z[32]=w,Z[33]=k,Z[34]=S,Z[35]=M,Z[36]=z}else H=Z[30],j=Z[31],w=Z[32],k=Z[33],S=Z[34],M=Z[35],z=Z[36];if(z!==Symbol.for("react.early_return_sentinel"))return z;Z[37]!==H||Z[38]!==j||Z[39]!==w?(_=(0,t.jsx)("source",{media:H,srcSet:w,sizes:j}),Z[37]=H,Z[38]=j,Z[39]=w,Z[40]=_):_=Z[40];let P=v||"eager"===B?"eager":"lazy",A=v?"high":void 0;return Z[41]!==p||Z[42]!==k||Z[43]!==x||Z[44]!==S.lqip||Z[45]!==M||Z[46]!==b||Z[47]!==P||Z[48]!==A?(E=(0,t.jsx)(s.default,{image:M,desktopPlaceholder:S.lqip,sizes:b,quality:x,loading:P,fetchPriority:A,crossOrigin:p,...k}),Z[41]=p,Z[42]=k,Z[43]=x,Z[44]=S.lqip,Z[45]=M,Z[46]=b,Z[47]=P,Z[48]=A,Z[49]=E):E=Z[49],Z[50]!==o||Z[51]!==g||Z[52]!==r||Z[53]!==_||Z[54]!==E?(N=(0,t.jsxs)("picture",{ref:r,className:o,...g,children:[_,E]}),Z[50]=o,Z[51]=g,Z[52]=r,Z[53]=_,Z[54]=E,Z[55]=N):N=Z[55],N});p.displayName="ResponsiveImage",e.s(["default",0,p])}]);