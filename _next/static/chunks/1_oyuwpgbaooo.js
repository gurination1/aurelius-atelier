(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,461139,e=>{"use strict";var t=e.i(843476),a=e.i(500932),i=e.i(271645),n=e.i(174080),l=e.i(847873),r=e.i(997053),o=e.i(575509);let s=(0,r.default)(o.Div).attrs({as:"aside"}).withConfig({componentId:"sc-f35f3a81-0"})(()=>r.css`
		position: fixed;
		inset: 1rem 1rem auto auto;
		z-index: 9999;

		width: min(20rem, calc(100vw - 2rem));
		overscroll-behavior: contain;
		max-height: calc(100dvh - 2rem);
		overflow-y: auto;
		padding: 0.75rem;

		font: 500 11px/1.4 ui-monospace, monospace;
		color: #fff;
		background: rgb(0 0 0 / 0.82);
		backdrop-filter: blur(8px);
		border: 1px solid rgb(255 255 255 / 0.18);
		border-radius: 6px;
	`),m=r.default.div.withConfig({componentId:"sc-f35f3a81-1"})(()=>r.css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;

		button {
			padding: 0.55rem 0.7rem;
		min-height: 36px;
			font: inherit;
			color: #fff;
			cursor: pointer;
			background: rgb(255 255 255 / 0.12);
			border: 1px solid rgb(255 255 255 / 0.22);
			border-radius: 4px;
		}
	`),c=r.default.div.withConfig({componentId:"sc-f35f3a81-2"})(()=>r.css`
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
			min-height: 24px;
			accent-color: #fff;
		}
	`),p=(0,r.default)(o.Div).attrs({as:"p"}).withConfig({componentId:"sc-f35f3a81-3"})`margin: 0.7rem 0; opacity: 0.65;`,d=[{key:"morphStrength",label:"Morph amount",min:0,max:1,step:.01},{key:"waveStrength",label:"Edge ripple",min:0,max:2,step:.05},{key:"smearStrength",label:"Scroll smear",min:0,max:2,step:.05},{key:"zoomStrength",label:"Transition zoom",min:0,max:2,step:.05},{key:"snapDuration",label:"Settle duration (seconds)",min:.2,max:2,step:.02},{key:"snapDebounce",label:"Pause before settling (ms)",min:0,max:800,step:10},{key:"snapDamping",label:"Settle easing (soft to quick)",min:2,max:14,step:.25},{key:"depthStrength",label:"Depth parallax",min:0,max:.04,step:.001},{key:"overscan",label:"Overscan",min:1,max:1.5,step:.005},{key:"tiltX",label:"Tilt (cursor x)",min:-.15,max:.15,step:.001},{key:"tiltY",label:"Tilt (cursor y)",min:-.15,max:.15,step:.001},{key:"mouseEase",label:"Tilt ease",min:.01,max:.4,step:.005},{key:"driftX",label:"Idle drift x",min:0,max:.05,step:.001},{key:"driftY",label:"Idle drift y",min:0,max:.05,step:.001},{key:"velocityScale",label:"Smear full at (vh/frame)",min:.01,max:.3,step:.005},{key:"velocityEase",label:"Smear ease",min:.01,max:.4,step:.005},{key:"textFadeStart",label:"Copy fades from",min:0,max:1,step:.01},{key:"textFadeEnd",label:"Copy gone by",min:.05,max:1.2,step:.01},{key:"textShift",label:"Copy lag (vh)",min:0,max:30,step:.5}],f=e=>{let r,o,f,y,b,x,h,g,k,S,v,j,w,C,T,I,_=(0,a.c)(32),{base:E,onChange:N}=e;_[0]!==E?(r={...l.PLANE_CONFIG,...E},_[0]=E,_[1]=r):r=_[1];let O=r;_[2]!==O?(o=()=>{let e={...O};try{let t=JSON.parse(sessionStorage.getItem("forge-vui")??"{}");if(t&&"object"==typeof t)for(let a of d){let i=t[a.key];"number"==typeof i&&Number.isFinite(i)&&(e[a.key]=Math.max(a.min,Math.min(a.max,i)))}}catch{}return e},_[2]=O,_[3]=o):o=_[3];let[D,F]=(0,i.useState)(o),[P,z]=(0,i.useState)(!0),[A,J]=(0,i.useState)(!1),[M,R]=(0,i.useState)(!1);_[4]===Symbol.for("react.memo_cache_sentinel")?(f=(e,t)=>{F(a=>({...a,[e]:t}))},_[4]=f):f=_[4];let U=f;_[5]!==O?(y=()=>F(O),_[5]=O,_[6]=y):y=_[6];let B=y;_[7]!==D?(b=()=>{let e=d.reduce((e,t)=>(e[t.key]=D[t.key],e),{});navigator.clipboard?.writeText(JSON.stringify(e,null,2)).then(()=>R(!0),()=>R(!1))},_[7]=D,_[8]=b):b=_[8];let K=b;if(_[9]===Symbol.for("react.memo_cache_sentinel")?(x=()=>J(!0),h=[],_[9]=x,_[10]=h):(x=_[9],h=_[10]),(0,i.useEffect)(x,h),_[11]!==N||_[12]!==D?(g=()=>{N(D);try{sessionStorage.setItem("forge-vui",JSON.stringify(D))}catch{}},k=[D,N],_[11]=N,_[12]=D,_[13]=g,_[14]=k):(g=_[13],k=_[14]),(0,i.useEffect)(g,k),_[15]!==M?(S=()=>{if(!M)return;let e=window.setTimeout(()=>R(!1),1200);return()=>window.clearTimeout(e)},v=[M],_[15]=M,_[16]=S,_[17]=v):(S=_[16],v=_[17]),(0,i.useEffect)(S,v),!A)return null;_[18]===Symbol.for("react.memo_cache_sentinel")?(j=(0,t.jsx)("strong",{children:"Transition studio"}),_[18]=j):j=_[18],_[19]===Symbol.for("react.memo_cache_sentinel")?(w=()=>z(u),_[19]=w):w=_[19];let L=P?"hide":"show";return _[20]!==L?(C=(0,t.jsxs)(m,{children:[j,(0,t.jsx)("button",{type:"button",onClick:w,children:L})]}),_[20]=L,_[21]=C):C=_[21],_[22]!==M||_[23]!==K||_[24]!==B||_[25]!==P||_[26]!==D?(T=P?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p,{children:"Live in this tab · reloads retain settings while VUI is enabled. Reset restores production defaults. Camera and depth controls apply on desktop only."}),(0,t.jsx)(c,{children:d.map(e=>(0,t.jsxs)("label",{children:[(0,t.jsxs)("span",{children:[e.label,(0,t.jsx)("em",{children:D[e.key].toFixed(3)})]}),(0,t.jsx)("input",{type:"range",min:e.min,max:e.max,step:e.step,value:D[e.key],onChange:t=>U(e.key,Number(t.target.value))})]},e.key))}),(0,t.jsxs)(m,{children:[(0,t.jsx)("button",{type:"button",onClick:B,children:"reset"}),(0,t.jsx)("button",{type:"button",onClick:K,children:M?"copied":"copy settings"})]})]}):null,_[22]=M,_[23]=K,_[24]=B,_[25]=P,_[26]=D,_[27]=T):T=_[27],_[28]!==P||_[29]!==C||_[30]!==T?(I=(0,n.createPortal)((0,t.jsxs)(s,{"data-open":P,"data-lenis-prevent":!0,"aria-label":"Transition controls",children:[C,T]}),document.body),_[28]=P,_[29]=C,_[30]=T,_[31]=I):I=_[31],I};function u(e){return!e}f.displayName="ImagePlanesControls",e.s(["default",0,f],461139)}]);