(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,56504,e=>{"use strict";e.s(["t",0,function(e){return"object"==typeof e&&!!e&&!Array.isArray(e)}])},446205,328368,e=>{"use strict";var t=Object.defineProperty,r=(e,r)=>{let i={};for(var n in e)t(i,n,{get:e[n],enumerable:!0});return r||t(i,Symbol.toStringTag,{value:"Module"}),i};e.s(["t",0,r],328368);var i=e.i(56504),n=r({fromString:()=>p,get:()=>d,isIndexSegment:()=>l,isIndexTuple:()=>u,isKeySegment:()=>c,reKeySegment:()=>a,toString:()=>f});let o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/_key\s*==\s*['"](.*)['"]/,s=/^\d*:\d*$/;function l(e){return"number"==typeof e||"string"==typeof e&&/^\[\d+\]$/.test(e)}function c(e){return"string"==typeof e?a.test(e.trim()):"object"==typeof e&&"_key"in e}function u(e){if("string"==typeof e&&s.test(e))return!0;if(!Array.isArray(e)||2!==e.length)return!1;let[t,r]=e;return("number"==typeof t||""===t)&&("number"==typeof r||""===r)}function d(e,t,r){let i="string"==typeof t?p(t):t;if(!Array.isArray(i))throw Error("Path must be an array or a string");let n=e;for(let e=0;e<i.length;e++){let t=i[e];if(l(t)){if(!Array.isArray(n))return r;n=n[t]}if(c(t)){if(!Array.isArray(n))return r;n=n.find(e=>e._key===t._key)}if("string"==typeof t&&(n="object"==typeof n&&n?n[t]:void 0),void 0===n)return r}return n}function f(e){if(!Array.isArray(e))throw Error("Path is not an array");return e.reduce((e,t,r)=>{let i=typeof t;if("number"===i)return`${e}[${t}]`;if("string"===i)return`${e}${0===r?"":"."}${t}`;if(c(t)&&t._key)return`${e}[_key=="${t._key}"]`;if(Array.isArray(t)){let[r,i]=t;return`${e}[${r}:${i}]`}throw Error(`Unsupported path segment \`${JSON.stringify(t)}\``)},"")}function p(e){if("string"!=typeof e)throw Error("Path is not a string");let t=e.match(o);if(!t)throw Error("Invalid path string");return t.map(h)}function h(e){return l(e)?Number(e.replace(/[^\d]/g,"")):c(e)?{_key:e.match(a)[1]}:u(e)?function(e){let[t,r]=e.split(":").map(e=>""===e?e:Number(e));return[t,r]}(e):e}let g="drafts",m="versions",v=`${g}.`,b=`${m}.`;function y(e){return e.startsWith(v)}function w(e){return e.startsWith(b)}function x(e){return!y(e)&&!w(e)}function $(e){if(!w(e))return;let[t,r,...i]=e.split(".");return r}function E(e){if(w(e))return e.split(".").slice(2).join(".");if(y(e))return e.slice(v.length);if(x(e))return e;throw Error(`Unable to resolve a published id from "${e}"`)}let T={"\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","'":"\\'","\\":"\\\\"},A={"\\f":"\f","\\n":"\n","\\r":"\r","\\t":"	","\\'":"'","\\\\":"\\"};function S(e){return`$${e.map(e=>"string"==typeof e?`['${e.replace(/[\f\n\r\t'\\]/g,e=>T[e])}']`:"number"==typeof e?`[${e}]`:""===e._key?`[${e._index}]`:`[?(@._key=='${e._key.replace(/['\\]/g,e=>T[e])}')]`).join("")}`}function I(e){let t=[],r=/\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g,i;for(;null!==(i=r.exec(e));){if(void 0!==i[1]){let e=i[1].replace(/\\(\\|f|n|r|t|')/g,e=>A[e]);t.push(e);continue}if(void 0!==i[2]){t.push(parseInt(i[2],10));continue}if(void 0!==i[3]){let e=i[3].replace(/\\(\\')/g,e=>A[e]);t.push({_key:e,_index:-1});continue}}return t}function _(e){return e.map(e=>{if("string"==typeof e||"number"==typeof e)return e;if(""!==e._key)return{_key:e._key};if(-1!==e._index)return e._index;throw Error(`invalid segment:${JSON.stringify(e)}`)})}function R(e){return e.map(e=>{if("string"==typeof e||"number"==typeof e)return e;if(-1!==e._index)return e._index;throw Error(`invalid segment:${JSON.stringify(e)}`)})}function j(e,t){if(!t?.mappings)return;let r=S(R(e));if(void 0!==t.mappings[r])return{mapping:t.mappings[r],matchedPath:r,pathSuffix:""};let i=R(e).map(e=>"string"==typeof e?`['${e.replace(/[\f\n\r\t'\\]/g,e=>T[e])}']`:"number"==typeof e?`[${e}]`:""===e._key?`[${e._index}]`:`[?(@._key=='${e._key.replace(/['\\]/g,e=>T[e])}')]`);for(let e=i.length-1;e>=0;e--){let n=`$${i.slice(0,e).join("")}`,o=t.mappings[n];if(o)return{mapping:o,matchedPath:n,pathSuffix:r.substring(n.length)}}}function k(e){let t="string"==typeof e?e:e.baseUrl;return"/"!==t&&(t=t.replace(/\/$/,"")),"string"==typeof e?{baseUrl:t}:{...e,baseUrl:t}}e.s(["S",0,f,"_",0,x,"a",0,j,"b",0,a,"c",0,I,"d",0,m,"f",0,function(e){return w(e)?v+E(e):y(e)?e:v+e},"g",0,y,"h",0,function(e,t){if("drafts"===t||"published"===t)throw Error('Version can not be "published" or "drafts"');return`${b}${t}.${E(e)}`},"i",0,function e(t,r,n=[]){if(null!==t&&Array.isArray(t))return t.map((t,o)=>{if((0,i.t)(t)){let i=t._key;if("string"==typeof i)return e(t,r,n.concat({_key:i,_index:o}))}return e(t,r,n.concat(o))});if((0,i.t)(t)){if("block"===t._type||"span"===t._type){let i={...t};return"block"===t._type?i.children=e(t.children,r,n.concat("children")):"span"===t._type&&(i.text=e(t.text,r,n.concat("text"))),i}return Object.fromEntries(Object.entries(t).map(([t,i])=>[t,e(i,r,n.concat(t))]))}return r(t,n)},"l",0,function(e){return("string"==typeof e?p(e):e).map(e=>{var t;if("string"==typeof e||"number"==typeof e)return e;if(Array.isArray(e))throw Error(`IndexTuple segments aren't supported:${JSON.stringify(e)}`);if("object"==typeof(t=e)&&"_key"in t&&"_index"in t)return e;if(e._key)return{_key:e._key,_index:-1};throw Error(`invalid segment:${JSON.stringify(e)}`)})},"m",0,$,"n",0,k,"o",0,S,"p",0,E,"r",0,function(e){let{baseUrl:t,workspace:r="default",tool:i="default",id:n,type:o,path:a,projectId:s,dataset:l}=e;if(!t)throw Error("baseUrl is required");if(!a)throw Error("path is required");if(!n)throw Error("id is required");if("/"!==t&&t.endsWith("/"))throw Error("baseUrl must not end with a slash");let c="default"===r?void 0:r,u="default"===i?void 0:i,d=E(n),p=Array.isArray(a)?f(_(a)):a,h=new URLSearchParams({baseUrl:t,id:d,type:o,path:p});if(c&&h.set("workspace",c),u&&h.set("tool",u),s&&h.set("projectId",s),l&&h.set("dataset",l),x(n))h.set("perspective","published");else if(w(n)){let e=$(n);h.set("perspective",e)}let g=["/"===t?"":t];c&&g.push(c);let m=["mode=presentation",`id=${d}`,`type=${o}`,`path=${encodeURIComponent(p)}`];return u&&m.push(`tool=${u}`),g.push("intent","edit",`${m.join(";")}?${h}`),g.join("/")},"s",0,_,"t",0,function(e){let{resultSourceMap:t,resultPath:r}=e,{mapping:i,pathSuffix:n}=j(r,t)||{};if(!i||"literal"===i.source.type||"unknown"===i.source.type)return;let o=t.documents[i.source.document],a=t.paths[i.source.path];if(o&&a){let{baseUrl:t,workspace:r,tool:i}=k("function"==typeof e.studioUrl?e.studioUrl(o):e.studioUrl);if(!t)return;let{_id:s,_type:l,_projectId:c,_dataset:u}=o;return{baseUrl:t,workspace:r,tool:i,id:s,type:l,path:I(a+n),projectId:c,dataset:u}}},"u",0,g,"v",0,w,"x",0,n,"y",0,d],446205)},204042,e=>{"use strict";var t=e.i(446205);e.s(["getPublishedId",()=>t.p])},657771,e=>{"use strict";var t=e.i(446205);e.s(["studioPath",()=>t.x])},407500,e=>{e.v(t=>Promise.all(["static/chunks/2619pqauczhjr.js"].map(t=>e.l(t))).then(()=>t(975681)))},273299,e=>{"use strict";var t;let r="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function i(e){return`image-${e.split("/").slice(-1)[0]}`.replace(/\.([a-z]+)$/,"-$1")}let n=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"],["frame","frame"]],o=["clip","crop","fill","fillmax","max","scale","min"],a=["top","bottom","left","right","center","focalpoint","entropy"],s=["format"];function l(e){let{apiHost:t,projectId:r,dataset:i}=e,n={baseUrl:(t||"https://gurination1.github.io/branders").replace(/^https:\/\/api\./,"https://cdn.")},o=e.resource??e["~experimental_resource"];if(o?.type==="media-library"){if("string"!=typeof o.id||0===o.id.length)throw Error('Media library clients must include an id in "resource"');return{...n,mediaLibraryId:o.id}}if(o?.type==="canvas"){if("string"!=typeof o.id||0===o.id.length)throw Error('Canvas clients must include an id in "resource"');return{...n,canvasId:o.id}}if(o?.type==="dataset"){if("string"!=typeof o.id||0===o.id.length)throw Error('Dataset clients must include an id in "resource"');let[e,t]=o.id.split(".");if(!e||!t)throw Error('Dataset resource id must be in the format "projectId.dataset", got: '+o.id);return{...n,projectId:e,dataset:t}}return{...n,projectId:r,dataset:i}}function c(e){return e&&"config"in e&&"function"==typeof e.config?l(e.config()):e&&"clientConfig"in e&&"object"==typeof e.clientConfig?l(e.clientConfig):e||{}}class u{options;constructor(e,t){this.options=e?{...e.options||{},...t||{}}:{...t||{}}}withOptions(e){return new u(this,function(e,t){let r=t.baseUrl||e.baseUrl,i={baseUrl:r};for(let e in t)t.hasOwnProperty(e)&&(i[function(e){for(let t of n){let[r,i]=t;if(e===r||e===i)return r}return e}(e)]=t[e]);return{baseUrl:r,...i}}(this.options,e))}image(e){return this.withOptions({source:e})}dataset(e){return this.withOptions({dataset:e})}projectId(e){return this.withOptions({projectId:e})}withClient(e){let t=c(e),r={...this.options};return delete r.baseUrl,delete r.projectId,delete r.dataset,delete r.mediaLibraryId,delete r.canvasId,new u(null,{...t,...r})}bg(e){return this.withOptions({bg:e})}dpr(e){return this.withOptions(e&&1!==e?{dpr:e}:{})}width(e){return this.withOptions({width:e})}height(e){return this.withOptions({height:e})}focalPoint(e,t){return this.withOptions({focalPoint:{x:e,y:t}})}maxWidth(e){return this.withOptions({maxWidth:e})}minWidth(e){return this.withOptions({minWidth:e})}maxHeight(e){return this.withOptions({maxHeight:e})}minHeight(e){return this.withOptions({minHeight:e})}size(e,t){return this.withOptions({width:e,height:t})}blur(e){return this.withOptions({blur:e})}sharpen(e){return this.withOptions({sharpen:e})}rect(e,t,r,i){return this.withOptions({rect:{left:e,top:t,width:r,height:i}})}format(e){return this.withOptions({format:e})}invert(e){return this.withOptions({invert:e})}orientation(e){return this.withOptions({orientation:e})}quality(e){return this.withOptions({quality:e})}forceDownload(e){return this.withOptions({download:e})}flipHorizontal(){return this.withOptions({flipHorizontal:!0})}flipVertical(){return this.withOptions({flipVertical:!0})}ignoreImageParams(){return this.withOptions({ignoreImageParams:!0})}fit(e){if(-1===o.indexOf(e))throw Error(`Invalid fit mode "${e}"`);return this.withOptions({fit:e})}crop(e){if(-1===a.indexOf(e))throw Error(`Invalid crop mode "${e}"`);return this.withOptions({crop:e})}saturation(e){return this.withOptions({saturation:e})}auto(e){if(-1===s.indexOf(e))throw Error(`Invalid auto mode "${e}"`);return this.withOptions({auto:e})}pad(e){return this.withOptions({pad:e})}vanityName(e){return this.withOptions({vanityName:e})}frame(e){if(1!==e)throw Error(`Invalid frame value "${e}"`);return this.withOptions({frame:e})}url(){return function(e){let t={...e||{}},o=t.source;delete t.source;let a=function(e){var t;let r;if(!e)return null;if("string"==typeof e&&(t=e,/^https?:\/\//.test(`${t}`)))r={asset:{_ref:i(e)}};else if("string"==typeof e)r={asset:{_ref:e}};else if(e&&"string"==typeof e._ref)r={asset:e};else if(e&&"string"==typeof e._id)r={asset:{_ref:e._id||""}};else if(e&&e.asset&&"string"==typeof e.asset.url)r={asset:{_ref:i(e.asset.url)}};else{if("object"!=typeof e.asset)return null;r={...e}}return e.crop&&(r.crop=e.crop),e.hotspot&&(r.hotspot=e.hotspot),function(e){if(e.crop&&e.hotspot)return e;let t={...e};return t.crop||(t.crop={left:0,top:0,bottom:0,right:0}),t.hotspot||(t.hotspot={x:.5,y:.5,height:1,width:1}),t}(r)}(o);if(!a){if(o&&"object"==typeof o&&null!==o&&o._upload&&(!o.asset||!o.asset._ref))return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";throw Error(`Unable to resolve image URL from source (${JSON.stringify(o)})`)}let s=function(e){let[,t,i,n]=e.split("-");if(!t||!i||!n)throw Error(`Malformed asset _ref '${e}'. Expected an id like "${r}".`);let[o,a]=i.split("x"),s=+o,l=+a;if(!(isFinite(s)&&isFinite(l)))throw Error(`Malformed asset _ref '${e}'. Expected an id like "${r}".`);return{id:t,width:s,height:l,format:n}}(a.asset._ref||a.asset._id||""),l=Math.round(a.crop.left*s.width),c=Math.round(a.crop.top*s.height),u={left:l,top:c,width:Math.round(s.width-a.crop.right*s.width-l),height:Math.round(s.height-a.crop.bottom*s.height-c)},d=a.hotspot.height*s.height/2,f=a.hotspot.width*s.width/2,p=a.hotspot.x*s.width,h=a.hotspot.y*s.height;return t.rect||t.focalPoint||t.ignoreImageParams||t.crop||(t={...t,...function(e,t){let r,i=t.width,n=t.height;if(!(i&&n))return{width:i,height:n,rect:e.crop};let o=e.crop,a=e.hotspot,s=i/n;if(o.width/o.height>s){let e=Math.round(o.height),t=Math.round(e*s),i=Math.max(0,Math.round(o.top)),n=Math.max(0,Math.round(Math.round((a.right-a.left)/2+a.left)-t/2));n<o.left?n=o.left:n+t>o.left+o.width&&(n=o.left+o.width-t),r={left:n,top:i,width:t,height:e}}else{let e=o.width,t=Math.round(e/s),i=Math.max(0,Math.round(o.left)),n=Math.max(0,Math.round(Math.round((a.bottom-a.top)/2+a.top)-t/2));n<o.top?n=o.top:n+t>o.top+o.height&&(n=o.top+o.height-t),r={left:i,top:n,width:e,height:t}}return{width:i,height:n,rect:r}}({crop:u,hotspot:{left:p-f,top:h-d,right:p+f,bottom:h+d}},t)}),function(e){let t,r=(e.baseUrl||"").replace(/\/+$/,""),i=e.vanityName?`/${e.vanityName}`:"",o=`${e.asset.id}-${e.asset.width}x${e.asset.height}.${e.asset.format}${i}`;t=e.mediaLibraryId?`${r}/media-libraries/${e.mediaLibraryId}/images/${o}`:e.canvasId?`${r}/images/canvases/${e.canvasId}/${o}`:`${r}/images/${e.projectId}/${e.dataset}/${o}`;let a=[];if(e.rect){let{left:t,top:r,width:i,height:n}=e.rect;(0!==t||0!==r||n!==e.asset.height||i!==e.asset.width)&&a.push(`rect=${t},${r},${i},${n}`)}e.bg&&a.push(`bg=${e.bg}`),e.focalPoint&&(a.push(`fp-x=${e.focalPoint.x}`),a.push(`fp-y=${e.focalPoint.y}`));let s=[e.flipHorizontal&&"h",e.flipVertical&&"v"].filter(Boolean).join("");return s&&a.push(`flip=${s}`),n.forEach(t=>{let[r,i]=t;"u">typeof e[r]?a.push(`${i}=${encodeURIComponent(e[r])}`):"u">typeof e[i]&&a.push(`${i}=${encodeURIComponent(e[i])}`)}),0===a.length?t:`${t}?${a.join("&")}`}({...t,asset:s})}(this.options)}toString(){return this.url()}}t=["The default export of @sanity/image-url has been deprecated. Use the named export `createImageUrlBuilder` instead."],e.s(["createImageUrlBuilder",0,function(e){return new u(null,c(e))}])},718917,e=>{e.v(t=>Promise.all(["static/chunks/3pgt5eg5ybvup.js"].map(t=>e.l(t))).then(()=>t(811067)))},839338,e=>{"use strict";var t=e.i(234915),r=e.i(240126);e.s(["firstValueFrom",0,function(e,i){var n="object"==typeof i;return new Promise(function(o,a){var s=new r.SafeSubscriber({next:function(e){o(e),s.unsubscribe()},error:a,complete:function(){n?o(i.defaultValue):a(new t.EmptyError)}});e.subscribe(s)})}])},305753,e=>{"use strict";var t=e.i(234915);e.s(["lastValueFrom",0,function(e,r){var i="object"==typeof r;return new Promise(function(n,o){var a,s=!1;e.subscribe({next:function(e){a=e,s=!0},error:o,complete:function(){s?n(a):i?n(r.defaultValue):o(new t.EmptyError)}})})}])},630330,502448,718244,e=>{"use strict";var t=e.i(394426),r=Array.isArray,i=Object.getPrototypeOf,n=Object.prototype,o=Object.keys;function a(e){if(1===e.length){var t,a=e[0];if(r(a))return{args:a,keys:null};if((t=a)&&"object"==typeof t&&i(t)===n){var s=o(a);return{args:s.map(function(e){return a[e]}),keys:s}}}return{args:e,keys:null}}e.s(["argsArgArrayOrObject",0,a],502448);var s=e.i(330823),l=e.i(979165),c=e.i(272383),u=e.i(673649);function d(e,t){return e.reduce(function(e,r,i){return e[r]=t[i],e},{})}e.s(["createObject",0,d],718244);var f=e.i(627608),p=e.i(175436);function h(e,t,r){return void 0===r&&(r=l.identity),function(i){g(t,function(){for(var n=e.length,o=Array(n),a=n,l=n,c=function(n){g(t,function(){var c=(0,s.from)(e[n],t),u=!1;c.subscribe((0,f.createOperatorSubscriber)(i,function(e){o[n]=e,!u&&(u=!0,l--),l||i.next(r(o.slice()))},function(){--a||i.complete()}))},i)},u=0;u<n;u++)c(u)},i)}}function g(e,t,r){e?(0,p.executeSchedule)(r,e,t):t()}e.s(["combineLatest",0,function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var i=(0,u.popScheduler)(e),n=(0,u.popResultSelector)(e),o=a(e),f=o.args,p=o.keys;if(0===f.length)return(0,s.from)([],i);var g=new t.Observable(h(f,i,p?function(e){return d(p,e)}:l.identity));return n?g.pipe((0,c.mapOneOrManyArgs)(n)):g},"combineLatestInit",0,h],630330)},602400,761101,e=>{"use strict";var t=e.i(844032);function r(){return(0,t.mergeAll)(1)}e.s(["concatAll",0,r],761101);var i=e.i(673649),n=e.i(330823);e.s(["concat",0,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r()((0,n.from)(e,(0,i.popScheduler)(e)))}],602400)},245281,e=>{"use strict";var t=e.i(673649),r=e.i(330823);e.s(["of",0,function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var n=(0,t.popScheduler)(e);return(0,r.from)(e,n)}])},254201,e=>{"use strict";var t=e.i(394426),r=e.i(603752);e.s(["throwError",0,function(e,i){var n=(0,r.isFunction)(e)?e:function(){return e},o=function(e){return e.error(n())};return new t.Observable(i?function(e){return i.schedule(o,0,e)}:o)}])},817312,161538,e=>{"use strict";var t=e.i(394426),r=e.i(629437),i=e.i(871041);function n(e){return e instanceof Date&&!isNaN(e)}e.s(["isValidDate",0,n],161538),e.s(["timer",0,function(e,o,a){void 0===e&&(e=0),void 0===a&&(a=r.async);var s=-1;return null!=o&&((0,i.isScheduler)(o)?a=o:s=o),new t.Observable(function(t){var r=n(e)?e-a.now():e;r<0&&(r=0);var i=0;return a.schedule(function(){t.closed||(t.next(i++),0<=s?this.schedule(void 0,s):t.complete())},r)})}],817312)},992481,e=>{"use strict";var t=e.i(220324),r=e.i(627608),i=e.i(902965);e.s(["catchError",0,function e(n){return(0,i.operate)(function(i,o){var a,s=null,l=!1;s=i.subscribe((0,r.createOperatorSubscriber)(o,void 0,void 0,function(r){a=(0,t.innerFrom)(n(r,e(n)(i))),s?(s.unsubscribe(),s=null,a.subscribe(o)):l=!0})),l&&(s.unsubscribe(),s=null,a.subscribe(o))})}])},589293,e=>{"use strict";var t=e.i(484973),r=e.i(603752);e.s(["concatMap",0,function(e,i){return(0,r.isFunction)(i)?(0,t.mergeMap)(e,i,1):(0,t.mergeMap)(e,1)}])},128068,e=>{"use strict";var t=e.i(902965);e.s(["finalize",0,function(e){return(0,t.operate)(function(t,r){try{t.subscribe(r)}finally{r.add(e)}})}])},373983,e=>{"use strict";var t=e.i(314052),r=e.i(902965);e.s(["reduce",0,function(e,i){return(0,r.operate)((0,t.scanInternals)(e,i,arguments.length>=2,!1,!0))}])},314052,e=>{"use strict";var t=e.i(627608);e.s(["scanInternals",0,function(e,r,i,n,o){return function(a,s){var l=i,c=r,u=0;a.subscribe((0,t.createOperatorSubscriber)(s,function(t){var r=u++;c=l?e(c,t,r):(l=!0,t),n&&s.next(c)},o&&function(){l&&s.next(c),s.complete()}))}}])},218692,e=>{"use strict";var t=e.i(603752),r=e.i(902965),i=e.i(627608),n=e.i(979165);e.s(["tap",0,function(e,o,a){var s=(0,t.isFunction)(e)||o||a?{next:e,error:o,complete:a}:e;return s?(0,r.operate)(function(e,t){null==(r=s.subscribe)||r.call(s);var r,n=!0;e.subscribe((0,i.createOperatorSubscriber)(t,function(e){var r;null==(r=s.next)||r.call(s,e),t.next(e)},function(){var e;n=!1,null==(e=s.complete)||e.call(s),t.complete()},function(e){var r;n=!1,null==(r=s.error)||r.call(s,e),t.error(e)},function(){var e,t;n&&(null==(e=s.unsubscribe)||e.call(s)),null==(t=s.finalize)||t.call(s)}))}):n.identity}])},629437,e=>{"use strict";var t=e.i(329418),r=new(e.i(796989)).AsyncScheduler(t.AsyncAction);e.s(["async",0,r,"asyncScheduler",0,r])},234915,e=>{"use strict";var t=(0,e.i(842093).createErrorClass)(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});e.s(["EmptyError",0,t])},545146,e=>{"use strict";var t=Array.isArray;e.s(["argsOrArgArray",0,function(e){return 1===e.length&&t(e[0])?e[0]:e}])},245912,e=>{"use strict";var t=e.i(394426),r=e.i(603752);e.s(["isObservable",0,function(e){return!!e&&(e instanceof t.Observable||(0,r.isFunction)(e.lift)&&(0,r.isFunction)(e.subscribe))}])},794635,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(156569),n=e.i(124821),o=e.i(375476),a=e.i(481293),s=e.i(992325),l=e.i(494473),c=e.i(867308),u=e.i(989970),d=e.i(255667),f=e.i(328852),p=e.i(271645),h=e.i(607561),g=e.i(575509),m=e.i(212960),v=e.i(997053);let b=(0,v.default)(g.Div).attrs({as:"section"}).withConfig({componentId:"sc-e85696e3-0"})(()=>v.css`
		/* NOTE • Exactly one viewport tall, not min-height. StickyTrack's aperture
		   clips this box with a percentage inset(), so the box has to match the
		   viewport for the clip to reach its edges and no further. A min-height
		   (or the old 120dvh) would make inset(0) crop the overflow permanently
		   rather than reveal it. */
		position: relative;
		z-index: 2;

		width: 100%;
		height: 100dvh;
		overflow: clip;

		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		gap: ${(0,g.getGap)("m")};
		padding-block: ${(0,g.getGap)("huge")};

		${g.bp.l`
			justify-content: space-between;
			padding-block: ${(0,g.getGap)("col")};
		`}


        [data-level='top'] {
            
        }

        [data-level='bottom'] {
            row-gap: ${(0,g.getGap)("l")};
        }
	`),y=v.default.div.withConfig({componentId:"sc-e85696e3-1"})(()=>v.css`
		position: absolute;
		inset: 0;
		z-index: -1;
		overflow: clip;
        background: ${(0,g.getGlobal)("black")};
	`),w=v.default.div.withConfig({componentId:"sc-e85696e3-2"})(()=>v.css`
		position: absolute;
		top: -20%;
		left: 0;
		right: 0;
		height: 140%;
		z-index: 1;
		transform: translateZ(0);
		backface-visibility: hidden;

		& > span {
			position: absolute !important;
			inset: 0 !important;
			width: 100% !important;
			height: 100% !important;
		}

		img {
			display: block;
			object-fit: cover;
			width: 100%;
			height: 100%;
			pointer-events: none;
			transform: translateZ(0);
		}
	`),x=(0,v.default)(g.Div).withConfig({componentId:"sc-e85696e3-3"})(()=>v.css`

		h2 {
			${m.headlineL}

			text-wrap: balance;
			color: ${(0,g.getGlobal)("white")};
		}
	`),$=(0,v.default)(g.Div).withConfig({componentId:"sc-e85696e3-4"})(()=>v.css`
	
	`),E=(0,v.default)(g.Div).withConfig({componentId:"sc-e85696e3-5"})(({theme:e})=>v.css`
		--offset: calc(${e.grid.gutter.s});

        padding-inline: var(--offset);
		display: flex;
		flex-direction: column;
		gap: ${(0,g.getGap)("m")};
		text-wrap: balance;

		${g.bp.m`
			--offset: calc(${e.grid.gutter.m} / 2);
		`}

		${g.bp.l`
			--offset: calc(${e.grid.gutter.l} / 2);
		`}
    `),T=(0,v.default)(g.Div).attrs({as:"p"}).withConfig({componentId:"sc-e85696e3-6"})(()=>v.css`
		${m.bodyL}

		color: ${(0,g.getGlobal)("white",80)};
		text-wrap: balance;
	`),A=e=>{let i,n,o,a=(0,r.c)(7),{image:s}=e,l=(0,p.useRef)(null),g=(0,p.useRef)(null),m=(0,d.useLenis)();a[0]!==m?.rootElement?(i=e=>{let{isDesktop:t}=e,r=l.current,i=g.current,n=m?.rootElement;if(!r||!i||!n)return;let o=()=>t?0:n.clientHeight,a=()=>(e=>{let t=0,r=e;for(;r;)t+=r.offsetTop,r=r.offsetParent;return t})(r)+(t?c.APPROACH_HOLD_PX:0)-o(),s=u.default.fromTo(i,{yPercent:0},{yPercent:t?25:24,ease:"none",scrollTrigger:{scroller:n,start:a,end:()=>a()+o()+r.offsetHeight,scrub:!0,invalidateOnRefresh:!0}});return()=>{s.scrollTrigger?.kill(),s.kill()}},a[0]=m?.rootElement,a[1]=i):i=a[1];let v=s?.src;return(a[2]!==m||a[3]!==v?(n={scope:l,dependencies:[v,m]},a[2]=m,a[3]=v,a[4]=n):n=a[4],(0,h.useAnimation)(i,n),s?.src)?(a[5]!==s?(o=(0,t.jsx)(y,{ref:l,children:(0,t.jsx)(w,{ref:g,children:(0,t.jsx)(f.default,{image:s,fill:!0,sizes:"100vw",preload:!0})})}),a[5]=s,a[6]=o):o=a[6],o):null};A.displayName="Background";let S=e=>{let c,u,d,f,p,h,g,m,v,y,w,S=(0,r.c)(26),{heading:I,description:_,backgroundImage:R,logos:j,documentId:k,documentType:C}=e;S[0]!==R?(c=(0,a.resolveImageWithAlt)(R),S[0]=R,S[1]=c):c=S[1];let L=c;S[2]!==k||S[3]!==C?(u=(0,s.sanityEditAttr)({id:k,type:C,path:"approachHeading"}),S[2]=k,S[3]=C,S[4]=u):u=S[4];let P=u;return S[5]!==L?(d=(0,t.jsx)(A,{image:L}),S[5]=L,S[6]=d):d=S[6],S[7]!==I?(f=(0,t.jsx)("h2",{children:I}),S[7]=I,S[8]=f):f=S[8],S[9]!==P||S[10]!==f?(p=(0,t.jsx)(l.default,{"data-level":"top",children:(0,t.jsx)(x,{$l:"2/7",children:(0,t.jsx)(i.default,{editAttr:P,children:f})})}),S[9]=P,S[10]=f,S[11]=p):p=S[11],S[12]!==j?(h=(0,t.jsx)($,{$l:"1/8",$xl:"1/9",children:(0,t.jsx)(o.default,{logos:j})}),S[12]=j,S[13]=h):h=S[13],S[14]!==_?(g=(0,t.jsx)(T,{children:_}),S[14]=_,S[15]=g):g=S[15],S[16]===Symbol.for("react.memo_cache_sentinel")?(m=(0,t.jsx)(n.default,{to:"/branders/contact",label:"Start Your Project",aria:"Go to Contact"}),S[16]=m):m=S[16],S[17]!==g?(v=(0,t.jsxs)(E,{$l:"8/12",$xl:"9/12",children:[g,m]}),S[17]=g,S[18]=v):v=S[18],S[19]!==h||S[20]!==v?(y=(0,t.jsxs)(l.default,{"data-level":"bottom",$noMargin:!0,$noGutter:!0,children:[h,v]}),S[19]=h,S[20]=v,S[21]=y):y=S[21],S[22]!==y||S[23]!==d||S[24]!==p?(w=(0,t.jsxs)(b,{children:[d,p,y]}),S[22]=y,S[23]=d,S[24]=p,S[25]=w):w=S[25],w};S.displayName="Approach",e.s(["default",0,S],794635)},419762,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(156569),n=e.i(481293),o=e.i(189897),a=e.i(607561),s=e.i(494473),l=e.i(989970),c=e.i(255667),u=e.i(328852),d=e.i(271645),f=e.i(575509),p=e.i(212960),h=e.i(997053);let g=(0,h.default)(f.Div).attrs({as:"section"}).withConfig({componentId:"sc-dd0c2790-0"})(()=>h.css`
        --single-col: ${(0,f.getGap)("col")};
        --double-col: calc(${(0,f.getGap)("col")} * 2);

        position: relative;
        z-index: 2;
        padding-block: ${(0,f.getGap)("huge")};
        

        width: 100%;
        min-height: 100dvh;
        overflow: clip;

        background: ${(0,f.getGlobal)("black")};

        ${f.bp.l`
            padding-block: var(--double-col);
        `}

        [data-placement='top'] {
            position: sticky;
            top: ${(0,f.getGap)("huge")};
            left: 0;
            z-index: -1;

            ${f.bp.l`
                top: calc(var(--single-col) * 2);
            `}
        }
    `),m=(0,h.default)(f.Div).withConfig({componentId:"sc-dd0c2790-1"})(()=>h.css`
        position: absolute;
        inset: 0;
        z-index: -1;
        overflow: clip;
        background: ${(0,f.getGlobal)("black")};
        opacity: 0.4;

        figure {
            position: sticky;
            z-index: 2;
            top: 0; left: 0;
            width: 100%;
            height: 100dvh;
            background: linear-gradient(to bottom, ${(0,f.getGlobal)("black",90)} 0%, transparent 100%);
            transform: translateZ(0);
        }
    `),v=(0,h.default)(f.Div).withConfig({componentId:"sc-dd0c2790-2"})(()=>h.css`
        position: absolute;
        inset: 0;
        transform: translateZ(0);
        backface-visibility: hidden;

        svg {
            display: block;
            width: 100%;
            height: 100%;
        }
    `),b=(0,h.default)(f.Div).attrs({as:"hgroup"}).withConfig({componentId:"sc-dd0c2790-3"})(({theme:e})=>h.css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center; 
        gap: ${(0,f.getGap)("s")};


        h2, em {
            ${p.headlineL}

            text-wrap: balance;
            text-transform: unset;

            ${f.bp.l`
                ${p.displayL}
            `}

            span { display: block  }
        }

        em {
            font-style: normal;
        }

        p {
            ${p.bodyL}

            text-wrap: balance;
            color: ${(0,f.getBrand)("bc5",80)};

            ${f.bp.xl` max-width: calc(8.333vw * 4 - ${e.grid.gutter.l}); `}
        }
    `),y=(0,h.default)(f.Div).withConfig({componentId:"sc-dd0c2790-4"})(()=>h.css`
        position: relative;
        margin-block: ${(0,f.getGap)("l")};
        user-select: none;
        pointer-events: none;

        ${f.bp.l`
            margin-block: var(--single-col);
        `}

        picture {
            --width: 85vw;
            --buffer: 5vw;
            --half-width: calc(var(--width) / 2);

            display: block;
            position: relative;

            margin: 0 auto;
            width: var(--width);
            aspect-ratio: 707/1402;

            ${f.bp.l` --width: 50vw; `}

            ${f.bp.xl`
                --buffer: 10vw;
                --width: 70.7rem;
            `}

            &[data-car='main'] {
                position: relative;
                z-index: 1;
            }

            &[data-car='side'] {
                display: none;
                
                ${f.bp.l`
                    display: block;
                    position: absolute;
                    top: 25%;
                `}
            }

            &[data-side='left'] {
                right: calc(var(--width) + var(--half-width) + var(--buffer));
            }

            &[data-side='right'] {
                left: calc(var(--width) + var(--half-width) + var(--buffer));
            }

            img {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: center top;
            }
        }
    `),w=(0,d.forwardRef)((e,i)=>{let n,o,a,s,l,c,u,f,p=(0,r.c)(22),{src:h,tileSize:g,opacity:b}=e,y=void 0===g?740:g,w=void 0===b?1:b,x=(0,d.useRef)(null),$=(0,d.useId)();if(p[0]!==$){let e;p[2]===Symbol.for("react.memo_cache_sentinel")?(e=/:/g,p[2]=e):e=p[2],n=$.replace(e,""),p[0]=$,p[1]=n}else n=p[1];let E=`builds-intro-pattern-${n}`;p[3]!==i?(o=e=>{(x.current=e,"function"==typeof i)?i(e):i&&(i.current=e)},p[3]=i,p[4]=o):o=p[4];let T=o;if(!h)return null;p[5]===Symbol.for("react.memo_cache_sentinel")?(a=(0,t.jsx)("figure",{}),p[5]=a):a=p[5],p[6]!==h||p[7]!==y?(s=(0,t.jsx)("image",{href:h,width:y,height:y,preserveAspectRatio:"xMidYMid slice"}),p[6]=h,p[7]=y,p[8]=s):s=p[8],p[9]!==E||p[10]!==s||p[11]!==y?(l=(0,t.jsx)("defs",{children:(0,t.jsx)("pattern",{id:E,patternUnits:"userSpaceOnUse",width:y,height:y,children:s})}),p[9]=E,p[10]=s,p[11]=y,p[12]=l):l=p[12];let A=`url(#${E})`;return p[13]!==w||p[14]!==A?(c=(0,t.jsx)("rect",{width:"100%",height:"100%",fill:A,opacity:w}),p[13]=w,p[14]=A,p[15]=c):c=p[15],p[16]!==c||p[17]!==l?(u=(0,t.jsxs)("svg",{width:"100%",height:"100%",preserveAspectRatio:"none","aria-hidden":!0,role:"presentation",children:[l,c]}),p[16]=c,p[17]=l,p[18]=u):u=p[18],p[19]!==T||p[20]!==u?(f=(0,t.jsxs)(m,{"aria-hidden":!0,children:[a,(0,t.jsx)(v,{ref:T,children:u})]}),p[19]=T,p[20]=u,p[21]=f):f=p[21],f});w.displayName="BuildsIntroductionBackground";let x=e=>{let f,p,h,m,v,x,$,E,T,A,S,I,_,R,j,k,C,L,P,O=(0,r.c)(45),{line1:D,line2:M,description:N,backgroundImage:H,image:z,leftCarImage:U,rightCarImage:G}=e;O[0]!==H?(f=(0,n.resolveImageWithAlt)(H),O[0]=H,O[1]=f):f=O[1];let F=f;O[2]!==z?(p=(0,n.resolveImageWithAlt)(z),O[2]=z,O[3]=p):p=O[3];let B=p;O[4]!==U?(h=(0,n.resolveImageWithAlt)(U),O[4]=U,O[5]=h):h=O[5];let W=h;O[6]!==G?(m=(0,n.resolveImageWithAlt)(G),O[6]=G,O[7]=m):m=O[7];let V=m,X=(0,d.useRef)(null),q=(0,d.useRef)(null),Y=(0,d.useRef)(null),K=(0,d.useRef)(null),J=(0,d.useRef)(null),Z=(0,d.useRef)(null),Q=(0,d.useRef)(null),ee=(0,d.useRef)(null),et=(0,c.useLenis)();O[8]!==D?(v=(0,o.cleanSanityString)(D),O[8]=D,O[9]=v):v=O[9];let er=v;O[10]!==M?(x=(0,o.cleanSanityString)(M),O[10]=M,O[11]=x):x=O[11];let ei=x;O[12]!==N?($=(0,o.cleanSanityString)(N),O[12]=N,O[13]=$):$=O[13];let en=$;return(O[14]!==et?.rootElement?(E=e=>{let{isDesktop:t}=e,r=X.current,i=et?.rootElement,n=Y.current,o=K.current,a=J.current,s=Z.current,c=q.current,u=Q.current,d=ee.current;r&&i&&n&&o&&a&&s&&c&&u&&d&&(l.default.to(n,{scale:.75,autoAlpha:0,ease:"none",scrollTrigger:{trigger:r,scroller:i,start:"top top",end:"center top",scrub:!0,markers:!1}}),t&&l.default.from(u,{y:"-50dvh",scale:.75,ease:"none",scrollTrigger:{trigger:d,scroller:i,start:"top-=50% 100%",end:"center 60%",scrub:.2,markers:!1}}),l.default.to(o,{yPercent:-55,ease:"none",scrollTrigger:{trigger:s,scroller:i,start:"top bottom",end:"center top",scrub:.2}}),l.default.to(a,{yPercent:-50,ease:"none",scrollTrigger:{trigger:s,scroller:i,start:"top bottom",end:"bottom top",scrub:.2}}),l.default.set(c,{yPercent:-10}),l.default.to(c,{yPercent:20,ease:"none",scrollTrigger:{trigger:r,scroller:i,start:"top bottom",end:"bottom top",scrub:!0,markers:!1}}))},O[14]=et?.rootElement,O[15]=E):E=O[15],O[16]!==et?(T={scope:X,dependencies:[et]},O[16]=et,O[17]=T):T=O[17],(0,a.useAnimation)(E,T),B&&W&&V&&er&&ei&&en&&F)?(O[18]!==F.alt||O[19]!==F.src?(A=(0,t.jsx)(w,{ref:q,src:F.src,alt:F.alt}),O[18]=F.alt,O[19]=F.src,O[20]=A):A=O[20],O[21]!==er?(S=(0,t.jsx)(s.default,{"data-placement":"top",ref:Y,children:(0,t.jsx)(b,{$l:"5/9",children:(0,t.jsx)(i.default,{children:(0,t.jsx)("em",{children:er})})})}),O[21]=er,O[22]=S):S=O[22],O[23]!==W?(I=(0,t.jsx)("picture",{"data-car":"side","data-side":"left",ref:K,children:(0,t.jsx)(u.default,{image:W,fill:!0,sizes:"(min-width: 1024px) 35vw, 50vw"})}),O[23]=W,O[24]=I):I=O[24],O[25]!==B?(_=(0,t.jsx)("picture",{"data-car":"main",children:(0,t.jsx)(u.default,{image:B,fill:!0,sizes:"(min-width: 1024px) 70.7rem, 100vw"})}),O[25]=B,O[26]=_):_=O[26],O[27]!==V?(R=(0,t.jsx)("picture",{"data-car":"side","data-side":"right",ref:J,children:(0,t.jsx)(u.default,{image:V,fill:!0,sizes:"(min-width: 1024px) 35vw, 50vw"})}),O[27]=V,O[28]=R):R=O[28],O[29]!==I||O[30]!==_||O[31]!==R?(j=(0,t.jsxs)(y,{ref:Z,children:[I,_,R]}),O[29]=I,O[30]=_,O[31]=R,O[32]=j):j=O[32],O[33]!==ei?(k=(0,t.jsx)(i.default,{children:(0,t.jsx)("h2",{children:ei})}),O[33]=ei,O[34]=k):k=O[34],O[35]!==en?(C=(0,t.jsx)("p",{children:en}),O[35]=en,O[36]=C):C=O[36],O[37]!==k||O[38]!==C?(L=(0,t.jsx)(s.default,{"data-placement":"bottom",ref:ee,children:(0,t.jsxs)(b,{$l:"4/10",$huge:"3/11",ref:Q,children:[k,C]})}),O[37]=k,O[38]=C,O[39]=L):L=O[39],O[40]!==A||O[41]!==S||O[42]!==j||O[43]!==L?(P=(0,t.jsxs)(g,{ref:X,children:[A,S,j,L]}),O[40]=A,O[41]=S,O[42]=j,O[43]=L,O[44]=P):P=O[44],P):null};x.displayName="BuildsIntroduction",e.s(["default",0,x],419762)},103930,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(156569),n=e.i(124821),o=e.i(89835),a=e.i(481293),s=e.i(607561),l=e.i(494473),c=e.i(989970),u=e.i(255667),d=e.i(271645),f=e.i(575509),p=e.i(212960),h=e.i(997053);let g=(0,h.default)(f.Div).attrs({as:"section"}).withConfig({componentId:"sc-8d5ca2ab-0"})(({$hasFade:e})=>h.css`
        position: relative;
        z-index: 1;
        overflow: clip;
        height: 100dvh;
        padding-top: 50dvh;
        background: ${(0,f.getBrand)("bc1")};

        &:after {
            position: absolute;
            inset: 0;
            z-index: 0;
            background: linear-gradient(to top, ${(0,f.getGlobal)("black")} 0%, transparent 50%);
            content: '';
            opacity: ${e?1:.4};
        }
    `),m=(0,h.default)(f.Div).withConfig({componentId:"sc-8d5ca2ab-1"})(({$isMissing:e})=>h.css`
        position: absolute;
        inset: 0;
        z-index: -1;

        /* NOTE • No image to show — see missingMedia in @tackl for why this is a
           drawn empty frame rather than a flat colour. */
        ${e&&f.missingMedia}

        picture {
            display: block;
            width: 100%;
            height: 100%;

            img {
                display: block;
                object-fit: cover;
                object-position: top;
                width: 100%;
                height: 100%;

                ${f.bp.l` object-position: center `}
            }
        }
    `),v=(0,h.default)(f.Div).attrs({as:"hgroup"}).withConfig({componentId:"sc-8d5ca2ab-2"})(()=>h.css`
        position: relative;
        z-index: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50dvh;
    `),b=(0,h.default)(f.Div).withConfig({componentId:"sc-8d5ca2ab-3"})(()=>h.css`
        margin-bottom: ${(0,f.getGap)("s")};

        h2 {
            ${p.headlineL}

            color: ${(0,f.getBrand)("bc5")};
            text-align: center;
        }
    `),y=(0,h.default)(f.Div).attrs({as:"p"}).withConfig({componentId:"sc-8d5ca2ab-4"})(()=>h.css`
        ${p.bodyL}

        color: ${(0,f.getBrand)("bc5",80)};
        text-align: center;
        text-wrap: balance;

        margin-bottom: ${(0,f.getGap)("l")};
    `),w=e=>{let f,p,h,w,x,$,E,T,A,S,I,_,R=(0,r.c)(32),{heading:j,headingEditAttr:k,description:C,backgroundImage:L,buttonLabel:P,buttonHref:O,hasFade:D}=e,M=(0,d.useRef)(null),N=(0,d.useRef)(null),H=(0,d.useRef)(null),z=L?.desktop;R[0]!==z?(f=(0,a.resolveImageWithAlt)(z),R[0]=z,R[1]=f):f=R[1];let U=f,G=L?.mobile;R[2]!==G?(p=(0,a.resolveImageWithAlt)(G),R[2]=G,R[3]=p):p=R[3];let F=p,B=!!(U&&F),W=(0,u.useLenis)();R[4]!==W?.rootElement?(h=e=>{let{isDesktop:t}=e,r=M.current,i=W?.rootElement,n=N.current,o=H.current;if(!r||!i||!n||!o)return;let a=t?50:25;c.default.set(n,{yPercent:-a}),c.default.to(n,{yPercent:a,ease:"none",scrollTrigger:{trigger:r,scroller:i,start:"top 100%",end:"bottom 0%",scrub:!0}}),c.default.to(n,{autoAlpha:1,ease:"none",scrollTrigger:{trigger:r,scroller:i,start:"bottom 100%",end:"bottom 0%",scrub:!0}}),c.default.to(o,{yPercent:-50,ease:"none",scrollTrigger:{trigger:r,scroller:i,start:"bottom 100%",end:"bottom 0%",scrub:!0}})},R[4]=W?.rootElement,R[5]=h):h=R[5],R[6]!==W?(w={scope:M,dependencies:[W]},R[6]=W,R[7]=w):w=R[7],(0,s.useAnimation)(h,w);let V=!B;R[8]!==U||R[9]!==F?(x=U&&F?(0,t.jsx)(o.default,{desktop:U,mobile:F,fill:!0,sizes:"100vw"}):null,R[8]=U,R[9]=F,R[10]=x):x=R[10],R[11]!==V||R[12]!==x?($=(0,t.jsx)(m,{ref:N,$isMissing:V,children:x}),R[11]=V,R[12]=x,R[13]=$):$=R[13];let X=j||"Missing";return R[14]!==X?(E=(0,t.jsx)("h2",{children:X}),R[14]=X,R[15]=E):E=R[15],R[16]!==k||R[17]!==E?(T=(0,t.jsx)(l.default,{children:(0,t.jsx)(b,{children:(0,t.jsx)(i.default,{editAttr:k,children:E})})}),R[16]=k,R[17]=E,R[18]=T):T=R[18],R[19]!==C?(A=(0,t.jsx)(l.default,{children:(0,t.jsx)(y,{$l:"5/9",$huge:"5/9",children:C})}),R[19]=C,R[20]=A):A=R[20],R[21]!==O||R[22]!==P?(S=P&&O&&(0,t.jsx)(n.default,{label:P,aria:P,to:O}),R[21]=O,R[22]=P,R[23]=S):S=R[23],R[24]!==T||R[25]!==A||R[26]!==S?(I=(0,t.jsxs)(v,{ref:H,children:[T,A,S]}),R[24]=T,R[25]=A,R[26]=S,R[27]=I):I=R[27],R[28]!==D||R[29]!==I||R[30]!==$?(_=(0,t.jsxs)(g,{ref:M,$hasFade:D,children:[$,I]}),R[28]=D,R[29]=I,R[30]=$,R[31]=_):_=R[31],_};w.displayName="CtaBand",e.s(["default",0,w],103930)},221781,e=>{"use strict";var t=e.i(989970);let r=t.default.parseEase("power2.in");t.default.parseEase("power2.out");let i=(e,t,r,i,n)=>r<=0?0:Math.max(0,Math.min(1,(e*((r-1)*i+n)-t*i)/n));e.s(["DESCRIPTION_LINE_GAP",0,.14,"DESCRIPTION_LINE_REVEAL",0,.9,"TITLE_BLUR_START",0,8,"TITLE_SCALE_START",0,0,"TITLE_WORD_GAP",0,.15,"TITLE_WORD_REVEAL",0,.8,"getGrowOutWordValues",0,(e,t,n)=>{let o=r(i(e,n-1-t,n,.083,.667));return{scale:1+ +o,opacity:1-o,blur:8*o}},"getIntroGrowInWordValues",0,(e,t,r)=>{let n=i(e,t,r,.15,.8);return{scale:0+ +n,opacity:n,blur:(1-n)*8}},"getStaggeredSegmentProgress",0,i])},601969,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(322208),n=e.i(867308),o=e.i(992325),a=e.i(494473),s=e.i(271645),l=e.i(383520),c=e.i(478430),u=e.i(831119),d=e.i(101384),f=e.i(456393),p=e.i(297788),h=e.i(989970),g=e.i(575509),m=e.i(212960),v=e.i(997053);let b=(0,v.default)(g.Div).attrs({as:"section"}).withConfig({componentId:"sc-12ea9db1-0"})(()=>v.css`	
		/* NOTE • height: 100dvh, matching Introduction's Jacket exactly. This used
		   to be min-height: 60rem, which the root font-size steps scale to 600 /
		   660 / 720px — so on a short window the stage grew taller than the
		   viewport and drawCoverFrame centred the frame in a taller box than the
		   Introduction's. The hero's last frame and the intro's first frame are
		   the same image, but they landed ~10px apart. The extra height bought
		   nothing either way: StickyTrack's Content is 100dvh with overflow:
		   clip, so anything past one viewport was never visible. */
		position: absolute;
		z-index: 2;
		inset: 0;
		width: 100%;
		height: 100dvh;
		overflow: hidden;
		pointer-events: none;

		/* NOTE • The layer stays a non-interactive overlay, but the editable copy
		   must remain hit-testable: Sanity's Visual Editing finds its overlay
		   targets with elementsFromPoint, and an inherited pointer-events: none
		   removes an element from that hit test entirely — the hero title and
		   description carried valid data-sanity attributes yet could never be
		   clicked in Presentation. Scroll is unaffected: wheel and touch events
		   bubble up from the text to Lenis all the same. */
		[data-sanity] {
			pointer-events: auto;
		}

		[data-text] {
			--offset: ${(0,g.getGap)("xxl")};
			--offset-top: calc((${(0,g.getGap)("l")}	* 2) + 3.2rem);

			position: absolute;
			left: 0; right: 0;

			${g.bp.l`
				--offset-top: calc((${(0,g.getGap)("xl")}	 * 2) + 3.2rem);
			`}	
		}


		[data-text='top'] {
			top: 0;
			height: 50svh;
			align-items: center;
			padding-top: var(--offset-top);

			${g.bp.l`
				align-items: flex-start;
			
				@media (min-height: 800px) {
					align-items: center;
				}
			`}
		}

		[data-text='bottom'] {
			bottom: 0;
			padding-bottom: var(--offset);
		}
	`),y=v.default.div.withConfig({componentId:"sc-12ea9db1-1"})(({$visible:e=!0})=>v.css`
		position: absolute;
		inset: 0;
		opacity: ${+!!e};
		visibility: ${e?"visible":"hidden"};
	`),w=v.default.canvas.withConfig({componentId:"sc-12ea9db1-2"})(()=>v.css`
		display: block;
		width: 100%;
		height: 100%;
	`),x=(0,v.default)(g.Div).attrs({as:"h1"}).withConfig({componentId:"sc-12ea9db1-3"})(()=>v.css`
		text-align: center;
		text-wrap: balance;
		visibility: hidden;
		opacity: 0;


		/* Custom for the hero */
		font-family: ${(0,g.getFont)("heading")};
		text-transform: capitalize;
		font-weight: ${(0,g.getFontWeight)("ultralight")};
		font-size: 6.4rem;
		line-height: 1.2;
		letter-spacing: -0.2rem;

		${g.bp.sm` font-size: 7.2rem `}

		${g.bp.l` font-size: clamp(7.2rem, 10dvh, 9.6rem)`}
	`),$=(0,v.default)(g.Div).attrs({as:"p"}).withConfig({componentId:"sc-12ea9db1-4"})(()=>v.css`
	${m.bodyL}

	text-align: center;
	text-wrap: balance;
	visibility: hidden;
	opacity: 0;
`),E="sine.inOut",T=()=>{let e,o,a,g,m,v,b,x,$,T,S,I,_,R=(0,r.c)(38),{loaderMounted:j}=(0,s.use)(c.LoaderContext),{menuOpen:k}=(0,s.use)(u.MenuContext),{isReducedMotion:C,devicePixelRatio:L}=(0,s.use)(d.PerformanceContext),{activeFrameRef:P,heroVideoLoadState:O,isRuntimeReady:D,setHeroPlaybackComplete:M,isHeroPlaybackComplete:N,isIntroFrameReady:H,setHeroFrameSettled:z}=(0,s.use)(l.HeroVideoContext),{getProgress:U,subscribe:G,getIntroSegmentProgress:F}=(0,i.useStickyTrackStore)(),B=(0,s.useRef)(k),W=(0,s.useRef)(null),V=(0,s.useRef)(null),X=(0,s.useRef)(null),q=(0,s.useRef)(null),Y=(0,s.useRef)(null),K=(0,s.useRef)(0),J=(0,s.useRef)(0),Z=(0,s.useRef)(!1),Q=(0,s.useRef)(!0),[ee,et]=(0,s.useState)(!1),[er,ei]=(0,s.useState)(!1),en=(0,s.useRef)(!1),eo="ready"===O;R[0]!==L?(e=()=>{let e=V.current,t=W.current;if(!e||!t)return!1;let r=Math.min(L,2),{clientWidth:i,clientHeight:n}=t;if(!i||!n)return!1;e.width=Math.round(i*r),e.height=Math.round(n*r),e.style.width=`${i}px`,e.style.height=`${n}px`;let o=e.getContext("2d");return!!o&&(X.current=o,o.setTransform(r,0,0,r,0,0),!0)},R[0]=L,R[1]=e):e=R[1];let ea=e;R[2]!==P||R[3]!==ea?(o=()=>{cancelAnimationFrame(J.current),J.current=requestAnimationFrame(()=>{if(!ea())return;let e=P.current;e&&(0,f.forceRedrawFrame)(e,K.current)})},R[2]=P,R[3]=ea,R[4]=o):o=R[4];let es=o;return(R[5]!==U||R[6]!==k?(a=()=>{B.current=k,k?q.current?.pause():(0,n.shouldPauseHeroPlayback)(U())||q.current?.play()},g=[k,U],R[5]=U,R[6]=k,R[7]=a,R[8]=g):(a=R[7],g=R[8]),(0,s.useLayoutEffect)(a,g),R[9]===Symbol.for("react.memo_cache_sentinel")?(m=()=>{et((0,p.canUseWebCodecs)())},v=[],R[9]=m,R[10]=v):(m=R[9],v=R[10]),(0,s.useEffect)(m,v),R[11]!==P||R[12]!==es||R[13]!==ee||R[14]!==D||R[15]!==eo||R[16]!==ea?(b=()=>{if(!D||!ee||!eo)return;let e=V.current,t=P.current;if(!e||!t)return;let r=null;return ea()&&(t.process=e=>{let t=X.current,r=W.current;t&&r&&(0,f.drawCoverFrame)(t,e,r.clientWidth,r.clientHeight)},K.current=0,(0,f.forceRedrawFrame)(t,0),ei(!0),r=new ResizeObserver(es),W.current&&r.observe(W.current),window.addEventListener("resize",es)),()=>{cancelAnimationFrame(J.current),window.removeEventListener("resize",es),ei(!1),X.current=null,r?.disconnect(),t.process=A}},x=[P,es,ee,D,eo,ea],R[11]=P,R[12]=es,R[13]=ee,R[14]=D,R[15]=eo,R[16]=ea,R[17]=b,R[18]=x):(b=R[17],x=R[18]),(0,s.useLayoutEffect)(b,x),R[19]!==P||R[20]!==U||R[21]!==j||R[22]!==er||R[23]!==C||R[24]!==M||R[25]!==G?($=()=>{if(j||C||!er)return;let e=P.current;if(!e?.manifest)return void M(!0);let{totalFrames:t}=e.manifest;if(t<=1)return void M(!0);let r={frame:0},i=t-1;en.current=!1,Z.current=!1,M(!1),K.current=0,(0,f.forceRedrawFrame)(e,0),Q.current=!0,Y.current?.kill(),Y.current=null;let o=W.current;o&&(o.style.visibility="visible",h.default.set(o,{opacity:1}));let a=()=>{en.current||(en.current=!0,Z.current=!0,K.current=i,e.setFrame(i),M(!0),q.current?.kill(),q.current=null)};q.current=h.default.to(r,{frame:i,paused:B.current,duration:2,ease:"none",onUpdate:()=>{if(B.current||(0,n.shouldPauseHeroPlayback)(U()))return void q.current?.pause();let t=Math.round(r.frame);K.current=t;try{e.setFrame(t)}catch{a();return}t>=i&&a()},onComplete:a});let s=()=>{if(q.current&&!en.current){if(B.current||(0,n.shouldPauseHeroPlayback)(U()))return void q.current.pause();q.current.play()}};s();let l=G(s);return()=>{l(),q.current?.kill(),q.current=null}},T=[P,U,j,er,C,M,G],R[19]=P,R[20]=U,R[21]=j,R[22]=er,R[23]=C,R[24]=M,R[25]=G,R[26]=$,R[27]=T):($=R[26],T=R[27]),(0,s.useEffect)($,T),R[28]!==F||R[29]!==U||R[30]!==N||R[31]!==H||R[32]!==C||R[33]!==z||R[34]!==G?(S=()=>{let e=()=>{let e=F(U())>0,t=N||Z.current,r=!H||!t&&!e,i=W.current;if(!i||Q.current===r)return;Q.current=r,Y.current?.kill();let n=.3*!C;if(r){z(!1),i.style.visibility="visible",Y.current=h.default.to(i,{opacity:1,duration:n,ease:E,overwrite:!0});return}Y.current=h.default.to(i,{opacity:0,duration:n,ease:E,overwrite:!0,onComplete:()=>{Q.current||(i.style.visibility="hidden",z(!0))}})};e();let t=G(e);return()=>{t(),Y.current?.kill(),Y.current=null,z(!1)}},I=[F,U,N,H,C,G,z],R[28]=F,R[29]=U,R[30]=N,R[31]=H,R[32]=C,R[33]=z,R[34]=G,R[35]=S,R[36]=I):(S=R[35],I=R[36]),(0,s.useEffect)(S,I),ee&&D&&"unsupported"!==O&&"error"!==O)?(R[37]===Symbol.for("react.memo_cache_sentinel")?(_=(0,t.jsx)(y,{ref:W,"aria-hidden":"true",children:(0,t.jsx)(w,{ref:V})}),R[37]=_):_=R[37],_):null};function A(){}T.displayName="Background";var S=e.i(486861),I=e.i(189897),_=e.i(607561),R=e.i(797489),j=e.i(274879),k=e.i(448806),C=e.i(875324),L=e.i(221781);let P=e=>{h.default.set(e,{autoAlpha:1,yPercent:0,willChange:"auto"})},O=e=>{let n,o,a,l,f,p,g,m,v,b,y=(0,r.c)(36),{description:w,editAttr:x}=e,{loaderMounted:E}=(0,s.use)(c.LoaderContext),{menuVisible:T}=(0,s.use)(u.MenuContext),{isReducedMotion:A}=(0,s.use)(d.PerformanceContext),{getProgress:O,subscribe:D,getHeroTextSegmentProgress:M}=(0,i.useStickyTrackStore)(),N=(0,k.usePageTransitioning)(),H=(0,s.useRef)(null);y[0]===Symbol.for("react.memo_cache_sentinel")?(n=[],y[0]=n):n=y[0];let z=(0,s.useRef)(n),U=(0,s.useRef)(!1),G=(0,s.useRef)(-1),[F,B]=(0,s.useState)(!1);y[1]!==w?(o=(0,I.cleanSanityString)(w),y[1]=w,y[2]=o):o=y[2];let W=o,V=!F&&(E||N||T),X=(0,j.useSplitTextRecovery)(H,W);y[3]!==W?(a=(0,S.escapeHtml)(W),y[3]=W,y[4]=a):a=y[4];let q=(0,R.useInnerHtml)(a);return(y[5]!==W||y[6]!==V||y[7]!==A?(l=()=>{if(!H.current||!W)return;let e=C.SplitText.create(H.current,{type:"lines",linesClass:"line",mask:"lines",aria:"none"}),{lines:t}=e;return(z.current=t,G.current=-1,t.length)?(h.default.set(H.current,{autoAlpha:1}),A||U.current)?(P(t),B(!0),()=>e.revert()):(h.default.set(t,{autoAlpha:0,yPercent:100,willChange:"opacity, transform"}),V)?()=>e.revert():(h.default.timeline({delay:1,onComplete:()=>{U.current=!0,B(!0),h.default.set(t,{willChange:"auto"})}}).to(t,{autoAlpha:1,yPercent:0,duration:L.DESCRIPTION_LINE_REVEAL,stagger:L.DESCRIPTION_LINE_GAP,ease:"power3.out"}),()=>e.revert()):()=>e.revert()},y[5]=W,y[6]=V,y[7]=A,y[8]=l):l=y[8],y[9]!==W||y[10]!==V||y[11]!==A||y[12]!==X?(f={scope:H,dependencies:[W,V,A,X]},y[9]=W,y[10]=V,y[11]=A,y[12]=X,y[13]=f):f=y[13],(0,_.useAnimation)(l,f),y[14]!==M||y[15]!==O||y[16]!==F||y[17]!==A||y[18]!==D?(p=()=>{if(!F||A)return;let e=()=>{let e=z.current;if(!e.length)return;let t=.002*Math.round(M(O())/.002);if(t!==G.current){if(G.current=t,t<=0)return void P(e);for(let[r,i]of e.entries()){let n=(0,L.getStaggeredSegmentProgress)(t,r,e.length,L.DESCRIPTION_LINE_GAP,L.DESCRIPTION_LINE_REVEAL);h.default.set(i,{autoAlpha:1-n,yPercent:100*n,willChange:"opacity, transform"})}}};return e(),D(e)},y[14]=M,y[15]=O,y[16]=F,y[17]=A,y[18]=D,y[19]=p):p=y[19],y[20]!==M||y[21]!==O||y[22]!==F||y[23]!==A||y[24]!==X||y[25]!==D?(g=[M,O,F,A,D,X],y[20]=M,y[21]=O,y[22]=F,y[23]=A,y[24]=X,y[25]=D,y[26]=g):g=y[26],(0,s.useEffect)(p,g),W)?(y[27]!==W?(m=(0,t.jsx)("span",{className:"sr-only",children:W}),y[27]=W,y[28]=m):m=y[28],y[29]!==q||y[30]!==W||y[31]!==x?(v=(0,t.jsx)($,{ref:H,"aria-hidden":!0,$m:"$3/11",$l:"4/10",$xl:"5/9","data-sanity":x,dangerouslySetInnerHTML:q},W),y[29]=q,y[30]=W,y[31]=x,y[32]=v):v=y[32],y[33]!==m||y[34]!==v?(b=(0,t.jsxs)(t.Fragment,{children:[m,v]}),y[33]=m,y[34]=v,y[35]=b):b=y[35],b):null};O.displayName="HeroDescription";let D=(e,t)=>{let r=e.getBoundingClientRect(),i=r.left+r.width/2,n=r.top+r.height/2;for(let e of t){let t=e.getBoundingClientRect();h.default.set(e,{transformOrigin:`${i-t.left}px ${n-t.top}px`})}},M=e=>{h.default.set(e,{autoAlpha:1,scale:1,display:"inline-block",verticalAlign:"top",filter:"blur(0px)",willChange:"auto"})},N=e=>{let n,o,a,l,f,p,g,m,v,b,y=(0,r.c)(34),{title:w,editAttr:$}=e,{loaderMounted:E}=(0,s.use)(c.LoaderContext),{menuVisible:T}=(0,s.use)(u.MenuContext),{isReducedMotion:A}=(0,s.use)(d.PerformanceContext),{getProgress:P,subscribe:O,getHeroTextSegmentProgress:N}=(0,i.useStickyTrackStore)(),H=(0,k.usePageTransitioning)(),z=(0,s.useRef)(null);y[0]===Symbol.for("react.memo_cache_sentinel")?(n=[],y[0]=n):n=y[0];let U=(0,s.useRef)(n),G=(0,s.useRef)(!1),F=(0,s.useRef)(-1),[B,W]=(0,s.useState)(!1);y[1]!==w?(o=(0,I.cleanSanityString)(w),y[1]=w,y[2]=o):o=y[2];let V=o,X=!B&&(E||H||T),q=(0,j.useSplitTextRecovery)(z,V);y[3]!==V?(a=(0,S.escapeHtml)(V),y[3]=V,y[4]=a):a=y[4];let Y=(0,R.useInnerHtml)(a);return(y[5]!==V||y[6]!==X||y[7]!==A?(l=()=>{if(!z.current||!V)return;let e=C.SplitText.create(z.current,{type:"words"}),{words:t}=e;return(U.current=t,F.current=-1,t.length)?(h.default.set(z.current,{autoAlpha:1}),A||G.current)?(M(t),W(!0),()=>e.revert()):(D(z.current,t),h.default.set(t,{autoAlpha:0,scale:L.TITLE_SCALE_START,display:"inline-block",verticalAlign:"top",filter:`blur(${L.TITLE_BLUR_START}px)`,willChange:"opacity, transform, filter"}),X)?()=>e.revert():(h.default.timeline({delay:.75,onComplete:()=>{G.current=!0,W(!0),h.default.set(t,{willChange:"auto"})}}).to(t,{autoAlpha:1,scale:1,filter:"blur(0px)",duration:L.TITLE_WORD_REVEAL,stagger:L.TITLE_WORD_GAP,ease:"power2.out"}),()=>e.revert()):()=>e.revert()},y[5]=V,y[6]=X,y[7]=A,y[8]=l):l=y[8],y[9]!==V||y[10]!==X||y[11]!==A||y[12]!==q?(f={scope:z,dependencies:[V,X,A,q]},y[9]=V,y[10]=X,y[11]=A,y[12]=q,y[13]=f):f=y[13],(0,_.useAnimation)(l,f),y[14]!==B?(p=()=>{B&&z.current&&U.current.length&&D(z.current,U.current)},g=[B],y[14]=B,y[15]=p,y[16]=g):(p=y[15],g=y[16]),(0,s.useEffect)(p,g),y[17]!==N||y[18]!==P||y[19]!==B||y[20]!==A||y[21]!==O?(m=()=>{if(!B||A)return;let e=()=>{let e=U.current;if(!e.length)return;let t=.002*Math.round(N(P())/.002);if(t!==F.current){if(F.current=t,t<=0)return void M(e);for(let[r,i]of e.entries()){let{scale:n,opacity:o,blur:a}=(0,L.getGrowOutWordValues)(t,r,e.length);h.default.set(i,{autoAlpha:o,scale:n,filter:`blur(${a}px)`})}}};return e(),O(e)},y[17]=N,y[18]=P,y[19]=B,y[20]=A,y[21]=O,y[22]=m):m=y[22],y[23]!==N||y[24]!==P||y[25]!==B||y[26]!==A||y[27]!==q||y[28]!==O?(v=[N,P,B,A,O,q],y[23]=N,y[24]=P,y[25]=B,y[26]=A,y[27]=q,y[28]=O,y[29]=v):v=y[29],(0,s.useEffect)(m,v),V)?(y[30]!==V||y[31]!==$||y[32]!==Y?(b=(0,t.jsx)(x,{ref:z,$s:"1/5",$m:"2/6",$l:"4/10","data-sanity":$,dangerouslySetInnerHTML:Y},V),y[30]=V,y[31]=$,y[32]=Y,y[33]=b):b=y[33],b):null};N.displayName="HeroTitle";let H=e=>{let l,c,u,d,f,p,h,g,m=(0,r.c)(20),{title:v,description:y,textScrollLength:w,documentId:x,documentType:$}=e,E=void 0===w?n.DEFAULT_HERO_TEXT_SCROLL_LENGTH:w,{setHeroTextScrollLength:A}=(0,i.useStickyTrackStore)();m[0]!==x||m[1]!==$?(l=(0,o.sanityEditAttr)({id:x,type:$,path:"heroHeading"}),m[0]=x,m[1]=$,m[2]=l):l=m[2];let S=l;m[3]!==x||m[4]!==$?(c=(0,o.sanityEditAttr)({id:x,type:$,path:"heroDescription"}),m[3]=x,m[4]=$,m[5]=c):c=m[5];let I=c;return m[6]!==A||m[7]!==E?(u=()=>(A(E),()=>{A(n.DEFAULT_HERO_TEXT_SCROLL_LENGTH)}),d=[A,E],m[6]=A,m[7]=E,m[8]=u,m[9]=d):(u=m[8],d=m[9]),(0,s.useLayoutEffect)(u,d),m[10]===Symbol.for("react.memo_cache_sentinel")?(f=(0,t.jsx)(T,{}),m[10]=f):f=m[10],m[11]!==v||m[12]!==S?(p=(0,t.jsx)(a.default,{"data-text":"top",children:(0,t.jsx)(N,{title:v,editAttr:S})}),m[11]=v,m[12]=S,m[13]=p):p=m[13],m[14]!==y||m[15]!==I?(h=(0,t.jsx)(a.default,{"data-text":"bottom",children:(0,t.jsx)(O,{description:y,editAttr:I})}),m[14]=y,m[15]=I,m[16]=h):h=m[16],m[17]!==p||m[18]!==h?(g=(0,t.jsxs)(b,{"data-page-route":"/",children:[f,p,h]}),m[17]=p,m[18]=h,m[19]=g):g=m[19],g};H.displayName="Hero",e.s(["default",0,H],601969)},958643,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(322208),n=e.i(867308),o=e.i(992325),a=e.i(271645),s=e.i(383520),l=e.i(101384),c=e.i(456393),u=e.i(259553),d=e.i(478430),f=e.i(831119),p=e.i(607561),h=e.i(989970);let g=16/9,m=`
attribute vec2 position;
varying vec2 uv;
void main() {
  uv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`,v=`
precision highp float;
varying vec2 uv;
uniform sampler2D colour;
uniform sampler2D depth;
uniform vec2 coverScale;
uniform vec2 offset;
float softenedDepth(vec2 point) {
  vec2 stepSize = vec2(${.008/g}, 0.008);
  float value = texture2D(depth, point).r * 4.0;
  value += texture2D(depth, point + vec2(stepSize.x, 0.0)).r * 2.0;
  value += texture2D(depth, point - vec2(stepSize.x, 0.0)).r * 2.0;
  value += texture2D(depth, point + vec2(0.0, stepSize.y)).r * 2.0;
  value += texture2D(depth, point - vec2(0.0, stepSize.y)).r * 2.0;
  value += texture2D(depth, point + stepSize).r;
  value += texture2D(depth, point - stepSize).r;
  value += texture2D(depth, point + vec2(stepSize.x, -stepSize.y)).r;
  value += texture2D(depth, point + vec2(-stepSize.x, stepSize.y)).r;
  return value / 16.0;
}
void main() {
  vec2 depthUV = (uv - 0.5) * coverScale + 0.5;
  float distance = softenedDepth(depthUV);
  vec2 displaced = clamp(uv + offset * (distance - 0.5), 0.001, 0.999);
  gl_FragColor = vec4(texture2D(colour, displaced).rgb, 1.0);
}`;var b=e.i(255981);let y=(e,t,r)=>e?t??"/videos/intro-scroll.af":r??"/videos/intro-scroll.af";var w=e.i(575509),x=e.i(212960),$=e.i(997053);let E=(0,$.default)(w.Div).attrs({as:"section"}).withConfig({componentId:"sc-2b039258-0"})(({$elevated:e=!1})=>$.css`
		position: absolute;
		z-index: ${e?3:1};
		inset: 0;
		width: 100%;
		height: 100dvh;
		overflow: hidden;
		pointer-events: none;
	`),T=$.default.div.withConfig({componentId:"sc-2b039258-1"})(()=>$.css`
		position: absolute;
		inset: 0;
		pointer-events: none;
	`),A=$.default.canvas.withConfig({componentId:"sc-2b039258-2"})(()=>$.css`
		display: block;
		width: 100%;
		height: 100%;
	`),S=$.default.div.withConfig({componentId:"sc-2b039258-3"})(()=>$.css`
		position: absolute;
		z-index: 2;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-inline: ${(0,w.getGap)("l")};
		pointer-events: none;
	`),I=(0,$.default)(w.Div).attrs({as:"h2"}).withConfig({componentId:"sc-2b039258-4"})(()=>$.css`
		${x.headlineS}
		text-align: center;
		text-wrap: balance;
		visibility: hidden;
		opacity: 0;

		${w.bp.l`
			text-wrap: balance;
		`}
	`),_=$.default.div.withConfig({componentId:"sc-2b039258-5"})(()=>$.css`
		position: absolute;
		inset: 0;
	`),R=$.default.canvas.withConfig({componentId:"sc-2b039258-6"})(()=>$.css`
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		visibility: hidden;
		pointer-events: none;
	`),j=e=>{let o,w,x,$,E,S,I,j,L,P,O,D,M,N,H,z,U,G,F=(0,r.c)(47),{desktopVideoSrc:B,mobileVideoSrc:W}=e,{getProgress:V,subscribe:X,getIntroSegmentProgress:q}=(0,i.useStickyTrackStore)(),{isReducedMotion:Y,devicePixelRatio:K,isLowPowerMode:J}=(0,a.use)(l.PerformanceContext),{setIntroFrameReady:Z,setHasIntroVideo:Q}=(0,a.use)(s.HeroVideoContext),ee=(0,b.useIsDesktopViewport)(),et=(0,a.useRef)(null),er=(0,a.useRef)(null),ei=(0,a.useRef)(null),en=(0,a.useRef)(null),eo=(0,a.useRef)(null),ea=(0,a.useRef)(null),es=(0,a.useRef)(-1),el=(0,a.useRef)(-1),ec=(0,a.useRef)(0),[eu,ed]=(0,a.useState)("idle");F[0]!==B||F[1]!==ee||F[2]!==W?(o=()=>y(ee,B,W),F[0]=B,F[1]=ee,F[2]=W,F[3]=o):o=F[3];let[ef,ep]=(0,a.useState)(o),eh=((e,t,n,o,c)=>{let u,b,y,w,x,$=(0,r.c)(29),{loaderMounted:E}=(0,a.use)(d.LoaderContext),{isHeroPlaybackComplete:T,isHeroFrameSettled:A}=(0,a.use)(s.HeroVideoContext),{menuOpen:S}=(0,a.use)(f.MenuContext),{isReducedMotion:I,isLowPowerMode:_}=(0,a.use)(l.PerformanceContext),{getProgress:R,getIntroSegmentProgress:j,subscribe:k}=(0,i.useStickyTrackStore)(),C=(0,a.useRef)(null);$[0]===Symbol.for("react.memo_cache_sentinel")?(u=()=>C.current?.(),$[0]=u):u=$[0];let L=u;return $[1]!==t||$[2]!==n||$[3]!==j||$[4]!==R||$[5]!==A||$[6]!==T||$[7]!==_||$[8]!==o||$[9]!==I||$[10]!==E||$[11]!==S||$[12]!==k||$[13]!==e||$[14]!==c?(b=r=>{let{isDesktop:i,hasPointer:a}=r,s=t.current,l=e.current,u=n.current;if(!s||!l||!u||!o||!i||!a||I||_||E||!T||!A||S)return;let d=c.includes("/1edf555085ef9a6ae1dde1a1bbc3ea6ff806db34.af")?((e,t)=>{let r=e.getContext("webgl",{alpha:!1,antialias:!1,depth:!1});if(!r)return null;let i=[],n=[],o=r.createProgram(),a=r.createBuffer(),s=!1,l=!1,c=!0,u=new Image,d=()=>{e.style.visibility="hidden"},f=()=>{for(let t of(l=!0,s=!1,u.onload=null,u.onerror=null,e.removeEventListener("webglcontextlost",d),d(),n))r.deleteTexture(t);for(let e of i)r.deleteShader(e);r.deleteBuffer(a),r.deleteProgram(o)};if(!o||!a)return f(),null;for(let[e,t]of[[r.VERTEX_SHADER,m],[r.FRAGMENT_SHADER,v]]){let n=r.createShader(e);if(!n||(i.push(n),r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS)))return f(),null;r.attachShader(o,n)}if(r.linkProgram(o),!r.getProgramParameter(o,r.LINK_STATUS))return f(),null;r.useProgram(o),r.bindBuffer(r.ARRAY_BUFFER,a),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),r.STATIC_DRAW);let p=r.getAttribLocation(o,"position");r.enableVertexAttribArray(p),r.vertexAttribPointer(p,2,r.FLOAT,!1,0,0),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0);for(let e=0;e<2;e++){let t=r.createTexture();if(!t)return f(),null;n.push(t),r.activeTexture(r.TEXTURE0+e),r.bindTexture(r.TEXTURE_2D,t),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}r.uniform1i(r.getUniformLocation(o,"colour"),0),r.uniform1i(r.getUniformLocation(o,"depth"),1);let h=r.getUniformLocation(o,"coverScale"),b=r.getUniformLocation(o,"offset");return u.onload=()=>{l||r.isContextLost()||(r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,n[1]),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,u),s=!0)},u.onerror=d,u.src="/images/hero-depth/lineup.webp",e.addEventListener("webglcontextlost",d),{invalidate:()=>{c=!0},draw:(i,o)=>{if(!s||l||r.isContextLost()||Math.abs(i)+Math.abs(o)<1e-4)return void d();(e.width!==t.width||e.height!==t.height)&&(e.width=t.width,e.height=t.height,c=!0);let a=t.width/t.height;r.viewport(0,0,e.width,e.height),r.uniform2f(h,a>g?1:a/g,a>g?g/a:1),r.uniform2f(b,.003*i,-(.003*o)),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,n[0]);try{c&&(r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),c=!1),r.drawArrays(r.TRIANGLE_STRIP,0,4),e.style.visibility="visible"}catch{d()}},destroy:f}})(u,s):null,f={x:0,y:0,strength:0},p=!1;h.default.set(l,{transformPerspective:1200,transformOrigin:"50% 50%"});let b=()=>{let e=f.x*f.strength,t=f.y*f.strength;d?.draw(e,t),h.default.set(l,{xPercent:.6*e,yPercent:.6*t,rotationY:-(.5*e),rotationX:.5*t,scale:1+.025*f.strength})};C.current=()=>{d?.invalidate(),b()};let y=h.default.quickTo(f,"x",{duration:.7,ease:"power3.out",onUpdate:b}),w=h.default.quickTo(f,"y",{duration:.7,ease:"power3.out",onUpdate:b}),x=h.default.quickTo(f,"strength",{duration:.7,ease:"power3.out",onUpdate:b}),$=()=>{let e=Math.min(1,Math.max(0,j(R())/.12));x(!E&&T&&!S&&p?1-e*e*(3-2*e):0)},L=e=>{"mouse"===e.pointerType&&(y(h.default.utils.clamp(-1,1,e.clientX/window.innerWidth*2-1)),w(h.default.utils.clamp(-1,1,e.clientY/window.innerHeight*2-1)),p=!0,$())},P=()=>{p=!1,$()};$();let O=k($);return window.addEventListener("pointermove",L,{passive:!0}),window.addEventListener("blur",P),document.documentElement.addEventListener("pointerleave",P),()=>{O(),C.current=null,d?.destroy(),window.removeEventListener("pointermove",L),window.removeEventListener("blur",P),document.documentElement.removeEventListener("pointerleave",P)}},$[1]=t,$[2]=n,$[3]=j,$[4]=R,$[5]=A,$[6]=T,$[7]=_,$[8]=o,$[9]=I,$[10]=E,$[11]=S,$[12]=k,$[13]=e,$[14]=c,$[15]=b):b=$[15],$[16]!==A||$[17]!==T||$[18]!==_||$[19]!==o||$[20]!==I||$[21]!==E||$[22]!==S||$[23]!==c?(y=[o,c,E,T,A,S,I,_],$[16]=A,$[17]=T,$[18]=_,$[19]=o,$[20]=I,$[21]=E,$[22]=S,$[23]=c,$[24]=y):y=$[24],$[25]!==e||$[26]!==y?(w={scope:e,dependencies:y},$[25]=e,$[26]=y,$[27]=w):w=$[27],$[28]===Symbol.for("react.memo_cache_sentinel")?(x={hasPointer:"(hover: hover) and (pointer: fine)"},$[28]=x):x=$[28],(0,p.useAnimation)(b,w,x),L})(er,en,ei,"ready"===eu,ef);F[4]!==K||F[5]!==J?(w=()=>{let e=en.current,t=et.current;if(!e||!t)return!1;let r=Math.min(K,J?1:1.5),{clientWidth:i,clientHeight:n}=t;if(!i||!n)return!1;e.width=Math.round(i*r),e.height=Math.round(n*r),e.style.width=`${i}px`,e.style.height=`${n}px`;let o=e.getContext("2d");return!!o&&(eo.current=o,o.setTransform(r,0,0,r,0,0),!0)},F[4]=K,F[5]=J,F[6]=w):w=F[6];let eg=w;F[7]!==eg?(x=()=>{cancelAnimationFrame(ec.current),ec.current=requestAnimationFrame(()=>{if(!eg())return;let e=ea.current;e&&(0,c.forceRedrawFrame)(e,es.current)})},F[7]=eg,F[8]=x):x=F[8];let em=x;F[9]!==q?($=e=>{let t=ea.current;if(!t?.manifest)return;let r=q(e),i=r<=0?0:Math.round(r*(t.manifest.totalFrames-1));i!==es.current&&(es.current=i,t.setFrame(i))},F[9]=q,F[10]=$):$=F[10];let ev=$;F[11]!==q||F[12]!==V||F[13]!==eu||F[14]!==ev?(E=()=>{if("ready"!==eu)return;let e=q(V()),t=1-(0,n.getIntroOutroSegmentProgress)(e);ev(V()),et.current&&el.current!==t&&(el.current=t,et.current.style.opacity=String(t))},F[11]=q,F[12]=V,F[13]=eu,F[14]=ev,F[15]=E):E=F[15];let eb=E;return(F[16]!==eb||F[17]!==eu||F[18]!==X?(S=()=>{if("ready"===eu)return eb(),X(eb)},I=[eb,eu,X],F[16]=eb,F[17]=eu,F[18]=X,F[19]=S,F[20]=I):(S=F[19],I=F[20]),(0,a.useEffect)(S,I),F[21]!==B||F[22]!==ee||F[23]!==W?(j=()=>{ep(y(ee,B,W))},L=[B,W,ee],F[21]=B,F[22]=ee,F[23]=W,F[24]=j,F[25]=L):(j=F[24],L=F[25]),(0,a.useEffect)(j,L),F[26]!==Y||F[27]!==ef?(P=()=>{if(Y||!("VideoDecoder"in window))return void ed("unsupported");if(!ef)return;let e=!1,t=new AbortController;return(async()=>{ed("loading");try{await (0,u.promiseWithTimeout)((0,c.waitForActiveFrameRuntime)(t.signal),2e4,"ActiveFrame runtime never arrived")}catch(t){e||(console.warn("Introduction video runtime failed:",t),ed("error"));return}if(e||!window.ActiveFrame)return;ea.current?.destroy(),ea.current=null,es.current=-1;let r=new window.ActiveFrame(ef,{hardwareAcceleration:"prefer-hardware",process:k});ea.current=r;try{if(await (0,u.promiseWithTimeout)(r.loading,2e4,"Introduction video preload timed out"),e){r.destroy(),ea.current===r&&(ea.current=null);return}ed("ready")}catch(t){console.warn("Introduction video preload failed:",t),e||ed("error"),r.destroy(),ea.current===r&&(ea.current=null)}})(),()=>{e=!0,t.abort(),ea.current?.destroy(),ea.current=null}},O=[Y,ef],F[26]=Y,F[27]=ef,F[28]=P,F[29]=O):(P=F[28],O=F[29]),(0,a.useEffect)(P,O),F[30]!==V||F[31]!==em||F[32]!==eu||F[33]!==eh||F[34]!==ev||F[35]!==Z||F[36]!==eg?(D=()=>{if("ready"!==eu)return;let e=en.current,t=ea.current;if(!e||!t)return;let r=null;return(()=>{if(!eg())return;let e=!1;t.process=t=>{let r=eo.current,i=et.current;r&&i&&((0,c.drawCoverFrame)(r,t,i.clientWidth,i.clientHeight),eh(),e||(e=!0,Z(!0)))},ev(V()),r=new ResizeObserver(em),et.current&&r.observe(et.current),window.addEventListener("resize",em)})(),()=>{cancelAnimationFrame(ec.current),window.removeEventListener("resize",em),r?.disconnect(),eo.current=null,t.process=C}},M=[V,em,eu,ev,Z,eg,eh],F[30]=V,F[31]=em,F[32]=eu,F[33]=eh,F[34]=ev,F[35]=Z,F[36]=eg,F[37]=D,F[38]=M):(D=F[37],M=F[38]),(0,a.useEffect)(D,M),F[39]!==Q?(N=()=>(Q(!0),()=>Q(!1)),H=[Q],F[39]=Q,F[40]=N,F[41]=H):(N=F[40],H=F[41]),(0,a.useEffect)(N,H),F[42]!==eu||F[43]!==Z?(z=()=>{("unsupported"===eu||"error"===eu)&&Z(!0)},U=[eu,Z],F[42]=eu,F[43]=Z,F[44]=z,F[45]=U):(z=F[44],U=F[45]),(0,a.useEffect)(z,U),"unsupported"===eu||"error"===eu)?null:(F[46]===Symbol.for("react.memo_cache_sentinel")?(G=(0,t.jsx)(T,{ref:et,"aria-hidden":"true",children:(0,t.jsxs)(_,{ref:er,children:[(0,t.jsx)(A,{ref:en}),(0,t.jsx)(R,{ref:ei})]})}),F[46]=G):G=F[46],G)};function k(){}function C(){}j.displayName="IntroductionBackground";var L=e.i(481293);let P={minWidth:1024,moveDistance:15,stopDuration:350,trailLength:5},O=$.default.div.withConfig({componentId:"sc-d2fec375-0"})(({$isActive:e=!1})=>$.css`
		position: absolute;
		z-index: 1;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: ${e?"auto":"none"};
	`),D=$.default.div.withConfig({componentId:"sc-d2fec375-1"})(()=>$.css`
		position: relative;
		width: 100%;
		height: 100%;
	`),M=$.default.div.withConfig({componentId:"sc-d2fec375-2"})(()=>$.css`
		position: absolute;
		width: 21.6rem;
		height: 27rem;
		overflow: hidden;
		border-radius: 0.3125em;
		opacity: 0;
		visibility: hidden;
	`),N=$.default.img.withConfig({componentId:"sc-d2fec375-3"})(()=>$.css`
		width: 100%;
		height: 100%;
		object-fit: cover;
	`),H=e=>{let o,s,c,u,d,f,p,g,m=(0,r.c)(20),{images:v}=e;m[0]!==v?(o=void 0===v?[]:v,m[0]=v,m[1]=o):o=m[1];let b=o,{isReducedMotion:y}=(0,a.use)(l.PerformanceContext),{getProgress:w,subscribe:x,getIntroSegmentProgress:$}=(0,i.useStickyTrackStore)(),E=(0,a.useRef)(null),[T,A]=(0,a.useState)(!1);m[2]!==b?(s=b.map(z).filter(U),m[2]=b,m[3]=s):s=m[3];let S=s;m[4]!==S?(c=S.map(G).join("|"),m[4]=S,m[5]=c):c=m[5];let I=c;return(m[6]!==$||m[7]!==w||m[8]!==I||m[9]!==y||m[10]!==x?(u=()=>{let e=E.current;if(!e||!I||y)return;let t=((e,t={})=>{let r={...P,...t};if(window.innerWidth<r.minWidth)return null;let i=Array.from(e.querySelectorAll('[data-trail="item"]'));if(!i.length)return null;let n=Math.max(1,Math.min(r.trailLength,i.length-1)),o={trailInterval:null,globalIndex:0,last:{x:0,y:0},trailImageTimestamps:new Map,isActive:!1},a=new Map,s=e=>{h.default.to(e,{opacity:0,scale:.2,duration:.8,ease:"expo.out",onComplete:()=>{h.default.set(e,{autoAlpha:0})}})},l=t=>{let l,c,u;if(!o.isActive)return;let d=e.getBoundingClientRect(),{x:f,y:p}={x:t.clientX-d.left,y:t.clientY-d.top};if(l=f,c=p,u=o.last.x,Math.hypot(u-l,o.last.y-c)>window.innerWidth/r.moveDistance){var g;let e,t;if(g=i[o.globalIndex%i.length],e=a.get(g)??{width:g.offsetWidth,height:g.offsetHeight},a.has(g)||a.set(g,e),t={left:`${f-e.width/2}px`,top:`${p-e.height/2}px`,zIndex:String(o.globalIndex),display:"block"},Object.assign(g.style,t),o.trailImageTimestamps.set(g,Date.now()),h.default.fromTo(g,{autoAlpha:0,scale:.8},{scale:1,autoAlpha:1,duration:.2,overwrite:!0}),o.last={x:f,y:p},o.globalIndex>=n){let e=(o.globalIndex-n+i.length)%i.length,t=i[e];t&&s(t)}o.globalIndex++}},c=()=>{let e=Date.now();for(let[t,i]of o.trailImageTimestamps.entries())e-i>r.stopDuration&&(s(t),o.trailImageTimestamps.delete(t))},u=()=>{if(o.isActive){for(let t of(o.isActive=!1,e.removeEventListener("mousemove",l),o.trailInterval&&(clearInterval(o.trailInterval),o.trailInterval=null),i))s(t);o.trailImageTimestamps.clear()}},d=()=>{window.innerWidth<r.minWidth&&o.isActive&&u()};return window.addEventListener("resize",d),{start:()=>{if(!o.isActive&&!(window.innerWidth<r.minWidth)){for(let e of i)a.set(e,{width:e.offsetWidth,height:e.offsetHeight});o.isActive=!0,e.addEventListener("mousemove",l),o.trailInterval=setInterval(c,100)}},stop:u,destroy:()=>{u(),window.removeEventListener("resize",d)}}})(e);if(!t)return;let r=()=>{let e=(0,n.getIntroOutroSegmentProgress)($(w()))>=.95;A(t=>t===e?t:e),e?t.start():t.stop()};r();let i=x(r);return()=>{i(),t.destroy()}},d=[$,w,I,y,x],m[6]=$,m[7]=w,m[8]=I,m[9]=y,m[10]=x,m[11]=u,m[12]=d):(u=m[11],d=m[12]),(0,a.useEffect)(u,d),!S.length||y)?null:(m[13]!==S?(f=S.map(F),m[13]=S,m[14]=f):f=m[14],m[15]!==f?(p=(0,t.jsx)(D,{className:"trail-list",children:f}),m[15]=f,m[16]=p):p=m[16],m[17]!==T||m[18]!==p?(g=(0,t.jsx)(O,{ref:E,"data-trail":"wrapper",$isActive:T,"aria-hidden":"true",children:p}),m[17]=T,m[18]=p,m[19]=g):g=m[19],g)};function z(e){return(0,L.resolveImageWithAlt)(e)}function U(e){return!!e}function G(e){return e.src}function F(e){return(0,t.jsx)(M,{"data-trail":"item",children:(0,t.jsx)(N,{src:e.src,alt:e.alt,draggable:!1,loading:"lazy",decoding:"async"})},e.src)}H.displayName="ImageTrail";var B=e.i(221781),W=e.i(486861),V=e.i(189897),X=e.i(875324),q=e.i(797489),Y=e.i(274879);let K=e=>{if(!e.length)return;let t=1/0,r=1/0,i=-1/0,n=-1/0;for(let o of e){let e=o.offsetLeft,a=o.offsetTop,s=e+o.offsetWidth,l=a+o.offsetHeight;t=Math.min(t,e),r=Math.min(r,a),i=Math.max(i,s),n=Math.max(n,l)}let o=(t+i)/2,a=(r+n)/2;for(let t of e)h.default.set(t,{transformOrigin:`${o-t.offsetLeft}px ${a-t.offsetTop}px`,force3D:!0})},J=e=>{h.default.set(e,{autoAlpha:0,scale:B.TITLE_SCALE_START,yPercent:0,filter:`blur(${B.TITLE_BLUR_START}px)`,display:"inline-block",verticalAlign:"top",willChange:"opacity, transform, filter"})},Z=e=>{h.default.set(e,{autoAlpha:1,scale:1,yPercent:0,filter:"blur(0px)",display:"inline-block",verticalAlign:"top",willChange:"auto"})},Q=e=>{let o,s,c,u,d,f,g,m,v,y,w,x,$=(0,r.c)(40),{heading:E,editAttr:T}=e,{isReducedMotion:A}=(0,a.use)(l.PerformanceContext),{getProgress:_,subscribe:R,getIntroSegmentProgress:j,getApproachEntryProgress:k}=(0,i.useStickyTrackStore)(),C=(0,b.useIsDesktopViewport)(),L=(0,a.useRef)(null),P=(0,a.useRef)(null);$[0]===Symbol.for("react.memo_cache_sentinel")?(o=[],$[0]=o):o=$[0];let O=(0,a.useRef)(o),D=(0,a.useRef)("hidden"),M=(0,a.useRef)(-1),N=(0,a.useRef)(-1);if($[1]!==E?.line1||$[2]!==E?.line2){let e=(0,V.cleanSanityString)(E?.line1),t=(0,V.cleanSanityString)(E?.line2);s=!!(e||t),c=`${e}|${t}`,f=q.useInnerHtml,u=(0,W.escapeHtml)(e),d=(0,W.escapeHtml)(t),$[1]=E?.line1,$[2]=E?.line2,$[3]=s,$[4]=c,$[5]=u,$[6]=d,$[7]=f}else s=$[3],c=$[4],u=$[5],d=$[6],f=$[7];$[8]!==u||$[9]!==d?(g=[u,d].filter(Boolean),$[8]=u,$[9]=d,$[10]=g):g=$[10];let H=f(g.join("<br />")),z=(0,Y.useSplitTextRecovery)(L,c);return($[11]!==s||$[12]!==A?(m=()=>{if(!L.current||!s)return;let e=X.SplitText.create(L.current,{type:"words"}),{words:t}=e;return(O.current=t,D.current="hidden",M.current=-1,t.length)?(h.default.set(L.current,{autoAlpha:1}),A)?(Z(t),()=>e.revert()):(K(t),J(t),()=>e.revert()):()=>e.revert()},$[11]=s,$[12]=A,$[13]=m):m=$[13],$[14]!==s||$[15]!==c||$[16]!==A||$[17]!==z?(v={scope:L,dependencies:[s,c,A,z]},$[14]=s,$[15]=c,$[16]=A,$[17]=z,$[18]=v):v=$[18],(0,p.useAnimation)(m,v),$[19]!==k||$[20]!==j||$[21]!==_||$[22]!==s||$[23]!==C||$[24]!==A||$[25]!==R?(y=()=>{if(!s||A)return;let e=()=>{let e=O.current,t=P.current;if(!e.length||!L.current||!t)return;let r=.002*Math.round((0,n.getIntroOutroSegmentProgress)(j(_()))/.002),i=.002*Math.round(k()/.002);if(C&&i>0){let e;if(i===N.current)return;N.current=i;let{opacity:r,blur:n}={opacity:1-(e=Math.min(1,Math.max(0,i)/.7)),blur:12*e};h.default.set(t,{autoAlpha:r,filter:`blur(${n}px)`,willChange:"opacity, filter"});return}if(-1!==N.current&&(N.current=-1,h.default.set(t,{autoAlpha:1,filter:"blur(0px)",willChange:"auto"})),r<=0){"hidden"!==D.current&&(h.default.set(t,{y:0,willChange:"auto"}),J(e),D.current="hidden",M.current=-1);return}if(r>=1){"visible"!==D.current&&(h.default.set(t,{y:0,willChange:"auto"}),K(e),Z(e),D.current="visible",M.current=1);return}if("animating"===D.current&&r===M.current)return;let o="animating"!==D.current;for(let[i,n]of(D.current="animating",M.current=r,o&&(h.default.set(t,{y:0,willChange:"auto"}),K(e)),e.entries())){let{scale:t,opacity:o,blur:a}=(0,B.getIntroGrowInWordValues)(r,i,e.length);h.default.set(n,{autoAlpha:o,scale:t,yPercent:0,filter:`blur(${a}px)`})}};return e(),R(e)},$[19]=k,$[20]=j,$[21]=_,$[22]=s,$[23]=C,$[24]=A,$[25]=R,$[26]=y):y=$[26],$[27]!==k||$[28]!==j||$[29]!==_||$[30]!==s||$[31]!==C||$[32]!==A||$[33]!==z||$[34]!==R?(w=[k,j,_,s,C,A,R,z],$[27]=k,$[28]=j,$[29]=_,$[30]=s,$[31]=C,$[32]=A,$[33]=z,$[34]=R,$[35]=w):w=$[35],(0,a.useEffect)(y,w),s)?($[36]!==T||$[37]!==H||$[38]!==c?(x=(0,t.jsx)(S,{ref:P,children:(0,t.jsx)(I,{ref:L,"data-sanity":T,dangerouslySetInnerHTML:H},c)}),$[36]=T,$[37]=H,$[38]=c,$[39]=x):x=$[39],x):null};Q.displayName="IntroductionHeading";let ee=e=>{let s,l,c,u,d,f,p,h,g,m=(0,r.c)(25),{heading:v,desktopVideoSrc:b,mobileVideoSrc:y,gallery:w,scrollLength:x,documentId:$,documentType:T}=e,A=void 0===x?n.DEFAULT_INTRO_SCROLL_LENGTH:x,{setIntroScrollLength:S,getProgress:I,subscribe:_,getIntroSegmentProgress:R}=(0,i.useStickyTrackStore)(),[k,C]=(0,a.useState)(!1);m[0]!==A||m[1]!==S?(s=()=>(S(A),()=>{S(n.DEFAULT_INTRO_SCROLL_LENGTH)}),l=[A,S],m[0]=A,m[1]=S,m[2]=s,m[3]=l):(s=m[2],l=m[3]),(0,a.useLayoutEffect)(s,l),m[4]!==R||m[5]!==I||m[6]!==_?(c=()=>{let e=()=>{let e=(0,n.getIntroOutroSegmentProgress)(R(I()))>0;C(t=>t===e?t:e)};return e(),_(e)},u=[R,I,_],m[4]=R,m[5]=I,m[6]=_,m[7]=c,m[8]=u):(c=m[7],u=m[8]),(0,a.useEffect)(c,u),m[9]!==$||m[10]!==T?(d=(0,o.sanityEditAttr)({id:$,type:T,path:"introductionHeading"}),m[9]=$,m[10]=T,m[11]=d):d=m[11];let L=d;m[12]!==b||m[13]!==y?(f=(0,t.jsx)(j,{desktopVideoSrc:b,mobileVideoSrc:y}),m[12]=b,m[13]=y,m[14]=f):f=m[14];let P=w??void 0;m[15]!==P?(p=(0,t.jsx)(H,{images:P}),m[15]=P,m[16]=p):p=m[16];let O=v??void 0;return m[17]!==L||m[18]!==O?(h=(0,t.jsx)(Q,{heading:O,editAttr:L}),m[17]=L,m[18]=O,m[19]=h):h=m[19],m[20]!==k||m[21]!==h||m[22]!==f||m[23]!==p?(g=(0,t.jsxs)(E,{$elevated:k,children:[f,p,h]}),m[20]=k,m[21]=h,m[22]=f,m[23]=p,m[24]=g):g=m[24],g};ee.displayName="Introduction",e.s(["default",0,ee],958643)},375476,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(271645),n=e.i(575509),o=e.i(997053);let a=(0,o.default)(n.Div).attrs({as:"section"}).withConfig({componentId:"sc-6db9e853-0"})(({$isInView:e=!1})=>o.css`
        --gap: ${(0,n.getGap)("xxl")};
        --speed: 20s;
        --play-state: ${e?"running":"paused"};
        --offset: 30%;

        display: flex;
        overflow: hidden;
        user-select: none;
        gap: var(--gap);

        
        mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 var(--offset) 30%,
            #000 calc(100% - var(--offset)),
            transparent 100%
        );
        mask-size: 100% 100%;
        mask-repeat: no-repeat;

        ul {
            flex-shrink: 0;
            display: flex;
            justify-content: space-around;
            min-width: 100%;
            gap: var(--gap);
            animation: logoMarquee var(--speed) linear infinite var(--play-state);

            li {
                aspect-ratio: 2 / 1;
                width: auto;
                height: 4rem;

                ${n.bp.l`  height: 6rem; `}

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    object-position: center;
                }
            }
        }

        @keyframes logoMarquee {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(calc(-100% - var(--gap)));
            }
        }
    `),s=e=>{let n,o,s,l,c,u,d=(0,r.c)(12),{logos:f}=e,p=(0,i.useRef)(null),[h,g]=(0,i.useState)(!1);if(d[0]===Symbol.for("react.memo_cache_sentinel")?(n=()=>{let e=p.current;if(!e)return;let t=new IntersectionObserver(e=>{let[t]=e,r=t?.isIntersecting??!1;g(e=>e===r?e:r)},{threshold:0});return t.observe(e),()=>t.disconnect()},o=[],d[0]=n,d[1]=o):(n=d[0],o=d[1]),(0,i.useEffect)(n,o),!f?.length)return null;d[2]!==h||d[3]!==f?(s=e=>(0,t.jsx)("ul",{"aria-hidden":e,children:f.map(r=>(0,t.jsx)("li",{children:(0,t.jsx)("img",{src:r.src,alt:e?"":r.alt,width:120,height:60,decoding:"async",loading:h?"eager":"lazy"})},r.src))}),d[2]=h,d[3]=f,d[4]=s):s=d[4];let m=s;return d[5]!==m?(l=m(!1),c=m(!0),d[5]=m,d[6]=l,d[7]=c):(l=d[6],c=d[7]),d[8]!==h||d[9]!==l||d[10]!==c?(u=(0,t.jsxs)(a,{ref:p,$isInView:h,children:[l,c]}),d[8]=h,d[9]=l,d[10]=c,d[11]=u):u=d[11],u};s.displayName="LogoMarquee",e.s(["default",0,s],375476)},496964,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(992325),n=e.i(607561),o=e.i(494473),a=e.i(989970),s=e.i(883495),l=e.i(255667),c=e.i(271645),u=e.i(156569),d=e.i(124821),f=e.i(575509),p=e.i(212960),h=e.i(997053);let g=(0,h.default)(f.Div).withConfig({componentId:"sc-ec8dda4b-0"})(()=>h.css`
        position: relative;
        z-index: 1;
		background: ${(0,f.getBrand)("bc1")};
		/* NOTE • Crops the fixed Texture layer below to this section's bounds.
		   clip-path clips the whole subtree — fixed descendants included — which
		   is what turns the stationary texture into a scrolling window. */
		clip-path: inset(0);
    `),m=(0,h.default)(f.Div).withConfig({componentId:"sc-ec8dda4b-1"})(()=>h.css`
		display: none;

		${f.bp.l`
			display: block;

			position: fixed;
			inset: 0;
			z-index: 0;
			background: url('/branders/images/forged-carbon.jpg') repeat center center;
			background-size: 313px 314px;
            opacity: 0.2;
			pointer-events: none;
		`}
	`),v=(0,h.default)(f.Div).attrs({as:"section"}).withConfig({componentId:"sc-ec8dda4b-2"})(()=>h.css`
        position: relative;
        z-index: 1;
        background: transparent;
        /* NOTE • The scroll parallax (index.tsx) writes --section-lift on this
           element by hand rather than through a GSAP transform, so the property
           only ever changes on desktop and rests at zero everywhere else. */
        translate: 0 var(--section-lift, 0dvh);
    `),b=(0,h.default)(f.Div).withConfig({componentId:"sc-ec8dda4b-3"})(()=>h.css`
        /*  */
    `),y=(0,h.default)(f.Div).attrs({as:"aside"}).withConfig({componentId:"sc-ec8dda4b-4"})(()=>h.css`
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        user-select: none;

        ${f.bp.l`
            display: block;
            position: relative;
            inset: unset;
        `}
    `),w=(0,h.default)(f.Div).withConfig({componentId:"sc-ec8dda4b-5"})(()=>h.css`
        position: absolute;
        inset: 0;
        overflow: clip;

        ${f.bp.l`
            position: sticky;
            inset: 0 auto auto 0;

            height: 100dvh;
            width: 100%;
            overflow: clip;
        `}
    `),x=(0,h.default)(f.Div).attrs({as:"section"}).withConfig({componentId:"sc-ec8dda4b-6"})(({theme:e})=>h.css`
        --grid-offset: ${e.grid.gutter.s};

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        width: 100%;
        height: 75dvh;
        padding-inline: var(--grid-offset);

        ${f.bp.l`
            --grid-offset: calc(${e.grid.gutter.l} / 2);

            height: 100dvh;
        `}

        hgroup {
            display: flex;
            flex-direction: column;
            gap: ${(0,f.getGap)("m")};

            p {
                ${p.captionL}

                color: ${(0,f.getBrand)("bc5",40)};
            }

            h3 {
                ${p.headlineL}

                color: ${(0,f.getBrand)("bc5")};
            }
        }

        > p {
            ${p.bodyL}

            color: ${(0,f.getBrand)("bc5",80)};
            margin-top: ${(0,f.getGap)("sm")};
            text-wrap: pretty;

            ${f.bp.l`
                text-wrap: balance;
            `}
        }

        a {
            margin-top: ${(0,f.getGap)("l")};
        }
    `),$=(0,h.default)(f.Div).attrs({as:"picture"}).withConfig({componentId:"sc-ec8dda4b-7"})(()=>h.css`
        display: block;
        position: relative;
        
        overflow: clip;
        height: 75dvh;
        width: 100%;
        background: ${(0,f.getBrand)("bc1")};
        
        ${f.bp.l`
            position: absolute;
            inset: 0;
            clip-path: inset(100% 0% 0% 0%);
            height: 100%;
        `}	

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            opacity: 0.4;

            ${f.bp.l`
                opacity: 1;
            `}
        }
    `),E=(e,i)=>{let n,o,a,s,l,c,f=(0,r.c)(13),{heading:p,description:h,editAttr:g}=e;return f[0]===Symbol.for("react.memo_cache_sentinel")?(n=(0,t.jsx)("p",{children:"Service"}),f[0]=n):n=f[0],f[1]!==p?(o=(0,t.jsx)("h3",{children:p}),f[1]=p,f[2]=o):o=f[2],f[3]!==g||f[4]!==o?(a=(0,t.jsxs)("hgroup",{children:[n,(0,t.jsx)(u.default,{editAttr:g,children:o})]}),f[3]=g,f[4]=o,f[5]=a):a=f[5],f[6]!==h?(s=(0,t.jsx)("p",{children:h}),f[6]=h,f[7]=s):s=f[7],f[8]===Symbol.for("react.memo_cache_sentinel")?(l=(0,t.jsx)(d.default,{to:"/branders/contact",label:"Start your project",aria:"Contact Us"}),f[8]=l):l=f[8],f[9]!==i||f[10]!==a||f[11]!==s?(c=(0,t.jsxs)(x,{ref:i,children:[a,s,l]}),f[9]=i,f[10]=a,f[11]=s,f[12]=c):c=f[12],c};E.displayName="ServiceContent";let T=(0,c.memo)((0,c.forwardRef)(E));var A=e.i(481293),S=e.i(328852);let I=(e,i)=>{let n,o,a,s=(0,r.c)(7),{image:l}=e;s[0]!==l?(n=(0,A.resolveImageWithAlt)(l),s[0]=l,s[1]=n):n=s[1];let c=n;return c?(s[2]!==c?(o=(0,t.jsx)(S.default,{image:c,fill:!0,quality:90,sizes:"(min-width: 1024px) 60vw, 100vw"}),s[2]=c,s[3]=o):o=s[3],s[4]!==i||s[5]!==o?(a=(0,t.jsx)($,{ref:i,children:o}),s[4]=i,s[5]=o,s[6]=a):a=s[6],a):null};I.displayName="ServiceImage";let _=(0,c.forwardRef)(I),R="--section-lift",j=e=>{let u,d,f,p,h,x,$,E,A,S,I=(0,r.c)(19),{services:j}=e,L=(0,c.useRef)(null),P=(0,c.useRef)(null);I[0]===Symbol.for("react.memo_cache_sentinel")?(u=[],I[0]=u):u=I[0];let O=(0,c.useRef)(u);I[1]===Symbol.for("react.memo_cache_sentinel")?(d=[],I[1]=d):d=I[1];let D=(0,c.useRef)(d),M=(0,l.useLenis)();return I[2]!==M?.rootElement?(f=e=>{let{isDesktop:t}=e,r=L.current,i=D.current,n=O.current,o=M?.rootElement,l=P.current;if(i.length&&o&&r&&n.length&&l){if(t){a.default.set(i[0],{clipPath:"inset(0% 0% 0% 0%)"}),i.forEach((e,t)=>{let r=n[t];if(!e||!r)return;t>0&&a.default.fromTo(e,{clipPath:"inset(100% 0% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",ease:"none",scrollTrigger:{scroller:o,trigger:r,start:"top bottom",end:"top top",scrub:!0}});let i=e.querySelector("img");i&&a.default.fromTo(i,{scale:1.2},{scale:1,ease:"none",scrollTrigger:{scroller:o,trigger:r,start:"top bottom",end:"bottom top",scrub:!0}})}),n.forEach(e=>{e&&a.default.to(e,{autoAlpha:0,ease:"none",scrollTrigger:{scroller:o,trigger:e,start:"center 30%",end:"bottom 0%",scrub:!0,markers:!1}})});let e=k,t=C,l=!1,c=e=>{l||r.style.setProperty(R,`${e}dvh`)},u=s.default.create({trigger:r,scroller:o,start:"top 150%",end:"top top",onUpdate:t=>c(e(t.progress))}),d=s.default.create({trigger:r,scroller:o,start:"bottom bottom",end:"bottom top",onUpdate:e=>c(t(e.progress))}),f=()=>{c(0),l=!0},p=()=>{l=!1,c(u.progress<1?e(u.progress):t(d.progress))};return s.default.addEventListener("refreshInit",f),s.default.addEventListener("refresh",p),()=>{s.default.removeEventListener("refreshInit",f),s.default.removeEventListener("refresh",p),r.style.removeProperty(R)}}t||i.forEach(e=>{if(!e)return;let t=e.querySelector("img");t&&a.default.fromTo(t,{scale:1.2,yPercent:-25},{scale:1.2,yPercent:25,ease:"none",scrollTrigger:{scroller:o,trigger:e,start:"top bottom",end:"bottom top",scrub:!0}})})}},I[2]=M?.rootElement,I[3]=f):f=I[3],I[4]!==M||I[5]!==j?(p={scope:L,dependencies:[j,M]},I[4]=M,I[5]=j,I[6]=p):p=I[6],(0,n.useAnimation)(f,p),I[7]===Symbol.for("react.memo_cache_sentinel")?(h=(0,t.jsx)(m,{ref:P}),I[7]=h):h=I[7],I[8]!==j?(x=j.map((e,r)=>{let{_id:n,heading:o,description:a}=e;return(0,t.jsx)(T,{heading:o,description:a,editAttr:(0,i.sanityEditAttr)({id:n,type:"service",path:"heading"}),ref:e=>{e&&(O.current[r]=e)}},n)}),I[8]=j,I[9]=x):x=I[9],I[10]!==x?($=(0,t.jsx)(b,{$l:"2/6",children:x}),I[10]=x,I[11]=$):$=I[11],I[12]!==j?(E=j.map((e,r)=>{let{image:i,_id:n}=e;return(0,t.jsx)(_,{image:i,ref:e=>{e&&(D.current[r]=e)}},n)}),I[12]=j,I[13]=E):E=I[13],I[14]!==E?(A=(0,t.jsx)(y,{$l:"7/13",children:(0,t.jsx)(w,{children:E})}),I[14]=E,I[15]=A):A=I[15],I[16]!==$||I[17]!==A?(S=(0,t.jsxs)(g,{children:[h,(0,t.jsx)(v,{ref:L,children:(0,t.jsxs)(o.default,{$noMargin:!0,$noGutter:!0,children:[$,A]})})]}),I[16]=$,I[17]=A,I[18]=S):S=I[18],S};function k(e){return-(50*(1-e))}function C(e){return 50*e}j.displayName="ServiceListing",e.s(["default",0,j],496964)},653859,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(124821),n=e.i(481293),o=e.i(992325),a=e.i(607561),s=e.i(494473),l=e.i(989970),c=e.i(255667),u=e.i(328852),d=e.i(271645),f=e.i(101384),p=e.i(486861),h=e.i(189897),g=e.i(797489),m=e.i(274879),v=e.i(698074),b=e.i(883495),y=e.i(875324),w=e.i(575509),x=e.i(212960),$=e.i(997053);let E=(0,$.default)(w.Div).attrs({as:"section"}).withConfig({componentId:"sc-d69e8bb7-0"})(()=>$.css`
		position: relative;
		z-index: 1;
		overflow: clip;

		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 75dvh;
		
        padding-block: ${(0,w.getGap)("huge")};
        background: ${(0,w.getBrand)("bc1")};

		${w.bp.l`
			padding-block: ${(0,w.getGap)("col")};
			justify-content: flex-start;
			min-height: 100dvh;
			height: auto;
		`}

		waffl-grid {
			justify-content: space-between;
			height: 100%;

			${w.bp.l`
				height: auto;
				justify-content: flex-start;
			`}
		}
	`),T=(0,$.default)(w.Div).withConfig({componentId:"sc-d69e8bb7-1"})(({theme:e})=>$.css`
		display: none;

		${w.bp.l`		
			--col: 8.333vw;

			position: absolute;
			z-index: -1;
			top: 0;
			right: calc((var(--col) * 1) + (${e.grid.gutter.l} / 2));
			bottom: auto;

			display: flex;
			align-items: center;
			justify-content: center;

			width: calc(var(--col) * 3 - ${e.grid.gutter.l});
			height: 100%;
		`}
	`),A=(0,$.default)(w.Div).withConfig({componentId:"sc-d69e8bb7-2"})(()=>$.css`
		position: relative;

		${w.bp.l`
			width: 100%;
			overflow: clip;
			aspect-ratio: 2 / 3;
		`}
	`),S=(0,$.default)(w.Div).attrs({as:"picture"}).withConfig({componentId:"sc-d69e8bb7-3"})(()=>$.css`
		position: relative;

		${w.bp.l`
			display: block;
			position: absolute;
			top: -20%;
			left: 0;
			width: 100%;
			height: 140%;
			z-index: 1;
			transform: translateZ(0);
			backface-visibility: hidden;
			background: ${(0,w.getBrand)("bc1")};
		`}

		img {
			${w.bp.l`
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: center;
				pointer-events: none;
				transform: translateZ(0);
				opacity: 1;
			`}
		}
	`),I=(0,$.default)(w.Div).attrs({as:"h2"}).withConfig({componentId:"sc-d69e8bb7-4"})(()=>$.css`
		${x.headlineS}
		position: relative;
		z-index: 1;
		text-wrap: balance;
		text-transform: none;
		color: #181818;

		margin-bottom: ${(0,w.getGap)("sm")};

		${w.bp.l`
			margin-bottom: 0;
		`}
	`),_=(0,$.default)(w.Div).withConfig({componentId:"sc-d69e8bb7-5"})(()=>$.css`
		position: relative;
		z-index: 1;

        display: flex;
        flex-direction: column;
        gap: ${(0,w.getGap)("m")};
        margin-top: auto;

		${w.bp.l`
			gap: ${(0,w.getGap)("xl")};
			margin-top: ${(0,w.getGap)("l")};
		`}
	`),R=(0,$.default)(w.Div).attrs({as:"p"}).withConfig({componentId:"sc-d69e8bb7-6"})(()=>$.css`
		${x.bodyL}

		position: relative;
		z-index: 1;
		text-wrap: pretty;
        color: ${(0,w.getBrand)("bc5",80)};

		${w.bp.l` text-wrap: balance `}
	`),j=e=>{let i,n,o,s,u,w=(0,r.c)(17),{heading:x,editAttr:$}=e,{isReducedMotion:E}=(0,d.use)(f.PerformanceContext),T=(0,d.useRef)(null),A=(0,c.useLenis)();w[0]!==x?(i=(0,h.cleanSanityString)(x)??"",w[0]=x,w[1]=i):i=w[1];let S=i,_=(0,m.useSplitTextRecovery)(T,S);w[2]!==S?(n=(0,p.escapeHtml)(S),w[2]=S,w[3]=n):n=w[3];let R=(0,g.useInnerHtml)(n);return(w[4]!==S||w[5]!==E||w[6]!==A?.rootElement?(o=()=>{if(!T.current||!S)return;let e=A?.rootElement;if(!e)return;let t=y.SplitText.create(T.current,{type:"lines",linesClass:"line",autoSplit:!1,aria:"auto"}),{lines:r}=t;if(!r.length||((0,v.primeFillLines)(r,{align:l.default.getProperty(T.current,"textAlign"),settled:E}),E))return()=>t.revert();let i=(0,v.buildFillTimeline)(r,{duration:1,ease:"none"}),n=b.default.create({trigger:T.current,scroller:e,start:"top bottom",end:"bottom center",scrub:!0,animation:i});return()=>{n.kill(),i.kill(),t.revert()}},w[4]=S,w[5]=E,w[6]=A?.rootElement,w[7]=o):o=w[7],w[8]!==S||w[9]!==E||w[10]!==A||w[11]!==_?(s={scope:T,dependencies:[S,E,A,_]},w[8]=S,w[9]=E,w[10]=A,w[11]=_,w[12]=s):s=w[12],(0,a.useAnimation)(o,s),S)?(w[13]!==S||w[14]!==$||w[15]!==R?(u=(0,t.jsx)(I,{ref:T,$l:"2/9",$huge:"2/8","data-sanity":$,dangerouslySetInnerHTML:R},S),w[13]=S,w[14]=$,w[15]=R,w[16]=u):u=w[16],u):null};j.displayName="ServicesHeroHeading";let k=e=>{let f,p,h,g,m,v,b,y,w,x,$,I=(0,r.c)(26),{heading:k,description:C,image:L,documentId:P,documentType:O}=e;I[0]!==L?(f=(0,n.resolveImageWithAlt)(L),I[0]=L,I[1]=f):f=I[1];let D=f;I[2]!==P||I[3]!==O?(p=(0,o.sanityEditAttr)({id:P,type:O,path:"servicesHeading"}),I[2]=P,I[3]=O,I[4]=p):p=I[4];let M=p,N=(0,d.useRef)(null),H=(0,d.useRef)(null),z=(0,d.useRef)(null),U=(0,c.useLenis)();I[5]!==U?.rootElement?(h=e=>{let{isDesktop:t}=e,r=N.current,i=z.current,n=H.current,o=U?.rootElement;t&&r&&i&&n&&o&&(l.default.set(n,{yPercent:50}),l.default.to(n,{yPercent:-50,ease:"none",scrollTrigger:{trigger:r,scroller:o,start:"top bottom",end:"bottom top",scrub:!0}}),l.default.set(i,{yPercent:-50,force3D:!0}),l.default.to(i,{yPercent:50,ease:"none",force3D:!0,scrollTrigger:{trigger:r,scroller:o,start:"top bottom",end:"bottom top",scrub:!0}}))},I[5]=U?.rootElement,I[6]=h):h=I[6];let G=D?.src;return(I[7]!==U||I[8]!==G?(g={scope:N,dependencies:[U,G]},I[7]=U,I[8]=G,I[9]=g):g=I[9],(0,a.useAnimation)(h,g),(k||C)&&D)?(I[10]!==D?(m=(0,t.jsx)(T,{ref:H,children:(0,t.jsx)(A,{children:(0,t.jsx)(S,{ref:z,children:(0,t.jsx)(u.default,{image:D,fill:!0,sizes:"(min-width: 1024px) 25vw, 100vw"})})})}),I[10]=D,I[11]=m):m=I[11],I[12]!==k||I[13]!==M?(v=(0,t.jsx)(j,{heading:k,editAttr:M}),I[12]=k,I[13]=M,I[14]=v):v=I[14],I[15]!==C?(b=(0,t.jsx)(R,{children:C}),I[15]=C,I[16]=b):b=I[16],I[17]===Symbol.for("react.memo_cache_sentinel")?(y=(0,t.jsx)(i.default,{label:"Start Your Project",to:"/branders/contact",aria:"Start Your Project"}),I[17]=y):y=I[17],I[18]!==b?(w=(0,t.jsxs)(_,{$l:"2/7",children:[b,y]}),I[18]=b,I[19]=w):w=I[19],I[20]!==w||I[21]!==v?(x=(0,t.jsxs)(s.default,{children:[v,w]}),I[20]=w,I[21]=v,I[22]=x):x=I[22],I[23]!==x||I[24]!==m?($=(0,t.jsxs)(E,{ref:N,children:[m,x]}),I[23]=x,I[24]=m,I[25]=$):$=I[25],$):null};k.displayName="ServicesHero",e.s(["default",0,k],653859)},322208,e=>{"use strict";var t=e.i(271645);let r=(0,t.createContext)(null);e.s(["StickyTrackContext",0,r,"useStickyTrackStore",0,()=>{let e=(0,t.use)(r);if(!e)throw Error("useStickyTrackStore must be used within StickyTrack");return e}])},229287,e=>{"use strict";var t=e.i(843476),r=e.i(134770),i=e.i(101384),n=e.i(255981),o=e.i(883495),a=e.i(815711),s=e.i(271645),l=e.i(322208),c=e.i(867308),u=e.i(575509),d=e.i(997053);let f=d.default.div.withConfig({componentId:"sc-2b3d2147-0"})(()=>d.css`
		position: relative;
		min-height: 100dvh;
	`),p="(any-pointer: coarse)",h=d.default.div.withConfig({componentId:"sc-2b3d2147-1"})(()=>d.css`
		position: relative;
		height: 100dvh;

		@media ${p} {
			position: sticky;
			top: 0;
			/* Same layer as the fixed Content: over the Spacer, under the Overlay's 2. */
			z-index: 1;
		}
	`),g=d.default.div.withConfig({componentId:"sc-2b3d2147-2"})(()=>d.css`
		top: 0;
		left: 0;
		width: 100%;
		height: 100dvh;
		overflow: clip;
		z-index: 1;
		background-color: ${(0,u.getBrand)("bc1")};
		contain: layout paint;

		&:before {
			content: '';
			position: absolute;
			inset: 0;
			background: url('/branders/images/forged-carbon.jpg') repeat center center;
			background-size: 313px 314px;
			background-color: ${(0,u.getGlobal)("black")};
			opacity: 0.2;
			pointer-events: none;
		}

		/* NOTE • Blackout for the Approach handover, driven from the scroll loop in
		   index.tsx (mobile only — desktop leaves it at 0 for the page's life). A
		   pseudo-element rather than a filter on Content: this is one composited
		   opacity over a panel holding a video canvas, where brightness() would
		   repaint the lot every frame. z-index clears the 3 the Introduction stacks
		   to; the Approach overlay is a sibling of Content, so it still paints over
		   this rather than under it. */
		&:after {
			content: '';
			position: absolute;
			inset: 0;
			z-index: 10;
			background: ${(0,u.getGlobal)("black")};
			opacity: var(--panel-fade, 0);
			pointer-events: none;
		}

		& > * {
			position: absolute;
			inset: 0;
		}
	`),m=d.default.div.withConfig({componentId:"sc-2b3d2147-3"})(({$scrollLength:e=3})=>d.css`
		height: ${100*Math.max(e-1,0)}dvh;
	`),v=d.default.div.withConfig({componentId:"sc-2b3d2147-4"})(()=>d.css`
		/* NOTE • Taller than its sticky slot by APPROACH_HOLD_PX. That surplus is
		   what the Approach holds still through once its aperture has finished
		   opening — the section itself must stay exactly one viewport for the clip
		   maths, so the hold has to live out here. Mobile keeps a plain 100dvh:
		   there is no aperture below bp.l, so nothing to hand over from. */
		position: relative;
		z-index: 2;

		height: 100dvh;

		${u.bp.l`
			height: calc(100dvh + ${c.APPROACH_HOLD_PX}px);
		`}
	`),b=d.default.div.withConfig({componentId:"sc-2b3d2147-5"})(()=>d.css`
		/* NOTE • The clip host. Exactly one viewport tall, so the aperture's
		   percentage inset() resolves against the viewport centre. The aperture
		   writes clip-path and transform here inline from the scroll loop in
		   index.tsx — deliberately none in CSS, so a server-rendered or JS-failed
		   page shows the Approach normally rather than an invisible zero-area
		   clip. Sticky so it holds at the top once the counter-translate reaches
		   zero and the reveal is complete. */
		position: sticky;
		top: 0;

		width: 100%;
		height: 100dvh;
	`),y=({children:e,overlay:u})=>{let{lenisRef:d}=(0,s.use)(r.AppContext),{isReducedMotion:y}=(0,s.use)(i.PerformanceContext),w=(0,s.useRef)(null),x=(0,s.useRef)(null),$=(0,s.useRef)(null),E=(0,s.useRef)(null),T=(0,s.useRef)(0),A=(0,s.useRef)(0),S=(0,s.useRef)(c.DEFAULT_INTRO_SCROLL_LENGTH),I=(0,s.useRef)(c.DEFAULT_HERO_TEXT_SCROLL_LENGTH),_=(0,s.useRef)(new Set),R=(0,s.useRef)(null),j=(0,s.useRef)(0),k=(0,s.useRef)(0),C=(0,s.useRef)(0),L=(0,s.useRef)(0),P=(0,s.useRef)(0),[O,D]=(0,s.useState)(c.DEFAULT_INTRO_SCROLL_LENGTH),M=(0,s.useCallback)(()=>{P.current||(P.current=window.requestAnimationFrame(()=>{for(let e of(P.current=0,_.current))e()}))},[]),N=(0,s.useCallback)(()=>T.current,[]),H=(0,s.useCallback)(()=>A.current,[]),z=(0,s.useCallback)(e=>(_.current.add(e),()=>{_.current.delete(e)}),[]),U=(0,s.useCallback)(e=>{let t=Math.min(1,Math.max(0,e));5e-4>Math.abs(T.current-t)||(T.current=t,M())},[M]),G=(0,s.useCallback)(()=>S.current,[]),F=(0,s.useCallback)(e=>{let t=Math.max(.1,e);if(S.current!==t){for(let e of(S.current=t,D(t),_.current))e();requestAnimationFrame(()=>{R.current?.()})}},[]),B=(0,s.useCallback)(()=>I.current,[]),W=(0,s.useCallback)(e=>{let t=Math.max(.1,e);if(I.current!==t)for(let e of(I.current=t,_.current))e()},[]),V=(0,s.useCallback)((e=T.current)=>(0,c.getIntroSegmentProgress)(e,S.current,c.DEFAULT_HERO_SCROLL_LENGTH),[]),X=(0,s.useCallback)((e=T.current)=>(0,c.getHeroTextSegmentProgress)(e,S.current,c.DEFAULT_HERO_SCROLL_LENGTH,I.current),[]),q=(0,s.useCallback)(()=>(0,c.getTrackScrollLength)(S.current,c.DEFAULT_HERO_SCROLL_LENGTH),[]);(0,s.useEffect)(()=>{var e;let t,r,i,s=w.current,l=x.current,u=$.current;if(!s||!l||!u)return;let f=!1,h=null,g=[],m=window.matchMedia(n.DESKTOP_MEDIA_QUERY),v=window.matchMedia(p),b=()=>{for(let e of g)e();g=[]},T=()=>{if(!h)return;b();let e=e=>Math.ceil((0,c.getScrollFromTrackProgress)(e,j.current,k.current,L.current));g=[h.add(e((0,c.getIntroCompleteTrackProgress)(S.current))),h.add(e(1))],h.resize()},I=()=>{b(),h?.destroy(),h=null},_=()=>{I();let e=d.current?.lenis;e&&m.matches&&!y&&((h=new a.default(e,{type:"proximity",debounce:500,duration:c.INTRO_SNAP_DURATION})).stop(),T())},O=e=>{if(f!==e){if(f=e,e){l.style.position="fixed",l.style.top="0",l.style.left="0",l.style.width="100%",l.style.height="100dvh",l.style.zIndex="1";return}l.style.removeProperty("position"),l.style.removeProperty("top"),l.style.removeProperty("left"),l.style.removeProperty("width"),l.style.removeProperty("height"),l.style.removeProperty("z-index")}},D=e=>{if(y||m.matches||e<=0)return void l.style.removeProperty("--panel-fade");let t=Math.min(1,e/.85);l.style.setProperty("--panel-fade",`${Math.round(1e3*t)/1e3}`)},N=()=>{let e=E.current;e&&(e.style.removeProperty("clip-path"),e.style.removeProperty("transform"))},H=e=>{let t=E.current;if(!t)return;if(y||!m.matches||e>=.9995)return void N();let r=1-e;t.style.transform=`translate3d(0, ${-r*L.current}px, 0) scale(${1+.2*r})`,t.style.clipPath=`inset(${50*r}% ${50*r}%)`},z=()=>{let e=d.current?.lenis;if(!e)return;let t=e.scroll,r=j.current,i=r+C.current-L.current;O(t>=r&&t<i&&!v.matches);let n=(0,c.measureStickyTrackProgressFromScroll)(t,r,k.current,L.current);U(n);let o=(0,c.getApproachEntryProgress)(t,r,k.current,L.current);h&&!y&&m.matches?(0,c.getIntroSegmentProgress)(n,S.current,c.DEFAULT_HERO_SCROLL_LENGTH)>=c.INTRO_SNAP_VIDEO_THRESHOLD&&n<1||o>0&&o<c.APPROACH_SNAP_BACK_THRESHOLD?h.start():h.stop():h?.stop(),Math.abs(A.current-o)>=5e-4&&(A.current=o,H(o),D(o),M())},G=(e=()=>{o.default.refresh()},r=0,(i=(...t)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...t),150)}).cancel=()=>{window.clearTimeout(r)},i),F=()=>{let e;e=d.current?.lenis?.rootElement?.clientHeight??window.innerHeight,j.current=s.offsetTop,k.current=u.offsetHeight+e,C.current=s.offsetHeight,L.current=e,T(),z(),H(A.current),D(A.current),G()};R.current=F,F();let B=window.setTimeout(F,300),W=()=>F(),V=0,X=()=>{if(y)return;let e=d.current?.lenis;if(!e){V=window.requestAnimationFrame(X);return}t=z,e.on("scroll",t),_(),F()};X();let q=()=>{_(),F()};m.addEventListener("change",q);let Y=()=>{O(!1),F()};v.addEventListener("change",Y);let K=new ResizeObserver(F);return K.observe(s),window.addEventListener("load",W),window.addEventListener("resize",F),()=>{R.current=null,G.cancel(),window.cancelAnimationFrame(V),window.cancelAnimationFrame(P.current),P.current=0,window.clearTimeout(B),window.removeEventListener("load",W),window.removeEventListener("resize",F),m.removeEventListener("change",q),v.removeEventListener("change",Y),K.disconnect(),t&&d.current?.lenis?.off("scroll",t),I(),O(!1),N(),l.style.removeProperty("--panel-fade")}},[y,d,M,U]);let Y=(0,s.useMemo)(()=>({getProgress:N,subscribe:z,getIntroScrollLength:G,setIntroScrollLength:F,getHeroTextScrollLength:B,setHeroTextScrollLength:W,getIntroSegmentProgress:V,getApproachEntryProgress:H,getHeroTextSegmentProgress:X,getTrackScrollLength:q}),[B,G,N,H,X,V,q,W,F,z]),K=(0,c.getTrackScrollLength)(O,c.DEFAULT_HERO_SCROLL_LENGTH);return(0,t.jsx)(l.StickyTrackContext.Provider,{value:Y,children:(0,t.jsxs)(f,{ref:w,children:[(0,t.jsx)(h,{children:(0,t.jsx)(g,{ref:x,children:e})}),(0,t.jsx)(m,{ref:$,$scrollLength:K}),u?(0,t.jsx)(v,{children:(0,t.jsx)(b,{ref:E,children:u})}):null]})})};y.displayName="StickyTrack",e.s(["default",0,y],229287)},867308,e=>{"use strict";let t=0,r=2,i=.6,n=.4,o=(e=r,i=t,o=n)=>i+e+o;e.s(["APPROACH_HOLD_PX",0,100,"APPROACH_SNAP_BACK_THRESHOLD",0,.5,"DEFAULT_HERO_SCROLL_LENGTH",0,t,"DEFAULT_HERO_TEXT_SCROLL_LENGTH",0,i,"DEFAULT_INTRO_SCROLL_LENGTH",0,r,"INTRO_SNAP_DURATION",0,2,"INTRO_SNAP_VIDEO_THRESHOLD",0,.6,"getApproachEntryProgress",0,(e,t,r,i)=>i<=0?0:Math.min(1,Math.max(0,(e-(t+r-i))/i)),"getHeroTextSegmentProgress",0,(e,a=r,s=t,l=i)=>{let c=o(a,s),u=((e=r,i=t,a=n)=>Math.max(o(e,i,a)-1,0))(a,s);return u<=0||l<=0?0:Math.max(0,Math.min(1,Math.max(0,e-s/c)/(l/u)))},"getIntroCompleteTrackProgress",0,(e=r,i=t,a=n)=>{let s=o(e,i,a);return s<=0?0:Math.min(1,(i+e)/s)},"getIntroOutroSegmentProgress",0,e=>e<=.5?0:Math.min(1,(e-.5)/.5),"getIntroSegmentProgress",0,(e,i=r,n=t)=>{let a=o(i,n);return a<=0?0:Math.max(0,Math.min(1,(e-n/a)/(i/a)))},"getScrollFromTrackProgress",0,(e,t,r,i)=>{let n=r-i;return n<=0?t:t+Math.min(1,Math.max(0,e))*n},"getTrackScrollLength",0,o,"measureStickyTrackProgressFromScroll",0,(e,t,r,i)=>{let n=r-i;return n<=0?0:Math.min(1,Math.max(0,(e-t)/n))},"shouldPauseHeroPlayback",0,e=>e>.002])},115166,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(481293);let n=(e,t)=>r=>{r instanceof HTMLElement&&(e.current[t]=r)};var o=e.i(992325),a=e.i(607561),s=e.i(494473),l=e.i(989970),c=e.i(883495),u=e.i(255667),d=e.i(815711),f=e.i(328852),p=e.i(271645),h=e.i(575509),g=e.i(212960),m=e.i(997053);let v="100dvh",b=(0,m.default)(h.Div).attrs({as:"section"}).withConfig({componentId:"sc-3a017878-0"})(()=>m.css`	
        position: relative;
		z-index: 5;
        min-height: calc(var(--count) * ${"75dvh"});
        background: ${(0,h.getBrand)("bc2")};
        overflow: clip;

        ${h.bp.l`
            min-height: calc(var(--count) * ${v});
        `}
    `),y=(0,m.default)(h.Div).attrs({as:"aside"}).withConfig({componentId:"sc-3a017878-1"})(()=>m.css`
        display: none;
		

        ${h.bp.l`
            display: block;
            position: absolute;
            inset: 0;
            z-index: 2;
        `}
	`),w=(0,m.default)(h.Div).withConfig({componentId:"sc-3a017878-2"})(()=>m.css`
		position: relative;
		width: 100%;
		height: ${v};
		overflow: clip;

		${h.bp.l`
			position: sticky;
			top: 0;
			left: 0;
		`}
	`),x=(0,m.default)(h.Div).attrs({as:"picture"}).withConfig({componentId:"sc-3a017878-3"})(()=>m.css`
		display: block;
		position: relative;
		overflow: clip;
		background: ${(0,h.getGlobal)("black")};

		${h.bp.l`
			position: absolute;
			inset: -1.6rem;
		`}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			opacity: 0.4;
			filter: blur(0.8rem);
		}
	`),$=(0,m.default)(h.Div).withConfig({componentId:"sc-3a017878-4"})(()=>m.css`
        position: relative;
        z-index: 2;
    `),E=(0,m.default)(h.Div).attrs({as:"aside"}).withConfig({componentId:"sc-3a017878-5"})(()=>m.css`
        display: none;
            
        ${h.bp.l`
            display: block;
            position: relative;
            z-index: 3;
            height: 100%;
        `}
    `),T=(0,m.default)(h.Div).withConfig({componentId:"sc-3a017878-6"})(()=>m.css`
        position: sticky;
        top: 0; left: 0;

        width: 100%;
        height: ${v};

        display: flex;
        align-items: center;
        justify-content: center;
    `),A=(0,m.default)(h.Div).withConfig({componentId:"sc-3a017878-7"})(()=>m.css`
        position: relative;
        width: 100%;
        aspect-ratio: 1/1;

        background: ${(0,h.getBrand)("bc1")};
	`),S=(0,m.default)(h.Div).attrs({as:"section"}).withConfig({componentId:"sc-3a017878-8"})(()=>m.css`
		position: relative;
		z-index: 2;
	`),I=(0,m.default)(h.Div).attrs({as:"picture"}).withConfig({componentId:"sc-3a017878-9"})(()=>m.css`	
        display: block;
        position: absolute;
        inset: 0;
        z-index: 3;
        overflow: clip;

        /* Initial Starting Styles */
        clip-path: inset(50%);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    `),_=(0,m.default)(h.Div).attrs({as:"section"}).withConfig({componentId:"sc-3a017878-10"})(()=>m.css`
        position: relative;
        z-index: 3;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        overflow: clip;

        ${h.bp.l`
            height: ${v};
            min-height: ${"60rem"};
        `}
    `),R=(0,m.default)(h.Div).withConfig({componentId:"sc-3a017878-11"})(({theme:e,$isLast:t})=>m.css`
        position: relative;
        height: 100%;
        padding-block: ${(0,h.getGap)("huge")} ${t?(0,h.getGap)("huge"):0};

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        ${h.bp.l`
            height: calc(33.333vw - ${e.grid.gutter.l});
            padding-block: 0;
            justify-content: space-between;
        `}

        em {
            ${g.titleL}
            top: 0; 
            font-style: normal;
        }

        h3 {
            ${g.headlineL}

            margin-top: ${(0,h.getGap)("m")};

            ${h.bp.l` margin-top: 0; `}
        }

        p {
            ${g.bodyL}
            color: ${(0,h.getBrand)("bc5",80)};
            text-wrap: pretty;

            margin-bottom: ${(0,h.getGap)("m")};

            ${h.bp.l`
                margin-bottom: 0;
                text-wrap: balance;
            `}
        }

        /* Layout the content group, not SplitText's generated letter boxes. */
        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            gap: ${(0,h.getGap)("s")};
            width: 100%;
        }

        picture {
            position: relative;
            display: block;
            aspect-ratio: 1/1;
            width: 100%;
            overflow: clip;
            margin-block: ${(0,h.getGap)("m")};

            ${h.bp.l` display: none;  `}

            img {
                position: absolute;
                inset: 0;
                object-fit: cover;
                object-position: center;
            }
        }
    `),j=m.default.span.withConfig({componentId:"sc-3a017878-12"})(()=>m.css`
        opacity: 0.6;
    `),k=(0,p.forwardRef)((e,n)=>{let o,a,s,l=(0,r.c)(7),{image:c}=e;l[0]!==c?(o=(0,i.resolveImageWithAlt)(c),l[0]=c,l[1]=o):o=l[1];let u=o;return u?(l[2]!==u?(a=(0,t.jsx)(f.default,{image:u,fill:!0,sizes:"33.33vw"}),l[2]=u,l[3]=a):a=l[3],l[4]!==n||l[5]!==a?(s=(0,t.jsx)(I,{ref:n,children:a}),l[4]=n,l[5]=a,l[6]=s):s=l[6],s):null});k.displayName="ClippedImage";let C=(0,p.memo)(k);var L=e.i(156569),P=e.i(124821);let O=(0,p.forwardRef)((e,n)=>{let o,a,s,l,c,u,d,p,h,g,m,v,b,y=(0,r.c)(32),{heading:w,description:x,currentIndex:$,total:E,editAttr:T,image:A,idx:S}=e;y[0]!==A?(o=(0,i.resolveImageWithAlt)(A),y[0]=A,y[1]=o):o=y[1];let I=o;if(!I)return null;let k=S===E-1,C=String($+1);y[2]!==C?(a=C.padStart(2,"0"),y[2]=C,y[3]=a):a=y[3];let O=String(E);y[4]!==O?(s=O.padStart(2,"0"),y[4]=O,y[5]=s):s=y[5];let D=`/ ${s}`;return y[6]!==D?(l=(0,t.jsx)(j,{children:D}),y[6]=D,y[7]=l):l=y[7],y[8]!==a||y[9]!==l?(c=(0,t.jsxs)("em",{children:[a," ",l]}),y[8]=a,y[9]=l,y[10]=c):c=y[10],y[11]!==I?(u=(0,t.jsx)("picture",{children:(0,t.jsx)(f.default,{image:I,fill:!0,sizes:"(max-width: 1023px) calc(100vw - 32px - 32px), 1px"})}),y[11]=I,y[12]=u):u=y[12],y[13]!==w?(d=(0,t.jsx)("h3",{children:w}),y[13]=w,y[14]=d):d=y[14],y[15]!==T||y[16]!==d?(p=(0,t.jsx)(L.default,{editAttr:T,children:d}),y[15]=T,y[16]=d,y[17]=p):p=y[17],y[18]!==x?(h=(0,t.jsx)("p",{children:x}),y[18]=x,y[19]=h):h=y[19],y[20]!==p||y[21]!==h?(g=(0,t.jsxs)("div",{children:[p,h]}),y[20]=p,y[21]=h,y[22]=g):g=y[22],y[23]===Symbol.for("react.memo_cache_sentinel")?(m=(0,t.jsx)(P.default,{to:"/branders/contact",label:"Start Your Project",aria:"Go to Contact"}),y[23]=m):m=y[23],y[24]!==u||y[25]!==g||y[26]!==k||y[27]!==c?(v=(0,t.jsxs)(R,{$isLast:k,children:[c,u,g,m]}),y[24]=u,y[25]=g,y[26]=k,y[27]=c,y[28]=v):v=y[28],y[29]!==n||y[30]!==v?(b=(0,t.jsx)(_,{ref:n,children:v}),y[29]=n,y[30]=v,y[31]=b):b=y[31],b});O.displayName="RelativeContent";let D=e=>{let h,g,m,v,I,_,R,j,k,L,P,D,M,N,H,z=(0,r.c)(31),{usps:U,documentId:G,documentType:F}=e,B=(0,p.useRef)(null);z[0]===Symbol.for("react.memo_cache_sentinel")?(h=[],z[0]=h):h=z[0];let W=(0,p.useRef)(h);z[1]===Symbol.for("react.memo_cache_sentinel")?(g=[],z[1]=g):g=z[1];let V=(0,p.useRef)(g);z[2]===Symbol.for("react.memo_cache_sentinel")?(m=[],z[2]=m):m=z[2];let X=(0,p.useRef)(m),q=(0,p.useRef)(null),Y=(0,u.useLenis)();return(z[3]!==Y?.rootElement?(v=e=>{let{isDesktop:t}=e,r=V.current,i=Y?.rootElement;if(!i||!r.length)return;if(!t){for(let e of r){let t=e?.querySelector("picture"),r=t?.querySelector("img");t&&r&&l.default.fromTo(r,{scale:1.5},{scale:1,ease:"none",scrollTrigger:{scroller:i,trigger:t,start:"top bottom",end:"center center",scrub:!0}})}return}let n=W.current,o=X.current,a=q.current,s=B.current;if(!n.length||!o.length||!a||!s)return;l.default.set(a,{y:"-25dvh",willChange:"transform"});let u=0,d=1;c.default.create({scroller:i,trigger:s,start:"top bottom",end:"bottom top",onRefresh:e=>{let t=e.end-e.start,r=i.clientHeight;u=t>0?Math.min(1,r/t):0,d=t>0?Math.max(0,(t-r)/t):1},onUpdate:e=>{let t=0;if(e.progress<u&&u>0){let r=e.progress/u;t=l.default.utils.interpolate(-25,0,r)}else if(e.progress>d&&d<1){let r=(e.progress-d)/(1-d);t=l.default.utils.interpolate(0,25,r)}l.default.set(a,{y:`${t}dvh`})}}),l.default.set(n[0],{clipPath:"inset(0% 0% 0% 0%)"}),n.forEach((e,t)=>{if(0===t)return;let n=r[t];e&&n&&l.default.fromTo(e,{clipPath:"inset(50%)"},{clipPath:"inset(0%)",ease:"none",scrollTrigger:{scroller:i,trigger:n,start:"top bottom",end:"top top",scrub:!0}})}),o.forEach((e,t)=>{if(!e)return;let n=t===o.length-1,a=r[t];(0===t&&a&&l.default.from(e,{yPercent:-50,ease:"none",scrollTrigger:{scroller:i,trigger:a,start:"top bottom",end:"top top",scrub:!0,markers:!1}}),n&&a)?l.default.to(e,{yPercent:50,ease:"none",scrollTrigger:{scroller:i,trigger:a,start:"bottom bottom",end:"bottom top",scrub:!0,markers:!1}}):!n&&a&&l.default.to(e,{autoAlpha:0,ease:"none",scrollTrigger:{scroller:i,trigger:a,start:"bottom bottom",end:"bottom top",scrub:!0,markers:!1}})})},z[3]=Y?.rootElement,z[4]=v):v=z[4],z[5]!==Y||z[6]!==U?(I={scope:B,dependencies:[U,Y]},z[5]=Y,z[6]=U,z[7]=I):I=z[7],(0,a.useAnimation)(v,I),z[8]!==Y?(_=()=>{if(!Y)return;let e=window.matchMedia("(min-width: 1024px)"),t=null,r=null,i=()=>{if(r?.(),t?.destroy(),r=null,t=null,!e.matches)return;let i=V.current.filter(Boolean);i.length&&(r=(t=new d.default(Y,{type:"proximity",debounce:750})).addElements(i,{align:["start"]}))};return i(),e.addEventListener("change",i),()=>{e.removeEventListener("change",i),r?.(),t?.destroy()}},R=[Y],z[8]=Y,z[9]=_,z[10]=R):(_=z[9],R=z[10]),(0,p.useEffect)(_,R),U?.length)?(z[11]!==U?(j=U.map((e,r)=>{let{image:o,_key:a}=e,s=(0,i.resolveImageWithAlt)(o);return s?.src?(0,t.jsx)(x,{style:{zIndex:-r},ref:n(X,r),children:(0,t.jsx)(f.default,{image:s,fill:!0,sizes:"(min-width: 1024px) 100vw, 0px"})},a):null}),z[11]=U,z[12]=j):j=z[12],z[13]!==j?(k=(0,t.jsx)(y,{children:(0,t.jsx)(w,{children:j})}),z[13]=j,z[14]=k):k=z[14],z[15]!==U?(L=U.map((e,r)=>{let{image:i,_key:o}=e;return(0,t.jsx)(C,{image:i,ref:n(W,r)},o)}),z[15]=U,z[16]=L):L=z[16],z[17]!==L?(P=(0,t.jsx)(E,{$l:"2/7",$xxl:"3/7",children:(0,t.jsx)(T,{children:(0,t.jsx)(A,{ref:q,children:L})})}),z[17]=L,z[18]=P):P=z[18],z[19]!==G||z[20]!==F||z[21]!==U?(D=U.map((e,r)=>{let{heading:i,description:a,_key:s,image:l}=e;return(0,t.jsx)(O,{idx:r,image:l,heading:i,description:a,currentIndex:r,total:U.length,editAttr:(0,o.sanityEditAttr)({id:G,type:F,path:`approachUsps[_key=="${s}"].heading`}),ref:n(V,r)},s)}),z[19]=G,z[20]=F,z[21]=U,z[22]=D):D=z[22],z[23]!==D?(M=(0,t.jsx)(S,{$l:"8/12",$xxl:"8/11",children:D}),z[23]=D,z[24]=M):M=z[24],z[25]!==P||z[26]!==M?(N=(0,t.jsx)($,{children:(0,t.jsxs)(s.default,{children:[P,M]})}),z[25]=P,z[26]=M,z[27]=N):N=z[27],z[28]!==N||z[29]!==k?(H=(0,t.jsxs)(b,{ref:B,children:[k,N]}),z[28]=N,z[29]=k,z[30]=H):H=z[30],H):null};D.displayName="USPS",e.s(["default",0,D],115166)},456393,e=>{"use strict";e.s(["drawCoverFrame",0,(e,t,r,i)=>{let n=t.displayWidth,o=t.displayHeight,a=Math.max(r/n,i/o),s=n*a,l=o*a;e.clearRect(0,0,r,i),e.drawImage(t,(r-s)/2,(i-l)/2,s,l)},"forceRedrawFrame",0,(e,t)=>{if(!e.manifest)return;let r=Math.min(Math.max(0,Math.round(t)),e.manifest.totalFrames-1);e.refresh(r)},"waitForActiveFrameRuntime",0,e=>new Promise((t,r)=>{if(window.ActiveFrame)return void t();let i=window.setInterval(()=>{if(e?.aborted){window.clearInterval(i),r(new DOMException("Aborted","AbortError"));return}window.ActiveFrame&&(window.clearInterval(i),t())},50);e?.addEventListener("abort",()=>{window.clearInterval(i),r(new DOMException("Aborted","AbortError"))},{once:!0})})])},992325,e=>{"use strict";var t=e.i(776159),r=e.i(989955);e.s(["sanityEditAttr",0,({id:e,type:i,path:n})=>{if(!e||!i)return;let o=t.studioUrl.replace(/\/$/,"");return(0,r.createDataAttribute)({baseUrl:o,projectId:t.projectId,dataset:t.dataset,id:e,type:i,path:n}).toString()}])}]);