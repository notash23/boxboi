import{L as zt,F as td,c as ed,g as at,b as qu,d as Uu,e as nd,f as rd,h as id,S as sd,i as od,C as ad,r as ya,j as ud,k as Ts,l as cd,m as ld}from"./index-b86d13f2.js";var hd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,Js=Js||{},x=hd||self;function Pi(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function _r(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function dd(n){return Object.prototype.hasOwnProperty.call(n,as)&&n[as]||(n[as]=++fd)}var as="closure_uid_"+(1e9*Math.random()>>>0),fd=0;function md(n,t,e){return n.call.apply(n.bind,arguments)}function gd(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function It(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=md:It=gd,It.apply(null,arguments)}function qr(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ct(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function ce(){this.s=this.s,this.o=this.o}var pd=0;ce.prototype.s=!1;ce.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),pd!=0)&&dd(this)};ce.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zu=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Zs(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Ia(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Pi(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Tt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var _d=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{x.addEventListener("test",()=>{},t),x.removeEventListener("test",()=>{},t)}catch{}return n}();function Yn(n){return/^[\s\xa0]*$/.test(n)}function Si(){var n=x.navigator;return n&&(n=n.userAgent)?n:""}function kt(n){return Si().indexOf(n)!=-1}function to(n){return to[" "](n),n}to[" "]=function(){};function yd(n,t){var e=hf;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var Id=kt("Opera"),en=kt("Trident")||kt("MSIE"),Gu=kt("Edge"),Es=Gu||en,Ku=kt("Gecko")&&!(Si().toLowerCase().indexOf("webkit")!=-1&&!kt("Edge"))&&!(kt("Trident")||kt("MSIE"))&&!kt("Edge"),Td=Si().toLowerCase().indexOf("webkit")!=-1&&!kt("Edge");function ju(){var n=x.document;return n?n.documentMode:void 0}var ws;t:{var us="",cs=function(){var n=Si();if(Ku)return/rv:([^\);]+)(\)|;)/.exec(n);if(Gu)return/Edge\/([\d\.]+)/.exec(n);if(en)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Td)return/WebKit\/(\S+)/.exec(n);if(Id)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(cs&&(us=cs?cs[1]:""),en){var ls=ju();if(ls!=null&&ls>parseFloat(us)){ws=String(ls);break t}}ws=us}var vs;if(x.document&&en){var Ta=ju();vs=Ta||parseInt(ws,10)||void 0}else vs=void 0;var Ed=vs;function Xn(n,t){if(Tt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Ku){t:{try{to(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:wd[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Xn.$.h.call(this)}}ct(Xn,Tt);var wd={2:"touch",3:"pen",4:"mouse"};Xn.prototype.h=function(){Xn.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var yr="closure_listenable_"+(1e6*Math.random()|0),vd=0;function Ad(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++vd,this.fa=this.ia=!1}function Vi(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function eo(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function Rd(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function $u(n){const t={};for(const e in n)t[e]=n[e];return t}const Ea="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qu(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<Ea.length;s++)e=Ea[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Ci(n){this.src=n,this.g={},this.h=0}Ci.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Rs(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Ad(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function As(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=zu(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Vi(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Rs(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var no="closure_lm_"+(1e6*Math.random()|0),hs={};function Wu(n,t,e,r,i){if(r&&r.once)return Yu(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Wu(n,t[s],e,r,i);return null}return e=so(e),n&&n[yr]?n.O(t,e,_r(r)?!!r.capture:!!r,i):Hu(n,t,e,!1,r,i)}function Hu(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=_r(i)?!!i.capture:!!i,a=io(n);if(a||(n[no]=a=new Ci(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=Pd(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)_d||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(Ju(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Pd(){function n(e){return t.call(n.src,n.listener,e)}const t=Sd;return n}function Yu(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Yu(n,t[s],e,r,i);return null}return e=so(e),n&&n[yr]?n.P(t,e,_r(r)?!!r.capture:!!r,i):Hu(n,t,e,!0,r,i)}function Xu(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Xu(n,t[s],e,r,i);else r=_r(r)?!!r.capture:!!r,e=so(e),n&&n[yr]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Rs(s,e,r,i),-1<e&&(Vi(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=io(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Rs(t,e,r,i)),(e=-1<n?t[n]:null)&&ro(e))}function ro(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[yr])As(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(Ju(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=io(t))?(As(e,n),e.h==0&&(e.src=null,t[no]=null)):Vi(n)}}}function Ju(n){return n in hs?hs[n]:hs[n]="on"+n}function Sd(n,t){if(n.fa)n=!0;else{t=new Xn(t,this);var e=n.listener,r=n.la||n.src;n.ia&&ro(n),n=e.call(r,t)}return n}function io(n){return n=n[no],n instanceof Ci?n:null}var ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function so(n){return typeof n=="function"?n:(n[ds]||(n[ds]=function(t){return n.handleEvent(t)}),n[ds])}function ut(){ce.call(this),this.i=new Ci(this),this.S=this,this.J=null}ct(ut,ce);ut.prototype[yr]=!0;ut.prototype.removeEventListener=function(n,t,e,r){Xu(this,n,t,e,r)};function mt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new Tt(t,n);else if(t instanceof Tt)t.target=t.target||n;else{var i=t;t=new Tt(r,n),Qu(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=Ur(o,r,!0,t)&&i}if(o=t.g=n,i=Ur(o,r,!0,t)&&i,i=Ur(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=Ur(o,r,!1,t)&&i}ut.prototype.N=function(){if(ut.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Vi(e[r]);delete n.g[t],n.h--}}this.J=null};ut.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};ut.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Ur(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,u=o.la||o.src;o.ia&&As(n.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var oo=x.JSON.stringify;class Vd{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Cd(){var n=ao;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Dd{constructor(){this.h=this.g=null}add(t,e){const r=Zu.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var Zu=new Vd(()=>new xd,n=>n.reset());class xd{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function bd(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function Nd(n){x.setTimeout(()=>{throw n},0)}let Jn,Zn=!1,ao=new Dd,tc=()=>{const n=x.Promise.resolve(void 0);Jn=()=>{n.then(kd)}};var kd=()=>{for(var n;n=Cd();){try{n.h.call(n.g)}catch(e){Nd(e)}var t=Zu;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}Zn=!1};function Di(n,t){ut.call(this),this.h=n||1,this.g=t||x,this.j=It(this.qb,this),this.l=Date.now()}ct(Di,ut);v=Di.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),mt(this,"tick"),this.ga&&(uo(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function uo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}v.N=function(){Di.$.N.call(this),uo(this),delete this.g};function co(n,t,e){if(typeof n=="function")e&&(n=It(n,e));else if(n&&typeof n.handleEvent=="function")n=It(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:x.setTimeout(n,t||0)}function ec(n){n.g=co(()=>{n.g=null,n.i&&(n.i=!1,ec(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Md extends ce{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ec(this)}N(){super.N(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tr(n){ce.call(this),this.h=n,this.g={}}ct(tr,ce);var wa=[];function nc(n,t,e,r){Array.isArray(e)||(e&&(wa[0]=e.toString()),e=wa);for(var i=0;i<e.length;i++){var s=Wu(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function rc(n){eo(n.g,function(t,e){this.g.hasOwnProperty(e)&&ro(t)},n),n.g={}}tr.prototype.N=function(){tr.$.N.call(this),rc(this)};tr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xi(){this.g=!0}xi.prototype.Ea=function(){this.g=!1};function Fd(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function Od(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function Ye(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Bd(n,e)+(r?" "+r:"")})}function Ld(n,t){n.info(function(){return"TIMEOUT: "+t})}xi.prototype.info=function(){};function Bd(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return oo(e)}catch{return t}}var Fe={},va=null;function bi(){return va=va||new ut}Fe.Ta="serverreachability";function ic(n){Tt.call(this,Fe.Ta,n)}ct(ic,Tt);function er(n){const t=bi();mt(t,new ic(t))}Fe.STAT_EVENT="statevent";function sc(n,t){Tt.call(this,Fe.STAT_EVENT,n),this.stat=t}ct(sc,Tt);function wt(n){const t=bi();mt(t,new sc(t,n))}Fe.Ua="timingevent";function oc(n,t){Tt.call(this,Fe.Ua,n),this.size=t}ct(oc,Tt);function Ir(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){n()},t)}var Ni={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ac={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lo(){}lo.prototype.h=null;function Aa(n){return n.h||(n.h=n.i())}function uc(){}var Tr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ho(){Tt.call(this,"d")}ct(ho,Tt);function fo(){Tt.call(this,"c")}ct(fo,Tt);var Ps;function ki(){}ct(ki,lo);ki.prototype.g=function(){return new XMLHttpRequest};ki.prototype.i=function(){return{}};Ps=new ki;function Er(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new tr(this),this.P=qd,n=Es?125:void 0,this.V=new Di(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new cc}function cc(){this.i=null,this.g="",this.h=!1}var qd=45e3,Ss={},oi={};v=Er.prototype;v.setTimeout=function(n){this.P=n};function Vs(n,t,e){n.L=1,n.v=Fi(jt(t)),n.s=e,n.S=!0,lc(n,null)}function lc(n,t){n.G=Date.now(),wr(n),n.A=jt(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),yc(e.i,"t",r),n.C=0,e=n.l.J,n.h=new cc,n.g=Bc(n.l,e?t:null,!n.s),0<n.O&&(n.M=new Md(It(n.Pa,n,n.g),n.O)),nc(n.U,n.g,"readystatechange",n.nb),t=n.I?$u(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),er(),Fd(n.j,n.u,n.A,n.m,n.W,n.s)}v.nb=function(n){n=n.target;const t=this.M;t&&Mt(n)==3?t.l():this.Pa(n)};v.Pa=function(n){try{if(n==this.g)t:{const l=Mt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Es||this.g&&(this.h.h||this.g.ja()||Va(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?er(3):er(2)),Mi(this);var e=this.g.da();this.ca=e;e:if(hc(this)){var r=Va(this.g);n="";var i=r.length,s=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){we(this),Kn(this);var o="";break e}this.h.i=new x.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Od(this.j,this.u,this.A,this.m,this.W,l,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Yn(a)){var c=a;break e}}c=null}if(e=c)Ye(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cs(this,e);else{this.i=!1,this.o=3,wt(12),we(this),Kn(this);break t}}this.S?(dc(this,l,o),Es&&this.i&&l==3&&(nc(this.U,this.V,"tick",this.mb),this.V.start())):(Ye(this.j,this.m,o,null),Cs(this,o)),l==4&&we(this),this.i&&!this.J&&(l==4?Mc(this.l,this):(this.i=!1,wr(this)))}else uf(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,wt(12)):(this.o=0,wt(13)),we(this),Kn(this)}}}catch{}finally{}};function hc(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function dc(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=Ud(n,e),i==oi){t==4&&(n.o=4,wt(14),r=!1),Ye(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Ss){n.o=4,wt(15),Ye(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else Ye(n.j,n.m,i,null),Cs(n,i);hc(n)&&i!=oi&&i!=Ss&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,wt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Io(t),t.M=!0,wt(11))):(Ye(n.j,n.m,e,"[Invalid Chunked Response]"),we(n),Kn(n))}v.mb=function(){if(this.g){var n=Mt(this.g),t=this.g.ja();this.C<t.length&&(Mi(this),dc(this,n,t),this.i&&n!=4&&wr(this))}};function Ud(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?oi:(e=Number(t.substring(e,r)),isNaN(e)?Ss:(r+=1,r+e>t.length?oi:(t=t.slice(r,r+e),n.C=r+e,t)))}v.cancel=function(){this.J=!0,we(this)};function wr(n){n.Y=Date.now()+n.P,fc(n,n.P)}function fc(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ir(It(n.lb,n),t)}function Mi(n){n.B&&(x.clearTimeout(n.B),n.B=null)}v.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Ld(this.j,this.A),this.L!=2&&(er(),wt(17)),we(this),this.o=2,Kn(this)):fc(this,this.Y-n)};function Kn(n){n.l.H==0||n.J||Mc(n.l,n)}function we(n){Mi(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,uo(n.V),rc(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Cs(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Ds(e.i,n))){if(!n.K&&Ds(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)ci(e),Bi(e);else break t;yo(e),wt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Ir(It(e.ib,e),6e3));if(1>=Ec(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else ve(e,11)}else if((n.K||e.g==n)&&ci(e),!Yn(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const l=c[3];l!=null&&(e.ra=l,e.l.info("VER="+e.ra));const h=c[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const m=n.g;if(m){const E=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(mo(s,s.h),s.h=null))}if(r.F){const y=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,j(r.I,r.F,y))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Lc(r,r.J?r.pa:null,r.Y),o.K){wc(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Mi(a),wr(a)),r.g=o}else Nc(r);0<e.j.length&&qi(e)}else c[0]!="stop"&&c[0]!="close"||ve(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ve(e,7):_o(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}er(4)}catch{}}function zd(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Pi(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Gd(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Pi(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function mc(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Pi(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Gd(n),r=zd(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var gc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kd(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Re(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Re){this.h=n.h,ai(this,n.j),this.s=n.s,this.g=n.g,ui(this,n.m),this.l=n.l;var t=n.i,e=new nr;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Ra(this,e),this.o=n.o}else n&&(t=String(n).match(gc))?(this.h=!1,ai(this,t[1]||"",!0),this.s=Bn(t[2]||""),this.g=Bn(t[3]||"",!0),ui(this,t[4]),this.l=Bn(t[5]||"",!0),Ra(this,t[6]||"",!0),this.o=Bn(t[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}Re.prototype.toString=function(){var n=[],t=this.j;t&&n.push(qn(t,Pa,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(qn(t,Pa,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(qn(e,e.charAt(0)=="/"?Qd:$d,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",qn(e,Hd)),n.join("")};function jt(n){return new Re(n)}function ai(n,t,e){n.j=e?Bn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function ui(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Ra(n,t,e){t instanceof nr?(n.i=t,Yd(n.i,n.h)):(e||(t=qn(t,Wd)),n.i=new nr(t,n.h))}function j(n,t,e){n.i.set(t,e)}function Fi(n){return j(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Bn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function qn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,jd),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function jd(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Pa=/[#\/\?@]/g,$d=/[#\?:]/g,Qd=/[#\?]/g,Wd=/[#\?@]/g,Hd=/#/g;function nr(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function le(n){n.g||(n.g=new Map,n.h=0,n.i&&Kd(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}v=nr.prototype;v.add=function(n,t){le(this),this.i=null,n=In(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function pc(n,t){le(n),t=In(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function _c(n,t){return le(n),t=In(n,t),n.g.has(t)}v.forEach=function(n,t){le(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};v.ta=function(){le(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};v.Z=function(n){le(this);let t=[];if(typeof n=="string")_c(this,n)&&(t=t.concat(this.g.get(In(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};v.set=function(n,t){return le(this),this.i=null,n=In(this,n),_c(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};v.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function yc(n,t,e){pc(n,t),0<e.length&&(n.i=null,n.g.set(In(n,t),Zs(e)),n.h+=e.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function In(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Yd(n,t){t&&!n.j&&(le(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(pc(this,r),yc(this,i,e))},n)),n.j=t}var Xd=class{constructor(n,t){this.g=n,this.map=t}};function Ic(n){this.l=n||Jd,x.PerformanceNavigationTiming?(n=x.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(x.g&&x.g.Ka&&x.g.Ka()&&x.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Jd=10;function Tc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Ec(n){return n.h?1:n.g?n.g.size:0}function Ds(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function mo(n,t){n.g?n.g.add(t):n.h=t}function wc(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Ic.prototype.cancel=function(){if(this.i=vc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function vc(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Zs(n.i)}var Zd=class{stringify(n){return x.JSON.stringify(n,void 0)}parse(n){return x.JSON.parse(n,void 0)}};function tf(){this.g=new Zd}function ef(n,t,e){const r=e||"";try{mc(n,function(i,s){let o=i;_r(i)&&(o=oo(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function nf(n,t){const e=new xi;if(x.Image){const r=new Image;r.onload=qr(zr,e,r,"TestLoadImage: loaded",!0,t),r.onerror=qr(zr,e,r,"TestLoadImage: error",!1,t),r.onabort=qr(zr,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=qr(zr,e,r,"TestLoadImage: timeout",!1,t),x.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function zr(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function vr(n){this.l=n.ec||null,this.j=n.ob||!1}ct(vr,lo);vr.prototype.g=function(){return new Oi(this.l,this.j)};vr.prototype.i=function(n){return function(){return n}}({});function Oi(n,t){ut.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=go,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(Oi,ut);var go=0;v=Oi.prototype;v.open=function(n,t){if(this.readyState!=go)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,rr(this)};v.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||x).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ar(this)),this.readyState=go};v.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,rr(this)),this.g&&(this.readyState=3,rr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ac(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Ac(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}v.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Ar(this):rr(this),this.readyState==3&&Ac(this)}};v.Za=function(n){this.g&&(this.response=this.responseText=n,Ar(this))};v.Ya=function(n){this.g&&(this.response=n,Ar(this))};v.ka=function(){this.g&&Ar(this)};function Ar(n){n.readyState=4,n.l=null,n.j=null,n.A=null,rr(n)}v.setRequestHeader=function(n,t){this.v.append(n,t)};v.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function rr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var rf=x.JSON.parse;function X(n){ut.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rc,this.L=this.M=!1}ct(X,ut);var Rc="",sf=/^https?$/i,of=["POST","PUT"];v=X.prototype;v.Oa=function(n){this.M=n};v.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ps.g(),this.C=this.u?Aa(this.u):Aa(Ps),this.g.onreadystatechange=It(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Sa(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=x.FormData&&n instanceof x.FormData,!(0<=zu(of,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Vc(this),0<this.B&&((this.L=af(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.ua,this)):this.A=co(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Sa(this,s)}};function af(n){return en&&typeof n.timeout=="number"&&n.ontimeout!==void 0}v.ua=function(){typeof Js<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mt(this,"timeout"),this.abort(8))};function Sa(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Pc(n),Li(n)}function Pc(n){n.F||(n.F=!0,mt(n,"complete"),mt(n,"error"))}v.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,mt(this,"complete"),mt(this,"abort"),Li(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Li(this,!0)),X.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?Sc(this):this.kb())};v.kb=function(){Sc(this)};function Sc(n){if(n.h&&typeof Js<"u"&&(!n.C[1]||Mt(n)!=4||n.da()!=2)){if(n.v&&Mt(n)==4)co(n.La,0,n);else if(mt(n,"readystatechange"),Mt(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(gc)[1]||null;!i&&x.self&&x.self.location&&(i=x.self.location.protocol.slice(0,-1)),r=!sf.test(i?i.toLowerCase():"")}e=r}if(e)mt(n,"complete"),mt(n,"success");else{n.m=6;try{var s=2<Mt(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Pc(n)}}finally{Li(n)}}}}function Li(n,t){if(n.g){Vc(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||mt(n,"ready");try{e.onreadystatechange=r}catch{}}}function Vc(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(x.clearTimeout(n.A),n.A=null)}v.isActive=function(){return!!this.g};function Mt(n){return n.g?n.g.readyState:0}v.da=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),rf(t)}};function Va(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Rc:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function uf(n){const t={};n=(n.g&&2<=Mt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Yn(n[r]))continue;var e=bd(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}Rd(t,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Cc(n){let t="";return eo(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function po(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Cc(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):j(n,t,e))}function bn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Dc(n){this.Ga=0,this.j=[],this.l=new xi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bn("baseRetryDelayMs",5e3,n),this.hb=bn("retryDelaySeedMs",1e4,n),this.eb=bn("forwardChannelMaxRetries",2,n),this.xa=bn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Ic(n&&n.concurrentRequestLimit),this.Ja=new tf,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=Dc.prototype;v.ra=8;v.H=1;function _o(n){if(xc(n),n.H==3){var t=n.W++,e=jt(n.I);if(j(e,"SID",n.K),j(e,"RID",t),j(e,"TYPE","terminate"),Rr(n,e),t=new Er(n,n.l,t),t.L=2,t.v=Fi(jt(e)),e=!1,x.navigator&&x.navigator.sendBeacon)try{e=x.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&x.Image&&(new Image().src=t.v,e=!0),e||(t.g=Bc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),wr(t)}Oc(n)}function Bi(n){n.g&&(Io(n),n.g.cancel(),n.g=null)}function xc(n){Bi(n),n.u&&(x.clearTimeout(n.u),n.u=null),ci(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&x.clearTimeout(n.m),n.m=null)}function qi(n){if(!Tc(n.i)&&!n.m){n.m=!0;var t=n.Na;Jn||tc(),Zn||(Jn(),Zn=!0),ao.add(t,n),n.C=0}}function cf(n,t){return Ec(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Ir(It(n.Na,n,t),Fc(n,n.C)),n.C++,!0)}v.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Er(this,this.l,n);let s=this.s;if(this.U&&(s?(s=$u(s),Qu(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=bc(this,i,t),e=jt(this.I),j(e,"RID",n),j(e,"CVER",22),this.F&&j(e,"X-HTTP-Session-Id",this.F),Rr(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(Cc(s)))+"&"+t:this.o&&po(e,this.o,s)),mo(this.i,i),this.bb&&j(e,"TYPE","init"),this.P?(j(e,"$req",t),j(e,"SID","null"),i.aa=!0,Vs(i,e,null)):Vs(i,e,t),this.H=2}}else this.H==3&&(n?Ca(this,n):this.j.length==0||Tc(this.i)||Ca(this))};function Ca(n,t){var e;t?e=t.m:e=n.W++;const r=jt(n.I);j(r,"SID",n.K),j(r,"RID",e),j(r,"AID",n.V),Rr(n,r),n.o&&n.s&&po(r,n.o,n.s),e=new Er(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=bc(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),mo(n.i,e),Vs(e,r,t)}function Rr(n,t){n.na&&eo(n.na,function(e,r){j(t,r,e)}),n.h&&mc({},function(e,r){j(t,r,e)})}function bc(n,t,e){e=Math.min(n.j.length,e);var r=n.h?It(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<e;u++){let c=i[u].g;const l=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{ef(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Nc(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;Jn||tc(),Zn||(Jn(),Zn=!0),ao.add(t,n),n.A=0}}function yo(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Ir(It(n.Ma,n),Fc(n,n.A)),n.A++,!0)}v.Ma=function(){if(this.u=null,kc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Ir(It(this.jb,this),n)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,wt(10),Bi(this),kc(this))};function Io(n){n.B!=null&&(x.clearTimeout(n.B),n.B=null)}function kc(n){n.g=new Er(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=jt(n.wa);j(t,"RID","rpc"),j(t,"SID",n.K),j(t,"AID",n.V),j(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&j(t,"TO",n.qa),j(t,"TYPE","xmlhttp"),Rr(n,t),n.o&&n.s&&po(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=Fi(jt(t)),e.s=null,e.S=!0,lc(e,n)}v.ib=function(){this.v!=null&&(this.v=null,Bi(this),yo(this),wt(19))};function ci(n){n.v!=null&&(x.clearTimeout(n.v),n.v=null)}function Mc(n,t){var e=null;if(n.g==t){ci(n),Io(n),n.g=null;var r=2}else if(Ds(n.i,t))e=t.F,wc(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=bi(),mt(r,new oc(r,e)),qi(n)}else Nc(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&cf(n,t)||r==2&&yo(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:ve(n,5);break;case 4:ve(n,10);break;case 3:ve(n,6);break;default:ve(n,2)}}}function Fc(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function ve(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=It(n.pb,n);e||(e=new Re("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||ai(e,"https"),Fi(e)),nf(e.toString(),r)}else wt(2);n.H=0,n.h&&n.h.za(t),Oc(n),xc(n)}v.pb=function(n){n?(this.l.info("Successfully pinged google.com"),wt(2)):(this.l.info("Failed to ping google.com"),wt(1))};function Oc(n){if(n.H=0,n.ma=[],n.h){const t=vc(n.i);(t.length!=0||n.j.length!=0)&&(Ia(n.ma,t),Ia(n.ma,n.j),n.i.i.length=0,Zs(n.j),n.j.length=0),n.h.ya()}}function Lc(n,t,e){var r=e instanceof Re?jt(e):new Re(e);if(r.g!="")t&&(r.g=t+"."+r.g),ui(r,r.m);else{var i=x.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Re(null);r&&ai(s,r),t&&(s.g=t),i&&ui(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&j(r,e,t),j(r,"VER",n.ra),Rr(n,r),r}function Bc(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new X(new vr({ob:!0})):new X(n.va),t.Oa(n.J),t}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function qc(){}v=qc.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function li(){if(en&&!(10<=Number(Ed)))throw Error("Environmental error: no available transport.")}li.prototype.g=function(n,t){return new St(n,t)};function St(n,t){ut.call(this),this.g=new Dc(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!Yn(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Yn(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new Tn(this)}ct(St,ut);St.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;wt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Lc(n,null,n.Y),qi(n)};St.prototype.close=function(){_o(this.g)};St.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=oo(n),n=e);t.j.push(new Xd(t.fb++,n)),t.H==3&&qi(t)};St.prototype.N=function(){this.g.h=null,delete this.j,_o(this.g),delete this.g,St.$.N.call(this)};function Uc(n){ho.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}ct(Uc,ho);function zc(){fo.call(this),this.status=1}ct(zc,fo);function Tn(n){this.g=n}ct(Tn,qc);Tn.prototype.Ba=function(){mt(this.g,"a")};Tn.prototype.Aa=function(n){mt(this.g,new Uc(n))};Tn.prototype.za=function(n){mt(this.g,new zc)};Tn.prototype.ya=function(){mt(this.g,"b")};function lf(){this.blockSize=-1}function bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ct(bt,lf);bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function fs(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}bt.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)fs(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){fs(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){fs(this,r),i=0;break}}this.h=i,this.i+=t};bt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function q(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var hf={};function To(n){return-128<=n&&128>n?yd(n,function(t){return new q([t|0],0>t?-1:0)}):new q([n|0],0>n?-1:0)}function Ft(n){if(isNaN(n)||!isFinite(n))return Xe;if(0>n)return dt(Ft(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=xs;return new q(t,0)}function Gc(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return dt(Gc(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Ft(Math.pow(t,8)),r=Xe,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=Ft(Math.pow(t,s)),r=r.R(s).add(Ft(o))):(r=r.R(e),r=r.add(Ft(o)))}return r}var xs=4294967296,Xe=To(0),bs=To(1),Da=To(16777216);v=q.prototype;v.ea=function(){if(Dt(this))return-dt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:xs+r)*t,t*=xs}return n};v.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Gt(this))return"0";if(Dt(this))return"-"+dt(this).toString(n);for(var t=Ft(Math.pow(n,6)),e=this,r="";;){var i=di(e,t).g;e=hi(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,Gt(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};v.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Gt(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function Dt(n){return n.h==-1}v.X=function(n){return n=hi(this,n),Dt(n)?-1:Gt(n)?0:1};function dt(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new q(e,~n.h).add(bs)}v.abs=function(){return Dt(this)?dt(this):this};v.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new q(e,e[e.length-1]&-2147483648?-1:0)};function hi(n,t){return n.add(dt(t))}v.R=function(n){if(Gt(this)||Gt(n))return Xe;if(Dt(this))return Dt(n)?dt(this).R(dt(n)):dt(dt(this).R(n));if(Dt(n))return dt(this.R(dt(n)));if(0>this.X(Da)&&0>n.X(Da))return Ft(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,u=n.D(i)&65535;e[2*r+2*i]+=o*u,Gr(e,2*r+2*i),e[2*r+2*i+1]+=s*u,Gr(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,Gr(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,Gr(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new q(e,0)};function Gr(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Nn(n,t){this.g=n,this.h=t}function di(n,t){if(Gt(t))throw Error("division by zero");if(Gt(n))return new Nn(Xe,Xe);if(Dt(n))return t=di(dt(n),t),new Nn(dt(t.g),dt(t.h));if(Dt(t))return t=di(n,dt(t)),new Nn(dt(t.g),t.h);if(30<n.g.length){if(Dt(n)||Dt(t))throw Error("slowDivide_ only works with positive integers.");for(var e=bs,r=t;0>=r.X(n);)e=xa(e),r=xa(r);var i=Ue(e,1),s=Ue(r,1);for(r=Ue(r,2),e=Ue(e,2);!Gt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=Ue(r,1),e=Ue(e,1)}return t=hi(n,i.R(t)),new Nn(i,t)}for(i=Xe;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ft(e),o=s.R(t);Dt(o)||0<o.X(n);)e-=r,s=Ft(e),o=s.R(t);Gt(s)&&(s=bs),i=i.add(s),n=hi(n,o)}return new Nn(i,n)}v.gb=function(n){return di(this,n).h};v.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new q(e,this.h&n.h)};v.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new q(e,this.h|n.h)};v.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new q(e,this.h^n.h)};function xa(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new q(e,n.h)}function Ue(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new q(i,n.h)}li.prototype.createWebChannel=li.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;Ni.NO_ERROR=0;Ni.TIMEOUT=8;Ni.HTTP_ERROR=6;ac.COMPLETE="complete";uc.EventType=Tr;Tr.OPEN="a";Tr.CLOSE="b";Tr.ERROR="c";Tr.MESSAGE="d";ut.prototype.listen=ut.prototype.O;X.prototype.listenOnce=X.prototype.P;X.prototype.getLastError=X.prototype.Sa;X.prototype.getLastErrorCode=X.prototype.Ia;X.prototype.getStatus=X.prototype.da;X.prototype.getResponseJson=X.prototype.Wa;X.prototype.getResponseText=X.prototype.ja;X.prototype.send=X.prototype.ha;X.prototype.setWithCredentials=X.prototype.Oa;bt.prototype.digest=bt.prototype.l;bt.prototype.reset=bt.prototype.reset;bt.prototype.update=bt.prototype.j;q.prototype.add=q.prototype.add;q.prototype.multiply=q.prototype.R;q.prototype.modulo=q.prototype.gb;q.prototype.compare=q.prototype.X;q.prototype.toNumber=q.prototype.ea;q.prototype.toString=q.prototype.toString;q.prototype.getBits=q.prototype.D;q.fromNumber=Ft;q.fromString=Gc;var df=function(){return new li},ff=function(){return bi()},ms=Ni,mf=ac,gf=Fe,ba={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},pf=vr,Kr=uc,_f=X,yf=bt,Je=q;const Na="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let En="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new ud("@firebase/firestore");function $e(){return re.logLevel}function Xp(n){re.setLogLevel(n)}function p(n,...t){if(re.logLevel<=zt.DEBUG){const e=t.map(Eo);re.debug(`Firestore (${En}): ${n}`,...e)}}function J(n,...t){if(re.logLevel<=zt.ERROR){const e=t.map(Eo);re.error(`Firestore (${En}): ${n}`,...e)}}function Vt(n,...t){if(re.logLevel<=zt.WARN){const e=t.map(Eo);re.warn(`Firestore (${En}): ${n}`,...e)}}function Eo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n="Unexpected state"){const t=`FIRESTORE (${En}) INTERNAL ASSERTION FAILED: `+n;throw J(t),new Error(t)}function R(n,t){n||A()}function Jp(n,t){n||A()}function T(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends td{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class If{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ot.UNAUTHENTICATED))}shutdown(){}}class Tf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ef{constructor(t){this.t=t,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rt)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(R(typeof r.accessToken=="string"),new Kc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new ot(t)}}class wf{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vf{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new wf(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Af{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,p("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(R(typeof e.token=="string"),this.R=e.token,new jc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class Zp{getToken(){return Promise.resolve(new jc(""))}invalidateToken(){}start(t,e){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Rf(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function D(n,t){return n<t?-1:n>t?1:0}function nn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}function Qc(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new _(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new _(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new _(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return H.fromMillis(Date.now())}static fromDate(t){return H.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new H(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new H(0,0))}static max(){return new P(new H(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e,r){e===void 0?e=0:e>t.length&&A(),r===void 0?r=t.length-e:r>t.length-e&&A(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ir.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ir?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends ir{construct(t,e,r){return new F(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new _(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new F(e)}static emptyPath(){return new F([])}}const Pf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends ir{construct(t,e,r){return new Q(t,e,r)}static isValidIdentifier(t){return Pf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new _(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new _(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new _(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new _(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Q(e)}static emptyPath(){return new Q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(F.fromString(t))}static fromName(t){return new w(F.fromString(t).popFirst(5))}static empty(){return new w(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&F.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new F(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e,r,i){this.indexId=t,this.collectionGroup=e,this.fields=r,this.indexState=i}}function Ns(n){return n.fields.find(t=>t.kind===2)}function _e(n){return n.fields.filter(t=>t.kind!==2)}function Sf(n,t){let e=D(n.collectionGroup,t.collectionGroup);if(e!==0)return e;for(let r=0;r<Math.min(n.fields.length,t.fields.length);++r)if(e=Vf(n.fields[r],t.fields[r]),e!==0)return e;return D(n.fields.length,t.fields.length)}rn.UNKNOWN_ID=-1;class Pe{constructor(t,e){this.fieldPath=t,this.kind=e}}function Vf(n,t){const e=Q.comparator(n.fieldPath,t.fieldPath);return e!==0?e:D(n.kind,t.kind)}class sn{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new sn(0,Ct.min())}}function Wc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=P.fromTimestamp(r===1e9?new H(e+1,0):new H(e,r));return new Ct(i,w.empty(),t)}function Hc(n){return new Ct(n.readTime,n.key,-1)}class Ct{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ct(P.min(),w.empty(),-1)}static max(){return new Ct(P.max(),w.empty(),-1)}}function wo(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=w.comparator(n.documentKey,t.documentKey),e!==0?e:D(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==Yc)throw n;p("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof f?e:f.resolve(e)}catch(e){return f.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):f.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):f.reject(e)}static resolve(t){return new f((e,r)=>{e(t)})}static reject(t){return new f((e,r)=>{r(t)})}static waitFor(t){return new f((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},u=>r(u))}),o=!0,s===i&&e()})}static or(t){let e=f.resolve(!1);for(const r of t)e=e.next(i=>i?f.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new f((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;e(t[c]).next(l=>{o[c]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,e){return new f((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new rt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new jn(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=vo(r.target.error);this.V.reject(new jn(t,i))}}static open(t,e,r,i){try{return new Ui(e,t.transaction(i,r))}catch(s){throw new jn(e,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Df(e)}}class xt{constructor(t,e,r){this.name=t,this.version=e,this.p=r,xt.S(Ts())===12.2&&J("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),ye(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!cd())return!1;if(xt.C())return!0;const t=Ts(),e=xt.S(t),r=0<e&&e<10,i=xt.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;e(o)},i.onblocked=()=>{r(new jn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new _(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new _(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new jn(t,o))},i.onupgradeneeded=s=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,i){const s=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Ui.open(this.db,t,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),f.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(p("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Cf{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return ye(this.k.delete())}}class jn extends _{constructor(t,e){super(g.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function de(n){return n.name==="IndexedDbTransactionError"}class Df{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(p("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),ye(r)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),ye(this.store.add(t))}get(t){return ye(this.store.get(t)).next(e=>(e===void 0&&(e=null),p("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),ye(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),ye(this.store.count())}W(t,e){const r=this.options(t,e);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new f((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new f((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,e){p("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const i=this.cursor(r);return this.G(i,e)}Z(t){const e=this.cursor({});return new f((r,i)=>{e.onerror=s=>{const o=vo(s.target.error);i(o)},e.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new f((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new Cf(a),c=e(a.primaryKey,a.value,u);if(c instanceof f){const l=c.catch(h=>(u.done(),f.reject(h)));r.push(l)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>f.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function ye(n){return new f((t,e)=>{n.onsuccess=r=>{const i=r.target.result;t(i)},n.onerror=r=>{const i=vo(r.target.error);e(i)}})}let ka=!1;function vo(n){const t=xt.S(Ts());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new _("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ka||(ka=!0,setTimeout(()=>{throw r},0)),r}}return n}class xf{constructor(t,e){this.asyncQueue=t,this.X=e,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(t){p("IndexBackiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{p("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(e){de(e)?p("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await he(e)}await this.ee(6e4)})}}class bf{constructor(t,e){this.localStore=t,this.persistence=e}async te(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.ne(e,t))}ne(t,e){const r=new Set;let i=e,s=!0;return f.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(o=>{if(o!==null&&!r.has(o))return p("IndexBackiller",`Processing collection: ${o}`),this.re(t,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>e-i)}re(t,e,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(i=>this.localStore.localDocuments.getNextDocuments(t,e,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(t,o).next(()=>this.ie(i,s)).next(a=>(p("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(t,e,a))).next(()=>o.size)}))}ie(t,e){let r=t;return e.changes.forEach((i,s)=>{const o=Hc(s);wo(o,r)>0&&(r=o)}),new Ct(r.readTime,r.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}At._e=-1;function Pr(n){return n==null}function sr(n){return n===0&&1/n==-1/0}function Jc(n){return typeof n=="number"&&Number.isInteger(n)&&!sr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ma(t)),t=Nf(n.get(e),t);return Ma(t)}function Nf(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":e+="";break;case"":e+="";break;default:e+=s}}return e}function Ma(n){return n+""}function Ot(n){const t=n.length;if(R(t>=2),t===2)return R(n.charAt(0)===""&&n.charAt(1)===""),F.emptyPath();const e=t-2,r=[];let i="";for(let s=0;s<t;){const o=n.indexOf("",s);switch((o<0||o>e)&&A(),n.charAt(o+1)){case"":const a=n.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:A()}s=o+2}return new F(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(n,t){return[n,Et(t)]}function Zc(n,t,e){return[n,Et(t),e]}const kf={},Mf=["prefixPath","collectionGroup","readTime","documentId"],Ff=["prefixPath","collectionGroup","documentId"],Of=["collectionGroup","readTime","prefixPath","documentId"],Lf=["canonicalId","targetId"],Bf=["targetId","path"],qf=["path","targetId"],Uf=["collectionId","parent"],zf=["indexId","uid"],Gf=["uid","sequenceNumber"],Kf=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],jf=["indexId","uid","orderedDocumentKey"],$f=["userId","collectionPath","documentId"],Qf=["userId","collectionPath","largestBatchId"],Wf=["userId","collectionGroup","largestBatchId"],tl=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Hf=[...tl,"documentOverlays"],el=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],nl=el,Yf=[...nl,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Xc{constructor(t,e){super(),this.ae=t,this.currentSequenceNumber=e}}function lt(n,t){const e=T(n);return xt.M(e.ae,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function fe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function rl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,e){this.comparator=t,this.root=e||ht.EMPTY}insert(t,e){return new z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(t){return new z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ht.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new jr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new jr(this.root,t,this.comparator,!1)}getReverseIterator(){return new jr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new jr(this.root,t,this.comparator,!0)}}class jr{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ht{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=s??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new ht(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,r,i,s){return this}insert(t,e,r){return new ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.comparator=t,this.data=new z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new La(this.data.getIterator())}getIteratorFrom(t){return new La(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof U)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new U(this.comparator);return e.data=t,e}}class La{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ze(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(Q.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new U(Q.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return nn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new il("Invalid base64 string: "+s):s}}(t);return new it(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new it(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}it.EMPTY_BYTE_STRING=new it("");const Xf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ie(n){if(R(!!n),typeof n=="string"){let t=0;const e=Xf.exec(n);if(R(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Y(n.seconds),nanos:Y(n.nanos)}}function Y(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $t(n){return typeof n=="string"?it.fromBase64String(n):it.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Gi(n){const t=n.mapValue.fields.__previous_value__;return zi(t)?Gi(t):t}function or(n){const t=ie(n.mapValue.fields.__local_write_time__.timestampValue);return new H(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t,e,r,i,s,o,a,u,c){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Se{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Se("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Se&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Jr={nullValue:"NULL_VALUE"};function se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zi(n)?4:sl(n)?9007199254740991:10:A()}function Ut(n,t){if(n===t)return!0;const e=se(n);if(e!==se(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return or(n).isEqual(or(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ie(i.timestampValue),a=ie(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return $t(i.bytesValue).isEqual($t(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return Y(i.geoPointValue.latitude)===Y(s.geoPointValue.latitude)&&Y(i.geoPointValue.longitude)===Y(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Y(i.integerValue)===Y(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Y(i.doubleValue),a=Y(s.doubleValue);return o===a?sr(o)===sr(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return nn(n.arrayValue.values||[],t.arrayValue.values||[],Ut);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Oa(o)!==Oa(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Ut(o[u],a[u])))return!1;return!0}(n,t);default:return A()}}function ar(n,t){return(n.values||[]).find(e=>Ut(e,t))!==void 0}function oe(n,t){if(n===t)return 0;const e=se(n),r=se(t);if(e!==r)return D(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Y(s.integerValue||s.doubleValue),u=Y(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,t);case 3:return Ba(n.timestampValue,t.timestampValue);case 4:return Ba(or(n),or(t));case 5:return D(n.stringValue,t.stringValue);case 6:return function(s,o){const a=$t(s),u=$t(o);return a.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=D(a[c],u[c]);if(l!==0)return l}return D(a.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=D(Y(s.latitude),Y(o.latitude));return a!==0?a:D(Y(s.longitude),Y(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const l=oe(a[c],u[c]);if(l)return l}return D(a.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===ne.mapValue&&o===ne.mapValue)return 0;if(s===ne.mapValue)return 1;if(o===ne.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const d=D(u[h],l[h]);if(d!==0)return d;const m=oe(a[u[h]],c[l[h]]);if(m!==0)return m}return D(u.length,l.length)}(n.mapValue,t.mapValue);default:throw A()}}function Ba(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return D(n,t);const e=ie(n),r=ie(t),i=D(e.seconds,r.seconds);return i!==0?i:D(e.nanos,r.nanos)}function on(n){return Ms(n)}function Ms(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ie(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return $t(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return w.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Ms(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ms(e.fields[o])}`;return i+"}"}(n.mapValue):A()}function Zr(n){switch(se(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Gi(n);return t?16+Zr(t):16;case 5:return 2*n.stringValue.length;case 6:return $t(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Zr(s),0)}(n.arrayValue);case 10:return function(r){let i=0;return fe(r.fields,(s,o)=>{i+=s.length+Zr(o)}),i}(n.mapValue);default:throw A()}}function Ve(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Fs(n){return!!n&&"integerValue"in n}function ur(n){return!!n&&"arrayValue"in n}function qa(n){return!!n&&"nullValue"in n}function Ua(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ti(n){return!!n&&"mapValue"in n}function $n(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return fe(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=$n(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=$n(n.arrayValue.values[e]);return t}return Object.assign({},n)}function sl(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Zf(n){return"nullValue"in n?Jr:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ve(Se.empty(),w.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:A()}function tm(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ve(Se.empty(),w.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?ne:A()}function za(n,t){const e=oe(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?-1:!n.inclusive&&t.inclusive?1:0}function Ga(n,t){const e=oe(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?1:!n.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.value=t}static empty(){return new ft({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ti(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=$n(e)}setAll(t){let e=Q.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=$n(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());ti(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ut(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];ti(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){fe(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new ft($n(this.value))}}function ol(n){const t=[];return fe(n.fields,(e,r)=>{const i=new Q([e]);if(ti(r)){const s=ol(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new $(t,0,P.min(),P.min(),P.min(),ft.empty(),0)}static newFoundDocument(t,e,r,i){return new $(t,1,e,P.min(),r,i,0)}static newNoDocument(t,e){return new $(t,2,e,P.min(),P.min(),ft.empty(),0)}static newUnknownDocument(t,e){return new $(t,3,e,P.min(),P.min(),ft.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof $&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e){this.position=t,this.inclusive=e}}function Ka(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=w.comparator(w.fromName(o.referenceValue),e.key):r=oe(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ja(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ut(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e="asc"){this.field=t,this.dir=e}}function em(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{}class N extends al{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new nm(t,e,r):e==="array-contains"?new sm(t,r):e==="in"?new fl(t,r):e==="not-in"?new om(t,r):e==="array-contains-any"?new am(t,r):new N(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new rm(t,r):new im(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(oe(e,this.value)):e!==null&&se(this.value)===se(e)&&this.matchesComparison(oe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class B extends al{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new B(t,e)}matches(t){return an(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function an(n){return n.op==="and"}function Os(n){return n.op==="or"}function Ao(n){return ul(n)&&an(n)}function ul(n){for(const t of n.filters)if(t instanceof B)return!1;return!0}function Ls(n){if(n instanceof N)return n.field.canonicalString()+n.op.toString()+on(n.value);if(Ao(n))return n.filters.map(t=>Ls(t)).join(",");{const t=n.filters.map(e=>Ls(e)).join(",");return`${n.op}(${t})`}}function cl(n,t){return n instanceof N?function(r,i){return i instanceof N&&r.op===i.op&&r.field.isEqual(i.field)&&Ut(r.value,i.value)}(n,t):n instanceof B?function(r,i){return i instanceof B&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&cl(o,i.filters[a]),!0):!1}(n,t):void A()}function ll(n,t){const e=n.filters.concat(t);return B.create(e,n.op)}function hl(n){return n instanceof N?function(e){return`${e.field.canonicalString()} ${e.op} ${on(e.value)}`}(n):n instanceof B?function(e){return e.op.toString()+" {"+e.getFilters().map(hl).join(" ,")+"}"}(n):"Filter"}class nm extends N{constructor(t,e,r){super(t,e,r),this.key=w.fromName(r.referenceValue)}matches(t){const e=w.comparator(t.key,this.key);return this.matchesComparison(e)}}class rm extends N{constructor(t,e){super(t,"in",e),this.keys=dl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class im extends N{constructor(t,e){super(t,"not-in",e),this.keys=dl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function dl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>w.fromName(r.referenceValue))}class sm extends N{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ur(e)&&ar(e.arrayValue,this.value)}}class fl extends N{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ar(this.value.arrayValue,e)}}class om extends N{constructor(t,e){super(t,"not-in",e)}matches(t){if(ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ar(this.value.arrayValue,e)}}class am extends N{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ur(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>ar(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Bs(n,t=null,e=[],r=[],i=null,s=null,o=null){return new um(n,t,e,r,i,s,o)}function Ce(n){const t=T(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ls(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Pr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>on(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>on(r)).join(",")),t.ce=e}return t.ce}function Sr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!em(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!cl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ja(n.startAt,t.startAt)&&ja(n.endAt,t.endAt)}function fi(n){return w.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function mi(n,t){return n.filters.filter(e=>e instanceof N&&e.field.isEqual(t))}function $a(n,t,e){let r=Jr,i=!0;for(const s of mi(n,t)){let o=Jr,a=!0;switch(s.op){case"<":case"<=":o=Zf(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Jr}za({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(e!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(t)){const o=e.position[s];za({value:r,inclusive:i},{value:o,inclusive:e.inclusive})<0&&(r=o,i=e.inclusive);break}}return{value:r,inclusive:i}}function Qa(n,t,e){let r=ne,i=!0;for(const s of mi(n,t)){let o=ne,a=!0;switch(s.op){case">=":case">":o=tm(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ne}Ga({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(e!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(t)){const o=e.position[s];Ga({value:r,inclusive:i},{value:o,inclusive:e.inclusive})>0&&(r=o,i=e.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ml(n,t,e,r,i,s,o,a){return new Qt(n,t,e,r,i,s,o,a)}function wn(n){return new Qt(n)}function Wa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ro(n){return n.collectionGroup!==null}function Ze(n){const t=T(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new U(Q.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new cr(s,r))}),e.has(Q.keyField().canonicalString())||t.le.push(new cr(Q.keyField(),r))}return t.le}function vt(n){const t=T(n);return t.he||(t.he=gl(t,Ze(n))),t.he}function gl(n,t){if(n.limitType==="F")return Bs(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new cr(i.field,s)});const e=n.endAt?new ae(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ae(n.startAt.position,n.startAt.inclusive):null;return Bs(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function qs(n,t){const e=n.filters.concat([t]);return new Qt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function gi(n,t,e){return new Qt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Vr(n,t){return Sr(vt(n),vt(t))&&n.limitType===t.limitType}function pl(n){return`${Ce(vt(n))}|lt:${n.limitType}`}function Qe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>hl(i)).join(", ")}]`),Pr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>on(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>on(i)).join(",")),`Target(${r})`}(vt(n))}; limitType=${n.limitType})`}function Cr(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):w.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of Ze(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Ka(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ze(r),i)||r.endAt&&!function(o,a,u){const c=Ka(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ze(r),i))}(n,t)}function _l(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yl(n){return(t,e)=>{let r=!1;for(const i of Ze(n)){const s=cm(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cm(n,t,e){const r=n.field.isKeyField()?w.comparator(t.key,e.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?oe(u,c):A()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){fe(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return rl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=new z(w.comparator);function Pt(){return lm}const Il=new z(w.comparator);function Un(...n){let t=Il;for(const e of n)t=t.insert(e.key,e);return t}function Tl(n){let t=Il;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Lt(){return Qn()}function El(){return Qn()}function Qn(){return new Wt(n=>n.toString(),(n,t)=>n.isEqual(t))}const hm=new z(w.comparator),dm=new U(w.comparator);function b(...n){let t=dm;for(const e of n)t=t.add(e);return t}const fm=new U(D);function Po(){return fm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sr(t)?"-0":t}}function vl(n){return{integerValue:""+n}}function Al(n,t){return Jc(t)?vl(t):wl(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this._=void 0}}function mm(n,t,e){return n instanceof un?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zi(s)&&(s=Gi(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof De?Pl(n,t):n instanceof xe?Sl(n,t):function(i,s){const o=Rl(i,s),a=Ha(o)+Ha(i.Ie);return Fs(o)&&Fs(i.Ie)?vl(a):wl(i.serializer,a)}(n,t)}function gm(n,t,e){return n instanceof De?Pl(n,t):n instanceof xe?Sl(n,t):e}function Rl(n,t){return n instanceof cn?function(r){return Fs(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class un extends Ki{}class De extends Ki{constructor(t){super(),this.elements=t}}function Pl(n,t){const e=Vl(t);for(const r of n.elements)e.some(i=>Ut(i,r))||e.push(r);return{arrayValue:{values:e}}}class xe extends Ki{constructor(t){super(),this.elements=t}}function Sl(n,t){let e=Vl(t);for(const r of n.elements)e=e.filter(i=>!Ut(i,r));return{arrayValue:{values:e}}}class cn extends Ki{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Ha(n){return Y(n.integerValue||n.doubleValue)}function Vl(n){return ur(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,e){this.field=t,this.transform=e}}function pm(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof De&&i instanceof De||r instanceof xe&&i instanceof xe?nn(r.elements,i.elements,Ut):r instanceof cn&&i instanceof cn?Ut(r.Ie,i.Ie):r instanceof un&&i instanceof un}(n.transform,t.transform)}class _m{constructor(t,e){this.version=t,this.transformResults=e}}class W{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new W}static exists(t){return new W(void 0,t)}static updateTime(t){return new W(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ei(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ji{}function Cl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new An(n.key,W.none()):new vn(n.key,n.data,W.none());{const e=n.data,r=ft.empty();let i=new U(Q.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ht(n.key,r,new Rt(i.toArray()),W.none())}}function ym(n,t,e){n instanceof vn?function(i,s,o){const a=i.value.clone(),u=Xa(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Ht?function(i,s,o){if(!ei(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Xa(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Dl(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Wn(n,t,e,r){return n instanceof vn?function(s,o,a,u){if(!ei(s.precondition,o))return a;const c=s.value.clone(),l=Ja(s.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ht?function(s,o,a,u){if(!ei(s.precondition,o))return a;const c=Ja(s.fieldTransforms,u,o),l=o.data;return l.setAll(Dl(s)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return ei(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Im(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=Rl(r.transform,i||null);s!=null&&(e===null&&(e=ft.empty()),e.set(r.field,s))}return e||null}function Ya(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&nn(r,i,(s,o)=>pm(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class vn extends ji{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ht extends ji{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Dl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Xa(n,t,e){const r=new Map;R(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,gm(o,a,e[i]))}return r}function Ja(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,mm(s,o,t))}return r}class An extends ji{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class So extends ji{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&ym(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Wn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Wn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=El();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const u=Cl(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),b())}isEqual(t){return this.batchId===t.batchId&&nn(this.mutations,t.mutations,(e,r)=>Ya(e,r))&&nn(this.baseMutations,t.baseMutations,(e,r)=>Ya(e,r))}}class Co{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){R(t.mutations.length===r.length);let i=function(){return hm}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Co(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,e,r){this.alias=t,this.aggregateType=e,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,M;function xl(n){switch(n){default:return A();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function bl(n){if(n===void 0)return J("GRPC error has no .code"),g.UNKNOWN;switch(n){case nt.OK:return g.OK;case nt.CANCELLED:return g.CANCELLED;case nt.UNKNOWN:return g.UNKNOWN;case nt.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case nt.INTERNAL:return g.INTERNAL;case nt.UNAVAILABLE:return g.UNAVAILABLE;case nt.UNAUTHENTICATED:return g.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case nt.NOT_FOUND:return g.NOT_FOUND;case nt.ALREADY_EXISTS:return g.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return g.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case nt.ABORTED:return g.ABORTED;case nt.OUT_OF_RANGE:return g.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return g.UNIMPLEMENTED;case nt.DATA_LOSS:return g.DATA_LOSS;default:return A()}}(M=nt||(nt={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new Je([4294967295,4294967295],0);function Za(n){const t=Nl().encode(n),e=new yf;return e.update(t),new Uint8Array(e.digest())}function tu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Je([e,r],0),new Je([i,s],0)]}class xo{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new zn(`Invalid padding: ${e}`);if(r<0)throw new zn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new zn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new zn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Je.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(Je.fromNumber(r)));return i.compare(wm)===1&&(i=new Je([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=Za(t),[r,i]=tu(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new xo(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=Za(t),[r,i]=tu(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class zn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,br.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new xr(P.min(),i,new z(D),Pt(),b())}}class br{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new br(r,e,b(),b(),b())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class kl{constructor(t,e){this.targetId=t,this.fe=e}}class Ml{constructor(t,e,r=it.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class eu{constructor(){this.ge=0,this.pe=ru(),this.ye=it.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=b(),e=b(),r=b();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:A()}}),new br(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=ru()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class vm{constructor(t){this.Le=t,this.ke=new Map,this.qe=Pt(),this.Qe=nu(),this.Ke=new z(D)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:A()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if(fi(s))if(r===0){const o=new w(s.path);this.We(e,o,$.newNoDocument(o,P.min()))}else R(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(e);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,c)}pi==null||pi.tt(function(l,h,d,m,E){var y,I,V,C,S,O;const K={localCacheCount:l,existenceFilterCount:h.count,databaseId:d.database,projectId:d.projectId},L=h.unchangedNames;return L&&(K.bloomFilter={applied:E===0,hashCount:(y=L==null?void 0:L.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(C=(V=(I=L==null?void 0:L.bits)===null||I===void 0?void 0:I.bitmap)===null||V===void 0?void 0:V.length)!==null&&C!==void 0?C:0,padding:(O=(S=L==null?void 0:L.bits)===null||S===void 0?void 0:S.padding)!==null&&O!==void 0?O:0,mightContain:pt=>{var Nt;return(Nt=m==null?void 0:m.mightContain(pt))!==null&&Nt!==void 0&&Nt}}),K}(o,t.fe,this.Le.nt(),a,u))}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=$t(r).toUint8Array()}catch(u){if(u instanceof il)return Vt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new xo(o,i,s)}catch(u){return Vt(u instanceof zn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&fi(a.target)){const u=new w(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,$.newNoDocument(u,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=b();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new xr(t,e,this.Ke,this.qe,r);return this.qe=Pt(),this.Qe=nu(),this.Ke=new z(D),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new eu,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new U(D),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||p("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new eu),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function nu(){return new z(w.comparator)}function ru(){return new z(w.comparator)}const Am=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Rm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Pm=(()=>({and:"AND",or:"OR"}))();class Sm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Us(n,t){return n.useProto3Json||Pr(t)?t:{value:t}}function ln(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Vm(n,t){return ln(n,t.toTimestamp())}function Z(n){return R(!!n),P.fromTimestamp(function(e){const r=ie(e);return new H(r.seconds,r.nanos)}(n))}function bo(n,t){return function(r){return new F(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function Ol(n){const t=F.fromString(n);return R(jl(t)),t}function lr(n,t){return bo(n.databaseId,t.path)}function Bt(n,t){const e=Ol(t);if(e.get(1)!==n.databaseId.projectId)throw new _(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new _(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new w(Bl(e))}function zs(n,t){return bo(n.databaseId,t)}function Ll(n){const t=Ol(n);return t.length===4?F.emptyPath():Bl(t)}function hr(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bl(n){return R(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function iu(n,t,e){return{name:lr(n,t),fields:e.value.mapValue.fields}}function ql(n,t,e){const r=Bt(n,t.name),i=Z(t.updateTime),s=t.createTime?Z(t.createTime):P.min(),o=new ft({mapValue:{fields:t.fields}}),a=$.newFoundDocument(r,i,s,o);return e&&a.setHasCommittedMutations(),e?a.setHasCommittedMutations():a}function Cm(n,t){return"found"in t?function(r,i){R(!!i.found),i.found.name,i.found.updateTime;const s=Bt(r,i.found.name),o=Z(i.found.updateTime),a=i.found.createTime?Z(i.found.createTime):P.min(),u=new ft({mapValue:{fields:i.found.fields}});return $.newFoundDocument(s,o,a,u)}(n,t):"missing"in t?function(r,i){R(!!i.missing),R(!!i.readTime);const s=Bt(r,i.missing),o=Z(i.readTime);return $.newNoDocument(s,o)}(n,t):A()}function Dm(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(R(l===void 0||typeof l=="string"),it.fromBase64String(l||"")):(R(l===void 0||l instanceof Uint8Array),it.fromUint8Array(l||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?g.UNKNOWN:bl(c.code);return new _(l,c.message||"")}(o);e=new Ml(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bt(n,r.document.name),s=Z(r.document.updateTime),o=r.document.createTime?Z(r.document.createTime):P.min(),a=new ft({mapValue:{fields:r.document.fields}}),u=$.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];e=new ni(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Bt(n,r.document),s=r.readTime?Z(r.readTime):P.min(),o=$.newNoDocument(i,s),a=r.removedTargetIds||[];e=new ni([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Bt(n,r.document),s=r.removedTargetIds||[];e=new ni([],s,i,null)}else{if(!("filter"in t))return A();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Em(i,s),a=r.targetId;e=new kl(a,o)}}return e}function dr(n,t){let e;if(t instanceof vn)e={update:iu(n,t.key,t.value)};else if(t instanceof An)e={delete:lr(n,t.key)};else if(t instanceof Ht)e={update:iu(n,t.key,t.data),updateMask:Fm(t.fieldMask)};else{if(!(t instanceof So))return A();e={verify:lr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof un)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof De)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xe)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof cn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw A()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Vm(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(n,t.precondition)),e}function Gs(n,t){const e=t.currentDocument?function(s){return s.updateTime!==void 0?W.updateTime(Z(s.updateTime)):s.exists!==void 0?W.exists(s.exists):W.none()}(t.currentDocument):W.none(),r=t.updateTransforms?t.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)R(a.setToServerValue==="REQUEST_TIME"),u=new un;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];u=new De(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];u=new xe(l)}else"increment"in a?u=new cn(o,a.increment):A();const c=Q.fromServerFormat(a.fieldPath);return new Dr(c,u)}(n,i)):[];if(t.update){t.update.name;const i=Bt(n,t.update.name),s=new ft({mapValue:{fields:t.update.fields}});if(t.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Rt(c.map(l=>Q.fromServerFormat(l)))}(t.updateMask);return new Ht(i,s,o,e,r)}return new vn(i,s,e,r)}if(t.delete){const i=Bt(n,t.delete);return new An(i,e)}if(t.verify){const i=Bt(n,t.verify);return new So(i,e)}return A()}function xm(n,t){return n&&n.length>0?(R(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?Z(i.updateTime):Z(s);return o.isEqual(P.min())&&(o=Z(s)),new _m(o,i.transformResults||[])}(e,t))):[]}function Ul(n,t){return{documents:[zs(n,t.path)]}}function No(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=zs(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=zs(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return Kl(B.create(u,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Zt(h.field),direction:Nm(h.dir)}}(c))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=Us(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),e}function zl(n){let t=Ll(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){R(r===1);const l=e.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];e.where&&(s=function(h){const d=Gl(h);return d instanceof B&&Ao(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(E){return new cr(We(E.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Pr(d)?null:d}(e.limit));let u=null;e.startAt&&(u=function(h){const d=!!h.before,m=h.values||[];return new ae(m,d)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const d=!h.before,m=h.values||[];return new ae(m,d)}(e.endAt)),ml(t,i,o,s,a,"F",u,c)}function bm(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Gl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=We(e.unaryFilter.field);return N.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=We(e.unaryFilter.field);return N.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=We(e.unaryFilter.field);return N.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=We(e.unaryFilter.field);return N.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(e){return N.create(We(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return B.create(e.compositeFilter.filters.map(r=>Gl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(e.compositeFilter.op))}(n):A()}function Nm(n){return Am[n]}function km(n){return Rm[n]}function Mm(n){return Pm[n]}function Zt(n){return{fieldPath:n.canonicalString()}}function We(n){return Q.fromServerFormat(n.fieldPath)}function Kl(n){return n instanceof N?function(e){if(e.op==="=="){if(Ua(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NAN"}};if(qa(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ua(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NOT_NAN"}};if(qa(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zt(e.field),op:km(e.op),value:e.value}}}(n):n instanceof B?function(e){const r=e.getFilters().map(i=>Kl(i));return r.length===1?r[0]:{compositeFilter:{op:Mm(e.op),filters:r}}}(n):A()}function Fm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function jl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e,r,i,s=P.min(),o=P.min(),a=it.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t){this.ut=t}}function Om(n,t){let e;if(t.document)e=ql(n.ut,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const r=w.fromSegments(t.noDocument.path),i=Ne(t.noDocument.readTime);e=$.newNoDocument(r,i),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return A();{const r=w.fromSegments(t.unknownDocument.path),i=Ne(t.unknownDocument.version);e=$.newUnknownDocument(r,i)}}return t.readTime&&e.setReadTime(function(i){const s=new H(i[0],i[1]);return P.fromTimestamp(s)}(t.readTime)),e}function su(n,t){const e=t.key,r={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:_i(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(s,o){return{name:lr(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ln(s,o.version.toTimestamp()),createTime:ln(s,o.createTime.toTimestamp())}}(n.ut,t);else if(t.isNoDocument())r.noDocument={path:e.path.toArray(),readTime:be(t.version)};else{if(!t.isUnknownDocument())return A();r.unknownDocument={path:e.path.toArray(),version:be(t.version)}}return r}function _i(n){const t=n.toTimestamp();return[t.seconds,t.nanoseconds]}function be(n){const t=n.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Ne(n){const t=new H(n.seconds,n.nanoseconds);return P.fromTimestamp(t)}function Ie(n,t){const e=(t.baseMutations||[]).map(s=>Gs(n.ut,s));for(let s=0;s<t.mutations.length-1;++s){const o=t.mutations[s];if(s+1<t.mutations.length&&t.mutations[s+1].transform!==void 0){const a=t.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(s=>Gs(n.ut,s)),i=H.fromMillis(t.localWriteTimeMs);return new Vo(t.batchId,i,e,r)}function Gn(n){const t=Ne(n.readTime),e=n.lastLimboFreeSnapshotVersion!==void 0?Ne(n.lastLimboFreeSnapshotVersion):P.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return R(s.documents.length===1),vt(wn(Ll(s.documents[0])))}(n.query):function(s){return vt(zl(s))}(n.query),new Kt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,t,e,it.fromBase64String(n.resumeToken))}function Ql(n,t){const e=be(t.snapshotVersion),r=be(t.lastLimboFreeSnapshotVersion);let i;i=fi(t.target)?Ul(n.ut,t.target):No(n.ut,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Ce(t.target),readTime:e,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ko(n){const t=zl({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?gi(t,t.limit,"L"):t}function gs(n,t){return new Do(t.largestBatchId,Gs(n.ut,t.overlayMutation))}function ou(n,t){const e=t.path.lastSegment();return[n,Et(t.path.popLast()),e]}function au(n,t,e,r){return{indexId:n,uid:t.uid||"",sequenceNumber:e,readTime:be(r.readTime),documentKey:Et(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{getBundleMetadata(t,e){return uu(t).get(e).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ne(s.createTime),version:s.version}}(r)})}saveBundleMetadata(t,e){return uu(t).put(function(i){return{bundleId:i.id,createTime:be(Z(i.createTime)),version:i.version}}(e))}getNamedQuery(t,e){return cu(t).get(e).next(r=>{if(r)return function(s){return{name:s.name,query:ko(s.bundledQuery),readTime:Ne(s.readTime)}}(r)})}saveNamedQuery(t,e){return cu(t).put(function(i){return{name:i.name,readTime:be(Z(i.readTime)),bundledQuery:i.bundledQuery}}(e))}}function uu(n){return lt(n,"bundles")}function cu(n){return lt(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,e){this.serializer=t,this.userId=e}static ct(t,e){const r=e.uid||"";return new $i(t,r)}getOverlay(t,e){return kn(t).get(ou(this.userId,e)).next(r=>r?gs(this.serializer,r):null)}getOverlays(t,e){const r=Lt();return f.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){const i=[];return r.forEach((s,o)=>{const a=new Do(e,o);i.push(this.lt(t,a))}),f.waitFor(i)}removeOverlaysForBatchId(t,e,r){const i=new Set;e.forEach(o=>i.add(Et(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(kn(t).H("collectionPathOverlayIndex",a))}),f.waitFor(s)}getOverlaysForCollection(t,e,r){const i=Lt(),s=Et(e),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return kn(t).W("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=gs(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(t,e,r,i){const s=Lt();let o;const a=IDBKeyRange.bound([this.userId,e,r],[this.userId,e,Number.POSITIVE_INFINITY],!0);return kn(t).Y({index:"collectionGroupOverlayIndex",range:a},(u,c,l)=>{const h=gs(this.serializer,c);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}lt(t,e){return kn(t).put(function(i,s,o){const[a,u,c]=ou(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:dr(i.ut,o.mutation)}}(this.serializer,this.userId,e))}}function kn(n){return lt(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(){}ht(t,e){this.Pt(t,e),e.It()}Pt(t,e){if("nullValue"in t)this.Tt(e,5);else if("booleanValue"in t)this.Tt(e,10),e.Et(t.booleanValue?1:0);else if("integerValue"in t)this.Tt(e,15),e.Et(Y(t.integerValue));else if("doubleValue"in t){const r=Y(t.doubleValue);isNaN(r)?this.Tt(e,13):(this.Tt(e,15),sr(r)?e.Et(0):e.Et(r))}else if("timestampValue"in t){const r=t.timestampValue;this.Tt(e,20),typeof r=="string"?e.dt(r):(e.dt(`${r.seconds||""}`),e.Et(r.nanos||0))}else if("stringValue"in t)this.At(t.stringValue,e),this.Rt(e);else if("bytesValue"in t)this.Tt(e,30),e.Vt($t(t.bytesValue)),this.Rt(e);else if("referenceValue"in t)this.ft(t.referenceValue,e);else if("geoPointValue"in t){const r=t.geoPointValue;this.Tt(e,45),e.Et(r.latitude||0),e.Et(r.longitude||0)}else"mapValue"in t?sl(t)?this.Tt(e,Number.MAX_SAFE_INTEGER):(this.gt(t.mapValue,e),this.Rt(e)):"arrayValue"in t?(this.yt(t.arrayValue,e),this.Rt(e)):A()}At(t,e){this.Tt(e,25),this.wt(t,e)}wt(t,e){e.dt(t)}gt(t,e){const r=t.fields||{};this.Tt(e,55);for(const i of Object.keys(r))this.At(i,e),this.Pt(r[i],e)}yt(t,e){const r=t.values||[];this.Tt(e,50);for(const i of r)this.Pt(i,e)}ft(t,e){this.Tt(e,37),w.fromName(t).path.forEach(r=>{this.Tt(e,60),this.wt(r,e)})}Tt(t,e){t.Et(e)}Rt(t){t.Et(2)}}Te.St=new Te;function Bm(n){if(n===0)return 8;let t=0;return!(n>>4)&&(t+=4,n<<=4),!(n>>6)&&(t+=2,n<<=2),!(n>>7)&&(t+=1),t}function lu(n){const t=64-function(r){let i=0;for(let s=0;s<8;++s){const o=Bm(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(t/8)}class qm{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(t){const e=t[Symbol.iterator]();let r=e.next();for(;!r.done;)this.Dt(r.value),r=e.next();this.Ct()}vt(t){const e=t[Symbol.iterator]();let r=e.next();for(;!r.done;)this.Ft(r.value),r=e.next();this.Mt()}xt(t){for(const e of t){const r=e.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(e<"\uD800"||"\uDBFF"<e)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=e.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(t){for(const e of t){const r=e.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(e<"\uD800"||"\uDBFF"<e)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=e.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(t){const e=this.Bt(t),r=lu(e);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=e.length-r;i<e.length;++i)this.buffer[this.position++]=255&e[i]}kt(t){const e=this.Bt(t),r=lu(e);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=e.length-r;i<e.length;++i)this.buffer[this.position++]=~(255&e[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(t){this.Lt(t.length),this.buffer.set(t,this.position),this.position+=t.length}Ut(){return this.buffer.slice(0,this.position)}Bt(t){const e=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(t),r=(128&e[0])!=0;e[0]^=r?255:128;for(let i=1;i<e.length;++i)e[i]^=r?255:0;return e}Dt(t){const e=255&t;e===0?(this.Qt(0),this.Qt(255)):e===255?(this.Qt(255),this.Qt(0)):this.Qt(e)}Ft(t){const e=255&t;e===0?(this.$t(0),this.$t(255)):e===255?(this.$t(255),this.$t(0)):this.$t(t)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(t){this.Lt(1),this.buffer[this.position++]=t}$t(t){this.Lt(1),this.buffer[this.position++]=~t}Lt(t){const e=t+this.position;if(e<=this.buffer.length)return;let r=2*this.buffer.length;r<e&&(r=e);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class Um{constructor(t){this.Wt=t}Vt(t){this.Wt.bt(t)}dt(t){this.Wt.xt(t)}Et(t){this.Wt.Nt(t)}It(){this.Wt.qt()}}class zm{constructor(t){this.Wt=t}Vt(t){this.Wt.vt(t)}dt(t){this.Wt.Ot(t)}Et(t){this.Wt.kt(t)}It(){this.Wt.Kt()}}class Mn{constructor(){this.Wt=new qm,this.Gt=new Um(this.Wt),this.zt=new zm(this.Wt)}seed(t){this.Wt.seed(t)}jt(t){return t===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,e,r,i){this.indexId=t,this.documentKey=e,this.arrayValue=r,this.directionalValue=i}Ht(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,r=new Uint8Array(e);return r.set(this.directionalValue,0),e!==t?r.set([0],this.directionalValue.length):++r[r.length-1],new Ee(this.indexId,this.documentKey,this.arrayValue,r)}}function Xt(n,t){let e=n.indexId-t.indexId;return e!==0?e:(e=hu(n.arrayValue,t.arrayValue),e!==0?e:(e=hu(n.directionalValue,t.directionalValue),e!==0?e:w.comparator(n.documentKey,t.documentKey)))}function hu(n,t){for(let e=0;e<n.length&&e<t.length;++e){const r=n[e]-t[e];if(r!==0)return r}return n.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t){this.Jt=new U((e,r)=>Q.comparator(e.field,r.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.Yt=t.orderBy,this.Zt=[];for(const e of t.filters){const r=e;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(t){if(R(t.collectionGroup===this.collectionId),this.Xt)return!1;const e=Ns(t);if(e!==void 0&&!this.tn(e))return!1;const r=_e(t);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.nn(a,u)||!this.rn(this.Yt[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let t=new U(Q.comparator);const e=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")e.push(new Pe(r.field,2));else{if(t.has(r.field))continue;t=t.add(r.field),e.push(new Pe(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||t.has(r.field)||(t=t.add(r.field),e.push(new Pe(r.field,r.dir==="asc"?0:1)));return new rn(rn.UNKNOWN_ID,this.collectionId,e,sn.empty())}tn(t){for(const e of this.Zt)if(this.nn(e,t))return!0;return!1}nn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const r=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===r}rn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(n){var t,e;if(R(n instanceof N||n instanceof B),n instanceof N){if(n instanceof fl){const i=((e=(t=n.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(s=>N.create(n.field,"==",s)))||[];return B.create(i,"or")}return n}const r=n.filters.map(i=>Wl(i));return B.create(r,n.op)}function Gm(n){if(n.getFilters().length===0)return[];const t=$s(Wl(n));return R(Hl(t)),Ks(t)||js(t)?[t]:t.getFilters()}function Ks(n){return n instanceof N}function js(n){return n instanceof B&&Ao(n)}function Hl(n){return Ks(n)||js(n)||function(e){if(e instanceof B&&Os(e)){for(const r of e.getFilters())if(!Ks(r)&&!js(r))return!1;return!0}return!1}(n)}function $s(n){if(R(n instanceof N||n instanceof B),n instanceof N)return n;if(n.filters.length===1)return $s(n.filters[0]);const t=n.filters.map(r=>$s(r));let e=B.create(t,n.op);return e=yi(e),Hl(e)?e:(R(e instanceof B),R(an(e)),R(e.filters.length>1),e.filters.reduce((r,i)=>Mo(r,i)))}function Mo(n,t){let e;return R(n instanceof N||n instanceof B),R(t instanceof N||t instanceof B),e=n instanceof N?t instanceof N?function(i,s){return B.create([i,s],"and")}(n,t):fu(n,t):t instanceof N?fu(t,n):function(i,s){if(R(i.filters.length>0&&s.filters.length>0),an(i)&&an(s))return ll(i,s.getFilters());const o=Os(i)?i:s,a=Os(i)?s:i,u=o.filters.map(c=>Mo(c,a));return B.create(u,"or")}(n,t),yi(e)}function fu(n,t){if(an(t))return ll(t,n.getFilters());{const e=t.filters.map(r=>Mo(n,r));return B.create(e,"or")}}function yi(n){if(R(n instanceof N||n instanceof B),n instanceof N)return n;const t=n.getFilters();if(t.length===1)return yi(t[0]);if(ul(n))return n;const e=t.map(i=>yi(i)),r=[];return e.forEach(i=>{i instanceof N?r.push(i):i instanceof B&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:B.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this.on=new Fo}addToCollectionParentIndex(t,e){return this.on.add(e),f.resolve()}getCollectionParents(t,e){return f.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return f.resolve()}deleteFieldIndex(t,e){return f.resolve()}deleteAllFieldIndexes(t){return f.resolve()}createTargetIndexes(t,e){return f.resolve()}getDocumentsMatchingTarget(t,e){return f.resolve(null)}getIndexType(t,e){return f.resolve(0)}getFieldIndexes(t,e){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,e){return f.resolve(Ct.min())}getMinOffsetFromCollectionGroup(t,e){return f.resolve(Ct.min())}updateCollectionGroup(t,e,r){return f.resolve()}updateIndexEntries(t,e){return f.resolve()}}class Fo{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new U(F.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new U(F.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Uint8Array(0);class jm{constructor(t,e){this.user=t,this.databaseId=e,this._n=new Fo,this.an=new Wt(r=>Ce(r),(r,i)=>Sr(r,i)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this._n.has(e)){const r=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(()=>{this._n.add(e)});const s={collectionId:r,parent:Et(i)};return mu(t).put(s)}return f.resolve()}getCollectionParents(t,e){const r=[],i=IDBKeyRange.bound([e,""],[Qc(e),""],!1,!0);return mu(t).W(i).next(s=>{for(const o of s){if(o.collectionId!==e)break;r.push(Ot(o.parent))}return r})}addFieldIndex(t,e){const r=Fn(t),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(e);delete i.indexId;const s=r.add(i);if(e.indexState){const o=Ke(t);return s.next(a=>{o.put(au(a,this.user,e.indexState.sequenceNumber,e.indexState.offset))})}return s.next()}deleteFieldIndex(t,e){const r=Fn(t),i=Ke(t),s=Ge(t);return r.delete(e.indexId).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=Fn(t),r=Ge(t),i=Ke(t);return e.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(t,e){return f.forEach(this.un(e),r=>this.getIndexType(t,r).next(i=>{if(i===0||i===1){const s=new du(r).sn();if(s!=null)return this.addFieldIndex(t,s)}}))}getDocumentsMatchingTarget(t,e){const r=Ge(t);let i=!0;const s=new Map;return f.forEach(this.un(e),o=>this.cn(t,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=b();const a=[];return f.forEach(s,(u,c)=>{p("IndexedDbIndexManager",`Using index ${function(S){return`id=${S.indexId}|cg=${S.collectionGroup}|f=${S.fields.map(O=>`${O.fieldPath}:${O.kind}`).join(",")}`}(u)} to execute ${Ce(e)}`);const l=function(S,O){const K=Ns(O);if(K===void 0)return null;for(const L of mi(S,K.fieldPath))switch(L.op){case"array-contains-any":return L.value.arrayValue.values||[];case"array-contains":return[L.value]}return null}(c,u),h=function(S,O){const K=new Map;for(const L of _e(O))for(const pt of mi(S,L.fieldPath))switch(pt.op){case"==":case"in":K.set(L.fieldPath.canonicalString(),pt.value);break;case"not-in":case"!=":return K.set(L.fieldPath.canonicalString(),pt.value),Array.from(K.values())}return null}(c,u),d=function(S,O){const K=[];let L=!0;for(const pt of _e(O)){const Nt=pt.kind===0?$a(S,pt.fieldPath,S.startAt):Qa(S,pt.fieldPath,S.startAt);K.push(Nt.value),L&&(L=Nt.inclusive)}return new ae(K,L)}(c,u),m=function(S,O){const K=[];let L=!0;for(const pt of _e(O)){const Nt=pt.kind===0?Qa(S,pt.fieldPath,S.endAt):$a(S,pt.fieldPath,S.endAt);K.push(Nt.value),L&&(L=Nt.inclusive)}return new ae(K,L)}(c,u),E=this.ln(u,c,d),y=this.ln(u,c,m),I=this.hn(u,c,h),V=this.Pn(u.indexId,l,E,d.inclusive,y,m.inclusive,I);return f.forEach(V,C=>r.j(C,e.limit).next(S=>{S.forEach(O=>{const K=w.fromSegments(O.documentKey);o.has(K)||(o=o.add(K),a.push(K))})}))}).next(()=>a)}return f.resolve(null)})}un(t){let e=this.an.get(t);return e||(t.filters.length===0?e=[t]:e=Gm(B.create(t.filters,"and")).map(r=>Bs(t.path,t.collectionGroup,t.orderBy,r.getFilters(),t.limit,t.startAt,t.endAt)),this.an.set(t,e),e)}Pn(t,e,r,i,s,o,a){const u=(e!=null?e.length:1)*Math.max(r.length,s.length),c=u/(e!=null?e.length:1),l=[];for(let h=0;h<u;++h){const d=e?this.In(e[h/c]):$r,m=this.Tn(t,d,r[h%c],i),E=this.En(t,d,s[h%c],o),y=a.map(I=>this.Tn(t,d,I,!0));l.push(...this.createRange(m,E,y))}return l}Tn(t,e,r,i){const s=new Ee(t,w.empty(),e,r);return i?s:s.Ht()}En(t,e,r,i){const s=new Ee(t,w.empty(),e,r);return i?s.Ht():s}cn(t,e){const r=new du(e),i=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(t,e){let r=2;const i=this.un(e);return f.forEach(i,s=>this.cn(t,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new U(Q.comparator),l=!1;for(const h of u.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:c=c.add(d.field));for(const h of u.orderBy)h.field.isKeyField()||(c=c.add(h.field));return c.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(e)&&i.length>1&&r===2?1:r)}dn(t,e){const r=new Mn;for(const i of _e(t)){const s=e.data.field(i.fieldPath);if(s==null)return null;const o=r.jt(i.kind);Te.St.ht(s,o)}return r.Ut()}In(t){const e=new Mn;return Te.St.ht(t,e.jt(0)),e.Ut()}An(t,e){const r=new Mn;return Te.St.ht(Ve(this.databaseId,e),r.jt(function(s){const o=_e(s);return o.length===0?0:o[o.length-1].kind}(t))),r.Ut()}hn(t,e,r){if(r===null)return[];let i=[];i.push(new Mn);let s=0;for(const o of _e(t)){const a=r[s++];for(const u of i)if(this.Rn(e,o.fieldPath)&&ur(a))i=this.Vn(i,o,a);else{const c=u.jt(o.kind);Te.St.ht(a,c)}}return this.mn(i)}ln(t,e,r){return this.hn(t,e,r.position)}mn(t){const e=[];for(let r=0;r<t.length;++r)e[r]=t[r].Ut();return e}Vn(t,e,r){const i=[...t],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Mn;u.seed(a.Ut()),Te.St.ht(o,u.jt(e.kind)),s.push(u)}return s}Rn(t,e){return!!t.filters.find(r=>r instanceof N&&r.field.isEqual(e)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(t,e){const r=Fn(t),i=Ke(t);return(e?r.W("collectionGroupIndex",IDBKeyRange.bound(e,e)):r.W()).next(s=>{const o=[];return f.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,h){const d=h?new sn(h.sequenceNumber,new Ct(Ne(h.readTime),new w(Ot(h.documentKey)),h.largestBatchId)):sn.empty(),m=l.fields.map(([E,y])=>new Pe(Q.fromServerFormat(E),y));return new rn(l.indexId,l.collectionGroup,m,d)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:D(r.collectionGroup,i.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,r){const i=Fn(t),s=Ke(t);return this.fn(t).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(a=>f.forEach(a,u=>s.put(au(u.indexId,this.user,o,r)))))}updateIndexEntries(t,e){const r=new Map;return f.forEach(e,(i,s)=>{const o=r.get(i.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(t,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),f.forEach(a,u=>this.gn(t,i,u).next(c=>{const l=this.pn(s,u);return c.isEqual(l)?f.resolve():this.yn(t,s,u,c,l)}))))})}wn(t,e,r,i){return Ge(t).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,e.key),documentKey:e.key.path.toArray()})}Sn(t,e,r,i){return Ge(t).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,e.key),e.key.path.toArray()])}gn(t,e,r){const i=Ge(t);let s=new U(Xt);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,e)])},(o,a)=>{s=s.add(new Ee(r.indexId,e,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(t,e){let r=new U(Xt);const i=this.dn(e,t);if(i==null)return r;const s=Ns(e);if(s!=null){const o=t.data.field(s.fieldPath);if(ur(o))for(const a of o.arrayValue.values||[])r=r.add(new Ee(e.indexId,t.key,this.In(a),i))}else r=r.add(new Ee(e.indexId,t.key,$r,i));return r}yn(t,e,r,i,s){p("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const o=[];return function(u,c,l,h,d){const m=u.getIterator(),E=c.getIterator();let y=ze(m),I=ze(E);for(;y||I;){let V=!1,C=!1;if(y&&I){const S=l(y,I);S<0?C=!0:S>0&&(V=!0)}else y!=null?C=!0:V=!0;V?(h(I),I=ze(E)):C?(d(y),y=ze(m)):(y=ze(m),I=ze(E))}}(i,s,Xt,a=>{o.push(this.wn(t,e,r,a))},a=>{o.push(this.Sn(t,e,r,a))}),f.waitFor(o)}fn(t){let e=1;return Ke(t).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),e=i.sequenceNumber+1}).next(()=>e)}createRange(t,e,r){r=r.sort((o,a)=>Xt(o,a)).filter((o,a,u)=>!a||Xt(o,u[a-1])!==0);const i=[];i.push(t);for(const o of r){const a=Xt(o,t),u=Xt(o,e);if(a===0)i[0]=t.Ht();else if(a>0&&u<0)i.push(o),i.push(o.Ht());else if(u>0)break}i.push(e);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,$r,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,$r,[]];s.push(IDBKeyRange.bound(a,u))}return s}bn(t,e){return Xt(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(gu)}getMinOffset(t,e){return f.mapArray(this.un(e),r=>this.cn(t,r).next(i=>i||A())).next(gu)}}function mu(n){return lt(n,"collectionParents")}function Ge(n){return lt(n,"indexEntries")}function Fn(n){return lt(n,"indexConfiguration")}function Ke(n){return lt(n,"indexState")}function gu(n){R(n.length!==0);let t=n[0].indexState.offset,e=t.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;wo(i,t)<0&&(t=i),e<i.largestBatchId&&(e=i.largestBatchId)}return new Ct(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class yt{constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}static withCacheSize(t){return new yt(t,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(n,t,e){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(e.batchId);let a=0;const u=r.Y({range:o},(l,h,d)=>(a++,d.delete()));s.push(u.next(()=>{R(a===1)}));const c=[];for(const l of e.mutations){const h=Zc(t,l.key.path,e.batchId);s.push(i.delete(h)),c.push(l.key)}return f.waitFor(s).next(()=>c)}function Ii(n){if(!n)return 0;let t;if(n.document)t=n.document;else if(n.unknownDocument)t=n.unknownDocument;else{if(!n.noDocument)throw A();t=n.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(41943040,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);class Qi{constructor(t,e,r,i){this.userId=t,this.serializer=e,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(t,e,r,i){R(t.uid!=="");const s=t.isAuthenticated()?t.uid:"";return new Qi(s,e,r,i)}checkEmpty(t){let e=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Jt(t).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{e=!1,o.done()}).next(()=>e)}addMutationBatch(t,e,r,i){const s=He(t),o=Jt(t);return o.add({}).next(a=>{R(typeof a=="number");const u=new Vo(a,e,r,i),c=function(m,E,y){const I=y.baseMutations.map(C=>dr(m.ut,C)),V=y.mutations.map(C=>dr(m.ut,C));return{userId:E,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:I,mutations:V}}(this.serializer,this.userId,u),l=[];let h=new U((d,m)=>D(d.canonicalString(),m.canonicalString()));for(const d of i){const m=Zc(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(c)),l.push(s.put(m,kf))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(t,d))}),t.addOnCommittedListener(()=>{this.Dn[a]=u.keys()}),f.waitFor(l).next(()=>u)})}lookupMutationBatch(t,e){return Jt(t).get(e).next(r=>r?(R(r.userId===this.userId),Ie(this.serializer,r)):null)}Cn(t,e){return this.Dn[e]?f.resolve(this.Dn[e]):this.lookupMutationBatch(t,e).next(r=>{if(r){const i=r.keys();return this.Dn[e]=i,i}return null})}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Jt(t).Y({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(R(a.batchId>=r),s=Ie(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Jt(t).Y({index:"userMutationsIndex",range:e,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Jt(t).W("userMutationsIndex",e).next(r=>r.map(i=>Ie(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(t,e){const r=Xr(this.userId,e.path),i=IDBKeyRange.lowerBound(r),s=[];return He(t).Y({range:i},(o,a,u)=>{const[c,l,h]=o,d=Ot(l);if(c===this.userId&&e.path.isEqual(d))return Jt(t).get(h).next(m=>{if(!m)throw A();R(m.userId===this.userId),s.push(Ie(this.serializer,m))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new U(D);const i=[];return e.forEach(s=>{const o=Xr(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=He(t).Y({range:a},(c,l,h)=>{const[d,m,E]=c,y=Ot(m);d===this.userId&&s.path.isEqual(y)?r=r.add(E):h.done()});i.push(u)}),f.waitFor(i).next(()=>this.vn(t,r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1,s=Xr(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new U(D);return He(t).Y({range:o},(u,c,l)=>{const[h,d,m]=u,E=Ot(d);h===this.userId&&r.isPrefixOf(E)?E.length===i&&(a=a.add(m)):l.done()}).next(()=>this.vn(t,a))}vn(t,e){const r=[],i=[];return e.forEach(s=>{i.push(Jt(t).get(s).next(o=>{if(o===null)throw A();R(o.userId===this.userId),r.push(Ie(this.serializer,o))}))}),f.waitFor(i).next(()=>r)}removeMutationBatch(t,e){return Yl(t.ae,this.userId,e).next(r=>(t.addOnCommittedListener(()=>{this.Fn(e.batchId)}),f.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(t,i))))}Fn(t){delete this.Dn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return f.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return He(t).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Ot(s[1]);i.push(u)}else a.done()}).next(()=>{R(i.length===0)})})}containsKey(t,e){return Xl(t,this.userId,e)}Mn(t){return Jl(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Xl(n,t,e){const r=Xr(t,e.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return He(n).Y({range:s,J:!0},(a,u,c)=>{const[l,h,d]=a;l===t&&h===i&&(o=!0),c.done()}).next(()=>o)}function Jt(n){return lt(n,"mutations")}function He(n){return lt(n,"documentMutations")}function Jl(n){return lt(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new ke(0)}static Nn(){return new ke(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.Bn(t).next(e=>{const r=new ke(e.highestTargetId);return e.highestTargetId=r.next(),this.Ln(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.Bn(t).next(e=>P.fromTimestamp(new H(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.Bn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,r){return this.Bn(t).next(i=>(i.highestListenSequenceNumber=e,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.Ln(t,i)))}addTargetData(t,e){return this.kn(t,e).next(()=>this.Bn(t).next(r=>(r.targetCount+=1,this.qn(e,r),this.Ln(t,r))))}updateTargetData(t,e){return this.kn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>je(t).delete(e.targetId)).next(()=>this.Bn(t)).next(r=>(R(r.targetCount>0),r.targetCount-=1,this.Ln(t,r)))}removeTargets(t,e,r){let i=0;const s=[];return je(t).Y((o,a)=>{const u=Gn(a);u.sequenceNumber<=e&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(t,u)))}).next(()=>f.waitFor(s)).next(()=>i)}forEachTarget(t,e){return je(t).Y((r,i)=>{const s=Gn(i);e(s)})}Bn(t){return _u(t).get("targetGlobalKey").next(e=>(R(e!==null),e))}Ln(t,e){return _u(t).put("targetGlobalKey",e)}kn(t,e){return je(t).put(Ql(this.serializer,e))}qn(t,e){let r=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,r=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,r=!0),r}getTargetCount(t){return this.Bn(t).next(e=>e.targetCount)}getTargetData(t,e){const r=Ce(e),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return je(t).Y({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=Gn(a);Sr(e,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(t,e,r){const i=[],s=te(t);return e.forEach(o=>{const a=Et(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(t,r,o))}),f.waitFor(i)}removeMatchingKeys(t,e,r){const i=te(t);return f.forEach(e,s=>{const o=Et(s.path);return f.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(t,r,s)])})}removeMatchingKeysForTargetId(t,e){const r=te(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(t,e){const r=IDBKeyRange.bound([e],[e+1],!1,!0),i=te(t);let s=b();return i.Y({range:r,J:!0},(o,a,u)=>{const c=Ot(o[1]),l=new w(c);s=s.add(l)}).next(()=>s)}containsKey(t,e){const r=Et(e.path),i=IDBKeyRange.bound([r],[Qc(r)],!1,!0);let s=0;return te(t).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}_t(t,e){return je(t).get(e).next(r=>r?Gn(r):null)}}function je(n){return lt(n,"targets")}function _u(n){return lt(n,"targetGlobal")}function te(n){return lt(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu([n,t],[e,r]){const i=D(n,e);return i===0?D(t,r):i}class Qm{constructor(t){this.Qn=t,this.buffer=new U(yu),this.Kn=0}$n(){return++this.Kn}Un(t){const e=[t,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();yu(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Zl{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(t){p("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){de(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await he(e)}await this.Gn(3e5)})}}class Wm{constructor(t,e){this.zn=t,this.params=e}calculateTargetCount(t,e){return this.zn.jn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return f.resolve(At._e);const r=new Qm(e);return this.zn.forEachTarget(t,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(t,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.zn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(p("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(pu)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pu):this.Jn(t,e))}getCacheSize(t){return this.zn.getCacheSize(t)}Jn(t,e){let r,i,s,o,a,u,c;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(t,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(t,r,e))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(h=>(c=Date.now(),$e()<=zt.DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function th(n,t){return new Wm(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t,e){this.db=t,this.garbageCollector=th(this,e)}jn(t){const e=this.Yn(t);return this.db.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Yn(t){let e=0;return this.Hn(t,r=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Hn(t,e){return this.Zn(t,(r,i)=>e(i))}addReference(t,e,r){return Qr(t,r)}removeReference(t,e,r){return Qr(t,r)}removeTargets(t,e,r){return this.db.getTargetCache().removeTargets(t,e,r)}markPotentiallyOrphaned(t,e){return Qr(t,e)}Xn(t,e){return function(i,s){let o=!1;return Jl(i).Z(a=>Xl(i,a,s).next(u=>(u&&(o=!0),f.resolve(!u)))).next(()=>o)}(t,e)}removeOrphanedDocuments(t,e){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(t,(o,a)=>{if(a<=e){const u=this.Xn(t,o).next(c=>{if(!c)return s++,r.getEntry(t,o).next(()=>(r.removeEntry(o,P.min()),te(t).delete(function(h){return[0,Et(h.path)]}(o))))});i.push(u)}}).next(()=>f.waitFor(i)).next(()=>r.apply(t)).next(()=>s)}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,r)}updateLimboDocument(t,e){return Qr(t,e)}Zn(t,e){const r=te(t);let i,s=At._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==At._e&&e(new w(Ot(i)),s),s=c,i=u):s=At._e}).next(()=>{s!==At._e&&e(new w(Ot(i)),s)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Qr(n,t){return te(n).put(function(r,i){return{targetId:0,path:Et(r.path),sequenceNumber:i}}(t,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.changes=new Wt(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,$.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?f.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,r){return pe(t).put(r)}removeEntry(t,e,r){return pe(t).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],_i(o),a[a.length-1]]}(e,r))}updateMetadata(t,e){return this.getMetadata(t).next(r=>(r.byteSize+=e,this.er(t,r)))}getEntry(t,e){let r=$.newInvalidDocument(e);return pe(t).Y({index:"documentKeyIndex",range:IDBKeyRange.only(On(e))},(i,s)=>{r=this.tr(e,s)}).next(()=>r)}nr(t,e){let r={size:0,document:$.newInvalidDocument(e)};return pe(t).Y({index:"documentKeyIndex",range:IDBKeyRange.only(On(e))},(i,s)=>{r={document:this.tr(e,s),size:Ii(s)}}).next(()=>r)}getEntries(t,e){let r=Pt();return this.rr(t,e,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(t,e){let r=Pt(),i=new z(w.comparator);return this.rr(t,e,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,Ii(o))}).next(()=>({documents:r,sr:i}))}rr(t,e,r){if(e.isEmpty())return f.resolve();let i=new U(Eu);e.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(On(i.first()),On(i.last())),o=i.getIterator();let a=o.getNext();return pe(t).Y({index:"documentKeyIndex",range:s},(u,c,l)=>{const h=w.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Eu(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?l.U(On(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(t,e,r,i,s){const o=e.path,a=[o.popLast().toArray(),o.lastSegment(),_i(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return pe(t).W(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let l=Pt();for(const h of c){const d=this.tr(w.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Cr(e,d)||i.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(t,e,r,i){let s=Pt();const o=Tu(e,r),a=Tu(e,Ct.max());return pe(t).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,l)=>{const h=this.tr(w.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(t){return new Xm(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return Iu(t).get("remoteDocumentGlobalKey").next(e=>(R(!!e),e))}er(t,e){return Iu(t).put("remoteDocumentGlobalKey",e)}tr(t,e){if(e){const r=Om(this.serializer,e);if(!(r.isNoDocument()&&r.version.isEqual(P.min())))return r}return $.newInvalidDocument(t)}}function nh(n){return new Ym(n)}class Xm extends eh{constructor(t,e){super(),this._r=t,this.trackRemovals=e,this.ar=new Wt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(t){const e=[];let r=0,i=new U((s,o)=>D(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(e.push(this._r.removeEntry(t,s,a.readTime)),o.isValidDocument()){const u=su(this._r.serializer,o);i=i.add(s.path.popLast());const c=Ii(u);r+=c-a.size,e.push(this._r.addEntry(t,s,u))}else if(r-=a.size,this.trackRemovals){const u=su(this._r.serializer,o.convertToNoDocument(P.min()));e.push(this._r.addEntry(t,s,u))}}),i.forEach(s=>{e.push(this._r.indexManager.addToCollectionParentIndex(t,s))}),e.push(this._r.updateMetadata(t,r)),f.waitFor(e)}getFromCache(t,e){return this._r.nr(t,e).next(r=>(this.ar.set(e,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(t,e){return this._r.ir(t,e).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Iu(n){return lt(n,"remoteDocumentGlobal")}function pe(n){return lt(n,"remoteDocumentsV14")}function On(n){const t=n.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Tu(n,t){const e=t.documentKey.path.toArray();return[n,_i(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Eu(n,t){const e=n.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<e.length-2&&s<r.length-2;++s)if(i=D(e[s],r[s]),i)return i;return i=D(e.length,r.length),i||(i=D(e[e.length-2],r[r.length-2]),i||D(e[e.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Wn(r.mutation,i,Rt.empty(),H.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,b()).next(()=>r))}getLocalViewOfDocuments(t,e,r=b()){const i=Lt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=Un();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=Lt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,b()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Pt();const o=Qn(),a=function(){return Qn()}();return e.forEach((u,c)=>{const l=r.get(c.key);i.has(c.key)&&(l===void 0||l.mutation instanceof Ht)?s=s.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Wn(l.mutation,c,l.mutation.getFieldMask(),H.now())):o.set(c.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,l)=>o.set(c,l)),e.forEach((c,l)=>{var h;return a.set(c,new Jm(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=Qn();let i=new z((o,a)=>o-a),s=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=e.get(u);if(c===null)return;let l=r.get(u)||Rt.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(i.get(a.batchId)||b()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=El();l.forEach(d=>{if(!s.has(d)){const m=Cl(e.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return w.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ro(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):f.resolve(Lt());let a=-1,u=s;return o.next(c=>f.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?f.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{u=u.insert(l,d)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,b())).next(l=>({batchId:a,changes:Tl(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new w(e)).next(r=>{let i=Un();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=Un();return this.indexManager.getCollectionParents(t,s).next(a=>f.forEach(a,u=>{const c=function(h,d){return new Qt(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,$.newInvalidDocument(l)))});let a=Un();return o.forEach((u,c)=>{const l=s.get(u);l!==void 0&&Wn(l.mutation,c,Rt.empty(),H.now()),Cr(e,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return f.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Z(i.createTime)}}(e)),f.resolve()}getNamedQuery(t,e){return f.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(i){return{name:i.name,query:ko(i.bundledQuery),readTime:Z(i.readTime)}}(e)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.overlays=new z(w.comparator),this.lr=new Map}getOverlay(t,e){return f.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Lt();return f.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.lt(t,e,s)}),f.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),f.resolve()}getOverlaysForCollection(t,e,r){const i=Lt(),s=e.length+1,o=new w(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return f.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new z((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>r){let l=s.get(c.largestBatchId);l===null&&(l=Lt(),s=s.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=Lt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=i)););return f.resolve(a)}lt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Do(e,r));let s=this.lr.get(e);s===void 0&&(s=b(),this.lr.set(e,s)),this.lr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.hr=new U(st.Pr),this.Ir=new U(st.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const r=new st(t,e);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.dr(new st(t,e))}Ar(t,e){t.forEach(r=>this.removeReference(r,e))}Rr(t){const e=new w(new F([])),r=new st(e,t),i=new st(e,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new w(new F([])),r=new st(e,t),i=new st(e,t+1);let s=b();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new st(t,0),r=this.hr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class st{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return w.comparator(t.key,e.key)||D(t.gr,e.gr)}static Tr(t,e){return D(t.gr,e.gr)||w.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new U(st.Pr)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Vo(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new st(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,e){return f.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Sr(r),s=i<0?0:i;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new U(D);return e.forEach(i=>{const s=new st(i,0),o=new st(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),f.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;w.isDocumentKey(s)||(s=s.child(""));const o=new st(new w(s),0);let a=new U(D);return this.yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.gr)),!0)},o),f.resolve(this.br(a))}br(t){const e=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){R(this.Dr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return f.forEach(e.mutations,i=>{const s=new st(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,e){const r=new st(e,0),i=this.yr.firstAfterOrEqual(r);return f.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t){this.Cr=t,this.docs=function(){return new z(w.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return f.resolve(r?r.document.mutableCopy():$.newInvalidDocument(e))}getEntries(t,e){let r=Pt();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$.newInvalidDocument(i))}),f.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Pt();const o=e.path,a=new w(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||wo(Hc(l),r)<=0||(i.has(l.key)||Cr(e,l))&&(s=s.insert(l.key,l.mutableCopy()))}return f.resolve(s)}getAllFromCollectionGroup(t,e,r,i){A()}vr(t,e){return f.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new rg(this)}getSize(t){return f.resolve(this.size)}}class rg extends eh{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),f.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(t){this.persistence=t,this.Fr=new Wt(e=>Ce(e),Sr),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Oo,this.targetCount=0,this.Nr=ke.On()}forEachTarget(t,e){return this.Fr.forEach((r,i)=>e(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Mr&&(this.Mr=e),f.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new ke(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,f.resolve()}updateTargetData(t,e){return this.kn(e),f.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,e){const r=this.Fr.get(e)||null;return f.resolve(r)}addMatchingKeys(t,e,r){return this.Or.Er(e,r),f.resolve()}removeMatchingKeys(t,e,r){this.Or.Ar(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),f.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Or.mr(e);return f.resolve(r)}containsKey(t,e){return f.resolve(this.Or.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t,e){this.Br={},this.overlays={},this.Lr=new At(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new ig(this),this.indexManager=new Km,this.remoteDocumentCache=function(i){return new ng(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new $l(e),this.Kr=new Zm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new tg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new eg(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,r){p("MemoryPersistence","Starting transaction:",t);const i=new sg(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,e){return f.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class sg extends Xc{constructor(t){super(),this.currentSequenceNumber=t}}class Wi{constructor(t){this.persistence=t,this.Gr=new Oo,this.zr=null}static jr(t){return new Wi(t)}get Hr(){if(this.zr)return this.zr;throw A()}addReference(t,e,r){return this.Gr.addReference(r,e),this.Hr.delete(r.toString()),f.resolve()}removeReference(t,e,r){return this.Gr.removeReference(r,e),this.Hr.add(r.toString()),f.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),f.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Hr,r=>{const i=w.fromPath(r);return this.Jr(t,i).next(s=>{s||e.removeEntry(i,P.min())})}).next(()=>(this.zr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Jr(t,e).next(r=>{r?this.Hr.delete(e.toString()):this.Hr.add(e.toString())})}Qr(t){return 0}Jr(t,e){return f.or([()=>f.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}class Ti{constructor(t,e){this.persistence=t,this.Yr=new Wt(r=>Et(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=th(this,e)}static jr(t,e){return new Ti(t,e)}$r(){}Ur(t){return f.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}jn(t){const e=this.Yn(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Yn(t){let e=0;return this.Hn(t,r=>{e++}).next(()=>e)}Hn(t,e){return f.forEach(this.Yr,(r,i)=>this.Xn(t,r,i).next(s=>s?f.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.vr(t,o=>this.Xn(t,o,e).next(a=>{a||(r++,s.removeEntry(o,P.min()))})).next(()=>s.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.Yr.set(e,t.currentSequenceNumber),f.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.Yr.set(r,t.currentSequenceNumber),f.resolve()}removeReference(t,e,r){return this.Yr.set(r,t.currentSequenceNumber),f.resolve()}updateLimboDocument(t,e){return this.Yr.set(e,t.currentSequenceNumber),f.resolve()}Qr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Zr(t.data.value)),e}Xn(t,e,r){return f.or([()=>this.persistence.Wr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.Yr.get(e);return f.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(t){this.serializer=t}N(t,e,r,i){const s=new Ui("createOrUpgrade",e);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(t),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Fa,{unique:!0}),u.createObjectStore("documentMutations")}(t),wu(t),function(u){u.createObjectStore("remoteDocuments")}(t));let o=f.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(t),wu(t)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:P.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").W().next(l=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Fa,{unique:!0});const h=c.store("mutations"),d=l.map(m=>h.put(m));return f.waitFor(d)})}(t,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(t),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(t,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(t)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:$f});c.createIndex("collectionPathOverlayIndex",Qf,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",Wf,{unique:!1})})(t)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:Mf});c.createIndex("documentKeyIndex",Ff),c.createIndex("collectionGroupIndex",Of)}(t)).next(()=>this.ri(t,s)).next(()=>t.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(t,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:zf}).createIndex("sequenceNumberIndex",Gf,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:Kf}).createIndex("documentKeyIndex",jf,{unique:!1})}(t))),o}Xr(t){let e=0;return t.store("remoteDocuments").Y((r,i)=>{e+=Ii(i)}).next(()=>{const r={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(t){const e=t.store("mutationQueues"),r=t.store("mutations");return e.W().next(i=>f.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>f.forEach(a,u=>{R(u.userId===s.userId);const c=Ie(this.serializer,u);return Yl(t,s.userId,c).next(()=>{})}))}))}ei(t){const e=t.store("targetDocuments"),r=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const u=new F(o),c=function(h){return[0,Et(h)]}(u);s.push(e.get(c).next(l=>l?f.resolve():(h=>e.put({targetId:0,path:Et(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>f.waitFor(s))})}ti(t,e){t.createObjectStore("collectionParents",{keyPath:Uf});const r=e.store("collectionParents"),i=new Fo,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Et(u)})}};return e.store("remoteDocuments").Y({J:!0},(o,a)=>{const u=new F(o);return s(u.popLast())}).next(()=>e.store("documentMutations").Y({J:!0},([o,a,u],c)=>{const l=Ot(a);return s(l.popLast())}))}ni(t){const e=t.store("targets");return e.Y((r,i)=>{const s=Gn(i),o=Ql(this.serializer,s);return e.put(o)})}ri(t,e){const r=e.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=e.store("remoteDocumentsV14"),u=function(h){return h.document?new w(F.fromString(h.document.name).popFirst(5)):h.noDocument?w.fromSegments(h.noDocument.path):h.unknownDocument?w.fromSegments(h.unknownDocument.path):A()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>f.waitFor(i))}ii(t,e){const r=e.store("mutations"),i=nh(this.serializer),s=new Lo(Wi.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(u=>{var c;let l=(c=a.get(u.userId))!==null&&c!==void 0?c:b();Ie(this.serializer,u).keys().forEach(h=>l=l.add(h)),a.set(u.userId,l)}),f.forEach(a,(u,c)=>{const l=new ot(c),h=$i.ct(this.serializer,l),d=s.getIndexManager(l),m=Qi.ct(l,this.serializer,d,s.referenceDelegate);return new rh(i,m,h,d).recalculateAndSaveOverlaysForDocumentKeys(new ks(e,At._e),u).next()})})}}function wu(n){n.createObjectStore("targetDocuments",{keyPath:Bf}).createIndex("documentTargetsIndex",qf,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Lf,{unique:!0}),n.createObjectStore("targetGlobal")}const ps="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Bo{constructor(t,e,r,i,s,o,a,u,c,l,h=15){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=c,this._i=l,this.ai=h,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=d=>Promise.resolve(),!Bo.D())throw new _(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Hm(this,i),this.Ii=e+"main",this.serializer=new $l(u),this.Ti=new xt(this.Ii,this.ai,new og(this.serializer)),this.qr=new $m(this.referenceDelegate,this.serializer),this.remoteDocumentCache=nh(this.serializer),this.Kr=new Lm,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,l===!1&&J("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new _(g.FAILED_PRECONDITION,ps);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.qr.getHighestSequenceNumber(t))}).then(t=>{this.Lr=new At(t,this.oi)}).then(()=>{this.kr=!0}).catch(t=>(this.Ti&&this.Ti.close(),Promise.reject(t)))}mi(t){return this.Pi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ti.L(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Wr(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(t).next(e=>{e||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(t)).next(e=>this.isPrimary&&!e?this.pi(t).next(()=>!1):!!e&&this.yi(t).next(()=>!0))).catch(t=>{if(de(t))return p("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.si.enqueueRetryable(()=>this.Pi(t)),this.isPrimary=t})}fi(t){return Ln(t).get("owner").next(e=>f.resolve(this.wi(e)))}Si(t){return Wr(t).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const r=lt(e,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return f.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const e of t)this.Ei.removeItem(this.vi(e.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(t){return!!t&&t.ownerId===this.clientId}gi(t){return this._i?f.resolve(!0):Ln(t).get("owner").next(e=>{if(e!==null&&this.Di(e.leaseTimestampMs,5e3)&&!this.Fi(e.ownerId)){if(this.wi(e)&&this.networkEnabled)return!0;if(!this.wi(e)){if(!e.allowTabSynchronization)throw new _(g.FAILED_PRECONDITION,ps);return!1}}return!(!this.networkEnabled||!this.inForeground)||Wr(t).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new ks(t,At._e);return this.pi(e).next(()=>this.Si(e))}),this.Ti.close(),this.Ni()}Ci(t,e){return t.filter(r=>this.Di(r.updateTimeMs,e)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",t=>Wr(t).W().next(e=>this.Ci(e,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(t,e){return Qi.ct(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new jm(t,this.serializer.ut.databaseId)}getDocumentOverlayCache(t){return $i.ct(this.serializer,t)}getBundleCache(){return this.Kr}runTransaction(t,e,r){p("IndexedDbPersistence","Starting transaction:",t);const i=e==="readonly"?"readonly":"readwrite",s=function(u){return u===15?Yf:u===14?nl:u===13?el:u===12?Hf:u===11?tl:void A()}(this.ai);let o;return this.Ti.runTransaction(t,i,s,a=>(o=new ks(a,this.Lr?this.Lr.next():At._e),e==="readwrite-primary"?this.fi(o).next(u=>!!u||this.gi(o)).next(u=>{if(!u)throw J(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new _(g.FAILED_PRECONDITION,Yc);return r(o)}).next(u=>this.yi(o).next(()=>u)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(t){return Ln(t).get("owner").next(e=>{if(e!==null&&this.Di(e.leaseTimestampMs,5e3)&&!this.Fi(e.ownerId)&&!this.wi(e)&&!(this._i||this.allowTabSynchronization&&e.allowTabSynchronization))throw new _(g.FAILED_PRECONDITION,ps)})}yi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ln(t).put("owner",e)}static D(){return xt.D()}pi(t){const e=Ln(t);return e.get("owner").next(r=>this.wi(r)?(p("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):f.resolve())}Di(t,e){const r=Date.now();return!(t<r-e)&&(!(t>r)||(J(`Detected an update time that is in the future: ${t} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const e=/(?:Version|Mobile)\/1[456]/;ld()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(t){var e;try{const r=((e=this.Ei)===null||e===void 0?void 0:e.getItem(this.vi(t)))!==null;return p("IndexedDbPersistence",`Client '${t}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return J("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(t){J("Failed to set zombie client id.",t)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Ln(n){return lt(n,"owner")}function Wr(n){return lt(n,"clientMetadata")}function qo(n,t){let e=n.projectId;return n.isDefaultDatabase||(e+="."+n.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.ki=r,this.qi=i}static Qi(t,e){let r=b(),i=b();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Uo(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.zi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ag;return this.Hi(t,e,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,e,o,a.size)})}).next(()=>s.result)}Ji(t,e,r,i){return r.documentReadCount<this.Ui?($e()<=zt.DEBUG&&p("QueryEngine","SDK will not create cache indexes for query:",Qe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),f.resolve()):($e()<=zt.DEBUG&&p("QueryEngine","Query:",Qe(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?($e()<=zt.DEBUG&&p("QueryEngine","The SDK decides to create cache indexes for query:",Qe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,vt(e))):f.resolve())}zi(t,e){if(Wa(e))return f.resolve(null);let r=vt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=gi(e,null,"F"),r=vt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=b(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Yi(e,a);return this.Zi(e,c,o,u.readTime)?this.zi(t,gi(e,null,"F")):this.Xi(t,c,e,u)}))})))}ji(t,e,r,i){return Wa(e)||i.isEqual(P.min())?f.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(e,s);return this.Zi(e,o,r,i)?f.resolve(null):($e()<=zt.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qe(e)),this.Xi(t,o,e,Wc(i,-1)).next(a=>a))})}Yi(t,e){let r=new U(yl(t));return e.forEach((i,s)=>{Cr(t,s)&&(r=r.add(s))}),r}Zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,e,r){return $e()<=zt.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Qe(e)),this.Gi.getDocumentsMatchingQuery(t,e,Ct.min(),r)}Xi(t,e,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t,e,r,i){this.persistence=t,this.es=e,this.serializer=i,this.ts=new z(D),this.ns=new Wt(s=>Ce(s),Sr),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new rh(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ts))}}function sh(n,t,e,r){return new ug(n,t,e,r)}async function oh(n,t){const e=T(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.os(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=b();for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return e.localDocuments.getDocuments(r,u).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function cg(n,t){const e=T(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.ss.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const h=c.batch,d=h.keys();let m=f.resolve();return d.forEach(E=>{m=m.next(()=>l.getEntry(u,E)).next(y=>{const I=c.docVersions.get(E);R(I!==null),y.version.compareTo(I)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=b();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function ah(n){const t=T(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.qr.getLastRemoteSnapshotVersion(e))}function lg(n,t){const e=T(n),r=t.snapshotVersion;let i=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.ss.newChangeBuffer({trackRemovals:!0});i=e.ts;const a=[];t.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(e.qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>e.qr.addMatchingKeys(s,l.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(it.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,r)),i=i.insert(h,m),function(y,I,V){return y.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(d,m,l)&&a.push(e.qr.updateTargetData(s,m))});let u=Pt(),c=b();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(uh(s,o,t.documentUpdates).next(l=>{u=l.us,c=l.cs})),!r.isEqual(P.min())){const l=e.qr.getLastRemoteSnapshotVersion(s).next(h=>e.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(e.ts=i,s))}function uh(n,t,e){let r=b(),i=b();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Pt();return e.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(P.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):p("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{us:o,cs:i}})}function hg(n,t){const e=T(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function hn(n,t){const e=T(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.qr.getTargetData(r,t).next(s=>s?(i=s,f.resolve(i)):e.qr.allocateTargetId(r).next(o=>(i=new Kt(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ts=e.ts.insert(r.targetId,r),e.ns.set(t,r.targetId)),r})}async function dn(n,t,e){const r=T(n),i=r.ts.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!de(o))throw o;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function Ei(n,t,e){const r=T(n);let i=P.min(),s=b();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const h=T(u),d=h.ns.get(l);return d!==void 0?f.resolve(h.ts.get(d)):h.qr.getTargetData(c,l)}(r,o,vt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,e?i:P.min(),e?s:b())).next(a=>(hh(r,_l(t),a),{documents:a,ls:s})))}function ch(n,t){const e=T(n),r=T(e.qr),i=e.ts.get(t);return i?Promise.resolve(i.target):e.persistence.runTransaction("Get target data","readonly",s=>r._t(s,t).next(o=>o?o.target:null))}function lh(n,t){const e=T(n),r=e.rs.get(t)||P.min();return e.persistence.runTransaction("Get new document changes","readonly",i=>e.ss.getAllFromCollectionGroup(i,t,Wc(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(hh(e,t,i),i))}function hh(n,t,e){let r=n.rs.get(t)||P.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.rs.set(t,r)}async function dg(n,t,e,r){const i=T(n);let s=b(),o=Pt();for(const c of e){const l=t.hs(c.metadata.name);c.document&&(s=s.add(l));const h=t.Ps(c);h.setReadTime(t.Is(c.metadata.readTime)),o=o.insert(l,h)}const a=i.ss.newChangeBuffer({trackRemovals:!0}),u=await hn(i,function(l){return vt(wn(F.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>uh(c,a,o).next(l=>(a.apply(c),l)).next(l=>i.qr.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.qr.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,l.us,l.cs)).next(()=>l.us)))}async function fg(n,t,e=b()){const r=await hn(n,vt(ko(t.bundledQuery))),i=T(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Z(t.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Kr.saveNamedQuery(s,t);const a=r.withResumeToken(it.EMPTY_BYTE_STRING,o);return i.ts=i.ts.insert(a.targetId,a),i.qr.updateTargetData(s,a).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,e,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,t))})}function vu(n,t){return`firestore_clients_${n}_${t}`}function Au(n,t,e){let r=`firestore_mutations_${n}_${e}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function _s(n,t){return`firestore_targets_${n}_${t}`}class wi{constructor(t,e,r,i){this.user=t,this.batchId=e,this.state=r,this.error=i}static Ts(t,e,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new _(i.error.code,i.error.message))),o?new wi(t,e,i.state,s):(J("SharedClientState",`Failed to parse mutation state for ID '${e}': ${r}`),null)}Es(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Hn{constructor(t,e,r){this.targetId=t,this.state=e,this.error=r}static Ts(t,e){const r=JSON.parse(e);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new _(r.error.code,r.error.message))),s?new Hn(t,r.state,i):(J("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Es(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class vi{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Ts(t,e){const r=JSON.parse(e);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Po();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Jc(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new vi(t,s):(J("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class zo{constructor(t,e){this.clientId=t,this.onlineState=e}static Ts(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new zo(e.clientId,e.onlineState):(J("SharedClientState",`Failed to parse online state: ${t}`),null)}}class Qs{constructor(){this.activeTargetIds=Po()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ys{constructor(t,e,r,i,s){this.window=t,this.si=e,this.persistenceKey=r,this.Rs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new z(D),this.started=!1,this.ps=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ys=vu(this.persistenceKey,this.Rs),this.ws=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new Qs),this.Ss=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Cs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.vs=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Bi();for(const r of t){if(r===this.Rs)continue;const i=this.getItem(vu(this.persistenceKey,r));if(i){const s=vi.Ts(r,i);s&&(this.gs=this.gs.insert(s.clientId,s))}}this.Fs();const e=this.storage.getItem(this.Cs);if(e){const r=this.Ms(e);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.ws,JSON.stringify(t))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(t){let e=!1;return this.gs.forEach((r,i)=>{i.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.Ns(t,"pending")}updateMutationState(t,e,r){this.Ns(t,e,r),this.Bs(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const r=this.storage.getItem(_s(this.persistenceKey,t));if(r){const i=Hn.Ts(t,r);i&&(e=i.state)}}return this.Ls.ds(t),this.Fs(),e}removeLocalQueryTarget(t){this.Ls.As(t),this.Fs()}isLocalQueryTarget(t){return this.Ls.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(_s(this.persistenceKey,t))}updateQueryState(t,e,r){this.ks(t,e,r)}handleUserChange(t,e,r){e.forEach(i=>{this.Bs(i)}),this.currentUser=t,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(t){this.qs(t)}notifyBundleLoaded(t){this.Qs(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return p("SharedClientState","READ",t,e),e}setItem(t,e){p("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){p("SharedClientState","REMOVE",t),this.storage.removeItem(t)}fs(t){const e=t;if(e.storageArea===this.storage){if(p("SharedClientState","EVENT",e.key,e.newValue),e.key===this.ys)return void J("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.Ss.test(e.key)){if(e.newValue==null){const r=this.Ks(e.key);return this.$s(r,null)}{const r=this.Us(e.key,e.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(e.key)){if(e.newValue!==null){const r=this.Ws(e.key,e.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(e.key)){if(e.newValue!==null){const r=this.zs(e.key,e.newValue);if(r)return this.js(r)}}else if(e.key===this.Cs){if(e.newValue!==null){const r=this.Ms(e.newValue);if(r)return this.xs(r)}}else if(e.key===this.ws){const r=function(s){let o=At._e;if(s!=null)try{const a=JSON.parse(s);R(typeof a=="number"),o=a}catch(a){J("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(e.newValue);r!==At._e&&this.sequenceNumberHandler(r)}else if(e.key===this.vs){const r=this.Hs(e.newValue);await Promise.all(r.map(i=>this.syncEngine.Js(i)))}}}else this.ps.push(e)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(t,e,r){const i=new wi(this.currentUser,t,e,r),s=Au(this.persistenceKey,this.currentUser,t);this.setItem(s,i.Es())}Bs(t){const e=Au(this.persistenceKey,this.currentUser,t);this.removeItem(e)}qs(t){const e={clientId:this.Rs,onlineState:t};this.storage.setItem(this.Cs,JSON.stringify(e))}ks(t,e,r){const i=_s(this.persistenceKey,t),s=new Hn(t,e,r);this.setItem(i,s.Es())}Qs(t){const e=JSON.stringify(Array.from(t));this.setItem(this.vs,e)}Ks(t){const e=this.Ss.exec(t);return e?e[1]:null}Us(t,e){const r=this.Ks(t);return vi.Ts(r,e)}Ws(t,e){const r=this.bs.exec(t),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return wi.Ts(new ot(s),i,e)}zs(t,e){const r=this.Ds.exec(t),i=Number(r[1]);return Hn.Ts(i,e)}Ms(t){return zo.Ts(t)}Hs(t){return JSON.parse(t)}async Gs(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Ys(t.batchId,t.state,t.error);p("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}js(t){return this.syncEngine.Zs(t.targetId,t.state,t.error)}$s(t,e){const r=e?this.gs.insert(t,e):this.gs.remove(t),i=this.Os(this.gs),s=this.Os(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Xs(o,a).then(()=>{this.gs=r})}xs(t){this.gs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}Os(t){let e=Po();return t.forEach((r,i)=>{e=e.unionWith(i.activeTargetIds)}),e}}class dh{constructor(){this.eo=new Qs,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,r){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Qs,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr=null;function Is(){return Hr===null?Hr=function(){return 268435456+Math.round(2147483648*Math.random())}():Hr++,"0x"+Hr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class _g extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+e.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(e,r,i,s,o){const a=Is(),u=this.So(e,r);p("RestConnection",`Sending RPC '${e}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,s,o),this.Do(e,u,c,i).then(l=>(p("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw Vt("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",u,"request:",i),l})}Co(e,r,i,s,o,a){return this.wo(e,r,i,s,o)}bo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+En}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}So(e,r){const i=gg[e];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,r,i){const s=Is();return new Promise((o,a)=>{const u=new _f;u.setWithCredentials(!0),u.listenOnce(mf.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ms.NO_ERROR:const l=u.getResponseJson();p(_t,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case ms.TIMEOUT:p(_t,`RPC '${t}' ${s} timed out`),a(new _(g.DEADLINE_EXCEEDED,"Request time out"));break;case ms.HTTP_ERROR:const h=u.getStatus();if(p(_t,`RPC '${t}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const E=function(I){const V=I.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(V)>=0?V:g.UNKNOWN}(m.status);a(new _(E,m.message))}else a(new _(g.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new _(g.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{p(_t,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);p(_t,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",c,r,15)})}vo(t,e,r){const i=Is(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=df(),a=ff(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new pf({})),this.bo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const l=s.join("");p(_t,`Creating RPC '${t}' stream ${i}: ${l}`,u);const h=o.createWebChannel(l,u);let d=!1,m=!1;const E=new pg({co:I=>{m?p(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,I):(d||(p(_t,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),p(_t,`RPC '${t}' stream ${i} sending:`,I),h.send(I))},lo:()=>h.close()}),y=(I,V,C)=>{I.listen(V,S=>{try{C(S)}catch(O){setTimeout(()=>{throw O},0)}})};return y(h,Kr.EventType.OPEN,()=>{m||p(_t,`RPC '${t}' stream ${i} transport opened.`)}),y(h,Kr.EventType.CLOSE,()=>{m||(m=!0,p(_t,`RPC '${t}' stream ${i} transport closed`),E.Ro())}),y(h,Kr.EventType.ERROR,I=>{m||(m=!0,Vt(_t,`RPC '${t}' stream ${i} transport errored:`,I),E.Ro(new _(g.UNAVAILABLE,"The operation could not be completed")))}),y(h,Kr.EventType.MESSAGE,I=>{var V;if(!m){const C=I.data[0];R(!!C);const S=C,O=S.error||((V=S[0])===null||V===void 0?void 0:V.error);if(O){p(_t,`RPC '${t}' stream ${i} received error:`,O);const K=O.status;let L=function(Zh){const _a=nt[Zh];if(_a!==void 0)return bl(_a)}(K),pt=O.message;L===void 0&&(L=g.INTERNAL,pt="Unknown error status: "+K+" with message "+O.message),m=!0,E.Ro(new _(L,pt)),h.close()}else p(_t,`RPC '${t}' stream ${i} received:`,C),E.Vo(C)}}),y(a,gf.STAT_EVENT,I=>{I.stat===ba.PROXY?p(_t,`RPC '${t}' stream ${i} detected buffering proxy`):I.stat===ba.NOPROXY&&p(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.Ao()},0),E}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(){return typeof window<"u"?window:null}function ri(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n){return new Sm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,e,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=e,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,e-r);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,e,r,i,s,o,a,u){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Go(t,e)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():e&&e.code===g.RESOURCE_EXHAUSTED?(J(e.toString()),J("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===e&&this.s_(r,i)},r=>{t(()=>{const i=new _(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,e){const r=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget(()=>this.Uo===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yg extends mh{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=Dm(this.serializer,t),r=function(s){if(!("targetChange"in s))return P.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?Z(o.readTime):P.min()}(t);return this.listener.a_(e,r)}u_(t){const e={};e.database=hr(this.serializer),e.addTarget=function(s,o){let a;const u=o.target;if(a=fi(u)?{documents:Ul(s,u)}:{query:No(s,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Fl(s,o.resumeToken);const c=Us(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=ln(s,o.snapshotVersion.toTimestamp());const c=Us(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=bm(this.serializer,t);r&&(e.labels=r),this.e_(e)}c_(t){const e={};e.database=hr(this.serializer),e.removeTarget=t,this.e_(e)}}class Ig extends mh{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=xm(t.writeResults,t.commitTime),r=Z(t.commitTime);return this.listener.I_(r,e)}return R(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=hr(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>dr(this.serializer,r))};this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new _(g.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(g.UNKNOWN,i.toString())})}Co(t,e,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(g.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}async function Eg(n,t,e){var r;const i=T(n),{request:s,R_:o}=function(h,d,m){const E=No(h,d),y={},I=[];let V=0;return m.forEach(C=>{const S="aggregate_"+V++;y[S]=C.alias,C.aggregateType==="count"?I.push({alias:S,count:{}}):C.aggregateType==="avg"?I.push({alias:S,avg:{field:Zt(C.fieldPath)}}):C.aggregateType==="sum"&&I.push({alias:S,sum:{field:Zt(C.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:I,structuredQuery:E.structuredQuery},parent:E.parent},R_:y}}(i.serializer,function(h){const d=T(h);return d.Pe||(d.Pe=gl(d,h.explicitOrderBy)),d.Pe}(t),e),a=s.parent;i.connection.yo||delete s.parent;const u=(await i.Co("RunAggregationQuery",a,s,1)).filter(l=>!!l.result);R(u.length===1);const c=(r=u[0].result)===null||r===void 0?void 0:r.aggregateFields;return Object.keys(c).reduce((l,h)=>(l[o[h]]=c[h],l),{})}class wg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(J(e),this.f_=!1):p("OnlineStateTracker",e)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{me(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=T(u);c.C_.add(4),await Rn(c),c.M_.set("Unknown"),c.C_.delete(4),await kr(c)}(this))})}),this.M_=new wg(r,i)}}async function kr(n){if(me(n))for(const t of n.v_)await t(!0)}async function Rn(n){for(const t of n.v_)await t(!1)}function Hi(n,t){const e=T(n);e.D_.has(t.targetId)||(e.D_.set(t.targetId,t),$o(e)?jo(e):Sn(e).Ho()&&Ko(e,t))}function fr(n,t){const e=T(n),r=Sn(e);e.D_.delete(t),r.Ho()&&gh(e,t),e.D_.size===0&&(r.Ho()?r.Zo():me(e)&&e.M_.set("Unknown"))}function Ko(n,t){if(n.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(P.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Sn(n).u_(t)}function gh(n,t){n.x_.Oe(t),Sn(n).c_(t)}function jo(n){n.x_=new vm({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.D_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),Sn(n).start(),n.M_.g_()}function $o(n){return me(n)&&!Sn(n).jo()&&n.D_.size>0}function me(n){return T(n).C_.size===0}function ph(n){n.x_=void 0}async function Ag(n){n.D_.forEach((t,e)=>{Ko(n,t)})}async function Rg(n,t){ph(n),$o(n)?(n.M_.w_(t),jo(n)):n.M_.set("Unknown")}async function Pg(n,t,e){if(n.M_.set("Online"),t instanceof Ml&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(n,t)}catch(r){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ai(n,r)}else if(t instanceof ni?n.x_.$e(t):t instanceof kl?n.x_.Je(t):n.x_.Ge(t),!e.isEqual(P.min()))try{const r=await ah(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=s.D_.get(c);l&&s.D_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=s.D_.get(u);if(!l)return;s.D_.set(u,l.withResumeToken(it.EMPTY_BYTE_STRING,l.snapshotVersion)),gh(s,u);const h=new Kt(l.target,u,c,l.sequenceNumber);Ko(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){p("RemoteStore","Failed to raise snapshot:",r),await Ai(n,r)}}async function Ai(n,t,e){if(!de(t))throw t;n.C_.add(1),await Rn(n),n.M_.set("Offline"),e||(e=()=>ah(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await e(),n.C_.delete(1),await kr(n)})}function _h(n,t){return t().catch(e=>Ai(n,e,t))}async function Pn(n){const t=T(n),e=ue(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;Sg(t);)try{const i=await hg(t.localStore,r);if(i===null){t.b_.length===0&&e.Zo();break}r=i.batchId,Vg(t,i)}catch(i){await Ai(t,i)}yh(t)&&Ih(t)}function Sg(n){return me(n)&&n.b_.length<10}function Vg(n,t){n.b_.push(t);const e=ue(n);e.Ho()&&e.h_&&e.P_(t.mutations)}function yh(n){return me(n)&&!ue(n).jo()&&n.b_.length>0}function Ih(n){ue(n).start()}async function Cg(n){ue(n).E_()}async function Dg(n){const t=ue(n);for(const e of n.b_)t.P_(e.mutations)}async function xg(n,t,e){const r=n.b_.shift(),i=Co.from(r,t,e);await _h(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Pn(n)}async function bg(n,t){t&&ue(n).h_&&await async function(r,i){if(function(o){return xl(o)&&o!==g.ABORTED}(i.code)){const s=r.b_.shift();ue(r).Yo(),await _h(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Pn(r)}}(n,t),yh(n)&&Ih(n)}async function Pu(n,t){const e=T(n);e.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=me(e);e.C_.add(3),await Rn(e),r&&e.M_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3),await kr(e)}async function Ws(n,t){const e=T(n);t?(e.C_.delete(2),await kr(e)):t||(e.C_.add(2),await Rn(e),e.M_.set("Unknown"))}function Sn(n){return n.O_||(n.O_=function(e,r,i){const s=T(e);return s.A_(),new yg(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:Ag.bind(null,n),Io:Rg.bind(null,n),a_:Pg.bind(null,n)}),n.v_.push(async t=>{t?(n.O_.Yo(),$o(n)?jo(n):n.M_.set("Unknown")):(await n.O_.stop(),ph(n))})),n.O_}function ue(n){return n.N_||(n.N_=function(e,r,i){const s=T(e);return s.A_(),new Ig(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:Cg.bind(null,n),Io:bg.bind(null,n),T_:Dg.bind(null,n),I_:xg.bind(null,n)}),n.v_.push(async t=>{t?(n.N_.Yo(),await Pn(n)):(await n.N_.stop(),n.b_.length>0&&(p("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new Qo(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vn(n,t){if(J("AsyncQueue",`${t}: ${n}`),de(n))return new _(g.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||w.comparator(e.key,r.key):(e,r)=>w.comparator(e.key,r.key),this.keyedMap=Un(),this.sortedSet=new z(this.comparator)}static emptySet(t){return new tn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof tn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new tn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.B_=new z(w.comparator)}track(t){const e=t.doc.key,r=this.B_.get(e);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(e,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(e):t.type===1&&r.type===2?this.B_=this.B_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):A():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal((e,r)=>{t.push(r)}),t}}class fn{constructor(t,e,r,i,s,o,a,u,c){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new fn(t,e,tn.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Vr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.k_=void 0,this.listeners=[]}}class kg{constructor(){this.queries=new Wt(t=>pl(t),Vr),this.onlineState="Unknown",this.q_=new Set}}async function Wo(n,t){const e=T(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new Ng),i)try{s.k_=await e.onListen(r)}catch(o){const a=Vn(o,`Initialization of query '${Qe(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.Q_(e.onlineState),s.k_&&t.K_(s.k_)&&Yo(e)}async function Ho(n,t){const e=T(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function Mg(n,t){const e=T(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Yo(e)}function Fg(n,t,e){const r=T(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function Yo(n){n.q_.forEach(t=>{t.next()})}class Xo{constructor(t,e,r){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new fn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}H_(t){t=fn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t,e){this.Y_=t,this.byteLength=e}Z_(){return"metadata"in this.Y_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(t){this.serializer=t}hs(t){return Bt(this.serializer,t)}Ps(t){return t.metadata.exists?ql(this.serializer,t.document,!1):$.newNoDocument(this.hs(t.metadata.name),this.Is(t.metadata.readTime))}Is(t){return Z(t)}}class Lg{constructor(t,e,r){this.X_=t,this.localStore=e,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Th(t)}ea(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.Y_.namedQuery)this.queries.push(t.Y_.namedQuery);else if(t.Y_.documentMetadata){this.documents.push({metadata:t.Y_.documentMetadata}),t.Y_.documentMetadata.exists||++e;const r=F.fromString(t.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else t.Y_.document&&(this.documents[this.documents.length-1].document=t.Y_.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}ta(t){const e=new Map,r=new Vu(this.serializer);for(const i of t)if(i.metadata.queries){const s=r.hs(i.metadata.name);for(const o of i.metadata.queries){const a=(e.get(o)||b()).add(s);e.set(o,a)}}return e}async complete(){const t=await dg(this.localStore,new Vu(this.serializer),this.documents,this.X_.id),e=this.ta(this.documents);for(const r of this.queries)await fg(this.localStore,r,e.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:t}}}function Th(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t){this.key=t}}class wh{constructor(t){this.key=t}}class vh{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=b(),this.mutatedKeys=b(),this._a=yl(t),this.aa=new tn(this._a)}get ua(){return this.ia}ca(t,e){const r=e?e.la:new Su,i=e?e.aa:this.aa;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const d=i.get(l),m=Cr(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;d&&m?d.data.isEqual(m.data)?E!==y&&(r.track({type:3,doc:m}),I=!0):this.ha(d,m)||(r.track({type:2,doc:m}),I=!0,(u&&this._a(m,u)>0||c&&this._a(m,c)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),I=!0):d&&!m&&(r.track({type:1,doc:d}),I=!0,(u||c)&&(a=!0)),I&&(m?(o=o.add(m),s=y?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort((c,l)=>function(d,m){const E=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return E(d)-E(m)}(c.type,l.type)||this._a(c.doc,l.doc)),this.Pa(r);const o=e?this.Ia():[],a=this.oa.size===0&&this.current?1:0,u=a!==this.sa;return this.sa=a,s.length!==0||u?{snapshot:new fn(this.query,t.aa,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Su,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=b(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const e=[];return t.forEach(r=>{this.oa.has(r)||e.push(new wh(r))}),this.oa.forEach(r=>{t.has(r)||e.push(new Eh(r))}),e}da(t){this.ia=t.ls,this.oa=b();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return fn.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class Bg{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class qg{constructor(t){this.key=t,this.Ra=!1}}class Ug{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Wt(a=>pl(a),Vr),this.fa=new Map,this.ga=new Set,this.pa=new z(w.comparator),this.ya=new Map,this.wa=new Oo,this.Sa={},this.ba=new Map,this.Da=ke.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function zg(n,t){const e=na(n);let r,i;const s=e.ma.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await hn(e.localStore,vt(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Jo(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&Hi(e.remoteStore,o)}return i}async function Jo(n,t,e,r,i){n.va=(h,d,m)=>async function(y,I,V,C){let S=I.view.ca(V);S.Zi&&(S=await Ei(y.localStore,I.query,!1).then(({documents:L})=>I.view.ca(L,S)));const O=C&&C.targetChanges.get(I.targetId),K=I.view.applyChanges(S,y.isPrimaryClient,O);return Hs(y,I.targetId,K.Ta),K.snapshot}(n,h,d,m);const s=await Ei(n.localStore,t,!0),o=new vh(t,s.ls),a=o.ca(s.documents),u=br.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);Hs(n,e,c.Ta);const l=new Bg(t,e,o);return n.ma.set(t,l),n.fa.has(e)?n.fa.get(e).push(t):n.fa.set(e,[t]),c.snapshot}async function Gg(n,t){const e=T(n),r=e.ma.get(t),i=e.fa.get(r.targetId);if(i.length>1)return e.fa.set(r.targetId,i.filter(s=>!Vr(s,t))),void e.ma.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await dn(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),fr(e.remoteStore,r.targetId),mn(e,r.targetId)}).catch(he)):(mn(e,r.targetId),await dn(e.localStore,r.targetId,!0))}async function Kg(n,t,e){const r=ra(n);try{const i=await function(o,a){const u=T(o),c=H.now(),l=a.reduce((m,E)=>m.add(E.key),b());let h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",m=>{let E=Pt(),y=b();return u.ss.getEntries(m,l).next(I=>{E=I,E.forEach((V,C)=>{C.isValidDocument()||(y=y.add(V))})}).next(()=>u.localDocuments.getOverlayedDocuments(m,E)).next(I=>{h=I;const V=[];for(const C of a){const S=Im(C,h.get(C.key).overlayedDocument);S!=null&&V.push(new Ht(C.key,S,ol(S.value.mapValue),W.exists(!0)))}return u.mutationQueue.addMutationBatch(m,c,V,a)}).next(I=>{d=I;const V=I.applyToLocalDocumentSet(h,y);return u.documentOverlayCache.saveOverlays(m,I.batchId,V)})}).then(()=>({batchId:d.batchId,changes:Tl(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Sa[o.currentUser.toKey()];c||(c=new z(D)),c=c.insert(a,u),o.Sa[o.currentUser.toKey()]=c}(r,i.batchId,e),await Yt(r,i.changes),await Pn(r.remoteStore)}catch(i){const s=Vn(i,"Failed to persist write");e.reject(s)}}async function Ah(n,t){const e=T(n);try{const r=await lg(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.ya.get(s);o&&(R(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?R(o.Ra):i.removedDocuments.size>0&&(R(o.Ra),o.Ra=!1))}),await Yt(e,r,t)}catch(r){await he(r)}}function Cu(n,t,e){const r=T(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=T(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&Yo(u)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function jg(n,t,e){const r=T(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new z(w.comparator);o=o.insert(s,$.newNoDocument(s,P.min()));const a=b().add(s),u=new xr(P.min(),new Map,new z(D),o,a);await Ah(r,u),r.pa=r.pa.remove(s),r.ya.delete(t),ea(r)}else await dn(r.localStore,t,!1).then(()=>mn(r,t,e)).catch(he)}async function $g(n,t){const e=T(n),r=t.batch.batchId;try{const i=await cg(e.localStore,t);ta(e,r,null),Zo(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Yt(e,i)}catch(i){await he(i)}}async function Qg(n,t,e){const r=T(n);try{const i=await function(o,a){const u=T(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(R(h!==null),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,t);ta(r,t,e),Zo(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Yt(r,i)}catch(i){await he(i)}}async function Wg(n,t){const e=T(n);me(e.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=T(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(e.localStore);if(r===-1)return void t.resolve();const i=e.ba.get(r)||[];i.push(t),e.ba.set(r,i)}catch(r){const i=Vn(r,"Initialization of waitForPendingWrites() operation failed");t.reject(i)}}function Zo(n,t){(n.ba.get(t)||[]).forEach(e=>{e.resolve()}),n.ba.delete(t)}function ta(n,t,e){const r=T(n);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function mn(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.fa.get(t))n.ma.delete(r),e&&n.Va.Fa(r,e);n.fa.delete(t),n.isPrimaryClient&&n.wa.Rr(t).forEach(r=>{n.wa.containsKey(r)||Rh(n,r)})}function Rh(n,t){n.ga.delete(t.path.canonicalString());const e=n.pa.get(t);e!==null&&(fr(n.remoteStore,e),n.pa=n.pa.remove(t),n.ya.delete(e),ea(n))}function Hs(n,t,e){for(const r of e)r instanceof Eh?(n.wa.addReference(r.key,t),Hg(n,r)):r instanceof wh?(p("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,t),n.wa.containsKey(r.key)||Rh(n,r.key)):A()}function Hg(n,t){const e=t.key,r=e.path.canonicalString();n.pa.get(e)||n.ga.has(r)||(p("SyncEngine","New document in limbo: "+e),n.ga.add(r),ea(n))}function ea(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const t=n.ga.values().next().value;n.ga.delete(t);const e=new w(F.fromString(t)),r=n.Da.next();n.ya.set(r,new qg(e)),n.pa=n.pa.insert(e,r),Hi(n.remoteStore,new Kt(vt(wn(e.path)),r,"TargetPurposeLimboResolution",At._e))}}async function Yt(n,t,e){const r=T(n),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,t,e).then(c=>{if((c||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const l=Uo.Qi(u.targetId,c);s.push(l)}}))}),await Promise.all(o),r.Va.a_(i),await async function(u,c){const l=T(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(c,d=>f.forEach(d.ki,m=>l.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>f.forEach(d.qi,m=>l.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!de(h))throw h;p("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const m=l.ts.get(d),E=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(E);l.ts=l.ts.insert(d,y)}}}(r.localStore,s))}async function Yg(n,t){const e=T(n);if(!e.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const r=await oh(e.localStore,t);e.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(u=>{u.reject(new _(g.CANCELLED,o))})}),s.ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Yt(e,r._s)}}function Xg(n,t){const e=T(n),r=e.ya.get(t);if(r&&r.Ra)return b().add(r.key);{let i=b();const s=e.fa.get(t);if(!s)return i;for(const o of s){const a=e.ma.get(o);i=i.unionWith(a.view.ua)}return i}}async function Jg(n,t){const e=T(n),r=await Ei(e.localStore,t.query,!0),i=t.view.da(r);return e.isPrimaryClient&&Hs(e,t.targetId,i.Ta),i}async function Zg(n,t){const e=T(n);return lh(e.localStore,t).then(r=>Yt(e,r))}async function tp(n,t,e,r){const i=T(n),s=await function(a,u){const c=T(a),l=T(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Cn(h,u).next(d=>d?c.localDocuments.getDocuments(h,d):f.resolve(null)))}(i.localStore,t);s!==null?(e==="pending"?await Pn(i.remoteStore):e==="acknowledged"||e==="rejected"?(ta(i,t,r||null),Zo(i,t),function(a,u){T(T(a).mutationQueue).Fn(u)}(i.localStore,t)):A(),await Yt(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function ep(n,t){const e=T(n);if(na(e),ra(e),t===!0&&e.Ca!==!0){const r=e.sharedClientState.getAllActiveQueryTargets(),i=await Du(e,r.toArray());e.Ca=!0,await Ws(e.remoteStore,!0);for(const s of i)Hi(e.remoteStore,s)}else if(t===!1&&e.Ca!==!1){const r=[];let i=Promise.resolve();e.fa.forEach((s,o)=>{e.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(mn(e,o),dn(e.localStore,o,!0))),fr(e.remoteStore,o)}),await i,await Du(e,r),function(o){const a=T(o);a.ya.forEach((u,c)=>{fr(a.remoteStore,c)}),a.wa.Vr(),a.ya=new Map,a.pa=new z(w.comparator)}(e),e.Ca=!1,await Ws(e.remoteStore,!1)}}async function Du(n,t,e){const r=T(n),i=[],s=[];for(const o of t){let a;const u=r.fa.get(o);if(u&&u.length!==0){a=await hn(r.localStore,vt(u[0]));for(const c of u){const l=r.ma.get(c),h=await Jg(r,l);h.snapshot&&s.push(h.snapshot)}}else{const c=await ch(r.localStore,o);a=await hn(r.localStore,c),await Jo(r,Ph(c),o,!1,a.resumeToken)}i.push(a)}return r.Va.a_(s),i}function Ph(n){return ml(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function np(n){return function(e){return T(T(e).persistence).Bi()}(T(n).localStore)}async function rp(n,t,e,r){const i=T(n);if(i.Ca)return void p("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(t);if(s&&s.length>0)switch(e){case"current":case"not-current":{const o=await lh(i.localStore,_l(s[0])),a=xr.createSynthesizedRemoteEventForCurrentChange(t,e==="current",it.EMPTY_BYTE_STRING);await Yt(i,o,a);break}case"rejected":await dn(i.localStore,t,!0),mn(i,t,r);break;default:A()}}async function ip(n,t,e){const r=na(n);if(r.Ca){for(const i of t){if(r.fa.has(i)){p("SyncEngine","Adding an already active target "+i);continue}const s=await ch(r.localStore,i),o=await hn(r.localStore,s);await Jo(r,Ph(s),o.targetId,!1,o.resumeToken),Hi(r.remoteStore,o)}for(const i of e)r.fa.has(i)&&await dn(r.localStore,i,!1).then(()=>{fr(r.remoteStore,i),mn(r,i)}).catch(he)}}function na(n){const t=T(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ah.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jg.bind(null,t),t.Va.a_=Mg.bind(null,t.eventManager),t.Va.Fa=Fg.bind(null,t.eventManager),t}function ra(n){const t=T(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$g.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Qg.bind(null,t),t}function sp(n,t,e){const r=T(n);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(m,E){const y=T(m),I=Z(E.createTime);return y.persistence.runTransaction("hasNewerBundle","readonly",V=>y.Kr.getBundleMetadata(V,E.id)).then(V=>!!V&&V.createTime.compareTo(I)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(m){return{taskState:"Success",documentsLoaded:m.totalDocuments,bytesLoaded:m.totalBytes,totalDocuments:m.totalDocuments,totalBytes:m.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(Th(u));const c=new Lg(u,s.localStore,o.serializer);let l=await o.Ma();for(;l;){const d=await c.ea(l);d&&a._updateProgress(d),l=await o.Ma()}const h=await c.complete();return await Yt(s,h.ra,void 0),await function(m,E){const y=T(m);return y.persistence.runTransaction("Save bundle","readwrite",I=>y.Kr.saveBundleMetadata(I,E))}(s.localStore,u),a._completeWith(h.progress),Promise.resolve(h.na)}catch(u){return Vt("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,t,e).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class gn{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Nr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return sh(this.persistence,new ih,t.initialUser,this.serializer)}createPersistence(t){return new Lo(Wi.jr,this.serializer)}createSharedClientState(t){return new dh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class op extends gn{constructor(t){super(),this.cacheSizeBytes=t}createGarbageCollectionScheduler(t,e){R(this.persistence.referenceDelegate instanceof Ti);const r=this.persistence.referenceDelegate.garbageCollector;return new Zl(r,t.asyncQueue,e)}createPersistence(t){const e=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new Lo(r=>Ti.jr(r,e),this.serializer)}}class ia extends gn{constructor(t,e,r){super(),this.xa=t,this.cacheSizeBytes=e,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.xa.initialize(this,t),await ra(this.xa.syncEngine),await Pn(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(t){return sh(this.persistence,new ih,t.initialUser,this.serializer)}createGarbageCollectionScheduler(t,e){const r=this.persistence.referenceDelegate.garbageCollector;return new Zl(r,t.asyncQueue,e)}createIndexBackfillerScheduler(t,e){const r=new bf(e,this.persistence);return new xf(t.asyncQueue,r)}createPersistence(t){const e=qo(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new Bo(this.synchronizeTabs,e,t.clientId,r,t.asyncQueue,fh(),ri(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(t){return new dh}}class Sh extends ia{constructor(t,e){super(t,e,!1),this.xa=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.xa.syncEngine;this.sharedClientState instanceof ys&&(this.sharedClientState.syncEngine={Ys:tp.bind(null,e),Zs:rp.bind(null,e),Xs:ip.bind(null,e),Bi:np.bind(null,e),Js:Zg.bind(null,e)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await ep(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(t){const e=fh();if(!ys.D(e))throw new _(g.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=qo(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new ys(e,t.asyncQueue,r,t.clientId,t.initialUser)}}class Cn{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yg.bind(null,this.syncEngine),await Ws(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new kg}()}createDatastore(t){const e=Nr(t.databaseInfo.databaseId),r=function(s){return new _g(s)}(t.databaseInfo);return function(s,o,a,u){return new Tg(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new vg(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Cu(this.syncEngine,e,0),function(){return Ru.D()?new Ru:new mg}())}createSyncEngine(t,e){return function(i,s,o,a,u,c,l){const h=new Ug(i,s,o,a,u,c);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=T(e);p("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Rn(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(n,t=10240){let e=0;return{async read(){if(e<n.byteLength){const r={value:n.slice(e,e+t),done:!1};return e+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):J("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t,e){this.Ba=t,this.serializer=e,this.metadata=new rt,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const t=await this.qa();if(t===null)return null;const e=this.La.decode(t),r=Number(e);isNaN(r)&&this.Qa(`length string (${e}) is not valid number`);const i=await this.Ka(r);return new Og(JSON.parse(i),t.length+r)}$a(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const t=this.$a();t<0&&this.Qa("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Ka(t){for(;this.buffer.length<t;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const e=this.La.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Qa(t){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${t}`)}async Ua(){const t=await this.Ba.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new _(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(i,s){const o=T(i),a=hr(o.serializer)+"/documents",u={documents:s.map(d=>lr(o.serializer,d))},c=await o.Co("BatchGetDocuments",a,u,s.length),l=new Map;c.forEach(d=>{const m=Cm(o.serializer,d);l.set(m.key.toString(),m)});const h=[];return s.forEach(d=>{const m=l.get(d.toString());R(!!m),h.push(m)}),h}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new An(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=w.fromPath(r);this.mutations.push(new So(i,this.precondition(i)))}),await async function(r,i){const s=T(r),o=hr(s.serializer)+"/documents",a={writes:i.map(u=>dr(s.serializer,u))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw A();e=P.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new _(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(P.min())?W.exists(!1):W.updateTime(e):W.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(P.min()))throw new _(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return W.updateTime(e)}return W.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t,e,r,i,s){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new Go(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const t=new up(this.datastore),e=this.za(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(t){try{const e=this.updateFunction(t);return!Pr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ja(t){this.Wa>0&&this.Ha(t)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(t)}Ha(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!xl(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=$c.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{p("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(p("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Vn(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ii(n,t){n.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await oh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ys(n,t){n.asyncQueue.verifyOperationInProgress();const e=await sa(n);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>Pu(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Pu(t.remoteStore,s)),n._onlineComponents=t}function Vh(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function sa(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){p("FirestoreClient","Using user provided OfflineComponentProvider");try{await ii(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Vh(e))throw e;Vt("Error using user provided cache. Falling back to memory cache: "+e),await ii(n,new gn)}}else p("FirestoreClient","Using default OfflineComponentProvider"),await ii(n,new gn);return n._offlineComponents}async function Xi(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(p("FirestoreClient","Using user provided OnlineComponentProvider"),await Ys(n,n._uninitializedComponentsProvider._online)):(p("FirestoreClient","Using default OnlineComponentProvider"),await Ys(n,new Cn))),n._onlineComponents}function Ch(n){return sa(n).then(t=>t.persistence)}function Dn(n){return sa(n).then(t=>t.localStore)}function Dh(n){return Xi(n).then(t=>t.remoteStore)}function oa(n){return Xi(n).then(t=>t.syncEngine)}function xh(n){return Xi(n).then(t=>t.datastore)}async function pn(n){const t=await Xi(n),e=t.eventManager;return e.onListen=zg.bind(null,t.syncEngine),e.onUnlisten=Gg.bind(null,t.syncEngine),e}function hp(n){return n.asyncQueue.enqueue(async()=>{const t=await Ch(n),e=await Dh(n);return t.setNetworkEnabled(!0),function(i){const s=T(i);return s.C_.delete(0),kr(s)}(e)})}function dp(n){return n.asyncQueue.enqueue(async()=>{const t=await Ch(n),e=await Dh(n);return t.setNetworkEnabled(!1),async function(i){const s=T(i);s.C_.add(0),await Rn(s),s.M_.set("Offline")}(e)})}function fp(n,t){const e=new rt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,l){const h=T(c);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new _(g.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Vn(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await Dn(n),t,e)),e.promise}function bh(n,t,e={}){const r=new rt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const l=new Yi({next:d=>{o.enqueueAndForget(()=>Ho(s,h));const m=d.docs.has(a);!m&&d.fromCache?c.reject(new _(g.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&u&&u.source==="server"?c.reject(new _(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Xo(wn(a.path),l,{includeMetadataChanges:!0,J_:!0});return Wo(s,h)}(await pn(n),n.asyncQueue,t,e,r)),r.promise}function mp(n,t){const e=new rt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Ei(i,s,!0),u=new vh(s,a.ls),c=u.ca(a.documents),l=u.applyChanges(c,!1);o.resolve(l.snapshot)}catch(a){const u=Vn(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await Dn(n),t,e)),e.promise}function Nh(n,t,e={}){const r=new rt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const l=new Yi({next:d=>{o.enqueueAndForget(()=>Ho(s,h)),d.fromCache&&u.source==="server"?c.reject(new _(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Xo(a,l,{includeMetadataChanges:!0,J_:!0});return Wo(s,h)}(await pn(n),n.asyncQueue,t,e,r)),r.promise}function gp(n,t){const e=new Yi(t);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).q_.add(s),s.next()}(await pn(n),e)),()=>{e.Na(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).q_.delete(s)}(await pn(n),e))}}function pp(n,t,e,r){const i=function(o,a){let u;return u=typeof o=="string"?Nl().encode(o):o,function(l,h){return new ap(l,h)}(function(l,h){if(l instanceof Uint8Array)return xu(l,h);if(l instanceof ArrayBuffer)return xu(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(e,Nr(t));n.asyncQueue.enqueueAndForget(async()=>{sp(await oa(n),i,r)})}function _p(n,t){return n.asyncQueue.enqueue(async()=>function(r,i){const s=T(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Kr.getNamedQuery(o,i))}(await Dn(n),t))}function yp(n,t){return n.asyncQueue.enqueue(async()=>async function(r,i){const s=T(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",u=>o.getFieldIndexes(u).next(c=>function(h,d,m,E,y){h=[...h],d=[...d],h.sort(m),d.sort(m);const I=h.length,V=d.length;let C=0,S=0;for(;C<V&&S<I;){const O=m(h[S],d[C]);O<0?y(h[S++]):O>0?E(d[C++]):(C++,S++)}for(;C<V;)E(d[C++]);for(;S<I;)y(h[S++])}(c,i,Sf,l=>{a.push(o.addFieldIndex(u,l))},l=>{a.push(o.deleteFieldIndex(u,l))})).next(()=>f.waitFor(a)))}(await Dn(n),t))}function Ip(n,t){return n.asyncQueue.enqueue(async()=>function(r,i){T(r).es.$i=i}(await Dn(n),t))}function Tp(n){return n.asyncQueue.enqueue(async()=>function(e){const r=T(e),i=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",s=>i.deleteAllFieldIndexes(s))}(await Dn(n)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(n,t,e){if(!e)throw new _(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ep(n,t,e,r){if(t===!0&&r===!0)throw new _(g.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Nu(n){if(!w.isDocumentKey(n))throw new _(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ku(n){if(w.isDocumentKey(n))throw new _(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ji(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":A()}function k(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new _(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ji(n);throw new _(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Mh(n,t){if(t<=0)throw new _(g.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new _(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ep("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kh((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new _(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new _(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new _(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Mr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new If;switch(r.type){case"firstParty":return new vf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=bu.get(e);r&&(p("ComponentProvider","Removing Datastore"),bu.delete(e),r.terminate())}(this),Promise.resolve()}}function wp(n,t,e,r={}){var i;const s=(n=k(n,Mr))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Vt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ot.MOCK_USER;else{a=ed(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new _(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ot(c)}n._authCredentials=new Tf(new Kc(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new gt(this.firestore,t,this._query)}}class tt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new tt(this.firestore,t,this._key)}}class qt extends gt{constructor(t,e,r){super(t,e,wn(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new tt(this.firestore,null,new w(t))}withConverter(t){return new qt(this.firestore,t,this._path)}}function i_(n,t,...e){if(n=at(n),aa("collection","path",t),n instanceof Mr){const r=F.fromString(t,...e);return ku(r),new qt(n,null,r)}{if(!(n instanceof tt||n instanceof qt))throw new _(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(t,...e));return ku(r),new qt(n.firestore,null,r)}}function s_(n,t){if(n=k(n,Mr),aa("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new _(g.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new gt(n,null,function(r){return new Qt(F.emptyPath(),r)}(t))}function vp(n,t,...e){if(n=at(n),arguments.length===1&&(t=$c.newId()),aa("doc","path",t),n instanceof Mr){const r=F.fromString(t,...e);return Nu(r),new tt(n,null,new w(r))}{if(!(n instanceof tt||n instanceof qt))throw new _(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(t,...e));return Nu(r),new tt(n.firestore,n instanceof qt?n.converter:null,new w(r))}}function o_(n,t){return n=at(n),t=at(t),(n instanceof tt||n instanceof qt)&&(t instanceof tt||t instanceof qt)&&n.firestore===t.firestore&&n.path===t.path&&n.converter===t.converter}function Fh(n,t){return n=at(n),t=at(t),n instanceof gt&&t instanceof gt&&n.firestore===t.firestore&&Vr(n._query,t._query)&&n.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Go(this,"async_queue_retry"),this.iu=()=>{const e=ri();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const t=ri();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=ri();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const e=new rt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!de(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const e=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw J("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=e,e}enqueueAfterDelay(t,e,r){this.su(),this.ru.indexOf(t)>-1&&(e=0);const i=Qo.createAndSchedule(this,t,e,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&A()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Xa)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}function Xs(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Rp{constructor(){this._progressObserver={},this._taskCompletionResolver=new rt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,r){this._progressObserver={next:t,error:e,complete:r}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=-1;class G extends Mr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Ap}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Oh(this),this._firestoreClient.terminate()}}function u_(n,t,e){e||(e="(default)");const r=qu(n,"firestore");if(r.isInitialized(e)){const i=r.getImmediate({identifier:e}),s=r.getOptions(e);if(Uu(s,t))return i;throw new _(g.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new _(g.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:e})}function c_(n,t){const e=typeof n=="object"?n:nd(),r=typeof n=="string"?n:t||"(default)",i=qu(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=rd("firestore");s&&wp(i,...s)}return i}function et(n){return n._firestoreClient||Oh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Oh(n){var t,e,r;const i=n._freezeSettings(),s=function(a,u,c,l){return new Jf(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,kh(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new lp(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function l_(n,t){Bh(n=k(n,G));const e=et(n);if(e._uninitializedComponentsProvider)throw new _(g.FAILED_PRECONDITION,"SDK cache is already specified.");Vt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Cn;return Lh(e,i,new ia(i,r.cacheSizeBytes,t==null?void 0:t.forceOwnership))}function h_(n){Bh(n=k(n,G));const t=et(n);if(t._uninitializedComponentsProvider)throw new _(g.FAILED_PRECONDITION,"SDK cache is already specified.");Vt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings(),r=new Cn;return Lh(t,r,new Sh(r,e.cacheSizeBytes))}function Lh(n,t,e){const r=new rt;return n.asyncQueue.enqueue(async()=>{try{await ii(n,e),await Ys(n,t),r.resolve()}catch(i){const s=i;if(!Vh(s))throw s;Vt("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function d_(n){if(n._initialized&&!n._terminated)throw new _(g.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new rt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!xt.D())return Promise.resolve();const i=r+"main";await xt.delete(i)}(qo(n._databaseId,n._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function f_(n){return function(e){const r=new rt;return e.asyncQueue.enqueueAndForget(async()=>Wg(await oa(e),r)),r.promise}(et(n=k(n,G)))}function m_(n){return hp(et(n=k(n,G)))}function g_(n){return dp(et(n=k(n,G)))}function p_(n){return id(n.app,"firestore",n._databaseId.database),n._delete()}function __(n,t){const e=et(n=k(n,G)),r=new Rp;return pp(e,n._databaseId,t,r),r}function y_(n,t){return _p(et(n=k(n,G)),t).then(e=>e?new gt(n,null,e.query):null)}function Bh(n){if(n._initialized||n._terminated)throw new _(g.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class Pp{constructor(t,e,r){this._userDataWriter=e,this._data=r,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Me(it.fromBase64String(t))}catch(e){throw new _(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Me(it.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new _(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function I_(){return new Oe("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new _(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new _(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=/^__.*__$/;class Vp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ht(t,this.data,this.fieldMask,e,this.fieldTransforms):new vn(t,this.data,e,this.fieldTransforms)}}class qh{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ht(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Uh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class Zi{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Zi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Ri(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(Uh(this.Iu)&&Sp.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Cp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Nr(t)}pu(t,e,r,i=!1){return new Zi({Iu:t,methodName:e,gu:r,path:Q.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Be(n){const t=n._freezeSettings(),e=Nr(n._databaseId);return new Cp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ts(n,t,e,r,i,s={}){const o=n.pu(s.merge||s.mergeFields?2:0,t,e,i);da("Data must be an object, but it was:",o,r);const a=Kh(r,o);let u,c;if(s.merge)u=new Rt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=gr(t,h,e);if(!o.contains(d))throw new _(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$h(l,d)||l.push(d)}u=new Rt(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new Vp(new ft(a),u,c)}class Fr extends Le{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Fr}}function zh(n,t,e){return new Zi({Iu:3,gu:t.settings.gu,methodName:n._methodName,du:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class ca extends Le{_toFieldTransform(t){return new Dr(t.path,new un)}isEqual(t){return t instanceof ca}}class Dp extends Le{constructor(t,e){super(t),this.yu=e}_toFieldTransform(t){const e=zh(this,t,!0),r=this.yu.map(s=>qe(s,e)),i=new De(r);return new Dr(t.path,i)}isEqual(t){return this===t}}class xp extends Le{constructor(t,e){super(t),this.yu=e}_toFieldTransform(t){const e=zh(this,t,!0),r=this.yu.map(s=>qe(s,e)),i=new xe(r);return new Dr(t.path,i)}isEqual(t){return this===t}}class bp extends Le{constructor(t,e){super(t),this.wu=e}_toFieldTransform(t){const e=new cn(t.serializer,Al(t.serializer,this.wu));return new Dr(t.path,e)}isEqual(t){return this===t}}function la(n,t,e,r){const i=n.pu(1,t,e);da("Data must be an object, but it was:",i,r);const s=[],o=ft.empty();fe(r,(u,c)=>{const l=es(t,u,e);c=at(c);const h=i.Ru(l);if(c instanceof Fr)s.push(l);else{const d=qe(c,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Rt(s);return new qh(o,a,i.fieldTransforms)}function ha(n,t,e,r,i,s){const o=n.pu(1,t,e),a=[gr(t,r,e)],u=[i];if(s.length%2!=0)throw new _(g.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(gr(t,s[d])),u.push(s[d+1]);const c=[],l=ft.empty();for(let d=a.length-1;d>=0;--d)if(!$h(c,a[d])){const m=a[d];let E=u[d];E=at(E);const y=o.Ru(m);if(E instanceof Fr)c.push(m);else{const I=qe(E,y);I!=null&&(c.push(m),l.set(m,I))}}const h=new Rt(c);return new qh(l,h,o.fieldTransforms)}function Gh(n,t,e,r=!1){return qe(e,n.pu(r?4:3,t))}function qe(n,t){if(jh(n=at(n)))return da("Unsupported field value:",t,n),Kh(n,t);if(n instanceof Le)return function(r,i){if(!Uh(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=qe(a,i.Vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Al(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=H.fromDate(r);return{timestampValue:ln(i.serializer,s)}}if(r instanceof H){const s=new H(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ln(i.serializer,s)}}if(r instanceof ua)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Me)return{bytesValue:Fl(i.serializer,r._byteString)};if(r instanceof tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:bo(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Ji(r)}`)}(n,t)}function Kh(n,t){const e={};return rl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):fe(n,(r,i)=>{const s=qe(i,t.Eu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function jh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof H||n instanceof ua||n instanceof Me||n instanceof tt||n instanceof Le)}function da(n,t,e){if(!jh(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Ji(e);throw r==="an object"?t.mu(n+" a custom object"):t.mu(n+" "+r)}}function gr(n,t,e){if((t=at(t))instanceof Oe)return t._internalPath;if(typeof t=="string")return es(n,t);throw Ri("Field path arguments must be of type string or ",n,!1,void 0,e)}const Np=new RegExp("[~\\*/\\[\\]]");function es(n,t,e){if(t.search(Np)>=0)throw Ri(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Oe(...t.split("."))._internalPath}catch{throw Ri(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ri(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new _(g.INVALID_ARGUMENT,a+n+u)}function $h(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ns("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class kp extends pr{data(){return super.data()}}function ns(n,t){return typeof t=="string"?es(n,t):t instanceof Oe?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new _(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fa{}class Or extends fa{}function T_(n,t,...e){let r=[];t instanceof fa&&r.push(t),r=r.concat(e),function(s){const o=s.filter(u=>u instanceof xn).length,a=s.filter(u=>u instanceof Lr).length;if(o>1||o>0&&a>0)throw new _(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Lr extends Or{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Lr(t,e,r)}_apply(t){const e=this._parse(t);return Hh(t._query,e),new gt(t.firestore,t.converter,qs(t._query,e))}_parse(t){const e=Be(t.firestore);return function(s,o,a,u,c,l,h){let d;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new _(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ou(h,l);const m=[];for(const E of h)m.push(Fu(u,s,E));d={arrayValue:{values:m}}}else d=Fu(u,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ou(h,l),d=Gh(a,o,h,l==="in"||l==="not-in");return N.create(c,l,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function E_(n,t,e){const r=t,i=ns("where",n);return Lr._create(i,r,e)}class xn extends fa{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new xn(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:B.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)Hh(o,u),o=qs(o,u)}(t._query,e),new gt(t.firestore,t.converter,qs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function w_(...n){return n.forEach(t=>Yh("or",t)),xn._create("or",n)}function v_(...n){return n.forEach(t=>Yh("and",t)),xn._create("and",n)}class ma extends Or{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ma(t,e)}_apply(t){const e=function(i,s,o){if(i.startAt!==null)throw new _(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new _(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cr(s,o)}(t._query,this._field,this._direction);return new gt(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Qt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function A_(n,t="asc"){const e=t,r=ns("orderBy",n);return ma._create(r,e)}class rs extends Or{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new rs(t,e,r)}_apply(t){return new gt(t.firestore,t.converter,gi(t._query,this._limit,this._limitType))}}function R_(n){return Mh("limit",n),rs._create("limit",n,"F")}function P_(n){return Mh("limitToLast",n),rs._create("limitToLast",n,"L")}class is extends Or{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new is(t,e,r)}_apply(t){const e=Wh(t,this.type,this._docOrFields,this._inclusive);return new gt(t.firestore,t.converter,function(i,s){return new Qt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(t._query,e))}}function S_(...n){return is._create("startAt",n,!0)}function V_(...n){return is._create("startAfter",n,!1)}class ss extends Or{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new ss(t,e,r)}_apply(t){const e=Wh(t,this.type,this._docOrFields,this._inclusive);return new gt(t.firestore,t.converter,function(i,s){return new Qt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(t._query,e))}}function C_(...n){return ss._create("endBefore",n,!1)}function D_(...n){return ss._create("endAt",n,!0)}function Wh(n,t,e,r){if(e[0]=at(e[0]),e[0]instanceof pr)return function(s,o,a,u,c){if(!u)throw new _(g.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of Ze(s))if(h.field.isKeyField())l.push(Ve(o,u.key));else{const d=u.data.field(h.field);if(zi(d))throw new _(g.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const m=h.field.canonicalString();throw new _(g.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${m}' (used as the orderBy) does not exist.`)}l.push(d)}return new ae(l,c)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const i=Be(n.firestore);return function(o,a,u,c,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new _(g.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const m=[];for(let E=0;E<l.length;E++){const y=l[E];if(d[E].field.isKeyField()){if(typeof y!="string")throw new _(g.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof y}`);if(!Ro(o)&&y.indexOf("/")!==-1)throw new _(g.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${y}' contains a slash.`);const I=o.path.child(F.fromString(y));if(!w.isDocumentKey(I))throw new _(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const V=new w(I);m.push(Ve(a,V))}else{const I=Gh(u,c,y);m.push(I)}}return new ae(m,h)}(n._query,n.firestore._databaseId,i,t,e,r)}}function Fu(n,t,e){if(typeof(e=at(e))=="string"){if(e==="")throw new _(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ro(t)&&e.indexOf("/")!==-1)throw new _(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(F.fromString(e));if(!w.isDocumentKey(r))throw new _(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ve(n,new w(r))}if(e instanceof tt)return Ve(n,e._key);throw new _(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ji(e)}.`)}function Ou(n,t){if(!Array.isArray(n)||n.length===0)throw new _(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Hh(n,t){const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new _(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new _(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Yh(n,t){if(!(t instanceof Lr||t instanceof xn))throw new _(g.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Xh{convertValue(t,e="none"){switch(se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Y(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes($t(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw A()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return fe(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new ua(Y(t.latitude),Y(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Gi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(or(t));default:return null}}convertTimestamp(t){const e=ie(t);return new H(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=F.fromString(t);R(jl(r));const i=new Se(r.get(1),r.get(3)),s=new w(r.popFirst(5));return i.isEqual(e)||J(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class Mp extends Xh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Me(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new tt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n){return new mr("sum",gr("sum",n))}function b_(n){return new mr("avg",gr("average",n))}function Fp(){return new mr("count")}function N_(n,t){var e,r;return n instanceof mr&&t instanceof mr&&n.aggregateType===t.aggregateType&&((e=n._internalFieldPath)===null||e===void 0?void 0:e.canonicalString())===((r=t._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function k_(n,t){return Fh(n.query,t.query)&&Uu(n.data(),t.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _n extends pr{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new si(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ns("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class si extends _n{data(t={}){return super.data(t)}}class yn{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Ae(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new si(this._firestore,this._userDataWriter,r.key,r,new Ae(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new _(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new si(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ae(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new si(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ae(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Op(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Op(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}function M_(n,t){return n instanceof _n&&t instanceof _n?n._firestore===t._firestore&&n._key.isEqual(t._key)&&(n._document===null?t._document===null:n._document.isEqual(t._document))&&n._converter===t._converter:n instanceof yn&&t instanceof yn&&n._firestore===t._firestore&&Fh(n.query,t.query)&&n.metadata.isEqual(t.metadata)&&n._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(n){n=k(n,tt);const t=k(n.firestore,G);return bh(et(t),n._key).then(e=>ga(t,n,e))}class ge extends Xh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Me(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new tt(this.firestore,null,e)}}function O_(n){n=k(n,tt);const t=k(n.firestore,G),e=et(t),r=new ge(t);return fp(e,n._key).then(i=>new _n(t,r,n._key,i,new Ae(i!==null&&i.hasLocalMutations,!0),n.converter))}function L_(n){n=k(n,tt);const t=k(n.firestore,G);return bh(et(t),n._key,{source:"server"}).then(e=>ga(t,n,e))}function B_(n){n=k(n,gt);const t=k(n.firestore,G),e=et(t),r=new ge(t);return Qh(n._query),Nh(e,n._query).then(i=>new yn(t,r,n,i))}function q_(n){n=k(n,gt);const t=k(n.firestore,G),e=et(t),r=new ge(t);return mp(e,n._query).then(i=>new yn(t,r,n,i))}function U_(n){n=k(n,gt);const t=k(n.firestore,G),e=et(t),r=new ge(t);return Nh(e,n._query,{source:"server"}).then(i=>new yn(t,r,n,i))}function z_(n,t,e){n=k(n,tt);const r=k(n.firestore,G),i=os(n.converter,t,e);return Br(r,[ts(Be(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,W.none())])}function G_(n,t,e,...r){n=k(n,tt);const i=k(n.firestore,G),s=Be(i);let o;return o=typeof(t=at(t))=="string"||t instanceof Oe?ha(s,"updateDoc",n._key,t,e,r):la(s,"updateDoc",n._key,t),Br(i,[o.toMutation(n._key,W.exists(!0))])}function K_(n){return Br(k(n.firestore,G),[new An(n._key,W.none())])}function j_(n,t){const e=k(n.firestore,G),r=vp(n),i=os(n.converter,t);return Br(e,[ts(Be(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,W.exists(!1))]).then(()=>r)}function $_(n,...t){var e,r,i;n=at(n);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Xs(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Xs(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,c,l;if(n instanceof tt)c=k(n.firestore,G),l=wn(n._key.path),u={next:h=>{t[o]&&t[o](ga(c,n,h))},error:t[o+1],complete:t[o+2]};else{const h=k(n,gt);c=k(h.firestore,G),l=h._query;const d=new ge(c);u={next:m=>{t[o]&&t[o](new yn(c,d,h,m))},error:t[o+1],complete:t[o+2]},Qh(n._query)}return function(d,m,E,y){const I=new Yi(y),V=new Xo(m,I,E);return d.asyncQueue.enqueueAndForget(async()=>Wo(await pn(d),V)),()=>{I.Na(),d.asyncQueue.enqueueAndForget(async()=>Ho(await pn(d),V))}}(et(c),l,a,u)}function Q_(n,t){return gp(et(n=k(n,G)),Xs(t)?t:{next:t})}function Br(n,t){return function(r,i){const s=new rt;return r.asyncQueue.enqueueAndForget(async()=>Kg(await oa(r),i,s)),s.promise}(et(n),t)}function ga(n,t,e){const r=e.docs.get(t._key),i=new ge(n);return new _n(n,i,t._key,r,new Ae(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(n){return Lp(n,{count:Fp()})}function Lp(n,t){const e=k(n.firestore,G),r=et(e),i=function(o,a){const u=[];for(const c in o)Object.prototype.hasOwnProperty.call(o,c)&&u.push(a(o[c],c,o));return u}(t,(s,o)=>new Tm(o,s.aggregateType,s._internalFieldPath));return function(o,a,u){const c=new rt;return o.asyncQueue.enqueueAndForget(async()=>{try{const l=await xh(o);c.resolve(Eg(l,a,u))}catch(l){c.reject(l)}}),c.promise}(r,n._query,i).then(s=>function(a,u,c){const l=new ge(a);return new Pp(u,l,c)}(e,n,s))}class Bp{constructor(t){this.kind="memory",this._onlineComponentProvider=new Cn,t!=null&&t.garbageCollector?this._offlineComponentProvider=t.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=new gn}toJSON(){return{kind:this.kind}}}class qp{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=jp(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class Up{constructor(){this.kind="memoryEager",this._offlineComponentProvider=new gn}toJSON(){return{kind:this.kind}}}class zp{constructor(t){this.kind="memoryLru",this._offlineComponentProvider=new op(t)}toJSON(){return{kind:this.kind}}}function H_(){return new Up}function Y_(n){return new zp(n==null?void 0:n.cacheSizeBytes)}function X_(n){return new Bp(n)}function J_(n){return new qp(n)}class Gp{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=new Cn,this._offlineComponentProvider=new ia(this._onlineComponentProvider,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}class Kp{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=new Cn,this._offlineComponentProvider=new Sh(this._onlineComponentProvider,t==null?void 0:t.cacheSizeBytes)}}function jp(n){return new Gp(n==null?void 0:n.forceOwnership)}function Z_(){return new Kp}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Be(t)}set(t,e,r){this._verifyNotCommitted();const i=ee(t,this._firestore),s=os(i.converter,e,r),o=ts(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,W.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=ee(t,this._firestore);let o;return o=typeof(e=at(e))=="string"||e instanceof Oe?ha(this._dataReader,"WriteBatch.update",s._key,e,r,i):la(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(o.toMutation(s._key,W.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ee(t,this._firestore);return this._mutations=this._mutations.concat(new An(e._key,W.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new _(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ee(n,t){if((n=at(n)).firestore!==t)throw new _(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=Be(e)}get(e){const r=ee(e,this._firestore),i=new Mp(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return A();const o=s[0];if(o.isFoundDocument())return new pr(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new pr(this._firestore,i,r._key,null,r.converter);throw A()})}set(e,r,i){const s=ee(e,this._firestore),o=os(s.converter,r,i),a=ts(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(e,r,i,...s){const o=ee(e,this._firestore);let a;return a=typeof(r=at(r))=="string"||r instanceof Oe?ha(this._dataReader,"Transaction.update",o._key,r,i,s):la(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(e){const r=ee(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=ee(t,this._firestore),r=new ge(this._firestore);return super.get(t).then(i=>new _n(this._firestore,r,e._key,i._document,new Ae(!1,!1),e.converter))}}function ey(n,t,e){n=k(n,G);const r=Object.assign(Object.assign({},$p),e);return function(s){if(s.maxAttempts<1)throw new _(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new rt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await xh(s);new cp(s.asyncQueue,c,a,o,u).run()}),u.promise}(et(n),i=>t(new Wp(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(){return new Fr("deleteField")}function ry(){return new ca("serverTimestamp")}function iy(...n){return new Dp("arrayUnion",n)}function sy(...n){return new xp("arrayRemove",n)}function oy(n){return new bp("increment",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n){return et(n=k(n,G)),new Qp(n,t=>Br(n,t))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(n,t){var e;const r=et(n=k(n,G));if(!r._uninitializedComponentsProvider||((e=r._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offlineKind)==="memory")return Vt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const i=function(o){const a=typeof o=="string"?function(l){try{return JSON.parse(l)}catch(h){throw new _(g.INVALID_ARGUMENT,"Failed to parse JSON: "+(h==null?void 0:h.message))}}(o):o,u=[];if(Array.isArray(a.indexes))for(const c of a.indexes){const l=Lu(c,"collectionGroup"),h=[];if(Array.isArray(c.fields))for(const d of c.fields){const m=es("setIndexConfiguration",Lu(d,"fieldPath"));d.arrayConfig==="CONTAINS"?h.push(new Pe(m,2)):d.order==="ASCENDING"?h.push(new Pe(m,0)):d.order==="DESCENDING"&&h.push(new Pe(m,1))}u.push(new rn(rn.UNKNOWN_ID,l,h,sn.empty()))}return u}(t);return yp(r,i)}function Lu(n,t){if(typeof n[t]!="string")throw new _(g.INVALID_ARGUMENT,"Missing string value for: "+t);return n[t]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t){this._client=t,this.type="PersistentCacheIndexManager"}}function cy(n){var t;n=k(n,G);const e=Bu.get(n);if(e)return e;const r=et(n);if(((t=r._uninitializedComponentsProvider)===null||t===void 0?void 0:t._offlineKind)!=="persistent")return null;const i=new Hp(r);return Bu.set(n,i),i}function ly(n){Jh(n,!0)}function hy(n){Jh(n,!1)}function dy(n){n._client.verifyNotTerminated(),Tp(n._client).then(t=>p("deleting all persistent cache indexes succeeded")).catch(t=>Vt("deleting all persistent cache indexes failed",t))}function Jh(n,t){n._client.verifyNotTerminated(),Ip(n._client,t).then(e=>p(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>Vt(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}const Bu=new WeakMap;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(t){return pa.instance.onExistenceFilterMismatch(t)}}class pa{constructor(){this.Su=new Map}static get instance(){return Yr||(Yr=new pa,function(e){if(pi)throw new Error("a TestingHooksSpi instance is already set");pi=e}(Yr)),Yr}tt(t){this.Su.forEach(e=>e(t))}onExistenceFilterMismatch(t){const e=Symbol(),r=this.Su;return r.set(e,t),()=>r.delete(e)}}let Yr=null;(function(t,e=!0){(function(i){En=i})(sd),od(new ad("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new G(new Ef(r.getProvider("auth-internal")),new Af(r.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new _(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Se(c.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ya(Na,"4.3.2",t),ya(Na,"4.3.2","esm2017")})();export{Xh as AbstractUserDataWriter,mr as AggregateField,Pp as AggregateQuerySnapshot,Me as Bytes,a_ as CACHE_SIZE_UNLIMITED,qt as CollectionReference,tt as DocumentReference,_n as DocumentSnapshot,Oe as FieldPath,Le as FieldValue,G as Firestore,_ as FirestoreError,ua as GeoPoint,Rp as LoadBundleTask,Hp as PersistentCacheIndexManager,gt as Query,xn as QueryCompositeFilterConstraint,Or as QueryConstraint,si as QueryDocumentSnapshot,ss as QueryEndAtConstraint,Lr as QueryFieldFilterConstraint,rs as QueryLimitConstraint,ma as QueryOrderByConstraint,yn as QuerySnapshot,is as QueryStartAtConstraint,Ae as SnapshotMetadata,H as Timestamp,Wp as Transaction,Qp as WriteBatch,$c as _AutoId,it as _ByteString,Se as _DatabaseId,w as _DocumentKey,Zp as _EmptyAppCheckTokenProvider,If as _EmptyAuthCredentialsProvider,Q as _FieldPath,fy as _TestingHooks,k as _cast,Jp as _debugAssert,e_ as _isBase64Available,Vt as _logWarn,Ep as _validateIsNotUsedTogether,j_ as addDoc,N_ as aggregateFieldEqual,k_ as aggregateQuerySnapshotEqual,v_ as and,sy as arrayRemove,iy as arrayUnion,b_ as average,d_ as clearIndexedDbPersistence,i_ as collection,s_ as collectionGroup,wp as connectFirestoreEmulator,Fp as count,dy as deleteAllPersistentCacheIndexes,K_ as deleteDoc,ny as deleteField,g_ as disableNetwork,hy as disablePersistentCacheIndexAutoCreation,vp as doc,I_ as documentId,l_ as enableIndexedDbPersistence,h_ as enableMultiTabIndexedDbPersistence,m_ as enableNetwork,ly as enablePersistentCacheIndexAutoCreation,D_ as endAt,C_ as endBefore,et as ensureFirestoreConfigured,Br as executeWrite,Lp as getAggregateFromServer,W_ as getCountFromServer,F_ as getDoc,O_ as getDocFromCache,L_ as getDocFromServer,B_ as getDocs,q_ as getDocsFromCache,U_ as getDocsFromServer,c_ as getFirestore,cy as getPersistentCacheIndexManager,oy as increment,u_ as initializeFirestore,R_ as limit,P_ as limitToLast,__ as loadBundle,H_ as memoryEagerGarbageCollector,X_ as memoryLocalCache,Y_ as memoryLruGarbageCollector,y_ as namedQuery,$_ as onSnapshot,Q_ as onSnapshotsInSync,w_ as or,A_ as orderBy,J_ as persistentLocalCache,Z_ as persistentMultipleTabManager,jp as persistentSingleTabManager,T_ as query,Fh as queryEqual,o_ as refEqual,ey as runTransaction,ry as serverTimestamp,z_ as setDoc,uy as setIndexConfiguration,Xp as setLogLevel,M_ as snapshotEqual,V_ as startAfter,S_ as startAt,x_ as sum,p_ as terminate,G_ as updateDoc,f_ as waitForPendingWrites,E_ as where,ay as writeBatch};
