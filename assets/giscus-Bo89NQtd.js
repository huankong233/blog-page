/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,V=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),J=new WeakMap;let oe=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(V&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=J.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&J.set(t,e))}return e}toString(){return this.cssText}};const pe=i=>new oe(typeof i=="string"?i:i+"",void 0,q),fe=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,n,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[o+1],i[0]);return new oe(t,i,q)},$e=(i,e)=>{if(V)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),n=H.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)}},F=V?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return pe(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_e,defineProperty:ge,getOwnPropertyDescriptor:me,getOwnPropertyNames:Ae,getOwnPropertySymbols:ye,getPrototypeOf:Se}=Object,A=globalThis,Q=A.trustedTypes,Ee=Q?Q.emptyScript:"",Y=A.reactiveElementPolyfillSupport,P=(i,e)=>i,L={toAttribute(i,e){switch(e){case Boolean:i=i?Ee:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},K=(i,e)=>!_e(i,e),Z={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:K};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Z){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(e,s,t);n!==void 0&&ge(this.prototype,e,n)}}static getPropertyDescriptor(e,t,s){const{get:n,set:o}=me(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get(){return n==null?void 0:n.call(this)},set(r){const a=n==null?void 0:n.call(this);o.call(this,r),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Z}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const e=Se(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const t=this.properties,s=[...Ae(t),...ye(t)];for(const n of s)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,n]of t)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const n=this._$Eu(t,s);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const n of s)t.unshift(F(n))}else e!==void 0&&t.push(F(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $e(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var o;const s=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,s);if(n!==void 0&&s.reflect===!0){const r=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:L).toAttribute(t,s.type);this._$Em=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){var o;const s=this.constructor,n=s._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const r=s.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:L;this._$Em=n,this[n]=a.fromAttribute(t,r.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??K)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,r]of n)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(t)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var n;return(n=s.hostUpdated)==null?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[P("elementProperties")]=new Map,b[P("finalized")]=new Map,Y==null||Y({ReactiveElement:b}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=globalThis,k=v.trustedTypes,X=k?k.createPolicy("lit-html",{createHTML:i=>i}):void 0,he="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,ae="?"+m,be=`<${ae}>`,E=document,N=()=>E.createComment(""),R=i=>i===null||typeof i!="object"&&typeof i!="function",le=Array.isArray,Ce=i=>le(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",j=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ee=/-->/g,te=/>/g,y=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),se=/'/g,ie=/"/g,ce=/^(?:script|style|textarea|title)$/i,we=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),Ue=we(1),C=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),ne=new WeakMap,S=E.createTreeWalker(E,129);function de(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(e):e}const Pe=(i,e)=>{const t=i.length-1,s=[];let n,o=e===2?"<svg>":"",r=U;for(let a=0;a<t;a++){const h=i[a];let d,p,l=-1,_=0;for(;_<h.length&&(r.lastIndex=_,p=r.exec(h),p!==null);)_=r.lastIndex,r===U?p[1]==="!--"?r=ee:p[1]!==void 0?r=te:p[2]!==void 0?(ce.test(p[2])&&(n=RegExp("</"+p[2],"g")),r=y):p[3]!==void 0&&(r=y):r===y?p[0]===">"?(r=n??U,l=-1):p[1]===void 0?l=-2:(l=r.lastIndex-p[2].length,d=p[1],r=p[3]===void 0?y:p[3]==='"'?ie:se):r===ie||r===se?r=y:r===ee||r===te?r=U:(r=y,n=void 0);const g=r===y&&i[a+1].startsWith("/>")?" ":"";o+=r===U?h+be:l>=0?(s.push(d),h.slice(0,l)+he+h.slice(l)+m+g):h+m+(l===-2?a:g)}return[de(i,o+(i[t]||"<?>")+(e===2?"</svg>":"")),s]};class I{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let o=0,r=0;const a=e.length-1,h=this.parts,[d,p]=Pe(e,t);if(this.el=I.createElement(d,s),S.currentNode=this.el.content,t===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(n=S.nextNode())!==null&&h.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const l of n.getAttributeNames())if(l.endsWith(he)){const _=p[r++],g=n.getAttribute(l).split(m),x=/([.?@])?(.*)/.exec(_);h.push({type:1,index:o,name:x[2],strings:g,ctor:x[1]==="."?Te:x[1]==="?"?Oe:x[1]==="@"?Ne:z}),n.removeAttribute(l)}else l.startsWith(m)&&(h.push({type:6,index:o}),n.removeAttribute(l));if(ce.test(n.tagName)){const l=n.textContent.split(m),_=l.length-1;if(_>0){n.textContent=k?k.emptyScript:"";for(let g=0;g<_;g++)n.append(l[g],N()),S.nextNode(),h.push({type:2,index:++o});n.append(l[_],N())}}}else if(n.nodeType===8)if(n.data===ae)h.push({type:2,index:o});else{let l=-1;for(;(l=n.data.indexOf(m,l+1))!==-1;)h.push({type:7,index:o}),l+=m.length-1}o++}}static createElement(e,t){const s=E.createElement("template");return s.innerHTML=e,s}}function w(i,e,t=i,s){var r,a;if(e===C)return e;let n=s!==void 0?(r=t._$Co)==null?void 0:r[s]:t._$Cl;const o=R(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==o&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),o===void 0?n=void 0:(n=new o(i),n._$AT(i,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=n:t._$Cl=n),n!==void 0&&(e=w(i,n._$AS(i,e.values),n,s)),e}let ve=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,n=((e==null?void 0:e.creationScope)??E).importNode(t,!0);S.currentNode=n;let o=S.nextNode(),r=0,a=0,h=s[0];for(;h!==void 0;){if(r===h.index){let d;h.type===2?d=new M(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Re(o,this,e)),this._$AV.push(d),h=s[++a]}r!==(h==null?void 0:h.index)&&(o=S.nextNode(),r++)}return S.currentNode=E,n}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}};class M{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,n){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=w(this,e,t),R(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ce(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==c&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=I.createElement(de(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===n)this._$AH.p(t);else{const r=new ve(n,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=ne.get(e.strings);return t===void 0&&ne.set(e.strings,t=new I(e)),t}k(e){le(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,n=0;for(const o of e)n===t.length?t.push(s=new M(this.S(N()),this.S(N()),this,this.options)):s=t[n],s._$AI(o),n++;n<t.length&&(this._$AR(s&&s._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,n,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(e,t=this,s,n){const o=this.strings;let r=!1;if(o===void 0)e=w(this,e,t,0),r=!R(e)||e!==this._$AH&&e!==C,r&&(this._$AH=e);else{const a=e;let h,d;for(e=o[0],h=0;h<o.length-1;h++)d=w(this,a[s+h],t,h),d===C&&(d=this._$AH[h]),r||(r=!R(d)||d!==this._$AH[h]),d===c?e=c:e!==c&&(e+=(d??"")+o[h+1]),this._$AH[h]=d}r&&!n&&this.j(e)}j(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Te extends z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===c?void 0:e}}class Oe extends z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==c)}}class Ne extends z{constructor(e,t,s,n,o){super(e,t,s,n,o),this.type=5}_$AI(e,t=this){if((e=w(this,e,t,0)??c)===C)return;const s=this._$AH,n=e===c&&s!==c||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==c&&(s===c||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Re{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){w(this,e)}}const B=v.litHtmlPolyfillSupport;B==null||B(I,M),(v.litHtmlVersions??(v.litHtmlVersions=[])).push("3.1.2");const Ie=(i,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let n=s._$litPart$;if(n===void 0){const o=(t==null?void 0:t.renderBefore)??null;s._$litPart$=n=new M(e.insertBefore(N(),o),o,void 0,t??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let T=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return C}};var re;T._$litElement$=!0,T.finalized=!0,(re=globalThis.litElementHydrateSupport)==null||re.call(globalThis,{LitElement:T});const G=globalThis.litElementPolyfillSupport;G==null||G({LitElement:T});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:K},He=(i=xe,e,t)=>{const{kind:s,metadata:n}=t;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(t.name,i),s==="accessor"){const{name:r}=t;return{set(a){const h=e.get.call(this);e.set.call(this,a),this.requestUpdate(r,h,i)},init(a){return a!==void 0&&this.P(r,void 0,i),a}}}if(s==="setter"){const{name:r}=t;return function(a){const h=this[r];e.call(this,a),this.requestUpdate(r,h,i)}}throw Error("Unsupported decorator location: "+s)};function $(i){return(e,t)=>typeof t=="object"?He(i,e,t):((s,n,o)=>{const r=n.hasOwnProperty(o);return n.constructor.createProperty(o,r?{...s,wrapped:!0}:s),r?Object.getOwnPropertyDescriptor(n,o):void 0})(i,e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},De=i=>(...e)=>({_$litDirective$:i,values:e});let ze=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=(i,e)=>{var s;const t=i._$AN;if(t===void 0)return!1;for(const n of t)(s=n._$AO)==null||s.call(n,e,!1),O(n,e);return!0},D=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},ue=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Be(e)}};function Ye(i){this._$AN!==void 0?(D(this),this._$AM=i,ue(this)):this._$AM=i}function je(i,e=!1,t=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(s))for(let o=t;o<s.length;o++)O(s[o],!1),D(s[o]);else s!=null&&(O(s,!1),D(s));else O(this,i)}const Be=i=>{i.type==ke.CHILD&&(i._$AP??(i._$AP=je),i._$AQ??(i._$AQ=Ye))};class Ge extends ze{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),ue(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,n;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(n=this.disconnected)==null||n.call(this)),t&&(O(this,e),D(this))}setValue(e){if(Le(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=()=>new Ve;class Ve{}const W=new WeakMap,qe=De(class extends Ge{render(i){return c}update(i,[e]){var s;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(s=i.options)==null?void 0:s.host,this.rt(this.ct=i.element)),c}rt(i){if(typeof this.Y=="function"){const e=this.ht??globalThis;let t=W.get(e);t===void 0&&(t=new WeakMap,W.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,e;return typeof this.Y=="function"?(i=W.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ke=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,f=(i,e,t,s)=>{for(var n=s>1?void 0:s?Je(e,t):e,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(e,t,n):r(n))||n);return s&&n&&Ke(e,t,n),n};function Fe(i){return customElements.get(i)?e=>e:Me(i)}let u=class extends T{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=We(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var i;return(i=this._iframeRef)==null?void 0:i.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(i){return`[giscus] An error occurred. Error message: "${i}".`}setupSession(){const i=location.href,e=new URL(i),t=localStorage.getItem(this.GISCUS_SESSION_KEY),s=e.searchParams.get("giscus")??"";if(this.__session="",s){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(s)),this.__session=s,e.searchParams.delete("giscus"),e.hash="",history.replaceState(void 0,document.title,e.toString());return}if(t)try{this.__session=JSON.parse(t)}catch(n){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(n==null?void 0:n.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(i){if(i.origin!==this._host)return;const{data:e}=i;if(!(typeof e=="object"&&e.giscus))return;if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),e.giscus.signOut){console.info("[giscus] User has logged out. Session has been cleared."),this.signOut();return}if(!e.giscus.error)return;const t=e.giscus.error;if(t.includes("Bad credentials")||t.includes("Invalid state value")||t.includes("State has expired")){if(localStorage.getItem(this.GISCUS_SESSION_KEY)!==null){console.warn(`${this._formatError(t)} Session has been cleared.`),this.signOut();return}console.error(`${this._formatError(t)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}if(t.includes("Discussion not found")){console.warn(`[giscus] ${t}. A new discussion will be created if a comment/reaction is submitted.`);return}console.error(`${this._formatError(t)} ${this.ERROR_SUGGESTION}`)}sendMessage(i){var e;!((e=this.iframeRef)!=null&&e.contentWindow)||!this.hasLoaded||this.iframeRef.contentWindow.postMessage({giscus:i},this._host)}updateConfig(){const i={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:this.strict==="1",reactionsEnabled:this.reactionsEnabled==="1",emitMetadata:this.emitMetadata==="1",inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(i)}firstUpdated(){var i;(i=this.iframeRef)==null||i.addEventListener("load",()=>{var e;(e=this.iframeRef)==null||e.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()})}requestUpdate(i,e,t){if(!this.hasUpdated||i==="host"){super.requestUpdate(i,e,t);return}this.updateConfig()}getMetaContent(i,e=!1){const t=e?`meta[property='og:${i}'],`:"",s=document.querySelector(t+`meta[name='${i}']`);return s?s.content:""}_getCleanedUrl(){const i=new URL(location.href);return i.searchParams.delete("giscus"),i.hash="",i}getTerm(){switch(this.mapping){case"url":return this._getCleanedUrl().toString();case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term??"";case"number":return"";case"pathname":default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return this.mapping==="number"?this.term??"":""}getIframeSrc(){const i=this._getCleanedUrl().toString(),e=`${i}${this.id?"#"+this.id:""}`,t=this.getMetaContent("description",!0),s=this.getMetaContent("giscus:backlink")||i,n={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId??"",category:this.category??"",categoryId:this.categoryId??"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:t,backLink:s},o=this._host,r=this.lang?`/${this.lang}`:"",a=new URLSearchParams(n);return`${o}${r}/widget?${a.toString()}`}render(){return Ue`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${qe(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}};u.styles=fe`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `;f([$({reflect:!0})],u.prototype,"host",2);f([$({reflect:!0})],u.prototype,"repo",2);f([$({reflect:!0})],u.prototype,"repoId",2);f([$({reflect:!0})],u.prototype,"category",2);f([$({reflect:!0})],u.prototype,"categoryId",2);f([$({reflect:!0})],u.prototype,"mapping",2);f([$({reflect:!0})],u.prototype,"term",2);f([$({reflect:!0})],u.prototype,"strict",2);f([$({reflect:!0})],u.prototype,"reactionsEnabled",2);f([$({reflect:!0})],u.prototype,"emitMetadata",2);f([$({reflect:!0})],u.prototype,"inputPosition",2);f([$({reflect:!0})],u.prototype,"theme",2);f([$({reflect:!0})],u.prototype,"lang",2);f([$({reflect:!0})],u.prototype,"loading",2);u=f([Fe("giscus-widget")],u);export{u as GiscusWidget};
