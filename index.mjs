// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function i(o,d,m){var l,f,u;if(!t(o))throw new TypeError(s("0Ov46,G5",o));if(!r(d))throw new TypeError(s("0Ov2H,G6",d));return u=-1,e(l={},"next",(function(){var e;if(f)return{done:!0};for(;;){if(e=o.next(),u+=1,e.done)return f=!0,e;if(void 0!==(e=d.call(m,e.value,u)))return{value:e,done:!1}}})),e(l,"return",(function(e){if(f=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),n&&r(o[n])&&e(l,n,(function(){return i(o[n](),d,m)})),l}export{i as default};
//# sourceMappingURL=index.mjs.map
