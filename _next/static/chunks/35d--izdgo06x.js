(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,407500,e=>{e.v(t=>Promise.all(["static/chunks/2619pqauczhjr.js"].map(t=>e.l(t))).then(()=>t(975681)))},718917,e=>{e.v(t=>Promise.all(["static/chunks/3pgt5eg5ybvup.js"].map(t=>e.l(t))).then(()=>t(811067)))},64064,e=>{"use strict";var t=e.i(843476),n=e.i(500932),i=e.i(156569),l=e.i(800147),a=e.i(189897),c=e.i(494473),o=e.i(575509),s=e.i(212960),d=e.i(997053);let r=(0,d.default)(o.Div).attrs({as:"section"}).withConfig({componentId:"sc-e23cbf24-0"})(()=>d.css`
		position: relative;
		z-index: 1;

		background: ${(0,o.getBrand)("bc1")};
		padding-top: 50dvh;

		${o.bp.l`padding-top: 0;`}
	`),p=(0,d.default)(o.Div).withConfig({componentId:"sc-e23cbf24-1"})(()=>d.css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		gap: ${(0,o.getGap)("m")};

		${o.bp.l`
			position: sticky;
			top: 0;
			height: 100dvh;
		`}

		h1 {
			${s.displayL}

			color: ${(0,o.getBrand)("bc5")};
		}
	`),f=d.default.p.withConfig({componentId:"sc-e23cbf24-2"})(()=>d.css`
		display: flex;
		flex-direction: column;
		width: max-content;

		${o.bp.l`
			position: fixed;
			bottom: ${(0,o.getGap)("xl")};
			left: ${(0,o.getGap)("xl")};
		`}

		span {
			${s.captionL}
			color: ${(0,o.getBrand)("bc5",100)};
		}

		span:first-child {
			color: ${(0,o.getBrand)("bc5",55)};
		}
	`),g=(0,d.default)(o.Div).withConfig({componentId:"sc-e23cbf24-3"})(()=>d.css`
		display: flex;
		flex-direction: column;
		padding-bottom: ${(0,o.getGap)("huge")};

		${o.bp.l`
			padding-bottom: ${(0,o.getGap)("col")};
		`}
	`),h=(0,d.default)(o.Div).withConfig({componentId:"sc-e23cbf24-4"})(()=>d.css`
		display: flex;
		flex-direction: column;
		gap: ${(0,o.getGap)("m")};

		padding-top: ${(0,o.getGap)("huge")};
		padding-bottom: ${(0,o.getGap)("xl")};
		

		${o.bp.l`
			padding-top: 50dvh;
		`}

		p {
			${s.titleL}
			text-transform: none;
			color: ${(0,o.getBrand)("bc5",80)};
		}
	`),u=(0,d.default)(o.Div).withConfig({componentId:"sc-e23cbf24-5"})(()=>d.css`
		display: flex;
		flex-direction: column;
		gap: ${(0,o.getGap)("xl")};
	`),m=d.default.div.withConfig({componentId:"sc-e23cbf24-6"})(()=>d.css`
		display: flex;
		flex-direction: column;
		gap: ${(0,o.getGap)("m")};

		h2 {
			display: flex;
			flex-direction: column;

			${s.titleL}

			color: ${(0,o.getBrand)("bc5")};
			text-wrap: pretty;

			/* The section number — by attribute, since the AnimatedHeading wrappers
			   inside this h2 are spans too and must not pick this up. */
			[data-name='number'] {
				${s.headlineL}
				opacity: 0.2;
			}
		}

		p {
			${s.bodyS}

			color: ${(0,o.getBrand)("bc5",80)};
			text-wrap: pretty;
		}

		ul,
		ol {
			${s.bodyS}

			padding-left: 1.2em;
			color: ${(0,o.getBrand)("bc5",80)};
		}

		ul {
			list-style-type: disc;
		}

		ol {
			list-style-type: decimal;
		}

		a {
			color: inherit;
			text-decoration: underline;
			text-underline-offset: 0.2em;
		}
	`),x=e=>{let i,l,o,s,d,m,x,j,v,S,w,B,G,C,L,D,I=(0,n.c)(47),{routePath:k,title:_,description:P,sections:T,lastUpdated:U}=e;I[0]!==_?(i=(0,a.cleanSanityString)(_),I[0]=_,I[1]=i):i=I[1];let A=i;if(I[2]!==P||I[3]!==A||I[4]!==U||I[5]!==k||I[6]!==T){w=Symbol.for("react.early_return_sentinel");e:{let e,n,i,u,y,B=(0,a.cleanSanityString)(P);if(I[17]!==T?(e=T??[],I[17]=T,I[18]=e):e=I[18],m=e,!A){w=null;break e}d=r,S=k,s=c.default,I[19]!==A?(n=(0,t.jsx)("h1",{children:A}),I[19]=A,I[20]=n):n=I[20],I[21]===Symbol.for("react.memo_cache_sentinel")?(i=(0,t.jsx)("span",{children:"Last Updated"}),I[21]=i):i=I[21],I[22]!==U?(u=U?new Date(U).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}):"",I[22]=U,I[23]=u):u=I[23],I[24]!==u?(y=(0,t.jsxs)(f,{children:[i,(0,t.jsx)("span",{children:u})]}),I[24]=u,I[25]=y):y=I[25],I[26]!==y||I[27]!==n?(v=(0,t.jsxs)(p,{$l:"2/5",children:[n,y]}),I[26]=y,I[27]=n,I[28]=v):v=I[28],o=g,j="8/12",l=h,x=B?.split(/\r?\n/).filter(b).map($)}I[2]=P,I[3]=A,I[4]=U,I[5]=k,I[6]=T,I[7]=l,I[8]=o,I[9]=s,I[10]=d,I[11]=m,I[12]=x,I[13]=j,I[14]=v,I[15]=S,I[16]=w}else l=I[7],o=I[8],s=I[9],d=I[10],m=I[11],x=I[12],j=I[13],v=I[14],S=I[15],w=I[16];return w!==Symbol.for("react.early_return_sentinel")?w:(I[29]!==l||I[30]!==x?(B=(0,t.jsx)(l,{children:x}),I[29]=l,I[30]=x,I[31]=B):B=I[31],I[32]!==m?(G=m.length>0&&(0,t.jsx)(u,{children:m.map(y)}),I[32]=m,I[33]=G):G=I[33],I[34]!==o||I[35]!==j||I[36]!==B||I[37]!==G?(C=(0,t.jsxs)(o,{$l:j,children:[B,G]}),I[34]=o,I[35]=j,I[36]=B,I[37]=G,I[38]=C):C=I[38],I[39]!==s||I[40]!==v||I[41]!==C?(L=(0,t.jsxs)(s,{children:[v,C]}),I[39]=s,I[40]=v,I[41]=C,I[42]=L):L=I[42],I[43]!==d||I[44]!==L||I[45]!==S?(D=(0,t.jsx)(d,{"data-page-route":S,children:L}),I[43]=d,I[44]=L,I[45]=S,I[46]=D):D=I[46],D)};function b(e){return""!==e.trim()}function $(e){return(0,t.jsx)("p",{children:e},e)}function y(e,n){let c=(0,a.cleanSanityString)(e.heading),o=n+1<=9?`0${n+1}`:`${n+1}`;return(0,t.jsxs)(m,{children:[c&&(0,t.jsxs)("h2",{children:[(0,t.jsx)(i.default,{as:"span",children:(0,t.jsx)("span",{"data-name":"number",children:o})}),(0,t.jsx)(i.default,{as:"span",children:(0,t.jsx)("strong",{children:c})})]}),e.content&&(0,t.jsx)(l.default,{value:e.content})]},`${c??"section"}-${n.toString()}`)}x.displayName="LegalPage",e.s(["default",0,x],64064)}]);