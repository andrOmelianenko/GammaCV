webpackJsonp([10],{12:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=t(124),o=t.n(u),a=t(225);e.default=function(n,e){return o.a.resolve().then(function(){return n.mountLang("main","en")}).then(function(){return n.mountContainer("main",{type:a.a})}).catch(function(e){return"Bad Request"===e||"Not Found"===e?n.mountTemplate("main","not_found"):o.a.reject(e)})}}});