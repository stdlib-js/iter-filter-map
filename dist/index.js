"use strict";var g=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var d=g(function(b,c){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=require('@stdlib/assert-is-function/dist'),w=require('@stdlib/assert-is-iterator-like/dist'),u=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function f(t,e,l){var n,i,a;if(!w(t))throw new TypeError(s('0Ov46',t));if(!v(e))throw new TypeError(s('0Ov2H',e));return a=-1,n={},o(n,"next",m),o(n,"return",p),u&&v(t[u])&&o(n,u,q),n;function m(){var r;if(i)return{done:!0};for(;;){if(r=t.next(),a+=1,r.done)return i=!0,r;if(r=e.call(l,r.value,a),r!==void 0)return{value:r,done:!1}}}function p(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function q(){return f(t[u](),e,l)}}c.exports=f
});var x=d();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
