(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Sr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function n0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var bi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},sl={duration:.5,overwrite:!1,delay:0},hd,En,Bt,Li=1e8,Pt=1/Li,ku=Math.PI*2,Lb=ku/4,Db=0,i0=Math.sqrt,Ib=Math.cos,Nb=Math.sin,Tn=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},Pr=function(e){return typeof e=="number"},ud=function(e){return typeof e>"u"},ur=function(e){return typeof e=="object"},ei=function(e){return e!==!1},fd=function(){return typeof window<"u"},Fl=function(e){return Xt(e)||Tn(e)},r0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fn=Array.isArray,Fb=/random\([^)]+\)/g,Ub=/,\s*/g,xp=/(?:-?\.?\d|\.)+/gi,s0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ta=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ih=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,a0=/[+-]=-?[.\d]+/,Ob=/[^,'"\[\]\s]+/gi,kb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,Zi,Bu,dd,vi={},$c={},o0,l0=function(e){return($c=Ba(e,vi))&&si},pd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},al=function(e,t){return!t&&console.warn(e)},c0=function(e,t){return e&&(vi[e]=t)&&$c&&($c[e]=t)||vi},ol=function(){return 0},Bb={suppressEvents:!0,isStart:!0,kill:!1},Ic={suppressEvents:!0,kill:!1},zb={suppressEvents:!0},md={},ns=[],zu={},h0,ui={},Nh={},yp=30,Nc=[],gd="",_d=function(e){var t=e[0],n,i;if(ur(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Nc.length;i--&&!Nc[i].targetTest(t););n=Nc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new D0(e[i],n)))||e.splice(i,1);return e},Cs=function(e){return e._gsap||_d(Di(e))[0]._gsap},u0=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():ud(n)&&e.getAttribute&&e.getAttribute(t)||n},ti=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},Ca=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Gb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Zc=function(){var e=ns.length,t=ns.slice(0),n,i;for(zu={},ns.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bd=function(e){return!!(e._initted||e._startAt||e.add)},f0=function(e,t,n,i){ns.length&&!En&&Zc(),e.render(t,n,!!(En&&t<0&&bd(e))),ns.length&&!En&&Zc()},d0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ob).length<2?t:Tn(e)?e.trim():e},p0=function(e){return e},xi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Vb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ba=function(e,t){for(var n in t)e[n]=t[n];return e},Sp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ur(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Qc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},zo=function(e){var t=e.parent||Vt,n=e.keyframes?Vb(Fn(e.keyframes)):xi;if(ei(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Hb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},m0=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},xh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},as=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Wb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gu=function(e,t,n,i){return e._startAt&&(En?e._startAt.revert(Ic):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},qb=function r(e){return!e||e._ts&&r(e.parent)},Mp=function(e){return e._repeat?za(e._tTime,e=e.duration()+e._rDelay)*e:0},za=function(e,t){var n=Math.floor(e=Gt(e/t));return e&&n===e?n-1:n},eh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yh=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},Sh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yh(e),n._dirty||Ps(n,e)),e},g0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=eh(e.rawTime(),t),(!t._dur||Dl(0,t.totalDuration(),n)-t._tTime>Pt)&&t.render(n,!0)),Ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Pt}},tr=function(e,t,n,i){return t.parent&&as(t),t._start=Gt((Pr(n)?n:n||e!==Vt?wi(e,n,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),m0(e,t,"_first","_last",e._sort?"_start":0),Vu(t)||(e._recent=t),i||g0(e,t),e._ts<0&&Sh(e,e._tTime),e},_0=function(e,t){return(vi.ScrollTrigger||pd("scrollTrigger",t))&&vi.ScrollTrigger.create(t,e)},b0=function(e,t,n,i,s){if(xd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!En&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&h0!==di.frame)return ns.push(e),e._lazy=[s,i],1},Xb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Vu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Kb=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Xb(e)&&!(!e._initted&&Vu(e))||(e._ts<0||e._dp._ts<0)&&!Vu(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=Dl(0,e._tDur,t),h=za(l,o),e._yoyo&&h&1&&(a=1-a),h!==za(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||En||i||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&b0(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?Pt:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Gu(e,t,n,!0),e._onUpdate&&!n&&gi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&gi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&as(e,1),!n&&!En&&(gi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Yb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ga=function(e,t,n,i){var s=e._repeat,a=Gt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Gt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Sh(e,e._tTime=e._tDur*o),e.parent&&yh(e),n||Ps(e.parent,e),e},Tp=function(e){return e instanceof Zn?Ps(e):Ga(e,e._dur)},Jb={_start:0,endTime:ol,totalDuration:ol},wi=function r(e,t,n){var i=e.labels,s=e._recent||Jb,a=e.duration()>=Li?s.endTime(!1):e._dur,o,l,c;return Tn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Fn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Go=function(e,t,n){var i=Pr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ei(l.vars.inherit)&&l.parent;a.immediateRender=ei(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new sn(t[0],a,t[s+1])},fs=function(e,t){return e||e===0?t(e):t},Dl=function(e,t,n){return n<e?e:n>t?t:n},In=function(e,t){return!Tn(e)||!(t=kb.exec(e))?"":t[1]},jb=function(e,t,n){return fs(n,function(i){return Dl(e,t,i)})},Hu=[].slice,v0=function(e,t){return e&&ur(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ur(e[0]))&&!e.nodeType&&e!==Zi},$b=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Tn(i)&&!t||v0(i,1)?(s=n).push.apply(s,Di(i)):n.push(i)})||n},Di=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):Tn(e)&&!n&&(Bu||!Va())?Hu.call((t||dd).querySelectorAll(e),0):Fn(e)?$b(e,n):v0(e)?Hu.call(e,0):e?[e]:[]},Wu=function(e){return e=Di(e)[0]||al("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Di(t,n.querySelectorAll?n:n===e?al("Invalid scope")||dd.createElement("div"):e)}},x0=function(e){return e.sort(function(){return .5-Math.random()})},y0=function(e){if(Xt(e))return e;var t=ur(e)?e:{each:e},n=Ls(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Tn(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,p){var _=(p||t).length,g=a[_],m,y,w,b,x,M,E,v,T;if(!g){if(T=t.grid==="auto"?0:(t.grid||[1,Li])[1],!T){for(E=-Li;E<(E=p[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(g=a[_]=[],m=l?Math.min(T,_)*h-.5:i%T,y=T===Li?0:l?_*u/T-.5:i/T|0,E=0,v=Li,M=0;M<_;M++)w=M%T-m,b=y-(M/T|0),g[M]=x=c?Math.abs(c==="y"?b:w):i0(w*w+b*b),x>E&&(E=x),x<v&&(v=x);i==="random"&&x0(g),g.max=E-v,g.min=v,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=In(t.amount||t.each)||0,n=n&&_<0?hv(n):n}return _=(g[f]-g.min)/g.max||0,Gt(g.b+(n?n(_):_)*g.v)+g.u}},qu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Gt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Pr(n)?0:In(n))}},S0=function(e,t){var n=Fn(e),i,s;return!n&&ur(e)&&(i=n=e.radius||Li,e.values?(e=Di(e.values),(s=!Pr(e[0]))&&(i*=i)):e=qu(e.increment)),fs(t,n?Xt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Li,h=0,u=e.length,f,d;u--;)s?(f=e[u].x-o,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:a,s||h===a||Pr(a)?h:h+In(a)}:qu(e))},M0=function(e,t,n,i){return fs(Fn(e)?!t:n===!0?!!(n=0):!i,function(){return Fn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Zb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Qb=function(e,t){return function(n){return e(parseFloat(n))+(t||In(n))}},ev=function(e,t,n){return w0(e,t,0,1,n)},T0=function(e,t,n){return fs(n,function(i){return e[~~t(i)]})},tv=function r(e,t,n){var i=t-e;return Fn(e)?T0(e,r(0,e.length),t):fs(n,function(s){return(i+(s-e)%i)%i+e})},nv=function r(e,t,n){var i=t-e,s=i*2;return Fn(e)?T0(e,r(0,e.length-1),t):fs(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ll=function(e){return e.replace(Fb,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Ub);return M0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},w0=function(e,t,n,i,s){var a=t-e,o=i-n;return fs(s,function(l){return n+((l-e)/a*o||0)})},iv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Tn(e),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Fn(e)&&!Fn(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(p){p*=u;var _=Math.min(f,~~p);return h[_](p-_)},n=t}else i||(e=Ba(Fn(e)?[]:{},e));if(!h){for(l in t)vd.call(o,e,l,"get",t[l]);s=function(p){return Md(p,o)||(a?e.p:e)}}}return fs(n,s)},wp=function(e,t,n){var i=e.labels,s=Li,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},gi=function(e,t,n){var i=e.vars,s=i[t],a=Bt,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ns.length&&Zc(),o&&(Bt=o),h=l?s.apply(c,l):s.call(c),Bt=a,h},Ro=function(e){return as(e),e.scrollTrigger&&e.scrollTrigger.kill(!!En),e.progress()<1&&gi(e,"onInterrupt"),e},wa,E0=[],A0=function(e){if(e)if(e=!e.name&&e.default||e,fd()||e.headless){var t=e.name,n=Xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ol,render:Md,add:vd,kill:xv,modifier:vv,rawVars:0},a={targetTest:0,get:0,getSetter:Sd,aliases:{},register:0};if(Va(),e!==i){if(ui[t])return;xi(i,xi(Qc(e,s),a)),Ba(i.prototype,Ba(s,Qc(e,a))),ui[i.prop=t]=i,e.targetTest&&(Nc.push(i),md[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}c0(t,i),e.register&&e.register(si,i,ni)}else E0.push(e)},Ct=255,Co={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},Fh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ct+.5|0},R0=function(e,t,n){var i=e?Pr(e)?[e>>16,e>>8&Ct,e&Ct]:0:Co.black,s,a,o,l,c,h,u,f,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Co[e])i=Co[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ct,i&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(xp),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Fh(l+1/3,s,a),i[1]=Fh(l,s,a),i[2]=Fh(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(s0),n&&i.length<4&&(i[3]=1),i}else i=e.match(xp)||Co.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Ct,a=i[1]/Ct,o=i[2]/Ct,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},C0=function(e){var t=[],n=[],i=-1;return e.split(is).forEach(function(s){var a=s.match(Ta)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Ep=function(e,t,n){var i="",s=(e+i).match(is),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return e;if(s=s.map(function(f){return(f=R0(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=C0(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(is,"1").split(Ta),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(is),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},is=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Co)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),rv=/hsl[a]?\(/,P0=function(e){var t=e.join(" "),n;if(is.lastIndex=0,is.test(t))return n=rv.test(t),e[1]=Ep(e[1],n),e[0]=Ep(e[0],n,C0(e[1])),!0},cl,di=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,f,d,p=function _(g){var m=r()-i,y=g===!0,w,b,x,M;if((m>e||m<0)&&(n+=m-t),i+=m,x=i-n,w=x-a,(w>0||y)&&(M=++u.frame,f=x-u.time*1e3,u.time=x=x/1e3,a+=w+(w>=s?4:s-w),b=1),y||(l=c(_)),b)for(d=0;d<o.length;d++)o[d](x,f,M,g)};return u={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){o0&&(!Bu&&fd()&&(Zi=Bu=window,dd=Zi.document||{},vi.gsap=si,(Zi.gsapVersions||(Zi.gsapVersions=[])).push(si.version),l0($c||Zi.GreenSockGlobals||!Zi.gsap&&Zi||{}),E0.forEach(A0)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(g){return setTimeout(g,a-u.time*1e3+1|0)},cl=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),cl=0,c=ol},lagSmoothing:function(g,m){e=g||1/0,t=Math.min(m||33,e)},fps:function(g){s=1e3/(g||240),a=u.time*1e3+s},add:function(g,m,y){var w=m?function(b,x,M,E){g(b,x,M,E),u.remove(w)}:g;return u.remove(g),o[y?"unshift":"push"](w),Va(),w},remove:function(g,m){~(m=o.indexOf(g))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},u})(),Va=function(){return!cl&&di.wake()},_t={},sv=/^[\d.\-M][\d.\-,\s]/,av=/["']/g,ov=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(av,"").trim():+c,i=l.substr(o+1).trim();return t},lv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},cv=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ov(t[1])]:lv(e).split(",").map(d0)):_t._CE&&sv.test(e)?_t._CE("",e):n},hv=function(e){return function(t){return 1-e(1-t)}},Ls=function(e,t){return e&&(Xt(e)?e:_t[e]||cv(e))||t},Ws=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return ti(e,function(o){_t[o]=vi[o]=s,_t[a=o.toLowerCase()]=n;for(var l in s)_t[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[o+"."+l]=s[l]}),s},L0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Uh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/ku*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Nb((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:L0(o);return s=ku/s,l.config=function(c,h){return r(e,c,h)},l},Oh=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:L0(n);return i.config=function(s){return r(e,s)},i};ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ws(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;Ws("Elastic",Uh("in"),Uh("out"),Uh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ws("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ws("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ws("Circ",function(r){return-(i0(1-r*r)-1)});Ws("Sine",function(r){return r===1?1:-Ib(r*Lb)+1});Ws("Back",Oh("in"),Oh("out"),Oh());_t.SteppedEase=_t.steps=vi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Pt;return function(o){return((i*Dl(0,a,o)|0)+s)*n}}};sl.ease=_t["quad.out"];ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return gd+=r+","+r+"Params,"});var D0=function(e,t){this.id=Db++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:u0,this.set=t?t.getSetter:Sd},hl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ga(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),cl||di.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ga(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Va(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Sh(this,n),!s._dp||s.parent||g0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&tr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),f0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?za(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?eh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pt?0:this._rts,this.totalTime(Dl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),yh(this),Wb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Va(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Gt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&tr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ei(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?eh(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=zb);var i=En;return En=n,bd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),En=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Tp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Tp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(wi(this,n),ei(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ei(i)),this._dur||(this._zTime=-Pt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Pt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Xt(n)?n:p0,l=function(){var h=i.then;i.then=null,s&&s(),Xt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ro(this)},r})();xi(hl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var Zn=(function(r){n0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ei(n.sortChildren),Vt&&tr(n.parent||Vt,Sr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_0(Sr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Go(0,arguments,this),this},t.from=function(i,s,a){return Go(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Go(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,zo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new sn(i,s,wi(this,a),1),this},t.call=function(i,s,a){return tr(this,sn.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new sn(i,a,wi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,zo(a).immediateRender=ei(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,zo(o).immediateRender=ei(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Gt(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,p,_,g,m,y,w,b,x,M,E;if(this!==Vt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,b=this._start,w=this._ts,m=!w,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,a);if(f=Gt(h%g),h===l?(_=this._repeat,f=c):(x=Gt(h/g),_=~~x,_&&_===x&&(f=c,_--),f>c&&(f=c)),x=za(this._tTime,g),!o&&this._tTime&&x!==_&&this._tTime-x*g-this._dur<=0&&(x=_),M&&_&1&&(f=c-f,E=1),_!==x&&!this._lock){var v=M&&x&1,T=v===(M&&_&1);if(_<x&&(v=!v),o=v?0:h%c?c:h,this._lock=1,this.render(o||(E?0:Gt(_*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&gi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,x=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Yb(this,Gt(o),Gt(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!x&&(gi(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!m){y=0,p&&(h+=this._zTime=-Pt);break}}d=p}else{d=this._last;for(var A=i<0?i:f;d;){if(p=d._prev,(d._act||A<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,s,a||En&&bd(d)),f!==this._time||!this._ts&&!m){y=0,p&&(h+=this._zTime=A?-Pt:Pt);break}}d=p}}if(y&&!s&&(this.pause(),y.render(f>=o?0:-Pt)._zTime=f>=o?1:-1,this._ts))return this._start=b,yh(this),this.render(i,s,a);this._onUpdate&&!s&&gi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(b===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&as(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(gi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Pr(s)||(s=wi(this,s,i)),!(i instanceof hl)){if(Fn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Tn(i))return this.addLabel(i,s);if(Xt(i))i=sn.delayedCall(0,i);else return this}return this!==i?tr(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Li);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof sn?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Tn(i)?this.removeLabel(i):Xt(i)?this.killTweensOf(i):(i.parent===this&&xh(this,i),i===this._recent&&(this._recent=this._last),Ps(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(di.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=wi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=sn.delayedCall(0,s||ol,a);return o.data="isPause",this._hasPause=1,tr(this,o,wi(this,i))},t.removePause=function(i){var s=this._first;for(i=wi(this,i);s;)s._start===i&&s.data==="isPause"&&as(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)jr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Di(i),l=this._first,c=Pr(s),h;l;)l instanceof sn?Gb(l._targets,o)&&(c?(!jr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=wi(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,p=sn.to(a,xi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Pt,onStart:function(){if(a.pause(),!d){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==g&&Ga(p,g,0,1).render(p._time,!0,!0),d=1}h&&h.apply(p,u||[])}},s));return f?p.render(0):p},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,xi({startAt:{time:wi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),wp(this,wi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),wp(this,wi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Gt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ps(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ps(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Li,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,tr(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Gt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ga(a,a===Vt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Vt._ts&&(f0(Vt,eh(i,Vt)),h0=di.frame),di.frame>=yp){yp+=bi.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&bi.autoSleep&&di._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||di.sleep()}}},e})(hl);xi(Zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var uv=function(e,t,n,i,s,a,o){var l=new ni(this._pt,e,t,0,1,k0,null,s),c=0,h=0,u,f,d,p,_,g,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ll(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),f=n.match(Ih)||[];u=Ih.exec(i);)p=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==f[h++]&&(g=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:g,c:p.charAt(1)==="="?Ca(g,p)-g:parseFloat(p)-g,m:d&&d<4?Math.round:0},c=Ih.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(a0.test(i)||m)&&(l.e=0),this._pt=l,l},vd=function(e,t,n,i,s,a,o,l,c,h){Xt(i)&&(i=i(s||0,e,a));var u=e[t],f=n!=="get"?n:Xt(u)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=Xt(u)?c?gv:U0:yd,p;if(Tn(i)&&(~i.indexOf("random(")&&(i=ll(i)),i.charAt(1)==="="&&(p=Ca(f,i)+(In(f)||0),(p||p===0)&&(i=p))),!h||f!==i||Xu)return!isNaN(f*i)&&i!==""?(p=new ni(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?bv:O0,0,d),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&pd(t,i),uv.call(this,e,t,f,i,d,l||bi.stringFilter,c))},fv=function(e,t,n,i,s){if(Xt(e)&&(e=Vo(e,s,t,n,i)),!ur(e)||e.style&&e.nodeType||Fn(e)||r0(e))return Tn(e)?Vo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Vo(e[o],s,t,n,i);return a},I0=function(e,t,n,i,s,a){var o,l,c,h;if(ui[e]&&(o=new ui[e]).init(s,o.rawVars?t[e]:fv(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new ni(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==wa))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},jr,Xu,xd=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,g=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:g,w=e._overwrite==="auto"&&!hd,b=e.timeline,x=i.easeReverse||u,M,E,v,T,A,P,C,N,I,F,z,B,$;if(b&&(!f||!s)&&(s="none"),e._ease=Ls(s,sl.ease),e._rEase=x&&(Ls(x)||e._ease),e._from=!b&&!!i.runBackwards,e._from&&(e.ratio=1),!b||f&&!i.stagger){if(N=g[0]?Cs(g[0]).harness:0,B=N&&i[N.prop],M=Qc(i,md),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&p?Ic:Bb),_._lazy=0),a){if(as(e._startAt=sn.set(g,xi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ei(l),startAt:null,delay:0,onUpdate:c&&function(){return gi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(En||!o&&!d)&&e._startAt.revert(Ic),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(o=!1),v=xi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ei(l),immediateRender:o,stagger:0,parent:m},M),B&&(v[N.prop]=B),as(e._startAt=sn.set(g,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(En?e._startAt.revert(Ic):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&ei(l)||l&&!p,E=0;E<g.length;E++){if(A=g[E],C=A._gsap||_d(g)[E]._gsap,e._ptLookup[E]=F={},zu[C.id]&&ns.length&&Zc(),z=y===g?E:y.indexOf(A),N&&(I=new N).init(A,B||M,e,z,y)!==!1&&(e._pt=T=new ni(e._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){F[W]=T}),I.priority&&(P=1)),!N||B)for(v in M)ui[v]&&(I=I0(v,M,e,z,A,y))?I.priority&&(P=1):F[v]=T=vd.call(e,A,v,"get",M[v],z,y,0,i.stringFilter);e._op&&e._op[E]&&e.kill(A,e._op[E]),w&&e._pt&&(jr=e,Vt.killTweensOf(A,F,e.globalTime(t)),$=!e.parent,jr=0),e._pt&&l&&(zu[C.id]=1)}P&&B0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,f&&t<=0&&b.render(Li,!0,!0)},dv=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Xu=1,e.vars[t]="+=0",xd(e,o),Xu=0,l?al(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=jt(n)+In(u.e)),u.b&&(u.b=h.s+In(u.b))},pv=function(e,t){var n=e[0]?Cs(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ba({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},mv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Fn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Vo=function(e,t,n,i,s){return Xt(e)?e.call(t,n,i,s):Tn(e)&&~e.indexOf("random(")?ll(e):e},N0=gd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",F0={};ti(N0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return F0[r]=1});var sn=(function(r){n0(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:zo(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=i.parent||Vt,y=(Fn(n)||r0(n)?Pr(n[0]):"length"in i)?[n]:Di(n),w,b,x,M,E,v,T,A;if(o._targets=y.length?_d(y):al("GSAP target "+n+" not found. https://gsap.com",!bi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,p||f||Fl(c)||Fl(h)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(w=o.timeline=new Zn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:y}),w.kill(),w.parent=w._dp=Sr(o),w._start=0,f||Fl(c)||Fl(h)){if(M=y.length,T=f&&y0(f),ur(f))for(E in f)~N0.indexOf(E)&&(A||(A={}),A[E]=f[E]);for(b=0;b<M;b++)x=Qc(i,F0),x.stagger=0,P&&(x.easeReverse=P),A&&Ba(x,A),v=y[b],x.duration=+Vo(c,Sr(o),b,v,y),x.delay=(+Vo(h,Sr(o),b,v,y)||0)-o._delay,!f&&M===1&&x.delay&&(o._delay=h=x.delay,o._start+=h,x.delay=0),w.to(v,x,T?T(b,v,y):0),w._ease=_t.none;w.duration()?c=h=0:o.timeline=0}else if(p){zo(xi(w.vars.defaults,{ease:"none"})),w._ease=Ls(p.ease||i.ease||"none");var C=0,N,I,F;if(Fn(p))p.forEach(function(z){return w.to(y,z,">")}),w.duration();else{x={};for(E in p)E==="ease"||E==="easeEach"||mv(E,p[E],x,p.easeEach);for(E in x)for(N=x[E].sort(function(z,B){return z.t-B.t}),C=0,b=0;b<N.length;b++)I=N[b],F={ease:I.e,duration:(I.t-(b?N[b-1].t:0))/100*c},F[E]=I.v,w.to(y,F,C),C+=F.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return d===!0&&!hd&&(jr=Sr(o),Vt.killTweensOf(y),jr=0),tr(m,Sr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!p&&o._start===Gt(m._time)&&ei(u)&&qb(Sr(o))&&m.data!=="nested")&&(o._tTime=-Pt,o.render(Math.max(0,-h)||0)),g&&_0(Sr(o),g),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Pt&&!h?l:i<Pt?0:i,f,d,p,_,g,m,y,w;if(!c)Kb(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=Gt(u%_),u===l?(p=this._repeat,f=c):(g=Gt(u/_),p=~~g,p&&p===g?(f=c,p--):f>c&&(f=c)),m=this._yoyo&&p&1,m&&(f=c-f),g=za(this._tTime,_),f===o&&!a&&this._initted&&p===g)return this._tTime=u,this;p!==g&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Gt(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(b0(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var b=f<o;if(b!==this._inv){var x=b?o:c-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=x?(b?-1:1)/x:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!g&&(gi(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;w&&w.render(i<0?i:w._dur*w._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Gu(this,i,s,a),gi(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&gi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Gu(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&as(this,1),!s&&!(h&&!o)&&(u||o||m)&&(gi(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){cl||di.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||xd(this,c),h=this._ease(c/this._dur),dv(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Sh(this,0),this.parent||m0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ro(this):this.scrollTrigger&&this.scrollTrigger.kill(!!En),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,jr&&jr.vars.overwrite!==!0)._first||Ro(this),this.parent&&a!==this.timeline.totalDuration()&&Ga(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Di(i):o,c=this._ptLookup,h=this._pt,u,f,d,p,_,g,m;if((!s||s==="all")&&Hb(o,l))return s==="all"&&(this._pt=0),Ro(this);for(u=this._op=this._op||[],s!=="all"&&(Tn(s)&&(_={},ti(s,function(y){return _[y]=1}),s=_),s=pv(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(u[m]=s,p=f,d={}):(d=u[m]=u[m]||{},p=s);for(_ in p)g=f&&f[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&xh(this,g,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Ro(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Go(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Go(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Vt.killTweensOf(i,s,a)},e})(hl);xi(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ti("staggerTo,staggerFrom,staggerFromTo",function(r){sn[r]=function(){var e=new Zn,t=Hu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var yd=function(e,t,n){return e[t]=n},U0=function(e,t,n){return e[t](n)},gv=function(e,t,n,i){return e[t](i.fp,n)},_v=function(e,t,n){return e.setAttribute(t,n)},Sd=function(e,t){return Xt(e[t])?U0:ud(e[t])&&e.setAttribute?_v:yd},O0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},bv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},k0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Md=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},vv=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},xv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?xh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},yv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},B0=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},ni=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||O0,this.d=l||this,this.set=c||yd,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=yv,this.m=n,this.mt=s,this.tween=i},r})();ti(gd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return md[r]=1});vi.TweenMax=vi.TweenLite=sn;vi.TimelineLite=vi.TimelineMax=Zn;Vt=new Zn({sortChildren:!1,defaults:sl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bi.stringFilter=P0;var Ds=[],Fc={},Sv=[],Ap=0,Mv=0,kh=function(e){return(Fc[e]||Sv).map(function(t){return t()})},Ku=function(){var e=Date.now(),t=[];e-Ap>2&&(kh("matchMediaInit"),Ds.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Zi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),kh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ap=e,kh("matchMedia"))},z0=(function(){function r(t,n){this.selector=n&&Wu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Mv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Xt(n)&&(s=i,i=n,n=Xt);var a=this,o=function(){var c=Bt,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Wu(s)),Bt=a,u=i.apply(a,arguments),Xt(u)&&a._r.push(u),Bt=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Xt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof sn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Zn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof sn)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ds.length;a--;)Ds[a].id===this.id&&Ds.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),Tv=(function(){function r(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){ur(n)||(n={matches:n});var a=new z0(0,s||this.scope),o=a.conditions={},l,c,h;Bt&&!a.selector&&(a.selector=Bt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Zi.matchMedia(n[c]),l&&(Ds.indexOf(a)<0&&Ds.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ku):l.addEventListener("change",Ku)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),th={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return A0(i)})},timeline:function(e){return new Zn(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Tn(e)&&(e=Di(e)[0]);var s=Cs(e||{}).get,a=n?p0:d0;return n==="native"&&(n=""),e&&(t?a((ui[t]&&ui[t].get||s)(e,t,n,i)):function(o,l,c){return a((ui[o]&&ui[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Di(e),e.length>1){var i=e.map(function(h){return si.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var a=ui[t],o=Cs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;wa._pt=0,u.init(e,n?h+n:h,wa,0,[e]),u.render(1,u),wa._pt&&Md(1,wa)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=si.to(e,xi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ls(e.ease,sl.ease)),Sp(sl,e||{})},config:function(e){return Sp(bi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ui[o]&&!vi[o]&&al(t+" effect requires "+o+" plugin.")}),Nh[t]=function(o,l,c){return n(Di(o),xi(l||{},s),c)},a&&(Zn.prototype[t]=function(o,l,c){return this.add(Nh[t](o,ur(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=Ls(t)},parseEase:function(e,t){return arguments.length?Ls(e,t):_t},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Zn(e),i,s;for(n.smoothChildTiming=ei(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof sn&&i.vars.onComplete===i._targets[0]))&&tr(n,i,i._start-i._delay),i=s;return tr(Vt,n,0),n},context:function(e,t){return e?new z0(e,t):Bt},matchMedia:function(e){return new Tv(e)},matchMediaRefresh:function(){return Ds.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ku()},addEventListener:function(e,t){var n=Fc[e]||(Fc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Fc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:tv,wrapYoyo:nv,distribute:y0,random:M0,snap:S0,normalize:ev,getUnit:In,clamp:jb,splitColor:R0,toArray:Di,selector:Wu,mapRange:w0,pipe:Zb,unitize:Qb,interpolate:iv,shuffle:x0},install:l0,effects:Nh,ticker:di,updateRoot:Zn.updateRoot,plugins:ui,globalTimeline:Vt,core:{PropTween:ni,globals:c0,Tween:sn,Timeline:Zn,Animation:hl,getCache:Cs,_removeLinkedListItem:xh,reverting:function(){return En},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return hd=e}}};ti("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return th[r]=sn[r]});di.add(Zn.updateRoot);wa=th.to({},{duration:0});var wv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ev=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=wv(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Bh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Tn(s)&&(l={},ti(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Ev(o,s)}}}},si=th.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)En?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Bh("roundProps",qu),Bh("modifiers"),Bh("snap",S0))||th;sn.version=Zn.version=si.version="3.15.0";o0=1;fd()&&Va();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;var Rp,$r,Pa,Td,Es,Cp,wd,Av=function(){return typeof window<"u"},Lr={},Ms=180/Math.PI,La=Math.PI/180,$s=Math.atan2,Pp=1e8,Ed=/([A-Z])/g,Rv=/(left|right|width|margin|padding|x)/i,Cv=/[\s,\(]\S/,nr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Pv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Lv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Dv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Iv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},G0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},V0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Nv=function(e,t,n){return e.style[t]=n},Fv=function(e,t,n){return e.style.setProperty(t,n)},Uv=function(e,t,n){return e._gsap[t]=n},Ov=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},kv=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Bv=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ht="transform",ii=Ht+"Origin",zv=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Lr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=nr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Mr(i,o)}):this.tfm[e]=a.x?a[e]:Mr(i,e),e===ii&&(this.tfm.zOrigin=a.zOrigin);else return nr.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ht)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ii,t,"")),e=Ht}(s||t)&&this.props.push(e,t,s[e])},H0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Gv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ed,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=wd(),(!s||!s.isStart)&&!n[Ht]&&(H0(n),i.zOrigin&&n[ii]&&(n[ii]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},W0=function(e,t){var n={target:e,props:[],revert:Gv,save:zv};return e._gsap||si.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},q0,Ju=function(e,t){var n=$r.createElementNS?$r.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):$r.createElement(e);return n&&n.style?n:$r.createElement(e)},_i=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ed,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ha(t)||t,1)||""},Lp="O,Moz,ms,Ms,Webkit".split(","),Ha=function(e,t,n){var i=t||Es,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Lp[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Lp[a]:"")+e},ju=function(){Av()&&window.document&&(Rp=window,$r=Rp.document,Pa=$r.documentElement,Es=Ju("div")||{style:{}},Ju("div"),Ht=Ha(Ht),ii=Ht+"Origin",Es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",q0=!!Ha("perspective"),wd=si.core.reverting,Td=1)},Dp=function(e){var t=e.ownerSVGElement,n=Ju("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Pa.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Pa.removeChild(n),s},Ip=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},X0=function(e){var t,n;try{t=e.getBBox()}catch{t=Dp(e),n=1}return t&&(t.width||t.height)||n||(t=Dp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ip(e,["x","cx","x1"])||0,y:+Ip(e,["y","cy","y1"])||0,width:0,height:0}:t},K0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&X0(e))},os=function(e,t){if(t){var n=e.style,i;t in Lr&&t!==ii&&(t=Ht),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ed,"-$1").toLowerCase())):n.removeAttribute(t)}},Zr=function(e,t,n,i,s,a){var o=new ni(e._pt,t,n,0,1,a?V0:G0);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Np={deg:1,rad:1,turn:1},Vv={grid:1,flex:1},ls=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Es.style,l=Rv.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",p,_,g,m;if(i===a||!s||Np[i]||Np[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&K0(e),(d||a==="%")&&(Lr[t]||~t.indexOf("adius")))return p=m?e.getBBox()[l?"width":"height"]:e[h],jt(d?s/p*u:s/100*p);if(o[l?"width":"height"]=u+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===$r||!_.appendChild)&&(_=$r.body),g=_._gsap,g&&d&&g.width&&l&&g.time===di.time&&!g.uncache)return jt(s/g.width*u);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+i,p=e[h],y?e.style[t]=y:os(e,t)}else(d||a==="%")&&!Vv[_i(_,"display")]&&(o.position=_i(e,"position")),_===e&&(o.position="static"),_.appendChild(Es),p=Es[h],_.removeChild(Es),o.position="absolute";return l&&d&&(g=Cs(_),g.time=di.time,g.width=_[h]),jt(f?p*s/u:p&&s?u/p*s:0)},Mr=function(e,t,n,i){var s;return Td||ju(),t in nr&&t!=="transform"&&(t=nr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Lr[t]&&t!=="transform"?(s=fl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ih(_i(e,ii))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=nh[t]&&nh[t](e,t,n)||_i(e,t)||u0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ls(e,t,s,n)+n:s},Hv=function(e,t,n,i){if(!n||n==="none"){var s=Ha(t,e,1),a=s&&_i(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=_i(e,"borderTopColor"))}var o=new ni(this._pt,e.style,t,0,1,k0),l=0,c=0,h,u,f,d,p,_,g,m,y,w,b,x;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=_i(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=_i(e,t)||i,_?e.style[t]=_:os(e,t)),h=[n,i],P0(h),n=h[0],i=h[1],f=n.match(Ta)||[],x=i.match(Ta)||[],x.length){for(;u=Ta.exec(i);)g=u[0],y=i.substring(l,u.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),g!==(_=f[c++]||"")&&(d=parseFloat(_)||0,b=_.substr((d+"").length),g.charAt(1)==="="&&(g=Ca(d,g)+b),m=parseFloat(g),w=g.substr((m+"").length),l=Ta.lastIndex-w.length,w||(w=w||bi.units[t]||b,l===i.length&&(i+=w,o.e+=w)),b!==w&&(d=ls(e,t,_,w)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:m-d,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?V0:G0;return a0.test(i)&&(o.e=0),this._pt=o,o},Fp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Wv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Fp[n]||n,t[1]=Fp[i]||i,t.join(" ")},qv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Lr[o]&&(l=1,o=o==="transformOrigin"?ii:Ht),os(n,o);l&&(os(n,Ht),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",fl(n,1),a.uncache=1,H0(i)))}},nh={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new ni(e._pt,t,n,0,0,qv);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ul=[1,0,0,1,0,0],Y0={},J0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Up=function(e){var t=_i(e,Ht);return J0(t)?ul:t.substr(7).match(s0).map(jt)},Ad=function(e,t){var n=e._gsap||Cs(e),i=e.style,s=Up(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ul:s):(s===ul&&!e.offsetParent&&e!==Pa&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Pa.appendChild(e)),s=Up(e),l?i.display=l:os(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Pa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$u=function(e,t,n,i,s,a){var o=e._gsap,l=s||Ad(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],p=l[1],_=l[2],g=l[3],m=l[4],y=l[5],w=t.split(" "),b=parseFloat(w[0])||0,x=parseFloat(w[1])||0,M,E,v,T;n?l!==ul&&(E=d*g-p*_)&&(v=b*(g/E)+x*(-_/E)+(_*y-g*m)/E,T=b*(-p/E)+x*(d/E)-(d*y-p*m)/E,b=v,x=T):(M=X0(e),b=M.x+(~w[0].indexOf("%")?b/100*M.width:b),x=M.y+(~(w[1]||w[0]).indexOf("%")?x/100*M.height:x)),i||i!==!1&&o.smooth?(m=b-c,y=x-h,o.xOffset=u+(m*d+y*_)-m,o.yOffset=f+(m*p+y*g)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=x,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ii]="0px 0px",a&&(Zr(a,o,"xOrigin",c,b),Zr(a,o,"yOrigin",h,x),Zr(a,o,"xOffset",u,o.xOffset),Zr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+x)},fl=function(e,t){var n=e._gsap||new D0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=_i(e,ii)||"0",h,u,f,d,p,_,g,m,y,w,b,x,M,E,v,T,A,P,C,N,I,F,z,B,$,W,L,j,fe,me,Ne,qe;return h=u=f=_=g=m=y=w=b=0,d=p=1,n.svg=!!(e.getCTM&&K0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),i.scale=i.rotate=i.translate="none"),E=Ad(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),$u(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,E)),x=n.xOrigin||0,M=n.yOrigin||0,E!==ul&&(P=E[0],C=E[1],N=E[2],I=E[3],h=F=E[4],u=z=E[5],E.length===6?(d=Math.sqrt(P*P+C*C),p=Math.sqrt(I*I+N*N),_=P||C?$s(C,P)*Ms:0,y=N||I?$s(N,I)*Ms+_:0,y&&(p*=Math.abs(Math.cos(y*La))),n.svg&&(h-=x-(x*P+M*N),u-=M-(x*C+M*I))):(qe=E[6],me=E[7],L=E[8],j=E[9],fe=E[10],Ne=E[11],h=E[12],u=E[13],f=E[14],v=$s(qe,fe),g=v*Ms,v&&(T=Math.cos(-v),A=Math.sin(-v),B=F*T+L*A,$=z*T+j*A,W=qe*T+fe*A,L=F*-A+L*T,j=z*-A+j*T,fe=qe*-A+fe*T,Ne=me*-A+Ne*T,F=B,z=$,qe=W),v=$s(-N,fe),m=v*Ms,v&&(T=Math.cos(-v),A=Math.sin(-v),B=P*T-L*A,$=C*T-j*A,W=N*T-fe*A,Ne=I*A+Ne*T,P=B,C=$,N=W),v=$s(C,P),_=v*Ms,v&&(T=Math.cos(v),A=Math.sin(v),B=P*T+C*A,$=F*T+z*A,C=C*T-P*A,z=z*T-F*A,P=B,F=$),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),d=jt(Math.sqrt(P*P+C*C+N*N)),p=jt(Math.sqrt(z*z+qe*qe)),v=$s(F,z),y=Math.abs(v)>2e-4?v*Ms:0,b=Ne?1/(Ne<0?-Ne:Ne):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!J0(_i(e,Ht)),B&&e.setAttribute("transform",B))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=jt(d),n.scaleY=jt(p),n.rotation=jt(_)+o,n.rotationX=jt(g)+o,n.rotationY=jt(m)+o,n.skewX=y+o,n.skewY=w+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ii]=ih(c)),n.xOffset=n.yOffset=0,n.force3D=bi.force3D,n.renderTransform=n.svg?Kv:q0?j0:Xv,n.uncache=0,n},ih=function(e){return(e=e.split(" "))[0]+" "+e[1]},zh=function(e,t,n){var i=In(t);return jt(parseFloat(t)+parseFloat(ls(e,"x",n+"px",i)))+i},Xv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,j0(e,t)},ds="0deg",ro="0px",ps=") ",j0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,y=n.target,w=n.zOrigin,b="",x=m==="auto"&&e&&e!==1||m===!0;if(w&&(u!==ds||h!==ds)){var M=parseFloat(h)*La,E=Math.sin(M),v=Math.cos(M),T;M=parseFloat(u)*La,T=Math.cos(M),a=zh(y,a,E*T*-w),o=zh(y,o,-Math.sin(M)*-w),l=zh(y,l,v*T*-w+w)}g!==ro&&(b+="perspective("+g+ps),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(x||a!==ro||o!==ro||l!==ro)&&(b+=l!==ro||x?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ps),c!==ds&&(b+="rotate("+c+ps),h!==ds&&(b+="rotateY("+h+ps),u!==ds&&(b+="rotateX("+u+ps),(f!==ds||d!==ds)&&(b+="skew("+f+", "+d+ps),(p!==1||_!==1)&&(b+="scale("+p+", "+_+ps),y.style[Ht]=b||"translate(0, 0)"},Kv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,y=n.forceCSS,w=parseFloat(a),b=parseFloat(o),x,M,E,v,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=La,c*=La,x=Math.cos(l)*u,M=Math.sin(l)*u,E=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(h*=La,T=Math.tan(c-h),T=Math.sqrt(1+T*T),E*=T,v*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),x*=T,M*=T)),x=jt(x),M=jt(M),E=jt(E),v=jt(v)):(x=u,v=f,M=E=0),(w&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(w=ls(d,"x",a,"px"),b=ls(d,"y",o,"px")),(p||_||g||m)&&(w=jt(w+p-(p*x+_*E)+g),b=jt(b+_-(p*M+_*v)+m)),(i||s)&&(T=d.getBBox(),w=jt(w+i/100*T.width),b=jt(b+s/100*T.height)),T="matrix("+x+","+M+","+E+","+v+","+w+","+b+")",d.setAttribute("transform",T),y&&(d.style[Ht]=T)},Yv=function(e,t,n,i,s){var a=360,o=Tn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ms:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Pp)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Pp)%a-~~(c/a)*a)),e._pt=f=new ni(e._pt,t,n,i,c,Pv),f.e=h,f.u="deg",e._props.push(n),f},Op=function(e,t){for(var n in t)e[n]=t[n];return e},Jv=function(e,t,n){var i=Op({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ht]=t,o=fl(n,1),os(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],a[Ht]=t,o=fl(n,1),a[Ht]=c);for(l in Lr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=In(c),p=In(h),u=d!==p?ls(n,l,c,p):parseFloat(c),f=parseFloat(h),e._pt=new ni(e._pt,o,l,u,f-u,Yu),e._pt.u=p||0,e._props.push(l));Op(o,i)};ti("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});nh[e>1?"border"+r:r]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(p){return Mr(o,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(p,_){return d[p]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,u)}});var $0={name:"css",register:ju,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,f,d,p,_,g,m,y,w,b,x,M,E,v,T;Td||ju(),this.styles=this.styles||W0(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(ui[_]&&I0(_,t,n,i,e,s)))){if(d=typeof h,p=nh[_],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=ll(h)),p)p(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",is.lastIndex=0,is.test(c)||(g=In(c),m=In(h),m?g!==m&&(c=ls(e,_,c,m)+m):g&&(h+=g)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Tn(c)&&~c.indexOf("random(")&&(c=ll(c)),In(c+"")||c==="auto"||(c+=bi.units[_]||In(Mr(e,_))||""),(c+"").charAt(1)==="="&&(c=Mr(e,_))):c=Mr(e,_),f=parseFloat(c),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),_ in nr&&(_==="autoAlpha"&&(f===1&&Mr(e,"visibility")==="hidden"&&u&&(f=0),v.push("visibility",0,o.visibility),Zr(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=nr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in Lr,w){if(this.styles.save(_),T=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=_i(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=h,h=_i(e,"perspective"),A?e.style.perspective=A:os(e,"perspective")}u=parseFloat(h)}if(b||(x=e._gsap,x.renderTransform&&!t.parseTransform||fl(e,t.parseTransform),M=t.smoothOrigin!==!1&&x.smooth,b=this._pt=new ni(this._pt,o,Ht,0,1,x.renderTransform,x,0,-1),b.dep=1),_==="scale")this._pt=new ni(this._pt,x,"scaleY",x.scaleY,(y?Ca(x.scaleY,y+u):u)-x.scaleY||0,Yu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(ii,0,o[ii]),h=Wv(h),x.svg?$u(e,h,0,M,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==x.zOrigin&&Zr(this,x,"zOrigin",x.zOrigin,m),Zr(this,o,_,ih(c),ih(h)));continue}else if(_==="svgOrigin"){$u(e,h,1,M,0,this);continue}else if(_ in Y0){Yv(this,x,_,f,y?Ca(f,y+h):h);continue}else if(_==="smoothOrigin"){Zr(this,x,"smooth",x.smooth,h);continue}else if(_==="force3D"){x[_]=h;continue}else if(_==="transform"){Jv(this,h,e);continue}}else _ in o||(_=Ha(_)||_);if(w||(u||u===0)&&(f||f===0)&&!Cv.test(h)&&_ in o)g=(c+"").substr((f+"").length),u||(u=0),m=In(h)||(_ in bi.units?bi.units[_]:g),g!==m&&(f=ls(e,_,c,m)),this._pt=new ni(this._pt,w?x:o,_,f,(y?Ca(f,y+u):u)-f,!w&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Iv:Yu),this._pt.u=m||0,w&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=Dv):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Lv);else if(_ in o)Hv.call(this,e,_,c,y?y+h:h);else if(_ in e)this.add(e,_,c||e[_],y?y+h:h,i,s);else if(_!=="parseTransform"){pd(_,h);continue}w||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),a.push(_)}}E&&B0(this)},render:function(e,t){if(t.tween._time||!wd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Mr,aliases:nr,getSetter:function(e,t,n){var i=nr[t];return i&&i.indexOf(",")<0&&(t=i),t in Lr&&t!==ii&&(e._gsap.x||Mr(e,"x"))?n&&Cp===n?t==="scale"?Ov:Uv:(Cp=n||{})&&(t==="scale"?kv:Bv):e.style&&!ud(e.style[t])?Nv:~t.indexOf("-")?Fv:Sd(e,t)},core:{_removeProperty:os,_getMatrix:Ad}};si.utils.checkPrefix=Ha;si.core.getStyleSaver=W0;(function(r,e,t,n){var i=ti(r+","+e+","+t,function(s){Lr[s]=1});ti(e,function(s){bi.units[s]="deg",Y0[s]=1}),nr[i[13]]=r+","+e,ti(n,function(s){var a=s.split(":");nr[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){bi.units[r]="px"});si.registerPlugin($0);var rt=si.registerPlugin($0)||si;rt.core.Tween;function jv(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function $v(r,e,t){return e&&jv(r.prototype,e),r}var wn,Uc,pi,Qr,es,Da,Z0,Ts,Ia,Q0,Er,Gi,e_,t_=function(){return wn||typeof window<"u"&&(wn=window.gsap)&&wn.registerPlugin&&wn},n_=1,Ea=[],ft=[],or=[],Ho=Date.now,Zu=function(e,t){return t},Zv=function(){var e=Ia.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ft),i.push.apply(i,or),ft=n,or=i,Zu=function(a,o){return t[a](o)}},rs=function(e,t){return~or.indexOf(e)&&or[or.indexOf(e)+1][t]},Wo=function(e){return!!~Q0.indexOf(e)},Hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},zn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ul="scrollLeft",Ol="scrollTop",Qu=function(){return Er&&Er.isPressed||ft.cache++},rh=function(e,t){var n=function i(s){if(s||s===0){n_&&(pi.history.scrollRestoration="manual");var a=Er&&Er.isPressed;s=i.v=Math.round(s)||(Er&&Er.iOS?1:0),e(s),i.cacheID=ft.cache,a&&Zu("ss",s)}else(t||ft.cache!==i.cacheID||Zu("ref"))&&(i.cacheID=ft.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Jn={s:Ul,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:rh(function(r){return arguments.length?pi.scrollTo(r,cn.sc()):pi.pageXOffset||Qr[Ul]||es[Ul]||Da[Ul]||0})},cn={s:Ol,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Jn,sc:rh(function(r){return arguments.length?pi.scrollTo(Jn.sc(),r):pi.pageYOffset||Qr[Ol]||es[Ol]||Da[Ol]||0})},$n=function(e,t){return(t&&t._ctx&&t._ctx.selector||wn.utils.toArray)(e)[0]||(typeof e=="string"&&wn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Qv=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},cs=function(e,t){var n=t.s,i=t.sc;Wo(e)&&(e=Qr.scrollingElement||es);var s=ft.indexOf(e),a=i===cn.sc?1:2;!~s&&(s=ft.push(e)-1),ft[s+a]||Hn(e,"scroll",Qu);var o=ft[s+a],l=o||(ft[s+a]=rh(rs(e,n),!0)||(Wo(e)?i:rh(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=wn.getProperty(e,"scrollBehavior")==="smooth"),l},ef=function(e,t,n){var i=e,s=e,a=Ho(),o=a,l=t||50,c=Math.max(500,l*3),h=function(p,_){var g=Ho();_||g-a>l?(s=i,i=p,o=a,a=g):n?i+=p:i=s+(p-s)/(g-o)*(a-o)},u=function(){s=i=n?0:i,o=a=0},f=function(p){var _=o,g=s,m=Ho();return(p||p===0)&&p!==i&&h(p),a===o||m-o>c?0:(i+(n?g:-g))/((n?m:a)-_)*1e3};return{update:h,reset:u,getVelocity:f}},so=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},i_=function(){Ia=wn.core.globals().ScrollTrigger,Ia&&Ia.core&&Zv()},r_=function(e){return wn=e||t_(),!Uc&&wn&&typeof document<"u"&&document.body&&(pi=window,Qr=document,es=Qr.documentElement,Da=Qr.body,Q0=[pi,Qr,es,Da],wn.utils.clamp,e_=wn.core.context||function(){},Ts="onpointerenter"in Da?"pointer":"mouse",Z0=$t.isTouch=pi.matchMedia&&pi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in pi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Gi=$t.eventTypes=("ontouchstart"in es?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in es?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return n_=0},500),Uc=1),Ia||i_(),Uc};Jn.op=cn;ft.cache=0;var $t=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Uc||r_(wn)||console.warn("Please gsap.registerPlugin(Observer)"),Ia||i_();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,g=n.onDragStart,m=n.onDragEnd,y=n.onDrag,w=n.onPress,b=n.onRelease,x=n.onRight,M=n.onLeft,E=n.onUp,v=n.onDown,T=n.onChangeX,A=n.onChangeY,P=n.onChange,C=n.onToggleX,N=n.onToggleY,I=n.onHover,F=n.onHoverEnd,z=n.onMove,B=n.ignoreCheck,$=n.isNormalizer,W=n.onGestureStart,L=n.onGestureEnd,j=n.onWheel,fe=n.onEnable,me=n.onDisable,Ne=n.onClick,qe=n.scrollSpeed,Ze=n.capture,J=n.allowClicks,te=n.lockAxis,_e=n.onLockAxis;this.target=o=$n(o)||es,this.vars=n,d&&(d=wn.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,qe=qe||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(pi.getComputedStyle(Da).lineHeight)||22);var Xe,xe,De,Fe,Q,re,oe,O=this,pe=0,Ge=0,Ue=n.passive||!h&&n.passive!==!1,Re=cs(o,Jn),je=cs(o,cn),k=Re(),ct=je(),Ye=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Gi[0]==="pointerdown",D=Wo(o),S=o.ownerDocument||Qr,H=[0,0,0],q=[0,0,0],Z=0,ge=function(){return Z=Ho()},ce=function(ae,Ke){return(O.event=ae)&&d&&Qv(ae.target,d)||Ke&&Ye&&ae.pointerType!=="touch"||B&&B(ae,Ke)},ee=function(){O._vx.reset(),O._vy.reset(),xe.pause(),u&&u(O)},ie=function(){var ae=O.deltaX=kp(H),Ke=O.deltaY=kp(q),le=Math.abs(ae)>=i,Je=Math.abs(Ke)>=i;P&&(le||Je)&&P(O,ae,Ke,H,q),le&&(x&&O.deltaX>0&&x(O),M&&O.deltaX<0&&M(O),T&&T(O),C&&O.deltaX<0!=pe<0&&C(O),pe=O.deltaX,H[0]=H[1]=H[2]=0),Je&&(v&&O.deltaY>0&&v(O),E&&O.deltaY<0&&E(O),A&&A(O),N&&O.deltaY<0!=Ge<0&&N(O),Ge=O.deltaY,q[0]=q[1]=q[2]=0),(Fe||De)&&(z&&z(O),De&&(g&&De===1&&g(O),y&&y(O),De=0),Fe=!1),re&&!(re=!1)&&_e&&_e(O),Q&&(j(O),Q=!1),Xe=0},ye=function(ae,Ke,le){H[le]+=ae,q[le]+=Ke,O._vx.update(ae),O._vy.update(Ke),c?Xe||(Xe=requestAnimationFrame(ie)):ie()},Ie=function(ae,Ke){te&&!oe&&(O.axis=oe=Math.abs(ae)>Math.abs(Ke)?"x":"y",re=!0),oe!=="y"&&(H[2]+=ae,O._vx.update(ae,!0)),oe!=="x"&&(q[2]+=Ke,O._vy.update(Ke,!0)),c?Xe||(Xe=requestAnimationFrame(ie)):ie()},Se=function(ae){if(!ce(ae,1)){ae=so(ae,h);var Ke=ae.clientX,le=ae.clientY,Je=Ke-O.x,Oe=le-O.y,et=O.isDragging;O.x=Ke,O.y=le,(et||(Je||Oe)&&(Math.abs(O.startX-Ke)>=s||Math.abs(O.startY-le)>=s))&&(De||(De=et?2:1),et||(O.isDragging=!0),Ie(Je,Oe))}},ve=O.onPress=function(ue){ce(ue,1)||ue&&ue.button||(O.axis=oe=null,xe.pause(),O.isPressed=!0,ue=so(ue),pe=Ge=0,O.startX=O.x=ue.clientX,O.startY=O.y=ue.clientY,O._vx.reset(),O._vy.reset(),Hn($?o:S,Gi[1],Se,Ue,!0),O.deltaX=O.deltaY=0,w&&w(O))},de=O.onRelease=function(ue){if(!ce(ue,1)){zn($?o:S,Gi[1],Se,!0);var ae=!isNaN(O.y-O.startY),Ke=O.isDragging,le=Ke&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),Je=so(ue);!le&&ae&&(O._vx.reset(),O._vy.reset(),h&&J&&wn.delayedCall(.08,function(){if(Ho()-Z>300&&!ue.defaultPrevented){if(ue.target.click)ue.target.click();else if(S.createEvent){var Oe=S.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,pi,1,Je.screenX,Je.screenY,Je.clientX,Je.clientY,!1,!1,!1,!1,0,null),ue.target.dispatchEvent(Oe)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,u&&Ke&&!$&&xe.restart(!0),De&&ie(),m&&Ke&&m(O),b&&b(O,le)}},Ve=function(ae){return ae.touches&&ae.touches.length>1&&(O.isGesturing=!0)&&W(ae,O.isDragging)},$e=function(){return(O.isGesturing=!1)||L(O)},G=function(ae){if(!ce(ae)){var Ke=Re(),le=je();ye((Ke-k)*qe,(le-ct)*qe,1),k=Ke,ct=le,u&&xe.restart(!0)}},be=function(ae){if(!ce(ae)){ae=so(ae,h),j&&(Q=!0);var Ke=(ae.deltaMode===1?l:ae.deltaMode===2?pi.innerHeight:1)*p;ye(ae.deltaX*Ke,ae.deltaY*Ke,0),u&&!$&&xe.restart(!0)}},ne=function(ae){if(!ce(ae)){var Ke=ae.clientX,le=ae.clientY,Je=Ke-O.x,Oe=le-O.y;O.x=Ke,O.y=le,Fe=!0,u&&xe.restart(!0),(Je||Oe)&&Ie(Je,Oe)}},Me=function(ae){O.event=ae,I(O)},we=function(ae){O.event=ae,F(O)},se=function(ae){return ce(ae)||so(ae,h)&&Ne(O)};xe=O._dc=wn.delayedCall(f||.25,ee).pause(),O.deltaX=O.deltaY=0,O._vx=ef(0,50,!0),O._vy=ef(0,50,!0),O.scrollX=Re,O.scrollY=je,O.isDragging=O.isGesturing=O.isPressed=!1,e_(this),O.enable=function(ue){return O.isEnabled||(Hn(D?S:o,"scroll",Qu),a.indexOf("scroll")>=0&&Hn(D?S:o,"scroll",G,Ue,Ze),a.indexOf("wheel")>=0&&Hn(o,"wheel",be,Ue,Ze),(a.indexOf("touch")>=0&&Z0||a.indexOf("pointer")>=0)&&(Hn(o,Gi[0],ve,Ue,Ze),Hn(S,Gi[2],de),Hn(S,Gi[3],de),J&&Hn(o,"click",ge,!0,!0),Ne&&Hn(o,"click",se),W&&Hn(S,"gesturestart",Ve),L&&Hn(S,"gestureend",$e),I&&Hn(o,Ts+"enter",Me),F&&Hn(o,Ts+"leave",we),z&&Hn(o,Ts+"move",ne)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=Fe=De=!1,O._vx.reset(),O._vy.reset(),k=Re(),ct=je(),ue&&ue.type&&ve(ue),fe&&fe(O)),O},O.disable=function(){O.isEnabled&&(Ea.filter(function(ue){return ue!==O&&Wo(ue.target)}).length||zn(D?S:o,"scroll",Qu),O.isPressed&&(O._vx.reset(),O._vy.reset(),zn($?o:S,Gi[1],Se,!0)),zn(D?S:o,"scroll",G,Ze),zn(o,"wheel",be,Ze),zn(o,Gi[0],ve,Ze),zn(S,Gi[2],de),zn(S,Gi[3],de),zn(o,"click",ge,!0),zn(o,"click",se),zn(S,"gesturestart",Ve),zn(S,"gestureend",$e),zn(o,Ts+"enter",Me),zn(o,Ts+"leave",we),zn(o,Ts+"move",ne),O.isEnabled=O.isPressed=O.isDragging=!1,me&&me(O))},O.kill=O.revert=function(){O.disable();var ue=Ea.indexOf(O);ue>=0&&Ea.splice(ue,1),Er===O&&(Er=0)},Ea.push(O),$&&Wo(o)&&(Er=O),O.enable(_)},$v(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();$t.version="3.15.0";$t.create=function(r){return new $t(r)};$t.register=r_;$t.getAll=function(){return Ea.slice()};$t.getById=function(r){return Ea.filter(function(e){return e.vars.id===r})[0]};t_()&&wn.registerPlugin($t);var Le,ya,ut,St,fi,yt,Rd,sh,dl,qo,Po,kl,Ln,Mh,tf,Xn,Bp,zp,Sa,s_,Gh,a_,qn,nf,o_,l_,Xr,rf,Cd,Na,Pd,Xo,sf,Vh,Bl=1,Dn=Date.now,Hh=Dn(),Fi=0,Lo=0,Gp=function(e,t,n){var i=hi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Vp=function(e,t){return t&&(!hi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ex=function r(){return Lo&&requestAnimationFrame(r)},Hp=function(){return Mh=1},Wp=function(){return Mh=0},Qi=function(e){return e},Do=function(e){return Math.round(e*1e5)/1e5||0},c_=function(){return typeof window<"u"},h_=function(){return Le||c_()&&(Le=window.gsap)&&Le.registerPlugin&&Le},Os=function(e){return!!~Rd.indexOf(e)},u_=function(e){return(e==="Height"?Pd:ut["inner"+e])||fi["client"+e]||yt["client"+e]},f_=function(e){return rs(e,"getBoundingClientRect")||(Os(e)?function(){return Gc.width=ut.innerWidth,Gc.height=Pd,Gc}:function(){return Tr(e)})},tx=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=rs(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?u_(s):e["client"+s])||0}},nx=function(e,t){return!t||~or.indexOf(e)?f_(e):function(){return Gc}},ir=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=rs(e,n))?a()-f_(e)()[s]:Os(e)?(fi[n]||yt[n])-u_(i):e[n]-e["offset"+i])},zl=function(e,t){for(var n=0;n<Sa.length;n+=3)(!t||~t.indexOf(Sa[n+1]))&&e(Sa[n],Sa[n+1],Sa[n+2])},hi=function(e){return typeof e=="string"},Nn=function(e){return typeof e=="function"},Io=function(e){return typeof e=="number"},ws=function(e){return typeof e=="object"},ao=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Zs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Qs=Math.abs,d_="left",p_="top",Ld="right",Dd="bottom",Is="width",Ns="height",Ko="Right",Yo="Left",Jo="Top",jo="Bottom",rn="padding",Ri="margin",Wa="Width",Id="Height",ln="px",Ci=function(e){return ut.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},ix=function(e){var t=Ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},qp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Tr=function(e,t){var n=t&&Ci(e)[tf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},ah=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},m_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},rx=function(e){return function(t){return Le.utils.snap(m_(e),t)}},Nd=function(e){var t=Le.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},sx=function(e){return function(t,n){return Nd(m_(e))(t,n.direction)}},Gl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},bn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Vl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Xp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Hl={toggleActions:"play",anticipatePin:0},oh={top:0,left:0,center:.5,bottom:1,right:1},Oc=function(e,t){if(hi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in oh?oh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Wl=function(e,t,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,u=s.fontSize,f=s.indent,d=s.fontWeight,p=St.createElement("div"),_=Os(n)||rs(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,m=_?yt:n.tagName==="IFRAME"?n.contentDocument.body:n,y=e.indexOf("start")!==-1,w=y?c:h,b="border-color:"+w+";font-size:"+u+";color:"+w+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(b+=(i===cn?Ld:Dd)+":"+(a+parseFloat(f))+"px;"),o&&(b+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=b,p.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],kc(p,0,i,y),p},kc=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Wa]=1,s["border"+o+Wa]=0,s[n.p]=t+"px",Le.set(e,s)},lt=[],af={},pl,Kp=function(){return Dn()-Fi>34&&(pl||(pl=requestAnimationFrame(Rr)))},ea=function(){(!qn||!qn.isPressed||qn.startX>yt.clientWidth)&&(ft.cache++,qn?pl||(pl=requestAnimationFrame(Rr)):Rr(),Fi||Bs("scrollStart"),Fi=Dn())},Wh=function(){l_=ut.innerWidth,o_=ut.innerHeight},No=function(e){ft.cache++,(e===!0||!Ln&&!a_&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!nf||l_!==ut.innerWidth||Math.abs(ut.innerHeight-o_)>ut.innerHeight*.25))&&sh.restart(!0)},ks={},ax=[],g_=function r(){return bn(nt,"scrollEnd",r)||As(!0)},Bs=function(e){return ks[e]&&ks[e].map(function(t){return t()})||ax},ci=[],__=function(e){for(var t=0;t<ci.length;t+=5)(!e||ci[t+4]&&ci[t+4].query===e)&&(ci[t].style.cssText=ci[t+1],ci[t].getBBox&&ci[t].setAttribute("transform",ci[t+2]||""),ci[t+3].uncache=1)},b_=function(){return ft.forEach(function(e){return Nn(e)&&++e.cacheID&&(e.rec=e())})},Fd=function(e,t){var n;for(Xn=0;Xn<lt.length;Xn++)n=lt[Xn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Xo=!0,t&&__(t),t||Bs("revert")},v_=function(e,t){ft.cache++,(t||!Kn)&&ft.forEach(function(n){return Nn(n)&&n.cacheID++&&(n.rec=0)}),hi(e)&&(ut.history.scrollRestoration=Cd=e)},Kn,Fs=0,Yp,ox=function(){if(Yp!==Fs){var e=Yp=Fs;requestAnimationFrame(function(){return e===Fs&&As(!0)})}},x_=function(){yt.appendChild(Na),Pd=!qn&&Na.offsetHeight||ut.innerHeight,yt.removeChild(Na)},Jp=function(e){return dl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},As=function(e,t){if(fi=St.documentElement,yt=St.body,Rd=[ut,St,fi,yt],Fi&&!e&&!Xo){vn(nt,"scrollEnd",g_);return}x_(),Kn=nt.isRefreshing=!0,Xo||b_();var n=Bs("refreshInit");s_&&nt.sort(),t||Fd(),ft.forEach(function(i){Nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),lt.slice(0).forEach(function(i){return i.refresh()}),Xo=!1,lt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),sf=1,Jp(!0),lt.forEach(function(i){var s=ir(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Jp(!1),sf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ft.forEach(function(i){Nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),v_(Cd,1),sh.pause(),Fs++,Kn=2,Rr(2),lt.forEach(function(i){return Nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Kn=nt.isRefreshing=!1,Bs("refresh")},of=0,Bc=1,$o,Rr=function(e){if(e===2||!Kn&&!Xo){nt.isUpdating=!0,$o&&$o.update(0);var t=lt.length,n=Dn(),i=n-Hh>=50,s=t&&lt[0].scroll();if(Bc=of>s?-1:1,Kn||(of=s),i&&(Fi&&!Mh&&n-Fi>200&&(Fi=0,Bs("scrollEnd")),Po=Hh,Hh=n),Bc<0){for(Xn=t;Xn-- >0;)lt[Xn]&&lt[Xn].update(0,i);Bc=1}else for(Xn=0;Xn<t;Xn++)lt[Xn]&&lt[Xn].update(0,i);nt.isUpdating=!1}pl=0},lf=[d_,p_,Dd,Ld,Ri+jo,Ri+Ko,Ri+Jo,Ri+Yo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],zc=lf.concat([Is,Ns,"boxSizing","max"+Wa,"max"+Id,"position",Ri,rn,rn+Jo,rn+Ko,rn+jo,rn+Yo]),lx=function(e,t,n){Fa(n);var i=e._gsap;if(i.spacerIsNative)Fa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},qh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=lf.length,a=t.style,o=e.style,l;s--;)l=lf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Dd]=o[Ld]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Is]=ah(e,Jn)+ln,a[Ns]=ah(e,cn)+ln,a[rn]=o[Ri]=o[p_]=o[d_]="0",Fa(i),o[Is]=o["max"+Wa]=n[Is],o[Ns]=o["max"+Id]=n[Ns],o[rn]=n[rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},cx=/([A-Z])/g,Fa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(cx,"-$1").toLowerCase())}},ql=function(e){for(var t=zc.length,n=e.style,i=[],s=0;s<t;s++)i.push(zc[s],n[zc[s]]);return i.t=e,i},hx=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Gc={left:0,top:0},jp=function(e,t,n,i,s,a,o,l,c,h,u,f,d,p){Nn(e)&&(e=e(l)),hi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Oc("0"+e.substr(3),n):0));var _=d?d.time():0,g,m,y;if(d&&d.seek(0),isNaN(e)||(e=+e),Io(e))d&&(e=Le.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&kc(o,n,i,!0);else{Nn(t)&&(t=t(l));var w=(e||"0").split(" "),b,x,M,E;y=$n(t,l)||yt,b=Tr(y)||{},(!b||!b.left&&!b.top)&&Ci(y).display==="none"&&(E=y.style.display,y.style.display="block",b=Tr(y),E?y.style.display=E:y.style.removeProperty("display")),x=Oc(w[0],b[i.d]),M=Oc(w[1]||"0",n),e=b[i.p]-c[i.p]-h+x+s-M,o&&kc(o,M,i,n-M<20||o._isStart&&M>20),n-=n-M}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var v=e+n,T=a._isStart;g="scroll"+i.d2,kc(a,v,i,T&&v>20||!T&&(u?Math.max(yt[g],fi[g]):a.parentNode[g])<=v+1),u&&(c=Tr(o),u&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+ln))}return d&&y&&(g=Tr(y),d.seek(f),m=Tr(y),d._caScrollDist=g[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},ux=/(webkit|moz|length|cssText|inset)/i,$p=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===yt){e._stOrig=s.cssText,o=Ci(e);for(a in o)!+a&&!ux.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},y_=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Xl=function(e,t,n){var i={};i[t.p]="+="+n,Le.set(e,i)},Zp=function(e,t){var n=cs(e,t),i="_scroll"+t.p2,s=function a(o,l,c,h,u){var f=a.tween,d=l.onComplete,p={};c=c||n();var _=y_(n,c,function(){f.kill(),a.tween=0});return u=h&&u||0,h=h||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){ft.cache++,a.tween&&Rr()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Le.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vn(e,"wheel",n.wheelHandler),nt.isTouch&&vn(e,"touchmove",n.wheelHandler),s},nt=(function(){function r(t,n){ya||r.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),rf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Lo){this.update=this.refresh=this.kill=Qi;return}n=qp(hi(n)||Io(n)||n.nodeType?{trigger:n}:n,Hl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,f=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,w=s.once,b=s.snap,x=s.pinReparent,M=s.pinSpacer,E=s.containerAnimation,v=s.fastScrollEnd,T=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Jn:cn,P=!u&&u!==0,C=$n(n.scroller||ut),N=Le.core.getCache(C),I=Os(C),F=("pinType"in n?n.pinType:rs(C,"pinType")||I&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=P&&n.toggleActions.split(" "),$="markers"in n?n.markers:Hl.markers,W=I?0:parseFloat(Ci(C)["border"+A.p2+Wa])||0,L=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(L)},fe=tx(C,I,A),me=nx(C,I),Ne=0,qe=0,Ze=0,J=cs(C,A),te,_e,Xe,xe,De,Fe,Q,re,oe,O,pe,Ge,Ue,Re,je,k,ct,Ye,D,S,H,q,Z,ge,ce,ee,ie,ye,Ie,Se,ve,de,Ve,$e,G,be,ne,Me,we;if(L._startClamp=L._endClamp=!1,L._dir=A,g*=45,L.scroller=C,L.scroll=E?E.time.bind(E):J,xe=J(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(s_=1,n.refreshPriority===-9999&&($o=L)),N.tweenScroll=N.tweenScroll||{top:Zp(C,cn),left:Zp(C,Jn)},L.tweenTo=te=N.tweenScroll[A.p],L.scrubDuration=function(le){Ve=Io(le)&&le,Ve?de?de.duration(le):de=Le.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ve,paused:!0,onComplete:function(){return m&&m(L)}}):(de&&de.progress(1).kill(),de=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(u),Se=0,l||(l=i.vars.id)),b&&((!ws(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in yt.style&&Le.set(I?[yt,fi]:C,{scrollBehavior:"auto"}),ft.forEach(function(le){return Nn(le)&&le.target===(I?St.scrollingElement||fi:C)&&(le.smooth=!1)}),Xe=Nn(b.snapTo)?b.snapTo:b.snapTo==="labels"?rx(i):b.snapTo==="labelsDirectional"?sx(i):b.directional!==!1?function(le,Je){return Nd(b.snapTo)(le,Dn()-qe<500?0:Je.direction)}:Le.utils.snap(b.snapTo),$e=b.duration||{min:.1,max:2},$e=ws($e)?qo($e.min,$e.max):qo($e,$e),G=Le.delayedCall(b.delay||Ve/2||.1,function(){var le=J(),Je=Dn()-qe<500,Oe=te.tween;if((Je||Math.abs(L.getVelocity())<10)&&!Oe&&!Mh&&Ne!==le){var et=(le-Fe)/Re,Qt=i&&!P?i.totalProgress():et,ht=Je?0:(Qt-ve)/(Dn()-Po)*1e3||0,Ft=Le.utils.clamp(-et,1-et,Qs(ht/2)*ht/.185),mn=et+(b.inertia===!1?0:Ft),Ut,At,gt=b,On=gt.onStart,Lt=gt.onInterrupt,An=gt.onComplete;if(Ut=Xe(mn,L),Io(Ut)||(Ut=mn),At=Math.max(0,Math.round(Fe+Ut*Re)),le<=Q&&le>=Fe&&At!==le){if(Oe&&!Oe._initted&&Oe.data<=Qs(At-le))return;b.inertia===!1&&(Ft=Ut-et),te(At,{duration:$e(Qs(Math.max(Qs(mn-Qt),Qs(Ut-Qt))*.185/ht/.05||0)),ease:b.ease||"power3",data:Qs(At-le),onInterrupt:function(){return G.restart(!0)&&Lt&&Zs(L,Lt)},onComplete:function(){L.update(),Ne=J(),i&&!P&&(de?de.resetTo("totalProgress",Ut,i._tTime/i._tDur):i.progress(Ut)),Se=ve=i&&!P?i.totalProgress():L.progress,y&&y(L),An&&Zs(L,An)}},le,Ft*Re,At-le-Ft*Re),On&&Zs(L,On,te.tween)}}else L.isActive&&Ne!==le&&G.restart(!0)}).pause()),l&&(af[l]=L),f=L.trigger=$n(f||d!==!0&&d),we=f&&f._gsap&&f._gsap.stRevert,we&&(we=we(L)),d=d===!0?f:$n(d),hi(o)&&(o={targets:f,className:o}),d&&(p===!1||p===Ri||(p=!p&&d.parentNode&&d.parentNode.style&&Ci(d.parentNode).display==="flex"?!1:rn),L.pin=d,_e=Le.core.getCache(d),_e.spacer?je=_e.pinState:(M&&(M=$n(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),_e.spacerIsNative=!!M,M&&(_e.spacerState=ql(M))),_e.spacer=Ye=M||St.createElement("div"),Ye.classList.add("pin-spacer"),l&&Ye.classList.add("pin-spacer-"+l),_e.pinState=je=ql(d)),n.force3D!==!1&&Le.set(d,{force3D:!0}),L.spacer=Ye=_e.spacer,Ie=Ci(d),ge=Ie[p+A.os2],S=Le.getProperty(d),H=Le.quickSetter(d,A.a,ln),qh(d,Ye,Ie),ct=ql(d)),$){Ge=ws($)?qp($,Xp):Xp,O=Wl("scroller-start",l,C,A,Ge,0),pe=Wl("scroller-end",l,C,A,Ge,0,O),D=O["offset"+A.op.d2];var se=$n(rs(C,"content")||C);re=this.markerStart=Wl("start",l,se,A,Ge,D,0,E),oe=this.markerEnd=Wl("end",l,se,A,Ge,D,0,E),E&&(Me=Le.quickSetter([re,oe],A.a,ln)),!F&&!(or.length&&rs(C,"fixedMarkers")===!0)&&(ix(I?yt:C),Le.set([O,pe],{force3D:!0}),ee=Le.quickSetter(O,A.a,ln),ye=Le.quickSetter(pe,A.a,ln))}if(E){var ue=E.vars.onUpdate,ae=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){L.update(0,0,1),ue&&ue.apply(E,ae||[])})}if(L.previous=function(){return lt[lt.indexOf(L)-1]},L.next=function(){return lt[lt.indexOf(L)+1]},L.revert=function(le,Je){if(!Je)return L.kill(!0);var Oe=le!==!1||!L.enabled,et=Ln;Oe!==L.isReverted&&(Oe&&(be=Math.max(J(),L.scroll.rec||0),Ze=L.progress,ne=i&&i.progress()),re&&[re,oe,O,pe].forEach(function(Qt){return Qt.style.display=Oe?"none":"block"}),Oe&&(Ln=L,L.update(Oe)),d&&(!x||!L.isActive)&&(Oe?lx(d,Ye,je):qh(d,Ye,Ci(d),ce)),Oe||L.update(Oe),Ln=et,L.isReverted=Oe)},L.refresh=function(le,Je,Oe,et){if(!((Ln||!L.enabled)&&!Je)){if(d&&le&&Fi){vn(r,"scrollEnd",g_);return}!Kn&&j&&j(L),Ln=L,te.tween&&!Oe&&(te.tween.kill(),te.tween=0),de&&de.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Te){return Te.vars.immediateRender&&Te.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Qt=fe(),ht=me(),Ft=E?E.duration():ir(C,A),mn=Re<=.01||!Re,Ut=0,At=et||0,gt=ws(Oe)?Oe.end:n.end,On=n.endTrigger||f,Lt=ws(Oe)?Oe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),An=L.pinnedContainer=n.pinnedContainer&&$n(n.pinnedContainer,L),kn=f&&Math.max(0,lt.indexOf(L))||0,en=kn,qt,on,Ki,Ks,gn,Yt,Si,Ys,R,V,Y,X,K;for($&&ws(Oe)&&(X=Le.getProperty(O,A.p),K=Le.getProperty(pe,A.p));en-- >0;)Yt=lt[en],Yt.end||Yt.refresh(0,1)||(Ln=L),Si=Yt.pin,Si&&(Si===f||Si===d||Si===An)&&!Yt.isReverted&&(V||(V=[]),V.unshift(Yt),Yt.revert(!0,!0)),Yt!==lt[en]&&(kn--,en--);for(Nn(Lt)&&(Lt=Lt(L)),Lt=Gp(Lt,"start",L),Fe=jp(Lt,f,Qt,A,J(),re,O,L,ht,W,F,Ft,E,L._startClamp&&"_startClamp")||(d?-.001:0),Nn(gt)&&(gt=gt(L)),hi(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(hi(Lt)?Lt.split(" ")[0]:"")+gt:(Ut=Oc(gt.substr(2),Qt),gt=hi(Lt)?Lt:(E?Le.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Fe):Fe)+Ut,On=f)),gt=Gp(gt,"end",L),Q=Math.max(Fe,jp(gt||(On?"100% 0":Ft),On,Qt,A,J()+Ut,oe,pe,L,ht,W,F,Ft,E,L._endClamp&&"_endClamp"))||-.001,Ut=0,en=kn;en--;)Yt=lt[en]||{},Si=Yt.pin,Si&&Yt.start-Yt._pinPush<=Fe&&!E&&Yt.end>0&&(qt=Yt.end-(L._startClamp?Math.max(0,Yt.start):Yt.start),(Si===f&&Yt.start-Yt._pinPush<Fe||Si===An)&&isNaN(Lt)&&(Ut+=qt*(1-Yt.progress)),Si===d&&(At+=qt));if(Fe+=Ut,Q+=Ut,L._startClamp&&(L._startClamp+=Ut),L._endClamp&&!Kn&&(L._endClamp=Q||-.001,Q=Math.min(Q,ir(C,A))),Re=Q-Fe||(Fe-=.01)&&.001,mn&&(Ze=Le.utils.clamp(0,1,Le.utils.normalize(Fe,Q,be))),L._pinPush=At,re&&Ut&&(qt={},qt[A.a]="+="+Ut,An&&(qt[A.p]="-="+J()),Le.set([re,oe],qt)),d&&!(sf&&L.end>=ir(C,A)))qt=Ci(d),Ks=A===cn,Ki=J(),q=parseFloat(S(A.a))+At,!Ft&&Q>1&&(Y=(I?St.scrollingElement||fi:C).style,Y={style:Y,value:Y["overflow"+A.a.toUpperCase()]},I&&Ci(yt)["overflow"+A.a.toUpperCase()]!=="scroll"&&(Y.style["overflow"+A.a.toUpperCase()]="scroll")),qh(d,Ye,qt),ct=ql(d),on=Tr(d,!0),Ys=F&&cs(C,Ks?Jn:cn)(),p?(ce=[p+A.os2,Re+At+ln],ce.t=Ye,en=p===rn?ah(d,A)+Re+At:0,en&&(ce.push(A.d,en+ln),Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=en+ln)),Fa(ce),An&&lt.forEach(function(Te){Te.pin===An&&Te.vars.pinSpacing!==!1&&(Te._subPinOffset=!0)}),F&&J(be)):(en=ah(d,A),en&&Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=en+ln)),F&&(gn={top:on.top+(Ks?Ki-Fe:Ys)+ln,left:on.left+(Ks?Ys:Ki-Fe)+ln,boxSizing:"border-box",position:"fixed"},gn[Is]=gn["max"+Wa]=Math.ceil(on.width)+ln,gn[Ns]=gn["max"+Id]=Math.ceil(on.height)+ln,gn[Ri]=gn[Ri+Jo]=gn[Ri+Ko]=gn[Ri+jo]=gn[Ri+Yo]="0",gn[rn]=qt[rn],gn[rn+Jo]=qt[rn+Jo],gn[rn+Ko]=qt[rn+Ko],gn[rn+jo]=qt[rn+jo],gn[rn+Yo]=qt[rn+Yo],k=hx(je,gn,x),Kn&&J(0)),i?(R=i._initted,Gh(1),i.render(i.duration(),!0,!0),Z=S(A.a)-q+Re+At,ie=Math.abs(Re-Z)>1,F&&ie&&k.splice(k.length-2,2),i.render(0,!0,!0),R||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Gh(0)):Z=Re,Y&&(Y.value?Y.style["overflow"+A.a.toUpperCase()]=Y.value:Y.style.removeProperty("overflow-"+A.a));else if(f&&J()&&!E)for(on=f.parentNode;on&&on!==yt;)on._pinOffset&&(Fe-=on._pinOffset,Q-=on._pinOffset),on=on.parentNode;V&&V.forEach(function(Te){return Te.revert(!1,!0)}),L.start=Fe,L.end=Q,xe=De=Kn?be:J(),!E&&!Kn&&(xe<be&&J(be),L.scroll.rec=0),L.revert(!1,!0),qe=Dn(),G&&(Ne=-1,G.restart(!0)),Ln=0,i&&P&&(i._initted||ne)&&i.progress()!==ne&&i.progress(ne||0,!0).render(i.time(),!0,!0),(mn||Ze!==L.progress||E||_||i&&!i._initted)&&(i&&!P&&(i._initted||Ze||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Fe<-.001&&!Ze?Le.utils.normalize(Fe,Q,0):Ze,!0),L.progress=mn||(xe-Fe)/Re===Ze?0:Ze),d&&p&&(Ye._pinOffset=Math.round(L.progress*Z)),de&&de.invalidate(),isNaN(X)||(X-=Le.getProperty(O,A.p),K-=Le.getProperty(pe,A.p),Xl(O,A,X),Xl(re,A,X-(et||0)),Xl(pe,A,K),Xl(oe,A,K-(et||0))),mn&&!Kn&&L.update(),h&&!Kn&&!Ue&&(Ue=!0,h(L),Ue=!1)}},L.getVelocity=function(){return(J()-De)/(Dn()-Po)*1e3||0},L.endAnimation=function(){ao(L.callbackAnimation),i&&(de?de.progress(1):i.paused()?P||ao(i,L.direction<0,1):ao(i,i.reversed()))},L.labelToScroll=function(le){return i&&i.labels&&(Fe||L.refresh()||Fe)+i.labels[le]/i.duration()*Re||0},L.getTrailing=function(le){var Je=lt.indexOf(L),Oe=L.direction>0?lt.slice(0,Je).reverse():lt.slice(Je+1);return(hi(le)?Oe.filter(function(et){return et.vars.preventOverlaps===le}):Oe).filter(function(et){return L.direction>0?et.end<=Fe:et.start>=Q})},L.update=function(le,Je,Oe){if(!(E&&!Oe&&!le)){var et=Kn===!0?be:L.scroll(),Qt=le?0:(et-Fe)/Re,ht=Qt<0?0:Qt>1?1:Qt||0,Ft=L.progress,mn,Ut,At,gt,On,Lt,An,kn;if(Je&&(De=xe,xe=E?J():et,b&&(ve=Se,Se=i&&!P?i.totalProgress():ht)),g&&d&&!Ln&&!Bl&&Fi&&(!ht&&Fe<et+(et-De)/(Dn()-Po)*g?ht=1e-4:ht===1&&Q>et+(et-De)/(Dn()-Po)*g&&(ht=.9999)),ht!==Ft&&L.enabled){if(mn=L.isActive=!!ht&&ht<1,Ut=!!Ft&&Ft<1,Lt=mn!==Ut,On=Lt||!!ht!=!!Ft,L.direction=ht>Ft?1:-1,L.progress=ht,On&&!Ln&&(At=ht&&!Ft?0:ht===1?1:Ft===1?2:3,P&&(gt=!Lt&&B[At+1]!=="none"&&B[At+1]||B[At],kn=i&&(gt==="complete"||gt==="reset"||gt in i))),T&&(Lt||kn)&&(kn||u||!i)&&(Nn(T)?T(L):L.getTrailing(T).forEach(function(Ki){return Ki.endAnimation()})),P||(de&&!Ln&&!Bl?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo("totalProgress",ht,i._tTime/i._tDur):(de.vars.totalProgress=ht,de.invalidate().restart())):i&&i.totalProgress(ht,!!(Ln&&(qe||le)))),d){if(le&&p&&(Ye.style[p+A.os2]=ge),!F)H(Do(q+Z*ht));else if(On){if(An=!le&&ht>Ft&&Q+1>et&&et+1>=ir(C,A),x)if(!le&&(mn||An)){var en=Tr(d,!0),qt=et-Fe;$p(d,yt,en.top+(A===cn?qt:0)+ln,en.left+(A===cn?0:qt)+ln)}else $p(d,Ye);Fa(mn||An?k:ct),ie&&ht<1&&mn||H(q+(ht===1&&!An?Z:0))}}b&&!te.tween&&!Ln&&!Bl&&G.restart(!0),o&&(Lt||w&&ht&&(ht<1||!Vh))&&dl(o.targets).forEach(function(Ki){return Ki.classList[mn||w?"add":"remove"](o.className)}),a&&!P&&!le&&a(L),On&&!Ln?(P&&(kn&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),a&&a(L)),(Lt||!Vh)&&(c&&Lt&&Zs(L,c),z[At]&&Zs(L,z[At]),w&&(ht===1?L.kill(!1,1):z[At]=0),Lt||(At=ht===1?1:3,z[At]&&Zs(L,z[At]))),v&&!mn&&Math.abs(L.getVelocity())>(Io(v)?v:2500)&&(ao(L.callbackAnimation),de?de.progress(1):ao(i,gt==="reverse"?1:!ht,1))):P&&a&&!Ln&&a(L)}if(ye){var on=E?et/E.duration()*(E._caScrollDist||0):et;ee(on+(O._isFlipped?1:0)),ye(on)}Me&&Me(-et/E.duration()*(E._caScrollDist||0))}},L.enable=function(le,Je){L.enabled||(L.enabled=!0,vn(C,"resize",No),I||vn(C,"scroll",ea),j&&vn(r,"refreshInit",j),le!==!1&&(L.progress=Ze=0,xe=De=Ne=J()),Je!==!1&&L.refresh())},L.getTween=function(le){return le&&te?te.tween:de},L.setPositions=function(le,Je,Oe,et){if(E){var Qt=E.scrollTrigger,ht=E.duration(),Ft=Qt.end-Qt.start;le=Qt.start+Ft*le/ht,Je=Qt.start+Ft*Je/ht}L.refresh(!1,!1,{start:Vp(le,Oe&&!!L._startClamp),end:Vp(Je,Oe&&!!L._endClamp)},et),L.update()},L.adjustPinSpacing=function(le){if(ce&&le){var Je=ce.indexOf(A.d)+1;ce[Je]=parseFloat(ce[Je])+le+ln,ce[1]=parseFloat(ce[1])+le+ln,Fa(ce)}},L.disable=function(le,Je){if(le!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Je||de&&de.pause(),be=0,_e&&(_e.uncache=1),j&&bn(r,"refreshInit",j),G&&(G.pause(),te.tween&&te.tween.kill()&&(te.tween=0)),!I)){for(var Oe=lt.length;Oe--;)if(lt[Oe].scroller===C&&lt[Oe]!==L)return;bn(C,"resize",No),I||bn(C,"scroll",ea)}},L.kill=function(le,Je){L.disable(le,Je),de&&!Je&&de.kill(),l&&delete af[l];var Oe=lt.indexOf(L);Oe>=0&&lt.splice(Oe,1),Oe===Xn&&Bc>0&&Xn--,Oe=0,lt.forEach(function(et){return et.scroller===L.scroller&&(Oe=1)}),Oe||Kn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,le&&i.revert({kill:!1}),Je||i.kill()),re&&[re,oe,O,pe].forEach(function(et){return et.parentNode&&et.parentNode.removeChild(et)}),$o===L&&($o=0),d&&(_e&&(_e.uncache=1),Oe=0,lt.forEach(function(et){return et.pin===d&&Oe++}),Oe||(_e.spacer=0)),n.onKill&&n.onKill(L)},lt.push(L),L.enable(!1,!1),we&&we(L),i&&i.add&&!Re){var Ke=L.update;L.update=function(){L.update=Ke,ft.cache++,Fe||Q||L.refresh()},Le.delayedCall(.01,L.update),Re=.01,Fe=Q=0}else L.refresh();d&&ox()},r.register=function(n){return ya||(Le=n||h_(),c_()&&window.document&&r.enable(),ya=Lo),ya},r.defaults=function(n){if(n)for(var i in n)Hl[i]=n[i];return Hl},r.disable=function(n,i){Lo=0,lt.forEach(function(a){return a[i?"kill":"disable"](n)}),bn(ut,"wheel",ea),bn(St,"scroll",ea),clearInterval(kl),bn(St,"touchcancel",Qi),bn(yt,"touchstart",Qi),Gl(bn,St,"pointerdown,touchstart,mousedown",Hp),Gl(bn,St,"pointerup,touchend,mouseup",Wp),sh.kill(),zl(bn);for(var s=0;s<ft.length;s+=3)Vl(bn,ft[s],ft[s+1]),Vl(bn,ft[s],ft[s+2])},r.enable=function(){if(ut=window,St=document,fi=St.documentElement,yt=St.body,Le){if(dl=Le.utils.toArray,qo=Le.utils.clamp,rf=Le.core.context||Qi,Gh=Le.core.suppressOverwrites||Qi,Cd=ut.history.scrollRestoration||"auto",of=ut.pageYOffset||0,Le.core.globals("ScrollTrigger",r),yt){Lo=1,Na=document.createElement("div"),Na.style.height="100vh",Na.style.position="absolute",x_(),ex(),$t.register(Le),r.isTouch=$t.isTouch,Xr=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),nf=$t.isTouch===1,vn(ut,"wheel",ea),Rd=[ut,St,fi,yt],Le.matchMedia?(r.matchMedia=function(h){var u=Le.matchMedia(),f;for(f in h)u.add(f,h[f]);return u},Le.addEventListener("matchMediaInit",function(){b_(),Fd()}),Le.addEventListener("matchMediaRevert",function(){return __()}),Le.addEventListener("matchMedia",function(){As(0,1),Bs("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return Wh(),Wh})):console.warn("Requires GSAP 3.11.0 or later"),Wh(),vn(St,"scroll",ea);var n=yt.hasAttribute("style"),i=yt.style,s=i.borderTopStyle,a=Le.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Tr(yt),cn.m=Math.round(o.top+cn.sc())||0,Jn.m=Math.round(o.left+Jn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),kl=setInterval(Kp,250),Le.delayedCall(.5,function(){return Bl=0}),vn(St,"touchcancel",Qi),vn(yt,"touchstart",Qi),Gl(vn,St,"pointerdown,touchstart,mousedown",Hp),Gl(vn,St,"pointerup,touchend,mouseup",Wp),tf=Le.utils.checkPrefix("transform"),zc.push(tf),ya=Dn(),sh=Le.delayedCall(.2,As).pause(),Sa=[St,"visibilitychange",function(){var h=ut.innerWidth,u=ut.innerHeight;St.hidden?(Bp=h,zp=u):(Bp!==h||zp!==u)&&No()},St,"DOMContentLoaded",As,ut,"load",As,ut,"resize",No],zl(vn),lt.forEach(function(h){return h.enable(0,1)}),l=0;l<ft.length;l+=3)Vl(bn,ft[l],ft[l+1]),Vl(bn,ft[l],ft[l+2])}else if(St){var c=function h(){r.enable(),St.removeEventListener("DOMContentLoaded",h)};St.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Vh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(kl)||(kl=i)&&setInterval(Kp,i),"ignoreMobileResize"in n&&(nf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(zl(bn)||zl(vn,n.autoRefreshEvents||"none"),a_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=$n(n),a=ft.indexOf(s),o=Os(s);~a&&ft.splice(a,o?6:2),i&&(o?or.unshift(ut,i,yt,i,fi,i):or.unshift(s,i))},r.clearMatchMedia=function(n){lt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(hi(n)?$n(n):n).getBoundingClientRect(),o=a[s?Is:Ns]*i||0;return s?a.right-o>0&&a.left+o<ut.innerWidth:a.bottom-o>0&&a.top+o<ut.innerHeight},r.positionInViewport=function(n,i,s){hi(n)&&(n=$n(n));var a=n.getBoundingClientRect(),o=a[s?Is:Ns],l=i==null?o/2:i in oh?oh[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ut.innerWidth:(a.top+l)/ut.innerHeight},r.killAll=function(n){if(lt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ks.killAll||[];ks={},i.forEach(function(s){return s()})}},r})();nt.version="3.15.0";nt.saveStyles=function(r){return r?dl(r).forEach(function(e){if(e&&e.style){var t=ci.indexOf(e);t>=0&&ci.splice(t,5),ci.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),rf())}}):ci};nt.revert=function(r,e){return Fd(!r,e)};nt.create=function(r,e){return new nt(r,e)};nt.refresh=function(r){return r?No(!0):(ya||nt.register())&&As(!0)};nt.update=function(r){return++ft.cache&&Rr(r===!0?2:0)};nt.clearScrollMemory=v_;nt.maxScroll=function(r,e){return ir(r,e?Jn:cn)};nt.getScrollFunc=function(r,e){return cs($n(r),e?Jn:cn)};nt.getById=function(r){return af[r]};nt.getAll=function(){return lt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!Fi};nt.snapDirectional=Nd;nt.addEventListener=function(r,e){var t=ks[r]||(ks[r]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(r,e){var t=ks[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};nt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,h){var u=[],f=[],d=Le.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(p){u.length||d.restart(!0),u.push(p.trigger),f.push(p),s<=u.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Nn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Nn(s)&&(s=s(),vn(nt,"refresh",function(){return s=e.batchMax()})),dl(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(nt.create(c))}),t};var Qp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Xh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===fi&&r(yt,t)},Kl={auto:1,scroll:1},fx=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Le.core.getCache(s),o=Dn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Kl[(l=Ci(s)).overflowY]||Kl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Os(s)&&(Kl[(l=Ci(s)).overflowY]||Kl[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},S_=function(e,t,n,i){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&fx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&vn(St,$t.eventTypes[0],tm,!1,!0)},onDisable:function(){return bn(St,$t.eventTypes[0],tm,!0)}})},dx=/(input|label|select|textarea)/i,em,tm=function(e){var t=dx.test(e.target.tagName);(t||em)&&(e._gsapAllow=!0,em=t)},px=function(e){ws(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=$n(e.target)||fi,h=Le.core.globals().ScrollSmoother,u=h&&h.get(),f=Xr&&(e.content&&$n(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),d=cs(c,cn),p=cs(c,Jn),_=1,g=($t.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,m=0,y=Nn(i)?function(){return i(o)}:function(){return i||2.8},w,b,x=S_(c,e.type,!0,s),M=function(){return b=!1},E=Qi,v=Qi,T=function(){l=ir(c,cn),v=qo(Xr?1:0,l),n&&(E=qo(0,ir(c,Jn))),w=Fs},A=function(){f._gsap.y=Do(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(b){requestAnimationFrame(M);var $=Do(o.deltaY/2),W=v(d.v-$);if(f&&W!==d.v+d.offset){d.offset=W-d.v;var L=Do((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=ft.cache,Rr()}return!0}d.offset&&A(),b=!0},C,N,I,F,z=function(){T(),C.isActive()&&C.vars.scrollY>l&&(d()>l?C.progress(1)&&d(l):C.resetTo("scrollY",l))};return f&&Le.set(f,{y:"+=0"}),e.ignoreCheck=function(B){return Xr&&B.type==="touchmove"&&P()||_>1.05&&B.type!=="touchstart"||o.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){b=!1;var B=_;_=Do((ut.visualViewport&&ut.visualViewport.scale||1)/g),C.pause(),B!==_&&Xh(c,_>1.01?!0:n?!1:"x"),N=p(),I=d(),T(),w=Fs},e.onRelease=e.onGestureStart=function(B,$){if(d.offset&&A(),!$)F.restart(!0);else{ft.cache++;var W=y(),L,j;n&&(L=p(),j=L+W*.05*-B.velocityX/.227,W*=Qp(p,L,j,ir(c,Jn)),C.vars.scrollX=E(j)),L=d(),j=L+W*.05*-B.velocityY/.227,W*=Qp(d,L,j,ir(c,cn)),C.vars.scrollY=v(j),C.invalidate().duration(W).play(.01),(Xr&&C.vars.scrollY>=l||L>=l-1)&&Le.to({},{onUpdate:z,duration:W})}a&&a(B)},e.onWheel=function(){C._ts&&C.pause(),Dn()-m>1e3&&(w=0,m=Dn())},e.onChange=function(B,$,W,L,j){if(Fs!==w&&T(),$&&n&&p(E(L[2]===$?N+(B.startX-B.x):p()+$-L[1])),W){d.offset&&A();var fe=j[2]===W,me=fe?I+B.startY-B.y:d()+W-j[1],Ne=v(me);fe&&me!==Ne&&(I+=Ne-me),d(Ne)}(W||$)&&Rr()},e.onEnable=function(){Xh(c,n?!1:"x"),nt.addEventListener("refresh",z),vn(ut,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),x.enable()},e.onDisable=function(){Xh(c,!0),bn(ut,"resize",z),nt.removeEventListener("refresh",z),x.kill()},e.lockAxis=e.lockAxis!==!1,o=new $t(e),o.iOS=Xr,Xr&&!d()&&d(1),Xr&&Le.ticker.add(Qi),F=o._dc,C=Le.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:y_(d,d(),function(){return C.pause()})},onUpdate:Rr,onComplete:F.vars.onComplete}),o};nt.sort=function(r){if(Nn(r))return lt.sort(r);var e=ut.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ut.innerHeight}),lt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};nt.observe=function(r){return new $t(r)};nt.normalizeScroll=function(r){if(typeof r>"u")return qn;if(r===!0&&qn)return qn.enable();if(r===!1){qn&&qn.kill(),qn=r;return}var e=r instanceof $t?r:px(r);return qn&&qn.target===e.target&&qn.kill(),Os(e.target)&&(qn=e),e};nt.core={_getVelocityProp:ef,_inputObserver:S_,_scrollers:ft,_proxies:or,bridge:{ss:function(){Fi||Bs("scrollStart"),Fi=Dn()},ref:function(){return Ln}}};h_()&&Le.registerPlugin(nt);let oo,lo,nm=typeof Symbol=="function"?Symbol():"_split",cf,mx=()=>cf||Il.register(window.gsap),im=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,ml=r=>r?typeof r=="string"?ml(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...ml(t)):e.push(t),e),[]):[r]:[],rm=r=>ml(r).filter(e=>e&&e.nodeType===1),hf=[],Kh=function(){},gx={add:r=>r()},_x=/\s+/g,sm=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),lh={left:0,top:0,width:0,height:0},bx=(r,e)=>{for(;++e<r.length&&r[e]===lh;);return r[e]||lh},am=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},om=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||hf),n=r.length,i,s,a,o;if(t.size)for(;--n>-1;){s=r[n];for(a of t)if(a.startsWith(s)&&a.length>s.length){for(i=0,o=s;a.startsWith(o+=r[n+ ++i])&&o.length<a.length;);if(i&&o.length===a.length){r[n]=a,r.splice(n+1,i);break}}}}return r},lm=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),ta=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),uf=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:a=!1}=e,o=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let u=document.createElement(i),f=t.length+1;return n&&(u.className=n+(l?" "+n+f:"")),a&&u.style.setProperty("--"+r,f+""),s!=="none"&&u.setAttribute("aria-hidden","true"),i!=="span"&&(u.style.position="relative",u.style.display=o),u.textContent=h,t.push(u),u};return l&&(n=n.replace("++","")),c.collection=t,c},vx=(r,e,t,n)=>{let i=uf("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(a,o)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[a]);a<o;a++)l.appendChild(e[a]);l.normalize()}},M_=(r,e,t,n,i,s,a,o,l,c)=>{var h;let u=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:p=!0,prepareText:_}=e,g=r.getBoundingClientRect(),m=g,y=!p&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",w=0,b=t.collection,x,M,E,v,T,A,P,C,N,I,F,z,B,$,W,L,j,fe;for(typeof d=="object"?(E=d.delimiter||d,M=d.replaceWith||""):M=d===""?"":d||" ",x=M!==" ";f<u.length;f++)if(v=u[f],v.nodeType===3){for(W=v.textContent||"",p?W=W.replace(_x," "):y&&(W=W.replace(/\n/g,M+`
`)),_&&(W=_(W,r)),v.textContent=W,T=M||E?W.split(E||M):W.match(o)||hf,j=T[T.length-1],C=x?j.slice(-1)===" ":!j,j||T.pop(),m=g,P=x?T[0].charAt(0)===" ":!T[0],P&&ta(" ",r,v),T[0]||T.shift(),om(T,l),s&&c||(v.textContent=""),N=1;N<=T.length;N++)if(L=T[N-1],!p&&y&&L.charAt(0)===`
`&&((h=v.previousSibling)==null||h.remove(),ta(document.createElement("br"),r,v),L=L.slice(1)),!p&&L==="")ta(M,r,v);else if(L===" ")r.insertBefore(document.createTextNode(" "),v);else{if(x&&L.charAt(0)===" "&&ta(" ",r,v),w&&N===1&&!P&&b.indexOf(w.parentNode)>-1?(A=b[b.length-1],A.appendChild(document.createTextNode(n?"":L))):(A=t(n?"":L),ta(A,r,v),w&&N===1&&!P&&A.insertBefore(w,A.firstChild)),n)for(F=im?om([...im.segment(L)].map(me=>me.segment),l):L.match(o)||hf,fe=0;fe<F.length;fe++)A.appendChild(F[fe]===" "?document.createTextNode(" "):n(F[fe]));if(s&&c){if(W=v.textContent=W.substring(L.length+1,W.length),I=A.getBoundingClientRect(),I.top>m.top&&I.left<=m.left){for(z=r.cloneNode(),B=r.childNodes[0];B&&B!==A;)$=B,B=B.nextSibling,z.appendChild($);r.parentNode.insertBefore(z,r),i&&lm(z)}m=I}(N<T.length||C)&&ta(N>=T.length?" ":x&&L.slice(-1)===" "?" "+M:M,r,v)}r.removeChild(v),w=0}else v.nodeType===1&&(a&&a.indexOf(v)>-1?(b.indexOf(v.previousSibling)>-1&&b[b.length-1].appendChild(v),w=v):(M_(v,e,t,n,i,s,a,o,l,!0),w=0),i&&lm(v))};const T_=class w_{constructor(e,t){this.isSplit=!1,mx(),this.elements=rm(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(a=>{var o;t.overwrite!==!1&&((o=a[nm])==null||o._data.orig.filter(({element:l})=>l===a).forEach(am)),a[nm]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let a=n.length,o;for(;a--;){o=n[a];let l=o.element.offsetWidth;if(l!==o.width){o.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Kh(this),this.split(t)}split(e){return(this._ctx||gx).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:a,autoSplit:o=!1,specialChars:l,mask:c}=this.vars,h=t.indexOf("lines")>-1,u=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,d=u&&!f&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=p?new RegExp(p.source+"|"+sm.source,"gu"):sm,g=!!e.ignore&&rm(e.ignore),{orig:m,animTime:y,obs:w}=this._data,b;(u||f||h)&&(this.elements.forEach((x,M)=>{m[M]={element:x,html:x.innerHTML,ariaL:x.getAttribute("aria-label"),ariaH:x.getAttribute("aria-hidden")},n==="auto"?x.setAttribute("aria-label",(x.textContent||"").trim()):n==="hidden"&&x.setAttribute("aria-hidden","true");let E=[],v=[],T=[],A=u?uf("char",e,E):null,P=uf("word",e,v),C,N,I,F;if(M_(x,e,P,A,d,i&&(h||d),g,_,p,!1),h){let z=ml(x.childNodes),B=vx(x,z,e,T),$,W=[],L=0,j=z.map(Ne=>Ne.nodeType===1?Ne.getBoundingClientRect():lh),fe=lh,me;for(C=0;C<z.length;C++)$=z[C],$.nodeType===1&&($.nodeName==="BR"?((!C||z[C-1].nodeName!=="BR")&&(W.push($),B(L,C+1)),L=C+1,fe=bx(j,C)):(me=j[C],C&&me.top>fe.top&&me.left<fe.left+fe.width-1&&(B(L,C),L=C),fe=me));L<C&&B(L,C),W.forEach(Ne=>{var qe;return(qe=Ne.parentNode)==null?void 0:qe.removeChild(Ne)})}if(!f){for(C=0;C<v.length;C++)if(N=v[C],u||!N.nextSibling||N.nextSibling.nodeType!==3)if(s&&!h){for(I=document.createElement("span"),I.style.whiteSpace="nowrap";N.firstChild;)I.appendChild(N.firstChild);N.replaceWith(I)}else N.replaceWith(...N.childNodes);else F=N.nextSibling,F&&F.nodeType===3&&(F.textContent=(N.textContent||"")+(F.textContent||""),N.remove());v.length=0,x.normalize()}this.lines.push(...T),this.words.push(...v),this.chars.push(...E)}),c&&this[c]&&this.masks.push(...this[c].map(x=>{let M=x.cloneNode();return x.replaceWith(M),M.appendChild(x),x.className&&(M.className=x.className.trim().split(" ").map(E=>E+"-mask").join(" ")),M.style.overflow="clip",M}))),this.isSplit=!0,lo&&h&&o&&lo.addEventListener("loadingdone",this._split),(b=a&&a(this))&&b.totalTime&&(this._data.anim=y?b.totalTime(y):b),h&&o&&this.elements.forEach((x,M)=>{m[M].width=x.offsetWidth,w&&w.observe(x)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),lo?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(am),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new w_(e,t)}static register(e){oo=oo||e||window.gsap,oo&&(ml=oo.utils.toArray,Kh=oo.core.context||Kh),!cf&&window.innerWidth>0&&(lo=document.fonts,cf=!0)}};T_.version="3.15.0";let Il=T_;var cm="1.3.27";function E_(r,e,t){return Math.max(r,Math.min(e,t))}function xx(r,e,t){return(1-t)*r+t*e}function yx(r,e,t,n){return xx(r,e,1-Math.exp(-t*n))}function Sx(r,e){return(r%e+e)%e}var Mx=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=E_(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=yx(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function Tx(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var wx=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=Tx(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},A_=class{events={};emit(r,...e){const t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}};const Ex=100/6,Br={passive:!1};function hm(r,e){return r===1?Ex:r===2?e:1}var Ax=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new A_;constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Br),this.element.addEventListener("touchstart",this.onTouchStart,Br),this.element.addEventListener("touchmove",this.onTouchMove,Br),this.element.addEventListener("touchend",this.onTouchEnd,Br)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Br),this.element.removeEventListener("touchstart",this.onTouchStart,Br),this.element.removeEventListener("touchmove",this.onTouchMove,Br),this.element.removeEventListener("touchend",this.onTouchEnd,Br)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=hm(n,this.window.width),s=hm(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const um=r=>Math.min(1,1.001-2**(-10*r));var Rx=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Mx;emitter=new A_;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:f=u==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:g,virtualScroll:m,overscroll:y=!0,autoRaf:w=!1,anchors:b=!1,autoToggle:x=!1,allowNestedScroll:M=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:v=E,stopInertiaOnNavigate:T=!1,respectReducedMotion:A=!0}={}){window.lenisVersion=cm,window.lenis||(window.lenis={}),window.lenis.version=cm,u==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=um:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:u,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:g,virtualScroll:m,overscroll:y,autoRaf:w,anchors:b,autoToggle:x,allowNestedScroll:M,naiveDimensions:v,stopInertiaOnNavigate:T,respectReducedMotion:A},this.dimensions=new wx(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Ax(t,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],a=40,o=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=a,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=a;return o||l}onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=t;this.options.gestureOrientation==="both"?u=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(u=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(u=Math.sign(u)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+u,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:u}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=r,d=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let p=null;if(typeof f=="string"?(p=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),p||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(p=f),p){if(this.options.wrapper!==window){const b=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?b.left:b.top}const _=p.getBoundingClientRect(),g=getComputedStyle(p),m=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),y=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(w)?0:w)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const p=f-this.animatedScroll;p>this.limit/2?f-=this.limit:p<-this.limit/2&&(f+=this.limit)}}else f=E_(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=u??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof a=="number"&&typeof o!="function"?o=um:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,f,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,l,c,h,u,f,d,p;if(n-(i.time??0)>2e3){i.time=Date.now();const M=window.getComputedStyle(r);if(i.computedStyle=M,s=["auto","overlay","scroll"].includes(M.overflowX),a=["auto","overlay","scroll"].includes(M.overflowY),c=["auto"].includes(M.overscrollBehaviorX),h=["auto"].includes(M.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;u=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,p=r.clientHeight,o=u>d,l=f>p,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=u,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,u=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let g,m,y,w,b,x;if(_==="horizontal")g=Math.round(r.scrollLeft),m=u-d,y=e,w=s,b=o,x=c;else if(_==="vertical")g=Math.round(r.scrollTop),m=f-p,y=t,w=a,b=l,x=h;else return!1;return!x&&(g>=m||g<=0)?!0:(y>0?g<m:g>0)&&w&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Sx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const ff={hero:{pos:[-1.5,1.05,1.3],target:[.35,.85,-3],fov:38,mood:"amber"},table:{pos:[.45,1.42,-.1],target:[.1,.56,-1],fov:38,mood:"amber"},cairo:{pos:[-.62,.92,-.32],target:[-1.68,.36,-1.62],fov:36,mood:"gold",chest:1},alexandria:{pos:[.85,.95,-.05],target:[.2,.66,-1.2],fov:34,mood:"fire"},samarkand:{pos:[1.25,1.2,.55],target:[-.6,1.05,-1.7],fov:38,mood:"moon"},door:{pos:[.25,1.4,-2.2],target:[0,1.45,-6],fov:42,mood:"amber"},sync:{pos:[.05,1.45,-3],target:[0,1.4,-7],fov:46,mood:"open",door:1,flash:1},inside:{pos:[.6,1.6,-2],target:[-.2,1.2,-6.5],fov:44,mood:"open",door:1,veil:.8},final:{pos:[0,1.35,-2.6],target:[0,1.35,-7],fov:44,mood:"open",door:1,veil:.05}};class Cx{constructor(e){this.world=e,this.measure()}world;active=null;onChange=null;anchors=[];measure(){const e=window.innerHeight,t=[];for(const n of document.querySelectorAll("[data-shot]")){const i=ff[n.dataset.shot];if(!i)continue;const s=n.getBoundingClientRect().top+window.scrollY,a=n.offsetHeight,o=s+a/2-e/2,l=Number(n.dataset.hold??0)*Math.max(a-e,0)/2;t.push({y:Math.max(0,o-l),shot:i,el:n}),l>0&&t.push({y:o+l,shot:i,el:n})}this.anchors=t.sort((n,i)=>n.y-i.y)}update(e){const t=this.anchors;if(!t.length)return;let n=0;for(;n<t.length-1&&t[n+1].y<=e;)n++;const i=t[n],s=t[Math.min(n+1,t.length-1)],a=s.y>i.y?Math.min(Math.max((e-i.y)/(s.y-i.y),0),1):0;this.world.direct(i.shot,s.shot,a);const o=a<.5?i.el:s.el;if(o!==this.active){const l=this.active;this.active=o,this.onChange?.(o,l)}}}const Yh=[146.83,155.56,185,196,220,233.08,261.63,293.66],ms=(r,e,t)=>Math.min(t,Math.max(e,r));function Gn(r,e,t,n){r.cancelScheduledValues(t),r.setValueAtTime(r.value,t),r.setTargetAtTime(e,t,n)}class Px{enabled=!1;ctx=null;master;fx;send;analyser;freq=new Uint8Array(0);noise;fire;wind=[];whistle;drone;music;voices=[];swell;state={keyI:1,flicker:.4,moonI:0,embers:0,door:0,chest:0,flash:0,glitch:0,veil:0,fireNear:.3,firePan:0};latch={door:!1,doorOpenFull:!1,chest:!1,flash:!1,glitch:!1};timer=0;nextPluck=0;degree=4;voiceIndex=0;last={hover:0,tick:0};listeners=new Set;onChange(e){this.listeners.add(e)}enable(){this.ctx||this.build();const e=this.ctx;e.resume(),this.enabled=!0,Gn(this.master.gain,.85,e.currentTime,.6),this.startLoop(),this.listeners.forEach(t=>t(!0))}disable(){this.enabled=!1,this.ctx&&(Gn(this.master.gain,0,this.ctx.currentTime,.12),window.clearInterval(this.timer),window.setTimeout(()=>!this.enabled&&this.ctx?.suspend(),700)),this.listeners.forEach(e=>e(!1))}toggle(){this.enabled?this.disable():this.enable()}update(e){this.state=e}bands(e){if(!this.ctx||!this.enabled)return e.fill(0);this.analyser.getByteFrequencyData(this.freq);const t=[1,4,12,40,128];for(let n=0;n<4;n++){let i=0;for(let s=t[n];s<t[n+1];s++)i+=this.freq[s];e[n]=i/(t[n+1]-t[n])/255}return e}build(){const e=new AudioContext;this.ctx=e;const t=e.createDynamicsCompressor();t.threshold.value=-12,t.knee.value=8,t.ratio.value=10,t.attack.value=.004,t.release.value=.3,this.analyser=e.createAnalyser(),this.analyser.fftSize=256,this.analyser.smoothingTimeConstant=.75,this.freq=new Uint8Array(this.analyser.frequencyBinCount),t.connect(this.analyser),this.analyser.connect(e.destination),this.master=e.createGain(),this.master.gain.value=0,this.master.connect(t),this.fx=e.createGain(),this.fx.connect(this.master);const n=e.createConvolver();n.buffer=this.impulse(2.6);const i=e.createGain();i.gain.value=.6,n.connect(i).connect(this.master),this.send=e.createGain(),this.send.connect(n),this.noise=this.makeNoise(4);const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=140;const a=e.createGain();a.gain.value=.16,this.loop().connect(s).connect(a).connect(this.master);const o=e.createStereoPanner();o.connect(this.master);const l=e.createGain();l.gain.value=0,l.connect(o),l.connect(this.send);const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=520,c.Q.value=.7;const h=e.createGain();h.gain.value=0,this.loop().connect(c).connect(h).connect(l);const u=e.createBiquadFilter();u.type="lowpass",u.frequency.value=280,u.Q.value=.9;const f=e.createGain();f.gain.value=0,this.loop().connect(u).connect(f).connect(l);const d=e.createBiquadFilter();d.type="highpass",d.frequency.value=1500,d.connect(l),this.fire={bus:l,pan:o,roar:f,flutter:h,crackle:d,walk:.5};for(const E of[-.7,-.2]){const v=e.createBiquadFilter();v.type="bandpass",v.frequency.value=450,v.Q.value=1.1;const T=e.createGain();T.gain.value=0;const A=e.createStereoPanner();A.pan.value=E,this.loop().connect(v).connect(T).connect(A).connect(this.master),T.connect(this.send),this.wind.push({gain:T,band:v,walk:Math.random()})}{const E=e.createBiquadFilter();E.type="bandpass",E.frequency.value=1300,E.Q.value=16;const v=e.createGain();v.gain.value=0,this.loop().connect(E).connect(v).connect(this.send),this.whistle={gain:v,band:E,walk:.3}}const p=e.createBiquadFilter();p.type="lowpass",p.frequency.value=170,p.Q.value=2,this.drone=e.createGain(),this.drone.gain.value=0,p.connect(this.drone).connect(this.master);const _=e.createGain();_.gain.value=.4,this.drone.connect(_).connect(this.send);const g=[["sine",36.71,0,.7],["sawtooth",73.42,-5,.8],["sawtooth",110,6,.3],["sine",73.42,3,.5]];for(const[E,v,T,A]of g){const P=e.createOscillator();P.type=E,P.frequency.value=v,P.detune.value=T;const C=e.createGain();C.gain.value=A,P.connect(C).connect(p),P.start()}const m=e.createOscillator();m.frequency.value=.07;const y=e.createGain();y.gain.value=90,m.connect(y).connect(p.frequency),m.start(),this.music=e.createGain(),this.music.gain.value=0,this.music.connect(this.master);const w=e.createGain();w.gain.value=.9,this.music.connect(w).connect(this.send);for(let E=0;E<3;E++){const v=e.createGain(),T=e.createDelay(.05),A=e.createBiquadFilter();A.type="lowpass",A.frequency.value=2600,A.Q.value=-6;const P=e.createGain();P.gain.value=0,v.connect(T),T.connect(A).connect(P).connect(T);const C=e.createBiquadFilter();C.type="peaking",C.frequency.value=340,C.gain.value=5,A.connect(C).connect(this.music),this.voices.push({input:v,delay:T,feedback:P})}const b=e.createBiquadFilter();b.type="bandpass",b.frequency.value=500,b.Q.value=.8;const x=e.createGain();x.gain.value=0,this.loop().connect(b).connect(x),x.connect(this.master),x.connect(this.send);const M=e.createGain();M.gain.value=0,M.connect(this.send),M.connect(this.master);for(const[E,v]of[[587.33,-7],[880,5],[1174.66,-3],[1318.51,8]]){const T=e.createOscillator();T.frequency.value=E,T.detune.value=v;const A=e.createGain();A.gain.value=.5;const P=e.createOscillator();P.frequency.value=3+Math.random()*3;const C=e.createGain();C.gain.value=.5,P.connect(C).connect(A.gain),T.connect(A).connect(M),T.start(),P.start()}this.swell={gain:x,band:b,shimmer:M},document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.enabled&&this.ctx.resume())})}makeNoise(e){const t=this.ctx,n=t.createBuffer(1,Math.round(t.sampleRate*e),t.sampleRate),i=n.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return n}impulse(e){const t=this.ctx,n=Math.round(t.sampleRate*e),i=t.createBuffer(2,n,t.sampleRate);for(let s=0;s<2;s++){const a=i.getChannelData(s);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,4)*.6;for(const o of[11,19,27,38,52]){const l=Math.round((o+s*3)*.001*t.sampleRate);a[l]+=(Math.random()>.5?1:-1)*(.9-o/80)}}return i}loop(){const e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e.start(0,Math.random()*3.5),e}startLoop(){window.clearInterval(this.timer),this.timer=window.setInterval(()=>this.step(),50)}step(){const t=this.ctx.currentTime,n=this.state,i=1-n.veil*.55,s=this.fire,a=ms(.3+n.fireNear*1.1,0,1.3)*ms(n.keyI,0,2)*i;s.walk=ms(s.walk+(Math.random()-.5)*.25*(.4+n.flicker),0,1),Gn(s.bus.gain,a*.55,t,.35),Gn(s.pan.pan,ms(n.firePan,-1,1)*.75,t,.25),Gn(s.flutter.gain,.05+s.walk*.22,t,.08),Gn(s.roar.gain,n.embers*(.5+s.walk*.5),t,.3);const o=(.12+n.flicker*.25+n.embers*.55)*Math.min(a,1);Math.random()<o&&this.crackle(t+Math.random()*.05,n.embers);const l=.04+n.moonI*.5;for(const u of this.wind)u.walk=ms(u.walk+(Math.random()-.5)*.08,0,1),Gn(u.gain.gain,l*(.25+u.walk*.5)*i,t,.35),Gn(u.band.frequency,280+u.walk*700,t,.4);const c=this.whistle;c.walk=ms(c.walk+(Math.random()-.5)*.06,0,1),Gn(c.gain.gain,n.moonI*Math.max(0,c.walk-.45)*.5,t,.5),Gn(c.band.frequency,900+c.walk*900,t,.6),n.moonI>.3&&Math.random()<.06*n.moonI&&this.cricket(t,n.moonI),Gn(this.drone.gain,.05*i*(1+n.flash*.8),t,1.4),Gn(this.music.gain,.5*(1-n.flash),t,.6),t>this.nextPluck&&n.flash<.2&&(this.phrase(t+.05),this.nextPluck=t+3+Math.random()*5);const h=Math.pow(n.flash,1.5);Gn(this.swell.gain.gain,h*.24,t,.12),Gn(this.swell.band.frequency,380+h*3200,t,.15),Gn(this.swell.shimmer.gain,h*.04,t,.2),this.events(t,n)}events(e,t){const n=this.latch;!n.door&&t.door>.06&&(n.door=!0,this.doorOpen(e)),n.door&&t.door>.92&&(n.doorOpenFull=!0),n.doorOpenFull&&t.door<.85&&(n.doorOpenFull=!1,this.creak(e,1.6,300,250,.28)),n.door&&t.door<.03&&(n.door=!1,this.thud(e,52,.55)),!n.chest&&t.chest>.06?(n.chest=!0,this.metal(e,.12),this.creak(e+.08,1.1,640,860,.22)):n.chest&&t.chest<.04&&(n.chest=!1,this.thud(e,95,.3)),!n.flash&&t.flash>.8?(n.flash=!0,this.bell(e,587.33,.16)):n.flash&&t.flash<.5&&(n.flash=!1),!n.glitch&&t.glitch>.5?(n.glitch=!0,this.glitch(e)):n.glitch&&t.glitch<.2&&(n.glitch=!1)}get ready(){return this.enabled&&this.ctx!==null&&this.ctx.state==="running"}burst(e,t,n,i,s,a,o){const l=this.ctx,c=l.createBufferSource();c.buffer=this.noise;const h=l.createBiquadFilter();h.type=n,h.frequency.value=i,h.Q.value=s;const u=l.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(a,e+.002),u.gain.exponentialRampToValueAtTime(1e-4,e+t),c.connect(h).connect(u).connect(o),c.start(e,Math.random()*3.5),c.stop(e+t+.05)}tone(e,t,n,i,s,a,o,l){const c=this.ctx,h=c.createOscillator();h.type=t,h.frequency.setValueAtTime(n,e),l&&h.frequency.exponentialRampToValueAtTime(l,e+s+a);const u=c.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(i,e+s),u.gain.exponentialRampToValueAtTime(1e-4,e+s+a),h.connect(u).connect(o),h.start(e),h.stop(e+s+a+.05)}crackle(e,t){const n=1+Math.floor(Math.random()*(2+t*3));for(let i=0;i<n;i++){const s=Math.random()<.12+t*.2;this.burst(e+i*(.008+Math.random()*.035),s?.05:.006+Math.random()*.025,s?"bandpass":"highpass",s?900:1600,s?1.4:.7,(s?.5:.1)+Math.random()*.35,s?this.fire.bus:this.fire.crackle)}}cricket(e,t){const i=this.ctx.createStereoPanner();i.pan.value=-.9+Math.random()*.5,i.connect(this.send);const s=4200+Math.random()*500;for(let a=0;a<3;a++)this.tone(e+a*.034,"sine",s,.012*t,.002,.016,i)}phrase(e){const t=1+Math.floor(Math.random()*3);for(let n=0;n<t;n++){this.degree=ms(this.degree+Math.round((Math.random()-.5)*3),0,Yh.length-1);const i=e+n*(.32+Math.random()*.25);this.pluck(i,Yh[this.degree],.5+Math.random()*.3),Math.random()<.25&&this.degree>0&&this.pluck(i-.07,Yh[this.degree-1],.25)}}pluck(e,t,n){const i=this.ctx,s=this.voices[this.voiceIndex++%this.voices.length];s.delay.delayTime.setValueAtTime(1/t,e),s.feedback.gain.cancelScheduledValues(e),s.feedback.gain.setValueAtTime(.991,e),s.feedback.gain.setTargetAtTime(.97,e+1.6,.4);const a=i.createBufferSource();a.buffer=this.noise;const o=i.createBiquadFilter();o.type="lowpass",o.frequency.value=1800+Math.random()*1400;const l=i.createGain(),c=2/t;l.gain.setValueAtTime(n,e),l.gain.setValueAtTime(0,e+c),a.connect(o).connect(l).connect(s.input),a.start(e,Math.random()*3),a.stop(e+c+.01)}creak(e,t,n,i,s){const a=this.ctx,o=a.createOscillator();o.type="sawtooth";const l=24,c=new Float32Array(l);for(let f=0;f<l;f++)c[f]=18+Math.sin(f/l*Math.PI)*30+Math.random()*14;o.frequency.setValueCurveAtTime(c,e,t);const h=new Float32Array(l);for(let f=0;f<l;f++)h[f]=s*Math.sin(f/(l-1)*Math.PI)*(.55+Math.random()*.45);const u=a.createGain();u.gain.setValueCurveAtTime(h,e,t);for(const[f,d,p]of[[1,9,1],[2.4,7,.5]]){const _=a.createBiquadFilter();_.type="bandpass",_.Q.value=d,_.frequency.setValueAtTime(n*f,e),_.frequency.linearRampToValueAtTime(i*f,e+t);const g=a.createGain();g.gain.value=p,o.connect(_).connect(g).connect(u)}u.connect(this.fx),u.connect(this.send),o.start(e),o.stop(e+t+.05)}thud(e,t,n){this.tone(e,"sine",t,n,.004,.55,this.fx,t*.62),this.tone(e,"sine",t,n*.6,.004,.55,this.send,t*.62),this.burst(e,.22,"lowpass",260,.8,n*.7,this.fx),this.burst(e,.3,"lowpass",400,.8,n*.5,this.send)}metal(e,t){this.burst(e,.02,"highpass",2500,.8,t*1.5,this.fx);for(const[n,i]of[[930,.18],[1490,.12],[2240,.08]])this.tone(e,"sine",n,t*.5,.001,i,this.fx),this.tone(e,"sine",n,t*.3,.001,i,this.send)}doorOpen(e){this.metal(e,.2),this.thud(e+.02,70,.25),this.creak(e+.25,2.6,240,330,.42),this.creak(e+.6,1.9,520,700,.16)}bell(e,t,n){for(const[i,s,a]of[[1,3.2,1],[2.76,1.6,.5],[5.4,.9,.25],[8.93,.5,.12]])this.tone(e,"sine",t*i,n*a,.003,s,this.send),this.tone(e,"sine",t*i,n*a*.5,.003,s*.6,this.fx)}glitch(e){const t=5+Math.floor(Math.random()*5);for(let n=0;n<t;n++){const i=e+n*(.022+Math.random()*.03);Math.random()<.6?this.tone(i,"square",1400+Math.random()*4200,.022,.001,.025,this.fx):this.burst(i,.03,"bandpass",2e3+Math.random()*3e3,3,.12,this.fx)}}enter(){if(!this.ready)return;const e=this.ctx.currentTime+.05;this.metal(e,.25),this.thud(e+.05,46,.7),this.nextPluck=e+2.2}hover(){if(!this.ready)return;const e=this.ctx.currentTime;e-this.last.hover<.06||(this.last.hover=e,this.tone(e,"sine",2600,.012,.001,.035,this.fx))}click(){if(!this.ready)return;const e=this.ctx.currentTime;this.burst(e,.012,"highpass",3200,.7,.12,this.fx),this.tone(e,"sine",170,.06,.002,.08,this.fx,120)}tick(){if(!this.ready)return;const e=this.ctx.currentTime;e-this.last.tick<.03||(this.last.tick=e,this.tone(e,"triangle",1800,.03,.001,.03,this.fx))}confirm(){if(!this.ready)return;const e=this.ctx.currentTime;this.bell(e,293.66,.1),this.bell(e+.16,440,.08)}deny(){if(!this.ready)return;const e=this.ctx.currentTime;this.tone(e,"square",110,.03,.004,.16,this.fx,90)}}const jn=new Px,Yl=[{id:"citadel",name:"The Citadel Heist",place:"Cairo, 1249",minutes:60,min:2,max:6,price:550},{id:"library",name:"The Burning Library",place:"Alexandria, 48 BC",minutes:75,min:3,max:6,price:600},{id:"observatory",name:"The Observatory",place:"Samarkand, 1449",minutes:60,min:2,max:5,price:650}],Lx=["13:00","15:00","17:00","19:00","21:00","23:00"],Dx=14;function Ix(r){let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619);return(e>>>0)%1e3/1e3}const Nx=r=>`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()}`,fm=r=>Math.round(r).toLocaleString("en-US");function Fx(r,e={}){const t=r.querySelector(".booker__rooms"),n=r.querySelector(".booker__days"),i=r.querySelector(".booker__slots"),s=r.querySelector(".stepper__value"),a=r.querySelector(".stepper__hint"),o=r.querySelector('[data-step="-1"]'),l=r.querySelector('[data-step="1"]'),c=r.querySelector('[data-sum="room"]'),h=r.querySelector('[data-sum="when"]'),u=r.querySelector('[data-sum="total"]'),f=new Date;f.setHours(0,0,0,0);const d=Array.from({length:Dx},(b,x)=>new Date(f.getFullYear(),f.getMonth(),f.getDate()+x)),p={room:Yl[0],day:null,slot:null,players:4},_={total:0};for(const b of Yl){const x=document.createElement("label");x.className="room-opt",x.innerHTML=`<input type="radio" name="room" value="${b.id}"><b>${b.name}</b><span>${b.place}</span><span>${b.minutes} min · EGP ${b.price}</span>`,t.append(x)}const g=new Intl.DateTimeFormat("en-GB",{weekday:"short"}),m=new Intl.DateTimeFormat("en-GB",{weekday:"short",day:"numeric",month:"short"});d.forEach((b,x)=>{const M=document.createElement("button");M.type="button",M.className="day",M.setAttribute("role","radio"),M.setAttribute("aria-checked","false"),M.dataset.index=String(x),M.setAttribute("aria-label",m.format(b)),M.innerHTML=`<small>${x===0?"Today":g.format(b)}</small><b>${b.getDate()}</b>`,n.append(M)});for(const b of Lx){const x=document.createElement("button");x.type="button",x.className="slot",x.setAttribute("role","radio"),x.setAttribute("aria-checked","false"),x.dataset.slot=b,x.textContent=b,i.append(x)}const y=b=>{if(!p.day)return!1;const x=new Date;return p.day.getTime()===f.getTime()&&Number(b.slice(0,2))<=x.getHours()+1?!0:Ix(`${p.room.id}|${Nx(p.day)}|${b}`)<.3},w=()=>{t.querySelectorAll("input").forEach(x=>x.checked=x.value===p.room.id),n.querySelectorAll(".day").forEach(x=>{x.setAttribute("aria-checked",String(p.day!==null&&d[Number(x.dataset.index)].getTime()===p.day.getTime()))}),p.slot&&y(p.slot)&&(p.slot=null),i.querySelectorAll(".slot").forEach(x=>{x.disabled=y(x.dataset.slot),x.setAttribute("aria-checked",String(x.dataset.slot===p.slot))}),p.players=Math.min(Math.max(p.players,p.room.min),p.room.max),s.value=String(p.players),o.disabled=p.players<=p.room.min,l.disabled=p.players>=p.room.max,a.textContent=`${p.room.min} to ${p.room.max} players`,c.textContent=p.room.name,h.textContent=p.day?`${m.format(p.day)}${p.slot?`, ${p.slot}`:""}`:"Pick a day";const b=p.room.price*p.players;rt.to(_,{total:b,duration:.6,ease:"power3.out",onUpdate:()=>u.textContent=fm(_.total)})};return t.addEventListener("change",b=>{const x=b.target.value;p.room=Yl.find(M=>M.id===x)??p.room,e.onPick?.(),w()}),n.addEventListener("click",b=>{const x=b.target.closest(".day");x&&(p.day=d[Number(x.dataset.index)],e.onPick?.(),w())}),i.addEventListener("click",b=>{const x=b.target.closest(".slot");!x||x.disabled||(p.slot=x.dataset.slot,e.onPick?.(),w())}),[o,l].forEach(b=>b.addEventListener("click",()=>{p.players+=Number(b.dataset.step),e.onPick?.(),w()})),r.addEventListener("submit",b=>{if(b.preventDefault(),e.onSubmit?.(!!(p.day&&p.slot)),!p.day||!p.slot){r.classList.remove("is-error"),r.offsetWidth,r.classList.add("is-error"),h.textContent=p.day?"Pick a time":"Pick a day and time",(p.day?i.querySelector(".slot:not(:disabled)"):n.querySelector(".day"))?.focus();return}const x=new Intl.DateTimeFormat("en-GB",{weekday:"long",day:"numeric",month:"long"}).format(p.day),M=`Hi SYNC, I'd like to book ${p.room.name} on ${x} at ${p.slot} for ${p.players} players (EGP ${fm(p.room.price*p.players)} total).`;window.open(`https://wa.me/?text=${encodeURIComponent(M)}`,"_blank","noopener")}),w(),{select(b){p.room=Yl.find(x=>x.id===b)??p.room,w()}}}function Ux(r){if(!matchMedia("(hover: hover) and (pointer: fine)").matches)return;const e=document.querySelector(".cursor");if(!e)return;const t=e.querySelector(".cursor__dot"),n=e.querySelector(".cursor__ring"),i=e.querySelector(".cursor__label"),s=rt.quickSetter(t,"x","px"),a=rt.quickSetter(t,"y","px"),o=rt.quickTo(n,"x",{duration:.55,ease:"power3.out"}),l=rt.quickTo(n,"y",{duration:.55,ease:"power3.out"});rt.set([t,n],{x:-100,y:-100}),window.addEventListener("pointermove",h=>{s(h.clientX),a(h.clientY),o(h.clientX),l(h.clientY)}),window.addEventListener("pointerdown",()=>e.classList.add("is-down")),window.addEventListener("pointerup",()=>e.classList.remove("is-down")),document.addEventListener("pointerleave",()=>rt.to(e,{opacity:0,duration:.3})),document.addEventListener("pointerenter",()=>rt.to(e,{opacity:1,duration:.3}));let c=null;document.addEventListener("pointerover",h=>{const u=h.target.closest("[data-cursor], a, button, label, summary, input");u&&u!==c&&r?.(),c=u,u?u.dataset.cursor?(i.textContent=u.dataset.cursor,e.classList.add("is-hover"),e.classList.remove("is-link")):(e.classList.add("is-link"),e.classList.remove("is-hover")):e.classList.remove("is-hover","is-link")})}function Ox(){matchMedia("(hover: hover) and (pointer: fine)").matches&&document.querySelectorAll(".magnetic").forEach(r=>{const e=rt.quickTo(r,"x",{duration:.6,ease:"power3.out"}),t=rt.quickTo(r,"y",{duration:.6,ease:"power3.out"});r.addEventListener("pointermove",n=>{const i=r.getBoundingClientRect();e((n.clientX-(i.left+i.width/2))*.3),t((n.clientY-(i.top+i.height/2))*.3)}),r.addEventListener("pointerleave",()=>{e(0),t(0)})})}const dm="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/°·",pm=new WeakMap;function mm(r,e,t=.9){pm.get(r)?.kill();const n=r.textContent??"",i=Math.max(n.length,e.length),s={p:0},a=rt.to(s,{p:1,duration:t,ease:"power2.out",onUpdate:()=>{let o="";const l=Math.floor(s.p*i);for(let c=0;c<i;c++){const h=e[c]??"";c<l||h===" "?o+=h:c<l+6?o+=dm[Math.random()*dm.length|0]:o+=n[c]??""}r.textContent=o},onComplete:()=>{r.textContent=e}});pm.set(r,a)}const Ud="186",kx=0,gm=1,Bx=2,Zo=1,zx=2,Fo=3,hs=0,ri=1,Vi=2,lr=0,Qo=1,Dr=2,_m=3,bm=4,Gx=5,Ma=100,Vx=101,Hx=102,Wx=103,qx=104,Xx=200,Kx=201,Yx=202,Jx=203,R_=204,C_=205,jx=206,$x=207,Zx=208,Qx=209,ey=210,ty=211,ny=212,iy=213,ry=214,df=0,pf=1,mf=2,gl=3,gf=4,_f=5,bf=6,vf=7,P_=0,sy=1,ay=2,cr=0,Od=1,kd=2,Bd=3,Th=4,zd=5,Gd=6,Vd=7,vm="attached",oy="detached",L_=300,zs=301,qa=302,Vc=303,Jh=304,wh=306,Gs=1e3,Ii=1001,ch=1002,hn=1003,D_=1004,Uo=1005,zt=1006,Hc=1007,rr=1008,mi=1009,I_=1010,N_=1011,_l=1012,Hd=1013,fr=1014,Qn=1015,yn=1016,Wd=1017,qd=1018,bl=1020,F_=35902,U_=35899,O_=1021,k_=1022,Ni=1023,Ir=1026,Rs=1027,Xd=1028,Kd=1029,Vs=1030,Yd=1031,Jd=1033,Wc=33776,qc=33777,Xc=33778,Kc=33779,xf=35840,yf=35841,Sf=35842,Mf=35843,Tf=36196,wf=37492,Ef=37496,Af=37488,Rf=37489,hh=37490,Cf=37491,Pf=37808,Lf=37809,Df=37810,If=37811,Nf=37812,Ff=37813,Uf=37814,Of=37815,kf=37816,Bf=37817,zf=37818,Gf=37819,Vf=37820,Hf=37821,Wf=36492,qf=36494,Xf=36495,Kf=36283,Yf=36284,uh=36285,Jf=36286,vl=2300,xl=2301,jh=2302,xm=2303,ym=2400,Sm=2401,Mm=2402,ly=2500,cy=0,B_=1,jf=2,hy=3200,$f=0,uy=1,Jr="",xn="srgb",ai="srgb-linear",fh="linear",xt="srgb",$h=7680,fy=519,dy=512,py=513,my=514,jd=515,gy=516,_y=517,$d=518,by=519,z_=35044,Tm="300 es",sr=2e3,yl=2001;function vy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Sl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yy(){const r=Sl("canvas");return r.style.display="block",r}const wm={};function dh(...r){const e="THREE."+r.shift();console.log(e,...r)}function G_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function We(...r){r=G_(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Qe(...r){r=G_(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ua(...r){const e=r.join(" ");e in wm||(wm[e]=!0,We(...r))}function Sy(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const My={[df]:pf,[mf]:bf,[gf]:vf,[gl]:_f,[pf]:df,[bf]:mf,[vf]:gf,[_f]:gl};class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Em=1234567;const el=Math.PI/180,Xa=180/Math.PI;function Ui(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function Zd(r,e){return(r%e+e)%e}function Ty(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function wy(r,e,t){return r!==e?(t-r)/(e-r):0}function tl(r,e,t){return(1-t)*r+t*e}function Ey(r,e,t,n){return tl(r,e,1-Math.exp(-t*n))}function Ay(r,e=1){return e-Math.abs(Zd(r,e*2)-e)}function Ry(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Cy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Py(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ly(r,e){return r+Math.random()*(e-r)}function Dy(r){return r*(.5-Math.random())}function Iy(r){r!==void 0&&(Em=r);let e=Em+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ny(r){return r*el}function Fy(r){return r*Xa}function Uy(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Oy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ky(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function By(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*p,l*d,o*c);break;case"YXY":r.set(l*d,o*h,l*p,o*c);break;case"ZYZ":r.set(l*p,l*d,o*h,o*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ts={DEG2RAD:el,RAD2DEG:Xa,generateUUID:Ui,clamp:ot,euclideanModulo:Zd,mapLinear:Ty,inverseLerp:wy,lerp:tl,damp:Ey,pingpong:Ay,smoothstep:Ry,smootherstep:Cy,randInt:Py,randFloat:Ly,randFloatSpread:Dy,seededRandom:Iy,degToRad:Ny,radToDeg:Fy,isPowerOfTwo:Uy,ceilPowerOfTwo:Oy,floorPowerOfTwo:ky,setQuaternionFromProperEuler:By,normalize:Mt,denormalize:Hi},pp=class pp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pp.prototype.isVector2=!0;let he=pp;class Fr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],d=s[a+1],p=s[a+2],_=s[a+3];if(u!==_||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*_;g<0&&(f=-f,d=-d,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const y=Math.acos(g),w=Math.sin(y);m=Math.sin(m*y)/w,o=Math.sin(o*y)/w,l=l*m+f*o,c=c*m+d*o,h=h*m+p*o,u=u*m+_*o}else{l=l*m+f*o,c=c*m+d*o,h=h*m+p*o,u=u*m+_*o;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],p=s[a+3];return e[t]=o*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-o*d,e[t+2]=c*p+h*d+o*f-l*u,e[t+3]=h*p-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),d=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const mp=class mp{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Am.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Am.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zh.copy(this).projectOnVector(e),this.sub(Zh)}reflect(e){return this.sub(Zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mp.prototype.isVector3=!0;let U=mp;const Zh=new U,Am=new Fr,gp=class gp{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=i[0],g=i[3],m=i[6],y=i[1],w=i[4],b=i[7],x=i[2],M=i[5],E=i[8];return s[0]=a*_+o*y+l*x,s[3]=a*g+o*w+l*M,s[6]=a*m+o*b+l*E,s[1]=c*_+h*y+u*x,s[4]=c*g+h*w+u*M,s[7]=c*m+h*b+u*E,s[2]=f*_+d*y+p*x,s[5]=f*g+d*w+p*M,s[8]=f*m+d*b+p*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ua("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qh.makeScale(e,t)),this}rotate(e){return Ua("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qh.makeRotation(-e)),this}translate(e,t){return Ua("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gp.prototype.isMatrix3=!0;let tt=gp;const Qh=new tt,Rm=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cm=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zy(){const r={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(i.r=Cr(i.r),i.g=Cr(i.g),i.b=Cr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(i.r=Oa(i.r),i.g=Oa(i.g),i.b=Oa(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jr?fh:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ua("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ua("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ai]:{primaries:e,whitePoint:n,transfer:fh,toXYZ:Rm,fromXYZ:Cm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Rm,fromXYZ:Cm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),r}const dt=zy();function Cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Oa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let na;class Gy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{na===void 0&&(na=Sl("canvas")),na.width=e.width,na.height=e.height;const i=na.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=na}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Cr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cr(t[n]/255)*255):t[n]=Cr(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vy=0;class Qd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(eu(i[a].image)):s.push(eu(i[a]))}else s=eu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function eu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let Hy=0;const tu=new U;class un extends qs{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=Ii,i=Ii,s=zt,a=rr,o=Ni,l=mi,c=un.DEFAULT_ANISOTROPY,h=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Ui(),this.name="",this.source=new Qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=L_;un.DEFAULT_ANISOTROPY=1;const _p=class _p{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(d+1)/2,x=(m+1)/2,M=(h+f)/4,E=(u+_)/4,v=(p+g)/4;return w>b&&w>x?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=M/n,s=E/n):b>x?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=M/i,s=v/i):x<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(x),n=E/s,i=v/s),this.set(n,i,s,t),this}let y=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_p.prototype.isVector4=!0;let Et=_p;class Wy extends qs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new un(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Qd(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Wy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class V_ extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qy extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const vh=class vh{constructor(e,t,n,i,s,a,o,l,c,h,u,f,d,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,f,d,p,_,g)}set(e,t,n,i,s,a,o,l,c,h,u,f,d,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vh().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ia.setFromMatrixColumn(e,0).length(),s=1/ia.setFromMatrixColumn(e,1).length(),a=1/ia.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,d=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f+_*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=p*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xy,e,Ky)}lookAt(e,t,n){const i=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),zr.crossVectors(n,oi),zr.lengthSq()===0&&(Math.abs(n.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),zr.crossVectors(n,oi)),zr.normalize(),Jl.crossVectors(oi,zr),i[0]=zr.x,i[4]=Jl.x,i[8]=oi.x,i[1]=zr.y,i[5]=Jl.y,i[9]=oi.y,i[2]=zr.z,i[6]=Jl.z,i[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],w=n[7],b=n[11],x=n[15],M=i[0],E=i[4],v=i[8],T=i[12],A=i[1],P=i[5],C=i[9],N=i[13],I=i[2],F=i[6],z=i[10],B=i[14],$=i[3],W=i[7],L=i[11],j=i[15];return s[0]=a*M+o*A+l*I+c*$,s[4]=a*E+o*P+l*F+c*W,s[8]=a*v+o*C+l*z+c*L,s[12]=a*T+o*N+l*B+c*j,s[1]=h*M+u*A+f*I+d*$,s[5]=h*E+u*P+f*F+d*W,s[9]=h*v+u*C+f*z+d*L,s[13]=h*T+u*N+f*B+d*j,s[2]=p*M+_*A+g*I+m*$,s[6]=p*E+_*P+g*F+m*W,s[10]=p*v+_*C+g*z+m*L,s[14]=p*T+_*N+g*B+m*j,s[3]=y*M+w*A+b*I+x*$,s[7]=y*E+w*P+b*F+x*W,s[11]=y*v+w*C+b*z+x*L,s[15]=y*T+w*N+b*B+x*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],_=e[7],g=e[11],m=e[15],y=l*d-c*f,w=o*d-c*u,b=o*f-l*u,x=a*d-c*h,M=a*f-l*h,E=a*u-o*h;return t*(_*y-g*w+m*b)-n*(p*y-g*x+m*M)+i*(p*w-_*x+m*E)-s*(p*b-_*M+g*E)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],_=e[13],g=e[14],m=e[15],y=t*o-n*a,w=t*l-i*a,b=t*c-s*a,x=n*l-i*o,M=n*c-s*o,E=i*c-s*l,v=h*_-u*p,T=h*g-f*p,A=h*m-d*p,P=u*g-f*_,C=u*m-d*_,N=f*m-d*g,I=y*N-w*C+b*P+x*A-M*T+E*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=(o*N-l*C+c*P)*F,e[1]=(i*C-n*N-s*P)*F,e[2]=(_*E-g*M+m*x)*F,e[3]=(f*M-u*E-d*x)*F,e[4]=(l*A-a*N-c*T)*F,e[5]=(t*N-i*A+s*T)*F,e[6]=(g*b-p*E-m*w)*F,e[7]=(h*E-f*b+d*w)*F,e[8]=(a*C-o*A+c*v)*F,e[9]=(n*A-t*C-s*v)*F,e[10]=(p*M-_*b+m*y)*F,e[11]=(u*b-h*M-d*y)*F,e[12]=(o*T-a*P-l*v)*F,e[13]=(t*P-n*T+i*v)*F,e[14]=(_*w-p*x-g*y)*F,e[15]=(h*x-u*w+f*y)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,p=s*u,_=a*h,g=a*u,m=o*u,y=l*c,w=l*h,b=l*u,x=n.x,M=n.y,E=n.z;return i[0]=(1-(_+m))*x,i[1]=(d+b)*x,i[2]=(p-w)*x,i[3]=0,i[4]=(d-b)*M,i[5]=(1-(f+m))*M,i[6]=(g+y)*M,i[7]=0,i[8]=(p+w)*E,i[9]=(g-y)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ia.set(i[0],i[1],i[2]).length();const o=ia.set(i[4],i[5],i[6]).length(),l=ia.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Oi.copy(this);const c=1/a,h=1/o,u=1/l;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=h,Oi.elements[5]*=h,Oi.elements[6]*=h,Oi.elements[8]*=u,Oi.elements[9]*=u,Oi.elements[10]*=u,t.setFromRotationMatrix(Oi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=sr,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===sr)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===yl)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=sr,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===sr)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===yl)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};vh.prototype.isMatrix4=!0;let it=vh;const ia=new U,Oi=new it,Xy=new U(0,0,0),Ky=new U(1,1,1),zr=new U,Jl=new U,oi=new U,Pm=new it,Lm=new Fr;class us{constructor(e=0,t=0,n=0,i=us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lm.setFromEuler(this),this.setFromQuaternion(Lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class H_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yy=0;const Dm=new U,ra=new Fr,gr=new it,jl=new U,co=new U,Jy=new U,jy=new Fr,Im=new U(1,0,0),Nm=new U(0,1,0),Fm=new U(0,0,1),Um={type:"added"},$y={type:"removed"},sa={type:"childadded",child:null},nu={type:"childremoved",child:null};class Nt extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new U,t=new us,n=new Fr,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new tt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ra.setFromAxisAngle(e,t),this.quaternion.multiply(ra),this}rotateOnWorldAxis(e,t){return ra.setFromAxisAngle(e,t),this.quaternion.premultiply(ra),this}rotateX(e){return this.rotateOnAxis(Im,e)}rotateY(e){return this.rotateOnAxis(Nm,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,t){return Dm.copy(e).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Im,e)}translateY(e){return this.translateOnAxis(Nm,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jl.copy(e):jl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(co,jl,this.up):gr.lookAt(jl,co,this.up),this.quaternion.setFromRotationMatrix(gr),i&&(gr.extractRotation(i.matrixWorld),ra.setFromRotationMatrix(gr),this.quaternion.premultiply(ra.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Um),sa.child=e,this.dispatchEvent(sa),sa.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($y),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Um),sa.child=e,this.dispatchEvent(sa),sa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,Jy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,jy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Nt.DEFAULT_UP=new U(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wi extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zy={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const W_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},$l={h:0,s:0,l:0};function ru(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=Zd(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ru(a,s,e+1/3),this.g=ru(a,s,e),this.b=ru(a,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=xn){function n(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=W_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return dt.workingToColorSpace(Pn.copy(this),e),Math.round(ot(Pn.r*255,0,255))*65536+Math.round(ot(Pn.g*255,0,255))*256+Math.round(ot(Pn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Pn.copy(this),t);const n=Pn.r,i=Pn.g,s=Pn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=xn){dt.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,n=Pn.g,i=Pn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+t,Gr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gr),e.getHSL($l);const n=tl(Gr.h,$l.h,t),i=tl(Gr.s,$l.s,t),s=tl(Gr.l,$l.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new ke;ke.NAMES=W_;class ep{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new ep(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qy extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ki=new U,_r=new U,su=new U,br=new U,aa=new U,oa=new U,Om=new U,au=new U,ou=new U,lu=new U,cu=new Et,hu=new Et,uu=new Et;class Pi{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ki.subVectors(e,t),i.cross(ki);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ki.subVectors(i,t),_r.subVectors(n,t),su.subVectors(e,t);const a=ki.dot(ki),o=ki.dot(_r),l=ki.dot(su),c=_r.dot(_r),h=_r.dot(su),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,br)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,br.x),l.addScaledVector(a,br.y),l.addScaledVector(o,br.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return cu.setScalar(0),hu.setScalar(0),uu.setScalar(0),cu.fromBufferAttribute(e,t),hu.fromBufferAttribute(e,n),uu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(cu,s.x),a.addScaledVector(hu,s.y),a.addScaledVector(uu,s.z),a}static isFrontFacing(e,t,n,i){return ki.subVectors(n,t),_r.subVectors(e,t),ki.cross(_r).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),ki.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Pi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;aa.subVectors(i,n),oa.subVectors(s,n),au.subVectors(e,n);const l=aa.dot(au),c=oa.dot(au);if(l<=0&&c<=0)return t.copy(n);ou.subVectors(e,i);const h=aa.dot(ou),u=oa.dot(ou);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(aa,a);lu.subVectors(e,s);const d=aa.dot(lu),p=oa.dot(lu);if(p>=0&&d<=p)return t.copy(s);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(oa,o);const g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Om.subVectors(s,i),o=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(Om,o);const m=1/(g+_+f);return a=_*m,o=f*m,t.copy(n).addScaledVector(aa,a).addScaledVector(oa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bi):Bi.fromBufferAttribute(s,a),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zl.copy(n.boundingBox)),Zl.applyMatrix4(e.matrixWorld),this.union(Zl)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),Ql.subVectors(this.max,ho),la.subVectors(e.a,ho),ca.subVectors(e.b,ho),ha.subVectors(e.c,ho),Vr.subVectors(ca,la),Hr.subVectors(ha,ca),gs.subVectors(la,ha);let t=[0,-Vr.z,Vr.y,0,-Hr.z,Hr.y,0,-gs.z,gs.y,Vr.z,0,-Vr.x,Hr.z,0,-Hr.x,gs.z,0,-gs.x,-Vr.y,Vr.x,0,-Hr.y,Hr.x,0,-gs.y,gs.x,0];return!fu(t,la,ca,ha,Ql)||(t=[1,0,0,0,1,0,0,0,1],!fu(t,la,ca,ha,Ql))?!1:(ec.crossVectors(Vr,Hr),t=[ec.x,ec.y,ec.z],fu(t,la,ca,ha,Ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vr=[new U,new U,new U,new U,new U,new U,new U,new U],Bi=new U,Zl=new yi,la=new U,ca=new U,ha=new U,Vr=new U,Hr=new U,gs=new U,ho=new U,Ql=new U,ec=new U,_s=new U;function fu(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){_s.fromArray(r,s);const o=i.x*Math.abs(_s.x)+i.y*Math.abs(_s.y)+i.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),h=n.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const wr=eS();function eS(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function tS(r){Math.abs(r)>65504&&We("DataUtils.toHalfFloat(): Value out of range."),r=ot(r,-65504,65504),wr.floatView[0]=r;const e=wr.uint32View[0],t=e>>23&511;return wr.baseTable[t]+((e&8388607)>>wr.shiftTable[t])}function nS(r){const e=r>>10;return wr.uint32View[0]=wr.mantissaTable[wr.offsetTable[e]+(r&1023)]+wr.exponentTable[e],wr.floatView[0]}class tc{static toHalfFloat(e){return tS(e)}static fromHalfFloat(e){return nS(e)}}const nn=new U,nc=new he;let iS=0;class Sn extends qs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=z_,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class q_ extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class X_ extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mn extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const rS=new yi,uo=new U,du=new U;class dr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const t=uo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(uo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(du)),this.expandByPoint(uo.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sS=0;const Ti=new it,pu=new Nt,ua=new U,li=new yi,fo=new yi,_n=new U;class pn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vy(e)?X_:q_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,n){return Ti.makeTranslation(e,t,n),this.applyMatrix4(Ti),this}scale(e,t,n){return Ti.makeScale(e,t,n),this.applyMatrix4(Ti),this}lookAt(e){return pu.lookAt(e),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];li.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fo.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(li.min,fo.min),li.expandByPoint(_n),_n.addVectors(li.max,fo.max),li.expandByPoint(_n)):(li.expandByPoint(fo.min),li.expandByPoint(fo.max))}li.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)_n.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_n.fromBufferAttribute(o,c),l&&(ua.fromBufferAttribute(e,c),_n.add(ua)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new U,l[v]=new U;const c=new U,h=new U,u=new U,f=new he,d=new he,p=new he,_=new U,g=new U;function m(v,T,A){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,A),f.fromBufferAttribute(s,v),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,A),h.sub(c),u.sub(c),d.sub(f),p.sub(f);const P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),o[v].add(_),o[T].add(_),o[A].add(_),l[v].add(g),l[T].add(g),l[A].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,T=y.length;v<T;++v){const A=y[v],P=A.start,C=A.count;for(let N=P,I=P+C;N<I;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const w=new U,b=new U,x=new U,M=new U;function E(v){x.fromBufferAttribute(i,v),M.copy(x);const T=o[v];w.copy(T),w.sub(x.multiplyScalar(x.dot(T))).normalize(),b.crossVectors(M,T);const P=b.dot(l[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,P)}for(let v=0,T=y.length;v<T;++v){const A=y[v],P=A.start,C=A.count;for(let N=P,I=P+C;N<I;N+=3)E(e.getX(N+0)),E(e.getX(N+1)),E(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new Sn(f,h,u)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class K_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=z_,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Vn=new U;class Ml{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){dh("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ml(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){dh("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const mu=new U,aS=new U,oS=new tt;class Kr{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=mu.subVectors(n,t).cross(aS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(mu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||oS.getNormalMatrix(e),i=this.coplanarPoint(mu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let lS=0;class qi extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Qo,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=R_,this.blendDst=C_,this.blendEquation=Ma,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$h,this.stencilZFail=$h,this.stencilZPass=$h,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Kr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Y_ extends qi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fa;const po=new U,da=new U,pa=new U,ma=new he,mo=new he,J_=new it,ic=new U,go=new U,rc=new U,km=new he,gu=new he,Bm=new he;class cS extends Nt{constructor(e=new Y_){if(super(),this.isSprite=!0,this.type="Sprite",fa===void 0){fa=new pn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new K_(t,5);fa.setIndex([0,1,2,0,2,3]),fa.setAttribute("position",new Ml(n,3,0,!1)),fa.setAttribute("uv",new Ml(n,2,3,!1))}this.geometry=fa,this.material=e,this.center=new he(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),da.setFromMatrixScale(this.matrixWorld),J_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&da.multiplyScalar(-pa.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;sc(ic.set(-.5,-.5,0),pa,a,da,i,s),sc(go.set(.5,-.5,0),pa,a,da,i,s),sc(rc.set(.5,.5,0),pa,a,da,i,s),km.set(0,0),gu.set(1,0),Bm.set(1,1);let o=e.ray.intersectTriangle(ic,go,rc,!1,po);if(o===null&&(sc(go.set(-.5,.5,0),pa,a,da,i,s),gu.set(0,1),o=e.ray.intersectTriangle(ic,rc,go,!1,po),o===null))return;const l=e.ray.origin.distanceTo(po);l<e.near||l>e.far||t.push({distance:l,point:po.clone(),uv:Pi.getInterpolation(po,ic,go,rc,km,gu,Bm,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function sc(r,e,t,n,i,s){ma.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(mo.x=s*ma.x-i*ma.y,mo.y=i*ma.x+s*ma.y):mo.copy(ma),r.copy(e),r.x+=mo.x,r.y+=mo.y,r.applyMatrix4(J_)}const xr=new U,_u=new U,ac=new U,oc=new U;class Eh{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_u.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),oc.copy(this.origin).sub(_u);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ac),o=oc.dot(this.direction),l=-oc.dot(ac),c=oc.lengthSq(),h=Math.abs(1-a*a);let u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=s*h,u>=0)if(f>=-p)if(f<=p){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(_u).addScaledVector(ac,f),d}intersectSphere(e,t){if(e.radius<0)return null;xr.subVectors(e.center,this.origin);const n=xr.dot(this.direction),i=xr.dot(xr)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,p=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=n.x-a.x,y=n.y-a.y,w=n.z-a.z,b=Math.abs(l),x=Math.abs(c),M=Math.abs(h);let E,v,T,A,P,C,N,I,F,z,B,$;if(b>=x&&b>=M?(T=l,C=u,F=p,$=m,l>=0?(E=c,v=h,A=f,P=d,N=_,I=g,z=y,B=w):(E=h,v=c,A=d,P=f,N=g,I=_,z=w,B=y)):x>=M?(T=c,C=f,F=_,$=y,c>=0?(E=h,v=l,A=d,P=u,N=g,I=p,z=w,B=m):(E=l,v=h,A=u,P=d,N=p,I=g,z=m,B=w)):(T=h,C=d,F=g,$=w,h>=0?(E=l,v=c,A=u,P=f,N=p,I=_,z=m,B=y):(E=c,v=l,A=f,P=u,N=_,I=p,z=y,B=m)),T===0)return null;const W=E/T,L=v/T,j=1/T,fe=A-W*C,me=P-L*C,Ne=N-W*F,qe=I-L*F,Ze=z-W*$,J=B-L*$,te=Ze*qe-J*Ne,_e=fe*J-me*Ze,Xe=Ne*me-qe*fe;if(i){if(te<0||_e<0||Xe<0)return null}else if((te<0||_e<0||Xe<0)&&(te>0||_e>0||Xe>0))return null;const xe=te+_e+Xe;if(xe===0)return null;const De=j*(te*C+_e*F+Xe*$);return(xe>0?De<0:De>0)?null:this.at(De/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ar extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zm=new it,bs=new Eh,lc=new dr,Gm=new U,cc=new U,hc=new U,uc=new U,bu=new U,fc=new U,Vm=new U,dc=new U;class It extends Nt{constructor(e=new pn,t=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){fc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(bu.fromBufferAttribute(u,e),a?fc.addScaledVector(bu,h):fc.addScaledVector(bu.sub(t),h))}t.add(fc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lc.copy(n.boundingSphere),lc.applyMatrix4(s),bs.copy(e.ray).recast(e.near),!(lc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(lc,Gm)===null||bs.origin.distanceToSquared(Gm)>(e.far-e.near)**2))&&(zm.copy(s).invert(),bs.copy(e.ray).applyMatrix4(zm),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=a[g.materialIndex],y=Math.max(g.start,d.start),w=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let b=y,x=w;b<x;b+=3){const M=o.getX(b),E=o.getX(b+1),v=o.getX(b+2);i=pc(this,m,e,n,c,h,u,M,E,v),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const y=o.getX(g),w=o.getX(g+1),b=o.getX(g+2);i=pc(this,a,e,n,c,h,u,y,w,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=a[g.materialIndex],y=Math.max(g.start,d.start),w=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=y,x=w;b<x;b+=3){const M=b,E=b+1,v=b+2;i=pc(this,m,e,n,c,h,u,M,E,v),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const y=g,w=g+1,b=g+2;i=pc(this,a,e,n,c,h,u,y,w,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function hS(r,e,t,n,i,s,a,o){let l;if(e.side===ri?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===hs,o),l===null)return null;dc.copy(o),dc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(dc);return c<t.near||c>t.far?null:{distance:c,point:dc.clone(),object:r}}function pc(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,cc),r.getVertexPosition(l,hc),r.getVertexPosition(c,uc);const h=hS(r,e,t,n,cc,hc,uc,Vm);if(h){const u=new U;Pi.getBarycoord(Vm,cc,hc,uc,u),i&&(h.uv=Pi.getInterpolatedAttribute(i,o,l,c,u,new he)),s&&(h.uv1=Pi.getInterpolatedAttribute(s,o,l,c,u,new he)),a&&(h.normal=Pi.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};Pi.getNormal(cc,hc,uc,f.normal),h.face=f,h.barycoord=u}return h}const _o=new Et,Hm=new Et,Wm=new Et,uS=new Et,qm=new it,mc=new U,vu=new dr,Xm=new it,xu=new Eh;class fS extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vm,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mc),this.boundingBox.expandByPoint(mc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mc),this.boundingSphere.expandByPoint(mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vu.copy(this.boundingSphere),vu.applyMatrix4(i),e.ray.intersectsSphere(vu)!==!1&&(Xm.copy(i).invert(),xu.copy(e.ray).applyMatrix4(Xm),!(this.boundingBox!==null&&xu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===oy?this.bindMatrixInverse.copy(this.bindMatrix).invert():We("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Hm.fromBufferAttribute(i.attributes.skinIndex,e),Wm.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(_o.copy(t),t.set(0,0,0,0)):(_o.set(...t,1),t.set(0,0,0)),_o.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=Wm.getComponent(s);if(a!==0){const o=Hm.getComponent(s);qm.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(uS.copy(_o).applyMatrix4(qm),a)}}return t.isVector4&&(t.w=_o.w),t.applyMatrix4(this.bindMatrixInverse)}}class j_ extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tl extends un{constructor(e=null,t=1,n=1,i,s,a,o,l,c=hn,h=hn,u,f){super(null,a,o,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Km=new it,dS=new it;class tp{constructor(e=[],t=[]){this.uuid=Ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){We("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new it;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:dS;Km.multiplyMatrices(o,t[s]),Km.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Tl(t,e,e,Ni,Qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(We("Skeleton: No bone found with UUID:",s),a=new j_),this.bones.push(a),this.boneInverses.push(new it().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ph extends Sn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ga=new it,Ym=new it,gc=[],Jm=new yi,pS=new it,bo=new It,vo=new dr;class mS extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ph(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,pS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ga),Jm.copy(e.boundingBox).applyMatrix4(ga),this.boundingBox.union(Jm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ga),vo.copy(e.boundingSphere).applyMatrix4(ga),this.boundingSphere.union(vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(n),e.ray.intersectsSphere(vo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ga),Ym.multiplyMatrices(n,ga),bo.matrixWorld=Ym,bo.raycast(e,gc);for(let a=0,o=gc.length;a<o;a++){const l=gc[a];l.instanceId=s,l.object=this,t.push(l)}gc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ph(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tl(new Float32Array(i*this.count),i,this.count,Xd,Qn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vs=new dr,gS=new he(.5,.5),_c=new U;class np{constructor(e=new Kr,t=new Kr,n=new Kr,i=new Kr,s=new Kr,a=new Kr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sr,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],y=s[12],w=s[13],b=s[14],x=s[15];if(i[0].setComponents(c-a,d-h,m-p,x-y).normalize(),i[1].setComponents(c+a,d+h,m+p,x+y).normalize(),i[2].setComponents(c+o,d+u,m+_,x+w).normalize(),i[3].setComponents(c-o,d-u,m-_,x-w).normalize(),n)i[4].setComponents(l,f,g,b).normalize(),i[5].setComponents(c-l,d-f,m-g,x-b).normalize();else if(i[4].setComponents(c-l,d-f,m-g,x-b).normalize(),t===sr)i[5].setComponents(c+l,d+f,m+g,x+b).normalize();else if(t===yl)i[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const t=gS.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_c.x=i.normal.x>0?e.max.x:e.min.x,_c.y=i.normal.y>0?e.max.y:e.min.y,_c.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $_ extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mh=new U,gh=new U,jm=new it,xo=new Eh,bc=new dr,yu=new U,$m=new U;class ip extends Nt{constructor(e=new pn,t=new $_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)mh.fromBufferAttribute(t,i-1),gh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mh.distanceTo(gh);e.setAttribute("lineDistance",new Mn(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bc.copy(n.boundingSphere),bc.applyMatrix4(i),bc.radius+=s,e.ray.intersectsSphere(bc)===!1)return;jm.copy(i).invert(),xo.copy(e.ray).applyMatrix4(jm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=c){const m=h.getX(_),y=h.getX(_+1),w=vc(this,e,xo,l,m,y,_);w&&t.push(w)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(d),m=vc(this,e,xo,l,_,g,p-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=c){const m=vc(this,e,xo,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=vc(this,e,xo,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vc(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(mh.fromBufferAttribute(o,i),gh.fromBufferAttribute(o,s),t.distanceSqToSegment(mh,gh,yu,$m)>n)return;yu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(yu);if(!(c<e.near||c>e.far))return{distance:c,point:$m.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Zm=new U,Qm=new U;class _S extends ip{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Zm.fromBufferAttribute(t,i),Qm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zm.distanceTo(Qm);e.setAttribute("lineDistance",new Mn(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bS extends ip{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Z_ extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const eg=new it,Zf=new Eh,xc=new dr,yc=new U;class rp extends Nt{constructor(e=new pn,t=new Z_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xc.copy(n.boundingSphere),xc.applyMatrix4(i),xc.radius+=s,e.ray.intersectsSphere(xc)===!1)return;eg.copy(i).invert(),Zf.copy(e.ray).applyMatrix4(eg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,_=d;p<_;p++){const g=c.getX(p);yc.fromBufferAttribute(u,g),tg(yc,g,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,_=d;p<_;p++)yc.fromBufferAttribute(u,p),tg(yc,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function tg(r,e,t,n,i,s,a){const o=Zf.distanceSqToPoint(r);if(o<t){const l=new U;Zf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Q_ extends un{constructor(e=[],t=zs,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vS extends un{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wl extends un{constructor(e,t,n=fr,i,s,a,o=hn,l=hn,c,h=Ir,u=1){if(h!==Ir&&h!==Rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class xS extends wl{constructor(e,t=fr,n=zs,i,s,a=hn,o=hn,l,c=Ir){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class eb extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ja extends pn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(h,3)),this.setAttribute("uv",new Mn(u,2));function p(_,g,m,y,w,b,x,M,E,v,T){const A=b/E,P=x/v,C=b/2,N=x/2,I=M/2,F=E+1,z=v+1;let B=0,$=0;const W=new U;for(let L=0;L<z;L++){const j=L*P-N;for(let fe=0;fe<F;fe++){const me=fe*A-C;W[_]=me*y,W[g]=j*w,W[m]=I,c.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[m]=M>0?1:-1,h.push(W.x,W.y,W.z),u.push(fe/E),u.push(1-L/v),B+=1}}for(let L=0;L<v;L++)for(let j=0;j<E;j++){const fe=f+j+F*L,me=f+j+F*(L+1),Ne=f+(j+1)+F*(L+1),qe=f+(j+1)+F*L;l.push(fe,me,qe),l.push(me,Ne,qe),$+=6}o.addGroup(d,$,T),d+=$,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ah extends pn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let p=0;const _=[],g=n/2;let m=0;y(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Mn(u,3)),this.setAttribute("normal",new Mn(f,3)),this.setAttribute("uv",new Mn(d,2));function y(){const b=new U,x=new U;let M=0;const E=(t-e)/n;for(let v=0;v<=s;v++){const T=[],A=v/s,P=A*(t-e)+e;for(let C=0;C<=i;C++){const N=C/i,I=N*l+o,F=Math.sin(I),z=Math.cos(I);x.x=P*F,x.y=-A*n+g,x.z=P*z,u.push(x.x,x.y,x.z),b.set(F,E,z).normalize(),f.push(b.x,b.y,b.z),d.push(N,1-A),T.push(p++)}_.push(T)}for(let v=0;v<i;v++)for(let T=0;T<s;T++){const A=_[T][v],P=_[T+1][v],C=_[T+1][v+1],N=_[T][v+1];(e>0||T!==0)&&(h.push(A,P,N),M+=3),(t>0||T!==s-1)&&(h.push(P,C,N),M+=3)}c.addGroup(m,M,0),m+=M}function w(b){const x=p,M=new he,E=new U;let v=0;const T=b===!0?e:t,A=b===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,g*A,0),f.push(0,A,0),d.push(.5,.5),p++;const P=p;for(let C=0;C<=i;C++){const I=C/i*l+o,F=Math.cos(I),z=Math.sin(I);E.x=T*z,E.y=g*A,E.z=T*F,u.push(E.x,E.y,E.z),f.push(0,A,0),M.x=F*.5+.5,M.y=z*.5*A+.5,d.push(M.x,M.y),p++}for(let C=0;C<i;C++){const N=x+C,I=P+C;b===!0?h.push(I,I+1,N):h.push(I+1,I,N),v+=3}c.addGroup(m,v,b===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new he:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,i=[],s=[],a=[],o=new U,l=new it;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(ot(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(ot(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class sp extends pr{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yS extends sp{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ap(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const ng=new U,ig=new U,Su=new ap,Mu=new ap,Tu=new ap;class SS extends pr{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(ig.subVectors(i[0],i[1]).add(i[0]),c=ig);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(ng.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ng),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Su.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,_,g),Mu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,_,g),Tu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Su.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Mu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Tu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Su.calc(l),Mu.calc(l),Tu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function rg(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function MS(r,e){const t=1-r;return t*t*e}function TS(r,e){return 2*(1-r)*r*e}function wS(r,e){return r*r*e}function nl(r,e,t,n){return MS(r,e)+TS(r,t)+wS(r,n)}function ES(r,e){const t=1-r;return t*t*t*e}function AS(r,e){const t=1-r;return 3*t*t*r*e}function RS(r,e){return 3*(1-r)*r*r*e}function CS(r,e){return r*r*r*e}function il(r,e,t,n,i){return ES(r,e)+AS(r,t)+RS(r,n)+CS(r,i)}class tb extends pr{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(il(e,i.x,s.x,a.x,o.x),il(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class PS extends pr{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(il(e,i.x,s.x,a.x,o.x),il(e,i.y,s.y,a.y,o.y),il(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nb extends pr{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class LS extends pr{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ib extends pr{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(nl(e,i.x,s.x,a.x),nl(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DS extends pr{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(nl(e,i.x,s.x,a.x),nl(e,i.y,s.y,a.y),nl(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rb extends pr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(rg(o,l.x,c.x,h.x,u.x),rg(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}var Qf=Object.freeze({__proto__:null,ArcCurve:yS,CatmullRomCurve3:SS,CubicBezierCurve:tb,CubicBezierCurve3:PS,EllipseCurve:sp,LineCurve:nb,LineCurve3:LS,QuadraticBezierCurve:ib,QuadraticBezierCurve3:DS,SplineCurve:rb});class IS extends pr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qf[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Qf[i.type]().fromJSON(i))}return this}}class ed extends IS{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new nb(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new ib(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new tb(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new rb(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new sp(e,t,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class sb extends ed{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ed().fromJSON(i))}return this}}function NS(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=ab(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=BS(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let h=o,u=l;for(let f=t;f<i;f+=t){const d=r[f],p=r[f+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return El(s,a,t,o,l,c,0),a}function ab(r,e,t,n,i){let s;if(i===jS(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=sg(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=sg(a/n|0,r[a],r[a+1],s);return s&&Ka(s,s.next)&&(Rl(s),s=s.next),s}function Hs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ka(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Rl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function El(r,e,t,n,i,s,a){if(!r)return;!a&&s&&WS(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?US(r,n,i,s):FS(r)){e.push(l.i,r.i,c.i),Rl(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=OS(Hs(r),e),El(r,e,t,n,i,s,2)):a===2&&kS(r,e,t,n,i,s):El(Hs(r),e,t,n,i,s,1);break}}}function FS(r){const e=r.prev,t=r,n=r.next;if(Wt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),u=Math.min(o,l,c),f=Math.max(i,s,a),d=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Oo(i,o,s,l,a,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function US(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Wt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,f=a.y,d=Math.min(o,l,c),p=Math.min(h,u,f),_=Math.max(o,l,c),g=Math.max(h,u,f),m=td(d,p,e,t,n),y=td(_,g,e,t,n);let w=r.prevZ,b=r.nextZ;for(;w&&w.z>=m&&b&&b.z<=y;){if(w.x>=d&&w.x<=_&&w.y>=p&&w.y<=g&&w!==i&&w!==a&&Oo(o,h,l,u,c,f,w.x,w.y)&&Wt(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=d&&b.x<=_&&b.y>=p&&b.y<=g&&b!==i&&b!==a&&Oo(o,h,l,u,c,f,b.x,b.y)&&Wt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=m;){if(w.x>=d&&w.x<=_&&w.y>=p&&w.y<=g&&w!==i&&w!==a&&Oo(o,h,l,u,c,f,w.x,w.y)&&Wt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=y;){if(b.x>=d&&b.x<=_&&b.y>=p&&b.y<=g&&b!==i&&b!==a&&Oo(o,h,l,u,c,f,b.x,b.y)&&Wt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function OS(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Ka(n,i)&&lb(n,t,t.next,i)&&Al(n,i)&&Al(i,n)&&(e.push(n.i,t.i,i.i),Rl(t),Rl(t.next),t=r=i),t=t.next}while(t!==r);return Hs(t)}function kS(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&KS(a,o)){let l=cb(a,o);a=Hs(a,a.next),l=Hs(l,l.next),El(a,e,t,n,i,s,0),El(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function BS(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=ab(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(XS(c))}i.sort(zS);for(let s=0;s<i.length;s++)t=GS(i[s],t);return t}function zS(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function GS(r,e){const t=VS(r,e);if(!t)return e;const n=cb(t,r);return Hs(n,n.next),Hs(t,t.next)}function VS(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(Ka(r,t))return t;do{if(Ka(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ob(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Al(t,r)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&HS(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function HS(r,e){return Wt(r.prev,r,e.prev)<0&&Wt(e.next,r,r.next)<0}function WS(r,e,t,n){let i=r;do i.z===0&&(i.z=td(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,qS(i)}function qS(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function td(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function XS(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ob(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Oo(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&ob(r,e,t,n,i,s,a,o)}function KS(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!YS(r,e)&&(Al(r,e)&&Al(e,r)&&JS(r,e)&&(Wt(r.prev,r,e.prev)||Wt(r,e.prev,e))||Ka(r,e)&&Wt(r.prev,r,r.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ka(r,e){return r.x===e.x&&r.y===e.y}function lb(r,e,t,n){const i=Mc(Wt(r,e,t)),s=Mc(Wt(r,e,n)),a=Mc(Wt(t,n,r)),o=Mc(Wt(t,n,e));return!!(i!==s&&a!==o||i===0&&Sc(r,t,e)||s===0&&Sc(r,n,e)||a===0&&Sc(t,r,n)||o===0&&Sc(t,e,n))}function Sc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Mc(r){return r>0?1:r<0?-1:0}function YS(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&lb(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Al(r,e){return Wt(r.prev,r,r.next)<0?Wt(r,e,r.next)>=0&&Wt(r,r.prev,e)>=0:Wt(r,e,r.prev)<0||Wt(r,r.next,e)<0}function JS(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function cb(r,e){const t=nd(r.i,r.x,r.y),n=nd(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function sg(r,e,t,n){const i=nd(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Rl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function nd(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jS(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class $S{static triangulate(e,t,n=2){return NS(e,t,n)}}class Aa{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Aa.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];ag(e),og(n,e);let a=e.length;t.forEach(ag);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,og(n,t[l]);const o=$S.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function ag(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function og(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class op extends pn{constructor(e=new sb([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Mn(i,3)),this.setAttribute("uv",new Mn(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:ZS;let w,b=!1,x,M,E,v;if(m){w=m.getSpacedPoints(h),b=!0,f=!1;const Q=m.isCatmullRomCurve3?m.closed:!1;x=m.computeFrenetFrames(h,Q),M=new U,E=new U,v=new U}f||(g=0,d=0,p=0,_=0);const T=o.extractPoints(c);let A=T.shape;const P=T.holes;if(!Aa.isClockWise(A)){A=A.reverse();for(let Q=0,re=P.length;Q<re;Q++){const oe=P[Q];Aa.isClockWise(oe)&&(P[Q]=oe.reverse())}}function N(Q){const oe=10000000000000001e-36;let O=Q[0];for(let pe=1;pe<=Q.length;pe++){const Ge=pe%Q.length,Ue=Q[Ge],Re=Ue.x-O.x,je=Ue.y-O.y,k=Re*Re+je*je,ct=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(O.x),Math.abs(O.y)),Ye=oe*ct*ct;if(k<=Ye){Q.splice(Ge,1),pe--;continue}O=Ue}}N(A),P.forEach(N);const I=P.length,F=A;for(let Q=0;Q<I;Q++){const re=P[Q];A=A.concat(re)}function z(Q,re,oe){return re||Qe("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(re,oe)}const B=A.length;function $(Q,re,oe){let O,pe,Ge;const Ue=Q.x-re.x,Re=Q.y-re.y,je=oe.x-Q.x,k=oe.y-Q.y,ct=Ue*Ue+Re*Re,Ye=Ue*k-Re*je;if(Math.abs(Ye)>Number.EPSILON){const D=Math.sqrt(ct),S=Math.sqrt(je*je+k*k),H=re.x-Re/D,q=re.y+Ue/D,Z=oe.x-k/S,ge=oe.y+je/S,ce=((Z-H)*k-(ge-q)*je)/(Ue*k-Re*je);O=H+Ue*ce-Q.x,pe=q+Re*ce-Q.y;const ee=O*O+pe*pe;if(ee<=2)return new he(O,pe);Ge=Math.sqrt(ee/2)}else{let D=!1;Ue>Number.EPSILON?je>Number.EPSILON&&(D=!0):Ue<-Number.EPSILON?je<-Number.EPSILON&&(D=!0):Math.sign(Re)===Math.sign(k)&&(D=!0),D?(O=-Re,pe=Ue,Ge=Math.sqrt(ct)):(O=Ue,pe=Re,Ge=Math.sqrt(ct/2))}return new he(O/Ge,pe/Ge)}const W=[];for(let Q=0,re=F.length,oe=re-1,O=Q+1;Q<re;Q++,oe++,O++)oe===re&&(oe=0),O===re&&(O=0),W[Q]=$(F[Q],F[oe],F[O]);const L=[];let j,fe=W.concat();for(let Q=0,re=I;Q<re;Q++){const oe=P[Q];j=[];for(let O=0,pe=oe.length,Ge=pe-1,Ue=O+1;O<pe;O++,Ge++,Ue++)Ge===pe&&(Ge=0),Ue===pe&&(Ue=0),j[O]=$(oe[O],oe[Ge],oe[Ue]);L.push(j),fe=fe.concat(j)}let me;if(g===0)me=Aa.triangulateShape(F,P);else{const Q=[],re=[];for(let oe=0;oe<g;oe++){const O=oe/g,pe=d*Math.cos(O*Math.PI/2),Ge=p*Math.sin(O*Math.PI/2)+_;for(let Ue=0,Re=F.length;Ue<Re;Ue++){const je=z(F[Ue],W[Ue],Ge);_e(je.x,je.y,-pe),O===0&&Q.push(je)}for(let Ue=0,Re=I;Ue<Re;Ue++){const je=P[Ue];j=L[Ue];const k=[];for(let ct=0,Ye=je.length;ct<Ye;ct++){const D=z(je[ct],j[ct],Ge);_e(D.x,D.y,-pe),O===0&&k.push(D)}O===0&&re.push(k)}}me=Aa.triangulateShape(Q,re)}const Ne=me.length,qe=p+_;for(let Q=0;Q<B;Q++){const re=f?z(A[Q],fe[Q],qe):A[Q];b?(E.copy(x.normals[0]).multiplyScalar(re.x),M.copy(x.binormals[0]).multiplyScalar(re.y),v.copy(w[0]).add(E).add(M),_e(v.x,v.y,v.z)):_e(re.x,re.y,0)}for(let Q=1;Q<=h;Q++)for(let re=0;re<B;re++){const oe=f?z(A[re],fe[re],qe):A[re];b?(E.copy(x.normals[Q]).multiplyScalar(oe.x),M.copy(x.binormals[Q]).multiplyScalar(oe.y),v.copy(w[Q]).add(E).add(M),_e(v.x,v.y,v.z)):_e(oe.x,oe.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){const re=Q/g,oe=d*Math.cos(re*Math.PI/2),O=p*Math.sin(re*Math.PI/2)+_;for(let pe=0,Ge=F.length;pe<Ge;pe++){const Ue=z(F[pe],W[pe],O);_e(Ue.x,Ue.y,u+oe)}for(let pe=0,Ge=P.length;pe<Ge;pe++){const Ue=P[pe];j=L[pe];for(let Re=0,je=Ue.length;Re<je;Re++){const k=z(Ue[Re],j[Re],O);b?_e(k.x,k.y+w[h-1].y,w[h-1].x+oe):_e(k.x,k.y,u+oe)}}}Ze(),J();function Ze(){const Q=i.length/3;if(f){let re=0,oe=B*re;for(let O=0;O<Ne;O++){const pe=me[O];Xe(pe[2]+oe,pe[1]+oe,pe[0]+oe)}re=h+g*2,oe=B*re;for(let O=0;O<Ne;O++){const pe=me[O];Xe(pe[0]+oe,pe[1]+oe,pe[2]+oe)}}else{for(let re=0;re<Ne;re++){const oe=me[re];Xe(oe[2],oe[1],oe[0])}for(let re=0;re<Ne;re++){const oe=me[re];Xe(oe[0]+B*h,oe[1]+B*h,oe[2]+B*h)}}n.addGroup(Q,i.length/3-Q,0)}function J(){const Q=i.length/3;let re=0;te(F,re),re+=F.length;for(let oe=0,O=P.length;oe<O;oe++){const pe=P[oe];te(pe,re),re+=pe.length}n.addGroup(Q,i.length/3-Q,1)}function te(Q,re){let oe=Q.length;for(;--oe>=0;){const O=oe;let pe=oe-1;pe<0&&(pe=Q.length-1);for(let Ge=0,Ue=h+g*2;Ge<Ue;Ge++){const Re=B*Ge,je=B*(Ge+1),k=re+O+Re,ct=re+pe+Re,Ye=re+pe+je,D=re+O+je;xe(k,ct,Ye,D)}}}function _e(Q,re,oe){l.push(Q),l.push(re),l.push(oe)}function Xe(Q,re,oe){De(Q),De(re),De(oe);const O=i.length/3,pe=y.generateTopUV(n,i,O-3,O-2,O-1);Fe(pe[0]),Fe(pe[1]),Fe(pe[2])}function xe(Q,re,oe,O){De(Q),De(re),De(O),De(re),De(oe),De(O);const pe=i.length/3,Ge=y.generateSideWallUV(n,i,pe-6,pe-3,pe-2,pe-1);Fe(Ge[0]),Fe(Ge[1]),Fe(Ge[3]),Fe(Ge[1]),Fe(Ge[2]),Fe(Ge[3])}function De(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Fe(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return QS(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Qf[i.type]().fromJSON(i)),new op(n,e.options)}}const ZS={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new he(s,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-u),new he(f,1-p),new he(_,1-m)]:[new he(o,1-l),new he(h,1-u),new he(d,1-p),new he(g,1-m)]}};function QS(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ai extends pn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const y=m*f-a;for(let w=0;w<c;w++){const b=w*u-s;p.push(b,-y,0),_.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const w=y+c*m,b=y+c*(m+1),x=y+1+c*(m+1),M=y+1+c*m;d.push(w,b,M),d.push(b,x,M)}this.setIndex(d),this.setAttribute("position",new Mn(p,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ya(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(lg(i))i.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(lg(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Wn(r){const e={};for(let t=0;t<r.length;t++){const n=Ya(r[t]);for(const i in n)e[i]=n[i]}return e}function lg(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function eM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function hb(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Cl={clone:Ya,merge:Wn};var tM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ya(e.uniforms),this.uniformsGroups=eM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(i.value);break;case"v2":this.uniforms[n].value=new he().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Et().fromArray(i.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new it().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ub extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $a extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$f,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mr extends $a{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class iM extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rM extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Yr(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Yc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function sM(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function cg(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function aM(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Za{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class oM extends Za{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ym,endingEnd:ym}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sm:s=e,o=2*t-n;break;case Mm:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sm:a=e,l=2*n-t;break;case Mm:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-f*g+2*f*_-f*p,y=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*p+1,w=(-1-d)*g+(1.5+d)*_+.5*p,b=d*g-d*_;for(let x=0;x!==o;++x)s[x]=m*a[h+x]+y*a[c+x]+w*a[l+x]+b*a[u+x];return s}}class lM extends Za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}}class cM extends Za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class hM extends Za{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){const p=(n-t)/(i-t),_=1-p;for(let g=0;g!==o;++g)s[g]=a[c+g]*_+a[l+g]*p;return s}const f=o*2,d=e-1;for(let p=0;p!==o;++p){const _=a[c+p],g=a[l+p],m=d*f+p*2,y=u[m],w=u[m+1],b=e*f+p*2,x=h[b],M=h[b+1],E=fM(n,t,y,x,i);s[p]=fb(E,_,w,M,g)}return s}}function fb(r,e,t,n,i){const s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function uM(r,e,t,n,i){const s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function fM(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){const o=fb(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;const l=uM(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}class Xi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yr(t,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yr(e.times,Array),values:Yr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Yc(e.settings)&&(n.settings={inTangents:Yr(e.settings.inTangents,Array),outTangents:Yr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new hM(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vl:t=this.InterpolantFactoryMethodDiscrete;break;case xl:t=this.InterpolantFactoryMethodLinear;break;case jh:t=this.InterpolantFactoryMethodSmooth;break;case xm:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vl;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return jh;case this.InterpolantFactoryMethodBezier:return xm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Yc(this.settings)&&(hg(this.settings.inTangents,e),hg(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&xy(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jh,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Yc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function hg(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}Xi.prototype.ValueTypeName="";Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=xl;class Qa extends Xi{constructor(e,t,n){super(e,t,n)}}Qa.prototype.ValueTypeName="bool";Qa.prototype.ValueBufferType=Array;Qa.prototype.DefaultInterpolation=vl;Qa.prototype.InterpolantFactoryMethodLinear=void 0;Qa.prototype.InterpolantFactoryMethodSmooth=void 0;class db extends Xi{constructor(e,t,n,i){super(e,t,n,i)}}db.prototype.ValueTypeName="color";class Pl extends Xi{constructor(e,t,n,i){super(e,t,n,i)}}Pl.prototype.ValueTypeName="number";class dM extends Za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Fr.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Ll extends Xi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new dM(this.times,this.values,this.getValueSize(),e)}}Ll.prototype.ValueTypeName="quaternion";Ll.prototype.InterpolantFactoryMethodSmooth=void 0;class eo extends Xi{constructor(e,t,n){super(e,t,n)}}eo.prototype.ValueTypeName="string";eo.prototype.ValueBufferType=Array;eo.prototype.DefaultInterpolation=vl;eo.prototype.InterpolantFactoryMethodLinear=void 0;eo.prototype.InterpolantFactoryMethodSmooth=void 0;class _h extends Xi{constructor(e,t,n,i){super(e,t,n,i)}}_h.prototype.ValueTypeName="vector";class pM{constructor(e="",t=-1,n=[],i=ly){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gM(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Xi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=sM(l);l=cg(l,1,h),c=cg(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Pl(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function mM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pl;case"vector":case"vector2":case"vector3":case"vector4":return _h;case"color":return db;case"quaternion":return Ll;case"bool":case"boolean":return Qa;case"string":return eo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function gM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mM(r.type);if(r.times===void 0){const n=[],i=[];aM(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Yc(r.settings)&&(t.settings={inTangents:Yr(r.settings.inTangents,Float32Array),outTangents:Yr(r.settings.outTangents,Float32Array)}),t}const Ar={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(ug(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!ug(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function ug(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class pb{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const _M=new pb;class Xs{constructor(e){this.manager=e!==void 0?e:_M,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Xs.DEFAULT_MATERIAL_NAME="__DEFAULT";const yr={};class bM extends Error{constructor(e,t){super(e),this.response=t}}class lp extends Xs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ar.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(yr[e]!==void 0){yr[e].push({onLoad:t,onProgress:n,onError:i});return}yr[e]=[],yr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=yr[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let _=0;const g=new ReadableStream({start(m){y();function y(){u.read().then(({done:w,value:b})=>{if(w)m.close();else{_+=b.byteLength;const x=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let M=0,E=h.length;M<E;M++){const v=h[M];v.onProgress&&v.onProgress(x)}m.enqueue(b),y()}},w=>{m.error(w)})}}});return new Response(g)}else throw new bM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Ar.add(`file:${e}`,c);const h=yr[e];delete yr[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=yr[e];if(h===void 0)throw this.manager.itemError(e),c;delete yr[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const _a=new WeakMap;class vM extends Xs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ar.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=_a.get(a);u===void 0&&(u=[],_a.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Sl("img");function l(){h(),t&&t(this);const u=_a.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}_a.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),Ar.remove(`image:${e}`);const f=_a.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}_a.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ar.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class xM extends Xs{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Tl,o=new lp(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){i!==void 0?i(h):Qe(h);return}s._applyTexData(a,c),t&&t(a,c)},n,i),a}createDataTexture(e){const t=new Tl;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Ii,e.wrapT=t.wrapT!==void 0?t.wrapT:Ii,e.magFilter=t.magFilter!==void 0?t.magFilter:zt,e.minFilter=t.minFilter!==void 0?t.minFilter:zt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=rr),t.mipmapCount===1&&(e.minFilter=zt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class mb extends Xs{constructor(e){super(e)}load(e,t,n,i){const s=new un,a=new vM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Rh extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class yM extends Rh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const wu=new it,fg=new U,dg=new U;class cp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;fg.setFromMatrixPosition(e.matrixWorld),t.position.copy(fg),dg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){wu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===yl||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tc=new U,wc=new Fr,Ji=new U;class gb extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tc,wc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,wc,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Tc,wc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,wc,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new U,pg=new he,mg=new he;class Yn extends gb{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,pg,mg),t.subVectors(mg,pg)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(el*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class SM extends cp{constructor(){super(new Yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Xa*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class id extends Rh{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new SM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class MM extends cp{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ch extends Rh{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new MM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Nl extends gb{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class TM extends cp{constructor(){super(new Nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wM extends Rh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new TM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class rl{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Eu=new WeakMap;class EM extends Xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&We("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&We("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ar.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{Eu.has(a)===!0?(i&&i(Eu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ar.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Eu.set(l,c),Ar.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ar.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ba=-90,va=1;class AM extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yn(ba,va,e,t);i.layers=this.layers,this.add(i);const s=new Yn(ba,va,e,t);s.layers=this.layers,this.add(s);const a=new Yn(ba,va,e,t);a.layers=this.layers,this.add(a);const o=new Yn(ba,va,e,t);o.layers=this.layers,this.add(o);const l=new Yn(ba,va,e,t);l.layers=this.layers,this.add(l);const c=new Yn(ba,va,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===sr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class RM extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class CM{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=PM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function PM(){this._document.hidden===!1&&this.reset()}const hp="\\[\\]\\.:\\/",LM=new RegExp("["+hp+"]","g"),up="[^"+hp+"]",DM="[^"+hp.replace("\\.","")+"]",IM=/((?:WC+[\/:])*)/.source.replace("WC",up),NM=/(WCOD+)?/.source.replace("WCOD",DM),FM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",up),UM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",up),OM=new RegExp("^"+IM+NM+FM+UM+"$"),kM=["material","materials","bones","map"];class BM{constructor(e,t,n){const i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(LM,"")}static parseTrackName(e){const t=OM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);kM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=BM;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const bp=class bp{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};bp.prototype.isMatrix2=!0;let gg=bp;function _g(r,e,t,n){const i=zM(n);switch(t){case O_:return r*e;case Xd:return r*e/i.components*i.byteLength;case Kd:return r*e/i.components*i.byteLength;case Vs:return r*e*2/i.components*i.byteLength;case Yd:return r*e*2/i.components*i.byteLength;case k_:return r*e*3/i.components*i.byteLength;case Ni:return r*e*4/i.components*i.byteLength;case Jd:return r*e*4/i.components*i.byteLength;case Wc:case qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xc:case Kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yf:case Mf:return Math.max(r,16)*Math.max(e,8)/4;case xf:case Sf:return Math.max(r,8)*Math.max(e,8)/2;case Tf:case wf:case Af:case Rf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ef:case hh:case Cf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Df:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case If:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Of:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case kf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case zf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Gf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Wf:case qf:case Xf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Kf:case Yf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case uh:case Jf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zM(r){switch(r){case mi:case I_:return{byteLength:1,components:1};case _l:case N_:case yn:return{byteLength:2,components:1};case Wd:case qd:return{byteLength:2,components:4};case fr:case Hd:case Qn:return{byteLength:4,components:1};case F_:case U_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);function _b(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function GM(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const _=u[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var VM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,uT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bT="gl_FragColor = linearToOutputTexel( gl_FragColor );",vT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ET=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,NT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,FT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ow=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_w=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ww=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ew=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ow=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$w=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:VM,alphahash_pars_fragment:HM,alphamap_fragment:WM,alphamap_pars_fragment:qM,alphatest_fragment:XM,alphatest_pars_fragment:KM,aomap_fragment:YM,aomap_pars_fragment:JM,batching_pars_vertex:jM,batching_vertex:$M,begin_vertex:ZM,beginnormal_vertex:QM,bsdfs:eT,iridescence_fragment:tT,bumpmap_pars_fragment:nT,clipping_planes_fragment:iT,clipping_planes_pars_fragment:rT,clipping_planes_pars_vertex:sT,clipping_planes_vertex:aT,color_fragment:oT,color_pars_fragment:lT,color_pars_vertex:cT,color_vertex:hT,common:uT,cube_uv_reflection_fragment:fT,defaultnormal_vertex:dT,displacementmap_pars_vertex:pT,displacementmap_vertex:mT,emissivemap_fragment:gT,emissivemap_pars_fragment:_T,colorspace_fragment:bT,colorspace_pars_fragment:vT,envmap_fragment:xT,envmap_common_pars_fragment:yT,envmap_pars_fragment:ST,envmap_pars_vertex:MT,envmap_physical_pars_fragment:NT,envmap_vertex:TT,fog_vertex:wT,fog_pars_vertex:ET,fog_fragment:AT,fog_pars_fragment:RT,gradientmap_pars_fragment:CT,lightmap_pars_fragment:PT,lights_lambert_fragment:LT,lights_lambert_pars_fragment:DT,lights_pars_begin:IT,lights_toon_fragment:FT,lights_toon_pars_fragment:UT,lights_phong_fragment:OT,lights_phong_pars_fragment:kT,lights_physical_fragment:BT,lights_physical_pars_fragment:zT,lights_fragment_begin:GT,lights_fragment_maps:VT,lights_fragment_end:HT,lightprobes_pars_fragment:WT,logdepthbuf_fragment:qT,logdepthbuf_pars_fragment:XT,logdepthbuf_pars_vertex:KT,logdepthbuf_vertex:YT,map_fragment:JT,map_pars_fragment:jT,map_particle_fragment:$T,map_particle_pars_fragment:ZT,metalnessmap_fragment:QT,metalnessmap_pars_fragment:ew,morphinstance_vertex:tw,morphcolor_vertex:nw,morphnormal_vertex:iw,morphtarget_pars_vertex:rw,morphtarget_vertex:sw,normal_fragment_begin:aw,normal_fragment_maps:ow,normal_pars_fragment:lw,normal_pars_vertex:cw,normal_vertex:hw,normalmap_pars_fragment:uw,clearcoat_normal_fragment_begin:fw,clearcoat_normal_fragment_maps:dw,clearcoat_pars_fragment:pw,iridescence_pars_fragment:mw,opaque_fragment:gw,packing:_w,premultiplied_alpha_fragment:bw,project_vertex:vw,dithering_fragment:xw,dithering_pars_fragment:yw,roughnessmap_fragment:Sw,roughnessmap_pars_fragment:Mw,shadowmap_pars_fragment:Tw,shadowmap_pars_vertex:ww,shadowmap_vertex:Ew,shadowmask_pars_fragment:Aw,skinbase_vertex:Rw,skinning_pars_vertex:Cw,skinning_vertex:Pw,skinnormal_vertex:Lw,specularmap_fragment:Dw,specularmap_pars_fragment:Iw,tonemapping_fragment:Nw,tonemapping_pars_fragment:Fw,transmission_fragment:Uw,transmission_pars_fragment:Ow,uv_pars_fragment:kw,uv_pars_vertex:Bw,uv_vertex:zw,worldpos_vertex:Gw,background_vert:Vw,background_frag:Hw,backgroundCube_vert:Ww,backgroundCube_frag:qw,cube_vert:Xw,cube_frag:Kw,depth_vert:Yw,depth_frag:Jw,distance_vert:jw,distance_frag:$w,equirect_vert:Zw,equirect_frag:Qw,linedashed_vert:eE,linedashed_frag:tE,meshbasic_vert:nE,meshbasic_frag:iE,meshlambert_vert:rE,meshlambert_frag:sE,meshmatcap_vert:aE,meshmatcap_frag:oE,meshnormal_vert:lE,meshnormal_frag:cE,meshphong_vert:hE,meshphong_frag:uE,meshphysical_vert:fE,meshphysical_frag:dE,meshtoon_vert:pE,meshtoon_frag:mE,points_vert:gE,points_frag:_E,shadow_vert:bE,shadow_frag:vE,sprite_vert:xE,sprite_frag:yE},Ee={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},er={basic:{uniforms:Wn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Wn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Wn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Wn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Wn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Wn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Wn([Ee.points,Ee.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Wn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Wn([Ee.common,Ee.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Wn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Wn([Ee.sprite,Ee.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Wn([Ee.common,Ee.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Wn([Ee.lights,Ee.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};er.physical={uniforms:Wn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Ec={r:0,b:0,g:0},SE=new it,bb=new tt;bb.set(-1,0,0,0,1,0,0,0,1);function ME(r,e,t,n,i,s){const a=new ke(0);let o=i===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const b=y.backgroundBlurriness>0;w=e.get(w,b)}return w}function p(y){let w=!1;const b=d(y);b===null?g(a,o):b&&b.isColor&&(g(b,1),w=!0);const x=r.xr.getEnvironmentBlendMode();x==="additive"?t.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(y,w){const b=d(w);b&&(b.isCubeTexture||b.mapping===wh)?(c===void 0&&(c=new It(new ja(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Ya(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SE.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bb),c.material.toneMapped=dt.getTransfer(b.colorSpace)!==xt,(h!==b||u!==b.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new It(new Ai(2,2),new Kt({name:"BackgroundMaterial",uniforms:Ya(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=dt.getTransfer(b.colorSpace)!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,w){y.getRGB(Ec,hb(r)),t.buffers.color.setClear(Ec.r,Ec.g,Ec.b,w,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:_,dispose:m}}function TE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(P,C,N,I,F){let z=!1;const B=u(P,I,N,C);s!==B&&(s=B,c(s.object)),z=d(P,I,N,F),z&&p(P,I,N,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,b(P,C,N,I),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function h(P){return r.deleteVertexArray(P)}function u(P,C,N,I){const F=I.wireframe===!0;let z=n[C.id];z===void 0&&(z={},n[C.id]=z);const B=P.isInstancedMesh===!0?P.id:0;let $=z[B];$===void 0&&($={},z[B]=$);let W=$[N.id];W===void 0&&(W={},$[N.id]=W);let L=W[F];return L===void 0&&(L=f(l()),W[F]=L),L}function f(P){const C=[],N=[],I=[];for(let F=0;F<t;F++)C[F]=0,N[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:I,object:P,attributes:{},index:null}}function d(P,C,N,I){const F=s.attributes,z=C.attributes;let B=0;const $=N.getAttributes();for(const W in $)if($[W].location>=0){const j=F[W];let fe=z[W];if(fe===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),j===void 0||j.attribute!==fe||fe&&j.data!==fe.data)return!0;B++}return s.attributesNum!==B||s.index!==I}function p(P,C,N,I){const F={},z=C.attributes;let B=0;const $=N.getAttributes();for(const W in $)if($[W].location>=0){let j=z[W];j===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const fe={};fe.attribute=j,j&&j.data&&(fe.data=j.data),F[W]=fe,B++}s.attributes=F,s.attributesNum=B,s.index=I}function _(){const P=s.newAttributes;for(let C=0,N=P.length;C<N;C++)P[C]=0}function g(P){m(P,0)}function m(P,C){const N=s.newAttributes,I=s.enabledAttributes,F=s.attributeDivisors;N[P]=1,I[P]===0&&(r.enableVertexAttribArray(P),I[P]=1),F[P]!==C&&(r.vertexAttribDivisor(P,C),F[P]=C)}function y(){const P=s.newAttributes,C=s.enabledAttributes;for(let N=0,I=C.length;N<I;N++)C[N]!==P[N]&&(r.disableVertexAttribArray(N),C[N]=0)}function w(P,C,N,I,F,z,B){B===!0?r.vertexAttribIPointer(P,C,N,F,z):r.vertexAttribPointer(P,C,N,I,F,z)}function b(P,C,N,I){_();const F=I.attributes,z=N.getAttributes(),B=C.defaultAttributeValues;for(const $ in z){const W=z[$];if(W.location>=0){let L=F[$];if(L===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(L=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(L=P.instanceColor)),L!==void 0){const j=L.normalized,fe=L.itemSize,me=e.get(L);if(me===void 0)continue;const Ne=me.buffer,qe=me.type,Ze=me.bytesPerElement,J=qe===r.INT||qe===r.UNSIGNED_INT||L.gpuType===Hd;if(L.isInterleavedBufferAttribute){const te=L.data,_e=te.stride,Xe=L.offset;if(te.isInstancedInterleavedBuffer){for(let xe=0;xe<W.locationSize;xe++)m(W.location+xe,te.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<W.locationSize;xe++)g(W.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let xe=0;xe<W.locationSize;xe++)w(W.location+xe,fe/W.locationSize,qe,j,_e*Ze,(Xe+fe/W.locationSize*xe)*Ze,J)}else{if(L.isInstancedBufferAttribute){for(let te=0;te<W.locationSize;te++)m(W.location+te,L.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let te=0;te<W.locationSize;te++)g(W.location+te);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let te=0;te<W.locationSize;te++)w(W.location+te,fe/W.locationSize,qe,j,fe*Ze,fe/W.locationSize*te*Ze,J)}}else if(B!==void 0){const j=B[$];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(W.location,j);break;case 3:r.vertexAttrib3fv(W.location,j);break;case 4:r.vertexAttrib4fv(W.location,j);break;default:r.vertexAttrib1fv(W.location,j)}}}}y()}function x(){T();for(const P in n){const C=n[P];for(const N in C){const I=C[N];for(const F in I){const z=I[F];for(const B in z)h(z[B].object),delete z[B];delete I[F]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;const C=n[P.id];for(const N in C){const I=C[N];for(const F in I){const z=I[F];for(const B in z)h(z[B].object),delete z[B];delete I[F]}}delete n[P.id]}function E(P){for(const C in n){const N=n[C];for(const I in N){const F=N[I];if(F[P.id]===void 0)continue;const z=F[P.id];for(const B in z)h(z[B].object),delete z[B];delete F[P.id]}}}function v(P){for(const C in n){const N=n[C],I=P.isInstancedMesh===!0?P.id:0,F=N[I];if(F!==void 0){for(const z in F){const B=F[z];for(const $ in B)h(B[$].object),delete B[$];delete F[z]}delete N[I],Object.keys(N).length===0&&delete n[C]}}}function T(){A(),a=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:A,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function wE(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function EE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==Ni&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const v=E===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==mi&&E!==Qn&&!v&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(We("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=r.getParameter(r.MAX_SAMPLES),M=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,maxSamples:x,samples:M}}function AE(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Kr,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!i||p===null||p.length===0||s&&!g)s?h(null):c();else{const y=s?0:n,w=y*4;let b=m.clippingState||null;l.value=b,b=h(p,f,w,d);for(let x=0;x!==w;++x)b[x]=t[x];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,b=d;w!==_;++w,b+=4)a.copy(u[w]).applyMatrix4(y,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const Ra=4,RE=6,CE=20,PE=256,yo=new Nl,bg=new ke;let Au=null,Ru=0,Cu=0,Pu=!1;const LE=new U,xs=new U;class rd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=LE}=s;Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,Ru,Cu),this._renderer.xr.enabled=Pu,e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:yn,format:Ni,colorSpace:ai,depthBuffer:!1},i=vg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vg(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=DE(s)),this._blurMaterial=NE(s,e,t),this._ggxMaterial=IE(s,e,t)}return i}_compileMaterial(e){const t=new It(new pn,e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,i,s){const l=new Yn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(bg),u.toneMapping=cr,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new ja,new ar({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,m=!0):(g.color.copy(bg),m=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));const x=this._cubeSize;xa(i,b*x,w>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(_,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===zs||e.mapping===qa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xg());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;xa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,yo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-Ra?n-p+Ra:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,xa(s,g,m,3*_,2*_),i.setRenderTarget(s),i.render(o,yo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,xa(e,g,m,3*_,2*_),i.setRenderTarget(e),i.render(o,yo)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-Ra?i-this._lodMax+Ra:0),f=4*(this._cubeSize-h);xa(t,u,f,3*h,2*h),a.setRenderTarget(t),a.render(l,yo)}}function DE(r){const e=[],t=[];let n=r;const i=r-Ra+1+RE;for(let s=0;s<i;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),_=new Float32Array(d*f*u);for(let m=0;m<u;m++){const y=m%3*2/3-1,w=m>2?0:-1,b=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];p.set(b,d*f*m);for(let x=0;x<f;x++){const M=h[x*2]*2-1,E=h[x*2+1]*2-1;m===0?xs.set(1,E,M):m===1?xs.set(-M,1,-E):m===2?xs.set(-M,E,1):m===3?xs.set(-1,E,-M):m===4?xs.set(-M,-1,E):xs.set(M,E,-1),xs.toArray(_,(m*f+x)*d)}}const g=new pn;g.setAttribute("position",new Sn(p,d)),g.setAttribute("outputDirection",new Sn(_,d)),t.push(new It(g,null)),n>Ra&&n--}return{lodMeshes:t,sizeLods:e}}function vg(r,e,t){const n=new Un(r,e,t);return n.texture.mapping=wh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function IE(r,e,t){return new Kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ph(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function NE(r,e,t){return new Kt({name:"SphericalGaussianBlur",defines:{SAMPLES:CE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ph(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function xg(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function yg(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Ph(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class vb extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Q_(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ja(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:Ya(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ri,blending:lr});s.uniforms.tEquirect.value=t;const a=new It(i,s),o=t.minFilter;return t.minFilter===rr&&(t.minFilter=zt),new AM(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function FE(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?a(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Vc||d===Jh)if(e.has(f)){const p=e.get(f).texture;return o(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const _=new vb(p.height);return _.fromEquirectangularTexture(r,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,p=d===Vc||d===Jh,_=d===zs||d===qa;if(p||_){let g=t.get(f);const m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new rd(r)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new rd(r)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,d){return d===Vc?f.mapping=zs:d===Jh&&(f.mapping=qa),f}function l(f){let d=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){const d=f.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function UE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ua("WebGLRenderer: "+n+" extension not supported."),i}}}function OE(r,e,t,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,p=u.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const y=d.array;_=d.version;for(let w=0,b=y.length;w<b;w+=3){const x=y[w+0],M=y[w+1],E=y[w+2];f.push(x,M,M,E,E,x)}}else{const y=p.array;_=p.version;for(let w=0,b=y.length/3-1;w<b;w+=3){const x=w+0,M=w+1,E=w+2;f.push(x,M,M,E,E,x)}}const g=new(p.count>=65535?X_:q_)(f,1);g.version=_;const m=s.get(u);m&&e.remove(m),s.set(u,g)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function kE(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*a),t.update(f,n,1)}function c(u,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,u*a,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let _=0;for(let g=0;g<d;g++)_+=f[g];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function BE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zE(r,e,t){const n=new WeakMap,i=new Et;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let A=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",A)};var d=A;f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let x=o.attributes.position.count*b,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*M*4*u),v=new V_(E,x,M,u);v.type=Qn,v.needsUpdate=!0;const T=b*4;for(let P=0;P<u;P++){const C=m[P],N=y[P],I=w[P],F=x*M*4*P;for(let z=0;z<C.count;z++){const B=z*T;p===!0&&(i.fromBufferAttribute(C,z),E[F+B+0]=i.x,E[F+B+1]=i.y,E[F+B+2]=i.z,E[F+B+3]=0),_===!0&&(i.fromBufferAttribute(N,z),E[F+B+4]=i.x,E[F+B+5]=i.y,E[F+B+6]=i.z,E[F+B+7]=0),g===!0&&(i.fromBufferAttribute(I,z),E[F+B+8]=i.x,E[F+B+9]=i.y,E[F+B+10]=i.z,E[F+B+11]=I.itemSize===4?i.w:1)}}f={count:u,texture:v,size:new he(x,M)},n.set(o,f),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function GE(r,e,t,n,i){let s=new WeakMap;function a(c){const h=i.render.frame,u=c.geometry,f=e.get(c,u);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const VE={[Od]:"LINEAR_TONE_MAPPING",[kd]:"REINHARD_TONE_MAPPING",[Bd]:"CINEON_TONE_MAPPING",[Th]:"ACES_FILMIC_TONE_MAPPING",[Gd]:"AGX_TONE_MAPPING",[Vd]:"NEUTRAL_TONE_MAPPING",[zd]:"CUSTOM_TONE_MAPPING"};function HE(r,e,t,n,i,s){const a=new Un(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new pn;c.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Mn([0,2,0,0,2,0],2));const h=new ub({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new It(c,h),f=new Nl(-1,1,1,-1,0,1);let d=null,p=null,_=!1,g,m=null,y=[],w=!1;this.setSize=function(b,x){a.setSize(b,x),o!==null&&o.setSize(b,x),l!==null&&l.setSize(b,x);for(let M=0;M<y.length;M++){const E=y[M];E.setSize&&E.setSize(b,x)}},this.setEffects=function(b){y=b,w=y.length>0&&y[0].isRenderPass===!0;const x=a.width,M=a.height;y.length>0&&o===null&&(o=new Un(x,M,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new Un(x,M,{type:yn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<y.length;E++){const v=y[E];v.setSize&&v.setSize(x,M)}},this.begin=function(b,x){if(_||b.toneMapping===cr&&y.length===0)return!1;if(m=x,x!==null){const M=x.width,E=x.height;(a.width!==M||a.height!==E)&&this.setSize(M,E)}return w===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=cr,!0},this.hasRenderPass=function(){return w},this.end=function(b,x){b.toneMapping=g,_=!0;let M=a,E=o;for(let v=0;v<y.length;v++){const T=y[v];T.enabled!==!1&&(T.render(b,E,M,x),T.needsSwap!==!1&&(M=E,E=E===o?l:o))}if(d!==b.outputColorSpace||p!==b.toneMapping){d=b.outputColorSpace,p=b.toneMapping,h.defines={},dt.getTransfer(d)===xt&&(h.defines.SRGB_TRANSFER="");const v=VE[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(m),b.render(u,f),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const xb=new un,sd=new wl(1,1),yb=new V_,Sb=new qy,Mb=new Q_,Sg=[],Mg=[],Tg=new Float32Array(16),wg=new Float32Array(9),Eg=new Float32Array(4);function to(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Sg[i];if(s===void 0&&(s=new Float32Array(i),Sg[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function fn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function dn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Lh(r,e){let t=Mg[e];t===void 0&&(t=new Int32Array(e),Mg[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function WE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2fv(this.addr,e),dn(t,e)}}function XE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;r.uniform3fv(this.addr,e),dn(t,e)}}function KE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4fv(this.addr,e),dn(t,e)}}function YE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;Eg.set(n),r.uniformMatrix2fv(this.addr,!1,Eg),dn(t,n)}}function JE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;wg.set(n),r.uniformMatrix3fv(this.addr,!1,wg),dn(t,n)}}function jE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;Tg.set(n),r.uniformMatrix4fv(this.addr,!1,Tg),dn(t,n)}}function $E(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ZE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2iv(this.addr,e),dn(t,e)}}function QE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3iv(this.addr,e),dn(t,e)}}function e1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4iv(this.addr,e),dn(t,e)}}function t1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function n1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2uiv(this.addr,e),dn(t,e)}}function i1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3uiv(this.addr,e),dn(t,e)}}function r1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4uiv(this.addr,e),dn(t,e)}}function s1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(sd.compareFunction=t.isReversedDepthBuffer()?$d:jd,s=sd):s=xb,t.setTexture2D(e||s,i)}function a1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sb,i)}function o1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Mb,i)}function l1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yb,i)}function c1(r){switch(r){case 5126:return WE;case 35664:return qE;case 35665:return XE;case 35666:return KE;case 35674:return YE;case 35675:return JE;case 35676:return jE;case 5124:case 35670:return $E;case 35667:case 35671:return ZE;case 35668:case 35672:return QE;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return l1}}function h1(r,e){r.uniform1fv(this.addr,e)}function u1(r,e){const t=to(e,this.size,2);r.uniform2fv(this.addr,t)}function f1(r,e){const t=to(e,this.size,3);r.uniform3fv(this.addr,t)}function d1(r,e){const t=to(e,this.size,4);r.uniform4fv(this.addr,t)}function p1(r,e){const t=to(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function m1(r,e){const t=to(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function g1(r,e){const t=to(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _1(r,e){r.uniform1iv(this.addr,e)}function b1(r,e){r.uniform2iv(this.addr,e)}function v1(r,e){r.uniform3iv(this.addr,e)}function x1(r,e){r.uniform4iv(this.addr,e)}function y1(r,e){r.uniform1uiv(this.addr,e)}function S1(r,e){r.uniform2uiv(this.addr,e)}function M1(r,e){r.uniform3uiv(this.addr,e)}function T1(r,e){r.uniform4uiv(this.addr,e)}function w1(r,e,t){const n=this.cache,i=e.length,s=Lh(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=sd:a=xb;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function E1(r,e,t){const n=this.cache,i=e.length,s=Lh(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Sb,s[a])}function A1(r,e,t){const n=this.cache,i=e.length,s=Lh(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Mb,s[a])}function R1(r,e,t){const n=this.cache,i=e.length,s=Lh(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||yb,s[a])}function C1(r){switch(r){case 5126:return h1;case 35664:return u1;case 35665:return f1;case 35666:return d1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return _1;case 35667:case 35671:return b1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return y1;case 36294:return S1;case 36295:return M1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}class P1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c1(t.type)}}class L1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C1(t.type)}}class D1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Lu=/(\w+)(\])?(\[|\.)?/g;function Ag(r,e){r.seq.push(e),r.map[e.id]=e}function I1(r,e,t){const n=r.name,i=n.length;for(Lu.lastIndex=0;;){const s=Lu.exec(n),a=Lu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ag(t,c===void 0?new P1(o,r,e):new L1(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new D1(o),Ag(t,u)),t=u}}}class Jc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);I1(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Rg(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const N1=37297;let F1=0;function U1(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Cg=new tt;function O1(r){dt._getMatrix(Cg,dt.workingColorSpace,r);const e=`mat3( ${Cg.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case fh:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Pg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+U1(r.getShaderSource(e),o)}else return s}function k1(r,e){const t=O1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const B1={[Od]:"Linear",[kd]:"Reinhard",[Bd]:"Cineon",[Th]:"ACESFilmic",[Gd]:"AgX",[Vd]:"Neutral",[zd]:"Custom"};function z1(r,e){const t=B1[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ac=new U;function G1(){dt.getLuminanceCoefficients(Ac);const r=Ac.x.toFixed(4),e=Ac.y.toFixed(4),t=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function H1(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function W1(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ko(r){return r!==""}function Lg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(r){return r.replace(q1,K1)}const X1=new Map;function K1(r,e){let t=at[e];if(t===void 0){const n=X1.get(e);if(n!==void 0)t=at[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ad(t)}const Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ig(r){return r.replace(Y1,J1)}function J1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ng(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const j1={[Zo]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function $1(r){return j1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Z1={[zs]:"ENVMAP_TYPE_CUBE",[qa]:"ENVMAP_TYPE_CUBE",[wh]:"ENVMAP_TYPE_CUBE_UV"};function Q1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Z1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const eA={[qa]:"ENVMAP_MODE_REFRACTION"};function tA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":eA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nA={[P_]:"ENVMAP_BLENDING_MULTIPLY",[sy]:"ENVMAP_BLENDING_MIX",[ay]:"ENVMAP_BLENDING_ADD"};function iA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":nA[r.combine]||"ENVMAP_BLENDING_NONE"}function rA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sA(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=$1(t),c=Q1(t),h=tA(t),u=iA(t),f=rA(t),d=V1(t),p=H1(s),_=i.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ko).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ko).join(`
`),m.length>0&&(m+=`
`)):(g=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),m=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?at.tonemapping_pars_fragment:"",t.toneMapping!==cr?z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,k1("linearToOutputTexel",t.outputColorSpace),G1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),a=ad(a),a=Lg(a,t),a=Dg(a,t),o=ad(o),o=Lg(o,t),o=Dg(o,t),a=Ig(a),o=Ig(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=y+g+a,b=y+m+o,x=Rg(i,i.VERTEX_SHADER,w),M=Rg(i,i.FRAGMENT_SHADER,b);i.attachShader(_,x),i.attachShader(_,M),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(P){if(r.debug.checkShaderErrors){const C=i.getProgramInfoLog(_)||"",N=i.getShaderInfoLog(x)||"",I=i.getShaderInfoLog(M)||"",F=C.trim(),z=N.trim(),B=I.trim();let $=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,x,M);else{const L=Pg(i,x,"vertex"),j=Pg(i,M,"fragment");Qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+L+`
`+j)}else F!==""?We("WebGLProgram: Program Info Log:",F):(z===""||B==="")&&(W=!1);W&&(P.diagnostics={runnable:$,programLog:F,vertexShader:{log:z,prefix:g},fragmentShader:{log:B,prefix:m}})}i.deleteShader(x),i.deleteShader(M),v=new Jc(i,_),T=W1(i,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(_,N1)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=M,this}let aA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lA(e),t.set(e,n)),n}}class lA{constructor(e){this.id=aA++,this.code=e,this.usedTimes=0}}function cA(r){return r===Vs||r===hh||r===uh}function hA(r,e,t,n,i,s){const a=new H_,o=new oA,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,A,P,C,N){const I=P.fog,F=C.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,$=e.get(v.envMap||z,B),W=$&&$.mapping===wh?$.image.height:null,L=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=j!==void 0?j.length:0;let me=0;F.morphAttributes.position!==void 0&&(me=1),F.morphAttributes.normal!==void 0&&(me=2),F.morphAttributes.color!==void 0&&(me=3);let Ne,qe,Ze,J;if(L){const Ke=er[L];Ne=Ke.vertexShader,qe=Ke.fragmentShader}else{Ne=v.vertexShader,qe=v.fragmentShader;const Ke=o.getVertexShaderStage(v),le=o.getFragmentShaderStage(v);o.update(v,Ke,le),Ze=Ke.id,J=le.id}const te=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Xe=C.isInstancedMesh===!0,xe=C.isBatchedMesh===!0,De=!!v.map,Fe=!!v.matcap,Q=!!$,re=!!v.aoMap,oe=!!v.lightMap,O=!!v.bumpMap&&v.wireframe===!1,pe=!!v.normalMap,Ge=!!v.displacementMap,Ue=!!v.emissiveMap,Re=!!v.metalnessMap,je=!!v.roughnessMap,k=v.anisotropy>0,ct=v.clearcoat>0,Ye=v.dispersion>0,D=v.retroreflectivity>0,S=v.iridescence>0,H=v.sheen>0,q=v.transmission>0,Z=k&&!!v.anisotropyMap,ge=ct&&!!v.clearcoatMap,ce=ct&&!!v.clearcoatNormalMap,ee=ct&&!!v.clearcoatRoughnessMap,ie=S&&!!v.iridescenceMap,ye=S&&!!v.iridescenceThicknessMap,Ie=H&&!!v.sheenColorMap,Se=H&&!!v.sheenRoughnessMap,ve=!!v.specularMap,de=!!v.specularColorMap,Ve=!!v.specularIntensityMap,$e=q&&!!v.transmissionMap,G=q&&!!v.thicknessMap,be=!!v.gradientMap,ne=!!v.alphaMap,Me=v.alphaTest>0,we=!!v.alphaHash,se=!!v.extensions;let ue=cr;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ue=r.toneMapping);const ae={shaderID:L,shaderType:v.type,shaderName:v.name,vertexShader:Ne,fragmentShader:qe,defines:v.defines,customVertexShaderID:Ze,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:xe,batchingColor:xe&&C._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&C.instanceColor!==null,instancingMorph:Xe&&C.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:De,matcap:Fe,envMap:Q,envMapMode:Q&&$.mapping,envMapCubeUVHeight:W,aoMap:re,lightMap:oe,bumpMap:O,normalMap:pe,displacementMap:Ge,emissiveMap:Ue,normalMapObjectSpace:pe&&v.normalMapType===uy,normalMapTangentSpace:pe&&v.normalMapType===$f,packedNormalMap:pe&&v.normalMapType===$f&&cA(v.normalMap.format),metalnessMap:Re,roughnessMap:je,anisotropy:k,anisotropyMap:Z,clearcoat:ct,clearcoatMap:ge,clearcoatNormalMap:ce,clearcoatRoughnessMap:ee,dispersion:Ye,retroreflection:D,iridescence:S,iridescenceMap:ie,iridescenceThicknessMap:ye,sheen:H,sheenColorMap:Ie,sheenRoughnessMap:Se,specularMap:ve,specularColorMap:de,specularIntensityMap:Ve,transmission:q,transmissionMap:$e,thicknessMap:G,gradientMap:be,opaque:v.transparent===!1&&v.blending===Qo&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:Me,alphaHash:we,combine:v.combine,mapUv:De&&p(v.map.channel),aoMapUv:re&&p(v.aoMap.channel),lightMapUv:oe&&p(v.lightMap.channel),bumpMapUv:O&&p(v.bumpMap.channel),normalMapUv:pe&&p(v.normalMap.channel),displacementMapUv:Ge&&p(v.displacementMap.channel),emissiveMapUv:Ue&&p(v.emissiveMap.channel),metalnessMapUv:Re&&p(v.metalnessMap.channel),roughnessMapUv:je&&p(v.roughnessMap.channel),anisotropyMapUv:Z&&p(v.anisotropyMap.channel),clearcoatMapUv:ge&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&p(v.sheenRoughnessMap.channel),specularMapUv:ve&&p(v.specularMap.channel),specularColorMapUv:de&&p(v.specularColorMap.channel),specularIntensityMapUv:Ve&&p(v.specularIntensityMap.channel),transmissionMapUv:$e&&p(v.transmissionMap.channel),thicknessMapUv:G&&p(v.thicknessMap.channel),alphaMapUv:ne&&p(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pe||k),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!F.attributes.uv&&(De||ne),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&pe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:me,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:De&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:Ue&&v.emissiveMap.isVideoTexture===!0&&dt.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vi,flipSided:v.side===ri,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function g(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)T.push(A),T.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(m(T,v),y(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function w(v){const T=d[v.type];let A;if(T){const P=er[T];A=Cl.clone(P.uniforms)}else A=v.uniforms;return A}function b(v,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new sA(r,T,v,i),c.push(A),h.set(T,A)),A}function x(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:w,acquireProgram:b,releaseProgram:x,releaseShaderCache:M,programs:c,dispose:E}}function uA(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function fA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Fg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ug(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,p,_,g,m){let y=r[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},r[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=a(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=g,y.group=m),e++,y}function l(f,d,p,_,g,m,y){y.reversedDepth===!0&&(g=-g);const w=o(f,d,p,_,g,m);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):t.push(w)}function c(f,d,p,_,g,m){const y=o(f,d,p,_,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):t.unshift(y)}function h(f,d){t.length>1&&t.sort(f||fA),n.length>1&&n.sort(d||Fg),i.length>1&&i.sort(d||Fg)}function u(){for(let f=e,d=r.length;f<d;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:u,sort:h}}function dA(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ug,r.set(n,[a])):i>=s.length?(a=new Ug,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function pA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new ke};break;case"SpotLight":t={position:new U,direction:new U,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function mA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let gA=0;function _A(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bA(r){const e=new pA,t=mA(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new it,a=new it;function o(c){let h=0,u=0,f=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,y=0,w=0,b=0,x=0,M=0,E=0,v=0,T=0,A=0;c.sort(_A);for(let C=0,N=c.length;C<N;C++){const I=c[C],F=I.color,z=I.intensity,B=I.distance;let $=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Vs?$=I.shadow.map.texture:$=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=F.r*z,u+=F.g*z,f+=F.b*z;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],z);A++}else if(I.isSunLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const L=I.shadow,j=t.get(I);j.shadowIntensity=L.intensity,j.shadowBias=L.bias,j.shadowNormalBias=L.normalBias,j.shadowRadius=L.radius,j.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=$;const fe=L.getViewportCount();for(let me=0;me<fe;me++)n.sunShadowMatrix[_+me]=L.getMatrix(me),n.sunShadowCascade[_+me]=L._cascadeData[me];_+=fe,p++}n.sun[d]=W,d++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const L=I.shadow,j=t.get(I);j.shadowIntensity=L.intensity,j.shadowBias=L.bias,j.shadowNormalBias=L.normalBias,j.shadowRadius=L.radius,j.shadowMapSize=L.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=I.shadow.matrix,x++}n.directional[g]=W,g++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(F).multiplyScalar(z),W.distance=B,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[y]=W;const L=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,L.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[y]=L.matrix,I.castShadow){const j=t.get(I);j.shadowIntensity=L.intensity,j.shadowBias=L.bias,j.shadowNormalBias=L.normalBias,j.shadowRadius=L.radius,j.shadowMapSize=L.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=$,E++}y++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(F).multiplyScalar(z),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=W,w++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const L=I.shadow,j=t.get(I);j.shadowIntensity=L.intensity,j.shadowBias=L.bias,j.shadowNormalBias=L.normalBias,j.shadowRadius=L.radius,j.shadowMapSize=L.mapSize,j.shadowCameraNear=L.camera.near,j.shadowCameraFar=L.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=I.shadow.matrix,M++}n.point[m]=W,m++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(z),W.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[b]=W,b++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==b||P.numSunShadows!==p||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==E||P.numSpotMaps!==v||P.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=g,n.spot.length=y,n.rectArea.length=w,n.point.length=m,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.directionalShadowMatrix.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.sunLength=d,P.directionalLength=g,P.pointLength=m,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=b,P.numSunShadows=p,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=E,P.numSpotMaps=v,P.numLightProbes=A,n.version=gA++)}function l(c,h){let u=0,f=0,d=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const b=c[y];if(b.isSunLight){const x=n.sun[u];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),u++}else if(b.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Og(r){const e=new bA(r),t=[],n=[],i=[];function s(f){u.camera=f,t.length=0,n.length=0,i.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){i.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function vA(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Og(r),e.set(i,[o])):s>=a.length?(o=new Og(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,SA=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],MA=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],kg=new it,So=new U,Du=new U;function TA(r,e,t){let n=new np;const i=new he,s=new he,a=new Et,o=new iM,l=new rM,c={},h=t.maxTextureSize,u={[hs]:ri,[ri]:hs,[Vi]:Vi},f=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:xA,fragmentShader:yA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new pn;p.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new It(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let m=this.type;this.render=function(M,E,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===zx&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zo);const T=r.getRenderTarget(),A=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),C=r.state;C.setBlending(lr),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const N=m!==this.type;N&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=M.length;I<F;I++){const z=M[I],B=z.shadow;if(B===void 0){We("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const $=B.getFrameExtents();i.multiply($),s.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,B.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,B.mapSize.y=s.y));const W=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||N===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Fo){if(z.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Un(i.x,i.y,{format:Vs,type:yn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new wl(i.x,i.y,Qn),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=Ir,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=hn,B.map.depthTexture.magFilter=hn}else z.isPointLight?(B.map=new vb(i.x),B.map.depthTexture=new xS(i.x,fr)):(B.map=new Un(i.x,i.y),B.map.depthTexture=new wl(i.x,i.y,fr)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=Ir,this.type===Zo?(B.map.depthTexture.compareFunction=W?$d:jd,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=hn,B.map.depthTexture.magFilter=hn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);const L=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();z.isPointLight!==!0&&B.updateMatrices(z,v);for(let j=0;j<L;j++){const fe=B.getCamera(j);if(z.isPointLight){const me=B.camera,Ne=B.matrix,qe=z.distance||me.far;qe!==me.far&&(me.far=qe,me.updateProjectionMatrix()),So.setFromMatrixPosition(z.matrixWorld),me.position.copy(So),Du.copy(me.position),Du.add(SA[j]),me.up.copy(MA[j]),me.lookAt(Du),me.updateMatrixWorld(),Ne.makeTranslation(-So.x,-So.y,-So.z),kg.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),B._frustum.setFromProjectionMatrix(kg,me.coordinateSystem,me.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,j),r.clear();else{j===0&&(r.setRenderTarget(B.map),r.clear());const me=B.getViewport(j);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),C.viewport(a)}n=B.getFrustum(j),b(E,v,fe,z,this.type)}B.isPointLightShadow!==!0&&this.type===Fo&&y(B,v),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(T,A,P)};function y(M,E){const v=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Un(i.x,i.y,{format:Vs,type:yn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(E,null,v,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(E,null,v,d,_,null)}function w(M,E,v,T){let A=null;const P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)A=P;else if(A=v.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const C=A.uuid,N=E.uuid;let I=c[C];I===void 0&&(I={},c[C]=I);let F=I[N];F===void 0&&(F=A.clone(),I[N]=F,E.addEventListener("dispose",x)),A=F}if(A.visible=E.visible,A.wireframe=E.wireframe,T===Fo?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:u[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const C=r.properties.get(A);C.light=v}return A}function b(M,E,v,T,A){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===Fo)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);const N=e.update(M),I=M.material;if(Array.isArray(I)){const F=N.groups;for(let z=0,B=F.length;z<B;z++){const $=F[z],W=I[$.materialIndex];if(W&&W.visible){const L=w(M,W,T,A);M.onBeforeShadow(r,M,E,v,N,L,$),r.renderBufferDirect(v,null,N,L,M,$),M.onAfterShadow(r,M,E,v,N,L,$)}}}else if(I.visible){const F=w(M,I,T,A);M.onBeforeShadow(r,M,E,v,N,F,null),r.renderBufferDirect(v,null,N,F,M,null),M.onAfterShadow(r,M,E,v,N,F,null)}}const C=M.children;for(let N=0,I=C.length;N<I;N++)b(C[N],E,v,T,A)}function x(M){M.target.removeEventListener("dispose",x);for(const v in c){const T=c[v],A=M.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function wA(r,e){function t(){let G=!1;const be=new Et;let ne=null;const Me=new Et(0,0,0,0);return{setMask:function(we){ne!==we&&!G&&(r.colorMask(we,we,we,we),ne=we)},setLocked:function(we){G=we},setClear:function(we,se,ue,ae,Ke){Ke===!0&&(we*=ae,se*=ae,ue*=ae),be.set(we,se,ue,ae),Me.equals(be)===!1&&(r.clearColor(we,se,ue,ae),Me.copy(be))},reset:function(){G=!1,ne=null,Me.set(-1,0,0,0)}}}function n(){let G=!1,be=!1,ne=null,Me=null,we=null;return{setReversed:function(se){if(be!==se){const ue=e.get("EXT_clip_control");se?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),be=se;const ae=we;we=null,this.setClear(ae)}},getReversed:function(){return be},setTest:function(se){se?te(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(se){ne!==se&&!G&&(r.depthMask(se),ne=se)},setFunc:function(se){if(be&&(se=My[se]),Me!==se){switch(se){case df:r.depthFunc(r.NEVER);break;case pf:r.depthFunc(r.ALWAYS);break;case mf:r.depthFunc(r.LESS);break;case gl:r.depthFunc(r.LEQUAL);break;case gf:r.depthFunc(r.EQUAL);break;case _f:r.depthFunc(r.GEQUAL);break;case bf:r.depthFunc(r.GREATER);break;case vf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=se}},setLocked:function(se){G=se},setClear:function(se){we!==se&&(we=se,be&&(se=1-se),r.clearDepth(se))},reset:function(){G=!1,ne=null,Me=null,we=null,be=!1}}}function i(){let G=!1,be=null,ne=null,Me=null,we=null,se=null,ue=null,ae=null,Ke=null;return{setTest:function(le){G||(le?te(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(le){be!==le&&!G&&(r.stencilMask(le),be=le)},setFunc:function(le,Je,Oe){(ne!==le||Me!==Je||we!==Oe)&&(r.stencilFunc(le,Je,Oe),ne=le,Me=Je,we=Oe)},setOp:function(le,Je,Oe){(se!==le||ue!==Je||ae!==Oe)&&(r.stencilOp(le,Je,Oe),se=le,ue=Je,ae=Oe)},setLocked:function(le){G=le},setClear:function(le){Ke!==le&&(r.clearStencil(le),Ke=le)},reset:function(){G=!1,be=null,ne=null,Me=null,we=null,se=null,ue=null,ae=null,Ke=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f={},d=new WeakMap,p=[],_=null,g=!1,m=null,y=null,w=null,b=null,x=null,M=null,E=null,v=new ke(0,0,0),T=0,A=!1,P=null,C=null,N=null,I=null,F=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=$>=2);let L=null,j={};const fe=r.getParameter(r.SCISSOR_BOX),me=r.getParameter(r.VIEWPORT),Ne=new Et().fromArray(fe),qe=new Et().fromArray(me);function Ze(G,be,ne,Me){const we=new Uint8Array(4),se=r.createTexture();r.bindTexture(G,se),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ue=0;ue<ne;ue++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,Me,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(be+ue,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return se}const J={};J[r.TEXTURE_2D]=Ze(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(gl),O(!1),pe(gm),te(r.CULL_FACE),re(lr);function te(G){h[G]!==!0&&(r.enable(G),h[G]=!0)}function _e(G){h[G]!==!1&&(r.disable(G),h[G]=!1)}function Xe(G,be){return f[G]!==be?(r.bindFramebuffer(G,be),f[G]=be,G===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=be),G===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=be),!0):!1}function xe(G,be){let ne=p,Me=!1;if(G){ne=d.get(be),ne===void 0&&(ne=[],d.set(be,ne));const we=G.textures;if(ne.length!==we.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let se=0,ue=we.length;se<ue;se++)ne[se]=r.COLOR_ATTACHMENT0+se;ne.length=we.length,Me=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,Me=!0);Me&&r.drawBuffers(ne)}function De(G){return _!==G?(r.useProgram(G),_=G,!0):!1}const Fe={[Ma]:r.FUNC_ADD,[Vx]:r.FUNC_SUBTRACT,[Hx]:r.FUNC_REVERSE_SUBTRACT};Fe[Wx]=r.MIN,Fe[qx]=r.MAX;const Q={[Xx]:r.ZERO,[Kx]:r.ONE,[Yx]:r.SRC_COLOR,[R_]:r.SRC_ALPHA,[ey]:r.SRC_ALPHA_SATURATE,[Zx]:r.DST_COLOR,[jx]:r.DST_ALPHA,[Jx]:r.ONE_MINUS_SRC_COLOR,[C_]:r.ONE_MINUS_SRC_ALPHA,[Qx]:r.ONE_MINUS_DST_COLOR,[$x]:r.ONE_MINUS_DST_ALPHA,[ty]:r.CONSTANT_COLOR,[ny]:r.ONE_MINUS_CONSTANT_COLOR,[iy]:r.CONSTANT_ALPHA,[ry]:r.ONE_MINUS_CONSTANT_ALPHA};function re(G,be,ne,Me,we,se,ue,ae,Ke,le){if(G===lr){g===!0&&(_e(r.BLEND),g=!1);return}if(g===!1&&(te(r.BLEND),g=!0),G!==Gx){if(G!==m||le!==A){if((y!==Ma||x!==Ma)&&(r.blendEquation(r.FUNC_ADD),y=Ma,x=Ma),le)switch(G){case Qo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dr:r.blendFunc(r.ONE,r.ONE);break;case _m:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Qe("WebGLState: Invalid blending: ",G);break}else switch(G){case Qo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case _m:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bm:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",G);break}w=null,b=null,M=null,E=null,v.set(0,0,0),T=0,m=G,A=le}return}we=we||be,se=se||ne,ue=ue||Me,(be!==y||we!==x)&&(r.blendEquationSeparate(Fe[be],Fe[we]),y=be,x=we),(ne!==w||Me!==b||se!==M||ue!==E)&&(r.blendFuncSeparate(Q[ne],Q[Me],Q[se],Q[ue]),w=ne,b=Me,M=se,E=ue),(ae.equals(v)===!1||Ke!==T)&&(r.blendColor(ae.r,ae.g,ae.b,Ke),v.copy(ae),T=Ke),m=G,A=!1}function oe(G,be){G.side===Vi?_e(r.CULL_FACE):te(r.CULL_FACE);let ne=G.side===ri;be&&(ne=!ne),O(ne),G.blending===Qo&&G.transparent===!1?re(lr):re(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);const Me=G.stencilWrite;o.setTest(Me),Me&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ue(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function O(G){P!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),P=G)}function pe(G){G!==kx?(te(r.CULL_FACE),G!==C&&(G===gm?r.cullFace(r.BACK):G===Bx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),C=G}function Ge(G){G!==N&&(B&&r.lineWidth(G),N=G)}function Ue(G,be,ne){G?(te(r.POLYGON_OFFSET_FILL),(I!==be||F!==ne)&&(I=be,F=ne,a.getReversed()&&(be=-be),r.polygonOffset(be,ne))):_e(r.POLYGON_OFFSET_FILL)}function Re(G){G?te(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function je(G){G===void 0&&(G=r.TEXTURE0+z-1),L!==G&&(r.activeTexture(G),L=G)}function k(G,be,ne){ne===void 0&&(L===null?ne=r.TEXTURE0+z-1:ne=L);let Me=j[ne];Me===void 0&&(Me={type:void 0,texture:void 0},j[ne]=Me),(Me.type!==G||Me.texture!==be)&&(L!==ne&&(r.activeTexture(ne),L=ne),r.bindTexture(G,be||J[G]),Me.type=G,Me.texture=be)}function ct(){const G=j[L];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ye(){try{r.compressedTexImage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function S(){try{r.texSubImage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function H(){try{r.texSubImage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function Z(){try{r.compressedTexSubImage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function ge(){try{r.texStorage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function ce(){try{r.texStorage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function ee(){try{r.texImage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function ie(){try{r.texImage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function ye(G){return u[G]!==void 0?u[G]:r.getParameter(G)}function Ie(G,be){u[G]!==be&&(r.pixelStorei(G,be),u[G]=be)}function Se(G){Ne.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function ve(G){qe.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),qe.copy(G))}function de(G,be){let ne=c.get(be);ne===void 0&&(ne=new WeakMap,c.set(be,ne));let Me=ne.get(G);Me===void 0&&(Me=r.getUniformBlockIndex(be,G.name),ne.set(G,Me))}function Ve(G,be){const Me=c.get(be).get(G);l.get(be)!==Me&&(r.uniformBlockBinding(be,Me,G.__bindingPointIndex),l.set(be,Me))}function $e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},L=null,j={},f={},d=new WeakMap,p=[],_=null,g=!1,m=null,y=null,w=null,b=null,x=null,M=null,E=null,v=new ke(0,0,0),T=0,A=!1,P=null,C=null,N=null,I=null,F=null,Ne.set(0,0,r.canvas.width,r.canvas.height),qe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:_e,bindFramebuffer:Xe,drawBuffers:xe,useProgram:De,setBlending:re,setMaterial:oe,setFlipSided:O,setCullFace:pe,setLineWidth:Ge,setPolygonOffset:Ue,setScissorTest:Re,activeTexture:je,bindTexture:k,unbindTexture:ct,compressedTexImage2D:Ye,compressedTexImage3D:D,texImage2D:ee,texImage3D:ie,pixelStorei:Ie,getParameter:ye,updateUBOMapping:de,uniformBlockBinding:Ve,texStorage2D:ge,texStorage3D:ce,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:Z,scissor:Se,viewport:ve,reset:$e}}function EA(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u=new Set;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,S){return p?new OffscreenCanvas(D,S):Sl("canvas")}function g(D,S,H){let q=1;const Z=Ye(D);if((Z.width>H||Z.height>H)&&(q=H/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ge=Math.floor(q*Z.width),ce=Math.floor(q*Z.height);f===void 0&&(f=_(ge,ce));const ee=S?_(ge,ce):f;return ee.width=ge,ee.height=ce,ee.getContext("2d").drawImage(D,0,0,ge,ce),We("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ge+"x"+ce+")."),ee}else return"data"in D&&We("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),D;return D}function m(D){return D.generateMipmaps}function y(D){r.generateMipmap(D)}function w(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(D,S,H,q,Z,ge=!1){if(D!==null){if(r[D]!==void 0)return r[D];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce;q&&(ce=e.get("EXT_texture_norm16"),ce||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=S;if(S===r.RED&&(H===r.FLOAT&&(ee=r.R32F),H===r.HALF_FLOAT&&(ee=r.R16F),H===r.UNSIGNED_BYTE&&(ee=r.R8),H===r.UNSIGNED_SHORT&&ce&&(ee=ce.R16_EXT),H===r.SHORT&&ce&&(ee=ce.R16_SNORM_EXT)),S===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(ee=r.R8UI),H===r.UNSIGNED_SHORT&&(ee=r.R16UI),H===r.UNSIGNED_INT&&(ee=r.R32UI),H===r.BYTE&&(ee=r.R8I),H===r.SHORT&&(ee=r.R16I),H===r.INT&&(ee=r.R32I)),S===r.RG&&(H===r.FLOAT&&(ee=r.RG32F),H===r.HALF_FLOAT&&(ee=r.RG16F),H===r.UNSIGNED_BYTE&&(ee=r.RG8),H===r.UNSIGNED_SHORT&&ce&&(ee=ce.RG16_EXT),H===r.SHORT&&ce&&(ee=ce.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(ee=r.RG8UI),H===r.UNSIGNED_SHORT&&(ee=r.RG16UI),H===r.UNSIGNED_INT&&(ee=r.RG32UI),H===r.BYTE&&(ee=r.RG8I),H===r.SHORT&&(ee=r.RG16I),H===r.INT&&(ee=r.RG32I)),S===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(ee=r.RGB8UI),H===r.UNSIGNED_SHORT&&(ee=r.RGB16UI),H===r.UNSIGNED_INT&&(ee=r.RGB32UI),H===r.BYTE&&(ee=r.RGB8I),H===r.SHORT&&(ee=r.RGB16I),H===r.INT&&(ee=r.RGB32I)),S===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(ee=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(ee=r.RGBA16UI),H===r.UNSIGNED_INT&&(ee=r.RGBA32UI),H===r.BYTE&&(ee=r.RGBA8I),H===r.SHORT&&(ee=r.RGBA16I),H===r.INT&&(ee=r.RGBA32I)),S===r.RGB&&(H===r.UNSIGNED_SHORT&&ce&&(ee=ce.RGB16_EXT),H===r.SHORT&&ce&&(ee=ce.RGB16_SNORM_EXT),H===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(ee=r.R11F_G11F_B10F)),S===r.RGBA){const ie=ge?fh:dt.getTransfer(Z);H===r.FLOAT&&(ee=r.RGBA32F),H===r.HALF_FLOAT&&(ee=r.RGBA16F),H===r.UNSIGNED_BYTE&&(ee=ie===xt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT&&ce&&(ee=ce.RGBA16_EXT),H===r.SHORT&&ce&&(ee=ce.RGBA16_SNORM_EXT),H===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(D,S){let H;return D?S===null||S===fr||S===bl?H=r.DEPTH24_STENCIL8:S===Qn?H=r.DEPTH32F_STENCIL8:S===_l&&(H=r.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fr||S===bl?H=r.DEPTH_COMPONENT24:S===Qn?H=r.DEPTH_COMPONENT32F:S===_l&&(H=r.DEPTH_COMPONENT16),H}function M(D,S){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==hn&&D.minFilter!==zt?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function E(D){const S=D.target;S.removeEventListener("dispose",E),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function v(D){const S=D.target;S.removeEventListener("dispose",v),P(S)}function T(D){const S=n.get(D);if(S.__webglInit===void 0)return;const H=D.source,q=d.get(H);if(q){const Z=q[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(D),Object.keys(q).length===0&&d.delete(H)}n.remove(D)}function A(D){const S=n.get(D);r.deleteTexture(S.__webglTexture);const H=D.source,q=d.get(H);delete q[S.__cacheKey],a.memory.textures--}function P(D){const S=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Z=0;Z<S.__webglFramebuffer[q].length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[q][Z]);else r.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)r.deleteFramebuffer(S.__webglFramebuffer[q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=D.textures;for(let q=0,Z=H.length;q<Z;q++){const ge=n.get(H[q]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(H[q])}n.remove(D)}let C=0;function N(){C=0}function I(){return C}function F(D){C=D}function z(){const D=C;return D>=i.maxTextures&&We("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),C+=1,D}function B(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function $(D,S){const H=n.get(D);if(D.isVideoTexture&&k(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){const q=D.image;if(q===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(H,D,S);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+S)}function W(D,S){const H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){_e(H,D,S);return}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+S)}function L(D,S){const H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){_e(H,D,S);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+S)}function j(D,S){const H=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&H.__version!==D.version){Xe(H,D,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+S)}const fe={[Gs]:r.REPEAT,[Ii]:r.CLAMP_TO_EDGE,[ch]:r.MIRRORED_REPEAT},me={[hn]:r.NEAREST,[D_]:r.NEAREST_MIPMAP_NEAREST,[Uo]:r.NEAREST_MIPMAP_LINEAR,[zt]:r.LINEAR,[Hc]:r.LINEAR_MIPMAP_NEAREST,[rr]:r.LINEAR_MIPMAP_LINEAR},Ne={[dy]:r.NEVER,[by]:r.ALWAYS,[py]:r.LESS,[jd]:r.LEQUAL,[my]:r.EQUAL,[$d]:r.GEQUAL,[gy]:r.GREATER,[_y]:r.NOTEQUAL};function qe(D,S){if(S.type===Qn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===zt||S.magFilter===Hc||S.magFilter===Uo||S.magFilter===rr||S.minFilter===zt||S.minFilter===Hc||S.minFilter===Uo||S.minFilter===rr)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,fe[S.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,fe[S.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,fe[S.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,me[S.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,me[S.minFilter]),S.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Ne[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==Uo&&S.minFilter!==rr||S.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ze(D,S){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",E));const q=S.source;let Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));const ge=B(S);if(ge!==D.__cacheKey){Z[ge]===void 0&&(Z[ge]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[ge].usedTimes++;const ce=Z[D.__cacheKey];ce!==void 0&&(Z[D.__cacheKey].usedTimes--,ce.usedTimes===0&&A(S)),D.__cacheKey=ge,D.__webglTexture=Z[ge].texture}return H}function J(D,S,H){return Math.floor(Math.floor(D/H)/S)}function te(D,S,H,q){const ge=D.updateRanges;if(ge.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,H,q,S.data);else{ge.sort((Ie,Se)=>Ie.start-Se.start);let ce=0;for(let Ie=1;Ie<ge.length;Ie++){const Se=ge[ce],ve=ge[Ie],de=Se.start+Se.count,Ve=J(ve.start,S.width,4),$e=J(Se.start,S.width,4);ve.start<=de+1&&Ve===$e&&J(ve.start+ve.count-1,S.width,4)===Ve?Se.count=Math.max(Se.count,ve.start+ve.count-Se.start):(++ce,ge[ce]=ve)}ge.length=ce+1;const ee=t.getParameter(r.UNPACK_ROW_LENGTH),ie=t.getParameter(r.UNPACK_SKIP_PIXELS),ye=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let Ie=0,Se=ge.length;Ie<Se;Ie++){const ve=ge[Ie],de=Math.floor(ve.start/4),Ve=Math.ceil(ve.count/4),$e=de%S.width,G=Math.floor(de/S.width),be=Ve,ne=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(r.UNPACK_SKIP_ROWS,G),t.texSubImage2D(r.TEXTURE_2D,0,$e,G,be,ne,H,q,S.data)}D.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ee),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(r.UNPACK_SKIP_ROWS,ye)}}function _e(D,S,H){let q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=r.TEXTURE_3D);const Z=Ze(D,S),ge=S.source;t.bindTexture(q,D.__webglTexture,r.TEXTURE0+H);const ce=n.get(ge);if(ge.version!==ce.__version||Z===!0){if(t.activeTexture(r.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ne=dt.getPrimaries(dt.workingColorSpace),Me=S.colorSpace===Jr?null:dt.getPrimaries(S.colorSpace),we=S.colorSpace===Jr||ne===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let ie=g(S.image,!1,i.maxTextureSize);ie=ct(S,ie);const ye=s.convert(S.format,S.colorSpace),Ie=s.convert(S.type);let Se=b(S.internalFormat,ye,Ie,S.normalized,S.colorSpace,S.isVideoTexture);qe(q,S);let ve;const de=S.mipmaps,Ve=S.isVideoTexture!==!0,$e=ce.__version===void 0||Z===!0,G=ge.dataReady,be=M(S,ie);if(S.isDepthTexture)Se=x(S.format===Rs,S.type),$e&&(Ve?t.texStorage2D(r.TEXTURE_2D,1,Se,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Se,ie.width,ie.height,0,ye,Ie,null));else if(S.isDataTexture)if(de.length>0){Ve&&$e&&t.texStorage2D(r.TEXTURE_2D,be,Se,de[0].width,de[0].height);for(let ne=0,Me=de.length;ne<Me;ne++)ve=de[ne],Ve?G&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ve.width,ve.height,ye,Ie,ve.data):t.texImage2D(r.TEXTURE_2D,ne,Se,ve.width,ve.height,0,ye,Ie,ve.data);S.generateMipmaps=!1}else Ve?($e&&t.texStorage2D(r.TEXTURE_2D,be,Se,ie.width,ie.height),G&&te(S,ie,ye,Ie)):t.texImage2D(r.TEXTURE_2D,0,Se,ie.width,ie.height,0,ye,Ie,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&$e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,Se,de[0].width,de[0].height,ie.depth);for(let ne=0,Me=de.length;ne<Me;ne++)if(ve=de[ne],S.format!==Ni)if(ye!==null)if(Ve){if(G)if(S.layerUpdates.size>0){const we=_g(ve.width,ve.height,S.format,S.type);for(const se of S.layerUpdates){const ue=ve.data.subarray(se*we/ve.data.BYTES_PER_ELEMENT,(se+1)*we/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,se,ve.width,ve.height,1,ye,ue)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ve.width,ve.height,ie.depth,ye,ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Se,ve.width,ve.height,ie.depth,0,ve.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ve.width,ve.height,ie.depth,ye,Ie,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Se,ve.width,ve.height,ie.depth,0,ye,Ie,ve.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ve&&$e&&t.texStorage2D(r.TEXTURE_2D,be,Se,de[0].width,de[0].height);for(let ne=0,Me=de.length;ne<Me;ne++)ve=de[ne],S.format!==Ni?ye!==null?Ve?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Se,ve.width,ve.height,0,ve.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?G&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ve.width,ve.height,ye,Ie,ve.data):t.texImage2D(r.TEXTURE_2D,ne,Se,ve.width,ve.height,0,ye,Ie,ve.data)}else if(S.isDataArrayTexture)if(Ve){if($e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,Se,ie.width,ie.height,ie.depth),G)if(S.layerUpdates.size>0){const ne=_g(ie.width,ie.height,S.format,S.type);for(const Me of S.layerUpdates){const we=ie.data.subarray(Me*ne/ie.data.BYTES_PER_ELEMENT,(Me+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Me,ie.width,ie.height,1,ye,Ie,we)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,Ie,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Se,ie.width,ie.height,ie.depth,0,ye,Ie,ie.data);else if(S.isData3DTexture)Ve?($e&&t.texStorage3D(r.TEXTURE_3D,be,Se,ie.width,ie.height,ie.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,Ie,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Se,ie.width,ie.height,ie.depth,0,ye,Ie,ie.data);else if(S.isFramebufferTexture){if($e)if(Ve)t.texStorage2D(r.TEXTURE_2D,be,Se,ie.width,ie.height);else{let ne=ie.width,Me=ie.height;for(let we=0;we<be;we++)t.texImage2D(r.TEXTURE_2D,we,Se,ne,Me,0,ye,Ie,null),ne>>=1,Me>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){const ne=r.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),u.add(S),ne.onpaint=Me=>{const we=Me.changedElements;for(const se of u)we.includes(se.image)&&(se.needsUpdate=!0)},ne.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ie);else{const we=r.RGBA,se=r.RGBA,ue=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,we,se,ue,ie)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(de.length>0){if(Ve&&$e){const ne=Ye(de[0]);t.texStorage2D(r.TEXTURE_2D,be,Se,ne.width,ne.height)}for(let ne=0,Me=de.length;ne<Me;ne++)ve=de[ne],Ve?G&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ye,Ie,ve):t.texImage2D(r.TEXTURE_2D,ne,Se,ye,Ie,ve);S.generateMipmaps=!1}else if(Ve){if($e){const ne=Ye(ie);t.texStorage2D(r.TEXTURE_2D,be,Se,ne.width,ne.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,Ie,ie)}else t.texImage2D(r.TEXTURE_2D,0,Se,ye,Ie,ie);m(S)&&y(q),ce.__version=ge.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function Xe(D,S,H){if(S.image.length!==6)return;const q=Ze(D,S),Z=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+H);const ge=n.get(Z);if(Z.version!==ge.__version||q===!0){t.activeTexture(r.TEXTURE0+H);const ce=dt.getPrimaries(dt.workingColorSpace),ee=S.colorSpace===Jr?null:dt.getPrimaries(S.colorSpace),ie=S.colorSpace===Jr||ce===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ye=S.isCompressedTexture||S.image[0].isCompressedTexture,Ie=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let se=0;se<6;se++)!ye&&!Ie?Se[se]=g(S.image[se],!0,i.maxCubemapSize):Se[se]=Ie?S.image[se].image:S.image[se],Se[se]=ct(S,Se[se]);const ve=Se[0],de=s.convert(S.format,S.colorSpace),Ve=s.convert(S.type),$e=b(S.internalFormat,de,Ve,S.normalized,S.colorSpace),G=S.isVideoTexture!==!0,be=ge.__version===void 0||q===!0,ne=Z.dataReady;let Me=M(S,ve);qe(r.TEXTURE_CUBE_MAP,S);let we;if(ye){G&&be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,$e,ve.width,ve.height);for(let se=0;se<6;se++){we=Se[se].mipmaps;for(let ue=0;ue<we.length;ue++){const ae=we[ue];S.format!==Ni?de!==null?G?ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,0,0,ae.width,ae.height,de,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,$e,ae.width,ae.height,0,ae.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,0,0,ae.width,ae.height,de,Ve,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,$e,ae.width,ae.height,0,de,Ve,ae.data)}}}else{if(we=S.mipmaps,G&&be){we.length>0&&Me++;const se=Ye(Se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,$e,se.width,se.height)}for(let se=0;se<6;se++)if(Ie){G?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Se[se].width,Se[se].height,de,Ve,Se[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,Se[se].width,Se[se].height,0,de,Ve,Se[se].data);for(let ue=0;ue<we.length;ue++){const Ke=we[ue].image[se].image;G?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,0,0,Ke.width,Ke.height,de,Ve,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,$e,Ke.width,Ke.height,0,de,Ve,Ke.data)}}else{G?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,de,Ve,Se[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,de,Ve,Se[se]);for(let ue=0;ue<we.length;ue++){const ae=we[ue];G?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,0,0,de,Ve,ae.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,$e,de,Ve,ae.image[se])}}}m(S)&&y(r.TEXTURE_CUBE_MAP),ge.__version=Z.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function xe(D,S,H,q,Z,ge){const ce=s.convert(H.format,H.colorSpace),ee=s.convert(H.type),ie=b(H.internalFormat,ce,ee,H.normalized,H.colorSpace),ye=n.get(S),Ie=n.get(H);if(Ie.__renderTarget=S,!ye.__hasExternalTextures){const Se=Math.max(1,S.width>>ge),ve=Math.max(1,S.height>>ge);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,ge,ie,Se,ve,S.depth,0,ce,ee,null):t.texImage2D(Z,ge,ie,Se,ve,0,ce,ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),je(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,Z,Ie.__webglTexture,0,Re(S)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,Z,Ie.__webglTexture,ge),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(D,S,H){if(r.bindRenderbuffer(r.RENDERBUFFER,D),S.depthBuffer){const q=S.depthTexture,Z=q&&q.isDepthTexture?q.type:null,ge=x(S.stencilBuffer,Z),ce=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;je(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re(S),ge,S.width,S.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re(S),ge,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ge,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ce,r.RENDERBUFFER,D)}else{const q=S.textures;for(let Z=0;Z<q.length;Z++){const ge=q[Z],ce=s.convert(ge.format,ge.colorSpace),ee=s.convert(ge.type),ie=b(ge.internalFormat,ce,ee,ge.normalized,ge.colorSpace);je(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re(S),ie,S.width,S.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re(S),ie,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ie,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(D,S,H){const q=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),qe(r.TEXTURE_CUBE_MAP,S.depthTexture);const ye=s.convert(S.depthTexture.format),Ie=s.convert(S.depthTexture.type);let Se;S.depthTexture.format===Ir?Se=r.DEPTH_COMPONENT24:S.depthTexture.format===Rs&&(Se=r.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,S.width,S.height,0,ye,Ie,null)}}else $(S.depthTexture,0);const ge=Z.__webglTexture,ce=Re(S),ee=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+H:r.TEXTURE_2D,ie=S.depthTexture.format===Rs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ir)je(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ee,ge,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,ie,ee,ge,0);else if(S.depthTexture.format===Rs)je(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ee,ge,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,ie,ee,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(D){const S=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const q=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=q}if(D.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)Fe(S.__webglFramebuffer[q],D,q);else{const q=D.texture.mipmaps;q&&q.length>0?Fe(S.__webglFramebuffer[0],D,0):Fe(S.__webglFramebuffer,D,0)}else if(H){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=r.createRenderbuffer(),De(S.__webglDepthbuffer[q],D,!1);else{const Z=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=S.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ge)}}else{const q=D.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),De(S.__webglDepthbuffer,D,!1);else{const Z=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ge)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(D,S,H){const q=n.get(D);S!==void 0&&xe(q.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Q(D)}function oe(D){const S=D.texture,H=n.get(D),q=n.get(S);D.addEventListener("dispose",v);const Z=D.textures,ge=D.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=S.version,a.memory.textures++),ge){H.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ee]=[];for(let ie=0;ie<S.mipmaps.length;ie++)H.__webglFramebuffer[ee][ie]=r.createFramebuffer()}else H.__webglFramebuffer[ee]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)H.__webglFramebuffer[ee]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(ce)for(let ee=0,ie=Z.length;ee<ie;ee++){const ye=n.get(Z[ee]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),a.memory.textures++)}if(D.samples>0&&je(D)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ee=0;ee<Z.length;ee++){const ie=Z[ee];H.__webglColorRenderbuffer[ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[ee]);const ye=s.convert(ie.format,ie.colorSpace),Ie=s.convert(ie.type),Se=b(ie.internalFormat,ye,Ie,ie.normalized,ie.colorSpace,D.isXRRenderTarget===!0),ve=Re(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,Se,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,H.__webglColorRenderbuffer[ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),De(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ge){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),qe(r.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)xe(H.__webglFramebuffer[ee][ie],D,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else xe(H.__webglFramebuffer[ee],D,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(S)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let ee=0,ie=Z.length;ee<ie;ee++){const ye=Z[ee],Ie=n.get(ye);let Se=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Se=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Se,Ie.__webglTexture),qe(Se,ye),xe(H.__webglFramebuffer,D,ye,r.COLOR_ATTACHMENT0+ee,Se,0),m(ye)&&y(Se)}t.unbindTexture()}else{let ee=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ee=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,q.__webglTexture),qe(ee,S),S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)xe(H.__webglFramebuffer[ie],D,S,r.COLOR_ATTACHMENT0,ee,ie);else xe(H.__webglFramebuffer,D,S,r.COLOR_ATTACHMENT0,ee,0);m(S)&&y(ee),t.unbindTexture()}D.depthBuffer&&Q(D)}function O(D){const S=D.textures;for(let H=0,q=S.length;H<q;H++){const Z=S[H];if(m(Z)){const ge=w(D),ce=n.get(Z).__webglTexture;t.bindTexture(ge,ce),y(ge),t.unbindTexture()}}}const pe=[],Ge=[];function Ue(D){if(D.samples>0){if(je(D)===!1){const S=D.textures,H=D.width,q=D.height;let Z=r.COLOR_BUFFER_BIT;const ge=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=n.get(D),ee=S.length>1;if(ee)for(let ye=0;ye<S.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ie=D.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]);const Ie=n.get(S[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ie,0)}r.blitFramebuffer(0,0,H,q,0,0,H,q,Z,r.NEAREST),l===!0&&(pe.length=0,Ge.length=0,pe.push(r.COLOR_ATTACHMENT0+ye),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(pe.push(ge),Ge.push(ge),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ge)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ee)for(let ye=0;ye<S.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]);const Ie=n.get(S[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,Ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){const S=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Re(D){return Math.min(i.maxSamples,D.samples)}function je(D){const S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function k(D){const S=a.render.frame;h.get(D)!==S&&(h.set(D,S),D.update())}function ct(D,S){const H=D.colorSpace,q=D.format,Z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==ai&&H!==Jr&&(dt.getTransfer(H)===xt?(q!==Ni||Z!==mi)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",H)),S}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=L,this.setTextureCube=j,this.rebindTextures=re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function AA(r,e){function t(n,i=Jr){let s;const a=dt.getTransfer(i);if(n===mi)return r.UNSIGNED_BYTE;if(n===Wd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===qd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===F_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===U_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===I_)return r.BYTE;if(n===N_)return r.SHORT;if(n===_l)return r.UNSIGNED_SHORT;if(n===Hd)return r.INT;if(n===fr)return r.UNSIGNED_INT;if(n===Qn)return r.FLOAT;if(n===yn)return r.HALF_FLOAT;if(n===O_)return r.ALPHA;if(n===k_)return r.RGB;if(n===Ni)return r.RGBA;if(n===Ir)return r.DEPTH_COMPONENT;if(n===Rs)return r.DEPTH_STENCIL;if(n===Xd)return r.RED;if(n===Kd)return r.RED_INTEGER;if(n===Vs)return r.RG;if(n===Yd)return r.RG_INTEGER;if(n===Jd)return r.RGBA_INTEGER;if(n===Wc||n===qc||n===Xc||n===Kc)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Wc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Wc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xf||n===yf||n===Sf||n===Mf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tf||n===wf||n===Ef||n===Af||n===Rf||n===hh||n===Cf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Tf||n===wf)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ef)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Af)return s.COMPRESSED_R11_EAC;if(n===Rf)return s.COMPRESSED_SIGNED_R11_EAC;if(n===hh)return s.COMPRESSED_RG11_EAC;if(n===Cf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pf||n===Lf||n===Df||n===If||n===Nf||n===Ff||n===Uf||n===Of||n===kf||n===Bf||n===zf||n===Gf||n===Vf||n===Hf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Df)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===If)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ff)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Of)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wf||n===qf||n===Xf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Wf)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kf||n===Yf||n===uh||n===Jf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Kf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Yf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const RA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new eb(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kt({vertexShader:RA,fragmentShader:CA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LA extends qs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",g=new PA,m={},y=t.getContextAttributes();let w=null,b=null;const x=[],M=[],E=new he;let v=null,T=null;const A=new Yn;A.viewport=new Et;const P=new Yn;P.viewport=new Et;const C=[A,P],N=new RM;let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=x[J];return te===void 0&&(te=new iu,x[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=x[J];return te===void 0&&(te=new iu,x[J]=te),te.getGripSpace()},this.getHand=function(J){let te=x[J];return te===void 0&&(te=new iu,x[J]=te),te.getHandSpace()};function z(J){const te=M.indexOf(J.inputSource);if(te===-1)return;const _e=x[te];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||a),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",$);for(let J=0;J<x.length;J++){const te=M[J];te!==null&&(M[J]=null,x[J].disconnect(te))}I=null,F=null,g.reset();for(const J in m)delete m[J];if(e.setRenderTarget(w),d=null,f=null,u=null,i=null,b=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(E.width,E.height,!1),T!==null){const J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",B),i.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Xe=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?Rs:Ir,Xe=y.stencil?bl:fr);const De={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(De),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Un(f.textureWidth,f.textureHeight,{format:Ni,type:mi,depthTexture:new wl(f.textureWidth,f.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Un(d.framebufferWidth,d.framebufferHeight,{format:Ni,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(J){for(let te=0;te<J.removed.length;te++){const _e=J.removed[te],Xe=M.indexOf(_e);Xe>=0&&(M[Xe]=null,x[Xe].disconnect(_e))}for(let te=0;te<J.added.length;te++){const _e=J.added[te];let Xe=M.indexOf(_e);if(Xe===-1){for(let De=0;De<x.length;De++)if(De>=M.length){M.push(_e),Xe=De;break}else if(M[De]===null){M[De]=_e,Xe=De;break}if(Xe===-1)break}const xe=x[Xe];xe&&xe.connect(_e)}}const W=new U,L=new U;function j(J,te,_e){W.setFromMatrixPosition(te.matrixWorld),L.setFromMatrixPosition(_e.matrixWorld);const Xe=W.distanceTo(L),xe=te.projectionMatrix.elements,De=_e.projectionMatrix.elements,Fe=xe[14]/(xe[10]-1),Q=xe[14]/(xe[10]+1),re=(xe[9]+1)/xe[5],oe=(xe[9]-1)/xe[5],O=(xe[8]-1)/xe[0],pe=(De[8]+1)/De[0],Ge=Fe*O,Ue=Fe*pe,Re=Xe/(-O+pe),je=Re*-O;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(je),J.translateZ(Re),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),xe[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const k=Fe+Re,ct=Q+Re,Ye=Ge-je,D=Ue+(Xe-je),S=re*Q/ct*k,H=oe*Q/ct*k;J.projectionMatrix.makePerspective(Ye,D,S,H,k,ct),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function fe(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let te=J.near,_e=J.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),N.near=P.near=A.near=te,N.far=P.far=A.far=_e,(I!==N.near||F!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,F=N.far),N.layers.mask=J.layers.mask|6,A.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;const Xe=J.parent,xe=N.cameras;fe(N,Xe);for(let De=0;De<xe.length;De++)fe(xe[De],Xe);xe.length===2?j(N,A,P):N.projectionMatrix.copy(A.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),me(J,N,Xe)};function me(J,te,_e){_e===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(J){return m[J]};let Ne=null;function qe(J,te){if(h=te.getViewerPose(c||a),p=te,h!==null){const _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Xe=!1;_e.length!==N.cameras.length&&(N.cameras.length=0,Xe=!0);for(let Q=0;Q<_e.length;Q++){const re=_e[Q];let oe=null;if(d!==null)oe=d.getViewport(re);else{const pe=u.getViewSubImage(f,re);oe=pe.viewport,Q===0&&(e.setRenderTargetTextures(b,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(b))}let O=C[Q];O===void 0&&(O=new Yn,O.layers.enable(Q),O.viewport=new Et,C[Q]=O),O.matrix.fromArray(re.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(re.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(oe.x,oe.y,oe.width,oe.height),Q===0&&(N.matrix.copy(O.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Xe===!0&&N.cameras.push(O)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Q=u.getDepthInformation(_e[0]);Q&&Q.isValid&&Q.texture&&g.init(Q,i.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Q=0;Q<_e.length;Q++){const re=_e[Q].camera;if(re){let oe=m[re];oe||(oe=new eb,m[re]=oe);const O=u.getCameraImage(re);oe.sourceTexture=O}}}}for(let _e=0;_e<x.length;_e++){const Xe=M[_e],xe=x[_e];Xe!==null&&xe!==void 0&&xe.update(Xe,te,c||a)}Ne&&Ne(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}const Ze=new _b;Ze.setAnimationLoop(qe),this.setAnimationLoop=function(J){Ne=J},this.dispose=function(){}}}const DA=new it,Tb=new tt;Tb.set(-1,0,0,0,1,0,0,0,1);function IA(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,hb(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,w,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,b)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ri&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ri&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),w=y.envMap,b=y.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Tb),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ri&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function NA(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const M=x.program;n.uniformBlockBinding(b,M)}function c(b,x){let M=i[b.id];M===void 0&&(g(b),M=h(b),i[b.id]=M,b.addEventListener("dispose",y));const E=x.program;n.updateUBOMapping(b,E);const v=e.render.frame;s[b.id]!==v&&(f(b),s[b.id]=v)}function h(b){const x=u();b.__bindingPointIndex=x;const M=r.createBuffer(),E=b.__size,v=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,E,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=i[b.id],M=b.uniforms,E=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let v=0,T=M.length;v<T;v++){const A=M[v];if(Array.isArray(A))for(let P=0,C=A.length;P<C;P++)d(A[P],v,P,E);else d(A,v,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(b,x,M,E){if(_(b,x,M,E)===!0){const v=b.__offset,T=b.value;if(Array.isArray(T)){let A=0;for(let P=0;P<T.length;P++){const C=T[P],N=m(C);p(C,b.__data,A),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,b.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,b.__data)}}function p(b,x,M){typeof b=="number"||typeof b=="boolean"?x[0]=b:b.isMatrix3?(x[0]=b.elements[0],x[1]=b.elements[1],x[2]=b.elements[2],x[3]=0,x[4]=b.elements[3],x[5]=b.elements[4],x[6]=b.elements[5],x[7]=0,x[8]=b.elements[6],x[9]=b.elements[7],x[10]=b.elements[8],x[11]=0):ArrayBuffer.isView(b)?x.set(new b.constructor(b.buffer,b.byteOffset,x.length)):b.toArray(x,M)}function _(b,x,M,E){const v=b.value,T=x+"_"+M;if(E[T]===void 0)return typeof v=="number"||typeof v=="boolean"?E[T]=v:ArrayBuffer.isView(v)?E[T]=v.slice():E[T]=v.clone(),!0;{const A=E[T];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return E[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function g(b){const x=b.uniforms;let M=0;const E=16;for(let T=0,A=x.length;T<A;T++){const P=Array.isArray(x[T])?x[T]:[x[T]];for(let C=0,N=P.length;C<N;C++){const I=P[C],F=Array.isArray(I.value)?I.value:[I.value];for(let z=0,B=F.length;z<B;z++){const $=F[z],W=m($),L=M%E,j=L%W.boundary,fe=L+j;M+=j,fe!==0&&E-fe<W.storage&&(M+=E-fe),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=W.storage}}}const v=M%E;return v>0&&(M+=E-v),b.__size=M,b.__cache={},this}function m(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(x.boundary=16,x.storage=b.byteLength):We("WebGLRenderer: Unsupported uniform value type.",b),x}function y(b){const x=b.target;x.removeEventListener("dispose",y);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function w(){for(const b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:l,update:c,dispose:w}}const FA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function UA(){return ji===null&&(ji=new Tl(FA,16,16,Vs,yn),ji.name="DFG_LUT",ji.minFilter=zt,ji.magFilter=zt,ji.wrapS=Ii,ji.wrapT=Ii,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class OA{constructor(e={}){const{canvas:t=yy(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=mi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=d,g=new Set([Jd,Yd,Kd]),m=new Set([mi,fr,_l,bl,Wd,qd]),y=new Uint32Array(4),w=new Int32Array(4),b=new U;let x=null,M=null;const E=[],v=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1,C=null,N=null,I=null,F=null;this._outputColorSpace=xn;let z=0,B=0,$=null,W=-1,L=null;const j=new Et,fe=new Et;let me=null;const Ne=new ke(0);let qe=0,Ze=t.width,J=t.height,te=1,_e=null,Xe=null;const xe=new Et(0,0,Ze,J),De=new Et(0,0,Ze,J);let Fe=!1;const Q=new np;let re=!1,oe=!1;const O=new it,pe=new U,Ge=new Et,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function je(){return $===null?te:1}let k=n;function ct(R,V){return t.getContext(R,V)}let Ye,D,S,H,q,Z,ge,ce,ee,ie,ye,Ie,Se,ve,de,Ve,$e,G,be,ne,Me,we,se;try{const R={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ud}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",Je,!1),k===null){const V="webgl2";if(k=ct(V,R),k===null)throw ct(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ue()}catch(R){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),Qe("WebGLRenderer: "+R.message),R}function ue(){Ye=new UE(k),Ye.init(),Me=new AA(k,Ye),D=new EE(k,Ye,e,Me),S=new wA(k,Ye),D.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),N=k.createFramebuffer(),I=k.createFramebuffer(),F=k.createFramebuffer(),H=new BE(k),q=new uA,Z=new EA(k,Ye,S,q,D,Me,H),ge=new FE(A),ce=new GM(k),we=new TE(k,ce),ee=new OE(k,ce,H,we),ie=new GE(k,ee,ce,we,H),G=new zE(k,D,Z),de=new AE(q),ye=new hA(A,ge,Ye,D,we,de),Ie=new IA(A,q),Se=new dA,ve=new vA(Ye),$e=new ME(A,ge,S,ie,p,l),Ve=new TA(A,ie,D),se=new NA(k,H,D,S),be=new wE(k,Ye,H),ne=new kE(k,Ye,H),H.programs=ye.programs,A.capabilities=D,A.extensions=Ye,A.properties=q,A.renderLists=Se,A.shadowMap=Ve,A.state=S,A.info=H}_!==mi&&(T=new HE(_,t.width,t.height,o,i,s));const ae=new LA(A,k);this.xr=ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(R){R!==void 0&&(te=R,this.setSize(Ze,J,!1))},this.getSize=function(R){return R.set(Ze,J)},this.setSize=function(R,V,Y=!0){if(ae.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=R,J=V,t.width=Math.floor(R*te),t.height=Math.floor(V*te),Y===!0&&(t.style.width=R+"px",t.style.height=V+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(Ze*te,J*te).floor()},this.setDrawingBufferSize=function(R,V,Y){Ze=R,J=V,te=Y,t.width=Math.floor(R*Y),t.height=Math.floor(V*Y),this.setViewport(0,0,R,V)},this.setEffects=function(R){if(_===mi){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let V=0;V<R.length;V++)if(R[V].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(j)},this.getViewport=function(R){return R.copy(xe)},this.setViewport=function(R,V,Y,X){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,V,Y,X),S.viewport(j.copy(xe).multiplyScalar(te).round())},this.getScissor=function(R){return R.copy(De)},this.setScissor=function(R,V,Y,X){R.isVector4?De.set(R.x,R.y,R.z,R.w):De.set(R,V,Y,X),S.scissor(fe.copy(De).multiplyScalar(te).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(R){S.setScissorTest(Fe=R)},this.setOpaqueSort=function(R){_e=R},this.setTransparentSort=function(R){Xe=R},this.getClearColor=function(R){return R.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,Y=!0){let X=0;if(R){let K=!1;if($!==null){const Te=$.texture.format;K=g.has(Te)}if(K){const Te=$.texture.type,Pe=m.has(Te),Ae=$e.getClearColor(),Be=$e.getClearAlpha(),He=Ae.r,st=Ae.g,mt=Ae.b;Pe?(y[0]=He,y[1]=st,y[2]=mt,y[3]=Be,k.clearBufferuiv(k.COLOR,0,y)):(w[0]=He,w[1]=st,w[2]=mt,w[3]=Be,k.clearBufferiv(k.COLOR,0,w))}else X|=k.COLOR_BUFFER_BIT}V&&(X|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),C=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),$e.dispose(),Se.dispose(),ve.dispose(),q.dispose(),ge.dispose(),ie.dispose(),we.dispose(),se.dispose(),ye.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ut),ae.removeEventListener("sessionend",At),gt.stop()};function Ke(R){R.preventDefault(),dh("WebGLRenderer: Context Lost."),P=!0}function le(){dh("WebGLRenderer: Context Restored."),P=!1;const R=H.autoReset,V=Ve.enabled,Y=Ve.autoUpdate,X=Ve.needsUpdate,K=Ve.type;ue(),H.autoReset=R,Ve.enabled=V,Ve.autoUpdate=Y,Ve.needsUpdate=X,Ve.type=K}function Je(R){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Oe(R){const V=R.target;V.removeEventListener("dispose",Oe),et(V)}function et(R){Qt(R),q.remove(R)}function Qt(R){const V=q.get(R).programs;V!==void 0&&(V.forEach(function(Y){ye.releaseProgram(Y)}),R.isShaderMaterial&&ye.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,Y,X,K,Te){V===null&&(V=Ue);const Pe=K.isMesh&&K.matrixWorld.determinantAffine()<0,Ae=gn(R,V,Y,X,K);S.setMaterial(X,Pe);let Be=Y.index,He=1;if(X.wireframe===!0){if(Be=ee.getWireframeAttribute(Y),Be===void 0)return;He=2}const st=Y.drawRange,mt=Y.attributes.position;let ze=st.start*He,vt=(st.start+st.count)*He;Te!==null&&(ze=Math.max(ze,Te.start*He),vt=Math.min(vt,(Te.start+Te.count)*He)),Be!==null?(ze=Math.max(ze,0),vt=Math.min(vt,Be.count)):mt!=null&&(ze=Math.max(ze,0),vt=Math.min(vt,mt.count));const tn=vt-ze;if(tn<0||tn===1/0)return;we.setup(K,X,Ae,Y,Be);let Ot,Rt=be;if(Be!==null&&(Ot=ce.get(Be),Rt=ne,Rt.setIndex(Ot)),K.isMesh)X.wireframe===!0?(S.setLineWidth(X.wireframeLinewidth*je()),Rt.setMode(k.LINES)):Rt.setMode(k.TRIANGLES);else if(K.isLine){let Rn=X.linewidth;Rn===void 0&&(Rn=1),S.setLineWidth(Rn*je()),K.isLineSegments?Rt.setMode(k.LINES):K.isLineLoop?Rt.setMode(k.LINE_LOOP):Rt.setMode(k.LINE_STRIP)}else K.isPoints?Rt.setMode(k.POINTS):K.isSprite&&Rt.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))Rt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Rn=K._multiDrawStarts,Ce=K._multiDrawCounts,Bn=K._multiDrawCount,bt=Be?ce.get(Be).bytesPerElement:1,Mi=q.get(X).currentProgram.getUniforms();for(let Yi=0;Yi<Bn;Yi++)Mi.setValue(k,"_gl_DrawID",Yi),Rt.render(Rn[Yi]/bt,Ce[Yi])}else if(K.isInstancedMesh)Rt.renderInstances(ze,tn,K.count);else if(Y.isInstancedBufferGeometry){const Rn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,Rn);Rt.renderInstances(ze,tn,Ce)}else Rt.render(ze,tn)};function ht(R,V,Y,X){C!==null&&R.isNodeMaterial&&C.setObject(X,R),re===!0&&de.setState(R,Y,!1),R.transparent===!0&&R.side===Vi&&R.forceSinglePass===!1?(R.side=ri,R.needsUpdate=!0,qt(R,V,X),R.side=hs,R.needsUpdate=!0,qt(R,V,X),R.side=Vi):qt(R,V,X)}this.compile=function(R,V,Y=null){Y===null&&(Y=R),C!==null&&C.renderStart(R,V,Y),M=ve.get(Y),M.init(V),v.push(M),Y.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(M.pushLight(K),K.castShadow&&M.pushShadow(K))}),R!==Y&&R.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(M.pushLight(K),K.castShadow&&M.pushShadow(K))}),M.setupLights(),C!==null&&C.updateLights(M.state.lightsArray),oe=this.localClippingEnabled,re=de.init(this.clippingPlanes,oe),re===!0&&de.setGlobalState(this.clippingPlanes,V),C!==null&&Ve.render(M.state.shadowsArray,Y,V);const X=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Te=K.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){const Ae=Te[Pe];ht(Ae,Y,V,K),X.add(Ae)}else ht(Te,Y,V,K),X.add(Te)}),M=v.pop(),C!==null&&C.renderEnd(),X},this.compileAsync=function(R,V,Y=null){const X=this.compile(R,V,Y);return new Promise(K=>{function Te(){if(X.forEach(function(Pe){const Be=q.get(Pe).currentProgram;(Be===void 0||Be.isReady())&&X.delete(Pe)}),X.size===0){K(R);return}setTimeout(Te,10)}Ye.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Ft=null;function mn(R){Ft&&Ft(R)}function Ut(){gt.stop()}function At(){gt.start()}const gt=new _b;gt.setAnimationLoop(mn),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(R){Ft=R,ae.setAnimationLoop(R),R===null?gt.stop():gt.start()},ae.addEventListener("sessionstart",Ut),ae.addEventListener("sessionend",At),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;C!==null&&C.renderStart(R,V);const Y=ae.enabled===!0&&ae.isPresenting===!0,X=T!==null&&($===null||Y)&&T.begin(A,$);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(V),V=ae.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,V,$),M=ve.get(R,v.length),M.init(V),M.state.textureUnits=Z.getTextureUnits(),v.push(M),O.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Q.setFromProjectionMatrix(O,sr,V.reversedDepth),oe=this.localClippingEnabled,re=de.init(this.clippingPlanes,oe),x=Se.get(R,E.length),x.init(),E.push(x),ae.enabled===!0&&ae.isPresenting===!0){const Pe=A.xr.getDepthSensingMesh();Pe!==null&&On(Pe,V,-1/0,A.sortObjects)}On(R,V,0,A.sortObjects),x.finish(),C!==null&&C.updateLights(M.state.lightsArray),A.sortObjects===!0&&x.sort(_e,Xe),Re=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Re&&$e.addToRenderList(x,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&de.beginShadows();const K=M.state.shadowsArray;if(Ve.render(K,R,V),re===!0&&de.endShadows(),(X&&T.hasRenderPass())===!1){const Pe=x.opaque,Ae=x.transmissive;if(M.setupLights(),V.isArrayCamera){const Be=V.cameras;if(Ae.length>0)for(let He=0,st=Be.length;He<st;He++){const mt=Be[He];An(Pe,Ae,R,mt)}Re&&$e.render(R);for(let He=0,st=Be.length;He<st;He++){const mt=Be[He];Lt(x,R,mt,mt.viewport)}}else Ae.length>0&&An(Pe,Ae,R,V),Re&&$e.render(R),Lt(x,R,V)}$!==null&&B===0&&(Z.updateMultisampleRenderTarget($),Z.updateRenderTargetMipmap($)),X&&T.end(A),R.isScene===!0&&R.onAfterRender(A,R,V),we.resetDefaultState(),W=-1,L=null,v.pop(),v.length>0?(M=v[v.length-1],Z.setTextureUnits(M.state.textureUnits),re===!0&&de.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,E.pop(),E.length>0?x=E[E.length-1]:x=null,C!==null&&C.renderEnd()};function On(R,V,Y,X){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLightProbeGrid)M.pushLightProbeGrid(R);else if(R.isLight)M.pushLight(R),R.castShadow&&M.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(Q)){X&&Ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(O);const Pe=ie.update(R),Ae=R.material;Ae.visible&&x.push(R,Pe,Ae,Y,Ge.z,null,V)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(Q))){const Pe=ie.update(R),Ae=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ge.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ge.copy(Pe.boundingSphere.center)),Ge.applyMatrix4(R.matrixWorld).applyMatrix4(O)),Array.isArray(Ae)){const Be=Pe.groups;for(let He=0,st=Be.length;He<st;He++){const mt=Be[He],ze=Ae[mt.materialIndex];ze&&ze.visible&&x.push(R,Pe,ze,Y,Ge.z,mt,V)}}else Ae.visible&&x.push(R,Pe,Ae,Y,Ge.z,null,V)}}const Te=R.children;for(let Pe=0,Ae=Te.length;Pe<Ae;Pe++)On(Te[Pe],V,Y,X)}function Lt(R,V,Y,X){const{opaque:K,transmissive:Te,transparent:Pe}=R;M.setupLightsView(Y),re===!0&&de.setGlobalState(A.clippingPlanes,Y),X&&S.viewport(j.copy(X)),K.length>0&&kn(K,V,Y),Te.length>0&&kn(Te,V,Y),Pe.length>0&&kn(Pe,V,Y),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function An(R,V,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){const ze=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new Un(1,1,{generateMipmaps:!0,type:ze?yn:mi,minFilter:rr,samples:Math.max(4,D.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const Te=M.state.transmissionRenderTarget[X.id],Pe=X.viewport||j;Te.setSize(Pe.z*A.transmissionResolutionScale,Pe.w*A.transmissionResolutionScale);const Ae=A.getRenderTarget(),Be=A.getActiveCubeFace(),He=A.getActiveMipmapLevel();A.setRenderTarget(Te),A.getClearColor(Ne),qe=A.getClearAlpha(),qe<1&&A.setClearColor(16777215,.5),A.clear(),Re&&$e.render(Y);const st=A.toneMapping;A.toneMapping=cr;const mt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),re===!0&&de.setGlobalState(A.clippingPlanes,X),kn(R,Y,X),Z.updateMultisampleRenderTarget(Te),Z.updateRenderTargetMipmap(Te),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let vt=0,tn=V.length;vt<tn;vt++){const Ot=V[vt],{object:Rt,geometry:Rn,material:Ce,group:Bn}=Ot;if(Ce.side===Vi&&Rt.layers.test(X.layers)){const bt=Ce.side;Ce.side=ri,Ce.needsUpdate=!0,en(Rt,Y,X,Rn,Ce,Bn),Ce.side=bt,Ce.needsUpdate=!0,ze=!0}}ze===!0&&(Z.updateMultisampleRenderTarget(Te),Z.updateRenderTargetMipmap(Te))}A.setRenderTarget(Ae,Be,He),A.setClearColor(Ne,qe),mt!==void 0&&(X.viewport=mt),A.toneMapping=st}function kn(R,V,Y){const X=V.isScene===!0?V.overrideMaterial:null;for(let K=0,Te=R.length;K<Te;K++){const Pe=R[K],{object:Ae,geometry:Be,group:He}=Pe;let st=Pe.material;st.allowOverride===!0&&X!==null&&(st=X),Ae.layers.test(Y.layers)&&en(Ae,V,Y,Be,st,He)}}function en(R,V,Y,X,K,Te){C!==null&&K.isNodeMaterial&&C.setObject(R,K),R.onBeforeRender(A,V,Y,X,K,Te),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(A,V,Y,X,R,Te),K.transparent===!0&&K.side===Vi&&K.forceSinglePass===!1?(K.side=ri,K.needsUpdate=!0,A.renderBufferDirect(Y,V,X,K,R,Te),K.side=hs,K.needsUpdate=!0,A.renderBufferDirect(Y,V,X,K,R,Te),K.side=Vi):A.renderBufferDirect(Y,V,X,K,R,Te),R.onAfterRender(A,V,Y,X,K,Te)}function qt(R,V,Y){V.isScene!==!0&&(V=Ue);const X=q.get(R),K=M.state.lights,Te=M.state.shadowsArray,Pe=K.state.version,Ae=ye.getParameters(R,K.state,Te,V,Y,M.state.lightProbeGridArray),Be=ye.getProgramCacheKey(Ae);let He=X.programs;X.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,X.fog=V.fog;const st=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;X.envMap=ge.get(R.envMap||X.environment,st),X.envMapRotation=X.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",Oe),He=new Map,X.programs=He);let mt=He.get(Be);if(mt!==void 0){if(X.currentProgram===mt&&X.lightsStateVersion===Pe)return Ki(R,Ae),mt}else Ae.uniforms=ye.getUniforms(R),C!==null&&R.isNodeMaterial&&C.build(R,Y,Ae),R.onBeforeCompile(Ae,A),mt=ye.acquireProgram(Ae,Be),He.set(Be,mt),X.uniforms=Ae.uniforms;const ze=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=de.uniform),Ki(R,Ae),X.needsLights=Si(R),X.lightsStateVersion=Pe,X.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.sunLights.value=K.state.sun,ze.sunLightShadows.value=K.state.sunShadow,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.sunShadowMatrix.value=K.state.sunShadowMatrix,ze.sunShadowCascade.value=K.state.sunShadowCascade,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotLightMatrix.value=K.state.spotLightMatrix,ze.spotLightMap.value=K.state.spotLightMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix),X.lightProbeGrid=M.state.lightProbeGridArray.length>0,X.currentProgram=mt,X.uniformsList=null,mt}function on(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Jc.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Ki(R,V){const Y=q.get(R);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Ks(R,V){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;b.setFromMatrixPosition(V.matrixWorld);for(let Y=0,X=R.length;Y<X;Y++){const K=R[Y];if(K.texture!==null&&K.boundingBox.containsPoint(b))return K}return null}function gn(R,V,Y,X,K){V.isScene!==!0&&(V=Ue),Z.resetTextureUnits();const Te=V.fog,Pe=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?V.environment:null,Ae=$===null?A.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:dt.workingColorSpace,Be=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,He=ge.get(X.envMap||Pe,Be),st=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,mt=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ze=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,tn=!!Y.morphAttributes.color;let Ot=cr;X.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ot=A.toneMapping);const Rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Rn=Rt!==void 0?Rt.length:0,Ce=q.get(X),Bn=M.state.lights;if(re===!0&&(oe===!0||R!==L)){const Dt=R===L&&X.id===W;de.setState(X,R,Dt)}let bt=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Bn.state.version||Ce.outputColorSpace!==Ae||K.isBatchedMesh&&Ce.batching===!1||!K.isBatchedMesh&&Ce.batching===!0||K.isBatchedMesh&&Ce.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ce.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ce.instancing===!1||!K.isInstancedMesh&&Ce.instancing===!0||K.isSkinnedMesh&&Ce.skinning===!1||!K.isSkinnedMesh&&Ce.skinning===!0||K.isInstancedMesh&&Ce.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ce.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ce.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ce.instancingMorph===!1&&K.morphTexture!==null||Ce.envMap!==He||X.fog===!0&&Ce.fog!==Te||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==de.numPlanes||Ce.numIntersection!==de.numIntersection)||Ce.vertexAlphas!==st||Ce.vertexTangents!==mt||Ce.morphTargets!==ze||Ce.morphNormals!==vt||Ce.morphColors!==tn||Ce.toneMapping!==Ot||Ce.morphTargetsCount!==Rn||!!Ce.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,Ce.__version=X.version);let Mi=Ce.currentProgram;bt===!0&&(Mi=qt(X,V,K),C&&X.isNodeMaterial&&C.onUpdateProgram(X,Mi,Ce));let Yi=!1,Ur=!1,Js=!1;const wt=Mi.getUniforms(),Jt=Ce.uniforms;if(S.useProgram(Mi.program)&&(Yi=!0,Ur=!0,Js=!0),X.id!==W&&(W=X.id,Ur=!0),Ce.needsLights){const Dt=Ks(M.state.lightProbeGridArray,K);Ce.lightProbeGrid!==Dt&&(Ce.lightProbeGrid=Dt,Ur=!0)}if(Yi||L!==R){S.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),wt.setValue(k,"projectionMatrix",R.projectionMatrix),wt.setValue(k,"viewMatrix",R.matrixWorldInverse);const kr=wt.map.cameraPosition;kr!==void 0&&kr.setValue(k,pe.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&wt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&wt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),L!==R&&(L=R,Ur=!0,Js=!0)}if(Ce.needsLights&&(Bn.state.sunShadowMap.length>0&&wt.setValue(k,"sunShadowMap",Bn.state.sunShadowMap,Z),Bn.state.directionalShadowMap.length>0&&wt.setValue(k,"directionalShadowMap",Bn.state.directionalShadowMap,Z),Bn.state.spotShadowMap.length>0&&wt.setValue(k,"spotShadowMap",Bn.state.spotShadowMap,Z),Bn.state.pointShadowMap.length>0&&wt.setValue(k,"pointShadowMap",Bn.state.pointShadowMap,Z)),K.isSkinnedMesh){wt.setOptional(k,K,"bindMatrix"),wt.setOptional(k,K,"bindMatrixInverse");const Dt=K.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),wt.setValue(k,"boneTexture",Dt.boneTexture,Z))}K.isBatchedMesh&&(wt.setOptional(k,K,"batchingTexture"),wt.setValue(k,"batchingTexture",K._matricesTexture,Z),wt.setOptional(k,K,"batchingIdTexture"),wt.setValue(k,"batchingIdTexture",K._indirectTexture,Z),wt.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&wt.setValue(k,"batchingColorTexture",K._colorsTexture,Z));const Or=Y.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0)&&G.update(K,Y,Mi),(Ur||Ce.receiveShadow!==K.receiveShadow)&&(Ce.receiveShadow=K.receiveShadow,wt.setValue(k,"receiveShadow",K.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&V.environment!==null&&(Jt.envMapIntensity.value=V.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=UA()),Ur){if(wt.setValue(k,"toneMappingExposure",A.toneMappingExposure),Ce.needsLights&&Yt(Jt,Js),Te&&X.fog===!0&&Ie.refreshFogUniforms(Jt,Te),Ie.refreshMaterialUniforms(Jt,X,te,J,M.state.transmissionRenderTarget[R.id]),Ce.needsLights&&Ce.lightProbeGrid){const Dt=Ce.lightProbeGrid;Jt.probesSH.value=Dt.texture,Jt.probesMin.value.copy(Dt.boundingBox.min),Jt.probesMax.value.copy(Dt.boundingBox.max),Jt.probesResolution.value.copy(Dt.resolution)}Jc.upload(k,on(Ce),Jt,Z)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Jc.upload(k,on(Ce),Jt,Z),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&wt.setValue(k,"center",K.center),wt.setValue(k,"modelViewMatrix",K.modelViewMatrix),wt.setValue(k,"normalMatrix",K.normalMatrix),wt.setValue(k,"modelMatrix",K.matrixWorld),X.uniformsGroups!==void 0){const Dt=X.uniformsGroups;for(let kr=0,js=Dt.length;kr<js;kr++){const vp=Dt[kr];se.update(vp,Mi),se.bind(vp,Mi)}}return Mi}function Yt(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.sunLights.needsUpdate=V,R.sunLightShadows.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Si(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(R,V,Y){const X=q.get(R);X.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),q.get(R.texture).__webglTexture=V,q.get(R.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const Y=q.get(R);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,Y=0){$=R,z=V,B=Y;let X=null,K=!1,Te=!1;if(R){const Ae=q.get(R);if(Ae.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(k.FRAMEBUFFER,Ae.__webglFramebuffer),j.copy(R.viewport),fe.copy(R.scissor),me=R.scissorTest,S.viewport(j),S.scissor(fe),S.setScissorTest(me),W=-1;return}else if(Ae.__webglFramebuffer===void 0)Z.setupRenderTarget(R);else if(Ae.__hasExternalTextures)Z.rebindTextures(R,q.get(R.texture).__webglTexture,q.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const st=R.depthTexture;if(Ae.__boundDepthTexture!==st){if(st!==null&&q.has(st)&&(R.width!==st.image.width||R.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(R)}}const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const He=q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(He[V])?X=He[V][Y]:X=He[V],K=!0):R.samples>0&&Z.useMultisampledRTT(R)===!1?X=q.get(R).__webglMultisampledFramebuffer:Array.isArray(He)?X=He[Y]:X=He,j.copy(R.viewport),fe.copy(R.scissor),me=R.scissorTest}else j.copy(xe).multiplyScalar(te).floor(),fe.copy(De).multiplyScalar(te).floor(),me=Fe;if(Y!==0&&(X=N),S.bindFramebuffer(k.FRAMEBUFFER,X)&&S.drawBuffers(R,X),S.viewport(j),S.scissor(fe),S.setScissorTest(me),K){const Ae=q.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ae.__webglTexture,Y)}else if(Te){const Ae=V;for(let Be=0;Be<R.textures.length;Be++){const He=q.get(R.textures[Be]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Be,He.__webglTexture,Y,Ae)}}else if(R!==null&&Y!==0){const Ae=q.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ae.__webglTexture,Y)}W=-1};function Ys(R){const V=q.get(R);return(V.__readFormat!==R.format||V.__readType!==R.type)&&(V.__readFormat=R.format,V.__readType=R.type,V.__formatReadable=D.textureFormatReadable(R.format),V.__typeReadable=D.textureTypeReadable(R.type)),V}this.readRenderTargetPixels=function(R,V,Y,X,K,Te,Pe,Ae=0){if(!(R&&R.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Be=Be[Pe]),Be){S.bindFramebuffer(k.FRAMEBUFFER,Be);try{const He=R.textures[Ae],st=He.format,mt=He.type;R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ae);const ze=Ys(He);if(ze.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-X&&Y>=0&&Y<=R.height-K&&k.readPixels(V,Y,X,K,Me.convert(st),Me.convert(mt),Te)}finally{const He=$!==null?q.get($).__webglFramebuffer:null;S.bindFramebuffer(k.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,V,Y,X,K,Te,Pe,Ae=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Be=Be[Pe]),Be)if(V>=0&&V<=R.width-X&&Y>=0&&Y<=R.height-K){S.bindFramebuffer(k.FRAMEBUFFER,Be);const He=R.textures[Ae],st=He.format,mt=He.type;R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ae);const ze=Ys(He);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,vt),k.bufferData(k.PIXEL_PACK_BUFFER,Te.byteLength,k.STREAM_READ),k.readPixels(V,Y,X,K,Me.convert(st),Me.convert(mt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const tn=$!==null?q.get($).__webglFramebuffer:null;S.bindFramebuffer(k.FRAMEBUFFER,tn);const Ot=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Sy(k,Ot,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,vt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Te),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(vt),k.deleteSync(Ot),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,Y=0){const X=Math.pow(2,-Y),K=Math.floor(R.image.width*X),Te=Math.floor(R.image.height*X),Pe=V!==null?V.x:0,Ae=V!==null?V.y:0;Z.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,Y,0,0,Pe,Ae,K,Te),S.unbindTexture()},this.copyTextureToTexture=function(R,V,Y=null,X=null,K=0,Te=0){let Pe,Ae,Be,He,st,mt,ze,vt,tn;const Ot=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(Y!==null)Pe=Y.max.x-Y.min.x,Ae=Y.max.y-Y.min.y,Be=Y.isBox3?Y.max.z-Y.min.z:1,He=Y.min.x,st=Y.min.y,mt=Y.isBox3?Y.min.z:0;else{const Jt=Math.pow(2,-K);Pe=Math.floor(Ot.width*Jt),Ae=Math.floor(Ot.height*Jt),R.isDataArrayTexture?Be=Ot.depth:R.isData3DTexture?Be=Math.floor(Ot.depth*Jt):Be=1,He=0,st=0,mt=0}X!==null?(ze=X.x,vt=X.y,tn=X.z):(ze=0,vt=0,tn=0);const Rt=Me.convert(V.format),Rn=Me.convert(V.type);let Ce;V.isData3DTexture?(Z.setTexture3D(V,0),Ce=k.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Z.setTexture2DArray(V,0),Ce=k.TEXTURE_2D_ARRAY):(Z.setTexture2D(V,0),Ce=k.TEXTURE_2D),S.activeTexture(k.TEXTURE0),S.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),S.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),S.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);const Bn=S.getParameter(k.UNPACK_ROW_LENGTH),bt=S.getParameter(k.UNPACK_IMAGE_HEIGHT),Mi=S.getParameter(k.UNPACK_SKIP_PIXELS),Yi=S.getParameter(k.UNPACK_SKIP_ROWS),Ur=S.getParameter(k.UNPACK_SKIP_IMAGES);S.pixelStorei(k.UNPACK_ROW_LENGTH,Ot.width),S.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot.height),S.pixelStorei(k.UNPACK_SKIP_PIXELS,He),S.pixelStorei(k.UNPACK_SKIP_ROWS,st),S.pixelStorei(k.UNPACK_SKIP_IMAGES,mt);const Js=R.isDataArrayTexture||R.isData3DTexture,wt=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const Jt=q.get(R),Or=q.get(V),Dt=q.get(Jt.__renderTarget),kr=q.get(Or.__renderTarget);S.bindFramebuffer(k.READ_FRAMEBUFFER,Dt.__webglFramebuffer),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let js=0;js<Be;js++)Js&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,q.get(R).__webglTexture,K,mt+js),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,q.get(V).__webglTexture,Te,tn+js)),k.blitFramebuffer(He,st,Pe,Ae,ze,vt,Pe,Ae,k.DEPTH_BUFFER_BIT,k.NEAREST);S.bindFramebuffer(k.READ_FRAMEBUFFER,null),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||q.has(R)){const Jt=q.get(R),Or=q.get(V);S.bindFramebuffer(k.READ_FRAMEBUFFER,I),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,F);for(let Dt=0;Dt<Be;Dt++)Js?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Jt.__webglTexture,K,mt+Dt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Jt.__webglTexture,K),wt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Or.__webglTexture,Te,tn+Dt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Or.__webglTexture,Te),K!==0?k.blitFramebuffer(He,st,Pe,Ae,ze,vt,Pe,Ae,k.COLOR_BUFFER_BIT,k.NEAREST):wt?k.copyTexSubImage3D(Ce,Te,ze,vt,tn+Dt,He,st,Pe,Ae):k.copyTexSubImage2D(Ce,Te,ze,vt,He,st,Pe,Ae);S.bindFramebuffer(k.READ_FRAMEBUFFER,null),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else wt?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Ce,Te,ze,vt,tn,Pe,Ae,Be,Rt,Rn,Ot.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(Ce,Te,ze,vt,tn,Pe,Ae,Be,Rt,Ot.data):k.texSubImage3D(Ce,Te,ze,vt,tn,Pe,Ae,Be,Rt,Rn,Ot):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Te,ze,vt,Pe,Ae,Rt,Rn,Ot.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Te,ze,vt,Ot.width,Ot.height,Rt,Ot.data):k.texSubImage2D(k.TEXTURE_2D,Te,ze,vt,Pe,Ae,Rt,Rn,Ot);S.pixelStorei(k.UNPACK_ROW_LENGTH,Bn),S.pixelStorei(k.UNPACK_IMAGE_HEIGHT,bt),S.pixelStorei(k.UNPACK_SKIP_PIXELS,Mi),S.pixelStorei(k.UNPACK_SKIP_ROWS,Yi),S.pixelStorei(k.UNPACK_SKIP_IMAGES,Ur),Te===0&&V.generateMipmaps&&k.generateMipmap(Ce),S.unbindTexture()},this.initRenderTarget=function(R){q.get(R).__webglFramebuffer===void 0&&Z.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Z.setTextureCube(R,0):R.isData3DTexture?Z.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Z.setTexture2DArray(R,0):Z.setTexture2D(R,0),S.unbindTexture()},this.resetState=function(){z=0,B=0,$=null,S.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}function Bg(r,e){if(e===cy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===jf||e===B_){let t=r.getIndex();if(t===null){const s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===jf)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function kA(r){const e=new Map,t=new Map,n=r.clone();return wb(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function wb(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)wb(r.children[n],e.children[n],t)}class BA extends Xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new WA(t)}),this.register(function(t){return new qA(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new tR(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new jA(t)}),this.register(function(t){return new HA(t)}),this.register(function(t){return new $A(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new QA(t)}),this.register(function(t){return new ZA(t)}),this.register(function(t){return new GA(t)}),this.register(function(t){return new zg(t,pt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new zg(t,pt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new iR(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=rl.extractUrlBase(e);a=rl.resolveURL(c,this.path)}else a=rl.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new lp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Eb){try{a[pt.KHR_BINARY_GLTF]=new rR(e)}catch(u){i&&i(u);return}s=JSON.parse(a[pt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new _R(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case pt.KHR_MATERIALS_UNLIT:a[u]=new VA;break;case pt.KHR_DRACO_MESH_COMPRESSION:a[u]=new sR(s,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:a[u]=new aR;break;case pt.KHR_MESH_QUANTIZATION:a[u]=new oR;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function zA(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Zt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class GA{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ke(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ai);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new wM(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ch(h),c.distance=u;break;case"spot":c=new id(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),$i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class VA{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return ar}extendParams(e,t,n){const i=[];e.color=new ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ai),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,xn))}return Promise.all(i)}}class HA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class WA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(s,s)}return Promise.all(i)}}class qA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class XA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class KA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],ai)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,xn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class YA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class JA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(s[0],s[1],s[2],ai),Promise.all(i)}}class jA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class $A{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(s[0],s[1],s[2],ai),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,xn)),Promise.all(i)}}class ZA{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class QA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?mr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class eR{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class tR{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class nR{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class zg{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class iR{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ei.TRIANGLES&&c.mode!==Ei.TRIANGLE_STRIP&&c.mode!==Ei.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const p of u){const _=new it,g=new U,m=new Fr,y=new U(1,1,1),w=new mS(p.geometry,p.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),w.setMatrixAt(x,_.compose(g,m,y));let b=null;for(const x in l)if(x==="_COLOR_0"){const M=l[x];w.instanceColor=new ph(M.array,M.itemSize,M.normalized)}else if(x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"){if(b===null){const E=w.geometry;b=new pn,b.name=E.name;for(const v in E.attributes)b.setAttribute(v,E.attributes[v]);for(const v in E.morphAttributes)b.morphAttributes[v]=E.morphAttributes[v];E.index!==null&&b.setIndex(E.index),b.morphTargetsRelative=E.morphTargetsRelative;for(const v of E.groups)b.addGroup(v.start,v.count,v.materialIndex);E.boundingBox!==null&&(b.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(b.boundingSphere=E.boundingSphere.clone()),b.drawRange.start=E.drawRange.start,b.drawRange.count=E.drawRange.count,b.userData=Object.assign({},E.userData),w.geometry=b}const M=l[x];b.setAttribute(x,new ph(M.array,M.itemSize,M.normalized))}Nt.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),d.push(w)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Eb="glTF",Mo=12,Gg={JSON:1313821514,BIN:5130562};class rR{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Mo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Eb)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Mo,s=new DataView(e,Mo);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Gg.JSON){const c=new Uint8Array(e,Mo+a,o);this.content=n.decode(c)}else if(l===Gg.BIN){const c=Mo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=od[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=od[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],d=ka[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const p in d.attributes){const _=d.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}u(d)},o,c,ai,f)})})}}class aR{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class oR{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class Ab extends Za{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,p=e*c,_=p-c,g=-2*d+3*f,m=d-f,y=1-g,w=m-f+u;for(let b=0;b!==o;b++){const x=a[_+b+o],M=a[_+b+l]*h,E=a[p+b+o],v=a[p+b]*h;s[b]=y*x+w*M+g*E+m*v}return s}}const lR=new Fr;class cR extends Ab{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return lR.fromArray(s).normalize().toArray(s),s}}const Ei={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ka={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vg={9728:hn,9729:zt,9984:D_,9985:Hc,9986:Uo,9987:rr},Hg={33071:Ii,33648:ch,10497:Gs},Iu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},od={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hR={CUBICSPLINE:void 0,LINEAR:xl,STEP:vl},Nu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uR(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new $a({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hs})),r.DefaultMaterial}function ys(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $i(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fR(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function dR(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pR(r){let e;const t=r.extensions&&r.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fu(t.attributes):e=r.indices+":"+Fu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Fu(r.targets[n]);return e}function Fu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ld(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mR(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const gR=new it;class _R{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new mb(this.options.manager):this.textureLoader=new EM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ys(s,o,i),$i(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(rl.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Iu[i.type],o=ka[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Sn(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Iu[i.type],c=ka[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,g;if(d&&d!==u){const m=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let w=t.cache.get(y);w||(_=new c(o,m*d,i.count*d/h),w=new K_(_,d/h),t.cache.add(y,w)),g=new Ml(w,l,f%d/h,p)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),g=new Sn(_,l,p);if(i.sparse!==void 0){const m=Iu.SCALAR,y=ka[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,x=new y(a[1],w,i.sparse.count*m),M=new c(a[2],b,i.sparse.count*l);o!==null&&(g=new Sn(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,v=x.length;E<v;E++){const T=x[E];if(g.setX(T,M[E*l]),l>=2&&g.setY(T,M[E*l+1]),l>=3&&g.setZ(T,M[E*l+2]),l>=4&&g.setW(T,M[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return h.magFilter=Vg[f.magFilter]||zt,h.minFilter=Vg[f.minFilter]||rr,h.wrapS=Hg[f.wrapS]||Gs,h.wrapT=Hg[f.wrapT]||Gs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==hn&&h.minFilter!==zt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(_){const g=new un(_);g.needsUpdate=!0,f(g)}),t.load(rl.resolveURL(u,s.path),p,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),$i(u,a),u.userData.mimeType=a.mimeType||mR(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[pt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Z_,qi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new $_,qi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return $a}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[pt.KHR_MATERIALS_UNLIT]){const u=i[pt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new ke(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],ai),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,xn)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Vi);const h=s.alphaMode||Nu.OPAQUE;if(h===Nu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Nu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ar&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new he(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==ar&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ar){const u=s.emissiveFactor;o.emissive=new ke().setRGB(u[0],u[1],u[2],ai)}return s.emissiveTexture!==void 0&&a!==ar&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,xn)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),$i(u,s),t.associations.set(u,{materials:e}),s.extensions&&ys(i,u,s),u})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Wg(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=pR(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Wg(new pn,c,t),c.mode===Ei.TRIANGLE_STRIP?f=f.then(d=>Bg(d,B_)):c.mode===Ei.TRIANGLE_FAN&&(f=f.then(d=>Bg(d,jf))),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?uR(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){const _=h[d],g=a[d];let m;const y=c[d];if(g.mode===Ei.TRIANGLES||g.mode===Ei.TRIANGLE_STRIP||g.mode===Ei.TRIANGLE_FAN||g.mode===void 0){const w=s.isSkinnedMesh===!0,b=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");w&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=w&&b?new fS(_,y):new It(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Ei.LINES)m=new _S(_,y);else if(g.mode===Ei.LINE_STRIP)m=new ip(_,y);else if(g.mode===Ei.LINE_LOOP)m=new bS(_,y);else if(g.mode===Ei.POINTS)m=new rp(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&dR(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),$i(m,s),g.extensions&&ys(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return s.extensions&&ys(i,u[0],s),u[0];const f=new Wi;s.extensions&&ys(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yn(ts.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Nl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$i(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const f=new it;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tp(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],p=i.samplers[d.sampler],_=d.target,g=_.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,y=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],p=u[2],_=u[3],g=u[4],m=[];for(let w=0,b=f.length;w<b;w++){const x=f[w],M=d[w],E=p[w],v=_[w],T=g[w];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const A=n._createAnimationTracks(x,M,E,v,T);if(A)for(let P=0;P<A.length;P++)m.push(A[P])}const y=new pM(s,void 0,m);return $i(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,gR)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){const d=h.userData.pivot,p=u[0];h.pivot=new U().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new j_:c.length>1?h=new Wi:c.length===1?h=c[0]:h=new Nt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),$i(h,s),s.extensions&&ys(n,h,s),s.matrix!==void 0){const u=new it;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Wi;n.name&&(s.name=i.createUniqueName(n.name)),$i(s,n),n.extensions&&ys(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){const f=l[h];f.parent!==null?s.add(kA(f)):s.add(f)}const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof qi||f instanceof un)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}qr[s.path]===qr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(qr[s.path]){case qr.weights:h=Pl;break;case qr.rotation:h=Ll;break;case qr.translation:case qr.scale:h=_h;break;default:n.itemSize===1?h=Pl:h=_h;break}const u=i.interpolation!==void 0?hR[i.interpolation]:xl,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const _=new h(l[d]+"."+qr[s.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ld(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ll?cR:Ab;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function bR(r,e,t){const n=e.attributes,i=new yi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){const h=ld(ka[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new U,l=new U;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const _=ld(ka[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new dr;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Wg(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=od[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return dt.workingColorSpace!==ai&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),$i(r,e),bR(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?fR(r,e.targets,t):r})}class vR extends xM{constructor(e){super(e),this.type=yn}parse(e){const a=function(v,T){switch(v){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(T||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(T||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(T||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(T||""))}},u=function(v,T,A){T=T||1024;let C=v.pos,N=-1,I=0,F="",z=String.fromCharCode.apply(null,new Uint16Array(v.subarray(C,C+128)));for(;0>(N=z.indexOf(`
`))&&I<T&&C<v.byteLength;)F+=z,I+=z.length,C+=128,z=String.fromCharCode.apply(null,new Uint16Array(v.subarray(C,C+128)));return-1<N?(v.pos+=I+N+1,F+z.slice(0,N)):!1},f=function(v){const T=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,N=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,I={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let F,z;for((v.pos>=v.byteLength||!(F=u(v)))&&a(1,"no header found"),(z=F.match(T))||a(3,"bad initial token"),I.valid|=1,I.programtype=z[1],I.string+=F+`
`;F=u(v),F!==!1;){if(I.string+=F+`
`,F.charAt(0)==="#"){I.comments+=F+`
`;continue}if((z=F.match(A))&&(I.gamma=parseFloat(z[1])),(z=F.match(P))&&(I.exposure=parseFloat(z[1])),(z=F.match(C))&&(I.valid|=2,I.format=z[1]),(z=F.match(N))&&(I.valid|=4,I.height=parseInt(z[1],10),I.width=parseInt(z[2],10)),I.valid&2&&I.valid&4)break}return I.valid&2||a(3,"missing format specifier"),I.valid&4||a(3,"missing image size specifier"),I},d=function(v,T,A){const P=T;if(P<8||P>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);P!==(v[2]<<8|v[3])&&a(3,"wrong scanline width");const C=new Uint8Array(4*T*A);C.length||a(4,"unable to allocate buffer space");let N=0,I=0;const F=4*P,z=new Uint8Array(4),B=new Uint8Array(F);let $=A;for(;$>0&&I<v.byteLength;){I+4>v.byteLength&&a(1),z[0]=v[I++],z[1]=v[I++],z[2]=v[I++],z[3]=v[I++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=P)&&a(3,"bad rgbe scanline format");let W=0,L;for(;W<F&&I<v.byteLength;){L=v[I++];const fe=L>128;if(fe&&(L-=128),(L===0||W+L>F)&&a(3,"bad scanline data"),fe){const me=v[I++];for(let Ne=0;Ne<L;Ne++)B[W++]=me}else B.set(v.subarray(I,I+L),W),W+=L,I+=L}const j=P;for(let fe=0;fe<j;fe++){let me=0;C[N]=B[fe+me],me+=P,C[N+1]=B[fe+me],me+=P,C[N+2]=B[fe+me],me+=P,C[N+3]=B[fe+me],N+=4}$--}return C},p=function(v,T,A,P){const C=v[T+3],N=Math.pow(2,C-128)/255;A[P+0]=v[T+0]*N,A[P+1]=v[T+1]*N,A[P+2]=v[T+2]*N,A[P+3]=1},_=function(v,T,A,P){const C=v[T+3],N=Math.pow(2,C-128)/255;A[P+0]=tc.toHalfFloat(Math.min(v[T+0]*N,65504)),A[P+1]=tc.toHalfFloat(Math.min(v[T+1]*N,65504)),A[P+2]=tc.toHalfFloat(Math.min(v[T+2]*N,65504)),A[P+3]=tc.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const m=f(g),y=m.width,w=m.height,b=d(g.subarray(g.pos),y,w);let x,M,E;switch(this.type){case Qn:E=b.length/4;const v=new Float32Array(E*4);for(let A=0;A<E;A++)p(b,A*4,v,A*4);x=v,M=Qn;break;case yn:E=b.length/4;const T=new Uint16Array(E*4);for(let A=0;A<E;A++)_(b,A*4,T,A*4);x=T,M=yn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:w,data:x,header:m.string,gamma:m.gamma,exposure:m.exposure,type:M,colorSpace:ai,minFilter:zt,magFilter:zt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}var xR=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(m){s=m.instance,s.exports.__wasm_call_ctors()});function o(m){for(var y=new Uint8Array(m.length),w=0;w<m.length;++w){var b=m.charCodeAt(w);y[w]=b>96?b-97:b>64?b-39:b+4}for(var x=0,w=0;w<m.length;++w)y[x++]=y[w]<60?n[y[w]]:(y[w]-60)*64+y[++w];return y.buffer.slice(0,x)}function l(m,y,w,b,x,M,E){var v=m.exports.sbrk,T=b+3&-4,A=v(T*x),P=v(M.length),C=new Uint8Array(m.exports.memory.buffer);C.set(M,P);var N=y(A,b,x,P,M.length);if(N==0&&E&&E(A,T,x),w.set(C.subarray(A,A+b*x)),v(A-v(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(m){var y={object:new Worker(m),pending:0,requests:{}};return y.object.onmessage=function(w){var b=w.data;y.pending-=b.count,y.requests[b.id][b.action](b.value),delete y.requests[b.id]},y}function p(m){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),w=new Blob([y],{type:"text/javascript"}),b=URL.createObjectURL(w),x=u.length;x<m;++x)u[x]=d(b);for(var x=m;x<u.length;++x)u[x].object.postMessage({});u.length=m,URL.revokeObjectURL(b)}function _(m,y,w,b,x){for(var M=u[0],E=1;E<u.length;++E)u[E].pending<M.pending&&(M=u[E]);return new Promise(function(v,T){var A=new Uint8Array(w),P=++f;M.pending+=m,M.requests[P]={resolve:v,reject:T},M.object.postMessage({id:P,count:m,size:y,source:A,mode:b,filter:x},[A.buffer])})}function g(m){var y=m.data;self.ready.then(function(w){if(!y.id)return self.close();try{var b=new Uint8Array(y.count*y.size);l(w,w.exports[y.mode],b,y.count,y.size,y.source,w.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:b},[b.buffer])}catch(x){self.postMessage({id:y.id,count:y.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(m){p(m)},decodeVertexBuffer:function(m,y,w,b,x){l(s,s.exports.meshopt_decodeVertexBuffer,m,y,w,b,s.exports[c[x]])},decodeIndexBuffer:function(m,y,w,b){l(s,s.exports.meshopt_decodeIndexBuffer,m,y,w,b)},decodeIndexSequence:function(m,y,w,b){l(s,s.exports.meshopt_decodeIndexSequence,m,y,w,b)},decodeGltfBuffer:function(m,y,w,b,x,M){l(s,s.exports[h[x]],m,y,w,b,s.exports[c[M]])},decodeGltfBufferAsync:function(m,y,w,b,x){return u.length>0?_(m,y,w,h[b],c[x]):a.then(function(){var M=new Uint8Array(m*y);return l(s,s.exports[h[b]],M,m,y,w,s.exports[c[x]]),M})}}})();const jc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class no{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yR=new Nl(-1,1,1,-1,0,1);class SR extends pn{constructor(){super(),this.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mn([0,2,0,0,2,0],2))}}const MR=new SR;class fp{constructor(e){this._mesh=new It(MR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Rb extends no{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cl.clone(e.uniforms),this.material=new Kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new fp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class qg extends no{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class TR extends no{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class wR{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rb(jc),this.copyPass.material.blending=lr,this.timer=new CM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}qg!==void 0&&(a instanceof qg?n=!0:a instanceof TR&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ER extends no{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ke}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const AR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ja extends no{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(s,a,{type:yn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Un(s,a,{type:yn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Un(s,a,{type:yn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=AR;this.highPassUniforms=Cl.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new he(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Cl.clone(jc.uniforms),this.blendMaterial=new Kt({uniforms:this.copyUniforms,vertexShader:jc.vertexShader,fragmentShader:jc.fragmentShader,premultipliedAlpha:!0,blending:Dr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ke,this._oldClearAlpha=1,this._basic=new ar,this._fsQuad=new fp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new he(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ja.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ja.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const i=[],s=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),s.push(c)}return new Kt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Ja.BlurDirectionX=new he(1,0);Ja.BlurDirectionY=new he(0,1);const Rc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class RR extends no{constructor(){super(),this.isOutputPass=!0,this.uniforms=Cl.clone(Rc.uniforms),this.material=new ub({name:Rc.name,uniforms:this.uniforms,vertexShader:Rc.vertexShader,fragmentShader:Rc.fragmentShader}),this._fsQuad=new fp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Od?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Th?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===zd&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Dh=`
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x),
             mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    s += a * vnoise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return s;
}
`,CR=`
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vView;
varying vec3 vWorld;
void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  vec4 mv = viewMatrix * world;
  vView = mv.xyz;
  gl_Position = projectionMatrix * mv;
}`,PR=`
uniform vec3 uColor;
uniform float uIntensity;
uniform float uTime;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vView;
varying vec3 vWorld;
${Dh}
void main() {
  // MSAA can extrapolate varyings slightly past [0, 1]; pow() of a negative is NaN, which bloom smears over the frame.
  float along = clamp(1.0 - vUv.y, 0.0, 1.0);
  float facing = clamp(abs(dot(normalize(vNormal), normalize(-vView))), 0.0, 1.0);
  float edge = pow(facing, 2.2);
  float fade = smoothstep(0.0, 0.1, along) * pow(1.0 - along, 1.3);
  float n = fbm(vWorld.xz * 1.6 + vec2(0.0, uTime * 0.05)) * 0.6 + fbm(vWorld.xy * 2.2 - uTime * 0.03) * 0.4;
  float near = smoothstep(0.2, 1.1, -vView.z);
  float a = uIntensity * edge * fade * (0.45 + n) * near;
  gl_FragColor = vec4(uColor, a);
}`,LR=new U(0,-1,0);class Xg extends It{uniforms;constructor(e,t,n){const i={uColor:{value:new ke(n)},uIntensity:{value:0},uTime:{value:0}};super(new Ah(e,t,1,48,1,!0).translate(0,-.5,0),new Kt({uniforms:i,vertexShader:CR,fragmentShader:PR,transparent:!0,depthWrite:!1,side:Vi,blending:Dr})),this.uniforms=i,this.renderOrder=8}aim(e,t){const n=t.clone().sub(e);this.position.copy(e),this.scale.set(1,n.length(),1),this.quaternion.setFromUnitVectors(LR,n.normalize())}}const DR={name:"GradeShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new he(1,1)},uGrain:{value:.045},uVignette:{value:.85},uCA:{value:.0025},uGlitch:{value:0},uFlash:{value:0},uVeil:{value:0},uTint:{value:new U(1,1,1)},uLift:{value:new U(0,0,0)},uSat:{value:1},uContrast:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uRes;
    uniform float uGrain;
    uniform float uVignette;
    uniform float uCA;
    uniform float uGlitch;
    uniform float uFlash;
    uniform float uVeil;
    uniform vec3 uTint;
    uniform vec3 uLift;
    uniform float uSat;
    uniform float uContrast;
    varying vec2 vUv;
    ${Dh}

    vec3 aberrate(vec2 uv, float amount) {
      vec2 d = (uv - 0.5) * amount;
      return vec3(texture2D(tDiffuse, uv + d).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv - d).b);
    }

    void main() {
      vec2 uv = vUv;
      float aspect = uRes.x / uRes.y;
      float g = uGlitch;

      if (g > 0.001) {
        float slice = floor(uv.y * 36.0);
        float tick = floor(uTime * 24.0);
        float on = step(1.0 - g * 0.6, hash12(vec2(slice * 0.7, tick + 3.0)));
        uv.x += (hash12(vec2(slice, tick)) - 0.5) * 0.14 * g * on;
      }

      vec3 col = aberrate(uv, uCA + g * 0.03);

      col = col * uTint + uLift;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      col = max((col - 0.35) * uContrast + 0.35, 0.0);

      vec2 vd = (vUv - 0.5) * vec2(aspect, 1.0);
      float vig = smoothstep(1.1, 0.2, length(vd));
      col *= mix(1.0, vig, uVignette);
      col *= 1.0 - uVeil;
      col *= 1.0 - g * 0.2 * step(0.5, fract(vUv.y * uRes.y * 0.25));

      if (uFlash > 0.001) {
        // Triangular lattice: cells snap to white in a random order, spreading from the centre.
        vec2 p = vUv * vec2(aspect, 1.0) * 6.0;
        vec2 s = vec2(p.x - p.y * 0.57735, p.y * 1.1547);
        vec2 i = floor(s);
        vec2 f = fract(s);
        float upper = step(f.x, f.y);
        float id = hash12(i + upper * vec2(17.0, 31.0));
        float th = uFlash * 1.7 - length(vd) * 0.65;
        float fill = smoothstep(id - 0.06, id, th);
        float e = min(min(min(f.x, f.y), min(1.0 - f.x, 1.0 - f.y)), abs(f.x - f.y));
        float edge = (1.0 - smoothstep(0.0, 0.035, e)) * smoothstep(0.0, 0.25, uFlash) * (1.0 - fill);
        col = mix(col, vec3(0.94, 0.93, 0.9), fill);
        col += vec3(0.9, 0.85, 0.75) * edge * 0.35;
      }

      float n = hash12(vUv * uRes + fract(uTime * 7.31) * 913.0) - 0.5;
      col += n * uGrain * (1.0 - l * 0.5);
      gl_FragColor = vec4(col, 1.0);
    }`},To=r=>({key:new ke(r.key),keyI:r.keyI,flicker:r.flicker,moonI:r.moonI??0,door:new ke(r.door??"#ffc58a"),doorI:r.doorI,fog:new ke(r.fog),fogD:r.fogD,embers:r.embers??0,dust:r.dust??1,exposure:r.exposure??1,tint:new U(...r.tint),lift:new U(...r.lift??[0,0,0]),sat:r.sat??1,contrast:r.contrast??1.05}),Cc={amber:To({key:"#ff8a3c",keyI:1,flicker:.4,doorI:1,fog:"#120b07",fogD:.06,tint:[1,.96,.9],lift:[.01,.006,.002],sat:.92,contrast:1.08}),gold:To({key:"#ffa04a",keyI:1.15,flicker:.3,doorI:.6,fog:"#150c05",fogD:.06,dust:1.3,exposure:1.05,tint:[1.05,.97,.84],lift:[.012,.006,0],sat:1,contrast:1.1}),fire:To({key:"#ff6a2a",keyI:1.4,flicker:.95,door:"#ff7a30",doorI:.5,fog:"#1a0a05",fogD:.08,embers:1,dust:.6,exposure:1.04,tint:[1.04,.92,.82],lift:[.014,.004,0],sat:.98,contrast:1.12}),moon:To({key:"#ff9a5a",keyI:.4,flicker:.2,moonI:1,door:"#9ab8ff",doorI:.25,fog:"#070b14",fogD:.055,dust:1.7,exposure:1.05,tint:[.86,.95,1.12],lift:[0,.004,.014],sat:.78,contrast:1.1}),open:To({key:"#ff8a3c",keyI:.85,flicker:.3,doorI:1.2,fog:"#1a130c",fogD:.045,dust:1.4,exposure:1.05,tint:[1,.97,.92],lift:[.012,.01,.006],sat:.95,contrast:1.05})},Kg=r=>({...r,key:r.key.clone(),door:r.door.clone(),fog:r.fog.clone(),tint:r.tint.clone(),lift:r.lift.clone()}),IR=["keyI","flicker","moonI","doorI","fogD","embers","dust","exposure","sat","contrast"];function cd(r,e,t,n){for(const i of IR)r[i]=e[i]+(t[i]-e[i])*n;return r.key.lerpColors(e.key,t.key,n),r.door.lerpColors(e.door,t.door,n),r.fog.lerpColors(e.fog,t.fog,n),r.tint.lerpVectors(e.tint,t.tint,n),r.lift.lerpVectors(e.lift,t.lift,n),r}function NR(r,e,t){return cd(r,r,e,t)}function FR(r,e){return e/(2*Math.tan(ts.degToRad(r.fov)/2))}const UR=`
attribute float aSeed;
uniform float uTime;
uniform float uSize;
uniform float uScale;
uniform float uAmount;
uniform vec3 uBoxMin;
uniform vec3 uBoxSize;
uniform vec3 uLamp;
uniform float uLampI;
uniform vec3 uBeamO;
uniform vec3 uBeamD;
uniform float uBeamI;
uniform vec3 uColor;
uniform vec3 uBeamColor;
varying vec3 vCol;
void main() {
  vec3 p = position;
  float t = uTime * (0.5 + aSeed);
  p.y = uBoxMin.y + mod(p.y - uBoxMin.y + t * 0.015 * (aSeed - 0.4), uBoxSize.y);
  p.x += sin(t * 0.21 + aSeed * 40.0) * 0.22;
  p.z += cos(t * 0.17 + aSeed * 23.0) * 0.22;
  p.y += sin(t * 0.5 + aSeed * 10.0) * 0.04;

  float ld = distance(p, uLamp);
  float lamp = uLampI / (1.0 + ld * ld * 3.0);
  vec3 op = p - uBeamO;
  float along = dot(op, uBeamD);
  float r = length(op - uBeamD * along);
  float beam = uBeamI * smoothstep(0.3 + along * 0.05, 0.0, r) * step(0.0, along);
  float twinkle = 0.55 + 0.45 * sin(uTime * (0.7 + aSeed * 2.5) + aSeed * 50.0);
  vCol = (uColor * (lamp + 0.02) + uBeamColor * beam) * twinkle * uAmount;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = max(uSize * uScale * (0.35 + aSeed) / -mv.z, 1.0);
  gl_Position = projectionMatrix * mv;
}`,OR=`
varying vec3 vCol;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d);
  gl_FragColor = vec4(vCol, a * a);
}`;class kR extends rp{uniforms;constructor(e,t){const n=t.getSize(new U),i=new Float32Array(e*3),s=new Float32Array(e);for(let l=0;l<e;l++)i[l*3]=t.min.x+Math.random()*n.x,i[l*3+1]=t.min.y+Math.random()*n.y,i[l*3+2]=t.min.z+Math.random()*n.z,s[l]=Math.random();const a=new pn;a.setAttribute("position",new Sn(i,3)),a.setAttribute("aSeed",new Sn(s,1));const o={uTime:{value:0},uSize:{value:.012},uScale:{value:800},uAmount:{value:1},uBoxMin:{value:t.min.clone()},uBoxSize:{value:n},uLamp:{value:new U},uLampI:{value:1},uBeamO:{value:new U},uBeamD:{value:new U(0,-1,0)},uBeamI:{value:0},uColor:{value:new ke(1,.62,.32)},uBeamColor:{value:new ke(.55,.72,1)}};super(a,new Kt({uniforms:o,vertexShader:UR,fragmentShader:OR,transparent:!0,depthWrite:!1,blending:Dr})),this.uniforms=o,this.frustumCulled=!1}}const BR=`
attribute float aSeed;
uniform float uTime;
uniform float uSize;
uniform float uScale;
uniform float uAmount;
uniform float uHeight;
varying float vA;
varying float vHeat;
void main() {
  float life = fract(uTime * (0.07 + aSeed * 0.08) + aSeed * 7.13);
  vec3 p = position;
  p.y += life * uHeight;
  p.x += sin(life * 6.0 + aSeed * 30.0) * 0.3 * life + sin(uTime * 1.3 + aSeed * 9.0) * 0.04;
  p.z += cos(life * 5.0 + aSeed * 17.0) * 0.3 * life;
  float flick = 0.55 + 0.45 * sin(uTime * (9.0 + aSeed * 8.0) + aSeed * 80.0);
  vA = smoothstep(0.0, 0.06, life) * (1.0 - life) * uAmount * flick;
  vHeat = 1.0 - life;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = max(uSize * uScale * (0.5 + aSeed) / -mv.z, 1.0);
  gl_Position = projectionMatrix * mv;
}`,zR=`
varying float vA;
varying float vHeat;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.1, d);
  vec3 col = mix(vec3(1.0, 0.18, 0.02), vec3(1.0, 0.62, 0.22), vHeat) * 7.0;
  gl_FragColor = vec4(col, a * vA);
}`;class GR extends rp{uniforms;constructor(e,t){const n=new Float32Array(e*3),i=new Float32Array(e);for(let o=0;o<e;o++)n[o*3]=ts.lerp(t.min.x,t.max.x,Math.random()),n[o*3+1]=t.min.y,n[o*3+2]=ts.lerp(t.min.z,t.max.z,Math.random()),i[o]=Math.random();const s=new pn;s.setAttribute("position",new Sn(n,3)),s.setAttribute("aSeed",new Sn(i,1));const a={uTime:{value:0},uSize:{value:.012},uScale:{value:800},uAmount:{value:0},uHeight:{value:t.max.y-t.min.y}};super(s,new Kt({uniforms:a,vertexShader:BR,fragmentShader:zR,transparent:!0,depthWrite:!1,blending:Dr})),this.uniforms=a,this.frustumCulled=!1}}const VR=new Ai(1,1,1,6).translate(0,.5,0),HR=`
uniform vec2 uSize;
uniform float uTime;
uniform float uSeed;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec3 center = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  // Cylindrical billboard: face the camera but stay upright.
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  right = normalize(vec3(right.x, 0.0, right.z) + 1e-5);
  float h = position.y;
  float sway = (sin(uTime * 2.3 + uSeed) * 0.6 + sin(uTime * 5.7 + uSeed * 2.1) * 0.4) * h * h * 0.22;
  vec3 world = center + right * (position.x + sway) * uSize.x + vec3(0.0, h * uSize.y, 0.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}`,WR=`
uniform float uTime;
uniform float uSeed;
uniform float uIntensity;
varying vec2 vUv;
${Dh}
void main() {
  vec2 p = vec2((vUv.x - 0.5) * 2.0, vUv.y);
  float n = fbm(vec2(p.x * 1.4 + uSeed, p.y * 2.6 - uTime * 3.4));
  p.x += (n - 0.5) * 0.55 * p.y;
  // Teardrop profile: rounded base, pointed, licking tip.
  float w = min(sqrt(clamp(p.y / 0.2, 0.0, 1.0)), pow(clamp((1.0 - p.y) / 0.8, 0.0, 1.0), 1.25)) * 0.92;
  float d = abs(p.x) / max(w, 1e-3);
  float body = smoothstep(1.0, 0.55, d) * smoothstep(0.0, 0.05, p.y);
  float core = smoothstep(0.75, 0.0, d) * smoothstep(0.04, 0.22, p.y) * smoothstep(0.78, 0.3, p.y);
  vec3 outer = vec3(1.0, 0.32, 0.05);
  vec3 mid = vec3(1.0, 0.68, 0.28);
  vec3 hot = vec3(1.0, 0.93, 0.8);
  vec3 col = mix(outer, mid, smoothstep(0.1, 0.8, 1.0 - d));
  col = mix(col, hot, core);
  // Blue root where the wax vapour burns.
  float root = smoothstep(0.2, 0.02, p.y) * smoothstep(1.0, 0.2, d);
  col = mix(col, vec3(0.25, 0.42, 1.0), root * 0.55);
  // The tip cools and thins.
  body *= 1.0 - smoothstep(0.55, 1.0, p.y) * 0.6;
  gl_FragColor = vec4(col * uIntensity, body);
}`;let Pc=null;function qR(){if(Pc)return Pc;const r=document.createElement("canvas");r.width=r.height=128;const e=r.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.35)"),t.addColorStop(.5,"rgba(255,255,255,0.08)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Pc=new vS(r),Pc}class Lc extends Wi{light=null;uniforms;seed=Math.random()*100;size;intensity;baseLight;lightY;glow=null;constructor(e){super(),this.size=new he(e.width,e.height),this.intensity=e.intensity??7,this.uniforms={uSize:{value:this.size.clone()},uTime:{value:0},uSeed:{value:this.seed},uIntensity:{value:this.intensity}};const t=new It(VR,new Kt({uniforms:this.uniforms,vertexShader:HR,fragmentShader:WR,transparent:!0,depthWrite:!1,blending:Dr}));if(t.frustumCulled=!1,t.renderOrder=10,this.add(t),e.halo!==0){this.glow=new cS(new Y_({map:qR(),color:new ke(1,.5,.18),transparent:!0,depthWrite:!1,blending:Dr,opacity:.5}));const n=e.height*(e.halo??3.5);this.glow.scale.set(n,n,1),this.glow.position.y=e.height*.4,this.glow.renderOrder=9,this.add(this.glow)}if(this.baseLight=e.light?.intensity??0,this.lightY=e.light?.y??e.height*.35,e.light){const n=new Ch(e.light.color,e.light.intensity,0,2);n.position.y=this.lightY,e.light.shadow&&(n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.bias=-.002,n.shadow.normalBias=.015,n.shadow.camera.near=.03,n.shadow.camera.far=14),this.light=n,this.add(n)}}update(e,t,n,i){const s=this.seed,a=.5+.24*Math.sin(e*7.9+s)+.14*Math.sin(e*13.3+s*1.7)+.08*Math.sin(e*29.1+s*.3),o=1-n*.45+n*.9*a;this.uniforms.uTime.value=e,this.uniforms.uIntensity.value=this.intensity*t*(.85+.3*a),this.uniforms.uSize.value.set(this.size.x,this.size.y*(.88+.24*a*(.4+n))),this.visible=t>.01,this.glow&&(this.glow.material.opacity=.26*t*o),this.light&&(this.light.intensity=this.baseLight*t*o,i&&this.light.color.copy(i),this.light.position.set(Math.sin(e*3.1+s)*.006*n,this.lightY+Math.sin(e*5.3+s)*.004,Math.cos(e*2.7+s)*.006*n))}}const kt={minX:-3.5,maxX:3.5,minZ:-6,maxZ:3.5,height:4.2},XR={halfWidth:.94,shoulder:2.5,apex:2.78},Bo=new U(kt.minX+.005,3,-2.9);function Yg(r,e,t,n=16777215){const i=`/sync/assets/textures/${e}_`,s=(o,l=!1)=>{const c=r.load(`${i}${o}.webp`);return c.wrapS=c.wrapT=Gs,c.anisotropy=t,l&&(c.colorSpace=xn),c},a=s("arm");return new $a({color:n,map:s("diff",!0),normalMap:s("nor"),aoMap:a,roughnessMap:a,roughness:1,metalness:0})}function wo(r,e,t=e){const n=r.attributes.uv;for(let i=0;i<n.count;i++)n.setXY(i,n.getX(i)*e,n.getY(i)*t);return n.needsUpdate=!0,r}const KR=`
uniform vec3 uColor;
uniform float uIntensity;
uniform float uTime;
varying vec2 vUv;
${Dh}
void main() {
  // vUv.y = 1 at the door, falling off into the room.
  float d = vUv.y;
  float side = smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.75, vUv.x);
  float a = pow(d, 3.0) * side * (0.85 + 0.3 * vnoise(vUv * vec2(9.0, 3.0) + uTime * 0.2));
  gl_FragColor = vec4(uColor, a * uIntensity);
}`,YR=`
uniform vec3 uColor;
uniform float uIntensity;
varying vec2 vUv;
void main() {
  // A carved stone lattice over the opening.
  vec2 p = vUv * vec2(3.0, 11.0);
  vec2 q = vec2(p.x + p.y, p.x - p.y) * 0.7071;
  vec2 f = abs(fract(q) - 0.5);
  float bars = smoothstep(0.36, 0.42, max(f.x, f.y));
  float frame = step(0.06, vUv.x) * step(vUv.x, 0.94) * step(0.03, vUv.y) * step(vUv.y, 0.97);
  float open = (1.0 - bars) * frame;
  float arch = step(length((vUv - vec2(0.5, 0.86)) * vec2(1.0, 3.0)), 0.5) + step(vUv.y, 0.86);
  gl_FragColor = vec4(uColor * uIntensity * open * min(arch, 1.0), 1.0);
}`,Jg=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;function JR(r,e){const t=new Wi,n=kt.maxX-kt.minX,i=kt.maxZ-kt.minZ,s=kt.height,a=(kt.maxZ+kt.minZ)/2,o=2.8,l=new It(wo(new Ai(n,i),n/2.4,i/2.4),e);l.rotation.x=-Math.PI/2,l.position.set(0,0,a),l.receiveShadow=!0,t.add(l);const c=r.clone();c.color.setScalar(.35);const h=new It(wo(new Ai(n,i),n/o,i/o),c);h.rotation.x=Math.PI/2,h.position.set(0,s,a),t.add(h);const u=(P,C)=>{const N=new It(wo(new Ai(i,s),i/o,s/o),r);N.position.set(P,s/2,a),N.rotation.y=C,N.receiveShadow=!0,t.add(N)};u(kt.minX,Math.PI/2),u(kt.maxX,-Math.PI/2);const f=new It(wo(new Ai(n,s),n/o,s/o),r);f.position.set(0,s/2,kt.maxZ),f.rotation.y=Math.PI,t.add(f);const d=new sb;d.moveTo(kt.minX,-.3),d.lineTo(kt.maxX,-.3),d.lineTo(kt.maxX,s),d.lineTo(kt.minX,s),d.closePath();const p=new ed,{halfWidth:_,shoulder:g,apex:m}=XR;p.moveTo(-_,-.1),p.lineTo(_,-.1),p.lineTo(_,g),p.quadraticCurveTo(_,m,0,m),p.quadraticCurveTo(-_,m,-_,g),p.closePath(),d.holes.push(p);const y=.6,w=new It(wo(new op(d,{depth:y,bevelEnabled:!1,curveSegments:16}),1/o),r);w.position.z=kt.minZ-y,w.receiveShadow=!0,w.castShadow=!0,t.add(w);const b=new ar({color:new ke(4,3.2,2.2)}),x=new It(new Ai(3,3.6),b);x.position.set(0,1.6,kt.minZ-1.4),t.add(x);const M={uIntensity:{value:1},uTime:{value:0},uColor:{value:new ke(1,.7,.4)}},E=new It(new Ai(2.6,1.6),new Kt({uniforms:M,vertexShader:Jg,fragmentShader:KR,transparent:!0,depthWrite:!1,blending:Dr}));E.rotation.x=-Math.PI/2,E.position.set(0,.004,kt.minZ+.8),t.add(E);const v={uIntensity:{value:0},uColor:{value:new ke(.6,.75,1)}},T=new It(new Ai(.42,1.25),new Kt({uniforms:v,vertexShader:Jg,fragmentShader:YR}));T.position.copy(Bo),T.rotation.y=Math.PI/2,t.add(T);const A=new $a({color:2365198,roughness:.85});for(let P=kt.minZ+.9;P<kt.maxZ;P+=1.7){const C=new It(new ja(n,.24,.28),A);C.position.set(0,s-.12,P),C.receiveShadow=!0,t.add(C)}return{group:t,beyond:b,spill:M,window:v}}const jg=["large_castle_door","treasure_chest","WoodenTable_01","ornate_medieval_dagger","seadogs_compass","wooden_candlestick","brass_candleholders","brass_diya_lantern","wooden_lantern_01","vintage_pocket_watch","book_encyclopedia_set_01","brass_vase_03","brass_goblets","ceramic_pot","wine_barrel_01","wooden_crate_01"],jR=.549;function $R(r,e){r.traverse(t=>{const n=t;if(!n.isMesh)return;const i=n.material;if(/glass/i.test(i.name)){n.material=new ar({name:i.name,color:16767400,transparent:!0,opacity:.07,depthWrite:!1}),n.castShadow=!1;return}n.castShadow=e,n.receiveShadow=!0})}function Uu(r,e){const t=r.parent,n=new Nt;return n.position.copy(e),t.add(n),r.position.sub(e),n.add(r),n}function zi(r,e,t,n,i=0,s=1){return r.position.set(e,t,n),r.rotation.y=i,r.scale.setScalar(s),r}async function ZR(r,e,t){const n="/sync/assets/models/",i=await Promise.all(jg.map(P=>r.loadAsync(`${n}${P}.glb`))),s={};jg.forEach((P,C)=>{s[P]=i[C].scene,$R(s[P],!0)});const a=s.large_castle_door;zi(a,.044,0,kt.minZ),e.add(a);const o=Uu(a.getObjectByName("large_castle_door_left"),new U(-1.009,0,0)),l=Uu(a.getObjectByName("large_castle_door_right"),new U(.918,0,0)),c=zi(s.WoodenTable_01,0,0,-1,.06);e.add(c);const h=(P,C,N,I=0,F=1,z=0)=>c.add(zi(P,C,jR+z,N,I,F));h(s.wooden_lantern_01,-.6,-.08,.5),s.wooden_lantern_01.traverse(P=>{const C=P.material;C?.isMeshStandardMaterial&&C.color.multiplyScalar(.4)}),h(s.brass_goblets,-.22,-.13,.4,.85),h(s.book_encyclopedia_set_01,.32,-.2,-.08),h(s.wooden_candlestick,.78,.04),h(s.seadogs_compass,.16,.12,.7,1.15),h(s.brass_vase_03,-.84,.16,.2);const u=new Wi;s.vintage_pocket_watch.rotation.x=-Math.PI/2,u.add(s.vintage_pocket_watch),h(u,-.04,.17,2.4,1,.007);const f=new Wi;s.ornate_medieval_dagger.rotation.x=-Math.PI/2,f.add(s.ornate_medieval_dagger),h(f,-.36,.1,1.15,1.25,.012);const d=zi(s.treasure_chest,-1.7,0,-1.65,.55);e.add(d);const p=Uu(d.getObjectByName("treasure_chest_lid"),new U(0,.42,-.255)),_=new Ch(16757575,0,0,2);_.position.set(0,.36,.02),d.add(_),e.add(zi(s.wine_barrel_01,2.85,0,-5.2,.3));const g=s.wine_barrel_01.clone();e.add(zi(g,2.05,0,-5.45,1.2)),e.add(zi(s.wooden_crate_01,-2.75,0,-5.3,-.2));const m=s.wooden_crate_01.clone();e.add(zi(m,-2.7,.342,-5.28,.22)),e.add(zi(s.ceramic_pot,2.95,0,-3.4,.4));const y=zi(s.brass_candleholders,1.55,0,-5.35,-.35);e.add(y);const w=zi(s.brass_diya_lantern,-1.55,2.2,-5.55,.3,1.6);e.add(w);const b=new It(new Ah(.006,.006,1,6),new $a({color:2826518,metalness:.8,roughness:.5})),x=2.2+.381*1.6;b.scale.y=kt.height-x,b.position.set(-1.55+.008,(kt.height+x)/2,-5.55),e.add(b),e.updateMatrixWorld(!0);const M=[],E=new yi;for(const P of[y,w]){const C=[];P.traverse(N=>{const I=N;I.isMesh&&/flame/i.test(I.material.name)&&C.push(I)});for(const N of C){N.visible=!1;for(const I of QR(N)){E.copy(I);const F=E.getSize(new U),z=new Lc({width:Math.max(F.x,F.z)*1.5,height:F.y*1.5,intensity:6,halo:4});z.position.set((E.min.x+E.max.x)/2,E.min.y,(E.min.z+E.max.z)/2),e.add(z),M.push(z)}}}if(M.length){const P=new Lc({width:.001,height:.001,intensity:0,halo:0,light:{color:16747068,intensity:2.4}});P.position.set(1.55,.95,-5.1),e.add(P),M.push(P)}const v=new Lc({width:.03,height:.075,intensity:8,halo:3,light:{color:16747068,intensity:2.2,shadow:t,y:.04}});v.position.set(0,.12,0),s.wooden_lantern_01.add(v);const T=new Lc({width:.02,height:.055,intensity:7,halo:3,light:{color:16749382,intensity:.9}});T.position.set(0,.222,0),s.wooden_candlestick.add(T),e.updateMatrixWorld(!0);const A=(P,C=0)=>P.localToWorld(new U(0,C,0));return{doorLeft:o,doorRight:l,chestLid:p,chestGlow:_,lantern:v,candle:T,doorFlames:M,spots:{lantern:A(s.wooden_lantern_01,.2),chest:A(d,.35),books:A(s.book_encyclopedia_set_01,.12),compass:A(s.seadogs_compass,.03),dagger:A(f,.01)}}}function QR(r){const e=r.geometry.attributes.position,t=new U,n=[];for(let i=0;i<e.count;i++){t.fromBufferAttribute(e,i).applyMatrix4(r.matrixWorld);const s=n.find(a=>a.distanceToPoint(t)<.03);s?s.expandByPoint(t):n.push(new yi(t.clone(),t.clone()))}return n}const $g=()=>({pos:new U,target:new U,fov:40,door:0,chest:0,flash:0,veil:0}),Eo=r=>r*r*(3-2*r),Ss=(r,e)=>1-Math.exp(-r*e),Ao=new U(.12,.55,-.9),eC=new U(0,1.45,kt.minZ-.3),tC=new ke(1,.8,.6);class nC{renderer;scene=new Qy;camera=new Yn(40,1,.03,40);intro={t:1,dark:1};audio={keyI:1,flicker:.4,moonI:0,embers:0,door:0,chest:0,flash:0,glitch:0,veil:0,fireNear:.3,firePan:0};ready=!1;composer;bloom;grade;high;room;props;dust;embers;moonBeam;doorBeam;moonLight;doorLight;bounce;fog=new ep(1182471,.06);want=$g();cur=$g();moodWant=Kg(Cc.amber);mood=Kg(Cc.amber);pointer=new he;pointerS=new he;glitch=0;time=0;degraded=!1;scale=1;perf={frames:0,total:0};placed=!1;tmp=new U;constructor(e,t){this.high=t.high,this.renderer=new OA({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.toneMapping=Th,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zo,this.renderer.setClearColor(0,1),this.scene.fog=this.fog,this.scene.environmentIntensity=.14;const n=new Un(1,1,{type:yn,samples:t.high?4:0});this.composer=new wR(this.renderer,n),this.composer.addPass(new ER(this.scene,this.camera)),this.bloom=new Ja(new he(256,256),.6,.55,.92),this.composer.addPass(this.bloom),this.composer.addPass(new RR),this.grade=new Rb(DR),this.composer.addPass(this.grade),this.resize()}async load(e){const t=new pb;t.onProgress=(c,h,u)=>e(h/Math.max(u,1));const n=new Promise(c=>t.onLoad=c),i=new mb(t),s=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),a=Yg(i,"large_sandstone_blocks",s,14272429),o=Yg(i,"monastery_stone_floor",s,12562072);this.room=JR(a,o),this.scene.add(this.room.group),new vR(t).load("/sync/assets/cabin_1k.hdr",c=>{const h=new rd(this.renderer);c.mapping=Vc,this.scene.environment=h.fromEquirectangular(c).texture,c.dispose(),h.dispose()});const l=new BA(t);l.setMeshoptDecoder(xR),this.props=await ZR(l,this.scene,this.high),await n,this.buildLights(),this.buildAtmosphere(),await this.renderer.compileAsync(this.scene,this.camera),this.ready=!0}buildLights(){this.scene.add(new yM(2764864,1707784,.35)),this.bounce=new Ch(16751189,0,0,1.4),this.bounce.position.set(-.2,2.4,-1.6),this.scene.add(this.bounce);const e=this.high?1024:512;this.doorLight=new id(16767144,0,0,.62,.7,2),this.doorLight.position.set(0,2.1,kt.minZ-2.4),this.doorLight.target.position.set(0,0,-2.2),this.doorLight.castShadow=!0,this.doorLight.shadow.mapSize.set(e,e),this.doorLight.shadow.bias=-8e-4,this.doorLight.shadow.camera.near=.5,this.doorLight.shadow.camera.far=14,this.scene.add(this.doorLight,this.doorLight.target);const t=Bo.clone().sub(Ao).multiplyScalar(1.35).add(Ao);this.moonLight=new id(10205439,0,0,.2,.55,2),this.moonLight.position.copy(t),this.moonLight.target.position.copy(Ao),this.moonLight.castShadow=!0,this.moonLight.shadow.mapSize.set(e,e),this.moonLight.shadow.bias=-8e-4,this.moonLight.shadow.camera.near=1,this.moonLight.shadow.camera.far=10,this.scene.add(this.moonLight,this.moonLight.target)}buildAtmosphere(){this.moonBeam=new Xg(.16,.55,10205439),this.moonBeam.aim(Bo.clone().add(new U(.02,0,0)),Ao),this.scene.add(this.moonBeam),this.doorBeam=new Xg(.9,2.2,16767400),this.doorBeam.aim(eC,new U(0,0,-1.4)),this.scene.add(this.doorBeam),this.dust=new kR(this.high?1600:700,new yi(new U(-3.3,.05,-5.8),new U(3.3,3.8,2.5))),this.scene.add(this.dust),this.embers=new GR(this.high?520:260,new yi(new U(-1.6,0,-2.6),new U(1.8,2.6,.4))),this.scene.add(this.embers),this.resize()}get flash(){return this.cur.flash}direct(e,t,n){n=ts.clamp(n,0,1);const i=Eo(n),s=this.want;s.pos.set(...e.pos).lerp(this.tmp.set(...t.pos),i),s.target.set(...e.target).lerp(this.tmp.set(...t.target),i),s.fov=e.fov+(t.fov-e.fov)*i,s.door=(e.door??0)+((t.door??0)-(e.door??0))*Eo(Math.min(1,n*1.5)),s.chest=(e.chest??0)+((t.chest??0)-(e.chest??0))*i,s.flash=(e.flash??0)*(1-n)**3+(t.flash??0)*n**3,s.veil=(e.veil??0)+((t.veil??0)-(e.veil??0))*i,cd(this.moodWant,Cc[e.mood],Cc[t.mood],i),this.placed||(this.placed=!0,this.snap())}snap(){const e=this.want;Object.assign(this.cur,{fov:e.fov,door:e.door,chest:e.chest,flash:e.flash,veil:e.veil}),this.cur.pos.copy(e.pos),this.cur.target.copy(e.target),cd(this.mood,this.moodWant,this.moodWant,0)}setPointer(e,t){this.pointer.set(e,t)}pulse(e=1){this.glitch=Math.max(this.glitch,e)}resize(){const e=window.innerWidth,t=window.innerHeight,n=Math.min(window.devicePixelRatio,this.high?1.5:1)*this.scale;this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.grade.uniforms.uRes.value.set(e*n,t*n);const i=FR(this.camera,t*n);this.dust&&(this.dust.uniforms.uScale.value=i),this.embers&&(this.embers.uniforms.uScale.value=i)}degrade(){this.degraded=!0;for(const e of[this.composer.renderTarget1,this.composer.renderTarget2])e.samples=0,e.dispose();this.props.lantern.light&&(this.props.lantern.light.castShadow=!1),this.moonLight.castShadow=!1}watchFrameRate(e){if(e>.2||this.intro.dark>.5)return;const t=this.perf;if(t.frames++,t.total+=e,t.total<1.2)return;const n=t.total/t.frames;t.frames=0,t.total=0,n>1/38&&this.scale>.5&&(this.degraded||this.degrade(),this.scale=Math.max(.5,this.scale*.8),this.resize())}tick(e){if(!this.ready)return;this.watchFrameRate(e),e=Math.min(e,.1),this.time+=e;const t=this.time,n=this.cur,i=this.want,s=this.mood,a=Ss(e,3.2);n.pos.lerp(i.pos,a),n.target.lerp(i.target,a),n.fov+=(i.fov-n.fov)*a,n.door+=(i.door-n.door)*Ss(e,2.4),n.chest+=(i.chest-n.chest)*Ss(e,2.6),n.flash+=(i.flash-n.flash)*Ss(e,6),n.veil+=(i.veil-n.veil)*Ss(e,5),NR(s,this.moodWant,Ss(e,2.2)),this.pointerS.lerp(this.pointer,Ss(e,2.5)),this.glitch*=Math.exp(-e*3.5);const o=Eo(this.intro.t),l=this.camera,c=this.pointerS;l.position.copy(n.pos),l.position.x+=c.x*.09+Math.sin(t*.43)*.008+o*.4,l.position.y+=-c.y*.05+Math.sin(t*.61+1.3)*.006+o*.55,l.position.z+=Math.sin(t*.37+2.1)*.006+o*3.4,this.tmp.copy(n.target),this.tmp.x+=c.x*.18,this.tmp.y+=-c.y*.1+o*.2,l.lookAt(this.tmp),l.rotateZ(Math.sin(t*.29)*.0035-c.x*.006);const h=(n.fov+o*8)*(1+Math.max(0,1-l.aspect)*.6);Math.abs(l.fov-h)>.001&&(l.fov=h,l.updateProjectionMatrix());const u=Eo(ts.clamp(n.door,0,1));this.props.doorLeft.rotation.y=-u*1.35,this.props.doorRight.rotation.y=u*1.42;const f=Eo(ts.clamp(n.chest,0,1));this.props.chestLid.rotation.x=-f*1.25,this.props.chestGlow.intensity=f*2.2*(.9+.1*Math.sin(t*3)),this.props.lantern.update(t,s.keyI,s.flicker,s.key),this.props.candle.update(t,s.keyI,s.flicker,s.key);for(const m of this.props.doorFlames)m.update(t,.35+s.keyI*.65,s.flicker);this.bounce.color.copy(s.key),this.bounce.intensity=s.keyI*1.6*(.94+.06*Math.sin(t*6.1)),this.room.beyond.color.copy(s.door).multiplyScalar(4*s.doorI*(.3+u*.25)),this.room.spill.uIntensity.value=s.doorI*(.55*(1-u)+u*.2),this.room.spill.uColor.value.copy(s.door),this.room.spill.uTime.value=t,this.doorLight.color.copy(s.door),this.doorLight.intensity=s.doorI*(2+u*90),this.doorBeam.uniforms.uIntensity.value=u*s.doorI*.2,this.doorBeam.visible=u>.002,this.doorBeam.uniforms.uColor.value.copy(s.door),this.doorBeam.uniforms.uTime.value=t,this.moonLight.intensity=s.moonI*40,this.room.window.uIntensity.value=.06+s.moonI*3.2,this.moonBeam.uniforms.uIntensity.value=s.moonI*.5,this.moonBeam.visible=s.moonI>.002,this.moonBeam.uniforms.uTime.value=t,this.fog.color.copy(s.fog),this.fog.density=s.fogD;const d=this.dust.uniforms;d.uTime.value=t,d.uAmount.value=s.dust,this.props.lantern.getWorldPosition(d.uLamp.value),d.uLampI.value=s.keyI,d.uColor.value.copy(s.key).lerp(tC,.4),d.uBeamO.value.copy(Bo),d.uBeamD.value.copy(Ao).sub(Bo).normalize(),d.uBeamI.value=s.moonI,this.embers.uniforms.uTime.value=t,this.embers.uniforms.uAmount.value=s.embers,this.renderer.toneMappingExposure=s.exposure*(1-this.intro.dark);const p=this.grade.uniforms;p.uTime.value=t,p.uTint.value.copy(s.tint),p.uLift.value.copy(s.lift),p.uSat.value=s.sat,p.uContrast.value=s.contrast,p.uGlitch.value=this.glitch<.01?0:this.glitch,p.uFlash.value=n.flash<.002?0:n.flash,p.uVeil.value=n.veil,this.composer.render(e);const _=this.audio;this.props.lantern.getWorldPosition(this.tmp).applyMatrix4(l.matrixWorldInverse);const g=this.tmp.lengthSq();_.fireNear=1/(1+g*.6),_.firePan=ts.clamp(this.tmp.x/Math.max(.4,-this.tmp.z),-1,1),_.keyI=s.keyI,_.flicker=s.flicker,_.moonI=s.moonI,_.embers=s.embers,_.door=u,_.chest=f,_.flash=n.flash,_.glitch=this.glitch,_.veil=n.veil}}rt.registerPlugin(nt,Il);const ss=matchMedia("(prefers-reduced-motion: reduce)").matches,iC=matchMedia("(pointer: coarse)").matches,an=(r,e=document)=>e.querySelector(r),Nr=(r,e=document)=>Array.from(e.querySelectorAll(r));"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);document.body.classList.add("is-loading");const hr=new nC(an("#webgl"),{high:!iC&&window.innerWidth>900}),io=new Cx(hr);io.update(0);let Us=null;ss||(Us=new Rx({lerp:.09,wheelMultiplier:.9}),Us.on("scroll",nt.update),Us.stop());rt.ticker.lagSmoothing(0);rt.ticker.add((r,e)=>{Us?.raf(r*1e3),io.update(window.scrollY),hr.tick(e/1e3),jn.update(hr.audio),lC.style.opacity=String(Math.min(Math.max((hr.flash-.55)/.35,0),1)),cC(),dC()});const Cb=r=>{Us?Us.scrollTo(r,{duration:2,easing:e=>1-Math.pow(1-e,4)}):typeof r=="number"?window.scrollTo({top:r}):(typeof r=="string"?an(r):r).scrollIntoView()};Nr("[data-scroll-to]").forEach(r=>r.addEventListener("click",e=>{const t=r.getAttribute("href");t?.startsWith("#")&&(e.preventDefault(),Cb(t==="#top"?0:t))}));window.addEventListener("pointermove",r=>{hr.setPointer(r.clientX/window.innerWidth*2-1,r.clientY/window.innerHeight*2-1)});let Zg=0;window.addEventListener("resize",()=>{hr.resize(),clearTimeout(Zg),Zg=window.setTimeout(()=>{nt.refresh(),io.measure()},200)});nt.addEventListener("refresh",()=>io.measure());const rC=an(".hud__fill"),sC=an(".hud__pct"),Qg=an(".hud__where"),aC=an(".hud__coords"),oC=an(".nav"),lC=an(".sync__text");let e0=-1,Ou=0;function cC(){const r=document.documentElement.scrollHeight-window.innerHeight,e=window.scrollY,t=r>0?e/r:0,n=Math.round(t*100);n!==e0&&(e0=n,rC.style.transform=`scaleX(${t})`,sC.textContent=`${String(n).padStart(3,"0")}%`),Math.abs(e-Ou)>4&&(oC.classList.toggle("is-hidden",e>Ou&&e>200),Ou=e)}const hC=an(".hud");io.onChange=(r,e)=>{hC.classList.toggle("is-off",r.dataset.hud==="off"),r.dataset.where&&r.dataset.where!==Qg.textContent&&(mm(Qg,r.dataset.where),mm(aC,r.dataset.coords??"",1.1)),e&&!ss&&ff[r.dataset.shot]?.mood!==ff[e.dataset.shot]?.mood&&hr.pulse(.85)};const Pb="sync-sound",dp=r=>{try{localStorage.setItem(Pb,r?"on":"off")}catch{}},uC=()=>{try{return localStorage.getItem(Pb)}catch{return null}},bh=an(".sound-toggle"),fC=an(".sound-toggle__label"),t0=Nr(".sound-toggle .meter i"),Dc=[0,0,0,0];jn.onChange(r=>{bh.setAttribute("aria-pressed",String(r)),fC.textContent=r?"Sound on":"Sound off",bh.setAttribute("aria-label",r?"Turn sound off":"Turn sound on")});bh.setAttribute("aria-label","Turn sound on");bh.addEventListener("click",()=>{jn.toggle(),dp(jn.enabled)});window.addEventListener("keydown",r=>{r.key.toLowerCase()!=="m"||r.metaKey||r.ctrlKey||r.altKey||r.target.closest("input, textarea, select")||(jn.toggle(),dp(jn.enabled))});function dC(){if(!jn.enabled){Dc[0]!==-1&&(t0.forEach(r=>r.style.transform=""),Dc[0]=-1);return}jn.bands(Dc),t0.forEach((r,e)=>r.style.transform=`scaleY(${.15+Math.min(Dc[e]*1.6,.85)})`)}document.addEventListener("click",r=>{r.target.closest(".gate, .sound-toggle")||r.target.closest("a, button, summary")&&jn.click()});function pC(){return new Promise(r=>{const e=an(".gate");e.hidden=!1,rt.from(e.children,{opacity:0,y:14,duration:.8,ease:"expo.out",stagger:.08}),an(uC()==="off"?".gate__off":".gate__on").focus({preventScroll:!0});const t=n=>{Nr("button",e).forEach(i=>i.disabled=!0),dp(n),n&&(jn.enable(),jn.enter()),r()};an(".gate__on",e).addEventListener("click",()=>t(!0),{once:!0}),an(".gate__off",e).addEventListener("click",()=>t(!1),{once:!0})})}async function mC(){const r=an(".loader__pct"),e=an(".loader__bar span"),t={v:0},n=()=>{r.textContent=String(Math.round(t.v)).padStart(3,"0"),e.style.transform=`scaleX(${t.v/100})`};rt.set(".loader__diamond",{strokeDasharray:290,strokeDashoffset:290}),rt.set(".loader__key",{strokeDasharray:120,strokeDashoffset:120}),rt.timeline().to(".loader__diamond",{strokeDashoffset:0,duration:1.6,ease:"power2.inOut"}).to(".loader__key",{strokeDashoffset:0,duration:1.2,ease:"power2.inOut"},.5).to(".loader__log li",{opacity:1,duration:.3,stagger:.55},.3),await Promise.all([hr.load(s=>rt.to(t,{v:s*96,duration:.5,overwrite:!0,onUpdate:n})),document.fonts.ready]),await rt.to(t,{v:100,duration:.4,ease:"power2.out",onUpdate:n}),_C(),bC(),await pC(),rt.timeline({defaults:{ease:"expo.inOut"}}).to(".loader__center",{scale:.92,opacity:0,duration:.7,ease:"power2.in"}).to(".loader__log, .loader__note",{opacity:0,duration:.4},0).to(".loader",{clipPath:"inset(0% 0% 100% 0%)",duration:1.3},.45).set(".loader",{display:"none"}).to(hr.intro,{dark:0,duration:ss?.4:1.6,ease:"power2.out"},.5).to(hr.intro,{t:0,duration:ss?.01:3.4,ease:"power3.inOut"},.5).add(()=>{document.body.classList.remove("is-loading"),Us?.start()},1.4).add(gC(),1)}function gC(){const r=rt.timeline(),e=Il.create(".hero__title .line",{type:"chars"}).chars;return r.from(e,{yPercent:110,rotate:8,duration:1.4,ease:"expo.out",stagger:.035}).from(".hero .reveal-up",{y:26,opacity:0,duration:1,ease:"power3.out",stagger:.12},.4).from(".nav > *",{y:-30,opacity:0,duration:1,ease:"power3.out",stagger:.08},.5).from(".hud > *",{opacity:0,duration:1.2,stagger:.15},.8).from(".hero__scroll",{opacity:0,duration:1},1.2),r}function _C(){Nr(".split").forEach(r=>{const e=Il.create(r,{type:"lines",mask:"lines",linesClass:"line"});ss||rt.from(e.lines,{yPercent:115,duration:1.3,ease:"expo.out",stagger:.09,scrollTrigger:{trigger:r.closest(".room")??r,start:r.closest(".room")?"top 45%":"top 82%",toggleActions:"play none none reverse"}})}),Nr(".pips").forEach(r=>{r.innerHTML=Array.from({length:5},()=>"<i></i>").join("")})}function bC(){const r=Il.create("[data-words]",{type:"words",wordsClass:"word"}).words;rt.to(r,{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:".idea",start:"top 35%",end:"45% 50%",scrub:ss?!1:.6}}),rt.from(".pillar",{y:50,opacity:0,duration:1.1,ease:"power3.out",stagger:.12,scrollTrigger:{trigger:".pillars",start:"top 85%"}});const e=an(".marquee__track"),t=rt.to(e,{xPercent:-50,duration:26,ease:"none",repeat:-1});if(ss)t.pause();else{const i=rt.quickTo(e,"skewX",{duration:.5,ease:"power3.out"});nt.create({trigger:".marquee",start:"top bottom",end:"bottom top",onUpdate:s=>{const a=s.getVelocity();t.timeScale(1+Math.min(Math.abs(a)/400,5)),i(Math.max(Math.min(a/-300,8),-8)),rt.to(t,{timeScale:1,duration:1.2,overwrite:!0,delay:.1})}})}Nr(".room").forEach(i=>{rt.timeline({scrollTrigger:{trigger:i,start:"top 45%",toggleActions:"play none none reverse"}}).from(i.querySelector(".room__index"),{opacity:0,y:20,duration:.8,ease:"power3.out"}).from(i.querySelector(".room__story"),{opacity:0,y:24,duration:1,ease:"power3.out"},.25).from(i.querySelectorAll(".room__meta li"),{opacity:0,y:16,duration:.7,stagger:.08,ease:"power3.out"},.4).to(Array.from(i.querySelectorAll(".pips i")).slice(0,Number(i.querySelector(".pips")?.dataset.level??0)),{backgroundColor:"#d6262c",duration:.25,stagger:.12},.7).from(i.querySelector(".btn"),{opacity:0,y:16,duration:.8,ease:"power3.out"},.7)}),rt.from(".door__note",{opacity:0,y:30,duration:1,ease:"power3.out",scrollTrigger:{trigger:".door",start:"top 30%"}});const n=an(".steps__line path");rt.fromTo(n,{strokeDasharray:1e3,strokeDashoffset:1e3},{strokeDashoffset:0,ease:"none",scrollTrigger:{trigger:".steps",start:"top 80%",end:"top 30%",scrub:ss?!1:.8}}),rt.from(".step",{y:50,opacity:0,duration:1,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:".steps",start:"top 80%"}}),rt.from(".booker",{y:60,opacity:0,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:".book",start:"top 70%"}}),rt.from(".board tbody tr",{x:-30,opacity:0,duration:.8,stagger:.08,ease:"power3.out",scrollTrigger:{trigger:".board",start:"top 80%"}}),Nr("[data-time]").forEach(i=>{const[s,a]=i.dataset.time.split(":").map(Number),o=s*60+a,l={v:0};rt.to(l,{v:o,duration:1.8,ease:"power3.out",scrollTrigger:{trigger:".board",start:"top 80%"},onUpdate:()=>{const c=Math.round(l.v);i.textContent=`${String(Math.floor(c/60)).padStart(2,"0")}:${String(c%60).padStart(2,"0")}`}})}),rt.from(".faq details",{y:30,opacity:0,duration:.9,stagger:.07,ease:"power3.out",scrollTrigger:{trigger:".faq",start:"top 80%"}}),rt.from(".final .label, .final .btn",{opacity:0,y:24,duration:1,stagger:.2,ease:"power3.out",scrollTrigger:{trigger:".final",start:"top 40%"}}),rt.from(".footer__mark",{yPercent:40,opacity:0,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:".footer",start:"top 85%"}}),nt.refresh(),io.measure()}Nr(".faq details").forEach(r=>{const e=r.querySelector(":scope > div");r.querySelector("summary").addEventListener("click",t=>{t.preventDefault(),r.open?rt.to(e,{height:0,duration:.5,ease:"power3.inOut",onComplete:()=>r.removeAttribute("open")}):(r.setAttribute("open",""),rt.fromTo(e,{height:0},{height:"auto",duration:.6,ease:"power3.out"}))})});const vC=Fx(an(".booker"),{onPick:()=>jn.tick(),onSubmit:r=>r?jn.confirm():jn.deny()});Nr("[data-room]").forEach(r=>r.addEventListener("click",e=>{e.preventDefault(),vC.select(r.dataset.room),Cb("#book")}));Ux(()=>jn.hover());Ox();mC();
