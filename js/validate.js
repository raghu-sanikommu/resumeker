/*<script >var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:
    !1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIM
    PLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a==
    Array.prototype||a==Object.prototype)return a;a[b]=d.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof
     self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";$jscomp.polyfill=function(a,b,d,c){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,d,c):$jscomp.polyfillUnisolated(a,b,d,c))};
$jscomp.polyfillUnisolated=function(a,b){var d=$jscomp.global;a=a.split(".");for(var c=0;c<a.length-1;c++){var e=a[c];if(!(e in d))
    return;d=d[e]}a=a[a.length-1];c=d[a];b=b(c);b!=c&&null!=b&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,d)
{var c=a.split(".");a=1===c.length;var e=c[0];e=!a&&e in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var f=0;f<c.length-1;f++){var g=c[f];if(!(g in e))return;e=e[g]}c=c[c.length-1];d=$jscomp.IS_SYMBOL_NATIVE&&"es6"===d?e[c]:null;b=b(d);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,c,{configurable:!0,writable:!0,value:b}):b!==d&&($jsco
    mp.propertyToPolyfillSymbol[c]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(c):$jscomp.POLYFILL_PREFIX+c,
c=$jscomp.propertyToPolyfillSymbol[c],$jscomp.defineProperty(e,c,{configurable:!0,writable:!0,value:b})))};$jscomp.initSymbol=function()
{};
$jscomp.polyfill("Symbol",function(a){if(a)return a;var
     b=function(e,f){this.$jscomp$symbol$id_=e;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:f})};b.prototype.toString=function()
{return this.$jscomp$symbol$id_};var d=0,c=function(e){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new b("jscomp_symbol_"+(e||"")+"_"+d++,e)};return c},"es6","es3");$jscomp.initSymbolIterator=function(){};
$jscomp.polyfill("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float6
4Array".split(" "),d=0;d<b.length;d++){var c=$jscomp.global[
    b[d]];"function"===typeof c&&"function"!=typeof c.prototype[a]&&$jscomp.defineProperty(c.prototype,a,{configurable:!0,writable:!0,value:function(){re
    turn $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return a},"es6",
"es3");$jscomp.initSymbolAsyncIterator=function(){};$jscomp.iteratorPrototype=function(a){a={next:a};a[Symbol.i
    terator]=function(){return this};return a};$jscomp.iteratorFromArray=function(a,b){a instanceof String&&(a+="");var d=0,c={next:function()
        {if(d<a.length){var e=d++;retu
    rn{value:b(e,a[e]),done:!1}}c.next=function(){return{done:!0,value:void 0}};return c.next()}};c[Symbol.
    iterator]=function(){return c};return c};
$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:a=function()
    {return $jscomp.iteratorFromArray(this,funct
    ion(b){return b})}},"es6","es3"
);window.yterr=window.yterr||!0;window.unhandledErrorMessages={};window.unhandledErrorCount=0;
window.onerror=function(a,b,d,c
    ,e){e||(e=Error(),e.message=a,e.fileName=b,e.lineNumber=d,isNaN(c)||(e.columnNumber=c));b=String(e.message);if(!(!e.message||
        b in window.unhandledErrorMessages||5<=window.unhandledErrorCount)){windo

        w.unhandledErrorCount+=1;window.unhandledErrorMessages[b]=!0;a=new Image;window.emergencyTimeoutImg=a;a.onload=a.o
        nerror=function(){delete window.emergencyTimeoutImg};e={msg:b,type:"UnhandledWindow"+e.name,file:e.fileName,line:e.lineNumber,stack:(e.stack||"").substr(0,500)};
b=[window.ytcfg.get("EMERGENCY_BASE_URL","https://www.youtube.com/error_204?t=jserror&level=ERROR")];for(var f in e)(d=e[f])&&b.push(f+"="+encodeURIComponent(d));a.src=b.join("&")}};
(function(){function a(f){var g=this._nativePrototypes[f];if(!g){g=Object.create(this.getNativePrototype(f));for(var l=Object.getOwnPropertyNam
    es(window.Polymer.Base),k=0,h;k<l.length&&(h=l[k]);k++)if
    (!window.Polymer.BaseDescriptors[h])try{g[h]=window.Polymer.Base[h]}catch(m){throw Error("Error while copying pro
perty: "+h+". Tag is "+f);}try{Object.defineProperties(g,window.Polymer.BaseDescriptors)}catch(m){throw Error("Polymer define property failed for "+Object.keys(g));}this._nativePrototypes[f]=
g}return g}function b(f){window.onerror(f,window.location.href,0,0,Error(Array.prototype.join.call(arguments,",")))}v
ar d=window.Polymer,c=function(f){!d
    ._ytIntercepted&&window.Polymer.Base&&(d._ytIntercepted=!0,window.Polymer.Base._getExtendedNativePrototype=a,window.P
        olymer.Base._error=b,window.Polymer.Base._warn=b);return d.apply(this,arguments)},e=Object.ge
        tOwnPropertyDescriptor(window,"Pol
        ymer");Object.defineProperty(window,"Poly
    mer",{set:function(f){e&&e.set&&e.get?(e.se
        t(f),d=e.get()):d=f;
"function"==typeof d&&Object.defineProperty(window,"Polymer",{value:d,configurable:!0,enumerable:!0,writable:!0})},get:function(){return"function"==typeof d?c:d},configurable:!0,enumerable:!0})})();
<script >window.ShadyCSS = {disableRuntime: true};window.ShadyDOM = {force: true};window.ShadyDOM.preferPerformance = true;window.ShadyDOM
.noPatch = true;window.Polymer = (window.Polymer || {});window.Pol
ymer.legacyOptimizations = true;</script><link rel="sho
rtcut icon" href="https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico" type="image/x-icon" ><link rel="icon" href="https://
s.ytimg.com/yts/img/favicon_32-vflOogEID.png" sizes="32x32" ><link rel="icon" href="https://s.ytimg.com/yts/img/favicon_48-vflVjB_Qk.png" sizes="48x48" ><link rel="icon" href="https://s.ytimg.com/yts/img/fa
vicon_96-vflW9Ec
0w.png" sizes="96x96" ><link rel="icon" href="https://s.ytimg.com/yts/img/favicon_144-vfliLAfaB.png" sizes="144x144" ><title>Yo
uTube</title><script >var ytcsi = {gt: function(n) {n = (n || '') + 'data_';return ytcsi[n] || (ytcsi[n] = {tick: {},info: {}});},n
ow: (window.performance && window.performance.timing &&window.performance.now && window.performance.t
    iming.navigationStart) ?function() {return window.performance.timing.navigationStart +window.performance.now();}
 :function() {return (new Date()
    ).getTime();},tick: function(l, t, n) {ticks = ytcsi.gt(n).tick;var v = t || y
    tcsi.now();if (ticks[l]) {ticks['_' + l] = (ticks['_' + l] || [ticks[l]]);ticks['_' + l].push(v);}ticks[l] = v;},info: function(k, v, n) {ytcsi.gt(n).info[k] = v;},setStart: function(s, t, n) {ytcsi.info('yt_sts', s, n);ytcsi.tick('_start', t, n);}};(function(w, d) {ytcsi.
        setStart('dhs', w.performance ? w.performanc
        e.timing.responseStart : null);var isPrerender = (d.visibilityState || d.webkitVisibilityState) == 'prerender';var vName = (!d.visibilityState && d.webkitVisibilitySta
            te)? 'webkitvisibilitychange' : 'visibilityc
            hange';if (isPrerender) {ytcsi.info('prerender', 1);var startTick = function() {ytcsi.setStart('dhs');d.removeEventListener(vName, startTick);};d.addEventListener(vName, startT
                ick, false);}if (d.addEventListener) {d.addEventListener(vName, function() {ytcsi.tick('vc');}, false);}function isG
        ecko() {if (!w.navigator || !w
            .navigator.userAgent) {return false;}var ua = w.navigator.userAgent;return ua.indexOf('Gec
            ko') > 0 &&ua.toLowerCase().indexOf('webkit') < 0 &&ua.indexOf('Edge') < 0 &&ua.indexOf('Trident') < 0 &&ua.indexOf('MSIE') <
             0;}if (isGecko()) {var isHidden = (d.visibilityState || d.webkitVisibilityState) == 'hidden';if (isHidden) {ytcsi.tick('vc');}}var slt = 
            function(el, t) {setTimeout(function() {var n = ytcsi.now();el.loadTime = n;if (el.slt) {el.slt();}}, t);};w.__yt
            RIL = function(el) {if (!el.getAttribute('data-thumb')) {if (w.requestAnimationFrame) {w.requestAnimationFrame(function() {slt(el, 0);});} else {slt(el, 16);}}
        };})(window, document);</script><link rel="preload" href= "https://i.ytimg.com/generate_204" as="fetch">  
<script  src="/yts/jsbin/web-animations-next-lite.min-vflKXbQMP/web-animations-next-lite.min.js" type="text/javascript" name="web-animations-next-lite.min/web-animations-next-lite.min" ></script>  
*/