(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Ph=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ch={exports:{}},hl={},Ih={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mi=Symbol.for("react.element"),Cy=Symbol.for("react.portal"),Iy=Symbol.for("react.fragment"),Ty=Symbol.for("react.strict_mode"),My=Symbol.for("react.profiler"),jy=Symbol.for("react.provider"),Oy=Symbol.for("react.context"),zy=Symbol.for("react.forward_ref"),Ry=Symbol.for("react.suspense"),Ly=Symbol.for("react.memo"),Fy=Symbol.for("react.lazy"),Rc=Symbol.iterator;function Ny(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var Th={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mh=Object.assign,jh={};function Mr(e,n,t){this.props=e,this.context=n,this.refs=jh,this.updater=t||Th}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Oh(){}Oh.prototype=Mr.prototype;function Ss(e,n,t){this.props=e,this.context=n,this.refs=jh,this.updater=t||Th}var Es=Ss.prototype=new Oh;Es.constructor=Ss;Mh(Es,Mr.prototype);Es.isPureReactComponent=!0;var Lc=Array.isArray,zh=Object.prototype.hasOwnProperty,_s={current:null},Rh={key:!0,ref:!0,__self:!0,__source:!0};function Lh(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)zh.call(n,r)&&!Rh.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Mi,type:e,key:o,ref:l,props:i,_owner:_s.current}}function Dy(e,n){return{$$typeof:Mi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function bs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mi}function $y(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Fc=/\/+/g;function Dl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?$y(""+e.key):n.toString(36)}function co(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Mi:case Cy:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Dl(l,0):r,Lc(i)?(t="",e!=null&&(t=e.replace(Fc,"$&/")+"/"),co(i,n,t,"",function(s){return s})):i!=null&&(bs(i)&&(i=Dy(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Fc,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",Lc(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Dl(o,a);l+=co(o,n,t,u,i)}else if(u=Ny(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Dl(o,a++),l+=co(o,n,t,u,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Hi(e,n,t){if(e==null)return e;var r=[],i=0;return co(e,r,"","",function(o){return n.call(t,o,i++)}),r}function By(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var en={current:null},fo={transition:null},Hy={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:fo,ReactCurrentOwner:_s};function Fh(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:Hi,forEach:function(e,n,t){Hi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Hi(e,function(){n++}),n},toArray:function(e){return Hi(e,function(n){return n})||[]},only:function(e){if(!bs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=Mr;fe.Fragment=Iy;fe.Profiler=My;fe.PureComponent=Ss;fe.StrictMode=Ty;fe.Suspense=Ry;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy;fe.act=Fh;fe.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mh({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=_s.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)zh.call(n,u)&&!Rh.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:Mi,type:e.type,key:i,ref:o,props:r,_owner:l}};fe.createContext=function(e){return e={$$typeof:Oy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jy,_context:e},e.Consumer=e};fe.createElement=Lh;fe.createFactory=function(e){var n=Lh.bind(null,e);return n.type=e,n};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:zy,render:e}};fe.isValidElement=bs;fe.lazy=function(e){return{$$typeof:Fy,_payload:{_status:-1,_result:e},_init:By}};fe.memo=function(e,n){return{$$typeof:Ly,type:e,compare:n===void 0?null:n}};fe.startTransition=function(e){var n=fo.transition;fo.transition={};try{e()}finally{fo.transition=n}};fe.unstable_act=Fh;fe.useCallback=function(e,n){return en.current.useCallback(e,n)};fe.useContext=function(e){return en.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return en.current.useDeferredValue(e)};fe.useEffect=function(e,n){return en.current.useEffect(e,n)};fe.useId=function(){return en.current.useId()};fe.useImperativeHandle=function(e,n,t){return en.current.useImperativeHandle(e,n,t)};fe.useInsertionEffect=function(e,n){return en.current.useInsertionEffect(e,n)};fe.useLayoutEffect=function(e,n){return en.current.useLayoutEffect(e,n)};fe.useMemo=function(e,n){return en.current.useMemo(e,n)};fe.useReducer=function(e,n,t){return en.current.useReducer(e,n,t)};fe.useRef=function(e){return en.current.useRef(e)};fe.useState=function(e){return en.current.useState(e)};fe.useSyncExternalStore=function(e,n,t){return en.current.useSyncExternalStore(e,n,t)};fe.useTransition=function(){return en.current.useTransition()};fe.version="18.3.1";Ih.exports=fe;var jn=Ih.exports;const Uy=xs(jn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy=jn,Vy=Symbol.for("react.element"),Wy=Symbol.for("react.fragment"),Qy=Object.prototype.hasOwnProperty,Gy=qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yy={key:!0,ref:!0,__self:!0,__source:!0};function Nh(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Qy.call(n,r)&&!Yy.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Vy,type:e,key:o,ref:l,props:i,_owner:Gy.current}}hl.Fragment=Wy;hl.jsx=Nh;hl.jsxs=Nh;Ch.exports=hl;var J=Ch.exports,ou={},Dh={exports:{}},yn={},$h={exports:{}},Bh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(Q,M){var y=Q.length;Q.push(M);e:for(;0<y;){var q=y-1>>>1,$=Q[q];if(0<i($,M))Q[q]=M,Q[y]=$,y=q;else break e}}function t(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var M=Q[0],y=Q.pop();if(y!==M){Q[0]=y;e:for(var q=0,$=Q.length,d=$>>>1;q<d;){var k=2*(q+1)-1,x=Q[k],_=k+1,L=Q[_];if(0>i(x,y))_<$&&0>i(L,x)?(Q[q]=L,Q[_]=y,q=_):(Q[q]=x,Q[k]=y,q=k);else if(_<$&&0>i(L,y))Q[q]=L,Q[_]=y,q=_;else break e}}return M}function i(Q,M){var y=Q.sortIndex-M.sortIndex;return y!==0?y:Q.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],f=1,c=null,p=3,h=!1,w=!1,b=!1,R=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(Q){for(var M=t(s);M!==null;){if(M.callback===null)r(s);else if(M.startTime<=Q)r(s),M.sortIndex=M.expirationTime,n(u,M);else break;M=t(s)}}function E(Q){if(b=!1,g(Q),!w)if(t(u)!==null)w=!0,ae(I);else{var M=t(s);M!==null&&ge(E,M.startTime-Q)}}function I(Q,M){w=!1,b&&(b=!1,v(D),D=-1),h=!0;var y=p;try{for(g(M),c=t(u);c!==null&&(!(c.expirationTime>M)||Q&&!G());){var q=c.callback;if(typeof q=="function"){c.callback=null,p=c.priorityLevel;var $=q(c.expirationTime<=M);M=e.unstable_now(),typeof $=="function"?c.callback=$:c===t(u)&&r(u),g(M)}else r(u);c=t(u)}if(c!==null)var d=!0;else{var k=t(s);k!==null&&ge(E,k.startTime-M),d=!1}return d}finally{c=null,p=y,h=!1}}var S=!1,T=null,D=-1,W=5,P=-1;function G(){return!(e.unstable_now()-P<W)}function H(){if(T!==null){var Q=e.unstable_now();P=Q;var M=!0;try{M=T(!0,Q)}finally{M?ne():(S=!1,T=null)}}else S=!1}var ne;if(typeof m=="function")ne=function(){m(H)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,re=le.port2;le.port1.onmessage=H,ne=function(){re.postMessage(null)}}else ne=function(){R(H,0)};function ae(Q){T=Q,S||(S=!0,ne())}function ge(Q,M){D=R(function(){Q(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Q){Q.callback=null},e.unstable_continueExecution=function(){w||h||(w=!0,ae(I))},e.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<Q?Math.floor(1e3/Q):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(Q){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var y=p;p=M;try{return Q()}finally{p=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Q,M){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var y=p;p=Q;try{return M()}finally{p=y}},e.unstable_scheduleCallback=function(Q,M,y){var q=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?q+y:q):y=q,Q){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=y+$,Q={id:f++,callback:M,priorityLevel:Q,startTime:y,expirationTime:$,sortIndex:-1},y>q?(Q.sortIndex=y,n(s,Q),t(u)===null&&Q===t(s)&&(b?(v(D),D=-1):b=!0,ge(E,y-q))):(Q.sortIndex=$,n(u,Q),w||h||(w=!0,ae(I))),Q},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(Q){var M=p;return function(){var y=p;p=M;try{return Q.apply(this,arguments)}finally{p=y}}}})(Bh);$h.exports=Bh;var Xy=$h.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy=jn,gn=Xy;function V(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hh=new Set,hi={};function Gt(e,n){xr(e,n),xr(e+"Capture",n)}function xr(e,n){for(hi[e]=n,e=0;e<n.length;e++)Hh.add(n[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=Object.prototype.hasOwnProperty,Zy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nc={},Dc={};function Ky(e){return lu.call(Dc,e)?!0:lu.call(Nc,e)?!1:Zy.test(e)?Dc[e]=!0:(Nc[e]=!0,!1)}function e1(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function n1(e,n,t,r){if(n===null||typeof n>"u"||e1(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function nn(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new nn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ve[n]=new nn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new nn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new nn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new nn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new nn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new nn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new nn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new nn(e,5,!1,e.toLowerCase(),null,!1,!1)});var As=/[\-:]([a-z])/g;function Ps(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(As,Ps);Ve[n]=new nn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(As,Ps);Ve[n]=new nn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(As,Ps);Ve[n]=new nn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new nn(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new nn(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cs(e,n,t,r){var i=Ve.hasOwnProperty(n)?Ve[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n1(n,t,i,r)&&(t=null),r||i===null?Ky(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var lt=Jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ui=Symbol.for("react.element"),nr=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),Is=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),Uh=Symbol.for("react.provider"),qh=Symbol.for("react.context"),Ts=Symbol.for("react.forward_ref"),uu=Symbol.for("react.suspense"),su=Symbol.for("react.suspense_list"),Ms=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),Vh=Symbol.for("react.offscreen"),$c=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=$c&&e[$c]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Object.assign,$l;function Xr(e){if($l===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);$l=n&&n[1]||""}return`
`+$l+e}var Bl=!1;function Hl(e,n){if(!e||Bl)return"";Bl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Bl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Xr(e):""}function t1(e){switch(e.tag){case 5:return Xr(e.type);case 16:return Xr("Lazy");case 13:return Xr("Suspense");case 19:return Xr("SuspenseList");case 0:case 2:case 15:return e=Hl(e.type,!1),e;case 11:return e=Hl(e.type.render,!1),e;case 1:return e=Hl(e.type,!0),e;default:return""}}function cu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case nr:return"Portal";case au:return"Profiler";case Is:return"StrictMode";case uu:return"Suspense";case su:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qh:return(e.displayName||"Context")+".Consumer";case Uh:return(e._context.displayName||"Context")+".Provider";case Ts:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ms:return n=e.displayName||null,n!==null?n:cu(e.type)||"Memo";case ft:n=e._payload,e=e._init;try{return cu(e(n))}catch{}}return null}function r1(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cu(n);case 8:return n===Is?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wh(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function i1(e){var n=Wh(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qi(e){e._valueTracker||(e._valueTracker=i1(e))}function Qh(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Wh(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fu(e,n){var t=n.checked;return Ae({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Bc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=bt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Gh(e,n){n=n.checked,n!=null&&Cs(e,"checked",n,!1)}function pu(e,n){Gh(e,n);var t=bt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?hu(e,n.type,t):n.hasOwnProperty("defaultValue")&&hu(e,n.type,bt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Hc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function hu(e,n,t){(n!=="number"||Ro(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Jr=Array.isArray;function dr(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+bt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function du(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ae({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(V(92));if(Jr(t)){if(1<t.length)throw Error(V(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:bt(t)}}function Yh(e,n){var t=bt(n.value),r=bt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function qc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Xh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mu(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Xh(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vi,Jh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Vi=Vi||document.createElement("div"),Vi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function di(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o1=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(e){o1.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ti[n]=ti[e]})});function Zh(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ti.hasOwnProperty(e)&&ti[e]?(""+n).trim():n+"px"}function Kh(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Zh(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var l1=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gu(e,n){if(n){if(l1[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(V(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(V(61))}if(n.style!=null&&typeof n.style!="object")throw Error(V(62))}}function yu(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vu=null;function js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wu=null,mr=null,gr=null;function Vc(e){if(e=zi(e)){if(typeof wu!="function")throw Error(V(280));var n=e.stateNode;n&&(n=vl(n),wu(e.stateNode,e.type,n))}}function ed(e){mr?gr?gr.push(e):gr=[e]:mr=e}function nd(){if(mr){var e=mr,n=gr;if(gr=mr=null,Vc(e),n)for(e=0;e<n.length;e++)Vc(n[e])}}function td(e,n){return e(n)}function rd(){}var Ul=!1;function id(e,n,t){if(Ul)return e(n,t);Ul=!0;try{return td(e,n,t)}finally{Ul=!1,(mr!==null||gr!==null)&&(rd(),nd())}}function mi(e,n){var t=e.stateNode;if(t===null)return null;var r=vl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(V(231,n,typeof t));return t}var ku=!1;if(tt)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){ku=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{ku=!1}function a1(e,n,t,r,i,o,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(f){this.onError(f)}}var ri=!1,Lo=null,Fo=!1,xu=null,u1={onError:function(e){ri=!0,Lo=e}};function s1(e,n,t,r,i,o,l,a,u){ri=!1,Lo=null,a1.apply(u1,arguments)}function c1(e,n,t,r,i,o,l,a,u){if(s1.apply(this,arguments),ri){if(ri){var s=Lo;ri=!1,Lo=null}else throw Error(V(198));Fo||(Fo=!0,xu=s)}}function Yt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function od(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Wc(e){if(Yt(e)!==e)throw Error(V(188))}function f1(e){var n=e.alternate;if(!n){if(n=Yt(e),n===null)throw Error(V(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Wc(i),e;if(o===r)return Wc(i),n;o=o.sibling}throw Error(V(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l)throw Error(V(189))}}if(t.alternate!==r)throw Error(V(190))}if(t.tag!==3)throw Error(V(188));return t.stateNode.current===t?e:n}function ld(e){return e=f1(e),e!==null?ad(e):null}function ad(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ad(e);if(n!==null)return n;e=e.sibling}return null}var ud=gn.unstable_scheduleCallback,Qc=gn.unstable_cancelCallback,p1=gn.unstable_shouldYield,h1=gn.unstable_requestPaint,Te=gn.unstable_now,d1=gn.unstable_getCurrentPriorityLevel,Os=gn.unstable_ImmediatePriority,sd=gn.unstable_UserBlockingPriority,No=gn.unstable_NormalPriority,m1=gn.unstable_LowPriority,cd=gn.unstable_IdlePriority,dl=null,qn=null;function g1(e){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(dl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:w1,y1=Math.log,v1=Math.LN2;function w1(e){return e>>>=0,e===0?32:31-(y1(e)/v1|0)|0}var Wi=64,Qi=4194304;function Zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Do(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~i;a!==0?r=Zr(a):(o&=l,o!==0&&(r=Zr(o)))}else l=t&~i,l!==0?r=Zr(l):o!==0&&(r=Zr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ln(n),i=1<<t,r|=e[t],n&=~i;return r}function k1(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x1(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ln(o),a=1<<l,u=i[l];u===-1?(!(a&t)||a&r)&&(i[l]=k1(a,n)):u<=n&&(e.expiredLanes|=a),o&=~a}}function Su(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fd(){var e=Wi;return Wi<<=1,!(Wi&4194240)&&(Wi=64),e}function ql(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ji(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ln(n),e[n]=t}function S1(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ln(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function zs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ln(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ye=0;function pd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hd,Rs,dd,md,gd,Eu=!1,Gi=[],yt=null,vt=null,wt=null,gi=new Map,yi=new Map,ht=[],E1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gc(e,n){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":gi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(n.pointerId)}}function $r(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=zi(n),n!==null&&Rs(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function _1(e,n,t,r,i){switch(n){case"focusin":return yt=$r(yt,e,n,t,r,i),!0;case"dragenter":return vt=$r(vt,e,n,t,r,i),!0;case"mouseover":return wt=$r(wt,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return gi.set(o,$r(gi.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,yi.set(o,$r(yi.get(o)||null,e,n,t,r,i)),!0}return!1}function yd(e){var n=Lt(e.target);if(n!==null){var t=Yt(n);if(t!==null){if(n=t.tag,n===13){if(n=od(t),n!==null){e.blockedOn=n,gd(e.priority,function(){dd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=_u(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);vu=r,t.target.dispatchEvent(r),vu=null}else return n=zi(t),n!==null&&Rs(n),e.blockedOn=t,!1;n.shift()}return!0}function Yc(e,n,t){po(e)&&t.delete(n)}function b1(){Eu=!1,yt!==null&&po(yt)&&(yt=null),vt!==null&&po(vt)&&(vt=null),wt!==null&&po(wt)&&(wt=null),gi.forEach(Yc),yi.forEach(Yc)}function Br(e,n){e.blockedOn===n&&(e.blockedOn=null,Eu||(Eu=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,b1)))}function vi(e){function n(i){return Br(i,e)}if(0<Gi.length){Br(Gi[0],e);for(var t=1;t<Gi.length;t++){var r=Gi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(yt!==null&&Br(yt,e),vt!==null&&Br(vt,e),wt!==null&&Br(wt,e),gi.forEach(n),yi.forEach(n),t=0;t<ht.length;t++)r=ht[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<ht.length&&(t=ht[0],t.blockedOn===null);)yd(t),t.blockedOn===null&&ht.shift()}var yr=lt.ReactCurrentBatchConfig,$o=!0;function A1(e,n,t,r){var i=ye,o=yr.transition;yr.transition=null;try{ye=1,Ls(e,n,t,r)}finally{ye=i,yr.transition=o}}function P1(e,n,t,r){var i=ye,o=yr.transition;yr.transition=null;try{ye=4,Ls(e,n,t,r)}finally{ye=i,yr.transition=o}}function Ls(e,n,t,r){if($o){var i=_u(e,n,t,r);if(i===null)ea(e,n,r,Bo,t),Gc(e,r);else if(_1(i,e,n,t,r))r.stopPropagation();else if(Gc(e,r),n&4&&-1<E1.indexOf(e)){for(;i!==null;){var o=zi(i);if(o!==null&&hd(o),o=_u(e,n,t,r),o===null&&ea(e,n,r,Bo,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else ea(e,n,r,null,t)}}var Bo=null;function _u(e,n,t,r){if(Bo=null,e=js(r),e=Lt(e),e!==null)if(n=Yt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=od(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Bo=e,null}function vd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d1()){case Os:return 1;case sd:return 4;case No:case m1:return 16;case cd:return 536870912;default:return 16}default:return 16}}var mt=null,Fs=null,ho=null;function wd(){if(ho)return ho;var e,n=Fs,t=n.length,r,i="value"in mt?mt.value:mt.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return ho=i.slice(e,1<r?1-r:void 0)}function mo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yi(){return!0}function Xc(){return!1}function vn(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yi:Xc,this.isPropagationStopped=Xc,this}return Ae(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Yi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Yi)},persist:function(){},isPersistent:Yi}),n}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=vn(jr),Oi=Ae({},jr,{view:0,detail:0}),C1=vn(Oi),Vl,Wl,Hr,ml=Ae({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(Vl=e.screenX-Hr.screenX,Wl=e.screenY-Hr.screenY):Wl=Vl=0,Hr=e),Vl)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),Jc=vn(ml),I1=Ae({},ml,{dataTransfer:0}),T1=vn(I1),M1=Ae({},Oi,{relatedTarget:0}),Ql=vn(M1),j1=Ae({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),O1=vn(j1),z1=Ae({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R1=vn(z1),L1=Ae({},jr,{data:0}),Zc=vn(L1),F1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=D1[e])?!!n[e]:!1}function Ds(){return $1}var B1=Ae({},Oi,{key:function(e){if(e.key){var n=F1[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ds,charCode:function(e){return e.type==="keypress"?mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),H1=vn(B1),U1=Ae({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=vn(U1),q1=Ae({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ds}),V1=vn(q1),W1=Ae({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q1=vn(W1),G1=Ae({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Y1=vn(G1),X1=[9,13,27,32],$s=tt&&"CompositionEvent"in window,ii=null;tt&&"documentMode"in document&&(ii=document.documentMode);var J1=tt&&"TextEvent"in window&&!ii,kd=tt&&(!$s||ii&&8<ii&&11>=ii),ef=" ",nf=!1;function xd(e,n){switch(e){case"keyup":return X1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function Z1(e,n){switch(e){case"compositionend":return Sd(n);case"keypress":return n.which!==32?null:(nf=!0,ef);case"textInput":return e=n.data,e===ef&&nf?null:e;default:return null}}function K1(e,n){if(rr)return e==="compositionend"||!$s&&xd(e,n)?(e=wd(),ho=Fs=mt=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kd&&n.locale!=="ko"?null:n.data;default:return null}}var e0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!e0[e.type]:n==="textarea"}function Ed(e,n,t,r){ed(r),n=Ho(n,"onChange"),0<n.length&&(t=new Ns("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var oi=null,wi=null;function n0(e){zd(e,0)}function gl(e){var n=lr(e);if(Qh(n))return e}function t0(e,n){if(e==="change")return n}var _d=!1;if(tt){var Gl;if(tt){var Yl="oninput"in document;if(!Yl){var rf=document.createElement("div");rf.setAttribute("oninput","return;"),Yl=typeof rf.oninput=="function"}Gl=Yl}else Gl=!1;_d=Gl&&(!document.documentMode||9<document.documentMode)}function of(){oi&&(oi.detachEvent("onpropertychange",bd),wi=oi=null)}function bd(e){if(e.propertyName==="value"&&gl(wi)){var n=[];Ed(n,wi,e,js(e)),id(n0,n)}}function r0(e,n,t){e==="focusin"?(of(),oi=n,wi=t,oi.attachEvent("onpropertychange",bd)):e==="focusout"&&of()}function i0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(wi)}function o0(e,n){if(e==="click")return gl(n)}function l0(e,n){if(e==="input"||e==="change")return gl(n)}function a0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Dn=typeof Object.is=="function"?Object.is:a0;function ki(e,n){if(Dn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!lu.call(n,i)||!Dn(e[i],n[i]))return!1}return!0}function lf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function af(e,n){var t=lf(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=lf(t)}}function Ad(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ad(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Pd(){for(var e=window,n=Ro();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ro(e.document)}return n}function Bs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function u0(e){var n=Pd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ad(t.ownerDocument.documentElement,t)){if(r!==null&&Bs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=af(t,o);var l=af(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var s0=tt&&"documentMode"in document&&11>=document.documentMode,ir=null,bu=null,li=null,Au=!1;function uf(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Au||ir==null||ir!==Ro(r)||(r=ir,"selectionStart"in r&&Bs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),li&&ki(li,r)||(li=r,r=Ho(bu,"onSelect"),0<r.length&&(n=new Ns("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ir)))}function Xi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var or={animationend:Xi("Animation","AnimationEnd"),animationiteration:Xi("Animation","AnimationIteration"),animationstart:Xi("Animation","AnimationStart"),transitionend:Xi("Transition","TransitionEnd")},Xl={},Cd={};tt&&(Cd=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function yl(e){if(Xl[e])return Xl[e];if(!or[e])return e;var n=or[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Cd)return Xl[e]=n[t];return e}var Id=yl("animationend"),Td=yl("animationiteration"),Md=yl("animationstart"),jd=yl("transitionend"),Od=new Map,sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,n){Od.set(e,n),Gt(n,[e])}for(var Jl=0;Jl<sf.length;Jl++){var Zl=sf[Jl],c0=Zl.toLowerCase(),f0=Zl[0].toUpperCase()+Zl.slice(1);Ct(c0,"on"+f0)}Ct(Id,"onAnimationEnd");Ct(Td,"onAnimationIteration");Ct(Md,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(jd,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function cf(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,c1(r,n,void 0,e),e.currentTarget=null}function zd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;cf(i,a,s),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;cf(i,a,s),o=u}}}if(Fo)throw e=xu,Fo=!1,xu=null,e}function xe(e,n){var t=n[Mu];t===void 0&&(t=n[Mu]=new Set);var r=e+"__bubble";t.has(r)||(Rd(n,e,2,!1),t.add(r))}function Kl(e,n,t){var r=0;n&&(r|=4),Rd(t,e,r,n)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function xi(e){if(!e[Ji]){e[Ji]=!0,Hh.forEach(function(t){t!=="selectionchange"&&(p0.has(t)||Kl(t,!1,e),Kl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ji]||(n[Ji]=!0,Kl("selectionchange",!1,n))}}function Rd(e,n,t,r){switch(vd(n)){case 1:var i=A1;break;case 4:i=P1;break;default:i=Ls}t=i.bind(null,n,t,e),i=void 0,!ku||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function ea(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Lt(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}id(function(){var s=o,f=js(t),c=[];e:{var p=Od.get(e);if(p!==void 0){var h=Ns,w=e;switch(e){case"keypress":if(mo(t)===0)break e;case"keydown":case"keyup":h=H1;break;case"focusin":w="focus",h=Ql;break;case"focusout":w="blur",h=Ql;break;case"beforeblur":case"afterblur":h=Ql;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=T1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=V1;break;case Id:case Td:case Md:h=O1;break;case jd:h=Q1;break;case"scroll":h=C1;break;case"wheel":h=Y1;break;case"copy":case"cut":case"paste":h=R1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Kc}var b=(n&4)!==0,R=!b&&e==="scroll",v=b?p!==null?p+"Capture":null:p;b=[];for(var m=s,g;m!==null;){g=m;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,v!==null&&(E=mi(m,v),E!=null&&b.push(Si(m,E,g)))),R)break;m=m.return}0<b.length&&(p=new h(p,w,null,t,f),c.push({event:p,listeners:b}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&t!==vu&&(w=t.relatedTarget||t.fromElement)&&(Lt(w)||w[rt]))break e;if((h||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(w=t.relatedTarget||t.toElement,h=s,w=w?Lt(w):null,w!==null&&(R=Yt(w),w!==R||w.tag!==5&&w.tag!==6)&&(w=null)):(h=null,w=s),h!==w)){if(b=Jc,E="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=Kc,E="onPointerLeave",v="onPointerEnter",m="pointer"),R=h==null?p:lr(h),g=w==null?p:lr(w),p=new b(E,m+"leave",h,t,f),p.target=R,p.relatedTarget=g,E=null,Lt(f)===s&&(b=new b(v,m+"enter",w,t,f),b.target=g,b.relatedTarget=R,E=b),R=E,h&&w)n:{for(b=h,v=w,m=0,g=b;g;g=Xt(g))m++;for(g=0,E=v;E;E=Xt(E))g++;for(;0<m-g;)b=Xt(b),m--;for(;0<g-m;)v=Xt(v),g--;for(;m--;){if(b===v||v!==null&&b===v.alternate)break n;b=Xt(b),v=Xt(v)}b=null}else b=null;h!==null&&ff(c,p,h,b,!1),w!==null&&R!==null&&ff(c,R,w,b,!0)}}e:{if(p=s?lr(s):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var I=t0;else if(tf(p))if(_d)I=l0;else{I=i0;var S=r0}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(I=o0);if(I&&(I=I(e,s))){Ed(c,I,t,f);break e}S&&S(e,p,s),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&hu(p,"number",p.value)}switch(S=s?lr(s):window,e){case"focusin":(tf(S)||S.contentEditable==="true")&&(ir=S,bu=s,li=null);break;case"focusout":li=bu=ir=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,uf(c,t,f);break;case"selectionchange":if(s0)break;case"keydown":case"keyup":uf(c,t,f)}var T;if($s)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else rr?xd(e,t)&&(D="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(D="onCompositionStart");D&&(kd&&t.locale!=="ko"&&(rr||D!=="onCompositionStart"?D==="onCompositionEnd"&&rr&&(T=wd()):(mt=f,Fs="value"in mt?mt.value:mt.textContent,rr=!0)),S=Ho(s,D),0<S.length&&(D=new Zc(D,e,null,t,f),c.push({event:D,listeners:S}),T?D.data=T:(T=Sd(t),T!==null&&(D.data=T)))),(T=J1?Z1(e,t):K1(e,t))&&(s=Ho(s,"onBeforeInput"),0<s.length&&(f=new Zc("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:s}),f.data=T))}zd(c,n)})}function Si(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ho(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=mi(e,t),o!=null&&r.unshift(Si(e,o,i)),o=mi(e,n),o!=null&&r.push(Si(e,o,i))),e=e.return}return r}function Xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ff(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var a=t,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,i?(u=mi(t,o),u!=null&&l.unshift(Si(t,u,a))):i||(u=mi(t,o),u!=null&&l.push(Si(t,u,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var h0=/\r\n?/g,d0=/\u0000|\uFFFD/g;function pf(e){return(typeof e=="string"?e:""+e).replace(h0,`
`).replace(d0,"")}function Zi(e,n,t){if(n=pf(n),pf(e)!==n&&t)throw Error(V(425))}function Uo(){}var Pu=null,Cu=null;function Iu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,m0=typeof clearTimeout=="function"?clearTimeout:void 0,hf=typeof Promise=="function"?Promise:void 0,g0=typeof queueMicrotask=="function"?queueMicrotask:typeof hf<"u"?function(e){return hf.resolve(null).then(e).catch(y0)}:Tu;function y0(e){setTimeout(function(){throw e})}function na(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),vi(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);vi(n)}function kt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function df(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Or=Math.random().toString(36).slice(2),Un="__reactFiber$"+Or,Ei="__reactProps$"+Or,rt="__reactContainer$"+Or,Mu="__reactEvents$"+Or,v0="__reactListeners$"+Or,w0="__reactHandles$"+Or;function Lt(e){var n=e[Un];if(n)return n;for(var t=e.parentNode;t;){if(n=t[rt]||t[Un]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=df(e);e!==null;){if(t=e[Un])return t;e=df(e)}return n}e=t,t=e.parentNode}return null}function zi(e){return e=e[Un]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function vl(e){return e[Ei]||null}var ju=[],ar=-1;function It(e){return{current:e}}function Se(e){0>ar||(e.current=ju[ar],ju[ar]=null,ar--)}function ke(e,n){ar++,ju[ar]=e.current,e.current=n}var At={},Ye=It(At),an=It(!1),Ht=At;function Sr(e,n){var t=e.type.contextTypes;if(!t)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function un(e){return e=e.childContextTypes,e!=null}function qo(){Se(an),Se(Ye)}function mf(e,n,t){if(Ye.current!==At)throw Error(V(168));ke(Ye,n),ke(an,t)}function Ld(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(V(108,r1(e)||"Unknown",i));return Ae({},t,r)}function Vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,Ht=Ye.current,ke(Ye,e),ke(an,an.current),!0}function gf(e,n,t){var r=e.stateNode;if(!r)throw Error(V(169));t?(e=Ld(e,n,Ht),r.__reactInternalMemoizedMergedChildContext=e,Se(an),Se(Ye),ke(Ye,e)):Se(an),ke(an,t)}var Zn=null,wl=!1,ta=!1;function Fd(e){Zn===null?Zn=[e]:Zn.push(e)}function k0(e){wl=!0,Fd(e)}function Tt(){if(!ta&&Zn!==null){ta=!0;var e=0,n=ye;try{var t=Zn;for(ye=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Zn=null,wl=!1}catch(i){throw Zn!==null&&(Zn=Zn.slice(e+1)),ud(Os,Tt),i}finally{ye=n,ta=!1}}return null}var ur=[],sr=0,Wo=null,Qo=0,xn=[],Sn=0,Ut=null,Kn=1,et="";function zt(e,n){ur[sr++]=Qo,ur[sr++]=Wo,Wo=e,Qo=n}function Nd(e,n,t){xn[Sn++]=Kn,xn[Sn++]=et,xn[Sn++]=Ut,Ut=e;var r=Kn;e=et;var i=32-Ln(r)-1;r&=~(1<<i),t+=1;var o=32-Ln(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Kn=1<<32-Ln(n)+i|t<<i|r,et=o+e}else Kn=1<<o|t<<i|r,et=e}function Hs(e){e.return!==null&&(zt(e,1),Nd(e,1,0))}function Us(e){for(;e===Wo;)Wo=ur[--sr],ur[sr]=null,Qo=ur[--sr],ur[sr]=null;for(;e===Ut;)Ut=xn[--Sn],xn[Sn]=null,et=xn[--Sn],xn[Sn]=null,Kn=xn[--Sn],xn[Sn]=null}var dn=null,hn=null,Ee=!1,Rn=null;function Dd(e,n){var t=_n(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function yf(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,dn=e,hn=kt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,dn=e,hn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Ut!==null?{id:Kn,overflow:et}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=_n(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,dn=e,hn=null,!0):!1;default:return!1}}function Ou(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zu(e){if(Ee){var n=hn;if(n){var t=n;if(!yf(e,n)){if(Ou(e))throw Error(V(418));n=kt(t.nextSibling);var r=dn;n&&yf(e,n)?Dd(r,t):(e.flags=e.flags&-4097|2,Ee=!1,dn=e)}}else{if(Ou(e))throw Error(V(418));e.flags=e.flags&-4097|2,Ee=!1,dn=e}}}function vf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dn=e}function Ki(e){if(e!==dn)return!1;if(!Ee)return vf(e),Ee=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Iu(e.type,e.memoizedProps)),n&&(n=hn)){if(Ou(e))throw $d(),Error(V(418));for(;n;)Dd(e,n),n=kt(n.nextSibling)}if(vf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){hn=kt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}hn=null}}else hn=dn?kt(e.stateNode.nextSibling):null;return!0}function $d(){for(var e=hn;e;)e=kt(e.nextSibling)}function Er(){hn=dn=null,Ee=!1}function qs(e){Rn===null?Rn=[e]:Rn.push(e)}var x0=lt.ReactCurrentBatchConfig;function Ur(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(V(309));var r=t.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(V(284));if(!t._owner)throw Error(V(290,e))}return e}function eo(e,n){throw e=Object.prototype.toString.call(n),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function wf(e){var n=e._init;return n(e._payload)}function Bd(e){function n(v,m){if(e){var g=v.deletions;g===null?(v.deletions=[m],v.flags|=16):g.push(m)}}function t(v,m){if(!e)return null;for(;m!==null;)n(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=_t(v,m),v.index=0,v.sibling=null,v}function o(v,m,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<m?(v.flags|=2,m):g):(v.flags|=2,m)):(v.flags|=1048576,m)}function l(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,m,g,E){return m===null||m.tag!==6?(m=sa(g,v.mode,E),m.return=v,m):(m=i(m,g),m.return=v,m)}function u(v,m,g,E){var I=g.type;return I===tr?f(v,m,g.props.children,E,g.key):m!==null&&(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ft&&wf(I)===m.type)?(E=i(m,g.props),E.ref=Ur(v,m,g),E.return=v,E):(E=So(g.type,g.key,g.props,null,v.mode,E),E.ref=Ur(v,m,g),E.return=v,E)}function s(v,m,g,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=ca(g,v.mode,E),m.return=v,m):(m=i(m,g.children||[]),m.return=v,m)}function f(v,m,g,E,I){return m===null||m.tag!==7?(m=$t(g,v.mode,E,I),m.return=v,m):(m=i(m,g),m.return=v,m)}function c(v,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=sa(""+m,v.mode,g),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ui:return g=So(m.type,m.key,m.props,null,v.mode,g),g.ref=Ur(v,null,m),g.return=v,g;case nr:return m=ca(m,v.mode,g),m.return=v,m;case ft:var E=m._init;return c(v,E(m._payload),g)}if(Jr(m)||Nr(m))return m=$t(m,v.mode,g,null),m.return=v,m;eo(v,m)}return null}function p(v,m,g,E){var I=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(v,m,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ui:return g.key===I?u(v,m,g,E):null;case nr:return g.key===I?s(v,m,g,E):null;case ft:return I=g._init,p(v,m,I(g._payload),E)}if(Jr(g)||Nr(g))return I!==null?null:f(v,m,g,E,null);eo(v,g)}return null}function h(v,m,g,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(g)||null,a(m,v,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ui:return v=v.get(E.key===null?g:E.key)||null,u(m,v,E,I);case nr:return v=v.get(E.key===null?g:E.key)||null,s(m,v,E,I);case ft:var S=E._init;return h(v,m,g,S(E._payload),I)}if(Jr(E)||Nr(E))return v=v.get(g)||null,f(m,v,E,I,null);eo(m,E)}return null}function w(v,m,g,E){for(var I=null,S=null,T=m,D=m=0,W=null;T!==null&&D<g.length;D++){T.index>D?(W=T,T=null):W=T.sibling;var P=p(v,T,g[D],E);if(P===null){T===null&&(T=W);break}e&&T&&P.alternate===null&&n(v,T),m=o(P,m,D),S===null?I=P:S.sibling=P,S=P,T=W}if(D===g.length)return t(v,T),Ee&&zt(v,D),I;if(T===null){for(;D<g.length;D++)T=c(v,g[D],E),T!==null&&(m=o(T,m,D),S===null?I=T:S.sibling=T,S=T);return Ee&&zt(v,D),I}for(T=r(v,T);D<g.length;D++)W=h(T,v,D,g[D],E),W!==null&&(e&&W.alternate!==null&&T.delete(W.key===null?D:W.key),m=o(W,m,D),S===null?I=W:S.sibling=W,S=W);return e&&T.forEach(function(G){return n(v,G)}),Ee&&zt(v,D),I}function b(v,m,g,E){var I=Nr(g);if(typeof I!="function")throw Error(V(150));if(g=I.call(g),g==null)throw Error(V(151));for(var S=I=null,T=m,D=m=0,W=null,P=g.next();T!==null&&!P.done;D++,P=g.next()){T.index>D?(W=T,T=null):W=T.sibling;var G=p(v,T,P.value,E);if(G===null){T===null&&(T=W);break}e&&T&&G.alternate===null&&n(v,T),m=o(G,m,D),S===null?I=G:S.sibling=G,S=G,T=W}if(P.done)return t(v,T),Ee&&zt(v,D),I;if(T===null){for(;!P.done;D++,P=g.next())P=c(v,P.value,E),P!==null&&(m=o(P,m,D),S===null?I=P:S.sibling=P,S=P);return Ee&&zt(v,D),I}for(T=r(v,T);!P.done;D++,P=g.next())P=h(T,v,D,P.value,E),P!==null&&(e&&P.alternate!==null&&T.delete(P.key===null?D:P.key),m=o(P,m,D),S===null?I=P:S.sibling=P,S=P);return e&&T.forEach(function(H){return n(v,H)}),Ee&&zt(v,D),I}function R(v,m,g,E){if(typeof g=="object"&&g!==null&&g.type===tr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ui:e:{for(var I=g.key,S=m;S!==null;){if(S.key===I){if(I=g.type,I===tr){if(S.tag===7){t(v,S.sibling),m=i(S,g.props.children),m.return=v,v=m;break e}}else if(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ft&&wf(I)===S.type){t(v,S.sibling),m=i(S,g.props),m.ref=Ur(v,S,g),m.return=v,v=m;break e}t(v,S);break}else n(v,S);S=S.sibling}g.type===tr?(m=$t(g.props.children,v.mode,E,g.key),m.return=v,v=m):(E=So(g.type,g.key,g.props,null,v.mode,E),E.ref=Ur(v,m,g),E.return=v,v=E)}return l(v);case nr:e:{for(S=g.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){t(v,m.sibling),m=i(m,g.children||[]),m.return=v,v=m;break e}else{t(v,m);break}else n(v,m);m=m.sibling}m=ca(g,v.mode,E),m.return=v,v=m}return l(v);case ft:return S=g._init,R(v,m,S(g._payload),E)}if(Jr(g))return w(v,m,g,E);if(Nr(g))return b(v,m,g,E);eo(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(t(v,m.sibling),m=i(m,g),m.return=v,v=m):(t(v,m),m=sa(g,v.mode,E),m.return=v,v=m),l(v)):t(v,m)}return R}var _r=Bd(!0),Hd=Bd(!1),Go=It(null),Yo=null,cr=null,Vs=null;function Ws(){Vs=cr=Yo=null}function Qs(e){var n=Go.current;Se(Go),e._currentValue=n}function Ru(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function vr(e,n){Yo=e,Vs=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(on=!0),e.firstContext=null)}function Pn(e){var n=e._currentValue;if(Vs!==e)if(e={context:e,memoizedValue:n,next:null},cr===null){if(Yo===null)throw Error(V(308));cr=e,Yo.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return n}var Ft=null;function Gs(e){Ft===null?Ft=[e]:Ft.push(e)}function Ud(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Gs(n)):(t.next=i.next,i.next=t),n.interleaved=t,it(e,r)}function it(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var pt=!1;function Ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function xt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,it(e,t)}return i=r.interleaved,i===null?(n.next=n,Gs(r)):(n.next=i.next,i.next=n),r.interleaved=n,it(e,t)}function go(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zs(e,t)}}function kf(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Xo(e,n,t,r){var i=e.updateQueue;pt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?o=s:l.next=s,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=s:a.next=s,f.lastBaseUpdate=u))}if(o!==null){var c=i.baseState;l=0,f=s=u=null,a=o;do{var p=a.lane,h=a.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,b=a;switch(p=n,h=t,b.tag){case 1:if(w=b.payload,typeof w=="function"){c=w.call(h,c,p);break e}c=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,p=typeof w=="function"?w.call(h,c,p):w,p==null)break e;c=Ae({},c,p);break e;case 2:pt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else h={eventTime:h,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(s=f=h,u=c):f=f.next=h,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(u=c),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Vt|=l,e.lanes=l,e.memoizedState=c}}function xf(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Ri={},Vn=It(Ri),_i=It(Ri),bi=It(Ri);function Nt(e){if(e===Ri)throw Error(V(174));return e}function Xs(e,n){switch(ke(bi,n),ke(_i,e),ke(Vn,Ri),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:mu(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=mu(n,e)}Se(Vn),ke(Vn,n)}function br(){Se(Vn),Se(_i),Se(bi)}function Vd(e){Nt(bi.current);var n=Nt(Vn.current),t=mu(n,e.type);n!==t&&(ke(_i,e),ke(Vn,t))}function Js(e){_i.current===e&&(Se(Vn),Se(_i))}var _e=It(0);function Jo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=[];function Zs(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var yo=lt.ReactCurrentDispatcher,ia=lt.ReactCurrentBatchConfig,qt=0,be=null,ze=null,Fe=null,Zo=!1,ai=!1,Ai=0,S0=0;function We(){throw Error(V(321))}function Ks(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Dn(e[t],n[t]))return!1;return!0}function ec(e,n,t,r,i,o){if(qt=o,be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,yo.current=e===null||e.memoizedState===null?A0:P0,e=t(r,i),ai){o=0;do{if(ai=!1,Ai=0,25<=o)throw Error(V(301));o+=1,Fe=ze=null,n.updateQueue=null,yo.current=C0,e=t(r,i)}while(ai)}if(yo.current=Ko,n=ze!==null&&ze.next!==null,qt=0,Fe=ze=be=null,Zo=!1,n)throw Error(V(300));return e}function nc(){var e=Ai!==0;return Ai=0,e}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?be.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Cn(){if(ze===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=Fe===null?be.memoizedState:Fe.next;if(n!==null)Fe=n,ze=e;else{if(e===null)throw Error(V(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Fe===null?be.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Pi(e,n){return typeof n=="function"?n(e):n}function oa(e){var n=Cn(),t=n.queue;if(t===null)throw Error(V(311));t.lastRenderedReducer=e;var r=ze,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,s=o;do{var f=s.lane;if((qt&f)===f)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var c={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=c,l=r):u=u.next=c,be.lanes|=f,Vt|=f}s=s.next}while(s!==null&&s!==o);u===null?l=r:u.next=a,Dn(r,n.memoizedState)||(on=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,be.lanes|=o,Vt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function la(e){var n=Cn(),t=n.queue;if(t===null)throw Error(V(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Dn(o,n.memoizedState)||(on=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Wd(){}function Qd(e,n){var t=be,r=Cn(),i=n(),o=!Dn(r.memoizedState,i);if(o&&(r.memoizedState=i,on=!0),r=r.queue,tc(Xd.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Fe!==null&&Fe.memoizedState.tag&1){if(t.flags|=2048,Ci(9,Yd.bind(null,t,r,i,n),void 0,null),De===null)throw Error(V(349));qt&30||Gd(t,n,i)}return i}function Gd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=be.updateQueue,n===null?(n={lastEffect:null,stores:null},be.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Yd(e,n,t,r){n.value=t,n.getSnapshot=r,Jd(n)&&Zd(e)}function Xd(e,n,t){return t(function(){Jd(n)&&Zd(e)})}function Jd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Dn(e,t)}catch{return!0}}function Zd(e){var n=it(e,1);n!==null&&Fn(n,e,1,-1)}function Sf(e){var n=Bn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},n.queue=e,e=e.dispatch=b0.bind(null,be,e),[n.memoizedState,e]}function Ci(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=be.updateQueue,n===null?(n={lastEffect:null,stores:null},be.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Kd(){return Cn().memoizedState}function vo(e,n,t,r){var i=Bn();be.flags|=e,i.memoizedState=Ci(1|n,t,void 0,r===void 0?null:r)}function kl(e,n,t,r){var i=Cn();r=r===void 0?null:r;var o=void 0;if(ze!==null){var l=ze.memoizedState;if(o=l.destroy,r!==null&&Ks(r,l.deps)){i.memoizedState=Ci(n,t,o,r);return}}be.flags|=e,i.memoizedState=Ci(1|n,t,o,r)}function Ef(e,n){return vo(8390656,8,e,n)}function tc(e,n){return kl(2048,8,e,n)}function em(e,n){return kl(4,2,e,n)}function nm(e,n){return kl(4,4,e,n)}function tm(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rm(e,n,t){return t=t!=null?t.concat([e]):null,kl(4,4,tm.bind(null,n,e),t)}function rc(){}function im(e,n){var t=Cn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ks(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function om(e,n){var t=Cn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ks(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function lm(e,n,t){return qt&21?(Dn(t,n)||(t=fd(),be.lanes|=t,Vt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,on=!0),e.memoizedState=t)}function E0(e,n){var t=ye;ye=t!==0&&4>t?t:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),n()}finally{ye=t,ia.transition=r}}function am(){return Cn().memoizedState}function _0(e,n,t){var r=Et(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},um(e))sm(n,t);else if(t=Ud(e,n,t,r),t!==null){var i=Ke();Fn(t,e,r,i),cm(t,n,r)}}function b0(e,n,t){var r=Et(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(um(e))sm(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,t);if(i.hasEagerState=!0,i.eagerState=a,Dn(a,l)){var u=n.interleaved;u===null?(i.next=i,Gs(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=Ud(e,n,i,r),t!==null&&(i=Ke(),Fn(t,e,r,i),cm(t,n,r))}}function um(e){var n=e.alternate;return e===be||n!==null&&n===be}function sm(e,n){ai=Zo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function cm(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zs(e,t)}}var Ko={readContext:Pn,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},A0={readContext:Pn,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Pn,useEffect:Ef,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,vo(4194308,4,tm.bind(null,n,e),t)},useLayoutEffect:function(e,n){return vo(4194308,4,e,n)},useInsertionEffect:function(e,n){return vo(4,2,e,n)},useMemo:function(e,n){var t=Bn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Bn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=_0.bind(null,be,e),[r.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:Sf,useDebugValue:rc,useDeferredValue:function(e){return Bn().memoizedState=e},useTransition:function(){var e=Sf(!1),n=e[0];return e=E0.bind(null,e[1]),Bn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=be,i=Bn();if(Ee){if(t===void 0)throw Error(V(407));t=t()}else{if(t=n(),De===null)throw Error(V(349));qt&30||Gd(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Ef(Xd.bind(null,r,o,e),[e]),r.flags|=2048,Ci(9,Yd.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Bn(),n=De.identifierPrefix;if(Ee){var t=et,r=Kn;t=(r&~(1<<32-Ln(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ai++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=S0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},P0={readContext:Pn,useCallback:im,useContext:Pn,useEffect:tc,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:nm,useMemo:om,useReducer:oa,useRef:Kd,useState:function(){return oa(Pi)},useDebugValue:rc,useDeferredValue:function(e){var n=Cn();return lm(n,ze.memoizedState,e)},useTransition:function(){var e=oa(Pi)[0],n=Cn().memoizedState;return[e,n]},useMutableSource:Wd,useSyncExternalStore:Qd,useId:am,unstable_isNewReconciler:!1},C0={readContext:Pn,useCallback:im,useContext:Pn,useEffect:tc,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:nm,useMemo:om,useReducer:la,useRef:Kd,useState:function(){return la(Pi)},useDebugValue:rc,useDeferredValue:function(e){var n=Cn();return ze===null?n.memoizedState=e:lm(n,ze.memoizedState,e)},useTransition:function(){var e=la(Pi)[0],n=Cn().memoizedState;return[e,n]},useMutableSource:Wd,useSyncExternalStore:Qd,useId:am,unstable_isNewReconciler:!1};function On(e,n){if(e&&e.defaultProps){n=Ae({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Lu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Ae({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xl={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ke(),i=Et(e),o=nt(r,i);o.payload=n,t!=null&&(o.callback=t),n=xt(e,o,i),n!==null&&(Fn(n,e,i,r),go(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ke(),i=Et(e),o=nt(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=xt(e,o,i),n!==null&&(Fn(n,e,i,r),go(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ke(),r=Et(e),i=nt(t,r);i.tag=2,n!=null&&(i.callback=n),n=xt(e,i,r),n!==null&&(Fn(n,e,r,t),go(n,e,r))}};function _f(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!ki(t,r)||!ki(i,o):!0}function fm(e,n,t){var r=!1,i=At,o=n.contextType;return typeof o=="object"&&o!==null?o=Pn(o):(i=un(n)?Ht:Ye.current,r=n.contextTypes,o=(r=r!=null)?Sr(e,i):At),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function bf(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&xl.enqueueReplaceState(n,n.state,null)}function Fu(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ys(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Pn(o):(o=un(n)?Ht:Ye.current,i.context=Sr(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Lu(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&xl.enqueueReplaceState(i,i.state,null),Xo(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,n){try{var t="",r=n;do t+=t1(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function aa(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Nu(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var I0=typeof WeakMap=="function"?WeakMap:Map;function pm(e,n,t){t=nt(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){nl||(nl=!0,Gu=r),Nu(e,n)},t}function hm(e,n,t){t=nt(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Nu(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Nu(e,n),typeof r!="function"&&(St===null?St=new Set([this]):St.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Af(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new I0;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=U0.bind(null,e,n,t),n.then(e,e))}function Pf(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Cf(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=nt(-1,1),n.tag=2,xt(t,n,1))),t.lanes|=1),e)}var T0=lt.ReactCurrentOwner,on=!1;function Je(e,n,t,r){n.child=e===null?Hd(n,null,t,r):_r(n,e.child,t,r)}function If(e,n,t,r,i){t=t.render;var o=n.ref;return vr(n,i),r=ec(e,n,t,r,o,i),t=nc(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,ot(e,n,i)):(Ee&&t&&Hs(n),n.flags|=1,Je(e,n,r,i),n.child)}function Tf(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!fc(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,dm(e,n,o,r,i)):(e=So(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:ki,t(l,r)&&e.ref===n.ref)return ot(e,n,i)}return n.flags|=1,e=_t(o,r),e.ref=n.ref,e.return=n,n.child=e}function dm(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(ki(o,r)&&e.ref===n.ref)if(on=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(on=!0);else return n.lanes=e.lanes,ot(e,n,i)}return Du(e,n,t,r,i)}function mm(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(pr,pn),pn|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ke(pr,pn),pn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,ke(pr,pn),pn|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,ke(pr,pn),pn|=r;return Je(e,n,i,t),n.child}function gm(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Du(e,n,t,r,i){var o=un(t)?Ht:Ye.current;return o=Sr(n,o),vr(n,i),t=ec(e,n,t,r,o,i),r=nc(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,ot(e,n,i)):(Ee&&r&&Hs(n),n.flags|=1,Je(e,n,t,i),n.child)}function Mf(e,n,t,r,i){if(un(t)){var o=!0;Vo(n)}else o=!1;if(vr(n,i),n.stateNode===null)wo(e,n),fm(n,t,r),Fu(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var u=l.context,s=t.contextType;typeof s=="object"&&s!==null?s=Pn(s):(s=un(t)?Ht:Ye.current,s=Sr(n,s));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&bf(n,l,r,s),pt=!1;var p=n.memoizedState;l.state=p,Xo(n,r,l,i),u=n.memoizedState,a!==r||p!==u||an.current||pt?(typeof f=="function"&&(Lu(n,t,f,r),u=n.memoizedState),(a=pt||_f(n,t,a,r,p,u,s))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,qd(e,n),a=n.memoizedProps,s=n.type===n.elementType?a:On(n.type,a),l.props=s,c=n.pendingProps,p=l.context,u=t.contextType,typeof u=="object"&&u!==null?u=Pn(u):(u=un(t)?Ht:Ye.current,u=Sr(n,u));var h=t.getDerivedStateFromProps;(f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||p!==u)&&bf(n,l,r,u),pt=!1,p=n.memoizedState,l.state=p,Xo(n,r,l,i);var w=n.memoizedState;a!==c||p!==w||an.current||pt?(typeof h=="function"&&(Lu(n,t,h,r),w=n.memoizedState),(s=pt||_f(n,t,s,r,p,w,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),l.props=r,l.state=w,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return $u(e,n,t,r,o,i)}function $u(e,n,t,r,i,o){gm(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&gf(n,t,!1),ot(e,n,o);r=n.stateNode,T0.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=_r(n,e.child,null,o),n.child=_r(n,null,a,o)):Je(e,n,a,o),n.memoizedState=r.state,i&&gf(n,t,!0),n.child}function ym(e){var n=e.stateNode;n.pendingContext?mf(e,n.pendingContext,n.pendingContext!==n.context):n.context&&mf(e,n.context,!1),Xs(e,n.containerInfo)}function jf(e,n,t,r,i){return Er(),qs(i),n.flags|=256,Je(e,n,t,r),n.child}var Bu={dehydrated:null,treeContext:null,retryLane:0};function Hu(e){return{baseLanes:e,cachePool:null,transitions:null}}function vm(e,n,t){var r=n.pendingProps,i=_e.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ke(_e,i&1),e===null)return zu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=_l(l,r,0,null),e=$t(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Hu(t),n.memoizedState=Bu,e):ic(n,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return M0(e,n,l,r,a,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=_t(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=_t(a,o):(o=$t(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?Hu(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=Bu,r}return o=e.child,e=o.sibling,r=_t(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ic(e,n){return n=_l({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function no(e,n,t,r){return r!==null&&qs(r),_r(n,e.child,null,t),e=ic(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function M0(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=aa(Error(V(422))),no(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=_l({mode:"visible",children:r.children},i,0,null),o=$t(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&_r(n,e.child,null,l),n.child.memoizedState=Hu(l),n.memoizedState=Bu,o);if(!(n.mode&1))return no(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(V(419)),r=aa(o,r,void 0),no(e,n,l,r)}if(a=(l&e.childLanes)!==0,on||a){if(r=De,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,it(e,i),Fn(r,e,i,-1))}return cc(),r=aa(Error(V(421))),no(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=q0.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,hn=kt(i.nextSibling),dn=n,Ee=!0,Rn=null,e!==null&&(xn[Sn++]=Kn,xn[Sn++]=et,xn[Sn++]=Ut,Kn=e.id,et=e.overflow,Ut=n),n=ic(n,r.children),n.flags|=4096,n)}function Of(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ru(e.return,n,t)}function ua(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function wm(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(Je(e,n,r.children,t),r=_e.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Of(e,t,n);else if(e.tag===19)Of(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ke(_e,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Jo(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),ua(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Jo(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}ua(n,!0,t,null,o);break;case"together":ua(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function wo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ot(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Vt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(V(153));if(n.child!==null){for(e=n.child,t=_t(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=_t(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function j0(e,n,t){switch(n.tag){case 3:ym(n),Er();break;case 5:Vd(n);break;case 1:un(n.type)&&Vo(n);break;case 4:Xs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ke(Go,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ke(_e,_e.current&1),n.flags|=128,null):t&n.child.childLanes?vm(e,n,t):(ke(_e,_e.current&1),e=ot(e,n,t),e!==null?e.sibling:null);ke(_e,_e.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return wm(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(_e,_e.current),r)break;return null;case 22:case 23:return n.lanes=0,mm(e,n,t)}return ot(e,n,t)}var km,Uu,xm,Sm;km=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Uu=function(){};xm=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Nt(Vn.current);var o=null;switch(t){case"input":i=fu(e,i),r=fu(e,r),o=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),o=[];break;case"textarea":i=du(e,i),r=du(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Uo)}gu(t,r);var l;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var a=i[s];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hi.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var u=r[s];if(a=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(t||(t={}),t[l]=u[l])}else t||(o||(o=[]),o.push(s,t)),t=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(hi.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&xe("scroll",e),o||a===u||(o=[])):(o=o||[]).push(s,u))}t&&(o=o||[]).push("style",t);var s=o;(n.updateQueue=s)&&(n.flags|=4)}};Sm=function(e,n,t,r){t!==r&&(n.flags|=4)};function qr(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function O0(e,n,t){var r=n.pendingProps;switch(Us(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return un(n.type)&&qo(),Qe(n),null;case 3:return r=n.stateNode,br(),Se(an),Se(Ye),Zs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ki(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Rn!==null&&(Ju(Rn),Rn=null))),Uu(e,n),Qe(n),null;case 5:Js(n);var i=Nt(bi.current);if(t=n.type,e!==null&&n.stateNode!=null)xm(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(V(166));return Qe(n),null}if(e=Nt(Vn.current),Ki(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Un]=n,r[Ei]=o,e=(n.mode&1)!==0,t){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<Kr.length;i++)xe(Kr[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Bc(r,o),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},xe("invalid",r);break;case"textarea":Uc(r,o),xe("invalid",r)}gu(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,a,e),i=["children",""+a]):hi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&xe("scroll",r)}switch(t){case"input":qi(r),Hc(r,o,!0);break;case"textarea":qi(r),qc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Uo)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xh(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Un]=n,e[Ei]=r,km(e,n,!1,!1),n.stateNode=e;e:{switch(l=yu(t,r),t){case"dialog":xe("cancel",e),xe("close",e),i=r;break;case"iframe":case"object":case"embed":xe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Kr.length;i++)xe(Kr[i],e);i=r;break;case"source":xe("error",e),i=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),i=r;break;case"details":xe("toggle",e),i=r;break;case"input":Bc(e,r),i=fu(e,r),xe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),xe("invalid",e);break;case"textarea":Uc(e,r),i=du(e,r),xe("invalid",e);break;default:i=r}gu(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Kh(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Jh(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&di(e,u):typeof u=="number"&&di(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hi.hasOwnProperty(o)?u!=null&&o==="onScroll"&&xe("scroll",e):u!=null&&Cs(e,o,u,l))}switch(t){case"input":qi(e),Hc(e,r,!1);break;case"textarea":qi(e),qc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?dr(e,!!r.multiple,o,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Uo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Qe(n),null;case 6:if(e&&n.stateNode!=null)Sm(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(V(166));if(t=Nt(bi.current),Nt(Vn.current),Ki(n)){if(r=n.stateNode,t=n.memoizedProps,r[Un]=n,(o=r.nodeValue!==t)&&(e=dn,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Un]=n,n.stateNode=r}return Qe(n),null;case 13:if(Se(_e),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&hn!==null&&n.mode&1&&!(n.flags&128))$d(),Er(),n.flags|=98560,o=!1;else if(o=Ki(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[Un]=n}else Er(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Qe(n),o=!1}else Rn!==null&&(Ju(Rn),Rn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||_e.current&1?Re===0&&(Re=3):cc())),n.updateQueue!==null&&(n.flags|=4),Qe(n),null);case 4:return br(),Uu(e,n),e===null&&xi(n.stateNode.containerInfo),Qe(n),null;case 10:return Qs(n.type._context),Qe(n),null;case 17:return un(n.type)&&qo(),Qe(n),null;case 19:if(Se(_e),o=n.memoizedState,o===null)return Qe(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)qr(o,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Jo(e),l!==null){for(n.flags|=128,qr(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ke(_e,_e.current&1|2),n.child}e=e.sibling}o.tail!==null&&Te()>Pr&&(n.flags|=128,r=!0,qr(o,!1),n.lanes=4194304)}else{if(!r)if(e=Jo(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ee)return Qe(n),null}else 2*Te()-o.renderingStartTime>Pr&&t!==1073741824&&(n.flags|=128,r=!0,qr(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Te(),n.sibling=null,t=_e.current,ke(_e,r?t&1|2:t&1),n):(Qe(n),null);case 22:case 23:return sc(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?pn&1073741824&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),null;case 24:return null;case 25:return null}throw Error(V(156,n.tag))}function z0(e,n){switch(Us(n),n.tag){case 1:return un(n.type)&&qo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return br(),Se(an),Se(Ye),Zs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Js(n),null;case 13:if(Se(_e),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(V(340));Er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Se(_e),null;case 4:return br(),null;case 10:return Qs(n.type._context),null;case 22:case 23:return sc(),null;case 24:return null;default:return null}}var to=!1,Ge=!1,R0=typeof WeakSet=="function"?WeakSet:Set,Z=null;function fr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ce(e,n,r)}else t.current=null}function qu(e,n,t){try{t()}catch(r){Ce(e,n,r)}}var zf=!1;function L0(e,n){if(Pu=$o,e=Pd(),Bs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,u=-1,s=0,f=0,c=e,p=null;n:for(;;){for(var h;c!==t||i!==0&&c.nodeType!==3||(a=l+i),c!==o||r!==0&&c.nodeType!==3||(u=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(h=c.firstChild)!==null;)p=c,c=h;for(;;){if(c===e)break n;if(p===t&&++s===i&&(a=l),p===o&&++f===r&&(u=l),(h=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=h}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Cu={focusedElem:e,selectionRange:t},$o=!1,Z=n;Z!==null;)if(n=Z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Z=e;else for(;Z!==null;){n=Z;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,R=w.memoizedState,v=n.stateNode,m=v.getSnapshotBeforeUpdate(n.elementType===n.type?b:On(n.type,b),R);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(E){Ce(n,n.return,E)}if(e=n.sibling,e!==null){e.return=n.return,Z=e;break}Z=n.return}return w=zf,zf=!1,w}function ui(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&qu(n,t,o)}i=i.next}while(i!==r)}}function Sl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Vu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Em(e){var n=e.alternate;n!==null&&(e.alternate=null,Em(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Un],delete n[Ei],delete n[Mu],delete n[v0],delete n[w0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _m(e){return e.tag===5||e.tag===3||e.tag===4}function Rf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Uo));else if(r!==4&&(e=e.child,e!==null))for(Wu(e,n,t),e=e.sibling;e!==null;)Wu(e,n,t),e=e.sibling}function Qu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qu(e,n,t),e=e.sibling;e!==null;)Qu(e,n,t),e=e.sibling}var Ue=null,zn=!1;function ut(e,n,t){for(t=t.child;t!==null;)bm(e,n,t),t=t.sibling}function bm(e,n,t){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(dl,t)}catch{}switch(t.tag){case 5:Ge||fr(t,n);case 6:var r=Ue,i=zn;Ue=null,ut(e,n,t),Ue=r,zn=i,Ue!==null&&(zn?(e=Ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ue.removeChild(t.stateNode));break;case 18:Ue!==null&&(zn?(e=Ue,t=t.stateNode,e.nodeType===8?na(e.parentNode,t):e.nodeType===1&&na(e,t),vi(e)):na(Ue,t.stateNode));break;case 4:r=Ue,i=zn,Ue=t.stateNode.containerInfo,zn=!0,ut(e,n,t),Ue=r,zn=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&qu(t,n,l),i=i.next}while(i!==r)}ut(e,n,t);break;case 1:if(!Ge&&(fr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Ce(t,n,a)}ut(e,n,t);break;case 21:ut(e,n,t);break;case 22:t.mode&1?(Ge=(r=Ge)||t.memoizedState!==null,ut(e,n,t),Ge=r):ut(e,n,t);break;default:ut(e,n,t)}}function Lf(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new R0),n.forEach(function(r){var i=V0.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Mn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,zn=!1;break e;case 3:Ue=a.stateNode.containerInfo,zn=!0;break e;case 4:Ue=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Ue===null)throw Error(V(160));bm(o,l,i),Ue=null,zn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){Ce(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Am(n,e),n=n.sibling}function Am(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mn(n,e),$n(e),r&4){try{ui(3,e,e.return),Sl(3,e)}catch(b){Ce(e,e.return,b)}try{ui(5,e,e.return)}catch(b){Ce(e,e.return,b)}}break;case 1:Mn(n,e),$n(e),r&512&&t!==null&&fr(t,t.return);break;case 5:if(Mn(n,e),$n(e),r&512&&t!==null&&fr(t,t.return),e.flags&32){var i=e.stateNode;try{di(i,"")}catch(b){Ce(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Gh(i,o),yu(a,l);var s=yu(a,o);for(l=0;l<u.length;l+=2){var f=u[l],c=u[l+1];f==="style"?Kh(i,c):f==="dangerouslySetInnerHTML"?Jh(i,c):f==="children"?di(i,c):Cs(i,f,c,s)}switch(a){case"input":pu(i,o);break;case"textarea":Yh(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?dr(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?dr(i,!!o.multiple,o.defaultValue,!0):dr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ei]=o}catch(b){Ce(e,e.return,b)}}break;case 6:if(Mn(n,e),$n(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){Ce(e,e.return,b)}}break;case 3:if(Mn(n,e),$n(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{vi(n.containerInfo)}catch(b){Ce(e,e.return,b)}break;case 4:Mn(n,e),$n(e);break;case 13:Mn(n,e),$n(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ac=Te())),r&4&&Lf(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(Ge=(s=Ge)||f,Mn(n,e),Ge=s):Mn(n,e),$n(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!f&&e.mode&1)for(Z=e,f=e.child;f!==null;){for(c=Z=f;Z!==null;){switch(p=Z,h=p.child,p.tag){case 0:case 11:case 14:case 15:ui(4,p,p.return);break;case 1:fr(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(b){Ce(r,t,b)}}break;case 5:fr(p,p.return);break;case 22:if(p.memoizedState!==null){Nf(c);continue}}h!==null?(h.return=p,Z=h):Nf(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,u=c.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Zh("display",l))}catch(b){Ce(e,e.return,b)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(b){Ce(e,e.return,b)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Mn(n,e),$n(e),r&4&&Lf(e);break;case 21:break;default:Mn(n,e),$n(e)}}function $n(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(_m(t)){var r=t;break e}t=t.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(di(i,""),r.flags&=-33);var o=Rf(e);Qu(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Rf(e);Wu(e,a,l);break;default:throw Error(V(161))}}catch(u){Ce(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function F0(e,n,t){Z=e,Pm(e)}function Pm(e,n,t){for(var r=(e.mode&1)!==0;Z!==null;){var i=Z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||to;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ge;a=to;var s=Ge;if(to=l,(Ge=u)&&!s)for(Z=i;Z!==null;)l=Z,u=l.child,l.tag===22&&l.memoizedState!==null?Df(i):u!==null?(u.return=l,Z=u):Df(i);for(;o!==null;)Z=o,Pm(o),o=o.sibling;Z=i,to=a,Ge=s}Ff(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Z=o):Ff(e)}}function Ff(e){for(;Z!==null;){var n=Z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ge||Sl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ge)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:On(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&xf(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}xf(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&vi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}Ge||n.flags&512&&Vu(n)}catch(p){Ce(n,n.return,p)}}if(n===e){Z=null;break}if(t=n.sibling,t!==null){t.return=n.return,Z=t;break}Z=n.return}}function Nf(e){for(;Z!==null;){var n=Z;if(n===e){Z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,Z=t;break}Z=n.return}}function Df(e){for(;Z!==null;){var n=Z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Sl(4,n)}catch(u){Ce(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){Ce(n,i,u)}}var o=n.return;try{Vu(n)}catch(u){Ce(n,o,u)}break;case 5:var l=n.return;try{Vu(n)}catch(u){Ce(n,l,u)}}}catch(u){Ce(n,n.return,u)}if(n===e){Z=null;break}var a=n.sibling;if(a!==null){a.return=n.return,Z=a;break}Z=n.return}}var N0=Math.ceil,el=lt.ReactCurrentDispatcher,oc=lt.ReactCurrentOwner,An=lt.ReactCurrentBatchConfig,me=0,De=null,je=null,qe=0,pn=0,pr=It(0),Re=0,Ii=null,Vt=0,El=0,lc=0,si=null,rn=null,ac=0,Pr=1/0,Jn=null,nl=!1,Gu=null,St=null,ro=!1,gt=null,tl=0,ci=0,Yu=null,ko=-1,xo=0;function Ke(){return me&6?Te():ko!==-1?ko:ko=Te()}function Et(e){return e.mode&1?me&2&&qe!==0?qe&-qe:x0.transition!==null?(xo===0&&(xo=fd()),xo):(e=ye,e!==0||(e=window.event,e=e===void 0?16:vd(e.type)),e):1}function Fn(e,n,t,r){if(50<ci)throw ci=0,Yu=null,Error(V(185));ji(e,t,r),(!(me&2)||e!==De)&&(e===De&&(!(me&2)&&(El|=t),Re===4&&dt(e,qe)),sn(e,r),t===1&&me===0&&!(n.mode&1)&&(Pr=Te()+500,wl&&Tt()))}function sn(e,n){var t=e.callbackNode;x1(e,n);var r=Do(e,e===De?qe:0);if(r===0)t!==null&&Qc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Qc(t),n===1)e.tag===0?k0($f.bind(null,e)):Fd($f.bind(null,e)),g0(function(){!(me&6)&&Tt()}),t=null;else{switch(pd(r)){case 1:t=Os;break;case 4:t=sd;break;case 16:t=No;break;case 536870912:t=cd;break;default:t=No}t=Rm(t,Cm.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Cm(e,n){if(ko=-1,xo=0,me&6)throw Error(V(327));var t=e.callbackNode;if(wr()&&e.callbackNode!==t)return null;var r=Do(e,e===De?qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=rl(e,r);else{n=r;var i=me;me|=2;var o=Tm();(De!==e||qe!==n)&&(Jn=null,Pr=Te()+500,Dt(e,n));do try{B0();break}catch(a){Im(e,a)}while(!0);Ws(),el.current=o,me=i,je!==null?n=0:(De=null,qe=0,n=Re)}if(n!==0){if(n===2&&(i=Su(e),i!==0&&(r=i,n=Xu(e,i))),n===1)throw t=Ii,Dt(e,0),dt(e,r),sn(e,Te()),t;if(n===6)dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!D0(i)&&(n=rl(e,r),n===2&&(o=Su(e),o!==0&&(r=o,n=Xu(e,o))),n===1))throw t=Ii,Dt(e,0),dt(e,r),sn(e,Te()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(V(345));case 2:Rt(e,rn,Jn);break;case 3:if(dt(e,r),(r&130023424)===r&&(n=ac+500-Te(),10<n)){if(Do(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Tu(Rt.bind(null,e,rn,Jn),n);break}Rt(e,rn,Jn);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-Ln(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*N0(r/1960))-r,10<r){e.timeoutHandle=Tu(Rt.bind(null,e,rn,Jn),r);break}Rt(e,rn,Jn);break;case 5:Rt(e,rn,Jn);break;default:throw Error(V(329))}}}return sn(e,Te()),e.callbackNode===t?Cm.bind(null,e):null}function Xu(e,n){var t=si;return e.current.memoizedState.isDehydrated&&(Dt(e,n).flags|=256),e=rl(e,n),e!==2&&(n=rn,rn=t,n!==null&&Ju(n)),e}function Ju(e){rn===null?rn=e:rn.push.apply(rn,e)}function D0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Dn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function dt(e,n){for(n&=~lc,n&=~El,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ln(n),r=1<<t;e[t]=-1,n&=~r}}function $f(e){if(me&6)throw Error(V(327));wr();var n=Do(e,0);if(!(n&1))return sn(e,Te()),null;var t=rl(e,n);if(e.tag!==0&&t===2){var r=Su(e);r!==0&&(n=r,t=Xu(e,r))}if(t===1)throw t=Ii,Dt(e,0),dt(e,n),sn(e,Te()),t;if(t===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Rt(e,rn,Jn),sn(e,Te()),null}function uc(e,n){var t=me;me|=1;try{return e(n)}finally{me=t,me===0&&(Pr=Te()+500,wl&&Tt())}}function Wt(e){gt!==null&&gt.tag===0&&!(me&6)&&wr();var n=me;me|=1;var t=An.transition,r=ye;try{if(An.transition=null,ye=1,e)return e()}finally{ye=r,An.transition=t,me=n,!(me&6)&&Tt()}}function sc(){pn=pr.current,Se(pr)}function Dt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,m0(t)),je!==null)for(t=je.return;t!==null;){var r=t;switch(Us(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qo();break;case 3:br(),Se(an),Se(Ye),Zs();break;case 5:Js(r);break;case 4:br();break;case 13:Se(_e);break;case 19:Se(_e);break;case 10:Qs(r.type._context);break;case 22:case 23:sc()}t=t.return}if(De=e,je=e=_t(e.current,null),qe=pn=n,Re=0,Ii=null,lc=El=Vt=0,rn=si=null,Ft!==null){for(n=0;n<Ft.length;n++)if(t=Ft[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}Ft=null}return e}function Im(e,n){do{var t=je;try{if(Ws(),yo.current=Ko,Zo){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zo=!1}if(qt=0,Fe=ze=be=null,ai=!1,Ai=0,oc.current=null,t===null||t.return===null){Re=1,Ii=n,je=null;break}e:{var o=e,l=t.return,a=t,u=n;if(n=qe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=Pf(l);if(h!==null){h.flags&=-257,Cf(h,l,a,o,n),h.mode&1&&Af(o,s,n),n=h,u=s;var w=n.updateQueue;if(w===null){var b=new Set;b.add(u),n.updateQueue=b}else w.add(u);break e}else{if(!(n&1)){Af(o,s,n),cc();break e}u=Error(V(426))}}else if(Ee&&a.mode&1){var R=Pf(l);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Cf(R,l,a,o,n),qs(Ar(u,a));break e}}o=u=Ar(u,a),Re!==4&&(Re=2),si===null?si=[o]:si.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var v=pm(o,u,n);kf(o,v);break e;case 1:a=u;var m=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(St===null||!St.has(g)))){o.flags|=65536,n&=-n,o.lanes|=n;var E=hm(o,a,n);kf(o,E);break e}}o=o.return}while(o!==null)}jm(t)}catch(I){n=I,je===t&&t!==null&&(je=t=t.return);continue}break}while(!0)}function Tm(){var e=el.current;return el.current=Ko,e===null?Ko:e}function cc(){(Re===0||Re===3||Re===2)&&(Re=4),De===null||!(Vt&268435455)&&!(El&268435455)||dt(De,qe)}function rl(e,n){var t=me;me|=2;var r=Tm();(De!==e||qe!==n)&&(Jn=null,Dt(e,n));do try{$0();break}catch(i){Im(e,i)}while(!0);if(Ws(),me=t,el.current=r,je!==null)throw Error(V(261));return De=null,qe=0,Re}function $0(){for(;je!==null;)Mm(je)}function B0(){for(;je!==null&&!p1();)Mm(je)}function Mm(e){var n=zm(e.alternate,e,pn);e.memoizedProps=e.pendingProps,n===null?jm(e):je=n,oc.current=null}function jm(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=z0(t,n),t!==null){t.flags&=32767,je=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,je=null;return}}else if(t=O0(t,n,pn),t!==null){je=t;return}if(n=n.sibling,n!==null){je=n;return}je=n=e}while(n!==null);Re===0&&(Re=5)}function Rt(e,n,t){var r=ye,i=An.transition;try{An.transition=null,ye=1,H0(e,n,t,r)}finally{An.transition=i,ye=r}return null}function H0(e,n,t,r){do wr();while(gt!==null);if(me&6)throw Error(V(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(S1(e,o),e===De&&(je=De=null,qe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ro||(ro=!0,Rm(No,function(){return wr(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=An.transition,An.transition=null;var l=ye;ye=1;var a=me;me|=4,oc.current=null,L0(e,t),Am(t,e),u0(Cu),$o=!!Pu,Cu=Pu=null,e.current=t,F0(t),h1(),me=a,ye=l,An.transition=o}else e.current=t;if(ro&&(ro=!1,gt=e,tl=i),o=e.pendingLanes,o===0&&(St=null),g1(t.stateNode),sn(e,Te()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,e=Gu,Gu=null,e;return tl&1&&e.tag!==0&&wr(),o=e.pendingLanes,o&1?e===Yu?ci++:(ci=0,Yu=e):ci=0,Tt(),null}function wr(){if(gt!==null){var e=pd(tl),n=An.transition,t=ye;try{if(An.transition=null,ye=16>e?16:e,gt===null)var r=!1;else{if(e=gt,gt=null,tl=0,me&6)throw Error(V(331));var i=me;for(me|=4,Z=e.current;Z!==null;){var o=Z,l=o.child;if(Z.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(Z=s;Z!==null;){var f=Z;switch(f.tag){case 0:case 11:case 15:ui(8,f,o)}var c=f.child;if(c!==null)c.return=f,Z=c;else for(;Z!==null;){f=Z;var p=f.sibling,h=f.return;if(Em(f),f===s){Z=null;break}if(p!==null){p.return=h,Z=p;break}Z=h}}}var w=o.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var R=b.sibling;b.sibling=null,b=R}while(b!==null)}}Z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Z=l;else e:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ui(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Z=v;break e}Z=o.return}}var m=e.current;for(Z=m;Z!==null;){l=Z;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,Z=g;else e:for(l=m;Z!==null;){if(a=Z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sl(9,a)}}catch(I){Ce(a,a.return,I)}if(a===l){Z=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Z=E;break e}Z=a.return}}if(me=i,Tt(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(dl,e)}catch{}r=!0}return r}finally{ye=t,An.transition=n}}return!1}function Bf(e,n,t){n=Ar(t,n),n=pm(e,n,1),e=xt(e,n,1),n=Ke(),e!==null&&(ji(e,1,n),sn(e,n))}function Ce(e,n,t){if(e.tag===3)Bf(e,e,t);else for(;n!==null;){if(n.tag===3){Bf(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(St===null||!St.has(r))){e=Ar(t,e),e=hm(n,e,1),n=xt(n,e,1),e=Ke(),n!==null&&(ji(n,1,e),sn(n,e));break}}n=n.return}}function U0(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ke(),e.pingedLanes|=e.suspendedLanes&t,De===e&&(qe&t)===t&&(Re===4||Re===3&&(qe&130023424)===qe&&500>Te()-ac?Dt(e,0):lc|=t),sn(e,n)}function Om(e,n){n===0&&(e.mode&1?(n=Qi,Qi<<=1,!(Qi&130023424)&&(Qi=4194304)):n=1);var t=Ke();e=it(e,n),e!==null&&(ji(e,n,t),sn(e,t))}function q0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Om(e,t)}function V0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(n),Om(e,t)}var zm;zm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||an.current)on=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return on=!1,j0(e,n,t);on=!!(e.flags&131072)}else on=!1,Ee&&n.flags&1048576&&Nd(n,Qo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;wo(e,n),e=n.pendingProps;var i=Sr(n,Ye.current);vr(n,t),i=ec(null,n,r,e,i,t);var o=nc();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,un(r)?(o=!0,Vo(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ys(n),i.updater=xl,n.stateNode=i,i._reactInternals=n,Fu(n,r,e,t),n=$u(null,n,r,!0,o,t)):(n.tag=0,Ee&&o&&Hs(n),Je(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(wo(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Q0(r),e=On(r,e),i){case 0:n=Du(null,n,r,e,t);break e;case 1:n=Mf(null,n,r,e,t);break e;case 11:n=If(null,n,r,e,t);break e;case 14:n=Tf(null,n,r,On(r.type,e),t);break e}throw Error(V(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:On(r,i),Du(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:On(r,i),Mf(e,n,r,i,t);case 3:e:{if(ym(n),e===null)throw Error(V(387));r=n.pendingProps,o=n.memoizedState,i=o.element,qd(e,n),Xo(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Ar(Error(V(423)),n),n=jf(e,n,r,t,i);break e}else if(r!==i){i=Ar(Error(V(424)),n),n=jf(e,n,r,t,i);break e}else for(hn=kt(n.stateNode.containerInfo.firstChild),dn=n,Ee=!0,Rn=null,t=Hd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Er(),r===i){n=ot(e,n,t);break e}Je(e,n,r,t)}n=n.child}return n;case 5:return Vd(n),e===null&&zu(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Iu(r,i)?l=null:o!==null&&Iu(r,o)&&(n.flags|=32),gm(e,n),Je(e,n,l,t),n.child;case 6:return e===null&&zu(n),null;case 13:return vm(e,n,t);case 4:return Xs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=_r(n,null,r,t):Je(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:On(r,i),If(e,n,r,i,t);case 7:return Je(e,n,n.pendingProps,t),n.child;case 8:return Je(e,n,n.pendingProps.children,t),n.child;case 12:return Je(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,ke(Go,r._currentValue),r._currentValue=l,o!==null)if(Dn(o.value,l)){if(o.children===i.children&&!an.current){n=ot(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=nt(-1,t&-t),u.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?u.next=u:(u.next=f.next,f.next=u),s.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Ru(o.return,t,n),a.lanes|=t;break}u=u.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(V(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Ru(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Je(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,vr(n,t),i=Pn(i),r=r(i),n.flags|=1,Je(e,n,r,t),n.child;case 14:return r=n.type,i=On(r,n.pendingProps),i=On(r.type,i),Tf(e,n,r,i,t);case 15:return dm(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:On(r,i),wo(e,n),n.tag=1,un(r)?(e=!0,Vo(n)):e=!1,vr(n,t),fm(n,r,i),Fu(n,r,i,t),$u(null,n,r,!0,e,t);case 19:return wm(e,n,t);case 22:return mm(e,n,t)}throw Error(V(156,n.tag))};function Rm(e,n){return ud(e,n)}function W0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(e,n,t,r){return new W0(e,n,t,r)}function fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Q0(e){if(typeof e=="function")return fc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ts)return 11;if(e===Ms)return 14}return 2}function _t(e,n){var t=e.alternate;return t===null?(t=_n(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function So(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")fc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case tr:return $t(t.children,i,o,n);case Is:l=8,i|=8;break;case au:return e=_n(12,t,n,i|2),e.elementType=au,e.lanes=o,e;case uu:return e=_n(13,t,n,i),e.elementType=uu,e.lanes=o,e;case su:return e=_n(19,t,n,i),e.elementType=su,e.lanes=o,e;case Vh:return _l(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uh:l=10;break e;case qh:l=9;break e;case Ts:l=11;break e;case Ms:l=14;break e;case ft:l=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return n=_n(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function $t(e,n,t,r){return e=_n(7,e,r,n),e.lanes=t,e}function _l(e,n,t,r){return e=_n(22,e,r,n),e.elementType=Vh,e.lanes=t,e.stateNode={isHidden:!1},e}function sa(e,n,t){return e=_n(6,e,null,n),e.lanes=t,e}function ca(e,n,t){return n=_n(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function G0(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pc(e,n,t,r,i,o,l,a,u){return e=new G0(e,n,t,a,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=_n(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ys(o),e}function Y0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Lm(e){if(!e)return At;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(V(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(un(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(V(171))}if(e.tag===1){var t=e.type;if(un(t))return Ld(e,t,n)}return n}function Fm(e,n,t,r,i,o,l,a,u){return e=pc(t,r,!0,e,i,o,l,a,u),e.context=Lm(null),t=e.current,r=Ke(),i=Et(t),o=nt(r,i),o.callback=n??null,xt(t,o,i),e.current.lanes=i,ji(e,i,r),sn(e,r),e}function bl(e,n,t,r){var i=n.current,o=Ke(),l=Et(i);return t=Lm(t),n.context===null?n.context=t:n.pendingContext=t,n=nt(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=xt(i,n,l),e!==null&&(Fn(e,i,l,o),go(e,i,l)),l}function il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function hc(e,n){Hf(e,n),(e=e.alternate)&&Hf(e,n)}function X0(){return null}var Nm=typeof reportError=="function"?reportError:function(e){console.error(e)};function dc(e){this._internalRoot=e}Al.prototype.render=dc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(V(409));bl(e,n,null,null)};Al.prototype.unmount=dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wt(function(){bl(null,e,null,null)}),n[rt]=null}};function Al(e){this._internalRoot=e}Al.prototype.unstable_scheduleHydration=function(e){if(e){var n=md();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ht.length&&n!==0&&n<ht[t].priority;t++);ht.splice(t,0,e),t===0&&yd(e)}};function mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uf(){}function J0(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var s=il(l);o.call(s)}}var l=Fm(n,r,e,0,null,!1,!1,"",Uf);return e._reactRootContainer=l,e[rt]=l.current,xi(e.nodeType===8?e.parentNode:e),Wt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var s=il(u);a.call(s)}}var u=pc(e,0,!1,null,null,!1,!1,"",Uf);return e._reactRootContainer=u,e[rt]=u.current,xi(e.nodeType===8?e.parentNode:e),Wt(function(){bl(n,u,t,r)}),u}function Cl(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=il(l);a.call(u)}}bl(n,l,e,i)}else l=J0(t,n,e,i,r);return il(l)}hd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Zr(n.pendingLanes);t!==0&&(zs(n,t|1),sn(n,Te()),!(me&6)&&(Pr=Te()+500,Tt()))}break;case 13:Wt(function(){var r=it(e,1);if(r!==null){var i=Ke();Fn(r,e,1,i)}}),hc(e,1)}};Rs=function(e){if(e.tag===13){var n=it(e,134217728);if(n!==null){var t=Ke();Fn(n,e,134217728,t)}hc(e,134217728)}};dd=function(e){if(e.tag===13){var n=Et(e),t=it(e,n);if(t!==null){var r=Ke();Fn(t,e,n,r)}hc(e,n)}};md=function(){return ye};gd=function(e,n){var t=ye;try{return ye=e,n()}finally{ye=t}};wu=function(e,n,t){switch(n){case"input":if(pu(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=vl(r);if(!i)throw Error(V(90));Qh(r),pu(r,i)}}}break;case"textarea":Yh(e,t);break;case"select":n=t.value,n!=null&&dr(e,!!t.multiple,n,!1)}};td=uc;rd=Wt;var Z0={usingClientEntryPoint:!1,Events:[zi,lr,vl,ed,nd,uc]},Vr={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K0={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ld(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||X0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{dl=io.inject(K0),qn=io}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0;yn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(n))throw Error(V(200));return Y0(e,n,null,t)};yn.createRoot=function(e,n){if(!mc(e))throw Error(V(299));var t=!1,r="",i=Nm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=pc(e,1,!1,null,null,t,!1,r,i),e[rt]=n.current,xi(e.nodeType===8?e.parentNode:e),new dc(n)};yn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=ld(n),e=e===null?null:e.stateNode,e};yn.flushSync=function(e){return Wt(e)};yn.hydrate=function(e,n,t){if(!Pl(n))throw Error(V(200));return Cl(null,e,n,!0,t)};yn.hydrateRoot=function(e,n,t){if(!mc(e))throw Error(V(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=Nm;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Fm(n,null,e,1,t??null,i,!1,o,l),e[rt]=n.current,xi(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Al(n)};yn.render=function(e,n,t){if(!Pl(n))throw Error(V(200));return Cl(null,e,n,!1,t)};yn.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(V(40));return e._reactRootContainer?(Wt(function(){Cl(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};yn.unstable_batchedUpdates=uc;yn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Pl(t))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Cl(e,n,t,!1,r)};yn.version="18.3.1-next-f1338f8080-20240426";function Dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dm)}catch(e){console.error(e)}}Dm(),Dh.exports=yn;var ev=Dh.exports,qf=ev;ou.createRoot=qf.createRoot,ou.hydrateRoot=qf.hydrateRoot;const nv=`# 标题

这是第一版内容。

- 列表项1
- 列表项2

\`\`\`ts
const a = 1;
\`\`\`

$$a=1$$`,tv=`# 标题

这是第二版内容，增加了内容。

- 列表项1
- 列表项3

\`\`\`js
const a = 2;
\`\`\``,rv=`# 一级标题

## 二级标题

### 三级标题

#### 四级标题

这是一些普通文本内容。

##### 五级标题

###### 六级标题`,iv=`# 修改后的一级标题

## 二级标题已更新

### 三级标题

这是一些普通文本内容，增加了一些新内容。

#### 新增的四级标题

##### 五级标题

###### 六级标题已修改`,ov=`# 列表示例

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
- [ ] 待办任务 3`,lv=`# 列表示例（更新版）

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
- [ ] 待办任务 3`,av=`# 代码示例

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
\`\`\``,uv=`# 代码示例（更新版）

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
\`\`\``,sv=`# 表格示例

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
| 利润 | 2,000 | 3,000 | 5,000 | 6,000 | 16,000 |`,cv=`# 表格示例（更新版）

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
| 税费 | 600 | 1,000 | 1,200 | 1,600 | 4,400 | - |`,fv=`# 链接和图片示例

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

这段文字包含一个[链接](https://example.com)和一个![内联图片](https://example.com/inline-image.jpg)。`,pv=`# 链接和图片示例（更新版）

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

新增的段落，包含一个[新链接](https://example.com/new)。`,hv=`# 文本格式化示例

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

这段文字**包含*混合的*格式**，还有~~一些~~\`代码\`。`,dv=`# 文本格式化示例（更新版）

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

这里有一些==高亮文本==。`,mv=`# 复杂 Markdown 文档示例

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

这个文档展示了多种 Markdown 元素的使用方式，可以用于测试差异比较功能。`,gv=`# 复杂 Markdown 文档示例（更新版）

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

## `,yv=`# 极端长文本测试

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

这个文档包含了各种极端长的内容元素，用于测试 Markdown 差异比较工具处理大量文本的能力。`,vv=`# 极端长文本测试（更新版）

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

这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。这是一个全新的章节，包含大量文本内容。`,wv=`# 嵌套结构测试

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

这个文档包含了各种深度嵌套的结构，用于测试 Markdown 差异比较工具处理复杂嵌套内容的能力。`,kv=`# 嵌套结构测试（更新版）

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
>     \`\`\``,xv=`# 特殊字符测试

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

这个文档包含了各种特殊字符和符号，用于测试 Markdown 差异比较工具处理特殊字符的能力。`,Sv=`# 特殊字符测试（更新版）

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

नमस्ते दुनिया! यह संस्कृत के लिए एक परीक्षण है.`,Ev=`# 空白处理测试

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

这个文档包含了各种空白字符的使用情况，用于测试 Markdown 差异比较工具处理空白字符的能力。`,_v=`# 空白处理测试（更新版）

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
 
  
   
    
     
      
       
        
         
普通文本（中间是递增的空格行）`,bv=`# 混合内容测试

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

这个文档包含了各种混合内容的情况，用于测试 Markdown 差异比较工具处理复杂混合内容的能力。`,Av=`# 混合内容测试（更新版）

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
</div>`,Vf=[{name:"simple",oldMarkdown:nv,newMarkdown:tv},{name:"headings",oldMarkdown:rv,newMarkdown:iv},{name:"lists",oldMarkdown:ov,newMarkdown:lv},{name:"code",oldMarkdown:av,newMarkdown:uv},{name:"tables",oldMarkdown:sv,newMarkdown:cv},{name:"links",oldMarkdown:fv,newMarkdown:pv},{name:"formatting",oldMarkdown:hv,newMarkdown:dv},{name:"complex",oldMarkdown:mv,newMarkdown:gv},{name:"extreme_long",oldMarkdown:yv,newMarkdown:vv},{name:"nested_structures",oldMarkdown:wv,newMarkdown:kv},{name:"special_characters",oldMarkdown:xv,newMarkdown:Sv},{name:"whitespace",oldMarkdown:Ev,newMarkdown:_v},{name:"mixed_content",oldMarkdown:bv,newMarkdown:Av}];class $m{diff(n,t,r={}){let i;typeof r=="function"?(i=r,r={}):"callback"in r&&(i=r.callback);const o=this.castInput(n,r),l=this.castInput(t,r),a=this.removeEmpty(this.tokenize(o,r)),u=this.removeEmpty(this.tokenize(l,r));return this.diffWithOptionsObj(a,u,r,i)}diffWithOptionsObj(n,t,r,i){var o;const l=m=>{if(m=this.postProcess(m,r),i){setTimeout(function(){i(m)},0);return}else return m},a=t.length,u=n.length;let s=1,f=a+u;r.maxEditLength!=null&&(f=Math.min(f,r.maxEditLength));const c=(o=r.timeout)!==null&&o!==void 0?o:1/0,p=Date.now()+c,h=[{oldPos:-1,lastComponent:void 0}];let w=this.extractCommon(h[0],t,n,0,r);if(h[0].oldPos+1>=u&&w+1>=a)return l(this.buildValues(h[0].lastComponent,t,n));let b=-1/0,R=1/0;const v=()=>{for(let m=Math.max(b,-s);m<=Math.min(R,s);m+=2){let g;const E=h[m-1],I=h[m+1];E&&(h[m-1]=void 0);let S=!1;if(I){const D=I.oldPos-m;S=I&&0<=D&&D<a}const T=E&&E.oldPos+1<u;if(!S&&!T){h[m]=void 0;continue}if(!T||S&&E.oldPos<I.oldPos?g=this.addToPath(I,!0,!1,0,r):g=this.addToPath(E,!1,!0,1,r),w=this.extractCommon(g,t,n,m,r),g.oldPos+1>=u&&w+1>=a)return l(this.buildValues(g.lastComponent,t,n))||!0;h[m]=g,g.oldPos+1>=u&&(R=Math.min(R,m-1)),w+1>=a&&(b=Math.max(b,m+1))}s++};if(i)(function m(){setTimeout(function(){if(s>f||Date.now()>p)return i(void 0);v()||m()},0)})();else for(;s<=f&&Date.now()<=p;){const m=v();if(m)return m}}addToPath(n,t,r,i,o){const l=n.lastComponent;return l&&!o.oneChangePerToken&&l.added===t&&l.removed===r?{oldPos:n.oldPos+i,lastComponent:{count:l.count+1,added:t,removed:r,previousComponent:l.previousComponent}}:{oldPos:n.oldPos+i,lastComponent:{count:1,added:t,removed:r,previousComponent:l}}}extractCommon(n,t,r,i,o){const l=t.length,a=r.length;let u=n.oldPos,s=u-i,f=0;for(;s+1<l&&u+1<a&&this.equals(r[u+1],t[s+1],o);)s++,u++,f++,o.oneChangePerToken&&(n.lastComponent={count:1,previousComponent:n.lastComponent,added:!1,removed:!1});return f&&!o.oneChangePerToken&&(n.lastComponent={count:f,previousComponent:n.lastComponent,added:!1,removed:!1}),n.oldPos=u,s}equals(n,t,r){return r.comparator?r.comparator(n,t):n===t||!!r.ignoreCase&&n.toLowerCase()===t.toLowerCase()}removeEmpty(n){const t=[];for(let r=0;r<n.length;r++)n[r]&&t.push(n[r]);return t}castInput(n,t){return n}tokenize(n,t){return Array.from(n)}join(n){return n.join("")}postProcess(n,t){return n}get useLongestToken(){return!1}buildValues(n,t,r){const i=[];let o;for(;n;)i.push(n),o=n.previousComponent,delete n.previousComponent,n=o;i.reverse();const l=i.length;let a=0,u=0,s=0;for(;a<l;a++){const f=i[a];if(f.removed)f.value=this.join(r.slice(s,s+f.count)),s+=f.count;else{if(!f.added&&this.useLongestToken){let c=t.slice(u,u+f.count);c=c.map(function(p,h){const w=r[s+h];return w.length>p.length?w:p}),f.value=this.join(c)}else f.value=this.join(t.slice(u,u+f.count));u+=f.count,f.added||(s+=f.count)}}return i}}class Pv extends $m{}const Cv=new Pv;function Iv(e,n,t){return Cv.diff(e,n,t)}function Wf(e,n){let t;for(t=0;t<e.length&&t<n.length;t++)if(e[t]!=n[t])return e.slice(0,t);return e.slice(0,t)}function Qf(e,n){let t;if(!e||!n||e[e.length-1]!=n[n.length-1])return"";for(t=0;t<e.length&&t<n.length;t++)if(e[e.length-(t+1)]!=n[n.length-(t+1)])return e.slice(-t);return e.slice(-t)}function Zu(e,n,t){if(e.slice(0,n.length)!=n)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(n)}; this is a bug`);return t+e.slice(n.length)}function Ku(e,n,t){if(!n)return e+t;if(e.slice(-n.length)!=n)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(n)}; this is a bug`);return e.slice(0,-n.length)+t}function Wr(e,n){return Zu(e,n,"")}function oo(e,n){return Ku(e,n,"")}function Gf(e,n){return n.slice(0,Tv(e,n))}function Tv(e,n){let t=0;e.length>n.length&&(t=e.length-n.length);let r=n.length;e.length<n.length&&(r=e.length);const i=Array(r);let o=0;i[0]=0;for(let l=1;l<r;l++){for(n[l]==n[o]?i[l]=i[o]:i[l]=o;o>0&&n[l]!=n[o];)o=i[o];n[l]==n[o]&&o++}o=0;for(let l=t;l<e.length;l++){for(;o>0&&e[l]!=n[o];)o=i[o];e[l]==n[o]&&o++}return o}function Qr(e){let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function st(e){const n=e.match(/^\s*/);return n?n[0]:""}const Yf="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Mv=new RegExp(`[${Yf}]+|\\s+|[^${Yf}]`,"ug");class jv extends $m{equals(n,t,r){return r.ignoreCase&&(n=n.toLowerCase(),t=t.toLowerCase()),n.trim()===t.trim()}tokenize(n,t={}){let r;if(t.intlSegmenter){const l=t.intlSegmenter;if(l.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');r=Array.from(l.segment(n),a=>a.segment)}else r=n.match(Mv)||[];const i=[];let o=null;return r.forEach(l=>{/\s/.test(l)?o==null?i.push(l):i.push(i.pop()+l):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+l):i.push(o+l):i.push(l),o=l}),i}join(n){return n.map((t,r)=>r==0?t:t.replace(/^\s+/,"")).join("")}postProcess(n,t){if(!n||t.oneChangePerToken)return n;let r=null,i=null,o=null;return n.forEach(l=>{l.added?i=l:l.removed?o=l:((i||o)&&Xf(r,o,i,l),r=l,i=null,o=null)}),(i||o)&&Xf(r,o,i,null),n}}const Ov=new jv;function Bm(e,n,t){return Ov.diff(e,n,t)}function Xf(e,n,t,r){if(n&&t){const i=st(n.value),o=Qr(n.value),l=st(t.value),a=Qr(t.value);if(e){const u=Wf(i,l);e.value=Ku(e.value,l,u),n.value=Wr(n.value,u),t.value=Wr(t.value,u)}if(r){const u=Qf(o,a);r.value=Zu(r.value,a,u),n.value=oo(n.value,u),t.value=oo(t.value,u)}}else if(t){if(e){const i=st(t.value);t.value=t.value.substring(i.length)}if(r){const i=st(r.value);r.value=r.value.substring(i.length)}}else if(e&&r){const i=st(r.value),o=st(n.value),l=Qr(n.value),a=Wf(i,o);n.value=Wr(n.value,a);const u=Qf(Wr(i,a),l);n.value=oo(n.value,u),r.value=Zu(r.value,i,u),e.value=Ku(e.value,i,i.slice(0,i.length-u.length))}else if(r){const i=st(r.value),o=Qr(n.value),l=Gf(o,i);n.value=oo(n.value,l)}else if(e){const i=Qr(e.value),o=st(n.value),l=Gf(i,o);n.value=Wr(n.value,l)}}var fa={exports:{}},pa={},Cr={},Hm={},gc=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var n={},t=Symbol("test"),r=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;var i=42;n[t]=i;for(var o in n)return!1;if(typeof Object.keys=="function"&&Object.keys(n).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(n).length!==0)return!1;var l=Object.getOwnPropertySymbols(n);if(l.length!==1||l[0]!==t||!Object.prototype.propertyIsEnumerable.call(n,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var a=Object.getOwnPropertyDescriptor(n,t);if(a.value!==i||a.enumerable!==!0)return!1}return!0},zv=gc,Il=function(){return zv()&&!!Symbol.toStringTag},yc=Object,Rv=Error,Lv=EvalError,Fv=RangeError,Nv=ReferenceError,Um=SyntaxError,Li=TypeError,Dv=URIError,$v=Math.abs,Bv=Math.floor,Hv=Math.max,Uv=Math.min,qv=Math.pow,Vv=Math.round,Wv=Number.isNaN||function(n){return n!==n},Qv=Wv,Gv=function(n){return Qv(n)||n===0?n:n<0?-1:1},Yv=Object.getOwnPropertyDescriptor,Eo=Yv;if(Eo)try{Eo([],"length")}catch{Eo=null}var zr=Eo,_o=Object.defineProperty||!1;if(_o)try{_o({},"a",{value:1})}catch{_o=!1}var Tl=_o,ha,Jf;function Xv(){if(Jf)return ha;Jf=1;var e=typeof Symbol<"u"&&Symbol,n=gc;return ha=function(){return typeof e!="function"||typeof Symbol!="function"||typeof e("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:n()},ha}var da,Zf;function qm(){return Zf||(Zf=1,da=typeof Reflect<"u"&&Reflect.getPrototypeOf||null),da}var ma,Kf;function Vm(){if(Kf)return ma;Kf=1;var e=yc;return ma=e.getPrototypeOf||null,ma}var ga,ep;function Jv(){if(ep)return ga;ep=1;var e="Function.prototype.bind called on incompatible ",n=Object.prototype.toString,t=Math.max,r="[object Function]",i=function(u,s){for(var f=[],c=0;c<u.length;c+=1)f[c]=u[c];for(var p=0;p<s.length;p+=1)f[p+u.length]=s[p];return f},o=function(u,s){for(var f=[],c=s,p=0;c<u.length;c+=1,p+=1)f[p]=u[c];return f},l=function(a,u){for(var s="",f=0;f<a.length;f+=1)s+=a[f],f+1<a.length&&(s+=u);return s};return ga=function(u){var s=this;if(typeof s!="function"||n.apply(s)!==r)throw new TypeError(e+s);for(var f=o(arguments,1),c,p=function(){if(this instanceof c){var v=s.apply(this,i(f,arguments));return Object(v)===v?v:this}return s.apply(u,i(f,arguments))},h=t(0,s.length-f.length),w=[],b=0;b<h;b++)w[b]="$"+b;if(c=Function("binder","return function ("+l(w,",")+"){ return binder.apply(this,arguments); }")(p),s.prototype){var R=function(){};R.prototype=s.prototype,c.prototype=new R,R.prototype=null}return c},ga}var ya,np;function Fi(){if(np)return ya;np=1;var e=Jv();return ya=Function.prototype.bind||e,ya}var va,tp;function vc(){return tp||(tp=1,va=Function.prototype.call),va}var wa,rp;function wc(){return rp||(rp=1,wa=Function.prototype.apply),wa}var Zv=typeof Reflect<"u"&&Reflect&&Reflect.apply,Kv=Fi(),ew=wc(),nw=vc(),tw=Zv,Wm=tw||Kv.call(nw,ew),rw=Fi(),iw=Li,ow=vc(),lw=Wm,kc=function(n){if(n.length<1||typeof n[0]!="function")throw new iw("a function is required");return lw(rw,ow,n)},ka,ip;function aw(){if(ip)return ka;ip=1;var e=kc,n=zr,t;try{t=[].__proto__===Array.prototype}catch(l){if(!l||typeof l!="object"||!("code"in l)||l.code!=="ERR_PROTO_ACCESS")throw l}var r=!!t&&n&&n(Object.prototype,"__proto__"),i=Object,o=i.getPrototypeOf;return ka=r&&typeof r.get=="function"?e([r.get]):typeof o=="function"?function(a){return o(a==null?a:i(a))}:!1,ka}var xa,op;function xc(){if(op)return xa;op=1;var e=qm(),n=Vm(),t=aw();return xa=e?function(i){return e(i)}:n?function(i){if(!i||typeof i!="object"&&typeof i!="function")throw new TypeError("getProto: not an object");return n(i)}:t?function(i){return t(i)}:null,xa}var Sa,lp;function Qm(){if(lp)return Sa;lp=1;var e=Function.prototype.call,n=Object.prototype.hasOwnProperty,t=Fi();return Sa=t.call(e,n),Sa}var se,uw=yc,sw=Rv,cw=Lv,fw=Fv,pw=Nv,Ir=Um,kr=Li,hw=Dv,dw=$v,mw=Bv,gw=Hv,yw=Uv,vw=qv,ww=Vv,kw=Gv,Gm=Function,Ea=function(e){try{return Gm('"use strict"; return ('+e+").constructor;")()}catch{}},Ti=zr,xw=Tl,_a=function(){throw new kr},Sw=Ti?function(){try{return arguments.callee,_a}catch{try{return Ti(arguments,"callee").get}catch{return _a}}}():_a,Jt=Xv()(),Le=xc(),Ew=Vm(),_w=qm(),Ym=wc(),Ni=vc(),Kt={},bw=typeof Uint8Array>"u"||!Le?se:Le(Uint8Array),Bt={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?se:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?se:ArrayBuffer,"%ArrayIteratorPrototype%":Jt&&Le?Le([][Symbol.iterator]()):se,"%AsyncFromSyncIteratorPrototype%":se,"%AsyncFunction%":Kt,"%AsyncGenerator%":Kt,"%AsyncGeneratorFunction%":Kt,"%AsyncIteratorPrototype%":Kt,"%Atomics%":typeof Atomics>"u"?se:Atomics,"%BigInt%":typeof BigInt>"u"?se:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?se:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?se:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?se:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":sw,"%eval%":eval,"%EvalError%":cw,"%Float16Array%":typeof Float16Array>"u"?se:Float16Array,"%Float32Array%":typeof Float32Array>"u"?se:Float32Array,"%Float64Array%":typeof Float64Array>"u"?se:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?se:FinalizationRegistry,"%Function%":Gm,"%GeneratorFunction%":Kt,"%Int8Array%":typeof Int8Array>"u"?se:Int8Array,"%Int16Array%":typeof Int16Array>"u"?se:Int16Array,"%Int32Array%":typeof Int32Array>"u"?se:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":Jt&&Le?Le(Le([][Symbol.iterator]())):se,"%JSON%":typeof JSON=="object"?JSON:se,"%Map%":typeof Map>"u"?se:Map,"%MapIteratorPrototype%":typeof Map>"u"||!Jt||!Le?se:Le(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":uw,"%Object.getOwnPropertyDescriptor%":Ti,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?se:Promise,"%Proxy%":typeof Proxy>"u"?se:Proxy,"%RangeError%":fw,"%ReferenceError%":pw,"%Reflect%":typeof Reflect>"u"?se:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?se:Set,"%SetIteratorPrototype%":typeof Set>"u"||!Jt||!Le?se:Le(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?se:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":Jt&&Le?Le(""[Symbol.iterator]()):se,"%Symbol%":Jt?Symbol:se,"%SyntaxError%":Ir,"%ThrowTypeError%":Sw,"%TypedArray%":bw,"%TypeError%":kr,"%Uint8Array%":typeof Uint8Array>"u"?se:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?se:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?se:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?se:Uint32Array,"%URIError%":hw,"%WeakMap%":typeof WeakMap>"u"?se:WeakMap,"%WeakRef%":typeof WeakRef>"u"?se:WeakRef,"%WeakSet%":typeof WeakSet>"u"?se:WeakSet,"%Function.prototype.call%":Ni,"%Function.prototype.apply%":Ym,"%Object.defineProperty%":xw,"%Object.getPrototypeOf%":Ew,"%Math.abs%":dw,"%Math.floor%":mw,"%Math.max%":gw,"%Math.min%":yw,"%Math.pow%":vw,"%Math.round%":ww,"%Math.sign%":kw,"%Reflect.getPrototypeOf%":_w};if(Le)try{null.error}catch(e){var Aw=Le(Le(e));Bt["%Error.prototype%"]=Aw}var Pw=function e(n){var t;if(n==="%AsyncFunction%")t=Ea("async function () {}");else if(n==="%GeneratorFunction%")t=Ea("function* () {}");else if(n==="%AsyncGeneratorFunction%")t=Ea("async function* () {}");else if(n==="%AsyncGenerator%"){var r=e("%AsyncGeneratorFunction%");r&&(t=r.prototype)}else if(n==="%AsyncIteratorPrototype%"){var i=e("%AsyncGenerator%");i&&Le&&(t=Le(i.prototype))}return Bt[n]=t,t},ap={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Di=Fi(),ol=Qm(),Cw=Di.call(Ni,Array.prototype.concat),Iw=Di.call(Ym,Array.prototype.splice),up=Di.call(Ni,String.prototype.replace),ll=Di.call(Ni,String.prototype.slice),Tw=Di.call(Ni,RegExp.prototype.exec),Mw=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,jw=/\\(\\)?/g,Ow=function(n){var t=ll(n,0,1),r=ll(n,-1);if(t==="%"&&r!=="%")throw new Ir("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&t!=="%")throw new Ir("invalid intrinsic syntax, expected opening `%`");var i=[];return up(n,Mw,function(o,l,a,u){i[i.length]=a?up(u,jw,"$1"):l||o}),i},zw=function(n,t){var r=n,i;if(ol(ap,r)&&(i=ap[r],r="%"+i[0]+"%"),ol(Bt,r)){var o=Bt[r];if(o===Kt&&(o=Pw(r)),typeof o>"u"&&!t)throw new kr("intrinsic "+n+" exists, but is not available. Please file an issue!");return{alias:i,name:r,value:o}}throw new Ir("intrinsic "+n+" does not exist!")},Sc=function(n,t){if(typeof n!="string"||n.length===0)throw new kr("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new kr('"allowMissing" argument must be a boolean');if(Tw(/^%?[^%]*%?$/,n)===null)throw new Ir("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=Ow(n),i=r.length>0?r[0]:"",o=zw("%"+i+"%",t),l=o.name,a=o.value,u=!1,s=o.alias;s&&(i=s[0],Iw(r,Cw([0,1],s)));for(var f=1,c=!0;f<r.length;f+=1){var p=r[f],h=ll(p,0,1),w=ll(p,-1);if((h==='"'||h==="'"||h==="`"||w==='"'||w==="'"||w==="`")&&h!==w)throw new Ir("property names with quotes must have matching quotes");if((p==="constructor"||!c)&&(u=!0),i+="."+p,l="%"+i+"%",ol(Bt,l))a=Bt[l];else if(a!=null){if(!(p in a)){if(!t)throw new kr("base intrinsic for "+n+" exists, but the property is not available.");return}if(Ti&&f+1>=r.length){var b=Ti(a,p);c=!!b,c&&"get"in b&&!("originalValue"in b.get)?a=b.get:a=a[p]}else c=ol(a,p),a=a[p];c&&!u&&(Bt[l]=a)}}return a},Xm=Sc,Jm=kc,Rw=Jm([Xm("%String.prototype.indexOf%")]),Rr=function(n,t){var r=Xm(n,!!t);return typeof r=="function"&&Rw(n,".prototype.")>-1?Jm([r]):r},Lw=Il(),Fw=Rr,es=Fw("Object.prototype.toString"),Ml=function(n){return Lw&&n&&typeof n=="object"&&Symbol.toStringTag in n?!1:es(n)==="[object Arguments]"},Zm=function(n){return Ml(n)?!0:n!==null&&typeof n=="object"&&"length"in n&&typeof n.length=="number"&&n.length>=0&&es(n)!=="[object Array]"&&"callee"in n&&es(n.callee)==="[object Function]"},Nw=function(){return Ml(arguments)}();Ml.isLegacyArguments=Zm;var Dw=Nw?Ml:Zm,sp=Rr,$w=Il(),Bw=Qm(),Hw=zr,ns;if($w){var Uw=sp("RegExp.prototype.exec"),cp={},ba=function(){throw cp},fp={toString:ba,valueOf:ba};typeof Symbol.toPrimitive=="symbol"&&(fp[Symbol.toPrimitive]=ba),ns=function(n){if(!n||typeof n!="object")return!1;var t=Hw(n,"lastIndex"),r=t&&Bw(t,"value");if(!r)return!1;try{Uw(n,fp)}catch(i){return i===cp}}}else{var qw=sp("Object.prototype.toString"),Vw="[object RegExp]";ns=function(n){return!n||typeof n!="object"&&typeof n!="function"?!1:qw(n)===Vw}}var Ww=ns,Qw=Rr,Gw=Ww,Yw=Qw("RegExp.prototype.exec"),Xw=Li,Jw=function(n){if(!Gw(n))throw new Xw("`regex` must be a RegExp");return function(r){return Yw(n,r)!==null}},Km=Rr,Zw=Jw,Kw=Zw(/^\s*(?:function)?\*/),eg=Il(),Aa=xc(),ek=Km("Object.prototype.toString"),nk=Km("Function.prototype.toString"),tk=function(){if(!eg)return!1;try{return Function("return function*() {}")()}catch{}},Pa,rk=function(n){if(typeof n!="function")return!1;if(Kw(nk(n)))return!0;if(!eg){var t=ek(n);return t==="[object GeneratorFunction]"}if(!Aa)return!1;if(typeof Pa>"u"){var r=tk();Pa=r?Aa(r):!1}return Aa(n)===Pa},ng=Function.prototype.toString,hr=typeof Reflect=="object"&&Reflect!==null&&Reflect.apply,ts,bo;if(typeof hr=="function"&&typeof Object.defineProperty=="function")try{ts=Object.defineProperty({},"length",{get:function(){throw bo}}),bo={},hr(function(){throw 42},null,ts)}catch(e){e!==bo&&(hr=null)}else hr=null;var ik=/^\s*class\b/,rs=function(n){try{var t=ng.call(n);return ik.test(t)}catch{return!1}},Ca=function(n){try{return rs(n)?!1:(ng.call(n),!0)}catch{return!1}},Ao=Object.prototype.toString,ok="[object Object]",lk="[object Function]",ak="[object GeneratorFunction]",uk="[object HTMLAllCollection]",sk="[object HTML document.all class]",ck="[object HTMLCollection]",fk=typeof Symbol=="function"&&!!Symbol.toStringTag,pk=!(0 in[,]),is=function(){return!1};if(typeof document=="object"){var hk=document.all;Ao.call(hk)===Ao.call(document.all)&&(is=function(n){if((pk||!n)&&(typeof n>"u"||typeof n=="object"))try{var t=Ao.call(n);return(t===uk||t===sk||t===ck||t===ok)&&n("")==null}catch{}return!1})}var dk=hr?function(n){if(is(n))return!0;if(!n||typeof n!="function"&&typeof n!="object")return!1;try{hr(n,null,ts)}catch(t){if(t!==bo)return!1}return!rs(n)&&Ca(n)}:function(n){if(is(n))return!0;if(!n||typeof n!="function"&&typeof n!="object")return!1;if(fk)return Ca(n);if(rs(n))return!1;var t=Ao.call(n);return t!==lk&&t!==ak&&!/^\[object HTML/.test(t)?!1:Ca(n)},mk=dk,gk=Object.prototype.toString,tg=Object.prototype.hasOwnProperty,yk=function(n,t,r){for(var i=0,o=n.length;i<o;i++)tg.call(n,i)&&(r==null?t(n[i],i,n):t.call(r,n[i],i,n))},vk=function(n,t,r){for(var i=0,o=n.length;i<o;i++)r==null?t(n.charAt(i),i,n):t.call(r,n.charAt(i),i,n)},wk=function(n,t,r){for(var i in n)tg.call(n,i)&&(r==null?t(n[i],i,n):t.call(r,n[i],i,n))};function kk(e){return gk.call(e)==="[object Array]"}var xk=function(n,t,r){if(!mk(t))throw new TypeError("iterator must be a function");var i;arguments.length>=3&&(i=r),kk(n)?yk(n,t,i):typeof n=="string"?vk(n,t,i):wk(n,t,i)},Sk=["Float16Array","Float32Array","Float64Array","Int8Array","Int16Array","Int32Array","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array"],Ia=Sk,Ek=typeof globalThis>"u"?Ph:globalThis,_k=function(){for(var n=[],t=0;t<Ia.length;t++)typeof Ek[Ia[t]]=="function"&&(n[n.length]=Ia[t]);return n},rg={exports:{}},pp=Tl,bk=Um,Zt=Li,hp=zr,ig=function(n,t,r){if(!n||typeof n!="object"&&typeof n!="function")throw new Zt("`obj` must be an object or a function`");if(typeof t!="string"&&typeof t!="symbol")throw new Zt("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new Zt("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new Zt("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new Zt("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new Zt("`loose`, if provided, must be a boolean");var i=arguments.length>3?arguments[3]:null,o=arguments.length>4?arguments[4]:null,l=arguments.length>5?arguments[5]:null,a=arguments.length>6?arguments[6]:!1,u=!!hp&&hp(n,t);if(pp)pp(n,t,{configurable:l===null&&u?u.configurable:!l,enumerable:i===null&&u?u.enumerable:!i,value:r,writable:o===null&&u?u.writable:!o});else if(a||!i&&!o&&!l)n[t]=r;else throw new bk("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},os=Tl,og=function(){return!!os};og.hasArrayLengthDefineBug=function(){if(!os)return null;try{return os([],"length",{value:1}).length!==1}catch{return!0}};var lg=og,Ak=Sc,dp=ig,Pk=lg(),mp=zr,gp=Li,Ck=Ak("%Math.floor%"),Ik=function(n,t){if(typeof n!="function")throw new gp("`fn` is not a function");if(typeof t!="number"||t<0||t>4294967295||Ck(t)!==t)throw new gp("`length` must be a positive 32-bit integer");var r=arguments.length>2&&!!arguments[2],i=!0,o=!0;if("length"in n&&mp){var l=mp(n,"length");l&&!l.configurable&&(i=!1),l&&!l.writable&&(o=!1)}return(i||o||!r)&&(Pk?dp(n,"length",t,!0,!0):dp(n,"length",t)),n},Tk=Fi(),Mk=wc(),jk=Wm,Ok=function(){return jk(Tk,Mk,arguments)};(function(e){var n=Ik,t=Tl,r=kc,i=Ok;e.exports=function(l){var a=r(arguments),u=l.length-(arguments.length-1);return n(a,1+(u>0?u:0),!0)},t?t(e.exports,"apply",{value:i}):e.exports.apply=i})(rg);var jl=rg.exports,al=xk,zk=_k,yp=jl,Ec=Rr,Po=zr,lo=xc(),Rk=Ec("Object.prototype.toString"),ag=Il(),vp=typeof globalThis>"u"?Ph:globalThis,ls=zk(),_c=Ec("String.prototype.slice"),Lk=Ec("Array.prototype.indexOf",!0)||function(n,t){for(var r=0;r<n.length;r+=1)if(n[r]===t)return r;return-1},ul={__proto__:null};ag&&Po&&lo?al(ls,function(e){var n=new vp[e];if(Symbol.toStringTag in n&&lo){var t=lo(n),r=Po(t,Symbol.toStringTag);if(!r&&t){var i=lo(t);r=Po(i,Symbol.toStringTag)}ul["$"+e]=yp(r.get)}}):al(ls,function(e){var n=new vp[e],t=n.slice||n.set;t&&(ul["$"+e]=yp(t))});var Fk=function(n){var t=!1;return al(ul,function(r,i){if(!t)try{"$"+r(n)===i&&(t=_c(i,1))}catch{}}),t},Nk=function(n){var t=!1;return al(ul,function(r,i){if(!t)try{r(n),t=_c(i,1)}catch{}}),t},ug=function(n){if(!n||typeof n!="object")return!1;if(!ag){var t=_c(Rk(n),8,-1);return Lk(ls,t)>-1?t:t!=="Object"?!1:Nk(n)}return Po?Fk(n):null},Dk=ug,$k=function(n){return!!Dk(n)};(function(e){var n=Dw,t=rk,r=ug,i=$k;function o(N){return N.call.bind(N)}var l=typeof BigInt<"u",a=typeof Symbol<"u",u=o(Object.prototype.toString),s=o(Number.prototype.valueOf),f=o(String.prototype.valueOf),c=o(Boolean.prototype.valueOf);if(l)var p=o(BigInt.prototype.valueOf);if(a)var h=o(Symbol.prototype.valueOf);function w(N,Gn){if(typeof N!="object")return!1;try{return Gn(N),!0}catch{return!1}}e.isArgumentsObject=n,e.isGeneratorFunction=t,e.isTypedArray=i;function b(N){return typeof Promise<"u"&&N instanceof Promise||N!==null&&typeof N=="object"&&typeof N.then=="function"&&typeof N.catch=="function"}e.isPromise=b;function R(N){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(N):i(N)||d(N)}e.isArrayBufferView=R;function v(N){return r(N)==="Uint8Array"}e.isUint8Array=v;function m(N){return r(N)==="Uint8ClampedArray"}e.isUint8ClampedArray=m;function g(N){return r(N)==="Uint16Array"}e.isUint16Array=g;function E(N){return r(N)==="Uint32Array"}e.isUint32Array=E;function I(N){return r(N)==="Int8Array"}e.isInt8Array=I;function S(N){return r(N)==="Int16Array"}e.isInt16Array=S;function T(N){return r(N)==="Int32Array"}e.isInt32Array=T;function D(N){return r(N)==="Float32Array"}e.isFloat32Array=D;function W(N){return r(N)==="Float64Array"}e.isFloat64Array=W;function P(N){return r(N)==="BigInt64Array"}e.isBigInt64Array=P;function G(N){return r(N)==="BigUint64Array"}e.isBigUint64Array=G;function H(N){return u(N)==="[object Map]"}H.working=typeof Map<"u"&&H(new Map);function ne(N){return typeof Map>"u"?!1:H.working?H(N):N instanceof Map}e.isMap=ne;function le(N){return u(N)==="[object Set]"}le.working=typeof Set<"u"&&le(new Set);function re(N){return typeof Set>"u"?!1:le.working?le(N):N instanceof Set}e.isSet=re;function ae(N){return u(N)==="[object WeakMap]"}ae.working=typeof WeakMap<"u"&&ae(new WeakMap);function ge(N){return typeof WeakMap>"u"?!1:ae.working?ae(N):N instanceof WeakMap}e.isWeakMap=ge;function Q(N){return u(N)==="[object WeakSet]"}Q.working=typeof WeakSet<"u"&&Q(new WeakSet);function M(N){return Q(N)}e.isWeakSet=M;function y(N){return u(N)==="[object ArrayBuffer]"}y.working=typeof ArrayBuffer<"u"&&y(new ArrayBuffer);function q(N){return typeof ArrayBuffer>"u"?!1:y.working?y(N):N instanceof ArrayBuffer}e.isArrayBuffer=q;function $(N){return u(N)==="[object DataView]"}$.working=typeof ArrayBuffer<"u"&&typeof DataView<"u"&&$(new DataView(new ArrayBuffer(1),0,1));function d(N){return typeof DataView>"u"?!1:$.working?$(N):N instanceof DataView}e.isDataView=d;var k=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:void 0;function x(N){return u(N)==="[object SharedArrayBuffer]"}function _(N){return typeof k>"u"?!1:(typeof x.working>"u"&&(x.working=x(new k)),x.working?x(N):N instanceof k)}e.isSharedArrayBuffer=_;function L(N){return u(N)==="[object AsyncFunction]"}e.isAsyncFunction=L;function z(N){return u(N)==="[object Map Iterator]"}e.isMapIterator=z;function F(N){return u(N)==="[object Set Iterator]"}e.isSetIterator=F;function U(N){return u(N)==="[object Generator]"}e.isGeneratorObject=U;function K(N){return u(N)==="[object WebAssembly.Module]"}e.isWebAssemblyCompiledModule=K;function oe(N){return w(N,s)}e.isNumberObject=oe;function de(N){return w(N,f)}e.isStringObject=de;function Pe(N){return w(N,c)}e.isBooleanObject=Pe;function $e(N){return l&&w(N,p)}e.isBigIntObject=$e;function fn(N){return a&&w(N,h)}e.isSymbolObject=fn;function wn(N){return oe(N)||de(N)||Pe(N)||$e(N)||fn(N)}e.isBoxedPrimitive=wn;function Be(N){return typeof Uint8Array<"u"&&(q(N)||_(N))}e.isAnyArrayBuffer=Be,["isProxy","isExternal","isModuleNamespaceObject"].forEach(function(N){Object.defineProperty(e,N,{enumerable:!1,value:function(){throw new Error(N+" is not supported in userland")}})})})(Hm);var Bk=function(n){return n&&typeof n=="object"&&typeof n.copy=="function"&&typeof n.fill=="function"&&typeof n.readUInt8=="function"},as={exports:{}};typeof Object.create=="function"?as.exports=function(n,t){t&&(n.super_=t,n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}))}:as.exports=function(n,t){if(t){n.super_=t;var r=function(){};r.prototype=t.prototype,n.prototype=new r,n.prototype.constructor=n}};var Hk=as.exports;(function(e){var n={},t=Object.getOwnPropertyDescriptors||function(k){for(var x=Object.keys(k),_={},L=0;L<x.length;L++)_[x[L]]=Object.getOwnPropertyDescriptor(k,x[L]);return _},r=/%[sdj%]/g;e.format=function(d){if(!S(d)){for(var k=[],x=0;x<arguments.length;x++)k.push(a(arguments[x]));return k.join(" ")}for(var x=1,_=arguments,L=_.length,z=String(d).replace(r,function(U){if(U==="%%")return"%";if(x>=L)return U;switch(U){case"%s":return String(_[x++]);case"%d":return Number(_[x++]);case"%j":try{return JSON.stringify(_[x++])}catch{return"[Circular]"}default:return U}}),F=_[x];x<L;F=_[++x])g(F)||!P(F)?z+=" "+F:z+=" "+a(F);return z},e.deprecate=function(d,k){if(typeof process<"u"&&process.noDeprecation===!0)return d;if(typeof process>"u")return function(){return e.deprecate(d,k).apply(this,arguments)};var x=!1;function _(){if(!x){if(process.throwDeprecation)throw new Error(k);process.traceDeprecation?console.trace(k):console.error(k),x=!0}return d.apply(this,arguments)}return _};var i={},o=/^$/;if(n.NODE_DEBUG){var l=n.NODE_DEBUG;l=l.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),o=new RegExp("^"+l+"$","i")}e.debuglog=function(d){if(d=d.toUpperCase(),!i[d])if(o.test(d)){var k=process.pid;i[d]=function(){var x=e.format.apply(e,arguments);console.error("%s %d: %s",d,k,x)}}else i[d]=function(){};return i[d]};function a(d,k){var x={seen:[],stylize:s};return arguments.length>=3&&(x.depth=arguments[2]),arguments.length>=4&&(x.colors=arguments[3]),m(k)?x.showHidden=k:k&&e._extend(x,k),D(x.showHidden)&&(x.showHidden=!1),D(x.depth)&&(x.depth=2),D(x.colors)&&(x.colors=!1),D(x.customInspect)&&(x.customInspect=!0),x.colors&&(x.stylize=u),c(x,d,x.depth)}e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function u(d,k){var x=a.styles[k];return x?"\x1B["+a.colors[x][0]+"m"+d+"\x1B["+a.colors[x][1]+"m":d}function s(d,k){return d}function f(d){var k={};return d.forEach(function(x,_){k[x]=!0}),k}function c(d,k,x){if(d.customInspect&&k&&ne(k.inspect)&&k.inspect!==e.inspect&&!(k.constructor&&k.constructor.prototype===k)){var _=k.inspect(x,d);return S(_)||(_=c(d,_,x)),_}var L=p(d,k);if(L)return L;var z=Object.keys(k),F=f(z);if(d.showHidden&&(z=Object.getOwnPropertyNames(k)),H(k)&&(z.indexOf("message")>=0||z.indexOf("description")>=0))return h(k);if(z.length===0){if(ne(k)){var U=k.name?": "+k.name:"";return d.stylize("[Function"+U+"]","special")}if(W(k))return d.stylize(RegExp.prototype.toString.call(k),"regexp");if(G(k))return d.stylize(Date.prototype.toString.call(k),"date");if(H(k))return h(k)}var K="",oe=!1,de=["{","}"];if(v(k)&&(oe=!0,de=["[","]"]),ne(k)){var Pe=k.name?": "+k.name:"";K=" [Function"+Pe+"]"}if(W(k)&&(K=" "+RegExp.prototype.toString.call(k)),G(k)&&(K=" "+Date.prototype.toUTCString.call(k)),H(k)&&(K=" "+h(k)),z.length===0&&(!oe||k.length==0))return de[0]+K+de[1];if(x<0)return W(k)?d.stylize(RegExp.prototype.toString.call(k),"regexp"):d.stylize("[Object]","special");d.seen.push(k);var $e;return oe?$e=w(d,k,x,F,z):$e=z.map(function(fn){return b(d,k,x,F,fn,oe)}),d.seen.pop(),R($e,K,de)}function p(d,k){if(D(k))return d.stylize("undefined","undefined");if(S(k)){var x="'"+JSON.stringify(k).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return d.stylize(x,"string")}if(I(k))return d.stylize(""+k,"number");if(m(k))return d.stylize(""+k,"boolean");if(g(k))return d.stylize("null","null")}function h(d){return"["+Error.prototype.toString.call(d)+"]"}function w(d,k,x,_,L){for(var z=[],F=0,U=k.length;F<U;++F)M(k,String(F))?z.push(b(d,k,x,_,String(F),!0)):z.push("");return L.forEach(function(K){K.match(/^\d+$/)||z.push(b(d,k,x,_,K,!0))}),z}function b(d,k,x,_,L,z){var F,U,K;if(K=Object.getOwnPropertyDescriptor(k,L)||{value:k[L]},K.get?K.set?U=d.stylize("[Getter/Setter]","special"):U=d.stylize("[Getter]","special"):K.set&&(U=d.stylize("[Setter]","special")),M(_,L)||(F="["+L+"]"),U||(d.seen.indexOf(K.value)<0?(g(x)?U=c(d,K.value,null):U=c(d,K.value,x-1),U.indexOf(`
`)>-1&&(z?U=U.split(`
`).map(function(oe){return"  "+oe}).join(`
`).slice(2):U=`
`+U.split(`
`).map(function(oe){return"   "+oe}).join(`
`))):U=d.stylize("[Circular]","special")),D(F)){if(z&&L.match(/^\d+$/))return U;F=JSON.stringify(""+L),F.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(F=F.slice(1,-1),F=d.stylize(F,"name")):(F=F.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),F=d.stylize(F,"string"))}return F+": "+U}function R(d,k,x){var _=d.reduce(function(L,z){return z.indexOf(`
`)>=0,L+z.replace(/\u001b\[\d\d?m/g,"").length+1},0);return _>60?x[0]+(k===""?"":k+`
 `)+" "+d.join(`,
  `)+" "+x[1]:x[0]+k+" "+d.join(", ")+" "+x[1]}e.types=Hm;function v(d){return Array.isArray(d)}e.isArray=v;function m(d){return typeof d=="boolean"}e.isBoolean=m;function g(d){return d===null}e.isNull=g;function E(d){return d==null}e.isNullOrUndefined=E;function I(d){return typeof d=="number"}e.isNumber=I;function S(d){return typeof d=="string"}e.isString=S;function T(d){return typeof d=="symbol"}e.isSymbol=T;function D(d){return d===void 0}e.isUndefined=D;function W(d){return P(d)&&re(d)==="[object RegExp]"}e.isRegExp=W,e.types.isRegExp=W;function P(d){return typeof d=="object"&&d!==null}e.isObject=P;function G(d){return P(d)&&re(d)==="[object Date]"}e.isDate=G,e.types.isDate=G;function H(d){return P(d)&&(re(d)==="[object Error]"||d instanceof Error)}e.isError=H,e.types.isNativeError=H;function ne(d){return typeof d=="function"}e.isFunction=ne;function le(d){return d===null||typeof d=="boolean"||typeof d=="number"||typeof d=="string"||typeof d=="symbol"||typeof d>"u"}e.isPrimitive=le,e.isBuffer=Bk;function re(d){return Object.prototype.toString.call(d)}function ae(d){return d<10?"0"+d.toString(10):d.toString(10)}var ge=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Q(){var d=new Date,k=[ae(d.getHours()),ae(d.getMinutes()),ae(d.getSeconds())].join(":");return[d.getDate(),ge[d.getMonth()],k].join(" ")}e.log=function(){console.log("%s - %s",Q(),e.format.apply(e,arguments))},e.inherits=Hk,e._extend=function(d,k){if(!k||!P(k))return d;for(var x=Object.keys(k),_=x.length;_--;)d[x[_]]=k[x[_]];return d};function M(d,k){return Object.prototype.hasOwnProperty.call(d,k)}var y=typeof Symbol<"u"?Symbol("util.promisify.custom"):void 0;e.promisify=function(k){if(typeof k!="function")throw new TypeError('The "original" argument must be of type Function');if(y&&k[y]){var x=k[y];if(typeof x!="function")throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(x,y,{value:x,enumerable:!1,writable:!1,configurable:!0}),x}function x(){for(var _,L,z=new Promise(function(K,oe){_=K,L=oe}),F=[],U=0;U<arguments.length;U++)F.push(arguments[U]);F.push(function(K,oe){K?L(K):_(oe)});try{k.apply(this,F)}catch(K){L(K)}return z}return Object.setPrototypeOf(x,Object.getPrototypeOf(k)),y&&Object.defineProperty(x,y,{value:x,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(x,t(k))},e.promisify.custom=y;function q(d,k){if(!d){var x=new Error("Promise was rejected with a falsy value");x.reason=d,d=x}return k(d)}function $(d){if(typeof d!="function")throw new TypeError('The "original" argument must be of type Function');function k(){for(var x=[],_=0;_<arguments.length;_++)x.push(arguments[_]);var L=x.pop();if(typeof L!="function")throw new TypeError("The last argument must be of type Function");var z=this,F=function(){return L.apply(z,arguments)};d.apply(this,x).then(function(U){process.nextTick(F.bind(null,null,U))},function(U){process.nextTick(q.bind(null,U,F))})}return Object.setPrototypeOf(k,Object.getPrototypeOf(d)),Object.defineProperties(k,t(d)),k}e.callbackify=$})(Cr);var wp;function sg(){if(wp)return pa;wp=1;function e(m){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},e(m)}function n(m,g,E){return Object.defineProperty(m,"prototype",{writable:!1}),m}function t(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}function r(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),Object.defineProperty(m,"prototype",{writable:!1}),g&&i(m,g)}function i(m,g){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(I,S){return I.__proto__=S,I},i(m,g)}function o(m){var g=u();return function(){var I=s(m),S;if(g){var T=s(this).constructor;S=Reflect.construct(I,arguments,T)}else S=I.apply(this,arguments);return l(this,S)}}function l(m,g){if(g&&(e(g)==="object"||typeof g=="function"))return g;if(g!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return a(m)}function a(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}function u(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function s(m){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(E){return E.__proto__||Object.getPrototypeOf(E)},s(m)}var f={},c,p;function h(m,g,E){E||(E=Error);function I(T,D,W){return typeof g=="string"?g:g(T,D,W)}var S=function(T){r(W,T);var D=o(W);function W(P,G,H){var ne;return t(this,W),ne=D.call(this,I(P,G,H)),ne.code=m,ne}return n(W)}(E);f[m]=S}function w(m,g){if(Array.isArray(m)){var E=m.length;return m=m.map(function(I){return String(I)}),E>2?"one of ".concat(g," ").concat(m.slice(0,E-1).join(", "),", or ")+m[E-1]:E===2?"one of ".concat(g," ").concat(m[0]," or ").concat(m[1]):"of ".concat(g," ").concat(m[0])}else return"of ".concat(g," ").concat(String(m))}function b(m,g,E){return m.substr(0,g.length)===g}function R(m,g,E){return(E===void 0||E>m.length)&&(E=m.length),m.substring(E-g.length,E)===g}function v(m,g,E){return typeof E!="number"&&(E=0),E+g.length>m.length?!1:m.indexOf(g,E)!==-1}return h("ERR_AMBIGUOUS_ARGUMENT",'The "%s" argument is ambiguous. %s',TypeError),h("ERR_INVALID_ARG_TYPE",function(m,g,E){c===void 0&&(c=us()),c(typeof m=="string","'name' must be a string");var I;typeof g=="string"&&b(g,"not ")?(I="must not be",g=g.replace(/^not /,"")):I="must be";var S;if(R(m," argument"))S="The ".concat(m," ").concat(I," ").concat(w(g,"type"));else{var T=v(m,".")?"property":"argument";S='The "'.concat(m,'" ').concat(T," ").concat(I," ").concat(w(g,"type"))}return S+=". Received type ".concat(e(E)),S},TypeError),h("ERR_INVALID_ARG_VALUE",function(m,g){var E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"is invalid";p===void 0&&(p=Cr);var I=p.inspect(g);return I.length>128&&(I="".concat(I.slice(0,128),"...")),"The argument '".concat(m,"' ").concat(E,". Received ").concat(I)},TypeError),h("ERR_INVALID_RETURN_VALUE",function(m,g,E){var I;return E&&E.constructor&&E.constructor.name?I="instance of ".concat(E.constructor.name):I="type ".concat(e(E)),"Expected ".concat(m,' to be returned from the "').concat(g,'"')+" function but got ".concat(I,".")},TypeError),h("ERR_MISSING_ARGS",function(){for(var m=arguments.length,g=new Array(m),E=0;E<m;E++)g[E]=arguments[E];c===void 0&&(c=us()),c(g.length>0,"At least one arg needs to be specified");var I="The ",S=g.length;switch(g=g.map(function(T){return'"'.concat(T,'"')}),S){case 1:I+="".concat(g[0]," argument");break;case 2:I+="".concat(g[0]," and ").concat(g[1]," arguments");break;default:I+=g.slice(0,S-1).join(", "),I+=", and ".concat(g[S-1]," arguments");break}return"".concat(I," must be specified")},TypeError),pa.codes=f,pa}var Ta,kp;function Uk(){if(kp)return Ta;kp=1;function e(M,y){var q=Object.keys(M);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(M);y&&($=$.filter(function(d){return Object.getOwnPropertyDescriptor(M,d).enumerable})),q.push.apply(q,$)}return q}function n(M){for(var y=1;y<arguments.length;y++){var q=arguments[y]!=null?arguments[y]:{};y%2?e(Object(q),!0).forEach(function($){t(M,$,q[$])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(q)):e(Object(q)).forEach(function($){Object.defineProperty(M,$,Object.getOwnPropertyDescriptor(q,$))})}return M}function t(M,y,q){return y=l(y),y in M?Object.defineProperty(M,y,{value:q,enumerable:!0,configurable:!0,writable:!0}):M[y]=q,M}function r(M,y){if(!(M instanceof y))throw new TypeError("Cannot call a class as a function")}function i(M,y){for(var q=0;q<y.length;q++){var $=y[q];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(M,l($.key),$)}}function o(M,y,q){return y&&i(M.prototype,y),Object.defineProperty(M,"prototype",{writable:!1}),M}function l(M){var y=a(M,"string");return m(y)==="symbol"?y:String(y)}function a(M,y){if(m(M)!=="object"||M===null)return M;var q=M[Symbol.toPrimitive];if(q!==void 0){var $=q.call(M,y);if(m($)!=="object")return $;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(M)}function u(M,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(y&&y.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),y&&R(M,y)}function s(M){var y=w();return function(){var $=v(M),d;if(y){var k=v(this).constructor;d=Reflect.construct($,arguments,k)}else d=$.apply(this,arguments);return f(this,d)}}function f(M,y){if(y&&(m(y)==="object"||typeof y=="function"))return y;if(y!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(M)}function c(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function p(M){var y=typeof Map=="function"?new Map:void 0;return p=function($){if($===null||!b($))return $;if(typeof $!="function")throw new TypeError("Super expression must either be null or a function");if(typeof y<"u"){if(y.has($))return y.get($);y.set($,d)}function d(){return h($,arguments,v(this).constructor)}return d.prototype=Object.create($.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),R(d,$)},p(M)}function h(M,y,q){return w()?h=Reflect.construct.bind():h=function(d,k,x){var _=[null];_.push.apply(_,k);var L=Function.bind.apply(d,_),z=new L;return x&&R(z,x.prototype),z},h.apply(null,arguments)}function w(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b(M){return Function.toString.call(M).indexOf("[native code]")!==-1}function R(M,y){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function($,d){return $.__proto__=d,$},R(M,y)}function v(M){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(q){return q.__proto__||Object.getPrototypeOf(q)},v(M)}function m(M){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},m(M)}var g=Cr,E=g.inspect,I=sg(),S=I.codes.ERR_INVALID_ARG_TYPE;function T(M,y,q){return(q===void 0||q>M.length)&&(q=M.length),M.substring(q-y.length,q)===y}function D(M,y){if(y=Math.floor(y),M.length==0||y==0)return"";var q=M.length*y;for(y=Math.floor(Math.log(y)/Math.log(2));y;)M+=M,y--;return M+=M.substring(0,q-M.length),M}var W="",P="",G="",H="",ne={deepStrictEqual:"Expected values to be strictly deep-equal:",strictEqual:"Expected values to be strictly equal:",strictEqualObject:'Expected "actual" to be reference-equal to "expected":',deepEqual:"Expected values to be loosely deep-equal:",equal:"Expected values to be loosely equal:",notDeepStrictEqual:'Expected "actual" not to be strictly deep-equal to:',notStrictEqual:'Expected "actual" to be strictly unequal to:',notStrictEqualObject:'Expected "actual" not to be reference-equal to "expected":',notDeepEqual:'Expected "actual" not to be loosely deep-equal to:',notEqual:'Expected "actual" to be loosely unequal to:',notIdentical:"Values identical but not reference-equal:"},le=10;function re(M){var y=Object.keys(M),q=Object.create(Object.getPrototypeOf(M));return y.forEach(function($){q[$]=M[$]}),Object.defineProperty(q,"message",{value:M.message}),q}function ae(M){return E(M,{compact:!1,customInspect:!1,depth:1e3,maxArrayLength:1/0,showHidden:!1,breakLength:1/0,showProxy:!1,sorted:!0,getters:!0})}function ge(M,y,q){var $="",d="",k=0,x="",_=!1,L=ae(M),z=L.split(`
`),F=ae(y).split(`
`),U=0,K="";if(q==="strictEqual"&&m(M)==="object"&&m(y)==="object"&&M!==null&&y!==null&&(q="strictEqualObject"),z.length===1&&F.length===1&&z[0]!==F[0]){var oe=z[0].length+F[0].length;if(oe<=le){if((m(M)!=="object"||M===null)&&(m(y)!=="object"||y===null)&&(M!==0||y!==0))return"".concat(ne[q],`

`)+"".concat(z[0]," !== ").concat(F[0],`
`)}else if(q!=="strictEqualObject"){var de=process.stderr&&process.stderr.isTTY?process.stderr.columns:80;if(oe<de){for(;z[0][U]===F[0][U];)U++;U>2&&(K=`
  `.concat(D(" ",U),"^"),U=0)}}}for(var Pe=z[z.length-1],$e=F[F.length-1];Pe===$e&&(U++<2?x=`
  `.concat(Pe).concat(x):$=Pe,z.pop(),F.pop(),!(z.length===0||F.length===0));)Pe=z[z.length-1],$e=F[F.length-1];var fn=Math.max(z.length,F.length);if(fn===0){var wn=L.split(`
`);if(wn.length>30)for(wn[26]="".concat(W,"...").concat(H);wn.length>27;)wn.pop();return"".concat(ne.notIdentical,`

`).concat(wn.join(`
`),`
`)}U>3&&(x=`
`.concat(W,"...").concat(H).concat(x),_=!0),$!==""&&(x=`
  `.concat($).concat(x),$="");var Be=0,N=ne[q]+`
`.concat(P,"+ actual").concat(H," ").concat(G,"- expected").concat(H),Gn=" ".concat(W,"...").concat(H," Lines skipped");for(U=0;U<fn;U++){var Xe=U-k;if(z.length<U+1)Xe>1&&U>2&&(Xe>4?(d+=`
`.concat(W,"...").concat(H),_=!0):Xe>3&&(d+=`
  `.concat(F[U-2]),Be++),d+=`
  `.concat(F[U-1]),Be++),k=U,$+=`
`.concat(G,"-").concat(H," ").concat(F[U]),Be++;else if(F.length<U+1)Xe>1&&U>2&&(Xe>4?(d+=`
`.concat(W,"...").concat(H),_=!0):Xe>3&&(d+=`
  `.concat(z[U-2]),Be++),d+=`
  `.concat(z[U-1]),Be++),k=U,d+=`
`.concat(P,"+").concat(H," ").concat(z[U]),Be++;else{var Yn=F[U],In=z[U],C=In!==Yn&&(!T(In,",")||In.slice(0,-1)!==Yn);C&&T(Yn,",")&&Yn.slice(0,-1)===In&&(C=!1,In+=","),C?(Xe>1&&U>2&&(Xe>4?(d+=`
`.concat(W,"...").concat(H),_=!0):Xe>3&&(d+=`
  `.concat(z[U-2]),Be++),d+=`
  `.concat(z[U-1]),Be++),k=U,d+=`
`.concat(P,"+").concat(H," ").concat(In),$+=`
`.concat(G,"-").concat(H," ").concat(Yn),Be+=2):(d+=$,$="",(Xe===1||U===0)&&(d+=`
  `.concat(In),Be++))}if(Be>20&&U<fn-2)return"".concat(N).concat(Gn,`
`).concat(d,`
`).concat(W,"...").concat(H).concat($,`
`)+"".concat(W,"...").concat(H)}return"".concat(N).concat(_?Gn:"",`
`).concat(d).concat($).concat(x).concat(K)}var Q=function(M,y){u($,M);var q=s($);function $(d){var k;if(r(this,$),m(d)!=="object"||d===null)throw new S("options","Object",d);var x=d.message,_=d.operator,L=d.stackStartFn,z=d.actual,F=d.expected,U=Error.stackTraceLimit;if(Error.stackTraceLimit=0,x!=null)k=q.call(this,String(x));else if(process.stderr&&process.stderr.isTTY&&(process.stderr&&process.stderr.getColorDepth&&process.stderr.getColorDepth()!==1?(W="\x1B[34m",P="\x1B[32m",H="\x1B[39m",G="\x1B[31m"):(W="",P="",H="",G="")),m(z)==="object"&&z!==null&&m(F)==="object"&&F!==null&&"stack"in z&&z instanceof Error&&"stack"in F&&F instanceof Error&&(z=re(z),F=re(F)),_==="deepStrictEqual"||_==="strictEqual")k=q.call(this,ge(z,F,_));else if(_==="notDeepStrictEqual"||_==="notStrictEqual"){var K=ne[_],oe=ae(z).split(`
`);if(_==="notStrictEqual"&&m(z)==="object"&&z!==null&&(K=ne.notStrictEqualObject),oe.length>30)for(oe[26]="".concat(W,"...").concat(H);oe.length>27;)oe.pop();oe.length===1?k=q.call(this,"".concat(K," ").concat(oe[0])):k=q.call(this,"".concat(K,`

`).concat(oe.join(`
`),`
`))}else{var de=ae(z),Pe="",$e=ne[_];_==="notDeepEqual"||_==="notEqual"?(de="".concat(ne[_],`

`).concat(de),de.length>1024&&(de="".concat(de.slice(0,1021),"..."))):(Pe="".concat(ae(F)),de.length>512&&(de="".concat(de.slice(0,509),"...")),Pe.length>512&&(Pe="".concat(Pe.slice(0,509),"...")),_==="deepEqual"||_==="equal"?de="".concat($e,`

`).concat(de,`

should equal

`):Pe=" ".concat(_," ").concat(Pe)),k=q.call(this,"".concat(de).concat(Pe))}return Error.stackTraceLimit=U,k.generatedMessage=!x,Object.defineProperty(c(k),"name",{value:"AssertionError [ERR_ASSERTION]",enumerable:!1,writable:!0,configurable:!0}),k.code="ERR_ASSERTION",k.actual=z,k.expected=F,k.operator=_,Error.captureStackTrace&&Error.captureStackTrace(c(k),L),k.stack,k.name="AssertionError",f(k)}return o($,[{key:"toString",value:function(){return"".concat(this.name," [").concat(this.code,"]: ").concat(this.message)}},{key:y,value:function(k,x){return E(this,n(n({},x),{},{customInspect:!1,depth:0}))}}]),$}(p(Error),E.custom);return Ta=Q,Ta}var xp=Object.prototype.toString,cg=function(n){var t=xp.call(n),r=t==="[object Arguments]";return r||(r=t!=="[object Array]"&&n!==null&&typeof n=="object"&&typeof n.length=="number"&&n.length>=0&&xp.call(n.callee)==="[object Function]"),r},Ma,Sp;function qk(){if(Sp)return Ma;Sp=1;var e;if(!Object.keys){var n=Object.prototype.hasOwnProperty,t=Object.prototype.toString,r=cg,i=Object.prototype.propertyIsEnumerable,o=!i.call({toString:null},"toString"),l=i.call(function(){},"prototype"),a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=function(p){var h=p.constructor;return h&&h.prototype===p},s={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if(typeof window>"u")return!1;for(var p in window)try{if(!s["$"+p]&&n.call(window,p)&&window[p]!==null&&typeof window[p]=="object")try{u(window[p])}catch{return!0}}catch{return!0}return!1}(),c=function(p){if(typeof window>"u"||!f)return u(p);try{return u(p)}catch{return!1}};e=function(h){var w=h!==null&&typeof h=="object",b=t.call(h)==="[object Function]",R=r(h),v=w&&t.call(h)==="[object String]",m=[];if(!w&&!b&&!R)throw new TypeError("Object.keys called on a non-object");var g=l&&b;if(v&&h.length>0&&!n.call(h,0))for(var E=0;E<h.length;++E)m.push(String(E));if(R&&h.length>0)for(var I=0;I<h.length;++I)m.push(String(I));else for(var S in h)!(g&&S==="prototype")&&n.call(h,S)&&m.push(String(S));if(o)for(var T=c(h),D=0;D<a.length;++D)!(T&&a[D]==="constructor")&&n.call(h,a[D])&&m.push(a[D]);return m}}return Ma=e,Ma}var Vk=Array.prototype.slice,Wk=cg,Ep=Object.keys,Co=Ep?function(n){return Ep(n)}:qk(),_p=Object.keys;Co.shim=function(){if(Object.keys){var n=function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2);n||(Object.keys=function(r){return Wk(r)?_p(Vk.call(r)):_p(r)})}else Object.keys=Co;return Object.keys||Co};var fg=Co,Qk=fg,pg=gc(),hg=Rr,Io=yc,Gk=hg("Array.prototype.push"),bp=hg("Object.prototype.propertyIsEnumerable"),Yk=pg?Io.getOwnPropertySymbols:null,Xk=function(n,t){if(n==null)throw new TypeError("target must be an object");var r=Io(n);if(arguments.length===1)return r;for(var i=1;i<arguments.length;++i){var o=Io(arguments[i]),l=Qk(o),a=pg&&(Io.getOwnPropertySymbols||Yk);if(a)for(var u=a(o),s=0;s<u.length;++s){var f=u[s];bp(o,f)&&Gk(l,f)}for(var c=0;c<l.length;++c){var p=l[c];if(bp(o,p)){var h=o[p];r[p]=h}}}return r},ja=Xk,Jk=function(){if(!Object.assign)return!1;for(var e="abcdefghijklmnopqrst",n=e.split(""),t={},r=0;r<n.length;++r)t[n[r]]=n[r];var i=Object.assign({},t),o="";for(var l in i)o+=l;return e!==o},Zk=function(){if(!Object.assign||!Object.preventExtensions)return!1;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch{return e[1]==="y"}return!1},Kk=function(){return!Object.assign||Jk()||Zk()?ja:Object.assign},Ap=function(e){return e!==e},dg=function(n,t){return n===0&&t===0?1/n===1/t:!!(n===t||Ap(n)&&Ap(t))},ex=dg,bc=function(){return typeof Object.is=="function"?Object.is:ex},mg=Sc,gg=jl,nx=gg(mg("String.prototype.indexOf")),tx=function(n,t){var r=mg(n,!!t);return typeof r=="function"&&nx(n,".prototype.")>-1?gg(r):r},Oa,Pp;function Ol(){if(Pp)return Oa;Pp=1;var e=fg,n=typeof Symbol=="function"&&typeof Symbol("foo")=="symbol",t=Object.prototype.toString,r=Array.prototype.concat,i=ig,o=function(s){return typeof s=="function"&&t.call(s)==="[object Function]"},l=lg(),a=function(s,f,c,p){if(f in s){if(p===!0){if(s[f]===c)return}else if(!o(p)||!p())return}l?i(s,f,c,!0):i(s,f,c)},u=function(s,f){var c=arguments.length>2?arguments[2]:{},p=e(f);n&&(p=r.call(p,Object.getOwnPropertySymbols(f)));for(var h=0;h<p.length;h+=1)a(s,p[h],f[p[h]],c[p[h]])};return u.supportsDescriptors=!!l,Oa=u,Oa}var za,Cp;function rx(){if(Cp)return za;Cp=1;var e=bc,n=Ol();return za=function(){var r=e();return n(Object,{is:r},{is:function(){return Object.is!==r}}),r},za}var Ra,Ip;function ix(){if(Ip)return Ra;Ip=1;var e=Ol(),n=jl,t=dg,r=bc,i=rx(),o=n(r(),Object);return e(o,{getPolyfill:r,implementation:t,shim:i}),Ra=o,Ra}var La,Tp;function yg(){return Tp||(Tp=1,La=function(n){return n!==n}),La}var Fa,Mp;function vg(){if(Mp)return Fa;Mp=1;var e=yg();return Fa=function(){return Number.isNaN&&Number.isNaN(NaN)&&!Number.isNaN("a")?Number.isNaN:e},Fa}var Na,jp;function ox(){if(jp)return Na;jp=1;var e=Ol(),n=vg();return Na=function(){var r=n();return e(Number,{isNaN:r},{isNaN:function(){return Number.isNaN!==r}}),r},Na}var Da,Op;function lx(){if(Op)return Da;Op=1;var e=jl,n=Ol(),t=yg(),r=vg(),i=ox(),o=e(r(),Number);return n(o,{getPolyfill:r,implementation:t,shim:i}),Da=o,Da}var $a,zp;function ax(){if(zp)return $a;zp=1;function e(C,j){return o(C)||i(C,j)||t(C,j)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(C,j){if(C){if(typeof C=="string")return r(C,j);var A=Object.prototype.toString.call(C).slice(8,-1);if(A==="Object"&&C.constructor&&(A=C.constructor.name),A==="Map"||A==="Set")return Array.from(C);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return r(C,j)}}function r(C,j){(j==null||j>C.length)&&(j=C.length);for(var A=0,O=new Array(j);A<j;A++)O[A]=C[A];return O}function i(C,j){var A=C==null?null:typeof Symbol<"u"&&C[Symbol.iterator]||C["@@iterator"];if(A!=null){var O,B,Y,X,ie=[],ue=!0,ve=!1;try{if(Y=(A=A.call(C)).next,j!==0)for(;!(ue=(O=Y.call(A)).done)&&(ie.push(O.value),ie.length!==j);ue=!0);}catch(Ie){ve=!0,B=Ie}finally{try{if(!ue&&A.return!=null&&(X=A.return(),Object(X)!==X))return}finally{if(ve)throw B}}return ie}}function o(C){if(Array.isArray(C))return C}function l(C){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},l(C)}var a=/a/g.flags!==void 0,u=function(j){var A=[];return j.forEach(function(O){return A.push(O)}),A},s=function(j){var A=[];return j.forEach(function(O,B){return A.push([B,O])}),A},f=Object.is?Object.is:ix(),c=Object.getOwnPropertySymbols?Object.getOwnPropertySymbols:function(){return[]},p=Number.isNaN?Number.isNaN:lx();function h(C){return C.call.bind(C)}var w=h(Object.prototype.hasOwnProperty),b=h(Object.prototype.propertyIsEnumerable),R=h(Object.prototype.toString),v=Cr.types,m=v.isAnyArrayBuffer,g=v.isArrayBufferView,E=v.isDate,I=v.isMap,S=v.isRegExp,T=v.isSet,D=v.isNativeError,W=v.isBoxedPrimitive,P=v.isNumberObject,G=v.isStringObject,H=v.isBooleanObject,ne=v.isBigIntObject,le=v.isSymbolObject,re=v.isFloat32Array,ae=v.isFloat64Array;function ge(C){if(C.length===0||C.length>10)return!0;for(var j=0;j<C.length;j++){var A=C.charCodeAt(j);if(A<48||A>57)return!0}return C.length===10&&C>=Math.pow(2,32)}function Q(C){return Object.keys(C).filter(ge).concat(c(C).filter(Object.prototype.propertyIsEnumerable.bind(C)))}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function M(C,j){if(C===j)return 0;for(var A=C.length,O=j.length,B=0,Y=Math.min(A,O);B<Y;++B)if(C[B]!==j[B]){A=C[B],O=j[B];break}return A<O?-1:O<A?1:0}var y=!0,q=!1,$=0,d=1,k=2,x=3;function _(C,j){return a?C.source===j.source&&C.flags===j.flags:RegExp.prototype.toString.call(C)===RegExp.prototype.toString.call(j)}function L(C,j){if(C.byteLength!==j.byteLength)return!1;for(var A=0;A<C.byteLength;A++)if(C[A]!==j[A])return!1;return!0}function z(C,j){return C.byteLength!==j.byteLength?!1:M(new Uint8Array(C.buffer,C.byteOffset,C.byteLength),new Uint8Array(j.buffer,j.byteOffset,j.byteLength))===0}function F(C,j){return C.byteLength===j.byteLength&&M(new Uint8Array(C),new Uint8Array(j))===0}function U(C,j){return P(C)?P(j)&&f(Number.prototype.valueOf.call(C),Number.prototype.valueOf.call(j)):G(C)?G(j)&&String.prototype.valueOf.call(C)===String.prototype.valueOf.call(j):H(C)?H(j)&&Boolean.prototype.valueOf.call(C)===Boolean.prototype.valueOf.call(j):ne(C)?ne(j)&&BigInt.prototype.valueOf.call(C)===BigInt.prototype.valueOf.call(j):le(j)&&Symbol.prototype.valueOf.call(C)===Symbol.prototype.valueOf.call(j)}function K(C,j,A,O){if(C===j)return C!==0?!0:A?f(C,j):!0;if(A){if(l(C)!=="object")return typeof C=="number"&&p(C)&&p(j);if(l(j)!=="object"||C===null||j===null||Object.getPrototypeOf(C)!==Object.getPrototypeOf(j))return!1}else{if(C===null||l(C)!=="object")return j===null||l(j)!=="object"?C==j:!1;if(j===null||l(j)!=="object")return!1}var B=R(C),Y=R(j);if(B!==Y)return!1;if(Array.isArray(C)){if(C.length!==j.length)return!1;var X=Q(C),ie=Q(j);return X.length!==ie.length?!1:de(C,j,A,O,d,X)}if(B==="[object Object]"&&(!I(C)&&I(j)||!T(C)&&T(j)))return!1;if(E(C)){if(!E(j)||Date.prototype.getTime.call(C)!==Date.prototype.getTime.call(j))return!1}else if(S(C)){if(!S(j)||!_(C,j))return!1}else if(D(C)||C instanceof Error){if(C.message!==j.message||C.name!==j.name)return!1}else if(g(C)){if(!A&&(re(C)||ae(C))){if(!L(C,j))return!1}else if(!z(C,j))return!1;var ue=Q(C),ve=Q(j);return ue.length!==ve.length?!1:de(C,j,A,O,$,ue)}else{if(T(C))return!T(j)||C.size!==j.size?!1:de(C,j,A,O,k);if(I(C))return!I(j)||C.size!==j.size?!1:de(C,j,A,O,x);if(m(C)){if(!F(C,j))return!1}else if(W(C)&&!U(C,j))return!1}return de(C,j,A,O,$)}function oe(C,j){return j.filter(function(A){return b(C,A)})}function de(C,j,A,O,B,Y){if(arguments.length===5){Y=Object.keys(C);var X=Object.keys(j);if(Y.length!==X.length)return!1}for(var ie=0;ie<Y.length;ie++)if(!w(j,Y[ie]))return!1;if(A&&arguments.length===5){var ue=c(C);if(ue.length!==0){var ve=0;for(ie=0;ie<ue.length;ie++){var Ie=ue[ie];if(b(C,Ie)){if(!b(j,Ie))return!1;Y.push(Ie),ve++}else if(b(j,Ie))return!1}var Tn=c(j);if(ue.length!==Tn.length&&oe(j,Tn).length!==ve)return!1}else{var Me=c(j);if(Me.length!==0&&oe(j,Me).length!==0)return!1}}if(Y.length===0&&(B===$||B===d&&C.length===0||C.size===0))return!0;if(O===void 0)O={val1:new Map,val2:new Map,position:0};else{var kn=O.val1.get(C);if(kn!==void 0){var Oe=O.val2.get(j);if(Oe!==void 0)return kn===Oe}O.position++}O.val1.set(C,O.position),O.val2.set(j,O.position);var Fr=Xe(C,j,A,Y,O,B);return O.val1.delete(C),O.val2.delete(j),Fr}function Pe(C,j,A,O){for(var B=u(C),Y=0;Y<B.length;Y++){var X=B[Y];if(K(j,X,A,O))return C.delete(X),!0}return!1}function $e(C){switch(l(C)){case"undefined":return null;case"object":return;case"symbol":return!1;case"string":C=+C;case"number":if(p(C))return!1}return!0}function fn(C,j,A){var O=$e(A);return O??(j.has(O)&&!C.has(O))}function wn(C,j,A,O,B){var Y=$e(A);if(Y!=null)return Y;var X=j.get(Y);return X===void 0&&!j.has(Y)||!K(O,X,!1,B)?!1:!C.has(Y)&&K(O,X,!1,B)}function Be(C,j,A,O){for(var B=null,Y=u(C),X=0;X<Y.length;X++){var ie=Y[X];if(l(ie)==="object"&&ie!==null)B===null&&(B=new Set),B.add(ie);else if(!j.has(ie)){if(A||!fn(C,j,ie))return!1;B===null&&(B=new Set),B.add(ie)}}if(B!==null){for(var ue=u(j),ve=0;ve<ue.length;ve++){var Ie=ue[ve];if(l(Ie)==="object"&&Ie!==null){if(!Pe(B,Ie,A,O))return!1}else if(!A&&!C.has(Ie)&&!Pe(B,Ie,A,O))return!1}return B.size===0}return!0}function N(C,j,A,O,B,Y){for(var X=u(C),ie=0;ie<X.length;ie++){var ue=X[ie];if(K(A,ue,B,Y)&&K(O,j.get(ue),B,Y))return C.delete(ue),!0}return!1}function Gn(C,j,A,O){for(var B=null,Y=s(C),X=0;X<Y.length;X++){var ie=e(Y[X],2),ue=ie[0],ve=ie[1];if(l(ue)==="object"&&ue!==null)B===null&&(B=new Set),B.add(ue);else{var Ie=j.get(ue);if(Ie===void 0&&!j.has(ue)||!K(ve,Ie,A,O)){if(A||!wn(C,j,ue,ve,O))return!1;B===null&&(B=new Set),B.add(ue)}}}if(B!==null){for(var Tn=s(j),Me=0;Me<Tn.length;Me++){var kn=e(Tn[Me],2),Oe=kn[0],Fr=kn[1];if(l(Oe)==="object"&&Oe!==null){if(!N(B,C,Oe,Fr,A,O))return!1}else if(!A&&(!C.has(Oe)||!K(C.get(Oe),Fr,!1,O))&&!N(B,C,Oe,Fr,!1,O))return!1}return B.size===0}return!0}function Xe(C,j,A,O,B,Y){var X=0;if(Y===k){if(!Be(C,j,A,B))return!1}else if(Y===x){if(!Gn(C,j,A,B))return!1}else if(Y===d)for(;X<C.length;X++)if(w(C,X)){if(!w(j,X)||!K(C[X],j[X],A,B))return!1}else{if(w(j,X))return!1;for(var ie=Object.keys(C);X<ie.length;X++){var ue=ie[X];if(!w(j,ue)||!K(C[ue],j[ue],A,B))return!1}return ie.length===Object.keys(j).length}for(X=0;X<O.length;X++){var ve=O[X];if(!K(C[ve],j[ve],A,B))return!1}return!0}function Yn(C,j){return K(C,j,q)}function In(C,j){return K(C,j,y)}return $a={isDeepEqual:Yn,isDeepStrictEqual:In},$a}var Rp;function us(){if(Rp)return fa.exports;Rp=1;function e(k){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},e(k)}function n(k,x,_){return Object.defineProperty(k,"prototype",{writable:!1}),k}function t(k,x){if(!(k instanceof x))throw new TypeError("Cannot call a class as a function")}var r=sg(),i=r.codes,o=i.ERR_AMBIGUOUS_ARGUMENT,l=i.ERR_INVALID_ARG_TYPE,a=i.ERR_INVALID_ARG_VALUE,u=i.ERR_INVALID_RETURN_VALUE,s=i.ERR_MISSING_ARGS,f=Uk(),c=Cr,p=c.inspect,h=Cr.types,w=h.isPromise,b=h.isRegExp,R=Kk(),v=bc(),m=tx("RegExp.prototype.test"),g,E;function I(){var k=ax();g=k.isDeepEqual,E=k.isDeepStrictEqual}var S=!1,T=fa.exports=H,D={};function W(k){throw k.message instanceof Error?k.message:new f(k)}function P(k,x,_,L,z){var F=arguments.length,U;if(F===0)U="Failed";else if(F===1)_=k,k=void 0;else{if(S===!1){S=!0;var K=process.emitWarning?process.emitWarning:console.warn.bind(console);K("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.","DeprecationWarning","DEP0094")}F===2&&(L="!=")}if(_ instanceof Error)throw _;var oe={actual:k,expected:x,operator:L===void 0?"fail":L,stackStartFn:z||P};_!==void 0&&(oe.message=_);var de=new f(oe);throw U&&(de.message=U,de.generatedMessage=!0),de}T.fail=P,T.AssertionError=f;function G(k,x,_,L){if(!_){var z=!1;if(x===0)z=!0,L="No value argument passed to `assert.ok()`";else if(L instanceof Error)throw L;var F=new f({actual:_,expected:!0,message:L,operator:"==",stackStartFn:k});throw F.generatedMessage=z,F}}function H(){for(var k=arguments.length,x=new Array(k),_=0;_<k;_++)x[_]=arguments[_];G.apply(void 0,[H,x.length].concat(x))}T.ok=H,T.equal=function k(x,_,L){if(arguments.length<2)throw new s("actual","expected");x!=_&&W({actual:x,expected:_,message:L,operator:"==",stackStartFn:k})},T.notEqual=function k(x,_,L){if(arguments.length<2)throw new s("actual","expected");x==_&&W({actual:x,expected:_,message:L,operator:"!=",stackStartFn:k})},T.deepEqual=function k(x,_,L){if(arguments.length<2)throw new s("actual","expected");g===void 0&&I(),g(x,_)||W({actual:x,expected:_,message:L,operator:"deepEqual",stackStartFn:k})},T.notDeepEqual=function k(x,_,L){if(arguments.length<2)throw new s("actual","expected");g===void 0&&I(),g(x,_)&&W({actual:x,expected:_,message:L,operator:"notDeepEqual",stackStartFn:k})},T.deepStrictEqual=function k(x,_,L){if(arguments.length<2)throw new s("actual","expected");g===void 0&&I(),E(x,_)||W({actual:x,expected:_,message:L,operator:"deepStrictEqual",stackStartFn:k})},T.notDeepStrictEqual=ne;function ne(k,x,_){if(arguments.length<2)throw new s("actual","expected");g===void 0&&I(),E(k,x)&&W({actual:k,expected:x,message:_,operator:"notDeepStrictEqual",stackStartFn:ne})}T.strictEqual=function k(x,_,L){if(arguments.length<2)throw new s("actual","expected");v(x,_)||W({actual:x,expected:_,message:L,operator:"strictEqual",stackStartFn:k})},T.notStrictEqual=function k(x,_,L){if(arguments.length<2)throw new s("actual","expected");v(x,_)&&W({actual:x,expected:_,message:L,operator:"notStrictEqual",stackStartFn:k})};var le=n(function k(x,_,L){var z=this;t(this,k),_.forEach(function(F){F in x&&(L!==void 0&&typeof L[F]=="string"&&b(x[F])&&m(x[F],L[F])?z[F]=L[F]:z[F]=x[F])})});function re(k,x,_,L,z,F){if(!(_ in k)||!E(k[_],x[_])){if(!L){var U=new le(k,z),K=new le(x,z,k),oe=new f({actual:U,expected:K,operator:"deepStrictEqual",stackStartFn:F});throw oe.actual=k,oe.expected=x,oe.operator=F.name,oe}W({actual:k,expected:x,message:L,operator:F.name,stackStartFn:F})}}function ae(k,x,_,L){if(typeof x!="function"){if(b(x))return m(x,k);if(arguments.length===2)throw new l("expected",["Function","RegExp"],x);if(e(k)!=="object"||k===null){var z=new f({actual:k,expected:x,message:_,operator:"deepStrictEqual",stackStartFn:L});throw z.operator=L.name,z}var F=Object.keys(x);if(x instanceof Error)F.push("name","message");else if(F.length===0)throw new a("error",x,"may not be an empty object");return g===void 0&&I(),F.forEach(function(U){typeof k[U]=="string"&&b(x[U])&&m(x[U],k[U])||re(k,x,U,_,F,L)}),!0}return x.prototype!==void 0&&k instanceof x?!0:Error.isPrototypeOf(x)?!1:x.call({},k)===!0}function ge(k){if(typeof k!="function")throw new l("fn","Function",k);try{k()}catch(x){return x}return D}function Q(k){return w(k)||k!==null&&e(k)==="object"&&typeof k.then=="function"&&typeof k.catch=="function"}function M(k){return Promise.resolve().then(function(){var x;if(typeof k=="function"){if(x=k(),!Q(x))throw new u("instance of Promise","promiseFn",x)}else if(Q(k))x=k;else throw new l("promiseFn",["Function","Promise"],k);return Promise.resolve().then(function(){return x}).then(function(){return D}).catch(function(_){return _})})}function y(k,x,_,L){if(typeof _=="string"){if(arguments.length===4)throw new l("error",["Object","Error","Function","RegExp"],_);if(e(x)==="object"&&x!==null){if(x.message===_)throw new o("error/message",'The error message "'.concat(x.message,'" is identical to the message.'))}else if(x===_)throw new o("error/message",'The error "'.concat(x,'" is identical to the message.'));L=_,_=void 0}else if(_!=null&&e(_)!=="object"&&typeof _!="function")throw new l("error",["Object","Error","Function","RegExp"],_);if(x===D){var z="";_&&_.name&&(z+=" (".concat(_.name,")")),z+=L?": ".concat(L):".";var F=k.name==="rejects"?"rejection":"exception";W({actual:void 0,expected:_,operator:k.name,message:"Missing expected ".concat(F).concat(z),stackStartFn:k})}if(_&&!ae(x,_,L,k))throw x}function q(k,x,_,L){if(x!==D){if(typeof _=="string"&&(L=_,_=void 0),!_||ae(x,_)){var z=L?": ".concat(L):".",F=k.name==="doesNotReject"?"rejection":"exception";W({actual:x,expected:_,operator:k.name,message:"Got unwanted ".concat(F).concat(z,`
`)+'Actual message: "'.concat(x&&x.message,'"'),stackStartFn:k})}throw x}}T.throws=function k(x){for(var _=arguments.length,L=new Array(_>1?_-1:0),z=1;z<_;z++)L[z-1]=arguments[z];y.apply(void 0,[k,ge(x)].concat(L))},T.rejects=function k(x){for(var _=arguments.length,L=new Array(_>1?_-1:0),z=1;z<_;z++)L[z-1]=arguments[z];return M(x).then(function(F){return y.apply(void 0,[k,F].concat(L))})},T.doesNotThrow=function k(x){for(var _=arguments.length,L=new Array(_>1?_-1:0),z=1;z<_;z++)L[z-1]=arguments[z];q.apply(void 0,[k,ge(x)].concat(L))},T.doesNotReject=function k(x){for(var _=arguments.length,L=new Array(_>1?_-1:0),z=1;z<_;z++)L[z-1]=arguments[z];return M(x).then(function(F){return q.apply(void 0,[k,F].concat(L))})},T.ifError=function k(x){if(x!=null){var _="ifError got unwanted exception: ";e(x)==="object"&&typeof x.message=="string"?x.message.length===0&&x.constructor?_+=x.constructor.name:_+=x.message:_+=p(x);var L=new f({actual:x,expected:null,operator:"ifError",message:_,stackStartFn:k}),z=x.stack;if(typeof z=="string"){var F=z.split(`
`);F.shift();for(var U=L.stack.split(`
`),K=0;K<F.length;K++){var oe=U.indexOf(F[K]);if(oe!==-1){U=U.slice(0,oe);break}}L.stack="".concat(U.join(`
`),`
`).concat(F.join(`
`))}throw L}};function $(k,x,_,L,z){if(!b(x))throw new l("regexp","RegExp",x);var F=z==="match";if(typeof k!="string"||m(x,k)!==F){if(_ instanceof Error)throw _;var U=!_;_=_||(typeof k!="string"?'The "string" argument must be of type string. Received type '+"".concat(e(k)," (").concat(p(k),")"):(F?"The input did not match the regular expression ":"The input was expected to not match the regular expression ")+"".concat(p(x),`. Input:

`).concat(p(k),`
`));var K=new f({actual:k,expected:x,message:_,operator:z,stackStartFn:L});throw K.generatedMessage=U,K}}T.match=function k(x,_,L){$(x,_,L,k,"match")},T.doesNotMatch=function k(x,_,L){$(x,_,L,k,"doesNotMatch")};function d(){for(var k=arguments.length,x=new Array(k),_=0;_<k;_++)x[_]=arguments[_];G.apply(void 0,[d,x.length].concat(x))}return T.strict=R(d,T,{equal:T.strictEqual,deepEqual:T.deepStrictEqual,notEqual:T.notStrictEqual,notDeepEqual:T.notDeepStrictEqual}),T.strict.strict=T.strict,fa.exports}var ux=us();const ee=xs(ux);class Lp{constructor(){this.nodes=[],this.maxId=0,this.maxNodes=0,this.maxWeight=0,this.nodes=[]}getXNode(n){return this.nodes[n]}setXNode(n,t){this.nodes[n]=t,n>this.maxId&&(this.maxId=n),this.maxNodes+=1}}var Ne=(e=>(e.Ins="ins",e.Del="del",e))(Ne||{}),ei=(e=>(e.Ins="ins",e.Del="del",e.InlineIns="inlineIns",e.InlineDel="inlineDel",e))(ei||{}),pe=(e=>(e.Root="root",e.Blockquote="blockquote",e.Break="break",e.Code="code",e.Definition="definition",e.Emphasis="emphasis",e.Heading="heading",e.Html="html",e.Image="image",e.ImageReference="imageReference",e.InlineCode="inlineCode",e.Link="link",e.LinkReference="linkReference",e.List="list",e.ListItem="listItem",e.Paragraph="paragraph",e.Strong="strong",e.Text="text",e.ThematicBreak="thematicBreak",e.Delete="delete",e.FootnoteDefinition="footnoteDefinition",e.FootnoteReference="footnoteReference",e.Table="table",e.TableRow="tableRow",e.TableCell="tableCell",e.ContainerDirective="containerDirective",e.LeafDirective="leafDirective",e.TextDirective="textDirective",e.YAML="yaml",e.TOML="toml",e.MDXJSEsm="mdxjsEsm",e.MDXJSExpression="mdxJsExpression",e.MDXFlowExpression="mdxFlowExpression",e.MDXTextExpression="mdxTextExpression",e))(pe||{});function sx(e){return["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","link","linkReference","strong","text","inlineMath"].includes(e.type)}function bn(e){return e.type===pe.Table||e.type===pe.YAML||e.type===pe.TOML}function wg(e,n,t,r=1){if(!e||!n||!t||!e.children)return;const i=e.children.indexOf(n);i!==-1&&(Array.isArray(t)?e.children.splice(i,r,...t):e.children.splice(i,r,t))}const cx=1;function Fp(e,n,t,r){var l,a,u,s;let i=cx;const o=Math.max(1,Math.ceil(Math.log(r.maxNodes)*n.weight/r.maxWeight));for(let f=0;f<o;f++){const c=(a=(l=e.node)==null?void 0:l._parent)==null?void 0:a._xNode,p=(s=(u=n.node)==null?void 0:u._parent)==null?void 0:s._xNode;c&&p&&p.match&&p.match===c.node&&(i+=1)}return i}function fx(e,n,t,r){if(ee(e.node),ee(t.node),!t.optMatch){t.optMatch=e.node,t.opt=Fp(e,t,n,r);return}const i=Fp(e,t,n,r);if(i===t.opt){const o=Math.abs(t.optMatch._id-t.node._id),l=Math.abs(e.node._id-t.node._id);o>l&&(t.optMatch=e.node,t.opt=i)}else i>t.opt&&(t.optMatch=e.node,t.opt=i)}function sl(e,n){if(e.type!==n.type)return!1;switch(e.type){case pe.Link:if(e.url!==n.url||e.title!==n.title)return!1;break;case pe.Heading:if(e.depth!==n.depth)return!1;break;case pe.ListItem:if(e.checked!==n.checked||e.spread!==n.spread)return!1;break}return!0}function Np(e){return e._parent?e._parent.children.length===1:!0}function px(e,n,t,r){var l,a,u,s;const i=Math.max(1,Math.ceil(Math.log(r.maxNodes)*t.weight/r.maxWeight));let o=0;for(;o<i;){const f=(l=e.node)==null?void 0:l._parent,c=(a=t.node)==null?void 0:a._parent;if(!f||!c||!sl(f,c)||(ee(f._xNode&&c._xNode),e=f._xNode,t=c._xNode,e.match||t.match))break;e.match=t.node,t.match=e.node,o+=1}if(o===i)for(;;){ee(e.node&&t.node);const f=(u=e.node)==null?void 0:u._parent,c=(s=t.node)==null?void 0:s._parent;if(!f||!c||!Np(t.node)||!Np(e.node)||!sl(f,c)||(ee(f._xNode&&c._xNode),e=f._xNode,t=c._xNode,e.match||t.match))break;e.match=t.node,t.match=e.node}}function kg(e,n,t,r){var l,a;let i,o;if(e.match&&(ee(e.match._xNode),ee(e.node===e.match._xNode.match),e.match._xNode.match=void 0,e.match=void 0),ee(!t.match),ee(!e.match),t.match=e.node,e.match=t.node,ee(t.node),ee(e.node),bn(t.node)){ee(bn(e.node));return}for(i=(l=e.node.children)==null?void 0:l[0],o=(a=t.node.children)==null?void 0:a[0];o;)ee(i),ee(i._xNode),ee(o._xNode),kg(i._xNode,n,o._xNode),i=i._next,o=o._next;ee(!i)}function xg(e){if(!e.children)return;const n=e.children.length;e.children.forEach((t,r)=>{r>0&&(t._before=e.children[r-1]),r<n-1&&(t._next=e.children[r+1])})}function Sg(e,n){const t={...e,data:{...e.data},_id:n,type:e.type,position:e.position};return delete t._parent,delete t._before,delete t._next,t}function Xn(e,n){n.value+=1;const t=Sg(e,n.value);return e.children&&(t.children=[],e.children.forEach(r=>{var o;const i=Xn(r,n);i._parent=t,(o=t.children)==null||o.push(i)}),xg(t)),t}const Dp=100;function hx(e,n,t,r){const i=e.value.length<=Dp||n.value.length<=Dp?Iv(e.value,n.value):Bm(e.value,n.value);for(const o of i){r.value+=1;const l={_id:r.value,type:pe.Text,value:o.value,data:{},_parent:t};o.added?l.data.diff=Ne.Ins:o.removed&&(l.data.diff=Ne.Del),t.children||(t.children=[]),t.children.push(l)}}function Eg(e,n,t,r,i){var c,p;let o,l,a;ee(t&&e),ee(t._xNode),ee(e._xNode),l=t._xNode,o=e._xNode,ee(o.match),ee(l.match),ee(l.match===o.node);const u=Sg(t,i.value);u.children=[];let s=(c=e.children)==null?void 0:c[0],f=(p=t.children)==null?void 0:p[0];for(;f;){for(;s&&(o=s._xNode,ee(o),!(o.match||s.type===pe.Text));)a=Xn(s,i),a._parent=u,a.data.diff=Ne.Del,u.children.push(a),s=s._next;for(;f&&(l=f._xNode,ee(l),!(l.match||f.type===pe.Text));)a=Xn(f,i),a._parent=u,a.data.diff=Ne.Ins,u.children.push(a),f=f._next;for(ee(o&&l),s&&f&&s.type==pe.Text&&!o.match&&f.type==pe.Text&&!l.match&&(hx(s,f,u,i),s=s._next,f=f._next);s&&(o=s._xNode,ee(o),!o.match);)a=Xn(s,i),a._parent=u,a.data.diff=Ne.Del,u.children.push(a),s=s._next;for(;f&&(l=f._xNode,ee(l),!l.match);)a=Xn(f,i),a._parent=u,a.data.diff=Ne.Ins,u.children.push(a),f=f._next;if(!f)break;l=f._xNode,ee(l),ee(l.match);let h=s;for(;h&&(o=h._xNode,ee(o),l.node!==o.match);)h=h._next;if(!h){a=Xn(f,i),a._parent=u,a.data.diff=Ne.Ins,u.children.push(a),f=f._next;continue}for(;s&&(o=s._xNode,ee(o),l.node!==o.match);)a=Xn(s,i),a._parent=u,a.data.diff=Ne.Del,u.children.push(a),s=s._next;ee(s),bn(f)?(ee(bn(s)),a=Xn(f,i),a._parent=u,u.children.push(a)):(ee(!bn(s)),a=Eg(s,n,f,r,i),a._parent=u,u.children.push(a)),s=s._next,f=f._next}for(;s;)a=Xn(s,i),a._parent=u,a.data.diff=Ne.Del,u.children.push(a),s=s._next;return u}function ni(e){return!!e.children&&e.children.length>0}function _g(e){var i;if(bn(e)||!ni(e))return;const n=e._xNode;ee(n);const t=n.match;if(!t)return;const r=t._xNode;ee(r);for(const o of e.children){if(bn(o)||!ni(o))continue;ee(o._xNode);const l=o._xNode.match;if(!l||((i=l==null?void 0:l._parent)==null?void 0:i._id)!==t._id)continue;ee(l._xNode);const a=o._next;if(!a||bn(a)||!ni(a))continue;const u=a._xNode;if(ee(u),u.match)continue;const s=l._next;if(!s||bn(s)||!ni(s))continue;const f=s._xNode;ee(f),!f.match&&sl(a,s)&&(u.match=s,f.match=a)}for(const o of e.children)_g(o)}function bg(e,n,t){var l;let r,i=0,o=0;if(ee(e._xNode),!(bn(e)||!ni(e))){for(const a of e.children)ee(a._xNode),o+=((l=a._xNode)==null?void 0:l.weight)||0,bg(a);if(!e._xNode.match){for(const a of e.children){if(ee(a._xNode),!a._xNode.match)continue;const u=a._xNode.match._parent;if(!u||u===r||!sl(e,u))continue;let s=0;for(const f of e.children)ee(f._xNode),f._xNode.match&&u===f._xNode.match._parent&&(s+=f._xNode.weight);s>i&&(i=s,r=u)}r&&(ee(r._xNode),i/o>=.5&&(e._xNode.match=r,r._xNode.match=e))}}}const zl=function(e){if(e==null)return yx;if(typeof e=="function")return Rl(e);if(typeof e=="object")return Array.isArray(e)?dx(e):mx(e);if(typeof e=="string")return gx(e);throw new Error("Expected function, string, or object as test")};function dx(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=zl(e[t]);return Rl(r);function r(...i){let o=-1;for(;++o<n.length;)if(n[o].apply(this,i))return!0;return!1}}function mx(e){const n=e;return Rl(t);function t(r){const i=r;let o;for(o in e)if(i[o]!==n[o])return!1;return!0}}function gx(e){return Rl(n);function n(t){return t&&t.type===e}}function Rl(e){return n;function n(t,r,i){return!!(vx(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function yx(){return!0}function vx(e){return e!==null&&typeof e=="object"&&"type"in e}const Ag=[],wx=!0,ss=!1,kx="skip";function Pg(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const o=zl(i),l=r?-1:1;a(e,void 0,[])();function a(u,s,f){const c=u&&typeof u=="object"?u:{};if(typeof c.type=="string"){const h=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(u.type+(h?"<"+h+">":""))+")"})}return p;function p(){let h=Ag,w,b,R;if((!n||o(u,s,f[f.length-1]||void 0))&&(h=xx(t(u,f)),h[0]===ss))return h;if("children"in u&&u.children){const v=u;if(v.children&&h[0]!==kx)for(b=(r?v.children.length:-1)+l,R=f.concat(v);b>-1&&b<v.children.length;){const m=v.children[b];if(w=a(m,b,R)(),w[0]===ss)return w;b=typeof w[1]=="number"?w[1]:b+l}}return h}}}function xx(e){return Array.isArray(e)?e:typeof e=="number"?[wx,e]:e==null?Ag:[e]}function Wn(e,n,t,r){let i,o,l;typeof n=="function"&&typeof t!="function"?(o=void 0,l=n,i=t):(o=n,l=t,i=r),Pg(e,o,a,i);function a(u,s){const f=s[s.length-1],c=f?f.children.indexOf(u):void 0;return l(u,c,f)}}function Sx(e){return 55296<=e&&e<=56319}function $p(e){return 56320<=e&&e<=57343}function Ex(e,n){return(e-55296<<10)+(n-56320)+65536}const Cg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",_x=Cg.length;function bx(e){let n="";const t=new Uint8Array(e);for(let r=0;r<e;r++)t[r]=Math.floor(Math.random()*256);for(let r=0;r<e;r++)n+=Cg.charAt(t[r]%_x);return n}function Ax(e,n){if(e.length===0)return n.length;if(n.length===0)return e.length;const t=e.length,r=n.length,i=new Array(r+1),o=new Array(r+1);for(let l=0;l<=r;l++)i[l]=l;for(let l=1;l<=t;l++){o[0]=l;for(let a=1;a<=r;a++){const u=e[l-1]===n[a-1]?0:1;o[a]=Math.min(i[a]+1,o[a-1]+1,i[a-1]+u)}for(let a=0;a<=r;a++)i[a]=o[a]}return i[r]}function Px(e,n){if(e.length===0&&n.length===0)return 1;if(e.length===0||n.length===0)return 0;const t=Ax(e,n),r=Math.max(e.length,n.length);return 1-t/r}function Cx(e,n){if(e===n)return 1;const t=e.trim().toLowerCase(),r=n.trim().toLowerCase();return t===r?1:Px(t,r)}function Bp(e){if(!e.children||e.children.length!==1)return!1;const n=e.children[0];return!(n.type!==pe.Text||!n.value)}function Ix(e,n){let t=[],r=[];const i=new Set,o=new Set;Wn(e,"heading",c=>{Bp(c)&&(i.add(c.children[0].value),t.push([c,c.children[0].value]))}),Wn(n,"heading",c=>{Bp(c)&&(o.add(c.children[0].value),r.push([c,c.children[0].value]))}),t=t.filter(([c,p])=>!o.has(p)),r=r.filter(([c,p])=>!i.has(p));const l=[];for(let c=0;c<t.length;c++){l[c]=[];for(let p=0;p<r.length;p++)l[c][p]=Cx(t[c][1],r[p][1])}const a=[],u=new Set,s=new Set,f=[];for(let c=0;c<t.length;c++)for(let p=0;p<r.length;p++)l[c][p]>.5&&f.push({oldIndex:c,newIndex:p,similarity:l[c][p]});f.sort((c,p)=>p.similarity-c.similarity);for(const c of f)!u.has(c.oldIndex)&&!s.has(c.newIndex)&&(a.push(c),u.add(c.oldIndex),s.add(c.newIndex));return a.forEach(c=>{const p=t[c.oldIndex][0],h=r[c.newIndex][0],w=bx(16),b={type:pe.Text,value:w,data:{headingDiffToken:!0}},R={type:pe.Text,value:w,data:{headingDiffToken:!0}};p.children.push(b),h.children.push(R)}),c=>{Wn(c,pe.Text,(p,h,w)=>{var b;(b=p.data)!=null&&b.headingDiffToken&&wg(w,p,[])})}}function Tx(e,n){for(const t of[e,n])Wn(t,"listItem",r=>{r.children&&r.children.length===1&&r.children[0].type==="paragraph"&&r.children[0].children&&(r.data||(r.data={}),r.data.backupParagraph=r.children[0],r.children=r.children[0].children)});return t=>{Wn(t,"listItem",r=>{var i;(i=r.data)!=null&&i.backupParagraph&&(r.children=[{...r.data.backupParagraph,children:r.children}],delete r.data.backupParagraph)})}}function Mx(e,n){for(const t of[e,n]){let r=0;Wn(t,(i,o,l)=>{i._parent=l,i._id=r,r+=1,i.data||(i.data={}),i.children&&xg(i)})}return t=>{Wn(t,r=>{delete r._parent,delete r._xNode,delete r._id,delete r._before,delete r._next})}}var Ig={},Lr={},Ll={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 */let jx=class To{constructor(n,t,r){if(typeof n!="function")throw new Error("Heap constructor expects a compare function");this._compare=n,this._nodes=Array.isArray(t)?t:[],this._leaf=r||null}toArray(){return Array.from(this._nodes)}_hasLeftChild(n){return n*2+1<this.size()}_hasRightChild(n){return n*2+2<this.size()}_compareAt(n,t){return this._compare(this._nodes[n],this._nodes[t])}_swap(n,t){const r=this._nodes[n];this._nodes[n]=this._nodes[t],this._nodes[t]=r}_shouldSwap(n,t){return n<0||n>=this.size()||t<0||t>=this.size()?!1:this._compareAt(n,t)>0}_compareChildrenOf(n){if(!this._hasLeftChild(n)&&!this._hasRightChild(n))return-1;const t=n*2+1,r=n*2+2;return this._hasLeftChild(n)?this._hasRightChild(n)&&this._compareAt(t,r)>0?r:t:r}_compareChildrenBefore(n,t,r){return this._compareAt(r,t)<=0&&r<n?r:t}_heapifyUp(n){let t=n,r=Math.floor((t-1)/2);for(;this._shouldSwap(r,t);)this._swap(r,t),t=r,r=Math.floor((t-1)/2)}_heapifyDown(n){let t=n,r=this._compareChildrenOf(t);for(;this._shouldSwap(t,r);)this._swap(t,r),t=r,r=this._compareChildrenOf(t)}_heapifyDownUntil(n){let t=0,r=1,i=2,o;for(;r<n;)o=this._compareChildrenBefore(n,r,i),this._shouldSwap(t,o)&&this._swap(t,o),t=o,r=t*2+1,i=t*2+2}insert(n){return this._nodes.push(n),this._heapifyUp(this.size()-1),(this._leaf===null||this._compare(n,this._leaf)>0)&&(this._leaf=n),this}push(n){return this.insert(n)}extractRoot(){if(this.isEmpty())return null;const n=this.root();return this._nodes[0]=this._nodes[this.size()-1],this._nodes.pop(),this._heapifyDown(0),n===this._leaf&&(this._leaf=this.root()),n}pop(){return this.extractRoot()}sort(){for(let n=this.size()-1;n>0;n-=1)this._swap(0,n),this._heapifyDownUntil(n);return this._nodes}fix(){for(let n=Math.floor(this.size()/2)-1;n>=0;n-=1)this._heapifyDown(n);for(let n=Math.floor(this.size()/2);n<this.size();n+=1){const t=this._nodes[n];(this._leaf===null||this._compare(t,this._leaf)>0)&&(this._leaf=t)}return this}isValid(){const n=t=>{let r=!0,i=!0;if(this._hasLeftChild(t)){const o=t*2+1;if(this._compareAt(t,o)>0)return!1;r=n(o)}if(this._hasRightChild(t)){const o=t*2+2;if(this._compareAt(t,o)>0)return!1;i=n(o)}return r&&i};return n(0)}clone(){return new To(this._compare,this._nodes.slice(),this._leaf)}root(){return this.isEmpty()?null:this._nodes[0]}top(){return this.root()}leaf(){return this._leaf}size(){return this._nodes.length}isEmpty(){return this.size()===0}clear(){this._nodes=[],this._leaf=null}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}static heapify(n,t){if(!Array.isArray(n))throw new Error("Heap.heapify expects an array of values");if(typeof t!="function")throw new Error("Heap.heapify expects a compare function");return new To(t,n).fix()}static isHeapified(n,t){return new To(t,n).isValid()}};Ll.Heap=jx;var Tg={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */const{Heap:Ba}=Ll,Ha=e=>(n,t)=>{const r=typeof e=="function"?e(n):n,i=typeof e=="function"?e(t):t;return r<=i?-1:1};let Ox=class Mo{constructor(n,t){this._getCompareValue=n,this._heap=t||new Ba(Ha(n))}toArray(){return Array.from(this._heap._nodes)}insert(n){return this._heap.insert(n)}push(n){return this.insert(n)}extractRoot(){return this._heap.extractRoot()}pop(){return this.extractRoot()}sort(){return this._heap.sort()}fix(){return this._heap.fix()}isValid(){return this._heap.isValid()}root(){return this._heap.root()}top(){return this.root()}leaf(){return this._heap.leaf()}size(){return this._heap.size()}isEmpty(){return this._heap.isEmpty()}clear(){this._heap.clear()}clone(){return new Mo(this._getCompareValue,this._heap.clone())}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}static heapify(n,t){if(!Array.isArray(n))throw new Error("MinHeap.heapify expects an array");const r=new Ba(Ha(t),n);return new Mo(t,r).fix()}static isHeapified(n,t){const r=new Ba(Ha(t),n);return new Mo(t,r).isValid()}};Tg.MinHeap=Ox;var Mg={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 */const{Heap:Ua}=Ll,qa=e=>(n,t)=>{const r=typeof e=="function"?e(n):n,i=typeof e=="function"?e(t):t;return r<i?1:-1};let zx=class jo{constructor(n,t){this._getCompareValue=n,this._heap=t||new Ua(qa(n))}insert(n){return this._heap.insert(n)}push(n){return this.insert(n)}extractRoot(){return this._heap.extractRoot()}pop(){return this.extractRoot()}sort(){return this._heap.sort()}toArray(){return Array.from(this._heap._nodes)}fix(){return this._heap.fix()}isValid(){return this._heap.isValid()}root(){return this._heap.root()}top(){return this.root()}leaf(){return this._heap.leaf()}size(){return this._heap.size()}isEmpty(){return this._heap.isEmpty()}clear(){this._heap.clear()}clone(){return new jo(this._getCompareValue,this._heap.clone())}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}static heapify(n,t){if(!Array.isArray(n))throw new Error("MaxHeap.heapify expects an array");const r=new Ua(qa(t),n);return new jo(t,r).fix()}static isHeapified(n,t){const r=new Ua(qa(t),n);return new jo(t,r).isValid()}};Mg.MaxHeap=zx;const{Heap:Rx}=Ll,{MinHeap:Lx}=Tg,{MaxHeap:Fx}=Mg;Lr.Heap=Rx;Lr.MinHeap=Lx;Lr.MaxHeap=Fx;/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */const{Heap:Hp,MinHeap:Up}=Lr,Nx=e=>(n,t)=>{const r=typeof e=="function"?e(n):n,i=typeof e=="function"?e(t):t;return r<=i?-1:1};let Dx=class jg{constructor(n,t){if(n&&typeof n=="object"&&typeof n.compare=="function"){this._getCompareValue=null;const r=(i,o)=>n.compare(i,o)<=0?-1:1;this._heap=t||new Hp(r)}else{const r=n;if(r&&typeof r!="function")throw new Error("MinPriorityQueue constructor requires a callback for object values");this._heap=t||new Up(r)}}front(){return this._heap.root()}back(){return this._heap.leaf()}enqueue(n){return this._heap.insert(n)}push(n){return this.enqueue(n)}dequeue(){return this._heap.extractRoot()}pop(){return this.dequeue()}remove(n){if(typeof n!="function")throw new Error("MinPriorityQueue remove expects a callback");const t=[],r=[];for(;!this.isEmpty();){const i=this.pop();n(i)?t.push(i):r.push(i)}return r.forEach(i=>this.push(i)),t}contains(n){if(typeof n!="function")throw new Error("MinPriorityQueue contains expects a callback");let t=!1;const r=[];for(;!this.isEmpty();){const i=this.pop();if(r.push(i),n(i)){t=!0;break}}return r.forEach(i=>this.push(i)),t}size(){return this._heap.size()}isEmpty(){return this._heap.isEmpty()}clear(){this._heap.clear()}toArray(){return this._heap.clone().sort().reverse()}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}static fromArray(n,t){const r=new Hp(Nx(t),n);return new jg(t,new Up(t,r).fix())}};Ig.MinPriorityQueue=Dx;var Og={};/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */const{Heap:qp,MaxHeap:Vp}=Lr,$x=e=>(n,t)=>{const r=typeof e=="function"?e(n):n,i=typeof e=="function"?e(t):t;return r<i?1:-1};let Bx=class zg{constructor(n,t){if(n&&typeof n=="object"&&typeof n.compare=="function"){this._getCompareValue=null;const r=(i,o)=>n.compare(i,o)>=0?-1:1;this._heap=t||new qp(r)}else{const r=n;if(r&&typeof r!="function")throw new Error("MaxPriorityQueue constructor requires a callback for object values");this._heap=t||new Vp(r)}}front(){return this._heap.root()}back(){return this._heap.leaf()}enqueue(n){return this._heap.insert(n)}push(n){return this.enqueue(n)}dequeue(){return this._heap.extractRoot()}pop(){return this.dequeue()}remove(n){if(typeof n!="function")throw new Error("MaxPriorityQueue remove expects a callback");const t=[],r=[];for(;!this.isEmpty();){const i=this.pop();n(i)?t.push(i):r.push(i)}return r.forEach(i=>this.push(i)),t}contains(n){if(typeof n!="function")throw new Error("MaxPriorityQueue contains expects a callback");let t=!1;const r=[];for(;!this.isEmpty();){const i=this.pop();if(r.push(i),n(i)){t=!0;break}}return r.forEach(i=>this.push(i)),t}size(){return this._heap.size()}isEmpty(){return this._heap.isEmpty()}clear(){this._heap.clear()}toArray(){return this._heap.clone().sort().reverse()}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}static fromArray(n,t){const r=new qp($x(t),n);return new zg(t,new Vp(t,r).fix())}};Og.MaxPriorityQueue=Bx;var Rg={};/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */const{Heap:Hx}=Lr;let Ux=class Lg{constructor(n,t){if(typeof n!="function")throw new Error("PriorityQueue constructor expects a compare function");this._heap=new Hx(n,t),t&&this._heap.fix()}front(){return this._heap.root()}back(){return this._heap.leaf()}enqueue(n){return this._heap.insert(n)}push(n){return this.enqueue(n)}dequeue(){return this._heap.extractRoot()}pop(){return this.dequeue()}remove(n){if(typeof n!="function")throw new Error("PriorityQueue remove expects a callback");const t=[],r=[];for(;!this.isEmpty();){const i=this.pop();n(i)?t.push(i):r.push(i)}return r.forEach(i=>this.push(i)),t}contains(n){if(typeof n!="function")throw new Error("PriorityQueue contains expects a callback");let t=!1;const r=[];for(;!this.isEmpty();){const i=this.pop();if(r.push(i),n(i)){t=!0;break}}return r.forEach(i=>this.push(i)),t}size(){return this._heap.size()}isEmpty(){return this._heap.isEmpty()}clear(){this._heap.clear()}toArray(){return this._heap.clone().sort().reverse()}[Symbol.iterator](){let n=this.size();return{next:()=>(n-=1,{value:this.pop(),done:n===-1})}}static fromArray(n,t){return new Lg(t,n)}};Rg.PriorityQueue=Ux;const{MinPriorityQueue:qx}=Ig,{MaxPriorityQueue:Vx}=Og,{PriorityQueue:Wx}=Rg;var Qx={MinPriorityQueue:qx,MaxPriorityQueue:Vx,PriorityQueue:Wx};function Gx(){return new Qx.PriorityQueue((n,t)=>{const r=n._xNode,i=t._xNode,o=(r==null?void 0:r.weight)||0,l=(i==null?void 0:i.weight)||0;return o!==l?l-o:n._id-t._id})}function Va(e,n,t=32){const r=t-n,i=~((1<<r)-1);return(e<<n|(i&e)>>>r)>>>0}function Gr(e,n=32){return e instanceof ArrayBuffer?Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join(""):(e>>>0).toString(16).padStart(n/4,"0")}const pl=class pl{constructor(){this._h0=1732584193,this._h1=4023233417,this._h2=2562383102,this._h3=271733878,this._h4=3285377520,this._buff=new Uint8Array(67),this._buffDV=new DataView(this._buff.buffer),this._buffLen=0,this._totalLen=0,this._leftoverHighSurrogate=0,this._finished=!1}update(n){const t=n.length;if(t===0)return;const r=this._buff;let i=this._buffLen,o=this._leftoverHighSurrogate,l,a;for(o!==0?(l=o,a=-1,o=0):(l=n.charCodeAt(0),a=0);;){let u=l;if(Sx(l))if(a+1<t){const s=n.charCodeAt(a+1);$p(s)?(a++,u=Ex(l,s)):u=65533}else{o=l;break}else $p(l)&&(u=65533);if(i=this._push(r,i,u),a++,a<t)l=n.charCodeAt(a);else break}this._buffLen=i,this._leftoverHighSurrogate=o}_push(n,t,r){return r<128?n[t++]=r:r<2048?(n[t++]=192|(r&1984)>>>6,n[t++]=128|(r&63)>>>0):r<65536?(n[t++]=224|(r&61440)>>>12,n[t++]=128|(r&4032)>>>6,n[t++]=128|(r&63)>>>0):(n[t++]=240|(r&1835008)>>>18,n[t++]=128|(r&258048)>>>12,n[t++]=128|(r&4032)>>>6,n[t++]=128|(r&63)>>>0),t>=64&&(this._step(),t-=64,this._totalLen+=64,n[0]=n[64],n[1]=n[65],n[2]=n[66]),t}digest(){return this._finished||(this._finished=!0,this._leftoverHighSurrogate&&(this._leftoverHighSurrogate=0,this._buffLen=this._push(this._buff,this._buffLen,65533)),this._totalLen+=this._buffLen,this._wrapUp()),Gr(this._h0)+Gr(this._h1)+Gr(this._h2)+Gr(this._h3)+Gr(this._h4)}_wrapUp(){this._buff[this._buffLen++]=128,this._buff.subarray(this._buffLen).fill(0),this._buffLen>56&&(this._step(),this._buff.fill(0));const n=8*this._totalLen;this._buffDV.setUint32(56,Math.floor(n/4294967296),!1),this._buffDV.setUint32(60,n%4294967296,!1),this._step()}_step(){const n=pl._bigBlock32,t=this._buffDV;for(let c=0;c<64;c+=4)n.setUint32(c,t.getUint32(c,!1),!1);for(let c=64;c<320;c+=4)n.setUint32(c,Va(n.getUint32(c-12,!1)^n.getUint32(c-32,!1)^n.getUint32(c-56,!1)^n.getUint32(c-64,!1),1),!1);let r=this._h0,i=this._h1,o=this._h2,l=this._h3,a=this._h4,u,s,f;for(let c=0;c<80;c++)c<20?(u=i&o|~i&l,s=1518500249):c<40?(u=i^o^l,s=1859775393):c<60?(u=i&o|i&l|o&l,s=2400959708):(u=i^o^l,s=3395469782),f=Va(r,5)+u+a+s+n.getUint32(c*4,!1)&4294967295,a=l,l=o,o=Va(i,30),i=r,r=f;this._h0=this._h0+r&4294967295,this._h1=this._h1+i&4294967295,this._h2=this._h2+o&4294967295,this._h3=this._h3+l&4294967295,this._h4=this._h4+a&4294967295}};pl._bigBlock32=new DataView(new ArrayBuffer(320));let cs=pl;class Wp{constructor(n){this.opt=0,this.sign="",this.weight=0,n&&(this._node=n,n._xNode=this)}get node(){return this._node}get match(){return this._match}set match(n){var t;(t=this.node)==null||t.type,this._match=n}}function fs(e,n,t,r=!1){var s,f,c,p,h;let i=-1,o=0,l=r;r||(n.setXNode(t._id,new Wp(t)),l=bn(t));const a=new Yx(t.type);(s=t.children)==null||s.forEach(w=>{o+=fs(a,n,w,l)});const u=r?new Wp:t._xNode;switch(u.weight=o,t.type){case pe.Code:i=t.value.length;break;case pe.Html:i=t.value.length;break;case pe.Link:i=t.url.length+(((f=t.title)==null?void 0:f.length)??0);break;case pe.InlineCode:i=t.value.length;break;case pe.Image:i=t.url.length+(((c=t.title)==null?void 0:c.length)??0)+(((p=t.alt)==null?void 0:p.length)??0);break;case pe.Text:i=t.value.length;break;case pe.LinkReference:i=((h=t.label)==null?void 0:h.length)??0;break}switch(i>=0?u.weight=1+(i===0?0:Math.log(i)):u.weight+=1,t.type){case pe.List:a.update(t.ordered),a.update(t.start),a.update(t.spread);break;case pe.ListItem:a.update(t.checked),a.update(t.spread);break;case pe.Heading:a.update(t.depth);break;case pe.Text:a.update(t.value);break;case pe.Html:a.update(t.value);break;case pe.Link:a.update(t.url),a.update(t.title);break;case pe.Code:a.update(t.value),a.update(t.lang);break;case pe.InlineCode:a.update(t.value);break;case pe.Table:a.update(t.align);break;case pe.Image:a.update(t.url),a.update(t.title),a.update(t.alt);break}return u.sign=a.digest(),e&&e.update(u.sign),u.weight>n.maxWeight&&(n.maxWeight=u.weight),u.weight}class Yx{constructor(n=""){this.sha=new cs,n&&this.sha.update(n)}update(n){if(this.sha.update("|"),n===void 0)this.sha.update("$$undefined$$");else if(n===null)this.sha.update("$$null$$");else if(typeof n=="string")this.sha.update(n);else if(typeof n=="number")this.sha.update(n.toString());else if(typeof n=="boolean")this.sha.update(n?"$$true$$":"$$false$$");else if(Array.isArray(n)){this.sha.update("[");for(let t=0;t<n.length;t++)this.update(n[t]);this.sha.update("]")}}digest(){return this.sha.digest()}}function Xx(e,n){var c;const t=[Ix(e,n),Tx(e,n),Mx(e,n)],r=p=>{t.reverse().forEach(h=>h(p))};let i,o;const l=new Lp,a=new Lp;fs(null,l,e,!1),fs(null,a,n,!1);const u=Gx();for(u.enqueue(n);u.size()>0;){const p=u.dequeue();if(!p)break;if(o=p._xNode,!o)continue;ee(!o.match),ee(!o.optMatch),ee(o.opt===0);for(let w=0;w<l.nodes.length;w++)i=l.getXNode(w),i!=null&&i.node&&(i!=null&&i.match||i.sign===o.sign&&(ee(!i.match),fx(i,l,o,a)));if(!o.optMatch){if(bn(p))continue;(c=p.children)==null||c.forEach(w=>u.enqueue(w));continue}ee(!o.match),ee(!o.optMatch._xNode.match);const h=o.optMatch._xNode;ee(h),kg(h,l,o),px(h,l,o,a)}ee(n._xNode),n._xNode.match||(ee(e.type===pe.Root),ee(n.type===pe.Root),i=e._xNode,o=n._xNode,ee(i),ee(o),ee(!i.match),o.match=i.node,i.match=o.node),_g(n),bg(n);const f=Eg(e,l,n,a,{value:0});return ee(f.type===pe.Root),r(f),f}function Jx(e,n){var t,r;return!e&&!n?{type:"root",children:[]}:!e&&n?((t=n.children)==null||t.forEach(i=>{i.data||(i.data={}),i.data.diff=Ne.Ins}),n):e&&!n?((r=e.children)==null||r.forEach(i=>{i.data||(i.data={}),i.data.diff=Ne.Del}),e):Xx(e,n)}function Zx(e,n,t){const r={type:String(e)};return t==null&&(typeof n=="string"||Array.isArray(n))?t=n:Object.assign(r,n),Array.isArray(t)?r.children=t:t!=null&&(r.value=String(t)),r}function Kx(e,n){if(n)switch(e){case Ne.Ins:return ei.InlineIns;case Ne.Del:return ei.InlineDel}else switch(e){case Ne.Ins:return ei.Ins;case Ne.Del:return ei.Del}}function eS(e){return Wn(e,(n,t,r)=>{var l;if(n.type==="listItem"||n.type===Ne.Ins||n.type===Ne.Del||!((l=n.data)!=null&&l.diff))return!0;const i=n.data.diff;delete n.data.diff;const o=sx(n);return wg(r,n,Zx(Kx(i,o),[n])),!0}),e}const Qp={}.hasOwnProperty;function nS(e,n){const t=n||{};function r(i,...o){let l=r.invalid;const a=r.handlers;if(i&&Qp.call(i,e)){const u=String(i[e]);l=Qp.call(a,u)?a[u]:r.unknown}if(l)return l.call(this,i,...o)}return r.handlers=t.handlers||{},r.invalid=t.invalid,r.unknown=t.unknown,r}const tS={}.hasOwnProperty;function Fg(e,n){let t=-1,r;if(n.extensions)for(;++t<n.extensions.length;)Fg(e,n.extensions[t]);for(r in n)if(tS.call(n,r))switch(r){case"extensions":break;case"unsafe":{Gp(e[r],n[r]);break}case"join":{Gp(e[r],n[r]);break}case"handlers":{rS(e[r],n[r]);break}default:e.options[r]=n[r]}return e}function Gp(e,n){n&&e.push(...n)}function rS(e,n){n&&Object.assign(e,n)}function iS(e,n,t,r){const i=t.enter("blockquote"),o=t.createTracker(r);o.move("> "),o.shift(2);const l=t.indentLines(t.containerFlow(e,o.current()),oS);return i(),l}function oS(e,n,t){return">"+(t?"":" ")+e}function Ng(e,n){return Yp(e,n.inConstruct,!0)&&!Yp(e,n.notInConstruct,!1)}function Yp(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function Xp(e,n,t,r){let i=-1;for(;++i<t.unsafe.length;)if(t.unsafe[i].character===`
`&&Ng(t.stack,t.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function lS(e,n){const t=String(e);let r=t.indexOf(n),i=r,o=0,l=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>l&&(l=o):o=1,i=r+n.length,r=t.indexOf(n,i);return l}function ps(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function aS(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function uS(e,n,t,r){const i=aS(t),o=e.value||"",l=i==="`"?"GraveAccent":"Tilde";if(ps(e,t)){const c=t.enter("codeIndented"),p=t.indentLines(o,sS);return c(),p}const a=t.createTracker(r),u=i.repeat(Math.max(lS(o,i)+1,3)),s=t.enter("codeFenced");let f=a.move(u);if(e.lang){const c=t.enter(`codeFencedLang${l}`);f+=a.move(t.safe(e.lang,{before:f,after:" ",encode:["`"],...a.current()})),c()}if(e.lang&&e.meta){const c=t.enter(`codeFencedMeta${l}`);f+=a.move(" "),f+=a.move(t.safe(e.meta,{before:f,after:`
`,encode:["`"],...a.current()})),c()}return f+=a.move(`
`),o&&(f+=a.move(o+`
`)),f+=a.move(u),s(),f}function sS(e,n,t){return(t?"":"    ")+e}function Ac(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function cS(e,n,t,r){const i=Ac(t),o=i==='"'?"Quote":"Apostrophe",l=t.enter("definition");let a=t.enter("label");const u=t.createTracker(r);let s=u.move("[");return s+=u.move(t.safe(t.associationId(e),{before:s,after:"]",...u.current()})),s+=u.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=t.enter("destinationLiteral"),s+=u.move("<"),s+=u.move(t.safe(e.url,{before:s,after:">",...u.current()})),s+=u.move(">")):(a=t.enter("destinationRaw"),s+=u.move(t.safe(e.url,{before:s,after:e.title?" ":`
`,...u.current()}))),a(),e.title&&(a=t.enter(`title${o}`),s+=u.move(" "+i),s+=u.move(t.safe(e.title,{before:s,after:i,...u.current()})),s+=u.move(i),a()),l(),s}function fS(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function Pt(e){return"&#x"+e.toString(16).toUpperCase()+";"}const Ze=Mt(/[A-Za-z]/),ln=Mt(/[\dA-Za-z]/),pS=Mt(/[#-'*+\--9=?A-Z^-~]/);function cl(e){return e!==null&&(e<32||e===127)}const hs=Mt(/\d/),hS=Mt(/[\dA-Fa-f]/),dS=Mt(/[!-/:-@[-`{-~]/);function te(e){return e!==null&&e<-2}function we(e){return e!==null&&(e<0||e===32)}function ce(e){return e===-2||e===-1||e===32}const Fl=Mt(new RegExp("\\p{P}|\\p{S}","u")),Qt=Mt(/\s/);function Mt(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Tr(e){if(e===null||we(e)||Qt(e))return 1;if(Fl(e))return 2}function fl(e,n,t){const r=Tr(e),i=Tr(n);return r===void 0?i===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Dg.peek=mS;function Dg(e,n,t,r){const i=fS(t),o=t.enter("emphasis"),l=t.createTracker(r),a=l.move(i);let u=l.move(t.containerPhrasing(e,{after:i,before:a,...l.current()}));const s=u.charCodeAt(0),f=fl(r.before.charCodeAt(r.before.length-1),s,i);f.inside&&(u=Pt(s)+u.slice(1));const c=u.charCodeAt(u.length-1),p=fl(r.after.charCodeAt(0),c,i);p.inside&&(u=u.slice(0,-1)+Pt(c));const h=l.move(i);return o(),t.attentionEncodeSurroundingInfo={after:p.outside,before:f.outside},a+u+h}function mS(e,n,t){return t.options.emphasis||"*"}const gS={};function Pc(e,n){const t=gS,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return $g(e,r,i)}function $g(e,n,t){if(yS(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Jp(e.children,n,t)}return Array.isArray(e)?Jp(e,n,t):""}function Jp(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=$g(e[i],n,t);return r.join("")}function yS(e){return!!(e&&typeof e=="object")}function Bg(e,n){let t=!1;return Wn(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,ss}),!!((!e.depth||e.depth<3)&&Pc(e)&&(n.options.setext||t))}function vS(e,n,t,r){const i=Math.max(Math.min(6,e.depth||1),1),o=t.createTracker(r);if(Bg(e,t)){const f=t.enter("headingSetext"),c=t.enter("phrasing"),p=t.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return c(),f(),p+`
`+(i===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}const l="#".repeat(i),a=t.enter("headingAtx"),u=t.enter("phrasing");o.move(l+" ");let s=t.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(s)&&(s=Pt(s.charCodeAt(0))+s.slice(1)),s=s?l+" "+s:l,t.options.closeAtx&&(s+=" "+l),u(),a(),s}Hg.peek=wS;function Hg(e){return e.value||""}function wS(){return"<"}Ug.peek=kS;function Ug(e,n,t,r){const i=Ac(t),o=i==='"'?"Quote":"Apostrophe",l=t.enter("image");let a=t.enter("label");const u=t.createTracker(r);let s=u.move("![");return s+=u.move(t.safe(e.alt,{before:s,after:"]",...u.current()})),s+=u.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=t.enter("destinationLiteral"),s+=u.move("<"),s+=u.move(t.safe(e.url,{before:s,after:">",...u.current()})),s+=u.move(">")):(a=t.enter("destinationRaw"),s+=u.move(t.safe(e.url,{before:s,after:e.title?" ":")",...u.current()}))),a(),e.title&&(a=t.enter(`title${o}`),s+=u.move(" "+i),s+=u.move(t.safe(e.title,{before:s,after:i,...u.current()})),s+=u.move(i),a()),s+=u.move(")"),l(),s}function kS(){return"!"}qg.peek=xS;function qg(e,n,t,r){const i=e.referenceType,o=t.enter("imageReference");let l=t.enter("label");const a=t.createTracker(r);let u=a.move("![");const s=t.safe(e.alt,{before:u,after:"]",...a.current()});u+=a.move(s+"]["),l();const f=t.stack;t.stack=[],l=t.enter("reference");const c=t.safe(t.associationId(e),{before:u,after:"]",...a.current()});return l(),t.stack=f,o(),i==="full"||!s||s!==c?u+=a.move(c+"]"):i==="shortcut"?u=u.slice(0,-1):u+=a.move("]"),u}function xS(){return"!"}Vg.peek=SS;function Vg(e,n,t){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<t.unsafe.length;){const l=t.unsafe[o],a=t.compilePattern(l);let u;if(l.atBreak)for(;u=a.exec(r);){let s=u.index;r.charCodeAt(s)===10&&r.charCodeAt(s-1)===13&&s--,r=r.slice(0,s)+" "+r.slice(u.index+1)}}return i+r+i}function SS(){return"`"}function Wg(e,n){const t=Pc(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Qg.peek=ES;function Qg(e,n,t,r){const i=Ac(t),o=i==='"'?"Quote":"Apostrophe",l=t.createTracker(r);let a,u;if(Wg(e,t)){const f=t.stack;t.stack=[],a=t.enter("autolink");let c=l.move("<");return c+=l.move(t.containerPhrasing(e,{before:c,after:">",...l.current()})),c+=l.move(">"),a(),t.stack=f,c}a=t.enter("link"),u=t.enter("label");let s=l.move("[");return s+=l.move(t.containerPhrasing(e,{before:s,after:"](",...l.current()})),s+=l.move("]("),u(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(u=t.enter("destinationLiteral"),s+=l.move("<"),s+=l.move(t.safe(e.url,{before:s,after:">",...l.current()})),s+=l.move(">")):(u=t.enter("destinationRaw"),s+=l.move(t.safe(e.url,{before:s,after:e.title?" ":")",...l.current()}))),u(),e.title&&(u=t.enter(`title${o}`),s+=l.move(" "+i),s+=l.move(t.safe(e.title,{before:s,after:i,...l.current()})),s+=l.move(i),u()),s+=l.move(")"),a(),s}function ES(e,n,t){return Wg(e,t)?"<":"["}Gg.peek=_S;function Gg(e,n,t,r){const i=e.referenceType,o=t.enter("linkReference");let l=t.enter("label");const a=t.createTracker(r);let u=a.move("[");const s=t.containerPhrasing(e,{before:u,after:"]",...a.current()});u+=a.move(s+"]["),l();const f=t.stack;t.stack=[],l=t.enter("reference");const c=t.safe(t.associationId(e),{before:u,after:"]",...a.current()});return l(),t.stack=f,o(),i==="full"||!s||s!==c?u+=a.move(c+"]"):i==="shortcut"?u=u.slice(0,-1):u+=a.move("]"),u}function _S(){return"["}function Cc(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function bS(e){const n=Cc(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function AS(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function Yg(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function PS(e,n,t,r){const i=t.enter("list"),o=t.bulletCurrent;let l=e.ordered?AS(t):Cc(t);const a=e.ordered?l==="."?")":".":bS(t);let u=n&&t.bulletLastUsed?l===t.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((l==="*"||l==="-")&&f&&(!f.children||!f.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(u=!0),Yg(t)===l&&f){let c=-1;for(;++c<e.children.length;){const p=e.children[c];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){u=!0;break}}}}u&&(l=a),t.bulletCurrent=l;const s=t.containerFlow(e,r);return t.bulletLastUsed=l,t.bulletCurrent=o,i(),s}function CS(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function IS(e,n,t,r){const i=CS(t);let o=t.bulletCurrent||Cc(t);n&&n.type==="list"&&n.ordered&&(o=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+o);let l=o.length+1;(i==="tab"||i==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(l=Math.ceil(l/4)*4);const a=t.createTracker(r);a.move(o+" ".repeat(l-o.length)),a.shift(l);const u=t.enter("listItem"),s=t.indentLines(t.containerFlow(e,a.current()),f);return u(),s;function f(c,p,h){return p?(h?"":" ".repeat(l))+c:(h?o:o+" ".repeat(l-o.length))+c}}function TS(e,n,t,r){const i=t.enter("paragraph"),o=t.enter("phrasing"),l=t.containerPhrasing(e,r);return o(),i(),l}const MS=zl(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function jS(e,n,t,r){return(e.children.some(function(l){return MS(l)})?t.containerPhrasing:t.containerFlow).call(t,e,r)}function OS(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}Xg.peek=zS;function Xg(e,n,t,r){const i=OS(t),o=t.enter("strong"),l=t.createTracker(r),a=l.move(i+i);let u=l.move(t.containerPhrasing(e,{after:i,before:a,...l.current()}));const s=u.charCodeAt(0),f=fl(r.before.charCodeAt(r.before.length-1),s,i);f.inside&&(u=Pt(s)+u.slice(1));const c=u.charCodeAt(u.length-1),p=fl(r.after.charCodeAt(0),c,i);p.inside&&(u=u.slice(0,-1)+Pt(c));const h=l.move(i+i);return o(),t.attentionEncodeSurroundingInfo={after:p.outside,before:f.outside},a+u+h}function zS(e,n,t){return t.options.strong||"*"}function RS(e,n,t,r){return t.safe(e.value,r)}function LS(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function FS(e,n,t){const r=(Yg(t)+(t.options.ruleSpaces?" ":"")).repeat(LS(t));return t.options.ruleSpaces?r.slice(0,-1):r}const Ic={blockquote:iS,break:Xp,code:uS,definition:cS,emphasis:Dg,hardBreak:Xp,heading:vS,html:Hg,image:Ug,imageReference:qg,inlineCode:Vg,link:Qg,linkReference:Gg,list:PS,listItem:IS,paragraph:TS,root:jS,strong:Xg,text:RS,thematicBreak:FS},NS=[DS];function DS(e,n,t,r){if(n.type==="code"&&ps(n,r)&&(e.type==="list"||e.type===n.type&&ps(e,r)))return!1;if("spread"in t&&typeof t.spread=="boolean")return e.type==="paragraph"&&(e.type===n.type||n.type==="definition"||n.type==="heading"&&Bg(n,r))?void 0:t.spread?1:0}const jt=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"],$S=[{character:"	",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",before:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"\r",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:`
`,inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:" ",after:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",before:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"!",after:"\\[",inConstruct:"phrasing",notInConstruct:jt},{character:'"',inConstruct:"titleQuote"},{atBreak:!0,character:"#"},{character:"#",inConstruct:"headingAtx",after:`(?:[\r
]|$)`},{character:"&",after:"[#A-Za-z]",inConstruct:"phrasing"},{character:"'",inConstruct:"titleApostrophe"},{character:"(",inConstruct:"destinationRaw"},{before:"\\]",character:"(",inConstruct:"phrasing",notInConstruct:jt},{atBreak:!0,before:"\\d+",character:")"},{character:")",inConstruct:"destinationRaw"},{atBreak:!0,character:"*",after:`(?:[ 	\r
*])`},{character:"*",inConstruct:"phrasing",notInConstruct:jt},{atBreak:!0,character:"+",after:`(?:[ 	\r
])`},{atBreak:!0,character:"-",after:`(?:[ 	\r
-])`},{atBreak:!0,before:"\\d+",character:".",after:`(?:[ 	\r
]|$)`},{atBreak:!0,character:"<",after:"[!/?A-Za-z]"},{character:"<",after:"[!/?A-Za-z]",inConstruct:"phrasing",notInConstruct:jt},{character:"<",inConstruct:"destinationLiteral"},{atBreak:!0,character:"="},{atBreak:!0,character:">"},{character:">",inConstruct:"destinationLiteral"},{atBreak:!0,character:"["},{character:"[",inConstruct:"phrasing",notInConstruct:jt},{character:"[",inConstruct:["label","reference"]},{character:"\\",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"]",inConstruct:["label","reference"]},{atBreak:!0,character:"_"},{character:"_",inConstruct:"phrasing",notInConstruct:jt},{atBreak:!0,character:"`"},{character:"`",inConstruct:["codeFencedLangGraveAccent","codeFencedMetaGraveAccent"]},{character:"`",inConstruct:"phrasing",notInConstruct:jt},{atBreak:!0,character:"~"}],Zp=document.createElement("i");function Tc(e){const n="&"+e+";";Zp.innerHTML=n;const t=Zp.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function Jg(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}const BS=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Zg(e){return e.replace(BS,HS)}function HS(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),o=i===120||i===88;return Jg(t.slice(o?2:1),o?16:10)}return Tc(t)||e}function US(e){return e.label||!e.identifier?e.label||"":Zg(e.identifier)}function qS(e){if(!e._compiled){const n=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=new RegExp((n?"("+n+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function VS(e,n,t){const r=n.indexStack,i=e.children||[],o=[];let l=-1,a=t.before,u;r.push(-1);let s=n.createTracker(t);for(;++l<i.length;){const f=i[l];let c;if(r[r.length-1]=l,l+1<i.length){let w=n.handle.handlers[i[l+1].type];w&&w.peek&&(w=w.peek),c=w?w(i[l+1],e,n,{before:"",after:"",...s.current()}).charAt(0):""}else c=t.after;o.length>0&&(a==="\r"||a===`
`)&&f.type==="html"&&(o[o.length-1]=o[o.length-1].replace(/(\r?\n|\r)$/," "),a=" ",s=n.createTracker(t),s.move(o.join("")));let p=n.handle(f,e,n,{...s.current(),after:c,before:a});u&&u===p.slice(0,1)&&(p=Pt(u.charCodeAt(0))+p.slice(1));const h=n.attentionEncodeSurroundingInfo;n.attentionEncodeSurroundingInfo=void 0,u=void 0,h&&(o.length>0&&h.before&&a===o[o.length-1].slice(-1)&&(o[o.length-1]=o[o.length-1].slice(0,-1)+Pt(a.charCodeAt(0))),h.after&&(u=c)),s.move(p),o.push(p),a=p.slice(-1)}return r.pop(),o.join("")}function WS(e,n,t){const r=n.indexStack,i=e.children||[],o=n.createTracker(t),l=[];let a=-1;for(r.push(-1);++a<i.length;){const u=i[a];r[r.length-1]=a,l.push(o.move(n.handle(u,e,n,{before:`
`,after:`
`,...o.current()}))),u.type!=="list"&&(n.bulletLastUsed=void 0),a<i.length-1&&l.push(o.move(QS(u,i[a+1],e,n)))}return r.pop(),l.join("")}function QS(e,n,t,r){let i=r.join.length;for(;i--;){const o=r.join[i](e,n,t,r);if(o===!0||o===1)break;if(typeof o=="number")return`
`.repeat(1+o);if(o===!1)return`

<!---->

`}return`

`}const GS=/\r?\n|\r/g;function YS(e,n){const t=[];let r=0,i=0,o;for(;o=GS.exec(e);)l(e.slice(r,o.index)),t.push(o[0]),r=o.index+o[0].length,i++;return l(e.slice(r)),t.join("");function l(a){t.push(n(a,i,!a))}}function XS(e,n,t){const r=(t.before||"")+(n||"")+(t.after||""),i=[],o=[],l={};let a=-1;for(;++a<e.unsafe.length;){const f=e.unsafe[a];if(!Ng(e.stack,f))continue;const c=e.compilePattern(f);let p;for(;p=c.exec(r);){const h="before"in f||!!f.atBreak,w="after"in f,b=p.index+(h?p[1].length:0);i.includes(b)?(l[b].before&&!h&&(l[b].before=!1),l[b].after&&!w&&(l[b].after=!1)):(i.push(b),l[b]={before:h,after:w})}}i.sort(JS);let u=t.before?t.before.length:0;const s=r.length-(t.after?t.after.length:0);for(a=-1;++a<i.length;){const f=i[a];f<u||f>=s||f+1<s&&i[a+1]===f+1&&l[f].after&&!l[f+1].before&&!l[f+1].after||i[a-1]===f-1&&l[f].before&&!l[f-1].before&&!l[f-1].after||(u!==f&&o.push(Kp(r.slice(u,f),"\\")),u=f,/[!-/:-@[-`{-~]/.test(r.charAt(f))&&(!t.encode||!t.encode.includes(r.charAt(f)))?o.push("\\"):(o.push(Pt(r.charCodeAt(f))),u++))}return o.push(Kp(r.slice(u,s),t.after)),o.join("")}function JS(e,n){return e-n}function Kp(e,n){const t=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],o=e+n;let l=-1,a=0,u;for(;u=t.exec(o);)r.push(u.index);for(;++l<r.length;)a!==r[l]&&i.push(e.slice(a,r[l])),i.push("\\"),a=r[l];return i.push(e.slice(a)),i.join("")}function ZS(e){const n=e||{},t=n.now||{};let r=n.lineShift||0,i=t.line||1,o=t.column||1;return{move:u,current:l,shift:a};function l(){return{now:{line:i,column:o},lineShift:r}}function a(s){r+=s}function u(s){const f=s||"",c=f.split(/\r?\n|\r/g),p=c[c.length-1];return i+=c.length-1,o=c.length===1?o+p.length:1+p.length+r,f}}function KS(e,n){const t=n||{},r={associationId:US,containerPhrasing:r2,containerFlow:i2,createTracker:ZS,compilePattern:qS,enter:o,handlers:{...Ic},handle:void 0,indentLines:YS,indexStack:[],join:[...NS],options:{},safe:o2,stack:[],unsafe:[...$S]};Fg(r,t),r.options.tightDefinitions&&r.join.push(t2),r.handle=nS("type",{invalid:e2,unknown:n2,handlers:r.handlers});let i=r.handle(e,void 0,r,{before:`
`,after:`
`,now:{line:1,column:1},lineShift:0});return i&&i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i;function o(l){return r.stack.push(l),a;function a(){r.stack.pop()}}}function e2(e){throw new Error("Cannot handle value `"+e+"`, expected node")}function n2(e){const n=e;throw new Error("Cannot handle unknown node `"+n.type+"`")}function t2(e,n){if(e.type==="definition"&&e.type===n.type)return 0}function r2(e,n){return VS(e,this,n)}function i2(e,n){return WS(e,this,n)}function o2(e,n){return XS(this,e,n)}function l2(e){const n=this;n.compiler=t;function t(r){return KS(r,{...n.data("settings"),...e,extensions:n.data("toMarkdownExtensions")||[]})}}function eh(e){if(e)throw e}var Oo=Object.prototype.hasOwnProperty,Kg=Object.prototype.toString,nh=Object.defineProperty,th=Object.getOwnPropertyDescriptor,rh=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Kg.call(n)==="[object Array]"},ih=function(n){if(!n||Kg.call(n)!=="[object Object]")return!1;var t=Oo.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&Oo.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||Oo.call(n,i)},oh=function(n,t){nh&&t.name==="__proto__"?nh(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},lh=function(n,t){if(t==="__proto__")if(Oo.call(n,t)){if(th)return th(n,t).value}else return;return n[t]},a2=function e(){var n,t,r,i,o,l,a=arguments[0],u=1,s=arguments.length,f=!1;for(typeof a=="boolean"&&(f=a,a=arguments[1]||{},u=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});u<s;++u)if(n=arguments[u],n!=null)for(t in n)r=lh(a,t),i=lh(n,t),a!==i&&(f&&i&&(ih(i)||(o=rh(i)))?(o?(o=!1,l=r&&rh(r)?r:[]):l=r&&ih(r)?r:{},oh(a,{name:t,newValue:e(f,l,i)})):typeof i<"u"&&oh(a,{name:t,newValue:i}));return a};const Wa=xs(a2);function ds(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function u2(){const e=[],n={run:t,use:r};return n;function t(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(u,...s){const f=e[++o];let c=-1;if(u){l(u);return}for(;++c<i.length;)(s[c]===null||s[c]===void 0)&&(s[c]=i[c]);i=s,f?s2(f,a)(...s):l(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function s2(e,n){let t;return r;function r(...l){const a=e.length>l.length;let u;a&&l.push(i);try{u=e.apply(this,l)}catch(s){const f=s;if(a&&t)throw f;return i(f)}a||(u&&u.then&&typeof u.then=="function"?u.then(o,i):u instanceof Error?i(u):o(u))}function i(l,...a){t||(t=!0,n(l,...a))}function o(l){i(null,l)}}function fi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?ah(e.position):"start"in e||"end"in e?ah(e):"line"in e||"column"in e?ms(e):""}function ms(e){return uh(e&&e.line)+":"+uh(e&&e.column)}function ah(e){return ms(e&&e.start)+"-"+ms(e&&e.end)}function uh(e){return e&&typeof e=="number"?e:1}class cn extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",o={},l=!1;if(t&&("line"in t&&"column"in t?o={place:t}:"start"in t&&"end"in t?o={place:t}:"type"in t?o={ancestors:[t],place:t.position}:o={...t}),typeof n=="string"?i=n:!o.cause&&n&&(l=!0,i=n.message,o.cause=n),!o.ruleId&&!o.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?o.ruleId=r:(o.source=r.slice(0,u),o.ruleId=r.slice(u+1))}if(!o.place&&o.ancestors&&o.ancestors){const u=o.ancestors[o.ancestors.length-1];u&&(o.place=u.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=a?a.line:void 0,this.name=fi(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}cn.prototype.file="";cn.prototype.name="";cn.prototype.reason="";cn.prototype.message="";cn.prototype.stack="";cn.prototype.column=void 0;cn.prototype.line=void 0;cn.prototype.ancestors=void 0;cn.prototype.cause=void 0;cn.prototype.fatal=void 0;cn.prototype.place=void 0;cn.prototype.ruleId=void 0;cn.prototype.source=void 0;const Hn={basename:c2,dirname:f2,extname:p2,join:h2,sep:"/"};function c2(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');$i(e);let t=0,r=-1,i=e.length,o;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){t=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let l=-1,a=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){t=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.codePointAt(i)===n.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return t===r?r=l:r<0&&(r=e.length),e.slice(t,r)}function f2(e){if($i(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function p2(e){$i(e);let n=e.length,t=-1,r=0,i=-1,o=0,l;for(;n--;){const a=e.codePointAt(n);if(a===47){if(l){r=n+1;break}continue}t<0&&(l=!0,t=n+1),a===46?i<0?i=n:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||t<0||o===0||o===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function h2(...e){let n=-1,t;for(;++n<e.length;)$i(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":d2(t)}function d2(e){$i(e);const n=e.codePointAt(0)===47;let t=m2(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function m2(e,n){let t="",r=0,i=-1,o=0,l=-1,a,u;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(u=t.lastIndexOf("/"),u!==t.length-1){u<0?(t="",r=0):(t=t.slice(0,u),r=t.length-1-t.lastIndexOf("/")),i=l,o=0;continue}}else if(t.length>0){t="",r=0,i=l,o=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,l):t=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return t}function $i(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const g2={cwd:y2};function y2(){return"/"}function gs(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function v2(e){if(typeof e=="string")e=new URL(e);else if(!gs(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return w2(e)}function w2(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const Qa=["history","path","basename","stem","extname","dirname"];class k2{constructor(n){let t;n?gs(n)?t={path:n}:typeof n=="string"||x2(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":g2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Qa.length;){const o=Qa[r];o in t&&t[o]!==void 0&&t[o]!==null&&(this[o]=o==="history"?[...t[o]]:t[o])}let i;for(i in t)Qa.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?Hn.basename(this.path):void 0}set basename(n){Ya(n,"basename"),Ga(n,"basename"),this.path=Hn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?Hn.dirname(this.path):void 0}set dirname(n){sh(this.basename,"dirname"),this.path=Hn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?Hn.extname(this.path):void 0}set extname(n){if(Ga(n,"extname"),sh(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Hn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){gs(n)&&(n=v2(n)),Ya(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?Hn.basename(this.path,this.extname):void 0}set stem(n){Ya(n,"stem"),Ga(n,"stem"),this.path=Hn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new cn(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Ga(e,n){if(e&&e.includes(Hn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+Hn.sep+"`")}function Ya(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function sh(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function x2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const S2=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},E2={}.hasOwnProperty;class Mc extends S2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=u2()}copy(){const n=new Mc;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(Wa(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Za("data",this.frozen),this.namespace[n]=t,this):E2.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Za("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=ao(n),r=this.parser||this.Parser;return Xa("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),Xa("process",this.parser||this.Parser),Ja("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(o,l){const a=ao(n),u=r.parse(a);r.run(u,a,function(f,c,p){if(f||!c||!p)return s(f);const h=c,w=r.stringify(h,p);b2(w)?p.value=w:p.result=w,s(f,p)});function s(f,c){f||!c?l(f):o?o(c):t(void 0,c)}}}processSync(n){let t=!1,r;return this.freeze(),Xa("processSync",this.parser||this.Parser),Ja("processSync",this.compiler||this.Compiler),this.process(n,i),fh("processSync","process",t),r;function i(o,l){t=!0,eh(o),r=l}}run(n,t,r){ch(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?o(void 0,r):new Promise(o);function o(l,a){const u=ao(t);i.run(n,u,s);function s(f,c,p){const h=c||n;f?a(f):l?l(h):r(void 0,h,p)}}}runSync(n,t){let r=!1,i;return this.run(n,t,o),fh("runSync","run",r),i;function o(l,a){eh(l),i=a,r=!0}}stringify(n,t){this.freeze();const r=ao(t),i=this.compiler||this.Compiler;return Ja("stringify",i),ch(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(Za("use",this.frozen),n!=null)if(typeof n=="function")u(n,t);else if(typeof n=="object")Array.isArray(n)?a(n):l(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function o(s){if(typeof s=="function")u(s,[]);else if(typeof s=="object")if(Array.isArray(s)){const[f,...c]=s;u(f,c)}else l(s);else throw new TypeError("Expected usable value, not `"+s+"`")}function l(s){if(!("plugins"in s)&&!("settings"in s))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(s.plugins),s.settings&&(i.settings=Wa(!0,i.settings,s.settings))}function a(s){let f=-1;if(s!=null)if(Array.isArray(s))for(;++f<s.length;){const c=s[f];o(c)}else throw new TypeError("Expected a list of plugins, not `"+s+"`")}function u(s,f){let c=-1,p=-1;for(;++c<r.length;)if(r[c][0]===s){p=c;break}if(p===-1)r.push([s,...f]);else if(f.length>0){let[h,...w]=f;const b=r[p][1];ds(b)&&ds(h)&&(h=Wa(!0,b,h)),r[p]=[s,h,...w]}}}}const ey=new Mc().freeze();function Xa(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ja(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Za(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ch(e){if(!ds(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function fh(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function ao(e){return _2(e)?e:new k2(e)}function _2(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function b2(e){return typeof e=="string"||A2(e)}function A2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}function ph(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(n);for(;i!==-1;)r++,i=t.indexOf(n,i+n.length);return r}function P2(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function C2(e,n,t){const i=zl((t||{}).ignore||[]),o=I2(n);let l=-1;for(;++l<o.length;)Pg(e,"text",a);function a(s,f){let c=-1,p;for(;++c<f.length;){const h=f[c],w=p?p.children:void 0;if(i(h,w?w.indexOf(h):void 0,p))return;p=h}if(p)return u(s,f)}function u(s,f){const c=f[f.length-1],p=o[l][0],h=o[l][1];let w=0;const R=c.children.indexOf(s);let v=!1,m=[];p.lastIndex=0;let g=p.exec(s.value);for(;g;){const E=g.index,I={index:g.index,input:g.input,stack:[...f,s]};let S=h(...g,I);if(typeof S=="string"&&(S=S.length>0?{type:"text",value:S}:void 0),S===!1?p.lastIndex=E+1:(w!==E&&m.push({type:"text",value:s.value.slice(w,E)}),Array.isArray(S)?m.push(...S):S&&m.push(S),w=E+g[0].length,v=!0),!p.global)break;g=p.exec(s.value)}return v?(w<s.value.length&&m.push({type:"text",value:s.value.slice(w)}),c.children.splice(R,1,...m)):m=[s],R+m.length}}function I2(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<t.length;){const i=t[r];n.push([T2(i[0]),M2(i[1])])}return n}function T2(e){return typeof e=="string"?new RegExp(P2(e),"g"):e}function M2(e){return typeof e=="function"?e:function(){return e}}const Ka="phrasing",eu=["autolink","link","image","label"];function j2(){return{transforms:[D2],enter:{literalAutolink:z2,literalAutolinkEmail:nu,literalAutolinkHttp:nu,literalAutolinkWww:nu},exit:{literalAutolink:N2,literalAutolinkEmail:F2,literalAutolinkHttp:R2,literalAutolinkWww:L2}}}function O2(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Ka,notInConstruct:eu},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Ka,notInConstruct:eu},{character:":",before:"[ps]",after:"\\/",inConstruct:Ka,notInConstruct:eu}]}}function z2(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function nu(e){this.config.enter.autolinkProtocol.call(this,e)}function R2(e){this.config.exit.autolinkProtocol.call(this,e)}function L2(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function F2(e){this.config.exit.autolinkEmail.call(this,e)}function N2(e){this.exit(e)}function D2(e){C2(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,$2],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),B2]],{ignore:["link","linkReference"]})}function $2(e,n,t,r,i){let o="";if(!ny(i)||(/^w/i.test(n)&&(t=n+t,n="",o="http://"),!H2(t)))return!1;const l=U2(t+r);if(!l[0])return!1;const a={type:"link",title:null,url:o+n+l[0],children:[{type:"text",value:n+l[0]}]};return l[1]?[a,{type:"text",value:l[1]}]:a}function B2(e,n,t,r){return!ny(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function H2(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function U2(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],r=t.indexOf(")");const i=ph(e,"(");let o=ph(e,")");for(;r!==-1&&i>o;)e+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),o++;return[e,t]}function ny(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||Qt(t)||Fl(t))&&(!n||t!==47)}function Nn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}ty.peek=Z2;function q2(){this.buffer()}function V2(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function W2(){this.buffer()}function Q2(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function G2(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=Nn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function Y2(e){this.exit(e)}function X2(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=Nn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function J2(e){this.exit(e)}function Z2(){return"["}function ty(e,n,t,r){const i=t.createTracker(r);let o=i.move("[^");const l=t.enter("footnoteReference"),a=t.enter("reference");return o+=i.move(t.safe(t.associationId(e),{after:"]",before:o})),a(),l(),o+=i.move("]"),o}function K2(){return{enter:{gfmFootnoteCallString:q2,gfmFootnoteCall:V2,gfmFootnoteDefinitionLabelString:W2,gfmFootnoteDefinition:Q2},exit:{gfmFootnoteCallString:G2,gfmFootnoteCall:Y2,gfmFootnoteDefinitionLabelString:X2,gfmFootnoteDefinition:J2}}}function eE(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:ty},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,o,l){const a=o.createTracker(l);let u=a.move("[^");const s=o.enter("footnoteDefinition"),f=o.enter("label");return u+=a.move(o.safe(o.associationId(r),{before:u,after:"]"})),f(),u+=a.move("]:"),r.children&&r.children.length>0&&(a.shift(4),u+=a.move((n?`
`:" ")+o.indentLines(o.containerFlow(r,a.current()),n?ry:nE))),s(),u}}function nE(e,n,t){return n===0?e:ry(e,n,t)}function ry(e,n,t){return(t?"":"    ")+e}const tE=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];iy.peek=aE;function rE(){return{canContainEols:["delete"],enter:{strikethrough:oE},exit:{strikethrough:lE}}}function iE(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:tE}],handlers:{delete:iy}}}function oE(e){this.enter({type:"delete",children:[]},e)}function lE(e){this.exit(e)}function iy(e,n,t,r){const i=t.createTracker(r),o=t.enter("strikethrough");let l=i.move("~~");return l+=t.containerPhrasing(e,{...i.current(),before:l,after:"~"}),l+=i.move("~~"),o(),l}function aE(){return"~"}function uE(e){return e.length}function sE(e,n){const t=n||{},r=(t.align||[]).concat(),i=t.stringLength||uE,o=[],l=[],a=[],u=[];let s=0,f=-1;for(;++f<e.length;){const b=[],R=[];let v=-1;for(e[f].length>s&&(s=e[f].length);++v<e[f].length;){const m=cE(e[f][v]);if(t.alignDelimiters!==!1){const g=i(m);R[v]=g,(u[v]===void 0||g>u[v])&&(u[v]=g)}b.push(m)}l[f]=b,a[f]=R}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<s;)o[c]=hh(r[c]);else{const b=hh(r);for(;++c<s;)o[c]=b}c=-1;const p=[],h=[];for(;++c<s;){const b=o[c];let R="",v="";b===99?(R=":",v=":"):b===108?R=":":b===114&&(v=":");let m=t.alignDelimiters===!1?1:Math.max(1,u[c]-R.length-v.length);const g=R+"-".repeat(m)+v;t.alignDelimiters!==!1&&(m=R.length+m+v.length,m>u[c]&&(u[c]=m),h[c]=m),p[c]=g}l.splice(1,0,p),a.splice(1,0,h),f=-1;const w=[];for(;++f<l.length;){const b=l[f],R=a[f];c=-1;const v=[];for(;++c<s;){const m=b[c]||"";let g="",E="";if(t.alignDelimiters!==!1){const I=u[c]-(R[c]||0),S=o[c];S===114?g=" ".repeat(I):S===99?I%2?(g=" ".repeat(I/2+.5),E=" ".repeat(I/2-.5)):(g=" ".repeat(I/2),E=g):E=" ".repeat(I)}t.delimiterStart!==!1&&!c&&v.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&m==="")&&(t.delimiterStart!==!1||c)&&v.push(" "),t.alignDelimiters!==!1&&v.push(g),v.push(m),t.alignDelimiters!==!1&&v.push(E),t.padding!==!1&&v.push(" "),(t.delimiterEnd!==!1||c!==s-1)&&v.push("|")}w.push(t.delimiterEnd===!1?v.join("").replace(/ +$/,""):v.join(""))}return w.join(`
`)}function cE(e){return e==null?"":String(e)}function hh(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function fE(){return{enter:{table:pE,tableData:dh,tableHeader:dh,tableRow:dE},exit:{codeText:mE,table:hE,tableData:tu,tableHeader:tu,tableRow:tu}}}function pE(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function hE(e){this.exit(e),this.data.inTable=void 0}function dE(e){this.enter({type:"tableRow",children:[]},e)}function tu(e){this.exit(e)}function dh(e){this.enter({type:"tableCell",children:[]},e)}function mE(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,gE));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function gE(e,n){return n==="|"?n:e}function yE(e){const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,i=n.stringLength,o=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:l,tableCell:u,tableRow:a}};function l(h,w,b,R){return s(f(h,b,R),h.align)}function a(h,w,b,R){const v=c(h,b,R),m=s([v]);return m.slice(0,m.indexOf(`
`))}function u(h,w,b,R){const v=b.enter("tableCell"),m=b.enter("phrasing"),g=b.containerPhrasing(h,{...R,before:o,after:o});return m(),v(),g}function s(h,w){return sE(h,{align:w,alignDelimiters:r,padding:t,stringLength:i})}function f(h,w,b){const R=h.children;let v=-1;const m=[],g=w.enter("table");for(;++v<R.length;)m[v]=c(R[v],w,b);return g(),m}function c(h,w,b){const R=h.children;let v=-1;const m=[],g=w.enter("tableRow");for(;++v<R.length;)m[v]=u(R[v],h,w,b);return g(),m}function p(h,w,b){let R=Ic.inlineCode(h,w,b);return b.stack.includes("tableCell")&&(R=R.replace(/\|/g,"\\$&")),R}}function vE(){return{exit:{taskListCheckValueChecked:mh,taskListCheckValueUnchecked:mh,paragraph:kE}}}function wE(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:xE}}}function mh(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function kE(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=n.children;let o=-1,l;for(;++o<i.length;){const a=i[o];if(a.type==="paragraph"){l=a;break}}l===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function xE(e,n,t,r){const i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",l="["+(e.checked?"x":" ")+"] ",a=t.createTracker(r);o&&a.move(l);let u=Ic.listItem(e,n,t,{...r,...a.current()});return o&&(u=u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,s)),u;function s(f){return f+l}}function SE(){return[j2(),K2(),rE(),fE(),vE()]}function EE(e){return{extensions:[O2(),eE(e),iE(),yE(e),wE()]}}function mn(e,n,t,r){const i=e.length;let o=0,l;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)l=Array.from(r),l.unshift(n,t),e.splice(...l);else for(t&&e.splice(n,t);o<r.length;)l=r.slice(o,o+1e4),l.unshift(n,0),e.splice(...l),o+=1e4,n+=1e4}function En(e,n){return e.length>0?(mn(e,e.length,0,n),e):n}const gh={}.hasOwnProperty;function oy(e){const n={};let t=-1;for(;++t<e.length;)_E(n,e[t]);return n}function _E(e,n){let t;for(t in n){const i=(gh.call(e,t)?e[t]:void 0)||(e[t]={}),o=n[t];let l;if(o)for(l in o){gh.call(i,l)||(i[l]=[]);const a=o[l];bE(i[l],Array.isArray(a)?a:a?[a]:[])}}}function bE(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);mn(e,0,0,r)}const AE={tokenize:jE,partial:!0},ly={tokenize:OE,partial:!0},ay={tokenize:zE,partial:!0},uy={tokenize:RE,partial:!0},PE={tokenize:LE,partial:!0},sy={name:"wwwAutolink",tokenize:TE,previous:fy},cy={name:"protocolAutolink",tokenize:ME,previous:py},at={name:"emailAutolink",tokenize:IE,previous:hy},Qn={};function CE(){return{text:Qn}}let Ot=48;for(;Ot<123;)Qn[Ot]=at,Ot++,Ot===58?Ot=65:Ot===91&&(Ot=97);Qn[43]=at;Qn[45]=at;Qn[46]=at;Qn[95]=at;Qn[72]=[at,cy];Qn[104]=[at,cy];Qn[87]=[at,sy];Qn[119]=[at,sy];function IE(e,n,t){const r=this;let i,o;return l;function l(c){return!ys(c)||!hy.call(r,r.previous)||jc(r.events)?t(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(c))}function a(c){return ys(c)?(e.consume(c),a):c===64?(e.consume(c),u):t(c)}function u(c){return c===46?e.check(PE,f,s)(c):c===45||c===95||ln(c)?(o=!0,e.consume(c),u):f(c)}function s(c){return e.consume(c),i=!0,u}function f(c){return o&&i&&Ze(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(c)):t(c)}}function TE(e,n,t){const r=this;return i;function i(l){return l!==87&&l!==119||!fy.call(r,r.previous)||jc(r.events)?t(l):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(AE,e.attempt(ly,e.attempt(ay,o),t),t)(l))}function o(l){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(l)}}function ME(e,n,t){const r=this;let i="",o=!1;return l;function l(c){return(c===72||c===104)&&py.call(r,r.previous)&&!jc(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),a):t(c)}function a(c){if(Ze(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),a;if(c===58){const p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(c),u}return t(c)}function u(c){return c===47?(e.consume(c),o?s:(o=!0,u)):t(c)}function s(c){return c===null||cl(c)||we(c)||Qt(c)||Fl(c)?t(c):e.attempt(ly,e.attempt(ay,f),t)(c)}function f(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(c)}}function jE(e,n,t){let r=0;return i;function i(l){return(l===87||l===119)&&r<3?(r++,e.consume(l),i):l===46&&r===3?(e.consume(l),o):t(l)}function o(l){return l===null?t(l):n(l)}}function OE(e,n,t){let r,i,o;return l;function l(s){return s===46||s===95?e.check(uy,u,a)(s):s===null||we(s)||Qt(s)||s!==45&&Fl(s)?u(s):(o=!0,e.consume(s),l)}function a(s){return s===95?r=!0:(i=r,r=void 0),e.consume(s),l}function u(s){return i||r||!o?t(s):n(s)}}function zE(e,n){let t=0,r=0;return i;function i(l){return l===40?(t++,e.consume(l),i):l===41&&r<t?o(l):l===33||l===34||l===38||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===60||l===63||l===93||l===95||l===126?e.check(uy,n,o)(l):l===null||we(l)||Qt(l)?n(l):(e.consume(l),i)}function o(l){return l===41&&r++,e.consume(l),i}}function RE(e,n,t){return r;function r(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),r):a===38?(e.consume(a),o):a===93?(e.consume(a),i):a===60||a===null||we(a)||Qt(a)?n(a):t(a)}function i(a){return a===null||a===40||a===91||we(a)||Qt(a)?n(a):r(a)}function o(a){return Ze(a)?l(a):t(a)}function l(a){return a===59?(e.consume(a),r):Ze(a)?(e.consume(a),l):t(a)}}function LE(e,n,t){return r;function r(o){return e.consume(o),i}function i(o){return ln(o)?t(o):n(o)}}function fy(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||we(e)}function py(e){return!Ze(e)}function hy(e){return!(e===47||ys(e))}function ys(e){return e===43||e===45||e===46||e===95||ln(e)}function jc(e){let n=e.length,t=!1;for(;n--;){const r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}function Nl(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(n=o(n,t),r.push(o))}return n}const vs={name:"attention",resolveAll:FE,tokenize:NE};function FE(e,n){let t=-1,r,i,o,l,a,u,s,f;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const c={...e[r][1].end},p={...e[t][1].start};yh(c,-u),yh(p,u),l={type:u>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},a={type:u>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:p},o={type:u>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:u>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},e[r][1].end={...l.start},e[t][1].start={...a.end},s=[],e[r][1].end.offset-e[r][1].start.offset&&(s=En(s,[["enter",e[r][1],n],["exit",e[r][1],n]])),s=En(s,[["enter",i,n],["enter",l,n],["exit",l,n],["enter",o,n]]),s=En(s,Nl(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),s=En(s,[["exit",o,n],["enter",a,n],["exit",a,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(f=2,s=En(s,[["enter",e[t][1],n],["exit",e[t][1],n]])):f=0,mn(e,r-1,t-r+3,s),t=r+s.length-f-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function NE(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Tr(r);let o;return l;function l(u){return o=u,e.enter("attentionSequence"),a(u)}function a(u){if(u===o)return e.consume(u),a;const s=e.exit("attentionSequence"),f=Tr(u),c=!f||f===2&&i||t.includes(u),p=!i||i===2&&f||t.includes(r);return s._open=!!(o===42?c:c&&(i||!p)),s._close=!!(o===42?p:p&&(f||!c)),n(u)}}function yh(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const DE={name:"autolink",tokenize:$E};function $E(e,n,t){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(h){return Ze(h)?(e.consume(h),l):h===64?t(h):s(h)}function l(h){return h===43||h===45||h===46||ln(h)?(r=1,a(h)):s(h)}function a(h){return h===58?(e.consume(h),r=0,u):(h===43||h===45||h===46||ln(h))&&r++<32?(e.consume(h),a):(r=0,s(h))}function u(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),n):h===null||h===32||h===60||cl(h)?t(h):(e.consume(h),u)}function s(h){return h===64?(e.consume(h),f):pS(h)?(e.consume(h),s):t(h)}function f(h){return ln(h)?c(h):t(h)}function c(h){return h===46?(e.consume(h),r=0,f):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),n):p(h)}function p(h){if((h===45||ln(h))&&r++<63){const w=h===45?p:c;return e.consume(h),w}return t(h)}}function he(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(u){return ce(u)?(e.enter(t),a(u)):n(u)}function a(u){return ce(u)&&o++<i?(e.consume(u),a):(e.exit(t),n(u))}}const Bi={partial:!0,tokenize:BE};function BE(e,n,t){return r;function r(o){return ce(o)?he(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||te(o)?n(o):t(o)}}const dy={continuation:{tokenize:UE},exit:qE,name:"blockQuote",tokenize:HE};function HE(e,n,t){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return t(l)}function o(l){return ce(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(l))}}function UE(e,n,t){const r=this;return i;function i(l){return ce(l)?he(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(dy,n,t)(l)}}function qE(e){e.exit("blockQuote")}const my={name:"characterEscape",tokenize:VE};function VE(e,n,t){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return dS(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(o)}}const gy={name:"characterReference",tokenize:WE};function WE(e,n,t){const r=this;let i=0,o,l;return a;function a(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),u}function u(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),o=31,l=ln,f(c))}function s(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=hS,f):(e.enter("characterReferenceValue"),o=7,l=hs,f(c))}function f(c){if(c===59&&i){const p=e.exit("characterReferenceValue");return l===ln&&!Tc(r.sliceSerialize(p))?t(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return l(c)&&i++<o?(e.consume(c),f):t(c)}}const vh={partial:!0,tokenize:GE},wh={concrete:!0,name:"codeFenced",tokenize:QE};function QE(e,n,t){const r=this,i={partial:!0,tokenize:I};let o=0,l=0,a;return u;function u(S){return s(S)}function s(S){const T=r.events[r.events.length-1];return o=T&&T[1].type==="linePrefix"?T[2].sliceSerialize(T[1],!0).length:0,a=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(S)}function f(S){return S===a?(l++,e.consume(S),f):l<3?t(S):(e.exit("codeFencedFenceSequence"),ce(S)?he(e,c,"whitespace")(S):c(S))}function c(S){return S===null||te(S)?(e.exit("codeFencedFence"),r.interrupt?n(S):e.check(vh,b,E)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(S))}function p(S){return S===null||te(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(S)):ce(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),he(e,h,"whitespace")(S)):S===96&&S===a?t(S):(e.consume(S),p)}function h(S){return S===null||te(S)?c(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(S))}function w(S){return S===null||te(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(S)):S===96&&S===a?t(S):(e.consume(S),w)}function b(S){return e.attempt(i,E,R)(S)}function R(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),v}function v(S){return o>0&&ce(S)?he(e,m,"linePrefix",o+1)(S):m(S)}function m(S){return S===null||te(S)?e.check(vh,b,E)(S):(e.enter("codeFlowValue"),g(S))}function g(S){return S===null||te(S)?(e.exit("codeFlowValue"),m(S)):(e.consume(S),g)}function E(S){return e.exit("codeFenced"),n(S)}function I(S,T,D){let W=0;return P;function P(re){return S.enter("lineEnding"),S.consume(re),S.exit("lineEnding"),G}function G(re){return S.enter("codeFencedFence"),ce(re)?he(S,H,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(re):H(re)}function H(re){return re===a?(S.enter("codeFencedFenceSequence"),ne(re)):D(re)}function ne(re){return re===a?(W++,S.consume(re),ne):W>=l?(S.exit("codeFencedFenceSequence"),ce(re)?he(S,le,"whitespace")(re):le(re)):D(re)}function le(re){return re===null||te(re)?(S.exit("codeFencedFence"),T(re)):D(re)}}}function GE(e,n,t){const r=this;return i;function i(l){return l===null?t(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?t(l):n(l)}}const ru={name:"codeIndented",tokenize:XE},YE={partial:!0,tokenize:JE};function XE(e,n,t){const r=this;return i;function i(s){return e.enter("codeIndented"),he(e,o,"linePrefix",5)(s)}function o(s){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(s):t(s)}function l(s){return s===null?u(s):te(s)?e.attempt(YE,l,u)(s):(e.enter("codeFlowValue"),a(s))}function a(s){return s===null||te(s)?(e.exit("codeFlowValue"),l(s)):(e.consume(s),a)}function u(s){return e.exit("codeIndented"),n(s)}}function JE(e,n,t){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?t(l):te(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):he(e,o,"linePrefix",5)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?n(l):te(l)?i(l):t(l)}}const ZE={name:"codeText",previous:e_,resolve:KE,tokenize:n_};function KE(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function e_(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function n_(e,n,t){let r=0,i,o;return l;function l(c){return e.enter("codeText"),e.enter("codeTextSequence"),a(c)}function a(c){return c===96?(e.consume(c),r++,a):(e.exit("codeTextSequence"),u(c))}function u(c){return c===null?t(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),u):c===96?(o=e.enter("codeTextSequence"),i=0,f(c)):te(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),u):(e.enter("codeTextData"),s(c))}function s(c){return c===null||c===32||c===96||te(c)?(e.exit("codeTextData"),u(c)):(e.consume(c),s)}function f(c){return c===96?(e.consume(c),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(c)):(o.type="codeTextData",s(c))}}class t_{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Yr(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Yr(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Yr(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Yr(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Yr(this.left,t.reverse())}}}function Yr(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function yy(e){const n={};let t=-1,r,i,o,l,a,u,s;const f=new t_(e);for(;++t<f.length;){for(;t in n;)t=n[t];if(r=f.get(t),t&&r[1].type==="chunkFlow"&&f.get(t-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,r_(f,t)),t=n[t],s=!0);else if(r[1]._container){for(o=t,i=void 0;o--;)if(l=f.get(o),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},a=f.slice(i,t),a.unshift(r),f.splice(i,t-i+1,a))}}return mn(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!s}function r_(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const o=[];let l=t._tokenizer;l||(l=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,u=[],s={};let f,c,p=-1,h=t,w=0,b=0;const R=[b];for(;h;){for(;e.get(++i)[1]!==h;);o.push(i),h._tokenizer||(f=r.sliceStream(h),h.next||f.push(null),c&&l.defineSkip(h.start),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(f),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),c=h,h=h.next}for(h=t;++p<a.length;)a[p][0]==="exit"&&a[p-1][0]==="enter"&&a[p][1].type===a[p-1][1].type&&a[p][1].start.line!==a[p][1].end.line&&(b=p+1,R.push(b),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(l.events=[],h?(h._tokenizer=void 0,h.previous=void 0):R.pop(),p=R.length;p--;){const v=a.slice(R[p],R[p+1]),m=o.pop();u.push([m,m+v.length-1]),e.splice(m,2,v)}for(u.reverse(),p=-1;++p<u.length;)s[w+u[p][0]]=w+u[p][1],w+=u[p][1]-u[p][0]-1;return s}const i_={resolve:l_,tokenize:a_},o_={partial:!0,tokenize:u_};function l_(e){return yy(e),e}function a_(e,n){let t;return r;function r(a){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):te(a)?e.check(o_,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),n(a)}function l(a){return e.consume(a),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function u_(e,n,t){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),he(e,o,"linePrefix")}function o(l){if(l===null||te(l))return t(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?n(l):e.interrupt(r.parser.constructs.flow,t,n)(l)}}function vy(e,n,t,r,i,o,l,a,u){const s=u||Number.POSITIVE_INFINITY;let f=0;return c;function c(v){return v===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(v),e.exit(o),p):v===null||v===32||v===41||cl(v)?t(v):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),b(v))}function p(v){return v===62?(e.enter(o),e.consume(v),e.exit(o),e.exit(i),e.exit(r),n):(e.enter(a),e.enter("chunkString",{contentType:"string"}),h(v))}function h(v){return v===62?(e.exit("chunkString"),e.exit(a),p(v)):v===null||v===60||te(v)?t(v):(e.consume(v),v===92?w:h)}function w(v){return v===60||v===62||v===92?(e.consume(v),h):h(v)}function b(v){return!f&&(v===null||v===41||we(v))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),n(v)):f<s&&v===40?(e.consume(v),f++,b):v===41?(e.consume(v),f--,b):v===null||v===32||v===40||cl(v)?t(v):(e.consume(v),v===92?R:b)}function R(v){return v===40||v===41||v===92?(e.consume(v),b):b(v)}}function wy(e,n,t,r,i,o){const l=this;let a=0,u;return s;function s(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(o),f}function f(h){return a>999||h===null||h===91||h===93&&!u||h===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?t(h):h===93?(e.exit(o),e.enter(i),e.consume(h),e.exit(i),e.exit(r),n):te(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===null||h===91||h===93||te(h)||a++>999?(e.exit("chunkString"),f(h)):(e.consume(h),u||(u=!ce(h)),h===92?p:c)}function p(h){return h===91||h===92||h===93?(e.consume(h),a++,c):c(h)}}function ky(e,n,t,r,i,o){let l;return a;function a(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),l=p===40?41:p,u):t(p)}function u(p){return p===l?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),n):(e.enter(o),s(p))}function s(p){return p===l?(e.exit(o),u(l)):p===null?t(p):te(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),he(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===l||p===null||te(p)?(e.exit("chunkString"),s(p)):(e.consume(p),p===92?c:f)}function c(p){return p===l||p===92?(e.consume(p),f):f(p)}}function pi(e,n){let t;return r;function r(i){return te(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):ce(i)?he(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const s_={name:"definition",tokenize:f_},c_={partial:!0,tokenize:p_};function f_(e,n,t){const r=this;let i;return o;function o(h){return e.enter("definition"),l(h)}function l(h){return wy.call(r,e,a,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return i=Nn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),u):t(h)}function u(h){return we(h)?pi(e,s)(h):s(h)}function s(h){return vy(e,f,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function f(h){return e.attempt(c_,c,c)(h)}function c(h){return ce(h)?he(e,p,"whitespace")(h):p(h)}function p(h){return h===null||te(h)?(e.exit("definition"),r.parser.defined.push(i),n(h)):t(h)}}function p_(e,n,t){return r;function r(a){return we(a)?pi(e,i)(a):t(a)}function i(a){return ky(e,o,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return ce(a)?he(e,l,"whitespace")(a):l(a)}function l(a){return a===null||te(a)?n(a):t(a)}}const h_={name:"hardBreakEscape",tokenize:d_};function d_(e,n,t){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return te(o)?(e.exit("hardBreakEscape"),n(o)):t(o)}}const m_={name:"headingAtx",resolve:g_,tokenize:y_};function g_(e,n){let t=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},o={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},mn(e,r,t-r+1,[["enter",i,n],["enter",o,n],["exit",o,n],["exit",i,n]])),e}function y_(e,n,t){let r=0;return i;function i(f){return e.enter("atxHeading"),o(f)}function o(f){return e.enter("atxHeadingSequence"),l(f)}function l(f){return f===35&&r++<6?(e.consume(f),l):f===null||we(f)?(e.exit("atxHeadingSequence"),a(f)):t(f)}function a(f){return f===35?(e.enter("atxHeadingSequence"),u(f)):f===null||te(f)?(e.exit("atxHeading"),n(f)):ce(f)?he(e,a,"whitespace")(f):(e.enter("atxHeadingText"),s(f))}function u(f){return f===35?(e.consume(f),u):(e.exit("atxHeadingSequence"),a(f))}function s(f){return f===null||f===35||we(f)?(e.exit("atxHeadingText"),a(f)):(e.consume(f),s)}}const v_=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],kh=["pre","script","style","textarea"],w_={concrete:!0,name:"htmlFlow",resolveTo:S_,tokenize:E_},k_={partial:!0,tokenize:b_},x_={partial:!0,tokenize:__};function S_(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function E_(e,n,t){const r=this;let i,o,l,a,u;return s;function s(d){return f(d)}function f(d){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(d),c}function c(d){return d===33?(e.consume(d),p):d===47?(e.consume(d),o=!0,b):d===63?(e.consume(d),i=3,r.interrupt?n:y):Ze(d)?(e.consume(d),l=String.fromCharCode(d),R):t(d)}function p(d){return d===45?(e.consume(d),i=2,h):d===91?(e.consume(d),i=5,a=0,w):Ze(d)?(e.consume(d),i=4,r.interrupt?n:y):t(d)}function h(d){return d===45?(e.consume(d),r.interrupt?n:y):t(d)}function w(d){const k="CDATA[";return d===k.charCodeAt(a++)?(e.consume(d),a===k.length?r.interrupt?n:H:w):t(d)}function b(d){return Ze(d)?(e.consume(d),l=String.fromCharCode(d),R):t(d)}function R(d){if(d===null||d===47||d===62||we(d)){const k=d===47,x=l.toLowerCase();return!k&&!o&&kh.includes(x)?(i=1,r.interrupt?n(d):H(d)):v_.includes(l.toLowerCase())?(i=6,k?(e.consume(d),v):r.interrupt?n(d):H(d)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(d):o?m(d):g(d))}return d===45||ln(d)?(e.consume(d),l+=String.fromCharCode(d),R):t(d)}function v(d){return d===62?(e.consume(d),r.interrupt?n:H):t(d)}function m(d){return ce(d)?(e.consume(d),m):P(d)}function g(d){return d===47?(e.consume(d),P):d===58||d===95||Ze(d)?(e.consume(d),E):ce(d)?(e.consume(d),g):P(d)}function E(d){return d===45||d===46||d===58||d===95||ln(d)?(e.consume(d),E):I(d)}function I(d){return d===61?(e.consume(d),S):ce(d)?(e.consume(d),I):g(d)}function S(d){return d===null||d===60||d===61||d===62||d===96?t(d):d===34||d===39?(e.consume(d),u=d,T):ce(d)?(e.consume(d),S):D(d)}function T(d){return d===u?(e.consume(d),u=null,W):d===null||te(d)?t(d):(e.consume(d),T)}function D(d){return d===null||d===34||d===39||d===47||d===60||d===61||d===62||d===96||we(d)?I(d):(e.consume(d),D)}function W(d){return d===47||d===62||ce(d)?g(d):t(d)}function P(d){return d===62?(e.consume(d),G):t(d)}function G(d){return d===null||te(d)?H(d):ce(d)?(e.consume(d),G):t(d)}function H(d){return d===45&&i===2?(e.consume(d),ae):d===60&&i===1?(e.consume(d),ge):d===62&&i===4?(e.consume(d),q):d===63&&i===3?(e.consume(d),y):d===93&&i===5?(e.consume(d),M):te(d)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(k_,$,ne)(d)):d===null||te(d)?(e.exit("htmlFlowData"),ne(d)):(e.consume(d),H)}function ne(d){return e.check(x_,le,$)(d)}function le(d){return e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),re}function re(d){return d===null||te(d)?ne(d):(e.enter("htmlFlowData"),H(d))}function ae(d){return d===45?(e.consume(d),y):H(d)}function ge(d){return d===47?(e.consume(d),l="",Q):H(d)}function Q(d){if(d===62){const k=l.toLowerCase();return kh.includes(k)?(e.consume(d),q):H(d)}return Ze(d)&&l.length<8?(e.consume(d),l+=String.fromCharCode(d),Q):H(d)}function M(d){return d===93?(e.consume(d),y):H(d)}function y(d){return d===62?(e.consume(d),q):d===45&&i===2?(e.consume(d),y):H(d)}function q(d){return d===null||te(d)?(e.exit("htmlFlowData"),$(d)):(e.consume(d),q)}function $(d){return e.exit("htmlFlow"),n(d)}}function __(e,n,t){const r=this;return i;function i(l){return te(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):t(l)}function o(l){return r.parser.lazy[r.now().line]?t(l):n(l)}}function b_(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Bi,n,t)}}const A_={name:"htmlText",tokenize:P_};function P_(e,n,t){const r=this;let i,o,l;return a;function a(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),u}function u(y){return y===33?(e.consume(y),s):y===47?(e.consume(y),I):y===63?(e.consume(y),g):Ze(y)?(e.consume(y),D):t(y)}function s(y){return y===45?(e.consume(y),f):y===91?(e.consume(y),o=0,w):Ze(y)?(e.consume(y),m):t(y)}function f(y){return y===45?(e.consume(y),h):t(y)}function c(y){return y===null?t(y):y===45?(e.consume(y),p):te(y)?(l=c,ge(y)):(e.consume(y),c)}function p(y){return y===45?(e.consume(y),h):c(y)}function h(y){return y===62?ae(y):y===45?p(y):c(y)}function w(y){const q="CDATA[";return y===q.charCodeAt(o++)?(e.consume(y),o===q.length?b:w):t(y)}function b(y){return y===null?t(y):y===93?(e.consume(y),R):te(y)?(l=b,ge(y)):(e.consume(y),b)}function R(y){return y===93?(e.consume(y),v):b(y)}function v(y){return y===62?ae(y):y===93?(e.consume(y),v):b(y)}function m(y){return y===null||y===62?ae(y):te(y)?(l=m,ge(y)):(e.consume(y),m)}function g(y){return y===null?t(y):y===63?(e.consume(y),E):te(y)?(l=g,ge(y)):(e.consume(y),g)}function E(y){return y===62?ae(y):g(y)}function I(y){return Ze(y)?(e.consume(y),S):t(y)}function S(y){return y===45||ln(y)?(e.consume(y),S):T(y)}function T(y){return te(y)?(l=T,ge(y)):ce(y)?(e.consume(y),T):ae(y)}function D(y){return y===45||ln(y)?(e.consume(y),D):y===47||y===62||we(y)?W(y):t(y)}function W(y){return y===47?(e.consume(y),ae):y===58||y===95||Ze(y)?(e.consume(y),P):te(y)?(l=W,ge(y)):ce(y)?(e.consume(y),W):ae(y)}function P(y){return y===45||y===46||y===58||y===95||ln(y)?(e.consume(y),P):G(y)}function G(y){return y===61?(e.consume(y),H):te(y)?(l=G,ge(y)):ce(y)?(e.consume(y),G):W(y)}function H(y){return y===null||y===60||y===61||y===62||y===96?t(y):y===34||y===39?(e.consume(y),i=y,ne):te(y)?(l=H,ge(y)):ce(y)?(e.consume(y),H):(e.consume(y),le)}function ne(y){return y===i?(e.consume(y),i=void 0,re):y===null?t(y):te(y)?(l=ne,ge(y)):(e.consume(y),ne)}function le(y){return y===null||y===34||y===39||y===60||y===61||y===96?t(y):y===47||y===62||we(y)?W(y):(e.consume(y),le)}function re(y){return y===47||y===62||we(y)?W(y):t(y)}function ae(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),n):t(y)}function ge(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),Q}function Q(y){return ce(y)?he(e,M,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):M(y)}function M(y){return e.enter("htmlTextData"),l(y)}}const Oc={name:"labelEnd",resolveAll:M_,resolveTo:j_,tokenize:O_},C_={tokenize:z_},I_={tokenize:R_},T_={tokenize:L_};function M_(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&mn(e,0,e.length,t),e}function j_(e,n){let t=e.length,r=0,i,o,l,a;for(;t--;)if(i=e[t][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=t);const u={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},s={type:"label",start:{...e[o][1].start},end:{...e[l][1].end}},f={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[l-2][1].start}};return a=[["enter",u,n],["enter",s,n]],a=En(a,e.slice(o+1,o+r+3)),a=En(a,[["enter",f,n]]),a=En(a,Nl(n.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),n)),a=En(a,[["exit",f,n],e[l-2],e[l-1],["exit",s,n]]),a=En(a,e.slice(l+1)),a=En(a,[["exit",u,n]]),mn(e,o,e.length,a),e}function O_(e,n,t){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(p){return o?o._inactive?c(p):(l=r.parser.defined.includes(Nn(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),u):t(p)}function u(p){return p===40?e.attempt(C_,f,l?f:c)(p):p===91?e.attempt(I_,f,l?s:c)(p):l?f(p):c(p)}function s(p){return e.attempt(T_,f,c)(p)}function f(p){return n(p)}function c(p){return o._balanced=!0,t(p)}}function z_(e,n,t){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return we(c)?pi(e,o)(c):o(c)}function o(c){return c===41?f(c):vy(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function l(c){return we(c)?pi(e,u)(c):f(c)}function a(c){return t(c)}function u(c){return c===34||c===39||c===40?ky(e,s,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function s(c){return we(c)?pi(e,f)(c):f(c)}function f(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),n):t(c)}}function R_(e,n,t){const r=this;return i;function i(a){return wy.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Nn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(a):t(a)}function l(a){return t(a)}}function L_(e,n,t){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),n):t(o)}}const F_={name:"labelStartImage",resolveAll:Oc.resolveAll,tokenize:N_};function N_(e,n,t){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):t(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):n(a)}}const D_={name:"labelStartLink",resolveAll:Oc.resolveAll,tokenize:$_};function $_(e,n,t){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):n(l)}}const iu={name:"lineEnding",tokenize:B_};function B_(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),he(e,n,"linePrefix")}}const zo={name:"thematicBreak",tokenize:H_};function H_(e,n,t){let r=0,i;return o;function o(s){return e.enter("thematicBreak"),l(s)}function l(s){return i=s,a(s)}function a(s){return s===i?(e.enter("thematicBreakSequence"),u(s)):r>=3&&(s===null||te(s))?(e.exit("thematicBreak"),n(s)):t(s)}function u(s){return s===i?(e.consume(s),r++,u):(e.exit("thematicBreakSequence"),ce(s)?he(e,a,"whitespace")(s):a(s))}}const tn={continuation:{tokenize:W_},exit:G_,name:"list",tokenize:V_},U_={partial:!0,tokenize:Y_},q_={partial:!0,tokenize:Q_};function V_(e,n,t){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(h){const w=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:hs(h)){if(r.containerState.type||(r.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(zo,t,s)(h):s(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(h)}return t(h)}function u(h){return hs(h)&&++l<10?(e.consume(h),u):(!r.interrupt||l<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),s(h)):t(h)}function s(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(Bi,r.interrupt?t:f,e.attempt(U_,p,c))}function f(h){return r.containerState.initialBlankLine=!0,o++,p(h)}function c(h){return ce(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),p):t(h)}function p(h){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(h)}}function W_(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Bi,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,he(e,n,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!ce(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(q_,n,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,he(e,e.attempt(tn,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Q_(e,n,t){const r=this;return he(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?n(o):t(o)}}function G_(e){e.exit(this.containerState.type)}function Y_(e,n,t){const r=this;return he(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const l=r.events[r.events.length-1];return!ce(o)&&l&&l[1].type==="listItemPrefixWhitespace"?n(o):t(o)}}const xh={name:"setextUnderline",resolveTo:X_,tokenize:J_};function X_(e,n){let t=e.length,r,i,o;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!o&&e[t][1].type==="definition"&&(o=t);const l={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,n]),e.splice(o+1,0,["exit",e[r][1],n]),e[r][1].end={...e[o][1].end}):e[r][1]=l,e.push(["exit",l,n]),e}function J_(e,n,t){const r=this;let i;return o;function o(s){let f=r.events.length,c;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){c=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=s,l(s)):t(s)}function l(s){return e.enter("setextHeadingLineSequence"),a(s)}function a(s){return s===i?(e.consume(s),a):(e.exit("setextHeadingLineSequence"),ce(s)?he(e,u,"lineSuffix")(s):u(s))}function u(s){return s===null||te(s)?(e.exit("setextHeadingLine"),n(s)):t(s)}}const Z_={tokenize:lb,partial:!0};function K_(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:rb,continuation:{tokenize:ib},exit:ob}},text:{91:{name:"gfmFootnoteCall",tokenize:tb},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:eb,resolveTo:nb}}}}function eb(e,n,t){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l;for(;i--;){const u=r.events[i][1];if(u.type==="labelImage"){l=u;break}if(u.type==="gfmFootnoteCall"||u.type==="labelLink"||u.type==="label"||u.type==="image"||u.type==="link")break}return a;function a(u){if(!l||!l._balanced)return t(u);const s=Nn(r.sliceSerialize({start:l.end,end:r.now()}));return s.codePointAt(0)!==94||!o.includes(s.slice(1))?t(u):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),n(u))}}function nb(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[e[t+1],e[t+2],["enter",r,n],e[t+3],e[t+4],["enter",i,n],["exit",i,n],["enter",o,n],["enter",l,n],["exit",l,n],["exit",o,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(t,e.length-t+1,...a),e}function tb(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o=0,l;return a;function a(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),u}function u(c){return c!==94?t(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",s)}function s(c){if(o>999||c===93&&!l||c===null||c===91||we(c))return t(c);if(c===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return i.includes(Nn(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(c)}return we(c)||(l=!0),o++,e.consume(c),c===92?f:s}function f(c){return c===91||c===92||c===93?(e.consume(c),o++,s):s(c)}}function rb(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o,l=0,a;return u;function u(w){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(w),e.exit("gfmFootnoteDefinitionLabelMarker"),s}function s(w){return w===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(w),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):t(w)}function f(w){if(l>999||w===93&&!a||w===null||w===91||we(w))return t(w);if(w===93){e.exit("chunkString");const b=e.exit("gfmFootnoteDefinitionLabelString");return o=Nn(r.sliceSerialize(b)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(w),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return we(w)||(a=!0),l++,e.consume(w),w===92?c:f}function c(w){return w===91||w===92||w===93?(e.consume(w),l++,f):f(w)}function p(w){return w===58?(e.enter("definitionMarker"),e.consume(w),e.exit("definitionMarker"),i.includes(o)||i.push(o),he(e,h,"gfmFootnoteDefinitionWhitespace")):t(w)}function h(w){return n(w)}}function ib(e,n,t){return e.check(Bi,n,e.attempt(Z_,n,t))}function ob(e){e.exit("gfmFootnoteDefinition")}function lb(e,n,t){const r=this;return he(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="gfmFootnoteDefinitionIndent"&&l[2].sliceSerialize(l[1],!0).length===4?n(o):t(o)}}function ab(e){let t=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:o,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(l,a){let u=-1;for(;++u<l.length;)if(l[u][0]==="enter"&&l[u][1].type==="strikethroughSequenceTemporary"&&l[u][1]._close){let s=u;for(;s--;)if(l[s][0]==="exit"&&l[s][1].type==="strikethroughSequenceTemporary"&&l[s][1]._open&&l[u][1].end.offset-l[u][1].start.offset===l[s][1].end.offset-l[s][1].start.offset){l[u][1].type="strikethroughSequence",l[s][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},l[s][1].start),end:Object.assign({},l[u][1].end)},c={type:"strikethroughText",start:Object.assign({},l[s][1].end),end:Object.assign({},l[u][1].start)},p=[["enter",f,a],["enter",l[s][1],a],["exit",l[s][1],a],["enter",c,a]],h=a.parser.constructs.insideSpan.null;h&&mn(p,p.length,0,Nl(h,l.slice(s+1,u),a)),mn(p,p.length,0,[["exit",c,a],["enter",l[u][1],a],["exit",l[u][1],a],["exit",f,a]]),mn(l,s-1,u-s+3,p),u=s+p.length-2;break}}for(u=-1;++u<l.length;)l[u][1].type==="strikethroughSequenceTemporary"&&(l[u][1].type="data");return l}function o(l,a,u){const s=this.previous,f=this.events;let c=0;return p;function p(w){return s===126&&f[f.length-1][1].type!=="characterEscape"?u(w):(l.enter("strikethroughSequenceTemporary"),h(w))}function h(w){const b=Tr(s);if(w===126)return c>1?u(w):(l.consume(w),c++,h);if(c<2&&!t)return u(w);const R=l.exit("strikethroughSequenceTemporary"),v=Tr(w);return R._open=!v||v===2&&!!b,R._close=!b||b===2&&!!v,a(w)}}}class ub{constructor(){this.map=[]}add(n,t,r){sb(this,n,t,r)}consume(n){if(this.map.sort(function(o,l){return o[0]-l[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const o of i)n.push(o);i=r.pop()}this.map.length=0}}function sb(e,n,t,r){let i=0;if(!(t===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===n){e.map[i][1]+=t,e.map[i][2].push(...r);return}i+=1}e.map.push([n,t,r])}}function cb(e,n){let t=!1;const r=[];for(;n<e.length;){const i=e[n];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const o=r.length-1;r[o]=r[o]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return r}function fb(){return{flow:{null:{name:"table",tokenize:pb,resolveAll:hb}}}}function pb(e,n,t){const r=this;let i=0,o=0,l;return a;function a(P){let G=r.events.length-1;for(;G>-1;){const le=r.events[G][1].type;if(le==="lineEnding"||le==="linePrefix")G--;else break}const H=G>-1?r.events[G][1].type:null,ne=H==="tableHead"||H==="tableRow"?S:u;return ne===S&&r.parser.lazy[r.now().line]?t(P):ne(P)}function u(P){return e.enter("tableHead"),e.enter("tableRow"),s(P)}function s(P){return P===124||(l=!0,o+=1),f(P)}function f(P){return P===null?t(P):te(P)?o>1?(o=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),h):t(P):ce(P)?he(e,f,"whitespace")(P):(o+=1,l&&(l=!1,i+=1),P===124?(e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),l=!0,f):(e.enter("data"),c(P)))}function c(P){return P===null||P===124||we(P)?(e.exit("data"),f(P)):(e.consume(P),P===92?p:c)}function p(P){return P===92||P===124?(e.consume(P),c):c(P)}function h(P){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(P):(e.enter("tableDelimiterRow"),l=!1,ce(P)?he(e,w,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):w(P))}function w(P){return P===45||P===58?R(P):P===124?(l=!0,e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),b):I(P)}function b(P){return ce(P)?he(e,R,"whitespace")(P):R(P)}function R(P){return P===58?(o+=1,l=!0,e.enter("tableDelimiterMarker"),e.consume(P),e.exit("tableDelimiterMarker"),v):P===45?(o+=1,v(P)):P===null||te(P)?E(P):I(P)}function v(P){return P===45?(e.enter("tableDelimiterFiller"),m(P)):I(P)}function m(P){return P===45?(e.consume(P),m):P===58?(l=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(P),e.exit("tableDelimiterMarker"),g):(e.exit("tableDelimiterFiller"),g(P))}function g(P){return ce(P)?he(e,E,"whitespace")(P):E(P)}function E(P){return P===124?w(P):P===null||te(P)?!l||i!==o?I(P):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(P)):I(P)}function I(P){return t(P)}function S(P){return e.enter("tableRow"),T(P)}function T(P){return P===124?(e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),T):P===null||te(P)?(e.exit("tableRow"),n(P)):ce(P)?he(e,T,"whitespace")(P):(e.enter("data"),D(P))}function D(P){return P===null||P===124||we(P)?(e.exit("data"),T(P)):(e.consume(P),P===92?W:D)}function W(P){return P===92||P===124?(e.consume(P),D):D(P)}}function hb(e,n){let t=-1,r=!0,i=0,o=[0,0,0,0],l=[0,0,0,0],a=!1,u=0,s,f,c;const p=new ub;for(;++t<e.length;){const h=e[t],w=h[1];h[0]==="enter"?w.type==="tableHead"?(a=!1,u!==0&&(Sh(p,n,u,s,f),f=void 0,u=0),s={type:"table",start:Object.assign({},w.start),end:Object.assign({},w.end)},p.add(t,0,[["enter",s,n]])):w.type==="tableRow"||w.type==="tableDelimiterRow"?(r=!0,c=void 0,o=[0,0,0,0],l=[0,t+1,0,0],a&&(a=!1,f={type:"tableBody",start:Object.assign({},w.start),end:Object.assign({},w.end)},p.add(t,0,[["enter",f,n]])),i=w.type==="tableDelimiterRow"?2:f?3:1):i&&(w.type==="data"||w.type==="tableDelimiterMarker"||w.type==="tableDelimiterFiller")?(r=!1,l[2]===0&&(o[1]!==0&&(l[0]=l[1],c=uo(p,n,o,i,void 0,c),o=[0,0,0,0]),l[2]=t)):w.type==="tableCellDivider"&&(r?r=!1:(o[1]!==0&&(l[0]=l[1],c=uo(p,n,o,i,void 0,c)),o=l,l=[o[1],t,0,0])):w.type==="tableHead"?(a=!0,u=t):w.type==="tableRow"||w.type==="tableDelimiterRow"?(u=t,o[1]!==0?(l[0]=l[1],c=uo(p,n,o,i,t,c)):l[1]!==0&&(c=uo(p,n,l,i,t,c)),i=0):i&&(w.type==="data"||w.type==="tableDelimiterMarker"||w.type==="tableDelimiterFiller")&&(l[3]=t)}for(u!==0&&Sh(p,n,u,s,f),p.consume(n.events),t=-1;++t<n.events.length;){const h=n.events[t];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=cb(n.events,t))}return e}function uo(e,n,t,r,i,o){const l=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",a="tableContent";t[0]!==0&&(o.end=Object.assign({},er(n.events,t[0])),e.add(t[0],0,[["exit",o,n]]));const u=er(n.events,t[1]);if(o={type:l,start:Object.assign({},u),end:Object.assign({},u)},e.add(t[1],0,[["enter",o,n]]),t[2]!==0){const s=er(n.events,t[2]),f=er(n.events,t[3]),c={type:a,start:Object.assign({},s),end:Object.assign({},f)};if(e.add(t[2],0,[["enter",c,n]]),r!==2){const p=n.events[t[2]],h=n.events[t[3]];if(p[1].end=Object.assign({},h[1].end),p[1].type="chunkText",p[1].contentType="text",t[3]>t[2]+1){const w=t[2]+1,b=t[3]-t[2]-1;e.add(w,b,[])}}e.add(t[3]+1,0,[["exit",c,n]])}return i!==void 0&&(o.end=Object.assign({},er(n.events,i)),e.add(i,0,[["exit",o,n]]),o=void 0),o}function Sh(e,n,t,r,i){const o=[],l=er(n.events,t);i&&(i.end=Object.assign({},l),o.push(["exit",i,n])),r.end=Object.assign({},l),o.push(["exit",r,n]),e.add(t+1,0,o)}function er(e,n){const t=e[n],r=t[0]==="enter"?"start":"end";return t[1][r]}const db={name:"tasklistCheck",tokenize:gb};function mb(){return{text:{91:db}}}function gb(e,n,t){const r=this;return i;function i(u){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(u):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),o)}function o(u){return we(u)?(e.enter("taskListCheckValueUnchecked"),e.consume(u),e.exit("taskListCheckValueUnchecked"),l):u===88||u===120?(e.enter("taskListCheckValueChecked"),e.consume(u),e.exit("taskListCheckValueChecked"),l):t(u)}function l(u){return u===93?(e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):t(u)}function a(u){return te(u)?n(u):ce(u)?e.check({tokenize:yb},n,t)(u):t(u)}}function yb(e,n,t){return he(e,r,"whitespace");function r(i){return i===null?t(i):n(i)}}function vb(e){return oy([CE(),K_(),ab(e),fb(),mb()])}const wb={};function xy(e){const n=this,t=e||wb,r=n.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),l=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(vb(t)),o.push(SE()),l.push(EE(t))}function kb(e){const n=JSON.parse(JSON.stringify(e)),t=ey().use(xy).use(()=>r=>(Wn(r,"listItem",i=>{var o,l,a;if((o=i==null?void 0:i.data)!=null&&o.diff){const u=((l=i==null?void 0:i.data)==null?void 0:l.diff)==="ins"?"{++listItem++}":"{--listItem--}";i.children||(i.children=[]);const s=(a=i.children)==null?void 0:a[0];(s==null?void 0:s.type)==="paragraph"?s.children&&s.children.unshift({type:"text",value:u}):i.children.unshift({type:"paragraph",children:[{type:"text",value:u}]})}}),r)).use(l2,{handlers:{ins:(r,i,o,l)=>`{++++
${(r.children||[]).map(u=>o.handle(u,r,o,l)).join("")}
++++}`,del:(r,i,o,l)=>`{----
${(r.children||[]).map(u=>o.handle(u,r,o,l)).join("")}
----}`,inlineIns:(r,i,o,l)=>`{++++${(r.children||[]).map(u=>o.handle(u,r,o,l)).join("")}++++}`,inlineDel:(r,i,o,l)=>`{----${(r.children||[]).map(u=>o.handle(u,r,o,l)).join("")}----}`}});return t.stringify(t.runSync(n))}function xb(e){const n=JSON.parse(JSON.stringify(e));Sy(n);const t=Eb(n);return _b(t)}function Sy(e){if(Sb(e),e.children&&e.children.length>0)for(const n of e.children)Sy(n)}function Sb(e){switch(e.data||(e.data={}),e.data.hProperties||(e.data.hProperties={}),e.data&&e.data.diff&&(e.data.hProperties["data-diff"]=e.data.diff),e.type){case"ins":case"del":e.data.hProperties.class="diff-block";break;case"inlineIns":case"inlineDel":e.data.hProperties.class="diff-inline";break;case"heading":e.data.hProperties.class=`heading-${e.depth}`;break;case"list":{e.data.hProperties.class=e.ordered?"ordered-list":"unordered-list";let n=1;e.children.forEach(t=>{t.type==="listItem"&&(t.data||(t.data={}),t.data.hProperties||(t.data.hProperties={}),t.data.hProperties.value=n,t.data.diff!=="del"&&n++)});break}case"listItem":e.data.hProperties.class="list-item",e.data&&e.data.diff&&(e.data.hProperties.class+=` list-item-${e.data.diff}`);break;case"paragraph":e.data.hProperties.class="paragraph";break;case"text":e.data.hProperties.class="text";break;case"strong":e.data.hProperties.class="strong";break;case"emphasis":e.data.hProperties.class="emphasis";break;case"delete":e.data.hProperties.class="delete";break;case"code":e.data.hProperties.class="code",e.lang&&(e.data.hProperties["data-language"]=e.lang);break;case"link":e.data.hProperties.href=e.url,e.data.hProperties.title=e.title;break;case"image":e.data.hProperties.src=e.url,e.data.hProperties.alt=e.alt,e.data.hProperties.title=e.title;break;case"table":e.data.hProperties.class="markdown-table";break;case"tableRow":e.data.hProperties.class="table-row";break;case"tableCell":e.data.hProperties.class="table-cell",e.isHeader&&(e.data.hProperties.class+=" table-header-cell"),e.align&&(e.data.hProperties.class+=` align-${e.align}`);break}}function Eb(e){let n="";if(e.type==="root"){n='<div class="markdown-content">';for(const t of e.children)n+=ws(t);n+="</div>"}else n=ws(e);return n}function _b(e){const n=`
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
  `;return e.includes("<head>")?e.replace("<head>",`<head>${n}`):e.includes("<html>")?e.replace("<html>",`<html><head>${n}</head>`):`<html><head>${n}</head><body>${e}</body></html>`}function ws(e){var i;if(!e)return"";const n=((i=e.data)==null?void 0:i.hProperties)||{},t=Object.entries(n).map(([o,l])=>`${o}="${l}"`).join(" ");let r="";switch(e.type){case"ins":r=`<ins ${t}>${He(e)}</ins>`;break;case"del":r=`<del ${t}>${He(e)}</del>`;break;case"inlineIns":r=`<ins ${t}>${He(e)}</ins>`;break;case"inlineDel":r=`<del ${t}>${He(e)}</del>`;break;case"heading":r=`<h${e.depth} ${t}>${He(e)}</h${e.depth}>`;break;case"paragraph":r=`<p ${t}>${He(e)}</p>`;break;case"text":r=so(e.value);break;case"strong":r=`<strong ${t}>${He(e)}</strong>`;break;case"emphasis":r=`<em ${t}>${He(e)}</em>`;break;case"delete":r=`<del ${t}>${He(e)}</del>`;break;case"link":r=`<a ${t}>${He(e)}</a>`;break;case"image":r=`<img ${t} />`;break;case"list":{const o=e.ordered?"ol":"ul";r=`<${o} ${t}>${He(e)}</${o}>`;break}case"listItem":r=`<li ${t}>${He(e)}</li>`;break;case"code":e.lang?r=`<pre ${t}><code>${so(e.value)}</code></pre>`:r=`<code ${t}>${so(e.value)}</code>`;break;case"inlineCode":r=`<code ${t}>${so(e.value)}</code>`;break;case"blockquote":r=`<blockquote ${t}>${He(e)}</blockquote>`;break;case"thematicBreak":r=`<hr ${t} />`;break;case"html":r=`<div ${t}>${e.value}</div>`;break;case"table":r=`<table ${t}>${He(e)}</table>`;break;case"tableRow":r=`<tr ${t}>${He(e)}</tr>`;break;case"tableCell":{const o=e.isHeader?"th":"td";r=`<${o} ${t}>${He(e)}</${o}>`;break}default:console.warn(`[markdown-ast-diff] renderAstToHtml: unhandled node type ${e.type}`),r=He(e)}return r}function He(e){return!e.children||e.children.length===0?"":e.children.map(n=>ws(n)).join("")}function so(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const bb=({testcases:e,selectedTestcase:n,onTestcaseChange:t})=>J.jsxs("div",{className:"controls",children:[J.jsx("label",{children:"选择测试用例："}),J.jsx("div",{className:"testcase-buttons",children:e.map(r=>J.jsx("button",{className:`testcase-button ${n===r.name?"selected":""}`,onClick:()=>t(r.name),children:r.name},r.name))})]}),zc=({markdownText:e,astJson:n})=>{const t=()=>{e&&navigator.clipboard.writeText(e).then(()=>{alert("Markdown 文本已复制到剪贴板")}).catch(i=>{console.error("复制失败:",i),alert("复制失败，请手动复制文本")})},r=()=>{if(!n)return;const i=JSON.stringify(n,null,2);navigator.clipboard.writeText(i).then(()=>{alert("AST JSON 已复制到剪贴板")}).catch(o=>{console.error("复制失败:",o),alert("复制失败，请手动复制JSON")})};return J.jsx("div",{children:J.jsxs("div",{className:"markdown-actions",children:[e&&J.jsx("button",{className:"action-button",onClick:t,title:"复制 Markdown 文本",children:J.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[J.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),J.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),n&&J.jsx("button",{className:"action-button",onClick:r,title:"复制 AST JSON",children:J.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[J.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),J.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}),J.jsx("path",{d:"M13 13h5"}),J.jsx("path",{d:"M13 17h5"}),J.jsx("path",{d:"M13 15h3"})]})})]})})},Ab={tokenize:Pb};function Pb(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),he(e,n,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const u=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=u),t=u,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return te(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const Cb={tokenize:Ib},Eh={tokenize:Tb};function Ib(e){const n=this,t=[];let r=0,i,o,l;return a;function a(g){if(r<t.length){const E=t[r];return n.containerState=E[1],e.attempt(E[0].continuation,u,s)(g)}return s(g)}function u(g){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&m();const E=n.events.length;let I=E,S;for(;I--;)if(n.events[I][0]==="exit"&&n.events[I][1].type==="chunkFlow"){S=n.events[I][1].end;break}v(r);let T=E;for(;T<n.events.length;)n.events[T][1].end={...S},T++;return mn(n.events,I+1,0,n.events.slice(E)),n.events.length=T,s(g)}return a(g)}function s(g){if(r===t.length){if(!i)return p(g);if(i.currentConstruct&&i.currentConstruct.concrete)return w(g);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Eh,f,c)(g)}function f(g){return i&&m(),v(r),p(g)}function c(g){return n.parser.lazy[n.now().line]=r!==t.length,l=n.now().offset,w(g)}function p(g){return n.containerState={},e.attempt(Eh,h,w)(g)}function h(g){return r++,t.push([n.currentConstruct,n.containerState]),p(g)}function w(g){if(g===null){i&&m(),v(0),e.consume(g);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),b(g)}function b(g){if(g===null){R(e.exit("chunkFlow"),!0),v(0),e.consume(g);return}return te(g)?(e.consume(g),R(e.exit("chunkFlow")),r=0,n.interrupt=void 0,a):(e.consume(g),b)}function R(g,E){const I=n.sliceStream(g);if(E&&I.push(null),g.previous=o,o&&(o.next=g),o=g,i.defineSkip(g.start),i.write(I),n.parser.lazy[g.start.line]){let S=i.events.length;for(;S--;)if(i.events[S][1].start.offset<l&&(!i.events[S][1].end||i.events[S][1].end.offset>l))return;const T=n.events.length;let D=T,W,P;for(;D--;)if(n.events[D][0]==="exit"&&n.events[D][1].type==="chunkFlow"){if(W){P=n.events[D][1].end;break}W=!0}for(v(r),S=T;S<n.events.length;)n.events[S][1].end={...P},S++;mn(n.events,D+1,0,n.events.slice(T)),n.events.length=S}}function v(g){let E=t.length;for(;E-- >g;){const I=t[E];n.containerState=I[1],I[0].exit.call(n,e)}t.length=g}function m(){i.write([null]),o=void 0,i=void 0,n.containerState._closeFlow=void 0}}function Tb(e,n,t){return he(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const Mb={tokenize:jb};function jb(e){const n=this,t=e.attempt(Bi,r,e.attempt(this.parser.constructs.flowInitial,i,he(e,e.attempt(this.parser.constructs.flow,i,e.attempt(i_,i)),"linePrefix")));return t;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const Ob={resolveAll:_y()},zb=Ey("string"),Rb=Ey("text");function Ey(e){return{resolveAll:_y(e==="text"?Lb:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],o=t.attempt(i,l,a);return l;function l(f){return s(f)?o(f):a(f)}function a(f){if(f===null){t.consume(f);return}return t.enter("data"),t.consume(f),u}function u(f){return s(f)?(t.exit("data"),o(f)):(t.consume(f),u)}function s(f){if(f===null)return!0;const c=i[f];let p=-1;if(c)for(;++p<c.length;){const h=c[p];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function _y(e){return n;function n(t,r){let i=-1,o;for(;++i<=t.length;)o===void 0?t[i]&&t[i][1].type==="data"&&(o=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==o+2&&(t[o][1].end=t[i-1][1].end,t.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(t,r):t}}function Lb(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let o=i.length,l=-1,a=0,u;for(;o--;){const s=i[o];if(typeof s=="string"){for(l=s.length;s.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(s===-2)u=!0,a++;else if(s!==-1){o++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(a=0),a){const s={type:t===e.length||u||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:r.start._bufferIndex+l,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...s.start},r.start.offset===r.end.offset?Object.assign(r,s):(e.splice(t,0,["enter",s,n],["exit",s,n]),t+=2)}t++}return e}const Fb={42:tn,43:tn,45:tn,48:tn,49:tn,50:tn,51:tn,52:tn,53:tn,54:tn,55:tn,56:tn,57:tn,62:dy},Nb={91:s_},Db={[-2]:ru,[-1]:ru,32:ru},$b={35:m_,42:zo,45:[xh,zo],60:w_,61:xh,95:zo,96:wh,126:wh},Bb={38:gy,92:my},Hb={[-5]:iu,[-4]:iu,[-3]:iu,33:F_,38:gy,42:vs,60:[DE,A_],91:D_,92:[h_,my],93:Oc,95:vs,96:ZE},Ub={null:[vs,Ob]},qb={null:[42,95]},Vb={null:[]},Wb=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:qb,contentInitial:Nb,disable:Vb,document:Fb,flow:$b,flowInitial:Db,insideSpan:Ub,string:Bb,text:Hb},Symbol.toStringTag,{value:"Module"}));function Qb(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},o=[];let l=[],a=[];const u={attempt:T(I),check:T(S),consume:m,enter:g,exit:E,interrupt:T(S,{interrupt:!0})},s={code:null,containerState:{},defineSkip:b,events:[],now:w,parser:e,previous:null,sliceSerialize:p,sliceStream:h,write:c};let f=n.tokenize.call(s,u);return n.resolveAll&&o.push(n),s;function c(G){return l=En(l,G),R(),l[l.length-1]!==null?[]:(D(n,0),s.events=Nl(o,s.events,s),s.events)}function p(G,H){return Yb(h(G),H)}function h(G){return Gb(l,G)}function w(){const{_bufferIndex:G,_index:H,line:ne,column:le,offset:re}=r;return{_bufferIndex:G,_index:H,line:ne,column:le,offset:re}}function b(G){i[G.line]=G.column,P()}function R(){let G;for(;r._index<l.length;){const H=l[r._index];if(typeof H=="string")for(G=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===G&&r._bufferIndex<H.length;)v(H.charCodeAt(r._bufferIndex));else v(H)}}function v(G){f=f(G)}function m(G){te(G)?(r.line++,r.column=1,r.offset+=G===-3?2:1,P()):G!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=G}function g(G,H){const ne=H||{};return ne.type=G,ne.start=w(),s.events.push(["enter",ne,s]),a.push(ne),ne}function E(G){const H=a.pop();return H.end=w(),s.events.push(["exit",H,s]),H}function I(G,H){D(G,H.from)}function S(G,H){H.restore()}function T(G,H){return ne;function ne(le,re,ae){let ge,Q,M,y;return Array.isArray(le)?$(le):"tokenize"in le?$([le]):q(le);function q(_){return L;function L(z){const F=z!==null&&_[z],U=z!==null&&_.null,K=[...Array.isArray(F)?F:F?[F]:[],...Array.isArray(U)?U:U?[U]:[]];return $(K)(z)}}function $(_){return ge=_,Q=0,_.length===0?ae:d(_[Q])}function d(_){return L;function L(z){return y=W(),M=_,_.partial||(s.currentConstruct=_),_.name&&s.parser.constructs.disable.null.includes(_.name)?x():_.tokenize.call(H?Object.assign(Object.create(s),H):s,u,k,x)(z)}}function k(_){return G(M,y),re}function x(_){return y.restore(),++Q<ge.length?d(ge[Q]):ae}}}function D(G,H){G.resolveAll&&!o.includes(G)&&o.push(G),G.resolve&&mn(s.events,H,s.events.length-H,G.resolve(s.events.slice(H),s)),G.resolveTo&&(s.events=G.resolveTo(s.events,s))}function W(){const G=w(),H=s.previous,ne=s.currentConstruct,le=s.events.length,re=Array.from(a);return{from:le,restore:ae};function ae(){r=G,s.previous=H,s.currentConstruct=ne,s.events.length=le,a=re,P()}}function P(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Gb(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,o=n.end._bufferIndex;let l;if(t===i)l=[e[t].slice(r,o)];else{if(l=e.slice(t,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function Yb(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const o=e[t];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=n?" ":"	";break}case-1:{if(!n&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}function Xb(e){const r={constructs:oy([Wb,...(e||{}).extensions||[]]),content:i(Ab),defined:[],document:i(Cb),flow:i(Mb),lazy:{},string:i(zb),text:i(Rb)};return r;function i(o){return l;function l(a){return Qb(r,o,a)}}}function Jb(e){for(;!yy(e););return e}const _h=/[\0\t\n\r]/g;function Zb(){let e=1,n="",t=!0,r;return i;function i(o,l,a){const u=[];let s,f,c,p,h;for(o=n+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),c=0,n="",t&&(o.charCodeAt(0)===65279&&c++,t=void 0);c<o.length;){if(_h.lastIndex=c,s=_h.exec(o),p=s&&s.index!==void 0?s.index:o.length,h=o.charCodeAt(p),!s){n=o.slice(c);break}if(h===10&&c===p&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),c<p&&(u.push(o.slice(c,p)),e+=p-c),h){case 0:{u.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,u.push(-2);e++<f;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}c=p+1}return a&&(r&&u.push(-5),n&&u.push(n),u.push(null)),u}}const by={}.hasOwnProperty;function Kb(e,n,t){return typeof n!="string"&&(t=n,n=void 0),e3(t)(Jb(Xb(t).document().write(Zb()(e,n,!0))))}function e3(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(N),autolinkProtocol:W,autolinkEmail:W,atxHeading:o($e),blockQuote:o(U),characterEscape:W,characterReference:W,codeFenced:o(K),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(K,l),codeText:o(oe,l),codeTextData:W,data:W,codeFlowValue:W,definition:o(de),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(Pe),hardBreakEscape:o(fn),hardBreakTrailing:o(fn),htmlFlow:o(wn,l),htmlFlowData:W,htmlText:o(wn,l),htmlTextData:W,image:o(Be),label:l,link:o(N),listItem:o(Xe),listItemValue:p,listOrdered:o(Gn,c),listUnordered:o(Gn),paragraph:o(Yn),reference:d,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o($e),strong:o(In),thematicBreak:o(j)},exit:{atxHeading:u(),atxHeadingSequence:I,autolink:u(),autolinkEmail:F,autolinkProtocol:z,blockQuote:u(),characterEscapeValue:P,characterReferenceMarkerHexadecimal:x,characterReferenceMarkerNumeric:x,characterReferenceValue:_,characterReference:L,codeFenced:u(R),codeFencedFence:b,codeFencedFenceInfo:h,codeFencedFenceMeta:w,codeFlowValue:P,codeIndented:u(v),codeText:u(re),codeTextData:P,data:P,definition:u(),definitionDestinationString:E,definitionLabelString:m,definitionTitleString:g,emphasis:u(),hardBreakEscape:u(H),hardBreakTrailing:u(H),htmlFlow:u(ne),htmlFlowData:P,htmlText:u(le),htmlTextData:P,image:u(ge),label:M,labelText:Q,lineEnding:G,link:u(ae),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:k,resourceDestinationString:y,resourceTitleString:q,resource:$,setextHeading:u(D),setextHeadingLineSequence:T,setextHeadingText:S,strong:u(),thematicBreak:u()}};Ay(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(A){let O={type:"root",children:[]};const B={stack:[O],tokenStack:[],config:n,enter:a,exit:s,buffer:l,resume:f,data:t},Y=[];let X=-1;for(;++X<A.length;)if(A[X][1].type==="listOrdered"||A[X][1].type==="listUnordered")if(A[X][0]==="enter")Y.push(X);else{const ie=Y.pop();X=i(A,ie,X)}for(X=-1;++X<A.length;){const ie=n[A[X][0]];by.call(ie,A[X][1].type)&&ie[A[X][1].type].call(Object.assign({sliceSerialize:A[X][2].sliceSerialize},B),A[X][1])}if(B.tokenStack.length>0){const ie=B.tokenStack[B.tokenStack.length-1];(ie[1]||bh).call(B,void 0,ie[0])}for(O.position={start:ct(A.length>0?A[0][1].start:{line:1,column:1,offset:0}),end:ct(A.length>0?A[A.length-2][1].end:{line:1,column:1,offset:0})},X=-1;++X<n.transforms.length;)O=n.transforms[X](O)||O;return O}function i(A,O,B){let Y=O-1,X=-1,ie=!1,ue,ve,Ie,Tn;for(;++Y<=B;){const Me=A[Y];switch(Me[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Me[0]==="enter"?X++:X--,Tn=void 0;break}case"lineEndingBlank":{Me[0]==="enter"&&(ue&&!Tn&&!X&&!Ie&&(Ie=Y),Tn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Tn=void 0}if(!X&&Me[0]==="enter"&&Me[1].type==="listItemPrefix"||X===-1&&Me[0]==="exit"&&(Me[1].type==="listUnordered"||Me[1].type==="listOrdered")){if(ue){let kn=Y;for(ve=void 0;kn--;){const Oe=A[kn];if(Oe[1].type==="lineEnding"||Oe[1].type==="lineEndingBlank"){if(Oe[0]==="exit")continue;ve&&(A[ve][1].type="lineEndingBlank",ie=!0),Oe[1].type="lineEnding",ve=kn}else if(!(Oe[1].type==="linePrefix"||Oe[1].type==="blockQuotePrefix"||Oe[1].type==="blockQuotePrefixWhitespace"||Oe[1].type==="blockQuoteMarker"||Oe[1].type==="listItemIndent"))break}Ie&&(!ve||Ie<ve)&&(ue._spread=!0),ue.end=Object.assign({},ve?A[ve][1].start:Me[1].end),A.splice(ve||Y,0,["exit",ue,Me[2]]),Y++,B++}if(Me[1].type==="listItemPrefix"){const kn={type:"listItem",_spread:!1,start:Object.assign({},Me[1].start),end:void 0};ue=kn,A.splice(Y,0,["enter",kn,Me[2]]),Y++,B++,Ie=void 0,Tn=!0}}}return A[O][1]._spread=ie,B}function o(A,O){return B;function B(Y){a.call(this,A(Y),Y),O&&O.call(this,Y)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(A,O,B){this.stack[this.stack.length-1].children.push(A),this.stack.push(A),this.tokenStack.push([O,B||void 0]),A.position={start:ct(O.start),end:void 0}}function u(A){return O;function O(B){A&&A.call(this,B),s.call(this,B)}}function s(A,O){const B=this.stack.pop(),Y=this.tokenStack.pop();if(Y)Y[0].type!==A.type&&(O?O.call(this,A,Y[0]):(Y[1]||bh).call(this,A,Y[0]));else throw new Error("Cannot close `"+A.type+"` ("+fi({start:A.start,end:A.end})+"): it’s not open");B.position.end=ct(A.end)}function f(){return Pc(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function p(A){if(this.data.expectingFirstListItemValue){const O=this.stack[this.stack.length-2];O.start=Number.parseInt(this.sliceSerialize(A),10),this.data.expectingFirstListItemValue=void 0}}function h(){const A=this.resume(),O=this.stack[this.stack.length-1];O.lang=A}function w(){const A=this.resume(),O=this.stack[this.stack.length-1];O.meta=A}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function R(){const A=this.resume(),O=this.stack[this.stack.length-1];O.value=A.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function v(){const A=this.resume(),O=this.stack[this.stack.length-1];O.value=A.replace(/(\r?\n|\r)$/g,"")}function m(A){const O=this.resume(),B=this.stack[this.stack.length-1];B.label=O,B.identifier=Nn(this.sliceSerialize(A)).toLowerCase()}function g(){const A=this.resume(),O=this.stack[this.stack.length-1];O.title=A}function E(){const A=this.resume(),O=this.stack[this.stack.length-1];O.url=A}function I(A){const O=this.stack[this.stack.length-1];if(!O.depth){const B=this.sliceSerialize(A).length;O.depth=B}}function S(){this.data.setextHeadingSlurpLineEnding=!0}function T(A){const O=this.stack[this.stack.length-1];O.depth=this.sliceSerialize(A).codePointAt(0)===61?1:2}function D(){this.data.setextHeadingSlurpLineEnding=void 0}function W(A){const B=this.stack[this.stack.length-1].children;let Y=B[B.length-1];(!Y||Y.type!=="text")&&(Y=C(),Y.position={start:ct(A.start),end:void 0},B.push(Y)),this.stack.push(Y)}function P(A){const O=this.stack.pop();O.value+=this.sliceSerialize(A),O.position.end=ct(A.end)}function G(A){const O=this.stack[this.stack.length-1];if(this.data.atHardBreak){const B=O.children[O.children.length-1];B.position.end=ct(A.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(O.type)&&(W.call(this,A),P.call(this,A))}function H(){this.data.atHardBreak=!0}function ne(){const A=this.resume(),O=this.stack[this.stack.length-1];O.value=A}function le(){const A=this.resume(),O=this.stack[this.stack.length-1];O.value=A}function re(){const A=this.resume(),O=this.stack[this.stack.length-1];O.value=A}function ae(){const A=this.stack[this.stack.length-1];if(this.data.inReference){const O=this.data.referenceType||"shortcut";A.type+="Reference",A.referenceType=O,delete A.url,delete A.title}else delete A.identifier,delete A.label;this.data.referenceType=void 0}function ge(){const A=this.stack[this.stack.length-1];if(this.data.inReference){const O=this.data.referenceType||"shortcut";A.type+="Reference",A.referenceType=O,delete A.url,delete A.title}else delete A.identifier,delete A.label;this.data.referenceType=void 0}function Q(A){const O=this.sliceSerialize(A),B=this.stack[this.stack.length-2];B.label=Zg(O),B.identifier=Nn(O).toLowerCase()}function M(){const A=this.stack[this.stack.length-1],O=this.resume(),B=this.stack[this.stack.length-1];if(this.data.inReference=!0,B.type==="link"){const Y=A.children;B.children=Y}else B.alt=O}function y(){const A=this.resume(),O=this.stack[this.stack.length-1];O.url=A}function q(){const A=this.resume(),O=this.stack[this.stack.length-1];O.title=A}function $(){this.data.inReference=void 0}function d(){this.data.referenceType="collapsed"}function k(A){const O=this.resume(),B=this.stack[this.stack.length-1];B.label=O,B.identifier=Nn(this.sliceSerialize(A)).toLowerCase(),this.data.referenceType="full"}function x(A){this.data.characterReferenceType=A.type}function _(A){const O=this.sliceSerialize(A),B=this.data.characterReferenceType;let Y;B?(Y=Jg(O,B==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Y=Tc(O);const X=this.stack[this.stack.length-1];X.value+=Y}function L(A){const O=this.stack.pop();O.position.end=ct(A.end)}function z(A){P.call(this,A);const O=this.stack[this.stack.length-1];O.url=this.sliceSerialize(A)}function F(A){P.call(this,A);const O=this.stack[this.stack.length-1];O.url="mailto:"+this.sliceSerialize(A)}function U(){return{type:"blockquote",children:[]}}function K(){return{type:"code",lang:null,meta:null,value:""}}function oe(){return{type:"inlineCode",value:""}}function de(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Pe(){return{type:"emphasis",children:[]}}function $e(){return{type:"heading",depth:0,children:[]}}function fn(){return{type:"break"}}function wn(){return{type:"html",value:""}}function Be(){return{type:"image",title:null,url:"",alt:null}}function N(){return{type:"link",title:null,url:"",children:[]}}function Gn(A){return{type:"list",ordered:A.type==="listOrdered",start:null,spread:A._spread,children:[]}}function Xe(A){return{type:"listItem",spread:A._spread,checked:null,children:[]}}function Yn(){return{type:"paragraph",children:[]}}function In(){return{type:"strong",children:[]}}function C(){return{type:"text",value:""}}function j(){return{type:"thematicBreak"}}}function ct(e){return{line:e.line,column:e.column,offset:e.offset}}function Ay(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?Ay(e,r):n3(e,r)}}function n3(e,n){let t;for(t in n)if(by.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function bh(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+fi({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+fi({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+fi({start:n.start,end:n.end})+") is still open")}function t3(e){const n=this;n.parser=t;function t(r){return Kb(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function ks(e){return ey().use(t3).use(xy).parse(e)}const Ah=({title:e,value:n,onChange:t})=>J.jsxs("div",{className:"markdown-container",children:[J.jsxs("div",{className:"markdown-header",children:[J.jsx("h2",{children:e}),J.jsx(zc,{markdownText:n,astJson:ks(n)})]}),J.jsx("textarea",{className:"markdown-content",value:n,onChange:t})]}),r3=({diffResult:e})=>J.jsxs("div",{className:"markdown-container",children:[J.jsx("h2",{children:"文本差异"}),J.jsx("pre",{className:"markdown-content diff-content",children:e.map((n,t)=>{const r=n.added?"green":n.removed?"red":"grey";return J.jsx("span",{style:{color:r},children:n.value},t)})})]}),i3=({diffMarkdownText:e})=>{const n=r=>{const i=document.createElement("textarea");return i.innerHTML=r,i.value},t=()=>{const r=n(e),i=[];let o=0;const l=[...r.matchAll(/\{\+\+\+\+(.*?)\+\+\+\+\}/gs)],a=[...r.matchAll(/\{----(.*?)----\}/gs)],u=[...r.matchAll(/\{\+\+listItem\+\+\}/g)],s=[...r.matchAll(/\{--listItem--\}/g)],f=[...l,...a,...u,...s].sort((c,p)=>c.index-p.index);return f.length===0?r:(f.forEach((c,p)=>{const h=c[0],w=c.index;w>o&&i.push(J.jsx("span",{children:r.substring(o,w)},`text-${p}-before`)),h==="{++listItem++}"?i.push(J.jsx("span",{className:"list-item-added",children:h},`match-${p}`)):h==="{--listItem--}"?i.push(J.jsx("span",{className:"list-item-removed",children:h},`match-${p}`)):h.startsWith("{++++")?i.push(J.jsx("span",{className:"diff-added-inline",children:h},`match-${p}`)):h.startsWith("{----")&&i.push(J.jsx("span",{className:"diff-removed-inline",children:h},`match-${p}`)),o=w+h.length}),o<r.length&&i.push(J.jsx("span",{children:r.substring(o)},"text-last")),i)};return J.jsxs("div",{className:"markdown-container",children:[J.jsxs("div",{className:"markdown-header",children:[J.jsx("h2",{children:"AST Diff Markdown"}),J.jsx(zc,{markdownText:e})]}),J.jsx("pre",{className:"markdown-content ast-diff-content",children:t()})]})},o3=({htmlContent:e})=>{const n=()=>{const t=new Blob([e],{type:"text/html"});return URL.createObjectURL(t)};return J.jsxs("div",{className:"markdown-container",children:[J.jsx("h2",{children:"AST Diff HTML"}),J.jsx("iframe",{className:"html-preview",src:n(),title:"HTML Diff Preview"})]})},l3=({astJson:e})=>J.jsxs("div",{className:"markdown-container",children:[J.jsxs("div",{className:"markdown-header",children:[J.jsx("h2",{children:"AST JSON"}),J.jsx(zc,{astJson:e})]}),J.jsx("pre",{className:"ast-json-content",children:JSON.stringify(e,null,2)})]});function a3(){const[e,n]=jn.useState("formatting"),[t,r]=jn.useState(""),[i,o]=jn.useState(""),[l,a]=jn.useState([]),[u,s]=jn.useState(""),[f,c]=jn.useState(""),[p,h]=jn.useState(null);jn.useEffect(()=>{const m=Vf.find(g=>g.name===e);m&&(r(m.oldMarkdown),o(m.newMarkdown),w(m.oldMarkdown,m.newMarkdown))},[e]);const w=(m,g)=>{const E=Bm(m,g);a(E);const I=eS(Jx(ks(m),ks(g))),S=kb(I),T=xb(I);h(I),s(S),c(T)},b=m=>{n(m)},R=m=>{const g=m.target.value;r(g),w(g,i)},v=m=>{const g=m.target.value;o(g),w(t,g)};return J.jsxs("div",{className:"container",children:[J.jsx("header",{className:"app-header",children:J.jsx("h1",{className:"app-title",children:"Markdown Diff Viewer"})}),J.jsx("div",{className:"app-description",children:J.jsx("p",{children:"比较并可视化展示Markdown文档的差异，支持AST级别的精确对比"})}),J.jsx(bb,{testcases:Vf,selectedTestcase:e,onTestcaseChange:b}),J.jsxs("div",{className:"grid-layout row-1",children:[J.jsx(Ah,{title:"原始Markdown",value:t,onChange:R}),J.jsx(r3,{diffResult:l}),J.jsx(Ah,{title:"新Markdown",value:i,onChange:v})]}),J.jsxs("div",{className:"grid-layout row-2",children:[J.jsx(i3,{diffMarkdownText:u}),J.jsx(o3,{htmlContent:f})]}),J.jsx("div",{className:"grid-layout row-3",children:J.jsx(l3,{astJson:p})}),J.jsxs("div",{className:"external-links",children:[J.jsxs("a",{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer",children:[J.jsx("span",{className:"link-icon",children:"🔍"})," AST Explorer"]}),J.jsxs("a",{href:"https://jsonhero.io",target:"_blank",rel:"noopener noreferrer",children:[J.jsx("span",{className:"link-icon",children:"🦸"})," JSONHero"]})]}),J.jsx("footer",{className:"app-footer",children:J.jsx("p",{children:"Markdown Diff Viewer - 高效比较Markdown文档差异的工具"})})]})}const Py=document.getElementById("root");if(!Py)throw new Error("Root element not found");ou.createRoot(Py).render(J.jsx(Uy.StrictMode,{children:J.jsx(a3,{})}));
