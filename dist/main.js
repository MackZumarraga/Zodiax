!function(){var t={8073:function(t,e){e.V=[{Zodiac:"Aries",HP:100,MP:50,Magic:"Fiery Whip",MagicDamage:50,Vulnerability:"Virgo",Element:"Fire",Image:"src/canvas/zodiac/zodiac-signs-3231771_640.png"},{Zodiac:"Taurus",HP:100,MP:50,Magic:"Nature's Wrath",MagicDamage:50,Vulnerability:"Aries",Element:"Earth",Image:"src/canvas/zodiac/zodiac-signs-3231766_640.png"},{Zodiac:"Gemini",HP:100,MP:50,Magic:"Nether Storm",MagicDamage:50,Vulnerability:"Pisces",Element:"Air",Image:"src/canvas/zodiac/zodiac-signs-3231780_640.png"},{Zodiac:"Cancer",HP:100,MP:50,Magic:"Lunar Rupture",MagicDamage:50,Vulnerability:"Aquarius",Element:"Water",Image:"src/canvas/zodiac/zodiac-signs-3231776_640.png"},{Zodiac:"Leo",HP:100,MP:50,Magic:"Illusion of the Sun",MagicDamage:50,Vulnerability:"Capricorn",Element:"Fire",Image:"src/canvas/zodiac/zodiac-signs-3231765_640.png"},{Zodiac:"Virgo",HP:100,MP:50,Magic:"Savagery Rune",MagicDamage:50,Vulnerability:"Gemini",Element:"Earth",Image:"src/canvas/zodiac/zodiac-signs-3231770_640.png"},{Zodiac:"Libra",HP:100,MP:50,Magic:"Reprisal of Souls",MagicDamage:50,Vulnerability:"Cancer",Element:"Air",Image:"src/canvas/zodiac/zodiac-signs-3231761_640.png"},{Zodiac:"Scorpio",HP:100,MP:50,Magic:"Shadow Rage",MagicDamage:50,Vulnerability:"Leo",Element:"Water",Image:"src/canvas/zodiac/zodiac-signs-3231779_640.png"},{Zodiac:"Sagittarius",HP:100,MP:50,Magic:"Frenzy of Heaven",MagicDamage:50,Vulnerability:"Taurus",Element:"Fire",Image:"src/canvas/zodiac/zodiac-signs-3231754_640.png"},{Zodiac:"Capricorn",HP:100,MP:50,Magic:"Annihilation Surge",MagicDamage:50,Vulnerability:"Sagittarius",Element:"Earth",Image:"src/canvas/zodiac/zodiac-signs-3231763_640.png"},{Zodiac:"Aquarius",HP:100,MP:50,Magic:"Ice Rupture",MagicDamage:50,Vulnerability:"Scorpio",Element:"Air",Image:"src/canvas/zodiac/zodiac-signs-3231753_640.png"},{Zodiac:"Pisces",HP:100,MP:50,Magic:"Sweet Dreams",MagicDamage:50,Vulnerability:"Libra",Element:"Water",Image:"src/canvas/zodiac/zodiac-signs-3231760_640.png"}]},9662:function(t,e,n){var r=n(7854),o=n(614),i=n(6330),a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},1223:function(t,e,n){var r=n(5112),o=n(30),i=n(3070),a=r("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},9670:function(t,e,n){var r=n(7854),o=n(111),i=r.String,a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},1285:function(t,e,n){"use strict";var r=n(7908),o=n(1400),i=n(6244);t.exports=function(t){for(var e=r(this),n=i(e),a=arguments.length,c=o(a>1?arguments[1]:void 0,n),s=a>2?arguments[2]:void 0,u=void 0===s?n:o(s,n);u>c;)e[c++]=t;return e}},8533:function(t,e,n){"use strict";var r=n(2092).forEach,o=n(9341)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),a=function(t){return function(e,n,a){var c,s=r(e),u=i(s),l=o(a,u);if(t&&n!=n){for(;u>l;)if((c=s[l++])!=c)return!0}else for(;u>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:function(t,e,n){var r=n(9974),o=n(1702),i=n(8361),a=n(7908),c=n(6244),s=n(5417),u=o([].push),l=function(t){var e=1==t,n=2==t,o=3==t,l=4==t,f=6==t,p=7==t,h=5==t||f;return function(d,y,m,g){for(var v,b,x=a(d),S=i(x),w=r(y,m),M=c(S),E=0,P=g||s,L=e?P(d,M):n||p?P(d,0):void 0;M>E;E++)if((h||E in S)&&(b=w(v=S[E],E,x),t))if(e)L[E]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return E;case 2:u(L,v)}else switch(t){case 4:return!1;case 7:u(L,v)}return f?-1:o||l?l:L}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},1194:function(t,e,n){var r=n(7293),o=n(5112),i=n(7392),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},9341:function(t,e,n){"use strict";var r=n(7293);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},7475:function(t,e,n){var r=n(7854),o=n(3157),i=n(4411),a=n(111),c=n(5112)("species"),s=r.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,(i(e)&&(e===s||o(e.prototype))||a(e)&&null===(e=e[c]))&&(e=void 0)),void 0===e?s:e}},5417:function(t,e,n){var r=n(7475);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,n){var r=n(7854),o=n(1694),i=n(614),a=n(4326),c=n(5112)("toStringTag"),s=r.Object,u="Arguments"==a(function(){return arguments}());t.exports=o?a:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=s(t),c))?n:u?a(e):"Object"==(r=a(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),a=n(3070);t.exports=function(t,e){for(var n=o(e),c=a.f,s=i.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||c(t,l,s(e,l))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:function(t,e,n){"use strict";var r=n(4948),o=n(3070),i=n(9114);t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,e,n){var r=n(317)("span").classList,o=r&&r.constructor&&r.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,i=n(7854),a=n(8113),c=i.process,s=i.Deno,u=c&&c.versions||s&&s.version,l=u&&u.v8;l&&(o=(r=l.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(1320),c=n(3505),s=n(9920),u=n(4705);t.exports=function(t,e){var n,l,f,p,h,d=t.target,y=t.global,m=t.stat;if(n=y?r:m?r[d]||c(d,{}):(r[d]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(h=o(n,l))&&h.value:n[l],!u(y?l:d+(m?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;s(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),a(n,l,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,e,n){var r=n(1702),o=n(9662),i=r(r.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?i(t,e):function(){return t.apply(e,arguments)}}},6916:function(t){var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),s=c&&"something"===function(){}.name,u=c&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:s,CONFIGURABLE:u}},1702:function(t){var e=Function.prototype,n=e.bind,r=e.call,o=n&&n.bind(r);t.exports=n?function(t){return t&&o(r,t)}:function(t){return t&&function(){return r.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7854),o=n(1702),i=n(7293),a=n(4326),c=r.Object,s=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?s(t,""):c(t)}:c},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,a=n(8536),c=n(7854),s=n(1702),u=n(111),l=n(8880),f=n(2597),p=n(5465),h=n(6200),d=n(3501),y="Object already initialized",m=c.TypeError,g=c.WeakMap;if(a||p.state){var v=p.state||(p.state=new g),b=s(v.get),x=s(v.has),S=s(v.set);r=function(t,e){if(x(v,t))throw new m(y);return e.facade=t,S(v,t,e),e},o=function(t){return b(v,t)||{}},i=function(t){return x(v,t)}}else{var w=h("state");d[w]=!0,r=function(t,e){if(f(t,w))throw new m(y);return e.facade=t,l(t,w,e),e},o=function(t){return f(t,w)?t[w]:{}},i=function(t){return f(t,w)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}}}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,e,n){var r=n(1702),o=n(7293),i=n(614),a=n(648),c=n(5005),s=n(2788),u=function(){},l=[],f=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,h=r(p.exec),d=!p.exec(u),y=function(t){if(!i(t))return!1;try{return f(u,l,t),!0}catch(t){return!1}};t.exports=!f||o((function(){var t;return y(y.call)||!y(Object)||!y((function(){t=!0}))||t}))?function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!h(p,s(t))}:y},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,a=function(t,e){var n=s[c(t)];return n==l||n!=u&&(o(e)?r(e):!!e)},c=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},s=a.data={},u=a.NATIVE="N",l=a.POLYFILL="P";t.exports=a},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(7854),o=n(5005),i=n(614),a=n(7976),c=n(3307),s=r.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&a(e.prototype,s(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},133:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),o=n(614),i=n(2788),a=r.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},30:function(t,e,n){var r,o=n(9670),i=n(6048),a=n(748),c=n(3501),s=n(490),u=n(317),l=n(6200)("IE_PROTO"),f=function(){},p=function(t){return"<script>"+t+"<\/script>"},h=function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e},d=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,e;d="undefined"!=typeof document?document.domain&&r?h(r):((e=u("iframe")).style.display="none",s.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F):h(r);for(var n=a.length;n--;)delete d.prototype[a[n]];return d()};c[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=o(t),n=new f,f.prototype=null,n[l]=t):n=d(),void 0===e?n:i(n,e)}},6048:function(t,e,n){var r=n(9781),o=n(3070),i=n(9670),a=n(5656),c=n(1956);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=a(e),s=c(e),u=s.length,l=0;u>l;)o.f(t,n=s[l++],r[n]);return t}},3070:function(t,e,n){var r=n(7854),o=n(9781),i=n(4664),a=n(9670),c=n(4948),s=r.TypeError,u=Object.defineProperty;e.f=o?u:function(t,e,n){if(a(t),e=c(e),a(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw s("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),a=n(9114),c=n(5656),s=n(4948),u=n(2597),l=n(4664),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=s(e),l)try{return f(t,e)}catch(t){}if(u(t,e))return a(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,c=n(3501),s=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,l=[];for(n in r)!o(c,n)&&o(r,n)&&s(l,n);for(;e.length>u;)o(r,n=e[u++])&&(~a(l,n)||s(l,n));return l}},1956:function(t,e,n){var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},288:function(t,e,n){"use strict";var r=n(1694),o=n(648);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},2140:function(t,e,n){var r=n(7854),o=n(6916),i=n(614),a=n(111),c=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&i(n=t.toString)&&!a(r=o(n,t)))return r;if(i(n=t.valueOf)&&!a(r=o(n,t)))return r;if("string"!==e&&i(n=t.toString)&&!a(r=o(n,t)))return r;throw c("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),a=n(5181),c=n(9670),s=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(c(t)),n=a.f;return n?s(e,n(t)):e}},1320:function(t,e,n){var r=n(7854),o=n(614),i=n(2597),a=n(8880),c=n(3505),s=n(2788),u=n(9909),l=n(6530).CONFIGURABLE,f=u.get,p=u.enforce,h=String(String).split("String");(t.exports=function(t,e,n,s){var u,f=!!s&&!!s.unsafe,d=!!s&&!!s.enumerable,y=!!s&&!!s.noTargetGet,m=s&&void 0!==s.name?s.name:e;o(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||l&&n.name!==m)&&a(n,"name",m),(u=p(n)).source||(u.source=h.join("string"==typeof m?m:""))),t!==r?(f?!y&&t[e]&&(d=!0):delete t[e],d?t[e]=n:a(t,e,n)):d?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||s(this)}))},4488:function(t,e,n){var r=n(7854).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3505),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?n:e)(r)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(7854),o=n(4488),i=r.Object;t.exports=function(t){return i(o(t))}},7593:function(t,e,n){var r=n(7854),o=n(6916),i=n(111),a=n(2190),c=n(8173),s=n(2140),u=n(5112),l=r.TypeError,f=u("toPrimitive");t.exports=function(t,e){if(!i(t)||a(t))return t;var n,r=c(t,f);if(r){if(void 0===e&&(e="default"),n=o(r,t,e),!i(n)||a(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},6330:function(t,e,n){var r=n(7854).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),c=n(133),s=n(3307),u=o("wks"),l=r.Symbol,f=l&&l.for,p=s?l:l&&l.withoutSetter||a;t.exports=function(t){if(!i(u,t)||!c&&"string"!=typeof u[t]){var e="Symbol."+t;c&&i(l,t)?u[t]=l[t]:u[t]=s&&f?f(e):p(e)}return u[t]}},2222:function(t,e,n){"use strict";var r=n(2109),o=n(7854),i=n(7293),a=n(3157),c=n(111),s=n(7908),u=n(6244),l=n(6135),f=n(5417),p=n(1194),h=n(5112),d=n(7392),y=h("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",v=o.TypeError,b=d>=51||!i((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),x=p("concat"),S=function(t){if(!c(t))return!1;var e=t[y];return void 0!==e?!!e:a(t)};r({target:"Array",proto:!0,forced:!b||!x},{concat:function(t){var e,n,r,o,i,a=s(this),c=f(a,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(S(i=-1===e?a:arguments[e])){if(p+(o=u(i))>m)throw v(g);for(n=0;n<o;n++,p++)n in i&&l(c,p,i[n])}else{if(p>=m)throw v(g);l(c,p++,i)}return c.length=p,c}})},3290:function(t,e,n){var r=n(2109),o=n(1285),i=n(1223);r({target:"Array",proto:!0},{fill:o}),i("fill")},8309:function(t,e,n){var r=n(9781),o=n(6530).EXISTS,i=n(1702),a=n(3070).f,c=Function.prototype,s=i(c.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=i(u.exec);r&&!o&&a(c,"name",{configurable:!0,get:function(){try{return l(u,s(this))[1]}catch(t){return""}}})},1539:function(t,e,n){var r=n(1694),o=n(1320),i=n(288);r||o(Object.prototype,"toString",i,{unsafe:!0})},4747:function(t,e,n){var r=n(7854),o=n(8324),i=n(8509),a=n(8533),c=n(8880),s=function(t){if(t&&t.forEach!==a)try{c(t,"forEach",a)}catch(e){t.forEach=a}};for(var u in o)o[u]&&s(r[u]&&r[u].prototype);s(i)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(8309),n(2222);var e=function e(n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t(this,"attacked",(function(){r.hp-r.attackDamage<=0?r.hp=0:(r.hp-=r.attackDamage,console.log(r.hp),console.log(r))})),t(this,"magicked",(function(){r.hp-r.MagicDamage<=0?r.hp=0:(r.hp-=r.MagicDamage,console.log(r.hp),console.log(r))})),t(this,"healed",(function(){r.hp+r.healAmount>100?r.hp=100:r.hp+=r.healAmount,console.log(r.hp),console.log(r)})),this.zodiac=n,this.name=n.Zodiac,this.hp=100,this.MagicDamage=Math.floor(15*Math.random()+35),this.attackDamage=Math.floor(15*Math.random()+5),this.healAmount=Math.floor(10*Math.random()+10),this.zodiacPath=n.Image};function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n(8073).V,a=function(){function t(n){var r=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"resetBattle",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.character;r.character=t,r.player=new e(i[r.character]),r.opponent=new e(i[Math.floor(12*Math.random())]);var n=document.querySelector("container"),o=document.querySelector("enemy");n.style="display: block",o.style="display: block";var a=document.querySelector(".command");a.style="display: flex";var c=document.querySelector(".main");c.style="display: none",document.querySelector(".won"),document.querySelector(".lost");var s=document.querySelector(".hp"),u=document.querySelector(".enemy_hp"),l=document.querySelector(".zodiac"),f=document.querySelector(".enemy_zodiac");s.style="display: flex",u.style="display: flex",l.style="display: flex",f.style="display: flex",r.init()})),o(this,"aiResponseAttack",(function(){r.opponent.attacked(),r.OpponentHPTag.innerHTML=r.opponent.hp;var t=document.createElement("div");t.innerHTML=" Waiting...",document.querySelector(".zodiac").append(t),r.opponent.hp<30?(r.player.magicked(),r.ZodiacHPTag.innerHTML=r.player.hp,t.style="display: none"):(r.player.attacked(),r.ZodiacHPTag.innerHTML=r.player.hp,t.style="display: none"),0===r.player.hp?r.gameOver():0===r.opponent.hp&&r.gameWon()})),o(this,"aiResponseMagick",(function(){console.log(r.opponent.hp,r.player.hp),r.opponent.magicked(),r.OpponentHPTag.innerHTML=r.opponent.hp;var t=document.createElement("div");t.innerHTML=" Waiting...",document.querySelector(".zodiac").append(t),r.opponent.hp<30?(r.player.magicked(),r.ZodiacHPTag.innerHTML=r.player.hp,t.style="display: none"):(r.player.attacked(),r.ZodiacHPTag.innerHTML=r.player.hp,t.style="display: none"),0===r.player.hp?r.gameOver():0===r.opponent.hp&&r.gameWon()})),o(this,"aiResponseHeal",(function(){r.player.healed(),r.ZodiacHPTag.innerHTML=r.player.hp;var t=document.createElement("div");t.innerHTML=" Waiting...",document.querySelector(".zodiac").append(t),r.opponent.hp<20?(r.player.magicked(),r.ZodiacHPTag.innerHTML=r.player.hp,t.style="display: none"):(r.player.attacked(),r.ZodiacHPTag.innerHTML=r.player.hp,t.style="display: none"),0===r.player.hp?r.gameOver():0===r.opponent.hp&&r.gameWon()})),this.gameState=0,0===this.gameState){var a=document.querySelector(".main");a.addEventListener("click",(function(){a.style="display: none",r.gameState+=1}))}this.character=n;var c=i[n],s=i[Math.floor(12*Math.random())];this.player=new e(c),this.opponent=new e(s),this.ZodiacHPTag=null,this.OpponentHPTag=null,console.log(this.player),console.log(this.opponent),console.log("player is ".concat(this.player.name)),console.log("opponent is ".concat(this.opponent.name)),console.log("the hp of ".concat(this.player.name," is ").concat(this.player.hp)),console.log("the hp of ".concat(this.opponent.name," is ").concat(this.player.hp)),this.init()}var n,a;return n=t,(a=[{key:"init",value:function(){var t=document.querySelector(".attack"),e=document.querySelector(".magic"),n=document.querySelector(".heal");t.addEventListener("click",this.aiResponseAttack),e.addEventListener("click",this.aiResponseMagick),n.addEventListener("click",this.aiResponseHeal),document.querySelector(".zodiac").innerHTML=this.player.name,this.ZodiacHPTag=document.querySelector(".hp"),this.ZodiacHPTag.innerHTML=this.player.hp,document.querySelector(".enemy_zodiac").innerHTML=this.opponent.name,this.OpponentHPTag=document.querySelector(".enemy_hp"),this.OpponentHPTag.innerHTML=this.opponent.hp}},{key:"gameOver",value:function(){return this.gameState+=1,document.querySelector(".lost").style="display: block",!0}},{key:"gameWon",value:function(){return this.gameState+=1,document.querySelector(".won").style="display: block",!0}}])&&r(n.prototype,a),t}(),c=a;function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.battle=null,this.init=this.init.bind(this),this.turnsCounter=0,this.init(),this.animation=0}var e,n;return e=t,n=[{key:"startGame",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.battle=new c(e),this.animation+=1;var n=document.querySelector("container"),r=document.querySelector("enemy");n.style="display: block",r.style="display: block";var o=document.querySelector(".command");o.style="display: flex";var i=document.querySelector(".main");i.style="display: none";var a=document.querySelector(".won"),s=document.querySelector(".lost"),u=document.querySelector(".hp"),l=document.querySelector(".enemy_hp"),f=document.querySelector(".zodiac"),p=document.querySelector(".enemy_zodiac");u.style="display: flex",l.style="display: flex",f.style="display: flex",p.style="display: flex";var h=document.querySelector(".restart_won"),d=document.querySelector(".restart_lost");document.querySelector(".round"),h.addEventListener("click",(function(){n.style="display: none",r.style="display: none",u.style="display: none",l.style="display: none",f.style="display: none",p.style="display: none",o.style="display: none",a.style="display: none",i.style="display: block",t.turnsCounter+=1,t.animation=1,t.battle.resetBattle()})),d.addEventListener("click",(function(){n.style="display: none",r.style="display: none",u.style="display: none",l.style="display: none",f.style="display: none",p.style="display: none",o.style="display: none",s.style="display: none",i.style="display: block",t.turnsCounter=1,t.animation=0,t.init()}))}},{key:"init",value:function(){var t=this;document.getElementById("0").addEventListener("click",(function(){0===t.turnsCounter?(t.startGame(0),t.animation=1):(console.log("this is battle ".concat(t.turnsCounter+1)),t.battle.resetBattle(0),t.animation=1)})),document.getElementById("1").addEventListener("click",(function(){0===t.turnsCounter?t.startGame(1):(console.log("this is battle ".concat(t.turnsCounter+1)),t.battle.resetBattle(1),t.animation=1)})),document.getElementById("2").addEventListener("click",(function(){0===t.turnsCounter?t.startGame(2):(console.log("this is battle ".concat(t.turnsCounter+1)),t.battle.resetBattle(2),t.animation=1)})),document.getElementById("3").addEventListener("click",(function(){0===t.turnsCounter?t.startGame(3):(console.log("this is battle ".concat(t.turnsCounter+1)),t.battle.resetBattle(3),t.animation=1)})),document.getElementById("4").addEventListener("click",(function(){0===t.turnsCounter?t.startGame(4):(console.log("this is battle ".concat(t.turnsCounter+1)),t.battle.resetBattle(4),t.animation=1)})),document.getElementById("5").addEventListener("click",(function(){0===t.turnsCounter?t.startGame(5):(console.log("this is battle ".concat(t.turnsCounter+1)),t.battle.resetBattle(5),t.animation=1)})),document.getElementById("6").addEventListener("click",(function(){0===t.turnsCounter?t.startGame(6):(console.log("this is battle ".concat(t.turnsCounter+1)),t.battle.resetBattle(6),t.animation=1)})),document.getElementById("7").addEventListener("click",(function(){0===t.turnsCounter?t.startGame(7):(console.log("this is battle ".concat(t.turnsCounter+1)),t.battle.resetBattle(7),t.animation=1)})),document.getElementById("8").addEventListener("click",(function(){0===t.turnsCounter?t.startGame(8):(console.log("this is battle ".concat(t.turnsCounter+1)),t.battle.resetBattle(8),t.animation=1)})),document.getElementById("9").addEventListener("click",(function(){0===t.turnsCounter?t.startGame(9):(console.log("this is battle ".concat(t.turnsCounter+1)),t.battle.resetBattle(9),t.animation=1)})),document.getElementById("10").addEventListener("click",(function(){0===t.turnsCounter?t.startGame(10):(console.log("this is battle ".concat(t.turnsCounter+1)),t.battle.resetBattle(10),t.animation=1)})),document.getElementById("11").addEventListener("click",(function(){0===t.turnsCounter?t.startGame(11):(console.log("this is battle ".concat(t.turnsCounter+1)),t.battle.resetBattle(11),t.animation=1)}))}}],n&&s(e.prototype,n),t}(),l=u;function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n(1539),n(4747),n(3290);var p=function(){function t(e,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n,this.radius=r,this.color=o,this.ctx=i}var e,n;return e=t,(n=[{key:"draw",value:function(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.ctx.shadowColor=this.color,this.ctx.shadowBlur=10,this.ctx.fillStyle=this.color,this.ctx.fill(),this.ctx.closePath()}},{key:"update",value:function(){this.draw()}}])&&f(e.prototype,n),t}();function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var d=function(){function t(e,n,r,o,i,a){var c,s,u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.zodiacImgSrc;u.ctx.drawImage(u.zodiacImg,u.x,u.y,u.xsize,u.ysize),u.zodiacImg.src=t},(c="draw")in this?Object.defineProperty(this,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):this.draw=s,this.x=n,this.y=r,this.xsize=o,this.ysize=i,this.ctx=a,this.draw=this.draw.bind(this),this.zodiacImg=new Image,this.zodiacImgSrc=e,console.log("current from player is ".concat(this.zodiacImgSrc))}var e,n;return e=t,(n=[{key:"update",value:function(t){this.draw(t)}}])&&h(e.prototype,n),t}(),y=d;function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(8073).V;var g=function t(e,n,r){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,"animate",(function(){requestAnimationFrame(o.animate),o.ctx.fillStyle="rgba(10, 10, 10, 1)",o.ctx.fillRect(0,0,o.canvas.width,o.canvas.height),o.ctx.save(),o.ctx.translate(o.canvas.width/2,o.canvas.height/2),o.ctx.rotate(o.radians),o.particles.forEach((function(t){t.update()})),o.ctx.restore(),o.radians+=.001,1===o.game.animation&&(o.player.play(),o.enemy.play())})),m(this,"initParticles",(function(){for(var t=["#FFFFFF","#98FB98","#FFEFD5","#48D1CC"],e=0;e<200;e++){var n=o.canvas.width+300,r=o.canvas.height+300,i=Math.random()*n-n/2,a=Math.random()*r-r/2,c=2*Math.random(),s=t[Math.floor(Math.random()*t.length)];o.particles.push(new p(i,a,c,s,o.ctx))}console.log(o.particles)})),this.ctx=r,this.game=e,this.canvas=n,this.radians=0,this.particles=[],this.xplayer=this.canvas.width/4,this.yplayer=this.canvas.height/2.5,this.xenemy=this.canvas.width/1.6,this.yenemy=this.canvas.height/2.5,this.xsize=500,this.ysize=500,this.playerPath=null,this.enemyPath=null,this.player=new y(this.playerPath,this.xplayer,this.yplayer,this.xsize,this.ysize,this.ctx),this.enemy=new y(this.enemyPath,this.xenemy,this.yenemy,this.xsize,this.ysize,this.ctx),console.log("player from gameView ".concat(this.player)),console.log("enemy from gameView ".concat(this.enemy)),this.animate=this.animate.bind(this)};document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("canvas");t.width=innerWidth,t.height=innerHeight,addEventListener("resize",(function(){t.width=innerWidth,t.height=innerHeight}));var e=t.getContext("2d"),n=new l,r=new g(n,t,e);r.initParticles(),r.animate()}))}()}();
//# sourceMappingURL=main.js.map