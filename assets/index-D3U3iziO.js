(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dd={exports:{}},Wl={},pd={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gi=Symbol.for("react.element"),fg=Symbol.for("react.portal"),dg=Symbol.for("react.fragment"),pg=Symbol.for("react.strict_mode"),hg=Symbol.for("react.profiler"),mg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),yg=Symbol.for("react.forward_ref"),kg=Symbol.for("react.suspense"),xg=Symbol.for("react.memo"),wg=Symbol.for("react.lazy"),qs=Symbol.iterator;function vg(e){return e===null||typeof e!="object"?null:(e=qs&&e[qs]||e["@@iterator"],typeof e=="function"?e:null)}var hd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},md=Object.assign,gd={};function pr(e,n,t){this.props=e,this.context=n,this.refs=gd,this.updater=t||hd}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yd(){}yd.prototype=pr.prototype;function Ea(e,n,t){this.props=e,this.context=n,this.refs=gd,this.updater=t||hd}var Ta=Ea.prototype=new yd;Ta.constructor=Ea;md(Ta,pr.prototype);Ta.isPureReactComponent=!0;var Qs=Array.isArray,kd=Object.prototype.hasOwnProperty,Pa={current:null},xd={key:!0,ref:!0,__self:!0,__source:!0};function wd(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)kd.call(n,r)&&!xd.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:gi,type:e,key:l,ref:o,props:i,_owner:Pa.current}}function Sg(e,n){return{$$typeof:gi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ma(e){return typeof e=="object"&&e!==null&&e.$$typeof===gi}function Cg(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ys=/\/+/g;function ko(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Cg(""+e.key):n.toString(36)}function Gi(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case gi:case fg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ko(o,0):r,Qs(i)?(t="",e!=null&&(t=e.replace(Ys,"$&/")+"/"),Gi(i,n,t,"",function(s){return s})):i!=null&&(Ma(i)&&(i=Sg(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ys,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Qs(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+ko(l,u);o+=Gi(l,n,t,a,i)}else if(a=vg(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+ko(l,u++),o+=Gi(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function _i(e,n,t){if(e==null)return e;var r=[],i=0;return Gi(e,r,"","",function(l){return n.call(t,l,i++)}),r}function _g(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Ki={transition:null},Eg={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Ki,ReactCurrentOwner:Pa};function vd(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:_i,forEach:function(e,n,t){_i(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return _i(e,function(){n++}),n},toArray:function(e){return _i(e,function(n){return n})||[]},only:function(e){if(!Ma(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=pr;W.Fragment=dg;W.Profiler=hg;W.PureComponent=Ea;W.StrictMode=pg;W.Suspense=kg;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eg;W.act=vd;W.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=md({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Pa.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)kd.call(n,a)&&!xd.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:gi,type:e.type,key:i,ref:l,props:r,_owner:o}};W.createContext=function(e){return e={$$typeof:gg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mg,_context:e},e.Consumer=e};W.createElement=wd;W.createFactory=function(e){var n=wd.bind(null,e);return n.type=e,n};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:yg,render:e}};W.isValidElement=Ma;W.lazy=function(e){return{$$typeof:wg,_payload:{_status:-1,_result:e},_init:_g}};W.memo=function(e,n){return{$$typeof:xg,type:e,compare:n===void 0?null:n}};W.startTransition=function(e){var n=Ki.transition;Ki.transition={};try{e()}finally{Ki.transition=n}};W.unstable_act=vd;W.useCallback=function(e,n){return Fe.current.useCallback(e,n)};W.useContext=function(e){return Fe.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};W.useEffect=function(e,n){return Fe.current.useEffect(e,n)};W.useId=function(){return Fe.current.useId()};W.useImperativeHandle=function(e,n,t){return Fe.current.useImperativeHandle(e,n,t)};W.useInsertionEffect=function(e,n){return Fe.current.useInsertionEffect(e,n)};W.useLayoutEffect=function(e,n){return Fe.current.useLayoutEffect(e,n)};W.useMemo=function(e,n){return Fe.current.useMemo(e,n)};W.useReducer=function(e,n,t){return Fe.current.useReducer(e,n,t)};W.useRef=function(e){return Fe.current.useRef(e)};W.useState=function(e){return Fe.current.useState(e)};W.useSyncExternalStore=function(e,n,t){return Fe.current.useSyncExternalStore(e,n,t)};W.useTransition=function(){return Fe.current.useTransition()};W.version="18.3.1";pd.exports=W;var Se=pd.exports;const Tg=fd(Se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg=Se,Mg=Symbol.for("react.element"),Ag=Symbol.for("react.fragment"),Ig=Object.prototype.hasOwnProperty,Lg=Pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zg={key:!0,ref:!0,__self:!0,__source:!0};function Sd(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Ig.call(n,r)&&!zg.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Mg,type:e,key:l,ref:o,props:i,_owner:Lg.current}}Wl.Fragment=Ag;Wl.jsx=Sd;Wl.jsxs=Sd;dd.exports=Wl;var U=dd.exports,su={},Cd={exports:{}},nn={},_d={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,F){var k=N.length;N.push(F);e:for(;0<k;){var X=k-1>>>1,J=N[X];if(0<i(J,F))N[X]=F,N[k]=J,k=X;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var F=N[0],k=N.pop();if(k!==F){N[0]=k;e:for(var X=0,J=N.length,x=J>>>1;X<x;){var ke=2*(X+1)-1,Sn=N[ke],re=ke+1,Cn=N[re];if(0>i(Sn,k))re<J&&0>i(Cn,Sn)?(N[X]=Cn,N[re]=k,X=re):(N[X]=Sn,N[ke]=k,X=ke);else if(re<J&&0>i(Cn,k))N[X]=Cn,N[re]=k,X=re;else break e}}return F}function i(N,F){var k=N.sortIndex-F.sortIndex;return k!==0?k:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],s=[],f=1,c=null,p=3,d=!1,g=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var F=t(s);F!==null;){if(F.callback===null)r(s);else if(F.startTime<=N)r(s),F.sortIndex=F.expirationTime,n(a,F);else break;F=t(s)}}function C(N){if(w=!1,y(N),!g)if(t(a)!==null)g=!0,me(_);else{var F=t(s);F!==null&&pe(C,F.startTime-N)}}function _(N,F){g=!1,w&&(w=!1,h(A),A=-1),d=!0;var k=p;try{for(y(F),c=t(a);c!==null&&(!(c.expirationTime>F)||N&&!z());){var X=c.callback;if(typeof X=="function"){c.callback=null,p=c.priorityLevel;var J=X(c.expirationTime<=F);F=e.unstable_now(),typeof J=="function"?c.callback=J:c===t(a)&&r(a),y(F)}else r(a);c=t(a)}if(c!==null)var x=!0;else{var ke=t(s);ke!==null&&pe(C,ke.startTime-F),x=!1}return x}finally{c=null,p=k,d=!1}}var v=!1,P=null,A=-1,B=5,S=-1;function z(){return!(e.unstable_now()-S<B)}function R(){if(P!==null){var N=e.unstable_now();S=N;var F=!0;try{F=P(!0,N)}finally{F?Y():(v=!1,P=null)}}else v=!1}var Y;if(typeof m=="function")Y=function(){m(R)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,Q=te.port2;te.port1.onmessage=R,Y=function(){Q.postMessage(null)}}else Y=function(){T(R,0)};function me(N){P=N,v||(v=!0,Y())}function pe(N,F){A=T(function(){N(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){g||d||(g=!0,me(_))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var k=p;p=F;try{return N()}finally{p=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=p;p=N;try{return F()}finally{p=k}},e.unstable_scheduleCallback=function(N,F,k){var X=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?X+k:X):k=X,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=k+J,N={id:f++,callback:F,priorityLevel:N,startTime:k,expirationTime:J,sortIndex:-1},k>X?(N.sortIndex=k,n(s,N),t(a)===null&&N===t(s)&&(w?(h(A),A=-1):w=!0,pe(C,k-X))):(N.sortIndex=J,n(a,N),g||d||(g=!0,me(_))),N},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(N){var F=p;return function(){var k=p;p=F;try{return N.apply(this,arguments)}finally{p=k}}}})(Ed);_d.exports=Ed;var Ng=_d.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg=Se,en=Ng;function M(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Td=new Set,Jr={};function zt(e,n){or(e,n),or(e+"Capture",n)}function or(e,n){for(Jr[e]=n,e=0;e<n.length;e++)Td.add(n[e])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=Object.prototype.hasOwnProperty,bg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xs={},Gs={};function Rg(e){return cu.call(Gs,e)?!0:cu.call(Xs,e)?!1:bg.test(e)?Gs[e]=!0:(Xs[e]=!0,!1)}function Fg(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Og(e,n,t,r){if(n===null||typeof n>"u"||Fg(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Oe(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ie[n]=new Oe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Aa=/[\-:]([a-z])/g;function Ia(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Aa,Ia);Ie[n]=new Oe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Aa,Ia);Ie[n]=new Oe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Aa,Ia);Ie[n]=new Oe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function La(e,n,t,r){var i=Ie.hasOwnProperty(n)?Ie[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Og(n,t,i,r)&&(t=null),r||i===null?Rg(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Vn=Dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ei=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),Pd=Symbol.for("react.provider"),Md=Symbol.for("react.context"),Na=Symbol.for("react.forward_ref"),du=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),Da=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),Ad=Symbol.for("react.offscreen"),Ks=Symbol.iterator;function vr(e){return e===null||typeof e!="object"?null:(e=Ks&&e[Ks]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,xo;function Nr(e){if(xo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);xo=n&&n[1]||""}return`
`+xo+e}var wo=!1;function vo(e,n){if(!e||wo)return"";wo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{wo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Nr(e):""}function jg(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=vo(e.type,!1),e;case 11:return e=vo(e.type.render,!1),e;case 1:return e=vo(e.type,!0),e;default:return""}}function hu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Bt:return"Portal";case fu:return"Profiler";case za:return"StrictMode";case du:return"Suspense";case pu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Md:return(e.displayName||"Context")+".Consumer";case Pd:return(e._context.displayName||"Context")+".Provider";case Na:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Da:return n=e.displayName||null,n!==null?n:hu(e.type)||"Memo";case Xn:n=e._payload,e=e._init;try{return hu(e(n))}catch{}}return null}function $g(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hu(n);case 8:return n===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function st(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Id(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Bg(e){var n=Id(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ti(e){e._valueTracker||(e._valueTracker=Bg(e))}function Ld(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Id(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mu(e,n){var t=n.checked;return fe({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Zs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=st(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function zd(e,n){n=n.checked,n!=null&&La(e,"checked",n,!1)}function gu(e,n){zd(e,n);var t=st(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?yu(e,n.type,t):n.hasOwnProperty("defaultValue")&&yu(e,n.type,st(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Js(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function yu(e,n,t){(n!=="number"||pl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Dr=Array.isArray;function Jt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+st(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function ku(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(M(91));return fe({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ec(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(M(92));if(Dr(t)){if(1<t.length)throw Error(M(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:st(t)}}function Nd(e,n){var t=st(n.value),r=st(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function nc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Dd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xu(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Dd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pi,bd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ei(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hg=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){Hg.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),jr[n]=jr[e]})});function Rd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||jr.hasOwnProperty(e)&&jr[e]?(""+n).trim():n+"px"}function Fd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Rd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Ug=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wu(e,n){if(n){if(Ug[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(M(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(M(61))}if(n.style!=null&&typeof n.style!="object")throw Error(M(62))}}function vu(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Su=null;function ba(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cu=null,er=null,nr=null;function tc(e){if(e=xi(e)){if(typeof Cu!="function")throw Error(M(280));var n=e.stateNode;n&&(n=Gl(n),Cu(e.stateNode,e.type,n))}}function Od(e){er?nr?nr.push(e):nr=[e]:er=e}function jd(){if(er){var e=er,n=nr;if(nr=er=null,tc(e),n)for(e=0;e<n.length;e++)tc(n[e])}}function $d(e,n){return e(n)}function Bd(){}var So=!1;function Hd(e,n,t){if(So)return e(n,t);So=!0;try{return $d(e,n,t)}finally{So=!1,(er!==null||nr!==null)&&(Bd(),jd())}}function ni(e,n){var t=e.stateNode;if(t===null)return null;var r=Gl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(M(231,n,typeof t));return t}var _u=!1;if($n)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{_u=!1}function Vg(e,n,t,r,i,l,o,u,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(f){this.onError(f)}}var $r=!1,hl=null,ml=!1,Eu=null,Wg={onError:function(e){$r=!0,hl=e}};function qg(e,n,t,r,i,l,o,u,a){$r=!1,hl=null,Vg.apply(Wg,arguments)}function Qg(e,n,t,r,i,l,o,u,a){if(qg.apply(this,arguments),$r){if($r){var s=hl;$r=!1,hl=null}else throw Error(M(198));ml||(ml=!0,Eu=s)}}function Nt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ud(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function rc(e){if(Nt(e)!==e)throw Error(M(188))}function Yg(e){var n=e.alternate;if(!n){if(n=Nt(e),n===null)throw Error(M(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return rc(i),e;if(l===r)return rc(i),n;l=l.sibling}throw Error(M(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(M(189))}}if(t.alternate!==r)throw Error(M(190))}if(t.tag!==3)throw Error(M(188));return t.stateNode.current===t?e:n}function Vd(e){return e=Yg(e),e!==null?Wd(e):null}function Wd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Wd(e);if(n!==null)return n;e=e.sibling}return null}var qd=en.unstable_scheduleCallback,ic=en.unstable_cancelCallback,Xg=en.unstable_shouldYield,Gg=en.unstable_requestPaint,he=en.unstable_now,Kg=en.unstable_getCurrentPriorityLevel,Ra=en.unstable_ImmediatePriority,Qd=en.unstable_UserBlockingPriority,gl=en.unstable_NormalPriority,Zg=en.unstable_LowPriority,Yd=en.unstable_IdlePriority,ql=null,An=null;function Jg(e){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(ql,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:t1,e1=Math.log,n1=Math.LN2;function t1(e){return e>>>=0,e===0?32:31-(e1(e)/n1|0)|0}var Mi=64,Ai=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yl(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=br(u):(l&=o,l!==0&&(r=br(l)))}else o=t&~i,o!==0?r=br(o):l!==0&&(r=br(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-yn(n),i=1<<t,r|=e[t],n&=~i;return r}function r1(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i1(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-yn(l),u=1<<o,a=i[o];a===-1?(!(u&t)||u&r)&&(i[o]=r1(u,n)):a<=n&&(e.expiredLanes|=u),l&=~u}}function Tu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xd(){var e=Mi;return Mi<<=1,!(Mi&4194240)&&(Mi=64),e}function Co(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function yi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-yn(n),e[n]=t}function l1(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-yn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Fa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-yn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var Z=0;function Gd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kd,Oa,Zd,Jd,ep,Pu=!1,Ii=[],nt=null,tt=null,rt=null,ti=new Map,ri=new Map,Kn=[],o1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lc(e,n){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":tt=null;break;case"mouseover":case"mouseout":rt=null;break;case"pointerover":case"pointerout":ti.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ri.delete(n.pointerId)}}function Cr(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=xi(n),n!==null&&Oa(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function u1(e,n,t,r,i){switch(n){case"focusin":return nt=Cr(nt,e,n,t,r,i),!0;case"dragenter":return tt=Cr(tt,e,n,t,r,i),!0;case"mouseover":return rt=Cr(rt,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return ti.set(l,Cr(ti.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,ri.set(l,Cr(ri.get(l)||null,e,n,t,r,i)),!0}return!1}function np(e){var n=wt(e.target);if(n!==null){var t=Nt(n);if(t!==null){if(n=t.tag,n===13){if(n=Ud(t),n!==null){e.blockedOn=n,ep(e.priority,function(){Zd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Mu(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Su=r,t.target.dispatchEvent(r),Su=null}else return n=xi(t),n!==null&&Oa(n),e.blockedOn=t,!1;n.shift()}return!0}function oc(e,n,t){Zi(e)&&t.delete(n)}function a1(){Pu=!1,nt!==null&&Zi(nt)&&(nt=null),tt!==null&&Zi(tt)&&(tt=null),rt!==null&&Zi(rt)&&(rt=null),ti.forEach(oc),ri.forEach(oc)}function _r(e,n){e.blockedOn===n&&(e.blockedOn=null,Pu||(Pu=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,a1)))}function ii(e){function n(i){return _r(i,e)}if(0<Ii.length){_r(Ii[0],e);for(var t=1;t<Ii.length;t++){var r=Ii[t];r.blockedOn===e&&(r.blockedOn=null)}}for(nt!==null&&_r(nt,e),tt!==null&&_r(tt,e),rt!==null&&_r(rt,e),ti.forEach(n),ri.forEach(n),t=0;t<Kn.length;t++)r=Kn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kn.length&&(t=Kn[0],t.blockedOn===null);)np(t),t.blockedOn===null&&Kn.shift()}var tr=Vn.ReactCurrentBatchConfig,kl=!0;function s1(e,n,t,r){var i=Z,l=tr.transition;tr.transition=null;try{Z=1,ja(e,n,t,r)}finally{Z=i,tr.transition=l}}function c1(e,n,t,r){var i=Z,l=tr.transition;tr.transition=null;try{Z=4,ja(e,n,t,r)}finally{Z=i,tr.transition=l}}function ja(e,n,t,r){if(kl){var i=Mu(e,n,t,r);if(i===null)No(e,n,r,xl,t),lc(e,r);else if(u1(i,e,n,t,r))r.stopPropagation();else if(lc(e,r),n&4&&-1<o1.indexOf(e)){for(;i!==null;){var l=xi(i);if(l!==null&&Kd(l),l=Mu(e,n,t,r),l===null&&No(e,n,r,xl,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else No(e,n,r,null,t)}}var xl=null;function Mu(e,n,t,r){if(xl=null,e=ba(r),e=wt(e),e!==null)if(n=Nt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ud(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return xl=e,null}function tp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kg()){case Ra:return 1;case Qd:return 4;case gl:case Zg:return 16;case Yd:return 536870912;default:return 16}default:return 16}}var Jn=null,$a=null,Ji=null;function rp(){if(Ji)return Ji;var e,n=$a,t=n.length,r,i="value"in Jn?Jn.value:Jn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Ji=i.slice(e,1<r?1-r:void 0)}function el(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function uc(){return!1}function tn(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Li:uc,this.isPropagationStopped=uc,this}return fe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),n}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=tn(hr),ki=fe({},hr,{view:0,detail:0}),f1=tn(ki),_o,Eo,Er,Ql=fe({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ha,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(_o=e.screenX-Er.screenX,Eo=e.screenY-Er.screenY):Eo=_o=0,Er=e),_o)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),ac=tn(Ql),d1=fe({},Ql,{dataTransfer:0}),p1=tn(d1),h1=fe({},ki,{relatedTarget:0}),To=tn(h1),m1=fe({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),g1=tn(m1),y1=fe({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k1=tn(y1),x1=fe({},hr,{data:0}),sc=tn(x1),w1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=S1[e])?!!n[e]:!1}function Ha(){return C1}var _1=fe({},ki,{key:function(e){if(e.key){var n=w1[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?v1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ha,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E1=tn(_1),T1=fe({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cc=tn(T1),P1=fe({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ha}),M1=tn(P1),A1=fe({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),I1=tn(A1),L1=fe({},Ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),z1=tn(L1),N1=[9,13,27,32],Ua=$n&&"CompositionEvent"in window,Br=null;$n&&"documentMode"in document&&(Br=document.documentMode);var D1=$n&&"TextEvent"in window&&!Br,ip=$n&&(!Ua||Br&&8<Br&&11>=Br),fc=" ",dc=!1;function lp(e,n){switch(e){case"keyup":return N1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function b1(e,n){switch(e){case"compositionend":return op(n);case"keypress":return n.which!==32?null:(dc=!0,fc);case"textInput":return e=n.data,e===fc&&dc?null:e;default:return null}}function R1(e,n){if(Ut)return e==="compositionend"||!Ua&&lp(e,n)?(e=rp(),Ji=$a=Jn=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ip&&n.locale!=="ko"?null:n.data;default:return null}}var F1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!F1[e.type]:n==="textarea"}function up(e,n,t,r){Od(r),n=wl(n,"onChange"),0<n.length&&(t=new Ba("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Hr=null,li=null;function O1(e){kp(e,0)}function Yl(e){var n=qt(e);if(Ld(n))return e}function j1(e,n){if(e==="change")return n}var ap=!1;if($n){var Po;if($n){var Mo="oninput"in document;if(!Mo){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),Mo=typeof hc.oninput=="function"}Po=Mo}else Po=!1;ap=Po&&(!document.documentMode||9<document.documentMode)}function mc(){Hr&&(Hr.detachEvent("onpropertychange",sp),li=Hr=null)}function sp(e){if(e.propertyName==="value"&&Yl(li)){var n=[];up(n,li,e,ba(e)),Hd(O1,n)}}function $1(e,n,t){e==="focusin"?(mc(),Hr=n,li=t,Hr.attachEvent("onpropertychange",sp)):e==="focusout"&&mc()}function B1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yl(li)}function H1(e,n){if(e==="click")return Yl(n)}function U1(e,n){if(e==="input"||e==="change")return Yl(n)}function V1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var vn=typeof Object.is=="function"?Object.is:V1;function oi(e,n){if(vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!cu.call(n,i)||!vn(e[i],n[i]))return!1}return!0}function gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yc(e,n){var t=gc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=gc(t)}}function cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function fp(){for(var e=window,n=pl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=pl(e.document)}return n}function Va(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function W1(e){var n=fp(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&cp(t.ownerDocument.documentElement,t)){if(r!==null&&Va(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=yc(t,l);var o=yc(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var q1=$n&&"documentMode"in document&&11>=document.documentMode,Vt=null,Au=null,Ur=null,Iu=!1;function kc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Iu||Vt==null||Vt!==pl(r)||(r=Vt,"selectionStart"in r&&Va(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&oi(Ur,r)||(Ur=r,r=wl(Au,"onSelect"),0<r.length&&(n=new Ba("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Vt)))}function zi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Wt={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionend:zi("Transition","TransitionEnd")},Ao={},dp={};$n&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function Xl(e){if(Ao[e])return Ao[e];if(!Wt[e])return e;var n=Wt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in dp)return Ao[e]=n[t];return e}var pp=Xl("animationend"),hp=Xl("animationiteration"),mp=Xl("animationstart"),gp=Xl("transitionend"),yp=new Map,xc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,n){yp.set(e,n),zt(n,[e])}for(var Io=0;Io<xc.length;Io++){var Lo=xc[Io],Q1=Lo.toLowerCase(),Y1=Lo[0].toUpperCase()+Lo.slice(1);ft(Q1,"on"+Y1)}ft(pp,"onAnimationEnd");ft(hp,"onAnimationIteration");ft(mp,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(gp,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function wc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Qg(r,n,void 0,e),e.currentTarget=null}function kp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==l&&i.isPropagationStopped())break e;wc(i,u,s),l=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e;wc(i,u,s),l=a}}}if(ml)throw e=Eu,ml=!1,Eu=null,e}function oe(e,n){var t=n[bu];t===void 0&&(t=n[bu]=new Set);var r=e+"__bubble";t.has(r)||(xp(n,e,2,!1),t.add(r))}function zo(e,n,t){var r=0;n&&(r|=4),xp(t,e,r,n)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function ui(e){if(!e[Ni]){e[Ni]=!0,Td.forEach(function(t){t!=="selectionchange"&&(X1.has(t)||zo(t,!1,e),zo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ni]||(n[Ni]=!0,zo("selectionchange",!1,n))}}function xp(e,n,t,r){switch(tp(n)){case 1:var i=s1;break;case 4:i=c1;break;default:i=ja}t=i.bind(null,n,t,e),i=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function No(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;u!==null;){if(o=wt(u),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}u=u.parentNode}}r=r.return}Hd(function(){var s=l,f=ba(t),c=[];e:{var p=yp.get(e);if(p!==void 0){var d=Ba,g=e;switch(e){case"keypress":if(el(t)===0)break e;case"keydown":case"keyup":d=E1;break;case"focusin":g="focus",d=To;break;case"focusout":g="blur",d=To;break;case"beforeblur":case"afterblur":d=To;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=p1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=M1;break;case pp:case hp:case mp:d=g1;break;case gp:d=I1;break;case"scroll":d=f1;break;case"wheel":d=z1;break;case"copy":case"cut":case"paste":d=k1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=cc}var w=(n&4)!==0,T=!w&&e==="scroll",h=w?p!==null?p+"Capture":null:p;w=[];for(var m=s,y;m!==null;){y=m;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,h!==null&&(C=ni(m,h),C!=null&&w.push(ai(m,C,y)))),T)break;m=m.return}0<w.length&&(p=new d(p,g,null,t,f),c.push({event:p,listeners:w}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",p&&t!==Su&&(g=t.relatedTarget||t.fromElement)&&(wt(g)||g[Bn]))break e;if((d||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,d?(g=t.relatedTarget||t.toElement,d=s,g=g?wt(g):null,g!==null&&(T=Nt(g),g!==T||g.tag!==5&&g.tag!==6)&&(g=null)):(d=null,g=s),d!==g)){if(w=ac,C="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=cc,C="onPointerLeave",h="onPointerEnter",m="pointer"),T=d==null?p:qt(d),y=g==null?p:qt(g),p=new w(C,m+"leave",d,t,f),p.target=T,p.relatedTarget=y,C=null,wt(f)===s&&(w=new w(h,m+"enter",g,t,f),w.target=y,w.relatedTarget=T,C=w),T=C,d&&g)n:{for(w=d,h=g,m=0,y=w;y;y=Ot(y))m++;for(y=0,C=h;C;C=Ot(C))y++;for(;0<m-y;)w=Ot(w),m--;for(;0<y-m;)h=Ot(h),y--;for(;m--;){if(w===h||h!==null&&w===h.alternate)break n;w=Ot(w),h=Ot(h)}w=null}else w=null;d!==null&&vc(c,p,d,w,!1),g!==null&&T!==null&&vc(c,T,g,w,!0)}}e:{if(p=s?qt(s):window,d=p.nodeName&&p.nodeName.toLowerCase(),d==="select"||d==="input"&&p.type==="file")var _=j1;else if(pc(p))if(ap)_=U1;else{_=B1;var v=$1}else(d=p.nodeName)&&d.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=H1);if(_&&(_=_(e,s))){up(c,_,t,f);break e}v&&v(e,p,s),e==="focusout"&&(v=p._wrapperState)&&v.controlled&&p.type==="number"&&yu(p,"number",p.value)}switch(v=s?qt(s):window,e){case"focusin":(pc(v)||v.contentEditable==="true")&&(Vt=v,Au=s,Ur=null);break;case"focusout":Ur=Au=Vt=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,kc(c,t,f);break;case"selectionchange":if(q1)break;case"keydown":case"keyup":kc(c,t,f)}var P;if(Ua)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ut?lp(e,t)&&(A="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(ip&&t.locale!=="ko"&&(Ut||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ut&&(P=rp()):(Jn=f,$a="value"in Jn?Jn.value:Jn.textContent,Ut=!0)),v=wl(s,A),0<v.length&&(A=new sc(A,e,null,t,f),c.push({event:A,listeners:v}),P?A.data=P:(P=op(t),P!==null&&(A.data=P)))),(P=D1?b1(e,t):R1(e,t))&&(s=wl(s,"onBeforeInput"),0<s.length&&(f=new sc("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:s}),f.data=P))}kp(c,n)})}function ai(e,n,t){return{instance:e,listener:n,currentTarget:t}}function wl(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ni(e,t),l!=null&&r.unshift(ai(e,l,i)),l=ni(e,n),l!=null&&r.push(ai(e,l,i))),e=e.return}return r}function Ot(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vc(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=ni(t,l),a!=null&&o.unshift(ai(t,a,u))):i||(a=ni(t,l),a!=null&&o.push(ai(t,a,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var G1=/\r\n?/g,K1=/\u0000|\uFFFD/g;function Sc(e){return(typeof e=="string"?e:""+e).replace(G1,`
`).replace(K1,"")}function Di(e,n,t){if(n=Sc(n),Sc(e)!==n&&t)throw Error(M(425))}function vl(){}var Lu=null,zu=null;function Nu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Du=typeof setTimeout=="function"?setTimeout:void 0,Z1=typeof clearTimeout=="function"?clearTimeout:void 0,Cc=typeof Promise=="function"?Promise:void 0,J1=typeof queueMicrotask=="function"?queueMicrotask:typeof Cc<"u"?function(e){return Cc.resolve(null).then(e).catch(ey)}:Du;function ey(e){setTimeout(function(){throw e})}function Do(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),ii(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);ii(n)}function it(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function _c(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var mr=Math.random().toString(36).slice(2),Mn="__reactFiber$"+mr,si="__reactProps$"+mr,Bn="__reactContainer$"+mr,bu="__reactEvents$"+mr,ny="__reactListeners$"+mr,ty="__reactHandles$"+mr;function wt(e){var n=e[Mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Bn]||t[Mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=_c(e);e!==null;){if(t=e[Mn])return t;e=_c(e)}return n}e=t,t=e.parentNode}return null}function xi(e){return e=e[Mn]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Gl(e){return e[si]||null}var Ru=[],Qt=-1;function dt(e){return{current:e}}function ue(e){0>Qt||(e.current=Ru[Qt],Ru[Qt]=null,Qt--)}function ie(e,n){Qt++,Ru[Qt]=e.current,e.current=n}var ct={},De=dt(ct),Ve=dt(!1),Tt=ct;function ur(e,n){var t=e.type.contextTypes;if(!t)return ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function We(e){return e=e.childContextTypes,e!=null}function Sl(){ue(Ve),ue(De)}function Ec(e,n,t){if(De.current!==ct)throw Error(M(168));ie(De,n),ie(Ve,t)}function wp(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(M(108,$g(e)||"Unknown",i));return fe({},t,r)}function Cl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ct,Tt=De.current,ie(De,e),ie(Ve,Ve.current),!0}function Tc(e,n,t){var r=e.stateNode;if(!r)throw Error(M(169));t?(e=wp(e,n,Tt),r.__reactInternalMemoizedMergedChildContext=e,ue(Ve),ue(De),ie(De,e)):ue(Ve),ie(Ve,t)}var Rn=null,Kl=!1,bo=!1;function vp(e){Rn===null?Rn=[e]:Rn.push(e)}function ry(e){Kl=!0,vp(e)}function pt(){if(!bo&&Rn!==null){bo=!0;var e=0,n=Z;try{var t=Rn;for(Z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Rn=null,Kl=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(e+1)),qd(Ra,pt),i}finally{Z=n,bo=!1}}return null}var Yt=[],Xt=0,_l=null,El=0,rn=[],ln=0,Pt=null,Fn=1,On="";function yt(e,n){Yt[Xt++]=El,Yt[Xt++]=_l,_l=e,El=n}function Sp(e,n,t){rn[ln++]=Fn,rn[ln++]=On,rn[ln++]=Pt,Pt=e;var r=Fn;e=On;var i=32-yn(r)-1;r&=~(1<<i),t+=1;var l=32-yn(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fn=1<<32-yn(n)+i|t<<i|r,On=l+e}else Fn=1<<l|t<<i|r,On=e}function Wa(e){e.return!==null&&(yt(e,1),Sp(e,1,0))}function qa(e){for(;e===_l;)_l=Yt[--Xt],Yt[Xt]=null,El=Yt[--Xt],Yt[Xt]=null;for(;e===Pt;)Pt=rn[--ln],rn[ln]=null,On=rn[--ln],rn[ln]=null,Fn=rn[--ln],rn[ln]=null}var Je=null,Ze=null,ae=!1,gn=null;function Cp(e,n){var t=un(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Pc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Je=e,Ze=it(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Je=e,Ze=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Pt!==null?{id:Fn,overflow:On}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=un(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Je=e,Ze=null,!0):!1;default:return!1}}function Fu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ou(e){if(ae){var n=Ze;if(n){var t=n;if(!Pc(e,n)){if(Fu(e))throw Error(M(418));n=it(t.nextSibling);var r=Je;n&&Pc(e,n)?Cp(r,t):(e.flags=e.flags&-4097|2,ae=!1,Je=e)}}else{if(Fu(e))throw Error(M(418));e.flags=e.flags&-4097|2,ae=!1,Je=e}}}function Mc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function bi(e){if(e!==Je)return!1;if(!ae)return Mc(e),ae=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Nu(e.type,e.memoizedProps)),n&&(n=Ze)){if(Fu(e))throw _p(),Error(M(418));for(;n;)Cp(e,n),n=it(n.nextSibling)}if(Mc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ze=it(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ze=null}}else Ze=Je?it(e.stateNode.nextSibling):null;return!0}function _p(){for(var e=Ze;e;)e=it(e.nextSibling)}function ar(){Ze=Je=null,ae=!1}function Qa(e){gn===null?gn=[e]:gn.push(e)}var iy=Vn.ReactCurrentBatchConfig;function Tr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(M(309));var r=t.stateNode}if(!r)throw Error(M(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(M(284));if(!t._owner)throw Error(M(290,e))}return e}function Ri(e,n){throw e=Object.prototype.toString.call(n),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ac(e){var n=e._init;return n(e._payload)}function Ep(e){function n(h,m){if(e){var y=h.deletions;y===null?(h.deletions=[m],h.flags|=16):y.push(m)}}function t(h,m){if(!e)return null;for(;m!==null;)n(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=at(h,m),h.index=0,h.sibling=null,h}function l(h,m,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<m?(h.flags|=2,m):y):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,m,y,C){return m===null||m.tag!==6?(m=Ho(y,h.mode,C),m.return=h,m):(m=i(m,y),m.return=h,m)}function a(h,m,y,C){var _=y.type;return _===Ht?f(h,m,y.props.children,C,y.key):m!==null&&(m.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Xn&&Ac(_)===m.type)?(C=i(m,y.props),C.ref=Tr(h,m,y),C.return=h,C):(C=ul(y.type,y.key,y.props,null,h.mode,C),C.ref=Tr(h,m,y),C.return=h,C)}function s(h,m,y,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Uo(y,h.mode,C),m.return=h,m):(m=i(m,y.children||[]),m.return=h,m)}function f(h,m,y,C,_){return m===null||m.tag!==7?(m=_t(y,h.mode,C,_),m.return=h,m):(m=i(m,y),m.return=h,m)}function c(h,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ho(""+m,h.mode,y),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ei:return y=ul(m.type,m.key,m.props,null,h.mode,y),y.ref=Tr(h,null,m),y.return=h,y;case Bt:return m=Uo(m,h.mode,y),m.return=h,m;case Xn:var C=m._init;return c(h,C(m._payload),y)}if(Dr(m)||vr(m))return m=_t(m,h.mode,y,null),m.return=h,m;Ri(h,m)}return null}function p(h,m,y,C){var _=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:u(h,m,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ei:return y.key===_?a(h,m,y,C):null;case Bt:return y.key===_?s(h,m,y,C):null;case Xn:return _=y._init,p(h,m,_(y._payload),C)}if(Dr(y)||vr(y))return _!==null?null:f(h,m,y,C,null);Ri(h,y)}return null}function d(h,m,y,C,_){if(typeof C=="string"&&C!==""||typeof C=="number")return h=h.get(y)||null,u(m,h,""+C,_);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ei:return h=h.get(C.key===null?y:C.key)||null,a(m,h,C,_);case Bt:return h=h.get(C.key===null?y:C.key)||null,s(m,h,C,_);case Xn:var v=C._init;return d(h,m,y,v(C._payload),_)}if(Dr(C)||vr(C))return h=h.get(y)||null,f(m,h,C,_,null);Ri(m,C)}return null}function g(h,m,y,C){for(var _=null,v=null,P=m,A=m=0,B=null;P!==null&&A<y.length;A++){P.index>A?(B=P,P=null):B=P.sibling;var S=p(h,P,y[A],C);if(S===null){P===null&&(P=B);break}e&&P&&S.alternate===null&&n(h,P),m=l(S,m,A),v===null?_=S:v.sibling=S,v=S,P=B}if(A===y.length)return t(h,P),ae&&yt(h,A),_;if(P===null){for(;A<y.length;A++)P=c(h,y[A],C),P!==null&&(m=l(P,m,A),v===null?_=P:v.sibling=P,v=P);return ae&&yt(h,A),_}for(P=r(h,P);A<y.length;A++)B=d(P,h,A,y[A],C),B!==null&&(e&&B.alternate!==null&&P.delete(B.key===null?A:B.key),m=l(B,m,A),v===null?_=B:v.sibling=B,v=B);return e&&P.forEach(function(z){return n(h,z)}),ae&&yt(h,A),_}function w(h,m,y,C){var _=vr(y);if(typeof _!="function")throw Error(M(150));if(y=_.call(y),y==null)throw Error(M(151));for(var v=_=null,P=m,A=m=0,B=null,S=y.next();P!==null&&!S.done;A++,S=y.next()){P.index>A?(B=P,P=null):B=P.sibling;var z=p(h,P,S.value,C);if(z===null){P===null&&(P=B);break}e&&P&&z.alternate===null&&n(h,P),m=l(z,m,A),v===null?_=z:v.sibling=z,v=z,P=B}if(S.done)return t(h,P),ae&&yt(h,A),_;if(P===null){for(;!S.done;A++,S=y.next())S=c(h,S.value,C),S!==null&&(m=l(S,m,A),v===null?_=S:v.sibling=S,v=S);return ae&&yt(h,A),_}for(P=r(h,P);!S.done;A++,S=y.next())S=d(P,h,A,S.value,C),S!==null&&(e&&S.alternate!==null&&P.delete(S.key===null?A:S.key),m=l(S,m,A),v===null?_=S:v.sibling=S,v=S);return e&&P.forEach(function(R){return n(h,R)}),ae&&yt(h,A),_}function T(h,m,y,C){if(typeof y=="object"&&y!==null&&y.type===Ht&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ei:e:{for(var _=y.key,v=m;v!==null;){if(v.key===_){if(_=y.type,_===Ht){if(v.tag===7){t(h,v.sibling),m=i(v,y.props.children),m.return=h,h=m;break e}}else if(v.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Xn&&Ac(_)===v.type){t(h,v.sibling),m=i(v,y.props),m.ref=Tr(h,v,y),m.return=h,h=m;break e}t(h,v);break}else n(h,v);v=v.sibling}y.type===Ht?(m=_t(y.props.children,h.mode,C,y.key),m.return=h,h=m):(C=ul(y.type,y.key,y.props,null,h.mode,C),C.ref=Tr(h,m,y),C.return=h,h=C)}return o(h);case Bt:e:{for(v=y.key;m!==null;){if(m.key===v)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){t(h,m.sibling),m=i(m,y.children||[]),m.return=h,h=m;break e}else{t(h,m);break}else n(h,m);m=m.sibling}m=Uo(y,h.mode,C),m.return=h,h=m}return o(h);case Xn:return v=y._init,T(h,m,v(y._payload),C)}if(Dr(y))return g(h,m,y,C);if(vr(y))return w(h,m,y,C);Ri(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(t(h,m.sibling),m=i(m,y),m.return=h,h=m):(t(h,m),m=Ho(y,h.mode,C),m.return=h,h=m),o(h)):t(h,m)}return T}var sr=Ep(!0),Tp=Ep(!1),Tl=dt(null),Pl=null,Gt=null,Ya=null;function Xa(){Ya=Gt=Pl=null}function Ga(e){var n=Tl.current;ue(Tl),e._currentValue=n}function ju(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function rr(e,n){Pl=e,Ya=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ue=!0),e.firstContext=null)}function fn(e){var n=e._currentValue;if(Ya!==e)if(e={context:e,memoizedValue:n,next:null},Gt===null){if(Pl===null)throw Error(M(308));Gt=e,Pl.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return n}var vt=null;function Ka(e){vt===null?vt=[e]:vt.push(e)}function Pp(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Ka(n)):(t.next=i.next,i.next=t),n.interleaved=t,Hn(e,r)}function Hn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Gn=!1;function Za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function lt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Hn(e,t)}return i=r.interleaved,i===null?(n.next=n,Ka(r)):(n.next=i.next,i.next=n),r.interleaved=n,Hn(e,t)}function nl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Fa(e,t)}}function Ic(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ml(e,n,t,r){var i=e.updateQueue;Gn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,o===null?l=s:o.next=s,o=a;var f=e.alternate;f!==null&&(f=f.updateQueue,u=f.lastBaseUpdate,u!==o&&(u===null?f.firstBaseUpdate=s:u.next=s,f.lastBaseUpdate=a))}if(l!==null){var c=i.baseState;o=0,f=s=a=null,u=l;do{var p=u.lane,d=u.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:d,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var g=e,w=u;switch(p=n,d=t,w.tag){case 1:if(g=w.payload,typeof g=="function"){c=g.call(d,c,p);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,p=typeof g=="function"?g.call(d,c,p):g,p==null)break e;c=fe({},c,p);break e;case 2:Gn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[u]:p.push(u))}else d={eventTime:d,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},f===null?(s=f=d,a=c):f=f.next=d,o|=p;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(a=c),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);At|=o,e.lanes=o,e.memoizedState=c}}function Lc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var wi={},In=dt(wi),ci=dt(wi),fi=dt(wi);function St(e){if(e===wi)throw Error(M(174));return e}function Ja(e,n){switch(ie(fi,n),ie(ci,e),ie(In,wi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:xu(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=xu(n,e)}ue(In),ie(In,n)}function cr(){ue(In),ue(ci),ue(fi)}function Ap(e){St(fi.current);var n=St(In.current),t=xu(n,e.type);n!==t&&(ie(ci,e),ie(In,t))}function es(e){ci.current===e&&(ue(In),ue(ci))}var se=dt(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ro=[];function ns(){for(var e=0;e<Ro.length;e++)Ro[e]._workInProgressVersionPrimary=null;Ro.length=0}var tl=Vn.ReactCurrentDispatcher,Fo=Vn.ReactCurrentBatchConfig,Mt=0,ce=null,xe=null,Ce=null,Il=!1,Vr=!1,di=0,ly=0;function Le(){throw Error(M(321))}function ts(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!vn(e[t],n[t]))return!1;return!0}function rs(e,n,t,r,i,l){if(Mt=l,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,tl.current=e===null||e.memoizedState===null?sy:cy,e=t(r,i),Vr){l=0;do{if(Vr=!1,di=0,25<=l)throw Error(M(301));l+=1,Ce=xe=null,n.updateQueue=null,tl.current=fy,e=t(r,i)}while(Vr)}if(tl.current=Ll,n=xe!==null&&xe.next!==null,Mt=0,Ce=xe=ce=null,Il=!1,n)throw Error(M(300));return e}function is(){var e=di!==0;return di=0,e}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ce.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function dn(){if(xe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var n=Ce===null?ce.memoizedState:Ce.next;if(n!==null)Ce=n,xe=e;else{if(e===null)throw Error(M(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ce===null?ce.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function pi(e,n){return typeof n=="function"?n(e):n}function Oo(e){var n=dn(),t=n.queue;if(t===null)throw Error(M(311));t.lastRenderedReducer=e;var r=xe,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,a=null,s=l;do{var f=s.lane;if((Mt&f)===f)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var c={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=c,o=r):a=a.next=c,ce.lanes|=f,At|=f}s=s.next}while(s!==null&&s!==l);a===null?o=r:a.next=u,vn(r,n.memoizedState)||(Ue=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,ce.lanes|=l,At|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function jo(e){var n=dn(),t=n.queue;if(t===null)throw Error(M(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);vn(l,n.memoizedState)||(Ue=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Ip(){}function Lp(e,n){var t=ce,r=dn(),i=n(),l=!vn(r.memoizedState,i);if(l&&(r.memoizedState=i,Ue=!0),r=r.queue,ls(Dp.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Ce!==null&&Ce.memoizedState.tag&1){if(t.flags|=2048,hi(9,Np.bind(null,t,r,i,n),void 0,null),Ee===null)throw Error(M(349));Mt&30||zp(t,n,i)}return i}function zp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Np(e,n,t,r){n.value=t,n.getSnapshot=r,bp(n)&&Rp(e)}function Dp(e,n,t){return t(function(){bp(n)&&Rp(e)})}function bp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!vn(e,t)}catch{return!0}}function Rp(e){var n=Hn(e,1);n!==null&&kn(n,e,1,-1)}function zc(e){var n=Tn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:e},n.queue=e,e=e.dispatch=ay.bind(null,ce,e),[n.memoizedState,e]}function hi(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Fp(){return dn().memoizedState}function rl(e,n,t,r){var i=Tn();ce.flags|=e,i.memoizedState=hi(1|n,t,void 0,r===void 0?null:r)}function Zl(e,n,t,r){var i=dn();r=r===void 0?null:r;var l=void 0;if(xe!==null){var o=xe.memoizedState;if(l=o.destroy,r!==null&&ts(r,o.deps)){i.memoizedState=hi(n,t,l,r);return}}ce.flags|=e,i.memoizedState=hi(1|n,t,l,r)}function Nc(e,n){return rl(8390656,8,e,n)}function ls(e,n){return Zl(2048,8,e,n)}function Op(e,n){return Zl(4,2,e,n)}function jp(e,n){return Zl(4,4,e,n)}function $p(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bp(e,n,t){return t=t!=null?t.concat([e]):null,Zl(4,4,$p.bind(null,n,e),t)}function os(){}function Hp(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ts(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Up(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ts(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Vp(e,n,t){return Mt&21?(vn(t,n)||(t=Xd(),ce.lanes|=t,At|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=t)}function oy(e,n){var t=Z;Z=t!==0&&4>t?t:4,e(!0);var r=Fo.transition;Fo.transition={};try{e(!1),n()}finally{Z=t,Fo.transition=r}}function Wp(){return dn().memoizedState}function uy(e,n,t){var r=ut(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},qp(e))Qp(n,t);else if(t=Pp(e,n,t,r),t!==null){var i=Re();kn(t,e,r,i),Yp(t,n,r)}}function ay(e,n,t){var r=ut(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(qp(e))Qp(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,vn(u,o)){var a=n.interleaved;a===null?(i.next=i,Ka(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=Pp(e,n,i,r),t!==null&&(i=Re(),kn(t,e,r,i),Yp(t,n,r))}}function qp(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Qp(e,n){Vr=Il=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Yp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Fa(e,t)}}var Ll={readContext:fn,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},sy={readContext:fn,useCallback:function(e,n){return Tn().memoizedState=[e,n===void 0?null:n],e},useContext:fn,useEffect:Nc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,rl(4194308,4,$p.bind(null,n,e),t)},useLayoutEffect:function(e,n){return rl(4194308,4,e,n)},useInsertionEffect:function(e,n){return rl(4,2,e,n)},useMemo:function(e,n){var t=Tn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Tn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=uy.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var n=Tn();return e={current:e},n.memoizedState=e},useState:zc,useDebugValue:os,useDeferredValue:function(e){return Tn().memoizedState=e},useTransition:function(){var e=zc(!1),n=e[0];return e=oy.bind(null,e[1]),Tn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ce,i=Tn();if(ae){if(t===void 0)throw Error(M(407));t=t()}else{if(t=n(),Ee===null)throw Error(M(349));Mt&30||zp(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Nc(Dp.bind(null,r,l,e),[e]),r.flags|=2048,hi(9,Np.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Tn(),n=Ee.identifierPrefix;if(ae){var t=On,r=Fn;t=(r&~(1<<32-yn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=di++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ly++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},cy={readContext:fn,useCallback:Hp,useContext:fn,useEffect:ls,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:jp,useMemo:Up,useReducer:Oo,useRef:Fp,useState:function(){return Oo(pi)},useDebugValue:os,useDeferredValue:function(e){var n=dn();return Vp(n,xe.memoizedState,e)},useTransition:function(){var e=Oo(pi)[0],n=dn().memoizedState;return[e,n]},useMutableSource:Ip,useSyncExternalStore:Lp,useId:Wp,unstable_isNewReconciler:!1},fy={readContext:fn,useCallback:Hp,useContext:fn,useEffect:ls,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:jp,useMemo:Up,useReducer:jo,useRef:Fp,useState:function(){return jo(pi)},useDebugValue:os,useDeferredValue:function(e){var n=dn();return xe===null?n.memoizedState=e:Vp(n,xe.memoizedState,e)},useTransition:function(){var e=jo(pi)[0],n=dn().memoizedState;return[e,n]},useMutableSource:Ip,useSyncExternalStore:Lp,useId:Wp,unstable_isNewReconciler:!1};function hn(e,n){if(e&&e.defaultProps){n=fe({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function $u(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:fe({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Jl={isMounted:function(e){return(e=e._reactInternals)?Nt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Re(),i=ut(e),l=jn(r,i);l.payload=n,t!=null&&(l.callback=t),n=lt(e,l,i),n!==null&&(kn(n,e,i,r),nl(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Re(),i=ut(e),l=jn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=lt(e,l,i),n!==null&&(kn(n,e,i,r),nl(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Re(),r=ut(e),i=jn(t,r);i.tag=2,n!=null&&(i.callback=n),n=lt(e,i,r),n!==null&&(kn(n,e,r,t),nl(n,e,r))}};function Dc(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!oi(t,r)||!oi(i,l):!0}function Xp(e,n,t){var r=!1,i=ct,l=n.contextType;return typeof l=="object"&&l!==null?l=fn(l):(i=We(n)?Tt:De.current,r=n.contextTypes,l=(r=r!=null)?ur(e,i):ct),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Jl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function bc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Jl.enqueueReplaceState(n,n.state,null)}function Bu(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Za(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=fn(l):(l=We(n)?Tt:De.current,i.context=ur(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&($u(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Jl.enqueueReplaceState(i,i.state,null),Ml(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,n){try{var t="",r=n;do t+=jg(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function $o(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Hu(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var dy=typeof WeakMap=="function"?WeakMap:Map;function Gp(e,n,t){t=jn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Nl||(Nl=!0,Zu=r),Hu(e,n)},t}function Kp(e,n,t){t=jn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Hu(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Hu(e,n),typeof r!="function"&&(ot===null?ot=new Set([this]):ot.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Rc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new dy;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Ty.bind(null,e,n,t),n.then(e,e))}function Fc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Oc(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=jn(-1,1),n.tag=2,lt(t,n,1))),t.lanes|=1),e)}var py=Vn.ReactCurrentOwner,Ue=!1;function be(e,n,t,r){n.child=e===null?Tp(n,null,t,r):sr(n,e.child,t,r)}function jc(e,n,t,r,i){t=t.render;var l=n.ref;return rr(n,i),r=rs(e,n,t,r,l,i),t=is(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Un(e,n,i)):(ae&&t&&Wa(n),n.flags|=1,be(e,n,r,i),n.child)}function $c(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!hs(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Zp(e,n,l,r,i)):(e=ul(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:oi,t(o,r)&&e.ref===n.ref)return Un(e,n,i)}return n.flags|=1,e=at(l,r),e.ref=n.ref,e.return=n,n.child=e}function Zp(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(oi(l,r)&&e.ref===n.ref)if(Ue=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ue=!0);else return n.lanes=e.lanes,Un(e,n,i)}return Uu(e,n,t,r,i)}function Jp(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Zt,Ke),Ke|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ie(Zt,Ke),Ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,ie(Zt,Ke),Ke|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,ie(Zt,Ke),Ke|=r;return be(e,n,i,t),n.child}function eh(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Uu(e,n,t,r,i){var l=We(t)?Tt:De.current;return l=ur(n,l),rr(n,i),t=rs(e,n,t,r,l,i),r=is(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Un(e,n,i)):(ae&&r&&Wa(n),n.flags|=1,be(e,n,t,i),n.child)}function Bc(e,n,t,r,i){if(We(t)){var l=!0;Cl(n)}else l=!1;if(rr(n,i),n.stateNode===null)il(e,n),Xp(n,t,r),Bu(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var a=o.context,s=t.contextType;typeof s=="object"&&s!==null?s=fn(s):(s=We(t)?Tt:De.current,s=ur(n,s));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==s)&&bc(n,o,r,s),Gn=!1;var p=n.memoizedState;o.state=p,Ml(n,r,o,i),a=n.memoizedState,u!==r||p!==a||Ve.current||Gn?(typeof f=="function"&&($u(n,t,f,r),a=n.memoizedState),(u=Gn||Dc(n,t,u,r,p,a,s))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=s,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Mp(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:hn(n.type,u),o.props=s,c=n.pendingProps,p=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=fn(a):(a=We(t)?Tt:De.current,a=ur(n,a));var d=t.getDerivedStateFromProps;(f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==c||p!==a)&&bc(n,o,r,a),Gn=!1,p=n.memoizedState,o.state=p,Ml(n,r,o,i);var g=n.memoizedState;u!==c||p!==g||Ve.current||Gn?(typeof d=="function"&&($u(n,t,d,r),g=n.memoizedState),(s=Gn||Dc(n,t,s,r,p,g,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=g),o.props=r,o.state=g,o.context=a,r=s):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Vu(e,n,t,r,l,i)}function Vu(e,n,t,r,i,l){eh(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Tc(n,t,!1),Un(e,n,l);r=n.stateNode,py.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=sr(n,e.child,null,l),n.child=sr(n,null,u,l)):be(e,n,u,l),n.memoizedState=r.state,i&&Tc(n,t,!0),n.child}function nh(e){var n=e.stateNode;n.pendingContext?Ec(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ec(e,n.context,!1),Ja(e,n.containerInfo)}function Hc(e,n,t,r,i){return ar(),Qa(i),n.flags|=256,be(e,n,t,r),n.child}var Wu={dehydrated:null,treeContext:null,retryLane:0};function qu(e){return{baseLanes:e,cachePool:null,transitions:null}}function th(e,n,t){var r=n.pendingProps,i=se.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(se,i&1),e===null)return Ou(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=to(o,r,0,null),e=_t(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=qu(t),n.memoizedState=Wu,e):us(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return hy(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=at(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=at(u,l):(l=_t(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?qu(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Wu,r}return l=e.child,e=l.sibling,r=at(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function us(e,n){return n=to({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Fi(e,n,t,r){return r!==null&&Qa(r),sr(n,e.child,null,t),e=us(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function hy(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=$o(Error(M(422))),Fi(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=to({mode:"visible",children:r.children},i,0,null),l=_t(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&sr(n,e.child,null,o),n.child.memoizedState=qu(o),n.memoizedState=Wu,l);if(!(n.mode&1))return Fi(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(M(419)),r=$o(l,r,void 0),Fi(e,n,o,r)}if(u=(o&e.childLanes)!==0,Ue||u){if(r=Ee,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Hn(e,i),kn(r,e,i,-1))}return ps(),r=$o(Error(M(421))),Fi(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Py.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,Ze=it(i.nextSibling),Je=n,ae=!0,gn=null,e!==null&&(rn[ln++]=Fn,rn[ln++]=On,rn[ln++]=Pt,Fn=e.id,On=e.overflow,Pt=n),n=us(n,r.children),n.flags|=4096,n)}function Uc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ju(e.return,n,t)}function Bo(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function rh(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(be(e,n,r.children,t),r=se.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uc(e,t,n);else if(e.tag===19)Uc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(se,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Al(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Bo(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Al(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Bo(n,!0,t,null,l);break;case"together":Bo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function il(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Un(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),At|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(M(153));if(n.child!==null){for(e=n.child,t=at(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=at(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function my(e,n,t){switch(n.tag){case 3:nh(n),ar();break;case 5:Ap(n);break;case 1:We(n.type)&&Cl(n);break;case 4:Ja(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ie(Tl,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ie(se,se.current&1),n.flags|=128,null):t&n.child.childLanes?th(e,n,t):(ie(se,se.current&1),e=Un(e,n,t),e!==null?e.sibling:null);ie(se,se.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return rh(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(se,se.current),r)break;return null;case 22:case 23:return n.lanes=0,Jp(e,n,t)}return Un(e,n,t)}var ih,Qu,lh,oh;ih=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Qu=function(){};lh=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,St(In.current);var l=null;switch(t){case"input":i=mu(e,i),r=mu(e,r),l=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),l=[];break;case"textarea":i=ku(e,i),r=ku(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vl)}wu(t,r);var o;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jr.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&oe("scroll",e),l||u===a||(l=[])):(l=l||[]).push(s,a))}t&&(l=l||[]).push("style",t);var s=l;(n.updateQueue=s)&&(n.flags|=4)}};oh=function(e,n,t,r){t!==r&&(n.flags|=4)};function Pr(e,n){if(!ae)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function gy(e,n,t){var r=n.pendingProps;switch(qa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(n),null;case 1:return We(n.type)&&Sl(),ze(n),null;case 3:return r=n.stateNode,cr(),ue(Ve),ue(De),ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,gn!==null&&(na(gn),gn=null))),Qu(e,n),ze(n),null;case 5:es(n);var i=St(fi.current);if(t=n.type,e!==null&&n.stateNode!=null)lh(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(M(166));return ze(n),null}if(e=St(In.current),bi(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Mn]=n,r[si]=l,e=(n.mode&1)!==0,t){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<Rr.length;i++)oe(Rr[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Zs(r,l),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},oe("invalid",r);break;case"textarea":ec(r,l),oe("invalid",r)}wu(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&Di(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Di(r.textContent,u,e),i=["children",""+u]):Jr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&oe("scroll",r)}switch(t){case"input":Ti(r),Js(r,l,!0);break;case"textarea":Ti(r),nc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=vl)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Mn]=n,e[si]=r,ih(e,n,!1,!1),n.stateNode=e;e:{switch(o=vu(t,r),t){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rr.length;i++)oe(Rr[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":Zs(e,r),i=mu(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":ec(e,r),i=ku(e,r),oe("invalid",e);break;default:i=r}wu(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?Fd(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&bd(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&ei(e,a):typeof a=="number"&&ei(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Jr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&oe("scroll",e):a!=null&&La(e,l,a,o))}switch(t){case"input":Ti(e),Js(e,r,!1);break;case"textarea":Ti(e),nc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+st(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Jt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ze(n),null;case 6:if(e&&n.stateNode!=null)oh(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(M(166));if(t=St(fi.current),St(In.current),bi(n)){if(r=n.stateNode,t=n.memoizedProps,r[Mn]=n,(l=r.nodeValue!==t)&&(e=Je,e!==null))switch(e.tag){case 3:Di(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Di(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Mn]=n,n.stateNode=r}return ze(n),null;case 13:if(ue(se),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ze!==null&&n.mode&1&&!(n.flags&128))_p(),ar(),n.flags|=98560,l=!1;else if(l=bi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(M(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(M(317));l[Mn]=n}else ar(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ze(n),l=!1}else gn!==null&&(na(gn),gn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||se.current&1?we===0&&(we=3):ps())),n.updateQueue!==null&&(n.flags|=4),ze(n),null);case 4:return cr(),Qu(e,n),e===null&&ui(n.stateNode.containerInfo),ze(n),null;case 10:return Ga(n.type._context),ze(n),null;case 17:return We(n.type)&&Sl(),ze(n),null;case 19:if(ue(se),l=n.memoizedState,l===null)return ze(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Pr(l,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Al(e),o!==null){for(n.flags|=128,Pr(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ie(se,se.current&1|2),n.child}e=e.sibling}l.tail!==null&&he()>dr&&(n.flags|=128,r=!0,Pr(l,!1),n.lanes=4194304)}else{if(!r)if(e=Al(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Pr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ae)return ze(n),null}else 2*he()-l.renderingStartTime>dr&&t!==1073741824&&(n.flags|=128,r=!0,Pr(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=he(),n.sibling=null,t=se.current,ie(se,r?t&1|2:t&1),n):(ze(n),null);case 22:case 23:return ds(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ke&1073741824&&(ze(n),n.subtreeFlags&6&&(n.flags|=8192)):ze(n),null;case 24:return null;case 25:return null}throw Error(M(156,n.tag))}function yy(e,n){switch(qa(n),n.tag){case 1:return We(n.type)&&Sl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return cr(),ue(Ve),ue(De),ns(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return es(n),null;case 13:if(ue(se),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(M(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ue(se),null;case 4:return cr(),null;case 10:return Ga(n.type._context),null;case 22:case 23:return ds(),null;case 24:return null;default:return null}}var Oi=!1,Ne=!1,ky=typeof WeakSet=="function"?WeakSet:Set,D=null;function Kt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){de(e,n,r)}else t.current=null}function Yu(e,n,t){try{t()}catch(r){de(e,n,r)}}var Vc=!1;function xy(e,n){if(Lu=kl,e=fp(),Va(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,a=-1,s=0,f=0,c=e,p=null;n:for(;;){for(var d;c!==t||i!==0&&c.nodeType!==3||(u=o+i),c!==l||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(d=c.firstChild)!==null;)p=c,c=d;for(;;){if(c===e)break n;if(p===t&&++s===i&&(u=o),p===l&&++f===r&&(a=o),(d=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=d}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(zu={focusedElem:e,selectionRange:t},kl=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,T=g.memoizedState,h=n.stateNode,m=h.getSnapshotBeforeUpdate(n.elementType===n.type?w:hn(n.type,w),T);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(C){de(n,n.return,C)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return g=Vc,Vc=!1,g}function Wr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Yu(n,t,l)}i=i.next}while(i!==r)}}function eo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Xu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function uh(e){var n=e.alternate;n!==null&&(e.alternate=null,uh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Mn],delete n[si],delete n[bu],delete n[ny],delete n[ty])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ah(e){return e.tag===5||e.tag===3||e.tag===4}function Wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ah(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=vl));else if(r!==4&&(e=e.child,e!==null))for(Gu(e,n,t),e=e.sibling;e!==null;)Gu(e,n,t),e=e.sibling}function Ku(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ku(e,n,t),e=e.sibling;e!==null;)Ku(e,n,t),e=e.sibling}var Te=null,mn=!1;function Qn(e,n,t){for(t=t.child;t!==null;)sh(e,n,t),t=t.sibling}function sh(e,n,t){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(ql,t)}catch{}switch(t.tag){case 5:Ne||Kt(t,n);case 6:var r=Te,i=mn;Te=null,Qn(e,n,t),Te=r,mn=i,Te!==null&&(mn?(e=Te,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Te.removeChild(t.stateNode));break;case 18:Te!==null&&(mn?(e=Te,t=t.stateNode,e.nodeType===8?Do(e.parentNode,t):e.nodeType===1&&Do(e,t),ii(e)):Do(Te,t.stateNode));break;case 4:r=Te,i=mn,Te=t.stateNode.containerInfo,mn=!0,Qn(e,n,t),Te=r,mn=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Yu(t,n,o),i=i.next}while(i!==r)}Qn(e,n,t);break;case 1:if(!Ne&&(Kt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){de(t,n,u)}Qn(e,n,t);break;case 21:Qn(e,n,t);break;case 22:t.mode&1?(Ne=(r=Ne)||t.memoizedState!==null,Qn(e,n,t),Ne=r):Qn(e,n,t);break;default:Qn(e,n,t)}}function qc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ky),n.forEach(function(r){var i=My.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function pn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:Te=u.stateNode,mn=!1;break e;case 3:Te=u.stateNode.containerInfo,mn=!0;break e;case 4:Te=u.stateNode.containerInfo,mn=!0;break e}u=u.return}if(Te===null)throw Error(M(160));sh(l,o,i),Te=null,mn=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){de(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ch(n,e),n=n.sibling}function ch(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pn(n,e),En(e),r&4){try{Wr(3,e,e.return),eo(3,e)}catch(w){de(e,e.return,w)}try{Wr(5,e,e.return)}catch(w){de(e,e.return,w)}}break;case 1:pn(n,e),En(e),r&512&&t!==null&&Kt(t,t.return);break;case 5:if(pn(n,e),En(e),r&512&&t!==null&&Kt(t,t.return),e.flags&32){var i=e.stateNode;try{ei(i,"")}catch(w){de(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&zd(i,l),vu(u,o);var s=vu(u,l);for(o=0;o<a.length;o+=2){var f=a[o],c=a[o+1];f==="style"?Fd(i,c):f==="dangerouslySetInnerHTML"?bd(i,c):f==="children"?ei(i,c):La(i,f,c,s)}switch(u){case"input":gu(i,l);break;case"textarea":Nd(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var d=l.value;d!=null?Jt(i,!!l.multiple,d,!1):p!==!!l.multiple&&(l.defaultValue!=null?Jt(i,!!l.multiple,l.defaultValue,!0):Jt(i,!!l.multiple,l.multiple?[]:"",!1))}i[si]=l}catch(w){de(e,e.return,w)}}break;case 6:if(pn(n,e),En(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){de(e,e.return,w)}}break;case 3:if(pn(n,e),En(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ii(n.containerInfo)}catch(w){de(e,e.return,w)}break;case 4:pn(n,e),En(e);break;case 13:pn(n,e),En(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(cs=he())),r&4&&qc(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(Ne=(s=Ne)||f,pn(n,e),Ne=s):pn(n,e),En(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!f&&e.mode&1)for(D=e,f=e.child;f!==null;){for(c=D=f;D!==null;){switch(p=D,d=p.child,p.tag){case 0:case 11:case 14:case 15:Wr(4,p,p.return);break;case 1:Kt(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(w){de(r,t,w)}}break;case 5:Kt(p,p.return);break;case 22:if(p.memoizedState!==null){Yc(c);continue}}d!==null?(d.return=p,D=d):Yc(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,s?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Rd("display",o))}catch(w){de(e,e.return,w)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(w){de(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:pn(n,e),En(e),r&4&&qc(e);break;case 21:break;default:pn(n,e),En(e)}}function En(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ah(t)){var r=t;break e}t=t.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ei(i,""),r.flags&=-33);var l=Wc(e);Ku(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Wc(e);Gu(e,u,o);break;default:throw Error(M(161))}}catch(a){de(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wy(e,n,t){D=e,fh(e)}function fh(e,n,t){for(var r=(e.mode&1)!==0;D!==null;){var i=D,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oi;if(!o){var u=i.alternate,a=u!==null&&u.memoizedState!==null||Ne;u=Oi;var s=Ne;if(Oi=o,(Ne=a)&&!s)for(D=i;D!==null;)o=D,a=o.child,o.tag===22&&o.memoizedState!==null?Xc(i):a!==null?(a.return=o,D=a):Xc(i);for(;l!==null;)D=l,fh(l),l=l.sibling;D=i,Oi=u,Ne=s}Qc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,D=l):Qc(e)}}function Qc(e){for(;D!==null;){var n=D;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ne||eo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ne)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:hn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Lc(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Lc(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&ii(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ne||n.flags&512&&Xu(n)}catch(p){de(n,n.return,p)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function Yc(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function Xc(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{eo(4,n)}catch(a){de(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){de(n,i,a)}}var l=n.return;try{Xu(n)}catch(a){de(n,l,a)}break;case 5:var o=n.return;try{Xu(n)}catch(a){de(n,o,a)}}}catch(a){de(n,n.return,a)}if(n===e){D=null;break}var u=n.sibling;if(u!==null){u.return=n.return,D=u;break}D=n.return}}var vy=Math.ceil,zl=Vn.ReactCurrentDispatcher,as=Vn.ReactCurrentOwner,sn=Vn.ReactCurrentBatchConfig,G=0,Ee=null,ye=null,Ae=0,Ke=0,Zt=dt(0),we=0,mi=null,At=0,no=0,ss=0,qr=null,He=null,cs=0,dr=1/0,bn=null,Nl=!1,Zu=null,ot=null,ji=!1,et=null,Dl=0,Qr=0,Ju=null,ll=-1,ol=0;function Re(){return G&6?he():ll!==-1?ll:ll=he()}function ut(e){return e.mode&1?G&2&&Ae!==0?Ae&-Ae:iy.transition!==null?(ol===0&&(ol=Xd()),ol):(e=Z,e!==0||(e=window.event,e=e===void 0?16:tp(e.type)),e):1}function kn(e,n,t,r){if(50<Qr)throw Qr=0,Ju=null,Error(M(185));yi(e,t,r),(!(G&2)||e!==Ee)&&(e===Ee&&(!(G&2)&&(no|=t),we===4&&Zn(e,Ae)),qe(e,r),t===1&&G===0&&!(n.mode&1)&&(dr=he()+500,Kl&&pt()))}function qe(e,n){var t=e.callbackNode;i1(e,n);var r=yl(e,e===Ee?Ae:0);if(r===0)t!==null&&ic(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ic(t),n===1)e.tag===0?ry(Gc.bind(null,e)):vp(Gc.bind(null,e)),J1(function(){!(G&6)&&pt()}),t=null;else{switch(Gd(r)){case 1:t=Ra;break;case 4:t=Qd;break;case 16:t=gl;break;case 536870912:t=Yd;break;default:t=gl}t=xh(t,dh.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function dh(e,n){if(ll=-1,ol=0,G&6)throw Error(M(327));var t=e.callbackNode;if(ir()&&e.callbackNode!==t)return null;var r=yl(e,e===Ee?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=bl(e,r);else{n=r;var i=G;G|=2;var l=hh();(Ee!==e||Ae!==n)&&(bn=null,dr=he()+500,Ct(e,n));do try{_y();break}catch(u){ph(e,u)}while(!0);Xa(),zl.current=l,G=i,ye!==null?n=0:(Ee=null,Ae=0,n=we)}if(n!==0){if(n===2&&(i=Tu(e),i!==0&&(r=i,n=ea(e,i))),n===1)throw t=mi,Ct(e,0),Zn(e,r),qe(e,he()),t;if(n===6)Zn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Sy(i)&&(n=bl(e,r),n===2&&(l=Tu(e),l!==0&&(r=l,n=ea(e,l))),n===1))throw t=mi,Ct(e,0),Zn(e,r),qe(e,he()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(M(345));case 2:kt(e,He,bn);break;case 3:if(Zn(e,r),(r&130023424)===r&&(n=cs+500-he(),10<n)){if(yl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Du(kt.bind(null,e,He,bn),n);break}kt(e,He,bn);break;case 4:if(Zn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-yn(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vy(r/1960))-r,10<r){e.timeoutHandle=Du(kt.bind(null,e,He,bn),r);break}kt(e,He,bn);break;case 5:kt(e,He,bn);break;default:throw Error(M(329))}}}return qe(e,he()),e.callbackNode===t?dh.bind(null,e):null}function ea(e,n){var t=qr;return e.current.memoizedState.isDehydrated&&(Ct(e,n).flags|=256),e=bl(e,n),e!==2&&(n=He,He=t,n!==null&&na(n)),e}function na(e){He===null?He=e:He.push.apply(He,e)}function Sy(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!vn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zn(e,n){for(n&=~ss,n&=~no,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-yn(n),r=1<<t;e[t]=-1,n&=~r}}function Gc(e){if(G&6)throw Error(M(327));ir();var n=yl(e,0);if(!(n&1))return qe(e,he()),null;var t=bl(e,n);if(e.tag!==0&&t===2){var r=Tu(e);r!==0&&(n=r,t=ea(e,r))}if(t===1)throw t=mi,Ct(e,0),Zn(e,n),qe(e,he()),t;if(t===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,kt(e,He,bn),qe(e,he()),null}function fs(e,n){var t=G;G|=1;try{return e(n)}finally{G=t,G===0&&(dr=he()+500,Kl&&pt())}}function It(e){et!==null&&et.tag===0&&!(G&6)&&ir();var n=G;G|=1;var t=sn.transition,r=Z;try{if(sn.transition=null,Z=1,e)return e()}finally{Z=r,sn.transition=t,G=n,!(G&6)&&pt()}}function ds(){Ke=Zt.current,ue(Zt)}function Ct(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Z1(t)),ye!==null)for(t=ye.return;t!==null;){var r=t;switch(qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:cr(),ue(Ve),ue(De),ns();break;case 5:es(r);break;case 4:cr();break;case 13:ue(se);break;case 19:ue(se);break;case 10:Ga(r.type._context);break;case 22:case 23:ds()}t=t.return}if(Ee=e,ye=e=at(e.current,null),Ae=Ke=n,we=0,mi=null,ss=no=At=0,He=qr=null,vt!==null){for(n=0;n<vt.length;n++)if(t=vt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}vt=null}return e}function ph(e,n){do{var t=ye;try{if(Xa(),tl.current=Ll,Il){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Il=!1}if(Mt=0,Ce=xe=ce=null,Vr=!1,di=0,as.current=null,t===null||t.return===null){we=1,mi=n,ye=null;break}e:{var l=e,o=t.return,u=t,a=n;if(n=Ae,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,f=u,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var d=Fc(o);if(d!==null){d.flags&=-257,Oc(d,o,u,l,n),d.mode&1&&Rc(l,s,n),n=d,a=s;var g=n.updateQueue;if(g===null){var w=new Set;w.add(a),n.updateQueue=w}else g.add(a);break e}else{if(!(n&1)){Rc(l,s,n),ps();break e}a=Error(M(426))}}else if(ae&&u.mode&1){var T=Fc(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Oc(T,o,u,l,n),Qa(fr(a,u));break e}}l=a=fr(a,u),we!==4&&(we=2),qr===null?qr=[l]:qr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var h=Gp(l,a,n);Ic(l,h);break e;case 1:u=a;var m=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ot===null||!ot.has(y)))){l.flags|=65536,n&=-n,l.lanes|=n;var C=Kp(l,u,n);Ic(l,C);break e}}l=l.return}while(l!==null)}gh(t)}catch(_){n=_,ye===t&&t!==null&&(ye=t=t.return);continue}break}while(!0)}function hh(){var e=zl.current;return zl.current=Ll,e===null?Ll:e}function ps(){(we===0||we===3||we===2)&&(we=4),Ee===null||!(At&268435455)&&!(no&268435455)||Zn(Ee,Ae)}function bl(e,n){var t=G;G|=2;var r=hh();(Ee!==e||Ae!==n)&&(bn=null,Ct(e,n));do try{Cy();break}catch(i){ph(e,i)}while(!0);if(Xa(),G=t,zl.current=r,ye!==null)throw Error(M(261));return Ee=null,Ae=0,we}function Cy(){for(;ye!==null;)mh(ye)}function _y(){for(;ye!==null&&!Xg();)mh(ye)}function mh(e){var n=kh(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,n===null?gh(e):ye=n,as.current=null}function gh(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=yy(t,n),t!==null){t.flags&=32767,ye=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ye=null;return}}else if(t=gy(t,n,Ke),t!==null){ye=t;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);we===0&&(we=5)}function kt(e,n,t){var r=Z,i=sn.transition;try{sn.transition=null,Z=1,Ey(e,n,t,r)}finally{sn.transition=i,Z=r}return null}function Ey(e,n,t,r){do ir();while(et!==null);if(G&6)throw Error(M(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(l1(e,l),e===Ee&&(ye=Ee=null,Ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ji||(ji=!0,xh(gl,function(){return ir(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=sn.transition,sn.transition=null;var o=Z;Z=1;var u=G;G|=4,as.current=null,xy(e,t),ch(t,e),W1(zu),kl=!!Lu,zu=Lu=null,e.current=t,wy(t),Gg(),G=u,Z=o,sn.transition=l}else e.current=t;if(ji&&(ji=!1,et=e,Dl=i),l=e.pendingLanes,l===0&&(ot=null),Jg(t.stateNode),qe(e,he()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nl)throw Nl=!1,e=Zu,Zu=null,e;return Dl&1&&e.tag!==0&&ir(),l=e.pendingLanes,l&1?e===Ju?Qr++:(Qr=0,Ju=e):Qr=0,pt(),null}function ir(){if(et!==null){var e=Gd(Dl),n=sn.transition,t=Z;try{if(sn.transition=null,Z=16>e?16:e,et===null)var r=!1;else{if(e=et,et=null,Dl=0,G&6)throw Error(M(331));var i=G;for(G|=4,D=e.current;D!==null;){var l=D,o=l.child;if(D.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(D=s;D!==null;){var f=D;switch(f.tag){case 0:case 11:case 15:Wr(8,f,l)}var c=f.child;if(c!==null)c.return=f,D=c;else for(;D!==null;){f=D;var p=f.sibling,d=f.return;if(uh(f),f===s){D=null;break}if(p!==null){p.return=d,D=p;break}D=d}}}var g=l.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}D=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,D=o;else e:for(;D!==null;){if(l=D,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Wr(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,D=h;break e}D=l.return}}var m=e.current;for(D=m;D!==null;){o=D;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,D=y;else e:for(o=m;D!==null;){if(u=D,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:eo(9,u)}}catch(_){de(u,u.return,_)}if(u===o){D=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,D=C;break e}D=u.return}}if(G=i,pt(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(ql,e)}catch{}r=!0}return r}finally{Z=t,sn.transition=n}}return!1}function Kc(e,n,t){n=fr(t,n),n=Gp(e,n,1),e=lt(e,n,1),n=Re(),e!==null&&(yi(e,1,n),qe(e,n))}function de(e,n,t){if(e.tag===3)Kc(e,e,t);else for(;n!==null;){if(n.tag===3){Kc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ot===null||!ot.has(r))){e=fr(t,e),e=Kp(n,e,1),n=lt(n,e,1),e=Re(),n!==null&&(yi(n,1,e),qe(n,e));break}}n=n.return}}function Ty(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Re(),e.pingedLanes|=e.suspendedLanes&t,Ee===e&&(Ae&t)===t&&(we===4||we===3&&(Ae&130023424)===Ae&&500>he()-cs?Ct(e,0):ss|=t),qe(e,n)}function yh(e,n){n===0&&(e.mode&1?(n=Ai,Ai<<=1,!(Ai&130023424)&&(Ai=4194304)):n=1);var t=Re();e=Hn(e,n),e!==null&&(yi(e,n,t),qe(e,t))}function Py(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),yh(e,t)}function My(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(n),yh(e,t)}var kh;kh=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ve.current)Ue=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ue=!1,my(e,n,t);Ue=!!(e.flags&131072)}else Ue=!1,ae&&n.flags&1048576&&Sp(n,El,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;il(e,n),e=n.pendingProps;var i=ur(n,De.current);rr(n,t),i=rs(null,n,r,e,i,t);var l=is();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,We(r)?(l=!0,Cl(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Za(n),i.updater=Jl,n.stateNode=i,i._reactInternals=n,Bu(n,r,e,t),n=Vu(null,n,r,!0,l,t)):(n.tag=0,ae&&l&&Wa(n),be(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(il(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Iy(r),e=hn(r,e),i){case 0:n=Uu(null,n,r,e,t);break e;case 1:n=Bc(null,n,r,e,t);break e;case 11:n=jc(null,n,r,e,t);break e;case 14:n=$c(null,n,r,hn(r.type,e),t);break e}throw Error(M(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:hn(r,i),Uu(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:hn(r,i),Bc(e,n,r,i,t);case 3:e:{if(nh(n),e===null)throw Error(M(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Mp(e,n),Ml(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=fr(Error(M(423)),n),n=Hc(e,n,r,t,i);break e}else if(r!==i){i=fr(Error(M(424)),n),n=Hc(e,n,r,t,i);break e}else for(Ze=it(n.stateNode.containerInfo.firstChild),Je=n,ae=!0,gn=null,t=Tp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ar(),r===i){n=Un(e,n,t);break e}be(e,n,r,t)}n=n.child}return n;case 5:return Ap(n),e===null&&Ou(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Nu(r,i)?o=null:l!==null&&Nu(r,l)&&(n.flags|=32),eh(e,n),be(e,n,o,t),n.child;case 6:return e===null&&Ou(n),null;case 13:return th(e,n,t);case 4:return Ja(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=sr(n,null,r,t):be(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:hn(r,i),jc(e,n,r,i,t);case 7:return be(e,n,n.pendingProps,t),n.child;case 8:return be(e,n,n.pendingProps.children,t),n.child;case 12:return be(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,ie(Tl,r._currentValue),r._currentValue=o,l!==null)if(vn(l.value,o)){if(l.children===i.children&&!Ve.current){n=Un(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=jn(-1,t&-t),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?a.next=a:(a.next=f.next,f.next=a),s.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),ju(l.return,t,n),u.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(M(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),ju(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}be(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,rr(n,t),i=fn(i),r=r(i),n.flags|=1,be(e,n,r,t),n.child;case 14:return r=n.type,i=hn(r,n.pendingProps),i=hn(r.type,i),$c(e,n,r,i,t);case 15:return Zp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:hn(r,i),il(e,n),n.tag=1,We(r)?(e=!0,Cl(n)):e=!1,rr(n,t),Xp(n,r,i),Bu(n,r,i,t),Vu(null,n,r,!0,e,t);case 19:return rh(e,n,t);case 22:return Jp(e,n,t)}throw Error(M(156,n.tag))};function xh(e,n){return qd(e,n)}function Ay(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,n,t,r){return new Ay(e,n,t,r)}function hs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Iy(e){if(typeof e=="function")return hs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Na)return 11;if(e===Da)return 14}return 2}function at(e,n){var t=e.alternate;return t===null?(t=un(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ul(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")hs(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ht:return _t(t.children,i,l,n);case za:o=8,i|=8;break;case fu:return e=un(12,t,n,i|2),e.elementType=fu,e.lanes=l,e;case du:return e=un(13,t,n,i),e.elementType=du,e.lanes=l,e;case pu:return e=un(19,t,n,i),e.elementType=pu,e.lanes=l,e;case Ad:return to(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pd:o=10;break e;case Md:o=9;break e;case Na:o=11;break e;case Da:o=14;break e;case Xn:o=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return n=un(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function _t(e,n,t,r){return e=un(7,e,r,n),e.lanes=t,e}function to(e,n,t,r){return e=un(22,e,r,n),e.elementType=Ad,e.lanes=t,e.stateNode={isHidden:!1},e}function Ho(e,n,t){return e=un(6,e,null,n),e.lanes=t,e}function Uo(e,n,t){return n=un(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ly(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Co(0),this.expirationTimes=Co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ms(e,n,t,r,i,l,o,u,a){return e=new Ly(e,n,t,u,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=un(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Za(l),e}function zy(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function wh(e){if(!e)return ct;e=e._reactInternals;e:{if(Nt(e)!==e||e.tag!==1)throw Error(M(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(We(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(M(171))}if(e.tag===1){var t=e.type;if(We(t))return wp(e,t,n)}return n}function vh(e,n,t,r,i,l,o,u,a){return e=ms(t,r,!0,e,i,l,o,u,a),e.context=wh(null),t=e.current,r=Re(),i=ut(t),l=jn(r,i),l.callback=n??null,lt(t,l,i),e.current.lanes=i,yi(e,i,r),qe(e,r),e}function ro(e,n,t,r){var i=n.current,l=Re(),o=ut(i);return t=wh(t),n.context===null?n.context=t:n.pendingContext=t,n=jn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=lt(i,n,o),e!==null&&(kn(e,i,o,l),nl(e,i,o)),o}function Rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function gs(e,n){Zc(e,n),(e=e.alternate)&&Zc(e,n)}function Ny(){return null}var Sh=typeof reportError=="function"?reportError:function(e){console.error(e)};function ys(e){this._internalRoot=e}io.prototype.render=ys.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(M(409));ro(e,n,null,null)};io.prototype.unmount=ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;It(function(){ro(null,e,null,null)}),n[Bn]=null}};function io(e){this._internalRoot=e}io.prototype.unstable_scheduleHydration=function(e){if(e){var n=Jd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Kn.length&&n!==0&&n<Kn[t].priority;t++);Kn.splice(t,0,e),t===0&&np(e)}};function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Jc(){}function Dy(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var s=Rl(o);l.call(s)}}var o=vh(n,r,e,0,null,!1,!1,"",Jc);return e._reactRootContainer=o,e[Bn]=o.current,ui(e.nodeType===8?e.parentNode:e),It(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=Rl(a);u.call(s)}}var a=ms(e,0,!1,null,null,!1,!1,"",Jc);return e._reactRootContainer=a,e[Bn]=a.current,ui(e.nodeType===8?e.parentNode:e),It(function(){ro(n,a,t,r)}),a}function oo(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var a=Rl(o);u.call(a)}}ro(n,o,e,i)}else o=Dy(t,n,e,i,r);return Rl(o)}Kd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=br(n.pendingLanes);t!==0&&(Fa(n,t|1),qe(n,he()),!(G&6)&&(dr=he()+500,pt()))}break;case 13:It(function(){var r=Hn(e,1);if(r!==null){var i=Re();kn(r,e,1,i)}}),gs(e,1)}};Oa=function(e){if(e.tag===13){var n=Hn(e,134217728);if(n!==null){var t=Re();kn(n,e,134217728,t)}gs(e,134217728)}};Zd=function(e){if(e.tag===13){var n=ut(e),t=Hn(e,n);if(t!==null){var r=Re();kn(t,e,n,r)}gs(e,n)}};Jd=function(){return Z};ep=function(e,n){var t=Z;try{return Z=e,n()}finally{Z=t}};Cu=function(e,n,t){switch(n){case"input":if(gu(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Gl(r);if(!i)throw Error(M(90));Ld(r),gu(r,i)}}}break;case"textarea":Nd(e,t);break;case"select":n=t.value,n!=null&&Jt(e,!!t.multiple,n,!1)}};$d=fs;Bd=It;var by={usingClientEntryPoint:!1,Events:[xi,qt,Gl,Od,jd,fs]},Mr={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ry={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vd(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||Ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{ql=$i.inject(Ry),An=$i}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=by;nn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ks(n))throw Error(M(200));return zy(e,n,null,t)};nn.createRoot=function(e,n){if(!ks(e))throw Error(M(299));var t=!1,r="",i=Sh;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=ms(e,1,!1,null,null,t,!1,r,i),e[Bn]=n.current,ui(e.nodeType===8?e.parentNode:e),new ys(n)};nn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Vd(n),e=e===null?null:e.stateNode,e};nn.flushSync=function(e){return It(e)};nn.hydrate=function(e,n,t){if(!lo(n))throw Error(M(200));return oo(null,e,n,!0,t)};nn.hydrateRoot=function(e,n,t){if(!ks(e))throw Error(M(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Sh;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=vh(n,null,e,1,t??null,i,!1,l,o),e[Bn]=n.current,ui(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new io(n)};nn.render=function(e,n,t){if(!lo(n))throw Error(M(200));return oo(null,e,n,!1,t)};nn.unmountComponentAtNode=function(e){if(!lo(e))throw Error(M(40));return e._reactRootContainer?(It(function(){oo(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1};nn.unstable_batchedUpdates=fs;nn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!lo(t))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return oo(e,n,t,!1,r)};nn.version="18.3.1-next-f1338f8080-20240426";function Ch(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ch)}catch(e){console.error(e)}}Ch(),Cd.exports=nn;var Fy=Cd.exports,ef=Fy;su.createRoot=ef.createRoot,su.hydrateRoot=ef.hydrateRoot;const Oy=`# 标题

这是第一版内容。

- 列表项1
- 列表项2

\`\`\`ts
const a = 1;
\`\`\`

$$a=1$$`,jy=`# 标题

这是第二版内容，增加了内容。

- 列表项1
- 列表项3

\`\`\`js
const a = 2;
\`\`\``,$y=`# 一级标题

## 二级标题

### 三级标题

#### 四级标题

这是一些普通文本内容。

##### 五级标题

###### 六级标题`,By=`# 修改后的一级标题

## 二级标题已更新

### 三级标题

这是一些普通文本内容，增加了一些新内容。

#### 新增的四级标题

##### 五级标题

###### 六级标题已修改`,Hy=`# 列表示例

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
- [ ] 待办任务 3`,Uy=`# 列表示例（更新版）

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
- [ ] 待办任务 3`,Vy=`# 代码示例

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
\`\`\``,Wy=`# 代码示例（更新版）

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
\`\`\``,qy=`# 表格示例

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
| 利润 | 2,000 | 3,000 | 5,000 | 6,000 | 16,000 |`,Qy=`# 表格示例（更新版）

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
| 税费 | 600 | 1,000 | 1,200 | 1,600 | 4,400 | - |`,Yy=`# 链接和图片示例

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

这段文字包含一个[链接](https://example.com)和一个![内联图片](https://example.com/inline-image.jpg)。`,Xy=`# 链接和图片示例（更新版）

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

新增的段落，包含一个[新链接](https://example.com/new)。`,Gy=`# 文本格式化示例

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

这段文字**包含*混合的*格式**，还有~~一些~~\`代码\`。`,Ky=`# 文本格式化示例（更新版）

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

这里有一些==高亮文本==。`,Zy=`# 复杂 Markdown 文档示例

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

这个文档展示了多种 Markdown 元素的使用方式，可以用于测试差异比较功能。`,Jy=`# 复杂 Markdown 文档示例（更新版）

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

## `,e0=`# 极端长文本测试

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

这个文档包含了各种极端长的内容元素，用于测试 Markdown 差异比较工具处理大量文本的能力。`,n0=`# 极端长文本测试（更新版）

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

这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。`,t0=`# 嵌套结构测试

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

这个文档包含了各种深度嵌套的结构，用于测试 Markdown 差异比较工具处理复杂嵌套内容的能力。`,r0=`# 嵌套结构测试（更新版）

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
>     \`\`\``,i0=`# 特殊字符测试

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

这个文档包含了各种特殊字符和符号，用于测试 Markdown 差异比较工具处理特殊字符的能力。`,l0=`# 特殊字符测试（更新版）

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

नमस्ते दुनिया! यह संस्कृत के लिए एक परीक्षण है.`,o0=`# 空白处理测试

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

这个文档包含了各种空白字符的使用情况，用于测试 Markdown 差异比较工具处理空白字符的能力。`,u0=`# 空白处理测试（更新版）

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
 
  
   
    
     
      
       
        
         
普通文本（中间是递增的空格行）`,a0=`# 混合内容测试

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

这个文档包含了各种混合内容的情况，用于测试 Markdown 差异比较工具处理复杂混合内容的能力。`,s0=`# 混合内容测试（更新版）

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
</div>`,nf=[{name:"simple",oldMarkdown:Oy,newMarkdown:jy},{name:"headings",oldMarkdown:$y,newMarkdown:By},{name:"lists",oldMarkdown:Hy,newMarkdown:Uy},{name:"code",oldMarkdown:Vy,newMarkdown:Wy},{name:"tables",oldMarkdown:qy,newMarkdown:Qy},{name:"links",oldMarkdown:Yy,newMarkdown:Xy},{name:"formatting",oldMarkdown:Gy,newMarkdown:Ky},{name:"complex",oldMarkdown:Zy,newMarkdown:Jy},{name:"extreme_long",oldMarkdown:e0,newMarkdown:n0},{name:"nested_structures",oldMarkdown:t0,newMarkdown:r0},{name:"special_characters",oldMarkdown:i0,newMarkdown:l0},{name:"whitespace",oldMarkdown:o0,newMarkdown:u0},{name:"mixed_content",oldMarkdown:a0,newMarkdown:s0}];class _h{diff(n,t,r={}){let i;typeof r=="function"?(i=r,r={}):"callback"in r&&(i=r.callback);const l=this.castInput(n,r),o=this.castInput(t,r),u=this.removeEmpty(this.tokenize(l,r)),a=this.removeEmpty(this.tokenize(o,r));return this.diffWithOptionsObj(u,a,r,i)}diffWithOptionsObj(n,t,r,i){var l;const o=m=>{if(m=this.postProcess(m,r),i){setTimeout(function(){i(m)},0);return}else return m},u=t.length,a=n.length;let s=1,f=u+a;r.maxEditLength!=null&&(f=Math.min(f,r.maxEditLength));const c=(l=r.timeout)!==null&&l!==void 0?l:1/0,p=Date.now()+c,d=[{oldPos:-1,lastComponent:void 0}];let g=this.extractCommon(d[0],t,n,0,r);if(d[0].oldPos+1>=a&&g+1>=u)return o(this.buildValues(d[0].lastComponent,t,n));let w=-1/0,T=1/0;const h=()=>{for(let m=Math.max(w,-s);m<=Math.min(T,s);m+=2){let y;const C=d[m-1],_=d[m+1];C&&(d[m-1]=void 0);let v=!1;if(_){const A=_.oldPos-m;v=_&&0<=A&&A<u}const P=C&&C.oldPos+1<a;if(!v&&!P){d[m]=void 0;continue}if(!P||v&&C.oldPos<_.oldPos?y=this.addToPath(_,!0,!1,0,r):y=this.addToPath(C,!1,!0,1,r),g=this.extractCommon(y,t,n,m,r),y.oldPos+1>=a&&g+1>=u)return o(this.buildValues(y.lastComponent,t,n))||!0;d[m]=y,y.oldPos+1>=a&&(T=Math.min(T,m-1)),g+1>=u&&(w=Math.max(w,m+1))}s++};if(i)(function m(){setTimeout(function(){if(s>f||Date.now()>p)return i(void 0);h()||m()},0)})();else for(;s<=f&&Date.now()<=p;){const m=h();if(m)return m}}addToPath(n,t,r,i,l){const o=n.lastComponent;return o&&!l.oneChangePerToken&&o.added===t&&o.removed===r?{oldPos:n.oldPos+i,lastComponent:{count:o.count+1,added:t,removed:r,previousComponent:o.previousComponent}}:{oldPos:n.oldPos+i,lastComponent:{count:1,added:t,removed:r,previousComponent:o}}}extractCommon(n,t,r,i,l){const o=t.length,u=r.length;let a=n.oldPos,s=a-i,f=0;for(;s+1<o&&a+1<u&&this.equals(r[a+1],t[s+1],l);)s++,a++,f++,l.oneChangePerToken&&(n.lastComponent={count:1,previousComponent:n.lastComponent,added:!1,removed:!1});return f&&!l.oneChangePerToken&&(n.lastComponent={count:f,previousComponent:n.lastComponent,added:!1,removed:!1}),n.oldPos=a,s}equals(n,t,r){return r.comparator?r.comparator(n,t):n===t||!!r.ignoreCase&&n.toLowerCase()===t.toLowerCase()}removeEmpty(n){const t=[];for(let r=0;r<n.length;r++)n[r]&&t.push(n[r]);return t}castInput(n,t){return n}tokenize(n,t){return Array.from(n)}join(n){return n.join("")}postProcess(n,t){return n}get useLongestToken(){return!1}buildValues(n,t,r){const i=[];let l;for(;n;)i.push(n),l=n.previousComponent,delete n.previousComponent,n=l;i.reverse();const o=i.length;let u=0,a=0,s=0;for(;u<o;u++){const f=i[u];if(f.removed)f.value=this.join(r.slice(s,s+f.count)),s+=f.count;else{if(!f.added&&this.useLongestToken){let c=t.slice(a,a+f.count);c=c.map(function(p,d){const g=r[s+d];return g.length>p.length?g:p}),f.value=this.join(c)}else f.value=this.join(t.slice(a,a+f.count));a+=f.count,f.added||(s+=f.count)}}return i}}class c0 extends _h{}const f0=new c0;function d0(e,n,t){return f0.diff(e,n,t)}function tf(e,n){let t;for(t=0;t<e.length&&t<n.length;t++)if(e[t]!=n[t])return e.slice(0,t);return e.slice(0,t)}function rf(e,n){let t;if(!e||!n||e[e.length-1]!=n[n.length-1])return"";for(t=0;t<e.length&&t<n.length;t++)if(e[e.length-(t+1)]!=n[n.length-(t+1)])return e.slice(-t);return e.slice(-t)}function ta(e,n,t){if(e.slice(0,n.length)!=n)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(n)}; this is a bug`);return t+e.slice(n.length)}function ra(e,n,t){if(!n)return e+t;if(e.slice(-n.length)!=n)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(n)}; this is a bug`);return e.slice(0,-n.length)+t}function Ar(e,n){return ta(e,n,"")}function Bi(e,n){return ra(e,n,"")}function lf(e,n){return n.slice(0,p0(e,n))}function p0(e,n){let t=0;e.length>n.length&&(t=e.length-n.length);let r=n.length;e.length<n.length&&(r=e.length);const i=Array(r);let l=0;i[0]=0;for(let o=1;o<r;o++){for(n[o]==n[l]?i[o]=i[l]:i[o]=l;l>0&&n[o]!=n[l];)l=i[l];n[o]==n[l]&&l++}l=0;for(let o=t;o<e.length;o++){for(;l>0&&e[o]!=n[l];)l=i[l];e[o]==n[l]&&l++}return l}function Eh(e,n){const t=[];for(const r of Array.from(n.segment(e))){const i=r.segment;t.length&&/\s/.test(t[t.length-1])&&/\s/.test(i)?t[t.length-1]+=i:t.push(i)}return t}function ia(e,n){if(n)return Yr(e,n)[1];let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function jt(e,n){if(n)return Yr(e,n)[0];const t=e.match(/^\s*/);return t?t[0]:""}function Yr(e,n){if(!n)return[jt(e),ia(e)];if(n.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');const t=Eh(e,n),r=t[0],i=t[t.length-1],l=/\s/.test(r)?r:"",o=/\s/.test(i)?i:"";return[l,o]}const of="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",h0=new RegExp(`[${of}]+|\\s+|[^${of}]`,"ug");class m0 extends _h{equals(n,t,r){return r.ignoreCase&&(n=n.toLowerCase(),t=t.toLowerCase()),n.trim()===t.trim()}tokenize(n,t={}){let r;if(t.intlSegmenter){const o=t.intlSegmenter;if(o.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');r=Eh(n,o)}else r=n.match(h0)||[];const i=[];let l=null;return r.forEach(o=>{/\s/.test(o)?l==null?i.push(o):i.push(i.pop()+o):l!=null&&/\s/.test(l)?i[i.length-1]==l?i.push(i.pop()+o):i.push(l+o):i.push(o),l=o}),i}join(n){return n.map((t,r)=>r==0?t:t.replace(/^\s+/,"")).join("")}postProcess(n,t){if(!n||t.oneChangePerToken)return n;let r=null,i=null,l=null;return n.forEach(o=>{o.added?i=o:o.removed?l=o:((i||l)&&uf(r,l,i,o,t.intlSegmenter),r=o,i=null,l=null)}),(i||l)&&uf(r,l,i,null,t.intlSegmenter),n}}const g0=new m0;function Th(e,n,t){return g0.diff(e,n,t)}function uf(e,n,t,r,i){if(n&&t){const[l,o]=Yr(n.value,i),[u,a]=Yr(t.value,i);if(e){const s=tf(l,u);e.value=ra(e.value,u,s),n.value=Ar(n.value,s),t.value=Ar(t.value,s)}if(r){const s=rf(o,a);r.value=ta(r.value,a,s),n.value=Bi(n.value,s),t.value=Bi(t.value,s)}}else if(t){if(e){const l=jt(t.value,i);t.value=t.value.substring(l.length)}if(r){const l=jt(r.value,i);r.value=r.value.substring(l.length)}}else if(e&&r){const l=jt(r.value,i),[o,u]=Yr(n.value,i),a=tf(l,o);n.value=Ar(n.value,a);const s=rf(Ar(l,a),u);n.value=Bi(n.value,s),r.value=ta(r.value,l,s),e.value=ra(e.value,l,l.slice(0,l.length-s.length))}else if(r){const l=jt(r.value,i),o=ia(n.value,i),u=lf(o,l);n.value=Bi(n.value,u)}else if(e){const l=ia(e.value,i),o=jt(n.value,i),u=lf(l,o);n.value=Ar(n.value,u)}}function b(e,n){if(!e)throw new Error("Assertion failed")}class af{constructor(){this.nodes=[],this.maxId=0,this.maxNodes=0,this.maxWeight=0,this.nodes=[]}getXNode(n){return this.nodes[n]}setXNode(n,t){this.nodes[n]=t,n>this.maxId&&(this.maxId=n),this.maxNodes+=1}}var _e=(e=>(e.Ins="ins",e.Del="del",e))(_e||{}),Fr=(e=>(e.Ins="ins",e.Del="del",e.InlineIns="inlineIns",e.InlineDel="inlineDel",e))(Fr||{}),q=(e=>(e.Root="root",e.Blockquote="blockquote",e.Break="break",e.Code="code",e.Definition="definition",e.Emphasis="emphasis",e.Heading="heading",e.Html="html",e.Image="image",e.ImageReference="imageReference",e.InlineCode="inlineCode",e.Link="link",e.LinkReference="linkReference",e.List="list",e.ListItem="listItem",e.Paragraph="paragraph",e.Strong="strong",e.Text="text",e.ThematicBreak="thematicBreak",e.Delete="delete",e.FootnoteDefinition="footnoteDefinition",e.FootnoteReference="footnoteReference",e.Table="table",e.TableRow="tableRow",e.TableCell="tableCell",e.ContainerDirective="containerDirective",e.LeafDirective="leafDirective",e.TextDirective="textDirective",e.YAML="yaml",e.TOML="toml",e.MDXJSEsm="mdxjsEsm",e.MDXJSExpression="mdxJsExpression",e.MDXFlowExpression="mdxFlowExpression",e.MDXTextExpression="mdxTextExpression",e))(q||{});const y0=new Set(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","link","linkReference","strong","text","inlineMath"]);function k0(e){return y0.has(e.type)}function an(e){return e.type===q.Table||e.type===q.YAML||e.type===q.TOML}function Ph(e,n,t,r=1){if(!e||!n||!t||!e.children)return;const i=e.children.indexOf(n);i!==-1&&(Array.isArray(t)?e.children.splice(i,r,...t):e.children.splice(i,r,t))}const x0=1;function sf(e,n,t,r){var o,u,a,s;let i=x0;const l=Math.max(1,Math.ceil(Math.log(r.maxNodes)*n.weight/r.maxWeight));for(let f=0;f<l;f++){const c=(u=(o=e.node)==null?void 0:o._parent)==null?void 0:u._xNode,p=(s=(a=n.node)==null?void 0:a._parent)==null?void 0:s._xNode;c&&p&&p.match&&p.match===c.node&&(i+=1)}return i}function w0(e,n,t,r){if(b(e.node),b(t.node),!t.optMatch){t.optMatch=e.node,t.opt=sf(e,t,n,r);return}const i=sf(e,t,n,r);if(i===t.opt){const l=Math.abs(t.optMatch._id-t.node._id),o=Math.abs(e.node._id-t.node._id);l>o&&(t.optMatch=e.node,t.opt=i)}else i>t.opt&&(t.optMatch=e.node,t.opt=i)}function Fl(e,n){if(e.type!==n.type)return!1;switch(e.type){case q.Link:if(e.url!==n.url||e.title!==n.title)return!1;break;case q.Heading:if(e.depth!==n.depth)return!1;break;case q.ListItem:if(e.checked!==n.checked||e.spread!==n.spread)return!1;break}return!0}function cf(e){return e._parent?e._parent.children.length===1:!0}function v0(e,n,t,r){var o,u,a,s;const i=Math.max(1,Math.ceil(Math.log(r.maxNodes)*t.weight/r.maxWeight));let l=0;for(;l<i;){const f=(o=e.node)==null?void 0:o._parent,c=(u=t.node)==null?void 0:u._parent;if(!f||!c||!Fl(f,c)||(b(f._xNode&&c._xNode),e=f._xNode,t=c._xNode,e.match||t.match))break;e.match=t.node,t.match=e.node,l+=1}if(l===i)for(;;){b(e.node&&t.node);const f=(a=e.node)==null?void 0:a._parent,c=(s=t.node)==null?void 0:s._parent;if(!f||!c||!cf(t.node)||!cf(e.node)||!Fl(f,c)||(b(f._xNode&&c._xNode),e=f._xNode,t=c._xNode,e.match||t.match))break;e.match=t.node,t.match=e.node}}function Mh(e,n,t,r){var o,u;let i,l;if(e.match&&(b(e.match._xNode),b(e.node===e.match._xNode.match),e.match._xNode.match=void 0,e.match=void 0),b(!t.match),b(!e.match),t.match=e.node,e.match=t.node,b(t.node),b(e.node),an(t.node)){b(an(e.node));return}for(i=(o=e.node.children)==null?void 0:o[0],l=(u=t.node.children)==null?void 0:u[0];l;)b(i),b(i._xNode),b(l._xNode),Mh(i._xNode,n,l._xNode),i=i._next,l=l._next;b(!i)}function Ah(e){if(!e.children)return;const n=e.children.length;e.children.forEach((t,r)=>{r>0&&(t._before=e.children[r-1]),r<n-1&&(t._next=e.children[r+1])})}function Ih(e,n){const t={...e,data:{...e.data},_id:n,type:e.type,position:e.position};return delete t._parent,delete t._before,delete t._next,t}function Dn(e,n){n.value+=1;const t=Ih(e,n.value);return e.children&&(t.children=[],e.children.forEach(r=>{var l;const i=Dn(r,n);i._parent=t,(l=t.children)==null||l.push(i)}),Ah(t)),t}const ff=100;function S0(e,n,t,r){const i=e.value.length<=ff||n.value.length<=ff?d0(e.value,n.value):Th(e.value,n.value);for(const l of i){r.value+=1;const o={_id:r.value,type:q.Text,value:l.value,data:{},_parent:t};l.added?o.data.diff=_e.Ins:l.removed&&(o.data.diff=_e.Del),t.children||(t.children=[]),t.children.push(o)}}function Lh(e,n,t,r,i){var c,p;let l,o,u;b(t&&e),b(t._xNode),b(e._xNode),o=t._xNode,l=e._xNode,b(l.match),b(o.match),b(o.match===l.node);const a=Ih(t,i.value);a.children=[];let s=(c=e.children)==null?void 0:c[0],f=(p=t.children)==null?void 0:p[0];for(;f;){for(;s&&(l=s._xNode,b(l),!(l.match||s.type===q.Text));)u=Dn(s,i),u._parent=a,u.data.diff=_e.Del,a.children.push(u),s=s._next;for(;f&&(o=f._xNode,b(o),!(o.match||f.type===q.Text));)u=Dn(f,i),u._parent=a,u.data.diff=_e.Ins,a.children.push(u),f=f._next;for(b(l&&o),s&&f&&s.type==q.Text&&!l.match&&f.type==q.Text&&!o.match&&(S0(s,f,a,i),s=s._next,f=f._next);s&&(l=s._xNode,b(l),!l.match);)u=Dn(s,i),u._parent=a,u.data.diff=_e.Del,a.children.push(u),s=s._next;for(;f&&(o=f._xNode,b(o),!o.match);)u=Dn(f,i),u._parent=a,u.data.diff=_e.Ins,a.children.push(u),f=f._next;if(!f)break;o=f._xNode,b(o),b(o.match);let d=s;for(;d&&(l=d._xNode,b(l),o.node!==l.match);)d=d._next;if(!d){u=Dn(f,i),u._parent=a,u.data.diff=_e.Ins,a.children.push(u),f=f._next;continue}for(;s&&(l=s._xNode,b(l),o.node!==l.match);)u=Dn(s,i),u._parent=a,u.data.diff=_e.Del,a.children.push(u),s=s._next;b(s),an(f)?(b(an(s)),u=Dn(f,i),u._parent=a,a.children.push(u)):(b(!an(s)),u=Lh(s,n,f,r,i),u._parent=a,a.children.push(u)),s=s._next,f=f._next}for(;s;)u=Dn(s,i),u._parent=a,u.data.diff=_e.Del,a.children.push(u),s=s._next;return a}function Or(e){return!!e.children&&e.children.length>0}function zh(e){var i;if(an(e)||!Or(e))return;const n=e._xNode;b(n);const t=n.match;if(!t)return;const r=t._xNode;b(r);for(const l of e.children){if(an(l)||!Or(l))continue;b(l._xNode);const o=l._xNode.match;if(!o||((i=o==null?void 0:o._parent)==null?void 0:i._id)!==t._id)continue;b(o._xNode);const u=l._next;if(!u||an(u)||!Or(u))continue;const a=u._xNode;if(b(a),a.match)continue;const s=o._next;if(!s||an(s)||!Or(s))continue;const f=s._xNode;b(f),!f.match&&Fl(u,s)&&(a.match=s,f.match=u)}for(const l of e.children)zh(l)}function Nh(e,n,t){var o;let r,i=0,l=0;if(b(e._xNode),!(an(e)||!Or(e))){for(const u of e.children)b(u._xNode),l+=((o=u._xNode)==null?void 0:o.weight)||0,Nh(u);if(!e._xNode.match){for(const u of e.children){if(b(u._xNode),!u._xNode.match)continue;const a=u._xNode.match._parent;if(!a||a===r||!Fl(e,a))continue;let s=0;for(const f of e.children)b(f._xNode),f._xNode.match&&a===f._xNode.match._parent&&(s+=f._xNode.weight);s>i&&(i=s,r=a)}r&&(b(r._xNode),i/l>=.5&&(e._xNode.match=r,r._xNode.match=e))}}}const uo=function(e){if(e==null)return T0;if(typeof e=="function")return ao(e);if(typeof e=="object")return Array.isArray(e)?C0(e):_0(e);if(typeof e=="string")return E0(e);throw new Error("Expected function, string, or object as test")};function C0(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=uo(e[t]);return ao(r);function r(...i){let l=-1;for(;++l<n.length;)if(n[l].apply(this,i))return!0;return!1}}function _0(e){const n=e;return ao(t);function t(r){const i=r;let l;for(l in e)if(i[l]!==n[l])return!1;return!0}}function E0(e){return ao(n);function n(t){return t&&t.type===e}}function ao(e){return n;function n(t,r,i){return!!(P0(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function T0(){return!0}function P0(e){return e!==null&&typeof e=="object"&&"type"in e}const Dh=[],M0=!0,la=!1,A0="skip";function bh(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const l=uo(i),o=r?-1:1;u(e,void 0,[])();function u(a,s,f){const c=a&&typeof a=="object"?a:{};if(typeof c.type=="string"){const d=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(a.type+(d?"<"+d+">":""))+")"})}return p;function p(){let d=Dh,g,w,T;if((!n||l(a,s,f[f.length-1]||void 0))&&(d=I0(t(a,f)),d[0]===la))return d;if("children"in a&&a.children){const h=a;if(h.children&&d[0]!==A0)for(w=(r?h.children.length:-1)+o,T=f.concat(h);w>-1&&w<h.children.length;){const m=h.children[w];if(g=u(m,w,T)(),g[0]===la)return g;w=typeof g[1]=="number"?g[1]:w+o}}return d}}}function I0(e){return Array.isArray(e)?e:typeof e=="number"?[M0,e]:e==null?Dh:[e]}function cn(e,n,t,r){let i,l,o;typeof n=="function"&&typeof t!="function"?(l=void 0,o=n,i=t):(l=n,o=t,i=r),bh(e,l,u,i);function u(a,s){const f=s[s.length-1],c=f?f.children.indexOf(a):void 0;return o(a,c,f)}}function L0(e){return 55296<=e&&e<=56319}function df(e){return 56320<=e&&e<=57343}function z0(e,n){return(e-55296<<10)+(n-56320)+65536}const Rh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",N0=Rh.length;function D0(e){let n="";for(let t=0;t<e;t++)n+=Rh.charAt(Math.floor(Math.random()*N0));return n}function b0(e,n){if(e.length===0)return n.length;if(n.length===0)return e.length;const t=e.length,r=n.length,i=new Array(r+1),l=new Array(r+1);for(let o=0;o<=r;o++)i[o]=o;for(let o=1;o<=t;o++){l[0]=o;for(let u=1;u<=r;u++){const a=e[o-1]===n[u-1]?0:1;l[u]=Math.min(i[u]+1,l[u-1]+1,i[u-1]+a)}for(let u=0;u<=r;u++)i[u]=l[u]}return i[r]}function R0(e,n){if(e.length===0&&n.length===0)return 1;if(e.length===0||n.length===0)return 0;const t=b0(e,n),r=Math.max(e.length,n.length);return 1-t/r}function F0(e,n){if(e===n)return 1;const t=e.trim().toLowerCase(),r=n.trim().toLowerCase();return t===r?1:R0(t,r)}function pf(e){if(!e.children||e.children.length!==1)return!1;const n=e.children[0];return!(n.type!==q.Text||!n.value)}function O0(e,n){let t=[],r=[];const i=new Set,l=new Set;cn(e,"heading",c=>{pf(c)&&(i.add(c.children[0].value),t.push([c,c.children[0].value]))}),cn(n,"heading",c=>{pf(c)&&(l.add(c.children[0].value),r.push([c,c.children[0].value]))}),t=t.filter(([c,p])=>!l.has(p)),r=r.filter(([c,p])=>!i.has(p));const o=[];for(let c=0;c<t.length;c++){o[c]=[];for(let p=0;p<r.length;p++)o[c][p]=F0(t[c][1],r[p][1])}const u=[],a=new Set,s=new Set,f=[];for(let c=0;c<t.length;c++)for(let p=0;p<r.length;p++)o[c][p]>.5&&f.push({oldIndex:c,newIndex:p,similarity:o[c][p]});f.sort((c,p)=>p.similarity-c.similarity);for(const c of f)!a.has(c.oldIndex)&&!s.has(c.newIndex)&&(u.push(c),a.add(c.oldIndex),s.add(c.newIndex));return u.forEach(c=>{const p=t[c.oldIndex][0],d=r[c.newIndex][0],g=D0(16),w={type:q.Text,value:g,data:{headingDiffToken:!0}},T={type:q.Text,value:g,data:{headingDiffToken:!0}};p.children.push(w),d.children.push(T)}),c=>{cn(c,q.Text,(p,d,g)=>{var w;(w=p.data)!=null&&w.headingDiffToken&&Ph(g,p,[])})}}function j0(e,n){for(const t of[e,n])cn(t,"listItem",r=>{r.children&&r.children.length===1&&r.children[0].type==="paragraph"&&r.children[0].children&&(r.data||(r.data={}),r.data.backupParagraph=r.children[0],r.children=r.children[0].children)});return t=>{cn(t,"listItem",r=>{var i;(i=r.data)!=null&&i.backupParagraph&&(r.children=[{...r.data.backupParagraph,children:r.children}],delete r.data.backupParagraph)})}}function $0(e,n){for(const t of[e,n]){let r=0;cn(t,(i,l,o)=>{i._parent=o,i._id=r,r+=1,i.data||(i.data={}),i.children&&Ah(i)})}return t=>{cn(t,r=>{delete r._parent,delete r._xNode,delete r._id,delete r._before,delete r._next})}}var so={},co={},fo={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 */let B0=class al{constructor(n,t,r){if(typeof n!="function")throw new Error("Heap constructor expects a compare function");this._compare=n,this._nodes=Array.isArray(t)?t:[],this._leaf=r||null,this._nodes.length>0&&this.fix()}toArray(){return Array.from(this._nodes)}_hasLeftChild(n){return n*2+1<this.size()}_hasRightChild(n){return n*2+2<this.size()}_compareAt(n,t){return this._compare(this._nodes[n],this._nodes[t])}_swap(n,t){const r=this._nodes[n];this._nodes[n]=this._nodes[t],this._nodes[t]=r}_shouldSwap(n,t){return n<0||n>=this.size()||t<0||t>=this.size()?!1:this._compareAt(n,t)>0}_compareChildrenOf(n){if(!this._hasLeftChild(n)&&!this._hasRightChild(n))return-1;const t=n*2+1,r=n*2+2;return this._hasLeftChild(n)?this._hasRightChild(n)&&this._compareAt(t,r)>0?r:t:r}_compareChildrenBefore(n,t,r){return this._compareAt(r,t)<=0&&r<n?r:t}_heapifyUp(n){let t=n,r=Math.floor((t-1)/2);for(;this._shouldSwap(r,t);)this._swap(r,t),t=r,r=Math.floor((t-1)/2)}_heapifyDown(n){let t=n,r=this._compareChildrenOf(t);for(;this._shouldSwap(t,r);)this._swap(t,r),t=r,r=this._compareChildrenOf(t)}_heapifyDownUntil(n){let t=0,r=1,i=2,l;for(;r<n;)l=this._compareChildrenBefore(n,r,i),this._shouldSwap(t,l)&&this._swap(t,l),t=l,r=t*2+1,i=t*2+2}insert(n){return this._nodes.push(n),this._heapifyUp(this.size()-1),(this._leaf===null||this._compare(n,this._leaf)>0)&&(this._leaf=n),this}push(n){return this.insert(n)}extractRoot(){if(this.isEmpty())return null;const n=this.root();return this._nodes[0]=this._nodes[this.size()-1],this._nodes.pop(),this._heapifyDown(0),n===this._leaf&&(this._leaf=null),n}pop(){return this.extractRoot()}sort(){for(let n=this.size()-1;n>0;n-=1)this._swap(0,n),this._heapifyDownUntil(n);return this._nodes}fix(){for(let n=Math.floor(this.size()/2)-1;n>=0;n-=1)this._heapifyDown(n);for(let n=Math.floor(this.size()/2);n<this.size();n+=1){const t=this._nodes[n];(this._leaf===null||this._compare(t,this._leaf)>0)&&(this._leaf=t)}return this}isValid(){const n=t=>{let r=!0,i=!0;if(this._hasLeftChild(t)){const l=t*2+1;if(this._compareAt(t,l)>0)return!1;r=n(l)}if(this._hasRightChild(t)){const l=t*2+2;if(this._compareAt(t,l)>0)return!1;i=n(l)}return r&&i};return n(0)}clone(){return new al(this._compare,this._nodes.slice(),this._leaf)}root(){return this.isEmpty()?null:this._nodes[0]}top(){return this.root()}leaf(){return this._leaf}size(){return this._nodes.length}isEmpty(){return this.size()===0}clear(){this._nodes=[],this._leaf=null}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}static heapify(n,t){if(!Array.isArray(n))throw new Error("Heap.heapify expects an array of values");if(typeof t!="function")throw new Error("Heap.heapify expects a compare function");return new al(t,n).fix()}static isHeapified(n,t){return new al(t,n).isValid()}};fo.Heap=B0;var Fh={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */const{Heap:H0}=fo,U0=e=>(n,t)=>{const r=typeof e=="function"?e(n):n,i=typeof e=="function"?e(t):t;return r<=i?-1:1};let V0=class sl extends H0{constructor(n,t){super(U0(n),t),this._getCompareValue=n}insert(n){return super.insert(n),this}push(n){return this.insert(n)}fix(){return super.fix(),this}clone(){return new sl(this._getCompareValue,this._nodes.slice())}static heapify(n,t){if(!Array.isArray(n))throw new Error("MinHeap.heapify expects an array");return new sl(t,n)}static isHeapified(n,t){return new sl(t,n).isValid()}};Fh.MinHeap=V0;var Oh={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */const{Heap:W0}=fo,q0=e=>(n,t)=>{const r=typeof e=="function"?e(n):n,i=typeof e=="function"?e(t):t;return r<i?1:-1};let Q0=class cl extends W0{constructor(n,t){super(q0(n),t),this._getCompareValue=n}insert(n){return super.insert(n),this}push(n){return this.insert(n)}fix(){return super.fix(),this}clone(){return new cl(this._getCompareValue,this._nodes.slice())}static heapify(n,t){if(!Array.isArray(n))throw new Error("MaxHeap.heapify expects an array");return new cl(t,n)}static isHeapified(n,t){return new cl(t,n).isValid()}};Oh.MaxHeap=Q0;const{Heap:Y0}=fo,{MinHeap:X0}=Fh,{MaxHeap:G0}=Oh;co.Heap=Y0;co.MinHeap=X0;co.MaxHeap=G0;/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */const{Heap:K0}=co;let oa=class{constructor(n,t){if(typeof n!="function")throw new Error("PriorityQueue constructor expects a compare function");this._heap=new K0(n,t)}front(){return this._heap.root()}back(){return this._heap.leaf()}enqueue(n){return this._heap.insert(n),this}push(n){return this.enqueue(n)}dequeue(){return this._heap.extractRoot()}pop(){return this.dequeue()}remove(n){if(typeof n!="function")throw new Error("PriorityQueue remove expects a callback");const t=[],r=[];for(;!this.isEmpty();){const i=this.pop();n(i)?t.push(i):r.push(i)}return r.forEach(i=>this.push(i)),t}contains(n){if(typeof n!="function")throw new Error("PriorityQueue contains expects a callback");let t=!1;const r=[];for(;!this.isEmpty();){const i=this.pop();if(r.push(i),n(i)){t=!0;break}}return r.forEach(i=>this.push(i)),t}size(){return this._heap.size()}isEmpty(){return this._heap.isEmpty()}fix(){return this._heap.fix(),this}clear(){this._heap.clear()}toArray(){return this._heap.clone().sort().reverse()}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}};oa.fromArray=function(n,t){return new oa(t,n)};so.PriorityQueue=oa;/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */const{PriorityQueue:Z0}=so;class hf extends Z0{constructor(n,t){if(n&&typeof n=="object"&&typeof n.compare=="function"){const r=(i,l)=>n.compare(i,l)<=0?-1:1;super(r,t)}else{const r=n;if(r&&typeof r!="function")throw new Error("MinPriorityQueue constructor requires a callback for object values");const i=(l,o)=>{const u=typeof r=="function"?r(l):l,a=typeof r=="function"?r(o):o;return u<=a?-1:1};super(i,t)}}enqueue(n){return super.enqueue(n),this}push(n){return this.enqueue(n)}}hf.fromArray=function(n,t){return new hf(t,n)};/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */const{PriorityQueue:J0}=so;class mf extends J0{constructor(n,t){if(n&&typeof n=="object"&&typeof n.compare=="function"){const r=(i,l)=>n.compare(i,l)<=0?-1:1;super(r,t)}else{const r=n;if(r&&typeof r!="function")throw new Error("MaxPriorityQueue constructor requires a callback for object values");const i=(l,o)=>{const u=typeof r=="function"?r(l):l,a=typeof r=="function"?r(o):o;return u<a?1:-1};super(i,t)}}enqueue(n){return super.enqueue(n),this}push(n){return this.enqueue(n)}}mf.fromArray=function(n,t){return new mf(t,n)};const{PriorityQueue:ek}=so;var nk={PriorityQueue:ek};function tk(){return new nk.PriorityQueue((n,t)=>{const r=n._xNode,i=t._xNode,l=(r==null?void 0:r.weight)||0,o=(i==null?void 0:i.weight)||0;return l!==o?o-l:n._id-t._id})}function Vo(e,n,t=32){const r=t-n,i=~((1<<r)-1);return(e<<n|(i&e)>>>r)>>>0}function Ir(e,n=32){return e instanceof ArrayBuffer?Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join(""):(e>>>0).toString(16).padStart(n/4,"0")}const Vl=class Vl{constructor(){this._h0=1732584193,this._h1=4023233417,this._h2=2562383102,this._h3=271733878,this._h4=3285377520,this._buff=new Uint8Array(67),this._buffDV=new DataView(this._buff.buffer),this._buffLen=0,this._totalLen=0,this._leftoverHighSurrogate=0,this._finished=!1}update(n){const t=n.length;if(t===0)return;const r=this._buff;let i=this._buffLen,l=this._leftoverHighSurrogate,o,u;for(l!==0?(o=l,u=-1,l=0):(o=n.charCodeAt(0),u=0);;){let a=o;if(L0(o))if(u+1<t){const s=n.charCodeAt(u+1);df(s)?(u++,a=z0(o,s)):a=65533}else{l=o;break}else df(o)&&(a=65533);if(i=this._push(r,i,a),u++,u<t)o=n.charCodeAt(u);else break}this._buffLen=i,this._leftoverHighSurrogate=l}_push(n,t,r){return r<128?n[t++]=r:r<2048?(n[t++]=192|(r&1984)>>>6,n[t++]=128|(r&63)>>>0):r<65536?(n[t++]=224|(r&61440)>>>12,n[t++]=128|(r&4032)>>>6,n[t++]=128|(r&63)>>>0):(n[t++]=240|(r&1835008)>>>18,n[t++]=128|(r&258048)>>>12,n[t++]=128|(r&4032)>>>6,n[t++]=128|(r&63)>>>0),t>=64&&(this._step(),t-=64,this._totalLen+=64,n[0]=n[64],n[1]=n[65],n[2]=n[66]),t}digest(){return this._finished||(this._finished=!0,this._leftoverHighSurrogate&&(this._leftoverHighSurrogate=0,this._buffLen=this._push(this._buff,this._buffLen,65533)),this._totalLen+=this._buffLen,this._wrapUp()),Ir(this._h0)+Ir(this._h1)+Ir(this._h2)+Ir(this._h3)+Ir(this._h4)}_wrapUp(){this._buff[this._buffLen++]=128,this._buff.subarray(this._buffLen).fill(0),this._buffLen>56&&(this._step(),this._buff.fill(0));const n=8*this._totalLen;this._buffDV.setUint32(56,Math.floor(n/4294967296),!1),this._buffDV.setUint32(60,n%4294967296,!1),this._step()}_step(){const n=Vl._bigBlock32,t=this._buffDV;for(let c=0;c<64;c+=4)n.setUint32(c,t.getUint32(c,!1),!1);for(let c=64;c<320;c+=4)n.setUint32(c,Vo(n.getUint32(c-12,!1)^n.getUint32(c-32,!1)^n.getUint32(c-56,!1)^n.getUint32(c-64,!1),1),!1);let r=this._h0,i=this._h1,l=this._h2,o=this._h3,u=this._h4,a,s,f;for(let c=0;c<80;c++)c<20?(a=i&l|~i&o,s=1518500249):c<40?(a=i^l^o,s=1859775393):c<60?(a=i&l|i&o|l&o,s=2400959708):(a=i^l^o,s=3395469782),f=Vo(r,5)+a+u+s+n.getUint32(c*4,!1)&4294967295,u=o,o=l,l=Vo(i,30),i=r,r=f;this._h0=this._h0+r&4294967295,this._h1=this._h1+i&4294967295,this._h2=this._h2+l&4294967295,this._h3=this._h3+o&4294967295,this._h4=this._h4+u&4294967295}};Vl._bigBlock32=new DataView(new ArrayBuffer(320));let ua=Vl;class gf{constructor(n){this.opt=0,this.sign="",this.weight=0,n&&(this._node=n,n._xNode=this)}get node(){return this._node}get match(){return this._match}set match(n){this._match=n}}function aa(e,n,t,r=!1){var s,f,c,p,d;let i=-1,l=0,o=r;r||(n.setXNode(t._id,new gf(t)),o=an(t));const u=new rk(t.type);(s=t.children)==null||s.forEach(g=>{l+=aa(u,n,g,o)});const a=r?new gf:t._xNode;switch(a.weight=l,t.type){case q.Code:i=t.value.length;break;case q.Html:i=t.value.length;break;case q.Link:i=t.url.length+(((f=t.title)==null?void 0:f.length)??0);break;case q.InlineCode:i=t.value.length;break;case q.Image:i=t.url.length+(((c=t.title)==null?void 0:c.length)??0)+(((p=t.alt)==null?void 0:p.length)??0);break;case q.Text:i=t.value.length;break;case q.LinkReference:i=((d=t.label)==null?void 0:d.length)??0;break}switch(i>=0?a.weight=1+(i===0?0:Math.log(i)):a.weight+=1,t.type){case q.List:u.update(t.ordered),u.update(t.start),u.update(t.spread);break;case q.ListItem:u.update(t.checked),u.update(t.spread);break;case q.Heading:u.update(t.depth);break;case q.Text:u.update(t.value);break;case q.Html:u.update(t.value);break;case q.Link:u.update(t.url),u.update(t.title);break;case q.Code:u.update(t.value),u.update(t.lang);break;case q.InlineCode:u.update(t.value);break;case q.Table:u.update(t.align);break;case q.Image:u.update(t.url),u.update(t.title),u.update(t.alt);break}return a.sign=u.digest(),e&&e.update(a.sign),a.weight>n.maxWeight&&(n.maxWeight=a.weight),a.weight}class rk{constructor(n=""){this.sha=new ua,n&&this.sha.update(n)}update(n){if(this.sha.update("|"),n===void 0)this.sha.update("$$undefined$$");else if(n===null)this.sha.update("$$null$$");else if(typeof n=="string")this.sha.update(n);else if(typeof n=="number")this.sha.update(n.toString());else if(typeof n=="boolean")this.sha.update(n?"$$true$$":"$$false$$");else if(Array.isArray(n)){this.sha.update("[");for(let t=0;t<n.length;t++)this.update(n[t]);this.sha.update("]")}}digest(){return this.sha.digest()}}function ik(e,n){var c;const t=[O0(e,n),j0(e,n),$0(e,n)],r=p=>{t.reverse().forEach(d=>d(p))};let i,l;const o=new af,u=new af;aa(null,o,e,!1),aa(null,u,n,!1);const a=tk();for(a.enqueue(n);a.size()>0;){const p=a.dequeue();if(!p)break;if(l=p._xNode,!l)continue;b(!l.match),b(!l.optMatch),b(l.opt===0);for(let w=0;w<o.nodes.length;w++)i=o.getXNode(w),i!=null&&i.node&&(i!=null&&i.match||i.sign===l.sign&&(b(!i.match),w0(i,o,l,u)));if(!l.optMatch){if(an(p))continue;(c=p.children)==null||c.forEach(w=>a.enqueue(w));continue}b(!l.match);const g=l.optMatch._xNode;b(!g.match),Mh(g,o,l),v0(g,o,l,u)}b(n._xNode),n._xNode.match||(b(e.type===q.Root),b(n.type===q.Root),i=e._xNode,l=n._xNode,b(i),b(l),b(!i.match),l.match=i.node,i.match=l.node),zh(n),Nh(n);const f=Lh(e,o,n,u,{value:0});return b(f.type===q.Root),r(f),f}function lk(e,n){var t,r;return!e&&!n?{type:"root",children:[]}:!e&&n?((t=n.children)==null||t.forEach(i=>{i.data||(i.data={}),i.data.diff=_e.Ins}),n):e&&!n?((r=e.children)==null||r.forEach(i=>{i.data||(i.data={}),i.data.diff=_e.Del}),e):ik(e,n)}function ok(e,n){if(n)switch(e){case _e.Ins:return Fr.InlineIns;case _e.Del:return Fr.InlineDel}else switch(e){case _e.Ins:return Fr.Ins;case _e.Del:return Fr.Del}}function uk(e){return cn(e,(n,t,r)=>{var o;if(n.type==="listItem"||n.type===_e.Ins||n.type===_e.Del||!((o=n.data)!=null&&o.diff))return!0;const i=n.data.diff;delete n.data.diff;const l=k0(n);return Ph(r,n,{type:ok(i,l),children:[n]}),!0}),e}const jh=uo(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]),yf={}.hasOwnProperty;function $h(e,n){const t=n||{};function r(i,...l){let o=r.invalid;const u=r.handlers;if(i&&yf.call(i,e)){const a=String(i[e]);o=yf.call(u,a)?u[a]:r.unknown}if(o)return o.call(this,i,...l)}return r.handlers=t.handlers||{},r.invalid=t.invalid,r.unknown=t.unknown,r}const ak={}.hasOwnProperty;function Bh(e,n){let t=-1,r;if(n.extensions)for(;++t<n.extensions.length;)Bh(e,n.extensions[t]);for(r in n)if(ak.call(n,r))switch(r){case"extensions":break;case"unsafe":{kf(e[r],n[r]);break}case"join":{kf(e[r],n[r]);break}case"handlers":{sk(e[r],n[r]);break}default:e.options[r]=n[r]}return e}function kf(e,n){n&&e.push(...n)}function sk(e,n){n&&Object.assign(e,n)}function ck(e,n,t,r){const i=t.enter("blockquote"),l=t.createTracker(r);l.move("> "),l.shift(2);const o=t.indentLines(t.containerFlow(e,l.current()),fk);return i(),o}function fk(e,n,t){return">"+(t?"":" ")+e}function Hh(e,n){return xf(e,n.inConstruct,!0)&&!xf(e,n.notInConstruct,!1)}function xf(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function wf(e,n,t,r){let i=-1;for(;++i<t.unsafe.length;){const l=t.unsafe[i];if(l.character===`
`&&!l.before&&!l.after&&Hh(t.stack,l))return/[\t ]/.test(r.before)?"":" "}return`\\
`}function dk(e,n){const t=String(e);let r=t.indexOf(n),i=r,l=0,o=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++l>o&&(o=l):l=1,i=r+n.length,r=t.indexOf(n,i);return o}function sa(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^\n\r ]/.test(e.value)&&!/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(e.value))}function pk(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function hk(e,n,t,r){const i=pk(t),l=e.value||"";if(sa(e,t)){const c=t.enter("codeIndented"),p=t.indentLines(l,mk);return c(),p}const o=t.createTracker(r),u=i.repeat(Math.max(dk(l,i)+1,3)),a=t.enter("codeFenced"),s=i==="`"?"GraveAccent":"Tilde";let f=o.move(u);if(e.lang){const c=t.enter(`codeFencedLang${s}`);f+=o.move(t.safe(e.lang,{before:f,after:" ",encode:["`"],...o.current()})),c()}if(e.lang&&e.meta){const c=t.enter(`codeFencedMeta${s}`);f+=o.move(" "),f+=o.move(t.safe(e.meta,{before:f,after:`
`,encode:["`"],...o.current()})),c()}return f+=o.move(`
`),l&&(f+=o.move(l+`
`)),f+=o.move(u),a(),f}function mk(e,n,t){return(t?"":"    ")+e}function xs(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function gk(e,n,t,r){const i=xs(t),l=i==='"'?"Quote":"Apostrophe",o=t.enter("definition");let u=t.enter("label");const a=t.createTracker(r);let s=a.move("[");return s+=a.move(t.safe(t.associationId(e),{before:s,after:"]",...a.current()})),s+=a.move("]: "),u(),!e.url||/[\0- \u007F]/.test(e.url)?(u=t.enter("destinationLiteral"),s+=a.move("<"),s+=a.move(t.safe(e.url,{before:s,after:">",...a.current()})),s+=a.move(">")):(u=t.enter("destinationRaw"),s+=a.move(t.safe(e.url,{before:s,after:e.title?" ":`
`,...a.current()}))),u(),e.title&&(u=t.enter(`title${l}`),s+=a.move(" "+i),s+=a.move(t.safe(e.title,{before:s,after:i,...a.current()})),s+=a.move(i),u()),o(),s}function yk(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}ws.attention=kk;ws.peek=xk;function ws(e,n,t,r){const i=t.enter("phrasing"),l=t.containerPhrasing({type:"root",children:[e]},r);return i(),l}function kk(e,n){return{construct:"emphasis",markers:yk(n)==="*"?["*","_"]:["_","*"],sizes:[1]}}function xk(e,n,t){return t.options.emphasis||"*"}function vs(e){return"&#x"+e.toString(16).toUpperCase()+";"}const wk={};function Ss(e,n){const t=wk,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Uh(e,r,i)}function Uh(e,n,t){if(vk(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return vf(e.children,n,t)}return Array.isArray(e)?vf(e,n,t):""}function vf(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=Uh(e[i],n,t);return r.join("")}function vk(e){return!!(e&&typeof e=="object")}function Vh(e,n){let t=!1;return cn(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,la}),!!((!e.depth||e.depth<3)&&Ss(e)&&(n.options.setext||t))}function Sk(e,n,t,r){const i=Math.max(Math.min(6,e.depth||1),1),l=t.createTracker(r);if(Vh(e,t)){const c=t.enter("headingSetext"),p=t.enter("phrasing"),d=t.containerPhrasing(e,{...l.current(),before:`
`,after:`
`});return p(),c(),d+`
`+(i===1?"=":"-").repeat(d.length-(Math.max(d.lastIndexOf("\r"),d.lastIndexOf(`
`))+1))}const o="#".repeat(i),u=t.enter("headingAtx"),a=t.enter("phrasing");l.move(o+" ");let s=t.containerPhrasing(e,{before:"# ",after:`
`,...l.current()});const f=s.charCodeAt(0);return(f===9||f===32)&&(s=vs(f)+s.slice(1)),s=s?o+" "+s:o,t.options.closeAtx&&(s+=" "+o),a(),u(),s}Wh.peek=Ck;function Wh(e){return e.value||""}function Ck(){return"<"}qh.peek=_k;function qh(e,n,t,r){const i=xs(t),l=i==='"'?"Quote":"Apostrophe",o=t.enter("image");let u=t.enter("label");const a=t.createTracker(r);let s=a.move("![");return s+=a.move(t.safe(e.alt,{before:s,after:"]",...a.current()})),s+=a.move("]("),u(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(u=t.enter("destinationLiteral"),s+=a.move("<"),s+=a.move(t.safe(e.url,{before:s,after:">",...a.current()})),s+=a.move(">")):(u=t.enter("destinationRaw"),s+=a.move(t.safe(e.url,{before:s,after:e.title?" ":")",...a.current()}))),u(),e.title&&(u=t.enter(`title${l}`),s+=a.move(" "+i),s+=a.move(t.safe(e.title,{before:s,after:i,...a.current()})),s+=a.move(i),u()),s+=a.move(")"),o(),s}function _k(){return"!"}Qh.peek=Ek;function Qh(e,n,t,r){const i=e.referenceType,l=t.enter("imageReference");let o=t.enter("label");const u=t.createTracker(r);let a=u.move("![");const s=t.safe(e.alt,{before:a,after:"]",...u.current()});a+=u.move(s+"]["),o();const f=t.stack;t.stack=f.filter(function(p){return p!=="phrasing"}),o=t.enter("reference");const c=t.safe(t.associationId(e),{before:a,after:"]",...u.current()});return o(),t.stack=f,l(),i==="full"||!s||s!==c?a+=u.move(c+"]"):i==="shortcut"?a=a.slice(0,-1):a+=u.move("]"),a}function Ek(){return"!"}Yh.peek=Tk;function Yh(e,n,t){let r=e.value||"",i="`",l=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^\n\r ]/.test(r)&&(/^[\n\r ]/.test(r)&&/[\n\r ]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++l<t.unsafe.length;){const o=t.unsafe[l],u=t.compilePattern(o);if(!o.atBreak)continue;let a;for(;a=u.exec(r);){let s=a.index;r.charCodeAt(s)===10&&r.charCodeAt(s-1)===13&&s--,r=r.slice(0,s)+" "+r.slice(a.index+1)}}return i+r+i}function Tk(){return"`"}function Xh(e,n){const t=Ss(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][+\-.a-z]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Gh.peek=Pk;function Gh(e,n,t,r){const i=xs(t),l=i==='"'?"Quote":"Apostrophe",o=t.createTracker(r);if(Xh(e,t)){const f=t.stack;t.stack=f.filter(function(d){return d!=="phrasing"});const c=t.enter("autolink");let p=o.move("<");return p+=o.move(t.containerPhrasing(e,{before:p,after:">",...o.current()})),p+=o.move(">"),c(),t.stack=f,p}const u=t.enter("link");let a=t.enter("label"),s=o.move("[");return s+=o.move(t.containerPhrasing(e,{before:s,after:"](",...o.current()})),s+=o.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=t.enter("destinationLiteral"),s+=o.move("<"),s+=o.move(t.safe(e.url,{before:s,after:">",...o.current()})),s+=o.move(">")):(a=t.enter("destinationRaw"),s+=o.move(t.safe(e.url,{before:s,after:e.title?" ":")",...o.current()}))),a(),e.title&&(a=t.enter(`title${l}`),s+=o.move(" "+i),s+=o.move(t.safe(e.title,{before:s,after:i,...o.current()})),s+=o.move(i),a()),s+=o.move(")"),u(),s}function Pk(e,n,t){return Xh(e,t)?"<":"["}Kh.peek=Mk;function Kh(e,n,t,r){const i=e.referenceType,l=t.enter("linkReference");let o=t.enter("label");const u=t.createTracker(r);let a=u.move("[");const s=t.containerPhrasing(e,{before:a,after:"]",...u.current()});a+=u.move(s+"]["),o();const f=t.stack;t.stack=f.filter(function(p){return p!=="phrasing"}),o=t.enter("reference");const c=t.safe(t.associationId(e),{before:a,after:"]",...u.current()});return o(),t.stack=f,l(),i==="full"||!s||s!==c?a+=u.move(c+"]"):i==="shortcut"?a=a.slice(0,-1):a+=u.move("]"),a}function Mk(){return"["}function Cs(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function Ak(e){const n=Cs(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function Ik(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function Zh(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function Lk(e,n,t,r){const i=t.enter("list"),l=t.bulletCurrent;let o=e.ordered?Ik(t):Cs(t);const u=e.ordered?o==="."?")":".":Ak(t);let a=n&&t.bulletLastUsed?o===t.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&f&&(!f.children||!f.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(a=!0),Zh(t)===o&&f){let c=-1;for(;++c<e.children.length;){const p=e.children[c];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){a=!0;break}}}}a&&(o=u),t.bulletCurrent=o;const s=t.containerFlow(e,r);return t.bulletLastUsed=o,t.bulletCurrent=l,i(),s}function zk(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function Nk(e,n,t,r){const i=zk(t);let l=t.bulletCurrent||Cs(t);n&&n.type==="list"&&n.ordered&&(l=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+l);let o=l.length+1;(i==="tab"||i==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(o=Math.ceil(o/4)*4);const u=t.createTracker(r);u.move(l+" ".repeat(o-l.length)),u.shift(o);const a=t.enter("listItem"),s=t.indentLines(t.containerFlow(e,u.current()),f);return a(),s;function f(c,p,d){return p?(d?"":" ".repeat(o))+c:(d?l:l+" ".repeat(o-l.length))+c}}function Dk(e,n,t,r){const i=t.enter("paragraph"),l=t.enter("phrasing"),o=t.containerPhrasing(e,r);return l(),i(),o}function bk(e,n,t,r){if(!e.children.some(function(u){return jh(u)}))return t.containerFlow(e,r);const l=t.enter("phrasing"),o=t.containerPhrasing(e,r);return l(),o}function Rk(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}_s.attention=Fk;_s.peek=Ok;function _s(e,n,t,r){const i=t.enter("phrasing"),l=t.containerPhrasing({type:"root",children:[e]},r);return i(),l}function Fk(e,n){return{construct:"strong",markers:Rk(n)==="*"?["*","_"]:["_","*"],sizes:[2]}}function Ok(e,n,t){return t.options.strong||"*"}function jk(e,n,t,r){const i=n?n.children:[],l=i.indexOf(e);return t.safe(e.value,{...r,afterNode:i[l+1],beforeNode:i[l-1]})}function $k(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function Bk(e,n,t){const r=(Zh(t)+(t.options.ruleSpaces?" ":"")).repeat($k(t));return t.options.ruleSpaces?r.slice(0,-1):r}const Es={blockquote:ck,break:wf,code:hk,definition:gk,emphasis:ws,hardBreak:wf,heading:Sk,html:Wh,image:qh,imageReference:Qh,inlineCode:Yh,link:Gh,linkReference:Kh,list:Lk,listItem:Nk,paragraph:Dk,root:bk,strong:_s,text:jk,thematicBreak:Bk},Pe=ht(/[A-Za-z]/),Me=ht(/[\dA-Za-z]/),Hk=ht(/[#-'*+\--9=?A-Z^-~]/);function Ol(e){return e!==null&&(e<32||e===127)}const ca=ht(/\d/),Uk=ht(/[\dA-Fa-f]/),Jh=ht(/[!-/:-@[-`{-~]/);function O(e){return e!==null&&e<-2}function ne(e){return e!==null&&(e<0||e===32)}function V(e){return e===-2||e===-1||e===32}const po=ht(new RegExp("\\p{P}|\\p{S}","u")),Lt=ht(/\s/);function ht(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}const em=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],fa=["pre","script","style","textarea"];function da(e){if(e.charCodeAt(0)!==60)return;const n=e.charCodeAt(1);if(n===33){const u=e.charCodeAt(2);return u===45?2:u===91?5:Pe(u)?4:void 0}if(n===63)return 3;const t=n===47,r=t?2:1;let i=r,l=e.charCodeAt(i);if(!Pe(l))return;for(;l===45||Me(l);)l=e.charCodeAt(++i);const o=e.slice(r,i).toLowerCase();return!t&&l!==47&&fa.includes(o)?1:em.includes(o)?6:7}const Vk=[Wk];function Wk(e,n,t,r){if(n.type==="code"&&sa(n,r)&&(e.type==="list"||e.type===n.type&&sa(e,r)))return!1;if("spread"in t&&typeof t.spread=="boolean"){if(e.type==="paragraph"&&(e.type===n.type||n.type==="definition"||n.type==="heading"&&Vh(n,r)))return;if(e.type==="html"){const i=da(e.value);if(i===void 0||i===6||i===7)return 1}if(e.type==="paragraph"&&n.type==="html"){const i=da(n.value);if(i===void 0||i===7)return 1}return t.spread?1:0}}const mt=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"],nm=[{character:"	",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",before:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"\r",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:`
`,inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:"\r",before:"[\\r\\n]",inConstruct:"phrasing"},{character:"\r",after:"\\r",inConstruct:"phrasing"},{character:`
`,before:"\\n",inConstruct:"phrasing"},{character:`
`,after:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",after:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",before:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"!",after:"\\[",inConstruct:"phrasing",notInConstruct:mt},{character:'"',inConstruct:"titleQuote"},{atBreak:!0,character:"#"},{character:"#",inConstruct:"headingAtx",after:`(?:[\r
]|$)`},{character:"&",after:"[#A-Za-z]",inConstruct:"phrasing"},{character:"'",inConstruct:"titleApostrophe"},{character:"(",inConstruct:"destinationRaw"},{before:"\\]",character:"(",inConstruct:"phrasing",notInConstruct:mt},{atBreak:!0,before:"\\d+",character:")"},{character:")",inConstruct:"destinationRaw"},{atBreak:!0,character:"*",after:`(?:[ 	\r
*])`},{character:"*",inConstruct:"phrasing",notInConstruct:mt},{atBreak:!0,character:"+",after:`(?:[ 	\r
])`},{atBreak:!0,character:"-",after:`(?:[ 	\r
-])`},{atBreak:!0,before:"\\d+",character:".",after:`(?:[ 	\r
]|$)`},{atBreak:!0,character:"<",after:"[!/?A-Za-z]"},{character:"<",after:"[!/?A-Za-z]",inConstruct:"phrasing",notInConstruct:mt},{character:"<",inConstruct:"destinationLiteral"},{atBreak:!0,character:"="},{atBreak:!0,character:">"},{character:">",inConstruct:"destinationLiteral"},{atBreak:!0,character:"["},{character:"[",inConstruct:"phrasing",notInConstruct:mt},{character:"[",inConstruct:["label","reference"]},{character:"\\",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"]",inConstruct:["label","reference"]},{atBreak:!0,character:"_"},{character:"_",inConstruct:"phrasing",notInConstruct:mt},{atBreak:!0,character:"`"},{character:"`",inConstruct:["codeFencedLangGraveAccent","codeFencedMetaGraveAccent"]},{character:"`",inConstruct:"phrasing",notInConstruct:mt},{atBreak:!0,character:"~"},{character:"<",inConstruct:"autolink"},{character:">",inConstruct:"autolink"},{character:"",inConstruct:"autolink"}];let Sf=-1;for(;++Sf<33;)nm.push({character:String.fromCharCode(Sf),inConstruct:"autolink"});const Cf=document.createElement("i");function Ts(e){const n="&"+e+";";Cf.innerHTML=n;const t=Cf.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function tm(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}const qk=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function rm(e){return e.replace(qk,Qk)}function Qk(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),l=i===120||i===88;return tm(t.slice(l?2:1),l?16:10)}return Ts(t)||e}function Yk(e){return e.label||!e.identifier?e.label||"":rm(e.identifier)}function Xk(e){if(!e._compiled){const n=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=new RegExp((e.beforeNode?"^":n?"("+n+")":"")+(/[$()*+.?[\\\]^{|}]/.test(e.character)?"\\":"")+e.character+(e.afterNode?"$":e.after?"(?:"+e.after+")":""),e.unicode?"gu":"g")}return e._compiled}function Ln(e){if(e===null||ne(e)||Lt(e))return 1;if(po(e))return 2}function jl(e){const n=e.codePointAt(0);return n===void 0?"":String.fromCodePoint(n)}function Xr(e){const n=e.codePointAt(e.length-2);return n!==void 0&&n>65535?e.slice(-2):e.slice(-1)}function _f(e,n,t){const r=Ln(e),i=Ln(n);return r===void 0?i===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}const Gk=new Map([["*",!1],["_",!0]]);function Kk(e,n,t){const r=new Set;for(const l of e){const o=t.get(l);if(o&&l.attention&&n.some(u=>u.attention===l.attention))for(const u of o.tokens)r.add(u.attention)}const i=[];for(const l of e)l.attention&&r.delete(l.attention)&&i.push(l.attention);return i.reverse(),i}function im(e,n,t){const r=[],i=new Map,l=new Map;let o=0;for(;o<e.length;){if(!e[o].attention){o++;continue}const u=e[o].value.charAt(0),a=Gk.get(u);let s=o+1;for(;s<e.length&&e[s].attention&&e[s].value.charAt(0)===u;)s++;const f=o?e[o-1].value:n,c=Ln(f.charCodeAt(f.length-1)),p=Ln((s<e.length?e[s].value:t).charCodeAt(0)),d=!p||p===2&&!!c,g=!c||c===2&&!!p,w={tokens:e.slice(o,s),markers:[],start:0,end:0,open:a?d&&(!!c||!g):d,close:a?g&&(!!p||!d):g,split:a!==void 0};for(const T of w.tokens){i.set(T,[...w.tokens]),l.set(T,w);let h=T.value.length;for(;h--;)w.markers.push(T)}w.end=w.markers.length,r.push(w),o=s}for(ex(r,i),o=-1;++o<e.length;){const u=i.get(e[o]);if(u)return{attention:Kk(e,u,l),index:o}}}function Zk(e,n,t){return pa(lm(e,n,t),t.before,t.after)}function Hi(e,n){const t=e[n?0:e.length-1];if(!t||t.attention)return;const r=n?jl(t.value):Xr(t.value),i=vs(r.codePointAt(0));t.value=n?i+t.value.slice(r.length):t.value.slice(0,t.value.length-r.length)+i}function Jk(e,n,t,r,i){for(const l of t.attention){const o=n.get(l)||l.sequences[0];for(const u of l.sequences){if(u===o)continue;const a=new Map(n);a.set(l,u);const s=Ps(e,a,r,i),f=im(s,r,i);if(!f||f.index>t.index)return{chosen:a,mistake:f,tokens:s}}}}function ex(e,n){let t=0;for(;t<e.length;){const r=e[t],i=r.tokens[0].value.charAt(0),l=r.end-r.start;let o=r.close&&l?t:0;for(;o--;){const u=e[o],a=u.end-u.start;if(u.tokens[0].value.charAt(0)===i&&u.open&&a&&(r.split?!((u.close||r.open)&&l%3)||(a+l)%3:a===u.markers.length&&a===l)){const s=r.split?a>1&&l>1?2:1:l,f=u.markers.slice(u.end-s,u.end),c=r.markers.slice(r.start,r.start+s),p=f[0],d=c[0];if(p===f[s-1]&&p.value.length===s&&d===c[s-1]&&d.value.length===s&&p.attention===d.attention)n.delete(p),n.delete(d);else{const g=[...new Set([...f,...c])];for(const w of g){const T=n.get(w);T&&T.push(...g)}}u.end-=s,r.start+=s;break}}(o===-1||r.start===r.end)&&t++}}function nx(e,n,t){if(n.length===0)throw new Error("Cannot serialize `"+e+"` as attention without markers, expected one or more markers");if(t.length===0)throw new Error("Cannot serialize `"+e+"` as attention without sizes, expected one or more sizes");for(const i of t)if(!Number.isSafeInteger(i)||i<1)throw new Error("Cannot serialize `"+e+"` as attention with `"+i+"` as size, expected positive integer");const r=[];for(const i of n){if(i.length!==1)throw new Error("Cannot serialize `"+e+"` as attention with `"+i+"` as marker, expected a single ascii character");if(!Jh(i.charCodeAt(0)))throw new Error("Cannot serialize `"+e+"` as attention with `"+i+"` as marker, expected ascii punctuation");for(const l of t)r.push(i.repeat(l))}return r}function lm(e,n,t){const r=n.indexStack,i=e.children||[],l=[];let o=-1,u=t.before;r.push(-1);let a=n.createTracker(t);for(;++o<i.length;){const s=i[o];let f;if(r[r.length-1]=o,o+1<i.length){let d=n.handle.handlers[i[o+1].type];d&&d.peek&&(d=d.peek),f=d?jl(d(i[o+1],e,n,{before:"",after:"",...a.current()})):""}else f=t.after;const c=l[l.length-1];typeof c=="string"&&(u==="\r"||u===`
`)&&s.type==="html"&&da(s.value)!==7&&(l[l.length-1]=c.replace(/(\r?\n|\r)$/," "),u=" ",a=n.createTracker(t),a.move(pa(l,t.before,t.after)));const p=n.handle.handlers[s.type];if(p&&p.attention){const{construct:d,markers:g,sizes:w}=p.attention(s,n),T=nx(s.type,g,w),h=T[0],m=n.enter(d);a.move(h);const y=lm(s,n,{...a.current(),before:h,after:h});a.move(pa(y,h,h)),a.move(h),m(),l.push({children:y,sequences:T}),u=h.charAt(h.length-1)}else{const d=n.handle(s,e,n,{...a.current(),after:f,before:u});if(!d)continue;a.move(d),l.push(d),u=Xr(d)}}return r.pop(),l}function Ps(e,n,t,r){const i=[];let l,o=Xr(t),u=-1;for(;++u<e.length;){const a=e[u];if(typeof a=="string"){const y={value:a,attention:void 0};l&&l===jl(a)&&Hi([y],!0),l=void 0,i.push(y),y.value&&(o=Xr(y.value));continue}const s=n.get(a)||a.sequences[0],f=s.charAt(0),c=e[u+1],p=o,d=jl(c===void 0?r:typeof c=="string"?c:n.get(c)||c.sequences[0]),g=Ps(a.children,n,s,s),w=g.length>0?g[0].value:"",T=_f(p.charCodeAt(p.length-1),w.charCodeAt(0),f);T.inside&&Hi(g,!0);const h=g.length>0?Xr(g[g.length-1].value):"",m=_f(d.charCodeAt(0),h.charCodeAt(h.length-1),f);m.inside&&Hi(g,!1),T.outside&&p!==`
`&&p!=="\r"&&Hi(i,!1),m.outside&&(l=d),i.push({value:s,attention:a},...g,{value:s,attention:a}),o=s.charAt(s.length-1)}return i}function pa(e,n,t){let r=new Map;const i=Ps(e,r,n,t);let l=i,o=im(l,n,t);for(;o;){const a=Jk(e,r,o,n,t);if(!a){l=i;break}r=a.chosen,l=a.tokens,o=a.mistake}let u="";for(const a of l)u+=a.value;return u}function tx(e,n,t){const r=n.indexStack,i=e.children||[],l=n.createTracker(t),o=[];let u=-1;for(r.push(-1);++u<i.length;){const a=i[u];r[r.length-1]=u,o.push(l.move(n.handle(a,e,n,{before:`
`,after:`
`,...l.current()}))),a.type!=="list"&&(n.bulletLastUsed=void 0),u<i.length-1&&o.push(l.move(rx(a,i[u+1],e,n)))}return r.pop(),o.join("")}function rx(e,n,t,r){let i=r.join.length;for(;i--;){const l=r.join[i](e,n,t,r);if(l===!0||l===1)break;if(typeof l=="number")return`
`.repeat(1+l);if(l===!1)return`

<!---->

`}return`

`}const ix=/\r?\n|\r/g;function lx(e,n){const t=[];let r=0,i=0,l;for(;l=ix.exec(e);)o(e.slice(r,l.index)),t.push(l[0]),r=l.index+l[0].length,i++;return o(e.slice(r)),t.join("");function o(u){t.push(n(u,i,!u))}}const Wo={}.hasOwnProperty;function ox(e,n,t){const r=(t.before||"")+(n||"")+(t.after||""),i=[],l=[],o={},u=e.stack.includes("autolink"),a=t.before?t.before.length:0,s=r.length-(t.after?t.after.length:0);let f=-1;for(;++f<e.unsafe.length;){const d=e.unsafe[f];if(!Hh(e.stack,d)||!Ef(d.beforeNode,t.beforeNode)||!Ef(d.afterNode,t.afterNode))continue;const g=e.compilePattern(d),w=d.beforeNode?a:0,T=r.slice(w,d.afterNode?s:void 0);let h;for(;h=g.exec(T);){const m="before"in d||!!d.atBreak,y="after"in d,C=w+h.index+(m?h[1].length:0);Wo.call(o,C)?(o[C].before&&!m&&(o[C].before=!1),o[C].after&&!y&&(o[C].after=!1)):(i.push(C),o[C]={before:m,after:y})}}i.sort(ux);let c=a;for(f=-1;++f<i.length;){const d=i[f];if(!(d<c||d>=s)){if(r.charAt(d)==="_"&&d>0&&Ln(r.charCodeAt(d-1))===void 0&&!Wo.call(o,d-1)&&!(d-1===a&&/[*_]/.test(r.charAt(a-1)))){let g=d+1;for(;g<s&&r.charAt(g)==="_";)g++;const w=g-d-1;if(i[f+w]===g-1&&g<r.length&&Ln(r.charCodeAt(g))===void 0&&!Wo.call(o,g)&&!(g===s-1&&/[*_]/.test(r.charAt(s)))){f+=w;continue}}if(!(d+1<s&&i[f+1]===d+1&&o[d].after&&!o[d+1].before&&!o[d+1].after||i[f-1]===d-1&&o[d].before&&!o[d-1].before&&!o[d-1].after)){if(c!==d){const g=r.slice(c,d);l.push(u?g:Tf(g,"\\"))}c=d,u?(l.push("%"+r.charCodeAt(d).toString(16).toUpperCase().padStart(2,"0")),c++):/[!-/:-@[-`{-~]/.test(r.charAt(d))&&(!t.encode||!t.encode.includes(r.charAt(d)))?l.push("\\"):(l.push(vs(r.charCodeAt(d))),c++)}}}const p=r.slice(c,s);return l.push(u?p:Tf(p,t.after)),l.join("")}function Ef(e,n){return e?n?typeof e=="string"?e===n.type:e.includes(n.type):!1:!0}function ux(e,n){return e-n}function Tf(e,n){const t=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],l=e+n;let o=-1,u=0,a;for(;a=t.exec(l);)r.push(a.index);for(;++o<r.length;)u!==r[o]&&i.push(e.slice(u,r[o])),i.push("\\"),u=r[o];return i.push(e.slice(u)),i.join("")}function ax(e){const n=e||{},t=n.now||{};let r=n.lineShift||0,i=t.line||1,l=t.column||1;return{move:a,current:o,shift:u};function o(){return{now:{line:i,column:l},lineShift:r}}function u(s){r+=s}function a(s){const f=s||"",c=f.split(/\r?\n|\r/g),p=c[c.length-1];return i+=c.length-1,l=c.length===1?l+p.length:1+p.length+r,f}}function sx(e,n){const t=n||{},r={associationId:Yk,bulletCurrent:void 0,bulletLastUsed:void 0,containerPhrasing:px,containerFlow:hx,createTracker:ax,compilePattern:Xk,enter:l,handlers:{...Es},handle:void 0,indentLines:lx,indexStack:[],join:[...Vk],options:{},safe:mx,stack:[],unsafe:[...nm]};Bh(r,t),r.options.tightDefinitions&&r.join.push(dx),r.handle=$h("type",{invalid:cx,unknown:fx,handlers:r.handlers});let i=r.handle(jh(e)?{type:"root",children:[e]}:e,void 0,r,{before:`
`,after:`
`,now:{line:1,column:1},lineShift:0});return i&&i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i;function l(o){return r.stack.push(o),u;function u(){r.stack.pop()}}}function cx(e){throw new Error("Cannot handle value `"+e+"`, expected node")}function fx(e){const n=e;throw new Error("Cannot handle unknown node `"+n.type+"`")}function dx(e,n){if(e.type==="definition"&&e.type===n.type)return 0}function px(e,n){return Zk(e,this,n)}function hx(e,n){return tx(e,this,n)}function mx(e,n){return ox(this,e,n)}function gx(e){const n=this;n.compiler=t;function t(r){return sx(r,{...n.data("settings"),...e,extensions:n.data("toMarkdownExtensions")||[]})}}function Pf(e){if(e)throw e}var fl=Object.prototype.hasOwnProperty,om=Object.prototype.toString,Mf=Object.defineProperty,Af=Object.getOwnPropertyDescriptor,If=function(n){return typeof Array.isArray=="function"?Array.isArray(n):om.call(n)==="[object Array]"},Lf=function(n){if(!n||om.call(n)!=="[object Object]")return!1;var t=fl.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&fl.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||fl.call(n,i)},zf=function(n,t){Mf&&t.name==="__proto__"?Mf(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},Nf=function(n,t){if(t==="__proto__")if(fl.call(n,t)){if(Af)return Af(n,t).value}else return;return n[t]},yx=function e(){var n,t,r,i,l,o,u=arguments[0],a=1,s=arguments.length,f=!1;for(typeof u=="boolean"&&(f=u,u=arguments[1]||{},a=2),(u==null||typeof u!="object"&&typeof u!="function")&&(u={});a<s;++a)if(n=arguments[a],n!=null)for(t in n)r=Nf(u,t),i=Nf(n,t),u!==i&&(f&&i&&(Lf(i)||(l=If(i)))?(l?(l=!1,o=r&&If(r)?r:[]):o=r&&Lf(r)?r:{},zf(u,{name:t,newValue:e(f,o,i)})):typeof i<"u"&&zf(u,{name:t,newValue:i}));return u};const qo=fd(yx);function ha(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function kx(){const e=[],n={run:t,use:r};return n;function t(...i){let l=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);u(null,...i);function u(a,...s){const f=e[++l];let c=-1;if(a){o(a);return}for(;++c<i.length;)(s[c]===null||s[c]===void 0)&&(s[c]=i[c]);i=s,f?xx(f,u)(...s):o(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function xx(e,n){let t;return r;function r(...o){const u=e.length>o.length;let a;u&&o.push(i);try{a=e.apply(this,o)}catch(s){const f=s;if(u&&t)throw f;return i(f)}u||(a&&a.then&&typeof a.then=="function"?a.then(l,i):a instanceof Error?i(a):l(a))}function i(o,...u){t||(t=!0,n(o,...u))}function l(o){i(null,o)}}function Gr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Df(e.position):"start"in e||"end"in e?Df(e):"line"in e||"column"in e?ma(e):""}function ma(e){return bf(e&&e.line)+":"+bf(e&&e.column)}function Df(e){return ma(e&&e.start)+"-"+ma(e&&e.end)}function bf(e){return e&&typeof e=="number"?e:1}class Qe extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",l={},o=!1;if(t&&("line"in t&&"column"in t?l={place:t}:"start"in t&&"end"in t?l={place:t}:"type"in t?l={ancestors:[t],place:t.position}:l={...t}),typeof n=="string"?i=n:!l.cause&&n&&(o=!0,i=n.message,l.cause=n),!l.ruleId&&!l.source&&typeof r=="string"){const a=r.indexOf(":");a===-1?l.ruleId=r:(l.source=r.slice(0,a),l.ruleId=r.slice(a+1))}if(!l.place&&l.ancestors&&l.ancestors){const a=l.ancestors[l.ancestors.length-1];a&&(l.place=a.position)}const u=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=u?u.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=u?u.line:void 0,this.name=Gr(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=o&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Qe.prototype.file="";Qe.prototype.name="";Qe.prototype.reason="";Qe.prototype.message="";Qe.prototype.stack="";Qe.prototype.column=void 0;Qe.prototype.line=void 0;Qe.prototype.ancestors=void 0;Qe.prototype.cause=void 0;Qe.prototype.fatal=void 0;Qe.prototype.place=void 0;Qe.prototype.ruleId=void 0;Qe.prototype.source=void 0;const Pn={basename:wx,dirname:vx,extname:Sx,join:Cx,sep:"/"};function wx(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');vi(e);let t=0,r=-1,i=e.length,l;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let o=-1,u=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else o<0&&(l=!0,o=i+1),u>-1&&(e.codePointAt(i)===n.codePointAt(u--)?u<0&&(r=i):(u=-1,r=o));return t===r?r=o:r<0&&(r=e.length),e.slice(t,r)}function vx(e){if(vi(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function Sx(e){vi(e);let n=e.length,t=-1,r=0,i=-1,l=0,o;for(;n--;){const u=e.codePointAt(n);if(u===47){if(o){r=n+1;break}continue}t<0&&(o=!0,t=n+1),u===46?i<0?i=n:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||t<0||l===0||l===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function Cx(...e){let n=-1,t;for(;++n<e.length;)vi(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":_x(t)}function _x(e){vi(e);const n=e.codePointAt(0)===47;let t=Ex(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function Ex(e,n){let t="",r=0,i=-1,l=0,o=-1,u,a;for(;++o<=e.length;){if(o<e.length)u=e.codePointAt(o);else{if(u===47)break;u=47}if(u===47){if(!(i===o-1||l===1))if(i!==o-1&&l===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(a=t.lastIndexOf("/"),a!==t.length-1){a<0?(t="",r=0):(t=t.slice(0,a),r=t.length-1-t.lastIndexOf("/")),i=o,l=0;continue}}else if(t.length>0){t="",r=0,i=o,l=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,o):t=e.slice(i+1,o),r=o-i-1;i=o,l=0}else u===46&&l>-1?l++:l=-1}return t}function vi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Tx={cwd:Px};function Px(){return"/"}function ga(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Mx(e){if(typeof e=="string")e=new URL(e);else if(!ga(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return Ax(e)}function Ax(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const Qo=["history","path","basename","stem","extname","dirname"];class Ix{constructor(n){let t;n?ga(n)?t={path:n}:typeof n=="string"||Lx(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":Tx.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Qo.length;){const l=Qo[r];l in t&&t[l]!==void 0&&t[l]!==null&&(this[l]=l==="history"?[...t[l]]:t[l])}let i;for(i in t)Qo.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?Pn.basename(this.path):void 0}set basename(n){Xo(n,"basename"),Yo(n,"basename"),this.path=Pn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?Pn.dirname(this.path):void 0}set dirname(n){Rf(this.basename,"dirname"),this.path=Pn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?Pn.extname(this.path):void 0}set extname(n){if(Yo(n,"extname"),Rf(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Pn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){ga(n)&&(n=Mx(n)),Xo(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?Pn.basename(this.path,this.extname):void 0}set stem(n){Xo(n,"stem"),Yo(n,"stem"),this.path=Pn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new Qe(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Yo(e,n){if(e&&e.includes(Pn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+Pn.sep+"`")}function Xo(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function Rf(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function Lx(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const zx=function(e){const r=this.constructor.prototype,i=r[e],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l},Nx={}.hasOwnProperty;class Ms extends zx{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=kx()}copy(){const n=new Ms;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(qo(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Zo("data",this.frozen),this.namespace[n]=t,this):Nx.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Zo("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Ui(n),r=this.parser||this.Parser;return Go("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),Go("process",this.parser||this.Parser),Ko("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(l,o){const u=Ui(n),a=r.parse(u);r.run(a,u,function(f,c,p){if(f||!c||!p)return s(f);const d=c,g=r.stringify(d,p);bx(g)?p.value=g:p.result=g,s(f,p)});function s(f,c){f||!c?o(f):l?l(c):t(void 0,c)}}}processSync(n){let t=!1,r;return this.freeze(),Go("processSync",this.parser||this.Parser),Ko("processSync",this.compiler||this.Compiler),this.process(n,i),Of("processSync","process",t),r;function i(l,o){t=!0,Pf(l),r=o}}run(n,t,r){Ff(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?l(void 0,r):new Promise(l);function l(o,u){const a=Ui(t);i.run(n,a,s);function s(f,c,p){const d=c||n;f?u(f):o?o(d):r(void 0,d,p)}}}runSync(n,t){let r=!1,i;return this.run(n,t,l),Of("runSync","run",r),i;function l(o,u){Pf(o),i=u,r=!0}}stringify(n,t){this.freeze();const r=Ui(t),i=this.compiler||this.Compiler;return Ko("stringify",i),Ff(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(Zo("use",this.frozen),n!=null)if(typeof n=="function")a(n,t);else if(typeof n=="object")Array.isArray(n)?u(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function l(s){if(typeof s=="function")a(s,[]);else if(typeof s=="object")if(Array.isArray(s)){const[f,...c]=s;a(f,c)}else o(s);else throw new TypeError("Expected usable value, not `"+s+"`")}function o(s){if(!("plugins"in s)&&!("settings"in s))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");u(s.plugins),s.settings&&(i.settings=qo(!0,i.settings,s.settings))}function u(s){let f=-1;if(s!=null)if(Array.isArray(s))for(;++f<s.length;){const c=s[f];l(c)}else throw new TypeError("Expected a list of plugins, not `"+s+"`")}function a(s,f){let c=-1,p=-1;for(;++c<r.length;)if(r[c][0]===s){p=c;break}if(p===-1)r.push([s,...f]);else if(f.length>0){let[d,...g]=f;const w=r[p][1];ha(w)&&ha(d)&&(d=qo(!0,w,d)),r[p]=[s,d,...g]}}}}const um=new Ms().freeze();function Go(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ko(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Zo(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Ff(e){if(!ha(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Of(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Ui(e){return Dx(e)?e:new Ix(e)}function Dx(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function bx(e){return typeof e=="string"||Rx(e)}function Rx(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}function $l(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(n);for(;i!==-1;)r++,i=t.indexOf(n,i+n.length);return r}function Fx(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Ox(e,n,t){const i=uo((t||{}).ignore||[]),l=jx(n);let o=-1;for(;++o<l.length;)bh(e,"text",u);function u(s,f){let c=-1,p;for(;++c<f.length;){const d=f[c],g=p?p.children:void 0;if(i(d,g?g.indexOf(d):void 0,p))return;p=d}if(p)return a(s,f)}function a(s,f){const c=f[f.length-1],p=l[o][0],d=l[o][1];let g=0;const T=c.children.indexOf(s);let h=!1,m=[];p.lastIndex=0;let y=p.exec(s.value);for(;y;){const _=y.index,v={index:y.index,input:y.input,stack:[...f,s]};let P=d(...y,v);if(typeof P=="string"&&(P=P.length>0?{type:"text",value:P}:void 0),P===!1)p.lastIndex=_+1;else{if(g!==_&&C({type:"text",value:s.value.slice(g,_)}),Array.isArray(P))for(const A of P)C(A);else P&&C(P);g=_+y[0].length,h=!0}if(!p.global)break;y=p.exec(s.value)}return h?(g<s.value.length&&C({type:"text",value:s.value.slice(g)}),c.children.splice(T,1,...m)):m=[s],T+m.length;function C(_){const v=m[m.length-1];v&&v.type==="text"&&_.type==="text"?v.value+=_.value:m.push(_)}}}function jx(e){if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=[],t=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<t.length;){const i=t[r];n.push([$x(i[0]),Bx(i[1])])}return n}function $x(e){return typeof e=="string"?new RegExp(Fx(e),"g"):e}function Bx(e){return typeof e=="function"?e:function(){return e}}const Jo="phrasing",eu=["autolink","link","image","label"];function Hx(){return{transforms:[Xx],enter:{literalAutolink:Vx,literalAutolinkEmail:nu,literalAutolinkHttp:nu,literalAutolinkWww:nu},exit:{literalAutolink:Yx,literalAutolinkEmail:Qx,literalAutolinkHttp:Wx,literalAutolinkWww:qx}}}function Ux(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Jo,notInConstruct:eu},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Jo,notInConstruct:eu},{character:":",before:"[ps]",after:"\\/",inConstruct:Jo,notInConstruct:eu}]}}function Vx(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function nu(e){this.config.enter.autolinkProtocol.call(this,e)}function Wx(e){this.config.exit.autolinkProtocol.call(this,e)}function qx(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function Qx(e){this.config.exit.autolinkEmail.call(this,e)}function Yx(e){this.exit(e)}function Xx(e){Ox(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Gx],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Kx]],{ignore:["link","linkReference"]})}function Gx(e,n,t,r,i){let l="";if(!am(i)||(/^w/i.test(n)&&(t=n+t,n="",l="http://"),!Zx(t)))return!1;const o=Jx(t+r);if(!o[0])return!1;const u={type:"link",title:null,url:l+n+o[0],children:[{type:"text",value:n+o[0]}]};return o[1]?[u,{type:"text",value:o[1]}]:u}function Kx(e,n,t,r){return!am(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function Zx(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function Jx(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],r=t.indexOf(")");const i=$l(e,"(");let l=$l(e,")");for(;r!==-1&&i>l;)e+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),l++;return[e,t]}function am(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||Lt(t)||po(t))&&(!n||t!==47)}function xn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}sm.peek=aw;function ew(){this.buffer()}function nw(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function tw(){this.buffer()}function rw(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function iw(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=xn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function lw(e){this.exit(e)}function ow(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=xn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function uw(e){this.exit(e)}function aw(){return"["}function sm(e,n,t,r){const i=t.createTracker(r);let l=i.move("[^");const o=t.enter("footnoteReference"),u=t.enter("reference");return l+=i.move(t.safe(t.associationId(e),{after:"]",before:l})),u(),o(),l+=i.move("]"),l}function sw(){return{enter:{gfmFootnoteCallString:ew,gfmFootnoteCall:nw,gfmFootnoteDefinitionLabelString:tw,gfmFootnoteDefinition:rw},exit:{gfmFootnoteCallString:iw,gfmFootnoteCall:lw,gfmFootnoteDefinitionLabelString:ow,gfmFootnoteDefinition:uw}}}function cw(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:sm},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,l,o){const u=l.createTracker(o);let a=u.move("[^");const s=l.enter("footnoteDefinition"),f=l.enter("label");return a+=u.move(l.safe(l.associationId(r),{before:a,after:"]"})),f(),a+=u.move("]:"),r.children&&r.children.length>0&&(u.shift(4),a+=u.move((n?`
`:" ")+l.indentLines(l.containerFlow(r,u.current()),n?cm:fw))),s(),a}}function fw(e,n,t){return n===0?e:cm(e,n,t)}function cm(e,n,t){return(t?"":"    ")+e}const dw=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];As.attention=yw;As.peek=kw;function pw(){return{canContainEols:["delete"],enter:{strikethrough:mw},exit:{strikethrough:gw}}}function hw(){return{handlers:{delete:As},unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:dw}]}}function mw(e){this.enter({type:"delete",children:[],position:void 0},e)}function gw(e){this.exit(e)}function As(e,n,t,r){const i=t.createTracker(r),l=t.stack.includes("strikethrough")?"~":"~~",o=t.enter("strikethrough");let u=i.move(l);return u+=t.containerPhrasing(e,{...i.current(),before:u,after:"~"}),u+=i.move(l),o(),u}function yw(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function kw(){return"~"}function xw(e){return e.length}function ww(e,n){const t=n||{},r=(t.align||[]).concat(),i=t.stringLength||xw,l=[],o=[],u=[],a=[];let s=0,f=-1;for(;++f<e.length;){const w=[],T=[];let h=-1;for(e[f].length>s&&(s=e[f].length);++h<e[f].length;){const m=vw(e[f][h]);if(t.alignDelimiters!==!1){const y=i(m);T[h]=y,(a[h]===void 0||y>a[h])&&(a[h]=y)}w.push(m)}o[f]=w,u[f]=T}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<s;)l[c]=jf(r[c]);else{const w=jf(r);for(;++c<s;)l[c]=w}c=-1;const p=[],d=[];for(;++c<s;){const w=l[c];let T="",h="";w===99?(T=":",h=":"):w===108?T=":":w===114&&(h=":");let m=t.alignDelimiters===!1?1:Math.max(1,a[c]-T.length-h.length);const y=T+"-".repeat(m)+h;t.alignDelimiters!==!1&&(m=T.length+m+h.length,m>a[c]&&(a[c]=m),d[c]=m),p[c]=y}o.splice(1,0,p),u.splice(1,0,d),f=-1;const g=[];for(;++f<o.length;){const w=o[f],T=u[f];c=-1;const h=[];for(;++c<s;){const m=w[c]||"";let y="",C="";if(t.alignDelimiters!==!1){const _=a[c]-(T[c]||0),v=l[c];v===114?y=" ".repeat(_):v===99?_%2?(y=" ".repeat(_/2+.5),C=" ".repeat(_/2-.5)):(y=" ".repeat(_/2),C=y):C=" ".repeat(_)}t.delimiterStart!==!1&&!c&&h.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&m==="")&&(t.delimiterStart!==!1||c)&&h.push(" "),t.alignDelimiters!==!1&&h.push(y),h.push(m),t.alignDelimiters!==!1&&h.push(C),t.padding!==!1&&h.push(" "),(t.delimiterEnd!==!1||c!==s-1)&&h.push("|")}g.push(t.delimiterEnd===!1?h.join("").replace(/ +$/,""):h.join(""))}return g.join(`
`)}function vw(e){return e==null?"":String(e)}function jf(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function Sw(){return{enter:{table:Cw,tableData:$f,tableHeader:$f,tableRow:Ew},exit:{codeText:Tw,table:_w,tableData:tu,tableHeader:tu,tableRow:tu}}}function Cw(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function _w(e){this.exit(e),this.data.inTable=void 0}function Ew(e){this.enter({type:"tableRow",children:[]},e)}function tu(e){this.exit(e)}function $f(e){this.enter({type:"tableCell",children:[]},e)}function Tw(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,Pw));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function Pw(e,n){return n==="|"?n:e}function Mw(e){const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,i=n.stringLength,l=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:o,tableCell:a,tableRow:u}};function o(d,g,w,T){return s(f(d,w,T),d.align)}function u(d,g,w,T){const h=c(d,w,T),m=s([h]);return m.slice(0,m.indexOf(`
`))}function a(d,g,w,T){const h=w.enter("tableCell"),m=w.enter("phrasing"),y=w.containerPhrasing(d,{...T,before:l,after:l});return m(),h(),y}function s(d,g){return ww(d,{align:g,alignDelimiters:r,padding:t,stringLength:i})}function f(d,g,w){const T=d.children;let h=-1;const m=[],y=g.enter("table");for(;++h<T.length;)m[h]=c(T[h],g,w);return y(),m}function c(d,g,w){const T=d.children;let h=-1;const m=[],y=g.enter("tableRow");for(;++h<T.length;)m[h]=a(T[h],d,g,w);return y(),m}function p(d,g,w){let T=Es.inlineCode(d,g,w);return w.stack.includes("tableCell")&&(T=T.replace(/\|/g,"\\$&")),T}}function Aw(){return{exit:{taskListCheckValueChecked:Bf,taskListCheckValueUnchecked:Bf,paragraph:Lw}}}function Iw(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:zw}}}function Bf(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function Lw(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=n.children;let l=-1,o;for(;++l<i.length;){const u=i[l];if(u.type==="paragraph"){o=u;break}}o===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function zw(e,n,t,r){const i=e.children[0],l=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",u=t.createTracker(r);l&&u.move(o);let a=Es.listItem(e,n,t,{...r,...u.current()});return l&&(a=a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,s)),a;function s(f){return f+o}}function Nw(){return[Hx(),sw(),pw(),Sw(),Aw()]}function Dw(e){return{extensions:[Ux(),cw(e),hw(),Mw(e),Iw()]}}function wn(e,n,t,r){const i=e.length;let l=0,o;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(n,t),e.splice(...o);else for(t&&e.splice(n,t);l<r.length;)o=r.slice(l,l+1e4),o.unshift(n,0),e.splice(...o),l+=1e4,n+=1e4}function on(e,n){return e.length>0?(wn(e,e.length,0,n),e):n}const Hf={}.hasOwnProperty;function fm(e){const n={};let t=-1;for(;++t<e.length;)bw(n,e[t]);return n}function bw(e,n){let t;for(t in n){const i=(Hf.call(e,t)?e[t]:void 0)||(e[t]={}),l=n[t];let o;if(l)for(o in l){Hf.call(i,o)||(i[o]=[]);const u=l[o];Rw(i[o],Array.isArray(u)?u:u?[u]:[])}}}function Rw(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);wn(e,0,0,r)}const Fw={tokenize:Uw,partial:!0},dm={tokenize:Vw,partial:!0},pm={tokenize:Ww,partial:!0},hm={tokenize:qw,partial:!0},Ow={tokenize:Qw,partial:!0},mm={name:"wwwAutolink",tokenize:Bw,previous:ym},gm={name:"protocolAutolink",tokenize:Hw,previous:km},Wn={name:"emailAutolink",tokenize:$w,previous:xm},zn={};function jw(){return{text:zn}}let gt=48;for(;gt<123;)zn[gt]=Wn,gt++,gt===58?gt=65:gt===91&&(gt=97);zn[43]=Wn;zn[45]=Wn;zn[46]=Wn;zn[95]=Wn;zn[72]=[Wn,gm];zn[104]=[Wn,gm];zn[87]=[Wn,mm];zn[119]=[Wn,mm];function $w(e,n,t){const r=this;let i,l;return o;function o(c){return!ya(c)||!xm.call(r,r.previous)||Is(r.events)?t(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),u(c))}function u(c){return ya(c)?(e.consume(c),u):c===64?(e.consume(c),a):t(c)}function a(c){return c===46?e.check(Ow,f,s)(c):c===45||c===95||Me(c)?(l=!0,e.consume(c),a):f(c)}function s(c){return e.consume(c),i=!0,a}function f(c){return l&&i&&Pe(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(c)):t(c)}}function Bw(e,n,t){const r=this;return i;function i(o){return o!==87&&o!==119||!ym.call(r,r.previous)||Is(r.events)?t(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Fw,e.attempt(dm,e.attempt(pm,l),t),t)(o))}function l(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(o)}}function Hw(e,n,t){const r=this;let i="",l=!1;return o;function o(c){return(c===72||c===104)&&km.call(r,r.previous)&&!Is(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),u):t(c)}function u(c){if(Pe(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),u;if(c===58){const p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(c),a}return t(c)}function a(c){return c===47?(e.consume(c),l?s:(l=!0,a)):t(c)}function s(c){return c===null||Ol(c)||ne(c)||Lt(c)||po(c)?t(c):e.attempt(dm,e.attempt(pm,f),t)(c)}function f(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(c)}}function Uw(e,n,t){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),l):t(o)}function l(o){return o===null?t(o):n(o)}}function Vw(e,n,t){let r,i,l;return o;function o(s){return s===46||s===95?e.check(hm,a,u)(s):s===null||ne(s)||Lt(s)||s!==45&&po(s)?a(s):(l=!0,e.consume(s),o)}function u(s){return s===95?r=!0:(i=r,r=void 0),e.consume(s),o}function a(s){return i||r||!l?t(s):n(s)}}function Ww(e,n){let t=0,r=0;return i;function i(o){return o===40?(t++,e.consume(o),i):o===41&&r<t?l(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(hm,n,l)(o):o===null||ne(o)||Lt(o)?n(o):(e.consume(o),i)}function l(o){return o===41&&r++,e.consume(o),i}}function qw(e,n,t){return r;function r(u){return u===33||u===34||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===63||u===95||u===126?(e.consume(u),r):u===38?(e.consume(u),l):u===93?(e.consume(u),i):u===60||u===null||ne(u)||Lt(u)?n(u):t(u)}function i(u){return u===null||u===40||u===91||ne(u)||Lt(u)?n(u):r(u)}function l(u){return Pe(u)?o(u):t(u)}function o(u){return u===59?(e.consume(u),r):Pe(u)?(e.consume(u),o):t(u)}}function Qw(e,n,t){return r;function r(l){return e.consume(l),i}function i(l){return Me(l)?t(l):n(l)}}function ym(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ne(e)}function km(e){return!Pe(e)}function xm(e){return!(e===47||ya(e))}function ya(e){return e===43||e===45||e===46||e===95||Me(e)}function Is(e){let n=e.length,t=!1;for(;n--;){const r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}function gr(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const l=e.charCodeAt(t);let o="";if(l===37&&Me(e.charCodeAt(t+1))&&Me(e.charCodeAt(t+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(o=String.fromCharCode(l));else if(l>55295&&l<57344){const u=e.charCodeAt(t+1);l<56320&&u>56319&&u<57344?(o=String.fromCharCode(l,u),i=1):o="�"}else o=String.fromCharCode(l);o&&(n.push(e.slice(r,t),encodeURIComponent(o)),r=t+i+1,o=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function ho(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(n=l(n,t),r.push(l))}return n}const ka={name:"attention",resolveAll:Yw,tokenize:Xw};function Yw(e,n){let t=-1,r;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){let i=t;for(;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&n.sliceSerialize(e[i][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[i][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;const l=e[i][1].end.offset-e[i][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1,o={...e[i][1].end},u={...e[t][1].start};Uf(o,-l),Uf(u,l);const a={type:l>1?"strongSequence":"emphasisSequence",start:o,end:{...e[i][1].end}},s={type:l>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:u},f={type:l>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[t][1].start}},c={type:l>1?"strong":"emphasis",start:{...a.start},end:{...s.end}};e[i][1].end={...a.start},e[t][1].start={...s.end},r=[],e[i][1].end.offset-e[i][1].start.offset&&(r=on(r,[["enter",e[i][1],n],["exit",e[i][1],n]])),r=on(r,[["enter",c,n],["enter",a,n],["exit",a,n],["enter",f,n]]),r=on(r,ho(n.parser.constructs.insideSpan.null,e.slice(i+1,t),n)),r=on(r,[["exit",f,n],["enter",s,n],["exit",s,n],["exit",c,n]]);let p=0;e[t][1].end.offset-e[t][1].start.offset&&(p=2,r=on(r,[["enter",e[t][1],n],["exit",e[t][1],n]])),wn(e,i-1,t-i+3,r),t=i+r.length-p-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function Xw(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Ln(r);let l;return o;function o(a){return l=a,e.enter("attentionSequence"),u(a)}function u(a){if(a===l)return e.consume(a),u;const s=e.exit("attentionSequence"),f=Ln(a),c=!f||f===2&&i||t.includes(a)&&a!==42&&a!==95,p=!i||i===2&&f||t.includes(r)&&r!==42&&r!==95;return s._open=!!(l===42?c:c&&(i||!p)),s._close=!!(l===42?p:p&&(f||!c)),n(a)}}function Uf(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const Gw={name:"autolink",tokenize:Kw};function Kw(e,n,t){let r=0;return i;function i(d){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(d){return Pe(d)?(e.consume(d),o):d===64?t(d):s(d)}function o(d){return d===43||d===45||d===46||Me(d)?(r=1,u(d)):s(d)}function u(d){return d===58?(e.consume(d),r=0,a):(d===43||d===45||d===46||Me(d))&&r++<32?(e.consume(d),u):(r=0,s(d))}function a(d){return d===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),n):d===null||d===32||d===60||Ol(d)?t(d):(e.consume(d),a)}function s(d){return d===64?(e.consume(d),f):Hk(d)?(e.consume(d),s):t(d)}function f(d){return Me(d)?c(d):t(d)}function c(d){return d===46?(e.consume(d),r=0,f):d===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),n):p(d)}function p(d){if((d===45||Me(d))&&r++<63){const g=d===45?p:c;return e.consume(d),g}return t(d)}}function K(e,n,t,r){const i=r?r-1:1/0;let l=0;return o;function o(a){return V(a)?(e.enter(t),u(a)):n(a)}function u(a){return V(a)&&l++<i?(e.consume(a),u):(e.exit(t),n(a))}}function wm(e,n,t,r,i,l){let o=0;return u;function u(f){return V(f)?(e.enter(r),a(f)):s(f)}function a(f){return V(f)&&o<l?(e.consume(f),o++,a):(e.exit(r),s(f))}function s(f){return o>=i?n(f):t(f)}}const Si={partial:!0,tokenize:Zw};function Zw(e,n,t){return r;function r(l){return V(l)?K(e,i,"linePrefix")(l):i(l)}function i(l){return l===null||O(l)?n(l):t(l)}}const vm={continuation:{tokenize:ev},exit:nv,name:"blockQuote",tokenize:Jw};function Jw(e,n,t){const r=this;return i;function i(o){if(o===62){const u=r.containerState;return u.open||(e.enter("blockQuote",{_container:!0}),u.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),l}return t(o)}function l(o){return V(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function ev(e,n,t){const r=this;return i;function i(o){return V(o)?K(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):l(o)}function l(o){return e.attempt(vm,n,t)(o)}}function nv(e){e.exit("blockQuote")}const Sm={name:"characterEscape",tokenize:tv};function tv(e,n,t){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return Jh(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(l)}}const Cm={name:"characterReference",tokenize:rv};function rv(e,n,t){const r=this;let i=0,l,o;return u;function u(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),a}function a(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),l=31,o=Me,f(c))}function s(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,o=Uk,f):(e.enter("characterReferenceValue"),l=7,o=ca,f(c))}function f(c){if(c===59&&i){const p=e.exit("characterReferenceValue");return o===Me&&!Ts(r.sliceSerialize(p))?t(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(c)&&i++<l?(e.consume(c),f):t(c)}}const xa={partial:!0,tokenize:iv};function iv(e,n,t){const r=this;return i;function i(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l)}function l(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}const Vf={concrete:!0,name:"codeFenced",tokenize:lv};function lv(e,n,t){const r=this,i={partial:!0,tokenize:_};let l=0,o=0,u;return a;function a(v){return s(v)}function s(v){const P=r.events[r.events.length-1];return l=P&&P[1].type==="linePrefix"?P[2].sliceSerialize(P[1],!0).length:0,u=v,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(v)}function f(v){return v===u?(o++,e.consume(v),f):o<3?t(v):(e.exit("codeFencedFenceSequence"),V(v)?K(e,c,"whitespace")(v):c(v))}function c(v){return v===null||O(v)?(e.exit("codeFencedFence"),r.interrupt?n(v):e.check(xa,w,C)(v)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(v))}function p(v){return v===null||O(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(v)):V(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),K(e,d,"whitespace")(v)):v===96&&v===u?t(v):(e.consume(v),p)}function d(v){return v===null||O(v)?c(v):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(v))}function g(v){return v===null||O(v)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(v)):v===96&&v===u?t(v):(e.consume(v),g)}function w(v){return e.attempt(i,C,T)(v)}function T(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),h}function h(v){return l>0&&V(v)?K(e,m,"linePrefix",l+1)(v):m(v)}function m(v){return v===null||O(v)?e.check(xa,w,C)(v):(e.enter("codeFlowValue"),y(v))}function y(v){return v===null||O(v)?(e.exit("codeFlowValue"),m(v)):(e.consume(v),y)}function C(v){return e.exit("codeFenced"),n(v)}function _(v,P,A){let B=0;return S;function S(Q){return v.enter("lineEnding"),v.consume(Q),v.exit("lineEnding"),z}function z(Q){return v.enter("codeFencedFence"),V(Q)?K(v,R,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Q):R(Q)}function R(Q){return Q===u?(v.enter("codeFencedFenceSequence"),Y(Q)):A(Q)}function Y(Q){return Q===u?(B++,v.consume(Q),Y):B>=o?(v.exit("codeFencedFenceSequence"),V(Q)?K(v,te,"whitespace")(Q):te(Q)):A(Q)}function te(Q){return Q===null||O(Q)?(v.exit("codeFencedFence"),P(Q)):A(Q)}}}const ru={name:"codeIndented",tokenize:uv},ov={partial:!0,tokenize:av};function uv(e,n,t){return r;function r(u){return e.enter("codeIndented"),wm(e,i,t,"linePrefix",4,4)(u)}function i(u){return u===null?o(u):O(u)?e.attempt(ov,i,o)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||O(u)?(e.exit("codeFlowValue"),i(u)):(e.consume(u),l)}function o(u){return e.exit("codeIndented"),n(u)}}function av(e,n,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):O(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):wm(e,n,l,"linePrefix",4,4)(o)}function l(o){return O(o)?i(o):t(o)}}const sv={name:"codeText",previous:fv,resolve:cv,tokenize:dv};function cv(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function fv(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function dv(e,n,t){let r=0,i,l;return o;function o(c){return e.enter("codeText"),e.enter("codeTextSequence"),u(c)}function u(c){return c===96?(e.consume(c),r++,u):(e.exit("codeTextSequence"),a(c))}function a(c){return c===null?t(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),a):c===96?(l=e.enter("codeTextSequence"),i=0,f(c)):O(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),a):(e.enter("codeTextData"),s(c))}function s(c){return c===null||c===32||c===96||O(c)?(e.exit("codeTextData"),a(c)):(e.consume(c),s)}function f(c){return c===96?(e.consume(c),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(c)):(l.type="codeTextData",s(c))}}class pv{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Lr(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Lr(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Lr(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Lr(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Lr(this.left,t.reverse())}}}function Lr(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function _m(e){const n={};let t=-1,r,i,l,o,u,a,s;const f=new pv(e);for(;++t<f.length;){for(;t in n;)t=n[t];if(r=f.get(t),t&&r[1].type==="chunkFlow"&&f.get(t-1)[1].type==="listItemPrefix"&&(a=r[1]._tokenizer.events,l=0,l<a.length&&a[l][1].type==="lineEndingBlank"&&(l+=2),l<a.length&&a[l][1].type==="content"))for(;++l<a.length&&a[l][1].type!=="content";)a[l][1].type==="chunkText"&&(a[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,hv(f,t)),t=n[t],s=!0);else if(r[1]._container){for(l=t,i=void 0;l--;)if(o=f.get(l),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=l);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},u=f.slice(i,t),u.unshift(r),f.splice(i,t-i+1,u))}}return wn(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!s}function hv(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const l=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const u=o.events,a=[],s={};let f,c,p=-1,d=t,g=0,w=0;const T=[w];for(;d;){for(;e.get(++i)[1]!==d;);l.push(i),d._tokenizer||(f=r.sliceStream(d),d.next||f.push(null),c&&o.defineSkip(d.start),d._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(f),d._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=d,d=d.next}for(d=t;++p<u.length;)u[p][0]==="exit"&&u[p-1][0]==="enter"&&u[p][1].type===u[p-1][1].type&&u[p][1].start.line!==u[p][1].end.line&&(w=p+1,T.push(w),d._tokenizer=void 0,d.previous=void 0,d=d.next);for(o.events=[],d?(d._tokenizer=void 0,d.previous=void 0):T.pop(),p=T.length;p--;){const h=u.slice(T[p],T[p+1]),m=l.pop();a.push([m,m+h.length-1]),e.splice(m,2,h)}for(a.reverse(),p=-1;++p<a.length;)s[g+a[p][0]]=g+a[p][1],g+=a[p][1]-a[p][0]-1;return s}const mv={resolve:yv,tokenize:kv},gv={partial:!0,tokenize:xv};function yv(e){return _m(e),e}function kv(e,n){let t;return r;function r(u){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(u)}function i(u){return u===null?l(u):O(u)?e.check(gv,o,l)(u):(e.consume(u),i)}function l(u){return e.exit("chunkContent"),e.exit("content"),n(u)}function o(u){return e.consume(u),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function xv(e,n,t){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),K(e,l,"linePrefix")}function l(o){if(o===null||O(o))return t(o);const u=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?n(o):e.interrupt(r.parser.constructs.flow,t,n)(o)}}function Em(e,n,t,r,i,l,o,u,a){const s=a||Number.POSITIVE_INFINITY;let f=0;return c;function c(h){return h===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(h),e.exit(l),p):h===null||h===32||h===41||Ol(h)?t(h):(e.enter(r),e.enter(o),e.enter(u),e.enter("chunkString",{contentType:"string"}),w(h))}function p(h){return h===62?(e.enter(l),e.consume(h),e.exit(l),e.exit(i),e.exit(r),n):(e.enter(u),e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===62?(e.exit("chunkString"),e.exit(u),p(h)):h===null||h===60||O(h)?t(h):(e.consume(h),h===92?g:d)}function g(h){return h===60||h===62||h===92?(e.consume(h),d):d(h)}function w(h){return!f&&(h===null||h===41||ne(h))?(e.exit("chunkString"),e.exit(u),e.exit(o),e.exit(r),n(h)):f<s&&h===40?(e.consume(h),f++,w):h===41?(e.consume(h),f--,w):h===null||h===32||h===40||Ol(h)?t(h):(e.consume(h),h===92?T:w)}function T(h){return h===40||h===41||h===92?(e.consume(h),w):w(h)}}function Tm(e,n,t,r,i,l){const o=this;let u=0,a;return s;function s(d){return e.enter(r),e.enter(i),e.consume(d),e.exit(i),e.enter(l),f}function f(d){return u>999||d===null||d===91||d===93&&!a||d===94&&!u&&"_hiddenFootnoteSupport"in o.parser.constructs?t(d):d===93?(e.exit(l),e.enter(i),e.consume(d),e.exit(i),e.exit(r),n):O(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),c(d))}function c(d){return d===null||d===91||d===93||O(d)||u++>999?(e.exit("chunkString"),f(d)):(e.consume(d),a||(a=!V(d)),d===92?p:c)}function p(d){return d===91||d===92||d===93?(e.consume(d),u++,c):c(d)}}function Pm(e,n,t,r,i,l){let o;return u;function u(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),o=p===40?41:p,a):t(p)}function a(p){return p===o?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),n):(e.enter(l),s(p))}function s(p){return p===o?(e.exit(l),a(o)):p===null?t(p):O(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),K(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===o||p===null||O(p)?(e.exit("chunkString"),s(p)):(e.consume(p),p===92?c:f)}function c(p){return p===o||p===92?(e.consume(p),f):f(p)}}function Kr(e,n){let t;return r;function r(i){return O(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):V(i)?K(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const wv={name:"definition",tokenize:Sv},vv={partial:!0,tokenize:Cv};function Sv(e,n,t){const r=this;let i;return l;function l(d){return e.enter("definition"),o(d)}function o(d){return Tm.call(r,e,u,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(d)}function u(d){return i=xn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),d===58?(e.enter("definitionMarker"),e.consume(d),e.exit("definitionMarker"),a):t(d)}function a(d){return ne(d)?Kr(e,s)(d):s(d)}function s(d){return Em(e,f,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(d)}function f(d){return e.attempt(vv,c,c)(d)}function c(d){return V(d)?K(e,p,"whitespace")(d):p(d)}function p(d){return d===null||O(d)?(e.exit("definition"),r.parser.defined.push(i),n(d)):t(d)}}function Cv(e,n,t){return r;function r(u){return ne(u)?Kr(e,i)(u):t(u)}function i(u){return Pm(e,l,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(u)}function l(u){return V(u)?K(e,o,"whitespace")(u):o(u)}function o(u){return u===null||O(u)?n(u):t(u)}}const _v={name:"hardBreakEscape",tokenize:Ev};function Ev(e,n,t){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),i}function i(l){return O(l)?(e.exit("hardBreakEscape"),n(l)):t(l)}}const Tv={name:"headingAtx",resolve:Pv,tokenize:Mv};function Pv(e,n){let t=e.length-2,r=3;if(e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r){const i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},l={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"};wn(e,r,t-r+1,[["enter",i,n],["enter",l,n],["exit",l,n],["exit",i,n]])}return e}function Mv(e,n,t){let r=0;return i;function i(f){return e.enter("atxHeading"),l(f)}function l(f){return e.enter("atxHeadingSequence"),o(f)}function o(f){return f===35&&r++<6?(e.consume(f),o):f===null||ne(f)?(e.exit("atxHeadingSequence"),u(f)):t(f)}function u(f){return f===35?(e.enter("atxHeadingSequence"),a(f)):f===null||O(f)?(e.exit("atxHeading"),n(f)):V(f)?K(e,u,"whitespace")(f):(e.enter("atxHeadingText"),s(f))}function a(f){return f===35?(e.consume(f),a):(e.exit("atxHeadingSequence"),u(f))}function s(f){return f===null||f===35||ne(f)?(e.exit("atxHeadingText"),u(f)):(e.consume(f),s)}}const Av={concrete:!0,name:"htmlFlow",resolveTo:Lv,tokenize:zv},Iv={partial:!0,tokenize:Nv};function Lv(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function zv(e,n,t){const r=this;let i,l,o,u,a;return s;function s(x){return f(x)}function f(x){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(x),c}function c(x){return x===33?(e.consume(x),p):x===47?(e.consume(x),l=!0,w):x===63?(e.consume(x),i=3,r.interrupt?n:k):Pe(x)?(e.consume(x),o=String.fromCharCode(x),T):t(x)}function p(x){return x===45?(e.consume(x),i=2,d):x===91?(e.consume(x),i=5,u=0,g):Pe(x)?(e.consume(x),i=4,r.interrupt?n:k):t(x)}function d(x){return x===45?(e.consume(x),r.interrupt?n:k):t(x)}function g(x){const ke="CDATA[";return x===ke.charCodeAt(u++)?(e.consume(x),u===ke.length?r.interrupt?n:R:g):t(x)}function w(x){return Pe(x)?(e.consume(x),o=String.fromCharCode(x),T):t(x)}function T(x){if(x===null||x===47||x===62||ne(x)){const ke=x===47,Sn=o.toLowerCase();return!ke&&!l&&fa.includes(Sn)?(i=1,r.interrupt?n(x):R(x)):em.includes(o.toLowerCase())?(i=6,ke?(e.consume(x),h):r.interrupt?n(x):R(x)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(x):l?m(x):y(x))}return x===45||Me(x)?(e.consume(x),o+=String.fromCharCode(x),T):t(x)}function h(x){return x===62?(e.consume(x),r.interrupt?n:R):t(x)}function m(x){return V(x)?(e.consume(x),m):S(x)}function y(x){return x===47?(e.consume(x),S):x===58||x===95||Pe(x)?(e.consume(x),C):V(x)?(e.consume(x),y):S(x)}function C(x){return x===45||x===46||x===58||x===95||Me(x)?(e.consume(x),C):_(x)}function _(x){return x===61?(e.consume(x),v):V(x)?(e.consume(x),_):y(x)}function v(x){return x===null||x===60||x===61||x===62||x===96?t(x):x===34||x===39?(e.consume(x),a=x,P):V(x)?(e.consume(x),v):A(x)}function P(x){return x===a?(e.consume(x),a=null,B):x===null||O(x)?t(x):(e.consume(x),P)}function A(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||ne(x)?_(x):(e.consume(x),A)}function B(x){return x===47||x===62||V(x)?y(x):t(x)}function S(x){return x===62?(e.consume(x),z):t(x)}function z(x){return x===null||O(x)?R(x):V(x)?(e.consume(x),z):t(x)}function R(x){return x===45&&i===2?(e.consume(x),me):x===60&&i===1?(e.consume(x),pe):x===62&&i===4?(e.consume(x),X):x===63&&i===3?(e.consume(x),k):x===93&&i===5?(e.consume(x),F):O(x)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Iv,J,Y)(x)):x===null||O(x)?(e.exit("htmlFlowData"),Y(x)):(e.consume(x),R)}function Y(x){return e.check(xa,te,J)(x)}function te(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),Q}function Q(x){return x===null||O(x)?Y(x):(e.enter("htmlFlowData"),R(x))}function me(x){return x===45?(e.consume(x),k):R(x)}function pe(x){return x===47?(e.consume(x),o="",N):R(x)}function N(x){if(x===62){const ke=o.toLowerCase();return fa.includes(ke)?(e.consume(x),X):R(x)}return Pe(x)&&o.length<8?(e.consume(x),o+=String.fromCharCode(x),N):R(x)}function F(x){return x===93?(e.consume(x),k):R(x)}function k(x){return x===62?(e.consume(x),X):x===45&&i===2?(e.consume(x),k):R(x)}function X(x){return x===null||O(x)?(e.exit("htmlFlowData"),J(x)):(e.consume(x),X)}function J(x){return e.exit("htmlFlow"),n(x)}}function Nv(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Si,n,t)}}const Dv={name:"htmlText",tokenize:bv};function bv(e,n,t){const r=this;let i,l,o;return u;function u(k){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(k),a}function a(k){return k===33?(e.consume(k),s):k===47?(e.consume(k),_):k===63?(e.consume(k),y):Pe(k)?(e.consume(k),A):t(k)}function s(k){return k===45?(e.consume(k),f):k===91?(e.consume(k),l=0,g):Pe(k)?(e.consume(k),m):t(k)}function f(k){return k===45?(e.consume(k),d):t(k)}function c(k){return k===null?t(k):k===45?(e.consume(k),p):O(k)?(o=c,pe(k)):(e.consume(k),c)}function p(k){return k===45?(e.consume(k),d):c(k)}function d(k){return k===62?me(k):k===45?p(k):c(k)}function g(k){const X="CDATA[";return k===X.charCodeAt(l++)?(e.consume(k),l===X.length?w:g):t(k)}function w(k){return k===null?t(k):k===93?(e.consume(k),T):O(k)?(o=w,pe(k)):(e.consume(k),w)}function T(k){return k===93?(e.consume(k),h):w(k)}function h(k){return k===62?me(k):k===93?(e.consume(k),h):w(k)}function m(k){return k===null||k===62?me(k):O(k)?(o=m,pe(k)):(e.consume(k),m)}function y(k){return k===null?t(k):k===63?(e.consume(k),C):O(k)?(o=y,pe(k)):(e.consume(k),y)}function C(k){return k===62?me(k):y(k)}function _(k){return Pe(k)?(e.consume(k),v):t(k)}function v(k){return k===45||Me(k)?(e.consume(k),v):P(k)}function P(k){return O(k)?(o=P,pe(k)):V(k)?(e.consume(k),P):me(k)}function A(k){return k===45||Me(k)?(e.consume(k),A):k===47||k===62||ne(k)?B(k):t(k)}function B(k){return k===47?(e.consume(k),me):k===58||k===95||Pe(k)?(e.consume(k),S):O(k)?(o=B,pe(k)):V(k)?(e.consume(k),B):me(k)}function S(k){return k===45||k===46||k===58||k===95||Me(k)?(e.consume(k),S):z(k)}function z(k){return k===61?(e.consume(k),R):O(k)?(o=z,pe(k)):V(k)?(e.consume(k),z):B(k)}function R(k){return k===null||k===60||k===61||k===62||k===96?t(k):k===34||k===39?(e.consume(k),i=k,Y):O(k)?(o=R,pe(k)):V(k)?(e.consume(k),R):(e.consume(k),te)}function Y(k){return k===i?(e.consume(k),i=void 0,Q):k===null?t(k):O(k)?(o=Y,pe(k)):(e.consume(k),Y)}function te(k){return k===null||k===34||k===39||k===60||k===61||k===96?t(k):k===47||k===62||ne(k)?B(k):(e.consume(k),te)}function Q(k){return k===47||k===62||ne(k)?B(k):t(k)}function me(k){return k===62?(e.consume(k),e.exit("htmlTextData"),e.exit("htmlText"),n):t(k)}function pe(k){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),N}function N(k){return V(k)?K(e,F,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):F(k)}function F(k){return e.enter("htmlTextData"),o(k)}}const Ls={name:"labelEnd",resolveAll:jv,resolveTo:$v,tokenize:Bv},Rv={tokenize:Hv},Fv={tokenize:Uv},Ov={tokenize:Vv};function jv(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&wn(e,0,e.length,t),e}function $v(e,n){let t=e.length,r=0,i,l,o;for(;t--;){const f=e[t][1];if(i){if(f.type==="link"||f.type==="labelLink"&&f._inactive)break;e[t][0]==="enter"&&f.type==="labelLink"&&(f._inactive=!0)}else if(l){if(e[t][0]==="enter"&&(f.type==="labelImage"||f.type==="labelLink")&&!f._balanced&&(i=t,f.type!=="labelLink")){r=2;break}}else f.type==="labelEnd"&&(l=t)}const u={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},a={type:"label",start:{...e[i][1].start},end:{...e[l][1].end}},s={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[l-2][1].start}};return o=[["enter",u,n],["enter",a,n]],o=on(o,e.slice(i+1,i+r+3)),o=on(o,[["enter",s,n]]),o=on(o,ho(n.parser.constructs.insideSpan.null,e.slice(i+r+4,l-3),n)),o=on(o,[["exit",s,n],e[l-2],e[l-1],["exit",a,n]]),o=on(o,e.slice(l+1)),o=on(o,[["exit",u,n]]),wn(e,i,e.length,o),e}function Bv(e,n,t){const r=this,i=r._labelStarts;let l,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();l=i[i.length-1]}return u;function u(p){return l?l._inactive?c(p):(o=r.parser.defined.includes(xn(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),a):t(p)}function a(p){return p===40?e.attempt(Rv,f,o?f:c)(p):p===91?e.attempt(Fv,f,o?s:c)(p):o?f(p):c(p)}function s(p){return e.attempt(Ov,f,c)(p)}function f(p){return i.pop(),n(p)}function c(p){return l._balanced=!0,t(p)}}function Hv(e,n,t){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return ne(c)?Kr(e,l)(c):l(c)}function l(c){return c===41?f(c):Em(e,o,u,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return ne(c)?Kr(e,a)(c):f(c)}function u(c){return t(c)}function a(c){return c===34||c===39||c===40?Pm(e,s,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function s(c){return ne(c)?Kr(e,f)(c):f(c)}function f(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),n):t(c)}}function Uv(e,n,t){const r=this;return i;function i(u){return Tm.call(r,e,l,o,"reference","referenceMarker","referenceString")(u)}function l(u){return r.parser.defined.includes(xn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(u):t(u)}function o(u){return t(u)}}function Vv(e,n,t){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),n):t(l)}}const Wv={name:"labelStartImage",resolveAll:Ls.resolveAll,tokenize:qv};function qv(e,n,t){const r=this;let i;return l;function l(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),i=e.exit("labelImage"),u):t(a)}function u(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),n(a))}}const Qv={name:"labelStartLink",resolveAll:Ls.resolveAll,tokenize:Yv};function Yv(e,n,t){const r=this;let i;return l;function l(u){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),i=e.exit("labelLink"),o}function o(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(u):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),n(u))}}const iu={name:"lineEnding",tokenize:Xv};function Xv(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),K(e,n,"linePrefix")}}const dl={name:"thematicBreak",tokenize:Gv};function Gv(e,n,t){let r=0,i;return l;function l(s){return e.enter("thematicBreak"),o(s)}function o(s){return i=s,u(s)}function u(s){return s===i?(e.enter("thematicBreakSequence"),a(s)):r>=3&&(s===null||O(s))?(e.exit("thematicBreak"),n(s)):t(s)}function a(s){return s===i?(e.consume(s),r++,a):(e.exit("thematicBreakSequence"),V(s)?K(e,u,"whitespace")(s):u(s))}}const Be={continuation:{tokenize:e2},exit:t2,name:"list",tokenize:Jv},Kv={partial:!0,tokenize:r2},Zv={partial:!0,tokenize:n2};function Jv(e,n,t){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return u;function u(d){const g=r.containerState.type||(d===42||d===43||d===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||d===r.containerState.marker:ca(d)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),d===42||d===45?e.check(dl,t,s)(d):s(d);if(!r.interrupt||d===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),a(d)}return t(d)}function a(d){return ca(d)&&++o<10?(e.consume(d),a):(!r.interrupt||o<2)&&(r.containerState.marker?d===r.containerState.marker:d===41||d===46)?(e.exit("listItemValue"),s(d)):t(d)}function s(d){return e.enter("listItemMarker"),e.consume(d),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||d,e.check(Si,r.interrupt?t:f,e.attempt(Kv,p,c))}function f(d){return r.containerState.initialBlankLine=!0,l++,p(d)}function c(d){return V(d)?(e.enter("listItemPrefixWhitespace"),e.consume(d),e.exit("listItemPrefixWhitespace"),p):t(d)}function p(d){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(d)}}function e2(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Si,i,l);function i(u){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,K(e,n,"listItemIndent",r.containerState.size+1)(u)}function l(u){return r.containerState.furtherBlankLines||!V(u)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(u)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Zv,n,o)(u))}function o(u){return r.containerState._closeFlow=!0,r.interrupt=void 0,K(e,e.attempt(Be,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u)}}function n2(e,n,t){const r=this;return K(e,i,"listItemIndent",r.containerState.size+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?n(l):t(l)}}function t2(e){e.exit(this.containerState.type)}function r2(e,n,t){const r=this;return K(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const o=r.events[r.events.length-1];return!V(l)&&o&&o[1].type==="listItemPrefixWhitespace"?n(l):t(l)}}let Bl=class{constructor(){this.index=new Map,this.map=[]}add(n,t,r){Wf(this,n,t,r,!1)}addBefore(n,t,r){Wf(this,n,t,r,!0)}consume(n){if(this.map.sort(function(l,o){return l[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const l of i)n.push(l);i=r.pop()}this.map.length=0,this.index.clear()}};function Wf(e,n,t,r,i){if(t===0&&r.length===0)return;const l=e.index.get(n);if(l){l[1]+=t,i?(r.push(...l[2]),l[2]=r):l[2].push(...r);return}const o=[n,t,r];e.map.push(o),e.index.set(n,o)}const qf={name:"setextUnderline",resolveTo:i2,tokenize:l2};function i2(e,n){const t=new Bl;let r=e.length,i,l,o;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){i=r;break}e[r][1].type==="paragraph"&&(l=r)}else e[r][1].type==="content"&&t.add(r,1,[]),!o&&e[r][1].type==="definition"&&(o=r);const u={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[l][1].type="setextHeadingText",o?(t.add(l,0,[["enter",u,n]]),t.add(o+1,0,[["exit",e[i][1],n]]),e[i][1].end={...e[o][1].end}):e[i][1]=u,t.add(e.length,0,[["exit",u,n]]),t.consume(e),e}function l2(e,n,t){const r=this;let i;return l;function l(s){let f=r.events.length,c;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){c=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=s,o(s)):t(s)}function o(s){return e.enter("setextHeadingLineSequence"),u(s)}function u(s){return s===i?(e.consume(s),u):(e.exit("setextHeadingLineSequence"),V(s)?K(e,a,"lineSuffix")(s):a(s))}function a(s){return s===null||O(s)?(e.exit("setextHeadingLine"),n(s)):t(s)}}const o2={tokenize:h2,partial:!0};function u2(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:f2,continuation:{tokenize:d2},exit:p2}},text:{91:{name:"gfmFootnoteCall",tokenize:c2},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:a2,resolveTo:s2}}}}function a2(e,n,t){const r=this;let i=r.events.length;const l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const a=r.events[i][1];if(a.type==="labelImage"){o=a;break}if(a.type==="gfmFootnoteCall"||a.type==="labelLink"||a.type==="label"||a.type==="image"||a.type==="link")break}return u;function u(a){if(!o||!o._balanced)return t(a);const s=xn(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!l.includes(s.slice(1))?t(a):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(a),e.exit("gfmFootnoteCallLabelMarker"),n(a))}}function s2(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},u=[e[t+1],e[t+2],["enter",r,n],e[t+3],e[t+4],["enter",i,n],["exit",i,n],["enter",l,n],["enter",o,n],["exit",o,n],["exit",l,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(t,e.length-t+1,...u),e}function c2(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l=0,o;return u;function u(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),a}function a(c){return c!==94?t(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",s)}function s(c){if(l>999||c===93&&!o||c===null||c===91||ne(c))return t(c);if(c===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return i.includes(xn(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(c)}return ne(c)||(o=!0),l++,e.consume(c),c===92?f:s}function f(c){return c===91||c===92||c===93?(e.consume(c),l++,s):s(c)}}function f2(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,o=0,u;return a;function a(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),s}function s(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):t(g)}function f(g){if(o>999||g===93&&!u||g===null||g===91||ne(g))return t(g);if(g===93){e.exit("chunkString");const w=e.exit("gfmFootnoteDefinitionLabelString");return l=xn(r.sliceSerialize(w)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return ne(g)||(u=!0),o++,e.consume(g),g===92?c:f}function c(g){return g===91||g===92||g===93?(e.consume(g),o++,f):f(g)}function p(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(l)||i.push(l),K(e,d,"gfmFootnoteDefinitionWhitespace")):t(g)}function d(g){return n(g)}}function d2(e,n,t){return e.check(Si,n,e.attempt(o2,n,t))}function p2(e){e.exit("gfmFootnoteDefinition")}function h2(e,n,t){const r=this;return K(e,i,"gfmFootnoteDefinitionIndent",5);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?n(l):t(l)}}function m2(e){let t=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:l,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,u){let a=-1;for(;++a<o.length;)if(o[a][0]==="enter"&&o[a][1].type==="strikethroughSequenceTemporary"&&o[a][1]._close){let s=a;for(;s--;)if(o[s][0]==="exit"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._open&&o[a][1].end.offset-o[a][1].start.offset===o[s][1].end.offset-o[s][1].start.offset){o[a][1].type="strikethroughSequence",o[s][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},o[s][1].start),end:Object.assign({},o[a][1].end)},c={type:"strikethroughText",start:Object.assign({},o[s][1].end),end:Object.assign({},o[a][1].start)},p=[["enter",f,u],["enter",o[s][1],u],["exit",o[s][1],u],["enter",c,u]],d=u.parser.constructs.insideSpan.null;d&&wn(p,p.length,0,ho(d,o.slice(s+1,a),u)),wn(p,p.length,0,[["exit",c,u],["enter",o[a][1],u],["exit",o[a][1],u],["exit",f,u]]),wn(o,s-1,a-s+3,p),a=s+p.length-2;break}}for(a=-1;++a<o.length;)o[a][1].type==="strikethroughSequenceTemporary"&&(o[a][1].type="data");return o}function l(o,u,a){const s=this.previous,f=this.events;let c=0;return p;function p(g){return s===126&&f[f.length-1][1].type!=="characterEscape"?a(g):(o.enter("strikethroughSequenceTemporary"),d(g))}function d(g){const w=Ln(s);if(g===126)return c>1?a(g):(o.consume(g),c++,d);if(c<2&&!t)return a(g);const T=o.exit("strikethroughSequenceTemporary"),h=Ln(g);return T._open=!h||h===2&&!!w,T._close=!w||w===2&&!!h,u(g)}}}class g2{constructor(){this.map=[],this.index=new Map}add(n,t,r){y2(this,n,t,r)}consume(n){if(this.map.sort(function(l,o){return l[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const l of i)n.push(l);i=r.pop()}this.map.length=0,this.index.clear()}}function y2(e,n,t,r){if(t===0&&r.length===0)return;const i=e.index.get(n);if(i){i[1]+=t,i[2].push(...r);return}const l=[n,t,r];e.map.push(l),e.index.set(n,l)}function k2(e,n){let t=!1;const r=[];for(;n<e.length;){const i=e[n];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const l=r.length-1;r[l]=r[l]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return r}function x2(){return{flow:{null:{name:"table",tokenize:w2,resolveAll:v2}}}}function w2(e,n,t){const r=this;let i=0,l=0,o;return u;function u(S){let z=r.events.length-1;for(;z>-1;){const{type:te}=r.events[z][1];if(te==="lineEnding"||te==="linePrefix")z--;else break}const R=z>-1?r.events[z][1].type:null,Y=R==="tableHead"||R==="tableRow"?v:a;return Y===v&&r.parser.lazy[r.now().line]?t(S):Y(S)}function a(S){return e.enter("tableHead"),e.enter("tableRow"),s(S)}function s(S){return S===124||(o=!0,l+=1),f(S)}function f(S){return S===null?t(S):O(S)?l>1?(l=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),d):t(S):V(S)?K(e,f,"whitespace")(S):(l+=1,o&&(o=!1,i+=1),S===124?(e.enter("tableCellDivider"),e.consume(S),e.exit("tableCellDivider"),o=!0,f):(e.enter("data"),c(S)))}function c(S){return S===null||S===124||ne(S)?(e.exit("data"),f(S)):(e.consume(S),S===92?p:c)}function p(S){return S===92||S===124?(e.consume(S),c):c(S)}function d(S){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(S):(e.enter("tableDelimiterRow"),o=!1,V(S)?K(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):g(S))}function g(S){return S===45||S===58?T(S):S===124?(o=!0,e.enter("tableCellDivider"),e.consume(S),e.exit("tableCellDivider"),w):_(S)}function w(S){return V(S)?K(e,T,"whitespace")(S):T(S)}function T(S){return S===58?(l+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(S),e.exit("tableDelimiterMarker"),h):S===45?(l+=1,h(S)):S===null||O(S)?C(S):_(S)}function h(S){return S===45?(e.enter("tableDelimiterFiller"),m(S)):_(S)}function m(S){return S===45?(e.consume(S),m):S===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(S),e.exit("tableDelimiterMarker"),y):(e.exit("tableDelimiterFiller"),y(S))}function y(S){return V(S)?K(e,C,"whitespace")(S):C(S)}function C(S){return S===124?g(S):S===null||O(S)?!o||i!==l?_(S):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(S)):_(S)}function _(S){return t(S)}function v(S){return e.enter("tableRow"),P(S)}function P(S){return S===124?(e.enter("tableCellDivider"),e.consume(S),e.exit("tableCellDivider"),P):S===null||O(S)?(e.exit("tableRow"),n(S)):V(S)?K(e,P,"whitespace")(S):(e.enter("data"),A(S))}function A(S){return S===null||S===124||ne(S)?(e.exit("data"),P(S)):(e.consume(S),S===92?B:A)}function B(S){return S===92||S===124?(e.consume(S),A):A(S)}}function v2(e,n){let t=-1,r=!0,i=0,l=[0,0,0,0],o=[0,0,0,0],u=!1,a=0,s,f,c;const p=new g2;for(;++t<e.length;){const d=e[t],g=d[1];d[0]==="enter"?g.type==="tableHead"?(u=!1,a!==0&&(Qf(p,n,a,s,f),f=void 0,a=0),s={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},p.add(t,0,[["enter",s,n]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,c=void 0,l=[0,0,0,0],o=[0,t+1,0,0],u&&(u=!1,f={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},p.add(t,0,[["enter",f,n]])),i=g.type==="tableDelimiterRow"?2:f?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(l[1]!==0&&(o[0]=o[1],c=Vi(p,n,l,i,void 0,c),l=[0,0,0,0]),o[2]=t)):g.type==="tableCellDivider"&&(r?r=!1:(l[1]!==0&&(o[0]=o[1],c=Vi(p,n,l,i,void 0,c)),l=o,o=[l[1],t,0,0])):g.type==="tableHead"?(u=!0,a=t):g.type==="tableRow"||g.type==="tableDelimiterRow"?(a=t,l[1]!==0?(o[0]=o[1],c=Vi(p,n,l,i,t,c)):o[1]!==0&&(c=Vi(p,n,o,i,t,c)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(o[3]=t)}for(a!==0&&Qf(p,n,a,s,f),p.consume(n.events),t=-1;++t<n.events.length;){const d=n.events[t];d[0]==="enter"&&d[1].type==="table"&&(d[1]._align=k2(n.events,t))}return e}function Vi(e,n,t,r,i,l){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",u="tableContent";t[0]!==0&&(l.end=Object.assign({},$t(n.events,t[0])),e.add(t[0],0,[["exit",l,n]]));const a=$t(n.events,t[1]);if(l={type:o,start:Object.assign({},a),end:Object.assign({},a)},e.add(t[1],0,[["enter",l,n]]),t[2]!==0){const s=$t(n.events,t[2]),f=$t(n.events,t[3]),c={type:u,start:Object.assign({},s),end:Object.assign({},f)};if(e.add(t[2],0,[["enter",c,n]]),r!==2){const p=n.events[t[2]],d=n.events[t[3]];if(p[1].end=Object.assign({},d[1].end),p[1].type="chunkText",p[1].contentType="text",t[3]>t[2]+1){const g=t[2]+1,w=t[3]-t[2]-1;e.add(g,w,[])}}e.add(t[3]+1,0,[["exit",c,n]])}return i!==void 0&&(l.end=Object.assign({},$t(n.events,i)),e.add(i,0,[["exit",l,n]]),l=void 0),l}function Qf(e,n,t,r,i){const l=[],o=$t(n.events,t);i&&(i.end=Object.assign({},o),l.push(["exit",i,n])),r.end=Object.assign({},o),l.push(["exit",r,n]),e.add(t+1,0,l)}function $t(e,n){const t=e[n],r=t[0]==="enter"?"start":"end";return t[1][r]}const S2={name:"tasklistCheck",tokenize:_2};function C2(){return{text:{91:S2}}}function _2(e,n,t){const r=this;return i;function i(a){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(a):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),l)}function l(a){return ne(a)?(e.enter("taskListCheckValueUnchecked"),e.consume(a),e.exit("taskListCheckValueUnchecked"),o):a===88||a===120?(e.enter("taskListCheckValueChecked"),e.consume(a),e.exit("taskListCheckValueChecked"),o):t(a)}function o(a){return a===93?(e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),u):t(a)}function u(a){return O(a)?n(a):V(a)?e.check({tokenize:E2},n,t)(a):t(a)}}function E2(e,n,t){return K(e,r,"whitespace");function r(i){return i===null?t(i):n(i)}}function T2(e){return fm([jw(),u2(),m2(e),x2(),C2()])}const P2={};function Mm(e){const n=this,t=e||P2,r=n.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),l=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(T2(t)),l.push(Nw()),o.push(Dw(t))}function M2(e){const n=JSON.parse(JSON.stringify(e)),t=um().use(Mm).use(()=>r=>(cn(r,"listItem",i=>{var l,o,u;if((l=i==null?void 0:i.data)!=null&&l.diff){const a=((o=i==null?void 0:i.data)==null?void 0:o.diff)==="ins"?"{++listItem++}":"{--listItem--}";i.children||(i.children=[]);const s=(u=i.children)==null?void 0:u[0];(s==null?void 0:s.type)==="paragraph"?s.children&&s.children.unshift({type:"text",value:a}):i.children.unshift({type:"paragraph",children:[{type:"text",value:a}]})}}),r)).use(gx,{handlers:{ins:(r,i,l,o)=>`{++++
${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}
++++}`,del:(r,i,l,o)=>`{----
${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}
----}`,inlineIns:(r,i,l,o)=>`{++++${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}++++}`,inlineDel:(r,i,l,o)=>`{----${(r.children||[]).map(a=>l.handle(a,r,l,o)).join("")}----}`}});return t.stringify(t.runSync(n))}function A2(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function I2(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function L2(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(l.data={meta:n.meta}),e.patch(n,l),l=e.applyData(n,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(n,l),l}function z2(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function N2(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function D2(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=gr(r.toLowerCase()),l=e.footnoteOrder.indexOf(r);let o,u=e.footnoteCounts.get(r);u===void 0?(u=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=l+1,u+=1,e.footnoteCounts.set(r,u);const a={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(u>1?"-"+u:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(n,a);const s={type:"element",tagName:"sup",properties:{},children:[a]};return e.patch(n,s),e.applyData(n,s)}function b2(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function R2(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function Am(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function F2(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Am(e,n);const i={src:gr(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,l),e.applyData(n,l)}function O2(e,n){const t={src:gr(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function j2(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function $2(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Am(e,n);const i={href:gr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,l),e.applyData(n,l)}function B2(e,n){const t={href:gr(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function H2(e,n,t){const r=e.all(n),i=t?U2(t):Im(n),l={},o=[];if(typeof n.checked=="boolean"){const f=r[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let u=-1;for(;++u<r.length;){const f=r[u];(i||u!==0||f.type!=="element"||f.tagName!=="p")&&o.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?o.push(...f.children):o.push(f)}const a=r[r.length-1];a&&(i||a.type!=="element"||a.tagName!=="p")&&o.push({type:"text",value:`
`});const s={type:"element",tagName:"li",properties:l,children:o};return e.patch(n,s),e.applyData(n,s)}function U2(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=Im(t[r])}return n}function Im(e){const n=e.spread;return n??e.children.length>1}function V2(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const l={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,l),e.applyData(n,l)}function W2(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function q2(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function Q2(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Lm=Nm("end"),zm=Nm("start");function Nm(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Y2(e){const n=zm(e),t=Lm(e);if(n&&t)return{start:n,end:t}}function X2(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],o),i.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},u=zm(n.children[1]),a=Lm(n.children[n.children.length-1]);u&&a&&(o.position={start:u,end:a}),i.push(o)}const l={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,l),e.applyData(n,l)}function G2(e,n,t){const r=t?t.children:void 0,l=(r?r.indexOf(n):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,u=o?o.length:n.children.length;let a=-1;const s=[];for(;++a<u;){const c=n.children[a],p={},d=o?o[a]:void 0;d&&(p.align=d);let g={type:"element",tagName:l,properties:p,children:[]};c&&(g.children=e.all(c),e.patch(c,g),g=e.applyData(c,g)),s.push(g)}const f={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(n,f),e.applyData(n,f)}function K2(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Yf=9,Xf=32;function Z2(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const l=[];for(;r;)l.push(Gf(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return l.push(Gf(n.slice(i),i>0,!1)),l.join("")}function Gf(e,n,t){let r=0,i=e.length;if(n){let l=e.codePointAt(r);for(;l===Yf||l===Xf;)r++,l=e.codePointAt(r)}if(t){let l=e.codePointAt(i-1);for(;l===Yf||l===Xf;)i--,l=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function J2(e,n){const t={type:"text",value:Z2(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function eS(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const nS={blockquote:A2,break:I2,code:L2,delete:z2,emphasis:N2,footnoteReference:D2,heading:b2,html:R2,imageReference:F2,image:O2,inlineCode:j2,linkReference:$2,link:B2,listItem:H2,list:V2,paragraph:W2,root:q2,strong:Q2,table:X2,tableCell:K2,tableRow:G2,text:J2,thematicBreak:eS,toml:Wi,yaml:Wi,definition:Wi,footnoteDefinition:Wi};function Wi(){}const Dm=-1,mo=0,Zr=1,Hl=2,zs=3,Ns=4,Ds=5,bs=6,bm=7,Rm=8,{defineProperty:tS}=Object,Fm=typeof self=="object"?self:globalThis,Kf=(e,n)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new Fm[e](n)},rS=(e,n)=>{const t=(i,l)=>(e.set(l,i),i),r=i=>{if(e.has(i))return e.get(i);const[l,o]=n[i];switch(l){case mo:case Dm:return t(o,i);case Zr:{const u=t([],i);for(const a of o)u.push(r(a));return u}case Hl:{const u=t({},i);for(const[a,s]of o){const f=r(a),c=r(s);f==="__proto__"?tS(u,f,{value:c,configurable:!0,enumerable:!0,writable:!0}):u[f]=c}return u}case zs:return t(new Date(o),i);case Ns:{const{source:u,flags:a}=o;return t(new RegExp(u,a),i)}case Ds:{const u=t(new Map,i);for(const[a,s]of o)u.set(r(a),r(s));return u}case bs:{const u=t(new Set,i);for(const a of o)u.add(r(a));return u}case bm:{const{name:u,message:a}=o;return t(typeof Fm[u]=="function"?Kf(u,a):new Error(a),i)}case Rm:return t(BigInt(o),i);case"BigInt":return t(Object(BigInt(o)),i);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:u}=new Uint8Array(o);return t(new DataView(u),o)}case"-0":return-0}return t(Kf(l,o),i)};return r},Zf=e=>rS(new Map,e)(0),xt="",{toString:iS}={},{keys:lS,is:oS}=Object,zr=e=>{const n=typeof e;if(n!=="object"||!e)return[mo,n];const t=iS.call(e).slice(8,-1);switch(t){case"Array":return[Zr,xt];case"Object":return[Hl,xt];case"Date":return[zs,xt];case"RegExp":return[Ns,xt];case"Map":return[Ds,xt];case"Set":return[bs,xt];case"DataView":return[Zr,t]}return t.includes("Array")?[Zr,t]:e instanceof Error?[bm,e.name||"Error"]:[Hl,t]},qi=([e,n])=>e===mo&&(n==="function"||n==="symbol"),uS=(e,n,t,r)=>{const i=(o,u)=>{const a=r.push(o)-1;return t.set(u,a),a},l=o=>{if(t.has(o))return t.get(o);let[u,a]=zr(o);switch(u){case mo:{let f=o;switch(a){case"bigint":u=Rm,f=o.toString();break;case"number":if(!o&&oS(o,-0))return r.push(["-0"])-1;break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+a);f=null;break;case"undefined":return i([Dm],o)}return i([u,f],o)}case Zr:{if(a){let p=o;return a==="DataView"?p=new Uint8Array(o.buffer):a==="ArrayBuffer"&&(p=new Uint8Array(o)),i([a,[...p]],o)}const f=[],c=i([u,f],o);for(const p of o)f.push(l(p));return c}case Hl:{if(a)switch(a){case"BigInt":return i([a,o.toString()],o);case"Boolean":case"Number":case"String":return i([a,o.valueOf()],o)}if(n&&"toJSON"in o)return l(o.toJSON());const f=[],c=i([u,f],o);for(const p of lS(o))(e||!qi(zr(o[p])))&&f.push([l(p),l(o[p])]);return c}case zs:return i([u,isNaN(o.getTime())?xt:o.toISOString()],o);case Ns:{const{source:f,flags:c}=o;return i([u,{source:f,flags:c}],o)}case Ds:{const f=[],c=i([u,f],o);for(const[p,d]of o)(e||!(qi(zr(p))||qi(zr(d))))&&f.push([l(p),l(d)]);return c}case bs:{const f=[],c=i([u,f],o);for(const p of o)(e||!qi(zr(p)))&&f.push(l(p));return c}}const{message:s}=o;return i([u,{name:a,message:s}],o)};return l},Jf=(e,{json:n,lossy:t}={})=>{const r=[];return uS(!(n||t),!!n,new Map,r)(e),r},Ul=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Zf(Jf(e,n)):structuredClone(e):(e,n)=>Zf(Jf(e,n));function aS(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function sS(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function cS(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||aS,r=e.options.footnoteBackLabel||sS,i=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},u=[];let a=-1;for(;++a<e.footnoteOrder.length;){const s=e.footnoteById.get(e.footnoteOrder[a]);if(!s)continue;const f=e.all(s),c=String(s.identifier).toUpperCase(),p=gr(c.toLowerCase());let d=0;const g=[],w=e.footnoteCounts.get(c);for(;w!==void 0&&++d<=w;){g.length>0&&g.push({type:"text",value:" "});let m=typeof t=="string"?t:t(a,d);typeof m=="string"&&(m={type:"text",value:m}),g.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+p+(d>1?"-"+d:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(a,d),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const T=f[f.length-1];if(T&&T.type==="element"&&T.tagName==="p"){const m=T.children[T.children.length-1];m&&m.type==="text"?m.value+=" ":T.children.push({type:"text",value:" "}),T.children.push(...g)}else f.push(...g);const h={type:"element",tagName:"li",properties:{id:n+"fn-"+p},children:e.wrap(f,!0)};e.patch(s,h),u.push(h)}if(u.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...Ul(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(u,!0)},{type:"text",value:`
`}]}}const wa={}.hasOwnProperty,fS={};function dS(e,n){const t=n||fS,r=new Map,i=new Map,l=new Map,o={...nS,...t.handlers},u={all:s,applyData:hS,definitionById:r,footnoteById:i,footnoteCounts:l,footnoteOrder:[],handlers:o,one:a,options:t,patch:pS,wrap:gS};return cn(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?r:i,p=String(f.identifier).toUpperCase();c.has(p)||c.set(p,f)}}),u;function a(f,c){const p=f.type,d=u.handlers[p];if(wa.call(u.handlers,p)&&d)return d(u,f,c);if(u.options.passThrough&&u.options.passThrough.includes(p)){if("children"in f){const{children:w,...T}=f,h=Ul(T);return h.children=u.all(f),h}return Ul(f)}return(u.options.unknownHandler||mS)(u,f,c)}function s(f){const c=[];if("children"in f){const p=f.children;let d=-1;for(;++d<p.length;){const g=u.one(p[d],f);if(g){if(d&&p[d-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=ed(g.value)),!Array.isArray(g)&&g.type==="element")){const w=g.children[0];w&&w.type==="text"&&(w.value=ed(w.value))}Array.isArray(g)?c.push(...g):c.push(g)}}}return c}}function pS(e,n){e.position&&(n.position=Y2(e))}function hS(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,l=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const o="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:o}}t.type==="element"&&l&&Object.assign(t.properties,Ul(l)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function mS(e,n){const t=n.data||{},r="value"in n&&!(wa.call(t,"hProperties")||wa.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function gS(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function ed(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function yS(e,n){const t=dS(e,n),r=t.one(e,void 0),i=cS(t),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&l.children.push({type:"text",value:`
`},i),l}const kS=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];class Ci{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}Ci.prototype.normal={};Ci.prototype.property={};Ci.prototype.space=void 0;function Om(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new Ci(t,r,n)}function va(e){return e.toLowerCase()}class Ye{constructor(n,t){this.attribute=t,this.property=n}}Ye.prototype.attribute="";Ye.prototype.booleanish=!1;Ye.prototype.boolean=!1;Ye.prototype.commaOrSpaceSeparated=!1;Ye.prototype.commaSeparated=!1;Ye.prototype.defined=!1;Ye.prototype.mustUseProperty=!1;Ye.prototype.number=!1;Ye.prototype.overloadedBoolean=!1;Ye.prototype.property="";Ye.prototype.spaceSeparated=!1;Ye.prototype.space=void 0;let xS=0;const j=Dt(),ge=Dt(),Sa=Dt(),I=Dt(),ee=Dt(),Et=Dt(),Ge=Dt();function Dt(){return 2**++xS}const Ca=Object.freeze(Object.defineProperty({__proto__:null,boolean:j,booleanish:ge,commaOrSpaceSeparated:Ge,commaSeparated:Et,number:I,overloadedBoolean:Sa,spaceSeparated:ee},Symbol.toStringTag,{value:"Module"})),lu=Object.keys(Ca);class Rs extends Ye{constructor(n,t,r,i){let l=-1;if(super(n,t),nd(this,"space",i),typeof r=="number")for(;++l<lu.length;){const o=lu[l];nd(this,lu[l],(r&Ca[o])===Ca[o])}}}Rs.prototype.defined=!0;function nd(e,n,t){t&&(e[n]=t)}function yr(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const l=new Rs(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),n[r]=l,t[va(r)]=r,t[va(l.attribute)]=r}return new Ci(n,t,e.space)}const jm=yr({properties:{ariaActiveDescendant:null,ariaAtomic:ge,ariaAutoComplete:null,ariaBusy:ge,ariaChecked:ge,ariaColCount:I,ariaColIndex:I,ariaColSpan:I,ariaControls:ee,ariaCurrent:null,ariaDescribedBy:ee,ariaDetails:null,ariaDisabled:ge,ariaDropEffect:ee,ariaErrorMessage:null,ariaExpanded:ge,ariaFlowTo:ee,ariaGrabbed:ge,ariaHasPopup:null,ariaHidden:ge,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ee,ariaLevel:I,ariaLive:null,ariaModal:ge,ariaMultiLine:ge,ariaMultiSelectable:ge,ariaOrientation:null,ariaOwns:ee,ariaPlaceholder:null,ariaPosInSet:I,ariaPressed:ge,ariaReadOnly:ge,ariaRelevant:null,ariaRequired:ge,ariaRoleDescription:ee,ariaRowCount:I,ariaRowIndex:I,ariaRowSpan:I,ariaSelected:ge,ariaSetSize:I,ariaSort:null,ariaValueMax:I,ariaValueMin:I,ariaValueNow:I,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function $m(e,n){return n in e?e[n]:n}function Bm(e,n){return $m(e,n.toLowerCase())}const wS=yr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Et,acceptCharset:ee,accessKey:ee,action:null,allow:null,allowFullScreen:j,allowPaymentRequest:j,allowUserMedia:j,alpha:j,alt:null,as:null,async:j,autoCapitalize:null,autoComplete:ee,autoFocus:j,autoPlay:j,blocking:ee,capture:null,charSet:null,checked:j,cite:null,className:ee,closedBy:null,colorSpace:null,cols:I,colSpan:I,command:null,commandFor:null,content:null,contentEditable:ge,controls:j,controlsList:ee,coords:I|Et,crossOrigin:null,data:null,dateTime:null,decoding:null,default:j,defer:j,dir:null,dirName:null,disabled:j,download:Sa,draggable:ge,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:j,formTarget:null,headers:ee,height:I,hidden:Sa,high:I,href:null,hrefLang:null,htmlFor:ee,httpEquiv:ee,id:null,imageSizes:null,imageSrcSet:null,inert:j,inputMode:null,integrity:null,is:null,isMap:j,itemId:null,itemProp:ee,itemRef:ee,itemScope:j,itemType:ee,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:j,low:I,manifest:null,max:null,maxLength:I,media:null,method:null,min:null,minLength:I,multiple:j,muted:j,name:null,nonce:null,noModule:j,noValidate:j,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:j,optimum:I,pattern:null,ping:ee,placeholder:null,playsInline:j,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:j,referrerPolicy:null,rel:ee,required:j,reversed:j,rows:I,rowSpan:I,sandbox:ee,scope:null,scoped:j,seamless:j,selected:j,shadowRootClonable:j,shadowRootCustomElementRegistry:j,shadowRootDelegatesFocus:j,shadowRootMode:null,shadowRootSerializable:j,shape:null,size:I,sizes:null,slot:null,span:I,spellCheck:ge,src:null,srcDoc:null,srcLang:null,srcSet:null,start:I,step:null,style:null,tabIndex:I,target:null,title:null,translate:null,type:null,typeMustMatch:j,useMap:null,value:ge,width:I,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ee,axis:null,background:null,bgColor:null,border:I,borderColor:null,bottomMargin:I,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:j,declare:j,event:null,face:null,frame:null,frameBorder:null,hSpace:I,leftMargin:I,link:null,longDesc:null,lowSrc:null,marginHeight:I,marginWidth:I,noResize:j,noHref:j,noShade:j,noWrap:j,object:null,profile:null,prompt:null,rev:null,rightMargin:I,rules:null,scheme:null,scrolling:ge,standby:null,summary:null,text:null,topMargin:I,valueType:null,version:null,vAlign:null,vLink:null,vSpace:I,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:j,disablePictureInPicture:j,disableRemotePlayback:j,exportParts:Et,part:ee,prefix:null,property:null,results:I,security:null,unselectable:null},space:"html",transform:Bm}),vS=yr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ge,accentHeight:I,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:I,amplitude:I,arabicForm:null,ascent:I,attributeName:null,attributeType:null,azimuth:I,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:I,by:null,calcMode:null,capHeight:I,className:ee,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:I,diffuseConstant:I,direction:null,display:null,dur:null,divisor:I,dominantBaseline:null,download:j,dx:null,dy:null,edgeMode:null,editable:null,elevation:I,enableBackground:null,end:null,event:null,exponent:I,externalResourcesRequired:null,fill:null,fillOpacity:I,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Et,g2:Et,glyphName:Et,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:I,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:I,horizOriginX:I,horizOriginY:I,id:null,ideographic:I,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:I,k:I,k1:I,k2:I,k3:I,k4:I,kernelMatrix:Ge,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:I,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:I,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:I,overlineThickness:I,paintOrder:null,panose1:null,path:null,pathLength:I,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ee,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:I,pointsAtY:I,pointsAtZ:I,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ge,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ge,rev:Ge,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ge,requiredFeatures:Ge,requiredFonts:Ge,requiredFormats:Ge,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:I,specularExponent:I,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:I,strikethroughThickness:I,string:null,stroke:null,strokeDashArray:Ge,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:I,strokeOpacity:I,strokeWidth:null,style:null,surfaceScale:I,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ge,tabIndex:I,tableValues:null,target:null,targetX:I,targetY:I,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ge,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:I,underlineThickness:I,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:I,values:null,vAlphabetic:I,vMathematical:I,vectorEffect:null,vHanging:I,vIdeographic:I,version:null,vertAdvY:I,vertOriginX:I,vertOriginY:I,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:I,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:$m}),Hm=yr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),Um=yr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Bm}),Vm=yr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),SS=/[A-Z]/g,td=/-[a-z]/g,CS=/^data[-\w.:]+$/i;function _S(e,n){const t=va(n);let r=n,i=Ye;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&CS.test(n)){if(n.charAt(4)==="-"){const l=n.slice(5).replace(td,TS);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=n.slice(4);if(!td.test(l)){let o=l.replace(SS,ES);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}i=Rs}return new i(r,n)}function ES(e){return"-"+e.toLowerCase()}function TS(e){return e.charAt(1).toUpperCase()}const PS=Om([jm,wS,Hm,Um,Vm],"html"),Wm=Om([jm,vS,Hm,Um,Vm],"svg"),MS=/["&'<>`]/g,AS=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,IS=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,LS=/[|\\{}()[\]^$+*?.]/g,rd=new WeakMap;function zS(e,n){if(e=e.replace(n.subset?NS(n.subset):MS,r),n.subset||n.escapeOnly)return e;return e.replace(AS,t).replace(IS,r);function t(i,l,o){return n.format((i.charCodeAt(0)-55296)*1024+i.charCodeAt(1)-56320+65536,o.charCodeAt(l+2),n)}function r(i,l,o){return n.format(i.charCodeAt(0),o.charCodeAt(l+1),n)}}function NS(e){let n=rd.get(e);return n||(n=DS(e),rd.set(e,n)),n}function DS(e){const n=[];let t=-1;for(;++t<e.length;)n.push(e[t].replace(LS,"\\$&"));return new RegExp("(?:"+n.join("|")+")","g")}const bS=/[\dA-Fa-f]/;function RS(e,n,t){const r="&#x"+e.toString(16).toUpperCase();return t&&n&&!bS.test(String.fromCharCode(n))?r:r+";"}const FS=/\d/;function OS(e,n,t){const r="&#"+String(e);return t&&n&&!FS.test(String.fromCharCode(n))?r:r+";"}const jS=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"],ou={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"},$S=["cent","copy","divide","gt","lt","not","para","times"],qm={}.hasOwnProperty,_a={};let Qi;for(Qi in ou)qm.call(ou,Qi)&&(_a[ou[Qi]]=Qi);const BS=/[^\dA-Za-z]/;function HS(e,n,t,r){const i=String.fromCharCode(e);if(qm.call(_a,i)){const l=_a[i],o="&"+l;return t&&jS.includes(l)&&!$S.includes(l)&&(!r||n&&n!==61&&BS.test(String.fromCharCode(n)))?o:o+";"}return""}function US(e,n,t){let r=RS(e,n,t.omitOptionalSemicolons),i;if((t.useNamedReferences||t.useShortestReferences)&&(i=HS(e,n,t.omitOptionalSemicolons,t.attribute)),(t.useShortestReferences||!i)&&t.useShortestReferences){const l=OS(e,n,t.omitOptionalSemicolons);l.length<r.length&&(r=l)}return i&&(!t.useShortestReferences||i.length<r.length)?i:r}function lr(e,n){return zS(e,Object.assign({format:US},n))}const VS=/^>|^->|<!--|-->|--!>|<!-$/g,WS=[">"],qS=["<",">"];function QS(e,n,t,r){return r.settings.bogusComments?"<?"+lr(e.value,Object.assign({},r.settings.characterReferences,{subset:WS}))+">":"<!--"+e.value.replace(VS,i)+"-->";function i(l){return lr(l,Object.assign({},r.settings.characterReferences,{subset:qS}))}}function YS(e,n,t,r){return"<!"+(r.settings.upperDoctype?"DOCTYPE":"doctype")+(r.settings.tightDoctype?"":" ")+"html>"}function XS(e,n){const t=n||{};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}function GS(e){return e.join(" ").trim()}const KS=/[ \t\n\f\r]/g;function Fs(e){return typeof e=="object"?e.type==="text"?id(e.value):!1:id(e)}function id(e){return e.replace(KS,"")===""}const ve=Ym(1),Qm=Ym(-1),ZS=[];function Ym(e){return n;function n(t,r,i){const l=t?t.children:ZS;let o=(r||0)+e,u=l[o];if(!i)for(;u&&Fs(u);)o+=e,u=l[o];return u}}const JS={}.hasOwnProperty;function Xm(e){return n;function n(t,r,i){return JS.call(e,t.tagName)&&e[t.tagName](t,r,i)}}const Os=Xm({body:nC,caption:uu,colgroup:uu,dd:lC,dt:iC,head:uu,html:eC,li:rC,optgroup:oC,option:uC,p:tC,rp:ld,rt:ld,tbody:sC,td:od,tfoot:cC,th:od,thead:aC,tr:fC});function uu(e,n,t){const r=ve(t,n,!0);return!r||r.type!=="comment"&&!(r.type==="text"&&Fs(r.value.charAt(0)))}function eC(e,n,t){const r=ve(t,n);return!r||r.type!=="comment"}function nC(e,n,t){const r=ve(t,n);return!r||r.type!=="comment"}function tC(e,n,t){const r=ve(t,n);return r?r.type==="element"&&(r.tagName==="address"||r.tagName==="article"||r.tagName==="aside"||r.tagName==="blockquote"||r.tagName==="details"||r.tagName==="div"||r.tagName==="dl"||r.tagName==="fieldset"||r.tagName==="figcaption"||r.tagName==="figure"||r.tagName==="footer"||r.tagName==="form"||r.tagName==="h1"||r.tagName==="h2"||r.tagName==="h3"||r.tagName==="h4"||r.tagName==="h5"||r.tagName==="h6"||r.tagName==="header"||r.tagName==="hgroup"||r.tagName==="hr"||r.tagName==="main"||r.tagName==="menu"||r.tagName==="nav"||r.tagName==="ol"||r.tagName==="p"||r.tagName==="pre"||r.tagName==="section"||r.tagName==="table"||r.tagName==="ul"):!t||!(t.type==="element"&&(t.tagName==="a"||t.tagName==="audio"||t.tagName==="del"||t.tagName==="ins"||t.tagName==="map"||t.tagName==="noscript"||t.tagName==="video"))}function rC(e,n,t){const r=ve(t,n);return!r||r.type==="element"&&r.tagName==="li"}function iC(e,n,t){const r=ve(t,n);return!!(r&&r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd"))}function lC(e,n,t){const r=ve(t,n);return!r||r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd")}function ld(e,n,t){const r=ve(t,n);return!r||r.type==="element"&&(r.tagName==="rp"||r.tagName==="rt")}function oC(e,n,t){const r=ve(t,n);return!r||r.type==="element"&&r.tagName==="optgroup"}function uC(e,n,t){const r=ve(t,n);return!r||r.type==="element"&&(r.tagName==="option"||r.tagName==="optgroup")}function aC(e,n,t){const r=ve(t,n);return!!(r&&r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot"))}function sC(e,n,t){const r=ve(t,n);return!r||r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot")}function cC(e,n,t){return!ve(t,n)}function fC(e,n,t){const r=ve(t,n);return!r||r.type==="element"&&r.tagName==="tr"}function od(e,n,t){const r=ve(t,n);return!r||r.type==="element"&&(r.tagName==="td"||r.tagName==="th")}const dC=Xm({body:mC,colgroup:gC,head:hC,html:pC,tbody:yC});function pC(e){const n=ve(e,-1);return!n||n.type!=="comment"}function hC(e){const n=new Set;for(const r of e.children)if(r.type==="element"&&(r.tagName==="base"||r.tagName==="title")){if(n.has(r.tagName))return!1;n.add(r.tagName)}const t=e.children[0];return!t||t.type==="element"}function mC(e){const n=ve(e,-1,!0);return!n||n.type!=="comment"&&!(n.type==="text"&&Fs(n.value.charAt(0)))&&!(n.type==="element"&&(n.tagName==="meta"||n.tagName==="link"||n.tagName==="script"||n.tagName==="style"||n.tagName==="template"))}function gC(e,n,t){const r=Qm(t,n),i=ve(e,-1,!0);return t&&r&&r.type==="element"&&r.tagName==="colgroup"&&Os(r,t.children.indexOf(r),t)?!1:!!(i&&i.type==="element"&&i.tagName==="col")}function yC(e,n,t){const r=Qm(t,n),i=ve(e,-1);return t&&r&&r.type==="element"&&(r.tagName==="thead"||r.tagName==="tbody")&&Os(r,t.children.indexOf(r),t)?!1:!!(i&&i.type==="element"&&i.tagName==="tr")}const Yi={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function kC(e,n,t,r){const i=r.schema,l=i.space==="svg"?!1:r.settings.omitOptionalTags;let o=i.space==="svg"?r.settings.closeEmptyElements:r.settings.voids.includes(e.tagName.toLowerCase());const u=[];let a;i.space==="html"&&e.tagName==="svg"&&(r.schema=Wm);const s=xC(r,e.properties),f=r.all(i.space==="html"&&e.tagName==="template"?e.content:e);return r.schema=i,f&&(o=!1),(s||!l||!dC(e,n,t))&&(u.push("<",e.tagName,s?" "+s:""),o&&(i.space==="svg"||r.settings.closeSelfClosing)&&(a=s.charAt(s.length-1),(!r.settings.tightSelfClosing||a==="/"||a&&a!=='"'&&a!=="'")&&u.push(" "),u.push("/")),u.push(">")),u.push(f),!o&&(!l||!Os(e,n,t))&&u.push("</"+e.tagName+">"),u.join("")}function xC(e,n){const t=[];let r=-1,i;if(n){for(i in n)if(n[i]!==null&&n[i]!==void 0){const l=wC(e,i,n[i]);l&&t.push(l)}}for(;++r<t.length;){const l=e.settings.tightAttributes?t[r].charAt(t[r].length-1):void 0;r!==t.length-1&&l!=='"'&&l!=="'"&&(t[r]+=" ")}return t.join("")}function wC(e,n,t){const r=_S(e.schema,n),i=e.settings.allowParseErrors&&e.schema.space==="html"?0:1,l=e.settings.allowDangerousCharacters?0:1;let o=e.quote,u;if(r.overloadedBoolean&&(t===r.attribute||t==="")?t=!0:(r.boolean||r.overloadedBoolean)&&(typeof t!="string"||t===r.attribute||t==="")&&(t=!!t),t==null||t===!1||typeof t=="number"&&Number.isNaN(t))return"";const a=lr(r.attribute,Object.assign({},e.settings.characterReferences,{subset:Yi.name[i][l]}));return t===!0||(t=Array.isArray(t)?(r.commaSeparated?XS:GS)(t,{padLeft:!e.settings.tightCommaSeparatedLists}):String(t),e.settings.collapseEmptyAttributes&&!t)?a:(e.settings.preferUnquoted&&(u=lr(t,Object.assign({},e.settings.characterReferences,{attribute:!0,subset:Yi.unquoted[i][l]}))),u!==t&&(e.settings.quoteSmart&&$l(t,o)>$l(t,e.alternative)&&(o=e.alternative),u=o+lr(t,Object.assign({},e.settings.characterReferences,{subset:(o==="'"?Yi.single:Yi.double)[i][l],attribute:!0}))+o),a+(u&&"="+u))}const vC=["<","&"];function Gm(e,n,t,r){return t&&t.type==="element"&&(t.tagName==="script"||t.tagName==="style")?e.value:lr(e.value,Object.assign({},r.settings.characterReferences,{subset:vC}))}function SC(e,n,t,r){return r.settings.allowDangerousHtml?e.value:Gm(e,n,t,r)}function CC(e,n,t,r){return r.all(e)}const _C=$h("type",{invalid:EC,unknown:TC,handlers:{comment:QS,doctype:YS,element:kC,raw:SC,root:CC,text:Gm}});function EC(e){throw new Error("Expected node, not `"+e+"`")}function TC(e){const n=e;throw new Error("Cannot compile unknown node `"+n.type+"`")}const PC={},MC={},AC=[];function IC(e,n){const t=n||PC,r=t.quote||'"',i=r==='"'?"'":'"';if(r!=='"'&&r!=="'")throw new Error("Invalid quote `"+r+"`, expected `'` or `\"`");return{one:LC,all:zC,settings:{omitOptionalTags:t.omitOptionalTags||!1,allowParseErrors:t.allowParseErrors||!1,allowDangerousCharacters:t.allowDangerousCharacters||!1,quoteSmart:t.quoteSmart||!1,preferUnquoted:t.preferUnquoted||!1,tightAttributes:t.tightAttributes||!1,upperDoctype:t.upperDoctype||!1,tightDoctype:t.tightDoctype||!1,bogusComments:t.bogusComments||!1,tightCommaSeparatedLists:t.tightCommaSeparatedLists||!1,tightSelfClosing:t.tightSelfClosing||!1,collapseEmptyAttributes:t.collapseEmptyAttributes||!1,allowDangerousHtml:t.allowDangerousHtml||!1,voids:t.voids||kS,characterReferences:t.characterReferences||MC,closeSelfClosing:t.closeSelfClosing||!1,closeEmptyElements:t.closeEmptyElements||!1},schema:t.space==="svg"?Wm:PS,quote:r,alternative:i}.one(Array.isArray(e)?{type:"root",children:e}:e,void 0,void 0)}function LC(e,n,t){return _C(e,n,t,this)}function zC(e){const n=[],t=e&&e.children||AC;let r=-1;for(;++r<t.length;)n[r]=this.one(t[r],r,e);return n.join("")}const NC=`
ins { background-color: #e6ffec; text-decoration: none; border-radius: 2px; padding: 0 2px; }
del { background-color: #ffebe9; text-decoration: line-through; border-radius: 2px; padding: 0 2px; }
ins.diff-block, del.diff-block { display: block; padding-left: 10px; border-left: 3px solid; }
ins.diff-block { border-left-color: #2cbe4e; }
del.diff-block { border-left-color: #cb2431; }
ins > hr, ins > pre { background-color: #e6ffec; }
del > hr, del > pre { background-color: #ffebe9; }
li[data-diff="ins"] { background-color: #e6ffec; border-radius: 2px; }
li[data-diff="del"] { background-color: #ffebe9; border-radius: 2px; text-decoration: line-through; }
`;function Xi(e,n){return(t,r)=>{const i=t.all(r);return{type:"element",tagName:e,properties:{className:[n]},children:i}}}function DC(e){cn(e,n=>{var t;(t=n.data)!=null&&t.diff&&(n.data.hProperties||(n.data.hProperties={}),n.data.hProperties["data-diff"]=n.data.diff)})}function bC(e){const n=JSON.parse(JSON.stringify(e));DC(n);const t=yS(n,{allowDangerousHtml:!0,handlers:{ins:Xi("ins","diff-block"),del:Xi("del","diff-block"),inlineIns:Xi("ins","diff-inline"),inlineDel:Xi("del","diff-inline")}});if(!t)return"";const r=IC(t,{allowDangerousHtml:!0});return`<html><head><style>${NC}</style></head><body>${r}</body></html>`}const RC={tokenize:FC};function FC(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(u){if(u===null){e.consume(u);return}return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),K(e,n,"linePrefix")}function i(u){return e.enter("paragraph"),l(u)}function l(u){const a=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=a),t=a,o(u)}function o(u){if(u===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(u);return}return O(u)?(e.consume(u),e.exit("chunkText"),l):(e.consume(u),o)}}const OC={tokenize:jC},ud={tokenize:$C};function jC(e){const n=this,t=[];let r=0,i,l,o;return u;function u(y){if(r<t.length){const C=t[r];return n.containerState=C[1],e.attempt(C[0].continuation,a,s)(y)}return s(y)}function a(y){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&m();const C=n.events.length;let _=C,v;for(;_--;)if(n.events[_][0]==="exit"&&n.events[_][1].type==="chunkFlow"){v=n.events[_][1].end;break}h(r);let P=C;for(;P<n.events.length;)n.events[P][1].end={...v},P++;const A=new Bl;return A.add(_+1,0,n.events.slice(C)),A.add(C,P-C,[]),A.consume(n.events),s(y)}return u(y)}function s(y){if(r===t.length){if(!i)return p(y);if(i.currentConstruct&&i.currentConstruct.concrete)return g(y);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(ud,f,c)(y)}function f(y){return i&&m(),h(r),p(y)}function c(y){return n.parser.lazy[n.now().line]=r!==t.length,o=n.now().offset,g(y)}function p(y){return n.containerState={},e.attempt(ud,d,g)(y)}function d(y){return r++,t.push([n.currentConstruct,n.containerState]),p(y)}function g(y){if(y===null){i&&m(),h(0),e.consume(y);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),w(y)}function w(y){if(y===null){T(e.exit("chunkFlow"),!0),h(0),e.consume(y);return}return O(y)?(e.consume(y),T(e.exit("chunkFlow")),r=0,n.interrupt=void 0,u):(e.consume(y),w)}function T(y,C){const _=n.sliceStream(y);if(C&&_.push(null),y.previous=l,l&&(l.next=y),l=y,i.defineSkip(y.start),i.write(_),n.parser.lazy[y.start.line]){let v=i.events.length;for(;v--;)if(i.events[v][1].start.offset<o&&(!i.events[v][1].end||i.events[v][1].end.offset>o))return;const P=n.events.length;let A=P,B,S;for(;A--;)if(n.events[A][0]==="exit"&&n.events[A][1].type==="chunkFlow"){if(B){S=n.events[A][1].end;break}B=!0}for(h(r),v=P;v<n.events.length;)n.events[v][1].end={...S},v++;const z=new Bl;z.add(A+1,0,n.events.slice(P)),z.add(P,v-P,[]),z.consume(n.events)}}function h(y){let C=t.length;for(;C-- >y;){const _=t[C];n.containerState=_[1],_[0].exit.call(n,e)}t.length=y}function m(){i.write([null]),l=void 0,i=void 0,n.containerState._closeFlow=void 0}}function $C(e,n,t){return K(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const BC={tokenize:HC};function HC(e){const n=this,t=e.attempt(Si,r,e.attempt(this.parser.constructs.flowInitial,i,K(e,e.attempt(this.parser.constructs.flow,i,e.attempt(mv,i)),"linePrefix")));return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const UC={resolveAll:Zm()},VC=Km("string"),WC=Km("text");function Km(e){return{resolveAll:Zm(e==="text"?qC:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],l=t.attempt(i,o,u);return o;function o(f){return s(f)?l(f):u(f)}function u(f){if(f===null){t.consume(f);return}return t.enter("data"),t.consume(f),a}function a(f){return s(f)?(t.exit("data"),l(f)):(t.consume(f),a)}function s(f){if(f===null)return!0;const c=i[f];let p=-1;if(c)for(;++p<c.length;){const d=c[p];if(!d.previous||d.previous.call(r,r.previous))return!0}return!1}}}function Zm(e){return n;function n(t,r){let i=-1,l;for(;++i<=t.length;)l===void 0?t[i]&&t[i][1].type==="data"&&(l=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==l+2&&(t[l][1].end=t[i-1][1].end,t.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(t,r):t}}function qC(e,n){const t=new Bl;let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const i=e[r-1][1],l=n.sliceStream(i);let o=l.length,u=-1,a=0,s;for(;o--;){const f=l[o];if(typeof f=="string"){for(u=f.length;f.charCodeAt(u-1)===32;)a++,u--;if(u)break;u=-1}else if(f===-2)s=!0,a++;else if(f!==-1){o++;break}}if(n._contentTypeTextTrailing&&r===e.length&&(a=0),a){const f={type:r===e.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?u:i.start._bufferIndex+u,_index:i.start._index+o,line:i.end.line,column:i.end.column-a,offset:i.end.offset-a},end:{...i.end}};i.end={...f.start},i.start.offset===i.end.offset?Object.assign(i,f):t.add(r,0,[["enter",f,n],["exit",f,n]])}r++}return t.consume(e),e}const QC={42:Be,43:Be,45:Be,48:Be,49:Be,50:Be,51:Be,52:Be,53:Be,54:Be,55:Be,56:Be,57:Be,62:vm},YC={91:wv},XC={[-2]:ru,[-1]:ru,32:ru},GC={35:Tv,42:dl,45:[qf,dl],60:Av,61:qf,95:dl,96:Vf,126:Vf},KC={38:Cm,92:Sm},ZC={[-5]:iu,[-4]:iu,[-3]:iu,33:Wv,38:Cm,42:ka,60:[Gw,Dv],91:Qv,92:[_v,Sm],93:Ls,95:ka,96:sv},JC={null:[ka,UC]},e_={null:[42,95]},n_={null:[]},t_=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:e_,contentInitial:YC,disable:n_,document:QC,flow:GC,flowInitial:XC,insideSpan:JC,string:KC,text:ZC},Symbol.toStringTag,{value:"Module"}));function r_(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},l=[];let o=[],u=[];const a={attempt:P(_),check:P(v),consume:m,enter:y,exit:C,interrupt:P(v,{interrupt:!0})},s={code:null,containerState:{},defineSkip:w,events:[],now:g,parser:e,previous:null,sliceSerialize:p,sliceStream:d,write:c};let f=n.tokenize.call(s,a);return n.resolveAll&&l.push(n),s;function c(z){return o=on(o,z),T(),o[o.length-1]!==null?[]:(A(n,0),s.events=ho(l,s.events,s),s.events)}function p(z,R){return l_(d(z),R)}function d(z){return i_(o,z)}function g(){const{_bufferIndex:z,_index:R,line:Y,column:te,offset:Q}=r;return{_bufferIndex:z,_index:R,line:Y,column:te,offset:Q}}function w(z){i[z.line]=z.column,S()}function T(){for(;r._index<o.length;){const z=o[r._index];if(typeof z=="string"){const R=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===R&&r._bufferIndex<z.length;)h(z.charCodeAt(r._bufferIndex))}else h(z)}}function h(z){f=f(z)}function m(z){O(z)?(r.line++,r.column=1,r.offset+=z===-3?2:1,S()):z!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=z}function y(z,R){const Y=R||{};return Y.type=z,Y.start=g(),s.events.push(["enter",Y,s]),u.push(Y),Y}function C(z){const R=u.pop();return R.end=g(),s.events.push(["exit",R,s]),R}function _(z,R){A(z,R.from)}function v(z,R){R.restore()}function P(z,R){return Y;function Y(te,Q,me){let pe,N,F,k;return Array.isArray(te)?J(te):"tokenize"in te?J([te]):X(te);function X(re){return Cn;function Cn(qn){const bt=qn!==null&&re[qn],Rt=qn!==null&&re.null,go=[...Array.isArray(bt)?bt:bt?[bt]:[],...Array.isArray(Rt)?Rt:Rt?[Rt]:[]];return J(go)(qn)}}function J(re){return pe=re,N=0,re.length===0?me:x(re[N])}function x(re){return Cn;function Cn(qn){return k=B(),F=re,re.partial||(s.currentConstruct=re),re.name&&s.parser.constructs.disable.null.includes(re.name)?Sn():re.tokenize.call(R?Object.assign(Object.create(s),R):s,a,ke,Sn)(qn)}}function ke(re){return z(F,k),Q}function Sn(re){return k.restore(),++N<pe.length?x(pe[N]):me}}}function A(z,R){z.resolveAll&&!l.includes(z)&&l.push(z),z.resolve&&wn(s.events,R,s.events.length-R,z.resolve(s.events.slice(R),s)),z.resolveTo&&(s.events=z.resolveTo(s.events,s))}function B(){const z=g(),R=s.previous,Y=s.currentConstruct,te=s.events.length,Q=Array.from(u);return{from:te,restore:me};function me(){r=z,s.previous=R,s.currentConstruct=Y,s.events.length=te,u=Q,S()}}function S(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function i_(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,l=n.end._bufferIndex;let o;if(t===i)o=[e[t].slice(r,l)];else{if(o=e.slice(t,i),r>-1){const u=o[0];typeof u=="string"?o[0]=u.slice(r):o.shift()}l>0&&o.push(e[i].slice(0,l))}return o}function l_(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const l=e[t];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&i)continue;o=" ";break}default:o=String.fromCharCode(l)}i=l===-2,r.push(o)}return r.join("")}function o_(e){const r={constructs:fm([t_,...(e||{}).extensions||[]]),content:i(RC),defined:[],document:i(OC),flow:i(BC),lazy:{},string:i(VC),text:i(WC)};return r;function i(l){return o;function o(u){return r_(r,l,u)}}}function u_(e){for(;!_m(e););return e}const ad=/[\0\t\n\r]/g;function a_(){let e=1,n="",t=!0,r;return i;function i(l,o,u){l=n+(typeof l=="string"?l.toString():new TextDecoder(o||void 0).decode(l));const a=[];let s=0;for(n="",t&&(l.charCodeAt(0)===65279&&s++,t=void 0);s<l.length;){ad.lastIndex=s;const f=ad.exec(l),c=f&&f.index!==void 0?f.index:l.length,p=l.charCodeAt(c);if(!f){n=l.slice(s);break}if(p===10&&s===c&&r)a.push(-3),r=void 0;else switch(r&&(a.push(-5),r=void 0),s<c&&(a.push(l.slice(s,c)),e+=c-s),p){case 0:{a.push(65533),e++;break}case 9:{const d=Math.ceil(e/4)*4;for(a.push(-2);e++<d;)a.push(-1);break}case 10:{a.push(-4),e=1;break}default:r=!0,e=1}s=c+1}return u&&(r&&a.push(-5),n&&a.push(n),a.push(null)),a}}const Jm={}.hasOwnProperty;function s_(e,n,t){return n&&typeof n=="object"&&(t=n,n=void 0),c_(t)(u_(o_(t).document().write(a_()(e,n,!0))))}function c_(e){const n={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Us),autolinkProtocol:S,autolinkEmail:S,atxHeading:o($s),blockQuote:o(go),characterEscape:S,characterReference:S,codeFenced:o(js),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:o(js,u),codeText:o(tg,u),codeTextData:S,data:S,codeFlowValue:S,definition:o(rg),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:o(ig),hardBreakEscape:o(Bs),hardBreakTrailing:o(Bs),htmlFlow:o(Hs,u),htmlFlowData:S,htmlText:o(Hs,u),htmlTextData:S,image:o(lg),label:u,link:o(Us),listItem:o(og),listItemValue:d,listOrdered:o(Vs,p),listUnordered:o(Vs),paragraph:o(ug),reference:ke,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:o($s),strong:o(ag),thematicBreak:o(cg)},exit:{atxHeading:s(),atxHeadingSequence:v,autolink:s(),autolinkEmail:Rt,autolinkProtocol:bt,blockQuote:s(),characterEscapeValue:z,characterReferenceMarkerHexadecimal:re,characterReferenceMarkerNumeric:re,characterReferenceValue:Cn,characterReference:qn,codeFenced:s(h),codeFencedFence:T,codeFencedFenceInfo:g,codeFencedFenceMeta:w,codeFlowValue:z,codeIndented:s(m),codeText:s(me),codeTextData:z,data:z,definition:s(),definitionDestinationString:_,definitionLabelString:y,definitionTitleString:C,emphasis:s(),hardBreakEscape:s(Y),hardBreakTrailing:s(Y),htmlFlow:s(te),htmlFlowData:z,htmlText:s(Q),htmlTextData:z,image:s(N),label:k,labelText:F,lineEnding:R,link:s(pe),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:Sn,resourceDestinationString:X,resourceTitleString:J,resource:x,setextHeading:s(B),setextHeadingLineSequence:A,setextHeadingText:P,strong:s(),thematicBreak:s()}};eg(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(E){let L={type:"root",children:[],position:void 0};const $={stack:[L],tokenStack:[],config:n,enter:a,exit:f,buffer:u,resume:c,data:t},H=[],je=[];let le=-1;for(;++le<E.length;)if(je.push(E[le]),E[le][1].type==="listOrdered"||E[le][1].type==="listUnordered")if(E[le][0]==="enter")H.push(je.length-1);else{const $e=H.pop();l(je,$e)}for(E=je,le=-1;++le<E.length;){const $e=n[E[le][0]];E[le][0]==="enter"&&n.beforeEnter.length>0&&i(n.beforeEnter,{...$,sliceSerialize:E[le][2].sliceSerialize},E[le][1]),Jm.call($e,E[le][1].type)&&$e[E[le][1].type].call({...$,sliceSerialize:E[le][2].sliceSerialize},E[le][1]),E[le][0]==="exit"&&n.afterExit.length>0&&i(n.afterExit,{...$,sliceSerialize:E[le][2].sliceSerialize},E[le][1])}if($.tokenStack.length>0){const $e=$.tokenStack[$.tokenStack.length-1];($e[1]||sd).call($,void 0,$e[0])}for(L.position={start:Yn(E.length>0?E[0][1].start:{line:1,column:1,offset:0}),end:Yn(E.length>0?E[E.length-2][1].end:{line:1,column:1,offset:0})},le=-1;++le<n.transforms.length;)L=n.transforms[le](L)||L;return L}function i(E,L,$){let H=-1;for(;++H<E.length;)E[H].call(L,$)}function l(E,L){const $=E.length-1;let H=L-1,je=-1,le=!1,$e,_n,kr,xr;const wr=[];for(;++H<=$;){const Xe=E[H];switch(Xe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Xe[0]==="enter"?je++:je--,xr=void 0;break}case"lineEndingBlank":{Xe[0]==="enter"&&($e&&!xr&&!je&&!kr&&(kr=H),xr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:xr=void 0}if(!je&&Xe[0]==="enter"&&Xe[1].type==="listItemPrefix"||je===-1&&Xe[0]==="exit"&&(Xe[1].type==="listUnordered"||Xe[1].type==="listOrdered")){if($e){let Ft=H;for(_n=void 0;Ft--;){const Nn=E[Ft];if(Nn[1].type==="lineEnding"||Nn[1].type==="lineEndingBlank"){if(Nn[0]==="exit")continue;_n&&(E[_n][1].type="lineEndingBlank",le=!0),Nn[1].type="lineEnding",_n=Ft}else if(!(Nn[1].type==="linePrefix"||Nn[1].type==="blockQuotePrefix"||Nn[1].type==="blockQuotePrefixWhitespace"||Nn[1].type==="blockQuoteMarker"||Nn[1].type==="listItemIndent"))break}kr&&(!_n||kr<_n)&&($e._spread=!0),$e.end=Object.assign({},_n?E[_n][1].start:Xe[1].end),wr.push({at:_n||H,event:["exit",$e,Xe[2]]})}if(Xe[1].type==="listItemPrefix"){const Ft={type:"listItem",_spread:!1,start:Object.assign({},Xe[1].start),end:void 0};$e=Ft,wr.push({at:H,event:["enter",Ft,Xe[2]]}),kr=void 0,xr=!0}}}const Ws=E.splice(L);let yo=0;for(H=-1;++H<Ws.length;){for(;yo<wr.length&&wr[yo].at===L+H;)E.push(wr[yo++].event);E.push(Ws[H])}E[L][1]._spread=le}function o(E,L){return $;function $(H){a.call(this,E(H),H),L&&L.call(this,H)}}function u(){this.stack.push({type:"fragment",children:[]})}function a(E,L,$){this.stack[this.stack.length-1].children.push(E),this.stack.push(E),this.tokenStack.push([L,$||void 0]),E.position={start:Yn(L.start),end:void 0}}function s(E){return L;function L($){E&&E.call(this,$),f.call(this,$)}}function f(E,L){const $=this.stack.pop(),H=this.tokenStack.pop();if(!H)throw new Error("Cannot close `"+E.type+"` ("+Gr({start:E.start,end:E.end})+"): it’s not open");H[0].type!==E.type&&(L?L.call(this,E,H[0]):(H[1]||sd).call(this,E,H[0])),$.position.end=Yn(E.end)}function c(){return Ss(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function d(E){if(this.data.expectingFirstListItemValue){const L=this.stack[this.stack.length-2];L.start=Number.parseInt(this.sliceSerialize(E),10),this.data.expectingFirstListItemValue=void 0}}function g(){const E=this.resume(),L=this.stack[this.stack.length-1];L.lang=E}function w(){const E=this.resume(),L=this.stack[this.stack.length-1];L.meta=E}function T(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function h(){const E=this.resume(),L=this.stack[this.stack.length-1];L.value=E.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const E=this.resume(),L=this.stack[this.stack.length-1];L.value=E.replace(/(\r?\n|\r)$/g,"")}function y(E){const L=this.resume(),$=this.stack[this.stack.length-1];$.label=L,$.identifier=xn(this.sliceSerialize(E)).toLowerCase()}function C(){const E=this.resume(),L=this.stack[this.stack.length-1];L.title=E}function _(){const E=this.resume(),L=this.stack[this.stack.length-1];L.url=E}function v(E){const L=this.stack[this.stack.length-1];if(!L.depth){const $=this.sliceSerialize(E).length;L.depth=$}}function P(){this.data.setextHeadingSlurpLineEnding=!0}function A(E){const L=this.stack[this.stack.length-1];L.depth=this.sliceSerialize(E).codePointAt(0)===61?1:2}function B(){this.data.setextHeadingSlurpLineEnding=void 0}function S(E){const $=this.stack[this.stack.length-1].children;let H=$[$.length-1];(!H||H.type!=="text")&&(H=sg(),H.position={start:Yn(E.start),end:void 0},$.push(H)),this.stack.push(H)}function z(E){const L=this.stack.pop();L.value+=this.sliceSerialize(E),L.position.end=Yn(E.end)}function R(E){const L=this.stack[this.stack.length-1];if(this.data.atHardBreak){const $=L.children[L.children.length-1];$.position.end=Yn(E.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(L.type)&&(S.call(this,E),z.call(this,E))}function Y(){this.data.atHardBreak=!0}function te(){const E=this.resume(),L=this.stack[this.stack.length-1];L.value=E}function Q(){const E=this.resume(),L=this.stack[this.stack.length-1];L.value=E}function me(){const E=this.resume(),L=this.stack[this.stack.length-1];L.value=E}function pe(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const L=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=L,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function N(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const L=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=L,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function F(E){const L=this.sliceSerialize(E),$=this.stack[this.stack.length-2];$.label=rm(L),$.identifier=xn(L).toLowerCase()}function k(){const E=this.stack[this.stack.length-1],L=this.resume(),$=this.stack[this.stack.length-1];if(this.data.inReference=!0,$.type==="link"){const H=E.children;$.children=H}else $.alt=L}function X(){const E=this.resume(),L=this.stack[this.stack.length-1];L.url=E}function J(){const E=this.resume(),L=this.stack[this.stack.length-1];L.title=E}function x(){this.data.inReference=void 0}function ke(){this.data.referenceType="collapsed"}function Sn(E){const L=this.resume(),$=this.stack[this.stack.length-1];$.label=L,$.identifier=xn(this.sliceSerialize(E)).toLowerCase(),this.data.referenceType="full"}function re(E){this.data.characterReferenceType=E.type}function Cn(E){const L=this.sliceSerialize(E),$=this.data.characterReferenceType;let H;$?(H=tm(L,$==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):H=Ts(L);const je=this.stack[this.stack.length-1];je.value+=H}function qn(E){const L=this.stack.pop();L.position.end=Yn(E.end)}function bt(E){z.call(this,E);const L=this.stack[this.stack.length-1];L.url=this.sliceSerialize(E)}function Rt(E){z.call(this,E);const L=this.stack[this.stack.length-1];L.url="mailto:"+this.sliceSerialize(E)}function go(){return{type:"blockquote",children:[],position:void 0}}function js(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function tg(){return{type:"inlineCode",value:"",position:void 0}}function rg(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function ig(){return{type:"emphasis",children:[],position:void 0}}function $s(){return{type:"heading",depth:0,children:[],position:void 0}}function Bs(){return{type:"break",position:void 0}}function Hs(){return{type:"html",value:"",position:void 0}}function lg(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function Us(){return{type:"link",title:null,url:"",children:[],position:void 0}}function Vs(E){return{type:"list",ordered:E.type==="listOrdered",start:null,spread:E._spread,children:[],position:void 0}}function og(E){return{type:"listItem",spread:E._spread,checked:null,children:[],position:void 0}}function ug(){return{type:"paragraph",children:[],position:void 0}}function ag(){return{type:"strong",children:[],position:void 0}}function sg(){return{type:"text",value:"",position:void 0}}function cg(){return{type:"thematicBreak",position:void 0}}}function Yn(e){return{line:e.line,column:e.column,offset:e.offset}}function eg(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?eg(e,r):f_(e,r)}}function f_(e,n){let t;for(t in n)if(Jm.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"afterExit":case"beforeEnter":{const r=n[t];r&&e[t].push(r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function sd(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Gr({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Gr({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Gr({start:n.start,end:n.end})+") is still open")}function d_(e){const n=this;n.parser=t;function t(r){return s_(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function cd(e){return um().use(d_).use(Mm).parse(e)}function au({getText:e}){const[n,t]=Se.useState(!1),r=Se.useCallback(()=>{navigator.clipboard.writeText(e()).then(()=>{t(!0),setTimeout(()=>t(!1),1500)})},[e]);return U.jsx("button",{className:`copy-btn ${n?"copied":""}`,onClick:r,children:n?"Copied":"Copy"})}function p_(){const[e,n]=Se.useState("formatting"),[t,r]=Se.useState(""),[i,l]=Se.useState(""),[o,u]=Se.useState([]),[a,s]=Se.useState(""),[f,c]=Se.useState(""),[p,d]=Se.useState(null),[g,w]=Se.useState("html-preview"),T=Se.useCallback((_,v)=>{const P=Th(_,v);u(P);const A=uk(lk(cd(_),cd(v)));d(A),s(M2(A)),c(bC(A))},[]);Se.useEffect(()=>{const _=nf.find(v=>v.name===e);_&&(r(_.oldMarkdown),l(_.newMarkdown),T(_.oldMarkdown,_.newMarkdown))},[e,T]);const h=Se.useCallback(_=>{const v=_.target.value;r(v),T(v,i)},[i,T]),m=Se.useCallback(_=>{const v=_.target.value;l(v),T(t,v)},[t,T]),y=()=>{switch(g){case"text-diff":return U.jsx("div",{className:"diff-text-view",children:o.map((_,v)=>U.jsx("span",{className:_.added?"added":_.removed?"removed":"",children:_.value},v))});case"ast-markdown":return U.jsx("div",{className:"ast-diff-view",children:U.jsx(h_,{text:a})});case"html-preview":{const _=`<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:16px;font-size:14px;line-height:1.6;color:#1a1a1a;}</style></head><body>${f}</body></html>`;return U.jsx("iframe",{className:"html-preview-frame",srcDoc:_,title:"HTML Diff Preview",sandbox:"allow-same-origin"})}case"ast-json":return U.jsx("pre",{className:"json-view",children:JSON.stringify(p,null,2)})}},C=Se.useCallback(()=>{switch(g){case"text-diff":return o.map(_=>_.value).join("");case"ast-markdown":return a;case"html-preview":return f;case"ast-json":return JSON.stringify(p,null,2)}},[g,o,a,f,p]);return U.jsxs("div",{className:"app",children:[U.jsxs("div",{className:"toolbar",children:[U.jsx("span",{className:"toolbar-title",children:"Markdown AST Diff"}),U.jsx("div",{className:"testcase-pills",children:nf.map(_=>U.jsx("button",{className:`pill ${e===_.name?"active":""}`,onClick:()=>n(_.name),children:_.name},_.name))})]}),U.jsxs("div",{className:"main",children:[U.jsxs("div",{className:"editor-row",children:[U.jsxs("div",{className:"editor-pane",children:[U.jsxs("div",{className:"pane-header",children:[U.jsx("span",{className:"pane-label",children:"Old"}),U.jsx(au,{getText:()=>t})]}),U.jsx("textarea",{className:"editor-textarea",value:t,onChange:h,placeholder:"Paste old markdown here..."})]}),U.jsxs("div",{className:"editor-pane",children:[U.jsxs("div",{className:"pane-header",children:[U.jsx("span",{className:"pane-label",children:"New"}),U.jsx(au,{getText:()=>i})]}),U.jsx("textarea",{className:"editor-textarea",value:i,onChange:m,placeholder:"Paste new markdown here..."})]})]}),U.jsxs("div",{className:"result-row",children:[U.jsxs("div",{className:"result-tabs",children:[[["html-preview","HTML Preview"],["ast-markdown","AST Markdown"],["text-diff","Text Diff"],["ast-json","AST JSON"]].map(([_,v])=>U.jsx("button",{className:`result-tab ${g===_?"active":""}`,onClick:()=>w(_),children:v},_)),U.jsx("div",{style:{flex:1}}),U.jsx(au,{getText:C})]}),U.jsx("div",{className:"result-content",children:y()})]})]})]})}function h_({text:e}){const n=document.createElement("textarea");n.innerHTML=e;const t=n.value,r=[];let i=0;const l=[...t.matchAll(/\{\+\+\+\+(.*?)\+\+\+\+\}/gs),...t.matchAll(/\{----(.*?)----\}/gs),...t.matchAll(/\{\+\+listItem\+\+\}/g),...t.matchAll(/\{--listItem--\}/g)].sort((o,u)=>o.index-u.index);return l.length===0?U.jsx(U.Fragment,{children:t}):(l.forEach((o,u)=>{const a=o.index,s=o[0];a>i&&r.push(U.jsx("span",{children:t.substring(i,a)},`t${u}`));let f="";s==="{++listItem++}"?f="list-ins-mark":s==="{--listItem--}"?f="list-del-mark":s.startsWith("{++++")?f="ins-mark":s.startsWith("{----")&&(f="del-mark"),r.push(U.jsx("span",{className:f,children:s},`m${u}`)),i=a+s.length}),i<t.length&&r.push(U.jsx("span",{children:t.substring(i)},"last")),U.jsx(U.Fragment,{children:r}))}const ng=document.getElementById("root");if(!ng)throw new Error("Root element not found");su.createRoot(ng).render(U.jsx(Tg.StrictMode,{children:U.jsx(p_,{})}));
