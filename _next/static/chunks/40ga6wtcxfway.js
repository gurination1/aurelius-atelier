(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,407500,e=>{e.v(t=>Promise.all(["static/chunks/2619pqauczhjr.js"].map(t=>e.l(t))).then(()=>t(975681)))},718917,e=>{e.v(t=>Promise.all(["static/chunks/3pgt5eg5ybvup.js"].map(t=>e.l(t))).then(()=>t(811067)))},32485,e=>{"use strict";var t=e.i(843476),i=e.i(500932),a=e.i(134770),n=e.i(831119),r=e.i(523289),l=e.i(271645),s=e.i(89835),o=e.i(481293),c=e.i(101384),d=e.i(607561),u=e.i(989970),p=e.i(575509),f=e.i(212960),m=e.i(997053);let h=[...Array(12)].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.02*t}s; }`).join("\n"),g=(0,m.default)(p.Div).attrs({as:"nav"}).withConfig({componentId:"sc-1eb77e08-0"})(({$isOpen:e})=>m.css`
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
            opacity 0.3s ${(0,p.getEase)("ease")} ${.9*!e}s,
            visibility 0s linear ${1.2*!e}s;

        &:after {
            content: '';
            position: absolute;
            z-index: 0;
            inset: 0;
            background: ${(0,p.getGlobal)("black")};
            opacity: 0.2;
            pointer-events: none;
        }
    `),v=(0,m.default)(p.Div).withConfig({componentId:"sc-1eb77e08-1"})(({$isOpen:e})=>m.css`
        --movement: 1.5em;
        --ease: ${(0,p.getEase)("bezzy2")};

        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: ${(0,p.getGap)("m")};

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
                    color: ${(0,p.getBrand)("bc5")};
                    overflow: clip;
                    transition: opacity 0.3s ${(0,p.getEase)("ease")};     

                    span {
                        display: inline-block;
                        text-shadow: ${(0,p.getBrand)("bc5")} 0 calc(var(--movement) * -1) 0;
                        transition: transform 0.5s ${(0,p.getEase)("bezzy2")};

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
            gap: ${(0,p.getGap)("s")};

            li a {
                ${f.displayL}
                text-transform: uppercase;
            }
        }

        ul[data-name='legals'] {
            gap: ${(0,p.getGap)("l")};

            li a {
                ${f.titleS}

                color: ${(0,p.getBrand)("bc5")};
            }
        }

        ul[data-name='socials'] {
            display: flex;
            gap: ${(0,p.getGap)("s")};
            align-items: center;
            justify-content: center;

            ${p.bp.l`  display: none; `}

            li {

                a {
                    display: inline-block;
                    padding: ${(0,p.getGap)("s")};

                    svg {
                        --size: 2.4rem;
                        fill: ${(0,p.getBrand)("bc5")};
                    }
                }
            }
        }

        @media (max-height: 500px) and (orientation: landscape) {
            padding: 7.2rem ${(0,p.getGap)("s")} 6.4rem;
            gap: ${(0,p.getGap)("xs")};

            ul[data-name='pages'] {
                flex-direction: row;
                gap: ${(0,p.getGap)("m")};

                li a {
                    font-size: clamp(3.2rem, 6vw, 6rem);
                }
            }
        }
    `),y=m.default.small.withConfig({componentId:"sc-1eb77e08-2"})(()=>m.css`
        --offset: ${(0,p.getGap)("xl")};

        @media (max-height: 500px) and (orientation: landscape) {
            --offset: ${(0,p.getGap)("s")};
        }

        position: absolute;
        bottom: var(--offset); left: 50%;
        transform: translateX(-50%);

        width: 100%;
		display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: ${(0,p.getGap)("xs")};
		text-align: center;

        p, a {
            ${f.captionS}

            color: ${(0,p.getBrand)("bc5",55)};
            transition: color 0.3s ${(0,p.getEase)("ease")};  

            svg {
                opacity: 1;
                transition: opacity 0.3s ${(0,p.getEase)("ease")};
            }
        }

        @media (hover: hover) and (pointer: fine) {
            a:hover { 
                color: ${(0,p.getBrand)("bc5")};

                svg {
                    opacity: 0.4;
                }
            }
        }

        [data-name='copyright'] {
            position: absolute;
            bottom: 0; left: var(--offset);
        }

        [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] { position: absolute; bottom: 0; right: var(--offset); text-align: right; margin: 0; } [data-name='powered'] a{
            display: flex;
            flex-direction: column;
            gap: ${(0,p.getGap)("s")};
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
            fill: ${(0,p.getGlobal)("black",20)};
            pointer-events: none;
        }
	`),x=()=>{let e,a,r,s,o,p,f,m=(0,i.c)(11),{menuOpen:h}=(0,l.use)(n.MenuContext),{isReducedMotion:g}=(0,l.use)(c.PerformanceContext),v=(0,l.useRef)(null),y=(0,l.useRef)(null),x=(0,l.useRef)(h),C=(0,l.useRef)(null),L=(0,l.useRef)(null);return m[0]!==h?(e=()=>{x.current=h},a=[h],m[0]=h,m[1]=e,m[2]=a):(e=m[1],a=m[2]),(0,l.useLayoutEffect)(e,a),m[3]!==h?(r=()=>{h||(C.current?.(0),L.current?.(0))},s=[h],m[3]=h,m[4]=r,m[5]=s):(r=m[4],s=m[5]),(0,l.useEffect)(r,s),m[6]!==g?(o=e=>{let{isDesktop:t}=e,i=y.current;if(!t||g||!i)return;let a=u.default.quickTo(i,"x",{duration:.85,ease:"power2.out"}),n=u.default.quickTo(i,"y",{duration:.85,ease:"power2.out"});C.current=a,L.current=n;let r=e=>{if(!x.current)return;let t=e.clientX/window.innerWidth-.5,i=e.clientY/window.innerHeight-.5;a(-(120*t)),n(-(120*i))};return window.addEventListener("mousemove",r,{passive:!0}),()=>{window.removeEventListener("mousemove",r),C.current=null,L.current=null}},m[6]=g,m[7]=o):o=m[7],m[8]!==g?(p={scope:v,dependencies:[g],revertOnUpdate:!0},m[8]=g,m[9]=p):p=m[9],(0,d.useAnimation)(o,p),m[10]===Symbol.for("react.memo_cache_sentinel")?(f=(0,t.jsx)(b,{ref:v,"aria-hidden":"true",children:(0,t.jsx)("svg",{ref:y,viewBox:"0 0 440 796",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M744.064 796H1091.95C1093.83 796 1094.85 793.785 1093.49 792.421L357.651 56.7476C321.174 20.2792 271.914 0 220.438 0H-47.8527C-49.7276 0 -50.7503 2.21537 -49.3867 3.57868L208.847 261.755C210.211 263.118 209.188 265.333 207.313 265.333H-46.8299C-98.3062 265.333 -147.737 285.783 -184.043 322.081L-654.318 792.421C-655.682 793.785 -654.659 796 -652.784 796H-304.893C-304.893 796 -303.87 795.83 -303.359 795.318L-131.544 623.542C-131.544 623.542 -129.328 622.69 -128.476 623.542L43.3388 795.318C43.3388 795.318 44.191 796 44.8729 796H392.764C394.639 796 395.661 793.785 394.298 792.421L48.6227 446.823C48.6227 446.823 47.7705 444.608 48.6227 443.756L218.563 273.854C218.563 273.854 220.779 273.002 221.631 273.854L743.211 795.318C743.211 795.318 744.064 796 744.746 796H744.064Z"})})}),m[10]=f):f=m[10],f};x.displayName="Background";var C=e.i(319420),L=e.i(522016);let $=e=>{let a,n,r,l=(0,i.c)(12),{label:s,href:o,aria:c,onClick:d,onNavigate:u,prefetch:p}=e;l[0]!==o||l[1]!==d||l[2]!==u?(a=e=>{d?.(),!u||(0,C.isModifiedClick)(e)||e.defaultPrevented||(e.preventDefault(),u(o))},l[0]=o,l[1]=d,l[2]=u,l[3]=a):a=l[3];let f=a;if(l[4]!==s)n=s.split("").map((e,i)=>(0,t.jsx)("span",{children:e},`${s}-${e}-${i.toString()}`)),l[4]=s,l[5]=n;else n=l[5];return l[6]!==c||l[7]!==f||l[8]!==o||l[9]!==p||l[10]!==n?(r=(0,t.jsx)(L.default,{href:o,"aria-label":c,prefetch:p,onClick:f,children:n}),l[6]=c,l[7]=f,l[8]=o,l[9]=p,l[10]=n,l[11]=r):r=l[11],r};$.displayName="MenuItem";var H=e.i(704634);let w=()=>{let e=new Date().getFullYear();return`Copyright \xa9 ${e}`};w.displayName="Copyright";let j=()=>{let e,a,n,r=(0,i.c)(3);return r[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("p",{"data-name":"copyright",children:(0,t.jsx)(w,{})}),r[0]=e):e=r[0],r[1]===Symbol.for("react.memo_cache_sentinel")?(a=(0,t.jsx)("p",{"data-name":"powered",children:(0,t.jsx)("a",{href:"https://github.com/gurination1",target:"_blank",rel:"noopener noreferrer","aria-label":"Made by Gurdharam",children:"Made by Gurdharam"})}),r[1]=a):a=r[1],r[2]===Symbol.for("react.memo_cache_sentinel")?(n=(0,t.jsxs)(y,{children:[e,a]}),r[2]=n):n=r[2],n};j.displayName="TinyText";let k={position:"fixed",bottom:0,left:0,width:1,height:1,overflow:"hidden",opacity:0,pointerEvents:"none",contain:"strict"},S=e=>{let r,c,d,u,p,f,m,h,y,b,C,L,w,S,E,_,z,N,Z,I,B,G,P,A,R,q=(0,i.c)(53),{socials:T,legals:W,heroImages:D}=e,{lenisRef:O}=(0,l.use)(a.AppContext),{menuOpen:U,setMenuOpen:F,setMenuReady:Y,navigateFromMenu:K}=(0,l.use)(n.MenuContext),[X,J]=(0,l.useState)(!1),[Q,V]=(0,l.useState)(!1),ee=(0,l.useRef)(null),et=(0,l.useRef)(null);q[0]!==O||q[1]!==U?(r=()=>{let e=O.current?.lenis;if(e&&U)return e.stop(),()=>e.start()},c=[O,U],q[0]=O,q[1]=U,q[2]=r,q[3]=c):(r=q[2],c=q[3]),(0,l.useEffect)(r,c),q[4]!==U||q[5]!==F?(d=()=>{if(!U)return;let e=e=>{"Escape"===e.key&&F(!1)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},u=[U,F],q[4]=U,q[5]=F,q[6]=d,q[7]=u):(d=q[6],u=q[7]),(0,l.useEffect)(d,u),q[8]!==U?(p=()=>{let e=ee.current;!U&&e?.contains(document.activeElement)&&document.querySelector(`[aria-controls="${H.MENU_ID}"]`)?.focus({preventScroll:!0})},f=[U],q[8]=U,q[9]=p,q[10]=f):(p=q[9],f=q[10]),(0,l.useLayoutEffect)(p,f),q[11]!==Y?(m=()=>(Y(!0),()=>Y(!1)),h=[Y],q[11]=Y,q[12]=m,q[13]=h):(m=q[12],h=q[13]),(0,l.useLayoutEffect)(m,h),q[14]!==U?(b=()=>{if(!U)return void J(!1);J(!1);let e=requestAnimationFrame(()=>J(!0));return()=>cancelAnimationFrame(e)},y=[U],q[14]=U,q[15]=y,q[16]=b):(y=q[15],b=q[16]),(0,l.useLayoutEffect)(b,y),q[17]!==X?(C=()=>{let e=ee.current;if(e){if(X)return void e.removeAttribute("inert");e.setAttribute("inert","")}},L=[X],q[17]=X,q[18]=C,q[19]=L):(C=q[18],L=q[19]),(0,l.useEffect)(C,L),q[20]!==Q||q[21]!==U?(w=()=>{let e=et.current;if(!e||!U||Q)return;let t=t=>{t.target===e&&"opacity"===t.propertyName&&V(!0)};return e.addEventListener("transitionend",t),()=>e.removeEventListener("transitionend",t)},S=[U,Q],q[20]=Q,q[21]=U,q[22]=w,q[23]=S):(w=q[22],S=q[23]),(0,l.useEffect)(w,S),q[24]===Symbol.for("react.memo_cache_sentinel")?(E=[{label:"Builds",href:"/builds",aria:"Navigate to Builds"},{label:"Stock",href:"/stock",aria:"Navigate to Stock"},{label:"Contact",href:"/contact",aria:"Navigate to Contact"}],q[24]=E):E=q[24];let ei=E;if(q[25]===Symbol.for("react.memo_cache_sentinel")?(_=(0,t.jsx)(x,{}),q[25]=_):_=q[25],q[26]!==Q||q[27]!==D?(z=Q&&D?(0,t.jsx)("div",{style:k,"aria-hidden":"true",children:[D.builds,D.stock,D.contact].map((e,i)=>{let a=(0,o.resolveImageWithAlt)(e?.desktop),n=(0,o.resolveImageWithAlt)(e?.mobile);return a&&n?(0,t.jsx)(s.default,{desktop:a,mobile:n,fill:!0,sizes:"100vw",loading:"eager"},ei[i]?.href??i):null})}):null,q[26]=Q,q[27]=D,q[28]=z):z=q[28],q[29]!==Q||q[30]!==K?(N=(0,t.jsx)("ul",{"data-name":"pages",children:ei.map(e=>{let{label:i,href:a,aria:n}=e;return(0,t.jsx)("li",{children:(0,t.jsx)($,{label:i,href:a,aria:n,prefetch:Q,onNavigate:K})},i)})}),q[29]=Q,q[30]=K,q[31]=N):N=q[31],q[32]!==W||q[33]!==K){let e;q[35]!==K?(e=e=>{let{_id:i,title:a,slug:n}=e;if(!n||!a)return null;let r=n.startsWith("/")?n:`/${n}`;return(0,t.jsx)("li",{children:(0,t.jsx)($,{label:a,href:r,aria:a,onNavigate:K})},i)},q[35]=K,q[36]=e):e=q[36],Z=W.map(e),q[32]=W,q[33]=K,q[34]=Z}else Z=q[34];return q[37]!==Z?(I=(0,t.jsx)("ul",{"data-name":"legals",children:Z}),q[37]=Z,q[38]=I):I=q[38],q[39]!==T?(B=T.map(M),q[39]=T,q[40]=B):B=q[40],q[41]!==B?(G=(0,t.jsx)("ul",{"data-name":"socials",children:B}),q[41]=B,q[42]=G):G=q[42],q[43]===Symbol.for("react.memo_cache_sentinel")?(P=(0,t.jsx)(j,{}),q[43]=P):P=q[43],q[44]!==X||q[45]!==N||q[46]!==I||q[47]!==G?(A=(0,t.jsxs)(v,{ref:et,$isOpen:X,children:[N,I,G,P]}),q[44]=X,q[45]=N,q[46]=I,q[47]=G,q[48]=A):A=q[48],q[49]!==X||q[50]!==z||q[51]!==A?(R=(0,t.jsxs)(g,{ref:ee,id:H.MENU_ID,"aria-label":"Menu",$isOpen:X,children:[_,z,A]}),q[49]=X,q[50]=z,q[51]=A,q[52]=R):R=q[52],R};function M(e){let{type:i,url:a}=e;return(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":i,children:(0,t.jsx)(r.default,{type:i})})},i)}S.displayName="Menu",e.s(["default",0,S],32485)},89835,e=>{"use strict";var t=e.i(843476),i=e.i(500932),a=e.i(481293),n=e.i(180301),r=e.i(657688),l=e.i(402463),s=e.i(328852),o=e.i(271645),c=e.i(174080);let d=Number.parseInt(n.grid.breakpoints.l??"1024",10),u=(0,o.forwardRef)((e,n)=>{let o,u,p,f,m,h,g,v,y,b,x,C,L,$,H,w,j,k,S,M,E,_,z,N,Z,I,B=(0,i.c)(62);B[0]!==e?({desktop:p,mobile:h,fill:f,width:H,height:m,sizes:b,quality:y,enabled:x,preload:v,loading:C,desktopMinWidth:L,desktopInLandscape:$,className:o,crossOrigin:u,...g}=e,B[0]=e,B[1]=o,B[2]=u,B[3]=p,B[4]=f,B[5]=m,B[6]=h,B[7]=g,B[8]=v,B[9]=y,B[10]=b,B[11]=x,B[12]=C,B[13]=L,B[14]=$,B[15]=H):(o=B[1],u=B[2],p=B[3],f=B[4],m=B[5],h=B[6],g=B[7],v=B[8],y=B[9],b=B[10],x=B[11],C=B[12],L=B[13],$=B[14],H=B[15]);let G=void 0===x||x,P=void 0===C?"lazy":C,A=void 0===L?d:L,R=void 0!==$&&$;if(B[16]!==o||B[17]!==u||B[18]!==p||B[19]!==R||B[20]!==A||B[21]!==G||B[22]!==f||B[23]!==m||B[24]!==P||B[25]!==h||B[26]!==g||B[27]!==v||B[28]!==y||B[29]!==n||B[30]!==b||B[31]!==H){z=Symbol.for("react.early_return_sentinel");e:{if(E=(0,a.resolveImageWithAlt)(p),_=(0,a.resolveImageWithAlt)(h),!E||!_){z=null;break e}M=f?{fill:!0}:{width:H??_.width??1200,height:m??_.height??675},j=f?{}:{width:H??E.width??1200,height:m??E.height??675};let e={sizes:b,quality:y,preload:v,loader:l.imageLoader,...M};if(E.src===_.src){z=(0,t.jsx)("picture",{ref:n,className:o,...g,children:(0,t.jsx)(s.default,{enabled:G,image:E,sizes:b,quality:y,preload:v,loading:P,crossOrigin:u,...M})});break e}w=`(min-width: ${A}px)${R?", (orientation: landscape)":""}`;let i=`(max-width: ${A-1}px)${R?" and (orientation: portrait)":""}`,{props:d}=(0,r.getImageProps)({...e,src:E.src,alt:E.alt});if({srcSet:S,sizes:k}=d,v&&G){let{props:t}=(0,r.getImageProps)({...e,src:_.src,alt:_.alt}),{srcSet:a,sizes:n}=t;(0,c.preload)(E.src,{as:"image",fetchPriority:"high",imageSrcSet:S,imageSizes:k,media:w}),(0,c.preload)(_.src,{as:"image",fetchPriority:"high",imageSrcSet:a,imageSizes:n,media:i})}}B[16]=o,B[17]=u,B[18]=p,B[19]=R,B[20]=A,B[21]=G,B[22]=f,B[23]=m,B[24]=P,B[25]=h,B[26]=g,B[27]=v,B[28]=y,B[29]=n,B[30]=b,B[31]=H,B[32]=w,B[33]=j,B[34]=k,B[35]=S,B[36]=M,B[37]=E,B[38]=_,B[39]=z}else w=B[32],j=B[33],k=B[34],S=B[35],M=B[36],E=B[37],_=B[38],z=B[39];if(z!==Symbol.for("react.early_return_sentinel"))return z;B[40]!==w||B[41]!==j||B[42]!==k||B[43]!==S||B[44]!==G?(N=G?(0,t.jsx)("source",{media:w,srcSet:S,sizes:k,...j}):null,B[40]=w,B[41]=j,B[42]=k,B[43]=S,B[44]=G,B[45]=N):N=B[45];let q=v||"eager"===P?"eager":"lazy",T=v?"high":void 0;return B[46]!==u||B[47]!==G||B[48]!==M||B[49]!==y||B[50]!==E.lqip||B[51]!==_||B[52]!==b||B[53]!==q||B[54]!==T?(Z=(0,t.jsx)(s.default,{enabled:G,image:_,desktopPlaceholder:E.lqip,sizes:b,quality:y,loading:q,fetchPriority:T,crossOrigin:u,...M}),B[46]=u,B[47]=G,B[48]=M,B[49]=y,B[50]=E.lqip,B[51]=_,B[52]=b,B[53]=q,B[54]=T,B[55]=Z):Z=B[55],B[56]!==o||B[57]!==g||B[58]!==n||B[59]!==N||B[60]!==Z?(I=(0,t.jsxs)("picture",{ref:n,className:o,...g,children:[N,Z]}),B[56]=o,B[57]=g,B[58]=n,B[59]=N,B[60]=Z,B[61]=I):I=B[61],I});u.displayName="ResponsiveImage",e.s(["default",0,u])}]);