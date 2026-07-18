"use strict";var g=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var d=g(function(b,c){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=require('@stdlib/assert-is-function/dist'),w=require('@stdlib/assert-is-iterator-like/dist'),i=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function f(t,e,u){var n,a,o;if(!w(t))throw new TypeError(s('0Ov46',t));if(!v(e))throw new TypeError(s('0Ov2H',e));return o=-1,n={},l(n,"next",m),l(n,"return",p),i&&v(t[i])&&l(n,i,q),n;function m(){var r;if(a)return{done:!0};for(;;){if(r=t.next(),o+=1,r.done)return a=!0,r;if(r=e.call(u,r.value,o),r!==void 0)return{value:r,done:!1}}}function p(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function q(){return f(t[i](),e,u)}}c.exports=f
});var x=d();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
