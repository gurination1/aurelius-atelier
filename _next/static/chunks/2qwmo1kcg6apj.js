(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,64705,e=>{"use strict";var t=e.i(843476),i=e.i(500932),n=e.i(134770),l=e.i(529843),a=e.i(770703),r=e.i(271645);let s=(0,a.default)(()=>e.A(183888),{loadableGenerated:{modules:[189686]},ssr:!1}),o=(0,r.createContext)({specsOpen:!1,openSpecs:()=>{},closeSpecs:()=>{},hasSpecs:!1});function c(e){return e.getClientRects().length>0}e.s(["BuildSpecsContext",0,o,"BuildSpecsProvider",0,e=>{let a,d,u,p,h,f,g,m,b=(0,i.c)(21),{children:x,specs:v,makeAndModel:y,buildName:$,price:j}=e,{lenisRef:w}=(0,r.use)(n.AppContext),[C,k]=(0,r.useState)(!1);b[0]===Symbol.for("react.memo_cache_sentinel")?(a=()=>k(!0),b[0]=a):a=b[0];let S=a;b[1]===Symbol.for("react.memo_cache_sentinel")?(d=()=>k(!1),b[1]=d):d=b[1];let I=d;b[2]!==w?(u=()=>{let e=[...document.querySelectorAll(`#${l.PURCHASE_SECTION_ID}`)].find(c);if(!e)return;let t=w.current?.lenis;if(t){t.start(),t.scrollTo(e,{force:!0});return}e.scrollIntoView({behavior:"smooth"})},b[2]=w,b[3]=u):u=b[3];let B=u;b[4]!==w||b[5]!==C?(p=()=>{let e=w.current?.lenis;if(e&&C)return e.stop(),()=>e.start()},h=[w,C],b[4]=w,b[5]=C,b[6]=p,b[7]=h):(p=b[6],h=b[7]),(0,r.useEffect)(p,h),b[8]!==C?(f={specsOpen:C,openSpecs:S,closeSpecs:I,hasSpecs:!0},b[8]=C,b[9]=f):f=b[9];let T=f;return b[10]!==$||b[11]!==B||b[12]!==y||b[13]!==j||b[14]!==v||b[15]!==C?(g=C?(0,t.jsx)(s,{specs:v,makeAndModel:y,buildName:$,price:j,onClose:I,onPurchase:B}):null,b[10]=$,b[11]=B,b[12]=y,b[13]=j,b[14]=v,b[15]=C,b[16]=g):g=b[16],b[17]!==x||b[18]!==g||b[19]!==T?(m=(0,t.jsxs)(o.Provider,{value:T,children:[x,g]}),b[17]=x,b[18]=g,b[19]=T,b[20]=m):m=b[20],m}])},968305,e=>{"use strict";var t=e.i(843476),i=e.i(500932),n=e.i(64705),l=e.i(523289),a=e.i(575509),r=e.i(212960),s=e.i(997053);let o=[...Array(30)].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.02*t}s; }`).join("\n"),c=s.default.button.withConfig({componentId:"sc-2c6bca94-0"})(({$isFullWidth:e})=>s.css`
        --ease: ease-in-out;
        --dur: 0.5s;

        position: relative;
        display: flex;
        align-items: center;
        gap: ${(0,a.getGap)("sm")};
        white-space: nowrap;
        overflow: clip;

        width: ${e?"100%":"max-content"};
        padding:  ${(0,a.getGap)("sm")} ${(0,a.getGap)("l")}	;

        transition: border-color var(--ease) var(--dur), background var(--ease) var(--dur);


        @media (hover: hover) and (pointer: fine) {
            &:hover {
                cursor: pointer;
                background: ${(0,a.getBrand)("bc5",5)};
                
                > span {
                    span { transform: translateY(4em) }
                }

                /* NOTE • A transform used to sit here as \`scale()(0.5)\` — invalid,
                   so browsers dropped it and only the fade ever applied. Removed
                   rather than repaired: a working shift-and-shrink would change the
                   hover. */
                svg {
                    opacity: 0.6;
                }
            }
        }
        

        svg {
            --size: 0.8rem;

            fill: ${(0,a.getBrand)("bc5")};
            transform-origin: center left;
            transition: transform var(--ease) var(--dur), opacity var(--ease) var(--dur);
        }


        > span {
            ${r.captionL}

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
                transition: transform var(--dur) ${(0,a.getEase)("bezzy2")};
            
                ${o}
            }
        }
    `),d=e=>{let n,a,r,s,o=(0,i.c)(10);if(!e.onClick||!e.aria||!e.label)return null;if(o[0]!==e.label){n=[];for(let i=0;i<e.label.length;i+=1){let l=e.label[i];n.push((0,t.jsx)("span",{children:" "===l?" ":l},`${e.label}-${i}`))}o[0]=e.label,o[1]=n}else n=o[1];return o[2]===Symbol.for("react.memo_cache_sentinel")?(a=(0,t.jsx)(l.default,{type:"play"}),o[2]=a):a=o[2],o[3]!==n?(r=(0,t.jsx)("span",{children:n}),o[3]=n,o[4]=r):r=o[4],o[5]!==e.aria||o[6]!==e.isFullWidth||o[7]!==e.onClick||o[8]!==r?(s=(0,t.jsxs)(c,{type:"button","aria-label":e.aria,$isFullWidth:e.isFullWidth,onClick:e.onClick,children:[a,r]}),o[5]=e.aria,o[6]=e.isFullWidth,o[7]=e.onClick,o[8]=r,o[9]=s):s=o[9],s};d.displayName="PlayButton";var u=e.i(800147),p=e.i(149624),h=e.i(494473),f=e.i(770703),g=e.i(271645),m=e.i(174080),b=e.i(124821);let x=(0,s.default)(a.Div).attrs({as:"section"}).withConfig({componentId:"sc-8b2b4882-0"})(()=>s.css`
        position: relative;
        z-index: 2;
        overflow: clip;
        padding-block: ${(0,a.getGap)("huge")};
        background: ${(0,a.getBrand)("bc1")};

        ${a.bp.l` padding-block: ${(0,a.getGap)("col")} `}


        waffl-grid {
            padding-block: ${(0,a.getGap)("huge")};

            ${a.bp.l` padding-block: ${(0,a.getGap)("col")} `}
        }
    `),v=(0,s.default)(a.Div).withConfig({componentId:"sc-8b2b4882-1"})(()=>s.css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${(0,a.getGap)("l")};
        width: 100%;

        p {
            text-wrap: pretty;

            & + p {
                margin-top: ${(0,a.getGap)("m")};
            }
        }

        p, em {
            ${r.titleL}
            color: ${(0,a.getBrand)("bc5")};
            text-transform: none;
            text-align: center;
        }

        em {
            font-style: italic;
        }
    `);(0,s.default)(a.Div).withConfig({componentId:"sc-8b2b4882-2"})(()=>s.css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: ${(0,a.getGap)("s")};
        margin-top: ${(0,a.getGap)("m")};

        ${a.bp.sm` margin-top: ${(0,a.getGap)("l")} `}

        ${a.bp.l`
            flex-direction: row;
            gap: 0;
            margin-top: ${(0,a.getGap)("xl")}
        `}
    `);let y=(0,s.default)(a.Div).withConfig({componentId:"sc-8b2b4882-3"})(()=>s.css`
        display: flex;
        justify-content: center;
        gap: ${(0,a.getGap)("sm")};
    `),$=(0,f.default)(()=>e.A(992697),{loadableGenerated:{modules:[413912]},ssr:!1}),j=e=>{let l,a,r,s,o,c,f,j,w,C=(0,i.c)(24),{description:k,video:S,buildName:I,buildCode:B}=e,{openSpecs:T,hasSpecs:E}=(0,g.use)(n.BuildSpecsContext),[G,_]=(0,g.useState)(!1);C[0]!==S?(l=(0,p.getExternalVideoUrl)(S),C[0]=S,C[1]=l):l=C[1];let A=l;C[2]!==B||C[3]!==I?(a=[B,I].filter(Boolean).join(" / ")||"Build",C[2]=B,C[3]=I,C[4]=a):a=C[4];let N=a;C[5]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{(0,m.flushSync)(()=>_(!0))},C[5]=r):r=C[5];let z=r;C[6]===Symbol.for("react.memo_cache_sentinel")?(s=()=>_(!1),C[6]=s):s=C[6];let D=s;return k?.length?(C[7]!==k?(o=(0,t.jsx)(u.default,{value:k}),C[7]=k,C[8]=o):o=C[8],C[9]!==E||C[10]!==T||C[11]!==N||C[12]!==A?(c=(E||A)&&(0,t.jsxs)(y,{children:[E&&(0,t.jsx)(b.default,{label:"View full specs",onClick:T,aria:"View full specs",isButton:!0}),A?(0,t.jsx)(d,{onClick:z,label:"Play Video",aria:`Play ${N} video`}):null]}),C[9]=E,C[10]=T,C[11]=N,C[12]=A,C[13]=c):c=C[13],C[14]!==o||C[15]!==c?(f=(0,t.jsx)(h.default,{children:(0,t.jsxs)(v,{$l:"4/10",children:[o,c]})}),C[14]=o,C[15]=c,C[16]=f):f=C[16],C[17]!==G||C[18]!==N||C[19]!==A?(j=G&&A?(0,t.jsx)($,{videoUrl:A,title:N,onClose:D}):null,C[17]=G,C[18]=N,C[19]=A,C[20]=j):j=C[20],C[21]!==f||C[22]!==j?(w=(0,t.jsxs)(x,{children:[f,j]}),C[21]=f,C[22]=j,C[23]=w):w=C[23],w):null};j.displayName="SingleBuildDesc",e.s(["default",0,j],968305)},375478,e=>{"use strict";var t=e.i(843476),i=e.i(500932),n=e.i(607561),l=e.i(255667),a=e.i(328852),r=e.i(271645),s=e.i(989970),o=e.i(481293),c=e.i(575509),d=e.i(997053);let u=(0,d.default)(c.Div).attrs({as:"section"}).withConfig({componentId:"sc-ba185dd8-0"})(({$isAvailable:e})=>d.css`
        position: relative;
        z-index: 2;
        overflow: clip;
        background: ${(0,c.getBrand)("bc1")};

        ${!e&&d.css`
            padding-bottom: ${(0,c.getGap)("m")};

            ${c.bp.sm` padding-bottom: ${(0,c.getGap)("l")} `}
            ${c.bp.l` padding-bottom: ${(0,c.getGap)("xl")} `}
        `}
    `),p=(0,d.default)(c.Div).withConfig({componentId:"sc-ba185dd8-1"})(()=>d.css`
        display: flex;
        flex-direction: column;

        ${c.bp.l`
            gap: ${(0,c.getGap)("m")};
        `}
    `),h=d.css`
    padding-inline: ${(0,c.getGap)("m")};

    ${c.bp.sm` padding-inline: ${(0,c.getGap)("l")}; `}
    ${c.bp.l` padding-inline: ${(0,c.getGap)("xl")}; `}
`,f=(0,d.default)(c.Div).withConfig({componentId:"sc-ba185dd8-2"})(()=>d.css`
        ${h}

        /* Falls back to 2:1 when the block's image carries no dimensions. */
        figure {
            aspect-ratio: var(--ratio, 2 / 1);
        }
    `),g=(0,d.default)(c.Div).withConfig({componentId:"sc-ba185dd8-3"})(()=>d.css`
        ${h}

        display: grid;
        grid-template-columns: 1fr;

        ${c.bp.m`
            grid-template-columns: 1fr 1fr;
        `}

        ${c.bp.l`
            gap: ${(0,c.getGap)("m")};
        `}

        figure {
            aspect-ratio: 4 / 5;
        }
    `),m=(0,d.default)(c.Div).attrs({as:"figure"}).withConfig({componentId:"sc-ba185dd8-4"})(()=>d.css`
        position: relative;
        width: 100%;
        margin: 0;
        overflow: clip;

        background: ${(0,c.getBrand)("bc1",80)};

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            user-select: none;
        }
    `),b=(0,d.default)(c.Div).attrs({as:"span"}).withConfig({componentId:"sc-ba185dd8-5"})(()=>d.css`
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;

        background: ${(0,c.getBrand)("bc3")};
    `),x="(min-width: 700px) 50vw, 100vw",v=e=>{let n,l,r,s=(0,i.c)(10),{image:o,sizes:c,isSingle:d}=e;s[0]!==o||s[1]!==d?(n=d?(({width:e,height:t})=>e&&t?{"--ratio":`${e} / ${t}`}:void 0)(o):void 0,s[0]=o,s[1]=d,s[2]=n):n=s[2];let u=!d;return s[3]!==o||s[4]!==c||s[5]!==u?(l=(0,t.jsx)(a.default,{image:o,fill:u,width:o.width,height:o.height,sizes:c,quality:90,draggable:!1}),s[3]=o,s[4]=c,s[5]=u,s[6]=l):l=s[6],s[7]!==n||s[8]!==l?(r=(0,t.jsx)(m,{style:n,children:l}),s[7]=n,s[8]=l,s[9]=r):r=s[9],r},y=e=>{if("gallerySingleImage"===e._type){let i=(0,o.resolveImageWithAlt)(e.image);return i?(0,t.jsx)(f,{children:(0,t.jsx)(v,{image:i,sizes:"100vw",isSingle:!0})},e._key):null}let i=(0,o.resolveImageWithAlt)(e.left),n=(0,o.resolveImageWithAlt)(e.right);return i||n?(0,t.jsxs)(g,{children:[i?(0,t.jsx)(v,{image:i,sizes:x}):null,n?(0,t.jsx)(v,{image:n,sizes:x}):null]},e._key):null},$=e=>{let a,o,c,d,h,f,g=(0,i.c)(17),{gallery:m,buildName:x,available:v}=e,$=(0,r.useRef)(null),j=(0,r.useRef)(null),w=!!v,C=(0,l.useLenis)();if(g[0]!==w||g[1]!==C?.rootElement?(a=()=>{let e=$.current,t=j.current,i=C?.rootElement;e&&t&&i&&w&&(s.default.set(t,{autoAlpha:0}),s.default.to(t,{autoAlpha:1,ease:"none",scrollTrigger:{trigger:e,scroller:i,start:()=>`bottom-=${i.clientHeight}px bottom`,end:"bottom bottom",scrub:!0}}))},g[0]=w,g[1]=C?.rootElement,g[2]=a):a=g[2],g[3]!==w||g[4]!==C?(o={scope:$,dependencies:[C,w]},g[3]=w,g[4]=C,g[5]=o):o=g[5],(0,n.useAnimation)(a,o),!m?.length)return null;let k=x?`${x} gallery`:"Build gallery";return g[6]!==w?(c=w&&(0,t.jsx)(b,{ref:j}),g[6]=w,g[7]=c):c=g[7],g[8]!==m?(d=m.map(y),g[8]=m,g[9]=d):d=g[9],g[10]!==d?(h=(0,t.jsx)(p,{children:d}),g[10]=d,g[11]=h):h=g[11],g[12]!==w||g[13]!==k||g[14]!==c||g[15]!==h?(f=(0,t.jsxs)(u,{"data-scene-preload":!0,"aria-label":k,ref:$,$isAvailable:w,children:[c,h]}),g[12]=w,g[13]=k,g[14]=c,g[15]=h,g[16]=f):f=g[16],f};$.displayName="SingleBuildGallery",e.s(["default",0,$],375478)},170825,e=>{"use strict";var t=e.i(843476),i=e.i(500932),n=e.i(64705),l=e.i(481293),a=e.i(271645),r=e.i(88664),s=e.i(494473),o=e.i(575509),c=e.i(997053),d=e.i(212960);let u=(0,c.default)(o.Div).attrs({as:"header"}).withConfig({componentId:"sc-1767e08b-0"})(()=>c.css`
        --offset: var(--header-size-mobile);

        position: relative;
        z-index: 2;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;

        padding: var(--offset) 0 ${(0,o.getGap)("m")} 0;
        background: ${(0,o.getBrand)("bc1")};
        height: calc(100dvh - ${(0,o.getGap)("huge")});


        ${o.bp.sm`
            padding: var(--offset) 0 ${(0,o.getGap)("l")} 0;
        `}

        ${o.bp.l`
            --offset: calc(${(0,o.getGap)("col")} + var(--header-size-desktop));

            align-items: flex-start;
            gap: ${(0,o.getGap)("s")};

            height: auto;
            min-height: 40rem;
        `}
	`),p=(0,c.default)(o.Div).attrs({as:"div"}).withConfig({componentId:"sc-1767e08b-1"})(()=>c.css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: ${(0,o.getGap)("sm")};

        ${o.bp.l` padding-left: ${(0,o.getGap)("m")} `}
	`),h=(0,c.default)(o.Div).attrs({as:"div"}).withConfig({componentId:"sc-1767e08b-2"})(()=>c.css`
		display: flex;
        gap: ${(0,o.getGap)("s")};
	`),f=(0,c.default)(o.Div).attrs({as:"h1"}).withConfig({componentId:"sc-1767e08b-3"})(()=>c.css`
		${d.headlineL}

        font-style: italic;
	`),g=(0,c.default)(o.Div).attrs({as:"p"}).withConfig({componentId:"sc-1767e08b-4"})(()=>c.css`
        ${d.bodyL}

        text-wrap: balance;
        color: ${(0,o.getBrand)("bc5",60)};
        padding-top: ${(0,o.getGap)("s")};

        ${o.bp.l`
            padding-left: ${(0,o.getGap)("m")};
            padding-top: 0;
        `}
    `),m=c.css`
    ${d.bodyL}
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: ${(0,o.getGap)("xs")};

    span:first-child { color: ${(0,o.getBrand)("bc5",60)}  }
    span:last-child { color: ${(0,o.getBrand)("bc5")} }
`,b=(0,c.default)(o.Div).attrs({as:"em"}).withConfig({componentId:"sc-1767e08b-5"})(({$isFirst:e})=>c.css`
        ${m}

        
        align-items: ${e?"flex-start":"flex-end"};

        ${o.bp.l`
            text-align: right;
            align-items: flex-start;
        `}
	`),x=c.default.button.withConfig({componentId:"sc-1767e08b-6"})(()=>c.css`
        --line-dur: 0.5s;
        --line-ease: ${(0,o.getEase)("bezzy2")};

        position: relative;
        padding: 0;
        cursor: pointer;
        color: ${(0,o.getBrand)("bc5")};
        text-align: left;
        transition: color var(--line-dur) var(--line-ease);

        ${d.bodyL}

        /* bodyL's 1.4 line-height leaves 0.2em of leading under the glyphs; the
           line sits just inside that, tucked under the descenders. */
        &::before,
        &::after {
            content: '';
            position: absolute;
            inset: auto 0 0.15em;
            height: 1px;
            
            transition: transform var(--line-dur) var(--line-ease);
        }

        /* The resting line: full width, anchored right so it shrinks toward the right. */
        &::before {
            transform: scaleX(1);
            transform-origin: right center;
            background: ${(0,o.getBrand)("bc5")};
        }

        /* The incoming line: hidden, anchored left so it grows out to the right. */
        &::after {
            transform: scaleX(0);
            transform-origin: left center;
            transition-delay: calc(var(--line-dur) * 0.3);
            background: ${(0,o.getBrand)("bc5",40)};
        }

        @media (hover: hover) and (pointer: fine) {
            &:hover {
                /* color: ${(0,o.getBrand)("bc5",40)}; */
            }

            &:hover::before,
            &:hover::before {
                transform: scaleX(0);
            }

            &:hover::after {
                transform: scaleX(1);
            }
        }
	`),v=(0,c.default)(o.Div).attrs({as:"div"}).withConfig({componentId:"sc-1767e08b-7"})(()=>c.css`
        --size: ${(0,o.getGap)("m")};

        position: relative;
		display: flex;
		justify-content: space-between;
		gap: var(--size);
        padding-top: var(--size);
        margin-top: var(--size);

        ${o.bp.sm` --size: ${(0,o.getGap)("l")} `}

        &:before {
            --offset: calc(${(0,o.getGap)("l")} * -1);

            content: '';
            position: absolute;
            inset: 0 var(--offset) auto;

            background: ${(0,o.getBrand)("bc5",10)};
            height: 1px;

            ${o.bp.l` display: none `}
        }
        
		${o.bp.l` display: contents `}
	`),y=e=>{let n,l,a,o,c,d,m,y,$,j,w,C,k,S,I,B=(0,i.c)(39),{buildName:T,buildCode:E,shortDescription:G,available:_,price:A,makeAndModel:N,handleFullSpecs:z}=e;B[0]!==E?(n=(0,t.jsx)(r.default,{text:E}),B[0]=E,B[1]=n):n=B[1],B[2]!==_||B[3]!==A?(l=_&&A&&(0,t.jsx)(r.default,{text:`${A}`,isLight:!0}),B[2]=_,B[3]=A,B[4]=l):l=B[4],B[5]!==n||B[6]!==l?(a=(0,t.jsxs)(h,{children:[n,l]}),B[5]=n,B[6]=l,B[7]=a):a=B[7],B[8]!==T?(o=(0,t.jsx)(f,{children:T}),B[8]=T,B[9]=o):o=B[9],B[10]!==a||B[11]!==o?(c=(0,t.jsx)(s.default,{"data-label":"top",children:(0,t.jsxs)(p,{$l:"1/7",children:[a,o]})}),B[10]=a,B[11]=o,B[12]=c):c=B[12],B[13]!==G?(d=(0,t.jsx)(g,{$l:"1/6",children:G}),B[13]=G,B[14]=d):d=B[14];let D=_?"Availability":"Make & Model";B[15]!==D?(m=(0,t.jsx)("span",{children:D}),B[15]=D,B[16]=m):m=B[16];let P=_?"Available for sale":N;B[17]!==P?(y=(0,t.jsx)("span",{children:P}),B[17]=P,B[18]=y):y=B[18],B[19]!==y||B[20]!==m?($=(0,t.jsxs)(b,{$l:"8/11",$isFirst:!0,children:[m,y]}),B[19]=y,B[20]=m,B[21]=$):$=B[21];let F=_?"Specification":"Vehicle Status";return B[22]!==F?(j=(0,t.jsx)("span",{children:F}),B[22]=F,B[23]=j):j=B[23],B[24]!==_||B[25]!==z?(w=_&&z?(0,t.jsx)(x,{type:"button","aria-label":"View the vehicles full specification",onClick:z,children:"View full specs"}):(0,t.jsx)("span",{children:"Vehicle Unavailable"}),B[24]=_,B[25]=z,B[26]=w):w=B[26],B[27]!==j||B[28]!==w?(C=(0,t.jsxs)(b,{$l:"11/13",children:[j,w]}),B[27]=j,B[28]=w,B[29]=C):C=B[29],B[30]!==$||B[31]!==C?(k=(0,t.jsxs)(v,{children:[$,C]}),B[30]=$,B[31]=C,B[32]=k):k=B[32],B[33]!==k||B[34]!==d?(S=(0,t.jsxs)(s.default,{"data-label":"bottom",children:[d,k]}),B[33]=k,B[34]=d,B[35]=S):S=B[35],B[36]!==S||B[37]!==c?(I=(0,t.jsxs)(u,{children:[c,S]}),B[36]=S,B[37]=c,B[38]=I):I=B[38],I};y.displayName="Banner";var $=e.i(11438),j=e.i(89835),w=e.i(607561),C=e.i(989970),k=e.i(255667);let S=(0,c.default)(o.Div).attrs({as:"section"}).withConfig({componentId:"sc-f4ec60ce-0"})(({$isCentred:e,$isInteractive:t})=>c.css`
        position: sticky;
        top: 0; left: 0;

        width: 100%;
        height: 100dvh;
        overflow: clip;

        user-select: none;
        pointer-events: none;
        cursor: ${t?"pointer":"default"};
        background: ${(0,o.getBrand)("bc1")};

        parallax-trigger {
            position: relative;
            width: 100%;
            height: 100%;
            display: block;
        }

        /* NOTE • The jacket stays pointer-events:none so the sticky image never
           blocks the page beneath it. The hover target opts back in on its own —
           it is the only thing here the custom cursor keys off — and the image
           inside stays inert so a drag can't lift a ghost of it.
           On a sold build there is nothing to open: it keeps pointer-events none
           so the image neither offers a pointer nor swallows clicks meant for the
           page beneath. */
        parallax-trigger[data-cursor] {
            pointer-events: ${t?"auto":"none"};
        }

		parallax-target {
            position: absolute;
            inset: 0;
			display: block;
		}

        img {
            pointer-events: none;
            object-fit: cover;
            /* NOTE • The dedicated build-page pair is authored to sit centred in
               both layouts; the listing-image fallback keeps the original bottom
               anchor so existing builds are unchanged. */
            object-position: ${e?"center":"bottom center"};
        }
	`),I=e=>{let n,l,r,s,o,c,d,u,p,h=(0,i.c)(27),{desktop:f,mobile:g,isCentred:m,hasSpecs:b,outroTriggerRef:x,handleFullSpecs:v}=e,y=void 0!==m&&m,I=void 0!==b&&b,B=(0,a.useRef)(null),T=(0,a.useRef)(null),E=(0,a.useRef)(null),[G,_]=(0,a.useState)(!1),A=(0,k.useLenis)();h[0]===Symbol.for("react.memo_cache_sentinel")?(n=()=>_(!0),h[0]=n):n=h[0];let N=n;h[1]===Symbol.for("react.memo_cache_sentinel")?(l=()=>_(!1),h[1]=l):l=h[1];let z=l;h[2]!==I||h[3]!==A?.rootElement||h[4]!==x?(r=()=>{let e=B.current,t=T.current,i=E.current,n=A?.rootElement;if(!e||!t||!i||!n)return;if(!I)return void C.default.fromTo(i,{yPercent:-25},{yPercent:25,ease:"none",scrollTrigger:{scroller:n,trigger:e,start:"top bottom",end:"bottom top",scrub:!0}});C.default.set(i,{yPercent:-25}),C.default.to(i,{yPercent:0,ease:"none",scrollTrigger:{scroller:n,trigger:e,start:"top bottom",end:"top top",scrub:!0}}),C.default.to(i,{opacity:.25,ease:"none",scrollTrigger:{scroller:n,trigger:e,start:"top top",end:"center top",scrub:!0}});let l=t=>()=>{let i=(x?.current??e).getBoundingClientRect(),l=n.scrollTop,a=i.bottom+l;return"start"===t?a-n.clientHeight:a};C.default.fromTo(i,{yPercent:0},{yPercent:25,ease:"none",immediateRender:!1,scrollTrigger:{scroller:n,trigger:e,start:l("start"),end:l("end"),scrub:!0}})},h[2]=I,h[3]=A?.rootElement,h[4]=x,h[5]=r):r=h[5],h[6]!==I||h[7]!==A?(s={scope:B,dependencies:[A,I]},h[6]=I,h[7]=A,h[8]=s):s=h[8],(0,w.useAnimation)(r,s);let D=!!v,P=D?N:void 0,F=D?z:void 0;return h[9]!==f||h[10]!==g?(o=(0,t.jsx)("parallax-target",{ref:E,children:(0,t.jsx)(j.default,{desktop:f,mobile:g,fill:!0,sizes:"100vw",quality:90,preload:!0,loading:"eager"})}),h[9]=f,h[10]=g,h[11]=o):o=h[11],h[12]!==P||h[13]!==F||h[14]!==o?(c=(0,t.jsx)("parallax-trigger",{ref:T,"data-cursor":!0,onMouseEnter:P,onMouseLeave:F,children:o}),h[12]=P,h[13]=F,h[14]=o,h[15]=c):c=h[15],h[16]!==v||h[17]!==y||h[18]!==D||h[19]!==c?(d=(0,t.jsx)(S,{ref:B,$isCentred:y,$isInteractive:D,onClick:v,children:c}),h[16]=v,h[17]=y,h[18]=D,h[19]=c,h[20]=d):d=h[20],h[21]!==G||h[22]!==D?(u=D?(0,t.jsx)($.default,{isActive:G,label:"View full specification"}):null,h[21]=G,h[22]=D,h[23]=u):u=h[23],h[24]!==d||h[25]!==u?(p=(0,t.jsxs)(t.Fragment,{children:[d,u]}),h[24]=d,h[25]=u,h[26]=p):p=h[26],p};I.displayName="FeaturedImage";let B=(0,c.default)(o.Div).attrs({as:"section"}).withConfig({componentId:"sc-725e3499-0"})(()=>c.css`
		position: relative;
		z-index: 2;
	`),T=e=>{let r,s,o,c,d,u=(0,i.c)(20),{buildName:p,buildCode:h,shortDescription:f,available:g,price:m,desktopImage:b,mobileImage:x,featuredImageCentred:v,makeAndModel:$}=e,{openSpecs:j,hasSpecs:w}=(0,a.use)(n.BuildSpecsContext),C=(0,a.useRef)(null);u[0]!==b?(r=(0,l.resolveImageWithAlt)(b),u[0]=b,u[1]=r):r=u[1];let k=r;u[2]!==x?(s=(0,l.resolveImageWithAlt)(x),u[2]=x,u[3]=s):s=u[3];let S=s;if(!p||!b||!x||!k||!S)return null;let T=h??"#",E=f??"Missing description",G=w?j:void 0;u[4]!==g||u[5]!==p||u[6]!==$||u[7]!==m||u[8]!==T||u[9]!==E||u[10]!==G?(o=(0,t.jsx)(y,{buildName:p,buildCode:T,shortDescription:E,available:g,price:m,handleFullSpecs:G,makeAndModel:$}),u[4]=g,u[5]=p,u[6]=$,u[7]=m,u[8]=T,u[9]=E,u[10]=G,u[11]=o):o=u[11];let _=w?j:void 0;return u[12]!==v||u[13]!==k||u[14]!==S||u[15]!==_?(c=(0,t.jsx)(I,{desktop:k,mobile:S,isCentred:v,handleFullSpecs:_}),u[12]=v,u[13]=k,u[14]=S,u[15]=_,u[16]=c):c=u[16],u[17]!==o||u[18]!==c?(d=(0,t.jsxs)(B,{ref:C,children:[o,c]}),u[17]=o,u[18]=c,u[19]=d):d=u[19],d};T.displayName="SingleBuildHero",e.s(["default",0,T],170825)},985298,e=>{"use strict";var t=e.i(843476),i=e.i(500932),n=e.i(89835),l=e.i(948025),a=e.i(255981),r=e.i(770703),s=e.i(255667),o=e.i(271645),c=e.i(575509),d=e.i(212960),u=e.i(997053);let p=[...Array(20)].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.02*t}s; }`).join("\n"),h=(0,u.default)(c.Div).attrs({as:"section"}).withConfig({componentId:"sc-c0982aa4-0"})(()=>u.css`
        position: relative;
        z-index: 1;
        overflow: clip;

        display: flex;
            align-items: center;
            justify-content: center;

        height: 100dvh;
        background: ${(0,c.getBrand)("bc1")};
    `),f=(0,u.default)(c.Div).withConfig({componentId:"sc-c0982aa4-1"})(()=>u.css`
        position: absolute;
        inset: 0;
        z-index: 0;
        pointer-events: none;

        .shader {
            position: absolute;
            inset: 0;
        }
    `),g=(0,u.default)(c.Div).withConfig({componentId:"sc-c0982aa4-2"})(()=>u.css`
        position: absolute;
        inset: 0;
        z-index: 1;
        transform: scale(0.5);

        picture {
            display: block;
            width: 100%;
            height: 100%;
        }

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            user-select: none;
        }
    `),m=(0,u.default)(c.Div).attrs({as:"h2"}).withConfig({componentId:"sc-c0982aa4-3"})(({$isScrolling:e})=>u.css`
        position: relative;
        z-index: 1;

        ${d.displayL}

        text-align: center;
        text-transform: none;
        color: ${(0,c.getBrand)("bc5")};

        /* NOTE • The Button's letter-roll, at display scale. Each letter carries a
           ghost of itself 1.2em above via text-shadow; the line clips; on hover every
           letter slides down 1.2em so the ghost takes its place, staggered per letter.
           1.2em (not the button's 4em) because this line-height is 1.1, so that is one
           full line box of travel. */
        a {
            display: block;
            color: inherit;
            text-decoration: none;

            /* NOTE • Not clickable (or hoverable) until scrolling has settled — driven
               by useIsLenisScrolling (velocity), not Lenis's .lenis-scrolling class,
               which can wedge after the menu closes. */
            pointer-events: ${e?"none":"auto"};

            > span {
                display: block;
                overflow: clip;
                transition: opacity ${(0,c.getTime)("m")} ${(0,c.getEase)("bezzy")};

                > span {
                    display: inline-block;
                    text-shadow: ${(0,c.getBrand)("bc5",60)} 0 -1.2em 0;
                    transition: transform 0.5s ${(0,c.getEase)("bezzy2")};

                    ${p}
                }
            }

            @media (hover: hover) and (pointer: fine) {
                &:hover > span {
                    opacity: 0.6;

                    > span {
                        transform: translateY(1.2em);
                    }
                }
            }
        }
    `),b=u.default.button.withConfig({componentId:"sc-c0982aa4-4"})(()=>u.css`
        ${d.captionL}

        position: absolute;
        bottom: ${(0,c.getGap)("xxl")};
        left: 50%;
        z-index: 1;
        transform: translateX(-50%);

        cursor: pointer;
        color: ${(0,c.getBrand)("bc5")};

        @media (hover: hover) and (pointer: fine) {
            &:hover {
                span > span {
                    opacity: 0.6;
                    transform: translateY(4em);
                }
            }
        }

        > span {
            display: block;
            overflow: clip;

            > span {
                display: inline-block;
                text-shadow: ${(0,c.getBrand)("bc5",60)} 0px -4em 0px;
                transition: transform 0.5s ${(0,c.getEase)("bezzy2")};

                ${p}
            }
        }
    `),x=(0,r.default)(()=>e.A(439159),{loadableGenerated:{modules:[787803]},ssr:!1}),v=e=>{let r,c,d,u,p,h,m,b=(0,i.c)(20),{desktopImage:v,mobileImage:y}=e,$=(0,a.useIsDesktopViewport)(),[j,w]=(0,o.useState)(!1),C=(0,o.useRef)(null),[k,S]=(0,o.useState)(!1),I=(0,s.useLenis)();if(b[0]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{w(!0)},c=[],b[0]=r,b[1]=c):(r=b[0],c=b[1]),(0,o.useEffect)(r,c),b[2]!==$||b[3]!==k||b[4]!==I?.rootElement?(d=()=>{if(!$||k)return;let e=document.querySelector("[data-scene-preload]"),t=e??C.current;if(!t)return;let i=new IntersectionObserver(e=>{let[t]=e;t?.isIntersecting&&S(!0)},{root:I?.rootElement??null,rootMargin:e?"0px":"100% 0px"});return i.observe(t),()=>i.disconnect()},b[2]=$,b[3]=k,b[4]=I?.rootElement,b[5]=d):d=b[5],b[6]!==$||b[7]!==k||b[8]!==I?(u=[$,k,I],b[6]=$,b[7]=k,b[8]=I,b[9]=u):u=b[9],(0,o.useEffect)(d,u),!v)return null;b[10]!==v?(p=(0,l.imageRenditionSrc)(v,"texture"),b[10]=v,b[11]=p):p=b[11];let B=p;if(!B)return null;if(!$&&j){let e,i=y??v;return b[12]!==v||b[13]!==i?(e=(0,t.jsx)(f,{children:(0,t.jsx)(g,{"aria-hidden":!0,children:(0,t.jsx)(n.default,{desktop:v,mobile:i,fill:!0,sizes:"100vw",quality:90})})}),b[12]=v,b[13]=i,b[14]=e):e=b[14],e}return b[15]!==B||b[16]!==k?(h=k?(0,t.jsx)(x,{url:B}):null,b[15]=B,b[16]=k,b[17]=h):h=b[17],b[18]!==h?(m=(0,t.jsx)(f,{ref:C,children:h}),b[18]=h,b[19]=m):m=b[19],m};v.displayName="Background";var y=e.i(951847),$=e.i(371136),j=e.i(22584);let w="Back to Top",C=["next-build"],k=e=>e.split("").map((e,i)=>(0,t.jsx)("span",{children:" "===e?" ":e},`${e}_${i.toString()}`)),S=e=>{let n,l,a,r,c,d,u,p,f,g,x,S,I,B=(0,i.c)(29),{buildName:T,buildCode:E,slug:G,desktopImage:_,mobileImage:A,basePath:N}=e,z=void 0===N?j.ARCHIVE_BASE_PATH:N,D=(0,o.useRef)(null),P=(0,s.useLenis)(),F=(()=>{let e,t,n,l=(0,i.c)(3),[a,r]=(0,o.useState)(!1),c=(0,o.useRef)(null);return l[0]===Symbol.for("react.memo_cache_sentinel")?(e=e=>{c.current&&clearTimeout(c.current);let t=Math.abs(e.velocity)>0;r(e=>e===t?e:t),t&&(c.current=setTimeout(()=>r(!1),200))},l[0]=e):e=l[0],(0,s.useLenis)(e),l[1]===Symbol.for("react.memo_cache_sentinel")?(t=()=>()=>{c.current&&clearTimeout(c.current)},n=[],l[1]=t,l[2]=n):(t=l[1],n=l[2]),(0,o.useEffect)(t,n),a})();B[0]===Symbol.for("react.memo_cache_sentinel")?(n=()=>D.current?[D.current]:[],l=[],a={distanceThreshold:"50%"},B[0]=n,B[1]=l,B[2]=a):(n=B[0],l=B[1],a=B[2]),(0,$.useLenisSnap)(P,n,l,a),B[3]!==E||B[4]!==T?(r=[E,T].filter(Boolean),B[3]=E,B[4]=T,B[5]=r):r=B[5];let L=r.join(" – ");B[6]!==P?(c=()=>{P?.scrollTo(0,{duration:1.2})},B[6]=P,B[7]=c):c=B[7];let R=c;if(!G)return null;let O=L?`Next build: ${L}`:"Next build";B[8]!==_||B[9]!==A?(d=(0,t.jsx)(v,{desktopImage:_,mobileImage:A}),B[8]=_,B[9]=A,B[10]=d):d=B[10],B[11]!==z||B[12]!==G?(u=(0,j.buildHref)(z,G),B[11]=z,B[12]=G,B[13]=u):u=B[13];let q=L?`Next build: ${L}`:"Next build";return B[14]===Symbol.for("react.memo_cache_sentinel")?(p=(0,t.jsx)("span",{"aria-hidden":!0,children:k("Next Build")}),B[14]=p):p=B[14],B[15]!==q||B[16]!==u?(f=(0,t.jsx)(y.Link,{href:u,"aria-label":q,transitionTypes:C,prefetch:!0,transitionAwaitsContent:!0,children:p}),B[15]=q,B[16]=u,B[17]=f):f=B[17],B[18]!==F||B[19]!==f?(g=(0,t.jsx)(m,{$isScrolling:F,children:f}),B[18]=F,B[19]=f,B[20]=g):g=B[20],B[21]===Symbol.for("react.memo_cache_sentinel")?(x=(0,t.jsx)("span",{children:k(w)}),B[21]=x):x=B[21],B[22]!==R?(S=(0,t.jsx)(b,{type:"button","aria-label":w,onClick:R,children:x}),B[22]=R,B[23]=S):S=B[23],B[24]!==g||B[25]!==S||B[26]!==O||B[27]!==d?(I=(0,t.jsxs)(h,{ref:D,"data-next-build":!0,"aria-label":O,children:[d,g,S]}),B[24]=g,B[25]=S,B[26]=O,B[27]=d,B[28]=I):I=B[28],I};S.displayName="SingleBuildNext",e.s(["default",0,S],985298)},529843,e=>{"use strict";var t=e.i(843476),i=e.i(156569),n=e.i(124821),l=e.i(995340),a=e.i(101384),r=e.i(814955),s=e.i(607561),o=e.i(494473),c=e.i(989970),d=e.i(883495),u=e.i(255667),p=e.i(271645),h=e.i(575509),f=e.i(997053);let g=(0,f.default)(h.Div).attrs({as:"section"}).withConfig({componentId:"sc-31db4d31-0"})(()=>f.css`
		position: relative;
		z-index: 2;

		background: ${(0,h.getBrand)("bc1")};
	`),m=(0,f.default)(h.Div).withConfig({componentId:"sc-31db4d31-1"})(()=>f.css`
		padding-block: ${(0,h.getGap)("huge")};
		background: ${(0,h.getBrand)("bc3")};
		/* Shrinks about its top edge as it exits — see EXIT_SCALE in index.tsx. */
		transform-origin: top center;

		${h.bp.l`
			padding-block: ${(0,h.getGap)("col")};
		`}

		strong {
			font-weight: 700;
		}
	`);var b=e.i(478648),x=e.i(917070),v=e.i(720212);let y={fullName:"",preferredContact:"",email:"",number:"",message:""};function $(e){let t={},{fullName:i,preferredContact:n,email:l,number:a}=e;return i.trim()||(t.fullName="Field is required"),n||(t.preferredContact="Field is required"),l.trim()?(0,x.validateEmail)(l)||(t.email="Invalid"):t.email="Field is required","phone"===n?a.trim()?(0,v.validateUkPhone)(a)||(t.number="Invalid"):t.number="Field is required":a.trim()&&!(0,v.validateUkPhone)(a)&&(t.number="Invalid"),t}function j(e){return 0===Object.keys($(e)).length}async function w(e,t,i){if(!j(e))return{error:"Please fix the highlighted fields."};let n={values:e,build:t,[l.HONEYPOT_FIELD]:i.honeypot,[l.FILL_TIME_FIELD]:Date.now()-i.startedAt},a=await fetch("/api/purchase/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!a.ok){let e=await a.json().catch(()=>null);return{error:e?.error??"Something went wrong. Please try again."}}return{success:!0}}let C="purchase-form",k="purchase",S="Thank you. We’ll be in touch about this build soon.",I=({buildCode:e,buildName:h,price:f,slug:x})=>{let v=(0,u.useLenis)(),{isReducedMotion:I}=(0,p.use)(a.PerformanceContext),B=(0,p.useRef)(null),T=(0,p.useRef)(null),E=(0,p.useRef)(0);(0,s.useAnimation)(()=>{let e=B.current,t=T.current,i=v?.rootElement;e&&t&&i&&!I&&c.default.fromTo(t,{scale:1},{scale:.8,ease:"none",scrollTrigger:{trigger:e,scroller:i,start:"80% top",end:"bottom top",scrub:!0}})},{scope:B,dependencies:[v,I]});let[G,_]=(0,p.useState)(""),[A,N]=(0,p.useState)(y),[z,D]=(0,p.useState)({}),[P,F]=(0,p.useState)(null),[L,R]=(0,p.useState)(!1),[O,q]=(0,p.useState)(0),V=!!P?.success,W=$(A),M=j(A),H="phone"===A.preferredContact,U=[e,h].filter(Boolean).join(" / "),X={buildCode:e??"",buildName:h??"",price:f??"",slug:x??""},Y=e=>z[e]?W[e]??null:void 0;(0,p.useEffect)(()=>{E.current=Date.now()},[]),(0,p.useEffect)(()=>{let e=requestAnimationFrame(()=>{v?.resize(),d.default.refresh()});return()=>cancelAnimationFrame(e)},[P,H,v]);let J=e=>t=>{if(V)return;let{value:i}=t.target;N(t=>({...t,[e]:i})),P?.error&&F(null)},K=e=>()=>{D(t=>({...t,[e]:!0}))},Q=async e=>{if(e?.preventDefault(),V||L||!M){M||D({fullName:!0,preferredContact:!0,email:!0,number:!0});return}R(!0),F(null);try{let e=await w(A,X,{honeypot:G,startedAt:E.current});F(e)}catch{F({error:"Something went wrong. Please try again."})}finally{R(!1)}};return(0,t.jsx)(g,{ref:B,id:k,"aria-label":U?`Purchase ${U}`:"Purchase this build",children:(0,t.jsx)(m,{ref:T,children:(0,t.jsxs)(o.default,{children:[(0,t.jsx)(b.Intro,{$l:"2/5",children:(0,t.jsxs)(b.IntroSticky,{children:[(0,t.jsx)(i.default,{children:(0,t.jsx)("h2",{children:"Purchase This Build"})}),(0,t.jsx)("p",{children:f?(0,t.jsxs)(t.Fragment,{children:["Available from ",(0,t.jsx)("strong",{children:f}),". To receive the full vehicle specification, discuss further customisation options or begin the purchasing process, complete the form and a member of our team will be in touch shortly."]}):"To receive the full vehicle specification, discuss further customisation options or begin the purchasing process, complete the form and a member of our team will be in touch shortly."}),P?.success&&(0,t.jsx)("p",{role:"status",children:S}),P?.error&&(0,t.jsx)("p",{role:"alert",children:P.error})]})}),(0,t.jsx)(b.FieldsWrap,{$l:"7/12",children:(0,t.jsxs)(b.Fields,{id:C,onSubmit:Q,noValidate:!0,children:[(0,t.jsx)(b.Honeypot,{"aria-hidden":"true",children:(0,t.jsx)("input",{type:"text",name:l.HONEYPOT_FIELD,tabIndex:-1,autoComplete:"off",value:G,onChange:e=>_(e.target.value)})}),(0,t.jsx)(r.default,{type:"text",label:"Full Name",id:"purchase-fullname",name:"fullName",autoComplete:"name",placeholder:"John Doe",required:!0,disabled:V,error:Y("fullName"),onChange:J("fullName"),onBlur:K("fullName")}),(0,t.jsx)(r.default,{type:"select",label:"Preferred Method of Contact",id:"purchase-method",name:"preferredContact",placeholder:"Please choose an option",options:[{label:"Email",value:"email"},{label:"Phone",value:"phone"}],required:!0,disabled:V,error:Y("preferredContact"),onChange:J("preferredContact"),onBlur:K("preferredContact")}),(0,t.jsx)(r.default,{type:"email",label:"Email Address",id:"purchase-email",name:"email",autoComplete:"email",placeholder:"john.doe@email.com",required:!0,disabled:V,error:Y("email"),onChange:J("email"),onBlur:K("email")}),H?(0,t.jsx)(r.default,{type:"tel",label:"Phone Number",id:"purchase-number",name:"number",autoComplete:"tel",placeholder:"01132 520 234",required:!0,disabled:V,error:Y("number"),onChange:J("number"),onBlur:K("number")}):null,(0,t.jsx)(r.default,{type:"textarea",label:"Message",id:"purchase-message",name:"message",isOptional:!0,disabled:V,placeholder:"Optional — Tell us if you’re looking for something specific",onChange:J("message")}),(0,t.jsxs)(b.ButtonContainer,{children:[V?(0,t.jsx)(n.default,{isButton:!0,type:"button",label:"Reset Form",aria:"Reset form",isFullWidth:!0,onClick:()=>{N(y),_(""),D({}),F(null),R(!1),q(e=>e+1),v?.scrollTo(`#${C}`,{duration:1.2})}}):(0,t.jsx)(n.default,{isButton:!0,type:"button",label:L?"Sending...":"Submit Enquiry",aria:U?`Submit enquiry about ${U}`:"Submit enquiry",disabled:!M||L,isFullWidth:!0,onClick:()=>{Q()}}),P?.success&&(0,t.jsx)("p",{role:"status",children:S}),P?.error&&(0,t.jsx)("p",{role:"alert",children:P.error})]})]},O)})]})})})};I.displayName="SingleBuildPurchase",e.s(["PURCHASE_SECTION_ID",0,k,"default",0,I],529843)}]);