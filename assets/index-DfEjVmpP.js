(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function Lc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ac={exports:{}},dl={},Fc={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),Xp=Symbol.for("react.portal"),Jp=Symbol.for("react.fragment"),Kp=Symbol.for("react.strict_mode"),Zp=Symbol.for("react.profiler"),eh=Symbol.for("react.provider"),nh=Symbol.for("react.context"),th=Symbol.for("react.forward_ref"),rh=Symbol.for("react.suspense"),ih=Symbol.for("react.memo"),lh=Symbol.for("react.lazy"),Aa=Symbol.iterator;function oh(e){return e===null||typeof e!="object"?null:(e=Aa&&e[Aa]||e["@@iterator"],typeof e=="function"?e:null)}var Dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nc=Object.assign,jc={};function nr(e,n,t){this.props=e,this.context=n,this.refs=jc,this.updater=t||Dc}nr.prototype.isReactComponent={};nr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Oc(){}Oc.prototype=nr.prototype;function Cu(e,n,t){this.props=e,this.context=n,this.refs=jc,this.updater=t||Dc}var Eu=Cu.prototype=new Oc;Eu.constructor=Cu;Nc(Eu,nr.prototype);Eu.isPureReactComponent=!0;var Fa=Array.isArray,Rc=Object.prototype.hasOwnProperty,_u={current:null},$c={key:!0,ref:!0,__self:!0,__source:!0};function bc(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Rc.call(n,r)&&!$c.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Xr,type:e,key:l,ref:o,props:i,_owner:_u.current}}function uh(e,n){return{$$typeof:Xr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Tu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function ah(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Da=/\/+/g;function Al(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ah(""+e.key):n.toString(36)}function Ti(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xr:case Xp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Al(o,0):r,Fa(i)?(t="",e!=null&&(t=e.replace(Da,"$&/")+"/"),Ti(i,n,t,"",function(s){return s})):i!=null&&(Tu(i)&&(i=uh(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Da,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Fa(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+Al(l,u);o+=Ti(l,n,t,a,i)}else if(a=oh(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+Al(l,u++),o+=Ti(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function li(e,n,t){if(e==null)return e;var r=[],i=0;return Ti(e,r,"","",function(l){return n.call(t,l,i++)}),r}function sh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},Ii={transition:null},ch={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Ii,ReactCurrentOwner:_u};function Bc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:li,forEach:function(e,n,t){li(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return li(e,function(){n++}),n},toArray:function(e){return li(e,function(n){return n})||[]},only:function(e){if(!Tu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=nr;B.Fragment=Jp;B.Profiler=Zp;B.PureComponent=Cu;B.StrictMode=Kp;B.Suspense=rh;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ch;B.act=Bc;B.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nc({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=_u.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)Rc.call(n,a)&&!$c.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:Xr,type:e.type,key:i,ref:l,props:r,_owner:o}};B.createContext=function(e){return e={$$typeof:nh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:eh,_context:e},e.Consumer=e};B.createElement=bc;B.createFactory=function(e){var n=bc.bind(null,e);return n.type=e,n};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:th,render:e}};B.isValidElement=Tu;B.lazy=function(e){return{$$typeof:lh,_payload:{_status:-1,_result:e},_init:sh}};B.memo=function(e,n){return{$$typeof:ih,type:e,compare:n===void 0?null:n}};B.startTransition=function(e){var n=Ii.transition;Ii.transition={};try{e()}finally{Ii.transition=n}};B.unstable_act=Bc;B.useCallback=function(e,n){return ze.current.useCallback(e,n)};B.useContext=function(e){return ze.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};B.useEffect=function(e,n){return ze.current.useEffect(e,n)};B.useId=function(){return ze.current.useId()};B.useImperativeHandle=function(e,n,t){return ze.current.useImperativeHandle(e,n,t)};B.useInsertionEffect=function(e,n){return ze.current.useInsertionEffect(e,n)};B.useLayoutEffect=function(e,n){return ze.current.useLayoutEffect(e,n)};B.useMemo=function(e,n){return ze.current.useMemo(e,n)};B.useReducer=function(e,n,t){return ze.current.useReducer(e,n,t)};B.useRef=function(e){return ze.current.useRef(e)};B.useState=function(e){return ze.current.useState(e)};B.useSyncExternalStore=function(e,n,t){return ze.current.useSyncExternalStore(e,n,t)};B.useTransition=function(){return ze.current.useTransition()};B.version="18.3.1";Fc.exports=B;var on=Fc.exports;const fh=Lc(on);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh=on,ph=Symbol.for("react.element"),hh=Symbol.for("react.fragment"),mh=Object.prototype.hasOwnProperty,gh=dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yh={key:!0,ref:!0,__self:!0,__source:!0};function Hc(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)mh.call(n,r)&&!yh.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:ph,type:e,key:l,ref:o,props:i,_owner:gh.current}}dl.Fragment=hh;dl.jsx=Hc;dl.jsxs=Hc;Ac.exports=dl;var A=Ac.exports,ko={},Vc={exports:{}},Qe={},Uc={exports:{}},Wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(L,R){var y=L.length;L.push(R);e:for(;0<y;){var Q=y-1>>>1,G=L[Q];if(0<i(G,R))L[Q]=R,L[y]=G,y=Q;else break e}}function t(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var R=L[0],y=L.pop();if(y!==R){L[0]=y;e:for(var Q=0,G=L.length,x=G>>>1;Q<x;){var pe=2*(Q+1)-1,tn=L[pe],ee=pe+1,hn=L[ee];if(0>i(tn,y))ee<G&&0>i(hn,tn)?(L[Q]=hn,L[ee]=y,Q=ee):(L[Q]=tn,L[pe]=y,Q=pe);else if(ee<G&&0>i(hn,y))L[Q]=hn,L[ee]=y,Q=ee;else break e}}return R}function i(L,R){var y=L.sortIndex-R.sortIndex;return y!==0?y:L.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],s=[],f=1,c=null,d=3,p=!1,k=!1,S=!1,I=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var R=t(s);R!==null;){if(R.callback===null)r(s);else if(R.startTime<=L)r(s),R.sortIndex=R.expirationTime,n(a,R);else break;R=t(s)}}function C(L){if(S=!1,g(L),!k)if(t(a)!==null)k=!0,fe(_);else{var R=t(s);R!==null&&se(C,R.startTime-L)}}function _(L,R){k=!1,S&&(S=!1,h(z),z=-1),p=!0;var y=d;try{for(g(R),c=t(a);c!==null&&(!(c.expirationTime>R)||L&&!F());){var Q=c.callback;if(typeof Q=="function"){c.callback=null,d=c.priorityLevel;var G=Q(c.expirationTime<=R);R=e.unstable_now(),typeof G=="function"?c.callback=G:c===t(a)&&r(a),g(R)}else r(a);c=t(a)}if(c!==null)var x=!0;else{var pe=t(s);pe!==null&&se(C,pe.startTime-R),x=!1}return x}finally{c=null,d=y,p=!1}}var v=!1,T=null,z=-1,O=5,w=-1;function F(){return!(e.unstable_now()-w<O)}function N(){if(T!==null){var L=e.unstable_now();w=L;var R=!0;try{R=T(!0,L)}finally{R?W():(v=!1,T=null)}}else v=!1}var W;if(typeof m=="function")W=function(){m(N)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,H=K.port2;K.port1.onmessage=N,W=function(){H.postMessage(null)}}else W=function(){I(N,0)};function fe(L){T=L,v||(v=!0,W())}function se(L,R){z=I(function(){L(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){k||p||(k=!0,fe(_))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(L){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var y=d;d=R;try{return L()}finally{d=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,R){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var y=d;d=L;try{return R()}finally{d=y}},e.unstable_scheduleCallback=function(L,R,y){var Q=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?Q+y:Q):y=Q,L){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=y+G,L={id:f++,callback:R,priorityLevel:L,startTime:y,expirationTime:G,sortIndex:-1},y>Q?(L.sortIndex=y,n(s,L),t(a)===null&&L===t(s)&&(S?(h(z),z=-1):S=!0,se(C,y-Q))):(L.sortIndex=G,n(a,L),k||p||(k=!0,fe(_))),L},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(L){var R=d;return function(){var y=d;d=R;try{return L.apply(this,arguments)}finally{d=y}}}})(Wc);Uc.exports=Wc;var kh=Uc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh=on,We=kh;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qc=new Set,Fr={};function St(e,n){qt(e,n),qt(e+"Capture",n)}function qt(e,n){for(Fr[e]=n,e=0;e<n.length;e++)Qc.add(n[e])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xo=Object.prototype.hasOwnProperty,vh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Na={},ja={};function wh(e){return xo.call(ja,e)?!0:xo.call(Na,e)?!1:vh.test(e)?ja[e]=!0:(Na[e]=!0,!1)}function Sh(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ch(e,n,t,r){if(n===null||typeof n>"u"||Sh(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Me(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];we[n]=new Me(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Iu=/[\-:]([a-z])/g;function Pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Iu,Pu);we[n]=new Me(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Iu,Pu);we[n]=new Me(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Iu,Pu);we[n]=new Me(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function zu(e,n,t,r){var i=we.hasOwnProperty(n)?we[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ch(n,t,i,r)&&(t=null),r||i===null?wh(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Fn=xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),zt=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Mu=Symbol.for("react.strict_mode"),vo=Symbol.for("react.profiler"),qc=Symbol.for("react.provider"),Yc=Symbol.for("react.context"),Lu=Symbol.for("react.forward_ref"),wo=Symbol.for("react.suspense"),So=Symbol.for("react.suspense_list"),Au=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),Gc=Symbol.for("react.offscreen"),Oa=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=Oa&&e[Oa]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,Fl;function yr(e){if(Fl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Fl=n&&n[1]||""}return`
`+Fl+e}var Dl=!1;function Nl(e,n){if(!e||Dl)return"";Dl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{Dl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?yr(e):""}function Eh(e){switch(e.tag){case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 2:case 15:return e=Nl(e.type,!1),e;case 11:return e=Nl(e.type.render,!1),e;case 1:return e=Nl(e.type,!0),e;default:return""}}function Co(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case zt:return"Portal";case vo:return"Profiler";case Mu:return"StrictMode";case wo:return"Suspense";case So:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yc:return(e.displayName||"Context")+".Consumer";case qc:return(e._context.displayName||"Context")+".Provider";case Lu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Au:return n=e.displayName||null,n!==null?n:Co(e.type)||"Memo";case $n:n=e._payload,e=e._init;try{return Co(e(n))}catch{}}return null}function _h(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Co(n);case 8:return n===Mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Th(e){var n=Xc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ui(e){e._valueTracker||(e._valueTracker=Th(e))}function Jc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Xc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Eo(e,n){var t=n.checked;return ue({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ra(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Zn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Kc(e,n){n=n.checked,n!=null&&zu(e,"checked",n,!1)}function _o(e,n){Kc(e,n);var t=Zn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?To(e,n.type,t):n.hasOwnProperty("defaultValue")&&To(e,n.type,Zn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $a(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function To(e,n,t){(n!=="number"||bi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var kr=Array.isArray;function Bt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Zn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Io(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return ue({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ba(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(kr(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Zn(t)}}function Zc(e,n){var t=Zn(n.value),r=Zn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ba(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ef(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Po(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ef(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ai,nf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Dr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ih=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){Ih.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Sr[n]=Sr[e]})});function tf(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+n).trim():n+"px"}function rf(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=tf(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Ph=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zo(e,n){if(n){if(Ph[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function Mo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lo=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ao=null,Ht=null,Vt=null;function Ha(e){if(e=Zr(e)){if(typeof Ao!="function")throw Error(P(280));var n=e.stateNode;n&&(n=yl(n),Ao(e.stateNode,e.type,n))}}function lf(e){Ht?Vt?Vt.push(e):Vt=[e]:Ht=e}function of(){if(Ht){var e=Ht,n=Vt;if(Vt=Ht=null,Ha(e),n)for(e=0;e<n.length;e++)Ha(n[e])}}function uf(e,n){return e(n)}function af(){}var jl=!1;function sf(e,n,t){if(jl)return e(n,t);jl=!0;try{return uf(e,n,t)}finally{jl=!1,(Ht!==null||Vt!==null)&&(af(),of())}}function Nr(e,n){var t=e.stateNode;if(t===null)return null;var r=yl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Fo=!1;if(zn)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Fo=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Fo=!1}function zh(e,n,t,r,i,l,o,u,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(f){this.onError(f)}}var Cr=!1,Bi=null,Hi=!1,Do=null,Mh={onError:function(e){Cr=!0,Bi=e}};function Lh(e,n,t,r,i,l,o,u,a){Cr=!1,Bi=null,zh.apply(Mh,arguments)}function Ah(e,n,t,r,i,l,o,u,a){if(Lh.apply(this,arguments),Cr){if(Cr){var s=Bi;Cr=!1,Bi=null}else throw Error(P(198));Hi||(Hi=!0,Do=s)}}function Ct(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function cf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Va(e){if(Ct(e)!==e)throw Error(P(188))}function Fh(e){var n=e.alternate;if(!n){if(n=Ct(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Va(i),e;if(l===r)return Va(i),n;l=l.sibling}throw Error(P(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function ff(e){return e=Fh(e),e!==null?df(e):null}function df(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=df(e);if(n!==null)return n;e=e.sibling}return null}var pf=We.unstable_scheduleCallback,Ua=We.unstable_cancelCallback,Dh=We.unstable_shouldYield,Nh=We.unstable_requestPaint,ce=We.unstable_now,jh=We.unstable_getCurrentPriorityLevel,Du=We.unstable_ImmediatePriority,hf=We.unstable_UserBlockingPriority,Vi=We.unstable_NormalPriority,Oh=We.unstable_LowPriority,mf=We.unstable_IdlePriority,pl=null,xn=null;function Rh(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(pl,e,void 0,(e.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:Bh,$h=Math.log,bh=Math.LN2;function Bh(e){return e>>>=0,e===0?32:31-($h(e)/bh|0)|0}var si=64,ci=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ui(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=xr(u):(l&=o,l!==0&&(r=xr(l)))}else o=t&~i,o!==0?r=xr(o):l!==0&&(r=xr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-cn(n),i=1<<t,r|=e[t],n&=~i;return r}function Hh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-cn(l),u=1<<o,a=i[o];a===-1?(!(u&t)||u&r)&&(i[o]=Hh(u,n)):a<=n&&(e.expiredLanes|=u),l&=~u}}function No(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gf(){var e=si;return si<<=1,!(si&4194240)&&(si=64),e}function Ol(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Jr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-cn(n),e[n]=t}function Uh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-cn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Nu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-cn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var Y=0;function yf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var kf,ju,xf,vf,wf,jo=!1,fi=[],Wn=null,Qn=null,qn=null,jr=new Map,Or=new Map,Bn=[],Wh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wa(e,n){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":jr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(n.pointerId)}}function ar(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Zr(n),n!==null&&ju(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Qh(e,n,t,r,i){switch(n){case"focusin":return Wn=ar(Wn,e,n,t,r,i),!0;case"dragenter":return Qn=ar(Qn,e,n,t,r,i),!0;case"mouseover":return qn=ar(qn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return jr.set(l,ar(jr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Or.set(l,ar(Or.get(l)||null,e,n,t,r,i)),!0}return!1}function Sf(e){var n=ft(e.target);if(n!==null){var t=Ct(n);if(t!==null){if(n=t.tag,n===13){if(n=cf(t),n!==null){e.blockedOn=n,wf(e.priority,function(){xf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Oo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Lo=r,t.target.dispatchEvent(r),Lo=null}else return n=Zr(t),n!==null&&ju(n),e.blockedOn=t,!1;n.shift()}return!0}function Qa(e,n,t){Pi(e)&&t.delete(n)}function qh(){jo=!1,Wn!==null&&Pi(Wn)&&(Wn=null),Qn!==null&&Pi(Qn)&&(Qn=null),qn!==null&&Pi(qn)&&(qn=null),jr.forEach(Qa),Or.forEach(Qa)}function sr(e,n){e.blockedOn===n&&(e.blockedOn=null,jo||(jo=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,qh)))}function Rr(e){function n(i){return sr(i,e)}if(0<fi.length){sr(fi[0],e);for(var t=1;t<fi.length;t++){var r=fi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Wn!==null&&sr(Wn,e),Qn!==null&&sr(Qn,e),qn!==null&&sr(qn,e),jr.forEach(n),Or.forEach(n),t=0;t<Bn.length;t++)r=Bn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bn.length&&(t=Bn[0],t.blockedOn===null);)Sf(t),t.blockedOn===null&&Bn.shift()}var Ut=Fn.ReactCurrentBatchConfig,Wi=!0;function Yh(e,n,t,r){var i=Y,l=Ut.transition;Ut.transition=null;try{Y=1,Ou(e,n,t,r)}finally{Y=i,Ut.transition=l}}function Gh(e,n,t,r){var i=Y,l=Ut.transition;Ut.transition=null;try{Y=4,Ou(e,n,t,r)}finally{Y=i,Ut.transition=l}}function Ou(e,n,t,r){if(Wi){var i=Oo(e,n,t,r);if(i===null)ql(e,n,r,Qi,t),Wa(e,r);else if(Qh(i,e,n,t,r))r.stopPropagation();else if(Wa(e,r),n&4&&-1<Wh.indexOf(e)){for(;i!==null;){var l=Zr(i);if(l!==null&&kf(l),l=Oo(e,n,t,r),l===null&&ql(e,n,r,Qi,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else ql(e,n,r,null,t)}}var Qi=null;function Oo(e,n,t,r){if(Qi=null,e=Fu(r),e=ft(e),e!==null)if(n=Ct(e),n===null)e=null;else if(t=n.tag,t===13){if(e=cf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Qi=e,null}function Cf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jh()){case Du:return 1;case hf:return 4;case Vi:case Oh:return 16;case mf:return 536870912;default:return 16}default:return 16}}var Vn=null,Ru=null,zi=null;function Ef(){if(zi)return zi;var e,n=Ru,t=n.length,r,i="value"in Vn?Vn.value:Vn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return zi=i.slice(e,1<r?1-r:void 0)}function Mi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function qa(){return!1}function qe(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?di:qa,this.isPropagationStopped=qa,this}return ue(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$u=qe(tr),Kr=ue({},tr,{view:0,detail:0}),Xh=qe(Kr),Rl,$l,cr,hl=ue({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(Rl=e.screenX-cr.screenX,$l=e.screenY-cr.screenY):$l=Rl=0,cr=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),Ya=qe(hl),Jh=ue({},hl,{dataTransfer:0}),Kh=qe(Jh),Zh=ue({},Kr,{relatedTarget:0}),bl=qe(Zh),em=ue({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),nm=qe(em),tm=ue({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rm=qe(tm),im=ue({},tr,{data:0}),Ga=qe(im),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},om={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},um={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=um[e])?!!n[e]:!1}function bu(){return am}var sm=ue({},Kr,{key:function(e){if(e.key){var n=lm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?om[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cm=qe(sm),fm=ue({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xa=qe(fm),dm=ue({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),pm=qe(dm),hm=ue({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mm=qe(hm),gm=ue({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ym=qe(gm),km=[9,13,27,32],Bu=zn&&"CompositionEvent"in window,Er=null;zn&&"documentMode"in document&&(Er=document.documentMode);var xm=zn&&"TextEvent"in window&&!Er,_f=zn&&(!Bu||Er&&8<Er&&11>=Er),Ja=" ",Ka=!1;function Tf(e,n){switch(e){case"keyup":return km.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lt=!1;function vm(e,n){switch(e){case"compositionend":return If(n);case"keypress":return n.which!==32?null:(Ka=!0,Ja);case"textInput":return e=n.data,e===Ja&&Ka?null:e;default:return null}}function wm(e,n){if(Lt)return e==="compositionend"||!Bu&&Tf(e,n)?(e=Ef(),zi=Ru=Vn=null,Lt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _f&&n.locale!=="ko"?null:n.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Za(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sm[e.type]:n==="textarea"}function Pf(e,n,t,r){lf(r),n=qi(n,"onChange"),0<n.length&&(t=new $u("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var _r=null,$r=null;function Cm(e){$f(e,0)}function ml(e){var n=Dt(e);if(Jc(n))return e}function Em(e,n){if(e==="change")return n}var zf=!1;if(zn){var Bl;if(zn){var Hl="oninput"in document;if(!Hl){var es=document.createElement("div");es.setAttribute("oninput","return;"),Hl=typeof es.oninput=="function"}Bl=Hl}else Bl=!1;zf=Bl&&(!document.documentMode||9<document.documentMode)}function ns(){_r&&(_r.detachEvent("onpropertychange",Mf),$r=_r=null)}function Mf(e){if(e.propertyName==="value"&&ml($r)){var n=[];Pf(n,$r,e,Fu(e)),sf(Cm,n)}}function _m(e,n,t){e==="focusin"?(ns(),_r=n,$r=t,_r.attachEvent("onpropertychange",Mf)):e==="focusout"&&ns()}function Tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml($r)}function Im(e,n){if(e==="click")return ml(n)}function Pm(e,n){if(e==="input"||e==="change")return ml(n)}function zm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var pn=typeof Object.is=="function"?Object.is:zm;function br(e,n){if(pn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!xo.call(n,i)||!pn(e[i],n[i]))return!1}return!0}function ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rs(e,n){var t=ts(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ts(t)}}function Lf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Lf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Af(){for(var e=window,n=bi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=bi(e.document)}return n}function Hu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Mm(e){var n=Af(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Lf(t.ownerDocument.documentElement,t)){if(r!==null&&Hu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=rs(t,l);var o=rs(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lm=zn&&"documentMode"in document&&11>=document.documentMode,At=null,Ro=null,Tr=null,$o=!1;function is(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$o||At==null||At!==bi(r)||(r=At,"selectionStart"in r&&Hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&br(Tr,r)||(Tr=r,r=qi(Ro,"onSelect"),0<r.length&&(n=new $u("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=At)))}function pi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ft={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},Vl={},Ff={};zn&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function gl(e){if(Vl[e])return Vl[e];if(!Ft[e])return e;var n=Ft[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ff)return Vl[e]=n[t];return e}var Df=gl("animationend"),Nf=gl("animationiteration"),jf=gl("animationstart"),Of=gl("transitionend"),Rf=new Map,ls="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tt(e,n){Rf.set(e,n),St(n,[e])}for(var Ul=0;Ul<ls.length;Ul++){var Wl=ls[Ul],Am=Wl.toLowerCase(),Fm=Wl[0].toUpperCase()+Wl.slice(1);tt(Am,"on"+Fm)}tt(Df,"onAnimationEnd");tt(Nf,"onAnimationIteration");tt(jf,"onAnimationStart");tt("dblclick","onDoubleClick");tt("focusin","onFocus");tt("focusout","onBlur");tt(Of,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);St("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));St("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));St("onBeforeInput",["compositionend","keypress","textInput","paste"]);St("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));St("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));St("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dm=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function os(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Ah(r,n,void 0,e),e.currentTarget=null}function $f(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==l&&i.isPropagationStopped())break e;os(i,u,s),l=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e;os(i,u,s),l=a}}}if(Hi)throw e=Do,Hi=!1,Do=null,e}function ne(e,n){var t=n[Uo];t===void 0&&(t=n[Uo]=new Set);var r=e+"__bubble";t.has(r)||(bf(n,e,2,!1),t.add(r))}function Ql(e,n,t){var r=0;n&&(r|=4),bf(t,e,r,n)}var hi="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[hi]){e[hi]=!0,Qc.forEach(function(t){t!=="selectionchange"&&(Dm.has(t)||Ql(t,!1,e),Ql(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[hi]||(n[hi]=!0,Ql("selectionchange",!1,n))}}function bf(e,n,t,r){switch(Cf(n)){case 1:var i=Yh;break;case 4:i=Gh;break;default:i=Ou}t=i.bind(null,n,t,e),i=void 0,!Fo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function ql(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;u!==null;){if(o=ft(u),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}u=u.parentNode}}r=r.return}sf(function(){var s=l,f=Fu(t),c=[];e:{var d=Rf.get(e);if(d!==void 0){var p=$u,k=e;switch(e){case"keypress":if(Mi(t)===0)break e;case"keydown":case"keyup":p=cm;break;case"focusin":k="focus",p=bl;break;case"focusout":k="blur",p=bl;break;case"beforeblur":case"afterblur":p=bl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pm;break;case Df:case Nf:case jf:p=nm;break;case Of:p=mm;break;case"scroll":p=Xh;break;case"wheel":p=ym;break;case"copy":case"cut":case"paste":p=rm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xa}var S=(n&4)!==0,I=!S&&e==="scroll",h=S?d!==null?d+"Capture":null:d;S=[];for(var m=s,g;m!==null;){g=m;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,h!==null&&(C=Nr(m,h),C!=null&&S.push(Hr(m,C,g)))),I)break;m=m.return}0<S.length&&(d=new p(d,k,null,t,f),c.push({event:d,listeners:S}))}}if(!(n&7)){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&t!==Lo&&(k=t.relatedTarget||t.fromElement)&&(ft(k)||k[Mn]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(k=t.relatedTarget||t.toElement,p=s,k=k?ft(k):null,k!==null&&(I=Ct(k),k!==I||k.tag!==5&&k.tag!==6)&&(k=null)):(p=null,k=s),p!==k)){if(S=Ya,C="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=Xa,C="onPointerLeave",h="onPointerEnter",m="pointer"),I=p==null?d:Dt(p),g=k==null?d:Dt(k),d=new S(C,m+"leave",p,t,f),d.target=I,d.relatedTarget=g,C=null,ft(f)===s&&(S=new S(h,m+"enter",k,t,f),S.target=g,S.relatedTarget=I,C=S),I=C,p&&k)n:{for(S=p,h=k,m=0,g=S;g;g=It(g))m++;for(g=0,C=h;C;C=It(C))g++;for(;0<m-g;)S=It(S),m--;for(;0<g-m;)h=It(h),g--;for(;m--;){if(S===h||h!==null&&S===h.alternate)break n;S=It(S),h=It(h)}S=null}else S=null;p!==null&&us(c,d,p,S,!1),k!==null&&I!==null&&us(c,I,k,S,!0)}}e:{if(d=s?Dt(s):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var _=Em;else if(Za(d))if(zf)_=Pm;else{_=Tm;var v=_m}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(_=Im);if(_&&(_=_(e,s))){Pf(c,_,t,f);break e}v&&v(e,d,s),e==="focusout"&&(v=d._wrapperState)&&v.controlled&&d.type==="number"&&To(d,"number",d.value)}switch(v=s?Dt(s):window,e){case"focusin":(Za(v)||v.contentEditable==="true")&&(At=v,Ro=s,Tr=null);break;case"focusout":Tr=Ro=At=null;break;case"mousedown":$o=!0;break;case"contextmenu":case"mouseup":case"dragend":$o=!1,is(c,t,f);break;case"selectionchange":if(Lm)break;case"keydown":case"keyup":is(c,t,f)}var T;if(Bu)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Lt?Tf(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(_f&&t.locale!=="ko"&&(Lt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Lt&&(T=Ef()):(Vn=f,Ru="value"in Vn?Vn.value:Vn.textContent,Lt=!0)),v=qi(s,z),0<v.length&&(z=new Ga(z,e,null,t,f),c.push({event:z,listeners:v}),T?z.data=T:(T=If(t),T!==null&&(z.data=T)))),(T=xm?vm(e,t):wm(e,t))&&(s=qi(s,"onBeforeInput"),0<s.length&&(f=new Ga("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:s}),f.data=T))}$f(c,n)})}function Hr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function qi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Nr(e,t),l!=null&&r.unshift(Hr(e,l,i)),l=Nr(e,n),l!=null&&r.push(Hr(e,l,i))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function us(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=Nr(t,l),a!=null&&o.unshift(Hr(t,a,u))):i||(a=Nr(t,l),a!=null&&o.push(Hr(t,a,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Nm=/\r\n?/g,jm=/\u0000|\uFFFD/g;function as(e){return(typeof e=="string"?e:""+e).replace(Nm,`
`).replace(jm,"")}function mi(e,n,t){if(n=as(n),as(e)!==n&&t)throw Error(P(425))}function Yi(){}var bo=null,Bo=null;function Ho(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vo=typeof setTimeout=="function"?setTimeout:void 0,Om=typeof clearTimeout=="function"?clearTimeout:void 0,ss=typeof Promise=="function"?Promise:void 0,Rm=typeof queueMicrotask=="function"?queueMicrotask:typeof ss<"u"?function(e){return ss.resolve(null).then(e).catch($m)}:Vo;function $m(e){setTimeout(function(){throw e})}function Yl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Rr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Rr(n)}function Yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function cs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),kn="__reactFiber$"+rr,Vr="__reactProps$"+rr,Mn="__reactContainer$"+rr,Uo="__reactEvents$"+rr,bm="__reactListeners$"+rr,Bm="__reactHandles$"+rr;function ft(e){var n=e[kn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Mn]||t[kn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=cs(e);e!==null;){if(t=e[kn])return t;e=cs(e)}return n}e=t,t=e.parentNode}return null}function Zr(e){return e=e[kn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function yl(e){return e[Vr]||null}var Wo=[],Nt=-1;function rt(e){return{current:e}}function te(e){0>Nt||(e.current=Wo[Nt],Wo[Nt]=null,Nt--)}function Z(e,n){Nt++,Wo[Nt]=e.current,e.current=n}var et={},_e=rt(et),Ne=rt(!1),gt=et;function Yt(e,n){var t=e.type.contextTypes;if(!t)return et;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function Gi(){te(Ne),te(_e)}function fs(e,n,t){if(_e.current!==et)throw Error(P(168));Z(_e,n),Z(Ne,t)}function Bf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(P(108,_h(e)||"Unknown",i));return ue({},t,r)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||et,gt=_e.current,Z(_e,e),Z(Ne,Ne.current),!0}function ds(e,n,t){var r=e.stateNode;if(!r)throw Error(P(169));t?(e=Bf(e,n,gt),r.__reactInternalMemoizedMergedChildContext=e,te(Ne),te(_e),Z(_e,e)):te(Ne),Z(Ne,t)}var _n=null,kl=!1,Gl=!1;function Hf(e){_n===null?_n=[e]:_n.push(e)}function Hm(e){kl=!0,Hf(e)}function it(){if(!Gl&&_n!==null){Gl=!0;var e=0,n=Y;try{var t=_n;for(Y=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}_n=null,kl=!1}catch(i){throw _n!==null&&(_n=_n.slice(e+1)),pf(Du,it),i}finally{Y=n,Gl=!1}}return null}var jt=[],Ot=0,Ji=null,Ki=0,Ye=[],Ge=0,yt=null,Tn=1,In="";function st(e,n){jt[Ot++]=Ki,jt[Ot++]=Ji,Ji=e,Ki=n}function Vf(e,n,t){Ye[Ge++]=Tn,Ye[Ge++]=In,Ye[Ge++]=yt,yt=e;var r=Tn;e=In;var i=32-cn(r)-1;r&=~(1<<i),t+=1;var l=32-cn(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-cn(n)+i|t<<i|r,In=l+e}else Tn=1<<l|t<<i|r,In=e}function Vu(e){e.return!==null&&(st(e,1),Vf(e,1,0))}function Uu(e){for(;e===Ji;)Ji=jt[--Ot],jt[Ot]=null,Ki=jt[--Ot],jt[Ot]=null;for(;e===yt;)yt=Ye[--Ge],Ye[Ge]=null,In=Ye[--Ge],Ye[Ge]=null,Tn=Ye[--Ge],Ye[Ge]=null}var Ve=null,He=null,re=!1,sn=null;function Uf(e,n){var t=Je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ps(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ve=e,He=Yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ve=e,He=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=yt!==null?{id:Tn,overflow:In}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ve=e,He=null,!0):!1;default:return!1}}function Qo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qo(e){if(re){var n=He;if(n){var t=n;if(!ps(e,n)){if(Qo(e))throw Error(P(418));n=Yn(t.nextSibling);var r=Ve;n&&ps(e,n)?Uf(r,t):(e.flags=e.flags&-4097|2,re=!1,Ve=e)}}else{if(Qo(e))throw Error(P(418));e.flags=e.flags&-4097|2,re=!1,Ve=e}}}function hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function gi(e){if(e!==Ve)return!1;if(!re)return hs(e),re=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ho(e.type,e.memoizedProps)),n&&(n=He)){if(Qo(e))throw Wf(),Error(P(418));for(;n;)Uf(e,n),n=Yn(n.nextSibling)}if(hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){He=Yn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}He=null}}else He=Ve?Yn(e.stateNode.nextSibling):null;return!0}function Wf(){for(var e=He;e;)e=Yn(e.nextSibling)}function Gt(){He=Ve=null,re=!1}function Wu(e){sn===null?sn=[e]:sn.push(e)}var Vm=Fn.ReactCurrentBatchConfig;function fr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function yi(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ms(e){var n=e._init;return n(e._payload)}function Qf(e){function n(h,m){if(e){var g=h.deletions;g===null?(h.deletions=[m],h.flags|=16):g.push(m)}}function t(h,m){if(!e)return null;for(;m!==null;)n(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=Kn(h,m),h.index=0,h.sibling=null,h}function l(h,m,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<m?(h.flags|=2,m):g):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,m,g,C){return m===null||m.tag!==6?(m=to(g,h.mode,C),m.return=h,m):(m=i(m,g),m.return=h,m)}function a(h,m,g,C){var _=g.type;return _===Mt?f(h,m,g.props.children,C,g.key):m!==null&&(m.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===$n&&ms(_)===m.type)?(C=i(m,g.props),C.ref=fr(h,m,g),C.return=h,C):(C=Oi(g.type,g.key,g.props,null,h.mode,C),C.ref=fr(h,m,g),C.return=h,C)}function s(h,m,g,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=ro(g,h.mode,C),m.return=h,m):(m=i(m,g.children||[]),m.return=h,m)}function f(h,m,g,C,_){return m===null||m.tag!==7?(m=mt(g,h.mode,C,_),m.return=h,m):(m=i(m,g),m.return=h,m)}function c(h,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=to(""+m,h.mode,g),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oi:return g=Oi(m.type,m.key,m.props,null,h.mode,g),g.ref=fr(h,null,m),g.return=h,g;case zt:return m=ro(m,h.mode,g),m.return=h,m;case $n:var C=m._init;return c(h,C(m._payload),g)}if(kr(m)||or(m))return m=mt(m,h.mode,g,null),m.return=h,m;yi(h,m)}return null}function d(h,m,g,C){var _=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:u(h,m,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oi:return g.key===_?a(h,m,g,C):null;case zt:return g.key===_?s(h,m,g,C):null;case $n:return _=g._init,d(h,m,_(g._payload),C)}if(kr(g)||or(g))return _!==null?null:f(h,m,g,C,null);yi(h,g)}return null}function p(h,m,g,C,_){if(typeof C=="string"&&C!==""||typeof C=="number")return h=h.get(g)||null,u(m,h,""+C,_);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case oi:return h=h.get(C.key===null?g:C.key)||null,a(m,h,C,_);case zt:return h=h.get(C.key===null?g:C.key)||null,s(m,h,C,_);case $n:var v=C._init;return p(h,m,g,v(C._payload),_)}if(kr(C)||or(C))return h=h.get(g)||null,f(m,h,C,_,null);yi(m,C)}return null}function k(h,m,g,C){for(var _=null,v=null,T=m,z=m=0,O=null;T!==null&&z<g.length;z++){T.index>z?(O=T,T=null):O=T.sibling;var w=d(h,T,g[z],C);if(w===null){T===null&&(T=O);break}e&&T&&w.alternate===null&&n(h,T),m=l(w,m,z),v===null?_=w:v.sibling=w,v=w,T=O}if(z===g.length)return t(h,T),re&&st(h,z),_;if(T===null){for(;z<g.length;z++)T=c(h,g[z],C),T!==null&&(m=l(T,m,z),v===null?_=T:v.sibling=T,v=T);return re&&st(h,z),_}for(T=r(h,T);z<g.length;z++)O=p(T,h,z,g[z],C),O!==null&&(e&&O.alternate!==null&&T.delete(O.key===null?z:O.key),m=l(O,m,z),v===null?_=O:v.sibling=O,v=O);return e&&T.forEach(function(F){return n(h,F)}),re&&st(h,z),_}function S(h,m,g,C){var _=or(g);if(typeof _!="function")throw Error(P(150));if(g=_.call(g),g==null)throw Error(P(151));for(var v=_=null,T=m,z=m=0,O=null,w=g.next();T!==null&&!w.done;z++,w=g.next()){T.index>z?(O=T,T=null):O=T.sibling;var F=d(h,T,w.value,C);if(F===null){T===null&&(T=O);break}e&&T&&F.alternate===null&&n(h,T),m=l(F,m,z),v===null?_=F:v.sibling=F,v=F,T=O}if(w.done)return t(h,T),re&&st(h,z),_;if(T===null){for(;!w.done;z++,w=g.next())w=c(h,w.value,C),w!==null&&(m=l(w,m,z),v===null?_=w:v.sibling=w,v=w);return re&&st(h,z),_}for(T=r(h,T);!w.done;z++,w=g.next())w=p(T,h,z,w.value,C),w!==null&&(e&&w.alternate!==null&&T.delete(w.key===null?z:w.key),m=l(w,m,z),v===null?_=w:v.sibling=w,v=w);return e&&T.forEach(function(N){return n(h,N)}),re&&st(h,z),_}function I(h,m,g,C){if(typeof g=="object"&&g!==null&&g.type===Mt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case oi:e:{for(var _=g.key,v=m;v!==null;){if(v.key===_){if(_=g.type,_===Mt){if(v.tag===7){t(h,v.sibling),m=i(v,g.props.children),m.return=h,h=m;break e}}else if(v.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===$n&&ms(_)===v.type){t(h,v.sibling),m=i(v,g.props),m.ref=fr(h,v,g),m.return=h,h=m;break e}t(h,v);break}else n(h,v);v=v.sibling}g.type===Mt?(m=mt(g.props.children,h.mode,C,g.key),m.return=h,h=m):(C=Oi(g.type,g.key,g.props,null,h.mode,C),C.ref=fr(h,m,g),C.return=h,h=C)}return o(h);case zt:e:{for(v=g.key;m!==null;){if(m.key===v)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){t(h,m.sibling),m=i(m,g.children||[]),m.return=h,h=m;break e}else{t(h,m);break}else n(h,m);m=m.sibling}m=ro(g,h.mode,C),m.return=h,h=m}return o(h);case $n:return v=g._init,I(h,m,v(g._payload),C)}if(kr(g))return k(h,m,g,C);if(or(g))return S(h,m,g,C);yi(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(t(h,m.sibling),m=i(m,g),m.return=h,h=m):(t(h,m),m=to(g,h.mode,C),m.return=h,h=m),o(h)):t(h,m)}return I}var Xt=Qf(!0),qf=Qf(!1),Zi=rt(null),el=null,Rt=null,Qu=null;function qu(){Qu=Rt=el=null}function Yu(e){var n=Zi.current;te(Zi),e._currentValue=n}function Yo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Wt(e,n){el=e,Qu=Rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Fe=!0),e.firstContext=null)}function en(e){var n=e._currentValue;if(Qu!==e)if(e={context:e,memoizedValue:n,next:null},Rt===null){if(el===null)throw Error(P(308));Rt=e,el.dependencies={lanes:0,firstContext:e}}else Rt=Rt.next=e;return n}var dt=null;function Gu(e){dt===null?dt=[e]:dt.push(e)}function Yf(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Gu(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ln(e,r)}function Ln(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var bn=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Gn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ln(e,t)}return i=r.interleaved,i===null?(n.next=n,Gu(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ln(e,t)}function Li(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Nu(e,t)}}function gs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function nl(e,n,t,r){var i=e.updateQueue;bn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,o===null?l=s:o.next=s,o=a;var f=e.alternate;f!==null&&(f=f.updateQueue,u=f.lastBaseUpdate,u!==o&&(u===null?f.firstBaseUpdate=s:u.next=s,f.lastBaseUpdate=a))}if(l!==null){var c=i.baseState;o=0,f=s=a=null,u=l;do{var d=u.lane,p=u.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var k=e,S=u;switch(d=n,p=t,S.tag){case 1:if(k=S.payload,typeof k=="function"){c=k.call(p,c,d);break e}c=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=S.payload,d=typeof k=="function"?k.call(p,c,d):k,d==null)break e;c=ue({},c,d);break e;case 2:bn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[u]:d.push(u))}else p={eventTime:p,lane:d,tag:u.tag,payload:u.payload,callback:u.callback,next:null},f===null?(s=f=p,a=c):f=f.next=p,o|=d;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;d=u,u=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(a=c),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);xt|=o,e.lanes=o,e.memoizedState=c}}function ys(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var ei={},vn=rt(ei),Ur=rt(ei),Wr=rt(ei);function pt(e){if(e===ei)throw Error(P(174));return e}function Ju(e,n){switch(Z(Wr,n),Z(Ur,e),Z(vn,ei),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Po(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Po(n,e)}te(vn),Z(vn,n)}function Jt(){te(vn),te(Ur),te(Wr)}function Xf(e){pt(Wr.current);var n=pt(vn.current),t=Po(n,e.type);n!==t&&(Z(Ur,e),Z(vn,t))}function Ku(e){Ur.current===e&&(te(vn),te(Ur))}var ie=rt(0);function tl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xl=[];function Zu(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var Ai=Fn.ReactCurrentDispatcher,Jl=Fn.ReactCurrentBatchConfig,kt=0,oe=null,he=null,ge=null,rl=!1,Ir=!1,Qr=0,Um=0;function Se(){throw Error(P(321))}function ea(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!pn(e[t],n[t]))return!1;return!0}function na(e,n,t,r,i,l){if(kt=l,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ai.current=e===null||e.memoizedState===null?Ym:Gm,e=t(r,i),Ir){l=0;do{if(Ir=!1,Qr=0,25<=l)throw Error(P(301));l+=1,ge=he=null,n.updateQueue=null,Ai.current=Xm,e=t(r,i)}while(Ir)}if(Ai.current=il,n=he!==null&&he.next!==null,kt=0,ge=he=oe=null,rl=!1,n)throw Error(P(300));return e}function ta(){var e=Qr!==0;return Qr=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?oe.memoizedState=ge=e:ge=ge.next=e,ge}function nn(){if(he===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var n=ge===null?oe.memoizedState:ge.next;if(n!==null)ge=n,he=e;else{if(e===null)throw Error(P(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ge===null?oe.memoizedState=ge=e:ge=ge.next=e}return ge}function qr(e,n){return typeof n=="function"?n(e):n}function Kl(e){var n=nn(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=he,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,a=null,s=l;do{var f=s.lane;if((kt&f)===f)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var c={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=c,o=r):a=a.next=c,oe.lanes|=f,xt|=f}s=s.next}while(s!==null&&s!==l);a===null?o=r:a.next=u,pn(r,n.memoizedState)||(Fe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,oe.lanes|=l,xt|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Zl(e){var n=nn(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);pn(l,n.memoizedState)||(Fe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Jf(){}function Kf(e,n){var t=oe,r=nn(),i=n(),l=!pn(r.memoizedState,i);if(l&&(r.memoizedState=i,Fe=!0),r=r.queue,ra(nd.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||ge!==null&&ge.memoizedState.tag&1){if(t.flags|=2048,Yr(9,ed.bind(null,t,r,i,n),void 0,null),ye===null)throw Error(P(349));kt&30||Zf(t,n,i)}return i}function Zf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=oe.updateQueue,n===null?(n={lastEffect:null,stores:null},oe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ed(e,n,t,r){n.value=t,n.getSnapshot=r,td(n)&&rd(e)}function nd(e,n,t){return t(function(){td(n)&&rd(e)})}function td(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!pn(e,t)}catch{return!0}}function rd(e){var n=Ln(e,1);n!==null&&fn(n,e,1,-1)}function ks(e){var n=gn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:e},n.queue=e,e=e.dispatch=qm.bind(null,oe,e),[n.memoizedState,e]}function Yr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=oe.updateQueue,n===null?(n={lastEffect:null,stores:null},oe.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function id(){return nn().memoizedState}function Fi(e,n,t,r){var i=gn();oe.flags|=e,i.memoizedState=Yr(1|n,t,void 0,r===void 0?null:r)}function xl(e,n,t,r){var i=nn();r=r===void 0?null:r;var l=void 0;if(he!==null){var o=he.memoizedState;if(l=o.destroy,r!==null&&ea(r,o.deps)){i.memoizedState=Yr(n,t,l,r);return}}oe.flags|=e,i.memoizedState=Yr(1|n,t,l,r)}function xs(e,n){return Fi(8390656,8,e,n)}function ra(e,n){return xl(2048,8,e,n)}function ld(e,n){return xl(4,2,e,n)}function od(e,n){return xl(4,4,e,n)}function ud(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ad(e,n,t){return t=t!=null?t.concat([e]):null,xl(4,4,ud.bind(null,n,e),t)}function ia(){}function sd(e,n){var t=nn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ea(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function cd(e,n){var t=nn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ea(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function fd(e,n,t){return kt&21?(pn(t,n)||(t=gf(),oe.lanes|=t,xt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=t)}function Wm(e,n){var t=Y;Y=t!==0&&4>t?t:4,e(!0);var r=Jl.transition;Jl.transition={};try{e(!1),n()}finally{Y=t,Jl.transition=r}}function dd(){return nn().memoizedState}function Qm(e,n,t){var r=Jn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},pd(e))hd(n,t);else if(t=Yf(e,n,t,r),t!==null){var i=Pe();fn(t,e,r,i),md(t,n,r)}}function qm(e,n,t){var r=Jn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(pd(e))hd(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,pn(u,o)){var a=n.interleaved;a===null?(i.next=i,Gu(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=Yf(e,n,i,r),t!==null&&(i=Pe(),fn(t,e,r,i),md(t,n,r))}}function pd(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function hd(e,n){Ir=rl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function md(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Nu(e,t)}}var il={readContext:en,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Ym={readContext:en,useCallback:function(e,n){return gn().memoizedState=[e,n===void 0?null:n],e},useContext:en,useEffect:xs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Fi(4194308,4,ud.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Fi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Fi(4,2,e,n)},useMemo:function(e,n){var t=gn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=gn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Qm.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var n=gn();return e={current:e},n.memoizedState=e},useState:ks,useDebugValue:ia,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=ks(!1),n=e[0];return e=Wm.bind(null,e[1]),gn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=oe,i=gn();if(re){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),ye===null)throw Error(P(349));kt&30||Zf(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,xs(nd.bind(null,r,l,e),[e]),r.flags|=2048,Yr(9,ed.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=gn(),n=ye.identifierPrefix;if(re){var t=In,r=Tn;t=(r&~(1<<32-cn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Qr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Um++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Gm={readContext:en,useCallback:sd,useContext:en,useEffect:ra,useImperativeHandle:ad,useInsertionEffect:ld,useLayoutEffect:od,useMemo:cd,useReducer:Kl,useRef:id,useState:function(){return Kl(qr)},useDebugValue:ia,useDeferredValue:function(e){var n=nn();return fd(n,he.memoizedState,e)},useTransition:function(){var e=Kl(qr)[0],n=nn().memoizedState;return[e,n]},useMutableSource:Jf,useSyncExternalStore:Kf,useId:dd,unstable_isNewReconciler:!1},Xm={readContext:en,useCallback:sd,useContext:en,useEffect:ra,useImperativeHandle:ad,useInsertionEffect:ld,useLayoutEffect:od,useMemo:cd,useReducer:Zl,useRef:id,useState:function(){return Zl(qr)},useDebugValue:ia,useDeferredValue:function(e){var n=nn();return he===null?n.memoizedState=e:fd(n,he.memoizedState,e)},useTransition:function(){var e=Zl(qr)[0],n=nn().memoizedState;return[e,n]},useMutableSource:Jf,useSyncExternalStore:Kf,useId:dd,unstable_isNewReconciler:!1};function un(e,n){if(e&&e.defaultProps){n=ue({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Go(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ue({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var vl={isMounted:function(e){return(e=e._reactInternals)?Ct(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Pe(),i=Jn(e),l=Pn(r,i);l.payload=n,t!=null&&(l.callback=t),n=Gn(e,l,i),n!==null&&(fn(n,e,i,r),Li(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Pe(),i=Jn(e),l=Pn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Gn(e,l,i),n!==null&&(fn(n,e,i,r),Li(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Pe(),r=Jn(e),i=Pn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Gn(e,i,r),n!==null&&(fn(n,e,r,t),Li(n,e,r))}};function vs(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!br(t,r)||!br(i,l):!0}function gd(e,n,t){var r=!1,i=et,l=n.contextType;return typeof l=="object"&&l!==null?l=en(l):(i=je(n)?gt:_e.current,r=n.contextTypes,l=(r=r!=null)?Yt(e,i):et),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=vl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function ws(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&vl.enqueueReplaceState(n,n.state,null)}function Xo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Xu(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=en(l):(l=je(n)?gt:_e.current,i.context=Yt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Go(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&vl.enqueueReplaceState(i,i.state,null),nl(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kt(e,n){try{var t="",r=n;do t+=Eh(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function eo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Jo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Jm=typeof WeakMap=="function"?WeakMap:Map;function yd(e,n,t){t=Pn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ol||(ol=!0,uu=r),Jo(e,n)},t}function kd(e,n,t){t=Pn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Jo(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Jo(e,n),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Ss(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Jm;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=fg.bind(null,e,n,t),n.then(e,e))}function Cs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Es(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Pn(-1,1),n.tag=2,Gn(t,n,1))),t.lanes|=1),e)}var Km=Fn.ReactCurrentOwner,Fe=!1;function Te(e,n,t,r){n.child=e===null?qf(n,null,t,r):Xt(n,e.child,t,r)}function _s(e,n,t,r,i){t=t.render;var l=n.ref;return Wt(n,i),r=na(e,n,t,r,l,i),t=ta(),e!==null&&!Fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,An(e,n,i)):(re&&t&&Vu(n),n.flags|=1,Te(e,n,r,i),n.child)}function Ts(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!da(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,xd(e,n,l,r,i)):(e=Oi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:br,t(o,r)&&e.ref===n.ref)return An(e,n,i)}return n.flags|=1,e=Kn(l,r),e.ref=n.ref,e.return=n,n.child=e}function xd(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(br(l,r)&&e.ref===n.ref)if(Fe=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return n.lanes=e.lanes,An(e,n,i)}return Ko(e,n,t,r,i)}function vd(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(bt,Be),Be|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Z(bt,Be),Be|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,Z(bt,Be),Be|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,Z(bt,Be),Be|=r;return Te(e,n,i,t),n.child}function wd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ko(e,n,t,r,i){var l=je(t)?gt:_e.current;return l=Yt(n,l),Wt(n,i),t=na(e,n,t,r,l,i),r=ta(),e!==null&&!Fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,An(e,n,i)):(re&&r&&Vu(n),n.flags|=1,Te(e,n,t,i),n.child)}function Is(e,n,t,r,i){if(je(t)){var l=!0;Xi(n)}else l=!1;if(Wt(n,i),n.stateNode===null)Di(e,n),gd(n,t,r),Xo(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var a=o.context,s=t.contextType;typeof s=="object"&&s!==null?s=en(s):(s=je(t)?gt:_e.current,s=Yt(n,s));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==s)&&ws(n,o,r,s),bn=!1;var d=n.memoizedState;o.state=d,nl(n,r,o,i),a=n.memoizedState,u!==r||d!==a||Ne.current||bn?(typeof f=="function"&&(Go(n,t,f,r),a=n.memoizedState),(u=bn||vs(n,t,u,r,d,a,s))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=s,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Gf(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:un(n.type,u),o.props=s,c=n.pendingProps,d=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=en(a):(a=je(t)?gt:_e.current,a=Yt(n,a));var p=t.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==c||d!==a)&&ws(n,o,r,a),bn=!1,d=n.memoizedState,o.state=d,nl(n,r,o,i);var k=n.memoizedState;u!==c||d!==k||Ne.current||bn?(typeof p=="function"&&(Go(n,t,p,r),k=n.memoizedState),(s=bn||vs(n,t,s,r,d,k,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),o.props=r,o.state=k,o.context=a,r=s):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),r=!1)}return Zo(e,n,t,r,l,i)}function Zo(e,n,t,r,i,l){wd(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&ds(n,t,!1),An(e,n,l);r=n.stateNode,Km.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Xt(n,e.child,null,l),n.child=Xt(n,null,u,l)):Te(e,n,u,l),n.memoizedState=r.state,i&&ds(n,t,!0),n.child}function Sd(e){var n=e.stateNode;n.pendingContext?fs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&fs(e,n.context,!1),Ju(e,n.containerInfo)}function Ps(e,n,t,r,i){return Gt(),Wu(i),n.flags|=256,Te(e,n,t,r),n.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function nu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cd(e,n,t){var r=n.pendingProps,i=ie.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Z(ie,i&1),e===null)return qo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Cl(o,r,0,null),e=mt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=nu(t),n.memoizedState=eu,e):la(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Zm(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Kn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=Kn(u,l):(l=mt(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?nu(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=eu,r}return l=e.child,e=l.sibling,r=Kn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function la(e,n){return n=Cl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ki(e,n,t,r){return r!==null&&Wu(r),Xt(n,e.child,null,t),e=la(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Zm(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=eo(Error(P(422))),ki(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Cl({mode:"visible",children:r.children},i,0,null),l=mt(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Xt(n,e.child,null,o),n.child.memoizedState=nu(o),n.memoizedState=eu,l);if(!(n.mode&1))return ki(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(P(419)),r=eo(l,r,void 0),ki(e,n,o,r)}if(u=(o&e.childLanes)!==0,Fe||u){if(r=ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ln(e,i),fn(r,e,i,-1))}return fa(),r=eo(Error(P(421))),ki(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=dg.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,He=Yn(i.nextSibling),Ve=n,re=!0,sn=null,e!==null&&(Ye[Ge++]=Tn,Ye[Ge++]=In,Ye[Ge++]=yt,Tn=e.id,In=e.overflow,yt=n),n=la(n,r.children),n.flags|=4096,n)}function zs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Yo(e.return,n,t)}function no(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Ed(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(Te(e,n,r.children,t),r=ie.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zs(e,t,n);else if(e.tag===19)zs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(ie,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&tl(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),no(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&tl(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}no(n,!0,t,null,l);break;case"together":no(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Di(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function An(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),xt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=Kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function eg(e,n,t){switch(n.tag){case 3:Sd(n),Gt();break;case 5:Xf(n);break;case 1:je(n.type)&&Xi(n);break;case 4:Ju(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;Z(Zi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Z(ie,ie.current&1),n.flags|=128,null):t&n.child.childLanes?Cd(e,n,t):(Z(ie,ie.current&1),e=An(e,n,t),e!==null?e.sibling:null);Z(ie,ie.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ed(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(ie,ie.current),r)break;return null;case 22:case 23:return n.lanes=0,vd(e,n,t)}return An(e,n,t)}var _d,tu,Td,Id;_d=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};tu=function(){};Td=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,pt(vn.current);var l=null;switch(t){case"input":i=Eo(e,i),r=Eo(e,r),l=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),l=[];break;case"textarea":i=Io(e,i),r=Io(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}zo(t,r);var o;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fr.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&ne("scroll",e),l||u===a||(l=[])):(l=l||[]).push(s,a))}t&&(l=l||[]).push("style",t);var s=l;(n.updateQueue=s)&&(n.flags|=4)}};Id=function(e,n,t,r){t!==r&&(n.flags|=4)};function dr(e,n){if(!re)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function ng(e,n,t){var r=n.pendingProps;switch(Uu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(n),null;case 1:return je(n.type)&&Gi(),Ce(n),null;case 3:return r=n.stateNode,Jt(),te(Ne),te(_e),Zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,sn!==null&&(cu(sn),sn=null))),tu(e,n),Ce(n),null;case 5:Ku(n);var i=pt(Wr.current);if(t=n.type,e!==null&&n.stateNode!=null)Td(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(P(166));return Ce(n),null}if(e=pt(vn.current),gi(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[kn]=n,r[Vr]=l,e=(n.mode&1)!==0,t){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<vr.length;i++)ne(vr[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Ra(r,l),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ne("invalid",r);break;case"textarea":ba(r,l),ne("invalid",r)}zo(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&mi(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&mi(r.textContent,u,e),i=["children",""+u]):Fr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&ne("scroll",r)}switch(t){case"input":ui(r),$a(r,l,!0);break;case"textarea":ui(r),Ba(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Yi)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ef(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[kn]=n,e[Vr]=r,_d(e,n,!1,!1),n.stateNode=e;e:{switch(o=Mo(t,r),t){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<vr.length;i++)ne(vr[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":Ra(e,r),i=Eo(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),ne("invalid",e);break;case"textarea":ba(e,r),i=Io(e,r),ne("invalid",e);break;default:i=r}zo(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?rf(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&nf(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Dr(e,a):typeof a=="number"&&Dr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Fr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&ne("scroll",e):a!=null&&zu(e,l,a,o))}switch(t){case"input":ui(e),$a(e,r,!1);break;case"textarea":ui(e),Ba(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Bt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ce(n),null;case 6:if(e&&n.stateNode!=null)Id(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(P(166));if(t=pt(Wr.current),pt(vn.current),gi(n)){if(r=n.stateNode,t=n.memoizedProps,r[kn]=n,(l=r.nodeValue!==t)&&(e=Ve,e!==null))switch(e.tag){case 3:mi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[kn]=n,n.stateNode=r}return Ce(n),null;case 13:if(te(ie),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&He!==null&&n.mode&1&&!(n.flags&128))Wf(),Gt(),n.flags|=98560,l=!1;else if(l=gi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[kn]=n}else Gt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ce(n),l=!1}else sn!==null&&(cu(sn),sn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ie.current&1?me===0&&(me=3):fa())),n.updateQueue!==null&&(n.flags|=4),Ce(n),null);case 4:return Jt(),tu(e,n),e===null&&Br(n.stateNode.containerInfo),Ce(n),null;case 10:return Yu(n.type._context),Ce(n),null;case 17:return je(n.type)&&Gi(),Ce(n),null;case 19:if(te(ie),l=n.memoizedState,l===null)return Ce(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)dr(l,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=tl(e),o!==null){for(n.flags|=128,dr(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Z(ie,ie.current&1|2),n.child}e=e.sibling}l.tail!==null&&ce()>Zt&&(n.flags|=128,r=!0,dr(l,!1),n.lanes=4194304)}else{if(!r)if(e=tl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),dr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!re)return Ce(n),null}else 2*ce()-l.renderingStartTime>Zt&&t!==1073741824&&(n.flags|=128,r=!0,dr(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ce(),n.sibling=null,t=ie.current,Z(ie,r?t&1|2:t&1),n):(Ce(n),null);case 22:case 23:return ca(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Be&1073741824&&(Ce(n),n.subtreeFlags&6&&(n.flags|=8192)):Ce(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function tg(e,n){switch(Uu(n),n.tag){case 1:return je(n.type)&&Gi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Jt(),te(Ne),te(_e),Zu(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ku(n),null;case 13:if(te(ie),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));Gt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return te(ie),null;case 4:return Jt(),null;case 10:return Yu(n.type._context),null;case 22:case 23:return ca(),null;case 24:return null;default:return null}}var xi=!1,Ee=!1,rg=typeof WeakSet=="function"?WeakSet:Set,D=null;function $t(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ae(e,n,r)}else t.current=null}function ru(e,n,t){try{t()}catch(r){ae(e,n,r)}}var Ms=!1;function ig(e,n){if(bo=Wi,e=Af(),Hu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,a=-1,s=0,f=0,c=e,d=null;n:for(;;){for(var p;c!==t||i!==0&&c.nodeType!==3||(u=o+i),c!==l||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)d=c,c=p;for(;;){if(c===e)break n;if(d===t&&++s===i&&(u=o),d===l&&++f===r&&(a=o),(p=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=p}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bo={focusedElem:e,selectionRange:t},Wi=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var S=k.memoizedProps,I=k.memoizedState,h=n.stateNode,m=h.getSnapshotBeforeUpdate(n.elementType===n.type?S:un(n.type,S),I);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(C){ae(n,n.return,C)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return k=Ms,Ms=!1,k}function Pr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ru(n,t,l)}i=i.next}while(i!==r)}}function wl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function iu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pd(e){var n=e.alternate;n!==null&&(e.alternate=null,Pd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[kn],delete n[Vr],delete n[Uo],delete n[bm],delete n[Bm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zd(e){return e.tag===5||e.tag===3||e.tag===4}function Ls(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(lu(e,n,t),e=e.sibling;e!==null;)lu(e,n,t),e=e.sibling}function ou(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ou(e,n,t),e=e.sibling;e!==null;)ou(e,n,t),e=e.sibling}var xe=null,an=!1;function jn(e,n,t){for(t=t.child;t!==null;)Md(e,n,t),t=t.sibling}function Md(e,n,t){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(pl,t)}catch{}switch(t.tag){case 5:Ee||$t(t,n);case 6:var r=xe,i=an;xe=null,jn(e,n,t),xe=r,an=i,xe!==null&&(an?(e=xe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):xe.removeChild(t.stateNode));break;case 18:xe!==null&&(an?(e=xe,t=t.stateNode,e.nodeType===8?Yl(e.parentNode,t):e.nodeType===1&&Yl(e,t),Rr(e)):Yl(xe,t.stateNode));break;case 4:r=xe,i=an,xe=t.stateNode.containerInfo,an=!0,jn(e,n,t),xe=r,an=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&ru(t,n,o),i=i.next}while(i!==r)}jn(e,n,t);break;case 1:if(!Ee&&($t(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){ae(t,n,u)}jn(e,n,t);break;case 21:jn(e,n,t);break;case 22:t.mode&1?(Ee=(r=Ee)||t.memoizedState!==null,jn(e,n,t),Ee=r):jn(e,n,t);break;default:jn(e,n,t)}}function As(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new rg),n.forEach(function(r){var i=pg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function ln(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:xe=u.stateNode,an=!1;break e;case 3:xe=u.stateNode.containerInfo,an=!0;break e;case 4:xe=u.stateNode.containerInfo,an=!0;break e}u=u.return}if(xe===null)throw Error(P(160));Md(l,o,i),xe=null,an=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){ae(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ld(n,e),n=n.sibling}function Ld(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ln(n,e),mn(e),r&4){try{Pr(3,e,e.return),wl(3,e)}catch(S){ae(e,e.return,S)}try{Pr(5,e,e.return)}catch(S){ae(e,e.return,S)}}break;case 1:ln(n,e),mn(e),r&512&&t!==null&&$t(t,t.return);break;case 5:if(ln(n,e),mn(e),r&512&&t!==null&&$t(t,t.return),e.flags&32){var i=e.stateNode;try{Dr(i,"")}catch(S){ae(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Kc(i,l),Mo(u,o);var s=Mo(u,l);for(o=0;o<a.length;o+=2){var f=a[o],c=a[o+1];f==="style"?rf(i,c):f==="dangerouslySetInnerHTML"?nf(i,c):f==="children"?Dr(i,c):zu(i,f,c,s)}switch(u){case"input":_o(i,l);break;case"textarea":Zc(i,l);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var p=l.value;p!=null?Bt(i,!!l.multiple,p,!1):d!==!!l.multiple&&(l.defaultValue!=null?Bt(i,!!l.multiple,l.defaultValue,!0):Bt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Vr]=l}catch(S){ae(e,e.return,S)}}break;case 6:if(ln(n,e),mn(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(S){ae(e,e.return,S)}}break;case 3:if(ln(n,e),mn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Rr(n.containerInfo)}catch(S){ae(e,e.return,S)}break;case 4:ln(n,e),mn(e);break;case 13:ln(n,e),mn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(aa=ce())),r&4&&As(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(Ee=(s=Ee)||f,ln(n,e),Ee=s):ln(n,e),mn(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!f&&e.mode&1)for(D=e,f=e.child;f!==null;){for(c=D=f;D!==null;){switch(d=D,p=d.child,d.tag){case 0:case 11:case 14:case 15:Pr(4,d,d.return);break;case 1:$t(d,d.return);var k=d.stateNode;if(typeof k.componentWillUnmount=="function"){r=d,t=d.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(S){ae(r,t,S)}}break;case 5:$t(d,d.return);break;case 22:if(d.memoizedState!==null){Ds(c);continue}}p!==null?(p.return=d,D=p):Ds(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,s?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=tf("display",o))}catch(S){ae(e,e.return,S)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(S){ae(e,e.return,S)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:ln(n,e),mn(e),r&4&&As(e);break;case 21:break;default:ln(n,e),mn(e)}}function mn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(zd(t)){var r=t;break e}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dr(i,""),r.flags&=-33);var l=Ls(e);ou(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Ls(e);lu(e,u,o);break;default:throw Error(P(161))}}catch(a){ae(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function lg(e,n,t){D=e,Ad(e)}function Ad(e,n,t){for(var r=(e.mode&1)!==0;D!==null;){var i=D,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xi;if(!o){var u=i.alternate,a=u!==null&&u.memoizedState!==null||Ee;u=xi;var s=Ee;if(xi=o,(Ee=a)&&!s)for(D=i;D!==null;)o=D,a=o.child,o.tag===22&&o.memoizedState!==null?Ns(i):a!==null?(a.return=o,D=a):Ns(i);for(;l!==null;)D=l,Ad(l),l=l.sibling;D=i,xi=u,Ee=s}Fs(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,D=l):Fs(e)}}function Fs(e){for(;D!==null;){var n=D;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ee||wl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ee)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:un(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&ys(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ys(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Rr(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ee||n.flags&512&&iu(n)}catch(d){ae(n,n.return,d)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function Ds(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function Ns(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{wl(4,n)}catch(a){ae(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){ae(n,i,a)}}var l=n.return;try{iu(n)}catch(a){ae(n,l,a)}break;case 5:var o=n.return;try{iu(n)}catch(a){ae(n,o,a)}}}catch(a){ae(n,n.return,a)}if(n===e){D=null;break}var u=n.sibling;if(u!==null){u.return=n.return,D=u;break}D=n.return}}var og=Math.ceil,ll=Fn.ReactCurrentDispatcher,oa=Fn.ReactCurrentOwner,Ze=Fn.ReactCurrentBatchConfig,q=0,ye=null,de=null,ve=0,Be=0,bt=rt(0),me=0,Gr=null,xt=0,Sl=0,ua=0,zr=null,Ae=null,aa=0,Zt=1/0,En=null,ol=!1,uu=null,Xn=null,vi=!1,Un=null,ul=0,Mr=0,au=null,Ni=-1,ji=0;function Pe(){return q&6?ce():Ni!==-1?Ni:Ni=ce()}function Jn(e){return e.mode&1?q&2&&ve!==0?ve&-ve:Vm.transition!==null?(ji===0&&(ji=gf()),ji):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Cf(e.type)),e):1}function fn(e,n,t,r){if(50<Mr)throw Mr=0,au=null,Error(P(185));Jr(e,t,r),(!(q&2)||e!==ye)&&(e===ye&&(!(q&2)&&(Sl|=t),me===4&&Hn(e,ve)),Oe(e,r),t===1&&q===0&&!(n.mode&1)&&(Zt=ce()+500,kl&&it()))}function Oe(e,n){var t=e.callbackNode;Vh(e,n);var r=Ui(e,e===ye?ve:0);if(r===0)t!==null&&Ua(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ua(t),n===1)e.tag===0?Hm(js.bind(null,e)):Hf(js.bind(null,e)),Rm(function(){!(q&6)&&it()}),t=null;else{switch(yf(r)){case 1:t=Du;break;case 4:t=hf;break;case 16:t=Vi;break;case 536870912:t=mf;break;default:t=Vi}t=bd(t,Fd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Fd(e,n){if(Ni=-1,ji=0,q&6)throw Error(P(327));var t=e.callbackNode;if(Qt()&&e.callbackNode!==t)return null;var r=Ui(e,e===ye?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=al(e,r);else{n=r;var i=q;q|=2;var l=Nd();(ye!==e||ve!==n)&&(En=null,Zt=ce()+500,ht(e,n));do try{sg();break}catch(u){Dd(e,u)}while(!0);qu(),ll.current=l,q=i,de!==null?n=0:(ye=null,ve=0,n=me)}if(n!==0){if(n===2&&(i=No(e),i!==0&&(r=i,n=su(e,i))),n===1)throw t=Gr,ht(e,0),Hn(e,r),Oe(e,ce()),t;if(n===6)Hn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ug(i)&&(n=al(e,r),n===2&&(l=No(e),l!==0&&(r=l,n=su(e,l))),n===1))throw t=Gr,ht(e,0),Hn(e,r),Oe(e,ce()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(P(345));case 2:ct(e,Ae,En);break;case 3:if(Hn(e,r),(r&130023424)===r&&(n=aa+500-ce(),10<n)){if(Ui(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Vo(ct.bind(null,e,Ae,En),n);break}ct(e,Ae,En);break;case 4:if(Hn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-cn(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*og(r/1960))-r,10<r){e.timeoutHandle=Vo(ct.bind(null,e,Ae,En),r);break}ct(e,Ae,En);break;case 5:ct(e,Ae,En);break;default:throw Error(P(329))}}}return Oe(e,ce()),e.callbackNode===t?Fd.bind(null,e):null}function su(e,n){var t=zr;return e.current.memoizedState.isDehydrated&&(ht(e,n).flags|=256),e=al(e,n),e!==2&&(n=Ae,Ae=t,n!==null&&cu(n)),e}function cu(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function ug(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!pn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Hn(e,n){for(n&=~ua,n&=~Sl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-cn(n),r=1<<t;e[t]=-1,n&=~r}}function js(e){if(q&6)throw Error(P(327));Qt();var n=Ui(e,0);if(!(n&1))return Oe(e,ce()),null;var t=al(e,n);if(e.tag!==0&&t===2){var r=No(e);r!==0&&(n=r,t=su(e,r))}if(t===1)throw t=Gr,ht(e,0),Hn(e,n),Oe(e,ce()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ct(e,Ae,En),Oe(e,ce()),null}function sa(e,n){var t=q;q|=1;try{return e(n)}finally{q=t,q===0&&(Zt=ce()+500,kl&&it())}}function vt(e){Un!==null&&Un.tag===0&&!(q&6)&&Qt();var n=q;q|=1;var t=Ze.transition,r=Y;try{if(Ze.transition=null,Y=1,e)return e()}finally{Y=r,Ze.transition=t,q=n,!(q&6)&&it()}}function ca(){Be=bt.current,te(bt)}function ht(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Om(t)),de!==null)for(t=de.return;t!==null;){var r=t;switch(Uu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gi();break;case 3:Jt(),te(Ne),te(_e),Zu();break;case 5:Ku(r);break;case 4:Jt();break;case 13:te(ie);break;case 19:te(ie);break;case 10:Yu(r.type._context);break;case 22:case 23:ca()}t=t.return}if(ye=e,de=e=Kn(e.current,null),ve=Be=n,me=0,Gr=null,ua=Sl=xt=0,Ae=zr=null,dt!==null){for(n=0;n<dt.length;n++)if(t=dt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}dt=null}return e}function Dd(e,n){do{var t=de;try{if(qu(),Ai.current=il,rl){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(kt=0,ge=he=oe=null,Ir=!1,Qr=0,oa.current=null,t===null||t.return===null){me=1,Gr=n,de=null;break}e:{var l=e,o=t.return,u=t,a=n;if(n=ve,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,f=u,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Cs(o);if(p!==null){p.flags&=-257,Es(p,o,u,l,n),p.mode&1&&Ss(l,s,n),n=p,a=s;var k=n.updateQueue;if(k===null){var S=new Set;S.add(a),n.updateQueue=S}else k.add(a);break e}else{if(!(n&1)){Ss(l,s,n),fa();break e}a=Error(P(426))}}else if(re&&u.mode&1){var I=Cs(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Es(I,o,u,l,n),Wu(Kt(a,u));break e}}l=a=Kt(a,u),me!==4&&(me=2),zr===null?zr=[l]:zr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var h=yd(l,a,n);gs(l,h);break e;case 1:u=a;var m=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Xn===null||!Xn.has(g)))){l.flags|=65536,n&=-n,l.lanes|=n;var C=kd(l,u,n);gs(l,C);break e}}l=l.return}while(l!==null)}Od(t)}catch(_){n=_,de===t&&t!==null&&(de=t=t.return);continue}break}while(!0)}function Nd(){var e=ll.current;return ll.current=il,e===null?il:e}function fa(){(me===0||me===3||me===2)&&(me=4),ye===null||!(xt&268435455)&&!(Sl&268435455)||Hn(ye,ve)}function al(e,n){var t=q;q|=2;var r=Nd();(ye!==e||ve!==n)&&(En=null,ht(e,n));do try{ag();break}catch(i){Dd(e,i)}while(!0);if(qu(),q=t,ll.current=r,de!==null)throw Error(P(261));return ye=null,ve=0,me}function ag(){for(;de!==null;)jd(de)}function sg(){for(;de!==null&&!Dh();)jd(de)}function jd(e){var n=$d(e.alternate,e,Be);e.memoizedProps=e.pendingProps,n===null?Od(e):de=n,oa.current=null}function Od(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=tg(t,n),t!==null){t.flags&=32767,de=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}else if(t=ng(t,n,Be),t!==null){de=t;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);me===0&&(me=5)}function ct(e,n,t){var r=Y,i=Ze.transition;try{Ze.transition=null,Y=1,cg(e,n,t,r)}finally{Ze.transition=i,Y=r}return null}function cg(e,n,t,r){do Qt();while(Un!==null);if(q&6)throw Error(P(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Uh(e,l),e===ye&&(de=ye=null,ve=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||vi||(vi=!0,bd(Vi,function(){return Qt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ze.transition,Ze.transition=null;var o=Y;Y=1;var u=q;q|=4,oa.current=null,ig(e,t),Ld(t,e),Mm(Bo),Wi=!!bo,Bo=bo=null,e.current=t,lg(t),Nh(),q=u,Y=o,Ze.transition=l}else e.current=t;if(vi&&(vi=!1,Un=e,ul=i),l=e.pendingLanes,l===0&&(Xn=null),Rh(t.stateNode),Oe(e,ce()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ol)throw ol=!1,e=uu,uu=null,e;return ul&1&&e.tag!==0&&Qt(),l=e.pendingLanes,l&1?e===au?Mr++:(Mr=0,au=e):Mr=0,it(),null}function Qt(){if(Un!==null){var e=yf(ul),n=Ze.transition,t=Y;try{if(Ze.transition=null,Y=16>e?16:e,Un===null)var r=!1;else{if(e=Un,Un=null,ul=0,q&6)throw Error(P(331));var i=q;for(q|=4,D=e.current;D!==null;){var l=D,o=l.child;if(D.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(D=s;D!==null;){var f=D;switch(f.tag){case 0:case 11:case 15:Pr(8,f,l)}var c=f.child;if(c!==null)c.return=f,D=c;else for(;D!==null;){f=D;var d=f.sibling,p=f.return;if(Pd(f),f===s){D=null;break}if(d!==null){d.return=p,D=d;break}D=p}}}var k=l.alternate;if(k!==null){var S=k.child;if(S!==null){k.child=null;do{var I=S.sibling;S.sibling=null,S=I}while(S!==null)}}D=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,D=o;else e:for(;D!==null;){if(l=D,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Pr(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,D=h;break e}D=l.return}}var m=e.current;for(D=m;D!==null;){o=D;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,D=g;else e:for(o=m;D!==null;){if(u=D,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:wl(9,u)}}catch(_){ae(u,u.return,_)}if(u===o){D=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,D=C;break e}D=u.return}}if(q=i,it(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(pl,e)}catch{}r=!0}return r}finally{Y=t,Ze.transition=n}}return!1}function Os(e,n,t){n=Kt(t,n),n=yd(e,n,1),e=Gn(e,n,1),n=Pe(),e!==null&&(Jr(e,1,n),Oe(e,n))}function ae(e,n,t){if(e.tag===3)Os(e,e,t);else for(;n!==null;){if(n.tag===3){Os(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xn===null||!Xn.has(r))){e=Kt(t,e),e=kd(n,e,1),n=Gn(n,e,1),e=Pe(),n!==null&&(Jr(n,1,e),Oe(n,e));break}}n=n.return}}function fg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Pe(),e.pingedLanes|=e.suspendedLanes&t,ye===e&&(ve&t)===t&&(me===4||me===3&&(ve&130023424)===ve&&500>ce()-aa?ht(e,0):ua|=t),Oe(e,n)}function Rd(e,n){n===0&&(e.mode&1?(n=ci,ci<<=1,!(ci&130023424)&&(ci=4194304)):n=1);var t=Pe();e=Ln(e,n),e!==null&&(Jr(e,n,t),Oe(e,t))}function dg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Rd(e,t)}function pg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(n),Rd(e,t)}var $d;$d=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ne.current)Fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Fe=!1,eg(e,n,t);Fe=!!(e.flags&131072)}else Fe=!1,re&&n.flags&1048576&&Vf(n,Ki,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Di(e,n),e=n.pendingProps;var i=Yt(n,_e.current);Wt(n,t),i=na(null,n,r,e,i,t);var l=ta();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,je(r)?(l=!0,Xi(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xu(n),i.updater=vl,n.stateNode=i,i._reactInternals=n,Xo(n,r,e,t),n=Zo(null,n,r,!0,l,t)):(n.tag=0,re&&l&&Vu(n),Te(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Di(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=mg(r),e=un(r,e),i){case 0:n=Ko(null,n,r,e,t);break e;case 1:n=Is(null,n,r,e,t);break e;case 11:n=_s(null,n,r,e,t);break e;case 14:n=Ts(null,n,r,un(r.type,e),t);break e}throw Error(P(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),Ko(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),Is(e,n,r,i,t);case 3:e:{if(Sd(n),e===null)throw Error(P(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Gf(e,n),nl(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Kt(Error(P(423)),n),n=Ps(e,n,r,t,i);break e}else if(r!==i){i=Kt(Error(P(424)),n),n=Ps(e,n,r,t,i);break e}else for(He=Yn(n.stateNode.containerInfo.firstChild),Ve=n,re=!0,sn=null,t=qf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Gt(),r===i){n=An(e,n,t);break e}Te(e,n,r,t)}n=n.child}return n;case 5:return Xf(n),e===null&&qo(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ho(r,i)?o=null:l!==null&&Ho(r,l)&&(n.flags|=32),wd(e,n),Te(e,n,o,t),n.child;case 6:return e===null&&qo(n),null;case 13:return Cd(e,n,t);case 4:return Ju(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Xt(n,null,r,t):Te(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),_s(e,n,r,i,t);case 7:return Te(e,n,n.pendingProps,t),n.child;case 8:return Te(e,n,n.pendingProps.children,t),n.child;case 12:return Te(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,Z(Zi,r._currentValue),r._currentValue=o,l!==null)if(pn(l.value,o)){if(l.children===i.children&&!Ne.current){n=An(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Pn(-1,t&-t),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?a.next=a:(a.next=f.next,f.next=a),s.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Yo(l.return,t,n),u.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(P(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Yo(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Te(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Wt(n,t),i=en(i),r=r(i),n.flags|=1,Te(e,n,r,t),n.child;case 14:return r=n.type,i=un(r,n.pendingProps),i=un(r.type,i),Ts(e,n,r,i,t);case 15:return xd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),Di(e,n),n.tag=1,je(r)?(e=!0,Xi(n)):e=!1,Wt(n,t),gd(n,r,i),Xo(n,r,i,t),Zo(null,n,r,!0,e,t);case 19:return Ed(e,n,t);case 22:return vd(e,n,t)}throw Error(P(156,n.tag))};function bd(e,n){return pf(e,n)}function hg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,n,t,r){return new hg(e,n,t,r)}function da(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mg(e){if(typeof e=="function")return da(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lu)return 11;if(e===Au)return 14}return 2}function Kn(e,n){var t=e.alternate;return t===null?(t=Je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Oi(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")da(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Mt:return mt(t.children,i,l,n);case Mu:o=8,i|=8;break;case vo:return e=Je(12,t,n,i|2),e.elementType=vo,e.lanes=l,e;case wo:return e=Je(13,t,n,i),e.elementType=wo,e.lanes=l,e;case So:return e=Je(19,t,n,i),e.elementType=So,e.lanes=l,e;case Gc:return Cl(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qc:o=10;break e;case Yc:o=9;break e;case Lu:o=11;break e;case Au:o=14;break e;case $n:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=Je(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function mt(e,n,t,r){return e=Je(7,e,r,n),e.lanes=t,e}function Cl(e,n,t,r){return e=Je(22,e,r,n),e.elementType=Gc,e.lanes=t,e.stateNode={isHidden:!1},e}function to(e,n,t){return e=Je(6,e,null,n),e.lanes=t,e}function ro(e,n,t){return n=Je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function gg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ol(0),this.expirationTimes=Ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ol(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pa(e,n,t,r,i,l,o,u,a){return e=new gg(e,n,t,u,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Je(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xu(l),e}function yg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Bd(e){if(!e)return et;e=e._reactInternals;e:{if(Ct(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(je(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(je(t))return Bf(e,t,n)}return n}function Hd(e,n,t,r,i,l,o,u,a){return e=pa(t,r,!0,e,i,l,o,u,a),e.context=Bd(null),t=e.current,r=Pe(),i=Jn(t),l=Pn(r,i),l.callback=n??null,Gn(t,l,i),e.current.lanes=i,Jr(e,i,r),Oe(e,r),e}function El(e,n,t,r){var i=n.current,l=Pe(),o=Jn(i);return t=Bd(t),n.context===null?n.context=t:n.pendingContext=t,n=Pn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Gn(i,n,o),e!==null&&(fn(e,i,o,l),Li(e,i,o)),o}function sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ha(e,n){Rs(e,n),(e=e.alternate)&&Rs(e,n)}function kg(){return null}var Vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ma(e){this._internalRoot=e}_l.prototype.render=ma.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));El(e,n,null,null)};_l.prototype.unmount=ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vt(function(){El(null,e,null,null)}),n[Mn]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var n=vf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Bn.length&&n!==0&&n<Bn[t].priority;t++);Bn.splice(t,0,e),t===0&&Sf(e)}};function ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $s(){}function xg(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var s=sl(o);l.call(s)}}var o=Hd(n,r,e,0,null,!1,!1,"",$s);return e._reactRootContainer=o,e[Mn]=o.current,Br(e.nodeType===8?e.parentNode:e),vt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=sl(a);u.call(s)}}var a=pa(e,0,!1,null,null,!1,!1,"",$s);return e._reactRootContainer=a,e[Mn]=a.current,Br(e.nodeType===8?e.parentNode:e),vt(function(){El(n,a,t,r)}),a}function Il(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var a=sl(o);u.call(a)}}El(n,o,e,i)}else o=xg(t,n,e,i,r);return sl(o)}kf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=xr(n.pendingLanes);t!==0&&(Nu(n,t|1),Oe(n,ce()),!(q&6)&&(Zt=ce()+500,it()))}break;case 13:vt(function(){var r=Ln(e,1);if(r!==null){var i=Pe();fn(r,e,1,i)}}),ha(e,1)}};ju=function(e){if(e.tag===13){var n=Ln(e,134217728);if(n!==null){var t=Pe();fn(n,e,134217728,t)}ha(e,134217728)}};xf=function(e){if(e.tag===13){var n=Jn(e),t=Ln(e,n);if(t!==null){var r=Pe();fn(t,e,n,r)}ha(e,n)}};vf=function(){return Y};wf=function(e,n){var t=Y;try{return Y=e,n()}finally{Y=t}};Ao=function(e,n,t){switch(n){case"input":if(_o(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=yl(r);if(!i)throw Error(P(90));Jc(r),_o(r,i)}}}break;case"textarea":Zc(e,t);break;case"select":n=t.value,n!=null&&Bt(e,!!t.multiple,n,!1)}};uf=sa;af=vt;var vg={usingClientEntryPoint:!1,Events:[Zr,Dt,yl,lf,of,sa]},pr={findFiberByHostInstance:ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wg={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ff(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{pl=wi.inject(wg),xn=wi}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vg;Qe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ga(n))throw Error(P(200));return yg(e,n,null,t)};Qe.createRoot=function(e,n){if(!ga(e))throw Error(P(299));var t=!1,r="",i=Vd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=pa(e,1,!1,null,null,t,!1,r,i),e[Mn]=n.current,Br(e.nodeType===8?e.parentNode:e),new ma(n)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=ff(n),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return vt(e)};Qe.hydrate=function(e,n,t){if(!Tl(n))throw Error(P(200));return Il(null,e,n,!0,t)};Qe.hydrateRoot=function(e,n,t){if(!ga(e))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Vd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Hd(n,null,e,1,t??null,i,!1,l,o),e[Mn]=n.current,Br(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new _l(n)};Qe.render=function(e,n,t){if(!Tl(n))throw Error(P(200));return Il(null,e,n,!1,t)};Qe.unmountComponentAtNode=function(e){if(!Tl(e))throw Error(P(40));return e._reactRootContainer?(vt(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};Qe.unstable_batchedUpdates=sa;Qe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Tl(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Il(e,n,t,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ud)}catch(e){console.error(e)}}Ud(),Vc.exports=Qe;var Sg=Vc.exports,bs=Sg;ko.createRoot=bs.createRoot,ko.hydrateRoot=bs.hydrateRoot;const Cg=`# 标题

这是第一版内容。

- 列表项1
- 列表项2

\`\`\`ts
const a = 1;
\`\`\`

$$a=1$$`,Eg=`# 标题

这是第二版内容，增加了内容。

- 列表项1
- 列表项3

\`\`\`js
const a = 2;
\`\`\``,_g=`# 一级标题

## 二级标题

### 三级标题

#### 四级标题

这是一些普通文本内容。

##### 五级标题

###### 六级标题`,Tg=`# 修改后的一级标题

## 二级标题已更新

### 三级标题

这是一些普通文本内容，增加了一些新内容。

#### 新增的四级标题

##### 五级标题

###### 六级标题已修改`,Ig=`# 列表示例

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
- [ ] 待办任务 3`,Pg=`# 列表示例（更新版）

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
- [ ] 待办任务 3`,zg=`# 代码示例

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
\`\`\``,Mg=`# 代码示例（更新版）

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
\`\`\``,Lg=`# 表格示例

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
| 利润 | 2,000 | 3,000 | 5,000 | 6,000 | 16,000 |`,Ag=`# 表格示例（更新版）

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
| 税费 | 600 | 1,000 | 1,200 | 1,600 | 4,400 | - |`,Fg=`# 链接和图片示例

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

这段文字包含一个[链接](https://example.com)和一个![内联图片](https://example.com/inline-image.jpg)。`,Dg=`# 链接和图片示例（更新版）

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

新增的段落，包含一个[新链接](https://example.com/new)。`,Ng=`# 文本格式化示例

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

这段文字**包含*混合的*格式**，还有~~一些~~\`代码\`。`,jg=`# 文本格式化示例（更新版）

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

这里有一些==高亮文本==。`,Og=`# 复杂 Markdown 文档示例

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

这个文档展示了多种 Markdown 元素的使用方式，可以用于测试差异比较功能。`,Rg=`# 复杂 Markdown 文档示例（更新版）

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

## `,$g=`# 极端长文本测试

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

这个文档包含了各种极端长的内容元素，用于测试 Markdown 差异比较工具处理大量文本的能力。`,bg=`# 极端长文本测试（更新版）

## 1. 长段落

这是一个非常长的段落，用于测试工具处理大量文本的能力。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.

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

这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。`,Bg=`# 嵌套结构测试

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

这个文档包含了各种深度嵌套的结构，用于测试 Markdown 差异比较工具处理复杂嵌套内容的能力。`,Hg=`# 嵌套结构测试（更新版）

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
>     \`\`\``,Vg=`# 特殊字符测试

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

这个文档包含了各种特殊字符和符号，用于测试 Markdown 差异比较工具处理特殊字符的能力。`,Ug=`# 特殊字符测试（更新版）

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

नमस्ते दुनिया! यह संस्कृत के लिए एक परीक्षण है.`,Wg=`# 空白处理测试

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

这个文档包含了各种空白字符的使用情况，用于测试 Markdown 差异比较工具处理空白字符的能力。`,Qg=`# 空白处理测试（更新版）

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
 
  
   
    
     
      
       
        
         
普通文本（中间是递增的空格行）`,qg=`# 混合内容测试

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

这个文档包含了各种混合内容的情况，用于测试 Markdown 差异比较工具处理复杂混合内容的能力。`,Yg=`# 混合内容测试（更新版）

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
</div>`,Bs=[{name:"simple",oldMarkdown:Cg,newMarkdown:Eg},{name:"headings",oldMarkdown:_g,newMarkdown:Tg},{name:"lists",oldMarkdown:Ig,newMarkdown:Pg},{name:"code",oldMarkdown:zg,newMarkdown:Mg},{name:"tables",oldMarkdown:Lg,newMarkdown:Ag},{name:"links",oldMarkdown:Fg,newMarkdown:Dg},{name:"formatting",oldMarkdown:Ng,newMarkdown:jg},{name:"complex",oldMarkdown:Og,newMarkdown:Rg},{name:"extreme_long",oldMarkdown:$g,newMarkdown:bg},{name:"nested_structures",oldMarkdown:Bg,newMarkdown:Hg},{name:"special_characters",oldMarkdown:Vg,newMarkdown:Ug},{name:"whitespace",oldMarkdown:Wg,newMarkdown:Qg},{name:"mixed_content",oldMarkdown:qg,newMarkdown:Yg}];class Wd{diff(n,t,r={}){let i;typeof r=="function"?(i=r,r={}):"callback"in r&&(i=r.callback);const l=this.castInput(n,r),o=this.castInput(t,r),u=this.removeEmpty(this.tokenize(l,r)),a=this.removeEmpty(this.tokenize(o,r));return this.diffWithOptionsObj(u,a,r,i)}diffWithOptionsObj(n,t,r,i){var l;const o=m=>{if(m=this.postProcess(m,r),i){setTimeout(function(){i(m)},0);return}else return m},u=t.length,a=n.length;let s=1,f=u+a;r.maxEditLength!=null&&(f=Math.min(f,r.maxEditLength));const c=(l=r.timeout)!==null&&l!==void 0?l:1/0,d=Date.now()+c,p=[{oldPos:-1,lastComponent:void 0}];let k=this.extractCommon(p[0],t,n,0,r);if(p[0].oldPos+1>=a&&k+1>=u)return o(this.buildValues(p[0].lastComponent,t,n));let S=-1/0,I=1/0;const h=()=>{for(let m=Math.max(S,-s);m<=Math.min(I,s);m+=2){let g;const C=p[m-1],_=p[m+1];C&&(p[m-1]=void 0);let v=!1;if(_){const z=_.oldPos-m;v=_&&0<=z&&z<u}const T=C&&C.oldPos+1<a;if(!v&&!T){p[m]=void 0;continue}if(!T||v&&C.oldPos<_.oldPos?g=this.addToPath(_,!0,!1,0,r):g=this.addToPath(C,!1,!0,1,r),k=this.extractCommon(g,t,n,m,r),g.oldPos+1>=a&&k+1>=u)return o(this.buildValues(g.lastComponent,t,n))||!0;p[m]=g,g.oldPos+1>=a&&(I=Math.min(I,m-1)),k+1>=u&&(S=Math.max(S,m+1))}s++};if(i)(function m(){setTimeout(function(){if(s>f||Date.now()>d)return i(void 0);h()||m()},0)})();else for(;s<=f&&Date.now()<=d;){const m=h();if(m)return m}}addToPath(n,t,r,i,l){const o=n.lastComponent;return o&&!l.oneChangePerToken&&o.added===t&&o.removed===r?{oldPos:n.oldPos+i,lastComponent:{count:o.count+1,added:t,removed:r,previousComponent:o.previousComponent}}:{oldPos:n.oldPos+i,lastComponent:{count:1,added:t,removed:r,previousComponent:o}}}extractCommon(n,t,r,i,l){const o=t.length,u=r.length;let a=n.oldPos,s=a-i,f=0;for(;s+1<o&&a+1<u&&this.equals(r[a+1],t[s+1],l);)s++,a++,f++,l.oneChangePerToken&&(n.lastComponent={count:1,previousComponent:n.lastComponent,added:!1,removed:!1});return f&&!l.oneChangePerToken&&(n.lastComponent={count:f,previousComponent:n.lastComponent,added:!1,removed:!1}),n.oldPos=a,s}equals(n,t,r){return r.comparator?r.comparator(n,t):n===t||!!r.ignoreCase&&n.toLowerCase()===t.toLowerCase()}removeEmpty(n){const t=[];for(let r=0;r<n.length;r++)n[r]&&t.push(n[r]);return t}castInput(n,t){return n}tokenize(n,t){return Array.from(n)}join(n){return n.join("")}postProcess(n,t){return n}get useLongestToken(){return!1}buildValues(n,t,r){const i=[];let l;for(;n;)i.push(n),l=n.previousComponent,delete n.previousComponent,n=l;i.reverse();const o=i.length;let u=0,a=0,s=0;for(;u<o;u++){const f=i[u];if(f.removed)f.value=this.join(r.slice(s,s+f.count)),s+=f.count;else{if(!f.added&&this.useLongestToken){let c=t.slice(a,a+f.count);c=c.map(function(d,p){const k=r[s+p];return k.length>d.length?k:d}),f.value=this.join(c)}else f.value=this.join(t.slice(a,a+f.count));a+=f.count,f.added||(s+=f.count)}}return i}}class Gg extends Wd{}const Xg=new Gg;function Hs(e,n,t){return Xg.diff(e,n,t)}function Vs(e,n){let t;for(t=0;t<e.length&&t<n.length;t++)if(e[t]!=n[t])return e.slice(0,t);return e.slice(0,t)}function Us(e,n){let t;if(!e||!n||e[e.length-1]!=n[n.length-1])return"";for(t=0;t<e.length&&t<n.length;t++)if(e[e.length-(t+1)]!=n[n.length-(t+1)])return e.slice(-t);return e.slice(-t)}function fu(e,n,t){if(e.slice(0,n.length)!=n)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(n)}; this is a bug`);return t+e.slice(n.length)}function du(e,n,t){if(!n)return e+t;if(e.slice(-n.length)!=n)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(n)}; this is a bug`);return e.slice(0,-n.length)+t}function hr(e,n){return fu(e,n,"")}function Si(e,n){return du(e,n,"")}function Ws(e,n){return n.slice(0,Jg(e,n))}function Jg(e,n){let t=0;e.length>n.length&&(t=e.length-n.length);let r=n.length;e.length<n.length&&(r=e.length);const i=Array(r);let l=0;i[0]=0;for(let o=1;o<r;o++){for(n[o]==n[l]?i[o]=i[l]:i[o]=l;l>0&&n[o]!=n[l];)l=i[l];n[o]==n[l]&&l++}l=0;for(let o=t;o<e.length;o++){for(;l>0&&e[o]!=n[l];)l=i[l];e[o]==n[l]&&l++}return l}function mr(e){let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function On(e){const n=e.match(/^\s*/);return n?n[0]:""}const Qs="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Kg=new RegExp(`[${Qs}]+|\\s+|[^${Qs}]`,"ug");class Zg extends Wd{equals(n,t,r){return r.ignoreCase&&(n=n.toLowerCase(),t=t.toLowerCase()),n.trim()===t.trim()}tokenize(n,t={}){let r;if(t.intlSegmenter){const o=t.intlSegmenter;if(o.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');r=Array.from(o.segment(n),u=>u.segment)}else r=n.match(Kg)||[];const i=[];let l=null;return r.forEach(o=>{/\s/.test(o)?l==null?i.push(o):i.push(i.pop()+o):l!=null&&/\s/.test(l)?i[i.length-1]==l?i.push(i.pop()+o):i.push(l+o):i.push(o),l=o}),i}join(n){return n.map((t,r)=>r==0?t:t.replace(/^\s+/,"")).join("")}postProcess(n,t){if(!n||t.oneChangePerToken)return n;let r=null,i=null,l=null;return n.forEach(o=>{o.added?i=o:o.removed?l=o:((i||l)&&qs(r,l,i,o),r=o,i=null,l=null)}),(i||l)&&qs(r,l,i,null),n}}const e1=new Zg;function n1(e,n,t){return e1.diff(e,n,t)}function qs(e,n,t,r){if(n&&t){const i=On(n.value),l=mr(n.value),o=On(t.value),u=mr(t.value);if(e){const a=Vs(i,o);e.value=du(e.value,o,a),n.value=hr(n.value,a),t.value=hr(t.value,a)}if(r){const a=Us(l,u);r.value=fu(r.value,u,a),n.value=Si(n.value,a),t.value=Si(t.value,a)}}else if(t){if(e){const i=On(t.value);t.value=t.value.substring(i.length)}if(r){const i=On(r.value);r.value=r.value.substring(i.length)}}else if(e&&r){const i=On(r.value),l=On(n.value),o=mr(n.value),u=Vs(i,l);n.value=hr(n.value,u);const a=Us(hr(i,u),o);n.value=Si(n.value,a),r.value=fu(r.value,i,a),e.value=du(e.value,i,i.slice(0,i.length-a.length))}else if(r){const i=On(r.value),l=mr(n.value),o=Ws(l,i);n.value=Si(n.value,o)}else if(e){const i=mr(e.value),l=On(n.value),o=Ws(i,l);n.value=hr(n.value,o)}}function be(e,n,t){const r={type:String(e)};return t==null&&(typeof n=="string"||Array.isArray(n))?t=n:Object.assign(r,n),Array.isArray(t)?r.children=t:t!=null&&(r.value=String(t)),r}var le=(e=>(e.Ins="ins",e.Del="del",e))(le||{}),wr=(e=>(e.Ins="ins",e.Del="del",e.InlineIns="inlineIns",e.InlineDel="inlineDel",e))(wr||{});function t1(e,n){const t=(u,a)=>!(u.type!==a.type||(u.type==="heading"||u.type==="section")&&u.depth!==a.depth),r=[],i=new Set;let l=0,o=0;for(;l<e.length&&o<n.length;){const u=e[l],a=n[o];if(i.has(o)){o++;continue}t(u,a)?(r.push({sourceIndex:l,targetIndex:o,sourceItem:u,targetItem:a}),i.add(o),l++,o++):(o++,o>=n.length&&(l++,o=0))}return r.sort((u,a)=>u.sourceIndex!==a.sourceIndex?u.sourceIndex-a.sourceIndex:u.targetIndex-a.targetIndex),r}function r1(e){return["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","link","linkReference","strong","text","inlineMath"].includes(e.type)}function ya(e,n,t,r=1){if(!e||!n||!t||!e.children)return;const i=e.children.indexOf(n);i!==-1&&(Array.isArray(t)?e.children.splice(i,r,...t):e.children.splice(i,r,t))}function Qd(e,n,t=[]){if(e===n)return!0;if(!e||!n||typeof e!="object"||typeof n!="object")return!1;const r=Object.keys(e).filter(l=>!t.includes(l)),i=Object.keys(n).filter(l=>!t.includes(l));return r.length!==i.length?!1:r.every(l=>{if(!Object.prototype.hasOwnProperty.call(n,l))return!1;const o=e[l],u=n[l];return o&&u&&typeof o=="object"&&typeof u=="object"?Qd(o,u,t):o===u})}function Ke(e,n){return e.data?{...e,data:{...e.data,diff:n}}:{...e,data:{diff:n}}}const Pl=function(e){if(e==null)return u1;if(typeof e=="function")return zl(e);if(typeof e=="object")return Array.isArray(e)?i1(e):l1(e);if(typeof e=="string")return o1(e);throw new Error("Expected function, string, or object as test")};function i1(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Pl(e[t]);return zl(r);function r(...i){let l=-1;for(;++l<n.length;)if(n[l].apply(this,i))return!0;return!1}}function l1(e){const n=e;return zl(t);function t(r){const i=r;let l;for(l in e)if(i[l]!==n[l])return!1;return!0}}function o1(e){return zl(n);function n(t){return t&&t.type===e}}function zl(e){return n;function n(t,r,i){return!!(a1(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function u1(){return!0}function a1(e){return e!==null&&typeof e=="object"&&"type"in e}const qd=[],s1=!0,pu=!1,c1="skip";function Yd(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const l=Pl(i),o=r?-1:1;u(e,void 0,[])();function u(a,s,f){const c=a&&typeof a=="object"?a:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(a.type+(p?"<"+p+">":""))+")"})}return d;function d(){let p=qd,k,S,I;if((!n||l(a,s,f[f.length-1]||void 0))&&(p=f1(t(a,f)),p[0]===pu))return p;if("children"in a&&a.children){const h=a;if(h.children&&p[0]!==c1)for(S=(r?h.children.length:-1)+o,I=f.concat(h);S>-1&&S<h.children.length;){const m=h.children[S];if(k=u(m,S,I)(),k[0]===pu)return k;S=typeof k[1]=="number"?k[1]:S+o}}return p}}}function f1(e){return Array.isArray(e)?e:typeof e=="number"?[s1,e]:e==null?qd:[e]}function ni(e,n,t,r){let i,l,o;typeof n=="function"&&typeof t!="function"?(l=void 0,o=n,i=t):(l=n,o=t,i=r),Yd(e,l,u,i);function u(a,s){const f=s[s.length-1],c=f?f.children.indexOf(a):void 0;return o(a,c,f)}}function d1(e,n){if(n)switch(e){case le.Ins:return wr.InlineIns;case le.Del:return wr.InlineDel}else switch(e){case le.Ins:return wr.Ins;case le.Del:return wr.Del}}function p1(e){return ni(e,(n,t,r)=>{var o;if(n.type==="listItem"||n.type===le.Ins||n.type===le.Del||!((o=n.data)!=null&&o.diff))return!0;const i=n.data.diff;delete n.data.diff;const l=r1(n);return ya(r,n,be(d1(i,l),[n])),!0}),e}function h1(e){return ni(e,["root","blockquote","listItem"],n=>{if(!n.children||n.children.length===0)return!0;const t=n.children;for(let r=0;r<n.children.length;r++){const i=n.children[r];if(i.type==="heading"){let l=0;const o=()=>{var c,d;const a=t[r+l],s=a.depth||1,f=be("section",{depth:s,children:[a]});for(l=l+1;r+l<t.length;l++){const p=t[r+l];if(p.type==="heading")if((p.depth||1)>s)(c=f.children)==null||c.push(o());else{l-=1;break}else(d=f.children)==null||d.push(p)}return f},u=o();ya(n,i,u,l+1)}}return!0}),e}function m1(e){return ni(e,"section",(n,t,r)=>(n.type!=="section"||n.children&&ya(r,n,n.children.map(i=>{var l;return(l=n.data)!=null&&l.diff&&(i.data||(i.data={}),i.data.diff=n.data.diff),i})),!0)),e}function Ys(e){return h1(e),e}const g1=e=>(m1(e),e);function y1(e,n){const t=Ys(e),r=Ys(n),i=Gd(t,r,!0);return g1(i)}function Gd(e,n,t=!1){const r={type:"root",children:[]},i=e.children||[],l=n.children||[],o=t1(i,l);let u=0,a=0;for(;u<i.length||a<l.length;)if(o.find(f=>f.sourceIndex===u&&f.targetIndex===a)){const f=i[u],c=l[a],d=k1(f,c);r.children.push(...d),u++,a++}else{const f=o.find(d=>d.sourceIndex>u);if(f&&f.targetIndex===a){for(let d=u;d<f.sourceIndex;d++){const p=Ke(i[d],le.Del);r.children.push(p)}u=f.sourceIndex;continue}const c=o.find(d=>d.targetIndex>a);if(c&&c.sourceIndex===u){for(let d=a;d<c.targetIndex;d++){const p=Ke(l[d],le.Ins);r.children.push(p)}a=c.targetIndex;continue}if(u<i.length){const d=Ke(i[u],le.Del);r.children.push(d),u++}if(a<l.length){const d=Ke(l[a],le.Ins);r.children.push(d),a++}}return r}function k1(e,n){if(e.type!==n.type)return[Ke(e,le.Del),Ke(n,le.Ins)];switch(e.type){case"thematicBreak":return[e];case"blockquote":case"list":case"section":return[Gs(e,n)];case"heading":case"paragraph":return[Gs(e,n)];case"text":case"strong":case"emphasis":case"delete":return x1(e,n);case"table":case"code":case"html":case"listItem":case"definition":return Xs(e,n);default:return Xs(e,n)}}function Gs(e,n){if(e.children&&n.children){const t=Gd(be("root",e.children),be("root",n.children));return{...n,children:t.children}}return n}function Xs(e,n){return Qd(e,n,["data","position"])?[n]:[Ke(e,le.Del),Ke(n,le.Ins)]}function x1(e,n){if(e.type!==n.type)return[Ke(e,le.Del),Ke(n,le.Ins)];if(e.type==="text"){const t=e.value||"",r=n.value||"";if(t===r)return[n];const i=Hs(t,r),l=[];for(const o of i)o.added?l.push(be("text",{value:o.value,data:{diff:le.Ins}})):o.removed?l.push(be("text",{value:o.value,data:{diff:le.Del}})):l.push(be("text",o.value));return l}if(["strong","emphasis","delete"].includes(e.type)){const t=e.children||[],r=n.children||[];if(t.length===1&&r.length===1&&t[0].type==="text"&&r[0].type==="text"){const i=t[0].value||"",l=r[0].value||"";if(i===l)return[n];const o=Hs(i,l),u=[];for(const a of o)if(a.added){const s=be(e.type,[be("text",{value:a.value,data:{diff:le.Ins}})]);u.push(s)}else if(a.removed){const s=be(e.type,[be("text",{value:a.value,data:{diff:le.Del}})]);u.push(s)}else{const s=be(e.type,[be("text",a.value)]);u.push(s)}return u}}return[Ke(e,le.Del),Ke(n,le.Ins)]}function Js(e){if(e)throw e}var Ri=Object.prototype.hasOwnProperty,Xd=Object.prototype.toString,Ks=Object.defineProperty,Zs=Object.getOwnPropertyDescriptor,ec=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Xd.call(n)==="[object Array]"},nc=function(n){if(!n||Xd.call(n)!=="[object Object]")return!1;var t=Ri.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&Ri.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||Ri.call(n,i)},tc=function(n,t){Ks&&t.name==="__proto__"?Ks(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},rc=function(n,t){if(t==="__proto__")if(Ri.call(n,t)){if(Zs)return Zs(n,t).value}else return;return n[t]},v1=function e(){var n,t,r,i,l,o,u=arguments[0],a=1,s=arguments.length,f=!1;for(typeof u=="boolean"&&(f=u,u=arguments[1]||{},a=2),(u==null||typeof u!="object"&&typeof u!="function")&&(u={});a<s;++a)if(n=arguments[a],n!=null)for(t in n)r=rc(u,t),i=rc(n,t),u!==i&&(f&&i&&(nc(i)||(l=ec(i)))?(l?(l=!1,o=r&&ec(r)?r:[]):o=r&&nc(r)?r:{},tc(u,{name:t,newValue:e(f,o,i)})):typeof i<"u"&&tc(u,{name:t,newValue:i}));return u};const io=Lc(v1);function hu(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function w1(){const e=[],n={run:t,use:r};return n;function t(...i){let l=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);u(null,...i);function u(a,...s){const f=e[++l];let c=-1;if(a){o(a);return}for(;++c<i.length;)(s[c]===null||s[c]===void 0)&&(s[c]=i[c]);i=s,f?S1(f,u)(...s):o(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function S1(e,n){let t;return r;function r(...o){const u=e.length>o.length;let a;u&&o.push(i);try{a=e.apply(this,o)}catch(s){const f=s;if(u&&t)throw f;return i(f)}u||(a&&a.then&&typeof a.then=="function"?a.then(l,i):a instanceof Error?i(a):l(a))}function i(o,...u){t||(t=!0,n(o,...u))}function l(o){i(null,o)}}function Lr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?ic(e.position):"start"in e||"end"in e?ic(e):"line"in e||"column"in e?mu(e):""}function mu(e){return lc(e&&e.line)+":"+lc(e&&e.column)}function ic(e){return mu(e&&e.start)+"-"+mu(e&&e.end)}function lc(e){return e&&typeof e=="number"?e:1}class Re extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",l={},o=!1;if(t&&("line"in t&&"column"in t?l={place:t}:"start"in t&&"end"in t?l={place:t}:"type"in t?l={ancestors:[t],place:t.position}:l={...t}),typeof n=="string"?i=n:!l.cause&&n&&(o=!0,i=n.message,l.cause=n),!l.ruleId&&!l.source&&typeof r=="string"){const a=r.indexOf(":");a===-1?l.ruleId=r:(l.source=r.slice(0,a),l.ruleId=r.slice(a+1))}if(!l.place&&l.ancestors&&l.ancestors){const a=l.ancestors[l.ancestors.length-1];a&&(l.place=a.position)}const u=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=u?u.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=u?u.line:void 0,this.name=Lr(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=o&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual,this.expected,this.note,this.url}}Re.prototype.file="";Re.prototype.name="";Re.prototype.reason="";Re.prototype.message="";Re.prototype.stack="";Re.prototype.column=void 0;Re.prototype.line=void 0;Re.prototype.ancestors=void 0;Re.prototype.cause=void 0;Re.prototype.fatal=void 0;Re.prototype.place=void 0;Re.prototype.ruleId=void 0;Re.prototype.source=void 0;const yn={basename:C1,dirname:E1,extname:_1,join:T1,sep:"/"};function C1(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');ti(e);let t=0,r=-1,i=e.length,l;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let o=-1,u=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else o<0&&(l=!0,o=i+1),u>-1&&(e.codePointAt(i)===n.codePointAt(u--)?u<0&&(r=i):(u=-1,r=o));return t===r?r=o:r<0&&(r=e.length),e.slice(t,r)}function E1(e){if(ti(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function _1(e){ti(e);let n=e.length,t=-1,r=0,i=-1,l=0,o;for(;n--;){const u=e.codePointAt(n);if(u===47){if(o){r=n+1;break}continue}t<0&&(o=!0,t=n+1),u===46?i<0?i=n:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||t<0||l===0||l===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function T1(...e){let n=-1,t;for(;++n<e.length;)ti(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":I1(t)}function I1(e){ti(e);const n=e.codePointAt(0)===47;let t=P1(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function P1(e,n){let t="",r=0,i=-1,l=0,o=-1,u,a;for(;++o<=e.length;){if(o<e.length)u=e.codePointAt(o);else{if(u===47)break;u=47}if(u===47){if(!(i===o-1||l===1))if(i!==o-1&&l===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(a=t.lastIndexOf("/"),a!==t.length-1){a<0?(t="",r=0):(t=t.slice(0,a),r=t.length-1-t.lastIndexOf("/")),i=o,l=0;continue}}else if(t.length>0){t="",r=0,i=o,l=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,o):t=e.slice(i+1,o),r=o-i-1;i=o,l=0}else u===46&&l>-1?l++:l=-1}return t}function ti(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const z1={cwd:M1};function M1(){return"/"}function gu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function L1(e){if(typeof e=="string")e=new URL(e);else if(!gu(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return A1(e)}function A1(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const lo=["history","path","basename","stem","extname","dirname"];class F1{constructor(n){let t;n?gu(n)?t={path:n}:typeof n=="string"||D1(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":z1.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<lo.length;){const l=lo[r];l in t&&t[l]!==void 0&&t[l]!==null&&(this[l]=l==="history"?[...t[l]]:t[l])}let i;for(i in t)lo.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?yn.basename(this.path):void 0}set basename(n){uo(n,"basename"),oo(n,"basename"),this.path=yn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?yn.dirname(this.path):void 0}set dirname(n){oc(this.basename,"dirname"),this.path=yn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?yn.extname(this.path):void 0}set extname(n){if(oo(n,"extname"),oc(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=yn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){gu(n)&&(n=L1(n)),uo(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?yn.basename(this.path,this.extname):void 0}set stem(n){uo(n,"stem"),oo(n,"stem"),this.path=yn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new Re(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function oo(e,n){if(e&&e.includes(yn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+yn.sep+"`")}function uo(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function oc(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function D1(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const N1=function(e){const r=this.constructor.prototype,i=r[e],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l},j1={}.hasOwnProperty;class ka extends N1{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=w1()}copy(){const n=new ka;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(io(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(co("data",this.frozen),this.namespace[n]=t,this):j1.call(this.namespace,n)&&this.namespace[n]||void 0:n?(co("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Ci(n),r=this.parser||this.Parser;return ao("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),ao("process",this.parser||this.Parser),so("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(l,o){const u=Ci(n),a=r.parse(u);r.run(a,u,function(f,c,d){if(f||!c||!d)return s(f);const p=c,k=r.stringify(p,d);R1(k)?d.value=k:d.result=k,s(f,d)});function s(f,c){f||!c?o(f):l?l(c):t(void 0,c)}}}processSync(n){let t=!1,r;return this.freeze(),ao("processSync",this.parser||this.Parser),so("processSync",this.compiler||this.Compiler),this.process(n,i),ac("processSync","process",t),r;function i(l,o){t=!0,Js(l),r=o}}run(n,t,r){uc(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?l(void 0,r):new Promise(l);function l(o,u){const a=Ci(t);i.run(n,a,s);function s(f,c,d){const p=c||n;f?u(f):o?o(p):r(void 0,p,d)}}}runSync(n,t){let r=!1,i;return this.run(n,t,l),ac("runSync","run",r),i;function l(o,u){Js(o),i=u,r=!0}}stringify(n,t){this.freeze();const r=Ci(t),i=this.compiler||this.Compiler;return so("stringify",i),uc(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(co("use",this.frozen),n!=null)if(typeof n=="function")a(n,t);else if(typeof n=="object")Array.isArray(n)?u(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function l(s){if(typeof s=="function")a(s,[]);else if(typeof s=="object")if(Array.isArray(s)){const[f,...c]=s;a(f,c)}else o(s);else throw new TypeError("Expected usable value, not `"+s+"`")}function o(s){if(!("plugins"in s)&&!("settings"in s))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");u(s.plugins),s.settings&&(i.settings=io(!0,i.settings,s.settings))}function u(s){let f=-1;if(s!=null)if(Array.isArray(s))for(;++f<s.length;){const c=s[f];l(c)}else throw new TypeError("Expected a list of plugins, not `"+s+"`")}function a(s,f){let c=-1,d=-1;for(;++c<r.length;)if(r[c][0]===s){d=c;break}if(d===-1)r.push([s,...f]);else if(f.length>0){let[p,...k]=f;const S=r[d][1];hu(S)&&hu(p)&&(p=io(!0,S,p)),r[d]=[s,p,...k]}}}}const Jd=new ka().freeze();function ao(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function so(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function co(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function uc(e){if(!hu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function ac(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Ci(e){return O1(e)?e:new F1(e)}function O1(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function R1(e){return typeof e=="string"||$1(e)}function $1(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}function sc(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(n);for(;i!==-1;)r++,i=t.indexOf(n,i+n.length);return r}const Ie=lt(/[A-Za-z]/),De=lt(/[\dA-Za-z]/),b1=lt(/[#-'*+\--9=?A-Z^-~]/);function cl(e){return e!==null&&(e<32||e===127)}const yu=lt(/\d/),B1=lt(/[\dA-Fa-f]/),H1=lt(/[!-/:-@[-`{-~]/);function j(e){return e!==null&&e<-2}function J(e){return e!==null&&(e<0||e===32)}function b(e){return e===-2||e===-1||e===32}const Ml=lt(new RegExp("\\p{P}|\\p{S}","u")),wt=lt(/\s/);function lt(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function V1(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function U1(e,n,t){const i=Pl((t||{}).ignore||[]),l=W1(n);let o=-1;for(;++o<l.length;)Yd(e,"text",u);function u(s,f){let c=-1,d;for(;++c<f.length;){const p=f[c],k=d?d.children:void 0;if(i(p,k?k.indexOf(p):void 0,d))return;d=p}if(d)return a(s,f)}function a(s,f){const c=f[f.length-1],d=l[o][0],p=l[o][1];let k=0;const I=c.children.indexOf(s);let h=!1,m=[];d.lastIndex=0;let g=d.exec(s.value);for(;g;){const C=g.index,_={index:g.index,input:g.input,stack:[...f,s]};let v=p(...g,_);if(typeof v=="string"&&(v=v.length>0?{type:"text",value:v}:void 0),v===!1?d.lastIndex=C+1:(k!==C&&m.push({type:"text",value:s.value.slice(k,C)}),Array.isArray(v)?m.push(...v):v&&m.push(v),k=C+g[0].length,h=!0),!d.global)break;g=d.exec(s.value)}return h?(k<s.value.length&&m.push({type:"text",value:s.value.slice(k)}),c.children.splice(I,1,...m)):m=[s],I+m.length}}function W1(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<t.length;){const i=t[r];n.push([Q1(i[0]),q1(i[1])])}return n}function Q1(e){return typeof e=="string"?new RegExp(V1(e),"g"):e}function q1(e){return typeof e=="function"?e:function(){return e}}const fo="phrasing",po=["autolink","link","image","label"];function Y1(){return{transforms:[n0],enter:{literalAutolink:X1,literalAutolinkEmail:ho,literalAutolinkHttp:ho,literalAutolinkWww:ho},exit:{literalAutolink:e0,literalAutolinkEmail:Z1,literalAutolinkHttp:J1,literalAutolinkWww:K1}}}function G1(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:fo,notInConstruct:po},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:fo,notInConstruct:po},{character:":",before:"[ps]",after:"\\/",inConstruct:fo,notInConstruct:po}]}}function X1(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function ho(e){this.config.enter.autolinkProtocol.call(this,e)}function J1(e){this.config.exit.autolinkProtocol.call(this,e)}function K1(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function Z1(e){this.config.exit.autolinkEmail.call(this,e)}function e0(e){this.exit(e)}function n0(e){U1(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,t0],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),r0]],{ignore:["link","linkReference"]})}function t0(e,n,t,r,i){let l="";if(!Kd(i)||(/^w/i.test(n)&&(t=n+t,n="",l="http://"),!i0(t)))return!1;const o=l0(t+r);if(!o[0])return!1;const u={type:"link",title:null,url:l+n+o[0],children:[{type:"text",value:n+o[0]}]};return o[1]?[u,{type:"text",value:o[1]}]:u}function r0(e,n,t,r){return!Kd(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function i0(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function l0(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],r=t.indexOf(")");const i=sc(e,"(");let l=sc(e,")");for(;r!==-1&&i>l;)e+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),l++;return[e,t]}function Kd(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||wt(t)||Ml(t))&&(!n||t!==47)}function dn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}Zd.peek=h0;function o0(){this.buffer()}function u0(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function a0(){this.buffer()}function s0(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function c0(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=dn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function f0(e){this.exit(e)}function d0(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=dn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function p0(e){this.exit(e)}function h0(){return"["}function Zd(e,n,t,r){const i=t.createTracker(r);let l=i.move("[^");const o=t.enter("footnoteReference"),u=t.enter("reference");return l+=i.move(t.safe(t.associationId(e),{after:"]",before:l})),u(),o(),l+=i.move("]"),l}function m0(){return{enter:{gfmFootnoteCallString:o0,gfmFootnoteCall:u0,gfmFootnoteDefinitionLabelString:a0,gfmFootnoteDefinition:s0},exit:{gfmFootnoteCallString:c0,gfmFootnoteCall:f0,gfmFootnoteDefinitionLabelString:d0,gfmFootnoteDefinition:p0}}}function g0(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:Zd},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,l,o){const u=l.createTracker(o);let a=u.move("[^");const s=l.enter("footnoteDefinition"),f=l.enter("label");return a+=u.move(l.safe(l.associationId(r),{before:a,after:"]"})),f(),a+=u.move("]:"),r.children&&r.children.length>0&&(u.shift(4),a+=u.move((n?`
`:" ")+l.indentLines(l.containerFlow(r,u.current()),n?ep:y0))),s(),a}}function y0(e,n,t){return n===0?e:ep(e,n,t)}function ep(e,n,t){return(t?"":"    ")+e}const k0=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];np.peek=C0;function x0(){return{canContainEols:["delete"],enter:{strikethrough:w0},exit:{strikethrough:S0}}}function v0(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:k0}],handlers:{delete:np}}}function w0(e){this.enter({type:"delete",children:[]},e)}function S0(e){this.exit(e)}function np(e,n,t,r){const i=t.createTracker(r),l=t.enter("strikethrough");let o=i.move("~~");return o+=t.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),l(),o}function C0(){return"~"}function E0(e){return e.length}function _0(e,n){const t=n||{},r=(t.align||[]).concat(),i=t.stringLength||E0,l=[],o=[],u=[],a=[];let s=0,f=-1;for(;++f<e.length;){const S=[],I=[];let h=-1;for(e[f].length>s&&(s=e[f].length);++h<e[f].length;){const m=T0(e[f][h]);if(t.alignDelimiters!==!1){const g=i(m);I[h]=g,(a[h]===void 0||g>a[h])&&(a[h]=g)}S.push(m)}o[f]=S,u[f]=I}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<s;)l[c]=cc(r[c]);else{const S=cc(r);for(;++c<s;)l[c]=S}c=-1;const d=[],p=[];for(;++c<s;){const S=l[c];let I="",h="";S===99?(I=":",h=":"):S===108?I=":":S===114&&(h=":");let m=t.alignDelimiters===!1?1:Math.max(1,a[c]-I.length-h.length);const g=I+"-".repeat(m)+h;t.alignDelimiters!==!1&&(m=I.length+m+h.length,m>a[c]&&(a[c]=m),p[c]=m),d[c]=g}o.splice(1,0,d),u.splice(1,0,p),f=-1;const k=[];for(;++f<o.length;){const S=o[f],I=u[f];c=-1;const h=[];for(;++c<s;){const m=S[c]||"";let g="",C="";if(t.alignDelimiters!==!1){const _=a[c]-(I[c]||0),v=l[c];v===114?g=" ".repeat(_):v===99?_%2?(g=" ".repeat(_/2+.5),C=" ".repeat(_/2-.5)):(g=" ".repeat(_/2),C=g):C=" ".repeat(_)}t.delimiterStart!==!1&&!c&&h.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&m==="")&&(t.delimiterStart!==!1||c)&&h.push(" "),t.alignDelimiters!==!1&&h.push(g),h.push(m),t.alignDelimiters!==!1&&h.push(C),t.padding!==!1&&h.push(" "),(t.delimiterEnd!==!1||c!==s-1)&&h.push("|")}k.push(t.delimiterEnd===!1?h.join("").replace(/ +$/,""):h.join(""))}return k.join(`
`)}function T0(e){return e==null?"":String(e)}function cc(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}const fc={}.hasOwnProperty;function I0(e,n){const t=n||{};function r(i,...l){let o=r.invalid;const u=r.handlers;if(i&&fc.call(i,e)){const a=String(i[e]);o=fc.call(u,a)?u[a]:r.unknown}if(o)return o.call(this,i,...l)}return r.handlers=t.handlers||{},r.invalid=t.invalid,r.unknown=t.unknown,r}const P0={}.hasOwnProperty;function tp(e,n){let t=-1,r;if(n.extensions)for(;++t<n.extensions.length;)tp(e,n.extensions[t]);for(r in n)if(P0.call(n,r))switch(r){case"extensions":break;case"unsafe":{dc(e[r],n[r]);break}case"join":{dc(e[r],n[r]);break}case"handlers":{z0(e[r],n[r]);break}default:e.options[r]=n[r]}return e}function dc(e,n){n&&e.push(...n)}function z0(e,n){n&&Object.assign(e,n)}function M0(e,n,t,r){const i=t.enter("blockquote"),l=t.createTracker(r);l.move("> "),l.shift(2);const o=t.indentLines(t.containerFlow(e,l.current()),L0);return i(),o}function L0(e,n,t){return">"+(t?"":" ")+e}function rp(e,n){return pc(e,n.inConstruct,!0)&&!pc(e,n.notInConstruct,!1)}function pc(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function hc(e,n,t,r){let i=-1;for(;++i<t.unsafe.length;)if(t.unsafe[i].character===`
`&&rp(t.stack,t.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function A0(e,n){const t=String(e);let r=t.indexOf(n),i=r,l=0,o=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++l>o&&(o=l):l=1,i=r+n.length,r=t.indexOf(n,i);return o}function ku(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function F0(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function D0(e,n,t,r){const i=F0(t),l=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(ku(e,t)){const c=t.enter("codeIndented"),d=t.indentLines(l,N0);return c(),d}const u=t.createTracker(r),a=i.repeat(Math.max(A0(l,i)+1,3)),s=t.enter("codeFenced");let f=u.move(a);if(e.lang){const c=t.enter(`codeFencedLang${o}`);f+=u.move(t.safe(e.lang,{before:f,after:" ",encode:["`"],...u.current()})),c()}if(e.lang&&e.meta){const c=t.enter(`codeFencedMeta${o}`);f+=u.move(" "),f+=u.move(t.safe(e.meta,{before:f,after:`
`,encode:["`"],...u.current()})),c()}return f+=u.move(`
`),l&&(f+=u.move(l+`
`)),f+=u.move(a),s(),f}function N0(e,n,t){return(t?"":"    ")+e}function xa(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function j0(e,n,t,r){const i=xa(t),l=i==='"'?"Quote":"Apostrophe",o=t.enter("definition");let u=t.enter("label");const a=t.createTracker(r);let s=a.move("[");return s+=a.move(t.safe(t.associationId(e),{before:s,after:"]",...a.current()})),s+=a.move("]: "),u(),!e.url||/[\0- \u007F]/.test(e.url)?(u=t.enter("destinationLiteral"),s+=a.move("<"),s+=a.move(t.safe(e.url,{before:s,after:">",...a.current()})),s+=a.move(">")):(u=t.enter("destinationRaw"),s+=a.move(t.safe(e.url,{before:s,after:e.title?" ":`
`,...a.current()}))),u(),e.title&&(u=t.enter(`title${l}`),s+=a.move(" "+i),s+=a.move(t.safe(e.title,{before:s,after:i,...a.current()})),s+=a.move(i),u()),o(),s}function O0(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function nt(e){return"&#x"+e.toString(16).toUpperCase()+";"}function er(e){if(e===null||J(e)||wt(e))return 1;if(Ml(e))return 2}function fl(e,n,t){const r=er(e),i=er(n);return r===void 0?i===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}ip.peek=R0;function ip(e,n,t,r){const i=O0(t),l=t.enter("emphasis"),o=t.createTracker(r),u=o.move(i);let a=o.move(t.containerPhrasing(e,{after:i,before:u,...o.current()}));const s=a.charCodeAt(0),f=fl(r.before.charCodeAt(r.before.length-1),s,i);f.inside&&(a=nt(s)+a.slice(1));const c=a.charCodeAt(a.length-1),d=fl(r.after.charCodeAt(0),c,i);d.inside&&(a=a.slice(0,-1)+nt(c));const p=o.move(i);return l(),t.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},u+a+p}function R0(e,n,t){return t.options.emphasis||"*"}const $0={};function va(e,n){const t=$0,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return lp(e,r,i)}function lp(e,n,t){if(b0(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return mc(e.children,n,t)}return Array.isArray(e)?mc(e,n,t):""}function mc(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=lp(e[i],n,t);return r.join("")}function b0(e){return!!(e&&typeof e=="object")}function op(e,n){let t=!1;return ni(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,pu}),!!((!e.depth||e.depth<3)&&va(e)&&(n.options.setext||t))}function B0(e,n,t,r){const i=Math.max(Math.min(6,e.depth||1),1),l=t.createTracker(r);if(op(e,t)){const f=t.enter("headingSetext"),c=t.enter("phrasing"),d=t.containerPhrasing(e,{...l.current(),before:`
`,after:`
`});return c(),f(),d+`
`+(i===1?"=":"-").repeat(d.length-(Math.max(d.lastIndexOf("\r"),d.lastIndexOf(`
`))+1))}const o="#".repeat(i),u=t.enter("headingAtx"),a=t.enter("phrasing");l.move(o+" ");let s=t.containerPhrasing(e,{before:"# ",after:`
`,...l.current()});return/^[\t ]/.test(s)&&(s=nt(s.charCodeAt(0))+s.slice(1)),s=s?o+" "+s:o,t.options.closeAtx&&(s+=" "+o),a(),u(),s}up.peek=H0;function up(e){return e.value||""}function H0(){return"<"}ap.peek=V0;function ap(e,n,t,r){const i=xa(t),l=i==='"'?"Quote":"Apostrophe",o=t.enter("image");let u=t.enter("label");const a=t.createTracker(r);let s=a.move("![");return s+=a.move(t.safe(e.alt,{before:s,after:"]",...a.current()})),s+=a.move("]("),u(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(u=t.enter("destinationLiteral"),s+=a.move("<"),s+=a.move(t.safe(e.url,{before:s,after:">",...a.current()})),s+=a.move(">")):(u=t.enter("destinationRaw"),s+=a.move(t.safe(e.url,{before:s,after:e.title?" ":")",...a.current()}))),u(),e.title&&(u=t.enter(`title${l}`),s+=a.move(" "+i),s+=a.move(t.safe(e.title,{before:s,after:i,...a.current()})),s+=a.move(i),u()),s+=a.move(")"),o(),s}function V0(){return"!"}sp.peek=U0;function sp(e,n,t,r){const i=e.referenceType,l=t.enter("imageReference");let o=t.enter("label");const u=t.createTracker(r);let a=u.move("![");const s=t.safe(e.alt,{before:a,after:"]",...u.current()});a+=u.move(s+"]["),o();const f=t.stack;t.stack=[],o=t.enter("reference");const c=t.safe(t.associationId(e),{before:a,after:"]",...u.current()});return o(),t.stack=f,l(),i==="full"||!s||s!==c?a+=u.move(c+"]"):i==="shortcut"?a=a.slice(0,-1):a+=u.move("]"),a}function U0(){return"!"}cp.peek=W0;function cp(e,n,t){let r=e.value||"",i="`",l=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++l<t.unsafe.length;){const o=t.unsafe[l],u=t.compilePattern(o);let a;if(o.atBreak)for(;a=u.exec(r);){let s=a.index;r.charCodeAt(s)===10&&r.charCodeAt(s-1)===13&&s--,r=r.slice(0,s)+" "+r.slice(a.index+1)}}return i+r+i}function W0(){return"`"}function fp(e,n){const t=va(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}dp.peek=Q0;function dp(e,n,t,r){const i=xa(t),l=i==='"'?"Quote":"Apostrophe",o=t.createTracker(r);let u,a;if(fp(e,t)){const f=t.stack;t.stack=[],u=t.enter("autolink");let c=o.move("<");return c+=o.move(t.containerPhrasing(e,{before:c,after:">",...o.current()})),c+=o.move(">"),u(),t.stack=f,c}u=t.enter("link"),a=t.enter("label");let s=o.move("[");return s+=o.move(t.containerPhrasing(e,{before:s,after:"](",...o.current()})),s+=o.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=t.enter("destinationLiteral"),s+=o.move("<"),s+=o.move(t.safe(e.url,{before:s,after:">",...o.current()})),s+=o.move(">")):(a=t.enter("destinationRaw"),s+=o.move(t.safe(e.url,{before:s,after:e.title?" ":")",...o.current()}))),a(),e.title&&(a=t.enter(`title${l}`),s+=o.move(" "+i),s+=o.move(t.safe(e.title,{before:s,after:i,...o.current()})),s+=o.move(i),a()),s+=o.move(")"),u(),s}function Q0(e,n,t){return fp(e,t)?"<":"["}pp.peek=q0;function pp(e,n,t,r){const i=e.referenceType,l=t.enter("linkReference");let o=t.enter("label");const u=t.createTracker(r);let a=u.move("[");const s=t.containerPhrasing(e,{before:a,after:"]",...u.current()});a+=u.move(s+"]["),o();const f=t.stack;t.stack=[],o=t.enter("reference");const c=t.safe(t.associationId(e),{before:a,after:"]",...u.current()});return o(),t.stack=f,l(),i==="full"||!s||s!==c?a+=u.move(c+"]"):i==="shortcut"?a=a.slice(0,-1):a+=u.move("]"),a}function q0(){return"["}function wa(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function Y0(e){const n=wa(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function G0(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function hp(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function X0(e,n,t,r){const i=t.enter("list"),l=t.bulletCurrent;let o=e.ordered?G0(t):wa(t);const u=e.ordered?o==="."?")":".":Y0(t);let a=n&&t.bulletLastUsed?o===t.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&f&&(!f.children||!f.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(a=!0),hp(t)===o&&f){let c=-1;for(;++c<e.children.length;){const d=e.children[c];if(d&&d.type==="listItem"&&d.children&&d.children[0]&&d.children[0].type==="thematicBreak"){a=!0;break}}}}a&&(o=u),t.bulletCurrent=o;const s=t.containerFlow(e,r);return t.bulletLastUsed=o,t.bulletCurrent=l,i(),s}function J0(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function K0(e,n,t,r){const i=J0(t);let l=t.bulletCurrent||wa(t);n&&n.type==="list"&&n.ordered&&(l=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+l);let o=l.length+1;(i==="tab"||i==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(o=Math.ceil(o/4)*4);const u=t.createTracker(r);u.move(l+" ".repeat(o-l.length)),u.shift(o);const a=t.enter("listItem"),s=t.indentLines(t.containerFlow(e,u.current()),f);return a(),s;function f(c,d,p){return d?(p?"":" ".repeat(o))+c:(p?l:l+" ".repeat(o-l.length))+c}}function Z0(e,n,t,r){const i=t.enter("paragraph"),l=t.enter("phrasing"),o=t.containerPhrasing(e,r);return l(),i(),o}const ey=Pl(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function ny(e,n,t,r){return(e.children.some(function(o){return ey(o)})?t.containerPhrasing:t.containerFlow).call(t,e,r)}function ty(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}mp.peek=ry;function mp(e,n,t,r){const i=ty(t),l=t.enter("strong"),o=t.createTracker(r),u=o.move(i+i);let a=o.move(t.containerPhrasing(e,{after:i,before:u,...o.current()}));const s=a.charCodeAt(0),f=fl(r.before.charCodeAt(r.before.length-1),s,i);f.inside&&(a=nt(s)+a.slice(1));const c=a.charCodeAt(a.length-1),d=fl(r.after.charCodeAt(0),c,i);d.inside&&(a=a.slice(0,-1)+nt(c));const p=o.move(i+i);return l(),t.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},u+a+p}function ry(e,n,t){return t.options.strong||"*"}function iy(e,n,t,r){return t.safe(e.value,r)}function ly(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function oy(e,n,t){const r=(hp(t)+(t.options.ruleSpaces?" ":"")).repeat(ly(t));return t.options.ruleSpaces?r.slice(0,-1):r}const Sa={blockquote:M0,break:hc,code:D0,definition:j0,emphasis:ip,hardBreak:hc,heading:B0,html:up,image:ap,imageReference:sp,inlineCode:cp,link:dp,linkReference:pp,list:X0,listItem:K0,paragraph:Z0,root:ny,strong:mp,text:iy,thematicBreak:oy},uy=[ay];function ay(e,n,t,r){if(n.type==="code"&&ku(n,r)&&(e.type==="list"||e.type===n.type&&ku(e,r)))return!1;if("spread"in t&&typeof t.spread=="boolean")return e.type==="paragraph"&&(e.type===n.type||n.type==="definition"||n.type==="heading"&&op(n,r))?void 0:t.spread?1:0}const ut=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"],sy=[{character:"	",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",before:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"\r",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:`
`,inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:" ",after:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",before:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"!",after:"\\[",inConstruct:"phrasing",notInConstruct:ut},{character:'"',inConstruct:"titleQuote"},{atBreak:!0,character:"#"},{character:"#",inConstruct:"headingAtx",after:`(?:[\r
]|$)`},{character:"&",after:"[#A-Za-z]",inConstruct:"phrasing"},{character:"'",inConstruct:"titleApostrophe"},{character:"(",inConstruct:"destinationRaw"},{before:"\\]",character:"(",inConstruct:"phrasing",notInConstruct:ut},{atBreak:!0,before:"\\d+",character:")"},{character:")",inConstruct:"destinationRaw"},{atBreak:!0,character:"*",after:`(?:[ 	\r
*])`},{character:"*",inConstruct:"phrasing",notInConstruct:ut},{atBreak:!0,character:"+",after:`(?:[ 	\r
])`},{atBreak:!0,character:"-",after:`(?:[ 	\r
-])`},{atBreak:!0,before:"\\d+",character:".",after:`(?:[ 	\r
]|$)`},{atBreak:!0,character:"<",after:"[!/?A-Za-z]"},{character:"<",after:"[!/?A-Za-z]",inConstruct:"phrasing",notInConstruct:ut},{character:"<",inConstruct:"destinationLiteral"},{atBreak:!0,character:"="},{atBreak:!0,character:">"},{character:">",inConstruct:"destinationLiteral"},{atBreak:!0,character:"["},{character:"[",inConstruct:"phrasing",notInConstruct:ut},{character:"[",inConstruct:["label","reference"]},{character:"\\",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"]",inConstruct:["label","reference"]},{atBreak:!0,character:"_"},{character:"_",inConstruct:"phrasing",notInConstruct:ut},{atBreak:!0,character:"`"},{character:"`",inConstruct:["codeFencedLangGraveAccent","codeFencedMetaGraveAccent"]},{character:"`",inConstruct:"phrasing",notInConstruct:ut},{atBreak:!0,character:"~"}],gc=document.createElement("i");function Ca(e){const n="&"+e+";";gc.innerHTML=n;const t=gc.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function gp(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}const cy=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function yp(e){return e.replace(cy,fy)}function fy(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),l=i===120||i===88;return gp(t.slice(l?2:1),l?16:10)}return Ca(t)||e}function dy(e){return e.label||!e.identifier?e.label||"":yp(e.identifier)}function py(e){if(!e._compiled){const n=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=new RegExp((n?"("+n+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function hy(e,n,t){const r=n.indexStack,i=e.children||[],l=[];let o=-1,u=t.before,a;r.push(-1);let s=n.createTracker(t);for(;++o<i.length;){const f=i[o];let c;if(r[r.length-1]=o,o+1<i.length){let k=n.handle.handlers[i[o+1].type];k&&k.peek&&(k=k.peek),c=k?k(i[o+1],e,n,{before:"",after:"",...s.current()}).charAt(0):""}else c=t.after;l.length>0&&(u==="\r"||u===`
`)&&f.type==="html"&&(l[l.length-1]=l[l.length-1].replace(/(\r?\n|\r)$/," "),u=" ",s=n.createTracker(t),s.move(l.join("")));let d=n.handle(f,e,n,{...s.current(),after:c,before:u});a&&a===d.slice(0,1)&&(d=nt(a.charCodeAt(0))+d.slice(1));const p=n.attentionEncodeSurroundingInfo;n.attentionEncodeSurroundingInfo=void 0,a=void 0,p&&(l.length>0&&p.before&&u===l[l.length-1].slice(-1)&&(l[l.length-1]=l[l.length-1].slice(0,-1)+nt(u.charCodeAt(0))),p.after&&(a=c)),s.move(d),l.push(d),u=d.slice(-1)}return r.pop(),l.join("")}function my(e,n,t){const r=n.indexStack,i=e.children||[],l=n.createTracker(t),o=[];let u=-1;for(r.push(-1);++u<i.length;){const a=i[u];r[r.length-1]=u,o.push(l.move(n.handle(a,e,n,{before:`
`,after:`
`,...l.current()}))),a.type!=="list"&&(n.bulletLastUsed=void 0),u<i.length-1&&o.push(l.move(gy(a,i[u+1],e,n)))}return r.pop(),o.join("")}function gy(e,n,t,r){let i=r.join.length;for(;i--;){const l=r.join[i](e,n,t,r);if(l===!0||l===1)break;if(typeof l=="number")return`
`.repeat(1+l);if(l===!1)return`

<!---->

`}return`

`}const yy=/\r?\n|\r/g;function ky(e,n){const t=[];let r=0,i=0,l;for(;l=yy.exec(e);)o(e.slice(r,l.index)),t.push(l[0]),r=l.index+l[0].length,i++;return o(e.slice(r)),t.join("");function o(u){t.push(n(u,i,!u))}}function xy(e,n,t){const r=(t.before||"")+(n||"")+(t.after||""),i=[],l=[],o={};let u=-1;for(;++u<e.unsafe.length;){const f=e.unsafe[u];if(!rp(e.stack,f))continue;const c=e.compilePattern(f);let d;for(;d=c.exec(r);){const p="before"in f||!!f.atBreak,k="after"in f,S=d.index+(p?d[1].length:0);i.includes(S)?(o[S].before&&!p&&(o[S].before=!1),o[S].after&&!k&&(o[S].after=!1)):(i.push(S),o[S]={before:p,after:k})}}i.sort(vy);let a=t.before?t.before.length:0;const s=r.length-(t.after?t.after.length:0);for(u=-1;++u<i.length;){const f=i[u];f<a||f>=s||f+1<s&&i[u+1]===f+1&&o[f].after&&!o[f+1].before&&!o[f+1].after||i[u-1]===f-1&&o[f].before&&!o[f-1].before&&!o[f-1].after||(a!==f&&l.push(yc(r.slice(a,f),"\\")),a=f,/[!-/:-@[-`{-~]/.test(r.charAt(f))&&(!t.encode||!t.encode.includes(r.charAt(f)))?l.push("\\"):(l.push(nt(r.charCodeAt(f))),a++))}return l.push(yc(r.slice(a,s),t.after)),l.join("")}function vy(e,n){return e-n}function yc(e,n){const t=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],l=e+n;let o=-1,u=0,a;for(;a=t.exec(l);)r.push(a.index);for(;++o<r.length;)u!==r[o]&&i.push(e.slice(u,r[o])),i.push("\\"),u=r[o];return i.push(e.slice(u)),i.join("")}function wy(e){const n=e||{},t=n.now||{};let r=n.lineShift||0,i=t.line||1,l=t.column||1;return{move:a,current:o,shift:u};function o(){return{now:{line:i,column:l},lineShift:r}}function u(s){r+=s}function a(s){const f=s||"",c=f.split(/\r?\n|\r/g),d=c[c.length-1];return i+=c.length-1,l=c.length===1?l+d.length:1+d.length+r,f}}function Sy(e,n){const t=n||{},r={associationId:dy,containerPhrasing:Ty,containerFlow:Iy,createTracker:wy,compilePattern:py,enter:l,handlers:{...Sa},handle:void 0,indentLines:ky,indexStack:[],join:[...uy],options:{},safe:Py,stack:[],unsafe:[...sy]};tp(r,t),r.options.tightDefinitions&&r.join.push(_y),r.handle=I0("type",{invalid:Cy,unknown:Ey,handlers:r.handlers});let i=r.handle(e,void 0,r,{before:`
`,after:`
`,now:{line:1,column:1},lineShift:0});return i&&i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i;function l(o){return r.stack.push(o),u;function u(){r.stack.pop()}}}function Cy(e){throw new Error("Cannot handle value `"+e+"`, expected node")}function Ey(e){const n=e;throw new Error("Cannot handle unknown node `"+n.type+"`")}function _y(e,n){if(e.type==="definition"&&e.type===n.type)return 0}function Ty(e,n){return hy(e,this,n)}function Iy(e,n){return my(e,this,n)}function Py(e,n){return xy(this,e,n)}function zy(){return{enter:{table:My,tableData:kc,tableHeader:kc,tableRow:Ay},exit:{codeText:Fy,table:Ly,tableData:mo,tableHeader:mo,tableRow:mo}}}function My(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function Ly(e){this.exit(e),this.data.inTable=void 0}function Ay(e){this.enter({type:"tableRow",children:[]},e)}function mo(e){this.exit(e)}function kc(e){this.enter({type:"tableCell",children:[]},e)}function Fy(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,Dy));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function Dy(e,n){return n==="|"?n:e}function Ny(e){const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,i=n.stringLength,l=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:d,table:o,tableCell:a,tableRow:u}};function o(p,k,S,I){return s(f(p,S,I),p.align)}function u(p,k,S,I){const h=c(p,S,I),m=s([h]);return m.slice(0,m.indexOf(`
`))}function a(p,k,S,I){const h=S.enter("tableCell"),m=S.enter("phrasing"),g=S.containerPhrasing(p,{...I,before:l,after:l});return m(),h(),g}function s(p,k){return _0(p,{align:k,alignDelimiters:r,padding:t,stringLength:i})}function f(p,k,S){const I=p.children;let h=-1;const m=[],g=k.enter("table");for(;++h<I.length;)m[h]=c(I[h],k,S);return g(),m}function c(p,k,S){const I=p.children;let h=-1;const m=[],g=k.enter("tableRow");for(;++h<I.length;)m[h]=a(I[h],p,k,S);return g(),m}function d(p,k,S){let I=Sa.inlineCode(p,k,S);return S.stack.includes("tableCell")&&(I=I.replace(/\|/g,"\\$&")),I}}function jy(){return{exit:{taskListCheckValueChecked:xc,taskListCheckValueUnchecked:xc,paragraph:Ry}}}function Oy(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:$y}}}function xc(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function Ry(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=n.children;let l=-1,o;for(;++l<i.length;){const u=i[l];if(u.type==="paragraph"){o=u;break}}o===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function $y(e,n,t,r){const i=e.children[0],l=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",u=t.createTracker(r);l&&u.move(o);let a=Sa.listItem(e,n,t,{...r,...u.current()});return l&&(a=a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,s)),a;function s(f){return f+o}}function by(){return[Y1(),m0(),x0(),zy(),jy()]}function By(e){return{extensions:[G1(),g0(e),v0(),Ny(e),Oy()]}}function Ue(e,n,t,r){const i=e.length;let l=0,o;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(n,t),e.splice(...o);else for(t&&e.splice(n,t);l<r.length;)o=r.slice(l,l+1e4),o.unshift(n,0),e.splice(...o),l+=1e4,n+=1e4}function Xe(e,n){return e.length>0?(Ue(e,e.length,0,n),e):n}const vc={}.hasOwnProperty;function kp(e){const n={};let t=-1;for(;++t<e.length;)Hy(n,e[t]);return n}function Hy(e,n){let t;for(t in n){const i=(vc.call(e,t)?e[t]:void 0)||(e[t]={}),l=n[t];let o;if(l)for(o in l){vc.call(i,o)||(i[o]=[]);const u=l[o];Vy(i[o],Array.isArray(u)?u:u?[u]:[])}}}function Vy(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);Ue(e,0,0,r)}const Uy={tokenize:Xy,partial:!0},xp={tokenize:Jy,partial:!0},vp={tokenize:Ky,partial:!0},wp={tokenize:Zy,partial:!0},Wy={tokenize:ek,partial:!0},Sp={name:"wwwAutolink",tokenize:Yy,previous:Ep},Cp={name:"protocolAutolink",tokenize:Gy,previous:_p},Dn={name:"emailAutolink",tokenize:qy,previous:Tp},wn={};function Qy(){return{text:wn}}let at=48;for(;at<123;)wn[at]=Dn,at++,at===58?at=65:at===91&&(at=97);wn[43]=Dn;wn[45]=Dn;wn[46]=Dn;wn[95]=Dn;wn[72]=[Dn,Cp];wn[104]=[Dn,Cp];wn[87]=[Dn,Sp];wn[119]=[Dn,Sp];function qy(e,n,t){const r=this;let i,l;return o;function o(c){return!xu(c)||!Tp.call(r,r.previous)||Ea(r.events)?t(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),u(c))}function u(c){return xu(c)?(e.consume(c),u):c===64?(e.consume(c),a):t(c)}function a(c){return c===46?e.check(Wy,f,s)(c):c===45||c===95||De(c)?(l=!0,e.consume(c),a):f(c)}function s(c){return e.consume(c),i=!0,a}function f(c){return l&&i&&Ie(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(c)):t(c)}}function Yy(e,n,t){const r=this;return i;function i(o){return o!==87&&o!==119||!Ep.call(r,r.previous)||Ea(r.events)?t(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Uy,e.attempt(xp,e.attempt(vp,l),t),t)(o))}function l(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(o)}}function Gy(e,n,t){const r=this;let i="",l=!1;return o;function o(c){return(c===72||c===104)&&_p.call(r,r.previous)&&!Ea(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),u):t(c)}function u(c){if(Ie(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),u;if(c===58){const d=i.toLowerCase();if(d==="http"||d==="https")return e.consume(c),a}return t(c)}function a(c){return c===47?(e.consume(c),l?s:(l=!0,a)):t(c)}function s(c){return c===null||cl(c)||J(c)||wt(c)||Ml(c)?t(c):e.attempt(xp,e.attempt(vp,f),t)(c)}function f(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(c)}}function Xy(e,n,t){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),l):t(o)}function l(o){return o===null?t(o):n(o)}}function Jy(e,n,t){let r,i,l;return o;function o(s){return s===46||s===95?e.check(wp,a,u)(s):s===null||J(s)||wt(s)||s!==45&&Ml(s)?a(s):(l=!0,e.consume(s),o)}function u(s){return s===95?r=!0:(i=r,r=void 0),e.consume(s),o}function a(s){return i||r||!l?t(s):n(s)}}function Ky(e,n){let t=0,r=0;return i;function i(o){return o===40?(t++,e.consume(o),i):o===41&&r<t?l(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(wp,n,l)(o):o===null||J(o)||wt(o)?n(o):(e.consume(o),i)}function l(o){return o===41&&r++,e.consume(o),i}}function Zy(e,n,t){return r;function r(u){return u===33||u===34||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===63||u===95||u===126?(e.consume(u),r):u===38?(e.consume(u),l):u===93?(e.consume(u),i):u===60||u===null||J(u)||wt(u)?n(u):t(u)}function i(u){return u===null||u===40||u===91||J(u)||wt(u)?n(u):r(u)}function l(u){return Ie(u)?o(u):t(u)}function o(u){return u===59?(e.consume(u),r):Ie(u)?(e.consume(u),o):t(u)}}function ek(e,n,t){return r;function r(l){return e.consume(l),i}function i(l){return De(l)?t(l):n(l)}}function Ep(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||J(e)}function _p(e){return!Ie(e)}function Tp(e){return!(e===47||xu(e))}function xu(e){return e===43||e===45||e===46||e===95||De(e)}function Ea(e){let n=e.length,t=!1;for(;n--;){const r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}function Ll(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(n=l(n,t),r.push(l))}return n}const vu={name:"attention",resolveAll:nk,tokenize:tk};function nk(e,n){let t=-1,r,i,l,o,u,a,s,f;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;a=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const c={...e[r][1].end},d={...e[t][1].start};wc(c,-a),wc(d,a),o={type:a>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},u={type:a>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:d},l={type:a>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:a>1?"strong":"emphasis",start:{...o.start},end:{...u.end}},e[r][1].end={...o.start},e[t][1].start={...u.end},s=[],e[r][1].end.offset-e[r][1].start.offset&&(s=Xe(s,[["enter",e[r][1],n],["exit",e[r][1],n]])),s=Xe(s,[["enter",i,n],["enter",o,n],["exit",o,n],["enter",l,n]]),s=Xe(s,Ll(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),s=Xe(s,[["exit",l,n],["enter",u,n],["exit",u,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(f=2,s=Xe(s,[["enter",e[t][1],n],["exit",e[t][1],n]])):f=0,Ue(e,r-1,t-r+3,s),t=r+s.length-f-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function tk(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=er(r);let l;return o;function o(a){return l=a,e.enter("attentionSequence"),u(a)}function u(a){if(a===l)return e.consume(a),u;const s=e.exit("attentionSequence"),f=er(a),c=!f||f===2&&i||t.includes(a),d=!i||i===2&&f||t.includes(r);return s._open=!!(l===42?c:c&&(i||!d)),s._close=!!(l===42?d:d&&(f||!c)),n(a)}}function wc(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const rk={name:"autolink",tokenize:ik};function ik(e,n,t){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(p){return Ie(p)?(e.consume(p),o):p===64?t(p):s(p)}function o(p){return p===43||p===45||p===46||De(p)?(r=1,u(p)):s(p)}function u(p){return p===58?(e.consume(p),r=0,a):(p===43||p===45||p===46||De(p))&&r++<32?(e.consume(p),u):(r=0,s(p))}function a(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||cl(p)?t(p):(e.consume(p),a)}function s(p){return p===64?(e.consume(p),f):b1(p)?(e.consume(p),s):t(p)}function f(p){return De(p)?c(p):t(p)}function c(p){return p===46?(e.consume(p),r=0,f):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):d(p)}function d(p){if((p===45||De(p))&&r++<63){const k=p===45?d:c;return e.consume(p),k}return t(p)}}function U(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return o;function o(a){return b(a)?(e.enter(t),u(a)):n(a)}function u(a){return b(a)&&l++<i?(e.consume(a),u):(e.exit(t),n(a))}}const ri={partial:!0,tokenize:lk};function lk(e,n,t){return r;function r(l){return b(l)?U(e,i,"linePrefix")(l):i(l)}function i(l){return l===null||j(l)?n(l):t(l)}}const Ip={continuation:{tokenize:uk},exit:ak,name:"blockQuote",tokenize:ok};function ok(e,n,t){const r=this;return i;function i(o){if(o===62){const u=r.containerState;return u.open||(e.enter("blockQuote",{_container:!0}),u.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),l}return t(o)}function l(o){return b(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function uk(e,n,t){const r=this;return i;function i(o){return b(o)?U(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):l(o)}function l(o){return e.attempt(Ip,n,t)(o)}}function ak(e){e.exit("blockQuote")}const Pp={name:"characterEscape",tokenize:sk};function sk(e,n,t){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return H1(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(l)}}const zp={name:"characterReference",tokenize:ck};function ck(e,n,t){const r=this;let i=0,l,o;return u;function u(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),a}function a(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),l=31,o=De,f(c))}function s(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,o=B1,f):(e.enter("characterReferenceValue"),l=7,o=yu,f(c))}function f(c){if(c===59&&i){const d=e.exit("characterReferenceValue");return o===De&&!Ca(r.sliceSerialize(d))?t(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(c)&&i++<l?(e.consume(c),f):t(c)}}const Sc={partial:!0,tokenize:dk},Cc={concrete:!0,name:"codeFenced",tokenize:fk};function fk(e,n,t){const r=this,i={partial:!0,tokenize:_};let l=0,o=0,u;return a;function a(v){return s(v)}function s(v){const T=r.events[r.events.length-1];return l=T&&T[1].type==="linePrefix"?T[2].sliceSerialize(T[1],!0).length:0,u=v,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(v)}function f(v){return v===u?(o++,e.consume(v),f):o<3?t(v):(e.exit("codeFencedFenceSequence"),b(v)?U(e,c,"whitespace")(v):c(v))}function c(v){return v===null||j(v)?(e.exit("codeFencedFence"),r.interrupt?n(v):e.check(Sc,S,C)(v)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),d(v))}function d(v){return v===null||j(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(v)):b(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),U(e,p,"whitespace")(v)):v===96&&v===u?t(v):(e.consume(v),d)}function p(v){return v===null||j(v)?c(v):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),k(v))}function k(v){return v===null||j(v)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(v)):v===96&&v===u?t(v):(e.consume(v),k)}function S(v){return e.attempt(i,C,I)(v)}function I(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),h}function h(v){return l>0&&b(v)?U(e,m,"linePrefix",l+1)(v):m(v)}function m(v){return v===null||j(v)?e.check(Sc,S,C)(v):(e.enter("codeFlowValue"),g(v))}function g(v){return v===null||j(v)?(e.exit("codeFlowValue"),m(v)):(e.consume(v),g)}function C(v){return e.exit("codeFenced"),n(v)}function _(v,T,z){let O=0;return w;function w(H){return v.enter("lineEnding"),v.consume(H),v.exit("lineEnding"),F}function F(H){return v.enter("codeFencedFence"),b(H)?U(v,N,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):N(H)}function N(H){return H===u?(v.enter("codeFencedFenceSequence"),W(H)):z(H)}function W(H){return H===u?(O++,v.consume(H),W):O>=o?(v.exit("codeFencedFenceSequence"),b(H)?U(v,K,"whitespace")(H):K(H)):z(H)}function K(H){return H===null||j(H)?(v.exit("codeFencedFence"),T(H)):z(H)}}}function dk(e,n,t){const r=this;return i;function i(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l)}function l(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}const go={name:"codeIndented",tokenize:hk},pk={partial:!0,tokenize:mk};function hk(e,n,t){const r=this;return i;function i(s){return e.enter("codeIndented"),U(e,l,"linePrefix",5)(s)}function l(s){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?o(s):t(s)}function o(s){return s===null?a(s):j(s)?e.attempt(pk,o,a)(s):(e.enter("codeFlowValue"),u(s))}function u(s){return s===null||j(s)?(e.exit("codeFlowValue"),o(s)):(e.consume(s),u)}function a(s){return e.exit("codeIndented"),n(s)}}function mk(e,n,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):j(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):U(e,l,"linePrefix",5)(o)}function l(o){const u=r.events[r.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?n(o):j(o)?i(o):t(o)}}const gk={name:"codeText",previous:kk,resolve:yk,tokenize:xk};function yk(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function kk(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function xk(e,n,t){let r=0,i,l;return o;function o(c){return e.enter("codeText"),e.enter("codeTextSequence"),u(c)}function u(c){return c===96?(e.consume(c),r++,u):(e.exit("codeTextSequence"),a(c))}function a(c){return c===null?t(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),a):c===96?(l=e.enter("codeTextSequence"),i=0,f(c)):j(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),a):(e.enter("codeTextData"),s(c))}function s(c){return c===null||c===32||c===96||j(c)?(e.exit("codeTextData"),a(c)):(e.consume(c),s)}function f(c){return c===96?(e.consume(c),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(c)):(l.type="codeTextData",s(c))}}class vk{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&gr(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),gr(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),gr(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);gr(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);gr(this.left,t.reverse())}}}function gr(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function Mp(e){const n={};let t=-1,r,i,l,o,u,a,s;const f=new vk(e);for(;++t<f.length;){for(;t in n;)t=n[t];if(r=f.get(t),t&&r[1].type==="chunkFlow"&&f.get(t-1)[1].type==="listItemPrefix"&&(a=r[1]._tokenizer.events,l=0,l<a.length&&a[l][1].type==="lineEndingBlank"&&(l+=2),l<a.length&&a[l][1].type==="content"))for(;++l<a.length&&a[l][1].type!=="content";)a[l][1].type==="chunkText"&&(a[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,wk(f,t)),t=n[t],s=!0);else if(r[1]._container){for(l=t,i=void 0;l--;)if(o=f.get(l),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=l);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},u=f.slice(i,t),u.unshift(r),f.splice(i,t-i+1,u))}}return Ue(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!s}function wk(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const l=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const u=o.events,a=[],s={};let f,c,d=-1,p=t,k=0,S=0;const I=[S];for(;p;){for(;e.get(++i)[1]!==p;);l.push(i),p._tokenizer||(f=r.sliceStream(p),p.next||f.push(null),c&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(f),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=p,p=p.next}for(p=t;++d<u.length;)u[d][0]==="exit"&&u[d-1][0]==="enter"&&u[d][1].type===u[d-1][1].type&&u[d][1].start.line!==u[d][1].end.line&&(S=d+1,I.push(S),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):I.pop(),d=I.length;d--;){const h=u.slice(I[d],I[d+1]),m=l.pop();a.push([m,m+h.length-1]),e.splice(m,2,h)}for(a.reverse(),d=-1;++d<a.length;)s[k+a[d][0]]=k+a[d][1],k+=a[d][1]-a[d][0]-1;return s}const Sk={resolve:Ek,tokenize:_k},Ck={partial:!0,tokenize:Tk};function Ek(e){return Mp(e),e}function _k(e,n){let t;return r;function r(u){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(u)}function i(u){return u===null?l(u):j(u)?e.check(Ck,o,l)(u):(e.consume(u),i)}function l(u){return e.exit("chunkContent"),e.exit("content"),n(u)}function o(u){return e.consume(u),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function Tk(e,n,t){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),U(e,l,"linePrefix")}function l(o){if(o===null||j(o))return t(o);const u=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?n(o):e.interrupt(r.parser.constructs.flow,t,n)(o)}}function Lp(e,n,t,r,i,l,o,u,a){const s=a||Number.POSITIVE_INFINITY;let f=0;return c;function c(h){return h===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(h),e.exit(l),d):h===null||h===32||h===41||cl(h)?t(h):(e.enter(r),e.enter(o),e.enter(u),e.enter("chunkString",{contentType:"string"}),S(h))}function d(h){return h===62?(e.enter(l),e.consume(h),e.exit(l),e.exit(i),e.exit(r),n):(e.enter(u),e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===62?(e.exit("chunkString"),e.exit(u),d(h)):h===null||h===60||j(h)?t(h):(e.consume(h),h===92?k:p)}function k(h){return h===60||h===62||h===92?(e.consume(h),p):p(h)}function S(h){return!f&&(h===null||h===41||J(h))?(e.exit("chunkString"),e.exit(u),e.exit(o),e.exit(r),n(h)):f<s&&h===40?(e.consume(h),f++,S):h===41?(e.consume(h),f--,S):h===null||h===32||h===40||cl(h)?t(h):(e.consume(h),h===92?I:S)}function I(h){return h===40||h===41||h===92?(e.consume(h),S):S(h)}}function Ap(e,n,t,r,i,l){const o=this;let u=0,a;return s;function s(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(l),f}function f(p){return u>999||p===null||p===91||p===93&&!a||p===94&&!u&&"_hiddenFootnoteSupport"in o.parser.constructs?t(p):p===93?(e.exit(l),e.enter(i),e.consume(p),e.exit(i),e.exit(r),n):j(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===null||p===91||p===93||j(p)||u++>999?(e.exit("chunkString"),f(p)):(e.consume(p),a||(a=!b(p)),p===92?d:c)}function d(p){return p===91||p===92||p===93?(e.consume(p),u++,c):c(p)}}function Fp(e,n,t,r,i,l){let o;return u;function u(d){return d===34||d===39||d===40?(e.enter(r),e.enter(i),e.consume(d),e.exit(i),o=d===40?41:d,a):t(d)}function a(d){return d===o?(e.enter(i),e.consume(d),e.exit(i),e.exit(r),n):(e.enter(l),s(d))}function s(d){return d===o?(e.exit(l),a(o)):d===null?t(d):j(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),U(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(d))}function f(d){return d===o||d===null||j(d)?(e.exit("chunkString"),s(d)):(e.consume(d),d===92?c:f)}function c(d){return d===o||d===92?(e.consume(d),f):f(d)}}function Ar(e,n){let t;return r;function r(i){return j(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):b(i)?U(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const Ik={name:"definition",tokenize:zk},Pk={partial:!0,tokenize:Mk};function zk(e,n,t){const r=this;let i;return l;function l(p){return e.enter("definition"),o(p)}function o(p){return Ap.call(r,e,u,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function u(p){return i=dn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),a):t(p)}function a(p){return J(p)?Ar(e,s)(p):s(p)}function s(p){return Lp(e,f,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function f(p){return e.attempt(Pk,c,c)(p)}function c(p){return b(p)?U(e,d,"whitespace")(p):d(p)}function d(p){return p===null||j(p)?(e.exit("definition"),r.parser.defined.push(i),n(p)):t(p)}}function Mk(e,n,t){return r;function r(u){return J(u)?Ar(e,i)(u):t(u)}function i(u){return Fp(e,l,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(u)}function l(u){return b(u)?U(e,o,"whitespace")(u):o(u)}function o(u){return u===null||j(u)?n(u):t(u)}}const Lk={name:"hardBreakEscape",tokenize:Ak};function Ak(e,n,t){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),i}function i(l){return j(l)?(e.exit("hardBreakEscape"),n(l)):t(l)}}const Fk={name:"headingAtx",resolve:Dk,tokenize:Nk};function Dk(e,n){let t=e.length-2,r=3,i,l;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},l={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},Ue(e,r,t-r+1,[["enter",i,n],["enter",l,n],["exit",l,n],["exit",i,n]])),e}function Nk(e,n,t){let r=0;return i;function i(f){return e.enter("atxHeading"),l(f)}function l(f){return e.enter("atxHeadingSequence"),o(f)}function o(f){return f===35&&r++<6?(e.consume(f),o):f===null||J(f)?(e.exit("atxHeadingSequence"),u(f)):t(f)}function u(f){return f===35?(e.enter("atxHeadingSequence"),a(f)):f===null||j(f)?(e.exit("atxHeading"),n(f)):b(f)?U(e,u,"whitespace")(f):(e.enter("atxHeadingText"),s(f))}function a(f){return f===35?(e.consume(f),a):(e.exit("atxHeadingSequence"),u(f))}function s(f){return f===null||f===35||J(f)?(e.exit("atxHeadingText"),u(f)):(e.consume(f),s)}}const jk=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ec=["pre","script","style","textarea"],Ok={concrete:!0,name:"htmlFlow",resolveTo:bk,tokenize:Bk},Rk={partial:!0,tokenize:Vk},$k={partial:!0,tokenize:Hk};function bk(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function Bk(e,n,t){const r=this;let i,l,o,u,a;return s;function s(x){return f(x)}function f(x){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(x),c}function c(x){return x===33?(e.consume(x),d):x===47?(e.consume(x),l=!0,S):x===63?(e.consume(x),i=3,r.interrupt?n:y):Ie(x)?(e.consume(x),o=String.fromCharCode(x),I):t(x)}function d(x){return x===45?(e.consume(x),i=2,p):x===91?(e.consume(x),i=5,u=0,k):Ie(x)?(e.consume(x),i=4,r.interrupt?n:y):t(x)}function p(x){return x===45?(e.consume(x),r.interrupt?n:y):t(x)}function k(x){const pe="CDATA[";return x===pe.charCodeAt(u++)?(e.consume(x),u===pe.length?r.interrupt?n:N:k):t(x)}function S(x){return Ie(x)?(e.consume(x),o=String.fromCharCode(x),I):t(x)}function I(x){if(x===null||x===47||x===62||J(x)){const pe=x===47,tn=o.toLowerCase();return!pe&&!l&&Ec.includes(tn)?(i=1,r.interrupt?n(x):N(x)):jk.includes(o.toLowerCase())?(i=6,pe?(e.consume(x),h):r.interrupt?n(x):N(x)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(x):l?m(x):g(x))}return x===45||De(x)?(e.consume(x),o+=String.fromCharCode(x),I):t(x)}function h(x){return x===62?(e.consume(x),r.interrupt?n:N):t(x)}function m(x){return b(x)?(e.consume(x),m):w(x)}function g(x){return x===47?(e.consume(x),w):x===58||x===95||Ie(x)?(e.consume(x),C):b(x)?(e.consume(x),g):w(x)}function C(x){return x===45||x===46||x===58||x===95||De(x)?(e.consume(x),C):_(x)}function _(x){return x===61?(e.consume(x),v):b(x)?(e.consume(x),_):g(x)}function v(x){return x===null||x===60||x===61||x===62||x===96?t(x):x===34||x===39?(e.consume(x),a=x,T):b(x)?(e.consume(x),v):z(x)}function T(x){return x===a?(e.consume(x),a=null,O):x===null||j(x)?t(x):(e.consume(x),T)}function z(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||J(x)?_(x):(e.consume(x),z)}function O(x){return x===47||x===62||b(x)?g(x):t(x)}function w(x){return x===62?(e.consume(x),F):t(x)}function F(x){return x===null||j(x)?N(x):b(x)?(e.consume(x),F):t(x)}function N(x){return x===45&&i===2?(e.consume(x),fe):x===60&&i===1?(e.consume(x),se):x===62&&i===4?(e.consume(x),Q):x===63&&i===3?(e.consume(x),y):x===93&&i===5?(e.consume(x),R):j(x)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Rk,G,W)(x)):x===null||j(x)?(e.exit("htmlFlowData"),W(x)):(e.consume(x),N)}function W(x){return e.check($k,K,G)(x)}function K(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),H}function H(x){return x===null||j(x)?W(x):(e.enter("htmlFlowData"),N(x))}function fe(x){return x===45?(e.consume(x),y):N(x)}function se(x){return x===47?(e.consume(x),o="",L):N(x)}function L(x){if(x===62){const pe=o.toLowerCase();return Ec.includes(pe)?(e.consume(x),Q):N(x)}return Ie(x)&&o.length<8?(e.consume(x),o+=String.fromCharCode(x),L):N(x)}function R(x){return x===93?(e.consume(x),y):N(x)}function y(x){return x===62?(e.consume(x),Q):x===45&&i===2?(e.consume(x),y):N(x)}function Q(x){return x===null||j(x)?(e.exit("htmlFlowData"),G(x)):(e.consume(x),Q)}function G(x){return e.exit("htmlFlow"),n(x)}}function Hk(e,n,t){const r=this;return i;function i(o){return j(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l):t(o)}function l(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}function Vk(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ri,n,t)}}const Uk={name:"htmlText",tokenize:Wk};function Wk(e,n,t){const r=this;let i,l,o;return u;function u(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),a}function a(y){return y===33?(e.consume(y),s):y===47?(e.consume(y),_):y===63?(e.consume(y),g):Ie(y)?(e.consume(y),z):t(y)}function s(y){return y===45?(e.consume(y),f):y===91?(e.consume(y),l=0,k):Ie(y)?(e.consume(y),m):t(y)}function f(y){return y===45?(e.consume(y),p):t(y)}function c(y){return y===null?t(y):y===45?(e.consume(y),d):j(y)?(o=c,se(y)):(e.consume(y),c)}function d(y){return y===45?(e.consume(y),p):c(y)}function p(y){return y===62?fe(y):y===45?d(y):c(y)}function k(y){const Q="CDATA[";return y===Q.charCodeAt(l++)?(e.consume(y),l===Q.length?S:k):t(y)}function S(y){return y===null?t(y):y===93?(e.consume(y),I):j(y)?(o=S,se(y)):(e.consume(y),S)}function I(y){return y===93?(e.consume(y),h):S(y)}function h(y){return y===62?fe(y):y===93?(e.consume(y),h):S(y)}function m(y){return y===null||y===62?fe(y):j(y)?(o=m,se(y)):(e.consume(y),m)}function g(y){return y===null?t(y):y===63?(e.consume(y),C):j(y)?(o=g,se(y)):(e.consume(y),g)}function C(y){return y===62?fe(y):g(y)}function _(y){return Ie(y)?(e.consume(y),v):t(y)}function v(y){return y===45||De(y)?(e.consume(y),v):T(y)}function T(y){return j(y)?(o=T,se(y)):b(y)?(e.consume(y),T):fe(y)}function z(y){return y===45||De(y)?(e.consume(y),z):y===47||y===62||J(y)?O(y):t(y)}function O(y){return y===47?(e.consume(y),fe):y===58||y===95||Ie(y)?(e.consume(y),w):j(y)?(o=O,se(y)):b(y)?(e.consume(y),O):fe(y)}function w(y){return y===45||y===46||y===58||y===95||De(y)?(e.consume(y),w):F(y)}function F(y){return y===61?(e.consume(y),N):j(y)?(o=F,se(y)):b(y)?(e.consume(y),F):O(y)}function N(y){return y===null||y===60||y===61||y===62||y===96?t(y):y===34||y===39?(e.consume(y),i=y,W):j(y)?(o=N,se(y)):b(y)?(e.consume(y),N):(e.consume(y),K)}function W(y){return y===i?(e.consume(y),i=void 0,H):y===null?t(y):j(y)?(o=W,se(y)):(e.consume(y),W)}function K(y){return y===null||y===34||y===39||y===60||y===61||y===96?t(y):y===47||y===62||J(y)?O(y):(e.consume(y),K)}function H(y){return y===47||y===62||J(y)?O(y):t(y)}function fe(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),n):t(y)}function se(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),L}function L(y){return b(y)?U(e,R,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):R(y)}function R(y){return e.enter("htmlTextData"),o(y)}}const _a={name:"labelEnd",resolveAll:Gk,resolveTo:Xk,tokenize:Jk},Qk={tokenize:Kk},qk={tokenize:Zk},Yk={tokenize:ex};function Gk(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&Ue(e,0,e.length,t),e}function Xk(e,n){let t=e.length,r=0,i,l,o,u;for(;t--;)if(i=e[t][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=t);const a={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},s={type:"label",start:{...e[l][1].start},end:{...e[o][1].end}},f={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[o-2][1].start}};return u=[["enter",a,n],["enter",s,n]],u=Xe(u,e.slice(l+1,l+r+3)),u=Xe(u,[["enter",f,n]]),u=Xe(u,Ll(n.parser.constructs.insideSpan.null,e.slice(l+r+4,o-3),n)),u=Xe(u,[["exit",f,n],e[o-2],e[o-1],["exit",s,n]]),u=Xe(u,e.slice(o+1)),u=Xe(u,[["exit",a,n]]),Ue(e,l,e.length,u),e}function Jk(e,n,t){const r=this;let i=r.events.length,l,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return u;function u(d){return l?l._inactive?c(d):(o=r.parser.defined.includes(dn(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelEnd"),a):t(d)}function a(d){return d===40?e.attempt(Qk,f,o?f:c)(d):d===91?e.attempt(qk,f,o?s:c)(d):o?f(d):c(d)}function s(d){return e.attempt(Yk,f,c)(d)}function f(d){return n(d)}function c(d){return l._balanced=!0,t(d)}}function Kk(e,n,t){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return J(c)?Ar(e,l)(c):l(c)}function l(c){return c===41?f(c):Lp(e,o,u,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return J(c)?Ar(e,a)(c):f(c)}function u(c){return t(c)}function a(c){return c===34||c===39||c===40?Fp(e,s,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function s(c){return J(c)?Ar(e,f)(c):f(c)}function f(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),n):t(c)}}function Zk(e,n,t){const r=this;return i;function i(u){return Ap.call(r,e,l,o,"reference","referenceMarker","referenceString")(u)}function l(u){return r.parser.defined.includes(dn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(u):t(u)}function o(u){return t(u)}}function ex(e,n,t){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),n):t(l)}}const nx={name:"labelStartImage",resolveAll:_a.resolveAll,tokenize:tx};function tx(e,n,t){const r=this;return i;function i(u){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(u),e.exit("labelImageMarker"),l}function l(u){return u===91?(e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),e.exit("labelImage"),o):t(u)}function o(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(u):n(u)}}const rx={name:"labelStartLink",resolveAll:_a.resolveAll,tokenize:ix};function ix(e,n,t){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),l}function l(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(o):n(o)}}const yo={name:"lineEnding",tokenize:lx};function lx(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),U(e,n,"linePrefix")}}const $i={name:"thematicBreak",tokenize:ox};function ox(e,n,t){let r=0,i;return l;function l(s){return e.enter("thematicBreak"),o(s)}function o(s){return i=s,u(s)}function u(s){return s===i?(e.enter("thematicBreakSequence"),a(s)):r>=3&&(s===null||j(s))?(e.exit("thematicBreak"),n(s)):t(s)}function a(s){return s===i?(e.consume(s),r++,a):(e.exit("thematicBreakSequence"),b(s)?U(e,u,"whitespace")(s):u(s))}}const Le={continuation:{tokenize:cx},exit:dx,name:"list",tokenize:sx},ux={partial:!0,tokenize:px},ax={partial:!0,tokenize:fx};function sx(e,n,t){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return u;function u(p){const k=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(k==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:yu(p)){if(r.containerState.type||(r.containerState.type=k,e.enter(k,{_container:!0})),k==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check($i,t,s)(p):s(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),a(p)}return t(p)}function a(p){return yu(p)&&++o<10?(e.consume(p),a):(!r.interrupt||o<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),s(p)):t(p)}function s(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(ri,r.interrupt?t:f,e.attempt(ux,d,c))}function f(p){return r.containerState.initialBlankLine=!0,l++,d(p)}function c(p){return b(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),d):t(p)}function d(p){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function cx(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(ri,i,l);function i(u){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,U(e,n,"listItemIndent",r.containerState.size+1)(u)}function l(u){return r.containerState.furtherBlankLines||!b(u)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(u)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(ax,n,o)(u))}function o(u){return r.containerState._closeFlow=!0,r.interrupt=void 0,U(e,e.attempt(Le,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u)}}function fx(e,n,t){const r=this;return U(e,i,"listItemIndent",r.containerState.size+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?n(l):t(l)}}function dx(e){e.exit(this.containerState.type)}function px(e,n,t){const r=this;return U(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const o=r.events[r.events.length-1];return!b(l)&&o&&o[1].type==="listItemPrefixWhitespace"?n(l):t(l)}}const _c={name:"setextUnderline",resolveTo:hx,tokenize:mx};function hx(e,n){let t=e.length,r,i,l;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!l&&e[t][1].type==="definition"&&(l=t);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",l?(e.splice(i,0,["enter",o,n]),e.splice(l+1,0,["exit",e[r][1],n]),e[r][1].end={...e[l][1].end}):e[r][1]=o,e.push(["exit",o,n]),e}function mx(e,n,t){const r=this;let i;return l;function l(s){let f=r.events.length,c;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){c=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=s,o(s)):t(s)}function o(s){return e.enter("setextHeadingLineSequence"),u(s)}function u(s){return s===i?(e.consume(s),u):(e.exit("setextHeadingLineSequence"),b(s)?U(e,a,"lineSuffix")(s):a(s))}function a(s){return s===null||j(s)?(e.exit("setextHeadingLine"),n(s)):t(s)}}const gx={tokenize:Ex,partial:!0};function yx(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:wx,continuation:{tokenize:Sx},exit:Cx}},text:{91:{name:"gfmFootnoteCall",tokenize:vx},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:kx,resolveTo:xx}}}}function kx(e,n,t){const r=this;let i=r.events.length;const l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const a=r.events[i][1];if(a.type==="labelImage"){o=a;break}if(a.type==="gfmFootnoteCall"||a.type==="labelLink"||a.type==="label"||a.type==="image"||a.type==="link")break}return u;function u(a){if(!o||!o._balanced)return t(a);const s=dn(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!l.includes(s.slice(1))?t(a):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(a),e.exit("gfmFootnoteCallLabelMarker"),n(a))}}function xx(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},u=[e[t+1],e[t+2],["enter",r,n],e[t+3],e[t+4],["enter",i,n],["exit",i,n],["enter",l,n],["enter",o,n],["exit",o,n],["exit",l,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(t,e.length-t+1,...u),e}function vx(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l=0,o;return u;function u(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),a}function a(c){return c!==94?t(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",s)}function s(c){if(l>999||c===93&&!o||c===null||c===91||J(c))return t(c);if(c===93){e.exit("chunkString");const d=e.exit("gfmFootnoteCallString");return i.includes(dn(r.sliceSerialize(d)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(c)}return J(c)||(o=!0),l++,e.consume(c),c===92?f:s}function f(c){return c===91||c===92||c===93?(e.consume(c),l++,s):s(c)}}function wx(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,o=0,u;return a;function a(k){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(k),e.exit("gfmFootnoteDefinitionLabelMarker"),s}function s(k){return k===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(k),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):t(k)}function f(k){if(o>999||k===93&&!u||k===null||k===91||J(k))return t(k);if(k===93){e.exit("chunkString");const S=e.exit("gfmFootnoteDefinitionLabelString");return l=dn(r.sliceSerialize(S)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(k),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),d}return J(k)||(u=!0),o++,e.consume(k),k===92?c:f}function c(k){return k===91||k===92||k===93?(e.consume(k),o++,f):f(k)}function d(k){return k===58?(e.enter("definitionMarker"),e.consume(k),e.exit("definitionMarker"),i.includes(l)||i.push(l),U(e,p,"gfmFootnoteDefinitionWhitespace")):t(k)}function p(k){return n(k)}}function Sx(e,n,t){return e.check(ri,n,e.attempt(gx,n,t))}function Cx(e){e.exit("gfmFootnoteDefinition")}function Ex(e,n,t){const r=this;return U(e,i,"gfmFootnoteDefinitionIndent",5);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?n(l):t(l)}}function _x(e){let t=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:l,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,u){let a=-1;for(;++a<o.length;)if(o[a][0]==="enter"&&o[a][1].type==="strikethroughSequenceTemporary"&&o[a][1]._close){let s=a;for(;s--;)if(o[s][0]==="exit"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._open&&o[a][1].end.offset-o[a][1].start.offset===o[s][1].end.offset-o[s][1].start.offset){o[a][1].type="strikethroughSequence",o[s][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},o[s][1].start),end:Object.assign({},o[a][1].end)},c={type:"strikethroughText",start:Object.assign({},o[s][1].end),end:Object.assign({},o[a][1].start)},d=[["enter",f,u],["enter",o[s][1],u],["exit",o[s][1],u],["enter",c,u]],p=u.parser.constructs.insideSpan.null;p&&Ue(d,d.length,0,Ll(p,o.slice(s+1,a),u)),Ue(d,d.length,0,[["exit",c,u],["enter",o[a][1],u],["exit",o[a][1],u],["exit",f,u]]),Ue(o,s-1,a-s+3,d),a=s+d.length-2;break}}for(a=-1;++a<o.length;)o[a][1].type==="strikethroughSequenceTemporary"&&(o[a][1].type="data");return o}function l(o,u,a){const s=this.previous,f=this.events;let c=0;return d;function d(k){return s===126&&f[f.length-1][1].type!=="characterEscape"?a(k):(o.enter("strikethroughSequenceTemporary"),p(k))}function p(k){const S=er(s);if(k===126)return c>1?a(k):(o.consume(k),c++,p);if(c<2&&!t)return a(k);const I=o.exit("strikethroughSequenceTemporary"),h=er(k);return I._open=!h||h===2&&!!S,I._close=!S||S===2&&!!h,u(k)}}}class Tx{constructor(){this.map=[]}add(n,t,r){Ix(this,n,t,r)}consume(n){if(this.map.sort(function(l,o){return l[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const l of i)n.push(l);i=r.pop()}this.map.length=0}}function Ix(e,n,t,r){let i=0;if(!(t===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===n){e.map[i][1]+=t,e.map[i][2].push(...r);return}i+=1}e.map.push([n,t,r])}}function Px(e,n){let t=!1;const r=[];for(;n<e.length;){const i=e[n];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const l=r.length-1;r[l]=r[l]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return r}function zx(){return{flow:{null:{name:"table",tokenize:Mx,resolveAll:Lx}}}}function Mx(e,n,t){const r=this;let i=0,l=0,o;return u;function u(w){let F=r.events.length-1;for(;F>-1;){const K=r.events[F][1].type;if(K==="lineEnding"||K==="linePrefix")F--;else break}const N=F>-1?r.events[F][1].type:null,W=N==="tableHead"||N==="tableRow"?v:a;return W===v&&r.parser.lazy[r.now().line]?t(w):W(w)}function a(w){return e.enter("tableHead"),e.enter("tableRow"),s(w)}function s(w){return w===124||(o=!0,l+=1),f(w)}function f(w){return w===null?t(w):j(w)?l>1?(l=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),p):t(w):b(w)?U(e,f,"whitespace")(w):(l+=1,o&&(o=!1,i+=1),w===124?(e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),o=!0,f):(e.enter("data"),c(w)))}function c(w){return w===null||w===124||J(w)?(e.exit("data"),f(w)):(e.consume(w),w===92?d:c)}function d(w){return w===92||w===124?(e.consume(w),c):c(w)}function p(w){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(w):(e.enter("tableDelimiterRow"),o=!1,b(w)?U(e,k,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):k(w))}function k(w){return w===45||w===58?I(w):w===124?(o=!0,e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),S):_(w)}function S(w){return b(w)?U(e,I,"whitespace")(w):I(w)}function I(w){return w===58?(l+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),h):w===45?(l+=1,h(w)):w===null||j(w)?C(w):_(w)}function h(w){return w===45?(e.enter("tableDelimiterFiller"),m(w)):_(w)}function m(w){return w===45?(e.consume(w),m):w===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),g):(e.exit("tableDelimiterFiller"),g(w))}function g(w){return b(w)?U(e,C,"whitespace")(w):C(w)}function C(w){return w===124?k(w):w===null||j(w)?!o||i!==l?_(w):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(w)):_(w)}function _(w){return t(w)}function v(w){return e.enter("tableRow"),T(w)}function T(w){return w===124?(e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),T):w===null||j(w)?(e.exit("tableRow"),n(w)):b(w)?U(e,T,"whitespace")(w):(e.enter("data"),z(w))}function z(w){return w===null||w===124||J(w)?(e.exit("data"),T(w)):(e.consume(w),w===92?O:z)}function O(w){return w===92||w===124?(e.consume(w),z):z(w)}}function Lx(e,n){let t=-1,r=!0,i=0,l=[0,0,0,0],o=[0,0,0,0],u=!1,a=0,s,f,c;const d=new Tx;for(;++t<e.length;){const p=e[t],k=p[1];p[0]==="enter"?k.type==="tableHead"?(u=!1,a!==0&&(Tc(d,n,a,s,f),f=void 0,a=0),s={type:"table",start:Object.assign({},k.start),end:Object.assign({},k.end)},d.add(t,0,[["enter",s,n]])):k.type==="tableRow"||k.type==="tableDelimiterRow"?(r=!0,c=void 0,l=[0,0,0,0],o=[0,t+1,0,0],u&&(u=!1,f={type:"tableBody",start:Object.assign({},k.start),end:Object.assign({},k.end)},d.add(t,0,[["enter",f,n]])),i=k.type==="tableDelimiterRow"?2:f?3:1):i&&(k.type==="data"||k.type==="tableDelimiterMarker"||k.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(l[1]!==0&&(o[0]=o[1],c=Ei(d,n,l,i,void 0,c),l=[0,0,0,0]),o[2]=t)):k.type==="tableCellDivider"&&(r?r=!1:(l[1]!==0&&(o[0]=o[1],c=Ei(d,n,l,i,void 0,c)),l=o,o=[l[1],t,0,0])):k.type==="tableHead"?(u=!0,a=t):k.type==="tableRow"||k.type==="tableDelimiterRow"?(a=t,l[1]!==0?(o[0]=o[1],c=Ei(d,n,l,i,t,c)):o[1]!==0&&(c=Ei(d,n,o,i,t,c)),i=0):i&&(k.type==="data"||k.type==="tableDelimiterMarker"||k.type==="tableDelimiterFiller")&&(o[3]=t)}for(a!==0&&Tc(d,n,a,s,f),d.consume(n.events),t=-1;++t<n.events.length;){const p=n.events[t];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=Px(n.events,t))}return e}function Ei(e,n,t,r,i,l){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",u="tableContent";t[0]!==0&&(l.end=Object.assign({},Pt(n.events,t[0])),e.add(t[0],0,[["exit",l,n]]));const a=Pt(n.events,t[1]);if(l={type:o,start:Object.assign({},a),end:Object.assign({},a)},e.add(t[1],0,[["enter",l,n]]),t[2]!==0){const s=Pt(n.events,t[2]),f=Pt(n.events,t[3]),c={type:u,start:Object.assign({},s),end:Object.assign({},f)};if(e.add(t[2],0,[["enter",c,n]]),r!==2){const d=n.events[t[2]],p=n.events[t[3]];if(d[1].end=Object.assign({},p[1].end),d[1].type="chunkText",d[1].contentType="text",t[3]>t[2]+1){const k=t[2]+1,S=t[3]-t[2]-1;e.add(k,S,[])}}e.add(t[3]+1,0,[["exit",c,n]])}return i!==void 0&&(l.end=Object.assign({},Pt(n.events,i)),e.add(i,0,[["exit",l,n]]),l=void 0),l}function Tc(e,n,t,r,i){const l=[],o=Pt(n.events,t);i&&(i.end=Object.assign({},o),l.push(["exit",i,n])),r.end=Object.assign({},o),l.push(["exit",r,n]),e.add(t+1,0,l)}function Pt(e,n){const t=e[n],r=t[0]==="enter"?"start":"end";return t[1][r]}const Ax={name:"tasklistCheck",tokenize:Dx};function Fx(){return{text:{91:Ax}}}function Dx(e,n,t){const r=this;return i;function i(a){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(a):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),l)}function l(a){return J(a)?(e.enter("taskListCheckValueUnchecked"),e.consume(a),e.exit("taskListCheckValueUnchecked"),o):a===88||a===120?(e.enter("taskListCheckValueChecked"),e.consume(a),e.exit("taskListCheckValueChecked"),o):t(a)}function o(a){return a===93?(e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),u):t(a)}function u(a){return j(a)?n(a):b(a)?e.check({tokenize:Nx},n,t)(a):t(a)}}function Nx(e,n,t){return U(e,r,"whitespace");function r(i){return i===null?t(i):n(i)}}function jx(e){return kp([Qy(),yx(),_x(e),zx(),Fx()])}const Ox={};function Dp(e){const n=this,t=e||Ox,r=n.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),l=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(jx(t)),l.push(by()),o.push(By(t))}const Rx={tokenize:$x};function $x(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(u){if(u===null){e.consume(u);return}return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),U(e,n,"linePrefix")}function i(u){return e.enter("paragraph"),l(u)}function l(u){const a=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=a),t=a,o(u)}function o(u){if(u===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(u);return}return j(u)?(e.consume(u),e.exit("chunkText"),l):(e.consume(u),o)}}const bx={tokenize:Bx},Ic={tokenize:Hx};function Bx(e){const n=this,t=[];let r=0,i,l,o;return u;function u(g){if(r<t.length){const C=t[r];return n.containerState=C[1],e.attempt(C[0].continuation,a,s)(g)}return s(g)}function a(g){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&m();const C=n.events.length;let _=C,v;for(;_--;)if(n.events[_][0]==="exit"&&n.events[_][1].type==="chunkFlow"){v=n.events[_][1].end;break}h(r);let T=C;for(;T<n.events.length;)n.events[T][1].end={...v},T++;return Ue(n.events,_+1,0,n.events.slice(C)),n.events.length=T,s(g)}return u(g)}function s(g){if(r===t.length){if(!i)return d(g);if(i.currentConstruct&&i.currentConstruct.concrete)return k(g);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Ic,f,c)(g)}function f(g){return i&&m(),h(r),d(g)}function c(g){return n.parser.lazy[n.now().line]=r!==t.length,o=n.now().offset,k(g)}function d(g){return n.containerState={},e.attempt(Ic,p,k)(g)}function p(g){return r++,t.push([n.currentConstruct,n.containerState]),d(g)}function k(g){if(g===null){i&&m(),h(0),e.consume(g);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),S(g)}function S(g){if(g===null){I(e.exit("chunkFlow"),!0),h(0),e.consume(g);return}return j(g)?(e.consume(g),I(e.exit("chunkFlow")),r=0,n.interrupt=void 0,u):(e.consume(g),S)}function I(g,C){const _=n.sliceStream(g);if(C&&_.push(null),g.previous=l,l&&(l.next=g),l=g,i.defineSkip(g.start),i.write(_),n.parser.lazy[g.start.line]){let v=i.events.length;for(;v--;)if(i.events[v][1].start.offset<o&&(!i.events[v][1].end||i.events[v][1].end.offset>o))return;const T=n.events.length;let z=T,O,w;for(;z--;)if(n.events[z][0]==="exit"&&n.events[z][1].type==="chunkFlow"){if(O){w=n.events[z][1].end;break}O=!0}for(h(r),v=T;v<n.events.length;)n.events[v][1].end={...w},v++;Ue(n.events,z+1,0,n.events.slice(T)),n.events.length=v}}function h(g){let C=t.length;for(;C-- >g;){const _=t[C];n.containerState=_[1],_[0].exit.call(n,e)}t.length=g}function m(){i.write([null]),l=void 0,i=void 0,n.containerState._closeFlow=void 0}}function Hx(e,n,t){return U(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const Vx={tokenize:Ux};function Ux(e){const n=this,t=e.attempt(ri,r,e.attempt(this.parser.constructs.flowInitial,i,U(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Sk,i)),"linePrefix")));return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const Wx={resolveAll:jp()},Qx=Np("string"),qx=Np("text");function Np(e){return{resolveAll:jp(e==="text"?Yx:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],l=t.attempt(i,o,u);return o;function o(f){return s(f)?l(f):u(f)}function u(f){if(f===null){t.consume(f);return}return t.enter("data"),t.consume(f),a}function a(f){return s(f)?(t.exit("data"),l(f)):(t.consume(f),a)}function s(f){if(f===null)return!0;const c=i[f];let d=-1;if(c)for(;++d<c.length;){const p=c[d];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function jp(e){return n;function n(t,r){let i=-1,l;for(;++i<=t.length;)l===void 0?t[i]&&t[i][1].type==="data"&&(l=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==l+2&&(t[l][1].end=t[i-1][1].end,t.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(t,r):t}}function Yx(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let l=i.length,o=-1,u=0,a;for(;l--;){const s=i[l];if(typeof s=="string"){for(o=s.length;s.charCodeAt(o-1)===32;)u++,o--;if(o)break;o=-1}else if(s===-2)a=!0,u++;else if(s!==-1){l++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(u=0),u){const s={type:t===e.length||a||u<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?o:r.start._bufferIndex+o,_index:r.start._index+l,line:r.end.line,column:r.end.column-u,offset:r.end.offset-u},end:{...r.end}};r.end={...s.start},r.start.offset===r.end.offset?Object.assign(r,s):(e.splice(t,0,["enter",s,n],["exit",s,n]),t+=2)}t++}return e}const Gx={42:Le,43:Le,45:Le,48:Le,49:Le,50:Le,51:Le,52:Le,53:Le,54:Le,55:Le,56:Le,57:Le,62:Ip},Xx={91:Ik},Jx={[-2]:go,[-1]:go,32:go},Kx={35:Fk,42:$i,45:[_c,$i],60:Ok,61:_c,95:$i,96:Cc,126:Cc},Zx={38:zp,92:Pp},ev={[-5]:yo,[-4]:yo,[-3]:yo,33:nx,38:zp,42:vu,60:[rk,Uk],91:rx,92:[Lk,Pp],93:_a,95:vu,96:gk},nv={null:[vu,Wx]},tv={null:[42,95]},rv={null:[]},iv=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:tv,contentInitial:Xx,disable:rv,document:Gx,flow:Kx,flowInitial:Jx,insideSpan:nv,string:Zx,text:ev},Symbol.toStringTag,{value:"Module"}));function lv(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},l=[];let o=[],u=[];const a={attempt:T(_),check:T(v),consume:m,enter:g,exit:C,interrupt:T(v,{interrupt:!0})},s={code:null,containerState:{},defineSkip:S,events:[],now:k,parser:e,previous:null,sliceSerialize:d,sliceStream:p,write:c};let f=n.tokenize.call(s,a);return n.resolveAll&&l.push(n),s;function c(F){return o=Xe(o,F),I(),o[o.length-1]!==null?[]:(z(n,0),s.events=Ll(l,s.events,s),s.events)}function d(F,N){return uv(p(F),N)}function p(F){return ov(o,F)}function k(){const{_bufferIndex:F,_index:N,line:W,column:K,offset:H}=r;return{_bufferIndex:F,_index:N,line:W,column:K,offset:H}}function S(F){i[F.line]=F.column,w()}function I(){let F;for(;r._index<o.length;){const N=o[r._index];if(typeof N=="string")for(F=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===F&&r._bufferIndex<N.length;)h(N.charCodeAt(r._bufferIndex));else h(N)}}function h(F){f=f(F)}function m(F){j(F)?(r.line++,r.column=1,r.offset+=F===-3?2:1,w()):F!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=F}function g(F,N){const W=N||{};return W.type=F,W.start=k(),s.events.push(["enter",W,s]),u.push(W),W}function C(F){const N=u.pop();return N.end=k(),s.events.push(["exit",N,s]),N}function _(F,N){z(F,N.from)}function v(F,N){N.restore()}function T(F,N){return W;function W(K,H,fe){let se,L,R,y;return Array.isArray(K)?G(K):"tokenize"in K?G([K]):Q(K);function Q(ee){return hn;function hn(Nn){const Et=Nn!==null&&ee[Nn],_t=Nn!==null&&ee.null,ii=[...Array.isArray(Et)?Et:Et?[Et]:[],...Array.isArray(_t)?_t:_t?[_t]:[]];return G(ii)(Nn)}}function G(ee){return se=ee,L=0,ee.length===0?fe:x(ee[L])}function x(ee){return hn;function hn(Nn){return y=O(),R=ee,ee.partial||(s.currentConstruct=ee),ee.name&&s.parser.constructs.disable.null.includes(ee.name)?tn():ee.tokenize.call(N?Object.assign(Object.create(s),N):s,a,pe,tn)(Nn)}}function pe(ee){return F(R,y),H}function tn(ee){return y.restore(),++L<se.length?x(se[L]):fe}}}function z(F,N){F.resolveAll&&!l.includes(F)&&l.push(F),F.resolve&&Ue(s.events,N,s.events.length-N,F.resolve(s.events.slice(N),s)),F.resolveTo&&(s.events=F.resolveTo(s.events,s))}function O(){const F=k(),N=s.previous,W=s.currentConstruct,K=s.events.length,H=Array.from(u);return{from:K,restore:fe};function fe(){r=F,s.previous=N,s.currentConstruct=W,s.events.length=K,u=H,w()}}function w(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function ov(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,l=n.end._bufferIndex;let o;if(t===i)o=[e[t].slice(r,l)];else{if(o=e.slice(t,i),r>-1){const u=o[0];typeof u=="string"?o[0]=u.slice(r):o.shift()}l>0&&o.push(e[i].slice(0,l))}return o}function uv(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const l=e[t];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&i)continue;o=" ";break}default:o=String.fromCharCode(l)}i=l===-2,r.push(o)}return r.join("")}function av(e){const r={constructs:kp([iv,...(e||{}).extensions||[]]),content:i(Rx),defined:[],document:i(bx),flow:i(Vx),lazy:{},string:i(Qx),text:i(qx)};return r;function i(l){return o;function o(u){return lv(r,l,u)}}}function sv(e){for(;!Mp(e););return e}const Pc=/[\0\t\n\r]/g;function cv(){let e=1,n="",t=!0,r;return i;function i(l,o,u){const a=[];let s,f,c,d,p;for(l=n+(typeof l=="string"?l.toString():new TextDecoder(o||void 0).decode(l)),c=0,n="",t&&(l.charCodeAt(0)===65279&&c++,t=void 0);c<l.length;){if(Pc.lastIndex=c,s=Pc.exec(l),d=s&&s.index!==void 0?s.index:l.length,p=l.charCodeAt(d),!s){n=l.slice(c);break}if(p===10&&c===d&&r)a.push(-3),r=void 0;else switch(r&&(a.push(-5),r=void 0),c<d&&(a.push(l.slice(c,d)),e+=d-c),p){case 0:{a.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,a.push(-2);e++<f;)a.push(-1);break}case 10:{a.push(-4),e=1;break}default:r=!0,e=1}c=d+1}return u&&(r&&a.push(-5),n&&a.push(n),a.push(null)),a}}const Op={}.hasOwnProperty;function fv(e,n,t){return typeof n!="string"&&(t=n,n=void 0),dv(t)(sv(av(t).document().write(cv()(e,n,!0))))}function dv(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(Ma),autolinkProtocol:O,autolinkEmail:O,atxHeading:l(Ia),blockQuote:l(_t),characterEscape:O,characterReference:O,codeFenced:l(ii),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:l(ii,o),codeText:l(Bp,o),codeTextData:O,data:O,codeFlowValue:O,definition:l(Hp),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:l(Vp),hardBreakEscape:l(Pa),hardBreakTrailing:l(Pa),htmlFlow:l(za,o),htmlFlowData:O,htmlText:l(za,o),htmlTextData:O,image:l(Up),label:o,link:l(Ma),listItem:l(Wp),listItemValue:d,listOrdered:l(La,c),listUnordered:l(La),paragraph:l(Qp),reference:x,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:l(Ia),strong:l(qp),thematicBreak:l(Gp)},exit:{atxHeading:a(),atxHeadingSequence:_,autolink:a(),autolinkEmail:Et,autolinkProtocol:Nn,blockQuote:a(),characterEscapeValue:w,characterReferenceMarkerHexadecimal:tn,characterReferenceMarkerNumeric:tn,characterReferenceValue:ee,characterReference:hn,codeFenced:a(I),codeFencedFence:S,codeFencedFenceInfo:p,codeFencedFenceMeta:k,codeFlowValue:w,codeIndented:a(h),codeText:a(H),codeTextData:w,data:w,definition:a(),definitionDestinationString:C,definitionLabelString:m,definitionTitleString:g,emphasis:a(),hardBreakEscape:a(N),hardBreakTrailing:a(N),htmlFlow:a(W),htmlFlowData:w,htmlText:a(K),htmlTextData:w,image:a(se),label:R,labelText:L,lineEnding:F,link:a(fe),listItem:a(),listOrdered:a(),listUnordered:a(),paragraph:a(),referenceString:pe,resourceDestinationString:y,resourceTitleString:Q,resource:G,setextHeading:a(z),setextHeadingLineSequence:T,setextHeadingText:v,strong:a(),thematicBreak:a()}};Rp(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(E){let M={type:"root",children:[]};const $={stack:[M],tokenStack:[],config:n,enter:u,exit:s,buffer:o,resume:f,data:t},V=[];let X=-1;for(;++X<E.length;)if(E[X][1].type==="listOrdered"||E[X][1].type==="listUnordered")if(E[X][0]==="enter")V.push(X);else{const rn=V.pop();X=i(E,rn,X)}for(X=-1;++X<E.length;){const rn=n[E[X][0]];Op.call(rn,E[X][1].type)&&rn[E[X][1].type].call(Object.assign({sliceSerialize:E[X][2].sliceSerialize},$),E[X][1])}if($.tokenStack.length>0){const rn=$.tokenStack[$.tokenStack.length-1];(rn[1]||zc).call($,void 0,rn[0])}for(M.position={start:Rn(E.length>0?E[0][1].start:{line:1,column:1,offset:0}),end:Rn(E.length>0?E[E.length-2][1].end:{line:1,column:1,offset:0})},X=-1;++X<n.transforms.length;)M=n.transforms[X](M)||M;return M}function i(E,M,$){let V=M-1,X=-1,rn=!1,ot,Sn,ir,lr;for(;++V<=$;){const $e=E[V];switch($e[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{$e[0]==="enter"?X++:X--,lr=void 0;break}case"lineEndingBlank":{$e[0]==="enter"&&(ot&&!lr&&!X&&!ir&&(ir=V),lr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:lr=void 0}if(!X&&$e[0]==="enter"&&$e[1].type==="listItemPrefix"||X===-1&&$e[0]==="exit"&&($e[1].type==="listUnordered"||$e[1].type==="listOrdered")){if(ot){let Tt=V;for(Sn=void 0;Tt--;){const Cn=E[Tt];if(Cn[1].type==="lineEnding"||Cn[1].type==="lineEndingBlank"){if(Cn[0]==="exit")continue;Sn&&(E[Sn][1].type="lineEndingBlank",rn=!0),Cn[1].type="lineEnding",Sn=Tt}else if(!(Cn[1].type==="linePrefix"||Cn[1].type==="blockQuotePrefix"||Cn[1].type==="blockQuotePrefixWhitespace"||Cn[1].type==="blockQuoteMarker"||Cn[1].type==="listItemIndent"))break}ir&&(!Sn||ir<Sn)&&(ot._spread=!0),ot.end=Object.assign({},Sn?E[Sn][1].start:$e[1].end),E.splice(Sn||V,0,["exit",ot,$e[2]]),V++,$++}if($e[1].type==="listItemPrefix"){const Tt={type:"listItem",_spread:!1,start:Object.assign({},$e[1].start),end:void 0};ot=Tt,E.splice(V,0,["enter",Tt,$e[2]]),V++,$++,ir=void 0,lr=!0}}}return E[M][1]._spread=rn,$}function l(E,M){return $;function $(V){u.call(this,E(V),V),M&&M.call(this,V)}}function o(){this.stack.push({type:"fragment",children:[]})}function u(E,M,$){this.stack[this.stack.length-1].children.push(E),this.stack.push(E),this.tokenStack.push([M,$||void 0]),E.position={start:Rn(M.start),end:void 0}}function a(E){return M;function M($){E&&E.call(this,$),s.call(this,$)}}function s(E,M){const $=this.stack.pop(),V=this.tokenStack.pop();if(V)V[0].type!==E.type&&(M?M.call(this,E,V[0]):(V[1]||zc).call(this,E,V[0]));else throw new Error("Cannot close `"+E.type+"` ("+Lr({start:E.start,end:E.end})+"): it’s not open");$.position.end=Rn(E.end)}function f(){return va(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function d(E){if(this.data.expectingFirstListItemValue){const M=this.stack[this.stack.length-2];M.start=Number.parseInt(this.sliceSerialize(E),10),this.data.expectingFirstListItemValue=void 0}}function p(){const E=this.resume(),M=this.stack[this.stack.length-1];M.lang=E}function k(){const E=this.resume(),M=this.stack[this.stack.length-1];M.meta=E}function S(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function I(){const E=this.resume(),M=this.stack[this.stack.length-1];M.value=E.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const E=this.resume(),M=this.stack[this.stack.length-1];M.value=E.replace(/(\r?\n|\r)$/g,"")}function m(E){const M=this.resume(),$=this.stack[this.stack.length-1];$.label=M,$.identifier=dn(this.sliceSerialize(E)).toLowerCase()}function g(){const E=this.resume(),M=this.stack[this.stack.length-1];M.title=E}function C(){const E=this.resume(),M=this.stack[this.stack.length-1];M.url=E}function _(E){const M=this.stack[this.stack.length-1];if(!M.depth){const $=this.sliceSerialize(E).length;M.depth=$}}function v(){this.data.setextHeadingSlurpLineEnding=!0}function T(E){const M=this.stack[this.stack.length-1];M.depth=this.sliceSerialize(E).codePointAt(0)===61?1:2}function z(){this.data.setextHeadingSlurpLineEnding=void 0}function O(E){const $=this.stack[this.stack.length-1].children;let V=$[$.length-1];(!V||V.type!=="text")&&(V=Yp(),V.position={start:Rn(E.start),end:void 0},$.push(V)),this.stack.push(V)}function w(E){const M=this.stack.pop();M.value+=this.sliceSerialize(E),M.position.end=Rn(E.end)}function F(E){const M=this.stack[this.stack.length-1];if(this.data.atHardBreak){const $=M.children[M.children.length-1];$.position.end=Rn(E.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(M.type)&&(O.call(this,E),w.call(this,E))}function N(){this.data.atHardBreak=!0}function W(){const E=this.resume(),M=this.stack[this.stack.length-1];M.value=E}function K(){const E=this.resume(),M=this.stack[this.stack.length-1];M.value=E}function H(){const E=this.resume(),M=this.stack[this.stack.length-1];M.value=E}function fe(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const M=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=M,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function se(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const M=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=M,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function L(E){const M=this.sliceSerialize(E),$=this.stack[this.stack.length-2];$.label=yp(M),$.identifier=dn(M).toLowerCase()}function R(){const E=this.stack[this.stack.length-1],M=this.resume(),$=this.stack[this.stack.length-1];if(this.data.inReference=!0,$.type==="link"){const V=E.children;$.children=V}else $.alt=M}function y(){const E=this.resume(),M=this.stack[this.stack.length-1];M.url=E}function Q(){const E=this.resume(),M=this.stack[this.stack.length-1];M.title=E}function G(){this.data.inReference=void 0}function x(){this.data.referenceType="collapsed"}function pe(E){const M=this.resume(),$=this.stack[this.stack.length-1];$.label=M,$.identifier=dn(this.sliceSerialize(E)).toLowerCase(),this.data.referenceType="full"}function tn(E){this.data.characterReferenceType=E.type}function ee(E){const M=this.sliceSerialize(E),$=this.data.characterReferenceType;let V;$?(V=gp(M,$==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):V=Ca(M);const X=this.stack[this.stack.length-1];X.value+=V}function hn(E){const M=this.stack.pop();M.position.end=Rn(E.end)}function Nn(E){w.call(this,E);const M=this.stack[this.stack.length-1];M.url=this.sliceSerialize(E)}function Et(E){w.call(this,E);const M=this.stack[this.stack.length-1];M.url="mailto:"+this.sliceSerialize(E)}function _t(){return{type:"blockquote",children:[]}}function ii(){return{type:"code",lang:null,meta:null,value:""}}function Bp(){return{type:"inlineCode",value:""}}function Hp(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Vp(){return{type:"emphasis",children:[]}}function Ia(){return{type:"heading",depth:0,children:[]}}function Pa(){return{type:"break"}}function za(){return{type:"html",value:""}}function Up(){return{type:"image",title:null,url:"",alt:null}}function Ma(){return{type:"link",title:null,url:"",children:[]}}function La(E){return{type:"list",ordered:E.type==="listOrdered",start:null,spread:E._spread,children:[]}}function Wp(E){return{type:"listItem",spread:E._spread,checked:null,children:[]}}function Qp(){return{type:"paragraph",children:[]}}function qp(){return{type:"strong",children:[]}}function Yp(){return{type:"text",value:""}}function Gp(){return{type:"thematicBreak"}}}function Rn(e){return{line:e.line,column:e.column,offset:e.offset}}function Rp(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?Rp(e,r):pv(e,r)}}function pv(e,n){let t;for(t in n)if(Op.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function zc(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Lr({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Lr({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Lr({start:n.start,end:n.end})+") is still open")}function hv(e){const n=this;n.parser=t;function t(r){return fv(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function wu(e){return Jd().use(hv).use(Dp).parse(e)}function mv(e,n,t={}){const r=wu(e),i=wu(n),l=y1(r,i);return t.enableDiffNode&&p1(l),l}function gv(e){const n=this;n.compiler=t;function t(r){return Sy(r,{...n.data("settings"),...e,extensions:n.data("toMarkdownExtensions")||[]})}}function yv(e){const n=JSON.parse(JSON.stringify(e)),t=Jd().use(Dp).use(()=>r=>(ni(r,"listItem",i=>{var l,o;if((l=i==null?void 0:i.data)!=null&&l.diff){const u=((o=i==null?void 0:i.data)==null?void 0:o.diff)==="ins"?"{++listItem++}":"{--listItem--}";i.children||(i.children=[]);const a=i.children[0];(a==null?void 0:a.type)==="paragraph"?a.children&&a.children.unshift({type:"text",value:u}):i.children.unshift({type:"paragraph",children:[{type:"text",value:u}]})}}),r)).use(gv,{handlers:{ins:(r,i,l,o)=>`{++++
${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}
++++}`,del:(r,i,l,o)=>`{----
${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}
----}`,inlineIns:(r,i,l,o)=>`{++++${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}++++}`,inlineDel:(r,i,l,o)=>`{----${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}----}`}});return t.stringify(t.runSync(n))}function kv(e){const n=JSON.parse(JSON.stringify(e));$p(n);const t=vv(n);return wv(t)}function $p(e){if(xv(e),e.children&&e.children.length>0)for(const n of e.children)$p(n)}function xv(e){switch(e.data||(e.data={}),e.data.hProperties||(e.data.hProperties={}),e.data&&e.data.diff&&(e.data.hProperties["data-diff"]=e.data.diff),e.type){case"ins":case"del":e.data.hProperties.class="diff-block";break;case"inlineIns":case"inlineDel":e.data.hProperties.class="diff-inline";break;case"heading":e.data.hProperties.class=`heading-${e.depth}`;break;case"list":e.data.hProperties.class=e.ordered?"ordered-list":"unordered-list";let n=1;e.children.forEach(t=>{t.type==="listItem"&&(t.data||(t.data={}),t.data.hProperties||(t.data.hProperties={}),t.data.hProperties.value=n,t.data.diff!=="del"&&n++)});break;case"listItem":e.data.hProperties.class="list-item",e.data&&e.data.diff&&(e.data.hProperties.class+=` list-item-${e.data.diff}`);break;case"paragraph":e.data.hProperties.class="paragraph";break;case"text":e.data.hProperties.class="text";break;case"strong":e.data.hProperties.class="strong";break;case"emphasis":e.data.hProperties.class="emphasis";break;case"delete":e.data.hProperties.class="delete";break;case"code":e.data.hProperties.class="code",e.lang&&(e.data.hProperties["data-language"]=e.lang);break;case"link":e.data.hProperties.href=e.url,e.data.hProperties.title=e.title;break;case"image":e.data.hProperties.src=e.url,e.data.hProperties.alt=e.alt,e.data.hProperties.title=e.title;break;case"table":e.data.hProperties.class="markdown-table";break;case"tableRow":e.data.hProperties.class="table-row";break;case"tableCell":e.data.hProperties.class="table-cell",e.isHeader&&(e.data.hProperties.class+=" table-header-cell"),e.align&&(e.data.hProperties.class+=` align-${e.align}`);break}}function vv(e){let n="";if(e.type==="root"){n='<div class="markdown-content">';for(const t of e.children)n+=Su(t);n+="</div>"}else n=Su(e);return n}function wv(e){const n=`
    <style>
      /* 基本样式 */
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
      }
      
      /* 标题样式 */
      h1, h2, h3, h4, h5, h6 {
        margin-top: 1.5em;
        margin-bottom: 0.5em;
        font-weight: 600;
        line-height: 1.25;
      }
      h1 { font-size: 2em; border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
      h2 { font-size: 1.5em; border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
      h3 { font-size: 1.25em; }
      h4 { font-size: 1em; }
      h5 { font-size: 0.875em; }
      h6 { font-size: 0.85em; color: #6a737d; }
      
      /* 段落样式 */
      p {
        margin-top: 0;
        margin-bottom: 16px;
      }
      
      /* 链接样式 */
      a {
        color: #0366d6;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      
      /* 列表样式 */
      ul, ol {
        padding-left: 2em;
        margin-top: 0;
        margin-bottom: 16px;
      }
      li {
        margin-bottom: 0.25em;
      }
      
      /* 代码样式 */
      code {
        font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
        padding: 0.2em 0.4em;
        margin: 0;
        font-size: 85%;
        background-color: rgba(27, 31, 35, 0.05);
        border-radius: 3px;
      }
      pre {
        font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
        padding: 16px;
        overflow: auto;
        font-size: 85%;
        line-height: 1.45;
        background-color: #f6f8fa;
        border-radius: 3px;
        margin-top: 0;
        margin-bottom: 16px;
      }
      pre code {
        padding: 0;
        margin: 0;
        background-color: transparent;
        border: 0;
      }
      
      /* 引用样式 */
      blockquote {
        padding: 0 1em;
        color: #6a737d;
        border-left: 0.25em solid #dfe2e5;
        margin: 0 0 16px 0;
      }
      
      /* 表格样式 */
      table {
        border-collapse: collapse;
        width: 100%;
        margin-top: 0;
        margin-bottom: 16px;
        display: block;
        overflow-x: auto;
      }
      table th, table td {
        padding: 6px 13px;
        border: 1px solid #dfe2e5;
      }
      table tr {
        background-color: #fff;
        border-top: 1px solid #c6cbd1;
      }
      table tr:nth-child(2n) {
        background-color: #f6f8fa;
      }
      table th {
        font-weight: 600;
        background-color: #f6f8fa;
      }
      .align-left {
        text-align: left;
      }
      .align-center {
        text-align: center;
      }
      .align-right {
        text-align: right;
      }
      
      /* 水平线样式 */
      hr {
        height: 0.25em;
        padding: 0;
        margin: 24px 0;
        background-color: #e1e4e8;
        border: 0;
      }
      
      /* 差异标记样式 */
      ins {
        background-color: #e6ffec;
        color: #24292e;
        text-decoration: none;
        border-radius: 2px;
        padding: 0 2px;
      }
      
      del {
        background-color: #ffebe9;
        color: #24292e;
        text-decoration: line-through;
        border-radius: 2px;
        padding: 0 2px;
      }

      ins.diff-block, del.diff-block {
        display: block;
        padding-left: 10px;
        border-left-width: 3px;
        border-left-style: solid;
      }
      
      ins.diff-block {
        border-left-color: #2cbe4e;
      }
      
      del.diff-block {
        border-left-color: #cb2431;
      }

      ins > hr, ins > pre.code {
        background-color: #e6ffec;
      }

      del > hr, del > pre.code {
        background-color: #ffebe9;
      }
      
      /* 列表项差异样式 */
      li.list-item-ins, li[data-diff="ins"] {
        background-color: #e6ffec;
        border-radius: 2px;
      }
      
      li.list-item-del, li[data-diff="del"] {
        background-color: #ffebe9;
        border-radius: 2px;
        text-decoration: line-through;
      }
    </style>
  `;return e.includes("<head>")?e.replace("<head>",`<head>${n}`):e.includes("<html>")?e.replace("<html>",`<html><head>${n}</head>`):`<html><head>${n}</head><body>${e}</body></html>`}function Su(e){var i;if(!e)return"";const n=((i=e.data)==null?void 0:i.hProperties)||{},t=Object.entries(n).map(([l,o])=>`${l}="${o}"`).join(" ");let r="";switch(e.type){case"ins":r=`<ins ${t}>${ke(e)}</ins>`;break;case"del":r=`<del ${t}>${ke(e)}</del>`;break;case"inlineIns":r=`<ins ${t}>${ke(e)}</ins>`;break;case"inlineDel":r=`<del ${t}>${ke(e)}</del>`;break;case"heading":r=`<h${e.depth} ${t}>${ke(e)}</h${e.depth}>`;break;case"paragraph":r=`<p ${t}>${ke(e)}</p>`;break;case"text":r=`<span ${t}>${_i(e.value)}</span>`;break;case"strong":r=`<strong ${t}>${ke(e)}</strong>`;break;case"emphasis":r=`<em ${t}>${ke(e)}</em>`;break;case"delete":r=`<del ${t}>${ke(e)}</del>`;break;case"link":r=`<a ${t}>${ke(e)}</a>`;break;case"image":r=`<img ${t} />`;break;case"list":const l=e.ordered?"ol":"ul";r=`<${l} ${t}>${ke(e)}</${l}>`;break;case"listItem":r=`<li ${t}>${ke(e)}</li>`;break;case"code":e.lang?r=`<pre ${t}><code>${_i(e.value)}</code></pre>`:r=`<code ${t}>${_i(e.value)}</code>`;break;case"inlineCode":r=`<code ${t}>${_i(e.value)}</code>`;break;case"blockquote":r=`<blockquote ${t}>${ke(e)}</blockquote>`;break;case"thematicBreak":r=`<hr ${t} />`;break;case"html":r=`<div ${t}>${e.value}</div>`;break;case"table":r=`<table ${t}>${ke(e)}</table>`;break;case"tableRow":r=`<tr ${t}>${ke(e)}</tr>`;break;case"tableCell":const o=e.isHeader?"th":"td";r=`<${o} ${t}>${ke(e)}</${o}>`;break;default:r=ke(e)}return r}function ke(e){return!e.children||e.children.length===0?"":e.children.map(n=>Su(n)).join("")}function _i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Sv=({testcases:e,selectedTestcase:n,onTestcaseChange:t})=>A.jsxs("div",{className:"controls",children:[A.jsx("label",{children:"选择测试用例："}),A.jsx("div",{className:"testcase-buttons",children:e.map(r=>A.jsx("button",{className:`testcase-button ${n===r.name?"selected":""}`,onClick:()=>t(r.name),children:r.name},r.name))})]}),Ta=({markdownText:e,astJson:n})=>{const t=()=>{e&&navigator.clipboard.writeText(e).then(()=>{alert("Markdown 文本已复制到剪贴板")}).catch(i=>{console.error("复制失败:",i),alert("复制失败，请手动复制文本")})},r=()=>{if(!n)return;const i=JSON.stringify(n,null,2);navigator.clipboard.writeText(i).then(()=>{alert("AST JSON 已复制到剪贴板")}).catch(l=>{console.error("复制失败:",l),alert("复制失败，请手动复制JSON")})};return A.jsx("div",{children:A.jsxs("div",{className:"markdown-actions",children:[e&&A.jsx("button",{className:"action-button",onClick:t,title:"复制 Markdown 文本",children:A.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),A.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),n&&A.jsx("button",{className:"action-button",onClick:r,title:"复制 AST JSON",children:A.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),A.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}),A.jsx("path",{d:"M13 13h5"}),A.jsx("path",{d:"M13 17h5"}),A.jsx("path",{d:"M13 15h3"})]})})]})})},Mc=({title:e,value:n,onChange:t})=>A.jsxs("div",{className:"markdown-container",children:[A.jsxs("div",{className:"markdown-header",children:[A.jsx("h2",{children:e}),A.jsx(Ta,{markdownText:n,astJson:wu(n)})]}),A.jsx("textarea",{className:"markdown-content",value:n,onChange:t})]}),Cv=({diffResult:e})=>A.jsxs("div",{className:"markdown-container",children:[A.jsx("h2",{children:"文本差异"}),A.jsx("pre",{className:"markdown-content diff-content",children:e.map((n,t)=>{const r=n.added?"green":n.removed?"red":"grey";return A.jsx("span",{style:{color:r},children:n.value},t)})})]}),Ev=({diffMarkdownText:e})=>{const n=r=>{const i=document.createElement("textarea");return i.innerHTML=r,i.value},t=()=>{const r=n(e);let i=[],l=0;const o=[...r.matchAll(/\{\+\+\+\+(.*?)\+\+\+\+\}/gs)],u=[...r.matchAll(/\{----(.*?)----\}/gs)],a=[...r.matchAll(/\{\+\+listItem\+\+\}/g)],s=[...r.matchAll(/\{--listItem--\}/g)],f=[...o,...u,...a,...s].sort((c,d)=>c.index-d.index);return f.length===0?r:(f.forEach((c,d)=>{const p=c[0],k=c.index;k>l&&i.push(A.jsx("span",{children:r.substring(l,k)},`text-${d}-before`)),p==="{++listItem++}"?i.push(A.jsx("span",{className:"list-item-added",children:p},`match-${d}`)):p==="{--listItem--}"?i.push(A.jsx("span",{className:"list-item-removed",children:p},`match-${d}`)):p.startsWith("{++++")?i.push(A.jsx("span",{className:"diff-added-inline",children:p},`match-${d}`)):p.startsWith("{----")&&i.push(A.jsx("span",{className:"diff-removed-inline",children:p},`match-${d}`)),l=k+p.length}),l<r.length&&i.push(A.jsx("span",{children:r.substring(l)},"text-last")),i)};return A.jsxs("div",{className:"markdown-container",children:[A.jsxs("div",{className:"markdown-header",children:[A.jsx("h2",{children:"AST Diff Markdown"}),A.jsx(Ta,{markdownText:e})]}),A.jsx("pre",{className:"markdown-content ast-diff-content",children:t()})]})},_v=({htmlContent:e})=>{const n=()=>{const t=new Blob([e],{type:"text/html"});return URL.createObjectURL(t)};return A.jsxs("div",{className:"markdown-container",children:[A.jsx("h2",{children:"AST Diff HTML"}),A.jsx("iframe",{className:"html-preview",src:n(),title:"HTML Diff Preview"})]})},Tv=({astJson:e})=>A.jsxs("div",{className:"markdown-container",children:[A.jsxs("div",{className:"markdown-header",children:[A.jsx("h2",{children:"AST JSON"}),A.jsx(Ta,{astJson:e})]}),A.jsx("pre",{className:"ast-json-content",children:JSON.stringify(e,null,2)})]});function Iv(){const[e,n]=on.useState("simple"),[t,r]=on.useState(""),[i,l]=on.useState(""),[o,u]=on.useState([]),[a,s]=on.useState(""),[f,c]=on.useState(""),[d,p]=on.useState(null);on.useEffect(()=>{const m=Bs.find(g=>g.name===e);m&&(r(m.oldMarkdown),l(m.newMarkdown),k(m.oldMarkdown,m.newMarkdown))},[e]);const k=(m,g)=>{const C=n1(m,g);u(C);const _=mv(m,g,{enableDiffNode:!0}),v=yv(_),T=kv(_);p(_),s(v),c(T)},S=m=>{n(m)},I=m=>{const g=m.target.value;r(g),k(g,i)},h=m=>{const g=m.target.value;l(g),k(t,g)};return A.jsxs("div",{className:"container",children:[A.jsx("header",{className:"app-header",children:A.jsx("h1",{className:"app-title",children:"Markdown Diff Viewer"})}),A.jsx("div",{className:"app-description",children:A.jsx("p",{children:"比较并可视化展示Markdown文档的差异，支持AST级别的精确对比"})}),A.jsx(Sv,{testcases:Bs,selectedTestcase:e,onTestcaseChange:S}),A.jsxs("div",{className:"grid-layout row-1",children:[A.jsx(Mc,{title:"原始Markdown",value:t,onChange:I}),A.jsx(Cv,{diffResult:o}),A.jsx(Mc,{title:"新Markdown",value:i,onChange:h})]}),A.jsxs("div",{className:"grid-layout row-2",children:[A.jsx(Ev,{diffMarkdownText:a}),A.jsx(_v,{htmlContent:f})]}),A.jsx("div",{className:"grid-layout row-3",children:A.jsx(Tv,{astJson:d})}),A.jsxs("div",{className:"external-links",children:[A.jsxs("a",{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer",children:[A.jsx("span",{className:"link-icon",children:"🔍"})," AST Explorer"]}),A.jsxs("a",{href:"https://jsonhero.io",target:"_blank",rel:"noopener noreferrer",children:[A.jsx("span",{className:"link-icon",children:"🦸"})," JSONHero"]})]}),A.jsx("footer",{className:"app-footer",children:A.jsx("p",{children:"Markdown Diff Viewer - 高效比较Markdown文档差异的工具"})})]})}const bp=document.getElementById("root");if(!bp)throw new Error("Root element not found");ko.createRoot(bp).render(A.jsx(fh.StrictMode,{children:A.jsx(Iv,{})}));
