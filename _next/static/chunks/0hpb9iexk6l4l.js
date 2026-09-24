(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,722538,t=>{"use strict";var e=t.i(843476),r=t.i(500932),i=t.i(271645),a=t.i(174080),n=t.i(847873),l=t.i(575509),s=t.i(997053);let o=(0,s.default)(l.Div).attrs({as:"aside"}).withConfig({componentId:"sc-d7c7b8d4-0"})(()=>s.css`
		position: fixed;
		inset: auto 1.6rem 1.6rem auto;
		z-index: 9999;
		width: min(32rem, calc(100vw - 3.2rem));
		padding: 1.6rem;
		border: 1px solid #555;
		border-radius: 0.8rem;
		background: #171717;
		color: #fff;
		font: 14px/1.5 system-ui, sans-serif;
		pointer-events: auto;
		label { display: grid; gap: 0.6rem; margin-block: 1.4rem; }
		input { width: 100%; accent-color: #fff; }
		p { margin-block: 1rem; color: #bbb; font-size: 12px; }
		button {
			min-height: 36px;
			padding: 0.6rem 1rem;
			border: 1px solid #777;
			border-radius: 0.4rem;
			color: inherit;
			background: #333;
			font: inherit;
			cursor: pointer;
		}
	`),d=(0,s.default)(l.Div).withConfig({componentId:"sc-d7c7b8d4-1"})(()=>s.css`
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	`),h=(t,e,r)=>{let i=new URLSearchParams(window.location.search).get(t);if(!i?.trim())return e;let a=Number(i);return Number.isFinite(a)?Math.min(r,Math.max(0,a)):e},c=t=>{let l,s,c,m,u,f,g,b,x,S,w,T,X,A,E,N,y,R,P,_,L,M,Y=(0,r.c)(63),{base:j,onChange:v,onClose:C}=t;Y[0]!==j?(l={...n.PLANE_CONFIG,...j},Y[0]=j,Y[1]=l):l=Y[1];let O=l;Y[2]!==O.depthStrength?(s=()=>h("parallax-depth",O.depthStrength,.012),Y[2]=O.depthStrength,Y[3]=s):s=Y[3];let[k,G]=(0,i.useState)(s),[H,V]=(0,i.useState)(p);Y[4]!==O.driftX||Y[5]!==O.driftY||Y[6]!==O.tiltX||Y[7]!==O.tiltY||Y[8]!==k||Y[9]!==v||Y[10]!==H?(c=()=>{v({depthStrength:k,tiltX:O.tiltX/n.PARALLAX_MOVEMENT_STRENGTH*H,tiltY:O.tiltY/n.PARALLAX_MOVEMENT_STRENGTH*H,driftX:O.driftX/n.PARALLAX_MOVEMENT_STRENGTH*H,driftY:O.driftY/n.PARALLAX_MOVEMENT_STRENGTH*H})},Y[4]=O.driftX,Y[5]=O.driftY,Y[6]=O.tiltX,Y[7]=O.tiltY,Y[8]=k,Y[9]=v,Y[10]=H,Y[11]=c):c=Y[11],Y[12]!==O||Y[13]!==k||Y[14]!==v||Y[15]!==H?(m=[O,k,H,v],Y[12]=O,Y[13]=k,Y[14]=v,Y[15]=H,Y[16]=m):m=Y[16],(0,i.useEffect)(c,m),Y[17]===Symbol.for("react.memo_cache_sentinel")?(u=(t,e)=>{G(t),V(e);let r=new URL(window.location.href);r.searchParams.set("parallax-depth",String(t)),r.searchParams.set("parallax-strength",String(e)),window.history.replaceState(window.history.state,"",r)},Y[17]=u):u=Y[17];let D=u;Y[18]!==O.depthStrength||Y[19]!==O.driftX||Y[20]!==O.driftY||Y[21]!==O.tiltX||Y[22]!==O.tiltY||Y[23]!==v||Y[24]!==C?(f=()=>{v({depthStrength:O.depthStrength,tiltX:O.tiltX,tiltY:O.tiltY,driftX:O.driftX,driftY:O.driftY});let t=new URL(window.location.href);for(let e of["parallax-debug","parallax-depth","parallax-strength"])t.searchParams.delete(e);window.history.replaceState(window.history.state,"",t),C()},Y[18]=O.depthStrength,Y[19]=O.driftX,Y[20]=O.driftY,Y[21]=O.tiltX,Y[22]=O.tiltY,Y[23]=v,Y[24]=C,Y[25]=f):f=Y[25];let U=f;return Y[26]===Symbol.for("react.memo_cache_sentinel")?(g=(0,e.jsx)("strong",{children:"Parallax tuning"}),b=(0,e.jsx)("p",{children:"Only this tab. Nothing is saved to the site. Desktop mouse controls."}),Y[26]=g,Y[27]=b):(g=Y[26],b=Y[27]),Y[28]!==k?(x=k.toFixed(5),Y[28]=k,Y[29]=x):x=Y[29],Y[30]!==x?(S=(0,e.jsxs)("span",{children:["Depth displacement: ",x]}),Y[30]=x,Y[31]=S):S=Y[31],Y[32]!==H?(w=t=>D(Number(t.target.value),H),Y[32]=H,Y[33]=w):w=Y[33],Y[34]!==k||Y[35]!==w?(T=(0,e.jsx)("input",{"aria-label":"Depth displacement",type:"range",min:0,max:.012,step:25e-5,value:k,onChange:w}),Y[34]=k,Y[35]=w,Y[36]=T):T=Y[36],Y[37]!==S||Y[38]!==T?(X=(0,e.jsxs)("label",{children:[S,T]}),Y[37]=S,Y[38]=T,Y[39]=X):X=Y[39],Y[40]!==H?(A=H.toFixed(2),Y[40]=H,Y[41]=A):A=Y[41],Y[42]!==A?(E=(0,e.jsxs)("span",{children:["Movement strength: ",A,"×"]}),Y[42]=A,Y[43]=E):E=Y[43],Y[44]!==k?(N=t=>D(k,Number(t.target.value)),Y[44]=k,Y[45]=N):N=Y[45],Y[46]!==H||Y[47]!==N?(y=(0,e.jsx)("input",{"aria-label":"Movement strength",type:"range",min:0,max:2,step:.05,value:H,onChange:N}),Y[46]=H,Y[47]=N,Y[48]=y):y=Y[48],Y[49]!==E||Y[50]!==y?(R=(0,e.jsxs)("label",{children:[E,y]}),Y[49]=E,Y[50]=y,Y[51]=R):R=Y[51],Y[52]!==O.depthStrength?(P=(0,e.jsx)("button",{type:"button",onClick:()=>D(O.depthStrength,n.PARALLAX_MOVEMENT_STRENGTH),children:"Reset"}),Y[52]=O.depthStrength,Y[53]=P):P=Y[53],Y[54]!==U?(_=(0,e.jsx)("button",{type:"button",onClick:U,children:"Close and reset"}),Y[54]=U,Y[55]=_):_=Y[55],Y[56]!==P||Y[57]!==_?(L=(0,e.jsxs)(d,{children:[P,_]}),Y[56]=P,Y[57]=_,Y[58]=L):L=Y[58],Y[59]!==X||Y[60]!==R||Y[61]!==L?(M=(0,a.createPortal)((0,e.jsxs)(o,{"aria-label":"Parallax controls","data-lenis-prevent":!0,children:[g,b,X,R,L]}),document.body),Y[59]=X,Y[60]=R,Y[61]=L,Y[62]=M):M=Y[62],M};function p(){return h("parallax-strength",n.PARALLAX_MOVEMENT_STRENGTH,2)}c.displayName="ParallaxControls",t.s(["default",0,c],722538)}]);