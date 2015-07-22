//devin87@qq.com
//build:2015/07/22 13:40:42
!function(t){"use strict";function e(){var t=function(t){return arguments[0]=1,t!=arguments[0]};return t(0)}function r(e){if(e==t)return""+e;if("object"!=typeof e&&"function"!=typeof e)return typeof e;if(U){if("number"==typeof e.nodeType)return"node";if("number"==typeof e.length){if(!B&&e.callee)return"arguments";if(e==e.window)return"window";if(e.item)return"list"}}return H.call(e).slice(8,-1).toLowerCase()}function n(t){return"[object Function]"===H.call(t)}function i(t){return t&&"[object Object]"===H.call(t)}function o(t){return"[object Array]"===H.call(t)}function a(t){var e=r(t);return"array"==e||"list"==e||"arguments"==e}function c(e,r){return e!==t?e:r}function s(e,r){return"number"==typeof e&&e===Math.floor(e)&&(r===t||e>=r)}function u(t){return s(t,1)}function l(e,r,n,i){if(isNaN(e))return!1;var o=+e;return i&&o!=Math.floor(o)?!1:r!=t&&r>o?!1:n!=t&&o>n?!1:!0}function f(t,e,r){return l(t,e,r,!0)}function p(t,e){for(var r=[],n=e||0,i=t.length;i>n;n++)r.push(t[n]);return r}function h(e,n){if(e==t)return[];switch(r(e)){case"array":return n?e.slice(n):e;case"list":return W(e,n);case"arguments":return F.call(e,n)}return[e]}function d(t,e,r){if(t&&t.prototype){var n=t.prototype;if("string"==typeof e)n[r]=n[e];else for(var i in e)R.call(e,i)&&R.call(n,i)&&(n[e[i]]=n[i]);return t}}function g(e,r,n){if(e&&r){for(var i in r)i!=t&&R.call(r,i)&&(n||e[i]===t)&&(e[i]=r[i]);return e}}function m(e,r,i){if(e){for(var o={},a=n(r),c=r!==t,s=0,u=e.length;u>s;s++){var l,f=e[s];if(f!=t){if(a){var p=r.call(e,f,s);if(!p)continue;f=p[0],l=p[1]}else l=c?r:s;o[i?f.toLowerCase():f]=l}}return o}}function v(e,r,n,i){if(e){n===!0&&(i=n,n=t);for(var o={},a=0,c=e.length;c>a;a++){var s=e[a];s&&"object"==typeof s&&(i&&(s.index=a),o[s[r]]=n?s[n]:s)}return o}}function y(t,e,r){r?t.sort(function(t,r){return r[e]-t[e]}):t.sort(function(t,r){return t[e]-r[e]})}function b(t,e,r){r?t.sort(function(t,r){return-t[e].localeCompare(r[e])}):t.sort(function(t,r){return t[e].localeCompare(r[e])})}function w(e,r){return e!=t?e.apply(r,F.call(arguments,2)):void 0}function x(e,r,n,i){return e!=t?setTimeout(function(){e.apply(r,i)},c(n,20)):void 0}function k(e,r){return n(e)&&x(e,t,r,F.call(arguments,2))}function j(t){var e=+new Date,r=t.timeout,n=r&&e-t.startTime>r;return n||t.check(t)?(t.endTime=e,void t.callback(t,n)):(t.count++,k(j,t.sleep,t))}function S(t,e,r,n){j({check:t,callback:e,timeout:r,sleep:n,count:0,startTime:+new Date})}function O(t,e,r){for(var n=0,i=t.length;i>n;n++)n in t&&e.call(r,t[n],n,t)}function M(t){var e=t;return e.constructor=M,e.prototype.constructor=e,e.extend=function(t,e){g(this.prototype,t,e)},e.alias=function(t,e){d(this,t,e)},e}function I(t,e){switch(t){case"d":case"day":return e/864e5;case"h":case"hour":return e/36e5;case"m":case"minute":return e/6e4;case"s":case"second":return e/1e3}return e}function T(t,e){this.map={},this.bind=e;var r=this;t.forEach(function(t){r.map[t]=[]})}function Q(t){var e=t.split("."),r=e.length;if(4!=r)return!1;for(var n=0;r>n;n++){var i=+e[n];if(!e[n]||isNaN(i)||0>i||i>255)return!1}return!0}function A(t){return G.test(t)}function N(t){return V.test(t)}function D(t){return Y.test(t)}function E(t){return X.test(t)}function C(t,e,r){t=+t,e=e||1024;for(var n=0,i="number"==typeof e,o=1,a=u(r)?r:i?100:e.length;t>=o&&a>n;)o*=i?e:e[n],n++;return n&&o>t&&(o/=i?e:e.last(),n--),{value:n?t/o:t,level:n}}function _(e,r){if(r=r===!0?{all:!0}:r||{},isNaN(e)||e==t||0>e){var n=r.error||"--";return r.all?{text:n}:n}var i=C(e,r.steps,r.limit),o=i.value,a=o.toFixed(c(r.digit,2));return r.trim!==!1&&-1!=a.lastIndexOf(".")&&(a=a.replace(/\.?0+$/,"")),i.text=a+(r.join||"")+(r.units||Z)[i.level+(r.start||0)],r.all?i:i.text}var L="object"==typeof global?global:window,H=Object.prototype.toString,R=Object.prototype.hasOwnProperty,F=Array.prototype.slice,B=e(),U=L==L.window,W=function(){try{return F.call(document.documentElement.childNodes),function(t,e){return F.call(t,e)}}catch(t){return p}}();O([String,Array,Number,Boolean,Function,Date,RegExp],M),g(Object,{create:function(t){var e=function(){};return e.prototype=t,new e},forEach:function(t,e,r){for(var n in t)R.call(t,n)&&e.call(r,n,t[n],t)},keys:function(t){var e=[];for(var r in t)R.call(t,r)&&e.push(r);return e},values:function(t){var e=[];for(var r in t)R.call(t,r)&&e.push(t[r]);return e},size:function(t){var e=0;for(var r in t)R.call(t,r)&&e++;return e},hasItem:function(t){for(var e in t)if(R.call(t,e))return!0;return!1}}),String.extend({trim:function(){for(var t=""+this,t=t.replace(/^\s\s*/,""),e=/\s/,r=t.length;e.test(t.charAt(--r)););return t.slice(0,r+1)},repeat:function(t){for(var e=""+this,r="";t>0&&(t%2==1&&(r+=e),1!=t);)e+=e,t>>=1;return r},startsWith:function(t,e){var r=""+this;return r.substr(e||0,t.length)===t},endsWith:function(e,r){var n=""+this,i=r==t||r>n.length?n.length:r;return n.substr(i-e.length,e.length)===e},contains:function(t,e){return-1!=this.indexOf(t,e)}}),String.extend({drop:function(t,e){var r="string"==typeof t?new RegExp(t,e||"g"):t;return this.replace(r,"")},reverse:function(){return this.split("").reverse().join("")},toHtml:function(){return this.replace(/\x26/g,"&amp;").replace(/\x3c/g,"&lt;").replace(/\x3e/g,"&gt;").replace(/\r?\n|\r/g,"<br/>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;").replace(/\s/g,"&nbsp;")},toText:function(){return this.replace(/<br[^>]*>/gi,"\n").replace(/<script[^>]*>([^~]|~)+?<\/script>/gi,"").replace(/<[^>]+>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&amp;/g,"&")}}),Number.extend({format:function(t,e){var r=this.toString(e||10),n=t-r.length;return(n>0?"0".repeat(n):"")+r}}),Array.extend({forEach:function(t,e){for(var r=this,n=0,i=r.length;i>n;n++)n in r&&t.call(e,r[n],n,r)},map:function(t,e){for(var r=this,n=[],i=0,o=r.length;o>i;i++)i in r&&n.push(t.call(e,r[i],i,r));return n},indexOf:function(e,r){var n,i=this,o=i.length;if(0==o)return-1;for(r==t?n=0:(n=Number(r),0>n&&(n=Math.max(n+o,0)));o>n;n++)if(n in i&&i[n]===e)return n;return-1},lastIndexOf:function(e,r){var n,i=this,o=i.length;if(0==o)return-1;for(r==t?n=o-1:(n=Number(r),n=n>=0?Math.min(n,o-1):n+o);n>=0;n--)if(n in i&&i[n]===e)return n;return-1},filter:function(t,e){for(var r=this,n=[],i=0,o=r.length;o>i;i++)if(i in r){var a=r[i];t.call(e,a,i,r)&&n.push(a)}return n},every:function(t,e){for(var r=this,n=0,i=r.length;i>n;n++)if(n in r&&!t.call(e,r[n],n,r))return!1;return!0},some:function(t,e){for(var r=this,n=0,i=r.length;i>n;n++)if(n in r&&t.call(e,r[n],n,r))return!0;return!1}}),Array.extend({contains:function(t,e){return-1!==this.indexOf(t,e)},get:function(e){return e>=0?this[e]:(e+=this.length,e>=0?this[e]:t)},first:function(){return this.get(0)},last:function(){return this.get(-1)},del:function(t,e){return this.splice(t,e||1)},unique:function(t){for(var e=this,r=[],n={},i=0,o=e.length;o>i;i++){var a=e[i],c=t?a[t]:a,s=typeof c+c;n[s]||(r.push(a),n[s]=!0)}return r},clean:function(){for(var e=this,r=[],n=0,i=e.length;i>n;n++)e[n]!=t&&r.push(e[n]);return r},items:function(t){return this.map(function(e){return e[t]})},toMap:function(t,e){return m(this,t,e)},toObjectMap:function(t,e,r){return v(this,t,e,r)}}),g(Array,{forEach:O,isArray:o});var P=[/y{2,4}/,/M{1,2}/,/d{1,2}/,/H{1,2}|h{1,2}/,/m{1,2}/,/s{1,2}/,/S/,/W/,/AP/],J=(new Date).getTimezoneOffset(),z="日一二三四五六".split(""),q=["上午","下午"],$=new Date(""),K=["getFullYear","getMonth","getDate","getHours","getMinutes","getSeconds","getMilliseconds","getDay","getHours"];Date.extend({isValid:function(){return!isNaN(this.valueOf())},format:function(t,e){if(e=e||{},!this.isValid())return e.invalid||"--";for(var r=e.months,n=e.weeks||z,i=e.aps||q,o=P.length,a=0;o>a;a++){var c=P[a],s=this[K[a]]();t=t.replace(c,function(t){var e=t.length;if(8==a)return i[s>12?1:0];if(7==a)return n[s];if(1==a){if(r)return r[s];s++}return 3==a&&"h"==t.charAt(0)&&s>12&&(s-=12),1==e?""+s:("00"+s).slice(-e)})}return t},add:function(t,e){var r=this;switch(t){case"y":case"year":r.setFullYear(r.getFullYear()+e);break;case"M":case"month":r.setMonth(r.getMonth()+e);break;case"d":case"day":r.setDate(r.getDate()+e);break;case"h":case"hour":r.setHours(r.getHours()+e);break;case"m":case"minute":r.setMinutes(r.getMinutes()+e);break;case"s":case"second":r.setSeconds(r.getSeconds()+e);break;case"ms":case"millisecond":r.setMilliseconds(r.getMilliseconds()+e)}return r},diff:function(t,e){return I(t,this-e)},fromUTC:function(){return this.setMinutes(this.getMinutes()-J),this},toUTC:function(){return this.setMinutes(this.getMinutes()+J),this},clone:function(){return new Date(this.getTime())}}),g(Date,{now:function(){return+new Date}}),g(Date,{from:function(t){if("number"==typeof t)return new Date(t);if("string"==typeof t){if(!t)return $;var e,r,n="Z"==t.slice(t.length-1),i=t.replace(/[-\u5e74\u6708]/g,"/").replace(/[\u65f6\u5206\u70b9]/g,":").replace("T"," ").replace(/[Z\u65e5\u53f7\u79d2]/g,""),o=i.lastIndexOf(".");if(-1!=o&&(r=+i.slice(o+1),i=i.slice(0,o)),e=new Date(i),!e.isValid()&&i.indexOf("/")>0){var a=i.split(" "),c=(a[0]+(a[0].endsWith("/")?"":"/")+"1/1").split("/").slice(0,3).join("/");e=new Date(c+" "+(a[1]||""))}return r&&e.setMilliseconds(r),e.isValid()?n?e.fromUTC():e:t}return"[object Date]"==H.call(t)?t:$},parts:function(t){var e=0,r=0,n=0;return e=Math.floor(t/86400),e>0&&(t-=86400*e),r=Math.floor(t/3600),r>0&&(t-=3600*r),n=Math.floor(t/60),n>0&&(t-=60*n),{days:e,hours:r,mintues:n,seconds:t}},total:I}),T.prototype={constructor:T,add:function(t,e){var r=this.map;return"string"==typeof t?n(e)&&r[t].push(e):i(t)&&Object.forEach(t,function(t,e){r[t]&&n(e)&&r[t].push(e)}),this},trigger:function(e,r){var n=this,i=n.map[e];return i.length>0?i.map(function(t){return t.apply(n.bind,[].concat(r))}):t}};var G=/^[\w\.-]+@[\w-]+(\.[\w-]+)*\.[\w-]+$/,V=/^(1\d{10}|(\d{3,4}-?)?\d{7,8}(-\d{1,4})?)$/,Y=/^1\d{10}$/,X=/^https?:\/\//i,Z=["B","KB","MB","GB","TB","PB","EB"],tt={version:"1.2.2",G:L,strict:B,type:r,isFunc:n,isObject:i,isArray:Array.isArray,isArrayLike:a,def:c,isInt:s,isUInt:u,checkNum:l,checkInt:f,toArray:p,makeArray:h,alias:d,extend:g,toMap:m,toObjectMap:v,sortNumber:y,sortString:b,fire:w,delay:x,async:k,waitFor:S,factory:M,isIP:Q,isMail:A,isPhone:N,isTel:D,isHttpURL:E,parseLevel:C,formatSize:_,Listener:T};L.Q=tt,"object"==typeof module&&"object"==typeof module.exports&&(module.exports=tt)}(),function(t){"use strict";function e(t){t=t||{};var e=this,r=t.tasks;e._listener=new g(["add","start","end","complete"],e),e.auto=t.auto!==!1,e.workerThread=t.workerThread||1,e.timeout=t.timeout,"auto"==t.rtype&&(e.rtype=p(r)),e.on("complete",t.complete),t.inject&&(e.inject=t.inject),t.process&&(e.process=t.process),t.processResult&&(e.processResult=t.processResult),e.ops=t,e.reset(),o(e.addList,e,0,[r])}function r(r,n,i,o){return u(n)&&(i=n,n=t),new e(a(i||{},{rtype:"auto",workerThread:o,tasks:r,complete:n}))}function n(t,e,n){return r(t,e,n,l(t)?t.length:Object.size(t))}function i(t){return new e(a(t||{},{exec:t.ajax||Q.ajax||$.ajax,injectIndex:1,injectCallback:"complete"}))}var o=Q.delay,a=Q.extend,c=Q.fire,s=Q.isFunc,u=Q.isObject,l=Q.isArrayLike,f=Q.isUInt,p=Q.type,h=Q.makeArray,d=Q.factory,g=Q.Listener,m=-1,v=0,y=1,b=2;d(e).extend({on:function(t,e){return this._listener.add(t,e),this},trigger:function(t,e){return this._listener.trigger(t,e),this},reset:function(){var t=this;return t.tasks=[],t.index=0,t.workerIdle=t.workerThread,t},_add:function(e,r,n){var i=this,o={args:h(e),state:v};return r!=t&&(o.key=r),i.tasks.push(o),i.trigger("add",o),n&&i.start(),i},add:function(){return this._add(arguments,t,this.auto)},addList:function(t){var e=this;return t?(l(t)?Array.forEach(t,function(t,r){e._add(t,r,!1)}):Object.forEach(t,function(t,r){e._add(r,t,!1)}),e.auto&&e.start(),e):e},size:function(e){return e!=t?this.tasks.filter(function(t){return t.state==e}).length:this.tasks.length},_run:function(){var t=this;if(t.stoped||t.workerIdle<=0||t.index>=t.tasks.length)return t;var e=t.tasks[t.index++],r=t.timeout;return t.workerIdle--,t.trigger("start",e),e.state!=v?t.ok(e):(e.state=y,f(r)&&(e._timer=o(t.ok,t,r,[e,m])),t.process(e,function(){t.ok(e,b)}),t.workerIdle?t._run():t)},start:function(){var t=this;return t.stoped=!1,t.auto||(t.auto=!0),o(t._run,t,10),t},stop:function(t){var e=this;return e.stoped=!0,f(t)&&o(e._run,e,t),e},inject:function(e,r){var n=this,i=n.ops,o=i.injectIndex||0,a=i.injectCallback,c=e.args.slice(0);!i.exec&&s(c[0])&&o++;var u,l=c[o],f=function(t){e.result=t,s(u)&&u.apply(this,[].concat(t)),r()};if(a!=t){var p=l.__qcallback;u=p||l[a],!p&&u&&(l.__qcallback=u),l[a]=f,c[o]=l}else u=l,c[o]=f;return c},process:function(t,r){var n=this,i=n.ops,o=i.exec,a=i.bind,c=n.inject(t,r),s=c[0];s instanceof e?s.start():o?o.apply(a,c):s.apply(a,c.slice(1))},processResult:function(t){switch(this.rtype){case"array":case"list":case"arguments":return t.items("result");case"object":return t.toObjectMap("key","result")}return[t]},isCompleted:function(){return this.tasks.every(function(t){return t.state==b||t.state==m})},ok:function(t,e){var r=this;return t.state!=y?r._run():(++r.workerIdle>r.workerThread&&(r.workerIdle=r.workerThread),t._timer&&clearTimeout(t._timer),t.state=e,r.trigger("end",t),r.isCompleted()&&(r.trigger("complete",r.processResult(r.tasks)),c(r.complete,r)),r._run())}}),e.TASK={TIMEDOUT:m,READY:v,PROCESSING:y,OK:b},a(Q,{Queue:e,series:r,parallel:n,ajaxQueue:i})}(),function(t){"use strict";function e(t){try{return decodeURIComponent(t)}catch(e){return t}}function r(e){if(!e)return"";if("string"==typeof e)return e;var r=[];return Object.forEach(e,function(e,n){"function"!=typeof n&&r.push(P(e)+"="+(n!=t?P(n):""))}),r.join("&")}function n(t){for(var e=[],n=arguments,i=1,o=n.length;o>i;i++){var a=n[i];a&&e.push(r(a))}var c=t.indexOf("#"),s="";-1!=c&&(s=t.slice(c),t=t.slice(0,c));var u=e.join("&");return u&&(t+=(t.contains("?")?"&":"?")+u),t+s}function i(t){if(t||(t=location.search),"?"==t.charAt(0)&&(t=t.slice(1)),!t)return{};for(var r=t.split("&"),n={},i=0,o=r.length;o>i;i++)if(r[i]){var a=r[i].split("="),c=a[0],s=a[1];c&&(n[e(c)]=s?e(s):"")}return n}function o(t){return T(t)?r(t):i(t)}function a(t){t||(t=location.hash);var e,r=t;if(t){var n=t.indexOf("!/");-1!=n&&(r=t.slice(0,n),e=t.slice(n+2))}return{nav:r,param:e}}function c(t){var e=(t||location.pathname).toLowerCase().replace(/\\/g,"/"),r=e.lastIndexOf("/");return-1!=r?e.slice(r+1):e}function s(e,r,i,o){var a=E(e),c=a.length;if(!(0>=c)){i=i||{},T(r)&&(i=r,r=i.complete);var s=i.init||o,u=0,l=function(t,e){J[t]!=$&&(J[t]=$,i.removed&&U.removeChild(e),_(i.after,e,t,e),f(t))},f=function(e){++u>=c&&_(r,t,e)};a.forEach(function(t){if(i.cache===!1&&(t=n(t,"_="+ ++z)),i.once!==!1&&J[t])return J[t]==$?f(t):H(function(){return J[t]==$},function(){f(t)});var e=s(t);J[t]=q,e.onreadystatechange=function(){("loaded"==this.readyState||"complete"==this.readyState)&&l(t,this)},e.onload=function(){l(t,this)},_(i.before,e,t,e),U.insertBefore(e)}),a=null}}function u(t,e,r){s(t,e,r,function(t){var e=F.createElement("script");return e.type="text/javascript",e.src=t,e})}function l(t,e,r){s(t,e,r,function(t){var e=F.createElement("link");return e.type="text/css",e.rel="stylesheet",e.href=t,e})}function f(t){return Y[t]||t}function p(e){switch(D(e)){case"string":return'"'+e.replace(/[\x00-\x1f\\"]/g,f)+'"';case"list":case"array":for(var r=[],n=0,i=e.length;i>n;n++)"function"!=typeof e[n]&&r.push(e[n]!=t?p(e[n]):X);return"["+r+"]";case"object":case"arguments":var r=[];for(var o in e)V.call(e,o)&&"function"!=typeof e[o]&&r.push('"'+o+'":'+p(e[o]));return"{"+r.toString()+"}";case"boolean":return e+"";case"number":return isFinite(e)?e+"":X;case"date":return isFinite(e.valueOf())?e.toUTC().format("yyyy-MM-ddThh:mm:ss.SZ"):X;case"function":return;default:return"object"==typeof e?"{}":X}}function h(t,e){if(e!==!1&&!/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))throw new Error("JSON SyntaxError");try{return new Function("return "+t)()}catch(r){}}function d(t){return 0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")),e(t.replace(/\+/g," "))}function g(r){for(var n=r?t:{},i=F.cookie?F.cookie.split("; "):[],o=0,a=i.length;a>o;o++){var c=i[o].split("="),s=e(c[0]),u=c.slice(1).join("=");if(r&&r===s){n=d(u);break}r||(u=d(u))===t||(n[s]=u)}return n}function m(t,e,r){r=r||{};var n=r.expires;"number"==typeof n&&(n=(new Date).add("d",n)),F.cookie=[P(t),"=",P(e),n?"; expires="+n.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}function v(e){g(e)!=t&&m(e,"",{expires:-1})}function y(){for(var t=F.cookie?F.cookie.split("; "):[],r=0,n=t.length;n>r;r++){var i=t[r].split("="),o=e(i[0]);v(o)}}function b(e,r){var n="sessionStorage"!=e;if(n||location.host){var i=e,o=R[i],a=o&&"getItem"in o?"storage":null;if(!a){var c=F.documentElement,s="_Q_";try{c.addBehavior("#default#userdata"),n&&(c.expires=(new Date).add("d",7).toUTCString()),i=location.hostname||"local",c.save(i),o={getItem:function(t){return c.load(i),c.getAttribute(t)},setItem:function(t,e){c.setAttribute(t,e),c.save(i)},removeItem:function(t){c.removeAttribute(t),c.save(i)},clear:function(){c.load(i);var t=(new Date).add("d",-1);c.expires=t.toUTCString(),c.save(i)}},o.getItem(s)===t&&(o.setItem(s,1),o.removeItem(s)),a="userdata"}catch(u){}!a&&r&&(o={getItem:g,setItem:n?function(t,e){m(t,e,{expires:7})}:m,removeItem:v,clear:y},a="cookie")}var l=!!a,f={support:l,adapter:a,get:function(e,r){if(l)try{var n=o.getItem(e);return r?n?JSON.parse(n):null:n}catch(i){}return t},set:function(t,e){if(l)try{return o.setItem(t,"string"==typeof e?e:JSON.stringify(e)),!0}catch(r){}return!1},remove:function(t){if(l)try{return o.removeItem(t),!0}catch(e){}return!1},clear:function(){if(l)try{return o.clear(),!0}catch(t){}return!1}};return f}}function w(t){return t>=65&&90>=t||32==t||229==t||t>=48&&57>=t||t>=96&&111>=t&&108!=t?!0:t>=186&&192>=t||t>=219&&222>=t?!0:8==t||46==t?!0:!1}function x(e){if(!N(e))return!0;var r=RegExp.lastMatch.length,n=e.indexOf("/",r),i=e.slice(0,-1!=n?n:t);return i.toLowerCase()==(location.protocol+"//"+location.host).toLowerCase()}function k(){if(R.getSelection){var t=getSelection();t.removeAllRanges?t.removeAllRanges():t.empty&&t.empty()}else F.selection&&F.selection.empty()}function j(t){H(function(){return F.body},t)}function S(){Q.body=O=F.body,Q.root=M=W?O:B}var O,M,I,T=Q.isObject,A=Q.isFunc,N=Q.isHttpURL,D=Q.type,E=Q.makeArray,C=Q.extend,_=Q.fire,L=Q.async,H=Q.waitFor,R=Q.G,F=R.document,B=F.documentElement,U=F.head||F.getElementsByTagName("head")[0],W="BackCompat"==F.compatMode,P=encodeURIComponent,J={},z=Date.now(),q=1,$=2,K="unknown",G={};R.ActiveXObject||R.msIndexedDB?(G.ie=I=F.documentMode||(R.XMLHttpRequest?7:6),G["ie"+(6>I?6:I)]=!0,K="trident"):R.opera?K="opera":R.mozInnerScreenX!=t||A(F.getBoxObjectFor)?K="gecko":(R.WebKitPoint||R.devicePixelRatio)&&(K="webkit"),G[K]=!0,C(Q,G),G.name=K;var V=Object.prototype.hasOwnProperty,Y={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},X="null";R.JSON||(R.JSON={stringify:p,parse:h}),JSON.encode=p,JSON.decode=h;var Z={get:g,set:m,remove:v,clear:y},tt={getSize:function(){return{width:M.clientWidth,height:M.clientHeight}},getWidth:function(){return M.clientWidth},getHeight:function(){return M.clientHeight},getScrollWidth:function(){return Math.max(B.scrollWidth,O.scrollWidth)},getScrollHeight:function(){return Math.max(B.scrollHeight,O.scrollHeight)},getScrollLeft:function(){return B.scrollLeft||O.scrollLeft},getScrollTop:function(){return B.scrollTop||O.scrollTop}};C(Q,{html:B,head:U,quirk:W,ready:j,encode:P,decode:e,param:o,join:n,parseHash:a,getPageName:c,loadJS:u,loadCSS:l,engine:G,isInputKey:w,isSameHost:x,clearSelection:k,cookie:Z,store:new b("localStorage",!0),session:new b("sessionStorage",!0),view:tt,Storage:b}),F.body?S():L(S,0),R.request=i()}(),function(t){"use strict";function e(e){var n=e.box,i=e.process,o=e.pad?2:1,a=e.time,c=e.step||1,s=e.sleep||1e3,u=e.join||"",l=e.units||["天","小时","分","秒"];if((n||i)&&a!=t&&!isNaN(a)){var f,p=+a,h=function(t,e){return t>9||1==e?t:"0"+t},d=function(){if(p+=c,!(0>p)){var e=Date.parts(p),a=e.days,g=e.hours,m=e.mintues,v=e.seconds,y=a+l[0]+u+h(g,o)+l[1]+u+h(m,o)+l[2]+u+h(v,o)+l[3],b=r(i,t,p,y,a,g,m,v);b!==!1&&(n&&(n.innerHTML="string"==typeof b?b:y),f=setTimeout(d,s))}};d();var g={start:d,stop:function(){f&&clearTimeout(f)}};return g}}var r=Q.fire;Q.setTimer=e}();