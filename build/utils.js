!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Utils",[],e):"object"==typeof exports?exports.Utils=e():t.Utils=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";var n=r(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(3)),i={isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},isArray:function(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)},isDate:function(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)},isNumber:function(t){return t instanceof Number||"[object Number]"===Object.prototype.toString.call(t)},isString:function(t){return t instanceof String||"[object String]"===Object.prototype.toString.call(t)},isBoolean:function(t){return"boolean"==typeof t},isFunction:function(t){return"function"==typeof t},isNull:function(t){return null==t},isPlainObject:function(t){if(t&&"[object Object]"===Object.prototype.toString.call(t)&&t.constructor===Object&&!hasOwnProperty.call(t,"constructor")){var e;for(e in t);return void 0===e||hasOwnProperty.call(t,e)}return!1},extend:function(){var t,e,r,n,i,c,a=arguments[0]||{},u=1,l=arguments.length,s=!1;for("boolean"==typeof a&&(s=a,a=arguments[1]||{},u=2),"object"===(0,o.default)(a)||this.isFunction(a)||(a={}),l===u&&(a=this,--u);u<l;u++)if(null!=(t=arguments[u]))for(e in t)(r=a[e])!==(n=t[e])&&(s&&n&&(this.isPlainObject(n)||(i=this.isArray(n)))?(i?(i=!1,c=r&&this.isArray(r)?r:[]):c=r&&this.isPlainObject(r)?r:{},a[e]=this.extend(s,c,n)):void 0!==n&&(a[e]=n));return a},freeze:function(t){var e=this,r=this;return Object.freeze(t),Object.keys(t).forEach(function(n,o){r.isObject(t[n])&&e.freeze(t[n])}),t},copy:function(t){var e=null;if(this.isObject(t))for(var r in e={},t)e[r]=this.copy(t[r]);else if(this.isArray(t)){e=[];var n=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(n=(c=a.next()).done);n=!0){var u=c.value;e.push(this.copy(u))}}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}}else e=t;return e},getKeyValue:function(t,e){if(!this.isObject(t))return null;var r=null;if(this.isArray(e)?r=e:this.isString(e)&&(r=e.split(".")),null==r||0==r.length)return null;var n=null,o=r.shift(),i=o.match(new RegExp("^(\\w+)\\[(\\d+)\\]$"));if(i){o=i[1];var c=i[2];n=t[o],this.isArray(n)&&n.length>c&&(n=n[c])}else n=t[o];return r.length>0?this.getKeyValue(n,r):n},setKeyValue:function(t,e,r,n){if(!this.isObject(t))return!1;var o=null;if(this.isArray(e)?o=e:this.isString(e)&&(o=e.split("."),n=t),null==o||0==o.length)return!1;var i=null,c=0,a=o.shift(),u=a.match(new RegExp("^(\\w+)\\[(\\d+)\\]$"));if(u){if(a=u[1],c=u[2],i=t[a],this.isArray(i)&&i.length>c){if(o.length>0)return this.setKeyValue(i[c],o,r,n);i[c]=r}}else{if(o.length>0)return this.setKeyValue(t[a],o,r,n);t[a]=r}return n},toArray:function(t,e,r){var n="";if(!this.isObject(t))return[];this.isString(r)&&(n=r);var o=[];for(var i in t){var c=t[i],a={};this.isObject(c)?a=c:a[n]=c,e&&(a[e]=i),o.push(a)}return o},toObject:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={},o=0;o<t.length;o++){var i=t[o];this.isObject(i)?"count"==e?n[o]=i:(n[i[e]]=i,r&&(n[i[e]].count=o)):n[i]=i}return n},saveLocal:function(t,e){return!!(window.localStorage&&JSON&&t)&&("object"==(0,o.default)(e)&&(e=JSON.stringify(e)),window.localStorage.setItem(t,e),!0)},getLocal:function(t,e){if(window.localStorage&&JSON&&t){var r=window.localStorage.getItem(t);if(!e||"json"!=e||void 0===r)return r;try{return JSON.parse(r)}catch(t){return console.error("取数转换json错误".concat(t)),""}}return null},getLocal2Json:function(t){if(window.localStorage&&JSON&&t){var e=window.localStorage.getItem(t);if(this.isNull(e))return e;try{return JSON.parse(e)}catch(t){return console.error("取数转换json错误".concat(t)),""}}return null},removeLocal:function(t){return window.localStorage&&JSON&&t&&window.localStorage.removeItem(t),null},saveCookie:function(t,e,r,n,i){var c=!!navigator.cookieEnabled;if(t&&c){var a;n=n||"/","object"==(0,o.default)(e)&&(e=JSON.stringify(e)),i?(a=new Date).setTime(a.getTime()+1e3*i):a=new Date("9998-01-01");var u="".concat(t,"=").concat(escape(e)).concat(i?";expires=".concat(a.toGMTString()):"",";path=").concat(n,";");return r&&(u+="domain=".concat(r,";")),document.cookie=u,!0}return!1},getCookie:function(t){var e=!!navigator.cookieEnabled;if(t&&e){var r=document.cookie.match(new RegExp("(^| )".concat(t,"=([^;]*)(;|$)")));if(null!==r)return unescape(r[2])}return null},clearCookie:function(t,e){var r=document.cookie.match(/[^ =;]+(?=\=)/g);if(e=e||"/",r)for(var n=r.length;n--;){var o="".concat(r[n],"=0;expires=").concat(new Date(0).toUTCString(),";path=").concat(e,";");t&&(o+="domain=".concat(t,";")),document.cookie=o}},removeCookie:function(t,e,r){var n=!!navigator.cookieEnabled;if(t&&n){r=r||"/";var o="".concat(t,"=0;expires=").concat(new Date(0).toUTCString(),";path=").concat(r,";");return e&&(o+="domain=".concat(e,";")),document.cookie=o,!0}return!1},dictMapping:function(t){var e=this,r=t.value,n=t.dict,o=t.connector,i=t.keyField,c=void 0===i?"key":i,a=t.titleField,u=void 0===a?"value":a;return!n||this.isNull(r)?"":(o&&(r=r.split(o)),!this.isNull(r)&&""!==r&&n&&(this.isArray(r)||(r=[r])),r.length<=0?"":(this.isArray(n)&&(n=this.toObject(n,c)),r.map(function(t){if(e.isObject(t))return t[u];var r=n[t];return e.isObject(r)?r[u]:r}).filter(function(t){return t&&""!==t}).join(", ")))},uuid:function(){var t=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},padLeft:function(t,e){var r="00000"+t;return r.substr(r.length-e)},toggleValue:function(t,e){if(!this.isArray(t))return[e];var r=t.filter(function(t){return t==e});r.length>0?t.splice(t.indexOf(r[0]),1):t.push(e)},toSimpleArray:function(t,e){var r=[];if(this.isObject(t))for(var n=0,o=Object.keys(t);n<o.length;n++){var i=o[n];r.push(t[i][e])}if(this.isArray(t)){var c=!0,a=!1,u=void 0;try{for(var l,s=t[Symbol.iterator]();!(c=(l=s.next()).done);c=!0){var f=l.value;r.push(f[e])}}catch(t){a=!0,u=t}finally{try{c||null==s.return||s.return()}finally{if(a)throw u}}}return r},getURLParam:function(t,e){return decodeURIComponent((new RegExp("[?|&]".concat(t,"=")+"([^&;]+?)(&|#|;|$)").exec(e||location.search)||[!0,""])[1].replace(/\+/g,"%20"))||null},getAuthor:function(){var t=this.getURLParam("author",window.location.search)||this.getLocal("window_author");return t&&this.saveLocal("window_author",t),t},add:function(t,e){var r=t.toString(),n=e.toString(),o=r.split("."),i=n.split("."),c=2==o.length?o[1]:"",a=2==i.length?i[1]:"",u=Math.max(c.length,a.length),l=Math.pow(10,u);return Number(((r*l+n*l)/l).toFixed(u))},sub:function(t,e){return this.add(t,-e)},mul:function(t,e){var r=0,n=t.toString(),o=e.toString();try{r+=n.split(".")[1].length}catch(t){}try{r+=o.split(".")[1].length}catch(t){}return Number(n.replace(".",""))*Number(o.replace(".",""))/Math.pow(10,r)},div:function(t,e){var r=0,n=0;try{r=t.toString().split(".")[1].length}catch(t){}try{n=e.toString().split(".")[1].length}catch(t){}var o=Number(t.toString().replace(".","")),i=Number(e.toString().replace(".",""));return this.mul(o/i,Math.pow(10,n-r))}};i.valueForKeypath=i.getKeyValue,i.setValueForKeypath=i.setKeyValue;var c=i;e.default=c},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?t.exports=n=function(t){return r(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)},n(e)}t.exports=n}]).default});