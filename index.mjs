// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var i=r,o=e,d=t,m=n,l=s;var f=function r(e,t,n){var s,f,u;if(!d(e))throw new TypeError(l("0CN4J",e));if(!o(t))throw new TypeError(l("0CN2S",t));return u=-1,i(s={},"next",(function(){var r;if(f)return{done:!0};for(;;){if(r=e.next(),u+=1,r.done)return f=!0,r;if(void 0!==(r=t.call(n,r.value,u)))return{value:r,done:!1}}})),i(s,"return",(function(r){if(f=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),m&&o(e[m])&&i(s,m,(function(){return r(e[m](),t,n)})),s},u=f;export{u as default};
//# sourceMappingURL=index.mjs.map
