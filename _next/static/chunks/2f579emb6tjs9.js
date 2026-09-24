(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,596082,e=>{"use strict";var n=e.i(843476),t=e.i(500932),i=e.i(101384),a=e.i(11438),o=e.i(523289),s=e.i(989970),r=e.i(592599),l=e.i(271645),c=e.i(174080),d=e.i(607561),u=e.i(918645),m=e.i(189897),h=e.i(399888),f=e.i(575509),g=e.i(212960),p=e.i(997053);let b=p.default.div.withConfig({componentId:"sc-2b81bec9-0"})(()=>p.css`
		display: flex;
		flex-direction: column;
	`),y=p.default.button.withConfig({componentId:"sc-2b81bec9-1"})(()=>p.css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: ${(0,f.getGap)("sm")};

		width: 100%;
		padding: 0;

		text-align: left;
		background: none;
		border: 0;
		cursor: pointer;

		transition: opacity 0.5s ${(0,f.getEase)("bezzy2")};
		

		@media (hover: hover) {
			&:hover {
				opacity: 0.8;
			}
		}
	`),v=p.default.h3.withConfig({componentId:"sc-2b81bec9-2"})(()=>p.css`
		${g.titleL}
		color: ${(0,f.getBrand)("bc5")};
	`),w=p.default.span.withConfig({componentId:"sc-2b81bec9-3"})(({$isOpen:e})=>p.css`
		display: grid;
		flex-shrink: 0;
		place-items: center;

		color: ${(0,f.getBrand)("bc5")};

		svg {
			--size: 1.2rem;
		}

		/* Points down when collapsed, up when open — the design's two states. */
		transform: rotate(${e?"180deg":"0deg"});
		/* Same curve and duration as the panel, so the two read as one movement. */
		transition: transform ${(0,f.getTime)("l")} ${(0,f.getEase)("bezzy2")};

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	`),x=p.default.div.withConfig({componentId:"sc-2b81bec9-4"})(({$isOpen:e})=>p.css`
		display: grid;
		grid-template-rows: ${e?"1fr":"0fr"};
		/* NOTE • bezzy is a hold-then-snap curve — dramatic for a reveal, wrong for a
		   size change, and at 0.3s it read as a pop rather than a movement. bezzy2
		   carries a long decelerating tail, so the section settles instead of
		   arriving all at once. The duration matches the panel's own slide. */
		transition: grid-template-rows ${(0,f.getTime)("l")} ${(0,f.getEase)("bezzy2")};

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	`),C=p.default.div.withConfig({componentId:"sc-2b81bec9-5"})(()=>p.css`
		min-height: 0;
		overflow: hidden;
	`),S=p.default.div.withConfig({componentId:"sc-2b81bec9-6"})(()=>p.css`
		display: flex;
		flex-direction: column;
		gap: ${(0,f.getGap)("sm")};

		padding-top: ${(0,f.getGap)("sm")};
	`),$=p.default.div.withConfig({componentId:"sc-2b81bec9-7"})(()=>p.css`
		${g.bodyL}

		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: ${(0,f.getGap)("sm")};
	`),k=p.default.span.withConfig({componentId:"sc-2b81bec9-8"})(()=>p.css`
		flex-shrink: 0;
		color: ${(0,f.alpha)("--brand-bc5",55)};
	`),E=p.default.span.withConfig({componentId:"sc-2b81bec9-9"})(()=>p.css`
		color: ${(0,f.getBrand)("bc5")};
		text-align: right;
	`),j=p.default.span.withConfig({componentId:"sc-2b81bec9-10"})(()=>p.css`
		color: ${(0,f.alpha)("--brand-bc5",60)};
	`),I=e=>{let i,a,s,r,c,d,u,m,h=(0,t.c)(23),{heading:f,rows:g,isOpen:p,onToggle:$}=e,k=(0,l.useId)();h[0]!==f?(i=(0,n.jsx)(v,{children:f}),h[0]=f,h[1]=i):i=h[1],h[2]===Symbol.for("react.memo_cache_sentinel")?(a=(0,n.jsx)(o.default,{type:"chevron"}),h[2]=a):a=h[2],h[3]!==p?(s=(0,n.jsx)(w,{$isOpen:p,"aria-hidden":!0,children:a}),h[3]=p,h[4]=s):s=h[4],h[5]!==p||h[6]!==$||h[7]!==k||h[8]!==i||h[9]!==s?(r=(0,n.jsxs)(y,{type:"button","aria-expanded":p,"aria-controls":k,onClick:$,children:[i,s]}),h[5]=p,h[6]=$,h[7]=k,h[8]=i,h[9]=s,h[10]=r):r=h[10];let E=!p;return h[11]!==g?(c=g.map(T),h[11]=g,h[12]=c):c=h[12],h[13]!==c?(d=(0,n.jsx)(C,{children:(0,n.jsx)(S,{children:c})}),h[13]=c,h[14]=d):d=h[14],h[15]!==p||h[16]!==k||h[17]!==E||h[18]!==d?(u=(0,n.jsx)(x,{id:k,$isOpen:p,inert:E,children:d}),h[15]=p,h[16]=k,h[17]=E,h[18]=d,h[19]=u):u=h[19],h[20]!==r||h[21]!==u?(m=(0,n.jsxs)(b,{children:[r,u]}),h[20]=r,h[21]=u,h[22]=m):m=h[22],m};function T(e){return e.label?(0,n.jsxs)($,{children:[(0,n.jsx)(k,{children:e.label}),(0,n.jsx)(E,{children:e.value})]},e.key):(0,n.jsx)($,{children:(0,n.jsx)(j,{children:e.value})},e.key)}I.displayName="Section";var A=e.i(124821);let O=(0,f.getEase)("bezzy3"),z=p.default.div.withConfig({componentId:"sc-7922b40f-0"})(()=>p.css`
		position: fixed;
		inset: 0;
		z-index: 1002;

		display: flex;
		justify-content: flex-end;
	`),P=p.default.button.withConfig({componentId:"sc-7922b40f-1"})(({$isOpen:e})=>p.css`
		position: absolute;
		inset: 0;
		z-index: 0;

		width: 100%;
		height: 100%;
		padding: 0;

		background: ${(0,f.alpha)("--brand-bc1",80)};
		backdrop-filter: blur(0.8rem);
		border: 0;
		cursor: pointer;

		opacity: ${+!!e};
		transition: opacity ${1200}ms ${O};
	`),_=(0,p.default)(f.Div).attrs({as:"aside"}).withConfig({componentId:"sc-7922b40f-2"})(({$isOpen:e})=>p.css`
		position: relative;
		z-index: 1;

		display: flex;
		flex-direction: column;

		width: 100%;
		height: 100dvh;

		background: ${(0,f.getBrand)("bc2")};

		/* Mobile rises from the bottom and takes the full screen. */
		transform: translateY(${e?"0":"100%"});
		transition: transform ${1200}ms ${O};

		${f.bp.l`
			/* Desktop settles against the right edge at the design's 640px. */
			width: 64rem;
			transform: translateX(${e?"0":"100%"});
		`}

		@media (prefers-reduced-motion: reduce) {
			transform: none;
			opacity: ${+!!e};
			transition: opacity ${(0,f.getTime)("s")} linear;
		}
	`),B=p.default.div.withConfig({componentId:"sc-7922b40f-3"})(()=>p.css`
		flex: 1;
		min-height: 0;

		padding: ${(0,f.getGap)("xl")};
		overflow-y: auto;
		overscroll-behavior: contain;
	`),F=p.default.div.withConfig({componentId:"sc-7922b40f-4"})(()=>p.css`
		display: flex;
		flex-direction: column;
		gap: ${(0,f.getGap)("m")};
	`),G=p.default.header.withConfig({componentId:"sc-7922b40f-5"})(()=>p.css`
		display: flex;
		flex-direction: column;
		gap: ${(0,f.getGap)("m")};
	`),R=p.default.div.withConfig({componentId:"sc-7922b40f-6"})(()=>p.css`
		display: flex;
		align-items: center;
		justify-content: space-between;
	`),L=p.default.p.withConfig({componentId:"sc-7922b40f-7"})(()=>p.css`
		${g.captionL}
		color: ${(0,f.alpha)("--brand-bc5",55)};
		text-transform: uppercase;
	`),M=p.default.button.withConfig({componentId:"sc-7922b40f-8"})(()=>p.css`
		position: absolute;
		top: 0; right: 0;

		display: grid;
		place-items: center;

		padding: ${(0,f.getGap)("l")};

		color: ${(0,f.getBrand)("bc5")};
		background: none;
		border: 0;
		cursor: pointer;
		transition: opacity 0.5s ${(0,f.getEase)("bezzy2")};

		/* NOTE • The close glyph is two line paths, so it has no area to fill — it
		   only shows when stroked. Same as the other two modals' close buttons. */
		svg {
			--size: 1.6rem;

			stroke: ${(0,f.getBrand)("bc5")};
			stroke-width: 1;
		}

		&:hover {
			opacity: 0.6;
		}

		
	`),D=p.default.div.withConfig({componentId:"sc-7922b40f-9"})(()=>p.css`
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: ${(0,f.getGap)("sm")};
	`),N=p.default.h2.withConfig({componentId:"sc-7922b40f-10"})(()=>p.css`
		${g.titleL}
		color: ${(0,f.getBrand)("bc5")};
	`),H=p.default.p.withConfig({componentId:"sc-7922b40f-11"})(()=>p.css`
		${g.titleL}
		flex-shrink: 0;
		color: ${(0,f.getBrand)("bc4")};
		font-style: italic;
		white-space: nowrap;
	`),W=p.default.hr.withConfig({componentId:"sc-7922b40f-12"})(()=>p.css`
		height: 1px;
		margin: 0;

		background: ${(0,f.alpha)("--brand-bc5",10)};
		border: 0;
	`),K=p.default.div.withConfig({componentId:"sc-7922b40f-13"})(()=>p.css`
		padding-top: ${(0,f.getGap)("m")};
	`),V=p.default.p.withConfig({componentId:"sc-7922b40f-14"})(()=>p.css`
		${g.bodyL}
		color: ${(0,f.alpha)("--brand-bc5",60)};
	`),q=e=>{let f,g,p,b,y,v,w,x,C,S,$,k,E,j,T,O,q,Y,X,J,Q,Z,ee,en,et,ei,ea,eo,es,er,el,ec,ed,eu,em,eh=(0,t.c)(80),{specs:ef,makeAndModel:eg,buildName:ep,price:eb,onClose:ey,onPurchase:ev}=e,{isReducedMotion:ew}=(0,l.use)(i.PerformanceContext),ex=(0,l.useRef)(null),eC=(0,l.useRef)(null),eS=(0,l.useRef)(null),e$=(0,l.useRef)(null),ek=(0,l.useRef)(null),eE=(0,l.useRef)(null);if(eh[0]!==ef){let e,n,t,i,a,o,s;e={overview:ef?.overview,performance:ef?.performance,dimensions:ef?.dimensions,runningCosts:ef?.runningCosts,history:ef?.history},n=(0,m.cleanSanityString)(ef?.overview?.fuelType),t=ef?.history?.motNotDue?"Not due yet":ef?.history?.motInvalid?"Invalid":ef?.history?.motExpiry?`Valid until ${ef.history.motExpiry.split("-").reverse().join("/")}`:null,i=h.SPEC_SECTIONS.map(i=>{let a=[...i.fields.map(n=>({meta:n,source:e[i.name]})),...(i.mirrors??[]).flatMap(n=>{let t=(0,h.getSpecSectionMeta)(n.section)?.fields.find(e=>e.name===n.field);return t?[{meta:t,source:e[n.section]}]:[]})].filter(({meta:e})=>(0,h.isSpecFieldAskable)(e,n)).map(({meta:e,source:n})=>({meta:e,value:n?.[e.name]})).filter(e=>"string"==typeof e.value&&e.value.length>0).map(({meta:e,value:n})=>({name:e.name,label:e.heading,value:(0,h.formatSpecValue)(n,e)}));return"history"===i.name&&t&&a.push({name:"mot",label:"MOT",value:t}),{name:i.name,heading:i.heading,rows:a}}).filter(e=>e.rows.length>0),a={interior:ef?.featureSections?.interior,exterior:ef?.featureSections?.exterior,safetyAndSecurity:ef?.featureSections?.safetyAndSecurity,audioAndComms:ef?.featureSections?.audioAndComms,driversAssistance:ef?.featureSections?.driversAssistance,illumination:ef?.featureSections?.illumination},o=h.FEATURE_SECTIONS.map(e=>({name:e.name,heading:e.heading,items:a[e.name]??[]})).filter(e=>e.items.length>0),f={sections:i,features:o,customSections:s=(ef?.customSections??[]).map(e=>({key:e._key,heading:e.title??"",items:(e.items??[]).map(e=>({key:e._key,label:e.label||void 0,value:e.value??""}))})).filter(e=>e.items.length>0),hasContent:i.length>0||o.length>0||s.length>0},eh[0]=ef,eh[1]=f}else f=eh[1];let ej=f;if(eh[2]!==ej)g=[...ej.sections.map(e=>({key:e.name,heading:e.heading,rows:e.rows.map(e=>({key:e.name,label:e.label,value:e.value}))})),...ej.features.map(e=>({key:e.name,heading:e.heading,rows:e.items.map((n,t)=>({key:`${e.name}-${t}`,value:n}))})),...ej.customSections.map(e=>({key:e.key,heading:e.heading,rows:e.items.map(e=>({key:e.key,label:e.label,value:e.value}))}))],eh[2]=ej,eh[3]=g;else g=eh[3];let eI=g,eT=eg||ep||"Full specification";eh[4]!==ew||eh[5]!==eI?(p=()=>ew?eI.slice(0,1).map(U):[],eh[4]=ew,eh[5]=eI,eh[6]=p):p=eh[6];let[eA,eO]=(0,l.useState)(p),[ez,eP]=(0,l.useState)(!1),[e_,eB]=(0,l.useState)(!1),[eF,eG]=(0,l.useState)(!1);eh[7]===Symbol.for("react.memo_cache_sentinel")?(b=e=>{eO(n=>n.includes(e)?n.filter(n=>n!==e):[...n,e])},eh[7]=b):b=eh[7];let eR=b;eh[8]!==e_||eh[9]!==ew||eh[10]!==ey?(y=()=>{e_||(eB(!0),eP(!1),eE.current=window.setTimeout(ey,1200*!ew))},eh[8]=e_,eh[9]=ew,eh[10]=ey,eh[11]=y):y=eh[11];let eL=y;eh[12]!==e_||eh[13]!==ew||eh[14]!==ey||eh[15]!==ev?(v=()=>{e_||(eB(!0),eP(!1),ev(),eE.current=window.setTimeout(ey,1200*!ew))},eh[12]=e_,eh[13]=ew,eh[14]=ey,eh[15]=ev,eh[16]=v):v=eh[16];let eM=v;eh[17]!==ew?(w=()=>{if(ew)return void eP(!0);let e=0,n=requestAnimationFrame(()=>{e=requestAnimationFrame(()=>eP(!0))});return()=>{cancelAnimationFrame(n),cancelAnimationFrame(e)}},x=[ew],eh[17]=ew,eh[18]=w,eh[19]=x):(w=eh[18],x=eh[19]),(0,l.useEffect)(w,x),eh[20]!==e_||eh[21]!==ew||eh[22]!==ez||eh[23]!==eI[0]?(C=()=>{let e=eS.current;if(!e||ew)return;let n=[...e.children].reduce((e,n)=>{let t=e.at(-1);return t?.length===1&&t[0]?.tagName==="HR"?t.push(n):e.push([n]),e},[]);if(!n.length)return;if(e_){let e=s.default.timeline();n.forEach((n,t)=>{e.to(n,{opacity:0,duration:.35,ease:"power1.in"},.05*t)});return}if(!ez)return void s.default.set(n.flat(),{opacity:0,xPercent:20});let t=s.default.timeline({delay:.35});n.forEach((e,n)=>{t.fromTo(e,{opacity:0,xPercent:20},{opacity:1,xPercent:0,duration:.6,ease:"power2.out"},.08*n)});let i=Math.min(4,n.length)-1;t.call(()=>{let e=eI[0];e&&eO(n=>n.length?n:[e.key])},void 0,.08*i+.6)},eh[20]=e_,eh[21]=ew,eh[22]=ez,eh[23]=eI[0],eh[24]=C):C=eh[24],eh[25]!==e_||eh[26]!==ew||eh[27]!==ez||eh[28]!==eI?(S={scope:eS,dependencies:[ez,e_,ew,eI]},eh[25]=e_,eh[26]=ew,eh[27]=ez,eh[28]=eI,eh[29]=S):S=eh[29],(0,d.useAnimation)(C,S),eh[30]!==ew?($=()=>{let e=eC.current,n=eS.current;if(ew||!e||!n)return;let t=new r.default({wrapper:e,content:n,autoRaf:!1});ek.current=t;let i=e=>t.raf(1e3*e);return s.default.ticker.add(i),()=>{s.default.ticker.remove(i),t.destroy(),ek.current=null}},k=[ew],eh[30]=ew,eh[31]=$,eh[32]=k):($=eh[31],k=eh[32]),(0,l.useEffect)($,k),eh[33]===Symbol.for("react.memo_cache_sentinel")?(E=()=>{let e=eS.current,n=ek.current;if(!e||!n)return;let t=new ResizeObserver(()=>n.resize());return t.observe(e),()=>t.disconnect()},j=[],eh[33]=E,eh[34]=j):(E=eh[33],j=eh[34]),(0,l.useEffect)(E,j),eh[35]!==eL?(T=()=>{let e=e=>{"Escape"===e.key&&eL()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},O=[eL],eh[35]=eL,eh[36]=T,eh[37]=O):(T=eh[36],O=eh[37]),(0,l.useEffect)(T,O),(0,u.useFocusTrap)(ex,ez&&!e_),eh[38]!==e_||eh[39]!==ez?(q=()=>{ez&&!e_&&e$.current?.focus()},Y=[ez,e_],eh[38]=e_,eh[39]=ez,eh[40]=q,eh[41]=Y):(q=eh[40],Y=eh[41]),(0,l.useEffect)(q,Y),eh[42]===Symbol.for("react.memo_cache_sentinel")?(X=()=>()=>{eE.current&&window.clearTimeout(eE.current)},J=[],eh[42]=X,eh[43]=J):(X=eh[42],J=eh[43]),(0,l.useEffect)(X,J);let eD=`${eT} full specification`;eh[44]===Symbol.for("react.memo_cache_sentinel")?(Q=()=>eG(!0),Z=()=>eG(!1),eh[44]=Q,eh[45]=Z):(Q=eh[44],Z=eh[45]),eh[46]!==eL||eh[47]!==ez?(ee=(0,n.jsx)(P,{type:"button","aria-label":"Close specification",tabIndex:-1,$isOpen:ez,onClick:eL,onMouseEnter:Q,onMouseLeave:Z}),eh[46]=eL,eh[47]=ez,eh[48]=ee):ee=eh[48];let eN=eF&&!e_;return eh[49]!==eN?(en=(0,n.jsx)(a.default,{isActive:eN,label:"Close",isLight:!0}),eh[49]=eN,eh[50]=en):en=eh[50],eh[51]===Symbol.for("react.memo_cache_sentinel")?(et=(0,n.jsx)(o.default,{type:"close"}),eh[51]=et):et=eh[51],eh[52]!==eL?(ei=(0,n.jsx)(M,{ref:e$,type:"button","aria-label":"Close specification",onClick:eL,children:et}),eh[52]=eL,eh[53]=ei):ei=eh[53],eh[54]===Symbol.for("react.memo_cache_sentinel")?(ea=(0,n.jsx)(R,{children:(0,n.jsx)(L,{children:"Full specification"})}),eh[54]=ea):ea=eh[54],eh[55]!==eT?(eo=(0,n.jsx)(N,{children:eT}),eh[55]=eT,eh[56]=eo):eo=eh[56],eh[57]!==eb?(es=eb?(0,n.jsx)(H,{children:eb}):null,eh[57]=eb,eh[58]=es):es=eh[58],eh[59]!==eo||eh[60]!==es?(er=(0,n.jsxs)(G,{children:[ea,(0,n.jsxs)(D,{children:[eo,es]})]}),eh[59]=eo,eh[60]=es,eh[61]=er):er=eh[61],eh[62]!==eA||eh[63]!==eI?(el=eI.length?eI.map(e=>(0,n.jsxs)(l.Fragment,{children:[(0,n.jsx)(W,{}),(0,n.jsx)(I,{heading:e.heading,rows:e.rows,isOpen:eA.includes(e.key),onToggle:()=>eR(e.key)})]},e.key)):(0,n.jsx)(V,{children:"Full specification for this build is coming soon."}),eh[62]=eA,eh[63]=eI,eh[64]=el):el=eh[64],eh[65]!==eM?(ec=(0,n.jsx)(K,{children:(0,n.jsx)(A.default,{onClick:eM,aria:"Purchase this build",isButton:!0,label:"Purchase this build",isFullWidth:!0})}),eh[65]=eM,eh[66]=ec):ec=eh[66],eh[67]!==ei||eh[68]!==er||eh[69]!==el||eh[70]!==ec?(ed=(0,n.jsx)(B,{ref:eC,children:(0,n.jsxs)(F,{ref:eS,children:[ei,er,el,ec]})}),eh[67]=ei,eh[68]=er,eh[69]=el,eh[70]=ec,eh[71]=ed):ed=eh[71],eh[72]!==ez||eh[73]!==ed?(eu=(0,n.jsx)(_,{$isOpen:ez,children:ed}),eh[72]=ez,eh[73]=ed,eh[74]=eu):eu=eh[74],eh[75]!==eD||eh[76]!==ee||eh[77]!==en||eh[78]!==eu?(em=(0,c.createPortal)((0,n.jsxs)(z,{ref:ex,role:"dialog","aria-modal":"true","aria-label":eD,children:[ee,en,eu]}),document.body),eh[75]=eD,eh[76]=ee,eh[77]=en,eh[78]=eu,eh[79]=em):em=eh[79],em};function U(e){return e.key}q.displayName="BuildSpecsModal",e.s(["default",0,q],596082)},189686,function(e){e.n(e.i(596082))},399888,e=>{"use strict";let n=[{name:"overview",heading:"Overview",fields:[{name:"mileage",heading:"Mileage",unit:"miles",hint:"e.g. 32,000"},{name:"registration",heading:"Registration",hint:"e.g. 2023"},{name:"fuelType",heading:"Fuel Type",options:["Petrol","Diesel","Hybrid","Electric"]},{name:"bodyType",heading:"Body Type",options:["Coupe","Saloon","Hatchback","Estate","SUV","Convertible","Pickup","Campervan"]},{name:"engine",heading:"Engine",hint:"e.g. 4.0L",combustionOnly:!0},{name:"gearbox",heading:"Gearbox",options:["Automatic","Manual"]},{name:"doors",heading:"Doors",hint:"e.g. 2"},{name:"seats",heading:"Seats",hint:"e.g. 4"},{name:"emissionClass",heading:"Emission Class",hint:"e.g. Euro 6",combustionOnly:!0},{name:"bodyColour",heading:"Body Colour",options:["White","Black","Silver","Grey","Gunmetal","Blue","Navy","Red","Maroon","Green","Yellow","Orange","Brown","Beige","Cream","Gold","Bronze","Purple","Pink","Mixed / Other"],searchable:!0},{name:"drivetrain",heading:"Drivetrain",options:["AWD","FWD","RWD"]},{name:"range",heading:"Range",unit:"miles",hint:"e.g. 280",electrifiedOnly:!0}]},{name:"performance",heading:"Performance",fields:[{name:"acceleration",heading:"0 – 60 mph",unit:"s",hint:"e.g. 3.2"},{name:"topSpeed",heading:"Top Speed",unit:"mph",hint:"e.g. 184"},{name:"cylinders",heading:"Cylinders",options:["0","1","2","3","4","5","6","7","8","9","10","11","12"],combustionOnly:!0},{name:"valves",heading:"Valves",options:["0","2","4","6","8","12","16","20","24","30","32","40","48","60","64"],combustionOnly:!0},{name:"power",heading:"Engine Power",unit:"bhp",hint:"e.g. 518"},{name:"torque",heading:"Engine Torque",unit:"nm",hint:"e.g. 465"},{name:"mpg",heading:"Miles Per Gallon",unit:"mpg",hint:"e.g. 21.4",combustionOnly:!0}],mirrors:[{section:"overview",field:"range"}]},{name:"dimensions",heading:"Size & Dimensions",fields:[{name:"height",heading:"Height",unit:"mm",hint:"e.g. 1,322"},{name:"length",heading:"Length",unit:"mm",hint:"e.g. 4,572"},{name:"width",heading:"Width",unit:"mm",hint:"e.g. 2,027"},{name:"wheelbase",heading:"Wheelbase",unit:"mm",hint:"e.g. 2,457"},{name:"fuelTankCapacity",heading:"Fuel Tank Capacity",unit:"L",hint:"e.g. 64",combustionOnly:!0},{name:"minKerbWeight",heading:"Minimum Kerb Weight",unit:"kg",hint:"e.g. 1,450"}]},{name:"runningCosts",heading:"Running Costs",fields:[{name:"co2",heading:"CO₂ Emissions",unit:"g/km",hint:"e.g. 205",combustionOnly:!0},{name:"insuranceGroup",heading:"Insurance Group",options:Array.from({length:50},(e,n)=>String(n+1)),searchable:!0,hint:"e.g. 50, or a suffixed group such as 20E"},{name:"annualTax",heading:"Annual Tax",isCurrency:!0,hint:"e.g. 250"}]},{name:"history",heading:"Vehicle History",fields:[{name:"owners",heading:"Owners",hint:"e.g. 4"},{name:"keys",heading:"Keys",hint:"e.g. 2"},{name:"serviceHistory",heading:"Service History",options:["Full Service History","Partial Service History","No Service History"]}]}];e.s(["FEATURE_SECTIONS",0,[{name:"interior",heading:"Interior"},{name:"exterior",heading:"Exterior"},{name:"safetyAndSecurity",heading:"Safety & Security"},{name:"audioAndComms",heading:"Audio & Comms"},{name:"driversAssistance",heading:"Drivers Assistance"},{name:"illumination",heading:"Illumination"}],"SPEC_SECTIONS",0,n,"formatSpecValue",0,(e,n)=>n.isCurrency?`\xa3${e}`:n.unit?`${e} ${n.unit}`:e,"getSpecSectionMeta",0,e=>n.find(n=>n.name===e),"isSpecFieldAskable",0,(e,n)=>e.combustionOnly?"Electric"!==n:!e.electrifiedOnly||"Electric"===n||"Hybrid"===n])},918645,e=>{"use strict";var n=e.i(500932),t=e.i(271645);function i(e){return!e.hasAttribute("disabled")&&null!==e.offsetParent}e.s(["useFocusTrap",0,(e,a)=>{let o,s,r=(0,n.c)(4);r[0]!==e||r[1]!==a?(o=()=>{if(!a||!e.current)return;let n=e.current,t=document.activeElement,o=e=>{if("Tab"!==e.key)return;let t=Array.from(n.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')).filter(i);if(!t.length)return;let a=t[0],o=t[t.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault(),o.focus();return}e.shiftKey||document.activeElement!==o||(e.preventDefault(),a.focus())};return n.addEventListener("keydown",o),()=>{n.removeEventListener("keydown",o),t?.focus()}},s=[e,a],r[0]=e,r[1]=a,r[2]=o,r[3]=s):(o=r[2],s=r[3]),(0,t.useEffect)(o,s)}])}]);