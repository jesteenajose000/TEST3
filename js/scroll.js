/*!
 * ScrollTrigger 3.4.0
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function G(e){return e}function H(){return"undefined"!=typeof window}function I(){return Ce||H()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce}function J(e){return!!~i.indexOf(e)}function K(e,t){return~He.indexOf(e)&&He[He.indexOf(e)+1][t]}function L(t,e){var r=e.s,n=e.sc,o=g.indexOf(t),i=~o?g[o+1]:K(t,r)||(J(t)?n:function(e){return arguments.length?t[r]=e:t[r]});return~o||g.push(t,i),i}function M(e){return K(e,"getBoundingClientRect")||(J(e)?function(){return ut.width=Pe.innerWidth,ut.height=Pe.innerHeight,ut}:function(){return ot(e)})}function P(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return(r="scroll"+n)&&(i=K(e,r))?i()-M(e)()[o]:J(e)?Math.max(Ee[r],Re[r])-(Pe["inner"+n]||Ee["client"+n]||Re["client"+n]):e[r]-e["offset"+n]}function Q(e,t){for(var r=0;r<p.length;r+=3)t&&!~t.indexOf(p[r+1])||e(p[r],p[r+1],p[r+2])}function R(e){return"string"==typeof e}function S(e){return"function"==typeof e}function T(e){return"number"==typeof e}function U(e){return"object"==typeof e}function na(e){return Pe.getComputedStyle(e)}function pa(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function ra(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function ta(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function ua(e,t,r){return e.addEventListener(t,r,{passive:!0})}function va(e,t,r){return e.removeEventListener(t,r)}function za(e,t){if(R(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;n&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in w?w[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Aa(e,t,r,n,o,i,a){var s=o.startColor,l=o.endColor,c=o.fontSize,u=o.indent,f=o.fontWeight,p=Oe.createElement("div"),d=J(r)||"fixed"===K(r,"pinType"),g=-1!==e.indexOf("scroller"),h=d?Re:r,v=-1!==e.indexOf("start"),m=v?s:l,b="border-color:"+m+";font-size:"+c+";color:"+m+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+(g&&d?"fixed;":"absolute;"),!g&&d||(b+=(n===nt?y:x)+":"+(i+parseFloat(u))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e),p.style.cssText=b,p.innerText=t||0===t?e+"-"+t:e,h.insertBefore(p,h.children[0]),p._offset=p["offset"+n.op.d2],k(p,0,n,v),p}function Ea(){return n=n||s(B)}function Fa(){n||(n=s(B),Ke||E("scrollStart"),Ke=Je())}function Ga(){return!Fe&&a.restart(!0)}function Ma(e){var t=Ce.ticker.frame,r=[],n=0;if(d!==t){for(F();n<O.length;n+=2)Pe.matchMedia(O[n]).matches?r.push(n):F(1,O[n]);for(z(),n=0;n<r.length;n++)Ge=O[r[n]],O[r[n]+1](e);N(Ge=0,1),d=t}}function Na(){return va($,"scrollEnd",Na)||N(!0)}function Wa(e,t,r){if(ct(r),e.parentNode===t){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}}function Xa(e,t,r){if(e.parentNode!==t){for(var n,o=W.length,i=t.style,a=e.style;o--;)i[n=W[o]]=r[n];i.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(i.display="inline-block"),a[x]=a[y]="auto",i.overflow="visible",i.boxSizing="border-box",i[Ue]=ra(e,rt)+tt,i[$e]=ra(e,nt)+tt,i[Ve]=a[Ze]=a[m]=a[v]="0",a[Ue]=r[Ue],a[$e]=r[$e],a[Ve]=r[Ve],e.parentNode.insertBefore(t,e),t.appendChild(e)}}function $a(e){for(var t=X.length,r=e.style,n=[],o=0;o<t;o++)n.push(X[o],r[X[o]]);return n.t=e,n}function bb(e,t,r,n,o,i,a,s,l,c,u,f){if(S(e)&&(e=e(s)),R(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?za("0"+e.substr(3),r):0)),T(e))a&&k(a,r,n,!0);else{S(t)&&(t=t(s));var p,d,g,h=Ae(t)[0]||Re,v=ot(h)||{},m=e.split(" ");v&&(v.left||v.top)||"none"!==na(h).display||(g=h.style.display,h.style.display="block",v=ot(h),g?h.style.display=g:h.style.removeProperty("display")),p=za(m[0],v[n.d]),d=za(m[1]||"0",r),e=v[n.p]-l[n.p]-c+p+o-d,a&&k(a,d,n,r-d<20||a._isStart&&20<d),r-=r-d}if(i){var b=e+r,y=i._isStart;f="scroll"+n.d2,k(i,b,n,y&&20<b||!y&&(u?Math.max(Re[f],Ee[f]):i.parentNode[f])<=b+1),u&&(l=ot(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+tt))}return Math.round(e)}function eb(l,e){var c,u=L(l,e),f="_scroll"+e.p2;return l[f]=u,function getTween(e,t,r,n,o){var i=getTween.tween,a=t.onComplete,s={};return i&&i.kill(),c=u(),t[f]=e,(t.modifiers=s)[f]=function(e){return 7<Math.abs(u()-c)?(i.kill(),getTween.tween=0,e=u()):n&&(e=r+n*i.ratio+o*i.ratio*i.ratio),c=Math.round(e)},t.onComplete=function(){getTween.tween=0,a&&a.call(i)},i=getTween.tween=Ce.to(l,t)}}var Ce,o,Pe,Oe,Ee,Re,i,a,s,n,Ae,ze,Le,l,Fe,Ie,c,Ne,u,f,p,Be,Ge,d,We=1,He=[],g=[],Je=Date.now,h=Je(),Ke=0,Xe=1,De=Math.abs,t="scrollLeft",r="scrollTop",v="left",m="top",y="right",x="bottom",Ue="width",$e="height",qe="Right",Qe="Left",je="Top",Ye="Bottom",Ve="padding",Ze="margin",et="Width",b="Height",tt="px",rt={s:t,p:v,p2:Qe,os:y,os2:qe,d:Ue,d2:et,a:"x",sc:function sc(e){return arguments.length?Pe.scrollTo(e,nt.sc()):Pe.pageXOffset||Oe[t]||Ee[t]||Re[t]||0}},nt={s:r,p:m,p2:je,os:x,os2:Ye,d:$e,d2:b,a:"y",op:rt,sc:function sc(e){return arguments.length?Pe.scrollTo(rt.sc(),e):Pe.pageYOffset||Oe[r]||Ee[r]||Re[r]||0}},ot=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==na(e)[c]&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},it={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},at={toggleActions:"play",anticipatePin:0},w={top:0,left:0,center:.5,bottom:1,right:1},k=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?1:0,o["border"+i+et]=1,o["border"+a+et]=0,o[r.p]=t,Ce.set(e,o)},st=[],lt={},_={},C=[],O=[],E=function _dispatch(e){return _[e]&&_[e].map(function(e){return e()})||C},A=[],z=function _revertRecorded(e){for(var t=0;t<A.length;t+=4)e&&A[t+3]!==e||(A[t].style.cssText=A[t+1],A[t+2].uncache=1)},F=function _revertAll(e,t){var r;for(Ne=0;Ne<st.length;Ne++)r=st[Ne],t&&r.media!==t||(e?r.kill(1):(r.scroll.rec||(r.scroll.rec=r.scroll()),r.revert()));z(t),t||E("revert")},N=function _refreshAll(e,t){if(!Ke||e){var r=E("refreshInit");for(t||F(),Ne=0;Ne<st.length;Ne++)st[Ne].refresh();for(r.forEach(function(e){return e&&e.render&&e.render(-1)}),Ne=st.length;Ne--;)st[Ne].scroll.rec=0;E("refresh")}else ua($,"scrollEnd",Na)},B=function _updateAll(){var e=st.length,t=Je(),r=50<=t-h;for(r&&(Ke&&!Ie&&200<t-Ke&&(Ke=0,E("scrollEnd")),Le=h,h=t),Ne=0;Ne<e;Ne++)st[Ne]&&st[Ne].update(0,r);n=0},W=[v,m,x,y,Ze+Ye,Ze+qe,Ze+je,Ze+Qe,"display","flexShrink"],X=W.concat([Ue,$e,"boxSizing","max"+et,"max"+b,"position",Ze,Ve,Ve+je,Ve+qe,Ve+Ye,Ve+Qe]),D=/([A-Z])/g,ct=function _setState(e){if(e)for(var t,r,n=e.t.style,o=e.length,i=0;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(D,"-$1").toLowerCase())},ut={left:0,top:0},ft=/(?:webkit|moz|length)/i;rt.op=nt;var $=(ScrollTrigger.prototype.init=function init(m,b){if(this.progress=0,this.vars&&this.kill(1),Xe){var d,r,c,y,x,w,k,_,C,O,E,A,e,z,F,I,N,B,t,W,g,H,X,h,D,v,$,n,q,Q,j,Y,o,u,V,Z,ee,te,re,ne=(m=pa(R(m)||T(m)||m.nodeType?{trigger:m}:m,at)).horizontal?rt:nt,oe=m.onUpdate,ie=m.toggleClass,i=m.id,ae=m.onToggle,se=m.onRefresh,a=m.scrub,le=m.trigger,ce=m.pin,ue=m.pinSpacing,fe=m.invalidateOnRefresh,pe=m.anticipatePin,s=m.onScrubComplete,f=m.onSnapComplete,de=m.once,ge=m.snap,he=m.pinReparent,ve=!a&&0!==a,me=Ae(m.scroller||Pe)[0],l=Ce.core.getCache(me),p=J(me),be=p||"fixed"===K(me,"pinType"),ye=[m.onEnter,m.onLeave,m.onEnterBack,m.onLeaveBack],xe=ve&&(de?"play":m.toggleActions).split(" "),Se="markers"in m?m.markers:at.markers,Te=p?0:parseFloat(na(me)["border"+ne.p2+et])||0,we=this,ke=m.onRefreshInit&&function(){return m.onRefreshInit(we)},Me=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=K(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Pe["inner"+o]:e["client"+o])||0}}(me,p,ne),_e=function _getOffsetsFunc(e,t){return!t||~He.indexOf(e)?M(e):function(){return ut}}(me,p);we.media=Ge,pe*=45,st.push(we),we.scroller=me,we.scroll=L(me,ne),x=we.scroll(),we.vars=m,b=b||m.animation,l.tweenScroll=l.tweenScroll||{top:eb(me,nt),left:eb(me,rt)},we.tweenTo=d=l.tweenScroll[ne.p],b&&(b.vars.lazy=!1,b._initted||!1!==b.vars.immediateRender&&!1!==m.immediateRender&&b.render(0,!0,!0),we.animation=b.pause(),b.scrollTrigger=we,(o=T(a)&&a)&&(Y=Ce.to(b,{ease:"power3",duration:o,onComplete:function onComplete(){return s&&s(we)}})),q=0,i=i||b.vars.id),ge&&(U(ge)||(ge={snapTo:ge}),Ce.set(p?[Re,Ee]:me,{scrollBehavior:"auto"}),c=S(ge.snapTo)?ge.snapTo:"labels"===ge.snapTo?function _getLabels(i){return function(e){var t,r=[],n=i.labels,o=i.duration();for(t in n)r.push(n[t]/o);return Ce.utils.snap(r,e)}}(b):Ce.utils.snap(ge.snapTo),u=ge.duration||{min:.1,max:2},u=U(u)?ze(u.min,u.max):ze(u,u),V=Ce.delayedCall(ge.delay||o/2||.1,function(){if(!Ke||Ke===j&&!Ie){var e=b&&!ve?b.totalProgress():we.progress,t=(e-Q)/(Je()-Le)*1e3||0,r=De(t/2)*t/.185,n=e+r,o=ze(0,1,c(n,we)),i=o-e-r,a=we.scroll(),s=Math.round(k+o*z),l=d.tween;if(a<=_&&k<=a){if(l&&!l._initted){if(l.data<=Math.abs(s-a))return;l.kill()}d(s,{duration:u(De(.185*Math.max(De(n-e),De(o-e))/t/.05||0)),ease:ge.ease||"power3",data:Math.abs(s-a),onComplete:function onComplete(){q=Q=b&&!ve?b.totalProgress():we.progress,f&&f(we)}},k+e*z,r*z,i*z)}}else V.restart(!0)}).pause()),i&&(lt[i]=we),le=we.trigger=Ae(le||ce)[0],ce=!0===ce?le:Ae(ce)[0],R(ie)&&(ie={targets:le,className:ie}),ce&&(!1===ue||ue===Ze||(ue="flex"!==na(ce.parentNode).display&&Ve),we.pin=ce,!1!==m.force3D&&Ce.set(ce,{force3D:!0}),(r=Ce.core.getCache(ce)).spacer?F=r.pinState:(r.spacer=B=Oe.createElement("div"),B.setAttribute("class","pin-spacer"+(i?" pin-spacer-"+i:"")),r.pinState=F=$a(ce)),we.spacer=B=r.spacer,n=na(ce),h=n[ue+ne.os2],W=Ce.getProperty(ce),g=Ce.quickSetter(ce,ne.a,tt),Xa(ce,B,n),N=$a(ce)),Se&&(e=U(Se)?pa(Se,it):it,E=Aa("scroller-start",i,me,ne,e,0),A=Aa("scroller-end",i,me,ne,e,0,E),t=E["offset"+ne.op.d2],C=Aa("start",i,me,ne,e,t),O=Aa("end",i,me,ne,e,t),be||(function _makePositionable(e){e.style.position="absolute"===na(e).position?"absolute":"relative"}(me),Ce.set([E,A],{force3D:!0}),v=Ce.quickSetter(E,ne.a,tt),$=Ce.quickSetter(A,ne.a,tt))),we.revert=function(e){var t=!1!==e,r=Fe;t!==y&&(t&&(te=Math.max(we.scroll(),we.scroll.rec||0),ee=we.progress,re=b&&b.progress(),C&&[C,O,E,A].forEach(function(e){return e.style.display="none"})),Fe=1,we.update(t),Fe=r,ce&&t&&Wa(ce,B,F),y=t)},we.refresh=function(e){if(!Fe&&Z)if(ce&&e&&Ke)ua(ScrollTrigger,"scrollEnd",Na);else{Fe=1,Y&&Y.kill(),fe&&b&&b.progress(0).invalidate(),y||we.revert();var t,r,n,o,i,a,s,l=Me(),c=_e(),u=P(me,ne),f=0,p=0,d=m.end,g=m.endTrigger||le,h=m.start||(ce||!le?"0 0":"0 100%"),v=ce&&Math.max(0,st.indexOf(we))||0;if(v)for(a=v;a--;)st[a].pin===ce&&st[a].revert();if(k=bb(h,le,l,ne,we.scroll(),C,E,we,c,Te,be,u)||(ce?-.001:0),S(d)&&(d=d(we)),R(d)&&!d.indexOf("+=")&&(~d.indexOf(" ")?d=(R(h)?h.split(" ")[0]:"")+d:(f=za(d.substr(2),l),d=R(h)?h:k+f,g=le)),_=Math.max(k,bb(d||(g?"100% 0":u),g,l,ne,we.scroll()+f,O,A,we,c,Te,be,u))||-.001,z=_-k||(k-=.01)&&.001,ce){for(a=v;a--;)(s=st[a]).pin===ce&&s.start-s._pinPush<k&&(p+=s.end-s.start);if(k+=p,_+=p,we._pinPush=p,C&&p&&((t={})[ne.a]="+="+p,Ce.set([C,O],t)),t=na(ce),o=ne===nt,n=we.scroll(),H=parseFloat(W(ne.a))+p,Xa(ce,B,t),N=$a(ce),r=ot(ce,!0),ue&&(B.style[ue+ne.os2]=z+p+tt,(D=ue===Ve?ra(ce,ne)+z+p:0)&&(B.style[ne.d]=D+tt),be&&we.scroll(te)),be&&((i={top:r.top+(o?n-k:0)+tt,left:r.left+(o?0:n-k)+tt,boxSizing:"border-box",position:"fixed"})[Ue]=i.maxWidth=Math.ceil(r.width)+tt,i[$e]=i.maxHeight=Math.ceil(r.height)+tt,i[Ze]=i[Ze+je]=i[Ze+qe]=i[Ze+Ye]=i[Ze+Qe]="0",i[Ve]=t[Ve],i[Ve+je]=t[Ve+je],i[Ve+qe]=t[Ve+qe],i[Ve+Ye]=t[Ve+Ye],i[Ve+Qe]=t[Ve+Qe],I=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(F,i,he)),b?(b.progress(1,!0),X=W(ne.a)-H+z+p,z!==X&&I.splice(I.length-2,2),b.progress(0,!0)):X=z,v)for(a=0;a<v;a++)st[a].pin===ce&&st[a].revert(!1)}else if(le&&we.scroll())for(r=le.parentNode;r&&r!==Re;)r._pinOffset&&(k-=r._pinOffset,_-=r._pinOffset),r=r.parentNode;we.start=k,we.end=_,(x=w=we.scroll())<te&&we.scroll(te),we.revert(!1),Fe=0,re&&ve&&b.progress(re,!0),ee!==we.progress&&(Y&&b.totalProgress(ee,!0),we.progress=ee,we.update()),ce&&ue&&(B._pinOffset=Math.round(we.progress*X)),se&&se(we)}},we.getVelocity=function(){return(we.scroll()-w)/(Je()-Le)*1e3||0},we.update=function(e,t){var r,n,o,i,a,s=we.scroll(),l=e?0:(s-k)/z,c=l<0?0:1<l?1:l||0,u=we.progress;if(t&&(w=x,x=s,ge&&(Q=q,q=b&&!ve?b.totalProgress():c)),pe&&!c&&ce&&!Fe&&!We&&Ke&&k<s+(s-w)/(Je()-Le)*pe&&(c=1e-4),c!==u&&Z){if(i=(a=(r=we.isActive=!!c&&c<1)!=(!!u&&u<1))||!!c!=!!u,we.direction=u<c?1:-1,we.progress=c,ve||(!Y||Fe||We?b&&b.totalProgress(c,!!Fe):(Y.vars.totalProgress=c,Y.invalidate().restart())),ce)if(e&&ue&&(B.style[ue+ne.os2]=h),be){if(i){if(o=!e&&u<c&&s<_+1&&s+1>=P(me,ne),he){if(!Fe&&(r||o)){var f=ot(ce,!0),p=s-k;ce.style.top=f.top+(ne===nt?p:0)+tt,ce.style.left=f.left+(ne===nt?0:p)+tt}!function _reparent(e,t){if(e.parentNode!==t){var r,n,o=e.style;if(t===Re)for(r in e._stOrig=o.cssText,n=na(e))+r||ft.test(r)||!n[r]||"string"!=typeof o[r]||"0"===r||(o[r]=n[r]);else o.cssText=e._stOrig;t.appendChild(e)}}(ce,Fe||!r&&!o?B:Re)}ct(r||o?I:N),X!==z&&c<1&&r||g(H+(1!==c||o?0:X))}}else g(H+X*c);!ge||d.tween||Fe||We||(j=Ke,V.restart(!0)),ie&&a&&(!de||r)&&Ae(ie.targets).forEach(function(e){return e.classList[r?"add":"remove"](ie.className)}),!oe||ve||e||oe(we),i&&!Fe?(n=c&&!u?0:1===c?1:1===u?2:3,ve&&(o=!a&&"none"!==xe[n+1]&&xe[n+1]||xe[n],b&&("complete"===o||"reset"===o||o in b)&&("complete"===o?b.pause().totalProgress(1):"reset"===o?b.restart(!0).pause():b[o]()),oe&&oe(we)),!a&&Be||(ae&&a&&ae(we),ye[n]&&ye[n](we),de&&(1===c?we.kill():ye[n]=0),a||ye[n=1===c?1:3]&&ye[n](we))):ve&&oe&&!Fe&&oe(we)}$&&(v(s+(E._isFlipped?1:0)),$(s))},we.enable=function(){Z||(Z=!0,ua(me,"resize",Ga),ua(me,"scroll",Fa),ke&&ua(ScrollTrigger,"refreshInit",ke),b&&b.add?Ce.delayedCall(.01,we.refresh)&&(z=.01)&&(k=_=0):we.refresh())},we.disable=function(e){if(Z&&(!1!==e&&we.revert(),Z=we.isActive=!1,Y&&Y.pause(),ce&&Wa(ce,B,F),r&&(r.uncache=1),ke&&va(ScrollTrigger,"refreshInit",ke),V&&(V.pause(),d.tween&&d.tween.kill()),!p)){for(var t=st.length;t--;)if(st[t].scroller===me&&st[t]!==we)return;va(me,"resize",Ga),va(me,"scroll",Fa)}},we.kill=function(e){we.disable(e),i&&delete lt[i];var t=st.indexOf(we);st.splice(t,1),t===Ne&&Ne--,b&&(b.scrollTrigger=null,e&&b.render(-1),b.kill()),C&&[C,O,E,A].forEach(function(e){return e.parentNode.removeChild(e)}),r&&(r.uncache=1)},we.enable()}else this.update=this.refresh=this.kill=G},ScrollTrigger.register=function register(e){if(!o&&(Ce=e||I(),H()&&window.document&&(Pe=window,Oe=document,Ee=Oe.documentElement,Re=Oe.body),Ce&&(Ae=Ce.utils.toArray,ze=Ce.utils.clamp,Ce.core.globals("ScrollTrigger",ScrollTrigger),Re))){s=Pe.requestAnimationFrame||function(e){return setTimeout(e,16)},ua(Pe,"mousewheel",Fa),i=[Pe,Oe,Ee,Re],ua(Oe,"scroll",Fa);var t,r=Re.style,n=r.borderTop;r.borderTop="1px solid #000",t=ot(Re),nt.m=Math.round(t.top+nt.sc())||0,rt.m=Math.round(t.left+rt.sc())||0,n?r.borderTop=n:r.removeProperty("border-top"),l=setInterval(Ea,200),Ce.delayedCall(.5,function(){return We=0}),ua(Oe,"touchcancel",G),ua(Re,"touchstart",G),ta(ua,Oe,"pointerdown,touchstart,mousedown",function(){return Ie=1}),ta(ua,Oe,"pointerup,touchend,mouseup",function(){return Ie=0}),c=Ce.utils.checkPrefix("transform"),X.push(c),o=Je(),a=Ce.delayedCall(.2,N).pause(),p=[Oe,"visibilitychange",function(){var e=Pe.innerWidth,t=Pe.innerHeight;Oe.hidden?(u=e,f=t):u===e&&f===t||Ga()},Oe,"DOMContentLoaded",N,Pe,"load",function(){return Ke||N()},Pe,"resize",Ga],Q(ua)}return o},ScrollTrigger.defaults=function defaults(e){for(var t in e)at[t]=e[t]},ScrollTrigger.kill=function kill(){Xe=0,st.slice(0).forEach(function(e){return e.kill(1)})},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(Be=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(l)||(l=t)&&setInterval(Ea,t),"autoRefreshEvents"in e&&(Q(va)||Q(ua,e.autoRefreshEvents||"none"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=Ae(e)[0];J(r)?He.unshift(Pe,t,Re,t,Ee,t):He.unshift(r,t)},ScrollTrigger.matchMedia=function matchMedia(e){var t,r;for(r in e)"all"===r?(e[Ge=r](),Ge=0):(t=Pe.matchMedia(r))&&(O.push(r,e[r]),t.addListener?t.addListener(Ma):t.addEventListener("change",Ma));return Ma(),O},ScrollTrigger);function ScrollTrigger(e,t){o||ScrollTrigger.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}$.version="3.4.0",$.saveStyles=function(e){return e?Ae(e).forEach(function(e){var t=A.indexOf(e);0<=t&&A.splice(t,4),A.push(e,e.style.cssText,Ce.core.getCache(e),Ge)}):A},$.revert=function(e,t){return F(!e,t)},$.create=function(e,t){return new $(e,t)},$.refresh=function(e){return e?Ga():N(!0)},$.update=B,$.maxScroll=function(e,t){return P(e,t?rt:nt)},$.getScrollFunc=function(e,t){return L(Ae(e)[0],t?rt:nt)},$.getById=function(e){return lt[e]},$.getAll=function(){return st.slice(0)},$.isScrolling=function(){return!!Ke},$.addEventListener=function(e,t){var r=_[e]||(_[e]=[]);~r.indexOf(t)||r.push(t)},$.removeEventListener=function(e,t){var r=_[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},$.batch=function(e,t){function Ih(e,t){var r=[],n=[],o=Ce.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&S(t[r])&&"onRefreshInit"!==r?Ih(0,t[r]):t[r];return S(a)&&(a=a(),ua($,"refresh",function(){return a=t.batchMax()})),Ae(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push($.create(t))}),n},I()&&Ce.registerPlugin($),e.ScrollTrigger=$,e.default=$;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});