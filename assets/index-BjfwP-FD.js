(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function fd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var dd={exports:{}},Wl={},pd={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gi=Symbol.for("react.element"),fg=Symbol.for("react.portal"),dg=Symbol.for("react.fragment"),pg=Symbol.for("react.strict_mode"),hg=Symbol.for("react.profiler"),mg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),yg=Symbol.for("react.forward_ref"),kg=Symbol.for("react.suspense"),wg=Symbol.for("react.memo"),xg=Symbol.for("react.lazy"),qs=Symbol.iterator;function vg(n){return n===null||typeof n!="object"?null:(n=qs&&n[qs]||n["@@iterator"],typeof n=="function"?n:null)}var hd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},md=Object.assign,gd={};function pr(n,e,t){this.props=n,this.context=e,this.refs=gd,this.updater=t||hd}pr.prototype.isReactComponent={};pr.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};pr.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function yd(){}yd.prototype=pr.prototype;function Ea(n,e,t){this.props=n,this.context=e,this.refs=gd,this.updater=t||hd}var Ma=Ea.prototype=new yd;Ma.constructor=Ea;md(Ma,pr.prototype);Ma.isPureReactComponent=!0;var Qs=Array.isArray,kd=Object.prototype.hasOwnProperty,Ta={current:null},wd={key:!0,ref:!0,__self:!0,__source:!0};function xd(n,e,t){var r,i={},l=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(l=""+e.key),e)kd.call(e,r)&&!wd.hasOwnProperty(r)&&(i[r]=e[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(n&&n.defaultProps)for(r in u=n.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:gi,type:n,key:l,ref:o,props:i,_owner:Ta.current}}function Sg(n,e){return{$$typeof:gi,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Pa(n){return typeof n=="object"&&n!==null&&n.$$typeof===gi}function Cg(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Ys=/\/+/g;function ko(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Cg(""+n.key):e.toString(36)}function Xi(n,e,t,r,i){var l=typeof n;(l==="undefined"||l==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case gi:case fg:o=!0}}if(o)return o=n,i=i(o),n=r===""?"."+ko(o,0):r,Qs(i)?(t="",n!=null&&(t=n.replace(Ys,"$&/")+"/"),Xi(i,e,t,"",function(s){return s})):i!=null&&(Pa(i)&&(i=Sg(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ys,"$&/")+"/")+n)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qs(n))for(var u=0;u<n.length;u++){l=n[u];var a=r+ko(l,u);o+=Xi(l,e,t,a,i)}else if(a=vg(n),typeof a=="function")for(n=a.call(n),u=0;!(l=n.next()).done;)l=l.value,a=r+ko(l,u++),o+=Xi(l,e,t,a,i);else if(l==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _i(n,e,t){if(n==null)return n;var r=[],i=0;return Xi(n,r,"","",function(l){return e.call(t,l,i++)}),r}function _g(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var On={current:null},Ki={transition:null},Eg={ReactCurrentDispatcher:On,ReactCurrentBatchConfig:Ki,ReactCurrentOwner:Ta};function vd(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:_i,forEach:function(n,e,t){_i(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return _i(n,function(){e++}),e},toArray:function(n){return _i(n,function(e){return e})||[]},only:function(n){if(!Pa(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};W.Component=pr;W.Fragment=dg;W.Profiler=hg;W.PureComponent=Ea;W.StrictMode=pg;W.Suspense=kg;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eg;W.act=vd;W.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=md({},n.props),i=n.key,l=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(l=e.ref,o=Ta.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var u=n.type.defaultProps;for(a in e)kd.call(e,a)&&!wd.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&u!==void 0?u[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:gi,type:n.type,key:i,ref:l,props:r,_owner:o}};W.createContext=function(n){return n={$$typeof:gg,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:mg,_context:n},n.Consumer=n};W.createElement=xd;W.createFactory=function(n){var e=xd.bind(null,n);return e.type=n,e};W.createRef=function(){return{current:null}};W.forwardRef=function(n){return{$$typeof:yg,render:n}};W.isValidElement=Pa;W.lazy=function(n){return{$$typeof:xg,_payload:{_status:-1,_result:n},_init:_g}};W.memo=function(n,e){return{$$typeof:wg,type:n,compare:e===void 0?null:e}};W.startTransition=function(n){var e=Ki.transition;Ki.transition={};try{n()}finally{Ki.transition=e}};W.unstable_act=vd;W.useCallback=function(n,e){return On.current.useCallback(n,e)};W.useContext=function(n){return On.current.useContext(n)};W.useDebugValue=function(){};W.useDeferredValue=function(n){return On.current.useDeferredValue(n)};W.useEffect=function(n,e){return On.current.useEffect(n,e)};W.useId=function(){return On.current.useId()};W.useImperativeHandle=function(n,e,t){return On.current.useImperativeHandle(n,e,t)};W.useInsertionEffect=function(n,e){return On.current.useInsertionEffect(n,e)};W.useLayoutEffect=function(n,e){return On.current.useLayoutEffect(n,e)};W.useMemo=function(n,e){return On.current.useMemo(n,e)};W.useReducer=function(n,e,t){return On.current.useReducer(n,e,t)};W.useRef=function(n){return On.current.useRef(n)};W.useState=function(n){return On.current.useState(n)};W.useSyncExternalStore=function(n,e,t){return On.current.useSyncExternalStore(n,e,t)};W.useTransition=function(){return On.current.useTransition()};W.version="18.3.1";pd.exports=W;var Cn=pd.exports;const Mg=fd(Cn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg=Cn,Pg=Symbol.for("react.element"),Ag=Symbol.for("react.fragment"),Ig=Object.prototype.hasOwnProperty,zg=Tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lg={key:!0,ref:!0,__self:!0,__source:!0};function Sd(n,e,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ig.call(e,r)&&!Lg.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Pg,type:n,key:l,ref:o,props:i,_owner:zg.current}}Wl.Fragment=Ag;Wl.jsx=Sd;Wl.jsxs=Sd;dd.exports=Wl;var U=dd.exports,su={},Cd={exports:{}},te={},_d={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,F){var k=N.length;N.push(F);n:for(;0<k;){var G=k-1>>>1,J=N[G];if(0<i(J,F))N[G]=F,N[k]=J,k=G;else break n}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var F=N[0],k=N.pop();if(k!==F){N[0]=k;n:for(var G=0,J=N.length,w=J>>>1;G<w;){var wn=2*(G+1)-1,Se=N[wn],rn=wn+1,Ce=N[rn];if(0>i(Se,k))rn<J&&0>i(Ce,Se)?(N[G]=Ce,N[rn]=k,G=rn):(N[G]=Se,N[wn]=k,G=wn);else if(rn<J&&0>i(Ce,k))N[G]=Ce,N[rn]=k,G=rn;else break n}}return F}function i(N,F){var k=N.sortIndex-F.sortIndex;return k!==0?k:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();n.unstable_now=function(){return o.now()-u}}var a=[],s=[],f=1,c=null,p=3,d=!1,g=!1,x=!1,M=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var F=t(s);F!==null;){if(F.callback===null)r(s);else if(F.startTime<=N)r(s),F.sortIndex=F.expirationTime,e(a,F);else break;F=t(s)}}function C(N){if(x=!1,y(N),!g)if(t(a)!==null)g=!0,gn(_);else{var F=t(s);F!==null&&hn(C,F.startTime-N)}}function _(N,F){g=!1,x&&(x=!1,h(A),A=-1),d=!0;var k=p;try{for(y(F),c=t(a);c!==null&&(!(c.expirationTime>F)||N&&!L());){var G=c.callback;if(typeof G=="function"){c.callback=null,p=c.priorityLevel;var J=G(c.expirationTime<=F);F=n.unstable_now(),typeof J=="function"?c.callback=J:c===t(a)&&r(a),y(F)}else r(a);c=t(a)}if(c!==null)var w=!0;else{var wn=t(s);wn!==null&&hn(C,wn.startTime-F),w=!1}return w}finally{c=null,p=k,d=!1}}var v=!1,T=null,A=-1,B=5,S=-1;function L(){return!(n.unstable_now()-S<B)}function R(){if(T!==null){var N=n.unstable_now();S=N;var F=!0;try{F=T(!0,N)}finally{F?Y():(v=!1,T=null)}}else v=!1}var Y;if(typeof m=="function")Y=function(){m(R)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,Q=tn.port2;tn.port1.onmessage=R,Y=function(){Q.postMessage(null)}}else Y=function(){M(R,0)};function gn(N){T=N,v||(v=!0,Y())}function hn(N,F){A=M(function(){N(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){g||d||(g=!0,gn(_))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(a)},n.unstable_next=function(N){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var k=p;p=F;try{return N()}finally{p=k}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=p;p=N;try{return F()}finally{p=k}},n.unstable_scheduleCallback=function(N,F,k){var G=n.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?G+k:G):k=G,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=k+J,N={id:f++,callback:F,priorityLevel:N,startTime:k,expirationTime:J,sortIndex:-1},k>G?(N.sortIndex=k,e(s,N),t(a)===null&&N===t(s)&&(x?(h(A),A=-1):x=!0,hn(C,k-G))):(N.sortIndex=J,e(a,N),g||d||(g=!0,gn(_))),N},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(N){var F=p;return function(){var k=p;p=F;try{return N.apply(this,arguments)}finally{p=k}}}})(Ed);_d.exports=Ed;var Ng=_d.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg=Cn,ee=Ng;function P(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Md=new Set,Jr={};function Lt(n,e){or(n,e),or(n+"Capture",e)}function or(n,e){for(Jr[n]=e,n=0;n<e.length;n++)Md.add(e[n])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=Object.prototype.hasOwnProperty,bg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gs={},Xs={};function Rg(n){return cu.call(Xs,n)?!0:cu.call(Gs,n)?!1:bg.test(n)?Xs[n]=!0:(Gs[n]=!0,!1)}function Fg(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Og(n,e,t,r){if(e===null||typeof e>"u"||Fg(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jn(n,e,t,r,i,l,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=l,this.removeEmptyString=o}var zn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){zn[n]=new jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];zn[e]=new jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){zn[n]=new jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){zn[n]=new jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){zn[n]=new jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){zn[n]=new jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){zn[n]=new jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){zn[n]=new jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){zn[n]=new jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Aa=/[\-:]([a-z])/g;function Ia(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Aa,Ia);zn[e]=new jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Aa,Ia);zn[e]=new jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Aa,Ia);zn[e]=new jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){zn[n]=new jn(n,1,!1,n.toLowerCase(),null,!1,!1)});zn.xlinkHref=new jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){zn[n]=new jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function za(n,e,t,r){var i=zn.hasOwnProperty(e)?zn[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Og(e,t,i,r)&&(t=null),r||i===null?Rg(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,r=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var Ve=Dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ei=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),La=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Pd=Symbol.for("react.context"),Na=Symbol.for("react.forward_ref"),du=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),Da=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Ad=Symbol.for("react.offscreen"),Ks=Symbol.iterator;function vr(n){return n===null||typeof n!="object"?null:(n=Ks&&n[Ks]||n["@@iterator"],typeof n=="function"?n:null)}var dn=Object.assign,wo;function Nr(n){if(wo===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);wo=e&&e[1]||""}return`
`+wo+n}var xo=!1;function vo(n,e){if(!n||xo)return"";xo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(s){var r=s}Reflect.construct(n,[],e)}else{try{e.call()}catch(s){r=s}n.call(e.prototype)}else{try{throw Error()}catch(s){r=s}n()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var a=`
`+i[o].replace(" at new "," at ");return n.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",n.displayName)),a}while(1<=o&&0<=u);break}}}finally{xo=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Nr(n):""}function jg(n){switch(n.tag){case 5:return Nr(n.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return n=vo(n.type,!1),n;case 11:return n=vo(n.type.render,!1),n;case 1:return n=vo(n.type,!0),n;default:return""}}function hu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ht:return"Fragment";case Bt:return"Portal";case fu:return"Profiler";case La:return"StrictMode";case du:return"Suspense";case pu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Pd:return(n.displayName||"Context")+".Consumer";case Td:return(n._context.displayName||"Context")+".Provider";case Na:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Da:return e=n.displayName||null,e!==null?e:hu(n.type)||"Memo";case Ge:e=n._payload,n=n._init;try{return hu(n(e))}catch{}}return null}function $g(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hu(e);case 8:return e===La?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function st(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Id(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Bg(n){var e=Id(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Mi(n){n._valueTracker||(n._valueTracker=Bg(n))}function zd(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=Id(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function pl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function mu(n,e){var t=e.checked;return dn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Zs(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=st(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ld(n,e){e=e.checked,e!=null&&za(n,"checked",e,!1)}function gu(n,e){Ld(n,e);var t=st(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?yu(n,e.type,t):e.hasOwnProperty("defaultValue")&&yu(n,e.type,st(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Js(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function yu(n,e,t){(e!=="number"||pl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Dr=Array.isArray;function Jt(n,e,t,r){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&r&&(n[t].defaultSelected=!0)}else{for(t=""+st(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,r&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function ku(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return dn({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function nc(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(P(92));if(Dr(t)){if(1<t.length)throw Error(P(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:st(t)}}function Nd(n,e){var t=st(e.value),r=st(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function ec(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Dd(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Dd(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ti,bd=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ti=Ti||document.createElement("div"),Ti.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ti.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ni(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hg=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(n){Hg.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),jr[e]=jr[n]})});function Rd(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||jr.hasOwnProperty(n)&&jr[n]?(""+e).trim():e+"px"}function Fd(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Rd(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,i):n[t]=i}}var Ug=dn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xu(n,e){if(e){if(Ug[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function vu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Su=null;function ba(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Cu=null,nr=null,er=null;function tc(n){if(n=wi(n)){if(typeof Cu!="function")throw Error(P(280));var e=n.stateNode;e&&(e=Xl(e),Cu(n.stateNode,n.type,e))}}function Od(n){nr?er?er.push(n):er=[n]:nr=n}function jd(){if(nr){var n=nr,e=er;if(er=nr=null,tc(n),e)for(n=0;n<e.length;n++)tc(e[n])}}function $d(n,e){return n(e)}function Bd(){}var So=!1;function Hd(n,e,t){if(So)return n(e,t);So=!0;try{return $d(n,e,t)}finally{So=!1,(nr!==null||er!==null)&&(Bd(),jd())}}function ei(n,e){var t=n.stateNode;if(t===null)return null;var r=Xl(t);if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(P(231,e,typeof t));return t}var _u=!1;if($e)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{_u=!1}function Vg(n,e,t,r,i,l,o,u,a){var s=Array.prototype.slice.call(arguments,3);try{e.apply(t,s)}catch(f){this.onError(f)}}var $r=!1,hl=null,ml=!1,Eu=null,Wg={onError:function(n){$r=!0,hl=n}};function qg(n,e,t,r,i,l,o,u,a){$r=!1,hl=null,Vg.apply(Wg,arguments)}function Qg(n,e,t,r,i,l,o,u,a){if(qg.apply(this,arguments),$r){if($r){var s=hl;$r=!1,hl=null}else throw Error(P(198));ml||(ml=!0,Eu=s)}}function Nt(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ud(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function rc(n){if(Nt(n)!==n)throw Error(P(188))}function Yg(n){var e=n.alternate;if(!e){if(e=Nt(n),e===null)throw Error(P(188));return e!==n?null:n}for(var t=n,r=e;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return rc(i),n;if(l===r)return rc(i),e;l=l.sibling}throw Error(P(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?n:e}function Vd(n){return n=Yg(n),n!==null?Wd(n):null}function Wd(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Wd(n);if(e!==null)return e;n=n.sibling}return null}var qd=ee.unstable_scheduleCallback,ic=ee.unstable_cancelCallback,Gg=ee.unstable_shouldYield,Xg=ee.unstable_requestPaint,mn=ee.unstable_now,Kg=ee.unstable_getCurrentPriorityLevel,Ra=ee.unstable_ImmediatePriority,Qd=ee.unstable_UserBlockingPriority,gl=ee.unstable_NormalPriority,Zg=ee.unstable_LowPriority,Yd=ee.unstable_IdlePriority,ql=null,Ae=null;function Jg(n){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(ql,n,void 0,(n.current.flags&128)===128)}catch{}}var ye=Math.clz32?Math.clz32:t1,n1=Math.log,e1=Math.LN2;function t1(n){return n>>>=0,n===0?32:31-(n1(n)/e1|0)|0}var Pi=64,Ai=4194304;function br(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yl(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,i=n.suspendedLanes,l=n.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=br(u):(l&=o,l!==0&&(r=br(l)))}else o=t&~i,o!==0?r=br(o):l!==0&&(r=br(l));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,l=e&-e,i>=l||i===16&&(l&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-ye(e),i=1<<t,r|=n[t],e&=~i;return r}function r1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i1(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,i=n.expirationTimes,l=n.pendingLanes;0<l;){var o=31-ye(l),u=1<<o,a=i[o];a===-1?(!(u&t)||u&r)&&(i[o]=r1(u,e)):a<=e&&(n.expiredLanes|=u),l&=~u}}function Mu(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gd(){var n=Pi;return Pi<<=1,!(Pi&4194240)&&(Pi=64),n}function Co(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function yi(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ye(e),n[e]=t}function l1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-ye(t),l=1<<i;e[i]=0,r[i]=-1,n[i]=-1,t&=~l}}function Fa(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-ye(t),i=1<<r;i&e|n[r]&e&&(n[r]|=e),t&=~i}}var Z=0;function Xd(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Kd,Oa,Zd,Jd,np,Tu=!1,Ii=[],et=null,tt=null,rt=null,ti=new Map,ri=new Map,Ke=[],o1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lc(n,e){switch(n){case"focusin":case"focusout":et=null;break;case"dragenter":case"dragleave":tt=null;break;case"mouseover":case"mouseout":rt=null;break;case"pointerover":case"pointerout":ti.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ri.delete(e.pointerId)}}function Cr(n,e,t,r,i,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},e!==null&&(e=wi(e),e!==null&&Oa(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function u1(n,e,t,r,i){switch(e){case"focusin":return et=Cr(et,n,e,t,r,i),!0;case"dragenter":return tt=Cr(tt,n,e,t,r,i),!0;case"mouseover":return rt=Cr(rt,n,e,t,r,i),!0;case"pointerover":var l=i.pointerId;return ti.set(l,Cr(ti.get(l)||null,n,e,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,ri.set(l,Cr(ri.get(l)||null,n,e,t,r,i)),!0}return!1}function ep(n){var e=xt(n.target);if(e!==null){var t=Nt(e);if(t!==null){if(e=t.tag,e===13){if(e=Ud(t),e!==null){n.blockedOn=e,np(n.priority,function(){Zd(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Zi(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Pu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);Su=r,t.target.dispatchEvent(r),Su=null}else return e=wi(t),e!==null&&Oa(e),n.blockedOn=t,!1;e.shift()}return!0}function oc(n,e,t){Zi(n)&&t.delete(e)}function a1(){Tu=!1,et!==null&&Zi(et)&&(et=null),tt!==null&&Zi(tt)&&(tt=null),rt!==null&&Zi(rt)&&(rt=null),ti.forEach(oc),ri.forEach(oc)}function _r(n,e){n.blockedOn===e&&(n.blockedOn=null,Tu||(Tu=!0,ee.unstable_scheduleCallback(ee.unstable_NormalPriority,a1)))}function ii(n){function e(i){return _r(i,n)}if(0<Ii.length){_r(Ii[0],n);for(var t=1;t<Ii.length;t++){var r=Ii[t];r.blockedOn===n&&(r.blockedOn=null)}}for(et!==null&&_r(et,n),tt!==null&&_r(tt,n),rt!==null&&_r(rt,n),ti.forEach(e),ri.forEach(e),t=0;t<Ke.length;t++)r=Ke[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<Ke.length&&(t=Ke[0],t.blockedOn===null);)ep(t),t.blockedOn===null&&Ke.shift()}var tr=Ve.ReactCurrentBatchConfig,kl=!0;function s1(n,e,t,r){var i=Z,l=tr.transition;tr.transition=null;try{Z=1,ja(n,e,t,r)}finally{Z=i,tr.transition=l}}function c1(n,e,t,r){var i=Z,l=tr.transition;tr.transition=null;try{Z=4,ja(n,e,t,r)}finally{Z=i,tr.transition=l}}function ja(n,e,t,r){if(kl){var i=Pu(n,e,t,r);if(i===null)No(n,e,r,wl,t),lc(n,r);else if(u1(i,n,e,t,r))r.stopPropagation();else if(lc(n,r),e&4&&-1<o1.indexOf(n)){for(;i!==null;){var l=wi(i);if(l!==null&&Kd(l),l=Pu(n,e,t,r),l===null&&No(n,e,r,wl,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else No(n,e,r,null,t)}}var wl=null;function Pu(n,e,t,r){if(wl=null,n=ba(r),n=xt(n),n!==null)if(e=Nt(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ud(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return wl=n,null}function tp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kg()){case Ra:return 1;case Qd:return 4;case gl:case Zg:return 16;case Yd:return 536870912;default:return 16}default:return 16}}var Je=null,$a=null,Ji=null;function rp(){if(Ji)return Ji;var n,e=$a,t=e.length,r,i="value"in Je?Je.value:Je.textContent,l=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===i[l-r];r++);return Ji=i.slice(n,1<r?1-r:void 0)}function nl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function zi(){return!0}function uc(){return!1}function re(n){function e(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(t=n[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?zi:uc,this.isPropagationStopped=uc,this}return dn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),e}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=re(hr),ki=dn({},hr,{view:0,detail:0}),f1=re(ki),_o,Eo,Er,Ql=dn({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ha,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Er&&(Er&&n.type==="mousemove"?(_o=n.screenX-Er.screenX,Eo=n.screenY-Er.screenY):Eo=_o=0,Er=n),_o)},movementY:function(n){return"movementY"in n?n.movementY:Eo}}),ac=re(Ql),d1=dn({},Ql,{dataTransfer:0}),p1=re(d1),h1=dn({},ki,{relatedTarget:0}),Mo=re(h1),m1=dn({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),g1=re(m1),y1=dn({},hr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),k1=re(y1),w1=dn({},hr,{data:0}),sc=re(w1),x1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=S1[n])?!!e[n]:!1}function Ha(){return C1}var _1=dn({},ki,{key:function(n){if(n.key){var e=x1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=nl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?v1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ha,charCode:function(n){return n.type==="keypress"?nl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?nl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),E1=re(_1),M1=dn({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cc=re(M1),T1=dn({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ha}),P1=re(T1),A1=dn({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),I1=re(A1),z1=dn({},Ql,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),L1=re(z1),N1=[9,13,27,32],Ua=$e&&"CompositionEvent"in window,Br=null;$e&&"documentMode"in document&&(Br=document.documentMode);var D1=$e&&"TextEvent"in window&&!Br,ip=$e&&(!Ua||Br&&8<Br&&11>=Br),fc=" ",dc=!1;function lp(n,e){switch(n){case"keyup":return N1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ut=!1;function b1(n,e){switch(n){case"compositionend":return op(e);case"keypress":return e.which!==32?null:(dc=!0,fc);case"textInput":return n=e.data,n===fc&&dc?null:n;default:return null}}function R1(n,e){if(Ut)return n==="compositionend"||!Ua&&lp(n,e)?(n=rp(),Ji=$a=Je=null,Ut=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ip&&e.locale!=="ko"?null:e.data;default:return null}}var F1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!F1[n.type]:e==="textarea"}function up(n,e,t,r){Od(r),e=xl(e,"onChange"),0<e.length&&(t=new Ba("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Hr=null,li=null;function O1(n){kp(n,0)}function Yl(n){var e=qt(n);if(zd(e))return n}function j1(n,e){if(n==="change")return e}var ap=!1;if($e){var To;if($e){var Po="oninput"in document;if(!Po){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),Po=typeof hc.oninput=="function"}To=Po}else To=!1;ap=To&&(!document.documentMode||9<document.documentMode)}function mc(){Hr&&(Hr.detachEvent("onpropertychange",sp),li=Hr=null)}function sp(n){if(n.propertyName==="value"&&Yl(li)){var e=[];up(e,li,n,ba(n)),Hd(O1,e)}}function $1(n,e,t){n==="focusin"?(mc(),Hr=e,li=t,Hr.attachEvent("onpropertychange",sp)):n==="focusout"&&mc()}function B1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Yl(li)}function H1(n,e){if(n==="click")return Yl(e)}function U1(n,e){if(n==="input"||n==="change")return Yl(e)}function V1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ve=typeof Object.is=="function"?Object.is:V1;function oi(n,e){if(ve(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!cu.call(e,i)||!ve(n[i],e[i]))return!1}return!0}function gc(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yc(n,e){var t=gc(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=gc(t)}}function cp(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?cp(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function fp(){for(var n=window,e=pl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=pl(n.document)}return e}function Va(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function W1(n){var e=fp(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&cp(t.ownerDocument.documentElement,t)){if(r!==null&&Va(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!n.extend&&l>r&&(i=r,r=l,l=i),i=yc(t,l);var o=yc(t,r);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),l>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var q1=$e&&"documentMode"in document&&11>=document.documentMode,Vt=null,Au=null,Ur=null,Iu=!1;function kc(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Iu||Vt==null||Vt!==pl(r)||(r=Vt,"selectionStart"in r&&Va(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&oi(Ur,r)||(Ur=r,r=xl(Au,"onSelect"),0<r.length&&(e=new Ba("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=Vt)))}function Li(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Wt={animationend:Li("Animation","AnimationEnd"),animationiteration:Li("Animation","AnimationIteration"),animationstart:Li("Animation","AnimationStart"),transitionend:Li("Transition","TransitionEnd")},Ao={},dp={};$e&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function Gl(n){if(Ao[n])return Ao[n];if(!Wt[n])return n;var e=Wt[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in dp)return Ao[n]=e[t];return n}var pp=Gl("animationend"),hp=Gl("animationiteration"),mp=Gl("animationstart"),gp=Gl("transitionend"),yp=new Map,wc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(n,e){yp.set(n,e),Lt(e,[n])}for(var Io=0;Io<wc.length;Io++){var zo=wc[Io],Q1=zo.toLowerCase(),Y1=zo[0].toUpperCase()+zo.slice(1);ft(Q1,"on"+Y1)}ft(pp,"onAnimationEnd");ft(hp,"onAnimationIteration");ft(mp,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(gp,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function xc(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,Qg(r,e,void 0,n),n.currentTarget=null}function kp(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],i=r.event;r=r.listeners;n:{var l=void 0;if(e)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==l&&i.isPropagationStopped())break n;xc(i,u,s),l=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break n;xc(i,u,s),l=a}}}if(ml)throw n=Eu,ml=!1,Eu=null,n}function un(n,e){var t=e[bu];t===void 0&&(t=e[bu]=new Set);var r=n+"__bubble";t.has(r)||(wp(e,n,2,!1),t.add(r))}function Lo(n,e,t){var r=0;e&&(r|=4),wp(t,n,r,e)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function ui(n){if(!n[Ni]){n[Ni]=!0,Md.forEach(function(t){t!=="selectionchange"&&(G1.has(t)||Lo(t,!1,n),Lo(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ni]||(e[Ni]=!0,Lo("selectionchange",!1,e))}}function wp(n,e,t,r){switch(tp(e)){case 1:var i=s1;break;case 4:i=c1;break;default:i=ja}t=i.bind(null,e,t,n),i=void 0,!_u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function No(n,e,t,r,i){var l=r;if(!(e&1)&&!(e&2)&&r!==null)n:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;u!==null;){if(o=xt(u),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue n}u=u.parentNode}}r=r.return}Hd(function(){var s=l,f=ba(t),c=[];n:{var p=yp.get(n);if(p!==void 0){var d=Ba,g=n;switch(n){case"keypress":if(nl(t)===0)break n;case"keydown":case"keyup":d=E1;break;case"focusin":g="focus",d=Mo;break;case"focusout":g="blur",d=Mo;break;case"beforeblur":case"afterblur":d=Mo;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=p1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=P1;break;case pp:case hp:case mp:d=g1;break;case gp:d=I1;break;case"scroll":d=f1;break;case"wheel":d=L1;break;case"copy":case"cut":case"paste":d=k1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=cc}var x=(e&4)!==0,M=!x&&n==="scroll",h=x?p!==null?p+"Capture":null:p;x=[];for(var m=s,y;m!==null;){y=m;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,h!==null&&(C=ei(m,h),C!=null&&x.push(ai(m,C,y)))),M)break;m=m.return}0<x.length&&(p=new d(p,g,null,t,f),c.push({event:p,listeners:x}))}}if(!(e&7)){n:{if(p=n==="mouseover"||n==="pointerover",d=n==="mouseout"||n==="pointerout",p&&t!==Su&&(g=t.relatedTarget||t.fromElement)&&(xt(g)||g[Be]))break n;if((d||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,d?(g=t.relatedTarget||t.toElement,d=s,g=g?xt(g):null,g!==null&&(M=Nt(g),g!==M||g.tag!==5&&g.tag!==6)&&(g=null)):(d=null,g=s),d!==g)){if(x=ac,C="onMouseLeave",h="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(x=cc,C="onPointerLeave",h="onPointerEnter",m="pointer"),M=d==null?p:qt(d),y=g==null?p:qt(g),p=new x(C,m+"leave",d,t,f),p.target=M,p.relatedTarget=y,C=null,xt(f)===s&&(x=new x(h,m+"enter",g,t,f),x.target=y,x.relatedTarget=M,C=x),M=C,d&&g)e:{for(x=d,h=g,m=0,y=x;y;y=Ot(y))m++;for(y=0,C=h;C;C=Ot(C))y++;for(;0<m-y;)x=Ot(x),m--;for(;0<y-m;)h=Ot(h),y--;for(;m--;){if(x===h||h!==null&&x===h.alternate)break e;x=Ot(x),h=Ot(h)}x=null}else x=null;d!==null&&vc(c,p,d,x,!1),g!==null&&M!==null&&vc(c,M,g,x,!0)}}n:{if(p=s?qt(s):window,d=p.nodeName&&p.nodeName.toLowerCase(),d==="select"||d==="input"&&p.type==="file")var _=j1;else if(pc(p))if(ap)_=U1;else{_=B1;var v=$1}else(d=p.nodeName)&&d.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=H1);if(_&&(_=_(n,s))){up(c,_,t,f);break n}v&&v(n,p,s),n==="focusout"&&(v=p._wrapperState)&&v.controlled&&p.type==="number"&&yu(p,"number",p.value)}switch(v=s?qt(s):window,n){case"focusin":(pc(v)||v.contentEditable==="true")&&(Vt=v,Au=s,Ur=null);break;case"focusout":Ur=Au=Vt=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,kc(c,t,f);break;case"selectionchange":if(q1)break;case"keydown":case"keyup":kc(c,t,f)}var T;if(Ua)n:{switch(n){case"compositionstart":var A="onCompositionStart";break n;case"compositionend":A="onCompositionEnd";break n;case"compositionupdate":A="onCompositionUpdate";break n}A=void 0}else Ut?lp(n,t)&&(A="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(ip&&t.locale!=="ko"&&(Ut||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ut&&(T=rp()):(Je=f,$a="value"in Je?Je.value:Je.textContent,Ut=!0)),v=xl(s,A),0<v.length&&(A=new sc(A,n,null,t,f),c.push({event:A,listeners:v}),T?A.data=T:(T=op(t),T!==null&&(A.data=T)))),(T=D1?b1(n,t):R1(n,t))&&(s=xl(s,"onBeforeInput"),0<s.length&&(f=new sc("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:s}),f.data=T))}kp(c,e)})}function ai(n,e,t){return{instance:n,listener:e,currentTarget:t}}function xl(n,e){for(var t=e+"Capture",r=[];n!==null;){var i=n,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ei(n,t),l!=null&&r.unshift(ai(n,l,i)),l=ei(n,e),l!=null&&r.push(ai(n,l,i))),n=n.return}return r}function Ot(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function vc(n,e,t,r,i){for(var l=e._reactName,o=[];t!==null&&t!==r;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=ei(t,l),a!=null&&o.unshift(ai(t,a,u))):i||(a=ei(t,l),a!=null&&o.push(ai(t,a,u)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var X1=/\r\n?/g,K1=/\u0000|\uFFFD/g;function Sc(n){return(typeof n=="string"?n:""+n).replace(X1,`
`).replace(K1,"")}function Di(n,e,t){if(e=Sc(e),Sc(n)!==e&&t)throw Error(P(425))}function vl(){}var zu=null,Lu=null;function Nu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Du=typeof setTimeout=="function"?setTimeout:void 0,Z1=typeof clearTimeout=="function"?clearTimeout:void 0,Cc=typeof Promise=="function"?Promise:void 0,J1=typeof queueMicrotask=="function"?queueMicrotask:typeof Cc<"u"?function(n){return Cc.resolve(null).then(n).catch(n0)}:Du;function n0(n){setTimeout(function(){throw n})}function Do(n,e){var t=e,r=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){n.removeChild(i),ii(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);ii(e)}function it(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function _c(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var mr=Math.random().toString(36).slice(2),Pe="__reactFiber$"+mr,si="__reactProps$"+mr,Be="__reactContainer$"+mr,bu="__reactEvents$"+mr,e0="__reactListeners$"+mr,t0="__reactHandles$"+mr;function xt(n){var e=n[Pe];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Be]||t[Pe]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=_c(n);n!==null;){if(t=n[Pe])return t;n=_c(n)}return e}n=t,t=n.parentNode}return null}function wi(n){return n=n[Pe]||n[Be],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qt(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(P(33))}function Xl(n){return n[si]||null}var Ru=[],Qt=-1;function dt(n){return{current:n}}function an(n){0>Qt||(n.current=Ru[Qt],Ru[Qt]=null,Qt--)}function ln(n,e){Qt++,Ru[Qt]=n.current,n.current=e}var ct={},bn=dt(ct),Wn=dt(!1),Mt=ct;function ur(n,e){var t=n.type.contextTypes;if(!t)return ct;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=e[l];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function qn(n){return n=n.childContextTypes,n!=null}function Sl(){an(Wn),an(bn)}function Ec(n,e,t){if(bn.current!==ct)throw Error(P(168));ln(bn,e),ln(Wn,t)}function xp(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,$g(n)||"Unknown",i));return dn({},t,r)}function Cl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ct,Mt=bn.current,ln(bn,n),ln(Wn,Wn.current),!0}function Mc(n,e,t){var r=n.stateNode;if(!r)throw Error(P(169));t?(n=xp(n,e,Mt),r.__reactInternalMemoizedMergedChildContext=n,an(Wn),an(bn),ln(bn,n)):an(Wn),ln(Wn,t)}var Re=null,Kl=!1,bo=!1;function vp(n){Re===null?Re=[n]:Re.push(n)}function r0(n){Kl=!0,vp(n)}function pt(){if(!bo&&Re!==null){bo=!0;var n=0,e=Z;try{var t=Re;for(Z=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}Re=null,Kl=!1}catch(i){throw Re!==null&&(Re=Re.slice(n+1)),qd(Ra,pt),i}finally{Z=e,bo=!1}}return null}var Yt=[],Gt=0,_l=null,El=0,ie=[],le=0,Tt=null,Fe=1,Oe="";function yt(n,e){Yt[Gt++]=El,Yt[Gt++]=_l,_l=n,El=e}function Sp(n,e,t){ie[le++]=Fe,ie[le++]=Oe,ie[le++]=Tt,Tt=n;var r=Fe;n=Oe;var i=32-ye(r)-1;r&=~(1<<i),t+=1;var l=32-ye(e)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fe=1<<32-ye(e)+i|t<<i|r,Oe=l+n}else Fe=1<<l|t<<i|r,Oe=n}function Wa(n){n.return!==null&&(yt(n,1),Sp(n,1,0))}function qa(n){for(;n===_l;)_l=Yt[--Gt],Yt[Gt]=null,El=Yt[--Gt],Yt[Gt]=null;for(;n===Tt;)Tt=ie[--le],ie[le]=null,Oe=ie[--le],ie[le]=null,Fe=ie[--le],ie[le]=null}var ne=null,Jn=null,sn=!1,ge=null;function Cp(n,e){var t=ue(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Tc(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,ne=n,Jn=it(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,ne=n,Jn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Tt!==null?{id:Fe,overflow:Oe}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ue(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,ne=n,Jn=null,!0):!1;default:return!1}}function Fu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ou(n){if(sn){var e=Jn;if(e){var t=e;if(!Tc(n,e)){if(Fu(n))throw Error(P(418));e=it(t.nextSibling);var r=ne;e&&Tc(n,e)?Cp(r,t):(n.flags=n.flags&-4097|2,sn=!1,ne=n)}}else{if(Fu(n))throw Error(P(418));n.flags=n.flags&-4097|2,sn=!1,ne=n}}}function Pc(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ne=n}function bi(n){if(n!==ne)return!1;if(!sn)return Pc(n),sn=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Nu(n.type,n.memoizedProps)),e&&(e=Jn)){if(Fu(n))throw _p(),Error(P(418));for(;e;)Cp(n,e),e=it(e.nextSibling)}if(Pc(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(P(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Jn=it(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Jn=null}}else Jn=ne?it(n.stateNode.nextSibling):null;return!0}function _p(){for(var n=Jn;n;)n=it(n.nextSibling)}function ar(){Jn=ne=null,sn=!1}function Qa(n){ge===null?ge=[n]:ge.push(n)}var i0=Ve.ReactCurrentBatchConfig;function Mr(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,n));var i=r,l=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===l?e.ref:(e=function(o){var u=i.refs;o===null?delete u[l]:u[l]=o},e._stringRef=l,e)}if(typeof n!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,n))}return n}function Ri(n,e){throw n=Object.prototype.toString.call(e),Error(P(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ac(n){var e=n._init;return e(n._payload)}function Ep(n){function e(h,m){if(n){var y=h.deletions;y===null?(h.deletions=[m],h.flags|=16):y.push(m)}}function t(h,m){if(!n)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=at(h,m),h.index=0,h.sibling=null,h}function l(h,m,y){return h.index=y,n?(y=h.alternate,y!==null?(y=y.index,y<m?(h.flags|=2,m):y):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function u(h,m,y,C){return m===null||m.tag!==6?(m=Ho(y,h.mode,C),m.return=h,m):(m=i(m,y),m.return=h,m)}function a(h,m,y,C){var _=y.type;return _===Ht?f(h,m,y.props.children,C,y.key):m!==null&&(m.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ge&&Ac(_)===m.type)?(C=i(m,y.props),C.ref=Mr(h,m,y),C.return=h,C):(C=ul(y.type,y.key,y.props,null,h.mode,C),C.ref=Mr(h,m,y),C.return=h,C)}function s(h,m,y,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Uo(y,h.mode,C),m.return=h,m):(m=i(m,y.children||[]),m.return=h,m)}function f(h,m,y,C,_){return m===null||m.tag!==7?(m=_t(y,h.mode,C,_),m.return=h,m):(m=i(m,y),m.return=h,m)}function c(h,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ho(""+m,h.mode,y),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ei:return y=ul(m.type,m.key,m.props,null,h.mode,y),y.ref=Mr(h,null,m),y.return=h,y;case Bt:return m=Uo(m,h.mode,y),m.return=h,m;case Ge:var C=m._init;return c(h,C(m._payload),y)}if(Dr(m)||vr(m))return m=_t(m,h.mode,y,null),m.return=h,m;Ri(h,m)}return null}function p(h,m,y,C){var _=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:u(h,m,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ei:return y.key===_?a(h,m,y,C):null;case Bt:return y.key===_?s(h,m,y,C):null;case Ge:return _=y._init,p(h,m,_(y._payload),C)}if(Dr(y)||vr(y))return _!==null?null:f(h,m,y,C,null);Ri(h,y)}return null}function d(h,m,y,C,_){if(typeof C=="string"&&C!==""||typeof C=="number")return h=h.get(y)||null,u(m,h,""+C,_);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ei:return h=h.get(C.key===null?y:C.key)||null,a(m,h,C,_);case Bt:return h=h.get(C.key===null?y:C.key)||null,s(m,h,C,_);case Ge:var v=C._init;return d(h,m,y,v(C._payload),_)}if(Dr(C)||vr(C))return h=h.get(y)||null,f(m,h,C,_,null);Ri(m,C)}return null}function g(h,m,y,C){for(var _=null,v=null,T=m,A=m=0,B=null;T!==null&&A<y.length;A++){T.index>A?(B=T,T=null):B=T.sibling;var S=p(h,T,y[A],C);if(S===null){T===null&&(T=B);break}n&&T&&S.alternate===null&&e(h,T),m=l(S,m,A),v===null?_=S:v.sibling=S,v=S,T=B}if(A===y.length)return t(h,T),sn&&yt(h,A),_;if(T===null){for(;A<y.length;A++)T=c(h,y[A],C),T!==null&&(m=l(T,m,A),v===null?_=T:v.sibling=T,v=T);return sn&&yt(h,A),_}for(T=r(h,T);A<y.length;A++)B=d(T,h,A,y[A],C),B!==null&&(n&&B.alternate!==null&&T.delete(B.key===null?A:B.key),m=l(B,m,A),v===null?_=B:v.sibling=B,v=B);return n&&T.forEach(function(L){return e(h,L)}),sn&&yt(h,A),_}function x(h,m,y,C){var _=vr(y);if(typeof _!="function")throw Error(P(150));if(y=_.call(y),y==null)throw Error(P(151));for(var v=_=null,T=m,A=m=0,B=null,S=y.next();T!==null&&!S.done;A++,S=y.next()){T.index>A?(B=T,T=null):B=T.sibling;var L=p(h,T,S.value,C);if(L===null){T===null&&(T=B);break}n&&T&&L.alternate===null&&e(h,T),m=l(L,m,A),v===null?_=L:v.sibling=L,v=L,T=B}if(S.done)return t(h,T),sn&&yt(h,A),_;if(T===null){for(;!S.done;A++,S=y.next())S=c(h,S.value,C),S!==null&&(m=l(S,m,A),v===null?_=S:v.sibling=S,v=S);return sn&&yt(h,A),_}for(T=r(h,T);!S.done;A++,S=y.next())S=d(T,h,A,S.value,C),S!==null&&(n&&S.alternate!==null&&T.delete(S.key===null?A:S.key),m=l(S,m,A),v===null?_=S:v.sibling=S,v=S);return n&&T.forEach(function(R){return e(h,R)}),sn&&yt(h,A),_}function M(h,m,y,C){if(typeof y=="object"&&y!==null&&y.type===Ht&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ei:n:{for(var _=y.key,v=m;v!==null;){if(v.key===_){if(_=y.type,_===Ht){if(v.tag===7){t(h,v.sibling),m=i(v,y.props.children),m.return=h,h=m;break n}}else if(v.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ge&&Ac(_)===v.type){t(h,v.sibling),m=i(v,y.props),m.ref=Mr(h,v,y),m.return=h,h=m;break n}t(h,v);break}else e(h,v);v=v.sibling}y.type===Ht?(m=_t(y.props.children,h.mode,C,y.key),m.return=h,h=m):(C=ul(y.type,y.key,y.props,null,h.mode,C),C.ref=Mr(h,m,y),C.return=h,h=C)}return o(h);case Bt:n:{for(v=y.key;m!==null;){if(m.key===v)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){t(h,m.sibling),m=i(m,y.children||[]),m.return=h,h=m;break n}else{t(h,m);break}else e(h,m);m=m.sibling}m=Uo(y,h.mode,C),m.return=h,h=m}return o(h);case Ge:return v=y._init,M(h,m,v(y._payload),C)}if(Dr(y))return g(h,m,y,C);if(vr(y))return x(h,m,y,C);Ri(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(t(h,m.sibling),m=i(m,y),m.return=h,h=m):(t(h,m),m=Ho(y,h.mode,C),m.return=h,h=m),o(h)):t(h,m)}return M}var sr=Ep(!0),Mp=Ep(!1),Ml=dt(null),Tl=null,Xt=null,Ya=null;function Ga(){Ya=Xt=Tl=null}function Xa(n){var e=Ml.current;an(Ml),n._currentValue=e}function ju(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function rr(n,e){Tl=n,Ya=Xt=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Vn=!0),n.firstContext=null)}function fe(n){var e=n._currentValue;if(Ya!==n)if(n={context:n,memoizedValue:e,next:null},Xt===null){if(Tl===null)throw Error(P(308));Xt=n,Tl.dependencies={lanes:0,firstContext:n}}else Xt=Xt.next=n;return e}var vt=null;function Ka(n){vt===null?vt=[n]:vt.push(n)}function Tp(n,e,t,r){var i=e.interleaved;return i===null?(t.next=t,Ka(e)):(t.next=i.next,i.next=t),e.interleaved=t,He(n,r)}function He(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Xe=!1;function Za(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pp(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function je(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function lt(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,He(n,t)}return i=r.interleaved,i===null?(e.next=e,Ka(r)):(e.next=i.next,i.next=e),r.interleaved=e,He(n,t)}function el(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Fa(n,t)}}function Ic(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=e:l=l.next=e}else i=l=e;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Pl(n,e,t,r){var i=n.updateQueue;Xe=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,o===null?l=s:o.next=s,o=a;var f=n.alternate;f!==null&&(f=f.updateQueue,u=f.lastBaseUpdate,u!==o&&(u===null?f.firstBaseUpdate=s:u.next=s,f.lastBaseUpdate=a))}if(l!==null){var c=i.baseState;o=0,f=s=a=null,u=l;do{var p=u.lane,d=u.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:d,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});n:{var g=n,x=u;switch(p=e,d=t,x.tag){case 1:if(g=x.payload,typeof g=="function"){c=g.call(d,c,p);break n}c=g;break n;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,p=typeof g=="function"?g.call(d,c,p):g,p==null)break n;c=dn({},c,p);break n;case 2:Xe=!0}}u.callback!==null&&u.lane!==0&&(n.flags|=64,p=i.effects,p===null?i.effects=[u]:p.push(u))}else d={eventTime:d,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},f===null?(s=f=d,a=c):f=f.next=d,o|=p;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(a=c),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else l===null&&(i.shared.lanes=0);At|=o,n.lanes=o,n.memoizedState=c}}function zc(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var xi={},Ie=dt(xi),ci=dt(xi),fi=dt(xi);function St(n){if(n===xi)throw Error(P(174));return n}function Ja(n,e){switch(ln(fi,e),ln(ci,n),ln(Ie,xi),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=wu(e,n)}an(Ie),ln(Ie,e)}function cr(){an(Ie),an(ci),an(fi)}function Ap(n){St(fi.current);var e=St(Ie.current),t=wu(e,n.type);e!==t&&(ln(ci,n),ln(Ie,t))}function ns(n){ci.current===n&&(an(Ie),an(ci))}var cn=dt(0);function Al(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ro=[];function es(){for(var n=0;n<Ro.length;n++)Ro[n]._workInProgressVersionPrimary=null;Ro.length=0}var tl=Ve.ReactCurrentDispatcher,Fo=Ve.ReactCurrentBatchConfig,Pt=0,fn=null,xn=null,_n=null,Il=!1,Vr=!1,di=0,l0=0;function Ln(){throw Error(P(321))}function ts(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ve(n[t],e[t]))return!1;return!0}function rs(n,e,t,r,i,l){if(Pt=l,fn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=n===null||n.memoizedState===null?s0:c0,n=t(r,i),Vr){l=0;do{if(Vr=!1,di=0,25<=l)throw Error(P(301));l+=1,_n=xn=null,e.updateQueue=null,tl.current=f0,n=t(r,i)}while(Vr)}if(tl.current=zl,e=xn!==null&&xn.next!==null,Pt=0,_n=xn=fn=null,Il=!1,e)throw Error(P(300));return n}function is(){var n=di!==0;return di=0,n}function Me(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?fn.memoizedState=_n=n:_n=_n.next=n,_n}function de(){if(xn===null){var n=fn.alternate;n=n!==null?n.memoizedState:null}else n=xn.next;var e=_n===null?fn.memoizedState:_n.next;if(e!==null)_n=e,xn=n;else{if(n===null)throw Error(P(310));xn=n,n={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},_n===null?fn.memoizedState=_n=n:_n=_n.next=n}return _n}function pi(n,e){return typeof e=="function"?e(n):e}function Oo(n){var e=de(),t=e.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=n;var r=xn,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,a=null,s=l;do{var f=s.lane;if((Pt&f)===f)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:n(r,s.action);else{var c={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=c,o=r):a=a.next=c,fn.lanes|=f,At|=f}s=s.next}while(s!==null&&s!==l);a===null?o=r:a.next=u,ve(r,e.memoizedState)||(Vn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,t.lastRenderedState=r}if(n=t.interleaved,n!==null){i=n;do l=i.lane,fn.lanes|=l,At|=l,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function jo(n){var e=de(),t=e.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=n;var r=t.dispatch,i=t.pending,l=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=n(l,o.action),o=o.next;while(o!==i);ve(l,e.memoizedState)||(Vn=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,r]}function Ip(){}function zp(n,e){var t=fn,r=de(),i=e(),l=!ve(r.memoizedState,i);if(l&&(r.memoizedState=i,Vn=!0),r=r.queue,ls(Dp.bind(null,t,r,n),[n]),r.getSnapshot!==e||l||_n!==null&&_n.memoizedState.tag&1){if(t.flags|=2048,hi(9,Np.bind(null,t,r,i,e),void 0,null),Mn===null)throw Error(P(349));Pt&30||Lp(t,e,i)}return i}function Lp(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=fn.updateQueue,e===null?(e={lastEffect:null,stores:null},fn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Np(n,e,t,r){e.value=t,e.getSnapshot=r,bp(e)&&Rp(n)}function Dp(n,e,t){return t(function(){bp(e)&&Rp(n)})}function bp(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ve(n,t)}catch{return!0}}function Rp(n){var e=He(n,1);e!==null&&ke(e,n,1,-1)}function Lc(n){var e=Me();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:n},e.queue=n,n=n.dispatch=a0.bind(null,fn,n),[e.memoizedState,n]}function hi(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=fn.updateQueue,e===null?(e={lastEffect:null,stores:null},fn.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function Fp(){return de().memoizedState}function rl(n,e,t,r){var i=Me();fn.flags|=n,i.memoizedState=hi(1|e,t,void 0,r===void 0?null:r)}function Zl(n,e,t,r){var i=de();r=r===void 0?null:r;var l=void 0;if(xn!==null){var o=xn.memoizedState;if(l=o.destroy,r!==null&&ts(r,o.deps)){i.memoizedState=hi(e,t,l,r);return}}fn.flags|=n,i.memoizedState=hi(1|e,t,l,r)}function Nc(n,e){return rl(8390656,8,n,e)}function ls(n,e){return Zl(2048,8,n,e)}function Op(n,e){return Zl(4,2,n,e)}function jp(n,e){return Zl(4,4,n,e)}function $p(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Bp(n,e,t){return t=t!=null?t.concat([n]):null,Zl(4,4,$p.bind(null,e,n),t)}function os(){}function Hp(n,e){var t=de();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&ts(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function Up(n,e){var t=de();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&ts(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function Vp(n,e,t){return Pt&21?(ve(t,e)||(t=Gd(),fn.lanes|=t,At|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=t)}function o0(n,e){var t=Z;Z=t!==0&&4>t?t:4,n(!0);var r=Fo.transition;Fo.transition={};try{n(!1),e()}finally{Z=t,Fo.transition=r}}function Wp(){return de().memoizedState}function u0(n,e,t){var r=ut(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},qp(n))Qp(e,t);else if(t=Tp(n,e,t,r),t!==null){var i=Fn();ke(t,n,r,i),Yp(t,e,r)}}function a0(n,e,t){var r=ut(n),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(qp(n))Qp(e,i);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var o=e.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,ve(u,o)){var a=e.interleaved;a===null?(i.next=i,Ka(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}t=Tp(n,e,i,r),t!==null&&(i=Fn(),ke(t,n,r,i),Yp(t,e,r))}}function qp(n){var e=n.alternate;return n===fn||e!==null&&e===fn}function Qp(n,e){Vr=Il=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Yp(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Fa(n,t)}}var zl={readContext:fe,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},s0={readContext:fe,useCallback:function(n,e){return Me().memoizedState=[n,e===void 0?null:e],n},useContext:fe,useEffect:Nc,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,rl(4194308,4,$p.bind(null,e,n),t)},useLayoutEffect:function(n,e){return rl(4194308,4,n,e)},useInsertionEffect:function(n,e){return rl(4,2,n,e)},useMemo:function(n,e){var t=Me();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Me();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=u0.bind(null,fn,n),[r.memoizedState,n]},useRef:function(n){var e=Me();return n={current:n},e.memoizedState=n},useState:Lc,useDebugValue:os,useDeferredValue:function(n){return Me().memoizedState=n},useTransition:function(){var n=Lc(!1),e=n[0];return n=o0.bind(null,n[1]),Me().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=fn,i=Me();if(sn){if(t===void 0)throw Error(P(407));t=t()}else{if(t=e(),Mn===null)throw Error(P(349));Pt&30||Lp(r,e,t)}i.memoizedState=t;var l={value:t,getSnapshot:e};return i.queue=l,Nc(Dp.bind(null,r,l,n),[n]),r.flags|=2048,hi(9,Np.bind(null,r,l,t,e),void 0,null),t},useId:function(){var n=Me(),e=Mn.identifierPrefix;if(sn){var t=Oe,r=Fe;t=(r&~(1<<32-ye(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=di++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=l0++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},c0={readContext:fe,useCallback:Hp,useContext:fe,useEffect:ls,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:jp,useMemo:Up,useReducer:Oo,useRef:Fp,useState:function(){return Oo(pi)},useDebugValue:os,useDeferredValue:function(n){var e=de();return Vp(e,xn.memoizedState,n)},useTransition:function(){var n=Oo(pi)[0],e=de().memoizedState;return[n,e]},useMutableSource:Ip,useSyncExternalStore:zp,useId:Wp,unstable_isNewReconciler:!1},f0={readContext:fe,useCallback:Hp,useContext:fe,useEffect:ls,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:jp,useMemo:Up,useReducer:jo,useRef:Fp,useState:function(){return jo(pi)},useDebugValue:os,useDeferredValue:function(n){var e=de();return xn===null?e.memoizedState=n:Vp(e,xn.memoizedState,n)},useTransition:function(){var n=jo(pi)[0],e=de().memoizedState;return[n,e]},useMutableSource:Ip,useSyncExternalStore:zp,useId:Wp,unstable_isNewReconciler:!1};function he(n,e){if(n&&n.defaultProps){e=dn({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function $u(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:dn({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Jl={isMounted:function(n){return(n=n._reactInternals)?Nt(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=Fn(),i=ut(n),l=je(r,i);l.payload=e,t!=null&&(l.callback=t),e=lt(n,l,i),e!==null&&(ke(e,n,i,r),el(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=Fn(),i=ut(n),l=je(r,i);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=lt(n,l,i),e!==null&&(ke(e,n,i,r),el(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Fn(),r=ut(n),i=je(t,r);i.tag=2,e!=null&&(i.callback=e),e=lt(n,i,r),e!==null&&(ke(e,n,r,t),el(e,n,r))}};function Dc(n,e,t,r,i,l,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,l,o):e.prototype&&e.prototype.isPureReactComponent?!oi(t,r)||!oi(i,l):!0}function Gp(n,e,t){var r=!1,i=ct,l=e.contextType;return typeof l=="object"&&l!==null?l=fe(l):(i=qn(e)?Mt:bn.current,r=e.contextTypes,l=(r=r!=null)?ur(n,i):ct),e=new e(t,l),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=l),e}function bc(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&Jl.enqueueReplaceState(e,e.state,null)}function Bu(n,e,t,r){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs={},Za(n);var l=e.contextType;typeof l=="object"&&l!==null?i.context=fe(l):(l=qn(e)?Mt:bn.current,i.context=ur(n,l)),i.state=n.memoizedState,l=e.getDerivedStateFromProps,typeof l=="function"&&($u(n,e,l,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Jl.enqueueReplaceState(i,i.state,null),Pl(n,t,i,r),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function fr(n,e){try{var t="",r=e;do t+=jg(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:n,source:e,stack:i,digest:null}}function $o(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Hu(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var d0=typeof WeakMap=="function"?WeakMap:Map;function Xp(n,e,t){t=je(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Nl||(Nl=!0,Zu=r),Hu(n,e)},t}function Kp(n,e,t){t=je(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;t.payload=function(){return r(i)},t.callback=function(){Hu(n,e)}}var l=n.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Hu(n,e),typeof r!="function"&&(ot===null?ot=new Set([this]):ot.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Rc(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new d0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(t)||(i.add(t),n=M0.bind(null,n,e,t),e.then(n,n))}function Fc(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Oc(n,e,t,r,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=je(-1,1),e.tag=2,lt(t,e,1))),t.lanes|=1),n)}var p0=Ve.ReactCurrentOwner,Vn=!1;function Rn(n,e,t,r){e.child=n===null?Mp(e,null,t,r):sr(e,n.child,t,r)}function jc(n,e,t,r,i){t=t.render;var l=e.ref;return rr(e,i),r=rs(n,e,t,r,l,i),t=is(),n!==null&&!Vn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Ue(n,e,i)):(sn&&t&&Wa(e),e.flags|=1,Rn(n,e,r,i),e.child)}function $c(n,e,t,r,i){if(n===null){var l=t.type;return typeof l=="function"&&!hs(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=l,Zp(n,e,l,r,i)):(n=ul(t.type,null,r,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!(n.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:oi,t(o,r)&&n.ref===e.ref)return Ue(n,e,i)}return e.flags|=1,n=at(l,r),n.ref=e.ref,n.return=e,e.child=n}function Zp(n,e,t,r,i){if(n!==null){var l=n.memoizedProps;if(oi(l,r)&&n.ref===e.ref)if(Vn=!1,e.pendingProps=r=l,(n.lanes&i)!==0)n.flags&131072&&(Vn=!0);else return e.lanes=n.lanes,Ue(n,e,i)}return Uu(n,e,t,r,i)}function Jp(n,e,t){var r=e.pendingProps,i=r.children,l=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ln(Zt,Zn),Zn|=t;else{if(!(t&1073741824))return n=l!==null?l.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ln(Zt,Zn),Zn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,ln(Zt,Zn),Zn|=r}else l!==null?(r=l.baseLanes|t,e.memoizedState=null):r=t,ln(Zt,Zn),Zn|=r;return Rn(n,e,i,t),e.child}function nh(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Uu(n,e,t,r,i){var l=qn(t)?Mt:bn.current;return l=ur(e,l),rr(e,i),t=rs(n,e,t,r,l,i),r=is(),n!==null&&!Vn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Ue(n,e,i)):(sn&&r&&Wa(e),e.flags|=1,Rn(n,e,t,i),e.child)}function Bc(n,e,t,r,i){if(qn(t)){var l=!0;Cl(e)}else l=!1;if(rr(e,i),e.stateNode===null)il(n,e),Gp(e,t,r),Bu(e,t,r,i),r=!0;else if(n===null){var o=e.stateNode,u=e.memoizedProps;o.props=u;var a=o.context,s=t.contextType;typeof s=="object"&&s!==null?s=fe(s):(s=qn(t)?Mt:bn.current,s=ur(e,s));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==s)&&bc(e,o,r,s),Xe=!1;var p=e.memoizedState;o.state=p,Pl(e,r,o,i),a=e.memoizedState,u!==r||p!==a||Wn.current||Xe?(typeof f=="function"&&($u(e,t,f,r),a=e.memoizedState),(u=Xe||Dc(e,t,u,r,p,a,s))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=s,r=u):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Pp(n,e),u=e.memoizedProps,s=e.type===e.elementType?u:he(e.type,u),o.props=s,c=e.pendingProps,p=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=fe(a):(a=qn(t)?Mt:bn.current,a=ur(e,a));var d=t.getDerivedStateFromProps;(f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==c||p!==a)&&bc(e,o,r,a),Xe=!1,p=e.memoizedState,o.state=p,Pl(e,r,o,i);var g=e.memoizedState;u!==c||p!==g||Wn.current||Xe?(typeof d=="function"&&($u(e,t,d,r),g=e.memoizedState),(s=Xe||Dc(e,t,s,r,p,g,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=a,r=s):(typeof o.componentDidUpdate!="function"||u===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),r=!1)}return Vu(n,e,t,r,l,i)}function Vu(n,e,t,r,i,l){nh(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mc(e,t,!1),Ue(n,e,l);r=e.stateNode,p0.current=e;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=sr(e,n.child,null,l),e.child=sr(e,null,u,l)):Rn(n,e,u,l),e.memoizedState=r.state,i&&Mc(e,t,!0),e.child}function eh(n){var e=n.stateNode;e.pendingContext?Ec(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ec(n,e.context,!1),Ja(n,e.containerInfo)}function Hc(n,e,t,r,i){return ar(),Qa(i),e.flags|=256,Rn(n,e,t,r),e.child}var Wu={dehydrated:null,treeContext:null,retryLane:0};function qu(n){return{baseLanes:n,cachePool:null,transitions:null}}function th(n,e,t){var r=e.pendingProps,i=cn.current,l=!1,o=(e.flags&128)!==0,u;if((u=o)||(u=n!==null&&n.memoizedState===null?!1:(i&2)!==0),u?(l=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),ln(cn,i&1),n===null)return Ou(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,l?(r=e.mode,l=e.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=to(o,r,0,null),n=_t(n,r,t,null),l.return=e,n.return=e,l.sibling=n,e.child=l,e.child.memoizedState=qu(t),e.memoizedState=Wu,n):us(e,o));if(i=n.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return h0(n,e,o,r,u,i,t);if(l){l=r.fallback,o=e.mode,i=n.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=at(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=at(u,l):(l=_t(l,o,t,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,r=l,l=e.child,o=n.child.memoizedState,o=o===null?qu(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=n.childLanes&~t,e.memoizedState=Wu,r}return l=n.child,n=l.sibling,r=at(l,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function us(n,e){return e=to({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Fi(n,e,t,r){return r!==null&&Qa(r),sr(e,n.child,null,t),n=us(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function h0(n,e,t,r,i,l,o){if(t)return e.flags&256?(e.flags&=-257,r=$o(Error(P(422))),Fi(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(l=r.fallback,i=e.mode,r=to({mode:"visible",children:r.children},i,0,null),l=_t(l,i,o,null),l.flags|=2,r.return=e,l.return=e,r.sibling=l,e.child=r,e.mode&1&&sr(e,n.child,null,o),e.child.memoizedState=qu(o),e.memoizedState=Wu,l);if(!(e.mode&1))return Fi(n,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(P(419)),r=$o(l,r,void 0),Fi(n,e,o,r)}if(u=(o&n.childLanes)!==0,Vn||u){if(r=Mn,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,He(n,i),ke(r,n,i,-1))}return ps(),r=$o(Error(P(421))),Fi(n,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=T0.bind(null,n),i._reactRetry=e,null):(n=l.treeContext,Jn=it(i.nextSibling),ne=e,sn=!0,ge=null,n!==null&&(ie[le++]=Fe,ie[le++]=Oe,ie[le++]=Tt,Fe=n.id,Oe=n.overflow,Tt=e),e=us(e,r.children),e.flags|=4096,e)}function Uc(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),ju(n.return,e,t)}function Bo(n,e,t,r,i){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function rh(n,e,t){var r=e.pendingProps,i=r.revealOrder,l=r.tail;if(Rn(n,e,r.children,t),r=cn.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Uc(n,t,e);else if(n.tag===19)Uc(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(ln(cn,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&Al(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),Bo(e,!1,i,t,l);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&Al(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}Bo(e,!0,t,null,l);break;case"together":Bo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ue(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),At|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(P(153));if(e.child!==null){for(n=e.child,t=at(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=at(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function m0(n,e,t){switch(e.tag){case 3:eh(e),ar();break;case 5:Ap(e);break;case 1:qn(e.type)&&Cl(e);break;case 4:Ja(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ln(Ml,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ln(cn,cn.current&1),e.flags|=128,null):t&e.child.childLanes?th(n,e,t):(ln(cn,cn.current&1),n=Ue(n,e,t),n!==null?n.sibling:null);ln(cn,cn.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return rh(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ln(cn,cn.current),r)break;return null;case 22:case 23:return e.lanes=0,Jp(n,e,t)}return Ue(n,e,t)}var ih,Qu,lh,oh;ih=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Qu=function(){};lh=function(n,e,t,r){var i=n.memoizedProps;if(i!==r){n=e.stateNode,St(Ie.current);var l=null;switch(t){case"input":i=mu(n,i),r=mu(n,r),l=[];break;case"select":i=dn({},i,{value:void 0}),r=dn({},r,{value:void 0}),l=[];break;case"textarea":i=ku(n,i),r=ku(n,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=vl)}xu(t,r);var o;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jr.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&un("scroll",n),l||u===a||(l=[])):(l=l||[]).push(s,a))}t&&(l=l||[]).push("style",t);var s=l;(e.updateQueue=s)&&(e.flags|=4)}};oh=function(n,e,t,r){t!==r&&(e.flags|=4)};function Tr(n,e){if(!sn)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function Nn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function g0(n,e,t){var r=e.pendingProps;switch(qa(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(e),null;case 1:return qn(e.type)&&Sl(),Nn(e),null;case 3:return r=e.stateNode,cr(),an(Wn),an(bn),es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(bi(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ge!==null&&(ea(ge),ge=null))),Qu(n,e),Nn(e),null;case 5:ns(e);var i=St(fi.current);if(t=e.type,n!==null&&e.stateNode!=null)lh(n,e,t,r,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return Nn(e),null}if(n=St(Ie.current),bi(e)){r=e.stateNode,t=e.type;var l=e.memoizedProps;switch(r[Pe]=e,r[si]=l,n=(e.mode&1)!==0,t){case"dialog":un("cancel",r),un("close",r);break;case"iframe":case"object":case"embed":un("load",r);break;case"video":case"audio":for(i=0;i<Rr.length;i++)un(Rr[i],r);break;case"source":un("error",r);break;case"img":case"image":case"link":un("error",r),un("load",r);break;case"details":un("toggle",r);break;case"input":Zs(r,l),un("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},un("invalid",r);break;case"textarea":nc(r,l),un("invalid",r)}xu(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&Di(r.textContent,u,n),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Di(r.textContent,u,n),i=["children",""+u]):Jr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&un("scroll",r)}switch(t){case"input":Mi(r),Js(r,l,!0);break;case"textarea":Mi(r),ec(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=vl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Dd(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[Pe]=e,n[si]=r,ih(n,e,!1,!1),e.stateNode=n;n:{switch(o=vu(t,r),t){case"dialog":un("cancel",n),un("close",n),i=r;break;case"iframe":case"object":case"embed":un("load",n),i=r;break;case"video":case"audio":for(i=0;i<Rr.length;i++)un(Rr[i],n);i=r;break;case"source":un("error",n),i=r;break;case"img":case"image":case"link":un("error",n),un("load",n),i=r;break;case"details":un("toggle",n),i=r;break;case"input":Zs(n,r),i=mu(n,r),un("invalid",n);break;case"option":i=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},i=dn({},r,{value:void 0}),un("invalid",n);break;case"textarea":nc(n,r),i=ku(n,r),un("invalid",n);break;default:i=r}xu(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?Fd(n,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&bd(n,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&ni(n,a):typeof a=="number"&&ni(n,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Jr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&un("scroll",n):a!=null&&za(n,l,a,o))}switch(t){case"input":Mi(n),Js(n,r,!1);break;case"textarea":Mi(n),ec(n);break;case"option":r.value!=null&&n.setAttribute("value",""+st(r.value));break;case"select":n.multiple=!!r.multiple,l=r.value,l!=null?Jt(n,!!r.multiple,l,!1):r.defaultValue!=null&&Jt(n,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=vl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break n;case"img":r=!0;break n;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nn(e),null;case 6:if(n&&e.stateNode!=null)oh(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(t=St(fi.current),St(Ie.current),bi(e)){if(r=e.stateNode,t=e.memoizedProps,r[Pe]=e,(l=r.nodeValue!==t)&&(n=ne,n!==null))switch(n.tag){case 3:Di(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Di(r.nodeValue,t,(n.mode&1)!==0)}l&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Pe]=e,e.stateNode=r}return Nn(e),null;case 13:if(an(cn),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(sn&&Jn!==null&&e.mode&1&&!(e.flags&128))_p(),ar(),e.flags|=98560,l=!1;else if(l=bi(e),r!==null&&r.dehydrated!==null){if(n===null){if(!l)throw Error(P(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[Pe]=e}else ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nn(e),l=!1}else ge!==null&&(ea(ge),ge=null),l=!0;if(!l)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||cn.current&1?vn===0&&(vn=3):ps())),e.updateQueue!==null&&(e.flags|=4),Nn(e),null);case 4:return cr(),Qu(n,e),n===null&&ui(e.stateNode.containerInfo),Nn(e),null;case 10:return Xa(e.type._context),Nn(e),null;case 17:return qn(e.type)&&Sl(),Nn(e),null;case 19:if(an(cn),l=e.memoizedState,l===null)return Nn(e),null;if(r=(e.flags&128)!==0,o=l.rendering,o===null)if(r)Tr(l,!1);else{if(vn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Al(n),o!==null){for(e.flags|=128,Tr(l,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)l=t,n=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=n,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,n=o.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ln(cn,cn.current&1|2),e.child}n=n.sibling}l.tail!==null&&mn()>dr&&(e.flags|=128,r=!0,Tr(l,!1),e.lanes=4194304)}else{if(!r)if(n=Al(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Tr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!sn)return Nn(e),null}else 2*mn()-l.renderingStartTime>dr&&t!==1073741824&&(e.flags|=128,r=!0,Tr(l,!1),e.lanes=4194304);l.isBackwards?(o.sibling=e.child,e.child=o):(t=l.last,t!==null?t.sibling=o:e.child=o,l.last=o)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=mn(),e.sibling=null,t=cn.current,ln(cn,r?t&1|2:t&1),e):(Nn(e),null);case 22:case 23:return ds(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zn&1073741824&&(Nn(e),e.subtreeFlags&6&&(e.flags|=8192)):Nn(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function y0(n,e){switch(qa(e),e.tag){case 1:return qn(e.type)&&Sl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return cr(),an(Wn),an(bn),es(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return ns(e),null;case 13:if(an(cn),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(P(340));ar()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return an(cn),null;case 4:return cr(),null;case 10:return Xa(e.type._context),null;case 22:case 23:return ds(),null;case 24:return null;default:return null}}var Oi=!1,Dn=!1,k0=typeof WeakSet=="function"?WeakSet:Set,D=null;function Kt(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){pn(n,e,r)}else t.current=null}function Yu(n,e,t){try{t()}catch(r){pn(n,e,r)}}var Vc=!1;function w0(n,e){if(zu=kl,n=fp(),Va(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break n}var o=0,u=-1,a=-1,s=0,f=0,c=n,p=null;e:for(;;){for(var d;c!==t||i!==0&&c.nodeType!==3||(u=o+i),c!==l||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(d=c.firstChild)!==null;)p=c,c=d;for(;;){if(c===n)break e;if(p===t&&++s===i&&(u=o),p===l&&++f===r&&(a=o),(d=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=d}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Lu={focusedElem:n,selectionRange:t},kl=!1,D=e;D!==null;)if(e=D,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,D=n;else for(;D!==null;){e=D;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,M=g.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:he(e.type,x),M);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(C){pn(e,e.return,C)}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}return g=Vc,Vc=!1,g}function Wr(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&n)===n){var l=i.destroy;i.destroy=void 0,l!==void 0&&Yu(e,t,l)}i=i.next}while(i!==r)}}function no(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Gu(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function uh(n){var e=n.alternate;e!==null&&(n.alternate=null,uh(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Pe],delete e[si],delete e[bu],delete e[e0],delete e[t0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ah(n){return n.tag===5||n.tag===3||n.tag===4}function Wc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||ah(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Xu(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=vl));else if(r!==4&&(n=n.child,n!==null))for(Xu(n,e,t),n=n.sibling;n!==null;)Xu(n,e,t),n=n.sibling}function Ku(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(Ku(n,e,t),n=n.sibling;n!==null;)Ku(n,e,t),n=n.sibling}var Tn=null,me=!1;function Qe(n,e,t){for(t=t.child;t!==null;)sh(n,e,t),t=t.sibling}function sh(n,e,t){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(ql,t)}catch{}switch(t.tag){case 5:Dn||Kt(t,e);case 6:var r=Tn,i=me;Tn=null,Qe(n,e,t),Tn=r,me=i,Tn!==null&&(me?(n=Tn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Tn.removeChild(t.stateNode));break;case 18:Tn!==null&&(me?(n=Tn,t=t.stateNode,n.nodeType===8?Do(n.parentNode,t):n.nodeType===1&&Do(n,t),ii(n)):Do(Tn,t.stateNode));break;case 4:r=Tn,i=me,Tn=t.stateNode.containerInfo,me=!0,Qe(n,e,t),Tn=r,me=i;break;case 0:case 11:case 14:case 15:if(!Dn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Yu(t,e,o),i=i.next}while(i!==r)}Qe(n,e,t);break;case 1:if(!Dn&&(Kt(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){pn(t,e,u)}Qe(n,e,t);break;case 21:Qe(n,e,t);break;case 22:t.mode&1?(Dn=(r=Dn)||t.memoizedState!==null,Qe(n,e,t),Dn=r):Qe(n,e,t);break;default:Qe(n,e,t)}}function qc(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new k0),e.forEach(function(r){var i=P0.bind(null,n,r);t.has(r)||(t.add(r),r.then(i,i))})}}function pe(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=n,o=e,u=o;n:for(;u!==null;){switch(u.tag){case 5:Tn=u.stateNode,me=!1;break n;case 3:Tn=u.stateNode.containerInfo,me=!0;break n;case 4:Tn=u.stateNode.containerInfo,me=!0;break n}u=u.return}if(Tn===null)throw Error(P(160));sh(l,o,i),Tn=null,me=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){pn(i,e,s)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ch(e,n),e=e.sibling}function ch(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pe(e,n),Ee(n),r&4){try{Wr(3,n,n.return),no(3,n)}catch(x){pn(n,n.return,x)}try{Wr(5,n,n.return)}catch(x){pn(n,n.return,x)}}break;case 1:pe(e,n),Ee(n),r&512&&t!==null&&Kt(t,t.return);break;case 5:if(pe(e,n),Ee(n),r&512&&t!==null&&Kt(t,t.return),n.flags&32){var i=n.stateNode;try{ni(i,"")}catch(x){pn(n,n.return,x)}}if(r&4&&(i=n.stateNode,i!=null)){var l=n.memoizedProps,o=t!==null?t.memoizedProps:l,u=n.type,a=n.updateQueue;if(n.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Ld(i,l),vu(u,o);var s=vu(u,l);for(o=0;o<a.length;o+=2){var f=a[o],c=a[o+1];f==="style"?Fd(i,c):f==="dangerouslySetInnerHTML"?bd(i,c):f==="children"?ni(i,c):za(i,f,c,s)}switch(u){case"input":gu(i,l);break;case"textarea":Nd(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var d=l.value;d!=null?Jt(i,!!l.multiple,d,!1):p!==!!l.multiple&&(l.defaultValue!=null?Jt(i,!!l.multiple,l.defaultValue,!0):Jt(i,!!l.multiple,l.multiple?[]:"",!1))}i[si]=l}catch(x){pn(n,n.return,x)}}break;case 6:if(pe(e,n),Ee(n),r&4){if(n.stateNode===null)throw Error(P(162));i=n.stateNode,l=n.memoizedProps;try{i.nodeValue=l}catch(x){pn(n,n.return,x)}}break;case 3:if(pe(e,n),Ee(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ii(e.containerInfo)}catch(x){pn(n,n.return,x)}break;case 4:pe(e,n),Ee(n);break;case 13:pe(e,n),Ee(n),i=n.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(cs=mn())),r&4&&qc(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(Dn=(s=Dn)||f,pe(e,n),Dn=s):pe(e,n),Ee(n),r&8192){if(s=n.memoizedState!==null,(n.stateNode.isHidden=s)&&!f&&n.mode&1)for(D=n,f=n.child;f!==null;){for(c=D=f;D!==null;){switch(p=D,d=p.child,p.tag){case 0:case 11:case 14:case 15:Wr(4,p,p.return);break;case 1:Kt(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,t=p.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){pn(r,t,x)}}break;case 5:Kt(p,p.return);break;case 22:if(p.memoizedState!==null){Yc(c);continue}}d!==null?(d.return=p,D=d):Yc(c)}f=f.sibling}n:for(f=null,c=n;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,s?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Rd("display",o))}catch(x){pn(n,n.return,x)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(x){pn(n,n.return,x)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===n)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break n;for(;c.sibling===null;){if(c.return===null||c.return===n)break n;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:pe(e,n),Ee(n),r&4&&qc(n);break;case 21:break;default:pe(e,n),Ee(n)}}function Ee(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(ah(t)){var r=t;break n}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ni(i,""),r.flags&=-33);var l=Wc(n);Ku(n,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Wc(n);Xu(n,u,o);break;default:throw Error(P(161))}}catch(a){pn(n,n.return,a)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function x0(n,e,t){D=n,fh(n)}function fh(n,e,t){for(var r=(n.mode&1)!==0;D!==null;){var i=D,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oi;if(!o){var u=i.alternate,a=u!==null&&u.memoizedState!==null||Dn;u=Oi;var s=Dn;if(Oi=o,(Dn=a)&&!s)for(D=i;D!==null;)o=D,a=o.child,o.tag===22&&o.memoizedState!==null?Gc(i):a!==null?(a.return=o,D=a):Gc(i);for(;l!==null;)D=l,fh(l),l=l.sibling;D=i,Oi=u,Dn=s}Qc(n)}else i.subtreeFlags&8772&&l!==null?(l.return=i,D=l):Qc(n)}}function Qc(n){for(;D!==null;){var e=D;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Dn||no(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Dn)if(t===null)r.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:he(e.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=e.updateQueue;l!==null&&zc(e,l,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}zc(e,o,t)}break;case 5:var u=e.stateNode;if(t===null&&e.flags&4){t=u;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var s=e.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&ii(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Dn||e.flags&512&&Gu(e)}catch(p){pn(e,e.return,p)}}if(e===n){D=null;break}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}}function Yc(n){for(;D!==null;){var e=D;if(e===n){D=null;break}var t=e.sibling;if(t!==null){t.return=e.return,D=t;break}D=e.return}}function Gc(n){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{no(4,e)}catch(a){pn(e,t,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){pn(e,i,a)}}var l=e.return;try{Gu(e)}catch(a){pn(e,l,a)}break;case 5:var o=e.return;try{Gu(e)}catch(a){pn(e,o,a)}}}catch(a){pn(e,e.return,a)}if(e===n){D=null;break}var u=e.sibling;if(u!==null){u.return=e.return,D=u;break}D=e.return}}var v0=Math.ceil,Ll=Ve.ReactCurrentDispatcher,as=Ve.ReactCurrentOwner,se=Ve.ReactCurrentBatchConfig,X=0,Mn=null,kn=null,In=0,Zn=0,Zt=dt(0),vn=0,mi=null,At=0,eo=0,ss=0,qr=null,Un=null,cs=0,dr=1/0,be=null,Nl=!1,Zu=null,ot=null,ji=!1,nt=null,Dl=0,Qr=0,Ju=null,ll=-1,ol=0;function Fn(){return X&6?mn():ll!==-1?ll:ll=mn()}function ut(n){return n.mode&1?X&2&&In!==0?In&-In:i0.transition!==null?(ol===0&&(ol=Gd()),ol):(n=Z,n!==0||(n=window.event,n=n===void 0?16:tp(n.type)),n):1}function ke(n,e,t,r){if(50<Qr)throw Qr=0,Ju=null,Error(P(185));yi(n,t,r),(!(X&2)||n!==Mn)&&(n===Mn&&(!(X&2)&&(eo|=t),vn===4&&Ze(n,In)),Qn(n,r),t===1&&X===0&&!(e.mode&1)&&(dr=mn()+500,Kl&&pt()))}function Qn(n,e){var t=n.callbackNode;i1(n,e);var r=yl(n,n===Mn?In:0);if(r===0)t!==null&&ic(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&ic(t),e===1)n.tag===0?r0(Xc.bind(null,n)):vp(Xc.bind(null,n)),J1(function(){!(X&6)&&pt()}),t=null;else{switch(Xd(r)){case 1:t=Ra;break;case 4:t=Qd;break;case 16:t=gl;break;case 536870912:t=Yd;break;default:t=gl}t=wh(t,dh.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function dh(n,e){if(ll=-1,ol=0,X&6)throw Error(P(327));var t=n.callbackNode;if(ir()&&n.callbackNode!==t)return null;var r=yl(n,n===Mn?In:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=bl(n,r);else{e=r;var i=X;X|=2;var l=hh();(Mn!==n||In!==e)&&(be=null,dr=mn()+500,Ct(n,e));do try{_0();break}catch(u){ph(n,u)}while(!0);Ga(),Ll.current=l,X=i,kn!==null?e=0:(Mn=null,In=0,e=vn)}if(e!==0){if(e===2&&(i=Mu(n),i!==0&&(r=i,e=na(n,i))),e===1)throw t=mi,Ct(n,0),Ze(n,r),Qn(n,mn()),t;if(e===6)Ze(n,r);else{if(i=n.current.alternate,!(r&30)&&!S0(i)&&(e=bl(n,r),e===2&&(l=Mu(n),l!==0&&(r=l,e=na(n,l))),e===1))throw t=mi,Ct(n,0),Ze(n,r),Qn(n,mn()),t;switch(n.finishedWork=i,n.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:kt(n,Un,be);break;case 3:if(Ze(n,r),(r&130023424)===r&&(e=cs+500-mn(),10<e)){if(yl(n,0)!==0)break;if(i=n.suspendedLanes,(i&r)!==r){Fn(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=Du(kt.bind(null,n,Un,be),e);break}kt(n,Un,be);break;case 4:if(Ze(n,r),(r&4194240)===r)break;for(e=n.eventTimes,i=-1;0<r;){var o=31-ye(r);l=1<<o,o=e[o],o>i&&(i=o),r&=~l}if(r=i,r=mn()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*v0(r/1960))-r,10<r){n.timeoutHandle=Du(kt.bind(null,n,Un,be),r);break}kt(n,Un,be);break;case 5:kt(n,Un,be);break;default:throw Error(P(329))}}}return Qn(n,mn()),n.callbackNode===t?dh.bind(null,n):null}function na(n,e){var t=qr;return n.current.memoizedState.isDehydrated&&(Ct(n,e).flags|=256),n=bl(n,e),n!==2&&(e=Un,Un=t,e!==null&&ea(e)),n}function ea(n){Un===null?Un=n:Un.push.apply(Un,n)}function S0(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!ve(l(),i))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ze(n,e){for(e&=~ss,e&=~eo,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ye(e),r=1<<t;n[t]=-1,e&=~r}}function Xc(n){if(X&6)throw Error(P(327));ir();var e=yl(n,0);if(!(e&1))return Qn(n,mn()),null;var t=bl(n,e);if(n.tag!==0&&t===2){var r=Mu(n);r!==0&&(e=r,t=na(n,r))}if(t===1)throw t=mi,Ct(n,0),Ze(n,e),Qn(n,mn()),t;if(t===6)throw Error(P(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,kt(n,Un,be),Qn(n,mn()),null}function fs(n,e){var t=X;X|=1;try{return n(e)}finally{X=t,X===0&&(dr=mn()+500,Kl&&pt())}}function It(n){nt!==null&&nt.tag===0&&!(X&6)&&ir();var e=X;X|=1;var t=se.transition,r=Z;try{if(se.transition=null,Z=1,n)return n()}finally{Z=r,se.transition=t,X=e,!(X&6)&&pt()}}function ds(){Zn=Zt.current,an(Zt)}function Ct(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Z1(t)),kn!==null)for(t=kn.return;t!==null;){var r=t;switch(qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:cr(),an(Wn),an(bn),es();break;case 5:ns(r);break;case 4:cr();break;case 13:an(cn);break;case 19:an(cn);break;case 10:Xa(r.type._context);break;case 22:case 23:ds()}t=t.return}if(Mn=n,kn=n=at(n.current,null),In=Zn=e,vn=0,mi=null,ss=eo=At=0,Un=qr=null,vt!==null){for(e=0;e<vt.length;e++)if(t=vt[e],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}vt=null}return n}function ph(n,e){do{var t=kn;try{if(Ga(),tl.current=zl,Il){for(var r=fn.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Il=!1}if(Pt=0,_n=xn=fn=null,Vr=!1,di=0,as.current=null,t===null||t.return===null){vn=1,mi=e,kn=null;break}n:{var l=n,o=t.return,u=t,a=e;if(e=In,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,f=u,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var d=Fc(o);if(d!==null){d.flags&=-257,Oc(d,o,u,l,e),d.mode&1&&Rc(l,s,e),e=d,a=s;var g=e.updateQueue;if(g===null){var x=new Set;x.add(a),e.updateQueue=x}else g.add(a);break n}else{if(!(e&1)){Rc(l,s,e),ps();break n}a=Error(P(426))}}else if(sn&&u.mode&1){var M=Fc(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Oc(M,o,u,l,e),Qa(fr(a,u));break n}}l=a=fr(a,u),vn!==4&&(vn=2),qr===null?qr=[l]:qr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,e&=-e,l.lanes|=e;var h=Xp(l,a,e);Ic(l,h);break n;case 1:u=a;var m=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ot===null||!ot.has(y)))){l.flags|=65536,e&=-e,l.lanes|=e;var C=Kp(l,u,e);Ic(l,C);break n}}l=l.return}while(l!==null)}gh(t)}catch(_){e=_,kn===t&&t!==null&&(kn=t=t.return);continue}break}while(!0)}function hh(){var n=Ll.current;return Ll.current=zl,n===null?zl:n}function ps(){(vn===0||vn===3||vn===2)&&(vn=4),Mn===null||!(At&268435455)&&!(eo&268435455)||Ze(Mn,In)}function bl(n,e){var t=X;X|=2;var r=hh();(Mn!==n||In!==e)&&(be=null,Ct(n,e));do try{C0();break}catch(i){ph(n,i)}while(!0);if(Ga(),X=t,Ll.current=r,kn!==null)throw Error(P(261));return Mn=null,In=0,vn}function C0(){for(;kn!==null;)mh(kn)}function _0(){for(;kn!==null&&!Gg();)mh(kn)}function mh(n){var e=kh(n.alternate,n,Zn);n.memoizedProps=n.pendingProps,e===null?gh(n):kn=e,as.current=null}function gh(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=y0(t,e),t!==null){t.flags&=32767,kn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vn=6,kn=null;return}}else if(t=g0(t,e,Zn),t!==null){kn=t;return}if(e=e.sibling,e!==null){kn=e;return}kn=e=n}while(e!==null);vn===0&&(vn=5)}function kt(n,e,t){var r=Z,i=se.transition;try{se.transition=null,Z=1,E0(n,e,t,r)}finally{se.transition=i,Z=r}return null}function E0(n,e,t,r){do ir();while(nt!==null);if(X&6)throw Error(P(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(P(177));n.callbackNode=null,n.callbackPriority=0;var l=t.lanes|t.childLanes;if(l1(n,l),n===Mn&&(kn=Mn=null,In=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ji||(ji=!0,wh(gl,function(){return ir(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=se.transition,se.transition=null;var o=Z;Z=1;var u=X;X|=4,as.current=null,w0(n,t),ch(t,n),W1(Lu),kl=!!zu,Lu=zu=null,n.current=t,x0(t),Xg(),X=u,Z=o,se.transition=l}else n.current=t;if(ji&&(ji=!1,nt=n,Dl=i),l=n.pendingLanes,l===0&&(ot=null),Jg(t.stateNode),Qn(n,mn()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nl)throw Nl=!1,n=Zu,Zu=null,n;return Dl&1&&n.tag!==0&&ir(),l=n.pendingLanes,l&1?n===Ju?Qr++:(Qr=0,Ju=n):Qr=0,pt(),null}function ir(){if(nt!==null){var n=Xd(Dl),e=se.transition,t=Z;try{if(se.transition=null,Z=16>n?16:n,nt===null)var r=!1;else{if(n=nt,nt=null,Dl=0,X&6)throw Error(P(331));var i=X;for(X|=4,D=n.current;D!==null;){var l=D,o=l.child;if(D.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(D=s;D!==null;){var f=D;switch(f.tag){case 0:case 11:case 15:Wr(8,f,l)}var c=f.child;if(c!==null)c.return=f,D=c;else for(;D!==null;){f=D;var p=f.sibling,d=f.return;if(uh(f),f===s){D=null;break}if(p!==null){p.return=d,D=p;break}D=d}}}var g=l.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var M=x.sibling;x.sibling=null,x=M}while(x!==null)}}D=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,D=o;else n:for(;D!==null;){if(l=D,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Wr(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,D=h;break n}D=l.return}}var m=n.current;for(D=m;D!==null;){o=D;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,D=y;else n:for(o=m;D!==null;){if(u=D,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:no(9,u)}}catch(_){pn(u,u.return,_)}if(u===o){D=null;break n}var C=u.sibling;if(C!==null){C.return=u.return,D=C;break n}D=u.return}}if(X=i,pt(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(ql,n)}catch{}r=!0}return r}finally{Z=t,se.transition=e}}return!1}function Kc(n,e,t){e=fr(t,e),e=Xp(n,e,1),n=lt(n,e,1),e=Fn(),n!==null&&(yi(n,1,e),Qn(n,e))}function pn(n,e,t){if(n.tag===3)Kc(n,n,t);else for(;e!==null;){if(e.tag===3){Kc(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ot===null||!ot.has(r))){n=fr(t,n),n=Kp(e,n,1),e=lt(e,n,1),n=Fn(),e!==null&&(yi(e,1,n),Qn(e,n));break}}e=e.return}}function M0(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=Fn(),n.pingedLanes|=n.suspendedLanes&t,Mn===n&&(In&t)===t&&(vn===4||vn===3&&(In&130023424)===In&&500>mn()-cs?Ct(n,0):ss|=t),Qn(n,e)}function yh(n,e){e===0&&(n.mode&1?(e=Ai,Ai<<=1,!(Ai&130023424)&&(Ai=4194304)):e=1);var t=Fn();n=He(n,e),n!==null&&(yi(n,e,t),Qn(n,t))}function T0(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),yh(n,t)}function P0(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),yh(n,t)}var kh;kh=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Wn.current)Vn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Vn=!1,m0(n,e,t);Vn=!!(n.flags&131072)}else Vn=!1,sn&&e.flags&1048576&&Sp(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;il(n,e),n=e.pendingProps;var i=ur(e,bn.current);rr(e,t),i=rs(null,e,r,n,i,t);var l=is();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qn(r)?(l=!0,Cl(e)):l=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Za(e),i.updater=Jl,e.stateNode=i,i._reactInternals=e,Bu(e,r,n,t),e=Vu(null,e,r,!0,l,t)):(e.tag=0,sn&&l&&Wa(e),Rn(null,e,i,t),e=e.child),e;case 16:r=e.elementType;n:{switch(il(n,e),n=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=I0(r),n=he(r,n),i){case 0:e=Uu(null,e,r,n,t);break n;case 1:e=Bc(null,e,r,n,t);break n;case 11:e=jc(null,e,r,n,t);break n;case 14:e=$c(null,e,r,he(r.type,n),t);break n}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:he(r,i),Uu(n,e,r,i,t);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:he(r,i),Bc(n,e,r,i,t);case 3:n:{if(eh(e),n===null)throw Error(P(387));r=e.pendingProps,l=e.memoizedState,i=l.element,Pp(n,e),Pl(e,r,null,t);var o=e.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){i=fr(Error(P(423)),e),e=Hc(n,e,r,t,i);break n}else if(r!==i){i=fr(Error(P(424)),e),e=Hc(n,e,r,t,i);break n}else for(Jn=it(e.stateNode.containerInfo.firstChild),ne=e,sn=!0,ge=null,t=Mp(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ar(),r===i){e=Ue(n,e,t);break n}Rn(n,e,r,t)}e=e.child}return e;case 5:return Ap(e),n===null&&Ou(e),r=e.type,i=e.pendingProps,l=n!==null?n.memoizedProps:null,o=i.children,Nu(r,i)?o=null:l!==null&&Nu(r,l)&&(e.flags|=32),nh(n,e),Rn(n,e,o,t),e.child;case 6:return n===null&&Ou(e),null;case 13:return th(n,e,t);case 4:return Ja(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=sr(e,null,r,t):Rn(n,e,r,t),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:he(r,i),jc(n,e,r,i,t);case 7:return Rn(n,e,e.pendingProps,t),e.child;case 8:return Rn(n,e,e.pendingProps.children,t),e.child;case 12:return Rn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(r=e.type._context,i=e.pendingProps,l=e.memoizedProps,o=i.value,ln(Ml,r._currentValue),r._currentValue=o,l!==null)if(ve(l.value,o)){if(l.children===i.children&&!Wn.current){e=Ue(n,e,t);break n}}else for(l=e.child,l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=je(-1,t&-t),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?a.next=a:(a.next=f.next,f.next=a),s.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),ju(l.return,t,e),u.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===e.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(P(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),ju(o,t,e),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Rn(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rr(e,t),i=fe(i),r=r(i),e.flags|=1,Rn(n,e,r,t),e.child;case 14:return r=e.type,i=he(r,e.pendingProps),i=he(r.type,i),$c(n,e,r,i,t);case 15:return Zp(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:he(r,i),il(n,e),e.tag=1,qn(r)?(n=!0,Cl(e)):n=!1,rr(e,t),Gp(e,r,i),Bu(e,r,i,t),Vu(null,e,r,!0,n,t);case 19:return rh(n,e,t);case 22:return Jp(n,e,t)}throw Error(P(156,e.tag))};function wh(n,e){return qd(n,e)}function A0(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ue(n,e,t,r){return new A0(n,e,t,r)}function hs(n){return n=n.prototype,!(!n||!n.isReactComponent)}function I0(n){if(typeof n=="function")return hs(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Na)return 11;if(n===Da)return 14}return 2}function at(n,e){var t=n.alternate;return t===null?(t=ue(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ul(n,e,t,r,i,l){var o=2;if(r=n,typeof n=="function")hs(n)&&(o=1);else if(typeof n=="string")o=5;else n:switch(n){case Ht:return _t(t.children,i,l,e);case La:o=8,i|=8;break;case fu:return n=ue(12,t,e,i|2),n.elementType=fu,n.lanes=l,n;case du:return n=ue(13,t,e,i),n.elementType=du,n.lanes=l,n;case pu:return n=ue(19,t,e,i),n.elementType=pu,n.lanes=l,n;case Ad:return to(t,i,l,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Td:o=10;break n;case Pd:o=9;break n;case Na:o=11;break n;case Da:o=14;break n;case Ge:o=16,r=null;break n}throw Error(P(130,n==null?n:typeof n,""))}return e=ue(o,t,e,i),e.elementType=n,e.type=r,e.lanes=l,e}function _t(n,e,t,r){return n=ue(7,n,r,e),n.lanes=t,n}function to(n,e,t,r){return n=ue(22,n,r,e),n.elementType=Ad,n.lanes=t,n.stateNode={isHidden:!1},n}function Ho(n,e,t){return n=ue(6,n,null,e),n.lanes=t,n}function Uo(n,e,t){return e=ue(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function z0(n,e,t,r,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Co(0),this.expirationTimes=Co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ms(n,e,t,r,i,l,o,u,a){return n=new z0(n,e,t,u,a),e===1?(e=1,l===!0&&(e|=8)):e=0,l=ue(3,null,null,e),n.current=l,l.stateNode=n,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Za(l),n}function L0(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function xh(n){if(!n)return ct;n=n._reactInternals;n:{if(Nt(n)!==n||n.tag!==1)throw Error(P(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(P(171))}if(n.tag===1){var t=n.type;if(qn(t))return xp(n,t,e)}return e}function vh(n,e,t,r,i,l,o,u,a){return n=ms(t,r,!0,n,i,l,o,u,a),n.context=xh(null),t=n.current,r=Fn(),i=ut(t),l=je(r,i),l.callback=e??null,lt(t,l,i),n.current.lanes=i,yi(n,i,r),Qn(n,r),n}function ro(n,e,t,r){var i=e.current,l=Fn(),o=ut(i);return t=xh(t),e.context===null?e.context=t:e.pendingContext=t,e=je(l,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=lt(i,e,o),n!==null&&(ke(n,i,o,l),el(n,i,o)),o}function Rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Zc(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function gs(n,e){Zc(n,e),(n=n.alternate)&&Zc(n,e)}function N0(){return null}var Sh=typeof reportError=="function"?reportError:function(n){console.error(n)};function ys(n){this._internalRoot=n}io.prototype.render=ys.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(P(409));ro(n,e,null,null)};io.prototype.unmount=ys.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;It(function(){ro(null,n,null,null)}),e[Be]=null}};function io(n){this._internalRoot=n}io.prototype.unstable_scheduleHydration=function(n){if(n){var e=Jd();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ke.length&&e!==0&&e<Ke[t].priority;t++);Ke.splice(t,0,n),t===0&&ep(n)}};function ks(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function lo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jc(){}function D0(n,e,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var s=Rl(o);l.call(s)}}var o=vh(e,r,n,0,null,!1,!1,"",Jc);return n._reactRootContainer=o,n[Be]=o.current,ui(n.nodeType===8?n.parentNode:n),It(),o}for(;i=n.lastChild;)n.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=Rl(a);u.call(s)}}var a=ms(n,0,!1,null,null,!1,!1,"",Jc);return n._reactRootContainer=a,n[Be]=a.current,ui(n.nodeType===8?n.parentNode:n),It(function(){ro(e,a,t,r)}),a}function oo(n,e,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var a=Rl(o);u.call(a)}}ro(e,o,n,i)}else o=D0(t,e,n,i,r);return Rl(o)}Kd=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=br(e.pendingLanes);t!==0&&(Fa(e,t|1),Qn(e,mn()),!(X&6)&&(dr=mn()+500,pt()))}break;case 13:It(function(){var r=He(n,1);if(r!==null){var i=Fn();ke(r,n,1,i)}}),gs(n,1)}};Oa=function(n){if(n.tag===13){var e=He(n,134217728);if(e!==null){var t=Fn();ke(e,n,134217728,t)}gs(n,134217728)}};Zd=function(n){if(n.tag===13){var e=ut(n),t=He(n,e);if(t!==null){var r=Fn();ke(t,n,e,r)}gs(n,e)}};Jd=function(){return Z};np=function(n,e){var t=Z;try{return Z=n,e()}finally{Z=t}};Cu=function(n,e,t){switch(e){case"input":if(gu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var i=Xl(r);if(!i)throw Error(P(90));zd(r),gu(r,i)}}}break;case"textarea":Nd(n,t);break;case"select":e=t.value,e!=null&&Jt(n,!!t.multiple,e,!1)}};$d=fs;Bd=It;var b0={usingClientEntryPoint:!1,Events:[wi,qt,Xl,Od,jd,fs]},Pr={findFiberByHostInstance:xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R0={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vd(n),n===null?null:n.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||N0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{ql=$i.inject(R0),Ae=$i}catch{}}te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0;te.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ks(e))throw Error(P(200));return L0(n,e,null,t)};te.createRoot=function(n,e){if(!ks(n))throw Error(P(299));var t=!1,r="",i=Sh;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ms(n,1,!1,null,null,t,!1,r,i),n[Be]=e.current,ui(n.nodeType===8?n.parentNode:n),new ys(e)};te.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(P(188)):(n=Object.keys(n).join(","),Error(P(268,n)));return n=Vd(e),n=n===null?null:n.stateNode,n};te.flushSync=function(n){return It(n)};te.hydrate=function(n,e,t){if(!lo(e))throw Error(P(200));return oo(null,n,e,!0,t)};te.hydrateRoot=function(n,e,t){if(!ks(n))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Sh;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=vh(e,null,n,1,t??null,i,!1,l,o),n[Be]=e.current,ui(n),r)for(n=0;n<r.length;n++)t=r[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new io(e)};te.render=function(n,e,t){if(!lo(e))throw Error(P(200));return oo(null,n,e,!1,t)};te.unmountComponentAtNode=function(n){if(!lo(n))throw Error(P(40));return n._reactRootContainer?(It(function(){oo(null,null,n,!1,function(){n._reactRootContainer=null,n[Be]=null})}),!0):!1};te.unstable_batchedUpdates=fs;te.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!lo(t))throw Error(P(200));if(n==null||n._reactInternals===void 0)throw Error(P(38));return oo(n,e,t,!1,r)};te.version="18.3.1-next-f1338f8080-20240426";function Ch(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ch)}catch(n){console.error(n)}}Ch(),Cd.exports=te;var F0=Cd.exports,nf=F0;su.createRoot=nf.createRoot,su.hydrateRoot=nf.hydrateRoot;const O0=`# 标题

这是第一版内容。

- 列表项1
- 列表项2

\`\`\`ts
const a = 1;
\`\`\`

$$a=1$$`,j0=`# 标题

这是第二版内容，增加了内容。

- 列表项1
- 列表项3

\`\`\`js
const a = 2;
\`\`\``,$0=`# 一级标题

## 二级标题

### 三级标题

#### 四级标题

这是一些普通文本内容。

##### 五级标题

###### 六级标题`,B0=`# 修改后的一级标题

## 二级标题已更新

### 三级标题

这是一些普通文本内容，增加了一些新内容。

#### 新增的四级标题

##### 五级标题

###### 六级标题已修改`,H0=`# 列表示例

## 无序列表

- 项目 1
- 项目 2
- 项目 3
  - 子项目 3.1
  - 子项目 3.2
- 项目 4

## 有序列表

1. 第一步
2. 第二步
3. 第三步
   1. 子步骤 3.1
   2. 子步骤 3.2
4. 第四步

## 任务列表

- [ ] 待办任务 1
- [x] 已完成任务 2
- [ ] 待办任务 3`,U0=`# 列表示例（更新版）

## 无序列表

- 项目 1
- 新增项目
- 项目 3
  - 子项目 3.1
  - 新增子项目
  - 子项目 3.2
- 项目 5

## 有序列表

1. 第一步（已修改）
2. 第二步
3. 新增步骤
4. 第三步
   1. 子步骤 3.1
   2. 子步骤 3.2
   3. 新增子步骤
5. 第四步

## 任务列表

- [x] 待办任务 1（已完成）
- [x] 已完成任务 2
- [ ] 新增待办任务
- [ ] 待办任务 3`,V0=`# 代码示例

## JavaScript 代码

\`\`\`javascript
function calculateSum(a, b) {
  return a + b;
}

const result = calculateSum(5, 3);
console.log("结果是:", result);
\`\`\`

## Python 代码

\`\`\`python
def calculate_sum(a, b):
    return a + b

result = calculate_sum(5, 3)
print("结果是:", result)
\`\`\`

## HTML 代码

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>示例页面</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>这是一个段落。</p>
</body>
</html>
\`\`\``,W0=`# 代码示例（更新版）

## JavaScript 代码

\`\`\`javascript
function calculateSum(a, b) {
  // 添加参数验证
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('参数必须是数字');
  }
  return a + b;
}

const result = calculateSum(10, 5);
console.log("计算结果:", result);
\`\`\`

## Python 代码

\`\`\`python
def calculate_sum(a, b):
    # 添加参数验证
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise TypeError("参数必须是数字")
    return a + b

result = calculate_sum(10, 5)
print(f"计算结果: {result}")
\`\`\`

## HTML 代码

\`\`\`html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>更新后的示例页面</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Hello World</h1>
    </header>
    <main>
        <p>这是一个更新后的段落。</p>
        <button>点击我</button>
    </main>
    <footer>
        <p>© 2023 示例公司</p>
    </footer>
</body>
</html>
\`\`\``,q0=`# 表格示例

## 简单表格

| 姓名 | 年龄 | 职业 |
| ---- | ---- | ---- |
| 张三 | 25 | 工程师 |
| 李四 | 30 | 设计师 |
| 王五 | 28 | 产品经理 |

## 对齐方式

| 左对齐 | 居中 | 右对齐 |
| :---- | :----: | ----: |
| 内容1 | 内容2 | 内容3 |
| 长文本内容 | 长文本内容 | 长文本内容 |

## 复杂表格

| 项目 | Q1 | Q2 | Q3 | Q4 | 总计 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| 收入 | 10,000 | 12,000 | 15,000 | 18,000 | 55,000 |
| 支出 | 8,000 | 9,000 | 10,000 | 12,000 | 39,000 |
| 利润 | 2,000 | 3,000 | 5,000 | 6,000 | 16,000 |`,Q0=`# 表格示例（更新版）

## 简单表格

| 姓名 | 年龄 | 职业 | 部门 |
| ---- | ---- | ---- | ---- |
| 张三 | 26 | 高级工程师 | 研发部 |
| 李四 | 30 | 设计师 | 设计部 |
| 赵六 | 32 | 产品总监 | 产品部 |
| 王五 | 28 | 产品经理 | 产品部 |

## 对齐方式

| 左对齐 | 居中 | 右对齐 |
| :---- | :----: | ----: |
| 新内容1 | 新内容2 | 新内容3 |
| 长文本内容已修改 | 长文本内容已修改 | 长文本内容已修改 |
| 新增行 | 新增行 | 新增行 |

## 复杂表格

| 项目 | Q1 | Q2 | Q3 | Q4 | 总计 | 同比增长 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 收入 | 12,000 | 15,000 | 18,000 | 22,000 | 67,000 | 21.8% |
| 支出 | 9,000 | 10,000 | 12,000 | 14,000 | 45,000 | 15.4% |
| 利润 | 3,000 | 5,000 | 6,000 | 8,000 | 22,000 | 37.5% |
| 税费 | 600 | 1,000 | 1,200 | 1,600 | 4,400 | - |`,Y0=`# 链接和图片示例

## 链接

这是一个[内联链接](https://example.com)。

这是一个[带标题的链接](https://example.com "示例网站")。

这是一个[参考链接][1]。

[1]: https://example.com/reference "参考链接"

## 图片

![示例图片](https://example.com/image.jpg)

![带标题的图片](https://example.com/image.jpg "示例图片标题")

![参考图片][image1]

[image1]: https://example.com/reference-image.jpg "参考图片标题"

## 链接列表

- [GitHub](https://github.com)
- [Google](https://google.com)
- [百度](https://baidu.com)

## 图文混排

[![带链接的图片](https://example.com/linked-image.jpg)](https://example.com)

这段文字包含一个[链接](https://example.com)和一个![内联图片](https://example.com/inline-image.jpg)。`,G0=`# 链接和图片示例（更新版）

## 链接

这是一个[更新的内联链接](https://example.org)。

这是一个[带标题的链接](https://example.com "更新后的示例网站")。

这是一个[参考链接][1]和一个[新增的参考链接][2]。

[1]: https://example.org/reference "更新的参考链接"
[2]: https://example.com/new-reference "新增的参考链接"

## 图片

![更新的示例图片](https://example.org/updated-image.jpg)

![带标题的图片](https://example.com/image.jpg "更新后的示例图片标题")

![参考图片][image1]

![新增的参考图片][image2]

[image1]: https://example.org/reference-image.jpg "更新的参考图片标题"
[image2]: https://example.com/new-reference-image.jpg "新增的参考图片标题"

## 链接列表

- [GitHub](https://github.com)
- [Microsoft](https://microsoft.com)
- [Google](https://google.com)
- [百度](https://baidu.com)
- [新增链接](https://example.com/new)

## 图文混排

[![更新的带链接的图片](https://example.org/linked-image.jpg)](https://example.org)

这段更新后的文字包含一个[更新的链接](https://example.org)和一个![更新的内联图片](https://example.org/inline-image.jpg)。

新增的段落，包含一个[新链接](https://example.com/new)。`,X0=`# 文本格式化示例

## 基本格式

11

22

这是**粗体**文本。

### 123

这是*斜体*文本。

这是***粗斜体***文本。

这是~~删除线~~文本。

这是\`行内代码\`。

## 引用

> 这是一级引用
>
> > 这是嵌套引用
> >
> > > 这是三级引用

## 水平线

---

## 脚注

这里有一个脚注[^1]。

[^1]: 这是脚注内容。

## 特殊字符

这里展示一些特殊字符：\\*\\*非粗体\\*\\*，\\\`非代码\\\`。

## 混合格式

这段文字**包含*混合的*格式**，还有~~一些~~\`代码\`。`,K0=`# 文本格式化示例（更新版）

## 基本格式

这是**粗体**文本和**新增的粗体**文本。

这是*斜体*文本和*新增的斜体*文本。

这是***更新的粗斜体***文本。

这是~~删除线~~文本和~~新增的删除线~~文本。

这是\`更新的行内代码\`。

## 引用

> 这是更新后的一级引用
>
> > 这是嵌套引用
> >
> > > 这是更新后的三级引用
> > >
> > > > 这是新增的四级引用

## 水平线

---

***

## 脚注

这里有一个脚注[^1]和一个新增的脚注[^2]。

[^1]: 这是更新后的脚注内容。
[^2]: 这是新增的脚注内容。

## 特殊字符

这里展示一些更新后的特殊字符：\\*\\*非粗体\\*\\*，\\\`非代码\\\`，\\[非链接\\]。

## 混合格式

这段更新后的文字**包含*混合的*格式**，还有~~一些~~\`代码\`和**新增的*混合*格式**。

## 新增的高亮

这里有一些==高亮文本==。`,Z0=`# 复杂 Markdown 文档示例

## 1. 文档概述

这是一个包含多种 Markdown 元素的复杂文档示例，用于测试差异比较功能。

## 2. 文本格式

这段文字包含**粗体**、*斜体*和***粗斜体***格式，还有\`行内代码\`和~~删除线~~文本。

## 3. 列表

### 3.1 无序列表

- 主要功能
  - 子功能 1
  - 子功能 2
- 次要功能
  - 子功能 A
  - 子功能 B

### 3.2 有序列表

1. 第一步
   1. 子步骤 1
   2. 子步骤 2
2. 第二步
3. 第三步

### 3.3 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [ ] 待办事项

## 4. 代码块

\`\`\`javascript
function example() {
  const message = 'Hello, World!';
  console.log(message);
  return {
    status: 'success',
    data: message
  };
}

example();
\`\`\`

## 5. 表格

| 功能 | 状态 | 优先级 |
| ---- | ---- | ---- |
| 功能 A | 已完成 | 高 |
| 功能 B | 进行中 | 中 |
| 功能 C | 计划中 | 低 |

## 6. 引用

> 这是一段引用文本
> 
> > 这是嵌套引用

## 7. 链接和图片

### 7.1 链接

[示例链接](https://example.com)

### 7.2 图片

![示例图片](https://example.com/image.jpg)

## 8. 水平线

---

## 9. 数学公式

行内公式：$E = mc^2$

块级公式：

$$
\\frac{d}{dx}\\left( \\int_{a}^{x} f(u)\\,du\\right)=f(x)
$$

## 10. 脚注

这里有一个脚注[^1]。

[^1]: 这是脚注内容。

## 11. 定义列表

术语 1
: 定义 1

术语 2
: 定义 2

## 12. HTML 内嵌

<div style="color:rgb(196, 29, 29); margin: 10px;">
  <p>这是一个使用 HTML 的示例</p>
  <ul>
    <li>项目 1</li>
    <li>项目 2</li>
  </ul>
</div>


<div>1212</div>

## 13. 总结

这个文档展示了多种 Markdown 元素的使用方式，可以用于测试差异比较功能。`,J0=`# 复杂 Markdown 文档示例（更新版）

## 1. 文档概述

这是一个包含多种 Markdown 元素的复杂文档示例，用于测试差异比较功能。此版本包含了多处更新和修改。

## 2. 文本格式121212

这段文字包含**粗体**、*斜体*、***粗斜体***格式和**新增的粗体**，还有\`更新的行内代码\`。

~~删除线~~文本以及==新增的高亮==文本。

## 3. 列表

### 3.1 无序列表

- 主要功能（已更新）
  - 子功能 1
  - 新增子功能
  - 子功能 2
- 次要功能
  - 子功能 A
  - 子功能 C（新增）
  - 子功能 B（已更新）

### 3.2 有序列表

1. 第一步（已修改）
   1. 子步骤 1
   2. 子步骤 2
   3. 新增子步骤
2. 新增步骤
3. 第二步
4. 第三步




1

2

3


### 3.3 任务列表

- [x] 已完成任务
- [x] 未完成任务（现已完成）
- [ ] 新增任务
- [ ] 待办事项

## 4. 代码块

\`\`\`java
function example(): { status: string; data: string } {
  // 添加类型注解
  const message: string = 'Hello, Updated World!';
  console.log(message);
  
  // 添加错误处理
  try {
    return {
      status: 'success',
      data: message
    };
  } catch (error) {
    console.error('An error occurred:', error);
    return {
      status: 'error',
      data: 'Failed to process'
    };
  }
}

example();
\`\`\`

## 5. 表格

| 功能 | 状态 | 优先级 | 负责人 |
| ---- | ---- | ---- | ---- |
| 功能 A | 已完成 | 高 | 张三 |
| 功能 B | 已完成 | 中 | 李四 |
| 功能 D | 新增 | 高 | 王五 |
| 功能 C | 进行中 | 低 | 赵六 |

## 6. 引用

> 这是一段更新后的引用文本
> 
> > 这是嵌套引用（已更新）
> > 
> > > 这是新增的三级引用

## 7. 链接和图片

### 7.1 链接

[更新后的示例链接](https://example.org)

[新增的链接](https://example.com/new)

### 7.2 图片

![更新后的示例图片](https://example.org/updated-image.jpg)

![新增的示例图片](https://example.com/new-image.jpg)

## 8. 水平线

---

***

## 9. 数学公式

行内公式：$E = mc^2$ 和新增的 $F = ma$

块级公式：

$$
\\frac{d}{dx}\\left( \\int_{a}^{x} f(u)\\,du\\right)=f(x)
$$

新增的公式：

$$
\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}
$$

## 10. 脚注

这里有一个脚注[^1]和一个新增的脚注[^2]。

[^1]: 这是更新**后的**脚注内容。
[^2]: 这是新增的脚注内容。

## 11. 定义列表

术语 1（已更新）
: 更新后的定义 1

术语 2
: 定义 2

新术语
: 新定义

## 12. HTML 内嵌

<div style="color:rgba(19, 157, 220, 0.86); margin: 15px; border-radius: 5px;">
  <p>这是一个更新后使用 HTML 的示例</p>
  <ul>
    <li>更新的项目 1</li>
    <li>项目 2</li>
    <li>新增的项目 3</li>
  </ul>
  <button>新增的按钮</button>
</div>



<div>1212</div>

## 13. 总结

这个更新后的文档展示了多种 Markdown 元素的使用方式及其变更，可以用于测试差异比较功能的效果。

## 14. 新增章节

这是一个全新的章节，用于测试章节的添加。

### 14.1 新增子章节

这是新增章节中的子章节内容。

## `,ny=`# 极端长文本测试

## 1. 长段落

这是一个非常长的段落，用于测试工具处理大量文本的能力。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.

这是另一个长段落，包含中文内容。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。

## 2. 长列表

以下是一个非常长的列表：

- 列表项 1：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 2：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 3：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 4：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 5：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 6：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 7：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 8：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 9：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 10：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。

## 3. 长代码块

以下是一个非常长的代码块：

\`\`\`javascript
// 这是一个非常长的代码块
function processLargeData(data) {
  // 初始化结果数组
  const results = [];
  
  // 处理每一项数据
  for (let i = 0; i < data.length; i++) {
    // 复杂的数据处理逻辑
    const item = data[i];
    const processedItem = {
      id: item.id,
      name: item.name,
      value: item.value * 2,
      category: item.category,
      tags: item.tags.filter(tag => tag.length > 3),
      metadata: {
        createdAt: item.createdAt,
        updatedAt: new Date().toISOString(),
        version: item.version + 1,
        status: item.status === 'active' ? 'processed' : 'skipped',
        processingTime: Date.now() - new Date(item.createdAt).getTime(),
        processingSteps: [
          'validation',
          'transformation',
          'enrichment',
          'categorization',
          'finalization'
        ]
      }
    };
    
    // 添加到结果数组
    results.push(processedItem);
    
    // 记录处理进度
    if (i % 100 === 0) {
      console.log(\`Processed \${i} items out of \${data.length}\`);
    }
  }
  
  // 汇总统计信息
  const summary = {
    totalItems: results.length,
    categories: {},
    averageValue: results.reduce((sum, item) => sum + item.value, 0) / results.length,
    processingTime: results.reduce((sum, item) => sum + item.metadata.processingTime, 0) / results.length
  };
  
  // 计算每个类别的数量
  results.forEach(item => {
    if (!summary.categories[item.category]) {
      summary.categories[item.category] = 0;
    }
    summary.categories[item.category]++;
  });
  
  return {
    results,
    summary
  };
}

// 使用示例
const sampleData = Array.from({ length: 1000 }, (_, index) => ({
  id: \`item-\${index}\`,
  name: \`Item \${index}\`,
  value: Math.random() * 100,
  category: ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)],
  tags: [
    'tag1',
    'tag2',
    'longTag',
    'anotherTag',
    'specialTag'
  ].slice(0, Math.floor(Math.random() * 5) + 1),
  createdAt: new Date(Date.now() - Math.random() * 10000000).toISOString(),
  version: Math.floor(Math.random() * 5),
  status: Math.random() > 0.3 ? 'active' : 'inactive'
}));

const result = processLargeData(sampleData);
console.log(\`Processed \${result.results.length} items\`);
console.log(\`Average value: \${result.summary.averageValue.toFixed(2)}\`);
console.log('Category distribution:', result.summary.categories);
\`\`\`

## 4. 长表格

| ID | 姓名 | 年龄 | 职业 | 地址 | 电话 | 邮箱 | 注册日期 | 最后登录 | 状态 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 001 | 张三 | 28 | 软件工程师 | 北京市海淀区中关村南大街5号 | 13800138000 | zhangsan@example.com | 2020-01-01 | 2023-05-15 | 活跃 |
| 002 | 李四 | 32 | 产品经理 | 上海市浦东新区张江高科技园区 | 13900139000 | lisi@example.com | 2020-02-15 | 2023-05-14 | 活跃 |
| 003 | 王五 | 45 | 技术总监 | 广州市天河区珠江新城 | 13700137000 | wangwu@example.com | 2020-03-20 | 2023-05-10 | 活跃 |
| 004 | 赵六 | 36 | UI设计师 | 深圳市南山区科技园 | 13600136000 | zhaoliu@example.com | 2020-04-10 | 2023-05-12 | 活跃 |
| 005 | 钱七 | 29 | 前端开发 | 杭州市西湖区文三路 | 13500135000 | qianqi@example.com | 2020-05-05 | 2023-05-13 | 活跃 |
| 006 | 孙八 | 31 | 后端开发 | 成都市高新区天府大道 | 13400134000 | sunba@example.com | 2020-06-18 | 2023-05-11 | 休眠 |
| 007 | 周九 | 27 | 测试工程师 | 武汉市洪山区光谷大道 | 13300133000 | zhoujiu@example.com | 2020-07-22 | 2023-05-09 | 活跃 |
| 008 | 吴十 | 33 | 运维工程师 | 南京市建邺区奥体大街 | 13200132000 | wushi@example.com | 2020-08-30 | 2023-05-08 | 活跃 |
| 009 | 郑十一 | 30 | 数据分析师 | 西安市雁塔区高新路 | 13100131000 | zhengshiyi@example.com | 2020-09-15 | 2023-05-07 | 活跃 |
| 010 | 王十二 | 34 | 项目经理 | 重庆市渝中区解放碑 | 13000130000 | wangshier@example.com | 2020-10-10 | 2023-05-06 | 休眠 |

## 5. 长引用

> 这是一个非常长的引用，包含大量文本内容。这是一个非常长的引用，包含大量文本内容。这是一个非常长的引用，包含大量文本内容。这是一个非常长的引用，包含大量文本内容。这是一个非常长的引用，包含大量文本内容。这是一个非常长的引用，包含大量文本内容。
> 
> 这是引用中的第二段，同样非常长。这是引用中的第二段，同样非常长。这是引用中的第二段，同样非常长。这是引用中的第二段，同样非常长。这是引用中的第二段，同样非常长。这是引用中的第二段，同样非常长。这是引用中的第二段，同样非常长。
> 
> > 这是嵌套引用，内容也很长。这是嵌套引用，内容也很长。这是嵌套引用，内容也很长。这是嵌套引用，内容也很长。这是嵌套引用，内容也很长。这是嵌套引用，内容也很长。这是嵌套引用，内容也很长。
> > 
> > 嵌套引用的第二段。嵌套引用的第二段。嵌套引用的第二段。嵌套引用的第二段。嵌套引用的第二段。嵌套引用的第二段。嵌套引用的第二段。嵌套引用的第二段。嵌套引用的第二段。

## 6. 总结

这个文档包含了各种极端长的内容元素，用于测试 Markdown 差异比较工具处理大量文本的能力。`,ey=`# 极端长文本测试（更新版）

## 1. 长段落

这是一个非常长的段落，用于测试工具处理大量文本的能力。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl **aliquam nisl, eget ultricies nisl** nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.

这是另一个长段落，包含中文内容。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这段文本已经被修改，包含了一些新的内容。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。这是一个非常长的段落，用于测试工具处理大量文本的能力。

这是一个全新添加的长段落，包含大量文本内容。这是一个全新添加的长段落，包含大量文本内容。这是一个全新添加的长段落，包含大量文本内容。这是一个全新添加的长段落，包含大量文本内容。这是一个全新添加的长段落，包含大量文本内容。这是一个全新添加的长段落，包含大量文本内容。这是一个全新添加的长段落，包含大量文本内容。这是一个全新添加的长段落，包含大量文本内容。这是一个全新添加的长段落，包含大量文本内容。这是一个全新添加的长段落，包含大量文本内容。

## 2. 长列表

以下是一个非常长的列表（已更新）：

- 列表项 1：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 2：这是一个已修改的非常长的列表项，包含大量文本内容和一些新增内容。这是一个已修改的非常长的列表项，包含大量文本内容和一些新增内容。这是一个已修改的非常长的列表项，包含大量文本内容和一些新增内容。
- 新增列表项：这是一个全新的列表项，包含大量文本内容。这是一个全新的列表项，包含大量文本内容。这是一个全新的列表项，包含大量文本内容。这是一个全新的列表项，包含大量文本内容。
- 列表项 3：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 4：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 5：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 6：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 新增列表项：这是另一个全新的列表项，包含大量文本内容。这是另一个全新的列表项，包含大量文本内容。这是另一个全新的列表项，包含大量文本内容。
- 列表项 8：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 9：这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。这是一个非常长的列表项，包含大量文本内容。
- 列表项 10：这是一个已修改的非常长的列表项，包含大量文本内容和一些修改。这是一个已修改的非常长的列表项，包含大量文本内容和一些修改。这是一个已修改的非常长的列表项，包含大量文本内容和一些修改。
- 新增列表项 11：这是一个全新的列表项，包含大量文本内容。这是一个全新的列表项，包含大量文本内容。这是一个全新的列表项，包含大量文本内容。

## 3. 长代码块

以下是一个非常长的代码块（已更新）：

\`\`\`typescript
// 这是一个非常长的代码块（已更新为 TypeScript）
interface DataItem {
  id: string;
  name: string;
  value: number;
  category: string;
  tags: string[];
  createdAt: string;
  version: number;
  status: 'active' | 'inactive';
}

interface ProcessedItem extends Omit<DataItem, 'value' | 'tags'> {
  value: number;
  tags: string[];
  metadata: {
    createdAt: string;
    updatedAt: string;
    version: number;
    status: 'processed' | 'skipped' | 'failed';
    processingTime: number;
    processingSteps: string[];
    errorMessage?: string;
  };
}

interface ProcessingSummary {
  totalItems: number;
  categories: Record<string, number>;
  averageValue: number;
  processingTime: number;
  successRate: number;
  errors: string[];
}

interface ProcessingResult {
  results: ProcessedItem[];
  summary: ProcessingSummary;
}

// 添加了错误处理和日志记录
function processLargeData(data: DataItem[]): ProcessingResult {
  console.log(\`开始处理 \${data.length} 条数据...\`);
  const startTime = Date.now();
  
  // 初始化结果数组
  const results: ProcessedItem[] = [];
  const errors: string[] = [];
  
  // 处理每一项数据
  for (let i = 0; i < data.length; i++) {
    try {
      // 复杂的数据处理逻辑
      const item = data[i];
      
      // 数据验证
      if (!item.id || !item.name) {
        throw new Error(\`数据项 \${i} 缺少必要字段\`);
      }
      
      const processedItem: ProcessedItem = {
        id: item.id,
        name: item.name,
        value: item.value * 2.5, // 更新了计算逻辑
        category: item.category,
        tags: item.tags.filter(tag => tag.length > 3),
        createdAt: item.createdAt,
        version: item.version,
        status: item.status,
        metadata: {
          createdAt: item.createdAt,
          updatedAt: new Date().toISOString(),
          version: item.version + 1,
          status: item.status === 'active' ? 'processed' : 'skipped',
          processingTime: Date.now() - new Date(item.createdAt).getTime(),
          processingSteps: [
            'validation',
            'transformation',
            'enrichment',
            'categorization',
            'finalization',
            'quality_check' // 新增步骤
          ]
        }
      };
      
      // 添加到结果数组
      results.push(processedItem);
    } catch (error) {
      // 错误处理
      console.error(\`处理数据项 \${i} 时出错:\`, error);
      errors.push(\`项目 \${i}: \${error.message}\`);
    }
    
    // 记录处理进度
    if (i % 100 === 0) {
      console.log(\`已处理 \${i} 项，共 \${data.length} 项，完成度: \${((i / data.length) * 100).toFixed(2)}%\`);
    }
  }
  
  // 汇总统计信息
  const summary: ProcessingSummary = {
    totalItems: results.length,
    categories: {},
    averageValue: results.reduce((sum, item) => sum + item.value, 0) / results.length,
    processingTime: results.reduce((sum, item) => sum + item.metadata.processingTime, 0) / results.length,
    successRate: (results.length / data.length) * 100,
    errors
  };
  
  // 计算每个类别的数量
  results.forEach(item => {
    if (!summary.categories[item.category]) {
      summary.categories[item.category] = 0;
    }
    summary.categories[item.category]++;
  });
  
  const endTime = Date.now();
  console.log(\`数据处理完成，耗时: \${(endTime - startTime) / 1000} 秒\`);
  
  return {
    results,
    summary
  };
}

// 使用示例
const sampleData: DataItem[] = Array.from({ length: 1000 }, (_, index) => ({
  id: \`item-\${index}\`,
  name: \`Item \${index}\`,
  value: Math.random() * 100,
  category: ['A', 'B', 'C', 'D', 'E'][Math.floor(Math.random() * 5)], // 添加了新类别 E
  tags: [
    'tag1',
    'tag2',
    'longTag',
    'anotherTag',
    'specialTag',
    'newTag' // 新增标签
  ].slice(0, Math.floor(Math.random() * 6) + 1),
  createdAt: new Date(Date.now() - Math.random() * 10000000).toISOString(),
  version: Math.floor(Math.random() * 5),
  status: Math.random() > 0.3 ? 'active' : 'inactive'
}));

const result = processLargeData(sampleData);
console.log(\`成功处理 \${result.results.length} 项数据，成功率: \${result.summary.successRate.toFixed(2)}%\`);
console.log(\`平均值: \${result.summary.averageValue.toFixed(2)}\`);
console.log('类别分布:', result.summary.categories);
console.log(\`处理过程中发生 \${result.summary.errors.length} 个错误\`);
\`\`\`

## 4. 长表格

| ID | 姓名 | 年龄 | 职业 | 地址 | 电话 | 邮箱 | 注册日期 | 最后登录 | 状态 | 积分 | 等级 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 001 | 张三 | 29 | 高级软件工程师 | 北京市海淀区中关村南大街5号 | 13800138000 | zhangsan@example.com | 2020-01-01 | 2023-05-15 | 活跃 | 2500 | 黄金 |
| 002 | 李四 | 32 | 产品经理 | 上海市浦东新区张江高科技园区 | 13900139000 | lisi@example.com | 2020-02-15 | 2023-05-14 | 活跃 | 1800 | 白银 |
| 003 | 王五 | 45 | 技术总监 | 广州市天河区珠江新城 | 13700137000 | wangwu@example.com | 2020-03-20 | 2023-05-10 | 活跃 | 3200 | 钻石 |
| 004 | 赵六 | 36 | 高级UI设计师 | 深圳市南山区科技园 | 13600136000 | zhaoliu@example.com | 2020-04-10 | 2023-05-12 | 活跃 | 2100 | 黄金 |
| 005 | 钱七 | 29 | 前端开发专家 | 杭州市西湖区文三路 | 13500135000 | qianqi@example.com | 2020-05-05 | 2023-05-13 | 活跃 | 1950 | 白银 |
| 006 | 孙八 | 31 | 后端开发专家 | 成都市高新区天府大道 | 13400134000 | sunba@example.com | 2020-06-18 | 2023-05-11 | 活跃 | 2300 | 黄金 |
| 007 | 周九 | 27 | 测试工程师 | 武汉市洪山区光谷大道 | 13300133000 | zhoujiu@example.com | 2020-07-22 | 2023-05-09 | 活跃 | 1600 | 白银 |
| 008 | 吴十 | 33 | 运维工程师 | 南京市建邺区奥体大街 | 13200132000 | wushi@example.com | 2020-08-30 | 2023-05-08 | 休眠 | 1400 | 青铜 |
| 009 | 郑十一 | 30 | 高级数据分析师 | 西安市雁塔区高新路 | 13100131000 | zhengshiyi@example.com | 2020-09-15 | 2023-05-07 | 活跃 | 2700 | 黄金 |
| 010 | 王十二 | 34 | 项目经理 | 重庆市渝中区解放碑 | 13000130000 | wangshier@example.com | 2020-10-10 | 2023-05-06 | 活跃 | 2200 | 黄金 |
| 011 | 刘十三 | 26 | 初级开发工程师 | 天津市和平区南京路 | 13900139001 | liushisan@example.com | 2021-01-15 | 2023-05-16 | 活跃 | 800 | 青铜 |
| 012 | 陈十四 | 38 | 架构师 | 苏州市工业园区星湖街 | 13800138001 | chenshisi@example.com | 2021-02-20 | 2023-05-17 | 活跃 | 3500 | 钻石 |

## 5. 长引用

> 这是一个非常长的引用，包含大量文本内容。这是一个非常长的引用，包含大量文本内容。这是一个非常长的引用，包含大量文本内容。这是一个非常长的引用，包含大量文本内容。这是一个非常长的引用，包含大量文本内容。这是一个非常长的引用，包含大量文本内容。
> 
> 这是引用中的第二段，同样非常长，但已经被修改。这是引用中的第二段，同样非常长，但已经被修改。这是引用中的第二段，同样非常长，但已经被修改。这是引用中的第二段，同样非常长，但已经被修改。这是引用中的第二段，同样非常长，但已经被修改。
> 
> 这是引用中新增的第三段，内容也很长。这是引用中新增的第三段，内容也很长。这是引用中新增的第三段，内容也很长。这是引用中新增的第三段，内容也很长。这是引用中新增的第三段，内容也很长。
> 
> > 这是嵌套引用，内容也很长。这是嵌套引用，内容也很长。这是嵌套引用，内容也很长。这是嵌套引用，内容也很长。这是嵌套引用，内容也很长。这是嵌套引用，内容也很长。这是嵌套引用，内容也很长。
> > 
> > 嵌套引用的第二段已被修改。嵌套引用的第二段已被修改。嵌套引用的第二段已被修改。嵌套引用的第二段已被修改。嵌套引用的第二段已被修改。嵌套引用的第二段已被修改。嵌套引用的第二段已被修改。
> > 
> > > 这是新增的三级嵌套引用，内容也很长。这是新增的三级嵌套引用，内容也很长。这是新增的三级嵌套引用，内容也很长。这是新增的三级嵌套引用，内容也很长。这是新增的三级嵌套引用，内容也很长。

## 6. 总结

这个文档包含了各种极端长的内容元素，用于测试 Markdown 差异比较工具处理大量文本的能力。文档已经过更新，包含了大量的修改、添加和删除内容，以测试差异比较功能的效果。

## 7. 新增章节

这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。`,ty=`# 嵌套结构测试

## 1. 深度嵌套列表

### 1.1 无序列表嵌套

- 第一级列表项
  - 第二级列表项
    - 第三级列表项
      - 第四级列表项
        - 第五级列表项
          - 第六级列表项
            - 第七级列表项
              - 第八级列表项
                - 第九级列表项
                  - 第十级列表项
- 另一个第一级列表项
  - 第二级列表项 A
    - 第三级列表项 A
  - 第二级列表项 B
    - 第三级列表项 B
      - 第四级列表项 B

### 1.2 有序列表嵌套

1. 第一级有序列表
   1. 第二级有序列表
      1. 第三级有序列表
         1. 第四级有序列表
            1. 第五级有序列表
2. 另一个第一级有序列表
   1. 第二级有序列表 A
      1. 第三级有序列表 A
   2. 第二级有序列表 B
      1. 第三级有序列表 B

### 1.3 混合列表嵌套

1. 第一级有序列表
   - 第二级无序列表
     1. 第三级有序列表
        - 第四级无序列表
          1. 第五级有序列表
2. 另一个第一级有序列表
   - 第二级无序列表 A
     - 第三级无序列表 A
       1. 第四级有序列表 A
   - 第二级无序列表 B
     1. 第三级有序列表 B

### 1.4 任务列表嵌套

- [ ] 未完成任务
  - [ ] 子任务 1
    - [ ] 子任务 1.1
      - [ ] 子任务 1.1.1
  - [ ] 子任务 2
- [x] 已完成任务
  - [x] 已完成子任务 1
    - [ ] 未完成子任务 1.1
  - [ ] 未完成子任务 2

## 2. 深度嵌套引用

> 第一级引用
> 
> > 第二级引用
> > 
> > > 第三级引用
> > > 
> > > > 第四级引用
> > > > 
> > > > > 第五级引用
> > > > > 
> > > > > > 第六级引用

> 另一个第一级引用
> 
> > 第二级引用 A
> > 
> > > 第三级引用 A
> 
> > 第二级引用 B
> > 
> > > 第三级引用 B

## 3. 嵌套代码块

\`\`\`\`markdown
# 代码块中的 Markdown

## 子标题

\`\`\`javascript
// 代码块中的代码块
function nestedExample() {
  console.log('这是嵌套在 Markdown 代码块中的 JavaScript 代码块');
}
\`\`\`

- 列表项 1
- 列表项 2
  - 嵌套列表项
\`\`\`\`

## 4. 嵌套表格

| 外部表格 | 描述 |
| --- | --- |
| 行 1 | 普通内容 |
| 行 2 | <table><tr><th>嵌套表格</th><th>值</th></tr><tr><td>嵌套行 1</td><td>100</td></tr><tr><td>嵌套行 2</td><td>200</td></tr></table> |
| 行 3 | 普通内容 |

## 5. 混合嵌套结构

1. 第一级有序列表
   > 嵌套在列表中的引用
   > 
   > \`\`\`javascript
   > // 嵌套在引用中的代码块
   > function nestedInQuote() {
   >   return '这是嵌套在引用中的代码';
   > }
   > \`\`\`
   
   - 嵌套的无序列表
     1. 再次嵌套的有序列表
        - [ ] 嵌套的任务列表
          - [ ] 深度嵌套的任务

2. 第二级有序列表
   <table>
   <tr><th>嵌套在列表中的表格</th><th>值</th></tr>
   <tr><td>数据 1</td><td>300</td></tr>
   <tr><td>数据 2</td><td>400</td></tr>
   </table>

## 6. 嵌套 HTML 结构

<div style="border: 1px solid #ccc; padding: 10px;">
  <h3>HTML 中的标题</h3>
  <p>一些文本内容</p>
  <div style="background-color: #f0f0f0; padding: 10px;">
    <h4>嵌套 div 中的标题</h4>
    <ul>
      <li>列表项 1</li>
      <li>列表项 2
        <ol>
          <li>嵌套的有序列表项 1</li>
          <li>嵌套的有序列表项 2</li>
        </ol>
      </li>
    </ul>
    <div style="border: 1px dashed #999; padding: 5px;">
      <p>更深层次的嵌套 div</p>
      <blockquote>
        <p>嵌套在 HTML 中的引用</p>
        <pre><code>// 嵌套在引用中的代码
function deeplyNested() {
  return '这是深度嵌套的代码';
}</code></pre>
      </blockquote>
    </div>
  </div>
</div>

## 7. 总结

这个文档包含了各种深度嵌套的结构，用于测试 Markdown 差异比较工具处理复杂嵌套内容的能力。`,ry=`# 嵌套结构测试（更新版）

## 1. 深度嵌套列表

### 1.1 无序列表嵌套

- 第一级列表项（已修改）
  - 第二级列表项
    - 第三级列表项（已修改）
      - 第四级列表项
        - 第五级列表项
          - 第六级列表项（已修改）
            - 第七级列表项
              - 第八级列表项
                - 第九级列表项
                  - 第十级列表项
                    - 新增的第十一级列表项
- 另一个第一级列表项
  - 第二级列表项 A
    - 第三级列表项 A
    - 新增的第三级列表项
  - 第二级列表项 B
    - 第三级列表项 B
      - 第四级列表项 B
      - 新增的第四级列表项
- 新增的第一级列表项
  - 新增的第二级列表项

### 1.2 有序列表嵌套

1. 第一级有序列表（已修改）
   1. 第二级有序列表
      1. 第三级有序列表
         1. 第四级有序列表
            1. 第五级有序列表
            2. 新增的第五级有序列表
2. 另一个第一级有序列表
   1. 第二级有序列表 A
      1. 第三级有序列表 A
   2. 第二级有序列表 B
      1. 第三级有序列表 B
      2. 新增的第三级有序列表
3. 新增的第一级有序列表
   1. 新增的第二级有序列表

### 1.3 混合列表嵌套

1. 第一级有序列表
   - 第二级无序列表（已修改）
     1. 第三级有序列表
        - 第四级无序列表
          1. 第五级有序列表
          2. 新增的第五级有序列表
   - 新增的第二级无序列表
2. 另一个第一级有序列表
   - 第二级无序列表 A
     - 第三级无序列表 A
       1. 第四级有序列表 A
       2. 新增的第四级有序列表
   - 第二级无序列表 B
     1. 第三级有序列表 B
     2. 新增的第三级有序列表
3. 新增的第一级有序列表
   - 新增的第二级无序列表

### 1.4 任务列表嵌套

- [ ] 未完成任务
  - [ ] 子任务 1
    - [x] 子任务 1.1（已完成）
      - [ ] 子任务 1.1.1
      - [x] 新增的子任务（已完成）
  - [ ] 子任务 2
- [x] 已完成任务
  - [x] 已完成子任务 1
    - [x] 未完成子任务 1.1（现已完成）
    - [ ] 新增的子任务
  - [ ] 未完成子任务 2
- [ ] 新增的未完成任务
  - [ ] 新增的子任务

## 2. 深度嵌套引用

> 第一级引用（已修改）
> 
> > 第二级引用
> > 
> > > 第三级引用（已修改）
> > > 
> > > > 第四级引用
> > > > 
> > > > > 第五级引用（已修改）
> > > > > 
> > > > > > 第六级引用
> > > > > > 
> > > > > > > 新增的第七级引用

> 另一个第一级引用
> 
> > 第二级引用 A（已修改）
> > 
> > > 第三级引用 A
> > > 
> > > 新增的第三级引用
> 
> > 第二级引用 B
> > 
> > > 第三级引用 B（已修改）

> 新增的第一级引用
> 
> > 新增的第二级引用

## 3. 嵌套代码块

\`\`\`\`markdown
# 代码块中的 Markdown（已修改）

## 子标题

\`\`\`javascript
// 代码块中的代码块（已修改）
function nestedExample() {
  console.log('这是嵌套在 Markdown 代码块中的 JavaScript 代码块');
  // 新增的注释
  return '新增的返回值';
}
\`\`\`

- 列表项 1
- 列表项 2（已修改）
  - 嵌套列表项
  - 新增的嵌套列表项

\`\`\`python
# 新增的 Python 代码块
def nested_function():
    print("这是新增的 Python 代码块")
    return "新增的返回值"
\`\`\`
\`\`\`\`

## 4. 嵌套表格

| 外部表格 | 描述 | 新增列 |
| --- | --- | --- |
| 行 1 | 普通内容 | 新值 1 |
| 行 2 | <table><tr><th>嵌套表格</th><th>值</th><th>新增列</th></tr><tr><td>嵌套行 1</td><td>100</td><td>新值 A</td></tr><tr><td>嵌套行 2</td><td>200</td><td>新值 B</td></tr><tr><td>新增嵌套行</td><td>300</td><td>新值 C</td></tr></table> | 新值 2 |
| 行 3 | 普通内容（已修改） | 新值 3 |
| 新增行 | 新增内容 | 新值 4 |

## 5. 混合嵌套结构

1. 第一级有序列表（已修改）
   > 嵌套在列表中的引用（已修改）
   > 
   > \`\`\`javascript
   > // 嵌套在引用中的代码块（已修改）
   > function nestedInQuote() {
   >   console.log("新增的日志");
   >   return '这是嵌套在引用中的代码（已修改）';
   > }
   > \`\`\`
   > 
   > 新增的引用内容
   
   - 嵌套的无序列表
     1. 再次嵌套的有序列表（已修改）
        - [x] 嵌套的任务列表（已完成）
          - [ ] 深度嵌套的任务
          - [x] 新增的深度嵌套任务（已完成）
     2. 新增的嵌套有序列表
   - 新增的嵌套无序列表

2. 第二级有序列表
   <table>
   <tr><th>嵌套在列表中的表格</th><th>值</th><th>新增列</th></tr>
   <tr><td>数据 1</td><td>300</td><td>新值 X</td></tr>
   <tr><td>数据 2</td><td>400</td><td>新值 Y</td></tr>
   <tr><td>新增数据</td><td>500</td><td>新值 Z</td></tr>
   </table>

3. 新增的有序列表
   > 新增的嵌套引用
   > 
   > - 新增的嵌套列表

## 6. 嵌套 HTML 结构

<div style="border: 1px solid #ccc; padding: 10px;">
  <h3>HTML 中的标题（已修改）</h3>
  <p>一些文本内容（已修改）</p>
  <div style="background-color: #f0f0f0; padding: 10px;">
    <h4>嵌套 div 中的标题</h4>
    <ul>
      <li>列表项 1（已修改）</li>
      <li>列表项 2
        <ol>
          <li>嵌套的有序列表项 1</li>
          <li>嵌套的有序列表项 2（已修改）</li>
          <li>新增的嵌套有序列表项</li>
        </ol>
      </li>
      <li>新增的列表项</li>
    </ul>
    <div style="border: 1px dashed #999; padding: 5px;">
      <p>更深层次的嵌套 div（已修改）</p>
      <blockquote>
        <p>嵌套在 HTML 中的引用（已修改）</p>
        <pre><code>// 嵌套在引用中的代码（已修改）
function deeplyNested() {
  console.log("新增的日志");
  return '这是深度嵌套的代码（已修改）';
}</code></pre>
      </blockquote>
      <p>新增的段落</p>
    </div>
    <div style="border: 1px dotted #666; margin-top: 10px; padding: 5px;">
      <p>新增的嵌套 div</p>
    </div>
  </div>
</div>

## 7. 总结

这个文档包含了各种深度嵌套的结构，用于测试 Markdown 差异比较工具处理复杂嵌套内容的能力。文档已经过更新，包含了多处修改、添加和删除内容，以测试差异比较功能的效果。

## 8. 新增章节

这是一个新增的章节，包含嵌套结构：

> 新章节中的引用
> 
> - 引用中的列表
>   - 嵌套列表
>     \`\`\`javascript
>     // 嵌套在列表中的代码
>     function newSectionNested() {
>       return '新章节中的嵌套代码';
>     }
>     \`\`\``,iy=`# 特殊字符测试

## 1. 基本特殊字符

### 1.1 标点符号

以下是常见的标点符号：

- 句号 (.) 逗号 (,) 分号 (;) 冒号 (:)
- 感叹号 (!) 问号 (?)
- 引号 (") 单引号 (')
- 括号 () [] {}
- 连字符 (-) 下划线 (_) 波浪线 (~)
- 井号 (#) 百分号 (%) 美元符号 ($)
- 加号 (+) 等号 (=) 星号 (*)
- 斜杠 (/) 反斜杠 (\\)
- 小于号 (<) 大于号 (>)
- 管道符 (|) 和号 (&) 脱字符 (^)
- 重音符 (\`) 省略号 (...)

### 1.2 转义字符

以下是一些转义字符的示例：

- 反斜杠: \\\\
- 反引号: \\\`
- 星号: \\*
- 下划线: \\_
- 花括号: \\{ \\}
- 方括号: \\[ \\]
- 圆括号: \\( \\)
- 井号: \\#
- 加号: \\+
- 减号: \\-
- 句点: \\.
- 感叹号: \\!

## 2. Unicode 字符

### 2.1 拉丁字母变体

À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì Í Î Ï Ð Ñ Ò Ó Ô Õ Ö × Ø Ù Ú Û Ü Ý Þ ß
à á â ã ä å æ ç è é ê ë ì í î ï ð ñ ò ó ô õ ö ÷ ø ù ú û ü ý þ ÿ

### 2.2 数学符号

± ÷ × ∑ ∏ √ ∞ ∫ ∮ ∇ ∂ ∆ ∩ ∪ ⊂ ⊃ ⊆ ⊇ ≠ ≡ ≤ ≥ ≈ ∝ ∧ ∨ ¬ ∀ ∃ ∈ ∉ ∋ ∅ ℵ

### 2.3 货币符号

$ ¢ € £ ¥ ₹ ₽ ₩ ₱ ₿

### 2.4 箭头和几何符号

← ↑ → ↓ ↔ ↕ ↖ ↗ ↘ ↙ ⇐ ⇑ ⇒ ⇓ ⇔ ⇕ ⇖ ⇗ ⇘ ⇙
△ ▲ ▴ ▵ ▶ ▷ ▸ ▹ ► ▻ ▼ ▽ ▾ ▿ ◀ ◁ ◂ ◃ ◄ ◅ ◆ ◇ ◈ ◉ ◊ ○ ◌ ◍ ◎ ●

### 2.5 表情符号

😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 ☺️ 🙂 🤗 🤩 🤔 🤨

### 2.6 中文和日文字符

你好，世界！こんにちは、世界！

汉字测试：中国、日本、韩国、台湾

日文测试：ひらがな、カタカナ、漢字

## 3. HTML 实体

### 3.1 命名实体

&lt; &gt; &amp; &quot; &apos; &cent; &pound; &yen; &euro; &copy; &reg; &trade;

### 3.2 数字实体

&#9824; &#9827; &#9829; &#9830; &#9733; &#9734;

## 4. 特殊字符在 Markdown 元素中

### 4.1 特殊字符在标题中

#### 包含 & < > " ' 的标题

#### 包含 😀 🤔 👍 的标题

### 4.2 特殊字符在列表中

- 项目 & 符号
- 项目 < 符号
- 项目 > 符号
- 项目 " 符号
- 项目 ' 符号
- 项目 😀 符号

### 4.3 特殊字符在代码块中

\`\`\`
function specialChars() {
  const symbols = '!@#$%^&*()_+-=[]{}\\|;:",./<>?';
  const emoji = '😀 🤔 👍';
  return \`特殊符号: \${symbols}, 表情: \${emoji}\`;
}
\`\`\`

### 4.4 特殊字符在表格中

| 符号类型 | 示例 | 描述 |
| --- | --- | --- |
| HTML 特殊字符 | & < > " ' | 需要在 HTML 中转义 |
| 数学符号 | ± ÷ × | 数学运算符号 |
| 表情符号 | 😀 🤔 👍 | Unicode 表情 |
| 箭头 | ← ↑ → ↓ | 方向指示 |

### 4.5 特殊字符在链接和图片中

[包含特殊字符 & < > " ' 的链接](https://example.com/search?q=special&symbols=true)

![包含特殊字符 & < > " ' 的图片描述](https://example.com/image.jpg "图片 & 标题")

### 4.6 特殊字符在引用中

> 这是包含特殊字符的引用：& < > " '
> 
> 这是包含表情符号的引用：😀 🤔 👍

## 5. 极端情况

### 5.1 大量重复特殊字符

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

################################################################

******************************************************************

### 5.2 混合特殊字符

!@#$%^&*()_+{}|:"<>?~\`-=[]\\;',./!@#$%^&*()_+{}|:"<>?~\`-=[]\\;',./!@#$%^&*()_+{}|:"<>?~\`-=[]\\;',./

### 5.3 特殊字符组合

- ¯\\_(ツ)_/¯
- (╯°□°）╯︵ ┻━┻
- ಠ_ಠ
- ʕ•ᴥ•ʔ
- (⌐■_■)

## 6. 总结

这个文档包含了各种特殊字符和符号，用于测试 Markdown 差异比较工具处理特殊字符的能力。`,ly=`# 特殊字符测试（更新版）

## 1. 基本特殊字符

### 1.1 标点符号

以下是常见的标点符号（已更新）：

- 句号 (.) 逗号 (,) 分号 (;) 冒号 (:)
- 感叹号 (!) 问号 (?) 双问号 (??)
- 引号 (") 单引号 (') 反引号 (\`)
- 括号 () [] {} 〈〉 《》
- 连字符 (-) 下划线 (_) 波浪线 (~) 长破折号 (—)
- 井号 (#) 百分号 (%) 美元符号 ($) 人民币符号 (¥)
- 加号 (+) 等号 (=) 星号 (*) 乘方符号 (^)
- 斜杠 (/) 反斜杠 (\\) 双斜杠 (//)
- 小于号 (<) 大于号 (>) 不等号 (≠)
- 管道符 (|) 和号 (&) 脱字符 (^) 版权符号 (©)
- 重音符 (\`) 省略号 (...) 缩进符号 (→)

### 1.2 转义字符

以下是一些转义字符的示例（已更新）：

- 反斜杠: \\\\
- 反引号: \\\`
- 星号: \\*
- 下划线: \\_
- 花括号: \\{ \\}
- 方括号: \\[ \\]
- 圆括号: \\( \\)
- 井号: \\#
- 加号: \\+
- 减号: \\-
- 句点: \\.
- 感叹号: \\!
- 尖括号: \\< \\>

## 2. Unicode 字符

### 2.1 拉丁字母变体

À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì Í Î Ï Ð Ñ Ò Ó Ô Õ Ö × Ø Ù Ú Û Ü Ý Þ ß
à á â ã ä å æ ç è é ê ë ì í î ï ð ñ ò ó ô õ ö ÷ ø ù ú û ü ý þ ÿ
Ā ā Ă ă Ą ą Ć ć Ĉ ĉ Ċ ċ Č č Ď ď Đ đ Ē ē Ĕ ĕ Ė ė Ę ę Ě ě

### 2.2 数学符号

± ÷ × ∑ ∏ √ ∞ ∫ ∮ ∇ ∂ ∆ ∩ ∪ ⊂ ⊃ ⊆ ⊇ ≠ ≡ ≤ ≥ ≈ ∝ ∧ ∨ ¬ ∀ ∃ ∈ ∉ ∋ ∅ ℵ
⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁺ ⁻ ⁼ ⁽ ⁾ ₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ ₊ ₋ ₌ ₍ ₎

### 2.3 货币符号

$ ¢ € £ ¥ ₹ ₽ ₩ ₱ ₿ ¤ ₫ ₲ ₴ ₸

### 2.4 箭头和几何符号

← ↑ → ↓ ↔ ↕ ↖ ↗ ↘ ↙ ⇐ ⇑ ⇒ ⇓ ⇔ ⇕ ⇖ ⇗ ⇘ ⇙ ↩ ↪ ↻ ↺ ⟲ ⟳
△ ▲ ▴ ▵ ▶ ▷ ▸ ▹ ► ▻ ▼ ▽ ▾ ▿ ◀ ◁ ◂ ◃ ◄ ◅ ◆ ◇ ◈ ◉ ◊ ○ ◌ ◍ ◎ ● ◐ ◑ ◒ ◓ ◔ ◕ ◖ ◗ ◘ ◙ ◚ ◛ ◜ ◝ ◞ ◟

### 2.5 表情符号

😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 ☺️ 🙂 🤗 🤩 🤔 🤨
😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑

### 2.6 中文和日文字符

你好，世界！こんにちは、世界！안녕하세요, 세계!

汉字测试：中国、日本、韩国、台湾、香港、澳门

日文测试：ひらがな、カタカナ、漢字、絵文字

韩文测试：한글, 조선글, 아름다운 한국

## 3. HTML 实体

### 3.1 命名实体

&lt; &gt; &amp; &quot; &apos; &cent; &pound; &yen; &euro; &copy; &reg; &trade; &deg; &plusmn; &para; &sect; &micro;

### 3.2 数字实体

&#9824; &#9827; &#9829; &#9830; &#9733; &#9734; &#9742; &#9745; &#9746; &#9760; &#9762; &#9763; &#9774; &#9775; &#9784; &#9785; &#9786; &#9787;

## 4. 特殊字符在 Markdown 元素中

### 4.1 特殊字符在标题中

#### 包含 & < > " ' 的标题（已更新）

#### 包含 😀 🤔 👍 🎉 的标题

#### 新增：包含 ∑ ∞ ∫ ∇ 的标题

### 4.2 特殊字符在列表中

- 项目 & 符号（已更新）
- 项目 < 符号
- 项目 > 符号
- 项目 " 符号
- 项目 ' 符号
- 项目 😀 符号
- 新增：项目 ∞ 符号
- 新增：项目 ₿ 符号

### 4.3 特殊字符在代码块中

\`\`\`javascript
function specialChars() {
  // 更新了特殊字符集
  const symbols = '!@#$%^&*()_+-=[]{}\\|;:",./<>?~\`';
  const emoji = '😀 🤔 👍 🎉 🚀';
  const math = '∑ ∞ ∫ ∇ ∂ ∆';
  return \`特殊符号: \${symbols}, 表情: \${emoji}, 数学符号: \${math}\`;
}
\`\`\`

### 4.4 特殊字符在表格中

| 符号类型 | 示例 | 描述 |
| --- | --- | --- |
| HTML 特殊字符 | & < > " ' | 需要在 HTML 中转义 |
| 数学符号 | ± ÷ × ∑ ∞ | 数学运算符号 |
| 表情符号 | 😀 🤔 👍 🎉 | Unicode 表情 |
| 箭头 | ← ↑ → ↓ ↔ | 方向指示 |
| 货币符号 | $ € £ ¥ ₿ | 全球货币 |
| 上下标 | x² y³ a₁ b₂ | 数学表示法 |

### 4.5 特殊字符在链接和图片中

[包含特殊字符 & < > " ' 的链接（已更新）](https://example.com/search?q=special&symbols=true&emoji=😀)

![包含特殊字符 & < > " ' 😀 的图片描述](https://example.com/image.jpg "图片 & 标题 © 2023")

[新增：包含数学符号 ∑ ∞ ∫ 的链接](https://example.com/math?symbols=∑∞∫)

### 4.6 特殊字符在引用中

> 这是包含特殊字符的引用（已更新）：& < > " ' © ®
> 
> 这是包含表情符号的引用：😀 🤔 👍 🎉 🚀
> 
> 新增：这是包含数学符号的引用：∑ ∞ ∫ ∇ ∂ ∆

## 5. 极端情况

### 5.1 大量重复特殊字符

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

################################################################

******************************************************************

😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀

### 5.2 混合特殊字符

!@#$%^&*()_+{}|:"<>?~\`-=[]\\;',./!@#$%^&*()_+{}|:"<>?~\`-=[]\\;',./!@#$%^&*()_+{}|:"<>?~\`-=[]\\;',./

∑∞∫∇∂∆∑∞∫∇∂∆∑∞∫∇∂∆∑∞∫∇∂∆∑∞∫∇∂∆∑∞∫∇∂∆∑∞∫∇∂∆∑∞∫∇∂∆∑∞∫∇∂∆∑∞∫∇∂∆∑∞∫∇∂∆∑∞∫∇∂∆

### 5.3 特殊字符组合

- ¯\\_(ツ)_/¯
- (╯°□°）╯︵ ┻━┻
- ┬─┬ノ( º _ ºノ)
- ಠ_ಠ
- ʕ•ᴥ•ʔ
- (⌐■_■)
- (づ｡◕‿‿◕｡)づ
- (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧

### 5.4 新增：零宽字符和不可见字符

这段文本包含零宽空格(​)、零宽连字(‍)和零宽非连字(‌)等不可见字符。

这段文本包含控制字符如制表符(	)、换行符(
)和回车符(
)。

## 6. 总结

这个文档包含了各种特殊字符和符号，用于测试 Markdown 差异比较工具处理特殊字符的能力。文档已经过更新，包含了多处修改、添加和删除内容，以测试差异比较功能的效果。

## 7. 新增：国际化字符集

### 7.1 阿拉伯文

مرحبا بالعالم! هذا اختبار للغة العربية.

### 7.2 俄语西里尔字母

Привет, мир! Это тест для кириллицы.

### 7.3 希腊字母

Γειά σου Κόσμε! Αυτή είναι μια δοκιμή για ελληνικά.

### 7.4 希伯来文

שלום עולם! זהו מבחן לעברית.

### 7.5 泰文

สวัสดีชาวโลก! นี่คือการทดสอบสำหรับภาษาไทย.

### 7.6 梵文

नमस्ते दुनिया! यह संस्कृत के लिए एक परीक्षण है.`,oy=`# 空白处理测试

## 1. 空格变化

### 1.1 单词间空格

这是一个普通的句子，单词之间有一个空格。

这是一个  有些单词之间  有多个空格  的句子。

### 1.2 行首空格

普通行，没有行首空格。
 这行有一个行首空格。
  这行有两个行首空格。
   这行有三个行首空格。
    这行有四个行首空格。

### 1.3 行尾空格

这行没有行尾空格。
这行有一个行尾空格。 
这行有两个行尾空格。  
这行有三个行尾空格。   
这行有四个行尾空格。    

## 2. 空行变化

### 2.1 无空行

这是第一段。
这是第二段。
这是第三段。

### 2.2 单空行

这是第一段。

这是第二段。

这是第三段。

### 2.3 多空行

这是第一段。


这是第二段。



这是第三段。

## 3. 制表符

### 3.1 制表符缩进

普通行，没有缩进。
	这行使用一个制表符缩进。
		这行使用两个制表符缩进。
			这行使用三个制表符缩进。
				这行使用四个制表符缩进。

### 3.2 混合空格和制表符

普通行，没有缩进。
 	这行使用一个空格和一个制表符。
	 这行使用一个制表符和一个空格。
 	 这行使用一个空格、一个制表符和一个空格。
	 	这行使用一个制表符、一个空格和一个制表符。

## 4. 代码块中的空白

### 4.1 缩进代码块

    这是一个缩进代码块的第一行。
    这是第二行，保持相同缩进。
    这是第三行，保持相同缩进。

### 4.2 围栏代码块

\`\`\`
这是一个围栏代码块的第一行。
  这是第二行，有两个空格缩进。
    这是第三行，有四个空格缩进。
	这是第四行，有一个制表符缩进。
  	这是第五行，有两个空格和一个制表符缩进。
\`\`\`

## 5. 列表中的空白

### 5.1 无序列表缩进

- 第一级列表项
  - 第二级列表项
    - 第三级列表项
      - 第四级列表项
- 另一个第一级列表项
  - 第二级列表项
    - 第三级列表项

### 5.2 有序列表缩进

1. 第一级有序列表
   1. 第二级有序列表
      1. 第三级有序列表
         1. 第四级有序列表
2. 另一个第一级有序列表
   1. 第二级有序列表
      1. 第三级有序列表

### 5.3 混合列表缩进

- 第一级无序列表
  1. 第二级有序列表
     - 第三级无序列表
       1. 第四级有序列表
- 另一个第一级无序列表
  1. 第二级有序列表
     - 第三级无序列表

## 6. 表格中的空白

### 6.1 紧凑表格

|列1|列2|列3|
|---|---|---|
|数据1|数据2|数据3|
|数据4|数据5|数据6|

### 6.2 宽松表格

| 列1 | 列2 | 列3 |
| --- | --- | --- |
| 数据1 | 数据2 | 数据3 |
| 数据4 | 数据5 | 数据6 |

### 6.3 不规则表格

| 列1 |列2|  列3   |
|---|  ---  |---|
|数据1|   数据2  |数据3|
|  数据4  |数据5|   数据6   |

## 7. 引用中的空白

### 7.1 普通引用

> 这是一个普通的引用。
> 这是引用的第二行。
> 这是引用的第三行。

### 7.2 带缩进的引用

> 这是一个普通的引用。
>   这行在引用中有额外缩进。
>     这行在引用中有更多缩进。

### 7.3 嵌套引用

> 这是第一级引用。
> > 这是第二级引用。
> > > 这是第三级引用。

## 8. 总结

这个文档包含了各种空白字符的使用情况，用于测试 Markdown 差异比较工具处理空白字符的能力。`,uy=`# 空白处理测试（更新版）

## 1. 空格变化

### 1.1 单词间空格

这是一个普通的句子，单词之间有一个空格。

这是一个   有些单词之间    有更多空格     的句子。

### 1.2 行首空格

普通行，没有行首空格。
  这行有两个行首空格。
   这行有三个行首空格。
    这行有四个行首空格。
     这行有五个行首空格。

### 1.3 行尾空格

这行没有行尾空格。
这行有两个行尾空格。  
这行有四个行尾空格。    
这行有六个行尾空格。      
这行有八个行尾空格。        

## 2. 空行变化

### 2.1 无空行

这是第一段。这是第二段。这是第三段。

### 2.2 单空行

这是第一段。

这是第二段。

这是第三段。

### 2.3 多空行

这是第一段。



这是第二段。





这是第三段。

## 3. 制表符

### 3.1 制表符缩进

普通行，没有缩进。
	这行使用一个制表符缩进。
			这行使用三个制表符缩进。
					这行使用五个制表符缩进。
							这行使用七个制表符缩进。

### 3.2 混合空格和制表符

普通行，没有缩进。
  	这行使用两个空格和一个制表符。
	  这行使用一个制表符和两个空格。
  	  这行使用两个空格、一个制表符和两个空格。
	  	这行使用一个制表符、两个空格和一个制表符。

## 4. 代码块中的空白

### 4.1 缩进代码块

    这是一个缩进代码块的第一行。
      这是第二行，增加了缩进。
        这是第三行，进一步增加了缩进。
    这是第四行，回到原始缩进。

### 4.2 围栏代码块

\`\`\`
这是一个围栏代码块的第一行。
    这是第二行，有四个空格缩进。
        这是第三行，有八个空格缩进。
		这是第四行，有两个制表符缩进。
    		这是第五行，有四个空格和两个制表符缩进。
\`\`\`

## 5. 列表中的空白

### 5.1 无序列表缩进

- 第一级列表项
    - 第二级列表项（增加了缩进）
        - 第三级列表项（增加了缩进）
            - 第四级列表项（增加了缩进）
- 另一个第一级列表项
    - 第二级列表项（增加了缩进）
        - 第三级列表项（增加了缩进）

### 5.2 有序列表缩进

1. 第一级有序列表
    1. 第二级有序列表（增加了缩进）
        1. 第三级有序列表（增加了缩进）
            1. 第四级有序列表（增加了缩进）
2. 另一个第一级有序列表
    1. 第二级有序列表（增加了缩进）
        1. 第三级有序列表（增加了缩进）

### 5.3 混合列表缩进

- 第一级无序列表
    1. 第二级有序列表（增加了缩进）
        - 第三级无序列表（增加了缩进）
            1. 第四级有序列表（增加了缩进）
- 另一个第一级无序列表
    1. 第二级有序列表（增加了缩进）
        - 第三级无序列表（增加了缩进）

## 6. 表格中的空白

### 6.1 紧凑表格

|列1|列2|列3|列4|
|---|---|---|---|
|数据1|数据2|数据3|新数据|
|数据4|数据5|数据6|新数据|

### 6.2 宽松表格

|    列1    |    列2    |    列3    |    列4    |
|-----------|-----------|-----------|-----------|
|   数据1   |   数据2   |   数据3   |   新数据   |
|   数据4   |   数据5   |   数据6   |   新数据   |

### 6.3 不规则表格

|   列1  |列2|     列3      |  列4  |
|---| ------- |---|----------|
|数据1|      数据2     |数据3|  新数据  |
|     数据4     |数据5|      数据6      | 新数据 |

## 7. 引用中的空白

### 7.1 普通引用

> 这是一个普通的引用。
> 这是引用的第二行。
>
> 这是引用的第三行（添加了空行）。

### 7.2 带缩进的引用

> 这是一个普通的引用。
>     这行在引用中有更多缩进。
>         这行在引用中有更更多缩进。

### 7.3 嵌套引用

> 这是第一级引用。
> > 这是第二级引用。
> > > 这是第三级引用。
> > > > 这是第四级引用（新增）。

## 8. 总结

这个文档包含了各种空白字符的使用情况，用于测试 Markdown 差异比较工具处理空白字符的能力。文档已经过更新，包含了多处空白字符的变化，以测试差异比较功能的效果。

## 9. 新增：极端空白情况

### 9.1 超长空行

这是第一段。











这是第二段（中间有10个空行）。

### 9.2 超多空格

这是一个                                                                  有超多空格的句子。

### 9.3 混合空白字符

这是一个	 	 	 	混合了制表符和空格	 	 	 	的句子。

### 9.4 空白字符序列

普通文本
 
  
   
    
     
      
       
        
         
普通文本（中间是递增的空格行）`,ay=`# 混合内容测试

## 1. 列表中嵌入其他元素

### 1.1 列表中嵌入代码块

- 第一个列表项
- 第二个列表项，包含代码块：
  \`\`\`javascript
  function example() {
    console.log('这是嵌入在列表中的代码块');
    return true;
  }
  \`\`\`
- 第三个列表项

### 1.2 列表中嵌入表格

1. 第一个有序列表项
2. 第二个有序列表项，包含表格：
   
   | 列1 | 列2 | 列3 |
   | --- | --- | --- |
   | 数据1 | 数据2 | 数据3 |
   | 数据4 | 数据5 | 数据6 |
   
3. 第三个有序列表项

### 1.3 列表中嵌入引用

- 第一个列表项
- 第二个列表项，包含引用：
  > 这是嵌入在列表项中的引用。
  > 引用的第二行。
- 第三个列表项

### 1.4 列表中嵌入图片和链接

- 第一个列表项
- 第二个列表项，包含链接和图片：
  这是一个[链接](https://example.com)，这是一个图片：
  ![示例图片](https://example.com/image.jpg)
- 第三个列表项

## 2. 引用中嵌入其他元素

### 2.1 引用中嵌入代码块

> 这是引用的第一行。
> 
> \`\`\`python
> def example():
>     print("这是嵌入在引用中的代码块")
>     return True
> \`\`\`
> 
> 这是引用的最后一行。

### 2.2 引用中嵌入列表

> 这是引用的第一行。
> 
> - 这是嵌入在引用中的列表项1
> - 这是嵌入在引用中的列表项2
>   - 这是嵌套的列表项
> - 这是嵌入在引用中的列表项3
> 
> 这是引用的最后一行。

### 2.3 引用中嵌入表格

> 这是引用的第一行。
> 
> | 列1 | 列2 | 列3 |
> | --- | --- | --- |
> | 数据1 | 数据2 | 数据3 |
> | 数据4 | 数据5 | 数据6 |
> 
> 这是引用的最后一行。

### 2.4 嵌套引用中的混合内容

> 这是第一级引用。
> 
> > 这是第二级引用，包含列表：
> > 
> > 1. 第一个列表项
> > 2. 第二个列表项，包含代码：\`const x = 10;\`
> > 3. 第三个列表项
> 
> 回到第一级引用。

## 3. 表格中的复杂内容

### 3.1 表格中的格式化文本

| 标题 | 描述 | 示例 |
| --- | --- | --- |
| 粗体和斜体 | 文本可以**加粗**或*倾斜* | **重要信息**和*补充说明* |
| 代码 | 可以包含\`行内代码\` | \`const x = 10;\` |
| 链接 | 可以包含[链接](https://example.com) | 点击[这里](https://example.com)查看详情 |

### 3.2 表格中的列表

| 类型 | 内容 | 备注 |
| --- | --- | --- |
| 无序列表 | <ul><li>项目1</li><li>项目2</li><li>项目3</li></ul> | 使用HTML标签 |
| 有序列表 | <ol><li>第一步</li><li>第二步</li><li>第三步</li></ol> | 使用HTML标签 |

## 4. 代码块中的特殊情况

### 4.1 代码块中包含Markdown语法

\`\`\`markdown
# 这是代码块中的Markdown标题

- 这是代码块中的列表项1
- 这是代码块中的列表项2

> 这是代码块中的引用

| 列1 | 列2 |
| --- | --- |
| 数据1 | 数据2 |
\`\`\`

### 4.2 代码块中包含围栏字符

\`\`\`\`
\`\`\`
这是代码块中的代码块
\`\`\`
\`\`\`\`

## 5. 复杂嵌套结构

### 5.1 多层嵌套列表中的混合内容

- 第一级列表项
  - 第二级列表项
    - 第三级列表项，包含代码块：
      \`\`\`javascript
      function nestedExample() {
        return '这是深度嵌套的代码';
      }
      \`\`\`
    - 另一个第三级列表项，包含表格：
      
      | 列1 | 列2 |
      | --- | --- |
      | 嵌套数据1 | 嵌套数据2 |
      
  - 另一个第二级列表项，包含引用：
    > 这是嵌套在列表中的引用。
    > 
    > 引用中包含代码：\`const y = 20;\`

### 5.2 表格、引用和列表的组合

> 这是一个包含表格的引用：
> 
> | 列1 | 列2 |
> | --- | --- |
> | 数据1 | 数据2 |
> | 数据3 | 数据4 |
> 
> 引用中的列表：
> 
> 1. 第一个列表项
>    - 嵌套的无序列表项
>    - 包含代码的列表项：\`const z = 30;\`
> 2. 第二个列表项

## 6. HTML和Markdown混合

### 6.1 HTML中嵌入Markdown

<div style="border: 1px solid #ccc; padding: 10px;">
  <h4>HTML容器中的Markdown内容</h4>
  <p>
    这里有一些<strong>加粗文本</strong>和<em>斜体文本</em>。
  </p>
  <p>
    下面是Markdown列表（但在HTML中不会被解析为Markdown）：
    - 列表项1
    - 列表项2
  </p>
  <pre><code>
  function htmlExample() {
    return 'HTML中的代码块';
  }
  </code></pre>
</div>

### 6.2 Markdown中嵌入HTML

这是普通的Markdown段落。

<table>
  <tr>
    <th>列1</th>
    <th>列2</th>
  </tr>
  <tr>
    <td>
      这个单元格包含Markdown格式的**粗体文本**（但可能不会被解析）
    </td>
    <td>
      这个单元格包含Markdown格式的*斜体文本*（但可能不会被解析）
    </td>
  </tr>
</table>

这是另一个普通的Markdown段落。

## 7. 数学公式与文本混合

### 7.1 行内公式与文本

这个段落包含行内数学公式 $E = mc^2$ 和更多文本。另一个公式 $F = ma$ 也在同一行。

### 7.2 块级公式与文本

下面是一个块级数学公式：

$$
\\frac{d}{dx}\\left( \\int_{a}^{x} f(u)\\,du\\right)=f(x)
$$

公式后面的文本段落。

### 7.3 列表中的数学公式

- 第一个列表项
- 包含行内公式 $a^2 + b^2 = c^2$ 的列表项
- 包含块级公式的列表项：
  $$
  \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}
  $$
- 最后一个列表项

## 8. 总结

这个文档包含了各种混合内容的情况，用于测试 Markdown 差异比较工具处理复杂混合内容的能力。`,sy=`# 混合内容测试（更新版）

## 1. 列表中嵌入其他元素

### 1.1 列表中嵌入代码块

- 第一个列表项（已修改）
- 第二个列表项，包含代码块：
  \`\`\`typescript
  // 更新为 TypeScript
  function example(): boolean {
    console.log('这是嵌入在列表中的代码块（已更新）');
    // 添加新的日志
    console.log('添加了类型注解');
    return true;
  }
  \`\`\`
- 第三个列表项
- 新增的第四个列表项，包含代码块：
  \`\`\`python
  def new_example():
      print("这是新增列表项中的Python代码块")
      return True
  \`\`\`

### 1.2 列表中嵌入表格

1. 第一个有序列表项（已修改）
2. 第二个有序列表项，包含表格：
   
   | 列1 | 列2 | 列3 | 新增列4 |
   | --- | --- | --- | --- |
   | 数据1 | 数据2 | 数据3 | 新数据A |
   | 数据4 | 数据5 | 数据6 | 新数据B |
   | 新行数据1 | 新行数据2 | 新行数据3 | 新数据C |
   
3. 第三个有序列表项
4. 新增的第四个有序列表项

### 1.3 列表中嵌入引用

- 第一个列表项
- 第二个列表项，包含引用：
  > 这是嵌入在列表项中的引用（已修改）。
  > 引用的第二行。
  > 
  > 引用的新增第三行。
- 第三个列表项
- 新增的列表项，包含嵌套引用：
  > 这是新增列表项中的引用。
  > 
  > > 这是嵌套的第二级引用。

### 1.4 列表中嵌入图片和链接

- 第一个列表项
- 第二个列表项，包含链接和图片：
  这是一个[更新后的链接](https://example.org)，这是一个更新后的图片：
  ![更新后的示例图片](https://example.org/updated-image.jpg)
  
  这是一个新增的链接：[新链接](https://example.com/new)
- 第三个列表项
- 新增的列表项，包含多个链接和图片：
  这里有多个链接：[链接1](https://example.com/1)、[链接2](https://example.com/2)
  
  这里有多个图片：
  ![图片1](https://example.com/image1.jpg)
  ![图片2](https://example.com/image2.jpg)

## 2. 引用中嵌入其他元素

### 2.1 引用中嵌入代码块

> 这是引用的第一行（已修改）。
> 
> \`\`\`python
> def example():
>     print("这是嵌入在引用中的代码块（已修改）")
>     # 添加新的注释
>     print("添加了新的输出")
>     return True
> \`\`\`
> 
> 这是引用的最后一行。
> 
> 新增的引用行，包含行内代码：\`const newVar = 'added';\`

### 2.2 引用中嵌入列表

> 这是引用的第一行。
> 
> - 这是嵌入在引用中的列表项1（已修改）
> - 这是嵌入在引用中的列表项2
>   - 这是嵌套的列表项
>   - 这是新增的嵌套列表项
> - 这是嵌入在引用中的列表项3
> - 这是新增的列表项4
> 
> 这是引用的最后一行（已修改）。

### 2.3 引用中嵌入表格

> 这是引用的第一行。
> 
> | 列1 | 列2 | 列3 | 新增列4 |
> | --- | --- | --- | --- |
> | 数据1 | 数据2 | 数据3 | 新数据X |
> | 数据4 | 数据5 | 数据6 | 新数据Y |
> | 新行数据A | 新行数据B | 新行数据C | 新数据Z |
> 
> 这是引用的最后一行。
> 
> 新增的引用行。

### 2.4 嵌套引用中的混合内容

> 这是第一级引用（已修改）。
> 
> > 这是第二级引用，包含列表：
> > 
> > 1. 第一个列表项（已修改）
> > 2. 第二个列表项，包含代码：\`const x = 100;\`
> > 3. 第三个列表项
> > 4. 新增的第四个列表项
> > 
> > 新增的第二级引用内容。
> 
> 回到第一级引用。
> 
> > > 新增的第三级引用，包含代码块：
> > > \`\`\`javascript
> > > function nestedQuote() {
> > >   return '这是新增的嵌套引用中的代码';
> > > }
> > > \`\`\`

## 3. 表格中的复杂内容

### 3.1 表格中的格式化文本

| 标题 | 描述 | 示例 | 新增列 |
| --- | --- | --- | --- |
| 粗体和斜体 | 文本可以**加粗**或*倾斜*或***加粗倾斜*** | **重要信息**和*补充说明* | 新单元格 |
| 代码 | 可以包含\`行内代码\`和\`多个代码片段\` | \`const x = 100;\` | 新单元格 |
| 链接 | 可以包含[链接](https://example.org)和[多个链接](https://example.com/new) | 点击[这里](https://example.org)查看详情 | 新单元格 |
| 新增行 | 包含**格式化**的*文本* | \`const newRow = true;\` | 新单元格 |

### 3.2 表格中的列表

| 类型 | 内容 | 备注 | 新增列 |
| --- | --- | --- | --- |
| 无序列表 | <ul><li>项目1（已修改）</li><li>项目2</li><li>项目3</li><li>新增项目4</li></ul> | 使用HTML标签 | 新单元格 |
| 有序列表 | <ol><li>第一步（已修改）</li><li>第二步</li><li>第三步</li><li>新增第四步</li></ol> | 使用HTML标签 | 新单元格 |
| 新增类型 | <ul><li>新列表项A</li><li>新列表项B</li></ul> | 新备注 | 新单元格 |

## 4. 代码块中的特殊情况

### 4.1 代码块中包含Markdown语法

\`\`\`markdown
# 这是代码块中的Markdown标题（已修改）

- 这是代码块中的列表项1（已修改）
- 这是代码块中的列表项2
- 这是代码块中的新增列表项3

> 这是代码块中的引用（已修改）
> 
> 这是引用中的新行

| 列1 | 列2 | 新增列3 |
| --- | --- | --- |
| 数据1 | 数据2 | 新数据 |
| 新行数据1 | 新行数据2 | 新行数据3 |
\`\`\`

### 4.2 代码块中包含围栏字符

\`\`\`\`
\`\`\`
这是代码块中的代码块（已修改）

// 新增的注释
const newVar = 'added';
\`\`\`

\`\`\`javascript
// 新增的第二个代码块
function anotherExample() {
  return '这是新增的代码块';
}
\`\`\`
\`\`\`\`

## 5. 复杂嵌套结构

### 5.1 多层嵌套列表中的混合内容

- 第一级列表项（已修改）
  - 第二级列表项（已修改）
    - 第三级列表项，包含代码块：
      \`\`\`typescript
      // 更新为 TypeScript
      function nestedExample(): string {
        console.log('添加了日志');
        return '这是深度嵌套的代码（已修改）';
      }
      \`\`\`
    - 另一个第三级列表项，包含表格：
      
      | 列1 | 列2 | 新增列3 |
      | --- | --- | --- |
      | 嵌套数据1 | 嵌套数据2 | 新数据X |
      | 新行数据A | 新行数据B | 新数据Y |
      
    - 新增的第三级列表项，包含引用：
      > 这是新增的嵌套引用
  - 另一个第二级列表项，包含引用：
    > 这是嵌套在列表中的引用（已修改）。
    > 
    > 引用中包含代码：\`const y = 200;\`
    > 
    > 新增的引用行。
  - 新增的第二级列表项，包含代码块：
    \`\`\`python
    def new_nested_function():
        return "这是新增的嵌套代码块"
    \`\`\`

### 5.2 表格、引用和列表的组合

> 这是一个包含表格的引用（已修改）：
> 
> | 列1 | 列2 | 新增列3 |
> | --- | --- | --- |
> | 数据1 | 数据2 | 新数据P |
> | 数据3 | 数据4 | 新数据Q |
> | 新行数据X | 新行数据Y | 新数据R |
> 
> 引用中的列表：
> 
> 1. 第一个列表项（已修改）
>    - 嵌套的无序列表项
>    - 包含代码的列表项：\`const z = 300;\`
>    - 新增的嵌套列表项
> 2. 第二个列表项
> 3. 新增的第三个列表项

## 6. HTML和Markdown混合

### 6.1 HTML中嵌入Markdown

<div style="border: 1px solid #ccc; padding: 10px; border-radius: 5px;">
  <h4>HTML容器中的Markdown内容（已修改）</h4>
  <p>
    这里有一些<strong>加粗文本</strong>、<em>斜体文本</em>和<span style="color: blue;">彩色文本</span>。
  </p>
  <p>
    下面是Markdown列表（但在HTML中不会被解析为Markdown）：
    - 列表项1（已修改）
    - 列表项2
    - 新增列表项3
  </p>
  <pre><code>
  function htmlExample() {
    console.log("添加了日志");
    return 'HTML中的代码块（已修改）';
  }
  </code></pre>
  <p>
    新增的段落。
  </p>
</div>

### 6.2 Markdown中嵌入HTML

这是普通的Markdown段落（已修改）。

<table>
  <tr>
    <th>列1</th>
    <th>列2</th>
    <th>新增列3</th>
  </tr>
  <tr>
    <td>
      这个单元格包含Markdown格式的**粗体文本**（但可能不会被解析）（已修改）
    </td>
    <td>
      这个单元格包含Markdown格式的*斜体文本*（但可能不会被解析）
    </td>
    <td>
      这是新增的单元格
    </td>
  </tr>
  <tr>
    <td colspan="3">
      这是新增的跨列单元格
    </td>
  </tr>
</table>

这是另一个普通的Markdown段落（已修改）。

## 7. 数学公式与文本混合

### 7.1 行内公式与文本

这个段落包含行内数学公式 $E = mc^2$ 和更多文本（已修改）。另一个公式 $F = ma$ 也在同一行。新增的公式 $P = IV$ 也在这里。

### 7.2 块级公式与文本

下面是一个块级数学公式（已修改）：

$$
\\frac{d}{dx}\\left( \\int_{a}^{x} f(u)\\,du\\right)=f(x)
$$

公式后面的文本段落（已修改）。

下面是新增的块级公式：

$$
\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}
$$

### 7.3 列表中的数学公式

- 第一个列表项（已修改）
- 包含行内公式 $a^2 + b^2 = c^2$ 的列表项（已修改）
- 包含块级公式的列表项：
  $$
  \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}
  $$
- 最后一个列表项
- 新增的包含公式 $E = hf$ 的列表项

## 8. 总结

这个文档包含了各种混合内容的情况，用于测试 Markdown 差异比较工具处理复杂混合内容的能力。文档已经过更新，包含了多处修改、添加和删除内容，以测试差异比较功能的效果。

## 9. 新增：极端混合情况

### 9.1 多层嵌套的混合内容

> 这是一个包含列表的引用：
> 
> 1. 第一个列表项，包含表格：
>    
>    | A | B | C |
>    |---|---|---|
>    | 1 | 2 | 3 |
>    
>    列表项中表格后的文本。
> 
> 2. 第二个列表项，包含代码块和嵌套引用：
>    \`\`\`javascript
>    function complexNesting() {
>      return '这是复杂嵌套中的代码';
>    }
>    \`\`\`
>    
>    > 这是列表项中的嵌套引用。
>    > 
>    > \`\`\`python
>    > def more_nesting():
>    >     return "更深层次的嵌套"
>    > \`\`\`
>    > 
>    > 1. 嵌套引用中的列表
>    > 2. 包含 $E = mc^2$ 公式的列表项

### 9.2 HTML、表格和代码的混合

<div style="border: 1px solid #ccc; padding: 10px;">
  <h4>复杂混合示例</h4>
  <table>
    <tr>
      <th>类型</th>
      <th>内容</th>
    </tr>
    <tr>
      <td>代码</td>
      <td>
        <pre><code>function mixedContent() {
  return 'HTML表格中的代码';
}</code></pre>
      </td>
    </tr>
    <tr>
      <td>Markdown</td>
      <td>
        <ul>
          <li>HTML中的列表项1</li>
          <li>包含<code>行内代码</code>的列表项</li>
          <li>包含<strong>加粗</strong>和<em>斜体</em>的列表项</li>
        </ul>
      </td>
    </tr>
  </table>
</div>`,cy=`# 流浪猫观察笔记

小区东门的花坛旁住着一群流浪猫，大概七八只的样子。
领头的是一只橘白相间的大胖橘，脸盘子比我拳头还大，走起路来肚子左右摇摆，气势十足。
每天傍晚六点准时出现在花坛边的长椅下，等投喂的阿姨来送晚饭。
这群猫在这个小区已经待了至少三年，从最初的三四只慢慢壮大到现在的规模，俨然已经把花坛当成了永久领地。
物业的保安大叔对它们睁一只眼闭一只眼，偶尔还会偷偷从食堂带剩饭出来。

## 第一天：初次相遇

搬到这个小区的第一个傍晚，下楼扔垃圾的时候在花坛旁看到了大胖橘。
它正大大方方地蹲在长椅上舔爪子，看到我走过来也不躲，只是抬头瞥了我一眼，那眼神仿佛在说"你谁啊"。
旁边还有一只黑猫，整个缩在灌木丛的阴影里，只露出两只发光的眼睛。
当时天色已暗，差点没把我吓一跳。

花坛旁边的告示栏上贴着一张手写的纸条："请文明投喂流浪猫，投喂后请清理现场。——爱猫邻居联盟"。
看来这群猫的投喂体系已经相当成熟了。
纸条的边角有些卷翘，旁边还用透明胶贴了一张猫的照片，拍的正是大胖橘那张圆滚滚的大脸，配文写着"本区区长"。

## 第三天：认识更多成员

花坛旁的黑猫是个十足的胆小鬼，人一靠近三米就窜进灌木丛里藏起来。
但它和大胖橘关系不错，经常看到两只猫挤在同一个纸箱里打盹。
黑猫的毛色纯得像墨汁，只有胸口有一小撮白毛，辨识度极高。
每次蹲下来叫它，它就歪着头看你，眼睛圆溜溜的，但你一伸手它立刻就跑。

三花猫比较独来独往，喜欢蹲在停车场的引擎盖上晒太阳，偶尔甩甩尾巴赶苍蝇，一副生人勿近的架势。
三花猫的领地意识特别强，其他猫靠近停车场那一排车的时候，它会弓着背发出低沉的咕噜声示警。
不过它对大胖橘倒是网开一面，大概是承认了老大的地位。

## 第五天：新成员加入

小区北边的草丛里发现了一只纯白长毛猫，看起来像是走丢的家猫，毛发虽然有些打结但还算干净。
白猫性格温顺得不像流浪猫，有人蹲下来它甚至会主动凑过来蹭腿。
投喂群里有人发了它的照片问有没有人认识，暂时还没得到回应。

白猫融入群体的过程并不顺利，刚来的头几天被大胖橘追着跑了好几次，后来才勉强被接纳到外围。
它现在的固定位置是花坛东侧的矮墙上，和核心纸箱区保持着五六米的安全距离。
喂食的时候它会等大家都吃完了才小步跑过来，连吃东西都是小口小口的，跟胖橘那种土匪式吃法形成鲜明对比。

## 第七天：首次喂食

周二傍晚放了两罐猫粮和一碟清水。
大胖橘第一个冲过来，吃相极其豪放，整个脑袋埋进碗里发出呼噜呼噜的声响。
黑猫等胖橘吃到一半才敢靠近，从侧面小心翼翼地舔几口。
三花猫全程蹲在三米外冷眼观望，等所有猫散了才慢悠悠踱过去收拾残局。

投喂的张阿姨后来跟我说，喂猫也是有讲究的。
不能放太多，不然吃不完会招来蟑螂和蚂蚁；也不能放太少，不然猫之间会抢得更凶。
她还说猫粮要选无谷的，有几只猫肠胃不好，吃了含谷物的粮会拉肚子。
这些经验都是这几年一点点摸索出来的。

## 第十天：猫间政治

还有两只奶牛猫，花色几乎一模一样，我怀疑是同一窝的兄弟。
它们总是形影不离地出现，吃饭也要并排吃，睡觉也要靠在一起，偶尔还会互相舔毛。
这两只猫的胆子介于黑猫和三花猫之间，不会主动靠近人，但也不至于看到人就跑。

观察了几天之后发现这群猫有一套很清晰的等级制度。
大胖橘是毫无疑问的老大，吃饭第一个吃，晒太阳占最好的位置，走路的时候其他猫都会让道。
三花猫是二号人物，享有停车场区域的独占权。
奶牛猫兄弟算是中层，有自己的固定活动范围但不会越界。
黑猫和白猫是最底层，永远在边缘徘徊。

## 第十四天：趣事记录

上周三亲眼目睹了一场精彩的猫鸟大战。
一只不知天高地厚的喜鹊落在花坛边上啄食掉落的猫粮，被大胖橘发现了。
大胖橘以一种完全不匹配其体型的速度弹射出去，喜鹊惊叫一声飞走了，但大胖橘扑了个空，整只猫滑出去半米远，场面滑稽至极。

奶牛猫兄弟有个很有趣的习惯：每天清晨会在花坛边上演追逐赛，一只追一只跑，绕着花坛转圈圈。
跑累了就趴在地上喘气，休息两分钟接着追。
早起遛弯的居民都习惯了这个固定节目，有人甚至专门绕路来看。
二号楼的王大爷说他每天六点准时来看猫跑步，比看奥运会都有意思。

昨天还看到一幕特别逗的场景：黑猫好不容易鼓起勇气跳上了花坛边的矮墙，正准备享受一下高处的风景。
结果三花猫从另一边跳上来，两只猫面对面僵持了大约十秒钟。
最后黑猫认怂跳了下去，三花猫优雅地卧下来开始洗脸。
权力的游戏，猫版。

## 第二十一天：邻里关系

周末试着改用湿粮罐头，效果出奇地好。
平时不怎么露面的几只猫闻到味道也纷纷冒了出来，最多的时候花坛旁围了九只猫，场面颇为壮观。
不过这也引来了隔壁单元一位住户的不满，说猫聚集太多影响环境卫生。
投喂的阿姨承诺每次喂完都会清理现场，总算暂时平息了矛盾。

后来在业主群里还因为这事儿吵了一架。
反对派觉得流浪猫有跳蚤、叫声扰民、到处拉屎；支持派觉得猫是小区的一部分，善待动物是基本素质。
最后物业出面调停，划了一块专门的投喂区域，算是各退一步。
不过大胖橘似乎并不买账，依然我行我素地占据着花坛最中间的位置。

## 季节变化

入秋之后猫们明显开始扎堆了，原来各占一方的几只猫纷纷抱团取暖。
花坛旁的纸箱已经不够用了，打算周末去超市多搜罗几个大纸箱，再垫上旧毛毯。
希望它们能顺利过冬，明年春天继续在花坛边晒太阳打哈欠。

去年冬天最冷的那几天，有好心人在花坛旁边搭了一个简易猫屋，用泡沫箱做的，外面裹了一层防水布。
大胖橘第一个入住，黑猫紧随其后，两只猫挤在一个泡沫箱里，画面又温馨又好笑。
今年准备再做几个，争取让每只猫都有自己的过冬小屋。

投喂群里的邻居们已经开始筹划今年的冬季保暖方案了。
有人提议买加热垫放进猫屋里，有人说可以用旧棉被裁成小块塞进纸箱里，还有人打算去宠物医院咨询一下社区TNR项目的事。
这群猫虽然是流浪的，但好在遇上了一群靠谱的铲屎官，日子过得倒也不算太糟。
`,fy=`# 流浪猫观察笔记

小区东门的花坛旁住着一群流浪猫，大概七八只的样子。
领头的是一只橘白相间的大胖橘，脸盘子比我拳头还大，走起路来肚子左右摇摆，气势十足。
每天傍晚六点准时出现在花坛边的长椅下，等投喂的阿姨来送晚饭。
这群猫在这个小区已经待了至少三年，从最初的三四只慢慢壮大到现在的规模，俨然已经把花坛当成了永久领地。
物业的保安大叔对它们睁一只眼闭一只眼，偶尔还会偷偷从食堂带剩饭出来。

## 第一天：初次相遇

搬到这个小区的第一个傍晚，下楼扔垃圾的时候在花坛旁看到了大胖橘。
它正大大方方地蹲在长椅上舔爪子，看到我走过来也不躲，只是抬头瞥了我一眼，那眼神仿佛在说"你谁啊"。
旁边还有一只黑猫，整个缩在灌木丛的阴影里，只露出两只发光的眼睛。
当时天色已暗，差点没把我吓一跳。

花坛旁边的告示栏上贴着一张手写的纸条："请文明投喂流浪猫，投喂后请清理现场。——爱猫邻居联盟"。
看来这群猫的投喂体系已经相当成熟了。
纸条的边角有些卷翘，旁边还用透明胶贴了一张猫的照片，拍的正是大胖橘那张圆滚滚的大脸，配文写着"本区区长"。

## 第三天：认识更多成员

花坛旁的黑猫是个十足的胆小鬼，人一靠近三米就窜进灌木丛里藏起来。
但它和大胖橘关系不错，经常看到两只猫挤在同一个纸箱里打盹。
黑猫的毛色纯得像墨汁，只有胸口有一小撮白毛，辨识度极高。
每次蹲下来叫它，它就歪着头看你，眼睛圆溜溜的，但你一伸手它立刻就跑。

三花猫比较独来独往，喜欢蹲在停车场的引擎盖上晒太阳，偶尔甩甩尾巴赶苍蝇，一副生人勿近的架势。
三花猫的领地意识特别强，其他猫靠近停车场那一排车的时候，它会弓着背发出低沉的咕噜声示警。
不过它对大胖橘倒是网开一面，大概是承认了老大的地位。

## 第五天：新成员加入

小区北边的草丛里发现了一只纯白长毛猫，看起来像是走丢的家猫，毛发虽然有些打结但还算干净。
白猫性格温顺得不像流浪猫，有人蹲下来它甚至会主动凑过来蹭腿。
投喂群里有人发了它的照片问有没有人认识，暂时还没得到回应。

白猫融入群体的过程并不顺利，刚来的头几天被大胖橘追着跑了好几次，后来才勉强被接纳到外围。
它现在的固定位置是花坛东侧的矮墙上，和核心纸箱区保持着五六米的安全距离。
喂食的时候它会等大家都吃完了才小步跑过来，连吃东西都是小口小口的，跟胖橘那种土匪式吃法形成鲜明对比。

## 第七天：首次喂食

周二傍晚放了三罐猫粮和一碟羊奶。
大胖橘第一个冲过来，吃相极其豪放，整个脑袋埋进碗里发出呼噜呼噜的声响。
黑猫等胖橘吃到一半才敢靠近，从侧面小心翼翼地舔几口。
三花猫全程蹲在三米外冷眼观望，等所有猫散了才慢悠悠踱过去收拾残局。

投喂的张阿姨后来跟我说，喂猫也是有讲究的。
不能放太多，不然吃不完会招来蟑螂和蚂蚁；也不能放太少，不然猫之间会抢得更凶。
她还说猫粮要选无谷的，有几只猫肠胃不好，吃了含谷物的粮会拉肚子。
这些经验都是这几年一点点摸索出来的。

## 第十天：猫间政治

还有两只奶牛猫，花色几乎一模一样，我怀疑是同一窝的兄弟。
它们总是形影不离地出现，吃饭也要并排吃，睡觉也要靠在一起，偶尔还会互相舔毛。
这两只猫的胆子介于黑猫和三花猫之间，不会主动靠近人，但也不至于看到人就跑。

观察了几天之后发现这群猫有一套很清晰的等级制度。
大胖橘是毫无疑问的老大，吃饭第一个吃，晒太阳占最好的位置，走路的时候其他猫都会让道。
三花猫是二号人物，享有停车场区域的独占权。
奶牛猫兄弟算是中层，有自己的固定活动范围但不会越界。
黑猫和白猫是最底层，永远在边缘徘徊。

## 第十四天：趣事记录

上周三亲眼目睹了一场精彩的猫鸟大战。
一只不知天高地厚的喜鹊落在花坛边上啄食掉落的猫粮，被大胖橘发现了。
大胖橘以一种完全不匹配其体型的速度弹射出去，喜鹊惊叫一声飞走了，但大胖橘扑了个空，整只猫滑出去半米远，场面滑稽至极。

奶牛猫兄弟有个很有趣的习惯：每天清晨会在花坛边上演追逐赛，一只追一只跑，绕着花坛转圈圈。
跑累了就趴在地上喘气，休息两分钟接着追。
早起遛弯的居民都习惯了这个固定节目，有人甚至专门绕路来看。
二号楼的王大爷说他每天六点准时来看猫跑步，比看奥运会都有意思。

昨天还看到一幕特别逗的场景：黑猫好不容易鼓起勇气跳上了花坛边的矮墙，正准备享受一下高处的风景。
结果三花猫从另一边跳上来，两只猫面对面僵持了大约十秒钟。
最后黑猫认怂跳了下去，三花猫优雅地卧下来开始洗脸。
权力的游戏，猫版。

## 第二十一天：邻里关系

周末试着改用湿粮罐头，效果出奇地好。
平时不怎么露面的几只猫闻到味道也纷纷冒了出来，最多的时候花坛旁围了九只猫，场面颇为壮观。
不过这也引来了隔壁单元一位住户的不满，说猫聚集太多影响环境卫生。
投喂的阿姨承诺每次喂完都会清理现场，总算暂时平息了矛盾。

后来在业主群里还因为这事儿吵了一架。
反对派觉得流浪猫有跳蚤、叫声扰民、到处拉屎；支持派觉得猫是小区的一部分，善待动物是基本素质。
最后物业出面调停，划了一块专门的投喂区域，算是各退一步。
不过大胖橘似乎并不买账，依然我行我素地占据着花坛最中间的位置。

## 季节变化

入秋之后猫们明显开始扎堆了，原来各占一方的几只猫纷纷抱团取暖。
花坛旁的纸箱已经不够用了，打算周末去超市多搜罗几个大纸箱，再垫上旧毛毯。
希望它们能顺利过冬，明年春天继续在花坛边晒太阳打哈欠。

去年冬天最冷的那几天，有好心人在花坛旁边搭了一个简易猫屋，用泡沫箱做的，外面裹了一层防水布。
大胖橘第一个入住，黑猫紧随其后，两只猫挤在一个泡沫箱里，画面又温馨又好笑。
今年准备再做几个，争取让每只猫都有自己的过冬小屋。

投喂群里的邻居们已经开始筹划今年的冬季保暖方案了。
有人提议买加热垫放进猫屋里，有人说可以用旧棉被裁成小块塞进纸箱里，还有人打算去宠物医院咨询一下社区TNR项目的事。
这群猫虽然是流浪的，但好在遇上了一群靠谱的铲屎官，日子过得倒也不算太糟。
`,dy=`# 奶茶店月度销量报告

## 概览

以下是小区楼下「半糖主义」奶茶店本月各饮品的销售数据。这家店开了快三年，从最初只有五种饮品发展到现在的完整菜单，靠的就是每月认真复盘销售数据、根据顾客反馈调整配方。老板娘说她每个月最期待的就是看这张表，比看银行流水还上头。

数据统计周期为本月1日至31日，包含堂食、外卖和小程序预定三个渠道的合计数据。好评率来自外卖平台和店内扫码评价的加权平均值。需要注意的是，外卖平台的好评率普遍偏高（因为差评有退款机制，很多人懒得评），所以店内扫码的评价更有参考价值。

本月有两个特殊节点值得关注：中秋节当天单日销量破了200杯的记录（平时日均158杯），其中杨枝甘露贡献了接近四分之一；月末连续三天阴雨导致外卖订单激增，但骑手运力不足造成了不少超时差评。

## 饮品销售明细

| 饮品名称 | 杯数 | 单价（元） | 营收（元） | 好评率 |
| --- | --- | --- | --- | --- |
| 杨枝甘露 | 823 | 18 | 14814 | 96% |
| 芋泥波波奶茶 | 647 | 16 | 10352 | 91% |
| 生椰拿铁 | 912 | 15 | 13680 | 94% |
| 多肉葡萄 | 534 | 19 | 10146 | 88% |
| 红豆奶绿 | 389 | 12 | 4668 | 85% |
| 桂花酒酿拿铁 | 278 | 17 | 4726 | 93% |
| 芒果酸奶昔 | 461 | 14 | 6454 | 90% |
| 黑糖珍珠鲜奶 | 705 | 13 | 9165 | 92% |

其中杨枝甘露和生椰拿铁长期占据销量前两名，属于"镇店双雄"级别的存在。生椰拿铁的成功秘诀在于用了现萃的椰浆而不是罐装椰奶，口感更清爽也更健康，这个细节被不少回头客在评价里反复提到。

桂花酒酿拿铁是上个月刚推出的新品，虽然杯数还不高，但好评率93%说明产品力没问题，需要的是更多曝光和推广。已经和外卖平台谈好了下个月的首页推荐位，预计曝光量能翻三倍。芒果酸奶昔的销量比预期低，可能跟本月连续下了两周雨有关——天冷的时候没人想喝冰的酸奶。

红豆奶绿的好评率只有85%，是所有饮品中最低的。查看具体评价发现主要吐槽集中在两点：一是红豆煮得不够软糯，二是甜度偏高。已经通知后厨下个月调整红豆的浸泡和煮制时间，同时把默认糖度从七分降到五分。

黑糖珍珠鲜奶作为唯一一个三年没改过配方的经典款，销量一直稳定在700杯左右，是最省心的产品线。珍珠是每天早上现煮的，下午三点前卖完为止——这个"限量"反而成了卖点。

## 季度汇总

下表是最近三个月的整体经营数据汇总，用于观察大趋势。

| 月份 | 总杯数 | 总营收（元） | 日均杯数 | 平均好评率 |
| --- | --- | --- | --- | --- |
| 七月 | 4238 | 68540 | 137 | 91% |
| 八月 | 4612 | 73200 | 149 | 92% |
| 九月 | 4749 | 74005 | 158 | 91% |

从季度数据可以看出，总杯数逐月增长，但增速在放缓——七月到八月增长了374杯（+8.8%），八月到九月只增长了137杯（+3.0%）。日均杯数从137提升到158，说明客流稳步上升，但天花板可能快到了，毕竟小区就这么大，附近三百米内还开了两家竞品。

平均好评率稳定在91%-92%之间，没有明显波动，品控做得不错。九月略微回落到91%主要是被红豆奶绿拖了后腿，以及月末阴雨天外卖超时带来的差评。

营收方面，九月总营收74005元比八月只多了805元，增幅不到1.1%。杯数涨了但营收没跟上，说明消费者在往低价产品偏移——红豆奶绿（12元）和黑糖珍珠鲜奶（13元）这两个低价款的占比在上升。

## 结论

生椰拿铁依然是销量冠军，杨枝甘露紧随其后。红豆奶绿销量偏低，建议考虑调整配方或推出限时优惠。黑糖珍珠鲜奶作为经典款表现稳定，是利润率最高的单品——原料成本只有售价的22%，比杨枝甘露的35%低了不少。

下个月计划推出"热饮季"菜单，预计桂花酒酿拿铁的热饮版本会成为新的爆款，毕竟秋冬季节暖手的需求比解渴强烈得多。同时计划上线一款"红枣桂圆奶茶"作为季节限定，目标定价16元，首周买一送一引流。
`,py=`# 奶茶店月度销量报告

## 概览

以下是小区楼下「半糖主义」奶茶店本月各饮品的销售数据。这家店开了快三年，从最初只有五种饮品发展到现在的完整菜单，靠的就是每月认真复盘销售数据、根据顾客反馈调整配方。老板娘说她每个月最期待的就是看这张表，比看银行流水还上头。

数据统计周期为本月1日至31日，包含堂食、外卖和小程序预定三个渠道的合计数据。好评率来自外卖平台和店内扫码评价的加权平均值。需要注意的是，外卖平台的好评率普遍偏高（因为差评有退款机制，很多人懒得评），所以店内扫码的评价更有参考价值。

本月有两个特殊节点值得关注：中秋节当天单日销量破了200杯的记录（平时日均158杯），其中杨枝甘露贡献了接近四分之一；月末连续三天阴雨导致外卖订单激增，但骑手运力不足造成了不少超时差评。

## 饮品销售明细

| 饮品名称 | 杯数 | 单价（元） | 营收（元） | 好评率 |
| --- | --- | --- | --- | --- |
| 杨枝甘露 | 823 | 18 | 14814 | 96% |
| 芋泥波波奶茶 | 702 | 16 | 10352 | 91% |
| 生椰拿铁 | 912 | 15 | 13680 | 97% |
| 多肉葡萄 | 534 | 19 | 10716 | 88% |
| 红豆奶绿 | 389 | 12 | 4668 | 85% |
| 桂花酒酿拿铁 | 278 | 17 | 4726 | 93% |
| 芒果酸奶昔 | 461 | 14 | 6454 | 90% |
| 黑糖珍珠鲜奶 | 705 | 13 | 9165 | 92% |

其中杨枝甘露和生椰拿铁长期占据销量前两名，属于"镇店双雄"级别的存在。生椰拿铁的成功秘诀在于用了现萃的椰浆而不是罐装椰奶，口感更清爽也更健康，这个细节被不少回头客在评价里反复提到。

桂花酒酿拿铁是上个月刚推出的新品，虽然杯数还不高，但好评率93%说明产品力没问题，需要的是更多曝光和推广。已经和外卖平台谈好了下个月的首页推荐位，预计曝光量能翻三倍。芒果酸奶昔的销量比预期低，可能跟本月连续下了两周雨有关——天冷的时候没人想喝冰的酸奶。

红豆奶绿的好评率只有85%，是所有饮品中最低的。查看具体评价发现主要吐槽集中在两点：一是红豆煮得不够软糯，二是甜度偏高。已经通知后厨下个月调整红豆的浸泡和煮制时间，同时把默认糖度从七分降到五分。

黑糖珍珠鲜奶作为唯一一个三年没改过配方的经典款，销量一直稳定在700杯左右，是最省心的产品线。珍珠是每天早上现煮的，下午三点前卖完为止——这个"限量"反而成了卖点。

## 季度汇总

下表是最近三个月的整体经营数据汇总，用于观察大趋势。

| 月份 | 总杯数 | 总营收（元） | 日均杯数 | 平均好评率 |
| --- | --- | --- | --- | --- |
| 七月 | 4238 | 68540 | 137 | 91% |
| 八月 | 4612 | 73200 | 149 | 92% |
| 九月 | 4749 | 74005 | 158 | 91% |

从季度数据可以看出，总杯数逐月增长，但增速在放缓——七月到八月增长了374杯（+8.8%），八月到九月只增长了137杯（+3.0%）。日均杯数从137提升到158，说明客流稳步上升，但天花板可能快到了，毕竟小区就这么大，附近三百米内还开了两家竞品。

平均好评率稳定在91%-92%之间，没有明显波动，品控做得不错。九月略微回落到91%主要是被红豆奶绿拖了后腿，以及月末阴雨天外卖超时带来的差评。

营收方面，九月总营收74005元比八月只多了805元，增幅不到1.1%。杯数涨了但营收没跟上，说明消费者在往低价产品偏移——红豆奶绿（12元）和黑糖珍珠鲜奶（13元）这两个低价款的占比在上升。

## 结论

生椰拿铁依然是销量冠军，杨枝甘露紧随其后。红豆奶绿销量偏低，建议考虑调整配方或推出限时优惠。黑糖珍珠鲜奶作为经典款表现稳定，是利润率最高的单品——原料成本只有售价的22%，比杨枝甘露的35%低了不少。

下个月计划推出"热饮季"菜单，预计桂花酒酿拿铁的热饮版本会成为新的爆款，毕竟秋冬季节暖手的需求比解渴强烈得多。同时计划上线一款"红枣桂圆奶茶"作为季节限定，目标定价16元，首周买一送一引流。
`,hy=`# 周末露营装备清单

## 前言

这次露营选在千岛湖边上的一个野营地，三面环水一面靠山，风景绝佳但配套设施基本为零——没有电、没有自来水、手机信号时有时无。所以装备必须自给自足，漏带一样东西就可能让整趟旅行的体验断崖式下跌。

以下清单是经过三次露营踩坑后总结出来的"最小可行装备集"，每一项都是真金白银（和惨痛教训）换来的经验。装备按重要程度排序，最上面的是"忘了就回家"级别，越往下越属于"有更好、没也行"。

上次去莫干山那次最惨，老张忘了带帐篷杆，三个人对着一堆帐篷布面面相觑，最后用树枝和绳子搭了个四不像，半夜塌了两次，阿伟直接睡车里了。所以这次的清单必须逐项确认、责任到人，谁负责的东西谁检查，出了问题别怪队友。

再上一次去天目山也好不到哪去：小李负责的保温箱忘了提前冰冻冰袋，结果到了营地打开一看，啤酒是温的、西瓜是热的，大家只好把瓶子泡在溪水里等了一小时才勉强凉下来。这种"装备带了但没用对"的坑比"忘带"更气人。

## 装备列表

| 装备名称 | 数量 | 预算（元） | 负责人 | 备注 |
| --- | --- | --- | --- | --- |
| 四人帐篷 | 1 | 580 | 老张 | 上次借的那顶，别忘了还 |
| 折叠桌椅 | 1套 | 200 | 小李 | 自带的，不用买 |
| 卡式炉 | 1 | 120 | 阿伟 | 带两罐气罐 |
| 充气床垫 | 3 | 450 | 老张 | 睡地上的勇士请自便 |
| 冰箱保温箱 | 1 | 160 | 小李 | 装啤酒和西瓜用 |
| 急救包 | 1 | 85 | 阿伟 | 创可贴、碘伏、防蚊液 |
| 垃圾袋 | 1卷 | 10 | 小李 | 带走所有垃圾，文明露营 |
| 移动电源 | 2 | 0 | 各自 | 至少20000mAh，手机续命用 |

预算合计大约1600元，三个人平摊每人不到550。已有装备不计入预算，实际花费会更少。老张负责大件，小李管后勤物资，阿伟搞定炊具和安全——分工明确才不会到了营地发现三个人都带了椅子但没人带锅。

## 食材计划

第一顿晚餐做烧烤，提前腌好鸡翅和羊肉串，到了直接上炉子。牛肉用洋葱和黑胡椒腌过夜最香，鸡翅用可乐和生抽腌四小时以上才入味。蔬菜带些玉米、茄子、韭菜，用锡纸包着烤省事又好吃。

第二天早餐煮面条配午餐肉和鸡蛋，简单省事。中午如果还没撤营就做个火锅——卡式炉配小锅，底料用海底捞自热火锅那种现成的，食材头天晚上在城里买好装保鲜袋带过去。

饮料方面，啤酒12罐、矿泉水一箱、可乐一箱，全部提前冻成冰块丢进保温箱。到了营地保温箱就是天然冰箱，啤酒拿出来冰凉透心，比便利店的还爽。另外带一壶凉白开泡茶用，野外喝茶看星星是露营的终极享受。

## 注意事项

- 出发前一天检查帐篷有没有破洞，上次老张的帐篷漏雨三个人挤一顶的惨剧不能重演
- 气罐不能托运也不能放后备箱暴晒，走之前放到车内阴凉处
- 充气床垫记得带充气泵，上次用嘴吹的那位现在还在被嘲笑
- 营地没有路灯，天黑之后去上厕所全靠手电，建议提前踩点确认路线
- 食材提前在城里买好切好装保鲜袋，到了营地直接下锅，省时间也省清洗餐具的麻烦
- 防蚊液一定要带，湖边的蚊子个头跟轰炸机似的，不涂药出去五分钟能被咬十几个包
- 离开营地时检查一遍有没有遗漏垃圾，野营地没有保洁阿姨，你留下的垃圾就会一直在那里
- 车停好之后记下位置，晚上黑灯瞎火的找不到车很尴尬

## 备注

以上清单按周六出发前备齐，超预算的自己补差价。临时加购的东西在群里报备一声，避免重复购买。老张的车后备箱空间有限，大件装备优先塞，零碎的东西各自背包带。

周五晚上九点前所有人把自己负责的装备拍照发群里确认，十点前统一装车。周六早上七点出发，预计十点到营地，趁上午凉快把帐篷和天幕搭好，中午开始享受。
`,my=`# 周末露营装备清单

## 前言

这次露营选在千岛湖边上的一个野营地，三面环水一面靠山，风景绝佳但配套设施基本为零——没有电、没有自来水、手机信号时有时无。所以装备必须自给自足，漏带一样东西就可能让整趟旅行的体验断崖式下跌。

以下清单是经过三次露营踩坑后总结出来的"最小可行装备集"，每一项都是真金白银（和惨痛教训）换来的经验。装备按重要程度排序，最上面的是"忘了就回家"级别，越往下越属于"有更好、没也行"。

上次去莫干山那次最惨，老张忘了带帐篷杆，三个人对着一堆帐篷布面面相觑，最后用树枝和绳子搭了个四不像，半夜塌了两次，阿伟直接睡车里了。所以这次的清单必须逐项确认、责任到人，谁负责的东西谁检查，出了问题别怪队友。

再上一次去天目山也好不到哪去：小李负责的保温箱忘了提前冰冻冰袋，结果到了营地打开一看，啤酒是温的、西瓜是热的，大家只好把瓶子泡在溪水里等了一小时才勉强凉下来。这种"装备带了但没用对"的坑比"忘带"更气人。

## 装备列表

| 装备名称 | 数量 | 预算（元） | 负责人 | 备注 |
| --- | --- | --- | --- | --- |
| 四人帐篷 | 1 | 580 | 老张 | 上次借的那顶，别忘了还 |
| 折叠桌椅 | 1套 | 200 | 小李 | 自带的，不用买 |
| 充气床垫 | 3 | 450 | 老张 | 充气泵别又忘带了 |
| 冰箱保温箱 | 1 | 160 | 小李 | 装啤酒和西瓜用 |
| 急救包 | 1 | 85 | 阿伟 | 创可贴、碘伏、防蚊液 |
| 垃圾袋 | 1卷 | 10 | 小李 | 带走所有垃圾，文明露营 |
| 移动电源 | 2 | 0 | 各自 | 至少20000mAh，手机续命用 |
| 露营灯 | 2 | 90 | 阿伟 | 暖光款，别买那种刺眼的 |
| 天幕 | 1 | 320 | 老张 | 怕晒怕雨全靠它 |

预算合计大约1600元，三个人平摊每人不到550。已有装备不计入预算，实际花费会更少。老张负责大件，小李管后勤物资，阿伟搞定炊具和安全——分工明确才不会到了营地发现三个人都带了椅子但没人带锅。

## 食材计划

第一顿晚餐做烧烤，提前腌好鸡翅和羊肉串，到了直接上炉子。牛肉用洋葱和黑胡椒腌过夜最香，鸡翅用可乐和生抽腌四小时以上才入味。蔬菜带些玉米、茄子、韭菜，用锡纸包着烤省事又好吃。

第二天早餐煮面条配午餐肉和鸡蛋，简单省事。中午如果还没撤营就做个火锅——卡式炉配小锅，底料用海底捞自热火锅那种现成的，食材头天晚上在城里买好装保鲜袋带过去。

饮料方面，啤酒12罐、矿泉水一箱、可乐一箱，全部提前冻成冰块丢进保温箱。到了营地保温箱就是天然冰箱，啤酒拿出来冰凉透心，比便利店的还爽。另外带一壶凉白开泡茶用，野外喝茶看星星是露营的终极享受。

## 注意事项

- 出发前一天检查帐篷有没有破洞，上次老张的帐篷漏雨三个人挤一顶的惨剧不能重演
- 气罐不能托运也不能放后备箱暴晒，走之前放到车内阴凉处
- 充气床垫记得带充气泵，上次用嘴吹的那位现在还在被嘲笑
- 营地没有路灯，天黑之后去上厕所全靠手电，建议提前踩点确认路线
- 食材提前在城里买好切好装保鲜袋，到了营地直接下锅，省时间也省清洗餐具的麻烦
- 防蚊液一定要带，湖边的蚊子个头跟轰炸机似的，不涂药出去五分钟能被咬十几个包
- 离开营地时检查一遍有没有遗漏垃圾，野营地没有保洁阿姨，你留下的垃圾就会一直在那里
- 车停好之后记下位置，晚上黑灯瞎火的找不到车很尴尬

## 备注

以上清单按周六出发前备齐，超预算的自己补差价。临时加购的东西在群里报备一声，避免重复购买。老张的车后备箱空间有限，大件装备优先塞，零碎的东西各自背包带。

周五晚上九点前所有人把自己负责的装备拍照发群里确认，十点前统一装车。周六早上七点出发，预计十点到营地，趁上午凉快把帐篷和天幕搭好，中午开始享受。
`,gy=`# 火锅食材指南

火锅这门学问，三分在选材，七分在火候。很多人以为涮火锅就是把东西往锅里一扔等熟了捞出来，这种想法大错特错。每种食材的最佳涮煮时间精确到秒级，过了就老，早了就生，差之毫厘口感谬以千里。

以下是计算各类食材最佳涮煮时间的核心函数。它接收一组食材对象数组，每个对象包含名称、类型、切片厚度等属性，返回带有推荐涮煮时长和吃法提示的结果数组：

\`\`\`javascript
/**
 * 根据食材类别和物理属性，计算最佳涮煮时间
 * @param {Array} ingredients - 食材列表
 * @returns {Array} 涮煮方案列表
 */
function getHotpotCookingTime(ingredients) {
  if (!Array.isArray(ingredients)) {
    throw new TypeError('请传入食材数组，别把菜单直接扔进来');
  }

  const result = [];

  for (const item of ingredients) {
    if (!item.name || !item.type) {
      continue;
    }

    if (item.frozen && !item.thawed) {
      result.push({
        food: item.name,
        time: -1,
        tip: '请先解冻，冻货直接下锅会溅油',
      });
      continue;
    }

    let seconds = 60;
    if (item.type === '肉片') {
      seconds = item.sliceThick > 3 ? 90 : 30;
    } else if (item.type === '虾滑') {
      seconds = 120;
    } else if (item.type === '青菜') {
      seconds = 20;
    } else if (item.type === '毛肚') {
      seconds = 15;
    } else if (item.type === '豆腐') {
      seconds = item.firm ? 300 : 180;
    } else if (item.type === '菌菇') {
      seconds = 240;
    }

    const tip = seconds >= 60 ? '慢煮入味' : '七上八下';

    result.push({
      food: item.name,
      time: seconds,
      tip: tip,
      dipping: item.spicy ? '干碟海椒面' : '油碟蒜泥香菜',
    });
  }

  return result;
}
\`\`\`

该函数根据食材类别和切片厚度，自动计算推荐涮煮秒数并生成吃法提示。对于冷冻但未解冻的食材会给出警告，对于豆腐和菌菇等需要长时间炖煮的食材也有专门的时间设定。

实际使用时建议配合计时器调用，把返回结果渲染成倒计时卡片，这样涮火锅的时候就不用靠经验猜了——科学涮锅，精准到秒。
`,yy=`# 火锅食材指南

火锅这门学问，三分在选材，七分在火候。很多人以为涮火锅就是把东西往锅里一扔等熟了捞出来，这种想法大错特错。每种食材的最佳涮煮时间精确到秒级，过了就老，早了就生，差之毫厘口感谬以千里。

以下是计算各类食材最佳涮煮时间的核心函数。它接收一组食材对象数组，每个对象包含名称、类型、切片厚度等属性，返回带有推荐涮煮时长和吃法提示的结果数组：

\`\`\`javascript
/**
 * 根据食材类别和物理属性，计算最佳涮煮时间
 * @param {Array} ingredients - 食材列表
 * @returns {Array} 涮煮方案列表
 */
function getHotpotCookingTime(ingredients) {
  if (!Array.isArray(ingredients)) {
    throw new TypeError('请传入食材数组，别把菜单直接扔进来');
  }

  const output = [];

  for (const item of ingredients) {
    // 跳过信息不完整的食材
    if (!item.name || !item.type) {
      continue;
    }

    if (item.frozen && !item.thawed) {
      output.push({
        food: item.name,
        time: -1,
        tip: '请先解冻，冻货直接下锅会溅油',
      });
      continue;
    }

    let seconds = 60;
    if (item.type === '肉片') {
      seconds = item.sliceThick > 5 ? 90 : 30;
    } else if (item.type === '虾滑') {
      seconds = 120;
    } else if (item.type === '青菜') {
      seconds = 20;
    } else if (item.type === '毛肚') {
      seconds = 15;
    } else if (item.type === '豆腐') {
      seconds = item.firm ? 300 : 180;
    } else if (item.type === '菌菇') {
      seconds = 240;
    }

    const tip = seconds >= 60 ? '慢煮入味' : '七上八下';

    output.push({
      food: item.name,
      time: seconds,
      tip: tip,
      dipping: item.spicy ? '干碟海椒面' : '油碟蒜泥香菜',
      // 记录本次计算的时间戳
      calculatedAt: Date.now(),
    });
  }

  return output;
}
\`\`\`

该函数根据食材类别和切片厚度，自动计算推荐涮煮秒数并生成吃法提示。对于冷冻但未解冻的食材会给出警告，对于豆腐和菌菇等需要长时间炖煮的食材也有专门的时间设定。

实际使用时建议配合计时器调用，把返回结果渲染成倒计时卡片，这样涮火锅的时候就不用靠经验猜了——科学涮锅，精准到秒。
`,ky=`# 家庭菜谱

## 食材准备

去菜市场挑选新鲜的五花肉，选肥瘦相间、层次分明的那种，大约买一斤半（750克）就够了。好的五花肉用手指按下去能缓慢回弹，切面呈粉红色，闻起来没有任何异味。尽量选靠近肋排的那一段，这部分肥瘦比例最均匀，炖出来口感层次最丰富。千万别买那种纯白的肥膘或者全是瘦肉的部位，前者炖出来一嘴油腻，后者炖成木头渣子。

再买一把小葱（约50克）、一块老姜（30克左右，要选皮色暗黄、掰开丝多的老姜）和一整头大蒜（约8瓣）。老姜的选法有讲究：表皮干皱、颜色深黄的才是真正长了足够时间的老姜，那种表皮光滑水灵的是嫩姜，去腥效果差很多。大蒜要挑蒜瓣饱满、捏起来硬实的，发芽或者发软的已经不新鲜了。

调料方面需要生抽、老抽各一瓶，冰糖一小袋（黄冰糖比白冰糖好，炒出来的糖色更红亮）。如果家里没有料酒，顺路带一瓶花雕酒，去腥效果比普通料酒强三倍不止。八角两颗、桂皮一小段、香叶两片也别忘了，这三样是炖肉的灵魂伴侣。有人还喜欢加一点白胡椒粉提香，但这个看个人口味，不加也完全没问题。

五花肉回家后用清水浸泡半小时去血水，中间换两次水，直到水不再发红。泡的时候水温用常温就好，千万别用热水，热水会把蛋白质提前凝固，血水反而排不出来。浸泡完毕后捞出来用厨房纸巾把表面水分吸干，这样下锅煸炒的时候不容易溅油。

然后切成麻将大小的方块，大约3厘米见方，每一块都要带皮带肥带瘦。刀要磨快，钝刀切肉会把肉纤维挤碎，影响口感。切的时候找好肉的纹理方向，顺着纹理切出来的肉块炖完之后比较完整，不容易散。

葱切成5厘米长的段、姜切成2毫米厚的片、蒜拍扁但不要拍碎——拍碎了炖的时候会散在汤里，捞都捞不出来。这一步不能偷懒，肉块大小直接影响最后的口感，太大不入味，太小炖完就柴了。

切好的肉块冷水下锅焯一次水，水开后煮两分钟，撇去浮沫，捞出用温水冲洗干净。这一步叫"飞水"，目的是去掉血沫和杂质，让炖出来的汤汁清亮不浑浊。有人觉得焯水会损失鲜味所以跳过这步，结果就是炖出来的红烧肉表面一层灰色泡沫，卖相直接报废。

焯水用的锅和炖肉用的锅最好分开，焯水锅不用洗得太干净，反正下次焯水还是一样脏。焯完水的肉块放在盘子里晾着，趁这个空档把砂锅或铸铁锅拿出来洗干净擦干。

如果用砂锅，记得先用小火把锅身烘热，不然冷砂锅突然上大火容易炸裂——是真的会炸，别问我怎么知道的。铸铁锅没这个问题，冷锅热锅都能用，就是重得要命，单手端不动。不粘锅也凑合，但记得全程最小火，焖的时间多加二十分钟。铝锅就算了，长时间炖煮会有金属味。

案板、菜刀、漏勺、锅铲都提前摆好，开火之后就没空翻抽屉找工具了。如果你是第一次做红烧肉，建议先把这段食材准备的步骤通读两遍，确认每样东西都到位了再开火。做菜这件事，准备工作占七成功力，真正下锅炒的时间反而是最短的。

最后提一嘴：做红烧肉这天最好别安排其他活动，从买菜到吃上至少三个小时。赶时间的人建议选周末，心态放松了做出来的菜味道都会更好——这不是玄学，是因为你不着急的时候不会跳步骤、不会开大火图快，每一步都能做到位。

有条件的话提前一天把五花肉买回来放冰箱冷藏室，第二天再处理。过夜冷藏之后肉质会稍微紧实一些，切起来更顺手，不会软塌塌的粘刀。但千万别放冷冻室，冻过的五花肉炖出来口感完全不一样，纤维被冰晶破坏了，嚼起来会有点渣。

所有食材准备完毕之后，在灶台旁边放一卷厨房纸巾，随时擦手擦台面。做红烧肉的过程油烟比较大，灶台周围会变得黏糊糊的，边做边擦比做完再清理省力十倍。

## 烹饪步骤

正式开始之前，先把所有调料量好搁在小碗里备着：生抽两勺（约30毫升）、老抽一勺（约15毫升，只管上色不管调味）、冰糖15克（大约鹌鹑蛋大小一块）、花雕酒两勺。八角桂皮香叶放一个小碟子里。一次性全部量好，下锅的时候才不会手忙脚乱——翻炒的火候是以秒计算的，没空让你现找调料。

如果家里有电子秤，把调料精确到克数会更好。烹饪这件事看似粗犷，但精确的调料配比才是"每次都好吃"和"偶尔好吃"之间的区别。餐厅大厨做菜看似随手一抛，其实那个"随手"已经是肌肉记忆精确到几克了。

锅里不放油，直接把五花肉块冷锅下去煸炒，中小火慢慢逼出猪油。这一步大约需要八到十分钟，期间不停翻面，确保每一面都煎到微微焦黄。你会发现锅底逐渐积了一层金黄色的油，这就是五花肉自带的"天然炒菜油"，比外面买的猪油香十倍。

煸炒的时候注意火候，中火偏小就行，火太大外面焦了里面还是生的。如果肉块比较多，可以分两批煸，挤在一起会出水变成"水煮肉"而不是"煎肉"了。

等肉块表面微微焦黄、锅底积了一层油之后，下葱姜蒜和八角桂皮香叶爆香，翻炒到能闻到姜蒜的辛香味。这时候整个厨房应该已经飘满了肉香和香料的混合气味，隔壁邻居可能已经开始好奇你在做什么了。

加入两勺生抽、一勺老抽翻炒上色，每块肉都要裹到酱油。酱油下锅的瞬间会发出"滋啦"一声，伴随一股浓烈的酱香味冲上来，这是美拉德反应正在发生，也是红烧肉香味的核心来源之一。

然后下冰糖，持续翻炒直到糖融化挂在肉表面——这步叫"炒糖色"，是红烧肉好看的关键。冰糖融化的过程需要一点耐心，先是起大泡，然后变小泡，最后变成琥珀色的糖浆，这时候立刻翻炒裹匀。千万不能炒过头，糖浆从琥珀色变成深棕色就是焦了，发苦，整锅得重来。

接着泼入花雕酒，酒精遇热蒸发的瞬间会带走大部分腥味，厨房里弥漫的酒香让隔壁邻居都能闻到。这一步有些人用啤酒代替花雕酒，效果也不错，啤酒的麦芽香和肉香意外地搭配。

倒入没过肉块约两厘米的热水（必须是热水，冷水会让蛋白质骤然收缩变硬），大火烧开后仔细撇去浮沫，然后转最小火焖一个半小时。中途不要掀盖子，每掀一次温度就掉一截，让它安安静静地炖，你该追剧追剧去。

焖炖的过程中，你可以去准备配菜——洗点青菜、蒸上米饭。用焖肉的时间做其他事情才是高效下厨的精髓，不然全程守着锅等一个半小时，人都无聊废了。

一个半小时后开盖检查，用筷子戳一下肉块，能毫无阻力地穿透就说明炖好了。如果还有点硬就再焖二十分钟，别急，好菜不怕等。这时候挑出八角桂皮香叶扔掉，留在里面影响卖相。

整个炖煮过程中厨房会飘着持续的肉香，这是检验成果的第一个信号——如果香味层次丰富、闻着就想流口水，说明火候和调味都到位了。

## 摆盘上桌

最后大火收汁，不停翻炒防止粘锅，直到汤汁浓稠挂满每一块肉。判断标准是铲子划过锅底，汤汁缓慢合拢而不是立刻流回来。整个收汁过程大约五到八分钟，火候和耐心缺一不可，心急的话一糊锅前面全白干。

收汁的时候可以尝一下咸淡，如果偏淡就补一点点生抽，偏咸就加一小勺白糖中和。这是最后的调味机会，别浪费了。

盛入白瓷深盘中，先用筷子把肉块码整齐——皮朝上、肥瘦层次对着食客——然后把浓汁均匀淋在肉块上面。撒上一把翠绿的葱花点缀，讲究的话再来几粒白芝麻。红白绿三色搭配，还没动筷子眼睛已经先吃了一顿。

旁边可以配一碟清炒时蔬解腻，比如蒜蓉西兰花或者白灼芥蓝，绿色蔬菜和红烧肉放在一起，色彩对比强烈，食欲直接拉满。讲究的家庭还会配一小碗酸萝卜汤，酸甜口味正好中和红烧肉的浓油重酱。

如果是请客，再来一盘凉拌黄瓜开胃，三道菜一汤，荤素搭配，排面拉满。

配一碗刚蒸好的白米饭，浇上两勺红亮的肉汁，就是一顿让全家人抢着添饭的硬菜。米饭建议用短粒粳米，颗粒饱满又有点黏性，能兜住浓稠的汤汁不会散。长粒的泰国香米太松散，汤汁全漏到碗底去了，浪费。东北大米是最佳选择，五常大米更好，但价格也更贵。

吃不完的第二天加热更好吃，因为肉已经彻底吸饱了汤汁，冷藏过夜后胶原蛋白凝固，再加热会更加软糯弹牙。这道菜有个别名叫"第二天才是巅峰"，试过的人都说不夸张。

微波炉加热三分钟就行，千万别用锅重新加热，容易把收好的汁再煮散了。如果做了一大锅，分装到保鲜盒里放冷冻，一个月内随时拿出来热一下就是一顿饭，比外卖强一百倍。

红烧肉这道菜看着步骤多，其实核心就三步：煸炒逼油、炒糖色上色、小火慢焖。掌握了这三步的火候和节奏，其他都是细节调整。第一次做可能不太完美，但做到第三次的时候，你会发现自己已经比大部分饭馆做得好了。

最后提醒一句：做红烧肉的当天最好别穿白衣服，锅铲翻炒的时候酱汁会溅，老抽那个颜色沾上去基本洗不掉。围裙是必须的，最好再加个袖套，别问为什么这么具体——都是血泪教训。

这道菜适合周末有空的时候做，从备料到上桌大约需要两个半小时。工作日赶时间的话可以用高压锅代替砂锅，焖的时间能缩短到四十分钟，口感略有损失但也能打八十分。等到你做顺手了，这就是你的拿手菜，朋友聚会、过节家宴，一锅红烧肉就能撑起半张桌子。
`,wy=`# 家庭菜谱

## 食材准备

去菜市场挑选新鲜的五花肉，选肥瘦相间、层次分明的那种，大约买一斤半（750克）就够了。好的五花肉用手指按下去能缓慢回弹，切面呈粉红色，闻起来没有任何异味。尽量选靠近肋排的那一段，这部分肥瘦比例最均匀，炖出来口感层次最丰富。千万别买那种纯白的肥膘或者全是瘦肉的部位，前者炖出来一嘴油腻，后者炖成木头渣子。

再买一把小葱（约50克）、一块老姜（30克左右，要选皮色暗黄、掰开丝多的老姜）和一整头大蒜（约8瓣）。老姜的选法有讲究：表皮干皱、颜色深黄的才是真正长了足够时间的老姜，那种表皮光滑水灵的是嫩姜，去腥效果差很多。大蒜要挑蒜瓣饱满、捏起来硬实的，发芽或者发软的已经不新鲜了。

调料方面需要生抽、老抽各一瓶，冰糖一小袋（黄冰糖比白冰糖好，炒出来的糖色更红亮）。如果家里没有料酒，顺路带一瓶花雕酒，去腥效果比普通料酒强三倍不止。八角两颗、桂皮一小段、香叶两片也别忘了，这三样是炖肉的灵魂伴侣。有人还喜欢加一点白胡椒粉提香，但这个看个人口味，不加也完全没问题。

五花肉回家后用清水浸泡半小时去血水，中间换两次水，直到水不再发红。泡的时候水温用常温就好，千万别用热水，热水会把蛋白质提前凝固，血水反而排不出来。浸泡完毕后捞出来用厨房纸巾把表面水分吸干，这样下锅煸炒的时候不容易溅油。

然后切成麻将大小的方块，大约3厘米见方，每一块都要带皮带肥带瘦。刀要磨快，钝刀切肉会把肉纤维挤碎，影响口感。切的时候找好肉的纹理方向，顺着纹理切出来的肉块炖完之后比较完整，不容易散。

葱切成5厘米长的段、姜切成2毫米厚的片、蒜拍扁但不要拍碎——拍碎了炖的时候会散在汤里，捞都捞不出来。这一步不能偷懒，肉块大小直接影响最后的口感，太大不入味，太小炖完就柴了。

切好的肉块冷水下锅焯一次水，水开后煮两分钟，撇去浮沫，捞出用温水冲洗干净。这一步叫"飞水"，目的是去掉血沫和杂质，让炖出来的汤汁清亮不浑浊。有人觉得焯水会损失鲜味所以跳过这步，结果就是炖出来的红烧肉表面一层灰色泡沫，卖相直接报废。

焯水用的锅和炖肉用的锅最好分开，焯水锅不用洗得太干净，反正下次焯水还是一样脏。焯完水的肉块放在盘子里晾着，趁这个空档把砂锅或铸铁锅拿出来洗干净擦干。

如果用砂锅，记得先用小火把锅身烘热，不然冷砂锅突然上大火容易炸裂——是真的会炸，别问我怎么知道的。铸铁锅没这个问题，冷锅热锅都能用，就是重得要命，单手端不动。不粘锅也凑合，但记得全程最小火，焖的时间多加二十分钟。铝锅就算了，长时间炖煮会有金属味。

案板、菜刀、漏勺、锅铲都提前摆好，开火之后就没空翻抽屉找工具了。如果你是第一次做红烧肉，建议先把这段食材准备的步骤通读两遍，确认每样东西都到位了再开火。做菜这件事，准备工作占七成功力，真正下锅炒的时间反而是最短的。

最后提一嘴：做红烧肉这天最好别安排其他活动，从买菜到吃上至少三个小时。赶时间的人建议选周末，心态放松了做出来的菜味道都会更好——这不是玄学，是因为你不着急的时候不会跳步骤、不会开大火图快，每一步都能做到位。

有条件的话提前一天把五花肉买回来放冰箱冷藏室，第二天再处理。过夜冷藏之后肉质会稍微紧实一些，切起来更顺手，不会软塌塌的粘刀。但千万别放冷冻室，冻过的五花肉炖出来口感完全不一样，纤维被冰晶破坏了，嚼起来会有点渣。

所有食材准备完毕之后，在灶台旁边放一卷厨房纸巾，随时擦手擦台面。做红烧肉的过程油烟比较大，灶台周围会变得黏糊糊的，边做边擦比做完再清理省力十倍。

## 下厨指南

正式开始之前，先把所有调料量好搁在小碗里备着：生抽两勺（约30毫升）、老抽一勺（约15毫升，只管上色不管调味）、冰糖15克（大约鹌鹑蛋大小一块）、花雕酒两勺。八角桂皮香叶放一个小碟子里。一次性全部量好，下锅的时候才不会手忙脚乱——翻炒的火候是以秒计算的，没空让你现找调料。

如果家里有电子秤，把调料精确到克数会更好。烹饪这件事看似粗犷，但精确的调料配比才是"每次都好吃"和"偶尔好吃"之间的区别。餐厅大厨做菜看似随手一抛，其实那个"随手"已经是肌肉记忆精确到几克了。

锅里不放油，直接把五花肉块冷锅下去煸炒，中小火慢慢逼出猪油。这一步大约需要八到十分钟，期间不停翻面，确保每一面都煎到微微焦黄。你会发现锅底逐渐积了一层金黄色的油，这就是五花肉自带的"天然炒菜油"，比外面买的猪油香十倍。

煸炒的时候注意火候，中火偏小就行，火太大外面焦了里面还是生的。如果肉块比较多，可以分两批煸，挤在一起会出水变成"水煮肉"而不是"煎肉"了。

等肉块表面微微焦黄、锅底积了一层油之后，下葱姜蒜和八角桂皮香叶爆香，翻炒到能闻到姜蒜的辛香味。这时候整个厨房应该已经飘满了肉香和香料的混合气味，隔壁邻居可能已经开始好奇你在做什么了。

加入两勺生抽、一勺老抽翻炒上色，每块肉都要裹到酱油。酱油下锅的瞬间会发出"滋啦"一声，伴随一股浓烈的酱香味冲上来，这是美拉德反应正在发生，也是红烧肉香味的核心来源之一。

然后下冰糖，持续翻炒直到糖融化挂在肉表面——这步叫"炒糖色"，是红烧肉好看的关键。冰糖融化的过程需要一点耐心，先是起大泡，然后变小泡，最后变成琥珀色的糖浆，这时候立刻翻炒裹匀。千万不能炒过头，糖浆从琥珀色变成深棕色就是焦了，发苦，整锅得重来。

接着泼入花雕酒，酒精遇热蒸发的瞬间会带走大部分腥味，厨房里弥漫的酒香让隔壁邻居都能闻到。这一步有些人用啤酒代替花雕酒，效果也不错，啤酒的麦芽香和肉香意外地搭配。

倒入没过肉块约两厘米的开水（必须是开水，冷水会让蛋白质骤然收缩变硬），大火烧开后仔细撇去浮沫，然后转最小火焖一个半小时。中途不要掀盖子，每掀一次温度就掉一截，让它安安静静地炖，你该追剧追剧去。

焖炖的过程中，你可以去准备配菜——洗点青菜、蒸上米饭。用焖肉的时间做其他事情才是高效下厨的精髓，不然全程守着锅等一个半小时，人都无聊废了。

一个半小时后开盖检查，用筷子戳一下肉块，能毫无阻力地穿透就说明炖好了。如果还有点硬就再焖二十分钟，别急，好菜不怕等。这时候挑出八角桂皮香叶扔掉，留在里面影响卖相。

整个炖煮过程中厨房会飘着持续的肉香，这是检验成果的第一个信号——如果香味层次丰富、闻着就想流口水，说明火候和调味都到位了。

## 摆盘上桌

最后大火收汁，不停翻炒防止粘锅，直到汤汁浓稠挂满每一块肉。判断标准是铲子划过锅底，汤汁缓慢合拢而不是立刻流回来。整个收汁过程大约五到八分钟，火候和耐心缺一不可，心急的话一糊锅前面全白干。

收汁的时候可以尝一下咸淡，如果偏淡就补一点点生抽，偏咸就加一小勺白糖中和。这是最后的调味机会，别浪费了。

盛入白瓷深盘中，先用筷子把肉块码整齐——皮朝上、肥瘦层次对着食客——然后把浓汁均匀淋在肉块上面。撒上一把翠绿的葱花点缀，讲究的话再来几粒白芝麻。红白绿三色搭配，还没动筷子眼睛已经先吃了一顿。

旁边可以配一碟清炒时蔬解腻，比如蒜蓉西兰花或者白灼芥蓝，绿色蔬菜和红烧肉放在一起，色彩对比强烈，食欲直接拉满。讲究的家庭还会配一小碗酸萝卜汤，酸甜口味正好中和红烧肉的浓油重酱。

如果是请客，再来一盘凉拌黄瓜开胃，三道菜一汤，荤素搭配，排面拉满。

配一碗刚蒸好的白米饭，浇上两勺红亮的肉汁，就是一顿让全家人抢着添饭的硬菜。米饭建议用短粒粳米，颗粒饱满又有点黏性，能兜住浓稠的汤汁不会散。长粒的泰国香米太松散，汤汁全漏到碗底去了，浪费。东北大米是最佳选择，五常大米更好，但价格也更贵。

吃不完的第二天加热更好吃，因为肉已经彻底吸饱了汤汁，冷藏过夜后胶原蛋白凝固，再加热会更加软糯弹牙。这道菜有个别名叫"第二天才是巅峰"，试过的人都说不夸张。

微波炉加热三分钟就行，千万别用锅重新加热，容易把收好的汁再煮散了。如果做了一大锅，分装到保鲜盒里放冷冻，一个月内随时拿出来热一下就是一顿饭，比外卖强一百倍。

红烧肉这道菜看着步骤多，其实核心就三步：煸炒逼油、炒糖色上色、小火慢焖。掌握了这三步的火候和节奏，其他都是细节调整。第一次做可能不太完美，但做到第三次的时候，你会发现自己已经比大部分饭馆做得好了。

最后提醒一句：做红烧肉的当天最好别穿白衣服，锅铲翻炒的时候酱汁会溅，老抽那个颜色沾上去基本洗不掉。围裙是必须的，最好再加个袖套，别问为什么这么具体——都是血泪教训。

这道菜适合周末有空的时候做，从备料到上桌大约需要两个半小时。工作日赶时间的话可以用高压锅代替砂锅，焖的时间能缩短到四十分钟，口感略有损失但也能打八十分。等到你做顺手了，这就是你的拿手菜，朋友聚会、过节家宴，一锅红烧肉就能撑起半张桌子。
`,xy=`# 旅行攻略

## 成都

来成都第一件事不是看熊猫，而是钻进苍蝇馆子吃一顿正宗的红油火锅。九宫格翻滚着牛油的香气，毛肚鹅肠黄喉依次下锅，蘸上干碟海椒面，辣得人满头大汗却根本停不下来。吃火锅有个潜规则：毛肚七上八下涮十五秒，鹅肠卷曲即捞，黄喉要等它变脆弹——时间差一秒口感差一截，所以老成都人涮火锅从不聊天，全神贯注盯着锅里。

吃饱了沿着宽窄巷子溜达一圈消消食，窄巷子比宽巷子人少，两旁的四合院改成了茶馆和手作店，偶尔能看到老大爷在门口下象棋。然后打车去人民公园喝盖碗茶，找一把竹椅往树荫底下一坐，掏耳朵的师傅在旁边叮叮当当，这才是成都人说的"巴适"。

茶馆里的老大爷们一坐就是一下午，龙门阵摆起来天南海北什么都聊，偶尔有人打个盹儿，茶碗歪了也没人管。这种毫无压力的慢生活节奏，才是成都真正的灵魂。

美食推荐不能只说火锅。早餐去建设路吃一碗红油抄手配钟水饺，中午找一家苍蝇馆子点一份回锅肉和宫保鸡丁，下午在春熙路来一杯冰粉解暑——就那种加了红糖水、花生碎和葡萄干的传统冰粉，五块钱一碗，解辣神器。

晚上当然还是火锅，成都人可以连吃三天火锅不带重样的。串串香也不能错过，小郡肝串串是本地人的深夜食堂，竹签论把数，蘸上干碟吃到扶墙出。如果你是川菜爱好者，还可以去成都周边的眉山走一趟，那是东坡肉的发源地。

住宿推荐太古里附近的民宿，出门左转就是IFS那只爬墙大熊猫，步行十分钟到春熙路。晚上去九眼桥酒吧街转转，不喝酒光看河边的夜景也值了。预算充裕可以住博舍，早餐的担担面是成都五星级酒店里最正宗的。

景点方面，武侯祠和锦里可以安排在同一个下午。武侯祠门口的红墙竹林是拍照圣地，随便拍都是大片。锦里就是个商业街，走马观花看看就行，别在里面吃东西，又贵又不正宗。

如果有时间，熊猫基地还是值得去一趟的，但一定要早上七八点就到——熊猫们吃完早饭就去睡了，十点以后基本只能看到一坨坨黑白色的毛球趴在树上不动。

小贴士：成都的辣是麻辣，不是干辣，所以北方朋友别硬撑——微辣锅底已经够呛了。花椒带来的"麻"才是成都火锅的灵魂，嘴唇发麻是正常反应，不是过敏。

地铁很方便，基本覆盖所有景点，打车高峰期堵得怀疑人生。提前下载一个"天府通"APP，公交地铁扫码直接坐。另外成都人说的"就在旁边"可能要走二十分钟，他们对距离的概念和其他城市不太一样。

最佳旅行时间是三月到六月和九月到十一月，夏天的成都闷热得像蒸笼，冬天则阴冷潮湿。春天去能赶上龙泉驿的桃花季，漫山遍野的粉红色花海，拍出来的照片比日本樱花毫不逊色。

建议行程安排四到五天，第一天到了先吃火锅倒时差（虽然没有时差但你需要倒辣差），第二天逛景点，第三天深入市井美食，第四天可以去周边的都江堰或青城山，第五天回程前再去菜市场买点特产带走——郫县豆瓣酱、灯影牛肉干、花椒和手工银丝挂面，都是送人拿得出手的好东西。

## 大理

到大理租一辆小电驴，沿着洱海环湖骑行是必做的事。风从苍山吹过来带着松针的味道，湖面蓝得发绿，白族民居的照壁在阳光下白得刺眼。双廊那段路最美，随便找个地方停下来拍照都是壁纸。

全程环湖大约130公里，电驴续航够不够取决于你租的车和你停下来拍照的频率——建议分两天骑，中途在双廊住一晚。

晚上回到古城逛逛人民路，这条路白天是文艺青年的市集，晚上变成流浪歌手的舞台。找一家安静的小酒馆坐下，听驻唱歌手弹着吉他唱民谣。点一杯风花雪月啤酒，和邻桌的背包客聊聊各自的旅行故事，这种松弛感别的地方给不了。

人民路上的手鼓店一家挨一家，每家放的音乐都不一样，走一趟下来耳朵里混着十几种旋律。

美食方面，古城里的"再回首凉鸡米线"是必吃项，酸辣口味的鸡丝配上软糯的米线，七块钱一碗管饱。喜洲粑粑也得尝尝，甜咸两种口味，刚出炉的时候外酥里软，咬一口酥皮掉一地。

烤乳扇蘸玫瑰酱是当地特色甜品，奶味很重，不习惯的人可能觉得有点膻。古城北门那家烤饵块也值得排队，老板用炭火慢烤，刷上甜酱辣酱再夹一根油条，碳水炸弹但幸福感爆棚。

大理周边还有几个地方值得安排：喜洲古镇半天够了，看看白族的"三坊一照壁"建筑群，在田埂边拍几张稻田照片；沙溪古镇适合不赶时间的人，比大理更安静更原始，那里的寺登街曾经是茶马古道上的重要驿站。

住宿首选洱海边的海景民宿，推窗就是苍山洱海，早上被阳光而不是闹钟叫醒。淡季价格三四百一晚，旺季翻倍还订不到。提前半个月在平台上抢房，选"海西"方向的，看日出最方便。

古城里的民宿便宜很多，一百多就能住到不错的白族风格院子，缺点是晚上酒吧街的音乐会闹到十二点。

小贴士：大理紫外线极强，防晒霜要SPF50+的，每两小时补涂一次，不然一天下来直接黑两个色号。墨镜和防晒帽也是必备，骑电驴的时候风吹日晒双重暴击。高原地区不要剧烈运动，骑电驴的速度刚刚好。古城里砍价是常规操作，开价的五到七折是合理区间。

最佳旅行时间是三月到五月，苍山上的杜鹃花开得漫山遍野；或者九月到十一月，天气凉爽湖水清透，游客也比暑假少一大半。冬天的大理有种冷冽的美，但早晚温差大得离谱，白天短袖晚上得穿羽绒服。

建议行程三到五天，不用排太满，大理就是用来发呆的。第一天古城闲逛适应节奏，第二天环洱海骑行，第三天去喜洲或沙溪，剩下的时间留给自己——睡到自然醒、找家咖啡馆看书、或者什么都不做，这才是大理的正确打开方式。

## 厦门

鼓浪屿的小巷子才是精华所在，别跟着旅游团走主干道。找一条没人的石板路慢慢走，转角遇见一栋百年老别墅，爬满三角梅的院墙后面传来钢琴声，整座岛就是一个露天博物馆。

推荐路线是从日光岩下来之后往笔架山方向走，那一片游客最少，老建筑保存最完整，随便推开一扇虚掩的铁门都可能是某位华侨的百年故居。

从轮渡码头回到中山路，拐进局口街吃沙茶面和海蛎煎。老板娘手脚麻利地往碗里加料，花生酱沙茶酱的香气混在一起，配上一碗四果汤当甜品，这就是闽南古早味的正确打开方式。

八市（第八菜市场）离中山路走路十分钟，活海鲜现挑现做，价格比景区便宜一半，本地人都在那买菜。

环岛路骑行是厦门的另一张名片，从曾厝垵出发沿海岸线往会展中心方向骑，左边是大海右边是凤凰花，全程有专门的自行车道。骑到黄厝海滩可以停下来踩踩沙子，这个海滩比白城沙滩人少很多，水也更清。

傍晚时分在海边看日落，天空从橙红渐变到深紫，远处的金门岛隐约可见，这个画面值得你专门等一个晴天。

住宿方面，曾厝垵的民宿性价比最高但比较吵，想安静就住鹭江道那边的老洋房酒店，步行到轮渡码头五分钟。厦门的出租车起步价比较低，岛内打车基本不超过三十块，所以不必太纠结住在哪个区——反正哪都不远。

厦门大学也值得逛逛，芙蓉隧道里全是学生画的涂鸦，有些创意真的让人惊叹。从厦大白城校门出来就是白城沙滩，虽然沙子粗了点但胜在方便。南普陀寺就在厦大隔壁，免费参观，寺里的素菜馆味道一绝，用豆腐和菌菇做出来的"红烧肉"能以假乱真。

厦门的咖啡文化也值得一提，沙坡尾那片老码头区域改造成了文创园，一条街上能数出十几家独立咖啡馆。华新路的老别墅区也藏着不少宝藏小店，在百年榕树下喝一杯手冲，比任何连锁品牌都有味道。

小贴士：去鼓浪屿一定要提前在网上买船票，现场排队能排到绝望。建议买三丘田码头到内厝澳码头的票，这个方向下船后离核心景点更近。

厦门的天气说变就变，随身带一把折叠伞绝对不亏。夏天去的话做好防暑准备，岛上的石板路被太阳晒得能煎蛋，穿凉鞋的话脚底板都烫。

最佳旅行时间是十月到十二月，秋高气爽、凤凰花正红，不冷不热，是一年中最舒服的季节。三四月的厦门经常下雨，虽然雨中的鼓浪屿别有韵味，但连续一周的阴雨天会影响心情和行程安排。

建议行程安排三到四天，鼓浪屿一天、环岛路骑行加厦大一天、中山路和八市一天，如果有多余的时间可以坐船去对面的漳州看看土楼，车程两小时，当天往返。
`,vy=`# 旅行攻略

## 厦门

鼓浪屿的小巷子才是精华所在，别跟着旅游团走主干道。找一条没人的石板路慢慢走，转角遇见一栋百年老别墅，爬满三角梅的院墙后面传来钢琴声，整座岛就是一个露天博物馆。

推荐路线是从日光岩下来之后往笔架山方向走，那一片游客最少，老建筑保存最完整，随便推开一扇虚掩的铁门都可能是某位华侨的百年故居。

从轮渡码头回到中山路，拐进局口街吃沙茶面和海蛎煎。老板娘手脚麻利地往碗里加料，花生酱沙茶酱的香气混在一起，配上一碗四果汤当甜品，这就是闽南古早味的正确打开方式。

八市（第八菜市场）离中山路走路十分钟，活海鲜现挑现做，价格比景区便宜一半，本地人都在那买菜。

环岛路骑行是厦门的另一张名片，从曾厝垵出发沿海岸线往会展中心方向骑，左边是大海右边是凤凰花，全程有专门的自行车道。骑到黄厝海滩可以停下来踩踩沙子，这个海滩比白城沙滩人少很多，水也更清。

傍晚时分在海边看日落，天空从橙红渐变到深紫，远处的金门岛隐约可见，这个画面值得你专门等一个晴天。

住宿方面，曾厝垵的民宿性价比最高但比较吵，想安静就住鹭江道那边的老洋房酒店，步行到轮渡码头五分钟。厦门的出租车起步价比较低，岛内打车基本不超过三十块，所以不必太纠结住在哪个区——反正哪都不远。

厦门大学也值得逛逛，芙蓉隧道里全是学生画的涂鸦，有些创意真的让人惊叹。从厦大白城校门出来就是白城沙滩，虽然沙子粗了点但胜在方便。南普陀寺就在厦大隔壁，免费参观，寺里的素菜馆味道一绝，用豆腐和菌菇做出来的"红烧肉"能以假乱真。

厦门的咖啡文化也值得一提，沙坡尾那片老码头区域改造成了文创园，一条街上能数出十几家独立咖啡馆。华新路的老别墅区也藏着不少宝藏小店，在百年榕树下喝一杯手冲，比任何连锁品牌都有味道。

小贴士：去鼓浪屿一定要提前在网上买船票，现场排队能排到绝望。建议买三丘田码头到内厝澳码头的票，这个方向下船后离核心景点更近。

厦门的天气说变就变，随身带一把折叠伞绝对不亏。夏天去的话做好防暑准备，岛上的石板路被太阳晒得能煎蛋，穿凉鞋的话脚底板都烫。

最佳旅行时间是十月到十二月，秋高气爽、凤凰花正红，不冷不热，是一年中最舒服的季节。三四月的厦门经常下雨，虽然雨中的鼓浪屿别有韵味，但连续一周的阴雨天会影响心情和行程安排。

建议行程安排三到四天，鼓浪屿一天、环岛路骑行加厦大一天、中山路和八市一天，如果有多余的时间可以坐船去对面的漳州看看土楼，车程两小时，当天往返。

## 大理

到大理租一辆小电驴，沿着洱海环湖骑行是必做的事。风从苍山吹过来带着松针的味道，湖面蓝得发绿，白族民居的照壁在阳光下白得刺眼。双廊那段路最美，随便找个地方停下来拍照都是壁纸。

全程环湖大约130公里，电驴续航够不够取决于你租的车和你停下来拍照的频率——建议分两天骑，中途在双廊住一晚。

晚上回到古城逛逛人民路，这条路白天是文艺青年的市集，晚上变成流浪歌手的舞台。找一家安静的小酒馆坐下，听驻唱歌手弹着吉他唱民谣。点一杯风花雪月啤酒，和邻桌的背包客聊聊各自的旅行故事，这种松弛感别的地方给不了。

人民路上的手鼓店一家挨一家，每家放的音乐都不一样，走一趟下来耳朵里混着十几种旋律。

美食方面，古城里的"再回首凉鸡米线"是必吃项，酸辣口味的鸡丝配上软糯的米线，七块钱一碗管饱。喜洲粑粑也得尝尝，甜咸两种口味，刚出炉的时候外酥里软，咬一口酥皮掉一地。

烤乳扇蘸玫瑰酱是当地特色甜品，奶味很重，不习惯的人可能觉得有点膻。古城北门那家烤饵块也值得排队，老板用炭火慢烤，刷上甜酱辣酱再夹一根油条，碳水炸弹但幸福感爆棚。

大理周边还有几个地方值得安排：喜洲古镇半天够了，看看白族的"三坊一照壁"建筑群，在田埂边拍几张稻田照片；沙溪古镇适合不赶时间的人，比大理更安静更原始，那里的寺登街曾经是茶马古道上的重要驿站。

住宿首选洱海边的海景民宿，推窗就是苍山洱海，早上被阳光而不是闹钟叫醒。淡季价格三四百一晚，旺季翻倍还订不到。提前半个月在平台上抢房，选"海西"方向的，看日出最方便。

古城里的民宿便宜很多，一百多就能住到不错的白族风格院子，缺点是晚上酒吧街的音乐会闹到十二点。

小贴士：大理紫外线极强，防晒霜要SPF50+的，每两小时补涂一次，不然一天下来直接黑两个色号。墨镜和防晒帽也是必备，骑电驴的时候风吹日晒双重暴击。高原地区不要剧烈运动，骑电驴的速度刚刚好。古城里砍价是常规操作，开价的五到七折是合理区间。

最佳旅行时间是三月到五月，苍山上的杜鹃花开得漫山遍野；或者九月到十一月，天气凉爽湖水清透，游客也比暑假少一大半。冬天的大理有种冷冽的美，但早晚温差大得离谱，白天短袖晚上得穿羽绒服。

建议行程三到五天，不用排太满，大理就是用来发呆的。第一天古城闲逛适应节奏，第二天环洱海骑行，第三天去喜洲或沙溪，剩下的时间留给自己——睡到自然醒、找家咖啡馆看书、或者什么都不做，这才是大理的正确打开方式。

## 成都

来成都第一件事不是看熊猫，而是钻进苍蝇馆子吃一顿正宗的红油火锅。九宫格翻滚着牛油的香气，毛肚鹅肠黄喉依次下锅，蘸上干碟海椒面，辣得人满头大汗却根本停不下来。吃火锅有个潜规则：毛肚七上八下涮十五秒，鹅肠卷曲即捞，黄喉要等它变脆弹——时间差一秒口感差一截，所以老成都人涮火锅从不聊天，全神贯注盯着锅里。

吃饱了沿着宽窄巷子溜达一圈消消食，窄巷子比宽巷子人少，两旁的四合院改成了茶馆和手作店，偶尔能看到老大爷在门口下象棋。然后打车去人民公园喝盖碗茶，找一把竹椅往树荫底下一坐，掏耳朵的师傅在旁边叮叮当当，这才是成都人说的"巴适"。

茶馆里的老大爷们一坐就是一下午，龙门阵摆起来天南海北什么都聊，偶尔有人打个盹儿，茶碗歪了也没人管。这种毫无压力的慢生活节奏，才是成都真正的灵魂。

美食推荐不能只说火锅。早餐去建设路吃一碗红油抄手配钟水饺，中午找一家苍蝇馆子点一份回锅肉和宫保鸡丁，下午在春熙路来一杯冰粉解暑——就那种加了红糖水、花生碎和葡萄干的传统冰粉，五块钱一碗，解辣神器。

晚上当然还是火锅，成都人可以连吃三天火锅不带重样的。串串香也不能错过，小郡肝串串是本地人的深夜食堂，竹签论把数，蘸上干碟吃到扶墙出。如果你是川菜爱好者，还可以去成都周边的眉山走一趟，那是东坡肉的发源地。

住宿推荐太古里附近的民宿，出门左转就是IFS那只爬墙大熊猫，步行十分钟到春熙路。晚上去九眼桥酒吧街转转，不喝酒光看河边的夜景也值了。预算充裕可以住博舍，早餐的担担面是成都五星级酒店里最正宗的。

景点方面，武侯祠和锦里可以安排在同一个下午。武侯祠门口的红墙竹林是拍照圣地，随便拍都是大片。锦里就是个商业街，走马观花看看就行，别在里面吃东西，又贵又不正宗。

如果有时间，熊猫基地还是值得去一趟的，但一定要早上七八点就到——熊猫们吃完早饭就去睡了，十点以后基本只能看到一坨坨黑白色的毛球趴在树上不动。

小贴士：成都的辣是麻辣，不是干辣，所以北方朋友别硬撑——微辣锅底已经够呛了。花椒带来的"麻"才是成都火锅的灵魂，嘴唇发麻是正常反应，不是过敏。

地铁很方便，基本覆盖所有景点，打车高峰期堵得怀疑人生。提前下载一个"天府通"APP，公交地铁扫码直接坐。另外成都人说的"就在旁边"可能要走二十分钟，他们对距离的概念和其他城市不太一样。

最佳旅行时间是三月到六月和九月到十一月，夏天的成都闷热得像蒸笼，冬天则阴冷潮湿。春天去能赶上龙泉驿的桃花季，漫山遍野的粉红色花海，拍出来的照片比日本樱花毫不逊色。

建议行程安排四到五天，第一天到了先吃火锅倒时差（虽然没有时差但你需要倒辣差），第二天逛景点，第三天深入市井美食，第四天可以去周边的都江堰或青城山，第五天回程前再去菜市场买点特产带走——郫县豆瓣酱、灯影牛肉干、花椒和手工银丝挂面，都是送人拿得出手的好东西。
`,Sy=`# 社区活动介绍

本文档汇总了社区两项核心文化活动的详细信息，包括活动流程、参与方式、场地安排和历届回顾。
两项活动均由社区文化委员会主办，旨在为居民提供高质量的精神文化生活。
活动自二零二一年启动以来，已累计举办超过两百场，覆盖居民逾三千人次。

## 周三读书会

参与者可以通过每周三晚间的读书分享活动完成对经典文学作品的深度解读。
活动期间组织者会提前选定本周的阅读书目，并在现场提供茶点和讨论提纲，确保每位参与者都能在轻松的氛围中充分表达自己的阅读感受和思考。
分享结束后会进入自由交流环节，由主持人引导大家就书中的核心议题展开讨论。

### 选书与准备

读书会的选书范围涵盖中外经典文学、当代小说、社科随笔和诗歌等多个门类。
每月初由组织者在微信群里发布当月的四本候选书目，群成员投票决定阅读顺序。
为了照顾不同阅读速度的参与者，每本书的讨论周期为一周，首次参加的新成员可以只读前三章即可参与讨论。
组织者还会整理每期讨论的精华笔记，以电子文档的形式分享到群里供大家回顾。
选书时特别注意避开争议性过强的政治类读物，以维护讨论的理性和友善氛围。

### 活动流程与场地

活动地点设在小区东门的社区图书室，容纳人数上限为二十人。
每次活动从晚上七点半开始，九点半结束，中间安排十分钟茶歇。
茶歇期间提供咖啡、花茶和自制小点心，费用由参与者AA分摊，每人每次大约十五元。
遇到雨天或极端天气，活动会转为线上腾讯会议的形式进行，提前在群里通知。
图书室配有投影仪和白板，分享者可以提前准备幻灯片辅助讲解。
座位按圆桌形式排列，鼓励面对面交流而非单向演讲。

### 参与方式

新成员入群需由现有成员邀请，或通过社区物业前台登记报名。
首次参加的成员可以旁听一次，了解活动流程后再决定是否长期参与。
长期参与者默认每月缴纳五十元活动基金，用于购买公共书籍和茶歇物资。
缺席三次以上未请假的成员会被移出微信群，但随时可以重新申请加入。

### 历届回顾

历届读书会产出了不少精彩的讨论成果。
去年夏天围绕《百年孤独》展开的那次讨论，参与者们就"孤独是诅咒还是命运"争论了整整两个小时，最后也没吵出结果。
今年三月读《人间失格》的时候，有位成员分享了自己的亲身经历，整个图书室安静得能听到空调滴水的声音。
最受欢迎的一期是去年十二月的年终特别场，大家带着各自年度最爱的书来做五分钟闪电分享，气氛热烈到九点半了还不愿意散场。
这些意料之外的深度对话，正是读书会最珍贵的部分。

## 周六观影会

参与者可以通过每周六下午的观影鉴赏活动完成对优秀电影作品的深度解读。
活动期间组织者会提前选定本周的放映片目，并在现场提供茶点和讨论提纲，确保每位参与者都能在轻松的氛围中充分表达自己的观影感受和思考。
放映结束后会进入自由交流环节，由主持人引导大家就片中的核心议题展开讨论。

### 选片与准备

观影会的选片范围涵盖中外经典电影、当代佳作、纪录片和动画等多个门类。
每月初由组织者在微信群里发布当月的四部候选影片，群成员投票决定放映顺序。
为了照顾不同观影偏好的参与者，每部电影的讨论周期为一周，首次参加的新成员可以只看前三十分钟即可参与讨论。
组织者还会整理每期讨论的精华笔记，以电子文档的形式分享到群里供大家回顾。
选片时特别注意避开争议性过强的敏感题材，以维护讨论的理性和友善氛围。

### 活动流程与场地

活动地点设在小区西门的社区活动室，容纳人数上限为二十人。
每次活动从下午两点半开始，五点半结束，中间安排十分钟茶歇。
茶歇期间提供咖啡、花茶和自制小点心，费用由参与者AA分摊，每人每次大约十五元。
遇到雨天或极端天气，活动会转为线上腾讯会议的形式进行，提前在群里通知。
活动室配有投影仪和音响，放映者可以提前准备幻灯片辅助讲解。
座位按圆桌形式排列，鼓励面对面交流而非单向演讲。

### 参与方式

新成员入群需由现有成员邀请，或通过社区物业前台登记报名。
首次参加的成员可以旁听一次，了解活动流程后再决定是否长期参与。
长期参与者默认每月缴纳五十元活动基金，用于购买公共影碟和茶歇物资。
缺席三次以上未请假的成员会被移出微信群，但随时可以重新申请加入。

### 历届回顾

历届观影会产出了不少精彩的讨论成果。
去年夏天围绕《肖申克的救赎》展开的那次讨论，参与者们就"希望是束缚还是自由"争论了整整两个小时，最后也没吵出结果。
今年三月看《入殓师》的时候，有位成员分享了自己的亲身经历，整个活动室安静得能听到空调滴水的声音。
最受欢迎的一期是去年十二月的年终特别场，大家带着各自年度最爱的电影来做五分钟闪电分享，气氛热烈到五点半了还不愿意散场。
这些意料之外的深度对话，正是观影会最珍贵的部分。
`,Cy=`# 社区活动介绍

本文档汇总了社区两项核心文化活动的详细信息，包括活动流程、参与方式、场地安排和历届回顾。
两项活动均由社区文化委员会主办，旨在为居民提供高质量的精神文化生活。
活动自二零二一年启动以来，已累计举办超过两百场，覆盖居民逾三千人次。

## 周三读书会

参与者可以通过每周三晚间的读书分享活动完成对经典文学作品的精细解读。
活动期间组织者会提前选定本周的阅读书目，并在现场提供茶点和讨论提纲，确保每位参与者都能在轻松的氛围中充分表达自己的阅读感受和思考。
分享结束后会进入自由交流环节，由主持人引导大家就书中的核心议题展开讨论。

### 选书与准备

读书会的选书范围涵盖中外经典文学、当代小说、社科随笔和诗歌等多个门类。
每月初由组织者在微信群里发布当月的四本候选书目，群成员投票决定阅读顺序。
为了照顾不同阅读速度的参与者，每本书的讨论周期为一周，首次参加的新成员可以只读前三章即可参与讨论。
组织者还会整理每期讨论的精华笔记，以电子文档的形式分享到群里供大家回顾。
选书时特别注意避开争议性过强的政治类读物，以维护讨论的理性和友善氛围。

### 活动流程与场地

活动地点设在小区东门的社区图书室，容纳人数上限为二十人。
每次活动从晚上七点半开始，九点半结束，中间安排十分钟茶歇。
茶歇期间提供咖啡、花茶和自制小点心，费用由参与者AA分摊，每人每次大约十五元。
遇到雨天或极端天气，活动会转为线上腾讯会议的形式进行，提前在群里通知。
图书室配有投影仪和白板，分享者可以提前准备幻灯片辅助讲解。
座位按圆桌形式排列，鼓励面对面交流而非单向演讲。

### 参与方式

新成员入群需由现有成员邀请，或通过社区物业前台登记报名。
首次参加的成员可以旁听一次，了解活动流程后再决定是否长期参与。
长期参与者默认每月缴纳五十元活动基金，用于购买公共书籍和茶歇物资。
缺席三次以上未请假的成员会被移出微信群，但随时可以重新申请加入。

### 历届回顾

历届读书会产出了不少精彩的讨论成果。
去年夏天围绕《百年孤独》展开的那次讨论，参与者们就"孤独是诅咒还是命运"争论了整整两个小时，最后也没吵出结果。
今年三月读《人间失格》的时候，有位成员分享了自己的亲身经历，整个图书室安静得能听到空调滴水的声音。
最受欢迎的一期是去年十二月的年终特别场，大家带着各自年度最爱的书来做五分钟闪电分享，气氛热烈到九点半了还不愿意散场。
这些意料之外的深度对话，正是读书会最珍贵的部分。

## 周六观影会

参与者可以通过每周六下午的观影鉴赏活动完成对优秀电影作品的深度解读。
活动期间组织者会提前选定本周的放映片目，并在现场提供茶点和讨论提纲，确保每位参与者都能在轻松的氛围中充分表达自己的观影感受和思考。
放映结束后会进入自由交流环节，由主持人引导大家就片中的核心议题展开讨论。

### 选片与准备

观影会的选片范围涵盖中外经典电影、当代佳作、纪录片和动画等多个门类。
每月初由组织者在微信群里发布当月的四部候选影片，群成员投票决定放映顺序。
为了照顾不同观影偏好的参与者，每部电影的讨论周期为一周，首次参加的新成员可以只看前三十分钟即可参与讨论。
组织者还会整理每期讨论的精华笔记，以电子文档的形式分享到群里供大家回顾。
选片时特别注意避开争议性过强的敏感题材，以维护讨论的理性和友善氛围。

### 活动流程与场地

活动地点设在小区西门的社区活动室，容纳人数上限为二十人。
每次活动从下午两点半开始，五点半结束，中间安排十分钟茶歇。
茶歇期间提供咖啡、花茶和自制小点心，费用由参与者AA分摊，每人每次大约十五元。
遇到雨天或极端天气，活动会转为线上腾讯会议的形式进行，提前在群里通知。
活动室配有投影仪和音响，放映者可以提前准备幻灯片辅助讲解。
座位按圆桌形式排列，鼓励面对面交流而非单向演讲。

### 参与方式

新成员入群需由现有成员邀请，或通过社区物业前台登记报名。
首次参加的成员可以旁听一次，了解活动流程后再决定是否长期参与。
长期参与者默认每月缴纳五十元活动基金，用于购买公共影碟和茶歇物资。
缺席三次以上未请假的成员会被移出微信群，但随时可以重新申请加入。

### 历届回顾

历届观影会产出了不少精彩的讨论成果。
去年夏天围绕《肖申克的救赎》展开的那次讨论，参与者们就"希望是束缚还是自由"争论了整整两个小时，最后也没吵出结果。
今年三月看《入殓师》的时候，有位成员分享了自己的亲身经历，整个活动室安静得能听到空调滴水的声音。
最受欢迎的一期是去年十二月的年终特别场，大家带着各自年度最爱的电影来做五分钟闪电分享，气氛热烈到五点半了还不愿意散场。
这些意料之外的深度对话，正是观影会最珍贵的部分。
`,_y=`# 星际旅行手册：银河系实用指南（第42版）

本手册由银河系旅游局编写，旨在为一切碳基、硅基及其他尚未归类的生命体提供实用的星际旅行参考。如果你正在阅读这本手册，说明你至少还活着——这在银河系旅行中已经是一项了不起的成就了。

请注意：本手册中的信息截至银河标准时 4721 年，此后发生的星球爆炸、维度坍缩或菜单更新均未收录。旅游局对因使用过时信息导致的物质分解、时间悖论或消化不良概不负责。

## 旅行须知

在你踏上星际旅途之前，有一些基本常识需要牢记。银河系包含大约 4000 亿颗恒星，其中有人居住的星球约 1700 万颗，有值得一去的大概 37 颗，而真正不会试图杀死你的只有 4 颗——其中 2 颗还在审核中。

### 必备物品

每一位星际旅行者都应该随身携带以下物品：

- **毛巾**：这一点再怎么强调都不为过。毛巾是星际旅行者最有用的物品，它可以用来保暖、当枕头、做信号旗、过滤有毒气体，在必要时还能用来和沃贡人进行外交谈判。失去毛巾的旅行者在银河系的生存概率会降低 73.6%。
- **银河翻译鱼**：一种放入耳道后能实时翻译任何已知语言的小型生物。它以脑电波中的无意识频率为食，排泄物恰好是翻译后的神经信号。不要问这是怎么进化出来的，没有人知道，连翻译鱼自己也不知道。
- **次元口袋旅行包**：看起来只有手提包大小，但内部空间经过四维折叠处理，可以装下一整套露营装备、三天的口粮以及一本足够厚的书（推荐带本手册，它在很多星球上还可以当防身武器）。
- **泛银河信用卡**：银河系 89% 的文明都接受的支付方式。剩下 11% 的文明要么使用以物易物，要么根本不理解"所有权"这个概念——和他们打交道时请格外小心。
- **电子拇指**：搭星际便车的必备工具。它能向过往飞船发送标准搭车请求信号。成功率约为 12%，但考虑到替代方案是在太空中漂浮至死，这个概率已经相当不错了。

### 旅行保险

银河系旅行保险是一个充满创意的骗局，但我们仍然建议你购买。标准保险覆盖以下情况：

1. 被外星生物吞食后成功逃出（需在被吞食后 72 小时内提交索赔）
2. 因超空间跳跃导致的肢体重组错误（不包括额外长出的肢体，那算升级）
3. 行李在维度转换中丢失（赔偿上限为 500 银河信用点）
4. 因时间旅行导致的存在性危机（仅限首次发生）
5. 在沃贡星球上被迫听诗朗诵造成的精神损害

不在保险范围内的情况包括：宇宙毁灭、因果律崩溃、以及在扎夸德星上赌博输掉的钱。

### 星际礼仪

不同星球有着截然不同的社交礼仪，以下是一些通用准则：

- 在遇到未知物种时，不要假设任何东西。你以为的"打招呼"在某些文明中可能意味着"我要吃掉你的祖母"。
- 永远不要评论外星人的外貌。你觉得对方长得像一坨会走路的果冻并不意味着对方想听到这个评价。
- 在进食场合，观察当地人先动筷子（或触手、吸盘、引力场）再开始吃。有些星球上，先吃的人会被认为是食物。
- 不要试图理解沃贡人的幽默感。他们没有。
- 如果有人请你喝泛银河含金漫步鸡尾酒，请先写好遗嘱。这种饮料的效果被形容为"被一块裹着柠檬片的金砖拍在脑门上"。

## 星球指南

以下是银河系中最值得（或最不值得但你可能不得不经过的）星球的详细介绍。

### 贝特星四号

贝特星四号是银河系西旋臂上的一颗田园星球，以其令人窒息的美丽风景和令人窒息的大气层闻名——是的，这两种窒息是同一种。该星球的大气中含有 23% 的氧气、45% 的氮气和 32% 的"芬芳微粒"，后者是一种能让任何碳基生物产生强烈幸福感的气体分子。

贝特星四号的旅游业极其发达，年接待游客超过 8 亿人次。但需要注意的是，由于芬芳微粒的作用，超过 67% 的游客在离开时会拒绝登上返程飞船，不得不由当地执法部门强制遣返。

#### 景点推荐

- **晶体瀑布群**：高达 3000 米的液态水晶瀑布，在双星照耀下折射出超过人类可见光谱 4 倍的色彩范围。建议携带光谱增强眼镜，否则你只能看到"很亮的白色"。
- **浮空森林**：由于贝特星四号异常的磁场分布，这片森林的树木全部倒悬在空中，根系朝天，树冠向地。在这里漫步的感觉被形容为"在一幅颠倒的油画里野餐"。
- **记忆湖**：一片含有微量精神活性物质的湖泊。将手浸入湖水中，你会看到自己最快乐的记忆以全息影像的形式在湖面上重现。旅游局提示：请勿将头部完全浸入湖水，除非你想永远活在回忆里——那不是比喻，上个月又有三个游客这么做了。

#### 注意事项

- 在贝特星四号停留不要超过 72 小时，否则芬芳微粒成瘾性会显著增加
- 当地货币为"快乐点"，汇率与游客的实时心情指数挂钩
- 禁止携带任何可能产生负面情绪的物品入境，包括但不限于：悲伤的音乐、工作邮件和前任的照片

### 沃贡星

沃贡星是银河系中最令人不快的星球之一，但由于它控制着三条主要超空间航道的收费站，你几乎不可能在星际旅行中完全避开它。

沃贡人是一种大型的、丑陋的、官僚主义的生物。他们的存在似乎是宇宙为了证明"进化并不总是朝着更好的方向"而设计的一个论据。沃贡人最著名的特征是他们极其糟糕的诗歌——在银河系最差诗歌排行榜上长期占据前三位，仅次于阿兹高斯人的"颂歌集"和地球人保拉·南希·米尔斯通的作品。

#### 通关指南

在经过沃贡星控制的超空间收费站时，你需要：

1. 填写 A-38 表格（三份，蓝色墨水，不接受任何其他颜色）
2. 在 B-65 窗口排队等候审核（预计等待时间：4 至 7 个标准小时）
3. 将审核通过的表格带到 C-12 窗口盖章
4. 回到 B-65 窗口确认盖章有效
5. 前往 D-7 窗口缴费
6. 将缴费收据带到 A-1 窗口换取通行证
7. 在出口处将通行证交给值班沃贡人——他会告诉你通行证过期了，你需要从步骤 1 重新开始

如果你在这个过程中表现出任何不耐烦，值班沃贡人有权对你朗诵他的最新诗作。这在银河法律中被归类为"酷刑"，但沃贡人的行政区域不受银河人权公约管辖。

#### 生存建议

- 带上至少一周的食物，因为沃贡星上的餐厅只在每个月的第三个星期二营业
- 学会用沃贡语说"你的表格非常出色"——这是唯一能让沃贡人露出近似微笑表情的句子
- 绝对不要称赞沃贡人的诗。他们会认为你在请求听更多

### 马格拉星

马格拉星是一颗古老的行星制造工厂，曾经是银河系最繁荣的产业中心之一。在经济最鼎盛的时期，马格拉星的工程师们按照客户的定制需求建造行星——从表面地形到核心密度，从大气成分到卫星数量，一切都可以精确定制。

然而，随着银河系经济大萧条的到来，定制行星市场崩溃了。毕竟，当你连午餐都吃不起的时候，谁还会花钱买一整颗行星呢？马格拉星的大部分设施已经关闭，工程师们进入了漫长的冬眠，等待经济复苏——他们已经等了五百万年了。

#### 参观须知

- 马格拉星目前仅对持有银河考古学会会员证的访客开放
- 部分区域的行星制造设备仍处于待机状态，请不要随意按按钮——上一个乱按按钮的游客不小心启动了一颗小型行星的引力核心，导致整个旅行团被压缩成了一个小方块
- 纪念品商店出售微型行星模型，价格从 100 到 10000 银河信用点不等。需要特别说明的是，标注"真实比例模型"的那些确实是真正的行星，只是很小

### 扎夸德星

扎夸德星是银河系最著名的赌博和娱乐中心，被称为"宇宙的拉斯维加斯"——如果拉斯维加斯有七个月亮、三个太阳，并且所有赌场都由一种会读心术的章鱼状生物经营的话。

扎夸德星的赌场提供各种形式的博彩活动，从传统的概率游戏到利用量子不确定性的"薛定谔轮盘"，再到需要在平行宇宙中同时下注的"多世界扑克"。需要注意的是，在扎夸德星赌博赢得的钱只能在扎夸德星上消费——这不是法律规定，而是因为离开这颗星球后你会发现钱已经通过某种你不理解的量子机制回到了赌场。

#### 热门场所

- **无限不概率赌场**：这家赌场的特色是所有赌局的结果都由无限不概率引擎决定。这意味着理论上任何结果都有可能发生，包括你的赌注自发变成一碗牵牛花和一只非常困惑的鲸鱼。
- **时间回溯酒吧**：在这家酒吧里，你可以一边喝酒一边观看自己还没有做出的决定的后果。很多客人在看到自己未来的宿醉程度后选择立刻离开。
- **平行宇宙剧院**：每天上演来自不同平行宇宙的戏剧作品。最受欢迎的剧目是《如果恐龙没有灭绝》（一部浪漫喜剧）和《如果引力常数略有不同》（一部极其短暂的悲剧，因为所有演员在第一幕就坍缩成了黑洞）。

#### 消费提醒

- 扎夸德星上的一杯标准饮料价格约为 75 银河信用点
- 赌场提供免费住宿，但退房时你可能会发现自己已经签署了一份为期十年的劳动合同
- 离开前请确认你的飞船还在停机坪上——扎夸德星的代客泊车服务有 8% 的飞船遗失率，他们声称这是"可接受的行业标准"

### 法兰妮星

法兰妮星是一颗完全由水构成的星球，没有任何固态地表。整颗星球就是一个直径 12000 公里的大水球，其中生活着银河系最友善也最聒噪的智慧物种——法兰妮海豚。

法兰妮海豚与地球海豚有着遥远的亲缘关系（具体有多遥远，大概就像你和冰箱里那块过期奶酪的关系），但他们发展出了高度先进的文明。他们的城市由声波凝固技术建造在水下，看起来像是一堆用果冻搭成的摩天大楼在海流中轻轻摇晃。

#### 旅游体验

- **深海歌剧**：法兰妮海豚的声波艺术是银河系公认的三大奇迹之一。他们的合唱可以在水中传播超过 5000 公里，音域跨越 14 个八度。人类游客需要佩戴声波转换耳机才能欣赏，否则你听到的只是一连串令人头疼的尖叫。
- **浮力漫步**：法兰妮星提供特制的浮力套装，让游客可以在不同深度的水层间自由穿梭。套装内置恒温系统和呼吸循环器，续航时间为 48 小时。请务必在续航耗尽前返回接待中心，因为没有套装的碳基生物在法兰妮星的深水区存活时间大约是 45 秒。
- **语言交换课程**：法兰妮海豚非常乐意教游客学习他们的语言。但要注意，海豚语的基本词汇量超过 200 万个单词，其中有 47 万个是用来描述不同状态的水的。你可能需要花一整个假期才能学会说"你好"——而且发音稍有不对就会变成"你的鳍闻起来像臭鱼"。

### 比特世界

比特世界是银河系唯一一颗完全数字化的星球。严格来说，它不是一颗"星球"，而是一个运行在一台比木星还大的超级计算机上的虚拟现实世界。据说这台计算机的设计初衷是为了计算生命、宇宙以及一切的终极答案，但在漫长的等待过程中，计算机里的虚拟居民发展出了自己的文明，并强烈反对被关机。

比特世界的居民自称"数据精灵"，他们的社会结构完全基于信息处理能力。在这里，拥有最快处理速度的个体享有最高的社会地位——这和人类社会里最有钱的人最受尊重本质上没什么区别，只不过更加坦诚。

#### 游览方式

访问比特世界需要将你的意识上传到计算机网络中。这个过程完全安全（理论上），上传成功率为 99.97%。剩下那 0.03% 的情况会导致你的意识被分散到网络的各个角落，变成一堆零散的记忆碎片在虚拟空间中随机漂流——但旅游局表示他们正在"积极修复这个已知问题"。

上传后你会获得一个虚拟化身，可以自由定制外观。受欢迎的化身样式包括：经典人形、精灵形态、龙形、以及"一团发光的纯粹数学公式"（这个选项在数据精灵中非常时髦）。

#### 值得体验的项目

- **现实编辑器**：在比特世界中，物理定律只是可选设置。你可以关掉引力在天空中飞行，把光速调慢到走路就能追上光子，或者把时间倒回去看看三分钟前的自己在做什么。
- **梦境集市**：一个交易虚拟体验的市场。你可以购买别人录制的梦境并在自己的意识中重播。热门商品包括"作为一只猫度过的慵懒下午""在超新星爆发中心吃早餐"以及"终于搞懂量子力学的那个瞬间"。
- **BUG 狩猎**：比特世界偶尔会出现系统漏洞，表现为现实中的裂缝和异常现象。数据精灵们把修复 BUG 变成了一项全民运动，游客也可以参与。发现并报告一个 BUG 可以获得系统奖励的虚拟货币，足够在梦境集市买一个不错的梦。

## 星际交通

在广袤的银河系中旅行，选择合适的交通方式至关重要。以下是目前主流的星际旅行方式及其优缺点。

### 超空间跳跃

超空间跳跃是最常见的长距离旅行方式。飞船通过超空间引擎在正常空间中撕开一个入口，穿越高维空间后在目的地附近的正常空间中重新出现。整个过程通常只需要几秒钟到几分钟不等，具体取决于距离和引擎型号。

超空间跳跃的主要缺点是在穿越过程中会产生短暂但强烈的恶心感，被旅行者们称为"维度呕吐"。银河制药公司为此开发了一种名为"跳跃宁"的药物，声称能减轻 85% 的不适感——但它的副作用是让你在接下来的三个小时里只能说沃贡语。

### 无限不概率驱动

这是一种革命性的旅行技术，基于量子力学中的不确定性原理。飞船通过生成一个有限不概率场，然后将其输入一杯热茶中（没有人完全理解为什么是热茶，但它确实有效），就能瞬间到达银河系中的任何一点。

无限不概率驱动的副作用相当壮观：在跳跃过程中，飞船及其乘客会经历一系列不可预测的临时变形。曾有记录的变形包括变成一条抹香鲸、一盆矮牵牛花、一个不太合理的沙发，以及一种"弥漫在空气中的含糊不安感"。所有变形都会在到达目的地后恢复正常，除了一个著名的案例——某位乘客变成了一只企鹅并选择保持这个状态，因为"企鹅的生活压力比较小"。

### 搭便车

对于预算有限的旅行者来说，搭星际便车是一个经济实惠的选择。你只需要一个电子拇指和足够的耐心。根据银河系搭车协会的统计，平均每发出 8.3 次搭车请求会有一艘飞船停下来。

搭便车的风险在于你无法选择搭乘的飞船。你可能搭上一艘豪华游轮开始一段舒适的旅程，也可能搭上一艘沃贡建造舰开始一段你余生都不愿回忆的经历。搭车协会建议在上船前确认以下几点：

- 飞船的生命维持系统是否正常运作
- 船长是否处于清醒状态
- 船上是否有你的物种可以食用的食物
- 飞船的目的地是否在你想去的方向上（你会惊讶于有多少搭车者忘记确认这一点）

### 虫洞通勤

虫洞是连接两个遥远空间点的天然时空隧道。银河系中已知的稳定虫洞有 347 个，其中 200 个已被开发为商业通勤线路。虫洞通勤的优点是便宜且快速，缺点是线路固定无法随意选择目的地。

虫洞通勤网络由银河交通管理局运营，被戏称为"银河地铁"。它有着和地球地铁相似的所有问题：高峰期拥挤、偶尔的延误、车厢里总有一个在吃味道很大的食物的乘客——唯一的区别是这里的"味道很大的食物"可能是一种活的、正在尖叫的、散发着硫磺气息的外星零食。

## 各星球美食推荐

旅行的乐趣有一半在于品尝当地美食。以下是银河系各大旅游星球的招牌菜品推荐。请注意，"美食"的定义在银河系各文明之间差异巨大，本手册采用的标准是"吃下去后大概率不会死"。

### 贝特星四号美食

贝特星四号的食物以让人产生幸福感著称，这主要归功于食材中天然含有的芬芳微粒。

- **幸福蘑菇浓汤**：一道用当地特产的发光蘑菇熬制的浓汤。蘑菇在烹饪过程中会发出柔和的蓝色光芒，喝下去之后你会体验到一种被形容为"被温暖的毯子从灵魂内部拥抱"的感觉。每碗 35 快乐点。
- **晶体果塔**：用晶体瀑布边生长的水晶果实制作的甜品。果实的口感介于冰淇淋和水晶之间——这意味着它非常好吃但有可能崩掉你的牙齿。建议选择"融化级"成熟度的果实。
- **芬芳微粒气泡水**：顾名思义，就是溶解了高浓度芬芳微粒的气泡水。一杯下去你会快乐到忘记自己为什么来这里。两杯下去你会快乐到忘记自己是谁。三杯以上不建议尝试，因为上一个喝三杯的人至今还在对着一棵树傻笑。

### 沃贡星美食

使用"美食"这个词来形容沃贡星的食物是对语言的一种亵渎，但既然你可能被迫在这里停留，以下是一些生存指南。

- **灰色营养块**：沃贡人的主食。它看起来像一块灰色的砖头，吃起来的口感也像一块灰色的砖头，味道介于"纸板"和"绝望"之间。但它确实能提供足够的营养来维持生命，如果你觉得"维持生命"是一件值得做的事的话。
- **合规浓缩饮料**：一种经过 37 道行政审批程序才获准生产的饮品。味道和颜色都是标准化的暗绿色。它的成分表长达 42 页，其中大部分是免责声明。
- **偶尔出现的走私食品**：在沃贡星的黑市上，你有时能买到从其他星球走私来的食物。这些食物通常被藏在表格文件夹里。如果你能找到那个在 D-7 窗口后面第三个走廊左拐的小隔间，据说那里有一位沃贡人在偷偷卖马格拉星的奶酪三明治。但你没从本手册上看到这个信息。

### 扎夸德星美食

扎夸德星的美食以浮夸和不可预测著称，完美地反映了这颗星球的整体风格。

- **薛定谔寿司**：在你打开盒子之前，这份寿司同时是新鲜的和过期的。打开后波函数坍缩，你才会知道自己是即将享用美食还是即将食物中毒。勇敢的食客视之为终极美食体验。
- **量子泡芙**：一种看起来只有拳头大小但质量等同于一辆小型汽车的甜品。不要问这是怎么做到的——答案涉及到亚原子粒子级别的食品工程，而且解释本身可能会让你失去食欲。每个 150 银河信用点，物有所值。
- **时间回溯鸡尾酒**：这款饮料的特别之处在于它的味道取决于你明天的心情。如果你明天心情好，今天的鸡尾酒就是甜的；如果明天心情不好，今天喝到的就是苦的。这导致了一个有趣的悖论：很多人因为鸡尾酒太苦而心情变差，从而使第二天喝到的鸡尾酒也变苦，陷入无限循环。

### 法兰妮星美食

法兰妮星的美食全部来自海洋，这在一颗完全由水组成的星球上毫不意外。

- **声波凝固海藻卷**：用法兰妮海豚的声波技术将海藻凝固成各种形状的小卷。口感弹滑，味道鲜美，而且每一口都会在你的味蕾上产生微弱的和声共振。这不是比喻，你真的能"听到"食物的味道。
- **深海热泉蒸螺**：从法兰妮星核心附近的深海热泉中采集的一种螺类，在极端高温高压下自然蒸熟。肉质鲜嫩到几乎是液态的，配上一种由发光浮游生物制成的酱汁，整道菜在黑暗中会像星空一样闪烁。
- **浮力甜点球**：一种能在水中悬浮的球形甜品，密度经过精确控制使其恰好漂浮在淡水和咸水的交界层。食客需要潜入特定深度才能吃到它。法兰妮海豚认为"为了食物付出努力"是用餐体验中不可或缺的一部分。

### 比特世界美食

比特世界的"美食"是纯粹的数字化体验，通过直接刺激意识中的味觉和嗅觉模块来实现。好消息是这里的食物零卡路里；坏消息是你的身体（如果你还记得它的话）在现实世界中正在挨饿。

- **无限滋味自助餐**：一种可以让你在一秒钟内体验一万种味道的程序。大多数用户在第三百种味道左右就会因为感官过载而暂时失去味觉概念。数据精灵认为这是"美食巅峰体验"，碳基生物通常称之为"味觉酷刑"。
- **记忆料理**：从你的记忆中提取你吃过的最美味的食物并完美复制其味觉体验。问题是记忆并不总是可靠的——你记忆中"奶奶做的最好吃的红烧肉"可能在复制后变成一种奇怪的甜腻感混合着童年夏天的模糊印象。
- **纯数学风味**：这是数据精灵的本土美食，味道是直接从数学公式中推导出来的。比如圆周率的味道被描述为"无限延伸的温和甜味"，而欧拉公式的味道据说能让品尝者落泪——但没有碳基生物能确认这一点，因为他们通常只能尝到"错误代码"的味道。

## 旅行注意事项

星际旅行虽然令人兴奋，但也充满了各种可能要你命的危险。以下是一些重要的安全提示。

### 健康与医疗

- **宇宙射线防护**：长时间暴露在星际空间中会受到宇宙射线的辐射。标准飞船的屏蔽层可以阻挡 99.7% 的有害辐射，但如果你搭便车上了一艘屏蔽不佳的飞船，建议穿上铅内衣——这不是玩笑，银河系旅行者健康协会真的有卖。
- **时差综合症**：不同星球的自转周期不同，从一颗昼夜周期 12 小时的星球旅行到一颗昼夜周期 73 小时的星球会导致严重的时差反应。症状包括但不限于：失眠、嗜睡、在不恰当的时间产生饥饿感、以及偶尔忘记自己在哪个星球上。
- **外星过敏**：你的免疫系统可能对外星环境中的某些物质产生过敏反应。常见的过敏源包括：贝特星四号的芬芳微粒（症状：无法停止微笑）、法兰妮星的某些浮游生物（症状：皮肤暂时变成蓝色）、以及沃贡人的存在本身（症状：强烈的存在性焦虑）。
- **重力适应**：不同星球的重力差异可能很大。在低重力星球上，你可能会不小心跳到大气层外；在高重力星球上，简单的跌倒可能导致骨折。建议在登陆前查阅目标星球的重力系数，并穿着适当的重力补偿服。

### 法律与合规

- 每颗星球有自己的法律体系，一些在你的母星完全合法的行为在其他星球可能是重罪。例如：在特拉法玛多星上打喷嚏是一种挑衅行为；在法兰妮星上往水里扔垃圾等同于谋杀未遂；在比特世界复制自己的意识则构成身份盗窃罪。
- 如果你不幸在外星球被捕，请立即联系你的母星领事馆。如果你的母星没有领事馆（或者你的母星已经不存在了），可以拨打银河公民援助热线：0-∞-HELP。
- 银河通用法律第 42 条规定，任何生命体都有权在被蒸发前获得最后一杯饮料。请务必记住这一权利。

### 通讯

- 银河标准通讯网络覆盖了约 78% 的已知空间。在信号覆盖区域内，你可以使用任何标准通讯设备联系其他星球。
- 超空间通讯会有不同程度的延迟，从几毫秒到几天不等，具体取决于你和通讯对象之间的超空间拓扑结构。
- 如果你需要在没有信号的区域发送紧急消息，可以尝试使用引力波通讯器——它的信号无法被任何物质阻挡，缺点是它的带宽只够发送大约 4 个字。建议提前想好最重要的遗言。

### 货币与支付

银河系中流通的货币种类超过 1500 种，但以下三种是最广泛接受的：

1. **银河信用点**：银河银行发行的标准货币，在所有银河联邦成员星球上通用。1 银河信用点大约等于一杯质量中等的咖啡的价格。
2. **特里吉特**：猎户座旋臂地区的区域货币。汇率波动较大，因为特里吉特的发行量取决于猎户座中央银行行长每天早上的心情。
3. **弗拉尼安贝壳**：法兰妮星的官方货币，由深海天然贝壳制成。在法兰妮星以外的地方基本没有价值，但非常漂亮，很多旅行者把它当成纪念品带走。

此外，在银河系的偏远地区，以物易物仍然是常见的交易方式。受欢迎的物物交换物品包括：干净的水、能量电池、娱乐数据存储卡，以及——没错——毛巾。一条状态良好的毛巾在偏远星区的价值可以相当于一周的食宿费。

## 紧急联络方式

在星际旅行中遇到紧急情况时，请根据情况联系以下机构：

### 银河紧急救援服务

- **通用紧急频率**：GESS-999（在任何标准通讯设备上发送此代码即可接通）
- **覆盖范围**：银河联邦全部成员星球及周边 50 光年缓冲区
- **平均响应时间**：20 分钟（银河标准时间）至 72 小时不等，取决于你所在的位置和遇到的紧急程度
- **服务语言**：支持银河系 2000 种主要语言的实时翻译

### 各星球本地急救

| 星球 | 急救号码 | 特殊说明 |
| --- | --- | --- |
| 贝特星四号 | HAPPY-911 | 接线员可能因芬芳微粒影响而过于放松 |
| 沃贡星 | 需填写急救申请表 VOG-E1 | 预计审批时间：3-5 个工作日 |
| 马格拉星 | 无紧急服务 | 建议自行解决 |
| 扎夸德星 | BET-000 | 急救费用以赌注形式结算，救不救得看运气 |
| 法兰妮星 | 频率 42.195 MHz 海豚语广播 | 只接受海豚语求救，请提前学习"救命"的发音 |
| 比特世界 | /emergency --help | 技术支持工单平均处理时间：2.7 毫秒 |

### 银河系旅行者互助网络

如果官方救援无法及时到达，银河系旅行者互助网络是你的最后希望。这是一个由经验丰富的星际旅行者自发组成的互助组织，成员遍布银河系各个角落。要加入这个网络，你只需要在任何星港的公告板上贴一张写有"42"的纸条——这是网络的暗号。

互助网络的成员会在以下情况中提供帮助：

- 飞船故障且无法联系救援服务
- 在陌生星球上迷路且不会说当地语言
- 被困在沃贡星的行政审批流程中
- 钱花光了但离最近的银河银行还有三个星系的距离
- 被卷入了一场你完全不理解的星际政治纠纷

### 紧急求生指南

如果所有联络方式都失败了，请记住以下银河旅行者的终极生存法则：

1. **不要恐慌**。这是星际旅行的第一法则。恐慌会降低你的判断力，消耗你的体力，并且让你看起来像一道开胃菜。
2. **找到你的毛巾**。只要你还有毛巾，情况就不算太糟。
3. **评估你的处境**。你在哪里？周围有什么？有没有什么东西正在试图吃掉你？如果有，跳到第 5 条。
4. **节约资源**。合理分配你的食物、水和能量储备。如果你不知道救援什么时候能到，按照"最悲观估计的两倍"来计划。
5. **奔跑**。如果有东西在追你，跑。如果跑不过，参考第 1 条。
6. **保持信念**。银河系虽然大得令人绝望，但也正因为它足够大，总会有人碰巧经过你的位置。统计学上讲，只要你活得够久，获救的概率趋近于 100%——问题只是"够久"是多久。

## 附录

### 银河系常用度量单位换算

| 单位名称 | 等值换算 | 用途 |
| --- | --- | --- |
| 银河标准年 | ≈ 地球年 × 1.07 | 时间计量 |
| 秒差距 | ≈ 3.26 光年 | 距离计量 |
| 银河信用点 | ≈ 6.28 地球美元 | 货币换算 |
| 沃贡行政时间单位 | 无法精确换算 | 在沃贡星上等待时使用 |
| 快乐点 | 取决于心情 | 贝特星四号专用货币 |
| 数据量子 | ≈ 1.21 太字节 | 比特世界信息计量 |

### 有用的银河系短语

以下短语在星际旅行中可能会派上用场：

- "我来自一颗大体上无害的星球。" —— 标准的自我介绍开场白
- "请不要吃我，我的营养价值很低。" —— 在面对食肉外星人时可能有用
- "我的毛巾在哪里？" —— 一句在任何情况下都合理的问句
- "我想联系我的领事馆。" —— 在被外星警察逮捕时使用
- "这个星球上的出口在哪个方向？" —— 当你受够了的时候
- "42" —— 万能回答。当你不知道该说什么的时候，说 42 通常不会让情况变得更糟

### 推荐阅读

- 《银河系搭车客指南》 —— 比本手册有趣得多，但准确度存疑
- 《沃贡诗歌全集》 —— 仅在你有自毁倾向时阅读
- 《法兰妮海豚语入门：前 500 个描述水的词汇》 —— 学习海豚语的必备教材
- 《比特世界生存手册：如何在虚拟现实中保持理智》 —— 在意识上传前必读
- 《如何在银河系赚到你的第一个百万信用点》 —— 一本充满了不切实际建议的励志书，但在长途旅行中可以打发时间

### 免责声明

## 星际通讯指南

在银河系旅行中，与远方的亲友保持联系是一件说起来容易做起来难的事。光速通讯在星际尺度上慢得令人发指——一条"妈，我到了"的消息从猎户座臂发到英仙座臂，大约需要 6000 年。等你妈回复"多穿点衣服"，你可能已经进化成了另一个物种。

### 超光速通讯方式

银河系目前有以下几种主流超光速通讯技术：

- **量子纠缠信使**：利用量子纠缠效应实现瞬时通讯。优点是速度快，缺点是每条消息只能发一个比特——是或否。这意味着一段完整的对话可能需要数百万次量子纠缠操作。曾有一位齐塔星的诗人试图用量子信使发送一首十四行诗，整个过程花了三个标准年，而收到的版本因为一个比特翻转变成了一首关于腌黄瓜的歌谣。

- **超维度邮政服务**：将信息折叠到更高维度中传递。速度取决于当天的维度天气，快的时候几秒钟就到，慢的时候可能比光速还慢。偶尔信件会在第七维度里迷路，出现在完全错误的时间线上。银河系邮政总局对此的官方解释是"这是一个特性，不是缺陷"。

- **思维广播网络**：通过植入式脑机接口直接传输思维内容。带宽极大，延迟极低，但有一个严重的隐私问题——你想发给朋友的"今天晚餐吃了什么"可能会不小心带上"我觉得老板是个白痴"的背景思维。已经有超过 340 起星际外交事件是由思维广播的意外泄露引起的。

- **虫洞快递**：把信息刻在一块耐高温合金板上，然后扔进虫洞。最可靠的方式之一，前提是虫洞不会在传输过程中坍缩。如果坍缩了，你的消息会被压缩成一个奇点，从技术上讲这是宇宙中最极致的数据压缩方式。

### 星际社交礼仪

不同星球的通讯礼仪差异巨大，以下是一些常见的注意事项：

1. 给半人马座 α 星的居民发消息时，永远不要使用感叹号。在他们的文化中，感叹号表示你正在对他们宣战。一个地球游客因为发了一条"到了！天气真好！"而引发了一场持续三天的星际冲突。
2. 泽塔网状星座的居民习惯在每条消息末尾附上自己当前的体温。如果你收到一条消息末尾写着"37.2"，不要以为是某种密码——他们只是在表示友好。
3. 大犬座矮星系的居民只在每个标准月的第三天回复消息，其余时间他们处于一种半冬眠的沉思状态。不要因为他们没回你的消息就觉得被冷落了——他们对所有人都一样。
4. 参宿四的居民沟通时会同时使用光信号和引力波。如果你只能接收到其中一种，你得到的信息会完全不同。很多误会就是这么产生的。

## 星际美食补充：饮品篇

前面我们介绍了各星球的美食，但遗漏了一个重要的类别——饮品。银河系的饮品文化之丰富，足以再写一本手册，但这里我们只能选取最具代表性的几种。

### 经典饮品

- **泛银河含漱爆破剂**：被誉为银河系最烈的鸡尾酒。喝下去的感觉"就像被一块裹着柠檬皮的大金砖砸中大脑"。配方是银河系最高机密之一，据说包含至少四种在大多数星球上属于违禁品的成分。建议首次尝试时旁边放一条毛巾，以及一位持证的急救人员。

- **阿尔法半人马冰茶**：并不含茶叶，也和冰没什么关系。它实际上是一种从半人马座α星的地下冰川中提取的液态矿物，喝起来的口感介于薄荷和金属之间。当地人声称它能延年益寿，但考虑到他们的平均寿命只有 40 个标准年，这个说法的可信度存疑。

- **参宿四日落**：一种会根据温度变色的饮品，从冰蓝到深红不等，完美模拟参宿四日落时的光谱变化。纯粹是视觉效果——味道嘛，像温吞的橙汁加了一点点氦气。参宿四的酒保坚持认为"你喝的不是味道，你喝的是体验"。

- **仙女座星云气泡水**：将仙女座大星云中的星际气体溶入水中制成。每一口都含有数百万年前恒星形成时的原始氢分子。广告语是"品尝宇宙的起源"，但老实说，它尝起来就是普通气泡水加了一点硫磺味。

- **织女星特调**：织女星系最受欢迎的早餐饮品，由当地一种光合作用植物的汁液发酵而成。它的特殊之处在于喝完后会让你的皮肤在黑暗中微微发光，持续约两个标准小时。这在织女星上被认为是时尚的表现，但在其他星球上可能会让你被当成生物污染源隔离。

### 饮酒注意事项

1. 永远不要在零重力环境下饮用碳酸饮品，除非你想体验液体从鼻腔喷出的独特感觉。
2. 某些星球的酒精饮品对碳基生命来说是强效溶剂，点单前务必确认你的生物兼容性。
3. 大多数星际航班不允许携带超过 500 毫升的液体登机，但这条规定在银河系的执行力度和交通法规一样——基本上没人遵守。
4. 如果一位陌生人请你喝一种"你从没听说过的当地特色饮品"，请三思。在银河系的社交文化中，这有 47% 的概率是真心好客，36% 的概率是某种社交陷阱，17% 的概率是你即将成为某个外星真人秀的素材。

## 紧急情况应对

无论你的旅行计划多么周密，总有可能遇到意料之外的紧急情况。以下是一些常见的星际紧急情况及其应对建议。

### 飞船故障

飞船在星际空间抛锚是最常见的紧急情况之一。如果你搭乘的是公共航线，救援通常在 3-72 个标准小时内到达。如果你在偏远航道上搭便车……那就祈祷你带了足够厚的书和足够多的毛巾。

基本应对步骤：

1. 不要恐慌（这条建议适用于所有情况）
2. 检查生命维持系统是否正常运作
3. 发送标准求救信号（频率 1420.405 MHz，氢线频率，银河系通用）
4. 如果氧气储备不足，将新陈代谢调整到最低水平
5. 阅读手册的其他章节以打发时间

### 遭遇不友好文明

在旅行中遇到不友好的外星文明时，最重要的原则是：不要做任何可能被解读为挑衅的事情。遗憾的是，在某些文明看来，"存在"本身就是一种挑衅。

建议的应对策略：

- 展示你的毛巾——在大多数文明中，携带毛巾被视为"知道自己在做什么"的标志
- 不要尝试讲笑话——幽默是银河系中最不具有通用性的文化现象
- 如果对方开始朗诵诗歌，立即捂住耳朵并寻找最近的逃生出口
- 在一切外交手段都失败后，大声且清晰地说出"我要求与你们的旅游局代表对话"

### 时间异常

在靠近大质量天体或穿越虫洞时，可能会遇到时间膨胀效应。你在黑洞附近度过的一个下午，可能相当于外面的几十年。回来之后发现你的宠物已经进化出了智慧并建立了自己的文明——这种事情并不罕见。

应对时间异常的实用建议：

1. 出发前取消所有定期订阅服务，否则你回来时可能会面临一笔天文数字的欠费
2. 不要在时间膨胀区域内查看社交媒体，看到你的朋友们老了几十年而你还是老样子，这种心理冲击比时间旅行本身还难适应
3. 随身携带一个独立计时器，记录你的主观经过时间，这在处理时间相关的法律纠纷时非常重要
4. 如果你意外回到了过去，最重要的原则是：不要杀死你的祖父。这不仅是伦理问题，更是一个令人头疼的物理悖论

## 星际住宿指南

找到一个安全、舒适、不会在半夜试图消化你的住处，是星际旅行中最被低估的挑战之一。

### 住宿类型

银河系的住宿选择之多样，远超任何一个星球的想象力：

- **标准星际酒店**：银河连锁品牌"希尔伯特旅馆"遍布主要航道，以"总有空房"为经营理念。房间干净，服务标准化，早餐提供 47 种生物兼容的营养方案。唯一的缺点是所有房间看起来一模一样，很多旅客反映在住了三天后开始怀疑自己是否真的换过房间。

- **本地民宿**：体验当地文化的最佳方式。在仙后座 β 星，你可以住在由活体珊瑚构成的海底洞穴里，珊瑚会根据你的情绪变换颜色。在猎犬座 III 号行星，民宿是悬浮在大气层中的气泡屋，窗外的风景每小时换一次，因为你的房子在随风漂移。在天琴座某颗不愿透露名称的星球上，"民宿"其实是房东的胃——别担心，这个物种的胃液 pH 值完全中性，还挺暖和的。

- **太空露营**：在小行星带扎帐篷听起来很浪漫，直到你意识到零重力环境下睡袋根本固定不住，而且微陨石雨的频率比你想象的要高得多。太空露营的铁律第一条：永远检查你的帐篷是否有微陨石穿孔。第二条：永远不要在真空中生篝火。

- **时间共享公寓**：不是那种地球上的分时度假骗局，而是字面意义上的"时间共享"——你和另一位旅客分享同一间公寓的不同时间层。你在星期二入住，他在星期二的另一个时间分支入住，你们永远不会碰面，除非时间线发生意外合并。

### 住宿安全提示

1. 入住前确认房间的大气成分与你的呼吸需求兼容。曾有一位地球旅客因为没检查而在一间充满甲烷的"豪华套房"里住了一晚——他活了下来，但头疼了整整一个标准周。
2. 检查床铺是否是"活的"。银河系有至少 200 种看起来像床的生物，其中大部分是无害的共生体，但有几种的消化周期恰好是一个睡眠周期那么长。
3. 不要把贵重物品留在房间里。星际酒店的保险箱在技术上是安全的，但对于任何掌握了四维空间操作的小偷来说，三维保险箱和一个敞开的抽屉没有区别。
4. 退房时检查你是否带走了所有物品，包括你在这个维度的所有身体部分。维度错位导致的"落下一条胳膊"事件虽然罕见，但确实发生过。
5. 如果你发现房间里有一面镜子映出的不是你的倒影而是一个完全不同的生物——不要慌，这可能只是上一位住客留下的全息投影。如果它开始跟你说话，那就该考虑换房间了。

## 旅行者常见问题

**问：星际旅行有年龄限制吗？**

答：银河系旅游局建议旅行者至少达到所在物种的"能够独立做出愚蠢决定"的年龄。对于人类来说，这大约是 18 个标准年。对于天狼星 B 的居民来说，这大约是 3 个标准天——他们的成长速度非常快，不幸的是衰老速度也是。

**问：我可以带宠物进行星际旅行吗？**

答：取决于宠物的定义。在银河系的不同文化中，"宠物"的定义范围从"一种你喂养并陪伴的较小生物"到"一种你崇拜并服从的较大生物"。如果你带的是地球上的猫，大多数星球都会接受——事实上，猫在银河系有一个广泛流传的都市传说：它们其实是来自第九维度的观察者，以宠物的形态潜伏在各个文明中收集情报。考虑到猫的行为模式，这个说法意外地有说服力。

**问：星际旅行中最常见的死因是什么？**

答：根据银河系旅游局的统计，排名前三分别是：1) 未阅读手册（34%）；2) 恐慌（28%）；3) 忘记带毛巾（22%）。值得注意的是，这三者经常同时发生。

**问：如果我在旅行中遇到了过去/未来的自己，应该怎么办？**

答：保持冷静，不要交换任何信息，不要拥抱（物质重叠可能导致局部现实崩溃），礼貌地点头致意，然后朝相反的方向走开。如果对方看起来比你老了很多并且试图告诉你什么——捂住耳朵。无论他要说什么，知道了只会让事情变得更糟。

## 附录：银河系度量衡换算表

星际旅行中最容易踩的坑之一就是度量衡混乱。以下是一些常用的换算关系：

### 长度

| 单位 | 等价于 | 备注 |
| ---- | ---- | ---- |
| 1 银河标准里 | 约 1.47 公里 | 基于银河中心黑洞的史瓦西半径定义 |
| 1 沃贡步 | 约 2.3 米 | 沃贡人走路时喜欢大步流星 |
| 1 织女星指 | 约 8 厘米 | 织女星人的手指异常修长 |
| 1 猎户跨度 | 约 12 光年 | 用于衡量星际距离的常用单位 |
| 1 小熊尾 | 约 0.7 天文单位 | 得名于小熊座文明的尾巴长度 |

### 时间

| 单位 | 等价于 | 备注 |
| ---- | ---- | ---- |
| 1 银河标准日 | 约 25.7 小时 | 银河系议会投票决定的，没人记得为什么是这个数 |
| 1 银河标准年 | 约 398.2 地球日 | 同上 |
| 1 沃贡工作日 | 约 18 小时 | 其中 12 小时是午休 |
| 1 参宿四瞬间 | 约 0.003 秒 | 参宿四人说话语速极快 |
| 1 大犬座纪 | 约 47 标准年 | 他们的历法以冬眠周期为基准 |

### 货币

泛银河信用点是最通用的货币，但在某些地方你可能需要换算：

- 1 泛银河信用点 ≈ 3.7 织女星晶币
- 1 泛银河信用点 ≈ 0.02 天狼星金锭
- 1 泛银河信用点 ≈ 142 半人马座贝壳
- 1 泛银河信用点 ≈ "一个还不错的故事"（在猎犬座 III 号行星，故事就是货币）
- 1 泛银河信用点 ≈ 0.5 份沃贡行政许可费（沃贡星球的一切都需要行政许可）

### 免责声明

银河系旅游局在此郑重声明：本手册中的一切信息仅供参考，不构成任何形式的旅行建议、医疗建议、法律建议或生存建议。如果你根据本手册中的信息行事并导致了不良后果，包括但不限于：物质分解、意识丢失、时间线分裂、存在性消除或被沃贡人朗诵诗歌，银河系旅游局概不负责。

旅行愉快，别忘了带毛巾。

---

*银河系旅游局 · 银河标准时 4721 年编*
*"不要恐慌。"*
`,Ey=`# 星际旅行手册：银河系实用指南（第43版）

本手册由银河系旅游局编写，旨在为一切碳基、硅基及其他尚未归类的生命体提供实用的星际旅行参考。如果你正在阅读这本手册，说明你至少还活着——这在银河系旅行中已经是一项了不起的成就了。

请注意：本手册中的信息截至银河标准时 4721 年，此后发生的星球爆炸、维度坍缩或菜单更新均未收录。旅游局对因使用过时信息导致的物质分解、时间悖论或消化不良概不负责。

## 旅行须知

在你踏上星际旅途之前，有一些基本常识需要牢记。银河系包含大约 4000 亿颗恒星，其中有人居住的星球约 1800 万颗，有值得一去的大概 39 颗，而真正不会试图杀死你的只有 4 颗——其中 2 颗还在审核中。

### 必备物品

每一位星际旅行者都应该随身携带以下物品：

- **毛巾**：这一点再怎么强调都不为过。毛巾是星际旅行者最有用的物品，它可以用来保暖、当枕头、做信号旗、过滤有毒气体，在必要时还能用来和沃贡人进行外交谈判。失去毛巾的旅行者在银河系的生存概率会降低 73.6%。
- **银河翻译鱼**：一种放入耳道后能实时翻译任何已知语言的小型生物。它以脑电波中的无意识频率为食，排泄物恰好是翻译后的神经信号。不要问这是怎么进化出来的，没有人知道，连翻译鱼自己也不知道。
- **次元口袋旅行包**：看起来只有手提包大小，但内部空间经过四维折叠处理，可以装下一整套露营装备、三天的口粮以及一本足够厚的书（推荐带本手册，它在很多星球上还可以当防身武器）。
- **泛银河信用卡**：银河系 89% 的文明都接受的支付方式。剩下 11% 的文明要么使用以物易物，要么根本不理解"所有权"这个概念——和他们打交道时请格外小心。
- **电子拇指**：搭星际便车的必备工具。它能向过往飞船发送标准搭车请求信号。成功率约为 12%，但考虑到替代方案是在太空中漂浮至死，这个概率已经相当不错了。

### 旅行保险

银河系旅行保险是一个充满创意的骗局，但我们仍然建议你购买。标准保险覆盖以下情况：

1. 被外星生物吞食后成功逃出（需在被吞食后 72 小时内提交索赔）
2. 因超空间跳跃导致的肢体重组错误（不包括额外长出的肢体，那算升级）
3. 行李在维度转换中丢失（赔偿上限为 500 银河信用点）
4. 因时间旅行导致的存在性危机（仅限首次发生）
5. 在沃贡星球上被迫听诗朗诵造成的精神损害

不在保险范围内的情况包括：宇宙毁灭、因果律崩溃、以及在扎夸德星上赌博输掉的钱。

### 星际礼仪

不同星球有着截然不同的社交礼仪，以下是一些通用准则：

- 在遇到未知物种时，不要假设任何东西。你以为的"打招呼"在某些文明中可能意味着"我要吃掉你的祖母"。
- 永远不要评论外星人的外貌。你觉得对方长得像一坨会走路的果冻并不意味着对方想听到这个评价。
- 在进食场合，观察当地人先动筷子（或触手、吸盘、引力场）再开始吃。有些星球上，先吃的人会被认为是食物。
- 不要试图理解沃贡人的幽默感。他们没有。
- 如果有人请你喝泛银河含金漫步鸡尾酒，请先写好遗嘱。这种饮料的效果被形容为"被一块裹着柠檬片的金砖拍在脑门上"。

## 星球指南

以下是银河系中最值得（或最不值得但你可能不得不经过的）星球的详细介绍。

### 贝特星四号

贝特星四号是银河系西旋臂上的一颗田园星球，以其令人窒息的美丽风景和令人窒息的大气层闻名——是的，这两种窒息是同一种。该星球的大气中含有 23% 的氧气、45% 的氮气和 32% 的"芬芳微粒"，后者是一种能让任何碳基生物产生强烈幸福感的气体分子。

贝特星四号的旅游业极其发达，年接待游客超过 8 亿人次。但需要注意的是，由于芬芳微粒的作用，超过 67% 的游客在离开时会拒绝登上返程飞船，不得不由当地执法部门强制遣返。

#### 景点推荐

- **晶体瀑布群**：高达 3000 米的液态水晶瀑布，在双星照耀下折射出超过人类可见光谱 4 倍的色彩范围。建议携带光谱增强眼镜，否则你只能看到"很亮的白色"。
- **浮空森林**：由于贝特星四号异常的磁场分布，这片森林的树木全部倒悬在空中，根系朝天，树冠向地。在这里漫步的感觉被形容为"在一幅颠倒的油画里野餐"。
- **记忆湖**：一片含有微量精神活性物质的湖泊。将手浸入湖水中，你会看到自己最快乐的记忆以全息影像的形式在湖面上重现。旅游局提示：请勿将头部完全浸入湖水，除非你想永远活在回忆里——那不是比喻，上个月又有三个游客这么做了。

#### 注意事项

- 在贝特星四号停留不要超过 72 小时，否则芬芳微粒成瘾性会显著增加
- 当地货币为"快乐点"，汇率与游客的实时心情指数挂钩
- 禁止携带任何可能产生负面情绪的物品入境，包括但不限于：悲伤的音乐、工作邮件和前任的照片

### 沃贡星

沃贡星是银河系中最令人不快的星球之一，但由于它控制着三条主要超空间航道的收费站，你几乎不可能在星际旅行中完全避开它。

沃贡人是一种大型的、丑陋的、官僚主义的生物。他们的存在似乎是宇宙为了证明"进化并不总是朝着更好的方向"而设计的一个论据。沃贡人最著名的特征是他们极其糟糕的诗歌——在银河系最差诗歌排行榜上长期占据前三位，仅次于阿兹高斯人的"颂歌集"和地球人保拉·南希·米尔斯通的作品。

#### 通关指南

在经过沃贡星控制的超空间收费站时，你需要：

1. 填写 A-38 表格（三份，蓝色墨水，不接受任何其他颜色）
2. 在 B-65 窗口排队等候审核（预计等待时间：4 至 7 个标准小时）
3. 将审核通过的表格带到 C-12 窗口盖章
4. 回到 B-65 窗口确认盖章有效
5. 前往 D-7 窗口缴费
6. 将缴费收据带到 A-1 窗口换取通行证
7. 在出口处将通行证交给值班沃贡人——他会告诉你通行证过期了，你需要从步骤 1 重新开始

如果你在这个过程中表现出任何不耐烦，值班沃贡人有权对你朗诵他的最新诗作。这在银河法律中被归类为"酷刑"，但沃贡人的行政区域不受银河人权公约管辖。

#### 生存建议

- 带上至少一周的食物，因为沃贡星上的餐厅只在每个月的第三个星期二营业
- 学会用沃贡语说"你的表格非常出色"——这是唯一能让沃贡人露出近似微笑表情的句子
- 绝对不要称赞沃贡人的诗。他们会认为你在请求听更多

### 马格拉星

马格拉星是一颗古老的行星制造工厂，曾经是银河系最繁荣的产业中心之一。在经济最鼎盛的时期，马格拉星的工程师们按照客户的定制需求建造行星——从表面地形到核心密度，从大气成分到卫星数量，一切都可以精确定制。

然而，随着银河系经济大萧条的到来，定制行星市场崩溃了。毕竟，当你连午餐都吃不起的时候，谁还会花钱买一整颗行星呢？马格拉星的大部分设施已经关闭，工程师们进入了漫长的冬眠，等待经济复苏——他们已经等了五百万年了。

#### 参观须知

- 马格拉星目前仅对持有银河考古学会会员证的访客开放
- 部分区域的行星制造设备仍处于待机状态，请不要随意按按钮——上一个乱按按钮的游客不小心启动了一颗小型行星的引力核心，导致整个旅行团被压缩成了一个小方块
- 纪念品商店出售微型行星模型，价格从 100 到 10000 银河信用点不等。需要特别说明的是，标注"真实比例模型"的那些确实是真正的行星，只是很小

### 扎夸德星

扎夸德星是银河系最著名的赌博和娱乐中心，被称为"宇宙的拉斯维加斯"——如果拉斯维加斯有七个月亮、三个太阳，并且所有赌场都由一种会读心术的章鱼状生物经营的话。

扎夸德星的赌场提供各种形式的博彩活动，从传统的概率游戏到利用量子不确定性的"薛定谔轮盘"，再到需要在平行宇宙中同时下注的"多世界扑克"。需要注意的是，在扎夸德星赌博赢得的钱只能在扎夸德星上消费——这不是法律规定，而是因为离开这颗星球后你会发现钱已经通过某种你不理解的量子机制回到了赌场。

#### 热门场所

- **无限不概率赌场**：这家赌场的特色是所有赌局的结果都由无限不概率引擎决定。这意味着理论上任何结果都有可能发生，包括你的赌注自发变成一碗牵牛花和一只非常困惑的鲸鱼。
- **时间回溯酒吧**：在这家酒吧里，你可以一边喝酒一边观看自己还没有做出的决定的后果。很多客人在看到自己未来的宿醉程度后选择立刻离开。
- **平行宇宙剧院**：每天上演来自不同平行宇宙的戏剧作品。最受欢迎的剧目是《如果恐龙没有灭绝》（一部浪漫喜剧）和《如果引力常数略有不同》（一部极其短暂的悲剧，因为所有演员在第一幕就坍缩成了黑洞）。

#### 消费提醒

- 扎夸德星上的一杯标准饮料价格约为 75 银河信用点
- 赌场提供免费住宿，但退房时你可能会发现自己已经签署了一份为期十年的劳动合同
- 离开前请确认你的飞船还在停机坪上——扎夸德星的代客泊车服务有 8% 的飞船遗失率，他们声称这是"可接受的行业标准"

### 法兰妮星

法兰妮星是一颗完全由水构成的星球，没有任何固态地表。整颗星球就是一个直径 12000 公里的大水球，其中生活着银河系最友善也最聒噪的智慧物种——法兰妮海豚。

法兰妮海豚与地球海豚有着遥远的亲缘关系（具体有多遥远，大概就像你和冰箱里那块过期奶酪的关系），但他们发展出了高度先进的文明。他们的城市由声波凝固技术建造在水下，看起来像是一堆用果冻搭成的摩天大楼在海流中轻轻摇晃。

#### 旅游体验

- **深海歌剧**：法兰妮海豚的声波艺术是银河系公认的三大奇迹之一。他们的合唱可以在水中传播超过 5000 公里，音域跨越 14 个八度。人类游客需要佩戴声波转换耳机才能欣赏，否则你听到的只是一连串令人头疼的尖叫。
- **浮力漫步**：法兰妮星提供特制的浮力套装，让游客可以在不同深度的水层间自由穿梭。套装内置恒温系统和呼吸循环器，续航时间为 48 小时。请务必在续航耗尽前返回接待中心，因为没有套装的碳基生物在法兰妮星的深水区存活时间大约是 45 秒。
- **语言交换课程**：法兰妮海豚非常乐意教游客学习他们的语言。但要注意，海豚语的基本词汇量超过 200 万个单词，其中有 47 万个是用来描述不同状态的水的。你可能需要花一整个假期才能学会说"你好"——而且发音稍有不对就会变成"你的鳍闻起来像臭鱼"。

### 比特世界

比特世界是银河系唯一一颗完全数字化的星球。严格来说，它不是一颗"星球"，而是一个运行在一台比木星还大的超级计算机上的虚拟现实世界。据说这台计算机的设计初衷是为了计算生命、宇宙以及一切的终极答案，但在漫长的等待过程中，计算机里的虚拟居民发展出了自己的文明，并强烈反对被关机。

比特世界的居民自称"数据精灵"，他们的社会结构完全基于信息处理能力。在这里，拥有最快处理速度的个体享有最高的社会地位——这和人类社会里最有钱的人最受尊重本质上没什么区别，只不过更加坦诚。

#### 游览方式

访问比特世界需要将你的意识上传到计算机网络中。这个过程完全安全（理论上），上传成功率为 99.97%。剩下那 0.03% 的情况会导致你的意识被分散到网络的各个角落，变成一堆零散的记忆碎片在虚拟空间中随机漂流——但旅游局表示他们正在"积极修复这个已知问题"。

上传后你会获得一个虚拟化身，可以自由定制外观。受欢迎的化身样式包括：经典人形、精灵形态、龙形、以及"一团发光的纯粹数学公式"（这个选项在数据精灵中非常时髦）。

#### 值得体验的项目

- **现实编辑器**：在比特世界中，物理定律只是可选设置。你可以关掉引力在天空中飞行，把光速调慢到走路就能追上光子，或者把时间倒回去看看三分钟前的自己在做什么。
- **梦境集市**：一个交易虚拟体验的市场。你可以购买别人录制的梦境并在自己的意识中重播。热门商品包括"作为一只猫度过的慵懒下午""在超新星爆发中心吃早餐"以及"终于搞懂量子力学的那个瞬间"。
- **BUG 狩猎**：比特世界偶尔会出现系统漏洞，表现为现实中的裂缝和异常现象。数据精灵们把修复 BUG 变成了一项全民运动，游客也可以参与。发现并报告一个 BUG 可以获得系统奖励的虚拟货币，足够在梦境集市买一个不错的梦。

## 星际交通

在广袤的银河系中旅行，选择合适的交通方式至关重要。以下是目前主流的星际旅行方式及其优缺点。

### 超空间跳跃

超空间跳跃是最常见的长距离旅行方式。飞船通过超空间引擎在正常空间中撕开一个入口，穿越高维空间后在目的地附近的正常空间中重新出现。整个过程通常只需要几秒钟到几分钟不等，具体取决于距离和引擎型号。

超空间跳跃的主要缺点是在穿越过程中会产生短暂但强烈的恶心感，被旅行者们称为"维度呕吐"。银河制药公司为此开发了一种名为"跳跃宁"的药物，声称能减轻 85% 的不适感——但它的副作用是让你在接下来的三个小时里只能说沃贡语。

### 无限不概率驱动

这是一种革命性的旅行技术，基于量子力学中的不确定性原理。飞船通过生成一个有限不概率场，然后将其输入一杯热茶中（没有人完全理解为什么是热茶，但它确实有效），就能瞬间到达银河系中的任何一点。

无限不概率驱动的副作用相当壮观：在跳跃过程中，飞船及其乘客会经历一系列不可预测的临时变形。曾有记录的变形包括变成一条抹香鲸、一盆矮牵牛花、一个不太合理的沙发，以及一种"弥漫在空气中的含糊不安感"。所有变形都会在到达目的地后恢复正常，除了一个著名的案例——某位乘客变成了一只企鹅并选择保持这个状态，因为"企鹅的生活压力比较小"。

### 搭便车

对于预算有限的旅行者来说，搭星际便车是一个经济实惠的选择。你只需要一个电子拇指和足够的耐心。根据银河系搭车协会的统计，平均每发出 8.3 次搭车请求会有一艘飞船停下来。

搭便车的风险在于你无法选择搭乘的飞船。你可能搭上一艘豪华游轮开始一段舒适的旅程，也可能搭上一艘沃贡建造舰开始一段你余生都不愿回忆的经历。搭车协会建议在上船前确认以下几点：

- 飞船的生命维持系统是否正常运作
- 船长是否处于清醒状态
- 船上是否有你的物种可以食用的食物
- 飞船的目的地是否在你想去的方向上（你会惊讶于有多少搭车者忘记确认这一点）

### 虫洞通勤

虫洞是连接两个遥远空间点的天然时空隧道。银河系中已知的稳定虫洞有 347 个，其中 200 个已被开发为商业通勤线路。虫洞通勤的优点是便宜且快速，缺点是线路固定无法随意选择目的地。

虫洞通勤网络由银河交通管理局运营，被戏称为"银河地铁"。它有着和地球地铁相似的所有问题：高峰期拥挤、偶尔的延误、车厢里总有一个在吃味道很大的食物的乘客——唯一的区别是这里的"味道很大的食物"可能是一种活的、正在尖叫的、散发着硫磺气息的外星零食。

## 各星球美食推荐

旅行的乐趣有一半在于品尝当地美食。以下是银河系各大旅游星球的招牌菜品推荐。请注意，"美食"的定义在银河系各文明之间差异巨大，本手册采用的标准是"吃下去后大概率不会死"。

### 贝特星四号美食

贝特星四号的食物以让人产生幸福感著称，这主要归功于食材中天然含有的芬芳微粒。

- **幸福蘑菇浓汤**：一道用当地特产的发光蘑菇熬制的浓汤。蘑菇在烹饪过程中会发出柔和的蓝色光芒，喝下去之后你会体验到一种被形容为"被温暖的毯子从灵魂内部拥抱"的感觉。每碗 35 快乐点。
- **晶体果塔**：用晶体瀑布边生长的水晶果实制作的甜品。果实的口感介于冰淇淋和水晶之间——这意味着它非常好吃但有可能崩掉你的牙齿。建议选择"融化级"成熟度的果实。
- **芬芳微粒气泡水**：顾名思义，就是溶解了高浓度芬芳微粒的气泡水。一杯下去你会快乐到忘记自己为什么来这里。两杯下去你会快乐到忘记自己是谁。三杯以上不建议尝试，因为上一个喝三杯的人至今还在对着一棵树傻笑。

### 沃贡星美食

使用"美食"这个词来形容沃贡星的食物是对语言的一种亵渎，但既然你可能被迫在这里停留，以下是一些生存指南。

- **灰色营养块**：沃贡人的主食。它看起来像一块灰色的砖头，吃起来的口感也像一块灰色的砖头，味道介于"纸板"和"绝望"之间。但它确实能提供足够的营养来维持生命，如果你觉得"维持生命"是一件值得做的事的话。
- **合规浓缩饮料**：一种经过 37 道行政审批程序才获准生产的饮品。味道和颜色都是标准化的暗绿色。它的成分表长达 42 页，其中大部分是免责声明。
- **偶尔出现的走私食品**：在沃贡星的黑市上，你有时能买到从其他星球走私来的食物。这些食物通常被藏在表格文件夹里。如果你能找到那个在 D-7 窗口后面第三个走廊左拐的小隔间，据说那里有一位沃贡人在偷偷卖马格拉星的奶酪三明治。但你没从本手册上看到这个信息。

### 扎夸德星美食

扎夸德星的美食以浮夸和不可预测著称，完美地反映了这颗星球的整体风格。

- **薛定谔寿司**：在你打开盒子之前，这份寿司同时是新鲜的和过期的。打开后波函数坍缩，你才会知道自己是即将享用美食还是即将食物中毒。勇敢的食客视之为终极美食体验。
- **量子泡芙**：一种看起来只有拳头大小但质量等同于一辆小型汽车的甜品。不要问这是怎么做到的——答案涉及到亚原子粒子级别的食品工程，而且解释本身可能会让你失去食欲。每个 150 银河信用点，物有所值。
- **时间回溯鸡尾酒**：这款饮料的特别之处在于它的味道取决于你明天的心情。如果你明天心情好，今天的鸡尾酒就是甜的；如果明天心情不好，今天喝到的就是苦的。这导致了一个有趣的悖论：很多人因为鸡尾酒太苦而心情变差，从而使第二天喝到的鸡尾酒也变苦，陷入无限循环。

### 法兰妮星美食

法兰妮星的美食全部来自海洋，这在一颗完全由水组成的星球上毫不意外。

- **声波凝固海藻卷**：用法兰妮海豚的声波技术将海藻凝固成各种形状的小卷。口感弹滑，味道鲜美，而且每一口都会在你的味蕾上产生微弱的和声共振。这不是比喻，你真的能"听到"食物的味道。
- **深海热泉蒸螺**：从法兰妮星核心附近的深海热泉中采集的一种螺类，在极端高温高压下自然蒸熟。肉质鲜嫩到几乎是液态的，配上一种由发光浮游生物制成的酱汁，整道菜在黑暗中会像星空一样闪烁。
- **浮力甜点球**：一种能在水中悬浮的球形甜品，密度经过精确控制使其恰好漂浮在淡水和咸水的交界层。食客需要潜入特定深度才能吃到它。法兰妮海豚认为"为了食物付出努力"是用餐体验中不可或缺的一部分。

### 比特世界美食

比特世界的"美食"是纯粹的数字化体验，通过直接刺激意识中的味觉和嗅觉模块来实现。好消息是这里的食物零卡路里；坏消息是你的身体（如果你还记得它的话）在现实世界中正在挨饿。

- **无限滋味自助餐**：一种可以让你在一秒钟内体验一万种味道的程序。大多数用户在第三百种味道左右就会因为感官过载而暂时失去味觉概念。数据精灵认为这是"美食巅峰体验"，碳基生物通常称之为"味觉酷刑"。
- **记忆料理**：从你的记忆中提取你吃过的最美味的食物并完美复制其味觉体验。问题是记忆并不总是可靠的——你记忆中"奶奶做的最好吃的红烧肉"可能在复制后变成一种奇怪的甜腻感混合着童年夏天的模糊印象。
- **纯数学风味**：这是数据精灵的本土美食，味道是直接从数学公式中推导出来的。比如圆周率的味道被描述为"无限延伸的温和甜味"，而欧拉公式的味道据说能让品尝者落泪——但没有碳基生物能确认这一点，因为他们通常只能尝到"错误代码"的味道。

## 旅行注意事项

星际旅行虽然令人兴奋，但也充满了各种可能要你命的危险。以下是一些重要的安全提示。

### 健康与医疗

- **宇宙射线防护**：长时间暴露在星际空间中会受到宇宙射线的辐射。标准飞船的屏蔽层可以阻挡 99.7% 的有害辐射，但如果你搭便车上了一艘屏蔽不佳的飞船，建议穿上铅内衣——这不是玩笑，银河系旅行者健康协会真的有卖。
- **时差综合症**：不同星球的自转周期不同，从一颗昼夜周期 12 小时的星球旅行到一颗昼夜周期 73 小时的星球会导致严重的时差反应。症状包括但不限于：失眠、嗜睡、在不恰当的时间产生饥饿感、以及偶尔忘记自己在哪个星球上。
- **外星过敏**：你的免疫系统可能对外星环境中的某些物质产生过敏反应。常见的过敏源包括：贝特星四号的芬芳微粒（症状：无法停止微笑）、法兰妮星的某些浮游生物（症状：皮肤暂时变成蓝色）、以及沃贡人的存在本身（症状：强烈的存在性焦虑）。
- **重力适应**：不同星球的重力差异可能很大。在低重力星球上，你可能会不小心跳到大气层外；在高重力星球上，简单的跌倒可能导致骨折。建议在登陆前查阅目标星球的重力系数，并穿着适当的重力补偿服。

### 法律与合规

- 每颗星球有自己的法律体系，一些在你的母星完全合法的行为在其他星球可能是重罪。例如：在特拉法玛多星上打喷嚏是一种挑衅行为；在法兰妮星上往水里扔垃圾等同于谋杀未遂；在比特世界复制自己的意识则构成身份盗窃罪。
- 如果你不幸在外星球被捕，请立即联系你的母星领事馆。如果你的母星没有领事馆（或者你的母星已经不存在了），可以拨打银河公民援助热线：0-∞-HELP。
- 银河通用法律第 42 条规定，任何生命体都有权在被蒸发前获得最后一杯饮料。请务必记住这一权利。

### 通讯

- 银河标准通讯网络覆盖了约 78% 的已知空间。在信号覆盖区域内，你可以使用任何标准通讯设备联系其他星球。
- 超空间通讯会有不同程度的延迟，从几毫秒到几天不等，具体取决于你和通讯对象之间的超空间拓扑结构。
- 如果你需要在没有信号的区域发送紧急消息，可以尝试使用引力波通讯器——它的信号无法被任何物质阻挡，缺点是它的带宽只够发送大约 4 个字。建议提前想好最重要的遗言。

### 货币与支付

银河系中流通的货币种类超过 1500 种，但以下三种是最广泛接受的：

1. **银河信用点**：银河银行发行的标准货币，在所有银河联邦成员星球上通用。1 银河信用点大约等于一杯质量中等的咖啡的价格。
2. **特里吉特**：猎户座旋臂地区的区域货币。汇率波动较大，因为特里吉特的发行量取决于猎户座中央银行行长每天早上的心情。
3. **弗拉尼安贝壳**：法兰妮星的官方货币，由深海天然贝壳制成。在法兰妮星以外的地方基本没有价值，但非常漂亮，很多旅行者把它当成纪念品带走。

此外，在银河系的偏远地区，以物易物仍然是常见的交易方式。受欢迎的物物交换物品包括：干净的水、能量电池、娱乐数据存储卡，以及——没错——毛巾。一条状态良好的毛巾在偏远星区的价值可以相当于一周的食宿费。

## 紧急联络方式

在星际旅行中遇到紧急情况时，请根据情况联系以下机构：

### 银河紧急救援服务

- **通用紧急频率**：GESS-999（在任何标准通讯设备上发送此代码即可接通）
- **覆盖范围**：银河联邦全部成员星球及周边 50 光年缓冲区
- **平均响应时间**：20 分钟（银河标准时间）至 72 小时不等，取决于你所在的位置和遇到的紧急程度
- **服务语言**：支持银河系 2000 种主要语言的实时翻译

### 各星球本地急救

| 星球 | 急救号码 | 特殊说明 |
| --- | --- | --- |
| 贝特星四号 | HAPPY-911 | 接线员可能因芬芳微粒影响而过于放松 |
| 沃贡星 | 需填写急救申请表 VOG-E1 | 预计审批时间：3-5 个工作日 |
| 马格拉星 | 无紧急服务 | 建议自行解决 |
| 扎夸德星 | BET-000 | 急救费用以赌注形式结算，救不救得看运气 |
| 法兰妮星 | 频率 42.195 MHz 海豚语广播 | 只接受海豚语求救，请提前学习"救命"的发音 |
| 比特世界 | /emergency --help | 技术支持工单平均处理时间：2.7 毫秒 |

### 银河系旅行者互助网络

如果官方救援无法及时到达，银河系旅行者互助网络是你的最后希望。这是一个由经验丰富的星际旅行者自发组成的互助组织，成员遍布银河系各个角落。要加入这个网络，你只需要在任何星港的公告板上贴一张写有"42"的纸条——这是网络的暗号。

互助网络的成员会在以下情况中提供帮助：

- 飞船故障且无法联系救援服务
- 在陌生星球上迷路且不会说当地语言
- 被困在沃贡星的行政审批流程中
- 钱花光了但离最近的银河银行还有三个星系的距离
- 被卷入了一场你完全不理解的星际政治纠纷

### 紧急求生指南

如果所有联络方式都失败了，请记住以下银河旅行者的终极生存法则：

1. **不要恐慌**。这是星际旅行的第一法则。恐慌会降低你的判断力，消耗你的体力，并且让你看起来像一道开胃菜。
2. **找到你的毛巾**。只要你还有毛巾，情况就不算太糟。
3. **评估你的处境**。你在哪里？周围有什么？有没有什么东西正在试图吃掉你？如果有，跳到第 5 条。
4. **节约资源**。合理分配你的食物、水和能量储备。如果你不知道救援什么时候能到，按照"最悲观估计的两倍"来计划。
5. **奔跑**。如果有东西在追你，跑。如果跑不过，参考第 1 条。
6. **保持信念**。银河系虽然大得令人绝望，但也正因为它足够大，总会有人碰巧经过你的位置。统计学上讲，只要你活得够久，获救的概率趋近于 100%——问题只是"够久"是多久。

## 附录

### 银河系常用度量单位换算

| 单位名称 | 等值换算 | 用途 |
| --- | --- | --- |
| 银河标准年 | ≈ 地球年 × 1.07 | 时间计量 |
| 秒差距 | ≈ 3.26 光年 | 距离计量 |
| 银河信用点 | ≈ 6.28 地球美元 | 货币换算 |
| 沃贡行政时间单位 | 无法精确换算 | 在沃贡星上等待时使用 |
| 快乐点 | 取决于心情 | 贝特星四号专用货币 |
| 数据量子 | ≈ 1.21 太字节 | 比特世界信息计量 |

### 有用的银河系短语

以下短语在星际旅行中可能会派上用场：

- "我来自一颗大体上无害的星球。" —— 标准的自我介绍开场白
- "请不要吃我，我的营养价值很低。" —— 在面对食肉外星人时可能有用
- "我的毛巾在哪里？" —— 一句在任何情况下都合理的问句
- "我想联系我的领事馆。" —— 在被外星警察逮捕时使用
- "这个星球上的出口在哪个方向？" —— 当你受够了的时候
- "42" —— 万能回答。当你不知道该说什么的时候，说 42 通常不会让情况变得更糟

### 推荐阅读

- 《银河系搭车客指南》 —— 比本手册有趣得多，但准确度存疑
- 《沃贡诗歌全集》 —— 仅在你有自毁倾向时阅读
- 《法兰妮海豚语入门：前 500 个描述水的词汇》 —— 学习海豚语的必备教材
- 《比特世界生存手册：如何在虚拟现实中保持理智》 —— 在意识上传前必读
- 《如何在银河系赚到你的第一个百万信用点》 —— 一本充满了不切实际建议的励志书，但在长途旅行中可以打发时间

### 免责声明

## 星际通讯指南

在银河系旅行中，与远方的亲友保持联系是一件说起来容易做起来难的事。光速通讯在星际尺度上慢得令人发指——一条"妈，我到了"的消息从猎户座臂发到英仙座臂，大约需要 6000 年。等你妈回复"多穿点衣服"，你可能已经进化成了另一个物种。

### 超光速通讯方式

银河系目前有以下几种主流超光速通讯技术：

- **量子纠缠信使**：利用量子纠缠效应实现瞬时通讯。优点是速度快，缺点是每条消息只能发一个比特——是或否。这意味着一段完整的对话可能需要数百万次量子纠缠操作。曾有一位齐塔星的诗人试图用量子信使发送一首十四行诗，整个过程花了三个标准年，而收到的版本因为一个比特翻转变成了一首关于腌黄瓜的歌谣。

- **超维度邮政服务**：将信息折叠到更高维度中传递。速度取决于当天的维度天气，快的时候几秒钟就到，慢的时候可能比光速还慢。偶尔信件会在第七维度里迷路，出现在完全错误的时间线上。银河系邮政总局对此的官方解释是"这是一个特性，不是缺陷"。

- **思维广播网络**：通过植入式脑机接口直接传输思维内容。带宽极大，延迟极低，但有一个严重的隐私问题——你想发给朋友的"今天晚餐吃了什么"可能会不小心带上"我觉得老板是个白痴"的背景思维。已经有超过 340 起星际外交事件是由思维广播的意外泄露引起的。

- **虫洞快递**：把信息刻在一块耐高温合金板上，然后扔进虫洞。最可靠的方式之一，前提是虫洞不会在传输过程中坍缩。如果坍缩了，你的消息会被压缩成一个奇点，从技术上讲这是宇宙中最极致的数据压缩方式。

### 星际社交礼仪

不同星球的通讯礼仪差异巨大，以下是一些常见的注意事项：

1. 给半人马座 α 星的居民发消息时，永远不要使用感叹号。在他们的文化中，感叹号表示你正在对他们宣战。一个地球游客因为发了一条"到了！天气真好！"而引发了一场持续三天的星际冲突。
2. 泽塔网状星座的居民习惯在每条消息末尾附上自己当前的体温。如果你收到一条消息末尾写着"37.2"，不要以为是某种密码——他们只是在表示友好。
3. 大犬座矮星系的居民只在每个标准月的第三天回复消息，其余时间他们处于一种半冬眠的沉思状态。不要因为他们没回你的消息就觉得被冷落了——他们对所有人都一样。
4. 参宿四的居民沟通时会同时使用光信号和引力波。如果你只能接收到其中一种，你得到的信息会完全不同。很多误会就是这么产生的。

## 星际美食补充：饮品篇

前面我们介绍了各星球的美食，但遗漏了一个重要的类别——饮品。银河系的饮品文化之丰富，足以再写一本手册，但这里我们只能选取最具代表性的几种。

### 经典饮品

- **泛银河含漱爆破剂**：被誉为银河系最烈的鸡尾酒，目前已被 12 个星系列为管制饮品。喝下去的感觉"就像被一块裹着柠檬皮的大金砖砸中大脑"。配方是银河系最高机密之一，据说包含至少四种在大多数星球上属于违禁品的成分。建议首次尝试时旁边放一条毛巾，以及一位持证的急救人员。

- **阿尔法半人马冰茶**：并不含茶叶，也和冰没什么关系。它实际上是一种从半人马座α星的地下冰川中提取的液态矿物，喝起来的口感介于薄荷和金属之间。当地人声称它能延年益寿，但考虑到他们的平均寿命只有 40 个标准年，这个说法的可信度存疑。

- **参宿四日落**：一种会根据温度变色的饮品，从冰蓝到深红不等，完美模拟参宿四日落时的光谱变化。纯粹是视觉效果——味道嘛，像温吞的橙汁加了一点点氦气。参宿四的酒保坚持认为"你喝的不是味道，你喝的是体验"。

- **仙女座星云气泡水**：将仙女座大星云中的星际气体溶入水中制成。每一口都含有数百万年前恒星形成时的原始氢分子。广告语是"品尝宇宙的起源"，但老实说，它尝起来就是普通气泡水加了一点硫磺味。

- **织女星特调**：织女星系最受欢迎的早餐饮品，由当地一种光合作用植物的汁液发酵而成。它的特殊之处在于喝完后会让你的皮肤在黑暗中微微发光，持续约两个标准小时。这在织女星上被认为是时尚的表现，但在其他星球上可能会让你被当成生物污染源隔离。

### 饮酒注意事项

1. 永远不要在零重力环境下饮用碳酸饮品，除非你想体验液体从鼻腔喷出的独特感觉。
2. 某些星球的酒精饮品对碳基生命来说是强效溶剂，点单前务必确认你的生物兼容性。
3. 大多数星际航班不允许携带超过 500 毫升的液体登机，但这条规定在银河系的执行力度和交通法规一样——基本上没人遵守。
4. 如果一位陌生人请你喝一种"你从没听说过的当地特色饮品"，请三思。在银河系的社交文化中，这有 47% 的概率是真心好客，36% 的概率是某种社交陷阱，17% 的概率是你即将成为某个外星真人秀的素材。

## 紧急情况应对

无论你的旅行计划多么周密，总有可能遇到意料之外的紧急情况。以下是一些常见的星际紧急情况及其应对建议。

### 飞船故障

飞船在星际空间抛锚是最常见的紧急情况之一。如果你搭乘的是公共航线，救援通常在 3-72 个标准小时内到达。如果你在偏远航道上搭便车……那就祈祷你带了足够厚的书和足够多的毛巾。

基本应对步骤：

1. 不要恐慌（这条建议适用于所有情况）
2. 检查生命维持系统是否正常运作
3. 发送标准求救信号（频率 1420.405 MHz，氢线频率，银河系通用）
4. 如果氧气储备不足，将新陈代谢调整到最低水平
5. 阅读手册的其他章节以打发时间

### 遭遇不友好文明

在旅行中遇到不友好的外星文明时，最重要的原则是：不要做任何可能被解读为挑衅的事情。遗憾的是，在某些文明看来，"存在"本身就是一种挑衅。

建议的应对策略：

- 展示你的毛巾——在大多数文明中，携带毛巾被视为"知道自己在做什么"的标志
- 不要尝试讲笑话——幽默是银河系中最不具有通用性的文化现象
- 如果对方开始朗诵诗歌，立即捂住耳朵并寻找最近的逃生出口
- 在一切外交手段都失败后，大声且清晰地说出"我要求与你们的旅游局代表对话"

### 时间异常

在靠近大质量天体或穿越虫洞时，可能会遇到时间膨胀效应。你在黑洞附近度过的一个下午，可能相当于外面的几十年。回来之后发现你的宠物已经进化出了智慧并建立了自己的文明——这种事情并不罕见。

应对时间异常的实用建议：

1. 出发前取消所有定期订阅服务，否则你回来时可能会面临一笔天文数字的欠费
2. 不要在时间膨胀区域内查看社交媒体，看到你的朋友们老了几十年而你还是老样子，这种心理冲击比时间旅行本身还难适应
3. 随身携带一个独立计时器，记录你的主观经过时间，这在处理时间相关的法律纠纷时非常重要
4. 如果你意外回到了过去，最重要的原则是：不要杀死你的祖父。这不仅是伦理问题，更是一个令人头疼的物理悖论

## 星际住宿指南

找到一个安全、舒适、不会在半夜试图消化你的住处，是星际旅行中最被低估的挑战之一。

### 住宿类型

银河系的住宿选择之多样，远超任何一个星球的想象力：

- **标准星际酒店**：银河连锁品牌"希尔伯特旅馆"遍布主要航道，以"总有空房"为经营理念。房间干净，服务标准化，早餐提供 47 种生物兼容的营养方案。唯一的缺点是所有房间看起来一模一样，很多旅客反映在住了三天后开始怀疑自己是否真的换过房间。

- **本地民宿**：体验当地文化的最佳方式。在仙后座 β 星，你可以住在由活体珊瑚构成的海底洞穴里，珊瑚会根据你的情绪变换颜色。在猎犬座 III 号行星，民宿是悬浮在大气层中的气泡屋，窗外的风景每小时换一次，因为你的房子在随风漂移。在天琴座某颗不愿透露名称的星球上，"民宿"其实是房东的胃——别担心，这个物种的胃液 pH 值完全中性，还挺暖和的。

- **太空露营**：在小行星带扎帐篷听起来很浪漫，直到你意识到零重力环境下睡袋根本固定不住，而且微陨石雨的频率比你想象的要高得多。太空露营的铁律第一条：永远检查你的帐篷是否有微陨石穿孔。第二条：永远不要在真空中生篝火。

- **时间共享公寓**：不是那种地球上的分时度假骗局，而是字面意义上的"时间共享"——你和另一位旅客分享同一间公寓的不同时间层。你在星期二入住，他在星期二的另一个时间分支入住，你们永远不会碰面，除非时间线发生意外合并。

### 住宿安全提示

1. 入住前确认房间的大气成分与你的呼吸需求兼容。曾有一位地球旅客因为没检查而在一间充满甲烷的"豪华套房"里住了一晚——他活了下来，但头疼了整整一个标准周。
2. 检查床铺是否是"活的"。银河系有至少 200 种看起来像床的生物，其中大部分是无害的共生体，但有几种的消化周期恰好是一个睡眠周期那么长。
3. 不要把贵重物品留在房间里。星际酒店的保险箱在技术上是安全的，但对于任何掌握了四维空间操作的小偷来说，三维保险箱和一个敞开的抽屉没有区别。
4. 退房时检查你是否带走了所有物品，包括你在这个维度的所有身体部分。维度错位导致的"落下一条胳膊"事件虽然罕见，但确实发生过。
5. 如果你发现房间里有一面镜子映出的不是你的倒影而是一个完全不同的生物——不要慌，这可能只是上一位住客留下的全息投影。如果它开始跟你说话，那就该考虑换房间了。

## 旅行者常见问题

**问：星际旅行有年龄限制吗？**

答：银河系旅游局建议旅行者至少达到所在物种的"能够独立做出愚蠢决定"的年龄。对于人类来说，这大约是 18 个标准年。对于天狼星 B 的居民来说，这大约是 3 个标准天——他们的成长速度非常快，不幸的是衰老速度也是。

**问：我可以带宠物进行星际旅行吗？**

答：取决于宠物的定义。在银河系的不同文化中，"宠物"的定义范围从"一种你喂养并陪伴的较小生物"到"一种你崇拜并服从的较大生物"。如果你带的是地球上的猫，大多数星球都会接受——事实上，猫在银河系有一个广泛流传的都市传说：它们其实是来自第九维度的观察者，以宠物的形态潜伏在各个文明中收集情报。考虑到猫的行为模式，这个说法意外地有说服力。

**问：星际旅行中最常见的死因是什么？**

答：根据银河系旅游局的统计，排名前三分别是：1) 未阅读手册（34%）；2) 恐慌（28%）；3) 忘记带毛巾（22%）。值得注意的是，这三者经常同时发生。

**问：如果我在旅行中遇到了过去/未来的自己，应该怎么办？**

答：保持冷静，不要交换任何信息，不要拥抱（物质重叠可能导致局部现实崩溃），礼貌地点头致意，然后朝相反的方向走开。如果对方看起来比你老了很多并且试图告诉你什么——捂住耳朵。无论他要说什么，知道了只会让事情变得更糟。

## 附录：银河系度量衡换算表

星际旅行中最容易踩的坑之一就是度量衡混乱。以下是一些常用的换算关系：

### 长度

| 单位 | 等价于 | 备注 |
| ---- | ---- | ---- |
| 1 银河标准里 | 约 1.47 公里 | 基于银河中心黑洞的史瓦西半径定义 |
| 1 沃贡步 | 约 2.3 米 | 沃贡人走路时喜欢大步流星 |
| 1 织女星指 | 约 8 厘米 | 织女星人的手指异常修长 |
| 1 猎户跨度 | 约 12 光年 | 用于衡量星际距离的常用单位 |
| 1 小熊尾 | 约 0.7 天文单位 | 得名于小熊座文明的尾巴长度 |

### 时间

| 单位 | 等价于 | 备注 |
| ---- | ---- | ---- |
| 1 银河标准日 | 约 25.7 小时 | 银河系议会投票决定的，没人记得为什么是这个数 |
| 1 银河标准年 | 约 398.2 地球日 | 同上 |
| 1 沃贡工作日 | 约 18 小时 | 其中 12 小时是午休 |
| 1 参宿四瞬间 | 约 0.003 秒 | 参宿四人说话语速极快 |
| 1 大犬座纪 | 约 47 标准年 | 他们的历法以冬眠周期为基准 |

### 货币

泛银河信用点是最通用的货币，但在某些地方你可能需要换算：

- 1 泛银河信用点 ≈ 3.7 织女星晶币
- 1 泛银河信用点 ≈ 0.02 天狼星金锭
- 1 泛银河信用点 ≈ 142 半人马座贝壳
- 1 泛银河信用点 ≈ "一个还不错的故事"（在猎犬座 III 号行星，故事就是货币）
- 1 泛银河信用点 ≈ 0.5 份沃贡行政许可费（沃贡星球的一切都需要行政许可）

### 免责声明

银河系旅游局在此郑重声明：本手册中的一切信息仅供参考，不构成任何形式的旅行建议、医疗建议、法律建议或生存建议。如果你根据本手册中的信息行事并导致了不良后果，包括但不限于：物质分解、意识丢失、时间线分裂、存在性消除或被沃贡人朗诵诗歌，银河系旅游局概不负责。

旅行愉快，别忘了带毛巾。

---

*银河系旅游局 · 银河标准时 4721 年编*
*"不要恐慌。"*
`,My=`《千与千寻》是宫崎骏最具代表性的作品之一，影片通过千寻在神隐世界的奇妙冒险，讲述了一个关于成长与勇气的故事。
那些光怪陆离的神灵和妖怪，构建出一个既陌生又迷人的异世界，让观众仿佛也跟着千寻一起踏入了那扇隧道。
整部影片的视觉风格华丽而克制，每一帧都值得反复品味。
宫崎骏用手绘动画的温度感取代了CG的冰冷精确，让每一个场景都像是从水彩画里走出来的。
从油屋的繁华喧闹到花田的宁静辽阔，色彩的运用堪称教科书级别。
尤其是黄昏时分油屋亮起灯笼的那个长镜头，暖橙色的光芒倒映在水面上，繁忙的神灵们鱼贯而入，整个画面热闹得像是梦境里的庙会。
而当千寻独自站在阳台上望向远方的海面时，画面又切换成冷蓝色调，安静得让人几乎能听到风声。
这种冷暖色调的对比不是炫技，而是在用色彩讲述千寻内心的孤独与温暖交织。

最令人动容的是影片中对人际关系的温暖刻画。
无脸男从孤独到暴走再到平静，白龙与千寻之间那份纯粹的羁绊，还有锅炉爷爷看似冷漠实则善良的性格，每一组关系都饱含深意。
宫崎骏没有把善恶画成黑白分明的对立，而是让每个角色都带着各自的灰度存在，这种处理方式格外真实。
汤婆婆表面上是贪婪刻薄的反派，但她对宝宝的溺爱、对油屋员工的某种责任感，又让人恨不起来。
就连无脸男那段暴走戏份，本质上也只是一个孤独灵魂想要被接纳的笨拙尝试，看得人心酸又心疼。

千寻的成长弧线是整部影片的灵魂所在。
从开头那个躲在妈妈身后、怯生生不敢走路的小女孩，到后来独自面对汤婆婆、勇敢地说出"请让我在这里工作"的少女，这个转变既自然又动人。
影片没有给她任何超能力或者外挂，她靠的全是善良、坚持和一点点运气。
这恰恰是宫崎骏最高明的地方：英雄不需要力量，只需要勇气。
千寻甚至不是那种聪明伶俐的主角，她会犯错、会哭、会害怕，但正因如此她才格外真实。
她最打动人的时刻不是那些"英雄瞬间"，而是那些咬着牙撑下去的普通时刻。
比如在暴风雨中沿着外墙管道攀爬到锅炉房，脚下就是万丈深渊，她怕得要死但还是一步步往前挪。
这种"怕但还是要做"的勇气，比任何超能力都更有说服力。

油屋这个场景的设定简直是神来之笔。
它既是一个服务众神的澡堂，又是一个微缩的社会模型，等级分明、规则严苛、金钱至上。
千寻在油屋里打工的经历，某种程度上就是每个人初入社会时的写照——被忽视、被欺负、不知道规矩、手忙脚乱。
但她没有选择逃避，而是一步步找到了自己的位置。
给腐烂神洗澡那场戏的细节处理尤其精妙，从恶心到好奇到全力以赴，短短几分钟就把职场新人的心路历程演完了。
那个从腐烂神身体里拔出一整座垃圾山的画面，既是视觉奇观，也是对消费主义的辛辣讽刺。

久石让的配乐为这部电影注入了另一层灵魂。
主题曲《いつも何度でも》的旋律简单到极致，但每次响起都能精准地击中情绪的软肋。
列车在海面上行驶的那段无台词场景，配上钢琴曲，安静得像是整个世界都按下了暂停键。
这大概是动画电影史上最美的"留白"之一——什么都没说，什么都说了。
久石让懂得用沉默来放大情绪，而不是用音量来堆砌气氛。
回头再听《あの夏へ》的前奏，那几个简单的钢琴音符就能把人瞬间拉回油屋的黄昏。

影片中隐藏着大量对日本泡沫经济时代的隐喻。
千寻父母在开头因为贪吃而变成猪，油屋里众人对金子的疯狂追逐，无脸男用金子收买人心的段落，无一不在影射消费主义的陷阱。
宫崎骏并没有刻意说教，而是把这些批判自然地融入了故事的肌理中，让观众在感动之余也能有所反思。
甚至那个"忘记名字就永远回不去"的设定，也可以读作对身份认同在物质洪流中迷失的警示。
白龙忘记了自己的真名"赈早见琥珀主"，千寻差点被改名为"千"后忘记自我，名字在这里不只是符号，而是存在本身的锚点。

宫崎骏的叙事节奏在这部电影里达到了一种罕见的平衡。
紧张的场面——比如千寻在锅炉房的初次亮相、面对无脸男的对峙——和舒缓的段落——比如海上列车、花田漫步——交替出现，形成呼吸一般的韵律。
他从不急于推进剧情，而是给每个场景足够的时间去呼吸、去发酵。
这种"慢"在当今快节奏的动画市场中显得尤其珍贵。
很多动画导演试图模仿这种节奏，但大多只学到了形，没有学到神。
有些作品学到了"慢"，却忘了慢的前提是每一帧都有内容可看；有些作品堆了满屏的细节，却缺了那种让人心甘情愿沉浸其中的情绪引力。
宫崎骏的慢是有重力的慢，它让你停下来不是因为无聊，而是因为舍不得。

影片的结尾看似平淡，千寻只是回到了现实世界，但观众心中留下的余韵却极为深刻。
那些在神隐世界经历的一切塑造了一个更坚强的千寻，而她忘记了这段记忆这一设定，更让整个故事多了一层关于遗忘与铭记的哲学意味。
千寻头上那根来自钱婆婆的头绳，是整段经历唯一留下的物证，像是一个关于记忆的隐喻——我们或许忘记了具体的事件，但那些经历早已融入了我们的骨骼。
这部电影历经二十多年，依然让每一代新观众为之着迷。
每次重看都会注意到新的细节，每次重看都会有不同的感动，这就是经典的力量。
小时候看的是冒险和奇幻，长大后看到的是孤独、身份和社会规训。
再大一些，又会被那些安静的留白所打动——千寻在海上列车里望着窗外的眼神，像极了每个成年人某个发呆的午后。
它不属于任何一个时代，它属于所有曾经是孩子的人。
`,Ty=`《千与千寻》是宫崎骏最具代表性的作品之一，影片通过千寻在神隐世界的神奇冒险，讲述了一个关于成长与勇气的故事。
那些光怪陆离的神灵和妖怪，构建出一个既陌生又迷人的异世界，让观众仿佛也跟着千寻一起踏入了那扇隧道。
整部影片的视觉风格华丽而克制，每一帧都值得反复品味。
宫崎骏用手绘动画的温度感取代了CG的冰冷精确，让每一个场景都像是从水彩画里走出来的。
从油屋的繁华喧闹到花田的宁静辽阔，色彩的运用堪称教科书级别。
尤其是黄昏时分油屋亮起灯笼的那个长镜头，暖橙色的光芒倒映在水面上，繁忙的神灵们鱼贯而入，整个画面热闹得像是梦境里的庙会。
而当千寻独自站在阳台上望向远方的海面时，画面又切换成冷蓝色调，安静得让人几乎能听到风声。
这种冷暖色调的对比不是炫技，而是在用色彩讲述千寻内心的孤独与温暖交织。

最令人动容的是影片中对人际关系的治愈刻画。
无脸男从孤独到暴走再到平静，白龙与千寻之间那份纯粹的羁绊，还有锅炉爷爷看似冷漠实则善良的性格，每一组关系都饱含深意。
宫崎骏没有把善恶画成黑白分明的对立，而是让每个角色都带着各自的灰度存在，这种处理方式格外真实。
汤婆婆表面上是贪婪刻薄的反派，但她对宝宝的溺爱、对油屋员工的某种责任感，又让人恨不起来。
就连无脸男那段暴走戏份，本质上也只是一个孤独灵魂想要被接纳的笨拙尝试，看得人心酸又心疼。

千寻的成长弧线是整部影片的灵魂所在。
从开头那个躲在妈妈身后、怯生生不敢走路的小女孩，到后来独自面对汤婆婆、勇敢地说出"请让我在这里工作"的少女，这个转变既自然又动人。
影片没有给她任何超能力或者外挂，她靠的全是善良、坚持和一点点运气。
这恰恰是宫崎骏最高明的地方：英雄不需要力量，只需要勇气。
千寻甚至不是那种聪明伶俐的主角，她会犯错、会哭、会害怕，但正因如此她才格外真实。
她最打动人的时刻不是那些"英雄瞬间"，而是那些咬着牙撑下去的普通时刻。
比如在暴风雨中沿着外墙管道攀爬到锅炉房，脚下就是万丈深渊，她怕得要死但还是一步步往前挪。
这种"怕但还是要做"的勇气，比任何超能力都更有说服力。

油屋这个场景的设定简直是神来之笔。
它既是一个服务众神的澡堂，又是一个微缩的社会模型，等级分明、规则严苛、金钱至上。
千寻在油屋里打工的经历，某种程度上就是每个人初入社会时的写照——被忽视、被欺负、不知道规矩、手忙脚乱。
但她没有选择逃避，而是一步步找到了自己的位置。
给腐烂神洗澡那场戏的细节处理尤其精妙，从恶心到好奇到全力以赴，短短几分钟就把职场新人的心路历程演完了。
那个从腐烂神身体里拔出一整座垃圾山的画面，既是视觉奇观，也是对消费主义的辛辣讽刺。

久石让的配乐为这部电影注入了另一层灵魂。
主题曲《いつも何度でも》的旋律简单到极致，但每次响起都能精准地击中情绪的软肋。
列车在海面上行驶的那段无台词场景，配上钢琴曲，安静得像是整个世界都按下了暂停键。
这大概是动画电影史上最美的"留白"之一——什么都没说，什么都说了。
久石让懂得用沉默来放大情绪，而不是用音量来堆砌气氛。
回头再听《あの夏へ》的前奏，那几个简单的钢琴音符就能把人瞬间拉回油屋的黄昏。

影片中隐藏着大量对日本泡沫经济时代的隐喻。
千寻父母在开头因为贪吃而变成猪，油屋里众人对金子的疯狂追逐，无脸男用金子收买人心的段落，无一不在影射消费主义的陷阱。
宫崎骏并没有刻意说教，而是把这些批判自然地融入了故事的肌理中，让观众在感动之余也能有所反思。
甚至那个"忘记名字就永远回不去"的设定，也可以读作对身份认同在物质洪流中迷失的警示。
白龙忘记了自己的真名"赈早见琥珀主"，千寻差点被改名为"千"后忘记自我，名字在这里不只是符号，而是存在本身的锚点。

宫崎骏的叙事节奏在这部电影里达到了一种罕见的平衡。
紧张的场面——比如千寻在锅炉房的初次亮相、面对无脸男的对峙——和舒缓的段落——比如海上列车、花田漫步——交替出现，形成呼吸一般的韵律。
他从不急于推进剧情，而是给每个场景足够的时间去呼吸、去发酵。
这种"慢"在当今快节奏的动画市场中显得尤其珍贵。
很多动画导演试图模仿这种节奏，但大多只学到了形，没有学到神。
有些作品学到了"慢"，却忘了慢的前提是每一帧都有内容可看；有些作品堆了满屏的细节，却缺了那种让人心甘情愿沉浸其中的情绪引力。
宫崎骏的慢是有重力的慢，它让你停下来不是因为无聊，而是因为舍不得。

影片的结尾看似平淡，千寻只是回到了现实世界，但观众心中留下的余韵却极为隽永。
那些在神隐世界经历的一切塑造了一个更坚强的千寻，而她忘记了这段记忆这一设定，更让整个故事多了一层关于遗忘与铭记的哲学意味。
千寻头上那根来自钱婆婆的头绳，是整段经历唯一留下的物证，像是一个关于记忆的隐喻——我们或许忘记了具体的事件，但那些经历早已融入了我们的骨骼。
这部电影历经二十多年，依然让每一代新观众为之着迷。
每次重看都会注意到新的细节，每次重看都会有不同的感动，这就是经典的力量。
小时候看的是冒险和奇幻，长大后看到的是孤独、身份和社会规训。
再大一些，又会被那些安静的留白所打动——千寻在海上列车里望着窗外的眼神，像极了每个成年人某个发呆的午后。
它不属于任何一个时代，它属于所有曾经是孩子的人。
`,Py=`# 仓鼠饲养指南

养仓鼠是一件既治愈又需要耐心的事情，以下是新手必读的基本要点。
很多人觉得仓鼠是"随便养养"的小动物，其实它们对生活环境的要求比想象中高得多。
做好功课再迎接小毛球回家，是对它也是对自己负责。

## 入门准备

在把仓鼠带回家之前，需要准备好以下基本装备：

- 选择合适的笼子（至少 60cm × 40cm）
- 准备木屑或纸棉垫料
- 购买静音跑轮（直径不小于 21cm）
- 备好陶瓷食盆和滚珠水壶
- 一个陶瓷小窝或木质躲避屋
- 浴沙盆和专用浴沙（仓鼠不能用水洗澡）

笼子是最重要的投资，不要贪图便宜买那种铁丝间距过大的笼子，仓鼠的越狱能力超乎想象。
推荐亚克力整理箱改造的DIY笼，通风口用不锈钢网覆盖，既安全又方便清洁。
跑轮的直径很关键，太小的跑轮会让仓鼠弓着背跑步，长期下来容易导致脊椎问题。

## 喂食须知

仓鼠是杂食动物，但不能乱喂。
主粮选择专业仓鼠粮，零食可以给少量瓜子、面包虫和新鲜蔬菜。
绝对禁止喂食的东西包括：巧克力、洋葱、大蒜、柑橘类水果和任何含盐含糖的人类零食。
仓鼠有囤粮的习惯，它们会把食物塞满颊囊带回窝里藏起来，所以清理笼子时要注意检查窝里有没有变质的食物。

\`\`\`text
每日喂食时间表
──────────────
早上 8:00   主粮 5g
中午 12:00  新鲜蔬菜一小片
晚上 8:00   主粮 5g + 零食少许
睡前 11:00  检查水壶是否有水
\`\`\`

注意：仓鼠是夜行动物，晚间会更活跃地进食，不必担心白天吃得少。
实际上大多数仓鼠白天就是一坨不动的毛球，到了晚上才会化身运动健将疯狂跑轮。
如果你的卧室隔音不好，建议把笼子放在客厅，否则半夜被跑轮声吵醒是常有的事。

## 日常护理

- \`垫料更换\` — 每周至少清理一次笼子
- \`健康观察\` — 留意毛发是否蓬松、眼睛是否明亮
- \`温度控制\` — 室温保持在 20-26°C，避免阳光直射
- \`互动时间\` — 每天轻柔地与仓鼠互动 15 分钟
- \`指甲修剪\` — 指甲过长时需要用专用小剪刀修剪
- \`牙齿磨损\` — 提供磨牙棒或苹果木枝条

清理笼子的时候不要把所有垫料都换掉，留一部分旧垫料可以保留仓鼠的气味标记，避免它因为环境突变而焦虑。
每次清理完可以给仓鼠一小块零食作为补偿，让它把"清理笼子"和"有好吃的"建立正向联想。

## 常见误区

很多新手容易犯的错误包括：把两只仓鼠养在同一个笼子里。
除了特定品种（如罗博罗夫斯基侏儒仓鼠），大多数仓鼠都是独居动物，合笼会导致严重的领地争斗甚至咬伤致死。
叙利亚仓鼠（金丝熊）尤其如此，它们的独居本能强到连亲兄弟姐妹成年后都会互相攻击。

另一个常见误区是"仓鼠不需要看兽医"。
仓鼠确实不像猫狗那样需要定期疫苗接种，但它们也会生病——湿尾症、皮肤真菌感染、肿瘤等都不少见。
找一个有异宠诊疗经验的兽医并记下联系方式，是每个仓鼠主人应该做的第一件事。
很多普通宠物医院对仓鼠束手无策，提前做好调研能在关键时刻救命。

还有人认为仓鼠可以用水洗澡，这是大错特错。
仓鼠被水打湿后体温会急剧下降，极易导致感冒甚至肺炎。
它们天生就会用浴沙清洁毛发，只需要在笼子里放一个浴沙盆，它们会自己在里面打滚"洗澡"。
看仓鼠在浴沙里扑腾翻滚的样子，是养仓鼠最解压的时刻之一。

## 和仓鼠建立信任

刚到家的仓鼠会非常紧张，前三天尽量不要去碰它，让它自己探索新环境。
第四天开始可以把手放在笼子里不动，让仓鼠来闻你的气味。
一周左右大多数仓鼠就会愿意从你手上吃东西了，这时候可以尝试轻轻把它捧起来。
千万不要从上方抓取仓鼠，对它们来说"头顶有东西靠近"意味着天敌来了，会触发强烈的恐惧反应。
用双手从侧面和底部托住它，让它站在你的掌心里，这是最安全也最不吓人的方式。

最后，养仓鼠最大的遗憾是它们的寿命太短了，通常只有两到三年。
在这短暂的时间里，给它一个安全、舒适、有爱的家，就是你能做到的最好的事情。
好好珍惜和小毛球在一起的每一天吧。
`,Ay=`# 仓鼠饲养指南

养仓鼠是一件既治愈又需要耐心的事情，以下是新手必读的基本要点。
很多人觉得仓鼠是"随便养养"的小动物，其实它们对生活环境的要求比想象中高得多。
做好功课再迎接小毛球回家，是对它也是对自己负责。

## 入门准备

在把仓鼠带回家之前，需要准备好以下基本装备：

- 选择合适的笼子（至少 60cm × 40cm）
- 准备木屑或纸棉垫料
- 购买静音跑轮（直径不小于 21cm）
- 备好陶瓷食盆和滚珠水壶
- 一个陶瓷小窝或木质躲避屋
- 浴沙盆和专用浴沙（仓鼠不能用水洗澡）

笼子是最重要的投资，不要贪图便宜买那种铁丝间距过大的笼子，仓鼠的越狱能力超乎想象。
推荐亚克力整理箱改造的DIY笼，通风口用不锈钢网覆盖，既安全又方便清洁。
跑轮的直径很关键，太小的跑轮会让仓鼠弓着背跑步，长期下来容易导致脊椎问题。

## 喂食须知

仓鼠是杂食动物，但不能乱喂。
主粮选择专业仓鼠粮，零食可以给少量瓜子、面包虫和新鲜蔬菜。
绝对禁止喂食的东西包括：巧克力、洋葱、大蒜、柑橘类水果和任何含盐含糖的人类零食。
仓鼠有囤粮的习惯，它们会把食物塞满颊囊带回窝里藏起来，所以清理笼子时要注意检查窝里有没有变质的食物。

\`\`\`text
每日喂食时间表
──────────────
早上 8:00   主粮 5g
中午 12:00  新鲜蔬菜一小片
晚上 8:00   主粮 5g + 零食少许
睡前 11:00  检查水壶是否有水
\`\`\`

注意：仓鼠是夜行动物，晚间会更活跃地进食，不必担心白天吃得少。
实际上大多数仓鼠白天就是一坨不动的毛球，到了晚上才会化身运动健将疯狂跑轮。
如果你的卧室隔音不好，建议把笼子放在客厅，否则半夜被跑轮声吵醒是常有的事。

## 日常护理

- \`垫料更换\` — 每周至少清理一次笼子
- \`健康观察\` — 留意毛发是否蓬松、眼睛是否明亮
- \`温度控制\` — 室温保持在 20-26°C，避免阳光直射
- \`互动时间\` — 每天轻柔地与仓鼠互动 15 分钟
- \`指甲修剪\` — 指甲过长时需要用专用小剪刀修剪
- \`牙齿磨损\` — 提供磨牙棒或苹果木枝条

清理笼子的时候不要把所有垫料都换掉，留一部分旧垫料可以保留仓鼠的气味标记，避免它因为环境突变而焦虑。
每次清理完可以给仓鼠一小块零食作为补偿，让它把"清理笼子"和"有好吃的"建立正向联想。

## 常见误区

很多新手容易犯的错误包括：把两只仓鼠养在同一个笼子里。
除了特定品种（如罗博罗夫斯基侏儒仓鼠），大多数仓鼠都是独居动物，合笼会导致严重的领地争斗甚至咬伤致死。
叙利亚仓鼠（金丝熊）尤其如此，它们的独居本能强到连亲兄弟姐妹成年后都会互相攻击。

另一个常见误区是"仓鼠不需要看兽医"。
仓鼠确实不像猫狗那样需要定期疫苗接种，但它们也会生病——湿尾症、皮肤真菌感染、肿瘤等都不少见。
找一个有异宠诊疗经验的兽医并记下联系方式，是每个仓鼠主人应该做的第一件事。
很多普通宠物医院对仓鼠束手无策，提前做好调研能在关键时刻救命。

还有人认为仓鼠可以用水洗澡，这是大错特错。
仓鼠被水打湿后体温会急剧下降，极易导致感冒甚至肺炎。
它们天生就会用浴沙清洁毛发，只需要在笼子里放一个浴沙盆，它们会自己在里面打滚"洗澡"。
看仓鼠在浴沙里扑腾翻滚的样子，是养仓鼠最解压的时刻之一。

## 和仓鼠建立信任

刚到家的仓鼠会非常紧张，前三天尽量不要去碰它，让它自己探索新环境。
第四天开始可以把手放在笼子里不动，让仓鼠来闻你的气味。
一周左右大多数仓鼠就会愿意从你手上吃东西了，这时候可以尝试轻轻把它捧起来。
千万不要从上方抓取仓鼠，对它们来说"头顶有东西靠近"意味着天敌来了，会触发强烈的恐惧反应。
用双手从侧面和底部托住它，让它站在你的掌心里，这是最安全也最不吓人的方式。

最后，养仓鼠最大的遗憾是它们的寿命太短了，通常只有两到三年。
在这短暂的时间里，给它一个安全、舒适、有爱的家，就是你能做到的最好的事情。
好好珍惜和小毛球在一起的每一天吧。
`,Iy="",zy=`# 办公室生存指南

恭喜你成功入职，接下来的内容将决定你能否在这片钢筋水泥丛林中活过试用期。请认真阅读，这比任何入职培训都管用。

## 茶水间政治学

茶水间是办公室的情报中心，正确的使用方式如下：

\`\`\`text
新人须知
────────
1. 最后一杯咖啡是你的？恭喜，你获得了洗咖啡壶的荣誉
2. 冰箱里没写名字的酸奶，薛定谔的归属权
3. 微波炉加热鱼——除非你想成为全楼公敌
\`\`\`

## 会议室求生法则

- 预定了会议室却没人来：这叫"薛定谔的会议"，很正常
- 会议超时有人敲门：假装没听到是本能，起身让出是美德
- 领导说"简单聊两句"：自动翻译为"接下来的一小时请坐稳"

## 终极忠告

记住，在办公室里最重要的技能不是 Excel 也不是 PPT，而是在工位上假装很忙的同时精准判断领导走过来的脚步声。祝你好运。
`,Ly=`# 如何在雨天保持好心情

下雨天总让人莫名其妙地丧，窗外灰蒙蒙的天空仿佛在说"今天不适合努力"。但其实，雨天藏着很多被低估的快乐。

## 雨天快乐清单

- 窝在沙发上听雨声，配一杯热可可
- 翻出那本买了半年没拆封的书
- 给远方的朋友发一条"下雨了，想你了"

## 出门也不怕

1. 穿上最骚的雨靴，踩水坑是成年人为数不多的合法幼稚行为
2. 带一把颜色鲜艳的伞，灰色天空里你就是移动的彩虹
3. 去人少的咖啡馆坐靠窗的位置，看路人狂奔
4. 如果实在不想出门，点外卖不丢人，备注"雨天辛苦了加个鸡腿"

\`\`\`text
雨天 BGM 推荐
─────────────
1. 《雨天》 — 周杰伦
2. 《Rainy Days》— V
3. 《下雨的夜晚》— 苏打绿
\`\`\`

## 最后一句

雨总会停的，但你在雨天培养出的从容和浪漫，会一直跟着你。
`,Ny="",ef=[{name:"simple",oldMarkdown:O0,newMarkdown:j0},{name:"headings",oldMarkdown:$0,newMarkdown:B0},{name:"lists",oldMarkdown:H0,newMarkdown:U0},{name:"code",oldMarkdown:V0,newMarkdown:W0},{name:"tables",oldMarkdown:q0,newMarkdown:Q0},{name:"links",oldMarkdown:Y0,newMarkdown:G0},{name:"formatting",oldMarkdown:X0,newMarkdown:K0},{name:"complex",oldMarkdown:Z0,newMarkdown:J0},{name:"extreme_long",oldMarkdown:ny,newMarkdown:ey},{name:"nested_structures",oldMarkdown:ty,newMarkdown:ry},{name:"special_characters",oldMarkdown:iy,newMarkdown:ly},{name:"whitespace",oldMarkdown:oy,newMarkdown:uy},{name:"mixed_content",oldMarkdown:ay,newMarkdown:sy},{name:"paragraph_word_edit",oldMarkdown:cy,newMarkdown:fy},{name:"table_cell_edit",oldMarkdown:dy,newMarkdown:py},{name:"table_row_add_del",oldMarkdown:hy,newMarkdown:my},{name:"code_line_edit",oldMarkdown:gy,newMarkdown:yy},{name:"heading_rename",oldMarkdown:ky,newMarkdown:wy},{name:"move_section",oldMarkdown:xy,newMarkdown:vy},{name:"similar_paragraphs",oldMarkdown:Sy,newMarkdown:Cy},{name:"large_doc",oldMarkdown:_y,newMarkdown:Ey},{name:"cjk_inline",oldMarkdown:My,newMarkdown:Ty},{name:"identity",oldMarkdown:Py,newMarkdown:Ay},{name:"empty_to_content",oldMarkdown:Iy,newMarkdown:zy},{name:"content_to_empty",oldMarkdown:Ly,newMarkdown:Ny}];class _h{diff(e,t,r={}){let i;typeof r=="function"?(i=r,r={}):"callback"in r&&(i=r.callback);const l=this.castInput(e,r),o=this.castInput(t,r),u=this.removeEmpty(this.tokenize(l,r)),a=this.removeEmpty(this.tokenize(o,r));return this.diffWithOptionsObj(u,a,r,i)}diffWithOptionsObj(e,t,r,i){var l;const o=m=>{if(m=this.postProcess(m,r),i){setTimeout(function(){i(m)},0);return}else return m},u=t.length,a=e.length;let s=1,f=u+a;r.maxEditLength!=null&&(f=Math.min(f,r.maxEditLength));const c=(l=r.timeout)!==null&&l!==void 0?l:1/0,p=Date.now()+c,d=[{oldPos:-1,lastComponent:void 0}];let g=this.extractCommon(d[0],t,e,0,r);if(d[0].oldPos+1>=a&&g+1>=u)return o(this.buildValues(d[0].lastComponent,t,e));let x=-1/0,M=1/0;const h=()=>{for(let m=Math.max(x,-s);m<=Math.min(M,s);m+=2){let y;const C=d[m-1],_=d[m+1];C&&(d[m-1]=void 0);let v=!1;if(_){const A=_.oldPos-m;v=_&&0<=A&&A<u}const T=C&&C.oldPos+1<a;if(!v&&!T){d[m]=void 0;continue}if(!T||v&&C.oldPos<_.oldPos?y=this.addToPath(_,!0,!1,0,r):y=this.addToPath(C,!1,!0,1,r),g=this.extractCommon(y,t,e,m,r),y.oldPos+1>=a&&g+1>=u)return o(this.buildValues(y.lastComponent,t,e))||!0;d[m]=y,y.oldPos+1>=a&&(M=Math.min(M,m-1)),g+1>=u&&(x=Math.max(x,m+1))}s++};if(i)(function m(){setTimeout(function(){if(s>f||Date.now()>p)return i(void 0);h()||m()},0)})();else for(;s<=f&&Date.now()<=p;){const m=h();if(m)return m}}addToPath(e,t,r,i,l){const o=e.lastComponent;return o&&!l.oneChangePerToken&&o.added===t&&o.removed===r?{oldPos:e.oldPos+i,lastComponent:{count:o.count+1,added:t,removed:r,previousComponent:o.previousComponent}}:{oldPos:e.oldPos+i,lastComponent:{count:1,added:t,removed:r,previousComponent:o}}}extractCommon(e,t,r,i,l){const o=t.length,u=r.length;let a=e.oldPos,s=a-i,f=0;for(;s+1<o&&a+1<u&&this.equals(r[a+1],t[s+1],l);)s++,a++,f++,l.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return f&&!l.oneChangePerToken&&(e.lastComponent={count:f,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=a,s}equals(e,t,r){return r.comparator?r.comparator(e,t):e===t||!!r.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){const t=[];for(let r=0;r<e.length;r++)e[r]&&t.push(e[r]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join("")}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,r){const i=[];let l;for(;e;)i.push(e),l=e.previousComponent,delete e.previousComponent,e=l;i.reverse();const o=i.length;let u=0,a=0,s=0;for(;u<o;u++){const f=i[u];if(f.removed)f.value=this.join(r.slice(s,s+f.count)),s+=f.count;else{if(!f.added&&this.useLongestToken){let c=t.slice(a,a+f.count);c=c.map(function(p,d){const g=r[s+d];return g.length>p.length?g:p}),f.value=this.join(c)}else f.value=this.join(t.slice(a,a+f.count));a+=f.count,f.added||(s+=f.count)}}return i}}class Dy extends _h{}const by=new Dy;function Ry(n,e,t){return by.diff(n,e,t)}function tf(n,e){let t;for(t=0;t<n.length&&t<e.length;t++)if(n[t]!=e[t])return n.slice(0,t);return n.slice(0,t)}function rf(n,e){let t;if(!n||!e||n[n.length-1]!=e[e.length-1])return"";for(t=0;t<n.length&&t<e.length;t++)if(n[n.length-(t+1)]!=e[e.length-(t+1)])return n.slice(-t);return n.slice(-t)}function ta(n,e,t){if(n.slice(0,e.length)!=e)throw Error(`string ${JSON.stringify(n)} doesn't start with prefix ${JSON.stringify(e)}; this is a bug`);return t+n.slice(e.length)}function ra(n,e,t){if(!e)return n+t;if(n.slice(-e.length)!=e)throw Error(`string ${JSON.stringify(n)} doesn't end with suffix ${JSON.stringify(e)}; this is a bug`);return n.slice(0,-e.length)+t}function Ar(n,e){return ta(n,e,"")}function Bi(n,e){return ra(n,e,"")}function lf(n,e){return e.slice(0,Fy(n,e))}function Fy(n,e){let t=0;n.length>e.length&&(t=n.length-e.length);let r=e.length;n.length<e.length&&(r=n.length);const i=Array(r);let l=0;i[0]=0;for(let o=1;o<r;o++){for(e[o]==e[l]?i[o]=i[l]:i[o]=l;l>0&&e[o]!=e[l];)l=i[l];e[o]==e[l]&&l++}l=0;for(let o=t;o<n.length;o++){for(;l>0&&n[o]!=e[l];)l=i[l];n[o]==e[l]&&l++}return l}function Eh(n,e){const t=[];for(const r of Array.from(e.segment(n))){const i=r.segment;t.length&&/\s/.test(t[t.length-1])&&/\s/.test(i)?t[t.length-1]+=i:t.push(i)}return t}function ia(n,e){if(e)return Yr(n,e)[1];let t;for(t=n.length-1;t>=0&&n[t].match(/\s/);t--);return n.substring(t+1)}function jt(n,e){if(e)return Yr(n,e)[0];const t=n.match(/^\s*/);return t?t[0]:""}function Yr(n,e){if(!e)return[jt(n),ia(n)];if(e.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');const t=Eh(n,e),r=t[0],i=t[t.length-1],l=/\s/.test(r)?r:"",o=/\s/.test(i)?i:"";return[l,o]}const of="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Oy=new RegExp(`[${of}]+|\\s+|[^${of}]`,"ug");class jy extends _h{equals(e,t,r){return r.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let r;if(t.intlSegmenter){const o=t.intlSegmenter;if(o.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');r=Eh(e,o)}else r=e.match(Oy)||[];const i=[];let l=null;return r.forEach(o=>{/\s/.test(o)?l==null?i.push(o):i.push(i.pop()+o):l!=null&&/\s/.test(l)?i[i.length-1]==l?i.push(i.pop()+o):i.push(l+o):i.push(o),l=o}),i}join(e){return e.map((t,r)=>r==0?t:t.replace(/^\s+/,"")).join("")}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let r=null,i=null,l=null;return e.forEach(o=>{o.added?i=o:o.removed?l=o:((i||l)&&uf(r,l,i,o,t.intlSegmenter),r=o,i=null,l=null)}),(i||l)&&uf(r,l,i,null,t.intlSegmenter),e}}const $y=new jy;function Mh(n,e,t){return $y.diff(n,e,t)}function uf(n,e,t,r,i){if(e&&t){const[l,o]=Yr(e.value,i),[u,a]=Yr(t.value,i);if(n){const s=tf(l,u);n.value=ra(n.value,u,s),e.value=Ar(e.value,s),t.value=Ar(t.value,s)}if(r){const s=rf(o,a);r.value=ta(r.value,a,s),e.value=Bi(e.value,s),t.value=Bi(t.value,s)}}else if(t){if(n){const l=jt(t.value,i);t.value=t.value.substring(l.length)}if(r){const l=jt(r.value,i);r.value=r.value.substring(l.length)}}else if(n&&r){const l=jt(r.value,i),[o,u]=Yr(e.value,i),a=tf(l,o);e.value=Ar(e.value,a);const s=rf(Ar(l,a),u);e.value=Bi(e.value,s),r.value=ta(r.value,l,s),n.value=ra(n.value,l,l.slice(0,l.length-s.length))}else if(r){const l=jt(r.value,i),o=ia(e.value,i),u=lf(o,l);e.value=Bi(e.value,u)}else if(n){const l=ia(n.value,i),o=jt(e.value,i),u=lf(l,o);e.value=Ar(e.value,u)}}function b(n,e){if(!n)throw new Error("Assertion failed")}class af{constructor(){this.nodes=[],this.maxId=0,this.maxNodes=0,this.maxWeight=0,this.nodes=[]}getXNode(e){return this.nodes[e]}setXNode(e,t){this.nodes[e]=t,e>this.maxId&&(this.maxId=e),this.maxNodes+=1}}var En=(n=>(n.Ins="ins",n.Del="del",n))(En||{}),Fr=(n=>(n.Ins="ins",n.Del="del",n.InlineIns="inlineIns",n.InlineDel="inlineDel",n))(Fr||{}),q=(n=>(n.Root="root",n.Blockquote="blockquote",n.Break="break",n.Code="code",n.Definition="definition",n.Emphasis="emphasis",n.Heading="heading",n.Html="html",n.Image="image",n.ImageReference="imageReference",n.InlineCode="inlineCode",n.Link="link",n.LinkReference="linkReference",n.List="list",n.ListItem="listItem",n.Paragraph="paragraph",n.Strong="strong",n.Text="text",n.ThematicBreak="thematicBreak",n.Delete="delete",n.FootnoteDefinition="footnoteDefinition",n.FootnoteReference="footnoteReference",n.Table="table",n.TableRow="tableRow",n.TableCell="tableCell",n.ContainerDirective="containerDirective",n.LeafDirective="leafDirective",n.TextDirective="textDirective",n.YAML="yaml",n.TOML="toml",n.MDXJSEsm="mdxjsEsm",n.MDXJSExpression="mdxJsExpression",n.MDXFlowExpression="mdxFlowExpression",n.MDXTextExpression="mdxTextExpression",n))(q||{});const By=new Set(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","link","linkReference","strong","text","inlineMath"]);function Hy(n){return By.has(n.type)}function ae(n){return n.type===q.Table||n.type===q.YAML||n.type===q.TOML}function Th(n,e,t,r=1){if(!n||!e||!t||!n.children)return;const i=n.children.indexOf(e);i!==-1&&(Array.isArray(t)?n.children.splice(i,r,...t):n.children.splice(i,r,t))}const Uy=1;function sf(n,e,t,r){var o,u,a,s;let i=Uy;const l=Math.max(1,Math.ceil(Math.log(r.maxNodes)*e.weight/r.maxWeight));for(let f=0;f<l;f++){const c=(u=(o=n.node)==null?void 0:o._parent)==null?void 0:u._xNode,p=(s=(a=e.node)==null?void 0:a._parent)==null?void 0:s._xNode;c&&p&&p.match&&p.match===c.node&&(i+=1)}return i}function Vy(n,e,t,r){if(b(n.node),b(t.node),!t.optMatch){t.optMatch=n.node,t.opt=sf(n,t,e,r);return}const i=sf(n,t,e,r);if(i===t.opt){const l=Math.abs(t.optMatch._id-t.node._id),o=Math.abs(n.node._id-t.node._id);l>o&&(t.optMatch=n.node,t.opt=i)}else i>t.opt&&(t.optMatch=n.node,t.opt=i)}function Fl(n,e){if(n.type!==e.type)return!1;switch(n.type){case q.Link:if(n.url!==e.url||n.title!==e.title)return!1;break;case q.Heading:if(n.depth!==e.depth)return!1;break;case q.ListItem:if(n.checked!==e.checked||n.spread!==e.spread)return!1;break}return!0}function cf(n){return n._parent?n._parent.children.length===1:!0}function Wy(n,e,t,r){var o,u,a,s;const i=Math.max(1,Math.ceil(Math.log(r.maxNodes)*t.weight/r.maxWeight));let l=0;for(;l<i;){const f=(o=n.node)==null?void 0:o._parent,c=(u=t.node)==null?void 0:u._parent;if(!f||!c||!Fl(f,c)||(b(f._xNode&&c._xNode),n=f._xNode,t=c._xNode,n.match||t.match))break;n.match=t.node,t.match=n.node,l+=1}if(l===i)for(;;){b(n.node&&t.node);const f=(a=n.node)==null?void 0:a._parent,c=(s=t.node)==null?void 0:s._parent;if(!f||!c||!cf(t.node)||!cf(n.node)||!Fl(f,c)||(b(f._xNode&&c._xNode),n=f._xNode,t=c._xNode,n.match||t.match))break;n.match=t.node,t.match=n.node}}function Ph(n,e,t,r){var o,u;let i,l;if(n.match&&(b(n.match._xNode),b(n.node===n.match._xNode.match),n.match._xNode.match=void 0,n.match=void 0),b(!t.match),b(!n.match),t.match=n.node,n.match=t.node,b(t.node),b(n.node),ae(t.node)){b(ae(n.node));return}for(i=(o=n.node.children)==null?void 0:o[0],l=(u=t.node.children)==null?void 0:u[0];l;)b(i),b(i._xNode),b(l._xNode),Ph(i._xNode,e,l._xNode),i=i._next,l=l._next;b(!i)}function Ah(n){if(!n.children)return;const e=n.children.length;n.children.forEach((t,r)=>{r>0&&(t._before=n.children[r-1]),r<e-1&&(t._next=n.children[r+1])})}function Ih(n,e){const t={...n,data:{...n.data},_id:e,type:n.type,position:n.position};return delete t._parent,delete t._before,delete t._next,t}function De(n,e){e.value+=1;const t=Ih(n,e.value);return n.children&&(t.children=[],n.children.forEach(r=>{var l;const i=De(r,e);i._parent=t,(l=t.children)==null||l.push(i)}),Ah(t)),t}const ff=100;function qy(n,e,t,r){const i=n.value.length<=ff||e.value.length<=ff?Ry(n.value,e.value):Mh(n.value,e.value);for(const l of i){r.value+=1;const o={_id:r.value,type:q.Text,value:l.value,data:{},_parent:t};l.added?o.data.diff=En.Ins:l.removed&&(o.data.diff=En.Del),t.children||(t.children=[]),t.children.push(o)}}function zh(n,e,t,r,i){var c,p;let l,o,u;b(t&&n),b(t._xNode),b(n._xNode),o=t._xNode,l=n._xNode,b(l.match),b(o.match),b(o.match===l.node);const a=Ih(t,i.value);a.children=[];let s=(c=n.children)==null?void 0:c[0],f=(p=t.children)==null?void 0:p[0];for(;f;){for(;s&&(l=s._xNode,b(l),!(l.match||s.type===q.Text));)u=De(s,i),u._parent=a,u.data.diff=En.Del,a.children.push(u),s=s._next;for(;f&&(o=f._xNode,b(o),!(o.match||f.type===q.Text));)u=De(f,i),u._parent=a,u.data.diff=En.Ins,a.children.push(u),f=f._next;for(b(l&&o),s&&f&&s.type==q.Text&&!l.match&&f.type==q.Text&&!o.match&&(qy(s,f,a,i),s=s._next,f=f._next);s&&(l=s._xNode,b(l),!l.match);)u=De(s,i),u._parent=a,u.data.diff=En.Del,a.children.push(u),s=s._next;for(;f&&(o=f._xNode,b(o),!o.match);)u=De(f,i),u._parent=a,u.data.diff=En.Ins,a.children.push(u),f=f._next;if(!f)break;o=f._xNode,b(o),b(o.match);let d=s;for(;d&&(l=d._xNode,b(l),o.node!==l.match);)d=d._next;if(!d){u=De(f,i),u._parent=a,u.data.diff=En.Ins,a.children.push(u),f=f._next;continue}for(;s&&(l=s._xNode,b(l),o.node!==l.match);)u=De(s,i),u._parent=a,u.data.diff=En.Del,a.children.push(u),s=s._next;b(s),ae(f)?(b(ae(s)),u=De(f,i),u._parent=a,a.children.push(u)):(b(!ae(s)),u=zh(s,e,f,r,i),u._parent=a,a.children.push(u)),s=s._next,f=f._next}for(;s;)u=De(s,i),u._parent=a,u.data.diff=En.Del,a.children.push(u),s=s._next;return a}function Or(n){return!!n.children&&n.children.length>0}function Lh(n){var i;if(ae(n)||!Or(n))return;const e=n._xNode;b(e);const t=e.match;if(!t)return;const r=t._xNode;b(r);for(const l of n.children){if(ae(l)||!Or(l))continue;b(l._xNode);const o=l._xNode.match;if(!o||((i=o==null?void 0:o._parent)==null?void 0:i._id)!==t._id)continue;b(o._xNode);const u=l._next;if(!u||ae(u)||!Or(u))continue;const a=u._xNode;if(b(a),a.match)continue;const s=o._next;if(!s||ae(s)||!Or(s))continue;const f=s._xNode;b(f),!f.match&&Fl(u,s)&&(a.match=s,f.match=u)}for(const l of n.children)Lh(l)}function Nh(n,e,t){var o;let r,i=0,l=0;if(b(n._xNode),!(ae(n)||!Or(n))){for(const u of n.children)b(u._xNode),l+=((o=u._xNode)==null?void 0:o.weight)||0,Nh(u);if(!n._xNode.match){for(const u of n.children){if(b(u._xNode),!u._xNode.match)continue;const a=u._xNode.match._parent;if(!a||a===r||!Fl(n,a))continue;let s=0;for(const f of n.children)b(f._xNode),f._xNode.match&&a===f._xNode.match._parent&&(s+=f._xNode.weight);s>i&&(i=s,r=a)}r&&(b(r._xNode),i/l>=.5&&(n._xNode.match=r,r._xNode.match=n))}}}const uo=function(n){if(n==null)return Xy;if(typeof n=="function")return ao(n);if(typeof n=="object")return Array.isArray(n)?Qy(n):Yy(n);if(typeof n=="string")return Gy(n);throw new Error("Expected function, string, or object as test")};function Qy(n){const e=[];let t=-1;for(;++t<n.length;)e[t]=uo(n[t]);return ao(r);function r(...i){let l=-1;for(;++l<e.length;)if(e[l].apply(this,i))return!0;return!1}}function Yy(n){const e=n;return ao(t);function t(r){const i=r;let l;for(l in n)if(i[l]!==e[l])return!1;return!0}}function Gy(n){return ao(e);function e(t){return t&&t.type===n}}function ao(n){return e;function e(t,r,i){return!!(Ky(t)&&n.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function Xy(){return!0}function Ky(n){return n!==null&&typeof n=="object"&&"type"in n}const Dh=[],Zy=!0,la=!1,Jy="skip";function bh(n,e,t,r){let i;typeof e=="function"&&typeof t!="function"?(r=t,t=e):i=e;const l=uo(i),o=r?-1:1;u(n,void 0,[])();function u(a,s,f){const c=a&&typeof a=="object"?a:{};if(typeof c.type=="string"){const d=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(a.type+(d?"<"+d+">":""))+")"})}return p;function p(){let d=Dh,g,x,M;if((!e||l(a,s,f[f.length-1]||void 0))&&(d=nk(t(a,f)),d[0]===la))return d;if("children"in a&&a.children){const h=a;if(h.children&&d[0]!==Jy)for(x=(r?h.children.length:-1)+o,M=f.concat(h);x>-1&&x<h.children.length;){const m=h.children[x];if(g=u(m,x,M)(),g[0]===la)return g;x=typeof g[1]=="number"?g[1]:x+o}}return d}}}function nk(n){return Array.isArray(n)?n:typeof n=="number"?[Zy,n]:n==null?Dh:[n]}function ce(n,e,t,r){let i,l,o;typeof e=="function"&&typeof t!="function"?(l=void 0,o=e,i=t):(l=e,o=t,i=r),bh(n,l,u,i);function u(a,s){const f=s[s.length-1],c=f?f.children.indexOf(a):void 0;return o(a,c,f)}}function ek(n){return 55296<=n&&n<=56319}function df(n){return 56320<=n&&n<=57343}function tk(n,e){return(n-55296<<10)+(e-56320)+65536}const Rh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",rk=Rh.length;function ik(n){let e="";for(let t=0;t<n;t++)e+=Rh.charAt(Math.floor(Math.random()*rk));return e}function lk(n,e){if(n.length===0)return e.length;if(e.length===0)return n.length;const t=n.length,r=e.length,i=new Array(r+1),l=new Array(r+1);for(let o=0;o<=r;o++)i[o]=o;for(let o=1;o<=t;o++){l[0]=o;for(let u=1;u<=r;u++){const a=n[o-1]===e[u-1]?0:1;l[u]=Math.min(i[u]+1,l[u-1]+1,i[u-1]+a)}for(let u=0;u<=r;u++)i[u]=l[u]}return i[r]}function ok(n,e){if(n.length===0&&e.length===0)return 1;if(n.length===0||e.length===0)return 0;const t=lk(n,e),r=Math.max(n.length,e.length);return 1-t/r}function uk(n,e){if(n===e)return 1;const t=n.trim().toLowerCase(),r=e.trim().toLowerCase();return t===r?1:ok(t,r)}function pf(n){if(!n.children||n.children.length!==1)return!1;const e=n.children[0];return!(e.type!==q.Text||!e.value)}function ak(n,e){let t=[],r=[];const i=new Set,l=new Set;ce(n,"heading",c=>{pf(c)&&(i.add(c.children[0].value),t.push([c,c.children[0].value]))}),ce(e,"heading",c=>{pf(c)&&(l.add(c.children[0].value),r.push([c,c.children[0].value]))}),t=t.filter(([c,p])=>!l.has(p)),r=r.filter(([c,p])=>!i.has(p));const o=[];for(let c=0;c<t.length;c++){o[c]=[];for(let p=0;p<r.length;p++)o[c][p]=uk(t[c][1],r[p][1])}const u=[],a=new Set,s=new Set,f=[];for(let c=0;c<t.length;c++)for(let p=0;p<r.length;p++)o[c][p]>.5&&f.push({oldIndex:c,newIndex:p,similarity:o[c][p]});f.sort((c,p)=>p.similarity-c.similarity);for(const c of f)!a.has(c.oldIndex)&&!s.has(c.newIndex)&&(u.push(c),a.add(c.oldIndex),s.add(c.newIndex));return u.forEach(c=>{const p=t[c.oldIndex][0],d=r[c.newIndex][0],g=ik(16),x={type:q.Text,value:g,data:{headingDiffToken:!0}},M={type:q.Text,value:g,data:{headingDiffToken:!0}};p.children.push(x),d.children.push(M)}),c=>{ce(c,q.Text,(p,d,g)=>{var x;(x=p.data)!=null&&x.headingDiffToken&&Th(g,p,[])})}}function sk(n,e){for(const t of[n,e])ce(t,"listItem",r=>{r.children&&r.children.length===1&&r.children[0].type==="paragraph"&&r.children[0].children&&(r.data||(r.data={}),r.data.backupParagraph=r.children[0],r.children=r.children[0].children)});return t=>{ce(t,"listItem",r=>{var i;(i=r.data)!=null&&i.backupParagraph&&(r.children=[{...r.data.backupParagraph,children:r.children}],delete r.data.backupParagraph)})}}function ck(n,e){for(const t of[n,e]){let r=0;ce(t,(i,l,o)=>{i._parent=o,i._id=r,r+=1,i.data||(i.data={}),i.children&&Ah(i)})}return t=>{ce(t,r=>{delete r._parent,delete r._xNode,delete r._id,delete r._before,delete r._next})}}var so={},co={},fo={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 */let fk=class al{constructor(e,t,r){if(typeof e!="function")throw new Error("Heap constructor expects a compare function");this._compare=e,this._nodes=Array.isArray(t)?t:[],this._leaf=r||null,this._nodes.length>0&&this.fix()}toArray(){return Array.from(this._nodes)}_hasLeftChild(e){return e*2+1<this.size()}_hasRightChild(e){return e*2+2<this.size()}_compareAt(e,t){return this._compare(this._nodes[e],this._nodes[t])}_swap(e,t){const r=this._nodes[e];this._nodes[e]=this._nodes[t],this._nodes[t]=r}_shouldSwap(e,t){return e<0||e>=this.size()||t<0||t>=this.size()?!1:this._compareAt(e,t)>0}_compareChildrenOf(e){if(!this._hasLeftChild(e)&&!this._hasRightChild(e))return-1;const t=e*2+1,r=e*2+2;return this._hasLeftChild(e)?this._hasRightChild(e)&&this._compareAt(t,r)>0?r:t:r}_compareChildrenBefore(e,t,r){return this._compareAt(r,t)<=0&&r<e?r:t}_heapifyUp(e){let t=e,r=Math.floor((t-1)/2);for(;this._shouldSwap(r,t);)this._swap(r,t),t=r,r=Math.floor((t-1)/2)}_heapifyDown(e){let t=e,r=this._compareChildrenOf(t);for(;this._shouldSwap(t,r);)this._swap(t,r),t=r,r=this._compareChildrenOf(t)}_heapifyDownUntil(e){let t=0,r=1,i=2,l;for(;r<e;)l=this._compareChildrenBefore(e,r,i),this._shouldSwap(t,l)&&this._swap(t,l),t=l,r=t*2+1,i=t*2+2}insert(e){return this._nodes.push(e),this._heapifyUp(this.size()-1),(this._leaf===null||this._compare(e,this._leaf)>0)&&(this._leaf=e),this}push(e){return this.insert(e)}extractRoot(){if(this.isEmpty())return null;const e=this.root();return this._nodes[0]=this._nodes[this.size()-1],this._nodes.pop(),this._heapifyDown(0),e===this._leaf&&(this._leaf=null),e}pop(){return this.extractRoot()}sort(){for(let e=this.size()-1;e>0;e-=1)this._swap(0,e),this._heapifyDownUntil(e);return this._nodes}fix(){for(let e=Math.floor(this.size()/2)-1;e>=0;e-=1)this._heapifyDown(e);for(let e=Math.floor(this.size()/2);e<this.size();e+=1){const t=this._nodes[e];(this._leaf===null||this._compare(t,this._leaf)>0)&&(this._leaf=t)}return this}isValid(){const e=t=>{let r=!0,i=!0;if(this._hasLeftChild(t)){const l=t*2+1;if(this._compareAt(t,l)>0)return!1;r=e(l)}if(this._hasRightChild(t)){const l=t*2+2;if(this._compareAt(t,l)>0)return!1;i=e(l)}return r&&i};return e(0)}clone(){return new al(this._compare,this._nodes.slice(),this._leaf)}root(){return this.isEmpty()?null:this._nodes[0]}top(){return this.root()}leaf(){return this._leaf}size(){return this._nodes.length}isEmpty(){return this.size()===0}clear(){this._nodes=[],this._leaf=null}[Symbol.iterator](){let e=this.size();return{next:()=>(e-=1,{value:this.pop(),done:e===-1})}}static heapify(e,t){if(!Array.isArray(e))throw new Error("Heap.heapify expects an array of values");if(typeof t!="function")throw new Error("Heap.heapify expects a compare function");return new al(t,e).fix()}static isHeapified(e,t){return new al(t,e).isValid()}};fo.Heap=fk;var Fh={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */const{Heap:dk}=fo,pk=n=>(e,t)=>{const r=typeof n=="function"?n(e):e,i=typeof n=="function"?n(t):t;return r<=i?-1:1};let hk=class sl extends dk{constructor(e,t){super(pk(e),t),this._getCompareValue=e}insert(e){return super.insert(e),this}push(e){return this.insert(e)}fix(){return super.fix(),this}clone(){return new sl(this._getCompareValue,this._nodes.slice())}static heapify(e,t){if(!Array.isArray(e))throw new Error("MinHeap.heapify expects an array");return new sl(t,e)}static isHeapified(e,t){return new sl(t,e).isValid()}};Fh.MinHeap=hk;var Oh={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */const{Heap:mk}=fo,gk=n=>(e,t)=>{const r=typeof n=="function"?n(e):e,i=typeof n=="function"?n(t):t;return r<i?1:-1};let yk=class cl extends mk{constructor(e,t){super(gk(e),t),this._getCompareValue=e}insert(e){return super.insert(e),this}push(e){return this.insert(e)}fix(){return super.fix(),this}clone(){return new cl(this._getCompareValue,this._nodes.slice())}static heapify(e,t){if(!Array.isArray(e))throw new Error("MaxHeap.heapify expects an array");return new cl(t,e)}static isHeapified(e,t){return new cl(t,e).isValid()}};Oh.MaxHeap=yk;const{Heap:kk}=fo,{MinHeap:wk}=Fh,{MaxHeap:xk}=Oh;co.Heap=kk;co.MinHeap=wk;co.MaxHeap=xk;/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */const{Heap:vk}=co;let oa=class{constructor(e,t){if(typeof e!="function")throw new Error("PriorityQueue constructor expects a compare function");this._heap=new vk(e,t)}front(){return this._heap.root()}back(){return this._heap.leaf()}enqueue(e){return this._heap.insert(e),this}push(e){return this.enqueue(e)}dequeue(){return this._heap.extractRoot()}pop(){return this.dequeue()}remove(e){if(typeof e!="function")throw new Error("PriorityQueue remove expects a callback");const t=[],r=[];for(;!this.isEmpty();){const i=this.pop();e(i)?t.push(i):r.push(i)}return r.forEach(i=>this.push(i)),t}contains(e){if(typeof e!="function")throw new Error("PriorityQueue contains expects a callback");let t=!1;const r=[];for(;!this.isEmpty();){const i=this.pop();if(r.push(i),e(i)){t=!0;break}}return r.forEach(i=>this.push(i)),t}size(){return this._heap.size()}isEmpty(){return this._heap.isEmpty()}fix(){return this._heap.fix(),this}clear(){this._heap.clear()}toArray(){return this._heap.clone().sort().reverse()}[Symbol.iterator](){let e=this.size();return{next:()=>(e-=1,{value:this.pop(),done:e===-1})}}};oa.fromArray=function(e,t){return new oa(t,e)};so.PriorityQueue=oa;/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */const{PriorityQueue:Sk}=so;class hf extends Sk{constructor(e,t){if(e&&typeof e=="object"&&typeof e.compare=="function"){const r=(i,l)=>e.compare(i,l)<=0?-1:1;super(r,t)}else{const r=e;if(r&&typeof r!="function")throw new Error("MinPriorityQueue constructor requires a callback for object values");const i=(l,o)=>{const u=typeof r=="function"?r(l):l,a=typeof r=="function"?r(o):o;return u<=a?-1:1};super(i,t)}}enqueue(e){return super.enqueue(e),this}push(e){return this.enqueue(e)}}hf.fromArray=function(e,t){return new hf(t,e)};/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */const{PriorityQueue:Ck}=so;class mf extends Ck{constructor(e,t){if(e&&typeof e=="object"&&typeof e.compare=="function"){const r=(i,l)=>e.compare(i,l)<=0?-1:1;super(r,t)}else{const r=e;if(r&&typeof r!="function")throw new Error("MaxPriorityQueue constructor requires a callback for object values");const i=(l,o)=>{const u=typeof r=="function"?r(l):l,a=typeof r=="function"?r(o):o;return u<a?1:-1};super(i,t)}}enqueue(e){return super.enqueue(e),this}push(e){return this.enqueue(e)}}mf.fromArray=function(e,t){return new mf(t,e)};const{PriorityQueue:_k}=so;var Ek={PriorityQueue:_k};function Mk(){return new Ek.PriorityQueue((e,t)=>{const r=e._xNode,i=t._xNode,l=(r==null?void 0:r.weight)||0,o=(i==null?void 0:i.weight)||0;return l!==o?o-l:e._id-t._id})}function Vo(n,e,t=32){const r=t-e,i=~((1<<r)-1);return(n<<e|(i&n)>>>r)>>>0}function Ir(n,e=32){return n instanceof ArrayBuffer?Array.from(new Uint8Array(n)).map(t=>t.toString(16).padStart(2,"0")).join(""):(n>>>0).toString(16).padStart(e/4,"0")}const Vl=class Vl{constructor(){this._h0=1732584193,this._h1=4023233417,this._h2=2562383102,this._h3=271733878,this._h4=3285377520,this._buff=new Uint8Array(67),this._buffDV=new DataView(this._buff.buffer),this._buffLen=0,this._totalLen=0,this._leftoverHighSurrogate=0,this._finished=!1}update(e){const t=e.length;if(t===0)return;const r=this._buff;let i=this._buffLen,l=this._leftoverHighSurrogate,o,u;for(l!==0?(o=l,u=-1,l=0):(o=e.charCodeAt(0),u=0);;){let a=o;if(ek(o))if(u+1<t){const s=e.charCodeAt(u+1);df(s)?(u++,a=tk(o,s)):a=65533}else{l=o;break}else df(o)&&(a=65533);if(i=this._push(r,i,a),u++,u<t)o=e.charCodeAt(u);else break}this._buffLen=i,this._leftoverHighSurrogate=l}_push(e,t,r){return r<128?e[t++]=r:r<2048?(e[t++]=192|(r&1984)>>>6,e[t++]=128|(r&63)>>>0):r<65536?(e[t++]=224|(r&61440)>>>12,e[t++]=128|(r&4032)>>>6,e[t++]=128|(r&63)>>>0):(e[t++]=240|(r&1835008)>>>18,e[t++]=128|(r&258048)>>>12,e[t++]=128|(r&4032)>>>6,e[t++]=128|(r&63)>>>0),t>=64&&(this._step(),t-=64,this._totalLen+=64,e[0]=e[64],e[1]=e[65],e[2]=e[66]),t}digest(){return this._finished||(this._finished=!0,this._leftoverHighSurrogate&&(this._leftoverHighSurrogate=0,this._buffLen=this._push(this._buff,this._buffLen,65533)),this._totalLen+=this._buffLen,this._wrapUp()),Ir(this._h0)+Ir(this._h1)+Ir(this._h2)+Ir(this._h3)+Ir(this._h4)}_wrapUp(){this._buff[this._buffLen++]=128,this._buff.subarray(this._buffLen).fill(0),this._buffLen>56&&(this._step(),this._buff.fill(0));const e=8*this._totalLen;this._buffDV.setUint32(56,Math.floor(e/4294967296),!1),this._buffDV.setUint32(60,e%4294967296,!1),this._step()}_step(){const e=Vl._bigBlock32,t=this._buffDV;for(let c=0;c<64;c+=4)e.setUint32(c,t.getUint32(c,!1),!1);for(let c=64;c<320;c+=4)e.setUint32(c,Vo(e.getUint32(c-12,!1)^e.getUint32(c-32,!1)^e.getUint32(c-56,!1)^e.getUint32(c-64,!1),1),!1);let r=this._h0,i=this._h1,l=this._h2,o=this._h3,u=this._h4,a,s,f;for(let c=0;c<80;c++)c<20?(a=i&l|~i&o,s=1518500249):c<40?(a=i^l^o,s=1859775393):c<60?(a=i&l|i&o|l&o,s=2400959708):(a=i^l^o,s=3395469782),f=Vo(r,5)+a+u+s+e.getUint32(c*4,!1)&4294967295,u=o,o=l,l=Vo(i,30),i=r,r=f;this._h0=this._h0+r&4294967295,this._h1=this._h1+i&4294967295,this._h2=this._h2+l&4294967295,this._h3=this._h3+o&4294967295,this._h4=this._h4+u&4294967295}};Vl._bigBlock32=new DataView(new ArrayBuffer(320));let ua=Vl;class gf{constructor(e){this.opt=0,this.sign="",this.weight=0,e&&(this._node=e,e._xNode=this)}get node(){return this._node}get match(){return this._match}set match(e){this._match=e}}function aa(n,e,t,r=!1){var s,f,c,p,d;let i=-1,l=0,o=r;r||(e.setXNode(t._id,new gf(t)),o=ae(t));const u=new Tk(t.type);(s=t.children)==null||s.forEach(g=>{l+=aa(u,e,g,o)});const a=r?new gf:t._xNode;switch(a.weight=l,t.type){case q.Code:i=t.value.length;break;case q.Html:i=t.value.length;break;case q.Link:i=t.url.length+(((f=t.title)==null?void 0:f.length)??0);break;case q.InlineCode:i=t.value.length;break;case q.Image:i=t.url.length+(((c=t.title)==null?void 0:c.length)??0)+(((p=t.alt)==null?void 0:p.length)??0);break;case q.Text:i=t.value.length;break;case q.LinkReference:i=((d=t.label)==null?void 0:d.length)??0;break}switch(i>=0?a.weight=1+(i===0?0:Math.log(i)):a.weight+=1,t.type){case q.List:u.update(t.ordered),u.update(t.start),u.update(t.spread);break;case q.ListItem:u.update(t.checked),u.update(t.spread);break;case q.Heading:u.update(t.depth);break;case q.Text:u.update(t.value);break;case q.Html:u.update(t.value);break;case q.Link:u.update(t.url),u.update(t.title);break;case q.Code:u.update(t.value),u.update(t.lang);break;case q.InlineCode:u.update(t.value);break;case q.Table:u.update(t.align);break;case q.Image:u.update(t.url),u.update(t.title),u.update(t.alt);break}return a.sign=u.digest(),n&&n.update(a.sign),a.weight>e.maxWeight&&(e.maxWeight=a.weight),a.weight}class Tk{constructor(e=""){this.sha=new ua,e&&this.sha.update(e)}update(e){if(this.sha.update("|"),e===void 0)this.sha.update("$$undefined$$");else if(e===null)this.sha.update("$$null$$");else if(typeof e=="string")this.sha.update(e);else if(typeof e=="number")this.sha.update(e.toString());else if(typeof e=="boolean")this.sha.update(e?"$$true$$":"$$false$$");else if(Array.isArray(e)){this.sha.update("[");for(let t=0;t<e.length;t++)this.update(e[t]);this.sha.update("]")}}digest(){return this.sha.digest()}}function Pk(n,e){var c;const t=[ak(n,e),sk(n,e),ck(n,e)],r=p=>{t.reverse().forEach(d=>d(p))};let i,l;const o=new af,u=new af;aa(null,o,n,!1),aa(null,u,e,!1);const a=Mk();for(a.enqueue(e);a.size()>0;){const p=a.dequeue();if(!p)break;if(l=p._xNode,!l)continue;b(!l.match),b(!l.optMatch),b(l.opt===0);for(let x=0;x<o.nodes.length;x++)i=o.getXNode(x),i!=null&&i.node&&(i!=null&&i.match||i.sign===l.sign&&(b(!i.match),Vy(i,o,l,u)));if(!l.optMatch){if(ae(p))continue;(c=p.children)==null||c.forEach(x=>a.enqueue(x));continue}b(!l.match);const g=l.optMatch._xNode;b(!g.match),Ph(g,o,l),Wy(g,o,l,u)}b(e._xNode),e._xNode.match||(b(n.type===q.Root),b(e.type===q.Root),i=n._xNode,l=e._xNode,b(i),b(l),b(!i.match),l.match=i.node,i.match=l.node),Lh(e),Nh(e);const f=zh(n,o,e,u,{value:0});return b(f.type===q.Root),r(f),f}function Ak(n,e){var t,r;return!n&&!e?{type:"root",children:[]}:!n&&e?((t=e.children)==null||t.forEach(i=>{i.data||(i.data={}),i.data.diff=En.Ins}),e):n&&!e?((r=n.children)==null||r.forEach(i=>{i.data||(i.data={}),i.data.diff=En.Del}),n):Pk(n,e)}function Ik(n,e){if(e)switch(n){case En.Ins:return Fr.InlineIns;case En.Del:return Fr.InlineDel}else switch(n){case En.Ins:return Fr.Ins;case En.Del:return Fr.Del}}function zk(n){return ce(n,(e,t,r)=>{var o;if(e.type==="listItem"||e.type===En.Ins||e.type===En.Del||!((o=e.data)!=null&&o.diff))return!0;const i=e.data.diff;delete e.data.diff;const l=Hy(e);return Th(r,e,{type:Ik(i,l),children:[e]}),!0}),n}const jh=uo(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]),yf={}.hasOwnProperty;function $h(n,e){const t=e||{};function r(i,...l){let o=r.invalid;const u=r.handlers;if(i&&yf.call(i,n)){const a=String(i[n]);o=yf.call(u,a)?u[a]:r.unknown}if(o)return o.call(this,i,...l)}return r.handlers=t.handlers||{},r.invalid=t.invalid,r.unknown=t.unknown,r}const Lk={}.hasOwnProperty;function Bh(n,e){let t=-1,r;if(e.extensions)for(;++t<e.extensions.length;)Bh(n,e.extensions[t]);for(r in e)if(Lk.call(e,r))switch(r){case"extensions":break;case"unsafe":{kf(n[r],e[r]);break}case"join":{kf(n[r],e[r]);break}case"handlers":{Nk(n[r],e[r]);break}default:n.options[r]=e[r]}return n}function kf(n,e){e&&n.push(...e)}function Nk(n,e){e&&Object.assign(n,e)}function Dk(n,e,t,r){const i=t.enter("blockquote"),l=t.createTracker(r);l.move("> "),l.shift(2);const o=t.indentLines(t.containerFlow(n,l.current()),bk);return i(),o}function bk(n,e,t){return">"+(t?"":" ")+n}function Hh(n,e){return wf(n,e.inConstruct,!0)&&!wf(n,e.notInConstruct,!1)}function wf(n,e,t){if(typeof e=="string"&&(e=[e]),!e||e.length===0)return t;let r=-1;for(;++r<e.length;)if(n.includes(e[r]))return!0;return!1}function xf(n,e,t,r){let i=-1;for(;++i<t.unsafe.length;){const l=t.unsafe[i];if(l.character===`
`&&!l.before&&!l.after&&Hh(t.stack,l))return/[\t ]/.test(r.before)?"":" "}return`\\
`}function Rk(n,e){const t=String(n);let r=t.indexOf(e),i=r,l=0,o=0;if(typeof e!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++l>o&&(o=l):l=1,i=r+e.length,r=t.indexOf(e,i);return o}function sa(n,e){return!!(e.options.fences===!1&&n.value&&!n.lang&&/[^\n\r ]/.test(n.value)&&!/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(n.value))}function Fk(n){const e=n.options.fence||"`";if(e!=="`"&&e!=="~")throw new Error("Cannot serialize code with `"+e+"` for `options.fence`, expected `` ` `` or `~`");return e}function Ok(n,e,t,r){const i=Fk(t),l=n.value||"";if(sa(n,t)){const c=t.enter("codeIndented"),p=t.indentLines(l,jk);return c(),p}const o=t.createTracker(r),u=i.repeat(Math.max(Rk(l,i)+1,3)),a=t.enter("codeFenced"),s=i==="`"?"GraveAccent":"Tilde";let f=o.move(u);if(n.lang){const c=t.enter(`codeFencedLang${s}`);f+=o.move(t.safe(n.lang,{before:f,after:" ",encode:["`"],...o.current()})),c()}if(n.lang&&n.meta){const c=t.enter(`codeFencedMeta${s}`);f+=o.move(" "),f+=o.move(t.safe(n.meta,{before:f,after:`
`,encode:["`"],...o.current()})),c()}return f+=o.move(`
`),l&&(f+=o.move(l+`
`)),f+=o.move(u),a(),f}function jk(n,e,t){return(t?"":"    ")+n}function ws(n){const e=n.options.quote||'"';if(e!=='"'&&e!=="'")throw new Error("Cannot serialize title with `"+e+"` for `options.quote`, expected `\"`, or `'`");return e}function $k(n,e,t,r){const i=ws(t),l=i==='"'?"Quote":"Apostrophe",o=t.enter("definition");let u=t.enter("label");const a=t.createTracker(r);let s=a.move("[");return s+=a.move(t.safe(t.associationId(n),{before:s,after:"]",...a.current()})),s+=a.move("]: "),u(),!n.url||/[\0- \u007F]/.test(n.url)?(u=t.enter("destinationLiteral"),s+=a.move("<"),s+=a.move(t.safe(n.url,{before:s,after:">",...a.current()})),s+=a.move(">")):(u=t.enter("destinationRaw"),s+=a.move(t.safe(n.url,{before:s,after:n.title?" ":`
`,...a.current()}))),u(),n.title&&(u=t.enter(`title${l}`),s+=a.move(" "+i),s+=a.move(t.safe(n.title,{before:s,after:i,...a.current()})),s+=a.move(i),u()),o(),s}function Bk(n){const e=n.options.emphasis||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize emphasis with `"+e+"` for `options.emphasis`, expected `*`, or `_`");return e}xs.attention=Hk;xs.peek=Uk;function xs(n,e,t,r){const i=t.enter("phrasing"),l=t.containerPhrasing({type:"root",children:[n]},r);return i(),l}function Hk(n,e){return{construct:"emphasis",markers:Bk(e)==="*"?["*","_"]:["_","*"],sizes:[1]}}function Uk(n,e,t){return t.options.emphasis||"*"}function vs(n){return"&#x"+n.toString(16).toUpperCase()+";"}const Vk={};function Ss(n,e){const t=Vk,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Uh(n,r,i)}function Uh(n,e,t){if(Wk(n)){if("value"in n)return n.type==="html"&&!t?"":n.value;if(e&&"alt"in n&&n.alt)return n.alt;if("children"in n)return vf(n.children,e,t)}return Array.isArray(n)?vf(n,e,t):""}function vf(n,e,t){const r=[];let i=-1;for(;++i<n.length;)r[i]=Uh(n[i],e,t);return r.join("")}function Wk(n){return!!(n&&typeof n=="object")}function Vh(n,e){let t=!1;return ce(n,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,la}),!!((!n.depth||n.depth<3)&&Ss(n)&&(e.options.setext||t))}function qk(n,e,t,r){const i=Math.max(Math.min(6,n.depth||1),1),l=t.createTracker(r);if(Vh(n,t)){const c=t.enter("headingSetext"),p=t.enter("phrasing"),d=t.containerPhrasing(n,{...l.current(),before:`
`,after:`
`});return p(),c(),d+`
`+(i===1?"=":"-").repeat(d.length-(Math.max(d.lastIndexOf("\r"),d.lastIndexOf(`
`))+1))}const o="#".repeat(i),u=t.enter("headingAtx"),a=t.enter("phrasing");l.move(o+" ");let s=t.containerPhrasing(n,{before:"# ",after:`
`,...l.current()});const f=s.charCodeAt(0);return(f===9||f===32)&&(s=vs(f)+s.slice(1)),s=s?o+" "+s:o,t.options.closeAtx&&(s+=" "+o),a(),u(),s}Wh.peek=Qk;function Wh(n){return n.value||""}function Qk(){return"<"}qh.peek=Yk;function qh(n,e,t,r){const i=ws(t),l=i==='"'?"Quote":"Apostrophe",o=t.enter("image");let u=t.enter("label");const a=t.createTracker(r);let s=a.move("![");return s+=a.move(t.safe(n.alt,{before:s,after:"]",...a.current()})),s+=a.move("]("),u(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(u=t.enter("destinationLiteral"),s+=a.move("<"),s+=a.move(t.safe(n.url,{before:s,after:">",...a.current()})),s+=a.move(">")):(u=t.enter("destinationRaw"),s+=a.move(t.safe(n.url,{before:s,after:n.title?" ":")",...a.current()}))),u(),n.title&&(u=t.enter(`title${l}`),s+=a.move(" "+i),s+=a.move(t.safe(n.title,{before:s,after:i,...a.current()})),s+=a.move(i),u()),s+=a.move(")"),o(),s}function Yk(){return"!"}Qh.peek=Gk;function Qh(n,e,t,r){const i=n.referenceType,l=t.enter("imageReference");let o=t.enter("label");const u=t.createTracker(r);let a=u.move("![");const s=t.safe(n.alt,{before:a,after:"]",...u.current()});a+=u.move(s+"]["),o();const f=t.stack;t.stack=f.filter(function(p){return p!=="phrasing"}),o=t.enter("reference");const c=t.safe(t.associationId(n),{before:a,after:"]",...u.current()});return o(),t.stack=f,l(),i==="full"||!s||s!==c?a+=u.move(c+"]"):i==="shortcut"?a=a.slice(0,-1):a+=u.move("]"),a}function Gk(){return"!"}Yh.peek=Xk;function Yh(n,e,t){let r=n.value||"",i="`",l=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^\n\r ]/.test(r)&&(/^[\n\r ]/.test(r)&&/[\n\r ]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++l<t.unsafe.length;){const o=t.unsafe[l],u=t.compilePattern(o);if(!o.atBreak)continue;let a;for(;a=u.exec(r);){let s=a.index;r.charCodeAt(s)===10&&r.charCodeAt(s-1)===13&&s--,r=r.slice(0,s)+" "+r.slice(a.index+1)}}return i+r+i}function Xk(){return"`"}function Gh(n,e){const t=Ss(n);return!!(!e.options.resourceLink&&n.url&&!n.title&&n.children&&n.children.length===1&&n.children[0].type==="text"&&(t===n.url||"mailto:"+t===n.url)&&/^[a-z][+\-.a-z]+:/i.test(n.url)&&!/[\0- <>\u007F]/.test(n.url))}Xh.peek=Kk;function Xh(n,e,t,r){const i=ws(t),l=i==='"'?"Quote":"Apostrophe",o=t.createTracker(r);if(Gh(n,t)){const f=t.stack;t.stack=f.filter(function(d){return d!=="phrasing"});const c=t.enter("autolink");let p=o.move("<");return p+=o.move(t.containerPhrasing(n,{before:p,after:">",...o.current()})),p+=o.move(">"),c(),t.stack=f,p}const u=t.enter("link");let a=t.enter("label"),s=o.move("[");return s+=o.move(t.containerPhrasing(n,{before:s,after:"](",...o.current()})),s+=o.move("]("),a(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(a=t.enter("destinationLiteral"),s+=o.move("<"),s+=o.move(t.safe(n.url,{before:s,after:">",...o.current()})),s+=o.move(">")):(a=t.enter("destinationRaw"),s+=o.move(t.safe(n.url,{before:s,after:n.title?" ":")",...o.current()}))),a(),n.title&&(a=t.enter(`title${l}`),s+=o.move(" "+i),s+=o.move(t.safe(n.title,{before:s,after:i,...o.current()})),s+=o.move(i),a()),s+=o.move(")"),u(),s}function Kk(n,e,t){return Gh(n,t)?"<":"["}Kh.peek=Zk;function Kh(n,e,t,r){const i=n.referenceType,l=t.enter("linkReference");let o=t.enter("label");const u=t.createTracker(r);let a=u.move("[");const s=t.containerPhrasing(n,{before:a,after:"]",...u.current()});a+=u.move(s+"]["),o();const f=t.stack;t.stack=f.filter(function(p){return p!=="phrasing"}),o=t.enter("reference");const c=t.safe(t.associationId(n),{before:a,after:"]",...u.current()});return o(),t.stack=f,l(),i==="full"||!s||s!==c?a+=u.move(c+"]"):i==="shortcut"?a=a.slice(0,-1):a+=u.move("]"),a}function Zk(){return"["}function Cs(n){const e=n.options.bullet||"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bullet`, expected `*`, `+`, or `-`");return e}function Jk(n){const e=Cs(n),t=n.options.bulletOther;if(!t)return e==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===e)throw new Error("Expected `bullet` (`"+e+"`) and `bulletOther` (`"+t+"`) to be different");return t}function nw(n){const e=n.options.bulletOrdered||".";if(e!=="."&&e!==")")throw new Error("Cannot serialize items with `"+e+"` for `options.bulletOrdered`, expected `.` or `)`");return e}function Zh(n){const e=n.options.rule||"*";if(e!=="*"&&e!=="-"&&e!=="_")throw new Error("Cannot serialize rules with `"+e+"` for `options.rule`, expected `*`, `-`, or `_`");return e}function ew(n,e,t,r){const i=t.enter("list"),l=t.bulletCurrent;let o=n.ordered?nw(t):Cs(t);const u=n.ordered?o==="."?")":".":Jk(t);let a=e&&t.bulletLastUsed?o===t.bulletLastUsed:!1;if(!n.ordered){const f=n.children?n.children[0]:void 0;if((o==="*"||o==="-")&&f&&(!f.children||!f.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(a=!0),Zh(t)===o&&f){let c=-1;for(;++c<n.children.length;){const p=n.children[c];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){a=!0;break}}}}a&&(o=u),t.bulletCurrent=o;const s=t.containerFlow(n,r);return t.bulletLastUsed=o,t.bulletCurrent=l,i(),s}function tw(n){const e=n.options.listItemIndent||"one";if(e!=="tab"&&e!=="one"&&e!=="mixed")throw new Error("Cannot serialize items with `"+e+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return e}function rw(n,e,t,r){const i=tw(t);let l=t.bulletCurrent||Cs(t);e&&e.type==="list"&&e.ordered&&(l=(typeof e.start=="number"&&e.start>-1?e.start:1)+(t.options.incrementListMarker===!1?0:e.children.indexOf(n))+l);let o=l.length+1;(i==="tab"||i==="mixed"&&(e&&e.type==="list"&&e.spread||n.spread))&&(o=Math.ceil(o/4)*4);const u=t.createTracker(r);u.move(l+" ".repeat(o-l.length)),u.shift(o);const a=t.enter("listItem"),s=t.indentLines(t.containerFlow(n,u.current()),f);return a(),s;function f(c,p,d){return p?(d?"":" ".repeat(o))+c:(d?l:l+" ".repeat(o-l.length))+c}}function iw(n,e,t,r){const i=t.enter("paragraph"),l=t.enter("phrasing"),o=t.containerPhrasing(n,r);return l(),i(),o}function lw(n,e,t,r){if(!n.children.some(function(u){return jh(u)}))return t.containerFlow(n,r);const l=t.enter("phrasing"),o=t.containerPhrasing(n,r);return l(),o}function ow(n){const e=n.options.strong||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize strong with `"+e+"` for `options.strong`, expected `*`, or `_`");return e}_s.attention=uw;_s.peek=aw;function _s(n,e,t,r){const i=t.enter("phrasing"),l=t.containerPhrasing({type:"root",children:[n]},r);return i(),l}function uw(n,e){return{construct:"strong",markers:ow(e)==="*"?["*","_"]:["_","*"],sizes:[2]}}function aw(n,e,t){return t.options.strong||"*"}function sw(n,e,t,r){const i=e?e.children:[],l=i.indexOf(n);return t.safe(n.value,{...r,afterNode:i[l+1],beforeNode:i[l-1]})}function cw(n){const e=n.options.ruleRepetition||3;if(e<3)throw new Error("Cannot serialize rules with repetition `"+e+"` for `options.ruleRepetition`, expected `3` or more");return e}function fw(n,e,t){const r=(Zh(t)+(t.options.ruleSpaces?" ":"")).repeat(cw(t));return t.options.ruleSpaces?r.slice(0,-1):r}const Es={blockquote:Dk,break:xf,code:Ok,definition:$k,emphasis:xs,hardBreak:xf,heading:qk,html:Wh,image:qh,imageReference:Qh,inlineCode:Yh,link:Xh,linkReference:Kh,list:ew,listItem:rw,paragraph:iw,root:lw,strong:_s,text:sw,thematicBreak:fw},Pn=ht(/[A-Za-z]/),An=ht(/[\dA-Za-z]/),dw=ht(/[#-'*+\--9=?A-Z^-~]/);function Ol(n){return n!==null&&(n<32||n===127)}const ca=ht(/\d/),pw=ht(/[\dA-Fa-f]/),Jh=ht(/[!-/:-@[-`{-~]/);function O(n){return n!==null&&n<-2}function en(n){return n!==null&&(n<0||n===32)}function V(n){return n===-2||n===-1||n===32}const po=ht(new RegExp("\\p{P}|\\p{S}","u")),zt=ht(/\s/);function ht(n){return e;function e(t){return t!==null&&t>-1&&n.test(String.fromCharCode(t))}}const nm=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],fa=["pre","script","style","textarea"];function da(n){if(n.charCodeAt(0)!==60)return;const e=n.charCodeAt(1);if(e===33){const u=n.charCodeAt(2);return u===45?2:u===91?5:Pn(u)?4:void 0}if(e===63)return 3;const t=e===47,r=t?2:1;let i=r,l=n.charCodeAt(i);if(!Pn(l))return;for(;l===45||An(l);)l=n.charCodeAt(++i);const o=n.slice(r,i).toLowerCase();return!t&&l!==47&&fa.includes(o)?1:nm.includes(o)?6:7}const hw=[mw];function mw(n,e,t,r){if(e.type==="code"&&sa(e,r)&&(n.type==="list"||n.type===e.type&&sa(n,r)))return!1;if("spread"in t&&typeof t.spread=="boolean"){if(n.type==="paragraph"&&(n.type===e.type||e.type==="definition"||e.type==="heading"&&Vh(e,r)))return;if(n.type==="html"){const i=da(n.value);if(i===void 0||i===6||i===7)return 1}if(n.type==="paragraph"&&e.type==="html"){const i=da(e.value);if(i===void 0||i===7)return 1}return t.spread?1:0}}const mt=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"],em=[{character:"	",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",before:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"\r",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:`
`,inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:"\r",before:"[\\r\\n]",inConstruct:"phrasing"},{character:"\r",after:"\\r",inConstruct:"phrasing"},{character:`
`,before:"\\n",inConstruct:"phrasing"},{character:`
`,after:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",after:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",before:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"!",after:"\\[",inConstruct:"phrasing",notInConstruct:mt},{character:'"',inConstruct:"titleQuote"},{atBreak:!0,character:"#"},{character:"#",inConstruct:"headingAtx",after:`(?:[\r
]|$)`},{character:"&",after:"[#A-Za-z]",inConstruct:"phrasing"},{character:"'",inConstruct:"titleApostrophe"},{character:"(",inConstruct:"destinationRaw"},{before:"\\]",character:"(",inConstruct:"phrasing",notInConstruct:mt},{atBreak:!0,before:"\\d+",character:")"},{character:")",inConstruct:"destinationRaw"},{atBreak:!0,character:"*",after:`(?:[ 	\r
*])`},{character:"*",inConstruct:"phrasing",notInConstruct:mt},{atBreak:!0,character:"+",after:`(?:[ 	\r
])`},{atBreak:!0,character:"-",after:`(?:[ 	\r
-])`},{atBreak:!0,before:"\\d+",character:".",after:`(?:[ 	\r
]|$)`},{atBreak:!0,character:"<",after:"[!/?A-Za-z]"},{character:"<",after:"[!/?A-Za-z]",inConstruct:"phrasing",notInConstruct:mt},{character:"<",inConstruct:"destinationLiteral"},{atBreak:!0,character:"="},{atBreak:!0,character:">"},{character:">",inConstruct:"destinationLiteral"},{atBreak:!0,character:"["},{character:"[",inConstruct:"phrasing",notInConstruct:mt},{character:"[",inConstruct:["label","reference"]},{character:"\\",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"]",inConstruct:["label","reference"]},{atBreak:!0,character:"_"},{character:"_",inConstruct:"phrasing",notInConstruct:mt},{atBreak:!0,character:"`"},{character:"`",inConstruct:["codeFencedLangGraveAccent","codeFencedMetaGraveAccent"]},{character:"`",inConstruct:"phrasing",notInConstruct:mt},{atBreak:!0,character:"~"},{character:"<",inConstruct:"autolink"},{character:">",inConstruct:"autolink"},{character:"",inConstruct:"autolink"}];let Sf=-1;for(;++Sf<33;)em.push({character:String.fromCharCode(Sf),inConstruct:"autolink"});const Cf=document.createElement("i");function Ms(n){const e="&"+n+";";Cf.innerHTML=e;const t=Cf.textContent;return t.charCodeAt(t.length-1)===59&&n!=="semi"||t===e?!1:t}function tm(n,e){const t=Number.parseInt(n,e);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}const gw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function rm(n){return n.replace(gw,yw)}function yw(n,e,t){if(e)return e;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),l=i===120||i===88;return tm(t.slice(l?2:1),l?16:10)}return Ms(t)||n}function kw(n){return n.label||!n.identifier?n.label||"":rm(n.identifier)}function ww(n){if(!n._compiled){const e=(n.atBreak?"[\\r\\n][\\t ]*":"")+(n.before?"(?:"+n.before+")":"");n._compiled=new RegExp((n.beforeNode?"^":e?"("+e+")":"")+(/[$()*+.?[\\\]^{|}]/.test(n.character)?"\\":"")+n.character+(n.afterNode?"$":n.after?"(?:"+n.after+")":""),n.unicode?"gu":"g")}return n._compiled}function ze(n){if(n===null||en(n)||zt(n))return 1;if(po(n))return 2}function jl(n){const e=n.codePointAt(0);return e===void 0?"":String.fromCodePoint(e)}function Gr(n){const e=n.codePointAt(n.length-2);return e!==void 0&&e>65535?n.slice(-2):n.slice(-1)}function _f(n,e,t){const r=ze(n),i=ze(e);return r===void 0?i===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}const xw=new Map([["*",!1],["_",!0]]);function vw(n,e,t){const r=new Set;for(const l of n){const o=t.get(l);if(o&&l.attention&&e.some(u=>u.attention===l.attention))for(const u of o.tokens)r.add(u.attention)}const i=[];for(const l of n)l.attention&&r.delete(l.attention)&&i.push(l.attention);return i.reverse(),i}function im(n,e,t){const r=[],i=new Map,l=new Map;let o=0;for(;o<n.length;){if(!n[o].attention){o++;continue}const u=n[o].value.charAt(0),a=xw.get(u);let s=o+1;for(;s<n.length&&n[s].attention&&n[s].value.charAt(0)===u;)s++;const f=o?n[o-1].value:e,c=ze(f.charCodeAt(f.length-1)),p=ze((s<n.length?n[s].value:t).charCodeAt(0)),d=!p||p===2&&!!c,g=!c||c===2&&!!p,x={tokens:n.slice(o,s),markers:[],start:0,end:0,open:a?d&&(!!c||!g):d,close:a?g&&(!!p||!d):g,split:a!==void 0};for(const M of x.tokens){i.set(M,[...x.tokens]),l.set(M,x);let h=M.value.length;for(;h--;)x.markers.push(M)}x.end=x.markers.length,r.push(x),o=s}for(_w(r,i),o=-1;++o<n.length;){const u=i.get(n[o]);if(u)return{attention:vw(n,u,l),index:o}}}function Sw(n,e,t){return pa(lm(n,e,t),t.before,t.after)}function Hi(n,e){const t=n[e?0:n.length-1];if(!t||t.attention)return;const r=e?jl(t.value):Gr(t.value),i=vs(r.codePointAt(0));t.value=e?i+t.value.slice(r.length):t.value.slice(0,t.value.length-r.length)+i}function Cw(n,e,t,r,i){for(const l of t.attention){const o=e.get(l)||l.sequences[0];for(const u of l.sequences){if(u===o)continue;const a=new Map(e);a.set(l,u);const s=Ts(n,a,r,i),f=im(s,r,i);if(!f||f.index>t.index)return{chosen:a,mistake:f,tokens:s}}}}function _w(n,e){let t=0;for(;t<n.length;){const r=n[t],i=r.tokens[0].value.charAt(0),l=r.end-r.start;let o=r.close&&l?t:0;for(;o--;){const u=n[o],a=u.end-u.start;if(u.tokens[0].value.charAt(0)===i&&u.open&&a&&(r.split?!((u.close||r.open)&&l%3)||(a+l)%3:a===u.markers.length&&a===l)){const s=r.split?a>1&&l>1?2:1:l,f=u.markers.slice(u.end-s,u.end),c=r.markers.slice(r.start,r.start+s),p=f[0],d=c[0];if(p===f[s-1]&&p.value.length===s&&d===c[s-1]&&d.value.length===s&&p.attention===d.attention)e.delete(p),e.delete(d);else{const g=[...new Set([...f,...c])];for(const x of g){const M=e.get(x);M&&M.push(...g)}}u.end-=s,r.start+=s;break}}(o===-1||r.start===r.end)&&t++}}function Ew(n,e,t){if(e.length===0)throw new Error("Cannot serialize `"+n+"` as attention without markers, expected one or more markers");if(t.length===0)throw new Error("Cannot serialize `"+n+"` as attention without sizes, expected one or more sizes");for(const i of t)if(!Number.isSafeInteger(i)||i<1)throw new Error("Cannot serialize `"+n+"` as attention with `"+i+"` as size, expected positive integer");const r=[];for(const i of e){if(i.length!==1)throw new Error("Cannot serialize `"+n+"` as attention with `"+i+"` as marker, expected a single ascii character");if(!Jh(i.charCodeAt(0)))throw new Error("Cannot serialize `"+n+"` as attention with `"+i+"` as marker, expected ascii punctuation");for(const l of t)r.push(i.repeat(l))}return r}function lm(n,e,t){const r=e.indexStack,i=n.children||[],l=[];let o=-1,u=t.before;r.push(-1);let a=e.createTracker(t);for(;++o<i.length;){const s=i[o];let f;if(r[r.length-1]=o,o+1<i.length){let d=e.handle.handlers[i[o+1].type];d&&d.peek&&(d=d.peek),f=d?jl(d(i[o+1],n,e,{before:"",after:"",...a.current()})):""}else f=t.after;const c=l[l.length-1];typeof c=="string"&&(u==="\r"||u===`
`)&&s.type==="html"&&da(s.value)!==7&&(l[l.length-1]=c.replace(/(\r?\n|\r)$/," "),u=" ",a=e.createTracker(t),a.move(pa(l,t.before,t.after)));const p=e.handle.handlers[s.type];if(p&&p.attention){const{construct:d,markers:g,sizes:x}=p.attention(s,e),M=Ew(s.type,g,x),h=M[0],m=e.enter(d);a.move(h);const y=lm(s,e,{...a.current(),before:h,after:h});a.move(pa(y,h,h)),a.move(h),m(),l.push({children:y,sequences:M}),u=h.charAt(h.length-1)}else{const d=e.handle(s,n,e,{...a.current(),after:f,before:u});if(!d)continue;a.move(d),l.push(d),u=Gr(d)}}return r.pop(),l}function Ts(n,e,t,r){const i=[];let l,o=Gr(t),u=-1;for(;++u<n.length;){const a=n[u];if(typeof a=="string"){const y={value:a,attention:void 0};l&&l===jl(a)&&Hi([y],!0),l=void 0,i.push(y),y.value&&(o=Gr(y.value));continue}const s=e.get(a)||a.sequences[0],f=s.charAt(0),c=n[u+1],p=o,d=jl(c===void 0?r:typeof c=="string"?c:e.get(c)||c.sequences[0]),g=Ts(a.children,e,s,s),x=g.length>0?g[0].value:"",M=_f(p.charCodeAt(p.length-1),x.charCodeAt(0),f);M.inside&&Hi(g,!0);const h=g.length>0?Gr(g[g.length-1].value):"",m=_f(d.charCodeAt(0),h.charCodeAt(h.length-1),f);m.inside&&Hi(g,!1),M.outside&&p!==`
`&&p!=="\r"&&Hi(i,!1),m.outside&&(l=d),i.push({value:s,attention:a},...g,{value:s,attention:a}),o=s.charAt(s.length-1)}return i}function pa(n,e,t){let r=new Map;const i=Ts(n,r,e,t);let l=i,o=im(l,e,t);for(;o;){const a=Cw(n,r,o,e,t);if(!a){l=i;break}r=a.chosen,l=a.tokens,o=a.mistake}let u="";for(const a of l)u+=a.value;return u}function Mw(n,e,t){const r=e.indexStack,i=n.children||[],l=e.createTracker(t),o=[];let u=-1;for(r.push(-1);++u<i.length;){const a=i[u];r[r.length-1]=u,o.push(l.move(e.handle(a,n,e,{before:`
`,after:`
`,...l.current()}))),a.type!=="list"&&(e.bulletLastUsed=void 0),u<i.length-1&&o.push(l.move(Tw(a,i[u+1],n,e)))}return r.pop(),o.join("")}function Tw(n,e,t,r){let i=r.join.length;for(;i--;){const l=r.join[i](n,e,t,r);if(l===!0||l===1)break;if(typeof l=="number")return`
`.repeat(1+l);if(l===!1)return`

<!---->

`}return`

`}const Pw=/\r?\n|\r/g;function Aw(n,e){const t=[];let r=0,i=0,l;for(;l=Pw.exec(n);)o(n.slice(r,l.index)),t.push(l[0]),r=l.index+l[0].length,i++;return o(n.slice(r)),t.join("");function o(u){t.push(e(u,i,!u))}}const Wo={}.hasOwnProperty;function Iw(n,e,t){const r=(t.before||"")+(e||"")+(t.after||""),i=[],l=[],o={},u=n.stack.includes("autolink"),a=t.before?t.before.length:0,s=r.length-(t.after?t.after.length:0);let f=-1;for(;++f<n.unsafe.length;){const d=n.unsafe[f];if(!Hh(n.stack,d)||!Ef(d.beforeNode,t.beforeNode)||!Ef(d.afterNode,t.afterNode))continue;const g=n.compilePattern(d),x=d.beforeNode?a:0,M=r.slice(x,d.afterNode?s:void 0);let h;for(;h=g.exec(M);){const m="before"in d||!!d.atBreak,y="after"in d,C=x+h.index+(m?h[1].length:0);Wo.call(o,C)?(o[C].before&&!m&&(o[C].before=!1),o[C].after&&!y&&(o[C].after=!1)):(i.push(C),o[C]={before:m,after:y})}}i.sort(zw);let c=a;for(f=-1;++f<i.length;){const d=i[f];if(!(d<c||d>=s)){if(r.charAt(d)==="_"&&d>0&&ze(r.charCodeAt(d-1))===void 0&&!Wo.call(o,d-1)&&!(d-1===a&&/[*_]/.test(r.charAt(a-1)))){let g=d+1;for(;g<s&&r.charAt(g)==="_";)g++;const x=g-d-1;if(i[f+x]===g-1&&g<r.length&&ze(r.charCodeAt(g))===void 0&&!Wo.call(o,g)&&!(g===s-1&&/[*_]/.test(r.charAt(s)))){f+=x;continue}}if(!(d+1<s&&i[f+1]===d+1&&o[d].after&&!o[d+1].before&&!o[d+1].after||i[f-1]===d-1&&o[d].before&&!o[d-1].before&&!o[d-1].after)){if(c!==d){const g=r.slice(c,d);l.push(u?g:Mf(g,"\\"))}c=d,u?(l.push("%"+r.charCodeAt(d).toString(16).toUpperCase().padStart(2,"0")),c++):/[!-/:-@[-`{-~]/.test(r.charAt(d))&&(!t.encode||!t.encode.includes(r.charAt(d)))?l.push("\\"):(l.push(vs(r.charCodeAt(d))),c++)}}}const p=r.slice(c,s);return l.push(u?p:Mf(p,t.after)),l.join("")}function Ef(n,e){return n?e?typeof n=="string"?n===e.type:n.includes(e.type):!1:!0}function zw(n,e){return n-e}function Mf(n,e){const t=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],l=n+e;let o=-1,u=0,a;for(;a=t.exec(l);)r.push(a.index);for(;++o<r.length;)u!==r[o]&&i.push(n.slice(u,r[o])),i.push("\\"),u=r[o];return i.push(n.slice(u)),i.join("")}function Lw(n){const e=n||{},t=e.now||{};let r=e.lineShift||0,i=t.line||1,l=t.column||1;return{move:a,current:o,shift:u};function o(){return{now:{line:i,column:l},lineShift:r}}function u(s){r+=s}function a(s){const f=s||"",c=f.split(/\r?\n|\r/g),p=c[c.length-1];return i+=c.length-1,l=c.length===1?l+p.length:1+p.length+r,f}}function Nw(n,e){const t=e||{},r={associationId:kw,bulletCurrent:void 0,bulletLastUsed:void 0,containerPhrasing:Fw,containerFlow:Ow,createTracker:Lw,compilePattern:ww,enter:l,handlers:{...Es},handle:void 0,indentLines:Aw,indexStack:[],join:[...hw],options:{},safe:jw,stack:[],unsafe:[...em]};Bh(r,t),r.options.tightDefinitions&&r.join.push(Rw),r.handle=$h("type",{invalid:Dw,unknown:bw,handlers:r.handlers});let i=r.handle(jh(n)?{type:"root",children:[n]}:n,void 0,r,{before:`
`,after:`
`,now:{line:1,column:1},lineShift:0});return i&&i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i;function l(o){return r.stack.push(o),u;function u(){r.stack.pop()}}}function Dw(n){throw new Error("Cannot handle value `"+n+"`, expected node")}function bw(n){const e=n;throw new Error("Cannot handle unknown node `"+e.type+"`")}function Rw(n,e){if(n.type==="definition"&&n.type===e.type)return 0}function Fw(n,e){return Sw(n,this,e)}function Ow(n,e){return Mw(n,this,e)}function jw(n,e){return Iw(this,n,e)}function $w(n){const e=this;e.compiler=t;function t(r){return Nw(r,{...e.data("settings"),...n,extensions:e.data("toMarkdownExtensions")||[]})}}function Tf(n){if(n)throw n}var fl=Object.prototype.hasOwnProperty,om=Object.prototype.toString,Pf=Object.defineProperty,Af=Object.getOwnPropertyDescriptor,If=function(e){return typeof Array.isArray=="function"?Array.isArray(e):om.call(e)==="[object Array]"},zf=function(e){if(!e||om.call(e)!=="[object Object]")return!1;var t=fl.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&fl.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!r)return!1;var i;for(i in e);return typeof i>"u"||fl.call(e,i)},Lf=function(e,t){Pf&&t.name==="__proto__"?Pf(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},Nf=function(e,t){if(t==="__proto__")if(fl.call(e,t)){if(Af)return Af(e,t).value}else return;return e[t]},Bw=function n(){var e,t,r,i,l,o,u=arguments[0],a=1,s=arguments.length,f=!1;for(typeof u=="boolean"&&(f=u,u=arguments[1]||{},a=2),(u==null||typeof u!="object"&&typeof u!="function")&&(u={});a<s;++a)if(e=arguments[a],e!=null)for(t in e)r=Nf(u,t),i=Nf(e,t),u!==i&&(f&&i&&(zf(i)||(l=If(i)))?(l?(l=!1,o=r&&If(r)?r:[]):o=r&&zf(r)?r:{},Lf(u,{name:t,newValue:n(f,o,i)})):typeof i<"u"&&Lf(u,{name:t,newValue:i}));return u};const qo=fd(Bw);function ha(n){if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function Hw(){const n=[],e={run:t,use:r};return e;function t(...i){let l=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);u(null,...i);function u(a,...s){const f=n[++l];let c=-1;if(a){o(a);return}for(;++c<i.length;)(s[c]===null||s[c]===void 0)&&(s[c]=i[c]);i=s,f?Uw(f,u)(...s):o(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return n.push(i),e}}function Uw(n,e){let t;return r;function r(...o){const u=n.length>o.length;let a;u&&o.push(i);try{a=n.apply(this,o)}catch(s){const f=s;if(u&&t)throw f;return i(f)}u||(a&&a.then&&typeof a.then=="function"?a.then(l,i):a instanceof Error?i(a):l(a))}function i(o,...u){t||(t=!0,e(o,...u))}function l(o){i(null,o)}}function Xr(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?Df(n.position):"start"in n||"end"in n?Df(n):"line"in n||"column"in n?ma(n):""}function ma(n){return bf(n&&n.line)+":"+bf(n&&n.column)}function Df(n){return ma(n&&n.start)+"-"+ma(n&&n.end)}function bf(n){return n&&typeof n=="number"?n:1}class Yn extends Error{constructor(e,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",l={},o=!1;if(t&&("line"in t&&"column"in t?l={place:t}:"start"in t&&"end"in t?l={place:t}:"type"in t?l={ancestors:[t],place:t.position}:l={...t}),typeof e=="string"?i=e:!l.cause&&e&&(o=!0,i=e.message,l.cause=e),!l.ruleId&&!l.source&&typeof r=="string"){const a=r.indexOf(":");a===-1?l.ruleId=r:(l.source=r.slice(0,a),l.ruleId=r.slice(a+1))}if(!l.place&&l.ancestors&&l.ancestors){const a=l.ancestors[l.ancestors.length-1];a&&(l.place=a.position)}const u=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=u?u.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=u?u.line:void 0,this.name=Xr(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=o&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Yn.prototype.file="";Yn.prototype.name="";Yn.prototype.reason="";Yn.prototype.message="";Yn.prototype.stack="";Yn.prototype.column=void 0;Yn.prototype.line=void 0;Yn.prototype.ancestors=void 0;Yn.prototype.cause=void 0;Yn.prototype.fatal=void 0;Yn.prototype.place=void 0;Yn.prototype.ruleId=void 0;Yn.prototype.source=void 0;const Te={basename:Vw,dirname:Ww,extname:qw,join:Qw,sep:"/"};function Vw(n,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');vi(n);let t=0,r=-1,i=n.length,l;if(e===void 0||e.length===0||e.length>n.length){for(;i--;)if(n.codePointAt(i)===47){if(l){t=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":n.slice(t,r)}if(e===n)return"";let o=-1,u=e.length-1;for(;i--;)if(n.codePointAt(i)===47){if(l){t=i+1;break}}else o<0&&(l=!0,o=i+1),u>-1&&(n.codePointAt(i)===e.codePointAt(u--)?u<0&&(r=i):(u=-1,r=o));return t===r?r=o:r<0&&(r=n.length),n.slice(t,r)}function Ww(n){if(vi(n),n.length===0)return".";let e=-1,t=n.length,r;for(;--t;)if(n.codePointAt(t)===47){if(r){e=t;break}}else r||(r=!0);return e<0?n.codePointAt(0)===47?"/":".":e===1&&n.codePointAt(0)===47?"//":n.slice(0,e)}function qw(n){vi(n);let e=n.length,t=-1,r=0,i=-1,l=0,o;for(;e--;){const u=n.codePointAt(e);if(u===47){if(o){r=e+1;break}continue}t<0&&(o=!0,t=e+1),u===46?i<0?i=e:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||t<0||l===0||l===1&&i===t-1&&i===r+1?"":n.slice(i,t)}function Qw(...n){let e=-1,t;for(;++e<n.length;)vi(n[e]),n[e]&&(t=t===void 0?n[e]:t+"/"+n[e]);return t===void 0?".":Yw(t)}function Yw(n){vi(n);const e=n.codePointAt(0)===47;let t=Gw(n,!e);return t.length===0&&!e&&(t="."),t.length>0&&n.codePointAt(n.length-1)===47&&(t+="/"),e?"/"+t:t}function Gw(n,e){let t="",r=0,i=-1,l=0,o=-1,u,a;for(;++o<=n.length;){if(o<n.length)u=n.codePointAt(o);else{if(u===47)break;u=47}if(u===47){if(!(i===o-1||l===1))if(i!==o-1&&l===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(a=t.lastIndexOf("/"),a!==t.length-1){a<0?(t="",r=0):(t=t.slice(0,a),r=t.length-1-t.lastIndexOf("/")),i=o,l=0;continue}}else if(t.length>0){t="",r=0,i=o,l=0;continue}}e&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+n.slice(i+1,o):t=n.slice(i+1,o),r=o-i-1;i=o,l=0}else u===46&&l>-1?l++:l=-1}return t}function vi(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}const Xw={cwd:Kw};function Kw(){return"/"}function ga(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function Zw(n){if(typeof n=="string")n=new URL(n);else if(!ga(n)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(n.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return Jw(n)}function Jw(n){if(n.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const e=n.pathname;let t=-1;for(;++t<e.length;)if(e.codePointAt(t)===37&&e.codePointAt(t+1)===50){const r=e.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(e)}const Qo=["history","path","basename","stem","extname","dirname"];class nx{constructor(e){let t;e?ga(e)?t={path:e}:typeof e=="string"||ex(e)?t={value:e}:t=e:t={},this.cwd="cwd"in t?"":Xw.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Qo.length;){const l=Qo[r];l in t&&t[l]!==void 0&&t[l]!==null&&(this[l]=l==="history"?[...t[l]]:t[l])}let i;for(i in t)Qo.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?Te.basename(this.path):void 0}set basename(e){Go(e,"basename"),Yo(e,"basename"),this.path=Te.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?Te.dirname(this.path):void 0}set dirname(e){Rf(this.basename,"dirname"),this.path=Te.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?Te.extname(this.path):void 0}set extname(e){if(Yo(e,"extname"),Rf(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Te.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){ga(e)&&(e=Zw(e)),Go(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?Te.basename(this.path,this.extname):void 0}set stem(e){Go(e,"stem"),Yo(e,"stem"),this.path=Te.join(this.dirname||"",e+(this.extname||""))}fail(e,t,r){const i=this.message(e,t,r);throw i.fatal=!0,i}info(e,t,r){const i=this.message(e,t,r);return i.fatal=void 0,i}message(e,t,r){const i=new Yn(e,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function Yo(n,e){if(n&&n.includes(Te.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+Te.sep+"`")}function Go(n,e){if(!n)throw new Error("`"+e+"` cannot be empty")}function Rf(n,e){if(!n)throw new Error("Setting `"+e+"` requires `path` to be set too")}function ex(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const tx=function(n){const r=this.constructor.prototype,i=r[n],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l},rx={}.hasOwnProperty;class Ps extends tx{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Hw()}copy(){const e=new Ps;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];e.use(...r)}return e.data(qo(!0,{},this.namespace)),e}data(e,t){return typeof e=="string"?arguments.length===2?(Zo("data",this.frozen),this.namespace[e]=t,this):rx.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Zo("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(e,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=Ui(e),r=this.parser||this.Parser;return Xo("parse",r),r(String(t),t)}process(e,t){const r=this;return this.freeze(),Xo("process",this.parser||this.Parser),Ko("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(l,o){const u=Ui(e),a=r.parse(u);r.run(a,u,function(f,c,p){if(f||!c||!p)return s(f);const d=c,g=r.stringify(d,p);lx(g)?p.value=g:p.result=g,s(f,p)});function s(f,c){f||!c?o(f):l?l(c):t(void 0,c)}}}processSync(e){let t=!1,r;return this.freeze(),Xo("processSync",this.parser||this.Parser),Ko("processSync",this.compiler||this.Compiler),this.process(e,i),Of("processSync","process",t),r;function i(l,o){t=!0,Tf(l),r=o}}run(e,t,r){Ff(e),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?l(void 0,r):new Promise(l);function l(o,u){const a=Ui(t);i.run(e,a,s);function s(f,c,p){const d=c||e;f?u(f):o?o(d):r(void 0,d,p)}}}runSync(e,t){let r=!1,i;return this.run(e,t,l),Of("runSync","run",r),i;function l(o,u){Tf(o),i=u,r=!0}}stringify(e,t){this.freeze();const r=Ui(t),i=this.compiler||this.Compiler;return Ko("stringify",i),Ff(e),i(e,r)}use(e,...t){const r=this.attachers,i=this.namespace;if(Zo("use",this.frozen),e!=null)if(typeof e=="function")a(e,t);else if(typeof e=="object")Array.isArray(e)?u(e):o(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function l(s){if(typeof s=="function")a(s,[]);else if(typeof s=="object")if(Array.isArray(s)){const[f,...c]=s;a(f,c)}else o(s);else throw new TypeError("Expected usable value, not `"+s+"`")}function o(s){if(!("plugins"in s)&&!("settings"in s))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");u(s.plugins),s.settings&&(i.settings=qo(!0,i.settings,s.settings))}function u(s){let f=-1;if(s!=null)if(Array.isArray(s))for(;++f<s.length;){const c=s[f];l(c)}else throw new TypeError("Expected a list of plugins, not `"+s+"`")}function a(s,f){let c=-1,p=-1;for(;++c<r.length;)if(r[c][0]===s){p=c;break}if(p===-1)r.push([s,...f]);else if(f.length>0){let[d,...g]=f;const x=r[p][1];ha(x)&&ha(d)&&(d=qo(!0,x,d)),r[p]=[s,d,...g]}}}}const um=new Ps().freeze();function Xo(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function Ko(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function Zo(n,e){if(e)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Ff(n){if(!ha(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function Of(n,e,t){if(!t)throw new Error("`"+n+"` finished async. Use `"+e+"` instead")}function Ui(n){return ix(n)?n:new nx(n)}function ix(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function lx(n){return typeof n=="string"||ox(n)}function ox(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}function $l(n,e){const t=String(n);if(typeof e!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(e);for(;i!==-1;)r++,i=t.indexOf(e,i+e.length);return r}function ux(n){if(typeof n!="string")throw new TypeError("Expected a string");return n.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function ax(n,e,t){const i=uo((t||{}).ignore||[]),l=sx(e);let o=-1;for(;++o<l.length;)bh(n,"text",u);function u(s,f){let c=-1,p;for(;++c<f.length;){const d=f[c],g=p?p.children:void 0;if(i(d,g?g.indexOf(d):void 0,p))return;p=d}if(p)return a(s,f)}function a(s,f){const c=f[f.length-1],p=l[o][0],d=l[o][1];let g=0;const M=c.children.indexOf(s);let h=!1,m=[];p.lastIndex=0;let y=p.exec(s.value);for(;y;){const _=y.index,v={index:y.index,input:y.input,stack:[...f,s]};let T=d(...y,v);if(typeof T=="string"&&(T=T.length>0?{type:"text",value:T}:void 0),T===!1)p.lastIndex=_+1;else{if(g!==_&&C({type:"text",value:s.value.slice(g,_)}),Array.isArray(T))for(const A of T)C(A);else T&&C(T);g=_+y[0].length,h=!0}if(!p.global)break;y=p.exec(s.value)}return h?(g<s.value.length&&C({type:"text",value:s.value.slice(g)}),c.children.splice(M,1,...m)):m=[s],M+m.length;function C(_){const v=m[m.length-1];v&&v.type==="text"&&_.type==="text"?v.value+=_.value:m.push(_)}}}function sx(n){if(!Array.isArray(n))throw new TypeError("Expected find and replace tuple or list of tuples");const e=[],t=!n[0]||Array.isArray(n[0])?n:[n];let r=-1;for(;++r<t.length;){const i=t[r];e.push([cx(i[0]),fx(i[1])])}return e}function cx(n){return typeof n=="string"?new RegExp(ux(n),"g"):n}function fx(n){return typeof n=="function"?n:function(){return n}}const Jo="phrasing",nu=["autolink","link","image","label"];function dx(){return{transforms:[wx],enter:{literalAutolink:hx,literalAutolinkEmail:eu,literalAutolinkHttp:eu,literalAutolinkWww:eu},exit:{literalAutolink:kx,literalAutolinkEmail:yx,literalAutolinkHttp:mx,literalAutolinkWww:gx}}}function px(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Jo,notInConstruct:nu},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Jo,notInConstruct:nu},{character:":",before:"[ps]",after:"\\/",inConstruct:Jo,notInConstruct:nu}]}}function hx(n){this.enter({type:"link",title:null,url:"",children:[]},n)}function eu(n){this.config.enter.autolinkProtocol.call(this,n)}function mx(n){this.config.exit.autolinkProtocol.call(this,n)}function gx(n){this.config.exit.data.call(this,n);const e=this.stack[this.stack.length-1];e.type,e.url="http://"+this.sliceSerialize(n)}function yx(n){this.config.exit.autolinkEmail.call(this,n)}function kx(n){this.exit(n)}function wx(n){ax(n,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,xx],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),vx]],{ignore:["link","linkReference"]})}function xx(n,e,t,r,i){let l="";if(!am(i)||(/^w/i.test(e)&&(t=e+t,e="",l="http://"),!Sx(t)))return!1;const o=Cx(t+r);if(!o[0])return!1;const u={type:"link",title:null,url:l+e+o[0],children:[{type:"text",value:e+o[0]}]};return o[1]?[u,{type:"text",value:o[1]}]:u}function vx(n,e,t,r){return!am(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+t,children:[{type:"text",value:e+"@"+t}]}}function Sx(n){const e=n.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function Cx(n){const e=/[!"&'),.:;<>?\]}]+$/.exec(n);if(!e)return[n,void 0];n=n.slice(0,e.index);let t=e[0],r=t.indexOf(")");const i=$l(n,"(");let l=$l(n,")");for(;r!==-1&&i>l;)n+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),l++;return[n,t]}function am(n,e){const t=n.input.charCodeAt(n.index-1);return(n.index===0||zt(t)||po(t))&&(!e||t!==47)}function we(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}sm.peek=Lx;function _x(){this.buffer()}function Ex(n){this.enter({type:"footnoteReference",identifier:"",label:""},n)}function Mx(){this.buffer()}function Tx(n){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},n)}function Px(n){const e=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=we(this.sliceSerialize(n)).toLowerCase(),t.label=e}function Ax(n){this.exit(n)}function Ix(n){const e=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=we(this.sliceSerialize(n)).toLowerCase(),t.label=e}function zx(n){this.exit(n)}function Lx(){return"["}function sm(n,e,t,r){const i=t.createTracker(r);let l=i.move("[^");const o=t.enter("footnoteReference"),u=t.enter("reference");return l+=i.move(t.safe(t.associationId(n),{after:"]",before:l})),u(),o(),l+=i.move("]"),l}function Nx(){return{enter:{gfmFootnoteCallString:_x,gfmFootnoteCall:Ex,gfmFootnoteDefinitionLabelString:Mx,gfmFootnoteDefinition:Tx},exit:{gfmFootnoteCallString:Px,gfmFootnoteCall:Ax,gfmFootnoteDefinitionLabelString:Ix,gfmFootnoteDefinition:zx}}}function Dx(n){let e=!1;return n&&n.firstLineBlank&&(e=!0),{handlers:{footnoteDefinition:t,footnoteReference:sm},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,l,o){const u=l.createTracker(o);let a=u.move("[^");const s=l.enter("footnoteDefinition"),f=l.enter("label");return a+=u.move(l.safe(l.associationId(r),{before:a,after:"]"})),f(),a+=u.move("]:"),r.children&&r.children.length>0&&(u.shift(4),a+=u.move((e?`
`:" ")+l.indentLines(l.containerFlow(r,u.current()),e?cm:bx))),s(),a}}function bx(n,e,t){return e===0?n:cm(n,e,t)}function cm(n,e,t){return(t?"":"    ")+n}const Rx=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];As.attention=Bx;As.peek=Hx;function Fx(){return{canContainEols:["delete"],enter:{strikethrough:jx},exit:{strikethrough:$x}}}function Ox(){return{handlers:{delete:As},unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Rx}]}}function jx(n){this.enter({type:"delete",children:[],position:void 0},n)}function $x(n){this.exit(n)}function As(n,e,t,r){const i=t.createTracker(r),l=t.stack.includes("strikethrough")?"~":"~~",o=t.enter("strikethrough");let u=i.move(l);return u+=t.containerPhrasing(n,{...i.current(),before:u,after:"~"}),u+=i.move(l),o(),u}function Bx(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function Hx(){return"~"}function Ux(n){return n.length}function Vx(n,e){const t=e||{},r=(t.align||[]).concat(),i=t.stringLength||Ux,l=[],o=[],u=[],a=[];let s=0,f=-1;for(;++f<n.length;){const x=[],M=[];let h=-1;for(n[f].length>s&&(s=n[f].length);++h<n[f].length;){const m=Wx(n[f][h]);if(t.alignDelimiters!==!1){const y=i(m);M[h]=y,(a[h]===void 0||y>a[h])&&(a[h]=y)}x.push(m)}o[f]=x,u[f]=M}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<s;)l[c]=jf(r[c]);else{const x=jf(r);for(;++c<s;)l[c]=x}c=-1;const p=[],d=[];for(;++c<s;){const x=l[c];let M="",h="";x===99?(M=":",h=":"):x===108?M=":":x===114&&(h=":");let m=t.alignDelimiters===!1?1:Math.max(1,a[c]-M.length-h.length);const y=M+"-".repeat(m)+h;t.alignDelimiters!==!1&&(m=M.length+m+h.length,m>a[c]&&(a[c]=m),d[c]=m),p[c]=y}o.splice(1,0,p),u.splice(1,0,d),f=-1;const g=[];for(;++f<o.length;){const x=o[f],M=u[f];c=-1;const h=[];for(;++c<s;){const m=x[c]||"";let y="",C="";if(t.alignDelimiters!==!1){const _=a[c]-(M[c]||0),v=l[c];v===114?y=" ".repeat(_):v===99?_%2?(y=" ".repeat(_/2+.5),C=" ".repeat(_/2-.5)):(y=" ".repeat(_/2),C=y):C=" ".repeat(_)}t.delimiterStart!==!1&&!c&&h.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&m==="")&&(t.delimiterStart!==!1||c)&&h.push(" "),t.alignDelimiters!==!1&&h.push(y),h.push(m),t.alignDelimiters!==!1&&h.push(C),t.padding!==!1&&h.push(" "),(t.delimiterEnd!==!1||c!==s-1)&&h.push("|")}g.push(t.delimiterEnd===!1?h.join("").replace(/ +$/,""):h.join(""))}return g.join(`
`)}function Wx(n){return n==null?"":String(n)}function jf(n){const e=typeof n=="string"?n.codePointAt(0):0;return e===67||e===99?99:e===76||e===108?108:e===82||e===114?114:0}function qx(){return{enter:{table:Qx,tableData:$f,tableHeader:$f,tableRow:Gx},exit:{codeText:Xx,table:Yx,tableData:tu,tableHeader:tu,tableRow:tu}}}function Qx(n){const e=n._align;this.enter({type:"table",align:e.map(function(t){return t==="none"?null:t}),children:[]},n),this.data.inTable=!0}function Yx(n){this.exit(n),this.data.inTable=void 0}function Gx(n){this.enter({type:"tableRow",children:[]},n)}function tu(n){this.exit(n)}function $f(n){this.enter({type:"tableCell",children:[]},n)}function Xx(n){let e=this.resume();this.data.inTable&&(e=e.replace(/\\([\\|])/g,Kx));const t=this.stack[this.stack.length-1];t.type,t.value=e,this.exit(n)}function Kx(n,e){return e==="|"?e:n}function Zx(n){const e=n||{},t=e.tableCellPadding,r=e.tablePipeAlign,i=e.stringLength,l=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:o,tableCell:a,tableRow:u}};function o(d,g,x,M){return s(f(d,x,M),d.align)}function u(d,g,x,M){const h=c(d,x,M),m=s([h]);return m.slice(0,m.indexOf(`
`))}function a(d,g,x,M){const h=x.enter("tableCell"),m=x.enter("phrasing"),y=x.containerPhrasing(d,{...M,before:l,after:l});return m(),h(),y}function s(d,g){return Vx(d,{align:g,alignDelimiters:r,padding:t,stringLength:i})}function f(d,g,x){const M=d.children;let h=-1;const m=[],y=g.enter("table");for(;++h<M.length;)m[h]=c(M[h],g,x);return y(),m}function c(d,g,x){const M=d.children;let h=-1;const m=[],y=g.enter("tableRow");for(;++h<M.length;)m[h]=a(M[h],d,g,x);return y(),m}function p(d,g,x){let M=Es.inlineCode(d,g,x);return x.stack.includes("tableCell")&&(M=M.replace(/\|/g,"\\$&")),M}}function Jx(){return{exit:{taskListCheckValueChecked:Bf,taskListCheckValueUnchecked:Bf,paragraph:ev}}}function nv(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:tv}}}function Bf(n){const e=this.stack[this.stack.length-2];e.type,e.checked=n.type==="taskListCheckValueChecked"}function ev(n){const e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=e.children;let l=-1,o;for(;++l<i.length;){const u=i[l];if(u.type==="paragraph"){o=u;break}}o===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(n)}function tv(n,e,t,r){const i=n.children[0],l=typeof n.checked=="boolean"&&i&&i.type==="paragraph",o="["+(n.checked?"x":" ")+"] ",u=t.createTracker(r);l&&u.move(o);let a=Es.listItem(n,e,t,{...r,...u.current()});return l&&(a=a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,s)),a;function s(f){return f+o}}function rv(){return[dx(),Nx(),Fx(),qx(),Jx()]}function iv(n){return{extensions:[px(),Dx(n),Ox(),Zx(n),nv()]}}function xe(n,e,t,r){const i=n.length;let l=0,o;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(e,t),n.splice(...o);else for(t&&n.splice(e,t);l<r.length;)o=r.slice(l,l+1e4),o.unshift(e,0),n.splice(...o),l+=1e4,e+=1e4}function oe(n,e){return n.length>0?(xe(n,n.length,0,e),n):e}const Hf={}.hasOwnProperty;function fm(n){const e={};let t=-1;for(;++t<n.length;)lv(e,n[t]);return e}function lv(n,e){let t;for(t in e){const i=(Hf.call(n,t)?n[t]:void 0)||(n[t]={}),l=e[t];let o;if(l)for(o in l){Hf.call(i,o)||(i[o]=[]);const u=l[o];ov(i[o],Array.isArray(u)?u:u?[u]:[])}}}function ov(n,e){let t=-1;const r=[];for(;++t<e.length;)(e[t].add==="after"?n:r).push(e[t]);xe(n,0,0,r)}const uv={tokenize:pv,partial:!0},dm={tokenize:hv,partial:!0},pm={tokenize:mv,partial:!0},hm={tokenize:gv,partial:!0},av={tokenize:yv,partial:!0},mm={name:"wwwAutolink",tokenize:fv,previous:ym},gm={name:"protocolAutolink",tokenize:dv,previous:km},We={name:"emailAutolink",tokenize:cv,previous:wm},Le={};function sv(){return{text:Le}}let gt=48;for(;gt<123;)Le[gt]=We,gt++,gt===58?gt=65:gt===91&&(gt=97);Le[43]=We;Le[45]=We;Le[46]=We;Le[95]=We;Le[72]=[We,gm];Le[104]=[We,gm];Le[87]=[We,mm];Le[119]=[We,mm];function cv(n,e,t){const r=this;let i,l;return o;function o(c){return!ya(c)||!wm.call(r,r.previous)||Is(r.events)?t(c):(n.enter("literalAutolink"),n.enter("literalAutolinkEmail"),u(c))}function u(c){return ya(c)?(n.consume(c),u):c===64?(n.consume(c),a):t(c)}function a(c){return c===46?n.check(av,f,s)(c):c===45||c===95||An(c)?(l=!0,n.consume(c),a):f(c)}function s(c){return n.consume(c),i=!0,a}function f(c){return l&&i&&Pn(r.previous)?(n.exit("literalAutolinkEmail"),n.exit("literalAutolink"),e(c)):t(c)}}function fv(n,e,t){const r=this;return i;function i(o){return o!==87&&o!==119||!ym.call(r,r.previous)||Is(r.events)?t(o):(n.enter("literalAutolink"),n.enter("literalAutolinkWww"),n.check(uv,n.attempt(dm,n.attempt(pm,l),t),t)(o))}function l(o){return n.exit("literalAutolinkWww"),n.exit("literalAutolink"),e(o)}}function dv(n,e,t){const r=this;let i="",l=!1;return o;function o(c){return(c===72||c===104)&&km.call(r,r.previous)&&!Is(r.events)?(n.enter("literalAutolink"),n.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),n.consume(c),u):t(c)}function u(c){if(Pn(c)&&i.length<5)return i+=String.fromCodePoint(c),n.consume(c),u;if(c===58){const p=i.toLowerCase();if(p==="http"||p==="https")return n.consume(c),a}return t(c)}function a(c){return c===47?(n.consume(c),l?s:(l=!0,a)):t(c)}function s(c){return c===null||Ol(c)||en(c)||zt(c)||po(c)?t(c):n.attempt(dm,n.attempt(pm,f),t)(c)}function f(c){return n.exit("literalAutolinkHttp"),n.exit("literalAutolink"),e(c)}}function pv(n,e,t){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,n.consume(o),i):o===46&&r===3?(n.consume(o),l):t(o)}function l(o){return o===null?t(o):e(o)}}function hv(n,e,t){let r,i,l;return o;function o(s){return s===46||s===95?n.check(hm,a,u)(s):s===null||en(s)||zt(s)||s!==45&&po(s)?a(s):(l=!0,n.consume(s),o)}function u(s){return s===95?r=!0:(i=r,r=void 0),n.consume(s),o}function a(s){return i||r||!l?t(s):e(s)}}function mv(n,e){let t=0,r=0;return i;function i(o){return o===40?(t++,n.consume(o),i):o===41&&r<t?l(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?n.check(hm,e,l)(o):o===null||en(o)||zt(o)?e(o):(n.consume(o),i)}function l(o){return o===41&&r++,n.consume(o),i}}function gv(n,e,t){return r;function r(u){return u===33||u===34||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===63||u===95||u===126?(n.consume(u),r):u===38?(n.consume(u),l):u===93?(n.consume(u),i):u===60||u===null||en(u)||zt(u)?e(u):t(u)}function i(u){return u===null||u===40||u===91||en(u)||zt(u)?e(u):r(u)}function l(u){return Pn(u)?o(u):t(u)}function o(u){return u===59?(n.consume(u),r):Pn(u)?(n.consume(u),o):t(u)}}function yv(n,e,t){return r;function r(l){return n.consume(l),i}function i(l){return An(l)?t(l):e(l)}}function ym(n){return n===null||n===40||n===42||n===95||n===91||n===93||n===126||en(n)}function km(n){return!Pn(n)}function wm(n){return!(n===47||ya(n))}function ya(n){return n===43||n===45||n===46||n===95||An(n)}function Is(n){let e=n.length,t=!1;for(;e--;){const r=n[e][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return n.length>0&&!t&&(n[n.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}function gr(n){const e=[];let t=-1,r=0,i=0;for(;++t<n.length;){const l=n.charCodeAt(t);let o="";if(l===37&&An(n.charCodeAt(t+1))&&An(n.charCodeAt(t+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(o=String.fromCharCode(l));else if(l>55295&&l<57344){const u=n.charCodeAt(t+1);l<56320&&u>56319&&u<57344?(o=String.fromCharCode(l,u),i=1):o="�"}else o=String.fromCharCode(l);o&&(e.push(n.slice(r,t),encodeURIComponent(o)),r=t+i+1,o=""),i&&(t+=i,i=0)}return e.join("")+n.slice(r)}function ho(n,e,t){const r=[];let i=-1;for(;++i<n.length;){const l=n[i].resolveAll;l&&!r.includes(l)&&(e=l(e,t),r.push(l))}return e}const ka={name:"attention",resolveAll:kv,tokenize:wv};function kv(n,e){let t=-1,r;for(;++t<n.length;)if(n[t][0]==="enter"&&n[t][1].type==="attentionSequence"&&n[t][1]._close){let i=t;for(;i--;)if(n[i][0]==="exit"&&n[i][1].type==="attentionSequence"&&n[i][1]._open&&e.sliceSerialize(n[i][1]).charCodeAt(0)===e.sliceSerialize(n[t][1]).charCodeAt(0)){if((n[i][1]._close||n[t][1]._open)&&(n[t][1].end.offset-n[t][1].start.offset)%3&&!((n[i][1].end.offset-n[i][1].start.offset+n[t][1].end.offset-n[t][1].start.offset)%3))continue;const l=n[i][1].end.offset-n[i][1].start.offset>1&&n[t][1].end.offset-n[t][1].start.offset>1?2:1,o={...n[i][1].end},u={...n[t][1].start};Uf(o,-l),Uf(u,l);const a={type:l>1?"strongSequence":"emphasisSequence",start:o,end:{...n[i][1].end}},s={type:l>1?"strongSequence":"emphasisSequence",start:{...n[t][1].start},end:u},f={type:l>1?"strongText":"emphasisText",start:{...n[i][1].end},end:{...n[t][1].start}},c={type:l>1?"strong":"emphasis",start:{...a.start},end:{...s.end}};n[i][1].end={...a.start},n[t][1].start={...s.end},r=[],n[i][1].end.offset-n[i][1].start.offset&&(r=oe(r,[["enter",n[i][1],e],["exit",n[i][1],e]])),r=oe(r,[["enter",c,e],["enter",a,e],["exit",a,e],["enter",f,e]]),r=oe(r,ho(e.parser.constructs.insideSpan.null,n.slice(i+1,t),e)),r=oe(r,[["exit",f,e],["enter",s,e],["exit",s,e],["exit",c,e]]);let p=0;n[t][1].end.offset-n[t][1].start.offset&&(p=2,r=oe(r,[["enter",n[t][1],e],["exit",n[t][1],e]])),xe(n,i-1,t-i+3,r),t=i+r.length-p-2;break}}for(t=-1;++t<n.length;)n[t][1].type==="attentionSequence"&&(n[t][1].type="data");return n}function wv(n,e){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=ze(r);let l;return o;function o(a){return l=a,n.enter("attentionSequence"),u(a)}function u(a){if(a===l)return n.consume(a),u;const s=n.exit("attentionSequence"),f=ze(a),c=!f||f===2&&i||t.includes(a)&&a!==42&&a!==95,p=!i||i===2&&f||t.includes(r)&&r!==42&&r!==95;return s._open=!!(l===42?c:c&&(i||!p)),s._close=!!(l===42?p:p&&(f||!c)),e(a)}}function Uf(n,e){n.column+=e,n.offset+=e,n._bufferIndex+=e}const xv={name:"autolink",tokenize:vv};function vv(n,e,t){let r=0;return i;function i(d){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(d),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),l}function l(d){return Pn(d)?(n.consume(d),o):d===64?t(d):s(d)}function o(d){return d===43||d===45||d===46||An(d)?(r=1,u(d)):s(d)}function u(d){return d===58?(n.consume(d),r=0,a):(d===43||d===45||d===46||An(d))&&r++<32?(n.consume(d),u):(r=0,s(d))}function a(d){return d===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(d),n.exit("autolinkMarker"),n.exit("autolink"),e):d===null||d===32||d===60||Ol(d)?t(d):(n.consume(d),a)}function s(d){return d===64?(n.consume(d),f):dw(d)?(n.consume(d),s):t(d)}function f(d){return An(d)?c(d):t(d)}function c(d){return d===46?(n.consume(d),r=0,f):d===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(d),n.exit("autolinkMarker"),n.exit("autolink"),e):p(d)}function p(d){if((d===45||An(d))&&r++<63){const g=d===45?p:c;return n.consume(d),g}return t(d)}}function K(n,e,t,r){const i=r?r-1:1/0;let l=0;return o;function o(a){return V(a)?(n.enter(t),u(a)):e(a)}function u(a){return V(a)&&l++<i?(n.consume(a),u):(n.exit(t),e(a))}}function xm(n,e,t,r,i,l){let o=0;return u;function u(f){return V(f)?(n.enter(r),a(f)):s(f)}function a(f){return V(f)&&o<l?(n.consume(f),o++,a):(n.exit(r),s(f))}function s(f){return o>=i?e(f):t(f)}}const Si={partial:!0,tokenize:Sv};function Sv(n,e,t){return r;function r(l){return V(l)?K(n,i,"linePrefix")(l):i(l)}function i(l){return l===null||O(l)?e(l):t(l)}}const vm={continuation:{tokenize:_v},exit:Ev,name:"blockQuote",tokenize:Cv};function Cv(n,e,t){const r=this;return i;function i(o){if(o===62){const u=r.containerState;return u.open||(n.enter("blockQuote",{_container:!0}),u.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(o),n.exit("blockQuoteMarker"),l}return t(o)}function l(o){return V(o)?(n.enter("blockQuotePrefixWhitespace"),n.consume(o),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),e):(n.exit("blockQuotePrefix"),e(o))}}function _v(n,e,t){const r=this;return i;function i(o){return V(o)?K(n,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):l(o)}function l(o){return n.attempt(vm,e,t)(o)}}function Ev(n){n.exit("blockQuote")}const Sm={name:"characterEscape",tokenize:Mv};function Mv(n,e,t){return r;function r(l){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(l),n.exit("escapeMarker"),i}function i(l){return Jh(l)?(n.enter("characterEscapeValue"),n.consume(l),n.exit("characterEscapeValue"),n.exit("characterEscape"),e):t(l)}}const Cm={name:"characterReference",tokenize:Tv};function Tv(n,e,t){const r=this;let i=0,l,o;return u;function u(c){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(c),n.exit("characterReferenceMarker"),a}function a(c){return c===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(c),n.exit("characterReferenceMarkerNumeric"),s):(n.enter("characterReferenceValue"),l=31,o=An,f(c))}function s(c){return c===88||c===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(c),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),l=6,o=pw,f):(n.enter("characterReferenceValue"),l=7,o=ca,f(c))}function f(c){if(c===59&&i){const p=n.exit("characterReferenceValue");return o===An&&!Ms(r.sliceSerialize(p))?t(c):(n.enter("characterReferenceMarker"),n.consume(c),n.exit("characterReferenceMarker"),n.exit("characterReference"),e)}return o(c)&&i++<l?(n.consume(c),f):t(c)}}const wa={partial:!0,tokenize:Pv};function Pv(n,e,t){const r=this;return i;function i(o){return o===null?t(o):(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),l)}function l(o){return r.parser.lazy[r.now().line]?t(o):e(o)}}const Vf={concrete:!0,name:"codeFenced",tokenize:Av};function Av(n,e,t){const r=this,i={partial:!0,tokenize:_};let l=0,o=0,u;return a;function a(v){return s(v)}function s(v){const T=r.events[r.events.length-1];return l=T&&T[1].type==="linePrefix"?T[2].sliceSerialize(T[1],!0).length:0,u=v,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),f(v)}function f(v){return v===u?(o++,n.consume(v),f):o<3?t(v):(n.exit("codeFencedFenceSequence"),V(v)?K(n,c,"whitespace")(v):c(v))}function c(v){return v===null||O(v)?(n.exit("codeFencedFence"),r.interrupt?e(v):n.check(wa,x,C)(v)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),p(v))}function p(v){return v===null||O(v)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),c(v)):V(v)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),K(n,d,"whitespace")(v)):v===96&&v===u?t(v):(n.consume(v),p)}function d(v){return v===null||O(v)?c(v):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),g(v))}function g(v){return v===null||O(v)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),c(v)):v===96&&v===u?t(v):(n.consume(v),g)}function x(v){return n.attempt(i,C,M)(v)}function M(v){return n.enter("lineEnding"),n.consume(v),n.exit("lineEnding"),h}function h(v){return l>0&&V(v)?K(n,m,"linePrefix",l+1)(v):m(v)}function m(v){return v===null||O(v)?n.check(wa,x,C)(v):(n.enter("codeFlowValue"),y(v))}function y(v){return v===null||O(v)?(n.exit("codeFlowValue"),m(v)):(n.consume(v),y)}function C(v){return n.exit("codeFenced"),e(v)}function _(v,T,A){let B=0;return S;function S(Q){return v.enter("lineEnding"),v.consume(Q),v.exit("lineEnding"),L}function L(Q){return v.enter("codeFencedFence"),V(Q)?K(v,R,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Q):R(Q)}function R(Q){return Q===u?(v.enter("codeFencedFenceSequence"),Y(Q)):A(Q)}function Y(Q){return Q===u?(B++,v.consume(Q),Y):B>=o?(v.exit("codeFencedFenceSequence"),V(Q)?K(v,tn,"whitespace")(Q):tn(Q)):A(Q)}function tn(Q){return Q===null||O(Q)?(v.exit("codeFencedFence"),T(Q)):A(Q)}}}const ru={name:"codeIndented",tokenize:zv},Iv={partial:!0,tokenize:Lv};function zv(n,e,t){return r;function r(u){return n.enter("codeIndented"),xm(n,i,t,"linePrefix",4,4)(u)}function i(u){return u===null?o(u):O(u)?n.attempt(Iv,i,o)(u):(n.enter("codeFlowValue"),l(u))}function l(u){return u===null||O(u)?(n.exit("codeFlowValue"),i(u)):(n.consume(u),l)}function o(u){return n.exit("codeIndented"),e(u)}}function Lv(n,e,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):O(o)?(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),i):xm(n,e,l,"linePrefix",4,4)(o)}function l(o){return O(o)?i(o):t(o)}}const Nv={name:"codeText",previous:bv,resolve:Dv,tokenize:Rv};function Dv(n){let e=n.length-4,t=3,r,i;if((n[t][1].type==="lineEnding"||n[t][1].type==="space")&&(n[e][1].type==="lineEnding"||n[e][1].type==="space")){for(r=t;++r<e;)if(n[r][1].type==="codeTextData"){n[t][1].type="codeTextPadding",n[e][1].type="codeTextPadding",t+=2,e-=2;break}}for(r=t-1,e++;++r<=e;)i===void 0?r!==e&&n[r][1].type!=="lineEnding"&&(i=r):(r===e||n[r][1].type==="lineEnding")&&(n[i][1].type="codeTextData",r!==i+2&&(n[i][1].end=n[r-1][1].end,n.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return n}function bv(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Rv(n,e,t){let r=0,i,l;return o;function o(c){return n.enter("codeText"),n.enter("codeTextSequence"),u(c)}function u(c){return c===96?(n.consume(c),r++,u):(n.exit("codeTextSequence"),a(c))}function a(c){return c===null?t(c):c===32?(n.enter("space"),n.consume(c),n.exit("space"),a):c===96?(l=n.enter("codeTextSequence"),i=0,f(c)):O(c)?(n.enter("lineEnding"),n.consume(c),n.exit("lineEnding"),a):(n.enter("codeTextData"),s(c))}function s(c){return c===null||c===32||c===96||O(c)?(n.exit("codeTextData"),a(c)):(n.consume(c),s)}function f(c){return c===96?(n.consume(c),i++,f):i===r?(n.exit("codeTextSequence"),n.exit("codeText"),e(c)):(l.type="codeTextData",s(c))}}class Fv{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(e,t,r){const i=t||0;this.setCursor(Math.trunc(e));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&zr(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),zr(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),zr(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);zr(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);zr(this.left,t.reverse())}}}function zr(n,e){let t=0;if(e.length<1e4)n.push(...e);else for(;t<e.length;)n.push(...e.slice(t,t+1e4)),t+=1e4}function _m(n){const e={};let t=-1,r,i,l,o,u,a,s;const f=new Fv(n);for(;++t<f.length;){for(;t in e;)t=e[t];if(r=f.get(t),t&&r[1].type==="chunkFlow"&&f.get(t-1)[1].type==="listItemPrefix"&&(a=r[1]._tokenizer.events,l=0,l<a.length&&a[l][1].type==="lineEndingBlank"&&(l+=2),l<a.length&&a[l][1].type==="content"))for(;++l<a.length&&a[l][1].type!=="content";)a[l][1].type==="chunkText"&&(a[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,Ov(f,t)),t=e[t],s=!0);else if(r[1]._container){for(l=t,i=void 0;l--;)if(o=f.get(l),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=l);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},u=f.slice(i,t),u.unshift(r),f.splice(i,t-i+1,u))}}return xe(n,0,Number.POSITIVE_INFINITY,f.slice(0)),!s}function Ov(n,e){const t=n.get(e)[1],r=n.get(e)[2];let i=e-1;const l=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const u=o.events,a=[],s={};let f,c,p=-1,d=t,g=0,x=0;const M=[x];for(;d;){for(;n.get(++i)[1]!==d;);l.push(i),d._tokenizer||(f=r.sliceStream(d),d.next||f.push(null),c&&o.defineSkip(d.start),d._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(f),d._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=d,d=d.next}for(d=t;++p<u.length;)u[p][0]==="exit"&&u[p-1][0]==="enter"&&u[p][1].type===u[p-1][1].type&&u[p][1].start.line!==u[p][1].end.line&&(x=p+1,M.push(x),d._tokenizer=void 0,d.previous=void 0,d=d.next);for(o.events=[],d?(d._tokenizer=void 0,d.previous=void 0):M.pop(),p=M.length;p--;){const h=u.slice(M[p],M[p+1]),m=l.pop();a.push([m,m+h.length-1]),n.splice(m,2,h)}for(a.reverse(),p=-1;++p<a.length;)s[g+a[p][0]]=g+a[p][1],g+=a[p][1]-a[p][0]-1;return s}const jv={resolve:Bv,tokenize:Hv},$v={partial:!0,tokenize:Uv};function Bv(n){return _m(n),n}function Hv(n,e){let t;return r;function r(u){return n.enter("content"),t=n.enter("chunkContent",{contentType:"content"}),i(u)}function i(u){return u===null?l(u):O(u)?n.check($v,o,l)(u):(n.consume(u),i)}function l(u){return n.exit("chunkContent"),n.exit("content"),e(u)}function o(u){return n.consume(u),n.exit("chunkContent"),t.next=n.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function Uv(n,e,t){const r=this;return i;function i(o){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),K(n,l,"linePrefix")}function l(o){if(o===null||O(o))return t(o);const u=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?e(o):n.interrupt(r.parser.constructs.flow,t,e)(o)}}function Em(n,e,t,r,i,l,o,u,a){const s=a||Number.POSITIVE_INFINITY;let f=0;return c;function c(h){return h===60?(n.enter(r),n.enter(i),n.enter(l),n.consume(h),n.exit(l),p):h===null||h===32||h===41||Ol(h)?t(h):(n.enter(r),n.enter(o),n.enter(u),n.enter("chunkString",{contentType:"string"}),x(h))}function p(h){return h===62?(n.enter(l),n.consume(h),n.exit(l),n.exit(i),n.exit(r),e):(n.enter(u),n.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===62?(n.exit("chunkString"),n.exit(u),p(h)):h===null||h===60||O(h)?t(h):(n.consume(h),h===92?g:d)}function g(h){return h===60||h===62||h===92?(n.consume(h),d):d(h)}function x(h){return!f&&(h===null||h===41||en(h))?(n.exit("chunkString"),n.exit(u),n.exit(o),n.exit(r),e(h)):f<s&&h===40?(n.consume(h),f++,x):h===41?(n.consume(h),f--,x):h===null||h===32||h===40||Ol(h)?t(h):(n.consume(h),h===92?M:x)}function M(h){return h===40||h===41||h===92?(n.consume(h),x):x(h)}}function Mm(n,e,t,r,i,l){const o=this;let u=0,a;return s;function s(d){return n.enter(r),n.enter(i),n.consume(d),n.exit(i),n.enter(l),f}function f(d){return u>999||d===null||d===91||d===93&&!a||d===94&&!u&&"_hiddenFootnoteSupport"in o.parser.constructs?t(d):d===93?(n.exit(l),n.enter(i),n.consume(d),n.exit(i),n.exit(r),e):O(d)?(n.enter("lineEnding"),n.consume(d),n.exit("lineEnding"),f):(n.enter("chunkString",{contentType:"string"}),c(d))}function c(d){return d===null||d===91||d===93||O(d)||u++>999?(n.exit("chunkString"),f(d)):(n.consume(d),a||(a=!V(d)),d===92?p:c)}function p(d){return d===91||d===92||d===93?(n.consume(d),u++,c):c(d)}}function Tm(n,e,t,r,i,l){let o;return u;function u(p){return p===34||p===39||p===40?(n.enter(r),n.enter(i),n.consume(p),n.exit(i),o=p===40?41:p,a):t(p)}function a(p){return p===o?(n.enter(i),n.consume(p),n.exit(i),n.exit(r),e):(n.enter(l),s(p))}function s(p){return p===o?(n.exit(l),a(o)):p===null?t(p):O(p)?(n.enter("lineEnding"),n.consume(p),n.exit("lineEnding"),K(n,s,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===o||p===null||O(p)?(n.exit("chunkString"),s(p)):(n.consume(p),p===92?c:f)}function c(p){return p===o||p===92?(n.consume(p),f):f(p)}}function Kr(n,e){let t;return r;function r(i){return O(i)?(n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),t=!0,r):V(i)?K(n,r,t?"linePrefix":"lineSuffix")(i):e(i)}}const Vv={name:"definition",tokenize:qv},Wv={partial:!0,tokenize:Qv};function qv(n,e,t){const r=this;let i;return l;function l(d){return n.enter("definition"),o(d)}function o(d){return Mm.call(r,n,u,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(d)}function u(d){return i=we(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),d===58?(n.enter("definitionMarker"),n.consume(d),n.exit("definitionMarker"),a):t(d)}function a(d){return en(d)?Kr(n,s)(d):s(d)}function s(d){return Em(n,f,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(d)}function f(d){return n.attempt(Wv,c,c)(d)}function c(d){return V(d)?K(n,p,"whitespace")(d):p(d)}function p(d){return d===null||O(d)?(n.exit("definition"),r.parser.defined.push(i),e(d)):t(d)}}function Qv(n,e,t){return r;function r(u){return en(u)?Kr(n,i)(u):t(u)}function i(u){return Tm(n,l,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(u)}function l(u){return V(u)?K(n,o,"whitespace")(u):o(u)}function o(u){return u===null||O(u)?e(u):t(u)}}const Yv={name:"hardBreakEscape",tokenize:Gv};function Gv(n,e,t){return r;function r(l){return n.enter("hardBreakEscape"),n.consume(l),i}function i(l){return O(l)?(n.exit("hardBreakEscape"),e(l)):t(l)}}const Xv={name:"headingAtx",resolve:Kv,tokenize:Zv};function Kv(n,e){let t=n.length-2,r=3;if(n[r][1].type==="whitespace"&&(r+=2),t-2>r&&n[t][1].type==="whitespace"&&(t-=2),n[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&n[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r){const i={type:"atxHeadingText",start:n[r][1].start,end:n[t][1].end},l={type:"chunkText",start:n[r][1].start,end:n[t][1].end,contentType:"text"};xe(n,r,t-r+1,[["enter",i,e],["enter",l,e],["exit",l,e],["exit",i,e]])}return n}function Zv(n,e,t){let r=0;return i;function i(f){return n.enter("atxHeading"),l(f)}function l(f){return n.enter("atxHeadingSequence"),o(f)}function o(f){return f===35&&r++<6?(n.consume(f),o):f===null||en(f)?(n.exit("atxHeadingSequence"),u(f)):t(f)}function u(f){return f===35?(n.enter("atxHeadingSequence"),a(f)):f===null||O(f)?(n.exit("atxHeading"),e(f)):V(f)?K(n,u,"whitespace")(f):(n.enter("atxHeadingText"),s(f))}function a(f){return f===35?(n.consume(f),a):(n.exit("atxHeadingSequence"),u(f))}function s(f){return f===null||f===35||en(f)?(n.exit("atxHeadingText"),u(f)):(n.consume(f),s)}}const Jv={concrete:!0,name:"htmlFlow",resolveTo:e2,tokenize:t2},n2={partial:!0,tokenize:r2};function e2(n){let e=n.length;for(;e--&&!(n[e][0]==="enter"&&n[e][1].type==="htmlFlow"););return e>1&&n[e-2][1].type==="linePrefix"&&(n[e][1].start=n[e-2][1].start,n[e+1][1].start=n[e-2][1].start,n.splice(e-2,2)),n}function t2(n,e,t){const r=this;let i,l,o,u,a;return s;function s(w){return f(w)}function f(w){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(w),c}function c(w){return w===33?(n.consume(w),p):w===47?(n.consume(w),l=!0,x):w===63?(n.consume(w),i=3,r.interrupt?e:k):Pn(w)?(n.consume(w),o=String.fromCharCode(w),M):t(w)}function p(w){return w===45?(n.consume(w),i=2,d):w===91?(n.consume(w),i=5,u=0,g):Pn(w)?(n.consume(w),i=4,r.interrupt?e:k):t(w)}function d(w){return w===45?(n.consume(w),r.interrupt?e:k):t(w)}function g(w){const wn="CDATA[";return w===wn.charCodeAt(u++)?(n.consume(w),u===wn.length?r.interrupt?e:R:g):t(w)}function x(w){return Pn(w)?(n.consume(w),o=String.fromCharCode(w),M):t(w)}function M(w){if(w===null||w===47||w===62||en(w)){const wn=w===47,Se=o.toLowerCase();return!wn&&!l&&fa.includes(Se)?(i=1,r.interrupt?e(w):R(w)):nm.includes(o.toLowerCase())?(i=6,wn?(n.consume(w),h):r.interrupt?e(w):R(w)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(w):l?m(w):y(w))}return w===45||An(w)?(n.consume(w),o+=String.fromCharCode(w),M):t(w)}function h(w){return w===62?(n.consume(w),r.interrupt?e:R):t(w)}function m(w){return V(w)?(n.consume(w),m):S(w)}function y(w){return w===47?(n.consume(w),S):w===58||w===95||Pn(w)?(n.consume(w),C):V(w)?(n.consume(w),y):S(w)}function C(w){return w===45||w===46||w===58||w===95||An(w)?(n.consume(w),C):_(w)}function _(w){return w===61?(n.consume(w),v):V(w)?(n.consume(w),_):y(w)}function v(w){return w===null||w===60||w===61||w===62||w===96?t(w):w===34||w===39?(n.consume(w),a=w,T):V(w)?(n.consume(w),v):A(w)}function T(w){return w===a?(n.consume(w),a=null,B):w===null||O(w)?t(w):(n.consume(w),T)}function A(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||en(w)?_(w):(n.consume(w),A)}function B(w){return w===47||w===62||V(w)?y(w):t(w)}function S(w){return w===62?(n.consume(w),L):t(w)}function L(w){return w===null||O(w)?R(w):V(w)?(n.consume(w),L):t(w)}function R(w){return w===45&&i===2?(n.consume(w),gn):w===60&&i===1?(n.consume(w),hn):w===62&&i===4?(n.consume(w),G):w===63&&i===3?(n.consume(w),k):w===93&&i===5?(n.consume(w),F):O(w)&&(i===6||i===7)?(n.exit("htmlFlowData"),n.check(n2,J,Y)(w)):w===null||O(w)?(n.exit("htmlFlowData"),Y(w)):(n.consume(w),R)}function Y(w){return n.check(wa,tn,J)(w)}function tn(w){return n.enter("lineEnding"),n.consume(w),n.exit("lineEnding"),Q}function Q(w){return w===null||O(w)?Y(w):(n.enter("htmlFlowData"),R(w))}function gn(w){return w===45?(n.consume(w),k):R(w)}function hn(w){return w===47?(n.consume(w),o="",N):R(w)}function N(w){if(w===62){const wn=o.toLowerCase();return fa.includes(wn)?(n.consume(w),G):R(w)}return Pn(w)&&o.length<8?(n.consume(w),o+=String.fromCharCode(w),N):R(w)}function F(w){return w===93?(n.consume(w),k):R(w)}function k(w){return w===62?(n.consume(w),G):w===45&&i===2?(n.consume(w),k):R(w)}function G(w){return w===null||O(w)?(n.exit("htmlFlowData"),J(w)):(n.consume(w),G)}function J(w){return n.exit("htmlFlow"),e(w)}}function r2(n,e,t){return r;function r(i){return n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),n.attempt(Si,e,t)}}const i2={name:"htmlText",tokenize:l2};function l2(n,e,t){const r=this;let i,l,o;return u;function u(k){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(k),a}function a(k){return k===33?(n.consume(k),s):k===47?(n.consume(k),_):k===63?(n.consume(k),y):Pn(k)?(n.consume(k),A):t(k)}function s(k){return k===45?(n.consume(k),f):k===91?(n.consume(k),l=0,g):Pn(k)?(n.consume(k),m):t(k)}function f(k){return k===45?(n.consume(k),d):t(k)}function c(k){return k===null?t(k):k===45?(n.consume(k),p):O(k)?(o=c,hn(k)):(n.consume(k),c)}function p(k){return k===45?(n.consume(k),d):c(k)}function d(k){return k===62?gn(k):k===45?p(k):c(k)}function g(k){const G="CDATA[";return k===G.charCodeAt(l++)?(n.consume(k),l===G.length?x:g):t(k)}function x(k){return k===null?t(k):k===93?(n.consume(k),M):O(k)?(o=x,hn(k)):(n.consume(k),x)}function M(k){return k===93?(n.consume(k),h):x(k)}function h(k){return k===62?gn(k):k===93?(n.consume(k),h):x(k)}function m(k){return k===null||k===62?gn(k):O(k)?(o=m,hn(k)):(n.consume(k),m)}function y(k){return k===null?t(k):k===63?(n.consume(k),C):O(k)?(o=y,hn(k)):(n.consume(k),y)}function C(k){return k===62?gn(k):y(k)}function _(k){return Pn(k)?(n.consume(k),v):t(k)}function v(k){return k===45||An(k)?(n.consume(k),v):T(k)}function T(k){return O(k)?(o=T,hn(k)):V(k)?(n.consume(k),T):gn(k)}function A(k){return k===45||An(k)?(n.consume(k),A):k===47||k===62||en(k)?B(k):t(k)}function B(k){return k===47?(n.consume(k),gn):k===58||k===95||Pn(k)?(n.consume(k),S):O(k)?(o=B,hn(k)):V(k)?(n.consume(k),B):gn(k)}function S(k){return k===45||k===46||k===58||k===95||An(k)?(n.consume(k),S):L(k)}function L(k){return k===61?(n.consume(k),R):O(k)?(o=L,hn(k)):V(k)?(n.consume(k),L):B(k)}function R(k){return k===null||k===60||k===61||k===62||k===96?t(k):k===34||k===39?(n.consume(k),i=k,Y):O(k)?(o=R,hn(k)):V(k)?(n.consume(k),R):(n.consume(k),tn)}function Y(k){return k===i?(n.consume(k),i=void 0,Q):k===null?t(k):O(k)?(o=Y,hn(k)):(n.consume(k),Y)}function tn(k){return k===null||k===34||k===39||k===60||k===61||k===96?t(k):k===47||k===62||en(k)?B(k):(n.consume(k),tn)}function Q(k){return k===47||k===62||en(k)?B(k):t(k)}function gn(k){return k===62?(n.consume(k),n.exit("htmlTextData"),n.exit("htmlText"),e):t(k)}function hn(k){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(k),n.exit("lineEnding"),N}function N(k){return V(k)?K(n,F,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):F(k)}function F(k){return n.enter("htmlTextData"),o(k)}}const zs={name:"labelEnd",resolveAll:s2,resolveTo:c2,tokenize:f2},o2={tokenize:d2},u2={tokenize:p2},a2={tokenize:h2};function s2(n){let e=-1;const t=[];for(;++e<n.length;){const r=n[e][1];if(t.push(n[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",e+=i}}return n.length!==t.length&&xe(n,0,n.length,t),n}function c2(n,e){let t=n.length,r=0,i,l,o;for(;t--;){const f=n[t][1];if(i){if(f.type==="link"||f.type==="labelLink"&&f._inactive)break;n[t][0]==="enter"&&f.type==="labelLink"&&(f._inactive=!0)}else if(l){if(n[t][0]==="enter"&&(f.type==="labelImage"||f.type==="labelLink")&&!f._balanced&&(i=t,f.type!=="labelLink")){r=2;break}}else f.type==="labelEnd"&&(l=t)}const u={type:n[i][1].type==="labelLink"?"link":"image",start:{...n[i][1].start},end:{...n[n.length-1][1].end}},a={type:"label",start:{...n[i][1].start},end:{...n[l][1].end}},s={type:"labelText",start:{...n[i+r+2][1].end},end:{...n[l-2][1].start}};return o=[["enter",u,e],["enter",a,e]],o=oe(o,n.slice(i+1,i+r+3)),o=oe(o,[["enter",s,e]]),o=oe(o,ho(e.parser.constructs.insideSpan.null,n.slice(i+r+4,l-3),e)),o=oe(o,[["exit",s,e],n[l-2],n[l-1],["exit",a,e]]),o=oe(o,n.slice(l+1)),o=oe(o,[["exit",u,e]]),xe(n,i,n.length,o),n}function f2(n,e,t){const r=this,i=r._labelStarts;let l,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();l=i[i.length-1]}return u;function u(p){return l?l._inactive?c(p):(o=r.parser.defined.includes(we(r.sliceSerialize({start:l.end,end:r.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(p),n.exit("labelMarker"),n.exit("labelEnd"),a):t(p)}function a(p){return p===40?n.attempt(o2,f,o?f:c)(p):p===91?n.attempt(u2,f,o?s:c)(p):o?f(p):c(p)}function s(p){return n.attempt(a2,f,c)(p)}function f(p){return i.pop(),e(p)}function c(p){return l._balanced=!0,t(p)}}function d2(n,e,t){return r;function r(c){return n.enter("resource"),n.enter("resourceMarker"),n.consume(c),n.exit("resourceMarker"),i}function i(c){return en(c)?Kr(n,l)(c):l(c)}function l(c){return c===41?f(c):Em(n,o,u,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return en(c)?Kr(n,a)(c):f(c)}function u(c){return t(c)}function a(c){return c===34||c===39||c===40?Tm(n,s,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function s(c){return en(c)?Kr(n,f)(c):f(c)}function f(c){return c===41?(n.enter("resourceMarker"),n.consume(c),n.exit("resourceMarker"),n.exit("resource"),e):t(c)}}function p2(n,e,t){const r=this;return i;function i(u){return Mm.call(r,n,l,o,"reference","referenceMarker","referenceString")(u)}function l(u){return r.parser.defined.includes(we(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(u):t(u)}function o(u){return t(u)}}function h2(n,e,t){return r;function r(l){return n.enter("reference"),n.enter("referenceMarker"),n.consume(l),n.exit("referenceMarker"),i}function i(l){return l===93?(n.enter("referenceMarker"),n.consume(l),n.exit("referenceMarker"),n.exit("reference"),e):t(l)}}const m2={name:"labelStartImage",resolveAll:zs.resolveAll,tokenize:g2};function g2(n,e,t){const r=this;let i;return l;function l(a){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(a),n.exit("labelImageMarker"),o}function o(a){return a===91?(n.enter("labelMarker"),n.consume(a),n.exit("labelMarker"),i=n.exit("labelImage"),u):t(a)}function u(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(a))}}const y2={name:"labelStartLink",resolveAll:zs.resolveAll,tokenize:k2};function k2(n,e,t){const r=this;let i;return l;function l(u){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(u),n.exit("labelMarker"),i=n.exit("labelLink"),o}function o(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(u):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(u))}}const iu={name:"lineEnding",tokenize:w2};function w2(n,e){return t;function t(r){return n.enter("lineEnding"),n.consume(r),n.exit("lineEnding"),K(n,e,"linePrefix")}}const dl={name:"thematicBreak",tokenize:x2};function x2(n,e,t){let r=0,i;return l;function l(s){return n.enter("thematicBreak"),o(s)}function o(s){return i=s,u(s)}function u(s){return s===i?(n.enter("thematicBreakSequence"),a(s)):r>=3&&(s===null||O(s))?(n.exit("thematicBreak"),e(s)):t(s)}function a(s){return s===i?(n.consume(s),r++,a):(n.exit("thematicBreakSequence"),V(s)?K(n,u,"whitespace")(s):u(s))}}const Hn={continuation:{tokenize:_2},exit:M2,name:"list",tokenize:C2},v2={partial:!0,tokenize:T2},S2={partial:!0,tokenize:E2};function C2(n,e,t){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return u;function u(d){const g=r.containerState.type||(d===42||d===43||d===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||d===r.containerState.marker:ca(d)){if(r.containerState.type||(r.containerState.type=g,n.enter(g,{_container:!0})),g==="listUnordered")return n.enter("listItemPrefix"),d===42||d===45?n.check(dl,t,s)(d):s(d);if(!r.interrupt||d===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),a(d)}return t(d)}function a(d){return ca(d)&&++o<10?(n.consume(d),a):(!r.interrupt||o<2)&&(r.containerState.marker?d===r.containerState.marker:d===41||d===46)?(n.exit("listItemValue"),s(d)):t(d)}function s(d){return n.enter("listItemMarker"),n.consume(d),n.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||d,n.check(Si,r.interrupt?t:f,n.attempt(v2,p,c))}function f(d){return r.containerState.initialBlankLine=!0,l++,p(d)}function c(d){return V(d)?(n.enter("listItemPrefixWhitespace"),n.consume(d),n.exit("listItemPrefixWhitespace"),p):t(d)}function p(d){return r.containerState.size=l+r.sliceSerialize(n.exit("listItemPrefix"),!0).length,e(d)}}function _2(n,e,t){const r=this;return r.containerState._closeFlow=void 0,n.check(Si,i,l);function i(u){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,K(n,e,"listItemIndent",r.containerState.size+1)(u)}function l(u){return r.containerState.furtherBlankLines||!V(u)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(u)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,n.attempt(S2,e,o)(u))}function o(u){return r.containerState._closeFlow=!0,r.interrupt=void 0,K(n,n.attempt(Hn,e,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u)}}function E2(n,e,t){const r=this;return K(n,i,"listItemIndent",r.containerState.size+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?e(l):t(l)}}function M2(n){n.exit(this.containerState.type)}function T2(n,e,t){const r=this;return K(n,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const o=r.events[r.events.length-1];return!V(l)&&o&&o[1].type==="listItemPrefixWhitespace"?e(l):t(l)}}let Bl=class{constructor(){this.index=new Map,this.map=[]}add(e,t,r){Wf(this,e,t,r,!1)}addBefore(e,t,r){Wf(this,e,t,r,!0)}consume(e){if(this.map.sort(function(l,o){return l[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];r.push(e.slice()),e.length=0;let i=r.pop();for(;i;){for(const l of i)e.push(l);i=r.pop()}this.map.length=0,this.index.clear()}};function Wf(n,e,t,r,i){if(t===0&&r.length===0)return;const l=n.index.get(e);if(l){l[1]+=t,i?(r.push(...l[2]),l[2]=r):l[2].push(...r);return}const o=[e,t,r];n.map.push(o),n.index.set(e,o)}const qf={name:"setextUnderline",resolveTo:P2,tokenize:A2};function P2(n,e){const t=new Bl;let r=n.length,i,l,o;for(;r--;)if(n[r][0]==="enter"){if(n[r][1].type==="content"){i=r;break}n[r][1].type==="paragraph"&&(l=r)}else n[r][1].type==="content"&&t.add(r,1,[]),!o&&n[r][1].type==="definition"&&(o=r);const u={type:"setextHeading",start:{...n[i][1].start},end:{...n[n.length-1][1].end}};return n[l][1].type="setextHeadingText",o?(t.add(l,0,[["enter",u,e]]),t.add(o+1,0,[["exit",n[i][1],e]]),n[i][1].end={...n[o][1].end}):n[i][1]=u,t.add(n.length,0,[["exit",u,e]]),t.consume(n),n}function A2(n,e,t){const r=this;let i;return l;function l(s){let f=r.events.length,c;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){c=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(n.enter("setextHeadingLine"),i=s,o(s)):t(s)}function o(s){return n.enter("setextHeadingLineSequence"),u(s)}function u(s){return s===i?(n.consume(s),u):(n.exit("setextHeadingLineSequence"),V(s)?K(n,a,"lineSuffix")(s):a(s))}function a(s){return s===null||O(s)?(n.exit("setextHeadingLine"),e(s)):t(s)}}const I2={tokenize:O2,partial:!0};function z2(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:b2,continuation:{tokenize:R2},exit:F2}},text:{91:{name:"gfmFootnoteCall",tokenize:D2},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:L2,resolveTo:N2}}}}function L2(n,e,t){const r=this;let i=r.events.length;const l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const a=r.events[i][1];if(a.type==="labelImage"){o=a;break}if(a.type==="gfmFootnoteCall"||a.type==="labelLink"||a.type==="label"||a.type==="image"||a.type==="link")break}return u;function u(a){if(!o||!o._balanced)return t(a);const s=we(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!l.includes(s.slice(1))?t(a):(n.enter("gfmFootnoteCallLabelMarker"),n.consume(a),n.exit("gfmFootnoteCallLabelMarker"),e(a))}}function N2(n,e){let t=n.length;for(;t--;)if(n[t][1].type==="labelImage"&&n[t][0]==="enter"){n[t][1];break}n[t+1][1].type="data",n[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},n[t+3][1].start),end:Object.assign({},n[n.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},n[t+3][1].end),end:Object.assign({},n[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},n[n.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},u=[n[t+1],n[t+2],["enter",r,e],n[t+3],n[t+4],["enter",i,e],["exit",i,e],["enter",l,e],["enter",o,e],["exit",o,e],["exit",l,e],n[n.length-2],n[n.length-1],["exit",r,e]];return n.splice(t,n.length-t+1,...u),n}function D2(n,e,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l=0,o;return u;function u(c){return n.enter("gfmFootnoteCall"),n.enter("gfmFootnoteCallLabelMarker"),n.consume(c),n.exit("gfmFootnoteCallLabelMarker"),a}function a(c){return c!==94?t(c):(n.enter("gfmFootnoteCallMarker"),n.consume(c),n.exit("gfmFootnoteCallMarker"),n.enter("gfmFootnoteCallString"),n.enter("chunkString").contentType="string",s)}function s(c){if(l>999||c===93&&!o||c===null||c===91||en(c))return t(c);if(c===93){n.exit("chunkString");const p=n.exit("gfmFootnoteCallString");return i.includes(we(r.sliceSerialize(p)))?(n.enter("gfmFootnoteCallLabelMarker"),n.consume(c),n.exit("gfmFootnoteCallLabelMarker"),n.exit("gfmFootnoteCall"),e):t(c)}return en(c)||(o=!0),l++,n.consume(c),c===92?f:s}function f(c){return c===91||c===92||c===93?(n.consume(c),l++,s):s(c)}}function b2(n,e,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,o=0,u;return a;function a(g){return n.enter("gfmFootnoteDefinition")._container=!0,n.enter("gfmFootnoteDefinitionLabel"),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(g),n.exit("gfmFootnoteDefinitionLabelMarker"),s}function s(g){return g===94?(n.enter("gfmFootnoteDefinitionMarker"),n.consume(g),n.exit("gfmFootnoteDefinitionMarker"),n.enter("gfmFootnoteDefinitionLabelString"),n.enter("chunkString").contentType="string",f):t(g)}function f(g){if(o>999||g===93&&!u||g===null||g===91||en(g))return t(g);if(g===93){n.exit("chunkString");const x=n.exit("gfmFootnoteDefinitionLabelString");return l=we(r.sliceSerialize(x)),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(g),n.exit("gfmFootnoteDefinitionLabelMarker"),n.exit("gfmFootnoteDefinitionLabel"),p}return en(g)||(u=!0),o++,n.consume(g),g===92?c:f}function c(g){return g===91||g===92||g===93?(n.consume(g),o++,f):f(g)}function p(g){return g===58?(n.enter("definitionMarker"),n.consume(g),n.exit("definitionMarker"),i.includes(l)||i.push(l),K(n,d,"gfmFootnoteDefinitionWhitespace")):t(g)}function d(g){return e(g)}}function R2(n,e,t){return n.check(Si,e,n.attempt(I2,e,t))}function F2(n){n.exit("gfmFootnoteDefinition")}function O2(n,e,t){const r=this;return K(n,i,"gfmFootnoteDefinitionIndent",5);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?e(l):t(l)}}function j2(n){let t=(n||{}).singleTilde;const r={name:"strikethrough",tokenize:l,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,u){let a=-1;for(;++a<o.length;)if(o[a][0]==="enter"&&o[a][1].type==="strikethroughSequenceTemporary"&&o[a][1]._close){let s=a;for(;s--;)if(o[s][0]==="exit"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._open&&o[a][1].end.offset-o[a][1].start.offset===o[s][1].end.offset-o[s][1].start.offset){o[a][1].type="strikethroughSequence",o[s][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},o[s][1].start),end:Object.assign({},o[a][1].end)},c={type:"strikethroughText",start:Object.assign({},o[s][1].end),end:Object.assign({},o[a][1].start)},p=[["enter",f,u],["enter",o[s][1],u],["exit",o[s][1],u],["enter",c,u]],d=u.parser.constructs.insideSpan.null;d&&xe(p,p.length,0,ho(d,o.slice(s+1,a),u)),xe(p,p.length,0,[["exit",c,u],["enter",o[a][1],u],["exit",o[a][1],u],["exit",f,u]]),xe(o,s-1,a-s+3,p),a=s+p.length-2;break}}for(a=-1;++a<o.length;)o[a][1].type==="strikethroughSequenceTemporary"&&(o[a][1].type="data");return o}function l(o,u,a){const s=this.previous,f=this.events;let c=0;return p;function p(g){return s===126&&f[f.length-1][1].type!=="characterEscape"?a(g):(o.enter("strikethroughSequenceTemporary"),d(g))}function d(g){const x=ze(s);if(g===126)return c>1?a(g):(o.consume(g),c++,d);if(c<2&&!t)return a(g);const M=o.exit("strikethroughSequenceTemporary"),h=ze(g);return M._open=!h||h===2&&!!x,M._close=!x||x===2&&!!h,u(g)}}}class $2{constructor(){this.map=[],this.index=new Map}add(e,t,r){B2(this,e,t,r)}consume(e){if(this.map.sort(function(l,o){return l[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];r.push(e.slice()),e.length=0;let i=r.pop();for(;i;){for(const l of i)e.push(l);i=r.pop()}this.map.length=0,this.index.clear()}}function B2(n,e,t,r){if(t===0&&r.length===0)return;const i=n.index.get(e);if(i){i[1]+=t,i[2].push(...r);return}const l=[e,t,r];n.map.push(l),n.index.set(e,l)}function H2(n,e){let t=!1;const r=[];for(;e<n.length;){const i=n[e];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(n[e+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(n[e-1][1].type==="tableDelimiterMarker"){const l=r.length-1;r[l]=r[l]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);e+=1}return r}function U2(){return{flow:{null:{name:"table",tokenize:V2,resolveAll:W2}}}}function V2(n,e,t){const r=this;let i=0,l=0,o;return u;function u(S){let L=r.events.length-1;for(;L>-1;){const{type:tn}=r.events[L][1];if(tn==="lineEnding"||tn==="linePrefix")L--;else break}const R=L>-1?r.events[L][1].type:null,Y=R==="tableHead"||R==="tableRow"?v:a;return Y===v&&r.parser.lazy[r.now().line]?t(S):Y(S)}function a(S){return n.enter("tableHead"),n.enter("tableRow"),s(S)}function s(S){return S===124||(o=!0,l+=1),f(S)}function f(S){return S===null?t(S):O(S)?l>1?(l=0,r.interrupt=!0,n.exit("tableRow"),n.enter("lineEnding"),n.consume(S),n.exit("lineEnding"),d):t(S):V(S)?K(n,f,"whitespace")(S):(l+=1,o&&(o=!1,i+=1),S===124?(n.enter("tableCellDivider"),n.consume(S),n.exit("tableCellDivider"),o=!0,f):(n.enter("data"),c(S)))}function c(S){return S===null||S===124||en(S)?(n.exit("data"),f(S)):(n.consume(S),S===92?p:c)}function p(S){return S===92||S===124?(n.consume(S),c):c(S)}function d(S){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(S):(n.enter("tableDelimiterRow"),o=!1,V(S)?K(n,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):g(S))}function g(S){return S===45||S===58?M(S):S===124?(o=!0,n.enter("tableCellDivider"),n.consume(S),n.exit("tableCellDivider"),x):_(S)}function x(S){return V(S)?K(n,M,"whitespace")(S):M(S)}function M(S){return S===58?(l+=1,o=!0,n.enter("tableDelimiterMarker"),n.consume(S),n.exit("tableDelimiterMarker"),h):S===45?(l+=1,h(S)):S===null||O(S)?C(S):_(S)}function h(S){return S===45?(n.enter("tableDelimiterFiller"),m(S)):_(S)}function m(S){return S===45?(n.consume(S),m):S===58?(o=!0,n.exit("tableDelimiterFiller"),n.enter("tableDelimiterMarker"),n.consume(S),n.exit("tableDelimiterMarker"),y):(n.exit("tableDelimiterFiller"),y(S))}function y(S){return V(S)?K(n,C,"whitespace")(S):C(S)}function C(S){return S===124?g(S):S===null||O(S)?!o||i!==l?_(S):(n.exit("tableDelimiterRow"),n.exit("tableHead"),e(S)):_(S)}function _(S){return t(S)}function v(S){return n.enter("tableRow"),T(S)}function T(S){return S===124?(n.enter("tableCellDivider"),n.consume(S),n.exit("tableCellDivider"),T):S===null||O(S)?(n.exit("tableRow"),e(S)):V(S)?K(n,T,"whitespace")(S):(n.enter("data"),A(S))}function A(S){return S===null||S===124||en(S)?(n.exit("data"),T(S)):(n.consume(S),S===92?B:A)}function B(S){return S===92||S===124?(n.consume(S),A):A(S)}}function W2(n,e){let t=-1,r=!0,i=0,l=[0,0,0,0],o=[0,0,0,0],u=!1,a=0,s,f,c;const p=new $2;for(;++t<n.length;){const d=n[t],g=d[1];d[0]==="enter"?g.type==="tableHead"?(u=!1,a!==0&&(Qf(p,e,a,s,f),f=void 0,a=0),s={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},p.add(t,0,[["enter",s,e]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,c=void 0,l=[0,0,0,0],o=[0,t+1,0,0],u&&(u=!1,f={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},p.add(t,0,[["enter",f,e]])),i=g.type==="tableDelimiterRow"?2:f?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(l[1]!==0&&(o[0]=o[1],c=Vi(p,e,l,i,void 0,c),l=[0,0,0,0]),o[2]=t)):g.type==="tableCellDivider"&&(r?r=!1:(l[1]!==0&&(o[0]=o[1],c=Vi(p,e,l,i,void 0,c)),l=o,o=[l[1],t,0,0])):g.type==="tableHead"?(u=!0,a=t):g.type==="tableRow"||g.type==="tableDelimiterRow"?(a=t,l[1]!==0?(o[0]=o[1],c=Vi(p,e,l,i,t,c)):o[1]!==0&&(c=Vi(p,e,o,i,t,c)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(o[3]=t)}for(a!==0&&Qf(p,e,a,s,f),p.consume(e.events),t=-1;++t<e.events.length;){const d=e.events[t];d[0]==="enter"&&d[1].type==="table"&&(d[1]._align=H2(e.events,t))}return n}function Vi(n,e,t,r,i,l){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",u="tableContent";t[0]!==0&&(l.end=Object.assign({},$t(e.events,t[0])),n.add(t[0],0,[["exit",l,e]]));const a=$t(e.events,t[1]);if(l={type:o,start:Object.assign({},a),end:Object.assign({},a)},n.add(t[1],0,[["enter",l,e]]),t[2]!==0){const s=$t(e.events,t[2]),f=$t(e.events,t[3]),c={type:u,start:Object.assign({},s),end:Object.assign({},f)};if(n.add(t[2],0,[["enter",c,e]]),r!==2){const p=e.events[t[2]],d=e.events[t[3]];if(p[1].end=Object.assign({},d[1].end),p[1].type="chunkText",p[1].contentType="text",t[3]>t[2]+1){const g=t[2]+1,x=t[3]-t[2]-1;n.add(g,x,[])}}n.add(t[3]+1,0,[["exit",c,e]])}return i!==void 0&&(l.end=Object.assign({},$t(e.events,i)),n.add(i,0,[["exit",l,e]]),l=void 0),l}function Qf(n,e,t,r,i){const l=[],o=$t(e.events,t);i&&(i.end=Object.assign({},o),l.push(["exit",i,e])),r.end=Object.assign({},o),l.push(["exit",r,e]),n.add(t+1,0,l)}function $t(n,e){const t=n[e],r=t[0]==="enter"?"start":"end";return t[1][r]}const q2={name:"tasklistCheck",tokenize:Y2};function Q2(){return{text:{91:q2}}}function Y2(n,e,t){const r=this;return i;function i(a){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(a):(n.enter("taskListCheck"),n.enter("taskListCheckMarker"),n.consume(a),n.exit("taskListCheckMarker"),l)}function l(a){return en(a)?(n.enter("taskListCheckValueUnchecked"),n.consume(a),n.exit("taskListCheckValueUnchecked"),o):a===88||a===120?(n.enter("taskListCheckValueChecked"),n.consume(a),n.exit("taskListCheckValueChecked"),o):t(a)}function o(a){return a===93?(n.enter("taskListCheckMarker"),n.consume(a),n.exit("taskListCheckMarker"),n.exit("taskListCheck"),u):t(a)}function u(a){return O(a)?e(a):V(a)?n.check({tokenize:G2},e,t)(a):t(a)}}function G2(n,e,t){return K(n,r,"whitespace");function r(i){return i===null?t(i):e(i)}}function X2(n){return fm([sv(),z2(),j2(n),U2(),Q2()])}const K2={};function Pm(n){const e=this,t=n||K2,r=e.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),l=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(X2(t)),l.push(rv()),o.push(iv(t))}function Z2(n){const e=JSON.parse(JSON.stringify(n)),t=um().use(Pm).use(()=>r=>(ce(r,"listItem",i=>{var l,o,u;if((l=i==null?void 0:i.data)!=null&&l.diff){const a=((o=i==null?void 0:i.data)==null?void 0:o.diff)==="ins"?"{++listItem++}":"{--listItem--}";i.children||(i.children=[]);const s=(u=i.children)==null?void 0:u[0];(s==null?void 0:s.type)==="paragraph"?s.children&&s.children.unshift({type:"text",value:a}):i.children.unshift({type:"paragraph",children:[{type:"text",value:a}]})}}),r)).use($w,{handlers:{ins:(r,i,l,o)=>`{++++
${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}
++++}`,del:(r,i,l,o)=>`{----
${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}
----}`,inlineIns:(r,i,l,o)=>`{++++${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}++++}`,inlineDel:(r,i,l,o)=>`{----${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}----}`}});return t.stringify(t.runSync(e))}function J2(n,e){const t={type:"element",tagName:"blockquote",properties:{},children:n.wrap(n.all(e),!0)};return n.patch(e,t),n.applyData(e,t)}function nS(n,e){const t={type:"element",tagName:"br",properties:{},children:[]};return n.patch(e,t),[n.applyData(e,t),{type:"text",value:`
`}]}function eS(n,e){const t=e.value?e.value+`
`:"",r={},i=e.lang?e.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return e.meta&&(l.data={meta:e.meta}),n.patch(e,l),l=n.applyData(e,l),l={type:"element",tagName:"pre",properties:{},children:[l]},n.patch(e,l),l}function tS(n,e){const t={type:"element",tagName:"del",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function rS(n,e){const t={type:"element",tagName:"em",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function iS(n,e){const t=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",r=String(e.identifier).toUpperCase(),i=gr(r.toLowerCase()),l=n.footnoteOrder.indexOf(r);let o,u=n.footnoteCounts.get(r);u===void 0?(u=0,n.footnoteOrder.push(r),o=n.footnoteOrder.length):o=l+1,u+=1,n.footnoteCounts.set(r,u);const a={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(u>1?"-"+u:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};n.patch(e,a);const s={type:"element",tagName:"sup",properties:{},children:[a]};return n.patch(e,s),n.applyData(e,s)}function lS(n,e){const t={type:"element",tagName:"h"+e.depth,properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function oS(n,e){if(n.options.allowDangerousHtml){const t={type:"raw",value:e.value};return n.patch(e,t),n.applyData(e,t)}}function Am(n,e){const t=e.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+r}];const i=n.all(e),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function uS(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return Am(n,e);const i={src:gr(r.url||""),alt:e.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"img",properties:i,children:[]};return n.patch(e,l),n.applyData(e,l)}function aS(n,e){const t={src:gr(e.url)};e.alt!==null&&e.alt!==void 0&&(t.alt=e.alt),e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"img",properties:t,children:[]};return n.patch(e,r),n.applyData(e,r)}function sS(n,e){const t={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};n.patch(e,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return n.patch(e,r),n.applyData(e,r)}function cS(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return Am(n,e);const i={href:gr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"a",properties:i,children:n.all(e)};return n.patch(e,l),n.applyData(e,l)}function fS(n,e){const t={href:gr(e.url)};e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"a",properties:t,children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function dS(n,e,t){const r=n.all(e),i=t?pS(t):Im(e),l={},o=[];if(typeof e.checked=="boolean"){const f=r[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let u=-1;for(;++u<r.length;){const f=r[u];(i||u!==0||f.type!=="element"||f.tagName!=="p")&&o.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?o.push(...f.children):o.push(f)}const a=r[r.length-1];a&&(i||a.type!=="element"||a.tagName!=="p")&&o.push({type:"text",value:`
`});const s={type:"element",tagName:"li",properties:l,children:o};return n.patch(e,s),n.applyData(e,s)}function pS(n){let e=!1;if(n.type==="list"){e=n.spread||!1;const t=n.children;let r=-1;for(;!e&&++r<t.length;)e=Im(t[r])}return e}function Im(n){const e=n.spread;return e??n.children.length>1}function hS(n,e){const t={},r=n.all(e);let i=-1;for(typeof e.start=="number"&&e.start!==1&&(t.start=e.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const l={type:"element",tagName:e.ordered?"ol":"ul",properties:t,children:n.wrap(r,!0)};return n.patch(e,l),n.applyData(e,l)}function mS(n,e){const t={type:"element",tagName:"p",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function gS(n,e){const t={type:"root",children:n.wrap(n.all(e))};return n.patch(e,t),n.applyData(e,t)}function yS(n,e){const t={type:"element",tagName:"strong",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}const zm=Nm("end"),Lm=Nm("start");function Nm(n){return e;function e(t){const r=t&&t.position&&t.position[n]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function kS(n){const e=Lm(n),t=zm(n);if(e&&t)return{start:e,end:t}}function wS(n,e){const t=n.all(e),r=t.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:n.wrap([r],!0)};n.patch(e.children[0],o),i.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:n.wrap(t,!0)},u=Lm(e.children[1]),a=zm(e.children[e.children.length-1]);u&&a&&(o.position={start:u,end:a}),i.push(o)}const l={type:"element",tagName:"table",properties:{},children:n.wrap(i,!0)};return n.patch(e,l),n.applyData(e,l)}function xS(n,e,t){const r=t?t.children:void 0,l=(r?r.indexOf(e):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,u=o?o.length:e.children.length;let a=-1;const s=[];for(;++a<u;){const c=e.children[a],p={},d=o?o[a]:void 0;d&&(p.align=d);let g={type:"element",tagName:l,properties:p,children:[]};c&&(g.children=n.all(c),n.patch(c,g),g=n.applyData(c,g)),s.push(g)}const f={type:"element",tagName:"tr",properties:{},children:n.wrap(s,!0)};return n.patch(e,f),n.applyData(e,f)}function vS(n,e){const t={type:"element",tagName:"td",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}const Yf=9,Gf=32;function SS(n){const e=String(n),t=/\r?\n|\r/g;let r=t.exec(e),i=0;const l=[];for(;r;)l.push(Xf(e.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(e);return l.push(Xf(e.slice(i),i>0,!1)),l.join("")}function Xf(n,e,t){let r=0,i=n.length;if(e){let l=n.codePointAt(r);for(;l===Yf||l===Gf;)r++,l=n.codePointAt(r)}if(t){let l=n.codePointAt(i-1);for(;l===Yf||l===Gf;)i--,l=n.codePointAt(i-1)}return i>r?n.slice(r,i):""}function CS(n,e){const t={type:"text",value:SS(String(e.value))};return n.patch(e,t),n.applyData(e,t)}function _S(n,e){const t={type:"element",tagName:"hr",properties:{},children:[]};return n.patch(e,t),n.applyData(e,t)}const ES={blockquote:J2,break:nS,code:eS,delete:tS,emphasis:rS,footnoteReference:iS,heading:lS,html:oS,imageReference:uS,image:aS,inlineCode:sS,linkReference:cS,link:fS,listItem:dS,list:hS,paragraph:mS,root:gS,strong:yS,table:wS,tableCell:vS,tableRow:xS,text:CS,thematicBreak:_S,toml:Wi,yaml:Wi,definition:Wi,footnoteDefinition:Wi};function Wi(){}const Dm=-1,mo=0,Zr=1,Hl=2,Ls=3,Ns=4,Ds=5,bs=6,bm=7,Rm=8,{defineProperty:MS}=Object,Fm=typeof self=="object"?self:globalThis,Kf=(n,e)=>{switch(n){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+n)}return new Fm[n](e)},TS=(n,e)=>{const t=(i,l)=>(n.set(l,i),i),r=i=>{if(n.has(i))return n.get(i);const[l,o]=e[i];switch(l){case mo:case Dm:return t(o,i);case Zr:{const u=t([],i);for(const a of o)u.push(r(a));return u}case Hl:{const u=t({},i);for(const[a,s]of o){const f=r(a),c=r(s);f==="__proto__"?MS(u,f,{value:c,configurable:!0,enumerable:!0,writable:!0}):u[f]=c}return u}case Ls:return t(new Date(o),i);case Ns:{const{source:u,flags:a}=o;return t(new RegExp(u,a),i)}case Ds:{const u=t(new Map,i);for(const[a,s]of o)u.set(r(a),r(s));return u}case bs:{const u=t(new Set,i);for(const a of o)u.add(r(a));return u}case bm:{const{name:u,message:a}=o;return t(typeof Fm[u]=="function"?Kf(u,a):new Error(a),i)}case Rm:return t(BigInt(o),i);case"BigInt":return t(Object(BigInt(o)),i);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:u}=new Uint8Array(o);return t(new DataView(u),o)}case"-0":return-0}return t(Kf(l,o),i)};return r},Zf=n=>TS(new Map,n)(0),wt="",{toString:PS}={},{keys:AS,is:IS}=Object,Lr=n=>{const e=typeof n;if(e!=="object"||!n)return[mo,e];const t=PS.call(n).slice(8,-1);switch(t){case"Array":return[Zr,wt];case"Object":return[Hl,wt];case"Date":return[Ls,wt];case"RegExp":return[Ns,wt];case"Map":return[Ds,wt];case"Set":return[bs,wt];case"DataView":return[Zr,t]}return t.includes("Array")?[Zr,t]:n instanceof Error?[bm,n.name||"Error"]:[Hl,t]},qi=([n,e])=>n===mo&&(e==="function"||e==="symbol"),zS=(n,e,t,r)=>{const i=(o,u)=>{const a=r.push(o)-1;return t.set(u,a),a},l=o=>{if(t.has(o))return t.get(o);let[u,a]=Lr(o);switch(u){case mo:{let f=o;switch(a){case"bigint":u=Rm,f=o.toString();break;case"number":if(!o&&IS(o,-0))return r.push(["-0"])-1;break;case"function":case"symbol":if(n)throw new TypeError("unable to serialize "+a);f=null;break;case"undefined":return i([Dm],o)}return i([u,f],o)}case Zr:{if(a){let p=o;return a==="DataView"?p=new Uint8Array(o.buffer):a==="ArrayBuffer"&&(p=new Uint8Array(o)),i([a,[...p]],o)}const f=[],c=i([u,f],o);for(const p of o)f.push(l(p));return c}case Hl:{if(a)switch(a){case"BigInt":return i([a,o.toString()],o);case"Boolean":case"Number":case"String":return i([a,o.valueOf()],o)}if(e&&"toJSON"in o)return l(o.toJSON());const f=[],c=i([u,f],o);for(const p of AS(o))(n||!qi(Lr(o[p])))&&f.push([l(p),l(o[p])]);return c}case Ls:return i([u,isNaN(o.getTime())?wt:o.toISOString()],o);case Ns:{const{source:f,flags:c}=o;return i([u,{source:f,flags:c}],o)}case Ds:{const f=[],c=i([u,f],o);for(const[p,d]of o)(n||!(qi(Lr(p))||qi(Lr(d))))&&f.push([l(p),l(d)]);return c}case bs:{const f=[],c=i([u,f],o);for(const p of o)(n||!qi(Lr(p)))&&f.push(l(p));return c}}const{message:s}=o;return i([u,{name:a,message:s}],o)};return l},Jf=(n,{json:e,lossy:t}={})=>{const r=[];return zS(!(e||t),!!e,new Map,r)(n),r},Ul=typeof structuredClone=="function"?(n,e)=>e&&("json"in e||"lossy"in e)?Zf(Jf(n,e)):structuredClone(n):(n,e)=>Zf(Jf(n,e));function LS(n,e){const t=[{type:"text",value:"↩"}];return e>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),t}function NS(n,e){return"Back to reference "+(n+1)+(e>1?"-"+e:"")}function DS(n){const e=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",t=n.options.footnoteBackContent||LS,r=n.options.footnoteBackLabel||NS,i=n.options.footnoteLabel||"Footnotes",l=n.options.footnoteLabelTagName||"h2",o=n.options.footnoteLabelProperties||{className:["sr-only"]},u=[];let a=-1;for(;++a<n.footnoteOrder.length;){const s=n.footnoteById.get(n.footnoteOrder[a]);if(!s)continue;const f=n.all(s),c=String(s.identifier).toUpperCase(),p=gr(c.toLowerCase());let d=0;const g=[],x=n.footnoteCounts.get(c);for(;x!==void 0&&++d<=x;){g.length>0&&g.push({type:"text",value:" "});let m=typeof t=="string"?t:t(a,d);typeof m=="string"&&(m={type:"text",value:m}),g.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+p+(d>1?"-"+d:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(a,d),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const M=f[f.length-1];if(M&&M.type==="element"&&M.tagName==="p"){const m=M.children[M.children.length-1];m&&m.type==="text"?m.value+=" ":M.children.push({type:"text",value:" "}),M.children.push(...g)}else f.push(...g);const h={type:"element",tagName:"li",properties:{id:e+"fn-"+p},children:n.wrap(f,!0)};n.patch(s,h),u.push(h)}if(u.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...Ul(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:n.wrap(u,!0)},{type:"text",value:`
`}]}}const xa={}.hasOwnProperty,bS={};function RS(n,e){const t=e||bS,r=new Map,i=new Map,l=new Map,o={...ES,...t.handlers},u={all:s,applyData:OS,definitionById:r,footnoteById:i,footnoteCounts:l,footnoteOrder:[],handlers:o,one:a,options:t,patch:FS,wrap:$S};return ce(n,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?r:i,p=String(f.identifier).toUpperCase();c.has(p)||c.set(p,f)}}),u;function a(f,c){const p=f.type,d=u.handlers[p];if(xa.call(u.handlers,p)&&d)return d(u,f,c);if(u.options.passThrough&&u.options.passThrough.includes(p)){if("children"in f){const{children:x,...M}=f,h=Ul(M);return h.children=u.all(f),h}return Ul(f)}return(u.options.unknownHandler||jS)(u,f,c)}function s(f){const c=[];if("children"in f){const p=f.children;let d=-1;for(;++d<p.length;){const g=u.one(p[d],f);if(g){if(d&&p[d-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=nd(g.value)),!Array.isArray(g)&&g.type==="element")){const x=g.children[0];x&&x.type==="text"&&(x.value=nd(x.value))}Array.isArray(g)?c.push(...g):c.push(g)}}}return c}}function FS(n,e){n.position&&(e.position=kS(n))}function OS(n,e){let t=e;if(n&&n.data){const r=n.data.hName,i=n.data.hChildren,l=n.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const o="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:o}}t.type==="element"&&l&&Object.assign(t.properties,Ul(l)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function jS(n,e){const t=e.data||{},r="value"in e&&!(xa.call(t,"hProperties")||xa.call(t,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function $S(n,e){const t=[];let r=-1;for(e&&t.push({type:"text",value:`
`});++r<n.length;)r&&t.push({type:"text",value:`
`}),t.push(n[r]);return e&&n.length>0&&t.push({type:"text",value:`
`}),t}function nd(n){let e=0,t=n.charCodeAt(e);for(;t===9||t===32;)e++,t=n.charCodeAt(e);return n.slice(e)}function BS(n,e){const t=RS(n,e),r=t.one(n,void 0),i=DS(t),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&l.children.push({type:"text",value:`
`},i),l}const HS=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];class Ci{constructor(e,t,r){this.normal=t,this.property=e,r&&(this.space=r)}}Ci.prototype.normal={};Ci.prototype.property={};Ci.prototype.space=void 0;function Om(n,e){const t={},r={};for(const i of n)Object.assign(t,i.property),Object.assign(r,i.normal);return new Ci(t,r,e)}function va(n){return n.toLowerCase()}class Gn{constructor(e,t){this.attribute=t,this.property=e}}Gn.prototype.attribute="";Gn.prototype.booleanish=!1;Gn.prototype.boolean=!1;Gn.prototype.commaOrSpaceSeparated=!1;Gn.prototype.commaSeparated=!1;Gn.prototype.defined=!1;Gn.prototype.mustUseProperty=!1;Gn.prototype.number=!1;Gn.prototype.overloadedBoolean=!1;Gn.prototype.property="";Gn.prototype.spaceSeparated=!1;Gn.prototype.space=void 0;let US=0;const j=Dt(),yn=Dt(),Sa=Dt(),I=Dt(),nn=Dt(),Et=Dt(),Kn=Dt();function Dt(){return 2**++US}const Ca=Object.freeze(Object.defineProperty({__proto__:null,boolean:j,booleanish:yn,commaOrSpaceSeparated:Kn,commaSeparated:Et,number:I,overloadedBoolean:Sa,spaceSeparated:nn},Symbol.toStringTag,{value:"Module"})),lu=Object.keys(Ca);class Rs extends Gn{constructor(e,t,r,i){let l=-1;if(super(e,t),ed(this,"space",i),typeof r=="number")for(;++l<lu.length;){const o=lu[l];ed(this,lu[l],(r&Ca[o])===Ca[o])}}}Rs.prototype.defined=!0;function ed(n,e,t){t&&(n[e]=t)}function yr(n){const e={},t={};for(const[r,i]of Object.entries(n.properties)){const l=new Rs(r,n.transform(n.attributes||{},r),i,n.space);n.mustUseProperty&&n.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),e[r]=l,t[va(r)]=r,t[va(l.attribute)]=r}return new Ci(e,t,n.space)}const jm=yr({properties:{ariaActiveDescendant:null,ariaAtomic:yn,ariaAutoComplete:null,ariaBusy:yn,ariaChecked:yn,ariaColCount:I,ariaColIndex:I,ariaColSpan:I,ariaControls:nn,ariaCurrent:null,ariaDescribedBy:nn,ariaDetails:null,ariaDisabled:yn,ariaDropEffect:nn,ariaErrorMessage:null,ariaExpanded:yn,ariaFlowTo:nn,ariaGrabbed:yn,ariaHasPopup:null,ariaHidden:yn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:nn,ariaLevel:I,ariaLive:null,ariaModal:yn,ariaMultiLine:yn,ariaMultiSelectable:yn,ariaOrientation:null,ariaOwns:nn,ariaPlaceholder:null,ariaPosInSet:I,ariaPressed:yn,ariaReadOnly:yn,ariaRelevant:null,ariaRequired:yn,ariaRoleDescription:nn,ariaRowCount:I,ariaRowIndex:I,ariaRowSpan:I,ariaSelected:yn,ariaSetSize:I,ariaSort:null,ariaValueMax:I,ariaValueMin:I,ariaValueNow:I,ariaValueText:null,role:null},transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function $m(n,e){return e in n?n[e]:e}function Bm(n,e){return $m(n,e.toLowerCase())}const VS=yr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Et,acceptCharset:nn,accessKey:nn,action:null,allow:null,allowFullScreen:j,allowPaymentRequest:j,allowUserMedia:j,alpha:j,alt:null,as:null,async:j,autoCapitalize:null,autoComplete:nn,autoFocus:j,autoPlay:j,blocking:nn,capture:null,charSet:null,checked:j,cite:null,className:nn,closedBy:null,colorSpace:null,cols:I,colSpan:I,command:null,commandFor:null,content:null,contentEditable:yn,controls:j,controlsList:nn,coords:I|Et,crossOrigin:null,data:null,dateTime:null,decoding:null,default:j,defer:j,dir:null,dirName:null,disabled:j,download:Sa,draggable:yn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:j,formTarget:null,headers:nn,height:I,hidden:Sa,high:I,href:null,hrefLang:null,htmlFor:nn,httpEquiv:nn,id:null,imageSizes:null,imageSrcSet:null,inert:j,inputMode:null,integrity:null,is:null,isMap:j,itemId:null,itemProp:nn,itemRef:nn,itemScope:j,itemType:nn,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:j,low:I,manifest:null,max:null,maxLength:I,media:null,method:null,min:null,minLength:I,multiple:j,muted:j,name:null,nonce:null,noModule:j,noValidate:j,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:j,optimum:I,pattern:null,ping:nn,placeholder:null,playsInline:j,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:j,referrerPolicy:null,rel:nn,required:j,reversed:j,rows:I,rowSpan:I,sandbox:nn,scope:null,scoped:j,seamless:j,selected:j,shadowRootClonable:j,shadowRootCustomElementRegistry:j,shadowRootDelegatesFocus:j,shadowRootMode:null,shadowRootSerializable:j,shape:null,size:I,sizes:null,slot:null,span:I,spellCheck:yn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:I,step:null,style:null,tabIndex:I,target:null,title:null,translate:null,type:null,typeMustMatch:j,useMap:null,value:yn,width:I,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:nn,axis:null,background:null,bgColor:null,border:I,borderColor:null,bottomMargin:I,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:j,declare:j,event:null,face:null,frame:null,frameBorder:null,hSpace:I,leftMargin:I,link:null,longDesc:null,lowSrc:null,marginHeight:I,marginWidth:I,noResize:j,noHref:j,noShade:j,noWrap:j,object:null,profile:null,prompt:null,rev:null,rightMargin:I,rules:null,scheme:null,scrolling:yn,standby:null,summary:null,text:null,topMargin:I,valueType:null,version:null,vAlign:null,vLink:null,vSpace:I,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:j,disablePictureInPicture:j,disableRemotePlayback:j,exportParts:Et,part:nn,prefix:null,property:null,results:I,security:null,unselectable:null},space:"html",transform:Bm}),WS=yr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Kn,accentHeight:I,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:I,amplitude:I,arabicForm:null,ascent:I,attributeName:null,attributeType:null,azimuth:I,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:I,by:null,calcMode:null,capHeight:I,className:nn,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:I,diffuseConstant:I,direction:null,display:null,dur:null,divisor:I,dominantBaseline:null,download:j,dx:null,dy:null,edgeMode:null,editable:null,elevation:I,enableBackground:null,end:null,event:null,exponent:I,externalResourcesRequired:null,fill:null,fillOpacity:I,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Et,g2:Et,glyphName:Et,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:I,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:I,horizOriginX:I,horizOriginY:I,id:null,ideographic:I,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:I,k:I,k1:I,k2:I,k3:I,k4:I,kernelMatrix:Kn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:I,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:I,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:I,overlineThickness:I,paintOrder:null,panose1:null,path:null,pathLength:I,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:nn,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:I,pointsAtY:I,pointsAtZ:I,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Kn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Kn,rev:Kn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Kn,requiredFeatures:Kn,requiredFonts:Kn,requiredFormats:Kn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:I,specularExponent:I,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:I,strikethroughThickness:I,string:null,stroke:null,strokeDashArray:Kn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:I,strokeOpacity:I,strokeWidth:null,style:null,surfaceScale:I,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Kn,tabIndex:I,tableValues:null,target:null,targetX:I,targetY:I,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Kn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:I,underlineThickness:I,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:I,values:null,vAlphabetic:I,vMathematical:I,vectorEffect:null,vHanging:I,vIdeographic:I,version:null,vertAdvY:I,vertOriginX:I,vertOriginY:I,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:I,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:$m}),Hm=yr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()}}),Um=yr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Bm}),Vm=yr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()}}),qS=/[A-Z]/g,td=/-[a-z]/g,QS=/^data[-\w.:]+$/i;function YS(n,e){const t=va(e);let r=e,i=Gn;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&QS.test(e)){if(e.charAt(4)==="-"){const l=e.slice(5).replace(td,XS);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=e.slice(4);if(!td.test(l)){let o=l.replace(qS,GS);o.charAt(0)!=="-"&&(o="-"+o),e="data"+o}}i=Rs}return new i(r,e)}function GS(n){return"-"+n.toLowerCase()}function XS(n){return n.charAt(1).toUpperCase()}const KS=Om([jm,VS,Hm,Um,Vm],"html"),Wm=Om([jm,WS,Hm,Um,Vm],"svg"),ZS=/["&'<>`]/g,JS=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,nC=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,eC=/[|\\{}()[\]^$+*?.]/g,rd=new WeakMap;function tC(n,e){if(n=n.replace(e.subset?rC(e.subset):ZS,r),e.subset||e.escapeOnly)return n;return n.replace(JS,t).replace(nC,r);function t(i,l,o){return e.format((i.charCodeAt(0)-55296)*1024+i.charCodeAt(1)-56320+65536,o.charCodeAt(l+2),e)}function r(i,l,o){return e.format(i.charCodeAt(0),o.charCodeAt(l+1),e)}}function rC(n){let e=rd.get(n);return e||(e=iC(n),rd.set(n,e)),e}function iC(n){const e=[];let t=-1;for(;++t<n.length;)e.push(n[t].replace(eC,"\\$&"));return new RegExp("(?:"+e.join("|")+")","g")}const lC=/[\dA-Fa-f]/;function oC(n,e,t){const r="&#x"+n.toString(16).toUpperCase();return t&&e&&!lC.test(String.fromCharCode(e))?r:r+";"}const uC=/\d/;function aC(n,e,t){const r="&#"+String(n);return t&&e&&!uC.test(String.fromCharCode(e))?r:r+";"}const sC=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"],ou={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"},cC=["cent","copy","divide","gt","lt","not","para","times"],qm={}.hasOwnProperty,_a={};let Qi;for(Qi in ou)qm.call(ou,Qi)&&(_a[ou[Qi]]=Qi);const fC=/[^\dA-Za-z]/;function dC(n,e,t,r){const i=String.fromCharCode(n);if(qm.call(_a,i)){const l=_a[i],o="&"+l;return t&&sC.includes(l)&&!cC.includes(l)&&(!r||e&&e!==61&&fC.test(String.fromCharCode(e)))?o:o+";"}return""}function pC(n,e,t){let r=oC(n,e,t.omitOptionalSemicolons),i;if((t.useNamedReferences||t.useShortestReferences)&&(i=dC(n,e,t.omitOptionalSemicolons,t.attribute)),(t.useShortestReferences||!i)&&t.useShortestReferences){const l=aC(n,e,t.omitOptionalSemicolons);l.length<r.length&&(r=l)}return i&&(!t.useShortestReferences||i.length<r.length)?i:r}function lr(n,e){return tC(n,Object.assign({format:pC},e))}const hC=/^>|^->|<!--|-->|--!>|<!-$/g,mC=[">"],gC=["<",">"];function yC(n,e,t,r){return r.settings.bogusComments?"<?"+lr(n.value,Object.assign({},r.settings.characterReferences,{subset:mC}))+">":"<!--"+n.value.replace(hC,i)+"-->";function i(l){return lr(l,Object.assign({},r.settings.characterReferences,{subset:gC}))}}function kC(n,e,t,r){return"<!"+(r.settings.upperDoctype?"DOCTYPE":"doctype")+(r.settings.tightDoctype?"":" ")+"html>"}function wC(n,e){const t=e||{};return(n[n.length-1]===""?[...n,""]:n).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}function xC(n){return n.join(" ").trim()}const vC=/[ \t\n\f\r]/g;function Fs(n){return typeof n=="object"?n.type==="text"?id(n.value):!1:id(n)}function id(n){return n.replace(vC,"")===""}const Sn=Ym(1),Qm=Ym(-1),SC=[];function Ym(n){return e;function e(t,r,i){const l=t?t.children:SC;let o=(r||0)+n,u=l[o];if(!i)for(;u&&Fs(u);)o+=n,u=l[o];return u}}const CC={}.hasOwnProperty;function Gm(n){return e;function e(t,r,i){return CC.call(n,t.tagName)&&n[t.tagName](t,r,i)}}const Os=Gm({body:EC,caption:uu,colgroup:uu,dd:AC,dt:PC,head:uu,html:_C,li:TC,optgroup:IC,option:zC,p:MC,rp:ld,rt:ld,tbody:NC,td:od,tfoot:DC,th:od,thead:LC,tr:bC});function uu(n,e,t){const r=Sn(t,e,!0);return!r||r.type!=="comment"&&!(r.type==="text"&&Fs(r.value.charAt(0)))}function _C(n,e,t){const r=Sn(t,e);return!r||r.type!=="comment"}function EC(n,e,t){const r=Sn(t,e);return!r||r.type!=="comment"}function MC(n,e,t){const r=Sn(t,e);return r?r.type==="element"&&(r.tagName==="address"||r.tagName==="article"||r.tagName==="aside"||r.tagName==="blockquote"||r.tagName==="details"||r.tagName==="div"||r.tagName==="dl"||r.tagName==="fieldset"||r.tagName==="figcaption"||r.tagName==="figure"||r.tagName==="footer"||r.tagName==="form"||r.tagName==="h1"||r.tagName==="h2"||r.tagName==="h3"||r.tagName==="h4"||r.tagName==="h5"||r.tagName==="h6"||r.tagName==="header"||r.tagName==="hgroup"||r.tagName==="hr"||r.tagName==="main"||r.tagName==="menu"||r.tagName==="nav"||r.tagName==="ol"||r.tagName==="p"||r.tagName==="pre"||r.tagName==="section"||r.tagName==="table"||r.tagName==="ul"):!t||!(t.type==="element"&&(t.tagName==="a"||t.tagName==="audio"||t.tagName==="del"||t.tagName==="ins"||t.tagName==="map"||t.tagName==="noscript"||t.tagName==="video"))}function TC(n,e,t){const r=Sn(t,e);return!r||r.type==="element"&&r.tagName==="li"}function PC(n,e,t){const r=Sn(t,e);return!!(r&&r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd"))}function AC(n,e,t){const r=Sn(t,e);return!r||r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd")}function ld(n,e,t){const r=Sn(t,e);return!r||r.type==="element"&&(r.tagName==="rp"||r.tagName==="rt")}function IC(n,e,t){const r=Sn(t,e);return!r||r.type==="element"&&r.tagName==="optgroup"}function zC(n,e,t){const r=Sn(t,e);return!r||r.type==="element"&&(r.tagName==="option"||r.tagName==="optgroup")}function LC(n,e,t){const r=Sn(t,e);return!!(r&&r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot"))}function NC(n,e,t){const r=Sn(t,e);return!r||r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot")}function DC(n,e,t){return!Sn(t,e)}function bC(n,e,t){const r=Sn(t,e);return!r||r.type==="element"&&r.tagName==="tr"}function od(n,e,t){const r=Sn(t,e);return!r||r.type==="element"&&(r.tagName==="td"||r.tagName==="th")}const RC=Gm({body:jC,colgroup:$C,head:OC,html:FC,tbody:BC});function FC(n){const e=Sn(n,-1);return!e||e.type!=="comment"}function OC(n){const e=new Set;for(const r of n.children)if(r.type==="element"&&(r.tagName==="base"||r.tagName==="title")){if(e.has(r.tagName))return!1;e.add(r.tagName)}const t=n.children[0];return!t||t.type==="element"}function jC(n){const e=Sn(n,-1,!0);return!e||e.type!=="comment"&&!(e.type==="text"&&Fs(e.value.charAt(0)))&&!(e.type==="element"&&(e.tagName==="meta"||e.tagName==="link"||e.tagName==="script"||e.tagName==="style"||e.tagName==="template"))}function $C(n,e,t){const r=Qm(t,e),i=Sn(n,-1,!0);return t&&r&&r.type==="element"&&r.tagName==="colgroup"&&Os(r,t.children.indexOf(r),t)?!1:!!(i&&i.type==="element"&&i.tagName==="col")}function BC(n,e,t){const r=Qm(t,e),i=Sn(n,-1);return t&&r&&r.type==="element"&&(r.tagName==="thead"||r.tagName==="tbody")&&Os(r,t.children.indexOf(r),t)?!1:!!(i&&i.type==="element"&&i.tagName==="tr")}const Yi={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function HC(n,e,t,r){const i=r.schema,l=i.space==="svg"?!1:r.settings.omitOptionalTags;let o=i.space==="svg"?r.settings.closeEmptyElements:r.settings.voids.includes(n.tagName.toLowerCase());const u=[];let a;i.space==="html"&&n.tagName==="svg"&&(r.schema=Wm);const s=UC(r,n.properties),f=r.all(i.space==="html"&&n.tagName==="template"?n.content:n);return r.schema=i,f&&(o=!1),(s||!l||!RC(n,e,t))&&(u.push("<",n.tagName,s?" "+s:""),o&&(i.space==="svg"||r.settings.closeSelfClosing)&&(a=s.charAt(s.length-1),(!r.settings.tightSelfClosing||a==="/"||a&&a!=='"'&&a!=="'")&&u.push(" "),u.push("/")),u.push(">")),u.push(f),!o&&(!l||!Os(n,e,t))&&u.push("</"+n.tagName+">"),u.join("")}function UC(n,e){const t=[];let r=-1,i;if(e){for(i in e)if(e[i]!==null&&e[i]!==void 0){const l=VC(n,i,e[i]);l&&t.push(l)}}for(;++r<t.length;){const l=n.settings.tightAttributes?t[r].charAt(t[r].length-1):void 0;r!==t.length-1&&l!=='"'&&l!=="'"&&(t[r]+=" ")}return t.join("")}function VC(n,e,t){const r=YS(n.schema,e),i=n.settings.allowParseErrors&&n.schema.space==="html"?0:1,l=n.settings.allowDangerousCharacters?0:1;let o=n.quote,u;if(r.overloadedBoolean&&(t===r.attribute||t==="")?t=!0:(r.boolean||r.overloadedBoolean)&&(typeof t!="string"||t===r.attribute||t==="")&&(t=!!t),t==null||t===!1||typeof t=="number"&&Number.isNaN(t))return"";const a=lr(r.attribute,Object.assign({},n.settings.characterReferences,{subset:Yi.name[i][l]}));return t===!0||(t=Array.isArray(t)?(r.commaSeparated?wC:xC)(t,{padLeft:!n.settings.tightCommaSeparatedLists}):String(t),n.settings.collapseEmptyAttributes&&!t)?a:(n.settings.preferUnquoted&&(u=lr(t,Object.assign({},n.settings.characterReferences,{attribute:!0,subset:Yi.unquoted[i][l]}))),u!==t&&(n.settings.quoteSmart&&$l(t,o)>$l(t,n.alternative)&&(o=n.alternative),u=o+lr(t,Object.assign({},n.settings.characterReferences,{subset:(o==="'"?Yi.single:Yi.double)[i][l],attribute:!0}))+o),a+(u&&"="+u))}const WC=["<","&"];function Xm(n,e,t,r){return t&&t.type==="element"&&(t.tagName==="script"||t.tagName==="style")?n.value:lr(n.value,Object.assign({},r.settings.characterReferences,{subset:WC}))}function qC(n,e,t,r){return r.settings.allowDangerousHtml?n.value:Xm(n,e,t,r)}function QC(n,e,t,r){return r.all(n)}const YC=$h("type",{invalid:GC,unknown:XC,handlers:{comment:yC,doctype:kC,element:HC,raw:qC,root:QC,text:Xm}});function GC(n){throw new Error("Expected node, not `"+n+"`")}function XC(n){const e=n;throw new Error("Cannot compile unknown node `"+e.type+"`")}const KC={},ZC={},JC=[];function n_(n,e){const t=e||KC,r=t.quote||'"',i=r==='"'?"'":'"';if(r!=='"'&&r!=="'")throw new Error("Invalid quote `"+r+"`, expected `'` or `\"`");return{one:e_,all:t_,settings:{omitOptionalTags:t.omitOptionalTags||!1,allowParseErrors:t.allowParseErrors||!1,allowDangerousCharacters:t.allowDangerousCharacters||!1,quoteSmart:t.quoteSmart||!1,preferUnquoted:t.preferUnquoted||!1,tightAttributes:t.tightAttributes||!1,upperDoctype:t.upperDoctype||!1,tightDoctype:t.tightDoctype||!1,bogusComments:t.bogusComments||!1,tightCommaSeparatedLists:t.tightCommaSeparatedLists||!1,tightSelfClosing:t.tightSelfClosing||!1,collapseEmptyAttributes:t.collapseEmptyAttributes||!1,allowDangerousHtml:t.allowDangerousHtml||!1,voids:t.voids||HS,characterReferences:t.characterReferences||ZC,closeSelfClosing:t.closeSelfClosing||!1,closeEmptyElements:t.closeEmptyElements||!1},schema:t.space==="svg"?Wm:KS,quote:r,alternative:i}.one(Array.isArray(n)?{type:"root",children:n}:n,void 0,void 0)}function e_(n,e,t){return YC(n,e,t,this)}function t_(n){const e=[],t=n&&n.children||JC;let r=-1;for(;++r<t.length;)e[r]=this.one(t[r],r,n);return e.join("")}const r_=`
ins { background-color: #e6ffec; text-decoration: none; border-radius: 2px; padding: 0 2px; }
del { background-color: #ffebe9; text-decoration: line-through; border-radius: 2px; padding: 0 2px; }
ins.diff-block, del.diff-block { display: block; padding-left: 10px; border-left: 3px solid; }
ins.diff-block { border-left-color: #2cbe4e; }
del.diff-block { border-left-color: #cb2431; }
ins > hr, ins > pre { background-color: #e6ffec; }
del > hr, del > pre { background-color: #ffebe9; }
li[data-diff="ins"] { background-color: #e6ffec; border-radius: 2px; }
li[data-diff="del"] { background-color: #ffebe9; border-radius: 2px; text-decoration: line-through; }
`;function Gi(n,e){return(t,r)=>{const i=t.all(r);return{type:"element",tagName:n,properties:{className:[e]},children:i}}}function i_(n){ce(n,e=>{var t;(t=e.data)!=null&&t.diff&&(e.data.hProperties||(e.data.hProperties={}),e.data.hProperties["data-diff"]=e.data.diff)})}function l_(n){const e=JSON.parse(JSON.stringify(n));i_(e);const t=BS(e,{allowDangerousHtml:!0,handlers:{ins:Gi("ins","diff-block"),del:Gi("del","diff-block"),inlineIns:Gi("ins","diff-inline"),inlineDel:Gi("del","diff-inline")}});if(!t)return"";const r=n_(t,{allowDangerousHtml:!0});return`<html><head><style>${r_}</style></head><body>${r}</body></html>`}const o_={tokenize:u_};function u_(n){const e=n.attempt(this.parser.constructs.contentInitial,r,i);let t;return e;function r(u){if(u===null){n.consume(u);return}return n.enter("lineEnding"),n.consume(u),n.exit("lineEnding"),K(n,e,"linePrefix")}function i(u){return n.enter("paragraph"),l(u)}function l(u){const a=n.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=a),t=a,o(u)}function o(u){if(u===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(u);return}return O(u)?(n.consume(u),n.exit("chunkText"),l):(n.consume(u),o)}}const a_={tokenize:s_},ud={tokenize:c_};function s_(n){const e=this,t=[];let r=0,i,l,o;return u;function u(y){if(r<t.length){const C=t[r];return e.containerState=C[1],n.attempt(C[0].continuation,a,s)(y)}return s(y)}function a(y){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&m();const C=e.events.length;let _=C,v;for(;_--;)if(e.events[_][0]==="exit"&&e.events[_][1].type==="chunkFlow"){v=e.events[_][1].end;break}h(r);let T=C;for(;T<e.events.length;)e.events[T][1].end={...v},T++;const A=new Bl;return A.add(_+1,0,e.events.slice(C)),A.add(C,T-C,[]),A.consume(e.events),s(y)}return u(y)}function s(y){if(r===t.length){if(!i)return p(y);if(i.currentConstruct&&i.currentConstruct.concrete)return g(y);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},n.check(ud,f,c)(y)}function f(y){return i&&m(),h(r),p(y)}function c(y){return e.parser.lazy[e.now().line]=r!==t.length,o=e.now().offset,g(y)}function p(y){return e.containerState={},n.attempt(ud,d,g)(y)}function d(y){return r++,t.push([e.currentConstruct,e.containerState]),p(y)}function g(y){if(y===null){i&&m(),h(0),n.consume(y);return}return i=i||e.parser.flow(e.now()),n.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),x(y)}function x(y){if(y===null){M(n.exit("chunkFlow"),!0),h(0),n.consume(y);return}return O(y)?(n.consume(y),M(n.exit("chunkFlow")),r=0,e.interrupt=void 0,u):(n.consume(y),x)}function M(y,C){const _=e.sliceStream(y);if(C&&_.push(null),y.previous=l,l&&(l.next=y),l=y,i.defineSkip(y.start),i.write(_),e.parser.lazy[y.start.line]){let v=i.events.length;for(;v--;)if(i.events[v][1].start.offset<o&&(!i.events[v][1].end||i.events[v][1].end.offset>o))return;const T=e.events.length;let A=T,B,S;for(;A--;)if(e.events[A][0]==="exit"&&e.events[A][1].type==="chunkFlow"){if(B){S=e.events[A][1].end;break}B=!0}for(h(r),v=T;v<e.events.length;)e.events[v][1].end={...S},v++;const L=new Bl;L.add(A+1,0,e.events.slice(T)),L.add(T,v-T,[]),L.consume(e.events)}}function h(y){let C=t.length;for(;C-- >y;){const _=t[C];e.containerState=_[1],_[0].exit.call(e,n)}t.length=y}function m(){i.write([null]),l=void 0,i=void 0,e.containerState._closeFlow=void 0}}function c_(n,e,t){return K(n,n.attempt(this.parser.constructs.document,e,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const f_={tokenize:d_};function d_(n){const e=this,t=n.attempt(Si,r,n.attempt(this.parser.constructs.flowInitial,i,K(n,n.attempt(this.parser.constructs.flow,i,n.attempt(jv,i)),"linePrefix")));return t;function r(l){if(l===null){n.consume(l);return}return n.enter("lineEndingBlank"),n.consume(l),n.exit("lineEndingBlank"),e.currentConstruct=void 0,t}function i(l){if(l===null){n.consume(l);return}return n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),e.currentConstruct=void 0,t}}const p_={resolveAll:Zm()},h_=Km("string"),m_=Km("text");function Km(n){return{resolveAll:Zm(n==="text"?g_:void 0),tokenize:e};function e(t){const r=this,i=this.parser.constructs[n],l=t.attempt(i,o,u);return o;function o(f){return s(f)?l(f):u(f)}function u(f){if(f===null){t.consume(f);return}return t.enter("data"),t.consume(f),a}function a(f){return s(f)?(t.exit("data"),l(f)):(t.consume(f),a)}function s(f){if(f===null)return!0;const c=i[f];let p=-1;if(c)for(;++p<c.length;){const d=c[p];if(!d.previous||d.previous.call(r,r.previous))return!0}return!1}}}function Zm(n){return e;function e(t,r){let i=-1,l;for(;++i<=t.length;)l===void 0?t[i]&&t[i][1].type==="data"&&(l=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==l+2&&(t[l][1].end=t[i-1][1].end,t.splice(l+2,i-l-2),i=l+2),l=void 0);return n?n(t,r):t}}function g_(n,e){const t=new Bl;let r=0;for(;++r<=n.length;)if((r===n.length||n[r][1].type==="lineEnding")&&n[r-1][1].type==="data"){const i=n[r-1][1],l=e.sliceStream(i);let o=l.length,u=-1,a=0,s;for(;o--;){const f=l[o];if(typeof f=="string"){for(u=f.length;f.charCodeAt(u-1)===32;)a++,u--;if(u)break;u=-1}else if(f===-2)s=!0,a++;else if(f!==-1){o++;break}}if(e._contentTypeTextTrailing&&r===n.length&&(a=0),a){const f={type:r===n.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?u:i.start._bufferIndex+u,_index:i.start._index+o,line:i.end.line,column:i.end.column-a,offset:i.end.offset-a},end:{...i.end}};i.end={...f.start},i.start.offset===i.end.offset?Object.assign(i,f):t.add(r,0,[["enter",f,e],["exit",f,e]])}r++}return t.consume(n),n}const y_={42:Hn,43:Hn,45:Hn,48:Hn,49:Hn,50:Hn,51:Hn,52:Hn,53:Hn,54:Hn,55:Hn,56:Hn,57:Hn,62:vm},k_={91:Vv},w_={[-2]:ru,[-1]:ru,32:ru},x_={35:Xv,42:dl,45:[qf,dl],60:Jv,61:qf,95:dl,96:Vf,126:Vf},v_={38:Cm,92:Sm},S_={[-5]:iu,[-4]:iu,[-3]:iu,33:m2,38:Cm,42:ka,60:[xv,i2],91:y2,92:[Yv,Sm],93:zs,95:ka,96:Nv},C_={null:[ka,p_]},__={null:[42,95]},E_={null:[]},M_=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:__,contentInitial:k_,disable:E_,document:y_,flow:x_,flowInitial:w_,insideSpan:C_,string:v_,text:S_},Symbol.toStringTag,{value:"Module"}));function T_(n,e,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},l=[];let o=[],u=[];const a={attempt:T(_),check:T(v),consume:m,enter:y,exit:C,interrupt:T(v,{interrupt:!0})},s={code:null,containerState:{},defineSkip:x,events:[],now:g,parser:n,previous:null,sliceSerialize:p,sliceStream:d,write:c};let f=e.tokenize.call(s,a);return e.resolveAll&&l.push(e),s;function c(L){return o=oe(o,L),M(),o[o.length-1]!==null?[]:(A(e,0),s.events=ho(l,s.events,s),s.events)}function p(L,R){return A_(d(L),R)}function d(L){return P_(o,L)}function g(){const{_bufferIndex:L,_index:R,line:Y,column:tn,offset:Q}=r;return{_bufferIndex:L,_index:R,line:Y,column:tn,offset:Q}}function x(L){i[L.line]=L.column,S()}function M(){for(;r._index<o.length;){const L=o[r._index];if(typeof L=="string"){const R=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===R&&r._bufferIndex<L.length;)h(L.charCodeAt(r._bufferIndex))}else h(L)}}function h(L){f=f(L)}function m(L){O(L)?(r.line++,r.column=1,r.offset+=L===-3?2:1,S()):L!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=L}function y(L,R){const Y=R||{};return Y.type=L,Y.start=g(),s.events.push(["enter",Y,s]),u.push(Y),Y}function C(L){const R=u.pop();return R.end=g(),s.events.push(["exit",R,s]),R}function _(L,R){A(L,R.from)}function v(L,R){R.restore()}function T(L,R){return Y;function Y(tn,Q,gn){let hn,N,F,k;return Array.isArray(tn)?J(tn):"tokenize"in tn?J([tn]):G(tn);function G(rn){return Ce;function Ce(qe){const bt=qe!==null&&rn[qe],Rt=qe!==null&&rn.null,go=[...Array.isArray(bt)?bt:bt?[bt]:[],...Array.isArray(Rt)?Rt:Rt?[Rt]:[]];return J(go)(qe)}}function J(rn){return hn=rn,N=0,rn.length===0?gn:w(rn[N])}function w(rn){return Ce;function Ce(qe){return k=B(),F=rn,rn.partial||(s.currentConstruct=rn),rn.name&&s.parser.constructs.disable.null.includes(rn.name)?Se():rn.tokenize.call(R?Object.assign(Object.create(s),R):s,a,wn,Se)(qe)}}function wn(rn){return L(F,k),Q}function Se(rn){return k.restore(),++N<hn.length?w(hn[N]):gn}}}function A(L,R){L.resolveAll&&!l.includes(L)&&l.push(L),L.resolve&&xe(s.events,R,s.events.length-R,L.resolve(s.events.slice(R),s)),L.resolveTo&&(s.events=L.resolveTo(s.events,s))}function B(){const L=g(),R=s.previous,Y=s.currentConstruct,tn=s.events.length,Q=Array.from(u);return{from:tn,restore:gn};function gn(){r=L,s.previous=R,s.currentConstruct=Y,s.events.length=tn,u=Q,S()}}function S(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function P_(n,e){const t=e.start._index,r=e.start._bufferIndex,i=e.end._index,l=e.end._bufferIndex;let o;if(t===i)o=[n[t].slice(r,l)];else{if(o=n.slice(t,i),r>-1){const u=o[0];typeof u=="string"?o[0]=u.slice(r):o.shift()}l>0&&o.push(n[i].slice(0,l))}return o}function A_(n,e){let t=-1;const r=[];let i;for(;++t<n.length;){const l=n[t];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=e?" ":"	";break}case-1:{if(!e&&i)continue;o=" ";break}default:o=String.fromCharCode(l)}i=l===-2,r.push(o)}return r.join("")}function I_(n){const r={constructs:fm([M_,...(n||{}).extensions||[]]),content:i(o_),defined:[],document:i(a_),flow:i(f_),lazy:{},string:i(h_),text:i(m_)};return r;function i(l){return o;function o(u){return T_(r,l,u)}}}function z_(n){for(;!_m(n););return n}const ad=/[\0\t\n\r]/g;function L_(){let n=1,e="",t=!0,r;return i;function i(l,o,u){l=e+(typeof l=="string"?l.toString():new TextDecoder(o||void 0).decode(l));const a=[];let s=0;for(e="",t&&(l.charCodeAt(0)===65279&&s++,t=void 0);s<l.length;){ad.lastIndex=s;const f=ad.exec(l),c=f&&f.index!==void 0?f.index:l.length,p=l.charCodeAt(c);if(!f){e=l.slice(s);break}if(p===10&&s===c&&r)a.push(-3),r=void 0;else switch(r&&(a.push(-5),r=void 0),s<c&&(a.push(l.slice(s,c)),n+=c-s),p){case 0:{a.push(65533),n++;break}case 9:{const d=Math.ceil(n/4)*4;for(a.push(-2);n++<d;)a.push(-1);break}case 10:{a.push(-4),n=1;break}default:r=!0,n=1}s=c+1}return u&&(r&&a.push(-5),e&&a.push(e),a.push(null)),a}}const Jm={}.hasOwnProperty;function N_(n,e,t){return e&&typeof e=="object"&&(t=e,e=void 0),D_(t)(z_(I_(t).document().write(L_()(n,e,!0))))}function D_(n){const e={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Us),autolinkProtocol:S,autolinkEmail:S,atxHeading:o($s),blockQuote:o(go),characterEscape:S,characterReference:S,codeFenced:o(js),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:o(js,u),codeText:o(tg,u),codeTextData:S,data:S,codeFlowValue:S,definition:o(rg),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:o(ig),hardBreakEscape:o(Bs),hardBreakTrailing:o(Bs),htmlFlow:o(Hs,u),htmlFlowData:S,htmlText:o(Hs,u),htmlTextData:S,image:o(lg),label:u,link:o(Us),listItem:o(og),listItemValue:d,listOrdered:o(Vs,p),listUnordered:o(Vs),paragraph:o(ug),reference:wn,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:o($s),strong:o(ag),thematicBreak:o(cg)},exit:{atxHeading:s(),atxHeadingSequence:v,autolink:s(),autolinkEmail:Rt,autolinkProtocol:bt,blockQuote:s(),characterEscapeValue:L,characterReferenceMarkerHexadecimal:rn,characterReferenceMarkerNumeric:rn,characterReferenceValue:Ce,characterReference:qe,codeFenced:s(h),codeFencedFence:M,codeFencedFenceInfo:g,codeFencedFenceMeta:x,codeFlowValue:L,codeIndented:s(m),codeText:s(gn),codeTextData:L,data:L,definition:s(),definitionDestinationString:_,definitionLabelString:y,definitionTitleString:C,emphasis:s(),hardBreakEscape:s(Y),hardBreakTrailing:s(Y),htmlFlow:s(tn),htmlFlowData:L,htmlText:s(Q),htmlTextData:L,image:s(N),label:k,labelText:F,lineEnding:R,link:s(hn),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:Se,resourceDestinationString:G,resourceTitleString:J,resource:w,setextHeading:s(B),setextHeadingLineSequence:A,setextHeadingText:T,strong:s(),thematicBreak:s()}};ng(e,(n||{}).mdastExtensions||[]);const t={};return r;function r(E){let z={type:"root",children:[],position:void 0};const $={stack:[z],tokenStack:[],config:e,enter:a,exit:f,buffer:u,resume:c,data:t},H=[],$n=[];let on=-1;for(;++on<E.length;)if($n.push(E[on]),E[on][1].type==="listOrdered"||E[on][1].type==="listUnordered")if(E[on][0]==="enter")H.push($n.length-1);else{const Bn=H.pop();l($n,Bn)}for(E=$n,on=-1;++on<E.length;){const Bn=e[E[on][0]];E[on][0]==="enter"&&e.beforeEnter.length>0&&i(e.beforeEnter,{...$,sliceSerialize:E[on][2].sliceSerialize},E[on][1]),Jm.call(Bn,E[on][1].type)&&Bn[E[on][1].type].call({...$,sliceSerialize:E[on][2].sliceSerialize},E[on][1]),E[on][0]==="exit"&&e.afterExit.length>0&&i(e.afterExit,{...$,sliceSerialize:E[on][2].sliceSerialize},E[on][1])}if($.tokenStack.length>0){const Bn=$.tokenStack[$.tokenStack.length-1];(Bn[1]||sd).call($,void 0,Bn[0])}for(z.position={start:Ye(E.length>0?E[0][1].start:{line:1,column:1,offset:0}),end:Ye(E.length>0?E[E.length-2][1].end:{line:1,column:1,offset:0})},on=-1;++on<e.transforms.length;)z=e.transforms[on](z)||z;return z}function i(E,z,$){let H=-1;for(;++H<E.length;)E[H].call(z,$)}function l(E,z){const $=E.length-1;let H=z-1,$n=-1,on=!1,Bn,_e,kr,wr;const xr=[];for(;++H<=$;){const Xn=E[H];switch(Xn[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Xn[0]==="enter"?$n++:$n--,wr=void 0;break}case"lineEndingBlank":{Xn[0]==="enter"&&(Bn&&!wr&&!$n&&!kr&&(kr=H),wr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:wr=void 0}if(!$n&&Xn[0]==="enter"&&Xn[1].type==="listItemPrefix"||$n===-1&&Xn[0]==="exit"&&(Xn[1].type==="listUnordered"||Xn[1].type==="listOrdered")){if(Bn){let Ft=H;for(_e=void 0;Ft--;){const Ne=E[Ft];if(Ne[1].type==="lineEnding"||Ne[1].type==="lineEndingBlank"){if(Ne[0]==="exit")continue;_e&&(E[_e][1].type="lineEndingBlank",on=!0),Ne[1].type="lineEnding",_e=Ft}else if(!(Ne[1].type==="linePrefix"||Ne[1].type==="blockQuotePrefix"||Ne[1].type==="blockQuotePrefixWhitespace"||Ne[1].type==="blockQuoteMarker"||Ne[1].type==="listItemIndent"))break}kr&&(!_e||kr<_e)&&(Bn._spread=!0),Bn.end=Object.assign({},_e?E[_e][1].start:Xn[1].end),xr.push({at:_e||H,event:["exit",Bn,Xn[2]]})}if(Xn[1].type==="listItemPrefix"){const Ft={type:"listItem",_spread:!1,start:Object.assign({},Xn[1].start),end:void 0};Bn=Ft,xr.push({at:H,event:["enter",Ft,Xn[2]]}),kr=void 0,wr=!0}}}const Ws=E.splice(z);let yo=0;for(H=-1;++H<Ws.length;){for(;yo<xr.length&&xr[yo].at===z+H;)E.push(xr[yo++].event);E.push(Ws[H])}E[z][1]._spread=on}function o(E,z){return $;function $(H){a.call(this,E(H),H),z&&z.call(this,H)}}function u(){this.stack.push({type:"fragment",children:[]})}function a(E,z,$){this.stack[this.stack.length-1].children.push(E),this.stack.push(E),this.tokenStack.push([z,$||void 0]),E.position={start:Ye(z.start),end:void 0}}function s(E){return z;function z($){E&&E.call(this,$),f.call(this,$)}}function f(E,z){const $=this.stack.pop(),H=this.tokenStack.pop();if(!H)throw new Error("Cannot close `"+E.type+"` ("+Xr({start:E.start,end:E.end})+"): it’s not open");H[0].type!==E.type&&(z?z.call(this,E,H[0]):(H[1]||sd).call(this,E,H[0])),$.position.end=Ye(E.end)}function c(){return Ss(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function d(E){if(this.data.expectingFirstListItemValue){const z=this.stack[this.stack.length-2];z.start=Number.parseInt(this.sliceSerialize(E),10),this.data.expectingFirstListItemValue=void 0}}function g(){const E=this.resume(),z=this.stack[this.stack.length-1];z.lang=E}function x(){const E=this.resume(),z=this.stack[this.stack.length-1];z.meta=E}function M(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function h(){const E=this.resume(),z=this.stack[this.stack.length-1];z.value=E.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const E=this.resume(),z=this.stack[this.stack.length-1];z.value=E.replace(/(\r?\n|\r)$/g,"")}function y(E){const z=this.resume(),$=this.stack[this.stack.length-1];$.label=z,$.identifier=we(this.sliceSerialize(E)).toLowerCase()}function C(){const E=this.resume(),z=this.stack[this.stack.length-1];z.title=E}function _(){const E=this.resume(),z=this.stack[this.stack.length-1];z.url=E}function v(E){const z=this.stack[this.stack.length-1];if(!z.depth){const $=this.sliceSerialize(E).length;z.depth=$}}function T(){this.data.setextHeadingSlurpLineEnding=!0}function A(E){const z=this.stack[this.stack.length-1];z.depth=this.sliceSerialize(E).codePointAt(0)===61?1:2}function B(){this.data.setextHeadingSlurpLineEnding=void 0}function S(E){const $=this.stack[this.stack.length-1].children;let H=$[$.length-1];(!H||H.type!=="text")&&(H=sg(),H.position={start:Ye(E.start),end:void 0},$.push(H)),this.stack.push(H)}function L(E){const z=this.stack.pop();z.value+=this.sliceSerialize(E),z.position.end=Ye(E.end)}function R(E){const z=this.stack[this.stack.length-1];if(this.data.atHardBreak){const $=z.children[z.children.length-1];$.position.end=Ye(E.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(z.type)&&(S.call(this,E),L.call(this,E))}function Y(){this.data.atHardBreak=!0}function tn(){const E=this.resume(),z=this.stack[this.stack.length-1];z.value=E}function Q(){const E=this.resume(),z=this.stack[this.stack.length-1];z.value=E}function gn(){const E=this.resume(),z=this.stack[this.stack.length-1];z.value=E}function hn(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const z=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=z,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function N(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const z=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=z,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function F(E){const z=this.sliceSerialize(E),$=this.stack[this.stack.length-2];$.label=rm(z),$.identifier=we(z).toLowerCase()}function k(){const E=this.stack[this.stack.length-1],z=this.resume(),$=this.stack[this.stack.length-1];if(this.data.inReference=!0,$.type==="link"){const H=E.children;$.children=H}else $.alt=z}function G(){const E=this.resume(),z=this.stack[this.stack.length-1];z.url=E}function J(){const E=this.resume(),z=this.stack[this.stack.length-1];z.title=E}function w(){this.data.inReference=void 0}function wn(){this.data.referenceType="collapsed"}function Se(E){const z=this.resume(),$=this.stack[this.stack.length-1];$.label=z,$.identifier=we(this.sliceSerialize(E)).toLowerCase(),this.data.referenceType="full"}function rn(E){this.data.characterReferenceType=E.type}function Ce(E){const z=this.sliceSerialize(E),$=this.data.characterReferenceType;let H;$?(H=tm(z,$==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):H=Ms(z);const $n=this.stack[this.stack.length-1];$n.value+=H}function qe(E){const z=this.stack.pop();z.position.end=Ye(E.end)}function bt(E){L.call(this,E);const z=this.stack[this.stack.length-1];z.url=this.sliceSerialize(E)}function Rt(E){L.call(this,E);const z=this.stack[this.stack.length-1];z.url="mailto:"+this.sliceSerialize(E)}function go(){return{type:"blockquote",children:[],position:void 0}}function js(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function tg(){return{type:"inlineCode",value:"",position:void 0}}function rg(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function ig(){return{type:"emphasis",children:[],position:void 0}}function $s(){return{type:"heading",depth:0,children:[],position:void 0}}function Bs(){return{type:"break",position:void 0}}function Hs(){return{type:"html",value:"",position:void 0}}function lg(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function Us(){return{type:"link",title:null,url:"",children:[],position:void 0}}function Vs(E){return{type:"list",ordered:E.type==="listOrdered",start:null,spread:E._spread,children:[],position:void 0}}function og(E){return{type:"listItem",spread:E._spread,checked:null,children:[],position:void 0}}function ug(){return{type:"paragraph",children:[],position:void 0}}function ag(){return{type:"strong",children:[],position:void 0}}function sg(){return{type:"text",value:"",position:void 0}}function cg(){return{type:"thematicBreak",position:void 0}}}function Ye(n){return{line:n.line,column:n.column,offset:n.offset}}function ng(n,e){let t=-1;for(;++t<e.length;){const r=e[t];Array.isArray(r)?ng(n,r):b_(n,r)}}function b_(n,e){let t;for(t in e)if(Jm.call(e,t))switch(t){case"canContainEols":{const r=e[t];r&&n[t].push(...r);break}case"transforms":{const r=e[t];r&&n[t].push(...r);break}case"afterExit":case"beforeEnter":{const r=e[t];r&&n[t].push(r);break}case"enter":case"exit":{const r=e[t];r&&Object.assign(n[t],r);break}}}function sd(n,e){throw n?new Error("Cannot close `"+n.type+"` ("+Xr({start:n.start,end:n.end})+"): a different token (`"+e.type+"`, "+Xr({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Xr({start:e.start,end:e.end})+") is still open")}function R_(n){const e=this;e.parser=t;function t(r){return N_(r,{...e.data("settings"),...n,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function cd(n){return um().use(R_).use(Pm).parse(n)}function au({getText:n}){const[e,t]=Cn.useState(!1),r=Cn.useCallback(()=>{navigator.clipboard.writeText(n()).then(()=>{t(!0),setTimeout(()=>t(!1),1500)})},[n]);return U.jsx("button",{className:`copy-btn ${e?"copied":""}`,onClick:r,children:e?"Copied":"Copy"})}function F_(){const[n,e]=Cn.useState("formatting"),[t,r]=Cn.useState(""),[i,l]=Cn.useState(""),[o,u]=Cn.useState([]),[a,s]=Cn.useState(""),[f,c]=Cn.useState(""),[p,d]=Cn.useState(null),[g,x]=Cn.useState("html-preview"),M=Cn.useCallback((_,v)=>{const T=Mh(_,v);u(T);const A=zk(Ak(cd(_),cd(v)));d(A),s(Z2(A)),c(l_(A))},[]);Cn.useEffect(()=>{const _=ef.find(v=>v.name===n);_&&(r(_.oldMarkdown),l(_.newMarkdown),M(_.oldMarkdown,_.newMarkdown))},[n,M]);const h=Cn.useCallback(_=>{const v=_.target.value;r(v),M(v,i)},[i,M]),m=Cn.useCallback(_=>{const v=_.target.value;l(v),M(t,v)},[t,M]),y=()=>{switch(g){case"text-diff":return U.jsx("div",{className:"diff-text-view",children:o.map((_,v)=>U.jsx("span",{className:_.added?"added":_.removed?"removed":"",children:_.value},v))});case"ast-markdown":return U.jsx("div",{className:"ast-diff-view",children:U.jsx(O_,{text:a})});case"html-preview":{const _=`<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:16px;font-size:14px;line-height:1.6;color:#1a1a1a;}</style></head><body>${f}</body></html>`;return U.jsx("iframe",{className:"html-preview-frame",srcDoc:_,title:"HTML Diff Preview",sandbox:"allow-same-origin"})}case"ast-json":return U.jsx("pre",{className:"json-view",children:JSON.stringify(p,null,2)})}},C=Cn.useCallback(()=>{switch(g){case"text-diff":return o.map(_=>_.value).join("");case"ast-markdown":return a;case"html-preview":return f;case"ast-json":return JSON.stringify(p,null,2)}},[g,o,a,f,p]);return U.jsxs("div",{className:"app",children:[U.jsxs("div",{className:"toolbar",children:[U.jsx("span",{className:"toolbar-title",children:"Markdown AST Diff"}),U.jsx("div",{className:"testcase-pills",children:ef.map(_=>U.jsx("button",{className:`pill ${n===_.name?"active":""}`,onClick:()=>e(_.name),children:_.name},_.name))})]}),U.jsxs("div",{className:"main",children:[U.jsxs("div",{className:"editor-row",children:[U.jsxs("div",{className:"editor-pane",children:[U.jsxs("div",{className:"pane-header",children:[U.jsx("span",{className:"pane-label",children:"Old"}),U.jsx(au,{getText:()=>t})]}),U.jsx("textarea",{className:"editor-textarea",value:t,onChange:h,placeholder:"Paste old markdown here..."})]}),U.jsxs("div",{className:"editor-pane",children:[U.jsxs("div",{className:"pane-header",children:[U.jsx("span",{className:"pane-label",children:"New"}),U.jsx(au,{getText:()=>i})]}),U.jsx("textarea",{className:"editor-textarea",value:i,onChange:m,placeholder:"Paste new markdown here..."})]})]}),U.jsxs("div",{className:"result-row",children:[U.jsxs("div",{className:"result-tabs",children:[[["html-preview","HTML Preview"],["ast-markdown","AST Markdown"],["text-diff","Text Diff"],["ast-json","AST JSON"]].map(([_,v])=>U.jsx("button",{className:`result-tab ${g===_?"active":""}`,onClick:()=>x(_),children:v},_)),U.jsx("div",{style:{flex:1}}),U.jsx(au,{getText:C})]}),U.jsx("div",{className:"result-content",children:y()})]})]})]})}function O_({text:n}){const e=document.createElement("textarea");e.innerHTML=n;const t=e.value,r=[];let i=0;const l=[...t.matchAll(/\{\+\+\+\+(.*?)\+\+\+\+\}/gs),...t.matchAll(/\{----(.*?)----\}/gs),...t.matchAll(/\{\+\+listItem\+\+\}/g),...t.matchAll(/\{--listItem--\}/g)].sort((o,u)=>o.index-u.index);return l.length===0?U.jsx(U.Fragment,{children:t}):(l.forEach((o,u)=>{const a=o.index,s=o[0];a>i&&r.push(U.jsx("span",{children:t.substring(i,a)},`t${u}`));let f="";s==="{++listItem++}"?f="list-ins-mark":s==="{--listItem--}"?f="list-del-mark":s.startsWith("{++++")?f="ins-mark":s.startsWith("{----")&&(f="del-mark"),r.push(U.jsx("span",{className:f,children:s},`m${u}`)),i=a+s.length}),i<t.length&&r.push(U.jsx("span",{children:t.substring(i)},"last")),U.jsx(U.Fragment,{children:r}))}const eg=document.getElementById("root");if(!eg)throw new Error("Root element not found");su.createRoot(eg).render(U.jsx(Mg.StrictMode,{children:U.jsx(F_,{})}));
