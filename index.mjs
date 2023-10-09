// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(o,d,m){var l,u,a;if(!r(o))throw new TypeError(i("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",o));if(!t(d))throw new TypeError(i("invalid argument. Second argument must be a function. Value: `%s`.",d));return a=-1,e(l={},"next",(function(){var e;if(u)return{done:!0};for(;;){if(e=o.next(),a+=1,e.done)return u=!0,e;if(void 0!==(e=d.call(m,e.value,a)))return{value:e,done:!1}}})),e(l,"return",(function(e){if(u=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),n&&t(o[n])&&e(l,n,(function(){return s(o[n](),d,m)})),l}export{s as default};
//# sourceMappingURL=index.mjs.map
