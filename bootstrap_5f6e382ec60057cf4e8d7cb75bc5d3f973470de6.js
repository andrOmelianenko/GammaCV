!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){var t=window.webpackJsonp;window.webpackJsonp=function(n,o,i){for(var a,s,u=0,c=[];u<n.length;u++)s=n[u],r[s]&&c.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(t&&t(n,o,i);c.length;)c.shift()()};var n={},r={76:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.e=function(e){var t=r[e];if(0===t)return new Promise(function(e){e()});if(t)return t[2];var n=new Promise(function(n,o){t=r[e]=[n,o]});t[2]=n;var i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,o.nc&&a.setAttribute("nonce",o.nc),a.src=o.p+""+({1:"shells-not_found",2:"shells-main",3:"shells-landing",4:"shells-index",5:"shells-examples",6:"shells-example",7:"shells-docs",8:"lang-",9:"shells-not_found-manifest",10:"shells-main-manifest",11:"shells-landing-manifest",12:"shells-examples-manifest",13:"shells-example-manifest",14:"shells-docs-manifest",17:"shells-index-template",18:"shells-not_found-template",19:"shells-main-not_found",20:"shells-landing-template",21:"shells-examples-not_found",22:"shells-example-not_found",23:"shells-docs-not_found",24:"shells-index-noscript",25:"container-example-index-jsx",26:"container-docs-index-jsx",27:"backend",28:"shells-not_found-styles-basic-sass",29:"shells-main-styles-basic-sass",30:"shells-landing-styles-basic-sass",31:"shells-index-styles-basic-sass",32:"shells-examples-styles-basic-sass",33:"shells-example-styles-basic-sass",34:"shells-docs-styles-basic-sass"}[e]||e)+"_5f6e382ec60057cf4e8d7cb75bc5d3f973470de6.js";var s=setTimeout(u,12e4);function u(){a.onerror=a.onload=null,clearTimeout(s);var t=r[e];0!==t&&(t&&t[1](Error("Loading chunk "+e+" failed.")),r[e]=void 0)}return a.onerror=a.onload=u,i.appendChild(a),n},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw e},o(o.s=33)}([,,,,,,,function(e,t,n){"use strict";t.c=function(e,t,n,s,u){if(t)return u?"{{"+n+"."+u+"}}":"{{"+n+"}}";var c=function(e,t){var r=n.split("."),o=e,i=!0,a=!1,s=void 0;try{for(var u,c=r[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var l=u.value;if(!o)return"";o=o[l]}}catch(e){a=!0,s=e}finally{try{!i&&c.return&&c.return()}finally{if(a)throw s}}return o}(e);if(c){if("object"===(void 0===c?"undefined":o(c))){var l=function(e,t){var n={};return Object.keys(e).forEach(function(r){var a=e[r];"object"===(void 0===a?"undefined":o(a))?n[r]=i(a,t):n[r]=a}),n}(c,u);if(c.message){var f=r({},l,s,{context:u});return a(c.message,f)}return a(i(c,u),r({},s,{context:u}))}return a(c,s)}return""},t.b=function(e,t,n){return-1!==["ru"].indexOf(e)?(n+" "+t).trim():(t+" "+n).trim()},t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},r=t;if("string"==typeof t){if(!t)return"";r=new Date(t)}return new Intl.DateTimeFormat(e,n).format(r)};var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e,t){var n=function(e){return e},r="";switch(!0){case"string"==typeof t:n=function(e){return e===t};break;case"number"==typeof t:n=function(e){var n=/(\d+)..(\d+)/.exec(e),r=/(-?\d+)(\+|-)/.exec(e);return e==t||null!==n&&n[1]<=t&&n[2]>=t||null!==r&&("+"===r[2]?t>=r[1]:t<=r[1])}}var o=!0,i=!1,a=void 0;try{for(var s,u=Object.keys(e)[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var c=s.value;if(n(c)){r=e[c];break}}}catch(e){i=!0,a=e}finally{try{!o&&u.return&&u.return()}finally{if(i)throw a}}return!r&&e._&&(r=e._),r}function a(e,t){if(void 0===t)return e;var n=e;if("object"!==(void 0===t?"undefined":o(t)))return n.replace("{arg}",t);var r=(n+"").match(/{\w+}(?!\\)/g),i=[];return r&&r.forEach(function(e){if(-1===i.indexOf(e)){i.push(e);var r=a(t[/\w+/.exec(e)[0]],t);"string"!=typeof r||r||(r=""),n=n.replace(e,r)}}),n}},,,,,,,,function(e,t,n){"use strict";t.a=""},function(e,t,n){"use strict";e.exports=n(40)},function(e,t,n){e.exports=n(41)()},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(34),o=n(47),i=(n.n(o),n(25)),a=new r.a(i.a,o);t.default=a},function(e,t,n){"use strict";n(7);var r=n(39);n.d(t,"b",function(){return r.a});var o=n(43);n.d(t,"a",function(){return o})},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,s=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))o.call(n,c)&&(s[c]=n[c]);if(r){a=r(n);for(var l=0;l<a.length;l++)i.call(n,a[l])&&(s[a[l]]=n[a[l]])}}return s}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,a,s){if(!e){var u;if(void 0===t)u=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],l=0;(u=Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";t.a={version:.2,languages:["en"],defaultLanguage:"en",forceHTTPS:!1,autoReloadOnNewVerison:!0,shells:["index","landing","not_found","main","examples","docs","example"],endpoints:{"/":"main","/examples":"examples","/examples/:id":"example","/docs":"docs","/docs/:type":"docs","/docs/:type/:subtype":"docs","*":"not_found"},source:[{name:"bootstrap",path:"./bootstrap.js"}],notListenPopstate:!0,resources:{backend:function(){return Promise.all([n.e(0),n.e(27)]).then(n.bind(null,63))},container:function(e){return n(48)("./"+e+"/index.jsx")},shell:function(e){return n(49)("./"+e+"/manifest.js")},lang:function(){return n(50)("./index")},script:function(e,t){return n(51)("./"+e+"/scripts/"+t)}}}},,,,,,,,function(e,t,n){e.exports=n(19)},function(e,t,n){"use strict";var r=n(35);n.d(t,"a",function(){return r.a})},function(e,t,n){"use strict";var r=n(36),o=n(38),i=n(45),a=n(46),s=n(15),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(){function e(t,n){var u=this;!function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),e.validateResources(t.resources),this.router=new r.a({notListenPopstate:t.notListenPopstate}),this.dataSource=n,this.shells={},this.containers={},this.backend=!1,this.resources=t.resources,this.defaultLang=t.defaultLanguage,this.language=Object(a.a)(t.languages,navigator.languages||[navigator.language])||this.defaultLang;var c=t.endpoints,l=function(e){var t=c[e],n=new o.a(t,u.resources);u.shells[t]=n,u.router.onRoute([e],function(e){return n.init(u,e)})};for(var f in c)l(f);this.vcUpdateProcess=!1,this.vc=new i.a({currentVersion:"5_5f6e382ec60057cf4e8d7cb75bc5d3f973470de6",pathToVersionFile:s.a+"/build_info.json",pathToSWFile:s.a+"/sw.js",notifyEvent:function(e,n){var r=this;if("old_version"===e.code&&!this.vcUpdateProcess){this.vcUpdateProcess=!0;var o=Promise.resolve();t.autoReloadOnNewVerison&&(o=n.clear()),"serviceWorker"in window.navigator&&window.navigator.serviceWorker.controller&&(o=o.then(function(){return window.navigator.serviceWorker.register(s.a+"/sw.js?"+e.newVersion)})),t.autoReloadOnNewVerison&&o.then(function(){return window.location.reload()}),o.catch(function(e){}).then(function(){r.vcUpdateProcess=!1})}}}),this.datasourceDeprecationNotified=!1,window.addEventListener("load",function(){u.vc.checkVersion()})}return c(e,null,[{key:"validateResources",value:function(t){for(var n=0;n<e.REQUIRED_LOADERS.length;n+=1)if("function"!=typeof t[e.REQUIRED_LOADERS[n]])throw Error("You must provide resource loader function for "+e.REQUIRED_LOADERS[n]+", see README #Resources section")}}]),c(e,[{key:"mountLang",value:function(e){return this.shells[e].mountLang(this.language)}},{key:"mountTemplate",value:function(e,t){return this.shells[e].mountTemplate(t)}},{key:"localizeTemplate",value:function(e){return this.shells[e].localizeTemplate(this.language)}},{key:"unmountTemplate",value:function(e,t){return this.shells[e].unmountTemplate(t)}},{key:"mountScript",value:function(e,t){return this.shells[e].mountScript(t)}},{key:"unmountStyle",value:function(e,t){return this.shells[e].removeStyles(t)}},{key:"getDefaultLang",value:function(e){return this.shells[e].langs[this.defaultLang]}},{key:"mountContainer",value:function(e,t){var n=this,r=this.containers[e];return this.backend||(this.backend=this.resources.backend()),r||(r=this.resources.container(e).then(function(t){return n.containers[e]=t,Promise.resolve(t)})),Promise.all([this.backend,r]).then(function(r){var o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}(r,2),i=o[0],a=o[1];if("object"!==(void 0===i?"undefined":u(i)))throw new TypeError("PWA-Engine, AppController: Backend is not an object, got "+(void 0===i?"undefined":u(i)));i.delegateAppController(n),i.renderToRoot(a.default,n.getDefaultLang(e)),i.dispatch(t)})}},{key:"datasource",get:function(){return this.datasourceDeprecationNotified||(this.datasourceDeprecationNotified=!0),this.dataSource}}]),e}();t.a=l,l.REQUIRED_LOADERS=["backend","container","shell","lang","script"]},function(e,t,n){"use strict";var r,o,i;r=n(37),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.matched=!1,this.prevRoute="",this.routes=[],"development"===r.NODE_ENV&&(window.router=this),t.notListenPopstate||(window.onpopstate=this.onPathChange.bind(this))}return o(e,null,[{key:"prepareRouteRegexp",value:function(e){var t=e;t=(t=t.replace(/:[^/]+/g,"((?:(?:%\\d{1,3})|[A-z!@#$%^&*\\d])+)")).replace(/\*/,".+");var n="";if(/https:\/\/([a-z-A-Z])\w+.github.io/g.exec(window.location.href)){var r=/\/[^/]+/.exec(window.location.pathname);r&&(n=r[0])}return RegExp("^"+n+t+"\\/?$")}},{key:"getParams",value:function(e){for(var t=[],n=/:([^/]+)/g,r=n.exec(e);r;)t.push(r[1]),r=n.exec(e);return t}},{key:"paramValues",value:function(e,t){var n={};for(var r in e)n[e[r]]=t[+r+1];return n}}]),o(e,[{key:"checkRoute",value:function(t){var n=window.location.pathname,r=t.regExp.exec(n);return!(!r||this.prevRoute===n&&this.matched||(this.matched=!0,this.prevRoute=n,t.callback(e.paramValues(t.params,r)),0))}},{key:"onRoute",value:function(t,n){var r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value,c=e.prepareRouteRegexp(u);if(this.routes.push({route:u,regExp:c,params:e.getParams(u),callback:n}),this.checkRoute(this.routes[this.routes.length-1]))break}}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}}},{key:"onPathChange",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,o=this.routes[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value;if(this.checkRoute(i))break}}catch(e){t=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw n}}}},{key:"push",value:function(e){window.history.pushState({},null,e)}},{key:"replace",value:function(e){window.history.replaceState({},null,e)}},{key:"back",value:function(){window.history.back()}},{key:"forward",value:function(){window.history.forward()}}]),e}(),t.a=i},function(e,t){var n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(20),o=n(44),i=n(15),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(t,n){!function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.name=t,this.langs={},this.styles={},this.templates={},this.langs={},this.resources=n}return a(e,[{key:"init",value:function(e,t){this.resources.shell(this.name).then(function(n){return n.default(e,t)})}},{key:"mountTemplate",value:function(e){return Promise.all([this.fetchAndMountStyles(e),this.fetchAndMountTemplate(e)])}},{key:"localizeTemplate",value:function(e){return r.a.translateFragment(this.langs[e],document.getElementById("root")),Promise.resolve()}},{key:"fetchAndMountTemplate",value:function(e){var t=this;return this.templates[e]?(document.querySelector("#root").innerHTML=this.templates[e],Promise.resolve()):fetch(i.a+"/shells/"+this.name+"/"+e+".html").then(function(e){return e.text()}).then(function(n){return t.templates[e]=n,document.querySelector("#root").innerHTML=n,Promise.resolve()})}},{key:"fetchAndMountStyles",value:function(e){var t=this;return this.styles[e]?(document.head.appendChild(this.styles[e]),Promise.resolve()):new Promise(function(n,r){var a=Object(o.a)(),s=document.createElement("link");s.id=a,s.rel="stylesheet",s.href=i.a+"/shells/"+t.name+"/"+e+".css",s.onload=n,s.onerror=r,t.styles[e]=s,document.head.appendChild(s)})}},{key:"mountLang",value:function(e){var t=this;return this.langs[e]?Promise.resolve(this.langs[e]):this.resources.lang(e,this.name).then(function(n){return t.langs[e]=n,Promise.resolve(n)})}},{key:"unmountTemplate",value:function(e){return this.removeStyles(e),this.clearHTML(e),Promise.resolve()}},{key:"removeStyles",value:function(e){return this.styles[e]&&document.head.removeChild(this.styles[e]),Promise.resolve()}},{key:"mountScript",value:function(e){return this.resources.script(this.name,e)}},{key:"clearHTML",value:function(){document.querySelector("#root").innerHTML=null}}]),e}();t.a=s},function(e,t,n){"use strict";var r=n(16),o=(n.n(r),n(17)),i=n.n(o),a=n(7),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),s(t,[{key:"getChildContext",value:function(){return{intl:{getText:a.c.bind(null,this.props.messages,this.props.inShell),getName:a.b.bind(null,this.props.lang),getDate:a.a.bind(null,this.props.lang),lang:this.props.lang}}}},{key:"render",value:function(){return this.props.children}}]),t}();u.propTypes={children:i.a.oneOfType([i.a.node,i.a.object]),lang:i.a.string,messages:i.a.object,inShell:i.a.bool},u.defaultProps={children:null,lang:"en",messages:{},inShell:!1},u.childContextTypes={intl:i.a.object},t.a=u},function(e,t,n){"use strict";
/** @license React v16.4.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(21),o=n(22),i=n(23),a=n(24),s="function"==typeof Symbol&&Symbol.for,u=s?Symbol.for("react.element"):60103,c=s?Symbol.for("react.portal"):60106,l=s?Symbol.for("react.fragment"):60107,f=s?Symbol.for("react.strict_mode"):60108,d=s?Symbol.for("react.profiler"):60114,p=s?Symbol.for("react.provider"):60109,h=s?Symbol.for("react.context"):60110,m=s?Symbol.for("react.async_mode"):60111,y=s?Symbol.for("react.forward_ref"):60112;s&&Symbol.for("react.timeout");var v="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);o(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function x(e,t,n){this.props=e,this.context=t,this.refs=i,this.updater=n||b}function w(){}function k(e,t,n){this.props=e,this.context=t,this.refs=i,this.updater=n||b}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=x.prototype;var j=k.prototype=new w;j.constructor=k,r(j,x.prototype),j.isPureReactComponent=!0;var _={current:null},P=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r=void 0,o={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:u,type:e,key:i,ref:a,props:o,_owner:_.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var T=/\/+/g,R=[];function C(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function A(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case u:case c:i=!0}}if(i)return n(r,e,""===t?"."+D(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var s=t+D(o=e[a],a);i+=A(o,s,n,r)}else if("function"==typeof(s=null===e||void 0===e?null:"function"==typeof(s=v&&e[v]||e["@@iterator"])?s:null))for(e=s.call(e),a=0;!(o=e.next()).done;)i+=A(o=o.value,s=t+D(o,a++),n,r);else"object"===o&&g("31","[object Object]"==(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return i}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function V(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,r,n,a.thatReturnsArgument):null!=e&&(O(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n,e={$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function $(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(T,"$&/")+"/"),t=C(t,i,r,o),null==e||A(e,"",I,t),L(t)}var M={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return $(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=C(null,null,t,n),null==e||A(e,"",V,t),L(t)},count:function(e){return null==e?0:A(e,"",a.thatReturnsNull,null)},toArray:function(e){var t=[];return $(e,t,null,a.thatReturnsArgument),t},only:function(e){return O(e)||g("143"),e}},createRef:function(){return{current:null}},Component:x,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},Fragment:l,StrictMode:f,unstable_AsyncMode:m,unstable_Profiler:d,createElement:E,cloneElement:function(e,t,n){(null===e||void 0===e)&&g("267",e);var o=void 0,i=r({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(s=t.ref,c=_.current),void 0!==t.key&&(a=""+t.key);var l=void 0;for(o in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)P.call(t,o)&&!S.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==l?l[o]:t[o])}if(1==(o=arguments.length-2))i.children=n;else if(1<o){l=Array(o);for(var f=0;f<o;f++)l[f]=arguments[f+2];i.children=l}return{$$typeof:u,type:e.type,key:a,ref:s,props:i,_owner:c}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:O,version:"16.4.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:_,assign:r}},N={default:M},F=N&&M||N;e.exports=F.default?F.default:F},function(e,t,n){"use strict";var r=n(42);function o(){}e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.translateFragment=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.documentElement,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement;return e?e.querySelectorAll("*["+o+"]"):[]}(t),r=n.length,i=0;i<r;i+=1)a(e,n[i]);a(e,t)};var r=n(7),o="data-localization-id",i="data-localization-arg";function a(e,t){var n=function(e){return e instanceof HTMLElement?{id:e.getAttribute(o),arg:e.getAttribute(i)}:{}}(t);if(!n.id)return!1;var a=r.c(e,!1,n.id);if(n.arg)return t.setAttribute(n.arg,a),!1;var s=document.createTextNode(a);return 0===function(e){if(e.children)return e.children.length;if(void 0!==e.childElementCount)return e.childElementCount;for(var t=0,n=0;n<e.childNodes.length;n+=1)t+=1===e.nodeType?1:0;return t}(t)?t.firstChild?t.replaceChild(s,t.firstChild):t.appendChild(s):t.insertBefore(s,t.firstChild),!0}},function(e,t,n){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t){return e.floor(t).toString(n)};return r(t.now()/1e3)+" ".repeat(n).replace(/./g,function(){return r(e.random()*n)})}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){!function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.currentVersion=t.currentVersion,this.pathToVersionFile=t.pathToVersionFile,this.notifyEvent=t.notifyEvent,this.checkDelay=t.checkDelay||18e5,this.autoCheck=t.autoCheck||!1,this.isSupportedSW="serviceWorker"in window.navigator,this.checkInterval=null,this.autoCheck&&this._startWatching()}return r(e,[{key:"_startWatching",value:function(){this.checkInterval=setInterval(this.checkVersion.bind(this),this.checkDelay)}},{key:"_stopWatching",value:function(){clearInterval(this.checkInterval)}},{key:"_fetchVersionFile",value:function(){return fetch(this.pathToVersionFile+"?"+Date.now(),{method:"GET"})}},{key:"checkVersion",value:function(){var e=this;return this._fetchVersionFile().then(function(e){return e.json()}).then(function(t){t.buildInfo!==e.currentVersion?e.notifyEvent({code:"old_version",message:"app have new version",newVersion:t.buildInfo},e):e.notifyEvent({code:"latest_version",message:"app use latest version"},e)}).catch(function(t){e.notifyEvent({code:"check_error",message:"check version error",error:t},e)})}},{key:"clear",value:function(){var e=this;return this.isSupportedSW?window.caches.keys().then(function(e){return Promise.all(e.map(function(e){return/(sw-precache|toolbox-cache)/.test(e)?caches.delete(e):Promise.resolve()}))}).then(function(){window.navigator.serviceWorker.getRegistrations().then(function(e){Promise.all(e.map(function(e){return e.unregister()}))})}).catch(function(t){e.notifyEvent({code:"clear_error",message:"app clear cache error",error:t},e)}).then(function(){e.notifyEvent({code:"clear_completed",message:"app clear cache completed"},e)}):(this.notifyEvent({code:"support_error",message:"browser don't support service worker"},this),Promise.resolve())}}]),e}();t.a=o},function(e,t,n){"use strict";t.a=function(e,t){var n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var s=i.value;if(s=s.split("-")[0].toLowerCase(),e.indexOf(s)>=0)return s}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return""}},function(e,t){},function(e,t,n){var r={"./docs/index.jsx":[52,0,26],"./example/index.jsx":[53,25,0,35],"./examples/index.jsx":[61,0,15,35],"./main/index.jsx":[62,0,16]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(Error("Cannot find module '"+e+"'."))}o.keys=function(){return Object.keys(r)},o.id=48,e.exports=o},function(e,t,n){var r={"./docs/manifest.js":[8,0,14],"./example/manifest.js":[9,0,13],"./examples/manifest.js":[10,0,12],"./landing/manifest.js":[11,0,11],"./main/manifest.js":[12,0,10],"./not_found/manifest.js":[13,0,9]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(Error("Cannot find module '"+e+"'."))}o.keys=function(){return Object.keys(r)},o.id=49,e.exports=o},function(e,t,n){var r={"./":[14,8],"./index":[14,8],"./index.yaml":[14,8]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(Error("Cannot find module '"+e+"'."))}o.keys=function(){return Object.keys(r)},o.id=50,e.exports=o},function(e,t,n){var r={"./docs":[0,7],"./docs/":[0,7],"./docs/index":[0,7],"./docs/index.js":[0,7],"./docs/manifest":[8,0,14],"./docs/manifest.js":[8,0,14],"./docs/not_found":[26,0,23],"./docs/not_found.jsx":[26,0,23],"./docs/styles/basic.sass":[54,0,34],"./example":[1,6],"./example/":[1,6],"./example/index":[1,6],"./example/index.js":[1,6],"./example/manifest":[9,0,13],"./example/manifest.js":[9,0,13],"./example/not_found":[27,0,22],"./example/not_found.jsx":[27,0,22],"./example/styles/basic.sass":[55,0,33],"./examples":[2,5],"./examples/":[2,5],"./examples/index":[2,5],"./examples/index.js":[2,5],"./examples/manifest":[10,0,12],"./examples/manifest.js":[10,0,12],"./examples/not_found":[28,0,21],"./examples/not_found.jsx":[28,0,21],"./examples/styles/basic.sass":[56,0,32],"./index":[3,4],"./index/":[3,4],"./index/index":[3,4],"./index/index.js":[3,4],"./index/noscript":[18,24],"./index/noscript.jsx":[18,24],"./index/styles/basic.sass":[57,0,31],"./index/template":[29,0,17],"./index/template.jsx":[29,0,17],"./landing":[4,3],"./landing/":[4,3],"./landing/index":[4,3],"./landing/index.js":[4,3],"./landing/manifest":[11,0,11],"./landing/manifest.js":[11,0,11],"./landing/styles/basic.sass":[58,0,30],"./landing/template":[30,0,20],"./landing/template.jsx":[30,0,20],"./main":[5,2],"./main/":[5,2],"./main/index":[5,2],"./main/index.js":[5,2],"./main/manifest":[12,0,10],"./main/manifest.js":[12,0,10],"./main/not_found":[31,0,19],"./main/not_found.jsx":[31,0,19],"./main/styles/basic.sass":[59,0,29],"./not_found":[6,1],"./not_found/":[6,1],"./not_found/index":[6,1],"./not_found/index.js":[6,1],"./not_found/manifest":[13,0,9],"./not_found/manifest.js":[13,0,9],"./not_found/styles/basic.sass":[60,0,28],"./not_found/template":[32,0,18],"./not_found/template.jsx":[32,0,18]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(Error("Cannot find module '"+e+"'."))}o.keys=function(){return Object.keys(r)},o.id=51,e.exports=o}])});