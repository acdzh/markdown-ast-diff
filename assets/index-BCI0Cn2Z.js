(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function Gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jc={exports:{}},wl={},Kc={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ni=Symbol.for("react.element"),Ip=Symbol.for("react.portal"),Lp=Symbol.for("react.fragment"),Ap=Symbol.for("react.strict_mode"),Dp=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),Np=Symbol.for("react.context"),Rp=Symbol.for("react.forward_ref"),bp=Symbol.for("react.suspense"),jp=Symbol.for("react.memo"),$p=Symbol.for("react.lazy"),Wa=Symbol.iterator;function Op(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var Zc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ef=Object.assign,nf={};function ir(e,n,t){this.props=e,this.context=n,this.refs=nf,this.updater=t||Zc}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tf(){}tf.prototype=ir.prototype;function bu(e,n,t){this.props=e,this.context=n,this.refs=nf,this.updater=t||Zc}var ju=bu.prototype=new tf;ju.constructor=bu;ef(ju,ir.prototype);ju.isPureReactComponent=!0;var Qa=Array.isArray,rf=Object.prototype.hasOwnProperty,$u={current:null},lf={key:!0,ref:!0,__self:!0,__source:!0};function of(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)rf.call(n,r)&&!lf.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:ni,type:e,key:l,ref:o,props:i,_owner:$u.current}}function Bp(e,n){return{$$typeof:ni,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ou(e){return typeof e=="object"&&e!==null&&e.$$typeof===ni}function Hp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var qa=/\/+/g;function Bl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Hp(""+e.key):n.toString(36)}function Ii(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ni:case Ip:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Bl(o,0):r,Qa(i)?(t="",e!=null&&(t=e.replace(qa,"$&/")+"/"),Ii(i,n,t,"",function(s){return s})):i!=null&&(Ou(i)&&(i=Bp(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qa,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Qa(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+Bl(l,u);o+=Ii(l,n,t,a,i)}else if(a=Op(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+Bl(l,u++),o+=Ii(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function si(e,n,t){if(e==null)return e;var r=[],i=0;return Ii(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Up(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Li={transition:null},Vp={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Li,ReactCurrentOwner:$u};function uf(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:si,forEach:function(e,n,t){si(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return si(e,function(){n++}),n},toArray:function(e){return si(e,function(n){return n})||[]},only:function(e){if(!Ou(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=ir;H.Fragment=Lp;H.Profiler=Dp;H.PureComponent=bu;H.StrictMode=Ap;H.Suspense=bp;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp;H.act=uf;H.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ef({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=$u.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)rf.call(n,a)&&!lf.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:ni,type:e.type,key:i,ref:l,props:r,_owner:o}};H.createContext=function(e){return e={$$typeof:Np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fp,_context:e},e.Consumer=e};H.createElement=of;H.createFactory=function(e){var n=of.bind(null,e);return n.type=e,n};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Rp,render:e}};H.isValidElement=Ou;H.lazy=function(e){return{$$typeof:$p,_payload:{_status:-1,_result:e},_init:Up}};H.memo=function(e,n){return{$$typeof:jp,type:e,compare:n===void 0?null:n}};H.startTransition=function(e){var n=Li.transition;Li.transition={};try{e()}finally{Li.transition=n}};H.unstable_act=uf;H.useCallback=function(e,n){return Le.current.useCallback(e,n)};H.useContext=function(e){return Le.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};H.useEffect=function(e,n){return Le.current.useEffect(e,n)};H.useId=function(){return Le.current.useId()};H.useImperativeHandle=function(e,n,t){return Le.current.useImperativeHandle(e,n,t)};H.useInsertionEffect=function(e,n){return Le.current.useInsertionEffect(e,n)};H.useLayoutEffect=function(e,n){return Le.current.useLayoutEffect(e,n)};H.useMemo=function(e,n){return Le.current.useMemo(e,n)};H.useReducer=function(e,n,t){return Le.current.useReducer(e,n,t)};H.useRef=function(e){return Le.current.useRef(e)};H.useState=function(e){return Le.current.useState(e)};H.useSyncExternalStore=function(e,n,t){return Le.current.useSyncExternalStore(e,n,t)};H.useTransition=function(){return Le.current.useTransition()};H.version="18.3.1";Kc.exports=H;var un=Kc.exports;const Wp=Gc(un);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp=un,qp=Symbol.for("react.element"),Yp=Symbol.for("react.fragment"),Xp=Object.prototype.hasOwnProperty,Gp=Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jp={key:!0,ref:!0,__self:!0,__source:!0};function af(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Xp.call(n,r)&&!Jp.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:qp,type:e,key:l,ref:o,props:i,_owner:Gp.current}}wl.Fragment=Yp;wl.jsx=af;wl.jsxs=af;Jc.exports=wl;var A=Jc.exports,Lo={},sf={exports:{}},qe={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(L,$){var k=L.length;L.push($);e:for(;0<k;){var Y=k-1>>>1,J=L[Y];if(0<i(J,$))L[Y]=$,L[k]=J,k=Y;else break e}}function t(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var $=L[0],k=L.pop();if(k!==$){L[0]=k;e:for(var Y=0,J=L.length,x=J>>>1;Y<x;){var pe=2*(Y+1)-1,rn=L[pe],te=pe+1,mn=L[te];if(0>i(rn,k))te<J&&0>i(mn,rn)?(L[Y]=mn,L[te]=k,Y=te):(L[Y]=rn,L[pe]=k,Y=pe);else if(te<J&&0>i(mn,k))L[Y]=mn,L[te]=k,Y=te;else break e}}return $}function i(L,$){var k=L.sortIndex-$.sortIndex;return k!==0?k:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],s=[],f=1,c=null,d=3,h=!1,y=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var $=t(s);$!==null;){if($.callback===null)r(s);else if($.startTime<=L)r(s),$.sortIndex=$.expirationTime,n(a,$);else break;$=t(s)}}function _(L){if(S=!1,g(L),!y)if(t(a)!==null)y=!0,de(E);else{var $=t(s);$!==null&&ce(_,$.startTime-L)}}function E(L,$){y=!1,S&&(S=!1,p(z),z=-1),h=!0;var k=d;try{for(g($),c=t(a);c!==null&&(!(c.expirationTime>$)||L&&!D());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,d=c.priorityLevel;var J=Y(c.expirationTime<=$);$=e.unstable_now(),typeof J=="function"?c.callback=J:c===t(a)&&r(a),g($)}else r(a);c=t(a)}if(c!==null)var x=!0;else{var pe=t(s);pe!==null&&ce(_,pe.startTime-$),x=!1}return x}finally{c=null,d=k,h=!1}}var w=!1,M=null,z=-1,j=5,v=-1;function D(){return!(e.unstable_now()-v<j)}function N(){if(M!==null){var L=e.unstable_now();v=L;var $=!0;try{$=M(!0,L)}finally{$?q():(w=!1,M=null)}}else w=!1}var q;if(typeof m=="function")q=function(){m(N)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,V=ee.port2;ee.port1.onmessage=N,q=function(){V.postMessage(null)}}else q=function(){T(N,0)};function de(L){M=L,w||(w=!0,q())}function ce(L,$){z=T(function(){L(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,de(E))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(L){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var k=d;d=$;try{return L()}finally{d=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var k=d;d=L;try{return $()}finally{d=k}},e.unstable_scheduleCallback=function(L,$,k){var Y=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?Y+k:Y):k=Y,L){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=k+J,L={id:f++,callback:$,priorityLevel:L,startTime:k,expirationTime:J,sortIndex:-1},k>Y?(L.sortIndex=k,n(s,L),t(a)===null&&L===t(s)&&(S?(p(z),z=-1):S=!0,ce(_,k-Y))):(L.sortIndex=J,n(a,L),y||h||(y=!0,de(E))),L},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(L){var $=d;return function(){var k=d;d=$;try{return L.apply(this,arguments)}finally{d=k}}}})(ff);cf.exports=ff;var Kp=cf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp=un,Qe=Kp;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var df=new Set,jr={};function Et(e,n){Gt(e,n),Gt(e+"Capture",n)}function Gt(e,n){for(jr[e]=n,e=0;e<n.length;e++)df.add(n[e])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ao=Object.prototype.hasOwnProperty,em=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ya={},Xa={};function nm(e){return Ao.call(Xa,e)?!0:Ao.call(Ya,e)?!1:em.test(e)?Xa[e]=!0:(Ya[e]=!0,!1)}function tm(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rm(e,n,t,r){if(n===null||typeof n>"u"||tm(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ae(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];_e[n]=new Ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bu=/[\-:]([a-z])/g;function Hu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Bu,Hu);_e[n]=new Ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Bu,Hu);_e[n]=new Ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Bu,Hu);_e[n]=new Ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Uu(e,n,t,r){var i=_e.hasOwnProperty(n)?_e[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(rm(n,t,i,r)&&(t=null),r||i===null?nm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Rn=Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ci=Symbol.for("react.element"),At=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),Do=Symbol.for("react.profiler"),hf=Symbol.for("react.provider"),pf=Symbol.for("react.context"),Wu=Symbol.for("react.forward_ref"),Fo=Symbol.for("react.suspense"),No=Symbol.for("react.suspense_list"),Qu=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),mf=Symbol.for("react.offscreen"),Ga=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=Ga&&e[Ga]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,Hl;function vr(e){if(Hl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Hl=n&&n[1]||""}return`
`+Hl+e}var Ul=!1;function Vl(e,n){if(!e||Ul)return"";Ul=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{Ul=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?vr(e):""}function im(e){switch(e.tag){case 5:return vr(e.type);case 16:return vr("Lazy");case 13:return vr("Suspense");case 19:return vr("SuspenseList");case 0:case 2:case 15:return e=Vl(e.type,!1),e;case 11:return e=Vl(e.type.render,!1),e;case 1:return e=Vl(e.type,!0),e;default:return""}}function Ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case At:return"Portal";case Do:return"Profiler";case Vu:return"StrictMode";case Fo:return"Suspense";case No:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pf:return(e.displayName||"Context")+".Consumer";case hf:return(e._context.displayName||"Context")+".Provider";case Wu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qu:return n=e.displayName||null,n!==null?n:Ro(e.type)||"Memo";case Hn:n=e._payload,e=e._init;try{return Ro(e(n))}catch{}}return null}function lm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ro(n);case 8:return n===Vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function om(e){var n=gf(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fi(e){e._valueTracker||(e._valueTracker=om(e))}function yf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=gf(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bo(e,n){var t=n.checked;return ae({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ja(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=tt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function kf(e,n){n=n.checked,n!=null&&Uu(e,"checked",n,!1)}function jo(e,n){kf(e,n);var t=tt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?$o(e,n.type,t):n.hasOwnProperty("defaultValue")&&$o(e,n.type,tt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ka(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function $o(e,n,t){(n!=="number"||qi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Sr=Array.isArray;function Vt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+tt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Oo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return ae({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Za(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(Sr(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:tt(t)}}function xf(e,n){var t=tt(n.value),r=tt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function es(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function wf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?wf(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var di,vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(di=di||document.createElement("div"),di.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $r(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},um=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){um.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Tr[n]=Tr[e]})});function Sf(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+n).trim():n+"px"}function _f(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Sf(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var am=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ho(e,n){if(n){if(am[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function Uo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vo=null;function qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wo=null,Wt=null,Qt=null;function ns(e){if(e=ii(e)){if(typeof Wo!="function")throw Error(P(280));var n=e.stateNode;n&&(n=El(n),Wo(e.stateNode,e.type,n))}}function Cf(e){Wt?Qt?Qt.push(e):Qt=[e]:Wt=e}function Ef(){if(Wt){var e=Wt,n=Qt;if(Qt=Wt=null,ns(e),n)for(e=0;e<n.length;e++)ns(n[e])}}function Mf(e,n){return e(n)}function Tf(){}var Wl=!1;function Pf(e,n,t){if(Wl)return e(n,t);Wl=!0;try{return Mf(e,n,t)}finally{Wl=!1,(Wt!==null||Qt!==null)&&(Tf(),Ef())}}function Or(e,n){var t=e.stateNode;if(t===null)return null;var r=El(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Qo=!1;if(An)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){Qo=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{Qo=!1}function sm(e,n,t,r,i,l,o,u,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(f){this.onError(f)}}var Pr=!1,Yi=null,Xi=!1,qo=null,cm={onError:function(e){Pr=!0,Yi=e}};function fm(e,n,t,r,i,l,o,u,a){Pr=!1,Yi=null,sm.apply(cm,arguments)}function dm(e,n,t,r,i,l,o,u,a){if(fm.apply(this,arguments),Pr){if(Pr){var s=Yi;Pr=!1,Yi=null}else throw Error(P(198));Xi||(Xi=!0,qo=s)}}function Mt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function zf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ts(e){if(Mt(e)!==e)throw Error(P(188))}function hm(e){var n=e.alternate;if(!n){if(n=Mt(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return ts(i),e;if(l===r)return ts(i),n;l=l.sibling}throw Error(P(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function If(e){return e=hm(e),e!==null?Lf(e):null}function Lf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Lf(e);if(n!==null)return n;e=e.sibling}return null}var Af=Qe.unstable_scheduleCallback,rs=Qe.unstable_cancelCallback,pm=Qe.unstable_shouldYield,mm=Qe.unstable_requestPaint,fe=Qe.unstable_now,gm=Qe.unstable_getCurrentPriorityLevel,Yu=Qe.unstable_ImmediatePriority,Df=Qe.unstable_UserBlockingPriority,Gi=Qe.unstable_NormalPriority,ym=Qe.unstable_LowPriority,Ff=Qe.unstable_IdlePriority,vl=null,wn=null;function km(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(vl,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:vm,xm=Math.log,wm=Math.LN2;function vm(e){return e>>>=0,e===0?32:31-(xm(e)/wm|0)|0}var hi=64,pi=4194304;function _r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ji(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=_r(u):(l&=o,l!==0&&(r=_r(l)))}else o=t&~i,o!==0?r=_r(o):l!==0&&(r=_r(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-fn(n),i=1<<t,r|=e[t],n&=~i;return r}function Sm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _m(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-fn(l),u=1<<o,a=i[o];a===-1?(!(u&t)||u&r)&&(i[o]=Sm(u,n)):a<=n&&(e.expiredLanes|=u),l&=~u}}function Yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nf(){var e=hi;return hi<<=1,!(hi&4194240)&&(hi=64),e}function Ql(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ti(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-fn(n),e[n]=t}function Cm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-fn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Xu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-fn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var G=0;function Rf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bf,Gu,jf,$f,Of,Xo=!1,mi=[],Yn=null,Xn=null,Gn=null,Br=new Map,Hr=new Map,Vn=[],Em="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function is(e,n){switch(e){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":Br.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(n.pointerId)}}function dr(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=ii(n),n!==null&&Gu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Mm(e,n,t,r,i){switch(n){case"focusin":return Yn=dr(Yn,e,n,t,r,i),!0;case"dragenter":return Xn=dr(Xn,e,n,t,r,i),!0;case"mouseover":return Gn=dr(Gn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Br.set(l,dr(Br.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Hr.set(l,dr(Hr.get(l)||null,e,n,t,r,i)),!0}return!1}function Bf(e){var n=pt(e.target);if(n!==null){var t=Mt(n);if(t!==null){if(n=t.tag,n===13){if(n=zf(t),n!==null){e.blockedOn=n,Of(e.priority,function(){jf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Go(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Vo=r,t.target.dispatchEvent(r),Vo=null}else return n=ii(t),n!==null&&Gu(n),e.blockedOn=t,!1;n.shift()}return!0}function ls(e,n,t){Ai(e)&&t.delete(n)}function Tm(){Xo=!1,Yn!==null&&Ai(Yn)&&(Yn=null),Xn!==null&&Ai(Xn)&&(Xn=null),Gn!==null&&Ai(Gn)&&(Gn=null),Br.forEach(ls),Hr.forEach(ls)}function hr(e,n){e.blockedOn===n&&(e.blockedOn=null,Xo||(Xo=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Tm)))}function Ur(e){function n(i){return hr(i,e)}if(0<mi.length){hr(mi[0],e);for(var t=1;t<mi.length;t++){var r=mi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Yn!==null&&hr(Yn,e),Xn!==null&&hr(Xn,e),Gn!==null&&hr(Gn,e),Br.forEach(n),Hr.forEach(n),t=0;t<Vn.length;t++)r=Vn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vn.length&&(t=Vn[0],t.blockedOn===null);)Bf(t),t.blockedOn===null&&Vn.shift()}var qt=Rn.ReactCurrentBatchConfig,Ki=!0;function Pm(e,n,t,r){var i=G,l=qt.transition;qt.transition=null;try{G=1,Ju(e,n,t,r)}finally{G=i,qt.transition=l}}function zm(e,n,t,r){var i=G,l=qt.transition;qt.transition=null;try{G=4,Ju(e,n,t,r)}finally{G=i,qt.transition=l}}function Ju(e,n,t,r){if(Ki){var i=Go(e,n,t,r);if(i===null)to(e,n,r,Zi,t),is(e,r);else if(Mm(i,e,n,t,r))r.stopPropagation();else if(is(e,r),n&4&&-1<Em.indexOf(e)){for(;i!==null;){var l=ii(i);if(l!==null&&bf(l),l=Go(e,n,t,r),l===null&&to(e,n,r,Zi,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else to(e,n,r,null,t)}}var Zi=null;function Go(e,n,t,r){if(Zi=null,e=qu(r),e=pt(e),e!==null)if(n=Mt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=zf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Zi=e,null}function Hf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gm()){case Yu:return 1;case Df:return 4;case Gi:case ym:return 16;case Ff:return 536870912;default:return 16}default:return 16}}var Qn=null,Ku=null,Di=null;function Uf(){if(Di)return Di;var e,n=Ku,t=n.length,r,i="value"in Qn?Qn.value:Qn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Di=i.slice(e,1<r?1-r:void 0)}function Fi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function gi(){return!0}function os(){return!1}function Ye(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?gi:os,this.isPropagationStopped=os,this}return ae(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),n}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zu=Ye(lr),ri=ae({},lr,{view:0,detail:0}),Im=Ye(ri),ql,Yl,pr,Sl=ae({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ea,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(ql=e.screenX-pr.screenX,Yl=e.screenY-pr.screenY):Yl=ql=0,pr=e),ql)},movementY:function(e){return"movementY"in e?e.movementY:Yl}}),us=Ye(Sl),Lm=ae({},Sl,{dataTransfer:0}),Am=Ye(Lm),Dm=ae({},ri,{relatedTarget:0}),Xl=Ye(Dm),Fm=ae({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Nm=Ye(Fm),Rm=ae({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bm=Ye(Rm),jm=ae({},lr,{data:0}),as=Ye(jm),$m={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Om={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Bm[e])?!!n[e]:!1}function ea(){return Hm}var Um=ae({},ri,{key:function(e){if(e.key){var n=$m[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Om[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ea,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vm=Ye(Um),Wm=ae({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ss=Ye(Wm),Qm=ae({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ea}),qm=Ye(Qm),Ym=ae({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xm=Ye(Ym),Gm=ae({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jm=Ye(Gm),Km=[9,13,27,32],na=An&&"CompositionEvent"in window,zr=null;An&&"documentMode"in document&&(zr=document.documentMode);var Zm=An&&"TextEvent"in window&&!zr,Vf=An&&(!na||zr&&8<zr&&11>=zr),cs=" ",fs=!1;function Wf(e,n){switch(e){case"keyup":return Km.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function eg(e,n){switch(e){case"compositionend":return Qf(n);case"keypress":return n.which!==32?null:(fs=!0,cs);case"textInput":return e=n.data,e===cs&&fs?null:e;default:return null}}function ng(e,n){if(Ft)return e==="compositionend"||!na&&Wf(e,n)?(e=Uf(),Di=Ku=Qn=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vf&&n.locale!=="ko"?null:n.data;default:return null}}var tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ds(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!tg[e.type]:n==="textarea"}function qf(e,n,t,r){Cf(r),n=el(n,"onChange"),0<n.length&&(t=new Zu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ir=null,Vr=null;function rg(e){id(e,0)}function _l(e){var n=bt(e);if(yf(n))return e}function ig(e,n){if(e==="change")return n}var Yf=!1;if(An){var Gl;if(An){var Jl="oninput"in document;if(!Jl){var hs=document.createElement("div");hs.setAttribute("oninput","return;"),Jl=typeof hs.oninput=="function"}Gl=Jl}else Gl=!1;Yf=Gl&&(!document.documentMode||9<document.documentMode)}function ps(){Ir&&(Ir.detachEvent("onpropertychange",Xf),Vr=Ir=null)}function Xf(e){if(e.propertyName==="value"&&_l(Vr)){var n=[];qf(n,Vr,e,qu(e)),Pf(rg,n)}}function lg(e,n,t){e==="focusin"?(ps(),Ir=n,Vr=t,Ir.attachEvent("onpropertychange",Xf)):e==="focusout"&&ps()}function og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(Vr)}function ug(e,n){if(e==="click")return _l(n)}function ag(e,n){if(e==="input"||e==="change")return _l(n)}function sg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var pn=typeof Object.is=="function"?Object.is:sg;function Wr(e,n){if(pn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Ao.call(n,i)||!pn(e[i],n[i]))return!1}return!0}function ms(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gs(e,n){var t=ms(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ms(t)}}function Gf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Jf(){for(var e=window,n=qi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=qi(e.document)}return n}function ta(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function cg(e){var n=Jf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Gf(t.ownerDocument.documentElement,t)){if(r!==null&&ta(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=gs(t,l);var o=gs(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fg=An&&"documentMode"in document&&11>=document.documentMode,Nt=null,Jo=null,Lr=null,Ko=!1;function ys(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ko||Nt==null||Nt!==qi(r)||(r=Nt,"selectionStart"in r&&ta(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Wr(Lr,r)||(Lr=r,r=el(Jo,"onSelect"),0<r.length&&(n=new Zu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Nt)))}function yi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Rt={animationend:yi("Animation","AnimationEnd"),animationiteration:yi("Animation","AnimationIteration"),animationstart:yi("Animation","AnimationStart"),transitionend:yi("Transition","TransitionEnd")},Kl={},Kf={};An&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete Rt.animationend.animation,delete Rt.animationiteration.animation,delete Rt.animationstart.animation),"TransitionEvent"in window||delete Rt.transitionend.transition);function Cl(e){if(Kl[e])return Kl[e];if(!Rt[e])return e;var n=Rt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Kf)return Kl[e]=n[t];return e}var Zf=Cl("animationend"),ed=Cl("animationiteration"),nd=Cl("animationstart"),td=Cl("transitionend"),rd=new Map,ks="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lt(e,n){rd.set(e,n),Et(n,[e])}for(var Zl=0;Zl<ks.length;Zl++){var eo=ks[Zl],dg=eo.toLowerCase(),hg=eo[0].toUpperCase()+eo.slice(1);lt(dg,"on"+hg)}lt(Zf,"onAnimationEnd");lt(ed,"onAnimationIteration");lt(nd,"onAnimationStart");lt("dblclick","onDoubleClick");lt("focusin","onFocus");lt("focusout","onBlur");lt(td,"onTransitionEnd");Gt("onMouseEnter",["mouseout","mouseover"]);Gt("onMouseLeave",["mouseout","mouseover"]);Gt("onPointerEnter",["pointerout","pointerover"]);Gt("onPointerLeave",["pointerout","pointerover"]);Et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Et("onBeforeInput",["compositionend","keypress","textInput","paste"]);Et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function xs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,dm(r,n,void 0,e),e.currentTarget=null}function id(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==l&&i.isPropagationStopped())break e;xs(i,u,s),l=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e;xs(i,u,s),l=a}}}if(Xi)throw e=qo,Xi=!1,qo=null,e}function re(e,n){var t=n[ru];t===void 0&&(t=n[ru]=new Set);var r=e+"__bubble";t.has(r)||(ld(n,e,2,!1),t.add(r))}function no(e,n,t){var r=0;n&&(r|=4),ld(t,e,r,n)}var ki="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[ki]){e[ki]=!0,df.forEach(function(t){t!=="selectionchange"&&(pg.has(t)||no(t,!1,e),no(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ki]||(n[ki]=!0,no("selectionchange",!1,n))}}function ld(e,n,t,r){switch(Hf(n)){case 1:var i=Pm;break;case 4:i=zm;break;default:i=Ju}t=i.bind(null,n,t,e),i=void 0,!Qo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function to(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;u!==null;){if(o=pt(u),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}u=u.parentNode}}r=r.return}Pf(function(){var s=l,f=qu(t),c=[];e:{var d=rd.get(e);if(d!==void 0){var h=Zu,y=e;switch(e){case"keypress":if(Fi(t)===0)break e;case"keydown":case"keyup":h=Vm;break;case"focusin":y="focus",h=Xl;break;case"focusout":y="blur",h=Xl;break;case"beforeblur":case"afterblur":h=Xl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=qm;break;case Zf:case ed:case nd:h=Nm;break;case td:h=Xm;break;case"scroll":h=Im;break;case"wheel":h=Jm;break;case"copy":case"cut":case"paste":h=bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ss}var S=(n&4)!==0,T=!S&&e==="scroll",p=S?d!==null?d+"Capture":null:d;S=[];for(var m=s,g;m!==null;){g=m;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,p!==null&&(_=Or(m,p),_!=null&&S.push(qr(m,_,g)))),T)break;m=m.return}0<S.length&&(d=new h(d,y,null,t,f),c.push({event:d,listeners:S}))}}if(!(n&7)){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&t!==Vo&&(y=t.relatedTarget||t.fromElement)&&(pt(y)||y[Dn]))break e;if((h||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,h?(y=t.relatedTarget||t.toElement,h=s,y=y?pt(y):null,y!==null&&(T=Mt(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=s),h!==y)){if(S=us,_="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=ss,_="onPointerLeave",p="onPointerEnter",m="pointer"),T=h==null?d:bt(h),g=y==null?d:bt(y),d=new S(_,m+"leave",h,t,f),d.target=T,d.relatedTarget=g,_=null,pt(f)===s&&(S=new S(p,m+"enter",y,t,f),S.target=g,S.relatedTarget=T,_=S),T=_,h&&y)n:{for(S=h,p=y,m=0,g=S;g;g=It(g))m++;for(g=0,_=p;_;_=It(_))g++;for(;0<m-g;)S=It(S),m--;for(;0<g-m;)p=It(p),g--;for(;m--;){if(S===p||p!==null&&S===p.alternate)break n;S=It(S),p=It(p)}S=null}else S=null;h!==null&&ws(c,d,h,S,!1),y!==null&&T!==null&&ws(c,T,y,S,!0)}}e:{if(d=s?bt(s):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var E=ig;else if(ds(d))if(Yf)E=ag;else{E=og;var w=lg}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=ug);if(E&&(E=E(e,s))){qf(c,E,t,f);break e}w&&w(e,d,s),e==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&$o(d,"number",d.value)}switch(w=s?bt(s):window,e){case"focusin":(ds(w)||w.contentEditable==="true")&&(Nt=w,Jo=s,Lr=null);break;case"focusout":Lr=Jo=Nt=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,ys(c,t,f);break;case"selectionchange":if(fg)break;case"keydown":case"keyup":ys(c,t,f)}var M;if(na)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ft?Wf(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(Vf&&t.locale!=="ko"&&(Ft||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ft&&(M=Uf()):(Qn=f,Ku="value"in Qn?Qn.value:Qn.textContent,Ft=!0)),w=el(s,z),0<w.length&&(z=new as(z,e,null,t,f),c.push({event:z,listeners:w}),M?z.data=M:(M=Qf(t),M!==null&&(z.data=M)))),(M=Zm?eg(e,t):ng(e,t))&&(s=el(s,"onBeforeInput"),0<s.length&&(f=new as("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:s}),f.data=M))}id(c,n)})}function qr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function el(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Or(e,t),l!=null&&r.unshift(qr(e,l,i)),l=Or(e,n),l!=null&&r.push(qr(e,l,i))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ws(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=Or(t,l),a!=null&&o.unshift(qr(t,a,u))):i||(a=Or(t,l),a!=null&&o.push(qr(t,a,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var mg=/\r\n?/g,gg=/\u0000|\uFFFD/g;function vs(e){return(typeof e=="string"?e:""+e).replace(mg,`
`).replace(gg,"")}function xi(e,n,t){if(n=vs(n),vs(e)!==n&&t)throw Error(P(425))}function nl(){}var Zo=null,eu=null;function nu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,yg=typeof clearTimeout=="function"?clearTimeout:void 0,Ss=typeof Promise=="function"?Promise:void 0,kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ss<"u"?function(e){return Ss.resolve(null).then(e).catch(xg)}:tu;function xg(e){setTimeout(function(){throw e})}function ro(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Ur(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Ur(n)}function Jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function _s(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),xn="__reactFiber$"+or,Yr="__reactProps$"+or,Dn="__reactContainer$"+or,ru="__reactEvents$"+or,wg="__reactListeners$"+or,vg="__reactHandles$"+or;function pt(e){var n=e[xn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Dn]||t[xn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=_s(e);e!==null;){if(t=e[xn])return t;e=_s(e)}return n}e=t,t=e.parentNode}return null}function ii(e){return e=e[xn]||e[Dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function El(e){return e[Yr]||null}var iu=[],jt=-1;function ot(e){return{current:e}}function ie(e){0>jt||(e.current=iu[jt],iu[jt]=null,jt--)}function ne(e,n){jt++,iu[jt]=e.current,e.current=n}var rt={},Te=ot(rt),be=ot(!1),xt=rt;function Jt(e,n){var t=e.type.contextTypes;if(!t)return rt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function tl(){ie(be),ie(Te)}function Cs(e,n,t){if(Te.current!==rt)throw Error(P(168));ne(Te,n),ne(be,t)}function od(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(P(108,lm(e)||"Unknown",i));return ae({},t,r)}function rl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rt,xt=Te.current,ne(Te,e),ne(be,be.current),!0}function Es(e,n,t){var r=e.stateNode;if(!r)throw Error(P(169));t?(e=od(e,n,xt),r.__reactInternalMemoizedMergedChildContext=e,ie(be),ie(Te),ne(Te,e)):ie(be),ne(be,t)}var Pn=null,Ml=!1,io=!1;function ud(e){Pn===null?Pn=[e]:Pn.push(e)}function Sg(e){Ml=!0,ud(e)}function ut(){if(!io&&Pn!==null){io=!0;var e=0,n=G;try{var t=Pn;for(G=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Pn=null,Ml=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(e+1)),Af(Yu,ut),i}finally{G=n,io=!1}}return null}var $t=[],Ot=0,il=null,ll=0,Xe=[],Ge=0,wt=null,zn=1,In="";function dt(e,n){$t[Ot++]=ll,$t[Ot++]=il,il=e,ll=n}function ad(e,n,t){Xe[Ge++]=zn,Xe[Ge++]=In,Xe[Ge++]=wt,wt=e;var r=zn;e=In;var i=32-fn(r)-1;r&=~(1<<i),t+=1;var l=32-fn(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zn=1<<32-fn(n)+i|t<<i|r,In=l+e}else zn=1<<l|t<<i|r,In=e}function ra(e){e.return!==null&&(dt(e,1),ad(e,1,0))}function ia(e){for(;e===il;)il=$t[--Ot],$t[Ot]=null,ll=$t[--Ot],$t[Ot]=null;for(;e===wt;)wt=Xe[--Ge],Xe[Ge]=null,In=Xe[--Ge],Xe[Ge]=null,zn=Xe[--Ge],Xe[Ge]=null}var Ve=null,Ue=null,le=!1,cn=null;function sd(e,n){var t=Ke(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ms(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ve=e,Ue=Jn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ve=e,Ue=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=wt!==null?{id:zn,overflow:In}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ke(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ve=e,Ue=null,!0):!1;default:return!1}}function lu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ou(e){if(le){var n=Ue;if(n){var t=n;if(!Ms(e,n)){if(lu(e))throw Error(P(418));n=Jn(t.nextSibling);var r=Ve;n&&Ms(e,n)?sd(r,t):(e.flags=e.flags&-4097|2,le=!1,Ve=e)}}else{if(lu(e))throw Error(P(418));e.flags=e.flags&-4097|2,le=!1,Ve=e}}}function Ts(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function wi(e){if(e!==Ve)return!1;if(!le)return Ts(e),le=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!nu(e.type,e.memoizedProps)),n&&(n=Ue)){if(lu(e))throw cd(),Error(P(418));for(;n;)sd(e,n),n=Jn(n.nextSibling)}if(Ts(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ue=Jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ue=null}}else Ue=Ve?Jn(e.stateNode.nextSibling):null;return!0}function cd(){for(var e=Ue;e;)e=Jn(e.nextSibling)}function Kt(){Ue=Ve=null,le=!1}function la(e){cn===null?cn=[e]:cn.push(e)}var _g=Rn.ReactCurrentBatchConfig;function mr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function vi(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ps(e){var n=e._init;return n(e._payload)}function fd(e){function n(p,m){if(e){var g=p.deletions;g===null?(p.deletions=[m],p.flags|=16):g.push(m)}}function t(p,m){if(!e)return null;for(;m!==null;)n(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=nt(p,m),p.index=0,p.sibling=null,p}function l(p,m,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<m?(p.flags|=2,m):g):(p.flags|=2,m)):(p.flags|=1048576,m)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function u(p,m,g,_){return m===null||m.tag!==6?(m=fo(g,p.mode,_),m.return=p,m):(m=i(m,g),m.return=p,m)}function a(p,m,g,_){var E=g.type;return E===Dt?f(p,m,g.props.children,_,g.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Hn&&Ps(E)===m.type)?(_=i(m,g.props),_.ref=mr(p,m,g),_.return=p,_):(_=Bi(g.type,g.key,g.props,null,p.mode,_),_.ref=mr(p,m,g),_.return=p,_)}function s(p,m,g,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=ho(g,p.mode,_),m.return=p,m):(m=i(m,g.children||[]),m.return=p,m)}function f(p,m,g,_,E){return m===null||m.tag!==7?(m=kt(g,p.mode,_,E),m.return=p,m):(m=i(m,g),m.return=p,m)}function c(p,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=fo(""+m,p.mode,g),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ci:return g=Bi(m.type,m.key,m.props,null,p.mode,g),g.ref=mr(p,null,m),g.return=p,g;case At:return m=ho(m,p.mode,g),m.return=p,m;case Hn:var _=m._init;return c(p,_(m._payload),g)}if(Sr(m)||cr(m))return m=kt(m,p.mode,g,null),m.return=p,m;vi(p,m)}return null}function d(p,m,g,_){var E=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:u(p,m,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ci:return g.key===E?a(p,m,g,_):null;case At:return g.key===E?s(p,m,g,_):null;case Hn:return E=g._init,d(p,m,E(g._payload),_)}if(Sr(g)||cr(g))return E!==null?null:f(p,m,g,_,null);vi(p,g)}return null}function h(p,m,g,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(g)||null,u(m,p,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ci:return p=p.get(_.key===null?g:_.key)||null,a(m,p,_,E);case At:return p=p.get(_.key===null?g:_.key)||null,s(m,p,_,E);case Hn:var w=_._init;return h(p,m,g,w(_._payload),E)}if(Sr(_)||cr(_))return p=p.get(g)||null,f(m,p,_,E,null);vi(m,_)}return null}function y(p,m,g,_){for(var E=null,w=null,M=m,z=m=0,j=null;M!==null&&z<g.length;z++){M.index>z?(j=M,M=null):j=M.sibling;var v=d(p,M,g[z],_);if(v===null){M===null&&(M=j);break}e&&M&&v.alternate===null&&n(p,M),m=l(v,m,z),w===null?E=v:w.sibling=v,w=v,M=j}if(z===g.length)return t(p,M),le&&dt(p,z),E;if(M===null){for(;z<g.length;z++)M=c(p,g[z],_),M!==null&&(m=l(M,m,z),w===null?E=M:w.sibling=M,w=M);return le&&dt(p,z),E}for(M=r(p,M);z<g.length;z++)j=h(M,p,z,g[z],_),j!==null&&(e&&j.alternate!==null&&M.delete(j.key===null?z:j.key),m=l(j,m,z),w===null?E=j:w.sibling=j,w=j);return e&&M.forEach(function(D){return n(p,D)}),le&&dt(p,z),E}function S(p,m,g,_){var E=cr(g);if(typeof E!="function")throw Error(P(150));if(g=E.call(g),g==null)throw Error(P(151));for(var w=E=null,M=m,z=m=0,j=null,v=g.next();M!==null&&!v.done;z++,v=g.next()){M.index>z?(j=M,M=null):j=M.sibling;var D=d(p,M,v.value,_);if(D===null){M===null&&(M=j);break}e&&M&&D.alternate===null&&n(p,M),m=l(D,m,z),w===null?E=D:w.sibling=D,w=D,M=j}if(v.done)return t(p,M),le&&dt(p,z),E;if(M===null){for(;!v.done;z++,v=g.next())v=c(p,v.value,_),v!==null&&(m=l(v,m,z),w===null?E=v:w.sibling=v,w=v);return le&&dt(p,z),E}for(M=r(p,M);!v.done;z++,v=g.next())v=h(M,p,z,v.value,_),v!==null&&(e&&v.alternate!==null&&M.delete(v.key===null?z:v.key),m=l(v,m,z),w===null?E=v:w.sibling=v,w=v);return e&&M.forEach(function(N){return n(p,N)}),le&&dt(p,z),E}function T(p,m,g,_){if(typeof g=="object"&&g!==null&&g.type===Dt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ci:e:{for(var E=g.key,w=m;w!==null;){if(w.key===E){if(E=g.type,E===Dt){if(w.tag===7){t(p,w.sibling),m=i(w,g.props.children),m.return=p,p=m;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Hn&&Ps(E)===w.type){t(p,w.sibling),m=i(w,g.props),m.ref=mr(p,w,g),m.return=p,p=m;break e}t(p,w);break}else n(p,w);w=w.sibling}g.type===Dt?(m=kt(g.props.children,p.mode,_,g.key),m.return=p,p=m):(_=Bi(g.type,g.key,g.props,null,p.mode,_),_.ref=mr(p,m,g),_.return=p,p=_)}return o(p);case At:e:{for(w=g.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){t(p,m.sibling),m=i(m,g.children||[]),m.return=p,p=m;break e}else{t(p,m);break}else n(p,m);m=m.sibling}m=ho(g,p.mode,_),m.return=p,p=m}return o(p);case Hn:return w=g._init,T(p,m,w(g._payload),_)}if(Sr(g))return y(p,m,g,_);if(cr(g))return S(p,m,g,_);vi(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(t(p,m.sibling),m=i(m,g),m.return=p,p=m):(t(p,m),m=fo(g,p.mode,_),m.return=p,p=m),o(p)):t(p,m)}return T}var Zt=fd(!0),dd=fd(!1),ol=ot(null),ul=null,Bt=null,oa=null;function ua(){oa=Bt=ul=null}function aa(e){var n=ol.current;ie(ol),e._currentValue=n}function uu(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Yt(e,n){ul=e,oa=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ne=!0),e.firstContext=null)}function nn(e){var n=e._currentValue;if(oa!==e)if(e={context:e,memoizedValue:n,next:null},Bt===null){if(ul===null)throw Error(P(308));Bt=e,ul.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return n}var mt=null;function sa(e){mt===null?mt=[e]:mt.push(e)}function hd(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,sa(n)):(t.next=i.next,i.next=t),n.interleaved=t,Fn(e,r)}function Fn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Un=!1;function ca(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ln(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Fn(e,t)}return i=r.interleaved,i===null?(n.next=n,sa(r)):(n.next=i.next,i.next=n),r.interleaved=n,Fn(e,t)}function Ni(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xu(e,t)}}function zs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function al(e,n,t,r){var i=e.updateQueue;Un=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,o===null?l=s:o.next=s,o=a;var f=e.alternate;f!==null&&(f=f.updateQueue,u=f.lastBaseUpdate,u!==o&&(u===null?f.firstBaseUpdate=s:u.next=s,f.lastBaseUpdate=a))}if(l!==null){var c=i.baseState;o=0,f=s=a=null,u=l;do{var d=u.lane,h=u.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:h,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,S=u;switch(d=n,h=t,S.tag){case 1:if(y=S.payload,typeof y=="function"){c=y.call(h,c,d);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,d=typeof y=="function"?y.call(h,c,d):y,d==null)break e;c=ae({},c,d);break e;case 2:Un=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[u]:d.push(u))}else h={eventTime:h,lane:d,tag:u.tag,payload:u.payload,callback:u.callback,next:null},f===null?(s=f=h,a=c):f=f.next=h,o|=d;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;d=u,u=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(a=c),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);St|=o,e.lanes=o,e.memoizedState=c}}function Is(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var li={},vn=ot(li),Xr=ot(li),Gr=ot(li);function gt(e){if(e===li)throw Error(P(174));return e}function fa(e,n){switch(ne(Gr,n),ne(Xr,e),ne(vn,li),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Bo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Bo(n,e)}ie(vn),ne(vn,n)}function er(){ie(vn),ie(Xr),ie(Gr)}function md(e){gt(Gr.current);var n=gt(vn.current),t=Bo(n,e.type);n!==t&&(ne(Xr,e),ne(vn,t))}function da(e){Xr.current===e&&(ie(vn),ie(Xr))}var oe=ot(0);function sl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var lo=[];function ha(){for(var e=0;e<lo.length;e++)lo[e]._workInProgressVersionPrimary=null;lo.length=0}var Ri=Rn.ReactCurrentDispatcher,oo=Rn.ReactCurrentBatchConfig,vt=0,ue=null,me=null,ye=null,cl=!1,Ar=!1,Jr=0,Cg=0;function Ce(){throw Error(P(321))}function pa(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!pn(e[t],n[t]))return!1;return!0}function ma(e,n,t,r,i,l){if(vt=l,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ri.current=e===null||e.memoizedState===null?Pg:zg,e=t(r,i),Ar){l=0;do{if(Ar=!1,Jr=0,25<=l)throw Error(P(301));l+=1,ye=me=null,n.updateQueue=null,Ri.current=Ig,e=t(r,i)}while(Ar)}if(Ri.current=fl,n=me!==null&&me.next!==null,vt=0,ye=me=ue=null,cl=!1,n)throw Error(P(300));return e}function ga(){var e=Jr!==0;return Jr=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ue.memoizedState=ye=e:ye=ye.next=e,ye}function tn(){if(me===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var n=ye===null?ue.memoizedState:ye.next;if(n!==null)ye=n,me=e;else{if(e===null)throw Error(P(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ye===null?ue.memoizedState=ye=e:ye=ye.next=e}return ye}function Kr(e,n){return typeof n=="function"?n(e):n}function uo(e){var n=tn(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=me,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,a=null,s=l;do{var f=s.lane;if((vt&f)===f)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var c={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=c,o=r):a=a.next=c,ue.lanes|=f,St|=f}s=s.next}while(s!==null&&s!==l);a===null?o=r:a.next=u,pn(r,n.memoizedState)||(Ne=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,ue.lanes|=l,St|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ao(e){var n=tn(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);pn(l,n.memoizedState)||(Ne=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function gd(){}function yd(e,n){var t=ue,r=tn(),i=n(),l=!pn(r.memoizedState,i);if(l&&(r.memoizedState=i,Ne=!0),r=r.queue,ya(wd.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||ye!==null&&ye.memoizedState.tag&1){if(t.flags|=2048,Zr(9,xd.bind(null,t,r,i,n),void 0,null),xe===null)throw Error(P(349));vt&30||kd(t,n,i)}return i}function kd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ue.updateQueue,n===null?(n={lastEffect:null,stores:null},ue.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function xd(e,n,t,r){n.value=t,n.getSnapshot=r,vd(n)&&Sd(e)}function wd(e,n,t){return t(function(){vd(n)&&Sd(e)})}function vd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!pn(e,t)}catch{return!0}}function Sd(e){var n=Fn(e,1);n!==null&&dn(n,e,1,-1)}function Ls(e){var n=yn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:e},n.queue=e,e=e.dispatch=Tg.bind(null,ue,e),[n.memoizedState,e]}function Zr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ue.updateQueue,n===null?(n={lastEffect:null,stores:null},ue.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function _d(){return tn().memoizedState}function bi(e,n,t,r){var i=yn();ue.flags|=e,i.memoizedState=Zr(1|n,t,void 0,r===void 0?null:r)}function Tl(e,n,t,r){var i=tn();r=r===void 0?null:r;var l=void 0;if(me!==null){var o=me.memoizedState;if(l=o.destroy,r!==null&&pa(r,o.deps)){i.memoizedState=Zr(n,t,l,r);return}}ue.flags|=e,i.memoizedState=Zr(1|n,t,l,r)}function As(e,n){return bi(8390656,8,e,n)}function ya(e,n){return Tl(2048,8,e,n)}function Cd(e,n){return Tl(4,2,e,n)}function Ed(e,n){return Tl(4,4,e,n)}function Md(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Td(e,n,t){return t=t!=null?t.concat([e]):null,Tl(4,4,Md.bind(null,n,e),t)}function ka(){}function Pd(e,n){var t=tn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&pa(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function zd(e,n){var t=tn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&pa(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Id(e,n,t){return vt&21?(pn(t,n)||(t=Nf(),ue.lanes|=t,St|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=t)}function Eg(e,n){var t=G;G=t!==0&&4>t?t:4,e(!0);var r=oo.transition;oo.transition={};try{e(!1),n()}finally{G=t,oo.transition=r}}function Ld(){return tn().memoizedState}function Mg(e,n,t){var r=et(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ad(e))Dd(n,t);else if(t=hd(e,n,t,r),t!==null){var i=Ie();dn(t,e,r,i),Fd(t,n,r)}}function Tg(e,n,t){var r=et(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ad(e))Dd(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,pn(u,o)){var a=n.interleaved;a===null?(i.next=i,sa(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=hd(e,n,i,r),t!==null&&(i=Ie(),dn(t,e,r,i),Fd(t,n,r))}}function Ad(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Dd(e,n){Ar=cl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Fd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xu(e,t)}}var fl={readContext:nn,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},Pg={readContext:nn,useCallback:function(e,n){return yn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:As,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,bi(4194308,4,Md.bind(null,n,e),t)},useLayoutEffect:function(e,n){return bi(4194308,4,e,n)},useInsertionEffect:function(e,n){return bi(4,2,e,n)},useMemo:function(e,n){var t=yn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=yn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Mg.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var n=yn();return e={current:e},n.memoizedState=e},useState:Ls,useDebugValue:ka,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Ls(!1),n=e[0];return e=Eg.bind(null,e[1]),yn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ue,i=yn();if(le){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),xe===null)throw Error(P(349));vt&30||kd(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,As(wd.bind(null,r,l,e),[e]),r.flags|=2048,Zr(9,xd.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=yn(),n=xe.identifierPrefix;if(le){var t=In,r=zn;t=(r&~(1<<32-fn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Jr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Cg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},zg={readContext:nn,useCallback:Pd,useContext:nn,useEffect:ya,useImperativeHandle:Td,useInsertionEffect:Cd,useLayoutEffect:Ed,useMemo:zd,useReducer:uo,useRef:_d,useState:function(){return uo(Kr)},useDebugValue:ka,useDeferredValue:function(e){var n=tn();return Id(n,me.memoizedState,e)},useTransition:function(){var e=uo(Kr)[0],n=tn().memoizedState;return[e,n]},useMutableSource:gd,useSyncExternalStore:yd,useId:Ld,unstable_isNewReconciler:!1},Ig={readContext:nn,useCallback:Pd,useContext:nn,useEffect:ya,useImperativeHandle:Td,useInsertionEffect:Cd,useLayoutEffect:Ed,useMemo:zd,useReducer:ao,useRef:_d,useState:function(){return ao(Kr)},useDebugValue:ka,useDeferredValue:function(e){var n=tn();return me===null?n.memoizedState=e:Id(n,me.memoizedState,e)},useTransition:function(){var e=ao(Kr)[0],n=tn().memoizedState;return[e,n]},useMutableSource:gd,useSyncExternalStore:yd,useId:Ld,unstable_isNewReconciler:!1};function an(e,n){if(e&&e.defaultProps){n=ae({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function au(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ae({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Pl={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ie(),i=et(e),l=Ln(r,i);l.payload=n,t!=null&&(l.callback=t),n=Kn(e,l,i),n!==null&&(dn(n,e,i,r),Ni(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ie(),i=et(e),l=Ln(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Kn(e,l,i),n!==null&&(dn(n,e,i,r),Ni(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ie(),r=et(e),i=Ln(t,r);i.tag=2,n!=null&&(i.callback=n),n=Kn(e,i,r),n!==null&&(dn(n,e,r,t),Ni(n,e,r))}};function Ds(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Wr(t,r)||!Wr(i,l):!0}function Nd(e,n,t){var r=!1,i=rt,l=n.contextType;return typeof l=="object"&&l!==null?l=nn(l):(i=je(n)?xt:Te.current,r=n.contextTypes,l=(r=r!=null)?Jt(e,i):rt),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Pl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Fs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Pl.enqueueReplaceState(n,n.state,null)}function su(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ca(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=nn(l):(l=je(n)?xt:Te.current,i.context=Jt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(au(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Pl.enqueueReplaceState(i,i.state,null),al(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,n){try{var t="",r=n;do t+=im(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function so(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function cu(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Lg=typeof WeakMap=="function"?WeakMap:Map;function Rd(e,n,t){t=Ln(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){hl||(hl=!0,wu=r),cu(e,n)},t}function bd(e,n,t){t=Ln(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){cu(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){cu(e,n),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Ns(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Lg;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Wg.bind(null,e,n,t),n.then(e,e))}function Rs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function bs(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ln(-1,1),n.tag=2,Kn(t,n,1))),t.lanes|=1),e)}var Ag=Rn.ReactCurrentOwner,Ne=!1;function Pe(e,n,t,r){n.child=e===null?dd(n,null,t,r):Zt(n,e.child,t,r)}function js(e,n,t,r,i){t=t.render;var l=n.ref;return Yt(n,i),r=ma(e,n,t,r,l,i),t=ga(),e!==null&&!Ne?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Nn(e,n,i)):(le&&t&&ra(n),n.flags|=1,Pe(e,n,r,i),n.child)}function $s(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Ma(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,jd(e,n,l,r,i)):(e=Bi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Wr,t(o,r)&&e.ref===n.ref)return Nn(e,n,i)}return n.flags|=1,e=nt(l,r),e.ref=n.ref,e.return=n,n.child=e}function jd(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Wr(l,r)&&e.ref===n.ref)if(Ne=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return n.lanes=e.lanes,Nn(e,n,i)}return fu(e,n,t,r,i)}function $d(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Ut,He),He|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ne(Ut,He),He|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,ne(Ut,He),He|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,ne(Ut,He),He|=r;return Pe(e,n,i,t),n.child}function Od(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function fu(e,n,t,r,i){var l=je(t)?xt:Te.current;return l=Jt(n,l),Yt(n,i),t=ma(e,n,t,r,l,i),r=ga(),e!==null&&!Ne?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Nn(e,n,i)):(le&&r&&ra(n),n.flags|=1,Pe(e,n,t,i),n.child)}function Os(e,n,t,r,i){if(je(t)){var l=!0;rl(n)}else l=!1;if(Yt(n,i),n.stateNode===null)ji(e,n),Nd(n,t,r),su(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var a=o.context,s=t.contextType;typeof s=="object"&&s!==null?s=nn(s):(s=je(t)?xt:Te.current,s=Jt(n,s));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==s)&&Fs(n,o,r,s),Un=!1;var d=n.memoizedState;o.state=d,al(n,r,o,i),a=n.memoizedState,u!==r||d!==a||be.current||Un?(typeof f=="function"&&(au(n,t,f,r),a=n.memoizedState),(u=Un||Ds(n,t,u,r,d,a,s))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=s,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,pd(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:an(n.type,u),o.props=s,c=n.pendingProps,d=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=nn(a):(a=je(t)?xt:Te.current,a=Jt(n,a));var h=t.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==c||d!==a)&&Fs(n,o,r,a),Un=!1,d=n.memoizedState,o.state=d,al(n,r,o,i);var y=n.memoizedState;u!==c||d!==y||be.current||Un?(typeof h=="function"&&(au(n,t,h,r),y=n.memoizedState),(s=Un||Ds(n,t,s,r,d,y,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=a,r=s):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),r=!1)}return du(e,n,t,r,l,i)}function du(e,n,t,r,i,l){Od(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Es(n,t,!1),Nn(e,n,l);r=n.stateNode,Ag.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Zt(n,e.child,null,l),n.child=Zt(n,null,u,l)):Pe(e,n,u,l),n.memoizedState=r.state,i&&Es(n,t,!0),n.child}function Bd(e){var n=e.stateNode;n.pendingContext?Cs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Cs(e,n.context,!1),fa(e,n.containerInfo)}function Bs(e,n,t,r,i){return Kt(),la(i),n.flags|=256,Pe(e,n,t,r),n.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function pu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hd(e,n,t){var r=n.pendingProps,i=oe.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(oe,i&1),e===null)return ou(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ll(o,r,0,null),e=kt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=pu(t),n.memoizedState=hu,e):xa(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Dg(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=nt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=nt(u,l):(l=kt(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?pu(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=hu,r}return l=e.child,e=l.sibling,r=nt(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function xa(e,n){return n=Ll({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Si(e,n,t,r){return r!==null&&la(r),Zt(n,e.child,null,t),e=xa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Dg(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=so(Error(P(422))),Si(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ll({mode:"visible",children:r.children},i,0,null),l=kt(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Zt(n,e.child,null,o),n.child.memoizedState=pu(o),n.memoizedState=hu,l);if(!(n.mode&1))return Si(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(P(419)),r=so(l,r,void 0),Si(e,n,o,r)}if(u=(o&e.childLanes)!==0,Ne||u){if(r=xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Fn(e,i),dn(r,e,i,-1))}return Ea(),r=so(Error(P(421))),Si(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Qg.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,Ue=Jn(i.nextSibling),Ve=n,le=!0,cn=null,e!==null&&(Xe[Ge++]=zn,Xe[Ge++]=In,Xe[Ge++]=wt,zn=e.id,In=e.overflow,wt=n),n=xa(n,r.children),n.flags|=4096,n)}function Hs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),uu(e.return,n,t)}function co(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Ud(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(Pe(e,n,r.children,t),r=oe.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hs(e,t,n);else if(e.tag===19)Hs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(oe,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&sl(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),co(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&sl(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}co(n,!0,t,null,l);break;case"together":co(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ji(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Nn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),St|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=nt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=nt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Fg(e,n,t){switch(n.tag){case 3:Bd(n),Kt();break;case 5:md(n);break;case 1:je(n.type)&&rl(n);break;case 4:fa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ne(ol,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ne(oe,oe.current&1),n.flags|=128,null):t&n.child.childLanes?Hd(e,n,t):(ne(oe,oe.current&1),e=Nn(e,n,t),e!==null?e.sibling:null);ne(oe,oe.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ud(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(oe,oe.current),r)break;return null;case 22:case 23:return n.lanes=0,$d(e,n,t)}return Nn(e,n,t)}var Vd,mu,Wd,Qd;Vd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};mu=function(){};Wd=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,gt(vn.current);var l=null;switch(t){case"input":i=bo(e,i),r=bo(e,r),l=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),l=[];break;case"textarea":i=Oo(e,i),r=Oo(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=nl)}Ho(t,r);var o;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jr.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(jr.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&re("scroll",e),l||u===a||(l=[])):(l=l||[]).push(s,a))}t&&(l=l||[]).push("style",t);var s=l;(n.updateQueue=s)&&(n.flags|=4)}};Qd=function(e,n,t,r){t!==r&&(n.flags|=4)};function gr(e,n){if(!le)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Ng(e,n,t){var r=n.pendingProps;switch(ia(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(n),null;case 1:return je(n.type)&&tl(),Ee(n),null;case 3:return r=n.stateNode,er(),ie(be),ie(Te),ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,cn!==null&&(_u(cn),cn=null))),mu(e,n),Ee(n),null;case 5:da(n);var i=gt(Gr.current);if(t=n.type,e!==null&&n.stateNode!=null)Wd(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(P(166));return Ee(n),null}if(e=gt(vn.current),wi(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[xn]=n,r[Yr]=l,e=(n.mode&1)!==0,t){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Cr.length;i++)re(Cr[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Ja(r,l),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},re("invalid",r);break;case"textarea":Za(r,l),re("invalid",r)}Ho(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&xi(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&xi(r.textContent,u,e),i=["children",""+u]):jr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&re("scroll",r)}switch(t){case"input":fi(r),Ka(r,l,!0);break;case"textarea":fi(r),es(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=nl)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wf(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[xn]=n,e[Yr]=r,Vd(e,n,!1,!1),n.stateNode=e;e:{switch(o=Uo(t,r),t){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<Cr.length;i++)re(Cr[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":Ja(e,r),i=bo(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),re("invalid",e);break;case"textarea":Za(e,r),i=Oo(e,r),re("invalid",e);break;default:i=r}Ho(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?_f(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&vf(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&$r(e,a):typeof a=="number"&&$r(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(jr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&re("scroll",e):a!=null&&Uu(e,l,a,o))}switch(t){case"input":fi(e),Ka(e,r,!1);break;case"textarea":fi(e),es(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Vt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Vt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=nl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ee(n),null;case 6:if(e&&n.stateNode!=null)Qd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(P(166));if(t=gt(Gr.current),gt(vn.current),wi(n)){if(r=n.stateNode,t=n.memoizedProps,r[xn]=n,(l=r.nodeValue!==t)&&(e=Ve,e!==null))switch(e.tag){case 3:xi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xi(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[xn]=n,n.stateNode=r}return Ee(n),null;case 13:if(ie(oe),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Ue!==null&&n.mode&1&&!(n.flags&128))cd(),Kt(),n.flags|=98560,l=!1;else if(l=wi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[xn]=n}else Kt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ee(n),l=!1}else cn!==null&&(_u(cn),cn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||oe.current&1?ge===0&&(ge=3):Ea())),n.updateQueue!==null&&(n.flags|=4),Ee(n),null);case 4:return er(),mu(e,n),e===null&&Qr(n.stateNode.containerInfo),Ee(n),null;case 10:return aa(n.type._context),Ee(n),null;case 17:return je(n.type)&&tl(),Ee(n),null;case 19:if(ie(oe),l=n.memoizedState,l===null)return Ee(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)gr(l,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=sl(e),o!==null){for(n.flags|=128,gr(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ne(oe,oe.current&1|2),n.child}e=e.sibling}l.tail!==null&&fe()>tr&&(n.flags|=128,r=!0,gr(l,!1),n.lanes=4194304)}else{if(!r)if(e=sl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),gr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!le)return Ee(n),null}else 2*fe()-l.renderingStartTime>tr&&t!==1073741824&&(n.flags|=128,r=!0,gr(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=fe(),n.sibling=null,t=oe.current,ne(oe,r?t&1|2:t&1),n):(Ee(n),null);case 22:case 23:return Ca(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?He&1073741824&&(Ee(n),n.subtreeFlags&6&&(n.flags|=8192)):Ee(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function Rg(e,n){switch(ia(n),n.tag){case 1:return je(n.type)&&tl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return er(),ie(be),ie(Te),ha(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return da(n),null;case 13:if(ie(oe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));Kt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ie(oe),null;case 4:return er(),null;case 10:return aa(n.type._context),null;case 22:case 23:return Ca(),null;case 24:return null;default:return null}}var _i=!1,Me=!1,bg=typeof WeakSet=="function"?WeakSet:Set,F=null;function Ht(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){se(e,n,r)}else t.current=null}function gu(e,n,t){try{t()}catch(r){se(e,n,r)}}var Us=!1;function jg(e,n){if(Zo=Ki,e=Jf(),ta(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,a=-1,s=0,f=0,c=e,d=null;n:for(;;){for(var h;c!==t||i!==0&&c.nodeType!==3||(u=o+i),c!==l||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(h=c.firstChild)!==null;)d=c,c=h;for(;;){if(c===e)break n;if(d===t&&++s===i&&(u=o),d===l&&++f===r&&(a=o),(h=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=h}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(eu={focusedElem:e,selectionRange:t},Ki=!1,F=n;F!==null;)if(n=F,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,F=e;else for(;F!==null;){n=F;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,T=y.memoizedState,p=n.stateNode,m=p.getSnapshotBeforeUpdate(n.elementType===n.type?S:an(n.type,S),T);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(_){se(n,n.return,_)}if(e=n.sibling,e!==null){e.return=n.return,F=e;break}F=n.return}return y=Us,Us=!1,y}function Dr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&gu(n,t,l)}i=i.next}while(i!==r)}}function zl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function yu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function qd(e){var n=e.alternate;n!==null&&(e.alternate=null,qd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[xn],delete n[Yr],delete n[ru],delete n[wg],delete n[vg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yd(e){return e.tag===5||e.tag===3||e.tag===4}function Vs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ku(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=nl));else if(r!==4&&(e=e.child,e!==null))for(ku(e,n,t),e=e.sibling;e!==null;)ku(e,n,t),e=e.sibling}function xu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xu(e,n,t),e=e.sibling;e!==null;)xu(e,n,t),e=e.sibling}var ve=null,sn=!1;function $n(e,n,t){for(t=t.child;t!==null;)Xd(e,n,t),t=t.sibling}function Xd(e,n,t){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(vl,t)}catch{}switch(t.tag){case 5:Me||Ht(t,n);case 6:var r=ve,i=sn;ve=null,$n(e,n,t),ve=r,sn=i,ve!==null&&(sn?(e=ve,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ve.removeChild(t.stateNode));break;case 18:ve!==null&&(sn?(e=ve,t=t.stateNode,e.nodeType===8?ro(e.parentNode,t):e.nodeType===1&&ro(e,t),Ur(e)):ro(ve,t.stateNode));break;case 4:r=ve,i=sn,ve=t.stateNode.containerInfo,sn=!0,$n(e,n,t),ve=r,sn=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&gu(t,n,o),i=i.next}while(i!==r)}$n(e,n,t);break;case 1:if(!Me&&(Ht(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){se(t,n,u)}$n(e,n,t);break;case 21:$n(e,n,t);break;case 22:t.mode&1?(Me=(r=Me)||t.memoizedState!==null,$n(e,n,t),Me=r):$n(e,n,t);break;default:$n(e,n,t)}}function Ws(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new bg),n.forEach(function(r){var i=qg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function on(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:ve=u.stateNode,sn=!1;break e;case 3:ve=u.stateNode.containerInfo,sn=!0;break e;case 4:ve=u.stateNode.containerInfo,sn=!0;break e}u=u.return}if(ve===null)throw Error(P(160));Xd(l,o,i),ve=null,sn=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){se(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gd(n,e),n=n.sibling}function Gd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(n,e),gn(e),r&4){try{Dr(3,e,e.return),zl(3,e)}catch(S){se(e,e.return,S)}try{Dr(5,e,e.return)}catch(S){se(e,e.return,S)}}break;case 1:on(n,e),gn(e),r&512&&t!==null&&Ht(t,t.return);break;case 5:if(on(n,e),gn(e),r&512&&t!==null&&Ht(t,t.return),e.flags&32){var i=e.stateNode;try{$r(i,"")}catch(S){se(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&kf(i,l),Uo(u,o);var s=Uo(u,l);for(o=0;o<a.length;o+=2){var f=a[o],c=a[o+1];f==="style"?_f(i,c):f==="dangerouslySetInnerHTML"?vf(i,c):f==="children"?$r(i,c):Uu(i,f,c,s)}switch(u){case"input":jo(i,l);break;case"textarea":xf(i,l);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var h=l.value;h!=null?Vt(i,!!l.multiple,h,!1):d!==!!l.multiple&&(l.defaultValue!=null?Vt(i,!!l.multiple,l.defaultValue,!0):Vt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Yr]=l}catch(S){se(e,e.return,S)}}break;case 6:if(on(n,e),gn(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(S){se(e,e.return,S)}}break;case 3:if(on(n,e),gn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ur(n.containerInfo)}catch(S){se(e,e.return,S)}break;case 4:on(n,e),gn(e);break;case 13:on(n,e),gn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Sa=fe())),r&4&&Ws(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(Me=(s=Me)||f,on(n,e),Me=s):on(n,e),gn(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!f&&e.mode&1)for(F=e,f=e.child;f!==null;){for(c=F=f;F!==null;){switch(d=F,h=d.child,d.tag){case 0:case 11:case 14:case 15:Dr(4,d,d.return);break;case 1:Ht(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,t=d.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(S){se(r,t,S)}}break;case 5:Ht(d,d.return);break;case 22:if(d.memoizedState!==null){qs(c);continue}}h!==null?(h.return=d,F=h):qs(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,s?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Sf("display",o))}catch(S){se(e,e.return,S)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(S){se(e,e.return,S)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:on(n,e),gn(e),r&4&&Ws(e);break;case 21:break;default:on(n,e),gn(e)}}function gn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Yd(t)){var r=t;break e}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($r(i,""),r.flags&=-33);var l=Vs(e);xu(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Vs(e);ku(e,u,o);break;default:throw Error(P(161))}}catch(a){se(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function $g(e,n,t){F=e,Jd(e)}function Jd(e,n,t){for(var r=(e.mode&1)!==0;F!==null;){var i=F,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_i;if(!o){var u=i.alternate,a=u!==null&&u.memoizedState!==null||Me;u=_i;var s=Me;if(_i=o,(Me=a)&&!s)for(F=i;F!==null;)o=F,a=o.child,o.tag===22&&o.memoizedState!==null?Ys(i):a!==null?(a.return=o,F=a):Ys(i);for(;l!==null;)F=l,Jd(l),l=l.sibling;F=i,_i=u,Me=s}Qs(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,F=l):Qs(e)}}function Qs(e){for(;F!==null;){var n=F;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Me||zl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Me)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:an(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Is(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Is(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Ur(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Me||n.flags&512&&yu(n)}catch(d){se(n,n.return,d)}}if(n===e){F=null;break}if(t=n.sibling,t!==null){t.return=n.return,F=t;break}F=n.return}}function qs(e){for(;F!==null;){var n=F;if(n===e){F=null;break}var t=n.sibling;if(t!==null){t.return=n.return,F=t;break}F=n.return}}function Ys(e){for(;F!==null;){var n=F;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{zl(4,n)}catch(a){se(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){se(n,i,a)}}var l=n.return;try{yu(n)}catch(a){se(n,l,a)}break;case 5:var o=n.return;try{yu(n)}catch(a){se(n,o,a)}}}catch(a){se(n,n.return,a)}if(n===e){F=null;break}var u=n.sibling;if(u!==null){u.return=n.return,F=u;break}F=n.return}}var Og=Math.ceil,dl=Rn.ReactCurrentDispatcher,wa=Rn.ReactCurrentOwner,en=Rn.ReactCurrentBatchConfig,X=0,xe=null,he=null,Se=0,He=0,Ut=ot(0),ge=0,ei=null,St=0,Il=0,va=0,Fr=null,Fe=null,Sa=0,tr=1/0,Tn=null,hl=!1,wu=null,Zn=null,Ci=!1,qn=null,pl=0,Nr=0,vu=null,$i=-1,Oi=0;function Ie(){return X&6?fe():$i!==-1?$i:$i=fe()}function et(e){return e.mode&1?X&2&&Se!==0?Se&-Se:_g.transition!==null?(Oi===0&&(Oi=Nf()),Oi):(e=G,e!==0||(e=window.event,e=e===void 0?16:Hf(e.type)),e):1}function dn(e,n,t,r){if(50<Nr)throw Nr=0,vu=null,Error(P(185));ti(e,t,r),(!(X&2)||e!==xe)&&(e===xe&&(!(X&2)&&(Il|=t),ge===4&&Wn(e,Se)),$e(e,r),t===1&&X===0&&!(n.mode&1)&&(tr=fe()+500,Ml&&ut()))}function $e(e,n){var t=e.callbackNode;_m(e,n);var r=Ji(e,e===xe?Se:0);if(r===0)t!==null&&rs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&rs(t),n===1)e.tag===0?Sg(Xs.bind(null,e)):ud(Xs.bind(null,e)),kg(function(){!(X&6)&&ut()}),t=null;else{switch(Rf(r)){case 1:t=Yu;break;case 4:t=Df;break;case 16:t=Gi;break;case 536870912:t=Ff;break;default:t=Gi}t=lh(t,Kd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Kd(e,n){if($i=-1,Oi=0,X&6)throw Error(P(327));var t=e.callbackNode;if(Xt()&&e.callbackNode!==t)return null;var r=Ji(e,e===xe?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ml(e,r);else{n=r;var i=X;X|=2;var l=eh();(xe!==e||Se!==n)&&(Tn=null,tr=fe()+500,yt(e,n));do try{Ug();break}catch(u){Zd(e,u)}while(!0);ua(),dl.current=l,X=i,he!==null?n=0:(xe=null,Se=0,n=ge)}if(n!==0){if(n===2&&(i=Yo(e),i!==0&&(r=i,n=Su(e,i))),n===1)throw t=ei,yt(e,0),Wn(e,r),$e(e,fe()),t;if(n===6)Wn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Bg(i)&&(n=ml(e,r),n===2&&(l=Yo(e),l!==0&&(r=l,n=Su(e,l))),n===1))throw t=ei,yt(e,0),Wn(e,r),$e(e,fe()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(P(345));case 2:ht(e,Fe,Tn);break;case 3:if(Wn(e,r),(r&130023424)===r&&(n=Sa+500-fe(),10<n)){if(Ji(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=tu(ht.bind(null,e,Fe,Tn),n);break}ht(e,Fe,Tn);break;case 4:if(Wn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-fn(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Og(r/1960))-r,10<r){e.timeoutHandle=tu(ht.bind(null,e,Fe,Tn),r);break}ht(e,Fe,Tn);break;case 5:ht(e,Fe,Tn);break;default:throw Error(P(329))}}}return $e(e,fe()),e.callbackNode===t?Kd.bind(null,e):null}function Su(e,n){var t=Fr;return e.current.memoizedState.isDehydrated&&(yt(e,n).flags|=256),e=ml(e,n),e!==2&&(n=Fe,Fe=t,n!==null&&_u(n)),e}function _u(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Bg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!pn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wn(e,n){for(n&=~va,n&=~Il,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-fn(n),r=1<<t;e[t]=-1,n&=~r}}function Xs(e){if(X&6)throw Error(P(327));Xt();var n=Ji(e,0);if(!(n&1))return $e(e,fe()),null;var t=ml(e,n);if(e.tag!==0&&t===2){var r=Yo(e);r!==0&&(n=r,t=Su(e,r))}if(t===1)throw t=ei,yt(e,0),Wn(e,n),$e(e,fe()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ht(e,Fe,Tn),$e(e,fe()),null}function _a(e,n){var t=X;X|=1;try{return e(n)}finally{X=t,X===0&&(tr=fe()+500,Ml&&ut())}}function _t(e){qn!==null&&qn.tag===0&&!(X&6)&&Xt();var n=X;X|=1;var t=en.transition,r=G;try{if(en.transition=null,G=1,e)return e()}finally{G=r,en.transition=t,X=n,!(X&6)&&ut()}}function Ca(){He=Ut.current,ie(Ut)}function yt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,yg(t)),he!==null)for(t=he.return;t!==null;){var r=t;switch(ia(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tl();break;case 3:er(),ie(be),ie(Te),ha();break;case 5:da(r);break;case 4:er();break;case 13:ie(oe);break;case 19:ie(oe);break;case 10:aa(r.type._context);break;case 22:case 23:Ca()}t=t.return}if(xe=e,he=e=nt(e.current,null),Se=He=n,ge=0,ei=null,va=Il=St=0,Fe=Fr=null,mt!==null){for(n=0;n<mt.length;n++)if(t=mt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}mt=null}return e}function Zd(e,n){do{var t=he;try{if(ua(),Ri.current=fl,cl){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cl=!1}if(vt=0,ye=me=ue=null,Ar=!1,Jr=0,wa.current=null,t===null||t.return===null){ge=1,ei=n,he=null;break}e:{var l=e,o=t.return,u=t,a=n;if(n=Se,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,f=u,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=Rs(o);if(h!==null){h.flags&=-257,bs(h,o,u,l,n),h.mode&1&&Ns(l,s,n),n=h,a=s;var y=n.updateQueue;if(y===null){var S=new Set;S.add(a),n.updateQueue=S}else y.add(a);break e}else{if(!(n&1)){Ns(l,s,n),Ea();break e}a=Error(P(426))}}else if(le&&u.mode&1){var T=Rs(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),bs(T,o,u,l,n),la(nr(a,u));break e}}l=a=nr(a,u),ge!==4&&(ge=2),Fr===null?Fr=[l]:Fr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var p=Rd(l,a,n);zs(l,p);break e;case 1:u=a;var m=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Zn===null||!Zn.has(g)))){l.flags|=65536,n&=-n,l.lanes|=n;var _=bd(l,u,n);zs(l,_);break e}}l=l.return}while(l!==null)}th(t)}catch(E){n=E,he===t&&t!==null&&(he=t=t.return);continue}break}while(!0)}function eh(){var e=dl.current;return dl.current=fl,e===null?fl:e}function Ea(){(ge===0||ge===3||ge===2)&&(ge=4),xe===null||!(St&268435455)&&!(Il&268435455)||Wn(xe,Se)}function ml(e,n){var t=X;X|=2;var r=eh();(xe!==e||Se!==n)&&(Tn=null,yt(e,n));do try{Hg();break}catch(i){Zd(e,i)}while(!0);if(ua(),X=t,dl.current=r,he!==null)throw Error(P(261));return xe=null,Se=0,ge}function Hg(){for(;he!==null;)nh(he)}function Ug(){for(;he!==null&&!pm();)nh(he)}function nh(e){var n=ih(e.alternate,e,He);e.memoizedProps=e.pendingProps,n===null?th(e):he=n,wa.current=null}function th(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Rg(t,n),t!==null){t.flags&=32767,he=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,he=null;return}}else if(t=Ng(t,n,He),t!==null){he=t;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);ge===0&&(ge=5)}function ht(e,n,t){var r=G,i=en.transition;try{en.transition=null,G=1,Vg(e,n,t,r)}finally{en.transition=i,G=r}return null}function Vg(e,n,t,r){do Xt();while(qn!==null);if(X&6)throw Error(P(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Cm(e,l),e===xe&&(he=xe=null,Se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ci||(Ci=!0,lh(Gi,function(){return Xt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=en.transition,en.transition=null;var o=G;G=1;var u=X;X|=4,wa.current=null,jg(e,t),Gd(t,e),cg(eu),Ki=!!Zo,eu=Zo=null,e.current=t,$g(t),mm(),X=u,G=o,en.transition=l}else e.current=t;if(Ci&&(Ci=!1,qn=e,pl=i),l=e.pendingLanes,l===0&&(Zn=null),km(t.stateNode),$e(e,fe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(hl)throw hl=!1,e=wu,wu=null,e;return pl&1&&e.tag!==0&&Xt(),l=e.pendingLanes,l&1?e===vu?Nr++:(Nr=0,vu=e):Nr=0,ut(),null}function Xt(){if(qn!==null){var e=Rf(pl),n=en.transition,t=G;try{if(en.transition=null,G=16>e?16:e,qn===null)var r=!1;else{if(e=qn,qn=null,pl=0,X&6)throw Error(P(331));var i=X;for(X|=4,F=e.current;F!==null;){var l=F,o=l.child;if(F.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(F=s;F!==null;){var f=F;switch(f.tag){case 0:case 11:case 15:Dr(8,f,l)}var c=f.child;if(c!==null)c.return=f,F=c;else for(;F!==null;){f=F;var d=f.sibling,h=f.return;if(qd(f),f===s){F=null;break}if(d!==null){d.return=h,F=d;break}F=h}}}var y=l.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var T=S.sibling;S.sibling=null,S=T}while(S!==null)}}F=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,F=o;else e:for(;F!==null;){if(l=F,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Dr(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,F=p;break e}F=l.return}}var m=e.current;for(F=m;F!==null;){o=F;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,F=g;else e:for(o=m;F!==null;){if(u=F,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:zl(9,u)}}catch(E){se(u,u.return,E)}if(u===o){F=null;break e}var _=u.sibling;if(_!==null){_.return=u.return,F=_;break e}F=u.return}}if(X=i,ut(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(vl,e)}catch{}r=!0}return r}finally{G=t,en.transition=n}}return!1}function Gs(e,n,t){n=nr(t,n),n=Rd(e,n,1),e=Kn(e,n,1),n=Ie(),e!==null&&(ti(e,1,n),$e(e,n))}function se(e,n,t){if(e.tag===3)Gs(e,e,t);else for(;n!==null;){if(n.tag===3){Gs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){e=nr(t,e),e=bd(n,e,1),n=Kn(n,e,1),e=Ie(),n!==null&&(ti(n,1,e),$e(n,e));break}}n=n.return}}function Wg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ie(),e.pingedLanes|=e.suspendedLanes&t,xe===e&&(Se&t)===t&&(ge===4||ge===3&&(Se&130023424)===Se&&500>fe()-Sa?yt(e,0):va|=t),$e(e,n)}function rh(e,n){n===0&&(e.mode&1?(n=pi,pi<<=1,!(pi&130023424)&&(pi=4194304)):n=1);var t=Ie();e=Fn(e,n),e!==null&&(ti(e,n,t),$e(e,t))}function Qg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),rh(e,t)}function qg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(n),rh(e,t)}var ih;ih=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||be.current)Ne=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ne=!1,Fg(e,n,t);Ne=!!(e.flags&131072)}else Ne=!1,le&&n.flags&1048576&&ad(n,ll,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ji(e,n),e=n.pendingProps;var i=Jt(n,Te.current);Yt(n,t),i=ma(null,n,r,e,i,t);var l=ga();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,je(r)?(l=!0,rl(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ca(n),i.updater=Pl,n.stateNode=i,i._reactInternals=n,su(n,r,e,t),n=du(null,n,r,!0,l,t)):(n.tag=0,le&&l&&ra(n),Pe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ji(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Xg(r),e=an(r,e),i){case 0:n=fu(null,n,r,e,t);break e;case 1:n=Os(null,n,r,e,t);break e;case 11:n=js(null,n,r,e,t);break e;case 14:n=$s(null,n,r,an(r.type,e),t);break e}throw Error(P(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:an(r,i),fu(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:an(r,i),Os(e,n,r,i,t);case 3:e:{if(Bd(n),e===null)throw Error(P(387));r=n.pendingProps,l=n.memoizedState,i=l.element,pd(e,n),al(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=nr(Error(P(423)),n),n=Bs(e,n,r,t,i);break e}else if(r!==i){i=nr(Error(P(424)),n),n=Bs(e,n,r,t,i);break e}else for(Ue=Jn(n.stateNode.containerInfo.firstChild),Ve=n,le=!0,cn=null,t=dd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Kt(),r===i){n=Nn(e,n,t);break e}Pe(e,n,r,t)}n=n.child}return n;case 5:return md(n),e===null&&ou(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,nu(r,i)?o=null:l!==null&&nu(r,l)&&(n.flags|=32),Od(e,n),Pe(e,n,o,t),n.child;case 6:return e===null&&ou(n),null;case 13:return Hd(e,n,t);case 4:return fa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Zt(n,null,r,t):Pe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:an(r,i),js(e,n,r,i,t);case 7:return Pe(e,n,n.pendingProps,t),n.child;case 8:return Pe(e,n,n.pendingProps.children,t),n.child;case 12:return Pe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,ne(ol,r._currentValue),r._currentValue=o,l!==null)if(pn(l.value,o)){if(l.children===i.children&&!be.current){n=Nn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Ln(-1,t&-t),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?a.next=a:(a.next=f.next,f.next=a),s.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),uu(l.return,t,n),u.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(P(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),uu(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Pe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Yt(n,t),i=nn(i),r=r(i),n.flags|=1,Pe(e,n,r,t),n.child;case 14:return r=n.type,i=an(r,n.pendingProps),i=an(r.type,i),$s(e,n,r,i,t);case 15:return jd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:an(r,i),ji(e,n),n.tag=1,je(r)?(e=!0,rl(n)):e=!1,Yt(n,t),Nd(n,r,i),su(n,r,i,t),du(null,n,r,!0,e,t);case 19:return Ud(e,n,t);case 22:return $d(e,n,t)}throw Error(P(156,n.tag))};function lh(e,n){return Af(e,n)}function Yg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,n,t,r){return new Yg(e,n,t,r)}function Ma(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xg(e){if(typeof e=="function")return Ma(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wu)return 11;if(e===Qu)return 14}return 2}function nt(e,n){var t=e.alternate;return t===null?(t=Ke(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Bi(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Ma(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dt:return kt(t.children,i,l,n);case Vu:o=8,i|=8;break;case Do:return e=Ke(12,t,n,i|2),e.elementType=Do,e.lanes=l,e;case Fo:return e=Ke(13,t,n,i),e.elementType=Fo,e.lanes=l,e;case No:return e=Ke(19,t,n,i),e.elementType=No,e.lanes=l,e;case mf:return Ll(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hf:o=10;break e;case pf:o=9;break e;case Wu:o=11;break e;case Qu:o=14;break e;case Hn:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=Ke(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function kt(e,n,t,r){return e=Ke(7,e,r,n),e.lanes=t,e}function Ll(e,n,t,r){return e=Ke(22,e,r,n),e.elementType=mf,e.lanes=t,e.stateNode={isHidden:!1},e}function fo(e,n,t){return e=Ke(6,e,null,n),e.lanes=t,e}function ho(e,n,t){return n=Ke(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Gg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ta(e,n,t,r,i,l,o,u,a){return e=new Gg(e,n,t,u,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ke(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ca(l),e}function Jg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function oh(e){if(!e)return rt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(je(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(je(t))return od(e,t,n)}return n}function uh(e,n,t,r,i,l,o,u,a){return e=Ta(t,r,!0,e,i,l,o,u,a),e.context=oh(null),t=e.current,r=Ie(),i=et(t),l=Ln(r,i),l.callback=n??null,Kn(t,l,i),e.current.lanes=i,ti(e,i,r),$e(e,r),e}function Al(e,n,t,r){var i=n.current,l=Ie(),o=et(i);return t=oh(t),n.context===null?n.context=t:n.pendingContext=t,n=Ln(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Kn(i,n,o),e!==null&&(dn(e,i,o,l),Ni(e,i,o)),o}function gl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Js(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Pa(e,n){Js(e,n),(e=e.alternate)&&Js(e,n)}function Kg(){return null}var ah=typeof reportError=="function"?reportError:function(e){console.error(e)};function za(e){this._internalRoot=e}Dl.prototype.render=za.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));Al(e,n,null,null)};Dl.prototype.unmount=za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_t(function(){Al(null,e,null,null)}),n[Dn]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var n=$f();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Vn.length&&n!==0&&n<Vn[t].priority;t++);Vn.splice(t,0,e),t===0&&Bf(e)}};function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ks(){}function Zg(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var s=gl(o);l.call(s)}}var o=uh(n,r,e,0,null,!1,!1,"",Ks);return e._reactRootContainer=o,e[Dn]=o.current,Qr(e.nodeType===8?e.parentNode:e),_t(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=gl(a);u.call(s)}}var a=Ta(e,0,!1,null,null,!1,!1,"",Ks);return e._reactRootContainer=a,e[Dn]=a.current,Qr(e.nodeType===8?e.parentNode:e),_t(function(){Al(n,a,t,r)}),a}function Nl(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var a=gl(o);u.call(a)}}Al(n,o,e,i)}else o=Zg(t,n,e,i,r);return gl(o)}bf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=_r(n.pendingLanes);t!==0&&(Xu(n,t|1),$e(n,fe()),!(X&6)&&(tr=fe()+500,ut()))}break;case 13:_t(function(){var r=Fn(e,1);if(r!==null){var i=Ie();dn(r,e,1,i)}}),Pa(e,1)}};Gu=function(e){if(e.tag===13){var n=Fn(e,134217728);if(n!==null){var t=Ie();dn(n,e,134217728,t)}Pa(e,134217728)}};jf=function(e){if(e.tag===13){var n=et(e),t=Fn(e,n);if(t!==null){var r=Ie();dn(t,e,n,r)}Pa(e,n)}};$f=function(){return G};Of=function(e,n){var t=G;try{return G=e,n()}finally{G=t}};Wo=function(e,n,t){switch(n){case"input":if(jo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=El(r);if(!i)throw Error(P(90));yf(r),jo(r,i)}}}break;case"textarea":xf(e,t);break;case"select":n=t.value,n!=null&&Vt(e,!!t.multiple,n,!1)}};Mf=_a;Tf=_t;var e1={usingClientEntryPoint:!1,Events:[ii,bt,El,Cf,Ef,_a]},yr={findFiberByHostInstance:pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n1={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=If(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ei.isDisabled&&Ei.supportsFiber)try{vl=Ei.inject(n1),wn=Ei}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1;qe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ia(n))throw Error(P(200));return Jg(e,n,null,t)};qe.createRoot=function(e,n){if(!Ia(e))throw Error(P(299));var t=!1,r="",i=ah;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ta(e,1,!1,null,null,t,!1,r,i),e[Dn]=n.current,Qr(e.nodeType===8?e.parentNode:e),new za(n)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=If(n),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return _t(e)};qe.hydrate=function(e,n,t){if(!Fl(n))throw Error(P(200));return Nl(null,e,n,!0,t)};qe.hydrateRoot=function(e,n,t){if(!Ia(e))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=ah;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=uh(n,null,e,1,t??null,i,!1,l,o),e[Dn]=n.current,Qr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Dl(n)};qe.render=function(e,n,t){if(!Fl(n))throw Error(P(200));return Nl(null,e,n,!1,t)};qe.unmountComponentAtNode=function(e){if(!Fl(e))throw Error(P(40));return e._reactRootContainer?(_t(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[Dn]=null})}),!0):!1};qe.unstable_batchedUpdates=_a;qe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Fl(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Nl(e,n,t,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function sh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sh)}catch(e){console.error(e)}}sh(),sf.exports=qe;var t1=sf.exports,Zs=t1;Lo.createRoot=Zs.createRoot,Lo.hydrateRoot=Zs.hydrateRoot;const r1=`# 标题

这是第一版内容。

- 列表项1
- 列表项2

\`\`\`ts
const a = 1;
\`\`\`

$$a=1$$`,i1=`# 标题

这是第二版内容，增加了内容。

- 列表项1
- 列表项3

\`\`\`js
const a = 2;
\`\`\``,l1=`# 一级标题

## 二级标题

### 三级标题

#### 四级标题

这是一些普通文本内容。

##### 五级标题

###### 六级标题`,o1=`# 修改后的一级标题

## 二级标题已更新

### 三级标题

这是一些普通文本内容，增加了一些新内容。

#### 新增的四级标题

##### 五级标题

###### 六级标题已修改`,u1=`# 列表示例

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
- [ ] 待办任务 3`,a1=`# 列表示例（更新版）

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
- [ ] 待办任务 3`,s1=`# 代码示例

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
\`\`\``,c1=`# 代码示例（更新版）

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
\`\`\``,f1=`# 表格示例

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
| 利润 | 2,000 | 3,000 | 5,000 | 6,000 | 16,000 |`,d1=`# 表格示例（更新版）

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
| 税费 | 600 | 1,000 | 1,200 | 1,600 | 4,400 | - |`,h1=`# 链接和图片示例

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

这段文字包含一个[链接](https://example.com)和一个![内联图片](https://example.com/inline-image.jpg)。`,p1=`# 链接和图片示例（更新版）

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

新增的段落，包含一个[新链接](https://example.com/new)。`,m1=`# 文本格式化示例

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

这段文字**包含*混合的*格式**，还有~~一些~~\`代码\`。`,g1=`# 文本格式化示例（更新版）

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

这里有一些==高亮文本==。`,y1=`# 复杂 Markdown 文档示例

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

这个文档展示了多种 Markdown 元素的使用方式，可以用于测试差异比较功能。`,k1=`# 复杂 Markdown 文档示例（更新版）

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

## `,x1=`# 极端长文本测试

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

这个文档包含了各种极端长的内容元素，用于测试 Markdown 差异比较工具处理大量文本的能力。`,w1=`# 极端长文本测试（更新版）

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

这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。`,v1=`# 嵌套结构测试

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

这个文档包含了各种深度嵌套的结构，用于测试 Markdown 差异比较工具处理复杂嵌套内容的能力。`,S1=`# 嵌套结构测试（更新版）

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
>     \`\`\``,_1=`# 特殊字符测试

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

这个文档包含了各种特殊字符和符号，用于测试 Markdown 差异比较工具处理特殊字符的能力。`,C1=`# 特殊字符测试（更新版）

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

नमस्ते दुनिया! यह संस्कृत के लिए एक परीक्षण है.`,E1=`# 空白处理测试

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

这个文档包含了各种空白字符的使用情况，用于测试 Markdown 差异比较工具处理空白字符的能力。`,M1=`# 空白处理测试（更新版）

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
 
  
   
    
     
      
       
        
         
普通文本（中间是递增的空格行）`,T1=`# 混合内容测试

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

这个文档包含了各种混合内容的情况，用于测试 Markdown 差异比较工具处理复杂混合内容的能力。`,P1=`# 混合内容测试（更新版）

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
</div>`,ec=[{name:"simple",oldMarkdown:r1,newMarkdown:i1},{name:"headings",oldMarkdown:l1,newMarkdown:o1},{name:"lists",oldMarkdown:u1,newMarkdown:a1},{name:"code",oldMarkdown:s1,newMarkdown:c1},{name:"tables",oldMarkdown:f1,newMarkdown:d1},{name:"links",oldMarkdown:h1,newMarkdown:p1},{name:"formatting",oldMarkdown:m1,newMarkdown:g1},{name:"complex",oldMarkdown:y1,newMarkdown:k1},{name:"extreme_long",oldMarkdown:x1,newMarkdown:w1},{name:"nested_structures",oldMarkdown:v1,newMarkdown:S1},{name:"special_characters",oldMarkdown:_1,newMarkdown:C1},{name:"whitespace",oldMarkdown:E1,newMarkdown:M1},{name:"mixed_content",oldMarkdown:T1,newMarkdown:P1}];class ch{diff(n,t,r={}){let i;typeof r=="function"?(i=r,r={}):"callback"in r&&(i=r.callback);const l=this.castInput(n,r),o=this.castInput(t,r),u=this.removeEmpty(this.tokenize(l,r)),a=this.removeEmpty(this.tokenize(o,r));return this.diffWithOptionsObj(u,a,r,i)}diffWithOptionsObj(n,t,r,i){var l;const o=m=>{if(m=this.postProcess(m,r),i){setTimeout(function(){i(m)},0);return}else return m},u=t.length,a=n.length;let s=1,f=u+a;r.maxEditLength!=null&&(f=Math.min(f,r.maxEditLength));const c=(l=r.timeout)!==null&&l!==void 0?l:1/0,d=Date.now()+c,h=[{oldPos:-1,lastComponent:void 0}];let y=this.extractCommon(h[0],t,n,0,r);if(h[0].oldPos+1>=a&&y+1>=u)return o(this.buildValues(h[0].lastComponent,t,n));let S=-1/0,T=1/0;const p=()=>{for(let m=Math.max(S,-s);m<=Math.min(T,s);m+=2){let g;const _=h[m-1],E=h[m+1];_&&(h[m-1]=void 0);let w=!1;if(E){const z=E.oldPos-m;w=E&&0<=z&&z<u}const M=_&&_.oldPos+1<a;if(!w&&!M){h[m]=void 0;continue}if(!M||w&&_.oldPos<E.oldPos?g=this.addToPath(E,!0,!1,0,r):g=this.addToPath(_,!1,!0,1,r),y=this.extractCommon(g,t,n,m,r),g.oldPos+1>=a&&y+1>=u)return o(this.buildValues(g.lastComponent,t,n))||!0;h[m]=g,g.oldPos+1>=a&&(T=Math.min(T,m-1)),y+1>=u&&(S=Math.max(S,m+1))}s++};if(i)(function m(){setTimeout(function(){if(s>f||Date.now()>d)return i(void 0);p()||m()},0)})();else for(;s<=f&&Date.now()<=d;){const m=p();if(m)return m}}addToPath(n,t,r,i,l){const o=n.lastComponent;return o&&!l.oneChangePerToken&&o.added===t&&o.removed===r?{oldPos:n.oldPos+i,lastComponent:{count:o.count+1,added:t,removed:r,previousComponent:o.previousComponent}}:{oldPos:n.oldPos+i,lastComponent:{count:1,added:t,removed:r,previousComponent:o}}}extractCommon(n,t,r,i,l){const o=t.length,u=r.length;let a=n.oldPos,s=a-i,f=0;for(;s+1<o&&a+1<u&&this.equals(r[a+1],t[s+1],l);)s++,a++,f++,l.oneChangePerToken&&(n.lastComponent={count:1,previousComponent:n.lastComponent,added:!1,removed:!1});return f&&!l.oneChangePerToken&&(n.lastComponent={count:f,previousComponent:n.lastComponent,added:!1,removed:!1}),n.oldPos=a,s}equals(n,t,r){return r.comparator?r.comparator(n,t):n===t||!!r.ignoreCase&&n.toLowerCase()===t.toLowerCase()}removeEmpty(n){const t=[];for(let r=0;r<n.length;r++)n[r]&&t.push(n[r]);return t}castInput(n,t){return n}tokenize(n,t){return Array.from(n)}join(n){return n.join("")}postProcess(n,t){return n}get useLongestToken(){return!1}buildValues(n,t,r){const i=[];let l;for(;n;)i.push(n),l=n.previousComponent,delete n.previousComponent,n=l;i.reverse();const o=i.length;let u=0,a=0,s=0;for(;u<o;u++){const f=i[u];if(f.removed)f.value=this.join(r.slice(s,s+f.count)),s+=f.count;else{if(!f.added&&this.useLongestToken){let c=t.slice(a,a+f.count);c=c.map(function(d,h){const y=r[s+h];return y.length>d.length?y:d}),f.value=this.join(c)}else f.value=this.join(t.slice(a,a+f.count));a+=f.count,f.added||(s+=f.count)}}return i}}class z1 extends ch{}const I1=new z1;function L1(e,n,t){return I1.diff(e,n,t)}function nc(e,n){let t;for(t=0;t<e.length&&t<n.length;t++)if(e[t]!=n[t])return e.slice(0,t);return e.slice(0,t)}function tc(e,n){let t;if(!e||!n||e[e.length-1]!=n[n.length-1])return"";for(t=0;t<e.length&&t<n.length;t++)if(e[e.length-(t+1)]!=n[n.length-(t+1)])return e.slice(-t);return e.slice(-t)}function Cu(e,n,t){if(e.slice(0,n.length)!=n)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(n)}; this is a bug`);return t+e.slice(n.length)}function Eu(e,n,t){if(!n)return e+t;if(e.slice(-n.length)!=n)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(n)}; this is a bug`);return e.slice(0,-n.length)+t}function kr(e,n){return Cu(e,n,"")}function Mi(e,n){return Eu(e,n,"")}function rc(e,n){return n.slice(0,A1(e,n))}function A1(e,n){let t=0;e.length>n.length&&(t=e.length-n.length);let r=n.length;e.length<n.length&&(r=e.length);const i=Array(r);let l=0;i[0]=0;for(let o=1;o<r;o++){for(n[o]==n[l]?i[o]=i[l]:i[o]=l;l>0&&n[o]!=n[l];)l=i[l];n[o]==n[l]&&l++}l=0;for(let o=t;o<e.length;o++){for(;l>0&&e[o]!=n[l];)l=i[l];e[o]==n[l]&&l++}return l}function xr(e){let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function On(e){const n=e.match(/^\s*/);return n?n[0]:""}const ic="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",D1=new RegExp(`[${ic}]+|\\s+|[^${ic}]`,"ug");class F1 extends ch{equals(n,t,r){return r.ignoreCase&&(n=n.toLowerCase(),t=t.toLowerCase()),n.trim()===t.trim()}tokenize(n,t={}){let r;if(t.intlSegmenter){const o=t.intlSegmenter;if(o.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');r=Array.from(o.segment(n),u=>u.segment)}else r=n.match(D1)||[];const i=[];let l=null;return r.forEach(o=>{/\s/.test(o)?l==null?i.push(o):i.push(i.pop()+o):l!=null&&/\s/.test(l)?i[i.length-1]==l?i.push(i.pop()+o):i.push(l+o):i.push(o),l=o}),i}join(n){return n.map((t,r)=>r==0?t:t.replace(/^\s+/,"")).join("")}postProcess(n,t){if(!n||t.oneChangePerToken)return n;let r=null,i=null,l=null;return n.forEach(o=>{o.added?i=o:o.removed?l=o:((i||l)&&lc(r,l,i,o),r=o,i=null,l=null)}),(i||l)&&lc(r,l,i,null),n}}const N1=new F1;function fh(e,n,t){return N1.diff(e,n,t)}function lc(e,n,t,r){if(n&&t){const i=On(n.value),l=xr(n.value),o=On(t.value),u=xr(t.value);if(e){const a=nc(i,o);e.value=Eu(e.value,o,a),n.value=kr(n.value,a),t.value=kr(t.value,a)}if(r){const a=tc(l,u);r.value=Cu(r.value,u,a),n.value=Mi(n.value,a),t.value=Mi(t.value,a)}}else if(t){if(e){const i=On(t.value);t.value=t.value.substring(i.length)}if(r){const i=On(r.value);r.value=r.value.substring(i.length)}}else if(e&&r){const i=On(r.value),l=On(n.value),o=xr(n.value),u=nc(i,l);n.value=kr(n.value,u);const a=tc(kr(i,u),o);n.value=Mi(n.value,a),r.value=Cu(r.value,i,a),e.value=Eu(e.value,i,i.slice(0,i.length-a.length))}else if(r){const i=On(r.value),l=xr(n.value),o=rc(l,i);n.value=Mi(n.value,o)}else if(e){const i=xr(e.value),l=On(n.value),o=rc(i,l);n.value=kr(n.value,o)}}function R(e){if(!e)throw new Error("AssertionError [ERR_ASSERTION]")}class oc{constructor(){this.nodes=[],this.maxId=0,this.maxNodes=0,this.maxWeight=0,this.nodes=[]}getXNode(n){return this.nodes[n]}setXNode(n,t){this.nodes[n]=t,n>this.maxId&&(this.maxId=n),this.maxNodes+=1}}var ke=(e=>(e.Ins="ins",e.Del="del",e))(ke||{}),Er=(e=>(e.Ins="ins",e.Del="del",e.InlineIns="inlineIns",e.InlineDel="inlineDel",e))(Er||{}),U=(e=>(e.Root="root",e.Blockquote="blockquote",e.Break="break",e.Code="code",e.Definition="definition",e.Emphasis="emphasis",e.Heading="heading",e.Html="html",e.Image="image",e.ImageReference="imageReference",e.InlineCode="inlineCode",e.Link="link",e.LinkReference="linkReference",e.List="list",e.ListItem="listItem",e.Paragraph="paragraph",e.Strong="strong",e.Text="text",e.ThematicBreak="thematicBreak",e.Delete="delete",e.FootnoteDefinition="footnoteDefinition",e.FootnoteReference="footnoteReference",e.Table="table",e.TableRow="tableRow",e.TableCell="tableCell",e.ContainerDirective="containerDirective",e.LeafDirective="leafDirective",e.TextDirective="textDirective",e.YAML="yaml",e.TOML="toml",e.MDXJSEsm="mdxjsEsm",e.MDXJSExpression="mdxJsExpression",e.MDXFlowExpression="mdxFlowExpression",e.MDXTextExpression="mdxTextExpression",e))(U||{});function R1(e){return["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","link","linkReference","strong","text","inlineMath"].includes(e.type)}function Ze(e){return e.type===U.Table||e.type===U.YAML||e.type===U.TOML}function dh(e,n,t,r=1){if(!e||!n||!t||!e.children)return;const i=e.children.indexOf(n);i!==-1&&(Array.isArray(t)?e.children.splice(i,r,...t):e.children.splice(i,r,t))}const b1=1;function uc(e,n,t,r){var o,u,a,s;let i=b1;const l=Math.max(1,Math.ceil(Math.log(r.maxNodes)*n.weight/r.maxWeight));for(let f=0;f<l;f++){const c=(u=(o=e.node)==null?void 0:o._parent)==null?void 0:u._xNode,d=(s=(a=n.node)==null?void 0:a._parent)==null?void 0:s._xNode;c&&d&&d.match&&d.match===c.node&&(i+=1)}return i}function j1(e,n,t,r){if(R(e.node),R(t.node),!t.optMatch){t.optMatch=e.node,t.opt=uc(e,t,n,r);return}const i=uc(e,t,n,r);if(i===t.opt){const l=Math.abs(t.optMatch._id-t.node._id),o=Math.abs(e.node._id-t.node._id);l>o&&(t.optMatch=e.node,t.opt=i)}else i>t.opt&&(t.optMatch=e.node,t.opt=i)}function yl(e,n){if(e.type!==n.type)return!1;switch(e.type){case U.Link:if(e.url!==n.url||e.title!==n.title)return!1;break;case U.Heading:if(e.depth!==n.depth)return!1;break;case U.ListItem:if(e.checked!==n.checked||e.spread!==n.spread)return!1;break}return!0}function ac(e){return e._parent?e._parent.children.length===1:!0}function $1(e,n,t,r){var o,u,a,s;const i=Math.max(1,Math.ceil(Math.log(r.maxNodes)*t.weight/r.maxWeight));let l=0;for(;l<i;){const f=(o=e.node)==null?void 0:o._parent,c=(u=t.node)==null?void 0:u._parent;if(!f||!c||!yl(f,c)||(R(f._xNode&&c._xNode),e=f._xNode,t=c._xNode,e.match||t.match))break;e.match=t.node,t.match=e.node,l+=1}if(l===i)for(;;){R(e.node&&t.node);const f=(a=e.node)==null?void 0:a._parent,c=(s=t.node)==null?void 0:s._parent;if(!f||!c||!ac(t.node)||!ac(e.node)||!yl(f,c)||(R(f._xNode&&c._xNode),e=f._xNode,t=c._xNode,e.match||t.match))break;e.match=t.node,t.match=e.node}}function hh(e,n,t,r){var o,u;let i,l;if(e.match&&(R(e.match._xNode),R(e.node===e.match._xNode.match),e.match._xNode.match=void 0,e.match=void 0),R(!t.match),R(!e.match),t.match=e.node,e.match=t.node,R(t.node),R(e.node),Ze(t.node)){R(Ze(e.node));return}for(i=(o=e.node.children)==null?void 0:o[0],l=(u=t.node.children)==null?void 0:u[0];l;)R(i),R(i._xNode),R(l._xNode),hh(i._xNode,n,l._xNode),i=i._next,l=l._next;R(!i)}function ph(e){if(!e.children)return;const n=e.children.length;e.children.forEach((t,r)=>{r>0&&(t._before=e.children[r-1]),r<n-1&&(t._next=e.children[r+1])})}function mh(e,n){const t={...e,data:{...e.data},_id:n,type:e.type,position:e.position};return delete t._parent,delete t._before,delete t._next,t}function Mn(e,n){n.value+=1;const t=mh(e,n.value);return e.children&&(t.children=[],e.children.forEach(r=>{var l;const i=Mn(r,n);i._parent=t,(l=t.children)==null||l.push(i)}),ph(t)),t}const sc=100;function O1(e,n,t,r){const i=e.value.length<=sc||n.value.length<=sc?L1(e.value,n.value):fh(e.value,n.value);for(const l of i){r.value+=1;const o={_id:r.value,type:U.Text,value:l.value,data:{},_parent:t};l.added?o.data.diff=ke.Ins:l.removed&&(o.data.diff=ke.Del),t.children||(t.children=[]),t.children.push(o)}}function gh(e,n,t,r,i){var c,d;let l,o,u,a;R(t&&e),R(t._xNode),R(e._xNode),o=t._xNode,l=e._xNode,R(l.match),R(o.match),R(o.match===l.node),u=mh(t,i.value),u.children=[];let s=(c=e.children)==null?void 0:c[0],f=(d=t.children)==null?void 0:d[0];for(;f;){for(;s&&(l=s._xNode,R(l),!(l.match||s.type===U.Text));)a=Mn(s,i),a._parent=u,a.data.diff=ke.Del,u.children.push(a),s=s._next;for(;f&&(o=f._xNode,R(o),!(o.match||f.type===U.Text));)a=Mn(f,i),a._parent=u,a.data.diff=ke.Ins,u.children.push(a),f=f._next;for(R(l&&o),s&&f&&s.type==U.Text&&!l.match&&f.type==U.Text&&!o.match&&(O1(s,f,u,i),s=s._next,f=f._next);s&&(l=s._xNode,R(l),!l.match);)a=Mn(s,i),a._parent=u,a.data.diff=ke.Del,u.children.push(a),s=s._next;for(;f&&(o=f._xNode,R(o),!o.match);)a=Mn(f,i),a._parent=u,a.data.diff=ke.Ins,u.children.push(a),f=f._next;if(!f)break;o=f._xNode,R(o),R(o.match);let h=s;for(;h&&(l=h._xNode,R(l),o.node!==l.match);)h=h._next;if(!h){a=Mn(f,i),a._parent=u,a.data.diff=ke.Ins,u.children.push(a),f=f._next;continue}for(;s&&(l=s._xNode,R(l),o.node!==l.match);)a=Mn(s,i),a._parent=u,a.data.diff=ke.Del,u.children.push(a),s=s._next;R(s),Ze(f)?(R(Ze(s)),a=Mn(f,i),a._parent=u,u.children.push(a)):(R(!Ze(s)),a=gh(s,n,f,r,i),a._parent=u,u.children.push(a)),s=s._next,f=f._next}for(;s;)a=Mn(s,i),a._parent=u,a.data.diff=ke.Del,u.children.push(a),s=s._next;return u}function Mr(e){return!!e.children&&e.children.length>0}function yh(e){var i;if(Ze(e)||!Mr(e))return;const n=e._xNode;R(n);const t=n.match;if(!t)return;const r=t._xNode;R(r);for(let l of e.children){if(Ze(l)||!Mr(l))continue;R(l._xNode);const o=l._xNode.match;if(!o||((i=o==null?void 0:o._parent)==null?void 0:i._id)!==t._id)continue;R(o._xNode);const u=l._next;if(!u||Ze(u)||!Mr(u))continue;const a=u._xNode;if(R(a),a.match)continue;const s=o._next;if(!s||Ze(s)||!Mr(s))continue;const f=s._xNode;R(f),!f.match&&yl(u,s)&&(a.match=s,f.match=u)}for(let l of e.children)yh(l)}function kh(e,n,t){var o;let r,i=0,l=0;if(R(e._xNode),!(Ze(e)||!Mr(e))){for(let u of e.children)R(u._xNode),l+=((o=u._xNode)==null?void 0:o.weight)||0,kh(u);if(!e._xNode.match){for(let u of e.children){if(R(u._xNode),!u._xNode.match)continue;const a=u._xNode.match._parent;if(!a||a===r||!yl(e,a))continue;let s=0;for(let f of e.children)R(f._xNode),f._xNode.match&&a===f._xNode.match._parent&&(s+=f._xNode.weight);s>i&&(i=s,r=a)}r&&(R(r._xNode),i/l>=.5&&(e._xNode.match=r,r._xNode.match=e))}}}const Rl=function(e){if(e==null)return V1;if(typeof e=="function")return bl(e);if(typeof e=="object")return Array.isArray(e)?B1(e):H1(e);if(typeof e=="string")return U1(e);throw new Error("Expected function, string, or object as test")};function B1(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Rl(e[t]);return bl(r);function r(...i){let l=-1;for(;++l<n.length;)if(n[l].apply(this,i))return!0;return!1}}function H1(e){const n=e;return bl(t);function t(r){const i=r;let l;for(l in e)if(i[l]!==n[l])return!1;return!0}}function U1(e){return bl(n);function n(t){return t&&t.type===e}}function bl(e){return n;function n(t,r,i){return!!(W1(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function V1(){return!0}function W1(e){return e!==null&&typeof e=="object"&&"type"in e}const xh=[],Q1=!0,Mu=!1,q1="skip";function wh(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const l=Rl(i),o=r?-1:1;u(e,void 0,[])();function u(a,s,f){const c=a&&typeof a=="object"?a:{};if(typeof c.type=="string"){const h=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(a.type+(h?"<"+h+">":""))+")"})}return d;function d(){let h=xh,y,S,T;if((!n||l(a,s,f[f.length-1]||void 0))&&(h=Y1(t(a,f)),h[0]===Mu))return h;if("children"in a&&a.children){const p=a;if(p.children&&h[0]!==q1)for(S=(r?p.children.length:-1)+o,T=f.concat(p);S>-1&&S<p.children.length;){const m=p.children[S];if(y=u(m,S,T)(),y[0]===Mu)return y;S=typeof y[1]=="number"?y[1]:S+o}}return h}}}function Y1(e){return Array.isArray(e)?e:typeof e=="number"?[Q1,e]:e==null?xh:[e]}function Sn(e,n,t,r){let i,l,o;typeof n=="function"&&typeof t!="function"?(l=void 0,o=n,i=t):(l=n,o=t,i=r),wh(e,l,u,i);function u(a,s){const f=s[s.length-1],c=f?f.children.indexOf(a):void 0;return o(a,c,f)}}const vh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",X1=vh.length;function G1(e){let n="";const t=new Uint8Array(e);for(let r=0;r<e;r++)t[r]=Math.floor(Math.random()*256);for(let r=0;r<e;r++)n+=vh.charAt(t[r]%X1);return n}function J1(e,n){if(e.length===0)return n.length;if(n.length===0)return e.length;const t=e.length,r=n.length,i=new Array(r+1),l=new Array(r+1);for(let o=0;o<=r;o++)i[o]=o;for(let o=1;o<=t;o++){l[0]=o;for(let u=1;u<=r;u++){const a=e[o-1]===n[u-1]?0:1;l[u]=Math.min(i[u]+1,l[u-1]+1,i[u-1]+a)}for(let u=0;u<=r;u++)i[u]=l[u]}return i[r]}function K1(e,n){if(e.length===0&&n.length===0)return 1;if(e.length===0||n.length===0)return 0;const t=J1(e,n),r=Math.max(e.length,n.length);return 1-t/r}function Z1(e,n){if(e===n)return 1;const t=e.trim().toLowerCase(),r=n.trim().toLowerCase();return t===r?1:K1(t,r)}function cc(e){if(!e.children||e.children.length!==1)return!1;const n=e.children[0];return!(n.type!==U.Text||!n.value)}function e0(e,n){let t=[],r=[];const i=new Set,l=new Set;Sn(e,"heading",c=>{cc(c)&&(i.add(c.children[0].value),t.push([c,c.children[0].value]))}),Sn(n,"heading",c=>{cc(c)&&(l.add(c.children[0].value),r.push([c,c.children[0].value]))}),t=t.filter(([c,d])=>!l.has(d)),r=r.filter(([c,d])=>!i.has(d));const o=[];for(let c=0;c<t.length;c++){o[c]=[];for(let d=0;d<r.length;d++)o[c][d]=Z1(t[c][1],r[d][1])}const u=[],a=new Set,s=new Set,f=[];for(let c=0;c<t.length;c++)for(let d=0;d<r.length;d++)o[c][d]>.5&&f.push({oldIndex:c,newIndex:d,similarity:o[c][d]});f.sort((c,d)=>d.similarity-c.similarity);for(const c of f)!a.has(c.oldIndex)&&!s.has(c.newIndex)&&(u.push(c),a.add(c.oldIndex),s.add(c.newIndex));return u.forEach(c=>{const d=t[c.oldIndex][0],h=r[c.newIndex][0],y=G1(16),S={type:U.Text,value:y,data:{headingDiffToken:!0}},T={type:U.Text,value:y,data:{headingDiffToken:!0}};d.children.push(S),h.children.push(T)}),c=>{Sn(c,U.Text,(d,h,y)=>{var S;(S=d.data)!=null&&S.headingDiffToken&&dh(y,d,[])})}}function n0(e,n){for(let t of[e,n])Sn(t,"listItem",r=>{r.children&&r.children.length===1&&r.children[0].type==="paragraph"&&r.children[0].children&&(r.data||(r.data={}),r.data.backupParagraph=r.children[0],r.children=r.children[0].children)});return t=>{Sn(t,"listItem",r=>{var i;(i=r.data)!=null&&i.backupParagraph&&(r.children=[{...r.data.backupParagraph,children:r.children}],delete r.data.backupParagraph)})}}function t0(e,n){for(let t of[e,n]){let r=0;Sn(t,(i,l,o)=>{i._parent=o,i._id=r,r+=1,i.data||(i.data={}),i.children&&ph(i)})}return t=>{Sn(t,r=>{delete r._parent,delete r._xNode,delete r._id,delete r._before,delete r._next})}}var Sh={},ur={},jl={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 */let r0=class Hi{constructor(n,t,r){if(typeof n!="function")throw new Error("Heap constructor expects a compare function");this._compare=n,this._nodes=Array.isArray(t)?t:[],this._leaf=r||null}toArray(){return Array.from(this._nodes)}_hasLeftChild(n){return n*2+1<this.size()}_hasRightChild(n){return n*2+2<this.size()}_compareAt(n,t){return this._compare(this._nodes[n],this._nodes[t])}_swap(n,t){const r=this._nodes[n];this._nodes[n]=this._nodes[t],this._nodes[t]=r}_shouldSwap(n,t){return n<0||n>=this.size()||t<0||t>=this.size()?!1:this._compareAt(n,t)>0}_compareChildrenOf(n){if(!this._hasLeftChild(n)&&!this._hasRightChild(n))return-1;const t=n*2+1,r=n*2+2;return this._hasLeftChild(n)?this._hasRightChild(n)&&this._compareAt(t,r)>0?r:t:r}_compareChildrenBefore(n,t,r){return this._compareAt(r,t)<=0&&r<n?r:t}_heapifyUp(n){let t=n,r=Math.floor((t-1)/2);for(;this._shouldSwap(r,t);)this._swap(r,t),t=r,r=Math.floor((t-1)/2)}_heapifyDown(n){let t=n,r=this._compareChildrenOf(t);for(;this._shouldSwap(t,r);)this._swap(t,r),t=r,r=this._compareChildrenOf(t)}_heapifyDownUntil(n){let t=0,r=1,i=2,l;for(;r<n;)l=this._compareChildrenBefore(n,r,i),this._shouldSwap(t,l)&&this._swap(t,l),t=l,r=t*2+1,i=t*2+2}insert(n){return this._nodes.push(n),this._heapifyUp(this.size()-1),(this._leaf===null||this._compare(n,this._leaf)>0)&&(this._leaf=n),this}push(n){return this.insert(n)}extractRoot(){if(this.isEmpty())return null;const n=this.root();return this._nodes[0]=this._nodes[this.size()-1],this._nodes.pop(),this._heapifyDown(0),n===this._leaf&&(this._leaf=this.root()),n}pop(){return this.extractRoot()}sort(){for(let n=this.size()-1;n>0;n-=1)this._swap(0,n),this._heapifyDownUntil(n);return this._nodes}fix(){for(let n=Math.floor(this.size()/2)-1;n>=0;n-=1)this._heapifyDown(n);for(let n=Math.floor(this.size()/2);n<this.size();n+=1){const t=this._nodes[n];(this._leaf===null||this._compare(t,this._leaf)>0)&&(this._leaf=t)}return this}isValid(){const n=t=>{let r=!0,i=!0;if(this._hasLeftChild(t)){const l=t*2+1;if(this._compareAt(t,l)>0)return!1;r=n(l)}if(this._hasRightChild(t)){const l=t*2+2;if(this._compareAt(t,l)>0)return!1;i=n(l)}return r&&i};return n(0)}clone(){return new Hi(this._compare,this._nodes.slice(),this._leaf)}root(){return this.isEmpty()?null:this._nodes[0]}top(){return this.root()}leaf(){return this._leaf}size(){return this._nodes.length}isEmpty(){return this.size()===0}clear(){this._nodes=[],this._leaf=null}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}static heapify(n,t){if(!Array.isArray(n))throw new Error("Heap.heapify expects an array of values");if(typeof t!="function")throw new Error("Heap.heapify expects a compare function");return new Hi(t,n).fix()}static isHeapified(n,t){return new Hi(t,n).isValid()}};jl.Heap=r0;var _h={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */const{Heap:po}=jl,mo=e=>(n,t)=>{const r=typeof e=="function"?e(n):n,i=typeof e=="function"?e(t):t;return r<=i?-1:1};let i0=class Ui{constructor(n,t){this._getCompareValue=n,this._heap=t||new po(mo(n))}toArray(){return Array.from(this._heap._nodes)}insert(n){return this._heap.insert(n)}push(n){return this.insert(n)}extractRoot(){return this._heap.extractRoot()}pop(){return this.extractRoot()}sort(){return this._heap.sort()}fix(){return this._heap.fix()}isValid(){return this._heap.isValid()}root(){return this._heap.root()}top(){return this.root()}leaf(){return this._heap.leaf()}size(){return this._heap.size()}isEmpty(){return this._heap.isEmpty()}clear(){this._heap.clear()}clone(){return new Ui(this._getCompareValue,this._heap.clone())}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}static heapify(n,t){if(!Array.isArray(n))throw new Error("MinHeap.heapify expects an array");const r=new po(mo(t),n);return new Ui(t,r).fix()}static isHeapified(n,t){const r=new po(mo(t),n);return new Ui(t,r).isValid()}};_h.MinHeap=i0;var Ch={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */const{Heap:go}=jl,yo=e=>(n,t)=>{const r=typeof e=="function"?e(n):n,i=typeof e=="function"?e(t):t;return r<i?1:-1};let l0=class Vi{constructor(n,t){this._getCompareValue=n,this._heap=t||new go(yo(n))}insert(n){return this._heap.insert(n)}push(n){return this.insert(n)}extractRoot(){return this._heap.extractRoot()}pop(){return this.extractRoot()}sort(){return this._heap.sort()}toArray(){return Array.from(this._heap._nodes)}fix(){return this._heap.fix()}isValid(){return this._heap.isValid()}root(){return this._heap.root()}top(){return this.root()}leaf(){return this._heap.leaf()}size(){return this._heap.size()}isEmpty(){return this._heap.isEmpty()}clear(){this._heap.clear()}clone(){return new Vi(this._getCompareValue,this._heap.clone())}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}static heapify(n,t){if(!Array.isArray(n))throw new Error("MaxHeap.heapify expects an array");const r=new go(yo(t),n);return new Vi(t,r).fix()}static isHeapified(n,t){const r=new go(yo(t),n);return new Vi(t,r).isValid()}};Ch.MaxHeap=l0;const{Heap:o0}=jl,{MinHeap:u0}=_h,{MaxHeap:a0}=Ch;ur.Heap=o0;ur.MinHeap=u0;ur.MaxHeap=a0;/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */const{Heap:fc,MinHeap:dc}=ur,s0=e=>(n,t)=>{const r=typeof e=="function"?e(n):n,i=typeof e=="function"?e(t):t;return r<=i?-1:1};let c0=class Eh{constructor(n,t){if(n&&typeof n=="object"&&typeof n.compare=="function"){this._getCompareValue=null;const r=(i,l)=>n.compare(i,l)<=0?-1:1;this._heap=t||new fc(r)}else{const r=n;if(r&&typeof r!="function")throw new Error("MinPriorityQueue constructor requires a callback for object values");this._heap=t||new dc(r)}}front(){return this._heap.root()}back(){return this._heap.leaf()}enqueue(n){return this._heap.insert(n)}push(n){return this.enqueue(n)}dequeue(){return this._heap.extractRoot()}pop(){return this.dequeue()}remove(n){if(typeof n!="function")throw new Error("MinPriorityQueue remove expects a callback");const t=[],r=[];for(;!this.isEmpty();){const i=this.pop();n(i)?t.push(i):r.push(i)}return r.forEach(i=>this.push(i)),t}contains(n){if(typeof n!="function")throw new Error("MinPriorityQueue contains expects a callback");let t=!1;const r=[];for(;!this.isEmpty();){const i=this.pop();if(r.push(i),n(i)){t=!0;break}}return r.forEach(i=>this.push(i)),t}size(){return this._heap.size()}isEmpty(){return this._heap.isEmpty()}clear(){this._heap.clear()}toArray(){return this._heap.clone().sort().reverse()}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}static fromArray(n,t){const r=new fc(s0(t),n);return new Eh(t,new dc(t,r).fix())}};Sh.MinPriorityQueue=c0;var Mh={};/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */const{Heap:hc,MaxHeap:pc}=ur,f0=e=>(n,t)=>{const r=typeof e=="function"?e(n):n,i=typeof e=="function"?e(t):t;return r<i?1:-1};let d0=class Th{constructor(n,t){if(n&&typeof n=="object"&&typeof n.compare=="function"){this._getCompareValue=null;const r=(i,l)=>n.compare(i,l)>=0?-1:1;this._heap=t||new hc(r)}else{const r=n;if(r&&typeof r!="function")throw new Error("MaxPriorityQueue constructor requires a callback for object values");this._heap=t||new pc(r)}}front(){return this._heap.root()}back(){return this._heap.leaf()}enqueue(n){return this._heap.insert(n)}push(n){return this.enqueue(n)}dequeue(){return this._heap.extractRoot()}pop(){return this.dequeue()}remove(n){if(typeof n!="function")throw new Error("MaxPriorityQueue remove expects a callback");const t=[],r=[];for(;!this.isEmpty();){const i=this.pop();n(i)?t.push(i):r.push(i)}return r.forEach(i=>this.push(i)),t}contains(n){if(typeof n!="function")throw new Error("MaxPriorityQueue contains expects a callback");let t=!1;const r=[];for(;!this.isEmpty();){const i=this.pop();if(r.push(i),n(i)){t=!0;break}}return r.forEach(i=>this.push(i)),t}size(){return this._heap.size()}isEmpty(){return this._heap.isEmpty()}clear(){this._heap.clear()}toArray(){return this._heap.clone().sort().reverse()}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}static fromArray(n,t){const r=new hc(f0(t),n);return new Th(t,new pc(t,r).fix())}};Mh.MaxPriorityQueue=d0;var Ph={};/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */const{Heap:h0}=ur;let p0=class zh{constructor(n,t){if(typeof n!="function")throw new Error("PriorityQueue constructor expects a compare function");this._heap=new h0(n,t),t&&this._heap.fix()}front(){return this._heap.root()}back(){return this._heap.leaf()}enqueue(n){return this._heap.insert(n)}push(n){return this.enqueue(n)}dequeue(){return this._heap.extractRoot()}pop(){return this.dequeue()}remove(n){if(typeof n!="function")throw new Error("PriorityQueue remove expects a callback");const t=[],r=[];for(;!this.isEmpty();){const i=this.pop();n(i)?t.push(i):r.push(i)}return r.forEach(i=>this.push(i)),t}contains(n){if(typeof n!="function")throw new Error("PriorityQueue contains expects a callback");let t=!1;const r=[];for(;!this.isEmpty();){const i=this.pop();if(r.push(i),n(i)){t=!0;break}}return r.forEach(i=>this.push(i)),t}size(){return this._heap.size()}isEmpty(){return this._heap.isEmpty()}clear(){this._heap.clear()}toArray(){return this._heap.clone().sort().reverse()}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}static fromArray(n,t){return new zh(t,n)}};Ph.PriorityQueue=p0;const{MinPriorityQueue:m0}=Sh,{MaxPriorityQueue:g0}=Mh,{PriorityQueue:y0}=Ph;var k0={MinPriorityQueue:m0,MaxPriorityQueue:g0,PriorityQueue:y0};function x0(){return new k0.PriorityQueue((n,t)=>{const r=n._xNode,i=t._xNode,l=(r==null?void 0:r.weight)||0,o=(i==null?void 0:i.weight)||0;return l!==o?o-l:n._id-t._id})}class mc{constructor(n){this.opt=0,this.sign="",this.weight=0,n&&(this._node=n,n._xNode=this)}get node(){return this._node}get match(){return this._match}set match(n){var t;(t=this.node)==null||t.type,this._match=n}}function Tu(e,n,t,r=!1){var s,f,c,d,h;let i=-1,l=0,o=r;r||(n.setXNode(t._id,new mc(t)),o=Ze(t));const u=new v0(t.type);(s=t.children)==null||s.forEach(y=>{l+=Tu(u,n,y,o)});const a=r?new mc:t._xNode;switch(a.weight=l,t.type){case U.Code:i=t.value.length;break;case U.Html:i=t.value.length;break;case U.Link:i=t.url.length+(((f=t.title)==null?void 0:f.length)??0);break;case U.InlineCode:i=t.value.length;break;case U.Image:i=t.url.length+(((c=t.title)==null?void 0:c.length)??0)+(((d=t.alt)==null?void 0:d.length)??0);break;case U.Text:i=t.value.length;break;case U.LinkReference:i=((h=t.label)==null?void 0:h.length)??0;break}switch(i>=0?a.weight=1+(i===0?0:Math.log(i)):a.weight+=1,t.type){case U.List:u.update(t.ordered),u.update(t.start),u.update(t.spread);break;case U.ListItem:u.update(t.checked),u.update(t.spread);break;case U.Heading:u.update(t.depth);break;case U.Text:u.update(t.value);break;case U.Html:u.update(t.value);break;case U.Link:u.update(t.url),u.update(t.title);break;case U.Code:u.update(t.value),u.update(t.lang);break;case U.InlineCode:u.update(t.value);break;case U.Table:u.update(t.align);break;case U.Image:u.update(t.url),u.update(t.title),u.update(t.alt);break}return a.sign=u.digest(),e&&e.update(a.sign),a.weight>n.maxWeight&&(n.maxWeight=a.weight),a.weight}class w0{constructor(){this.content=""}update(n){this.content+=n}digest(){return this.content}}class v0{constructor(n=""){this.sha=new w0,n&&this.sha.update(n)}update(n){if(this.sha.update("|"),n===void 0)this.sha.update("$$undefined$$");else if(n===null)this.sha.update("$$null$$");else if(typeof n=="string")this.sha.update(n);else if(typeof n=="number")this.sha.update(n.toString());else if(typeof n=="boolean")this.sha.update(n?"$$true$$":"$$false$$");else if(Array.isArray(n)){this.sha.update("[");for(let t=0;t<n.length;t++)this.update(n[t]);this.sha.update("]")}}digest(){return this.sha.digest()}}function S0(e,n){var c;const t=[e0(e,n),n0(e,n),t0(e,n)],r=d=>{t.reverse().forEach(h=>h(d))};let i,l;const o=new oc,u=new oc;Tu(null,o,e,!1),Tu(null,u,n,!1);const a=x0();for(a.enqueue(n);a.size()>0;){const d=a.dequeue();if(!d)break;if(l=d._xNode,!l)continue;R(!l.match),R(!l.optMatch),R(l.opt===0);for(let y=0;y<o.nodes.length;y++)i=o.getXNode(y),i!=null&&i.node&&(i!=null&&i.match||i.sign===l.sign&&(R(!i.match),j1(i,o,l,u)));if(!l.optMatch){if(Ze(d))continue;(c=d.children)==null||c.forEach(y=>a.enqueue(y));continue}R(!l.match),R(!l.optMatch._xNode.match);const h=l.optMatch._xNode;R(h),hh(h,o,l),$1(h,o,l,u)}R(n._xNode),n._xNode.match||(R(e.type===U.Root),R(n.type===U.Root),i=e._xNode,l=n._xNode,R(i),R(l),R(!i.match),l.match=i.node,i.match=l.node),yh(n),kh(n);const f=gh(e,o,n,u,{value:0});return R(f.type===U.Root),r(f),f}function _0(e,n){var t,r;return!e&&!n?{type:"root",children:[]}:!e&&n?((t=n.children)==null||t.forEach(i=>{i.data||(i.data={}),i.data.diff=ke.Ins}),n):e&&!n?((r=e.children)==null||r.forEach(i=>{i.data||(i.data={}),i.data.diff=ke.Del}),e):S0(e,n)}function C0(e,n,t){const r={type:String(e)};return t==null&&(typeof n=="string"||Array.isArray(n))?t=n:Object.assign(r,n),Array.isArray(t)?r.children=t:t!=null&&(r.value=String(t)),r}function E0(e,n){if(n)switch(e){case ke.Ins:return Er.InlineIns;case ke.Del:return Er.InlineDel}else switch(e){case ke.Ins:return Er.Ins;case ke.Del:return Er.Del}}function M0(e){return Sn(e,(n,t,r)=>{var o;if(n.type==="listItem"||n.type===ke.Ins||n.type===ke.Del||!((o=n.data)!=null&&o.diff))return!0;const i=n.data.diff;delete n.data.diff;const l=R1(n);return dh(r,n,C0(E0(i,l),[n])),!0}),e}const gc={}.hasOwnProperty;function T0(e,n){const t=n||{};function r(i,...l){let o=r.invalid;const u=r.handlers;if(i&&gc.call(i,e)){const a=String(i[e]);o=gc.call(u,a)?u[a]:r.unknown}if(o)return o.call(this,i,...l)}return r.handlers=t.handlers||{},r.invalid=t.invalid,r.unknown=t.unknown,r}const P0={}.hasOwnProperty;function Ih(e,n){let t=-1,r;if(n.extensions)for(;++t<n.extensions.length;)Ih(e,n.extensions[t]);for(r in n)if(P0.call(n,r))switch(r){case"extensions":break;case"unsafe":{yc(e[r],n[r]);break}case"join":{yc(e[r],n[r]);break}case"handlers":{z0(e[r],n[r]);break}default:e.options[r]=n[r]}return e}function yc(e,n){n&&e.push(...n)}function z0(e,n){n&&Object.assign(e,n)}function I0(e,n,t,r){const i=t.enter("blockquote"),l=t.createTracker(r);l.move("> "),l.shift(2);const o=t.indentLines(t.containerFlow(e,l.current()),L0);return i(),o}function L0(e,n,t){return">"+(t?"":" ")+e}function Lh(e,n){return kc(e,n.inConstruct,!0)&&!kc(e,n.notInConstruct,!1)}function kc(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function xc(e,n,t,r){let i=-1;for(;++i<t.unsafe.length;)if(t.unsafe[i].character===`
`&&Lh(t.stack,t.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function A0(e,n){const t=String(e);let r=t.indexOf(n),i=r,l=0,o=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++l>o&&(o=l):l=1,i=r+n.length,r=t.indexOf(n,i);return o}function Pu(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function D0(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function F0(e,n,t,r){const i=D0(t),l=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(Pu(e,t)){const c=t.enter("codeIndented"),d=t.indentLines(l,N0);return c(),d}const u=t.createTracker(r),a=i.repeat(Math.max(A0(l,i)+1,3)),s=t.enter("codeFenced");let f=u.move(a);if(e.lang){const c=t.enter(`codeFencedLang${o}`);f+=u.move(t.safe(e.lang,{before:f,after:" ",encode:["`"],...u.current()})),c()}if(e.lang&&e.meta){const c=t.enter(`codeFencedMeta${o}`);f+=u.move(" "),f+=u.move(t.safe(e.meta,{before:f,after:`
`,encode:["`"],...u.current()})),c()}return f+=u.move(`
`),l&&(f+=u.move(l+`
`)),f+=u.move(a),s(),f}function N0(e,n,t){return(t?"":"    ")+e}function La(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function R0(e,n,t,r){const i=La(t),l=i==='"'?"Quote":"Apostrophe",o=t.enter("definition");let u=t.enter("label");const a=t.createTracker(r);let s=a.move("[");return s+=a.move(t.safe(t.associationId(e),{before:s,after:"]",...a.current()})),s+=a.move("]: "),u(),!e.url||/[\0- \u007F]/.test(e.url)?(u=t.enter("destinationLiteral"),s+=a.move("<"),s+=a.move(t.safe(e.url,{before:s,after:">",...a.current()})),s+=a.move(">")):(u=t.enter("destinationRaw"),s+=a.move(t.safe(e.url,{before:s,after:e.title?" ":`
`,...a.current()}))),u(),e.title&&(u=t.enter(`title${l}`),s+=a.move(" "+i),s+=a.move(t.safe(e.title,{before:s,after:i,...a.current()})),s+=a.move(i),u()),o(),s}function b0(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function it(e){return"&#x"+e.toString(16).toUpperCase()+";"}const ze=at(/[A-Za-z]/),Re=at(/[\dA-Za-z]/),j0=at(/[#-'*+\--9=?A-Z^-~]/);function kl(e){return e!==null&&(e<32||e===127)}const zu=at(/\d/),$0=at(/[\dA-Fa-f]/),O0=at(/[!-/:-@[-`{-~]/);function b(e){return e!==null&&e<-2}function Z(e){return e!==null&&(e<0||e===32)}function B(e){return e===-2||e===-1||e===32}const $l=at(new RegExp("\\p{P}|\\p{S}","u")),Ct=at(/\s/);function at(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function rr(e){if(e===null||Z(e)||Ct(e))return 1;if($l(e))return 2}function xl(e,n,t){const r=rr(e),i=rr(n);return r===void 0?i===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Ah.peek=B0;function Ah(e,n,t,r){const i=b0(t),l=t.enter("emphasis"),o=t.createTracker(r),u=o.move(i);let a=o.move(t.containerPhrasing(e,{after:i,before:u,...o.current()}));const s=a.charCodeAt(0),f=xl(r.before.charCodeAt(r.before.length-1),s,i);f.inside&&(a=it(s)+a.slice(1));const c=a.charCodeAt(a.length-1),d=xl(r.after.charCodeAt(0),c,i);d.inside&&(a=a.slice(0,-1)+it(c));const h=o.move(i);return l(),t.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},u+a+h}function B0(e,n,t){return t.options.emphasis||"*"}const H0={};function Aa(e,n){const t=H0,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Dh(e,r,i)}function Dh(e,n,t){if(U0(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return wc(e.children,n,t)}return Array.isArray(e)?wc(e,n,t):""}function wc(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=Dh(e[i],n,t);return r.join("")}function U0(e){return!!(e&&typeof e=="object")}function Fh(e,n){let t=!1;return Sn(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,Mu}),!!((!e.depth||e.depth<3)&&Aa(e)&&(n.options.setext||t))}function V0(e,n,t,r){const i=Math.max(Math.min(6,e.depth||1),1),l=t.createTracker(r);if(Fh(e,t)){const f=t.enter("headingSetext"),c=t.enter("phrasing"),d=t.containerPhrasing(e,{...l.current(),before:`
`,after:`
`});return c(),f(),d+`
`+(i===1?"=":"-").repeat(d.length-(Math.max(d.lastIndexOf("\r"),d.lastIndexOf(`
`))+1))}const o="#".repeat(i),u=t.enter("headingAtx"),a=t.enter("phrasing");l.move(o+" ");let s=t.containerPhrasing(e,{before:"# ",after:`
`,...l.current()});return/^[\t ]/.test(s)&&(s=it(s.charCodeAt(0))+s.slice(1)),s=s?o+" "+s:o,t.options.closeAtx&&(s+=" "+o),a(),u(),s}Nh.peek=W0;function Nh(e){return e.value||""}function W0(){return"<"}Rh.peek=Q0;function Rh(e,n,t,r){const i=La(t),l=i==='"'?"Quote":"Apostrophe",o=t.enter("image");let u=t.enter("label");const a=t.createTracker(r);let s=a.move("![");return s+=a.move(t.safe(e.alt,{before:s,after:"]",...a.current()})),s+=a.move("]("),u(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(u=t.enter("destinationLiteral"),s+=a.move("<"),s+=a.move(t.safe(e.url,{before:s,after:">",...a.current()})),s+=a.move(">")):(u=t.enter("destinationRaw"),s+=a.move(t.safe(e.url,{before:s,after:e.title?" ":")",...a.current()}))),u(),e.title&&(u=t.enter(`title${l}`),s+=a.move(" "+i),s+=a.move(t.safe(e.title,{before:s,after:i,...a.current()})),s+=a.move(i),u()),s+=a.move(")"),o(),s}function Q0(){return"!"}bh.peek=q0;function bh(e,n,t,r){const i=e.referenceType,l=t.enter("imageReference");let o=t.enter("label");const u=t.createTracker(r);let a=u.move("![");const s=t.safe(e.alt,{before:a,after:"]",...u.current()});a+=u.move(s+"]["),o();const f=t.stack;t.stack=[],o=t.enter("reference");const c=t.safe(t.associationId(e),{before:a,after:"]",...u.current()});return o(),t.stack=f,l(),i==="full"||!s||s!==c?a+=u.move(c+"]"):i==="shortcut"?a=a.slice(0,-1):a+=u.move("]"),a}function q0(){return"!"}jh.peek=Y0;function jh(e,n,t){let r=e.value||"",i="`",l=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++l<t.unsafe.length;){const o=t.unsafe[l],u=t.compilePattern(o);let a;if(o.atBreak)for(;a=u.exec(r);){let s=a.index;r.charCodeAt(s)===10&&r.charCodeAt(s-1)===13&&s--,r=r.slice(0,s)+" "+r.slice(a.index+1)}}return i+r+i}function Y0(){return"`"}function $h(e,n){const t=Aa(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Oh.peek=X0;function Oh(e,n,t,r){const i=La(t),l=i==='"'?"Quote":"Apostrophe",o=t.createTracker(r);let u,a;if($h(e,t)){const f=t.stack;t.stack=[],u=t.enter("autolink");let c=o.move("<");return c+=o.move(t.containerPhrasing(e,{before:c,after:">",...o.current()})),c+=o.move(">"),u(),t.stack=f,c}u=t.enter("link"),a=t.enter("label");let s=o.move("[");return s+=o.move(t.containerPhrasing(e,{before:s,after:"](",...o.current()})),s+=o.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=t.enter("destinationLiteral"),s+=o.move("<"),s+=o.move(t.safe(e.url,{before:s,after:">",...o.current()})),s+=o.move(">")):(a=t.enter("destinationRaw"),s+=o.move(t.safe(e.url,{before:s,after:e.title?" ":")",...o.current()}))),a(),e.title&&(a=t.enter(`title${l}`),s+=o.move(" "+i),s+=o.move(t.safe(e.title,{before:s,after:i,...o.current()})),s+=o.move(i),a()),s+=o.move(")"),u(),s}function X0(e,n,t){return $h(e,t)?"<":"["}Bh.peek=G0;function Bh(e,n,t,r){const i=e.referenceType,l=t.enter("linkReference");let o=t.enter("label");const u=t.createTracker(r);let a=u.move("[");const s=t.containerPhrasing(e,{before:a,after:"]",...u.current()});a+=u.move(s+"]["),o();const f=t.stack;t.stack=[],o=t.enter("reference");const c=t.safe(t.associationId(e),{before:a,after:"]",...u.current()});return o(),t.stack=f,l(),i==="full"||!s||s!==c?a+=u.move(c+"]"):i==="shortcut"?a=a.slice(0,-1):a+=u.move("]"),a}function G0(){return"["}function Da(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function J0(e){const n=Da(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function K0(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function Hh(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function Z0(e,n,t,r){const i=t.enter("list"),l=t.bulletCurrent;let o=e.ordered?K0(t):Da(t);const u=e.ordered?o==="."?")":".":J0(t);let a=n&&t.bulletLastUsed?o===t.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&f&&(!f.children||!f.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(a=!0),Hh(t)===o&&f){let c=-1;for(;++c<e.children.length;){const d=e.children[c];if(d&&d.type==="listItem"&&d.children&&d.children[0]&&d.children[0].type==="thematicBreak"){a=!0;break}}}}a&&(o=u),t.bulletCurrent=o;const s=t.containerFlow(e,r);return t.bulletLastUsed=o,t.bulletCurrent=l,i(),s}function ey(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function ny(e,n,t,r){const i=ey(t);let l=t.bulletCurrent||Da(t);n&&n.type==="list"&&n.ordered&&(l=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+l);let o=l.length+1;(i==="tab"||i==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(o=Math.ceil(o/4)*4);const u=t.createTracker(r);u.move(l+" ".repeat(o-l.length)),u.shift(o);const a=t.enter("listItem"),s=t.indentLines(t.containerFlow(e,u.current()),f);return a(),s;function f(c,d,h){return d?(h?"":" ".repeat(o))+c:(h?l:l+" ".repeat(o-l.length))+c}}function ty(e,n,t,r){const i=t.enter("paragraph"),l=t.enter("phrasing"),o=t.containerPhrasing(e,r);return l(),i(),o}const ry=Rl(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function iy(e,n,t,r){return(e.children.some(function(o){return ry(o)})?t.containerPhrasing:t.containerFlow).call(t,e,r)}function ly(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}Uh.peek=oy;function Uh(e,n,t,r){const i=ly(t),l=t.enter("strong"),o=t.createTracker(r),u=o.move(i+i);let a=o.move(t.containerPhrasing(e,{after:i,before:u,...o.current()}));const s=a.charCodeAt(0),f=xl(r.before.charCodeAt(r.before.length-1),s,i);f.inside&&(a=it(s)+a.slice(1));const c=a.charCodeAt(a.length-1),d=xl(r.after.charCodeAt(0),c,i);d.inside&&(a=a.slice(0,-1)+it(c));const h=o.move(i+i);return l(),t.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},u+a+h}function oy(e,n,t){return t.options.strong||"*"}function uy(e,n,t,r){return t.safe(e.value,r)}function ay(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function sy(e,n,t){const r=(Hh(t)+(t.options.ruleSpaces?" ":"")).repeat(ay(t));return t.options.ruleSpaces?r.slice(0,-1):r}const Fa={blockquote:I0,break:xc,code:F0,definition:R0,emphasis:Ah,hardBreak:xc,heading:V0,html:Nh,image:Rh,imageReference:bh,inlineCode:jh,link:Oh,linkReference:Bh,list:Z0,listItem:ny,paragraph:ty,root:iy,strong:Uh,text:uy,thematicBreak:sy},cy=[fy];function fy(e,n,t,r){if(n.type==="code"&&Pu(n,r)&&(e.type==="list"||e.type===n.type&&Pu(e,r)))return!1;if("spread"in t&&typeof t.spread=="boolean")return e.type==="paragraph"&&(e.type===n.type||n.type==="definition"||n.type==="heading"&&Fh(n,r))?void 0:t.spread?1:0}const ct=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"],dy=[{character:"	",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",before:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"\r",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:`
`,inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:" ",after:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",before:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"!",after:"\\[",inConstruct:"phrasing",notInConstruct:ct},{character:'"',inConstruct:"titleQuote"},{atBreak:!0,character:"#"},{character:"#",inConstruct:"headingAtx",after:`(?:[\r
]|$)`},{character:"&",after:"[#A-Za-z]",inConstruct:"phrasing"},{character:"'",inConstruct:"titleApostrophe"},{character:"(",inConstruct:"destinationRaw"},{before:"\\]",character:"(",inConstruct:"phrasing",notInConstruct:ct},{atBreak:!0,before:"\\d+",character:")"},{character:")",inConstruct:"destinationRaw"},{atBreak:!0,character:"*",after:`(?:[ 	\r
*])`},{character:"*",inConstruct:"phrasing",notInConstruct:ct},{atBreak:!0,character:"+",after:`(?:[ 	\r
])`},{atBreak:!0,character:"-",after:`(?:[ 	\r
-])`},{atBreak:!0,before:"\\d+",character:".",after:`(?:[ 	\r
]|$)`},{atBreak:!0,character:"<",after:"[!/?A-Za-z]"},{character:"<",after:"[!/?A-Za-z]",inConstruct:"phrasing",notInConstruct:ct},{character:"<",inConstruct:"destinationLiteral"},{atBreak:!0,character:"="},{atBreak:!0,character:">"},{character:">",inConstruct:"destinationLiteral"},{atBreak:!0,character:"["},{character:"[",inConstruct:"phrasing",notInConstruct:ct},{character:"[",inConstruct:["label","reference"]},{character:"\\",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"]",inConstruct:["label","reference"]},{atBreak:!0,character:"_"},{character:"_",inConstruct:"phrasing",notInConstruct:ct},{atBreak:!0,character:"`"},{character:"`",inConstruct:["codeFencedLangGraveAccent","codeFencedMetaGraveAccent"]},{character:"`",inConstruct:"phrasing",notInConstruct:ct},{atBreak:!0,character:"~"}],vc=document.createElement("i");function Na(e){const n="&"+e+";";vc.innerHTML=n;const t=vc.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function Vh(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}const hy=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Wh(e){return e.replace(hy,py)}function py(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),l=i===120||i===88;return Vh(t.slice(l?2:1),l?16:10)}return Na(t)||e}function my(e){return e.label||!e.identifier?e.label||"":Wh(e.identifier)}function gy(e){if(!e._compiled){const n=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=new RegExp((n?"("+n+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function yy(e,n,t){const r=n.indexStack,i=e.children||[],l=[];let o=-1,u=t.before,a;r.push(-1);let s=n.createTracker(t);for(;++o<i.length;){const f=i[o];let c;if(r[r.length-1]=o,o+1<i.length){let y=n.handle.handlers[i[o+1].type];y&&y.peek&&(y=y.peek),c=y?y(i[o+1],e,n,{before:"",after:"",...s.current()}).charAt(0):""}else c=t.after;l.length>0&&(u==="\r"||u===`
`)&&f.type==="html"&&(l[l.length-1]=l[l.length-1].replace(/(\r?\n|\r)$/," "),u=" ",s=n.createTracker(t),s.move(l.join("")));let d=n.handle(f,e,n,{...s.current(),after:c,before:u});a&&a===d.slice(0,1)&&(d=it(a.charCodeAt(0))+d.slice(1));const h=n.attentionEncodeSurroundingInfo;n.attentionEncodeSurroundingInfo=void 0,a=void 0,h&&(l.length>0&&h.before&&u===l[l.length-1].slice(-1)&&(l[l.length-1]=l[l.length-1].slice(0,-1)+it(u.charCodeAt(0))),h.after&&(a=c)),s.move(d),l.push(d),u=d.slice(-1)}return r.pop(),l.join("")}function ky(e,n,t){const r=n.indexStack,i=e.children||[],l=n.createTracker(t),o=[];let u=-1;for(r.push(-1);++u<i.length;){const a=i[u];r[r.length-1]=u,o.push(l.move(n.handle(a,e,n,{before:`
`,after:`
`,...l.current()}))),a.type!=="list"&&(n.bulletLastUsed=void 0),u<i.length-1&&o.push(l.move(xy(a,i[u+1],e,n)))}return r.pop(),o.join("")}function xy(e,n,t,r){let i=r.join.length;for(;i--;){const l=r.join[i](e,n,t,r);if(l===!0||l===1)break;if(typeof l=="number")return`
`.repeat(1+l);if(l===!1)return`

<!---->

`}return`

`}const wy=/\r?\n|\r/g;function vy(e,n){const t=[];let r=0,i=0,l;for(;l=wy.exec(e);)o(e.slice(r,l.index)),t.push(l[0]),r=l.index+l[0].length,i++;return o(e.slice(r)),t.join("");function o(u){t.push(n(u,i,!u))}}function Sy(e,n,t){const r=(t.before||"")+(n||"")+(t.after||""),i=[],l=[],o={};let u=-1;for(;++u<e.unsafe.length;){const f=e.unsafe[u];if(!Lh(e.stack,f))continue;const c=e.compilePattern(f);let d;for(;d=c.exec(r);){const h="before"in f||!!f.atBreak,y="after"in f,S=d.index+(h?d[1].length:0);i.includes(S)?(o[S].before&&!h&&(o[S].before=!1),o[S].after&&!y&&(o[S].after=!1)):(i.push(S),o[S]={before:h,after:y})}}i.sort(_y);let a=t.before?t.before.length:0;const s=r.length-(t.after?t.after.length:0);for(u=-1;++u<i.length;){const f=i[u];f<a||f>=s||f+1<s&&i[u+1]===f+1&&o[f].after&&!o[f+1].before&&!o[f+1].after||i[u-1]===f-1&&o[f].before&&!o[f-1].before&&!o[f-1].after||(a!==f&&l.push(Sc(r.slice(a,f),"\\")),a=f,/[!-/:-@[-`{-~]/.test(r.charAt(f))&&(!t.encode||!t.encode.includes(r.charAt(f)))?l.push("\\"):(l.push(it(r.charCodeAt(f))),a++))}return l.push(Sc(r.slice(a,s),t.after)),l.join("")}function _y(e,n){return e-n}function Sc(e,n){const t=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],l=e+n;let o=-1,u=0,a;for(;a=t.exec(l);)r.push(a.index);for(;++o<r.length;)u!==r[o]&&i.push(e.slice(u,r[o])),i.push("\\"),u=r[o];return i.push(e.slice(u)),i.join("")}function Cy(e){const n=e||{},t=n.now||{};let r=n.lineShift||0,i=t.line||1,l=t.column||1;return{move:a,current:o,shift:u};function o(){return{now:{line:i,column:l},lineShift:r}}function u(s){r+=s}function a(s){const f=s||"",c=f.split(/\r?\n|\r/g),d=c[c.length-1];return i+=c.length-1,l=c.length===1?l+d.length:1+d.length+r,f}}function Ey(e,n){const t=n||{},r={associationId:my,containerPhrasing:zy,containerFlow:Iy,createTracker:Cy,compilePattern:gy,enter:l,handlers:{...Fa},handle:void 0,indentLines:vy,indexStack:[],join:[...cy],options:{},safe:Ly,stack:[],unsafe:[...dy]};Ih(r,t),r.options.tightDefinitions&&r.join.push(Py),r.handle=T0("type",{invalid:My,unknown:Ty,handlers:r.handlers});let i=r.handle(e,void 0,r,{before:`
`,after:`
`,now:{line:1,column:1},lineShift:0});return i&&i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i;function l(o){return r.stack.push(o),u;function u(){r.stack.pop()}}}function My(e){throw new Error("Cannot handle value `"+e+"`, expected node")}function Ty(e){const n=e;throw new Error("Cannot handle unknown node `"+n.type+"`")}function Py(e,n){if(e.type==="definition"&&e.type===n.type)return 0}function zy(e,n){return yy(e,this,n)}function Iy(e,n){return ky(e,this,n)}function Ly(e,n){return Sy(this,e,n)}function Ay(e){const n=this;n.compiler=t;function t(r){return Ey(r,{...n.data("settings"),...e,extensions:n.data("toMarkdownExtensions")||[]})}}function _c(e){if(e)throw e}var Wi=Object.prototype.hasOwnProperty,Qh=Object.prototype.toString,Cc=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,Mc=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Qh.call(n)==="[object Array]"},Tc=function(n){if(!n||Qh.call(n)!=="[object Object]")return!1;var t=Wi.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&Wi.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||Wi.call(n,i)},Pc=function(n,t){Cc&&t.name==="__proto__"?Cc(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},zc=function(n,t){if(t==="__proto__")if(Wi.call(n,t)){if(Ec)return Ec(n,t).value}else return;return n[t]},Dy=function e(){var n,t,r,i,l,o,u=arguments[0],a=1,s=arguments.length,f=!1;for(typeof u=="boolean"&&(f=u,u=arguments[1]||{},a=2),(u==null||typeof u!="object"&&typeof u!="function")&&(u={});a<s;++a)if(n=arguments[a],n!=null)for(t in n)r=zc(u,t),i=zc(n,t),u!==i&&(f&&i&&(Tc(i)||(l=Mc(i)))?(l?(l=!1,o=r&&Mc(r)?r:[]):o=r&&Tc(r)?r:{},Pc(u,{name:t,newValue:e(f,o,i)})):typeof i<"u"&&Pc(u,{name:t,newValue:i}));return u};const ko=Gc(Dy);function Iu(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Fy(){const e=[],n={run:t,use:r};return n;function t(...i){let l=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);u(null,...i);function u(a,...s){const f=e[++l];let c=-1;if(a){o(a);return}for(;++c<i.length;)(s[c]===null||s[c]===void 0)&&(s[c]=i[c]);i=s,f?Ny(f,u)(...s):o(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function Ny(e,n){let t;return r;function r(...o){const u=e.length>o.length;let a;u&&o.push(i);try{a=e.apply(this,o)}catch(s){const f=s;if(u&&t)throw f;return i(f)}u||(a&&a.then&&typeof a.then=="function"?a.then(l,i):a instanceof Error?i(a):l(a))}function i(o,...u){t||(t=!0,n(o,...u))}function l(o){i(null,o)}}function Rr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Ic(e.position):"start"in e||"end"in e?Ic(e):"line"in e||"column"in e?Lu(e):""}function Lu(e){return Lc(e&&e.line)+":"+Lc(e&&e.column)}function Ic(e){return Lu(e&&e.start)+"-"+Lu(e&&e.end)}function Lc(e){return e&&typeof e=="number"?e:1}class Oe extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",l={},o=!1;if(t&&("line"in t&&"column"in t?l={place:t}:"start"in t&&"end"in t?l={place:t}:"type"in t?l={ancestors:[t],place:t.position}:l={...t}),typeof n=="string"?i=n:!l.cause&&n&&(o=!0,i=n.message,l.cause=n),!l.ruleId&&!l.source&&typeof r=="string"){const a=r.indexOf(":");a===-1?l.ruleId=r:(l.source=r.slice(0,a),l.ruleId=r.slice(a+1))}if(!l.place&&l.ancestors&&l.ancestors){const a=l.ancestors[l.ancestors.length-1];a&&(l.place=a.position)}const u=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=u?u.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=u?u.line:void 0,this.name=Rr(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=o&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual,this.expected,this.note,this.url}}Oe.prototype.file="";Oe.prototype.name="";Oe.prototype.reason="";Oe.prototype.message="";Oe.prototype.stack="";Oe.prototype.column=void 0;Oe.prototype.line=void 0;Oe.prototype.ancestors=void 0;Oe.prototype.cause=void 0;Oe.prototype.fatal=void 0;Oe.prototype.place=void 0;Oe.prototype.ruleId=void 0;Oe.prototype.source=void 0;const kn={basename:Ry,dirname:by,extname:jy,join:$y,sep:"/"};function Ry(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');oi(e);let t=0,r=-1,i=e.length,l;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let o=-1,u=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else o<0&&(l=!0,o=i+1),u>-1&&(e.codePointAt(i)===n.codePointAt(u--)?u<0&&(r=i):(u=-1,r=o));return t===r?r=o:r<0&&(r=e.length),e.slice(t,r)}function by(e){if(oi(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function jy(e){oi(e);let n=e.length,t=-1,r=0,i=-1,l=0,o;for(;n--;){const u=e.codePointAt(n);if(u===47){if(o){r=n+1;break}continue}t<0&&(o=!0,t=n+1),u===46?i<0?i=n:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||t<0||l===0||l===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function $y(...e){let n=-1,t;for(;++n<e.length;)oi(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":Oy(t)}function Oy(e){oi(e);const n=e.codePointAt(0)===47;let t=By(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function By(e,n){let t="",r=0,i=-1,l=0,o=-1,u,a;for(;++o<=e.length;){if(o<e.length)u=e.codePointAt(o);else{if(u===47)break;u=47}if(u===47){if(!(i===o-1||l===1))if(i!==o-1&&l===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(a=t.lastIndexOf("/"),a!==t.length-1){a<0?(t="",r=0):(t=t.slice(0,a),r=t.length-1-t.lastIndexOf("/")),i=o,l=0;continue}}else if(t.length>0){t="",r=0,i=o,l=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,o):t=e.slice(i+1,o),r=o-i-1;i=o,l=0}else u===46&&l>-1?l++:l=-1}return t}function oi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Hy={cwd:Uy};function Uy(){return"/"}function Au(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Vy(e){if(typeof e=="string")e=new URL(e);else if(!Au(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return Wy(e)}function Wy(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const xo=["history","path","basename","stem","extname","dirname"];class Qy{constructor(n){let t;n?Au(n)?t={path:n}:typeof n=="string"||qy(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":Hy.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<xo.length;){const l=xo[r];l in t&&t[l]!==void 0&&t[l]!==null&&(this[l]=l==="history"?[...t[l]]:t[l])}let i;for(i in t)xo.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?kn.basename(this.path):void 0}set basename(n){vo(n,"basename"),wo(n,"basename"),this.path=kn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?kn.dirname(this.path):void 0}set dirname(n){Ac(this.basename,"dirname"),this.path=kn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?kn.extname(this.path):void 0}set extname(n){if(wo(n,"extname"),Ac(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=kn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Au(n)&&(n=Vy(n)),vo(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?kn.basename(this.path,this.extname):void 0}set stem(n){vo(n,"stem"),wo(n,"stem"),this.path=kn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new Oe(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function wo(e,n){if(e&&e.includes(kn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+kn.sep+"`")}function vo(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function Ac(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function qy(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Yy=function(e){const r=this.constructor.prototype,i=r[e],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l},Xy={}.hasOwnProperty;class Ra extends Yy{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Fy()}copy(){const n=new Ra;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(ko(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Co("data",this.frozen),this.namespace[n]=t,this):Xy.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Co("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Ti(n),r=this.parser||this.Parser;return So("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),So("process",this.parser||this.Parser),_o("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(l,o){const u=Ti(n),a=r.parse(u);r.run(a,u,function(f,c,d){if(f||!c||!d)return s(f);const h=c,y=r.stringify(h,d);Jy(y)?d.value=y:d.result=y,s(f,d)});function s(f,c){f||!c?o(f):l?l(c):t(void 0,c)}}}processSync(n){let t=!1,r;return this.freeze(),So("processSync",this.parser||this.Parser),_o("processSync",this.compiler||this.Compiler),this.process(n,i),Fc("processSync","process",t),r;function i(l,o){t=!0,_c(l),r=o}}run(n,t,r){Dc(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?l(void 0,r):new Promise(l);function l(o,u){const a=Ti(t);i.run(n,a,s);function s(f,c,d){const h=c||n;f?u(f):o?o(h):r(void 0,h,d)}}}runSync(n,t){let r=!1,i;return this.run(n,t,l),Fc("runSync","run",r),i;function l(o,u){_c(o),i=u,r=!0}}stringify(n,t){this.freeze();const r=Ti(t),i=this.compiler||this.Compiler;return _o("stringify",i),Dc(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(Co("use",this.frozen),n!=null)if(typeof n=="function")a(n,t);else if(typeof n=="object")Array.isArray(n)?u(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function l(s){if(typeof s=="function")a(s,[]);else if(typeof s=="object")if(Array.isArray(s)){const[f,...c]=s;a(f,c)}else o(s);else throw new TypeError("Expected usable value, not `"+s+"`")}function o(s){if(!("plugins"in s)&&!("settings"in s))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");u(s.plugins),s.settings&&(i.settings=ko(!0,i.settings,s.settings))}function u(s){let f=-1;if(s!=null)if(Array.isArray(s))for(;++f<s.length;){const c=s[f];l(c)}else throw new TypeError("Expected a list of plugins, not `"+s+"`")}function a(s,f){let c=-1,d=-1;for(;++c<r.length;)if(r[c][0]===s){d=c;break}if(d===-1)r.push([s,...f]);else if(f.length>0){let[h,...y]=f;const S=r[d][1];Iu(S)&&Iu(h)&&(h=ko(!0,S,h)),r[d]=[s,h,...y]}}}}const qh=new Ra().freeze();function So(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function _o(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Co(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Dc(e){if(!Iu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Fc(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Ti(e){return Gy(e)?e:new Qy(e)}function Gy(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Jy(e){return typeof e=="string"||Ky(e)}function Ky(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}function Nc(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(n);for(;i!==-1;)r++,i=t.indexOf(n,i+n.length);return r}function Zy(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function ek(e,n,t){const i=Rl((t||{}).ignore||[]),l=nk(n);let o=-1;for(;++o<l.length;)wh(e,"text",u);function u(s,f){let c=-1,d;for(;++c<f.length;){const h=f[c],y=d?d.children:void 0;if(i(h,y?y.indexOf(h):void 0,d))return;d=h}if(d)return a(s,f)}function a(s,f){const c=f[f.length-1],d=l[o][0],h=l[o][1];let y=0;const T=c.children.indexOf(s);let p=!1,m=[];d.lastIndex=0;let g=d.exec(s.value);for(;g;){const _=g.index,E={index:g.index,input:g.input,stack:[...f,s]};let w=h(...g,E);if(typeof w=="string"&&(w=w.length>0?{type:"text",value:w}:void 0),w===!1?d.lastIndex=_+1:(y!==_&&m.push({type:"text",value:s.value.slice(y,_)}),Array.isArray(w)?m.push(...w):w&&m.push(w),y=_+g[0].length,p=!0),!d.global)break;g=d.exec(s.value)}return p?(y<s.value.length&&m.push({type:"text",value:s.value.slice(y)}),c.children.splice(T,1,...m)):m=[s],T+m.length}}function nk(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<t.length;){const i=t[r];n.push([tk(i[0]),rk(i[1])])}return n}function tk(e){return typeof e=="string"?new RegExp(Zy(e),"g"):e}function rk(e){return typeof e=="function"?e:function(){return e}}const Eo="phrasing",Mo=["autolink","link","image","label"];function ik(){return{transforms:[fk],enter:{literalAutolink:ok,literalAutolinkEmail:To,literalAutolinkHttp:To,literalAutolinkWww:To},exit:{literalAutolink:ck,literalAutolinkEmail:sk,literalAutolinkHttp:uk,literalAutolinkWww:ak}}}function lk(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Eo,notInConstruct:Mo},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Eo,notInConstruct:Mo},{character:":",before:"[ps]",after:"\\/",inConstruct:Eo,notInConstruct:Mo}]}}function ok(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function To(e){this.config.enter.autolinkProtocol.call(this,e)}function uk(e){this.config.exit.autolinkProtocol.call(this,e)}function ak(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function sk(e){this.config.exit.autolinkEmail.call(this,e)}function ck(e){this.exit(e)}function fk(e){ek(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,dk],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),hk]],{ignore:["link","linkReference"]})}function dk(e,n,t,r,i){let l="";if(!Yh(i)||(/^w/i.test(n)&&(t=n+t,n="",l="http://"),!pk(t)))return!1;const o=mk(t+r);if(!o[0])return!1;const u={type:"link",title:null,url:l+n+o[0],children:[{type:"text",value:n+o[0]}]};return o[1]?[u,{type:"text",value:o[1]}]:u}function hk(e,n,t,r){return!Yh(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function pk(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function mk(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],r=t.indexOf(")");const i=Nc(e,"(");let l=Nc(e,")");for(;r!==-1&&i>l;)e+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),l++;return[e,t]}function Yh(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||Ct(t)||$l(t))&&(!n||t!==47)}function hn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}Xh.peek=Ck;function gk(){this.buffer()}function yk(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function kk(){this.buffer()}function xk(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function wk(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=hn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function vk(e){this.exit(e)}function Sk(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=hn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function _k(e){this.exit(e)}function Ck(){return"["}function Xh(e,n,t,r){const i=t.createTracker(r);let l=i.move("[^");const o=t.enter("footnoteReference"),u=t.enter("reference");return l+=i.move(t.safe(t.associationId(e),{after:"]",before:l})),u(),o(),l+=i.move("]"),l}function Ek(){return{enter:{gfmFootnoteCallString:gk,gfmFootnoteCall:yk,gfmFootnoteDefinitionLabelString:kk,gfmFootnoteDefinition:xk},exit:{gfmFootnoteCallString:wk,gfmFootnoteCall:vk,gfmFootnoteDefinitionLabelString:Sk,gfmFootnoteDefinition:_k}}}function Mk(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:Xh},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,l,o){const u=l.createTracker(o);let a=u.move("[^");const s=l.enter("footnoteDefinition"),f=l.enter("label");return a+=u.move(l.safe(l.associationId(r),{before:a,after:"]"})),f(),a+=u.move("]:"),r.children&&r.children.length>0&&(u.shift(4),a+=u.move((n?`
`:" ")+l.indentLines(l.containerFlow(r,u.current()),n?Gh:Tk))),s(),a}}function Tk(e,n,t){return n===0?e:Gh(e,n,t)}function Gh(e,n,t){return(t?"":"    ")+e}const Pk=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Jh.peek=Dk;function zk(){return{canContainEols:["delete"],enter:{strikethrough:Lk},exit:{strikethrough:Ak}}}function Ik(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Pk}],handlers:{delete:Jh}}}function Lk(e){this.enter({type:"delete",children:[]},e)}function Ak(e){this.exit(e)}function Jh(e,n,t,r){const i=t.createTracker(r),l=t.enter("strikethrough");let o=i.move("~~");return o+=t.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),l(),o}function Dk(){return"~"}function Fk(e){return e.length}function Nk(e,n){const t=n||{},r=(t.align||[]).concat(),i=t.stringLength||Fk,l=[],o=[],u=[],a=[];let s=0,f=-1;for(;++f<e.length;){const S=[],T=[];let p=-1;for(e[f].length>s&&(s=e[f].length);++p<e[f].length;){const m=Rk(e[f][p]);if(t.alignDelimiters!==!1){const g=i(m);T[p]=g,(a[p]===void 0||g>a[p])&&(a[p]=g)}S.push(m)}o[f]=S,u[f]=T}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<s;)l[c]=Rc(r[c]);else{const S=Rc(r);for(;++c<s;)l[c]=S}c=-1;const d=[],h=[];for(;++c<s;){const S=l[c];let T="",p="";S===99?(T=":",p=":"):S===108?T=":":S===114&&(p=":");let m=t.alignDelimiters===!1?1:Math.max(1,a[c]-T.length-p.length);const g=T+"-".repeat(m)+p;t.alignDelimiters!==!1&&(m=T.length+m+p.length,m>a[c]&&(a[c]=m),h[c]=m),d[c]=g}o.splice(1,0,d),u.splice(1,0,h),f=-1;const y=[];for(;++f<o.length;){const S=o[f],T=u[f];c=-1;const p=[];for(;++c<s;){const m=S[c]||"";let g="",_="";if(t.alignDelimiters!==!1){const E=a[c]-(T[c]||0),w=l[c];w===114?g=" ".repeat(E):w===99?E%2?(g=" ".repeat(E/2+.5),_=" ".repeat(E/2-.5)):(g=" ".repeat(E/2),_=g):_=" ".repeat(E)}t.delimiterStart!==!1&&!c&&p.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&m==="")&&(t.delimiterStart!==!1||c)&&p.push(" "),t.alignDelimiters!==!1&&p.push(g),p.push(m),t.alignDelimiters!==!1&&p.push(_),t.padding!==!1&&p.push(" "),(t.delimiterEnd!==!1||c!==s-1)&&p.push("|")}y.push(t.delimiterEnd===!1?p.join("").replace(/ +$/,""):p.join(""))}return y.join(`
`)}function Rk(e){return e==null?"":String(e)}function Rc(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function bk(){return{enter:{table:jk,tableData:bc,tableHeader:bc,tableRow:Ok},exit:{codeText:Bk,table:$k,tableData:Po,tableHeader:Po,tableRow:Po}}}function jk(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function $k(e){this.exit(e),this.data.inTable=void 0}function Ok(e){this.enter({type:"tableRow",children:[]},e)}function Po(e){this.exit(e)}function bc(e){this.enter({type:"tableCell",children:[]},e)}function Bk(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,Hk));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function Hk(e,n){return n==="|"?n:e}function Uk(e){const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,i=n.stringLength,l=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:d,table:o,tableCell:a,tableRow:u}};function o(h,y,S,T){return s(f(h,S,T),h.align)}function u(h,y,S,T){const p=c(h,S,T),m=s([p]);return m.slice(0,m.indexOf(`
`))}function a(h,y,S,T){const p=S.enter("tableCell"),m=S.enter("phrasing"),g=S.containerPhrasing(h,{...T,before:l,after:l});return m(),p(),g}function s(h,y){return Nk(h,{align:y,alignDelimiters:r,padding:t,stringLength:i})}function f(h,y,S){const T=h.children;let p=-1;const m=[],g=y.enter("table");for(;++p<T.length;)m[p]=c(T[p],y,S);return g(),m}function c(h,y,S){const T=h.children;let p=-1;const m=[],g=y.enter("tableRow");for(;++p<T.length;)m[p]=a(T[p],h,y,S);return g(),m}function d(h,y,S){let T=Fa.inlineCode(h,y,S);return S.stack.includes("tableCell")&&(T=T.replace(/\|/g,"\\$&")),T}}function Vk(){return{exit:{taskListCheckValueChecked:jc,taskListCheckValueUnchecked:jc,paragraph:Qk}}}function Wk(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:qk}}}function jc(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function Qk(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=n.children;let l=-1,o;for(;++l<i.length;){const u=i[l];if(u.type==="paragraph"){o=u;break}}o===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function qk(e,n,t,r){const i=e.children[0],l=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",u=t.createTracker(r);l&&u.move(o);let a=Fa.listItem(e,n,t,{...r,...u.current()});return l&&(a=a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,s)),a;function s(f){return f+o}}function Yk(){return[ik(),Ek(),zk(),bk(),Vk()]}function Xk(e){return{extensions:[lk(),Mk(e),Ik(),Uk(e),Wk()]}}function We(e,n,t,r){const i=e.length;let l=0,o;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(n,t),e.splice(...o);else for(t&&e.splice(n,t);l<r.length;)o=r.slice(l,l+1e4),o.unshift(n,0),e.splice(...o),l+=1e4,n+=1e4}function Je(e,n){return e.length>0?(We(e,e.length,0,n),e):n}const $c={}.hasOwnProperty;function Kh(e){const n={};let t=-1;for(;++t<e.length;)Gk(n,e[t]);return n}function Gk(e,n){let t;for(t in n){const i=($c.call(e,t)?e[t]:void 0)||(e[t]={}),l=n[t];let o;if(l)for(o in l){$c.call(i,o)||(i[o]=[]);const u=l[o];Jk(i[o],Array.isArray(u)?u:u?[u]:[])}}}function Jk(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);We(e,0,0,r)}const Kk={tokenize:ix,partial:!0},Zh={tokenize:lx,partial:!0},ep={tokenize:ox,partial:!0},np={tokenize:ux,partial:!0},Zk={tokenize:ax,partial:!0},tp={name:"wwwAutolink",tokenize:tx,previous:ip},rp={name:"protocolAutolink",tokenize:rx,previous:lp},bn={name:"emailAutolink",tokenize:nx,previous:op},_n={};function ex(){return{text:_n}}let ft=48;for(;ft<123;)_n[ft]=bn,ft++,ft===58?ft=65:ft===91&&(ft=97);_n[43]=bn;_n[45]=bn;_n[46]=bn;_n[95]=bn;_n[72]=[bn,rp];_n[104]=[bn,rp];_n[87]=[bn,tp];_n[119]=[bn,tp];function nx(e,n,t){const r=this;let i,l;return o;function o(c){return!Du(c)||!op.call(r,r.previous)||ba(r.events)?t(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),u(c))}function u(c){return Du(c)?(e.consume(c),u):c===64?(e.consume(c),a):t(c)}function a(c){return c===46?e.check(Zk,f,s)(c):c===45||c===95||Re(c)?(l=!0,e.consume(c),a):f(c)}function s(c){return e.consume(c),i=!0,a}function f(c){return l&&i&&ze(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(c)):t(c)}}function tx(e,n,t){const r=this;return i;function i(o){return o!==87&&o!==119||!ip.call(r,r.previous)||ba(r.events)?t(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Kk,e.attempt(Zh,e.attempt(ep,l),t),t)(o))}function l(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(o)}}function rx(e,n,t){const r=this;let i="",l=!1;return o;function o(c){return(c===72||c===104)&&lp.call(r,r.previous)&&!ba(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),u):t(c)}function u(c){if(ze(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),u;if(c===58){const d=i.toLowerCase();if(d==="http"||d==="https")return e.consume(c),a}return t(c)}function a(c){return c===47?(e.consume(c),l?s:(l=!0,a)):t(c)}function s(c){return c===null||kl(c)||Z(c)||Ct(c)||$l(c)?t(c):e.attempt(Zh,e.attempt(ep,f),t)(c)}function f(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(c)}}function ix(e,n,t){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),l):t(o)}function l(o){return o===null?t(o):n(o)}}function lx(e,n,t){let r,i,l;return o;function o(s){return s===46||s===95?e.check(np,a,u)(s):s===null||Z(s)||Ct(s)||s!==45&&$l(s)?a(s):(l=!0,e.consume(s),o)}function u(s){return s===95?r=!0:(i=r,r=void 0),e.consume(s),o}function a(s){return i||r||!l?t(s):n(s)}}function ox(e,n){let t=0,r=0;return i;function i(o){return o===40?(t++,e.consume(o),i):o===41&&r<t?l(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(np,n,l)(o):o===null||Z(o)||Ct(o)?n(o):(e.consume(o),i)}function l(o){return o===41&&r++,e.consume(o),i}}function ux(e,n,t){return r;function r(u){return u===33||u===34||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===63||u===95||u===126?(e.consume(u),r):u===38?(e.consume(u),l):u===93?(e.consume(u),i):u===60||u===null||Z(u)||Ct(u)?n(u):t(u)}function i(u){return u===null||u===40||u===91||Z(u)||Ct(u)?n(u):r(u)}function l(u){return ze(u)?o(u):t(u)}function o(u){return u===59?(e.consume(u),r):ze(u)?(e.consume(u),o):t(u)}}function ax(e,n,t){return r;function r(l){return e.consume(l),i}function i(l){return Re(l)?t(l):n(l)}}function ip(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Z(e)}function lp(e){return!ze(e)}function op(e){return!(e===47||Du(e))}function Du(e){return e===43||e===45||e===46||e===95||Re(e)}function ba(e){let n=e.length,t=!1;for(;n--;){const r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}function Ol(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(n=l(n,t),r.push(l))}return n}const Fu={name:"attention",resolveAll:sx,tokenize:cx};function sx(e,n){let t=-1,r,i,l,o,u,a,s,f;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;a=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const c={...e[r][1].end},d={...e[t][1].start};Oc(c,-a),Oc(d,a),o={type:a>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},u={type:a>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:d},l={type:a>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:a>1?"strong":"emphasis",start:{...o.start},end:{...u.end}},e[r][1].end={...o.start},e[t][1].start={...u.end},s=[],e[r][1].end.offset-e[r][1].start.offset&&(s=Je(s,[["enter",e[r][1],n],["exit",e[r][1],n]])),s=Je(s,[["enter",i,n],["enter",o,n],["exit",o,n],["enter",l,n]]),s=Je(s,Ol(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),s=Je(s,[["exit",l,n],["enter",u,n],["exit",u,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(f=2,s=Je(s,[["enter",e[t][1],n],["exit",e[t][1],n]])):f=0,We(e,r-1,t-r+3,s),t=r+s.length-f-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function cx(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=rr(r);let l;return o;function o(a){return l=a,e.enter("attentionSequence"),u(a)}function u(a){if(a===l)return e.consume(a),u;const s=e.exit("attentionSequence"),f=rr(a),c=!f||f===2&&i||t.includes(a),d=!i||i===2&&f||t.includes(r);return s._open=!!(l===42?c:c&&(i||!d)),s._close=!!(l===42?d:d&&(f||!c)),n(a)}}function Oc(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const fx={name:"autolink",tokenize:dx};function dx(e,n,t){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(h){return ze(h)?(e.consume(h),o):h===64?t(h):s(h)}function o(h){return h===43||h===45||h===46||Re(h)?(r=1,u(h)):s(h)}function u(h){return h===58?(e.consume(h),r=0,a):(h===43||h===45||h===46||Re(h))&&r++<32?(e.consume(h),u):(r=0,s(h))}function a(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),n):h===null||h===32||h===60||kl(h)?t(h):(e.consume(h),a)}function s(h){return h===64?(e.consume(h),f):j0(h)?(e.consume(h),s):t(h)}function f(h){return Re(h)?c(h):t(h)}function c(h){return h===46?(e.consume(h),r=0,f):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),n):d(h)}function d(h){if((h===45||Re(h))&&r++<63){const y=h===45?d:c;return e.consume(h),y}return t(h)}}function Q(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return o;function o(a){return B(a)?(e.enter(t),u(a)):n(a)}function u(a){return B(a)&&l++<i?(e.consume(a),u):(e.exit(t),n(a))}}const ui={partial:!0,tokenize:hx};function hx(e,n,t){return r;function r(l){return B(l)?Q(e,i,"linePrefix")(l):i(l)}function i(l){return l===null||b(l)?n(l):t(l)}}const up={continuation:{tokenize:mx},exit:gx,name:"blockQuote",tokenize:px};function px(e,n,t){const r=this;return i;function i(o){if(o===62){const u=r.containerState;return u.open||(e.enter("blockQuote",{_container:!0}),u.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),l}return t(o)}function l(o){return B(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function mx(e,n,t){const r=this;return i;function i(o){return B(o)?Q(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):l(o)}function l(o){return e.attempt(up,n,t)(o)}}function gx(e){e.exit("blockQuote")}const ap={name:"characterEscape",tokenize:yx};function yx(e,n,t){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return O0(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(l)}}const sp={name:"characterReference",tokenize:kx};function kx(e,n,t){const r=this;let i=0,l,o;return u;function u(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),a}function a(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),l=31,o=Re,f(c))}function s(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,o=$0,f):(e.enter("characterReferenceValue"),l=7,o=zu,f(c))}function f(c){if(c===59&&i){const d=e.exit("characterReferenceValue");return o===Re&&!Na(r.sliceSerialize(d))?t(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(c)&&i++<l?(e.consume(c),f):t(c)}}const Bc={partial:!0,tokenize:wx},Hc={concrete:!0,name:"codeFenced",tokenize:xx};function xx(e,n,t){const r=this,i={partial:!0,tokenize:E};let l=0,o=0,u;return a;function a(w){return s(w)}function s(w){const M=r.events[r.events.length-1];return l=M&&M[1].type==="linePrefix"?M[2].sliceSerialize(M[1],!0).length:0,u=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(w)}function f(w){return w===u?(o++,e.consume(w),f):o<3?t(w):(e.exit("codeFencedFenceSequence"),B(w)?Q(e,c,"whitespace")(w):c(w))}function c(w){return w===null||b(w)?(e.exit("codeFencedFence"),r.interrupt?n(w):e.check(Bc,S,_)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),d(w))}function d(w){return w===null||b(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(w)):B(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Q(e,h,"whitespace")(w)):w===96&&w===u?t(w):(e.consume(w),d)}function h(w){return w===null||b(w)?c(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(w))}function y(w){return w===null||b(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(w)):w===96&&w===u?t(w):(e.consume(w),y)}function S(w){return e.attempt(i,_,T)(w)}function T(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),p}function p(w){return l>0&&B(w)?Q(e,m,"linePrefix",l+1)(w):m(w)}function m(w){return w===null||b(w)?e.check(Bc,S,_)(w):(e.enter("codeFlowValue"),g(w))}function g(w){return w===null||b(w)?(e.exit("codeFlowValue"),m(w)):(e.consume(w),g)}function _(w){return e.exit("codeFenced"),n(w)}function E(w,M,z){let j=0;return v;function v(V){return w.enter("lineEnding"),w.consume(V),w.exit("lineEnding"),D}function D(V){return w.enter("codeFencedFence"),B(V)?Q(w,N,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(V):N(V)}function N(V){return V===u?(w.enter("codeFencedFenceSequence"),q(V)):z(V)}function q(V){return V===u?(j++,w.consume(V),q):j>=o?(w.exit("codeFencedFenceSequence"),B(V)?Q(w,ee,"whitespace")(V):ee(V)):z(V)}function ee(V){return V===null||b(V)?(w.exit("codeFencedFence"),M(V)):z(V)}}}function wx(e,n,t){const r=this;return i;function i(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l)}function l(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}const zo={name:"codeIndented",tokenize:Sx},vx={partial:!0,tokenize:_x};function Sx(e,n,t){const r=this;return i;function i(s){return e.enter("codeIndented"),Q(e,l,"linePrefix",5)(s)}function l(s){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?o(s):t(s)}function o(s){return s===null?a(s):b(s)?e.attempt(vx,o,a)(s):(e.enter("codeFlowValue"),u(s))}function u(s){return s===null||b(s)?(e.exit("codeFlowValue"),o(s)):(e.consume(s),u)}function a(s){return e.exit("codeIndented"),n(s)}}function _x(e,n,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):b(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):Q(e,l,"linePrefix",5)(o)}function l(o){const u=r.events[r.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?n(o):b(o)?i(o):t(o)}}const Cx={name:"codeText",previous:Mx,resolve:Ex,tokenize:Tx};function Ex(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function Mx(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Tx(e,n,t){let r=0,i,l;return o;function o(c){return e.enter("codeText"),e.enter("codeTextSequence"),u(c)}function u(c){return c===96?(e.consume(c),r++,u):(e.exit("codeTextSequence"),a(c))}function a(c){return c===null?t(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),a):c===96?(l=e.enter("codeTextSequence"),i=0,f(c)):b(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),a):(e.enter("codeTextData"),s(c))}function s(c){return c===null||c===32||c===96||b(c)?(e.exit("codeTextData"),a(c)):(e.consume(c),s)}function f(c){return c===96?(e.consume(c),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(c)):(l.type="codeTextData",s(c))}}class Px{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&wr(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),wr(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),wr(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);wr(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);wr(this.left,t.reverse())}}}function wr(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function cp(e){const n={};let t=-1,r,i,l,o,u,a,s;const f=new Px(e);for(;++t<f.length;){for(;t in n;)t=n[t];if(r=f.get(t),t&&r[1].type==="chunkFlow"&&f.get(t-1)[1].type==="listItemPrefix"&&(a=r[1]._tokenizer.events,l=0,l<a.length&&a[l][1].type==="lineEndingBlank"&&(l+=2),l<a.length&&a[l][1].type==="content"))for(;++l<a.length&&a[l][1].type!=="content";)a[l][1].type==="chunkText"&&(a[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,zx(f,t)),t=n[t],s=!0);else if(r[1]._container){for(l=t,i=void 0;l--;)if(o=f.get(l),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=l);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},u=f.slice(i,t),u.unshift(r),f.splice(i,t-i+1,u))}}return We(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!s}function zx(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const l=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const u=o.events,a=[],s={};let f,c,d=-1,h=t,y=0,S=0;const T=[S];for(;h;){for(;e.get(++i)[1]!==h;);l.push(i),h._tokenizer||(f=r.sliceStream(h),h.next||f.push(null),c&&o.defineSkip(h.start),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(f),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=h,h=h.next}for(h=t;++d<u.length;)u[d][0]==="exit"&&u[d-1][0]==="enter"&&u[d][1].type===u[d-1][1].type&&u[d][1].start.line!==u[d][1].end.line&&(S=d+1,T.push(S),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(o.events=[],h?(h._tokenizer=void 0,h.previous=void 0):T.pop(),d=T.length;d--;){const p=u.slice(T[d],T[d+1]),m=l.pop();a.push([m,m+p.length-1]),e.splice(m,2,p)}for(a.reverse(),d=-1;++d<a.length;)s[y+a[d][0]]=y+a[d][1],y+=a[d][1]-a[d][0]-1;return s}const Ix={resolve:Ax,tokenize:Dx},Lx={partial:!0,tokenize:Fx};function Ax(e){return cp(e),e}function Dx(e,n){let t;return r;function r(u){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(u)}function i(u){return u===null?l(u):b(u)?e.check(Lx,o,l)(u):(e.consume(u),i)}function l(u){return e.exit("chunkContent"),e.exit("content"),n(u)}function o(u){return e.consume(u),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function Fx(e,n,t){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),Q(e,l,"linePrefix")}function l(o){if(o===null||b(o))return t(o);const u=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?n(o):e.interrupt(r.parser.constructs.flow,t,n)(o)}}function fp(e,n,t,r,i,l,o,u,a){const s=a||Number.POSITIVE_INFINITY;let f=0;return c;function c(p){return p===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(p),e.exit(l),d):p===null||p===32||p===41||kl(p)?t(p):(e.enter(r),e.enter(o),e.enter(u),e.enter("chunkString",{contentType:"string"}),S(p))}function d(p){return p===62?(e.enter(l),e.consume(p),e.exit(l),e.exit(i),e.exit(r),n):(e.enter(u),e.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===62?(e.exit("chunkString"),e.exit(u),d(p)):p===null||p===60||b(p)?t(p):(e.consume(p),p===92?y:h)}function y(p){return p===60||p===62||p===92?(e.consume(p),h):h(p)}function S(p){return!f&&(p===null||p===41||Z(p))?(e.exit("chunkString"),e.exit(u),e.exit(o),e.exit(r),n(p)):f<s&&p===40?(e.consume(p),f++,S):p===41?(e.consume(p),f--,S):p===null||p===32||p===40||kl(p)?t(p):(e.consume(p),p===92?T:S)}function T(p){return p===40||p===41||p===92?(e.consume(p),S):S(p)}}function dp(e,n,t,r,i,l){const o=this;let u=0,a;return s;function s(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(l),f}function f(h){return u>999||h===null||h===91||h===93&&!a||h===94&&!u&&"_hiddenFootnoteSupport"in o.parser.constructs?t(h):h===93?(e.exit(l),e.enter(i),e.consume(h),e.exit(i),e.exit(r),n):b(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===null||h===91||h===93||b(h)||u++>999?(e.exit("chunkString"),f(h)):(e.consume(h),a||(a=!B(h)),h===92?d:c)}function d(h){return h===91||h===92||h===93?(e.consume(h),u++,c):c(h)}}function hp(e,n,t,r,i,l){let o;return u;function u(d){return d===34||d===39||d===40?(e.enter(r),e.enter(i),e.consume(d),e.exit(i),o=d===40?41:d,a):t(d)}function a(d){return d===o?(e.enter(i),e.consume(d),e.exit(i),e.exit(r),n):(e.enter(l),s(d))}function s(d){return d===o?(e.exit(l),a(o)):d===null?t(d):b(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),Q(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(d))}function f(d){return d===o||d===null||b(d)?(e.exit("chunkString"),s(d)):(e.consume(d),d===92?c:f)}function c(d){return d===o||d===92?(e.consume(d),f):f(d)}}function br(e,n){let t;return r;function r(i){return b(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):B(i)?Q(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const Nx={name:"definition",tokenize:bx},Rx={partial:!0,tokenize:jx};function bx(e,n,t){const r=this;let i;return l;function l(h){return e.enter("definition"),o(h)}function o(h){return dp.call(r,e,u,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function u(h){return i=hn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),a):t(h)}function a(h){return Z(h)?br(e,s)(h):s(h)}function s(h){return fp(e,f,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function f(h){return e.attempt(Rx,c,c)(h)}function c(h){return B(h)?Q(e,d,"whitespace")(h):d(h)}function d(h){return h===null||b(h)?(e.exit("definition"),r.parser.defined.push(i),n(h)):t(h)}}function jx(e,n,t){return r;function r(u){return Z(u)?br(e,i)(u):t(u)}function i(u){return hp(e,l,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(u)}function l(u){return B(u)?Q(e,o,"whitespace")(u):o(u)}function o(u){return u===null||b(u)?n(u):t(u)}}const $x={name:"hardBreakEscape",tokenize:Ox};function Ox(e,n,t){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),i}function i(l){return b(l)?(e.exit("hardBreakEscape"),n(l)):t(l)}}const Bx={name:"headingAtx",resolve:Hx,tokenize:Ux};function Hx(e,n){let t=e.length-2,r=3,i,l;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},l={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},We(e,r,t-r+1,[["enter",i,n],["enter",l,n],["exit",l,n],["exit",i,n]])),e}function Ux(e,n,t){let r=0;return i;function i(f){return e.enter("atxHeading"),l(f)}function l(f){return e.enter("atxHeadingSequence"),o(f)}function o(f){return f===35&&r++<6?(e.consume(f),o):f===null||Z(f)?(e.exit("atxHeadingSequence"),u(f)):t(f)}function u(f){return f===35?(e.enter("atxHeadingSequence"),a(f)):f===null||b(f)?(e.exit("atxHeading"),n(f)):B(f)?Q(e,u,"whitespace")(f):(e.enter("atxHeadingText"),s(f))}function a(f){return f===35?(e.consume(f),a):(e.exit("atxHeadingSequence"),u(f))}function s(f){return f===null||f===35||Z(f)?(e.exit("atxHeadingText"),u(f)):(e.consume(f),s)}}const Vx=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Uc=["pre","script","style","textarea"],Wx={concrete:!0,name:"htmlFlow",resolveTo:Yx,tokenize:Xx},Qx={partial:!0,tokenize:Jx},qx={partial:!0,tokenize:Gx};function Yx(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function Xx(e,n,t){const r=this;let i,l,o,u,a;return s;function s(x){return f(x)}function f(x){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(x),c}function c(x){return x===33?(e.consume(x),d):x===47?(e.consume(x),l=!0,S):x===63?(e.consume(x),i=3,r.interrupt?n:k):ze(x)?(e.consume(x),o=String.fromCharCode(x),T):t(x)}function d(x){return x===45?(e.consume(x),i=2,h):x===91?(e.consume(x),i=5,u=0,y):ze(x)?(e.consume(x),i=4,r.interrupt?n:k):t(x)}function h(x){return x===45?(e.consume(x),r.interrupt?n:k):t(x)}function y(x){const pe="CDATA[";return x===pe.charCodeAt(u++)?(e.consume(x),u===pe.length?r.interrupt?n:N:y):t(x)}function S(x){return ze(x)?(e.consume(x),o=String.fromCharCode(x),T):t(x)}function T(x){if(x===null||x===47||x===62||Z(x)){const pe=x===47,rn=o.toLowerCase();return!pe&&!l&&Uc.includes(rn)?(i=1,r.interrupt?n(x):N(x)):Vx.includes(o.toLowerCase())?(i=6,pe?(e.consume(x),p):r.interrupt?n(x):N(x)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(x):l?m(x):g(x))}return x===45||Re(x)?(e.consume(x),o+=String.fromCharCode(x),T):t(x)}function p(x){return x===62?(e.consume(x),r.interrupt?n:N):t(x)}function m(x){return B(x)?(e.consume(x),m):v(x)}function g(x){return x===47?(e.consume(x),v):x===58||x===95||ze(x)?(e.consume(x),_):B(x)?(e.consume(x),g):v(x)}function _(x){return x===45||x===46||x===58||x===95||Re(x)?(e.consume(x),_):E(x)}function E(x){return x===61?(e.consume(x),w):B(x)?(e.consume(x),E):g(x)}function w(x){return x===null||x===60||x===61||x===62||x===96?t(x):x===34||x===39?(e.consume(x),a=x,M):B(x)?(e.consume(x),w):z(x)}function M(x){return x===a?(e.consume(x),a=null,j):x===null||b(x)?t(x):(e.consume(x),M)}function z(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||Z(x)?E(x):(e.consume(x),z)}function j(x){return x===47||x===62||B(x)?g(x):t(x)}function v(x){return x===62?(e.consume(x),D):t(x)}function D(x){return x===null||b(x)?N(x):B(x)?(e.consume(x),D):t(x)}function N(x){return x===45&&i===2?(e.consume(x),de):x===60&&i===1?(e.consume(x),ce):x===62&&i===4?(e.consume(x),Y):x===63&&i===3?(e.consume(x),k):x===93&&i===5?(e.consume(x),$):b(x)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Qx,J,q)(x)):x===null||b(x)?(e.exit("htmlFlowData"),q(x)):(e.consume(x),N)}function q(x){return e.check(qx,ee,J)(x)}function ee(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),V}function V(x){return x===null||b(x)?q(x):(e.enter("htmlFlowData"),N(x))}function de(x){return x===45?(e.consume(x),k):N(x)}function ce(x){return x===47?(e.consume(x),o="",L):N(x)}function L(x){if(x===62){const pe=o.toLowerCase();return Uc.includes(pe)?(e.consume(x),Y):N(x)}return ze(x)&&o.length<8?(e.consume(x),o+=String.fromCharCode(x),L):N(x)}function $(x){return x===93?(e.consume(x),k):N(x)}function k(x){return x===62?(e.consume(x),Y):x===45&&i===2?(e.consume(x),k):N(x)}function Y(x){return x===null||b(x)?(e.exit("htmlFlowData"),J(x)):(e.consume(x),Y)}function J(x){return e.exit("htmlFlow"),n(x)}}function Gx(e,n,t){const r=this;return i;function i(o){return b(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l):t(o)}function l(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}function Jx(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ui,n,t)}}const Kx={name:"htmlText",tokenize:Zx};function Zx(e,n,t){const r=this;let i,l,o;return u;function u(k){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(k),a}function a(k){return k===33?(e.consume(k),s):k===47?(e.consume(k),E):k===63?(e.consume(k),g):ze(k)?(e.consume(k),z):t(k)}function s(k){return k===45?(e.consume(k),f):k===91?(e.consume(k),l=0,y):ze(k)?(e.consume(k),m):t(k)}function f(k){return k===45?(e.consume(k),h):t(k)}function c(k){return k===null?t(k):k===45?(e.consume(k),d):b(k)?(o=c,ce(k)):(e.consume(k),c)}function d(k){return k===45?(e.consume(k),h):c(k)}function h(k){return k===62?de(k):k===45?d(k):c(k)}function y(k){const Y="CDATA[";return k===Y.charCodeAt(l++)?(e.consume(k),l===Y.length?S:y):t(k)}function S(k){return k===null?t(k):k===93?(e.consume(k),T):b(k)?(o=S,ce(k)):(e.consume(k),S)}function T(k){return k===93?(e.consume(k),p):S(k)}function p(k){return k===62?de(k):k===93?(e.consume(k),p):S(k)}function m(k){return k===null||k===62?de(k):b(k)?(o=m,ce(k)):(e.consume(k),m)}function g(k){return k===null?t(k):k===63?(e.consume(k),_):b(k)?(o=g,ce(k)):(e.consume(k),g)}function _(k){return k===62?de(k):g(k)}function E(k){return ze(k)?(e.consume(k),w):t(k)}function w(k){return k===45||Re(k)?(e.consume(k),w):M(k)}function M(k){return b(k)?(o=M,ce(k)):B(k)?(e.consume(k),M):de(k)}function z(k){return k===45||Re(k)?(e.consume(k),z):k===47||k===62||Z(k)?j(k):t(k)}function j(k){return k===47?(e.consume(k),de):k===58||k===95||ze(k)?(e.consume(k),v):b(k)?(o=j,ce(k)):B(k)?(e.consume(k),j):de(k)}function v(k){return k===45||k===46||k===58||k===95||Re(k)?(e.consume(k),v):D(k)}function D(k){return k===61?(e.consume(k),N):b(k)?(o=D,ce(k)):B(k)?(e.consume(k),D):j(k)}function N(k){return k===null||k===60||k===61||k===62||k===96?t(k):k===34||k===39?(e.consume(k),i=k,q):b(k)?(o=N,ce(k)):B(k)?(e.consume(k),N):(e.consume(k),ee)}function q(k){return k===i?(e.consume(k),i=void 0,V):k===null?t(k):b(k)?(o=q,ce(k)):(e.consume(k),q)}function ee(k){return k===null||k===34||k===39||k===60||k===61||k===96?t(k):k===47||k===62||Z(k)?j(k):(e.consume(k),ee)}function V(k){return k===47||k===62||Z(k)?j(k):t(k)}function de(k){return k===62?(e.consume(k),e.exit("htmlTextData"),e.exit("htmlText"),n):t(k)}function ce(k){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),L}function L(k){return B(k)?Q(e,$,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):$(k)}function $(k){return e.enter("htmlTextData"),o(k)}}const ja={name:"labelEnd",resolveAll:rw,resolveTo:iw,tokenize:lw},ew={tokenize:ow},nw={tokenize:uw},tw={tokenize:aw};function rw(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&We(e,0,e.length,t),e}function iw(e,n){let t=e.length,r=0,i,l,o,u;for(;t--;)if(i=e[t][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=t);const a={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},s={type:"label",start:{...e[l][1].start},end:{...e[o][1].end}},f={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[o-2][1].start}};return u=[["enter",a,n],["enter",s,n]],u=Je(u,e.slice(l+1,l+r+3)),u=Je(u,[["enter",f,n]]),u=Je(u,Ol(n.parser.constructs.insideSpan.null,e.slice(l+r+4,o-3),n)),u=Je(u,[["exit",f,n],e[o-2],e[o-1],["exit",s,n]]),u=Je(u,e.slice(o+1)),u=Je(u,[["exit",a,n]]),We(e,l,e.length,u),e}function lw(e,n,t){const r=this;let i=r.events.length,l,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return u;function u(d){return l?l._inactive?c(d):(o=r.parser.defined.includes(hn(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelEnd"),a):t(d)}function a(d){return d===40?e.attempt(ew,f,o?f:c)(d):d===91?e.attempt(nw,f,o?s:c)(d):o?f(d):c(d)}function s(d){return e.attempt(tw,f,c)(d)}function f(d){return n(d)}function c(d){return l._balanced=!0,t(d)}}function ow(e,n,t){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return Z(c)?br(e,l)(c):l(c)}function l(c){return c===41?f(c):fp(e,o,u,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return Z(c)?br(e,a)(c):f(c)}function u(c){return t(c)}function a(c){return c===34||c===39||c===40?hp(e,s,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function s(c){return Z(c)?br(e,f)(c):f(c)}function f(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),n):t(c)}}function uw(e,n,t){const r=this;return i;function i(u){return dp.call(r,e,l,o,"reference","referenceMarker","referenceString")(u)}function l(u){return r.parser.defined.includes(hn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(u):t(u)}function o(u){return t(u)}}function aw(e,n,t){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),n):t(l)}}const sw={name:"labelStartImage",resolveAll:ja.resolveAll,tokenize:cw};function cw(e,n,t){const r=this;return i;function i(u){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(u),e.exit("labelImageMarker"),l}function l(u){return u===91?(e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),e.exit("labelImage"),o):t(u)}function o(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(u):n(u)}}const fw={name:"labelStartLink",resolveAll:ja.resolveAll,tokenize:dw};function dw(e,n,t){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),l}function l(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(o):n(o)}}const Io={name:"lineEnding",tokenize:hw};function hw(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Q(e,n,"linePrefix")}}const Qi={name:"thematicBreak",tokenize:pw};function pw(e,n,t){let r=0,i;return l;function l(s){return e.enter("thematicBreak"),o(s)}function o(s){return i=s,u(s)}function u(s){return s===i?(e.enter("thematicBreakSequence"),a(s)):r>=3&&(s===null||b(s))?(e.exit("thematicBreak"),n(s)):t(s)}function a(s){return s===i?(e.consume(s),r++,a):(e.exit("thematicBreakSequence"),B(s)?Q(e,u,"whitespace")(s):u(s))}}const De={continuation:{tokenize:kw},exit:ww,name:"list",tokenize:yw},mw={partial:!0,tokenize:vw},gw={partial:!0,tokenize:xw};function yw(e,n,t){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return u;function u(h){const y=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:zu(h)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Qi,t,s)(h):s(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),a(h)}return t(h)}function a(h){return zu(h)&&++o<10?(e.consume(h),a):(!r.interrupt||o<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),s(h)):t(h)}function s(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(ui,r.interrupt?t:f,e.attempt(mw,d,c))}function f(h){return r.containerState.initialBlankLine=!0,l++,d(h)}function c(h){return B(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),d):t(h)}function d(h){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(h)}}function kw(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(ui,i,l);function i(u){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Q(e,n,"listItemIndent",r.containerState.size+1)(u)}function l(u){return r.containerState.furtherBlankLines||!B(u)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(u)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(gw,n,o)(u))}function o(u){return r.containerState._closeFlow=!0,r.interrupt=void 0,Q(e,e.attempt(De,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u)}}function xw(e,n,t){const r=this;return Q(e,i,"listItemIndent",r.containerState.size+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?n(l):t(l)}}function ww(e){e.exit(this.containerState.type)}function vw(e,n,t){const r=this;return Q(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const o=r.events[r.events.length-1];return!B(l)&&o&&o[1].type==="listItemPrefixWhitespace"?n(l):t(l)}}const Vc={name:"setextUnderline",resolveTo:Sw,tokenize:_w};function Sw(e,n){let t=e.length,r,i,l;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!l&&e[t][1].type==="definition"&&(l=t);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",l?(e.splice(i,0,["enter",o,n]),e.splice(l+1,0,["exit",e[r][1],n]),e[r][1].end={...e[l][1].end}):e[r][1]=o,e.push(["exit",o,n]),e}function _w(e,n,t){const r=this;let i;return l;function l(s){let f=r.events.length,c;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){c=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=s,o(s)):t(s)}function o(s){return e.enter("setextHeadingLineSequence"),u(s)}function u(s){return s===i?(e.consume(s),u):(e.exit("setextHeadingLineSequence"),B(s)?Q(e,a,"lineSuffix")(s):a(s))}function a(s){return s===null||b(s)?(e.exit("setextHeadingLine"),n(s)):t(s)}}const Cw={tokenize:Aw,partial:!0};function Ew(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:zw,continuation:{tokenize:Iw},exit:Lw}},text:{91:{name:"gfmFootnoteCall",tokenize:Pw},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Mw,resolveTo:Tw}}}}function Mw(e,n,t){const r=this;let i=r.events.length;const l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const a=r.events[i][1];if(a.type==="labelImage"){o=a;break}if(a.type==="gfmFootnoteCall"||a.type==="labelLink"||a.type==="label"||a.type==="image"||a.type==="link")break}return u;function u(a){if(!o||!o._balanced)return t(a);const s=hn(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!l.includes(s.slice(1))?t(a):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(a),e.exit("gfmFootnoteCallLabelMarker"),n(a))}}function Tw(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},u=[e[t+1],e[t+2],["enter",r,n],e[t+3],e[t+4],["enter",i,n],["exit",i,n],["enter",l,n],["enter",o,n],["exit",o,n],["exit",l,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(t,e.length-t+1,...u),e}function Pw(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l=0,o;return u;function u(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),a}function a(c){return c!==94?t(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",s)}function s(c){if(l>999||c===93&&!o||c===null||c===91||Z(c))return t(c);if(c===93){e.exit("chunkString");const d=e.exit("gfmFootnoteCallString");return i.includes(hn(r.sliceSerialize(d)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(c)}return Z(c)||(o=!0),l++,e.consume(c),c===92?f:s}function f(c){return c===91||c===92||c===93?(e.consume(c),l++,s):s(c)}}function zw(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,o=0,u;return a;function a(y){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionLabelMarker"),s}function s(y){return y===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):t(y)}function f(y){if(o>999||y===93&&!u||y===null||y===91||Z(y))return t(y);if(y===93){e.exit("chunkString");const S=e.exit("gfmFootnoteDefinitionLabelString");return l=hn(r.sliceSerialize(S)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),d}return Z(y)||(u=!0),o++,e.consume(y),y===92?c:f}function c(y){return y===91||y===92||y===93?(e.consume(y),o++,f):f(y)}function d(y){return y===58?(e.enter("definitionMarker"),e.consume(y),e.exit("definitionMarker"),i.includes(l)||i.push(l),Q(e,h,"gfmFootnoteDefinitionWhitespace")):t(y)}function h(y){return n(y)}}function Iw(e,n,t){return e.check(ui,n,e.attempt(Cw,n,t))}function Lw(e){e.exit("gfmFootnoteDefinition")}function Aw(e,n,t){const r=this;return Q(e,i,"gfmFootnoteDefinitionIndent",5);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?n(l):t(l)}}function Dw(e){let t=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:l,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,u){let a=-1;for(;++a<o.length;)if(o[a][0]==="enter"&&o[a][1].type==="strikethroughSequenceTemporary"&&o[a][1]._close){let s=a;for(;s--;)if(o[s][0]==="exit"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._open&&o[a][1].end.offset-o[a][1].start.offset===o[s][1].end.offset-o[s][1].start.offset){o[a][1].type="strikethroughSequence",o[s][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},o[s][1].start),end:Object.assign({},o[a][1].end)},c={type:"strikethroughText",start:Object.assign({},o[s][1].end),end:Object.assign({},o[a][1].start)},d=[["enter",f,u],["enter",o[s][1],u],["exit",o[s][1],u],["enter",c,u]],h=u.parser.constructs.insideSpan.null;h&&We(d,d.length,0,Ol(h,o.slice(s+1,a),u)),We(d,d.length,0,[["exit",c,u],["enter",o[a][1],u],["exit",o[a][1],u],["exit",f,u]]),We(o,s-1,a-s+3,d),a=s+d.length-2;break}}for(a=-1;++a<o.length;)o[a][1].type==="strikethroughSequenceTemporary"&&(o[a][1].type="data");return o}function l(o,u,a){const s=this.previous,f=this.events;let c=0;return d;function d(y){return s===126&&f[f.length-1][1].type!=="characterEscape"?a(y):(o.enter("strikethroughSequenceTemporary"),h(y))}function h(y){const S=rr(s);if(y===126)return c>1?a(y):(o.consume(y),c++,h);if(c<2&&!t)return a(y);const T=o.exit("strikethroughSequenceTemporary"),p=rr(y);return T._open=!p||p===2&&!!S,T._close=!S||S===2&&!!p,u(y)}}}class Fw{constructor(){this.map=[]}add(n,t,r){Nw(this,n,t,r)}consume(n){if(this.map.sort(function(l,o){return l[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const l of i)n.push(l);i=r.pop()}this.map.length=0}}function Nw(e,n,t,r){let i=0;if(!(t===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===n){e.map[i][1]+=t,e.map[i][2].push(...r);return}i+=1}e.map.push([n,t,r])}}function Rw(e,n){let t=!1;const r=[];for(;n<e.length;){const i=e[n];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const l=r.length-1;r[l]=r[l]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return r}function bw(){return{flow:{null:{name:"table",tokenize:jw,resolveAll:$w}}}}function jw(e,n,t){const r=this;let i=0,l=0,o;return u;function u(v){let D=r.events.length-1;for(;D>-1;){const ee=r.events[D][1].type;if(ee==="lineEnding"||ee==="linePrefix")D--;else break}const N=D>-1?r.events[D][1].type:null,q=N==="tableHead"||N==="tableRow"?w:a;return q===w&&r.parser.lazy[r.now().line]?t(v):q(v)}function a(v){return e.enter("tableHead"),e.enter("tableRow"),s(v)}function s(v){return v===124||(o=!0,l+=1),f(v)}function f(v){return v===null?t(v):b(v)?l>1?(l=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),h):t(v):B(v)?Q(e,f,"whitespace")(v):(l+=1,o&&(o=!1,i+=1),v===124?(e.enter("tableCellDivider"),e.consume(v),e.exit("tableCellDivider"),o=!0,f):(e.enter("data"),c(v)))}function c(v){return v===null||v===124||Z(v)?(e.exit("data"),f(v)):(e.consume(v),v===92?d:c)}function d(v){return v===92||v===124?(e.consume(v),c):c(v)}function h(v){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(v):(e.enter("tableDelimiterRow"),o=!1,B(v)?Q(e,y,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(v):y(v))}function y(v){return v===45||v===58?T(v):v===124?(o=!0,e.enter("tableCellDivider"),e.consume(v),e.exit("tableCellDivider"),S):E(v)}function S(v){return B(v)?Q(e,T,"whitespace")(v):T(v)}function T(v){return v===58?(l+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(v),e.exit("tableDelimiterMarker"),p):v===45?(l+=1,p(v)):v===null||b(v)?_(v):E(v)}function p(v){return v===45?(e.enter("tableDelimiterFiller"),m(v)):E(v)}function m(v){return v===45?(e.consume(v),m):v===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(v),e.exit("tableDelimiterMarker"),g):(e.exit("tableDelimiterFiller"),g(v))}function g(v){return B(v)?Q(e,_,"whitespace")(v):_(v)}function _(v){return v===124?y(v):v===null||b(v)?!o||i!==l?E(v):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(v)):E(v)}function E(v){return t(v)}function w(v){return e.enter("tableRow"),M(v)}function M(v){return v===124?(e.enter("tableCellDivider"),e.consume(v),e.exit("tableCellDivider"),M):v===null||b(v)?(e.exit("tableRow"),n(v)):B(v)?Q(e,M,"whitespace")(v):(e.enter("data"),z(v))}function z(v){return v===null||v===124||Z(v)?(e.exit("data"),M(v)):(e.consume(v),v===92?j:z)}function j(v){return v===92||v===124?(e.consume(v),z):z(v)}}function $w(e,n){let t=-1,r=!0,i=0,l=[0,0,0,0],o=[0,0,0,0],u=!1,a=0,s,f,c;const d=new Fw;for(;++t<e.length;){const h=e[t],y=h[1];h[0]==="enter"?y.type==="tableHead"?(u=!1,a!==0&&(Wc(d,n,a,s,f),f=void 0,a=0),s={type:"table",start:Object.assign({},y.start),end:Object.assign({},y.end)},d.add(t,0,[["enter",s,n]])):y.type==="tableRow"||y.type==="tableDelimiterRow"?(r=!0,c=void 0,l=[0,0,0,0],o=[0,t+1,0,0],u&&(u=!1,f={type:"tableBody",start:Object.assign({},y.start),end:Object.assign({},y.end)},d.add(t,0,[["enter",f,n]])),i=y.type==="tableDelimiterRow"?2:f?3:1):i&&(y.type==="data"||y.type==="tableDelimiterMarker"||y.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(l[1]!==0&&(o[0]=o[1],c=Pi(d,n,l,i,void 0,c),l=[0,0,0,0]),o[2]=t)):y.type==="tableCellDivider"&&(r?r=!1:(l[1]!==0&&(o[0]=o[1],c=Pi(d,n,l,i,void 0,c)),l=o,o=[l[1],t,0,0])):y.type==="tableHead"?(u=!0,a=t):y.type==="tableRow"||y.type==="tableDelimiterRow"?(a=t,l[1]!==0?(o[0]=o[1],c=Pi(d,n,l,i,t,c)):o[1]!==0&&(c=Pi(d,n,o,i,t,c)),i=0):i&&(y.type==="data"||y.type==="tableDelimiterMarker"||y.type==="tableDelimiterFiller")&&(o[3]=t)}for(a!==0&&Wc(d,n,a,s,f),d.consume(n.events),t=-1;++t<n.events.length;){const h=n.events[t];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=Rw(n.events,t))}return e}function Pi(e,n,t,r,i,l){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",u="tableContent";t[0]!==0&&(l.end=Object.assign({},Lt(n.events,t[0])),e.add(t[0],0,[["exit",l,n]]));const a=Lt(n.events,t[1]);if(l={type:o,start:Object.assign({},a),end:Object.assign({},a)},e.add(t[1],0,[["enter",l,n]]),t[2]!==0){const s=Lt(n.events,t[2]),f=Lt(n.events,t[3]),c={type:u,start:Object.assign({},s),end:Object.assign({},f)};if(e.add(t[2],0,[["enter",c,n]]),r!==2){const d=n.events[t[2]],h=n.events[t[3]];if(d[1].end=Object.assign({},h[1].end),d[1].type="chunkText",d[1].contentType="text",t[3]>t[2]+1){const y=t[2]+1,S=t[3]-t[2]-1;e.add(y,S,[])}}e.add(t[3]+1,0,[["exit",c,n]])}return i!==void 0&&(l.end=Object.assign({},Lt(n.events,i)),e.add(i,0,[["exit",l,n]]),l=void 0),l}function Wc(e,n,t,r,i){const l=[],o=Lt(n.events,t);i&&(i.end=Object.assign({},o),l.push(["exit",i,n])),r.end=Object.assign({},o),l.push(["exit",r,n]),e.add(t+1,0,l)}function Lt(e,n){const t=e[n],r=t[0]==="enter"?"start":"end";return t[1][r]}const Ow={name:"tasklistCheck",tokenize:Hw};function Bw(){return{text:{91:Ow}}}function Hw(e,n,t){const r=this;return i;function i(a){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(a):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),l)}function l(a){return Z(a)?(e.enter("taskListCheckValueUnchecked"),e.consume(a),e.exit("taskListCheckValueUnchecked"),o):a===88||a===120?(e.enter("taskListCheckValueChecked"),e.consume(a),e.exit("taskListCheckValueChecked"),o):t(a)}function o(a){return a===93?(e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),u):t(a)}function u(a){return b(a)?n(a):B(a)?e.check({tokenize:Uw},n,t)(a):t(a)}}function Uw(e,n,t){return Q(e,r,"whitespace");function r(i){return i===null?t(i):n(i)}}function Vw(e){return Kh([ex(),Ew(),Dw(e),bw(),Bw()])}const Ww={};function pp(e){const n=this,t=e||Ww,r=n.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),l=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(Vw(t)),l.push(Yk()),o.push(Xk(t))}function Qw(e){const n=JSON.parse(JSON.stringify(e)),t=qh().use(pp).use(()=>r=>(Sn(r,"listItem",i=>{var l,o,u;if((l=i==null?void 0:i.data)!=null&&l.diff){const a=((o=i==null?void 0:i.data)==null?void 0:o.diff)==="ins"?"{++listItem++}":"{--listItem--}";i.children||(i.children=[]);const s=(u=i.children)==null?void 0:u[0];(s==null?void 0:s.type)==="paragraph"?s.children&&s.children.unshift({type:"text",value:a}):i.children.unshift({type:"paragraph",children:[{type:"text",value:a}]})}}),r)).use(Ay,{handlers:{ins:(r,i,l,o)=>`{++++
${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}
++++}`,del:(r,i,l,o)=>`{----
${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}
----}`,inlineIns:(r,i,l,o)=>`{++++${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}++++}`,inlineDel:(r,i,l,o)=>`{----${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}----}`}});return t.stringify(t.runSync(n))}function qw(e){const n=JSON.parse(JSON.stringify(e));mp(n);const t=Xw(n);return Gw(t)}function mp(e){if(Yw(e),e.children&&e.children.length>0)for(const n of e.children)mp(n)}function Yw(e){switch(e.data||(e.data={}),e.data.hProperties||(e.data.hProperties={}),e.data&&e.data.diff&&(e.data.hProperties["data-diff"]=e.data.diff),e.type){case"ins":case"del":e.data.hProperties.class="diff-block";break;case"inlineIns":case"inlineDel":e.data.hProperties.class="diff-inline";break;case"heading":e.data.hProperties.class=`heading-${e.depth}`;break;case"list":{e.data.hProperties.class=e.ordered?"ordered-list":"unordered-list";let n=1;e.children.forEach(t=>{t.type==="listItem"&&(t.data||(t.data={}),t.data.hProperties||(t.data.hProperties={}),t.data.hProperties.value=n,t.data.diff!=="del"&&n++)});break}case"listItem":e.data.hProperties.class="list-item",e.data&&e.data.diff&&(e.data.hProperties.class+=` list-item-${e.data.diff}`);break;case"paragraph":e.data.hProperties.class="paragraph";break;case"text":e.data.hProperties.class="text";break;case"strong":e.data.hProperties.class="strong";break;case"emphasis":e.data.hProperties.class="emphasis";break;case"delete":e.data.hProperties.class="delete";break;case"code":e.data.hProperties.class="code",e.lang&&(e.data.hProperties["data-language"]=e.lang);break;case"link":e.data.hProperties.href=e.url,e.data.hProperties.title=e.title;break;case"image":e.data.hProperties.src=e.url,e.data.hProperties.alt=e.alt,e.data.hProperties.title=e.title;break;case"table":e.data.hProperties.class="markdown-table";break;case"tableRow":e.data.hProperties.class="table-row";break;case"tableCell":e.data.hProperties.class="table-cell",e.isHeader&&(e.data.hProperties.class+=" table-header-cell"),e.align&&(e.data.hProperties.class+=` align-${e.align}`);break}}function Xw(e){let n="";if(e.type==="root"){n='<div class="markdown-content">';for(const t of e.children)n+=Nu(t);n+="</div>"}else n=Nu(e);return n}function Gw(e){const n=`
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
  `;return e.includes("<head>")?e.replace("<head>",`<head>${n}`):e.includes("<html>")?e.replace("<html>",`<html><head>${n}</head>`):`<html><head>${n}</head><body>${e}</body></html>`}function Nu(e){var i;if(!e)return"";const n=((i=e.data)==null?void 0:i.hProperties)||{},t=Object.entries(n).map(([l,o])=>`${l}="${o}"`).join(" ");let r="";switch(e.type){case"ins":r=`<ins ${t}>${we(e)}</ins>`;break;case"del":r=`<del ${t}>${we(e)}</del>`;break;case"inlineIns":r=`<ins ${t}>${we(e)}</ins>`;break;case"inlineDel":r=`<del ${t}>${we(e)}</del>`;break;case"heading":r=`<h${e.depth} ${t}>${we(e)}</h${e.depth}>`;break;case"paragraph":r=`<p ${t}>${we(e)}</p>`;break;case"text":r=zi(e.value);break;case"strong":r=`<strong ${t}>${we(e)}</strong>`;break;case"emphasis":r=`<em ${t}>${we(e)}</em>`;break;case"delete":r=`<del ${t}>${we(e)}</del>`;break;case"link":r=`<a ${t}>${we(e)}</a>`;break;case"image":r=`<img ${t} />`;break;case"list":{const l=e.ordered?"ol":"ul";r=`<${l} ${t}>${we(e)}</${l}>`;break}case"listItem":r=`<li ${t}>${we(e)}</li>`;break;case"code":e.lang?r=`<pre ${t}><code>${zi(e.value)}</code></pre>`:r=`<code ${t}>${zi(e.value)}</code>`;break;case"inlineCode":r=`<code ${t}>${zi(e.value)}</code>`;break;case"blockquote":r=`<blockquote ${t}>${we(e)}</blockquote>`;break;case"thematicBreak":r=`<hr ${t} />`;break;case"html":r=`<div ${t}>${e.value}</div>`;break;case"table":r=`<table ${t}>${we(e)}</table>`;break;case"tableRow":r=`<tr ${t}>${we(e)}</tr>`;break;case"tableCell":{const l=e.isHeader?"th":"td";r=`<${l} ${t}>${we(e)}</${l}>`;break}default:console.warn(`[markdown-ast-diff] renderAstToHtml: unhandled node type ${e.type}`),r=we(e)}return r}function we(e){return!e.children||e.children.length===0?"":e.children.map(n=>Nu(n)).join("")}function zi(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Jw=({testcases:e,selectedTestcase:n,onTestcaseChange:t})=>A.jsxs("div",{className:"controls",children:[A.jsx("label",{children:"选择测试用例："}),A.jsx("div",{className:"testcase-buttons",children:e.map(r=>A.jsx("button",{className:`testcase-button ${n===r.name?"selected":""}`,onClick:()=>t(r.name),children:r.name},r.name))})]}),$a=({markdownText:e,astJson:n})=>{const t=()=>{e&&navigator.clipboard.writeText(e).then(()=>{alert("Markdown 文本已复制到剪贴板")}).catch(i=>{console.error("复制失败:",i),alert("复制失败，请手动复制文本")})},r=()=>{if(!n)return;const i=JSON.stringify(n,null,2);navigator.clipboard.writeText(i).then(()=>{alert("AST JSON 已复制到剪贴板")}).catch(l=>{console.error("复制失败:",l),alert("复制失败，请手动复制JSON")})};return A.jsx("div",{children:A.jsxs("div",{className:"markdown-actions",children:[e&&A.jsx("button",{className:"action-button",onClick:t,title:"复制 Markdown 文本",children:A.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),A.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),n&&A.jsx("button",{className:"action-button",onClick:r,title:"复制 AST JSON",children:A.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),A.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}),A.jsx("path",{d:"M13 13h5"}),A.jsx("path",{d:"M13 17h5"}),A.jsx("path",{d:"M13 15h3"})]})})]})})},Kw={tokenize:Zw};function Zw(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(u){if(u===null){e.consume(u);return}return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),Q(e,n,"linePrefix")}function i(u){return e.enter("paragraph"),l(u)}function l(u){const a=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=a),t=a,o(u)}function o(u){if(u===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(u);return}return b(u)?(e.consume(u),e.exit("chunkText"),l):(e.consume(u),o)}}const ev={tokenize:nv},Qc={tokenize:tv};function nv(e){const n=this,t=[];let r=0,i,l,o;return u;function u(g){if(r<t.length){const _=t[r];return n.containerState=_[1],e.attempt(_[0].continuation,a,s)(g)}return s(g)}function a(g){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&m();const _=n.events.length;let E=_,w;for(;E--;)if(n.events[E][0]==="exit"&&n.events[E][1].type==="chunkFlow"){w=n.events[E][1].end;break}p(r);let M=_;for(;M<n.events.length;)n.events[M][1].end={...w},M++;return We(n.events,E+1,0,n.events.slice(_)),n.events.length=M,s(g)}return u(g)}function s(g){if(r===t.length){if(!i)return d(g);if(i.currentConstruct&&i.currentConstruct.concrete)return y(g);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Qc,f,c)(g)}function f(g){return i&&m(),p(r),d(g)}function c(g){return n.parser.lazy[n.now().line]=r!==t.length,o=n.now().offset,y(g)}function d(g){return n.containerState={},e.attempt(Qc,h,y)(g)}function h(g){return r++,t.push([n.currentConstruct,n.containerState]),d(g)}function y(g){if(g===null){i&&m(),p(0),e.consume(g);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),S(g)}function S(g){if(g===null){T(e.exit("chunkFlow"),!0),p(0),e.consume(g);return}return b(g)?(e.consume(g),T(e.exit("chunkFlow")),r=0,n.interrupt=void 0,u):(e.consume(g),S)}function T(g,_){const E=n.sliceStream(g);if(_&&E.push(null),g.previous=l,l&&(l.next=g),l=g,i.defineSkip(g.start),i.write(E),n.parser.lazy[g.start.line]){let w=i.events.length;for(;w--;)if(i.events[w][1].start.offset<o&&(!i.events[w][1].end||i.events[w][1].end.offset>o))return;const M=n.events.length;let z=M,j,v;for(;z--;)if(n.events[z][0]==="exit"&&n.events[z][1].type==="chunkFlow"){if(j){v=n.events[z][1].end;break}j=!0}for(p(r),w=M;w<n.events.length;)n.events[w][1].end={...v},w++;We(n.events,z+1,0,n.events.slice(M)),n.events.length=w}}function p(g){let _=t.length;for(;_-- >g;){const E=t[_];n.containerState=E[1],E[0].exit.call(n,e)}t.length=g}function m(){i.write([null]),l=void 0,i=void 0,n.containerState._closeFlow=void 0}}function tv(e,n,t){return Q(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const rv={tokenize:iv};function iv(e){const n=this,t=e.attempt(ui,r,e.attempt(this.parser.constructs.flowInitial,i,Q(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Ix,i)),"linePrefix")));return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const lv={resolveAll:yp()},ov=gp("string"),uv=gp("text");function gp(e){return{resolveAll:yp(e==="text"?av:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],l=t.attempt(i,o,u);return o;function o(f){return s(f)?l(f):u(f)}function u(f){if(f===null){t.consume(f);return}return t.enter("data"),t.consume(f),a}function a(f){return s(f)?(t.exit("data"),l(f)):(t.consume(f),a)}function s(f){if(f===null)return!0;const c=i[f];let d=-1;if(c)for(;++d<c.length;){const h=c[d];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function yp(e){return n;function n(t,r){let i=-1,l;for(;++i<=t.length;)l===void 0?t[i]&&t[i][1].type==="data"&&(l=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==l+2&&(t[l][1].end=t[i-1][1].end,t.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(t,r):t}}function av(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let l=i.length,o=-1,u=0,a;for(;l--;){const s=i[l];if(typeof s=="string"){for(o=s.length;s.charCodeAt(o-1)===32;)u++,o--;if(o)break;o=-1}else if(s===-2)a=!0,u++;else if(s!==-1){l++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(u=0),u){const s={type:t===e.length||a||u<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?o:r.start._bufferIndex+o,_index:r.start._index+l,line:r.end.line,column:r.end.column-u,offset:r.end.offset-u},end:{...r.end}};r.end={...s.start},r.start.offset===r.end.offset?Object.assign(r,s):(e.splice(t,0,["enter",s,n],["exit",s,n]),t+=2)}t++}return e}const sv={42:De,43:De,45:De,48:De,49:De,50:De,51:De,52:De,53:De,54:De,55:De,56:De,57:De,62:up},cv={91:Nx},fv={[-2]:zo,[-1]:zo,32:zo},dv={35:Bx,42:Qi,45:[Vc,Qi],60:Wx,61:Vc,95:Qi,96:Hc,126:Hc},hv={38:sp,92:ap},pv={[-5]:Io,[-4]:Io,[-3]:Io,33:sw,38:sp,42:Fu,60:[fx,Kx],91:fw,92:[$x,ap],93:ja,95:Fu,96:Cx},mv={null:[Fu,lv]},gv={null:[42,95]},yv={null:[]},kv=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:gv,contentInitial:cv,disable:yv,document:sv,flow:dv,flowInitial:fv,insideSpan:mv,string:hv,text:pv},Symbol.toStringTag,{value:"Module"}));function xv(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},l=[];let o=[],u=[];const a={attempt:M(E),check:M(w),consume:m,enter:g,exit:_,interrupt:M(w,{interrupt:!0})},s={code:null,containerState:{},defineSkip:S,events:[],now:y,parser:e,previous:null,sliceSerialize:d,sliceStream:h,write:c};let f=n.tokenize.call(s,a);return n.resolveAll&&l.push(n),s;function c(D){return o=Je(o,D),T(),o[o.length-1]!==null?[]:(z(n,0),s.events=Ol(l,s.events,s),s.events)}function d(D,N){return vv(h(D),N)}function h(D){return wv(o,D)}function y(){const{_bufferIndex:D,_index:N,line:q,column:ee,offset:V}=r;return{_bufferIndex:D,_index:N,line:q,column:ee,offset:V}}function S(D){i[D.line]=D.column,v()}function T(){let D;for(;r._index<o.length;){const N=o[r._index];if(typeof N=="string")for(D=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===D&&r._bufferIndex<N.length;)p(N.charCodeAt(r._bufferIndex));else p(N)}}function p(D){f=f(D)}function m(D){b(D)?(r.line++,r.column=1,r.offset+=D===-3?2:1,v()):D!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=D}function g(D,N){const q=N||{};return q.type=D,q.start=y(),s.events.push(["enter",q,s]),u.push(q),q}function _(D){const N=u.pop();return N.end=y(),s.events.push(["exit",N,s]),N}function E(D,N){z(D,N.from)}function w(D,N){N.restore()}function M(D,N){return q;function q(ee,V,de){let ce,L,$,k;return Array.isArray(ee)?J(ee):"tokenize"in ee?J([ee]):Y(ee);function Y(te){return mn;function mn(jn){const Tt=jn!==null&&te[jn],Pt=jn!==null&&te.null,ai=[...Array.isArray(Tt)?Tt:Tt?[Tt]:[],...Array.isArray(Pt)?Pt:Pt?[Pt]:[]];return J(ai)(jn)}}function J(te){return ce=te,L=0,te.length===0?de:x(te[L])}function x(te){return mn;function mn(jn){return k=j(),$=te,te.partial||(s.currentConstruct=te),te.name&&s.parser.constructs.disable.null.includes(te.name)?rn():te.tokenize.call(N?Object.assign(Object.create(s),N):s,a,pe,rn)(jn)}}function pe(te){return D($,k),V}function rn(te){return k.restore(),++L<ce.length?x(ce[L]):de}}}function z(D,N){D.resolveAll&&!l.includes(D)&&l.push(D),D.resolve&&We(s.events,N,s.events.length-N,D.resolve(s.events.slice(N),s)),D.resolveTo&&(s.events=D.resolveTo(s.events,s))}function j(){const D=y(),N=s.previous,q=s.currentConstruct,ee=s.events.length,V=Array.from(u);return{from:ee,restore:de};function de(){r=D,s.previous=N,s.currentConstruct=q,s.events.length=ee,u=V,v()}}function v(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function wv(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,l=n.end._bufferIndex;let o;if(t===i)o=[e[t].slice(r,l)];else{if(o=e.slice(t,i),r>-1){const u=o[0];typeof u=="string"?o[0]=u.slice(r):o.shift()}l>0&&o.push(e[i].slice(0,l))}return o}function vv(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const l=e[t];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&i)continue;o=" ";break}default:o=String.fromCharCode(l)}i=l===-2,r.push(o)}return r.join("")}function Sv(e){const r={constructs:Kh([kv,...(e||{}).extensions||[]]),content:i(Kw),defined:[],document:i(ev),flow:i(rv),lazy:{},string:i(ov),text:i(uv)};return r;function i(l){return o;function o(u){return xv(r,l,u)}}}function _v(e){for(;!cp(e););return e}const qc=/[\0\t\n\r]/g;function Cv(){let e=1,n="",t=!0,r;return i;function i(l,o,u){const a=[];let s,f,c,d,h;for(l=n+(typeof l=="string"?l.toString():new TextDecoder(o||void 0).decode(l)),c=0,n="",t&&(l.charCodeAt(0)===65279&&c++,t=void 0);c<l.length;){if(qc.lastIndex=c,s=qc.exec(l),d=s&&s.index!==void 0?s.index:l.length,h=l.charCodeAt(d),!s){n=l.slice(c);break}if(h===10&&c===d&&r)a.push(-3),r=void 0;else switch(r&&(a.push(-5),r=void 0),c<d&&(a.push(l.slice(c,d)),e+=d-c),h){case 0:{a.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,a.push(-2);e++<f;)a.push(-1);break}case 10:{a.push(-4),e=1;break}default:r=!0,e=1}c=d+1}return u&&(r&&a.push(-5),n&&a.push(n),a.push(null)),a}}const kp={}.hasOwnProperty;function Ev(e,n,t){return typeof n!="string"&&(t=n,n=void 0),Mv(t)(_v(Sv(t).document().write(Cv()(e,n,!0))))}function Mv(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(Ua),autolinkProtocol:j,autolinkEmail:j,atxHeading:l(Oa),blockQuote:l(Pt),characterEscape:j,characterReference:j,codeFenced:l(ai),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:l(ai,o),codeText:l(vp,o),codeTextData:j,data:j,codeFlowValue:j,definition:l(Sp),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:l(_p),hardBreakEscape:l(Ba),hardBreakTrailing:l(Ba),htmlFlow:l(Ha,o),htmlFlowData:j,htmlText:l(Ha,o),htmlTextData:j,image:l(Cp),label:o,link:l(Ua),listItem:l(Ep),listItemValue:d,listOrdered:l(Va,c),listUnordered:l(Va),paragraph:l(Mp),reference:x,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:l(Oa),strong:l(Tp),thematicBreak:l(zp)},exit:{atxHeading:a(),atxHeadingSequence:E,autolink:a(),autolinkEmail:Tt,autolinkProtocol:jn,blockQuote:a(),characterEscapeValue:v,characterReferenceMarkerHexadecimal:rn,characterReferenceMarkerNumeric:rn,characterReferenceValue:te,characterReference:mn,codeFenced:a(T),codeFencedFence:S,codeFencedFenceInfo:h,codeFencedFenceMeta:y,codeFlowValue:v,codeIndented:a(p),codeText:a(V),codeTextData:v,data:v,definition:a(),definitionDestinationString:_,definitionLabelString:m,definitionTitleString:g,emphasis:a(),hardBreakEscape:a(N),hardBreakTrailing:a(N),htmlFlow:a(q),htmlFlowData:v,htmlText:a(ee),htmlTextData:v,image:a(ce),label:$,labelText:L,lineEnding:D,link:a(de),listItem:a(),listOrdered:a(),listUnordered:a(),paragraph:a(),referenceString:pe,resourceDestinationString:k,resourceTitleString:Y,resource:J,setextHeading:a(z),setextHeadingLineSequence:M,setextHeadingText:w,strong:a(),thematicBreak:a()}};xp(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(C){let I={type:"root",children:[]};const O={stack:[I],tokenStack:[],config:n,enter:u,exit:s,buffer:o,resume:f,data:t},W=[];let K=-1;for(;++K<C.length;)if(C[K][1].type==="listOrdered"||C[K][1].type==="listUnordered")if(C[K][0]==="enter")W.push(K);else{const ln=W.pop();K=i(C,ln,K)}for(K=-1;++K<C.length;){const ln=n[C[K][0]];kp.call(ln,C[K][1].type)&&ln[C[K][1].type].call(Object.assign({sliceSerialize:C[K][2].sliceSerialize},O),C[K][1])}if(O.tokenStack.length>0){const ln=O.tokenStack[O.tokenStack.length-1];(ln[1]||Yc).call(O,void 0,ln[0])}for(I.position={start:Bn(C.length>0?C[0][1].start:{line:1,column:1,offset:0}),end:Bn(C.length>0?C[C.length-2][1].end:{line:1,column:1,offset:0})},K=-1;++K<n.transforms.length;)I=n.transforms[K](I)||I;return I}function i(C,I,O){let W=I-1,K=-1,ln=!1,st,Cn,ar,sr;for(;++W<=O;){const Be=C[W];switch(Be[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Be[0]==="enter"?K++:K--,sr=void 0;break}case"lineEndingBlank":{Be[0]==="enter"&&(st&&!sr&&!K&&!ar&&(ar=W),sr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:sr=void 0}if(!K&&Be[0]==="enter"&&Be[1].type==="listItemPrefix"||K===-1&&Be[0]==="exit"&&(Be[1].type==="listUnordered"||Be[1].type==="listOrdered")){if(st){let zt=W;for(Cn=void 0;zt--;){const En=C[zt];if(En[1].type==="lineEnding"||En[1].type==="lineEndingBlank"){if(En[0]==="exit")continue;Cn&&(C[Cn][1].type="lineEndingBlank",ln=!0),En[1].type="lineEnding",Cn=zt}else if(!(En[1].type==="linePrefix"||En[1].type==="blockQuotePrefix"||En[1].type==="blockQuotePrefixWhitespace"||En[1].type==="blockQuoteMarker"||En[1].type==="listItemIndent"))break}ar&&(!Cn||ar<Cn)&&(st._spread=!0),st.end=Object.assign({},Cn?C[Cn][1].start:Be[1].end),C.splice(Cn||W,0,["exit",st,Be[2]]),W++,O++}if(Be[1].type==="listItemPrefix"){const zt={type:"listItem",_spread:!1,start:Object.assign({},Be[1].start),end:void 0};st=zt,C.splice(W,0,["enter",zt,Be[2]]),W++,O++,ar=void 0,sr=!0}}}return C[I][1]._spread=ln,O}function l(C,I){return O;function O(W){u.call(this,C(W),W),I&&I.call(this,W)}}function o(){this.stack.push({type:"fragment",children:[]})}function u(C,I,O){this.stack[this.stack.length-1].children.push(C),this.stack.push(C),this.tokenStack.push([I,O||void 0]),C.position={start:Bn(I.start),end:void 0}}function a(C){return I;function I(O){C&&C.call(this,O),s.call(this,O)}}function s(C,I){const O=this.stack.pop(),W=this.tokenStack.pop();if(W)W[0].type!==C.type&&(I?I.call(this,C,W[0]):(W[1]||Yc).call(this,C,W[0]));else throw new Error("Cannot close `"+C.type+"` ("+Rr({start:C.start,end:C.end})+"): it’s not open");O.position.end=Bn(C.end)}function f(){return Aa(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function d(C){if(this.data.expectingFirstListItemValue){const I=this.stack[this.stack.length-2];I.start=Number.parseInt(this.sliceSerialize(C),10),this.data.expectingFirstListItemValue=void 0}}function h(){const C=this.resume(),I=this.stack[this.stack.length-1];I.lang=C}function y(){const C=this.resume(),I=this.stack[this.stack.length-1];I.meta=C}function S(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function T(){const C=this.resume(),I=this.stack[this.stack.length-1];I.value=C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function p(){const C=this.resume(),I=this.stack[this.stack.length-1];I.value=C.replace(/(\r?\n|\r)$/g,"")}function m(C){const I=this.resume(),O=this.stack[this.stack.length-1];O.label=I,O.identifier=hn(this.sliceSerialize(C)).toLowerCase()}function g(){const C=this.resume(),I=this.stack[this.stack.length-1];I.title=C}function _(){const C=this.resume(),I=this.stack[this.stack.length-1];I.url=C}function E(C){const I=this.stack[this.stack.length-1];if(!I.depth){const O=this.sliceSerialize(C).length;I.depth=O}}function w(){this.data.setextHeadingSlurpLineEnding=!0}function M(C){const I=this.stack[this.stack.length-1];I.depth=this.sliceSerialize(C).codePointAt(0)===61?1:2}function z(){this.data.setextHeadingSlurpLineEnding=void 0}function j(C){const O=this.stack[this.stack.length-1].children;let W=O[O.length-1];(!W||W.type!=="text")&&(W=Pp(),W.position={start:Bn(C.start),end:void 0},O.push(W)),this.stack.push(W)}function v(C){const I=this.stack.pop();I.value+=this.sliceSerialize(C),I.position.end=Bn(C.end)}function D(C){const I=this.stack[this.stack.length-1];if(this.data.atHardBreak){const O=I.children[I.children.length-1];O.position.end=Bn(C.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(I.type)&&(j.call(this,C),v.call(this,C))}function N(){this.data.atHardBreak=!0}function q(){const C=this.resume(),I=this.stack[this.stack.length-1];I.value=C}function ee(){const C=this.resume(),I=this.stack[this.stack.length-1];I.value=C}function V(){const C=this.resume(),I=this.stack[this.stack.length-1];I.value=C}function de(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const I=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=I,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function ce(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const I=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=I,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function L(C){const I=this.sliceSerialize(C),O=this.stack[this.stack.length-2];O.label=Wh(I),O.identifier=hn(I).toLowerCase()}function $(){const C=this.stack[this.stack.length-1],I=this.resume(),O=this.stack[this.stack.length-1];if(this.data.inReference=!0,O.type==="link"){const W=C.children;O.children=W}else O.alt=I}function k(){const C=this.resume(),I=this.stack[this.stack.length-1];I.url=C}function Y(){const C=this.resume(),I=this.stack[this.stack.length-1];I.title=C}function J(){this.data.inReference=void 0}function x(){this.data.referenceType="collapsed"}function pe(C){const I=this.resume(),O=this.stack[this.stack.length-1];O.label=I,O.identifier=hn(this.sliceSerialize(C)).toLowerCase(),this.data.referenceType="full"}function rn(C){this.data.characterReferenceType=C.type}function te(C){const I=this.sliceSerialize(C),O=this.data.characterReferenceType;let W;O?(W=Vh(I,O==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):W=Na(I);const K=this.stack[this.stack.length-1];K.value+=W}function mn(C){const I=this.stack.pop();I.position.end=Bn(C.end)}function jn(C){v.call(this,C);const I=this.stack[this.stack.length-1];I.url=this.sliceSerialize(C)}function Tt(C){v.call(this,C);const I=this.stack[this.stack.length-1];I.url="mailto:"+this.sliceSerialize(C)}function Pt(){return{type:"blockquote",children:[]}}function ai(){return{type:"code",lang:null,meta:null,value:""}}function vp(){return{type:"inlineCode",value:""}}function Sp(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function _p(){return{type:"emphasis",children:[]}}function Oa(){return{type:"heading",depth:0,children:[]}}function Ba(){return{type:"break"}}function Ha(){return{type:"html",value:""}}function Cp(){return{type:"image",title:null,url:"",alt:null}}function Ua(){return{type:"link",title:null,url:"",children:[]}}function Va(C){return{type:"list",ordered:C.type==="listOrdered",start:null,spread:C._spread,children:[]}}function Ep(C){return{type:"listItem",spread:C._spread,checked:null,children:[]}}function Mp(){return{type:"paragraph",children:[]}}function Tp(){return{type:"strong",children:[]}}function Pp(){return{type:"text",value:""}}function zp(){return{type:"thematicBreak"}}}function Bn(e){return{line:e.line,column:e.column,offset:e.offset}}function xp(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?xp(e,r):Tv(e,r)}}function Tv(e,n){let t;for(t in n)if(kp.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function Yc(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Rr({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Rr({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Rr({start:n.start,end:n.end})+") is still open")}function Pv(e){const n=this;n.parser=t;function t(r){return Ev(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function Ru(e){return qh().use(Pv).use(pp).parse(e)}const Xc=({title:e,value:n,onChange:t})=>A.jsxs("div",{className:"markdown-container",children:[A.jsxs("div",{className:"markdown-header",children:[A.jsx("h2",{children:e}),A.jsx($a,{markdownText:n,astJson:Ru(n)})]}),A.jsx("textarea",{className:"markdown-content",value:n,onChange:t})]}),zv=({diffResult:e})=>A.jsxs("div",{className:"markdown-container",children:[A.jsx("h2",{children:"文本差异"}),A.jsx("pre",{className:"markdown-content diff-content",children:e.map((n,t)=>{const r=n.added?"green":n.removed?"red":"grey";return A.jsx("span",{style:{color:r},children:n.value},t)})})]}),Iv=({diffMarkdownText:e})=>{const n=r=>{const i=document.createElement("textarea");return i.innerHTML=r,i.value},t=()=>{const r=n(e),i=[];let l=0;const o=[...r.matchAll(/\{\+\+\+\+(.*?)\+\+\+\+\}/gs)],u=[...r.matchAll(/\{----(.*?)----\}/gs)],a=[...r.matchAll(/\{\+\+listItem\+\+\}/g)],s=[...r.matchAll(/\{--listItem--\}/g)],f=[...o,...u,...a,...s].sort((c,d)=>c.index-d.index);return f.length===0?r:(f.forEach((c,d)=>{const h=c[0],y=c.index;y>l&&i.push(A.jsx("span",{children:r.substring(l,y)},`text-${d}-before`)),h==="{++listItem++}"?i.push(A.jsx("span",{className:"list-item-added",children:h},`match-${d}`)):h==="{--listItem--}"?i.push(A.jsx("span",{className:"list-item-removed",children:h},`match-${d}`)):h.startsWith("{++++")?i.push(A.jsx("span",{className:"diff-added-inline",children:h},`match-${d}`)):h.startsWith("{----")&&i.push(A.jsx("span",{className:"diff-removed-inline",children:h},`match-${d}`)),l=y+h.length}),l<r.length&&i.push(A.jsx("span",{children:r.substring(l)},"text-last")),i)};return A.jsxs("div",{className:"markdown-container",children:[A.jsxs("div",{className:"markdown-header",children:[A.jsx("h2",{children:"AST Diff Markdown"}),A.jsx($a,{markdownText:e})]}),A.jsx("pre",{className:"markdown-content ast-diff-content",children:t()})]})},Lv=({htmlContent:e})=>{const n=()=>{const t=new Blob([e],{type:"text/html"});return URL.createObjectURL(t)};return A.jsxs("div",{className:"markdown-container",children:[A.jsx("h2",{children:"AST Diff HTML"}),A.jsx("iframe",{className:"html-preview",src:n(),title:"HTML Diff Preview"})]})},Av=({astJson:e})=>A.jsxs("div",{className:"markdown-container",children:[A.jsxs("div",{className:"markdown-header",children:[A.jsx("h2",{children:"AST JSON"}),A.jsx($a,{astJson:e})]}),A.jsx("pre",{className:"ast-json-content",children:JSON.stringify(e,null,2)})]});function Dv(){const[e,n]=un.useState("formatting"),[t,r]=un.useState(""),[i,l]=un.useState(""),[o,u]=un.useState([]),[a,s]=un.useState(""),[f,c]=un.useState(""),[d,h]=un.useState(null);un.useEffect(()=>{const m=ec.find(g=>g.name===e);m&&(r(m.oldMarkdown),l(m.newMarkdown),y(m.oldMarkdown,m.newMarkdown))},[e]);const y=(m,g)=>{const _=fh(m,g);u(_);const E=M0(_0(Ru(m),Ru(g))),w=Qw(E),M=qw(E);h(E),s(w),c(M)},S=m=>{n(m)},T=m=>{const g=m.target.value;r(g),y(g,i)},p=m=>{const g=m.target.value;l(g),y(t,g)};return A.jsxs("div",{className:"container",children:[A.jsx("header",{className:"app-header",children:A.jsx("h1",{className:"app-title",children:"Markdown Diff Viewer"})}),A.jsx("div",{className:"app-description",children:A.jsx("p",{children:"比较并可视化展示Markdown文档的差异，支持AST级别的精确对比"})}),A.jsx(Jw,{testcases:ec,selectedTestcase:e,onTestcaseChange:S}),A.jsxs("div",{className:"grid-layout row-1",children:[A.jsx(Xc,{title:"原始Markdown",value:t,onChange:T}),A.jsx(zv,{diffResult:o}),A.jsx(Xc,{title:"新Markdown",value:i,onChange:p})]}),A.jsxs("div",{className:"grid-layout row-2",children:[A.jsx(Iv,{diffMarkdownText:a}),A.jsx(Lv,{htmlContent:f})]}),A.jsx("div",{className:"grid-layout row-3",children:A.jsx(Av,{astJson:d})}),A.jsxs("div",{className:"external-links",children:[A.jsxs("a",{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer",children:[A.jsx("span",{className:"link-icon",children:"🔍"})," AST Explorer"]}),A.jsxs("a",{href:"https://jsonhero.io",target:"_blank",rel:"noopener noreferrer",children:[A.jsx("span",{className:"link-icon",children:"🦸"})," JSONHero"]})]}),A.jsx("footer",{className:"app-footer",children:A.jsx("p",{children:"Markdown Diff Viewer - 高效比较Markdown文档差异的工具"})})]})}const wp=document.getElementById("root");if(!wp)throw new Error("Root element not found");Lo.createRoot(wp).render(A.jsx(Wp.StrictMode,{children:A.jsx(Dv,{})}));
