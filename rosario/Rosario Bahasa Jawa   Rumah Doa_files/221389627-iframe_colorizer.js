(function (){ var e="",g='"',k="%s",m="(\\d*)(\\D*)",n=",",p=".",aa=":",ba=": ",ca="Assertion failed",da="Node cannot be null or undefined.",ea="[",fa="[object Array]",ga="[object Function]",ha="[object Window]",ia="\\u",ja="]",q="array",r="blogger-iframe-colorize",ka="boolean",la="call",v="function",w="g",ma="inherit",x="null",y="number",z="object",na="rgb(0, 0, 0)",oa="rgba(0, 0, 0, 0)",pa="splice",A="string",qa="transparent",ra="{",sa="}",B=this,ta=function(a){var b=typeof a;if(b==z)if(a){if(a instanceof Array)return q;
if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if(d==ha)return z;if(d==fa||typeof a.length==y&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(pa))return q;if(d==ga||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(la))return v}else return x;else if(b==v&&"undefined"==typeof a.call)return z;return b},D=function(a,b){function d(){}d.prototype=b.prototype;a.i=b.prototype;a.prototype=
new d;a.h=function(a,d,h){for(var C=Array(arguments.length-2),l=2;l<arguments.length;l++)C[l-2]=arguments[l];return b.prototype[d].apply(a,C)}};var E=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,E);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};D(E,Error);var ua=function(a,b){for(var d=a.split(k),c=e,f=Array.prototype.slice.call(arguments,1);f.length&&1<d.length;)c+=d.shift()+f.shift();return c+d.join(k)},F=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,e)},G=function(a,b){return a<b?-1:a>b?1:0};var H=function(a,b){b.unshift(a);E.call(this,ua.apply(null,b));b.shift()};D(H,E);var va=function(a,b,d){if(!a){var c=Array.prototype.slice.call(arguments,2),f=ca;if(b)var f=f+(ba+b),h=c;throw new H(e+f,h||[]);}return a};var wa=Array.prototype.indexOf?function(a,b,d){va(null!=a.length);return Array.prototype.indexOf.call(a,b,d)}:function(a,b,d){d=null==d?0:0>d?Math.max(0,a.length+d):d;if(typeof a==A)return typeof b==A&&1==b.length?a.indexOf(b,d):-1;for(;d<a.length;d++)if(d in a&&a[d]===b)return d;return-1};var I;a:{var xa=B.navigator;if(xa){var ya=xa.userAgent;if(ya){I=ya;break a}}I=e};var za=-1!=I.indexOf("Opera")||-1!=I.indexOf("OPR"),J=-1!=I.indexOf("Trident")||-1!=I.indexOf("MSIE"),Aa=-1!=I.indexOf("Edge"),K=-1!=I.indexOf("Gecko")&&!(-1!=I.toLowerCase().indexOf("webkit")&&-1==I.indexOf("Edge"))&&!(-1!=I.indexOf("Trident")||-1!=I.indexOf("MSIE"))&&-1==I.indexOf("Edge"),Ba=-1!=I.toLowerCase().indexOf("webkit")&&-1==I.indexOf("Edge"),Ca=function(){var a=I;if(K)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Aa)return/Edge\/([\d\.]+)/.exec(a);if(J)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
if(Ba)return/WebKit\/(\S+)/.exec(a)},Da=function(){var a=B.document;return a?a.documentMode:void 0},Ea=function(){if(za&&B.opera){var a;var b=B.opera.version;try{a=b()}catch(d){a=b}return a}a=e;(b=Ca())&&(a=b?b[1]:e);return J&&(b=Da(),b>parseFloat(a))?String(b):a}(),Fa={},Ga=function(a){var b;if(!(b=Fa[a])){b=0;for(var d=F(String(Ea)).split(p),c=F(String(a)).split(p),f=Math.max(d.length,c.length),h=0;0==b&&h<f;h++){var C=d[h]||e,l=c[h]||e,Na=RegExp(m,w),Oa=RegExp(m,w);do{var t=Na.exec(C)||[e,e,e],
u=Oa.exec(l)||[e,e,e];if(0==t[0].length&&0==u[0].length)break;b=G(0==t[1].length?0:parseInt(t[1],10),0==u[1].length?0:parseInt(u[1],10))||G(0==t[2].length,0==u[2].length)||G(t[2],u[2])}while(0==b)}b=Fa[a]=0<=b}return b},Ha=B.document,Ia=Ha&&J?Da()||("CSS1Compat"==Ha.compatMode?parseInt(Ea,10):5):void 0;!K&&!J||J&&9<=Ia||K&&Ga("1.9.1");J&&Ga("9");var Ja=function(a){va(a,da);return 9==a.nodeType?a:a.ownerDocument||a.document};var L=function(a){this.a=a};L.prototype.serialize=function(a){var b=[];this.b(a,b);return b.join(e)};L.prototype.b=function(a,b){if(null==a)b.push(x);else{if(typeof a==z){if(ta(a)==q){this.serializeArray(a,b);return}if(a instanceof String||a instanceof Number||a instanceof Boolean)a=a.valueOf();else{this.g(a,b);return}}switch(typeof a){case A:this.c(a,b);break;case y:this.f(a,b);break;case ka:b.push(a);break;case v:b.push(x);break;default:throw Error("Unknown type: "+typeof a);}}};
var Ka={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},La=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;L.prototype.c=function(a,b){b.push(g,a.replace(La,function(a){var b=Ka[a];b||(b=ia+(a.charCodeAt(0)|65536).toString(16).substr(1),Ka[a]=b);return b}),g)};L.prototype.f=function(a,b){b.push(isFinite(a)&&!isNaN(a)?a:x)};
L.prototype.serializeArray=function(a,b){var d=a.length;b.push(ea);for(var c=e,f=0;f<d;f++)b.push(c),c=a[f],this.b(this.a?this.a.call(a,String(f),c):c,b),c=n;b.push(ja)};L.prototype.g=function(a,b){b.push(ra);var d=e,c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var f=a[c];typeof f!=v&&(b.push(d),this.c(c,b),b.push(aa),this.b(this.a?this.a.call(a,c,f):f,b),d=n)}b.push(sa)};var Ma=function(a,b,d){var c;a:{c=Ja(b);if(c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(b,null))){c=c[a]||c.getPropertyValue(a)||e;break a}c=e}c=c||(b.currentStyle?b.currentStyle[a]:null)||b.style&&b.style[a];return null==c||c==ma||c==qa||c==oa?(c=Ja(b),b!=c.body&&b.parentNode?M(a,b.parentNode):d):c},M=function(a,b){return Ma(a,b,na)};var N;var O=document;if(O.querySelectorAll&&O.querySelector)N=O.querySelectorAll("IFRAME.blogger-iframe-colorize");else{if(O.getElementsByClassName)for(var P=O.getElementsByClassName(r),Q={},R=0,S=0,T;T=P[S];S++)"IFRAME"==T.nodeName&&(Q[R++]=T);else for(P=O.getElementsByTagName("IFRAME"),Q={},S=R=0;T=P[S];S++){var Pa=T.className,U;if(U=typeof Pa.split==v)U=0<=wa(Pa.split(/\s+/),r);U&&(Q[R++]=T)}Q.length=R;N=Q}
for(var V=0;V<N.length;V++){var W=N[V],X,Y=W.id+"-src";X=typeof Y==A?document.getElementById(Y):Y;var Z=X.href,Qa=M("color",W),Ra=M("backgroundColor",W),Sa=Ma("fontFamily",W,"serif");X.href="https://www.blogger.com/unvisited-link-"+(new Date).valueOf();var Ta=M("color",X),Ua=X.href=Z,Va=encodeURIComponent,Wa;Wa=(new L(void 0)).serialize({color:Qa,backgroundColor:Ra,unvisitedLinkColor:Ta,fontFamily:Sa});Z=Ua+("#"+Va(Wa));W.src=Z}; })()
