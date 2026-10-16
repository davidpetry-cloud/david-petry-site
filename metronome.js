(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.e6(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.z(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.bI(b)
return new t(c,this)}:function(){if(t===null)t=A.bI(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.bI(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
bL(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bJ(a){var t,s,r,q,p,o="_$dart_js",n=a[v.dispatchPropertyName]
if(n==null)if($.bK==null){A.dY()
n=a[v.dispatchPropertyName]}if(n!=null){t=n.p
if(!1===t)return n.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return n.i
if(n.e===s)throw A.i(A.c0("Return interceptor for "+A.q(t(a,n))))}r=a.constructor
if(r==null)q=null
else{p=$.bi
if(p==null)p=$.bi=A.bq(o)
q=r[p]}if(q!=null)return q
q=A.e2(a)
if(q!=null)return q
if(typeof a=="function")return B.r
t=Object.getPrototypeOf(a)
if(t==null)return B.j
if(t===Object.prototype)return B.j
if(typeof r=="function"){p=$.bi
if(p==null)p=$.bi=A.bq(o)
Object.defineProperty(r,p,{value:B.e,enumerable:false,writable:true,configurable:true})
return B.e}return B.e},
bV(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
cT(a,b){var t,s
for(t=a.length;b<t;){s=a.charCodeAt(b)
if(s!==32&&s!==13&&!J.bV(s))break;++b}return b},
cU(a,b){var t,s,r
for(t=a.length;b>0;b=s){s=b-1
if(!(s<t))return A.A(a,s)
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.bV(r))break}return b},
an(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.Z.prototype
return J.ax.prototype}if(typeof a=="string")return J.Q.prototype
if(a==null)return J.a_.prototype
if(typeof a=="boolean")return J.aw.prototype
if(Array.isArray(a))return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.C.prototype
if(typeof a=="symbol")return J.a3.prototype
if(typeof a=="bigint")return J.a1.prototype
return a}if(a instanceof A.k)return a
return J.bJ(a)},
dT(a){if(typeof a=="string")return J.Q.prototype
if(a==null)return a
if(Array.isArray(a))return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.C.prototype
if(typeof a=="symbol")return J.a3.prototype
if(typeof a=="bigint")return J.a1.prototype
return a}if(a instanceof A.k)return a
return J.bJ(a)},
dU(a){if(a==null)return a
if(Array.isArray(a))return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.C.prototype
if(typeof a=="symbol")return J.a3.prototype
if(typeof a=="bigint")return J.a1.prototype
return a}if(a instanceof A.k)return a
return J.bJ(a)},
cE(a){return J.dU(a).gV(a)},
bM(a){return J.dT(a).gl(a)},
cF(a){return J.an(a).gi(a)},
ap(a){return J.an(a).h(a)},
au:function au(){},
aw:function aw(){},
a_:function a_(){},
a2:function a2(){},
D:function D(){},
aJ:function aJ(){},
ab:function ab(){},
C:function C(){},
a1:function a1(){},
a3:function a3(){},
m:function m(a){this.$ti=a},
av:function av(){},
aV:function aV(a){this.$ti=a},
aq:function aq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a0:function a0(){},
Z:function Z(){},
ax:function ax(){},
Q:function Q(){}},A={bA:function bA(){},
bW(a){return new A.aW("Field '"+a+"' has been assigned during initialization.")},
e1(a){var t,s
for(t=$.am.length,s=0;s<t;++s)if(a===$.am[s])return!0
return!1},
bT(){return new A.b9("No element")},
aW:function aW(a){this.a=a},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
o:function o(){},
cB(a){var t=A.cA(a)
if(t!=null)return t
return"minified:"+a},
eg(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.D.b(a)},
q(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ap(a)
return t},
cX(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return A.A(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
cW(a){var t,s
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
t=parseFloat(a)
if(isNaN(t)){s=B.c.I(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return null}return t},
aK(a){var t,s,r,q
if(a instanceof A.k)return A.r(A.ao(a),null)
t=J.an(a)
if(t===B.q||t===B.t||u.o.b(a)){s=B.f(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.r(A.ao(a),null)},
bX(a){var t,s,r
if(a==null||typeof a=="number"||A.bG(a))return J.ap(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.B)return a.h(0)
if(a instanceof A.ag)return a.S(!0)
t=$.cD()
for(s=0;s<1;++s){r=t[s].a9(a)
if(r!=null)return r}return"Instance of '"+A.aK(a)+"'"},
A(a,b){if(a==null)J.bM(a)
throw A.i(A.ct(a,b))},
ct(a,b){var t,s="index"
if(!A.cn(b))return new A.P(!0,b,s,null)
t=J.bM(a)
if(b<0||b>=t)return A.cP(b,t,a,s)
return A.bY(b,s)},
dQ(a){return new A.P(!0,a,null,null)},
i(a){return A.n(a,new Error())},
n(a,b){var t
if(a==null)a=new A.be()
b.dartException=a
t=A.e7
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
e7(){return J.ap(this.dartException)},
cy(a,b){throw A.n(a,b==null?new Error():b)},
bw(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.cy(A.ds(a,b,c),t)},
ds(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.aN("'"+t+"': Cannot "+p+" "+m+l+o)},
cx(a){throw A.i(A.bz(a))},
cM(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.aL().constructor.prototype):Object.create(new A.Y(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bR(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.cI(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bR(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
cI(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.i("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.cG)}throw A.i("Error in functionType of tearoff")},
cJ(a,b,c,d){var t=A.bQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bR(a,b,c,d){if(c)return A.cL(a,b,d)
return A.cJ(b.length,d,a,b)},
cK(a,b,c,d){var t=A.bQ,s=A.cH
switch(b?-1:a){case 0:throw A.i(new A.b8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
cL(a,b,c){var t,s
if($.bO==null)$.bO=A.bN("interceptor")
if($.bP==null)$.bP=A.bN("receiver")
t=b.length
s=A.cK(t,c,a,b)
return s},
bI(a){return A.cM(a)},
cG(a,b){return A.ak(v.typeUniverse,A.ao(a.a),b)},
bQ(a){return a.a},
cH(a){return a.b},
bN(a){var t,s,r,q=new A.Y("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.i(A.by("Field name "+a+" not found."))},
bq(a){return v.getIsolateTag(a)},
e2(a){var t,s,r,q,p,o=A.w($.cu.$1(a)),n=$.bo[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bu[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.cg($.cr.$2(a,o))
if(r!=null){n=$.bo[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bu[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.bv(t)
$.bo[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.bu[o]=t
return t}if(q==="-"){p=A.bv(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.cv(a,t)
if(q==="*")throw A.i(A.c0(o))
if(v.leafTags[o]===true){p=A.bv(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.cv(a,t)},
cv(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.bL(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
bv(a){return J.bL(a,!1,null,!!a.$ip)},
e4(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.bv(t)
else return J.bL(t,c,null,null)},
dY(){if(!0===$.bK)return
$.bK=!0
A.dZ()},
dZ(){var t,s,r,q,p,o,n,m
$.bo=Object.create(null)
$.bu=Object.create(null)
A.dX()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.cw.$1(p)
if(o!=null){n=A.e4(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
dX(){var t,s,r,q,p,o,n=B.k()
n=A.V(B.l,A.V(B.m,A.V(B.h,A.V(B.h,A.V(B.n,A.V(B.o,A.V(B.p(B.f),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.cu=new A.br(q)
$.cr=new A.bs(p)
$.cw=new A.bt(o)},
V(a,b){return a(b)||b},
dR(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
I:function I(a,b){this.a=a
this.b=b},
aa:function aa(){},
B:function B(){},
as:function as(){},
at:function at(){},
aM:function aM(){},
aL:function aL(){},
Y:function Y(a,b){this.a=a
this.b=b},
b8:function b8(a){this.a=a},
br:function br(a){this.a=a},
bs:function bs(a){this.a=a},
bt:function bt(a){this.a=a},
ag:function ag(){},
bj:function bj(){},
R:function R(){},
a6:function a6(){},
aA:function aA(){},
S:function S(){},
a4:function a4(){},
a5:function a5(){},
aB:function aB(){},
aC:function aC(){},
aD:function aD(){},
aE:function aE(){},
aF:function aF(){},
aG:function aG(){},
aH:function aH(){},
a7:function a7(){},
aI:function aI(){},
ac:function ac(){},
ad:function ad(){},
ae:function ae(){},
af:function af(){},
bB(a,b){var t=b.c
return t==null?b.c=A.ai(a,"bS",[b.x]):t},
bZ(a){var t=a.w
if(t===6||t===7)return A.bZ(a.x)
return t===11||t===12},
cY(a){return a.as},
bp(a){return A.bm(v.typeUniverse,a,!1)},
L(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.L(a0,t,a2,a3)
if(s===t)return a1
return A.c8(a0,s,!0)
case 7:t=a1.x
s=A.L(a0,t,a2,a3)
if(s===t)return a1
return A.c7(a0,s,!0)
case 8:r=a1.y
q=A.U(a0,r,a2,a3)
if(q===r)return a1
return A.ai(a0,a1.x,q)
case 9:p=a1.x
o=A.L(a0,p,a2,a3)
n=a1.y
m=A.U(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.bC(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.U(a0,k,a2,a3)
if(j===k)return a1
return A.c9(a0,l,j)
case 11:i=a1.x
h=A.L(a0,i,a2,a3)
g=a1.y
f=A.dN(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.c6(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.U(a0,e,a2,a3)
p=a1.x
o=A.L(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.bD(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.i(A.ar("Attempted to substitute unexpected RTI kind "+a))}},
U(a,b,c,d){var t,s,r,q,p=b.length,o=A.bn(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.L(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
dO(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bn(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.L(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
dN(a,b,c,d){var t,s=b.a,r=A.U(a,s,c,d),q=b.b,p=A.U(a,q,c,d),o=b.c,n=A.dO(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.aO()
t.a=r
t.b=p
t.c=n
return t},
z(a,b){a[v.arrayRti]=b
return a},
cs(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.dW(t)
return a.$S()}return null},
e_(a,b){var t
if(A.bZ(b))if(a instanceof A.B){t=A.cs(a)
if(t!=null)return t}return A.ao(a)},
ao(a){if(a instanceof A.k)return A.cl(a)
if(Array.isArray(a))return A.al(a)
return A.bF(J.an(a))},
al(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
cl(a){var t=a.$ti
return t!=null?t:A.bF(a)},
bF(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.dz(a,t)},
dz(a,b){var t=a instanceof A.B?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.di(v.typeUniverse,t.name)
b.$ccache=s
return s},
dW(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bm(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
dV(a){return A.M(A.cl(a))},
bH(a){var t
if(a instanceof A.ag)return A.dS(a.$r,a.O())
t=a instanceof A.B?A.cs(a):null
if(t!=null)return t
if(u.R.b(a))return J.cF(a).a
if(Array.isArray(a))return A.al(a)
return A.ao(a)},
M(a){var t=a.r
return t==null?a.r=new A.bl(a):t},
dS(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.A(r,0)
t=A.ak(v.typeUniverse,A.bH(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.A(r,s)
t=A.cb(v.typeUniverse,t,A.bH(r[s]))}return A.ak(v.typeUniverse,t,a)},
x(a){return A.M(A.bm(v.typeUniverse,a,!1))},
dy(a){var t=this
t.b=A.dM(t)
return t.b(a)},
dM(a){var t,s,r,q,p
if(a===u.K)return A.dF
if(A.N(a))return A.dJ
t=a.w
if(t===6)return A.dw
if(t===1)return A.cp
if(t===7)return A.dA
s=A.dL(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.N)){a.f="$i"+r
if(r==="d")return A.dD
if(a===u.m)return A.dC
return A.dI}}else if(t===10){q=A.dR(a.x,a.y)
p=q==null?A.cp:q
return p==null?A.cf(p):p}return A.du},
dL(a){if(a.w===8){if(a===u.S)return A.cn
if(a===u.i||a===u.H)return A.dE
if(a===u.N)return A.dH
if(a===u.y)return A.bG}return null},
dx(a){var t=this,s=A.dt
if(A.N(t))s=A.dp
else if(t===u.K)s=A.cf
else if(A.X(t)){s=A.dv
if(t===u.t)s=A.dm
else if(t===u.v)s=A.cg
else if(t===u.u)s=A.dk
else if(t===u.w)s=A.ce
else if(t===u.I)s=A.dl
else if(t===u.z)s=A.bE}else if(t===u.S)s=A.K
else if(t===u.N)s=A.w
else if(t===u.y)s=A.T
else if(t===u.H)s=A.dn
else if(t===u.i)s=A.J
else if(t===u.m)s=A.h
t.a=s
return t.a(a)},
du(a){var t=this
if(a==null)return A.X(t)
return A.e0(v.typeUniverse,A.e_(a,t),t)},
dw(a){if(a==null)return!0
return this.x.b(a)},
dI(a){var t,s=this
if(a==null)return A.X(s)
t=s.f
if(a instanceof A.k)return!!a[t]
return!!J.an(a)[t]},
dD(a){var t,s=this
if(a==null)return A.X(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.k)return!!a[t]
return!!J.an(a)[t]},
dC(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.k)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
co(a){if(typeof a=="object"){if(a instanceof A.k)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
dt(a){var t=this
if(a==null){if(A.X(t))return a}else if(t.b(a))return a
throw A.n(A.ch(a,t),new Error())},
dv(a){var t=this
if(a==null||t.b(a))return a
throw A.n(A.ch(a,t),new Error())},
ch(a,b){return new A.aP("TypeError: "+A.c2(a,A.r(b,null)))},
c2(a,b){return A.aT(a)+": type '"+A.r(A.bH(a),null)+"' is not a subtype of type '"+b+"'"},
u(a,b){return new A.aP("TypeError: "+A.c2(a,b))},
dA(a){var t=this
return t.x.b(a)||A.bB(v.typeUniverse,t).b(a)},
dF(a){return a!=null},
cf(a){if(a!=null)return a
throw A.n(A.u(a,"Object"),new Error())},
dJ(a){return!0},
dp(a){return a},
cp(a){return!1},
bG(a){return!0===a||!1===a},
T(a){if(!0===a)return!0
if(!1===a)return!1
throw A.n(A.u(a,"bool"),new Error())},
dk(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.n(A.u(a,"bool?"),new Error())},
J(a){if(typeof a=="number")return a
throw A.n(A.u(a,"double"),new Error())},
dl(a){if(typeof a=="number")return a
if(a==null)return a
throw A.n(A.u(a,"double?"),new Error())},
cn(a){return typeof a=="number"&&Math.floor(a)===a},
K(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.n(A.u(a,"int"),new Error())},
dm(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.n(A.u(a,"int?"),new Error())},
dE(a){return typeof a=="number"},
dn(a){if(typeof a=="number")return a
throw A.n(A.u(a,"num"),new Error())},
ce(a){if(typeof a=="number")return a
if(a==null)return a
throw A.n(A.u(a,"num?"),new Error())},
dH(a){return typeof a=="string"},
w(a){if(typeof a=="string")return a
throw A.n(A.u(a,"String"),new Error())},
cg(a){if(typeof a=="string")return a
if(a==null)return a
throw A.n(A.u(a,"String?"),new Error())},
h(a){if(A.co(a))return a
throw A.n(A.u(a,"JSObject"),new Error())},
bE(a){if(a==null)return a
if(A.co(a))return a
throw A.n(A.u(a,"JSObject?"),new Error())},
cq(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.r(a[r],b)
return t},
dK(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.cq(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.r(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
ci(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.z([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.a.k(a3,"T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.A(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.r(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.r(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.r(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.r(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.r(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
r(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.r(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.r(a.x,b)+">"
if(m===8){q=A.dP(a.x)
p=a.y
return p.length>0?q+("<"+A.cq(p,b)+">"):q}if(m===10)return A.dK(a,b)
if(m===11)return A.ci(a,b,null)
if(m===12)return A.ci(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.A(b,o)
return b[o]}return"?"},
dP(a){var t=A.cA(a)
if(t!=null)return t
return"minified:"+a},
dj(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
di(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bm(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aj(a,5,"#")
r=A.bn(t)
for(q=0;q<t;++q)r[q]=s
p=A.ai(a,b,r)
o[b]=p
return p}else return n},
dh(a,b){return A.cc(a.tR,b)},
dg(a,b){return A.cc(a.eT,b)},
bm(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.ca(a,null,b,!1)
s.set(b,t)
return t},
ak(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.ca(a,b,c,!0)
r.set(c,s)
return s},
cb(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.bC(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
ca(a,b,c,d){return A.d9(A.d3(a,b,c,d))},
F(a,b){b.a=A.dx
b.b=A.dy
return b},
aj(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.v(null,null)
t.w=b
t.as=c
s=A.F(a,t)
a.eC.set(c,s)
return s},
c8(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.de(a,b,s,c)
a.eC.set(s,t)
return t},
de(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.N(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.X(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.v(null,null)
r.w=6
r.x=b
r.as=c
return A.F(a,r)},
c7(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.dc(a,b,s,c)
a.eC.set(s,t)
return t},
dc(a,b,c,d){var t,s
if(d){t=b.w
if(A.N(b)||b===u.K)return b
else if(t===1)return A.ai(a,"bS",[b])
else if(b===u.P||b===u.T)return u.U}s=new A.v(null,null)
s.w=7
s.x=b
s.as=c
return A.F(a,s)},
df(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.v(null,null)
t.w=13
t.x=b
t.as=r
s=A.F(a,t)
a.eC.set(r,s)
return s},
ah(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
db(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
ai(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.ah(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.v(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.F(a,s)
a.eC.set(q,r)
return r},
bC(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.ah(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.v(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.F(a,p)
a.eC.set(r,o)
return o},
c9(a,b,c){var t,s,r="+"+(b+"("+A.ah(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.v(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.F(a,t)
a.eC.set(r,s)
return s},
c6(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.ah(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.ah(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.db(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.v(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.F(a,q)
a.eC.set(s,p)
return p},
bD(a,b,c,d){var t,s=b.as+("<"+A.ah(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.dd(a,b,c,s,d)
a.eC.set(s,t)
return t},
dd(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bn(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.L(a,b,s,0)
n=A.U(a,c,s,0)
return A.bD(a,o,n,c!==n)}}m=new A.v(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.F(a,m)},
d3(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
d9(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.d5(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.c4(a,s,m,l,!1)
else if(r===46)s=A.c4(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.H(a.u,a.e,l.pop()))
break
case 94:l.push(A.df(a.u,l.pop()))
break
case 35:l.push(A.aj(a.u,5,"#"))
break
case 64:l.push(A.aj(a.u,2,"@"))
break
case 126:l.push(A.aj(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.d7(a,l)
break
case 38:A.d6(a,l)
break
case 63:q=a.u
l.push(A.c8(q,A.H(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.c7(q,A.H(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.d4(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.c5(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.da(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.H(a.u,a.e,n)},
d5(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
c4(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.dj(t,p.x)[q]
if(o==null)A.cy('No "'+q+'" in "'+A.cY(p)+'"')
d.push(A.ak(t,p,o))}else d.push(q)
return n},
d7(a,b){var t,s=a.u,r=A.c3(a,b),q=b.pop()
if(typeof q=="string")b.push(A.ai(s,q,r))
else{t=A.H(s,a.e,q)
switch(t.w){case 11:b.push(A.bD(s,t,r,a.n))
break
default:b.push(A.bC(s,t,r))
break}}},
d4(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.c3(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.H(q,a.e,p)
r=new A.aO()
r.a=t
r.b=o
r.c=n
b.push(A.c6(q,s,r))
return
case-4:b.push(A.c9(q,b.pop(),t))
return
default:throw A.i(A.ar("Unexpected state under `()`: "+A.q(p)))}},
d6(a,b){var t=b.pop()
if(0===t){b.push(A.aj(a.u,1,"0&"))
return}if(1===t){b.push(A.aj(a.u,4,"1&"))
return}throw A.i(A.ar("Unexpected extended operation "+A.q(t)))},
c3(a,b){var t=b.splice(a.p)
A.c5(a.u,a.e,t)
a.p=b.pop()
return t},
H(a,b,c){if(typeof c=="string")return A.ai(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.d8(a,b,c)}else return c},
c5(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.H(a,b,c[t])},
da(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.H(a,b,c[t])},
d8(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.i(A.ar("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.i(A.ar("Bad index "+c+" for "+b.h(0)))},
e0(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.l(a,b,null,c,null)
s.set(c,t)}return t},
l(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.N(d))return!0
t=b.w
if(t===4)return!0
if(A.N(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.l(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.l(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.l(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.l(a,b.x,c,d,e))return!1
return A.l(a,A.bB(a,b),c,d,e)}if(t===6)return A.l(a,q,c,d,e)&&A.l(a,b.x,c,d,e)
if(r===7){if(A.l(a,b,c,d.x,e))return!0
return A.l(a,b,c,A.bB(a,d),e)}if(r===6)return A.l(a,b,c,q,e)||A.l(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.L)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.l(a,k,c,j,e)||!A.l(a,j,e,k,c))return!1}return A.cm(a,b.x,c,d.x,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return A.cm(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.dB(a,b,c,d,e)}if(p&&r===10)return A.dG(a,b,c,d,e)
return!1},
cm(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.l(a2,a3.x,a4,a5.x,a6))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.l(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.l(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.l(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.l(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
dB(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.ak(a,b,s[p])
return A.cd(a,q,null,c,d.y,e)}return A.cd(a,b.y,null,c,d.y,e)},
cd(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.l(a,b[t],d,e[t],f))return!1
return!0},
dG(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.l(a,s[t],c,r[t],e))return!1
return!0},
X(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.N(a))if(t!==6)s=t===7&&A.X(a.x)
return s},
N(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
cc(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bn(a){return a>0?new Array(a):v.typeUniverse.sEA},
v:function v(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
aO:function aO(){this.c=this.b=this.a=null},
bl:function bl(a){this.a=a},
bh:function bh(){},
aP:function aP(a){this.a=a},
e:function e(){},
cV(a,b,c){var t,s,r=A.z([],c.p("m<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.cx)(a),++s)B.a.k(r,c.a(a[s]))
r.$flags=1
return r},
cZ(a,b,c){var t=J.cE(b)
if(!t.v())return a
if(c.length===0){do a+=A.q(t.gu())
while(t.v())}else{a+=A.q(t.gu())
while(t.v())a=a+c+A.q(t.gu())}return a},
aT(a){if(typeof a=="number"||A.bG(a)||a==null)return J.ap(a)
if(typeof a=="string")return JSON.stringify(a)
return A.bX(a)},
ar(a){return new A.aQ(a)},
by(a){return new A.P(!1,null,null,a)},
bY(a,b){return new A.b7(null,null,!0,a,b,"Value not in range")},
cP(a,b,c,d){return new A.aU(b,!0,a,d,"Index out of range")},
c1(a){return new A.aN(a)},
c0(a){return new A.bf(a)},
bz(a){return new A.aR(a)},
bU(a,b,c){var t,s
if(A.e1(a))return b+"..."+c
t=new A.ba(b)
B.a.k($.am,a)
try{s=t
s.a=A.cZ(s.a,a,", ")}finally{if(0>=$.am.length)return A.A($.am,-1)
$.am.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
bg:function bg(){},
aS:function aS(){},
aQ:function aQ(a){this.a=a},
be:function be(){},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aU:function aU(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aN:function aN(a){this.a=a},
bf:function bf(a){this.a=a},
b9:function b9(a){this.a=a},
aR:function aR(a){this.a=a},
a8:function a8(){},
k:function k(){},
ba:function ba(a){this.a=a},
c_(a){return B.a.a7(B.u,new A.bb(a),new A.bc())},
e5(a,b,c){if(B.b.K(a,b.c)!==0)return B.x
return a===0&&c?B.v:B.w},
t:function t(a,b,c){this.c=a
this.a=b
this.b=c},
bb:function bb(a){this.a=a},
bc:function bc(){},
a9:function a9(a,b){this.a=a
this.b=b},
bd:function bd(a){this.c=a},
y(a,b){var t=A.bE(A.h(v.G.document).getElementById(a))
t.toString
return b.a(t)},
e3(){var t=v.G,s=A.bE(A.h(t.document).getElementById("metronome"))
if(s==null||!("AudioContext" in t))return
t=u.m
new A.az(A.y("metro-bpm",t),A.y("metro-range",t),A.y("metro-beats",t),A.y("metro-sub",t),A.y("metro-accent",t),A.y("metro-start",t),A.y("metro-dots",t),A.y("metro-beat",t),A.y("metro-status",t),B.d,A.z([],u.p),A.z([],u.O),new A.bd(A.z([],u.n))).aa()
s.hidden=!1},
az:function az(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=96
_.z=4
_.Q=j
_.as=!0
_.ax=_.at=null
_.ay=!1
_.CW=_.ch=0
_.cy=_.cx=null
_.db=-1
_.dx=k
_.dy=l
_.fr=m
_.fx=null
_.go=_.fy=$},
aZ:function aZ(a){this.a=a},
b_:function b_(a){this.a=a},
b0:function b0(a){this.a=a},
b1:function b1(a){this.a=a},
b2:function b2(a){this.a=a},
b3:function b3(a){this.a=a},
b4:function b4(a){this.a=a},
b5:function b5(a){this.a=a},
b6:function b6(a){this.a=a},
aX:function aX(a){this.a=a},
aY:function aY(a){this.a=a},
cA(a){return v.mangledGlobalNames[a]},
e6(a){throw A.n(A.bW(a),new Error())},
cz(){throw A.n(A.bW(""),new Error())},
cj(a){var t
if(typeof a=="function")throw A.i(A.by("Attempting to rewrap a JS function."))
t=function(b,c){return function(){return b(c)}}(A.dq,a)
t[$.bx()]=a
return t},
ck(a){var t
if(typeof a=="function")throw A.i(A.by("Attempting to rewrap a JS function."))
t=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.dr,a)
t[$.bx()]=a
return t},
dq(a){return u.Z.a(a).$0()},
dr(a,b,c){u.Z.a(a)
if(A.K(c)>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.bA.prototype={}
J.au.prototype={
h(a){return"Instance of '"+A.aK(a)+"'"},
gi(a){return A.M(A.bF(this))}}
J.aw.prototype={
h(a){return String(a)},
gi(a){return A.M(u.y)},
$ib:1,
$iW:1}
J.a_.prototype={
h(a){return"null"},
$ib:1}
J.a2.prototype={$ij:1}
J.D.prototype={
h(a){return String(a)}}
J.aJ.prototype={}
J.ab.prototype={}
J.C.prototype={
h(a){var t=a[$.cC()]
if(t==null)t=a[$.bx()]
if(t==null)return this.X(a)
return"JavaScript function for "+J.ap(t)},
$iG:1}
J.a1.prototype={
h(a){return String(a)}}
J.a3.prototype={
h(a){return String(a)}}
J.m.prototype={
k(a,b){A.al(a).c.a(b)
a.$flags&1&&A.bw(a,29)
a.push(b)},
G(a,b){var t
a.$flags&1&&A.bw(a,"removeAt",1)
t=a.length
if(b>=t)throw A.i(A.bY(b,null))
return a.splice(b,1)[0]},
t(a){a.$flags&1&&A.bw(a,"clear","clear")
a.length=0},
a7(a,b,c){var t,s,r,q=A.al(a)
q.p("W(1)").a(b)
q.p("1()?").a(c)
t=a.length
for(s=0;s<t;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==t)throw A.i(A.bz(a))}q=c.$0()
return q},
gU(a){if(a.length>0)return a[0]
throw A.i(A.bT())},
gW(a){var t=a.length
if(t>0)return a[t-1]
throw A.i(A.bT())},
h(a){return A.bU(a,"[","]")},
gV(a){return new J.aq(a,a.length,A.al(a).p("aq<1>"))},
gl(a){return a.length},
J(a,b,c){A.al(a).c.a(c)
a.$flags&2&&A.bw(a)
if(!(b>=0&&b<a.length))throw A.i(A.ct(a,b))
a[b]=c},
$if:1,
$id:1}
J.av.prototype={
a9(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.aK(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.aV.prototype={}
J.aq.prototype={
gu(){var t=this.d
return t==null?this.$ti.c.a(t):t},
v(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.cx(r)
throw A.i(r)}t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.a0.prototype={
D(a,b){var t
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=B.b.gF(b)
if(this.gF(a)===t)return 0
if(this.gF(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gF(a){return a===0?1/a<0:a<0},
H(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.i(A.c1(""+a+".round()"))},
T(a,b,c){if(B.b.D(b,c)>0)throw A.i(A.dQ(b))
if(this.D(a,b)<0)return b
if(this.D(a,c)>0)return c
return a},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
K(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
Y(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.a5(a,b)},
a5(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.i(A.c1("Result of truncating division is "+A.q(t)+": "+A.q(a)+" ~/ "+b))},
gi(a){return A.M(u.H)},
$ic:1,
$iO:1}
J.Z.prototype={
gi(a){return A.M(u.S)},
$ib:1,
$ia:1}
J.ax.prototype={
gi(a){return A.M(u.i)},
$ib:1}
J.Q.prototype={
I(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(0>=p)return A.A(q,0)
if(q.charCodeAt(0)===133){t=J.cT(q,1)
if(t===p)return""}else t=0
s=p-1
if(!(s>=0))return A.A(q,s)
r=q.charCodeAt(s)===133?J.cU(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
h(a){return a},
gi(a){return A.M(u.N)},
gl(a){return a.length},
$ib:1,
$iE:1}
A.aW.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.ay.prototype={
gu(){var t=this.d
return t==null?this.$ti.c.a(t):t},
v(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.i(A.bz(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
A.o.prototype={}
A.I.prototype={$r:"+(1,2)",$s:1}
A.aa.prototype={}
A.B.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.cB(s==null?"unknown":s)+"'"},
$iG:1,
gab(){return this},
$C:"$1",
$R:1,
$D:null}
A.as.prototype={$C:"$0",$R:0}
A.at.prototype={$C:"$2",$R:2}
A.aM.prototype={}
A.aL.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.cB(t)+"'"}}
A.Y.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.aK(this.a)+"'")}}
A.b8.prototype={
h(a){return"RuntimeError: "+this.a}}
A.br.prototype={
$1(a){return this.a(a)},
$S:1}
A.bs.prototype={
$2(a,b){return this.a(a,b)},
$S:2}
A.bt.prototype={
$1(a){return this.a(A.w(a))},
$S:3}
A.ag.prototype={
h(a){return this.S(!1)},
S(a){var t,s,r,q,p,o=this.a2(),n=this.O(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.A(n,r)
p=n[r]
m=a?m+A.bX(p):m+A.q(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
a2(){var t,s=this.$s
while($.bk.length<=s)B.a.k($.bk,null)
t=$.bk[s]
if(t==null){t=this.a_()
B.a.J($.bk,s,t)}return t},
a_(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.z(new Array(m),u.f)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.a.J(l,r,s[t])}}l=A.cV(l,!1,u.K)
l.$flags=3
return l}}
A.bj.prototype={
O(){return[this.a,this.b]}}
A.R.prototype={
gi(a){return B.E},
$ib:1}
A.a6.prototype={}
A.aA.prototype={
gi(a){return B.F},
$ib:1}
A.S.prototype={
gl(a){return a.length},
$ip:1}
A.a4.prototype={$if:1,$id:1}
A.a5.prototype={$if:1,$id:1}
A.aB.prototype={
gi(a){return B.G},
$ib:1}
A.aC.prototype={
gi(a){return B.H},
$ib:1}
A.aD.prototype={
gi(a){return B.I},
$ib:1}
A.aE.prototype={
gi(a){return B.J},
$ib:1}
A.aF.prototype={
gi(a){return B.K},
$ib:1}
A.aG.prototype={
gi(a){return B.L},
$ib:1}
A.aH.prototype={
gi(a){return B.M},
$ib:1}
A.a7.prototype={
gi(a){return B.N},
gl(a){return a.length},
$ib:1}
A.aI.prototype={
gi(a){return B.O},
gl(a){return a.length},
$ib:1}
A.ac.prototype={}
A.ad.prototype={}
A.ae.prototype={}
A.af.prototype={}
A.v.prototype={
p(a){return A.ak(v.typeUniverse,this,a)},
ac(a){return A.cb(v.typeUniverse,this,a)}}
A.aO.prototype={}
A.bl.prototype={
h(a){return A.r(this.a,null)}}
A.bh.prototype={
h(a){return this.a}}
A.aP.prototype={}
A.e.prototype={
gV(a){return new A.ay(a,a.length,A.ao(a).p("ay<e.E>"))},
h(a){return A.bU(a,"[","]")}}
A.bg.prototype={
h(a){return this.N()}}
A.aS.prototype={}
A.aQ.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.aT(t)
return"Assertion failed"}}
A.be.prototype={}
A.P.prototype={
gB(){return"Invalid argument"+(!this.a?"(s)":"")},
gA(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gB()+r+p
if(!t.a)return o
return o+t.gA()+": "+A.aT(t.gE())},
gE(){return this.b}}
A.b7.prototype={
gE(){return A.ce(this.b)},
gB(){return"RangeError"},
gA(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.q(r):""
else if(r==null)t=": Not greater than or equal to "+A.q(s)
else if(r>s)t=": Not in inclusive range "+A.q(s)+".."+A.q(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.q(s)
return t}}
A.aU.prototype={
gE(){return A.K(this.b)},
gB(){return"RangeError"},
gA(){if(A.K(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gl(a){return this.f}}
A.aN.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bf.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.b9.prototype={
h(a){return"Bad state: "+this.a}}
A.aR.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.aT(t)+"."}}
A.a8.prototype={
h(a){return"null"}}
A.k.prototype={$ik:1,
h(a){return"Instance of '"+A.aK(this)+"'"},
gi(a){return A.dV(this)},
toString(){return this.h(this)}}
A.ba.prototype={
gl(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.t.prototype={
N(){return"Subdivision."+this.b}}
A.bb.prototype={
$1(a){return u.Q.a(a).b===this.a},
$S:4}
A.bc.prototype={
$0(){return B.d},
$S:5}
A.a9.prototype={
N(){return"Pulse."+this.b}}
A.bd.prototype={
a8(a){var t=this.c
if(t.length!==0&&a-B.a.gW(t)>2000)B.a.t(t)
B.a.k(t,a)
if(t.length>5)B.a.G(t,0)
if(t.length<2)return null
return B.b.T(B.i.H(6e4/((B.a.gW(t)-B.a.gU(t))/(t.length-1))),40,240)}}
A.az.prototype={
gM(){var t,s=this,r=s.go
if(r===$){t=A.ck(s.ga0())
s.go!==$&&A.cz()
s.go=t
r=t}return r},
aa(){var t,s=this,r="metro-bpm",q="change",p="click"
s.j("metro-range","input",new A.aZ(s))
s.j(r,"input",new A.b_(s))
s.j(r,q,new A.b0(s))
s.j("metro-down",p,new A.b1(s))
s.j("metro-up",p,new A.b2(s))
s.j("metro-beats",q,new A.b3(s))
s.j("metro-sub",q,new A.b4(s))
s.j("metro-accent",q,new A.b5(s))
s.j("metro-start",p,new A.b6(s))
s.j("metro-tap",p,s.ga3())
t=s.m(A.w(s.a.value))
s.n(t==null?s.y:t)
t=s.m(A.w(s.c.value))
s.z=t==null?4:t
s.Q=A.c_(A.w(s.d.value))
s.as=A.T(s.e.checked)
s.L()},
j(a,b,c){u.M.a(c)
return A.y(a,u.m).addEventListener(b,A.ck(new A.aX(c)))},
m(a){var t=B.c.I(B.c.I(a)),s=A.cX(t,null)
if(s==null)s=A.cW(t)
return s==null?null:B.i.H(s)},
P(a,b){var t=this,s=B.b.T(B.b.H(a),40,240)
t.y=s
t.b.value=""+s
if(!b)t.a.value=""+t.y},
n(a){return this.P(a,!1)},
R(){var t,s,r,q,p,o,n=this,m=n.at,l=n.ax
if(!n.ay||m==null||l==null)return
t=A.T(A.h(v.G.document).hidden)?1.5:0.12
s=n.ch
if(s<A.J(m.currentTime)){s=A.J(m.currentTime)+0.05
n.ch=s}r=n.z
q=n.Q
p=r*q.c
for(r=n.dx;s<A.J(m.currentTime)+t;s=q,q=o){o=n.CW
if(o>=p)o=n.CW=0
n.Z(m,l,A.e5(o,q,n.as),s)
B.a.k(r,new A.I(n.ch,n.CW))
s=n.ch
q=n.y
o=n.Q
q=s+60/q/o.c
n.ch=q
n.CW=B.b.K(n.CW+1,p)}while(r.length>64)B.a.G(r,0)},
Z(a,b,c,d){var t,s,r,q,p
switch(c.a){case 0:t=B.A
break
case 1:t=B.y
break
case 2:t=B.z
break
default:t=null}s=t.a
r=t.b
q=A.h(a.createOscillator())
p=A.h(a.createGain())
A.h(q.frequency).value=s
t=A.h(p.gain)
A.h(t.setValueAtTime(r,d))
A.h(t.exponentialRampToValueAtTime(0.0001,d+0.045))
A.h(A.h(q.connect(p)).connect(b))
q.start(d)
q.stop(d+0.05)},
a1(a){var t,s,r,q=this
A.J(a)
t=q.at
if(!q.ay||t==null)return
s=q.dx
r=null
for(;;){if(!(s.length!==0&&B.a.gU(s).a<=A.J(t.currentTime)))break
r=B.a.G(s,0).b}if(r!=null)q.C(B.b.Y(r,q.Q.c))
q.cy=A.K(v.G.requestAnimationFrame(q.gM()))},
L(){var t,s,r,q,p,o=this,n=o.r
n.textContent=""
t=o.dy
B.a.t(t)
for(s=v.G,r=0;r<o.z;++r){q=A.h(A.h(s.document).createElement("span"))
p=r===0?"metro-dot is-one":"metro-dot"
q.className=p
n.appendChild(q)
B.a.k(t,q)}o.db=-2
o.C(-1)},
C(a){var t,s,r=this
if(a===r.db)return
r.db=a
for(t=r.dy,s=0;s<t.length;++s)A.T(A.h(t[s].classList).toggle("is-on",s===a))
t=a>=0&&a<r.z?"Beat "+(a+1)+" of "+r.z:"Not playing"
r.w.textContent=t},
a4(){var t=this,s=v.G,r=t.fr.a8(A.J(A.h(s.performance).now())),q=t.fx
if(q!=null)s.clearTimeout(q)
if(r==null){t.q("Tap again in time with the beat.")
return}t.n(r)
t.fx=A.K(s.setTimeout(A.cj(new A.aY(t)),900))},
q(a){this.x.textContent=a
return a}}
A.aZ.prototype={
$0(){var t=this.a,s=t.m(A.w(t.b.value))
return t.n(s==null?t.y:s)},
$S:0}
A.b_.prototype={
$0(){var t=this.a,s=t.m(A.w(t.a.value))
if(s!=null&&s>=40&&s<=240)t.P(s,!0)},
$S:0}
A.b0.prototype={
$0(){var t=this.a,s=t.m(A.w(t.a.value))
return t.n(s==null?t.y:s)},
$S:0}
A.b1.prototype={
$0(){var t=this.a
return t.n(t.y-1)},
$S:0}
A.b2.prototype={
$0(){var t=this.a
return t.n(t.y+1)},
$S:0}
A.b3.prototype={
$0(){var t=this.a,s=t.m(A.w(t.c.value))
t.z=s==null?4:s
t.CW=0
t.L()},
$S:0}
A.b4.prototype={
$0(){var t=this.a
t.Q=A.c_(A.w(t.d.value))
t.CW=0},
$S:0}
A.b5.prototype={
$0(){var t=this.a
return t.as=A.T(t.e.checked)},
$S:0}
A.b6.prototype={
$0(){var t,s,r,q,p,o,n,m,l=this.a
if(l.ay){l.ay=!1
t=l.cx
if(t!=null)v.G.clearInterval(t)
s=l.cy
if(s!=null)v.G.cancelAnimationFrame(s)
r=l.ax
if(r!=null)r.disconnect()
l.ax=null
r=l.at
if(r!=null)A.h(r.suspend())
B.a.t(l.dx)
l.C(-1)
r=l.f
r.textContent="Start"
A.T(A.h(r.classList).toggle("is-running",!1))
l.q("Stopped.")}else{q=l.at
if(q==null)q=l.at=A.h(new v.G.AudioContext())
r=v.G
p=A.h(r.navigator).audioSession
if(u.m.b(p))p.type="playback"
A.h(q.resume())
o=A.h(q.createGain())
A.h(o.connect(A.h(q.destination)))
l.ax=o
l.ay=!0
l.CW=0
B.a.t(l.dx)
l.ch=A.J(q.currentTime)+0.06
l.R()
n=l.fy
if(n===$){m=A.cj(l.ga6())
l.fy!==$&&A.cz()
l.fy=m
n=m}l.cx=A.K(r.setInterval(n,25))
l.cy=A.K(r.requestAnimationFrame(l.gM()))
r=l.f
r.textContent="Stop"
A.T(A.h(r.classList).toggle("is-running",!0))
l.q("Playing at "+l.y+" BPM.")}return null},
$S:0}
A.aX.prototype={
$1(a){return this.a.$0()},
$S:7}
A.aY.prototype={
$0(){var t=this.a
return t.q("Tempo set to "+t.y+" BPM.")},
$S:0};(function aliases(){var t=J.D.prototype
t.X=t.h})();(function installTearOffs(){var t=hunkHelpers._instance_0u,s=hunkHelpers._instance_1u
var r
t(r=A.az.prototype,"ga6","R",0)
s(r,"ga0","a1",6)
t(r,"ga3","a4",0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.k,null)
r(A.k,[A.bA,J.au,A.aa,J.aq,A.aS,A.ay,A.o,A.ag,A.B,A.v,A.aO,A.bl,A.e,A.bg,A.a8,A.ba,A.bd,A.az])
r(J.au,[J.aw,J.a_,J.a2,J.a1,J.a3,J.a0,J.Q])
r(J.a2,[J.D,J.m,A.R,A.a6])
r(J.D,[J.aJ,J.ab,J.C])
s(J.av,A.aa)
s(J.aV,J.m)
r(J.a0,[J.Z,J.ax])
r(A.aS,[A.aW,A.b8,A.bh,A.aQ,A.be,A.P,A.aN,A.bf,A.b9,A.aR])
s(A.bj,A.ag)
s(A.I,A.bj)
r(A.B,[A.as,A.at,A.aM,A.br,A.bt,A.bb,A.aX])
r(A.aM,[A.aL,A.Y])
s(A.bs,A.at)
r(A.a6,[A.aA,A.S])
r(A.S,[A.ac,A.ae])
s(A.ad,A.ac)
s(A.a4,A.ad)
s(A.af,A.ae)
s(A.a5,A.af)
r(A.a4,[A.aB,A.aC])
r(A.a5,[A.aD,A.aE,A.aF,A.aG,A.aH,A.a7,A.aI])
s(A.aP,A.bh)
r(A.P,[A.b7,A.aU])
r(A.bg,[A.t,A.a9])
r(A.as,[A.bc,A.aZ,A.b_,A.b0,A.b1,A.b2,A.b3,A.b4,A.b5,A.b6,A.aY])
t(A.ac,A.e)
t(A.ad,A.o)
t(A.ae,A.e)
t(A.af,A.o)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",c:"double",O:"num",E:"String",W:"bool",a8:"Null",d:"List",k:"Object",ec:"Map",j:"JSObject"},mangledNames:{},types:["~()","@(@)","@(@,E)","@(E)","W(t)","t()","~(c)","~(k?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.I&&a.b(c.a)&&b.b(c.b)}}
A.dh(v.typeUniverse,JSON.parse('{"aJ":"D","ab":"D","C":"D","ed":"R","aw":{"W":[],"b":[]},"a_":{"b":[]},"a2":{"j":[]},"D":{"j":[]},"m":{"d":["1"],"j":[],"f":["1"]},"av":{"aa":[]},"aV":{"m":["1"],"d":["1"],"j":[],"f":["1"]},"a0":{"c":[],"O":[]},"Z":{"c":[],"a":[],"O":[],"b":[]},"ax":{"c":[],"O":[],"b":[]},"Q":{"E":[],"b":[]},"B":{"G":[]},"as":{"G":[]},"at":{"G":[]},"aM":{"G":[]},"aL":{"G":[]},"Y":{"G":[]},"R":{"j":[],"b":[]},"a6":{"j":[]},"aA":{"j":[],"b":[]},"S":{"p":["1"],"j":[]},"a4":{"e":["c"],"d":["c"],"p":["c"],"j":[],"f":["c"],"o":["c"]},"a5":{"e":["a"],"d":["a"],"p":["a"],"j":[],"f":["a"],"o":["a"]},"aB":{"e":["c"],"d":["c"],"p":["c"],"j":[],"f":["c"],"o":["c"],"b":[],"e.E":"c"},"aC":{"e":["c"],"d":["c"],"p":["c"],"j":[],"f":["c"],"o":["c"],"b":[],"e.E":"c"},"aD":{"e":["a"],"d":["a"],"p":["a"],"j":[],"f":["a"],"o":["a"],"b":[],"e.E":"a"},"aE":{"e":["a"],"d":["a"],"p":["a"],"j":[],"f":["a"],"o":["a"],"b":[],"e.E":"a"},"aF":{"e":["a"],"d":["a"],"p":["a"],"j":[],"f":["a"],"o":["a"],"b":[],"e.E":"a"},"aG":{"e":["a"],"d":["a"],"p":["a"],"j":[],"f":["a"],"o":["a"],"b":[],"e.E":"a"},"aH":{"e":["a"],"d":["a"],"p":["a"],"j":[],"f":["a"],"o":["a"],"b":[],"e.E":"a"},"a7":{"e":["a"],"d":["a"],"p":["a"],"j":[],"f":["a"],"o":["a"],"b":[],"e.E":"a"},"aI":{"e":["a"],"d":["a"],"p":["a"],"j":[],"f":["a"],"o":["a"],"b":[],"e.E":"a"},"c":{"O":[]},"a":{"O":[]},"d":{"f":["1"]},"cS":{"d":["a"],"f":["a"]},"d2":{"d":["a"],"f":["a"]},"d1":{"d":["a"],"f":["a"]},"cQ":{"d":["a"],"f":["a"]},"d_":{"d":["a"],"f":["a"]},"cR":{"d":["a"],"f":["a"]},"d0":{"d":["a"],"f":["a"]},"cN":{"d":["c"],"f":["c"]},"cO":{"d":["c"],"f":["c"]}}'))
A.dg(v.typeUniverse,JSON.parse('{"S":1}'))
var u=(function rtii(){var t=A.bp
return{Z:t("G"),O:t("m<j>"),f:t("m<k>"),p:t("m<+(c,a)>"),s:t("m<E>"),n:t("m<c>"),b:t("m<@>"),T:t("a_"),m:t("j"),g:t("C"),D:t("p<@>"),j:t("d<@>"),P:t("a8"),K:t("k"),L:t("ee"),F:t("+()"),N:t("E"),Q:t("t"),R:t("b"),o:t("ab"),y:t("W"),i:t("c"),S:t("a"),U:t("bS<a8>?"),z:t("j?"),X:t("k?"),v:t("E?"),u:t("W?"),I:t("c?"),t:t("a?"),w:t("O?"),H:t("O"),M:t("~()")}})();(function constants(){var t=hunkHelpers.makeConstList
B.q=J.au.prototype
B.a=J.m.prototype
B.b=J.Z.prototype
B.i=J.a0.prototype
B.c=J.Q.prototype
B.r=J.C.prototype
B.t=J.a2.prototype
B.j=J.aJ.prototype
B.e=J.ab.prototype
B.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.k=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.p=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.l=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.o=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.n=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.m=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.h=function(hooks) { return hooks; }

B.d=new A.t(1,0,"beats")
B.B=new A.t(2,1,"eighths")
B.C=new A.t(3,2,"triplets")
B.D=new A.t(4,3,"sixteenths")
B.u=t([B.d,B.B,B.C,B.D],A.bp("m<t>"))
B.v=new A.a9(0,"accent")
B.w=new A.a9(1,"beat")
B.x=new A.a9(2,"sub")
B.y=new A.I(1175,0.55)
B.z=new A.I(880,0.25)
B.A=new A.I(1760,0.9)
B.E=A.x("e8")
B.F=A.x("e9")
B.G=A.x("cN")
B.H=A.x("cO")
B.I=A.x("cQ")
B.J=A.x("cR")
B.K=A.x("cS")
B.L=A.x("d_")
B.M=A.x("d0")
B.N=A.x("d1")
B.O=A.x("d2")})();(function staticFields(){$.bi=null
$.am=A.z([],u.f)
$.bP=null
$.bO=null
$.cu=null
$.cr=null
$.cw=null
$.bo=null
$.bu=null
$.bK=null
$.bk=A.z([],A.bp("m<d<k>?>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"eb","cC",()=>A.bq("_$dart_dartClosure"))
t($,"ea","bx",()=>A.bq("_$dart_dartClosure_dartJSInterop"))
t($,"ef","cD",()=>A.z([new J.av()],A.bp("m<aa>")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.R,SharedArrayBuffer:A.R,ArrayBufferView:A.a6,DataView:A.aA,Float32Array:A.aB,Float64Array:A.aC,Int16Array:A.aD,Int32Array:A.aE,Int8Array:A.aF,Uint16Array:A.aG,Uint32Array:A.aH,Uint8ClampedArray:A.a7,CanvasPixelArray:A.a7,Uint8Array:A.aI})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.S.$nativeSuperclassTag="ArrayBufferView"
A.ac.$nativeSuperclassTag="ArrayBufferView"
A.ad.$nativeSuperclassTag="ArrayBufferView"
A.a4.$nativeSuperclassTag="ArrayBufferView"
A.ae.$nativeSuperclassTag="ArrayBufferView"
A.af.$nativeSuperclassTag="ArrayBufferView"
A.a5.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.e3
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()