!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("PICO",[],e):"object"==typeof exports?exports.PICO=e():t.PICO=e()}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function n(t,e){e=Object.assign({shiftfactor:.1,scalefactor:1.1,initialsize:.1,rotation:[0,30,330],threshold:.2,memory:1},e||{});var r=function(t){var e=new DataView(new ArrayBuffer(4)),r=8;e.setUint8(0,t[r+0]),e.setUint8(1,t[r+1]),e.setUint8(2,t[r+2]),e.setUint8(3,t[r+3]);var n=e.getInt32(0,!0),o=Math.pow(2,n)>>0;r+=4,e.setUint8(0,t[r+0]),e.setUint8(1,t[r+1]),e.setUint8(2,t[r+2]),e.setUint8(3,t[r+3]);var a=e.getInt32(0,!0);r+=4;for(var i=[],f=[],u=[],s=0;s<a;++s){var c;for(Array.prototype.push.apply(i,[0,0,0,0]),Array.prototype.push.apply(i,t.slice(r,r+4*Math.pow(2,n)-4)),r=r+4*Math.pow(2,n)-4,c=0;c<Math.pow(2,n);++c)e.setUint8(0,t[r+0]),e.setUint8(1,t[r+1]),e.setUint8(2,t[r+2]),e.setUint8(3,t[r+3]),f.push(e.getFloat32(0,!0)),r+=4;e.setUint8(0,t[r+0]),e.setUint8(1,t[r+1]),e.setUint8(2,t[r+2]),e.setUint8(3,t[r+3]),u.push(e.getFloat32(0,!0)),r+=4}for(var l=[],p=[],d=0;d<360;d++){var v=d*Math.PI/180;l[d]=256*Math.cos(v),p[d]=256*Math.sin(v)}return function(t,e,r,s,c,d){t<<=16,e<<=16;for(var v=0,h=0,y=s*p[r|=0],m=s*l[r],g=0;g<a;++g){for(var U=1,b=0;b<n;++b){var M=v+4*U,w=i[M+0],x=i[M+1],O=i[M+2],j=i[M+3],P=t+m*O-y*j>>16,A=e+y*O+m*j>>16;U=2*U+(c[(t+m*w-y*x>>16)*d+(e+y*w+m*x>>16)]<=c[P*d+A])}if((h+=f[o*g+U-o])<=u[g])return-1;v+=4*o}return h-u[a-1]}}(new Int8Array(t)),n=function(t){for(var e=0,r=[],n=0;n<t;++n)r.push([]);return function(t){r[e]=t,e=(e+1)%r.length,t=[];for(var n=0;n<r.length;++n)t=t.concat(r[n]);return t}}(e.memory);return function(t){var o=t.data,a=t.width,i=t.height,f=function(t,e,r,n){var o=t.length>>2,a=n?new Uint32Array(o):new Uint8Array(o),i=new Uint32Array(t.buffer||new Uint8Array(t).buffer),f=0,u=0,s=0;if(n)for(;f<o;)u=i[f],s=13933*(u>>>16&255)+46871*(u>>>8&255)+4732*(255&u)>>>16,a[f++]=65793*s|4278190080&u;else for(;f<o;)u=i[f],s=13933*(u>>>16&255)+46871*(u>>>8&255)+4732*(255&u)>>>16,a[f++]=s;return new Uint8ClampedArray(a.buffer)}(o),u=e,s=u.shiftfactor,c=u.scalefactor,l=u.initialsize,p=u.rotation,d=u.threshold,v=function(t,e,r,n,o,a,i,f){f=f?[].concat(f):[0];var u=i*Math.sqrt(e*r)|0,s=Math.max(e,r),c=[];for(;s>=u;){for(var l=o*s+1>>0,p=s/2+1>>0,d=p;d<=r-p;d+=l)for(var v=p;v<=e-p;v+=l)for(var h=0;h<f.length;h++){var y=f[h],m=n(d,v,y,s,t,e);m>0&&c.push([d,v,s,m,y])}s/=a}return c}(f,a,i,r,s,c,l,p);return v=function(t,e){t.sort((function(t,e){return e[3]-t[3]}));for(var r=[],n=[],o=0;o<t.length;o++)if(!r[o]){for(var a=t[o][0],i=t[o][1],f=t[o][2],u=t[o][3],s=t[o][4],c=1,l=o+1;l<t.length;l++)r[l]||(p=t[o],d=t[l],v=void 0,h=void 0,y=void 0,m=void 0,g=void 0,U=void 0,b=void 0,M=void 0,w=void 0,v=p[0],h=p[1],y=p[2],m=d[0],g=d[1],U=d[2],b=Math.max(0,Math.min(v+y/2,m+U/2)-Math.max(v-y/2,m-U/2)),M=Math.max(0,Math.min(h+y/2,g+U/2)-Math.max(h-y/2,g-U/2)),w=Math.min(y,U),b*M/(w*w)>e&&(r[l]=!0,a+=t[l][0],i+=t[l][1],f+=t[l][2],u+=t[l][3],c++));n.push({r:a/c|0,c:i/c|0,s:f/c|0,q:u,a:s})}var p,d,v,h,y,m,g,U,b,M,w;return n}(n(v),d)}}r.r(e),e.default=function(t,e){var r="(function(){".concat(n.toString(),";var detect=").concat(n.name,"(").concat(JSON.stringify(t),",").concat(JSON.stringify(e),");onmessage=function(e){postMessage(detect(e.data));};})();"),o=new Blob([r]),a=window.URL.createObjectURL(o,{type:"application/javascript; charset=utf-8"}),i=new Worker(a);return function(t){return new Promise((function(e){i.onmessage=function(t){return e(t.data)},i.postMessage(t)}))}}}]).default}));