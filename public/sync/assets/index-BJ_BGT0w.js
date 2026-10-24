(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function vr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Yg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var gi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},nl={duration:.5,overwrite:!1,delay:0},rd,wn,Bt,Ci=1e8,Pt=1/Ci,Du=Math.PI*2,yb=Du/4,Mb=0,Jg=Math.sqrt,Tb=Math.cos,wb=Math.sin,Mn=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},Rr=function(e){return typeof e=="number"},sd=function(e){return typeof e>"u"},lr=function(e){return typeof e=="object"},$n=function(e){return e!==!1},ad=function(){return typeof window<"u"},Dl=function(e){return qt(e)||Mn(e)},jg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,Eb=/random\([^)]+\)/g,Ab=/,\s*/g,dp=/(?:-?\.?\d|\.)+/gi,$g=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zg=/[+-]=-?[.\d]+/,Rb=/[^,'"\[\]\s]+/gi,Cb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,ji,Nu,od,_i={},Kc={},Qg,e_=function(e){return(Kc=Ua(e,_i))&&ni},ld=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},il=function(e,t){return!t&&console.warn(e)},t_=function(e,t){return e&&(_i[e]=t)&&Kc&&(Kc[e]=t)||_i},rl=function(){return 0},Pb={suppressEvents:!0,isStart:!0,kill:!1},Cc={suppressEvents:!0,kill:!1},Lb={suppressEvents:!0},cd={},Zr=[],Iu={},n_,ci={},Ch={},pp=30,Pc=[],hd="",ud=function(e){var t=e[0],n,i;if(lr(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Pc.length;i--&&!Pc[i].targetTest(t););n=Pc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new T_(e[i],n)))||e.splice(i,1);return e},Ts=function(e){return e._gsap||ud(Pi(e))[0]._gsap},i_=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():sd(n)&&e.getAttribute&&e.getAttribute(t)||n},Zn=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},Ea=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Db=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Yc=function(){var e=Zr.length,t=Zr.slice(0),n,i;for(Iu={},Zr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},fd=function(e){return!!(e._initted||e._startAt||e.add)},r_=function(e,t,n,i){Zr.length&&!wn&&Yc(),e.render(t,n,!!(wn&&t<0&&fd(e))),Zr.length&&!wn&&Yc()},s_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Rb).length<2?t:Mn(e)?e.trim():e},a_=function(e){return e},bi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Nb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ua=function(e,t){for(var n in t)e[n]=t[n];return e},mp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=lr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Jc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Oo=function(e){var t=e.parent||Ht,n=e.keyframes?Nb(In(e.keyframes)):bi;if($n(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ib=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},o_=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},mh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ns=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ws=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Fb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Fu=function(e,t,n,i){return e._startAt&&(wn?e._startAt.revert(Cc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Ub=function r(e){return!e||e._ts&&r(e.parent)},gp=function(e){return e._repeat?Oa(e._tTime,e=e.duration()+e._rDelay)*e:0},Oa=function(e,t){var n=Math.floor(e=Gt(e/t));return e&&n===e?n-1:n},jc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gh=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},_h=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gh(e),n._dirty||ws(n,e)),e},l_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=jc(e.rawTime(),t),(!t._dur||Cl(0,t.totalDuration(),n)-t._tTime>Pt)&&t.render(n,!0)),ws(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Pt}},Qi=function(e,t,n,i){return t.parent&&ns(t),t._start=Gt((Rr(n)?n:n||e!==Ht?Mi(e,n,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),o_(e,t,"_first","_last",e._sort?"_start":0),Uu(t)||(e._recent=t),i||l_(e,t),e._ts<0&&_h(e,e._tTime),e},c_=function(e,t){return(_i.ScrollTrigger||ld("scrollTrigger",t))&&_i.ScrollTrigger.create(t,e)},h_=function(e,t,n,i,s){if(pd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!wn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&n_!==ui.frame)return Zr.push(e),e._lazy=[s,i],1},Ob=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Uu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},kb=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Ob(e)&&!(!e._initted&&Uu(e))||(e._ts<0||e._dp._ts<0)&&!Uu(e))?0:1,o=e._rDelay,l=0,c,h,f;if(o&&e._repeat&&(l=Cl(0,e._tDur,t),h=Oa(l,o),e._yoyo&&h&1&&(a=1-a),h!==Oa(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||wn||i||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&h_(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Pt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Fu(e,t,n,!0),e._onUpdate&&!n&&pi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&pi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ns(e,1),!n&&!wn&&(pi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Bb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ka=function(e,t,n,i){var s=e._repeat,a=Gt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Gt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&_h(e,e._tTime=e._tDur*o),e.parent&&gh(e),n||ws(e.parent,e),e},_p=function(e){return e instanceof Jn?ws(e):ka(e,e._dur)},zb={_start:0,endTime:rl,totalDuration:rl},Mi=function r(e,t,n){var i=e.labels,s=e._recent||zb,a=e.duration()>=Ci?s.endTime(!1):e._dur,o,l,c;return Mn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(In(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ko=function(e,t,n){var i=Rr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;a.immediateRender=$n(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new sn(t[0],a,t[s+1])},ls=function(e,t){return e||e===0?t(e):t},Cl=function(e,t,n){return n<e?e:n>t?t:n},Dn=function(e,t){return!Mn(e)||!(t=Cb.exec(e))?"":t[1]},Gb=function(e,t,n){return ls(n,function(i){return Cl(e,t,i)})},Ou=[].slice,u_=function(e,t){return e&&lr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&lr(e[0]))&&!e.nodeType&&e!==ji},Hb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Mn(i)&&!t||u_(i,1)?(s=n).push.apply(s,Pi(i)):n.push(i)})||n},Pi=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):Mn(e)&&!n&&(Nu||!Ba())?Ou.call((t||od).querySelectorAll(e),0):In(e)?Hb(e,n):u_(e)?Ou.call(e,0):e?[e]:[]},ku=function(e){return e=Pi(e)[0]||il("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Pi(t,n.querySelectorAll?n:n===e?il("Invalid scope")||od.createElement("div"):e)}},f_=function(e){return e.sort(function(){return .5-Math.random()})},d_=function(e){if(qt(e))return e;var t=lr(e)?e:{each:e},n=Es(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,f=i;return Mn(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],f=i[1]),function(u,d,p){var _=(p||t).length,g=a[_],m,S,M,b,x,w,E,v,T;if(!g){if(T=t.grid==="auto"?0:(t.grid||[1,Ci])[1],!T){for(E=-Ci;E<(E=p[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(g=a[_]=[],m=l?Math.min(T,_)*h-.5:i%T,S=T===Ci?0:l?_*f/T-.5:i/T|0,E=0,v=Ci,w=0;w<_;w++)M=w%T-m,b=S-(w/T|0),g[w]=x=c?Math.abs(c==="y"?b:M):Jg(M*M+b*b),x>E&&(E=x),x<v&&(v=x);i==="random"&&f_(g),g.max=E-v,g.min=v,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=Dn(t.amount||t.each)||0,n=n&&_<0?tv(n):n}return _=(g[u]-g.min)/g.max||0,Gt(g.b+(n?n(_):_)*g.v)+g.u}},Bu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Gt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Rr(n)?0:Dn(n))}},p_=function(e,t){var n=In(e),i,s;return!n&&lr(e)&&(i=n=e.radius||Ci,e.values?(e=Pi(e.values),(s=!Rr(e[0]))&&(i*=i)):e=Bu(e.increment)),ls(t,n?qt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ci,h=0,f=e.length,u,d;f--;)s?(u=e[f].x-o,d=e[f].y-l,u=u*u+d*d):u=Math.abs(e[f]-o),u<c&&(c=u,h=f);return h=!i||c<=i?e[h]:a,s||h===a||Rr(a)?h:h+Dn(a)}:Bu(e))},m_=function(e,t,n,i){return ls(In(e)?!t:n===!0?!!(n=0):!i,function(){return In(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Vb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Wb=function(e,t){return function(n){return e(parseFloat(n))+(t||Dn(n))}},Xb=function(e,t,n){return __(e,t,0,1,n)},g_=function(e,t,n){return ls(n,function(i){return e[~~t(i)]})},qb=function r(e,t,n){var i=t-e;return In(e)?g_(e,r(0,e.length),t):ls(n,function(s){return(i+(s-e)%i)%i+e})},Kb=function r(e,t,n){var i=t-e,s=i*2;return In(e)?g_(e,r(0,e.length-1),t):ls(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},sl=function(e){return e.replace(Eb,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Ab);return m_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},__=function(e,t,n,i,s){var a=t-e,o=i-n;return ls(s,function(l){return n+((l-e)/a*o||0)})},Yb=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Mn(e),o={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(h=[],f=e.length,u=f-2,c=1;c<f;c++)h.push(r(e[c-1],e[c]));f--,s=function(p){p*=f;var _=Math.min(u,~~p);return h[_](p-_)},n=t}else i||(e=Ua(In(e)?[]:{},e));if(!h){for(l in t)dd.call(o,e,l,"get",t[l]);s=function(p){return _d(p,o)||(a?e.p:e)}}}return ls(n,s)},bp=function(e,t,n){var i=e.labels,s=Ci,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},pi=function(e,t,n){var i=e.vars,s=i[t],a=Bt,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Zr.length&&Yc(),o&&(Bt=o),h=l?s.apply(c,l):s.call(c),Bt=a,h},wo=function(e){return ns(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wn),e.progress()<1&&pi(e,"onInterrupt"),e},ya,b_=[],v_=function(e){if(e)if(e=!e.name&&e.default||e,ad()||e.headless){var t=e.name,n=qt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:rl,render:_d,add:dd,kill:uv,modifier:hv,rawVars:0},a={targetTest:0,get:0,getSetter:gd,aliases:{},register:0};if(Ba(),e!==i){if(ci[t])return;bi(i,bi(Jc(e,s),a)),Ua(i.prototype,Ua(s,Jc(e,a))),ci[i.prop=t]=i,e.targetTest&&(Pc.push(i),cd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}t_(t,i),e.register&&e.register(ni,i,Qn)}else b_.push(e)},Ct=255,Eo={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},Ph=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ct+.5|0},x_=function(e,t,n){var i=e?Rr(e)?[e>>16,e>>8&Ct,e&Ct]:0:Eo.black,s,a,o,l,c,h,f,u,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Eo[e])i=Eo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ct,i&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(dp),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Ph(l+1/3,s,a),i[1]=Ph(l,s,a),i[2]=Ph(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match($g),n&&i.length<4&&(i[3]=1),i}else i=e.match(dp)||Eo.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Ct,a=i[1]/Ct,o=i[2]/Ct,f=Math.max(s,a,o),u=Math.min(s,a,o),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},S_=function(e){var t=[],n=[],i=-1;return e.split(Qr).forEach(function(s){var a=s.match(Sa)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},vp=function(e,t,n){var i="",s=(e+i).match(Qr),a=t?"hsla(":"rgba(",o=0,l,c,h,f;if(!s)return e;if(s=s.map(function(u){return(u=x_(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=S_(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Qr,"1").split(Sa),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Qr),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},Qr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Eo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Jb=/hsl[a]?\(/,y_=function(e){var t=e.join(" "),n;if(Qr.lastIndex=0,Qr.test(t))return n=Jb.test(t),e[1]=vp(e[1],n),e[0]=vp(e[0],n,S_(e[1])),!0},al,ui=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,f,u,d,p=function _(g){var m=r()-i,S=g===!0,M,b,x,w;if((m>e||m<0)&&(n+=m-t),i+=m,x=i-n,M=x-a,(M>0||S)&&(w=++f.frame,u=x-f.time*1e3,f.time=x=x/1e3,a+=M+(M>=s?4:s-M),b=1),S||(l=c(_)),b)for(d=0;d<o.length;d++)o[d](x,u,w,g)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return u/(1e3/(g||60))},wake:function(){Qg&&(!Nu&&ad()&&(ji=Nu=window,od=ji.document||{},_i.gsap=ni,(ji.gsapVersions||(ji.gsapVersions=[])).push(ni.version),e_(Kc||ji.GreenSockGlobals||!ji.gsap&&ji||{}),b_.forEach(v_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(g){return setTimeout(g,a-f.time*1e3+1|0)},al=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),al=0,c=rl},lagSmoothing:function(g,m){e=g||1/0,t=Math.min(m||33,e)},fps:function(g){s=1e3/(g||240),a=f.time*1e3+s},add:function(g,m,S){var M=m?function(b,x,w,E){g(b,x,w,E),f.remove(M)}:g;return f.remove(g),o[S?"unshift":"push"](M),Ba(),M},remove:function(g,m){~(m=o.indexOf(g))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f})(),Ba=function(){return!al&&ui.wake()},_t={},jb=/^[\d.\-M][\d.\-,\s]/,$b=/["']/g,Zb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace($b,"").trim():+c,i=l.substr(o+1).trim();return t},Qb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ev=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Zb(t[1])]:Qb(e).split(",").map(s_)):_t._CE&&jb.test(e)?_t._CE("",e):n},tv=function(e){return function(t){return 1-e(1-t)}},Es=function(e,t){return e&&(qt(e)?e:_t[e]||ev(e))||t},Gs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Zn(e,function(o){_t[o]=_i[o]=s,_t[a=o.toLowerCase()]=n;for(var l in s)_t[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[o+"."+l]=s[l]}),s},M_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Lh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Du*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*wb((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:M_(o);return s=Du/s,l.config=function(c,h){return r(e,c,h)},l},Dh=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:M_(n);return i.config=function(s){return r(e,s)},i};Zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Gs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;Gs("Elastic",Lh("in"),Lh("out"),Lh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Gs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Gs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Gs("Circ",function(r){return-(Jg(1-r*r)-1)});Gs("Sine",function(r){return r===1?1:-Tb(r*yb)+1});Gs("Back",Dh("in"),Dh("out"),Dh());_t.SteppedEase=_t.steps=_i.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Pt;return function(o){return((i*Cl(0,a,o)|0)+s)*n}}};nl.ease=_t["quad.out"];Zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return hd+=r+","+r+"Params,"});var T_=function(e,t){this.id=Mb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:i_,this.set=t?t.getSetter:gd},ol=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ka(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),al||ui.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ka(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ba(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(_h(this,n),!s._dp||s.parent||l_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Qi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),r_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Oa(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?jc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pt?0:this._rts,this.totalTime(Cl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),gh(this),Fb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ba(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Gt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Qi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Lb);var i=wn;return wn=n,fd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_p(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,_p(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Mi(this,n),$n(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-Pt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Pt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=qt(n)?n:a_,l=function(){var h=i.then;i.then=null,s&&s(),qt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){wo(this)},r})();bi(ol.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var Jn=(function(r){Yg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=$n(n.sortChildren),Ht&&Qi(n.parent||Ht,vr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&c_(vr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ko(0,arguments,this),this},t.from=function(i,s,a){return ko(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ko(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Oo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new sn(i,s,Mi(this,a),1),this},t.call=function(i,s,a){return Qi(this,sn.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new sn(i,a,Mi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Oo(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,f){return o.startAt=a,Oo(o).immediateRender=$n(o.immediateRender),this.staggerTo(i,s,o,l,c,h,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Gt(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,p,_,g,m,S,M,b,x,w,E;if(this!==Ht&&h>l&&i>=0&&(h=l),h!==this._tTime||a||f){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,b=this._start,M=this._ts,m=!M,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,a);if(u=Gt(h%g),h===l?(_=this._repeat,u=c):(x=Gt(h/g),_=~~x,_&&_===x&&(u=c,_--),u>c&&(u=c)),x=Oa(this._tTime,g),!o&&this._tTime&&x!==_&&this._tTime-x*g-this._dur<=0&&(x=_),w&&_&1&&(u=c-u,E=1),_!==x&&!this._lock){var v=w&&x&1,T=v===(w&&_&1);if(_<x&&(v=!v),o=v?0:h%c?c:h,this._lock=1,this.render(o||(E?0:Gt(_*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&pi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,x=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Bb(this,Gt(o),Gt(u)),S&&(h-=u-(u=S._start))),this._tTime=h,this._time=u,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!x&&(pi(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||u>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,a),u!==this._time||!this._ts&&!m){S=0,p&&(h+=this._zTime=-Pt);break}}d=p}else{d=this._last;for(var R=i<0?i:u;d;){if(p=d._prev,(d._act||R<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,s,a||wn&&fd(d)),u!==this._time||!this._ts&&!m){S=0,p&&(h+=this._zTime=R?-Pt:Pt);break}}d=p}}if(S&&!s&&(this.pause(),S.render(u>=o?0:-Pt)._zTime=u>=o?1:-1,this._ts))return this._start=b,gh(this),this.render(i,s,a);this._onUpdate&&!s&&pi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(b===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ns(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(pi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Rr(s)||(s=Mi(this,s,i)),!(i instanceof ol)){if(In(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Mn(i))return this.addLabel(i,s);if(qt(i))i=sn.delayedCall(0,i);else return this}return this!==i?Qi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ci);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof sn?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Mn(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(i.parent===this&&mh(this,i),i===this._recent&&(this._recent=this._last),ws(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(ui.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Mi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=sn.delayedCall(0,s||rl,a);return o.data="isPause",this._hasPause=1,Qi(this,o,Mi(this,i))},t.removePause=function(i){var s=this._first;for(i=Mi(this,i);s;)s._start===i&&s.data==="isPause"&&ns(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Kr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Pi(i),l=this._first,c=Rr(s),h;l;)l instanceof sn?Db(l._targets,o)&&(c?(!Kr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Mi(a,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,p=sn.to(a,bi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Pt,onStart:function(){if(a.pause(),!d){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==g&&ka(p,g,0,1).render(p._time,!0,!0),d=1}h&&h.apply(p,f||[])}},s));return u?p.render(0):p},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,bi({startAt:{time:Mi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),bp(this,Mi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),bp(this,Mi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Gt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return ws(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ws(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Ci,c,h,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Qi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Gt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ka(a,a===Ht&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ht._ts&&(r_(Ht,jc(i,Ht)),n_=ui.frame),ui.frame>=pp){pp+=gi.autoSleep||120;var s=Ht._first;if((!s||!s._ts)&&gi.autoSleep&&ui._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ui.sleep()}}},e})(ol);bi(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var nv=function(e,t,n,i,s,a,o){var l=new Qn(this._pt,e,t,0,1,P_,null,s),c=0,h=0,f,u,d,p,_,g,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=sl(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),u=n.match(Rh)||[];f=Rh.exec(i);)p=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==u[h++]&&(g=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:g,c:p.charAt(1)==="="?Ea(g,p)-g:parseFloat(p)-g,m:d&&d<4?Math.round:0},c=Rh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Zg.test(i)||m)&&(l.e=0),this._pt=l,l},dd=function(e,t,n,i,s,a,o,l,c,h){qt(i)&&(i=i(s||0,e,a));var f=e[t],u=n!=="get"?n:qt(f)?c?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=qt(f)?c?ov:R_:md,p;if(Mn(i)&&(~i.indexOf("random(")&&(i=sl(i)),i.charAt(1)==="="&&(p=Ea(u,i)+(Dn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||zu)return!isNaN(u*i)&&i!==""?(p=new Qn(this._pt,e,t,+u||0,i-(u||0),typeof f=="boolean"?cv:C_,0,d),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!f&&!(t in e)&&ld(t,i),nv.call(this,e,t,u,i,d,l||gi.stringFilter,c))},iv=function(e,t,n,i,s){if(qt(e)&&(e=Bo(e,s,t,n,i)),!lr(e)||e.style&&e.nodeType||In(e)||jg(e))return Mn(e)?Bo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Bo(e[o],s,t,n,i);return a},w_=function(e,t,n,i,s,a){var o,l,c,h;if(ci[e]&&(o=new ci[e]).init(s,o.rawVars?t[e]:iv(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Qn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ya))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Kr,zu,pd=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,g=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:g,M=e._overwrite==="auto"&&!rd,b=e.timeline,x=i.easeReverse||f,w,E,v,T,R,L,P,I,N,F,z,B,$;if(b&&(!u||!s)&&(s="none"),e._ease=Es(s,nl.ease),e._rEase=x&&(Es(x)||e._ease),e._from=!b&&!!i.runBackwards,e._from&&(e.ratio=1),!b||u&&!i.stagger){if(I=g[0]?Ts(g[0]).harness:0,B=I&&i[I.prop],w=Jc(i,cd),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&p?Cc:Pb),_._lazy=0),a){if(ns(e._startAt=sn.set(g,bi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return pi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn||!o&&!d)&&e._startAt.revert(Cc),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(o=!1),v=bi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&$n(l),immediateRender:o,stagger:0,parent:m},w),B&&(v[I.prop]=B),ns(e._startAt=sn.set(g,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn?e._startAt.revert(Cc):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&$n(l)||l&&!p,E=0;E<g.length;E++){if(R=g[E],P=R._gsap||ud(g)[E]._gsap,e._ptLookup[E]=F={},Iu[P.id]&&Zr.length&&Yc(),z=S===g?E:S.indexOf(R),I&&(N=new I).init(R,B||w,e,z,S)!==!1&&(e._pt=T=new Qn(e._pt,R,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(W){F[W]=T}),N.priority&&(L=1)),!I||B)for(v in w)ci[v]&&(N=w_(v,w,e,z,R,S))?N.priority&&(L=1):F[v]=T=dd.call(e,R,v,"get",w[v],z,S,0,i.stringFilter);e._op&&e._op[E]&&e.kill(R,e._op[E]),M&&e._pt&&(Kr=e,Ht.killTweensOf(R,F,e.globalTime(t)),$=!e.parent,Kr=0),e._pt&&l&&(Iu[P.id]=1)}L&&L_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,u&&t<=0&&b.render(Ci,!0,!0)},rv=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,u,d;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,d=e._targets.length;d--;){if(h=u[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return zu=1,e.vars[t]="+=0",pd(e,o),zu=0,l?il(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,f.e&&(f.e=jt(n)+Dn(f.e)),f.b&&(f.b=h.s+Dn(f.b))},sv=function(e,t){var n=e[0]?Ts(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ua({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},av=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(In(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Bo=function(e,t,n,i,s){return qt(e)?e.call(t,n,i,s):Mn(e)&&~e.indexOf("random(")?sl(e):e},E_=hd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",A_={};Zn(E_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return A_[r]=1});var sn=(function(r){Yg(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Oo(i))||this;var l=o.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=i.parent||Ht,S=(In(n)||jg(n)?Rr(n[0]):"length"in i)?[n]:Pi(n),M,b,x,w,E,v,T,R;if(o._targets=S.length?ud(S):il("GSAP target "+n+" not found. https://gsap.com",!gi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,p||u||Dl(c)||Dl(h)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(M=o.timeline=new Jn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:S}),M.kill(),M.parent=M._dp=vr(o),M._start=0,u||Dl(c)||Dl(h)){if(w=S.length,T=u&&d_(u),lr(u))for(E in u)~E_.indexOf(E)&&(R||(R={}),R[E]=u[E]);for(b=0;b<w;b++)x=Jc(i,A_),x.stagger=0,L&&(x.easeReverse=L),R&&Ua(x,R),v=S[b],x.duration=+Bo(c,vr(o),b,v,S),x.delay=(+Bo(h,vr(o),b,v,S)||0)-o._delay,!u&&w===1&&x.delay&&(o._delay=h=x.delay,o._start+=h,x.delay=0),M.to(v,x,T?T(b,v,S):0),M._ease=_t.none;M.duration()?c=h=0:o.timeline=0}else if(p){Oo(bi(M.vars.defaults,{ease:"none"})),M._ease=Es(p.ease||i.ease||"none");var P=0,I,N,F;if(In(p))p.forEach(function(z){return M.to(S,z,">")}),M.duration();else{x={};for(E in p)E==="ease"||E==="easeEach"||av(E,p[E],x,p.easeEach);for(E in x)for(I=x[E].sort(function(z,B){return z.t-B.t}),P=0,b=0;b<I.length;b++)N=I[b],F={ease:N.e,duration:(N.t-(b?I[b-1].t:0))/100*c},F[E]=N.v,M.to(S,F,P),P+=F.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return d===!0&&!rd&&(Kr=vr(o),Ht.killTweensOf(S),Kr=0),Qi(m,vr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!p&&o._start===Gt(m._time)&&$n(f)&&Ub(vr(o))&&m.data!=="nested")&&(o._tTime=-Pt,o.render(Math.max(0,-h)||0)),g&&c_(vr(o),g),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Pt&&!h?l:i<Pt?0:i,u,d,p,_,g,m,S,M;if(!c)kb(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(u=Gt(f%_),f===l?(p=this._repeat,u=c):(g=Gt(f/_),p=~~g,p&&p===g?(u=c,p--):u>c&&(u=c)),m=this._yoyo&&p&1,m&&(u=c-u),g=Oa(this._tTime,_),u===o&&!a&&this._initted&&p===g)return this._tTime=f,this;p!==g&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(Gt(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(h_(this,h?i:u,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var b=u<o;if(b!==this._inv){var x=b?o:c-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=x?(b?-1:1)/x:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(u/c);if(this._from&&(this.ratio=S=1-S),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!g&&(pi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Fu(this,i,s,a),pi(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&pi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Fu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ns(this,1),!s&&!(h&&!o)&&(f||o||m)&&(pi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){al||ui.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||pd(this,c),h=this._ease(c/this._dur),rv(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(_h(this,0),this.parent||o_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?wo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Kr&&Kr.vars.overwrite!==!0)._first||wo(this),this.parent&&a!==this.timeline.totalDuration()&&ka(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Pi(i):o,c=this._ptLookup,h=this._pt,f,u,d,p,_,g,m;if((!s||s==="all")&&Ib(o,l))return s==="all"&&(this._pt=0),wo(this);for(f=this._op=this._op||[],s!=="all"&&(Mn(s)&&(_={},Zn(s,function(S){return _[S]=1}),s=_),s=sv(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){u=c[m],s==="all"?(f[m]=s,p=u,d={}):(d=f[m]=f[m]||{},p=s);for(_ in p)g=u&&u[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&mh(this,g,"_pt"),delete u[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&wo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ko(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ko(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Ht.killTweensOf(i,s,a)},e})(ol);bi(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zn("staggerTo,staggerFrom,staggerFromTo",function(r){sn[r]=function(){var e=new Jn,t=Ou.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var md=function(e,t,n){return e[t]=n},R_=function(e,t,n){return e[t](n)},ov=function(e,t,n,i){return e[t](i.fp,n)},lv=function(e,t,n){return e.setAttribute(t,n)},gd=function(e,t){return qt(e[t])?R_:sd(e[t])&&e.setAttribute?lv:md},C_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},P_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},_d=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},hv=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},uv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?mh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},fv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},L_=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Qn=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||C_,this.d=l||this,this.set=c||md,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=fv,this.m=n,this.mt=s,this.tween=i},r})();Zn(hd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return cd[r]=1});_i.TweenMax=_i.TweenLite=sn;_i.TimelineLite=_i.TimelineMax=Jn;Ht=new Jn({sortChildren:!1,defaults:nl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gi.stringFilter=y_;var As=[],Lc={},dv=[],xp=0,pv=0,Nh=function(e){return(Lc[e]||dv).map(function(t){return t()})},Gu=function(){var e=Date.now(),t=[];e-xp>2&&(Nh("matchMediaInit"),As.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ji.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Nh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),xp=e,Nh("matchMedia"))},D_=(function(){function r(t,n){this.selector=n&&ku(n),this.data=[],this._r=[],this.isReverted=!1,this.id=pv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){qt(n)&&(s=i,i=n,n=qt);var a=this,o=function(){var c=Bt,h=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=ku(s)),Bt=a,f=i.apply(a,arguments),qt(f)&&a._r.push(f),Bt=c,a.selector=h,a.isReverted=!1,f};return a.last=o,n===qt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof sn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Jn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof sn)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=As.length;a--;)As[a].id===this.id&&As.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),mv=(function(){function r(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){lr(n)||(n={matches:n});var a=new D_(0,s||this.scope),o=a.conditions={},l,c,h;Bt&&!a.selector&&(a.selector=Bt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=ji.matchMedia(n[c]),l&&(As.indexOf(a)<0&&As.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Gu):l.addEventListener("change",Gu)));return h&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),$c={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return v_(i)})},timeline:function(e){return new Jn(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){Mn(e)&&(e=Pi(e)[0]);var s=Ts(e||{}).get,a=n?a_:s_;return n==="native"&&(n=""),e&&(t?a((ci[t]&&ci[t].get||s)(e,t,n,i)):function(o,l,c){return a((ci[o]&&ci[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Pi(e),e.length>1){var i=e.map(function(h){return ni.quickSetter(h,t,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}e=e[0]||{};var a=ci[t],o=Ts(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var f=new a;ya._pt=0,f.init(e,n?h+n:h,ya,0,[e]),f.render(1,f),ya._pt&&_d(1,ya)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=ni.to(e,bi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Es(e.ease,nl.ease)),mp(nl,e||{})},config:function(e){return mp(gi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ci[o]&&!_i[o]&&il(t+" effect requires "+o+" plugin.")}),Ch[t]=function(o,l,c){return n(Pi(o),bi(l||{},s),c)},a&&(Jn.prototype[t]=function(o,l,c){return this.add(Ch[t](o,lr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=Es(t)},parseEase:function(e,t){return arguments.length?Es(e,t):_t},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Jn(e),i,s;for(n.smoothChildTiming=$n(e.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,i=Ht._first;i;)s=i._next,(t||!(!i._dur&&i instanceof sn&&i.vars.onComplete===i._targets[0]))&&Qi(n,i,i._start-i._delay),i=s;return Qi(Ht,n,0),n},context:function(e,t){return e?new D_(e,t):Bt},matchMedia:function(e){return new mv(e)},matchMediaRefresh:function(){return As.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Gu()},addEventListener:function(e,t){var n=Lc[e]||(Lc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Lc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:qb,wrapYoyo:Kb,distribute:d_,random:m_,snap:p_,normalize:Xb,getUnit:Dn,clamp:Gb,splitColor:x_,toArray:Pi,selector:ku,mapRange:__,pipe:Vb,unitize:Wb,interpolate:Yb,shuffle:f_},install:e_,effects:Ch,ticker:ui,updateRoot:Jn.updateRoot,plugins:ci,globalTimeline:Ht,core:{PropTween:Qn,globals:t_,Tween:sn,Timeline:Jn,Animation:ol,getCache:Ts,_removeLinkedListItem:mh,reverting:function(){return wn},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return rd=e}}};Zn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return $c[r]=sn[r]});ui.add(Jn.updateRoot);ya=$c.to({},{duration:0});var gv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},_v=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=gv(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ih=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Mn(s)&&(l={},Zn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}_v(o,s)}}}},ni=$c.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)wn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ih("roundProps",Bu),Ih("modifiers"),Ih("snap",p_))||$c;sn.version=Jn.version=ni.version="3.15.0";Qg=1;ad()&&Ba();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;var Sp,Yr,Aa,bd,Ss,yp,vd,bv=function(){return typeof window<"u"},Cr={},bs=180/Math.PI,Ra=Math.PI/180,Ys=Math.atan2,Mp=1e8,xd=/([A-Z])/g,vv=/(left|right|width|margin|padding|x)/i,xv=/[\s,\(]\S/,er={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Mv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Tv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},N_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},I_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},wv=function(e,t,n){return e.style[t]=n},Ev=function(e,t,n){return e.style.setProperty(t,n)},Av=function(e,t,n){return e._gsap[t]=n},Rv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Cv=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Pv=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Vt="transform",ei=Vt+"Origin",Lv=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Cr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=er[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=xr(i,o)}):this.tfm[e]=a.x?a[e]:xr(i,e),e===ei&&(this.tfm.zOrigin=a.zOrigin);else return er.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Vt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ei,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},F_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Dv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(xd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=vd(),(!s||!s.isStart)&&!n[Vt]&&(F_(n),i.zOrigin&&n[ei]&&(n[ei]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},U_=function(e,t){var n={target:e,props:[],revert:Dv,save:Lv};return e._gsap||ni.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},O_,Vu=function(e,t){var n=Yr.createElementNS?Yr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Yr.createElement(e);return n&&n.style?n:Yr.createElement(e)},mi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(xd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,za(t)||t,1)||""},Tp="O,Moz,ms,Ms,Webkit".split(","),za=function(e,t,n){var i=t||Ss,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Tp[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Tp[a]:"")+e},Wu=function(){bv()&&window.document&&(Sp=window,Yr=Sp.document,Aa=Yr.documentElement,Ss=Vu("div")||{style:{}},Vu("div"),Vt=za(Vt),ei=Vt+"Origin",Ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",O_=!!za("perspective"),vd=ni.core.reverting,bd=1)},wp=function(e){var t=e.ownerSVGElement,n=Vu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Aa.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Aa.removeChild(n),s},Ep=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},k_=function(e){var t,n;try{t=e.getBBox()}catch{t=wp(e),n=1}return t&&(t.width||t.height)||n||(t=wp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ep(e,["x","cx","x1"])||0,y:+Ep(e,["y","cy","y1"])||0,width:0,height:0}:t},B_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&k_(e))},is=function(e,t){if(t){var n=e.style,i;t in Cr&&t!==ei&&(t=Vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(xd,"-$1").toLowerCase())):n.removeAttribute(t)}},Jr=function(e,t,n,i,s,a){var o=new Qn(e._pt,t,n,0,1,a?I_:N_);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Ap={deg:1,rad:1,turn:1},Nv={grid:1,flex:1},rs=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ss.style,l=vv.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",p,_,g,m;if(i===a||!s||Ap[i]||Ap[a])return s;if(a!=="px"&&!u&&(s=r(e,t,n,"px")),m=e.getCTM&&B_(e),(d||a==="%")&&(Cr[t]||~t.indexOf("adius")))return p=m?e.getBBox()[l?"width":"height"]:e[h],jt(d?s/p*f:s/100*p);if(o[l?"width":"height"]=f+(u?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Yr||!_.appendChild)&&(_=Yr.body),g=_._gsap,g&&d&&g.width&&l&&g.time===ui.time&&!g.uncache)return jt(s/g.width*f);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+i,p=e[h],S?e.style[t]=S:is(e,t)}else(d||a==="%")&&!Nv[mi(_,"display")]&&(o.position=mi(e,"position")),_===e&&(o.position="static"),_.appendChild(Ss),p=Ss[h],_.removeChild(Ss),o.position="absolute";return l&&d&&(g=Ts(_),g.time=ui.time,g.width=_[h]),jt(u?p*s/f:p&&s?f/p*s:0)},xr=function(e,t,n,i){var s;return bd||Wu(),t in er&&t!=="transform"&&(t=er[t],~t.indexOf(",")&&(t=t.split(",")[0])),Cr[t]&&t!=="transform"?(s=cl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Qc(mi(e,ei))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Zc[t]&&Zc[t](e,t,n)||mi(e,t)||i_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?rs(e,t,s,n)+n:s},Iv=function(e,t,n,i){if(!n||n==="none"){var s=za(t,e,1),a=s&&mi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=mi(e,"borderTopColor"))}var o=new Qn(this._pt,e.style,t,0,1,P_),l=0,c=0,h,f,u,d,p,_,g,m,S,M,b,x;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=mi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=mi(e,t)||i,_?e.style[t]=_:is(e,t)),h=[n,i],y_(h),n=h[0],i=h[1],u=n.match(Sa)||[],x=i.match(Sa)||[],x.length){for(;f=Sa.exec(i);)g=f[0],S=i.substring(l,f.index),p?p=(p+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(p=1),g!==(_=u[c++]||"")&&(d=parseFloat(_)||0,b=_.substr((d+"").length),g.charAt(1)==="="&&(g=Ea(d,g)+b),m=parseFloat(g),M=g.substr((m+"").length),l=Sa.lastIndex-M.length,M||(M=M||gi.units[t]||b,l===i.length&&(i+=M,o.e+=M)),b!==M&&(d=rs(e,t,_,M)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:m-d,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?I_:N_;return Zg.test(i)&&(o.e=0),this._pt=o,o},Rp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Fv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Rp[n]||n,t[1]=Rp[i]||i,t.join(" ")},Uv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Cr[o]&&(l=1,o=o==="transformOrigin"?ei:Vt),is(n,o);l&&(is(n,Vt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",cl(n,1),a.uncache=1,F_(i)))}},Zc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Qn(e._pt,t,n,0,0,Uv);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ll=[1,0,0,1,0,0],z_={},G_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Cp=function(e){var t=mi(e,Vt);return G_(t)?ll:t.substr(7).match($g).map(jt)},Sd=function(e,t){var n=e._gsap||Ts(e),i=e.style,s=Cp(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ll:s):(s===ll&&!e.offsetParent&&e!==Aa&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Aa.appendChild(e)),s=Cp(e),l?i.display=l:is(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Aa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Xu=function(e,t,n,i,s,a){var o=e._gsap,l=s||Sd(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,d=l[0],p=l[1],_=l[2],g=l[3],m=l[4],S=l[5],M=t.split(" "),b=parseFloat(M[0])||0,x=parseFloat(M[1])||0,w,E,v,T;n?l!==ll&&(E=d*g-p*_)&&(v=b*(g/E)+x*(-_/E)+(_*S-g*m)/E,T=b*(-p/E)+x*(d/E)-(d*S-p*m)/E,b=v,x=T):(w=k_(e),b=w.x+(~M[0].indexOf("%")?b/100*w.width:b),x=w.y+(~(M[1]||M[0]).indexOf("%")?x/100*w.height:x)),i||i!==!1&&o.smooth?(m=b-c,S=x-h,o.xOffset=f+(m*d+S*_)-m,o.yOffset=u+(m*p+S*g)-S):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=x,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ei]="0px 0px",a&&(Jr(a,o,"xOrigin",c,b),Jr(a,o,"yOrigin",h,x),Jr(a,o,"xOffset",f,o.xOffset),Jr(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+x)},cl=function(e,t){var n=e._gsap||new T_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=mi(e,ei)||"0",h,f,u,d,p,_,g,m,S,M,b,x,w,E,v,T,R,L,P,I,N,F,z,B,$,W,C,j,fe,me,Ie,Xe;return h=f=u=_=g=m=S=M=b=0,d=p=1,n.svg=!!(e.getCTM&&B_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),i.scale=i.rotate=i.translate="none"),E=Sd(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),Xu(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,E)),x=n.xOrigin||0,w=n.yOrigin||0,E!==ll&&(L=E[0],P=E[1],I=E[2],N=E[3],h=F=E[4],f=z=E[5],E.length===6?(d=Math.sqrt(L*L+P*P),p=Math.sqrt(N*N+I*I),_=L||P?Ys(P,L)*bs:0,S=I||N?Ys(I,N)*bs+_:0,S&&(p*=Math.abs(Math.cos(S*Ra))),n.svg&&(h-=x-(x*L+w*I),f-=w-(x*P+w*N))):(Xe=E[6],me=E[7],C=E[8],j=E[9],fe=E[10],Ie=E[11],h=E[12],f=E[13],u=E[14],v=Ys(Xe,fe),g=v*bs,v&&(T=Math.cos(-v),R=Math.sin(-v),B=F*T+C*R,$=z*T+j*R,W=Xe*T+fe*R,C=F*-R+C*T,j=z*-R+j*T,fe=Xe*-R+fe*T,Ie=me*-R+Ie*T,F=B,z=$,Xe=W),v=Ys(-I,fe),m=v*bs,v&&(T=Math.cos(-v),R=Math.sin(-v),B=L*T-C*R,$=P*T-j*R,W=I*T-fe*R,Ie=N*R+Ie*T,L=B,P=$,I=W),v=Ys(P,L),_=v*bs,v&&(T=Math.cos(v),R=Math.sin(v),B=L*T+P*R,$=F*T+z*R,P=P*T-L*R,z=z*T-F*R,L=B,F=$),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),d=jt(Math.sqrt(L*L+P*P+I*I)),p=jt(Math.sqrt(z*z+Xe*Xe)),v=Ys(F,z),S=Math.abs(v)>2e-4?v*bs:0,b=Ie?1/(Ie<0?-Ie:Ie):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!G_(mi(e,Vt)),B&&e.setAttribute("transform",B))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=jt(d),n.scaleY=jt(p),n.rotation=jt(_)+o,n.rotationX=jt(g)+o,n.rotationY=jt(m)+o,n.skewX=S+o,n.skewY=M+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ei]=Qc(c)),n.xOffset=n.yOffset=0,n.force3D=gi.force3D,n.renderTransform=n.svg?kv:O_?H_:Ov,n.uncache=0,n},Qc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fh=function(e,t,n){var i=Dn(t);return jt(parseFloat(t)+parseFloat(rs(e,"x",n+"px",i)))+i},Ov=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,H_(e,t)},cs="0deg",to="0px",hs=") ",H_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,S=n.target,M=n.zOrigin,b="",x=m==="auto"&&e&&e!==1||m===!0;if(M&&(f!==cs||h!==cs)){var w=parseFloat(h)*Ra,E=Math.sin(w),v=Math.cos(w),T;w=parseFloat(f)*Ra,T=Math.cos(w),a=Fh(S,a,E*T*-M),o=Fh(S,o,-Math.sin(w)*-M),l=Fh(S,l,v*T*-M+M)}g!==to&&(b+="perspective("+g+hs),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(x||a!==to||o!==to||l!==to)&&(b+=l!==to||x?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+hs),c!==cs&&(b+="rotate("+c+hs),h!==cs&&(b+="rotateY("+h+hs),f!==cs&&(b+="rotateX("+f+hs),(u!==cs||d!==cs)&&(b+="skew("+u+", "+d+hs),(p!==1||_!==1)&&(b+="scale("+p+", "+_+hs),S.style[Vt]=b||"translate(0, 0)"},kv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,S=n.forceCSS,M=parseFloat(a),b=parseFloat(o),x,w,E,v,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ra,c*=Ra,x=Math.cos(l)*f,w=Math.sin(l)*f,E=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=Ra,T=Math.tan(c-h),T=Math.sqrt(1+T*T),E*=T,v*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),x*=T,w*=T)),x=jt(x),w=jt(w),E=jt(E),v=jt(v)):(x=f,v=u,w=E=0),(M&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(M=rs(d,"x",a,"px"),b=rs(d,"y",o,"px")),(p||_||g||m)&&(M=jt(M+p-(p*x+_*E)+g),b=jt(b+_-(p*w+_*v)+m)),(i||s)&&(T=d.getBBox(),M=jt(M+i/100*T.width),b=jt(b+s/100*T.height)),T="matrix("+x+","+w+","+E+","+v+","+M+","+b+")",d.setAttribute("transform",T),S&&(d.style[Vt]=T)},Bv=function(e,t,n,i,s){var a=360,o=Mn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?bs:1),c=l-i,h=i+c+"deg",f,u;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Mp)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Mp)%a-~~(c/a)*a)),e._pt=u=new Qn(e._pt,t,n,i,c,Sv),u.e=h,u.u="deg",e._props.push(n),u},Pp=function(e,t){for(var n in t)e[n]=t[n];return e},zv=function(e,t,n){var i=Pp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,f,u,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Vt]=t,o=cl(n,1),is(n,Vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Vt],a[Vt]=t,o=cl(n,1),a[Vt]=c);for(l in Cr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=Dn(c),p=Dn(h),f=d!==p?rs(n,l,c,p):parseFloat(c),u=parseFloat(h),e._pt=new Qn(e._pt,o,l,f,u-f,Hu),e._pt.u=p||0,e._props.push(l));Pp(o,i)};Zn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Zc[e>1?"border"+r:r]=function(o,l,c,h,f){var u,d;if(arguments.length<4)return u=a.map(function(p){return xr(o,p,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},a.forEach(function(p,_){return d[p]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,d,f)}});var V_={name:"css",register:Wu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,f,u,d,p,_,g,m,S,M,b,x,w,E,v,T;bd||Wu(),this.styles=this.styles||U_(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(ci[_]&&w_(_,t,n,i,e,s)))){if(d=typeof h,p=Zc[_],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=sl(h)),p)p(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Qr.lastIndex=0,Qr.test(c)||(g=Dn(c),m=Dn(h),m?g!==m&&(c=rs(e,_,c,m)+m):g&&(h+=g)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Mn(c)&&~c.indexOf("random(")&&(c=sl(c)),Dn(c+"")||c==="auto"||(c+=gi.units[_]||Dn(xr(e,_))||""),(c+"").charAt(1)==="="&&(c=xr(e,_))):c=xr(e,_),u=parseFloat(c),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),f=parseFloat(h),_ in er&&(_==="autoAlpha"&&(u===1&&xr(e,"visibility")==="hidden"&&f&&(u=0),v.push("visibility",0,o.visibility),Jr(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=er[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Cr,M){if(this.styles.save(_),T=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=mi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=h,h=mi(e,"perspective"),R?e.style.perspective=R:is(e,"perspective")}f=parseFloat(h)}if(b||(x=e._gsap,x.renderTransform&&!t.parseTransform||cl(e,t.parseTransform),w=t.smoothOrigin!==!1&&x.smooth,b=this._pt=new Qn(this._pt,o,Vt,0,1,x.renderTransform,x,0,-1),b.dep=1),_==="scale")this._pt=new Qn(this._pt,x,"scaleY",x.scaleY,(S?Ea(x.scaleY,S+f):f)-x.scaleY||0,Hu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(ei,0,o[ei]),h=Fv(h),x.svg?Xu(e,h,0,w,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==x.zOrigin&&Jr(this,x,"zOrigin",x.zOrigin,m),Jr(this,o,_,Qc(c),Qc(h)));continue}else if(_==="svgOrigin"){Xu(e,h,1,w,0,this);continue}else if(_ in z_){Bv(this,x,_,u,S?Ea(u,S+h):h);continue}else if(_==="smoothOrigin"){Jr(this,x,"smooth",x.smooth,h);continue}else if(_==="force3D"){x[_]=h;continue}else if(_==="transform"){zv(this,h,e);continue}}else _ in o||(_=za(_)||_);if(M||(f||f===0)&&(u||u===0)&&!xv.test(h)&&_ in o)g=(c+"").substr((u+"").length),f||(f=0),m=Dn(h)||(_ in gi.units?gi.units[_]:g),g!==m&&(u=rs(e,_,c,m)),this._pt=new Qn(this._pt,M?x:o,_,u,(S?Ea(u,S+f):f)-u,!M&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Tv:Hu),this._pt.u=m||0,M&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=Mv):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=yv);else if(_ in o)Iv.call(this,e,_,c,S?S+h:h);else if(_ in e)this.add(e,_,c||e[_],S?S+h:h,i,s);else if(_!=="parseTransform"){ld(_,h);continue}M||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),a.push(_)}}E&&L_(this)},render:function(e,t){if(t.tween._time||!vd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:xr,aliases:er,getSetter:function(e,t,n){var i=er[t];return i&&i.indexOf(",")<0&&(t=i),t in Cr&&t!==ei&&(e._gsap.x||xr(e,"x"))?n&&yp===n?t==="scale"?Rv:Av:(yp=n||{})&&(t==="scale"?Cv:Pv):e.style&&!sd(e.style[t])?wv:~t.indexOf("-")?Ev:gd(e,t)},core:{_removeProperty:is,_getMatrix:Sd}};ni.utils.checkPrefix=za;ni.core.getStyleSaver=U_;(function(r,e,t,n){var i=Zn(r+","+e+","+t,function(s){Cr[s]=1});Zn(e,function(s){gi.units[s]="deg",z_[s]=1}),er[i[13]]=r+","+e,Zn(n,function(s){var a=s.split(":");er[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){gi.units[r]="px"});ni.registerPlugin(V_);var at=ni.registerPlugin(V_)||ni;at.core.Tween;function Gv(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Hv(r,e,t){return e&&Gv(r.prototype,e),r}var Tn,Dc,fi,jr,$r,Ca,W_,vs,Pa,X_,Mr,Bi,q_,K_=function(){return Tn||typeof window<"u"&&(Tn=window.gsap)&&Tn.registerPlugin&&Tn},Y_=1,Ma=[],ft=[],sr=[],zo=Date.now,qu=function(e,t){return t},Vv=function(){var e=Pa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ft),i.push.apply(i,sr),ft=n,sr=i,qu=function(a,o){return t[a](o)}},es=function(e,t){return~sr.indexOf(e)&&sr[sr.indexOf(e)+1][t]},Go=function(e){return!!~X_.indexOf(e)},Gn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Bn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Nl="scrollLeft",Il="scrollTop",Ku=function(){return Mr&&Mr.isPressed||ft.cache++},eh=function(e,t){var n=function i(s){if(s||s===0){Y_&&(fi.history.scrollRestoration="manual");var a=Mr&&Mr.isPressed;s=i.v=Math.round(s)||(Mr&&Mr.iOS?1:0),e(s),i.cacheID=ft.cache,a&&qu("ss",s)}else(t||ft.cache!==i.cacheID||qu("ref"))&&(i.cacheID=ft.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Kn={s:Nl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:eh(function(r){return arguments.length?fi.scrollTo(r,ln.sc()):fi.pageXOffset||jr[Nl]||$r[Nl]||Ca[Nl]||0})},ln={s:Il,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Kn,sc:eh(function(r){return arguments.length?fi.scrollTo(Kn.sc(),r):fi.pageYOffset||jr[Il]||$r[Il]||Ca[Il]||0})},Yn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Tn.utils.toArray)(e)[0]||(typeof e=="string"&&Tn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Wv=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ss=function(e,t){var n=t.s,i=t.sc;Go(e)&&(e=jr.scrollingElement||$r);var s=ft.indexOf(e),a=i===ln.sc?1:2;!~s&&(s=ft.push(e)-1),ft[s+a]||Gn(e,"scroll",Ku);var o=ft[s+a],l=o||(ft[s+a]=eh(es(e,n),!0)||(Go(e)?i:eh(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Tn.getProperty(e,"scrollBehavior")==="smooth"),l},Yu=function(e,t,n){var i=e,s=e,a=zo(),o=a,l=t||50,c=Math.max(500,l*3),h=function(p,_){var g=zo();_||g-a>l?(s=i,i=p,o=a,a=g):n?i+=p:i=s+(p-s)/(g-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},u=function(p){var _=o,g=s,m=zo();return(p||p===0)&&p!==i&&h(p),a===o||m-o>c?0:(i+(n?g:-g))/((n?m:a)-_)*1e3};return{update:h,reset:f,getVelocity:u}},no=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Lp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},J_=function(){Pa=Tn.core.globals().ScrollTrigger,Pa&&Pa.core&&Vv()},j_=function(e){return Tn=e||K_(),!Dc&&Tn&&typeof document<"u"&&document.body&&(fi=window,jr=document,$r=jr.documentElement,Ca=jr.body,X_=[fi,jr,$r,Ca],Tn.utils.clamp,q_=Tn.core.context||function(){},vs="onpointerenter"in Ca?"pointer":"mouse",W_=$t.isTouch=fi.matchMedia&&fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Bi=$t.eventTypes=("ontouchstart"in $r?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in $r?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Y_=0},500),Dc=1),Pa||J_(),Dc};Kn.op=ln;ft.cache=0;var $t=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Dc||j_(Tn)||console.warn("Please gsap.registerPlugin(Observer)"),Pa||J_();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,g=n.onDragStart,m=n.onDragEnd,S=n.onDrag,M=n.onPress,b=n.onRelease,x=n.onRight,w=n.onLeft,E=n.onUp,v=n.onDown,T=n.onChangeX,R=n.onChangeY,L=n.onChange,P=n.onToggleX,I=n.onToggleY,N=n.onHover,F=n.onHoverEnd,z=n.onMove,B=n.ignoreCheck,$=n.isNormalizer,W=n.onGestureStart,C=n.onGestureEnd,j=n.onWheel,fe=n.onEnable,me=n.onDisable,Ie=n.onClick,Xe=n.scrollSpeed,Ze=n.capture,J=n.allowClicks,te=n.lockAxis,_e=n.onLockAxis;this.target=o=Yn(o)||$r,this.vars=n,d&&(d=Tn.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,Xe=Xe||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(fi.getComputedStyle(Ca).lineHeight)||22);var qe,xe,De,Fe,Q,re,oe,O=this,pe=0,Ge=0,Ue=n.passive||!h&&n.passive!==!1,Re=ss(o,Kn),je=ss(o,ln),k=Re(),ct=je(),Ye=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Bi[0]==="pointerdown",D=Go(o),y=o.ownerDocument||jr,V=[0,0,0],X=[0,0,0],Z=0,ge=function(){return Z=zo()},ce=function(ae,Ke){return(O.event=ae)&&d&&Wv(ae.target,d)||Ke&&Ye&&ae.pointerType!=="touch"||B&&B(ae,Ke)},ee=function(){O._vx.reset(),O._vy.reset(),xe.pause(),f&&f(O)},ie=function(){var ae=O.deltaX=Lp(V),Ke=O.deltaY=Lp(X),le=Math.abs(ae)>=i,Je=Math.abs(Ke)>=i;L&&(le||Je)&&L(O,ae,Ke,V,X),le&&(x&&O.deltaX>0&&x(O),w&&O.deltaX<0&&w(O),T&&T(O),P&&O.deltaX<0!=pe<0&&P(O),pe=O.deltaX,V[0]=V[1]=V[2]=0),Je&&(v&&O.deltaY>0&&v(O),E&&O.deltaY<0&&E(O),R&&R(O),I&&O.deltaY<0!=Ge<0&&I(O),Ge=O.deltaY,X[0]=X[1]=X[2]=0),(Fe||De)&&(z&&z(O),De&&(g&&De===1&&g(O),S&&S(O),De=0),Fe=!1),re&&!(re=!1)&&_e&&_e(O),Q&&(j(O),Q=!1),qe=0},Se=function(ae,Ke,le){V[le]+=ae,X[le]+=Ke,O._vx.update(ae),O._vy.update(Ke),c?qe||(qe=requestAnimationFrame(ie)):ie()},Ne=function(ae,Ke){te&&!oe&&(O.axis=oe=Math.abs(ae)>Math.abs(Ke)?"x":"y",re=!0),oe!=="y"&&(V[2]+=ae,O._vx.update(ae,!0)),oe!=="x"&&(X[2]+=Ke,O._vy.update(Ke,!0)),c?qe||(qe=requestAnimationFrame(ie)):ie()},ye=function(ae){if(!ce(ae,1)){ae=no(ae,h);var Ke=ae.clientX,le=ae.clientY,Je=Ke-O.x,Oe=le-O.y,et=O.isDragging;O.x=Ke,O.y=le,(et||(Je||Oe)&&(Math.abs(O.startX-Ke)>=s||Math.abs(O.startY-le)>=s))&&(De||(De=et?2:1),et||(O.isDragging=!0),Ne(Je,Oe))}},ve=O.onPress=function(ue){ce(ue,1)||ue&&ue.button||(O.axis=oe=null,xe.pause(),O.isPressed=!0,ue=no(ue),pe=Ge=0,O.startX=O.x=ue.clientX,O.startY=O.y=ue.clientY,O._vx.reset(),O._vy.reset(),Gn($?o:y,Bi[1],ye,Ue,!0),O.deltaX=O.deltaY=0,M&&M(O))},de=O.onRelease=function(ue){if(!ce(ue,1)){Bn($?o:y,Bi[1],ye,!0);var ae=!isNaN(O.y-O.startY),Ke=O.isDragging,le=Ke&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),Je=no(ue);!le&&ae&&(O._vx.reset(),O._vy.reset(),h&&J&&Tn.delayedCall(.08,function(){if(zo()-Z>300&&!ue.defaultPrevented){if(ue.target.click)ue.target.click();else if(y.createEvent){var Oe=y.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,fi,1,Je.screenX,Je.screenY,Je.clientX,Je.clientY,!1,!1,!1,!1,0,null),ue.target.dispatchEvent(Oe)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,f&&Ke&&!$&&xe.restart(!0),De&&ie(),m&&Ke&&m(O),b&&b(O,le)}},He=function(ae){return ae.touches&&ae.touches.length>1&&(O.isGesturing=!0)&&W(ae,O.isDragging)},$e=function(){return(O.isGesturing=!1)||C(O)},G=function(ae){if(!ce(ae)){var Ke=Re(),le=je();Se((Ke-k)*Xe,(le-ct)*Xe,1),k=Ke,ct=le,f&&xe.restart(!0)}},be=function(ae){if(!ce(ae)){ae=no(ae,h),j&&(Q=!0);var Ke=(ae.deltaMode===1?l:ae.deltaMode===2?fi.innerHeight:1)*p;Se(ae.deltaX*Ke,ae.deltaY*Ke,0),f&&!$&&xe.restart(!0)}},ne=function(ae){if(!ce(ae)){var Ke=ae.clientX,le=ae.clientY,Je=Ke-O.x,Oe=le-O.y;O.x=Ke,O.y=le,Fe=!0,f&&xe.restart(!0),(Je||Oe)&&Ne(Je,Oe)}},Me=function(ae){O.event=ae,N(O)},we=function(ae){O.event=ae,F(O)},se=function(ae){return ce(ae)||no(ae,h)&&Ie(O)};xe=O._dc=Tn.delayedCall(u||.25,ee).pause(),O.deltaX=O.deltaY=0,O._vx=Yu(0,50,!0),O._vy=Yu(0,50,!0),O.scrollX=Re,O.scrollY=je,O.isDragging=O.isGesturing=O.isPressed=!1,q_(this),O.enable=function(ue){return O.isEnabled||(Gn(D?y:o,"scroll",Ku),a.indexOf("scroll")>=0&&Gn(D?y:o,"scroll",G,Ue,Ze),a.indexOf("wheel")>=0&&Gn(o,"wheel",be,Ue,Ze),(a.indexOf("touch")>=0&&W_||a.indexOf("pointer")>=0)&&(Gn(o,Bi[0],ve,Ue,Ze),Gn(y,Bi[2],de),Gn(y,Bi[3],de),J&&Gn(o,"click",ge,!0,!0),Ie&&Gn(o,"click",se),W&&Gn(y,"gesturestart",He),C&&Gn(y,"gestureend",$e),N&&Gn(o,vs+"enter",Me),F&&Gn(o,vs+"leave",we),z&&Gn(o,vs+"move",ne)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=Fe=De=!1,O._vx.reset(),O._vy.reset(),k=Re(),ct=je(),ue&&ue.type&&ve(ue),fe&&fe(O)),O},O.disable=function(){O.isEnabled&&(Ma.filter(function(ue){return ue!==O&&Go(ue.target)}).length||Bn(D?y:o,"scroll",Ku),O.isPressed&&(O._vx.reset(),O._vy.reset(),Bn($?o:y,Bi[1],ye,!0)),Bn(D?y:o,"scroll",G,Ze),Bn(o,"wheel",be,Ze),Bn(o,Bi[0],ve,Ze),Bn(y,Bi[2],de),Bn(y,Bi[3],de),Bn(o,"click",ge,!0),Bn(o,"click",se),Bn(y,"gesturestart",He),Bn(y,"gestureend",$e),Bn(o,vs+"enter",Me),Bn(o,vs+"leave",we),Bn(o,vs+"move",ne),O.isEnabled=O.isPressed=O.isDragging=!1,me&&me(O))},O.kill=O.revert=function(){O.disable();var ue=Ma.indexOf(O);ue>=0&&Ma.splice(ue,1),Mr===O&&(Mr=0)},Ma.push(O),$&&Go(o)&&(Mr=O),O.enable(_)},Hv(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();$t.version="3.15.0";$t.create=function(r){return new $t(r)};$t.register=j_;$t.getAll=function(){return Ma.slice()};$t.getById=function(r){return Ma.filter(function(e){return e.vars.id===r})[0]};K_()&&Tn.registerPlugin($t);var Le,ba,ut,yt,hi,St,yd,th,hl,Ho,Ao,Fl,Pn,bh,Ju,Wn,Dp,Np,va,$_,Uh,Z_,Vn,ju,Q_,e0,Vr,$u,Md,La,Td,Vo,Zu,Oh,Ul=1,Ln=Date.now,kh=Ln(),Ni=0,Ro=0,Ip=function(e,t,n){var i=li(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Fp=function(e,t){return t&&(!li(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Xv=function r(){return Ro&&requestAnimationFrame(r)},Up=function(){return bh=1},Op=function(){return bh=0},$i=function(e){return e},Co=function(e){return Math.round(e*1e5)/1e5||0},t0=function(){return typeof window<"u"},n0=function(){return Le||t0()&&(Le=window.gsap)&&Le.registerPlugin&&Le},Ns=function(e){return!!~yd.indexOf(e)},i0=function(e){return(e==="Height"?Td:ut["inner"+e])||hi["client"+e]||St["client"+e]},r0=function(e){return es(e,"getBoundingClientRect")||(Ns(e)?function(){return Oc.width=ut.innerWidth,Oc.height=Td,Oc}:function(){return Sr(e)})},qv=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=es(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?i0(s):e["client"+s])||0}},Kv=function(e,t){return!t||~sr.indexOf(e)?r0(e):function(){return Oc}},tr=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=es(e,n))?a()-r0(e)()[s]:Ns(e)?(hi[n]||St[n])-i0(i):e[n]-e["offset"+i])},Ol=function(e,t){for(var n=0;n<va.length;n+=3)(!t||~t.indexOf(va[n+1]))&&e(va[n],va[n+1],va[n+2])},li=function(e){return typeof e=="string"},Nn=function(e){return typeof e=="function"},Po=function(e){return typeof e=="number"},xs=function(e){return typeof e=="object"},io=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Js=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},js=Math.abs,s0="left",a0="top",wd="right",Ed="bottom",Rs="width",Cs="height",Wo="Right",Xo="Left",qo="Top",Ko="Bottom",rn="padding",Ei="margin",Ga="Width",Ad="Height",on="px",Ai=function(e){return ut.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Yv=function(e){var t=Ai(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},kp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Sr=function(e,t){var n=t&&Ai(e)[Ju]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},nh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},o0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Jv=function(e){return function(t){return Le.utils.snap(o0(e),t)}},Rd=function(e){var t=Le.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},jv=function(e){return function(t,n){return Rd(o0(e))(t,n.direction)}},kl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},bn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},_n=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Bl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Bp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zl={toggleActions:"play",anticipatePin:0},ih={top:0,left:0,center:.5,bottom:1,right:1},Nc=function(e,t){if(li(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ih?ih[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Gl=function(e,t,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,p=yt.createElement("div"),_=Ns(n)||es(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,m=_?St:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,M=S?c:h,b="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(b+=(i===ln?wd:Ed)+":"+(a+parseFloat(u))+"px;"),o&&(b+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=S,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=b,p.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],Ic(p,0,i,S),p},Ic=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ga]=1,s["border"+o+Ga]=0,s[n.p]=t+"px",Le.set(e,s)},lt=[],Qu={},ul,zp=function(){return Ln()-Ni>34&&(ul||(ul=requestAnimationFrame(wr)))},$s=function(){(!Vn||!Vn.isPressed||Vn.startX>St.clientWidth)&&(ft.cache++,Vn?ul||(ul=requestAnimationFrame(wr)):wr(),Ni||Fs("scrollStart"),Ni=Ln())},Bh=function(){e0=ut.innerWidth,Q_=ut.innerHeight},Lo=function(e){ft.cache++,(e===!0||!Pn&&!Z_&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!ju||e0!==ut.innerWidth||Math.abs(ut.innerHeight-Q_)>ut.innerHeight*.25))&&th.restart(!0)},Is={},$v=[],l0=function r(){return _n(nt,"scrollEnd",r)||ys(!0)},Fs=function(e){return Is[e]&&Is[e].map(function(t){return t()})||$v},oi=[],c0=function(e){for(var t=0;t<oi.length;t+=5)(!e||oi[t+4]&&oi[t+4].query===e)&&(oi[t].style.cssText=oi[t+1],oi[t].getBBox&&oi[t].setAttribute("transform",oi[t+2]||""),oi[t+3].uncache=1)},h0=function(){return ft.forEach(function(e){return Nn(e)&&++e.cacheID&&(e.rec=e())})},Cd=function(e,t){var n;for(Wn=0;Wn<lt.length;Wn++)n=lt[Wn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Vo=!0,t&&c0(t),t||Fs("revert")},u0=function(e,t){ft.cache++,(t||!Xn)&&ft.forEach(function(n){return Nn(n)&&n.cacheID++&&(n.rec=0)}),li(e)&&(ut.history.scrollRestoration=Md=e)},Xn,Ps=0,Gp,Zv=function(){if(Gp!==Ps){var e=Gp=Ps;requestAnimationFrame(function(){return e===Ps&&ys(!0)})}},f0=function(){St.appendChild(La),Td=!Vn&&La.offsetHeight||ut.innerHeight,St.removeChild(La)},Hp=function(e){return hl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ys=function(e,t){if(hi=yt.documentElement,St=yt.body,yd=[ut,yt,hi,St],Ni&&!e&&!Vo){bn(nt,"scrollEnd",l0);return}f0(),Xn=nt.isRefreshing=!0,Vo||h0();var n=Fs("refreshInit");$_&&nt.sort(),t||Cd(),ft.forEach(function(i){Nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),lt.slice(0).forEach(function(i){return i.refresh()}),Vo=!1,lt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Zu=1,Hp(!0),lt.forEach(function(i){var s=tr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Hp(!1),Zu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ft.forEach(function(i){Nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),u0(Md,1),th.pause(),Ps++,Xn=2,wr(2),lt.forEach(function(i){return Nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Xn=nt.isRefreshing=!1,Fs("refresh")},ef=0,Fc=1,Yo,wr=function(e){if(e===2||!Xn&&!Vo){nt.isUpdating=!0,Yo&&Yo.update(0);var t=lt.length,n=Ln(),i=n-kh>=50,s=t&&lt[0].scroll();if(Fc=ef>s?-1:1,Xn||(ef=s),i&&(Ni&&!bh&&n-Ni>200&&(Ni=0,Fs("scrollEnd")),Ao=kh,kh=n),Fc<0){for(Wn=t;Wn-- >0;)lt[Wn]&&lt[Wn].update(0,i);Fc=1}else for(Wn=0;Wn<t;Wn++)lt[Wn]&&lt[Wn].update(0,i);nt.isUpdating=!1}ul=0},tf=[s0,a0,Ed,wd,Ei+Ko,Ei+Wo,Ei+qo,Ei+Xo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Uc=tf.concat([Rs,Cs,"boxSizing","max"+Ga,"max"+Ad,"position",Ei,rn,rn+qo,rn+Wo,rn+Ko,rn+Xo]),Qv=function(e,t,n){Da(n);var i=e._gsap;if(i.spacerIsNative)Da(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},zh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=tf.length,a=t.style,o=e.style,l;s--;)l=tf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Ed]=o[wd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Rs]=nh(e,Kn)+on,a[Cs]=nh(e,ln)+on,a[rn]=o[Ei]=o[a0]=o[s0]="0",Da(i),o[Rs]=o["max"+Ga]=n[Rs],o[Cs]=o["max"+Ad]=n[Cs],o[rn]=n[rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ex=/([A-Z])/g,Da=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(ex,"-$1").toLowerCase())}},Hl=function(e){for(var t=Uc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Uc[s],n[Uc[s]]);return i.t=e,i},tx=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Oc={left:0,top:0},Vp=function(e,t,n,i,s,a,o,l,c,h,f,u,d,p){Nn(e)&&(e=e(l)),li(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?Nc("0"+e.substr(3),n):0));var _=d?d.time():0,g,m,S;if(d&&d.seek(0),isNaN(e)||(e=+e),Po(e))d&&(e=Le.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,e)),o&&Ic(o,n,i,!0);else{Nn(t)&&(t=t(l));var M=(e||"0").split(" "),b,x,w,E;S=Yn(t,l)||St,b=Sr(S)||{},(!b||!b.left&&!b.top)&&Ai(S).display==="none"&&(E=S.style.display,S.style.display="block",b=Sr(S),E?S.style.display=E:S.style.removeProperty("display")),x=Nc(M[0],b[i.d]),w=Nc(M[1]||"0",n),e=b[i.p]-c[i.p]-h+x+s-w,o&&Ic(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var v=e+n,T=a._isStart;g="scroll"+i.d2,Ic(a,v,i,T&&v>20||!T&&(f?Math.max(St[g],hi[g]):a.parentNode[g])<=v+1),f&&(c=Sr(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+on))}return d&&S&&(g=Sr(S),d.seek(u),m=Sr(S),d._caScrollDist=g[i.p]-m[i.p],e=e/d._caScrollDist*u),d&&d.seek(_),d?e:Math.round(e)},nx=/(webkit|moz|length|cssText|inset)/i,Wp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===St){e._stOrig=s.cssText,o=Ai(e);for(a in o)!+a&&!nx.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},d0=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Vl=function(e,t,n){var i={};i[t.p]="+="+n,Le.set(e,i)},Xp=function(e,t){var n=ss(e,t),i="_scroll"+t.p2,s=function a(o,l,c,h,f){var u=a.tween,d=l.onComplete,p={};c=c||n();var _=d0(n,c,function(){u.kill(),a.tween=0});return f=h&&f||0,h=h||o-c,u&&u.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){ft.cache++,a.tween&&wr()},l.onComplete=function(){a.tween=0,d&&d.call(u)},u=a.tween=Le.to(e,l),u};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},bn(e,"wheel",n.wheelHandler),nt.isTouch&&bn(e,"touchmove",n.wheelHandler),s},nt=(function(){function r(t,n){ba||r.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),$u(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ro){this.update=this.refresh=this.kill=$i;return}n=kp(li(n)||Po(n)||n.nodeType?{trigger:n}:n,zl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,M=s.once,b=s.snap,x=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,v=s.fastScrollEnd,T=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Kn:ln,L=!f&&f!==0,P=Yn(n.scroller||ut),I=Le.core.getCache(P),N=Ns(P),F=("pinType"in n?n.pinType:es(P,"pinType")||N&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=L&&n.toggleActions.split(" "),$="markers"in n?n.markers:zl.markers,W=N?0:parseFloat(Ai(P)["border"+R.p2+Ga])||0,C=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(C)},fe=qv(P,N,R),me=Kv(P,N),Ie=0,Xe=0,Ze=0,J=ss(P,R),te,_e,qe,xe,De,Fe,Q,re,oe,O,pe,Ge,Ue,Re,je,k,ct,Ye,D,y,V,X,Z,ge,ce,ee,ie,Se,Ne,ye,ve,de,He,$e,G,be,ne,Me,we;if(C._startClamp=C._endClamp=!1,C._dir=R,g*=45,C.scroller=P,C.scroll=E?E.time.bind(E):J,xe=J(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&($_=1,n.refreshPriority===-9999&&(Yo=C)),I.tweenScroll=I.tweenScroll||{top:Xp(P,ln),left:Xp(P,Kn)},C.tweenTo=te=I.tweenScroll[R.p],C.scrubDuration=function(le){He=Po(le)&&le,He?de?de.duration(le):de=Le.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:He,paused:!0,onComplete:function(){return m&&m(C)}}):(de&&de.progress(1).kill(),de=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(f),ye=0,l||(l=i.vars.id)),b&&((!xs(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in St.style&&Le.set(N?[St,hi]:P,{scrollBehavior:"auto"}),ft.forEach(function(le){return Nn(le)&&le.target===(N?yt.scrollingElement||hi:P)&&(le.smooth=!1)}),qe=Nn(b.snapTo)?b.snapTo:b.snapTo==="labels"?Jv(i):b.snapTo==="labelsDirectional"?jv(i):b.directional!==!1?function(le,Je){return Rd(b.snapTo)(le,Ln()-Xe<500?0:Je.direction)}:Le.utils.snap(b.snapTo),$e=b.duration||{min:.1,max:2},$e=xs($e)?Ho($e.min,$e.max):Ho($e,$e),G=Le.delayedCall(b.delay||He/2||.1,function(){var le=J(),Je=Ln()-Xe<500,Oe=te.tween;if((Je||Math.abs(C.getVelocity())<10)&&!Oe&&!bh&&Ie!==le){var et=(le-Fe)/Re,Qt=i&&!L?i.totalProgress():et,ht=Je?0:(Qt-ve)/(Ln()-Ao)*1e3||0,Ft=Le.utils.clamp(-et,1-et,js(ht/2)*ht/.185),pn=et+(b.inertia===!1?0:Ft),Ut,At,gt=b,Un=gt.onStart,Lt=gt.onInterrupt,En=gt.onComplete;if(Ut=qe(pn,C),Po(Ut)||(Ut=pn),At=Math.max(0,Math.round(Fe+Ut*Re)),le<=Q&&le>=Fe&&At!==le){if(Oe&&!Oe._initted&&Oe.data<=js(At-le))return;b.inertia===!1&&(Ft=Ut-et),te(At,{duration:$e(js(Math.max(js(pn-Qt),js(Ut-Qt))*.185/ht/.05||0)),ease:b.ease||"power3",data:js(At-le),onInterrupt:function(){return G.restart(!0)&&Lt&&Js(C,Lt)},onComplete:function(){C.update(),Ie=J(),i&&!L&&(de?de.resetTo("totalProgress",Ut,i._tTime/i._tDur):i.progress(Ut)),ye=ve=i&&!L?i.totalProgress():C.progress,S&&S(C),En&&Js(C,En)}},le,Ft*Re,At-le-Ft*Re),Un&&Js(C,Un,te.tween)}}else C.isActive&&Ie!==le&&G.restart(!0)}).pause()),l&&(Qu[l]=C),u=C.trigger=Yn(u||d!==!0&&d),we=u&&u._gsap&&u._gsap.stRevert,we&&(we=we(C)),d=d===!0?u:Yn(d),li(o)&&(o={targets:u,className:o}),d&&(p===!1||p===Ei||(p=!p&&d.parentNode&&d.parentNode.style&&Ai(d.parentNode).display==="flex"?!1:rn),C.pin=d,_e=Le.core.getCache(d),_e.spacer?je=_e.pinState:(w&&(w=Yn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),_e.spacerIsNative=!!w,w&&(_e.spacerState=Hl(w))),_e.spacer=Ye=w||yt.createElement("div"),Ye.classList.add("pin-spacer"),l&&Ye.classList.add("pin-spacer-"+l),_e.pinState=je=Hl(d)),n.force3D!==!1&&Le.set(d,{force3D:!0}),C.spacer=Ye=_e.spacer,Ne=Ai(d),ge=Ne[p+R.os2],y=Le.getProperty(d),V=Le.quickSetter(d,R.a,on),zh(d,Ye,Ne),ct=Hl(d)),$){Ge=xs($)?kp($,Bp):Bp,O=Gl("scroller-start",l,P,R,Ge,0),pe=Gl("scroller-end",l,P,R,Ge,0,O),D=O["offset"+R.op.d2];var se=Yn(es(P,"content")||P);re=this.markerStart=Gl("start",l,se,R,Ge,D,0,E),oe=this.markerEnd=Gl("end",l,se,R,Ge,D,0,E),E&&(Me=Le.quickSetter([re,oe],R.a,on)),!F&&!(sr.length&&es(P,"fixedMarkers")===!0)&&(Yv(N?St:P),Le.set([O,pe],{force3D:!0}),ee=Le.quickSetter(O,R.a,on),Se=Le.quickSetter(pe,R.a,on))}if(E){var ue=E.vars.onUpdate,ae=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){C.update(0,0,1),ue&&ue.apply(E,ae||[])})}if(C.previous=function(){return lt[lt.indexOf(C)-1]},C.next=function(){return lt[lt.indexOf(C)+1]},C.revert=function(le,Je){if(!Je)return C.kill(!0);var Oe=le!==!1||!C.enabled,et=Pn;Oe!==C.isReverted&&(Oe&&(be=Math.max(J(),C.scroll.rec||0),Ze=C.progress,ne=i&&i.progress()),re&&[re,oe,O,pe].forEach(function(Qt){return Qt.style.display=Oe?"none":"block"}),Oe&&(Pn=C,C.update(Oe)),d&&(!x||!C.isActive)&&(Oe?Qv(d,Ye,je):zh(d,Ye,Ai(d),ce)),Oe||C.update(Oe),Pn=et,C.isReverted=Oe)},C.refresh=function(le,Je,Oe,et){if(!((Pn||!C.enabled)&&!Je)){if(d&&le&&Ni){bn(r,"scrollEnd",l0);return}!Xn&&j&&j(C),Pn=C,te.tween&&!Oe&&(te.tween.kill(),te.tween=0),de&&de.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Te){return Te.vars.immediateRender&&Te.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Qt=fe(),ht=me(),Ft=E?E.duration():tr(P,R),pn=Re<=.01||!Re,Ut=0,At=et||0,gt=xs(Oe)?Oe.end:n.end,Un=n.endTrigger||u,Lt=xs(Oe)?Oe.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),En=C.pinnedContainer=n.pinnedContainer&&Yn(n.pinnedContainer,C),On=u&&Math.max(0,lt.indexOf(C))||0,en=On,Xt,an,Xi,Ws,mn,Yt,xi,Xs,A,H,Y,q,K;for($&&xs(Oe)&&(q=Le.getProperty(O,R.p),K=Le.getProperty(pe,R.p));en-- >0;)Yt=lt[en],Yt.end||Yt.refresh(0,1)||(Pn=C),xi=Yt.pin,xi&&(xi===u||xi===d||xi===En)&&!Yt.isReverted&&(H||(H=[]),H.unshift(Yt),Yt.revert(!0,!0)),Yt!==lt[en]&&(On--,en--);for(Nn(Lt)&&(Lt=Lt(C)),Lt=Ip(Lt,"start",C),Fe=Vp(Lt,u,Qt,R,J(),re,O,C,ht,W,F,Ft,E,C._startClamp&&"_startClamp")||(d?-.001:0),Nn(gt)&&(gt=gt(C)),li(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(li(Lt)?Lt.split(" ")[0]:"")+gt:(Ut=Nc(gt.substr(2),Qt),gt=li(Lt)?Lt:(E?Le.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Fe):Fe)+Ut,Un=u)),gt=Ip(gt,"end",C),Q=Math.max(Fe,Vp(gt||(Un?"100% 0":Ft),Un,Qt,R,J()+Ut,oe,pe,C,ht,W,F,Ft,E,C._endClamp&&"_endClamp"))||-.001,Ut=0,en=On;en--;)Yt=lt[en]||{},xi=Yt.pin,xi&&Yt.start-Yt._pinPush<=Fe&&!E&&Yt.end>0&&(Xt=Yt.end-(C._startClamp?Math.max(0,Yt.start):Yt.start),(xi===u&&Yt.start-Yt._pinPush<Fe||xi===En)&&isNaN(Lt)&&(Ut+=Xt*(1-Yt.progress)),xi===d&&(At+=Xt));if(Fe+=Ut,Q+=Ut,C._startClamp&&(C._startClamp+=Ut),C._endClamp&&!Xn&&(C._endClamp=Q||-.001,Q=Math.min(Q,tr(P,R))),Re=Q-Fe||(Fe-=.01)&&.001,pn&&(Ze=Le.utils.clamp(0,1,Le.utils.normalize(Fe,Q,be))),C._pinPush=At,re&&Ut&&(Xt={},Xt[R.a]="+="+Ut,En&&(Xt[R.p]="-="+J()),Le.set([re,oe],Xt)),d&&!(Zu&&C.end>=tr(P,R)))Xt=Ai(d),Ws=R===ln,Xi=J(),X=parseFloat(y(R.a))+At,!Ft&&Q>1&&(Y=(N?yt.scrollingElement||hi:P).style,Y={style:Y,value:Y["overflow"+R.a.toUpperCase()]},N&&Ai(St)["overflow"+R.a.toUpperCase()]!=="scroll"&&(Y.style["overflow"+R.a.toUpperCase()]="scroll")),zh(d,Ye,Xt),ct=Hl(d),an=Sr(d,!0),Xs=F&&ss(P,Ws?Kn:ln)(),p?(ce=[p+R.os2,Re+At+on],ce.t=Ye,en=p===rn?nh(d,R)+Re+At:0,en&&(ce.push(R.d,en+on),Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=en+on)),Da(ce),En&&lt.forEach(function(Te){Te.pin===En&&Te.vars.pinSpacing!==!1&&(Te._subPinOffset=!0)}),F&&J(be)):(en=nh(d,R),en&&Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=en+on)),F&&(mn={top:an.top+(Ws?Xi-Fe:Xs)+on,left:an.left+(Ws?Xs:Xi-Fe)+on,boxSizing:"border-box",position:"fixed"},mn[Rs]=mn["max"+Ga]=Math.ceil(an.width)+on,mn[Cs]=mn["max"+Ad]=Math.ceil(an.height)+on,mn[Ei]=mn[Ei+qo]=mn[Ei+Wo]=mn[Ei+Ko]=mn[Ei+Xo]="0",mn[rn]=Xt[rn],mn[rn+qo]=Xt[rn+qo],mn[rn+Wo]=Xt[rn+Wo],mn[rn+Ko]=Xt[rn+Ko],mn[rn+Xo]=Xt[rn+Xo],k=tx(je,mn,x),Xn&&J(0)),i?(A=i._initted,Uh(1),i.render(i.duration(),!0,!0),Z=y(R.a)-X+Re+At,ie=Math.abs(Re-Z)>1,F&&ie&&k.splice(k.length-2,2),i.render(0,!0,!0),A||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Uh(0)):Z=Re,Y&&(Y.value?Y.style["overflow"+R.a.toUpperCase()]=Y.value:Y.style.removeProperty("overflow-"+R.a));else if(u&&J()&&!E)for(an=u.parentNode;an&&an!==St;)an._pinOffset&&(Fe-=an._pinOffset,Q-=an._pinOffset),an=an.parentNode;H&&H.forEach(function(Te){return Te.revert(!1,!0)}),C.start=Fe,C.end=Q,xe=De=Xn?be:J(),!E&&!Xn&&(xe<be&&J(be),C.scroll.rec=0),C.revert(!1,!0),Xe=Ln(),G&&(Ie=-1,G.restart(!0)),Pn=0,i&&L&&(i._initted||ne)&&i.progress()!==ne&&i.progress(ne||0,!0).render(i.time(),!0,!0),(pn||Ze!==C.progress||E||_||i&&!i._initted)&&(i&&!L&&(i._initted||Ze||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Fe<-.001&&!Ze?Le.utils.normalize(Fe,Q,0):Ze,!0),C.progress=pn||(xe-Fe)/Re===Ze?0:Ze),d&&p&&(Ye._pinOffset=Math.round(C.progress*Z)),de&&de.invalidate(),isNaN(q)||(q-=Le.getProperty(O,R.p),K-=Le.getProperty(pe,R.p),Vl(O,R,q),Vl(re,R,q-(et||0)),Vl(pe,R,K),Vl(oe,R,K-(et||0))),pn&&!Xn&&C.update(),h&&!Xn&&!Ue&&(Ue=!0,h(C),Ue=!1)}},C.getVelocity=function(){return(J()-De)/(Ln()-Ao)*1e3||0},C.endAnimation=function(){io(C.callbackAnimation),i&&(de?de.progress(1):i.paused()?L||io(i,C.direction<0,1):io(i,i.reversed()))},C.labelToScroll=function(le){return i&&i.labels&&(Fe||C.refresh()||Fe)+i.labels[le]/i.duration()*Re||0},C.getTrailing=function(le){var Je=lt.indexOf(C),Oe=C.direction>0?lt.slice(0,Je).reverse():lt.slice(Je+1);return(li(le)?Oe.filter(function(et){return et.vars.preventOverlaps===le}):Oe).filter(function(et){return C.direction>0?et.end<=Fe:et.start>=Q})},C.update=function(le,Je,Oe){if(!(E&&!Oe&&!le)){var et=Xn===!0?be:C.scroll(),Qt=le?0:(et-Fe)/Re,ht=Qt<0?0:Qt>1?1:Qt||0,Ft=C.progress,pn,Ut,At,gt,Un,Lt,En,On;if(Je&&(De=xe,xe=E?J():et,b&&(ve=ye,ye=i&&!L?i.totalProgress():ht)),g&&d&&!Pn&&!Ul&&Ni&&(!ht&&Fe<et+(et-De)/(Ln()-Ao)*g?ht=1e-4:ht===1&&Q>et+(et-De)/(Ln()-Ao)*g&&(ht=.9999)),ht!==Ft&&C.enabled){if(pn=C.isActive=!!ht&&ht<1,Ut=!!Ft&&Ft<1,Lt=pn!==Ut,Un=Lt||!!ht!=!!Ft,C.direction=ht>Ft?1:-1,C.progress=ht,Un&&!Pn&&(At=ht&&!Ft?0:ht===1?1:Ft===1?2:3,L&&(gt=!Lt&&B[At+1]!=="none"&&B[At+1]||B[At],On=i&&(gt==="complete"||gt==="reset"||gt in i))),T&&(Lt||On)&&(On||f||!i)&&(Nn(T)?T(C):C.getTrailing(T).forEach(function(Xi){return Xi.endAnimation()})),L||(de&&!Pn&&!Ul?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo("totalProgress",ht,i._tTime/i._tDur):(de.vars.totalProgress=ht,de.invalidate().restart())):i&&i.totalProgress(ht,!!(Pn&&(Xe||le)))),d){if(le&&p&&(Ye.style[p+R.os2]=ge),!F)V(Co(X+Z*ht));else if(Un){if(En=!le&&ht>Ft&&Q+1>et&&et+1>=tr(P,R),x)if(!le&&(pn||En)){var en=Sr(d,!0),Xt=et-Fe;Wp(d,St,en.top+(R===ln?Xt:0)+on,en.left+(R===ln?0:Xt)+on)}else Wp(d,Ye);Da(pn||En?k:ct),ie&&ht<1&&pn||V(X+(ht===1&&!En?Z:0))}}b&&!te.tween&&!Pn&&!Ul&&G.restart(!0),o&&(Lt||M&&ht&&(ht<1||!Oh))&&hl(o.targets).forEach(function(Xi){return Xi.classList[pn||M?"add":"remove"](o.className)}),a&&!L&&!le&&a(C),Un&&!Pn?(L&&(On&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),a&&a(C)),(Lt||!Oh)&&(c&&Lt&&Js(C,c),z[At]&&Js(C,z[At]),M&&(ht===1?C.kill(!1,1):z[At]=0),Lt||(At=ht===1?1:3,z[At]&&Js(C,z[At]))),v&&!pn&&Math.abs(C.getVelocity())>(Po(v)?v:2500)&&(io(C.callbackAnimation),de?de.progress(1):io(i,gt==="reverse"?1:!ht,1))):L&&a&&!Pn&&a(C)}if(Se){var an=E?et/E.duration()*(E._caScrollDist||0):et;ee(an+(O._isFlipped?1:0)),Se(an)}Me&&Me(-et/E.duration()*(E._caScrollDist||0))}},C.enable=function(le,Je){C.enabled||(C.enabled=!0,bn(P,"resize",Lo),N||bn(P,"scroll",$s),j&&bn(r,"refreshInit",j),le!==!1&&(C.progress=Ze=0,xe=De=Ie=J()),Je!==!1&&C.refresh())},C.getTween=function(le){return le&&te?te.tween:de},C.setPositions=function(le,Je,Oe,et){if(E){var Qt=E.scrollTrigger,ht=E.duration(),Ft=Qt.end-Qt.start;le=Qt.start+Ft*le/ht,Je=Qt.start+Ft*Je/ht}C.refresh(!1,!1,{start:Fp(le,Oe&&!!C._startClamp),end:Fp(Je,Oe&&!!C._endClamp)},et),C.update()},C.adjustPinSpacing=function(le){if(ce&&le){var Je=ce.indexOf(R.d)+1;ce[Je]=parseFloat(ce[Je])+le+on,ce[1]=parseFloat(ce[1])+le+on,Da(ce)}},C.disable=function(le,Je){if(le!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Je||de&&de.pause(),be=0,_e&&(_e.uncache=1),j&&_n(r,"refreshInit",j),G&&(G.pause(),te.tween&&te.tween.kill()&&(te.tween=0)),!N)){for(var Oe=lt.length;Oe--;)if(lt[Oe].scroller===P&&lt[Oe]!==C)return;_n(P,"resize",Lo),N||_n(P,"scroll",$s)}},C.kill=function(le,Je){C.disable(le,Je),de&&!Je&&de.kill(),l&&delete Qu[l];var Oe=lt.indexOf(C);Oe>=0&&lt.splice(Oe,1),Oe===Wn&&Fc>0&&Wn--,Oe=0,lt.forEach(function(et){return et.scroller===C.scroller&&(Oe=1)}),Oe||Xn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,le&&i.revert({kill:!1}),Je||i.kill()),re&&[re,oe,O,pe].forEach(function(et){return et.parentNode&&et.parentNode.removeChild(et)}),Yo===C&&(Yo=0),d&&(_e&&(_e.uncache=1),Oe=0,lt.forEach(function(et){return et.pin===d&&Oe++}),Oe||(_e.spacer=0)),n.onKill&&n.onKill(C)},lt.push(C),C.enable(!1,!1),we&&we(C),i&&i.add&&!Re){var Ke=C.update;C.update=function(){C.update=Ke,ft.cache++,Fe||Q||C.refresh()},Le.delayedCall(.01,C.update),Re=.01,Fe=Q=0}else C.refresh();d&&Zv()},r.register=function(n){return ba||(Le=n||n0(),t0()&&window.document&&r.enable(),ba=Ro),ba},r.defaults=function(n){if(n)for(var i in n)zl[i]=n[i];return zl},r.disable=function(n,i){Ro=0,lt.forEach(function(a){return a[i?"kill":"disable"](n)}),_n(ut,"wheel",$s),_n(yt,"scroll",$s),clearInterval(Fl),_n(yt,"touchcancel",$i),_n(St,"touchstart",$i),kl(_n,yt,"pointerdown,touchstart,mousedown",Up),kl(_n,yt,"pointerup,touchend,mouseup",Op),th.kill(),Ol(_n);for(var s=0;s<ft.length;s+=3)Bl(_n,ft[s],ft[s+1]),Bl(_n,ft[s],ft[s+2])},r.enable=function(){if(ut=window,yt=document,hi=yt.documentElement,St=yt.body,Le){if(hl=Le.utils.toArray,Ho=Le.utils.clamp,$u=Le.core.context||$i,Uh=Le.core.suppressOverwrites||$i,Md=ut.history.scrollRestoration||"auto",ef=ut.pageYOffset||0,Le.core.globals("ScrollTrigger",r),St){Ro=1,La=document.createElement("div"),La.style.height="100vh",La.style.position="absolute",f0(),Xv(),$t.register(Le),r.isTouch=$t.isTouch,Vr=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ju=$t.isTouch===1,bn(ut,"wheel",$s),yd=[ut,yt,hi,St],Le.matchMedia?(r.matchMedia=function(h){var f=Le.matchMedia(),u;for(u in h)f.add(u,h[u]);return f},Le.addEventListener("matchMediaInit",function(){h0(),Cd()}),Le.addEventListener("matchMediaRevert",function(){return c0()}),Le.addEventListener("matchMedia",function(){ys(0,1),Fs("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return Bh(),Bh})):console.warn("Requires GSAP 3.11.0 or later"),Bh(),bn(yt,"scroll",$s);var n=St.hasAttribute("style"),i=St.style,s=i.borderTopStyle,a=Le.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Sr(St),ln.m=Math.round(o.top+ln.sc())||0,Kn.m=Math.round(o.left+Kn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(St.setAttribute("style",""),St.removeAttribute("style")),Fl=setInterval(zp,250),Le.delayedCall(.5,function(){return Ul=0}),bn(yt,"touchcancel",$i),bn(St,"touchstart",$i),kl(bn,yt,"pointerdown,touchstart,mousedown",Up),kl(bn,yt,"pointerup,touchend,mouseup",Op),Ju=Le.utils.checkPrefix("transform"),Uc.push(Ju),ba=Ln(),th=Le.delayedCall(.2,ys).pause(),va=[yt,"visibilitychange",function(){var h=ut.innerWidth,f=ut.innerHeight;yt.hidden?(Dp=h,Np=f):(Dp!==h||Np!==f)&&Lo()},yt,"DOMContentLoaded",ys,ut,"load",ys,ut,"resize",Lo],Ol(bn),lt.forEach(function(h){return h.enable(0,1)}),l=0;l<ft.length;l+=3)Bl(_n,ft[l],ft[l+1]),Bl(_n,ft[l],ft[l+2])}else if(yt){var c=function h(){r.enable(),yt.removeEventListener("DOMContentLoaded",h)};yt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Oh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Fl)||(Fl=i)&&setInterval(zp,i),"ignoreMobileResize"in n&&(ju=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ol(_n)||Ol(bn,n.autoRefreshEvents||"none"),Z_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Yn(n),a=ft.indexOf(s),o=Ns(s);~a&&ft.splice(a,o?6:2),i&&(o?sr.unshift(ut,i,St,i,hi,i):sr.unshift(s,i))},r.clearMatchMedia=function(n){lt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(li(n)?Yn(n):n).getBoundingClientRect(),o=a[s?Rs:Cs]*i||0;return s?a.right-o>0&&a.left+o<ut.innerWidth:a.bottom-o>0&&a.top+o<ut.innerHeight},r.positionInViewport=function(n,i,s){li(n)&&(n=Yn(n));var a=n.getBoundingClientRect(),o=a[s?Rs:Cs],l=i==null?o/2:i in ih?ih[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ut.innerWidth:(a.top+l)/ut.innerHeight},r.killAll=function(n){if(lt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Is.killAll||[];Is={},i.forEach(function(s){return s()})}},r})();nt.version="3.15.0";nt.saveStyles=function(r){return r?hl(r).forEach(function(e){if(e&&e.style){var t=oi.indexOf(e);t>=0&&oi.splice(t,5),oi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),$u())}}):oi};nt.revert=function(r,e){return Cd(!r,e)};nt.create=function(r,e){return new nt(r,e)};nt.refresh=function(r){return r?Lo(!0):(ba||nt.register())&&ys(!0)};nt.update=function(r){return++ft.cache&&wr(r===!0?2:0)};nt.clearScrollMemory=u0;nt.maxScroll=function(r,e){return tr(r,e?Kn:ln)};nt.getScrollFunc=function(r,e){return ss(Yn(r),e?Kn:ln)};nt.getById=function(r){return Qu[r]};nt.getAll=function(){return lt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!Ni};nt.snapDirectional=Rd;nt.addEventListener=function(r,e){var t=Is[r]||(Is[r]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(r,e){var t=Is[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};nt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,h){var f=[],u=[],d=Le.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),u.push(p),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Nn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Nn(s)&&(s=s(),bn(nt,"refresh",function(){return s=e.batchMax()})),hl(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(nt.create(c))}),t};var qp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Gh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===hi&&r(St,t)},Wl={auto:1,scroll:1},ix=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Le.core.getCache(s),o=Ln(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Wl[(l=Ai(s)).overflowY]||Wl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Ns(s)&&(Wl[(l=Ai(s)).overflowY]||Wl[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},p0=function(e,t,n,i){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ix,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&bn(yt,$t.eventTypes[0],Yp,!1,!0)},onDisable:function(){return _n(yt,$t.eventTypes[0],Yp,!0)}})},rx=/(input|label|select|textarea)/i,Kp,Yp=function(e){var t=rx.test(e.target.tagName);(t||Kp)&&(e._gsapAllow=!0,Kp=t)},sx=function(e){xs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Yn(e.target)||hi,h=Le.core.globals().ScrollSmoother,f=h&&h.get(),u=Vr&&(e.content&&Yn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=ss(c,ln),p=ss(c,Kn),_=1,g=($t.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,m=0,S=Nn(i)?function(){return i(o)}:function(){return i||2.8},M,b,x=p0(c,e.type,!0,s),w=function(){return b=!1},E=$i,v=$i,T=function(){l=tr(c,ln),v=Ho(Vr?1:0,l),n&&(E=Ho(0,tr(c,Kn))),M=Ps},R=function(){u._gsap.y=Co(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(b){requestAnimationFrame(w);var $=Co(o.deltaY/2),W=v(d.v-$);if(u&&W!==d.v+d.offset){d.offset=W-d.v;var C=Co((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",u._gsap.y=C+"px",d.cacheID=ft.cache,wr()}return!0}d.offset&&R(),b=!0},P,I,N,F,z=function(){T(),P.isActive()&&P.vars.scrollY>l&&(d()>l?P.progress(1)&&d(l):P.resetTo("scrollY",l))};return u&&Le.set(u,{y:"+=0"}),e.ignoreCheck=function(B){return Vr&&B.type==="touchmove"&&L()||_>1.05&&B.type!=="touchstart"||o.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){b=!1;var B=_;_=Co((ut.visualViewport&&ut.visualViewport.scale||1)/g),P.pause(),B!==_&&Gh(c,_>1.01?!0:n?!1:"x"),I=p(),N=d(),T(),M=Ps},e.onRelease=e.onGestureStart=function(B,$){if(d.offset&&R(),!$)F.restart(!0);else{ft.cache++;var W=S(),C,j;n&&(C=p(),j=C+W*.05*-B.velocityX/.227,W*=qp(p,C,j,tr(c,Kn)),P.vars.scrollX=E(j)),C=d(),j=C+W*.05*-B.velocityY/.227,W*=qp(d,C,j,tr(c,ln)),P.vars.scrollY=v(j),P.invalidate().duration(W).play(.01),(Vr&&P.vars.scrollY>=l||C>=l-1)&&Le.to({},{onUpdate:z,duration:W})}a&&a(B)},e.onWheel=function(){P._ts&&P.pause(),Ln()-m>1e3&&(M=0,m=Ln())},e.onChange=function(B,$,W,C,j){if(Ps!==M&&T(),$&&n&&p(E(C[2]===$?I+(B.startX-B.x):p()+$-C[1])),W){d.offset&&R();var fe=j[2]===W,me=fe?N+B.startY-B.y:d()+W-j[1],Ie=v(me);fe&&me!==Ie&&(N+=Ie-me),d(Ie)}(W||$)&&wr()},e.onEnable=function(){Gh(c,n?!1:"x"),nt.addEventListener("refresh",z),bn(ut,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),x.enable()},e.onDisable=function(){Gh(c,!0),_n(ut,"resize",z),nt.removeEventListener("refresh",z),x.kill()},e.lockAxis=e.lockAxis!==!1,o=new $t(e),o.iOS=Vr,Vr&&!d()&&d(1),Vr&&Le.ticker.add($i),F=o._dc,P=Le.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:d0(d,d(),function(){return P.pause()})},onUpdate:wr,onComplete:F.vars.onComplete}),o};nt.sort=function(r){if(Nn(r))return lt.sort(r);var e=ut.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ut.innerHeight}),lt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};nt.observe=function(r){return new $t(r)};nt.normalizeScroll=function(r){if(typeof r>"u")return Vn;if(r===!0&&Vn)return Vn.enable();if(r===!1){Vn&&Vn.kill(),Vn=r;return}var e=r instanceof $t?r:sx(r);return Vn&&Vn.target===e.target&&Vn.kill(),Ns(e.target)&&(Vn=e),e};nt.core={_getVelocityProp:Yu,_inputObserver:p0,_scrollers:ft,_proxies:sr,bridge:{ss:function(){Ni||Fs("scrollStart"),Ni=Ln()},ref:function(){return Pn}}};n0()&&Le.registerPlugin(nt);let ro,so,Jp=typeof Symbol=="function"?Symbol():"_split",nf,ax=()=>nf||Pl.register(window.gsap),jp=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,fl=r=>r?typeof r=="string"?fl(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...fl(t)):e.push(t),e),[]):[r]:[],$p=r=>fl(r).filter(e=>e&&e.nodeType===1),rf=[],Hh=function(){},ox={add:r=>r()},lx=/\s+/g,Zp=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),rh={left:0,top:0,width:0,height:0},cx=(r,e)=>{for(;++e<r.length&&r[e]===rh;);return r[e]||rh},Qp=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},em=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||rf),n=r.length,i,s,a,o;if(t.size)for(;--n>-1;){s=r[n];for(a of t)if(a.startsWith(s)&&a.length>s.length){for(i=0,o=s;a.startsWith(o+=r[n+ ++i])&&o.length<a.length;);if(i&&o.length===a.length){r[n]=a,r.splice(n+1,i);break}}}}return r},tm=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Zs=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),sf=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:a=!1}=e,o=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let f=document.createElement(i),u=t.length+1;return n&&(f.className=n+(l?" "+n+u:"")),a&&f.style.setProperty("--"+r,u+""),s!=="none"&&f.setAttribute("aria-hidden","true"),i!=="span"&&(f.style.position="relative",f.style.display=o),f.textContent=h,t.push(f),f};return l&&(n=n.replace("++","")),c.collection=t,c},hx=(r,e,t,n)=>{let i=sf("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(a,o)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[a]);a<o;a++)l.appendChild(e[a]);l.normalize()}},m0=(r,e,t,n,i,s,a,o,l,c)=>{var h;let f=Array.from(r.childNodes),u=0,{wordDelimiter:d,reduceWhiteSpace:p=!0,prepareText:_}=e,g=r.getBoundingClientRect(),m=g,S=!p&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",M=0,b=t.collection,x,w,E,v,T,R,L,P,I,N,F,z,B,$,W,C,j,fe;for(typeof d=="object"?(E=d.delimiter||d,w=d.replaceWith||""):w=d===""?"":d||" ",x=w!==" ";u<f.length;u++)if(v=f[u],v.nodeType===3){for(W=v.textContent||"",p?W=W.replace(lx," "):S&&(W=W.replace(/\n/g,w+`
`)),_&&(W=_(W,r)),v.textContent=W,T=w||E?W.split(E||w):W.match(o)||rf,j=T[T.length-1],P=x?j.slice(-1)===" ":!j,j||T.pop(),m=g,L=x?T[0].charAt(0)===" ":!T[0],L&&Zs(" ",r,v),T[0]||T.shift(),em(T,l),s&&c||(v.textContent=""),I=1;I<=T.length;I++)if(C=T[I-1],!p&&S&&C.charAt(0)===`
`&&((h=v.previousSibling)==null||h.remove(),Zs(document.createElement("br"),r,v),C=C.slice(1)),!p&&C==="")Zs(w,r,v);else if(C===" ")r.insertBefore(document.createTextNode(" "),v);else{if(x&&C.charAt(0)===" "&&Zs(" ",r,v),M&&I===1&&!L&&b.indexOf(M.parentNode)>-1?(R=b[b.length-1],R.appendChild(document.createTextNode(n?"":C))):(R=t(n?"":C),Zs(R,r,v),M&&I===1&&!L&&R.insertBefore(M,R.firstChild)),n)for(F=jp?em([...jp.segment(C)].map(me=>me.segment),l):C.match(o)||rf,fe=0;fe<F.length;fe++)R.appendChild(F[fe]===" "?document.createTextNode(" "):n(F[fe]));if(s&&c){if(W=v.textContent=W.substring(C.length+1,W.length),N=R.getBoundingClientRect(),N.top>m.top&&N.left<=m.left){for(z=r.cloneNode(),B=r.childNodes[0];B&&B!==R;)$=B,B=B.nextSibling,z.appendChild($);r.parentNode.insertBefore(z,r),i&&tm(z)}m=N}(I<T.length||P)&&Zs(I>=T.length?" ":x&&C.slice(-1)===" "?" "+w:w,r,v)}r.removeChild(v),M=0}else v.nodeType===1&&(a&&a.indexOf(v)>-1?(b.indexOf(v.previousSibling)>-1&&b[b.length-1].appendChild(v),M=v):(m0(v,e,t,n,i,s,a,o,l,!0),M=0),i&&tm(v))};const g0=class _0{constructor(e,t){this.isSplit=!1,ax(),this.elements=$p(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(a=>{var o;t.overwrite!==!1&&((o=a[Jp])==null||o._data.orig.filter(({element:l})=>l===a).forEach(Qp)),a[Jp]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let a=n.length,o;for(;a--;){o=n[a];let l=o.element.offsetWidth;if(l!==o.width){o.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Hh(this),this.split(t)}split(e){return(this._ctx||ox).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:a,autoSplit:o=!1,specialChars:l,mask:c}=this.vars,h=t.indexOf("lines")>-1,f=t.indexOf("chars")>-1,u=t.indexOf("words")>-1,d=f&&!u&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=p?new RegExp(p.source+"|"+Zp.source,"gu"):Zp,g=!!e.ignore&&$p(e.ignore),{orig:m,animTime:S,obs:M}=this._data,b;(f||u||h)&&(this.elements.forEach((x,w)=>{m[w]={element:x,html:x.innerHTML,ariaL:x.getAttribute("aria-label"),ariaH:x.getAttribute("aria-hidden")},n==="auto"?x.setAttribute("aria-label",(x.textContent||"").trim()):n==="hidden"&&x.setAttribute("aria-hidden","true");let E=[],v=[],T=[],R=f?sf("char",e,E):null,L=sf("word",e,v),P,I,N,F;if(m0(x,e,L,R,d,i&&(h||d),g,_,p,!1),h){let z=fl(x.childNodes),B=hx(x,z,e,T),$,W=[],C=0,j=z.map(Ie=>Ie.nodeType===1?Ie.getBoundingClientRect():rh),fe=rh,me;for(P=0;P<z.length;P++)$=z[P],$.nodeType===1&&($.nodeName==="BR"?((!P||z[P-1].nodeName!=="BR")&&(W.push($),B(C,P+1)),C=P+1,fe=cx(j,P)):(me=j[P],P&&me.top>fe.top&&me.left<fe.left+fe.width-1&&(B(C,P),C=P),fe=me));C<P&&B(C,P),W.forEach(Ie=>{var Xe;return(Xe=Ie.parentNode)==null?void 0:Xe.removeChild(Ie)})}if(!u){for(P=0;P<v.length;P++)if(I=v[P],f||!I.nextSibling||I.nextSibling.nodeType!==3)if(s&&!h){for(N=document.createElement("span"),N.style.whiteSpace="nowrap";I.firstChild;)N.appendChild(I.firstChild);I.replaceWith(N)}else I.replaceWith(...I.childNodes);else F=I.nextSibling,F&&F.nodeType===3&&(F.textContent=(I.textContent||"")+(F.textContent||""),I.remove());v.length=0,x.normalize()}this.lines.push(...T),this.words.push(...v),this.chars.push(...E)}),c&&this[c]&&this.masks.push(...this[c].map(x=>{let w=x.cloneNode();return x.replaceWith(w),w.appendChild(x),x.className&&(w.className=x.className.trim().split(" ").map(E=>E+"-mask").join(" ")),w.style.overflow="clip",w}))),this.isSplit=!0,so&&h&&o&&so.addEventListener("loadingdone",this._split),(b=a&&a(this))&&b.totalTime&&(this._data.anim=S?b.totalTime(S):b),h&&o&&this.elements.forEach((x,w)=>{m[w].width=x.offsetWidth,M&&M.observe(x)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),so?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(Qp),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new _0(e,t)}static register(e){ro=ro||e||window.gsap,ro&&(fl=ro.utils.toArray,Hh=ro.core.context||Hh),!nf&&window.innerWidth>0&&(so=document.fonts,nf=!0)}};g0.version="3.15.0";let Pl=g0;var nm="1.3.27";function b0(r,e,t){return Math.max(r,Math.min(e,t))}function ux(r,e,t){return(1-t)*r+t*e}function fx(r,e,t,n){return ux(r,e,1-Math.exp(-t*n))}function dx(r,e){return(r%e+e)%e}var px=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=b0(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=fx(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function mx(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var gx=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=mx(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},v0=class{events={};emit(r,...e){const t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}};const _x=100/6,Ur={passive:!1};function im(r,e){return r===1?_x:r===2?e:1}var bx=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new v0;constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ur),this.element.addEventListener("touchstart",this.onTouchStart,Ur),this.element.addEventListener("touchmove",this.onTouchMove,Ur),this.element.addEventListener("touchend",this.onTouchEnd,Ur)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ur),this.element.removeEventListener("touchstart",this.onTouchStart,Ur),this.element.removeEventListener("touchmove",this.onTouchMove,Ur),this.element.removeEventListener("touchend",this.onTouchEnd,Ur)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=im(n,this.window.width),s=im(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const rm=r=>Math.min(1,1.001-2**(-10*r));var vx=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new px;emitter=new v0;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:u=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:g,virtualScroll:m,overscroll:S=!0,autoRaf:M=!1,anchors:b=!1,autoToggle:x=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:v=E,stopInertiaOnNavigate:T=!1,respectReducedMotion:R=!0}={}){window.lenisVersion=nm,window.lenis||(window.lenis={}),window.lenis.version=nm,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=rm:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:f,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:g,virtualScroll:m,overscroll:S,autoRaf:M,anchors:b,autoToggle:x,allowNestedScroll:w,naiveDimensions:v,stopInertiaOnNavigate:T,respectReducedMotion:R},this.dimensions=new gx(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new bx(t,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],a=40,o=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=a,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=a;return o||l}onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const u=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,d=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(p=u),p){if(this.options.wrapper!==window){const b=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?b.left:b.top}const _=p.getBoundingClientRect(),g=getComputedStyle(p),m=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),S=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(M)?0:M)}}if(typeof u=="number"){if(u+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=b0(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof a=="number"&&typeof o!="function"?o=rm:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,u,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,l,c,h,f,u,d,p;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),a=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;f=r.scrollWidth,u=r.scrollHeight,d=r.clientWidth,p=r.clientHeight,o=f>d,l=u>p,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=u,i.clientWidth=d,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,f=i.scrollWidth,u=i.scrollHeight,d=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let g,m,S,M,b,x;if(_==="horizontal")g=Math.round(r.scrollLeft),m=f-d,S=e,M=s,b=o,x=c;else if(_==="vertical")g=Math.round(r.scrollTop),m=u-p,S=t,M=a,b=l,x=h;else return!1;return!x&&(g>=m||g<=0)?!0:(S>0?g<m:g>0)&&M&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?dx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const af={hero:{pos:[-1.5,1.05,1.3],target:[.35,.85,-3],fov:38,mood:"amber"},table:{pos:[.45,1.42,-.1],target:[.1,.56,-1],fov:38,mood:"amber"},cairo:{pos:[-.62,.92,-.32],target:[-1.68,.36,-1.62],fov:36,mood:"gold",chest:1},alexandria:{pos:[.85,.95,-.05],target:[.2,.66,-1.2],fov:34,mood:"fire"},samarkand:{pos:[1.25,1.2,.55],target:[-.6,1.05,-1.7],fov:38,mood:"moon"},door:{pos:[.25,1.4,-2.2],target:[0,1.45,-6],fov:42,mood:"amber"},sync:{pos:[.05,1.45,-3],target:[0,1.4,-7],fov:46,mood:"open",door:1,flash:1},inside:{pos:[.6,1.6,-2],target:[-.2,1.2,-6.5],fov:44,mood:"open",door:1,veil:.8},final:{pos:[0,1.35,-2.6],target:[0,1.35,-7],fov:44,mood:"open",door:1,veil:.05}};class xx{constructor(e){this.world=e,this.measure()}world;active=null;onChange=null;anchors=[];measure(){const e=window.innerHeight,t=[];for(const n of document.querySelectorAll("[data-shot]")){const i=af[n.dataset.shot];if(!i)continue;const s=n.getBoundingClientRect().top+window.scrollY,a=n.offsetHeight,o=s+a/2-e/2,l=Number(n.dataset.hold??0)*Math.max(a-e,0)/2;t.push({y:Math.max(0,o-l),shot:i,el:n}),l>0&&t.push({y:o+l,shot:i,el:n})}this.anchors=t.sort((n,i)=>n.y-i.y)}update(e){const t=this.anchors;if(!t.length)return;let n=0;for(;n<t.length-1&&t[n+1].y<=e;)n++;const i=t[n],s=t[Math.min(n+1,t.length-1)],a=s.y>i.y?Math.min(Math.max((e-i.y)/(s.y-i.y),0),1):0;this.world.direct(i.shot,s.shot,a);const o=a<.5?i.el:s.el;if(o!==this.active){const l=this.active;this.active=o,this.onChange?.(o,l)}}}const Xl=[{id:"citadel",name:"The Citadel Heist",place:"Cairo, 1249",minutes:60,min:2,max:6,price:550},{id:"library",name:"The Burning Library",place:"Alexandria, 48 BC",minutes:75,min:3,max:6,price:600},{id:"observatory",name:"The Observatory",place:"Samarkand, 1449",minutes:60,min:2,max:5,price:650}],Sx=["13:00","15:00","17:00","19:00","21:00","23:00"],yx=14;function Mx(r){let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619);return(e>>>0)%1e3/1e3}const Tx=r=>`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()}`,sm=r=>Math.round(r).toLocaleString("en-US");function wx(r){const e=r.querySelector(".booker__rooms"),t=r.querySelector(".booker__days"),n=r.querySelector(".booker__slots"),i=r.querySelector(".stepper__value"),s=r.querySelector(".stepper__hint"),a=r.querySelector('[data-step="-1"]'),o=r.querySelector('[data-step="1"]'),l=r.querySelector('[data-sum="room"]'),c=r.querySelector('[data-sum="when"]'),h=r.querySelector('[data-sum="total"]'),f=new Date;f.setHours(0,0,0,0);const u=Array.from({length:yx},(M,b)=>new Date(f.getFullYear(),f.getMonth(),f.getDate()+b)),d={room:Xl[0],day:null,slot:null,players:4},p={total:0};for(const M of Xl){const b=document.createElement("label");b.className="room-opt",b.innerHTML=`<input type="radio" name="room" value="${M.id}"><b>${M.name}</b><span>${M.place}</span><span>${M.minutes} min · EGP ${M.price}</span>`,e.append(b)}const _=new Intl.DateTimeFormat("en-GB",{weekday:"short"}),g=new Intl.DateTimeFormat("en-GB",{weekday:"short",day:"numeric",month:"short"});u.forEach((M,b)=>{const x=document.createElement("button");x.type="button",x.className="day",x.setAttribute("role","radio"),x.setAttribute("aria-checked","false"),x.dataset.index=String(b),x.setAttribute("aria-label",g.format(M)),x.innerHTML=`<small>${b===0?"Today":_.format(M)}</small><b>${M.getDate()}</b>`,t.append(x)});for(const M of Sx){const b=document.createElement("button");b.type="button",b.className="slot",b.setAttribute("role","radio"),b.setAttribute("aria-checked","false"),b.dataset.slot=M,b.textContent=M,n.append(b)}const m=M=>{if(!d.day)return!1;const b=new Date;return d.day.getTime()===f.getTime()&&Number(M.slice(0,2))<=b.getHours()+1?!0:Mx(`${d.room.id}|${Tx(d.day)}|${M}`)<.3},S=()=>{e.querySelectorAll("input").forEach(b=>b.checked=b.value===d.room.id),t.querySelectorAll(".day").forEach(b=>{b.setAttribute("aria-checked",String(d.day!==null&&u[Number(b.dataset.index)].getTime()===d.day.getTime()))}),d.slot&&m(d.slot)&&(d.slot=null),n.querySelectorAll(".slot").forEach(b=>{b.disabled=m(b.dataset.slot),b.setAttribute("aria-checked",String(b.dataset.slot===d.slot))}),d.players=Math.min(Math.max(d.players,d.room.min),d.room.max),i.value=String(d.players),a.disabled=d.players<=d.room.min,o.disabled=d.players>=d.room.max,s.textContent=`${d.room.min} to ${d.room.max} players`,l.textContent=d.room.name,c.textContent=d.day?`${g.format(d.day)}${d.slot?`, ${d.slot}`:""}`:"Pick a day";const M=d.room.price*d.players;at.to(p,{total:M,duration:.6,ease:"power3.out",onUpdate:()=>h.textContent=sm(p.total)})};return e.addEventListener("change",M=>{const b=M.target.value;d.room=Xl.find(x=>x.id===b)??d.room,S()}),t.addEventListener("click",M=>{const b=M.target.closest(".day");b&&(d.day=u[Number(b.dataset.index)],S())}),n.addEventListener("click",M=>{const b=M.target.closest(".slot");!b||b.disabled||(d.slot=b.dataset.slot,S())}),[a,o].forEach(M=>M.addEventListener("click",()=>{d.players+=Number(M.dataset.step),S()})),r.addEventListener("submit",M=>{if(M.preventDefault(),!d.day||!d.slot){r.classList.remove("is-error"),r.offsetWidth,r.classList.add("is-error"),c.textContent=d.day?"Pick a time":"Pick a day and time",(d.day?n.querySelector(".slot:not(:disabled)"):t.querySelector(".day"))?.focus();return}const b=new Intl.DateTimeFormat("en-GB",{weekday:"long",day:"numeric",month:"long"}).format(d.day),x=`Hi SYNC, I'd like to book ${d.room.name} on ${b} at ${d.slot} for ${d.players} players (EGP ${sm(d.room.price*d.players)} total).`;window.open(`https://wa.me/?text=${encodeURIComponent(x)}`,"_blank","noopener")}),S(),{select(M){d.room=Xl.find(b=>b.id===M)??d.room,S()}}}function Ex(){if(!matchMedia("(hover: hover) and (pointer: fine)").matches)return;const r=document.querySelector(".cursor");if(!r)return;const e=r.querySelector(".cursor__dot"),t=r.querySelector(".cursor__ring"),n=r.querySelector(".cursor__label"),i=at.quickSetter(e,"x","px"),s=at.quickSetter(e,"y","px"),a=at.quickTo(t,"x",{duration:.55,ease:"power3.out"}),o=at.quickTo(t,"y",{duration:.55,ease:"power3.out"});at.set([e,t],{x:-100,y:-100}),window.addEventListener("pointermove",l=>{i(l.clientX),s(l.clientY),a(l.clientX),o(l.clientY)}),window.addEventListener("pointerdown",()=>r.classList.add("is-down")),window.addEventListener("pointerup",()=>r.classList.remove("is-down")),document.addEventListener("pointerleave",()=>at.to(r,{opacity:0,duration:.3})),document.addEventListener("pointerenter",()=>at.to(r,{opacity:1,duration:.3})),document.addEventListener("pointerover",l=>{const c=l.target.closest("[data-cursor], a, button, label, summary, input");c?c.dataset.cursor?(n.textContent=c.dataset.cursor,r.classList.add("is-hover"),r.classList.remove("is-link")):(r.classList.add("is-link"),r.classList.remove("is-hover")):r.classList.remove("is-hover","is-link")})}function Ax(){matchMedia("(hover: hover) and (pointer: fine)").matches&&document.querySelectorAll(".magnetic").forEach(r=>{const e=at.quickTo(r,"x",{duration:.6,ease:"power3.out"}),t=at.quickTo(r,"y",{duration:.6,ease:"power3.out"});r.addEventListener("pointermove",n=>{const i=r.getBoundingClientRect();e((n.clientX-(i.left+i.width/2))*.3),t((n.clientY-(i.top+i.height/2))*.3)}),r.addEventListener("pointerleave",()=>{e(0),t(0)})})}const am="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/°·",om=new WeakMap;function lm(r,e,t=.9){om.get(r)?.kill();const n=r.textContent??"",i=Math.max(n.length,e.length),s={p:0},a=at.to(s,{p:1,duration:t,ease:"power2.out",onUpdate:()=>{let o="";const l=Math.floor(s.p*i);for(let c=0;c<i;c++){const h=e[c]??"";c<l||h===" "?o+=h:c<l+6?o+=am[Math.random()*am.length|0]:o+=n[c]??""}r.textContent=o},onComplete:()=>{r.textContent=e}});om.set(r,a)}const Pd="186",Rx=0,cm=1,Cx=2,Jo=1,Px=2,Do=3,as=0,ti=1,zi=2,ar=0,jo=1,Pr=2,hm=3,um=4,Lx=5,xa=100,Dx=101,Nx=102,Ix=103,Fx=104,Ux=200,Ox=201,kx=202,Bx=203,x0=204,S0=205,zx=206,Gx=207,Hx=208,Vx=209,Wx=210,Xx=211,qx=212,Kx=213,Yx=214,of=0,lf=1,cf=2,dl=3,hf=4,uf=5,ff=6,df=7,y0=0,Jx=1,jx=2,or=0,Ld=1,Dd=2,Nd=3,vh=4,Id=5,Fd=6,Ud=7,fm="attached",$x="detached",M0=300,Us=301,Ha=302,kc=303,Vh=304,xh=306,Os=1e3,Li=1001,sh=1002,cn=1003,T0=1004,No=1005,zt=1006,Bc=1007,nr=1008,di=1009,w0=1010,E0=1011,pl=1012,Od=1013,cr=1014,jn=1015,xn=1016,kd=1017,Bd=1018,ml=1020,A0=35902,R0=35899,C0=1021,P0=1022,Di=1023,Lr=1026,Ms=1027,zd=1028,Gd=1029,ks=1030,Hd=1031,Vd=1033,zc=33776,Gc=33777,Hc=33778,Vc=33779,pf=35840,mf=35841,gf=35842,_f=35843,bf=36196,vf=37492,xf=37496,Sf=37488,yf=37489,ah=37490,Mf=37491,Tf=37808,wf=37809,Ef=37810,Af=37811,Rf=37812,Cf=37813,Pf=37814,Lf=37815,Df=37816,Nf=37817,If=37818,Ff=37819,Uf=37820,Of=37821,kf=36492,Bf=36494,zf=36495,Gf=36283,Hf=36284,oh=36285,Vf=36286,gl=2300,_l=2301,Wh=2302,dm=2303,pm=2400,mm=2401,gm=2402,Zx=2500,Qx=0,L0=1,Wf=2,eS=3200,Xf=0,tS=1,qr="",vn="srgb",ii="srgb-linear",lh="linear",xt="srgb",Xh=7680,nS=519,iS=512,rS=513,sS=514,Wd=515,aS=516,oS=517,Xd=518,lS=519,D0=35044,_m="300 es",ir=2e3,bl=2001;function cS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function hS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function vl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function uS(){const r=vl("canvas");return r.style.display="block",r}const bm={};function ch(...r){const e="THREE."+r.shift();console.log(e,...r)}function N0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function We(...r){r=N0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Qe(...r){r=N0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Na(...r){const e=r.join(" ");e in bm||(bm[e]=!0,We(...r))}function fS(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const dS={[of]:lf,[cf]:ff,[hf]:df,[dl]:uf,[lf]:of,[ff]:cf,[df]:hf,[uf]:dl};class Hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vm=1234567;const $o=Math.PI/180,Va=180/Math.PI;function Ii(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function qd(r,e){return(r%e+e)%e}function pS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function mS(r,e,t){return r!==e?(t-r)/(e-r):0}function Zo(r,e,t){return(1-t)*r+t*e}function gS(r,e,t,n){return Zo(r,e,1-Math.exp(-t*n))}function _S(r,e=1){return e-Math.abs(qd(r,e*2)-e)}function bS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function vS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function xS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function SS(r,e){return r+Math.random()*(e-r)}function yS(r){return r*(.5-Math.random())}function MS(r){r!==void 0&&(vm=r);let e=vm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TS(r){return r*$o}function wS(r){return r*Va}function ES(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function AS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function RS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function CS(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),f=s((e-n)/2),u=a((e-n)/2),d=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*f,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*f,o*c);break;case"ZXZ":r.set(l*f,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*p,l*d,o*c);break;case"YXY":r.set(l*d,o*h,l*p,o*c);break;case"ZYZ":r.set(l*p,l*d,o*h,o*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ls={DEG2RAD:$o,RAD2DEG:Va,generateUUID:Ii,clamp:ot,euclideanModulo:qd,mapLinear:pS,inverseLerp:mS,lerp:Zo,damp:gS,pingpong:_S,smoothstep:bS,smootherstep:vS,randInt:xS,randFloat:SS,randFloatSpread:yS,seededRandom:MS,degToRad:TS,radToDeg:wS,isPowerOfTwo:ES,ceilPowerOfTwo:AS,floorPowerOfTwo:RS,setQuaternionFromProperEuler:CS,normalize:Mt,denormalize:Gi},op=class op{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};op.prototype.isVector2=!0;let he=op;class Dr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=s[a+0],d=s[a+1],p=s[a+2],_=s[a+3];if(f!==_||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*_;g<0&&(u=-u,d=-d,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const S=Math.acos(g),M=Math.sin(S);m=Math.sin(m*S)/M,o=Math.sin(o*S)/M,l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+_*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+_*o;const S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[a],u=s[a+1],d=s[a+2],p=s[a+3];return e[t]=o*p+h*f+l*d-c*u,e[t+1]=l*p+h*u+c*f-o*d,e[t+2]=c*p+h*d+o*u-l*f,e[t+3]=h*p-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(s/2),u=l(n/2),d=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const lp=class lp{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-s*f,this.z=i+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qh.copy(this).projectOnVector(e),this.sub(qh)}reflect(e){return this.sub(qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lp.prototype.isVector3=!0;let U=lp;const qh=new U,xm=new Dr,cp=class cp{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],_=i[0],g=i[3],m=i[6],S=i[1],M=i[4],b=i[7],x=i[2],w=i[5],E=i[8];return s[0]=a*_+o*S+l*x,s[3]=a*g+o*M+l*w,s[6]=a*m+o*b+l*E,s[1]=c*_+h*S+f*x,s[4]=c*g+h*M+f*w,s[7]=c*m+h*b+f*E,s[2]=u*_+d*S+p*x,s[5]=u*g+d*M+p*w,s[8]=u*m+d*b+p*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,d=c*s-a*l,p=t*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Na("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kh.makeScale(e,t)),this}rotate(e){return Na("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kh.makeRotation(-e)),this}translate(e,t){return Na("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cp.prototype.isMatrix3=!0;let tt=cp;const Kh=new tt,Sm=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ym=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PS(){const r={enabled:!0,workingColorSpace:ii,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(i.r=Er(i.r),i.g=Er(i.g),i.b=Er(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(i.r=Ia(i.r),i.g=Ia(i.g),i.b=Ia(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qr?lh:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Na("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Na("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ii]:{primaries:e,whitePoint:n,transfer:lh,toXYZ:Sm,fromXYZ:ym,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Sm,fromXYZ:ym,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),r}const dt=PS();function Er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ia(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qs;class LS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qs===void 0&&(Qs=vl("canvas")),Qs.width=e.width,Qs.height=e.height;const i=Qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Er(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Er(t[n]/255)*255):t[n]=Er(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DS=0;class Kd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Yh(i[a].image)):s.push(Yh(i[a]))}else s=Yh(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Yh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let NS=0;const Jh=new U;class hn extends Hs{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=Li,i=Li,s=zt,a=nr,o=Di,l=di,c=hn.DEFAULT_ANISOTROPY,h=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Ii(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jh).x}get height(){return this.source.getSize(Jh).y}get depth(){return this.source.getSize(Jh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==M0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=M0;hn.DEFAULT_ANISOTROPY=1;const hp=class hp{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(d+1)/2,x=(m+1)/2,w=(h+u)/4,E=(f+_)/4,v=(p+g)/4;return M>b&&M>x?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=E/n):b>x?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=w/i,s=v/i):x<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(x),n=E/s,i=v/s),this.set(n,i,s,t),this}let S=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(f-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hp.prototype.isVector4=!0;let Et=hp;class IS extends Hs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new hn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Kd(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends IS{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class I0 extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FS extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ph=class ph{constructor(e,t,n,i,s,a,o,l,c,h,f,u,d,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,f,u,d,p,_,g)}set(e,t,n,i,s,a,o,l,c,h,f,u,d,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ph().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ea.setFromMatrixColumn(e,0).length(),s=1/ea.setFromMatrixColumn(e,1).length(),a=1/ea.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,d=a*f,p=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,p=c*h,_=c*f;t[0]=u+_*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,p=c*h,_=c*f;t[0]=u-_*o,t[4]=-a*f,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,p=o*h,_=o*f;t[0]=l*h,t[4]=p*c-d,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-u*f,t[8]=p*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+p,t[10]=u-_*f}else if(e.order==="XZY"){const u=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=a*h,t[9]=d*f-p,t[2]=p*f-d,t[6]=o*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,OS)}lookAt(e,t,n){const i=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Or.crossVectors(n,si),Or.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Or.crossVectors(n,si)),Or.normalize(),ql.crossVectors(si,Or),i[0]=Or.x,i[4]=ql.x,i[8]=si.x,i[1]=Or.y,i[5]=ql.y,i[9]=si.y,i[2]=Or.z,i[6]=ql.z,i[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],S=n[3],M=n[7],b=n[11],x=n[15],w=i[0],E=i[4],v=i[8],T=i[12],R=i[1],L=i[5],P=i[9],I=i[13],N=i[2],F=i[6],z=i[10],B=i[14],$=i[3],W=i[7],C=i[11],j=i[15];return s[0]=a*w+o*R+l*N+c*$,s[4]=a*E+o*L+l*F+c*W,s[8]=a*v+o*P+l*z+c*C,s[12]=a*T+o*I+l*B+c*j,s[1]=h*w+f*R+u*N+d*$,s[5]=h*E+f*L+u*F+d*W,s[9]=h*v+f*P+u*z+d*C,s[13]=h*T+f*I+u*B+d*j,s[2]=p*w+_*R+g*N+m*$,s[6]=p*E+_*L+g*F+m*W,s[10]=p*v+_*P+g*z+m*C,s[14]=p*T+_*I+g*B+m*j,s[3]=S*w+M*R+b*N+x*$,s[7]=S*E+M*L+b*F+x*W,s[11]=S*v+M*P+b*z+x*C,s[15]=S*T+M*I+b*B+x*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],p=e[3],_=e[7],g=e[11],m=e[15],S=l*d-c*u,M=o*d-c*f,b=o*u-l*f,x=a*d-c*h,w=a*u-l*h,E=a*f-o*h;return t*(_*S-g*M+m*b)-n*(p*S-g*x+m*w)+i*(p*M-_*x+m*E)-s*(p*b-_*w+g*E)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],p=e[12],_=e[13],g=e[14],m=e[15],S=t*o-n*a,M=t*l-i*a,b=t*c-s*a,x=n*l-i*o,w=n*c-s*o,E=i*c-s*l,v=h*_-f*p,T=h*g-u*p,R=h*m-d*p,L=f*g-u*_,P=f*m-d*_,I=u*m-d*g,N=S*I-M*P+b*L+x*R-w*T+E*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=(o*I-l*P+c*L)*F,e[1]=(i*P-n*I-s*L)*F,e[2]=(_*E-g*w+m*x)*F,e[3]=(u*w-f*E-d*x)*F,e[4]=(l*R-a*I-c*T)*F,e[5]=(t*I-i*R+s*T)*F,e[6]=(g*b-p*E-m*M)*F,e[7]=(h*E-u*b+d*M)*F,e[8]=(a*P-o*R+c*v)*F,e[9]=(n*R-t*P-s*v)*F,e[10]=(p*w-_*b+m*S)*F,e[11]=(f*b-h*w-d*S)*F,e[12]=(o*T-a*L-l*v)*F,e[13]=(t*L-n*T+i*v)*F,e[14]=(_*M-p*x-g*S)*F,e[15]=(h*x-f*M+u*S)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,u=s*c,d=s*h,p=s*f,_=a*h,g=a*f,m=o*f,S=l*c,M=l*h,b=l*f,x=n.x,w=n.y,E=n.z;return i[0]=(1-(_+m))*x,i[1]=(d+b)*x,i[2]=(p-M)*x,i[3]=0,i[4]=(d-b)*w,i[5]=(1-(u+m))*w,i[6]=(g+S)*w,i[7]=0,i[8]=(p+M)*E,i[9]=(g-S)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ea.set(i[0],i[1],i[2]).length();const o=ea.set(i[4],i[5],i[6]).length(),l=ea.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Fi.copy(this);const c=1/a,h=1/o,f=1/l;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=f,Fi.elements[9]*=f,Fi.elements[10]*=f,t.setFromRotationMatrix(Fi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=ir,l=!1){const c=this.elements,h=2*s/(t-e),f=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===ir)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===bl)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ir,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-i),u=-(t+e)/(t-e),d=-(n+i)/(n-i);let p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===ir)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===bl)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ph.prototype.isMatrix4=!0;let it=ph;const ea=new U,Fi=new it,US=new U(0,0,0),OS=new U(1,1,1),Or=new U,ql=new U,si=new U,Mm=new it,Tm=new Dr;class os{constructor(e=0,t=0,n=0,i=os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tm.setFromEuler(this),this.setFromQuaternion(Tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}os.DEFAULT_ORDER="XYZ";class F0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kS=0;const wm=new U,ta=new Dr,dr=new it,Kl=new U,ao=new U,BS=new U,zS=new Dr,Em=new U(1,0,0),Am=new U(0,1,0),Rm=new U(0,0,1),Cm={type:"added"},GS={type:"removed"},na={type:"childadded",child:null},jh={type:"childremoved",child:null};class It extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new U,t=new os,n=new Dr,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new tt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(Em,e)}rotateY(e){return this.rotateOnAxis(Am,e)}rotateZ(e){return this.rotateOnAxis(Rm,e)}translateOnAxis(e,t){return wm.copy(e).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Em,e)}translateY(e){return this.translateOnAxis(Am,e)}translateZ(e){return this.translateOnAxis(Rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kl.copy(e):Kl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(ao,Kl,this.up):dr.lookAt(Kl,ao,this.up),this.quaternion.setFromRotationMatrix(dr),i&&(dr.extractRotation(i.matrixWorld),ta.setFromRotationMatrix(dr),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cm),na.child=e,this.dispatchEvent(na),na.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(GS),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cm),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,BS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,zS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}It.DEFAULT_UP=new U(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hi extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HS={type:"move"};class $h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(HS)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function Zh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=qd(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Zh(a,s,e+1/3),this.g=Zh(a,s,e),this.b=Zh(a,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=vn){function n(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const n=U0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return dt.workingToColorSpace(Cn.copy(this),e),Math.round(ot(Cn.r*255,0,255))*65536+Math.round(ot(Cn.g*255,0,255))*256+Math.round(ot(Cn.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Cn.copy(this),t);const n=Cn.r,i=Cn.g,s=Cn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=vn){dt.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,n=Cn.g,i=Cn.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(Yl);const n=Zo(kr.h,Yl.h,t),i=Zo(kr.s,Yl.s,t),s=Zo(kr.l,Yl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ke;ke.NAMES=U0;class Yd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new Yd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class VS extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ui=new U,pr=new U,Qh=new U,mr=new U,ia=new U,ra=new U,Pm=new U,eu=new U,tu=new U,nu=new U,iu=new Et,ru=new Et,su=new Et;class Ri{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ui.subVectors(e,t),i.cross(Ui);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ui.subVectors(i,t),pr.subVectors(n,t),Qh.subVectors(e,t);const a=Ui.dot(Ui),o=Ui.dot(pr),l=Ui.dot(Qh),c=pr.dot(pr),h=pr.dot(Qh),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mr.x),l.addScaledVector(a,mr.y),l.addScaledVector(o,mr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return iu.setScalar(0),ru.setScalar(0),su.setScalar(0),iu.fromBufferAttribute(e,t),ru.fromBufferAttribute(e,n),su.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(iu,s.x),a.addScaledVector(ru,s.y),a.addScaledVector(su,s.z),a}static isFrontFacing(e,t,n,i){return Ui.subVectors(n,t),pr.subVectors(e,t),Ui.cross(pr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),Ui.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ri.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ia.subVectors(i,n),ra.subVectors(s,n),eu.subVectors(e,n);const l=ia.dot(eu),c=ra.dot(eu);if(l<=0&&c<=0)return t.copy(n);tu.subVectors(e,i);const h=ia.dot(tu),f=ra.dot(tu);if(h>=0&&f<=h)return t.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ia,a);nu.subVectors(e,s);const d=ia.dot(nu),p=ra.dot(nu);if(p>=0&&d<=p)return t.copy(s);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ra,o);const g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return Pm.subVectors(s,i),o=(f-h)/(f-h+(d-p)),t.copy(i).addScaledVector(Pm,o);const m=1/(g+_+u);return a=_*m,o=u*m,t.copy(n).addScaledVector(ia,a).addScaledVector(ra,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Oi):Oi.fromBufferAttribute(s,a),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jl.copy(n.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),jl.subVectors(this.max,oo),sa.subVectors(e.a,oo),aa.subVectors(e.b,oo),oa.subVectors(e.c,oo),Br.subVectors(aa,sa),zr.subVectors(oa,aa),us.subVectors(sa,oa);let t=[0,-Br.z,Br.y,0,-zr.z,zr.y,0,-us.z,us.y,Br.z,0,-Br.x,zr.z,0,-zr.x,us.z,0,-us.x,-Br.y,Br.x,0,-zr.y,zr.x,0,-us.y,us.x,0];return!au(t,sa,aa,oa,jl)||(t=[1,0,0,0,1,0,0,0,1],!au(t,sa,aa,oa,jl))?!1:($l.crossVectors(Br,zr),t=[$l.x,$l.y,$l.z],au(t,sa,aa,oa,jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gr=[new U,new U,new U,new U,new U,new U,new U,new U],Oi=new U,Jl=new vi,sa=new U,aa=new U,oa=new U,Br=new U,zr=new U,us=new U,oo=new U,jl=new U,$l=new U,fs=new U;function au(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){fs.fromArray(r,s);const o=i.x*Math.abs(fs.x)+i.y*Math.abs(fs.y)+i.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yr=WS();function WS(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function XS(r){Math.abs(r)>65504&&We("DataUtils.toHalfFloat(): Value out of range."),r=ot(r,-65504,65504),yr.floatView[0]=r;const e=yr.uint32View[0],t=e>>23&511;return yr.baseTable[t]+((e&8388607)>>yr.shiftTable[t])}function qS(r){const e=r>>10;return yr.uint32View[0]=yr.mantissaTable[yr.offsetTable[e]+(r&1023)]+yr.exponentTable[e],yr.floatView[0]}class Zl{static toHalfFloat(e){return XS(e)}static fromHalfFloat(e){return qS(e)}}const nn=new U,Ql=new he;let KS=0;class Sn extends Hs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=D0,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ql.fromBufferAttribute(this,t),Ql.applyMatrix3(e),this.setXY(t,Ql.x,Ql.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class O0 extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class k0 extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yn extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const YS=new vi,lo=new U,ou=new U;class hr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):YS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(lo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(ou)),this.expandByPoint(lo.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let JS=0;const yi=new it,lu=new It,la=new U,ai=new vi,co=new vi,gn=new U;class dn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cS(e)?k0:O0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,n){return yi.makeTranslation(e,t,n),this.applyMatrix4(yi),this}scale(e,t,n){return yi.makeScale(e,t,n),this.applyMatrix4(yi),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];co.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(ai.min,co.min),ai.expandByPoint(gn),gn.addVectors(ai.max,co.max),ai.expandByPoint(gn)):(ai.expandByPoint(co.min),ai.expandByPoint(co.max))}ai.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)gn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)gn.fromBufferAttribute(o,c),l&&(la.fromBufferAttribute(e,c),gn.add(la)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new U,l[v]=new U;const c=new U,h=new U,f=new U,u=new he,d=new he,p=new he,_=new U,g=new U;function m(v,T,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,R),u.fromBufferAttribute(s,v),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,R),h.sub(c),f.sub(c),d.sub(u),p.sub(u);const L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(L),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),o[v].add(_),o[T].add(_),o[R].add(_),l[v].add(g),l[T].add(g),l[R].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,T=S.length;v<T;++v){const R=S[v],L=R.start,P=R.count;for(let I=L,N=L+P;I<N;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new U,b=new U,x=new U,w=new U;function E(v){x.fromBufferAttribute(i,v),w.copy(x);const T=o[v];M.copy(T),M.sub(x.multiplyScalar(x.dot(T))).normalize(),b.crossVectors(w,T);const L=b.dot(l[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,L)}for(let v=0,T=S.length;v<T;++v){const R=S[v],L=R.start,P=R.count;for(let I=L,N=L+P;I<N;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(e)for(let u=0,d=e.count;u<d;u+=3){const p=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new Sn(u,h,f)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class B0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=D0,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const zn=new U;class xl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ch("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ch("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cu=new U,jS=new U,$S=new tt;class Wr{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cu.subVectors(n,t).cross(jS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(cu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$S.getNormalMatrix(e),i=this.coplanarPoint(cu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ZS=0;class Vi extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=jo,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=x0,this.blendDst=S0,this.blendEquation=xa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xh,this.stencilZFail=Xh,this.stencilZPass=Xh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Wr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class z0 extends Vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ca;const ho=new U,ha=new U,ua=new U,fa=new he,uo=new he,G0=new it,ec=new U,fo=new U,tc=new U,Lm=new he,hu=new he,Dm=new he;class QS extends It{constructor(e=new z0){if(super(),this.isSprite=!0,this.type="Sprite",ca===void 0){ca=new dn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new B0(t,5);ca.setIndex([0,1,2,0,2,3]),ca.setAttribute("position",new xl(n,3,0,!1)),ca.setAttribute("uv",new xl(n,2,3,!1))}this.geometry=ca,this.material=e,this.center=new he(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ha.setFromMatrixScale(this.matrixWorld),G0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ua.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ha.multiplyScalar(-ua.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;nc(ec.set(-.5,-.5,0),ua,a,ha,i,s),nc(fo.set(.5,-.5,0),ua,a,ha,i,s),nc(tc.set(.5,.5,0),ua,a,ha,i,s),Lm.set(0,0),hu.set(1,0),Dm.set(1,1);let o=e.ray.intersectTriangle(ec,fo,tc,!1,ho);if(o===null&&(nc(fo.set(-.5,.5,0),ua,a,ha,i,s),hu.set(0,1),o=e.ray.intersectTriangle(ec,tc,fo,!1,ho),o===null))return;const l=e.ray.origin.distanceTo(ho);l<e.near||l>e.far||t.push({distance:l,point:ho.clone(),uv:Ri.getInterpolation(ho,ec,fo,tc,Lm,hu,Dm,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nc(r,e,t,n,i,s){fa.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(uo.x=s*fa.x-i*fa.y,uo.y=i*fa.x+s*fa.y):uo.copy(fa),r.copy(e),r.x+=uo.x,r.y+=uo.y,r.applyMatrix4(G0)}const _r=new U,uu=new U,ic=new U,rc=new U;class Sh{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uu.copy(e).add(t).multiplyScalar(.5),ic.copy(t).sub(e).normalize(),rc.copy(this.origin).sub(uu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ic),o=rc.dot(this.direction),l=-rc.dot(ic),c=rc.lengthSq(),h=Math.abs(1-a*a);let f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=s*h,f>=0)if(u>=-p)if(u<=p){const _=1/h;f*=_,u*=_,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(uu).addScaledVector(ic,u),d}intersectSphere(e,t){if(e.radius<0)return null;_r.subVectors(e.center,this.origin);const n=_r.dot(this.direction),i=_r.dot(_r)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,p=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=n.x-a.x,S=n.y-a.y,M=n.z-a.z,b=Math.abs(l),x=Math.abs(c),w=Math.abs(h);let E,v,T,R,L,P,I,N,F,z,B,$;if(b>=x&&b>=w?(T=l,P=f,F=p,$=m,l>=0?(E=c,v=h,R=u,L=d,I=_,N=g,z=S,B=M):(E=h,v=c,R=d,L=u,I=g,N=_,z=M,B=S)):x>=w?(T=c,P=u,F=_,$=S,c>=0?(E=h,v=l,R=d,L=f,I=g,N=p,z=M,B=m):(E=l,v=h,R=f,L=d,I=p,N=g,z=m,B=M)):(T=h,P=d,F=g,$=M,h>=0?(E=l,v=c,R=f,L=u,I=p,N=_,z=m,B=S):(E=c,v=l,R=u,L=f,I=_,N=p,z=S,B=m)),T===0)return null;const W=E/T,C=v/T,j=1/T,fe=R-W*P,me=L-C*P,Ie=I-W*F,Xe=N-C*F,Ze=z-W*$,J=B-C*$,te=Ze*Xe-J*Ie,_e=fe*J-me*Ze,qe=Ie*me-Xe*fe;if(i){if(te<0||_e<0||qe<0)return null}else if((te<0||_e<0||qe<0)&&(te>0||_e>0||qe>0))return null;const xe=te+_e+qe;if(xe===0)return null;const De=j*(te*P+_e*F+qe*$);return(xe>0?De<0:De>0)?null:this.at(De/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rr extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=y0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nm=new it,ds=new Sh,sc=new hr,Im=new U,ac=new U,oc=new U,lc=new U,fu=new U,cc=new U,Fm=new U,hc=new U;class Nt extends It{constructor(e=new dn,t=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){cc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(fu.fromBufferAttribute(f,e),a?cc.addScaledVector(fu,h):cc.addScaledVector(fu.sub(t),h))}t.add(cc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(s),ds.copy(e.ray).recast(e.near),!(sc.containsPoint(ds.origin)===!1&&(ds.intersectSphere(sc,Im)===null||ds.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Nm.copy(s).invert(),ds.copy(e.ray).applyMatrix4(Nm),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=a[g.materialIndex],S=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let b=S,x=M;b<x;b+=3){const w=o.getX(b),E=o.getX(b+1),v=o.getX(b+2);i=uc(this,m,e,n,c,h,f,w,E,v),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const S=o.getX(g),M=o.getX(g+1),b=o.getX(g+2);i=uc(this,a,e,n,c,h,f,S,M,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=a[g.materialIndex],S=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=S,x=M;b<x;b+=3){const w=b,E=b+1,v=b+2;i=uc(this,m,e,n,c,h,f,w,E,v),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const S=g,M=g+1,b=g+2;i=uc(this,a,e,n,c,h,f,S,M,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function ey(r,e,t,n,i,s,a,o){let l;if(e.side===ti?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===as,o),l===null)return null;hc.copy(o),hc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(hc);return c<t.near||c>t.far?null:{distance:c,point:hc.clone(),object:r}}function uc(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ac),r.getVertexPosition(l,oc),r.getVertexPosition(c,lc);const h=ey(r,e,t,n,ac,oc,lc,Fm);if(h){const f=new U;Ri.getBarycoord(Fm,ac,oc,lc,f),i&&(h.uv=Ri.getInterpolatedAttribute(i,o,l,c,f,new he)),s&&(h.uv1=Ri.getInterpolatedAttribute(s,o,l,c,f,new he)),a&&(h.normal=Ri.getInterpolatedAttribute(a,o,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};Ri.getNormal(ac,oc,lc,u.normal),h.face=u,h.barycoord=f}return h}const po=new Et,Um=new Et,Om=new Et,ty=new Et,km=new it,fc=new U,du=new hr,Bm=new it,pu=new Sh;class ny extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fm,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fc),this.boundingBox.expandByPoint(fc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fc),this.boundingSphere.expandByPoint(fc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),du.copy(this.boundingSphere),du.applyMatrix4(i),e.ray.intersectsSphere(du)!==!1&&(Bm.copy(i).invert(),pu.copy(e.ray).applyMatrix4(Bm),!(this.boundingBox!==null&&pu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$x?this.bindMatrixInverse.copy(this.bindMatrix).invert():We("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Um.fromBufferAttribute(i.attributes.skinIndex,e),Om.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(po.copy(t),t.set(0,0,0,0)):(po.set(...t,1),t.set(0,0,0)),po.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=Om.getComponent(s);if(a!==0){const o=Um.getComponent(s);km.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ty.copy(po).applyMatrix4(km),a)}}return t.isVector4&&(t.w=po.w),t.applyMatrix4(this.bindMatrixInverse)}}class H0 extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Sl extends hn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=cn,h=cn,f,u){super(null,a,o,l,c,h,i,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zm=new it,iy=new it;class Jd{constructor(e=[],t=[]){this.uuid=Ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){We("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new it;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:iy;zm.multiplyMatrices(o,t[s]),zm.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Jd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Sl(t,e,e,Di,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(We("Skeleton: No bone found with UUID:",s),a=new H0),this.bones.push(a),this.boneInverses.push(new it().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class hh extends Sn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const da=new it,Gm=new it,dc=[],Hm=new vi,ry=new it,mo=new Nt,go=new hr;class sy extends Nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ry)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,da),Hm.copy(e.boundingBox).applyMatrix4(da),this.boundingBox.union(Hm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,da),go.copy(e.boundingSphere).applyMatrix4(da),this.boundingSphere.union(go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(mo.geometry=this.geometry,mo.material=this.material,mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(n),e.ray.intersectsSphere(go)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,da),Gm.multiplyMatrices(n,da),mo.matrixWorld=Gm,mo.raycast(e,dc);for(let a=0,o=dc.length;a<o;a++){const l=dc[a];l.instanceId=s,l.object=this,t.push(l)}dc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sl(new Float32Array(i*this.count),i,this.count,zd,jn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ps=new hr,ay=new he(.5,.5),pc=new U;class jd{constructor(e=new Wr,t=new Wr,n=new Wr,i=new Wr,s=new Wr,a=new Wr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ir,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],S=s[12],M=s[13],b=s[14],x=s[15];if(i[0].setComponents(c-a,d-h,m-p,x-S).normalize(),i[1].setComponents(c+a,d+h,m+p,x+S).normalize(),i[2].setComponents(c+o,d+f,m+_,x+M).normalize(),i[3].setComponents(c-o,d-f,m-_,x-M).normalize(),n)i[4].setComponents(l,u,g,b).normalize(),i[5].setComponents(c-l,d-u,m-g,x-b).normalize();else if(i[4].setComponents(c-l,d-u,m-g,x-b).normalize(),t===ir)i[5].setComponents(c+l,d+u,m+g,x+b).normalize();else if(t===bl)i[5].setComponents(l,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=ay.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(pc.x=i.normal.x>0?e.max.x:e.min.x,pc.y=i.normal.y>0?e.max.y:e.min.y,pc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(pc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class V0 extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uh=new U,fh=new U,Vm=new it,_o=new Sh,mc=new hr,mu=new U,Wm=new U;class $d extends It{constructor(e=new dn,t=new V0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)uh.fromBufferAttribute(t,i-1),fh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=uh.distanceTo(fh);e.setAttribute("lineDistance",new yn(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(i),mc.radius+=s,e.ray.intersectsSphere(mc)===!1)return;Vm.copy(i).invert(),_o.copy(e.ray).applyMatrix4(Vm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=c){const m=h.getX(_),S=h.getX(_+1),M=gc(this,e,_o,l,m,S,_);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(d),m=gc(this,e,_o,l,_,g,p-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=c){const m=gc(this,e,_o,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=gc(this,e,_o,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function gc(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(uh.fromBufferAttribute(o,i),fh.fromBufferAttribute(o,s),t.distanceSqToSegment(uh,fh,mu,Wm)>n)return;mu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(mu);if(!(c<e.near||c>e.far))return{distance:c,point:Wm.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Xm=new U,qm=new U;class oy extends $d{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Xm.fromBufferAttribute(t,i),qm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xm.distanceTo(qm);e.setAttribute("lineDistance",new yn(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ly extends $d{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class W0 extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Km=new it,qf=new Sh,_c=new hr,bc=new U;class Zd extends It{constructor(e=new dn,t=new W0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(i),_c.radius+=s,e.ray.intersectsSphere(_c)===!1)return;Km.copy(i).invert(),qf.copy(e.ray).applyMatrix4(Km);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,_=d;p<_;p++){const g=c.getX(p);bc.fromBufferAttribute(f,g),Ym(bc,g,l,i,e,t,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,_=d;p<_;p++)bc.fromBufferAttribute(f,p),Ym(bc,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ym(r,e,t,n,i,s,a){const o=qf.distanceSqToPoint(r);if(o<t){const l=new U;qf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class X0 extends hn{constructor(e=[],t=Us,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cy extends hn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yl extends hn{constructor(e,t,n=cr,i,s,a,o=cn,l=cn,c,h=Lr,f=1){if(h!==Lr&&h!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class hy extends yl{constructor(e,t=cr,n=Us,i,s,a=cn,o=cn,l,c=Lr){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class q0 extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ka extends dn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(h,3)),this.setAttribute("uv",new yn(f,2));function p(_,g,m,S,M,b,x,w,E,v,T){const R=b/E,L=x/v,P=b/2,I=x/2,N=w/2,F=E+1,z=v+1;let B=0,$=0;const W=new U;for(let C=0;C<z;C++){const j=C*L-I;for(let fe=0;fe<F;fe++){const me=fe*R-P;W[_]=me*S,W[g]=j*M,W[m]=N,c.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[m]=w>0?1:-1,h.push(W.x,W.y,W.z),f.push(fe/E),f.push(1-C/v),B+=1}}for(let C=0;C<v;C++)for(let j=0;j<E;j++){const fe=u+j+F*C,me=u+j+F*(C+1),Ie=u+(j+1)+F*(C+1),Xe=u+(j+1)+F*C;l.push(fe,me,Xe),l.push(me,Ie,Xe),$+=6}o.addGroup(d,$,T),d+=$,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yh extends dn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],f=[],u=[],d=[];let p=0;const _=[],g=n/2;let m=0;S(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new yn(f,3)),this.setAttribute("normal",new yn(u,3)),this.setAttribute("uv",new yn(d,2));function S(){const b=new U,x=new U;let w=0;const E=(t-e)/n;for(let v=0;v<=s;v++){const T=[],R=v/s,L=R*(t-e)+e;for(let P=0;P<=i;P++){const I=P/i,N=I*l+o,F=Math.sin(N),z=Math.cos(N);x.x=L*F,x.y=-R*n+g,x.z=L*z,f.push(x.x,x.y,x.z),b.set(F,E,z).normalize(),u.push(b.x,b.y,b.z),d.push(I,1-R),T.push(p++)}_.push(T)}for(let v=0;v<i;v++)for(let T=0;T<s;T++){const R=_[T][v],L=_[T+1][v],P=_[T+1][v+1],I=_[T][v+1];(e>0||T!==0)&&(h.push(R,L,I),w+=3),(t>0||T!==s-1)&&(h.push(L,P,I),w+=3)}c.addGroup(m,w,0),m+=w}function M(b){const x=p,w=new he,E=new U;let v=0;const T=b===!0?e:t,R=b===!0?1:-1;for(let P=1;P<=i;P++)f.push(0,g*R,0),u.push(0,R,0),d.push(.5,.5),p++;const L=p;for(let P=0;P<=i;P++){const N=P/i*l+o,F=Math.cos(N),z=Math.sin(N);E.x=T*z,E.y=g*R,E.z=T*F,f.push(E.x,E.y,E.z),u.push(0,R,0),w.x=F*.5+.5,w.y=z*.5*R+.5,d.push(w.x,w.y),p++}for(let P=0;P<i;P++){const I=x+P,N=L+P;b===!0?h.push(N,N+1,I):h.push(N+1,N,I),v+=3}c.addGroup(m,v,b===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ur{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new he:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,i=[],s=[],a=[],o=new U,l=new it;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(ot(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(ot(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qd extends ur{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class uy extends Qd{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ep(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,f){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Jm=new U,jm=new U,gu=new ep,_u=new ep,bu=new ep;class fy extends ur{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(jm.subVectors(i[0],i[1]).add(i[0]),c=jm);const f=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Jm.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Jm),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),gu.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,_,g),_u.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,_,g),bu.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(gu.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),_u.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),bu.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(gu.calc(l),_u.calc(l),bu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $m(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function dy(r,e){const t=1-r;return t*t*e}function py(r,e){return 2*(1-r)*r*e}function my(r,e){return r*r*e}function Qo(r,e,t,n){return dy(r,e)+py(r,t)+my(r,n)}function gy(r,e){const t=1-r;return t*t*t*e}function _y(r,e){const t=1-r;return 3*t*t*r*e}function by(r,e){return 3*(1-r)*r*r*e}function vy(r,e){return r*r*r*e}function el(r,e,t,n,i){return gy(r,e)+_y(r,t)+by(r,n)+vy(r,i)}class K0 extends ur{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(el(e,i.x,s.x,a.x,o.x),el(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xy extends ur{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(el(e,i.x,s.x,a.x,o.x),el(e,i.y,s.y,a.y,o.y),el(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Y0 extends ur{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sy extends ur{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class J0 extends ur{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Qo(e,i.x,s.x,a.x),Qo(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yy extends ur{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Qo(e,i.x,s.x,a.x),Qo(e,i.y,s.y,a.y),Qo(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends ur{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set($m(o,l.x,c.x,h.x,f.x),$m(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}var Kf=Object.freeze({__proto__:null,ArcCurve:uy,CatmullRomCurve3:fy,CubicBezierCurve:K0,CubicBezierCurve3:xy,EllipseCurve:Qd,LineCurve:Y0,LineCurve3:Sy,QuadraticBezierCurve:J0,QuadraticBezierCurve3:yy,SplineCurve:j0});class My extends ur{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kf[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Kf[i.type]().fromJSON(i))}return this}}class Yf extends My{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Y0(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new J0(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new K0(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new j0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new Qd(e,t,n,i,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $0 extends Yf{constructor(e){super(e),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Yf().fromJSON(i))}return this}}function Ty(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Z0(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Cy(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let h=o,f=l;for(let u=t;u<i;u+=t){const d=r[u],p=r[u+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Ml(s,a,t,o,l,c,0),a}function Z0(r,e,t,n,i){let s;if(i===zy(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=Zm(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Zm(a/n|0,r[a],r[a+1],s);return s&&Wa(s,s.next)&&(wl(s),s=s.next),s}function Bs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Wa(t,t.next)||Wt(t.prev,t,t.next)===0)){if(wl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ml(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Iy(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Ey(r,n,i,s):wy(r)){e.push(l.i,r.i,c.i),wl(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Ay(Bs(r),e),Ml(r,e,t,n,i,s,2)):a===2&&Ry(r,e,t,n,i,s):Ml(Bs(r),e,t,n,i,s,1);break}}}function wy(r){const e=r.prev,t=r,n=r.next;if(Wt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),f=Math.min(o,l,c),u=Math.max(i,s,a),d=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&Io(i,o,s,l,a,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ey(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Wt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,f=s.y,u=a.y,d=Math.min(o,l,c),p=Math.min(h,f,u),_=Math.max(o,l,c),g=Math.max(h,f,u),m=Jf(d,p,e,t,n),S=Jf(_,g,e,t,n);let M=r.prevZ,b=r.nextZ;for(;M&&M.z>=m&&b&&b.z<=S;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=g&&M!==i&&M!==a&&Io(o,h,l,f,c,u,M.x,M.y)&&Wt(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=d&&b.x<=_&&b.y>=p&&b.y<=g&&b!==i&&b!==a&&Io(o,h,l,f,c,u,b.x,b.y)&&Wt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=g&&M!==i&&M!==a&&Io(o,h,l,f,c,u,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=S;){if(b.x>=d&&b.x<=_&&b.y>=p&&b.y<=g&&b!==i&&b!==a&&Io(o,h,l,f,c,u,b.x,b.y)&&Wt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ay(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Wa(n,i)&&eb(n,t,t.next,i)&&Tl(n,i)&&Tl(i,n)&&(e.push(n.i,t.i,i.i),wl(t),wl(t.next),t=r=i),t=t.next}while(t!==r);return Bs(t)}function Ry(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Oy(a,o)){let l=tb(a,o);a=Bs(a,a.next),l=Bs(l,l.next),Ml(a,e,t,n,i,s,0),Ml(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function Cy(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=Z0(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Uy(c))}i.sort(Py);for(let s=0;s<i.length;s++)t=Ly(i[s],t);return t}function Py(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Ly(r,e){const t=Dy(r,e);if(!t)return e;const n=tb(t,r);return Bs(n,n.next),Bs(t,t.next)}function Dy(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(Wa(r,t))return t;do{if(Wa(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s&&(s=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Q0(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const f=Math.abs(i-t.y)/(n-t.x);Tl(t,r)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Ny(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Ny(r,e){return Wt(r.prev,r,e.prev)<0&&Wt(e.next,r,r.next)<0}function Iy(r,e,t,n){let i=r;do i.z===0&&(i.z=Jf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Fy(i)}function Fy(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function Jf(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Uy(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Q0(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Io(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&Q0(r,e,t,n,i,s,a,o)}function Oy(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!ky(r,e)&&(Tl(r,e)&&Tl(e,r)&&By(r,e)&&(Wt(r.prev,r,e.prev)||Wt(r,e.prev,e))||Wa(r,e)&&Wt(r.prev,r,r.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Wa(r,e){return r.x===e.x&&r.y===e.y}function eb(r,e,t,n){const i=xc(Wt(r,e,t)),s=xc(Wt(r,e,n)),a=xc(Wt(t,n,r)),o=xc(Wt(t,n,e));return!!(i!==s&&a!==o||i===0&&vc(r,t,e)||s===0&&vc(r,n,e)||a===0&&vc(t,r,n)||o===0&&vc(t,e,n))}function vc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function xc(r){return r>0?1:r<0?-1:0}function ky(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&eb(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Tl(r,e){return Wt(r.prev,r,r.next)<0?Wt(r,e,r.next)>=0&&Wt(r,r.prev,e)>=0:Wt(r,e,r.prev)<0||Wt(r,r.next,e)<0}function By(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function tb(r,e){const t=jf(r.i,r.x,r.y),n=jf(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Zm(r,e,t,n){const i=jf(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function wl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function jf(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zy(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Gy{static triangulate(e,t,n=2){return Ty(e,t,n)}}class Ta{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Ta.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Qm(e),eg(n,e);let a=e.length;t.forEach(Qm);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,eg(n,t[l]);const o=Gy.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Qm(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function eg(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class tp extends dn{constructor(e=new $0([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new yn(i,3)),this.setAttribute("uv",new yn(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Hy;let M,b=!1,x,w,E,v;if(m){M=m.getSpacedPoints(h),b=!0,u=!1;const Q=m.isCatmullRomCurve3?m.closed:!1;x=m.computeFrenetFrames(h,Q),w=new U,E=new U,v=new U}u||(g=0,d=0,p=0,_=0);const T=o.extractPoints(c);let R=T.shape;const L=T.holes;if(!Ta.isClockWise(R)){R=R.reverse();for(let Q=0,re=L.length;Q<re;Q++){const oe=L[Q];Ta.isClockWise(oe)&&(L[Q]=oe.reverse())}}function I(Q){const oe=10000000000000001e-36;let O=Q[0];for(let pe=1;pe<=Q.length;pe++){const Ge=pe%Q.length,Ue=Q[Ge],Re=Ue.x-O.x,je=Ue.y-O.y,k=Re*Re+je*je,ct=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(O.x),Math.abs(O.y)),Ye=oe*ct*ct;if(k<=Ye){Q.splice(Ge,1),pe--;continue}O=Ue}}I(R),L.forEach(I);const N=L.length,F=R;for(let Q=0;Q<N;Q++){const re=L[Q];R=R.concat(re)}function z(Q,re,oe){return re||Qe("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(re,oe)}const B=R.length;function $(Q,re,oe){let O,pe,Ge;const Ue=Q.x-re.x,Re=Q.y-re.y,je=oe.x-Q.x,k=oe.y-Q.y,ct=Ue*Ue+Re*Re,Ye=Ue*k-Re*je;if(Math.abs(Ye)>Number.EPSILON){const D=Math.sqrt(ct),y=Math.sqrt(je*je+k*k),V=re.x-Re/D,X=re.y+Ue/D,Z=oe.x-k/y,ge=oe.y+je/y,ce=((Z-V)*k-(ge-X)*je)/(Ue*k-Re*je);O=V+Ue*ce-Q.x,pe=X+Re*ce-Q.y;const ee=O*O+pe*pe;if(ee<=2)return new he(O,pe);Ge=Math.sqrt(ee/2)}else{let D=!1;Ue>Number.EPSILON?je>Number.EPSILON&&(D=!0):Ue<-Number.EPSILON?je<-Number.EPSILON&&(D=!0):Math.sign(Re)===Math.sign(k)&&(D=!0),D?(O=-Re,pe=Ue,Ge=Math.sqrt(ct)):(O=Ue,pe=Re,Ge=Math.sqrt(ct/2))}return new he(O/Ge,pe/Ge)}const W=[];for(let Q=0,re=F.length,oe=re-1,O=Q+1;Q<re;Q++,oe++,O++)oe===re&&(oe=0),O===re&&(O=0),W[Q]=$(F[Q],F[oe],F[O]);const C=[];let j,fe=W.concat();for(let Q=0,re=N;Q<re;Q++){const oe=L[Q];j=[];for(let O=0,pe=oe.length,Ge=pe-1,Ue=O+1;O<pe;O++,Ge++,Ue++)Ge===pe&&(Ge=0),Ue===pe&&(Ue=0),j[O]=$(oe[O],oe[Ge],oe[Ue]);C.push(j),fe=fe.concat(j)}let me;if(g===0)me=Ta.triangulateShape(F,L);else{const Q=[],re=[];for(let oe=0;oe<g;oe++){const O=oe/g,pe=d*Math.cos(O*Math.PI/2),Ge=p*Math.sin(O*Math.PI/2)+_;for(let Ue=0,Re=F.length;Ue<Re;Ue++){const je=z(F[Ue],W[Ue],Ge);_e(je.x,je.y,-pe),O===0&&Q.push(je)}for(let Ue=0,Re=N;Ue<Re;Ue++){const je=L[Ue];j=C[Ue];const k=[];for(let ct=0,Ye=je.length;ct<Ye;ct++){const D=z(je[ct],j[ct],Ge);_e(D.x,D.y,-pe),O===0&&k.push(D)}O===0&&re.push(k)}}me=Ta.triangulateShape(Q,re)}const Ie=me.length,Xe=p+_;for(let Q=0;Q<B;Q++){const re=u?z(R[Q],fe[Q],Xe):R[Q];b?(E.copy(x.normals[0]).multiplyScalar(re.x),w.copy(x.binormals[0]).multiplyScalar(re.y),v.copy(M[0]).add(E).add(w),_e(v.x,v.y,v.z)):_e(re.x,re.y,0)}for(let Q=1;Q<=h;Q++)for(let re=0;re<B;re++){const oe=u?z(R[re],fe[re],Xe):R[re];b?(E.copy(x.normals[Q]).multiplyScalar(oe.x),w.copy(x.binormals[Q]).multiplyScalar(oe.y),v.copy(M[Q]).add(E).add(w),_e(v.x,v.y,v.z)):_e(oe.x,oe.y,f/h*Q)}for(let Q=g-1;Q>=0;Q--){const re=Q/g,oe=d*Math.cos(re*Math.PI/2),O=p*Math.sin(re*Math.PI/2)+_;for(let pe=0,Ge=F.length;pe<Ge;pe++){const Ue=z(F[pe],W[pe],O);_e(Ue.x,Ue.y,f+oe)}for(let pe=0,Ge=L.length;pe<Ge;pe++){const Ue=L[pe];j=C[pe];for(let Re=0,je=Ue.length;Re<je;Re++){const k=z(Ue[Re],j[Re],O);b?_e(k.x,k.y+M[h-1].y,M[h-1].x+oe):_e(k.x,k.y,f+oe)}}}Ze(),J();function Ze(){const Q=i.length/3;if(u){let re=0,oe=B*re;for(let O=0;O<Ie;O++){const pe=me[O];qe(pe[2]+oe,pe[1]+oe,pe[0]+oe)}re=h+g*2,oe=B*re;for(let O=0;O<Ie;O++){const pe=me[O];qe(pe[0]+oe,pe[1]+oe,pe[2]+oe)}}else{for(let re=0;re<Ie;re++){const oe=me[re];qe(oe[2],oe[1],oe[0])}for(let re=0;re<Ie;re++){const oe=me[re];qe(oe[0]+B*h,oe[1]+B*h,oe[2]+B*h)}}n.addGroup(Q,i.length/3-Q,0)}function J(){const Q=i.length/3;let re=0;te(F,re),re+=F.length;for(let oe=0,O=L.length;oe<O;oe++){const pe=L[oe];te(pe,re),re+=pe.length}n.addGroup(Q,i.length/3-Q,1)}function te(Q,re){let oe=Q.length;for(;--oe>=0;){const O=oe;let pe=oe-1;pe<0&&(pe=Q.length-1);for(let Ge=0,Ue=h+g*2;Ge<Ue;Ge++){const Re=B*Ge,je=B*(Ge+1),k=re+O+Re,ct=re+pe+Re,Ye=re+pe+je,D=re+O+je;xe(k,ct,Ye,D)}}}function _e(Q,re,oe){l.push(Q),l.push(re),l.push(oe)}function qe(Q,re,oe){De(Q),De(re),De(oe);const O=i.length/3,pe=S.generateTopUV(n,i,O-3,O-2,O-1);Fe(pe[0]),Fe(pe[1]),Fe(pe[2])}function xe(Q,re,oe,O){De(Q),De(re),De(O),De(re),De(oe),De(O);const pe=i.length/3,Ge=S.generateSideWallUV(n,i,pe-6,pe-3,pe-2,pe-1);Fe(Ge[0]),Fe(Ge[1]),Fe(Ge[3]),Fe(Ge[1]),Fe(Ge[2]),Fe(Ge[3])}function De(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Fe(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Vy(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Kf[i.type]().fromJSON(i)),new tp(n,e.options)}}const Hy={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new he(s,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-f),new he(u,1-p),new he(_,1-m)]:[new he(o,1-l),new he(h,1-f),new he(d,1-p),new he(g,1-m)]}};function Vy(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class wi extends dn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=e/o,u=t/l,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const S=m*u-a;for(let M=0;M<c;M++){const b=M*f-s;p.push(b,-S,0),_.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const M=S+c*m,b=S+c*(m+1),x=S+1+c*(m+1),w=S+1+c*m;d.push(M,b,w),d.push(b,x,w)}this.setIndex(d),this.setAttribute("position",new yn(p,3)),this.setAttribute("normal",new yn(_,3)),this.setAttribute("uv",new yn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.widthSegments,e.heightSegments)}}function Xa(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(tg(i))i.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(tg(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Hn(r){const e={};for(let t=0;t<r.length;t++){const n=Xa(r[t]);for(const i in n)e[i]=n[i]}return e}function tg(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Wy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function nb(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const El={clone:Xa,merge:Hn};var Xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xy,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xa(e.uniforms),this.uniformsGroups=Wy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(i.value);break;case"v2":this.uniforms[n].value=new he().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Et().fromArray(i.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new it().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ib extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ya extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fr extends Ya{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ky extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yy extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Xr(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Wc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function Jy(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ng(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function jy(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Ja{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class $y extends Ja{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pm,endingEnd:pm}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case mm:s=e,o=2*t-n;break;case gm:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mm:a=e,l=2*n-t;break;case gm:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,S=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,M=(-1-d)*g+(1.5+d)*_+.5*p,b=d*g-d*_;for(let x=0;x!==o;++x)s[x]=m*a[h+x]+S*a[c+x]+M*a[l+x]+b*a[f+x];return s}}class Zy extends Ja{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),f=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*f+a[l+u]*h;return s}}class Qy extends Ja{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class eM extends Ja{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){const p=(n-t)/(i-t),_=1-p;for(let g=0;g!==o;++g)s[g]=a[c+g]*_+a[l+g]*p;return s}const u=o*2,d=e-1;for(let p=0;p!==o;++p){const _=a[c+p],g=a[l+p],m=d*u+p*2,S=f[m],M=f[m+1],b=e*u+p*2,x=h[b],w=h[b+1],E=nM(n,t,S,x,i);s[p]=rb(E,_,M,w,g)}return s}}function rb(r,e,t,n,i){const s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function tM(r,e,t,n,i){const s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function nM(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){const o=rb(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;const l=tM(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}class Wi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xr(t,this.TimeBufferType),this.values=Xr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xr(e.times,Array),values:Xr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Wc(e.settings)&&(n.settings={inTangents:Xr(e.settings.inTangents,Array),outTangents:Xr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $y(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new eM(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case gl:t=this.InterpolantFactoryMethodDiscrete;break;case _l:t=this.InterpolantFactoryMethodLinear;break;case Wh:t=this.InterpolantFactoryMethodSmooth;break;case dm:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gl;case this.InterpolantFactoryMethodLinear:return _l;case this.InterpolantFactoryMethodSmooth:return Wh;case this.InterpolantFactoryMethodBezier:return dm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Wc(this.settings)&&(ig(this.settings.inTangents,e),ig(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&hS(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wh,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const f=o*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){const _=t[f+p];if(_!==t[u+p]||_!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Wc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function ig(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}Wi.prototype.ValueTypeName="";Wi.prototype.TimeBufferType=Float32Array;Wi.prototype.ValueBufferType=Float32Array;Wi.prototype.DefaultInterpolation=_l;class ja extends Wi{constructor(e,t,n){super(e,t,n)}}ja.prototype.ValueTypeName="bool";ja.prototype.ValueBufferType=Array;ja.prototype.DefaultInterpolation=gl;ja.prototype.InterpolantFactoryMethodLinear=void 0;ja.prototype.InterpolantFactoryMethodSmooth=void 0;class sb extends Wi{constructor(e,t,n,i){super(e,t,n,i)}}sb.prototype.ValueTypeName="color";class Al extends Wi{constructor(e,t,n,i){super(e,t,n,i)}}Al.prototype.ValueTypeName="number";class iM extends Ja{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Dr.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Rl extends Wi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new iM(this.times,this.values,this.getValueSize(),e)}}Rl.prototype.ValueTypeName="quaternion";Rl.prototype.InterpolantFactoryMethodSmooth=void 0;class $a extends Wi{constructor(e,t,n){super(e,t,n)}}$a.prototype.ValueTypeName="string";$a.prototype.ValueBufferType=Array;$a.prototype.DefaultInterpolation=gl;$a.prototype.InterpolantFactoryMethodLinear=void 0;$a.prototype.InterpolantFactoryMethodSmooth=void 0;class dh extends Wi{constructor(e,t,n,i){super(e,t,n,i)}}dh.prototype.ValueTypeName="vector";class rM{constructor(e="",t=-1,n=[],i=Zx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(aM(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Wi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Jy(l);l=ng(l,1,h),c=ng(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Al(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const f=h[1];let u=i[f];u||(i[f]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function sM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Al;case"vector":case"vector2":case"vector3":case"vector4":return dh;case"color":return sb;case"quaternion":return Rl;case"bool":case"boolean":return ja;case"string":return $a}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function aM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=sM(r.type);if(r.times===void 0){const n=[],i=[];jy(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Wc(r.settings)&&(t.settings={inTangents:Xr(r.settings.inTangents,Float32Array),outTangents:Xr(r.settings.outTangents,Float32Array)}),t}const Tr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(rg(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!rg(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function rg(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class ab{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const oM=new ab;class Vs{constructor(e){this.manager=e!==void 0?e:oM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const br={};class lM extends Error{constructor(e,t){super(e),this.response=t}}class np extends Vs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Tr.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(br[e]!==void 0){br[e].push({onLoad:t,onProgress:n,onError:i});return}br[e]=[],br[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=br[e],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,p=d!==0;let _=0;const g=new ReadableStream({start(m){S();function S(){f.read().then(({done:M,value:b})=>{if(M)m.close();else{_+=b.byteLength;const x=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let w=0,E=h.length;w<E;w++){const v=h[w];v.onProgress&&v.onProgress(x)}m.enqueue(b),S()}},M=>{m.error(M)})}}});return new Response(g)}else throw new lM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Tr.add(`file:${e}`,c);const h=br[e];delete br[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=br[e];if(h===void 0)throw this.manager.itemError(e),c;delete br[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const pa=new WeakMap;class cM extends Vs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Tr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=pa.get(a);f===void 0&&(f=[],pa.set(a,f)),f.push({onLoad:t,onError:i})}return a}const o=vl("img");function l(){h(),t&&t(this);const f=pa.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}pa.delete(this),s.manager.itemEnd(e)}function c(f){h(),i&&i(f),Tr.remove(`image:${e}`);const u=pa.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onError&&p.onError(f)}pa.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Tr.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class hM extends Vs{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Sl,o=new np(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){i!==void 0?i(h):Qe(h);return}s._applyTexData(a,c),t&&t(a,c)},n,i),a}createDataTexture(e){const t=new Sl;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Li,e.wrapT=t.wrapT!==void 0?t.wrapT:Li,e.magFilter=t.magFilter!==void 0?t.magFilter:zt,e.minFilter=t.minFilter!==void 0?t.minFilter:zt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=nr),t.mipmapCount===1&&(e.minFilter=zt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class ob extends Vs{constructor(e){super(e)}load(e,t,n,i){const s=new hn,a=new cM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Mh extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class uM extends Mh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const vu=new it,sg=new U,ag=new U;class ip{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jd,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;sg.setFromMatrixPosition(e.matrixWorld),t.position.copy(sg),ag.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ag),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){vu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(vu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===bl||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sc=new U,yc=new Dr,Ki=new U;class lb extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=ir,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sc,yc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,yc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Sc,yc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,yc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Gr=new U,og=new he,lg=new he;class qn extends lb{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,og,lg),t.subVectors(lg,og)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($o*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class fM extends ip{constructor(){super(new qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Va*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class $f extends Mh{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new fM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class dM extends ip{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class Th extends Mh{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ll extends lb{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pM extends ip{constructor(){super(new Ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mM extends Mh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new pM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class tl{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const xu=new WeakMap;class gM extends Vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&We("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&We("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Tr.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{xu.has(a)===!0?(i&&i(xu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Tr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),xu.set(l,c),Tr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Tr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ma=-90,ga=1;class _M extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qn(ma,ga,e,t);i.layers=this.layers,this.add(i);const s=new qn(ma,ga,e,t);s.layers=this.layers,this.add(s);const a=new qn(ma,ga,e,t);a.layers=this.layers,this.add(a);const o=new qn(ma,ga,e,t);o.layers=this.layers,this.add(o);const l=new qn(ma,ga,e,t);l.layers=this.layers,this.add(l);const c=new qn(ma,ga,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ir)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class bM extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vM{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=xM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function xM(){this._document.hidden===!1&&this.reset()}const rp="\\[\\]\\.:\\/",SM=new RegExp("["+rp+"]","g"),sp="[^"+rp+"]",yM="[^"+rp.replace("\\.","")+"]",MM=/((?:WC+[\/:])*)/.source.replace("WC",sp),TM=/(WCOD+)?/.source.replace("WCOD",yM),wM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sp),EM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sp),AM=new RegExp("^"+MM+TM+wM+EM+"$"),RM=["material","materials","bones","map"];class CM{constructor(e,t,n){const i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(SM,"")}static parseTrackName(e){const t=AM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);RM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=CM;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const up=class up{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};up.prototype.isMatrix2=!0;let cg=up;function hg(r,e,t,n){const i=PM(n);switch(t){case C0:return r*e;case zd:return r*e/i.components*i.byteLength;case Gd:return r*e/i.components*i.byteLength;case ks:return r*e*2/i.components*i.byteLength;case Hd:return r*e*2/i.components*i.byteLength;case P0:return r*e*3/i.components*i.byteLength;case Di:return r*e*4/i.components*i.byteLength;case Vd:return r*e*4/i.components*i.byteLength;case zc:case Gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hc:case Vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mf:case _f:return Math.max(r,16)*Math.max(e,8)/4;case pf:case gf:return Math.max(r,8)*Math.max(e,8)/2;case bf:case vf:case Sf:case yf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xf:case ah:case Mf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Af:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Df:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case If:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Of:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case kf:case Bf:case zf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Gf:case Hf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case oh:case Vf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function PM(r){switch(r){case di:case w0:return{byteLength:1,components:1};case pl:case E0:case xn:return{byteLength:2,components:1};case kd:case Bd:return{byteLength:2,components:4};case cr:case Od:case jn:return{byteLength:4,components:1};case A0:case R0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);function cb(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function LM(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){const p=f[u],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){const _=f[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var DM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NM=`#ifdef USE_ALPHAHASH
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
#endif`,IM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kM=`#ifdef USE_AOMAP
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
#endif`,BM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
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
#endif`,GM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XM=`#ifdef USE_IRIDESCENCE
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
#endif`,qM=`#ifdef USE_BUMPMAP
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
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tT=`#define PI 3.141592653589793
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
} // validated`,nT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iT=`vec3 transformedNormal = objectNormal;
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
#endif`,rT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lT="gl_FragColor = linearToOutputTexel( gl_FragColor );",cT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hT=`#ifdef USE_ENVMAP
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
#endif`,uT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fT=`#ifdef USE_ENVMAP
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
#endif`,dT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pT=`#ifdef USE_ENVMAP
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
#endif`,mT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_T=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vT=`#ifdef USE_GRADIENTMAP
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
}`,xT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ST=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,TT=`#ifdef USE_ENVMAP
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
#endif`,wT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ET=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CT=`PhysicalMaterial material;
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
#endif`,PT=`uniform sampler2D dfgLUT;
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
}`,LT=`
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
#endif`,DT=`#if defined( RE_IndirectDiffuse )
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
#endif`,NT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,FT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HT=`#if defined( USE_POINTS_UV )
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
#endif`,VT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YT=`#ifdef USE_MORPHTARGETS
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
#endif`,JT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$T=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ew=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tw=`#ifdef USE_NORMALMAP
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
#endif`,nw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ow=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_w=`float getShadowMask() {
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
}`,bw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vw=`#ifdef USE_SKINNING
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
#endif`,xw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sw=`#ifdef USE_SKINNING
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
#endif`,yw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ww=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ew=`#ifdef USE_TRANSMISSION
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
#endif`,Aw=`#ifdef USE_TRANSMISSION
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
#endif`,Rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nw=`uniform sampler2D t2D;
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
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ow=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`#include <common>
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
}`,Bw=`#if DEPTH_PACKING == 3200
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
}`,zw=`#define DISTANCE
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
}`,Gw=`#define DISTANCE
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
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`uniform float scale;
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
}`,Xw=`uniform vec3 diffuse;
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
}`,qw=`#include <common>
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
}`,Kw=`uniform vec3 diffuse;
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
}`,Yw=`#define LAMBERT
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
}`,Jw=`#define LAMBERT
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
}`,jw=`#define MATCAP
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
}`,$w=`#define MATCAP
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
}`,Zw=`#define NORMAL
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
}`,Qw=`#define NORMAL
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
}`,eE=`#define PHONG
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
}`,tE=`#define PHONG
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
}`,nE=`#define STANDARD
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
}`,iE=`#define STANDARD
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
}`,rE=`#define TOON
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
}`,sE=`#define TOON
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
}`,aE=`uniform float size;
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
}`,oE=`uniform vec3 diffuse;
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
}`,lE=`#include <common>
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
}`,cE=`uniform vec3 color;
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
}`,hE=`uniform float rotation;
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
}`,uE=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:DM,alphahash_pars_fragment:NM,alphamap_fragment:IM,alphamap_pars_fragment:FM,alphatest_fragment:UM,alphatest_pars_fragment:OM,aomap_fragment:kM,aomap_pars_fragment:BM,batching_pars_vertex:zM,batching_vertex:GM,begin_vertex:HM,beginnormal_vertex:VM,bsdfs:WM,iridescence_fragment:XM,bumpmap_pars_fragment:qM,clipping_planes_fragment:KM,clipping_planes_pars_fragment:YM,clipping_planes_pars_vertex:JM,clipping_planes_vertex:jM,color_fragment:$M,color_pars_fragment:ZM,color_pars_vertex:QM,color_vertex:eT,common:tT,cube_uv_reflection_fragment:nT,defaultnormal_vertex:iT,displacementmap_pars_vertex:rT,displacementmap_vertex:sT,emissivemap_fragment:aT,emissivemap_pars_fragment:oT,colorspace_fragment:lT,colorspace_pars_fragment:cT,envmap_fragment:hT,envmap_common_pars_fragment:uT,envmap_pars_fragment:fT,envmap_pars_vertex:dT,envmap_physical_pars_fragment:TT,envmap_vertex:pT,fog_vertex:mT,fog_pars_vertex:gT,fog_fragment:_T,fog_pars_fragment:bT,gradientmap_pars_fragment:vT,lightmap_pars_fragment:xT,lights_lambert_fragment:ST,lights_lambert_pars_fragment:yT,lights_pars_begin:MT,lights_toon_fragment:wT,lights_toon_pars_fragment:ET,lights_phong_fragment:AT,lights_phong_pars_fragment:RT,lights_physical_fragment:CT,lights_physical_pars_fragment:PT,lights_fragment_begin:LT,lights_fragment_maps:DT,lights_fragment_end:NT,lightprobes_pars_fragment:IT,logdepthbuf_fragment:FT,logdepthbuf_pars_fragment:UT,logdepthbuf_pars_vertex:OT,logdepthbuf_vertex:kT,map_fragment:BT,map_pars_fragment:zT,map_particle_fragment:GT,map_particle_pars_fragment:HT,metalnessmap_fragment:VT,metalnessmap_pars_fragment:WT,morphinstance_vertex:XT,morphcolor_vertex:qT,morphnormal_vertex:KT,morphtarget_pars_vertex:YT,morphtarget_vertex:JT,normal_fragment_begin:jT,normal_fragment_maps:$T,normal_pars_fragment:ZT,normal_pars_vertex:QT,normal_vertex:ew,normalmap_pars_fragment:tw,clearcoat_normal_fragment_begin:nw,clearcoat_normal_fragment_maps:iw,clearcoat_pars_fragment:rw,iridescence_pars_fragment:sw,opaque_fragment:aw,packing:ow,premultiplied_alpha_fragment:lw,project_vertex:cw,dithering_fragment:hw,dithering_pars_fragment:uw,roughnessmap_fragment:fw,roughnessmap_pars_fragment:dw,shadowmap_pars_fragment:pw,shadowmap_pars_vertex:mw,shadowmap_vertex:gw,shadowmask_pars_fragment:_w,skinbase_vertex:bw,skinning_pars_vertex:vw,skinning_vertex:xw,skinnormal_vertex:Sw,specularmap_fragment:yw,specularmap_pars_fragment:Mw,tonemapping_fragment:Tw,tonemapping_pars_fragment:ww,transmission_fragment:Ew,transmission_pars_fragment:Aw,uv_pars_fragment:Rw,uv_pars_vertex:Cw,uv_vertex:Pw,worldpos_vertex:Lw,background_vert:Dw,background_frag:Nw,backgroundCube_vert:Iw,backgroundCube_frag:Fw,cube_vert:Uw,cube_frag:Ow,depth_vert:kw,depth_frag:Bw,distance_vert:zw,distance_frag:Gw,equirect_vert:Hw,equirect_frag:Vw,linedashed_vert:Ww,linedashed_frag:Xw,meshbasic_vert:qw,meshbasic_frag:Kw,meshlambert_vert:Yw,meshlambert_frag:Jw,meshmatcap_vert:jw,meshmatcap_frag:$w,meshnormal_vert:Zw,meshnormal_frag:Qw,meshphong_vert:eE,meshphong_frag:tE,meshphysical_vert:nE,meshphysical_frag:iE,meshtoon_vert:rE,meshtoon_frag:sE,points_vert:aE,points_frag:oE,shadow_vert:lE,shadow_frag:cE,sprite_vert:hE,sprite_frag:uE},Ee={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Zi={basic:{uniforms:Hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Hn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Hn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Hn([Ee.points,Ee.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Hn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Hn([Ee.common,Ee.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Hn([Ee.sprite,Ee.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:Hn([Ee.common,Ee.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:Hn([Ee.lights,Ee.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Zi.physical={uniforms:Hn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Mc={r:0,b:0,g:0},fE=new it,hb=new tt;hb.set(-1,0,0,0,1,0,0,0,1);function dE(r,e,t,n,i,s){const a=new ke(0);let o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){const b=S.backgroundBlurriness>0;M=e.get(M,b)}return M}function p(S){let M=!1;const b=d(S);b===null?g(a,o):b&&b.isColor&&(g(b,1),M=!0);const x=r.xr.getEnvironmentBlendMode();x==="additive"?t.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(S,M){const b=d(M);b&&(b.isCubeTexture||b.mapping===xh)?(c===void 0&&(c=new Nt(new Ka(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Xa(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fE.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hb),c.material.toneMapped=dt.getTransfer(b.colorSpace)!==xt,(h!==b||f!==b.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Nt(new wi(2,2),new Kt({name:"BackgroundMaterial",uniforms:Xa(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=dt.getTransfer(b.colorSpace)!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,M){S.getRGB(Mc,nb(r)),t.buffers.color.setClear(Mc.r,Mc.g,Mc.b,M,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:_,dispose:m}}function pE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(L,P,I,N,F){let z=!1;const B=f(L,N,I,P);s!==B&&(s=B,c(s.object)),z=d(L,N,I,F),z&&p(L,N,I,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,b(L,P,I,N),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function h(L){return r.deleteVertexArray(L)}function f(L,P,I,N){const F=N.wireframe===!0;let z=n[P.id];z===void 0&&(z={},n[P.id]=z);const B=L.isInstancedMesh===!0?L.id:0;let $=z[B];$===void 0&&($={},z[B]=$);let W=$[I.id];W===void 0&&(W={},$[I.id]=W);let C=W[F];return C===void 0&&(C=u(l()),W[F]=C),C}function u(L){const P=[],I=[],N=[];for(let F=0;F<t;F++)P[F]=0,I[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:N,object:L,attributes:{},index:null}}function d(L,P,I,N){const F=s.attributes,z=P.attributes;let B=0;const $=I.getAttributes();for(const W in $)if($[W].location>=0){const j=F[W];let fe=z[W];if(fe===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor)),j===void 0||j.attribute!==fe||fe&&j.data!==fe.data)return!0;B++}return s.attributesNum!==B||s.index!==N}function p(L,P,I,N){const F={},z=P.attributes;let B=0;const $=I.getAttributes();for(const W in $)if($[W].location>=0){let j=z[W];j===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const fe={};fe.attribute=j,j&&j.data&&(fe.data=j.data),F[W]=fe,B++}s.attributes=F,s.attributesNum=B,s.index=N}function _(){const L=s.newAttributes;for(let P=0,I=L.length;P<I;P++)L[P]=0}function g(L){m(L,0)}function m(L,P){const I=s.newAttributes,N=s.enabledAttributes,F=s.attributeDivisors;I[L]=1,N[L]===0&&(r.enableVertexAttribArray(L),N[L]=1),F[L]!==P&&(r.vertexAttribDivisor(L,P),F[L]=P)}function S(){const L=s.newAttributes,P=s.enabledAttributes;for(let I=0,N=P.length;I<N;I++)P[I]!==L[I]&&(r.disableVertexAttribArray(I),P[I]=0)}function M(L,P,I,N,F,z,B){B===!0?r.vertexAttribIPointer(L,P,I,F,z):r.vertexAttribPointer(L,P,I,N,F,z)}function b(L,P,I,N){_();const F=N.attributes,z=I.getAttributes(),B=P.defaultAttributeValues;for(const $ in z){const W=z[$];if(W.location>=0){let C=F[$];if(C===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(C=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(C=L.instanceColor)),C!==void 0){const j=C.normalized,fe=C.itemSize,me=e.get(C);if(me===void 0)continue;const Ie=me.buffer,Xe=me.type,Ze=me.bytesPerElement,J=Xe===r.INT||Xe===r.UNSIGNED_INT||C.gpuType===Od;if(C.isInterleavedBufferAttribute){const te=C.data,_e=te.stride,qe=C.offset;if(te.isInstancedInterleavedBuffer){for(let xe=0;xe<W.locationSize;xe++)m(W.location+xe,te.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<W.locationSize;xe++)g(W.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let xe=0;xe<W.locationSize;xe++)M(W.location+xe,fe/W.locationSize,Xe,j,_e*Ze,(qe+fe/W.locationSize*xe)*Ze,J)}else{if(C.isInstancedBufferAttribute){for(let te=0;te<W.locationSize;te++)m(W.location+te,C.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let te=0;te<W.locationSize;te++)g(W.location+te);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let te=0;te<W.locationSize;te++)M(W.location+te,fe/W.locationSize,Xe,j,fe*Ze,fe/W.locationSize*te*Ze,J)}}else if(B!==void 0){const j=B[$];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(W.location,j);break;case 3:r.vertexAttrib3fv(W.location,j);break;case 4:r.vertexAttrib4fv(W.location,j);break;default:r.vertexAttrib1fv(W.location,j)}}}}S()}function x(){T();for(const L in n){const P=n[L];for(const I in P){const N=P[I];for(const F in N){const z=N[F];for(const B in z)h(z[B].object),delete z[B];delete N[F]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;const P=n[L.id];for(const I in P){const N=P[I];for(const F in N){const z=N[F];for(const B in z)h(z[B].object),delete z[B];delete N[F]}}delete n[L.id]}function E(L){for(const P in n){const I=n[P];for(const N in I){const F=I[N];if(F[L.id]===void 0)continue;const z=F[L.id];for(const B in z)h(z[B].object),delete z[B];delete F[L.id]}}}function v(L){for(const P in n){const I=n[P],N=L.isInstancedMesh===!0?L.id:0,F=I[N];if(F!==void 0){for(const z in F){const B=F[z];for(const $ in B)h(B[$].object),delete B[$];delete F[z]}delete I[N],Object.keys(I).length===0&&delete n[P]}}}function T(){R(),a=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function mE(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function gE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==Di&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const v=E===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==di&&E!==jn&&!v&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(We("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:b,maxSamples:x,samples:w}}function _E(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Wr,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=r.get(f);if(!i||p===null||p.length===0||s&&!g)s?h(null):c();else{const S=s?0:n,M=S*4;let b=m.clippingState||null;l.value=b,b=h(p,u,M,d);for(let x=0;x!==M;++x)b[x]=t[x];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,p){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=d+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,b=d;M!==_;++M,b+=4)a.copy(f[M]).applyMatrix4(S,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const wa=4,bE=6,vE=20,xE=256,bo=new Ll,ug=new ke;let Su=null,yu=0,Mu=0,Tu=!1;const SE=new U,ms=new U;class Zf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=SE}=s;Su=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,yu,Mu),this._renderer.xr.enabled=Tu,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Ha?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:xn,format:Di,colorSpace:ii,depthBuffer:!1},i=fg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fg(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yE(s)),this._blurMaterial=TE(s,e,t),this._ggxMaterial=ME(s,e,t)}return i}_compileMaterial(e){const t=new Nt(new dn,e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,n,i,s){const l=new qn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(ug),f.toneMapping=or,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new Ka,new rr({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(ug),m=!0);for(let M=0;M<6;M++){const b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const x=this._cubeSize;_a(i,b*x,M>2?x:0,x,x),f.setRenderTarget(i),m&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Us||e.mapping===Ha;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dg());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;_a(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,bo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-wa?n-p+wa:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,_a(s,g,m,3*_,2*_),i.setRenderTarget(s),i.render(o,bo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,_a(e,g,m,3*_,2*_),i.setRenderTarget(e),i.render(o,bo)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],f=3*h*(i>this._lodMax-wa?i-this._lodMax+wa:0),u=4*(this._cubeSize-h);_a(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,bo)}}function yE(r){const e=[],t=[];let n=r;const i=r-wa+1+bE;for(let s=0;s<i;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let m=0;m<f;m++){const S=m%3*2/3-1,M=m>2?0:-1,b=[S,M,0,S+2/3,M,0,S+2/3,M+1,0,S,M,0,S+2/3,M+1,0,S,M+1,0];p.set(b,d*u*m);for(let x=0;x<u;x++){const w=h[x*2]*2-1,E=h[x*2+1]*2-1;m===0?ms.set(1,E,w):m===1?ms.set(-w,1,-E):m===2?ms.set(-w,E,1):m===3?ms.set(-1,E,-w):m===4?ms.set(-w,-1,E):ms.set(w,E,-1),ms.toArray(_,(m*u+x)*d)}}const g=new dn;g.setAttribute("position",new Sn(p,d)),g.setAttribute("outputDirection",new Sn(_,d)),t.push(new Nt(g,null)),n>wa&&n--}return{lodMeshes:t,sizeLods:e}}function fg(r,e,t){const n=new Fn(r,e,t);return n.texture.mapping=xh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ME(r,e,t){return new Kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wh(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function TE(r,e,t){return new Kt({name:"SphericalGaussianBlur",defines:{SAMPLES:vE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wh(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function dg(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function pg(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function wh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ub extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new X0(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ka(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:Xa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ti,blending:ar});s.uniforms.tEquirect.value=t;const a=new Nt(i,s),o=t.minFilter;return t.minFilter===nr&&(t.minFilter=zt),new _M(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function wE(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?a(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===kc||d===Vh)if(e.has(u)){const p=e.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const _=new ub(p.height);return _.fromEquirectangularTexture(r,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,p=d===kc||d===Vh,_=d===Us||d===Ha;if(p||_){let g=t.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Zf(r)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const S=u.image;return p&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new Zf(r)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===kc?u.mapping=Us:d===Vh&&(u.mapping=Ha),u}function l(u){let d=0;const p=6;for(let _=0;_<p;_++)u[_]!==void 0&&d++;return d===p}function c(u){const d=u.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function EE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Na("WebGLRenderer: "+n+" extension not supported."),i}}}function AE(r,e,t,n){const i={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];const d=s.get(u);d&&(e.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)e.update(u[d],r.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,p=f.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const S=d.array;_=d.version;for(let M=0,b=S.length;M<b;M+=3){const x=S[M+0],w=S[M+1],E=S[M+2];u.push(x,w,w,E,E,x)}}else{const S=p.array;_=p.version;for(let M=0,b=S.length/3-1;M<b;M+=3){const x=M+0,w=M+1,E=M+2;u.push(x,w,w,E,E,x)}}const g=new(p.count>=65535?k0:O0)(u,1);g.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,g)}function h(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function RE(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,u){r.drawElements(n,u,s,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(r.drawElementsInstanced(n,u,s,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function CE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function PE(r,e,t){const n=new WeakMap,i=new Et;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let R=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var d=R;u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let x=o.attributes.position.count*b,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*w*4*f),v=new I0(E,x,w,f);v.type=jn,v.needsUpdate=!0;const T=b*4;for(let L=0;L<f;L++){const P=m[L],I=S[L],N=M[L],F=x*w*4*L;for(let z=0;z<P.count;z++){const B=z*T;p===!0&&(i.fromBufferAttribute(P,z),E[F+B+0]=i.x,E[F+B+1]=i.y,E[F+B+2]=i.z,E[F+B+3]=0),_===!0&&(i.fromBufferAttribute(I,z),E[F+B+4]=i.x,E[F+B+5]=i.y,E[F+B+6]=i.z,E[F+B+7]=0),g===!0&&(i.fromBufferAttribute(N,z),E[F+B+8]=i.x,E[F+B+9]=i.y,E[F+B+10]=i.z,E[F+B+11]=N.itemSize===4?i.w:1)}}u={count:f,texture:v,size:new he(x,w)},n.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function LE(r,e,t,n,i){let s=new WeakMap;function a(c){const h=i.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const DE={[Ld]:"LINEAR_TONE_MAPPING",[Dd]:"REINHARD_TONE_MAPPING",[Nd]:"CINEON_TONE_MAPPING",[vh]:"ACES_FILMIC_TONE_MAPPING",[Fd]:"AGX_TONE_MAPPING",[Ud]:"NEUTRAL_TONE_MAPPING",[Id]:"CUSTOM_TONE_MAPPING"};function NE(r,e,t,n,i,s){const a=new Fn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new dn;c.setAttribute("position",new yn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new yn([0,2,0,0,2,0],2));const h=new ib({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Nt(c,h),u=new Ll(-1,1,1,-1,0,1);let d=null,p=null,_=!1,g,m=null,S=[],M=!1;this.setSize=function(b,x){a.setSize(b,x),o!==null&&o.setSize(b,x),l!==null&&l.setSize(b,x);for(let w=0;w<S.length;w++){const E=S[w];E.setSize&&E.setSize(b,x)}},this.setEffects=function(b){S=b,M=S.length>0&&S[0].isRenderPass===!0;const x=a.width,w=a.height;S.length>0&&o===null&&(o=new Fn(x,w,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new Fn(x,w,{type:xn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<S.length;E++){const v=S[E];v.setSize&&v.setSize(x,w)}},this.begin=function(b,x){if(_||b.toneMapping===or&&S.length===0)return!1;if(m=x,x!==null){const w=x.width,E=x.height;(a.width!==w||a.height!==E)&&this.setSize(w,E)}return M===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=or,!0},this.hasRenderPass=function(){return M},this.end=function(b,x){b.toneMapping=g,_=!0;let w=a,E=o;for(let v=0;v<S.length;v++){const T=S[v];T.enabled!==!1&&(T.render(b,E,w,x),T.needsSwap!==!1&&(w=E,E=E===o?l:o))}if(d!==b.outputColorSpace||p!==b.toneMapping){d=b.outputColorSpace,p=b.toneMapping,h.defines={},dt.getTransfer(d)===xt&&(h.defines.SRGB_TRANSFER="");const v=DE[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(m),b.render(f,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const fb=new hn,Qf=new yl(1,1),db=new I0,pb=new FS,mb=new X0,mg=[],gg=[],_g=new Float32Array(16),bg=new Float32Array(9),vg=new Float32Array(4);function Za(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=mg[i];if(s===void 0&&(s=new Float32Array(i),mg[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function un(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function fn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Eh(r,e){let t=gg[e];t===void 0&&(t=new Int32Array(e),gg[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function IE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function FE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2fv(this.addr,e),fn(t,e)}}function UE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;r.uniform3fv(this.addr,e),fn(t,e)}}function OE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4fv(this.addr,e),fn(t,e)}}function kE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;vg.set(n),r.uniformMatrix2fv(this.addr,!1,vg),fn(t,n)}}function BE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;bg.set(n),r.uniformMatrix3fv(this.addr,!1,bg),fn(t,n)}}function zE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;_g.set(n),r.uniformMatrix4fv(this.addr,!1,_g),fn(t,n)}}function GE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function HE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2iv(this.addr,e),fn(t,e)}}function VE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3iv(this.addr,e),fn(t,e)}}function WE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4iv(this.addr,e),fn(t,e)}}function XE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function qE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2uiv(this.addr,e),fn(t,e)}}function KE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3uiv(this.addr,e),fn(t,e)}}function YE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4uiv(this.addr,e),fn(t,e)}}function JE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Qf.compareFunction=t.isReversedDepthBuffer()?Xd:Wd,s=Qf):s=fb,t.setTexture2D(e||s,i)}function jE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pb,i)}function $E(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mb,i)}function ZE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||db,i)}function QE(r){switch(r){case 5126:return IE;case 35664:return FE;case 35665:return UE;case 35666:return OE;case 35674:return kE;case 35675:return BE;case 35676:return zE;case 5124:case 35670:return GE;case 35667:case 35671:return HE;case 35668:case 35672:return VE;case 35669:case 35673:return WE;case 5125:return XE;case 36294:return qE;case 36295:return KE;case 36296:return YE;case 35678:case 36198:case 36298:case 36306:case 35682:return JE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return $E;case 36289:case 36303:case 36311:case 36292:return ZE}}function e1(r,e){r.uniform1fv(this.addr,e)}function t1(r,e){const t=Za(e,this.size,2);r.uniform2fv(this.addr,t)}function n1(r,e){const t=Za(e,this.size,3);r.uniform3fv(this.addr,t)}function i1(r,e){const t=Za(e,this.size,4);r.uniform4fv(this.addr,t)}function r1(r,e){const t=Za(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function s1(r,e){const t=Za(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function a1(r,e){const t=Za(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function o1(r,e){r.uniform1iv(this.addr,e)}function l1(r,e){r.uniform2iv(this.addr,e)}function c1(r,e){r.uniform3iv(this.addr,e)}function h1(r,e){r.uniform4iv(this.addr,e)}function u1(r,e){r.uniform1uiv(this.addr,e)}function f1(r,e){r.uniform2uiv(this.addr,e)}function d1(r,e){r.uniform3uiv(this.addr,e)}function p1(r,e){r.uniform4uiv(this.addr,e)}function m1(r,e,t){const n=this.cache,i=e.length,s=Eh(t,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Qf:a=fb;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function g1(r,e,t){const n=this.cache,i=e.length,s=Eh(t,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||pb,s[a])}function _1(r,e,t){const n=this.cache,i=e.length,s=Eh(t,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||mb,s[a])}function b1(r,e,t){const n=this.cache,i=e.length,s=Eh(t,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||db,s[a])}function v1(r){switch(r){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return s1;case 35676:return a1;case 5124:case 35670:return o1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return h1;case 5125:return u1;case 36294:return f1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return b1}}class x1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=QE(t.type)}}class S1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v1(t.type)}}class y1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const wu=/(\w+)(\])?(\[|\.)?/g;function xg(r,e){r.seq.push(e),r.map[e.id]=e}function M1(r,e,t){const n=r.name,i=n.length;for(wu.lastIndex=0;;){const s=wu.exec(n),a=wu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){xg(t,c===void 0?new x1(o,r,e):new S1(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new y1(o),xg(t,f)),t=f}}}class Xc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);M1(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Sg(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const T1=37297;let w1=0;function E1(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const yg=new tt;function A1(r){dt._getMatrix(yg,dt.workingColorSpace,r);const e=`mat3( ${yg.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case lh:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Mg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+E1(r.getShaderSource(e),o)}else return s}function R1(r,e){const t=A1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const C1={[Ld]:"Linear",[Dd]:"Reinhard",[Nd]:"Cineon",[vh]:"ACESFilmic",[Fd]:"AgX",[Ud]:"Neutral",[Id]:"Custom"};function P1(r,e){const t=C1[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tc=new U;function L1(){dt.getLuminanceCoefficients(Tc);const r=Tc.x.toFixed(4),e=Tc.y.toFixed(4),t=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function N1(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I1(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Fo(r){return r!==""}function Tg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(r){return r.replace(F1,O1)}const U1=new Map;function O1(r,e){let t=st[e];if(t===void 0){const n=U1.get(e);if(n!==void 0)t=st[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ed(t)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eg(r){return r.replace(k1,B1)}function B1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ag(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const z1={[Jo]:"SHADOWMAP_TYPE_PCF",[Do]:"SHADOWMAP_TYPE_VSM"};function G1(r){return z1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const H1={[Us]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE",[xh]:"ENVMAP_TYPE_CUBE_UV"};function V1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":H1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const W1={[Ha]:"ENVMAP_MODE_REFRACTION"};function X1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":W1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const q1={[y0]:"ENVMAP_BLENDING_MULTIPLY",[Jx]:"ENVMAP_BLENDING_MIX",[jx]:"ENVMAP_BLENDING_ADD"};function K1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":q1[r.combine]||"ENVMAP_BLENDING_NONE"}function Y1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function J1(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=G1(t),c=V1(t),h=X1(t),f=K1(t),u=Y1(t),d=D1(t),p=N1(s),_=i.createProgram();let g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fo).join(`
`),m.length>0&&(m+=`
`)):(g=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),m=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?st.tonemapping_pars_fragment:"",t.toneMapping!==or?P1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,R1("linearToOutputTexel",t.outputColorSpace),L1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fo).join(`
`)),a=ed(a),a=Tg(a,t),a=wg(a,t),o=ed(o),o=Tg(o,t),o=wg(o,t),a=Eg(a),o=Eg(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===_m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=S+g+a,b=S+m+o,x=Sg(i,i.VERTEX_SHADER,M),w=Sg(i,i.FRAGMENT_SHADER,b);i.attachShader(_,x),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(L){if(r.debug.checkShaderErrors){const P=i.getProgramInfoLog(_)||"",I=i.getShaderInfoLog(x)||"",N=i.getShaderInfoLog(w)||"",F=P.trim(),z=I.trim(),B=N.trim();let $=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,x,w);else{const C=Mg(i,x,"vertex"),j=Mg(i,w,"fragment");Qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+C+`
`+j)}else F!==""?We("WebGLProgram: Program Info Log:",F):(z===""||B==="")&&(W=!1);W&&(L.diagnostics={runnable:$,programLog:F,vertexShader:{log:z,prefix:g},fragmentShader:{log:B,prefix:m}})}i.deleteShader(x),i.deleteShader(w),v=new Xc(i,_),T=I1(i,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,T1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=w,this}let j1=0;class $1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Z1(e),t.set(e,n)),n}}class Z1{constructor(e){this.id=j1++,this.code=e,this.usedTimes=0}}function Q1(r){return r===ks||r===ah||r===oh}function eA(r,e,t,n,i,s){const a=new F0,o=new $1,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,R,L,P,I){const N=L.fog,F=P.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,$=e.get(v.envMap||z,B),W=$&&$.mapping===xh?$.image.height:null,C=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=j!==void 0?j.length:0;let me=0;F.morphAttributes.position!==void 0&&(me=1),F.morphAttributes.normal!==void 0&&(me=2),F.morphAttributes.color!==void 0&&(me=3);let Ie,Xe,Ze,J;if(C){const Ke=Zi[C];Ie=Ke.vertexShader,Xe=Ke.fragmentShader}else{Ie=v.vertexShader,Xe=v.fragmentShader;const Ke=o.getVertexShaderStage(v),le=o.getFragmentShaderStage(v);o.update(v,Ke,le),Ze=Ke.id,J=le.id}const te=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),qe=P.isInstancedMesh===!0,xe=P.isBatchedMesh===!0,De=!!v.map,Fe=!!v.matcap,Q=!!$,re=!!v.aoMap,oe=!!v.lightMap,O=!!v.bumpMap&&v.wireframe===!1,pe=!!v.normalMap,Ge=!!v.displacementMap,Ue=!!v.emissiveMap,Re=!!v.metalnessMap,je=!!v.roughnessMap,k=v.anisotropy>0,ct=v.clearcoat>0,Ye=v.dispersion>0,D=v.retroreflectivity>0,y=v.iridescence>0,V=v.sheen>0,X=v.transmission>0,Z=k&&!!v.anisotropyMap,ge=ct&&!!v.clearcoatMap,ce=ct&&!!v.clearcoatNormalMap,ee=ct&&!!v.clearcoatRoughnessMap,ie=y&&!!v.iridescenceMap,Se=y&&!!v.iridescenceThicknessMap,Ne=V&&!!v.sheenColorMap,ye=V&&!!v.sheenRoughnessMap,ve=!!v.specularMap,de=!!v.specularColorMap,He=!!v.specularIntensityMap,$e=X&&!!v.transmissionMap,G=X&&!!v.thicknessMap,be=!!v.gradientMap,ne=!!v.alphaMap,Me=v.alphaTest>0,we=!!v.alphaHash,se=!!v.extensions;let ue=or;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ue=r.toneMapping);const ae={shaderID:C,shaderType:v.type,shaderName:v.name,vertexShader:Ie,fragmentShader:Xe,defines:v.defines,customVertexShaderID:Ze,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:xe,batchingColor:xe&&P._colorsTexture!==null,instancing:qe,instancingColor:qe&&P.instanceColor!==null,instancingMorph:qe&&P.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:De,matcap:Fe,envMap:Q,envMapMode:Q&&$.mapping,envMapCubeUVHeight:W,aoMap:re,lightMap:oe,bumpMap:O,normalMap:pe,displacementMap:Ge,emissiveMap:Ue,normalMapObjectSpace:pe&&v.normalMapType===tS,normalMapTangentSpace:pe&&v.normalMapType===Xf,packedNormalMap:pe&&v.normalMapType===Xf&&Q1(v.normalMap.format),metalnessMap:Re,roughnessMap:je,anisotropy:k,anisotropyMap:Z,clearcoat:ct,clearcoatMap:ge,clearcoatNormalMap:ce,clearcoatRoughnessMap:ee,dispersion:Ye,retroreflection:D,iridescence:y,iridescenceMap:ie,iridescenceThicknessMap:Se,sheen:V,sheenColorMap:Ne,sheenRoughnessMap:ye,specularMap:ve,specularColorMap:de,specularIntensityMap:He,transmission:X,transmissionMap:$e,thicknessMap:G,gradientMap:be,opaque:v.transparent===!1&&v.blending===jo&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:Me,alphaHash:we,combine:v.combine,mapUv:De&&p(v.map.channel),aoMapUv:re&&p(v.aoMap.channel),lightMapUv:oe&&p(v.lightMap.channel),bumpMapUv:O&&p(v.bumpMap.channel),normalMapUv:pe&&p(v.normalMap.channel),displacementMapUv:Ge&&p(v.displacementMap.channel),emissiveMapUv:Ue&&p(v.emissiveMap.channel),metalnessMapUv:Re&&p(v.metalnessMap.channel),roughnessMapUv:je&&p(v.roughnessMap.channel),anisotropyMapUv:Z&&p(v.anisotropyMap.channel),clearcoatMapUv:ge&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(v.sheenRoughnessMap.channel),specularMapUv:ve&&p(v.specularMap.channel),specularColorMapUv:de&&p(v.specularColorMap.channel),specularIntensityMapUv:He&&p(v.specularIntensityMap.channel),transmissionMapUv:$e&&p(v.transmissionMap.channel),thicknessMapUv:G&&p(v.thicknessMap.channel),alphaMapUv:ne&&p(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pe||k),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(De||ne),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&pe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:me,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:De&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:Ue&&v.emissiveMap.isVideoTexture===!0&&dt.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zi,flipSided:v.side===ti,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function g(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(T,v),S(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function M(v){const T=d[v.type];let R;if(T){const L=Zi[T];R=El.clone(L.uniforms)}else R=v.uniforms;return R}function b(v,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new J1(r,T,v,i),c.push(R),h.set(T,R)),R}function x(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:b,releaseProgram:x,releaseShaderCache:w,programs:c,dispose:E}}function tA(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function nA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Rg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Cg(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,_,g,m){let S=r[e];return S===void 0?(S={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[e]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=p,S.materialVariant=a(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=g,S.group=m),e++,S}function l(u,d,p,_,g,m,S){S.reversedDepth===!0&&(g=-g);const M=o(u,d,p,_,g,m);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):t.push(M)}function c(u,d,p,_,g,m){const S=o(u,d,p,_,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):t.unshift(S)}function h(u,d){t.length>1&&t.sort(u||nA),n.length>1&&n.sort(d||Rg),i.length>1&&i.sort(d||Rg)}function f(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:h}}function iA(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Cg,r.set(n,[a])):i>=s.length?(a=new Cg,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function rA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new ke};break;case"SpotLight":t={position:new U,direction:new U,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function sA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let aA=0;function oA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lA(r){const e=new rA,t=sA(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new it,a=new it;function o(c){let h=0,f=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,S=0,M=0,b=0,x=0,w=0,E=0,v=0,T=0,R=0;c.sort(oA);for(let P=0,I=c.length;P<I;P++){const N=c[P],F=N.color,z=N.intensity,B=N.distance;let $=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ks?$=N.shadow.map.texture:$=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=F.r*z,f+=F.g*z,u+=F.b*z;else if(N.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(N.sh.coefficients[W],z);R++}else if(N.isSunLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const C=N.shadow,j=t.get(N);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=$;const fe=C.getViewportCount();for(let me=0;me<fe;me++)n.sunShadowMatrix[_+me]=C.getMatrix(me),n.sunShadowCascade[_+me]=C._cascadeData[me];_+=fe,p++}n.sun[d]=W,d++}else if(N.isDirectionalLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const C=N.shadow,j=t.get(N);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=N.shadow.matrix,x++}n.directional[g]=W,g++}else if(N.isSpotLight){const W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(F).multiplyScalar(z),W.distance=B,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,n.spot[S]=W;const C=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,C.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[S]=C.matrix,N.castShadow){const j=t.get(N);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=$,E++}S++}else if(N.isRectAreaLight){const W=e.get(N);W.color.copy(F).multiplyScalar(z),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),n.rectArea[M]=W,M++}else if(N.isPointLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){const C=N.shadow,j=t.get(N);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,j.shadowCameraNear=C.camera.near,j.shadowCameraFar=C.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=N.shadow.matrix,w++}n.point[m]=W,m++}else if(N.isHemisphereLight){const W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(z),W.groundColor.copy(N.groundColor).multiplyScalar(z),n.hemi[b]=W,b++}}M>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const L=n.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==S||L.rectAreaLength!==M||L.hemiLength!==b||L.numSunShadows!==p||L.numDirectionalShadows!==x||L.numPointShadows!==w||L.numSpotShadows!==E||L.numSpotMaps!==v||L.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=S,n.rectArea.length=M,n.point.length=m,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.directionalShadowMatrix.length=x,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.sunLength=d,L.directionalLength=g,L.pointLength=m,L.spotLength=S,L.rectAreaLength=M,L.hemiLength=b,L.numSunShadows=p,L.numDirectionalShadows=x,L.numPointShadows=w,L.numSpotShadows=E,L.numSpotMaps=v,L.numLightProbes=R,n.version=aA++)}function l(c,h){let f=0,u=0,d=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let S=0,M=c.length;S<M;S++){const b=c[S];if(b.isSunLight){const x=n.sun[f];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),f++}else if(b.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Pg(r){const e=new lA(r),t=[],n=[],i=[];function s(u){f.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function cA(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Pg(r),e.set(i,[o])):s>=a.length?(o=new Pg(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const hA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uA=`uniform sampler2D shadow_pass;
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
}`,fA=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],dA=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Lg=new it,vo=new U,Eu=new U;function pA(r,e,t){let n=new jd;const i=new he,s=new he,a=new Et,o=new Ky,l=new Yy,c={},h=t.maxTextureSize,f={[as]:ti,[ti]:as,[zi]:zi},u=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:hA,fragmentShader:uA}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const p=new dn;p.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let m=this.type;this.render=function(w,E,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Px&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jo);const T=r.getRenderTarget(),R=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),P=r.state;P.setBlending(ar),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=m!==this.type;I&&E.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(F=>F.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,F=w.length;N<F;N++){const z=w[N],B=z.shadow;if(B===void 0){We("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const $=B.getFrameExtents();i.multiply($),s.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,B.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,B.mapSize.y=s.y));const W=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||I===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Do){if(z.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Fn(i.x,i.y,{format:ks,type:xn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new yl(i.x,i.y,jn),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=Lr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=cn,B.map.depthTexture.magFilter=cn}else z.isPointLight?(B.map=new ub(i.x),B.map.depthTexture=new hy(i.x,cr)):(B.map=new Fn(i.x,i.y),B.map.depthTexture=new yl(i.x,i.y,cr)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=Lr,this.type===Jo?(B.map.depthTexture.compareFunction=W?Xd:Wd,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=cn,B.map.depthTexture.magFilter=cn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);const C=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();z.isPointLight!==!0&&B.updateMatrices(z,v);for(let j=0;j<C;j++){const fe=B.getCamera(j);if(z.isPointLight){const me=B.camera,Ie=B.matrix,Xe=z.distance||me.far;Xe!==me.far&&(me.far=Xe,me.updateProjectionMatrix()),vo.setFromMatrixPosition(z.matrixWorld),me.position.copy(vo),Eu.copy(me.position),Eu.add(fA[j]),me.up.copy(dA[j]),me.lookAt(Eu),me.updateMatrixWorld(),Ie.makeTranslation(-vo.x,-vo.y,-vo.z),Lg.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Lg,me.coordinateSystem,me.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,j),r.clear();else{j===0&&(r.setRenderTarget(B.map),r.clear());const me=B.getViewport(j);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),P.viewport(a)}n=B.getFrustum(j),b(E,v,fe,z,this.type)}B.isPointLightShadow!==!0&&this.type===Do&&S(B,v),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(T,R,L)};function S(w,E){const v=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Fn(i.x,i.y,{format:ks,type:xn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,v,u,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,v,d,_,null)}function M(w,E,v,T){let R=null;const L=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)R=L;else if(R=v.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const P=R.uuid,I=E.uuid;let N=c[P];N===void 0&&(N={},c[P]=N);let F=N[I];F===void 0&&(F=R.clone(),N[I]=F,E.addEventListener("dispose",x)),R=F}if(R.visible=E.visible,R.wireframe=E.wireframe,T===Do?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:f[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const P=r.properties.get(R);P.light=v}return R}function b(w,E,v,T,R){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Do)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const I=e.update(w),N=w.material;if(Array.isArray(N)){const F=I.groups;for(let z=0,B=F.length;z<B;z++){const $=F[z],W=N[$.materialIndex];if(W&&W.visible){const C=M(w,W,T,R);w.onBeforeShadow(r,w,E,v,I,C,$),r.renderBufferDirect(v,null,I,C,w,$),w.onAfterShadow(r,w,E,v,I,C,$)}}}else if(N.visible){const F=M(w,N,T,R);w.onBeforeShadow(r,w,E,v,I,F,null),r.renderBufferDirect(v,null,I,F,w,null),w.onAfterShadow(r,w,E,v,I,F,null)}}const P=w.children;for(let I=0,N=P.length;I<N;I++)b(P[I],E,v,T,R)}function x(w){w.target.removeEventListener("dispose",x);for(const v in c){const T=c[v],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function mA(r,e){function t(){let G=!1;const be=new Et;let ne=null;const Me=new Et(0,0,0,0);return{setMask:function(we){ne!==we&&!G&&(r.colorMask(we,we,we,we),ne=we)},setLocked:function(we){G=we},setClear:function(we,se,ue,ae,Ke){Ke===!0&&(we*=ae,se*=ae,ue*=ae),be.set(we,se,ue,ae),Me.equals(be)===!1&&(r.clearColor(we,se,ue,ae),Me.copy(be))},reset:function(){G=!1,ne=null,Me.set(-1,0,0,0)}}}function n(){let G=!1,be=!1,ne=null,Me=null,we=null;return{setReversed:function(se){if(be!==se){const ue=e.get("EXT_clip_control");se?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),be=se;const ae=we;we=null,this.setClear(ae)}},getReversed:function(){return be},setTest:function(se){se?te(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(se){ne!==se&&!G&&(r.depthMask(se),ne=se)},setFunc:function(se){if(be&&(se=dS[se]),Me!==se){switch(se){case of:r.depthFunc(r.NEVER);break;case lf:r.depthFunc(r.ALWAYS);break;case cf:r.depthFunc(r.LESS);break;case dl:r.depthFunc(r.LEQUAL);break;case hf:r.depthFunc(r.EQUAL);break;case uf:r.depthFunc(r.GEQUAL);break;case ff:r.depthFunc(r.GREATER);break;case df:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=se}},setLocked:function(se){G=se},setClear:function(se){we!==se&&(we=se,be&&(se=1-se),r.clearDepth(se))},reset:function(){G=!1,ne=null,Me=null,we=null,be=!1}}}function i(){let G=!1,be=null,ne=null,Me=null,we=null,se=null,ue=null,ae=null,Ke=null;return{setTest:function(le){G||(le?te(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(le){be!==le&&!G&&(r.stencilMask(le),be=le)},setFunc:function(le,Je,Oe){(ne!==le||Me!==Je||we!==Oe)&&(r.stencilFunc(le,Je,Oe),ne=le,Me=Je,we=Oe)},setOp:function(le,Je,Oe){(se!==le||ue!==Je||ae!==Oe)&&(r.stencilOp(le,Je,Oe),se=le,ue=Je,ae=Oe)},setLocked:function(le){G=le},setClear:function(le){Ke!==le&&(r.clearStencil(le),Ke=le)},reset:function(){G=!1,be=null,ne=null,Me=null,we=null,se=null,ue=null,ae=null,Ke=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,S=null,M=null,b=null,x=null,w=null,E=null,v=new ke(0,0,0),T=0,R=!1,L=null,P=null,I=null,N=null,F=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=$>=2);let C=null,j={};const fe=r.getParameter(r.SCISSOR_BOX),me=r.getParameter(r.VIEWPORT),Ie=new Et().fromArray(fe),Xe=new Et().fromArray(me);function Ze(G,be,ne,Me){const we=new Uint8Array(4),se=r.createTexture();r.bindTexture(G,se),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ue=0;ue<ne;ue++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,Me,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(be+ue,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return se}const J={};J[r.TEXTURE_2D]=Ze(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(dl),O(!1),pe(cm),te(r.CULL_FACE),re(ar);function te(G){h[G]!==!0&&(r.enable(G),h[G]=!0)}function _e(G){h[G]!==!1&&(r.disable(G),h[G]=!1)}function qe(G,be){return u[G]!==be?(r.bindFramebuffer(G,be),u[G]=be,G===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=be),G===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=be),!0):!1}function xe(G,be){let ne=p,Me=!1;if(G){ne=d.get(be),ne===void 0&&(ne=[],d.set(be,ne));const we=G.textures;if(ne.length!==we.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let se=0,ue=we.length;se<ue;se++)ne[se]=r.COLOR_ATTACHMENT0+se;ne.length=we.length,Me=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,Me=!0);Me&&r.drawBuffers(ne)}function De(G){return _!==G?(r.useProgram(G),_=G,!0):!1}const Fe={[xa]:r.FUNC_ADD,[Dx]:r.FUNC_SUBTRACT,[Nx]:r.FUNC_REVERSE_SUBTRACT};Fe[Ix]=r.MIN,Fe[Fx]=r.MAX;const Q={[Ux]:r.ZERO,[Ox]:r.ONE,[kx]:r.SRC_COLOR,[x0]:r.SRC_ALPHA,[Wx]:r.SRC_ALPHA_SATURATE,[Hx]:r.DST_COLOR,[zx]:r.DST_ALPHA,[Bx]:r.ONE_MINUS_SRC_COLOR,[S0]:r.ONE_MINUS_SRC_ALPHA,[Vx]:r.ONE_MINUS_DST_COLOR,[Gx]:r.ONE_MINUS_DST_ALPHA,[Xx]:r.CONSTANT_COLOR,[qx]:r.ONE_MINUS_CONSTANT_COLOR,[Kx]:r.CONSTANT_ALPHA,[Yx]:r.ONE_MINUS_CONSTANT_ALPHA};function re(G,be,ne,Me,we,se,ue,ae,Ke,le){if(G===ar){g===!0&&(_e(r.BLEND),g=!1);return}if(g===!1&&(te(r.BLEND),g=!0),G!==Lx){if(G!==m||le!==R){if((S!==xa||x!==xa)&&(r.blendEquation(r.FUNC_ADD),S=xa,x=xa),le)switch(G){case jo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pr:r.blendFunc(r.ONE,r.ONE);break;case hm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case um:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Qe("WebGLState: Invalid blending: ",G);break}else switch(G){case jo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case hm:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case um:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",G);break}M=null,b=null,w=null,E=null,v.set(0,0,0),T=0,m=G,R=le}return}we=we||be,se=se||ne,ue=ue||Me,(be!==S||we!==x)&&(r.blendEquationSeparate(Fe[be],Fe[we]),S=be,x=we),(ne!==M||Me!==b||se!==w||ue!==E)&&(r.blendFuncSeparate(Q[ne],Q[Me],Q[se],Q[ue]),M=ne,b=Me,w=se,E=ue),(ae.equals(v)===!1||Ke!==T)&&(r.blendColor(ae.r,ae.g,ae.b,Ke),v.copy(ae),T=Ke),m=G,R=!1}function oe(G,be){G.side===zi?_e(r.CULL_FACE):te(r.CULL_FACE);let ne=G.side===ti;be&&(ne=!ne),O(ne),G.blending===jo&&G.transparent===!1?re(ar):re(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);const Me=G.stencilWrite;o.setTest(Me),Me&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ue(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function O(G){L!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),L=G)}function pe(G){G!==Rx?(te(r.CULL_FACE),G!==P&&(G===cm?r.cullFace(r.BACK):G===Cx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),P=G}function Ge(G){G!==I&&(B&&r.lineWidth(G),I=G)}function Ue(G,be,ne){G?(te(r.POLYGON_OFFSET_FILL),(N!==be||F!==ne)&&(N=be,F=ne,a.getReversed()&&(be=-be),r.polygonOffset(be,ne))):_e(r.POLYGON_OFFSET_FILL)}function Re(G){G?te(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function je(G){G===void 0&&(G=r.TEXTURE0+z-1),C!==G&&(r.activeTexture(G),C=G)}function k(G,be,ne){ne===void 0&&(C===null?ne=r.TEXTURE0+z-1:ne=C);let Me=j[ne];Me===void 0&&(Me={type:void 0,texture:void 0},j[ne]=Me),(Me.type!==G||Me.texture!==be)&&(C!==ne&&(r.activeTexture(ne),C=ne),r.bindTexture(G,be||J[G]),Me.type=G,Me.texture=be)}function ct(){const G=j[C];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ye(){try{r.compressedTexImage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function y(){try{r.texSubImage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function V(){try{r.texSubImage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function Z(){try{r.compressedTexSubImage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function ge(){try{r.texStorage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function ce(){try{r.texStorage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function ee(){try{r.texImage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function ie(){try{r.texImage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function Se(G){return f[G]!==void 0?f[G]:r.getParameter(G)}function Ne(G,be){f[G]!==be&&(r.pixelStorei(G,be),f[G]=be)}function ye(G){Ie.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Ie.copy(G))}function ve(G){Xe.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Xe.copy(G))}function de(G,be){let ne=c.get(be);ne===void 0&&(ne=new WeakMap,c.set(be,ne));let Me=ne.get(G);Me===void 0&&(Me=r.getUniformBlockIndex(be,G.name),ne.set(G,Me))}function He(G,be){const Me=c.get(be).get(G);l.get(be)!==Me&&(r.uniformBlockBinding(be,Me,G.__bindingPointIndex),l.set(be,Me))}function $e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},f={},C=null,j={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,S=null,M=null,b=null,x=null,w=null,E=null,v=new ke(0,0,0),T=0,R=!1,L=null,P=null,I=null,N=null,F=null,Ie.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:_e,bindFramebuffer:qe,drawBuffers:xe,useProgram:De,setBlending:re,setMaterial:oe,setFlipSided:O,setCullFace:pe,setLineWidth:Ge,setPolygonOffset:Ue,setScissorTest:Re,activeTexture:je,bindTexture:k,unbindTexture:ct,compressedTexImage2D:Ye,compressedTexImage3D:D,texImage2D:ee,texImage3D:ie,pixelStorei:Ne,getParameter:Se,updateUBOMapping:de,uniformBlockBinding:He,texStorage2D:ge,texStorage3D:ce,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:ye,viewport:ve,reset:$e}}function gA(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,y){return p?new OffscreenCanvas(D,y):vl("canvas")}function g(D,y,V){let X=1;const Z=Ye(D);if((Z.width>V||Z.height>V)&&(X=V/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ge=Math.floor(X*Z.width),ce=Math.floor(X*Z.height);u===void 0&&(u=_(ge,ce));const ee=y?_(ge,ce):u;return ee.width=ge,ee.height=ce,ee.getContext("2d").drawImage(D,0,0,ge,ce),We("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ge+"x"+ce+")."),ee}else return"data"in D&&We("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),D;return D}function m(D){return D.generateMipmaps}function S(D){r.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(D,y,V,X,Z,ge=!1){if(D!==null){if(r[D]!==void 0)return r[D];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce;X&&(ce=e.get("EXT_texture_norm16"),ce||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=y;if(y===r.RED&&(V===r.FLOAT&&(ee=r.R32F),V===r.HALF_FLOAT&&(ee=r.R16F),V===r.UNSIGNED_BYTE&&(ee=r.R8),V===r.UNSIGNED_SHORT&&ce&&(ee=ce.R16_EXT),V===r.SHORT&&ce&&(ee=ce.R16_SNORM_EXT)),y===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(ee=r.R8UI),V===r.UNSIGNED_SHORT&&(ee=r.R16UI),V===r.UNSIGNED_INT&&(ee=r.R32UI),V===r.BYTE&&(ee=r.R8I),V===r.SHORT&&(ee=r.R16I),V===r.INT&&(ee=r.R32I)),y===r.RG&&(V===r.FLOAT&&(ee=r.RG32F),V===r.HALF_FLOAT&&(ee=r.RG16F),V===r.UNSIGNED_BYTE&&(ee=r.RG8),V===r.UNSIGNED_SHORT&&ce&&(ee=ce.RG16_EXT),V===r.SHORT&&ce&&(ee=ce.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(ee=r.RG8UI),V===r.UNSIGNED_SHORT&&(ee=r.RG16UI),V===r.UNSIGNED_INT&&(ee=r.RG32UI),V===r.BYTE&&(ee=r.RG8I),V===r.SHORT&&(ee=r.RG16I),V===r.INT&&(ee=r.RG32I)),y===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(ee=r.RGB8UI),V===r.UNSIGNED_SHORT&&(ee=r.RGB16UI),V===r.UNSIGNED_INT&&(ee=r.RGB32UI),V===r.BYTE&&(ee=r.RGB8I),V===r.SHORT&&(ee=r.RGB16I),V===r.INT&&(ee=r.RGB32I)),y===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(ee=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(ee=r.RGBA16UI),V===r.UNSIGNED_INT&&(ee=r.RGBA32UI),V===r.BYTE&&(ee=r.RGBA8I),V===r.SHORT&&(ee=r.RGBA16I),V===r.INT&&(ee=r.RGBA32I)),y===r.RGB&&(V===r.UNSIGNED_SHORT&&ce&&(ee=ce.RGB16_EXT),V===r.SHORT&&ce&&(ee=ce.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(ee=r.R11F_G11F_B10F)),y===r.RGBA){const ie=ge?lh:dt.getTransfer(Z);V===r.FLOAT&&(ee=r.RGBA32F),V===r.HALF_FLOAT&&(ee=r.RGBA16F),V===r.UNSIGNED_BYTE&&(ee=ie===xt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&ce&&(ee=ce.RGBA16_EXT),V===r.SHORT&&ce&&(ee=ce.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(D,y){let V;return D?y===null||y===cr||y===ml?V=r.DEPTH24_STENCIL8:y===jn?V=r.DEPTH32F_STENCIL8:y===pl&&(V=r.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===cr||y===ml?V=r.DEPTH_COMPONENT24:y===jn?V=r.DEPTH_COMPONENT32F:y===pl&&(V=r.DEPTH_COMPONENT16),V}function w(D,y){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==cn&&D.minFilter!==zt?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function E(D){const y=D.target;y.removeEventListener("dispose",E),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&f.delete(y)}function v(D){const y=D.target;y.removeEventListener("dispose",v),L(y)}function T(D){const y=n.get(D);if(y.__webglInit===void 0)return;const V=D.source,X=d.get(V);if(X){const Z=X[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(D),Object.keys(X).length===0&&d.delete(V)}n.remove(D)}function R(D){const y=n.get(D);r.deleteTexture(y.__webglTexture);const V=D.source,X=d.get(V);delete X[y.__cacheKey],a.memory.textures--}function L(D){const y=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let Z=0;Z<y.__webglFramebuffer[X].length;Z++)r.deleteFramebuffer(y.__webglFramebuffer[X][Z]);else r.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)r.deleteFramebuffer(y.__webglFramebuffer[X]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=D.textures;for(let X=0,Z=V.length;X<Z;X++){const ge=n.get(V[X]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(V[X])}n.remove(D)}let P=0;function I(){P=0}function N(){return P}function F(D){P=D}function z(){const D=P;return D>=i.maxTextures&&We("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),P+=1,D}function B(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function $(D,y){const V=n.get(D);if(D.isVideoTexture&&k(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&V.__version!==D.version){const X=D.image;if(X===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(V,D,y);return}}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+y)}function W(D,y){const V=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){_e(V,D,y);return}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+y)}function C(D,y){const V=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){_e(V,D,y);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+y)}function j(D,y){const V=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&V.__version!==D.version){qe(V,D,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+y)}const fe={[Os]:r.REPEAT,[Li]:r.CLAMP_TO_EDGE,[sh]:r.MIRRORED_REPEAT},me={[cn]:r.NEAREST,[T0]:r.NEAREST_MIPMAP_NEAREST,[No]:r.NEAREST_MIPMAP_LINEAR,[zt]:r.LINEAR,[Bc]:r.LINEAR_MIPMAP_NEAREST,[nr]:r.LINEAR_MIPMAP_LINEAR},Ie={[iS]:r.NEVER,[lS]:r.ALWAYS,[rS]:r.LESS,[Wd]:r.LEQUAL,[sS]:r.EQUAL,[Xd]:r.GEQUAL,[aS]:r.GREATER,[oS]:r.NOTEQUAL};function Xe(D,y){if(y.type===jn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zt||y.magFilter===Bc||y.magFilter===No||y.magFilter===nr||y.minFilter===zt||y.minFilter===Bc||y.minFilter===No||y.minFilter===nr)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,fe[y.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,fe[y.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,fe[y.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,me[y.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,me[y.minFilter]),y.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===cn||y.minFilter!==No&&y.minFilter!==nr||y.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ze(D,y){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",E));const X=y.source;let Z=d.get(X);Z===void 0&&(Z={},d.set(X,Z));const ge=B(y);if(ge!==D.__cacheKey){Z[ge]===void 0&&(Z[ge]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Z[ge].usedTimes++;const ce=Z[D.__cacheKey];ce!==void 0&&(Z[D.__cacheKey].usedTimes--,ce.usedTimes===0&&R(y)),D.__cacheKey=ge,D.__webglTexture=Z[ge].texture}return V}function J(D,y,V){return Math.floor(Math.floor(D/V)/y)}function te(D,y,V,X){const ge=D.updateRanges;if(ge.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,V,X,y.data);else{ge.sort((Ne,ye)=>Ne.start-ye.start);let ce=0;for(let Ne=1;Ne<ge.length;Ne++){const ye=ge[ce],ve=ge[Ne],de=ye.start+ye.count,He=J(ve.start,y.width,4),$e=J(ye.start,y.width,4);ve.start<=de+1&&He===$e&&J(ve.start+ve.count-1,y.width,4)===He?ye.count=Math.max(ye.count,ve.start+ve.count-ye.start):(++ce,ge[ce]=ve)}ge.length=ce+1;const ee=t.getParameter(r.UNPACK_ROW_LENGTH),ie=t.getParameter(r.UNPACK_SKIP_PIXELS),Se=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Ne=0,ye=ge.length;Ne<ye;Ne++){const ve=ge[Ne],de=Math.floor(ve.start/4),He=Math.ceil(ve.count/4),$e=de%y.width,G=Math.floor(de/y.width),be=He,ne=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(r.UNPACK_SKIP_ROWS,G),t.texSubImage2D(r.TEXTURE_2D,0,$e,G,be,ne,V,X,y.data)}D.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ee),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(r.UNPACK_SKIP_ROWS,Se)}}function _e(D,y,V){let X=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=r.TEXTURE_3D);const Z=Ze(D,y),ge=y.source;t.bindTexture(X,D.__webglTexture,r.TEXTURE0+V);const ce=n.get(ge);if(ge.version!==ce.__version||Z===!0){if(t.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ne=dt.getPrimaries(dt.workingColorSpace),Me=y.colorSpace===qr?null:dt.getPrimaries(y.colorSpace),we=y.colorSpace===qr||ne===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let ie=g(y.image,!1,i.maxTextureSize);ie=ct(y,ie);const Se=s.convert(y.format,y.colorSpace),Ne=s.convert(y.type);let ye=b(y.internalFormat,Se,Ne,y.normalized,y.colorSpace,y.isVideoTexture);Xe(X,y);let ve;const de=y.mipmaps,He=y.isVideoTexture!==!0,$e=ce.__version===void 0||Z===!0,G=ge.dataReady,be=w(y,ie);if(y.isDepthTexture)ye=x(y.format===Ms,y.type),$e&&(He?t.texStorage2D(r.TEXTURE_2D,1,ye,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,ye,ie.width,ie.height,0,Se,Ne,null));else if(y.isDataTexture)if(de.length>0){He&&$e&&t.texStorage2D(r.TEXTURE_2D,be,ye,de[0].width,de[0].height);for(let ne=0,Me=de.length;ne<Me;ne++)ve=de[ne],He?G&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ve.width,ve.height,Se,Ne,ve.data):t.texImage2D(r.TEXTURE_2D,ne,ye,ve.width,ve.height,0,Se,Ne,ve.data);y.generateMipmaps=!1}else He?($e&&t.texStorage2D(r.TEXTURE_2D,be,ye,ie.width,ie.height),G&&te(y,ie,Se,Ne)):t.texImage2D(r.TEXTURE_2D,0,ye,ie.width,ie.height,0,Se,Ne,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&$e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,ye,de[0].width,de[0].height,ie.depth);for(let ne=0,Me=de.length;ne<Me;ne++)if(ve=de[ne],y.format!==Di)if(Se!==null)if(He){if(G)if(y.layerUpdates.size>0){const we=hg(ve.width,ve.height,y.format,y.type);for(const se of y.layerUpdates){const ue=ve.data.subarray(se*we/ve.data.BYTES_PER_ELEMENT,(se+1)*we/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,se,ve.width,ve.height,1,Se,ue)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ve.width,ve.height,ie.depth,Se,ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,ye,ve.width,ve.height,ie.depth,0,ve.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ve.width,ve.height,ie.depth,Se,Ne,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,ye,ve.width,ve.height,ie.depth,0,Se,Ne,ve.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{He&&$e&&t.texStorage2D(r.TEXTURE_2D,be,ye,de[0].width,de[0].height);for(let ne=0,Me=de.length;ne<Me;ne++)ve=de[ne],y.format!==Di?Se!==null?He?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,ve.width,ve.height,Se,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,ye,ve.width,ve.height,0,ve.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?G&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ve.width,ve.height,Se,Ne,ve.data):t.texImage2D(r.TEXTURE_2D,ne,ye,ve.width,ve.height,0,Se,Ne,ve.data)}else if(y.isDataArrayTexture)if(He){if($e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,ye,ie.width,ie.height,ie.depth),G)if(y.layerUpdates.size>0){const ne=hg(ie.width,ie.height,y.format,y.type);for(const Me of y.layerUpdates){const we=ie.data.subarray(Me*ne/ie.data.BYTES_PER_ELEMENT,(Me+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Me,ie.width,ie.height,1,Se,Ne,we)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Se,Ne,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ye,ie.width,ie.height,ie.depth,0,Se,Ne,ie.data);else if(y.isData3DTexture)He?($e&&t.texStorage3D(r.TEXTURE_3D,be,ye,ie.width,ie.height,ie.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Se,Ne,ie.data)):t.texImage3D(r.TEXTURE_3D,0,ye,ie.width,ie.height,ie.depth,0,Se,Ne,ie.data);else if(y.isFramebufferTexture){if($e)if(He)t.texStorage2D(r.TEXTURE_2D,be,ye,ie.width,ie.height);else{let ne=ie.width,Me=ie.height;for(let we=0;we<be;we++)t.texImage2D(r.TEXTURE_2D,we,ye,ne,Me,0,Se,Ne,null),ne>>=1,Me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){const ne=r.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),f.add(y),ne.onpaint=Me=>{const we=Me.changedElements;for(const se of f)we.includes(se.image)&&(se.needsUpdate=!0)},ne.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ie);else{const we=r.RGBA,se=r.RGBA,ue=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,we,se,ue,ie)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(de.length>0){if(He&&$e){const ne=Ye(de[0]);t.texStorage2D(r.TEXTURE_2D,be,ye,ne.width,ne.height)}for(let ne=0,Me=de.length;ne<Me;ne++)ve=de[ne],He?G&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,Se,Ne,ve):t.texImage2D(r.TEXTURE_2D,ne,ye,Se,Ne,ve);y.generateMipmaps=!1}else if(He){if($e){const ne=Ye(ie);t.texStorage2D(r.TEXTURE_2D,be,ye,ne.width,ne.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se,Ne,ie)}else t.texImage2D(r.TEXTURE_2D,0,ye,Se,Ne,ie);m(y)&&S(X),ce.__version=ge.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function qe(D,y,V){if(y.image.length!==6)return;const X=Ze(D,y),Z=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+V);const ge=n.get(Z);if(Z.version!==ge.__version||X===!0){t.activeTexture(r.TEXTURE0+V);const ce=dt.getPrimaries(dt.workingColorSpace),ee=y.colorSpace===qr?null:dt.getPrimaries(y.colorSpace),ie=y.colorSpace===qr||ce===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const Se=y.isCompressedTexture||y.image[0].isCompressedTexture,Ne=y.image[0]&&y.image[0].isDataTexture,ye=[];for(let se=0;se<6;se++)!Se&&!Ne?ye[se]=g(y.image[se],!0,i.maxCubemapSize):ye[se]=Ne?y.image[se].image:y.image[se],ye[se]=ct(y,ye[se]);const ve=ye[0],de=s.convert(y.format,y.colorSpace),He=s.convert(y.type),$e=b(y.internalFormat,de,He,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,be=ge.__version===void 0||X===!0,ne=Z.dataReady;let Me=w(y,ve);Xe(r.TEXTURE_CUBE_MAP,y);let we;if(Se){G&&be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,$e,ve.width,ve.height);for(let se=0;se<6;se++){we=ye[se].mipmaps;for(let ue=0;ue<we.length;ue++){const ae=we[ue];y.format!==Di?de!==null?G?ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,0,0,ae.width,ae.height,de,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,$e,ae.width,ae.height,0,ae.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,0,0,ae.width,ae.height,de,He,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,$e,ae.width,ae.height,0,de,He,ae.data)}}}else{if(we=y.mipmaps,G&&be){we.length>0&&Me++;const se=Ye(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,$e,se.width,se.height)}for(let se=0;se<6;se++)if(Ne){G?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye[se].width,ye[se].height,de,He,ye[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,ye[se].width,ye[se].height,0,de,He,ye[se].data);for(let ue=0;ue<we.length;ue++){const Ke=we[ue].image[se].image;G?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,0,0,Ke.width,Ke.height,de,He,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,$e,Ke.width,Ke.height,0,de,He,Ke.data)}}else{G?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,de,He,ye[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,de,He,ye[se]);for(let ue=0;ue<we.length;ue++){const ae=we[ue];G?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,0,0,de,He,ae.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,$e,de,He,ae.image[se])}}}m(y)&&S(r.TEXTURE_CUBE_MAP),ge.__version=Z.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function xe(D,y,V,X,Z,ge){const ce=s.convert(V.format,V.colorSpace),ee=s.convert(V.type),ie=b(V.internalFormat,ce,ee,V.normalized,V.colorSpace),Se=n.get(y),Ne=n.get(V);if(Ne.__renderTarget=y,!Se.__hasExternalTextures){const ye=Math.max(1,y.width>>ge),ve=Math.max(1,y.height>>ge);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,ge,ie,ye,ve,y.depth,0,ce,ee,null):t.texImage2D(Z,ge,ie,ye,ve,0,ce,ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),je(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,Z,Ne.__webglTexture,0,Re(y)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,Z,Ne.__webglTexture,ge),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(D,y,V){if(r.bindRenderbuffer(r.RENDERBUFFER,D),y.depthBuffer){const X=y.depthTexture,Z=X&&X.isDepthTexture?X.type:null,ge=x(y.stencilBuffer,Z),ce=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;je(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re(y),ge,y.width,y.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re(y),ge,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ge,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ce,r.RENDERBUFFER,D)}else{const X=y.textures;for(let Z=0;Z<X.length;Z++){const ge=X[Z],ce=s.convert(ge.format,ge.colorSpace),ee=s.convert(ge.type),ie=b(ge.internalFormat,ce,ee,ge.normalized,ge.colorSpace);je(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re(y),ie,y.width,y.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re(y),ie,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ie,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(D,y,V){const X=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(y.depthTexture);if(Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,y.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,y.depthTexture);const Se=s.convert(y.depthTexture.format),Ne=s.convert(y.depthTexture.type);let ye;y.depthTexture.format===Lr?ye=r.DEPTH_COMPONENT24:y.depthTexture.format===Ms&&(ye=r.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ye,y.width,y.height,0,Se,Ne,null)}}else $(y.depthTexture,0);const ge=Z.__webglTexture,ce=Re(y),ee=X?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,ie=y.depthTexture.format===Ms?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Lr)je(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ee,ge,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,ie,ee,ge,0);else if(y.depthTexture.format===Ms)je(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ee,ge,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,ie,ee,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(D){const y=n.get(D),V=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const X=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=X}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let X=0;X<6;X++)Fe(y.__webglFramebuffer[X],D,X);else{const X=D.texture.mipmaps;X&&X.length>0?Fe(y.__webglFramebuffer[0],D,0):Fe(y.__webglFramebuffer,D,0)}else if(V){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=r.createRenderbuffer(),De(y.__webglDepthbuffer[X],D,!1);else{const Z=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=y.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ge)}}else{const X=D.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),De(y.__webglDepthbuffer,D,!1);else{const Z=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ge)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(D,y,V){const X=n.get(D);y!==void 0&&xe(X.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Q(D)}function oe(D){const y=D.texture,V=n.get(D),X=n.get(y);D.addEventListener("dispose",v);const Z=D.textures,ge=D.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=y.version,a.memory.textures++),ge){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let ie=0;ie<y.mipmaps.length;ie++)V.__webglFramebuffer[ee][ie]=r.createFramebuffer()}else V.__webglFramebuffer[ee]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)V.__webglFramebuffer[ee]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ce)for(let ee=0,ie=Z.length;ee<ie;ee++){const Se=n.get(Z[ee]);Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture(),a.memory.textures++)}if(D.samples>0&&je(D)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<Z.length;ee++){const ie=Z[ee];V.__webglColorRenderbuffer[ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);const Se=s.convert(ie.format,ie.colorSpace),Ne=s.convert(ie.type),ye=b(ie.internalFormat,Se,Ne,ie.normalized,ie.colorSpace,D.isXRRenderTarget===!0),ve=Re(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,ye,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),De(V.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ge){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)xe(V.__webglFramebuffer[ee][ie],D,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else xe(V.__webglFramebuffer[ee],D,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(y)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let ee=0,ie=Z.length;ee<ie;ee++){const Se=Z[ee],Ne=n.get(Se);let ye=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,Ne.__webglTexture),Xe(ye,Se),xe(V.__webglFramebuffer,D,Se,r.COLOR_ATTACHMENT0+ee,ye,0),m(Se)&&S(ye)}t.unbindTexture()}else{let ee=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ee=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,X.__webglTexture),Xe(ee,y),y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)xe(V.__webglFramebuffer[ie],D,y,r.COLOR_ATTACHMENT0,ee,ie);else xe(V.__webglFramebuffer,D,y,r.COLOR_ATTACHMENT0,ee,0);m(y)&&S(ee),t.unbindTexture()}D.depthBuffer&&Q(D)}function O(D){const y=D.textures;for(let V=0,X=y.length;V<X;V++){const Z=y[V];if(m(Z)){const ge=M(D),ce=n.get(Z).__webglTexture;t.bindTexture(ge,ce),S(ge),t.unbindTexture()}}}const pe=[],Ge=[];function Ue(D){if(D.samples>0){if(je(D)===!1){const y=D.textures,V=D.width,X=D.height;let Z=r.COLOR_BUFFER_BIT;const ge=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=n.get(D),ee=y.length>1;if(ee)for(let Se=0;Se<y.length;Se++)t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ie=D.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Se=0;Se<y.length;Se++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]);const Ne=n.get(y[Se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ne,0)}r.blitFramebuffer(0,0,V,X,0,0,V,X,Z,r.NEAREST),l===!0&&(pe.length=0,Ge.length=0,pe.push(r.COLOR_ATTACHMENT0+Se),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(pe.push(ge),Ge.push(ge),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ge)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ee)for(let Se=0;Se<y.length;Se++){t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]);const Ne=n.get(y[Se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,Ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){const y=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Re(D){return Math.min(i.maxSamples,D.samples)}function je(D){const y=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function k(D){const y=a.render.frame;h.get(D)!==y&&(h.set(D,y),D.update())}function ct(D,y){const V=D.colorSpace,X=D.format,Z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==ii&&V!==qr&&(dt.getTransfer(V)===xt?(X!==Di||Z!==di)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",V)),y}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.getTextureUnits=N,this.setTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=C,this.setTextureCube=j,this.rebindTextures=re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _A(r,e){function t(n,i=qr){let s;const a=dt.getTransfer(i);if(n===di)return r.UNSIGNED_BYTE;if(n===kd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Bd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===A0)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===R0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===w0)return r.BYTE;if(n===E0)return r.SHORT;if(n===pl)return r.UNSIGNED_SHORT;if(n===Od)return r.INT;if(n===cr)return r.UNSIGNED_INT;if(n===jn)return r.FLOAT;if(n===xn)return r.HALF_FLOAT;if(n===C0)return r.ALPHA;if(n===P0)return r.RGB;if(n===Di)return r.RGBA;if(n===Lr)return r.DEPTH_COMPONENT;if(n===Ms)return r.DEPTH_STENCIL;if(n===zd)return r.RED;if(n===Gd)return r.RED_INTEGER;if(n===ks)return r.RG;if(n===Hd)return r.RG_INTEGER;if(n===Vd)return r.RGBA_INTEGER;if(n===zc||n===Gc||n===Hc||n===Vc)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pf||n===mf||n===gf||n===_f)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_f)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bf||n===vf||n===xf||n===Sf||n===yf||n===ah||n===Mf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===bf||n===vf)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sf)return s.COMPRESSED_R11_EAC;if(n===yf)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ah)return s.COMPRESSED_RG11_EAC;if(n===Mf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tf||n===wf||n===Ef||n===Af||n===Rf||n===Cf||n===Pf||n===Lf||n===Df||n===Nf||n===If||n===Ff||n===Uf||n===Of)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Tf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ef)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Af)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Df)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===If)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ff)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uf)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Of)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kf||n===Bf||n===zf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===kf)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gf||n===Hf||n===oh||n===Vf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Gf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ml?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const bA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vA=`
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

}`;class xA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new q0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kt({vertexShader:bA,fragmentShader:vA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SA extends Hs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",g=new xA,m={},S=t.getContextAttributes();let M=null,b=null;const x=[],w=[],E=new he;let v=null,T=null;const R=new qn;R.viewport=new Et;const L=new qn;L.viewport=new Et;const P=[R,L],I=new bM;let N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=x[J];return te===void 0&&(te=new $h,x[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=x[J];return te===void 0&&(te=new $h,x[J]=te),te.getGripSpace()},this.getHand=function(J){let te=x[J];return te===void 0&&(te=new $h,x[J]=te),te.getHandSpace()};function z(J){const te=w.indexOf(J.inputSource);if(te===-1)return;const _e=x[te];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||a),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",$);for(let J=0;J<x.length;J++){const te=w[J];te!==null&&(w[J]=null,x[J].disconnect(te))}N=null,F=null,g.reset();for(const J in m)delete m[J];if(e.setRenderTarget(M),d=null,u=null,f=null,i=null,b=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(E.width,E.height,!1),T!==null){const J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",B),i.addEventListener("inputsourceschange",$),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,qe=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=S.stencil?Ms:Lr,qe=S.stencil?ml:cr);const De={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(De),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Fn(u.textureWidth,u.textureHeight,{format:Di,type:di,depthTexture:new yl(u.textureWidth,u.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Fn(d.framebufferWidth,d.framebufferHeight,{format:Di,type:di,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(J){for(let te=0;te<J.removed.length;te++){const _e=J.removed[te],qe=w.indexOf(_e);qe>=0&&(w[qe]=null,x[qe].disconnect(_e))}for(let te=0;te<J.added.length;te++){const _e=J.added[te];let qe=w.indexOf(_e);if(qe===-1){for(let De=0;De<x.length;De++)if(De>=w.length){w.push(_e),qe=De;break}else if(w[De]===null){w[De]=_e,qe=De;break}if(qe===-1)break}const xe=x[qe];xe&&xe.connect(_e)}}const W=new U,C=new U;function j(J,te,_e){W.setFromMatrixPosition(te.matrixWorld),C.setFromMatrixPosition(_e.matrixWorld);const qe=W.distanceTo(C),xe=te.projectionMatrix.elements,De=_e.projectionMatrix.elements,Fe=xe[14]/(xe[10]-1),Q=xe[14]/(xe[10]+1),re=(xe[9]+1)/xe[5],oe=(xe[9]-1)/xe[5],O=(xe[8]-1)/xe[0],pe=(De[8]+1)/De[0],Ge=Fe*O,Ue=Fe*pe,Re=qe/(-O+pe),je=Re*-O;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(je),J.translateZ(Re),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),xe[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const k=Fe+Re,ct=Q+Re,Ye=Ge-je,D=Ue+(qe-je),y=re*Q/ct*k,V=oe*Q/ct*k;J.projectionMatrix.makePerspective(Ye,D,y,V,k,ct),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function fe(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let te=J.near,_e=J.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),I.near=L.near=R.near=te,I.far=L.far=R.far=_e,(N!==I.near||F!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,F=I.far),I.layers.mask=J.layers.mask|6,R.layers.mask=I.layers.mask&-5,L.layers.mask=I.layers.mask&-3;const qe=J.parent,xe=I.cameras;fe(I,qe);for(let De=0;De<xe.length;De++)fe(xe[De],qe);xe.length===2?j(I,R,L):I.projectionMatrix.copy(R.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),me(J,I,qe)};function me(J,te,_e){_e===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Va*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(J){return m[J]};let Ie=null;function Xe(J,te){if(h=te.getViewerPose(c||a),p=te,h!==null){const _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let qe=!1;_e.length!==I.cameras.length&&(I.cameras.length=0,qe=!0);for(let Q=0;Q<_e.length;Q++){const re=_e[Q];let oe=null;if(d!==null)oe=d.getViewport(re);else{const pe=f.getViewSubImage(u,re);oe=pe.viewport,Q===0&&(e.setRenderTargetTextures(b,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(b))}let O=P[Q];O===void 0&&(O=new qn,O.layers.enable(Q),O.viewport=new Et,P[Q]=O),O.matrix.fromArray(re.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(re.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(oe.x,oe.y,oe.width,oe.height),Q===0&&(I.matrix.copy(O.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),qe===!0&&I.cameras.push(O)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Q=f.getDepthInformation(_e[0]);Q&&Q.isValid&&Q.texture&&g.init(Q,i.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Q=0;Q<_e.length;Q++){const re=_e[Q].camera;if(re){let oe=m[re];oe||(oe=new q0,m[re]=oe);const O=f.getCameraImage(re);oe.sourceTexture=O}}}}for(let _e=0;_e<x.length;_e++){const qe=w[_e],xe=x[_e];qe!==null&&xe!==void 0&&xe.update(qe,te,c||a)}Ie&&Ie(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}const Ze=new cb;Ze.setAnimationLoop(Xe),this.setAnimationLoop=function(J){Ie=J},this.dispose=function(){}}}const yA=new it,gb=new tt;gb.set(-1,0,0,0,1,0,0,0,1);function MA(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,nb(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,S,M,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,b)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ti&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ti&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=e.get(m),M=S.envMap,b=S.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(yA.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(gb),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ti&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function TA(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const w=x.program;n.uniformBlockBinding(b,w)}function c(b,x){let w=i[b.id];w===void 0&&(g(b),w=h(b),i[b.id]=w,b.addEventListener("dispose",S));const E=x.program;n.updateUBOMapping(b,E);const v=e.render.frame;s[b.id]!==v&&(u(b),s[b.id]=v)}function h(b){const x=f();b.__bindingPointIndex=x;const w=r.createBuffer(),E=b.__size,v=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,E,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,w),w}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const x=i[b.id],w=b.uniforms,E=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let v=0,T=w.length;v<T;v++){const R=w[v];if(Array.isArray(R))for(let L=0,P=R.length;L<P;L++)d(R[L],v,L,E);else d(R,v,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(b,x,w,E){if(_(b,x,w,E)===!0){const v=b.__offset,T=b.value;if(Array.isArray(T)){let R=0;for(let L=0;L<T.length;L++){const P=T[L],I=m(P);p(P,b.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,b.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,b.__data)}}function p(b,x,w){typeof b=="number"||typeof b=="boolean"?x[0]=b:b.isMatrix3?(x[0]=b.elements[0],x[1]=b.elements[1],x[2]=b.elements[2],x[3]=0,x[4]=b.elements[3],x[5]=b.elements[4],x[6]=b.elements[5],x[7]=0,x[8]=b.elements[6],x[9]=b.elements[7],x[10]=b.elements[8],x[11]=0):ArrayBuffer.isView(b)?x.set(new b.constructor(b.buffer,b.byteOffset,x.length)):b.toArray(x,w)}function _(b,x,w,E){const v=b.value,T=x+"_"+w;if(E[T]===void 0)return typeof v=="number"||typeof v=="boolean"?E[T]=v:ArrayBuffer.isView(v)?E[T]=v.slice():E[T]=v.clone(),!0;{const R=E[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return E[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(b){const x=b.uniforms;let w=0;const E=16;for(let T=0,R=x.length;T<R;T++){const L=Array.isArray(x[T])?x[T]:[x[T]];for(let P=0,I=L.length;P<I;P++){const N=L[P],F=Array.isArray(N.value)?N.value:[N.value];for(let z=0,B=F.length;z<B;z++){const $=F[z],W=m($),C=w%E,j=C%W.boundary,fe=C+j;w+=j,fe!==0&&E-fe<W.storage&&(w+=E-fe),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=W.storage}}}const v=w%E;return v>0&&(w+=E-v),b.__size=w,b.__cache={},this}function m(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(x.boundary=16,x.storage=b.byteLength):We("WebGLRenderer: Unsupported uniform value type.",b),x}function S(b){const x=b.target;x.removeEventListener("dispose",S);const w=a.indexOf(x.__bindingPointIndex);a.splice(w,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function M(){for(const b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:l,update:c,dispose:M}}const wA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function EA(){return Yi===null&&(Yi=new Sl(wA,16,16,ks,xn),Yi.name="DFG_LUT",Yi.minFilter=zt,Yi.magFilter=zt,Yi.wrapS=Li,Yi.wrapT=Li,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class AA{constructor(e={}){const{canvas:t=uS(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=di}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=d,g=new Set([Vd,Hd,Gd]),m=new Set([di,cr,pl,ml,kd,Bd]),S=new Uint32Array(4),M=new Int32Array(4),b=new U;let x=null,w=null;const E=[],v=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,P=null,I=null,N=null,F=null;this._outputColorSpace=vn;let z=0,B=0,$=null,W=-1,C=null;const j=new Et,fe=new Et;let me=null;const Ie=new ke(0);let Xe=0,Ze=t.width,J=t.height,te=1,_e=null,qe=null;const xe=new Et(0,0,Ze,J),De=new Et(0,0,Ze,J);let Fe=!1;const Q=new jd;let re=!1,oe=!1;const O=new it,pe=new U,Ge=new Et,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function je(){return $===null?te:1}let k=n;function ct(A,H){return t.getContext(A,H)}let Ye,D,y,V,X,Z,ge,ce,ee,ie,Se,Ne,ye,ve,de,He,$e,G,be,ne,Me,we,se;try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pd}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",Je,!1),k===null){const H="webgl2";if(k=ct(H,A),k===null)throw ct(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ue()}catch(A){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),Qe("WebGLRenderer: "+A.message),A}function ue(){Ye=new EE(k),Ye.init(),Me=new _A(k,Ye),D=new gE(k,Ye,e,Me),y=new mA(k,Ye),D.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),I=k.createFramebuffer(),N=k.createFramebuffer(),F=k.createFramebuffer(),V=new CE(k),X=new tA,Z=new gA(k,Ye,y,X,D,Me,V),ge=new wE(R),ce=new LM(k),we=new pE(k,ce),ee=new AE(k,ce,V,we),ie=new LE(k,ee,ce,we,V),G=new PE(k,D,Z),de=new _E(X),Se=new eA(R,ge,Ye,D,we,de),Ne=new MA(R,X),ye=new iA,ve=new cA(Ye),$e=new dE(R,ge,y,ie,p,l),He=new pA(R,ie,D),se=new TA(k,V,D,y),be=new mE(k,Ye,V),ne=new RE(k,Ye,V),V.programs=Se.programs,R.capabilities=D,R.extensions=Ye,R.properties=X,R.renderLists=ye,R.shadowMap=He,R.state=y,R.info=V}_!==di&&(T=new NE(_,t.width,t.height,o,i,s));const ae=new SA(R,k);this.xr=ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(Ze,J,!1))},this.getSize=function(A){return A.set(Ze,J)},this.setSize=function(A,H,Y=!0){if(ae.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=A,J=H,t.width=Math.floor(A*te),t.height=Math.floor(H*te),Y===!0&&(t.style.width=A+"px",t.style.height=H+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Ze*te,J*te).floor()},this.setDrawingBufferSize=function(A,H,Y){Ze=A,J=H,te=Y,t.width=Math.floor(A*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(_===di){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(xe)},this.setViewport=function(A,H,Y,q){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,H,Y,q),y.viewport(j.copy(xe).multiplyScalar(te).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,H,Y,q){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,H,Y,q),y.scissor(fe.copy(De).multiplyScalar(te).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){y.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){_e=A},this.setTransparentSort=function(A){qe=A},this.getClearColor=function(A){return A.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,Y=!0){let q=0;if(A){let K=!1;if($!==null){const Te=$.texture.format;K=g.has(Te)}if(K){const Te=$.texture.type,Pe=m.has(Te),Ae=$e.getClearColor(),Be=$e.getClearAlpha(),Ve=Ae.r,rt=Ae.g,mt=Ae.b;Pe?(S[0]=Ve,S[1]=rt,S[2]=mt,S[3]=Be,k.clearBufferuiv(k.COLOR,0,S)):(M[0]=Ve,M[1]=rt,M[2]=mt,M[3]=Be,k.clearBufferiv(k.COLOR,0,M))}else q|=k.COLOR_BUFFER_BIT}H&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),$e.dispose(),ye.dispose(),ve.dispose(),X.dispose(),ge.dispose(),ie.dispose(),we.dispose(),se.dispose(),Se.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ut),ae.removeEventListener("sessionend",At),gt.stop()};function Ke(A){A.preventDefault(),ch("WebGLRenderer: Context Lost."),L=!0}function le(){ch("WebGLRenderer: Context Restored."),L=!1;const A=V.autoReset,H=He.enabled,Y=He.autoUpdate,q=He.needsUpdate,K=He.type;ue(),V.autoReset=A,He.enabled=H,He.autoUpdate=Y,He.needsUpdate=q,He.type=K}function Je(A){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Oe(A){const H=A.target;H.removeEventListener("dispose",Oe),et(H)}function et(A){Qt(A),X.remove(A)}function Qt(A){const H=X.get(A).programs;H!==void 0&&(H.forEach(function(Y){Se.releaseProgram(Y)}),A.isShaderMaterial&&Se.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Y,q,K,Te){H===null&&(H=Ue);const Pe=K.isMesh&&K.matrixWorld.determinantAffine()<0,Ae=mn(A,H,Y,q,K);y.setMaterial(q,Pe);let Be=Y.index,Ve=1;if(q.wireframe===!0){if(Be=ee.getWireframeAttribute(Y),Be===void 0)return;Ve=2}const rt=Y.drawRange,mt=Y.attributes.position;let ze=rt.start*Ve,vt=(rt.start+rt.count)*Ve;Te!==null&&(ze=Math.max(ze,Te.start*Ve),vt=Math.min(vt,(Te.start+Te.count)*Ve)),Be!==null?(ze=Math.max(ze,0),vt=Math.min(vt,Be.count)):mt!=null&&(ze=Math.max(ze,0),vt=Math.min(vt,mt.count));const tn=vt-ze;if(tn<0||tn===1/0)return;we.setup(K,q,Ae,Y,Be);let Ot,Rt=be;if(Be!==null&&(Ot=ce.get(Be),Rt=ne,Rt.setIndex(Ot)),K.isMesh)q.wireframe===!0?(y.setLineWidth(q.wireframeLinewidth*je()),Rt.setMode(k.LINES)):Rt.setMode(k.TRIANGLES);else if(K.isLine){let An=q.linewidth;An===void 0&&(An=1),y.setLineWidth(An*je()),K.isLineSegments?Rt.setMode(k.LINES):K.isLineLoop?Rt.setMode(k.LINE_LOOP):Rt.setMode(k.LINE_STRIP)}else K.isPoints?Rt.setMode(k.POINTS):K.isSprite&&Rt.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))Rt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const An=K._multiDrawStarts,Ce=K._multiDrawCounts,kn=K._multiDrawCount,bt=Be?ce.get(Be).bytesPerElement:1,Si=X.get(q).currentProgram.getUniforms();for(let qi=0;qi<kn;qi++)Si.setValue(k,"_gl_DrawID",qi),Rt.render(An[qi]/bt,Ce[qi])}else if(K.isInstancedMesh)Rt.renderInstances(ze,tn,K.count);else if(Y.isInstancedBufferGeometry){const An=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,An);Rt.renderInstances(ze,tn,Ce)}else Rt.render(ze,tn)};function ht(A,H,Y,q){P!==null&&A.isNodeMaterial&&P.setObject(q,A),re===!0&&de.setState(A,Y,!1),A.transparent===!0&&A.side===zi&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Xt(A,H,q),A.side=as,A.needsUpdate=!0,Xt(A,H,q),A.side=zi):Xt(A,H,q)}this.compile=function(A,H,Y=null){Y===null&&(Y=A),P!==null&&P.renderStart(A,H,Y),w=ve.get(Y),w.init(H),v.push(w),Y.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),A!==Y&&A.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights(),P!==null&&P.updateLights(w.state.lightsArray),oe=this.localClippingEnabled,re=de.init(this.clippingPlanes,oe),re===!0&&de.setGlobalState(this.clippingPlanes,H),P!==null&&He.render(w.state.shadowsArray,Y,H);const q=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Te=K.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){const Ae=Te[Pe];ht(Ae,Y,H,K),q.add(Ae)}else ht(Te,Y,H,K),q.add(Te)}),w=v.pop(),P!==null&&P.renderEnd(),q},this.compileAsync=function(A,H,Y=null){const q=this.compile(A,H,Y);return new Promise(K=>{function Te(){if(q.forEach(function(Pe){const Be=X.get(Pe).currentProgram;(Be===void 0||Be.isReady())&&q.delete(Pe)}),q.size===0){K(A);return}setTimeout(Te,10)}Ye.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Ft=null;function pn(A){Ft&&Ft(A)}function Ut(){gt.stop()}function At(){gt.start()}const gt=new cb;gt.setAnimationLoop(pn),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(A){Ft=A,ae.setAnimationLoop(A),A===null?gt.stop():gt.start()},ae.addEventListener("sessionstart",Ut),ae.addEventListener("sessionend",At),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;P!==null&&P.renderStart(A,H);const Y=ae.enabled===!0&&ae.isPresenting===!0,q=T!==null&&($===null||Y)&&T.begin(R,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(H),H=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,H,$),w=ve.get(A,v.length),w.init(H),w.state.textureUnits=Z.getTextureUnits(),v.push(w),O.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(O,ir,H.reversedDepth),oe=this.localClippingEnabled,re=de.init(this.clippingPlanes,oe),x=ye.get(A,E.length),x.init(),E.push(x),ae.enabled===!0&&ae.isPresenting===!0){const Pe=R.xr.getDepthSensingMesh();Pe!==null&&Un(Pe,H,-1/0,R.sortObjects)}Un(A,H,0,R.sortObjects),x.finish(),P!==null&&P.updateLights(w.state.lightsArray),R.sortObjects===!0&&x.sort(_e,qe),Re=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Re&&$e.addToRenderList(x,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&de.beginShadows();const K=w.state.shadowsArray;if(He.render(K,A,H),re===!0&&de.endShadows(),(q&&T.hasRenderPass())===!1){const Pe=x.opaque,Ae=x.transmissive;if(w.setupLights(),H.isArrayCamera){const Be=H.cameras;if(Ae.length>0)for(let Ve=0,rt=Be.length;Ve<rt;Ve++){const mt=Be[Ve];En(Pe,Ae,A,mt)}Re&&$e.render(A);for(let Ve=0,rt=Be.length;Ve<rt;Ve++){const mt=Be[Ve];Lt(x,A,mt,mt.viewport)}}else Ae.length>0&&En(Pe,Ae,A,H),Re&&$e.render(A),Lt(x,A,H)}$!==null&&B===0&&(Z.updateMultisampleRenderTarget($),Z.updateRenderTargetMipmap($)),q&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,H),we.resetDefaultState(),W=-1,C=null,v.pop(),v.length>0?(w=v[v.length-1],Z.setTextureUnits(w.state.textureUnits),re===!0&&de.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?x=E[E.length-1]:x=null,P!==null&&P.renderEnd()};function Un(A,H,Y,q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Q)){q&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(O);const Pe=ie.update(A),Ae=A.material;Ae.visible&&x.push(A,Pe,Ae,Y,Ge.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Q))){const Pe=ie.update(A),Ae=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ge.copy(Pe.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(O)),Array.isArray(Ae)){const Be=Pe.groups;for(let Ve=0,rt=Be.length;Ve<rt;Ve++){const mt=Be[Ve],ze=Ae[mt.materialIndex];ze&&ze.visible&&x.push(A,Pe,ze,Y,Ge.z,mt,H)}}else Ae.visible&&x.push(A,Pe,Ae,Y,Ge.z,null,H)}}const Te=A.children;for(let Pe=0,Ae=Te.length;Pe<Ae;Pe++)Un(Te[Pe],H,Y,q)}function Lt(A,H,Y,q){const{opaque:K,transmissive:Te,transparent:Pe}=A;w.setupLightsView(Y),re===!0&&de.setGlobalState(R.clippingPlanes,Y),q&&y.viewport(j.copy(q)),K.length>0&&On(K,H,Y),Te.length>0&&On(Te,H,Y),Pe.length>0&&On(Pe,H,Y),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function En(A,H,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[q.id]===void 0){const ze=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[q.id]=new Fn(1,1,{generateMipmaps:!0,type:ze?xn:di,minFilter:nr,samples:Math.max(4,D.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const Te=w.state.transmissionRenderTarget[q.id],Pe=q.viewport||j;Te.setSize(Pe.z*R.transmissionResolutionScale,Pe.w*R.transmissionResolutionScale);const Ae=R.getRenderTarget(),Be=R.getActiveCubeFace(),Ve=R.getActiveMipmapLevel();R.setRenderTarget(Te),R.getClearColor(Ie),Xe=R.getClearAlpha(),Xe<1&&R.setClearColor(16777215,.5),R.clear(),Re&&$e.render(Y);const rt=R.toneMapping;R.toneMapping=or;const mt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),w.setupLightsView(q),re===!0&&de.setGlobalState(R.clippingPlanes,q),On(A,Y,q),Z.updateMultisampleRenderTarget(Te),Z.updateRenderTargetMipmap(Te),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let vt=0,tn=H.length;vt<tn;vt++){const Ot=H[vt],{object:Rt,geometry:An,material:Ce,group:kn}=Ot;if(Ce.side===zi&&Rt.layers.test(q.layers)){const bt=Ce.side;Ce.side=ti,Ce.needsUpdate=!0,en(Rt,Y,q,An,Ce,kn),Ce.side=bt,Ce.needsUpdate=!0,ze=!0}}ze===!0&&(Z.updateMultisampleRenderTarget(Te),Z.updateRenderTargetMipmap(Te))}R.setRenderTarget(Ae,Be,Ve),R.setClearColor(Ie,Xe),mt!==void 0&&(q.viewport=mt),R.toneMapping=rt}function On(A,H,Y){const q=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Te=A.length;K<Te;K++){const Pe=A[K],{object:Ae,geometry:Be,group:Ve}=Pe;let rt=Pe.material;rt.allowOverride===!0&&q!==null&&(rt=q),Ae.layers.test(Y.layers)&&en(Ae,H,Y,Be,rt,Ve)}}function en(A,H,Y,q,K,Te){P!==null&&K.isNodeMaterial&&P.setObject(A,K),A.onBeforeRender(R,H,Y,q,K,Te),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(R,H,Y,q,A,Te),K.transparent===!0&&K.side===zi&&K.forceSinglePass===!1?(K.side=ti,K.needsUpdate=!0,R.renderBufferDirect(Y,H,q,K,A,Te),K.side=as,K.needsUpdate=!0,R.renderBufferDirect(Y,H,q,K,A,Te),K.side=zi):R.renderBufferDirect(Y,H,q,K,A,Te),A.onAfterRender(R,H,Y,q,K,Te)}function Xt(A,H,Y){H.isScene!==!0&&(H=Ue);const q=X.get(A),K=w.state.lights,Te=w.state.shadowsArray,Pe=K.state.version,Ae=Se.getParameters(A,K.state,Te,H,Y,w.state.lightProbeGridArray),Be=Se.getProgramCacheKey(Ae);let Ve=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;const rt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=ge.get(A.envMap||q.environment,rt),q.envMapRotation=q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",Oe),Ve=new Map,q.programs=Ve);let mt=Ve.get(Be);if(mt!==void 0){if(q.currentProgram===mt&&q.lightsStateVersion===Pe)return Xi(A,Ae),mt}else Ae.uniforms=Se.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,Y,Ae),A.onBeforeCompile(Ae,R),mt=Se.acquireProgram(Ae,Be),Ve.set(Be,mt),q.uniforms=Ae.uniforms;const ze=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=de.uniform),Xi(A,Ae),q.needsLights=xi(A),q.lightsStateVersion=Pe,q.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.sunLights.value=K.state.sun,ze.sunLightShadows.value=K.state.sunShadow,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.sunShadowMatrix.value=K.state.sunShadowMatrix,ze.sunShadowCascade.value=K.state.sunShadowCascade,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotLightMatrix.value=K.state.spotLightMatrix,ze.spotLightMap.value=K.state.spotLightMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix),q.lightProbeGrid=w.state.lightProbeGridArray.length>0,q.currentProgram=mt,q.uniformsList=null,mt}function an(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Xc.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Xi(A,H){const Y=X.get(A);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function Ws(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(H.matrixWorld);for(let Y=0,q=A.length;Y<q;Y++){const K=A[Y];if(K.texture!==null&&K.boundingBox.containsPoint(b))return K}return null}function mn(A,H,Y,q,K){H.isScene!==!0&&(H=Ue),Z.resetTextureUnits();const Te=H.fog,Pe=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,Ae=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:dt.workingColorSpace,Be=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ve=ge.get(q.envMap||Pe,Be),rt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,mt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,tn=!!Y.morphAttributes.color;let Ot=or;q.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ot=R.toneMapping);const Rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,An=Rt!==void 0?Rt.length:0,Ce=X.get(q),kn=w.state.lights;if(re===!0&&(oe===!0||A!==C)){const Dt=A===C&&q.id===W;de.setState(q,A,Dt)}let bt=!1;q.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==kn.state.version||Ce.outputColorSpace!==Ae||K.isBatchedMesh&&Ce.batching===!1||!K.isBatchedMesh&&Ce.batching===!0||K.isBatchedMesh&&Ce.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ce.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ce.instancing===!1||!K.isInstancedMesh&&Ce.instancing===!0||K.isSkinnedMesh&&Ce.skinning===!1||!K.isSkinnedMesh&&Ce.skinning===!0||K.isInstancedMesh&&Ce.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ce.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ce.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ce.instancingMorph===!1&&K.morphTexture!==null||Ce.envMap!==Ve||q.fog===!0&&Ce.fog!==Te||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==de.numPlanes||Ce.numIntersection!==de.numIntersection)||Ce.vertexAlphas!==rt||Ce.vertexTangents!==mt||Ce.morphTargets!==ze||Ce.morphNormals!==vt||Ce.morphColors!==tn||Ce.toneMapping!==Ot||Ce.morphTargetsCount!==An||!!Ce.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,Ce.__version=q.version);let Si=Ce.currentProgram;bt===!0&&(Si=Xt(q,H,K),P&&q.isNodeMaterial&&P.onUpdateProgram(q,Si,Ce));let qi=!1,Nr=!1,qs=!1;const wt=Si.getUniforms(),Jt=Ce.uniforms;if(y.useProgram(Si.program)&&(qi=!0,Nr=!0,qs=!0),q.id!==W&&(W=q.id,Nr=!0),Ce.needsLights){const Dt=Ws(w.state.lightProbeGridArray,K);Ce.lightProbeGrid!==Dt&&(Ce.lightProbeGrid=Dt,Nr=!0)}if(qi||C!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),wt.setValue(k,"projectionMatrix",A.projectionMatrix),wt.setValue(k,"viewMatrix",A.matrixWorldInverse);const Fr=wt.map.cameraPosition;Fr!==void 0&&Fr.setValue(k,pe.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&wt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&wt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Nr=!0,qs=!0)}if(Ce.needsLights&&(kn.state.sunShadowMap.length>0&&wt.setValue(k,"sunShadowMap",kn.state.sunShadowMap,Z),kn.state.directionalShadowMap.length>0&&wt.setValue(k,"directionalShadowMap",kn.state.directionalShadowMap,Z),kn.state.spotShadowMap.length>0&&wt.setValue(k,"spotShadowMap",kn.state.spotShadowMap,Z),kn.state.pointShadowMap.length>0&&wt.setValue(k,"pointShadowMap",kn.state.pointShadowMap,Z)),K.isSkinnedMesh){wt.setOptional(k,K,"bindMatrix"),wt.setOptional(k,K,"bindMatrixInverse");const Dt=K.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),wt.setValue(k,"boneTexture",Dt.boneTexture,Z))}K.isBatchedMesh&&(wt.setOptional(k,K,"batchingTexture"),wt.setValue(k,"batchingTexture",K._matricesTexture,Z),wt.setOptional(k,K,"batchingIdTexture"),wt.setValue(k,"batchingIdTexture",K._indirectTexture,Z),wt.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&wt.setValue(k,"batchingColorTexture",K._colorsTexture,Z));const Ir=Y.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0)&&G.update(K,Y,Si),(Nr||Ce.receiveShadow!==K.receiveShadow)&&(Ce.receiveShadow=K.receiveShadow,wt.setValue(k,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(Jt.envMapIntensity.value=H.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=EA()),Nr){if(wt.setValue(k,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&Yt(Jt,qs),Te&&q.fog===!0&&Ne.refreshFogUniforms(Jt,Te),Ne.refreshMaterialUniforms(Jt,q,te,J,w.state.transmissionRenderTarget[A.id]),Ce.needsLights&&Ce.lightProbeGrid){const Dt=Ce.lightProbeGrid;Jt.probesSH.value=Dt.texture,Jt.probesMin.value.copy(Dt.boundingBox.min),Jt.probesMax.value.copy(Dt.boundingBox.max),Jt.probesResolution.value.copy(Dt.resolution)}Xc.upload(k,an(Ce),Jt,Z)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Xc.upload(k,an(Ce),Jt,Z),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&wt.setValue(k,"center",K.center),wt.setValue(k,"modelViewMatrix",K.modelViewMatrix),wt.setValue(k,"normalMatrix",K.normalMatrix),wt.setValue(k,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){const Dt=q.uniformsGroups;for(let Fr=0,Ks=Dt.length;Fr<Ks;Fr++){const fp=Dt[Fr];se.update(fp,Si),se.bind(fp,Si)}}return Si}function Yt(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function xi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,H,Y){const q=X.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),X.get(A.texture).__webglTexture=H,X.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const Y=X.get(A);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,Y=0){$=A,z=H,B=Y;let q=null,K=!1,Te=!1;if(A){const Ae=X.get(A);if(Ae.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(k.FRAMEBUFFER,Ae.__webglFramebuffer),j.copy(A.viewport),fe.copy(A.scissor),me=A.scissorTest,y.viewport(j),y.scissor(fe),y.setScissorTest(me),W=-1;return}else if(Ae.__webglFramebuffer===void 0)Z.setupRenderTarget(A);else if(Ae.__hasExternalTextures)Z.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const rt=A.depthTexture;if(Ae.__boundDepthTexture!==rt){if(rt!==null&&X.has(rt)&&(A.width!==rt.image.width||A.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const Ve=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?q=Ve[H][Y]:q=Ve[H],K=!0):A.samples>0&&Z.useMultisampledRTT(A)===!1?q=X.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?q=Ve[Y]:q=Ve,j.copy(A.viewport),fe.copy(A.scissor),me=A.scissorTest}else j.copy(xe).multiplyScalar(te).floor(),fe.copy(De).multiplyScalar(te).floor(),me=Fe;if(Y!==0&&(q=I),y.bindFramebuffer(k.FRAMEBUFFER,q)&&y.drawBuffers(A,q),y.viewport(j),y.scissor(fe),y.setScissorTest(me),K){const Ae=X.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ae.__webglTexture,Y)}else if(Te){const Ae=H;for(let Be=0;Be<A.textures.length;Be++){const Ve=X.get(A.textures[Be]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Be,Ve.__webglTexture,Y,Ae)}}else if(A!==null&&Y!==0){const Ae=X.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ae.__webglTexture,Y)}W=-1};function Xs(A){const H=X.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=D.textureFormatReadable(A.format),H.__typeReadable=D.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,Y,q,K,Te,Pe,Ae=0){if(!(A&&A.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Be=Be[Pe]),Be){y.bindFramebuffer(k.FRAMEBUFFER,Be);try{const Ve=A.textures[Ae],rt=Ve.format,mt=Ve.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ae);const ze=Xs(Ve);if(ze.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-q&&Y>=0&&Y<=A.height-K&&k.readPixels(H,Y,q,K,Me.convert(rt),Me.convert(mt),Te)}finally{const Ve=$!==null?X.get($).__webglFramebuffer:null;y.bindFramebuffer(k.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,H,Y,q,K,Te,Pe,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Be=Be[Pe]),Be)if(H>=0&&H<=A.width-q&&Y>=0&&Y<=A.height-K){y.bindFramebuffer(k.FRAMEBUFFER,Be);const Ve=A.textures[Ae],rt=Ve.format,mt=Ve.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ae);const ze=Xs(Ve);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,vt),k.bufferData(k.PIXEL_PACK_BUFFER,Te.byteLength,k.STREAM_READ),k.readPixels(H,Y,q,K,Me.convert(rt),Me.convert(mt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const tn=$!==null?X.get($).__webglFramebuffer:null;y.bindFramebuffer(k.FRAMEBUFFER,tn);const Ot=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await fS(k,Ot,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,vt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Te),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(vt),k.deleteSync(Ot),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,Y=0){const q=Math.pow(2,-Y),K=Math.floor(A.image.width*q),Te=Math.floor(A.image.height*q),Pe=H!==null?H.x:0,Ae=H!==null?H.y:0;Z.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,Y,0,0,Pe,Ae,K,Te),y.unbindTexture()},this.copyTextureToTexture=function(A,H,Y=null,q=null,K=0,Te=0){let Pe,Ae,Be,Ve,rt,mt,ze,vt,tn;const Ot=A.isCompressedTexture?A.mipmaps[Te]:A.image;if(Y!==null)Pe=Y.max.x-Y.min.x,Ae=Y.max.y-Y.min.y,Be=Y.isBox3?Y.max.z-Y.min.z:1,Ve=Y.min.x,rt=Y.min.y,mt=Y.isBox3?Y.min.z:0;else{const Jt=Math.pow(2,-K);Pe=Math.floor(Ot.width*Jt),Ae=Math.floor(Ot.height*Jt),A.isDataArrayTexture?Be=Ot.depth:A.isData3DTexture?Be=Math.floor(Ot.depth*Jt):Be=1,Ve=0,rt=0,mt=0}q!==null?(ze=q.x,vt=q.y,tn=q.z):(ze=0,vt=0,tn=0);const Rt=Me.convert(H.format),An=Me.convert(H.type);let Ce;H.isData3DTexture?(Z.setTexture3D(H,0),Ce=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Z.setTexture2DArray(H,0),Ce=k.TEXTURE_2D_ARRAY):(Z.setTexture2D(H,0),Ce=k.TEXTURE_2D),y.activeTexture(k.TEXTURE0),y.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),y.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),y.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);const kn=y.getParameter(k.UNPACK_ROW_LENGTH),bt=y.getParameter(k.UNPACK_IMAGE_HEIGHT),Si=y.getParameter(k.UNPACK_SKIP_PIXELS),qi=y.getParameter(k.UNPACK_SKIP_ROWS),Nr=y.getParameter(k.UNPACK_SKIP_IMAGES);y.pixelStorei(k.UNPACK_ROW_LENGTH,Ot.width),y.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot.height),y.pixelStorei(k.UNPACK_SKIP_PIXELS,Ve),y.pixelStorei(k.UNPACK_SKIP_ROWS,rt),y.pixelStorei(k.UNPACK_SKIP_IMAGES,mt);const qs=A.isDataArrayTexture||A.isData3DTexture,wt=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const Jt=X.get(A),Ir=X.get(H),Dt=X.get(Jt.__renderTarget),Fr=X.get(Ir.__renderTarget);y.bindFramebuffer(k.READ_FRAMEBUFFER,Dt.__webglFramebuffer),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let Ks=0;Ks<Be;Ks++)qs&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,X.get(A).__webglTexture,K,mt+Ks),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,X.get(H).__webglTexture,Te,tn+Ks)),k.blitFramebuffer(Ve,rt,Pe,Ae,ze,vt,Pe,Ae,k.DEPTH_BUFFER_BIT,k.NEAREST);y.bindFramebuffer(k.READ_FRAMEBUFFER,null),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||X.has(A)){const Jt=X.get(A),Ir=X.get(H);y.bindFramebuffer(k.READ_FRAMEBUFFER,N),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,F);for(let Dt=0;Dt<Be;Dt++)qs?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Jt.__webglTexture,K,mt+Dt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Jt.__webglTexture,K),wt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ir.__webglTexture,Te,tn+Dt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ir.__webglTexture,Te),K!==0?k.blitFramebuffer(Ve,rt,Pe,Ae,ze,vt,Pe,Ae,k.COLOR_BUFFER_BIT,k.NEAREST):wt?k.copyTexSubImage3D(Ce,Te,ze,vt,tn+Dt,Ve,rt,Pe,Ae):k.copyTexSubImage2D(Ce,Te,ze,vt,Ve,rt,Pe,Ae);y.bindFramebuffer(k.READ_FRAMEBUFFER,null),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else wt?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Ce,Te,ze,vt,tn,Pe,Ae,Be,Rt,An,Ot.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(Ce,Te,ze,vt,tn,Pe,Ae,Be,Rt,Ot.data):k.texSubImage3D(Ce,Te,ze,vt,tn,Pe,Ae,Be,Rt,An,Ot):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Te,ze,vt,Pe,Ae,Rt,An,Ot.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Te,ze,vt,Ot.width,Ot.height,Rt,Ot.data):k.texSubImage2D(k.TEXTURE_2D,Te,ze,vt,Pe,Ae,Rt,An,Ot);y.pixelStorei(k.UNPACK_ROW_LENGTH,kn),y.pixelStorei(k.UNPACK_IMAGE_HEIGHT,bt),y.pixelStorei(k.UNPACK_SKIP_PIXELS,Si),y.pixelStorei(k.UNPACK_SKIP_ROWS,qi),y.pixelStorei(k.UNPACK_SKIP_IMAGES,Nr),Te===0&&H.generateMipmaps&&k.generateMipmap(Ce),y.unbindTexture()},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&Z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Z.setTextureCube(A,0):A.isData3DTexture?Z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Z.setTexture2DArray(A,0):Z.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){z=0,B=0,$=null,y.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}function Dg(r,e){if(e===Qx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Wf||e===L0){let t=r.getIndex();if(t===null){const s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Wf)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function RA(r){const e=new Map,t=new Map,n=r.clone();return _b(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function _b(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)_b(r.children[n],e.children[n],t)}class CA extends Vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new IA(t)}),this.register(function(t){return new FA(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new qA(t)}),this.register(function(t){return new OA(t)}),this.register(function(t){return new kA(t)}),this.register(function(t){return new BA(t)}),this.register(function(t){return new zA(t)}),this.register(function(t){return new NA(t)}),this.register(function(t){return new GA(t)}),this.register(function(t){return new UA(t)}),this.register(function(t){return new VA(t)}),this.register(function(t){return new HA(t)}),this.register(function(t){return new LA(t)}),this.register(function(t){return new Ng(t,pt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ng(t,pt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new KA(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=tl.extractUrlBase(e);a=tl.resolveURL(c,this.path)}else a=tl.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new np(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bb){try{a[pt.KHR_BINARY_GLTF]=new YA(e)}catch(f){i&&i(f);return}s=JSON.parse(a[pt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new oR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const f=this.pluginCallbacks[h](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const f=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(f){case pt.KHR_MATERIALS_UNLIT:a[f]=new DA;break;case pt.KHR_DRACO_MESH_COMPRESSION:a[f]=new JA(s,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:a[f]=new jA;break;case pt.KHR_MESH_QUANTIZATION:a[f]=new $A;break;default:u.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function PA(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Zt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class LA{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ke(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ii);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new mM(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Th(h),c.distance=f;break;case"spot":c=new $f(h),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class DA{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return rr}extendParams(e,t,n){const i=[];e.color=new ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ii),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,vn))}return Promise.all(i)}}class NA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class IA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?fr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(s,s)}return Promise.all(i)}}class FA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?fr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class UA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?fr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class OA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?fr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],ii)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,vn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class kA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?fr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class BA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?fr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(s[0],s[1],s[2],ii),Promise.all(i)}}class zA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?fr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class GA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?fr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(s[0],s[1],s[2],ii),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,vn)),Promise.all(i)}}class HA{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?fr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class VA{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?fr:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class WA{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class XA{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class qA{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Ng{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,f=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,u,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(d),h,f,u,i.mode,i.filter),d})})}else return null}}class KA{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ti.TRIANGLES&&c.mode!==Ti.TRIANGLE_STRIP&&c.mode!==Ti.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),f=h.isGroup?h.children:[h],u=c[0].count,d=[];for(const p of f){const _=new it,g=new U,m=new Dr,S=new U(1,1,1),M=new sy(p.geometry,p.material,u);for(let x=0;x<u;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&S.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,_.compose(g,m,S));let b=null;for(const x in l)if(x==="_COLOR_0"){const w=l[x];M.instanceColor=new hh(w.array,w.itemSize,w.normalized)}else if(x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"){if(b===null){const E=M.geometry;b=new dn,b.name=E.name;for(const v in E.attributes)b.setAttribute(v,E.attributes[v]);for(const v in E.morphAttributes)b.morphAttributes[v]=E.morphAttributes[v];E.index!==null&&b.setIndex(E.index),b.morphTargetsRelative=E.morphTargetsRelative;for(const v of E.groups)b.addGroup(v.start,v.count,v.materialIndex);E.boundingBox!==null&&(b.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(b.boundingSphere=E.boundingSphere.clone()),b.drawRange.start=E.drawRange.start,b.drawRange.count=E.drawRange.count,b.userData=Object.assign({},E.userData),M.geometry=b}const w=l[x];b.setAttribute(x,new hh(w.array,w.itemSize,w.normalized))}It.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const bb="glTF",xo=12,Ig={JSON:1313821514,BIN:5130562};class YA{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bb)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-xo,s=new DataView(e,xo);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Ig.JSON){const c=new Uint8Array(e,xo+a,o);this.content=n.decode(c)}else if(l===Ig.BIN){const c=xo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class JA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const f=td[h]||h.toLowerCase();o[f]=a[h]}for(const h in e.attributes){const f=td[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],d=Fa[u.componentType];c[f]=d.name,l[f]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(f,u){i.decodeDracoFile(h,function(d){for(const p in d.attributes){const _=d.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}f(d)},o,c,ii,u)})})}}class jA{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class $A{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class vb extends Ja{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,f=(n-t)/h,u=f*f,d=u*f,p=e*c,_=p-c,g=-2*d+3*u,m=d-u,S=1-g,M=m-u+f;for(let b=0;b!==o;b++){const x=a[_+b+o],w=a[_+b+l]*h,E=a[p+b+o],v=a[p+b]*h;s[b]=S*x+M*w+g*E+m*v}return s}}const ZA=new Dr;class QA extends vb{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return ZA.fromArray(s).normalize().toArray(s),s}}const Ti={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fg={9728:cn,9729:zt,9984:T0,9985:Bc,9986:No,9987:nr},Ug={33071:Li,33648:sh,10497:Os},Au={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},td={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eR={CUBICSPLINE:void 0,LINEAR:_l,STEP:gl},Ru={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tR(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ya({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:as})),r.DefaultMaterial}function gs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ji(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nR(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const f=e[c];if(n){const u=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;a.push(u)}if(i){const u=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;o.push(u)}if(s){const u=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],f=c[1],u=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function iR(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rR(r){let e;const t=r.extensions&&r.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Cu(t.attributes):e=r.indices+":"+Cu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Cu(r.targets[n]);return e}function Cu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function nd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sR(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const aR=new it;class oR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new ob(this.options.manager):this.textureLoader=new gM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new np(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return gs(s,o,i),Ji(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(tl.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Au[i.type],o=Fa[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Sn(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Au[i.type],c=Fa[i.componentType],h=c.BYTES_PER_ELEMENT,f=h*l,u=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,g;if(d&&d!==f){const m=Math.floor(u/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let M=t.cache.get(S);M||(_=new c(o,m*d,i.count*d/h),M=new B0(_,d/h),t.cache.add(S,M)),g=new xl(M,l,u%d/h,p)}else o===null?_=new c(i.count*l):_=new c(o,u,i.count*l),g=new Sn(_,l,p);if(i.sparse!==void 0){const m=Au.SCALAR,S=Fa[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,x=new S(a[1],M,i.sparse.count*m),w=new c(a[2],b,i.sparse.count*l);o!==null&&(g=new Sn(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,v=x.length;E<v;E++){const T=x[E];if(g.setX(T,w[E*l]),l>=2&&g.setY(T,w[E*l+1]),l>=3&&g.setZ(T,w[E*l+2]),l>=4&&g.setW(T,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(s.samplers||{})[a.sampler]||{};return h.magFilter=Fg[u.magFilter]||zt,h.minFilter=Fg[u.minFilter]||nr,h.wrapS=Ug[u.wrapS]||Os,h.wrapT=Ug[u.wrapT]||Os,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==cn&&h.minFilter!==zt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(f){return new Promise(function(u,d){let p=u;t.isImageBitmapLoader===!0&&(p=function(_){const g=new hn(_);g.needsUpdate=!0,u(g)}),t.load(tl.resolveURL(f,s.path),p,void 0,d)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),Ji(f,a),f.userData.mimeType=a.mimeType||sR(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[pt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new W0,Vi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new V0,Vi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ya}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[pt.KHR_MATERIALS_UNLIT]){const f=i[pt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new ke(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const u=f.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],ii),o.opacity=u[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,vn)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=zi);const h=s.alphaMode||Ru.OPAQUE;if(h===Ru.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ru.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==rr&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new he(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==rr&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==rr){const f=s.emissiveFactor;o.emissive=new ke().setRGB(f[0],f[1],f[2],ii)}return s.emissiveTexture!==void 0&&a!==rr&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,vn)),Promise.all(c).then(function(){const f=new a(o);return s.name&&(f.name=s.name),Ji(f,s),t.associations.set(f,{materials:e}),s.extensions&&gs(i,f,s),f})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Og(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=rR(c),f=i[h];if(f)a.push(f.promise);else{let u;c.extensions&&c.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=Og(new dn,c,t),c.mode===Ti.TRIANGLE_STRIP?u=u.then(d=>Dg(d,L0)):c.mode===Ti.TRIANGLE_FAN&&(u=u.then(d=>Dg(d,Wf))),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?tR(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let d=0,p=h.length;d<p;d++){const _=h[d],g=a[d];let m;const S=c[d];if(g.mode===Ti.TRIANGLES||g.mode===Ti.TRIANGLE_STRIP||g.mode===Ti.TRIANGLE_FAN||g.mode===void 0){const M=s.isSkinnedMesh===!0,b=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");M&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=M&&b?new ny(_,S):new Nt(_,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Ti.LINES)m=new oy(_,S);else if(g.mode===Ti.LINE_STRIP)m=new $d(_,S);else if(g.mode===Ti.LINE_LOOP)m=new ly(_,S);else if(g.mode===Ti.POINTS)m=new Zd(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&iR(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Ji(m,s),g.extensions&&gs(i,m,g),t.assignFinalMaterial(m),f.push(m)}for(let d=0,p=f.length;d<p;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&gs(i,f[0],s),f[0];const u=new Hi;s.extensions&&gs(i,u,s),t.associations.set(u,{meshes:e});for(let d=0,p=f.length;d<p;d++)u.add(f[d]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qn(Ls.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ll(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ji(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const f=a[c];if(f){o.push(f);const u=new it;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Jd(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let f=0,u=i.channels.length;f<u;f++){const d=i.channels[f],p=i.samplers[d.sampler],_=d.target,g=_.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,S=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(p),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(f){const u=f[0],d=f[1],p=f[2],_=f[3],g=f[4],m=[];for(let M=0,b=u.length;M<b;M++){const x=u[M],w=d[M],E=p[M],v=_[M],T=g[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const R=n._createAnimationTracks(x,w,E,v,T);if(R)for(let L=0;L<R.length;L++)m.push(R[L])}const S=new rM(s,void 0,m);return Ji(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],f=c[1],u=c[2];u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,aR)});for(let d=0,p=f.length;d<p;d++)h.add(f[d]);if(h.userData.pivot!==void 0&&f.length>0){const d=h.userData.pivot,p=f[0];h.pivot=new U().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new H0:c.length>1?h=new Hi:c.length===1?h=c[0]:h=new It,h!==c[0])for(let f=0,u=c.length;f<u;f++)h.add(c[f]);if(s.name&&(h.userData.name=s.name,h.name=a),Ji(h,s),s.extensions&&gs(n,h,s),s.matrix!==void 0){const f=new it;f.fromArray(s.matrix),h.applyMatrix4(f)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const f=i.associations.get(h);i.associations.set(h,{...f})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Hi;n.name&&(s.name=i.createUniqueName(n.name)),Ji(s,n),n.extensions&&gs(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,f=l.length;h<f;h++){const u=l[h];u.parent!==null?s.add(RA(u)):s.add(u)}const c=h=>{const f=new Map;for(const[u,d]of i.associations)(u instanceof Vi||u instanceof hn)&&f.set(u,d);return h.traverse(u=>{const d=i.associations.get(u);d!=null&&f.set(u,d)}),f};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Hr[s.path]===Hr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Hr[s.path]){case Hr.weights:h=Al;break;case Hr.rotation:h=Rl;break;case Hr.translation:case Hr.scale:h=dh;break;default:n.itemSize===1?h=Al:h=dh;break}const f=i.interpolation!==void 0?eR[i.interpolation]:_l,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const _=new h(l[d]+"."+Hr[s.path],t.array,u,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=nd(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Rl?QA:vb;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lR(r,e,t){const n=e.attributes,i=new vi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){const h=nd(Fa[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new U,l=new U;for(let c=0,h=s.length;c<h;c++){const f=s[c];if(f.POSITION!==void 0){const u=t.json.accessors[f.POSITION],d=u.min,p=u.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),u.normalized){const _=nd(Fa[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new hr;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Og(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=td[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return dt.workingColorSpace!==ii&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),Ji(r,e),lR(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?nR(r,e.targets,t):r})}class cR extends hM{constructor(e){super(e),this.type=xn}parse(e){const a=function(v,T){switch(v){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(T||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(T||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(T||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(T||""))}},f=function(v,T,R){T=T||1024;let P=v.pos,I=-1,N=0,F="",z=String.fromCharCode.apply(null,new Uint16Array(v.subarray(P,P+128)));for(;0>(I=z.indexOf(`
`))&&N<T&&P<v.byteLength;)F+=z,N+=z.length,P+=128,z=String.fromCharCode.apply(null,new Uint16Array(v.subarray(P,P+128)));return-1<I?(v.pos+=N+I+1,F+z.slice(0,I)):!1},u=function(v){const T=/^#\?(\S+)/,R=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,I=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let F,z;for((v.pos>=v.byteLength||!(F=f(v)))&&a(1,"no header found"),(z=F.match(T))||a(3,"bad initial token"),N.valid|=1,N.programtype=z[1],N.string+=F+`
`;F=f(v),F!==!1;){if(N.string+=F+`
`,F.charAt(0)==="#"){N.comments+=F+`
`;continue}if((z=F.match(R))&&(N.gamma=parseFloat(z[1])),(z=F.match(L))&&(N.exposure=parseFloat(z[1])),(z=F.match(P))&&(N.valid|=2,N.format=z[1]),(z=F.match(I))&&(N.valid|=4,N.height=parseInt(z[1],10),N.width=parseInt(z[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||a(3,"missing format specifier"),N.valid&4||a(3,"missing image size specifier"),N},d=function(v,T,R){const L=T;if(L<8||L>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);L!==(v[2]<<8|v[3])&&a(3,"wrong scanline width");const P=new Uint8Array(4*T*R);P.length||a(4,"unable to allocate buffer space");let I=0,N=0;const F=4*L,z=new Uint8Array(4),B=new Uint8Array(F);let $=R;for(;$>0&&N<v.byteLength;){N+4>v.byteLength&&a(1),z[0]=v[N++],z[1]=v[N++],z[2]=v[N++],z[3]=v[N++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=L)&&a(3,"bad rgbe scanline format");let W=0,C;for(;W<F&&N<v.byteLength;){C=v[N++];const fe=C>128;if(fe&&(C-=128),(C===0||W+C>F)&&a(3,"bad scanline data"),fe){const me=v[N++];for(let Ie=0;Ie<C;Ie++)B[W++]=me}else B.set(v.subarray(N,N+C),W),W+=C,N+=C}const j=L;for(let fe=0;fe<j;fe++){let me=0;P[I]=B[fe+me],me+=L,P[I+1]=B[fe+me],me+=L,P[I+2]=B[fe+me],me+=L,P[I+3]=B[fe+me],I+=4}$--}return P},p=function(v,T,R,L){const P=v[T+3],I=Math.pow(2,P-128)/255;R[L+0]=v[T+0]*I,R[L+1]=v[T+1]*I,R[L+2]=v[T+2]*I,R[L+3]=1},_=function(v,T,R,L){const P=v[T+3],I=Math.pow(2,P-128)/255;R[L+0]=Zl.toHalfFloat(Math.min(v[T+0]*I,65504)),R[L+1]=Zl.toHalfFloat(Math.min(v[T+1]*I,65504)),R[L+2]=Zl.toHalfFloat(Math.min(v[T+2]*I,65504)),R[L+3]=Zl.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const m=u(g),S=m.width,M=m.height,b=d(g.subarray(g.pos),S,M);let x,w,E;switch(this.type){case jn:E=b.length/4;const v=new Float32Array(E*4);for(let R=0;R<E;R++)p(b,R*4,v,R*4);x=v,w=jn;break;case xn:E=b.length/4;const T=new Uint16Array(E*4);for(let R=0;R<E;R++)_(b,R*4,T,R*4);x=T,w=xn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:S,height:M,data:x,header:m.string,gamma:m.gamma,exposure:m.exposure,type:w,colorSpace:ii,minFilter:zt,magFilter:zt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}var hR=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(m){s=m.instance,s.exports.__wasm_call_ctors()});function o(m){for(var S=new Uint8Array(m.length),M=0;M<m.length;++M){var b=m.charCodeAt(M);S[M]=b>96?b-97:b>64?b-39:b+4}for(var x=0,M=0;M<m.length;++M)S[x++]=S[M]<60?n[S[M]]:(S[M]-60)*64+S[++M];return S.buffer.slice(0,x)}function l(m,S,M,b,x,w,E){var v=m.exports.sbrk,T=b+3&-4,R=v(T*x),L=v(w.length),P=new Uint8Array(m.exports.memory.buffer);P.set(w,L);var I=S(R,b,x,L,w.length);if(I==0&&E&&E(R,T,x),M.set(P.subarray(R,R+b*x)),v(R-v(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],u=0;function d(m){var S={object:new Worker(m),pending:0,requests:{}};return S.object.onmessage=function(M){var b=M.data;S.pending-=b.count,S.requests[b.id][b.action](b.value),delete S.requests[b.id]},S}function p(m){for(var S="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),M=new Blob([S],{type:"text/javascript"}),b=URL.createObjectURL(M),x=f.length;x<m;++x)f[x]=d(b);for(var x=m;x<f.length;++x)f[x].object.postMessage({});f.length=m,URL.revokeObjectURL(b)}function _(m,S,M,b,x){for(var w=f[0],E=1;E<f.length;++E)f[E].pending<w.pending&&(w=f[E]);return new Promise(function(v,T){var R=new Uint8Array(M),L=++u;w.pending+=m,w.requests[L]={resolve:v,reject:T},w.object.postMessage({id:L,count:m,size:S,source:R,mode:b,filter:x},[R.buffer])})}function g(m){var S=m.data;self.ready.then(function(M){if(!S.id)return self.close();try{var b=new Uint8Array(S.count*S.size);l(M,M.exports[S.mode],b,S.count,S.size,S.source,M.exports[S.filter]),self.postMessage({id:S.id,count:S.count,action:"resolve",value:b},[b.buffer])}catch(x){self.postMessage({id:S.id,count:S.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(m){p(m)},decodeVertexBuffer:function(m,S,M,b,x){l(s,s.exports.meshopt_decodeVertexBuffer,m,S,M,b,s.exports[c[x]])},decodeIndexBuffer:function(m,S,M,b){l(s,s.exports.meshopt_decodeIndexBuffer,m,S,M,b)},decodeIndexSequence:function(m,S,M,b){l(s,s.exports.meshopt_decodeIndexSequence,m,S,M,b)},decodeGltfBuffer:function(m,S,M,b,x,w){l(s,s.exports[h[x]],m,S,M,b,s.exports[c[w]])},decodeGltfBufferAsync:function(m,S,M,b,x){return f.length>0?_(m,S,M,h[b],c[x]):a.then(function(){var w=new Uint8Array(m*S);return l(s,s.exports[h[b]],w,m,S,M,s.exports[c[x]]),w})}}})();const qc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const uR=new Ll(-1,1,1,-1,0,1);class fR extends dn{constructor(){super(),this.setAttribute("position",new yn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yn([0,2,0,0,2,0],2))}}const dR=new fR;class ap{constructor(e){this._mesh=new Nt(dR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xb extends Qa{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=El.clone(e.uniforms),this.material=new Kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ap(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class kg extends Qa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class pR extends Qa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class mR{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xb(qc),this.copyPass.material.blending=ar,this.timer=new vM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}kg!==void 0&&(a instanceof kg?n=!0:a instanceof pR&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class gR extends Qa{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ke}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const _R={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class qa extends Qa{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(s,a,{type:xn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Fn(s,a,{type:xn,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const u=new Fn(s,a,{type:xn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),a=Math.round(a/2)}const o=_R;this.highPassUniforms=El.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new he(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=El.clone(qc.uniforms),this.blendMaterial=new Kt({uniforms:this.copyUniforms,vertexShader:qc.vertexShader,fragmentShader:qc.fragmentShader,premultipliedAlpha:!0,blending:Pr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ke,this._oldClearAlpha=1,this._basic=new rr,this._fsQuad=new ap(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new he(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=qa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=qa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const i=[],s=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),s.push(c)}return new Kt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}}qa.BlurDirectionX=new he(1,0);qa.BlurDirectionY=new he(0,1);const wc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class bR extends Qa{constructor(){super(),this.isOutputPass=!0,this.uniforms=El.clone(wc.uniforms),this.material=new ib({name:wc.name,uniforms:this.uniforms,vertexShader:wc.vertexShader,fragmentShader:wc.fragmentShader}),this._fsQuad=new ap(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ld?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Dd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ud?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Id&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Ah=`
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
`,vR=`
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
}`,xR=`
uniform vec3 uColor;
uniform float uIntensity;
uniform float uTime;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vView;
varying vec3 vWorld;
${Ah}
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
}`,SR=new U(0,-1,0);class Bg extends Nt{uniforms;constructor(e,t,n){const i={uColor:{value:new ke(n)},uIntensity:{value:0},uTime:{value:0}};super(new yh(e,t,1,48,1,!0).translate(0,-.5,0),new Kt({uniforms:i,vertexShader:vR,fragmentShader:xR,transparent:!0,depthWrite:!1,side:zi,blending:Pr})),this.uniforms=i,this.renderOrder=8}aim(e,t){const n=t.clone().sub(e);this.position.copy(e),this.scale.set(1,n.length(),1),this.quaternion.setFromUnitVectors(SR,n.normalize())}}const yR={name:"GradeShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new he(1,1)},uGrain:{value:.045},uVignette:{value:.85},uCA:{value:.0025},uGlitch:{value:0},uFlash:{value:0},uVeil:{value:0},uTint:{value:new U(1,1,1)},uLift:{value:new U(0,0,0)},uSat:{value:1},uContrast:{value:1}},vertexShader:`
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
    ${Ah}

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
    }`},So=r=>({key:new ke(r.key),keyI:r.keyI,flicker:r.flicker,moonI:r.moonI??0,door:new ke(r.door??"#ffc58a"),doorI:r.doorI,fog:new ke(r.fog),fogD:r.fogD,embers:r.embers??0,dust:r.dust??1,exposure:r.exposure??1,tint:new U(...r.tint),lift:new U(...r.lift??[0,0,0]),sat:r.sat??1,contrast:r.contrast??1.05}),Ec={amber:So({key:"#ff8a3c",keyI:1,flicker:.4,doorI:1,fog:"#120b07",fogD:.06,tint:[1,.96,.9],lift:[.01,.006,.002],sat:.92,contrast:1.08}),gold:So({key:"#ffa04a",keyI:1.15,flicker:.3,doorI:.6,fog:"#150c05",fogD:.06,dust:1.3,exposure:1.05,tint:[1.05,.97,.84],lift:[.012,.006,0],sat:1,contrast:1.1}),fire:So({key:"#ff6a2a",keyI:1.4,flicker:.95,door:"#ff7a30",doorI:.5,fog:"#1a0a05",fogD:.08,embers:1,dust:.6,exposure:1.04,tint:[1.04,.92,.82],lift:[.014,.004,0],sat:.98,contrast:1.12}),moon:So({key:"#ff9a5a",keyI:.4,flicker:.2,moonI:1,door:"#9ab8ff",doorI:.25,fog:"#070b14",fogD:.055,dust:1.7,exposure:1.05,tint:[.86,.95,1.12],lift:[0,.004,.014],sat:.78,contrast:1.1}),open:So({key:"#ff8a3c",keyI:.85,flicker:.3,doorI:1.2,fog:"#1a130c",fogD:.045,dust:1.4,exposure:1.05,tint:[1,.97,.92],lift:[.012,.01,.006],sat:.95,contrast:1.05})},zg=r=>({...r,key:r.key.clone(),door:r.door.clone(),fog:r.fog.clone(),tint:r.tint.clone(),lift:r.lift.clone()}),MR=["keyI","flicker","moonI","doorI","fogD","embers","dust","exposure","sat","contrast"];function id(r,e,t,n){for(const i of MR)r[i]=e[i]+(t[i]-e[i])*n;return r.key.lerpColors(e.key,t.key,n),r.door.lerpColors(e.door,t.door,n),r.fog.lerpColors(e.fog,t.fog,n),r.tint.lerpVectors(e.tint,t.tint,n),r.lift.lerpVectors(e.lift,t.lift,n),r}function TR(r,e,t){return id(r,r,e,t)}function wR(r,e){return e/(2*Math.tan(Ls.degToRad(r.fov)/2))}const ER=`
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
}`,AR=`
varying vec3 vCol;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d);
  gl_FragColor = vec4(vCol, a * a);
}`;class RR extends Zd{uniforms;constructor(e,t){const n=t.getSize(new U),i=new Float32Array(e*3),s=new Float32Array(e);for(let l=0;l<e;l++)i[l*3]=t.min.x+Math.random()*n.x,i[l*3+1]=t.min.y+Math.random()*n.y,i[l*3+2]=t.min.z+Math.random()*n.z,s[l]=Math.random();const a=new dn;a.setAttribute("position",new Sn(i,3)),a.setAttribute("aSeed",new Sn(s,1));const o={uTime:{value:0},uSize:{value:.012},uScale:{value:800},uAmount:{value:1},uBoxMin:{value:t.min.clone()},uBoxSize:{value:n},uLamp:{value:new U},uLampI:{value:1},uBeamO:{value:new U},uBeamD:{value:new U(0,-1,0)},uBeamI:{value:0},uColor:{value:new ke(1,.62,.32)},uBeamColor:{value:new ke(.55,.72,1)}};super(a,new Kt({uniforms:o,vertexShader:ER,fragmentShader:AR,transparent:!0,depthWrite:!1,blending:Pr})),this.uniforms=o,this.frustumCulled=!1}}const CR=`
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
}`,PR=`
varying float vA;
varying float vHeat;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.1, d);
  vec3 col = mix(vec3(1.0, 0.18, 0.02), vec3(1.0, 0.62, 0.22), vHeat) * 7.0;
  gl_FragColor = vec4(col, a * vA);
}`;class LR extends Zd{uniforms;constructor(e,t){const n=new Float32Array(e*3),i=new Float32Array(e);for(let o=0;o<e;o++)n[o*3]=Ls.lerp(t.min.x,t.max.x,Math.random()),n[o*3+1]=t.min.y,n[o*3+2]=Ls.lerp(t.min.z,t.max.z,Math.random()),i[o]=Math.random();const s=new dn;s.setAttribute("position",new Sn(n,3)),s.setAttribute("aSeed",new Sn(i,1));const a={uTime:{value:0},uSize:{value:.012},uScale:{value:800},uAmount:{value:0},uHeight:{value:t.max.y-t.min.y}};super(s,new Kt({uniforms:a,vertexShader:CR,fragmentShader:PR,transparent:!0,depthWrite:!1,blending:Pr})),this.uniforms=a,this.frustumCulled=!1}}const DR=new wi(1,1,1,6).translate(0,.5,0),NR=`
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
}`,IR=`
uniform float uTime;
uniform float uSeed;
uniform float uIntensity;
varying vec2 vUv;
${Ah}
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
}`;let Ac=null;function FR(){if(Ac)return Ac;const r=document.createElement("canvas");r.width=r.height=128;const e=r.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.35)"),t.addColorStop(.5,"rgba(255,255,255,0.08)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Ac=new cy(r),Ac}class Rc extends Hi{light=null;uniforms;seed=Math.random()*100;size;intensity;baseLight;lightY;glow=null;constructor(e){super(),this.size=new he(e.width,e.height),this.intensity=e.intensity??7,this.uniforms={uSize:{value:this.size.clone()},uTime:{value:0},uSeed:{value:this.seed},uIntensity:{value:this.intensity}};const t=new Nt(DR,new Kt({uniforms:this.uniforms,vertexShader:NR,fragmentShader:IR,transparent:!0,depthWrite:!1,blending:Pr}));if(t.frustumCulled=!1,t.renderOrder=10,this.add(t),e.halo!==0){this.glow=new QS(new z0({map:FR(),color:new ke(1,.5,.18),transparent:!0,depthWrite:!1,blending:Pr,opacity:.5}));const n=e.height*(e.halo??3.5);this.glow.scale.set(n,n,1),this.glow.position.y=e.height*.4,this.glow.renderOrder=9,this.add(this.glow)}if(this.baseLight=e.light?.intensity??0,this.lightY=e.light?.y??e.height*.35,e.light){const n=new Th(e.light.color,e.light.intensity,0,2);n.position.y=this.lightY,e.light.shadow&&(n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.bias=-.002,n.shadow.normalBias=.015,n.shadow.camera.near=.03,n.shadow.camera.far=14),this.light=n,this.add(n)}}update(e,t,n,i){const s=this.seed,a=.5+.24*Math.sin(e*7.9+s)+.14*Math.sin(e*13.3+s*1.7)+.08*Math.sin(e*29.1+s*.3),o=1-n*.45+n*.9*a;this.uniforms.uTime.value=e,this.uniforms.uIntensity.value=this.intensity*t*(.85+.3*a),this.uniforms.uSize.value.set(this.size.x,this.size.y*(.88+.24*a*(.4+n))),this.visible=t>.01,this.glow&&(this.glow.material.opacity=.26*t*o),this.light&&(this.light.intensity=this.baseLight*t*o,i&&this.light.color.copy(i),this.light.position.set(Math.sin(e*3.1+s)*.006*n,this.lightY+Math.sin(e*5.3+s)*.004,Math.cos(e*2.7+s)*.006*n))}}const kt={minX:-3.5,maxX:3.5,minZ:-6,maxZ:3.5,height:4.2},UR={halfWidth:.94,shoulder:2.5,apex:2.78},Uo=new U(kt.minX+.005,3,-2.9);function Gg(r,e,t,n=16777215){const i=`/sync/assets/textures/${e}_`,s=(o,l=!1)=>{const c=r.load(`${i}${o}.webp`);return c.wrapS=c.wrapT=Os,c.anisotropy=t,l&&(c.colorSpace=vn),c},a=s("arm");return new Ya({color:n,map:s("diff",!0),normalMap:s("nor"),aoMap:a,roughnessMap:a,roughness:1,metalness:0})}function yo(r,e,t=e){const n=r.attributes.uv;for(let i=0;i<n.count;i++)n.setXY(i,n.getX(i)*e,n.getY(i)*t);return n.needsUpdate=!0,r}const OR=`
uniform vec3 uColor;
uniform float uIntensity;
uniform float uTime;
varying vec2 vUv;
${Ah}
void main() {
  // vUv.y = 1 at the door, falling off into the room.
  float d = vUv.y;
  float side = smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.75, vUv.x);
  float a = pow(d, 3.0) * side * (0.85 + 0.3 * vnoise(vUv * vec2(9.0, 3.0) + uTime * 0.2));
  gl_FragColor = vec4(uColor, a * uIntensity);
}`,kR=`
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
}`,Hg=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;function BR(r,e){const t=new Hi,n=kt.maxX-kt.minX,i=kt.maxZ-kt.minZ,s=kt.height,a=(kt.maxZ+kt.minZ)/2,o=2.8,l=new Nt(yo(new wi(n,i),n/2.4,i/2.4),e);l.rotation.x=-Math.PI/2,l.position.set(0,0,a),l.receiveShadow=!0,t.add(l);const c=r.clone();c.color.setScalar(.35);const h=new Nt(yo(new wi(n,i),n/o,i/o),c);h.rotation.x=Math.PI/2,h.position.set(0,s,a),t.add(h);const f=(L,P)=>{const I=new Nt(yo(new wi(i,s),i/o,s/o),r);I.position.set(L,s/2,a),I.rotation.y=P,I.receiveShadow=!0,t.add(I)};f(kt.minX,Math.PI/2),f(kt.maxX,-Math.PI/2);const u=new Nt(yo(new wi(n,s),n/o,s/o),r);u.position.set(0,s/2,kt.maxZ),u.rotation.y=Math.PI,t.add(u);const d=new $0;d.moveTo(kt.minX,-.3),d.lineTo(kt.maxX,-.3),d.lineTo(kt.maxX,s),d.lineTo(kt.minX,s),d.closePath();const p=new Yf,{halfWidth:_,shoulder:g,apex:m}=UR;p.moveTo(-_,-.1),p.lineTo(_,-.1),p.lineTo(_,g),p.quadraticCurveTo(_,m,0,m),p.quadraticCurveTo(-_,m,-_,g),p.closePath(),d.holes.push(p);const S=.6,M=new Nt(yo(new tp(d,{depth:S,bevelEnabled:!1,curveSegments:16}),1/o),r);M.position.z=kt.minZ-S,M.receiveShadow=!0,M.castShadow=!0,t.add(M);const b=new rr({color:new ke(4,3.2,2.2)}),x=new Nt(new wi(3,3.6),b);x.position.set(0,1.6,kt.minZ-1.4),t.add(x);const w={uIntensity:{value:1},uTime:{value:0},uColor:{value:new ke(1,.7,.4)}},E=new Nt(new wi(2.6,1.6),new Kt({uniforms:w,vertexShader:Hg,fragmentShader:OR,transparent:!0,depthWrite:!1,blending:Pr}));E.rotation.x=-Math.PI/2,E.position.set(0,.004,kt.minZ+.8),t.add(E);const v={uIntensity:{value:0},uColor:{value:new ke(.6,.75,1)}},T=new Nt(new wi(.42,1.25),new Kt({uniforms:v,vertexShader:Hg,fragmentShader:kR}));T.position.copy(Uo),T.rotation.y=Math.PI/2,t.add(T);const R=new Ya({color:2365198,roughness:.85});for(let L=kt.minZ+.9;L<kt.maxZ;L+=1.7){const P=new Nt(new Ka(n,.24,.28),R);P.position.set(0,s-.12,L),P.receiveShadow=!0,t.add(P)}return{group:t,beyond:b,spill:w,window:v}}const Vg=["large_castle_door","treasure_chest","WoodenTable_01","ornate_medieval_dagger","seadogs_compass","wooden_candlestick","brass_candleholders","brass_diya_lantern","wooden_lantern_01","vintage_pocket_watch","book_encyclopedia_set_01","brass_vase_03","brass_goblets","ceramic_pot","wine_barrel_01","wooden_crate_01"],zR=.549;function GR(r,e){r.traverse(t=>{const n=t;if(!n.isMesh)return;const i=n.material;if(/glass/i.test(i.name)){n.material=new rr({name:i.name,color:16767400,transparent:!0,opacity:.07,depthWrite:!1}),n.castShadow=!1;return}n.castShadow=e,n.receiveShadow=!0})}function Pu(r,e){const t=r.parent,n=new It;return n.position.copy(e),t.add(n),r.position.sub(e),n.add(r),n}function ki(r,e,t,n,i=0,s=1){return r.position.set(e,t,n),r.rotation.y=i,r.scale.setScalar(s),r}async function HR(r,e,t){const n="/sync/assets/models/",i=await Promise.all(Vg.map(L=>r.loadAsync(`${n}${L}.glb`))),s={};Vg.forEach((L,P)=>{s[L]=i[P].scene,GR(s[L],!0)});const a=s.large_castle_door;ki(a,.044,0,kt.minZ),e.add(a);const o=Pu(a.getObjectByName("large_castle_door_left"),new U(-1.009,0,0)),l=Pu(a.getObjectByName("large_castle_door_right"),new U(.918,0,0)),c=ki(s.WoodenTable_01,0,0,-1,.06);e.add(c);const h=(L,P,I,N=0,F=1,z=0)=>c.add(ki(L,P,zR+z,I,N,F));h(s.wooden_lantern_01,-.6,-.08,.5),s.wooden_lantern_01.traverse(L=>{const P=L.material;P?.isMeshStandardMaterial&&P.color.multiplyScalar(.4)}),h(s.brass_goblets,-.22,-.13,.4,.85),h(s.book_encyclopedia_set_01,.32,-.2,-.08),h(s.wooden_candlestick,.78,.04),h(s.seadogs_compass,.16,.12,.7,1.15),h(s.brass_vase_03,-.84,.16,.2);const f=new Hi;s.vintage_pocket_watch.rotation.x=-Math.PI/2,f.add(s.vintage_pocket_watch),h(f,-.04,.17,2.4,1,.007);const u=new Hi;s.ornate_medieval_dagger.rotation.x=-Math.PI/2,u.add(s.ornate_medieval_dagger),h(u,-.36,.1,1.15,1.25,.012);const d=ki(s.treasure_chest,-1.7,0,-1.65,.55);e.add(d);const p=Pu(d.getObjectByName("treasure_chest_lid"),new U(0,.42,-.255)),_=new Th(16757575,0,0,2);_.position.set(0,.36,.02),d.add(_),e.add(ki(s.wine_barrel_01,2.85,0,-5.2,.3));const g=s.wine_barrel_01.clone();e.add(ki(g,2.05,0,-5.45,1.2)),e.add(ki(s.wooden_crate_01,-2.75,0,-5.3,-.2));const m=s.wooden_crate_01.clone();e.add(ki(m,-2.7,.342,-5.28,.22)),e.add(ki(s.ceramic_pot,2.95,0,-3.4,.4));const S=ki(s.brass_candleholders,1.55,0,-5.35,-.35);e.add(S);const M=ki(s.brass_diya_lantern,-1.55,2.2,-5.55,.3,1.6);e.add(M);const b=new Nt(new yh(.006,.006,1,6),new Ya({color:2826518,metalness:.8,roughness:.5})),x=2.2+.381*1.6;b.scale.y=kt.height-x,b.position.set(-1.55+.008,(kt.height+x)/2,-5.55),e.add(b),e.updateMatrixWorld(!0);const w=[],E=new vi;for(const L of[S,M]){const P=[];L.traverse(I=>{const N=I;N.isMesh&&/flame/i.test(N.material.name)&&P.push(N)});for(const I of P){I.visible=!1;for(const N of VR(I)){E.copy(N);const F=E.getSize(new U),z=new Rc({width:Math.max(F.x,F.z)*1.5,height:F.y*1.5,intensity:6,halo:4});z.position.set((E.min.x+E.max.x)/2,E.min.y,(E.min.z+E.max.z)/2),e.add(z),w.push(z)}}}if(w.length){const L=new Rc({width:.001,height:.001,intensity:0,halo:0,light:{color:16747068,intensity:2.4}});L.position.set(1.55,.95,-5.1),e.add(L),w.push(L)}const v=new Rc({width:.03,height:.075,intensity:8,halo:3,light:{color:16747068,intensity:2.2,shadow:t,y:.04}});v.position.set(0,.12,0),s.wooden_lantern_01.add(v);const T=new Rc({width:.02,height:.055,intensity:7,halo:3,light:{color:16749382,intensity:.9}});T.position.set(0,.222,0),s.wooden_candlestick.add(T),e.updateMatrixWorld(!0);const R=(L,P=0)=>L.localToWorld(new U(0,P,0));return{doorLeft:o,doorRight:l,chestLid:p,chestGlow:_,lantern:v,candle:T,doorFlames:w,spots:{lantern:R(s.wooden_lantern_01,.2),chest:R(d,.35),books:R(s.book_encyclopedia_set_01,.12),compass:R(s.seadogs_compass,.03),dagger:R(u,.01)}}}function VR(r){const e=r.geometry.attributes.position,t=new U,n=[];for(let i=0;i<e.count;i++){t.fromBufferAttribute(e,i).applyMatrix4(r.matrixWorld);const s=n.find(a=>a.distanceToPoint(t)<.03);s?s.expandByPoint(t):n.push(new vi(t.clone(),t.clone()))}return n}const Wg=()=>({pos:new U,target:new U,fov:40,door:0,chest:0,flash:0,veil:0}),Mo=r=>r*r*(3-2*r),_s=(r,e)=>1-Math.exp(-r*e),To=new U(.12,.55,-.9),WR=new U(0,1.45,kt.minZ-.3),XR=new ke(1,.8,.6);class qR{renderer;scene=new VS;camera=new qn(40,1,.03,40);intro={t:1,dark:1};ready=!1;composer;bloom;grade;high;room;props;dust;embers;moonBeam;doorBeam;moonLight;doorLight;bounce;fog=new Yd(1182471,.06);want=Wg();cur=Wg();moodWant=zg(Ec.amber);mood=zg(Ec.amber);pointer=new he;pointerS=new he;glitch=0;time=0;degraded=!1;scale=1;perf={frames:0,total:0};placed=!1;tmp=new U;constructor(e,t){this.high=t.high,this.renderer=new AA({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.toneMapping=vh,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Jo,this.renderer.setClearColor(0,1),this.scene.fog=this.fog,this.scene.environmentIntensity=.14;const n=new Fn(1,1,{type:xn,samples:t.high?4:0});this.composer=new mR(this.renderer,n),this.composer.addPass(new gR(this.scene,this.camera)),this.bloom=new qa(new he(256,256),.6,.55,.92),this.composer.addPass(this.bloom),this.composer.addPass(new bR),this.grade=new xb(yR),this.composer.addPass(this.grade),this.resize()}async load(e){const t=new ab;t.onProgress=(c,h,f)=>e(h/Math.max(f,1));const n=new Promise(c=>t.onLoad=c),i=new ob(t),s=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),a=Gg(i,"large_sandstone_blocks",s,14272429),o=Gg(i,"monastery_stone_floor",s,12562072);this.room=BR(a,o),this.scene.add(this.room.group),new cR(t).load("/sync/assets/cabin_1k.hdr",c=>{const h=new Zf(this.renderer);c.mapping=kc,this.scene.environment=h.fromEquirectangular(c).texture,c.dispose(),h.dispose()});const l=new CA(t);l.setMeshoptDecoder(hR),this.props=await HR(l,this.scene,this.high),await n,this.buildLights(),this.buildAtmosphere(),await this.renderer.compileAsync(this.scene,this.camera),this.ready=!0}buildLights(){this.scene.add(new uM(2764864,1707784,.35)),this.bounce=new Th(16751189,0,0,1.4),this.bounce.position.set(-.2,2.4,-1.6),this.scene.add(this.bounce);const e=this.high?1024:512;this.doorLight=new $f(16767144,0,0,.62,.7,2),this.doorLight.position.set(0,2.1,kt.minZ-2.4),this.doorLight.target.position.set(0,0,-2.2),this.doorLight.castShadow=!0,this.doorLight.shadow.mapSize.set(e,e),this.doorLight.shadow.bias=-8e-4,this.doorLight.shadow.camera.near=.5,this.doorLight.shadow.camera.far=14,this.scene.add(this.doorLight,this.doorLight.target);const t=Uo.clone().sub(To).multiplyScalar(1.35).add(To);this.moonLight=new $f(10205439,0,0,.2,.55,2),this.moonLight.position.copy(t),this.moonLight.target.position.copy(To),this.moonLight.castShadow=!0,this.moonLight.shadow.mapSize.set(e,e),this.moonLight.shadow.bias=-8e-4,this.moonLight.shadow.camera.near=1,this.moonLight.shadow.camera.far=10,this.scene.add(this.moonLight,this.moonLight.target)}buildAtmosphere(){this.moonBeam=new Bg(.16,.55,10205439),this.moonBeam.aim(Uo.clone().add(new U(.02,0,0)),To),this.scene.add(this.moonBeam),this.doorBeam=new Bg(.9,2.2,16767400),this.doorBeam.aim(WR,new U(0,0,-1.4)),this.scene.add(this.doorBeam),this.dust=new RR(this.high?1600:700,new vi(new U(-3.3,.05,-5.8),new U(3.3,3.8,2.5))),this.scene.add(this.dust),this.embers=new LR(this.high?520:260,new vi(new U(-1.6,0,-2.6),new U(1.8,2.6,.4))),this.scene.add(this.embers),this.resize()}get flash(){return this.cur.flash}direct(e,t,n){n=Ls.clamp(n,0,1);const i=Mo(n),s=this.want;s.pos.set(...e.pos).lerp(this.tmp.set(...t.pos),i),s.target.set(...e.target).lerp(this.tmp.set(...t.target),i),s.fov=e.fov+(t.fov-e.fov)*i,s.door=(e.door??0)+((t.door??0)-(e.door??0))*Mo(Math.min(1,n*1.5)),s.chest=(e.chest??0)+((t.chest??0)-(e.chest??0))*i,s.flash=(e.flash??0)*(1-n)**3+(t.flash??0)*n**3,s.veil=(e.veil??0)+((t.veil??0)-(e.veil??0))*i,id(this.moodWant,Ec[e.mood],Ec[t.mood],i),this.placed||(this.placed=!0,this.snap())}snap(){const e=this.want;Object.assign(this.cur,{fov:e.fov,door:e.door,chest:e.chest,flash:e.flash,veil:e.veil}),this.cur.pos.copy(e.pos),this.cur.target.copy(e.target),id(this.mood,this.moodWant,this.moodWant,0)}setPointer(e,t){this.pointer.set(e,t)}pulse(e=1){this.glitch=Math.max(this.glitch,e)}resize(){const e=window.innerWidth,t=window.innerHeight,n=Math.min(window.devicePixelRatio,this.high?1.5:1)*this.scale;this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.grade.uniforms.uRes.value.set(e*n,t*n);const i=wR(this.camera,t*n);this.dust&&(this.dust.uniforms.uScale.value=i),this.embers&&(this.embers.uniforms.uScale.value=i)}degrade(){this.degraded=!0;for(const e of[this.composer.renderTarget1,this.composer.renderTarget2])e.samples=0,e.dispose();this.props.lantern.light&&(this.props.lantern.light.castShadow=!1),this.moonLight.castShadow=!1}watchFrameRate(e){if(e>.2||this.intro.dark>.5)return;const t=this.perf;if(t.frames++,t.total+=e,t.total<1.2)return;const n=t.total/t.frames;t.frames=0,t.total=0,n>1/38&&this.scale>.5&&(this.degraded||this.degrade(),this.scale=Math.max(.5,this.scale*.8),this.resize())}tick(e){if(!this.ready)return;this.watchFrameRate(e),e=Math.min(e,.1),this.time+=e;const t=this.time,n=this.cur,i=this.want,s=this.mood,a=_s(e,3.2);n.pos.lerp(i.pos,a),n.target.lerp(i.target,a),n.fov+=(i.fov-n.fov)*a,n.door+=(i.door-n.door)*_s(e,2.4),n.chest+=(i.chest-n.chest)*_s(e,2.6),n.flash+=(i.flash-n.flash)*_s(e,6),n.veil+=(i.veil-n.veil)*_s(e,5),TR(s,this.moodWant,_s(e,2.2)),this.pointerS.lerp(this.pointer,_s(e,2.5)),this.glitch*=Math.exp(-e*3.5);const o=Mo(this.intro.t),l=this.camera,c=this.pointerS;l.position.copy(n.pos),l.position.x+=c.x*.09+Math.sin(t*.43)*.008+o*.4,l.position.y+=-c.y*.05+Math.sin(t*.61+1.3)*.006+o*.55,l.position.z+=Math.sin(t*.37+2.1)*.006+o*3.4,this.tmp.copy(n.target),this.tmp.x+=c.x*.18,this.tmp.y+=-c.y*.1+o*.2,l.lookAt(this.tmp),l.rotateZ(Math.sin(t*.29)*.0035-c.x*.006);const h=(n.fov+o*8)*(1+Math.max(0,1-l.aspect)*.6);Math.abs(l.fov-h)>.001&&(l.fov=h,l.updateProjectionMatrix());const f=Mo(Ls.clamp(n.door,0,1));this.props.doorLeft.rotation.y=-f*1.35,this.props.doorRight.rotation.y=f*1.42;const u=Mo(Ls.clamp(n.chest,0,1));this.props.chestLid.rotation.x=-u*1.25,this.props.chestGlow.intensity=u*2.2*(.9+.1*Math.sin(t*3)),this.props.lantern.update(t,s.keyI,s.flicker,s.key),this.props.candle.update(t,s.keyI,s.flicker,s.key);for(const _ of this.props.doorFlames)_.update(t,.35+s.keyI*.65,s.flicker);this.bounce.color.copy(s.key),this.bounce.intensity=s.keyI*1.6*(.94+.06*Math.sin(t*6.1)),this.room.beyond.color.copy(s.door).multiplyScalar(4*s.doorI*(.3+f*.25)),this.room.spill.uIntensity.value=s.doorI*(.55*(1-f)+f*.2),this.room.spill.uColor.value.copy(s.door),this.room.spill.uTime.value=t,this.doorLight.color.copy(s.door),this.doorLight.intensity=s.doorI*(2+f*90),this.doorBeam.uniforms.uIntensity.value=f*s.doorI*.2,this.doorBeam.visible=f>.002,this.doorBeam.uniforms.uColor.value.copy(s.door),this.doorBeam.uniforms.uTime.value=t,this.moonLight.intensity=s.moonI*40,this.room.window.uIntensity.value=.06+s.moonI*3.2,this.moonBeam.uniforms.uIntensity.value=s.moonI*.5,this.moonBeam.visible=s.moonI>.002,this.moonBeam.uniforms.uTime.value=t,this.fog.color.copy(s.fog),this.fog.density=s.fogD;const d=this.dust.uniforms;d.uTime.value=t,d.uAmount.value=s.dust,this.props.lantern.getWorldPosition(d.uLamp.value),d.uLampI.value=s.keyI,d.uColor.value.copy(s.key).lerp(XR,.4),d.uBeamO.value.copy(Uo),d.uBeamD.value.copy(To).sub(Uo).normalize(),d.uBeamI.value=s.moonI,this.embers.uniforms.uTime.value=t,this.embers.uniforms.uAmount.value=s.embers,this.renderer.toneMappingExposure=s.exposure*(1-this.intro.dark);const p=this.grade.uniforms;p.uTime.value=t,p.uTint.value.copy(s.tint),p.uLift.value.copy(s.lift),p.uSat.value=s.sat,p.uContrast.value=s.contrast,p.uGlitch.value=this.glitch<.01?0:this.glitch,p.uFlash.value=n.flash<.002?0:n.flash,p.uVeil.value=n.veil,this.composer.render(e)}}at.registerPlugin(nt,Pl);const ts=matchMedia("(prefers-reduced-motion: reduce)").matches,KR=matchMedia("(pointer: coarse)").matches,ri=(r,e=document)=>e.querySelector(r),zs=(r,e=document)=>Array.from(e.querySelectorAll(r));"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);document.body.classList.add("is-loading");const Ar=new qR(ri("#webgl"),{high:!KR&&window.innerWidth>900}),eo=new xx(Ar);eo.update(0);let Ds=null;ts||(Ds=new vx({lerp:.09,wheelMultiplier:.9}),Ds.on("scroll",nt.update),Ds.stop());at.ticker.lagSmoothing(0);at.ticker.add((r,e)=>{Ds?.raf(r*1e3),eo.update(window.scrollY),Ar.tick(e/1e3),ZR.style.opacity=String(Math.min(Math.max((Ar.flash-.55)/.35,0),1)),QR()});const Sb=r=>{Ds?Ds.scrollTo(r,{duration:2,easing:e=>1-Math.pow(1-e,4)}):typeof r=="number"?window.scrollTo({top:r}):(typeof r=="string"?ri(r):r).scrollIntoView()};zs("[data-scroll-to]").forEach(r=>r.addEventListener("click",e=>{const t=r.getAttribute("href");t?.startsWith("#")&&(e.preventDefault(),Sb(t==="#top"?0:t))}));window.addEventListener("pointermove",r=>{Ar.setPointer(r.clientX/window.innerWidth*2-1,r.clientY/window.innerHeight*2-1)});let Xg=0;window.addEventListener("resize",()=>{Ar.resize(),clearTimeout(Xg),Xg=window.setTimeout(()=>{nt.refresh(),eo.measure()},200)});nt.addEventListener("refresh",()=>eo.measure());const YR=ri(".hud__fill"),JR=ri(".hud__pct"),qg=ri(".hud__where"),jR=ri(".hud__coords"),$R=ri(".nav"),ZR=ri(".sync__text");let Kg=-1,Lu=0;function QR(){const r=document.documentElement.scrollHeight-window.innerHeight,e=window.scrollY,t=r>0?e/r:0,n=Math.round(t*100);n!==Kg&&(Kg=n,YR.style.transform=`scaleX(${t})`,JR.textContent=`${String(n).padStart(3,"0")}%`),Math.abs(e-Lu)>4&&($R.classList.toggle("is-hidden",e>Lu&&e>200),Lu=e)}const eC=ri(".hud");eo.onChange=(r,e)=>{eC.classList.toggle("is-off",r.dataset.hud==="off"),r.dataset.where&&r.dataset.where!==qg.textContent&&(lm(qg,r.dataset.where),lm(jR,r.dataset.coords??"",1.1)),e&&!ts&&af[r.dataset.shot]?.mood!==af[e.dataset.shot]?.mood&&Ar.pulse(.85)};async function tC(){const r=ri(".loader__pct"),e=ri(".loader__bar span"),t={v:0},n=()=>{r.textContent=String(Math.round(t.v)).padStart(3,"0"),e.style.transform=`scaleX(${t.v/100})`};at.set(".loader__diamond",{strokeDasharray:290,strokeDashoffset:290}),at.set(".loader__key",{strokeDasharray:120,strokeDashoffset:120}),at.timeline().to(".loader__diamond",{strokeDashoffset:0,duration:1.6,ease:"power2.inOut"}).to(".loader__key",{strokeDashoffset:0,duration:1.2,ease:"power2.inOut"},.5).to(".loader__log li",{opacity:1,duration:.3,stagger:.55},.3),await Promise.all([Ar.load(s=>at.to(t,{v:s*96,duration:.5,overwrite:!0,onUpdate:n})),document.fonts.ready]),await at.to(t,{v:100,duration:.4,ease:"power2.out",onUpdate:n}),iC(),rC(),at.timeline({defaults:{ease:"expo.inOut"}}).to(".loader__center",{scale:.92,opacity:0,duration:.7,ease:"power2.in"}).to(".loader__log, .loader__note",{opacity:0,duration:.4},0).to(".loader",{clipPath:"inset(0% 0% 100% 0%)",duration:1.3},.45).set(".loader",{display:"none"}).to(Ar.intro,{dark:0,duration:ts?.4:1.6,ease:"power2.out"},.5).to(Ar.intro,{t:0,duration:ts?.01:3.4,ease:"power3.inOut"},.5).add(()=>{document.body.classList.remove("is-loading"),Ds?.start()},1.4).add(nC(),1)}function nC(){const r=at.timeline(),e=Pl.create(".hero__title .line",{type:"chars"}).chars;return r.from(e,{yPercent:110,rotate:8,duration:1.4,ease:"expo.out",stagger:.035}).from(".hero .reveal-up",{y:26,opacity:0,duration:1,ease:"power3.out",stagger:.12},.4).from(".nav > *",{y:-30,opacity:0,duration:1,ease:"power3.out",stagger:.08},.5).from(".hud > *",{opacity:0,duration:1.2,stagger:.15},.8).from(".hero__scroll",{opacity:0,duration:1},1.2),r}function iC(){zs(".split").forEach(r=>{const e=Pl.create(r,{type:"lines",mask:"lines",linesClass:"line"});ts||at.from(e.lines,{yPercent:115,duration:1.3,ease:"expo.out",stagger:.09,scrollTrigger:{trigger:r.closest(".room")??r,start:r.closest(".room")?"top 45%":"top 82%",toggleActions:"play none none reverse"}})}),zs(".pips").forEach(r=>{r.innerHTML=Array.from({length:5},()=>"<i></i>").join("")})}function rC(){const r=Pl.create("[data-words]",{type:"words",wordsClass:"word"}).words;at.to(r,{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:".idea",start:"top 35%",end:"45% 50%",scrub:ts?!1:.6}}),at.from(".pillar",{y:50,opacity:0,duration:1.1,ease:"power3.out",stagger:.12,scrollTrigger:{trigger:".pillars",start:"top 85%"}});const e=ri(".marquee__track"),t=at.to(e,{xPercent:-50,duration:26,ease:"none",repeat:-1});if(ts)t.pause();else{const i=at.quickTo(e,"skewX",{duration:.5,ease:"power3.out"});nt.create({trigger:".marquee",start:"top bottom",end:"bottom top",onUpdate:s=>{const a=s.getVelocity();t.timeScale(1+Math.min(Math.abs(a)/400,5)),i(Math.max(Math.min(a/-300,8),-8)),at.to(t,{timeScale:1,duration:1.2,overwrite:!0,delay:.1})}})}zs(".room").forEach(i=>{at.timeline({scrollTrigger:{trigger:i,start:"top 45%",toggleActions:"play none none reverse"}}).from(i.querySelector(".room__index"),{opacity:0,y:20,duration:.8,ease:"power3.out"}).from(i.querySelector(".room__story"),{opacity:0,y:24,duration:1,ease:"power3.out"},.25).from(i.querySelectorAll(".room__meta li"),{opacity:0,y:16,duration:.7,stagger:.08,ease:"power3.out"},.4).to(Array.from(i.querySelectorAll(".pips i")).slice(0,Number(i.querySelector(".pips")?.dataset.level??0)),{backgroundColor:"#d6262c",duration:.25,stagger:.12},.7).from(i.querySelector(".btn"),{opacity:0,y:16,duration:.8,ease:"power3.out"},.7)}),at.from(".door__note",{opacity:0,y:30,duration:1,ease:"power3.out",scrollTrigger:{trigger:".door",start:"top 30%"}});const n=ri(".steps__line path");at.fromTo(n,{strokeDasharray:1e3,strokeDashoffset:1e3},{strokeDashoffset:0,ease:"none",scrollTrigger:{trigger:".steps",start:"top 80%",end:"top 30%",scrub:ts?!1:.8}}),at.from(".step",{y:50,opacity:0,duration:1,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:".steps",start:"top 80%"}}),at.from(".booker",{y:60,opacity:0,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:".book",start:"top 70%"}}),at.from(".board tbody tr",{x:-30,opacity:0,duration:.8,stagger:.08,ease:"power3.out",scrollTrigger:{trigger:".board",start:"top 80%"}}),zs("[data-time]").forEach(i=>{const[s,a]=i.dataset.time.split(":").map(Number),o=s*60+a,l={v:0};at.to(l,{v:o,duration:1.8,ease:"power3.out",scrollTrigger:{trigger:".board",start:"top 80%"},onUpdate:()=>{const c=Math.round(l.v);i.textContent=`${String(Math.floor(c/60)).padStart(2,"0")}:${String(c%60).padStart(2,"0")}`}})}),at.from(".faq details",{y:30,opacity:0,duration:.9,stagger:.07,ease:"power3.out",scrollTrigger:{trigger:".faq",start:"top 80%"}}),at.from(".final .label, .final .btn",{opacity:0,y:24,duration:1,stagger:.2,ease:"power3.out",scrollTrigger:{trigger:".final",start:"top 40%"}}),at.from(".footer__mark",{yPercent:40,opacity:0,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:".footer",start:"top 85%"}}),nt.refresh(),eo.measure()}zs(".faq details").forEach(r=>{const e=r.querySelector(":scope > div");r.querySelector("summary").addEventListener("click",t=>{t.preventDefault(),r.open?at.to(e,{height:0,duration:.5,ease:"power3.inOut",onComplete:()=>r.removeAttribute("open")}):(r.setAttribute("open",""),at.fromTo(e,{height:0},{height:"auto",duration:.6,ease:"power3.out"}))})});const sC=wx(ri(".booker"));zs("[data-room]").forEach(r=>r.addEventListener("click",e=>{e.preventDefault(),sC.select(r.dataset.room),Sb("#book")}));Ex();Ax();tC();
